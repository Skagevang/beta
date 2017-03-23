webpackJsonp([78,385],{1208:function(e,l,s){e.exports={frontmatter:s(336),content:s(2112)}},2112:function(e,l,s){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Denne oppgaven er en lett omvisning til Elm. Vi skal se på hva Elm egentlig er før vi laster ned og installerer en masse ting, så det eneste vi trenger er en nettleser.</p> <p>Elm kjører i nettleseren. I nettleseren viser vi fram ting med noe som heter HTML. Det er viktig å forstå hva HTML er. <a href=../../web/hvor_er_html/hvor_er_html.html>Gjør oppgaven Hvor er HTML? Jeg ser den ikke!</a> i Web-kurset først om du ikke har hørt om HTML før.</p> </section> <section class=activity id=hei-verden> <h1 class=activity id=hei-verden>Hei, verden!</h1> <ul> <li> <p>Åpne nettsiden <a href=http://elm-lang.org/try>Try Elm</a>. Denne ser slik ut:</p> <figure><img src="+s(2740)+' alt=""/></figure> </li> <li> <p>Trykk på <strong>Hello, World!</strong> til høyre, så får vi se et enkelt Elm-program:</p> <figure><img src='+s(2739)+' alt=""/></figure> <p>Hmm! Det gjorde ikke så mye. Skrev kun ut &quot;Hello, World!&quot; La oss gjøre det litt mer spennende, og lære Elm norsk. Jeg heter Teodor, så jeg endrer programmet til følgende:</p> <pre><code class=language-elm><span class=hljs-import><span class=hljs-keyword>import</span> Html <span class=hljs-keyword>exposing</span> <span class=hljs-container>(text)</span></span>\n\n<span class=hljs-title>main</span> =\n  text <span class=hljs-string>"Hei, Teodor! Godt å se deg!"</span>\n</code></pre> <p>Hva heter du? Hva vil du programmet skal skrive ut til deg?</p> <p>Trykk <code>Compile</code> for å se!</p> </li> </ul> </section> <section class=protip id=dokumenter-i-html-og-elm> <h1 class=protip id=dokumenter-i-html-og-elm>Dokumenter i HTML og Elm</h1> <p>HTML og Elm bygger opp dokumenter som et <strong>tre</strong>. Det betyr at elementer kan være inne i andre elementer. Eksempel:</p> <ul> <li><code>div</code> <ul> <li><code>h1</code>: Stor overskrift</li> <li><code>p</code>: Første avsnitt.</li> <li><code>p</code>: Andre avsnitt.</li> </ul> </li> </ul> <p><code>div</code>-elementet inneholder tre elementer: <code>h1</code>, <code>p</code> og <code>p</code>.</p> <p>Dette ser slik ut i HTML:</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-title>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-title>h1</span>&gt;</span>Stor overskrift<span class=hljs-tag>&lt;/<span class=hljs-title>h1</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-title>p</span>&gt;</span>Første avsnitt.<span class=hljs-tag>&lt;/<span class=hljs-title>p</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-title>p</span>&gt;</span>Andre avsnitt.<span class=hljs-tag>&lt;/<span class=hljs-title>p</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-title>div</span>&gt;</span>\n</code></pre> <p>og slik ut i Elm:</p> <pre><code class=language-elm><span class=hljs-title>div</span> []\n  [ (h1 [] [text <span class=hljs-string>"Stor overskrift"</span>])\n  , (p [] [text <span class=hljs-string>"Første avsnitt."</span>])\n  , (p [] [text <span class=hljs-string>"Andre avsnitt."</span>])\n  ]\n</code></pre> <p>Vi kommer tilbake til hva <code>[]</code> betyr.</p> </section> <section class=activity id=hva-vil-du-lage> <h1 class=activity id=hva-vil-du-lage>Hva vil du lage?</h1> <p>Tenk på hva du vil lage, og skriv svaret med Elm!</p> <ul> <li>Vil du lage webapplikasjon?</li> <li>Vil du lage spill?</li> <li>Hvem skal bruke appen/spillet ditt?</li> </ul> <section class=protip id=nar-noe-gar-feil> <h2 class=protip id=nar-noe-gar-feil>Når noe går feil</h2> <p>Obs! Elm sier ifra når du skriver noe Elm ikke skjønner. Hvis jeg skriver <code>div</code> feil, får jeg en feilmelding:</p> <figure><img src='+s(2738)+' alt=""/></figure> <p>Når noe ikke fungerer, les feilmeldingen og se om den kan hjelpe deg å rette feilen!</p> <ul> <li><code>Module `Html` does not expose `divv`</code> betyr at Html-modulen ikke inneholder noen funksjon som heter <code>divv</code>.</li> <li><code>Maybe you want one of the following? div</code> foreslår å bruke <code>div</code> i stedet. Kanskje det var hva du mente?</li> </ul> </section> </section> <section class=activity id=hva-har-andre-laget> <h1 class=activity id=hva-har-andre-laget>Hva har andre laget?</h1> <p>Nå som du har tenkt litt på hva du vil lage, la oss se på hva andre har laget.</p> <p>Åpne <a href=http://elm-lang.org/try>elm-lang.org/try</a>. Ser du eksemplene til høyre?</p> <p>Oppdater siden for å få tilbake koden som den var før du begynte å redigere den.</p> <ul> <li>Åpne <strong>Buttons</strong>. <ul> <li>Kan du endre teksten på knappene til &quot;Mer!&quot; og &quot;Mindre!&quot;?</li> <li>Kan du få pluss-knappen til å legge til 5 hver gang du trykker?</li> </ul> </li> <li>Åpne <strong>Clock</strong>. <ul> <li> <p>Kan du gjøre viseren kortere?</p> </li> <li> <p>Kan du gjøre viseren rosa?</p> <p>Viseren har fra før av fargen <code>#023963</code>. En rosafarge kan være <code>#F0F</code>. Du kan finne andre farger med en <a href=http://htmlcolorcodes.com/color-picker/ >fargevelger</a>. Vi har brukt <strong>Hex</strong>-koden til fargen.</p> </li> </ul> </li> </ul> <p>Har du fått flere gode ideer til hva du vil gjøre?</p> <ul> <li>Oppdater Elm-dokumentet du lagde i stad med nye ideer!</li> </ul> </section> <section id=jeg-lurer-pa-flere-ting> <h1 id=jeg-lurer-pa-flere-ting>Jeg lurer på flere ting!</h1> <p>Elm har meget god dokumentasjon:</p> <ul> <li>Les i <a href=https://guide.elm-lang.org/ >guiden</a> når du vil lære noe nytt</li> <li>Søk i <a href=http://package.elm-lang.org/ >referansen</a> når du lurer på hva en funksjon gjør.</li> </ul> </section> '},2738:function(e,l,s){e.exports=s.p+"_/oppgaver/src/elm/01_prov_i_nettleser/div_feil.d0471a.png"},2739:function(e,l,s){e.exports=s.p+"_/oppgaver/src/elm/01_prov_i_nettleser/hello.dfa414.png"},2740:function(e,l,s){e.exports=s.p+"_/oppgaver/src/elm/01_prov_i_nettleser/tom_try_elm.c82ab9.png"}});