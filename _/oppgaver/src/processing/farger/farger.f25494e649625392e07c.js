webpackJsonp([60,283],{587:function(s,e,n){s.exports=n.p+"_/oppgaver/src/processing/farger/RGB.8a6a5c.png"},1006:function(s,e,n){s.exports={frontmatter:n(342),content:n(1656)}},1656:function(s,e,n){s.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>På skolen lærer man om farger og hvordan man kan blande dem for å få andre farger. Slik er det med farger i datamaskinen også; vi blander primærfarger og mengden av hver primærfarge bestemmer hvilken farge vi får. Hvis vi sammenligner blanding av malingsfarger med blanding av farger på en dataskjerm, fungerer blandingen litt annerledes. Hvordan blandingen fungerer på en dataskjerm skal du lære mer om i denne leksjonen med Processing.</p> <figure><img src="+n(587)+' alt="" title="Tre overlappende sirkler i rødt, grønt og blått. Der de\n overlapper blandes fargene til gul, cyan, magenta og hvitt."/></figure> </section> <section class=activity id=steg-1-mer-enn-gratt> <h1 class=activity id=steg-1-mer-enn-gratt>Steg 1: Mer enn grått</h1> <p>Her skal vi se hvordan bakgrunnsfargen bestemmes. I det første punktet viser vi hele programmet, og i resten av punktene ser vi kun på <code>draw</code> som er den delen av koden som skal endres. For hvert steg kan du kjøre programmet med <strong>Ctrl + R</strong>, og hvis du vil, kan du lagre det med <strong>Ctrl + S</strong>.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Vi begynner med å fylle bakgrunnen med sort:</p> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>setup</span>() {\n  <span class=hljs-comment>// bestem størrelse til vinduet</span>\n  <span class=hljs-built_in>size</span>(<span class=hljs-number>800</span>, <span class=hljs-number>600</span>);\n}\n\n<span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(<span class=hljs-number>0</span>);\n}\n</code></pre> <p>Dette har du kanskje sett før. Når vi kaller på <code>background</code> med bare ett tall får vi en gråtone der <code>0</code> er sort og <code>255</code> er hvitt.</p> </li> <li> <figure>La oss endre på <code>draw</code> slik at vi får en rød bakgrunn:</figure> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(<span class=hljs-number>255</span>, <span class=hljs-number>0</span>, <span class=hljs-number>0</span>);\n}\n</code></pre> <figure>Dette likner på det vi hadde i det første steget, men nå bruker vi plutselig tre tall istedenfor ett. La oss utforske dem.</figure> </li> <li> <figure>La oss endre <code>background</code> igjen:</figure> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(<span class=hljs-number>0</span>, <span class=hljs-number>255</span>, <span class=hljs-number>0</span>);\n}\n</code></pre> <p>Når du kjører programmet, hvilken farge får du på bakgrunnen?</p> </li> <li> <figure>La oss endre <code>background</code> enda en gang:</figure> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(<span class=hljs-number>0</span>, <span class=hljs-number>0</span>, <span class=hljs-number>255</span>);\n}\n</code></pre> <p>Hvilken farge får du nå?</p> </li> </ul> </section> <section class=protip id=forklaring-av-additive-farger> <h2 class=protip id=forklaring-av-additive-farger>Forklaring av additive farger</h2> <p>Som nevnt har du kanskje lært om farger på skolen og brukt maling eller fargeblyanter. Du lærte nok om primærfargene rød, <strong>gul</strong> og blå, og at du kunne lage omtrent alle slags farger ved å blande disse sammen.</p> <p>Jo flere farger man blander sammen når man maler, desto mørkere ble den ferdige fargen. Dette er fordi malingen inneholder fargede pigmenter som absorberer lys. Jo flere farger av lyset som absorberes, desto færre farger og mindre lys reflekteres og treffer øyet ditt. For eksempel absorberer grønn maling rødt og blått lys, det grønne lyset reflekteres tilbake og treffer øyet ditt. Gul maling absorberer blått lys, og blå maling absorberer rødt og deler av det grønne lyset. Da gjenstår det bare grønt lys igjen, og derfor kan du blande gul og blå for å få grønn.</p> <p>I en datamaskin er det annerledes. Har du lagt merke til at skjermen lyser? Siden skjermen lyser, angir vi <em>hvor mye</em> hver farge skal <em>lyse</em>. Øyet reagerer på rødt, grønt og blått lys, så disse er valgt som de tre primærfargene i dataskjermer. Om du går nærme nok en gammel data- eller TV-skjerm kan du se de tre fargene hver for seg.</p> <p>Hvilke tre farger fikk du i stegene ovenfor? Nå forstår du kanskje hvorfor de tre verdiene <code>255, 0, 0</code>, <code>0, 255, 0</code> og <code>0, 0, 255</code> ga henholdsvis rød, grønn og blå?</p> <p>Fordi primærfargene er rød, grønn og blå kalles dette systemet RGB. Det er et <em>additivt</em> system, fordi man legger sammen fargene, mens i tegning på papir jobber man med et <em>subtraktivt</em> system der farger trekkes fra.</p> <p>Vi kan også blande farger her, men det oppfører seg annerledes fra du kanskje er vant til fra maling. Hvis vi blander rødt og grønt, får vi gult. Hvis vi blander grønt og blått, får vi en slags turkis, kalt cyan. Hvis vi blander rødt og blått, får vi en slags rosa, kalt magenta. Når alle tre fargene er like sterke, får vi en gråtone. Med alle tre på fullt, <code>255</code>, får vi hvitt.</p> <figure><img src='+n(587)+' alt="" title="Tre overlappende sirkler i rødt, grønt og blått. Der de\n overlapper blandes fargene til gul, cyan, magenta og hvitt."/></figure> <p>Du har kankje også sett et fargehjul før, der primærfargne plasseres rundt hjulet. Sekundærfargene, fargene man får når man blander to primærfarger plasseres da mellom disse. Vi kan også lage et slikt for RGB.</p> <figure><img src='+n(2295)+' alt="" title="RGB-fargehjulet med primær- og sekundærfarger."/></figure> </section> </section> <section class=activity id=steg-2-fyllfarger-og-omriss> <h1 class=activity id=steg-2-fyllfarger-og-omriss>Steg 2: Fyllfarger og omriss</h1> <p>Når vi tegner former, er det en stor sjanse for at vi vil bruke andre farger enn svart og hvit. Foreløpig har vi bare sett at vi kan styre fargen på bakgrunnen, så la oss se hva vi kan gjøre med fargene til former.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <figure>Legg til en sirkel i <code>draw</code>:</figure> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(<span class=hljs-number>0</span>, <span class=hljs-number>0</span>, <span class=hljs-number>255</span>);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-variable>width</span> / <span class=hljs-number>2</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>2</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n}\n</code></pre> <figure>Hvis du kjører programmet, ser du kanskje noe du ikke har lagt merke til før: Hva er det som er rundt sirkelen?</figure> </li> <li> <figure>Endre fargen som sirkelen fargelegges med, med funksjonen <code>fill</code>:</figure> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(<span class=hljs-number>0</span>, <span class=hljs-number>0</span>, <span class=hljs-number>255</span>);\n  <span class=hljs-built_in>fill</span>(<span class=hljs-number>255</span>, <span class=hljs-number>192</span>, <span class=hljs-number>64</span>);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-variable>width</span> / <span class=hljs-number>2</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>2</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n}\n</code></pre> <p>Nå får du en mørkegul sirkel midt i vinduet på en blå bakgrunn.</p> </li> <li> <figure>Endre fargen på omrisset med funksjonen <code>stroke</code>:</figure> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(<span class=hljs-number>0</span>, <span class=hljs-number>0</span>, <span class=hljs-number>255</span>);\n  <span class=hljs-built_in>fill</span>(<span class=hljs-number>255</span>, <span class=hljs-number>192</span>, <span class=hljs-number>64</span>);\n  <span class=hljs-built_in>stroke</span>(<span class=hljs-number>192</span>, <span class=hljs-number>96</span>, <span class=hljs-number>64</span>);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-variable>width</span> / <span class=hljs-number>2</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>2</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n}\n</code></pre> <figure>Nå er streken rundt sirkelen en rødlig brun. Det er kanskje ikke så lett å se fargen på streken siden den er så tynn.</figure> </li> <li> <figure>Gjør omrisset fetere med funksjonen <code>strokeWeight</code>:</figure> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(<span class=hljs-number>0</span>, <span class=hljs-number>0</span>, <span class=hljs-number>255</span>);\n  <span class=hljs-built_in>fill</span>(<span class=hljs-number>255</span>, <span class=hljs-number>192</span>, <span class=hljs-number>64</span>);\n  <span class=hljs-built_in>stroke</span>(<span class=hljs-number>192</span>, <span class=hljs-number>96</span>, <span class=hljs-number>64</span>);\n  <span class=hljs-built_in>strokeWeight</span>(<span class=hljs-number>3</span>);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-variable>width</span> / <span class=hljs-number>2</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>2</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n}\n</code></pre> <p>Nå er omrisset tre piksler bredt.</p> </li> </ul> </section> <section class=try id=eksperimenter> <h2 class=try id=eksperimenter>Eksperimenter</h2> <ul> <li>Prøv forskjellige bakgrunnsfarger. Hvordan synes du forskjellige bakgrunnsfarger passer sammen med fargene på sirkelen?</li> <li>Prøv forskjellige fyllfarger. Hvordan passer disse med fargen på omrisset?</li> <li>Prøv forskjellige farger på omrisset. Hvordan passer det med bakgrunnen og fyllfargen?</li> <li>Prøv andre tykkelser på omrisset. Hvor synes du at det er passe tykt?</li> <li>Kan du tegne to sirkler på skjermen i forskjellige farger?</li> </ul> </section> </section> <section class=activity id=steg-3-fargevelgeren> <h1 class=activity id=steg-3-fargevelgeren>Steg 3: Fargevelgeren</h1> <p>Noen ganger kan det være tungvint å skulle lage fargene man har lyst på ved å bare tenke ut tallene. Man blir riktignok flinkere på dette etter hvert som man har gjort det en del ganger. Inntil man har blitt komfortabel med dette, kan det være lurt å bruke fargevelgeren som finnes i Processing.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Åpne fargevelgeren ved å velge <strong>Tools → Color Selector</strong></p> <figure><img src='+n(2297)+' alt="" title="Fargevelgeren slik den er når den først åpnes."/></figure> <p>Du får da opp et vindu som lar deg velge farger. Her kan du fylle inn tallverdiene som vi har sett tidligere, R, G og B. Det er også noen andre felt. H, S og B er for et annet fargesystem som naturlig nok heter HSB. Det er også to områder som vi kan velge farge fra ved å klikke. Øverst til høyre vises fargen som er valgt.</p> </li> <li> <figure>Prøv å trykke i det store fargefeltet til venstre. Her kan du velge hvor sterk og hvor lys fargen skal være.</figure> <figure>Hva skjer med verdiene til R, G og B for lyse farger? Hva er verdien til R, G og B for mørke farger?</figure> </li> <li> <figure>Prøv å trykke i det lille fargefeltet rett ved siden av. Her kan du velge hvilken farge du vil ha.</figure> <figure><img src='+n(2296)+' alt="" title="En animasjon som viser at fargen endres i\n fargevelgeren."/></figure> <p>Hva skjer med verdiene til RGB nå?</p> </li> <li> <p>Finn en farge du liker til bakgrunnsfarge. Skriv inn verdiene for R, G og B i <code>background</code> og i <code>draw</code>.</p> </li> <li> <p>Finn en farge du liker til sirkelen. Trykk på knappen <strong>Copy</strong>. Visk ut alle verdiene gitt i <code>fill</code> og lim inn den kopierte fargekoden: enten med <strong>Edit → Paste</strong> eller trykk på <strong>Ctrl + V</strong> eller <strong>Cmd + V</strong> hvis du bruker Mac.</p> <p>Når du limer inn, ser du at koden er på formen <code>#0123EF</code>. Dette er fargekoden som stod i det nederste tekstfeltet i fargevelgeren. Hvordan denne fargekoden fungerer er forklart i boksen under.</p> </li> </ul> </section> <section class=protip id=web-farger-fargekoder-i-heksadesimaler> <h2 class=protip id=web-farger-fargekoder-i-heksadesimaler>Web-farger - fargekoder i heksadesimaler</h2> <p>De som har jobbet med nettsider, er vant til å angi farger med en sekssifret kode: <code>#0123EF</code>. Du tenker kanskje: «Kan <code>F</code> være et siffer?» Ja, i heksadesimaler, eller sekstentallssystemet, utvides sifrene med bokstavene A-F. Da får vi sifre fra 0 til F, som er tallene fra null til femten. <code>A</code> er da 10, <code>B</code> er 11, <code>C</code> er 12, osv. Det er ingen forskjell på små og store bokstaver her, så man kan også skrive det som <code>#0123EF</code>.</p> <p>Siden vi skal angi tre farger, RGB, består koden av tre tosifrede tall. I <code>#0123EF</code> er disse tre tosifrede tallene <code>01</code>, <code>23</code> og <code>EF</code>. De første to angir rødt, de neste to grønt og de to siste blått.</p> <figure>Vi kan regne om <code>#0123EF</code> til rød, grønn og blå slik som dette:</figure> <ul> <li><code>rød = 0 · 16 + 1 = 1</code></li> <li><code>grønn = 2 · 16 + 3 = 35</code></li> <li><code>blå = 14 · 16 + 15 = 249</code></li> </ul> <p>Altså nesten ingenting rødt, noe grønt og masse blått. La oss teste det ut:</p> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>setup</span>() {\n  <span class=hljs-built_in>size</span>(<span class=hljs-number>800</span>, <span class=hljs-number>600</span>);\n}\n\n<span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(#<span class=hljs-number>0123</span>EF);\n}\n</code></pre> <p>Disse fargekodene kan være nyttige hvis man er kjent med de fra før. Fargekodene brukes stort sett kun direkte, og det er vanskelig å bruke heksadesimale fargekoder når fargen skal variere. For eksempel om du skal la programmet vise alle rød-farger, er det enklere å bruke vanlige heltall.</p> <p>Men for program der du ikke ønsker å variere fargen underveis, kan de brukes med eksempelvis <code>background</code>. Senere skal vi se på hvordan vi kan lage <em>color</em>-variabler med disse kodene.</p> </section> </section> <section class=activity id=steg-4-hsb> <h1 class=activity id=steg-4-hsb>Steg 4: HSB</h1> <p>Da vi så på fargevelgeren, så vi tre tekstfelter merket H, S og B. Du så kanskje også hvordan disse oppførte seg når vi endret fargevalget? Hvis ikke, tar vi en rask titt på dette igjen under.</p> <p>Dette systemet kalles HSB: Hue, Saturation, Brightness. Som på norsk er fargetone/kulør, fargemetning og lyshet/valør. Det første tallet, <strong>H</strong>, bestemmer hva slags farge det blir. Det andre, <strong>S</strong>, bestemmer hvor sterk fargen skal være. Det siste, <strong>B</strong>, bestemmer hvor lys fargen skal være.</p> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Først tar vi en titt på hvordan fargevelgeren og HSB henger sammen. Åpne fargevelgeren igjen med <strong>Tools → Color Selector</strong>.</p> </li> <li> <p>Bruk det store fargefeltet til venstre og se hva som skjer med de tre verdiene: H, S og B. Hvordan oppfører de seg når du gjør fargen lysere, mørkere, sterkere og svakere? Kan du knytte en av de tre verdiene til bevegelse opp og ned? Hva med sideveis?</p> </li> <li> <p>Bruk det lille fargefeltet ved siden av og se hva som skjer med verdiene nå. Hvilke av verdiene endres når du endrer plasseringen i dette feltet?</p> </li> <li> <figure>La oss prøve ut HSB nå som du har sett hvordan disse verdiene henger sammen i farge velgeren:</figure> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>setup</span>() {\n  <span class=hljs-built_in>size</span>(<span class=hljs-number>800</span>, <span class=hljs-number>600</span>);\n  <span class=hljs-built_in>colorMode</span>(HSB, <span class=hljs-number>360</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n}\n\n<span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(<span class=hljs-number>0</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n  <span class=hljs-built_in>fill</span>(<span class=hljs-number>120</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n  <span class=hljs-built_in>stroke</span>(<span class=hljs-number>120</span>, <span class=hljs-number>75</span>, <span class=hljs-number>50</span>);\n  <span class=hljs-built_in>strokeWeight</span>(<span class=hljs-number>3</span>);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-variable>width</span> / <span class=hljs-number>2</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>2</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n}\n</code></pre> <p>Her kaller vi på en ny funksjon <code>colorMode</code> som tar imot fargesystemet som første argument og så maksverdier for de forskjelloge <em>kanalene</em> (H, S og B). Bare <strong>RGB</strong> og <strong>HSB</strong> kan brukes som fargesystem.</p> <p>Du lurer kanskje på hvorfor <strong>H</strong> har fått <code>360</code> som maksverdi. Det er fordi fargetonen baseres på fargehjulet, og det gir 360 grader med fargetoner. Metning og lys gis typisk i prosent. Du kan selvfølgelig velge helt andre maksverdier om du ønsker det.</p> </li> <li> <p>Kjør programmet om du ikke har gjort det allerede.</p> </li> <li> <p>Vi har sett at rød ligger på null grader, og grønn på <code>120</code> grader. La oss se hvilke farger som befinner seg rundt hjulet ved å endre <code>draw</code>:</p> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(<span class=hljs-number>0</span>);\n\n  <span class=hljs-built_in>fill</span>(<span class=hljs-number>0</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>3</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n\n  <span class=hljs-built_in>fill</span>(<span class=hljs-number>60</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-number>2</span> * <span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>3</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n\n  <span class=hljs-built_in>fill</span>(<span class=hljs-number>120</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-number>3</span> * <span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>3</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n\n  <span class=hljs-built_in>fill</span>(<span class=hljs-number>180</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-number>2</span> * <span class=hljs-variable>height</span> / <span class=hljs-number>3</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n\n  <span class=hljs-built_in>fill</span>(<span class=hljs-number>240</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-number>2</span> * <span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-number>2</span> * <span class=hljs-variable>height</span> / <span class=hljs-number>3</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n\n  <span class=hljs-built_in>fill</span>(<span class=hljs-number>300</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-number>3</span> * <span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-number>2</span> * <span class=hljs-variable>height</span> / <span class=hljs-number>3</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n}\n</code></pre> <p>Her går vi gjennom fargetonene <code>60</code> grader ad gangen. Hvilke farger ligger på de seks vinklene: <code>0, 60, 120, 180, 240</code> og <code>300</code>? Hva tror du befinner seg på <code>360</code> grader?</p> <p>Om du lurer på regnestykkene for plasseringene av sirklene, så deler vi bredden på fire fordi det blir fire tomrom med tre kolonner. Tilsvarende blir det tre tomrom i høyden når vi har to rader. Ved å dele på antall tomrom, får vi bredden på avstanden mellom to nabosirkler eller vinduskanten og den nærmeste sirkelen.</p> </li> <li> <p>Kjør programmet om du ikke har gjort det.</p> </li> <li> <p>La oss se på hvordan metningen og lysheten påvirker fargen. Vi legger til en variabel for fargetone som skal endres over tid, sånn at vi kan se effekten også på forskjellige fargetoner. Legg derfor til følgende øverst i programmet:</p> <pre><code class=language-processing><span class=hljs-built_in>float</span> tone;\n</code></pre> <p>Så endrer vi <code>draw</code> til å tegne opp 9 sirkler der radene har samme metning, og kolonnene har samme lyshet:</p> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(<span class=hljs-number>0</span>);\n\n  <span class=hljs-built_in>float</span> metning = <span class=hljs-number>100</span>;\n  <span class=hljs-built_in>float</span> lyshet = <span class=hljs-number>100</span>;\n\n  tone = tone + <span class=hljs-number>1</span>;\n  <span class=hljs-keyword>if</span> (tone &gt; <span class=hljs-number>360</span>) {\n    tone = <span class=hljs-number>0</span>;\n  }\n\n  <span class=hljs-built_in>fill</span>(tone, metning, lyshet);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>4</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n\n  lyshet = lyshet - <span class=hljs-number>40</span>;\n  <span class=hljs-built_in>fill</span>(tone, metning, lyshet);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-number>2</span> * <span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>4</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n\n  lyshet = lyshet - <span class=hljs-number>40</span>;\n  <span class=hljs-built_in>fill</span>(tone, metning, lyshet);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-number>2</span> * <span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>4</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n\n  lyshet = <span class=hljs-number>100</span>;\n  metning = metning - <span class=hljs-number>40</span>;\n  <span class=hljs-built_in>fill</span>(tone, metning, lyshet);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-number>2</span> * <span class=hljs-variable>height</span> / <span class=hljs-number>4</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n\n  lyshet = lyshet - <span class=hljs-number>40</span>;\n  <span class=hljs-built_in>fill</span>(tone, metning, lyshet);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-number>2</span> * <span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-number>2</span> * <span class=hljs-variable>height</span> / <span class=hljs-number>4</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n\n  lyshet = lyshet - <span class=hljs-number>40</span>;\n  <span class=hljs-built_in>fill</span>(tone, metning, lyshet);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-number>2</span> * <span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-number>2</span> * <span class=hljs-variable>height</span> / <span class=hljs-number>4</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n\n  lyshet = <span class=hljs-number>100</span>;\n  metning = metning - <span class=hljs-number>40</span>;\n  <span class=hljs-built_in>fill</span>(tone, metning, lyshet);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-number>3</span> * <span class=hljs-variable>height</span> / <span class=hljs-number>4</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n\n  lyshet = lyshet - <span class=hljs-number>40</span>;\n  <span class=hljs-built_in>fill</span>(tone, metning, lyshet);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-number>2</span> * <span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-number>3</span> * <span class=hljs-variable>height</span> / <span class=hljs-number>4</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n\n  lyshet = lyshet - <span class=hljs-number>40</span>;\n  <span class=hljs-built_in>fill</span>(tone, metning, lyshet);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-number>2</span> * <span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, <span class=hljs-number>3</span> * <span class=hljs-variable>height</span> / <span class=hljs-number>4</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n}\n</code></pre> </li> </ul> <section class=protip id=repetisjon-av-kode> <h3 class=protip id=repetisjon-av-kode>Repetisjon av kode</h3> <p>I koden over, er det mye repetisjon av kode for å sette fargen og tegne opp sirklene. Selv om vi ikke skal gå gjennom løkker nå, kan det være nyttig å se hvordan denne koden kunne vært gjort kortere og enklere ved hjelp av løkker.</p> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(<span class=hljs-number>0</span>);\n\n  <span class=hljs-built_in>int</span> metning = <span class=hljs-number>100</span>;\n  <span class=hljs-built_in>int</span> lyshet = <span class=hljs-number>100</span>;\n\n  tone = tone + <span class=hljs-number>1</span>;\n  <span class=hljs-keyword>if</span> (tone &gt; <span class=hljs-number>360</span>) {\n    tone = <span class=hljs-number>0</span>;\n  }\n\n  <span class=hljs-keyword>for</span> (<span class=hljs-built_in>int</span> rad = <span class=hljs-number>1</span>; rad &lt;= <span class=hljs-number>3</span>; rad++) {\n    lyshet = <span class=hljs-number>100</span>;\n\n    <span class=hljs-keyword>for</span> (<span class=hljs-built_in>int</span> kolonne = <span class=hljs-number>1</span>; kolonne &lt;= <span class=hljs-number>3</span>; kolonne++) {\n      lyshet = lyshet - <span class=hljs-number>40</span>;\n      <span class=hljs-built_in>fill</span>(tone, metning, lyshet);\n      <span class=hljs-built_in>ellipse</span>(kolonne * <span class=hljs-variable>width</span> / <span class=hljs-number>4</span>, rad * <span class=hljs-variable>height</span> / <span class=hljs-number>4</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n    }\n\n    metning = metning - <span class=hljs-number>40</span>;\n  }\n}\n</code></pre> </section> </section> </section> <section class=activity id=steg-5-fargevariabler-og-funksjoner> <h1 class=activity id=steg-5-fargevariabler-og-funksjoner>Steg 5: Fargevariabler og -funksjoner</h1> <p>Noen ganger er det nyttig å kunne ha variabler for å holde rede på farger. Over så vi at vi godt kan bruke tre variabler, en for hver fargekanal i systemet, men nå skal vi se på en egen type som kan brukes til farger: <code>color</code>.</p> <p>Vi skal også se på noen funksjoner for å jobbe med farger. Dette gjør at vi kan få mer nytte av fargevariabler uten å bruke en variabel for hver fargekanal. Hvis farger skal endre seg veldig mye, kan det likevel være enklere med tre variabler.</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <figure>Vi begynner helt enkelt med en fargevariabel for bakgrunn og en for fyllfarge:</figure> <pre><code class=language-processing><span class=hljs-built_in>color</span> bakgrunn = <span class=hljs-built_in>color</span>(<span class=hljs-number>32</span>, <span class=hljs-number>128</span>, <span class=hljs-number>64</span>);\n<span class=hljs-built_in>color</span> fyll = <span class=hljs-built_in>color</span>(<span class=hljs-number>64</span>, <span class=hljs-number>128</span>, <span class=hljs-number>255</span>);\n\n<span class=hljs-keyword>void</span> <span class=hljs-title>setup</span>() {\n  <span class=hljs-built_in>size</span>(<span class=hljs-number>800</span>, <span class=hljs-number>600</span>);\n}\n\n<span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(bakgrunn);\n  <span class=hljs-built_in>fill</span>(fyll);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-variable>width</span> / <span class=hljs-number>2</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>2</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n}\n</code></pre> <p>Hvis du kjører programmet ser du en blå sirkel på en grønn bakgrunn. <code>color(32, 128, 64)</code> gir oss en verdi som vi kan putte i en <code>color</code>-variabel. Nå vi bruker variabelen i <code>background(bakgrunn)</code>, er det som om vi skrev <code>background(32, 128, 64)</code>.</p> </li> <li> <p>La oss se hvordan vi kan lage en farge som ligger et sted mellom to farger med <code>lerpColor</code>. Legg til en ekstra farge for svart først i programmet:</p> <pre><code class=language-processing><span class=hljs-built_in>color</span> svart = <span class=hljs-built_in>color</span>(<span class=hljs-number>0</span>, <span class=hljs-number>0</span>, <span class=hljs-number>0</span>);\n</code></pre> <figure>Så setter vi omrisset til sirkelen til å være en mellomting mellom svart og fyllfargen:</figure> <pre><code class=language-processing><span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(bakgrunn);\n  <span class=hljs-built_in>fill</span>(fyll);\n  <span class=hljs-built_in>stroke</span>(<span class=hljs-built_in>lerpColor</span>(fyll, svart, <span class=hljs-number>0.5</span>));\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-variable>width</span> / <span class=hljs-number>2</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>2</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n}\n</code></pre> <p><code>lerpColor(farge1, farge2, blandingsForhold)</code> gir en som ligger mellom <code>farge1</code> og <code>farge2</code>, eller <code>fyll</code> og <code>svart</code> i koden ovenfor. <code>blandingsForholdet</code> er et tall mellom <code>0</code> og <code>1</code>. Når det er <code>0</code> blir fargen helt lik <code>farge1</code>. Når det er <code>1</code> blir fargen helt lik <code>farge2</code>. <code>0.5</code> gir oss da en farge midt mellom de to.</p> <p>Siden resultatet av et kall på <code>lerpColor</code> er en farge, kunne du også lagt resultatet i en <code>color</code>-variabel: <code>color omriss = lerpColor(fyll, svart, 0.5);</code></p> <figure>Kjør programmet og merk at omrisset nå er en mørkere variant av blåfargen istedenfor helt svart.</figure> </li> <li> <figure>Hvis man vil bruke HSB istedenfor RGB, går det også an, men da må man bytte fargesystem før man lager fargene:</figure> <pre><code class=language-processing><span class=hljs-built_in>color</span> bakgrunn;\n<span class=hljs-built_in>color</span> fyll;\n\n<span class=hljs-keyword>void</span> <span class=hljs-title>setup</span>() {\n  <span class=hljs-built_in>size</span>(<span class=hljs-number>800</span>, <span class=hljs-number>600</span>);\n  <span class=hljs-built_in>colorMode</span>(HSB, <span class=hljs-number>360</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n  bakgrunn = <span class=hljs-built_in>color</span>(<span class=hljs-number>120</span>, <span class=hljs-number>75</span>, <span class=hljs-number>60</span>);\n  fyll = <span class=hljs-built_in>color</span>(<span class=hljs-number>210</span>, <span class=hljs-number>75</span>, <span class=hljs-number>75</span>);\n}\n\n<span class=hljs-keyword>void</span> <span class=hljs-title>draw</span>() {\n  <span class=hljs-built_in>background</span>(bakgrunn);\n  <span class=hljs-built_in>fill</span>(fyll);\n  <span class=hljs-built_in>ellipse</span>(<span class=hljs-variable>width</span> / <span class=hljs-number>2</span>, <span class=hljs-variable>height</span> / <span class=hljs-number>2</span>, <span class=hljs-number>100</span>, <span class=hljs-number>100</span>);\n}\n</code></pre> <p>Kjør programmet.</p> <p>Hva skjer med fargene om du lager dem før du bytter til HSB? Hva om du bytter til RGB, <code>colorMode(RGB, 255);</code>, etter at du har lagd fargene ovenfor?</p> </li> </ul> <section class=try id=prov-selv> <h3 class=try id=prov-selv>Prøv selv</h3> <ul> <li>Ta utgangspunkt i punktet hvor du blandet farger med <code>lerpColor</code>. Kan du tegne et ansikt eller en annen figur med ellipser der du blander farger med <code>lerpColor</code> for omriss- og/eller fyllfargene? Hvis du skal bruke blandingsfarger til både omriss og fyll, kan det være lurt å legge resultatene av blandingen i <code>color</code>-variabler.</li> </ul> </section> </section> </section>';
},2295:function(s,e,n){s.exports=n.p+"_/oppgaver/src/processing/farger/FargehjulRGB.66299d.png"},2296:function(s,e,n){s.exports=n.p+"_/oppgaver/src/processing/farger/Fargevelger.e125eb.gif"},2297:function(s,e,n){s.exports=n.p+"_/oppgaver/src/processing/farger/Fargevelger.97f458.png"}});