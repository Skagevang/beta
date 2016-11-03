webpackJsonp([134,283],{1176:function(e,t,n){e.exports={frontmatter:n(512),content:n(1826)}},1826:function(e,t){e.exports='<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Denne oppgaven bygger på koden du skrev i oppgaven <a href=../partikkel_animasjon/partikkel_animasjon.html>Partikkel-animasjon</a>. Så dersom du ikke har gjort den, så anbefaler vi å gjøre <a href=../partikkel_animasjon/partikkel_animasjon.html>Partikkel-animasjon</a> før du fortsetter på denne oppgaven.</p> <figure>Her skal vi videreutvikle <code>partikkel</code>-animasjonen vår slik at den ser slik ut:</figure> <p><canvas id=canvas width=500 height=500></canvas></p> <script>function draw(){var e={x:250,y:250,xSpeed:Math.floor(20*Math.random()-20*Math.random()),ySpeed:Math.floor(20*Math.random()-20*Math.random()),size:10};partikkelListe.push(e),ctx.clearRect(0,0,500,500);for(var t=0;t<partikkelListe.length;t++)e=partikkelListe[t],ctx.fillStyle="red",ctx.fillRect(e.x,e.y,e.size,e.size),e.x=e.x+e.xSpeed,e.y=e.y+e.ySpeed,e.size=.96*e.size}var canvas,ctx,partikkelListe=[];window.onload=function(){canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),setInterval(draw,30)}</script> <p>Merk at i denne oppgaven vil du kun få beskrevet hva du skal gjøre med et par hint. Du vil ikke få presentert den ferdige koden.</p> </section> <section class=activity id=steg-1-hva-ma-gjores> <h1 class=activity id=steg-1-hva-ma-gjores>Steg 1: Hva må gjøres?</h1> <p>I denne oppgaven får du kun små eksempler på kode for å hjelpe deg til å komme frem til resultatet. Derfor skal vi gå gjennom tankemåten til å lage animasjonen over ved å presentere en liste over ting som må gjøres:</p> <p>La oss studere animasjonen og analysere hva den inneholder:</p> <ul> <li>Et partikkel i midten av skjermen som alltid er der. Hva kan være grunnen til det?</li> <li>Partiklene som går ut fra midten og blir mindre og mindre jo lengre ut de går</li> <li>Hastigheten til hvert partikkel varierer</li> <li>Retningen varierer, men et partikkel reiser i en rett linje</li> <li>Det er mange partikler som blir til hvert sekund</li> </ul> <p>La oss analysere punktene over, og se hva på hva vi må programmere. Vi starter fra toppen:</p> <ul> <li>Siden partiklene går ut fra midten må jo alle starte der, derfor må vi setter <code>x</code>- og <code>y</code>-posisjonen til å være det samme for hvert partikkel.</li> <li>Siden partiklene blir mindre og mindre, men starter med samme størrelse, må vi endre på <code>størrelser</code>-attributtet til partiklet på samme måte som vi gjør når vi skal flytte på det. Tips: bruk ganging (<code>*</code>) for å få en bedre minknings-effekt.</li> <li>Siden hastigheten varierer kan vi bruke <code>Math.random</code> til <code>xSpeed</code> og <code>ySpeed</code>, her er et forslag til hvordan det kan se ut:</li> </ul> <section class=tip id=""> <h2 class=tip id=""></h2> <pre><code class=language-js>xSpeed: <span class=hljs-built_in>Math</span>.floor(<span class=hljs-built_in>Math</span>.random()*<span class=hljs-number>20</span> - <span class=hljs-built_in>Math</span>.random()*<span class=hljs-number>20</span>));\n</code></pre> <p>Dette vil gjøre at du får et positivt eller negativt tall med varierende hastighet fra -20 til 20 i <code>x</code>-retning. Gjør det samme for <code>y</code>-retningen for å få partiklene til å bevege seg overalt på skjermen.</p> </section> <section id=-2> <h2 id=-2></h2> <ul> <li>For å få dem til å følge en rett linje bruker vi bare endringer i <code>x</code>- og <code>y</code>-retning fra forrige oppgave: <code>particle.x = particle.x + particle.xSpeed;</code>.</li> <li>Siden det er mange som blir laget på engang må vi for hver gang <code>draw()</code> blir kalt, legge et nytt partikkel i en <code>liste</code> og bruke en <code>for</code>-løkke til å endre hvert partikkel sine attributter og gjenta dette for alle elementene i listen.</li> </ul> <section id=prov-selv-forst-dersom-du-ikke-far-det-til-kan-du-benytte-deg-av-hintene-under> <h4 id=prov-selv-forst-dersom-du-ikke-far-det-til-kan-du-benytte-deg-av-hintene-under>Prøv selv først! Dersom du ikke får det til kan du benytte deg av hintene under.</h4> </section> </section> </section> <section class=activity id=hint> <h1 class=activity id=hint>Hint</h1> <section class=tip id=for-lokke> <h2 class=tip id=for-lokke>For-løkke</h2> <ul> <li>En <code>for</code>-løkke som skal gå gjennom en liste vil se slik ut:</li> </ul> <pre><code class=language-js><span class=hljs-keyword>for</span>(<span class=hljs-keyword>var</span> i = <span class=hljs-number>0</span>; i&lt;listeNavn.length; i++){\n    <span class=hljs-comment>//kode</span>\n    element = listeNavn[i] <span class=hljs-comment>// element blir nå det i-te elementet i listen, "i" blir her et tall fra 0 til lengden av listen.</span>\n}\n</code></pre> </section> <section id=-3> <h2 id=-3></h2> </section> <section class=tip id=oppbygning-av-koden> <h2 class=tip id=oppbygning-av-koden>Oppbygning av koden</h2> <p>For at du skal kunne bygge opp koden slik at partiklene oppfører seg som den gjør i animasjonen må vi tenke over hvor vi putter koden vår.</p> <ul> <li>All endring på partikkel-objektet bør skje i <code>for</code>-løkken. På denne måten vil endringene skje gradvis som gjør at animasjonen blir finere.</li> <li>Når man bør legge elementer i <code>partikkel</code>-lista bør du eksperimentere litt med.</li> <li>Du bør også eksperimentere litt med når du bruker <code>clearRect()</code>, klarer du å se hva som er forskjellen på om du legger den i eller utenfor <code>for</code>-løkken?</li> </ul> </section> <section id=-4> <h2 id=-4></h2> </section> </section>'}});