var Q61 = ' ',
    PO7 = Y11('pluginObjectTVMW'),
    ap_mc = Y11('pluginNetwork'),
    P1 = '',
    P2 = '',
    P3 = '',
    P4 = 0,
    P14 = '0',
    P101 = '',
    K01 = '',
    K02 = '',
    K03 = '',
    K04 = Q61,
    Q_75 = curWidget['id'];

function Y11(x)
{
    return document['getElementById'](x)
};

function Y12(x)
{
    x = x['split'](',');
    for (var i = 0; i < x['length']; i++)
    {
        Y11(x[i])['style']['display'] = 'block'
    }
};

function dI(s)
{
    return typeof s == 'string' ? s['replace'](/\\#\//g, '\##/')['replace'](/\|/g, '\#/') : s !== undefined ? s.toString() : ''
};

function xhrAbort()
{
    clearTimeout(Load_timer);
    Load_timer = -1;
    if (xhr)
    {
        xhr['abort']();
        xhr['destroy']();
        xhr = null
    }
};

function LoadTimer(func, time)
{
    clearTimeout(Load_timer);
    Load_timer = setTimeout(func, time)
};

function F00()
{
    OnUnload();
    widgetAPI['sendExitEvent']()
};

function F02(file)
{
    var fs = new FileSystem();
    fs.deleteCommonFile(file);
    return
};

function F_2(tr)
{
    var ti = '';
    for (var i in tr)
    {
        ti = !ti ? dI(tr[i]) : ti + '|' + dI(tr[i])
    };
    return ti
};

function F55(arr, ne, l1, l2)
{
    var fs = new FileSystem(),
        fl = fs['openCommonFile'](Q_75 + '/' + ne, 'r'),
        i = 0;
    if (!fl)
    {
        fl = fs['openCommonFile'](ne, 'r')
    };
    if (fl)
    {
        while (1)
        {
            i++;
            var l = fl['readLine']();
            if (l == null)
            {
                break
            };
            if ((l1 && i > l1) || !l1)
            {
                arr['push'](l)
            };
            if (l2 && i > l2)
            {
                break
            }
        };
        fs['closeCommonFile'](fl)
    }
};

function Y2(o, s)
{
    o['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
    o['setRequestHeader']('Content-length', s['length']);
    o['setRequestHeader']('Connection', 'close')
};

// get web page (url, info )
function R_64(ul, s)
{
    var r_t = 'GET';
    if (s)
    {
        r_t = 'POST'
    }
    else
    {
        s = ''
    };
    Init_ext_js_step++;
    ServerErr = '<font size="5">Bad network connection.<br>Try connecting again later.<br>Verlust der Verbindung</font>';
    xhrAbort();
    LoadTimer('xhrAbort();complete();', 25000);
    xhr = new XMLHttpRequest();
    if (xhr['overrideMimeType'])
    {
        xhr['overrideMimeType']('text/xml')
    };
    xhr['onreadystatechange'] = function ()
    {
        if (Load_timer < 0)
        {
            return
        };
        if (xhr['readyState'] == 4)
        {
            clearTimeout(Load_timer);
            if (xhr['status'] == 200)
            {
                if (xhr['responseText'])
                {
                    if (xhr['responseText']['charAt'](0) != '<' && xhr['responseText']['charAt'](0) != '4' && xhr['responseText']['charAt'](0) != '5')
                    {
                        ServerErr = '';
                        var s = document['createElement']('script');
                        s['language'] = 'javascript', s['type'] = 'text/javascript', s['innerHTML'] = xhr['responseText'];
                        document['getElementsByTagName']('head')[0]['appendChild'](s)
                    }
                    else
                    {
                        ServerErr = xhr['responseText']
                    }
                }
            }
            else
            {
                if (xhr['status'] != 0 && xhr['status'] != 1002)
                {
                    ServerErr = '<font size="6">Server Error : ' + xhr['status'] + '</font>'
                }
            };
            complete()
        }
    };
    xhr['open'](r_t, ul, true);
    if (r_t == 'POST')
    {
        Y2(xhr, s)
    };
    xhr['send'](s)
};

function R777()
{
    var tr1 = ['213', '187', '149', '163', '177', '198', '191', '162', '87', '77', '75', '66', '65', '64', '63', '62', '56', '55', '37', '22', '2'],
        tr2 = ['ver.dat', 'set.dat', '254s.dat', '294.dat', '596.dat', '695.dat', '802.dat', '803.dat', '804.dat', 'search_history.dat', 'tv_live_history.dat',
            'vod_history.dat', 'aud_history.dat', 'foto_history.dat', 'pl_history.dat', 'reg.dat', 'settings.dat', 'j594.dat', 'history.dat', 'start.xml'];
    for (var i = 0; i < tr1.length; i++)
    {
        tr1[i] = Q_75 + '/' + tr1[i] + '_ya_name_index_url.dat';
        F02(tr1[i])
    }
    for (var i = 0; i < tr2.length; i++)
    {
        tr2[i] = Q_75 + '/' + tr2[i];
        F02(tr2[i])
    }
    OnUnload()
    widgetAPI['sendReturnEvent']()
};

function genMAC()
{
    var sMacs = new Array('0000F0', '000278', '0007AB', '000918', '000DAE', '000DE5', '001247', '0012FB', '001377', '001599', '0015B9', '001632', '00166B',
        '00166C', '0016DB', '0017C9', '0017D5', '0018AF', '001A8A', '001B98', '001C43', '001D25', '001DF6', '001E7D', '001EE1', '001EE2', '001FCC',
        '001FCD', '002119', '00214C', '0021D1', '0021D2', '002339', '00233A', '002399', '0023C2', '0023D6', '0023D7', '002454', '002490', '002491',
        '0024E9', '002538', '002566', '002567', '002637', '00265D', '00265F', '0073E0', '00E064', '00E3B2', '00F46F', '04180F', '041BBA', '04FE31',
        '0808C2', '08373D', '083D88', '08D42B', '08ECA9', '08EE8B', '08FC88', '08FD0E', '0C1420', '0C715D', '0C8910', '0CB319', '0CDFA4', '101DC0',
        '103047', '103B59', '1077B1', '109266', '10D38A', '10D542', '1432D1', '1449E0', '1489FD', '14A364', '14B484', '14F42A', '1816C9', '181EB0',
        '18227E', '182666', '183A2D', '183F47', '184617', '1867B0', '188331', '18E2C2', '1C5A3E', '1C62B8', '1C66AA', '1CAF05', '2013E0', '206432',
        '206E9C', '20D390', '20D5BF', '244B03', '244B81', '24C696', '24DBED', '24F5AA', '28987B', '28BAB5', '28CC01', '2C4401', '301966', '30C7AE',
        '30D587', '30D6C9', '3423BA', '343111', '34AA8B', '34BE00', '34C3AC', '380A94', '380B40', '3816D1', '382DD1', '389496', '38AA3C', '38ECE4',
        '3C5A37', '3C6200', '3C8BFE', '3CA10D', '400E85', '444E1A', '446D6C', '44F459', '4844F7', '4C3C16', '4CA56D', '4CBCA5', '5001BB', '503275',
        '5056BF', '508569', '50A4C8', '50B7C3', '50F0D3', '50F520', '50FC9F', '5440AD', '5492BE', '549B12', '54FA3E', '58C38B', '5C0A5B', '5C2E59',
        '5C3C27', '5CA39D', '5CE8EB', '5CF6DC', '606BBD', '6077E2', '608F5C', '60A10A', '60AF6D', '60D0A9', '646CB2', '647791', '64B310', '64B853',
        '680571', '684898', '68EBAE', '6C2F2C', '6C8336', '6CB7F4', '6CF373', '70F927', '74458A', '745F00', '781FDB', '7825AD', '7840E4', '78471D',
        '78521A', '78595E', '789ED0', '78A873', '78ABBB', '78BDBC', '78F7BE', '7CF854', '7CF90E', '8018A7', '804E81', '805719', '840B2D', '84119E',
        '8425DB', '842E27', '845181', '8455A5', '84A466', '88329B', '889B39', '8C71F8', '8C7712', '8CBFA6', '8CC8CD', '9000DB', '90F1AA', '9401C2',
        '94350A', '945103', '9463D1', '94D771', '981DFA', '9852B1', '988389', '9C0298', '9C3AAF', '9C65B0', '9CD35B', '9CE6E7', 'A00798', 'A00BBA',
        'A02195', 'A07591', 'A0821F', 'A0B4A5', 'A49A58', 'A4EBD3', 'A80600', 'A87C01', 'A89FBA', 'A8F274', 'AC3613', 'AC5A14', 'B0C4E7', 'B0C559',
        'B0D09C', 'B0DF3A', 'B0EC71', 'B407F9', 'B43A28', 'B46293', 'B4EF39', 'B85A73', 'B85E7B', 'B86CE8', 'B8C68E', 'B8D9CE', 'BC1485', 'BC20A4',
        'BC4486', 'BC4760', 'BC72B1', 'BC79AD', 'BC851F', 'BC8CCD', 'BCB1F3', 'C06599', 'C44202', 'C45006', 'C4576E', 'C462EA', 'C4731E', 'C488E5',
        'C81479', 'C819F7', 'C87E75', 'C8A823', 'CC051B', 'CC07AB', 'CCF9E8', 'CCFE3C', 'D0176A', 'D022BE', 'D059E4', 'D0667B', 'D0C1B1', 'D0DFC7',
        'D487D8', 'D48890', 'D4E8B2', 'D831CF', 'D857EF', 'D890E8', 'E09971', 'E0CBEE', 'E0DB10', 'E4121D', 'E432CB', 'E440E2', 'E458E7', 'E47CF9',
        'E492FB', 'E4B021', 'E4E0C5', 'E4F8EF', 'E8039A', 'E81132', 'E84E84', 'E8E5D6', 'ECE09B', 'F008F1', 'F05A09', 'F06BCA', 'F0728C', 'F0E77E',
        'F47B5E', 'F49F54', 'F4D9FB', 'F884F2', 'F8D0BD', 'FC1910', 'FC1F19', 'FC8F90', 'FCA13E', 'FCC734');
    var hexDigits = '0123456789ABCDEF';
    var macAdd = '';
    macAdd += sMacs[Math.floor(Math.random() * (sMacs.length))];
    for (var i = 0; macAdd.length < 12; i++)
    {
        macAdd += hexDigits.charAt(Math.round(Math.random() * 16));
    }
    return macAdd.toLowerCase();
};

function F91()
{
    if (!ServerErr)
    {
        ServerErr =
            '<font size="5">Bad network connection.<br>Try connecting again later.<br>Instabile Netzwerkverbindung.<br>Versuchen Sie es später noch einmal den Anschluss.</font>'
    };
    if (PO7)
    {
        PO7.SetMediaSource()
    };
    widgetAPI['sendReadyEvent']();
    var s = document['createElement']('DIV');
    s['innerHTML'] = '<div id="statusbar">' + ServerErr + '</div>';
    document['body']['appendChild'](s);
    Y11('statusbar')['style']['backgroundImage'] = 'url(img/blak_bg.png)';
    Y12('baner,statusbar')
};

function OnUnload()
{
    alert('OnUnload');
    if (PO7)
    {
        PO7.SetSource(0)
    }
};

function genID()
{
    var hexDigits = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM';
    var idNUM = '';
    for (var i = 0; i < 13; i++)
    {
        idNUM += hexDigits.charAt(Math.round(Math.random() * 16));
        if (i != 12) idNUM += '';
    }
    return idNUM;
};

function complete()
{
    var s_RP = Y11('pluginObjectTV'),
        c_Jz = '',
        v_Qh = Y11('pluginObjectNNavi'),
        arr1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        arr2 = [/a/g, /b/g, /c/g, /d/g, /e/g, /f/g, /0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g],
        f_w = ["z", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "t"];
    f_w[9] = "i";
    f_w[11] = "w";
    f_w[7] = "s";
    f_w[6] = "m";
    f_w[3] = "j";
    f_w[4] = "x";
    f_w[10] = "q";
    f_w[14] = "k";
    f_w[2] = "g";
    f_w[12] = "h";
    f_w[13] = "n";
    f_w[8] = "t";
    f_w[0] = "o";
    f_w[15] = "y";
    f_w[5] = "u";
    f_w[1] = "p";
    ext_key = "lqlqeslqDClqchfzchDCVH";
    if (!ext_key || Init_ext_js_step > 3 || ServerErr)
    {
        return F91()
    }
    else
    {
        var a_dY = (ap_mc != null) ? ap_mc.GetMAC() : "",
            //j_kv = (v_Qh != null) ? v_Qh.GetDUID(a_dY) : "",
            j_kv = (v_Qh != null) ? genID() : '777777777777',
            b_MQb = (s_RP != null) ? s_RP.GetProductCode(1) : "",
            h_t = (s_RP != null) ? s_RP.GetProductType() : -1;
        if ((h_t != 0 && h_t != 1 && h_t != 2) || !a_dY || !b_MQb || !j_kv) return F91();
        P2 = window.location.toString()
            .split("?")[0];
        Init_ext_js_step = 3;
        var rar = [];
        F55(rar, "reg.dat", 0, 6);
        P3 = b_MQb;
        a_dY = a_dY.substr(6) + a_dY.substr(0, 6);
        for (var j = 0; j < f_w.length; j++) a_dY = a_dY.replace(arr2[j], f_w[j]);
        var d_NXV = a_dY.substr(0, 1);
        a_dY = a_dY.substr(1);
        for (var j = 0; j < ext_key.length; j = j + 2) d_NXV += ext_key.substr(j, 1) + a_dY.substr(j / 2, 1);
        arr2 = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g];
        for (var j = 0; j < 10; j++) b_MQb = b_MQb.replace(arr2[j], f_w[j]);
        b_MQb = b_MQb.replace(/-/g, "b")
            .replace(/_/g, "c");
        for (var j = b_MQb.length - 1; j > -1; j--) c_Jz += b_MQb.substr(j, 1) + arr1[Math.round(Math.random() * 25)];
        complete1();
        ext_key = "05ff71457d21fa94946b8c750f24d13f";
    }
};
var
    key6 = "2eed7f0d8ae0bb7d7c5191e6d02ac642",
    key7 = "35f54576d6d7353a5f869324881c314a";
var
    _l = ['smart', '106015849201852', '31173916111796', 'smart-portal.tk', 'smarton.net.ua/vtrax', '/smartpal/', 'arshavir.info', '31.131.', 'gegen-abzocke',
        'http://nanoproxy.de/browse.php?b=24&f=norefer&u=', 'http://proxy.aboutip.de/index.php?hl=346&q=', 'http://wilhelm2005.96.lt/yandex.php?url='];
P4 = 1421012544000;
var
    PO1 = Y11('pluginObjectStorage'),
    PO_2 = Y11('pluginFileSystem'),
    PO3 = Y11('pluginTime'),
    PO4 = '',
    PO5 = '',
    PO6 = '',
    all_chann_url = '',
    O1 = {},
    O2 = {},
    O3 = {},
    O5 = {},
    O7 = {
        ru: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
        ua: 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ',
        en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\'",.;:?',
        num: '12345+-=67890\|/!@#$%&^~<>(){}[]?_'
    },
    O8 = {
        6647399: 'Englisch',
        6388325: 'Aserbaidschan',
        6386285: 'Armenisch',
        6448492: 'Weißrussisch',
        6452588: 'Bulgarisch',
        6514793: 'Chinese',
        6776178: 'Deutsch',
        6911073: 'Italienisch',
        7565409: 'Spanisch',
        7037306: 'Kasachisch',
        7040882: 'Koreanisch',
        7368562: 'Portugiesisch',
        7501171: 'Russisch',
        7564399: 'Slowakisch',
        7564406: 'Slowenisch',
        7565936: 'Serbisch',
        7632242: 'Türkisch',
        7699042: 'Usbekistan',
        7695218: 'Ukrainisch.1',
        8026747: 'Ukrainisch.2',
        6713957: 'Französisch',
        7567205: 'Schwedisch',
        6975598: 'Japanisch'
    },
    O9 = {
        0: 'unbekannter Fehler',
        1: 'Nicht unterstützte Container',
        2: 'Nicht unterstützte Video-Codec',
        3: 'Nicht unterstützte Audio-Codec',
        4: 'Nicht unterstützte Videoauflösung',
        5: 'Falsche Bildrate',
        6: 'Feed beschädigt',
        7: 'Der Video-Player kann nicht gefunden werden',
        8: 'Öffnen Sie eine Netzwerkverbindung',
        9: 'Verbinden fehlgeschlagen',
        10: 'Server Error',
        11: 'Hash nicht gefunden',
        12: 'Die Videodatei wird nicht durch den Parser gefunden',
        13: 'leerer Link',
        14: 'Der Server antwortet nicht',
        15: 'Fehler in der Struktur der Playliste',
        16: 'Der Server antwortet nicht oder die falsche Adresse Play',
        17: 'Fehler beim Lesen des USB-Laufwerks',
        18: 'leere Playlist'
    },
    O10 = ['16X9', '14X9', '4X3 ZOOM 2', '4X3 ZOOM 1', '4X3', 'X-ZOOM', 'Auto', '16X9 ZOOM 1', '16X9 ZOOM 2', 'nicht installiert'],
    O11 = {
        0: 'ORIGINAL',
        7: 'ORIG.ZOOM 1',
        8: 'ORIG.ZOOM 2'
    },
    O12 = ['240', '360', '480', '720', '1080'],
    O13 = ['ru', 'ua', 'by', 'kz', 'de'],
    O14 = ['aus TV', 'Auto-Sync.'],
    O15 = ['einfach', 'der letzte st', 'wiederholen'],
    O16 = ['Mini.', 'Klein', 'Mittel', 'Groß', 'Maxi.', 'Auto'],
    O17 = ['Quadrat', 'Rechteck'],
    O18 = ['aus', 'ein'],
    O19 = ['KATEGORIEN', 'Favoriten', 'Titel wählen', 'Typauswahl', 'Qualität', 'Quelle', 'Spur', '3D Mode',
        'MENU', 'Menü-Auswahl'],
    O20 = ['alle Modi aus', 'Vertikal Stereopaar', 'nebeneinander', 'Umwandlung 2D auf 3D'],
    A = {
        A0: 'start.xml',
        A1: '',
        A2: 0,
        A3: (ap_mc != null) ? ap_mc.GetMAC() : "",
        A4: 213,
        A5: 0,
        A6: -new Date()['getTimezoneOffset']() / 60,
        A7: 0,
        A8: 6,
        A9: 100,
        A10: 100,
        A11: 2,
        A12: 0,
        A13: 0,
        A14: 5,
        A15: 7501171,
        A16: 1,
        A17: 0,
        A18: 0,
        A19: 1,
        A20: 0,
        A21: 0,
        A22: 1,
        A23: 0,
        A24: 0,
        A25: 1,
        A26: 0,
        A27: 0,
        A28: 0,
        A29: 0,
        A30: 0,
        A31: 1,
        A32: 0,
        A33: 1,
        A34: 0,
        A35: 0,
        A36: 1
    },
    API = {
        getChannel_list: '',
        search_string: ''
    },
    Z1 = 0,
    Z2 = '',
    Z3 = 0,
    Z4 = 0,
    Z5 = '',
    Z6 = 'en',
    Z7 = '27_key',
    Z8 = 7,
    Z9 = 2,
    Z10 = 0,
    Z11 = 0,
    Z12 = 18,
    Z13 = 0,
    Z14 = -1,
    Z16 = 0,
    Z17 = 0,
    Z18 = 0,
    Z19 = '',
    Z20 = 0,
    Z21 = [],
    Z22 = 0,
    Z23 = 0,
    Z24 = 0,
    Z25 = 0,
    Z26 = 0,
    Z27 = 0,
    Z40 = 1,
    Z41 = '',
    P_1 = A.A3,
    P0 = 0,
    P_5 = 0,
    P6 = 0,
    P7 = 0,
    P8 = 0,
    P9 = '',
    P10 = '',
    P11 = true,
    P12 = '',
    P13 = '',
    P15 = 1,
    P16 = 800,
    P17 = '',
    P18 = '',
    P19 = -1,
    P20 = -1,
    P21 = 0,
    P22 = 0,
    P23 = [],
    P24 = 0,
    P25 = 0,
    P26 = 0,
    P27 = 0,
    P28 = -1,
    P29 = -1,
    P30 = -1,
    P31 = 0,
    P32 = 0,
    P33 = 0,
    P34 = 0,
    P35 = 0,
    P36 = 0,
    P37 = 0,
    P38 = 0,
    P39 = 0,
    P40 = -1,
    P41 = 0,
    P42 = -1,
    P43 = -1,
    P44 = 0,
    P45 = 0,
    P46 = [],
    P47 = [],
    P48 = [],
    P49 = ['', 'Filme', 'TV', 'Serien', 'Sport'],
    P50 = 0,
    P51 = 0,
    P52 = 0,
    P53 = 0,
    P54 = [
        [2, 'Bild'],
        [1, 'Ton'],
        [3, 'Beenden und Cache bereinigen']
    ],
    P55 = [],
    P56 = 0,
    P57 = [],
    P58 = [],
    P59 = [],
    P60 = '',
    P61 = 1,
    P62 = '',
    P63 = 0,
    P64 = '',
    P65 = 0,
    P66 = 1,
    P67 = 1,
    P68 = 0,
    P69 = 0,
    P70 = 0,
    P71 = 1,
    P72 = 1,
    P73 = 0,
    P74 = 0,
    P75 = 0,
    P76 = 0,
    P77 = 0,
    P78 = '',
    P79 = 0,
    P80 = 0,
    P81 = 0,
    P82 = 1,
    P83 = 0,
    P84 = 60000,
    P85 = 1,
    P86 = '',
    P87 = '',
    P88 = '',
    P89 = -1,
    P90 = -1,
    P91 = 0,
    P92 = -1,
    P93 = -1,
    P94 = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    P95 = /\.(m3u|xml|ldat|json|dat)$/i,
    P96 = /\.(avi|asf|3gp|3g2|3gp2|3gpp|flv|mp4|mp4v|m4v|m2v|m2ts|m2t|mp2v|mod|mov|mpg|mpe|mpeg|mkv|swf|mts|wm|wmv|vob|vro|f4v|ts|tts|iso)$/i,
    P97 = /\.(mp3|mp4a|dts|ac3|wav|wma|flac)$/i,
    P98 = /\.(jpg|jpeg|tiff|mpo|raw)$/i,
    P99 = /\.(png|gif|bmp|ico)$/i,
    seriesC = false,
    seriesE = false,
    seriesD = false,
    seriesF = false,
	seriesH = true,
    Q1 = /\.(zip|rar|7z)$/i,
    Q2 = 0,
    Q3 = 0,
    Q4 = 100,
    Q5 = 100,
    Q6 = '',
    Q7 = '',
    Q8 = '',
    Q9 = '',
    Q10 = 0,
    Q11 = 0,
    Q12 = 0,
    Q13 = 0,
    Q14 = 0,
    Q15 = 0,
    Q16 = 0,
    Q17 = 0,
    Q18 = 0,
    Q19 = 1,
    Q20 = 0,
    Q21 = 1,
    Q22 = '',
    Q23 = '',
    Q24 = 0,
    Q25 = '',
    Q26 = [],
    Q29 = '',
    Q30 = 0,
    Q31 = 0,
    Q_32 = 0,
    Q33 = 0,
    Q34 = 0,
    Q35 = 1,
    Q36 = 0,
    Q37 = 3,
    Q38 = [],
    Q_39 = [
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '']
    ],
    Q40 = [],
    Q41 = 0,
    Q42 = 0,
    Q43 = 0,
    Q44 = 0,
    Q45 = [],
    Q46 = '',
    Q47 = '',
    Q48 = '',
    Q49 = '',
    Q50 = '',
    Q51 = '',
    Q52 = '',
    Q53 = '',
    Q54 = '',
    Q55 = '',
    Q56 = 0,
    Q57 = 0,
    Q58 = 0,
    Q59 = 1,
    Q60 = '',
    Q62 = 'XML/help.xml',
    Q63 = '',
    Q64 = 0,
    Q65 = 12,
    Q66 = 0,
    Q67 = -1,
    Q68 = 1,
    Q69 = '',
    Q70 = [],
    Q71 = 0,
    Q72 = 0,
    Q73 = 0,
    Q74 = 0,
    Q76 = 0,
    Q78 = 0,
    Q79 = [],
    Q81 = 0,
    Q82 = 0,
    Q83 = 0,
    Q84 = -1,
    Q85 = 0,
    Q86 = 0,
    Q87 = 0,
    Q88 = 0,
    Q89 = 0,
    Q90 = [],
    Q91 = 60000,
    Q92 = [],
    Q93 = 0,
    Q94 = 0,
    Q95 = 0,
    Q96 = -1,
    Q97 = 0,
    Q98 = 0,
    Q99 = 0,
    Q100 = 0,
    Q27 = [
        ['IP-TV, WEB-TV Kanal', '', 'logos/image.png',
            '<table><td style="vertical-align:top"><img src="logos/image.png" height="128" width="128"></td><td style="width:100%;text-align:center;font-size:26px;">IP-TV,WEB-TV Kanal</td></table><table style="width:100%;padding-top:3px;"><tr height="4px" bgcolor="#cccccc"><td></td></tr></table>',
            '', 'tv_live_history.dat', '', '', '', '', '', '', '', ''],
        ['Filme, Video', '', 'logos/film.png',
            '<table><td style="vertical-align:top"><img src="logos/film.png" height="128" width="128"></td><td style="width:100%;text-align:center;font-size:26px;">Film, Video-</td></table><table style="width:100%;padding-top:3px;"><tr height="4px" bgcolor="#cccccc"><td></td></tr></table>',
            '', 'vod_history.dat', '', '', '', '', '', '', '', '']
    ],
    Q28 = ['|||||||||', '',
        'HIGHLIGHTS||logos/open.png|<table><td style="vertical-align:top"><img src="logos/open.png" height="128" width="128"></td><td style="width:100%;text-align:center;font-size:26px;">HIGHLIGHTS</td></table><table style="width:100%;padding-top:3px;"><tr height="4px" bgcolor="#cccccc"><td></td></tr></table>||osnovnoefav.dat||||||||'
        ],
    Scurar = [
        ['', ''],
        ['http://tsnakeman.net.ua/widget/parser/__.php'],
        ['http://iptv.root-host.pro/startiptv.php', 'http://sweta1979.de/startiptv.php'],
        ['http://sharksoft.te.ua/smarttv/sharksoft.php', 'http://sharksoft.no-ip.org/smarttv/sharksoft.php'],
        ['http://samez.net/alex/start_lmod_3_samez.php', 'http://samez.eu/start_lmod_3_samez.php'],
        ['', '']
    ];
	
// logging eintrag schreiben (alert mit zeitstempel)  - mod quax
CL = function (tx)
{
    var t = new Date(),
        h = t['getHours'](),
        m = t['getMinutes'](),
        s = t['getSeconds'](),
        ms = t['getMilliseconds']();
    alert('[' + (h > 9 ? h : '0' + h) + ':' + (m > 9 ? m : '0' + m) + ':' + (s > 9 ? s : '0' + s) + ':' + (ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms) +
        '] - ' + tx)
};

function OnMaAd()
{
    if (!R25())
    {
        ServerErr = '<font size="5">Error init. <br> Restart widget. <br>Initialisierungs Fehler <br>Restart Widget.</font>';
        return F91()
    };
    var s = document['createElement']('DIV');
    s["innerHTML"] =
        "<a href=\"javascript:void(0);\" id=\"MainMenu_Anchor\" onkeydown=\"R20();\"></a><a href=\"javascript:void(0);\" id=\"Loading_Anchor\" onkeydown=\"R21();\"></a><a href=\"javascript:void(0);\" id=\"LivePlayer_Anchor\"onkeydown=\"R23();\"></a><a href=\"javascript:void(0);\" id=\"VODPlayer_Anchor\" onkeydown=\"R24();\"></a><a href=\"javascript:void(0);\" id=\"Selectbox_Anchor\" onkeydown=\"R22();\"></a><a href=\"javascript:void(0);\"id=\"Setap_Anchor\" onkeydown=\"R69();\"></a><div id=\"main\" style=\"display:none\"><div id=\"width_str\" style=\"display:none\"></div><div id=\"main_background_1\"></div><div id=\"main_background_2\"></div><div id=\"top\"><span id=\"version\"></span><span id=\"widget_date\"></span></div><div id=\"help_navi_menu\"><div id=\"0_help\"><span id=\"exit\"></span><img src=\"img/buttons/exit.png\"></div><div id=\"1_help\"><span id=\"tools\"></span><img src=\"img/buttons/tools.png\"></div><div id=\"2_help\"><span id=\"move\"></span><img src=\"img/buttons/move.png\"></div><div id=\"3_help\"><span id=\"enter\"></span><img src=\"img/buttons/enter.png\"></div><div id=\"4_help\"><span id=\"blue\"></span><img src=\"img/buttons/blue.png\"></div><div id=\"5_help\"><span id=\"yellow\"></span><img src=\"img/buttons/yellow.png\"></div><div id=\"6_help\"><span id=\"green\"></span><img src=\"img/buttons/green.png\"></div><div id=\"7_help\"><span id=\"red\"></span><img src=\"img/buttons/red.png\"></div><div id=\"8_help\"><span id=\"play\"></span><img src=\"img/buttons/play.png\"></div><div id=\"9_help\"><span id=\"info\"></span><img src=\"img/buttons/info.png\"></div><div id=\"10_help\"><span id=\"guide\"></span></div><div id=\"11_help\"><span id=\"back\"></span><img src=\"img/buttons/back.png\"></div></div><div id=\"info_window\"><div id=\"info_window_l_ang_top\"></div><div id=\"info_window_top_bor\"></div><div id=\"info_window_r_ang_top\"></div><div id=\"info_window_r_bor\"></div><div id=\"info_window_r_ang_bot\"></div><div id=\"info_window_bot_bor\"></div><div id=\"info_window_l_ang_bot\"></div><div id=\"info_window_l_bor\"></div><div id=\"info_window_c_win\"></div><div id=\"infoList\"><div id=\"allInfo\"></div></div><div id=\"ya_date\"></div><div id=\"ya_help\"><img src=\"img/buttons/rew.png\"><img src=\"img/buttons/ff.png\"><span>-/+ D.</span><img src=\"img/buttons/play.png\"><span>alle auf.</span><img src=\"img/buttons/pause.png\"><span>Genre</span><span>\"GUIDE\"-Detail</span></div><div id=\"vod_help\"></div><div id=\"setapList\"><div id=\"allInput\"></div></div><div id=\"scrol_window\"><div id=\"up_bt\"></div><div id=\"scrol_line\"></div><div id=\"scrol_info\"></div><div id=\"dw_bt\"></div></div><div id=\"info_window_background\"></div></div><div id=\"keyb_window\"><div id=\"keyb_window_l_ang_top\"></div><div id=\"keyb_window_top_bor\"></div><div id=\"keyb_window_r_ang_top\"></div><div id=\"keyb_window_r_bor\"></div><div id=\"keyb_window_r_ang_bot\"></div><div id=\"keyb_window_bot_bor\"></div><div id=\"keyb_window_l_ang_bot\"></div><div id=\"keyb_window_l_bor\"></div><div id=\"keyb_window_c_win\"></div><div id=\"keyb_window_background\"></div></div><div id=\"up_line\"></div><div id=\"channelList\"></div><div id=\"barList\"></div><div id=\"dw_line\"></div><div id=\"help_set_par\" style=\"border-radius: 7px 7px\"><img id=\"help_button_l\" src=\"img/buttons/key_left_sel.png\"><span>verändern</span><img id=\"help_button_r\" src=\"img/buttons/key_right_sel.png\"></div></div><div id=\"player\" style=\"display:none\"><div id=\"p_firts_line\"><div id=\"p_info_line\"><div id=\"p_ch_name\"></div><div id=\"p_progress\" style=\"display:none\"><div id=\"cur_time_info\"></div><div id=\"progress_bar\"><div id=\"pr_bar_l\"></div><div id=\"pr_bar_info\"></div><div id=\"pr_bar_c\"></div><div id=\"pr_bar_r\"></div></div><div id=\"total_time_info\"></div></div><div id=\"resolution\"><img id=\"res_l\" src=\"img/res_bg_l.png\"><div id=\"res_c\"></div><img id=\"res_r\" src=\"img/res_bg_r.png\"></div></div><div id=\"p_epg_line\"></div></div><div id=\"p_second_line\"><div id=\"help_player\" style=\"display:none\"><img src=\"img/buttons/back.png\"><span>Liste</span><img src=\"img/buttons/exit.png\"><span>\"Exit\"- stoppen</span></div><div id=\"help_l_player\"><img src=\"img/buttons/back.png\"><span>Liste</span><img src=\"img/buttons/exit.png\"><span>\"Exit\"- stoppen</span><img src=\"img/buttons/lr.png\"><span>\"Info\"</span><img src=\"img/buttons/ud.png\"><span>CH \"+/- P\" - Kanalauswahl</span><div id=\"screen_size_bt\"><img src=\"img/buttons/blue.png\"><span>Größe</span></div></div><div id=\"help_vod_player\"><img src=\"img/buttons/back.png\"><span>Liste</span><img src=\"img/buttons/enter.png\"><span id=\"vod_play\">Pause</span><img src=\"img/buttons/exit.png\"><span>\"Exit\"- stoppen</span><img src=\"img/buttons/ud.png\"><span>2 min</span><img src=\"img/buttons/lr.png\"><span>30 sek</span><img src=\"img/buttons/rew.png\"><img src=\"img/buttons/ff.png\"><span>-/+ 10 sek</span><img src=\"img/buttons/0_9.png\"><span>0 - 90%</span><img src=\"img/buttons/blue.png\"><span>Größe</span></div></div></div><div id=\"black_line_top\"></div><div id=\"statusbar\"></div><div id=\"ch_numbar\"><div id=\"ch_numbar_bg\"><div id=\"ch_numbar_nun\"></div><img id=\"ch_numbar_logo\"></div><div id=\"ch_box_ang1\"></div><div id=\"ch_box_bor1\"></div><div id=\"ch_box_ang2\"></div><div id=\"ch_box_bor2\"></div><div id=\"ch_box_ang3\"></div><div id=\"ch_box_bor3\"></div><div id=\"ch_box_ang4\"></div><div id=\"ch_box_bor4\"></div></div><div id=\"selectbox\"><div id=\"box_ang1\"></div><div id=\"box_bor1\"></div><div id=\"box_ang2\"></div><div id=\"box_bor2\"></div><div id=\"box_ang3\"></div><div id=\"box_bor3\"></div><div id=\"box_ang4\"></div><div id=\"box_bor4\"></div><div id=\"box_c_win\"></div></div><div id=\"flashplayer\"></div><div id=\"loading\"><img id=\"imgAnim\"></div><div id=\"widget_time\"></div>";
    document['body']['appendChild'](s);
    curWidget['onWidgetEvent'] = Y48;
    window['onShow'] = Y48;
    widgetAPI['sendReadyEvent']();
    if (P7)
    {
        Y48()
    };
    F75();
    F76();
    R2();
    R9('Laden...', 1, 0);
    var l0 = 20,
        l1 = 640,
        l2 = 868,
        w = 74,
        p = 0;
    if (P7)
    {
        l0 = 19;
        l1 = 625;
        l2 = 856;
        w = 86;
        p = 3;
        P16 = 600;
        F37('move,enter,blue,yellow,green,red,play,info,back', 'fontSize="16px",marginTop="6px",marginLeft="0px",marginRight="8px"');
        F37('exit,tools,guide', 'fontSize="16px",marginTop="6px"');
        F37('tools,guide', 'marginLeft="0px"');
        F37('top', 'fontSize="17px",fontWeight="500",top="18px"');
        F37('statusbar', 'top="11px",fontSize="17px",padding="4px",paddingBottom="2px"');
        F37('ya_date', 'fontWeight="600",fontSize="21px",paddingTop="10px",height="24px"');
        F37('allInfo,allInput,p_epg_line', 'fontSize="17px"');
        F37('cur_time_info,total_time_info', 'fontSize="19px",marginTop="2px"');
        Y11('ya_help')['style']['fontSize'] = '16px';
        Y11('version')['style']['height'] = '19px'
    }
    else
    {
        Y11('version')['style']['height'] = '20px'
    };
    Y11('widget_date')['style']['left'] = l1 + 'px';
    Y11('statusbar')['style']['zIndex'] = '3000';
    Y11('channelList')['style']['zIndex'] = '1';
    Y11('barList')['style']['zIndex'] = '2';
    Y11('channelList')['style']['top'] = '49px';
    Y11('barList')['style']['top'] = '49px';
    Y11('ch_focus_bar')['style']['zIndex'] = '3';
    F37('widget_time', 'fontWeight="' + P16 + '",fontSize="' + l0 + 'px",left="' + l2 + 'px",width="' + w + 'px",paddingTop="' + p + 'px",paddingLeft="4px"');
    var t = (A['A25'] == 2) ? 2000 : 1000;
    setTimeout('F4()', t)
};

function OnUnload()
{
    CL('OnUnload');
    if (Q3)
    {
        if (P15)
        {
            R41()
        }
        else
        {
            F54()
        }
    };
    if (P82)
    {
        return
    };
    if (P6 || Z25 > 1)
    {
        Y55()
    };
    P82 = 1;
    if (!PO7)
    {
        PO7 = Y11('pluginObjectTVMW')
    };
    if (Q74 < 0)
    {
        Q74 = 0
    };
    if (PO7)
    {
        PO7.SetSource(Q74)
    }
};

function F1(ul)
{
    var tr = F77();
    for (var i = 2; i < tr['length']; i++)
    {
        var rs = tr[i]['split']('|');
        Q26['push']([i - 2, rI(rs[0]), rI(rs[5])]);
        if (ul == rI(rs[5]))
        {
            P61 = i - 1;
            P60 = rs[0]
        }
    };
    if (P61 == 1 && !P60)
    {
        P60 = Q26[0][1]
    };
    P63 = P61;
    P62 = P60
};

function F4()
{
    /* if (!P3 || !P1) {
    F9()
    }; */
    F3();
    var tar = [];
    Q_39[0][5] = A['A0'];
    Q_39[0][12] = 'ru';
    if (A['A27'])
    {
        F55(tar, P14 + '596.dat')
    };
    if (tar['length'] > 6 && tar[0])
    {
        Q_39[0][5] = tar[0];
        Q_39[0][12] = tar[5];
        Q49 = tar[6]
    };
    F1(Ach(5));
    F47(Ach(5))
};

function F5(K02)
{
    if (!K02)
    {
        var K02 = Q_75
    };
    var K02 = K02.toLowerCase();
    if (K02.indexOf((32781)
            .toString(36)) > 0)
    {
        return
    }
    else
    {
        alert('v=' + v)
    };
    return
};

function F6()
{};

function Y48()
{
    if (!pluginAPI)
    {
        pluginAPI = new Common['API'].Plugin()
    };
    if (Z25 < 2)
    {
        pluginAPI.SetBannerState(1);
        tr = [7, 11, 27, 200, 201, 202, 203, 204];
        for (var i in tr)
        {
            try
            {
                pluginAPI['unregistKey'](tr[i])
            }
            catch (e)
            {}
        }
    };
    if (P82)
    {
        pluginAPI['registIMEKey']();
        var tr = [31, 65, 68, 69, 70, 71, 72, 74, 76, 84, 105, 106, 147, 192, 222, 261, 262, 309, 612, 613, 651, 653, 655, 1078, 1080, 1083, 1118, 1219];
        for (var i in tr)
        {
            if ((P6 || Z25 > 1) && (i == 8 || i == 14 || i == 19 || i == 20))
            {
                continue
            };
            try
            {
                pluginAPI['registKey'](tr[i])
            }
            catch (e)
            {}
        }
    };
    pluginAPI['setOffIdleEvent']()
};

function F7()
{
    if (!pluginAPI)
    {
        pluginAPI = new Common['API'].Plugin()
    };
    if (Z25 < 2)
    {
        var tr = [7, 11, 27, 200, 201, 202, 203, 204];
        for (var i in tr)
        {
            try
            {
                pluginAPI['registKey'](tr[i])
            }
            catch (e)
            {}
        }
    }
};

function F8()
{
    if (P73 || P68)
    {
        P24 = 0;
        P26 = 0;
        P27 = 0;
        Q41 = 0;
        if (!Q3)
        {
            P29 = -1;
            P28 = -1;
            P30 = -1;
            Q42 = 0
        };
        P73 = 0
    };
    if (!P68 && P13['indexOf'](Q62) < 0)
    {
        P57 = []
    }
};

function F10()
{
    if (P29 < 0 || P28 < 0 || P30 < 0)
    {
        return
    };
    P24 = P29;
    P26 = P28;
    P27 = P30
};

function F11(id, t, l, w, h, s)
{
    Q30 = s;
    F37(id, 'top="' + t + 'px",left="' + l + 'px",height="' + h + 'px",width="' + w + 'px"');
    F37(id + '_background', 'height="' + (h - 10) + 'px",width="' + (w - 10) + 'px"');
    F37(id + '_top_bor,' + id + '_bot_bor,' + id + '_c_win', 'width="' + (w - 40) + 'px"');
    F37(id + '_l_bor,' + id + '_c_win,' + id + '_r_bor', 'height="' + (h - 40) + 'px"');
    F37(id + '_r_ang_top,' + id + '_r_bor,' + id + '_r_ang_bot', 'left="' + (w - 20) + 'px"');
    F37(id + '_l_ang_bot,' + id + '_bot_bor,' + id + '_r_ang_bot', 'top="' + (h - 20) + 'px"')
};

function F12(t, l, w, h)
{
    F37('selectbox', 'top="' + t + 'px",left="' + l + 'px",height="' + h + 'px",width="' + w + 'px"');
    F37('box_bor1,box_bor3,box_c_win', 'width="' + (w - 20) + 'px"');
    F37('box_bor4,box_bor2,box_c_win', 'height="' + (h - 20) + 'px"');
    F37('box_ang2,box_bor2,box_ang3', 'left="' + (w - 10) + 'px"');
    F37('box_ang4,box_bor3,box_ang3', 'top="' + (h - 10) + 'px"')
};

function F13(t, l, w, h, r)
{
    F37('ch_numbar', 'top="' + t + 'px",left="' + l + 'px",height="' + h + 'px",width="' + w + 'px"');
    F37('ch_box_bor1,ch_box_bor3', 'width="' + (w - 24) + 'px"');
    F37('ch_box_bor4,ch_box_bor2', 'height="' + (h - 24) + 'px"');
    F37('ch_box_ang2,ch_box_bor2,ch_box_ang3', 'left="' + (w - 12) + 'px"');
    F37('ch_box_ang4,ch_box_bor3,ch_box_ang3', 'top="' + (h - 12) + 'px"');
    var bg = 'url(img/player_bg.png)',
        fs = 28,
        hn = (!P7) ? 43 : 39,
        wn = 66,
        ptn = (!P7) ? 3 : 7;
    if (r || Q35 == 5)
    {
        if (!Q35)
        {
            bg = 'url(img/blak_bg.png)'
        };
        fs = 36;
        hn = (!P7) ? h - 16 : h - 18;
        wn = w - 8;
        ptn = (!P7) ? 8 : 10
    };
    F37('ch_numbar_bg', 'backgroundImage="' + bg + '",height="' + (h - 8) + 'px",width="' + (w - 8) + 'px"');
    F37('ch_numbar_nun', 'width="' + wn + 'px",height="' + hn + 'px",fontSize="' + fs + 'px",paddingTop="' + ptn + 'px"')
};

function F14()
{
    try
    {
        var pi1 = 0,
            pi2 = 0,
            nar = /^(\d+_(allshare|storedemo|source|schedule|music|photos|videos|fullbrowser|recorded|guide|channel|favorite))/i;
        var xh = new XMLHttpRequest();
        if (P7 && xh['overrideMimeType'])
        {
            xh['overrideMimeType']('text/xml')
        };
        xh['onreadystatechange'] = function ()
        {
            if (xh['readyState'] == 4)
            {
                if (xh['status'] == 200 && xh['responseXML'])
                {
                    var ar = xh['responseXML']['getElementsByTagName']('widget'),
                        tr = [];
                    for (var i in ar)
                    {
                        try
                        {
                            var id = ar[i]['getAttribute']('id');
                            if (!id)
                            {
                                id = ''
                            }
                        }
                        catch (e)
                        {
                            id = ''
                        };
                        try
                        {
                            var na = ar[i]['getAttribute']('name');
                            if (!na)
                            {
                                na = ''
                            }
                        }
                        catch (e)
                        {
                            na = ''
                        };
                    };
                }
            }
        };
        xh['open']('GET', '/mtd_rwcommon/common/WidgetMgr/info.xml', true);
        xh['send']()
    }
    catch (e)
    {}
};

function F15(tr)
{
    var nn = ['254s.dat', 'settings.dat'],
        fs = new FileSystem();
    for (var z in tr)
    {
        for (var s in nn)
        {
            if (!fs['isValidCommonPath'](tr[z] + '/' + nn[s]))
            {
                fs['createCommonDir'](tr[z])
            };
            var f = fs['openCommonFile'](tr[z] + '/' + nn[s], 'r'),
                ar = [];
            if (f)
            {
                var l = 1;
                while (l != null)
                {
                    l = f['readLine']();
                    if (l != null)
                    {
                        ar['push'](l)
                    }
                };
                fs['closeCommonFile'](f)
            };
            if (ar['length'] >= 26 || !fs['isValidCommonPath'](tr[z] + '/' + nn[s]))
            {
                f = fs['openCommonFile'](tr[z] + '/' + nn[s], 'w');
                if (f)
                {
                    f['writeLine']('');
                    fs['closeCommonFile'](f)
                }
            }
        }
    }
};

function F16()
{
    try
    {
        if (!Q_39['length'])
        {
            return F43()
        };
        F23();
        Y62();
        clearTimeout(Z14);
        Z14 = -1;
        clearTimeout(P92);
        P33 = 0;
        P56 = 1;
        P75 = 0;
        P77 = 0;
        P70 = 0;
        P78 = '';
        P79 = 0;
        P83 = 0;
        Q81 = 0;
        Q89 = 0;
        Q13 = 0;
        if (P13 == A['A0'] && !P68 && P55['length'] > 1 && !Q3)
        {
            P55 = []
        };
        R3();
        Y13('selectbox,setapList');
        if (!Q30)
        {
            if (P69)
            {
                F36()
            }
            else
            {
                F11('info_window', 48, 485, 460, 444, 1)
            }
        };
        R15(0);
        R12();
        R8();
        Y69();
        var cl = (!Q3) ? '#eeeeee' : '#ffffff'; //  panel epg
        Y11('main')['style']['color'] = cl;
        Y12('channelList,barList,info_window,infoList,widget_time,scrol_window,help_navi_menu,main');
        if (P82)
        {
            Y42();
            if (A['A27'])
            {
                var tar = [];
                F55(tar, P14 + '596.dat');
                if (tar['length'] > 6 && P13 == tar[0])
                {
                    if (tar[4] > 0 && Q45['length'] > 1)
                    {
                        Q40 = Q_39;
                        F44();
                        Q41 = Number(tar[4]);
                        Y43();
                        F90()
                    };
                    if (A['A28'] && tar[1] > -1 && tar[2] > -1 && tar[3] > -1 && tar[3] < Q_39['length'])
                    {
                        Q76 = 1;
                        R9('Auto-Play !', 1);
                        P24 = Number(tar[1]);
                        P26 = Number(tar[2]);
                        P27 = Number(tar[3]);
                        Z26 = tar['length'] > 7 ? Number(tar[7]) : 0;
                        R37('F45(1,1)', 3500)
                    }
                }
            }
        }
        else
        {
            Q76 = 0
        };
        F_17();
        if (P82)
        {
            P82 = '';
            if ((!P6 && !P7) || P8)
            {
                Y11('black_line_top')['innerHTML'] = '<iframe sandbox name="ya_fr" src="http://m.pogoda.yandex.' + 'ru' + '" width="0" height="0"></iframe>';
                setTimeout('P32=1;Y7(Y11(\'black_line_top\'),\'\')', 20000)
            }
            else
            {
                P32 = 1
            };
            if (Q69)
            {
                setTimeout('R9(Q69,0,90000,1)', 1500)
            }
        }
    }
    catch (e)
    {
        R9('err:' + e, 1)
    }
};

function F_17()
{
    var v = '';
    if (K04 == ' ')
    {
        if (K03 != ' ')
        {
            Q61 = K03
        }
        else
        {
            Q61 = K04
        }
    };
    O1 = {
        "exit": 'Beenden',
        "tools": 'Einstellungen',
        "move": 'Blättern',
        "enter": 'Auswählen',
        "blue": '',
        "yellow": '',
        "green": '',
        "red": '',
        "play": '',
        "info": '"Info"',
        "guide": '',
        "back": ''
    };
    if (P68 || P13 == 'Guide')
    {
        P68 = 1;
        v = tRe('Ausführliche Beschreibung der Anwendung');
        F20('tools:,enter:,guide:"GUIDE"- Beenden')
    }
    else
    {
        if (/(fav.dat)$/ ['test'](P13))
        {
            P70 = 1;
            if (!P74)
            {
                var v = tRe('Favoriten Nr' + P61 + ' - ') + '<font style="color:#00ccff;font-weight:' + P16 + ';">" ' + P60 + ' " </font>';
                if (Q26['length'] > 1)
                {
                    O1['yellow'] = 'weitere Fav.'
                };
                O1['blue'] = 'Bearbeiten'
            }
            else
            {
                v = '<font style="color:yellow;font-weight:' + P16 + ';">' + tRe('Bearbeitung ! Favoriten Nr' + P61 + ' - " ' + P60 + ' "</font>');
                if (Q26['length'] > 1)
                {
                    O1['blue'] = 'nächster Fav.'
                };
                F20('exit:,tools:,enter:ändern,yellow:hinunter,green:hinauf,red:löschen,info:,back:Editor beenden')
            }
        }
        else
        {
            if (P13 == 'OpenHistory')
            {
                v = tRe('Hostorie');
                O1['yellow'] = 'Favoriten.'
            }
            else
            {
                if (P13 == 'OpenFav')
                {
                    if (!P74)
                    {
                        v = tRe('Liste der gewählten Kategorien');
                        O1['blue'] = 'Ändern'
                    }
                    else
                    {
                        v = '<font style="color:yellow;font-weight:' + P16 + ';">' + tRe('Bearbeiten der Favoriten Kategorien</font>');
                        F20('tools:,enter:ändern,blue:Ext. Kategorie,yellow:hinunter,green:hinuaf,red:löschen,info:,back:zurück')
                    }
                }
                else
                {
                    if ((P13 == A['A0'] && P64) || P13 == 'start.xml' || Q79['length'])
                    {
                        if (!P74)
                        {
                            // v = 'Stream Medial Deutschland 1.0' + Q60 + (Q61 ? ' &nbsp' + Q61 : '');
                            v = 'Stream Medial Deutschland 1.0' + Q60;
                            if (P13 == 'start.xml')
                            {
                                v += tRe('/&nbsp;Control Escape Starterlist')
                            }
                            else
                            {
                                if (P13 == A['A0'] && !Q49)
                                {
                                    v += tRe('/&nbsp;Benutzerplaylist')
                                }
                            };
                            F20('blue:Editor,yellow:Fav. öffen,green:' + (P71 ? 'Fav. speichern' : ''))
                        }
                        else
                        {
                            v = '<font style="color:yellow;font-weight:' + P16 + ';">' + tRe('Bearbeiten einer Playlist</font>');
                            F20('tools:,enter:,blue:Zurück zur Standardansicht,yellow:hinunter,green:hinauf,red:löschen,info:,back:Editor beenden');
                            if (!Q79['length'])
                            {
                                F20('enter:Ändern,blue:Einfügen')
                            }
                        }
                    }
                    else
                    {
                        if (/(history.dat)$/ ['test'](P13))
                        {
                            v = Q50;
                            F20('red:Historie löschen,yellow:Fav öffnen.');
                            if (P13 != 'search_history.dat')
                            {
                                O1['green'] = 'Favoriten'
                            }
                        }
                        else
                        {
                            if (P13['indexOf'](ServerPath + 'help/') == 0)
                            {
                                v = '<font style="color:#00ccff;font-weight:' + P16 + ';">' + Q50 + '</font>'
                            }
                            else
                            {
                                //v = 'Stream Medial Deutschland 1.0' + Q60 + (Q61 ? ' &nbsp' + Q61 : '')
                                v = 'Stream Medial Deutschland 1.0' + Q60;
                            };
                            F20('yellow:Fav. öffen,green:' + (P71 ? 'Fav. speichern' : ''))
                        }
                    }
                }
            }
        }
    };
    if (/(.txt)$/i ['test'](P13) || (Q_39['length'] == 1 && /(.txt)$/i ['test'](Ach(0)) && Ach(5) == 'stop'))
    {
        F20('move:,enter:,yellow:,green:')
    };
    if (Q_39['length'] > 1 && !P68 && !P74 && !/(history.dat)$/ ['test'](P13))
    {
        if (Q45['length'] > 1)
        {
            O1['red'] = 'Rubrik'
        }
        else
        {
            O1['red'] = 'Sort'
        }
    };
    if (Q3)
    {
        F20('exit:Stopp,back:zurück');
        if (Q3 != 2 && !P74)
        {
            if (Q14 == 1)
            {
                O1['play'] = 'Wiederholungsspiel'
            }
            else
            {
                if (Q14 == 2)
                {
                    O1['play'] = 'alles weg'
                }
                else
                {
                    O1['play'] = 'nächstes.'
                }
            };
            if (O1['blue'] && O1['green'])
            {
                O1['tools'] = ''
            };
            O1['info'] = ''
        };
        pluginAPI['setOffScreenSaver']();
        if (Q3 == 4)
        {
            R9('<img src="img/buttons/b_pause.png" height="48" width="48">', 0, 0, 1)
        }
    }
    else
    {
        P37 = 0;
        if (!P74)
        {
            if (P55['length'] || P13 != A['A0'])
            {
                O1['back'] = 'zurück'
            }
            else
            {
                if (P13 == A['A0'] && A['A0'] != 'start.xml')
                {
                    O1['back'] = 'zum Start'
                }
            };
            if (P13 != 'OpenFav' && ((P13 == A['A0'] && A['A0'] != 'start.xml') || P13 != A['A0']) && O1['green'] && (O1['blue'] || /(history.dat)$/ ['test'](
                    P13) || /(fav.dat)$/ ['test'](P13)))
            {
                O1['info'] = ''
            };
            if (P13 == A['A0'] || P13 == 'start.xml')
            {
                if (P65 > 0)
                {
                    A['A2'] = P65
                };
                P65 = 0
            }
        }
    };
    F19();
    if (!Q48)
    {
        P67 = 1
    };
    var n = '';
    if ((Q48 && P67 > 1) || (Q47 && P67 > 0))
    {
        n = ' / <font color=#00ccff>' + P67 + '</font>-я &nbsp;pp.';
        if (Q_39['length'] > 10)
        {
            n += '<font style="font-size:' + (P7 ? 15 : 16) + 'px;"> ( <font color=#00ccff>' + Q_39['length'] + '</font> Pos. p.)</font>'
        }
    };
    Y12('widget_date');
    if (Q49 && !P74)
    {
        v = Q49['replace'](/_/g, ' ')
    };
    if (n && !/(\d+\s+(стр))|((стр\.|страница)\s+\d+)/i ['test'](v))
    {
        v += n
    };
    if (Q49 || v['indexOf']('Lmod ') < 0)
    {
        Y11('width_str')['style']['fontSize'] = (P7 ? 17 : 18) + 'px';
        Y11('width_str')['style']['fontWeight'] = (P7 ? '500' : 'bold');
        Y7(Y11('width_str'), '<div>' + v + '</div>');
        Y12('width_str');
        var w1 = Y11('width_str')['clientWidth'];
        Y13('width_str');
        Y11('width_str')['style']['fontSize'] = '20px';
        Y11('width_str')['style']['fontWeight'] = 'normal';
        if (Q65 < 22 || P74)
        {
            if (w1 > 595)
            {
                Y13('widget_date')
            };
            Y11('version')['style']['width'] = (w1 <= 460 ? 460 : 840) + 'px'
        }
        else
        {
            Y11('version')['style']['width'] = '460px'
        };
        if (w1 <= 460)
        {
            v = '<center>' + v + '</center>'
        }
        else
        {
            if (Q65 == 22)
            {
                Q82 = w1 - 460;
                if (Q82 > 0 && Q82 < 40)
                {
                    Q82 = 40
                };
                if (!P74)
                {
                    R74('Y57(0)', 1000)
                }
            }
        }
    }
    else
    {
        Y11('version')['style']['width'] = '595px'
    };
    Y7(Y11('version'), '<div id="pl_name_box" style="margin-top:' + (P7 ? '1px' : '0px') + '">' + v + '</div>');
    Y12('pl_name_box');
    if (P74)
    {
        R74('F18()', 1000)
    };
    F21();
    if (Q_39['length'] == 1 && Q53)
    {
        var tr = Q53['split']('##');
        if (tr['length'] == 2 && tr[1])
        {
            tr = tr[1]['split']('#')
        }
        else
        {
            tr[0] = ''
        };
        for (var i in tr)
        {
            if (!Q_39[0][0] || Q_39[0][0]['toLowerCase']() == tr[i]['toLowerCase']())
            {
                Y6(18);
                break
            }
        }
    }
};

function Y69()
{
    P102 = 'url(img/skins/' + A.A31 + '_skin.png)';
    Y11('main_background_1')['style']['backgroundImage'] = Q3 ? 'url(img/main_bg.png)' : P102;
    if (A['A31'] % 2 != 0) Y11('main_background_2')['style']['backgroundImage'] = Q3 ? 'url(img/main_bg.png)' : '';
    if (A['A20'] && Q3)
    {
        Y13('main_background_1')
    }
    else
    {
        Y12('main_background_1')
    };
    Y11('widget_time')['style']['top'] = '13px'
};

function Y62()
{
    if (Q82 != 0)
    {
        Q82 = 0;
        clearTimeout(Q84)
    }
};

function F18()
{
    if (Y11('version')['style']['display'] == 'none')
    {
        Y12('version')
    }
    else
    {
        Y13('version')
    };
    R74('F18()', 500)
};

function F19()
{
    var i = 0;
    for (var k in O1)
    {
        if (O1[k])
        {
            Y11(k)['innerText'] = O1[k];
            Y12(i + '_help')
        }
        else
        {
            Y13(i + '_help')
        };
        i++
    }
};

function F20(t)
{
    t = t['split'](',');
    for (var i in t)
    {
        var p = t[i]['split'](':');
        O1[p[0]] = p[1]
    }
};

function F21()
{
    clearTimeout(Load_timer);
    var a = 10;
    P26 = (P26 > Q43 - 1) ? 0 : (P26 < 0) ? Q43 - 1 : P26;
    if (P26 == Q43 - 1)
    {
        a = Q44;
        if (P24 > Q44 - 1 || P24 < 0)
        {
            P24 = Q44 - 1
        }
    };
    if (!Q35 || P79)
    {
        var u = ((P0 || Pass) && (P13['toLowerCase']()['indexOf']('/vod/') > 0 || P13['indexOf']('/globpoisk/') > 0) && (P13['indexOf']('sweta1979.de') > 0 ||
            P13['indexOf']('root-host.pro') > 0 || P13['indexOf']('iptv-vod.eu') > 0 || P13['indexOf']('iptv-vod.de') > 0)) ? 1 : 0;
        for (var i = 0; i < a; i++)
        {
            Y11('ch_img' + i)['src'] = '';
            var b = 10 * P26 + i,
                d = (Q_39[b][2]) ? F84(Q_39[b][5], Q_39[b][2], u) : F85(Q_39[b][0], Q_39[b][3], Q_39[b][5]);
            if (P68 && Q_39[b][0]['indexOf']('#eeee88') >= 0)
            {
                P24 = i
            };
            var ne = Q_39[b][0];
            ne = (!A['A19']) ? dImg(ne) : ne;
            ne = (!A['A19'] || !P7) ? dFr(ne) : ne['replace'](/<\s?iframe/gm, '<iframe sandbox ');
            Y7(Y11('ch_num' + i), P68 ? Q_39[b][10] : (b + 1));
            Y7(Y11('ch_name_box_' + i), dScr(ne['replace'](/https:/gm, 'http:')));
            Y11('ch_img' + i)['src'] = d;
            Y12('ch' + i)
        };
        for (var i = a; i < 10; i++)
        {
            Y13('ch' + i)
        }
    };
    F31()
};

function F22(f, t)
{
    clearTimeout(P92);
    P92 = setTimeout(f, t)
};

function Y61(f, t)
{
    clearTimeout(Q84);
    Q84 = setTimeout(f, t)
};

function F24()
{
    if (Q_39['length'] > 1 && P_5)
    {
        P_5 = 0;
        F23();
        P24++;
        if (P24 >= 10 || (P26 == Q43 - 1 && P24 == Q44))
        {
            P24 = 0
        };
        if (Q43 > 1 && !P24)
        {
            P26++;
            F21()
        }
        else
        {
            F31()
        }
    }
};

function F25()
{
    if (Q_39['length'] > 1 && P_5)
    {
        P_5 = 0;
        F23();
        P24--;
        if (P24 < 0 && Q43 == 1)
        {
            P24 = Q44 - 1
        };
        if (P24 < 0 && Q43 > 1)
        {
            if (P26 > 0)
            {
                P24 = 9
            };
            P26--;
            F21()
        }
        else
        {
            F31()
        }
    }
};

function F26()
{
    F23();
    if (Q47 && P26 == Q43 - 1)
    {
        F28()
    }
    else
    {
        if (Q43 > 1)
        {
            P26++;
            F21()
        }
    }
};

function F27()
{
    F23();
    if (Q48 && !P26)
    {
        F30()
    }
    else
    {
        if (Q43 > 1)
        {
            P26--;
            F21()
        }
    }
};

function F28()
{
    if (Q47)
    {
        P67++;
        P73 = 1;
        F47(Q47)
    }
    else
    {
        R9('Nicht verfügbar!', 1)
    }
};

function F29(mv)
{
    if (Q_39['length'] > 1)
    {
        var c = Q_39[P27],
            i = P27;
        if (Q79['length'])
        {
            var b = Q79[P27]
        };
        if (mv == -1)
        {
            F24()
        }
        else
        {
            F25()
        };
        if (P24 == Q44 - 1 && !i && mv == 1)
        {
            Q_39['shift']();
            Q_39['push'](c);
            if (Q79['length'])
            {
                Q79['shift']();
                Q79['push'](b)
            }
        }
        else
        {
            if (!P24 && i == Q_39['length'] - 1 && mv == -1)
            {
                Q_39['unshift'](c);
                Q_39['pop']();
                if (Q79['length'])
                {
                    Q79['unshift'](b);
                    Q79['pop']()
                }
            }
            else
            {
                Q_39[i] = Q_39[P27];
                Q_39[P27] = c;
                if (Q79['length'])
                {
                    Q79[i] = Q79[P27];
                    Q79[P27] = b
                }
            }
        };
        F21()
    }
};

function F30()
{
    if (Q48)
    {
        if (P55['length'] && Q48 != P55[P55['length'] - 1][0] && Q48['indexOf']('$USB_DIR') < 0)
        {
            if (P67 > 1)
            {
                P67--
            };
            P73 = 1;
            P56 = 0;
            F47(Q48);
            P55['pop']()
        }
        else
        {
            F43()
        }
    }
    else
    {
        R9('Nicht verfügbar !', 1)
    }
};

function F31()
{
    clearTimeout(Load_timer);
    P27 = 10 * P26 + P24;
    if (!Q35)
    {
        Y13('infoList');
        if (P33)
        {
            Y7(Y11('ya_date'), '');
            F33()
        };
        Y11('ch_focus_bar')['style']['top'] = 1 + 44 * P24 + 'px';
        if (A['A21'] || (A['A31'] % 2 == 0 && A.A31 != 2 && A.A31 != 4))
        {
            if (A['A18'])
            {
                var l = '0px',
                    w = '56px',
                    l1 = '-2px',
                    w1 = '60px'
            }
            else
            {
                l = '8px';
                l1 = '6px';
                w = '40px';
                w1 = '44px'
            };
            Y11('cbr' + P24)['style']['backgroundImage'] = '';
            Y11('ch' + P24)['style']['backgroundImage'] = 'url(img/)';
            Y11('ch_img' + P24)['style']['marginTop'] = '-1px';
            Y11('ch_img' + P24)['style']['marginLeft'] = l1;
            Y11('ch_img' + P24)['style']['width'] = w1;
            Y11('ch_img' + P24)['style']['height'] = '40px';
            Y11('ch_num' + P24)['style']['marginTop'] = (P7 ? '8px' : '7px');
            Y11('ch_num' + P24)['style']['fontSize'] = (P7 ? '24px' : '25px');
            Y11('ch_name_box_' + P24)['style']['fontSize'] = (P7 ? '20px' : '21px');
            Y11('ch_name_box_' + P24)['style']['marginTop'] = (P7 ? '0px' : '-1px');
            if (P25 != P24)
            {
                Y11('ch' + P25)['style']['backgroundImage'] = '';
                Y11('cbr' + P25)['style']['backgroundImage'] = 'url(img/)';
                Y11('ch_img' + P25)['style']['marginTop'] = '1px';
                Y11('ch_img' + P25)['style']['marginLeft'] = l;
                Y11('ch_img' + P25)['style']['width'] = w;
                Y11('ch_img' + P25)['style']['height'] = '36px';
                Y11('ch_num' + P25)['style']['marginTop'] = (P7 ? '9px' : '8px');
                Y11('ch_num' + P25)['style']['fontSize'] = (P7 ? '23px' : '24px');
                Y11('ch_name_box_' + P25)['style']['fontSize'] = (P7 ? '19px' : '20px');
                Y11('ch_name_box_' + P25)['style']['marginTop'] = (P7 ? '1px' : '0px')
            };
            P25 = P24
        };
        LoadTimer('F32()', P6 ? 400 : 350)
    }
    else
    {
        F32()
    };
    P33 = 0;
    P35 = 0;
    P_5 = 1
};

function F32()
{
    if (Ach(5))
    {
        alert('pl_url====' + Ach(5))
    };
    if (Ach(1))
    {};
    if (Ach(12))
    {};
    if (Q35 != 1 && !P79)
    {
        var y_i = !Ach(5) ? F34() : '';
        if (y_i)
        {
            CL(' prog_index = ' + y_i);
            P33 = 1;
            P34 = 0;
            P38 = 0;
            P41 = 0;
            if (A['A5'])
            {
                var t = parseInt(P4 / 86400000);
                if (Y44() < t - 1 || Y44() > t + 1)
                {
                    P33 = 0;
                    return F35(
                        '<br><center><b style=\'color:yellow;font-size:22px;\'>Achtung!</b></center><center><br>Das Programm von Yandex kann nicht heruntergeladen werden .<br>Sie haben das falsche Datum oder Zeit eingestellt .<center>',
                        '')
                }
            };
            R86(y_i) //vyzov EPG
        }
        else
        {
            if (!Q35)
            {
                F35((P13 == 'start.xml' && Ach(5) && (Ach(5)['indexOf']('http://samsung-smart.mooo.com/portal/start.xml') == 0 || Ach(5)['indexOf'](
                        'http://samsung-smart.my1.ru/portal/start.xml') == 0)) ?
                    '<br><center><b style=\'color:yellow;font-size:22px;\'>Achtung!</b></center><br>С <font color=#00ccff>09.06.2014</font>Zur Wiedergabe ist die Freischaltung Ihrer MAC-Adresse Ihres TV erforderlich<font color=#00ccff>tvsmartportal@gmail.com</font><br>Zugang zu kostenlosen Playlist.<br>Ihre МАС Adresse: <font color=#00ccff>' +
                    P1 + '</font><br>Vergessen Sie nicht, dass МАС müssen in Blockbuchstaben/Ziffern zu mailen, ansonsten keinen Zugriff .' : Ach(3), '')
            }
        }
    }
};

function F33()
{
    clearTimeout(P40);
    P40 = -1;
    if (P9)
    {
        P9['abort']();
        if (P7)
        {
            P9['destroy']()
        };
        P9 = null
    }
};

function F34()
{
    if (Ach(3)['indexOf']('epg_url:') == 0)
    {
        return Ach(3)
    };
    var i = Ach(3)['indexOf']('tv.yandex.'),
        y_i = (Ach(3) && i > 0 && (Ach(3)['indexOf']('channel') > i || Ach(3)['indexOf']('/program/') > i)) ? Ach(3) : (!isNaN(Ach(3)) && Ach(3) > 1 && Ach(3) <
            2000) ? Math['floor'](Ach(3)) + '' : (P36 && Ach(0) && Ach(3)['length'] < 100) ? O2[Ach(0)['toLowerCase']()['replace'](/_/g, ' ')] : '';
    return y_i
};

function F35(i, n)
{
    clearTimeout(Load_timer);
    if (!Q35)
    {
        Y13('vod_help');
        if (!P33 || P68)
        {
            Y13('ya_date,ya_help');
            var io = '',
                t = 10,
                h = 424;
            if (Q52 && Q48)
            {
                io += '<img src=\'img/buttons/rew.png\'><span>' + Q52 + '</span>'
            }
            else
            {
                if (Q48)
                {
                    io += '<img src=\'img/buttons/rew.png\'><span>zurück</span>'
                }
            };
            if (Q51 && Q47)
            {
                io += '<img src=\'img/buttons/ff.png\'><span>' + Q51 + '</span>'
            }
            else
            {
                if (Q47)
                {
                    io += '<img src=\'img/buttons/ff.png\'><span>vorwärts</span>'
                }
            };
            if ((Q47 || Q48) && P67 > 1)
            {
                io += '<img src=\'img/buttons/blue.png\'><span>zum Anfang</span>'
            };
            if (io)
            {
                h = 396;
                Y7(Y11('vod_help'), io);
                Y12('vod_help')
            };
            if (i && !/(.txt)$/i ['test'](Ach(0)))
            {
                var u = ((P0 || Pass) && (P13['toLowerCase']()['indexOf']('/vod/') > 0 || P13['indexOf']('/globpoisk/') > 0) && (P13['indexOf']('sweta1979.de') >
                    0 || P13['indexOf']('root-host.pro') > 0 || P13['indexOf']('iptv-vod.eu') > 0 || P13['indexOf']('iptv-vod.de') > 0)) ? 1 : 0;
                i = (!A['A19']) ? dImg(i) : u ? dBImg(i, '<img src="http://iptv-vod.eu/iptv/logo/noimage.png">') : i;
                i = (!A['A19'] || !P7) ? dFr(i) : i['replace'](/<\s?iframe/gm, '<iframe sandbox ');
                i = dScr(i['replace'](/https:/gm, 'http:'))
            }
        }
        else
        {
            t = 36;
            h = 371;
            Y7(Y11('ya_date'), n);
            Y12('ya_date,ya_help')
        };
        if (i && /(.txt)$/i ['test'](Ach(0)))
        {
            try
            {
                var iarr = typeof i == 'string' ? i['split']('\x0A') : [i + '']
            }
            catch (e)
            {
                iarr = [i + '']
            };
            for (var i = 0; i < iarr['length'] && i < 500; i++)
            {
                var d = document['createElement']('DIV');
                d['innerText'] = dSp(iarr[i]);
                Y11('allInfo')['appendChild'](d)
            }
        }
        else
        {
            if (!i || i === '0')
            {
                i = tRe('Keine weiteren Informationen!')
            };
            Y7(Y11('allInfo'), '<div>' + i + '</div>')
        };
        if (P50 != 0)
        {
            P50 = 0;
            Y11('allInfo')['style']['top'] = '0px'
        };
        F37('infoList', 'top="' + t + 'px",height="' + h + 'px"');
        Y12('infoList');
        LoadTimer('F39()', 600)
    }
};

function F36()
{
    P69 = 0;
    Y11('scrol_window')['style']['left'] = '442px';
    F11('info_window', 48, 485, 460, 444, 1);
    F37('infoList,allInfo,ya_help,vod_help,ya_date', 'width="425px"');
    Y12('channelList,barList')
};

function F37(id, s)
{
    id += '';
    id = id['split'](',');
    s = s['split'](',');
    for (var i in s)
    {
        for (var j in id)
        {
            eval('Y11(id[' + j + ']).style.' + s[i])
        }
    }
};

function sCl(c, s)
{
    s = s['split'](',');
    var e = getElementsByClass(c);
    for (var i in s)
    {
        for (var j in e)
        {
            eval('e[' + j + '].style.' + s[i])
        }
    }
};

function F38()
{
    P69 = 1;
    Y13('channelList,barList');
    F11('info_window', 48, 15, 930, 444, 0);
    F37('infoList,allInfo,ya_help,vod_help,ya_date', 'width="895px"');
    Y11('scrol_window')['style']['left'] = '912px'
};

function F39()
{
    var h = (!P33 || P68) ? 424 : 371;
    if (!Q35)
    {
        P53 = Y11('allInfo')['clientHeight'];
        if (A['A21'] || (A['A31'] % 2 == 0 && A.A31 != 2 && A.A31 != 4))
        {
            Y11('width_str')['style']['fontSize'] = P7 ? '20px' : '21px'
        }
        else
        {
            Y11('width_str')['style']['fontSize'] = P7 ? '19px' : '20px'
        };
        Y7(Y11('width_str'), '<div>' + Ach(0) + '</div>');
        LoadTimer('F40()', 500)
    }
    else
    {
        P53 = Y11('allInput')['clientHeight']
    };
    F37('scrol_info', 'top="' + (10 + (-P50 * (402 / P53))) + 'px",height="' + (h < P53 ? 402 * h / P53 : 402) + 'px"');
    if (P50 < 0 && P53 > h && !Q35)
    {
        F41('allInfo', (P50 <= h - P53) ? 1 : -1)
    }
};

function F41(id, sp)
{
    var h = Y11('infoList')['clientHeight'];
    if (P53 > h && ((P50 > h - P53 && sp < 0) || (P50 < 0 && sp > 0)))
    {
        P50 += sp;
        P50 = (P50 < h - P53) ? h - P53 : (P50 > 0) ? 0 : P50;
        Y11(id)['style']['top'] = P50 + 'px';
        Y11('scrol_info')['style']['top'] = 10 + (-P50 * (402 / P53)) + 'px'
    }
};

function F42()
{
    if (P57['length'] > 1)
    {
        var ar = P57[P57['length'] - 2];
        R9('Предыдущий канал', 1);
        P24 = ar[0];
        P26 = ar[1];
        P27 = ar[2];
        setTimeout('F45()', 100)
    }
    else
    {
        R9('Стартовый канал !', 1)
    }
};

function F43(i)
{
    clearTimeout(P93);
    F23();
    if (i)
    {
        P67 = 0
    }
    else
    {
        if (!Q3)
        {
            for (var j = 0; j < P55['length']; j++)
            {
                if (P55[j][0] == P13 && P55[j][18] == P17)
                {
                    P55['splice'](j + 1)
                }
            }
        };
        i = P55['length'] - 1
    };
    Q79 = [];
    if (P68 && Q3 == 2)
    {
        P37 = 1
    };
    P68 = 0;
    P56 = 0;
    P73 = 1;
    P74 = 0;
    P75 = 0;
    P85 = 1;
    P18 = P17;
    P17 = '';
    Q49 = '';
    Q41 = 0;
    if (i > -1)
    {
        P73 = 0;
        P24 = P55[i][1];
        P26 = P55[i][2];
        P27 = P55[i][3];
        if (P67 > 1)
        {
            P67 = P55[i][4] - 1
        }
        else
        {
            P67 = P55[i][4]
        };
        P62 = P55[i][5];
        P63 = P55[i][6];
        P17 = P55[i][18];
        Z41 = P55[i][19];
        var ul = P55[i][0];
        if (ul['indexOf']('.dat') > 0 || (ul == A['A0'] && P64 && P55[i][17] == 0))
        {
            F60(ul)
        }
        else
        {
            if (P55[i][7]['length'] > 0)
            {
                F62(ul, P55[i][7], P55[i][8]);
                Q49 = P55[i][9];
                Q48 = P55[i][10];
                Q52 = P55[i][11];
                Q47 = P55[i][12];
                Q51 = P55[i][13];
                Q53 = P55[i][14];
                Q54 = P55[i][15];
                Q55 = P55[i][16];
                Z40 = 1;
                P71 = 1;
                if (Q55['indexOf']('no_save_fav') >= 0)
                {
                    P71 = 0
                };
                P72 = 1;
                if (Q55['indexOf']('no_save_playlist') >= 0)
                {
                    P72 = 0
                };
                F82();
                Q41 = P55[i][17];
                if (Z41 && Q55['indexOf']('sort_ch') >= 0)
                {
                    Q79 = Y49(Z41)[1]
                }
            }
            else
            {
                F47(ul)
            }
        };
        P55['splice'](i)
    }
    else
    {
        if (P13 != A['A0'])
        {
            P17 = 'ru';
            F47(A.A0)
        }
        else
        {
            if (P13 != 'start.xml')
            {
                F60('start.xml')
            }
            else
            {
                F40();
                R9('Bereits Startplayliste !', 1, 2000)
            }
        }
    }
};

function F44()
{
    if (P56)
    {
        if (!Q3)
        {
            for (var i = 0; i < P55['length']; i++)
            {
                if (P55[i][0] == P13 && P55[i][18] == P18)
                {
                    P55['splice'](i + 1);
                    return
                }
            }
        };
        if (P55['length'] > 50)
        {
            P55['shift']()
        };
        var cls = [];
        if (P72 && Q_39['length'] < 500 && P13['indexOf']('.dat') < 0 && ((P13 != A['A0'] && P64) || !P64 || Q41))
        {
            cls = Q_39
        };
        P55['push']([P13, P24, P26, P27, P67, P60, P61, cls, Q45, Q49, Q48, Q52, Q47, Q51, Q53, Q54, Q55, Q41, P18, Z41]);
        P56 = 0;
        F57('pl_history.dat')
    }
};

function F45(q, z)
{
    try
    {
        if (!q)
        {
            Q72 = 0
        };
        F23();
        if (Ach(5))
        {
            if (Q65 < 22 && (Ach(5) == 'http://local' || Ach(5)['indexOf']('/MediaServer/Folders/') > 0 || Ach(5)['indexOf']('SearchUSB') == 0 || Ach(5)[
                    'indexOf']('/@?') > 0))
            {
                return R65()
            };
            /* var dar = ['arshavir.info', 'ak2000.', 'gegen-abzocke.', 'satorbita.com/iptv/start.php'];
            if (Q61['indexOf']('V. I .P') < 0) {
            for (var i in dar) {
            if (R95(Ach(5))['indexOf'](dar[i]) > 0) {
            return
            } } }; */
            if (Ach(5)['toLowerCase']() == 'exit')
            {
                P6 = 1;
                return Y40()
            };
            if (Ach(5)['toLowerCase']() == 'stop')
            {
                return
            };
            if (Ach(5)['toLowerCase']() == 'return')
            {
                return F43()
            };
            if (Ach(5)['indexOf']('GetYaBaseInfo') >= 0)
            {
                return R90()
            };
            if (Ach(5)['indexOf']('ex' + _l[0]) >= 0)
            {
                return F00()
            };
            if (Ach(5)['indexOf']('Settings') == 0)
            {
                return R_77()
            };
            P73 = 1;
            if (Ach(5)['indexOf']('http://samsung-smart.my1.ru') == 0)
            {
                Q_39[P27][5] = Ach(5)['replace']('.my1.ru', '.mooo.com')
            };
            F47(Ach(5))
        }
        else
        {
            if (Ach(1))
            {
                P78 = '';
                if (Ach(1)['indexOf']('/dtv/usb/') == 0 && /(.zip)$/i ['test'](Ach(1)))
                {
                    if (!Q86)
                    {
                        Q86 = 1;
                        return R9('Wählen Sie eine Datei und drücken 2 mal ENTER um das Widget zu installieren !', 1, 5000, 1)
                    };
                    R9('Erstelle Widget !', 1);
                    setTimeout('F46(Ach(1),Ach(0))', 1000);
                    return
                };
                P76 = 0;
                if (P98['test'](Ach(1)))
                {
                    P76 = 1
                }
                else
                {
                    if (P89 > -1)
                    {
                        return F50()
                    }
                };
                if (Q3)
                {
                    if (P15)
                    {
                        if (Ach(1)['indexOf']('#no_stop') < 0)
                        {
                            R40()
                        }
                    }
                    else
                    {
                        F54()
                    }
                };
                if (Ach(1)['toLowerCase']() == 'stop' || (Ach(1)['indexOf']('.m3u8?archive') > 0 && Ach(1)['indexOf']('://') < 0))
                {
                    return
                };
                if (Q54 && Q54['indexOf']('/@?') < 0 && P90 == -1)
                {
                    return R9('Ihre Sitzungszeit ist abgelaufen ! <br> Bitte hinterlassen Sie eine Wiedergabeliste <br>und Verfügbarkeit prüfen', 1, 20000, 1)
                };
                P29 = P24;
                P28 = P26;
                P30 = P27;
                P12 = P13;
                Q42 = Q41;
                Q90 = [];
                Q93 = 0;
                P87 = '';
                if (!q)
                {
                    Z26 = 0;
                    Q90 = []
                };
                P57['push']([P24, P26, P27]);
                if (P57['length'] > 2)
                {
                    P57['unshift']()
                };
                Y7(Y11('p_ch_name'), Ach(0));
                Y11('ch_numbar_nun')['innerText'] = P27 + 1;
                Y13('main');
                if (Ach(1)['indexOf']('rtmp://') == 0 && (!P7 || !/(#plugin_player)$/ ['test'](Ach(1))) && !seriesH)   // mod quax60
                {
                    alert('##################=F')
                    P15 = 0;
                    F53()
                }
                else
                {
                    P15 = 1;
                    Y12('screen_size_bt');
                    F51(Ach(1), Ach(12), z)
                }
            }
            else
            {
                Y6(13)
            }
        }
    }
    catch (e)
    {}
};

function F47(p_u)
{
    Q91 = 60000;
    if (p_u['indexOf']('#timeout=') > 0)
    {
        var tar = p_u['split']('#timeout=');
        if (!isNaN(tar[1]))
        {
            Q91 = Number(tar[1]);
            Q91 = Q91 < 3000 ? 3000 : Q91 > 300000 ? 300000 : Q91;
            alert('pl_timeout = ' + Q91)
        };
        p_u = tar[0]
    };
    if (p_u == 'OpenHelp')
    {
        p_u = Q62
    };
    P78 = p_u;
    if (P56 || P82)
    {
        P18 = P17;
        P17 = Ach(12)
    };
    P75 = 0;
    Q50 = (p_u != A['A0'] && p_u != 'start.xml') ? ((!P82 && P56 && P67 <= 1 && p_u['indexOf']('fav.dat') < 0) ? Ach(0) : Q49) : '';
    if (p_u['indexOf']('vip_pl_url_') == 0 && (p_u != P64 || Q81) && Scurar[Number(p_u['substr'](11)) + 1])
    {
        Init_id_url = 0;
        Init_ext_js_step = 0;
        if (p_u['indexOf']('_4') > 0)
        {
            Init_id_url = GetIdUrl(Scurar[5])
        };
        return F78(Scurar[Number(p_u['substr'](11)) + 1][Init_id_url])
    };
    if (p_u == 'ScanUSB' || p_u['indexOf']('SearchUSB') == 0)
    {
        return F63(p_u)
    };
    if (P56 && p_u['indexOf']('|SearchUSB/') > 0)
    {
        R9('<font style="color:#00ccff;font-weight:' + P16 + ';">' + tRe('Bitte warten !') + '</font>', 0, 0);
        setTimeout('F64(P78,0)', 1000);
        return
    };
    if (p_u['indexOf']('$USB_DIR') == 0)
    {
        return F65(p_u)
    };
    if (p_u == 'OpenHistory')
    {
        return F62('OpenHistory', Q27)
    };
    if (p_u == 'SearchName')
    {
        P79 = 1
    };
    if (P56 && (P79 || p_u['indexOf']('|SearchUSB') > 0 || Ach(13)))
    {
        P75 = 1;
        return R63()
    };
    var t = 50;
    if (P56 && A['A2'] && p_u['indexOf']('Open') != 0)
    {
        if ((Ach(0) && /([\W\d\s_]+|^)(xxx|porno|sex|erotica|adult|секс|порно|эротика|aнал|клубничка|ххх)/i ['test'](Ach(0))) ||
            /([\W\d\s_]+|^)(xxx|porno|sex|erotica|adult)/i ['test'](p_u) || p_u['indexOf']('history.dat') >= 0)
        {
            P77 = 1;
            if (p_u['indexOf']('history.dat') < 0)
            {
                Q50 = ''
            };
            return R63()
        };
        t = 400
    };
    if (!P82 && P13 == 'OpenFav')
    {
        P63 = P27 + 1;
        P62 = Q_39[P27][0]
    };
    setTimeout('F48()', t)
};

function F48()
{
    if (P78['indexOf']('.dat') > 0 || P78 == 'OpenFav' || (P64 && P78 == A['A0']) || P78 == 'start.xml')
    {
        return F60(P78)
    };
    R9('Laden ...', 1, Q91);
    if (P17 && R95(P17)['indexOf']('://') > 0)
    {
        F70(P17['split']('|#|'), P78, '')
    }
    else
    {
        F78(P78)
    }
};

function F49(l)
{
    if (Q_39['length'] < 2)
    {
        R9('Nicht verfügbar !', 1)
    }
    else
    {
        if (l)
        {
            F24()
        }
        else
        {
            F25()
        };
        F45()
    }
};

function F50()
{
    if (P89 > -1)
    {
        clearInterval(P89);
        P89 = -1
    }
};

//--- divxstage, nowvideo, movshare und rutube abspielen ---
function F51(ul, p, z)
{
	//alert("F51 url=" + P87 + " p=" + p + " z=" + z);         // quax 
    if (ul['indexOf']('|##|') < 0)
    {
        if (p)
        {
            var par = p['split']('|##|');
            P87 = par['length'] > Z26 ? par[Z26] : par['length'] ? par[0] : ''
        }
        else
        {
            if ( (ul['indexOf']('/video/') > 0 || ul['indexOf']('/embed.php?v=') > 0) && 
			     //(ul['indexOf']('movshare.') > 0 || ul['indexOf']('nowvideo.') > 0 || ul['indexOf']('divxstage.') > 0))    //quax60
				 (ul['indexOf']('nowvideo.') > 0 || ul['indexOf']('divxstage.') > 0))
            {
                var id = R98(ul, '?v=');
                if (!id)
                {
                    id = R98(ul, 'video/')
                };
                P87 = ul + ((ul['indexOf']('divxstage.') > 0) ? '|fkz' : '|fkzd') + '="|"|#|http://www.' + (R98(ul, '://', '/')['replace']('embed.', '')[
                    'replace']('www.', '')) + '/api/player.api.php?key=md5hash&numOfErrors=0&file=' + id + '|url=|&title=';
                ul = 'md5hash';
                p = 1
            }
            else
            {
                if (ul['indexOf']('rutube.ru') > 0 && (ul['indexOf']('/embed/') > 0 || ul['indexOf']('/video/') > 0))
                {
                    if (ul['indexOf']('/embed/') > 0)
                    {
                        P87 = ul + '|"m3u8": "|"|amp;||amp;|'
                    }
                    else
                    {
                        P87 = 'http://rutube.ru/api/play/options/' + R98(ul, 'video/', '/') + '/?format=xml|<m3u8>|</m3u8>|amp;||amp;|'
                    };
                    ul = 'md5hash#vod';
                    p = 1
                }
				else  if  ((ul['indexOf']('.mp4') < 0)  &&  (ul['indexOf']('/mp4') < 0)) 		// mod quax60
				{
					//alert("sonstiges hoster url=" + ul);
					//ul = P87 = getVideo(ul);
					ul = getVideo(ul);
					//alert("parser after url=" + P87);
					//p = 0
				}		
            }
        }
    };
	
    if (p && P87['indexOf']('://') > 0)
    {
        if (!P76 && ul['indexOf']('#no_stop') < 0)
        {
            R2()
        };
        F70(P87['split']('|#|'), ul, '')
    }
    else
    {
        if (ul['indexOf']('|##|') < 0 && Q90['length'] > 0)
        {
            if (ul['indexOf']('#auto_start') > 0 || (A['A30'] && !/(#stop)$/ ['test'](ul)) || z || Q90['length'] == 1)
            {
                F52(ul)
            }
            else
            {
                F93(O19[5], Q90)
            }
        }
        else
        {
            Y73(ul, z)
        }
    }
};

function Y73(ul, z)
{
	//alert("Y73 url=" + ul + " z=" + z);         // quax 
    Q90 = [];
    var uar = ul['split']('|##|');
    for (var i in uar)
    {
        var tur = uar[i]['split']('|#|');
        Q90['push']([tur[tur['length'] - 1], (tur[0]['indexOf']('://') > 0 ? R98(tur[0], '://', '/')['replace']('www.', '') : tur[0])]);
        if (Q65 < 22)
        {
            break
        }
    };
    F51(Q90[Z26][0], 0, z)
};


// -----  vkontakte, youtube, rutube abspielen -----
function F52(ul)
{
	//alert("F52 url=" + ul );         // quax 
    if (!P76 && ul['indexOf']('#no_stop') < 0)
    {
        R2()
    };
    P59 = [];
    Z18 = 0;
    Q23 = P87 ? R95(P87['split']('|')[0]) : ul;
    if (ul['indexOf']('vkontakte.ru/video') > 0 || ul['indexOf']('vk.com/video') > 0 || ul['indexOf']('/vkontakte.php?video') > 0 || ul['indexOf'](
            '/vkontakte/vk_kinohranilishe.php?id=') > 0)
    {
        R96('', '', ul['replace']('vkontakte.ru', 'vk.com'))
    }
    else
    {
        if (ul['indexOf']('youtube.com/embed') >= 0)
        {
            R96(R98(ul, 'embed/'), 0)
        }
        else
        {
            if (ul['indexOf']('youtube.com/watch') > 0 && ul['indexOf']('v=') > 0)
            {
                var i = ul['indexOf']('?v=');
                if (i < 0)
                {
                    i = ul['indexOf']('&v=')
                };
                ul = ul['substr'](i + 3);
                i = ul['lastIndexOf']('&');
                if (i > ul['lastIndexOf']('&token='))
                {
                    ul = ul['substr'](0, i)
                };
                R96(ul, 0)
            }
            else
            {
                if (ul['indexOf']('rutube.ru') > 0 && ul['indexOf']('m3u8?guids') > 0)
                {
                    R96('', '', ul)
                }
                else
                {
                    if ((ul['indexOf']('.hdgo.cc') > 0 || ul['indexOf']('.watch-online-hd.') > 0 || ul['indexOf']('.hotcloud.') > 0 || ul['indexOf'](
                            '.poiuytrew.') > 0) && ul['indexOf']('[') > 0 && ul['indexOf'](']') > 0)
                    {
                        Y1(ul)
                    }
                    else
                    {
                        R42(ul)
                    }
                }
            }
        }
    }
};

//---- Flash rtmp-files abspielen (nicht seriesH) -----
function F53()
{
	//alert("F53 url=" + ul );         // quax 
    Y62();
    R11(P27 + 1);
    R15(2);
    Q3 = 2;
    pluginAPI['setOffScreenSaver']();
    Y13('screen_size_bt,widget_time,resolution');
    F57('tv_live_history.dat');
    var par = (/(.flv)$/i ['test'](Ach(1))) ? 'flv=' + Ach(1) : 'file=' + Ach(1);
    Y7(Y11('flashplayer'), '<object type="application/x-shockwave-flash" id="rmtpplayer" >' +
        '<param name="movie" value="flashplayer.swf"/><param name="FlashVars" value="' + par['replace']('#plugin_player', '') + '"/></object>');
    Y12('flashplayer')
};

function F54()
{
	//alert("F54=");         // quax 
    delete window['rmtpplayer'];
    Y7(Y11('flashplayer'), '');
    Y13('flashplayer');
    Q3 = 0;
    F16()
};

function F666(arr, ne)
{
    var fs = new FileSystem();
    if (!fs['isValidCommonPath'](Q_75))
    {
        fs['createCommonDir'](Q_75)
    };
    var fl = fs['openCommonFile'](Q_75 + '/' + ne, 'w');
    if (fl)
    {
        for (var i in arr)
        {
            fl['writeLine'](arr[i] + '')
        };
        fs['closeCommonFile'](fl)
    }
};

function F57(h_url)
{
    if (!Q88 && !Q100 && P71 && (Ach(5)['indexOf']('history.dat') < 0 && Ach(5)['indexOf']('Open') < 0 && Ach(5)['indexOf']('Search') < 0 && Ach(5)['indexOf'](
            '$USB_DIR') < 0 && Ach(5) != 'ScanUSB' && P13['indexOf']('Open') < 0 && P13['indexOf']('history.dat') < 0 && P13 != A['A0']) || (Ach(13) && P13 ==
            A['A0'] && Ach(5)['indexOf']('Search') < 0))
    {
        var tr = ['|||||||||', '', F_2(Q_39[P27])];
        F55(tr, h_url, 2);
        if (tr['length'] > Q65)
        {
            tr['pop']()
        };
        var ul = Ach(13) ? Ach(0) : Ach(1) ? Ach(1) : Ach(5),
            k = Ach(13) ? 0 : Ach(1) ? 1 : 5;
        for (var i = 3; i < tr['length']; i++)
        {
            var rs = tr[i]['split']('|');
            if (rs['length'] == 14 && rs[k] == dI(ul) && ((!k && dI(Ach(5)) == rs[5]) || k > 0) && rs[12] == dI(Ach(12)))
            {
                tr['splice'](i, 1);
                break
            }
        };
        F666(tr, h_url)
    }
};

function F58(ul)
{
    var tr = [],
        st = 0,
        v = 0;
    if (ul != P64)
    {
        st = 2;
        tr = ['|||||||||', '', F_2(Q_39[P27])]
    };
    F55(tr, ul, st);
    if (Q65 < 22 && tr['length'] > 502)
    {
        tr['pop']()
    };
    st = (ul != P64) ? 3 : 2;
    for (var i = st; i < tr['length']; i++)
    {
        var ttar = tr[i]['split']('|');
        if (((Ach(1) && ttar[1] == dI(Ach(1))) || (Ach(5) && ttar[5] == dI(Ach(5)))) && ttar[12] == dI(Ach(12)))
        {
            if (!P74)
            {
                return R9('<font style="color:#ffff00;font-weight:' + P16 + ';">' + tRe('Zu Fav hinzufügen "' + P62 + '" Diese Position ist bereits !') + '</font>', 0,
                    2000)
            };
            v = 1
        }
    };
    if (!v)
    {
        if (ul == P64)
        {
            tr['push'](F_2(Q_39[P27]))
        };
        F666(tr, ul);
        R9('<font style="color:#55ff55;font-weight:' + P16 + ';">' + tRe('aufgeführt in "' + P62 + '"') + '</font>', 0, 2000)
    };
    if (P70 && P74)
    {
        F60(P13)
    }
};

function F59()
{
    if (P13 == 'OpenFav' && Q28['length'] == 3)
    {
        return
    };
    if (Q_39['length'] > 1)
    {
        Q_39['splice'](P27, 1);
        if (Q79['length'] > 1)
        {
            Q79['splice'](P27, 1)
        };
        if (P24 > 0 || P26 > 0)
        {
            F25()
        };
        F90();
        F21()
    }
    else
    {
        clearTimeout(Z14);
        Z14 = -1;
        if (Q79['length'])
        {
            R9('Playlist wiederherstellen !', 1);
            setTimeout('Y53(Z41)', 3000)
        }
        else
        {
            F66();
            F60(P13)
        }
    }
};

function Y42()
{
    var v = dSp(Y38(P14 + 'ver.dat'));
    if (!v)
    {
        v = '3';
        var wp = '/mtd_down/widgets/user/' + curWidget['id'] + '/config.xml',
            cp = '/mtd_down/common/' + Q_75 + '/config.xml';
        try
        {
            k = PO_2.Copy(wp, cp)
        }
        catch (e)
        {
            k = ''
        };
        if (k)
        {
            var t = Y38('config.xml');
            if (t)
            {
                t = R98(t, '<ver>', '</ver>');
                if (!isNaN(t))
                {
                    v = t
                }
            }
        };
        v += '|';
        Y39(P14 + 'ver.dat', v)
    };
    v = v['split']('|');
    Q37 = Number(v[0]);
    if (v[0] < 3.3 || !v[1])
    {
        t = Y38('start.xml');
        var tr = [];
        F55(tr, 'start.xml');
        if (tr['length'] < 3)
        {
            return
        };
        var i = tr['length'] > 8 ? 8 : tr['length'] - 1;
        F666(tr, 'start.xml');
        F90();
        F21()
        Y39(P14 + 'ver.dat', '3.6|9')
    }
};

function F60(ne)
{
    var tr = [],
        ul = (ne == 'OpenFav') ? 'favcat.dat' : (ne == A['A0'] && P64) ? P64 : ne;
    F55(tr, ul);
    if (Q65 < 22 && ul == 'favcat.dat' && tr['length'] > 3)
    {
        tr = tr['splice'](0, 3)
    }
    else
    {
        if (P74)
        {
            if (!Q35 || Z19 == O19[1])
            {
                tr['splice'](P27 + 2, 1)
            }
            else
            {
                if (Z19 == O19[3] && !Z16)
                {
                    tr['splice'](P27 + 2, 0, 'neue Wiedergabeliste||logos/open.png|||stop||||||||')
                }
                else
                {
                    if (Z19 == O19[3] && Z16 == 1)
                    {
                        tr['splice'](P27 + 2, 0, 'neuen Stream|stop|logos/image.png|||||||||||')
                    }
                }
            };
            F666(tr, ul)
        }
    };
    if (P74 || (!Q3 && (ne == A['A0'] || ne == 'start.xml')))
    {
        P56 = 0
    };
    if (tr['length'] < 3)
    {
        var p = P74;
        P74 = 0;
        if (ne == 'OpenFav')
        {
            R9('Erstellen der beliebtesten Kategorien !', 1);
            F666(Q28, 'favcat.dat');
            setTimeout('F60(\'OpenFav\')', 3000)
        }
        else
        {
            if (ne == A['A0'] || ne == 'start.xml')
            {
                P78 = ne;
                if (Q65 == 22)
                {
                    if (ne['indexOf']('.dat') < 0 && P82)
                    {
                        R9('Erstellen der Startplayliste', 1)
                    }
                    else
                    {
                        R9('Wiederherstellung der Start Playliste !', 1)
                    }
                };
                Q50 = '';
                if (ne['indexOf']('vip_pl_url_') == 0)
                {
                    Q81 = 1;
                    return setTimeout('F47(A.A0)', 3000)
                }
                else
                {
                    if (ne['indexOf']('.dat') > 0)
                    {
                        P70 = 0;
                        P55 = [];
                        A['A0'] = 'start.xml';
                        A['A31'] = '';
                        F666([F_2(A)], 'set.dat');
                        P64 = A['A0'];
                        return F60(P64)
                    }
                };
                setTimeout('F78(P78)', 3000)
            }
            else
            {
                if (!P82 && ne['indexOf']('fav.dat') > 0)
                {
                    if (P13['indexOf']('fav.dat') < 0)
                    {
                        P70 = 0
                    };
                    if (Q_39['length'] < 2 && p)
                    {
                        return F43()
                    }
                    else
                    {
                        if (P13 != 'OpenFav')
                        {
                            Z16 = Z17;
                            Z20 = Z22
                        }
                    };
                    if (Q35)
                    {
                        F16()
                    };
                    R9('<font style="color:yellow;font-weight:' + P16 + ';">' + tRe('Favoriten Nr.' + P63 + ' - ' + P62 + ' - LEER !') + '</font>', 0)
                }
                else
                {
                    if (P82)
                    {
                        return F60('start.xml')
                    };
                    if (Q35)
                    {
                        F16()
                    };
                    R9('leer !', 1)
                }
            }
        }
    }
    else
    {
        clearTimeout(P93);
        var ch = [],
            cat = [];
        if (ne == 'OpenFav')
        {
            Q26 = []
        };
        for (var i = 2; i < tr['length']; i++)
        {
            var rs = R84(tr[i]['split']('|'), 14);
            if (rs[5]['indexOf']('zarsoft.') > 0 || rs[5]['indexOf']('netplayer.tym.cz') > 0)
            {
                continue
            };
            ch['push'](rs);
            if (ne == 'OpenFav')
            {
                Q26['push']([i - 2, rs[0], rs[5]])
            }
        };
        rs = R84(tr[1]['split']('|'));
        for (var i in rs)
        {
            var arr = rs[i]['split']('=');
            if (arr[1] && arr[0])
            {
                cat['push']([Number(arr[1]), arr[0]])
            }
        };
        F62(ne, ch, cat);
        rs = R84(tr[0]['split']('|'), 10);
        Q49 = rs[1] == 'no_name' ? '' : rs[1];
        Q48 = rs[2];
        Q52 = rs[3];
        Q47 = rs[4];
        Q51 = rs[5];
        Q53 = rs[6];
        Q54 = rs[7];
        Q55 = rs[8];
        Q79 = [];
        Z40 = P71;
        P71 = 1;
        P72 = 1;
        if (ul != 'start.xml')
        {
            F82();
            if (Q55['indexOf']('no_save_fav') >= 0)
            {
                P71 = 0
            };
            if (Q55['indexOf']('no_save_playlist') >= 0)
            {
                P72 = 0
            }
        }
    }
};

function F62(ul, ch, cat)
{
    P18 = P17;
    F44();
    Q45 = [];
    Q40 = [];
    P81 = 0;
    Q94 = 0;
    Q99 = 0;
    if (ul['indexOf']('fav.dat') < 0)
    {
        Z16 = 0;
        Z20 = 0
    }
    else
    {
        P61 = P63;
        P60 = P62
    };
    if (!cat)
    {
        Q49 = '';
        Q47 = '';
        Q48 = '';
        Q51 = '';
        Q52 = '';
        Q53 = '';
        Q54 = ''
    };
    Q_39 = ch;
    if (cat && cat['length'] > 1)
    {
        Q45 = cat
    };
    P13 = (ul != P64) ? ul : A['A0'];
    Z41 = ul;
    F8();
    F90();
    setTimeout('F16()', 100)
};

function F63(s)
{
    Q50 = '';
    var ch = [],
        st1 = '<font color="#00ccff">',
        st2 = '<font color="#ffff99">',
        us = PO1.GetUSBListSize();
    if (us < 1)
    {
        if (P82)
        {
            Y6(17)
        }
        else
        {
            R9('Kein angeschlossenes USB-Gerät!', 1)
        };
        return
    };
    for (var i = 0; i < us; i++)
    {
        var id = PO1.GetUSBDeviceID(i),
            v_n = PO1.GetUSBVendorName(id),
            p_n = Number(PO1.GetUSBPartitionNum(id)),
            d_n = PO1.GetUSBModelName(id);
        for (var j = 0; j < p_n; j++)
        {
            var mp = PO1.GetUSBMountPath(id, j);
            if (!mp || mp['indexOf']('s') != 0)
            {
                continue
            };
            var as = F67(PO1.GetUSBAvailSize(id, j) * 1024);
            if (as == '0 bytes')
            {
                as = 'mehr als 2 GB'
            };
            var ts = F67(PO1.GetUSBTotalSize(id, j) * 1024);
            if (ts == '0 bytes')
            {
                ts = 'mehr als 2 GB'
            };
            var io = ' Diskname: ' + st2 + v_n + '</font>' + '<br>  Modell : ' + st2 + d_n + '</font>' + '<br>  Gesamtgröße: ' + st2 + ts + '</font>' +
                '<br>  Freier Speicher: ' + st2 + as + '</font>' + '<br>  Verzeichnis Mount: ' + st2 + mp + '</font>' + '<br>  Partitionsnummer: ' +
                st2 + p_n + '</font>';
            var tl = st1 + v_n + ' - ' + d_n + '</font>';
            if (s != 'ScanUSB')
            {
                tl = 'Dateisuche auf ' + tl
            };
            var ur = s != 'ScanUSB' ? mp + '|' + s : '$USB_DIR/' + mp;
            ch['push']([tl, '', 'logos/usb_logo.png', io, '', ur, '', '', '', '', '', '', '', ''])
        }
    };
    if (!ch['length'])
    {
        return R9('Fehler !', 1)
    };
    F62(s, ch);
    Q49 = s == 'ScanUSB' ? 'USB Dateiliste' : 'Suche USB'
};

function F65(ur)
{
    try
    {
        var st1 = '<font color="#00ccff">',
            st2 = '<font color="#ffffcc">',
            st3 = '<font color="#ffff99">',
            st4 = '<font color="#00cc99">',
            P = [],
            V = [],
            AU = [],
            F = [],
            PI = [],
            AH = [],
            O = [],
            D = [],
            nu = '',
            pu = '',
            fs = new FileSystem();
        var f0 = function (ar, ne, ul, l_o, d_on, p_u, c_d)
        {
            ar['push']([ne, ul, l_o, d_on, c_d, p_u, '', '', '', '', '', '', '', ''])
        };
        var s = ur['indexOf']('&page=');
        if (s != -1)
        {
            P66 = parseInt(ur['substring'](s + 6));
            ur = ur['substring'](0, s)
        }
        else
        {
            P66 = 1
        };
        var d_t = fs['readDir'](ur),
            p_ne = '',
            r = [],
            tar = [],
            dtar = [];
        if (!d_t)
        {
            if (P82)
            {
                Y6(17)
            }
            else
            {
                R9('Fehler beim Lesen!', 1, 2000)
            };
            return
        };
        P_5 = 0;
        for (var i in d_t)
        {
            var ne = d_t[i]['name'];
            if (ne && ne != '.' && ne != '..' && p_ne != ne)
            {
                r['push'](ne);
                dtar['push'](d_t[i]);
                p_ne = ne
            }
        };
        r['sort']();
        for (var i in r)
        {
            for (var j in dtar)
            {
                if (dtar[j]['name'] == r[i])
                {
                    tar['push'](dtar[j]);
                    break
                }
            }
        };
        if (tar['length'] > (100 * P66))
        {
            if (P66 > 1)
            {
                pu = ur + '&page=' + (P66 - 1)
            };
            nu = ur + '&page=' + (P66 + 1);
            var st_p = 100 * (P66 - 1),
                e_p = (100 * P66)
        }
        else
        {
            if (P66 != 1)
            {
                pu = ur + '&page=' + (P66 - 1)
            };
            st_p = 100 * (P66 - 1);
            e_p = tar['length'];
            P66 = 1
        };
        for (var i = st_p; i < e_p; i++)
        {
            ne = dSp(tar[i]['name']);
            var io = 'Titel: ' + st3 + ne + '</font>';
            if (!tar[i]['isDir'])
            {
                io += '<br> Typ: ' + st4 + 'Datei </font>';
                var exn = tar[i]['name']['match'](/\.(\w+)$/i);
                if (exn)
                {
                    io += ' "' + st3 + exn[1]['toLowerCase']() + '</font>"'
                }
                else
                {
                    io += ' "' + ' ohne Verlängerung ' + '"'
                };
                if (tar[i]['size'])
                {
                    io += '<br> Größe : ' + st3 + F67(tar[i]['size']) + '</font>'
                };
                var ul = ur['replace']('$USB_DIR', '/dtv/usb')
            }
            else
            {
                io += '<br> Typ : ' + st1 + ' Ordner </font>'
            };
            if (tar[i]['mtime'])
            {
                io += '<br> Erstellt : ' + st3 + dSp(tar[i]['mtime']) + '</font>'
            };
            if (tar[i]['isDir'])
            {
                f0(D, st4 + ne + '</font>', '', 'logos/open.png', io, ur + '/' + ne, '1')
            }
            else
            {
                if (P95['test'](ne))
                {
                    f0(P, st3 + ne + '</font>', '', 'logos/playlist.png', io, ul + '/' + ne, '3')
                }
                else
                {
                    if (P96['test'](ne))
                    {
                        f0(V, st3 + ne + '</font>', ul + '/' + ne, 'logos/film.png', io, '', '4')
                    }
                    else
                    {
                        if (P97['test'](ne))
                        {
                            f0(AU, st3 + ne + '</font>', ul + '/' + ne, 'logos/music.png', io, '', '5')
                        }
                        else
                        {
                            if (P98['test'](ne))
                            {
                                f0(F, st3 + ne + '</font>', ul + '/' + ne, 'logos/foto.png', io, '', '6')
                            }
                            else
                            {
                                if (P99['test'](ne))
                                {
                                    f0(PI, st3 + ne + '</font>', ul + '/' + ne, 'logos/pic.png', io, '', '7')
                                }
                                else
                                {
                                    if (Q1['test'](ne))
                                    {
                                        f0(AH, ne, ul + '/' + ne, 'logos/arh.png', io, '', '2')
                                    }
                                    else
                                    {
                                        f0(O, st2 + ne + '</font>', '', 'logos/file.png', io, ul + '/' + ne, '8')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        if (Q49 == 'USB Aggregatoren')
        {
            Q50 = Ach(0)
        };
        var ch = D['concat'](AH, P, V, AU, F, PI, O);
        if (!ch['length'])
        {
            P_5 = 1;
            return R9('leere Ordner !', 1, 2000)
        };
        var cr = [
            [0, 'Alle Kategorien - Sortieren']
        ];
        if (D['length'])
        {
            cr['push']([1, 'Ordner'])
        };
        if (AH['length'])
        {
            cr['push']([2, 'Archiv'])
        };
        if (P['length'])
        {
            cr['push']([3, 'Wiedergabelisten'])
        };
        if (V['length'])
        {
            cr['push']([4, 'Video-Dateien'])
        };
        if (AU['length'])
        {
            cr['push']([5, 'Audiodateien'])
        };
        if (F['length'])
        {
            cr['push']([6, 'Bilder'])
        };
        if (PI['length'])
        {
            cr['push']([7, 'Zeichnungen'])
        };
        if (O['length'])
        {
            cr['push']([8, 'unbekannte Dateien'])
        };
        if (cr['length'] < 3)
        {
            cr = []
        };
        F62(ur, ch, cr);
        Q49 = Q50;
        Q47 = nu;
        Q48 = pu;
        Q52 = '';
        Q51 = '';
        Q53 = '';
        Q54 = ''
    }
    catch (e)
    {}
};

function F67(es)
{
    return (es >= 1073741824) ? (es / 1073741824)['toFixed'](2) + ' GB' : (es >= 1048576) ? (es / 1048576)['toFixed'](2) + ' МB' : (es >= 1024) ? (es / 1024)[
        'toFixed'](2) + ' KB' : (es >= 0) ? es + ' Byte' : (es < 0) ? (2 + es / 1073741824)['toFixed'](2) + ' GB' : ''
};

function F68()
{
    var tx = new XMLHttpRequest();
    if (P7 && tx['overrideMimeType'])
    {
        tx['overrideMimeType']('text/xml')
    };
    tx['onreadystatechange'] = function ()
    {
        if (tx['readyState'] == 4)
        {
            if (tx['status'] == 200 && tx['responseText'])
            {
                Y24(tx['responseText'])
            }
        }
    };
    tx['open']('GET', Q63, true);
    tx['setRequestHeader']("User-Agent", "Opera/12.10 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51");
    tx['send']();
};

function to(h, m, s, x)
{
    return (h > 9 ? h : '0' + h) + ':' + (m > 9 ? m : '0' + m) + (x == 1 ? '' : (':' + (s > 9 ? s : '0' + s)))
};

function F69()
{
    try
    {
        if (!A['A5'])
        {
            if (Q87)
            {
                var t = PO3.GetEpochTime() * 1000 - Q87;
                Q87 += t;
                P31 += t
            }
            else
            {
                P31 += 1000
            }
        }
        else
        {
            P31 = PO3.GetEpochTime() * 1000
        };
        t = new Date(P31 + (!A['A5'] ? A['A6'] * 3600000 : -new Date()['getTimezoneOffset']() * 60000));
        P39 = Math['floor'](t / 1000);
        var h = t['getUTCHours'](),
            m = t['getUTCMinutes'](),
            s = t['getUTCSeconds']();
        Y11('widget_time')['innerText'] = to(h, m, s, 0);
        if ((h == 0 && m == 0 && (s == 1 || s == 59)) || P20 == -1)
        {
            var d = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
                mo = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
            Y7(Y11('widget_date'), d[t['getUTCDay']()] + ' , &nbsp;' + t['getUTCDate']() + ' &nbsp;' + mo[t['getUTCMonth']()])
        };
        if (Q3 == 2 && s / 10 == Math['floor'](s / 10))
        {
            F71()
        }
        else
        {
            if (Q3 == 3 && Q88)
            {
                if (Q12 >= 0)
                {
                    F72(Q12, Q11)
                };
                R56();
                Q12 = Q12 + 1000
            }
        };
        if (P20 == -1)
        {
            P20 = setInterval('F69()', 1000)
        }
    }
    catch (e)
    {}
};

function F70(pr, ul, hh)
{
    try
    {
        var f0 = function ()
        {
            if ((!hh && rr['length'] > 2) || hh === undefined)
            {
                return Y6(11)
            };
            if (hh && rr['length'] > 3)
            {
                for (i = 3; i < rr['length']; i = i + 2)
                {
                    if (rr[i])
                    {
                        if (!rr[i + 1])
                        {
                            rr[i + 1] = ''
                        };
                        hh = hh['replace'](rr[i], rr[i + 1]);
                        if (!hh)
                        {
                            return Y6(11)
                        }
                    }
                }
            };
            if (pr['length'] > 1)
            {
                pr['shift']();
                F70(pr, ul, hh)
            }
            else
            {
                ul = ul['replace']('md5hash&stop', 'md5hash');
                if (P78)
                {
                    var s = '';
                    if (/(#post)$/ ['test'](ul))
                    {
                        ul = ul['replace']('md5hash', '')['replace']('#post', '');
                        s = 'md5hash=' + encodeURIComponent(hh)
                    }
                    else
                    {
                        ul = ul['replace']('md5hash', hh)
                    };
                    F78(ul, s)
                }
                else
                {
                    ul = ul['replace']('md5hash', hh);
                    P87 = ul['indexOf']('|##|') < 0 ? (Ach(12) ? Ach(12) : P87) : '';
                    F51(ul)
                }
            }
        };
        var f1 = function ()
        {
            var ua = rI(rr[0])['split']('#'),
                mt = 'GET',
                arg = '',
                r = 0,
                dc = 0;
            for (i = 1; i < ua['length']; i++)
            {
                if (ua[i] == 'repeat')
                {
                    r = 1
                }
                else
                {
                    if (ua[i] == 'del_cookie')
                    {
                        dc = 1
                    }
                    else
                    {
                        if (ua[i]['indexOf']('post') >= 0)
                        {
                            mt = 'POST';
                            ua[i] = ua[i]['split'](':')[1];
                            var ar = ua[i]['split']('|');
                            arg = [];
                            for (var i in ar)
                            {
                                var par = ar[i]['split']('=');
                                if (par['length'] == 2)
                                {
                                    arg['push'](par[0] + '=' + encodeURIComponent(par[1]))
                                }
                            };
                            arg = arg['join']('&');
                        }
                    }
                }
            };
            Y22(dc);
            xhrAbort();
            LoadTimer('Y6(14)', 20000);
            xhr = new XMLHttpRequest();
            if (P7 && xhr['overrideMimeType'])
            {
                xhr['overrideMimeType']('text/xml')
            };
            xhr['onreadystatechange'] = function ()
            {
                if (Load_timer < 0)
                {
                    return
                };
                if (xhr['readyState'] == 4)
                {
                    alert('xhr.status === ' + xhr['status']);
                    clearTimeout(Load_timer);
                    if (xhr['status'] == 200)
                    {
                        // alert('xhr.responseText === ' + xhr['responseText']);   // quax60
                        Y22(dc);
                        hh = dSp(R98(xhr['responseText'], rr[1], rr[2]));
                        if (r && P11 && !hh && rr['length'] > 2)
                        {
                            P11 = false;
                            return f1()
                        };
                        f0()
                    }
                    else
                    {
                        if ((xhr['status'] == 302 || xhr['status'] == 303) && xhr['getResponseHeader']('Location') && xhr['getResponseHeader'](
                                'Location')['indexOf']('://') > 0)
                        {
                            rr[0] = xhr['getResponseHeader']('Location');
                            return f1()
                        }
                        else
                        {
                            Y6(10, xhr['status'])
                        }
                    }
                }
            };
            xhr['open'](mt, Y47(ua[0]), P11);
            if (mt == 'POST')
            {
                Y2(xhr, arg)
            }
            else
            {
                R99(xhr)
            };
            xhr['send'](arg)
        };
        alert('url =' + ul);
        var rr = R84(pr[0]['split']('|'));
        P11 = true;
        var l = (rr['length'] > 2) ? 3 : rr['length'];
        if (hh)
        {
            for (i = 0; i < l; i++)
            {
                rr[i] = rr[i]['replace']('md5hash', hh);
            }
        };
        if (rr[0]['replace'](/^[^hrmu]*/, '')['indexOf']('http') == 0)
        {
            f1()
        }
        else
        {
            hh = R98(rr[0], rr[1], rr[2]);
            f0()
        }
    }
    catch (e)
    {
        F16()
    }
};

function Y22(dc)
{
    var c = document['cookie'];
    if (!c || !dc)
    {
        return
    };
    var t = new Date();
    t['setTime'](t['getTime']() - 1000);
    t = ';expires=' + t['toGMTString']() + ';';
    var ar = c['split'](';');
    c = '';
    for (i = 0; i < ar['length']; i++)
    {
        if (ar[i]['indexOf']('expires') == 0)
        {
            continue
        };
        c += ar[i] + t
    };
    document['cookie'] = c;
};

function Y47(ul)
{
    ul = lrdPr(ul);
    ul = ul['indexOf']('://') > 0 ? ul : R95(ul);
    ul = ul['indexOf']('://') > 0 ? ul['replace'](/^[^hrmu]*/, '')['replace'](/^(https:)/, 'http:')['replace'](/^(rtp:)/, 'udp:')['replace'](/\s/g, '%20') : ul;
    return ul
};

function F71()
{
    try
    {
        if (P47['length'] && P44 <= P45 && Q3 == 2 && P42 == P30)
        {
            if (P44 <= P39 && P39 <= P45)
            {
                F72((P39 - P44) * 1000, (P45 - P44) * 1000)
            }
            else
            {
                if (P39 > P45 && P39 < P45 + 120000)
                {
                    P45 = 0;
                    P44 = 0;
                    P47['shift']();
                    R92()
                }
                else
                {
                    return ''
                }
            };
            Y12('p_progress');
            return 1
        };
        return ''
    }
    catch (e)
    {}
};

function F72(ct, tt)
{
    if (tt >= ct)
    {
        var w = (Q3 == 2) ? 5.07 : 4.63,
            tP = (ct > 0) ? Math['floor']((100 * ct) / tt) : 0,
            z = (tP == 100) ? Math['floor'](98 * w) : (tP > 1) ? Math['floor']((tP - 1) * w) : 0;
        if (Q3 == 2)
        {
            Q66 = 0
        };
        if (tP > 0)
        {
            Y11('pr_bar_l')['style']['backgroundImage'] = 'url(img/pr_bar_l.png)'
        }
        else
        {
            if (!Q66)
            {
                Y11('pr_bar_l')['style']['backgroundImage'] = 'url(img/pr_bar_bg_l.png)'
            }
        };
        if (tP == 100)
        {
            Y11('pr_bar_r')['style']['backgroundImage'] = 'url(img/pr_bar_r.png)'
        }
        else
        {
            if (!Q66)
            {
                Y11('pr_bar_r')['style']['backgroundImage'] = 'url(img/pr_bar_bg_r.png)'
            }
        };
        Y11('pr_bar_info')['style']['width'] = z + 'px';
        Y11('pr_bar_c')['style']['width'] = Math['floor'](w * 98) - z + 'px';
        Y11('cur_time_info')['innerText'] = F73(ct) + ' / ' + (tP > 9 ? tP : ('0' + tP)) + '%';
        if (!Q66)
        {
            Y11('total_time_info')['innerText'] = F73(tt);
            if (Q3 == 3 && ct >= 1000)
            {
                Q66 = 1
            }
        }
    }
};

function F73(sec)
{
    sec = Math['floor'](sec / 1000);
    var m = Math['floor'](sec / 60),
        x = (Q3 == 2) ? 1 : 0;
    return to(Math['floor'](m / 60), m % 60, sec % 60, x)
};

function F75()
{
    var tr = [];
    F55(tr, 'set.dat');
    if (tr['length'] == 1)
    {
        tr = tr[0]['split']('|');
        if (tr['length'] > 28)
        {
            var i = 0;
            for (var k in A)
            {
                if (i < tr['length'])
                {
                    tr[i] = (tr[i] && !isNaN(tr[i])) ? Number(tr[i]) : rI(tr[i]);
                    A[k] = tr[i++];
                    if (i > 2 && i != 32 && A[k] == '')
                    {
                        A[k] = 0
                    }
                }
            }
        }
        else
        {
            tr = []
        }
    };
    if (!tr['length'])
    {
        tr = [];
        F55(tr, P14 + '294.dat');
        if (tr['length'])
        {
            A['A0'] = tr[0];
            A['A1'] = tr[1];
            A['A2'] = tr[2];
            A['A3'] = tr[3];
            A['A4'] = Number(tr[4]), A['A5'] = Number(tr[5]), A['A6'] = Number(tr[6]);
            A['A7'] = Number(tr[7]);
            A['A7'] == Y67(O10, tr[8]);
            A['A9'] = Number(tr[9]);
            A['A10'] = Number(tr[10]);
            A['A11'] = Number(tr[11]);
            A['A12'] = Number(tr[12]);
            A['A13'] = Number(tr[13]);
            A['A14'] = Y67(O16, tr[14]);
            A['A15'] = 7501171;
            A['A16'] = 1;
            A['A17'] = Number(tr[17]);
            A['A18'] = (tr[18] == '0' || tr[18] == '2') ? 0 : 1;
            A['A19'] = (tr[18] == '0' || tr[18] == '1') ? 1 : 0;
            A['A20'] = Y67(O18, tr[19]);
            A['A21'] = Y67(O18, tr[20]);
            A['A22'] = Y67(O18, tr[21]);
            A['A23'] = Y67(O18, tr[22]);
            A['A24'] = Y67(O13, tr[23]);
            A['A25'] = Number(tr[24]);
            A['A26'] = Y67(O18, tr[25]);
            A['A27'] = Y67(O18, tr[26]);
            A['A28'] = Y67(O18, tr[27]);
            A['A29'] = Y67(O18, tr[28]);
            A['A31'] = Number(tr[29]);
            A['A33'] = Y67(O18, tr[30]);
            A['A34'] = Y67(O18, tr[31]);
            A['A35'] = Y67(O18, tr[32]);
            A['A36'] = Y67(O18, tr[33]);
            F666([F_2(A)], 'set.dat')
        }
    };
    if (A['A31'] % 2 == 0)
    {
        Y11('main_background_2')['style']['backgroundImage'] = 'url(img/frame/' + A['A31'] + '_frame.png)';
        K03 = ''
    }
    else
    {
        Y11('main_background_2')['style']['backgroundImage'] = '';
        if (A['A31'] == 3)
        {
            K03 = ''
        }
        else
        {
            K03 = ' '
        }
    };
    if (!A['A35'])
    {
        P1 = A['A3']
    }
    else
    {
        P1 = genMAC()
    };
    P14 = '';
    if (!tr['length'])
    {
        F666([F_2(A)], 'set.dat')
        if (!A['A3'] || isNaN(A.A3))
        {
            A['A3'] = P_1
        }
    };
    var ch = '',
        br = '<div id="ch_focus_bar"></div>';
    if (A['A31'] % 2 == 0)
    {
        var s1 = '#ffffff'
    }
    else
    {
        var s1 = !A['A21'] ? (Q3 == 0 ? '#dddddd' : '#eeeeee') : '#ffffff'
    }; // channel
    var s2 = P7 ? 'style="font-size:23px;margin-top:9px"' : '',
        s3 = (A['A18']) ? 'style="margin-left:0px;width:56px"' : 'style="margin-left:8px;width:40px"',
        s4 = P7 ? 'style="font-size:19px;margin-top:1px"' : '';
    for (var i = 0; i < 10; i++)
    {
        ch += '<div id="ch' + i + '" class="channel" style="color:' + s1 + '"><div id="ch_num' + i + '" class="number" ' + s2 +
            '></div><div class="channel_logo" ><img id="ch_img' + i + '" ' + s3 + '></div><div class="channel_name"><div id="ch_name_box_' + i + '" ' + s4 +
            '></div></div></div>';
        if (A['A21'] || (A['A31'] % 2 == 0 && A.A31 != 2 && A.A31 != 4))
        {
            br += '<div id="cbr' + i + '" class="channel" style="background-image:url(img/)"></div>'
        }
    };
    Y7(Y11('channelList'), ch);
    Y7(Y11('barList'), br);
    F37('p_firts_line,p_second_line,box_c_win', 'backgroundImage="' + (A['A20'] ? 'url(img/player_bg.png)' : 'url(img/box/box_c.png)') + '"');
    if (P82)
    {
        if (!A['A5'] && typeof PO3['GetEpochTime'] != 'undefined')
        {
            Q87 = PO3.GetEpochTime() * 1000
        };
        if (!P4 || isNaN(P4))
        {
            P4 = Number(new Date())
        };
        P31 = Number(P4);
        F69();
        if (A['A29'])
        {
            if (Y36())
            {
                A['A29'] = 0;
                F666([F_2(A)], 'set.dat')
            }
        }
    };
    setTimeout('F68()', 1000);
    Q14 = A['A17'];
    API['getChannel_list'] = F81;
    if (Q65 < 22)
    {
        A['A25'] = 1
    };
    if (A['A25'] == 2 && typeof _g_ime == 'undefined')
    {
        s = document['createElement']('script');
        s['language'] = 'javascript', s['type'] = 'text/javascript', s['src'] = '$MANAGER_WIDGET/Common/' + (P6 ? 'IME/ime2.js' : 'IME_XT9/ime.js');
        s['async'] = true;
        document['body']['appendChild'](s)
    }
};

function F78(x_ur, s)
{
    try
    {
        clearTimeout(P93);
        R9('Laden...', 1, Q91);
        R15(1);
        if (P17 == 'tsnakeman')
        {
            if (P80)
            {
                LoadTimer('Y27();if(P82)R_77(tRe(\'Ändern Sie die Adresse des Ausgangsplaylist\'));else F16();', Q91);
                API['search_string'] = Q46;
                StartParseTsnake(x_ur)
            }
            else
            {
                Init_ext_js_step = 0;
                Init_id_url = GetIdUrl(Scurar[1]);
                setTimeout('R_64(Scurar[1][Init_id_url])', 100)
            }
        }
        else
        {
            var rt = 'GET';
            if (s)
            {
                rt = 'POST';
            }
            else
            {
                s = ''
            };
            var ul = F74(x_ur);
            if (!ul)
            {
                return Y6(16)
            };
            if (Ach(13)['indexOf']('#no_save') > 0)
            {
                Q46 = ''
            };
            F79();
            LoadTimer('F80(16)', (P78['indexOf']('vip_pl_url_') == 0 && Scurar[Number(P78['substr'](11)) + 1]['length'] > Init_ext_js_step) ? 10000 : Q91);
            P10 = new XMLHttpRequest();
            if (P7 && P10['overrideMimeType'])
            {
                P10['overrideMimeType']('text/xml')
            };
            P10['onreadystatechange'] = function ()
            {
                if (Load_timer < 0)
                {
                    return
                };
                if (P10['readyState'] == 4)
                {
                    clearTimeout(Load_timer);
                    if (P10['status'] == 200)
                    {
                        F81('', x_ur)
                    }
                    else
                    {
                        F80(16, P10['status'])
                    }
                }
            };
            P10['open'](rt, ul, true);
            if (rt == 'POST')
            {
                Y2(P10, s)
            };
            P10['send'](s)
        }
    }
    catch (e)
    {}
};

function F79()
{
    clearTimeout(Load_timer);
    Load_timer = -1;
    if (P10)
    {
        P10['abort']();
        P10['destroy']();
        P10 = null
    }
};

function F80(er, st)
{
    F79();
    if (P78['indexOf']('vip_pl_url_') == 0 && Scurar[Number(P78['substr'](11)) + 1]['length'] - 1 > Init_ext_js_step)
    {
        Init_ext_js_step++;
        Init_id_url = (Init_id_url < Scurar[Number(P78['substr'](11)) + 1]['length'] - 1) ? Init_id_url + 1 : 0;
        setTimeout('F78(Scurar[Number(P78.substr(11))+1][Init_id_url])', 1000)
    }
    else
    {
        Y6(er, st)
    }
};
F81 = function (doc, x_ur)
{
    var gE = function (ar, ne, x)
    {
        try
        {
            var rs = ar['getElementsByTagName'](ne)[0]['childNodes'][0]['nodeValue'];
            return !rs ? '' : x == 1 ? dPr(rs, 1) : lrdPr(rs)
        }
        catch (e)
        {
            return ''
        }
    };
    var gEA = function (ar, ne, at)
    {
        try
        {
            var rs = ar['getElementsByTagName'](ne)[0]['getAttributeNode'](at)['nodeValue'];
            return !rs ? '' : rs
        }
        catch (e)
        {
            return ''
        }
    };
    if (!P10 && !doc)
    {
        return Y6(15)
    };
    if (Pass && P10)
    {};
    try
    {
        var c_obj = {},
            ces = [
                [0, 'Alle Kategorien - Sortieren']
            ],
            cls = [],
            tr = [],
            sar = [0, []],
            tsar = [],
            cat = 'Alle Kategorien - Sortieren=0',
            a = '',
            b = '',
            c = '',
            d = '',
            f = '',
            g = '',
            h = '',
            k = '',
            l = '',
            n = '',
            p = '',
            nt = '',
            pt = '',
            s = '',
            ps = '',
            u = '',
            r = '',
            si = '',
            txt = '',
            tk = '',
            pu = P88;
        x_ur = (!x_ur || P78['indexOf']('vip_pl_url_') == 0) ? P78 : x_ur;
        var sul = Y52(((P17 && R95(P17)['indexOf']('://') > 0 && P78['indexOf']('md5hash') >= 0)) ? (P78['indexOf']('md5hash') == 0 ? R95(P17['split']('|')[
            0]) : P78['replace']('md5hash', '')) : x_ur);
        try
        {
            var xch = (doc) ? doc : P10['responseXML'],
                gs = xch['getElementsByTagName']('options');
            if (gs['length'])
            {
                s = gE(gs[0], 'stat_error_url');
                u = gE(gs[0], 'update_sessions_info');
                r = gE(gs[0], 'reg_info');
                ps = gE(gs[0], 'playlist_limits');
                si = gE(gs[0], 'sync_time')
            };
            if (x_ur != 'start.xml' && ((ps['indexOf']('sort_ch') >= 0 && x_ur != A['A0']) || (x_ur == A['A0'] && !P64)))
            {
                P88 = '802.dat';
                sar = Y49(sul)
            };
            l = gE(xch, 'playlist_name');
            n = gE(xch, 'next_page_url');
            p = gE(xch, 'prev_page_url');
            nt = gEA(xch, 'next_page_url', 'text');
            pt = gEA(xch, 'prev_page_url', 'text');
            var as = xch['getElementsByTagName']('all_channels');
            if (as['length'])
            {
                b = gE(as[0], 'all_logo');
                c = gE(as[0], 'all_size', 1);
                d = gE(as[0], 'all_audiotrack_num', 1);
                f = gE(as[0], 'all_buffer', 1);
                g = gE(as[0], 'all_ibuffer', 1);
                a = gE(as[0], 'all_timeshift', 1);
                h = gE(as[0], 'all_region', 1);
                k = gE(as[0], 'all_parser')
            };
            var ct_is = xch['getElementsByTagName']('category');
            for (var i in ct_is)
            {
                var cat_id = gE(ct_is[i], 'category_id'),
                    ct_ne = gE(ct_is[i], 'category_title');
                if (cat_id && ct_ne)
                {
                    ces['push']([Number(cat_id), ct_ne]);
                    cat += '|' + dI(ct_ne) + '=' + cat_id
                }
            };
            var im = xch['getElementsByTagName']('channel');
            if (sar[1]['length'] && im['length'] != sar[0])
            {
                sar = Y54(sul, im['length'])
            };
            for (var j = 0; j < im['length']; j++)
            {
                var es = '',
                    ak_n = '',
                    bf_r = '',
                    ibf_r = '',
                    ti_ft = '',
                    re_n = '',
                    pu_l = '',
                    s_ch = '';
                tl = gE(im[j], 'title');
                u_l = gE(im[j], 'stream_url');
                l_o = gE(im[j], 'logo_30x30');
                var l_o1 = gE(im[j], 'logo');
                d_on = gE(im[j], 'description');
                var pr_ur = gE(im[j], 'parser');
                pr_ur = (pr_ur) ? pr_ur : k;
                if (!tk && pr_ur && pr_ur == 'tsnakeman')
                {
                    tk = 1
                };
                c_ry = gE(im[j], 'category_id');
                l_o = (l_o) ? l_o : (l_o1) ? l_o1 : (b) ? b : '';
                if (u_l)
                {
                    es = gE(im[j], 'size', 1);
                    es = (es) ? es : c;
                    ak_n = gE(im[j], 'audiotrack_num', 1);
                    ak_n = (ak_n) ? ak_n : d;
                    bf_r = gE(im[j], 'buffer', 1);
                    bf_r = (bf_r) ? bf_r : f;
                    ibf_r = gE(im[j], 'ibuffer', 1);
                    ibf_r = (ibf_r) ? ibf_r : g;
                    ti_ft = gE(im[j], 'timeshift', 1);
                    ti_ft = (ti_ft) ? ti_ft : a;
                    re_n = gE(im[j], 'region', 1);
                    re_n = (re_n) ? re_n : h
                }
                else
                {
                    pu_l = gE(im[j], 'playlist_url');
                    if (pu_l['indexOf']('zarsoft.') > 0 || pu_l['indexOf']('netplayer.tym.cz') > 0)
                    {
                        continue
                    };
                    s_ch = gE(im[j], 'search_on')
                };
                if (sar[1]['length'])
                {
                    for (var i = 0; i < sar[1]['length']; i++)
                    {
                        if (sar[1][i] == j)
                        {
                            cls[i] = [tl, u_l, l_o, d_on, c_ry, pu_l, es, ak_n, bf_r, ibf_r, ti_ft, re_n, pr_ur, s_ch];
                            break
                        }
                    }
                }
                else
                {
                    if (x_ur != 'start.xml' && (ps['indexOf']('sort_ch') >= 0 && x_ur != A['A0']) || (x_ur == A['A0'] && !P64))
                    {
                        tsar['push'](j.toString())
                    };
                    cls['push']([tl, u_l, l_o, d_on, c_ry, pu_l, es, ak_n, bf_r, ibf_r, ti_ft, re_n, pr_ur, s_ch])
                };
                if ((x_ur == A['A0'] && P64) || x_ur == 'start.xml')
                {
                    if (!tr['length'])
                    {
                        tr = ['#ldat|' + dI(l) + '|' + dI(p) + '|' + dI(pt) + '|' + dI(n) + '|' + dI(nt) + '|' + dI(s) + '|' + dI(u) + '|' + dI(ps), cat]
                    };
                    tr['push'](F_2(cls[cls['length'] - 1]))
                }
            }
        }
        catch (e)
        {
            cls = []
        };
        if (!cls['length'] && !doc)
        {
            if (/(.ldat)$/i ['test'](x_ur) || P10['responseText']['indexOf']('#ldat|') == 0)
            {
                var ld_ar = P10['responseText']['split']('\x0A');
                if (ld_ar['length'] > 2)
                {
                    var arr = R84(ld_ar[0]['split']('|'), 10);
                    si = lrdPr(arr[9]);
                    r = lrdPr(arr[10]);
                    if (x_ur == A['A0'] && P64)
                    {
                        tr = ld_ar;
                        if (ld_ar[0]['length'] > 8)
                        {
                            tr[0] = ld_ar[0]['splice'](8, ld_ar[0]['length'] - 8)
                        }
                    };
                    arr = R84(ld_ar[1]['split']('|'));
                    for (var i in arr)
                    {
                        cat = arr[i]['split']('=');
                        if (cat[1] && cat[0])
                        {
                            ces['push']([cat[1], cat[0]])
                        }
                    };
                    for (var i = 2; i < ld_ar['length']; i++)
                    {
                        cls['push'](R84(ld_ar[i]['split']('|'), 14))
                    }
                }
            }
            else
            {
                if (/(.m3u)$/i ['test'](x_ur) || (P10['responseText']['charAt'](0) == '#' && P10['responseText']['indexOf']('#EXTM3U') >= 0))
                {
                    var cat_id = 1,
                        m_ar = P10['responseText']['split']('\x0A');
                    if (!m_ar || m_ar['length'] <= 2)
                    {
                        m_ar = P10['responseText']['replace']('#EXTM3U', 'EXTM3U')['replace'](/#/g, '\#/#')['replace'](/http:/g, '\#/http:')['replace'](
                            /https:/g, '\#/https:')['replace'](/rtmp:/g, '\#/rtmp:')['replace'](/udp:/g, '\#/udp:')['replace'](/rtp:/g, '\#/rtp:')[
                            'replace'](/rtsp:/g, '\#/rtsp:')['replace'](/mms:/g, '\#/mms:')['split']('\#/')
                    };
                    if (Q65 == 22 && (x_ur != A['A0'] || !P64))
                    {
                        P88 = '803.dat';
                        ps = 'sort_ch';
                        sar = Y49(sul)
                    };
                    var jj = 0;
                    for (var j = 0; j < m_ar['length']; j++)
                    {
                        if (m_ar[j]['indexOf']('#EXTINF:') >= 0 || (m_ar[j]['indexOf']('EXTM3U') >= 0 && !j))
                        {
                            var d_on = '',
                                ti_ft = '',
                                l_o = '',
                                es = '',
                                c_ry = '',
                                ct_ne = '',
                                ak_n = '',
                                tl = '',
                                u_l = '',
                                pu_l = '',
                                bf_r = '';
                            m_ar[j] = lrdPr(m_ar[j])['replace'](/'/g, '"');
                            bf_r = dPr(R98(m_ar[j], 'cache="', '"'), 1);
                            if (!bf_r)
                            {
                                bf_r = dPr(R98(m_ar[j], 'cache=', ' ')['replace'](/"/g, ''), 1)
                            };
                            bf_r = (bf_r && bf_r > 50) ? bf_r / 50 : bf_r;
                            d_on = lrdPr(R98(m_ar[j], 'tvg-name="', '"'));
                            if (!d_on)
                            {
                                d_on = lrdPr(R98(m_ar[j], 'tvg-name=', ' ')['replace'](/"/g, ''))
                            };
                            if (P36 && d_on && isNaN(d_on) && d_on['indexOf']('tv.yandex.') < 0 && d_on['indexOf']('channel') < 0 && d_on['indexOf'](
                                    'epg_url:') < 0)
                            {
                                var d = O2[d_on['toLowerCase']()['replace'](/_/g, ' ')];
                                d_on = (d) ? d : ''
                            };
                            ti_ft = dPr(R98(m_ar[j], 'tvg-shift="', '"')['replace'](/\+/g, ''), 1);
                            if (!ti_ft)
                            {
                                ti_ft = dPr(R98(m_ar[j], 'tvg-shift=', ' ')['replace'](/"/g, '')['replace'](/\+/g, ''), 1)
                            };
                            l_o = lrdPr(R98(m_ar[j], 'tvg-logo="', '"'));
                            if (!l_o)
                            {
                                l_o = lrdPr(R98(m_ar[j], 'tvg-logo=', ' ')['replace'](/"/g, ''))
                            };
                            es = lrdPr(R98(m_ar[j], 'aspect-ratio="', '"')['toLowerCase']());
                            if (!es)
                            {
                                es = lrdPr(R98(m_ar[j], 'aspect-ratio=', ' ')['toLowerCase']()['replace'](/"/g, ''))
                            };
                            if (es)
                            {
                                es = (es['indexOf']('16:9') >= 0 || es['indexOf']('16x9') >= 0 || es['indexOf']('0') == 0) ? '0' : (es['indexOf']('14:9') >=
                                        0 || es['indexOf']('14x9') >= 0 || es['indexOf']('1') == 0) ? '1' : (es['indexOf']('4:3z2') >= 0 || es['indexOf'](
                                        '4x3z2') >= 0 || es['indexOf']('2') == 0) ? '2' : (es['indexOf']('4:3z1') >= 0 || es['indexOf']('4x3z1') >= 0 || es[
                                        'indexOf']('3') == 0) ? '3' : (es['indexOf']('4:3') >= 0 || es['indexOf']('4x3') >= 0 || es['indexOf']('4') == 0) ?
                                    '4' : (es['indexOf']('x-zoom') >= 0 || es['indexOf']('5') == 0) ? '5' : (es['indexOf']('auto') >= 0 || es['indexOf'](
                                        '6') == 0) ? '6' : ''
                            };
                            ak_n = dPr(R98(m_ar[j], 'audio-track="', '"'), 1);
                            if (!ak_n)
                            {
                                ak_n = dPr(R98(m_ar[j], 'audio-track=', ' ')['replace'](/"/g, ''), 1)
                            };
                            ak_n = (ak_n) ? (Number(ak_n) + 1) + '' : '';
                            if (!j)
                            {
                                b = l_o;
                                c = '';
                                d = ak_n;
                                f = bf_r;
                                a = ti_ft;
                                continue
                            };
                            ct_ne = lrdPr(R98(m_ar[j], 'group-title="', '"'));
                            if (!ct_ne)
                            {
                                ct_ne = lrdPr(R98(m_ar[j], 'group-title=', ' ')['replace'](/"/g, ''))
                            };
                            tl = lrdPr(R98(m_ar[j], ','));
                            while (j < m_ar['length'] - 1 && m_ar[j + 1]['indexOf']('#EXTINF:') < 0 && (m_ar[j]['charAt'](0) == '#' || !dPr(m_ar[j])))
                            {
                                j++
                            };
                            if (m_ar[j]['charAt'](0) == '#' || !dPr(m_ar[j]))
                            {
                                continue
                            };
                            u_l = lrdPr(m_ar[j]);
                            l_o = (l_o) ? l_o : b;
                            if (P95['test'](u_l) || /(.vc)$/i ['test'](u_l))
                            {
                                if (ct_ne && !d_on)
                                {
                                    d_on = 'Категория : ' + ct_ne
                                };
                                pu_l = u_l['replace'](/(.vc)$/i, '');
                                u_l = ''
                            }
                            else
                            {
                                es = (es) ? es : c;
                                ak_n = (ak_n) ? ak_n : d;
                                ti_ft = (ti_ft) ? ti_ft : a;
                                bf_r = (bf_r) ? bf_r : f
                            };
                            if (ct_ne)
                            {
                                var car = ct_ne['split'](';'),
                                    crar = [];
                                for (var k in car)
                                {
                                    var cry = c_obj[car[k]];
                                    if (!cry)
                                    {
                                        c_obj[car[k]] = cat_id;
                                        cry = cat_id;
                                        ces['push']([Number(cat_id), car[k]]);
                                        cat += '|' + dI(car[k]) + '=' + cat_id;
                                        cat_id++
                                    };
                                    crar['push'](cry)
                                };
                                c_ry = crar['join'](',')
                            };
                            if (sar[1]['length'])
                            {
                                for (var i = 0; i < sar[1]['length']; i++)
                                {
                                    if (sar[1][i] == jj)
                                    {
                                        cls[i] = [tl, u_l, l_o, d_on, c_ry, pu_l, es, ak_n, bf_r, '', ti_ft, '', '', ''];
                                        break
                                    }
                                }
                            }
                            else
                            {
                                if (ps == 'sort_ch')
                                {
                                    tsar['push'](cls['length'].toString())
                                };
                                cls['push']([tl, u_l, l_o, d_on, c_ry, pu_l, es, ak_n, bf_r, '', ti_ft, '', '', ''])
                            };
                            if (x_ur == A['A0'] && P64)
                            {
                                if (!tr['length'])
                                {
                                    tr = ['#ldat||||||||' + ps]
                                };
                                tr['push'](F_2(cls[cls['length'] - 1]))
                            };
                            jj++
                        }
                    };
                    if (tr['length'] > 1)
                    {
                        tr['splice'](1, 0, cat)
                    }
                }
                else
                {
                    if (/(.json)$/i ['test'](x_ur) || P10['responseText']['charAt'](0) == '{')
                    {
                        try
                        {
                            var nj = Y8(P10['responseText']);
                            if (nj)
                            {
                                l = lrdPr(nj['playlist_name']);
                                n = lrdPr(nj['next_page_url']);
                                p = lrdPr(nj['prev_page_url']);
                                nt = lrdPr(nj['next_page_url_text']);
                                pt = lrdPr(nj['prev_page_url_text']);
                                s = lrdPr(nj['stat_error_url']);
                                u = lrdPr(nj['update_sessions_info']);
                                ps = lrdPr(nj['playlist_limits']);
                                if ((ps['indexOf']('sort_ch') >= 0 && x_ur != A['A0']) || (x_ur == A['A0'] && !P64))
                                {
                                    P88 = '804.dat';
                                    sar = Y49(sul)
                                };
                                r = lrdPr(nj['reg_info']);
                                si = lrdPr(nj['sync_time']);
                                b = lrdPr(nj['all_logo']);
                                c = dPr(nj['all_size'], 1);
                                d = dPr(nj['all_audiotrack_num'], 1);
                                f = dPr(nj['all_buffer'], 1);
                                g = dPr(nj['all_ibuffer'], 1);
                                a = dPr(nj['all_timeshift'], 1);
                                h = dPr(nj['all_region'], 1);
                                k = lrdPr(nj['all_parser']);
                                if (nj['categories'])
                                {
                                    for (var i in nj['categories'])
                                    {
                                        cat_id = dPr(nj['categories'][i]['category_id'], 1);
                                        ct_ne = lrdPr(nj['categories'][i]['category_title']);
                                        if (cat_id && ct_ne)
                                        {
                                            ces['push']([Number(cat_id), ct_ne]);
                                            cat += '|' + dI(ct_ne) + '=' + cat_id
                                        }
                                    }
                                };
                                if (sar[1]['length'] && nj['channels']['length'] != sar[0])
                                {
                                    sar = Y54(sul, nj['channels']['length'])
                                };
                                for (var i in nj['channels'])
                                {
                                    tl = lrdPr(nj['channels'][i]['title']);
                                    u_l = lrdPr(nj['channels'][i]['stream_url']);
                                    l_o = lrdPr(nj['channels'][i]['logo']);
                                    l_o = (dPr(l_o)) ? l_o : b;
                                    d_on = lrdPr(nj['channels'][i]['description']);
                                    pr_ur = lrdPr(nj['channels'][i]['parser']);
                                    pr_ur = (pr_ur) ? pr_ur : k;
                                    c_ry = dPr(nj['channels'][i]['category_id'], 1);
                                    var es = '',
                                        ak_n = '',
                                        bf_r = '',
                                        ibf_r = '',
                                        ti_ft = '',
                                        re_n = '',
                                        pu_l = '',
                                        s_ch = '';
                                    if (u_l)
                                    {
                                        es = dPr(nj['channels'][i]['size'], 1);
                                        es = (es) ? es : c;
                                        ak_n = dPr(nj['channels'][i]['audiotrack_num'], 1);
                                        ak_n = (ak_n) ? ak_n : d;
                                        bf_r = dPr(nj['channels'][i]['buffer'], 1);
                                        bf_r = (bf_r) ? bf_r : f;
                                        ibf_r = dPr(nj['channels'][i]['ibuffer'], 1);
                                        ibf_r = (ibf_r) ? ibf_r : g;
                                        ti_ft = dPr(nj['channels'][i]['timeshift'], 1);
                                        ti_ft = (ti_ft) ? ti_ft : a;
                                        re_n = dPr(nj['channels'][i]['region'], 1);
                                        re_n = (re_n) ? re_n : h
                                    }
                                    else
                                    {
                                        pu_l = nj['channels'][i]['playlist_url'];
                                        s_ch = dPr(nj['channels'][i]['search_on'])
                                    };
                                    if (sar[1]['length'])
                                    {
                                        for (var i = 0; i < sar[1]['length']; i++)
                                        {
                                            if (sar[1][i] == j)
                                            {
                                                cls[i] = [tl, u_l, l_o, d_on, c_ry, pu_l, es, ak_n, bf_r, ibf_r, ti_ft, re_n, pr_ur, s_ch];
                                                break
                                            }
                                        }
                                    }
                                    else
                                    {
                                        if ((ps['indexOf']('sort_ch') >= 0 && x_ur != A['A0']) || (x_ur == A['A0'] && !P64))
                                        {
                                            tsar['push'](j.toString())
                                        };
                                        cls['push']([tl, u_l, l_o, d_on, c_ry, pu_l, es, ak_n, bf_r, ibf_r, ti_ft, re_n, pr_ur, s_ch])
                                    };
                                    if (x_ur == A['A0'] && P64)
                                    {
                                        if (!tr['length'])
                                        {
                                            tr = ['#ldat|' + dI(l) + '|' + dI(p) + '|' + dI(pt) + '|' + dI(n) + '|' + dI(nt) + '|' + dI(s) + '|' + dI(u) +
                                                '|' + dI(ps), cat]
                                        };
                                        tr['push'](F_2(cls[cls['length'] - 1]))
                                    }
                                }
                            }
                        }
                        catch (e)
                        {
                            cls = []
                        }
                    }
                }
            }
        }
    }
    catch (e)
    {
        cls = []
    };
    if (!cls['length'])
    {
        alert('###### ERORR !!!');
        P88 = pu;
        if ((x_ur['indexOf']('usb/sd') > 0 || Pass) && P10)
        {
            l = '<font style="color:#00ccff;font-weight:' + P16 + ';">' + tRe('Nicht unterstützter Dateityp !</font>');
            cls = [
                [x_ur + '(.txt)', '', 'logos/open.png', P10['responseText'], '', 'stop', '', '', '', '', '', '', '', '']
            ]
        }
        else
        {
            return F80(15)
        }
    }
    else
    {
        if (tr['length'] == cls['length'] + 2)
        {
            F666(tr, x_ur == 'start.xml' ? x_ur : P64)
        }
    };
    F44();
    P13 = Ach(5);
    Z41 = sul;
    P78 = '';
    if (tsar['length'])
    {
        tr = [sul + '#' + tsar['length'] + '#' + F_2(tsar)];
        F55(tr, P14 + P88);
        if (!P7 && tr['length'] > 50 || tr['length'] > 100)
        {
            tr['pop']()
        };
        F666(tr, P14 + P88);
        Q79 = tsar;
        Q_39 = cls
    }
    else
    {
        if (sar[1]['length'])
        {
            Q_39 = [];
            for (var i = 0; i < cls['length']; i++)
            {
                if (cls[i])
                {
                    Q_39['push'](cls[i])
                }
            };
            Q79 = sar[1]
        }
        else
        {
            Q79 = [];
            Q_39 = cls
        }
    };
    Q40 = [];
    Q45 = [];
    if (ces['length'] > 1)
    {
        Q45 = ces
    };
    if (!P70)
    {
        Z16 = 0;
        Z20 = 0
    };
    Q49 = l ? (l == 'no_name' ? '' : dScr(l['replace'](/https:/gm, 'http:'))) : Q50;
    Q47 = n;
    Q48 = p;
    Q51 = nt;
    Q52 = pt;
    if (s)
    {
        Q53 = s
    };
    alert('stat_error_url====' + Q53);
    Q54 = u;
    F82();
    if (r)
    {
        F83(r, tk)
    };
    //if (si) { Y24(si)};
    Z40 = P71;
    P71 = 1;
    if (!P71 && ps['indexOf']('no_save_fav') < 0)
    {
        ps += ',no_save_fav'
    };
    Q55 = ps;
    P72 = 1;
    if (ps['indexOf']('no_save_playlist') >= 0)
    {
        P72 = 0
    };
    P81 = 0;
    Q94 = 0;
    Q99 = 0;
    F8();
    F90();
    F16()
};

function Y49(n)
{
    var tr = [],
        car = [],
        l = 0;
    F55(tr, P14 + P88);
    for (var i = 0; i < tr['length']; i++)
    {
        var ar = tr[i]['split']('#');
        if (ar['length'] == 3)
        {
            if (ar[0] == n)
            {
                l = ar[1];
                car = ar[2]['split']('|');
                break
            }
        }
    };
    return [l, car]
};

function Y53(n)
{
    var tr = [];
    F55(tr, P14 + P88);
    for (var i = 0; i < tr['length']; i++)
    {
        var ar = tr[i]['split']('#');
        if (ar['length'] == 3)
        {
            if (ar[0] == n)
            {
                tr['splice'](i, 1);
                F666(tr, P14 + P88);
                break
            }
        }
    };
    P74 = 0;
    P73 = 1;
    P56 = 0;
    F47(P13)
};

function Y54(n, l)
{
    var tr = [],
        car = [];
    F55(tr, P14 + P88);
    for (var i = 0; i < tr['length']; i++)
    {
        var ar = tr[i]['split']('#');
        if (ar['length'] == 3)
        {
            if (ar[0] == n)
            {
                if (l > ar[1])
                {
                    for (var j = ar[1]; j < l; j++)
                    {
                        ar[2] += '|' + j
                    };
                    car = ar[2]['split']('|')
                }
                else
                {
                    car = ar[2]['split']('|');
                    for (var k = 0; k < car['length']; k++)
                    {
                        if (car[k] > l - 1)
                        {
                            car['splice'](k, 1);
                            k--
                        }
                    }
                };
                tr[i] = [ar[0] + '#' + l + '#' + F_2(car)];
                F666(tr, P14 + P88);
                break
            }
        }
    };
    return [l, car]
};

function Y52(ul)
{
    var ne = '',
        tr = Y19(ul)['match'](/[0-9a-z\._-]/g);
    if (tr)
    {
        var st = (tr['length'] > 20) ? tr['length'] - 20 : 0;
        for (var i = st; i < tr['length']; i++)
        {
            ne += tr[i]
        }
    }
    else
    {
        ne = ul
    };
    return ne
};

function Y19(w)
{
    var ww = '',
        cc, ch, tr = 'a b v g d e ["zh","j"] z i y k l m n o p r s t u f h c ch sh ["shh","shch"] ~ y ~ e yu ya ~ ["jo","e"]' ['split'](' ');
    w = w['toLowerCase']()['replace'](/ /g, '_');
    for (var i = 0; i < w['length']; i++)
    {
        cc = w['charCodeAt'](i);
        ch = (cc >= 1072) ? tr[cc - 1072] : w[i];
        if (ch['length'] < 3)
        {
            ww += ch
        }
        else
        {
            ww += eval(ch)[0]
        }
    };
    return (ww['replace'](/~/g, ''))
};

function F82()
{
    if (!Q3)
    {
        clearInterval(P90);
        P90 = -1;
        if (!Q54)
        {
            return
        };
        if (Q54['indexOf']('/@?') < 0)
        {
            P93 = setTimeout('clearInterval(P90);P90=-1;', 1800000)
        };
        var ar = Q54['split']('|');
        if (ar['length'] < 2)
        {
            return
        };
        if (!ar[0] || !ar[1])
        {
            return
        };
        var t = dPr(ar[1], 1);
        if (!t)
        {
            return
        };
        if (t < 3000 && Q54['indexOf']('/@?') < 0)
        {
            t = 3000
        };
        alert('t = = = ' + t);
        Y20();
        P90 = setInterval('Y20()', t)
    }
};

function Y20()
{
    if (!Q54)
    {
        clearInterval(P90);
        P90 = -1;
        return
    };
    var ar = Q54['split']('|'),
        ul = rI(ar[0]),
        tp = 'GET',
        s = '',
        ns = (/\?$/ ['test'](ul)) ? '' : (ul['indexOf']('?') > 1) ? '&' : '?';
    if (ul['indexOf']('/@?') > 0)
    {
        if (!Q3)
        {
            if (Q68 == 1)
            {
                return
            };
            Q68 = 1
        };
        ul += ns + 'p_status=' + Q68;
        ns = '&'
    };
    ul += ns + 'box_mac=' + P1;
    if (ar['length'] == 3)
    {
        tp = 'POST';
        s = rI(ar[2]);
        alert('Up_ses_POST !!!str == ' + s)
    };
    var xr = new XMLHttpRequest();
    if (P7 && xr['overrideMimeType'])
    {
        xr['overrideMimeType']('text/xml')
    };
    if (xr)
    {
        xr['onreadystatechange'] = function ()
        {
            if (xr['readyState'] == 4 && xr['status'] == 200 && xr['responseText'])
            {
                CL('Text = ' + xr['responseText']);
                if (lrdPr(xr['responseText']) == 'stop')
                {
                    if (Q54['indexOf']('/@?') > 0)
                    {
                        if (Q3 || Q35)
                        {
                            R39()
                        }
                    }
                    else
                    {
                        clearInterval(P90)
                    }
                }
                else
                {
                    if (lrdPr(xr['responseText']) == 'replay')
                    {
                        if (Q3)
                        {
                            R43()
                        }
                        else
                        {
                            F45()
                        }
                    }
                    else
                    {
                        if (lrdPr(xr['responseText']) == 'next_play')
                        {
                            F49(1)
                        }
                        else
                        {
                            if (lrdPr(xr['responseText']) == 'prev_play')
                            {
                                F49(0)
                            }
                            else
                            {
                                if (lrdPr(xr['responseText'])['indexOf']('message:') == 0 && Q3 > 1)
                                {
                                    R9(xr['responseText']['replace']('message:', ''), 0, 20000, 1)
                                }
                            }
                        }
                    }
                }
            }
        };
        xr['open'](tp, ul, true);
        if (tp == 'POST')
        {
            Y2(xr, s)
        };
        xr['send'](s)
    }
};

//-- div, Portale ------
function F83(io, tk)
{
    alert('Reginfo == ' + io);
    if (io['length'] > 17)
    {
        return
    };
    if (P13 == 'vip_pl_url_1' || P13['indexOf']('sweta1979.de') > 0 || P13['indexOf']('root-host.pro') > 0 || P13['indexOf']('iptv-vod.eu') > 0 || P13[
            'indexOf']('iptv-vod.de') > 0)
    {
        var dn = 'sweta1979';
        K01 = io
    }
    else
    {
        if (P13 == 'vip_pl_url_2' || P13['indexOf']('sharksoft') > 0)
        {
            dn = 'sharksoft'
        }
        else
        {
            if (P13 == 'vip_pl_url_3' || P13['indexOf']('samez.') > 0)
            {
                dn = 'samez.eu'
            }
            else
            {
                if (P13['indexOf']('tsnakeman.') > 0 || tk)
                {
                    dn = 'tsnakeman'
                }
                else
                {
                    if (P13['indexOf']('kinoxutor.ru') > 0 || P13['indexOf']('kinohutor.ru') > 0 || P13['indexOf']('daniil617.') > 0 || P13['indexOf'](
                            'dm-05.ucoz.ru') > 0)
                    {
                        dn = 'daniil'
                    }
                    else
                    {
                        if (P13['indexOf']('kuard.') > 0)
                        {
                            dn = 'kuard'
                        }
                        else
                        {
                            return
                        }
                    }
                }
            }
        }
    };
	
    var ar = [],
        v = '';
    F55(ar, P14 + 'reg.dat', 0, 6);
    for (var j = 0; j < ar['length']; j++)
    {
        var rar = ar[j]['split']('|');
        if (rI(rar[1]) == dn)
        {
            if (io != 'delete')
            {
                ar[j] = dI(io) + '|' + rar[1]
            }
            else
            {
                ar['splice'](j, 1)
            };
            v = 1;
            break
        }
    };
    if (!v && io != 'delete')
    {
        ar['push'](dI(io) + '|' + dI(dn))
    };
    alert('reg_arr == ' + ar);
    if (ar['length'] || io == 'delete')
    {
        F666(ar, P14 + 'reg.dat')
    }
};

function F84(pl_url, l, u)
{
    var ldir = 'logos/';
    if (l['indexOf']('://') > 0 || l['indexOf']('/dtv/usb/') == 0)
    {
        if (A['A19'] && (!u || /\.(png|gif|bmp|ico|jpg|jpeg)$/i ['test'](l)))
        {
            ldir = '';
            l = l['replace'](/^https:/, 'http:')
        }
        else
        {
            l = pl_url ? 'open.png' : 'image.png'
        }
    }
    else
    {
        if (l['indexOf']('logos/') == 0)
        {
            ldir = ''
        }
    };
    return ldir + l
};

function F85(ne, io, pl_url)
{
    var l = '';
    if (pl_url)
    {
        l = (P13['indexOf']('help') > 0) ? 'logos/help.png' : 'logos/open.png'
    }
    else
    {
        if (A['A19'])
        {
            if (P36)
            {
                if (!isNaN(io) && io > 0 && io < 3000)
                {
                    l = O3[io]
                };
                if (ne && (l === undefined || !io))
                {
                    l = O5[ne['toLowerCase']()['replace'](/_/g, ' ')]
                }
            };
            if (!l)
            {
                l = (ne && io) ? 'logos/' + ne + '.png' : 'logos/image.png'
            }
            else
            {
                l = 'http://avatars.yandex.net/' + l
            }
        }
        else
        {
            l = 'logos/image.png'
        }
    };
    return l
};

function F86()
{
    if (!P81)
    {
        P81 = 1;
        var r = [];
        for (var i in Q_39)
        {
            r['push'](Q_39[i][0])
        };
        r['sort']();
        Q_39 = [];
        for (var i in r)
        {
            for (var j in Q40)
            {
                if (Q40[j][0] == r[i])
                {
                    Q_39['push'](Q40[j]);
                    break
                }
            }
        }
    }
    else
    {
        P81 = 0;
        Q_39 = Q40;
        Q40 = []
    }
};

function F88()
{
    Y13('selectbox');
    if (!Q40['length'])
    {
        Q40 = Q_39
    };
    if (Q40['length'] == Q_39['length'] && !P81)
    {
        F44()
    };
    if (P81 && !Q41)
    {
        P55['pop']()
    };
    P73 = 1;
    F8();
    Q41 = Q45[10 * Z20 + Z16][0];
    if (!Q41)
    {
        F86()
    }
    else
    {
        Y43()
    };
    F90();
    Y12('info_window');
    F16()
};

function Y43()
{
    P81 = 1;
    Q_39 = [];
    for (var i in Q40)
    {
        var car = Q40[i][4]['split'](',');
        for (var j in car)
        {
            if (car[j] == Q41)
            {
                Q_39['push'](Q40[i]);
                break
            }
        }
    };
    if (!Q_39['length'])
    {
        Q_39['push'](['Diese Kategorie ist leer, !', 'stop', '', 'Diese Kategorie ist leer !', '', '', '', '', '', '', '', '', '', ''])
    }
};

function F89()
{
    P73 = 1;
    if (!Q40['length'])
    {
        Q40 = Q_39
    };
    if (!P81)
    {
        F44()
    }
    else
    {
        P55['pop']()
    };
    F8();
    F86();
    F90();
    F16()
};

function F90()
{
    if (Q_39['length'])
    {
        Q44 = (Q_39['length'] % 10 == 0) ? 10 : Q_39['length'] % 10;
        Q43 = Math['ceil'](Q_39['length'] / 10)
    }
};

function LoadExtScript(ul)
{};

function F93(tl, sel, m)
{
    Y13('statusbar');
    if (tl == O19[8] && !Q3 && sel['length'] > 3)
    {
        sel['splice'](3)
    };
    if (tl != O19[2])
    {
        Y13('info_window')
    };
    if (Z19 != tl)
    {
        Z16 = 0;
        Z20 = 0
    };
    Z16 = tl == O19[9] ? 0 : tl == O19[5] ? Z26 : tl == O19[6] ? Z27 : tl == O19[7] ? ((Q20 == 7 || Q20 == 4) ? 3 : Q20) : tl == O19[4] ? Z18 : Z16;
    if (tl == O19[1])
    {
        Z17 = Z16;
        Z22 = Z20;
        if (m == 1)
        {
            if (P13 != A['A0'] && A['A0']['indexOf']('fav.dat') < 0)
            {
                sel['push']([sel['length'], 'Start Playliste', P64])
            };
            sel['push']([sel['length'], 'Durchsuchen | Suchen', ''])
        }
    }
    else
    {
        if (tl == O19[2])
        {
            Y13('keyb_window,ch_numbar')
        }
    };
    Z19 = tl;
    Z24 = (sel['length'] % 10 == 0) ? 10 : sel['length'] % 10;
    Z23 = Math['ceil'](sel['length'] / 10);
    Z21 = sel;
    F94()
};

function F94()
{
    var q = 10;
    Z20 = (Z20 > Z23 - 1) ? 0 : (Z20 < 0) ? Z23 - 1 : Z20;
    if (Z20 == Z23 - 1)
    {
        q = Z24;
        if (Z16 > Z24 - 1 || Z16 < 0)
        {
            Z16 = Z24 - 1
        }
    };
    var h = 86 + 34 * q,
        t = (Z19 == O19[0] || Z19 == O19[1]) ? 56 : 226 - 17 * q,
        l = (Z19 == O19[4] || Z19 == O19[5] || Z19 == O19[9] || ((Z19 == O19[7] || Z19 == O19[6] || Z19 == O19[8]) && Q35)) ? 320 : (Z19 == O19[2]) ? 90 : 550,
        hl = '<div style="text-align:center;width:96%;padding:4px;font-size:20px;">' + tRe(Z19) + '</div><div>';
    for (var i = 0; i < q; i++)
    {
        var ai = 10 * Z20 + i,
            st = 'id="box_list' + i + '"',
            nn = (i < 9) ? Z20 + '' : Number(Z20 + '0'),
            num = (Z20 > 0) ? nn + (1 + i) : (1 + i),
            ne = Z21[ai][1];
        hl += '<li ' + st + '>' + tRe(num + '. ' + (Z19 == O19[4] ? (ne < 480 ? 'SD ' + ne : ne < 720 ? 'MD ' + ne : ne < 1080 ? 'HD ' + ne : 'FUL HD ' + ne) +
            'p' : ne)) + '</li>'
    };
    hl +=
        '</div><div id="sel_focus_bar"></div><div style="margin-left:6px;margin-top:6px;height:26px;font-size:17px;float:left;"><img src="img/buttons/back.png"><span>zurück</span><img src="img/buttons/move.png"><span>blättern</span><img src="img/buttons/enter.png"><span>auswählen</span></div>';
    F12(t, l, 320, h);
    Y7(Y11('box_c_win'), hl);
    F37('box_list' + Z16, 'backgroundImage="url(img/player_bg.png)",color="#eeeeee"');
    Y11('sel_focus_bar')['style']['top'] = 36 + 34 * Z16 + 'px';
    Y12('selectbox');
    R15(4)
};

function F95()
{
    F37('box_list' + Z16, 'backgroundImage="",color="#999999"');
    Z16++;
    if (Z16 >= 10 || (Z16 == Z24 && Z20 == Z23 - 1))
    {
        Z16 = 0
    };
    if (Z23 > 1 && !Z16)
    {
        Z20++;
        F94()
    }
    else
    {
        Y11('sel_focus_bar')['style']['top'] = 36 + 34 * Z16 + 'px';
        F37('box_list' + Z16, 'backgroundImage="url(img/player_bg.png)",color="#eeeeee"')
    }
};

function F96()
{
    F37('box_list' + Z16, 'backgroundImage="",color="#999999"');
    Z16--;
    if (Z16 < 0 && Z23 == 1)
    {
        Z16 = Z24 - 1
    };
    if (Z16 < 0 && Z23 > 1)
    {
        if (Z20 > 0)
        {
            Z16 = 9
        };
        Z20--;
        F94()
    }
    else
    {
        Y11('sel_focus_bar')['style']['top'] = 36 + 34 * Z16 + 'px';
        F37('box_list' + Z16, 'backgroundImage="url(img/player_bg.png)",color="#eeeeee"')
    }
};

function Y9()
{
    if (Z23 > 1)
    {
        Z20++;
        F94()
    }
};

function Y10()
{
    if (Z23 > 1)
    {
        Z20--;
        F94()
    }
};

function F97()
{
    Q46 = Z21[10 * Z20 + Z16][1];
    Y13('selectbox');
    if (A['A25'] == 1)
    {
        Y12('keyb_window,ch_numbar');
        Z2 = Q46;
        if (Z14 == -1)
        {
            Y11(P21)['innerText'] = Z2
        }
        else
        {
            R76();
            Z8 = 8;
            R78();
            Y11('blue')['innerText'] = '  ändern';
            Y11('enter')['innerText'] = P75 ? 'Wert eingeben' : 'alles speichern';
            Y65(1)
        };
        R15(5)
    }
    else
    {
        R66()
    }
};

function F98()
{
    Y13('selectbox');
    Y12('info_window');
    F60(P13)
};

function R13()
{
    if (Z21[10 * Z20 + Z16][0] < 4)
    {
        Y13('selectbox');
        Y12('info_window')
    };
    R15((Q3 && Y11('main')['style']['display'] == 'none') ? (Q11 > 0 ? 3 : 2) : 0);
    if (Z21[10 * Z20 + Z16][0] < 3)
    {
        F7();
        pluginAPI.ShowTools(Z21[10 * Z20 + Z16][0] - 1)
    }
    else
    {
        if (Z21[10 * Z20 + Z16][0] == 3)
        {
            R777()
        }
        else
        {
            if (Z21[10 * Z20 + Z16][0] == 4)
            {
                F93(O19[6], Q92)
            }
            else
            {
                if (Z21[10 * Z20 + Z16][0] == 5)
                {
                    R26()
                }
            }
        }
    }
};

function Y71()
{
    Y13('selectbox');
    if (Z26 == Z16 && Q3 && P30 == P27 && P13 == P12 && Ach(1)['indexOf']('/@?') < 0 && Ach(12)['indexOf']('/@?') < 0)
    {
        Y74()
    }
    else
    {
        Z26 = Z16;
        if (P15)
        {
            R40()
        }
        else
        {
            F54()
        };
        Q93 = 1;
        F51(Q90[10 * Z20 + Z16][0], Ach(12)['indexOf']('|##|') < 0 ? P87 : Ach(12), 1)
    }
};

function Y75()
{
    R15(Q3 && Y11('main')['style']['display'] == 'none' ? (Q11 > 0 ? 3 : 2) : 0);
    Y13('selectbox');
    Y12('info_window');
    Z27 = Z16;
    R59(Q92[10 * Z20 + Z16][0], 1)
};

function F99()
{
    Y13('selectbox');
    Y12('info_window');
    R15(0);
    var id = 10 * Z20 + Z16;
    if (Q26[id][1] == 'Durchsuchen ')
    {
        P58['push'](dTg(dHt(Ach(0))))
    }
    else
    {
        if (Q26[id][2] != P13)
        {
            if (!P74)
            {
                P63 = Number(id) + 1;
                P62 = Q26[id][1]
            };
            if (P70 && !P74)
            {
                P73 = 1;
                if (A['A2'] && ((Q26[id][1] && /([\W\d\s_]+|^)(xxx|porno|sex|erotica|adult|секс|порно|эротика|aнал|клубничка|ххх)/i ['test'](Q26[id][1])) || (
                        Q26[id][2] && /([\W\d\s_]+|^)(xxx|hhh|porno|sex|erotica|adult)/i ['test'](Q26[id][2]))))
                {
                    P77 = 1;
                    Q50 = '';
                    P78 = Q26[id][2];
                    R63()
                }
                else
                {
                    F60(Q26[id][2])
                }
            }
            else
            {
                F58(Q26[id][2])
            }
        }
    };
    if (Q26[Q26['length'] - 1][2] == '')
    {
        Q26['pop']()
    };
    if (Q26[Q26['length'] - 1][2] == P64)
    {
        Q26['pop']()
    }
};

function R2()
{
	//alert ("R2")          //quax
    clearTimeout(Q58);
    var t = P82 ? 30000 : (Ach(1) && (Ach(12) && Ach(12)['indexOf']('/@?acet') > 0 || Ach(1)['indexOf']('arjlover.net') > 0) && P84 == 60000) ? 300000 : (Ach(1) &&
        Q3 && P84) ? P84 : 60000;
    Y12('loading');
    clearTimeout(Q95);
    Q59++;
    Q58 = setTimeout(
        'if(!P82&&Q_39.length){if(Q3){Q24=4;if(Q67>-1){Y6(Q67)}else Y6(9)}else Y6(14)}else{R3();R_77(tRe(\'Измените адрес стартового плейлиста !\'))};', t);
    R4()
};

function R3()
{
    clearTimeout(Q58);
    clearTimeout(Q95);
    Y13('loading')
};

function R4()
{
	//alert ("R4")          //quax
    Y11('imgAnim')['src'] = 'img/loading/loading_' + (Q59 < 10 ? '0' : '') + Q59 + '.png';
    Q59 = Q59 > 11 ? 1 : Q59 + 1;
    Q95 = setTimeout('R4()', 200)
};

function R5(d)
{
    if (Q35)
    {
        var w = (P7) ? 10 : 0;
        clearTimeout(Q56);
        Y62();
        if (Y11('p_ch_name')['style']['display'] == 'none')
        {
            Y51()
        };
        Y13('statusbar');
        Y11('statusbar')['style']['top'] = '80px';
        if (Q3 == 2)
        {
            Y13('p_progress,p_epg_line,help_vod_player');
            if (P15)
            {
                Y11('help_l_player')['style']['left'] = 140 - 2 * w + 'px'
            }
            else
            {
                Y11('help_l_player')['style']['left'] = 190 - 2 * w + 'px'
            };
            Y11('cur_time_info')['style']['width'] = '110px';
            Y11('progress_bar')['style']['width'] = '512px';
            Y12('help_l_player');
            if (P15)
            {
                if (P47['length'] && P42 == P30)
                {
                    if (F71())
                    {
                        Y12('p_epg_line');
                        R74('R7()', 100)
                    }
                }
                else
                {
                    F32()
                }
            }
            else
            {
                R10()
            }
        }
        else
        {
            if (Q3 > 2)
            {
                P47 = [];
                P45 = 0;
                P44 = 0;
                Y13('help_l_player,p_epg_line');
                Y11('cur_time_info')['style']['width'] = '130px';
                Y11('progress_bar')['style']['width'] = '468px';
                Y12('help_vod_player');
                if (Q3 == 4)
                {
                    Y11('vod_play')['innerText'] = 'Start';
                    Y11('help_vod_player')['style']['left'] = 58 - 1.9 * w + 'px'
                }
                else
                {
                    Y11('vod_play')['innerText'] = 'Pause';
                    Y11('help_vod_player')['style']['left'] = 50 - 2 * w + 'px'
                };
                Y12('p_progress')
            }
            else
            {
                R10();
                Y13('p_progress,p_epg_line,p_second_line,resolution')
            }
        };
        if (Q3 > 1)
        {
            if (A['A22'])
            {
                Y12('p_second_line')
            }
            else
            {
                Y13('p_second_line')
            }
        };
        Y11('widget_time')['style']['top'] = '8px';
        Y12('player,widget_time,ch_numbar');
        clearTimeout(P91);
        d = (d !== undefined) ? d : 6000;
        if (Q3 < 4 && Q3 != 1 && !Q18 && d > 0)
        {
            R6('R8()', d)
        };
        if (!Q16 && Q3 < 4 && (Q6 || Q7 || Q8 || Q9))
        {
            F22('P83=0;R9("<table>"+Q7+Q9+Q8+Q6+"</table>",0,0);', 200)
        }
    }
};

function Y50()
{
    Y13('p_ch_name,resolution,p_epg_line,p_second_line');
    Y11('p_progress')['style']['top'] = '9px';
    Y11('p_info_line')['style']['height'] = '40px';
    Y11('statusbar')['style']['top'] = P7 ? '6px' : '5px';
    Y12('player')
};

function Y51()
{
    Y11('statusbar')['style']['top'] = P7 ? '11px' : '9px';
    Y12('p_ch_name,resolution,p_epg_line,p_second_line');
    Y11('p_progress')['style']['top'] = '37px';
    Y11('p_info_line')['style']['height'] = '65px'
};

function R6(f, t)
{
    clearTimeout(P91);
    P91 = setTimeout(f, t)
};

function R7()
{
    var h = Y11('p_epg_line')['clientHeight'];
    Y11('statusbar')['style']['top'] = h + 80 + 'px'
};

function R8()
{
    clearTimeout(P91);
    if (!P83 && Q35)
    {
        if (Q13 > 0)
        {
            if (!Q16)
            {
                R9('fortsetzen ?', 1, 5000)
            }
            else
            {
                R9('FORTSETZEN', 1)
            }
        }
        else
        {
            R12()
        }
    };
    Y13('player,ch_numbar');
    Y11('statusbar')['style']['top'] = P7 ? '11px' : '9px';
    R93(0);
    if ((Q35 && !A['A23']) || !P15)
    {
        Y13('widget_time')
    }
};

function R9(s, f, d, b)
{
    clearTimeout(Q57);
    if (Q16)
    {
        clearTimeout(P91);
        if (!Q88 && Y11('player')['style']['display'] == 'none')
        {
            Y50()
        }
    };
    if (!Q35)
    {
        Y13('ch_numbar')
    };
    Y11('statusbar')['style']['backgroundImage'] = b ? 'url(img/blak_bg.png)' : 'url(img/player_bg.png)';
    Y13('version');
    Y7(Y11('statusbar'), f ? tRe(s) : s);
    Y12('statusbar');
    var t = (d) ? d : 3000;
    if (d != 0)
    {
        Q57 = setTimeout('R12()', t)
    }
};

function R10()
{
    var wl = A['A18'] ? 66 : 46,
        u = (P13 == 'vip_pl_url_1' || P13['indexOf']('sweta1979.de') > 0 || P13['indexOf']('root-host.pro') > 0 || P13['indexOf']('iptv-vod.eu') > 0 || P13[
            'indexOf']('iptv-vod.de') > 0) ? 1 : 0,
        l_o = (Ach(2)) ? F84(Ach(5), Ach(2), u) : F85(Ach(0), Ach(3), Ach(5));
    if (!l_o)
    {
        wl = 0;
        Y13('ch_numbar_logo')
    }
    else
    {
        Y11('ch_numbar_logo')['src'] = l_o;
        Y11('ch_numbar_logo')['style']['width'] = wl + 'px';
        Y12('ch_numbar_logo')
    };
    F13(5, 5, 76 + wl, 54)
};

function R11(num, t)
{
    Y13('ch_numbar_logo');
    F13(10, 10, 90, 66, 1);
    Y7(Y11('ch_numbar_nun'), num);
    Y13('statusbar');
    Y12('ch_numbar');
    if (Y11('player')['style']['display'] == 'none')
    {
        clearTimeout(Q56);
        Q56 = setTimeout('Y13(\'ch_numbar\')', 3000)
    }
};

function R12()
{
    if (!P82 && ((!Q35 && lrdPr(Y11('statusbar')['innerText']) == 'Laden ...') || Q35 == 5))
    {
        clearTimeout(Q57);
        Q57 = setTimeout('Y13(\'statusbar\');Y12(\'version\')', 400)
    }
    else
    {
        Y13('statusbar');
        Y12('version')
    };
    if (P83)
    {
        F22('P83=0', 3000)
    };
    if (!P6 && Z25 < 2)
    {
        pluginAPI['registKey'](76)
    };
    Q36 = 0;
    Q86 = 0
};

function R14(Cd)
{
    if (Q36)
    {
        if (Cd != 76)
        {
            return Y40(Cd)
        }
    };
    if (Cd == 76 && Q3)
    {
        if (P15)
        {
            R39()
        }
        else
        {
            F54()
        }
    };
    if (P74)
    {
        F66();
        P74 = 0;
        F16()
    };
    R9('<font style="color:yellow;font-weight:' + P16 + ';">' + tRe('zum Beenden erneut EXIT drücken!') + '</font>', 0, 4000, 1);
    Q36 = 1;
    if (!P6 && Z25 < 2)
    {
        pluginAPI['unregistKey'](76);
        setTimeout('Y55()', 100)
    }
};

function Y55()
{
    if (P82)
    {
        return
    };
    if (A['A27'])
    {
        var ul = (P13['indexOf']('sweta1979.de') > 0 || (P13['indexOf']('root-host.pro') > 0 && P13['indexOf']('/shura1.php') < 0 && P13['indexOf']('/nnm.php') <
                0 && P13['indexOf']('/igost.php') < 0 && P13['indexOf']('/overnet1.php') < 0 && P13['indexOf']('/ozotv1.php') < 0 && P13['indexOf'](
                    '/kartina.php?user=md5hash') < 0 && P13['indexOf']('/savok.php?user=md5hash') < 0 && P13['indexOf']('/zartv.php') < 0 && P13['indexOf']
                ('/novoetv.php?user=md5hash') < 0 && P13['indexOf']('/tvzond.php') < 0) || P13['indexOf']('iptv-vod.eu') > 0 || P13['indexOf'](
                'iptv-vod.de') > 0) ? 'vip_pl_url_1' : (P13['indexOf']('/smarttv/sharksoft.php') > 0) ? 'vip_pl_url_2' : (P13['indexOf'](
                'samez.net/alex/start_lmod_3_samez.php') > 0 || P13['indexOf']('samez.eu/start_lmod_3_samez.php') > 0) ? 'vip_pl_url_3' : (P13['indexOf'](
                '/nStreamLmod/playlist/start.php') > 0) ? 'vip_pl_url_4' : (P17 == 'tsnakeman') ? 'http://tsnakeman.net.ua/widget/XML/LMOD/index.xml' : (P13[
                'indexOf']('SearchUSB') > 0) ? 'start.xml' : P13,
            k = Q42 ? Q42 : Q41;
        p = (ul == 'start.xml' || ul['indexOf']('vip_pl_url_') == 0 || P17 == 'tsnakeman') ? '' : P17;
        if (P13 != P12 || ul['indexOf']('vip_pl_url_') == 0 || P17 == 'tsnakeman')
        {
            P29 = -1;
            P28 = -1;
            P30 = -1;
            k = Q41
        };
        F666([ul, P29, P28, P30, k, p, Q49, Z26], P14 + '596.dat')
    };
    var s_a = [],
        t = Math['floor'](P31 / 86400000),
        s, l = (P7 || P46['length'] < 50) ? 0 : P46['length'] - 50;
    for (var i = l; i < P46['length']; i++)
    {
        if (P46[i][1] < t)
        {
            continue
        };
        s = '';
        for (var j in P46[i][6])
        {
            s += F_2(P46[i][6][j]);
            if (j < P46[i][6]['length'] - 1)
            {
                s += '|'
            }
        };
        s_a['push'](P46[i][0] + '|' + P46[i][1] + '|' + P46[i][2] + '|' + P46[i][3] + '|' + P46[i][4] + '|' + P46[i][5] + '|' + s)
    };
};

function R15(fc)
{
    clearTimeout(Load_timer);
    if (!Q35 && fc != 4)
    {
        clearTimeout(P92)
    };
    if (Q35 == 5 && fc != 4)
    {
        Y13('keyb_window,help_set_par,ch_numbar,setapList');
        Y7(Y11('2_help'), '<span id="move"></span><img id="button" src="img/buttons/move.png">');
        Y11('width_str')['style']['fontSize'] = '20px';
        if (Q3)
        {
            Y7(Y11('ch_numbar_nun'), P30 + 1)
        };
        F11('info_window', 48, 485, 460, 444, 1);
        Y12('infoList');
        if (Q3)
        {
            setTimeout('R10()', 200)
        }
    };
    Q35 = fc;
    switch (fc)
    {
    case 0:
        Y11('MainMenu_Anchor')['focus']();
        if (!P6)
        {
            pluginAPI['registKey'](75)
        };
        break;
    case 1:
        Y11('Loading_Anchor')['focus']();
        break;
    case 2:
        Y11('LivePlayer_Anchor')['focus']();
        if (!P6)
        {
            pluginAPI['unregistKey'](75)
        };
        break;
    case 3:
        Y11('VODPlayer_Anchor')['focus']();
        if (!P6)
        {
            pluginAPI['unregistKey'](75)
        };
        break;
    case 4:
        Y11('Selectbox_Anchor')['focus']();
        break;
    case 5:
        Y11('Setap_Anchor')['focus']();
        break;
    default:
        break
    }
};

function Y74()
{
    P37 = 0;
    F10();
    R12();
    R15(Q11 > 0 ? 3 : 2);
    Y13('main');
    R5(3000);
    if (Q3 == 4)
    {
        R9('<img src="img/buttons/b_pause.png" height="48" width="48">', 0, 0)
    };
    if (Q18 || Q3 == 4)
    {
        pluginAPI['setOnScreenSaver'](180)
    }
};

function R16()
{
    clearTimeout(Load_timer);
    if (!Q35 || Y11('player')['style']['display'] == 'none')
    {
        Y13('ch_numbar')
    };
    if (!Q29 || Q29 > Q_39['length'])
    {
        if (Q3)
        {
            R10()
        };
        Y7(Y11('ch_numbar_nun'), P27 + 1);
        R9('Ошибка ввода !', 1)
    }
    else
    {
        if (Q3 && Q29 - 1 == P30 && P13 == P12 && Ach(1)['indexOf']('/@?') < 0 && Ach(12)['indexOf']('/@?') < 0)
        {
            R10();
            if (Q35)
            {
                R9('Kanal wird bereits abgespielt !', 1)
            }
            else
            {
                Y74()
            }
        }
        else
        {
            if (Q35 == 1)
            {
                R39()
            }
            else
            {
                P27 = Q29 - 1;
                P26 = Math['floor'](P27 / 10);
                P24 = P27 - P26 * 10;
                F45()
            }
        }
    };
    Q29 = ''
};

function R17(Cd)
{
    if (P68)
    {
        return
    };
    var nr = '';
    switch (Cd)
    {
    case 101:
        nr = '1';
        break;
    case 98:
        nr = '2';
        break;
    case 6:
        nr = '3';
        break;
    case 8:
        nr = '4';
        break;
    case 9:
        nr = '5';
        break;
    case 10:
        nr = '6';
        break;
    case 12:
        nr = '7';
        break;
    case 13:
        nr = '8';
        break;
    case 14:
        nr = '9';
        break;
    case 17:
        nr = '0';
        break
    };
    if (Q29 < 999)
    {
        Q29 = Q29 + nr
    };
    if (Q29)
    {
        if (!P15 && Q3)
        {
            window['rmtpplayer']['info'](Q29)
        }
        else
        {
            R11(Q29, 0)
        };
        LoadTimer('R16()', 2000)
    }
};

function R_18(Cd)
{
    if (!Cd)
    {
        var Cd = event['keyCode'];
        if ((P13['indexOf']('/@?') > 0 || Ach(1)['indexOf']('/@?') > 0 || (Ach(5)['indexOf']('/@?') > 0 && P13 != 'start.xml') || Ach(12)['indexOf']('/@?') > 0) &&
            Cd != 261 && Cd != 147 && Cd != 76 && ((!Q3 && Cd != 29460 && Cd != 29461 && Cd != 4 && Cd != 5) || Q3))
        {
            Y3(Cd);
            if (Cd != 45 && Cd != 88)
            {
                return
            }
        }
    };
    return parseInt(Cd)
};

function R19(Cd)
{
    P85 = 1;
    switch (Q35)
    {
    case 0:
        R20(Cd);
        break;
    case 1:
        R21(Cd);
        break;
    case 2:
        R23(Cd);
        break;
    case 3:
        R24(Cd);
        break;
    default:
        alert('No_key');
        break
    }
};

function R20(Cd)
{
    if (Q35 || !P_5)
    {
        return
    };
    Cd = R_18(Cd);
    if (!Cd)
    {
        return
    };
    if (event)
    {
        event['preventDefault']()
    };
    R17(Cd);
    switch (Cd)
    {
    case 45:
        if (Q3)
        {
            return R39()
        };
    case 76:
        ;
    case 261:
        ;
    case 147:
        R14(Cd);
        break;
    case 1252:
        break;
    case 35:
        ;
    case 650:
        P_5 = 0;
        R9('Sortieren', 1, 0);
        LoadTimer('F89()', 200);
        break;
    case 612:
        ;
    case 222:
        if (P68 || P74)
        {
            return
        };
        if (P13 != 'ScanUSB')
        {
            F47('ScanUSB')
        }
        else
        {
            F43()
        };
        break;
    case 1086:
        ;
    case 84:
        if (P74)
        {
            return
        };
        if (P90 < 0 && !P68 && P13 != 'start.xml')
        {
            P73 = 1;
            P55 = [];
            F60('start.xml')
        }
        else
        {
            if (P90 > -1 && !P68 && Q3 && P13 == P12 && Q41 == Q42)
            {
                Y74()
            }
            else
            {
                F43()
            }
        };
        break;
    case 256:
        ;
    case 1057:
        ;
    case 651:
        if (P74)
        {
            return
        };
        if (P30 != P27)
        {
            P37 = 0
        };
        if (P68)
        {
            F43()
        }
        else
        {
            if (P33 && !P37 && P48['length'])
            {
                P68 = 1;
                P56 = 1;
                F62('Guide', P48)
            }
            else
            {
                if (Q3 == 2 && P37)
                {
                    Y74()
                }
                else
                {
                    R9('Weitere Applets gefunden !', 1)
                }
            }
        };
        break;
    case 31:
        if (P74 || P13 == 'OpenHistory')
        {
            return
        };
        if (P69)
        {
            F36()
        }
        else
        {
            F38()
        };
        F32();
        break;
    case 75:
        if (P68 || P74)
        {
            return
        };
        R_77();
        break;
    case 1118:
        ;
    case 613:
        ;
    case 262:
        F93(O19[8], P54);
        break;
    case 78:
        ;
    case 259:
        if (P68 || P74)
        {
            return
        };
        F42();
        break;
    case 88:
        if (P74)
        {
            F66();
            P74 = 0;
            F16()
        }
        else
        {
            if (!P68 && Q3 && P13 == P12 && Q41 == Q42)
            {
                Y74()
            }
            else
            {
                F43()
            }
        };
        break;
    case 106:
        ;
    case 29461:
        F24();
        break;
    case 105:
        ;
    case 29460:
        F25();
        break;
    case 4:
        F27();
        break;
    case 5:
        F26();
        break;
    case 309:
        ;
    case 29443:
        if (P68)
        {
            return R20(31)
        };
        if (P74)
        {
            if (Q79['length'])
            {
                return
            };
            R68()
        }
        else
        {
            if (Q29)
            {
                R16()
            }
            else
            {
                if (Q3 && P30 == P27 && P13 == P12 && Ach(1)['indexOf']('/@?') < 0 && Ach(12)['indexOf']('/@?') < 0)
                {
                    if (Q90['length'] > 1)
                    {
                        return F93(O19[5], Q90)
                    };
                    Y74()
                }
                else
                {
                    F45()
                }
            }
        };
        break;
    case 108:
        if (P68)
        {
            return
        };
        if (P74)
        {
            F59()
        }
        else
        {
            if (!P70 && Q45['length'] > 1)
            {
                F93(O19[0], Q45)
            }
            else
            {
                if (P13['indexOf']('history.dat') > 0)
                {
                    F666([], P13);
                    F43()
                }
                else
                {
                    if (Q_39['length'] > 1)
                    {
                        P_5 = 0;
                        R9('Sortieren', 1, 0);
                        LoadTimer('F89()', 200)
                    }
                }
            }
        };
        break;
    case 20:
        if (P68)
        {
            return
        };
        if (P74)
        {
            F29(1)
        }
        else
        {
            if (!P71)
            {
                R9('Die Funktion wird in dieser Playlist deaktiviert !', 1)
            }
            else
            {
                if (!P70 && P13['indexOf']('Open') < 0 && Ach(5) != 'OpenFav' && P13 != 'search_history.dat')
                {
                    if ((!Ach(5) || Q65 < 22) && Q26['length'] == 1)
                    {
                        F58(Q26[0][2])
                    }
                    else
                    {
                        F93(O19[1], Q26, 1)
                    }
                }
            }
        };
        break;
    case 21:
        if (P68)
        {
            return
        };
        if (P74)
        {
            F29(-1)
        }
        else
        {
            if (P13['indexOf']('Open') < 0 || P13 == 'OpenHistory')
            {
                if (Q26['length'] == 1)
                {
                    if (!P70)
                    {
                        P73 = 1;
                        F60(Q26[0][2])
                    }
                }
                else
                {
                    P70 = 1;
                    F93(O19[1], Q26)
                }
            }
            else
            {
                R9('Nicht verfügbar !', 1)
            }
        };
        break;
    case 22:
        if (P68)
        {
            return
        };
        if (P74)
        {
            if (Q65 < 22)
            {
                R65()
            }
            else
            {
                if (Q79['length'])
                {
                    Y53(Z41)
                }
                else
                {
                    if (P13 == 'OpenFav')
                    {
                        Q89 = 1;
                        R63()
                    }
                    else
                    {
                        if ((P13 == A['A0'] && P64) || P13 == 'start.xml')
                        {
                            F93(O19[3], [
                                [1, 'neue Wiedergabeliste'],
                                [2, 'neue Stream-']
                            ])
                        }
                        else
                        {
                            if (P70 && Q26['length'] > 1)
                            {
                                F93(O19[1], Q26)
                            }
                        }
                    }
                }
            }
        }
        else
        {
            if (P13 != 'OpenHistory' && (P70 || (P13 == A['A0'] && P64) || P13 == 'start.xml' || P13 == 'OpenFav' || Q79['length']))
            {
                P74 = 1;
                P81 = 0;
                P73 = 1;
                if (Q40['length'])
                {
                    if (P81 || Q40['length'] > Q_39['length'])
                    {
                        P55['pop']()
                    };
                    Q_39 = Q40;
                    Q40 = [];
                    F8();
                    F90()
                };
                F16()
            }
            else
            {
                if (P55['length'] > P67 && P67 > 1)
                {
                    F43(P55['length'] - P67)
                }
                else
                {
                    R9('Nicht verfügbar !', 1)
                }
            }
        };
        break;
    case 72:
        if (P68 || P74)
        {
            return
        };
        if (P33)
        {
            P38++;
            R86(F34())
        }
        else
        {
            F28()
        };
        break;
    case 74:
        if (P68 || P74)
        {
            return
        };
        if (P33 && !Q71)
        {
            if (Q78)
            {
                return R87()
            };
            P41++;
            R86(F34())
        }
        else
        {
            if (Q11 > 0)
            {
                if (Q3 == 4)
                {
                    R53()
                }
                else
                {
                    R54()
                }
            }
            else
            {
                if (P13 == 'start.xml')
                {
                    R90()
                }
                else
                {
                    R9('Nicht verfügbar !', 1)
                }
            }
        };
        break;
    case 69:
        if (P68 || P74)
        {
            return
        };
        if (P33)
        {
            P38--;
            R86(F34())
        }
        else
        {
            F30()
        };
        break;
    case 68:
        ;
    case 1078:
        if (P74)
        {
            return
        };
        F41('allInfo', 29);
        break;
    case 65:
        ;
    case 1080:
        if (P74)
        {
            return
        };
        F41('allInfo', -29);
        break;
    case 71:
        if (P68 || P74)
        {
            return
        };
        if (Q3 == 4)
        {
            R54()
        }
        else
        {
            if (P33)
            {
                if (!P34)
                {
                    P34 = 1
                }
                else
                {
                    P34 = 0
                };
                R86(F34())
            }
            else
            {
                if (!Q3)
                {
                    F45()
                }
                else
                {
                    if (Q11 > 0)
                    {
                        if (!Q14)
                        {
                            Q14 = 1;
                            O1['play'] = 'Wiederholung.';
                            R9('sequenzielle Wiedergabe', 1)
                        }
                        else
                        {
                            if (Q14 == 1)
                            {
                                Q14 = 2;
                                O1['play'] = 'Alles aus';
                                R9('Wiederholungswiedergabe', 1)
                            }
                            else
                            {
                                if (Q14 == 2)
                                {
                                    Q14 = 0;
                                    O1['play'] = 'Nächstes.';
                                    R9('Alle Modi sind deaktiviert !', 1)
                                }
                            }
                        };
                        F19()
                    }
                }
            }
        };
        break;
    case 70:
        if (P68 || P74)
        {
            return
        };
        if (Q3)
        {
            R39()
        }
        else
        {
            if (P75)
            {
                R63()
            }
            else
            {
                if (!P71)
                {
                    R9('Die Funktion wird in dieser Playlist deaktiviert!', 1)
                }
                else
                {
                    if (Y11('statusbar')['style']['display'] == 'none')
                    {
                        var ul = Ach(5) ? Ach(5) : Ach(1),
                            urlArr = R94(ul);
                        ul = urlArr['join']('<br>');
                        R9('url = ' + ul, 1, 60000, 1)
                    }
                    else
                    {
                        R12()
                    }
                }
            }
        };
        break;
    case 1249:
        ;
    case 192:
        if (Y11('statusbar')['style']['display'] == 'none')
        {
            R9('MAC = ' + P1, 1, 60000, 1)
        }
        else
        {
            R12()
        };
        break;
    case 655:
        ;
    case 1089:
        ;
    case 652:
        if (P68 || P74)
        {
            return
        };
        if (P15)
        {
            R58()
        }
        else
        {
            R9('Nicht verfügbar!', 1)
        };
        break;
    default:
        alert('No_key');
        break
    }
};

function R21(Cd)
{
    Cd = R_18(Cd);
    if (!Cd)
    {
        return
    };
    if (event)
    {
        event['preventDefault']()
    };
    R17(Cd);
    switch (Cd)
    {
    case 261:
        ;
    case 147:
        ;
    case 76:
        R14(Cd);
        break;
    case 29460:
        ;
    case 105:
        ;
    case 68:
        ;
    case 1078:
        if (!Q88)
        {
            if (Q3 == 1)
            {
                F49(1)
            }
            else
            {
                Y31()
            }
        };
        break;
    case 29461:
        ;
    case 106:
        ;
    case 65:
        ;
    case 1080:
        if (!Q88)
        {
            if (Q3 == 1)
            {
                F49(0)
            }
            else
            {
                Y31()
            }
        };
        break;
    case 78:
        ;
    case 259:
        if (Q3 == 1)
        {
            F42()
        }
        else
        {
            Y31()
        };
        break;
    default:
        if (Q3 == 1)
        {
            R39()
        }
        else
        {
            Y31()
        };
        break
    }
};

function Y31()
{
    if (P17 == 'tsnakeman' && P80)
    {
        Y27()
    }
    else
    {
        F79()
    };
    F16()
};

function R22()
{
    if (!P_5)
    {
        return
    };
    var Cd = event['keyCode'];
    event['preventDefault']();
    switch (Cd)
    {
    case 261:
        ;
    case 147:
        ;
    case 76:
        R14(Cd);
        break;
    case 29461:
        F95();
        break;
    case 29460:
        F96();
        break;
    case 309:
        ;
    case 29443:
        if (Z19 == O19[9])
        {
            Y23()
        }
        else
        {
            if (Z19 == O19[4])
            {
                R1()
            }
            else
            {
                if (Z19 == O19[5])
                {
                    Y71()
                }
                else
                {
                    if (Z19 == O19[6])
                    {
                        Y75()
                    }
                    else
                    {
                        if (Z19 == O19[1])
                        {
                            F99()
                        }
                        else
                        {
                            if (Z19 == O19[3])
                            {
                                F98()
                            }
                            else
                            {
                                if (Z19 == O19[2])
                                {
                                    F97()
                                }
                                else
                                {
                                    if (Z19 == O19[7])
                                    {
                                        Y21()
                                    }
                                    else
                                    {
                                        if (Z19 == O19[8])
                                        {
                                            R13()
                                        }
                                        else
                                        {
                                            P_5 = 0;
                                            if (!Q45[10 * Z20 + Z16][0] && !P81)
                                            {
                                                R9('Sortieren', 1, 0)
                                            };
                                            setTimeout('F88()', 100)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        break;
    case 4:
        Y10();
        break;
    case 5:
        Y9();
        break;
    case 21:
        ;
    case 20:
        if (Z19 == O19[1])
        {
            return F99()
        };
    default:
        Y13('selectbox');
        if (Z19 == O19[2])
        {
            if (A['A25'] == 1)
            {
                Y12('keyb_window,ch_numbar');
                R15(5)
            }
            else
            {
                R66()
            };
            return
        };
        if (Z19 == O19[4] || Z19 == O19[9] || (Q3 && Y11('main')['style']['display'] == 'none' && (Z19 == O19[7] || Z19 == O19[6] || Z19 == O19[5] || Z19 ==
                O19[8])))
        {
            R15(Q11 > 0 ? 3 : 2)
        }
        else
        {
            if (Z19 == O19[5])
            {
                Y12('main')
            };
            Y12('info_window');
            R15(0);
            if (Z19 == O19[1])
            {
                if (P13['indexOf']('fav.dat') < 0)
                {
                    P70 = 0
                };
                if (Q26[Q26['length'] - 1][2] == '')
                {
                    Q26['pop']()
                };
                if (Q26[Q26['length'] - 1][2] == P64)
                {
                    Q26['pop']()
                }
            }
        };
        break
    }
};

function R23(Cd)
{
    if (!P_5)
    {
        return
    };
    Cd = R_18(Cd);
    if (!Cd)
    {
        return
    };
    if (event)
    {
        event['preventDefault']()
    };
    R17(Cd);
    switch (Cd)
    {
    case 261:
        ;
    case 147:
        ;
    case 76:
        R14(Cd);
        break;
    case 1057:
        ;
    case 256:
        ;
    case 651:
        if (P33 && !P37 && P48['length'])
        {
            P68 = 1;
            F62(P13, P48)
        }
        else
        {
            if (P33)
            {
                F16()
            }
            else
            {
                R9('Keine weitere Applets !', 1)
            }
        };
        break;
    case 75:
        break;
    case 1118:
        ;
    case 613:
        ;
    case 262:
        F93(O19[8], P54);
        break;
    case 108:
        if (P59['length'] > 1 && Q90['length'] > 1)
        {
            F93(O19[9], [
                [1, O19[4]],
                [2, O19[5]]
            ])
        }
        else
        {
            if (P59['length'] > 1)
            {
                F93(O19[4], P59)
            }
            else
            {
                if (Q90['length'] > 1)
                {
                    F93(O19[5], Q90)
                }
                else
                {
                    R9('Nicht verfügbar!', 1)
                }
            }
        };
        break;
    case 20:
        if (Z25 == 0 || Z25 == 1)
        {
            F93(O19[8], P54)
        }
        else
        {
            R58()
        };
        break;
    case 21:
        if (Q10 == 5 && Q97 > 0)
        {
            if (P83 && Y11('statusbar')['style']['display'] == 'block')
            {
                R12()
            }
            else
            {
                clearTimeout(P92);
                P83 = 1;
                R9('<table><tr><td><img src="img/buttons/move_m.png"></td><td>-' + tRe(' Ändern Sie die Größe') + '</td></tr></table>', 0, 10000)
            }
        }
        else
        {
            R9('Nicht verfügbar!', 1)
        };
        break;
    case 78:
        ;
    case 259:
        F42();
        break;
    case 22:
        ;
    case 653:
        ;
    case 1249:
        ;
    case 1083:
        if (!Q18 && P15)
        {
            P83 = 0;
            if (Y11('statusbar')['style']['display'] == 'block')
            {
                R48(Q10 < 5 ? Q10 + 1 : 0, 1)
            }
            else
            {
                R48(Q10, 1)
            }
        }
        else
        {
            R9('Nicht verfügbar!', 1)
        };
        break;
    case 1219:
        if (P15)
        {
            R26()
        }
        else
        {
            R9('Nicht verfügbar!', 1)
        };
        break;
    case 29460:
        ;
    case 105:
        ;
    case 68:
        ;
    case 1078:
        if (P83)
        {
            if (Q4 < 150 && Y11('statusbar')['style']['display'] == 'block')
            {
                Q4++;
                R48(Q10, 1)
            }
        }
        else
        {
            F49(1)
        };
        break;
    case 29461:
        ;
    case 106:
        ;
    case 65:
        ;
    case 1080:
        if (P83)
        {
            if (Q4 > 50 && Y11('statusbar')['style']['display'] == 'block')
            {
                Q4--;
                R48(Q10, 1)
            }
        }
        else
        {
            F49(0)
        };
        break;
    case 4:
        if (P83)
        {
            if (Q5 > 50 && Y11('statusbar')['style']['display'] == 'block')
            {
                Q5--;
                R48(Q10, 1)
            }
        }
        else
        {
            if (P15 && P33 && Y11('player')['style']['display'] == 'block')
            {
                R93(-1)
            }
            else
            {
                if (Y11('player')['style']['display'] == 'block')
                {
                    R8()
                }
                else
                {
                    R5(6000)
                }
            }
        };
        break;
    case 5:
        if (P83)
        {
            if (Q5 < 150 && Y11('statusbar')['style']['display'] == 'block')
            {
                Q5++;
                R48(Q10, 1)
            }
        }
        else
        {
            if (P15 && P33 && Y11('player')['style']['display'] == 'block')
            {
                R93(1)
            }
            else
            {
                if (Y11('player')['style']['display'] == 'block')
                {
                    R8()
                }
                else
                {
                    R5(6000)
                }
            }
        };
        break;
    case 309:
        ;
    case 29443:
        if (Q29)
        {
            R16()
        }
        else
        {
            if (Y11('player')['style']['display'] == 'block')
            {
                R8()
            }
            else
            {
                R5(6000)
            }
        };
        break;
    case 31:
        if (Y11('player')['style']['display'] == 'block')
        {
            R8()
        }
        else
        {
            R5(8000)
        };
        break;
    case 612:
        ;
    case 222:
        ;
    case 70:
        ;
    case 45:
        if (P15)
        {
            R39()
        }
        else
        {
            F54()
        };
        break;
    case 88:
        ;
    case 1086:
        ;
    case 84:
        if (P15)
        {
            F16()
        }
        else
        {
            F54()
        };
        break;
    case 71:
        if (P76 && Q_39['length'] > 1)
        {
            if (P89 < 0)
            {
                P89 = setInterval('F49(1);', 8000);
                R9('Diashow starten', 1)
            }
            else
            {
                F50();
                R9('Stop Slideshow', 1)
            }
        }
        else
        {
            if (P15)
            {
                R43()
            }
            else
            {
                F54()
            }
        };
        break;
    case 72:
        if (P15 && P33)
        {
            R93(1)
        }
        else
        {
            F49(1)
        };
        break;
    case 74:
        if (Q3 != 4)
        {
            if (P15 && P33)
            {
                R93(0)
            }
            else
            {
                if (P15 && P76 && P89 > -1)
                {
                    F50();
                    R9('Stop Slideshow', 1)
                }
                else
                {
                    if (Q100)
                    {
                        R54()
                    }
                    else
                    {
                        R9('Nicht verfügbar!', 1)
                    }
                }
            }
        };
        break;
    case 69:
        if (P15 && P33)
        {
            R93(-1)
        }
        else
        {
            F49(0)
        };
        break;
    case 192:
        if (Y11('black_line_top')['style']['display'] == 'block')
        {
            Y13('black_line_top')
        }
        else
        {
            Y12('black_line_top')
        };
        break;
    case 655:
        ;
    case 1089:
        ;
    case 652:
        if (P15)
        {
            R58()
        }
        else
        {
            R9('Nicht verfügbar!', 1)
        };
        break;
    default:
        alert('No_key');
        break
    }
};

function R24(Cd)
{
    if (!P_5)
    {
        return
    };
    Cd = R_18(Cd);
    if (!Cd)
    {
        return
    };
    if (event)
    {
        event['preventDefault']()
    };
    switch (Cd)
    {
    case 261:
        ;
    case 147:
        ;
    case 76:
        R14(Cd);
        break;
    case 17:
        R52(0);
        break;
    case 101:
        R52(1);
        break;
    case 98:
        R52(2);
        break;
    case 6:
        R52(3);
        break;
    case 8:
        R52(4);
        break;
    case 9:
        R52(5);
        break;
    case 10:
        R52(6);
        break;
    case 12:
        R52(7);
        break;
    case 13:
        R52(8);
        break;
    case 14:
        R52(9);
        break;
    case 78:
        ;
    case 259:
        F42();
        break;
    case 105:
        ;
    case 68:
        ;
    case 1078:
        F49(1);
        break;
    case 106:
        ;
    case 65:
        ;
    case 1080:
        F49(0);
        break;
    case 75:
        break;
    case 31:
        if (Y11('player')['style']['display'] == 'block')
        {
            R8()
        }
        else
        {
            R5(8000)
        };
        break;
    case 1118:
        ;
    case 613:
        ;
    case 262:
        F93(O19[8], P54);
        break;
    case 29460:
        if (P83)
        {
            if (Q4 > 50 && Y11('statusbar')['style']['display'] == 'block')
            {
                Q4++;
                R48(Q10, 1)
            }
        }
        else
        {
            R51(2)
        };
        break;
    case 29461:
        if (P83)
        {
            if (Q4 > 50 && Y11('statusbar')['style']['display'] == 'block')
            {
                Q4--;
                R48(Q10, 1)
            }
        }
        else
        {
            R51(-2)
        };
        break;
    case 4:
        if (P83)
        {
            if (Q5 > 50 && Y11('statusbar')['style']['display'] == 'block')
            {
                Q5--;
                R48(Q10, 1)
            }
        }
        else
        {
            R51(-0.5)
        };
        break;
    case 5:
        if (P83)
        {
            if (Q5 < 150 && Y11('statusbar')['style']['display'] == 'block')
            {
                Q5++;
                R48(Q10, 1)
            }
        }
        else
        {
            R51(0.5)
        };
        break;
    case 22:
        ;
    case 653:
        ;
    case 1249:
        ;
    case 1083:
        if (!Q18 && P15)
        {
            P83 = 0;
            if (Y11('statusbar')['style']['display'] == 'block')
            {
                R48(Q10 < 5 ? Q10 + 1 : 0, 1)
            }
            else
            {
                R48(Q10, 1)
            }
        }
        else
        {
            R9('Nicht verfügbar !', 1)
        };
        break;
    case 309:
        ;
    case 29443:
        if (Q13 != 0)
        {
            R46()
        }
        else
        {
            if (Q3 == 4)
            {
                R53()
            }
            else
            {
                R54()
            }
        };
        break;
    case 88:
        ;
    case 1086:
        ;
    case 84:
        F16();
        break;
    case 612:
        ;
    case 222:
        ;
    case 70:
        ;
    case 45:
        R39();
        break;
    case 108:
        if (P59['length'] > 1 && Q90['length'] > 1)
        {
            F93(O19[9], [
                [1, O19[4]],
                [2, O19[5]]
            ])
        }
        else
        {
            if (P59['length'] > 1)
            {
                F93(O19[4], P59)
            }
            else
            {
                if (Q90['length'] > 1)
                {
                    F93(O19[5], Q90)
                }
                else
                {
                    R9('Nicht verfügbar!', 1)
                }
            }
        };
        break;
    case 20:
        if (Z25 == 0 || Z25 == 1)
        {
            F93(O19[8], P54)
        }
        else
        {
            R58()
        };
        break;
    case 21:
        if (Q10 == 5 && Q97 > 0)
        {
            if (P83 && Y11('statusbar')['style']['display'] == 'block')
            {
                R12()
            }
            else
            {
                clearTimeout(P92);
                P83 = 1;
                R9('<table><tr><td><img src="img/buttons/move_m.png"></td><td>-' + tRe(' Ändern Sie die Größe') + '</td></tr></table>', 0, 10000)
            }
        }
        else
        {
            R9('Nicht verfügbar!', 1)
        };
        break;
    case 1219:
        R26();
        break;
    case 72:
        R51(1 / 6);
        break;
    case 74:
        if (Q3 == 4)
        {
            R53()
        }
        else
        {
            R54()
        };
        break;
    case 69:
        R51(-1 / 6);
        break;
    case 192:
        if (Y11('black_line_top')['style']['display'] == 'block')
        {
            Y13('black_line_top')
        }
        else
        {
            Y12('black_line_top')
        };
        break;
    case 71:
        if (Q3 == 4)
        {
            R53()
        }
        else
        {
            if (!Q14)
            {
                Q14 = 1;
                R9('sequenzielle Wiedergabe', 1)
            }
            else
            {
                if (Q14 == 1)
                {
                    Q14 = 2;
                    R9('Wiederholungswiedergabe', 1)
                }
                else
                {
                    if (Q14 == 2)
                    {
                        Q14 = 0;
                        R9('Alle Modi aus!', 1)
                    }
                }
            }
        };
        break;
    case 655:
        ;
    case 1089:
        ;
    case 652:
        R58();
        break;
    default:
        alert('No_key');
        break
    }
};

function R25()
{
    try
    {
        var p_n = Y11('pluginNetwork'),
            p_t = Y11('pluginObjectTV'),
            p_nv = Y11('pluginObjectNNavi');
        if (!pluginAPI)
        {
            pluginAPI = new Common['API'].Plugin()
        };
        if (PO7)
        {
            Q74 = PO7.GetSource();
            PO7.SetMediaSource()
        };
        if (!PO7 || !p_t || !p_nv || !p_n)
        {
            return 0
        };
        Z25 = p_t.GetProductType();
        if (isNaN(Z25) || Z25 < 0 || Z25 > 4)
        {
            return 0
        };
        var fw = p_nv.GetFirmware();
        fw = fw['split']('-');
        fw = (fw['length'] > 1) ? fw[1] : '';
        if (fw['indexOf']('2009') >= 0 || fw['indexOf']('2010') >= 0)
        {
            P6 = 1
        }
        else
        {
            if (fw['indexOf']('2011') < 0)
            {
                P7 = 1
            }
        };
        if (fw['indexOf']('2014') > 0)
        {
            P0 = 1
        }
        else
        {
            if (fw['indexOf']('2012') > 0)
            {
                P8 = 1
            }
        };
        if (fw['indexOf']('2010') >= 0)
        {
            seriesC = true;
        }
        else
        {
            if (fw['indexOf']('2011') >= 0)
            {
                seriesD = true;
            }
            else
            {
                if (fw['indexOf']('2012') >= 0)
                {
                    seriesE = true;
                }
                else
                {
                    if (fw['indexOf']('2013') >= 0)
					{
                        seriesF = true;
                    }
					else   // add quax60
					{
						if (fw['indexOf']('2014') >= 0)
                          seriesH = true;
					}
                }
            }
        };
        Q31 = Math['round'](Math['random']() * 1000);
        Q_32 = Q31;
        F6();
        PO4 = Y11('pluginObjectScreen3D');
        if (!P6)
        {
            PO5 = Y11('pluginObjectSef')
        };
        if (PO5)
        {
            Q15 = 1;
            return 1
        };
        PO6 = Y11('pluginObjectPlayer');
        if (PO6)
        {
            PO6['OnConnectionFailed'] = 'R27';
            PO6['OnNetworkDisconnected'] = 'R28';
            PO6['OnStreamNotFound'] = 'R29';
            PO6['OnRenderError'] = 'R30';
            PO6['OnStreamInfoReady'] = 'R32';
            PO6['OnBufferingStart'] = 'R33';
            PO6['OnBufferingProgress'] = 'R34';
            PO6['OnBufferingComplete'] = 'R36';
            PO6['OnCurrentPlayTime'] = 'R55';
            return 1
        };
        return 0
    }
    catch (e)
    {
        return 0
    }
};

function R27()
{
    R31(9)
};

function R28()
{
    R31(8)
};

function R29()
{
    R31(7)
};

function R30(R87)
{
    R31(R87)
};

function R31(err)
{
    CL(' Player.error : ' + err);
    if (Q3 && Q3 < 4 && !isNaN(err) && err > 0)
    {
        if ((err == 8 || err == 6 || err == 3) && Q24 < 3)
        {
            Q24++;
            if (err < 1 && Q3 == 1 || err == 8)
            {
                Y72()
            };
            Q67 = err
        }
        else
        {
            if (err < 9 || (err == 9 && Ach(12)['indexOf']('/@?acet') < 0))
            {
                Q24 = 4;
                Y6(err)
            }
        }
    }
};

function Y72()
{
    CL(' Restart ');
    if (Q3 == 3 && Q12 > 120000)
    {
        Q13 = Q12
    };
    if (Q3 > 1)
    {
        Q24 = 3
    };
    R43()
};

function R32()
{
    CL(' OnStreamInfoReady');
    if (Q3 && Q3 < 4 && Q24 < 4 && !Q16)
    {
        R47();
        Y12('resolution');
        R35();
        Q68 = 1
    }
};

function R33()
{
    CL(' OnBufferingStart');
    if (Q3 && Q3 < 4 && Q24 < 4 && !Q16 && !P76)
    {
        Q68 = 1;
        R9('Puffer : 0&nbsp;%', 1);
        if (Q3 == 1)
        {
            Q24 = 0;
            P84 = P84 > 60000 ? P84 : 60000;
            R2()
        }
        else
        {
            if (Q24 < 3)
            {
                Q24 = 3;
                R37('Y72()', P6 ? 30000 : 20000)
            }
        }
    }
};

function R34(p)
{
    alert('########## OnBufferingProgress : ' + p);
    if (Q3 && Q3 < 4 && Q24 < 4 && !Q16 && !P76 && p > 0)
    {
        Q68 = 1;
        R9('Puffer : ' + p + '&nbsp;%', 1, 0);
        if (p > 20)
        {
            if (Q24 == 3)
            {
                clearTimeout(Q2);
                Q24 = 0
            }
        }
        else
        {
            if (p > 0 && Q3 > 1 && Q24 < 3)
            {
                Q24 = 3;
                R37('Y72()', P6 ? 30000 : 20000)
            }
        }
    }
};

function R35()
{
    if (Q11 || Q22['indexOf']('mms://') == 0 || (Q22['indexOf']('.m3u8') > 0 && Q22['indexOf']('hls-live') > 0))
    {
        return
    };
    try
    {
        if (Q88 & P30 < Q_39['length'] - 1)
        {
            if (Q22['indexOf']('m3u8?archive=') > 0)
            {
                var t0 = Ach(1)['split']('=')[1],
                    t1 = Q_39[P30 + 1][1]['split']('=')[1]
            }
            else
            {
                t0 = (Ach(12)['indexOf']('?gmt=') > 0) ? R98(Ach(12), 'gmt=', '&') : R98(Ach(12), 'uts=', '&');
                t1 = (Q_39[P30 + 1][12]['indexOf']('?gmt=') > 0) ? R98(Q_39[P30 + 1][12], 'gmt=', '&') : R98(Q_39[P30 + 1][12], 'uts=', '&')
            };
            Q11 = (!isNaN(t0) && !isNaN(t1) && t1 > t0) ? Math['floor']((Number(t1) - Number(t0)) * 1000) : 0
        }
        else
        {
            Q11 = Number((Q15) ? PO5.Execute('GetDuration') : PO6.GetDuration())
        };
        if (!Q11 || isNaN(Q11) || Q11 > 99999998 || (!Q19 && Q11 < 300000) || (Q19 && Q11 < 30000) || Q11 < 1000)
        {
            Q11 = 0
        }
    }
    catch (e)
    {
        Q11 = 0
    };
    CL('total_time = ' + Q11)
};

function R36()
{
    CL(' Buffer 100%');
    if (Q3 && Q24 < 4)
    {
        R3();
        Q68 = 2;
        if (!Q16 && !P76)
        {
            R9('Puffer : 100&nbsp;%', 1, 1000)
        };
        if (Q3 == 1)
        {
            setTimeout('Q24=0', 8000);
            clearTimeout(Load_timer);
            R35();
            if (Q11 > 0)
            {
                if (Q88)
                {
                    Q12 = Q73
                };
                Q3 = 3;
                Q25 = Q18 ? 'aud_history.dat' : 'vod_history.dat'
            }
            else
            {
                Q3 = 2;
                Q11 = 0;
                Q25 = P76 ? 'foto_history.dat' : 'tv_live_history.dat'
            };
            R15(Q3);
            clearInterval(Q96);
            Q96 = -1;
            setTimeout('R48(Q10,0)', 1500);
            if (!Q16 && Q13 > 0 && Q13 < Q11)
            {
                LoadTimer('R46();', 1700)
            }
            else
            {
                setTimeout('F57(Q25)', 4000);
                if (!P76 && !Q18)
                {
                    LoadTimer('R5(6000);if(!Q88&&!Q100)R45();', 1500)
                }
            };
            if (!P76)
            {
                R60()
            };
            if (P59['length'] > 1 || Q90['length'] > 1)
            {
                Q6 += '<tr><td><table><tr><td><img src="img/buttons/red_m.png"></td><td>-' + tRe(' Änderung ' + (Q90['length'] > 1 ? 'Quelle' : '') + ((P59[
                    'length'] > 1 && Q90['length'] > 1) ? ' Ändern ' : '') + (P59['length'] > 1 ? 'Qualität' : '')) + '</td></tr></table></td></tr>'
            };
            if (Q18)
            {
                pluginAPI['setOnScreenSaver'](180)
            }
            else
            {
                pluginAPI['setOffScreenSaver']()
            }
        };
        if (Q16)
        {
            setTimeout('Q16=0', 500);
            clearTimeout(Q2);
            Q13 = 0;
            if (Y11('p_ch_name')['style']['display'] == 'none')
            {
                R6('Y13(\'player\');Y51()', 3000)
            }
        }
    }
};

function R37(f, ti)
{
    clearTimeout(Q2);
    Q2 = setTimeout(f, ti)
};

function R39()
{
    F50();
    R40();
    Q14 = A['A17'];
    F16()
};

function R40()
{
    R41();
    if (Q54 && Q54['indexOf']('/@?') < 0)
    {
        clearTimeout(P93);
        P93 = setTimeout('clearInterval(P90);P90=-1;', 1800000)
    };
    Q67 = -1;
    Q22 = '';
    Q24 = 0;
    Q13 = 0;
    Q20 = 0;
    Q9 = '';
    Q7 = '';
    Q8 = '', Z18 = 0;
    P47 = [];
    P45 = 0;
    P44 = 0;
    Q16 = 0;
    Q88 = 0;
    Q100 = 0;
    Q11 = 0;
    Q12 = 0;
    Q73 = 0;
    pluginAPI['setOnScreenSaver']();
    P54['splice'](0, P54['length'] - 3)
};

function R41()
{
    clearTimeout(Q2);
    clearTimeout(Load_timer);
    clearInterval(Q96);
    Q96 = -1;
    if (Q3)
    {
        if (!Q88 && !Q100 && Q3 > 2 && Q12 > 120000)
        {
            R44()
        };
        Q3 = 0;
        if (Q15)
        {
            PO5.Execute('Stop');
            PO5.Execute('ClearScreen');
            PO5.Close()
        }
        else
        {
            if (PO6)
            {
                try
                {
                    if (Q20 > 0 && PO4)
                    {
                        PO4.Set3DEffectMode(0)
                    }
                }
                catch (e)
                {};
                PO6.Stop();
                PO6.ClearScreen()
            }
        };
        Q6 = '';
        Q21 = 1;
        Q17 = 0;
        Q25 = '';
        Q66 = 0;
        Y13('p_progress')
    }
};

// Play_in_url und Play_out_url
function R42(ul)
{
    CL('Play_in_url=' + ul);
    if (Ach(1)['indexOf']('#no_stop') > 0 && Q3)
    {
        R15(Q11 > 0 ? 3 : 2);
        R5(3000);
        return
    };
    if (Q54 && Q54['indexOf']('/@?') < 0)
    {
        clearTimeout(P93);
        P93 = setTimeout('R39()', 14400000)
    };
    if (ul["indexOf"]("iptv://") >= 0)
    {
        var re = new RegExp("^(iptv://)");
        if (re.test(ul))
        {
            ul = b64_to_utf8(ul.substr(13));
        }
    };
    Q97 = 0;
    Q98 = 0;
    Y11('res_c')['innerText'] = 0 + 'X' + 0;
    P84 = 60000;
    ul = Y47(ul);
    if (ul['indexOf']('udp://') >= 0)
    {
        if (A['A1']['indexOf'](':') > 0)
        {
            ul = 'http://' + A['A1'] + '/udp/' + ul['substr'](7)
        }
    };
    Q19 = 1;
    if (ul['indexOf']('.m3u8') > 0)
    {
        Q19 = 0
    };
    var uar = ul['split']('#');
	
	CL('Play_in_uar=' + uar);       // mod quax
    for (i = 1; i < uar['length']; i++)
    {
        if (!uar[i])
        {
            continue
        };
		CL('Play_in_uar=' + uar);       // mod quax
        if (uar[i] == 'vod')
        {
            Q19 = 1
        }
        else
        {
            if (uar[i] == 'no_vod')
            {
                Q19 = 0
            }
            else
            {
                if (uar[i] == 'no_sequential' && Q14 == 1)
                {
                    Q14 = 0
                }
                else
                {
                    if (uar[i] == 'no_repeat' && Q14 == 2)
                    {
                        Q14 = 0
                    }
                    else
                    {
                        if (uar[i] == 'sequential')
                        {
                            Q14 = 1
                        }
                        else
                        {
                            if (uar[i] == 'repeat')
                            {
                                Q14 = 2
                            }
                            else
                            {
                                if (uar[i]['indexOf']('timeout=') == 0)
                                {
                                    var tar = uar[i]['split']('=');
                                    if (!isNaN(tar[1]))
                                    {
                                        P84 = Number(tar[1]);
                                        P84 = P84 < 5000 ? 5000 : P84 > 300000 ? 300000 : P84;
                                        CL('st_timeout = ' + P84)
                                    }
                                }
                                else
                                {
                                    if (uar[i]['indexOf']('start_time=') == 0)
                                    {
                                        tar = uar[i]['split']('=');
                                        if (!isNaN(tar[1]))
                                        {
                                            Q13 = Number(tar[1]);
                                            CL('start_time = ' + Q13)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    Q22 = uar[0];
    if (Q22['indexOf']('.m3u8') > 0 && Q22['indexOf']('|COMPONENT=HLS') < 0)
    {
        Q22 += '|COMPONENT=HLS'
    };
    CL('Play_out_url===' + Q22);
    Q18 = (P97['test'](Q22)) ? 1 : 0;
    Q88 = (Q22['indexOf']('m3u8?archive=') > 0 || Ach(12)['indexOf']('.kartina.tv/api/json/get_url?gmt=') > 0 || Ach(12)['indexOf'](
        '/api/json2/get_url.php?gmt=') > 0 || Ach(12)['indexOf']('.tv-over.net/iptv/api/v1/json/get_url_tv?uts=') > 0) ? 1 : 0;
    Q100 = (!Q88 && (Q22['indexOf']('/@?acetrt') > 0 || Q22['indexOf']('/@?acetav') > 0 || Ach(12)['indexOf']('/@?acetrt') > 0 || Ach(12)['indexOf'](
        '/@?acetav') > 0)) ? 1 : 0;
    Q5 = 0;
    Q4 = 0;
    Q67 = -1;
    if (!Q18 && !P76)
    {
        var ar = Ach(6)['split']('|');
        if (isNaN(ar[0]) || ar[0] < 0 || ar[0] > 6)
        {
            ar[0] = 9
        };
        if (ar[0] && ar['length'] == 3)
        {
            if (!isNaN(ar[1]) && !isNaN(ar[2]))
            {
                Q5 = Number(ar[1]);
                Q4 = Number(ar[2]);
                Q5 = (Q5 > 150) ? 150 : (Q5 < 50) ? 50 : Q5;
                Q4 = (Q4 > 150) ? 150 : (Q4 < 50) ? 50 : Q4
            }
        };
        Q10 = Number((ar[0] && ar[0] < 9) ? ar[0] : A['A8'] < 9 ? A['A8'] : Q10)
    }
    else
    {
        Q10 = 0
    };
    if (!Q5)
    {
        Q5 = A['A10']
    };
    if (!Q4)
    {
        Q4 = A['A9']
    };
    try
    {
        if (PO4 && (PO4.Flag3DEffectSupport() == 1 || PO4.Flag3DTVConnect() == 1))
        {
            P54['unshift']([5, '3D'])
        }
    }
    catch (e)
    {};
    R43()
};

function Y63(t)
{
    var ar1 = Q22['split']('|'),
        ar2 = ar1[0]['split']('=');
    Q22 = ar2[0] + '=' + (Number(ar2[1]) + (Q12 - Q73) / 1000 + t) + '|' + ar1[1];
    Q73 = Q12 + t * 1000;
};

function Y64(t)
{
    var t0 = (Ach(12)['indexOf']('?gmt=') > 0) ? R98(P87, 'gmt=', '&') : R98(P87, 'uts=', '&');
    var t1 = (Number(t0) + (Q12 - Q73) / 1000 + t) + '';
    P87 = P87['replace'](t0, t1);
    Q73 = Q12 + t * 1000;
};

function R100(t, me)
{
    Q16 = 1;
    Q13 = 0;
    R9(me, 1, 2000);
    if (Q22['indexOf']('m3u8?archive=') > 0)
    {
        Y63(t);
        return LoadTimer('R43()', 1000)
    };
    Y64(t);
    LoadTimer('F70(P87.split("|#|"),Ach(1),"")', 1000)
};

function R43(t)
{
    if (!t)
    {
        t = 0
    }
    else
    {
        CL('P.time=' + t)
    };
    if (Q20 > 0)
    {
        Q10 = 0
    };
    R41();
    Q3 = 1;
    if (Ach(1)['indexOf']('#no_stop') < 0)
    {
        R15(1)
    };
    if (!P76)
    {
        R5(0);
        R2()
    };
    if (Q15)
    {
        PO5.Open('Player', '1.000', 'Player');
        PO5.Execute('InitPlayer', Q22);
        PO5['OnEvent'] = 'R57';
        if (Q20 > 0)
        {
            PO5.Execute('SetPlayerProperty', 2, '3', Q20)
        }
        else
        {
            if (Q18)
            {
                PO5.Execute('SetPlayerProperty', 5, '0', 0)
            }
        }
    };
    R38();
    if (Q15)
    {
        PO5.Execute('SetDisplayArea', 0, 0, 960, 540);
        PO5.Execute('SetCropArea', 0, 0, 0, 0);
        PO5.Execute('StartPlayback', t)
    }
    else
    {
        if (PO6)
        {
            PO6.SetDisplayArea(0, 0, 960, 540);
            PO6.SetCropArea(0, 0, 0, 0);
            PO6.Play(Q22)
        }
        else
        {
            Y40()
        }
    }
};

function R47()
{
    var w = 0,
        h = 0;
    if (!Q18 && Q3)
    {
        try
        {
            if (Q15)
            {
                rs = PO5.Execute('GetVideoResolution')['split']('|');
                if (rs['length'] == 2)
                {
                    w = rs[0];
                    h = rs[1]
                }
            }
            else
            {
                h = PO6.GetVideoHeight();
                w = PO6.GetVideoWidth()
            }
        }
        catch (e)
        {
            w = 0;
            h = 0
        };
        if (isNaN(w) || isNaN(h) || w < 128 || w > 7680)
        {
            h = 0;
            w = 0
        }
        else
        {
            if (w == 5)
            {
                h = 432;
                w = 540
            }
            else
            {
                if (w == 4)
                {
                    h = 270;
                    w = 480
                }
                else
                {
                    if (w == 3)
                    {
                        h = 288;
                        w = 384
                    }
                }
            }
        };
        w = Number(w);
        h = Number(h);
        if (Q97 != w || Q98 != h)
        {
            Y11('res_c')['innerText'] = w + 'X' + h
        }
    };
    Q97 = Number(w);
    Q98 = Number(h)
};

//-- veränder der Video Anzeige ----
function R48(mode, sw, r)
{
    if (Q3 > 1 && Q3 < 4 && Q24 < 4 && !Q16)
    {
        if (Q96 == -1 && !sw && !r && Q22['indexOf']('.m3u8') > 0)
        {
            Q96 = setInterval('R48(Q10,0,1)', 1000)
        };
        var w = Q97,
            h = Q98;
        if ((!sw && r) || Q97 < 128 || Q98 < 128)
        {
            R47()
        };
        if (!sw && r && Q97 == w && Q98 == h)
        {
            return
        };
        w = Q97;
        h = Q98;
        var s = '',
            dx = 0,
            dy = 0,
            dw = 960,
            dh = 540,
            cx = 0,
            cy = 0,
            cw = w,
            ch = h;
        Q10 = Number(mode);
        Q_39[P30][6] = Q10 == 5 ? Q10 + '|' + Q5 + '|' + Q4 : Q10 + '';
        Q7 = '';
        switch (mode)
        {
        case 0:
            if (w / h < 1.79 || !w)
            {
                s = '16x9 FULL'
            }
            else
            {
                s = 'ORIGINAL';
                dh = 960 * h / w;
                dy = (540 - dh) / 2
            };
            break;
        case 1:
            if (!w)
            {
                s = 'w/h = 1.67';
                dx = 30;
                dw = 900
            }
            else
            {
                s = '14x9';
                cy = 0.0625 * h;
                cw = w;
                ch = 0.875 * h
            };
            break;
        case 2:
            if (!w)
            {
                s = 'w/h = 1.56';
                dx = 60;
                dw = 840
            }
            else
            {
                if (w / h < 1.35)
                {
                    s = '4x3 ZOOM 2';
                    cy = 0.115 * h;
                    cw = w;
                    ch = 0.77 * h
                }
                else
                {
                    return R48(5, sw)
                }
            };
            break;
        case 3:
            if (!w)
            {
                s = 'w/h = 1.45';
                dx = 90;
                dw = 780
            }
            else
            {
                if (w / h < 1.35)
                {
                    s = '4x3 ZOOM 1';
                    dx = 60;
                    dw = 840;
                    cy = 0.0625 * h;
                    cw = w;
                    ch = 0.875 * h
                }
                else
                {
                    return R48(5, sw)
                }
            };
            break;
        case 4:
            if (w / h < 1.35 || !w)
            {
                s = '4x3';
                dx = 120;
                dw = 720
            }
            else
            {
                return R48(5, sw)
            };
            break;
        case 5:
            if (!w)
            {
                s = 'w/h = 2';
                dy = 30;
                dh = 480
            }
            else
            {
                if (Q5 <= 100)
                {
                    dw = 9.6 * Q5;
                    dx = (960 - dw) / 2
                }
                else
                {
                    cw = w * (2 - Q5 / 100);
                    cx = w * (Q5 / 200 - 0.5)
                };
                if (Q4 <= 100)
                {
                    dh = 5.4 * Q4;
                    dy = (540 - dh) / 2
                }
                else
                {
                    ch = h * (2 - Q4 / 100);
                    cy = h * (Q4 / 200 - 0.5)
                };
                s = 'X-ZOOM'
            };
            break;
        case 6:
            if (!w)
            {
                return R48(0, sw)
            }
            else
            {
                if (w / h < 1.35)
                {
                    return R48(A.A11, sw)
                }
                else
                {
                    if (w / h < 1.79)
                    {
                        return R48(A.A12, sw)
                    }
                    else
                    {
                        return R48(A.A13, sw)
                    }
                }
            };
            break;
        case 7:
            if (w / h >= 1.79)
            {
                s = 'ORIGINAL ZOOM 1';
                dh = 960 * h / (w * 0.85);
                if (540 >= dh)
                {
                    dy = (540 - dh) / 2
                }
                else
                {
                    cy = (dh - 540) / 2;
                    ch = 540;
                    dh = 540
                };
                cx = 0.075 * w;
                cw = 0.85 * w
            }
            else
            {
                s = '16x9 ZOOM 1';
                cx = 0.0625 * w;
                cy = 0.0625 * h;
                cw = 0.875 * w;
                ch = 0.875 * h
            };
            break;
        case 8:
            if (w / h >= 1.79)
            {
                s = 'ORIGINAL ZOOM 2';
                dh = 960 * h / (w * 0.75);
                if (540 >= dh)
                {
                    dy = (540 - dh) / 2
                }
                else
                {
                    cy = (dh - 540) / 2;
                    ch = 540;
                    dh = 540
                };
                cx = 0.125 * w;
                cw = 0.75 * w
            }
            else
            {
                s = '16x9 ZOOM 2';
                cx = 0.125 * w;
                cy = 0.125 * h;
                cw = 0.75 * w;
                ch = 0.75 * h
            };
            break;
        default:
            s = 'NO ZOOM';
            break
        };
        if (s)
        {
            Q7 = '<tr><td><center>' + s + '</center></td></tr>';
            if (mode == 5 && s['indexOf']('X-ZOOM') >= 0)
            {
                if (P83)
                {
                    s += '&nbsp;&nbsp;w = ' + Q5 + ' % &nbsp;&nbsp;h = ' + Q4 + ' % '
                }
                else
                {
                    s = '<center>X-ZOOM</center><table><tr><td><img src="img/buttons/yellow.png"></td><td> - &nbsp;&nbsp;Größe anpassen</td></tr></table>'
                };
                clearTimeout(P92)
            };
            if (!P76 && sw > 0)
            {
                if (s['indexOf']('X-ZOOM') < 0)
                {
                    s = tRe(s)
                };
                R9(s, 0, P83 ? 8000 : 3000)
            }
        };
        if (Q15)
        {
            PO5.Execute('SetDisplayArea', dx, dy, dw, dh);
            PO5.Execute('SetCropArea', cx, cy, cw, ch)
        }
        else
        {
            if (PO6)
            {
                PO6.SetDisplayArea(dx, dy, dw, dh);
                PO6.SetCropArea(cx, cy, cw, ch)
            }
        }
    }
};

function R49(m, me)
{
    if (Q3 == 3)
    {
        Q16 = 1;
        R9(me, 1, 2000);
        Q68 = 1;
        if (Q15)
        {
            PO5.Execute('JumpForward', m)
        }
        else
        {
            PO6.JumpForward(m)
        }
    }
};

function R50(m, me)
{
    if (Q3 == 3)
    {
        Q16 = 1;
        if (m > 3)
        {
            R9(me, 1, 2000)
        };
        Q68 = 1;
        if (Q15)
        {
            if (/(.mp3)$/i ['test'](Q22))
            {
                R43((Q12 / 1000) - m)
            }
            else
            {
                PO5.Execute('JumpBackward', m)
            }
        }
        else
        {
            PO6.JumpBackward(m)
        }
    }
};

function R51(m)
{
    if (!Q88)
    {
        R53()
    };
    if (Q3 == 3 && Q68 == 2 && !Q16)
    {
        var cm = -Q12 / 60000,
            em = (Q11 - Q12) / 60000,
            me = m + ' min';
        if (Math['abs'](m) < 1)
        {
            me = 60 * m + ' s'
        };
        if (m >= 0)
        {
            if (m < em)
            {
                if (Q88)
                {
                    R100(m * 60, ' + ' + me)
                }
                else
                {
                    R49(m * 60, ' + ' + me)
                }
            }
            else
            {
                Q11 = Q12;
                R56()
            }
        }
        else
        {
            if (Q88)
            {
                if (m <= cm)
                {
                    F45()
                }
                else
                {
                    R100(m * 60, me['replace']('-', ' - '))
                }
            }
            else
            {
                if (m <= cm)
                {
                    m = cm
                };
                R50(-m * 60, me['replace']('-', ' - '))
            }
        }
    }
};

function R52(p)
{
    if (!Q88)
    {
        R53()
    };
    if (Q3 == 3 && Q68 == 2 && !Q16)
    {
        var me = p * 10 + '&nbsp;%',
            jm = (Q11 * p / 10 - Q12) / 1000;
        if (Q88)
        {
            R100(jm, me)
        }
        else
        {
            if (jm > 0)
            {
                R49(jm, me)
            }
            else
            {
                if (jm < 0)
                {
                    R50(-jm, me)
                }
            }
        }
    }
};

function R53()
{
    if (Q3 == 4 && Q68 == 2 && !Q16)
    {
        if (Q18)
        {
            pluginAPI['setOnScreenSaver'](180)
        }
        else
        {
            pluginAPI['setOffScreenSaver']()
        };
        R9('<img src="img/buttons/b_play.png" height="48" width="48">', 0);
        if (Q88)
        {
            Q13 = 0;
            if (Q22['indexOf']('m3u8?archive=') > 0)
            {
                R43()
            }
            else
            {
                F70(P87['split']('|#|'), Ach(1), '')
            }
        }
        else
        {
            if (Q15)
            {
                PO5.Execute('Resume')
            }
            else
            {
                PO6.Resume()
            };
            Q3 = 3;
            if (Q22['indexOf']('://') > 0 && Q17)
            {
                setTimeout('R51(-0.05)', 200)
            };
            R8();
            Q13 = 0;
            clearTimeout(Q2);
            Q17 = 0
        }
    }
};

function R54()
{
    Q3 = 4;
    if (Q15)
    {
        PO5.Execute('Pause')
    }
    else
    {
        PO6.Pause()
    };
    R5(0);
    var s = !Q35 ? 1 : 0;
    R9('<img src="img/buttons/b_pause.png" height="48" width="48">', 0, 0, s);
    pluginAPI['setOnScreenSaver'](180);
    if (Q88)
    {
        if (Q22['indexOf']('m3u8?archive=') > 0)
        {
            Y63(-2)
        }
        else
        {
            Y64(-2)
        }
    }
    else
    {
        R37('Q17=1', 30000)
    }
};

function R55(ti)
{
    if (Q3 == 3 && !Q88)
    {
        Q12 = Number(ti);
        if (Q12 >= 0)
        {
            F72(Q12, Q11)
        };
        R56()
    }
};

function R56()
{
    if (Q3 == 3)
    {
        if (Q11 >= 1000 && Q11 <= Q12)
        {
            if (Q14 == 2)
            {
                R43()
            }
            else
            {
                if (Q14 == 1 && Q_39['length'] > 1)
                {
                    F49(1)
                }
                else
                {
                    R39()
                }
            }
        }
        else
        {
            if (Q11 < 1000)
            {
                if (Q12 > Q11)
                {
                    Q13 = Q12;
                    R43()
                }
                else
                {
                    R31(8)
                }
            }
        }
    }
};

function R57(tp, p)
{
    switch (tp)
    {
    case 1:
        R27();
        break;
    case 3:
        R29();
        break;
    case 4:
        R28();
        break;
    case 6:
        R30(p);
    case 9:
        R32();
        break;
    case 11:
        R33();
        break;
    case 13:
        R34(p);
        break;
    case 12:
        R36();
        break;
    case 14:
        R55(p);
        break
    }
};

function R58()
{
    if (Q3 > 1)
    {
        if (!Q15)
        {
            R9('nicht verfügbar!', 1)
        }
        else
        {
            if (Q21 < 2)
            {
                R9('keine zusätzliches Spuren!', 1)
            }
            else
            {
                var n = PO5.Execute('GetCurrentStreamID', 1);
                if (n >= 0)
                {
                    n++;
                    if (n + 1 > Q21)
                    {
                        n = 0
                    };
                    R59(n, 1)
                }
            }
        }
    }
};

function R59(n, s)
{
    Z27 = n;
    PO5.Execute('SetStreamID', 1, n);
    var io = PO5.Execute('GetStreamLanguageInfo', 1, n),
        lg = O8[io];
    lg = (lg) ? lg : 'unbekannt' + (io > 0 ? ' - ' + io : '');
    if (s)
    {
        R9(lg + ' Audio Spur-Nummer' + (n + 1), 1, 3000, !Q35 ? 1 : 0)
    };
    Q8 = '<tr><td><center>' + tRe(lg + ' Audio Spur-Nr' + (n + 1)) + '</center></td></tr>'
};

function R60()
{
    Q92 = [];
    if (Q15)
    {
        try
        {
            Q21 = Number(PO5.Execute('GetTotalNumOfStreamID', 1));
            if (isNaN(Q21) || Q21 < 1)
            {
                Q21 = 1
            }
        }
        catch (e)
        {
            Q21 = 1
        };
        if (Q21 > 1 && Q21 < 10)
        {
            var v = 0;
            if (Ach(7) && Ach(7) <= Q21)
            {
                v = 1;
                R59((Number(Ach(7)) - 1), 0)
            };
            for (var i = 0; i < Q21; i++)
            {
                var io = PO5.Execute('GetStreamLanguageInfo', 1, i),
                    lg = O8[io];
                lg = (lg) ? lg : 'unbekannt' + (io > 0 ? ' - ' + io : '');
                if (Z25 < 2)
                {
                    Q92['push']([i, lg])
                };
                if (!v && io == A['A15'])
                {
                    R59(i, 0)
                }
            };
            if (Z25 < 2)
            {
                P54['unshift']([4, 'Tonspuren'])
            };
            Q6 += '<tr><td><table><tr><td><img src="img/buttons/green_m.png"></td><td>' + (Z25 < 2 ? 'ändern AD/SUBT' : '') +
                '- &nbsp;Änderung &nbsp;Spur</td></tr></table><td></tr>'
        }
    }
};

function Y32()
{
    Y13('ch_numbar_logo');
    F13(345, 25, 440, 145);
    Y11('ch_numbar_nun')['style']['fontSize'] = P7 ? '17px' : '18px';
    Y7(Y11('ch_numbar_nun'), '<center style="margin-top:' + (P7 ? '3px' : '4px') +
        '"><table><tr><td><img src="img/buttons/0_9.png"></td><td>- &nbsp;Ziffer ,&nbsp;&nbsp;<b>PRE-CH</b> &nbsp;- &nbsp;löschen Zeichen</td></tr></table><table><tr><td><img src="img/buttons/play.png"></td><td>- &nbsp;Leertaste ,&nbsp;&nbsp;<b>TTX/MIX</b> &nbsp;- &nbsp;Swap. Zeichen</td></tr></table><table><tr><td><img src="img/buttons/help_ff_rew.png"/></td><td>- &nbsp;Position Cursor ,</td><td><img src="img/buttons/pause.png"/></td><td>- &nbsp;Grossbuchstabe umschalten</td></tr></table></center>'
    );
    Y12('ch_numbar')
};

function Y65(s)
{
    var st = s ? 'hi' : 'cur';
    Y11('search_w_l')['style']['backgroundImage'] = 'url(img/input/text_input_left_' + st + '.png)';
    Y11('0')['style']['backgroundImage'] = 'url(img/input/text_input_center_' + st + '.png)';
    Y11('search_w_r')['style']['backgroundImage'] = 'url(img/input/text_input_right_' + st + '.png)'
};

function R62()
{
    F666([], P14 + '596.dat');
    P50 = 0;
    P33 = 0;
    P47 = [];
    R12();
    F23();
    O1 = {
        "exit": '',
        "tools": '',
        "move": 'akt. Fokus',
        "enter": 'Symbolauswahl',
        "blue": 'alles speichern',
        "yellow": 'hinunter',
        "green": 'hinauf',
        "red": 'alle entfernen',
        "play": '',
        "info": '',
        "guide": '',
        "back": 'zurück'
    };
    if ((P75 && A['A25'] == 1) || P77 || P79 || Q89)
    {
        if (P77 || P75)
        {
            F20('blue:Wert eingeben,yellow:,green:')
        };
        if (P75 && P13 != 'search_history.dat')
        {
            O1['yellow'] = 'Suchhistorie'
        };
        R15(5);
        if (!P79)
        {
            Y32()
        };
        P23 = []
    }
    else
    {
        if (P75 && A['A25'] == 2)
        {
            if (P6)
            {
                F20('exit:Beenden,tools:Konfigurieren der Tastatur,move:,enter:Wert eingeben,blue:,yellow:Suchhistorie,green:')
            }
            else
            {
                Y13('help_navi_menu')
            }
        }
    };
    F19();
    if (P69 || P82)
    {
        F36()
    };
    Y69();
    Y11('allInput')['style']['top'] = '0px';
    Y13('player,infoList,ya_date,ya_help,vod_help');
    Y12('main,setapList');
    if (!P79)
    {
        Y13('channelList,barList');
        F11('keyb_window', 48, 25, 440, 290, 0)
    }
    else
    {
        F11('keyb_window', 202, 500, 440, 290, 0)
    }
};

function R63()
{
    R61 = function ()
    {
        if (P75 && A['A25'] == 2)
        {
            var rs = lrdPr(Y11('0')['value']);
            R15(0)
        }
        else
        {
            if (P77)
            {
                rs = Z2;
                Z2 = ''
            }
            else
            {
                rs = lrdPr(Y11('0')['innerText'])
            };
            Y13('keyb_window,ch_numbar')
        };
        if (!P79)
        {
            Y12('channelList,barList')
        };
        if (!rs || P79)
        {
            F16()
        }
        else
        {
            if (Q89)
            {
                var l_o = lrdPr(Y11('1')['innerText']);
                R67(rs, l_o)
            }
            else
            {
                if (P77 && A['A2'] != Number(rs))
                {
                    P55['pop']();
                    F16();
                    R9('falsche CAPTCHA !', 1)
                }
                else
                {
                    if (P75 || P77)
                    {
                        O1 = {
                            "exit": 'Beenden',
                            "tools": '',
                            "move": '',
                            "enter": '',
                            "blue": '',
                            "yellow": '',
                            "green": '',
                            "red": '',
                            "play": '',
                            "info": '',
                            "guide": '',
                            "back": 'zurück'
                        };
                        F19();
                        R15(1);
                        if (P78['indexOf']('|SearchUSB') > 0)
                        {
                            setTimeout('F64(P78+\'/\'+dI(Q46),1)', 1000)
                        }
                        else
                        {
                            setTimeout('F48()', 1000)
                        };
                        if (P75 && !P77)
                        {
                            if (P13 != 'search_history.dat' && Ach(13)['indexOf']('#no_save') < 0)
                            {
                                var ne = Ach(0);
                                Q_39[P27][0] = rs;
                                F57('search_history.dat');
                                Q_39[P27][0] = ne
                            };
                            Q46 = rs;
                            R9('<font style="color:#00ccff;font-weight:' + P16 + ';">' + tRe('Bitte warten !') + '</font>', 0, 0, 1)
                        }
                        else
                        {
                            P65 = A['A2'];
                            A['A2'] = 0;
                            R9('<font style="color:#00ccff;font-weight:' + P16 + ';">' + tRe('Code angenommen !') + '</font>', 0, 3000, 1)
                        }
                    }
                }
            }
        }
    };
    R62();
    Y13('scrol_window');
    var f_m = '';
    if (P77)
    {
        f_m += '<span id="text_form4">Bitte Passwort &nbsp;eingeben : </span>';
        f_m += '<div id="search_w_l"></div><div id="0" class="search_w_c" maxlength="4" style="width:75px"></div><div id="search_w_r"></div>';
        F11('info_window', 48, 500, 440, 100, 0);
        Z5 = 'num'
    }
    else
    {
        if (P75)
        {
            if (P13 == 'search_history.dat')
            {
                Q46 = Ach(0)
            }
            else
            {
                if (Ach(13)['indexOf']('#no_save') > 0)
                {
                    Q46 = ''
                }
            };
            if (A['A25'] == 1 || P79)
            {
                var t = 48,
                    l = 500,
                    e3 = 'id="0" maxlength="100" style="width:362px;overflow:hidden;">';
                if (!P79)
                {
                    e3 += Q46
                };
                Z5 = '';
                Z6 = O13[A['A24']];
                if (Ach(5)['indexOf']('|SearchUSB') > 0)
                {
                    Z6 = 'en'
                }
            }
            else
            {
                e3 = 'style="width:362px;padding-top:15px;"><input id="0"  maxlength="200" type="text"></input>';
                l = 480;
                t = 82;
                if (!P6)
                {
                    t = 100
                }
            };
            var e2 = 'Eingabe &nbsp;erforderlich &nbsp;Titel';
            if (Ach(13) && Ach(13)['indexOf']('search_on') < 0)
            {
                var sar = Ach(13)['replace']('#no_save', '')['split']('|');
                e2 = rI(sar[0]);
                if (sar['length'] > 1 && sar[1])
                {
                    if (sar[1] == 'en' || sar[1] == 'ru' || sar[1] == 'ua')
                    {
                        Z6 = sar[1];
                        Z5 = ''
                    }
                    else
                    {
                        if (sar[1] == 'num')
                        {
                            Z5 = 'num'
                        }
                    }
                }
            };
            F11('info_window', t, l, 440, 148, 0);
            f_m += '<span id="search_form">' + e2 + '</span><div id="search_w_l"></div><div class="search_w_c" ' + e3 + '</div><div id="search_w_r"></div>'
        }
        else
        {
            if (Q89)
            {
                Y11('version')['style']['width'] = '595px';
                Y7(Y11('version'), tRe('Neue Favoriten Kategorie'));
                f_m += '<div id="form"><span id="text_form">' + tRe('Name der neuen Kategorie') + ':</span></div>';
                f_m += '<div id="form"><div id="0" class="set_str"  maxlength="40"></div></div>';
                f_m += '<div id="form"><span id="text_form">Adresse &nbsp;Icons :</span></div>';
                f_m += '<div id="form"><div id="1" class="set_str" maxlength="250"></div></div>';
                F11('info_window', 48, 495, 440, 290, 0);
                P23 = [0];
                Z5 = '';
                Z6 = O13[A['A24']]
            }
        }
    };
    Y7(Y11('allInput'), f_m);
    if (A['A25'] == 1 || Q89 || P77 || P79)
    {
        Z8 = 2;
        Z9 = 1;
        if (Q89)
        {
            R71(0, '', 1);
            R71(1, 'open.png', 1);
            R72(0, 2);
            Z8 = 7
        };
        P21 = 0;
        P22 = P23['length'];
        Z1 = 1;
        R75();
        if (Q46 && P75 && !P79 && !P77 && !P74)
        {
            Z8 = 8;
            R78();
            Y11('blue')['innerText'] = '  Speichern';
            Y11('enter')['innerText'] = P75 ? 'Wert eingeben' : 'alles speichern';
            R76();
            Y65(1)
        }
    }
    else
    {
        R66()
    }
};

function R65()
{
    R9('diese &nbsp;Funktion &nbsp;gesperrt &nbsp;в &nbsp;<font style="color:#00ccff">light</font> &nbsp;Freisetzung &nbsp;Widget !', 0, 5000, 1)
};

function R69()
{
    var tr = [],
        p_s = 0,
        st_up = 36,
        st_dw = 36,
        s_ln = 0,
        tt = ['-12', '-11', '-10', '-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1', '0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10',
            '+11', '+12'];
    for (var i in P23)
    {
        s_ln += P23[i]
    };
    if (s_ln > 0 && !P74)
    {
        s_ln += 1116
    };
    if (P21 > P23['length'])
    {
        switch (P21)
        {
        case 4:
            tr = ['213', '187', '149', '163', '177', '198', '191', '162', '87', '77', '75', '66', '65', '64', '63', '62', '56', '55', '37', '22', '2'];
            break;
        case 5:
            tr = O14;
            break;
        case 6:
            tr = tt;
            break;
        case 7:
            tr = tt;
            break;
        case 8:
            tr = O10;
            break;
        case 9:
            for (var i = 0; i < 101; i++)
            {
                tr[i] = (i + 50) + ''
            };
            break;
        case 10:
            for (var i = 0; i < 101; i++)
            {
                tr[i] = (i + 50) + ''
            };
            st_up = 36;
            st_dw = 72;
            break;
        case 11:
            tr = ['4X3', '4X3 ZOOM 1', '4X3 ZOOM 2', '14X9', 'X-ZOOM'];
            st_up = 72;
            st_dw = 36;
            break;
        case 12:
            tr = ['16X9', '16X9 ZOOM 1', '16X9 ZOOM 2', '14X9', 'X-ZOOM'];
            break;
        case 13:
            tr = Y68(O11);
            break;
        case 14:
            tr = O16;
            break;
        case 15:
            tr = Y68(O8);
            break;
        case 16:
            tr = O12;
            break;
        case 17:
            tr = O15;
            break;
        case 18:
            tr = O17;
            break;
        case 19:
            tr = O18;
            break;
        case 20:
            tr = O18;
            break;
        case 21:
            tr = O18;
            break;
        case 22:
            tr = O18;
            break;
        case 23:
            tr = O18;
            st_dw = 36;
            break;
        case 24:
            tr = ['ru', 'ua'];
            break;
        case 25:
            tr = [1, 2];
            st_up = 36;
            st_dw = 72;
            break;
        case 26:
            tr = O18;
            st_up = 72;
            st_dw = 36;
            break;
        case 27:
            tr = O18;
            break;
        case 28:
            tr = O18;
            break;
        case 29:
            tr = O18;
            break;
        case 30:
            tr = O18;
            break;
        case 31:
            tr = ['1', '2', '3', '4', '5', '6', '7', '8'];
            break;
        case 32:
            tr = O18;
            st_up = 36;
            break;
        case 33:
            tr = O18;
            break;
        case 34:
            tr = O18;
            break;
        case 35:
            tr = O18;
            break;
        case 36:
            tr = O18;
            break
        }
    };
    var Cd = event['keyCode'];
    event['preventDefault']();
    switch (Cd)
    {
    case 101:
        R82(1);
        break;
    case 98:
        R82(2);
        break;
    case 6:
        R82(3);
        break;
    case 8:
        R82(4);
        break;
    case 9:
        R82(5);
        break;
    case 10:
        R82(6);
        break;
    case 12:
        R82(7);
        break;
    case 13:
        R82(8);
        break;
    case 14:
        R82(9);
        break;
    case 17:
        R82(0);
        break;
    case 76:
        ;
    case 261:
        ;
    case 147:
        if (P82 || !Q_39['length'])
        {
            Y40(147)
        }
        else
        {
            R14(Cd)
        };
        break;
    case 259:
        R80();
        break;
    case 650:
        if (P21 < P23['length'] + 1)
        {
            if (Z5 != 'num' && Z6 == 'en')
            {
                Z5 = 'num'
            }
            else
            {
                Z6 = Z6 == 'en' ? O13[A['A24']] : 'en';
                Z5 = ''
            };
            R77()
        };
        break;
    case 309:
        ;
    case 29443:
        if (P21 < P23['length'] + 1 && Z8 < 8 && Z9 > -1)
        {
            R81()
        }
        else
        {
            R76();
            R61()
        };
        break;
    case 108:
        if (P21 < P23['length'] + 1)
        {
            Z2 = '';
            Z3 = 0;
            Z13 = 0;
            if (Z14 == -1)
            {
                Y11(P21)['innerText'] = ''
            }
        };
        break;
    case 22:
        R76();
        R61();
        break;
    case 72:
        if (P21 < P23['length'] + 1 && Z2['length'] > Z3)
        {
            Z3++
        }
        else
        {
            if (P21 > P23['length'])
            {
                p_s = Y67(tr, Y11(P21)['innerText']);
                p_s = (p_s < tr['length'] - 1) ? p_s + 1 : 0;
                Y11(P21)['innerText'] = tr[p_s]
            }
        };
        break;
    case 69:
        if (P21 < P23['length'] + 1 && Z3 > 0)
        {
            Z3--
        }
        else
        {
            if (P21 > P23['length'])
            {
                p_s = Y67(tr, Y11(P21)['innerText']);
                p_s = p_s > 0 ? p_s - 1 : tr['length'] - 1;
                Y11(P21)['innerText'] = tr[p_s]
            }
        };
        break;
    case 4:
        if (Q65 < 22 && (P21 == 14 || P21 == 15 || P21 == 16 || P21 == 17 || P21 == 25 || P21 == 26 || P21 == 29 || P21 == 30))
        {
            return R65()
        };
        if (P21 < P23['length'] + 1)
        {
            Z8 = Z8 > 0 ? Z8 - 1 : 7;
            if (Z8 == 7 && Z14 == -1)
            {
                Y11('blue')['innerText'] = P75 ? 'Suchen' : 'alles speichern';
                Y11('enter')['innerText'] = 'Symbolauswahl';
                R75();
                if (P75)
                {
                    Y65(0)
                }
                else
                {
                    R72(P21, 2)
                }
            }
            else
            {
                R78()
            }
        }
        else
        {
            p_s = Y67(tr, Y11(P21)['innerText']);
            p_s = p_s > 0 ? p_s - 1 : tr['length'] - 1;
            Y11(P21)['innerText'] = tr[p_s]
        };
        break;
    case 5:
        if (Q65 < 22 && (P21 == 14 || P21 == 15 || P21 == 16 || P21 == 17 || P21 == 25 || P21 == 26 || P21 == 29 || P21 == 30))
        {
            return R65()
        };
        if (P21 < P23['length'] + 1)
        {
            if (Z14 != -1)
            {
                Z8 = (Z8 < 7 || P23['length'] || (P75 && !P79)) ? Z8 + 1 : 0;
                R78();
                if (Z8 == 8)
                {
                    Y11('blue')['innerText'] = '  Suchen';
                    Y11('enter')['innerText'] = P75 ? 'Wert eingeben' : 'alles speichern';
                    R76();
                    if (P75)
                    {
                        Y65(1)
                    }
                    else
                    {
                        R72(P21, 3)
                    }
                }
            }
        }
        else
        {
            p_s = Y67(tr, Y11(P21)['innerText']);
            p_s = (p_s < tr['length'] - 1) ? p_s + 1 : 0;
            Y11(P21)['innerText'] = tr[p_s]
        };
        break;
    case 29460:
        if (Z14 != -1)
        {
            Z9 = Z9 > 0 ? Z9 - 1 : 4;
            R78()
        }
        else
        {
            if (!P75)
            {
                R72(P21, 1);
                if (P21 > 0)
                {
                    P21--;
                    if (P21 == P23['length'])
                    {
                        Z8 = 8;
                        R78();
                        Y13('help_set_par');
                        Y7(Y11('2_help'), '<span id="move">akt. Fokus</span><img src="img/buttons/move.png">');
                        Y12('keyb_window,7_help,ch_numbar')
                    };
                    F41('allInput', P21 < P23['length'] ? P23[P21] : st_up)
                }
                else
                {
                    P21 = P22;
                    if (!P74)
                    {
                        Y13('keyb_window,7_help,ch_numbar');
                        Y7(Y11('2_help'), '<span>blättern</span><img id="button" src="img/buttons/ud.png">');
                        Y11('blue')['innerText'] = '  Speichern';
                        Y11('enter')['innerText'] = 'alles speichern';
                        Y12('help_set_par')
                    };
                    F41('allInput', -s_ln)
                };
                R72(P21, 3)
            }
        };
        break;
    case 20:
        ;
    case 68:
        ;
    case 1080:
        if (!P23['length'])
        {
            return
        };
        R72(P21, 1);
        R76();
        if (P21 > 0)
        {
            P21--;
            if (P21 == P23['length'])
            {
                Y13('help_set_par');
                Y7(Y11('2_help'), '<span id="move">akt. Fokus</span><img src="img/buttons/move.png">');
                Y11('blue')['innerText'] = 'alles speichern';
                Y11('enter')['innerText'] = 'Symbolauswahl';
                Y12('7_help,ch_numbar')
            };
            if (P21 < P23['length'] + 1)
            {
                R75()
            };
            F41('allInput', P21 < P23['length'] ? P23[P21] : st_up)
        }
        else
        {
            P21 = P22;
            if (!P74)
            {
                Y13('keyb_window,7_help,ch_numbar');
                Y7(Y11('2_help'), '<span>blättern</span><img id="button" src="img/buttons/ud.png">');
                Y11('blue')['innerText'] = '  Speichern';
                Y11('enter')['innerText'] = 'Speichern';
                Y12('help_set_par')
            }
            else
            {
                R75()
            };
            F41('allInput', -s_ln)
        };
        R72(P21, Z14 == -1 ? 3 : 2);
        break;
    case 29461:
        if (Z14 != -1)
        {
            Z9 = Z9 < 4 ? Z9 + 1 : 0;
            R78()
        }
        else
        {
            if (!P75)
            {
                R72(P21, 1);
                if (P21 < P22)
                {
                    P21++;
                    if (P21 == P23['length'] + 1)
                    {
                        Y13('keyb_window,7_help,ch_numbar');
                        Y7(Y11('2_help'), '<span>blättern</span><img id="button" src="img/buttons/ud.png">');
                        Y11('blue')['innerText'] = '  Ändern';
                        Y11('enter')['innerText'] = 'Speichern';
                        Y12('help_set_par')
                    };
                    F41('allInput', (P21 < P23['length'] + 1) ? -P23[P21 - 1] : -st_dw)
                }
                else
                {
                    P21 = 0;
                    Z8 = 8;
                    R78();
                    if (!P74)
                    {
                        Y13('help_set_par');
                        Y7(Y11('2_help'), '<span id="move">akt. Fokus</span><img src="img/buttons/move.png">');
                        Y12('keyb_window,7_help,ch_numbar')
                    };
                    F41('allInput', s_ln)
                };
                R72(P21, 3)
            }
        };
        break;
    case 21:
        if (P75)
        {
            return F61()
        };
    case 65:
        ;
    case 1078:
        if (!P23['length'])
        {
            return
        };
        R72(P21, 1);
        R76();
        if (P21 < P22)
        {
            P21++;
            if (P21 == P23['length'] + 1)
            {
                Y13('keyb_window,7_help,ch_numbar');
                Y7(Y11('2_help'), '<span>blättern</span><img id="button" src="img/buttons/ud.png">');
                Y11('blue')['innerText'] = ' Ändern';
                Y11('enter')['innerText'] = 'Speichern';
                Y12('help_set_par')
            };
            if (P21 < P23['length'] + 1)
            {
                F41('allInput', -P23[P21 - 1]);
                R75()
            }
            else
            {
                F41('allInput', -st_dw)
            };
            R72(P21, Z14 == -1 ? 3 : 2)
        }
        else
        {
            P21 = 0;
            R72(P21, 2);
            if (!P74)
            {
                Y13('help_set_par');
                Y7(Y11('2_help'), '<span id="move">akt. Fokus</span><img src="img/buttons/move.png">');
                Y12('keyb_window,7_help,ch_numbar')
            };
            F41('allInput', s_ln);
            R75()
        };
        break;
    case 612:
        ;
    case 222:
        ;
    case 75:
        ;
    case 88:
        ;
    case 45:
        if (P82 || !Q_39['length'])
        {
            Y40()
        }
        else
        {
            F16()
        };
        break;
    case 70:
        if (P21 == '0' && A['A0'] != P13 && !P75)
        {
            if (!Z40)
            {
                return
            };
            Z2 = P13;
            Z3 = Z2['length'];
            Z4 = 0;
            if (Z14 == -1)
            {
                Y11(P21)['innerText'] = Z2
            }
        };
        break;
    case 71:
        if (Z14 != -1)
        {
            Y33(' ')
        };
        break;
    case 74:
        if (Z14 != -1)
        {
            Y34()
        };
        break;
    default:
        alert('Unhandled key');
        break
    }
};

function R_77(err)
{
    R62();
    R15(5);
    Y32();
    if (!err)
    {
        if (P_1 == P1)
        {
            var err = '<center>' + 'Original MAC: ' + P1 + ' &nbsp;&nbsp; TV : ' + P3 + '</center>'
        }
        else
        {
            if (!A.A35)
            {
                var err = '<center>' + ' geänderte MAC: ' + P1 + ' &nbsp;&nbsp; TV : ' + P3 + '</center>'
            }
            else
            {
                var err = '<center>' + ' generierte MAC: ' + P1 + ' &nbsp;&nbsp; TV : ' + P3 + '</center>'
            }
        }
    };
    if (Q61 || P3['length'] > 10)
    {
        Y11('version')['style']['width'] = '595px'
    };
    Y7(Y11('version'), err);
    var ss = '17';
    if (P7)
    {
        ss = '16'
    };
    var style = '</div></span><div id="form"><span id="text_form" style="color:#00ccff;font-size:' + ss + 'px;">',
        st = 0;
    if (!Z40 || P13['length'] > 256)
    {
        h = '</div></span><div id="form"><span id="text_form" style="color:#00ccff;font-size:20px;">' + tRe('Adresse zur Ansicht nicht verfügbar', 1)
    }
    else
    {
        if (P13['length'] < 256)
        {
            var h = '',
                dar = R94(P13),
                st = dar['length'];
            for (var i in dar)
            {
                h += style + dar[i]
            }
        }
    };
    var f_m = '<div id="form"><span id="text_form">Akt. URL &nbsp;Adresse &nbsp;Stream &nbsp;Playlist : ' + h +
        '</span></div><div id="form"><span id="text_form">URL &nbsp;Adresse &nbsp;für der Start&nbsp;Playlist : </span></div><div id="form"><div id="0" class="set_str" maxlength="255"></div></div>';
    P23 = [36, 36, 36];
    if (P13 != A['A0'] && Z40)
    {
        P23[0] = 72;
        f_m +=
            '<div id="form"><img style="float:left;" src="img/buttons/stop.png"><span id="text_form0" style="width:370px;">- akt. URL als Start-Playliste eintragen</span></div>'
    };
	
	//--- Einstellmenue --- 
    f_m +=
        '<div id="form"><span id="text_form3">IP &nbsp;Proxy ( IP : Port ) :</span><div id="1" class="set_str" maxlength="22"></div></div><div id="form"><span id="text_form0">Zugangs&nbsp;Code&nbsp;für&nbsp;"XXX" ( 1 - 9999 ) : </span><div id="2" class="set_str" maxlength="4"></div></div><div id="form"><span id="text_form3"> Gewünschte &nbsp;MAC-Adresse :</span><div id="3" class="set_str" maxlength="12"></div></div><div id="form"><span id="text_form1">Yandix &nbsp;Regionscode &nbsp;<font color="#00ccff">m.tv.yandex</font></span><img src="img/buttons/lr.png"><div id="4" class="set_str"></div></div><div id="form"><span id="text_form2">Zeit &nbsp;in der &nbsp;Anwendung :</span><img src="img/buttons/lr.png"><div id="5" class="set_str"></div></div><div id="form"><span id="text_form1">Zeitverschiebungszone&nbsp;"Auto" ( +/-12 h ) :</span><img src="img/buttons/lr.png"><div id="6" class="set_str"></div></div><div id="form"><span id="text_form1">Zeitverschiebung &nbsp;in &nbsp;Anwendung ( +/-12 h ) :</span><img src="img/buttons/lr.png"><div id="7" class="set_str"></div></div><div id="form"><span id="text_form2">Start &nbsp;Puffergröße&nbsp;Video :</span><img src="img/buttons/lr.png"><div id="8" class="set_str"></div></div><div id="form"><span id="text_form1">Breite &nbsp;bis &nbsp;"X-ZOOM" ( 50 - 150 % ) :</span><img src="img/buttons/lr.png"><div id="9" class="set_str"></div></div><div id="form"><span id="text_form1">Höhe &nbsp;bis &nbsp;"X-ZOOM" ( 50 - 150 % ) :</span><img src="img/buttons/lr.png"><div id="10" class="set_str"></div></div><div id="form"><span id="text_form">Einstellung &nbsp;Parameter &nbsp;bis &nbsp;"AUTO-ZOOM" </span></div><div id="form"><span id="text_form2">wenn &nbsp;w/h < 1.35 , dann :</span><img src="img/buttons/lr.png"><div id="11" class="set_str"></div></div><div id="form"><span id="text_form2">wenn &nbsp;1.34 < w/h < 1.79 , dann :</span><img src="img/buttons/lr.png"><div id="12" class="set_str"></div></div><div id="form"><span id="text_form2">wenn &nbsp;w/h > 1.78 , dann :</span><img src="img/buttons/lr.png"><div id="13" class="set_str"></div></div><div id="form"><span id="text_form2">Gesamt &nbsp;Größe &nbsp;Puffer :</span><img src="img/buttons/lr.png"><div id="14" class="set_str"></div></div><div id="form"><span id="text_form2">Standard &nbsp;Audio. &nbsp;Spur :</span><img src="img/buttons/lr.png"><div id="15" class="set_str"></div></div><div id="form"><span id="text_form1">Beschränkung &nbsp;max. &nbsp;Qualität &nbsp;Video :</span><img src="img/buttons/lr.png"><div id="16" class="set_str"></div></div><div id="form"><span id="text_form2">Abspiel&nbsp;Modus :</span><img src="img/buttons/lr.png"><div id="17" class="set_str"></div></div><div id="form"><span id="text_form2">Format &nbsp;icons :</span><img src="img/buttons/lr.png"><div id="18" class="set_str"></div></div><div id="form"><span id="text_form1">Laden &nbsp;äußere &nbsp;icons :</span><img src="img/buttons/lr.png"><div id="19" class="set_str"></div></div><div id="form"><span id="text_form1">erhöhte &nbsp;Transparenz &nbsp;Einzelheiten :</span><img src="img/buttons/lr.png"><div id="20" class="set_str"></div></div><div id="form"><span id="text_form1">Hintergrund &nbsp;ausgewählt &nbsp;in &nbsp;Liste :</span><img src="img/buttons/lr.png"><div id="21" class="set_str"></div></div><div id="form"><span id="text_form1">Statuszeilge&nbsp;beim Abspielen &nbsp;einblenden :</span><img src="img/buttons/lr.png"><div id="22" class="set_str"></div></div><div id="form"><span id="text_form1">Ausgang &nbsp;Stunden &nbsp;an &nbsp;Bildschirm &nbsp;с &nbsp;Video :</span><img src="img/buttons/lr.png"><div id="23" class="set_str"></div></div><div id="form"><span id="text_form1">Primär &nbsp;Sprache &nbsp;Tastatur &nbsp;1 - Art :</span><img src="img/buttons/lr.png"><div id="24" class="set_str"></div></div><div id="form"><span id="text_form1">Typ &nbsp;Tastatur &nbsp;bis &nbsp;Benutzer :</span><img src="img/buttons/lr.png"><div id="25" class="set_str"></div></div><div id="form"><span id="text_form">Erhaltung &nbsp;äußere &nbsp;Start &nbsp;Playliste </span></div><div id="form"><span id="text_form1">bis &nbsp;Bearbeitung &nbsp;Parameter :</span><img src="img/buttons/lr.png"><div id="26" class="set_str"></div></div><div id="form"><span id="text_form1">Merken &nbsp;nächster &nbsp;Playliste :</span><img src="img/buttons/lr.png"><div id="27" class="set_str"></div></div><div id="form"><span id="text_form1">Autoplay- &nbsp;letzter &nbsp;Kanal :</span><img src="img/buttons/lr.png"><div id="28" class="set_str"></div></div><div id="form"><span id="text_form1">Aktivierung &nbsp;Autoplay- &nbsp;Widget :</span><img src="img/buttons/lr.png"><div id="29" class="set_str"></div></div><div id="form"><span id="text_form1">Auto &nbsp;Alternativen. &nbsp;Quelle :</span><img src="img/buttons/lr.png"><div id="30" class="set_str"></div></div><div id="form"><span id="text_form1">Skin &nbsp;Auswahl :</span><img src="img/buttons/lr.png"><div id="31" class="set_str"></div></div><div id="form"><span id="text_form1">Rücksetzen &nbsp;Einstellungen &nbsp;auf &nbsp;Standard :</span><img src="img/buttons/lr.png"><div id="32" class="set_str"></div></div><div id="form"><span id="text_form1">optional  &nbsp; Zugang:</span><img src="img/buttons/lr.png"><div id="33" class="set_str"></div></div><div id="form"><span id="text_form1">Laden &nbsp; Datenbanken &nbsp; Kanäle &nbsp;с yandex:</span><img src="img/buttons/lr.png"><div id="34" class="set_str"></div></div><div id="form"><span id="text_form1">ermöglichen&nbsp; Generation &nbsp; MAC  &nbsp;Adresse :</span><img src="img/buttons/lr.png"><div id="35" class="set_str"></div></div><div id="form"><span id="text_form1">Hilfe&nbsp; EPG &nbsp;(nicht C,D,E) :</span><img src="img/buttons/lr.png"><div id="36" class="set_str"></div></div>';
    
	for (var i = 0; i < 9 - st; i++)
    {
        f_m += '<div id="form"></div>'
    };
    Y7(Y11('allInput'), f_m);
    LoadTimer('F39()', 500);
    R71(0, A.A0, 1);
    R71(1, A.A1, 2);
    if (P65)
    {
        A['A2'] = P65;
        P65 = 0
    };
    R71(2, A['A2'] > 0 ? (A['A2'] + '')['replace'](/[0-9]/g, '*') : '');
    R71(3, P1, 3);
    R71(4, A.A4);
    R71(5, O14[A['A5']], 3);
    R71(6, (A['A6'] > 0 ? '+' + A['A6'] : A['A6']));
    R71(7, (A['A7'] > 0 ? '+' + A['A7'] : A['A7']));
    R71(8, O10[A['A8']], 3);
    R71(9, A.A10);
    R71(10, A.A9);
    R71(11, O10[A['A11']], 3);
    R71(12, O10[A['A12']], 3);
    R71(13, O11[A['A13']], 3);
    R71(14, O16[A['A14']], 3);
    R71(15, O8[A['A15']], 3);
    R71(16, O12[A['A16']]);
    R71(17, O15[A['A17']], 3);
    R71(18, O17[A['A18']], 3);
    R71(19, O18[A['A19']]);
    R71(20, O18[A['A20']]);
    R71(21, O18[A['A21']]);
    R71(22, O18[A['A22']]);
    R71(23, O18[A['A23']]);
    R71(24, O13[A['A24']]);
    R71(25, A.A25);
    R71(26, O18[A['A26']]);
    R71(27, O18[A['A27']]);
    R71(28, O18[A['A28']]);
    R71(29, O18[A['A29']]);
    R71(30, O18[A['A30']]);
    R71(31, A.A31);
    R71(32, O18[0]);
    R71(33, O18[A['A33']]);
    R71(34, O18[A['A34']]);
    R71(35, O18[A['A35']]);
    R71(36, O18[A['A36']]);
    P21 = 0;
    P22 = 36;
    R72(0, 2);
    Z8 = 7;
    Z9 = 2;
    Z1 = 1;
    Z5 = '';
    Z6 = 'en';
    R75();
    R61 = function ()
    {
        var r_t = Y67(O18, Y11('32')['innerText']);
        if (r_t)
        {
            var ar = [],
                ul = '',
                c_y = '';
            Y39(P14 + 'ver.dat', '');
            F666([], A['A4'] + '_ya_name_index_url.dat');
            F55(ar, 'favcat.dat');
            if (ar['length'] == 3 && Q28['length'] > 3 && ar[2]['indexOf']('HIGHLIGHTS') >= 0)
            {
                F666(Q28, 'favcat.dat')
            };
            F666([], P14 + '596.dat');
            A['A6'] = -new Date()['getTimezoneOffset']() / 60;
            if (A['A29'])
            {
                Y36()
            };
            ar = ['start.xml', '', A['A2'], P_1, 213, 0, A['A6'], 0, 6, 100, 100, 2, 0, 0, 5, 7501171, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
                0, 0, 1];
            P82 = 1
        }
        else
        {
            ul = lrdPr(Y11('0')['innerText']);
            var a_y = lrdPr(Y11('1')['innerText']),
                b_y = dPr(Y11('2')['innerText'], 1),
                c_y = lrdPr(Y11('3')['innerText'], 1),
                d_y = dPr(Y11('4')['innerText'], 1),
                e_y = Y67(O14, Y11('5')['innerText']),
                b_y = (!b_y || b_y < 0 || b_y > 9999) ? 0 : b_y;
            b_y = A['A2'] > 0 ? (b_y == A['A2'] ? 0 : A['A2']) : b_y;
            /* if (!d_y || !Number(d_y)) {
            d_y = 999 }; */
            var f_y = (Y11('6')['innerText'])['replace']('+', ''),
                g_y = (Y11('7')['innerText'])['replace']('+', ''),
                es = Y67(O10, Y11('8')['innerText']);
            var pw = Y11('9')['innerText'],
                ph = Y11('10')['innerText'],
                a_a = Y67(O10, Y11('11')['innerText']),
                a_b = Y67(O10, Y11('12')['innerText']),
                a_c = Y67(O11, Y11('13')['innerText']),
                b_r = Y67(O16, Y11('14')['innerText']),
                a_g = Y67(O8, Y11('15')['innerText']),
                v_ty = Y67(O12, Y11('16')['innerText']),
                p_de = Y67(O15, Y11('17')['innerText']),
                f_a = Y67(O17, Y11('18')['innerText']),
                i_l = Y67(O18, Y11('19')['innerText']),
                a_s = Y67(O18, Y11('20')['innerText']),
                b_t = Y67(O18, Y11('21')['innerText']),
                p_y = Y67(O18, Y11('22')['innerText']),
                t_m = Y67(O18, Y11('23')['innerText']),
                k_g = Y67(O13, Y11('24')['innerText']),
                k_e = Y11('25')['innerText'],
                rd_t = Y67(O18, Y11('26')['innerText']),
                z_y = Y67(O18, Y11('27')['innerText']),
                x_y = Y67(O18, Y11('28')['innerText']),
                w_y = Y67(O18, Y11('29')['innerText']),
                i_g = Y67(O18, Y11('30')['innerText']),
                l_g = Y67(O13, Y11('31')['innerText']),
                h_s = dPr(Y11('31')['innerText'], 1),
                h_k = Y67(O18, Y11('33')['innerText']),
                h_y = Y67(O18, Y11('34')['innerText']),
                h_g = Y67(O18, Y11('35')['innerText']);
            h_e = Y67(O18, Y11('36')['innerText']);
            /* if (ul != A['A0'] && !rd_t) {
            A['A31'] = (ul == P13) ? P17 : ''
            }; */
            if (x_y)
            {
                z_y = 1
            };
            if (!z_y)
            {
                x_y = 0
            };
            if (Q65 < 22)
            {
                b_r = 5;
                a_g = 7501171;
                v_ty = 1;
                p_de = 0;
                k_e = 1;
                rd_t = 0;
                w_y = 0;
                i_g = 0
            };
            if (A['A29'] != w_y)
            {
                Y37()
            };
            if (A['A26'] != rd_t && rd_t)
            {
                F3()
            };
            ar = [ul, a_y, b_y, c_y, d_y, e_y, f_y, g_y, es, ph, pw, a_a, a_b, a_c, b_r, a_g, v_ty, p_de, f_a, i_l, a_s, b_t, p_y, t_m, k_g, k_e, rd_t, z_y,
                x_y, w_y, i_g, h_s, l_g, h_k, h_y, h_g, h_e]
        };
        F666([F_2(ar)], 'set.dat');
        if (!P82 && Q_39['length'] && ul == A['A0'] && d_y == A['A4'])
        {
            F75();
            F16()
        }
        else
        {
            if ((ul != A['A0'] && A['A0'] != 'start.xml' && P64 || P82) && !/(fav.dat)$/ ['test'](P64))
            {
                F666([], P64);
                if (P64 != 'start.xml' && r_t)
                {
                    F666([], 'start.xml')
                }
            };
            if (P82 || ul != A['A0'] || d_y != A['A4'])
            {
                location['reload'](true)
            }
        }
    }
};

function Y67(o, s)
{
    for (var key in o)
    {
        if (o[key] == s)
        {
            return Number(key)
        }
    };
    return ''
};

function Y68(o)
{
    var tr = [];
    for (var key in o)
    {
        tr['push'](o[key])
    };
    return tr
};

function R71(id, s, style)
{
    Y11(id)['innerText'] = s + '';
    if (style == 3)
    {
        Y11(id)['style']['width'] = '135px'
    }
    else
    {
        if (style)
        {
            F37(id, style == 1 ? 'width="415px",textAlign="left",overflow="hidden"' : 'width="190px",textAlign="left"')
        }
    };
    Y11(id)['style']['borderRadius'] = '5px 5px'
};

function R72(id, tp)
{
    switch (tp)
    {
    case 1:
        var cl1 = '#444444',
            cl2 = '#999999',
            cl3 = '#eeeeee';
        break;
    case 2:
        cl1 = '#000000';
        cl2 = '#eeeeee';
        cl3 = '#999999';
        break;
    case 3:
        cl1 = '#0044ff';
        cl2 = '#eeeeff';
        cl3 = '#0066ff';
        break
    };
    F37(id, 'color="' + cl1 + '",backgroundColor="' + cl2 + '",borderColor="' + cl3 + '"')
};
R74 = function (func, ti)
{
    clearTimeout(Z14);
    Z14 = setTimeout(func, ti)
};

function R75()
{
    if (Z8 == 8)
    {
        Z8 = 7
    };
    if (Z9 == -1)
    {
        Z9 = 0
    };
    Z7 = Z9 + '' + Z8 + '_key';
    R77();
    Z2 = Y11(P21)['innerText'];
    Z3 = Z2['length'];
    Z4 = Z3 - 1;
    Z13 = 0;
    R79(0)
};

function R76()
{
    if (Z14 != -1)
    {
        clearTimeout(Z14);
        Z14 = -1;
        if (!P77)
        {
            Y11(P21)['innerText'] = Z2
        }
    }
};

function R77()
{
    var s = O7[Z5 == 'num' ? Z5 : Z6],
        f_m = '',
        st_str = 0;
    for (var y = 0; y < 5; y++)
    {
        for (var x = 0; y < 4 && x < 8 || x < 2; x++)
        {
            var str_k = (st_str < s['length']) ? s['charAt'](st_str) : '',
                cl = 'key_uc';
            if (Z1 && ((Z6 == 'en' && st_str < 26) || (Z6 == O13[A['A24']] && st_str < 33)))
            {
                cl = 'key_lc';
                str_k = str_k['toLowerCase']()
            };
            if (x == 1 && y == 4 && Z5 != 'num')
            {
                f_m += '<div id="41_key" class="key_lc">' + (Z6 == O13[A['A24']] ? 'en' : O13[A['A24']]) + '</div>'
            }
            else
            {
                f_m += '<div id="' + y + x + '_key" class="' + cl + '">' + str_k + '</div>'
            };
            st_str++
        }
    };
    var cl1 = (Z5 != 'num') ? 'key_uc' : 'key_lc';
    f_m += '<div id="42_key" class=' + cl1 + '>' + (Z5 != 'num' ? '123' : Z6 == O13[A['A24']] ? 'ABC' : 'abc') +
        '</div><div id="43_key" class="key_uc"><img src="img/keyb/space.png"></div><div id="44_key" class="key_mc"><img src="img/keyb/' + (Z1 ? 'shift_up.png' :
            'shift_dw.png') +
        '"></div><div id="45_key" class="key_mc"><img src="img/keyb/rw.png"></div><div id="46_key" class="key_mc"><img src="img/keyb/ff.png"></div><div id="47_key" class="key_mc"><img src="img/keyb/del.png"></div>';
    Y7(Y11('keyb_window_c_win'), f_m);
    Y11(Z7)['style']['backgroundImage'] = 'url(img/keyb/qwe_btn2_h.png)';
    Y12('keyb_window')
};

function R78()
{
    Y11(Z7)['style']['backgroundImage'] = 'url(img/keyb/qwe_btn2_n.png)';
    if (Z8 > -1 && Z9 > -1 && Z8 < 8 && Z9 < 5)
    {
        Z7 = Z9 + '' + Z8 + '_key';
        Y11(Z7)['style']['backgroundImage'] = 'url(img/keyb/qwe_btn2_h.png)'
    }
};

function R79(cu)
{
    if (P77)
    {
        if (A['A2'] == Z2)
        {
            R76();
            return R61()
        }
    };
    if (Z3 != Z4)
    {
        Z4 = Z3;
        if (P77 || (P21 == 2 && !P74))
        {
            Z2 = Z2['replace'](/\D/g, '')
        };
        if (P79)
        {
            F87(Z2)
        };
        var i = 0,
            ss = Z2['substr'](0, Z3),
            se = '';
        if (P77)
        {
            ss = ss['replace'](/[0-9]/g, '*')
        };
        if (!Z13)
        {
            Z11 = dPr(Y11(P21)['getAttributeNode']('maxlength')['nodeValue'], 1);
            if (!Z11)
            {
                Z11 = 255
            }
            else
            {
                Z11 = Number(Z11)
            };
            Z10 = Y11(P21)['clientWidth'];
            Y12(P21 + '');
            Z12 = document['defaultView']['getComputedStyle'](Y11(P21), null)['getPropertyValue']('font-size');
            Y7(Y11('width_str'), '');
            Y11('width_str')['style']['fontSize'] = Z12;
            Y11('width_str')['innerText'] = Z2;
            Y12('width_str');
            var ws = Y11('width_str')['clientWidth'];
            Y13('width_str');
            Z13 = (ws == Z10) ? Z2['length'] - 1 : (ws < Z10) ? Z2['length'] : Math['round'](Z2['length'] * Z10 / ws) - 1;
            Y7(Y11(P21), '<div id="str_start"></div><div id="cursor"></div><div id="str_end"></div>');
            Y11('cursor')['style']['height'] = Z12;
            Z12 = parseInt(Z12)
        };
        Y11('cursor')['style']['marginLeft'] = (ss['charAt'](ss['length'] - 1) == ' ') ? '4px' : '0px';
        if (!Z12)
        {
            Z12 = 18
        };
        var ls = Z12 + Math['floor'](Z12 / 2.2);
        while (i < Z11 + 1 && i < 256)
        {
            i++;
            var c_sg = '';
            if (ss['length'] > Z13)
            {
                c_sg = ss['substr'](ss['length'] - Z13)
            }
            else
            {
                se = Z2['substring'](Z3, Z13);
                if (P77)
                {
                    se = se['replace'](/[0-9]/g, '*')
                };
                c_sg = ss + se
            };
            Y11('width_str')['style']['fontSize'] = Z12 + 'px';
            Y11('width_str')['innerText'] = c_sg['replace'](/  /g, ' .');
            Y12('width_str');
            var w = Number(Y11('width_str')['clientWidth']);
            Y13('width_str');
            var fw = Math['round'](Z12 / 2);
            if (Z10 / fw > Z11 - 1)
            {
                ls = -fw
            };
            if (w > Z10 - ls && Z13 > 0)
            {
                Z13 = (w - Z10 + ls > fw * 2 - 1) ? Z13 - Math['floor']((w - Z10 + ls) / fw) : Z13 - 1
            }
            else
            {
                if (w < Z10 - fw * 2 - ls && Z13 < Z11 && (Z13 < ss['length'] || (se && Z2['length'] > Z13)))
                {
                    Z13 = (Z10 - w - fw * 4 - ls > -1) ? Z13 + Math['floor']((Z10 - w - fw * 2 - ls) / fw) : Z13 + 1
                }
                else
                {
                    break
                }
            }
        };
        if (ss['length'] == Z13)
        {
            se = Z2['charAt'](Z3)
        };
        if (ss['length'] > Z13)
        {
            Y11('str_start')['innerText'] = ss['substr'](ss['length'] - Z13)['replace'](/  /g, ' .');
            Y11('str_end')['innerText'] = Z2['charAt'](Z3)['replace'](/ /, '.')
        }
        else
        {
            Y11('str_start')['innerText'] = ss['replace'](/  /g, ' .');
            Y11('str_end')['innerText'] = se['replace'](/  /g, ' .')
        }
    };
    if (cu == 0)
    {
        Y11('cursor')['style']['backgroundImage'] = 'url(img/keyb/cursor.png)';
        R74('R79(1);', 350)
    }
    else
    {
        Y11('cursor')['style']['backgroundImage'] = 'url(img/keyb/cursor_n.png)';
        R74('R79(0);', 350)
    }
};

function R80()
{
    if (P21 < P23['length'] + 1)
    {
        if (Z14 == -1)
        {
            Z2 = Y11(P21)['innerText'];
            Z2 = Z2['substr'](0, Z2['length'] - 1);
            if (P77)
            {
                Z2 = Z2['replace'](/\D/g, '')
            };
            Y11(P21)['innerText'] = (P77) ? Z2['replace'](/[0-9]/g, '*') : Z2
        }
        else
        {
            if (Z3 > 0)
            {
                Z2 = Z2['substr'](0, Z3 - 1) + Z2['substr'](Z3);
                Z3--
            }
        }
    }
};

function Y34()
{
    Z1 = Z1 ? 0 : 1;
    Z5 = '';
    R77()
};

function R81()
{
    var s = '';
    if (Z9 == 4)
    {
        if (Z8 == 1 && Z5 != 'num')
        {
            Z6 = Z6 == O13[A['A24']] ? 'en' : O13[A['A24']];
            return R77()
        };
        if (Z8 == 2)
        {
            Z5 = Z5 != 'num' ? 'num' : '';
            return R77()
        };
        if (Z8 == 4)
        {
            return Y34()
        };
        if (Z8 == 5)
        {
            if (Z3 > 0)
            {
                Z3--
            };
            return
        };
        if (Z8 == 6)
        {
            if (Z2['length'] > Z3)
            {
                Z3++
            };
            return
        };
        if (Z8 == 7)
        {
            return R80()
        };
        if (Z8 == 3)
        {
            s = ' '
        }
    };
    if (Z9 < 4 || (Z8 < 2 && Z9 == 4))
    {
        s = Y11(Z7)['innerText']
    };
    Y33(s)
};

function Y33(s)
{
    if (Z2['length'] >= Z11)
    {
        Z2 = '';
        Z3 = 0;
        Z13 = 0;
        Y11('str_start')['innerText'] = s
    }
    else
    {
        Z2 = Z2['substr'](0, Z3) + s + Z2['substr'](Z3);
        Z3++
    }
};

function R82(s)
{
    if (P21 <= P23['length'])
    {
        Z11 = Y11(P21)['getAttributeNode']('maxlength')['nodeValue'];
        if (Z14 == -1)
        {
            Z2 = Y11(P21)['innerText'];
            if (P21 == 2 && !P74)
            {
                Z2 = Z2['replace'](/\D/g, '')
            };
            if (Z2['length'] >= Z11)
            {
                Z2 = ''
            };
            Z2 += s;
            Y11(P21)['innerText'] = P77 ? Z2['replace'](/[0-9]/g, '*') : Z2
        }
        else
        {
            if (P21 < P23['length'] + 1 && Z2['length'] <= Z11)
            {
                Z2 = (Z2['substr'](0, Z3) + s + Z2['substr'](Z3));
                Z3++
            }
        }
    }
};

function Y13(x)
{
    x = x['split'](',');
    for (var i in x)
    {
        Y11(x[i])['style']['display'] = 'none'
    }
};

function Ach(x)
{
    try
    {
        return Q_39[P27][x]
    }
    catch (e)
    {
        return ''
    }
};

function dTg(s)
{
    return typeof s == 'string' ? s['replace'](/<[^>]+>/g, '') : ''
};

function dHt(s)
{
    return typeof s == 'string' ? s['replace'](/&amp;/g, '&')['replace'](/&nbsp;/g, ' ')['replace'](/&quot;/g, '"')['replace'](/&lt;/g, '<')['replace'](/&gt;/g,
        '>') : ''
};

function dSp(s)
{
    try
    {
        return typeof s == 'string' ? s['replace'](/[\n\r\t\v\f\0]/gm, '') : s
    }
    catch (e)
    {
        return s
    }
};

function b64_to_utf8(str)
{
    return decodeURIComponent(escape(window.atob(str)));
}

function lrdPr(s)
{
    return typeof s == 'string' ? dSp(s)['replace'](/^\s*|\s*$/gm, '') : ''
};

function dPr(s, m)
{
    var rs = (typeof s == 'string') ? dSp(s)['replace'](/\s/gm, '') : '';
    return (!rs || (m == 1 && isNaN(rs))) ? '' : rs
};

function rI(s)
{
    return typeof s == 'string' ? s['replace'](/\\#\//g, '|')['replace'](/\\#\#\//g, '\#/') : ''
};

function dScr(s)
{
    return typeof s == 'string' ? s['replace'](/<\s?script(.)*(script)\s?>/gm, '') : ''
};

function tRe(s)
{
    return typeof s == 'string' ? ' ' + s['replace'](/ /g, ' &nbsp;') + ' ' : ''
};

function dFr(s)
{
    return typeof s == 'string' ? s['replace'](/<\s?iframe(.*?)?>(<\s?\/\s?(iframe)\s?>)?/gm, '') : ''
};

function dBImg(s, r)
{
    return typeof s == 'string' ? s['replace'](/<\s?img[^>]*:\/\/([^>](?!(\.(png|jpg|jpeg|gif|bmp|ico)("|'|\s|>|\?|\&))))+>/gmi, r) : ''
};

function dImg(s)
{
    return typeof s == 'string' ? s['replace'](/<\s?img[^>]*:\/\/[^>]*>/gm, '') : ''
};

function R84(arr, l)
{
    if (!l)
    {
        l = arr['length']
    };
    for (var i = 0; i < l; i++)
    {
        arr[i] = !arr[i] ? '' : rI(arr[i])
    };
    return arr
};

function R86(y_i)
{
    if (P41 > 4)
    {
        P41 = 0
    };
    if (Math['abs'](P38) == 7)
    {
        P38 = 0
    };
    var f_ar = ['', '&flag=5', '&flag=4', '&flag=3', '&flag=7'],
        f_g = f_ar[P41],
        ul = '',
        c_e = '',
        ix = P27;
    if (P68)
    {
        if (y_i['indexOf']('/m.tv.yandex.') > 0 && y_i['indexOf']('/program/') > 0)
        {
            ul = y_i
        }
        else
        {
            R87()
        }
    }
    else
    {
        if (y_i['indexOf']('/m.tv.yandex.') > 0 && y_i['indexOf']('channel=') > 0)
        {
            y_i = y_i['substr'](y_i['indexOf']('http:'));
            y_i = y_i['substr'](22);
            var s = (y_i['indexOf']('/?') > -1) ? y_i['indexOf']('/?') : y_i['indexOf']('?'),
                c_e = y_i['substr'](0, s);
            y_i = y_i['substr'](y_i['indexOf']('channel='));
            s = (y_i['indexOf']('&') > -1) ? y_i['indexOf']('&') : y_i['length'];
            y_i = y_i['substring'](8, s)
        }
        else
        {
            if (y_i['indexOf']('tv.yandex.') > 0 && y_i['indexOf']('/channels/') > 0)
            {
                y_i = y_i['substr'](y_i['indexOf']('tv.yandex.'));
                y_i = y_i['substr'](13);
                c_e = y_i['substr'](0, y_i['indexOf']('/'));
                y_i = y_i['substr'](y_i['indexOf']('/channels/'));
                y_i = y_i['substring'](10, y_i['length'])
            }
            else
            {
                if (y_i['indexOf']('epg_url:') == 0)
                {
                    var ar = y_i['split']('|');
                    if (ar['length'] == 3)
                    {
                        ul = ar[0];
                        c_e = ar[1];
                        y_i = ar[2]
                    }
                }
                else
                {
                    c_e = Ach(11) ? Ach(11) : A['A4']
                }
            }
        };
        c_e = dPr(c_e + '', 1);
        y_i = dPr(y_i, 1);
        if (!y_i || !c_e)
        {
            return R87()
        };
        if (P33 && !f_g)
        {
            var t = Y44();
            for (var i = 0; i < P46['length']; i++)
            {
                if (!P33 || f_g || ix != P27)
                {
                    return
                };
                if (P46[i][0] == y_i && P46[i][1] == t && P46[i][5] == c_e)
                {
                    CL(' epg_hash');
                    return R89(y_i, f_g, P46[i][2], P46[i][3], P46[i][4], P46[i][5], P46[i][6], ix)
                }
            }
        }
    };
    R88(ul, c_e, y_i, f_g, ix)
};

function R87(c_e, y_i, e)
{
    try
    {
        if (!e)
        {
            e = '<span> &nbsp;nichts &nbsp;wichtiges &nbsp;gefunden !<span>'
        };
        var lt = '',
            st = P9['status'];
        F33();
        if (c_e && y_i)
        {
            lt = 'pегион - <font color=\'#00ccff\'>' + c_e + '</font> , Zeiger index- <font color=\'#00ccff\'>' + y_i + '</font>'
        };
        if (P49[P41])
        {
            lt += '<font style="color:#ff3300;padding-left:15px;font-size:17px;">' + P49[P41] + '</font>'
        };
        F35(e, lt);
        if (st !== undefined)
        {
            Q94++;
            if (st == 0 || st > 404)
            {
                Q99++
            };
            if (Q78 && (Q99 > 1 || Q94 > 11))
            {
                Q78 = 0
            };
            if (!Q71 && (Q85 || st == 0 || st > 404))
            {
                if (!Q85 || Q94 > 5)
                {
                    Q71 = 1
                };
                if (((!P6 && !P7) || P8) && (st == 0 || st == 1002 || st == 1015))
                {
                    P32 = 0;
                    Y11('black_line_top')['innerHTML'] = '<iframe sandbox name="ya_fr" src="http://m.pogoda.yandex.' + 'ru' +
                        '" width="0" height="0"></iframe>';
                    setTimeout('P32=1;Y7(Y11(\'black_line_top\'),\'\')', 30000)
                };
                if (Q65 == 22)
                {
                    R97('' + P1 + '&hard=' + P3, 'str=' + encodeURIComponent((!c_e ? '' : c_e) + '|' + (!y_i ? '' : y_i) + '|' + 'ru' + '|status:' + st +
                        '|ya_day:' + Y44()), true)
                }
            }
        }
    }
    catch (e)
    {
        F35(e, lt)
    }
};
k = 0

function R88(ul, c_e, y_i, f_g, ix)
{
    try
    {
        var a = '',
            y_d = Y44(),
            p_ar = [];
        var dar = [_l[10], _l[9]];
        i = 0;
        if (k == 0) i = 1;
        _1 = dar[i]
        url_epg = 'https://m.tv.yandex.' + 'ru' + '/' + c_e + '?channel=' + y_i + '&when=2&day=' + y_d + f_g;
        if (P68)
        {
            url_epg = y_i;
        };
        ul = _1 + encodeURIComponent(url_epg);
        k = i;
        F33();
        P40 = setTimeout('R87()', 15000);
        P9 = new XMLHttpRequest();
        if (P7 && P9['overrideMimeType'])
        {
            P9['overrideMimeType']('text/xml')
        };
        P9['onreadystatechange'] = function ()
        {
            if (P40 < 0)
            {
                return
            };
            if (P9['readyState'] == 4)
            {
                clearTimeout(P40);
                if (P9['status'] == 200)
                {
                    a = P9['responseText'];
                    if (!P68)
                    {
                        var w_y = '',
                            d_e = '',
                            c_n = '';
                        if (Q78 || ul['indexOf']('yandex.') < 0)
                        {
                            var par = a['split']('\x0A');
                            for (var i = 0; i < par['length']; i++)
                            {
                                var ar = dSp(par[i])['split']('|');
                                if (ar['length'] < 2)
                                {
                                    continue
                                };
                                if (!i)
                                {
                                    if (ar['length'] < 3)
                                    {
                                        continue
                                    };
                                    w_y = ar[0];
                                    d_e = ar[1];
                                    c_n = ar[2]
                                }
                                else
                                {
                                    ti = ar[0];
                                    tl = rI(ar[1]);
                                    pId = (ar['length'] == 3) ? ar[2] : '';
                                    p_ar['push']([ti, tl, pId])
                                }
                            }
                        }
                        else
                        {
                            var s0 = '</div><div class="b-select">';
                            s1 = a['indexOf'](s0);
                            if (s1 < 0)
                            {
                                return R87(c_e, y_i)
                            };
                            var s2 = '<div class="b-banner">',
                                s3 = a['indexOf'](s2);
                            if (s3 > 0 && s3 < s1)
                            {
                                s1 = s3
                            };
                            s2 = '<div class="b-text">';
                            s3 = a['indexOf'](s2);
                            if (s3 > 0)
                            {
                                s0 = a['indexOf']('</table></div><div class="b-select">');
                                if (s0 < 0)
                                {
                                    R87(c_e, y_i)
                                }
                                else
                                {
                                    var s3 = a['substring'](s3 + s2['length'], s0);
                                    if (s3)
                                    {
                                        R87(c_e, y_i, s3)
                                    }
                                    else
                                    {
                                        P38 = 0;
                                        R86(y_i)
                                    }
                                };
                                return
                            };
                            a = a['replace'](/&amp;/g, '&');
                            a = a['replace'](/<br\/>/g, "<br />");
                            a = a['replace'](/%2F%3F/g, "/?");
                            a = a['replace'](/%2F/g, "/");
                            a = a['replace'](/%3A/g, ":");
                            a = a['replace'](/%26amp%3B/g, '&');
                            a = a['replace'](/%3D/g, "=");
                            a = a['replace'](/&b=24/g, "");
                            a = a['replace'](/%26/g, "&");
                            a = a['replace'](/\/\x62\x72\x6F\x77\x73\x65\x2E\x70\x68\x70\?u=/g, "");
                            a = a.replace(/http:\/\/\x70\x72\x6F\x78\x79\x2E\x61\x62\x6F\x75\x74\x69\x70\x2E\x64\x65\/index.php\?q\=/g, "");
                            a = a['replace'](/https:\/\/m.tv.yandex.ru/g, "");
                            s2 = '<a href="/' + c_e + '/?day=' + y_d + '&when=2' + f_g + '&channel=' + y_i + '">';
                            s3 = a['indexOf'](s2);
                            if (s3 < 0)
                            {
                                return R87(c_e, y_i)
                            };
                            a = a['substring'](s3 + s2['length'], s1);
                            var w_y = a['substr'](0, 2);
                            a = a['replace'](w_y, '');
                            s0 = '</a><br /><a href="/' + c_e + '/?day=' + y_d + '&when=2' + f_g + '&channel=' + y_i + '" class="day">';
                            s1 = a['indexOf'](s0);
                            if (s1 < 0)
                            {
                                return R87(c_e, y_i)
                            };
                            a = a['replace'](s0, '');
                            var d_e = dSp(a['substr'](0, 2)),
                                c_n = dSp(R98(a, '<th class="channel">', '</th>'));
                            if (!c_n)
                            {
                                return R87(c_e, y_i)
                            };
                            a = a['substr'](a['indexOf']('</th></tr>') + 10);
                            var arr = a['split']('</td></tr>'),
                                t0 = Y44() * 86400;
                            P43 = -1;
                            for (var i in arr)
                            {
                                if (!P33)
                                {
                                    return
                                };
                                var sar = dSp(arr[i])['split']('</a></td><td>');
                                if (sar['length'] != 2)
                                {
                                    break
                                };
                                var pId = R98(sar[0], 'program/', '">'),
                                    ti = Y46(t0, R98(sar[0], pId + '">')),
                                    tl = sar[1],
                                    pId = pId['replace']('<tr>', '')['replace']('/event', '');
                                if (!pId || !ti || !tl)
                                {
                                    break
                                };
                                p_ar['push']([ti, tl, pId])
                            }
                        };
                        if (p_ar['length'])
                        {
                            if (P38 >= 0 && !f_g)
                            {
                                P46['push']([y_i, y_d, dSp(w_y), d_e, c_n, c_e, p_ar]);
                                if ((!P7 && P46['length'] > 50) || P46['length'] > 100)
                                {
                                    P46['shift']()
                                }
                            };
                            R89(y_i, f_g, w_y, d_e, c_n, c_e, p_ar, ix)
                        }
                        else
                        {
                            return R87(c_e, y_i)
                        }
                    }
                    else
                    {
                        a = a['replace'](/&amp;/g, '&');
                        a = a['replace'](/src="\/\/avatars/g, 'src="http://avatars');
                        a = a['replace'](/%2F%3F/g, "/?");
                        a = a['replace'](/%2F/g, "/");
                        a = a['replace'](/%2F%3F/g, "/?");
                        a = a['replace'](/%2F/g, "/");
                        a = a['replace'](/%3A/g, ":");
                        a = a['replace'](/%26amp%3B/g, '&');
                        a = a['replace'](/%3D/g, "=");
                        a = a['replace'](/&b=24/g, "");
                        a = a['replace'](/%26/g, "&");
                        a = a['replace'](/\/\x62\x72\x6F\x77\x73\x65\x2E\x70\x68\x70\?u=/g, "");
                        a = a.replace(/http:\/\/\x70\x72\x6F\x78\x79\x2E\x61\x62\x6F\x75\x74\x69\x70\x2E\x64\x65\/index.php\?q\=/g, "");
                        a = a['replace'](/https:\/\/m.tv.yandex.ru/g, "");
                        var t_i = R98(a, '<div class="b-broadcast__time">', '</div></div><div class="b-pager">');
                        if (!t_i)
                        {
                            return R87()
                        };
                        t_i = R98(t_i, '&when=2">');
                        if (t_i)
                        {
                            t_i = t_i['replace']('</a>', '')['replace']('</div><div class="b-broadcast__info">', '</h3></td></tr></table>')['replace'](
                                '<p>', '<p> ');
                            var i_i = R98(a, '<div class="b-broadcast">', '<div class="b-broadcast__time">')
                        };
                        if (i_i)
                        {
                            i_i = i_i['replace']('class="b-broadcast__img" alt="" title=""', '')
                        };
                        if (!P33 || ix != P27)
                        {
                            return
                        };
                        F35(t_i && P33 ? '<table fontSize="20px"><table><tr><td style="vertical-align:top;padding-right:8px">' + i_i +
                            '</td><td style="color:#00ccff;"><h3>' + tRe(t_i) + '</table>' : 'Подробного_описания_нет !', '')
                    }
                }
                else
                {
                    if (!Q78 && ul['indexOf']('yandex.') > 0 && (P9['status'] == 302 || P9['status'] == 303) && P9['getResponseHeader']('Location') && P9[
                            'getResponseHeader']('Location')['indexOf']('://') > 0)
                    {
                        R88(P9['getResponseHeader']('Location'), c_e, y_i, f_g, ix)
                    }
                    else
                    {
                        if (Q65 == 22 && Q94 < 10 && P32 && !Q78 && ul['indexOf']('yandex.') > 0 && ul['indexOf']('fiowidget.') < 0 && (P9['status'] ==
                                1015 || P9['status'] == 0 || Q99 > 2))
                        {
                            Q78 = 1;
                            Q99 = 0;
                            R88(ul, c_e, y_i, f_g, ix)
                        }
                        else
                        {
                            R87(c_e, y_i)
                        }
                    }
                }
            }
        };
        P9['open']('GET', ul, true);
        R99(P9);
        P9['send']()
    }
    catch (e)
    {
        R87()
    }
};

function Y44()
{
    return (Math['floor']((P39 - (Math['floor']((!P82 && !isNaN(Ach(10))) ? Number(Ach(10)) + Number(A.A7) : Number(A.A7)) + 5) * 3600) / 86400) + P38)
};

function Y45(t)
{
    t = new Date(t * 1000);
    return (to(t['getUTCHours'](), t['getUTCMinutes'](), 0, 1))
};

function Y46(t0, t)
{
    var arr = t['split'](':');
    if (arr['length'] < 2 || isNaN(arr[0]) || isNaN(arr[1]))
    {
        return ''
    };
    t = Number(arr[0]);
    if (P43 < 0)
    {
        P43 = t
    };
    t = P43 > t ? t + 24 : t;
    P43 = t;
    return ((t0 + (t * 60 * 60 + arr[1] * 60)) + '')
};

function R89(y_i, f_g, w_y, d_e, c_n, c_e, p_ar, ix)
{
    var ge = '',
        ts_e = '<table><td style="vertical-align:top;color:#00ccff;font-weight:' + P16 + ';padding-right:8px"><u>',
        sp = 1,
        a = '',
        b = '',
        c = '',
        d = '',
        f = '',
        g = '',
        h = '',
        a11 = [],
        tsh = Math['floor']((!isNaN(Ach(10))) ? Number(Ach(10)) + Number(A.A7) : Number(A.A7));
    CL(' time_sh = ' + tsh);
    P48 = [];
    if (P38)
    {
        ge = 1
    };
    for (var i = 0; i < p_ar['length']; i++)
    {
        if (!P33 || ix != P27)
        {
            return
        };
        sp++;
        var t = Number(p_ar[i][0]) + tsh * 3600,
            ti = Y45(t),
            w = 0;
        if (!ge)
        {
            if (p_ar[i + 1])
            {
                var t1 = Number(p_ar[i + 1][0]) + tsh * 3600;
                if (P39 >= t && P39 < t1 || P39 < t)
                {
                    ge = 1;
                    if (P39 >= t)
                    {
                        w = Math['floor']((t1 - P39) * 100 / (t1 - t))
                    }
                }
            }
            else
            {
                ge = 1
            }
        };
        var tl = p_ar[i][1],
            io_ur = p_ar[i][2] ? 'https://m.tv.yandex.' + 'ru' + '/' + c_e + '/program/' + p_ar[i][2]['replace']('/', '/event/') : '',
            s_e0 = '<font>';
        if (!ge || P38 < 0)
        {
            sp = 1;
            s_e0 = '<font style="color:#999999">';
            var s_e1 = '</u></td><td>' + s_e0;
            a = ts_e + ti + s_e1 + tl + '</font></td></table>';
            b = s_e0 + tl + '</font>';
            c = io_ur;
            d = ti
        }
        else
        {
            if (sp == 2 && P38 == 0)
            {
                s_e0 = '<font style="color:#eeee88;font-weight:' + (P7 ? '500' : '700') + ';">'
            }
        };
        s_e1 = '</u></td><td>' + s_e0;
        if (sp == 2 && !P38 && !P34)
        {
            h = a + ts_e + ti + s_e1 + tl + '</font></td></table>' + ((i < p_ar['length'] - 1) ?
                '<table border=0 width=100% height=8><tr><td bgcolor=#0077ff width=' + (100 - w) + '% ></td><td bgcolor=#ddddff width=' + w +
                '%></td></tr></table>' : '');
            g = s_e0 + tl + '</font>'
        }
        else
        {
            if ((P34 && !ge) || P38 < 0)
            {
                h += ts_e + ti + s_e1 + tl + '</font></td></table>';
                g = s_e0 + tl + '</font>'
            }
            else
            {
                if (ge)
                {
                    h += ts_e + ti + s_e1 + tl + '</font></td></table>';
                    g = s_e0 + tl + '</font>'
                }
            }
        };
        if (g)
        {
            if (!Q35)
            {
                var t_st = '<font style="position:absolute;left:9px;padding-top:1px;font-size:22px;color:#00ccff;text-align:center;">';
                if (sp == 2 && !P38 && !P34 && b)
                {
                    P48['push']([b, 'stop', 'logos/0.png', c, '', '', '', '', '', '', t_st + d + '</font>', '', '', ''])
                };
                P48['push']([g, 'stop', 'logos/0.png', io_ur, '', '', '', '', '', '', t_st + ti + '</font>', '', '', ''])
            };
            if (!P38 && !f_g && !P34)
            {
                a11['push']([t, g])
            }
        }
    };
    if (P33)
    {
        if (a11['length'] && (!Q3 || P30 == P27))
        {
            P42 = P27;
            P47 = a11;
            R92()
        };
        if (!Q35)
        {
            if (w_y && d_e)
            {
                f = '<font style="color:#00cc99;padding-left:5px;">' + w_y + '.' + '- ' + d_e + '</font>'
            };
            if (c_n)
            {
                f += '<font style="color:#00ccff;padding-left:15px;">' + c_n + '</font>'
            };
            if (P49[P41])
            {
                f += '<font style="color:#ff3300;padding-left:15px;font-size:17px;">' + P49[P41] + '</font>'
            };
            h = h['replace']('<br>', '');
            F35(h, f)
        }
    }
};

function R92()
{
    if (!P47['length'])
    {
        return
    };
    P44 = Number(P47[0][0]);
    P45 = P47['length'] > 1 ? Number(P47[1][0]) : (Y44() + 1) * 86400 + (((!isNaN(Ach(10))) ? Number(Ach(10)) + Number(A.A7) : Number(A.A7)) + 5) * 3600;
    Y7(Y11('p_epg_line'), '<font style="color:#55eeff;font-weight:' + P16 + ';padding-right:10px;">' + Y45(P44) + ' - ' + Y45(P45) + '</font>' + P47[0][1]);
    R5()
};

function R93(s)
{
    if (!P47['length'])
    {
        return
    };
    var st = '<font style="color:#55eeff;font-weight:' + P16 + ';padding-right:10px;">';
    if (s)
    {
        var ei = Y11('p_epg_line')['innerHTML'];
        ei = ei['replace'](st, '')['replace']('</font>', '|');
        for (var i in P47)
        {
            if (ei['indexOf'](Y45(Number(P47[i][0]))) >= 0 && ei['indexOf'](P47[i][1]) >= 0)
            {
                s += Number(i);
                break
            }
        };
        s = (s >= P47['length']) ? 0 : (s < 0) ? P47['length'] - 1 : s
    };
    var t2 = !s ? ((P47['length'] > 1) ? Y45(Number(P47[1][0])) : Y45((Y44() + 1) * 86400 + (((!isNaN(Ach(10))) ? Number(Ach(10)) + Number(A.A7) : Number(A.A7)) +
        5) * 3600)) : '';
    Y7(Y11('p_epg_line'), st + Y45(Number(P47[s][0])) + (t2 ? ' - ' + t2 : '') + '</font>' + P47[s][1]);
    if (s)
    {
        if (Y11('player')['style']['display'] == 'none')
        {
            R5(12000)
        }
        else
        {
            R6('R8()', 12000)
        }
    }
};

function R94(s)
{
    if (!s)
    {
        s = ' '
    };
    var l = (P7) ? 46 : 50,
        tr = [],
        st = Math['ceil'](s['length'] / l);
    for (var i = 0; i < st; i++)
    {
        tr[i] = s['substring'](0, l);
        s = s['replace'](tr[i], '')
    };
    return tr
};

function R95(ul)
{
    for (var i = 0; ul['indexOf']('%') >= 0 && i < 10; i++)
    {
        try
        {
            ul = decodeURIComponent(ul)
        }
        catch (e)
        {
            try
            {
                ul = unescape(ul)
            }
            catch (e)
            {
                break
            }
        }
    };
    return ul
};


//--- youtube, rutube, sharksoft  --
function R96(vid, i, ul)
{
    if (vid)
    {
        var tk = vid['split']('&token='),
            pr = ['&el=embedded', '&el=detailpage', '&el=vevo', ''];
        if (!ul)
        {
            ul = 'http://www.youtube.com/get_video_info?video_id=' + tk[0] + pr[i] + '&sts=15973'
        }
    };
    alert('url===' + ul);
    xhrAbort();
    LoadTimer('Y6(14);', 10000);
    xhr = new XMLHttpRequest();
    if (P7 && xhr['overrideMimeType'])
    {
        xhr['overrideMimeType']('text/xml')
    };
    xhr['onreadystatechange'] = function ()
    {
        if (Load_timer < 0)
        {
            return
        };
        if (xhr['readyState'] == 4)
        {
            clearTimeout(Load_timer);
            if (xhr['status'] == 200)
            {
                if (xhr['responseText'])
                {};
                if (ul['indexOf']('rutube.ru') > 0)
                {
                    var t = xhr['responseText']['match'](/(http|https):\/\/(.*?)\n/g);
                    if (t)
                    {
                        Y70(t)
                    }
                    else
                    {
                        Y6(12)
                    }
                }
                else
                {
                    if (vid)
                    {
                        t = R98(xhr['responseText'], 'url_encoded_fmt_stream_map=', 'token');
                        if (t['indexOf']('itag') >= 0)
                        {
                            if (tk[2] && tk[2] == 'shark')
                            {
                                t = R97('http://sharksoft.te.ua/smarttv/yt_ext.php?token=' + tk[1], 'arg1=' + encodeURIComponent(t), false)
                            };
                            R85(t['split']('%2C'))
                        }
                        else
                        {
                            if (i < 2)
                            {
                                i++;
                                R96(vid, i)
                            }
                            else
                            {
                                Y6(12)
                            }
                        }
                    }
                    else
                    {
                        t = xhr['responseText'], par = t['match'](/var video_host = [\s\S]*(?=var video_title)/);
                        if (!par)
                        {
                            t = R98(t, 'video_get_current_url', 'jpg')['replace'](/\\\\\\/g, '');
                            par = t['match'](/http:(.*?)?mp4/g);
                            if (par)
                            {
                                Y66(par)
                            }
                            else
                            {
                                Y6(12)
                            }
                        }
                        else
                        {
                            par = par[0]['replace'](/[';]/g, '')['split']('\x0A');
                            if (par['length'] == 6)
                            {
                                for (var j = 0; j < 5; j++)
                                {
                                    par[j] = dPr(par[j]['split']('=')[1])
                                };
                                if (par[4] == 0 && par[3] == 0)
                                {
                                    R42(par[1] == 0 ? 'http://' + par[0] + '/assets/video/' + par[2] + R98(xhr['responseText'], 'vkid=', '&') + '.vk.flv' :
                                        par[0] + 'u' + par[1] + '/videos/' + par[2] + '.flv')
                                }
                                else
                                {
                                    R83(par)
                                }
                            }
                            else
                            {
                                Y6(12)
                            }
                        }
                    }
                }
            }
            else
            {
                if ((xhr['status'] == 302 || xhr['status'] == 303) && xhr['getResponseHeader']('Location') && xhr['getResponseHeader']('Location')[
                        'indexOf']('://') > 0)
                {
                    R96(vid, i, xhr['getResponseHeader']('Location'))
                }
                else
                {
                    Y6(10, xhr['status'])
                }
            }
        }
    };
    xhr['open']('GET', Y47(ul), true);
    R99(xhr);
    xhr['send']()
};

function R97(ul, s, m)
{
    try
    {
        var xr = new XMLHttpRequest();
        if (P7 && xr['overrideMimeType'])
        {
            xr['overrideMimeType']('text/xml')
        };
        xr['open']('POST', ul, m);
        Y2(xr, s);
        xr['send'](s);
        if (xr['readyState'] == 4 && xr['status'] == 200)
        {
            return xr['responseText']
        }
        else
        {
            return ''
        }
    }
    catch (e)
    {
        return ''
    }
};

function R98(s, l, r)
{
    if (dPr(s) && l !== undefined)
    {
        var i = s['indexOf'](l);
        if (i > -1)
        {
            s = s['substr'](i + l['length']);
            if (r)
            {
                i = s['indexOf'](r);
                if (i > -1)
                {
                    s = s['substr'](0, i)
                }
            }
        }
        else
        {
            s = ''
        }
    };
    return s
};

function R99(x)
{
    if (!x)
    {
        return
    };
    x['setRequestHeader']('Accept-Encoding', 'identity');
    x['setRequestHeader']('Accept-Language', 'en-us,en;q=0.5');
    x['setRequestHeader']('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8');
    x['setRequestHeader']('User-Agent', 'Mozilla/5.0 (X11;U;Linux x86_64;en-US;rv:1.9.2.6) Gecko/20100627 Firefox/3.6.6');
    x['setRequestHeader']('Accept-Charset', 'ISO-8859-1,utf-8;q=0.7,*;q=0.7');
    x['setRequestHeader']('Connection', 'close')
};

function Y27()
{
    try
    {
        clearTimeout(URLtoXML['timeout']);
        clearInterval(URLtoXML['fHasXML']);
        if (URLtoXML['xmlHTTP'])
        {
            URLtoXML['xmlHTTP']['abort']();
            URLtoXML['xmlHTTP']['destroy']();
            URLtoXML['xmlHTTP'] = null
        }
    }
    catch (e)
    {
        F16()
    }
};

function Y24(s)
{
    if (!isNaN(s))
    {
        if (s == 0)
        {
            return
        };
        clearInterval(P20);
        P20 = -1;
        if (typeof PO3['GetEpochTime'] != 'undefined')
        {
            Q87 = PO3.GetEpochTime() * 1000
        }
        else
        {
            Q87 = 0
        };
        P4 = Math['round'](Number(s));
        P31 = P4;
        F69();
    }
};

function Y6(er, st)
{
    try
    {
        xhrAbort();
        alert('############## err  : ' + er + ' - - - ' + O9[er]);
        var tr = Q53['split']('##');
        if (tr[0]['indexOf']('://') > 0 && (Q72 < 5 && P84 >= 30000 || Q72 < 10))
        {
            var s = 'hardware_code:' + P3 + '|mac:' + P1 + '|error:' + ((er == 10 && st) ? st : er) + '|' + (Ach(5) ? 'playlist_url:' + (er == 18 ? dI(P13) :
                dI(Ach(5))) : 'playlist_url:' + dI(P13) + '|stream_url:' + dI(Q22 ? Q22 : Ach(1)));
            s = 'str=' + encodeURIComponent(s);
            LoadTimer('xhrAbort();Y76()', 20000);
            xhr = new XMLHttpRequest();
            if (P7 && xhr['overrideMimeType'])
            {
                xhr['overrideMimeType']('text/xml')
            };
            xhr['onreadystatechange'] = function ()
            {
                if (Load_timer < 0)
                {
                    return
                };
                if (xhr['readyState'] == 4)
                {
                    clearTimeout(Load_timer);
                    if (xhr['status'] == 200 && xhr['responseText'])
                    {
                        alert('############## Stat_server_text = ' + xhr['responseText'])
                    };
                    if (xhr['status'] == 200 && xhr['responseText']['indexOf']('://') > 0 && (xhr['responseText']['indexOf']('playlist_url=') >= 0 || xhr[
                            'responseText']['indexOf']('stream_url=') >= 0))
                    {
                        var ar = lrdPr(xhr['responseText'])['split'](';parser=');
                        if (ar[1])
                        {
                            Q_39[P27][12] = lrdPr(ar[1]);
                        };
                        if (ar[0]['indexOf']('stream_url=') >= 0)
                        {
                            Q_39[P27][1] = lrdPr(ar[0]['replace']('stream_url=', ''));
                            Q_39[P27][5] = ''
                        }
                        else
                        {
                            Q_39[P27][5] = lrdPr(ar[0]['replace']('playlist_url=', ''));
                            Q_39[P27][1] = ''
                        };
                        Q72++;
                        return F45(1)
                    }
                    else
                    {
                        Y76(er, st)
                    }
                }
            };
            xhr['open']('POST', Y47(tr[0]), true);
            Y2(xhr, s);
            xhr['send'](s)
        }
        else
        {
            Y76(er, st)
        }
    }
    catch (e)
    {
        Y76()
    }
};

function Y76(er, st)
{
    if (P82 || Ach(5))
    {
        if (!P82 && er && er < 15 && P17 && R95(P17)['indexOf']('://') > 0 && P78 && P78['indexOf']('md5hash&stop') < 0)
        {
            return F78(P78['replace']('md5hash', ''))
        };
        if (er !== undefined)
        {
            R9('<font style="color:#00ccff;font-weight:' + P16 + ';">' + tRe(O9[er] + ((st == undefined || er != 10) ? '' : ' : ' + st) + ' !') + '</font>', 0);
            if (er == 18)
            {
                return
            }
        };
        P17 = P18;
        Q81 = 0;
        if (P82 && P78 != 'start.xml')
        {
            if (Ach(5) == A['A0'])
            {
                A['A0'] = 'start.xml';
                Q_39[0][5] = A['A0'];
                A['A31'] = '';
                F666([F_2(A)], 'set.dat');
                P64 = A['A0']
            }
            else
            {
                Q_39[0][5] = A['A0']
            };
            Q_39[0][12] = 'ru';
            setTimeout('R9(\'Wiederherstellen der Start Playlist !\',1)', 3000);
            return setTimeout('F47(Ach(5))', 5000)
        };
        if (!Q_39['length'] || P78 == A['A0'])
        {
            setTimeout('R_77(tRe(\'Ändern Sie die Adresse der Ausgangsplaylist\'));', 3000)
        }
        else
        {
            setTimeout('if(P75){F16()}else{R15(0);P78=\'\'};', 3000)
        }
    }
    else
    {
        F50();
        if (P15)
        {
            R40()
        }
        else
        {
            F54()
        };
        Z26++;
        if (!Q93 && Q90['length'] > Z26 && (Q90[Z26][0]['indexOf']('#auto_start') > 0 || (A['A30'] && !/(#stop)$/ ['test'](Q90[Z26][0]))))
        {
            return F51(Q90[Z26][0], Ach(12)['indexOf']('|##|') < 0 ? P87 : Ach(12))
        };
        F16();
        if (er !== undefined)
        {
            R9('<font style="color:#00ccff;font-weight:' + P16 + ';">' + tRe(O9[er] + ((st == undefined || er != 10) ? '' : ' : ' + st) + ' !') + '</font>', 0)
        }
    }
};

function Y7(d, h)
{
    widgetAPI['putInnerHTML'](d, h)
};

function Y36()
{
    try
    {
        if (P2['indexOf']('dtv/usb/sd') > 0)
        {
            return ''
        };
        var wp = '/mtd_down/widgets/' + ((P2['indexOf']('widgets/normal') > 0) ? 'normal/' : 'user/') + curWidget['id'] + '/config.xml',
            cp = '/mtd_down/common/' + Q_75 + '/config.xml',
            n = 'ticker>n<',
            y = 'ticker>y<',
            t = Y38('config.xml');
        if (!t || (t['indexOf'](y) < 0 && t['indexOf'](n) < 0))
        {
            var k = PO_2.Copy(wp, cp);
            if (k != 1)
            {
                return ''
            };
            t = Y38('config.xml')
        };
        if (!t || (t['indexOf'](y) < 0 && t['indexOf'](n) < 0))
        {
            return ''
        };
        t = !A['A29'] ? t['replace'](n, y) : t['replace'](y, n);
        var f = Y39('config.xml', t);
        if (!f)
        {
            return ''
        };
        k = PO_2.Copy(cp, wp);
        return k
    }
    catch (e)
    {
        return ''
    }
};

function Y38(ne)
{
    var fs = new FileSystem(),
        f = fs['openCommonFile'](Q_75 + '/' + ne, 'r'),
        t = '';
    if (f)
    {
        t = f['readAll']();
        fs['closeCommonFile'](f)
    };
    return t
};

function Y39(ne, s)
{
    var fs = new FileSystem();
    if (!fs['isValidCommonPath'](Q_75))
    {
        fs['createCommonDir'](Q_75)
    };
    var f = fs['openCommonFile'](Q_75 + '/' + ne, 'w');
    if (f)
    {
        f['writeAll'](s);
        fs['closeCommonFile'](f)
    };
    return f
};

function Y40(c)
{
    if (c && (c == 147 || c == 261))
    {
        widgetAPI['sendReturnEvent']()
    };
    OnUnload();
    widgetAPI['sendReturnEvent']()
};

function CL()
{};
Q27[2] = ['Widergabelisten', '', 'logos/open.png',
    '<table><td style="vertical-align:top"><img src="logos/open.png" height="128" width="128"></td><td style="width:100%;text-align:center;font-size:26px;">Wiedergabelisten</td></table><table style="width:100%;padding-top:3px;"><tr height="4px" bgcolor="#cccccc"><td></td></tr></table>',
    '', 'pl_history.dat', '', '', '', '', '', '', '', ''];
Q27[3] = ['Suchbegriffe', '', 'logos/open.png',
    '<table><td style="vertical-align:top"><img src="logos/open.png" height="128" width="128"></td><td style="width:100%;text-align:center;font-size:26px;">Suchbegriffe</td></table><table style="width:100%;padding-top:3px;"><tr height="4px" bgcolor="#cccccc"><td></td></tr></table>',
    '', 'search_history.dat', '', '', '', '', '', '', '', ''];
Q27[4] = ['MUSIC', '', 'logos/music.png',
    '<table><td style="vertical-align:top"><img src="logos/music.png" height="128" width="128"></td><td style="width:100%;text-align:center;font-size:26px;">MUSIC</td></table><table style="width:100%;padding-top:3px;"><tr height="4px" bgcolor="#cccccc"><td></td></tr></table>',
    '', 'aud_history.dat', '', '', '', '', '', '', '', ''];
Q27[5] = ['FOTOS', '', 'logos/foto.png',
    '<table><td style="vertical-align:top"><img src="logos/foto.png" height="128" width="128"></td><td style="width:100%;text-align:center;font-size:26px;">FOTOS</td></table><table style="width:100%;padding-top:3px;"><tr height="4px" bgcolor="#cccccc"><td></td></tr></table>',
    '', 'foto_history.dat', '', '', '', '', '', '', '', ''];
Q28[3] =
    'IP-TV||logos/image.png|<table><td style="vertical-align:top"><img src="logos/image.png" height="128" width="128"></td><td style="width:100%;text-align:center;font-size:26px;">IP-TV</td></table><table style="width:100%;padding-top:3px;"><tr height="4px" bgcolor="#cccccc"><td></td></tr></table>||ip-tvfav.dat||||||||';
Q28[4] =
    'FILME||logos/film.png|<table><td style="vertical-align:top"><img src="logos/film.png" height="128" width="128"></td><td style="width:100%;text-align:center;font-size:26px;">FILME</td></table><table style="width:100%;padding-top:3px;"><tr height="4px" bgcolor="#cccccc"><td></td></tr></table>||filmyfav.dat||||||||';
Q28[5] =
    'SERIEN||logos/film.png|<table><td style="vertical-align:top"><img src="logos/film.png" height="128" width="128"></td><td style="width:100%;text-align:center;font-size:26px;">SERIEN</td></table><table style="width:100%;padding-top:3px;"><tr height="4px" bgcolor="#cccccc"><td></td></tr></table>||serialyfav.dat||||||||';
Q28[6] = 'Meine||logos/open.png|Meine||moifav.dat|||||||';
Q63 = 'http://wwp.greenwichmeantime.com/time/scripts/clock-8/x.php';
Q65 = 22;

function complete1()
{
    if (P82 && P17 != 'tsnakeman')
    {
        return OnMaAd()
    };
    if (typeof StartParseTsnake != 'undefined')
    {
        P80 = 1;
        F78(Ach(5))
    }
    else
    {
        if (Scurar[1]['length'] > Init_ext_js_step)
        {
            Init_id_url = (Init_id_url < Scurar[1]['length'] - 1) ? Init_id_url + 1 : 0;
            setTimeout('R_64(Scurar[1][Init_id_url]);', 1000)
        }
        else
        {
            R9('Überprüfen Sie etwaige Tippfehler in der Parser Playlist !', 1);
            setTimeout('if(P82)R_77(tRe(\'Ändern Sie die Adresse des Ausgangsplayliste\'));else R15(0);', 3000)
        }
    }
};
F74 = function (ul)
{
    _l1 = parseInt(_l[1], 10);
    _l2 = parseInt(_l[2], 10);
    var
        _l1 = (_l1)
        .toString(16),
        _l2 = (_l2)
        .toString(16);
    ul = Y47(ul);
    if (ul['indexOf']('://') > 0)
    {
        var ns = (/\?$/ ['test'](ul)) ? '' : (ul['indexOf']('?') > 1) ? '&' : '?';
        if (Q46 && P75)
        {
            ul += ns + 'search=' + encodeURIComponent(Q46);
            ns = '&'
        };
        if (key6 && ul['indexOf']('/@?') > 0)
        {
            ul += ns + 'skw_key=' + key6;
            ns = '&';
            P86 = R98(ul, '://', '/')
        }
        else
        {
            if (key7 && (ul['indexOf']('elion.myftp.biz') > 0 || ul['indexOf']('sat.webhop.me') > 0))
            {
                ul += ns + 'sec_key=' + key7;
                ns = '&'
            }
            else
            {
                if (ext_key > 0)
                {
                    ul += ns + 'sec_key=' + ext_key;
                    ns = '&'
                }
            }
        };
        if (ul['indexOf'](_l[5]) > 0)
        {
            ul += "l";
            return ul
        };
        if (A.A33 != 0)
        {
            if (ul['indexOf'](_l[4]) > 0 || ul['indexOf'](_l[3]) > 0)
            {
                ul += ns + 'box_mac=' + _l1;
                return ul
            };
            if (ul['indexOf'](_l[8]) > 0 || ul['indexOf'](_l[7]) > 0 || ul['indexOf'](_l[6]) > 0)
            {
                ul += ns + 'box_mac=' + _l2;
                return ul
            }
        };
        if (ul['indexOf']('box_mac=') < 0 && ul['indexOf']('elion.myftp.biz') < 0 && ul['indexOf']('sat.webhop.me') < 0)
        {
            ul += ns + 'box_mac=' + P1
        }
    };
    alert('####### xml_url 1 =' + ul);
    return ul
};

function F3()
{
    P64 = '';
    if ((A['A26'] && (A['A0']['indexOf']('http://') == 0 || A['A0']['indexOf']('/dtv/usb/sd') >= 0 || A['A0']['indexOf']('XML/') == 0 || A['A0']['indexOf'](
            'vip_pl_url_') == 0)) || A['A0'] == 'start.xml')
    {
        P64 = Y52(A.A0)
    }
};

function F23()
{
    clearTimeout(Q2);
    clearTimeout(Load_timer);
    if (P51 != 0)
    {
        P51 = 0;
        clearTimeout(P92);
        F37('ch_name_box_' + P24, 'marginLeft="0px",whiteSpace="normal"');
        Y12('ch_name_box_' + P24)
    }
};

function F40()
{
    Y12('width_str');
    P51 = Y11('width_str')['clientWidth'] - 340;
    Y13('width_str');
    if (P51 > 0 && P51 < 40)
    {
        P51 = 40
    };
    if (P51 > 39)
    {
        Y15(0)
    }
};

function Y15(t)
{
    P52 = 0;
    F22('Y11(\'ch_name_box_\'+P24).style.whiteSpace=\'nowrap\';Y17();', t)
};

function Y16()
{
    F22('Y12(\'ch_name_box_\'+P24);Y15(1500);', 500)
};

function Y17()
{
    F22('P52-=4;Y11(\'ch_name_box_\'+P24).style.marginLeft=P52+\'px\';if(P52>-P51)Y17();else Y18();', 50)
};

function Y18()
{
    F22('Y13(\'ch_name_box_\'+P24);Y11(\'ch_name_box_\'+P24).style.marginLeft=\'0px\';Y16();', 1000)
};

function F46(ul, ne)
{
    if (!P7)
    {
        return R9('Für Ihr Gerät nicht verfügbar !', 1)
    };
    var rs = PO_2.Unzip(ul, '/mtd_down/widgets/user/' + ne['replace']('.zip', '') + '/');
    if (rs == 1)
    {
        R9('Das Widget wurde erfolgreich installiert !', 1)
    }
    else
    {
        R9('Installationsfehler !', 1)
    }
};

function F66()
{
    var tr = [];
    if (Q79['length'] && Z41)
    {
        F55(tr, P14 + P88);
        for (var i in tr)
        {
            var ar = tr[i]['split']('#');
            if (ar['length'] == 3)
            {
                if (ar[0] == Z41)
                {
                    tr[i] = [Z41 + '#' + ar[1] + '#' + F_2(Q79)];
                    F666(tr, P14 + P88);
                    break
                }
            }
        };
        return
    };
    var ul = (P13 == A['A0'] && P64) ? P64 : (P13 == 'OpenFav') ? 'favcat.dat' : P13;
    if (P13 == 'OpenFav')
    {
        Q26 = []
    };
    F55(tr, ul, 0, 1);
    for (var i in Q_39)
    {
        if (P13 == 'OpenFav')
        {
            Q26['push']([i, Q_39[i][0], Q_39[i][5]])
        };
        tr['push'](F_2(Q_39[i]))
    };
    F666(tr, ul)
};

function F61()
{
    if (P13 != 'search_history.dat')
    {
        var tr = [],
            ha = [];
        for (var i in P58)
        {
            ha['push']([i, P58[i]])
        };
        F55(tr, 'search_history.dat', 2);
        if (tr['length'])
        {
            var st = ha['length'] - 1;
            for (var i in tr)
            {
                var num = Number(st) + Number(i),
                    rs = tr[i]['split']('|');
                if (ha['length'] == 0)
                {
                    ha['push']([num, rI(rs[0])])
                }
                else
                {
                    for (var j in ha)
                    {
                        if (ha[j][1] == rI(rs[0]))
                        {
                            break
                        }
                        else
                        {
                            if (j == ha['length'] - 1)
                            {
                                ha['push']([num, rI(rs[0])])
                            }
                        }
                    }
                }
            }
        };
        if (ha['length'])
        {
            F93(O19[2], ha)
        }
        else
        {
            R9('leer !', 1)
        }
    }
};

function F64(s_n, type)
{
    try
    {
        var par = s_n['split']('|');
        s_n = rI(par[1]['substr'](10));
        var st1 = '<font color="#00ccff">',
            st2 = '<font color="#ffffcc">',
            st3 = '<font color="#ffff99">',
            st4 = '<font color="#00cc99">',
            P = [],
            V = [],
            AU = [],
            F = [],
            PI = [],
            AH = [],
            O = [],
            D = [],
            us = PO1.GetUSBListSize(),
            fs = new FileSystem();
        if (us < 1)
        {
            if (type == 1)
            {
                F16()
            };
            return R9('Kein USB-Gerät angeschlossen!', 1)
        };
        P_5 = 0;
        var f0 = function (arr, ne, ul, l_o, d_on, p_u, c_d)
        {
            arr['push']([ne, ul, l_o, d_on, c_d, p_u, '', '', '', '', '', '', '', ''])
        };
        var p_ar = [par[0]],
            cc = 0;
        for (var x = 0; x < p_ar['length'] && cc < 300; x++)
        {
            var d_t = fs['readDir']('$USB_DIR/' + p_ar[x]);
            if (d_t)
            {
                var p_ne = '';
                for (var k = 0; k < d_t['length'] && cc < 300; k++)
                {
                    var ne = '';
                    if (d_t[k]['name'])
                    {
                        ne = dSp(d_t[k]['name'])
                    };
                    if (ne && ne != '.' && ne != '..' && p_ne != ne)
                    {
                        if (d_t[k]['isDir'])
                        {
                            if (type == 1 && ne['toLowerCase']()['indexOf'](s_n['toLowerCase']()) == 0)
                            {
                                var ifo = 'Titel : ' + st3 + ne + '</font><br> Typ : ' + st1 + ' Ordner </font>';
                                if (d_t[k]['mtime'])
                                {
                                    ifo += '<br> Erstellungsdatum : ' + st3 + dSp(d_t[k]['mtime']) + '</font>'
                                };
                                f0(D, st4 + ne + '</font>', '', 'logos/open.png', ifo, '/' + p_ar[x] + '/' + ne, '1')
                            };
                            p_ar['push'](p_ar[x] + '/' + ne)
                        }
                        else
                        {
                            if (type == 0 && s_n == ne)
                            {
                                P78 = '/dtv/usb/' + p_ar[x] + '/' + s_n;
                                return F78(P78)
                            }
                            else
                            {
                                if (type == 1 && ne['toLowerCase']()['indexOf'](s_n['toLowerCase']()) == 0)
                                {
                                    var ifo = 'Titel : ' + st3 + ne + '</font>';
                                    ifo += '<br> Typ : ' + st4 + ' Datei </font>';
                                    var e_ne = ne['match'](/\.(\w+)$/i);
                                    if (e_ne)
                                    {
                                        ifo += ' "' + st3 + e_ne[1]['toLowerCase']() + '</font>"'
                                    }
                                    else
                                    {
                                        ifo += ' "' + ' ohne Erweiterung ' + '"'
                                    };
                                    var ul = '/dtv/usb/' + p_ar[x] + '/' + ne;
                                    if (d_t[k]['size'])
                                    {
                                        ifo += '<br> Größe : ' + st3 + F67(d_t[k]['size']) + '</font>'
                                    };
                                    if (d_t[k]['mtime'])
                                    {
                                        ifo += '<br> Erstellungsdatum : ' + st3 + dSp(d_t[k]['mtime']) + '</font>'
                                    };
                                    if (P95['test'](ne))
                                    {
                                        f0(P, st3 + ne + '</font>', '', 'logos/playlist.png', ifo, ul, '3')
                                    }
                                    else
                                    {
                                        if (P96['test'](ne))
                                        {
                                            f0(V, st3 + ne + '</font>', ul, 'logos/film.png', ifo, '', '4')
                                        }
                                        else
                                        {
                                            if (P97['test'](ne))
                                            {
                                                f0(AU, st3 + ne + '</font>', ul, 'logos/music.png', ifo, '', '5')
                                            }
                                            else
                                            {
                                                if (P98['test'](ne))
                                                {
                                                    f0(F, st3 + ne + '</font>', ul, 'logos/foto.png', ifo, '', '6')
                                                }
                                                else
                                                {
                                                    if (P99['test'](ne))
                                                    {
                                                        f0(PI, st3 + ne + '</font>', ul, 'logos/pic.png', ifo, '', '7')
                                                    }
                                                    else
                                                    {
                                                        if (Q1['test'](ne))
                                                        {
                                                            f0(AH, ne, ul, 'logos/arh.png', ifo, '', '2')
                                                        }
                                                        else
                                                        {
                                                            f0(O, st2 + ne + '</font>', '', 'logos/file.png', ifo, ul, '8')
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    };
                                    if ((D['length'] + P['length'] + V['length'] + AU['length'] + F['length'] + AH['length'] + O['length']) > 199)
                                    {
                                        break
                                    }
                                }
                            }
                        }
                    };
                    p_ne = ne;
                    cc++
                }
            }
        };
        if (type == 1)
        {
            var ch = D['concat'](AH, P, V, AU, F, PI, O);
            if (ch['length'])
            {
                var cr = [
                    [0, 'Alle Kategorien - Sortieren']
                ];
                if (D['length'])
                {
                    cr['push']([1, 'Ordner'])
                };
                if (AH['length'])
                {
                    cr['push']([2, 'Archiv'])
                };
                if (P['length'])
                {
                    cr['push']([3, 'Wiedergabelisten'])
                };
                if (V['length'])
                {
                    cr['push']([4, 'Video-Dateien'])
                };
                if (AU['length'])
                {
                    cr['push']([5, 'Audiodateien'])
                };
                if (F['length'])
                {
                    cr['push']([6, 'Bilder'])
                };
                if (PI['length'])
                {
                    cr['push']([7, 'Zeichnungen'])
                };
                if (O['length'])
                {
                    cr['push']([8, 'unbekannte Dateien'])
                };
                if (cr['length'] < 3)
                {
                    cr = []
                };
                F62(Ach(5), ch, cr);
                Q47 = '';
                Q48 = '';
                Q49 = '';
                Q51 = '';
                Q52 = '';
                Q53 = '';
                Q54 = '';
                return
            };
            F16()
        };
        R9('Nichts gefunden !', 1);
        P_5 = 1
    }
    catch (e)
    {
        F16();
        R9('err:' + e, 1)
    }
};

function F77()
{
    var tr = [];
    F55(tr, 'favcat.dat');
    if (!tr['length'])
    {
        tr = Q28;
        F666(Q28, 'favcat.dat')
    };
    return tr
};

function F76()
{
    var tr = [];
    P36 = 0;
    F55(tr, A['A4'] + '_ya_name_index_url.dat');
    if (tr['length'])
    {
        if (tr['length'] == 1)
        {
            return
        };
        P36 = 1;
        for (var i in tr)
        {
            var rs = tr[i]['split']('|');
            if (rs['length'] != 3 || !rs[0] || !rs[1] || !rs[2])
            {
                continue
            };
            O2[rs[0]['toLowerCase']()] = rs[1];
            O3[rs[1]] = rs[2];
            O5[rs[0]['toLowerCase']()] = rs[2]
        }
    }
    else
    {
        if (A.A34 != 0)
        {
            setTimeout('getURLya();', 1000);
            setTimeout('getBASEya();', 15000);
            F35('<br><center><b style=\'color:yellow;font-size:22px;\'>Achtung !</b></center><center><br>Ein Datenbank-Kanal ' + A['A4'] +
                ' Region .<br>bitte warten...<center>', '')
        }
        else
        {
            Y26()
        };
    }
};

function Y25()
{
    var tr = [],
        b_i = '',
        n = 0,
        ch = 'Kanäle',
        st = '<font style="color:#00ccff;font-weight:bolder">';
    F55(tr, A['A4'] + '_ya_name_index_url.dat');
    if (tr['length'] > 1)
    {
        for (var i in tr)
        {
            var rs = tr[i]['split']('|');
            if (rs['length'] != 3 || !rs[0] || !rs[1] || !rs[2])
            {
                continue
            };
            b_i += '<br>' + (n + 1) + ') &nbsp;' + rs[0] + ' - ' + st + rs[1] + '</font>';
            n++
        };
        P35 = 1;
        if (parseInt(n / 10) * 10 == n)
        {
            ch = 'каналов'
        };
        b_i = tRe(' Die Datenbasis für ') + st + A['A4'] + tRe('</font> Region ') + st + n + ' </font> ' + ch + ' : ' + b_i;
        F35(b_i)
    }
};

function R1()
{
    Z18 = Z16;
    var ul = P59[10 * Z20 + Z16][0];
    Y13('selectbox');
    if (Q3 == 3 && Q12 > 120000)
    {
        Q13 = Q12
    };
    R42(ul)
};

function Y21()
{
    Y13('selectbox');
    Y12('info_window');
    R15((Q3 && Y11('main')['style']['display'] == 'none') ? (Q11 > 0 ? 3 : 2) : 0);
    var m = Z21[10 * Z20 + Z16][0];
    if (m == Q20 && m > 0)
    {
        return
    };
    Q20 = m;
    Q9 = '';
    if (Q20 > 0)
    {
        Q9 = Z21[10 * Z20 + Z16][1];
        Q9 = '<tr><td><center>' + tRe(Q9) + '</center></td></tr>'
    };
    if (P6)
    {
        if (PO4.Check3DEffectMode(Q20) == 1)
        {
            PO4.Set3DEffectMode(Q20)
        }
        else
        {
            R9('Nicht verfügbar !', 1)
        }
    }
    else
    {
        if (Q3 == 3 && Q12 > 120000)
        {
            Q13 = Q12
        };
        R43()
    }
};

function R26()
{
    try
    {
        if (PO4 && (PO4.Flag3DEffectSupport() == 1 || PO4.Flag3DTVConnect() == 1))
        {
            if (P6)
            {
                return F93(O19[7], [
                    [0, O20[0]],
                    [1, O20[1]],
                    [2, O20[2]],
                    [7, O20[3]]
                ])
            }
            else
            {
                return F93(O19[7], [
                    [0, O20[0]],
                    [1, O20[2]],
                    [2, O20[1]],
                    [4, O20[3]]
                ])
            }
        }
    }
    catch (e)
    {};
    Q20 = 0;
    R9('Nicht verfügbar !', 1)
};

function R38()
{
    var p_bf = (Ach(8)) ? ((Ach(8) < 0.25) ? 0.25 : (Ach(8) > 20) ? 20 : Number(Ach(8))) : '',
        ibf = (p_bf && Ach(9)) ? ((Ach(9) > 100) ? 100 : (Ach(9) < 1) ? 1 : Number(Ach(9))) : '',
        bf = (A['A14'] == 5) ? 0 : (A['A14'] == 0 || Q18) ? 1 : (A['A14'] == 1) ? 4 : (A['A14'] == 2) ? 8 : (A['A14'] == 3) ? 16 : 20;
    bf = (p_bf) ? p_bf : bf;
    bf = (P6 && bf > 18) ? 18 : bf;
    if (bf)
    {
        ibf = (ibf) ? (ibf * bf / 100) : (A['A14'] == 0 || Q18) ? 0.0625 : (A['A14'] == 4) ? 4 : bf / 16;
        ibf = (P6 && ibf < 0.1387) ? 0.1387 : (ibf < 0.0625) ? 0.0625 : ibf;
        var x = Math['floor'](5 + ibf * 20),
            pbf = Math['floor'](ibf * 2048) * 1024;
        ibf = Math['floor'](ibf * 1024) * 1024;
        bf = Math['floor'](bf * 1024) * 1024;
        pbf = pbf > bf ? bf : pbf;
        if (Q15)
        {
            PO5.Execute('SetTotalBufferSize', bf);
            PO5.Execute('SetInitialBuffer', ibf);
            PO5.Execute('SetInitialTimeOut', x);
            PO5.Execute('SetPendingBuffer', pbf)
        }
        else
        {
            if (PO6)
            {
                PO6.SetTotalBufferSize(bf);
                PO6.SetInitialBuffer(ibf);
                PO6.SetInitialTimeOut(x);
                PO6.SetPendingBuffer(pbf)
            }
        }
    }
};

function R44()
{
    var ua = [];
    if (Q11 > Q12 + 120000)
    {
        ua = [dI(Q_39[P30][0]) + '|' + dI(Q23) + '|' + Q12]
    };
    F55(ua, P14 + '695.dat');
    if (ua['length'] > 20)
    {
        ua['pop']()
    };
    for (var i = 0; i < ua['length']; i++)
    {
        var rs = ua[i]['split']('|');
        if (rs['length'] != 3)
        {
            continue
        };
        if (rs[0] == dI(Q_39[P30][0]) && rs[1] == dI(Q23) && (rs[2] != Q12 || Q11 <= Q12 + 120000))
        {
            ua['splice'](i, 1);
            break
        }
    };
    F666(ua, P14 + '695.dat')
};

function R45()
{
    if (Q3 == 3 && Q13 == 0)
    {
        var ua = [];
        F55(ua, P14 + '695.dat');
        for (var i in ua)
        {
            var rs = ua[i]['split']('|');
            if (rs['length'] != 3)
            {
                continue
            };
            if (rs[0] == dI(Q_39[P30][0]) && rs[1] == dI(Q23))
            {
                Q13 = rs[2];
                R37('if(Q35!=0){if(Q76){R46()}else{R9("fortsetzen ?",1,6000);R37("Q13=0;",12000)}}', 3000);
                break
            }
        }
    }
};

function R46()
{
    if (Q3 == 3 && !Q16)
    {
        var t = (Q13 - Q12) / 1000;
        if (t > 6)
        {
            R49(t - 3, 'FORTSETZEN');
            LoadTimer('R5(6000);', 1500);
            R37('if(Q35!=0)R9("Fortsetzen fehlgeschlagen !",1,3000,1);Q13=0;R37("R43();",2000);', 20000)
        }
    }
};

function ime_callback(cb)
{};

function Y35()
{
    Y11('help_txt_yellow')['style']['display'] = 'inline-block';
    Y7(Y11('help_txt_yellow'), 'Suchhistorie')
};

function R66()
{
    var ime = new IMEShell('0', ime_callback);
    if (P6)
    {
        ime['setKeypadPos'](110, 80);
        ime['setKeyFunc'](108, function ()
        {
            event['preventDefault']();
            ime['setString']('')
        })
    }
    else
    {
        ime['setKeypadPos'](110, 100);
        ime['setQWERTYPos'](0, 100);
        if (_g_ime['keySet'] == '12key')
        {
            Y11('info_window')['style']['left'] = '480px'
        }
        else
        {
            Y11('info_window')['style']['left'] = '520px'
        };
        ime['setKeyFunc'](20, function ()
        {
            if (_g_ime['keySet'] == '12key')
            {
                Y11('info_window')['style']['left'] = '520px'
            }
            else
            {
                Y11('info_window')['style']['left'] = '480px'
            };
            setTimeout('Y35();', 50)
        })
    };
    ime['setKeyFunc'](21, function ()
    {
        event['preventDefault']();
        F61();
        return false
    });
    ime['setKeyFunc'](88, function ()
    {
        event['preventDefault']();
        F16();
        return false
    });
    ime['setKeyFunc'](45, function ()
    {
        event['preventDefault']();
        F16();
        return false
    });
    ime['setEnterFunc'](R61);
    Y11('0')['focus']();
    ime['setString'](Q46);
    if (!P6)
    {
        Y35()
    }
};

function R67(ne, l_o)
{
    var tr = [],
        fav_url = Y19(ne) + 'fav.dat';
    l_o = F84(fav_url, l_o);
    Q_39['push']([ne, '', l_o, ne, '', fav_url, '', '', '', '', '', '', '']);
    P56 = 0;
    F62('OpenFav', Q_39)
};

function R68()
{
    R62();
    R15(5);
    Y32();
    var ul = (Ach(5)) ? Ach(5) : Ach(1),
        ua = R94(ul),
        s_u = ua['length'] - 1,
        di = Ach(3);
    if (di['length'] >= 5000)
    {
        var dar = [tRe('Bearbeiten ist nicht möglich !'), tRe('Datei zu groß !')]
    }
    else
    {
        dar = R94(di)
    };
    var s_di = dar['length'] - 1,
        la = R94(Ach(2)),
        st_logo = la['length'] - 1,
        u_n = (!Ach(1)) ? 'Playlist' : 'Stream';
    Y7(Y11('version'), 'Bearbeitung &nbsp;Parameter &nbsp;' + u_n);
    var form = '<span id="form">Titel &nbsp;' + u_n +
        ' :</span><div id="form"><div id="0" class="set_str" maxlength="100"></div></div><span id="form">URL &nbsp;Adresse &nbsp;' + u_n + ' :</span>';
    for (var i = 1; i < s_u + 2; i++)
    {
        form += '<div id="form"><div id="' + i + '" class="set_str" maxlength="100"></div></div>'
    };
    form += '<span id="form">Bezeichnung, &nbsp;mehr &nbsp;Informationen :</span>';
    for (var i = 2 + s_u; i < s_u + s_di + 3; i++)
    {
        form += '<div id="form"><div id="' + i + '" class="set_str" maxlength="100"></div></div>'
    };
    var st = st_logo + s_u + s_di;
    form += '<span id="form">Adresse &nbsp;icons &nbsp;' + u_n + ' :</span>';
    for (var i = 3 + s_u + s_di; i < st + 4; i++)
    {
        form += '<div id="form"><div id="' + i + '" class="set_str" maxlength="100"></div></div>'
    };
    if (!Ach(5))
    {
        form +=
            '<span id="form">Standard &nbsp;Verhältnis &nbsp;Größe &nbsp;Video :</span><span id="form">"0"- 16X9 FULL oder ORIGINAL , "1"- 14X9 ,</span><span id="form">"2"- 4Х3 ZOOM 2 , "3"- 4Х3 ZOOM 1 ,"4"- 4Х3 , </span><div id="form"><span id="text_form0">"5"- X-ZOOM , "6"- Auto  </span><div id="' +
            (st + 4) +
            '" class="set_str" maxlength="1"></div></div><div id="form"><span id="text_form0">Breite &nbsp;"X-ZOOM" ( 50 - 150 % ) : </span><div id="' + (st +
                5) + '" class="set_str" maxlength="3"></div></div><div id="form"><span id="text_form0">Höhe &nbsp;"X-ZOOM" ( 50 - 150 % ) : </span><div id="' +
            (st + 6) +
            '" class="set_str" maxlength="3"></div></div><div id="form"><span id="text_form0">Reihe &nbsp;Audio &nbsp;Spur ( 1, 2, 3 . . .) : </span><div id="' +
            (st + 7) +
            '" class="set_str" maxlength="1"></div></div><div id="form"><span id="text_form0"> Code &nbsp;Region &nbsp;Yandex ( "213"- Moskau ) : </span><div id="' +
            (st + 8) +
            '" class="set_str" maxlength="6"></div></div><div id="form"><span id="text_form0">Zeitverschiebung &nbsp;in Anwendung ( +/-12 h ) : </span><div id="' +
            (st + 9) +
            '" class="set_str" maxlength="3"></div></div><span id="form">Puffer Gesamtgröße ( 0.25 - 20 MB )</span><div id="form"><span id="text_form0">falls &nbsp;не &nbsp;installiert, &nbsp;dann &nbsp;"Auto" : </span><div id="' +
            (st + 10) +
            '" class="set_str" maxlength="4"></div></div><span id="form">Starter &nbsp;Puffergröße ( 1 - 100 % )</span><div id="form"><span id="text_form0">falls &nbsp;не &nbsp;installiert, &nbsp;dann &nbsp;"Auto" : </span><div id="' +
            (st + 11) + '" class="set_str" maxlength="2"></div></div>'
    };
    form +=
        '<div id="form"></div><div id="form"></div><div id="form"></div><div id="form"></div><div id="form"></div><div id="form"></div><div id="form"></div><div id="form"></div><div id="form"></div><div id="form"></div>';
    Y7(Y11('allInput'), form);
    LoadTimer('F39()', 1000);
    P23 = [72, 72];
    var str = Ach(0)['substring'](0, 200);
    R71(0, str, 1);
    for (var i = 0; i < s_u; i++)
    {
        R71(i + 1, ua[i], 1);
        P23[i + 1] = 36
    };
    R71(1 + s_u, ua[s_u], 1);
    P23[1 + s_u] = 72;
    for (var i = 0; i < s_di; i++)
    {
        R71(i + 2 + s_u, dar[i], 1);
        P23[i + 2 + s_u] = 36
    };
    R71(2 + s_u + s_di, dar[s_di], 1);
    P23[2 + s_u + s_di] = 72;
    for (var i = 0; i < st_logo; i++)
    {
        R71(i + 3 + s_u + s_di, la[i], 1);
        P23[i + 3 + s_u + s_di] = 36
    };
    R71(3 + st, la[st_logo], 1);
    if (!Ach(5))
    {
        var ez = '',
            w = '',
            h = '';
        P23[st + 3] = 144;
        if (Ach(6))
        {
            var ar = Ach(6)['split']('|');
            if (!isNaN(ar[0]) && ar[0] > -1 && ar[0] < 7)
            {
                ez = ar[0]
            };
            if (ez && ar['length'] == 3)
            {
                if (!isNaN(ar[1]) && !isNaN(ar[2]))
                {
                    w = Number(ar[1]);
                    h = Number(ar[2]);
                    w = (w > 150) ? 150 : (w < 50) ? 50 : w;
                    h = (h > 150) ? 150 : (h < 50) ? 50 : h
                }
            }
        };
        R71(st + 4, ez);
        P23[st + 4] = 36;
        R71(st + 5, w);
        P23[st + 5] = 36;
        R71(st + 6, h);
        P23[st + 6] = 36;
        R71(st + 7, Ach(7));
        P23[st + 7] = 36;
        R71(st + 8, Ach(11));
        P23[st + 8] = 36;
        R71(st + 9, Ach(10));
        P23[st + 9] = 72;
        R71(st + 10, Ach(8));
        P23[st + 10] = 72;
        R71(st + 11, Ach(9))
    };
    P21 = 0;
    P22 = P23['length'];
    R72(0, 2);
    Z8 = 7;
    Z9 = 2;
    Z1 = 1;
    Z5 = '';
    R75();
    R61 = function ()
    {
        var l = 50;
        if (P7)
        {
            l = 46
        };
        var ne = lrdPr(Y11('0')['innerText']),
            ul = (Ach(5)) ? Ach(5) : Ach(1),
            st = (ul) ? Math['ceil'](ul['length'] / l) - 1 : 0;
        ul = '';
        for (var i = 0; i < st + 1; i++)
        {
            ul += Y11(1 + i)['innerText']
        };
        if (!ul)
        {
            ul = 'stop'
        };
        if (!Ach(5))
        {
            var pu = ''
        }
        else
        {
            pu = (P13 == 'OpenFav') ? Ach(5) : ul;
            ul = ''
        };
        if (Ach(3)['length'] < 5000)
        {
            var st_t = (Ach(3)) ? Math['ceil'](Ach(3)['length'] / l) - 1 : 0,
                ifo = '';
            for (var i = 0; i < st_t + 1; i++)
            {
                ifo += Y11(2 + st + i)['innerText']
            }
        }
        else
        {
            ifo = Ach(3);
            st_t = 1
        };
        st += st_t;
        st_t = (Ach(2)) ? Math['ceil'](Ach(2)['length'] / l) - 1 : 0;
        var l_o = '';
        for (var i = 0; i < st_t + 1; i++)
        {
            l_o += Y11(3 + st + i)['innerText']
        };
        st += st_t;
        var ez = '',
            w = '',
            h = '',
            an = '',
            ti = '',
            bf = '',
            ibf = '',
            re = '';
        if (!Ach(5))
        {
            ez = dPr(Y11(st + 4)['innerText'], 1);
            ez = (ez) ? ((ez < 0) ? 0 : (ez > 6) ? 6 : ez) : '';
            w = dPr(Y11(st + 5)['innerText'], 1);
            w = (w) ? ((w < 50) ? 50 : (w > 150) ? 150 : w) : '';
            h = dPr(Y11(st + 6)['innerText'], 1);
            h = (h) ? ((h < 50) ? 50 : (h > 150) ? 150 : h) : '';
            an = dPr(Y11(st + 7)['innerText'], 1);
            an = (an) ? ((an < 1) ? 1 : (an > 10) ? 10 : an) : '';
            re = dPr(Y11(st + 8)['innerText'], 1);
            re = (re) ? ((re < 1) ? 1 : re) : '';
            ti = dPr(Y11(st + 9)['innerText'], 1);
            ti = (ti) ? ((ti < -12) ? -12 : (ti > 12) ? 12 : ti) : '';
            bf = dPr(Y11(st + 10)['innerText'], 1);
            bf = (bf) ? ((bf < 0.25) ? 0.25 : (bf > 20) ? 20 : bf) : '';
            ibf = dPr(Y11(st + 11)['innerText'], 1);
            ibf = (ibf) ? ((ibf < 1) ? 1 : (ibf > 100) ? 100 : ibf) : '';
            if (w && h)
            {
                ez += '|' + w + '|' + h
            }
        };
        Q_39[P27] = [ne, lrdPr(ul), lrdPr(l_o), lrdPr(ifo), '', lrdPr(pu), ez, an, bf, ibf, ti, re, Ach(12), Ach(13)];
        F16()
    }
};

function R90()
{
    if (P36 && !P35)
    {
        Y25();
        R9('Eintrag aus der Basis für Yandex Region wieder entfernen !', 1, 5000)
    }
    else
    {
        if (!P35)
        {
            R9('Erstellen eines Eintrags für Yandex Region', 1, 10000)
        };
        setTimeout('R91();', 500)
    }
};

function R91()
{
    var tr = [],
        txt = '';
    F55(tr, A['A4'] + '_ya_name_index_url.dat');
    if (tr['length'] > 1)
    {
        R9('Удаление базы Яндекс !', 1);
        F666(['1'], A['A4'] + '_ya_name_index_url.dat');
        setTimeout('location.reload(true);', 2000)
    }
    else
    {
        if (A.A34 != 0)
        {
            setTimeout('getURLya();', 1000);
            setTimeout('getBASEya();', 15000);
            F35('<br><center><b style=\'color:yellow;font-size:22px;\'>Vorsicht !</b></center><center><br>Einen Eintrag-Kanal ' + A['A4'] +
                ' Region .<br>bitte warten...<center>', '')
        }
        else
        {
            Y26()
        };
    }
};

function Y3(k_c)
{
    try
    {
        if (!P85)
        {
            return
        };
        Q64 = k_c;
        xhrAbort();
        if (Q64 != 45 && Q64 != 88)
        {
            P85 = '';
            LoadTimer('xhrAbort();R19(Q64);', 1000)
        };
        xhr = new XMLHttpRequest();
        if (xhr['overrideMimeType'])
        {
            xhr['overrideMimeType']('text/xml')
        };
        xhr['onreadystatechange'] = function ()
        {
            if (xhr['readyState'] == 4 && Q64 != 45 && Q64 != 88)
            {
                clearTimeout(Load_timer);
                P85 = 1;
                if (xhr['status'] == 200 && xhr['responseText'])
                {
                    if (!isNaN(xhr['responseText']))
                    {
                        if (xhr['responseText'] > 0)
                        {
                            return R19(xhr['responseText'])
                        }
                        else
                        {
                            return
                        }
                    }
                    else
                    {
                        return R9(xhr['responseText'], 0)
                    }
                }
                else
                {
                    return R19(Q64)
                }
            }
        };
        xhr['open']('GET', 'http://' + P86 + '/@?key_cod=' + Q64, true);
        xhr['send']()
    }
    catch (e)
    {
        R19(Q64)
    }
};

function Y23()
{
    var id = 10 * Z20 + Z16;
    if (Z21[id][1] == O19[4])
    {
        F93(O19[4], P59)
    }
    else
    {
        if (Z21[id][1] == O19[5])
        {
            F93(O19[5], Q90)
        }
    }
};

function Y37()
{
    if (Y36())
    {
        A['A29'] = A['A29'] ? 0 : 1
    };
    setTimeout('R9("Inbetriebnahme aktivieren Widget " + (A.A29?"erlaubt":"verboten")+" !<br>Ausschalten des Geräts !",0,5000,1)', 2000)
};

function Y8(txt, rv)
{
    var j;

    function walk(hr, key)
    {
        var k, v, vl = hr[key];
        if (vl && typeof vl === 'object')
        {
            for (k in vl)
            {
                if (Object['prototype']['hasOwnProperty']['call'](vl, k))
                {
                    v = walk(vl, k);
                    if (v !== undefined)
                    {
                        vl[k] = v
                    }
                    else
                    {
                        delete vl[k]
                    }
                }
            }
        };
        return rv['call'](hr, key, vl)
    };
    txt = String(txt);
    P94['lastIndex'] = 0;
    if (P94['test'](txt))
    {
        txt = txt['replace'](P94, function (a)
        {
            return '\\u' + ('0000' + a['charCodeAt'](0)
                .toString(16))['slice'](-4)
        })
    };
    if (/^[\],:{}\s]*$/ ['test'](txt['replace'](/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')['replace'](
            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')['replace'](/(?:^|:|,)(?:\s*\[)+/g, '')))
    {
        j = eval('(' + txt + ')');
        return typeof rv === 'function' ? walk(
        {
            "": j
        }, '') : j
    };
    throw new SyntaxError('Y8')
};

function Y14(sig)
{
    var res = 'signature=';
    sig = sig['replace']('s=', '');
    for (var k = 80; k > -1; k--)
    {
        if (k == 63)
        {
            res += sig['charAt'](0)
        }
        else
        {
            if (k == 0)
            {
                res += sig['charAt'](63)
            }
            else
            {
                res += sig['charAt'](k)
            }
        }
    };
    return res
};

function R85(r)
{
    for (var j in r)
    {
        var m = R98(r[j], 'itag%3D', '%26'),
            ne = 0;
        if (m)
        {
            switch (m)
            {
            case '37':
                ne = 1080;
                break;
            case '22':
                ne = 720;
                break;
            case '35':
                ne = 480;
                break;
            case '18':
                ne = 360;
                break;
            case '36':
                ne = 240;
                break
            };
            if (ne)
            {
                var arr = r[j]['split']('%26');
                r[j] = '';
                var r1 = '',
                    r2 = '';
                for (var k in arr)
                {
                    if (arr[k])
                    {
                        arr[k] = R95(arr[k]);
                        if (arr[k]['indexOf']('url=') == 0)
                        {
                            r1 = arr[k]['replace']('url=', '')
                        }
                        else
                        {
                            if (arr[k]['indexOf']('sig=') == 0 || arr[k]['indexOf']('signature=') == 0)
                            {
                                r2 = arr[k]['replace']('sig=', 'signature=')
                            }
                            else
                            {
                                if (arr[k]['indexOf']('s=') == 0)
                                {
                                    r2 = Y14(arr[k])
                                }
                            }
                        }
                    };
                    if (r1 && (r1['indexOf']('sig=') > 0 || r1['indexOf']('signature=') > 0 || r1['indexOf']('&s=') > 0))
                    {
                        if (r1['indexOf']('&s=') >= 0)
                        {
                            var uar = r1['split']('&s=')[1];
                            r[j] = uar[0] + '&' + DYce(uar[1]['split']('&')[0])
                        }
                        else
                        {
                            r[j] = r1['replace']('sig=', 'signature=')
                        };
                        break
                    }
                    else
                    {
                        if (r1 && r2)
                        {
                            r[j] = r1 + '&' + r2;
                            break
                        }
                    };
                };
                if (!r[j])
                {
                    continue
                };
                P59['push']([r[j], ne]);
                if (!Q3 && ne <= Number(O12[A['A16']]))
                {
                    Z18 = P59['length'] - 1;
                    R42(r[j])
                }
            };
            if (ne == 240)
            {
                break
            }
        }
        else
        {
            if (j > 3)
            {
                break
            }
        }
    };
    if (!Q3)
    {
        if (P59['length'])
        {
            R42(P59[0][0])
        }
        else
        {
            Y6(12)
        }
    }
};

function F87(n)
{
    if (Q40['length'] == 0)
    {
        Q40 = Q_39
    };
    var r = [];
    if (n)
    {
        for (var i in Q_39)
        {
            if (new RegExp('(^|\s|_|-)(' + n + ')', 'i')['test'](dTg(Q_39[i][0])) && Q_39[i][5] != 'SearchName')
            {
                r['push'](dTg(Q_39[i][0]))
            }
        }
    };
    if (r['length'] || !n)
    {
        if (n)
        {
            if (Q40['length'] == Q_39['length'])
            {
                F44()
            };
            F8();
            r['sort']();
            Q_39 = [];
            for (var i in r)
            {
                for (var j in Q40)
                {
                    if (dTg(Q40[j][0]) == r[i])
                    {
                        Q_39['push'](Q40[j]);
                        break
                    }
                }
            }
        }
        else
        {
            Q_39 = Q40;
            Q40 = [];
            P56 = 1;
            P55['pop']()
        };
        F90();
        F21()
    }
    else
    {
        R9('Nichts gefunden !', 1);
        LoadTimer('Z2="";Z3=0;Z13=0;', 2000)
    }
};

function R83(par)
{
    for (var i = Number(par[4]); i > -1; i--)
    {
        switch (i)
        {
        case 3:
            ne = 720;
            break;
        case 2:
            ne = 480;
            break;
        case 1:
            ne = 360;
            break;
        case 0:
            var ne = 240;
            break
        };
        P59['push']([par[0] + 'u' + par[1] + '/videos/' + par[2] + '.' + ne + '.mp4', ne]);
        if (!Q3 && ne <= Number(O12[A['A16']]))
        {
            R42(P59[P59['length'] - 1][0]);
            Z18 = P59['length'] - 1
        }
    };
    if (!Q3)
    {
        if (P59['length'])
        {
            R42(P59[0][0])
        }
        else
        {
            Y6(12)
        }
    }
};

function Y66(pr)
{
    for (var i = pr['length'] - 1; i > -1; i--)
    {
        var ne = 0;
        if (pr[i]['indexOf']('720.mp4') > 0)
        {
            ne = 720
        }
        else
        {
            if (pr[i]['indexOf']('480.mp4') > 0)
            {
                ne = 480
            }
            else
            {
                if (pr[i]['indexOf']('360.mp4') > 0)
                {
                    ne = 360
                }
                else
                {
                    if (pr[i]['indexOf']('240.mp4') > 0)
                    {
                        ne = 240
                    }
                }
            }
        };
        if (!ne)
        {
            continue
        };
        P59['push']([pr[i], ne]);
        if (!Q3 && ne <= Number(O12[A['A16']]))
        {
            R42(pr[i]);
            Z18 = P59['length'] - 1
        }
    };
    if (!Q3)
    {
        if (P59['length'])
        {
            R42(P59[0][0])
        }
        else
        {
            Y6(12)
        }
    }
};

function Y1(ul)
{
    var ar = ul['split']('['),
        ext = ar[1]['split'](']')[1],
        pr = ar[1]['split'](']')[0]['split'](','),
        ne;
    for (var i in pr)
    {
        ne = 0;
        if (!pr[i])
        {
            continue
        };
        switch (pr[i])
        {
        case '1080':
            ;
        case '1080-':
            ;
        case '9':
            ne = 1080;
            break;
        case '720':
            ;
        case '720-':
            ;
        case '8':
            ne = 720;
            break;
        case '480':
            ;
        case '480-':
            ;
        case '7':
            ne = 480;
            break;
        case '360':
            ;
        case '':
            ;
        case '6':
            ne = 360;
            break;
        case '240':
            ;
        case '4':
            ne = 240;
            break
        };
        if (!ne)
        {
            continue
        };
        P59['push']([ar[0] + pr[i] + ext, ne]);
        if (!Q3 && ne <= Number(O12[A['A16']]))
        {
            R42(ar[0] + pr[i] + ext);
            Z18 = P59['length'] - 1
        }
    };
    if (!Q3)
    {
        if (P59['length'])
        {
            R42(P59[0][0])
        }
        else
        {
            Y6(12)
        }
    }
};

function Y70(pr)
{
    try
    {
        var ne = 0,
            b = 0;
        for (var i = pr['length'] - 1; i > -1; i--)
        {
            var ar = (pr[i]['split']('?i=')[1])['split']('x')[1]['split']('_');
            if (ar['length'] < 2 || isNaN(ar[0]) || isNaN(ar[1]))
            {
                continue
            };
            ar[0] = Number(ar[0]);
            ar[1] = Number(ar[1]);
            if (!ar[0])
            {
                continue
            };
            if (pr[i]['indexOf']('hls-vod') > 0)
            {
                pr[i] += '#vod'
            };
            if (ne == ar[0])
            {
                if (b < ar[1])
                {
                    P59[P59['length'] - 1][0] = dSp(pr[i])
                }
            }
            else
            {
                P59['push']([dSp(pr[i]), ar[0]])
            };
            if (!Q3 && ar[0] <= Number(O12[A['A16']]))
            {
                R42(P59[P59['length'] - 1][0]);
                Z18 = P59['length'] - 1
            };
            ne = ar[0];
            b = ar[1]
        };
        if (!Q3)
        {
            if (P59['length'])
            {
                R42(P59[0][0])
            }
            else
            {
                Y6(12)
            }
        }
    }
    catch (e)
    {
        Y6(12)
    }
};

function Y57(t)
{
    Q83 = 0;
    Y61('Y11(\'pl_name_box\').style.whiteSpace=\'nowrap\';Y59();', t)
};

function Y58()
{
    Y61('Y12(\'pl_name_box\');Y57(1500);', 500)
};

function Y59()
{
    Y61('Q83-=4;Y11(\'pl_name_box\').style.marginLeft=Q83+\'px\';if(Q83>-Q82)Y59();else Y60();', 50)
};

function Y60()
{
    Y61('Y13(\'pl_name_box\');Y11(\'pl_name_box\').style.marginLeft=\'0px\';Y58();', 1000)
};

function Y26()
{
    try
    {
        xhrAbort();
        LoadTimer('xhrAbort();R9(\'Der Server antwortet nicht !\',1);', 20000);
        xhr = new XMLHttpRequest();
        if (P7 && xhr['overrideMimeType'])
        {
            xhr['overrideMimeType']('text/xml')
        };
        xhr['onreadystatechange'] = function ()
        {
            if (Load_timer < 0)
            {
                return
            };
            if (xhr['readyState'] == 4)
            {
                clearTimeout(Load_timer);
                if (xhr['status'] == 200)
                {
                    if (!xhr['responseText'])
                    {
                        return R9('Fehlerdatenbankstruktur №1 !', 1)
                    };
                    if (xhr['responseText'] === '404')
                    {
                        F666(['1'], A['A4'] + '_ya_name_index_url.dat');
                        return R9(tRe('Die Basis für diese Region ist nicht auf dem Server'), 0, 7000, 1)
                    };
                    var tr = xhr['responseText']['replace'](/\r/gm, '')['split']('\x0A');
                    if (tr['length'] > 1)
                    {
                        tr['pop']()
                    };
                    xhrAbort();
                    if (tr['length'] > 1)
                    {
                        var cu = 0;
                        for (var i in tr)
                        {
                            var t = tr[i]['split']('|');
                            if (t['length'] != 3 || !t[0] || !t[1] || !t[2])
                            {
                                continue
                            };
                            O2[t[0]['toLowerCase']()] = t[1];
                            O3[t[1]] = t[2];
                            O5[t[0]['toLowerCase']()] = t[2];
                            cu++
                        };
                        if (cu == 0)
                        {
                            return R9('Fehlerdatenbankstruktur №2 !', 1)
                        };
                        F666(tr, A['A4'] + '_ya_name_index_url.dat');
                        P36 = 1;
                        if (!P82)
                        {
                            Y25();
                            R9('Die Grundlage für Applets erstellt Yandex !', 1)
                        }
                    }
                    else
                    {
                        R9('Fehlerdatenbankstruktur №3 !', 1)
                    }
                }
                else
                {
                    R9('kein Server : ' + xhr['status'], 1)
                }
            }
        };
        P100 = 'base/' + A['A4'] + '_ya_name_index_url.dat';
        xhr['open']('GET', P100, true);
        xhr['send']()
    }
    catch (e)
    {
        R9('Fehler allg. :' + e, 0)
    }
};

function getURLya()
{
    try
    {
        var a = '';
        url =
            'http://anonymouse.org/cgi-bin/anon-www.cgi/http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fm.tv.yandex.ru%2F' +
            A['A4'] + '%22%20and%20xpath%3D%27%2F%2F*[contains%28%40class%2C%22select__optgroup%22%29]%27';
        F35('<br><center><b style=\'color:yellow;font-size:22px;\'>Vorsicht !</b></center><center><br>Eine Datenbank-Kanälen ' + A['A4'] +
            ' Region .<br>warten...<center>', '')
        xhrAbort();
        LoadTimer('xhrAbort();', 6000);
        get_b = new XMLHttpRequest();
        if (get_b['overrideMimeType'])
        {
            get_b['overrideMimeType']('text/xml')
        };
        get_b['onreadystatechange'] = function ()
        {
            if (Load_timer < 0)
            {
                return
            };
            if (get_b['readyState'] == 4)
            {
                clearTimeout(Load_timer);
                if (get_b['status'] == 200)
                {
                    a = get_b['responseText'];
                    a = a['split']('<results>');
                    a = a[1]['split']('</results>');
                    a = a[0];
                    a = a['replace'](/(<\/option><option class="b-select__optgroup" value=")/g, ',');
                    a = a['replace'](/[^\,0-9]/g, '');
                    a = a['replace'](/,/g, '%2C');
                    all_chann_url = 'https://m.tv.yandex.' + 'ru' + '/' + A['A4'] + '/?channel=' + a;
                    if (seriesC || seriesD || seriesE)
                    {
                        all_chann_url = _l[9] + encodeURIComponent(all_chann_url);
                    }
                    F35('<br><center><b style=\'color:green;font-size:16px;\'>Kanalliste ' + A['A4'] +
                        ' Region erhalten.<br/>Eine Datenbank...</b> <br/>Sie müssen warten, <br/><br/>auf TVs C/D/E Serie, kann dieser Schritt eine lange Zeit dauern (4-5 Minuten)</center>',
                        '');
                    return all_chann_url;
                }
                else
                {
                    F35(
                        '<br><center><b style=\'color:pink;font-size:22px;\'>Die Grundlage für die Applets von Yandex wird nicht erstellt, ist der Server nicht verfügbar yandex!</b></center>',
                        '')
                    return "";
                };
            }
        };
        get_b['open']('GET', url, true);
        R99(get_b);
        get_b['send']()
    }
    catch (c)
    {}
};

function getBASEya()
{
    try
    {
        var a = [];
        url = all_chann_url;
        xhrAbort();
        LoadTimer('xhrAbort();', 35000);
        get_b = new XMLHttpRequest();
        if (get_b['overrideMimeType'])
        {
            get_b['overrideMimeType']('text/xml')
        };
        get_b['onreadystatechange'] = function ()
        {
            if (Load_timer < 0)
            {
                return
            };
            if (get_b['readyState'] == 4)
            {
                clearTimeout(Load_timer);
                if (get_b['status'] == 200)
                {
                    a = get_b['responseText'];
                    if (a['indexOf']('</head><body>') > 0)
                    {
                        a = a['split']('<div class="b-schedule">');
                        a = a[1]['split']('</div><div class="b-select">');
                        a = a[0];
                        if (seriesC || seriesD || seriesE)
                        {
                            a = a['replace'](/%2F/g, '/');
                            a = a['replace'](/%3A/g, ':')
                            a = a['replace'](/&amp;b=24/g, '');
                        }
                        a = a['replace'](/<table class="b-schedule__list" cellpadding="0" cellspacing="0"><tr>/g, '');
                        a = a['replace'](/<\/a><\/th><\/tr><tr><td class="time"><a href="/g, '*');
                        a = a['replace'](/<\/td><\/tr><\/table>/g, '^\n');
                        a = a['replace'](/(\*)(.*)(\^)/gm, '|');
                        a = a['replace'](/( class="logo"><img src=")(.*)(avatars.yandex.net\/)/g, '>');
                        a = a['replace'](/<\/th><th class="channel"><a href="/g, '|');
                        a = a['replace'](/(<\/a><\/td><td>)|(<\/td>)/g, '');
                        a = a['replace'](/(" title)(.*)(\|)(\D*|\d*|\S*)(\/channels\/)/gm, '|');
                        a = a['replace'](/(<th>)(.*)(\|)(.*)(">)(.*)(\|)/gm, '$6|$4|$2');
                        a = a['split']('\x0A');
                        for (var g in a)
                        {
                            var f = a[g]['split']('|');
                            f['splice'](0, 1, f[0]['toLowerCase']());
                            a[g] = f['join']('|');
                        }
                        if (a['length'] > 1)
                        {
                            a['pop']()
                        };
                        xhrAbort();
                        if (a['length'] > 1)
                        {
                            var cu = 0;
                            for (var i in a)
                            {
                                var t = a[i]['split']('|');
                                if (t['length'] != 3 || !t[0] || !t[1] || !t[2])
                                {
                                    continue
                                };
                                O2[t[0]['toLowerCase']()] = t[1];
                                O3[t[1]] = t[2];
                                O5[t[0]['toLowerCase']()] = t[2];
                                cu++
                            };
                            if (cu == 0)
                            {
                                return R9('Fehlerdatenbankstruktur №2!', 1)
                            };
                            F666(a, A['A4'] + '_ya_name_index_url.dat');
                            P36 = 1;
                            if (!P82)
                            {
                                Y25();
                                R9('Die Grundlage für Applets erstellt von Yandex !', 1)
                            }
                        }
                        else
                        {
                            R9('Fehlerdatenbankstruktur №3!', 1)
                        }
                    }
                    else
                    {
                        return "";
                        F35('<br><center><b style=\'color:pink;font-size:16px;\'>Error! Die Grundlage für die Applets von Yandex wurde noch nicht erstellt.</b></center>', '')
                    }
                }
            }
        };
        get_b['open']('GET', url, true);
        R99(get_b);
        get_b['send']()
    }
    catch (c)
    {}
};