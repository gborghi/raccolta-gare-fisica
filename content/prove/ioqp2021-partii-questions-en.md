---
title: IOQP 2021 (Part II)
tipo: prova
tags:
  - graph/prova
---
<div class="atom-reader" data-prova="ioqp2021-partii-questions-en"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="IOQP 2021 (Part II) — Problema 1" data-tags="nazione/india,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/circuits,argomento/elettromagnetismo,object/resistor,object/battery,object/switch,object/galvanometer"></span>

<div class="qlang-switch" data-default="en"></div>



The ammeter-voltmeter method is widely used for measuring electrical resistances in the physics laboratory. In this method, the resistance $R$ is always derived from the readings $V$ and $I$ from a voltmeter and an ammeter respectively, using Ohm's law: $R = V/I$. While using this method, it is assumed that the ammeter and voltmeter used in the setup are ideal. In this problem, we will find the pitfalls of this assumption and devise a new setup with a better performance.

The standard ammeter-voltmeter setup consists of a DC voltage source ($\varepsilon$) maintained at a constant voltage, a protection resistance ($R_p$), an ammeter (A), and a voltmeter (V). The unknown internal resistances of the ammeter and the voltmeter are $R_A$ and $R_V$, respectively. Also, $R_V \gg R_A$. We aim to measure the true value $R$ of an unknown resistor.

We consider a two commonly used circuit configurations (1) and (2) indicated by the two possible positions of the switch in the circuit diagram shown below. Let the measured values of the resistance $R$ be $R_{m1}$ and $R_{m2}$ in the setups (1) and (2), respectively. The relative error, $\Delta$, is defined as the ratio of the absolute error of the measurement to the actual value: $\Delta = (R_m - R)/R$.

<!--fig:start-->
**Quesito 1**
![[IOQP2021-PartII-Questions-en_p2_f1.png]]
<!--fig:end-->

(a) **[2 marks]** Obtain the relative errors in the measurements ($\Delta_1$ and $\Delta_2$) for each of the above configurations.

(b) **[4 marks]** Using exactly the same circuit elements, can you suggest a step by step procedure, with the necessary circuit diagram(s), to measure the true value of the resistance $R$, regardless of the values of the internal resistances of the ammeter and the voltmeter? You may use the measurements made in part (a).

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Resistor (object)|Resistor]], [[Battery (object)|Battery]], [[Switch (object)|Switch]], [[Galvanometer (object)|Galvanometer]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1oIzGpGBHt2T8fDesIGWz1ZL8gSOUcL4X/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1D0cggRBYe6DfEj5kL0l6eG7CWh6VggD4/view)


<div class="qlang-split" data-lang="it"></div>

Il metodo ammetro-voltmetro è ampiamente usato per misurare le resistenze elettriche nel laboratorio di fisica. In questo metodo, la resistenza $R$ viene sempre derivata dalle letture $V$ e $I$ di un voltmeter e di un ammeter rispettivamente, utilizzando la legge di Ohm: $R = V/I$. Durante l'uso di questo metodo si presume che l'ampilometro e il voltometro utilizzati nella configurazione siano ideali. In questo problema troveremo le insidie di questa ipotesi e concebiremo una nuova configurazione con prestazioni migliori.

L'impianto standard di ammetro-voltmetro consiste in una fonte di tensione di corrente continua ($\varepsilon$) mantenuta a tensione costante, una resistenza di protezione ($R_p$), un ammetro (A) e un voltmetro (V). Le resistenze interne sconosciute dell'ampilometro e del voltometro sono rispettivamente $R_A$ e $R_V$. Inoltre, $R_V \gg R_A$. Il nostro obiettivo è misurare il valore reale $R$ di una resistenza sconosciuta.

Consideramo due configurazioni di circuito comunemente utilizzate (1) e (2) indicate dalle due posizioni possibili dello switch nel diagramma di circuito riportato di seguito. I valori misurati della resistenza $R$ devono essere $R_{m1}$ e $R_{m2}$ rispettivamente nelle configurazioni (1) e (2). L'errore relativo, $\Delta$, è definito come il rapporto tra l'errore assoluto della misurazione e il valore effettivo: $\Delta = (R_m - R)/R$.

<!--fig:start-->
**Quesito 1**
![[IOQP2021-PartII-Questions-en_p2_f1.png]]
<!--fig:end-->

(a) **[2 segni]** Ottenere gli errori relativi delle misurazioni ($\Delta_1$ e $\Delta_2$) per ciascuna delle configurazioni sopra indicate.

b) **[4 punti]** Usando esattamente gli stessi elementi del circuito, si può suggerire una procedura passo dopo passo, con i diagrammi di circuito necessari, per misurare il valore reale della resistenza $R$, indipendentemente dai valori delle resistenze interne dell'ampilometro e del voltometro? È possibile utilizzare le misure di cui alla parte (a).

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Resistor (object)|Resistor]], [[Battery (object)|Battery]], [[Switch (object)|Switch]], [[Galvanometer (object)|Galvanometer]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1oIzGpGBHt2T8fDesIGWz1ZL8gSOUcL4X/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1D0cggRBYe6DfEj5kL0l6eG7CWh6VggD4/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="IOQP 2021 (Part II) — Problema 2" data-tags="nazione/india,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/thermodynamics,argomento/termodinamica,object/gas"></span>

<div class="qlang-switch" data-default="en"></div>



**[8 marks]** Prof. Saha gave the following problem to four students.

In this problem work done by a system on its surroundings is taken as positive. A non-ideal gas follows the Van der Waals equation of state

$$\left(P + \frac{n^2 a}{V^2}\right)(V - nb) = nRT$$

where $P$, $V$, and $T$ denote the pressure, volume, and temperature, respectively; $n$ is the number of moles; $R$ is the universal gas constant and $a$, $b$ are dimensional positive constants. This gas expands adiabatically from an initial temperature $T_i$ and volume $V_i$ to a final temperature $T_f$ and volume $V_f$. The adiabatic process is described by an equation of the form $f(P, V; n, a, b, \alpha) = $ constant, where $\alpha$ is a dimensionless number which is greater than 1. It is given that $\alpha \to \gamma$ in the ideal gas limit, where $\gamma$ is the adiabatic exponent. What is the work ($W$) done by the gas in the process?

The four students solved the problem independently and gave four different answers. Their answers were:

(a) $W = \dfrac{nR}{\alpha - 1}(T_i - T_f) + n^2 a\,(V_f^{-1} - V_i^{-1})$

(b) $W = \dfrac{nR}{\alpha - 1}(T_f - T_i) + n^2 a\,(V_f^{-1} - V_i^{-1})$

(c) $W = \dfrac{nR}{\alpha - 1}(T_i - T_f) + n^2 a\,(V_f^{\alpha-1} - V_i^{\alpha-1})$

(d) $W = \dfrac{nR}{\alpha - 1}(T_i - T_f)\left[1 - \left(\dfrac{V_f - nb}{V_i - nb}\right)^{\alpha-1}\right]$

Now, Prof. Saha had actually provided the exact expression of $f(P, V; n, a, b, \alpha)$ to the students, but could not remember it during evaluation. Still, he could determine that some or all of the four answers above must be incorrect, based on general physical arguments alone.

Consider each of the four answers and give at least one reason for each of them showing why it is wrong, or possibly correct. *Note that you are not required to give a correct expression for $W$ or a detailed derivation for it in this question.*

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Gas (object)|Gas]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1oIzGpGBHt2T8fDesIGWz1ZL8gSOUcL4X/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1D0cggRBYe6DfEj5kL0l6eG7CWh6VggD4/view)


<div class="qlang-split" data-lang="it"></div>

** [8 punti] ** Prof. Saha ha dato il seguente problema a quattro studenti.

In questo problema il lavoro svolto da un sistema sul suo ambiente è considerato positivo. Un gas non ideale segue l'equazione di stato di Van der Waals

$$\left(P + \frac{n^2 a}{V^2}\right)(V - nb) = nRT$$

dove $P$, $V$ e $T$ indicano rispettivamente la pressione, il volume e la temperatura; $n$ è il numero di molli; $R$ è la costante universale del gas e $a$, $b$ sono costanti positive dimensionali. Questo gas si espandono adiabaticamente da una temperatura iniziale $T_i$ e di un volume $V_i$ a una temperatura finale $T_f$ e di un volume $V_f$. Il processo adiabatico è descritto con un'equazione della costante $f(P, V; n, a, b, \alpha) = $, dove $\alpha$ è un numero dimensionato superiore a 1. Si dà che $\alpha \to \gamma$ nel limite di gas ideale, dove $\gamma$ è l'esponente adiabatico. Qual è il lavoro ($W$) svolto dal gas nel processo?

I quattro studenti risolverono il problema in modo indipendente e dicevano quattro risposte diverse. Le loro risposte erano:

(a) $W = \dfrac{nR}{\alpha - 1}(T_i - T_f) + n^2 a\,(V_f^{-1} - V_i^{-1})$

(b) $W = \dfrac{nR}{\alpha - 1}(T_f - T_i) + n^2 a\,(V_f^{-1} - V_i^{-1})$

(c) $W = \dfrac{nR}{\alpha - 1}(T_i - T_f) + n^2 a\,(V_f^{\alpha-1} - V_i^{\alpha-1})$

(d) $W = \dfrac{nR}{\alpha - 1}(T_i - T_f)\left[1 - \left(\dfrac{V_f - nb}{V_i - nb}\right)^{\alpha-1}\right]$

Ora, Prof. Saha aveva effettivamente fornito l'espressione esatta di $f(P, V; n, a, b, \alpha)$ agli studenti, ma non poteva ricordarla durante la valutazione. Tuttavia, egli poteva determinare che alcune o tutte le quattro risposte sopra devono essere errate, basandosi solo su argomenti fisici generali.

Considerate ciascuno dei quattro risposte e date almeno una ragione per ciascuna di esse che dimostra perché è sbagliato, o forse corretto. *Nota che non è necessario fornire una espressione corretta per $W$ o una derivazione dettagliata per esso in questa domanda.*

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Gas (object)|Gas]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1oIzGpGBHt2T8fDesIGWz1ZL8gSOUcL4X/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1D0cggRBYe6DfEj5kL0l6eG7CWh6VggD4/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="IOQP 2021 (Part II) — Problema 3" data-tags="nazione/india,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/bi,topic/electromagnetism,topic/modern-quantum-physics,argomento/elettromagnetismo,object/electron,object/nucleus"></span>

<div class="qlang-switch" data-default="en"></div>



Consider an electron (mass $m$, magnitude of charge $e$) moving initially around a nucleus of charge $2e$ in a circular orbit of radius $10^{-10}$ m. In this problem we use SI units throughout and neglect all relativistic effects.

(a) **[2 marks]** Obtain the expression for the frequency, $f$, of the electron in the circular orbit (numerical value is not required).

From classical electrodynamics, we know that an accelerated electron radiates energy. The expression for the power $P$ of this radiation is given by

$$P = K\,\varepsilon_0^{w}\, e^{x}\, a^{y}\, c^{z}$$

where $a$ is the acceleration, $c$ is the speed of light, $\varepsilon_0$ is the permittivity of free space, and $K$ is a dimensionless constant.

(b) **[2 marks]** Obtain $\{w, x, y, z\}$ using dimensional analysis.

Due to the loss of energy through radiation, the electron does not remain in the circular orbit, and gradually spirals into the nucleus. Take the constant $K$ to be $5.31 \times 10^{-2}$.

(c) **[5 marks]** Let $T$ be the time it takes for the electron to reach the nucleus. Calculate $T$ if the radius of the nucleus is $10^{-14}$ m.

**Topic:** [[Electromagnetism]], [[Modern-Quantum Physics]]
**Metodi:** [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Electron (object)|Electron]], [[Nucleus (object)|Nucleus]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1oIzGpGBHt2T8fDesIGWz1ZL8gSOUcL4X/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1D0cggRBYe6DfEj5kL0l6eG7CWh6VggD4/view)


<div class="qlang-split" data-lang="it"></div>

Si consideri un elettrone (massa $m$, magnitudine di carica $e$) che si muove inizialmente intorno a un nucleo di carica $2e$ in un'orbita circolare di raggio $10^{-10}$ m. In questo problema usiamo unità SI in tutto e trascuriamo tutti gli effetti relativistici.

(a) **[2 segni]** Ottenere l'espressione per la frequenza, $f$, dell'elettrone nell'orbita circolare (valore numerico non è richiesto).

Dalla elettrodinamica classica sappiamo che un elettrone accelerato irradia energia. L'espressione per la potenza $P$ di questa radiazione è data da:

$$P = K\,\varepsilon_0^{w}\, e^{x}\, a^{y}\, c^{z}$$

in cui $a$ è l'accelerazione, $c$ è la velocità della luce, $\varepsilon_0$ è la permissività dello spazio libero e $K$ è una costante dimensionaria.

b) **[2 punti]** Ottenere $\{w, x, y, z\}$ utilizzando l'analisi dimensionale.

A causa della perdita di energia attraverso la radiazione, l'elettrone non rimane nell'orbita circolare e si spira gradualmente nel nucleo. Prendi la costante $K$ per essere $5.31 \times 10^{-2}$.

(c) **[5 segni]** $T$ sia il tempo necessario per raggiungere il nucleo dell'elettrone. Calcolare $T$ se il raggio del nucleo è $10^{-14}$ m.

**Topic:** [[Electromagnetism]], [[Modern-Quantum Physics]]
**Metodi:** [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Electron (object)|Electron]], [[Nucleus (object)|Nucleus]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1oIzGpGBHt2T8fDesIGWz1ZL8gSOUcL4X/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1D0cggRBYe6DfEj5kL0l6eG7CWh6VggD4/view)



<span class="atom-split" id="q04" data-atom="q04" data-title="IOQP 2021 (Part II) — Problema 4" data-tags="nazione/india,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/geometric-optics,argomento/ottica,object/lens"></span>

<div class="qlang-switch" data-default="en"></div>



**[12 marks]** Three thin convex lenses $L_1$, $L_2$, and $L_3$ with focal lengths $f_1$, $f_2$, and $f_3$, respectively, are arranged in order ($L_1$ followed by $L_2$, followed by $L_3$ from left to right) with their principal axes coincident. The distance $d_{12}$ between $L_1$ and $L_2$, and the distance $d_{23}$ between $L_2$ and $L_3$ are such that $d_{12} + d_{23} \geq f_1 + 4f_2 + f_3$. If a parallel beam of light incident on $L_1$ at a small angle to the principal axis remains parallel to itself when leaving the system after passing through $L_2$ and $L_3$, draw the appropriate ray diagram and determine $d_{12}$ and $d_{23}$ in terms of $f_1$, $f_2$, and $f_3$.

**Topic:** [[Geometric Optics]]
**Metodi:** [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]], [[Ray Tracing (metodo)|Ray Tracing]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Lens (object)|Lens]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1oIzGpGBHt2T8fDesIGWz1ZL8gSOUcL4X/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1D0cggRBYe6DfEj5kL0l6eG7CWh6VggD4/view)


<div class="qlang-split" data-lang="it"></div>

**[12 segni]** Tre lenti convex sottili $L_1$, $L_2$ e $L_3$ con lunghezze focali $f_1$, $f_2$ e $f_3$, rispettivamente, sono disposte in ordine ($L_1$ seguito da $L_2$, seguito da $L_3$ da sinistra a destra) con la coincidenza dei loro assi principali. La distanza $d_{12}$ tra $L_1$ e $L_2$ e la distanza $d_{23}$ tra $L_2$ e $L_3$ sono tali da $d_{12} + d_{23} \geq f_1 + 4f_2 + f_3$. Se un fascio di luce parallelo inciso su $L_1$ ad un angolo piccolo rispetto all'asse principale rimane parallelo a se stesso quando esce dal sistema dopo aver attraversato $L_2$ e $L_3$, disegnare il diagramma di raggi appropriato e determinare $d_{12}$ e $d_{23}$ in termini di $f_1$, $f_2$ e $f_3$.

**Topic:** [[Geometric Optics]]
**Metodi:** [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]], [[Ray Tracing (metodo)|Ray Tracing]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Lens (object)|Lens]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1oIzGpGBHt2T8fDesIGWz1ZL8gSOUcL4X/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1D0cggRBYe6DfEj5kL0l6eG7CWh6VggD4/view)



<span class="atom-split" id="q05" data-atom="q05" data-title="IOQP 2021 (Part II) — Problema 5" data-tags="nazione/india,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/bi,topic/newtonian-mechanics,topic/rotational-dynamics,argomento/meccanica,object/disk,object/ball"></span>

<div class="qlang-switch" data-default="en"></div>



Two friends, Amina (A) and Beena (B), are sitting at diametrically opposite points of a merry-go-round (taken as a circular disk in the horizontal plane) of radius $R$ that is rotating at constant angular speed $\omega$ in the anticlockwise direction, when viewed from the top (see figure below).

When Amina is at the position A (as shown in the figure), she throws a ball with velocity $\vec{u}$ (relative to the merry-go-round) in such a manner that Beena catches it when she reaches the position C ($\angle BAC = \alpha$). Here $\vec{u}$ makes an angle $\theta$ with respect to the horizontal, and $\phi$ is the angle made by the horizontal projection of $\vec{u}$ with respect to the line AB. Neglect air resistance, friction, and the effect of throwing or catching the ball on the speed of the merry-go-round.

<!--fig:start-->
**Quesito 5**
![[IOQP2021-PartII-Questions-en_p3_f1.png]]
<!--fig:end-->

(a) **[6 marks]** Determine $u$, $\theta$ and $\phi$, in terms of $R$, $\omega$, $\alpha$, and other relevant quantities.

(b) **[3 marks]** If Amina throws the ball with $\phi = 60^\circ$, and appropriate values of $\theta$ and $u$ such that Beena can catch it, what is the magnitude of the displacement, $s$, of the ball when it is caught by Beena? For this part only, take $R = 1.5$ m, and it is enough to state your answer within a range of 0.5 m.

(c) **[0.5 marks]** Determine the speed of throwing $u_D$ if Beena catches the ball at the point D ($\angle BOD = 90^\circ$), instead of C.

(d) **[3 marks]** What should be the angular speed $\omega_m$ of the merry-go-round for which the speed of throwing $u_D$ will be minimum for Beena to catch the ball at the position D? What is this minimum speed of throwing $u_m$?

(e) **[2.5 marks]** Consider the case when Amina throws the ball when she is at A, and catches it herself when she reaches the point B (Beena is not involved in this case). Take the angular speed of the merry-go-round to be $\omega = \sqrt{g/R}$. Find $u$, $\theta$ and $\phi$ in this case.

**Topic:** [[Newtonian Mechanics]], [[Rotational Dynamics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Disk (object)|Disk]], [[Ball (object)|Ball]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1oIzGpGBHt2T8fDesIGWz1ZL8gSOUcL4X/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1D0cggRBYe6DfEj5kL0l6eG7CWh6VggD4/view)


<div class="qlang-split" data-lang="it"></div>

Due amiche, Amina (A) e Beena (B), si trovano in punti diametralmente opposti di un merry-go-round (preso come un disco circolare nel piano orizzontale) di raggio $R$ che ruota a velocità angolare costante $\omega$ nella direzione anticlockwise, quando visto dall'alto (vedi figura sotto).

Quando Amina è in posizione A (come mostrato nella figura), lancia una palla con velocità $\vec{u}$ (relativa al merry-go-round) in modo tale che Beena la cattura quando raggiunge la posizione C ($\angle BAC = \alpha$). Qui $\vec{u}$ fa un angolo $\theta$ rispetto all'orizzontale, e $\phi$ è l'angolo fatto dalla proiezione orizzontale di $\vec{u}$ rispetto alla linea AB. Trascurare la resistenza dell'aria, l'attrito e l'effetto di lanciare o catturare la palla sulla velocità del merry-go-round.

<!--fig:start-->
**Quesito 5**
![[IOQP2021-PartII-Questions-en_p3_f1.png]]
<!--fig:end-->

a) **[6 marchi]** Determina $u$, $\theta$ e $\phi$, in termini di $R$, $\omega$, $\alpha$ e di altri quantitativi pertinenti.

b) **[3 punti] ** Se Amina lancia la palla con $\phi = 60^\circ$ e i valori appropriati di $\theta$ e $u$ in modo tale che Beena possa catturarla, qual è la magnitudine del spostamento, $s$, della palla quando viene catturata da Beena? Solo per questa parte, si deve prendere $R = 1.5$ m, e basta indicare la risposta entro un intervallo di 0,5 m.

c) **[0,5 marchi]** Determina la velocità di lancio $u_D$ se Beena cattura la palla al punto D ($\angle BOD = 90^\circ$), invece di C.

(d) **[3 punti] ** Qual è la velocità angolare $\omega_m$ del merry-go-round per il quale la velocità di lancio $u_D$ sarà minima per Beena per catturare la palla nella posizione D? Qual è la velocità minima di lancio $u_m$?

(e) **[2,5 punti]** Si consideri il caso in cui Amina lancia la palla quando è in A, e la cattura da sola quando raggiunge il punto B (Beena non è coinvolta in questo caso). Prendete la velocità angolare del merry-go-round da $\omega = \sqrt{g/R}$. In questo caso, si trovano $u$, $\theta$ e $\phi$.

**Topic:** [[Newtonian Mechanics]], [[Rotational Dynamics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Disk (object)|Disk]], [[Ball (object)|Ball]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1oIzGpGBHt2T8fDesIGWz1ZL8gSOUcL4X/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1D0cggRBYe6DfEj5kL0l6eG7CWh6VggD4/view)
