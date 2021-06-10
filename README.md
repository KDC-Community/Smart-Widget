# Samsung Smart TV-Widget / Addon
# D - H Serie. Orsay OS only!
# No Tizen OS!
#
![Stream Medial Deutschland](icon.png)

Mit diesem Widget kann man Wiedergabelisten abspielen.
Zudem kann man einen IP Proxy einstellen (IP und Port), MAC Adresse ändern, wie im Stalker Player.

Unterstützte Dateitypen: "http" , "https" , "rtmp" , "udp" , "mms" , "rtsp" , "hls" , "ts" , "m3u" , "m3u8" , "flash"

Um dieses Addon zu installieren, benötigt man einen USB Stick und einen Samsung TV der Serie D bis H.

Der USB Stick sollte in FAT32 formatiert werden. Das Widget auf den USB-Stick schieben und entpacken, sowie zusätzlich noch als .zip in den Main Ordner.

Im Main Ordner des USB Sticks befindet sich dann die zip sowie ein entzippter Ordner mit dem Namen "InstallStreamMedialDeutschland".
USB Stick in den TV stecken und das Widget über den Smart-Hub / Apps starten.

Der TV sollte bei jedem Wechsel des USB Sticks, ausgeschaltet sein!!!

Alternativ kann man das Widget nun auch unter dem USB Symbol, dann auf Scanner USB klicken, versuchen zu installieren.
Somit wäre es auf dem TV und viel schneller. Da mein TV gerootet ist, habe ich diese Methode der Widgetistallation nicht getestet!

Wenn man jedoch einen gerooteten TV hat (SamyGO), dann sollte man sich das Widget per FTP oder Telnet, in den Ordner: /mtd_unirw/rwcommon/widgets/user schieben.
Somit ist das Widget sehr viel schneller in der Ausführung.  :-)
Die Umschaltzeiten sind ein Traum!

Möchte man zudem eine eigene Wiedergabeliste hinzufügen? Kein Problem! 
Dann muss die Playliste in den Main Ordner des USB Sticks und umbenannt werden, in "My.m3u" oder "My.xml".
Dann im Widget das USB Symbol anwählen und entsprechende Wiedergabeliste starten.



Möchte man Inhalte vom USB Stick, dann wäre das der Pfad: /dtv/usb/sda1/sam.xml
Die sam.xml muss dann im Main Ordner des USB Sticks liegen.
Diesen Pfad /dtv/usb/sda1/sam.xml sollte man dann zudem in der start.xml eintragen.
In der sam.xml dann eigene Adressen eintragen!

Viel Spass beim Umschalten! :-)