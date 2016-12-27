webpackJsonp([28,374],{1369:function(e,A,s){e.exports={frontmatter:s(471),content:s(2200)}},2200:function(e,A,s){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Vi vil nå jobbe videre med skilpaddekunsten fra tidligere. Denne gangen skal vi tegne forskjellige figurer som kalles fraktaler. Fraktaler er figurer som bygges opp av små kopier av seg selv. I løpet av leksjonen vil vi også jobbe mer med funksjoner og rekursjon.</p> <figure><img src="+s(2803)+" alt=\"\"/></figure> </section> <section class=activity id=steg-1-husker-du-skilpadden> <h1 class=activity id=steg-1-husker-du-skilpadden>Steg 1: Husker du skilpadden?</h1> <p>Vi har brukt skilpaddebiblioteket <code>turtle</code> tidligere. Du husker kanskje kode som lignet på den under?</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nshape(<span class=hljs-string>'turtle'</span>)\nshapesize(<span class=hljs-number>2</span>)\nbgcolor(<span class=hljs-string>'darkblue'</span>)\ncolor(<span class=hljs-string>'yellow'</span>)\nspeed(<span class=hljs-number>3</span>)\n\nforward(<span class=hljs-number>270</span>)\n</code></pre> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Skriv inn programmet over. Lagre det med navnet <code>snoflak.py</code> og kjør det. En rett strek skal tegnes på skjermen.</p> </li> <li> <p>Endre litt på tallene og fargene i koden slik at du husker hva de forskjellige kommandoene gjør. Finner du en fargekombinasjon du liker?</p> </li> </ul> </section> </section> <section class=activity id=steg-2-en-fraktal> <h1 class=activity id=steg-2-en-fraktal>Steg 2: En fraktal</h1> <p>En fraktal er en figur som er bygd opp av mindre kopier av seg selv. Vi skal nå se på hvordan vi kan tegne denne figuren:</p> <figure><img src="+s(2801)+' alt=""/></figure> <p>Dette er en fraktal, klarer du å se at den består av mange små kopier av seg selv? Det er kanskje lettere å se i de neste figurene?</p> <figure><img src='+s(2802)+" alt=\"\"/></figure> <p>Den øverste figuren er bare en rett strek. Den neste figuren består av fire rette streker som danner et enkelt fjell. Hvis du nå ser nærmere på den tredje figuren ser du at den består av fire kopier av det enkle fjellet, igjen lagt slik at de danner et litt mer komplisert fjell.</p> <p>Hvis du nå ser tilbake på den første figuren, ser du hvordan den består av mange små kopier av slike fjell?</p> </section> <section class=activity id=steg-3-vi-tar-det-stegvis> <h1 class=activity id=steg-3-vi-tar-det-stegvis>Steg 3: Vi tar det stegvis</h1> <p>Vi skal se på hvordan vi kan lage funksjoner som kan tegne figurene over.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Den rette streken har vi jo allerede tegnet. La oss bare endre litt i programmet vårt slik at dette blir en funksjon:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nshape(<span class=hljs-string>'turtle'</span>)\nshapesize(<span class=hljs-number>2</span>)\nbgcolor(<span class=hljs-string>'darkblue'</span>)\ncolor(<span class=hljs-string>'yellow'</span>)\nspeed(<span class=hljs-number>3</span>)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>en</span><span class=hljs-params>()</span>:</span>\n    forward(<span class=hljs-number>270</span>)\n\nen()\n</code></pre> <p>Husk at vi må kalle funksjonen for at den skal bli gjort.</p> </li> <li> <p>La oss nå legge til en funksjon <code>to()</code> som tegner den andre figuren, det enkle fjellet. Skriv denne funksjonen i den samme filen.</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>to</span><span class=hljs-params>()</span>:</span>\n    forward(<span class=hljs-number>90</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>90</span>)\n    right(<span class=hljs-number>120</span>)\n    forward(<span class=hljs-number>90</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>90</span>)\n\nto()\n</code></pre> <p>Ser du sammenhengen mellom figuren og koden?</p> </li> <li> <p>Kjør programmet ditt. Husk at du kan styre hvilke figurer som tegnes med hvilke funksjoner du kaller. Selv om både <code>en</code> og <code>to</code> er definert trenger du ikke kalle begge funksjonene.</p> </li> <li> <p>I <code>to</code> har vi brukt <code>forward(90)</code>, mens i <code>en</code> brukte vi <code>forward(270)</code>. Det betyr at vi har tegnet den rette streken tre ganger mindre. Men vi har brukt vinkler slik at de fire strekene i <code>to</code> tilsammen blir like lang som den ene streken i <code>en</code>.</p> <p>La oss endre litt i funksjonene slik at vi bruker <code>en</code> i stedet for <code>forward</code> når vi definerer <code>to</code>.</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>en</span><span class=hljs-params>(lengde)</span>:</span>\n    forward(lengde)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>to</span><span class=hljs-params>(lengde)</span>:</span>\n    en(lengde / <span class=hljs-number>3</span>)\n    left(<span class=hljs-number>60</span>)\n    en(lengde / <span class=hljs-number>3</span>)\n    right(<span class=hljs-number>120</span>)\n    en(lengde / <span class=hljs-number>3</span>)\n    left(<span class=hljs-number>60</span>)\n    en(lengde / <span class=hljs-number>3</span>)\n\nto(<span class=hljs-number>270</span>)\n</code></pre> </li> <li> <p>Kjør programmet igjen. Tegnes fortsatt de samme figurene?</p> </li> <li> <p>Vi vil nå tegne den tredje figuren. En måte å gjøre dette på kan være å kombinere <code>forward</code>, <code>left</code> og <code>right</code> slik vi opprinnelig gjorde for <code>to</code>. Du trenger ikke skrive inn denne koden, men se på den og sammenlign med figuren. Ser du at det stemmer?</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>tre</span><span class=hljs-params>()</span>:</span>\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n    right(<span class=hljs-number>120</span>)\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n    right(<span class=hljs-number>120</span>)\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n    right(<span class=hljs-number>120</span>)\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n    right(<span class=hljs-number>120</span>)\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n    right(<span class=hljs-number>120</span>)\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n</code></pre> </li> <li> <p>Dette er en kjedelig måte å programmere på: Vi må skrive kjempemye kode, det er veldig lett å gjøre feil og det tar tid å gjøre endringer i koden.</p> <p>Hvis du ser litt nærmere på koden vil du se at linjene</p> <pre><code class=language-python>    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n    right(<span class=hljs-number>120</span>)\n    forward(<span class=hljs-number>30</span>)\n    left(<span class=hljs-number>60</span>)\n    forward(<span class=hljs-number>30</span>)\n</code></pre> <p>går igjen flere ganger. Sammenlign disse linjene med funksjonen <code>to</code> fra tidligere. Ser du en måte vi kan forenkle koden vår?</p> </li> <li> <p>Vi har sett at koden til <code>tre</code> består av flere kopier av koden til <code>to</code>, bare krympet. Da kan vi jo gjøre samme trikset som tidligere, vi bare kaller <code>to</code>. Skriv inn følgende kode i den samme filen som <code>en</code> og <code>to</code>:</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>tre</span><span class=hljs-params>(lengde)</span>:</span>\n    to(lengde / <span class=hljs-number>3</span>)\n    left(<span class=hljs-number>60</span>)\n    to(lengde / <span class=hljs-number>3</span>)\n    right(<span class=hljs-number>120</span>)\n    to(lengde / <span class=hljs-number>3</span>)\n    left(<span class=hljs-number>60</span>)\n    to(lengde / <span class=hljs-number>3</span>)\n\ntre()\n</code></pre> </li> <li> <p>Klarer du å tegne alle tre figurene nå?</p> </li> </ul> </section> </section> <section class=activity id=steg-4-her-kan-vi-kombinere> <h1 class=activity id=steg-4-her-kan-vi-kombinere>Steg 4: Her kan vi kombinere</h1> <p>Nå skal vi lage en funksjon som kan tegne alle tre figurene!</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <p>Nå kommer det morsomste. Før vi kaster bort tid på å lage flere funksjoner <code>fire</code>, <code>fem</code> og kanskje <code>seks</code>, skal vi se at vi kan lage en funksjon som kan lage alle disse for oss!</p> <ul> <li>Sammenlign funksjonene <code>to</code> og <code>tre</code>. Ser du at de er nesten helt like?</li> </ul> <p>Vi skal nå bruke noe som kalles rekursjon for å lage en funksjon som gjør jobben til både <code>en</code>, <code>to</code> og <code>tre</code>. Rekursjon husker du kanskje fra tidligere. Det betyr at vi lager en funksjon som kaller seg selv, men for å gjøre noe som er litt enklere.</p> <p>Med rekursjon ser man gjerne på det enkle tilfellet og det generelle tilfellet. For disse figurene er <code>en</code> det enkle tilfellet hvor vi bare trenger å tegne en rett strek.</p> <ul> <li> <p>Legg til denne funksjonen. Dette er det enkle tilfellet:</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>fjell</span><span class=hljs-params>(lengde, dybde)</span>:</span>\n    <span class=hljs-keyword>if</span> dybde == <span class=hljs-number>1</span>:\n        forward(lengde)\n        <span class=hljs-keyword>return</span>\n</code></pre> <p>Her bruker vi <code>return</code> for å si at vi ikke vil gjøre mer for det enkle tilfellet.</p> </li> <li> <p>Det generelle tilfellet er det vi har sett tidligere i <code>to</code> og <code>tre</code>. Med den nye variabelen <code>dybde</code> kan vi lage både <code>to</code> og <code>tre</code> med samme kode. Utvid funksjonen <code>fjell</code> slik at den ser slik ut:</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>fjell</span><span class=hljs-params>(lengde, dybde)</span>:</span>\n    <span class=hljs-keyword>if</span> dybde == <span class=hljs-number>1</span>:\n        forward(lengde)\n        <span class=hljs-keyword>return</span>\n\n    fjell(lengde / <span class=hljs-number>3</span>, dybde - <span class=hljs-number>1</span>)\n    left(<span class=hljs-number>60</span>)\n    fjell(lengde / <span class=hljs-number>3</span>, dybde - <span class=hljs-number>1</span>)\n    right(<span class=hljs-number>120</span>)\n    fjell(lengde / <span class=hljs-number>3</span>, dybde - <span class=hljs-number>1</span>)\n    left(<span class=hljs-number>60</span>)\n    fjell(lengde / <span class=hljs-number>3</span>, dybde - <span class=hljs-number>1</span>)\n</code></pre> <p>Kjenner du igjen koden fra tidligere?</p> </li> <li> <p>Prøv å tegn</p> <pre><code class=language-python>fjell(<span class=hljs-number>270</span>, <span class=hljs-number>2</span>)\n</code></pre> <p>og</p> <pre><code class=language-python>fjell(<span class=hljs-number>270</span>, <span class=hljs-number>3</span>)\n</code></pre> <p>Gir dette samme resultat som <code>to(270)</code> og <code>tre(270)</code>?</p> </li> <li> <p>Den nye funksjonen gjør enda mer enn <code>to</code> og <code>tre</code>. Vi kan bruke enda større dybde. Prøv for eksempel <code>fjell(270, 6)</code>. Denne vil bruke litt tid. Bruk <code>speed(11)</code> for at skilpadden skal bevege seg så raskt som mulig.</p> </li> </ul> </section> </section> <section class=activity id=steg-5-et-snoflak> <h1 class=activity id=steg-5-et-snoflak>Steg 5: Et snøflak</h1> <p>Vi skal nå kombinere flere slike fjell til et fint snøflak.</p> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Til sist skal vi kombinere flere kall til <code>fjell</code>-funksjonen vår for å tegne det fine snøflaket du så helt først i oppgaven. Ser du hvordan snøflaket består av tre fjell?</p> <p>Legg til denne funksjonen:</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>snoflak</span><span class=hljs-params>(lengde, dybde)</span>:</span>\n    <span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(<span class=hljs-number>3</span>):\n        fjell(lengde, dybde)\n        right(<span class=hljs-number>120</span>)\n</code></pre> </li> <li> <p>Prøv å kall denne <code>snoflak</code>-funksjonen med forskjellige lengder og dybder.</p> </li> </ul> <p>Dette snøflaket er en av de mest kjente fraktalene. Det har fått navnet Kochs snøflak fordi en av de første som studerte denne figuren het Helge von Koch.</p> </section> </section> <section class=activity id=steg-6-firkantede-fjell> <h1 class=activity id=steg-6-firkantede-fjell>Steg 6: Firkantede fjell</h1> <p>La oss se på en variant av snøflaket.</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <p>Vi vil nå lage en fraktal på samme måte som Koch-figuren men med en litt form. I stedet for en trekant som danner fjellet vil vi bruke en firkant som i figuren under:</p> <figure><img src="+s(2800)+" alt=\"\"/></figure> <ul> <li> <p>Lag en ny fil som du kaller <code>firkantfjell.py</code>.</p> </li> <li> <p>Som tidligere så kan vi prøve å tegne dette nye fjellet med funksjoner for hvert steg. For eksempel</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nshape(<span class=hljs-string>'turtle'</span>)\nshapesize(<span class=hljs-number>2</span>)\nbgcolor(<span class=hljs-string>'darkblue'</span>)\ncolor(<span class=hljs-string>'yellow'</span>)\nspeed(<span class=hljs-number>3</span>)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>en</span><span class=hljs-params>(lengde)</span>:</span>\n    forward(lengde)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>to</span><span class=hljs-params>(lengde)</span>:</span>\n    en(lengde / <span class=hljs-number>3</span>)\n    left(<span class=hljs-number>90</span>)\n    en(lengde / <span class=hljs-number>3</span>)\n    right(<span class=hljs-number>90</span>)\n    en(lengde / <span class=hljs-number>3</span>)\n    right(<span class=hljs-number>90</span>)\n    en(lengde / <span class=hljs-number>3</span>)\n    left(<span class=hljs-number>90</span>)\n    en(lengde / <span class=hljs-number>3</span>)\n\nto(<span class=hljs-number>270</span>)\n</code></pre> </li> <li> <p>Men vi har jo lært at det er mye bedre å bruke rekursjon. Vi vil lage en funksjon som kan tegne mange forskjellige firkantfjell ved at den kaller seg selv.</p> <p>Prøv selv om du kan skrive denne. Se på hvordan vi laget <code>fjell</code> tidligere, og på hvordan vi laget <code>en</code> og <code>to</code> nå sist.</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>firkantfjell</span><span class=hljs-params>(lengde, dybde)</span>:</span>\n    <span class=hljs-keyword>if</span> dybde == <span class=hljs-number>1</span>:\n        <span class=hljs-comment># Her må du programmere det enkle tilfellet</span>\n        <span class=hljs-keyword>return</span>\n\n    <span class=hljs-comment># Her må du programmere det generelle tilfellet</span>\n</code></pre> </li> <li> <p>Test koden din. Blir det riktig? Nedenfor ser du et eksempel hvor vi har laget et firkantfjell med dybde 6.</p> <figure><img src="+s(2799)+' alt=""/></figure> </li> </ul> </section> </section> <section class=activity id=steg-7-trekanter> <h1 class=activity id=steg-7-trekanter>Steg 7: Trekanter</h1> <p>Vi trenger ikke bare bruke rette streker for det enkle tilfellet.</p> <section class=check id=sjekkliste-6> <h2 class=check id=sjekkliste-6>Sjekkliste</h2> <p>Vi skal nå lage en fraktal basert på trekanter. La oss se på de første stegene:</p> <figure><img src='+s(2804)+' alt=""/></figure> <p>Her ser vi at vi har en trekant som byttes ut med tre mindre trekanter.</p> <ul> <li> <p>Lag en ny fil <code>trekant.py</code> og legg til de vanlige kommandoene på toppen av filen.</p> </li> <li> <p>I det enkle tilfellet vil vi nå tegne en trekant. Det kan vi gjøre på denne måten:</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>trekant</span><span class=hljs-params>(lengde, dybde)</span>:</span>\n    <span class=hljs-keyword>if</span> dybde &lt;= <span class=hljs-number>1</span>:\n        pendown()\n        <span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(<span class=hljs-number>3</span>):\n            forward(lengde)\n            left(<span class=hljs-number>120</span>)\n        penup()\n        <span class=hljs-keyword>return</span>\n</code></pre> </li> <li> <p>For det generelle tilfellet må vi stable tre trekanter. Det kan vi gjøre for eksempel med koden under. Sammenlign koden med figuren. Ser du sammenhengen?</p> <pre><code class=language-python>    trekant(lengde / <span class=hljs-number>2</span>, dybde - <span class=hljs-number>1</span>)\n    forward(lengde / <span class=hljs-number>2</span>)\n    trekant(lengde / <span class=hljs-number>2</span>, dybde - <span class=hljs-number>1</span>)\n    left(<span class=hljs-number>120</span>)\n    forward(lengde / <span class=hljs-number>2</span>)\n    right(<span class=hljs-number>120</span>)\n    trekant(lengde / <span class=hljs-number>2</span>, dybde - <span class=hljs-number>1</span>)\n    right(<span class=hljs-number>120</span>)\n    forward(lengde / <span class=hljs-number>2</span>)\n    left(<span class=hljs-number>120</span>)\n</code></pre> </li> <li> <p>Tegn noen trekanter med forskjellig dybde og størrelse. Denne fraktalen er også ganske kjent, og går ofte under navnet Sierpinski-trekanten.</p> </li> </ul> </section> <section class=try id=prov-selv> <h2 class=try id=prov-selv>Prøv selv</h2> <p>Det finnes mange fraktaler, og du kan lage dine helt egne også!</p> <p>Prøv for eksempel å endre litt på vinklene og lengdene i <code>fjell</code>- eller <code>firkantfjell</code>-funksjonene.</p> <p>Eller kanskje du kan lage en helt annen figur? Prøv og tegn dine egne <code>en</code>- og <code>to</code>-figurer som du så oversetter til Python.</p> <p>Her er et forslag til en figur du kan prøve, men prøv også å lage dine egne!</p> <figure><img src='+s(2798)+' alt=""/></figure> </section> </section> '},2798:function(e,A){e.exports="data:image/png;base64,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"},2799:function(e,A){e.exports="data:image/png;base64,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"},2800:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAADwCAIAAABXFyDtAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gsNChMS/puLPwAAAr5JREFUeNrt3cEJhFAQREFbzD/lNghBx6EqhF7mLfyLaXsAMM9pAgCBBkCgAQQaAIEGEGgABBoAgQYQaAAEGkCgARBoAAQaQKABEGgAgQZAoAEEGgCBBgCAX4qPxgLM5IkDQKABEGgAgQZAoAEEGgCBBkCgAQQaAIEGEGgABBoAgQYQaAAEGkCgARBoAIEGQKABEGgAgQZAoAEEGgCBBkCgAQQaAIEGEGgABBpAoAEQaAAEGkCgARBoAIEGQKABEGgAgQbgmcsEuyUxwm5tjSDQOGD8AfMqTxwAAg2AQAMINAACDSDQAAg0AAININAACDSAQAMg0AAINIBAAyDQAAINgEADCDQAAg2AQAMINAACDSDQAAg0AAININAACDSAQAMg0AACDYBAAyDQAAINgEADCDQAAg2AQAMINAACDSDQAAg0gECbAECgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaAIEGEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQYQaAAEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQYQaAAEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgAQQaAIEGQKABBBoAgQYQaAAEGgCBBhBoAAQaQKABEGgAgQZAoAEQaACBBkCgAQQaAIEGQKABBBoAgQYQaAAEGgCBBhBoAAQaQKABEGgAgQZAoAEQaACBBkCgAQQaAIEGQKABBBoAgQYQaAAEGkCgARBoAAQaQKABEGgAgQbgOzHBem2NsPaA44RX/76uF2AmTxwAAg2AQAMINAACDSDQAAg0AAININAACDSAQAMg0AAINIBAAyDQAAINgEADCDQAc9xuuhPWr2nfgAAAAABJRU5ErkJggg=="},2801:function(e,A){e.exports="data:image/png;base64,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";
},2802:function(e,A){e.exports="data:image/png;base64,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"},2803:function(e,A,s){e.exports=s.p+"_/oppgaver/src/python/skilpaddefraktaler/skilpaddefraktaler.bb0d80.png"},2804:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAC6CAIAAAD51AnnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gsNDDId5jb//wAABZxJREFUeNrt3UFu3EAMBMDdQf7/ZeXgc2Jp7ZHIZtULAppsdQYw/D6O4wVAPcsIAAQ0AAIaQEAP9H6/DQEcjoCuuGTHcVg1cDgCGkBAc7oFvF4vXQAcjoAGENCcbgFfdAFwOAIaQEBzugXoAuBwBHTdJbNq4HAENICA5mIL0AXA4QhoAAHNxRagC4DDEdB1l8yqgcMR0AACmostQBcAhyOgAQS0FvDR39LVBXA4DkdAAwhoLUAXAIcjoAOWzKrhcByOgAYQ0FqALgAOR0ADIKD3tgBdAIfjcAQ0EJXOMlpA2zNAQM9OZxmNw3E4AhpAQGsBugA4HAENwOiAvqEF6AI4HIcjoIGodJbRowPangECWjrLaByOwxHQAAJaC9AFcDgOR0ADo9N5ckYve2bPAAEtnWU0DsfhCGgAAa0F6AI4HIcjoAE0aC1AFwCHI6AB6SyjRwe0PQMEtHSW0TgchyOgAQS0FqALoD47HAENwIyAbtEClGgcjsPRoIGodJ6Q0cue2TNAQEtnGY3DcTgaNICA1gJ0ARyOwxHQgHSeldHLntkzQEBLZxmNw3E4gxs0gIDWAnQBHI7DEdAAGrQWoAugPjscAQ1IZxk9IKDtGRCpfUAHp7OMxuEMPxxPHAACWgtQonE4DkeDBoanc0ZGL3tmzwABDag1ys2AgLZngAYtnWU06rPDEdAAtA7osS1AicbhTDscDRqks4wW0PZMiQZSA1o6y2gczqjD8cQBIKC1ACUah+NwNGhAOgdk9LJn9gwQ0IBao9xkBbQ9U6JBg5bOMhr12eEIaAC+/dBW/sxqAWbFZ8tgCJeqdNl/2x8/Hsj7VPtgZ8xqFZ+dHTrfAvQmCOMNGtIqoQ92zKxW8dmhRIMGLZ1lNCGV0DLEzMoTB4AGrT4r0dx7OJah+6w0aMhMHBkdMKvVZXYo0TCNBg2xldAHu/usVqPZoUSDBi2dZTQhldAytJ6VJw4ADVp9VqJ57nCGL0PTWWnQkJ84wzO676xWx9nhJmGChwNaOsto7jycgcvQelaeOAA0aPVZiabA4Yxahu6z0qABNGj1WYmmxuEMWYaAWWnQMCtxhmR0xqxW99nhJiHVAwEtnWU0FQ4neBliZuWJA0CDVp+VaIodTuQyJM1Kg4ahiROZ0WGzWjGzQ4mGMBo0zK2EYR/svFmtpNmhRIMGLZ1lNFGHE7AMkbPyxAEwuEGrz0o09Q+n9TKkzkqDBonTO6ODZ7UiZ4cSDQH2BrR0ltH0Opx2y5A9K08cAPMatPqsRNPxcBotQ/ysNGiAYQ1afVai6Xs4LZZhwqw0aJA4/TJ6yKxW/OxQoqGp3w9o6SyjyTicssswZ1aeOABmNGj1WYkm6XAKLsOoWWnQAAMatPqsRJN3OKWWYdqsNGiQOD0yeuCs1qjZoURDI78T0NJZRpN9OI8vw8xZeeIAyG3Q6rMSzYTDeXAZxs5KgwYIbdDqsxLNnMN5ZBkmz2oNHBwyWjp3WYbhs/LEAVDU5wGtPivRzDyc25bBrDRogKwGrT4r0Uw+nBuWwaw0aICsBq0+K9E4nK3LYFYfBrR0ltEyWuJsXQaz+lGDBuAG1wJafUaJVgm3LoNZadAAWQ1afUaJVgm3LoNZadAgnStmtFl9HtDqM0o03OxUQEtnZLRKuHUZzOpHDRqAcg1afUaJVgm3LoNZadAAWQ1afUaJVgm3LoNZadAgnStmtFn9f1bL7FCioaYlnZHR6vMjy2BW387KEwdAqwbty4YSrT5vXQazOjMrDRqgT4P2ZUOJVp+3LoNZnZzVMjhktHS+cxnM6vysPHEAFLV82VCi1efblsGsLh2OBg1QvkH7sqFEq89bl8Gsrh6OBg1Q9fP/9UHzS7rsawTZ9dmPmH2H438cAEV54gAQ0AAIaAABDYCABhDQAAhoAP7pLydC1L74k1AiAAAAAElFTkSuQmCC"}});