webpackJsonp([20,418],{1647:function(e,t,i){e.exports={frontmatter:i(674),content:i(2812)}},2812:function(e,t,i){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Swift er et programmeringsspråk laget av Apple og er etterfølgeren til Objective-C. Med Swift kan du lage apper for iOS og OSX. For å gjennomføre dette kurset trenger du en Mac, og helst en iPhone/iPad/iPod å teste ut appen på :)</p> <p>I dag skal vi lage vår første app, nemlig en Hei Verden-app! Det er en kjent og kjær tradisjon at det første programmet man skriver i et nytt programmeringsspråk skriver &quot;Hei Verden!&quot; til skjermen.</p> <figure><img src="+i(3530)+' alt=""></figure> </section> <section class=activity id=steg-1-sette-opp-xcode> <h1 class=activity id=steg-1-sette-opp-xcode>Steg 1: Sette opp Xcode</h1> <p>Xcode er Apples utviklingsverktøy, og vi skal bruke det til å skrive appen. Last ned nyeste versjon Xcode fra Mac App Store, og sørg for at du har en Apple-ID (merk. dette programmet er gratis). Vi skal starte med å sette opp et nytt prosjekt.</p> <section class=protip id=xcode-7-beta-vs-xcode-6> <h2 class=protip id=xcode-7-beta-vs-xcode-6>Xcode 7 Beta vs Xcode 6</h2> <p>I denne øvelsen er skjermbildene og instruksjonene for Xcode 7 beta, men det skal fungere helt likt på Xcode 6.</p> </section> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_0><label for=cbx_0> Åpne Xcode ved å holde <code>cmd + mellomrom</code> og søk etter <strong>Xcode</strong>. Alternativt kan du søke etter Xcode med forstørrelsesglass-ikonet øverst i høyre hjørne.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_1><label for=cbx_1> Du blir møtt med et vindu som lar deg gjøre en rekke ting. Du kan enten starte et nytt prosjekt, leke deg rundt i <strong>Playground</strong> eller se på og endre et eksisterende prosjekt.</label></p> <figure><img src='+i(3531)+' alt=""></figure> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_2><label for=cbx_2> Trykk på <strong>Create a New Xcode project</strong>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_3><label for=cbx_3> En ny skjerm skal vises som lar deg velge et rammeverk for appen. Vi skal velge <strong>Single View Application</strong>, som gir oss et bra utgangspunkt for vår egen Hei Verden-app siden denne trenger bare ett skjermbilde.</label></p> <figure><img src='+i(3533)+' alt=""></figure> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_4><label for=cbx_4> Trykker du på <strong>Next</strong> blir du tatt til en skjerm hvor du må fylle inn litt informasjon. I <strong>Product Name</strong> kan du navngi appen din (vi skal kalle vår <em>Hei Verden!</em>). <strong>Organization Name</strong> og <strong>Organization Identifier</strong> er det ikke så viktig med nå, du kan bare la den være som den er :) <strong>Language</strong> skal settes til Swift, mens <strong>Devices</strong> skal settes til iPhone.</label></p> <figure><img src='+i(3527)+' alt=""></figure> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_5><label for=cbx_5> Lagre applikasjonen ved å trykke <strong>next</strong>, og deretter <strong>create</strong> (hvor du velger hvor prosjektet lagres).</label></p> </li> </ul> </section> </section> <section class=activity id=steg-2-tekst-pa-skjermen-ved-bruk-av-en-tekstetikett> <h1 class=activity id=steg-2-tekst-pa-skjermen-ved-bruk-av-en-tekstetikett>Steg 2: Tekst på skjermen ved bruk av en tekstetikett</h1> <p>Vi skal nå legge til en tekstetikett for å så endre teksten i <code>Main.storyboard</code>.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_6><label for=cbx_6> Trykk på <code>Main.storyboard</code> på venstre side av skjermen.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_7><label for=cbx_7> Zoom ut til du ser en firkantet skjerm. Dette representerer skjermen til enheten. Nederst i høyre hjørne av Xcode skal det være en boks, med fire kanpper på øverste rad. Vi skal velge det tredje ikonet, som ligner en hjemknapp. Nede i boksen vil det være et søkefelt. Der skal vi søke etter <code>Label</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_8><label for=cbx_8> Dra en <code>Label</code> til <code>Main.storyboard</code>, og legg den helt øverst i venstre hjørne av det store kvadratet. Du må muligens dobbeltklikke på <code>Main.storyboard</code> før du får lov til å dra <code>Label</code> dit. Dobbeltklikk på <code>Label</code>, da dette lar oss endre teksten. Som tradisjonsrike skriver vi <em>Hei verden!</em>, men det er helt opp til deg hva du vil skrive! :)</label></p> <figure><img src='+i(3529)+' alt=""></figure> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_9><label for=cbx_9> Nå skal vi kjøre appen for å teste at alt fungerer. Vi gjør dette ved å trykke på den svarte pilen (playknappen) øverst i venstre hjørne. Alternativt kan du trykke <code>cmd + r</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_10><label for=cbx_10> Det skal nå kjøres en simulator, og teksten <em>Hei verden!</em> skal dukke opp.</label></p> </li> </ul> </section> </section> <section class=activity id=steg-3-fa-en-knapp-til-a-skrive-noe-til-skjermen> <h1 class=activity id=steg-3-fa-en-knapp-til-a-skrive-noe-til-skjermen>Steg 3: Få en knapp til å skrive noe til skjermen</h1> <p>Vi skal nå sørge for at ved å trykke på en knapp, vil <code>Label</code> endre seg. For å kunne følge med på denne delen av kurset er det anbefalt med noe tidligere kunnskap om grunnleggende programmering.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_11><label for=cbx_11> Om du vil spare på den første appen du lagde kan du gjerne lage et nytt Xcode-prosjekt før du går videre. Gjenta i såfall stegene 1 og 2 og sjekk at alt fungerer som det skal.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_12><label for=cbx_12> I tillegg til å dra inn en <code>Label</code> i <code>Main.Storyboard</code>, skal vi legge til en <code>Button</code>. En <code>Button</code> kan vi trykke på og kjøre kode knyttet til knappen. Du legger til en <code>Button</code> på samme måte som du gjorde med <code>Label</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_13><label for=cbx_13> Ha <code>Main.Storyboard</code> i Xcode vinduet valgt, og trykk på de to sirklene øverst i høyre hjørne i Xcode. Vinduet som dukker opp til venstre viser koden knyttet til en <code>ViewController</code>, som er den som kontrollerer hvordan app-skjermen oppfører seg. Det er her selve kodingen foregår.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_14><label for=cbx_14> Venstreklikk på <code>Button</code> i <code>Main.Storyboard</code>. Hold <strong>ctrl</strong> nede mens du venstreklikker og dra mot høyre. Dra streken til linjen over der det står <code>override func didReceiveMemoryWarning()</code>. Endre <code>Connection</code> til å være en <code>Action</code>, og gi den navnet <code>knapp</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_15><label for=cbx_15> Venstreklikk på <code>Label</code> i <code>Main.Storyboard</code>. Hold <strong>ctrl</strong> nede, venstreklikk og dra streken til mellom <code>override func viewDidLoad()</code> og <code>class ViewController: UIViewController {</code>. <code>Connection</code> lar du være <code>Outlet</code>, og sett navn til <code>etikett</code>.</label></p> <figure><img src='+i(3532)+' alt=""></figure> </li> </ul> </section> <section class=protip id=slippe-streken-pa-riktig-sted-i-koden> <h2 class=protip id=slippe-streken-pa-riktig-sted-i-koden>Slippe streken på riktig sted i koden</h2> <p>Det er viktig å slippe strekene eksakt som det står i de to stegene over! Disse kobler elementene i <code>Main.storyboard</code> til koden din.</p> </section> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_16><label for=cbx_16> Vi skal nå begynne å kode litt! Det er anbefalt med noe tidligere programmeringserfaring her.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_17><label for=cbx_17> Vi har nå laget to såkalte <code>Connections</code>. Den ene er <code>@IBOutlet weak var etikett: UILabel!</code>, som refererer til <code>Label</code> i <code>Main.Storyboard</code>. Den andre er <code>@IBAction func knapp(sender: AnyObject) { }</code></label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_18><label for=cbx_18> Tanken er at et klikk på knappen skal endre teksten til <code>Label</code>. Variabelen <code>etikett</code> er koblet til <code>Label</code>. Vi kan derfor få teksten til å endre seg ved å skrive</label></p> <pre><code>etikett<span class=hljs-selector-class>.text</span> = <span class=hljs-string>"Knappen sier: Hei!"</span>\n</code></pre> <p>mellom <code>{</code> og <code>}</code> der du slapp knappen i koden (<code>func knapp</code>).</p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_19><label for=cbx_19> Kjør appen som du lærte i Steg 2 ved å enten klikke på den svarte pilen øverst i hjørnet eller trykke <code>cmd + r</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_20><label for=cbx_20> Klikk på knappen og observer hva som skjer! Endret <code>Label</code> seg til teksten du skrev i <code>etikett.text = &quot;Knappen sier: Hei!&quot;</code>? Hvis etiketten ikke viser hele <code>Knappen sier: Hei!&quot;</code>, må du endre størrelsen på <code>Label</code>. Klarer du å gjøre det selv?</label></p> <figure><img src='+i(3528)+' alt=""></figure> </li> </ul> </section> <section class=try id=utfordring-variabler> <h2 class=try id=utfordring-variabler>Utfordring - Variabler</h2> <p>Prøv å definer en variabel nedenfor <code>@IBOutlet weak var etikett: UILabel!</code>, og sett den til å være ditt navn. Klarer du å få <code>Label</code> til å vise verdien av variabelen ved å endre <code>etikett.text</code>?</p> </section> </section> <section class=activity id=steg-4-fa-input-fra-tekstfelt> <h1 class=activity id=steg-4-fa-input-fra-tekstfelt>Steg 4: Få input fra tekstfelt</h1> <p>Nå skal vi legge inn et tekstfelt i appen, så vi kan ta det brukeren skriver i tekstfeltet og vise det i <code>Label</code>.</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_21><label for=cbx_21> I dette steget kan du godt fortsette på appen vi jobbet med i Steg 3. Å implementere tekstfeltfunksjonalitet er veldig likt som i steget over.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_22><label for=cbx_22> Begynn med å søke etter <code>Text Field</code> på samme sted hvor du har søkt etter <code>Label</code>og <code>Button</code>. Dra så <code>Text Field</code> inn i <code>Main.Storyboard</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_23><label for=cbx_23> Lag en <code>Connection</code> som du gjorde i Steg 3 og opprett den på linjen under <code>@IBOutlet weak var etikett: UILabel!</code>. Det eneste du skal endre er navnet på tekstfeltet. Bruk <code>tekstfelt</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_24><label for=cbx_24> I <code>@IBAction func knapp(sender: AnyObject) { }</code> kan du bytte ut <code>etikett.text = &quot;Knappen sier: Hei!&quot;</code> med <code>etikett.text = tekstfelt.text</code>. Det brukeren skriver i inn i tekstfeltet er tilgjengelig i <code>text</code>-egenskapen til tekstfeltet, og vi henter ut denne informasjonen når vi trykker på knappen.</label></p> <figure><img src='+i(3534)+' alt=""></figure> </li> </ul> </section> <section class=try id=utfordring-kan-du-lage-din-egen-versjon> <h2 class=try id=utfordring-kan-du-lage-din-egen-versjon>Utfordring - Kan du lage din egen versjon?</h2> <p>Nå som du har lært det grunnleggende, hvorfor ikke lage en app som har flere knapper og tekstfelt? Kanskje du kan få den til å fortelle en morsom historie basert på ord brukeren skriver inn? Vis gjerne appen til bekjente og be om tilbakemeldinger!</p> </section> <section class=protip id=noen-sporsmal> <h2 class=protip id=noen-sporsmal>Noen spørsmål?</h2> <p>Har du noen spørsmål angående Xcode, Swift eller ris/ros for dette kurset, send meg gjerne en mail til <a href=mailto:andreas.amundsen123@gmail.com>andreas.amundsen123@gmail.com</a>!</p> <p>Jeg tar gjerne i mot tips til ideer til fremtidige kurs!</p> </section> </section> '},3527:function(e,t,i){e.exports=i.p+"_/oppgaver/src/swift/hei_verden/app_informasjon.579934.png"},3528:function(e,t,i){e.exports=i.p+"_/oppgaver/src/swift/hei_verden/change_label.de468c.png"},3529:function(e,t,i){e.exports=i.p+"_/oppgaver/src/swift/hei_verden/drag_label.3c446f.png"},3530:function(e,t,i){e.exports=i.p+"_/oppgaver/src/swift/hei_verden/hei_verden.00aa23.png"},3531:function(e,t,i){e.exports=i.p+"_/oppgaver/src/swift/hei_verden/intro_skjerm.0f00eb.png"},3532:function(e,t,i){e.exports=i.p+"_/oppgaver/src/swift/hei_verden/label_connection.860d8f.png"},3533:function(e,t,i){e.exports=i.p+"_/oppgaver/src/swift/hei_verden/lag_prosjekt.8024f9.png"},3534:function(e,t,i){e.exports=i.p+"_/oppgaver/src/swift/hei_verden/textfield_input.da148e.png"}});