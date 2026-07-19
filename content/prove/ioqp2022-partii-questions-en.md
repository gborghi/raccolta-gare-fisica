---
title: IOQP 2022 (Part II)
tipo: prova
tags:
  - graph/prova
---
<div class="atom-reader" data-prova="ioqp2022-partii-questions-en"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="IOQP 2022 (Part II) — Problema 1" data-tags="nazione/india,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/oscillations-e-waves,argomento/onde-e-oscillazioni,object/block,object/spring"></span>

<div class="qlang-switch" data-default="en"></div>



A block of mass $m = 0.1\ \text{kg}$ is attached to a spring (one end fixed to the wall) with spring constant $k = 50\ \text{N m}^{-1}$. The block slides on a rough horizontal table along the x-axis. Assume that both the coefficients of kinetic $(\mu_k)$ and static friction $(\mu_s)$ are same and constant $(\mu_k = \mu_s = \mu = 0.25)$. The block is initially displaced to $x_0 = 0.1\ \text{m}$ from the unstretched position (normal length of the spring, $x = 0$) of the spring and released from rest as shown below. Neglect any air resistance. Take the acceleration $g$ due to gravity to be $10\ \text{m/s}^2$.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
  % ground
  \draw[thick] (-0.2,0) -- (11,0);
  % wall (hatched)
  \draw[thick] (0,0) -- (0,1.4);
  \foreach \y in {0,0.2,...,1.3} {\draw (-0.25,\y) -- (0,\y+0.25);}
  % spring (coil)
  \draw[thick,decorate,decoration={coil,aspect=0.6,segment length=4mm,amplitude=3mm}] (0,0.9) -- (8.4,0.9);
  % connector to block
  \draw[thick] (8.4,0.9) -- (9.0,0.9);
  % block
  \fill[black] (9.0,0.45) rectangle (10.0,1.35);
  % unstretched position (dashed)
  \draw[dashed] (5.2,-0.3) -- (5.2,1.7);
  % x0 arrow
  \draw[->,thick] (5.2,0.25) -- (9.5,0.25);
  \node at (7.4,-0.05) {$x_0$};
  \node at (5.2,2.0) {\small unstretched position};
\end{tikzpicture}
\end{document}
```

(a) [3 marks] How many times $(n)$ will the block cross the unstretched position before coming to rest permanently?

(b) [1 marks] Determine the total distance $D$ covered by the block before coming to rest.

(c) [6 marks] Let us divide one complete oscillation of the block, starting from a fully stretched condition of the spring, into four distinct sections, requiring the following times in order:
(i) $t_1$: time taken for the block to move from fully stretched to the unstretched position,
(ii) $t_2$: time taken for the block to move from the unstretched position to fully compressed position,
(iii) $t_3$: time taken for the block to move from fully compressed to the unstretched position,
(iv) $t_4$: time taken for the block to move from the unstretched position to fully stretched position.
Let the distance covered during the above intervals be $d_1$, $d_2$, $d_3$, and $d_4$, respectively. Also, let $T_1$ and $T_2$ be the time taken to complete the first and the second oscillations, respectively, starting from the initial displacement, $x_0$.
Compare the above times and distances by inserting an appropriate sign (from among $<$, $>$, or $=$ only) between the given quantities in each of the boxes below. Note that you will be penalised for 0.5 marks for giving each incorrect answer in this part. You need not to justify your answer.

| $t_1$ $\square$ $t_2$ | $t_2$ $\square$ $t_3$ | $t_1$ $\square$ $t_3$ |
|---|---|---|
| $d_1$ $\square$ $d_2$ | $d_2$ $\square$ $d_4$ | $T_1$ $\square$ $T_2$ |

(d) [2 marks] Qualitatively plot the displacement $x$ from the unstretched position vs the time $t$.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Block (object)|Block]], [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1tAczdxAgKO81NZFFCBoQ2UIiAUw-lS7r/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1ouGw9_0TeRAUPbrtaEJVyGTqYlt_Smrd/view)


<div class="qlang-split" data-lang="it"></div>

Un blocco di massa $m = 0.1\ \text{kg}$ è attaccato a una molla (una estremità fissata al muro) con costante molla $k = 50\ \text{N m}^{-1}$. Il blocco scivola su una tavolota' orizzontale lungo l'asse x. Supponiamo che sia i coefficienti di attrito cinetico $(\mu_k)$ che statico $(\mu_s)$ siano uguali e costanti $(\mu_k = \mu_s = \mu = 0.25)$. Il blocco viene inizialmente spostato a $x_0 = 0.1\ \text{m}$ dalla posizione non allungata (lunga normale della molla, $x = 0$) della molla e rilasciato dal riposo come mostrato di seguito. Non si deve prendere in considerazione alcuna resistenza all'aria. Prendete l'accelerazione $g$ dovuta alla gravità da $10\ \text{m/s}^2$.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
  % ground
  \draw[thick] (-0.2,0) -- (11,0);
  % wall (hatched)
  \draw[thick] (0,0) -- (0,1.4);
  \foreach \y in {0,0.2,...,1.3} {\draw (-0.25,\y) -- (0,\y+0.25);}
  % spring (coil)
  \draw[thick,decorate,decoration={coil,aspect=0.6,segment length=4mm,amplitude=3mm}] (0,0.9) -- (8.4,0.9);
  % connector to block
  \draw[thick] (8.4,0.9) -- (9.0,0.9);
  % block
  \fill[black] (9.0,0.45) rectangle (10.0,1.35);
  % unstretched position (dashed)
  \draw[dashed] (5.2,-0.3) -- (5.2,1.7);
  % x0 arrow
  \draw[->,thick] (5.2,0.25) -- (9.5,0.25);
  \node at (7.4,-0.05) {$x_0$};
  \node at (5.2,2.0) {\small unstretched position};
\end{tikzpicture}
\end{document}
```

a) [3 punti] Quante volte $(n)$ il blocco attraverserà la posizione non allungata prima di riposare definitivamente?

b) [1 marchio] Determinare la distanza totale $D$ percorsa dal blocco prima di riposare.

(c) [6 punti] Dividiamo una oscillazione completa del blocco, a partire da una condizione completamente estesa della primavera, in quattro sezioni distinte, che richiedono i seguenti tempi in ordine:
(i) $t_1$: tempo necessario per il movimento del blocco dalla posizione completamente allungata alla posizione non allungata;
(ii) $t_2$: tempo necessario per il blocco di spostarsi dalla posizione non allungata alla posizione completamente compressa,
(iii) $t_3$: tempo necessario per il movimento del blocco da posizione completamente compressa a posizione non allungata;
(iv) $t_4$: tempo necessario per il movimento del blocco dalla posizione non allungata alla posizione completamente allungata.
La distanza percorsa durante gli intervalli di cui sopra deve essere rispettivamente $d_1$, $d_2$, $d_3$ e $d_4$. Inoltre, $T_1$ e $T_2$ siano il tempo necessario per completare rispettivamente le prime e le seconde oscillazioni, a partire dal spostamento iniziale, $x_0$.
Confronta i tempi e le distanze di cui sopra inserendo un segno appropriato (solo fra $<$, $>$ o $=$) tra le quantità indicate in ciascuna delle caselle di seguito. Si noti che verrà penalizzato per 0,5 punti per ogni risposta errata in questa parte. Non devi giustificare la tua risposta.

| $t_1$ $\square$ $t_2$ | $t_2$ $\square$ $t_3$ | $t_1$ $\square$ $t_3$ |
|---|---|---|
| $d_1$ $\square$ $d_2$ | $d_2$ $\square$ $d_4$ | $T_1$ $\square$ $T_2$ |

d) [2 punti] Tracciare qualitativamente il spostamento $x$ dalla posizione non allungata rispetto al tempo $t$.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Block (object)|Block]], [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1tAczdxAgKO81NZFFCBoQ2UIiAUw-lS7r/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1ouGw9_0TeRAUPbrtaEJVyGTqYlt_Smrd/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="IOQP 2022 (Part II) — Problema 2" data-tags="nazione/india,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/order-of-magnitude-estimation,argomento/metodi-trasversali"></span>

<div class="qlang-switch" data-default="en"></div>



The first explosion of an atomic bomb was the Trinity test in New Mexico in 1945. This explosion released a very large amount of energy $E$ which created an expanding fireball (known as the Trinity fireball). A snapshot of this fireball taken $0.025\ \text{s}$ after the explosion is shown in the photograph below.

<!--fig:start-->
**Quesito 2**
![[IOQP2022-PartII-Questions-en_p2_f1.png]]
<!--fig:end-->

A scientist, Prof. Geoffrey Taylor, could make an estimate of the energy released by the bomb from an analysis of such photographs. Here we try to follow in his footsteps, with some suitable simplifications.
To begin, we assume that the fireball is spherical in nature. Its radius ($R$) increases with time ($t$) depending on the explosion energy $E$ and the density $\rho$ of the surrounding air (which is taken as constant and uniform).
We are also given a graph of the data obtained by Prof. Taylor, as shown below. However, the axes labels of the graph are missing.

<!--fig:start-->
**Quesito 2**
![[IOQP2022-PartII-Questions-en_p3_f1.png]]
<!--fig:end-->

Given data:
1 kiloton (kt) of TNT = $4.2 \times 10^{12}$ J
Density $\rho$ of air outside the fireball = $1.22\ \text{kg/m}^3$.

(a) [3 marks] What are the quantities represented by the axes of the graph? Also state the respective units in which they are expressed. In the detailed answer sheet, justify your answer.

(b) [4 marks] Find the slope ($s$) of the best fit line shown in the graph. What are the dimensions of the quantity $s$?

(c) [3 marks] From a dimensional analysis based on the above simplified model, make an estimate of the energy $E$ released (in kt of TNT) in the Trinity test.

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1tAczdxAgKO81NZFFCBoQ2UIiAUw-lS7r/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1ouGw9_0TeRAUPbrtaEJVyGTqYlt_Smrd/view)


<div class="qlang-split" data-lang="it"></div>

La prima esplosione di una bomba atomica fu la prova della Trinità nel Nuovo Messico nel 1945. This explosion released a very large amount of energy $E$ which created an expanding fireball (known as the Trinity fireball). Una foto di questa palla di fuoco presa $0.025\ \text{s}$ dopo l'esplosione è mostrata nella foto qui sotto.

<!--fig:start-->
**Quesito 2**
![[IOQP2022-PartII-Questions-en_p2_f1.png]]
<!--fig:end-->

Uno scienziato, il Prof. Geoffrey Taylor, potrebbe fare una stima dell'energia rilasciata dalla bomba da un'analisi di tali fotografie. Qui cerchiamo di seguire le sue orme, con alcune semplificazioni appropriate.
Per cominciare, supponiamo che la palla di fuoco sia di natura sferica. Il suo raggio ($R$) aumenta nel tempo ($t$) a seconda dell'energia di esplosione $E$ e della densità $\rho$ dell'aria circostante (che viene presa come costante e uniforme).
Ci viene inoltre dato un grafico dei dati ottenuti dal Prof. Taylor, come mostrato di seguito. Tuttavia, mancano le etichette degli assi del grafico.

<!--fig:start-->
**Quesito 2**
![[IOQP2022-PartII-Questions-en_p3_f1.png]]
<!--fig:end-->

Dati dati:
1 kiloton (kt) di TNT = $4.2 \times 10^{12}$ J
Densità $\rho$ dell'aria esterna alla palla di fuoco = $1.22\ \text{kg/m}^3$.

(a) Quali sono le quantità rappresentate dagli assi del grafico? Indicare anche le rispettive unità in cui sono espresse. Nella scheda delle risposte dettagliate, giustifica la tua risposta.

b) [4 punti] Trova la pendenza ($s$) della linea di miglior adattamento mostrata nel grafico. Quali sono le dimensioni della quantità $s$?

(c) [3 punti] Basandosi su un'analisi dimensionale basata sul modello semplificato di cui sopra, si deve calcolare l'energia $E$ rilasciata (in kt di TNT) nella prova Trinity.

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1tAczdxAgKO81NZFFCBoQ2UIiAUw-lS7r/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1ouGw9_0TeRAUPbrtaEJVyGTqYlt_Smrd/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="IOQP 2022 (Part II) — Problema 3" data-tags="nazione/india,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/fluid-mechanics,argomento/fluidi,object/bubble"></span>

<div class="qlang-switch" data-default="en"></div>



Consider an air filled spherical balloon comprised of elastic material of surface tension $\gamma = 500\ \text{kg/s}^2$. The pressure outside the balloon is the atmospheric pressure ($P_\text{atm} = 101$ kPa) and the density of air outside is $\rho_\text{atm} = 1.22\ \text{kg/m}^3$.
The balloon starts deflating slowly. Assume that the average velocity of air inside the balloon is negligible, and air leaves the balloon in a streamline fashion. Consider $\gamma$ to be constant throughout, and the air to be incompressible.

(a) [8 marks] Write an expression for the time $t$ required to deflate the balloon through a small opening of cross-sectional area $A$ from an initial radius $R_0$ to a final radius $R$.

(b) [1 marks] Obtain the value of this time for $A = 1 \times 10^{-5}\ \text{m}^2$, $R_0 = 0.15\ \text{m}$, and $R = 0.05\ \text{m}$.

**Topic:** [[Fluid Mechanics]]
**Metodi:** [[Bernoulli's Equation (metodo)|Bernoulli's Equation]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Bubble (object)|Bubble]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1tAczdxAgKO81NZFFCBoQ2UIiAUw-lS7r/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1ouGw9_0TeRAUPbrtaEJVyGTqYlt_Smrd/view)


<div class="qlang-split" data-lang="it"></div>

Si consideri un palloncino sferico riempito di aria composto da materiale elastico di tensione superficiale $\gamma = 500\ \text{kg/s}^2$. La pressione esterna del palloncino è la pressione atmosferica ($P_\text{atm} = 101$ kPa) e la densità dell'aria esterna è $\rho_\text{atm} = 1.22\ \text{kg/m}^3$.
Il pallone inizia a deflazionarsi lentamente. Supponiamo che la velocità media dell'aria all'interno del palloncino sia trascurabile e l'aria esce dal palloncino in modo lineare. Considera che $\gamma$ sia costante per tutto il tempo e che l'aria sia incompressibile.

a) [8 punti] Scrivere un'espressione per il tempo $t$ necessario per deflazionare il palloncino attraverso una piccola apertura di area trasversale $A$ da un raggio iniziale $R_0$ a un raggio finale $R$.

b) [1 marchio] Ottieni il valore di questo tempo per $A = 1 \times 10^{-5}\ \text{m}^2$, $R_0 = 0.15\ \text{m}$ e $R = 0.05\ \text{m}$.

**Topic:** [[Fluid Mechanics]]
**Metodi:** [[Bernoulli's Equation (metodo)|Bernoulli's Equation]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Bubble (object)|Bubble]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1tAczdxAgKO81NZFFCBoQ2UIiAUw-lS7r/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1ouGw9_0TeRAUPbrtaEJVyGTqYlt_Smrd/view)



<span class="atom-split" id="q04" data-atom="q04" data-title="IOQP 2022 (Part II) — Problema 4" data-tags="nazione/india,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/oscillations-e-waves,argomento/onde-e-oscillazioni,object/pendulum"></span>

<div class="qlang-switch" data-default="en"></div>



A student performed an experiment to determine the acceleration due to gravity ($g$) using a simple pendulum which has a spherical bob of diameter $d$ hung with a long string. She varied the length of the string $l$, and measured the period of oscillation $T$ every time. She calculated the value of $g$ from each measurement as shown in the table below.
She noticed that not only was the average value of $g$ smaller than the expected value, each one of the measurements had yielded a value smaller than the true value.
Next, she plotted a graph between $T^2$ and $l$ from the same data, and obtained the value of $g = 981\ \text{cm/s}^2$ from the slope of the best fit line.

| $l$ (in cm) | $T$ (in s) | $g$ (in cm/s$^2$) |
|---|---|---|
| 20 | 0.93 | 912 |
| 40 | 1.29 | 948 |
| 60 | 1.58 | 948 |
| 80 | 1.81 | 963 |
| 100 | 2.02 | 967 |
| Average $g$ | | 947 |

<!--fig:start-->
**Quesito 4**
![[IOQP2022-PartII-Questions-en_p4_f1.png]]
<!--fig:end-->

(a) [3 marks] What do you think might be the main cause for the consistently low values of $g$ that she obtained from each of her measurements?

(b) [4 marks] Explain in detail why she still obtained a correct value of $g$ from the slope of the graph plotted from the same data.

Assume that the instruments of measuring time and length were accurate enough, and all the measurements of the stated quantities were correct within the accuracy of the instruments. It is verified that the graph and the linear best fit were correctly plotted, and all numerical calculations in the above are correct. Note that you are not expected to plot any graph (no graph paper is provided to you).

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Pendulum (object)|Pendulum]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1tAczdxAgKO81NZFFCBoQ2UIiAUw-lS7r/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1ouGw9_0TeRAUPbrtaEJVyGTqYlt_Smrd/view)


<div class="qlang-split" data-lang="it"></div>

Uno studente ha eseguito un esperimento per determinare l'accelerazione dovuta alla gravità ($g$) utilizzando un semplice pendolo che ha un bobino sferica di diametro $d$ appeso con una lunga corda. Variava la lunghezza della corda $l$, e misurò il periodo di oscillazione $T$ ogni volta. Ha calcolato il valore di $g$ da ciascuna misurazione come mostrato nella tabella seguente.
Ha notato che non solo il valore medio di $g$ era inferiore al valore previsto, ma che ciascuna delle misurazioni aveva prodotto un valore inferiore al valore reale.
Successivamente, ha tracciato un grafico tra $T^2$ e $l$ dai medesimi dati, ottenendo il valore di $g = 981\ \text{cm/s}^2$ dalla pendenza della linea di miglior adattamento.

| $l$ (in cm) | $T$ (in s) | $g$ (in cm/s$^2$) |
|---|---|---|
| 20 | 0.93 | 912 |
| 40 | 1.29 | 948 |
| 60 | 1.58 | 948 |
| 80 | 1.81 | 963 |
| 100 | 2.02 | 967 |
| Average $g$ | | 947 |

<!--fig:start-->
**Quesito 4**
![[IOQP2022-PartII-Questions-en_p4_f1.png]]
<!--fig:end-->

(a) [3 punti] Qual è la causa principale per cui le sue misure hanno ottenuto valori costantemente bassi di $g$?

b) [4 punti] Spiega in dettaglio perché ha ottenuto un valore corretto di $g$ dalla pendenza del grafico tracciato dagli stessi dati.

Supponiamo che gli strumenti di misurazione del tempo e della lunghezza siano stati sufficientemente precisi e che tutte le misurazioni delle quantità indicate siano state corrette nell'ambito della precisione degli strumenti. Si verifica che il grafico e il miglior adattamento lineare siano stati tracciati correttamente e che tutti i calcoli numerici di cui sopra siano corretti. Si noti che non si prevede che si faccia un grafico (non si fornisce carta grafica).

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Pendulum (object)|Pendulum]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1tAczdxAgKO81NZFFCBoQ2UIiAUw-lS7r/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1ouGw9_0TeRAUPbrtaEJVyGTqYlt_Smrd/view)



<span class="atom-split" id="q05" data-atom="q05" data-title="IOQP 2022 (Part II) — Problema 5" data-tags="nazione/india,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/circuits,argomento/elettromagnetismo,object/resistor,object/battery"></span>

<div class="qlang-switch" data-default="en"></div>



[12 marks] A circuit consists of an emf source and five resistors with unknown resistances. When an ideal ammeter is connected between points 1 and 2, its reading is $I_A$. If instead a resistor $R$ is connected to the same two points, the current through that resistor is $I_R$. If instead an ideal voltmeter is connected between points 1 and 2, its reading is $V$. Obtain $V$ in terms of $I_A$, $R$ and $I_R$ only.

<!--fig:start-->
**Quesito 5**
![[IOQP2022-PartII-Questions-en_p4_f2.png]]
<!--fig:end-->

**Topic:** [[Circuits]]
**Metodi:** [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Resistor (object)|Resistor]], [[Battery (object)|Battery]]
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1tAczdxAgKO81NZFFCBoQ2UIiAUw-lS7r/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1ouGw9_0TeRAUPbrtaEJVyGTqYlt_Smrd/view)


<div class="qlang-split" data-lang="it"></div>

Un circuito è composto da una fonte di emf e da cinque resistenti con resistenze sconosciute. Quando un ammetro ideale è collegato tra i punti 1 e 2, la lettura è $I_A$. Se invece una resistenza $R$ è collegata agli stessi due punti, la corrente attraverso quella resistenza è $I_R$. Se invece un voltmeter ideale è collegato tra i punti 1 e 2, la lettura è $V$. Ottenere $V$ in termini di $I_A$, $R$ e $I_R$ solo.

<!--fig:start-->
**Quesito 5**
![[IOQP2022-PartII-Questions-en_p4_f2.png]]
<!--fig:end-->

**Topic:** [[Circuits]]
**Metodi:** [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Resistor (object)|Resistor]], [[Battery (object)|Battery]]
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1tAczdxAgKO81NZFFCBoQ2UIiAUw-lS7r/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1ouGw9_0TeRAUPbrtaEJVyGTqYlt_Smrd/view)
