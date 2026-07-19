---
title: OII na Teorica
tipo: prova
tags:
  - graph/prova
---
<div class="atom-reader" data-prova="exam-theory-q1-italian"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="OII na Teorica — Problema 1" data-tags="nazione/italia,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/multi,topic/gravitation,topic/astrophysics,topic/special-relativity,argomento/meccanica,object/black-hole,object/star"></span>

<div class="qlang-switch" data-default="it"></div>



**LIGO-GW150914 (10 punti)**

Nel 2015 l'osservatorio di onde gravitazionali LIGO rivelò, per la prima volta, il passaggio di onde gravitazionali (GW, Gravitational Waves) attraverso la Terra. Questo evento, denominato GW150914, è stato innescato dalle onde prodotte da due buchi neri in moto su orbite quasi circolari. In questo problema dovrai stimare alcuni parametri fisici del sistema, basandoti sulle proprietà del segnale registrato.

Parte A: Orbite (stazionarie) newtoniane (3.0 punti)

A.1 Considera un sistema di due stelle di massa rispettivamente $M_1$, $M_2$, nelle posizioni $\vec{r}_1$, $\vec{r}_2$, rispetto al centro di massa del sistema, cioè:
$$M_1\vec{r}_1 + M_2\vec{r}_2 = 0 . \quad (1)$$
Le stelle sono isolate dal resto dell'universo e si muovono a basse velocità (cosicché è applicabile, in prima approssimazione, la meccanica newtoniana). Usando le leggi di Newton, l'accelerazione della massa $M_1$ è
$$\frac{d^2\vec{r}_1}{dt^2} = -\alpha\frac{\vec{r}_1}{r_1^n} , \quad (2)$$
dove $r_1 = |\vec{r}_1|$, $r_2 = |\vec{r}_2|$. Trova $n\in\mathbb{N}$ e $\alpha = \alpha(G, M_1, M_2)$, dove $G$ è la costante di gravitazione [$G\simeq6.67 \times 10^{-11}$, in unità SI].

1.0pt

A.2 L'energia totale del sistema delle due masse in orbita circolare può essere espressa come:
$$E = A(\mu, \Omega, L) - G\frac{M\mu}{L} , \quad (3)$$
dove
$$\mu \equiv \frac{M_1M_2}{M_1 + M_2} , \qquad M \equiv M_1 + M_2 , \quad (4)$$
sono la massa ridotta e la massa totale del sistema, $\Omega$ è la velocità angolare e $L$ è la distanza tra le due stelle $L = r_1 + r_2$. Ricava la forma esplicita del termine $A(\mu, \Omega, L)$.

1.0pt

A.3 L'equazione 3 può essere scritta nella forma $E = \beta G\frac{M\mu}{L}$. Ricava il numero $\beta$.

1.0pt

Parte B. Introduzione della dissipazione relativistica (7.0 punti)

La corretta teoria della gravità, la Relatività Generale, fu formulata da Einstein nel 1915 e prevede che la gravità viaggi alla velocità della luce. I messaggeri che portano l'informazione sull'interazione vengono chiamati onde gravitazionali (GW). Le GW vengono emesse ogniqualvolta le masse vengono accelerate, cosicché il sistema di masse perde energia.

Considera un sistema di due particelle puntiformi, isolate dal resto dell'Universo. Einstein ha dimostrato che per velocità sufficientemente basse le GW emesse: 1) hanno una frequenza doppia di quella orbitale; 2) possono essere caratterizzate da una luminosità (potenza emessa) $\mathcal{P}$ che è descritta dalla formula del quadrupolo di Einstein
$$\mathcal{P} = \frac{G}{5c^5}\sum_{i=1}^{3}\sum_{j=1}^{3}\left(\frac{d^3Q_{ij}}{dt^3}\right)\left(\frac{d^3Q_{ij}}{dt^3}\right) . \quad (5)$$
Qui $c$ è la velocità della luce $c\simeq3 \times 10^8$ m/s. Per un sistema di due particelle puntiformi che orbitano nel piano $x-y$, le $Q_{ij}$ sono date dalla tabella seguente ($i, j$ sono gli indici di riga/colonna)
$$Q_{11} = \sum_{A=1}^{2}\frac{M_A}{3}(2x_A^2 - y_A^2) , \qquad Q_{22} = \sum_{A=1}^{2}\frac{M_A}{3}(2y_A^2 - x_A^2) , \qquad Q_{33} = -\sum_{A=1}^{2}\frac{M_A}{3}(x_A^2 + y_A^2) , \quad (6)$$
$$Q_{12} = Q_{21} = \sum_{A=1}^{2}M_A x_A y_A , \quad (7)$$
e $Q_{ij} = 0$ in tutti gli altri casi. Qui, $(x_A, y_A)$ è la posizione della massa A nel riferimento del centro di massa.

B.1 Per le orbite circolari descritte in A.2 le componenti $Q_{ij}$ possono essere espresse in funzione del tempo $t$ come:
$$Q_{ii} = \frac{\mu L^2}{2}(a_i + b_i\cos kt) , \qquad Q_{ij}^{i\neq j} = \frac{\mu L^2}{2}c_{ij}\sin kt . \quad (8)$$
Determina $k$ in funzione di $\Omega$ e dei valori numerici delle costanti $a_i, b_i, c_{ij}$.

1.0pt

B.2 Calcola la luminosità $\mathcal{P}$ emessa sotto forma di onde gravitazionali per questo sistema e ricava:
$$\mathcal{P} = \xi\frac{G}{c^5}\mu^2 L^4\Omega^6 . \quad (9)$$
Qual è il numero $\xi$? [Se non riesci a ottenere $\xi$, nel seguito usa $\xi = 6.4$].

1.0pt

B.3 In assenza di emissione di GW, le due masse continuano a orbitare indefinitamente su orbite circolari fisse. L'emissione di GW provoca però una perdita di energia da parte del sistema e fa in modo che esso evolva lentamente verso orbite circolari sempre più piccole.

Dimostra che la velocità di cambiamento della velocità angolare orbitale, $\frac{d\Omega}{dt}$, può essere scritta nella forma
$$\left(\frac{d\Omega}{dt}\right)^3 = (3\xi)^3\frac{\Omega^{11}}{c^{15}}(GM_c)^5 , \quad (10)$$
dove $M_c$ è chiamata chirp mass. Ricava $M_c$ in funzione di $M$ e $\mu$. Questa massa determina l'aumento di frequenza durante il decadimento orbitale. [Il nome "chirp" (cinguettio) deriva dal tono alto e a frequenza crescente del suono prodotto da piccoli uccelli].

1.0pt

B.4 Usando l'informazione fornita sopra, esprimi la velocità angolare orbitale $\Omega$ in funzione della frequenza $f_\text{GW}$ delle GW. Sapendo che, per ogni funzione liscia $F(t)$ e per $a\neq1$,
$$\frac{dF(t)}{dt} = \chi F(t)^a \quad\Rightarrow\quad F(t)^{1-a} = \chi(1-a)(t-t_0) , \quad (11)$$
dove $\chi$ è una costante e $t_0$ è una costante di integrazione, dimostra che la (10) implica che la frequenza delle GW è
$$f_\text{GW}^{-8/3} = 8\pi^{8/3}\xi\left(\frac{GM_c}{c^3}\right)^{(2/3)+p}(t_0-t)^{2-p} \quad (12)$$
e determina la costante $p$.

2.0pt

Il 14 settembre 2015, l'evento GW 150914 è stato registrato dai rivelatori LIGO, consistenti in due bracci disposti a forma di L, ognuno lungo 4 km. La variazione relativa della lunghezza di questi bracci è mostrata nella Fig. 1. I bracci del rivelatore rispondono linearmente al passaggio di un'onda gravitazionale, e le variazioni della loro lunghezza hanno lo stesso andamento dell'onda. Quest'onda è stata prodotta da due buchi neri su orbite quasi circolari; la perdita di energia per l'emissione di onde gravitazionali ha provocato una contrazione delle orbite cosicché i due buchi neri alla fine sono entrati in collisione. L'istante in cui questo è avvenuto corrisponde, grosso modo, al picco del segnale dopo il punto D nella Fig. 1.

Figura 1. Deformazione (variazione relativa della lunghezza) di ciascun braccio nel rivelatore H1 di LIGO. Sulle ascisse è riportato il tempo, e i punti A, B, C e D corrispondono rispettivamente a $t = 0.00, 0.009, 0.034, 0.040$ secondi.

B.5 Dalla figura, stima il valore di $f_\text{GW}(t)$ per
$$t_\text{AB} = \frac{t_B + t_A}{2} \quad\text{and}\quad t_\text{CD} = \frac{t_D + t_C}{2} . \quad (13)$$
Assumendo che la (12) sia valida durante l'intero processo che porta alla collisione (il che a rigore non è del tutto vero) e che i due oggetti abbiano uguale massa, fornisci una stima per la chirp mass $M_c$ e per la massa totale del sistema, in unità di masse solari $M_\odot\simeq2 \times 10^{30}$ kg.

1.0pt

B.6 Fornisci una stima per la minima separazione orbitale tra i due oggetti immediatamente prima della collisione, usando i dati orbitali all'istante $t_\text{CD}$. Fornisci quindi una stima per la dimensione massima di ciascun oggetto: $R_\text{max}$. Calcola $R_\odot/R_\text{max}$ per confrontare questa dimensione con il raggio del nostro Sole, $R_\odot\simeq7 \times 10^5$ km. Fornisci anche una stima della velocità lineare orbitale nello stesso istante, $v_\text{col}$, e confrontala con la velocità della luce calcolando il rapporto $v_\text{col}/c$.

1.0pt

Concludi che questi oggetti sono estremamente compatti e si muovono davvero molto velocemente!

<!--fig:start-->
**p.3** — Forma d'onda gravitazionale GW150914 ai due rivelatori
![[_attachments/exam-theory-Q1-italian/exam-theory-Q1-italian_p3_f1.png]]
<!--fig:end-->

**Topic:** [[Gravitation]], [[Astrophysics]], [[Special Relativity]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Differential Equations (metodo)|Differential Equations]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Kepler's Laws (metodo)|Kepler's Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Black Hole (object)|Black Hole]], [[Star (object)|Star]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1cEL0t1shki6AkL_N8eu7a0CiwmbKNKyn/view)


<div class="qlang-split" data-lang="en"></div>

**LIGO-GW150914 (10 punti)**

In 2015, the LIGO gravitational wave observatory revealed, for the first time, the passage of gravitational waves (GW, Gravitational Waves) through the Earth. This event, called GW150914, was triggered by waves produced by two black holes moving in near-circular orbits. In this problem, you'll have to estimate some physical parameters of the system, based on the properties of the signal recorded.

Part A: Newtonian (stationary) orbits (3.0 points)

A.1 Consider a system of two stars of mass $M_1$, $M_2$, respectively, at positions $\vec{r}_1$, $\vec{r}_2$, relative to the centre of mass of the system, i.e.:
$$M_1\vec{r}_1 + M_2\vec{r}_2 = 0 . \quad (1)$$
Stars are isolated from the rest of the universe and move at low speeds (so that, in the first approximation, Newtonian mechanics is applicable). Using Newton's laws, the acceleration of mass $M_1$ is
$$\frac{d^2\vec{r}_1}{dt^2} = -\alpha\frac{\vec{r}_1}{r_1^n} , \quad (2)$$
where $r_1 = |\vec{r}_1|$, $r_2 = |\vec{r}_2|$. Find $n\in\mathbb{N}$ and $\alpha = \alpha(G, M_1, M_2)$, where $G$ is the gravitational constant [$G\simeq6.67 \times 10^{-11}$, in SI units].

1.0pt

A.2 The total energy of the two-mass system in circular orbit can be expressed as:
$$E = A(\mu, \Omega, L) - G\frac{M\mu}{L} , \quad (3)$$
Where
$$\mu \equiv \frac{M_1M_2}{M_1 + M_2} , \qquad M \equiv M_1 + M_2 , \quad (4)$$
The total mass of the system is $\Omega$, the angular velocity is $L$, and the distance between the two stars is $L = r_1 + r_2$. It takes the explicit form of the term $A(\mu, \Omega, L)$.

1.0pt

A.3 Equation 3 may be written as $E = \beta G\frac{M\mu}{L}$. It is $\beta$.

1.0pt

Part B. Introduction of relativistic dissipation (7.0 points)

The correct theory of gravity, General Relativity, was formulated by Einstein in 1915 and predicts that gravity travels at the speed of light. Messengers carrying information about the interaction are called gravitational waves (GW). GW are emitted whenever the masses are accelerated, so the mass system loses energy.

Consider a system of two point-shaped particles, isolated from the rest of the universe. Einstein showed that for sufficiently low speeds the GW emitted: 1) have a frequency twice that of the orbital; 2) can be characterized by a luminosity (emitted power) $\mathcal{P}$ that is described by Einstein's quadrupole formula
$$\mathcal{P} = \frac{G}{5c^5}\sum_{i=1}^{3}\sum_{j=1}^{3}\left(\frac{d^3Q_{ij}}{dt^3}\right)\left(\frac{d^3Q_{ij}}{dt^3}\right) . \quad (5)$$
Here $c$ is the speed of light $c\simeq3 \times 10^8$ m/s. For a system of two point-shaped particles orbiting in the plane $x-y$, the $Q_{ij}$ are given in the following table ($i, j$ are the row/column indices)
$$Q_{11} = \sum_{A=1}^{2}\frac{M_A}{3}(2x_A^2 - y_A^2) , \qquad Q_{22} = \sum_{A=1}^{2}\frac{M_A}{3}(2y_A^2 - x_A^2) , \qquad Q_{33} = -\sum_{A=1}^{2}\frac{M_A}{3}(x_A^2 + y_A^2) , \quad (6)$$
$$Q_{12} = Q_{21} = \sum_{A=1}^{2}M_A x_A y_A , \quad (7)$$
and $Q_{ij} = 0$ in all other cases. Here, $(x_A, y_A)$ is the position of mass A in the mass center reference.

B.1 For the circular orbits described in A.2 the $Q_{ij}$ components may be expressed in terms of time $t$ as:
$$Q_{ii} = \frac{\mu L^2}{2}(a_i + b_i\cos kt) , \qquad Q_{ij}^{i\neq j} = \frac{\mu L^2}{2}c_{ij}\sin kt . \quad (8)$$
Determine $k$ in terms of $\Omega$ and the numerical values of the constants $a_i, b_i, c_{ij}$.

1.0pt

B.2 Calculates the light $\mathcal{P}$ emitted as gravitational waves for this system and finds:
$$\mathcal{P} = \xi\frac{G}{c^5}\mu^2 L^4\Omega^6 . \quad (9)$$
What is the $\xi$ number? [If you can't get $\xi$, use $\xi = 6.4$ below].

1.0pt

B.3 In the absence of GW emission, the two masses continue to orbit indefinitely in fixed circular orbits. The emission of GW, however, causes a loss of energy by the system and causes it to slowly evolve towards smaller and smaller circular orbits.

It shows that the change rate of orbital angular velocity, $\frac{d\Omega}{dt}$, can be written as
$$\left(\frac{d\Omega}{dt}\right)^3 = (3\xi)^3\frac{\Omega^{11}}{c^{15}}(GM_c)^5 , \quad (10)$$
where $M_c$ is called chirp mass. It takes $M_c$ as a function of $M$ and $\mu$. This mass causes the frequency increase during orbital decay. [The name "chirp" (cinguettio) comes from the high pitch and increasing frequency of the sound produced by small birds].

1.0pt

B.4 Using the information provided above, express the orbital angular velocity $\Omega$ as a function of the frequency $f_\text{GW}$ of the GW. Knowing that for each smooth function $F(t)$ and for $a\neq1$,
$$\frac{dF(t)}{dt} = \chi F(t)^a \quad\Rightarrow\quad F(t)^{1-a} = \chi(1-a)(t-t_0) , \quad (11)$$
where $\chi$ is a constant and $t_0$ is an integration constant, it shows that (10) implies that the frequency of GW is
$$f_\text{GW}^{-8/3} = 8\pi^{8/3}\xi\left(\frac{GM_c}{c^3}\right)^{(2/3)+p}(t_0-t)^{2-p} \quad (12)$$
and determines the constant $p$.

2.0pt

On 14 September 2015, the event GW 150914 was recorded by LIGO detectors, consisting of two L-shaped arms, each 4 km long. The relative variation in the length of these arms is shown in Figure 1. 1. The detector arms respond linearly to the passage of a gravitational wave, and the variations in their length have the same wave pattern. This wave was produced by two black holes on near-circular orbits; the loss of energy from the emission of gravitational waves caused a contraction of the orbits so that the two black holes eventually collided. The moment when this occurred corresponds, in a broad sense, to the peak of the signal after the D-point in Fig. 1.

Figure 1 is shown. Deformation (relative variation in length) of each arm in the LIGO H1 detector. The time is shown on the axis, and points A, B, C and D correspond to $t = 0.00, 0.009, 0.034, 0.040$ seconds respectively.

B.5 From the figure, estimate the value of $f_\text{GW}(t)$ for
$$t_\text{AB} = \frac{t_B + t_A}{2} \quad\text{and}\quad t_\text{CD} = \frac{t_D + t_C}{2} . \quad (13)$$
Assuming that the (12) is valid throughout the collision process (which is not strictly true) and that the two objects have the same mass, provide an estimate for the chirp mass $M_c$ and the total mass of the system, in units of solar masses $M_\odot\simeq2 \times 10^{30}$ kg.

1.0pt

B.6 Provide an estimate of the minimum orbital separation between the two objects immediately prior to the collision, using the orbital data at the instant $t_\text{CD}$. Then provide an estimate of the maximum size of each object: $R_\text{max}$. Calculate $R_\odot/R_\text{max}$ to compare this dimension to the radius of our Sun, $R_\odot\simeq7 \times 10^5$ km. Also provide an estimate of the same-instant orbital linear velocity, $v_\text{col}$, and compare it to the speed of light by calculating the $v_\text{col}/c$ ratio.

1.0pt

You conclude that these objects are extremely compact and move really fast!

<!--fig:start-->
**p.3**  Gravitational waveform GW150914 at the two detectors
![[_attachments/exam-theory-Q1-italian/exam-theory-Q1-italian_p3_f1.png]]
<!--fig:end-->

**Topic:** [[Gravitation]], [[Astrophysics]], [[Special Relativity]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Differential Equations (metodo)|Differential Equations]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Kepler's Laws (metodo)|Kepler's Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Black Hole (object)|Black Hole]], [[Star (object)|Star]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1cEL0t1shki6AkL_N8eu7a0CiwmbKNKyn/view)
