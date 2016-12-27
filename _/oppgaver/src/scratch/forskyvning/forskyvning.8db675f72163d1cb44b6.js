webpackJsonp([190,374],{1400:function(e,t,n){e.exports={frontmatter:n(502),content:n(2231)}},2231:function(e,t){e.exports="<section class=tips id=laeringsmal> <h2 class=tips id=laeringsmal>Læringsmål</h2> <ul> <li>beskrive og gjennomføre spegling, rotasjon og parallellforskyving</li> <li>beskrive plassering og flytting i rutenett, på kart og i koordinatsystem, med og utan digitale hjelpemiddel, og bruke koordinatar til å berekne avstandar parallelt med aksane i eit koordinatsystem</li> </ul> </section> <section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Denne oppgaven forutsetter at du har fullført oppgave 1 i denne oppgaveserien.</p> <p>Vi skal nå se på hvordan vi kan flytte en figur rundt på skjermen uten at den endrer form, størrelse eller retning. Det kalles en forskyvning!</p> <p>Aller først henter vi frem <code>Hattulf</code> fra forrige oppgave. Trykk på &quot;mine ting&quot; og velg å &quot;se inni&quot; den forrige oppgaven din.</p> <p>Vi skal la rotasjonen ligge en liten stund, så vi kobler ganske enkelt &quot;Når grønt flagg klikkes&quot;-boksen fra resten av koden. Ikke slett koden, vi skal bruke den igjen senere!</p> </section> <section class=activity id=steg-1-vi-forskyver-hattulf> <h1 class=activity id=steg-1-vi-forskyver-hattulf>Steg 1: Vi forskyver Hattulf</h1> <p>Vi må huske at for en datamaskin foregår all bevegelse på skjermen i et koordinatsystem. Koordinatene for bevegelse i lengderetning, altså fra høyre til venstre, kaller vi x-koordinater. Vil du bevege deg i høyden må vi endre på y-koordinatene.</p> <p>Vi begynner med å endre på X-koordinatene</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Vi henter en <code>endre x med</code>-{.blockmotion} fra <code class=blockmotion>Bevegelse</code> og kobler den til <code class=blockcontrol>Når grønt flagg klikkes</code></p> </li> <li> <p>Du kan endre verdien med så mye som du selv ønsker.</p> <pre class=blocks>når grønt flagg klikkes\nendre x med ()\n</pre> </li> <li> <p>Det blir litt slitsomt å holde kontroll på hvor hatten er hele tiden. Derfor legger vi til en tastekommando som får hatten tilbake til utgangspunktet, koordinatet (0,0):</p> <pre class=blocks>når [o] trykkes\ngå til x: (0) y: (0)\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet> <h2 class=flag id=test-prosjektet>Test prosjektet</h2> <p><strong>Klikk på det grønne flagget.</strong></p> <ul> <li>Hva skjer?</li> <li>Husk å trykke &quot;o&quot; om <code>Hattulf</code> forsvinner ut av bildekanten</li> <li>Utfordring: Ved å bruke det du kan om bevegelser på ei tallinje, kan du få <code>Hattulf</code> til å gå til venstre på skjermen ved å endre på verdien til tallet du endrer x med. Får du det til?</li> </ul> </section> </section> <section class=activity id=steg-2-flytte-langs-y-aksen> <h1 class=activity id=steg-2-flytte-langs-y-aksen>Steg 2: Flytte <code>Hattulf</code> langs y-aksen.</h1> <p>Du blir kanskje ikke veldig overrasket over at vi nå skal benytte oss av <code class=blockmotion>endre y med ()</code>.</p> <ul> <li> <p>Nå skal kodeblokken din se slik ut:</p> <pre class=blocks>når grønt flagg klikkes\nendre y med ()\n</pre> </li> </ul> </section> "}});