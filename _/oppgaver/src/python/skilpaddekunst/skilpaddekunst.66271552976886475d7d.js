webpackJsonp([122,374],{1370:function(e,s,n){e.exports={frontmatter:n(472),content:n(2201)}},2201:function(e,s,n){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Skilpadder (turtles på engelsk) er en form for roboter som har vært i bruk innen programmering i lang tid. Vi vil bruke skilpadde-biblioteket i Python til å utforske flere programmeringskonsepter samtidig som vi tegner kule bilder.</p> <figure><img src="+n(2805)+" alt=\"\"/></figure> </section> <section class=activity id=steg-1-mot-skilpadden> <h1 class=activity id=steg-1-mot-skilpadden>Steg 1: Møt skilpadden</h1> <p>For å bruke skilpadder i Python må vi importere et bibliotek som heter <code>turtle</code>. Slike biblioteker kalles <em>modules</em> i Python og brukes mye for å organisere og gjenbruke kode som andre har skrevet. Det finnes flere måter å importere biblioteker på i Python. Vi vil her bruke den enkleste, hvor vi starter alle skilpaddeprogrammene våre med linjen</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n</code></pre> <p>Her betyr <code>*</code> alt, slik at linjen sier <code>Importer all kode fra turtle-biblioteket</code>.</p> <section class=protip id=turtles> <h3 class=protip id=turtles>Turtles</h3> <p>Navnet <strong>Turtle</strong> betyr <em>skilpadde</em> på norsk. Bakgrunnen til dette navnet er historisk. For nesten 70 år siden bygde William Grey Walter et par roboter som kunne bevege seg rundt. Disse beveget seg ganske sakte, og var lave og skallformet. De fikk derfor etterhvert kallenavnet skilpadder.</p> <p>Senere ble måten disse skilpaddene beveget seg på (vi skal se hvordan snart) tatt inn i forskjellige programmeringsspråk, spesielt som en måte å tegne på. Språket <em>Logo</em> er nok det som er mest kjent for slik skilpaddegrafikk, men nesten alle programmeringsspråk støtter dette i dag, inkludert for eksempel <em>Scratch</em>, <em>Lua</em> og <em>Python</em>.</p> </section> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Det er på tide å lage vår første skilpadde. Start IDLE og åpne et nytt programmeringsvindu. I dette nye vinduet kan du skrive inn følgende kode:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nshape(<span class=hljs-string>'turtle'</span>)\nshapesize(<span class=hljs-number>2</span>)\nbgcolor(<span class=hljs-string>'darkblue'</span>)\ncolor(<span class=hljs-string>'yellow'</span>)\n</code></pre> <p>Lagre programmet med navnet <code>skilpadde.py</code> og kjør det. Du skal nå få opp et nytt vindu med en gul skilpadde på en blå bakgrunn. Hvis dette ikke skjer kan du se i det opprinnelige <code>Python Shell</code>-vinduet om du har fått en feilmelding.</p> </li> <li> <p>La oss se litt nøyere på hva programmet gjør så langt. Det er en god ide å prøve å endre på ting i programmet for å se effekten av endringene og bedre forstå hvordan ting virker.</p> </li> <li> <p>Linjen <code>shape('turtle')</code> sier at vi vil bruke en skilpaddefigur. I stedet for <code>turtle</code> kan du også prøve <code>arrow</code>, <code>circle</code>, <code>square</code>, <code>triangle</code> eller <code>classic</code>.</p> </li> <li> <p>Med <code>shapesize(2)</code> forteller vi programmet hvor stor vi vil at skilpaddefiguren skal være. Prøv med andre tall!</p> </li> <li> <p>Kommandoene <code>bgcolor</code> og <code>color</code> bestemmer fargene på henholdsvis bakgrunnen og på skilpaddefiguren. Python kjenner til veldig mange farger (men bare på engelsk), så prøv om du kan endre fargene til noe du liker.</p> </li> <li> <p>I de senere programmene vil vi bruke disse linjene på toppen. Du kan gjerne bruke en variant av farger og figur som du liker bedre i stedet.</p> </li> </ul> </section> </section> <section class=activity id=steg-2-en-kunstnerisk-skilpadde> <h1 class=activity id=steg-2-en-kunstnerisk-skilpadde>Steg 2: En kunstnerisk skilpadde</h1> <p>Skilpadden er ikke bare fin å se på. Den kan også tegne! I dette steget vil vi bli kjent med noen enkle kommandoer som gjør skilpadden om til en kunstner.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Legg til en linje nederst i programmet ditt, slik at det ser slik ut:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nshape(<span class=hljs-string>'turtle'</span>)\nshapesize(<span class=hljs-number>2</span>)\nbgcolor(<span class=hljs-string>'darkblue'</span>)\ncolor(<span class=hljs-string>'yellow'</span>)\n\nforward(<span class=hljs-number>200</span>)\n</code></pre> </li> <li> <p>Når du kjører programmet vil du se at skilpadden har beveget seg forover et lite stykke, og at den har tegnet en strek der den beveget seg.</p> </li> <li> <p>I tillegg til <code>forward</code> kan vi også bruke kommandoene <code>backward</code> for å gå bakover, <code>left</code> for å svinge mot venstre og <code>right</code> for å svinge mot høyre. Prøv for eksempel å endre programmet ditt til det følgende:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nshape(<span class=hljs-string>'turtle'</span>)\nshapesize(<span class=hljs-number>2</span>)\nbgcolor(<span class=hljs-string>'darkblue'</span>)\ncolor(<span class=hljs-string>'yellow'</span>)\n\nforward(<span class=hljs-number>200</span>)\nleft(<span class=hljs-number>60</span>)\nforward(<span class=hljs-number>50</span>)\nbackward(<span class=hljs-number>200</span>)\nright(<span class=hljs-number>90</span>)\nforward(<span class=hljs-number>100</span>)\n</code></pre> <p>Ser du at skilpadden utfører alle kommandoene du gir den?</p> </li> <li> <p>Hvis vi setter sammen kommandoene litt systematisk kan vi tegne noen grunnleggende geometriske figurer. For eksempel, om vi vil tegne en firkant kan vi først gå fremover, deretter svinge 90 grader (mot høyre eller venstre), deretter fremover igjen, så svinge, så fremover, så svinge og til slutt fremover en gang til. I Python kan vi skrive dette som</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nshape(<span class=hljs-string>'turtle'</span>)\nshapesize(<span class=hljs-number>2</span>)\nbgcolor(<span class=hljs-string>'darkblue'</span>)\ncolor(<span class=hljs-string>'yellow'</span>)\n\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>90</span>)\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>90</span>)\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>90</span>)\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>90</span>)\n</code></pre> <p>Tegner skilpadden en firkant når du kjører dette programmet?</p> </li> <li> <p>Hva med en trekant? Hvordan må du forandre koden din for at skilpadden skal tegne en trekant i stedet for en firkant? Prøv selv å endre koden og kjør den, ble resultatet som du trodde?</p> </li> </ul> </section> </section> <section class=activity id=steg-3-gjenta-deg-selv> <h1 class=activity id=steg-3-gjenta-deg-selv>Steg 3: Gjenta deg selv</h1> <p>Hvis du ser på koden vi har brukt for å tegne trekanter og firkanter har vi stadig gjentatt oss selv. I stedet for at vi skriver samme kode om og om igjen kan vi be Python gjenta deler av koden. Til dette bruker vi <strong>for-løkker</strong>.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Det følgende programmet tegner også en firkant, akkurat som det tidligere programmet vi lagde:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nshape(<span class=hljs-string>'turtle'</span>)\nshapesize(<span class=hljs-number>2</span>)\nbgcolor(<span class=hljs-string>'darkblue'</span>)\ncolor(<span class=hljs-string>'yellow'</span>)\n\n<span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(<span class=hljs-number>4</span>):\n    forward(<span class=hljs-number>100</span>)\n    right(<span class=hljs-number>90</span>)\n</code></pre> <p>Endre koden din som over, og kjør programmet.</p> </li> <li> <p>Legg merke til at linjene som kommer etter <code>for</code> er skjøvet inn til høyre. Dette er veldig viktig i Python, fordi det forteller hvor mye kode som skal gjentas i løkken. For å skyve koden inn på denne måten kan du bruke <code>Tab</code>-tasten i IDLE. For å trekke koden tilbake til venstre kan du trykke <code>Shift</code> og <code>Tab</code>.</p> </li> <li> <p>Prøv å trekk linjen <code>right(90)</code> til venstre, slik at for-løkken ser slik ut:</p> <pre><code class=language-python><span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(<span class=hljs-number>4</span>):\n    forward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>90</span>)\n</code></pre> <p>Hva tror du programmet ditt vil gjøre nå? Forsøk å kjøre programmet for å se om du har rett!</p> <p>Skilpadden vil bare gå fremover fire ganger før den svinger til høyre en gang til slutt. Det betyr at den vil tegne en rett linje i stedet for en firkant.</p> </li> <li> <p>Nå som vi bruker en for-løkke har det også blitt mye enklere å endre koden til å for eksempel tegne en trekant. Vi må endre 4 til 3 i for-løkken. I tillegg må vi endre vinkelen skilpadden snur ved hvert hjørne. For at skilpadden skal gå en runde rundt trekanten må den snu totalt 360 grader. Siden den snur tre ganger må den snu 120 grader (360 delt på 3) i hvert hjørne. Programmet for å tegne en trekant blir dermed seende slik ut:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nshape(<span class=hljs-string>'turtle'</span>)\nshapesize(<span class=hljs-number>2</span>)\nbgcolor(<span class=hljs-string>'darkblue'</span>)\ncolor(<span class=hljs-string>'yellow'</span>)\n\n<span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(<span class=hljs-number>3</span>):\n    forward(<span class=hljs-number>100</span>)\n    right(<span class=hljs-number>120</span>)\n</code></pre> </li> <li> <p>Prøv å endre programmet slik at det tegner andre mangekanter. Hvordan kan du tegne for eksempel en femkant, åttekant eller kanskje en femtenkant.</p> </li> </ul> </section> </section> <section class=activity id=steg-4-alle-ting-fortjener-et-navn> <h1 class=activity id=steg-4-alle-ting-fortjener-et-navn>Steg 4: Alle ting fortjener et navn</h1> <p>Vi skal fortsette med å gjøre koden vår enda mer fleksibel ved å gi ting navn. Dette vil også gjøre det enklere å forstå hva koden gjør.</p> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Vi innfører først variabler som sier hvor mange sider vi vil tegne, hvor lang hver side skal være og hvor mange grader vi skal snu ved hvert hjørne. Endre programmet ditt slik at det ser slik ut:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nshape(<span class=hljs-string>'turtle'</span>)\nshapesize(<span class=hljs-number>2</span>)\nbgcolor(<span class=hljs-string>'darkblue'</span>)\ncolor(<span class=hljs-string>'yellow'</span>)\n\nsides = <span class=hljs-number>4</span>\nlength = <span class=hljs-number>100</span>\nangle = <span class=hljs-number>90</span>\n\n<span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(sides):\n    forward(length)\n    right(angle)\n</code></pre> <p>Tegner programmet fortsatt en firkant?</p> </li> <li> <p>Nå kan du få programmet til å tegne en trekant bare ved å endre verdiene på variablene dine. Prøv om du får det til?</p> </li> <li> <p>Vi kan gjøre programmet enda smartere. I stedet for at du selv må regne vinkelen kan programmet gjøre det. Bytt ut linjen <code>angle = 90</code> med</p> <pre><code class=language-python>angle = <span class=hljs-number>360</span> / sides\n</code></pre> <p>Nå kan du prøve å bare endre verdien av <code>sides</code> og kjøre om igjen. Tegner programmet de riktige mangekantene?</p> </li> </ul> </section> </section> <section class=activity id=steg-5-egne-kommandoer> <h1 class=activity id=steg-5-egne-kommandoer>Steg 5: Egne kommandoer</h1> <p>I Python kan vi også lage våre egne kommandoer ved å definere funksjoner. Dette er en annen måte vi kan unngå å gjenta oss selv på.</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <p>Vi skal nå lage en funksjon som tegner en mangekant. Dette gjør vi ved å bruke kommandoen <code>def</code> (def er en forkortelse for <em>define</em> som betyr definer). Endre programmet ditt slik at det ser ut som under:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nshape(<span class=hljs-string>'turtle'</span>)\nshapesize(<span class=hljs-number>2</span>)\nbgcolor(<span class=hljs-string>'darkblue'</span>)\ncolor(<span class=hljs-string>'yellow'</span>)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>polygon</span><span class=hljs-params>(sides, length)</span>:</span>\n    angle = <span class=hljs-number>360</span> / sides\n\n    <span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(sides):\n        forward(length)\n        right(angle)\n\npolygon(<span class=hljs-number>4</span>, <span class=hljs-number>100</span>)\n</code></pre> <p>Kjør programmet. Kjenner du igjen firkanten?</p> </li> <li> <p>Nå som vi har laget <code>polygon</code>-funksjonen er det kjempelett å tegne forskjellige mangekanter. Legg for eksempel til de følgende linjene nederst i programmet ditt:</p> <pre><code class=language-python>polygon(<span class=hljs-number>3</span>, <span class=hljs-number>100</span>)\npolygon(<span class=hljs-number>4</span>, <span class=hljs-number>100</span>)\npolygon(<span class=hljs-number>5</span>, <span class=hljs-number>100</span>)\nforward(<span class=hljs-number>125</span>)\nright(<span class=hljs-number>180</span>)\npolygon(<span class=hljs-number>3</span>, <span class=hljs-number>150</span>)\npolygon(<span class=hljs-number>5</span>, <span class=hljs-number>150</span>)\npolygon(<span class=hljs-number>7</span>, <span class=hljs-number>150</span>)\n</code></pre> </li> </ul> </section> </section> <section class=activity id=steg-6-skilpaddekunst> <h1 class=activity id=steg-6-skilpaddekunst>Steg 6: Skilpaddekunst</h1> <p>Vi vil til slutt generalisere funksjonen vår litt slik at den ikke bare tegner kjedelige mangekanter.</p> <section class=check id=sjekkliste-6> <h2 class=check id=sjekkliste-6>Sjekkliste</h2> <ul> <li> <p>Vi lager nå en ny funksjon <code>polylines</code> som ligner veldig mye på <code>polygon</code>, men hvor vi også kan endre på vinklene slik at de ikke alltid summerer seg til 360. Dette gjør underverker for kunsten vår! Endre programmet ditt slik at det ser slik ut:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nshape(<span class=hljs-string>'turtle'</span>)\nshapesize(<span class=hljs-number>2</span>)\nbgcolor(<span class=hljs-string>'darkblue'</span>)\ncolor(<span class=hljs-string>'yellow'</span>)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>polylines</span><span class=hljs-params>(sides, length, angle)</span>:</span>\n    <span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(sides):\n        forward(length)\n        right(angle)\n\npolylines(<span class=hljs-number>5</span>, <span class=hljs-number>100</span>, <span class=hljs-number>144</span>)\n</code></pre> <p>Kjør programmet. Hva tegner skilpadden nå?</p> </li> <li> <p>En annen variant kan være hvor vi tegner en litt skjev mangekant. For eksempel den følgende kommandoen vil tegne firkanter hvor vinklene er 91 grader i stedet for 90 grader. Dette blir overraskende stilig. Bytt ut <code>polylines</code>-kommandoen med</p> <pre><code class=language-python>polylines(<span class=hljs-number>91</span>, <span class=hljs-number>200</span>, <span class=hljs-number>91</span>)\n</code></pre> </li> <li> <p>Vi kan også endre lengden av strekene etterhvert som vi tegner. Dette skaper en fin spiraleffekt. Legg merke til hvor mye funksjonen <code>spiral</code> ligner på <code>polylines</code>:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nshape(<span class=hljs-string>'turtle'</span>)\nshapesize(<span class=hljs-number>2</span>)\nbgcolor(<span class=hljs-string>'darkblue'</span>)\ncolor(<span class=hljs-string>'yellow'</span>)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>polylines</span><span class=hljs-params>(sides, length, angle)</span>:</span>\n    <span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(sides):\n        forward(length)\n        right(angle)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>spiral</span><span class=hljs-params>(sides, length, angle)</span>:</span>\n    <span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(sides):\n        forward(length)\n        right(angle)\n        length = length + <span class=hljs-number>5</span>\n\nspiral(<span class=hljs-number>100</span>, <span class=hljs-number>5</span>, <span class=hljs-number>125</span>)\n</code></pre> </li> <li> <p>Prøv forskjellige verdier i stedet for 100, 5 og 125 når du kaller <code>spiral</code>. Finner du noen verdier som gir spesielt fine bilder synes du?</p> </li> </ul> </section> <section class=try id=prov-selv> <h2 class=try id=prov-selv>Prøv selv</h2> <p>Kombiner de forskjellige funksjonene vi har laget, <code>polygon</code>, <code>polylines</code> og <code>spiral</code> med de andre skilpadde-kommandoene du har lært som for eksempel <code>forward</code> og <code>left</code>. Klarer du å tegne enda mer spennende kunstverk? Eller kanskje du kan tegne en by? Et hus kan for eksempel lages ved først å tegne en firkant og deretter en trekant på toppen for taket.</p> <p>Et tips helt på slutten er at funksjonene <code>penup()</code> og <code>pendown()</code> styrer om skilpadden tegner mens den flytter på seg. Disse er veldig nyttige når man vil tegne flere figurer som ikke henger sammen.</p> <p>Et annet tips er funksjonen <code>speed()</code>. Denne justerer hastigheten som skilpadden tegner med. For eksempel vil <code>speed(1)</code> tegne veldig sakte, mens <code>speed(11)</code> tegner kjempefort.</p> </section> </section> "},2805:function(e,s,n){e.exports=n.p+"_/oppgaver/src/python/skilpaddekunst/skilpaddekunst.1d7bd6.png"}});