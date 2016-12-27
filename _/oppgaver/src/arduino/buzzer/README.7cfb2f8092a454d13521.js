webpackJsonp([354,374],{1179:function(e,n,o){e.exports={frontmatter:o(281),content:o(2010)}},2010:function(e,n){e.exports='<section id=informasjon-til-veiledere> <h1 id=informasjon-til-veiledere>Informasjon til veiledere</h1> <section id=laeringsmal> <h2 id=laeringsmal>Læringsmål</h2> <p>Oppgaven «Buzzer» introduserer følgende konsepter:</p> <ul> <li>Bruke en buzzer for å spille lyd.</li> <li>Lysfølsom motstand.</li> <li><code>tone</code>, <code>analogRead</code> og <code>map</code>.</li> </ul> </section> </section> <section id=forklaringer> <h1 id=forklaringer>Forklaringer</h1> <section id=lysfolsom-motstand> <h2 id=lysfolsom-motstand>Lysfølsom motstand</h2> <p>En lysfølsom motstand endrer motstanden sin basert på lyset den får inn. Jo høyere lysstyrke den leser, jo lavere motstand yter den. Når vi bruker <code>INPUT_PULLUP</code> setter vi en positiv spenning ut fra pinnen. Jo høyere motstand i kretsen, jo høyere vil tallet vi leser ut være.</p> <p>Dvs. at jo mer lys det er i rommet, jo lavere tall leser vi ut.</p> </section> <section id=pwm> <h2 id=pwm>PWM</h2> <p>PWM står for &quot;Pulse With Modulation&quot;. PWM gjør at vi kan sende et &quot;analogt&quot; signal på en digital pin. På en ikke-PWM pin vil en sende enten HIGH eller LOW kontinuerlig, som vil si å enten sende 5v eller 0v, til en velger å sende det motsatte. Det PWM gjør er å sende 5v i deler av en periode, for så å slå av strømmen resten av perioden. Jo høyere verdi en setter utgangen til, jo større del av perioden vil vi sende 5v.</p> <p>Du kan lese mer om PWM på <a href=https://www.arduino.cc/en/Tutorial/PWM>Arduino sine sider</a>.</p> </section> <section id=""> <h2 id=""><code>analogWrite</code></h2> <p><code>analogWrite</code> bruker PWM for å kunne sende &quot;analoge&quot; signaler over en pin. Dette lar oss blant annet styre lysstyrken på en lysdiode, hastigheten på en motor, eller fargeintensiteten på en RGB diode.</p> <p>En verdi på 0 vil sende 0v ut, en verdi på 255 vil sende 5v hele perioden.</p> </section> <section id=-2> <h2 id=-2><code>analogRead</code></h2> <p><code>analogRead</code> er en digital utlesning av den analoge spenningen på en pinne.</p> </section> <section id=-3> <h2 id=-3><code>tone</code></h2> <p><code>tone</code> spiller av en frekvens en PWM kapabel pin. Du kan få den til å spille av en frekvens kontinuerlig med <code>tone(pin, frekvens)</code>, som så kan stoppes med <code>noTone(pin)</code>. Du kan også generere en tone for en gitt tid med <code>tone(pin, frekvens, millisekunder)</code>, som vil sende en tone i gitt antall millisekunder.</p> </section> </section> '}});