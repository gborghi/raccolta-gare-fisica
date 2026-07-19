---
title: APhO 2006 — Teorica
tipo: prova
tags:
  - kg/prova
  - paese/asia
  - comp/APhO
---
<div class="atom-reader" data-prova="apho_2006_theory"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="APhO 2006 — Teorica — Quesito 1" data-tags="kg/prova,paese/Asia,comp/APhO,topic/modern-quantum-physics,argomento/fisica-moderna,difficolta/5,multidisciplina/multi,object/atom,object/photon"></span>

<div class="qlang-switch" data-default="en"></div>



### Laser cooling of atoms

#### Theoretical Introduction

Consider a simple two-level model of the atom, with ground state energy $E_g$ and excited state energy $E_e$. Energy difference is $E_e - E_g = \hbar \omega_0$, the angular frequency of used laser is $\omega$, and the laser detuning is $\delta = \omega - \omega_0 \ll \omega_0$. Assume that all atom velocities satisfy $v \ll c$, where $c$ is the light speed. You can always restrict yourself to first nontrivial orders in small parameters $v/c$ and $\delta/\omega_0$. Natural width of the excited state $E_e$ due to spontaneous decay is $\gamma \ll \omega_0$: for an atom in an excited state, the probability to return to a ground state per unit time equals $\gamma$. When an atom returns to a ground state, it emits a photon of a frequency close to $\omega_0$.

It can be shown in quantum mechanics, that when an atom is subject to low-intensity laser radiation, the probability to excite the atom per unit time depends on the frequency of radiation in the reference frame of the atom, $\omega_a$, according to

$$
\gamma_p = s_0 \, \frac{\gamma/2}{1 + 4(\omega_a - \omega_0)^2/\gamma^2} \ll \gamma ,
$$

where $s_0 \ll 1$ is a parameter, which depends on the properties of atoms and laser intensity.

![Energy level diagram of the two-level atom](_attachments/APhO_2006_theory/APhO_2006_theory_Q1_p1_f1.png)

Fig. 1. *Note that shown parameters are not in scale.*

In this problem properties of the gas of sodium atoms are investigated neglecting the interaction between the atoms. The laser intensity is small enough, so that the number of atoms in the excited state is always much smaller than the number of atoms in the ground state. You can also neglect the effects of the gravitation, which are compensated in real experiments by an additional magnetic field.

**Numerical values:**

| Quantity | Value |
|---|---|
| Planck constant | $\hbar = 1.05 \cdot 10^{-34}\ \text{J s}$ |
| Boltzmann constant | $k_B = 1.38 \cdot 10^{-23}\ \text{J K}^{-1}$ |
| Mass of sodium atom | $m = 3.81 \cdot 10^{-26}\ \text{kg}$ |
| Frequency of used transition | $\omega_0 = 2\pi \cdot 5.08 \cdot 10^{14}\ \text{Hz}$ |
| Excited state linewidth | $\gamma = 2\pi \cdot 9.80 \cdot 10^{6}\ \text{Hz}$ |
| Concentration of the atoms | $n = 10^{14}\ \text{cm}^{-3}$ |

#### Questions

**a) [1 Point]** Suppose the atom is moving in the positive $x$ direction with the velocity $v_x$, and the laser radiation with frequency $\omega$ is propagating in the negative $x$ direction. What is the frequency of radiation in the reference frame of the atom?

**b) [2.5 Points]** Suppose the atom is moving in the positive $x$ direction with the velocity $v_x$, and two identical laser beams shine along $x$ direction from different sides. Laser frequencies are $\omega$, and intensity parameters are $s_0$. Find the expression for the average force $F(v_x)$ acting on an atom. For small $v_x$ this force can be written as $F(v_x) = -\beta v_x$. Find the expression for $\beta$. What is the sign of $\delta = \omega - \omega_0$, if the absolute value of the velocity of the atom decreases? Assume that momentum of an atom is much larger than the momentum of a photon.

In what follows we will assume that the atom velocity is small enough so that one can use the linear expression for the average force.

**c) [2.0 Points]** If one uses 6 lasers along $x$, $y$ and $z$ axes in positive and negative directions, then for $\beta > 0$ the dissipative force acts on the atoms, and their average energy decreases. This means that the temperature of the gas, which is defined through the average energy, decreases. Using the concentration of the atoms given above, estimate numerically the temperature $T_Q$ for which one cannot consider atoms as point-like objects because of quantum effects.

In what follows we will assume that the temperature is much larger than $T_Q$ and six lasers along $x$, $y$ and $z$ directions are used, as was explained in part c).

In part b) you calculated the average force acting on the atom. However, because of the quantum nature of photons, in each absorption or emission process the momentum of the atom changes by some discrete value and in random direction, due to the recoil process.

**d) [0.5 Points]** Determine numerically the square value of the change of the momentum of the atom, $(\Delta p)^2$, as the result of one absorption or emission event.

**e) [3.5 Points]** Because of the recoil effect, average temperature of the gas after long time doesn't become an absolute zero, but reaches some finite value. The evolution of the momentum of the atom can be represented as a random walk in the momentum space with an average step $\sqrt{\langle \Delta p^2 \rangle}$, and a cooling due to the dissipative force. The steady-state temperature is determined by the combined effect of these two different processes. Show that the steady state temperature $T_d$ is of the form: $T_d = \eta\gamma\left(x + \dfrac{1}{x}\right)/(4 k_B)$. Determine $x$. Assume that $T_d$ is much larger than $\langle \Delta p^2 \rangle/(2 k_B m)$.

**Note:** If vectors $\mathbf{P}_1, \mathbf{P}_2, \dots, \mathbf{P}_n$ are mutually statistically uncorrelated, mean square value of their sum is

$$
\langle (\mathbf{P}_1 + \mathbf{P}_2 + \dots + \mathbf{P}_n)^2 \rangle = \mathbf{P}_1^2 + \mathbf{P}_2^2 + \dots + \mathbf{P}_n^2
$$

**f) [0.5 Point]** Find numerically the minimal possible value of the temperature due to recoil effect. For what ratio $\delta/\gamma$ is it achieved?

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1GC1pjkfX-A8-6JgAK_-MUVNaddGVpDEW/view)

**Topic:** [[Modern-Quantum Physics]], [[Kinetic Theory]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Atom (object)|Atom]], [[Photon (object)|Photon]]


<div class="qlang-split" data-lang="it"></div>

### Raffreddamento laser di atomi

#### Introduzione teorica

Considera un semplice modello a due livelli dell'atomo, con energia dello stato fondamentale $E_g$ ed energia dello stato eccitato $E_e$. La differenza di energia è $E_e - E_g = \hbar \omega_0$, la frequenza angolare del laser utilizzato è $\omega$, e il disaccordo (detuning) del laser è $\delta = \omega - \omega_0 \ll \omega_0$. Assumi che tutte le velocità degli atomi soddisfino $v \ll c$, dove $c$ è la velocità della luce. Puoi sempre limitarti ai primi ordini non banali nei piccoli parametri $v/c$ e $\delta/\omega_0$. La larghezza naturale dello stato eccitato $E_e$ dovuta al decadimento spontaneo è $\gamma \ll \omega_0$: per un atomo in uno stato eccitato, la probabilità di ritornare a uno stato fondamentale per unità di tempo è pari a $\gamma$. Quando un atomo ritorna a uno stato fondamentale, emette un fotone di frequenza vicina a $\omega_0$.

Si può mostrare in meccanica quantistica che, quando un atomo è soggetto a radiazione laser di bassa intensità, la probabilità di eccitare l'atomo per unità di tempo dipende dalla frequenza della radiazione nel sistema di riferimento dell'atomo, $\omega_a$, secondo

$$
\gamma_p = s_0 \, \frac{\gamma/2}{1 + 4(\omega_a - \omega_0)^2/\gamma^2} \ll \gamma ,
$$

dove $s_0 \ll 1$ è un parametro che dipende dalle proprietà degli atomi e dall'intensità del laser.

![Diagramma dei livelli energetici dell'atomo a due livelli](_attachments/APhO_2006_theory/APhO_2006_theory_Q1_p1_f1.png)

Fig. 1. *Nota che i parametri mostrati non sono in scala.*

In questo problema si studiano le proprietà del gas di atomi di sodio trascurando l'interazione tra gli atomi. L'intensità del laser è abbastanza piccola, così che il numero di atomi nello stato eccitato è sempre molto minore del numero di atomi nello stato fondamentale. Puoi anche trascurare gli effetti della gravitazione, che negli esperimenti reali sono compensati da un ulteriore campo magnetico.

**Valori numerici:**

| Grandezza | Valore |
|---|---|
| Costante di Planck | $\hbar = 1.05 \cdot 10^{-34}\ \text{J s}$ |
| Costante di Boltzmann | $k_B = 1.38 \cdot 10^{-23}\ \text{J K}^{-1}$ |
| Massa dell'atomo di sodio | $m = 3.81 \cdot 10^{-26}\ \text{kg}$ |
| Frequenza della transizione utilizzata | $\omega_0 = 2\pi \cdot 5.08 \cdot 10^{14}\ \text{Hz}$ |
| Larghezza di riga dello stato eccitato | $\gamma = 2\pi \cdot 9.80 \cdot 10^{6}\ \text{Hz}$ |
| Concentrazione degli atomi | $n = 10^{14}\ \text{cm}^{-3}$ |

#### Domande

**a) [1 Punto]** Supponi che l'atomo si muova nella direzione $x$ positiva con velocità $v_x$, e che la radiazione laser di frequenza $\omega$ si propaghi nella direzione $x$ negativa. Qual è la frequenza della radiazione nel sistema di riferimento dell'atomo?

**b) [2.5 Punti]** Supponi che l'atomo si muova nella direzione $x$ positiva con velocità $v_x$, e che due fasci laser identici illuminino lungo la direzione $x$ da lati diversi. Le frequenze dei laser sono $\omega$, e i parametri di intensità sono $s_0$. Trova l'espressione della forza media $F(v_x)$ che agisce su un atomo. Per $v_x$ piccola questa forza può essere scritta come $F(v_x) = -\beta v_x$. Trova l'espressione di $\beta$. Qual è il segno di $\delta = \omega - \omega_0$, se il valore assoluto della velocità dell'atomo diminuisce? Assumi che la quantità di moto di un atomo sia molto maggiore della quantità di moto di un fotone.

In quanto segue assumeremo che la velocità dell'atomo sia abbastanza piccola da poter usare l'espressione lineare per la forza media.

**c) [2.0 Punti]** Se si usano 6 laser lungo gli assi $x$, $y$ e $z$ nelle direzioni positiva e negativa, allora per $\beta > 0$ la forza dissipativa agisce sugli atomi, e la loro energia media diminuisce. Ciò significa che la temperatura del gas, definita attraverso l'energia media, diminuisce. Usando la concentrazione degli atomi data sopra, stima numericamente la temperatura $T_Q$ per la quale non si possono più considerare gli atomi come oggetti puntiformi a causa degli effetti quantistici.

In quanto segue assumeremo che la temperatura sia molto maggiore di $T_Q$ e che si usino sei laser lungo le direzioni $x$, $y$ e $z$, come spiegato nel punto c).

Nel punto b) hai calcolato la forza media che agisce sull'atomo. Tuttavia, a causa della natura quantistica dei fotoni, in ciascun processo di assorbimento o emissione la quantità di moto dell'atomo cambia di un valore discreto e in direzione casuale, a causa del processo di rinculo.

**d) [0.5 Punti]** Determina numericamente il valore quadratico della variazione della quantità di moto dell'atomo, $(\Delta p)^2$, come risultato di un singolo evento di assorbimento o emissione.

**e) [3.5 Punti]** A causa dell'effetto di rinculo, la temperatura media del gas dopo un lungo tempo non diventa lo zero assoluto, ma raggiunge un valore finito. L'evoluzione della quantità di moto dell'atomo può essere rappresentata come un cammino casuale nello spazio delle quantità di moto con passo medio $\sqrt{\langle \Delta p^2 \rangle}$, e un raffreddamento dovuto alla forza dissipativa. La temperatura di regime stazionario è determinata dall'effetto combinato di questi due diversi processi. Mostra che la temperatura di regime stazionario $T_d$ è della forma: $T_d = \eta\gamma\left(x + \dfrac{1}{x}\right)/(4 k_B)$. Determina $x$. Assumi che $T_d$ sia molto maggiore di $\langle \Delta p^2 \rangle/(2 k_B m)$.

**Nota:** Se i vettori $\mathbf{P}_1, \mathbf{P}_2, \dots, \mathbf{P}_n$ sono statisticamente scorrelati tra loro, il valore quadratico medio della loro somma è

$$
\langle (\mathbf{P}_1 + \mathbf{P}_2 + \dots + \mathbf{P}_n)^2 \rangle = \mathbf{P}_1^2 + \mathbf{P}_2^2 + \dots + \mathbf{P}_n^2
$$

**f) [0.5 Punti]** Trova numericamente il minimo valore possibile della temperatura dovuto all'effetto di rinculo. Per quale rapporto $\delta/\gamma$ viene raggiunto?

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1GC1pjkfX-A8-6JgAK_-MUVNaddGVpDEW/view)

**Topic:** [[Modern-Quantum Physics]], [[Kinetic Theory]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Atom (object)|Atom]], [[Photon (object)|Photon]]



<span class="atom-split" id="q02" data-atom="q02" data-title="APhO 2006 — Teorica — Quesito 2" data-tags="kg/prova,paese/Asia,comp/APhO,topic/oscillations-and-waves,argomento/onde-e-oscillazioni,difficolta/5,multidisciplina/mono,object/spring,object/block,object/pendulum"></span>

<div class="qlang-switch" data-default="en"></div>



### Oscillator damped by sliding friction

#### Theoretical Introduction

In mechanics, one often uses so called phase space, an imaginary space with the axes comprising of coordinates and moments (or velocities) of all the material points of the system. Points of the phase space are called imaging points. Every imaging point determines some state of the system.

When the mechanical system evolves, the corresponding imaging point follows a trajectory in the phase space which is called phase trajectory. One puts an arrow along the phase trajectory to show direction of the evolution. A set of all possible phase trajectories of a given mechanical system is called a phase portrait of the system. Analysis of this phase portrait allows one to unravel important qualitative properties of dynamics of the system, without solving equations of motion of the system in an explicit form. In many cases, the use of the phase space is the most appropriate method to solve problems in mechanics.

As an example we present a phase trajectory of a free particle moving along $x$ axis in positive direction (Fig.1).

![Phase trajectory of a free particle](_attachments/APhO_2006_theory/APhO_2006_theory_Q2_p1_f1.png)

Fig. 1. Phase trajectory of a free particle.

#### Questions

##### A. Phase portraits (3.0)

**A1. [0.5 Points]** Make a draw of the phase trajectory of a free material point moving between two parallel absolutely reflective walls located at $x = -L/2$ and $x = L/2$.

**A2.** Investigate the phase trajectory of the harmonic oscillator, i.e., of the material point of mass $m$ affected by Hook's force $F = -k x$:
- a) **[0.5 Points]** Make a draw of the phase trajectory and its parameters.
- b) **[0.5 Points]** Find the equation of the phase trajectory of the harmonic oscillator.

**A3. [1.5 Points]** Consider a material point of mass $m$ on the end of weightless solid rod of length $L$, another end of which is fixed (strength of gravitational field is $g$). It is convenient to use the angle $\alpha$ between the rod and vertical line as a coordinate of the system. The phase plane is the plane with coordinates $(\alpha, d\alpha/dt)$. Study and make a draw of the phase portrait of this pendulum at arbitrary angle $\alpha$. How many qualitatively different types of phase trajectories $K$ does this system have? Draw at least one typical trajectory of each type. Find the conditions which determine these different types of phase trajectories. (Do not take the equilibrium points as phase trajectories). Neglect air resistance.

##### B. The oscillator damped by sliding friction (7.0)

When considering resistance to a motion, we usually deal with two types of friction forces. The first type is the friction force, which depends on the velocity (viscous friction), and is defined by $F = -\gamma v$. An example is given by a motion of a solid body in gases or liquids. The second type is the friction force, which does not depend on the magnitude of velocity. It is defined by the value $F = \mu N$ and direction opposite to the relative velocity of contacting bodies (sliding friction). An example is given by a motion of a solid body on the surface of another solid body.

As a specific example of the second type, consider a solid body on a horizontal surface at the end of a spring, another end of which is fixed. The mass of the body is $m$, the elasticity coefficient of the spring is $k$, the friction coefficient between the body and the surface is $\mu$. Assume that the body moves along the straight line with the coordinate $x$ ($x = 0$ corresponds to the spring which is not stretched). Assume that static and dynamical friction coefficients are the same. At initial moment the body has a position $x = A_0$ ($A_0 > 0$) and zero velocity.

**B1. [0.8 Points]** Write down equation of motion of the harmonic oscillator damped by the sliding friction.

**B2. [2.0 Points]** Make a draw of the phase trajectory of this oscillator and find the equilibrium points.

**B3. [1.0 Points]** Does the body completely stop at the position where the string is not stretched? If not, determine the length of the region where the body can come to a complete stop.

**B4. [2.0 Points]** Find the decrease of the maximal deviation of the oscillator in positive $x$ direction during one oscillation $\Delta A$. What is the time between two consequent maximal deviations in positive direction? Find the dependence of this maximal deviation $A(t_n)$ where $t_n$ is the time of the $n$-th maximal deviation in positive direction.

**B5. [1.0 Points]** Make a draw of the dependence of coordinate on time, $x(t)$, and estimate the number $N$ of oscillations of the body?

**Note:** Equation of the ellipse with semi-axes $a$ and $b$ and centre at the origin has the following form:

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1
$$

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1PLwPDuEkLM6B3glyevIsW_jmWDATQRF-/view)

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Hooke's Law (metodo)|Hooke's Law]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Spring (object)|Spring]], [[Block (object)|Block]], [[Pendulum (object)|Pendulum]]


<div class="qlang-split" data-lang="it"></div>

### Oscillatore ammortizzato da attrito scorrevole

#### Introduzione teorica

Nella meccanica si usa spesso lo spazio di fase, uno spazio immaginario con le assi che comprendono coordinate e momenti (o velocità) di tutti i punti materiali del sistema. I punti dello spazio di fase sono chiamati punti di imaging. Ogni punto di imaging determina uno stato del sistema.

Quando il sistema meccanico si evolve, il corrispondente punto di imaging segue una traiettoria nello spazio di fase che si chiama traiettoria di fase. Si pone una freccia lungo la traiettoria delle fasi per mostrare la direzione dell'evoluzione. Un insieme di tutte le possibili traiettorie di fase di un dato sistema meccanico è chiamato ritratto di fase del sistema. L'analisi di questo ritratto di fase consente di svelare importanti proprietà qualitative della dinamica del sistema, senza risolvere le equazioni di movimento del sistema in una forma esplicita. In molti casi, l'uso dello spazio di fase è il metodo più appropriato per risolvere i problemi della meccanica.

Come esempio, si presenta una traiettoria di fase di una particella libera che si muove lungo l'asse $x$ in direzione positiva (Fig.1).

![Trajectoria di fase di una particella libera](_attaccamenti/APhO_2006_theory/APhO_2006_theory_Q2_p1_f1.png)

Fig. - Cosa? 1. Traettoria di fase di una particella libera.

#### # Domande

##### A. Ritratti di fase (3.0)

**A1. [0,5 punti]** Fare un disegno della traiettoria di fase di un punto di materiale libero che si muove tra due pareti parallele assolutamente riflettenti situate a $x = -L/2$ e $x = L/2$.

**A2.** Investigare la traiettoria di fase dell'oscillatore armonico, cioè del punto materiale di massa $m$ influenzato dalla forza di Hook $F = -k x$:
- a) **[0,5 punti]** Fare un disegno della traiettoria di fase e dei suoi parametri.
- b) **[0,5 punti]** Trova l'equazione della traiettoria di fase dell'oscillato armonico.

**A3. [1.5 punti]** Si consideri un punto materiale di massa $m$ sulla estremità di una barra solida senza peso di lunghezza $L$, la cui altra estremità è fissa (forza del campo gravitazionale è $g$). È conveniente utilizzare l'angolo $\alpha$ tra la canna e la linea verticale come coordinata del sistema. Il piano di fase è il piano con le coordinate $(\alpha, d\alpha/dt)$. Studiare e disegnare il ritratto di fase di questo pendolo ad angolo arbitrario $\alpha$. Quanti tipi qualitativamente diversi di traiettorie di fase $K$ ha questo sistema? Descrivere almeno una traiettoria tipica di ciascun tipo. Trova le condizioni che determinano questi diversi tipi di traiettorie di fase. (Non prendere i punti di equilibrio come traiettorie di fase). - Non si tratta di resistenza all'aria.

##### B. L'oscillatore ammortizzato da attrito scorrevole (7.0)

Quando si considera la resistenza a un movimento, di solito si tratta di due tipi di forze di attrito. Il primo tipo è la forza di attrito, che dipende dalla velocità (trito viscoso), ed è definita da $F = -\gamma v$. Un esempio è dato dal movimento di un corpo solido in gas o liquidi. Il secondo tipo è la forza di attrito, che non dipende dalla grandezza della velocità. È definito dal valore $F = \mu N$ e dalla direzione opposta alla velocità relativa dei corpi in contatto (attrito scorrevole). Un esempio è dato dal movimento di un corpo solido sulla superficie di un altro corpo solido.

Come esempio specifico del secondo tipo, si può considerare un corpo solido su una superficie orizzontale alla fine di una molla, la cui altra estremità è fissata. La massa del corpo è $m$, il coefficiente di elasticità della molla è $k$, il coefficiente di attrito tra il corpo e la superficie è $\mu$. Supponiamo che il corpo si muova lungo una linea retta con la coordinata $x$ ($x = 0$ corrisponde alla sorgente che non è estesa). Supponiamo che i coefficienti di attrito statico e dinamico siano gli stessi. Al momento iniziale il corpo ha una posizione $x = A_0$ ($A_0 > 0$) e velocità zero.

**B1. [0,8 punti]** Scrivere l'equazione di movimento dell'oscillato armonico attenuato dalla frizione scorrevole.

**B2. [2.0 punti]** Fare un tracciato della traiettoria di fase di questo oscillatore e trovare i punti di equilibrio.

**B3. [1.0 punti]** Il corpo si ferma completamente nella posizione in cui la corda non è allungata? Se non lo è, determina la lunghezza della zona in cui il corpo può fermarsi completamente.

**B4. [2.0 punti]** Trovare la diminuzione della deviazione massima dell'oscillato in direzione positiva $x$ durante una oscillazione $\Delta A$. Qual è il tempo tra due conseguenti deviazioni massime in direzione positiva? Trova la dipendenza di questa deviazione massima $A(t_n)$ dove $t_n$ è il tempo della deviazione massima $n$- nella direzione positiva.

**B5. [1.0 punti]** Fare un disegno della dipendenza della coordinata sul tempo, $x(t)$, e stimare il numero $N$ di oscillazioni del corpo?

**Nota:** L'equazione dell'ellisse con semiacci $a$ e $b$ e centro all'origine ha la seguente forma:

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1
$$

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1PLwPDuEkLM6B3glyevIsW_jmWDATQRF-/view)

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Hooke's Law (metodo)|Hooke's Law]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Spring (object)|Spring]], [[Block (object)|Block]], [[Pendulum (object)|Pendulum]]



<span class="atom-split" id="q03" data-atom="q03" data-title="APhO 2006 — Teorica — Quesito 3" data-tags="kg/prova,paese/Asia,comp/APhO,topic/fluid-mechanics,argomento/fluidi,difficolta/5,multidisciplina/multi,object/piston,object/gas,object/capacitor,object/lens"></span>

<div class="qlang-switch" data-default="en"></div>



This problem consists of four related parts.

**A. [2.5 points]** The Mariana Abyss in the Pacific Ocean has a depth of $H = 10920\ m$. Density of salted water at the surface of the ocean is $\rho_0 = 1025\ \text{kg}/m^3$, bulk modulus is $K = 2.1 \cdot 10^9\ Pa$, acceleration of gravity is $g = 9.81\ m/s^2$. Neglect the change in the temperature and in the acceleration of gravity with the depth, and also neglect the atmospheric pressure.

A1) Find the relation between the density $\rho(x)$ and pressure $P(x)$ at the depth of $x$.

A2) Find the numerical value of the pressure $P(H)$ at the bottom of the Mariana Abyss. You may use iterative methods to solve this part.

*Note:* The fluids have very small compressibility. Compressibility coefficient is defined as

$$
\kappa = \frac{1}{V}\left(\frac{dV}{dP}\right)_{T=\text{const}}
$$

Bulk modulus $K$ is the inverse of $\kappa$: $K = 1/\kappa$.

**B. [2.5 points]** Light mobile piston separates the vessel into two parts. The vessel is isolated from the environment. One part of the vessel contains $m_1 = 3\ g$ of hydrogen at the temperature of $T_{10} = 300\ K$, and the other part contains $m_2 = 16\ g$ of oxygen at the temperature of $T_{20} = 400\ K$. Molar masses of hydrogen and oxygen are $\mu_1 = 2\ g/\text{mole}$ and $\mu_2 = 32\ g/\text{mole}$ respectively, and $R = 8.31\ J/(K \cdot \text{mole})$. The piston weakly conducts heat between oxygen and hydrogen, and eventually the temperature in the system equilibrates. All the processes are quasi stationary.

B1) What is the final temperature of the system $T$?

B2) What is the ratio between final pressure $P_f$ and initial pressure $P_i$?

B3) What is the total amount of heat $Q$ transferred from oxygen to hydrogen?

**C. [2.5 points]** Two identical conducting plates $\alpha$ and $\beta$ with charges $-Q$ and $+q$ respectively ($Q > q > 0$) are located parallel to each other at a small distance. Another identical plate $\gamma$ with mass $m$ and charge $+Q$ is situated parallel to the original plates at distance $d$ from the plate $\beta$ (see Fig.1). Surface area of the plates is $S$. The plate $\gamma$ is released and can move freely, while the plates $\alpha$ and $\beta$ are kept fixed. The collision between the plates $\beta$ and $\gamma$ is elastic, and neglect the gravitational force and the boundary effects. Assume that the charge has enough time to redistribute between the plates $\beta$ and $\gamma$ during the collision.

C1) What is the electric field $E_1$ acting on the plate $\gamma$ before the collision with the plate $\beta$?

C2) What are the charges of the plates $Q_\beta$ and $Q_\gamma$ after the collision?

C3) What is the velocity $\upsilon$ of the plate $\gamma$ after the collision at the distance $d$ from the plate $\beta$?

![Three parallel plates α, β, γ with charges −Q, +q, +Q and separation d](_attachments/APhO_2006_theory/APhO_2006_theory_Q3_p2_f1.png)

Fig. 1

**D. [2.5 points]** Two thin lenses with lens powers $D_1$ and $D_2$ are located at distance $L = 25\ cm$ from each other, and their main optical axes coincide. This system creates a direct real image of the object, located at the main optical axis closer to lens $D_1$, with the magnification $\Gamma' = 1$. If the positions of the two lenses are exchanged, the system again produces a direct real image, with the magnification $\Gamma'' = 4$.

D1) What are the types of the lenses? On the answer sheet you should mark the gathering lens as «+», and the diverging lens as «−».

D2) What is the difference between the lens powers $\Delta D = D_1 - D_2$?

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1efwdzIrzqvSPzss8Cc6sO1axjgUWvrSM/view)

**Topic:** [[Fluid Mechanics]], [[Thermodynamics]]
**Metodi:** [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Gauss's Law (metodo)|Gauss's Law]], [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Piston (object)|Piston]], [[Gas (object)|Gas]], [[Capacitor (object)|Capacitor]], [[Lens (object)|Lens]]


<div class="qlang-split" data-lang="it"></div>

Questo problema è composto da quattro parti correlate.

**A. [2.5 punti]** La Fossa delle Marianne nell'Oceano Pacifico ha una profondità di $H = 10920\ m$. La densità dell'acqua salata alla superficie dell'oceano è $\rho_0 = 1025\ \text{kg}/m^3$, il modulo di compressibilità è $K = 2.1 \cdot 10^9\ Pa$, l'accelerazione di gravità è $g = 9.81\ m/s^2$. Trascura la variazione della temperatura e dell'accelerazione di gravità con la profondità, e trascura anche la pressione atmosferica.

A1) Trova la relazione tra la densità $\rho(x)$ e la pressione $P(x)$ alla profondità $x$.

A2) Trova il valore numerico della pressione $P(H)$ sul fondo della Fossa delle Marianne. Puoi usare metodi iterativi per risolvere questa parte.

*Nota:* I fluidi hanno una comprimibilità molto piccola. Il coefficiente di comprimibilità è definito come

$$
\kappa = \frac{1}{V}\left(\frac{dV}{dP}\right)_{T=\text{const}}
$$

Il modulo di compressibilità $K$ è l'inverso di $\kappa$: $K = 1/\kappa$.

**B. [2.5 punti]** Un pistone leggero e mobile separa il recipiente in due parti. Il recipiente è isolato dall'ambiente. Una parte del recipiente contiene $m_1 = 3\ g$ di idrogeno alla temperatura di $T_{10} = 300\ K$, e l'altra parte contiene $m_2 = 16\ g$ di ossigeno alla temperatura di $T_{20} = 400\ K$. Le masse molari di idrogeno e ossigeno sono rispettivamente $\mu_1 = 2\ g/\text{mole}$ e $\mu_2 = 32\ g/\text{mole}$, e $R = 8.31\ J/(K \cdot \text{mole})$. Il pistone conduce debolmente il calore tra ossigeno e idrogeno, e alla fine la temperatura nel sistema si equilibra. Tutti i processi sono quasi stazionari.

B1) Qual è la temperatura finale del sistema $T$?

B2) Qual è il rapporto tra la pressione finale $P_f$ e la pressione iniziale $P_i$?

B3) Qual è la quantità totale di calore $Q$ trasferita dall'ossigeno all'idrogeno?

**C. [2.5 punti]** Due piastre conduttrici identiche $\alpha$ e $\beta$ con cariche rispettivamente $-Q$ e $+q$ ($Q > q > 0$) sono poste parallele tra loro a piccola distanza. Un'altra piastra identica $\gamma$ con massa $m$ e carica $+Q$ è posta parallela alle piastre originali a distanza $d$ dalla piastra $\beta$ (vedi Fig.1). L'area della superficie delle piastre è $S$. La piastra $\gamma$ viene lasciata libera e può muoversi liberamente, mentre le piastre $\alpha$ e $\beta$ sono tenute fisse. L'urto tra le piastre $\beta$ e $\gamma$ è elastico; trascura la forza gravitazionale e gli effetti di bordo. Assumi che la carica abbia tempo sufficiente per ridistribuirsi tra le piastre $\beta$ e $\gamma$ durante l'urto.

C1) Qual è il campo elettrico $E_1$ che agisce sulla piastra $\gamma$ prima dell'urto con la piastra $\beta$?

C2) Quali sono le cariche delle piastre $Q_\beta$ e $Q_\gamma$ dopo l'urto?

C3) Qual è la velocità $\upsilon$ della piastra $\gamma$ dopo l'urto, alla distanza $d$ dalla piastra $\beta$?

![Tre piastre parallele α, β, γ con cariche −Q, +q, +Q e separazione d](_attachments/APhO_2006_theory/APhO_2006_theory_Q3_p2_f1.png)

Fig. 1

**D. [2.5 punti]** Due lenti sottili con potenze $D_1$ e $D_2$ sono poste a distanza $L = 25\ cm$ l'una dall'altra, e i loro assi ottici principali coincidono. Questo sistema crea un'immagine reale diritta dell'oggetto, posto sull'asse ottico principale più vicino alla lente $D_1$, con l'ingrandimento $\Gamma' = 1$. Se le posizioni delle due lenti vengono scambiate, il sistema produce di nuovo un'immagine reale diritta, con l'ingrandimento $\Gamma'' = 4$.

D1) Di quali tipi sono le lenti? Sul foglio delle risposte devi indicare la lente convergente con «+», e la lente divergente con «−».

D2) Qual è la differenza tra le potenze delle lenti $\Delta D = D_1 - D_2$?

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1efwdzIrzqvSPzss8Cc6sO1axjgUWvrSM/view)

**Topic:** [[Fluid Mechanics]], [[Thermodynamics]]
**Metodi:** [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Gauss's Law (metodo)|Gauss's Law]], [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Piston (object)|Piston]], [[Gas (object)|Gas]], [[Capacitor (object)|Capacitor]], [[Lens (object)|Lens]]
