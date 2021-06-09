//----------------------------------------
// My Extension Beginn
//----------------------------------------
var Web = 
{
	callbackFunc: null,
	client: null,
    stReq_timeout: null,
    stReq_time: 50000,
	AsyncMode: false,
	Header: "0"	
};



//--------------------------------------------------
// get contents of web page
//--------------------------------------------------
Web.getPage = function(b, data ) 
{
	//alert("getPage: " + b);
    try 
	{    
        if (Web.client != null) 
		{
            Web.client["destroy"]();
            Web.client = null;
        }
        Web.client = new XMLHttpRequest();
        if (Web.AsyncMode) 
		{
            //KeyHandler.setFocus(1);
            Web.stReq_timeout = setTimeout("Web.stopRequest()", Web.stReq_time);
            Web.client.onreadystatechange = function() 
			{
				alert("State changed to " + Web.client.readyState);
                if (Web.client.readyState == 4)
                {					
                    var c =  Web.recieveData(b);
				    //callback(c);
				}
            };
        }
		
		if ( !data )
		{
			//alert("GET url=" + b);
			Web.client.open("GET", b, Web.AsyncMode);
			//Web.client.setRequestHeader("User-Agent", "SmartTV");
			//Web.client.setRequestHeader("User-Agent", "Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.6) Gecko/20100627 Firefox/3.6.6");
			//Web.client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  			
			Web.client.send(null);
		}
		else
		{
			//alert("POST url=" + b);
			Web.client.open("POST", b, Web.AsyncMode);
			Web.client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            if (b.indexOf("ecostream") > 0 )
			{
				Web.client.setRequestHeader("Referer", b);
				Web.client.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			}
				
			Web.client.send(data);
		}
			
        if (!Web.AsyncMode) 
		{
            if ((Web.client.status == 302 || Web.client.status == 303) && Web.client.getResponseHeader("Location") != null) 
			{
				alert("forwad url");
                b = Web.client.getResponseHeader("Location");
                return Web.getPage(b);
            } 
			else 
			{
                if (Web.client.readyState == 4 && Web.client.status == 200) 
				{
					alert("response is there");
                    return Web.client.responseText;
				}
				else 
				{
				    alert("not ready");
                    return "";
				}
                
            }
        }
    } 
	catch (c) {}
	
};




Web.recieveData = function(a) 
{
	alert("receive: " + a);
	alert("web status =" + Web.client.status);
	
    clearTimeout(Web.stReq_timeout);
    if (Web.client.status == 200)
    {		
        var c = Web.client.responseText;
		//alert("response=" + c);
		return c;
	}
	else 
        setTimeout("Web.stopRequest()", 3000);       
};


Web.stopRequest = function() 
{
	alert("stop");
    clearTimeout(Web.stReq_timeout);
    if (Web.client != null) 
	{
        Web.client.abort();
       // Web.loadComplete();
    }
};


function sleep(milliseconds) 
{
  var start = new Date().getTime();
  alert("Bitte " + milliseconds/1000 + " Sekunden warten");
  for (var i = 0; i < 1e7; i++) 
  {
    if ((new Date().getTime() - start) > milliseconds)
	{
      break;
    }
  }
}


//--------------------------------------------------------------------
// get_from_streamcloud
//--------------------------------------------------------------------
function get_from_streamcloud(url)
{
	//alert("get_streamcloud url=" + url);
	
	var response = Web.getPage(url);
	
	if (response == null)
	{
	   //alert("get_streamcloud - response=null");
	   return null;	
    }	   

	var links = response.match(/<input type="hidden" name="id".*?value="(.*?)">/i);
	var id = links[1];

	links = response.match(/<input type="hidden" name="fname".*?alue="(.*?)">/i);
	var fname = links[1];
	
	//alert("get_streamcloud id="+ id + ", fname="+ fname);
	
	if ((fname == "") || (id == "") )
	{
	   alert("get_streamcloud -  no fname or no id");
	   return null;	
    }	
	   
	sleep(12000);
	
    var data = "op=download1" + "&usr_login="+'' +  "&id="+id + "&fname="+fname + 
	           "&referer="+'' + '&hash='+'' + '&imhuman=Weiter+zum+Video'; 
			   
    //alert("get_streamcloud postdata: " + data );
	response = Web.getPage( url, data );		
	
	//Get video URL
	if(links = response.match(/file: "(.*?)"/i))
	{
		var stream_url = links[1];
		//alert("get_streamcloud - found url=" + stream_url);
		return stream_url;
	}
  
	//alert("getstreamcloud - no video found\n" );
	return null;
}




//--------------------------------------------------------------------
// get_from_stream2k
//--------------------------------------------------------------------
function get_from_stream2k(url)
{
	//alert("getVideo: stream2k url=" + url);
	
	var response = Web.getPage(url);
	var links = response.match(/flashvars="config=(.*)/i);
	//alert("stream2k next url =" + links[1]);
	
	response = Web.getPage(links[1]);
	//alert(response);
	if (links = response.match(/<file>(.*)<\/file>/i))
	{
		//alert("getVideo: stream2k - found video url=" + links[1]);
		return links[1];
	}
  
	return null;
}

//--------------------------------------------------------------------
// get_from_stream2k
//--------------------------------------------------------------------
function get_from_stream2k_tv(url)
{
	//alert("getVideo: stream2k.tv url=" + url);
	
	var response = Web.getPage(url);
	//alert(response);
	if (links = response.match(/"file":"(.*)", "label"/i))
	{
		var stream_url = links[1].replace(/\\/g,'');
		//alert("getVideo: stream2k.tv - found video url=" + stream_url);
		return stream_url;
	}
  
	return null;
}

//--------------------------------------------------------------------
// get_from_mrfile
//--------------------------------------------------------------------
function get_from_mrfile(url)
{
	//alert("getVideo: mrfile url=" + url);
	
	var response = Web.getPage(url);
	//alert(response);
	if (links = response.match(/file: '([^']+)'/i))
	{
		var stream_url = links[1];
		//alert("getVideo: mrfile - found video url=" + stream_url);
		return stream_url;
	}
  
	return null;
}

//--------------------------------------------------------------------
// get_from_nowvideo
//--------------------------------------------------------------------	
function get_from_nowvideo(url)
{ 
	var links;
	//alert("getVideo: nowvideo url=" + url);
	
	var response = Web.getPage(url);
  
	if (links = response.match( /flashvars.filekey=([^;]+?);/ ))
		var filekey = links[1];
	if (links = response.match( /var {filekey}="([^"]+?)/ ))
		filekey = links[1];
	if (links = response.match( /flashvars.file="([^"]+?)/ ))
		var file = links[1];
	if (links = response.match( /flashvars.domain="(http[^"]+?)/ ))
		var domain = links[1];
	
	//alert("getVideo: nowvideo filekey="+filekey + " file="+file + " domain="+domain);
		
	if ((filekey != "") && (file != "") && (domain != ""))
	{
		var lurl = domain + "/api/player.api.php?cid2=undefined&cid3=undefined&cid=1&user=undefined&pass=undefined";
		lurl = lurl + '&key=' + filekey + '&file=' + file;
		//alert("getVideo: nowvideo lurl=" + lurl);
		response = Web.getPage(lurl);
		
		links = response.match( /url=([^&]+?)&/ );
		//alert("getVideo: nowvideo - found url=" + links[1]);
		return links[1];
	}
	else
		return null;
}



//--------------------------------------------------------------------
// get_from_divxstage
//--------------------------------------------------------------------	
function get_from_divxstage(url)
{
	var link;
	
	//alert("getVideo: divxstage url=" + url);
	
	var response = Web.getPage(url);
	//alert("getVideo: divxstage content=" + response);
	
	if (link = response.match( /flashvars.domain=\"(.+?)\"/ ))
		var host = link[1];
	if (link = response.match( /flashvars.file=\"(.+?)\"/ ))
	   var file = link[1];
	if( link = response.match( /flashvars.filekey=\"(.+?)\"/ ))
		var filekey = link[1];
	if ( link = response.match( /flashvars.cid=\"(.+?)\"/ ))
		var cid = link[1];

	//alert("getVideo: divxstage: host="+host + " file="+file + " filekey="+filekey + "cid="+cid);
	if ( !host || !file || !filekey || !cid )
		return null;
	
	var url1 = host + "/api/player.api.php?cid2=undefined&file=" + file + "&key=" + filekey +
	"&cid=" + cid + "&cid3=undefined&user=undefined&pass=undefined";
	//alert("divxstage url1=" + url1);
	
	response = Web.getPage(url1);
	//alert("getVideo: divxstage content1=" + response);		

	if ( link = response.match( /url=(.+?)&title=/ ))
	{
		//alert("getVideo: divx - found url=" + link[1]);
		return link[1];
	}
	
	return null;
	
}

function get_from_vidstream(url)
{
	//alert("getVideo: vidstream url=" + url);
	var response = Web.getPage(url);

	var links = response.match( /type="hidden" name="id".*?value="(.*?)"/ );
	var id =  links[1];
	links = response.match( /type="hidden" name="fname".*?value="(.*?)"/ );
	var fname =  links[1];
	links = response.match( /type="hidden" name="hash".*?value="(.*?)"/ );
	var hash =  links[1];
	
	//alert("getVideo: vidstream id="+id + " fname="+fname + " hash="+hash);
	
	if ((id != "") && ($fname != "") && ($hash != ""))
	{
		sleep(12000);
		var data = "op=download1" + "&usr_login=" + "id="+id + "fname="+fname +
		       "referer=" + "hash="+hash + "imhuman="+"Continue to video";
		response = Web.getPage(url, data);
										 
		//alert( "vidstream postresponse =" + response );
		if(links=response.match( /file: "(.*?)"/ ))
		{
			//alert("getVideo: vidstream - found url=" + links[1]);
			return links[1];
		}
	}
  
	//alert("no video found\n" );
	return null;                                   
	
}


function get_from_sharedsx(url)
{
	//alert("getVideo: sharedsx url=" + url);
	var response = Web.getPage(url);
	
	var	p1 = response.match(/type="hidden" name="hash".*?value="(.*?)"/);
	var p2 = response.match(/type="hidden" name="expires".*?value="(.*?)"/);
	var	p3 = response.match(/type="hidden" name="timestamp".*?value="(.*?)"/);
	if ( !p1 || !p2 || !p3 )
		return null;
		
	var data = "hash=" + p1[1] + "&expires="+p2[1] + "&timestamp="+p3[1];
	//alert("postdata=" + data);
	sleep(3000);
	
	response = Web.getPage(url,data);
	var stream_url = response.match(/data-url="(.*?)"/);
	if (stream_url)
		return stream_url[1];
	else
		return null;			
}


//--------------------------------------------------------------------
// get_from_ecostream
//--------------------------------------------------------------------	
function get_from_ecostream(url)
{
	var response = Web.getPage(url);
	//alert( "ecostream response=" + response );

	var id = response.match( /<div id="play" data-id="(.*?)">/ );
	var analytics = response.match( /anlytcs='(.*?)'/);
	var footerhash = response.match(/var footerhash='(.*?)'/);
	var superslots = response.match(/var superslots='(.*?)'/);
	
	if (!id || !footerhash || !superslots)
		return null;
	
	//sleep(5000);
	
	var tpm = footerhash[1] + superslots[1];
	var data = "id=" + id[1] + "&tpm=" + tpm;
	//alert( "ecostream postdata:" + data );
	var lurl = "http://www.ecostream.tv/js/ecoss.js";
	response = Web.getPage(lurl);
	//alert( "ecostream response2=" + response );

	lurl = response.match(/\$\.post\('([^']+)'[^;]+'#auth'\).html\(''\)/);
	//lurl = response.match(/post\(\'(.*?)\'.*?#play/);
	lurl = "http://www.ecostream.tv" + lurl[1];
	//alert( "Ecostream: lurl:" + lurl );
	
	//sleep(5000);
	response = Web.getPage(lurl, data);

	var stream_url = response.match(/"url":"(.*?)"/);
	if (stream_url)
	{
		var video_url = "http://www.ecostream.tv" + stream_url[1];
		//alert( "ecostream: video_url=" + video_url );
		return video_url;
	}
		
	return null;  
}

//--------------------------------------------------------------------
// get_from_primeshare
//--------------------------------------------------------------------	
function get_from_primeshare(url)
{
	//alert("getVideo: primeshare url=" + url);
	var response = Web.getPage(url);
	var hash = response.match(/<input type="hidden".*?name="hash".*?value="(.*?)"/);
	if (!hash)
	   return null;
   
    //alert("please wait 8 sec");
	sleep(8000);
	
	//alert("primeshare hash=" + hash[1]);
	var data = "hash=" + hash[1];
	response = Web.getPage(url,data);
	//alert("primesahre post data=" + response);
		
	var stream_url = response.match(/file: \'(.*?)\'/);
	if (stream_url)
	{
		alert("stream_url=" + stream_url[1]);
		return stream_url[1];
	}
	
	stream_url = response.match(/provider: 'stream',\n.*?url: '(http:\/\/.*?primeshare.tv.*?)'/);
	if (stream_url)
	{
		alert("stream_url=" + stream_url[1]);
		return stream_url[1];
	}
	
    stream_url = response.match(/'\$\.download\('(http:\/\/.*?primeshare.tv:443.*?)'/);
	if (stream_url)
	{
		alert("stream_url=" + stream_url[1]);
		return stream_url[1];
	}
	else
		return null;
	
}

//--------------------------------------------------------------------
// get_from_vidbull
//--------------------------------------------------------------------	
function get_from_vidbull(url)
{
	//alert("getVideo: vidbull url=" + url);
	var response = Web.getPage(url);
	//alert("vidbull response=" + response);
	var stream_url = response.match(/<source\s+src="(.*?)"/);
	if (stream_url)
	{
		//alert("stream_url=" + stream_url[1]);
		return stream_url[1];
	}
	else
		return null;
	
}

//--------------------------------------------------------------------
// get_from_promptfile
//--------------------------------------------------------------------	
function get_from_promptfile(url)
{
	//alert("getVideo: promptfile url=" + url);
	var response = Web.getPage(url);
	var chash = response.match(/type="hidden" name="chash" value="(.*?)"/);
	if (!chash)
		return null;
	
    var data = "chash=" + chash[1];
	//alert("promptfile data=" + data);
	response = Web.getPage(url,data);
	var stream_url = response.match(/url: '(.*?)'/);
	if (stream_url)
	{
		//alert("stream_url=" + stream_url[1]);
		return stream_url[1];
	}
	else
		return null;
	
}


//--------------------------------------------------------------------
// get_from_firedrive
//--------------------------------------------------------------------	
function get_from_firedrive(url)
{
	//alert("getVideo: firedrive url=" + url);
	var response = Web.getPage(url);
	var valkey = response.match(/name="confirm"\svalue="(.*?)"/);
	if (!valkey)
		return null;
		
	var data = "confirm=" + valkey[1];
	//alert("firedrive data=" + data);
	response = Web.getPage(url,data);
	var stream_url = response.match(/file:.*?'(.*?)'/);
	if (stream_url)
	{
		alert("stream_url=" + stream_url[1]);
		return stream_url[1];
	}
	else
	{
	    stream_url = response.match(/"ad_button"\shref="(.*?)"/);
		if (stream_url)
			return stream_url[1];
	}
	return null;
}


//--------------------------------------------------------------------
// get_from_putlocker
//--------------------------------------------------------------------	
function get_from_putlocker(url)
{
	alert("getVideo: putlocker url=" + url);
	var response = Web.getPage(url);
	var enter = response.match(/<input type="hidden" value="(.*?)" name="fuck_you">/); 
	if (!enter)
		return null;
	
	//var hoster = "http://www.putlocker.com/";  // or sockshare 
	var hoster = "http://www.sockshare.com/";    // or putlocker
	var data = "fuck_you=" + enter[1] + "&confirm=Close+Ad+and+Watch+as+Free+User";
	//alert("putlocker data=" + data);
	response = Web.getPage(url,data);
	var embed = response.match(/get_file.php.stream=(.*?)'\,/);
	if (embed)
	{
	    var url1 = hoster + "get_file.php?stream=" + embed[1];
		response = Web.getPage(url1);
		stream_url = response.match(/<media:content url="(.*?)"/);
		if ($stream_url)
		{
		    var video_url = stream_url[1].replace("&amp;","&");
		    return video_url;
		}
	}
	return null;	
}	

//--------------------------------------------------------------------
// get_from_cloudzilla
//--------------------------------------------------------------------	
function get_from_cloudzilla(url)
{
	//alert("getVideo: cloudzilla url=" + url);
	var response = Web.getPage(url);
	//alert("cloudzilla response=" + response);  
	var stream_url = response.match(/value="(http:\/\/neodrive.*?)"/);   
	if (stream_url)
	{
		alert("stream_url=" + stream_url[1]);
		return stream_url[1];
	}
	return null;	
}

//--------------------------------------------------------------------
// get_from_videowood
//--------------------------------------------------------------------	
function get_from_videowood(url)
{
	//alert("getVideo: videowood url=" + url);
	var response = Web.getPage(url);
	//alert("videowood response=" + response);
	var stream_url = response.match(/file: "(.*?.mp4)"/);
	if (stream_url)
	{
		//alert("stream_url=" + stream_url[1]);
		return stream_url[1];
	}
	
	return null;	
}


//--------------------------------------------------------------------
// get_from_streamin
//--------------------------------------------------------------------	
function get_from_streamin(url)
{
	alert("getVideo: streamin url=" + url);
	var response = Web.getPage(url);
	
	/*
	alert("getVideo: streamin response=" + response);
	p1 = response.match(/type="hidden" name="op".*?value="(.*?)"/);
	p2 = response.match(/type="hidden" name="id".*?value="(.*?)"/);
	p3 = response.match(/type="hidden" name="fname".*?value="(.*?)"/);
	p4 = response.match(/type="hidden" name="hash".*?value="(.*?)"/);
    if (!p1 || !p2 || !p3 || !p4)
	   return null;
	
	var data = "op="+ p1[1] + "&id=" + p2[1] + "&fname=" + p3[1] + "&hash=" + p4[1] + "&referer=" + "&usr_login=";
	//alert("getVideo: streamin data=" + data);
				
	sleep(5000);
	response = Web.getPage(url,data);
	alert("getVideo: streamin response2=" + response);
	*/
	
	var file = response.match(/file:\s"(.*?)"/);  
	var streamer = response.match(/streamer:\s*"([^"]+)",/);
	var stream_url = streamer[1].replace('1935','') + ' swfUrl=http://streamin.to/player/player.swf live=false swfVfy=1 playpath=' + file[1];
	if (stream_url)
	   return stream_url;

	return null;	
}

//--------------------------------------------------------------------
// get_from_bestreams
//--------------------------------------------------------------------	
function get_from_bestreams(url)
{
	alert("getVideo: bestreams url=" + url);
	var response = Web.getPage(url);
	//alert("getVideo: bestreams response=" + response);
	p1 = response.match(/type="hidden" name="op".*?value="(.*?)"/);
	p2 = response.match(/type="hidden" name="id".*?value="(.*?)"/);
	p3 = response.match(/type="hidden" name="fname".*?value="(.*?)"/);
	p4 = response.match(/type="hidden" name="hash".*?value="(.*?)"/);
    if (!p1 || !p2 || !p3 || !p4)
	   return null;
	
	var data = "op="+ p1[1] + "&id=" + p2[1] + "&fname=" + p3[1] + "&hash=" + p4[1] + "&imhuman=Proceed to video" + "&usr_login=";
	alert("getVideo: bestreams data=" + data);
				
	response = Web.getPage(url,data);
	alert("getVideo: streamin response2=" + response);
	
	var stream_url = response.match(/file: "(.*?)"/);  
	if (stream_url)
	   return stream_url[1];

	return null;	
}

//--------------------------------------------------------------------
// get_from_streamit
//--------------------------------------------------------------------	
function get_from_streamit(url)
{
	alert("getVideo: streamit url=" + url);
	var response = Web.getPage(url);
	//alert("streamit response=" + response);
	
	stream_url = response.match(/file:\s"(.*?)"/);
	if (stream_url)
	   return stream_url[1];

	return null;	
}

//--------------------------------------------------------------------
// get_from_realvid
//--------------------------------------------------------------------	
function get_from_realvid(url)
{
	//alert("getVideo: realvid url=" + url);
	var response = Web.getPage(url);
	//alert("realvid response=" + response);
	
	p1 = response.match(/type="hidden" name="op".*?value="(.*?)"/);
	p2 = response.match(/type="hidden" name="id".*?value="(.*?)"/);
	p3 = response.match(/type="hidden" name="fname".*?value="(.*?)"/);
	p4 = response.match(/type="hidden" name="hash".*?value="(.*?)"/);
    if (!p1 || !p2 || !p3 || !p4)
	   return null;
	
	var data = "op="+ p1[1] + "&id=" + p2[1] + "&fname=" + p3[1] + "&hash=" + p4[1] + "&referer=" + "&usr_login=";
	//alert("getVideo: realvid data=" + data);
				
	response = Web.getPage(url,data);
	//alert("getVideo: realvid response2=" + response);
	
	stream_url = response.match(/file:\s"(.*?)",/);
	if (stream_url)
	   return stream_url[1];

	return null;	
}


//--------------------------------------------------------------------
// get_from_vivo
//--------------------------------------------------------------------	
function get_from_vivo(url)
{
	//alert("getVideo: vivo url=" + url);
	var response = Web.getPage(url);
	p1 = response.match(/type="hidden" name="hash".*?value="(.*?)"/);
	p2 = response.match(/type="hidden" name="timestamp".*?value="(.*?)"/);
    if (!p1 || !p2)
	   return null;
	
	sleep(3000);
	var data = "hash="+ p1[1] + "&timestamp=" + p2[1];
	//alert("vivo data=" + data);
	response = Web.getPage(url,data);
	var stream_url = response.match(/class="stream-content" data-url="(.*?)"/);
	if (stream_url)
	{
		//alert("stream_url=" + stream_url[1]);
		return stream_url[1];
	}
	
	return null;
}

//--------------------------------------------------------------------
// get_from_openload
//--------------------------------------------------------------------	
function get_from_openload(url)
{
	
	//alert("getVideo: openload url=" + url);
	response = Web.getPage(url);
    //alert("openload response=" + response);
	
	var stream_url = response.match(/<source.*?src="(.*?)\?/);
	if (stream_url)
	{
		//alert("stream_url=" + stream_url[1]);
		return stream_url[1];
	}
	
	return null;
}

		
//--------------------------------------------------------------------
// get_from_cloudyvideos and cloudyvideosEmbed
//--------------------------------------------------------------------	
function get_from_cloudyvideos(url)
{ 
	var links;
	//alert("getVideo: cloudyvideos url=" + url);
	
	if (url.indexOf('embed'))
	{
	   url1 = url.replace("embed-","");
	   url1 = url1.substring(0,url1.search("-"));
	}
	else
		url1 = url;
	
	//alert("getVideo: cloudyvideos url1=" + url1);
	
	var response = Web.getPage(url1);
	//alert("getVideo: cloudyvideos response=" + response);
	p1 = response.match(/type="hidden" name="op".*?value="(.*?)"/);
	p2 = response.match(/type="hidden" name="id".*?value="(.*?)"/);
	p3 = response.match(/type="hidden" name="rand".*?value="(.*?)"/);
	p4 = response.match(/type="hidden" name="method_free".*?value="(.*?)"/);
    if (!p1 || !p2 || !p3 || !p4)
	   return null;
	
	var data = "op="+ p1[1] + "&id=" + p2[1] + "&rand=" + p3[1] + "&referer=" + "&method_free=";
	//alert("getVideo: cloudyvideos data=" + data);
				
	sleep(3000);
	//alert("getVideo: cloudyvideos data=" + data);
	response = Web.getPage(url1,data);
	//alert("getVideo: cloudyvideos post response=" + response);
	links = response.match( /<a href="(.*?\.[mkv|avi|flv|mp4]+)"><input type="submit"/ );
		
	if (links)
		return links[1];	
					
	return null;
}

function jsunpack(sJavascript)
{
	return P_A_C_K_E_R.unpack(sJavascript);
};


// usage:
// if (P_A_C_K_E_R.detect(some_string)) 
//     var unpacked = P_A_C_K_E_R.unpack(some_string);
var P_A_C_K_E_R = 
{
    detect: function (str) 
	{
        return (P_A_C_K_E_R.get_chunks(str).length > 0);
    },

    get_chunks: function(str) 
	{
        var chunks = str.match(/eval\(\(?function\(.*?(,0,\{\}\)\)|split\('\|'\)\)\))($|\n)/g);
        return chunks ? chunks : [];
    },

    unpack: function (str) 
	{
        var chunks = P_A_C_K_E_R.get_chunks(str),
            chunk;
        for(var i = 0; i < chunks.length; i++) 
		{
            chunk = chunks[i].replace(/\n$/, '');
            str = str.split(chunk).join( P_A_C_K_E_R.unpack_chunk(chunk) );
        }
        return str;
    },

    unpack_chunk: function (str) 
	{
        var unpacked_source = '';
        var __eval = eval;
        if (P_A_C_K_E_R.detect(str)) 
		{
            try 
			{
                eval = function (s) { unpacked_source += s; return unpacked_source; };
                __eval(str);
                if (typeof unpacked_source == 'string' && unpacked_source) 
				{
                    str = unpacked_source;
                }
            } 
			catch (e) 
			{
                // well, it failed. we'll just return the original, instead of crashing on user.
            }
        }
        eval = __eval;
        return str;
    },
};

/*
function jsunpack(sJavascript)
{
	var aSplit = sJavascript.split(";',");
	if (len(aSplit) == 1)
	{
		alert( "packed type 2" );
		aSplit = sJavascript.split(";}',");
	}
	else
		alert( "packed type 1" );

	var p = String(aSplit[0]);

	var aSplit = aSplit[1].split(",");
	var a = parseInt(aSplit[0]);
	var c = parseInt(aSplit[1]);
	var k = aSplit[2].split(".")[0].replace("'", '').split('|');
	var e = '';
	var d = '';

	var sUnpacked = String(do_unpack(p, a, c, k, e, d));
	return sUnpacked.replace('\\', '');
}

function do_unpack( p, a, c, k, e, d)
{
	while (c > 1)
	{
		c = c -1;
		if (k[c])
			p = p.replace('\\b' + String(itoa(c, a)) +'\\b', k[c]);
	}
	return p;
}

function do_itoa( num, base)
{
	result = "";
	while (num > 0)
	{
		result = "0123456789abcfunctionghijklmnopqrstuvwxyz"[num % base] + result;
		num /= base;
	}
	return result;
}

// Converts an integer (unicode value) to a char
function itoa(i)
{
   return String.fromCharCode(i);
}

*/

//--------------------------------------------------------------------
// get_from_mightyupload
//--------------------------------------------------------------------	
function get_from_mightyupload(url)
{ 
	var links;
	//alert("getVideo: mightyupload url=" + url);
	if (url.indexOf('embed'))
	{
	   var url1 = url.replace("embed-","");
	   url1 = url1.substring(0,url1.search("-"));
	}
	else
		url1 = url;
	
	//alert("getVideo: mightyupload url1=" + url1);
	
	var response = Web.getPage(url1);
	//alert("getVideo: mightyupload response=" + response);
	p1 = response.match(/type="hidden" name="op".*?value="(.*?)"/);
	p2 = response.match(/type="hidden" name="id".*?value="(.*?)"/);
	p3 = response.match(/type="hidden" name="rand".*?value="(.*?)"/);
	p4 = response.match(/type="hidden" name="method_free".*?value="(.*?)"/);
    if (!p1 || !p2 || !p3 || !p4)
	   return null;
	
	var data = "op="+ p1[1] + "&id=" + p2[1] + "&rand=" + p3[1] + "&referer=" + "&method_free=";
	//alert("getVideo: mightyupload data=" + data);
				
	response = Web.getPage(url,data);
	//alert("getVideo: mightyupload post response2=" + response);
	
	links = response.match( /<IFRAME SRC="(.*?)" .*?><\/IFRAME>/ );
	if (links)
	{
		var url1 = links[1];
		response = Web.getPage(url1);
		//alert("getVideo: mightyupload response3=" + response);
	}
	
	links = response.match(/file: '([^']+)'/);
	if (links)
		return links[1];
	
	links = response.match(/<div id=\"player_code\">.*?<script type='text\/javascript'>(.*?)<\/script>/);
	if (!links)
		return null;
			
	/*
	js = jsunpack(links[1]);
	links = js.search("'file','([^']+)'", js.replace('\\',''))
	if (!links)
		r = js.search('"src"value="([^"]+)', js.replace('\\',''))
	if (links)
		return links[1];
    */	
	
	return null;
}
        
/*
//--------------------------------------------------------------------
// get_from_mightyupload
//--------------------------------------------------------------------	
function get_from_mightyupload1(url)
{ 	
	alert("getVideo: mightyupload url=" + url);
	if (url.indexOf('embed'))
	{
	   var url1 = url.replace("embed-","");
	   url1 = url1.substring(0,url1.search("-"));
	}
	else
		url1 = url;
	
	alert("getVideo: mightyupload url1=" + url1);
	
	var response = Web.getPage(url1);
	alert("getVideo: mightyuploads response=" + response);
	var stream_url = response.match(/file:\s'(.*?)'/);
	if (stream_url)
		return stream_url[1];
	
	var packedjava = response.match(/<script type=.text.javascript.>eval.function(.*?)<\/script>/);
	if (!packedjava)
	   return null;
	   
	alert("getVideo: mightyuploads packedjava=" + packedjava);   
	 
	if ( packedjava )
	{
		var sJavascript = packedjava[1];
		var sUnpacked = jsunpack(sJavascript);
		if (sUnpacked)
	    { 
			alert("getVideo: mightyuploads java unpacked=" + sUnpacked ); 	
			if (sUnpacked.search('type="video/divx'))
			{
				alert("getVideo: mightyuploads type=divx");
				stream_url = sUnpacked.match(/type="video\/divx"src="(.*?)"/);
				if (stream_url)
				{
					alert( "getVideo: mightyuploads stream_url =" + stream_url[1] );
					return stream_url[1];
				}
			}
			else if (sUnpacked.search("file"))
			{
				alert( "getVideo: mightyuploads unpacked file");
				stream_url = sUnpacked.match(/file','(.*?)'/);
				if (stream_url)
				{
					alert( "getVideo: mightyuploads stream_url =" + stream_url[1] );
					return stream_url[1];
				}
			} 
		}

	}			
	return null;	
}

*/

//--------------------------------------------------------------------
// get_from_exashare
//--------------------------------------------------------------------	
function get_from_exashare(url)
{
	alert("getVideo: exashare url=" + url);
	var response = Web.getPage(url);
	alert("exashare response=" + response);
	
	p1 = response.match(/type="hidden" name="op".*?value="(.*?)"/);
	p2 = response.match(/type="hidden" name="id".*?value="(.*?)"/);
	p3 = response.match(/type="hidden" name="fname".*?value="(.*?)"/);
	p4 = response.match(/type="hidden" name="referer".*?value="(.*?)"/);
	p5 = response.match(/type="hidden" name="hash".*?value="(.*?)"/);
	
    if (!p1 || !p2 || !p3 || !p4 || !p5)
	   return null;
	
	var data = "op="+ p1[1] + "&id=" + p2[1] + "&fname=" + p3[1] + "&referer=" + p4[1] + "&hash=" + p5[1] +  + "&imhuman=Proceed to video";
	alert("getVideo: exashare data=" + data);
				
	response = Web.getPage(url,data);
	alert("getVideo: exashare response2=" + response);
	
	stream_url = response.match(/file:\s"(.*?)",/);
	if (stream_url)
	   return stream_url[1];

	return null;	
}

//--------------------------------------------------------------------
// get_from_rapidvideo
//--------------------------------------------------------------------	
function get_from_rapidvideo(url)
{
	//alert("getVideo: rapid url=" + url);
	var response = Web.getPage(url);
	//alert("rapid response=" + response);
			
	stream_url = response.match(/file:"(.*?)"/);
	if (stream_url)
	   return stream_url[1];

	return null;	
}

//--------------------------------------------------------------------
// get_from_thevideo
//--------------------------------------------------------------------	
function get_from_thevideo(url)
{
	//alert("getVideo: thevideo url=" + url);
	var response = Web.getPage(url);
	//alert("thevideo response=" + response);
			
	stream_url = response.match(/file: '(.*?.mp4)'/g);
	//alert("getVideo: thevideo url1=" + stream_url[1]);
	if (stream_url)
	   return stream_url[stream_url.length - 1];

	return null;	
}


function getVideo(url)
{
	var c;
	
    //alert( "find video url for " + url);
	
    if (url.indexOf("streamcloud.eu") > 0)
		c = get_from_streamcloud(url);
	
	else if (url.indexOf('divxstage.net') > 0)
		c = get_from_divxstage(url);	
	else if (url.indexOf('divxstage.eu') > 0)
	{
		url = url.replace("divxstage.eu","divxstage.net");
		c = get_from_divxstage(url);
	}	
	else if (url.indexOf('novamov.com') > 0)
		c = get_from_divxstage(url);	
	else if (url.indexOf('movshare.net') > 0)
		c = get_from_divxstage(url);	
	else if (url.indexOf('movshare.') > 0)
		c = get_from_divxstage(url);
	else if (url.indexOf('videoweed.es') > 0)
		c = get_from_divxstage(url);		
	else if (url.indexOf('nowvideo.') > 0)
	    c = get_from_divxstage(url);	
	else if (url.indexOf('cloudtime.to') > 0)
		c = get_from_divxstage(url);	
	else if (url.indexOf('vidgg.to') > 0)
		c = get_from_divxstage(url);
	
	else if (url.indexOf('stream2k.com') > 0)
		c = get_from_stream2k(url);		
	else if (url.indexOf('faststream') > 0)
		c = get_from_vidstream(url);	
	else if (url.indexOf('vidstream') > 0)
		c = get_from_vidstream(url);
	
	else if (url.indexOf('shared.sx') > 0)
		c = get_from_sharedsx(url);
	
	else if (url.indexOf('ecostream.tv') > 0)
		c = get_from_ecostream(url);
	
	else if (url.indexOf('primeshare.tv') > 0)
		c = get_from_primeshare(url);
	
	else if (url.indexOf('vidbull.com') > 0)
		c = get_from_vidbull(url);
	
	else if (url.indexOf('promptfile.com') > 0)
		c = get_from_promptfile(url);
	
	else if (url.indexOf('mightyupload.com') > 0)
		c = get_from_mightyupload(url);

	
	else if (url.indexOf('putlocker.com') > 0)
		c = get_from_firedrive(url);
	else if (url.indexOf('firedrive.com') > 0)
		c = get_from_firedrive(url);
	else if (url.indexOf('filedrive.com') > 0)
		c = get_from_firedrive(url);
	
	else if (url.indexOf('sockshare.com') > 0)
		c = get_from_putlocker(url);
	
	else if (url.indexOf('cloudzilla.to') > 0)
		c = get_from_cloudzilla(url);
	else if (url.indexOf('neodrive.co') > 0)
		c = get_from_cloudzilla(url);
	
	else if (url.indexOf('videowood.') > 0)
		c = get_from_videowood(url);
	
	else if (url.indexOf('streamin.') > 0)
		c = get_from_streamin(url);
	
	else if (url.indexOf('streamit.to') > 0)
		c = get_from_streamit(url);
	
	else if (url.indexOf('vivo.sx') > 0)
		c = get_from_vivo(url);
	
	else if (url.indexOf('cloudyvideos') > 0)
		c = get_from_cloudyvideos(url);
	
	else if (url.indexOf('openload') > 0)
		c = get_from_openload(url);
	
	else if (url.indexOf('mrfile.me') > 0)
		c = get_from_mrfile(url);
	
	else if (url.indexOf('stream2k.tv') > 0)
		c = get_from_stream2k_tv(url);
	
	else if (url.indexOf('realvid.net') > 0)
		c = get_from_realvid(url);
	
	else if (url.indexOf('exashare.com') > 0)
		c = get_from_exashare(url);
	
	else if (url.indexOf('rapidvideo.com') > 0)
		c = get_from_rapidvideo(url);
	
	else if (url.indexOf('thevideo.me') > 0)
		c = get_from_thevideo(url);
		
	else
	{
		alert( "no hoster code for " + url);
		c = url;
	}
	
	//alert( "all hoster checked url=" + c);
	return(c);
}
