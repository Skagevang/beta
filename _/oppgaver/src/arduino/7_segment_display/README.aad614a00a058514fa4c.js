webpackJsonp([96,374],{1176:function(s,n,a){s.exports={frontmatter:a(278),content:a(2007)}},2007:function(s,n,a){s.exports="<section id=informasjon-til-veiledere> <h1 id=informasjon-til-veiledere>Informasjon til veiledere</h1> <section id=laeringsmal> <h2 id=laeringsmal>Læringsmål</h2> <p>Oppgaven «7-Segment Display» introduserer flere konsepter:</p> <ul> <li>En teknikk for å utforske ukjente komponenter</li> <li>7-Segment Display</li> <li>Funksjoner og funksjonskall</li> <li>Switch statements</li> </ul> </section> <section id=merk> <h2 id=merk>Merk</h2> <p>Denne oppgaven krever at elevene holder styr på en god del ledninger, og sluttresultatet vil se noe kaotisk ut.</p> <figure><img src="+a(2583)+" alt=kaotisk /></figure> </section> </section> <section id=losningsforslag> <h1 id=losningsforslag>Løsningsforslag</h1> <section id=display-som-teller-opp-og-ned-med-to-knapper> <h2 id=display-som-teller-opp-og-ned-med-to-knapper>Display som teller opp og ned med to knapper.</h2> <p>Kobling:</p> <figure><img src="+a(2584)+" alt=Kobling /></figure> <p>Kode:</p> <pre><code class=language-cpp><span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>blank</span><span class=hljs-params>()</span> </span>{\n  <span class=hljs-keyword>for</span> (<span class=hljs-keyword>int</span> led = <span class=hljs-number>6</span>; led &lt;= <span class=hljs-number>13</span>; led++) {\n    digitalWrite(led, LOW);\n  }\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_0</span><span class=hljs-params>()</span> </span>{\n  blank();\n  digitalWrite(<span class=hljs-number>7</span>, HIGH);\n  digitalWrite(<span class=hljs-number>8</span>, HIGH);\n  digitalWrite(<span class=hljs-number>9</span>, HIGH);\n  digitalWrite(<span class=hljs-number>12</span>, HIGH);\n  digitalWrite(<span class=hljs-number>11</span>, HIGH);\n  digitalWrite(<span class=hljs-number>10</span>, HIGH);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_1</span><span class=hljs-params>()</span> </span>{\n  blank();\n  digitalWrite(<span class=hljs-number>9</span>, HIGH);\n  digitalWrite(<span class=hljs-number>12</span>, HIGH);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_2</span><span class=hljs-params>()</span> </span>{\n  blank();\n  digitalWrite(<span class=hljs-number>8</span>, HIGH);\n  digitalWrite(<span class=hljs-number>9</span>, HIGH);\n  digitalWrite(<span class=hljs-number>6</span>, HIGH);\n  digitalWrite(<span class=hljs-number>10</span>, HIGH);\n  digitalWrite(<span class=hljs-number>11</span>, HIGH);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_3</span><span class=hljs-params>()</span> </span>{\n  blank();\n  digitalWrite(<span class=hljs-number>8</span>, HIGH);\n  digitalWrite(<span class=hljs-number>9</span>, HIGH);\n  digitalWrite(<span class=hljs-number>6</span>, HIGH);\n  digitalWrite(<span class=hljs-number>12</span>, HIGH);\n  digitalWrite(<span class=hljs-number>11</span>, HIGH);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_4</span><span class=hljs-params>()</span> </span>{\n  blank();\n  digitalWrite(<span class=hljs-number>7</span>, HIGH);\n  digitalWrite(<span class=hljs-number>6</span>, HIGH);\n  digitalWrite(<span class=hljs-number>9</span>, HIGH);\n  digitalWrite(<span class=hljs-number>12</span>, HIGH);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_5</span><span class=hljs-params>()</span> </span>{\n  blank();\n  digitalWrite(<span class=hljs-number>8</span>, HIGH);\n  digitalWrite(<span class=hljs-number>7</span>, HIGH);\n  digitalWrite(<span class=hljs-number>6</span>, HIGH);\n  digitalWrite(<span class=hljs-number>12</span>, HIGH);\n  digitalWrite(<span class=hljs-number>11</span>, HIGH);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_6</span><span class=hljs-params>()</span> </span>{\n  blank();\n  digitalWrite(<span class=hljs-number>8</span>, HIGH);\n  digitalWrite(<span class=hljs-number>7</span>, HIGH);\n  digitalWrite(<span class=hljs-number>10</span>, HIGH);\n  digitalWrite(<span class=hljs-number>11</span>, HIGH);\n  digitalWrite(<span class=hljs-number>12</span>, HIGH);\n  digitalWrite(<span class=hljs-number>6</span>, HIGH);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_7</span><span class=hljs-params>()</span> </span>{\n  blank();\n  digitalWrite(<span class=hljs-number>8</span>, HIGH);\n  digitalWrite(<span class=hljs-number>9</span>, HIGH);\n  digitalWrite(<span class=hljs-number>12</span>, HIGH);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_8</span><span class=hljs-params>()</span> </span>{\n  blank();\n  digitalWrite(<span class=hljs-number>8</span>, HIGH);\n  digitalWrite(<span class=hljs-number>7</span>, HIGH);\n  digitalWrite(<span class=hljs-number>6</span>, HIGH);\n  digitalWrite(<span class=hljs-number>12</span>, HIGH);\n  digitalWrite(<span class=hljs-number>10</span>, HIGH);\n  digitalWrite(<span class=hljs-number>11</span>, HIGH);\n  digitalWrite(<span class=hljs-number>9</span>, HIGH);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>tegn_9</span><span class=hljs-params>()</span> </span>{\n  blank();\n  digitalWrite(<span class=hljs-number>8</span>, HIGH);\n  digitalWrite(<span class=hljs-number>7</span>, HIGH);\n  digitalWrite(<span class=hljs-number>6</span>, HIGH);\n  digitalWrite(<span class=hljs-number>9</span>, HIGH);\n  digitalWrite(<span class=hljs-number>12</span>, HIGH);\n}\n\n<span class=hljs-keyword>int</span> minus = <span class=hljs-number>5</span>;\n<span class=hljs-keyword>int</span> pluss = <span class=hljs-number>4</span>;\n<span class=hljs-keyword>int</span> tall = <span class=hljs-number>0</span>;\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>setup</span><span class=hljs-params>()</span> </span>{\n  <span class=hljs-keyword>for</span> (<span class=hljs-keyword>int</span> led = <span class=hljs-number>6</span>; led &lt;= <span class=hljs-number>13</span>; led++) {\n    pinMode(led, OUTPUT);\n  }\n  pinMode(pluss, INPUT_PULLUP);\n  pinMode(minus, INPUT_PULLUP);\n  tegn_0();\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>oppdater</span><span class=hljs-params>()</span> </span>{\n  <span class=hljs-keyword>switch</span> (tall) {\n    <span class=hljs-keyword>case</span> <span class=hljs-number>1</span>:\n      tegn_1();\n      <span class=hljs-keyword>break</span>;\n    <span class=hljs-keyword>case</span> <span class=hljs-number>2</span>:\n      tegn_2();\n      <span class=hljs-keyword>break</span>;\n    <span class=hljs-keyword>case</span> <span class=hljs-number>3</span>:\n      tegn_3();\n      <span class=hljs-keyword>break</span>;\n    <span class=hljs-keyword>case</span> <span class=hljs-number>4</span>:\n      tegn_4();\n      <span class=hljs-keyword>break</span>;\n    <span class=hljs-keyword>case</span> <span class=hljs-number>5</span>:\n      tegn_5();\n      <span class=hljs-keyword>break</span>;\n    <span class=hljs-keyword>case</span> <span class=hljs-number>6</span>:\n      tegn_6();\n      <span class=hljs-keyword>break</span>;\n    <span class=hljs-keyword>case</span> <span class=hljs-number>7</span>:\n      tegn_7();\n      <span class=hljs-keyword>break</span>;\n    <span class=hljs-keyword>case</span> <span class=hljs-number>8</span>:\n      tegn_8();\n      <span class=hljs-keyword>break</span>;\n    <span class=hljs-keyword>case</span> <span class=hljs-number>9</span>:\n      tegn_9();\n      <span class=hljs-keyword>break</span>;\n    <span class=hljs-keyword>case</span> <span class=hljs-number>10</span>:\n      tall = <span class=hljs-number>9</span>;\n      <span class=hljs-keyword>break</span>;\n    <span class=hljs-keyword>default</span>:\n      tegn_0();\n      tall = <span class=hljs-number>0</span>;\n      <span class=hljs-keyword>break</span>;\n  }\n  digitalWrite(<span class=hljs-number>13</span>, HIGH);\n  delay(<span class=hljs-number>150</span>);\n  digitalWrite(<span class=hljs-number>13</span>, LOW);\n  delay(<span class=hljs-number>150</span>);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>loop</span><span class=hljs-params>()</span> </span>{\n  <span class=hljs-keyword>if</span> (digitalRead(pluss) == LOW) {\n    tall += <span class=hljs-number>1</span>;\n    oppdater();\n  }\n  <span class=hljs-keyword>if</span> (digitalRead(minus) == LOW) {\n    tall -= <span class=hljs-number>1</span>;\n    oppdater();\n  }\n}\n</code></pre> </section> </section> "},2583:function(s,n,a){s.exports=a.p+"_/oppgaver/src/arduino/7_segment_display/kaotisk.a50263.jpg"},2584:function(s,n,a){s.exports=a.p+"_/oppgaver/src/arduino/7_segment_display/toknappkrets.0f9ee6.jpg"}});