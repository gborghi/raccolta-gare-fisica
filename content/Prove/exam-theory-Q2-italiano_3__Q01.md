---
tipo: quesito
quesito_id: quesito_exam-theory-Q2-italiano_3__Q01
parent: prova_exam-theory-Q2-italiano_3
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/teorica/int22tit/exam-theory-Q2-italiano.pdf
cluster: Meccanica
quesito: '1'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/geometric-optics
  - topic/thermodynamics
  - topic/modern-quantum-physics
  - argomento/meccanica
---

# OII na Teorica — Problema 1

James Webb Space Telescope (12 punti)

Questo è un problema sulla fisica del James Webb Space Telescope. La luce proveniente da una stella colpisce lo specchio primario, che ha un'area di $A_\text{mirror} = 25\ \text{m}^2$, e la riflette sullo specchio secondario. La lunghezza focale del sistema è $f = 130\ \text{m}$. La luce viene focalizzata nell'ISIM (Integrated Science Instrument Module), che contiene il sensore CCD (Charge-Coupled-Device).

Fonte dell'immagine: NASA

Parte A. Visualizzare una stella (1.8 punti)

La stella gigante rossa più vicina si trova ad una distanza di 89 anni-luce, ha una temperatura di $T_\text{star} = 3600\ \text{K}$, e un diametro $d_o = 1.7 \times 10^{11}\ \text{m}$.

A.1
Calcola il diametro dell'immagine della stella focalizzata sulla superficie sensibile del sensore CCD.
0.4pt

A.2
Stima il diametro del massimo centrale di diffrazione sulla superficie sensibile del sensore CCD. Assumi una lunghezza d'onda $\lambda = 800\ \text{nm}$, che è la lunghezza d'onda del massimo di intensità della stella gigante rossa.
0.4pt

A.3
Se il sensore del CCD non viene raffreddato e può perdere calore solo irradiandolo dalla parte superiore della superficie sensibile, quale sarebbe la temperatura di equilibrio del CCD nell'area ove si forma l'immagine della gigante rossa?
Si assuma che la superficie del CCD sia quella di un corpo nero. Si fornisca una formula ed una stima numerica.
1.0pt

Parte B. Contare i fotoni (1.8 punti)

L'assorbimento di un fotone dal sensore del CCD provoca l'emissione di un elettrone nell'apparato. Questo avviene solo se il fotone ha energia sufficiente per eccitare un elettrone a superare il gap di energia $\Delta E_g$. Si assuma che ogni fotone che ha energia sufficiente ecciti un elettrone. Esiste anche una fuoriuscita di elettroni attraverso il gap dovuta alla temperatura del sensore CCD; questa è la corrente di buio $i_d$ e viene misurata in numero di elettroni al secondo. È una funzione della temperatura secondo relazione

$$i_d = i_0 e^{-|\Delta E_g|/6k_B T}. \tag{1}$$

dove $i_0$ è una costante.

Il grafico mostra come varia la corrente di buio con la temperatura. Le unità per la corrente di buio, $e^-/\text{s}$ devono essere interpretate come espressione del conteggio del numero di elettroni per secondo.

B.1
Dal grafico della corrente di buio, fornisci una stima dell'ordine di grandezza della temperatura di una sorgente lontana di fotoni termici di soglia che sarebbero in grado di eccitare appena un elettrone in quel pixel.
0.4pt

Gli elettroni sono raccolti in un condensatore, e dopo un tempo di esposizione $\tau$, vengono contati. Ci sono tre sorgenti principali di errori nel processo: una incertezza fissa nel processo di conteggio chiamata errore di lettura; un errore distribuito secondo la distribuzione di Poisson associato con la corrente di buio, un errore distribuito secondo la distribuzione di Poisson associato con la rivelazione del fotone incidente. Gli errori distribuiti secondo la distribuzione di Poisson sono uguali alla radice quadrata del numero di conteggi associati con quel processo.

Il numero di fotoni misurato è uguale al numero di elettroni nel condensatore meno il numero di elettroni associati con la corrente di buio.

B.2
Scrivi una espressione per l'incertezza totale del conteggio $\sigma_t$, in presenza di un errore di lettura $\sigma_l$, una corrente di buio $i_d$, un numero di fotoni incidenti per secondo $p$, e un tempo di esposizione $\tau$.
0.4pt

Per le rimanenti domande di questa parte si assuma per il tempo di esposizione $\tau = 10^4\ \text{s}$ e l'errore di lettura è fissato al valore $\sigma_r = 14$.

B.3
Si assuma una temperatura di esercizio pari a $T_p = 7.5\ \text{K}$. Si calcoli il numero minimo di fotoni incidenti al secondo $p$ affinché il conteggio dei fotoni sia dieci volte l'incertezza del conteggio.
0.5pt

B.4
Assumendo che tutti i fotoni siano appena in grado di eccitare un elettrone attraverso il gap di energia qual è l'intensità della sorgente di fotoni trovata in B.3 sullo specchio primario? Si esprima il risultato in $\text{W/m}^2$.
0.5pt

Parte C. Raffreddamento passivo (4.4 punti)

Un sensore CCD deve essere mantenuto a bassa temperatura. La prima accortezza è mettere uno schermo per proteggerlo dalla radiazione del sole.

Lo schermo solare consiste di cinque strati separati riflettenti in fogli sottili (in colore scuro nella figura); l'energia radiante (in colore chiaro nella figura) del sole incide sul primo foglio a sinistra e una certa quantità di energia sfugge tra ogni coppia di fogli.

Schema del flusso di energia: le linee verticali (scure) rappresentano i fogli, il flusso di energia (grigio) avviene da sinistra a destra ma, tra i fogli, una parte dell'energia fluisce verso l'alto e fuori nello spazio.

A sinistra Un semplice modello di due fogli adiacenti, 1 e 2 separati da una distanza $h$. I fogli non si toccano e il perimetro comunica con lo spazio. Per semplicità si assuma che i fogli siano paralleli. La radiazione termica può essere scambiata tra i fogli e la radiazione termica può sfuggire attraverso lo spazio aperto nel perimetro. A destra lo spazio del perimetro è stato ombreggiato per aiutare la visualizzazione.

Si assumano le seguenti approssimazioni:
- I fogli sono quadrati ciascuno con un'area pari a $A_\text{sheet} = 200\ \text{m}^2$.
- I fogli sono paralleli e separati di $h = 25\ \text{cm}$ lungo il perimetro.
- I fogli hanno un coefficiente di emissività $\epsilon \ll 1$. Si assuma che tutte le riflessioni al di fuori delle superfici del foglio sono diffuse.
- I fogli sono sottili e la temperatura sulle facce anteriori e posteriori sono uguali e uniformi.
- La frazione di flusso radiante emessa da un foglio e assorbita dal foglio adiacente è $\alpha \leq 1$. Ciò significa che se la superficie 1 in figura emette una quantità di calore $Q_1$ verso la superficie 2 allora la superficie 2 assorbirà una quantità di calore $\alpha Q_1$ dalla superficie 1.
- La quantità di flusso radiante espulsa dallo spazio lungo il perimetro tra i due fogli viene approssimata come $\beta Q_{12}$ mentre $\alpha Q_{12}$ è il flusso netto tra i due fogli. Si assuma $\beta < 1$. Questo equivale a dire che il calore perso nello spazio tra i due fogli è proporzionale al calore netto scambiato tra i due fogli. Questa è una approssimazione brutale nel problema.
- La temperatura di fondo dello spazio è trascurabile.

C.1
Si ricavi l'espressione per le temperature di equilibrio del primo foglio e del quinto foglio in termini della intensità della radiazione solare incidente $I_0$, le costanti $\alpha$ e $\beta$, e le necessarie costanti fisiche. Per semplificare l'espressione è possibile definire ulteriori costanti espresse in funzione di $\alpha$ e $\beta$, etc.
2.4pt

C.2
Si ricavino stime numeriche per $\alpha$ e $\beta$ dalle informazioni sulla geometria dei fogli assumendo un coefficiente di emissività $\epsilon = 0.05$. Si raccomanda di considerare il modello a scatola rettangolare dei fogli presentato sopra, dove la superficie laterale agisce effettivamente come un assorbitore ideale di energia radiante.
1.6pt

C.3
Determina numericamente le temperature dei fogli 1 e 5. L'intensità solare è $I_0 = 1360\ \text{W/m}^2$.
0.4pt

Parte D. Refrigeratore criogenico. (4 punti)

L'ultimo stadio del sistema di raffreddamento raffredda direttamente il CCD. Un sistema di raffreddamento a ciclo chiuso ha un tubo di ingresso che immette elio gassoso a pressione costante $P_1$. L'elio fluisce attraverso una intercapedine porosa spugnosa (porous plug) in un tubo a pressione costante $P_2$. Il tubo trasporta il gas che raffredda il CCD. L'elio gassoso passa quindi attraverso una pompa prima di ritornare alla linea di ingresso.

Elio gassoso, fornito a sinistra ad una pressione ben definita $P_1$ e temperatura $T_1$ viene forzato attraverso una intercapedine ad una pressione $P_2$ e temperatura $T_2$, ben definite e viene rimosso da destra.

Quando il gas attraversa l'interfaccia porosa, l'attrito viscoso con le pareti sottili dei canali nella parte spugnosa ha un effetto rilevante; invece, non vi è scambio di calore dal gas durante questo processo. La velocità della massa di gas nella regione 2 è solo marginalmente maggiore della velocità della massa di gas nella regione 1.

L'elio non è un gas perfetto, ma rimane allo stato gassoso durante tutto il processo.

D.1
Si consideri una mole di gas che attraversa da sinistra a destra l'interfaccia. Si completi la tabella nel foglio risposte scrivendo '>' o '<' per identificare la quantità che deve essere maggiore, '=' per identificare le quantità che devono essere uguali, o '?' se non è possibile sapere quale è maggiore o uguale senza ulteriori informazioni.
1.0pt

D.2
Si identifichi una grandezza fisica conservata costruita a partire da $U$ (energia interna), $P$ (pressione), e $V$ (volume) quando una mole di gas attraversa l'interfaccia; si mostrino i passaggi esplicativi di come viene derivata la grandezza fisica conservata.
0.6pt

Il foglio risposte contiene grafici di energia interna per unità di massa in funzione del volume per unità di massa per l'elio insieme con le isoterme e le linee ad entropia costante.

D.3
Assumendo $V_2 = 0.100\ \text{m}^3/\text{kg}$ e $T_2 = 7.5\ \text{K}$, si utilizzi il grafico per trovare un valore numerico per la grandezza fisica conservata trovata nella domanda D.2. Si mostri la costruzione sul grafico.
1.4pt

D.4
Si trovi la temperatura massima possibile per $T_1$. Si mostri la costruzione sul grafico!
0.8pt

D.5
Si assuma per il massimo $T_1$ il valore trovato in D.4, si trovi il valore numerico per $P_1$.
0.2pt

<!--fig:start-->
**p.1** — Schema del James Webb Space Telescope
![[_attachments/exam-theory-Q2-italiano_3/exam-theory-Q2-italiano_3_p1_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.2** — Grafico corrente di buio in funzione della temperatura
![[_attachments/exam-theory-Q2-italiano_3/exam-theory-Q2-italiano_3_p2_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.3** — Schema del flusso di energia tra cinque fogli
![[_attachments/exam-theory-Q2-italiano_3/exam-theory-Q2-italiano_3_p3_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.4** — Geometria dei due fogli a distanza d
![[_attachments/exam-theory-Q2-italiano_3/exam-theory-Q2-italiano_3_p4_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.5** — Schema refrigeratore criogenico flusso plug
![[_attachments/exam-theory-Q2-italiano_3/exam-theory-Q2-italiano_3_p5_f5.png]]
<!--fig:end-->

**Topic:** [[Geometric Optics]], [[Thermodynamics]], [[Modern-Quantum Physics]]
**Metodi:** [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.1
**Soluzione:** Soluzioni (PDF)
