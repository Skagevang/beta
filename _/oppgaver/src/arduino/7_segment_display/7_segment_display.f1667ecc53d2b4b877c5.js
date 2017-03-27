webpackJsonp([65,385],{1168:function(s,e,n){s.exports={frontmatter:n(296),content:n(2074)}},2074:function(s,e,n){s.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>La oss se på å få et display til å telle.</p> </section> <section class=activity id=steg-1-finn-frem-utstyr> <h1 class=activity id=steg-1-finn-frem-utstyr>Steg 1: Finn frem utstyr</h1> <section class=check id=til-denne-oppgaven-trenger-du> <h2 class=check id=til-denne-oppgaven-trenger-du>Til denne oppgaven trenger du</h2> <ul> <li>1 Arduino Uno</li> <li>1 breadboard</li> <li>2 motstander 1k Ohm (Fargekode: brun-svart-rød-gull)</li> <li>11 ledninger</li> <li>1 7-segment display</li> </ul> <figure><img src="+n(2683)+" alt=utstyr /></figure> </section> </section> <section class=activity id=steg-2-utforskning> <h1 class=activity id=steg-2-utforskning>Steg 2: Utforskning</h1> <p>Før vi får displayet til å vise tall, er det nyttig å utforske displayet for å se hvilke pinner som lyser opp hvilken del av displayet.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li>Motstand fra de to midterste pinnene på displayet.</li> <li>Ledning fra andre enden av motstandene til ground.</li> <li>Ledning fra pin 13 på Arduino til pinnen nederst til høyre på displayet.</li> </ul> <figure><img src="+n(2682)+" alt=utforskning /></figure> <pre><code class=language-cpp>\n<span class=hljs-keyword>int</span> pin = <span class=hljs-number>13</span>;\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>setup</span><span class=hljs-params>()</span> </span>{\n    pinMode(pin, OUTPUT);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>loop</span><span class=hljs-params>()</span> </span>{\n    pinMode(pin, HIGH);\n    delay(<span class=hljs-number>500</span>);\n    pinMode(pin, LOW);\n    delay(<span class=hljs-number>500</span>);\n}\n\n</code></pre> <p>Flytt så rundt på ledningen som står i breadboardet for å se hvilke pinner på displayet som får hvilken del av segmentet til å blinke.</p> </section> </section> <section class=activity id=steg-3-fa-displayet-til-a-telle-oppover> <h1 class=activity id=steg-3-fa-displayet-til-a-telle-oppover>Steg 3: Få displayet til å telle oppover</h1> <p>Før vi skriver kode for å få displayet til å telle oppover, er vi nødt til å lage den fulle kretsen.</p> <figure><img src="+n(2679)+" alt=fullkrets /></figure> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li>Motstand fra de to midterste pinnene på displayet.</li> <li>Ledning fra andre enden av motstandene til ground.</li> <li>Koble resten av ledningene som vist på bildet over.</li> </ul> </section> <section class=activity id=skriv-kode> <h2 class=activity id=skriv-kode>Skriv kode</h2> <pre><code class=language-cpp><span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>blank_ut_display</span><span class=hljs-params>()</span> </span>{\n    <span class=hljs-keyword>for</span> (<span class=hljs-keyword>int</span> led = <span class=hljs-number>6</span>; led &lt;= <span class=hljs-number>13</span>; ++led) {\n        digitalWrite(led, LOW);\n    }\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_0</span><span class=hljs-params>()</span> </span>{\n    blank_ut_display();\n    digitalWrite(<span class=hljs-number>7</span>, HIGH);\n    digitalWrite(<span class=hljs-number>8</span>, HIGH);\n    digitalWrite(<span class=hljs-number>9</span>, HIGH);\n    digitalWrite(<span class=hljs-number>12</span>, HIGH);\n    digitalWrite(<span class=hljs-number>11</span>, HIGH);\n    digitalWrite(<span class=hljs-number>10</span>, HIGH);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_1</span><span class=hljs-params>()</span> </span>{\n    blank_ut_display();\n    digitalWrite(<span class=hljs-number>9</span>, HIGH);\n    digitalWrite(<span class=hljs-number>12</span>, HIGH);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_2</span><span class=hljs-params>()</span> </span>{\n    blank_ut_display();\n    digitalWrite(<span class=hljs-number>8</span>, HIGH);\n    digitalWrite(<span class=hljs-number>9</span>, HIGH);\n    digitalWrite(<span class=hljs-number>6</span>, HIGH);\n    digitalWrite(<span class=hljs-number>10</span>, HIGH);\n    digitalWrite(<span class=hljs-number>11</span>, HIGH);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_3</span><span class=hljs-params>()</span> </span>{\n    blank_ut_display();\n    digitalWrite(<span class=hljs-number>8</span>, HIGH);\n    digitalWrite(<span class=hljs-number>9</span>, HIGH);\n    digitalWrite(<span class=hljs-number>6</span>, HIGH);\n    digitalWrite(<span class=hljs-number>12</span>, HIGH);\n    digitalWrite(<span class=hljs-number>11</span>, HIGH);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>setup</span><span class=hljs-params>()</span> </span>{\n    <span class=hljs-keyword>for</span> (<span class=hljs-keyword>int</span> led = <span class=hljs-number>6</span>; led &lt;= <span class=hljs-number>13</span>; ++led) {\n        pinMode(led, OUTPUT);\n    }\n    blank_ut_display();\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>loop</span><span class=hljs-params>()</span> </span>{\n    tegn_0();\n    delay(<span class=hljs-number>500</span>);\n    tegn_1();\n    delay(<span class=hljs-number>500</span>);\n    tegn_2();\n    delay(<span class=hljs-number>500</span>);\n    tegn_3();\n    delay(<span class=hljs-number>500</span>);\n}\n</code></pre> <section class=protip id=om-funksjoner> <h3 class=protip id=om-funksjoner>Om funksjoner</h3> <p>I denne oppgaven har vi introdusert <code>void blank_ut_display()</code>, <code>void tegn_0()</code>, <code>void tegn_1()</code>, <code>void tegn_2()</code> og <code>void tegn_3()</code>. Disse kaller vi <em>funksjoner</em>, og er en måte å gruppere kode på. Når vi i <code>void loop()</code> sier <code>tegn_0();</code> gjør vi et <em>funksjonskall</em> til <code>void tegn_0()</code>, og koden inni den funksjonen kjøres.</p> <p>Hvis du ser på <code>void setup()</code> og <code>void loop()</code> er dette også funksjoner, hvor <code>void setup()</code> kalles ved oppstart av programmet, og <code>void loop()</code> kalles på nytt og på nytt.</p> </section> <section class=challenge id=utfordringer> <h3 class=challenge id=utfordringer>Utfordringer</h3> <ul> <li>Klarer du å få displayet til å telle fra 0 til 9?</li> <li>Klarer du å få punktumet til å blinke mens vi teller?</li> <li>Klarer du å få punktumet til å blinke dobbelt så fort som vi teller?</li> </ul> </section> </section> </section> <section class=activity id=steg-4-bruk-en-knapp-for-a-telle-oppover> <h1 class=activity id=steg-4-bruk-en-knapp-for-a-telle-oppover>Steg 4: Bruk en knapp for å telle oppover</h1> <section class=sjekkliste id=til-denne-delen-trenger-du-i-tillegg> <h2 class=sjekkliste id=til-denne-delen-trenger-du-i-tillegg>Til denne delen trenger du i tillegg</h2> <ul> <li>2 ledninger.</li> <li>1 trykkknapp.</li> </ul> <figure><img src="+n(2678)+" alt=enknapp /></figure> <p>Koble opp som vist på bildet over. Eneste forskjellen her er knappen.</p> </section> <section class=activity id=endre-kode> <h2 class=activity id=endre-kode>Endre kode</h2> <pre><code class=language-cpp>...\n\n<span class=hljs-keyword>int</span> tall = <span class=hljs-number>0</span>;\n<span class=hljs-keyword>int</span> knapp = <span class=hljs-number>4</span>;\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>setup</span><span class=hljs-params>()</span> </span>{\n    <span class=hljs-keyword>for</span> (<span class=hljs-keyword>int</span> led = <span class=hljs-number>6</span>; led &lt;= <span class=hljs-number>13</span>; ++led) {\n        pinMode(led, OUTPUT);\n    }\n    pinMode(knapp, INPUT_PULLUP);\n    tegn_0();\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>loop</span><span class=hljs-params>()</span> </span>{\n    <span class=hljs-keyword>if</span> (digitalRead(knapp) == LOW) {\n        tall += <span class=hljs-number>1</span>;\n        <span class=hljs-keyword>switch</span> (tall) {\n            <span class=hljs-keyword>case</span> <span class=hljs-number>1</span>:\n                tegn_1();\n                <span class=hljs-keyword>break</span>;\n            <span class=hljs-keyword>case</span> <span class=hljs-number>2</span>:\n                tegn_2();\n                <span class=hljs-keyword>break</span>;\n            <span class=hljs-keyword>case</span> <span class=hljs-number>3</span>:\n                tegn_3();\n                <span class=hljs-keyword>break</span>;\n            <span class=hljs-keyword>default</span>:\n                tall = <span class=hljs-number>0</span>;\n                tegn_0();\n                <span class=hljs-keyword>break</span>;\n        }\n        delay(<span class=hljs-number>300</span>);\n    }\n}\n</code></pre> <section class=protip id=om-switch> <h3 class=protip id=om-switch>Om switch</h3> <p>Her har vi introdusert switch. Denne kan minne om en if, hvor <code>switch (tall)</code> sjekker verdien av tall, og finner riktig verdi i <code>case</code> kallene under. Så når tallet er 2 vil vi gå til <code>case 2:</code> og eksekvere koden under dette. <code>break</code> vil si at vi er ferdige med casen.</p> <p>Dersom en <code>case</code> mangler <code>break</code>, vil koden som er under kjøre. Altså neste <code>case</code>. Dette kalles å <em>falle gjennom</em>, eller <em>fall through</em> på engelsk. Dette er en ganske vanlig feil, så om man faktisk mener at neste case skal kjøres, legger man ofte på en kommentar:</p> <pre><code class=language-cpp><span class=hljs-keyword>switch</span> (tall) {\n  <span class=hljs-keyword>case</span> <span class=hljs-number>0</span>:\n    kode_her();\n    <span class=hljs-comment>// fall gjennom</span>\n  <span class=hljs-keyword>case</span> <span class=hljs-number>1</span>:\n    mer_kode_her();\n    <span class=hljs-keyword>break</span>;\n  <span class=hljs-keyword>default</span>:\n    ...\n</code></pre> <ul> <li>Dersom <code>tall == 0</code> vil koden i både <code>case 0</code> og <code>case 1</code> kjøres, altså faller den gjennom fra <code>case 0</code> til <code>case 1</code>.</li> <li>Dersom <code>tall == 1</code> kjøres kun koden i <code>case 1</code>.</li> <li>Dersom <code>tall != 0 &amp;&amp; tall != 1</code> kjøres koden i default.</li> </ul> <p>Hvis verdien av <code>tall</code> ikke matcher noen <code>case</code> linjene vil vi eksekvere koden i <code>default</code>.</p> <p>Så i vår kode, når <code>tall</code> er 4 vil vi treffe <code>default</code>, sette tall til 0 og så tegne 0. Dette er grunnen til at vi begynner på igjen på 0 etter vi har telt til 3.</p> </section> <section class=challenge id=utfordringer-2> <h3 class=challenge id=utfordringer-2>Utfordringer</h3> <ul> <li>Klarer du å utvide til å telle til '9'?</li> <li>Klarer du å hindre at vi &quot;går rundt&quot; i tellingen, slik at å trykke på knappen når du allerede er på '9' ikke gjør noe?</li> <li>Klarer du å få punktumet til å lyse når du trykker inn knappen?</li> <li>Klarer du å legge til en ekstra knapp som teller nedover, så én knapp teller oppover, og den andre nedover?</li> </ul> </section> </section> </section> "},2678:function(s,e,n){s.exports=n.p+"_/oppgaver/src/arduino/7_segment_display/enknappkrets.a55f21.jpg"},2679:function(s,e,n){s.exports=n.p+"_/oppgaver/src/arduino/7_segment_display/fullkrets.85f71b.jpg"},2682:function(s,e,n){s.exports=n.p+"_/oppgaver/src/arduino/7_segment_display/utforskning.ff55f3.jpg"},2683:function(s,e,n){s.exports=n.p+"_/oppgaver/src/arduino/7_segment_display/utstyr.4d103e.jpg"}});