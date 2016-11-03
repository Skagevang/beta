webpackJsonp([49,283],{1185:function(s,e,a){s.exports={frontmatter:a(521),content:a(1835)}},1835:function(s,e,a){s.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>I denne oppgaven skal vi jobbe videre med skrift, størrelser og farger. Vi skal utforske forskjellige skrifttyper, se på bakgrunnsfarger og vi skal sette CSS på bilder.</p> <p>Denne oppgaven bygger på forrige oppgave, <a href=../style_nettsider/style_nettsider.html>CSS: Style nettsider</a>, så hvis du ikke har gjort den, så anbefaler jeg det siden vi skal fortsette på koden derfra. Evt så kan du kopiere koden som ligger nederst på siden til <a href=../style_nettsider/style_nettsider.html>CSS: Style nettsider</a>.</p> </section> <section class=activity id=steg-1-fonter-og-tekst-stiler> <h1 class=activity id=steg-1-fonter-og-tekst-stiler>Steg 1: Fonter og tekst-stiler</h1> <p>Vi kan forandre utseende på teksten ved å endre <strong>skrifttypen</strong> eller <strong>fonten</strong> som det også heter. De mest vanlige fontene heter:</p> <ul> <li>Arial</li> <li>Courier New, Courier</li> <li>Garamond</li> <li>Georgia</li> <li>Lucida Sans, Lucida Grande, Lucida</li> <li>Palatino Linotype</li> <li>Tahoma</li> <li>Times New Roman, Times</li> <li>Trebuchet</li> <li>Verdana</li> </ul> <p>Ikke alle fonter finnes på alle datamaskiner, så vi trenger å angi en <strong>reserve font</strong> også. Det skal vi se på etterpå.</p> <p>En font har en stil, de som blir oftest brukt er <code>sans serif</code> eller <code>serif</code>. Under kan du se forskjellen på <code>sans serif</code> og <code>serif</code>. Som du ser er det ikke store forskjellen, men det utgjør en liten forskjell for leseren, noen er lettere å lese enn andre.</p> <figure><img src="+a(2563)+" alt=sans-serif_vs_serif /></figure> <p>La oss prøve å endre fonten på overskriften ved å bruke <code>font-family</code> egenskapene. Dersom du ikke har <code>index.html</code> fra <a href=../style_nettsider/style_nettsider.html>CSS: Style nettsider</a>, så kan du hente koden ved å kopiere den nederst i <em>CSS: Style nettsider</em>-oppgaven.</p> <ul> <li>Legg til <code>font-family</code> med en font du ønsker på overskriften på nettsiden din. Under har vi brukt fonten <code>impact</code> med <code>sans-serif</code>-stil, du kan godt velge en annen.</li> </ul> <p><strong>Merk!</strong> i CSS-en har vi <code>font-family: font, skriftstil</code>. Altså har vi navnet på fonten, etterfulgt av hvilken stil vi vil at den skal være, <code>sans-serif</code> eller <code>serif</code>.</p> <pre><code class=language-css><span class=hljs-tag>h1</span> <span class=hljs-rules>{\n  <span class=hljs-rule><span class=hljs-attribute>color</span>:<span class=hljs-value> red</span></span>;\n  <span class=hljs-rule><span class=hljs-attribute>background-color</span>:<span class=hljs-value> black</span></span>;\n  <span class=hljs-rule><span class=hljs-attribute>font-size</span>:<span class=hljs-value> <span class=hljs-number>72px</span></span></span>;\n  <span class=hljs-rule><span class=hljs-attribute>text-transform</span>:<span class=hljs-value> uppercase</span></span>;\n  <span class=hljs-rule><span class=hljs-attribute>text-decoration</span>:<span class=hljs-value> underline</span></span>;\n  <span class=hljs-rule><span class=hljs-attribute>text-decoration</span>:<span class=hljs-value> blink</span></span>;\n  <span class=hljs-rule><span class=hljs-attribute>font-family</span>:<span class=hljs-value> impact, sans-serif</span></span>;\n}</span>\n</code></pre> <ul> <li>Nå skal du endre fonten for alle paragrafer (<code>&lt;p&gt;</code>).</li> </ul> <pre><code class=language-css><span class=hljs-tag>p</span> <span class=hljs-rules>{\n  <span class=hljs-rule><span class=hljs-attribute>font-family</span>:<span class=hljs-value> georgia, <span class=hljs-string>'times new roman'</span>, serif</span></span>;\n}</span>\n</code></pre> <p>Som du ser over så står det to skirfttyper etter hverandre, <code>georgia</code> og <code>times new roman</code>. Dette forteller CSS-en at <code>georgia</code> er nettsidens førstevalg og dersom denne fonten ikke finnes på maskinen til personen som åpner nettsiden, så velger den <code>times new roman</code>. <code>Times new roman</code> blir derfor <strong>reserver fonten</strong>.</p> <section class=save id=lagre-og-se-det-i-nettleseren> <h2 class=save id=lagre-og-se-det-i-nettleseren><strong>Lagre</strong> og <strong>se</strong> det i nettleseren.</h2> <figure>Prøv nå med forskjellige fonter og se hvilke du liker best. Legg merke til at hvis navnet på fonten består av flere ord så må navnet skrives inn i anførselstegn, som <code>&quot;times new roman&quot;</code>.</figure> <ul> <li>Hvilken av fontene i listen over synes du er finest?</li> <li>Hvilken font og skrift-stil synes du er enklest å lese?</li> </ul> <p>Har du en annen font på din datamaskin som ikke er nevnt over? (Det har du helt sikkert). Prøv å åpne programmet Word eller Pages, der kan du se alle fontene du har på datamaskinen.</p> <figure><img src="+a(2560)+' alt=screenshot /></figure> <ul> <li>Hvis du finner en du liker så prøv om du kan bruke den på nettsiden!</li> </ul> <p>Du kan også lage teksten i <strong>fet</strong>, <em>kursiv</em> eller begge deler ved hjelp av font-stilegenskaper. La oss forandre epostteksten (husk at den finner vi inne i a-taggen).</p> <pre><code class=language-css><span class=hljs-tag>a</span> <span class=hljs-rules>{\n  <span class=hljs-rule><span class=hljs-attribute>font-weight</span>:<span class=hljs-value> bold</span></span>;\n}</span>\n</code></pre> </section> <section class=save id=lagre-og-se-det-i-nettleseren-2> <h2 class=save id=lagre-og-se-det-i-nettleseren-2><strong>Lagre</strong> og <strong>se</strong> det i nettleseren.</h2> <p>Eller vi kan sette teksten til <em>kursiv</em>.</p> <pre><code class=language-css><span class=hljs-tag>a</span> <span class=hljs-rules>{\n  <span class=hljs-rule><span class=hljs-attribute>font-style</span>:<span class=hljs-value> italic</span></span>;\n}</span>\n</code></pre> </section> <section class=save id=lagre-og-se-det-i-nettleseren-3> <h2 class=save id=lagre-og-se-det-i-nettleseren-3><strong>Lagre</strong> og <strong>se</strong> det i nettleseren.</h2> <ul> <li>Det er også en font-stil-verdi (<code>font-style</code>) som heter ‘oblique’. Hvordan ser den ut?</li> </ul> <p>Vi kan til og med bestemme hvor fet skriften skal være ved å bruke egenskapen <code>font-weight</code>. Den bruker verdier som <code>normal</code>, <code>bold</code>, <code>bolder</code>, <code>lighter</code>. Du kan også bruke tall som 100, 200, 300, 400, 500, 600, 700, 800, og 900, hvor 100 er den tynneste og 900 er den tykkeste. Normal tekst er det samme som verdien 400, fet er det samme som 700. Derimot så har ikke alle fonter alle disse verdiene. Så for å være på den sikre siden, er det lurt å bruke <code>normal</code> eller <code>bold</code> osv. Overskrifter er normalt satt til fet skrift som standard. Men hvis du for eksempel ikke ønsker at <code>h2</code> ikke skal være fet, må vi skrive følgende:</p> <pre><code class=language-css><span class=hljs-tag>h2</span> <span class=hljs-rules>{\n  <span class=hljs-rule><span class=hljs-attribute>font-weight</span>:<span class=hljs-value> normal</span></span>;\n}</span>\n</code></pre> <figure><strong>Prøv det!</strong></figure> </section> </section> <section class=activity id=step-2-kantlinjer> <h1 class=activity id=step-2-kantlinjer>Step 2: Kantlinjer!</h1> <p>La oss legge til en kantlinje eller en ramme rundt et bilde.</p> <pre><code class=language-css><span class=hljs-tag>img</span> <span class=hljs-rules>{\n  <span class=hljs-rule><span class=hljs-attribute>border-color</span>:<span class=hljs-value> green</span></span>;\n  <span class=hljs-rule><span class=hljs-attribute>border-width</span>:<span class=hljs-value> <span class=hljs-number>5px</span></span></span>;\n  <span class=hljs-rule><span class=hljs-attribute>border-style</span>:<span class=hljs-value> solid</span></span>;\n}</span>\n</code></pre> <p><code>border-color</code> bestemmer hvilken farge rammen eller kantlinjen rundt bildet skal ha.</p> <p><code>border-width</code> er tykkelsen på rammen som går rundt bildet.</p> <p><code>border-style</code> er stilen på linjen, denne kan også være: <code>dashed</code>, <code>dotted</code>, <code>double</code>, <code>groove</code>, <code>ridge</code>, <code>inset</code>, <code>outset</code>.</p> <section class=save id=lagre-og-se-det-i-nettleseren-4> <h2 class=save id=lagre-og-se-det-i-nettleseren-4><strong>Lagre</strong> og <strong>se</strong> det i nettleseren.</h2> <ul> <li>Prøv å forandre farge på rammen (her kan du godt bruke heksadesimaler som vi brukte i <a href=../style_nettsider/style_nettsider.html>CSS: Style nettsider</a>).</li> <li>Prøv å forandre bredden på rammen.</li> <li>Prøv å forandre linje-stil til rammen.</li> </ul> <figure><strong>Fant du en stil du liker?</strong></figure> </section> <section class=try id=ting-a-prove-ut> <h2 class=try id=ting-a-prove-ut>Ting å prøve ut</h2> <ul> <li>Du kan sette på kantlinjer på alle slags elementer. Prøv å sett kantlinjer på de andre elementene på siden din.</li> </ul> </section> </section> <section class=activity id=step-3-ider-og-klasser> <h1 class=activity id=step-3-ider-og-klasser>Step 3: IDer og klasser</h1> <p>Vi ønsker å lage et kontaktavsnitt som er <strong>uthevet</strong>. Vi kan ikke bruke <code>&lt;p&gt;</code> tag fordi det vil endre alle andre paragrafer også. For å gjøre dette må vi legge til en stil for de paragrafene vi vil skal være <strong>uthevet</strong>. For å gjøre dette kan vi bruke noe som kalles <code>ID</code>. Denne IDen gjør at vi kun endrer stil på de taggene som har samme ID. Vi trenger da å endre HTML-koden vår sånn at den ser slik ut:</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-title>p</span> <span class=hljs-attribute>id</span>=<span class=hljs-value>"uthevet"</span>&gt;</span>Har du sett Felix? Vennligst kontakt eieren hans på <span class=hljs-tag>&lt;<span class=hljs-title>a</span> <span class=hljs-attribute>href</span>=<span class=hljs-value>"mailto:eierentilfelix@email.com"</span>&gt;</span>eierentilfelix@email.com<span class=hljs-tag>&lt;/<span class=hljs-title>a</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-title>p</span>&gt;</span>\n</code></pre> <ul> <li>La oss gjøre den <strong>uthevet</strong> og sette en farge på teksten.</li> </ul> <p>Ved å sette stil på en <code>ID</code> bruker vi <code>#</code> foran ID-navnet i CSS-en:</p> <pre><code class=language-css><span class=hljs-id>#uthevet</span> <span class=hljs-rules>{\n  <span class=hljs-rule><span class=hljs-attribute>font-weight</span>:<span class=hljs-value> bold</span></span>;\n  <span class=hljs-rule><span class=hljs-attribute>color</span>:<span class=hljs-value> red</span></span>;\n}</span>\n</code></pre> <section class=save id=lagre-og-se-det-i-nettleseren-5> <h2 class=save id=lagre-og-se-det-i-nettleseren-5><strong>Lagre</strong> og <strong>se</strong> det i nettleseren.</h2> <p>En ID er unik og kan bare bli brukt en gang per side. Så hva gjør vi hvis du ønsker å lage to paragrafer med større skrift? Dette kan vi løse ved å bruke klasser. Det første vi må gjøre er å gi paragrafene et klassenavn, litt på samme måte som å sette en <code>ID</code> bare at vi bruker <code>class</code>.</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-title>p</span> <span class=hljs-attribute>class</span>=<span class=hljs-value>"stor"</span>&gt;</span>Han forvant fra hagen i går.<span class=hljs-tag>&lt;/<span class=hljs-title>p</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-title>p</span> <span class=hljs-attribute>class</span>=<span class=hljs-value>"stor"</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-title>strong</span>&gt;</span>Takk!<span class=hljs-tag>&lt;/<span class=hljs-title>strong</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-title>p</span>&gt;</span>\n</code></pre> <p>Deretter setter vi stilen slik at tekten er større for alle paragrafer med <code>class=&quot;stor&quot;</code> (legg merke til at vi bruker <code>.</code> i stedet for <code>#</code>):</p> <pre><code class=language-css><span class=hljs-class>.stor</span> <span class=hljs-rules>{\n  <span class=hljs-rule><span class=hljs-attribute>font-size</span>:<span class=hljs-value> <span class=hljs-number>24px</span></span></span>;\n}</span>\n</code></pre> <ul> <li>Legg til en kant rundt klassen <code>.stor</code> og IDen <code>#uthevet</code>.</li> <li>Skift font og skrift-stil på klassen <code>.stor</code> og IDen <code>#uthevet</code>.</li> </ul> <p>Sammen kan du gjøre med <code>&lt;div&gt;</code>- og <code>HTML5</code>-taggene vi brukte i oppgaven <a href=../del_inn_nettsiden/del_inn_nettsiden.html>HTML: Del inn nettsiden</a>.</p> </section> <section class=try id=ting-du-kan-prove> <h2 class=try id=ting-du-kan-prove>Ting du kan prøve:</h2> <ul> <li> <p>Hvordan vil du endre siden for å få den til å se bedre ut? Hvorfor ikke prøve å bruke din favorittskrifttype, farge, osv? Bruk gjerne <a href=http://www.w3schools.com/css/ >w3schools.com/css</a> for å utforske CSS-ens verden.</p> </li> <li> <p>Hvis du er tidlig ferdig. Gå tilbake og legg på en stil i HTML dokumentet fra forrige leksjon.</p> </li> <li> <p>Forresten, visste du at egenskapene for bakgrunn, ikke bare lar deg endre farger, men også legge til et bilde? (<a href=http://www.w3schools.com/cssref/pr_background-image.asp>Hint: w3schools.com/css - background-image</a>)</p> </li> </ul> </section> </section> <section class=activity id=eksempel-pa-hvordan-det-kan-se-ut> <h1 class=activity id=eksempel-pa-hvordan-det-kan-se-ut>Eksempel på hvordan det kan se ut</h1> <section id=eksempel-pa-hvordan-siden-kan-se-ut> <h2 id=eksempel-pa-hvordan-siden-kan-se-ut>Eksempel på hvordan siden kan se ut:</h2> <p><img src='+a(2561)+" alt=screenshot1 width=100% /> <img src="+a(2562)+' alt=screenshot2 width=100% /></p> </section> <section id=koden-for-eksempelet-over> <h2 id=koden-for-eksempelet-over>Koden for eksempelet over:</h2> <pre><code class=language-html><span class=hljs-doctype>&lt;!doctype html&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-title>html</span> <span class=hljs-attribute>lang</span>=<span class=hljs-value>"no"</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-title>head</span>&gt;</span>\n\t<span class=hljs-tag>&lt;<span class=hljs-title>meta</span> <span class=hljs-attribute>name</span>=<span class=hljs-value>"author"</span> <span class=hljs-attribute>content</span>=<span class=hljs-value>"#"</span>&gt;</span>\n\t<span class=hljs-tag>&lt;<span class=hljs-title>meta</span> <span class=hljs-attribute>charset</span>=<span class=hljs-value>"UTF-8"</span>&gt;</span>\n\t<span class=hljs-tag>&lt;<span class=hljs-title>meta</span> <span class=hljs-attribute>name</span>=<span class=hljs-value>"description"</span> <span class=hljs-attribute>content</span>=<span class=hljs-value>"En side laget for å finne katten Felix"</span>&gt;</span>\n\t<span class=hljs-tag>&lt;<span class=hljs-title>meta</span> <span class=hljs-attribute>name</span>=<span class=hljs-value>"keywords"</span> <span class=hljs-attribute>content</span>=<span class=hljs-value>"Felix, katt, forsvunnet"</span>&gt;</span>\n\t<span class=hljs-tag>&lt;<span class=hljs-title>title</span>&gt;</span>Katten Felix er forsvunnet<span class=hljs-tag>&lt;/<span class=hljs-title>title</span>&gt;</span>\n\n  <span class=hljs-comment>&lt;!--- CSSen for siden --&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-title>style</span>&gt;</span><span class=css>\n\n    <span class=hljs-tag>body</span><span class=hljs-rules>{\n      <span class=hljs-rule><span class=hljs-attribute>background-color</span>:<span class=hljs-value> <span class=hljs-hexcolor>#F8FAF4</span></span></span>;\n      <span class=hljs-rule><span class=hljs-attribute>text-align</span>:<span class=hljs-value> center</span></span>;\n    }</span>\n\n    <span class=hljs-tag>h1</span><span class=hljs-rules>{\n      <span class=hljs-rule><span class=hljs-attribute>color</span>:<span class=hljs-value>red</span></span>;\n      <span class=hljs-rule><span class=hljs-attribute>background-color</span>:<span class=hljs-value>black</span></span>;\n      <span class=hljs-rule><span class=hljs-attribute>font-size</span>:<span class=hljs-value><span class=hljs-number>72px</span></span></span>;\n      <span class=hljs-rule><span class=hljs-attribute>text-transform</span>:<span class=hljs-value> uppercase</span></span>;\n      <span class=hljs-rule><span class=hljs-attribute>text-decoration</span>:<span class=hljs-value> underline</span></span>;\n      <span class=hljs-rule><span class=hljs-attribute>text-decoration</span>:<span class=hljs-value> blink</span></span>;\n      <span class=hljs-rule><span class=hljs-attribute>font-family</span>:<span class=hljs-value> impact, sans-serif</span></span>;\n    }</span>\n\n    <span class=hljs-tag>h2</span><span class=hljs-rules>{\n      <span class=hljs-rule><span class=hljs-attribute>font-weight</span>:<span class=hljs-value> normal</span></span>;\n    }</span>\n\n    <span class=hljs-tag>p</span> <span class=hljs-rules>{\n      <span class=hljs-rule><span class=hljs-attribute>font-family</span>:<span class=hljs-value> georgia, <span class=hljs-string>\'times new roman\'</span>, serif</span></span>;\n    }</span>\n\n    <span class=hljs-tag>img</span> <span class=hljs-rules>{\n      <span class=hljs-rule><span class=hljs-attribute>border-color</span>:<span class=hljs-value> green</span></span>;\n      <span class=hljs-rule><span class=hljs-attribute>border-width</span>:<span class=hljs-value> <span class=hljs-number>5px</span></span></span>;\n      <span class=hljs-rule><span class=hljs-attribute>border-style</span>:<span class=hljs-value> solid</span></span>;\n    }</span>\n\n    <span class=hljs-tag>span</span> <span class=hljs-rules>{\n      <span class=hljs-rule><span class=hljs-attribute>color</span>:<span class=hljs-value>orange</span></span>;\n    }</span>\n\n    <span class=hljs-tag>a</span> <span class=hljs-rules>{\n      <span class=hljs-rule><span class=hljs-attribute>font-weight</span>:<span class=hljs-value> bold</span></span>;\n      <span class=hljs-rule><span class=hljs-attribute>font-style</span>:<span class=hljs-value> italic</span></span>;\n    }</span>\n\n    <span class=hljs-id>#uthevet</span><span class=hljs-rules>{\n      <span class=hljs-rule><span class=hljs-attribute>font-weight</span>:<span class=hljs-value> bold</span></span>;\n      <span class=hljs-rule><span class=hljs-attribute>color</span>:<span class=hljs-value> red</span></span>;\n    }</span>\n\n    <span class=hljs-class>.stor</span><span class=hljs-rules>{\n      <span class=hljs-rule><span class=hljs-attribute>font-size</span>:<span class=hljs-value> <span class=hljs-number>24px</span></span></span>;\n    }</span>\n  </span><span class=hljs-tag>&lt;/<span class=hljs-title>style</span>&gt;</span>\n\n<span class=hljs-tag>&lt;/<span class=hljs-title>head</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-title>body</span>&gt;</span>\n<span class=hljs-comment>&lt;!-- Dette er et Kodeklubb-prosjekt. Felix er ikke ekte og er egentlig ikke forsvunnet. --&gt;</span>\n\t<span class=hljs-tag>&lt;<span class=hljs-title>h1</span>&gt;</span>Forvunnet<span class=hljs-tag>&lt;/<span class=hljs-title>h1</span>&gt;</span>\n\t<span class=hljs-tag>&lt;<span class=hljs-title>h2</span>&gt;</span>Katten Felix<span class=hljs-tag>&lt;/<span class=hljs-title>h2</span>&gt;</span>\n\t<span class=hljs-tag>&lt;<span class=hljs-title>img</span> <span class=hljs-attribute>src</span>=<span class=hljs-value>"http://kodeklubben.github.io/web/forsvunnet_katt/missingcat.png"</span> <span class=hljs-attribute>alt</span>=<span class=hljs-value>"bilde av Felix"</span> <span class=hljs-attribute>width</span>=<span class=hljs-value>"400"</span>&gt;</span>\n\t<span class=hljs-tag>&lt;<span class=hljs-title>p</span>&gt;</span>Felix er en veldig snill katt. Han liker å kose, sitte foran varmepumpa og lekemusa si. Pelsen hans er <span class=hljs-tag>&lt;<span class=hljs-title>span</span>&gt;</span>oransje<span class=hljs-tag>&lt;/<span class=hljs-title>span</span>&gt;</span>. <span class=hljs-tag>&lt;/<span class=hljs-title>p</span>&gt;</span>\n\t<span class=hljs-tag>&lt;<span class=hljs-title>p</span> <span class=hljs-attribute>class</span>=<span class=hljs-value>"stor"</span>&gt;</span>Han forvant fra hagen i går.<span class=hljs-tag>&lt;/<span class=hljs-title>p</span>&gt;</span>\n\t<span class=hljs-tag>&lt;<span class=hljs-title>p</span> <span class=hljs-attribute>id</span>=<span class=hljs-value>"uthevet"</span>&gt;</span>Har du sett Felix? Vennligst kontakt eieren hans på <span class=hljs-tag>&lt;<span class=hljs-title>a</span> <span class=hljs-attribute>href</span>=<span class=hljs-value>"mailto:eierentilfelix@email.com"</span>&gt;</span>eierentilfelix@email.com<span class=hljs-tag>&lt;/<span class=hljs-title>a</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-title>p</span>&gt;</span>\n\t<span class=hljs-tag>&lt;<span class=hljs-title>p</span> <span class=hljs-attribute>class</span>=<span class=hljs-value>"stor"</span>&gt;</span>Takk!<span class=hljs-tag>&lt;<span class=hljs-title>p</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-title>body</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-title>html</span>&gt;</span>\n</code></pre> </section> </section>'},2560:function(s,e,a){s.exports=a.p+"_/oppgaver/src/web/tekststil/fonts.d3b391.png"},2561:function(s,e,a){s.exports=a.p+"_/oppgaver/src/web/tekststil/resursser/bilde1.1b31f1.png"},2562:function(s,e,a){s.exports=a.p+"_/oppgaver/src/web/tekststil/resursser/bilde2.fd776e.png"},2563:function(s,e){s.exports="data:image/gif;base64,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"}});