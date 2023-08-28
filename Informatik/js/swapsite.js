/*
Hier wird eine Funktion namens "link" definiert, welche den Parameter "url" entgegen nimmt.
Der Parameter, welcher als String an die Funktion übergeben wird, kann danach die Umgebung 
des Browserfensters mit einer simplen "location.href" Eingabe verändert werden. Das Ziel
für die Fensteränderung wird hierbei durch den Parameter definiert. Später wird diese Funktion
in "onclick" Anweisungen verwendet, um auf eine Website, die dem jeweiligen Bild entspricht zu verlinken. 
Eine Beispielanwendung wäre beispielsweise die folgende: onclick="link('https://www.ekg-koeln.de')"
*/
function link(url) {
    window.location.href = url;
  }
  