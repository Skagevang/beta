webpackJsonp([375,418],{1340:function(s,e,n){s.exports={frontmatter:n(367),content:n(2493)}},2493:function(s,e){s.exports='<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>I denne oppgaven skal vi lage vårt eget spill!</p> <p>Vi lært mye allerede! Her er en oppsummering:</p> <p><strong>Verktøy til Elm-utvikling</strong>:</p> <ul> <li>Bruke Try Elm til å lage programmer</li> <li>Bruke Elm Repl til å lage funksjoner</li> <li>Bruke Elm Repl til å teste funksjoner</li> <li>Bruke Elm Reactor til å lage programmer</li> </ul> <p><strong>Programmeringsspråket Elm</strong>:</p> <ul> <li>Vite hva en funksjon er</li> <li>Vite hva en modul er</li> </ul> <p><strong>Teknologi for å vise innhold til en nettleser</strong>:</p> <ul> <li>HTML</li> <li>SVG</li> </ul> <p><strong>Snakke med omverdenen</strong>:</p> <ul> <li>Se hva brukeren skriver i input-felter</li> </ul> <p>Det er slettes ikke verst! Det er lov å være stolt!</p> <p>For å kunne lage skikkelige spill, mangler vi to byggesteiner:</p> <ul> <li>Hvordan simulerer vi <em>tid</em>?</li> <li>Hvordan ser jeg hva brukeren trykker på av taster mens tiden går?</li> </ul> <p>Det er hva vi skal gå gjennom nå!</p> </section> <section class=activity id=steg-0-hva-er-forskjellig-fra-for> <h1 class=activity id=steg-0-hva-er-forskjellig-fra-for>Steg 0: Hva er forskjellig fra før?</h1> <p>For å innføre tid ber vi Elm om å si ifra hvert sekund. Vi abonnerer på når det har gått tid.</p> <table> <thead> <tr> <th style=text-align:right>Norsk</th> <th>Engelsk</th> </tr> </thead> <tbody> <tr> <td style=text-align:right>Abonnere</td> <td>Subscribe</td> </tr> <tr> <td style=text-align:right>Abonnement</td> <td>Subscription</td> </tr> </tbody> </table> <p>Eksempel på strukturen på et tidligere program:</p> <pre><code class=elm><span class=hljs-title>main</span> =\n  beginnerProgram\n  { model = <span class=hljs-string>""</span>\n  , view = view\n  , update = update\n  }\n</code></pre> <p>Tidligere har nettsiden kun endret seg hvis brukeren har gjort noe. Da trenger vi bare å si noe om:</p> <ol> <li>hvilken data vi skal lagre (<code>model</code>),</li> <li>hvordan dataen skal vises (<code>view</code>), og</li> <li>hvordan brukerens handlinger skal oppdatere tilstanden i programmet vårt (<code>update</code>).</li> </ol> <p>Vi var altså kun avhengig av hva brukeren gjorde! Hvis brukeren ikke gjorde noe, skjedde det ingenting. Dette stemmer ikke lenger!</p> <p>Slik vil det nye programmet vårt være bygget opp:</p> <pre><code class=elm><span class=hljs-title>main</span> =\n  <span class=hljs-type>Html</span>.program\n    { init = init\n    , view = view\n    , update = update\n    , subscriptions = subscriptions\n    }\n</code></pre> <p>Her er det tre forskjeller:</p> <ol> <li>Vi bruker <code>Html.program</code> i stedet for <code>Html.beginnerProgram</code>, som lar oss lage mer komplekse programmer</li> <li>Vi bruker <code>init</code> i stedet for <code>model</code> til å beskrive hvordan ting skal være når vi starter opp</li> <li>Vi definerer abonnementer, <code>subscriptions</code>!</li> </ol> </section> <section class=protip id=hva-kan-vi-abonnere-pa> <h1 class=protip id=hva-kan-vi-abonnere-pa>Hva kan vi abonnere på?</h1> <p>Vi kan abonnere på mange forskjellige ting:</p> <ol> <li>Når det har gått X sekunder (<code>Time</code>)</li> <li>Når brukeren trykker på <strong>Pil opp</strong> (<code>Keyboard</code>)</li> <li>Når noen andre sender oss en beskjed (<code>WebSocket</code>)</li> </ol> </section> <section class=activity id=steg-1-en-sekundteller> <h1 class=activity id=steg-1-en-sekundteller>Steg 1: En sekundteller</h1> <p>Her er en enkel sekundteller:</p> <pre><code class=elm><span class=hljs-keyword>import</span> Html <span class=hljs-keyword>exposing</span> (<span class=hljs-type>Html</span>, text)\n<span class=hljs-keyword>import</span> Time <span class=hljs-keyword>exposing</span> (<span class=hljs-type>Time</span>, second)\n\n\n\n<span class=hljs-title>main</span> =\n  <span class=hljs-type>Html</span>.program\n    { init = init\n    , view = view\n    , update = update\n    , subscriptions = subscriptions\n    }\n\n\n<span class=hljs-comment>-- MODEL</span>\n\n<span class=hljs-keyword>type</span> <span class=hljs-keyword>alias</span> <span class=hljs-type>Model</span> =\n  { count : <span class=hljs-type>Int</span>\n  }\n\n<span class=hljs-title>start</span> =\n  { count = <span class=hljs-number>0</span>\n  }\n\n<span class=hljs-title>init</span> : (<span class=hljs-type>Model</span>, <span class=hljs-type>Cmd</span> <span class=hljs-type>Msg</span>)\n<span class=hljs-title>init</span> =\n  (start, <span class=hljs-type>Cmd</span>.none)\n\n\n<span class=hljs-comment>-- UPDATE</span>\n\n<span class=hljs-keyword>type</span> <span class=hljs-type>Msg</span>\n  = <span class=hljs-type>Tick</span> <span class=hljs-type>Time</span>\n\n\n<span class=hljs-title>update</span> : <span class=hljs-type>Msg</span> -&gt; <span class=hljs-type>Model</span> -&gt; (<span class=hljs-type>Model</span>, <span class=hljs-type>Cmd</span> <span class=hljs-type>Msg</span>)\n<span class=hljs-title>update</span> msg model =\n  <span class=hljs-keyword>case</span> msg <span class=hljs-keyword>of</span>\n    <span class=hljs-type>Tick</span> newTime -&gt;\n      (bump model, <span class=hljs-type>Cmd</span>.none)\n\n\n<span class=hljs-title>bump</span> model =\n  { model | count = model.count + <span class=hljs-number>1</span> }\n\n\n<span class=hljs-comment>-- SUBSCRIPTIONS</span>\n\n<span class=hljs-title>subscriptions</span> : <span class=hljs-type>Model</span> -&gt; <span class=hljs-type>Sub</span> <span class=hljs-type>Msg</span>\n<span class=hljs-title>subscriptions</span> model =\n  <span class=hljs-type>Time</span>.every second <span class=hljs-type>Tick</span>\n\n\n<span class=hljs-comment>-- VIEW</span>\n\n<span class=hljs-title>view</span> : <span class=hljs-type>Model</span> -&gt; <span class=hljs-type>Html</span> <span class=hljs-type>Msg</span>\n<span class=hljs-title>view</span> model =\n  text (toString model.count)\n</code></pre> <ul> <li>Kopier inn koden i <strong>Try Elm</strong> eller kjør den lokalt med <code>elm reactor</code>.</li> </ul> <p>Ser noe du ikke har sett før? Nå skal vi gå gjennom bit for bit.</p> </section> <section class=activity id=hvor-langt-har-vi-talt> <h1 class=activity id=hvor-langt-har-vi-talt>Hvor langt har vi talt?</h1> <p>Hva skjedde med modellen?</p> <pre><code class=elm><span class=hljs-comment>-- MODEL</span>\n\n<span class=hljs-keyword>type</span> <span class=hljs-keyword>alias</span> <span class=hljs-type>Model</span> =\n  { count : <span class=hljs-type>Int</span>\n  }\n\n<span class=hljs-title>start</span> =\n  { count = <span class=hljs-number>0</span>\n  }\n\n<span class=hljs-title>init</span> : (<span class=hljs-type>Model</span>, <span class=hljs-type>Cmd</span> <span class=hljs-type>Msg</span>)\n<span class=hljs-title>init</span> =\n  (start, <span class=hljs-type>Cmd</span>.none)\n</code></pre> <p>Den eneste informasjonen vi er interessert i, er hvor langt vi har talt. Derfor består modellen vår kun av <code>count</code>.</p> <p>Når vi starter programmet, starter tellingen på <code>0</code>. <code>zero</code> sier at vi har talt til <code>0</code>.</p> <p>Hva er så disse <code>Cmd</code>-greiene? <code>Cmd</code> lar oss sende informasjon til resten av verden. Det bruker vi ikke ennå! Derfor er <code>Cmd</code> litt i veien for oss, men når vi er over på <code>Html.program</code>, må vi ha den med. Hvis du ser rundt i koden finner du <code>Cmd.none</code>, som betyr &quot;gjør ingenting&quot;.</p> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_0><label for=cbx_0> Endre <code>count</code> i funksjonen <code>start</code>. Hva gjør programmet nå?</label></li> <li class=task-list-item><input type=checkbox id=cbx_1><label for=cbx_1> Hva skjer om <code>count</code> blir veldig stor?</label></li> <li class=task-list-item><input type=checkbox id=cbx_2><label for=cbx_2> Kan <code>count</code> være mindre enn null?</label></li> </ul> </section> <section class=activity id=oppdatere-telleren> <h1 class=activity id=oppdatere-telleren>Oppdatere telleren</h1> <pre><code class=elm><span class=hljs-comment>-- UPDATE</span>\n\n<span class=hljs-keyword>type</span> <span class=hljs-type>Msg</span>\n  = <span class=hljs-type>Tick</span> <span class=hljs-type>Time</span>\n\n\n<span class=hljs-title>update</span> : <span class=hljs-type>Msg</span> -&gt; <span class=hljs-type>Model</span> -&gt; (<span class=hljs-type>Model</span>, <span class=hljs-type>Cmd</span> <span class=hljs-type>Msg</span>)\n<span class=hljs-title>update</span> msg model =\n  <span class=hljs-keyword>case</span> msg <span class=hljs-keyword>of</span>\n    <span class=hljs-type>Tick</span> newTime -&gt;\n      (bump model, <span class=hljs-type>Cmd</span>.none)\n\n\n<span class=hljs-title>bump</span> model =\n  { model | count = model.count + <span class=hljs-number>1</span> }\n</code></pre> <p>Beskjeden vår (<code>Msg</code>) kan nå bare være én ting: <strong>det har gått tid siden sist</strong>.</p> <p>Hvert sekund, kjører vi modellen vår gjennom funksjonen <code>bump</code>. Den &quot;dytter&quot; (&quot;bump&quot; på engelsk) modellen vår ett sekund fram i tid.</p> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_3><label for=cbx_3> Kan du få timeren vår til å telle baklengs?</label></li> <li class=task-list-item><input type=checkbox id=cbx_4><label for=cbx_4> Kan du få timeren vår til å telle ned fra 10 til 0? Obs! Her må du også endre <code>start</code>!</label></li> <li class=task-list-item><input type=checkbox id=cbx_5><label for=cbx_5> Kan du få timeren vår til å telle fortere?</label></li> <li class=task-list-item><input type=checkbox id=cbx_6><label for=cbx_6> Utfordring: Timeren får ikke telle til høyere enn 10. Når den kommer til 10, skal den begynne fra start igjen! Tips: bruk et <a href=http://elm-lang.org/examples/if>if-uttrykk</a>.</label></li> </ul> </section> <section class=activity id=ga-fort-ga-sakte> <h1 class=activity id=ga-fort-ga-sakte>Gå fort, gå sakte</h1> <pre><code class=elm><span class=hljs-comment>-- SUBSCRIPTIONS</span>\n\n<span class=hljs-title>subscriptions</span> : <span class=hljs-type>Model</span> -&gt; <span class=hljs-type>Sub</span> <span class=hljs-type>Msg</span>\n<span class=hljs-title>subscriptions</span> model =\n  <span class=hljs-type>Time</span>.every second <span class=hljs-type>Tick</span>\n</code></pre> <p>Her abonnerer vi på sekunder. Verdien <code>second</code> kommer fra modulen <code>Time</code>.</p> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_7><label for=cbx_7> Finn <code>second</code> i <a href=http://package.elm-lang.org/packages/elm-lang/core/latest/Time>modulen <code>Time</code></a>.</label></li> <li class=task-list-item><input type=checkbox id=cbx_8><label for=cbx_8> Hva skjer om du abonnerer på timer i stedet for sekunder?</label></li> <li class=task-list-item><input type=checkbox id=cbx_9><label for=cbx_9> Hva skjer om du abonnerer på millisekunder?</label></li> </ul> <p>Øverst i <code>Time-modulen</code> finner vi:</p> <pre><code class=elm><span class=hljs-keyword>type</span> <span class=hljs-keyword>alias</span> <span class=hljs-type>Time</span> =\n    <span class=hljs-type>Float</span>\n</code></pre> <p>Dette betyr at tid bare er et tall. Disse kan vi plusse og dele!</p> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_10><label for=cbx_10> Klarer du å abonnere på annenhvert sekund? Hva må du da sende inn i stedet for <code>second</code>?</label></li> <li class=task-list-item><input type=checkbox id=cbx_11><label for=cbx_11> Klarer du å abonnere på tidels sekunder?</label></li> </ul> <p>Hint: hva er <code>second * 2</code>?</p> </section> <section class=activity id=la-det-blinke> <h1 class=activity id=la-det-blinke>La det blinke!</h1> <pre><code class=elm><span class=hljs-comment>-- VIEW</span>\n\n<span class=hljs-title>view</span> : <span class=hljs-type>Model</span> -&gt; <span class=hljs-type>Html</span> <span class=hljs-type>Msg</span>\n<span class=hljs-title>view</span> model =\n  text (toString model.count)\n</code></pre> <p>Hmm, den så litt kjedelig ut. La oss lage litt blinking i stedet!</p> <p>Obs! Har du epilepsi? Hopp over denne oppgaven!</p> <p>Først skal vi gjøre bakgrunnen rød:</p> <pre><code class=elm><span class=hljs-title>view</span> : <span class=hljs-type>Model</span> -&gt; <span class=hljs-type>Html</span> <span class=hljs-type>Msg</span>\n<span class=hljs-title>view</span> model =\n  div\n    [ style\n        [ (<span class=hljs-string>"backgroundColor"</span>, <span class=hljs-string>"red"</span>)\n        ]\n    ]\n    [ text (toString model.count)\n    ]\n</code></pre> <p>Husk å importere de nye funksjonene!</p> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_12><label for=cbx_12> I hvilke moduler finner vi <code>div</code> og <code>style</code>?</label></li> </ul> <p>Men nå ble det jo alltid rødt! Dårlig blinking. En måte å få til blinking er å sette oddetall til rød og partall til grønn.</p> <p>Noen partall: 0, 2, 4, 6, 8</p> <p>Noen oddetall: 1, 3, 5, 7, 9</p> <p>Ser du at annenhvert tall er partall, og annenhvert oddetall? Da kan vi få til partall!</p> <p>For å sjekke om et tall er partall kan du se hva du får til rest når du deler på 2. Funksjonen rem gir resten ved divisjon. rem 5 4 gir 1, fordi tallet 5 gir en hel firer, og <strong>1</strong> ekstra.</p> <p>Her prøver jeg i <code>elm repl</code>:</p> <pre><code class=elm>&gt; rem <span class=hljs-number>0</span> <span class=hljs-number>2</span>\n<span class=hljs-number>0</span> : <span class=hljs-type>Int</span>\n&gt; rem <span class=hljs-number>1</span> <span class=hljs-number>2</span>\n<span class=hljs-number>1</span> : <span class=hljs-type>Int</span>\n&gt; rem <span class=hljs-number>2</span> <span class=hljs-number>2</span>\n<span class=hljs-number>0</span> : <span class=hljs-type>Int</span>\n&gt; rem <span class=hljs-number>3</span> <span class=hljs-number>2</span>\n<span class=hljs-number>1</span> : <span class=hljs-type>Int</span>\n&gt; rem <span class=hljs-number>4</span> <span class=hljs-number>2</span>\n<span class=hljs-number>0</span> : <span class=hljs-type>Int</span>\n&gt; rem <span class=hljs-number>5</span> <span class=hljs-number>2</span>\n<span class=hljs-number>1</span> : <span class=hljs-type>Int</span>\n&gt; rem <span class=hljs-number>6</span> <span class=hljs-number>2</span>\n<span class=hljs-number>0</span> : <span class=hljs-type>Int</span>\n&gt; rem <span class=hljs-number>7</span> <span class=hljs-number>2</span>\n<span class=hljs-number>1</span> : <span class=hljs-type>Int</span>\n&gt; rem <span class=hljs-number>8</span> <span class=hljs-number>2</span>\n<span class=hljs-number>0</span> : <span class=hljs-type>Int</span>\n&gt; rem <span class=hljs-number>9</span> <span class=hljs-number>2</span>\n<span class=hljs-number>1</span> : <span class=hljs-type>Int</span>\n</code></pre> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_13><label for=cbx_13> Ser du mønsteret? Hva skjer når vi deler oddetall på 2? Hva skjer når vi deler partall på 2?</label></li> <li class=task-list-item><input type=checkbox id=cbx_14><label for=cbx_14> Skriv funksjonen isEven. Denne skal fungere slik:</label></li> </ul> <pre><code class=elm>&gt; isEven <span class=hljs-number>0</span>\n<span class=hljs-type>True</span> : <span class=hljs-type>Bool</span>\n&gt; isEven <span class=hljs-number>1</span>\n<span class=hljs-type>False</span> : <span class=hljs-type>Bool</span>\n&gt; isEven <span class=hljs-number>2</span>\n<span class=hljs-type>True</span> : <span class=hljs-type>Bool</span>\n&gt; isEven <span class=hljs-number>3</span>\n<span class=hljs-type>False</span> : <span class=hljs-type>Bool</span>\n&gt; isEven <span class=hljs-number>4</span>\n<span class=hljs-type>True</span> : <span class=hljs-type>Bool</span>\n&gt; isEven <span class=hljs-number>5</span>\n<span class=hljs-type>False</span> : <span class=hljs-type>Bool</span>\n&gt; isEven <span class=hljs-number>6</span>\n<span class=hljs-type>True</span> : <span class=hljs-type>Bool</span>\n&gt; isEven <span class=hljs-number>7</span>\n<span class=hljs-type>False</span> : <span class=hljs-type>Bool</span>\n&gt; isEven <span class=hljs-number>8</span>\n<span class=hljs-type>True</span> : <span class=hljs-type>Bool</span>\n&gt; isEven <span class=hljs-number>9</span>\n<span class=hljs-type>False</span> : <span class=hljs-type>Bool</span>\n</code></pre> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_15><label for=cbx_15> Bruk funksjonen <code>isEven</code> til å bestemme om du skal ha <code>(&quot;backgroundColor&quot;, &quot;red&quot;)</code> eller <code>(&quot;backgroundColor&quot;, &quot;green&quot;)</code>!</label></li> </ul> <p>... Stopp her for å prøve selv!</p> <p>Her lager jeg med vilje litt avstand ...</p> <p>Ikke scroll ned om du vil prøve selv ...</p> <p>... men hvis du vil se et forslag, så kommer det nå!</p> <p><code>isEven</code> sammenlikner resten vi får når vi deler på 2 med 0:</p> <pre><code class=elm><span class=hljs-title>isEven</span> x =\n  rem x <span class=hljs-number>2</span> == <span class=hljs-number>0</span>\n</code></pre> <p><code>getColor</code> bruker <code>isEven</code> til å si om en modell skal vises som rød eller grønn:</p> <pre><code class=elm><span class=hljs-title>getColor</span> model\n  = <span class=hljs-keyword>if</span> isEven model.count\n    <span class=hljs-keyword>then</span> <span class=hljs-string>"red"</span>\n    <span class=hljs-keyword>else</span> <span class=hljs-string>"green"</span>\n</code></pre> <p>... før vi plugger dette inn i viewet vårt:</p> <pre><code class=elm><span class=hljs-title>view</span> : <span class=hljs-type>Model</span> -&gt; <span class=hljs-type>Html</span> <span class=hljs-type>Msg</span>\n<span class=hljs-title>view</span> model =\n  div\n    [ style\n        [ (<span class=hljs-string>"backgroundColor"</span>, getColor model)\n        , (<span class=hljs-string>"height"</span>, <span class=hljs-string>"100%"</span>)\n        ]\n    ]\n    [ text (toString model.count)\n    ]\n</code></pre> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_16><label for=cbx_16> Kan du få det til å blinke <em>og</em> gå fort? Obs! Mange farger!</label></li> </ul> </section> '}});