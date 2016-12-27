webpackJsonp([119,374],{1385:function(e,l,n){e.exports={frontmatter:n(487),content:n(2216)}},2216:function(e,l,n){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Breakout er en gammel klassiker opprinnelig laget av Steve Jobs og Steve Wozniak (grunnleggerene av Apple) på 1970-tallet. På samme måte som i Pong skal man kontrollere en sprettende ball ved hjelp av en racket. Men Breakout kan spilles av en spiller hvor man får poeng for å skyte ned bokser ved hjelp av ballen. Nyere versjoner har videreutviklet Breakout på flere måter. For eksempel ved at noen bokser gir spesielle bonuser, ved at det finnes forskjellige brett av ulik vanskelighetsgrad og så videre.</p> <figure><img src="+n(2831)+' alt=""/></figure> </section> <section class=activity id=oversikt-over-prosjektet> <h1 class=activity id=oversikt-over-prosjektet>Oversikt over prosjektet</h1> <p><em>Mesteparten av kodingen av Breakout skal du gjøre selv. Koden for racketen og ballen ligner en del på den tilsvarende koden i Pong. Vi vil derfor fokusere på boksene i dette prosjektet, og spesielt diskutere hvordan man kan bruke kloner på en effektiv måte.</em></p> <section class=check id=plan> <h2 class=check id=plan>Plan</h2> <ul> <li> <p>Bokser ... Mange bokser!</p> </li> <li> <p>En sprettende ball og en enkel racket</p> </li> <li> <p>Boksene forsvinner ...</p> </li> <li> <p>Fallende bokser, bonuser, flere brett og andre utfordringer</p> </li> </ul> </section> </section> <section class=activity id=steg-1-bokser-mange-bokser> <h1 class=activity id=steg-1-bokser-mange-bokser>Steg 1: Bokser ... Mange bokser!</h1> <p><em>En sentral del av Breakout er alle boksene man skal prøve å skyte ned. Siden disse boksene alle oppfører seg (nesten) likt vil vi bruke den samme koden for alle boksene. Til dette bruker vi kloning.</em></p> <p>I Scratch kan vi klone figurer. Det betyr at vi lager en kopi av en figur, både av utseendet og oppførselen. Her vil vi derfor først lage en boks, og deretter lage mange kopier av denne.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Start et nytt prosjekt. Slett kattefiguren.</p> </li> <li> <p>Lag en boksfigur. Denne kan du tegne selv eller bruke <code>Button3</code> i biblioteket.</p> </li> <li> <p>Vi vil nå klone denne ene boksen mange ganger. For å lage flere rekker med bokser bruker vi to løkker. Vi trenger også å vite hvor mange bokser vi har slik at vi senere kan sjekke om vi har skutt ned alle. Lag derfor en variabel <code class=blockdata>Antall bokser</code> som gjelder for alle figurer. I denne koden må du kanskje endre de forskjellige tallene litt, slik at de passer størrelsen på din boks.</p> <pre class=blocks>når jeg mottar [Nytt spill v]\nskjul\nsett [Antall bokser v] til [0]\nsett y til (160)\ngjenta (5) ganger\n    sett x til (-200)\n    gjenta (11) ganger\n        endre [Antall bokser v] med (1)\n        lag klon av [meg v]\n        endre x med (40)\n    slutt\n    endre y med (-25)\nslutt\n</pre> </li> <li> <p>Selve oppførselen til hver boks kan vi så kode i et eget skript som starter når klonen lages. Siden vi enda ikke har en ball, lager vi et enkelt skript hvor hver boks (det vil her si alle boksene) blir borte når mellomrom trykkes.</p> <pre class=blocks>når jeg starter som klon\nvis\nvent til &lt;tast [mellomrom v] trykket?&gt;\nendre [Antall bokser v] med (-1)\nslett denne klonen\n</pre> <p>Etter at vi har laget en ball og en racket skal vi oppdatere denne koden slik at boksene i stedet forsvinner når de blir truffet av ballen.</p> </li> </ul> </section> </section> <section class=activity id=steg-2-en-sprettende-ball-og-en-enkel-racket> <h1 class=activity id=steg-2-en-sprettende-ball-og-en-enkel-racket>Steg 2: En sprettende ball og en enkel racket</h1> <p><em>Når man lager nye programmer og spill er det alltid lurt å lage en enkel versjon av spillet tidlig. Denne tidlige versjonen behøver ikke kunne gjøre veldig mye, du kan likevel begynne å teste at programmet blir som du hadde tenkt nesten med en gang.</em></p> <p>Vi begynner nå med grunnmekanismen i spillet: En ball som spretter og en racket som kan ta i mot ballen.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Lag en racket-figur. Tegn gjerne en selv, ellers kan du bruke for eksempel <code>Paddle</code> fra biblioteket.</p> </li> <li> <p>Lag et skript som starter når det mottar <code>Nytt spill</code>. Dette skriptet må plassere racketen et passende sted nederst på skjermen. Deretter kan det gå inn i en løkke hvor racketen alltid flyttes sidelengs når <code>Pil venstre</code>- eller <code>Pil høyre</code>-tastene trykkes.</p> </li> <li> <p>Lag en ball-figur. Du kan enten finne en i biblioteket, eller tegne en selv.</p> </li> <li> <p>Vi vil ha muligheten til senere enkelt å endre hastigheten til ballen. Lag derfor en ny variabel <code class=blockdata>hastighet</code> som gjelder for ball-figuren.</p> </li> <li> <p>Lag et skript som starter på <code>Nytt spill</code>-meldingen. Først i skriptet vil du plassere ballen slik at den hviler på racketen, og gi den en tilfeldig retning oppover (for eksempel mellom -45 og 45 grader). Deretter kan ballen gå inn i en løkke som gjentas helt til <code>y</code>-posisjonen av ballen blir mindre enn et passende tall (<code>-160</code> er et bra utgangspunkt, men dette vil variere avhengig av hvor du plasserer racketen og hvor stor ballen er). Inne i denne løkken vil du flytte ballen <code class=blockdata>hastighet</code> steg, og la den <code class=blockmotion>sprette tilbake ved kanten</code>.</p> </li> <li> <p>Vi vil nå la ballen sprette på racketen. I løkken til racketen kan du legge til en <code class=blockcontrol>hvis</code>-test hvor du sender en <code>Sprett horisontalt</code>-melding når ballen berører racketen.</p> </li> <li> <p>Ballen må svare på denne meldingen ved å endre retning, for eksempel med kode som ser omtrent ut som følger:</p> <pre class=blocks>når jeg mottar [Sprett horisontalt v]\npek i retning ((180) - (retning))\n</pre> </li> </ul> </section> </section> <section class=activity id=steg-3-boksene-forsvinner> <h1 class=activity id=steg-3-boksene-forsvinner>Steg 3: Boksene forsvinner</h1> <p><em>Vi skal nå koble sammen boksene og ballen. Boksene skal jo forsvinne når de blir truffet av ballen. Samtidig skal ballen sprette når den treffer en boks.</em></p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Vi har jo allerede laget kode som får boksene til å forsvinne. Men inntil nå har boksene forsvunnet når vi trykker mellomrom-tasten. Endre denne koden slik at boksene i stedet forsvinner når de berører ballen.</p> </li> <li> <p>La også boksene sende ut en <code>Sprett horisontalt</code>--melding etter at de har berørt ballen, men før de (klonene) slettes.</p> </li> </ul> <p>Prøv spillet ditt. Grunnmekanismene skal nå fungere.</p> <ul> <li> <p>For at spillet skal se litt bedre ut, kan du legge på en startmeny, kanskje med en stilig forside eller intro-animasjon?</p> </li> <li> <p>Legg på passende lyd-effekter. Du bør ihvertfall spille av lyder når ballen spretter på boksene, men tenk også over om det er andre hendelser hvor det passer å spille enkle lyder?</p> </li> <li> <p>La også noe skje når du taper spillet. Det vil si når <code class=blockcontrol>gjenta til</code>-løkken på ballen er ferdig.</p> </li> <li> <p>Ved hjelp av <code class=blockdata>Antall bokser</code>-variabelen kan du også sjekke om spilleren har klart å fjerne alle boksene og vinne spillet. Gi spilleren beskjed om at hun har vunnet!</p> </li> <li> <p>Tenk litt på hvordan du har lyst til å utvikle spillet videre. Hvordan kan du gjøre det enda morsommere for deg og dine venner? I neste del finnes noen ideer.</p> </li> </ul> </section> </section> <section class=activity id=steg-4-videreutvikling-av-spillet> <h1 class=activity id=steg-4-videreutvikling-av-spillet>Steg 4: Videreutvikling av spillet</h1> <p><em>Du står helt fritt i hvordan du vil jobbe videre med spillet ditt, men her er noen ideer som kan gjøre spillet enda morsommere å spille:</em></p> <section class=check id=ideer-til-videreutvikling> <h2 class=check id=ideer-til-videreutvikling>Ideer til videreutvikling</h2> <ul> <li> <p>Legg til en poeng-teller. Du må først bestemme hva spilleren skal få poeng for, for eksempel at ballen treffer en boks. Deretter lager du en <code class=blockdata>Poeng</code>-variabel som du endrer etterhvert.</p> </li> <li> <p>La hastigheten øke etterhvert i spillet.</p> </li> <li> <p>En morsommere, og mer naturlig, sprett på racketen kan du få ved å ta hensyn til hvor på racketen ballen treffer. Dette kan du gjøre for eksempel ved å sammenligne <code>x</code>-posisjonen til ballen og racketen.</p> </li> <li> <p>Hvis ballen treffer på siden av en boks burde den sprette på en vertikal (stående) vegg i stedet for en horisontal (liggende). For å kode dette kan du lage en ny melding tilsvarende <code>Sprett horisontalt</code>. Tallet <code>180</code> i koden må byttes ut. Med hvilket tall da?</p> </li> <li> <p>Kanskje du kan videreutvikle hele konseptet, slik at det er mulig å plukke opp power-ups etterhvert som man spiller. For eksempel noe som endrer hastigheten på ballen, endrer størrelsen på racketen, gir ekstra poeng eller kanskje lager litt skru på ballen.</p> </li> <li> <p>I stedet for at boksene bare forsvinner når ballen treffer dem, kan du la dem løsne og falle nedover. Videre kan spilleren få ekstra poeng eller bonuser om hun klarer å fange de fallende boksene med racketen.</p> </li> <li> <p>Bruk forskjellige farger på boksene. På denne måten kan du lage brett som ser forskjellige ut. Du kan også la de forskjellige boksene gi forskjellige poeng eller bonuser.</p> <p>En måte å designe slike brett på kan være ved å først lage de forskjellige boksene som forskjellige drakter. Deretter kan du lage en <code class=blockdata>brett</code>-variabel som lister opp hvilken drakt hver boks skal bruke. For eksempel kan denne se slik ut:</p> <pre class=blocks>sett [brett v] til [1111111111111222222211112233322111122222221111111111111]\n</pre> <p>Denne kan så brukes når du setter ut boksene omtrent som dette:</p> <pre class=blocks>bytt drakt til (bokstav (antall bokser) i (brett))\n</pre> <p>Videre i spillet kan du teste på <code class=blocklooks>drakt nr.</code> for å vite hvilken type boks du har med å gjøre.</p> </li> </ul> </section> </section> '},2831:function(e,l,n){e.exports=n.p+"_/oppgaver/src/scratch/breakout/breakout.a12c3e.png"}});