 var Pass = "",
     ext_key = '',
     ServerPath = '',
     ServerErr = '',
     ExtScriptUrl = '',
     xhr = null,
     Init_id_url = 0,
     Init_ext_js_step = 0,
     Load_timer = null,
     Scurar = [
        ['', ''],
     ],
     widgetAPI = new Common['API'].Widget(),
     pluginAPI = new Common['API'].Plugin();

 function GetId(x) {
     return document['getElementById'](x.toString());
 };

 function GetTn(x) {
     return document['getElementsByTagName'](x);
 };

 function GetIdb(x) {
     x = x['split'](',');
     for (var i = 0; i < x['length']; i++) {
         GetId(x[i])['style']['display'] = 'block';
     };
 };

 function LoadTimer(func, time) {
     clearTimeout(Load_timer);
     Load_timer = setTimeout(func, time);
 };

 function xhrAbort() {
     if (xhr != null) {
         xhr['abort']();
         xhr['destroy']();
         xhr = null;
     };
 };

 function GetIdUrl(arr) {
     var res = arr['length'] > 0 ? Math['round']((Math['random']() * (arr['length'] - 1))) : 0;
     return res;
 };

 function LoaderKeyDown() {
     xhrAbort();
     event['preventDefault']();
     widgetAPI['sendReturnEvent']();
 };

 function OnLoad() {
     GetId('Loader_Anchor')['focus']();
     Init_id_url = GetIdUrl(Scurar[0]);
     //ServerPath = Scurar[0][Init_id_url];
     complete();
 };

 function OnUnload() {};