webpackJsonp([97,374],{1508:function(e,t,n){e.exports={frontmatter:n(610),content:n(2339)}},2339:function(e,t,n){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p><strong>Målet med dette oppgavesettet</strong> er å gi deg en enkel introduksjon til internett og hvordan nettsider og HTML fungerer. I denne oppgaven er det viktig at du tar deg god tid og leser oppgavene nøye.</p> <p>Har du noen gang lurt på hvordan internett virker? Klart du har det! I dag kommer du til å lære hvordan man lager nettsider slik at du også kan hjelpe til med å bygge det. Nettsider blir skrevet ved å bruke <strong>HTML</strong>, som er en forkortelse for <strong>HyperText Markup Language</strong> på engelsk. Du kommer til å finne ut mer om dette ettersom du bygger siden din.</p> <p>Filene som du bes åpne i denne oppgaven finner du i <a href=internett.zip>internett.zip</a>. Last ned filen og pakk den ut før du starter. Om du ikke får pakket ut filen, kan du laste ned programmet <a href=http://www.7-zip.org/ >7zip</a> som pakker ut zip-filer.</p> </section> <section class=activity id=steg-1-hva-er-nettsider> <h1 class=activity id=steg-1-hva-er-nettsider>Steg 1: Hva er nettsider?</h1> <section class=check id=aktiviteter> <h2 class=check id=aktiviteter>Aktiviteter</h2> <ol> <li>Åpne en <strong>teksteditor</strong>, for eksempel teksteditoren <a href=http://atom.io>Atom</a>, <a href=http://brackets.io/ >Brackets</a>, NotePad eller <a href=https://notepad-plus-plus.org/ >NotePad++</a>.</li> <li>Lag et nytt dokument.</li> <li>Skriv noe! For eksempel: <code>Hei! Jeg heter ...</code></li> <li>Lagre filen til filnavnet <code>hei.txt</code>.</li> <li>Finn filen din i filbehandleren og åpne den. Den åpnes i et tekstprogram, og det er jo ikke så gøy.</li> <li>Lagre nå filen på nytt til filnavnet <code>fil.html</code> med <em>Lagre som</em>.</li> <li>Åpne filen på nytt.</li> </ol> <p>Hvilket program ble filen åpnet i denne gangen? Nettleseren er et spesielt program som vet hvordan man skal tolke tekstfiler som er skrevet ved hjelp av HTML. Vi har ikke laget noe HTML enda, bare en HTML-fil. I HTML-filen har vi kun tekst, men det bryr ikke nettleseren seg noe om! Så lenge du gir den en <code>.html</code>-fil, kommer den til å gjøre sitt beste for å vise deg hva som er i filen. Det samme gjelder når en HTML-fil inneholder feil, da vil nettleseren prøve å finne ut av hvordan den skal vises fram uansett.</p> <p><strong>Hvordan kan vi se disse filene?</strong></p> <p>Når du skriver en adresse inn i nettleseren din, blir forespørselen din sendt avgårde til en datamaskin som alltid står på og er innstilt for å la deg se nettsidene som lever inni den. Denne datamaskinen kalles en <em>server</em>. Når den mottar en forespørsel fra din datamaskin, ser den etter alle de nødvendige filene, som for eksempel <code>.html</code>-filen, og sender deg den sammen med alt det andre nettsiden trenger, for eksempel bilder og videoer.</p> <section id=kan-jeg-fa-denne-siden-takk> <h3 id=kan-jeg-fa-denne-siden-takk>Kan jeg få denne siden takk?</h3> <figure><img src="+n(2983)+" alt=\"\" title=\"Din datamaskin: 'Hei! Kan jeg få se http://kodeklubben.no, vær så snill?', En datamaskin som vet hvor forskjelligere nettsteder bor: 'Denne maskinen har filene', Datamaskin som filene til nettstedet er lagret på: 'Her er filene du trenger'\"/></figure> </section> </section> </section> <section class=activity id=steg-2-hva-er-html> <h1 class=activity id=steg-2-hva-er-html>Steg 2: Hva er HTML?</h1> <p>HTML er et <strong>markeringsspråk</strong> - det betyr at det brukes til å beskrive hva ting er. Selv om nettleseren prøver å gjøre sitt beste for å vise ting, hjelper det at den vet hva disse tingene er. For å fortelle nettleseren det, bruker vi <strong>tagger</strong>. Tagger ser sånn ut:</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-title>p</span>&gt;</span>Dette er litt tekst.<span class=hljs-tag>&lt;/<span class=hljs-title>p</span>&gt;</span>\n</code></pre> <p><code>&lt;p&gt;</code> er en forkortelse for <strong>paragraf</strong>. Den har en åpning, som er <code>&lt;p&gt;</code>, og en tilsvarende avslutning med skråstrek, <code>&lt;/p&gt;</code>. Nettleseren vet da at alt imellom de to taggene er en paragraf med tekst.</p> <p>Tagger kan også ha <strong>attributter</strong>, som er informasjon om elementet. La oss se på link-taggen:</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-title>a</span> <span class=hljs-attribute>href</span>=<span class=hljs-value>\"http://kodeklubben.no/\"</span>&gt;</span>Besøk nettsiden til Kodeklubben<span class=hljs-tag>&lt;/<span class=hljs-title>a</span>&gt;</span>\n</code></pre> <p><code>&lt;a&gt;</code> betyr <strong>anker</strong>, som er det linker ble kalt før. Den har åpningen <code>&lt;a&gt;</code> og avslutningen <code>&lt;/a&gt;</code>. I åpningstaggen la vi til attributten <code>href</code> med verdien <code>http://kodeklubben.no/</code>. <code>href</code> står for <em>hypertekst referanse</em>. En tekst som linket til andre tekster ble en gang kalt <em>hypertekst</em>, fordi den kunne peke til bilder, lyd og andre tekster. Det gjorde <em>anker</em> annerledes enn annen vanlig tekst. <code>href</code> forteller nettleseren hvor linken skal føre deg, og teksten i mellom taggene vil bli synlig som en link.</p> <section class=check id=aktiviteter-2> <h2 class=check id=aktiviteter-2>Aktiviteter</h2> <ul> <li>Installer <strong>X-Ray Goggles</strong> ved å trekke linken <a href=\"javascript:(function () {var script=document.createElement('script');script.src='https://goggles.mozilla.org'+'/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://goggles.mozilla.org');document.body.appendChild(script);}())\">X-Ray Goggles</a> til din bokmerkerad.</li> <li>Åpne filen <code>side.html</code> fra <a href=internett.zip>internett.zip</a>.</li> <li>Trykk på <em>X-Ray Goggles</em> fra bokmerkeraden din. Om ingenting skjer, spør en CodeMaster/veileder om hjelp til å bruke utviklerverktøyet i din nettleser.</li> <li>Beveg musen rundt på siden. Da kan du se deler av siden lyse opp og se hvilke tagger delene er laget av.</li> <li>Trykk på noe for å se kodesnutten det er laget av.</li> <li>Trykk på knappen <strong>ESC</strong> når du er ferdig.</li> </ul> </section> </section> <section class=activity id=steg-3-flere-tagger> <h1 class=activity id=steg-3-flere-tagger>Steg 3: Flere tagger</h1> <p>Vi har allerede nevnt taggene <code>&lt;p&gt;</code> og <code>&lt;a&gt;</code>, men det finnes mange flere. Her er noen tagger som ofte brukes:</p> <ul> <li><code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>, <code>&lt;h5&gt;</code>, <code>&lt;h6&gt;</code>: Overskrifter med ulik størrelse.</li> <li><code>&lt;ol&gt;</code>: Sortert liste.</li> <li><code>&lt;ul&gt;</code>: Usortert liste.</li> <li><code>&lt;li&gt;</code>: Et punkt i en liste.</li> <li><code>&lt;hr&gt;</code>: Horisontal linje.</li> <li><code>&lt;div&gt;</code>: En boks for å gruppere ting.</li> <li><code>&lt;img&gt;</code>: Et bilde. Bilder er litt spesielle, fordi i motsetning til de fleste andre tagger så har <strong>ikke</strong> <code>&lt;img&gt;</code> en avslutning <code>&lt;/img&gt;</code>. For å vise et bilde bruker vi et attributt som heter <code>src=&quot;lenke til bildet&quot;</code>, men dette skal vi se nærmere på i en senere oppgave.</li> </ul> <p>Det finnes også noen tagger som vi alltid må ha med i HTML dokumenter:</p> <ul> <li> <p><code>&lt;html&gt;</code>: Forteller nettleseren at her kommer det HTML-kode.</p> </li> <li> <p><code>&lt;head&gt;</code>: Inne i <code>&lt;head&gt;</code> skriver vi ting som er nyttig for nettleseren, men som ikke vil dukke opp som tekst på selve nettsiden. For eksempel kan vi bruke taggen <code>&lt;title&gt;</code>:</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-title>head</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-title>title</span>&gt;</span>Arves hjemmeside<span class=hljs-tag>&lt;/<span class=hljs-title>title</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-title>head</span>&gt;</span>\n</code></pre> <p><code>Arves hjemmeside</code> vil da benyttes som tittel til hjemmesiden og vises i vinduet til nettleseren.</p> </li> <li> <p><code>&lt;body&gt;</code>: Her putter vi det som skal dukke opp på nettsiden.</p> </li> </ul> <section class=check id=aktiviteter-3> <h2 class=check id=aktiviteter-3>Aktiviteter</h2> <ul> <li> <p>Åpne filen <code>side.html</code> i teksteditoren din.</p> </li> <li> <p>Legg merke til hvordan tagger kan stå på innsiden av andre tagger. Vi har <code>&lt;a&gt;</code>-taggen, som er inni <code>&lt;p&gt;</code>-taggen, som igjen er inni <code>&lt;div&gt;</code>, som er plassert i <code>&lt;body&gt;</code>. Når en tagg er på innsiden av en annen sier vi at taggen som er inni er <strong>barnet</strong> og taggen som er rundt er <strong>forelder</strong>. Det er nesten som et slektstre!</p> </li> <li> <p>For nettleseren er tagger av samme type like, men du kan skille de fra hverandre ved å bruke klasser. For eksempel kan noen paragrafer være introduksjoner, og da kan vi bruke klassen <code>introduksjon</code> for å skille disse paragrafene fra andre paragrafer. Finn taggene som har klasser i filen <code>side.html</code>.</p> </li> <li> <p>ID-er brukes for å markere unike elementer på siden din. Finn <code>div</code>-taggen som har <code>id=&quot;kattunge&quot;</code>.</p> </li> <li> <p>Hva skjer hvis du flytter ting rundt? Finn en <code>&lt;ol&gt;</code> tagg i koden og velg den og alt som er inni den, slik som dette:</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-title>ol</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-title>li</span>&gt;</span>Kattunger<span class=hljs-tag>&lt;/<span class=hljs-title>li</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-title>li</span>&gt;</span>Universet<span class=hljs-tag>&lt;/<span class=hljs-title>li</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-title>li</span>&gt;</span>Å sove lenge<span class=hljs-tag>&lt;/<span class=hljs-title>li</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-title>li</span>&gt;</span>Å spille spill<span class=hljs-tag>&lt;/<span class=hljs-title>li</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-title>ol</span>&gt;</span>\n</code></pre> </li> <li> <p>Kopier teksten og flytt den til et annet sted.</p> </li> <li> <p>Lagre siden og åpne den i nettleseren.</p> </li> <li> <p>Hvordan påvirker rekkefølgen av koden rekkefølgen på det som vises i nettleseren?</p> </li> </ul> </section> <section class=try id=ting-du-kan-prove> <h2 class=try id=ting-du-kan-prove>Ting du kan prøve</h2> <ul> <li>Lag din egen paragraf med tekst.</li> <li>Lag en link som peker til en annen del av siden. <strong>Hint:</strong> Det har noe med ID å gjøre, se etter en link som peker til katten.</li> <li>Legg til dine egne overskrifter der du syns de kan passe. Hva skjer hvis du endrer tallet i overskrift-taggen, for eksempel fra <code>&lt;h3&gt;</code> til <code>&lt;h4&gt;</code>?</li> <li>Hva må du gjøre for å linke til en annen side?</li> <li>Bruk utviklerverktøyet og dobbeltklikk på kode som ser interessant ut. Endre koden. Du får da en forhåndsvisning på hva som skjer, uten at du trenger å bytte mellom nettleseren og teksteditor. Kult, ikke sant? Oppdater siden. Hva skjedde? Når du redigerer kode på denne måten blir det ikke lagret, så du kan teste hva som skjer uten å ødelegge filen. Sånn kan du eksperimentere masse, men alltid ha muligheten til å gå tilbake.</li> </ul> </section> </section> "},2983:function(e,t,n){e.exports=n.p+"_/oppgaver/src/web/introduksjon_til_web/webdialog.acc430.png"}});