---
title: IPhO 2014
tipo: prova
tags:
  - kg/prova
  - anno/2014
  - paese/Germania
  - comp/IPhO
  - cluster/Fisica Moderna
---
<div class="atom-reader" data-prova="45_ipho_2014_2rd_aufgaben"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="IPhO 2014 — Quesito 1" data-tags="kg/prova,paese/Germania,comp/IPhO,cluster/Fisica Moderna,object/capacitor,object/battery,object/switch,object/inductor"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 1 Resuscitation
(20 pts.)
Defibrillators are used to restore the heart rhythm of an irregularly beating heart. For this, a large fraction of the heart muscle cells is simultaneously stimulated electrically
by an electric shock.
Consider a simple defibrillator consisting of a capacitor that discharges, via two electrodes
connected to the patient's chest, over a period of 150 ms to about 5% of the
voltage of the fully charged capacitor. The resistance of the chest between the
electrodes is about $100\ \Omega$ and the energy necessary for the defibrillation is 200 J.
a) Estimate what capacitance the capacitor must have and to what voltage it
must at least be charged for operation. (5 pts.)
In mobile defibrillators, such as those found in some public places, the capacitor is charged via a battery. Since the voltage $U_0$ of the battery is lower than the necessary
capacitor voltage, it must be stepped up. One way to do this is provided by a so-called
boost converter, as sketched in the following figure.
The switch S opens and closes periodically, being closed for a fraction $g$ of the period and
open for a fraction $1-g$. The period should be
very small compared to the time constant of the capacitor-
resistor system. The quantity $g$ is called the duty cycle.
The drawn-in, very high-ohmic resistor R represents
the ohmic behavior of the capacitor. All components
may be assumed ideal, i.e. in particular
that the diode blocks completely in the reverse direction and causes no voltage drop in the
forward direction.
Fig. 1: Circuit diagram for the boost converter.
- **B.** Derive an expression for the maximum capacitor voltage that is established after some time, in terms of the occurring quantities. (14 pts.)
- **C.** Determine how large the duty cycle $g$ must be chosen in order to charge a capacitor of
capacitance C of $100\ \mu\text{F}$ with an ohmic resistance component of $R = 100\ \text{M}\Omega$ via a
12.0 V battery to a voltage of 500 V, if the inductance L of the coil is 5.0 mH.
(1 pt.)

<!--fig:start-->
![[_attachments/45_IPhO_2014_2Rd_Aufgaben/45_IPhO_2014_2Rd_Aufgaben_p2_f1.png]]
*circuit diagram of boost converter with L, S, C, R*
<!--fig:end-->

**Topic:** [[Circuits]], [[Electromagnetism]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Differential Equations (metodo)|Differential Equations]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Capacitor (object)|Capacitor]], [[Battery (object)|Battery]], [[Switch (object)|Switch]], [[Inductor (object)|Inductor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1QnwZuN7zt7ag83rZc4013PtLRPBcSkzg/view)


<div class="qlang-split" data-lang="it"></div>

**Problema 1 Rianimazione (20 punti)**
I defibrillatori vengono utilizzati per ripristinare il ritmo cardiaco di un cuore che batte in modo irregolare. A tale scopo, una grande frazione delle cellule muscolari cardiache viene stimolata simultaneamente in modo elettrico da uno shock elettrico.

Si consideri un semplice defibrillatore costituito da un condensatore che si scarica, attraverso due elettrodi collegati al torace del paziente, in un periodo di 150 ms fino a circa il 5% della tensione del condensatore completamente carico. La resistenza del torace tra gli elettrodi è di circa $100\ \Omega$ e l'energia necessaria per la defibrillazione è di 200 J.

a) Stimare quale capacità deve avere il condensatore e a quale tensione almeno deve essere caricato per il funzionamento. (5 punti)

Nei defibrillatori portatili, come quelli presenti in alcuni luoghi pubblici, il condensatore viene caricato tramite una batteria. Poiché la tensione $U_0$ della batteria è inferiore alla tensione necessaria per il condensatore, deve essere aumentata. Un modo per farlo è fornito da un convertitore di tensione del tipo "boost converter", come schematizzato nella figura seguente.

L'interruttore S si apre e chiude periodicamente, essendo chiuso per una frazione $g$ del periodo e aperto per una frazione $1-g$. Il periodo deve essere molto breve rispetto alla costante di tempo del sistema condensatore-resistore. La grandezza $g$ è detta ciclo di lavoro.

Il resistore R disegnato, molto alto in valore, rappresenta il comportamento ohmico del condensatore. Si assumano tutti i componenti ideali, in particolare che il diodo blocchi completamente nel verso inverso e non produca caduta di tensione nel verso diretto.

Fig. 1: Schema del circuito per il convertitore di tensione "boost".

- **B.** Derivare un'espressione per la massima tensione raggiunta sul condensatore dopo un certo tempo, in funzione delle grandezze coinvolte. (14 punti)
- **C.** Determinare quanto deve essere grande il ciclo di lavoro $g$ affinché una capacità del condensatore di capacità C di $100\ \mu\text{F}$ con un componente resistivo ohmico di $R = 100\ \text{M}\Omega$ venga caricata tramite una batteria da 12,0 V fino a una tensione di 500 V, sapendo che l’induttanza L della bobina è pari a 5,0 mH.
(1 punto.)

<!--fig:start-->
![[_attachments/45_IPhO_2014_2Rd_Aufgaben/45_IPhO_2014_2Rd_Aufgaben_p2_f1.png]]
*circuit diagram of boost converter with L, S, C, R*
<!--fig:end-->



<span class="atom-split" id="q02" data-atom="q02" data-title="IPhO 2014 — Quesito 2" data-tags="kg/prova,paese/Germania,comp/IPhO,cluster/Fisica Moderna,object/atom,object/spring,object/diffraction-grating,object/photon"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 2 Crystal Vibrations and Diffraction of Light
(20 pts.)
(Idea: Manuel Bärenz)
Characteristic of a crystal is the regular arrangement of its building blocks, i.e. the atoms or
molecules of which it consists. This regularity allows collective phenomena that cannot be observed in the individual building blocks. In this problem you are to investigate the vibrational excitations of
crystals.
For this, consider for simplicity a one-dimensional crystal in which a very large number of
atoms are arranged along
an axis, as in the adjacent figure. The atoms each have mass m and are located at positions
$x_i$ with $i \in \mathbb{Z}$. The rest position of the i-th atom is at
$i \cdot a$, where a is the lattice constant of the crystal.
Fig. 2: Sketch of the atoms of the one-dimensional
crystal at their respective rest positions.
The interaction of the atoms with one another can, in a simple approximation, be modeled as the force of a spring of
spring constant D between neighboring atoms. The i-th atom thus exerts
on the $(i-1)$-th atom a force of magnitude
$$F_{i\to i-1} = D\,(x_i - x_{i-1} - a)\,.$$
a) Set up the equation of motion for the position of the i-th atom in the crystal lattice and
show that the equations of motion of the atoms are solved by standing waves of the
form
$$x_i(t) = \hat{x}\,\sin(i\,a\,k)\,\sin(\omega\,t) + i\,a\,.$$
For the solution, give $\omega$ in terms of D, m, a and k, and determine the
maximum value of $\omega$ in terms of the parameters of the crystal. In addition, sketch
the behavior of $\omega$ as a function of k. (5 pts.)
The quantity k is called the wavenumber and $\omega$ is the circular or angular frequency of the wave. They
are related to the wavelength $\lambda$ and the frequency f of the oscillation via
$$|k| = \frac{2\pi}{\lambda}\,,$$
as well as
$$\omega = 2\pi f\,.$$
If the lattice constant of the crystal is very small compared to the wavelength, the wave "feels"
the inhomogeneity of the crystal lattice hardly at all. It then behaves like light in a homogeneous medium
and $\omega$ is approximately proportional to k. Thus the propagation velocity $c = \dfrac{\partial\omega}{\partial k} \approx \dfrac{\omega}{k}$ of the
waves is roughly constant and wave packets can propagate over larger distances in the crystal.
This is the reason why sound can travel through crystalline solids without large
distortions.
b) Express the speed of sound c in the crystal for wavelengths that are large compared to the
atomic spacing a, in terms of the quantities D, m and a. (1 pt.)
In many cases sound does not occur as a standing wave but as a traveling wave.
c) Show that the standing wave considered in part a) can be represented as $i \cdot a$ plus a combination of several traveling waves of the form
$$x'_i = \hat{x}'\,\sin\!\left(\omega'\,t - i\,a\,k' - \phi'\right)$$
The wavenumbers $k'$ and the phases $\phi'$ may take any real values, whereas the angular frequencies $\omega'$ may only be positive. (2 pts.)

In the following, sound waves in a cuboidal diamond crystal
are now considered as a concrete example. The diamond is to be oriented so that its edges run parallel to a Cartesian coordinate system. Effects of the three-dimensional structure of the crystal are to be
neglected, so that the previous results can still be used. You can
use the following values for the diamond crystal:
Atomic spacing in the diamond crystal:
$a = 1{,}78 \cdot 10^{-10}\ \text{m}$
Atomic mass for diamond:
$m = 12{,}01\ \text{u}$
(u is the atomic mass unit)
Speed of sound in diamond:
$c = 1{,}8 \cdot 10^4\ \text{m s}^{-1}$
Refractive index of diamond:
$n = 2{,}42$
In the crystal, a standing sound wave of frequency $f = 1{,}0$ GHz is generated in the z-direction.
d) Determine the wavelength $\lambda$ of the standing wave and show that at the given frequency the proportionality between the angular frequency $\omega$ and the wavenumber k holds to a good
approximation. (2 pts.)
The crystal is now additionally irradiated along the x-axis with a laser beam of wavelength $\lambda_L = 630$ nm.
On passing through the crystal, the laser beam is scattered more strongly at the locations where the standing
sound wave is compressed than at other locations. These locations therefore form
an optical grating for the laser beam.
e) Determine the angle to the undiffracted beam at which the first principal maximum of the
diffraction pattern behind the crystal can be seen. (4 pts.)
The sound waves considered can also be interpreted quantum mechanically. Just as a laser beam consists of individual light quanta, the photons, one imagines the sound wave to be composed of a
number of vibration quanta. The quantum of the sound waves is called a "phonon". For the present situation, assume that a phonon has the same properties as
a photon. In particular, its energy should be related to the frequency via $E = h f$,
where h denotes Planck's constant. The photons of the laser beam can, with a
certain probability, absorb phonons.
f) Explain the principal maxima occurring above and below the undiffracted beam with the help
of the quantum mechanical picture. Determine, also for this point of view, the angle
to the undiffracted beam at which the first principal maximum of the diffraction pattern behind the
crystal can be seen.
State what condition the wavelengths $\lambda$ and $\lambda_L$ must satisfy so that the classically determined diffraction angle agrees well with that from the quantum mechanical consideration.
(6 pts.)

**Topic:** [[Oscillations & Waves]], [[Wave Optics]], [[Modern-Quantum Physics]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Superposition Principle (metodo)|Superposition Principle]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Atom (object)|Atom]], [[Spring (object)|Spring]], [[Diffraction Grating (object)|Diffraction Grating]], [[Photon (object)|Photon]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1QnwZuN7zt7ag83rZc4013PtLRPBcSkzg/view)


<div class="qlang-split" data-lang="it"></div>

Problema 2 Vibrazioni cristalline e diffrazione della luce
(cfr.
(idea: Manuel Bärenz)
Caratteristico di un cristallo è l'arrangimento regolare dei suoi blocchi di costruzione, cioè i atomi o
molecole di cui è composto. Questa regolarità consente fenomeni collettivi che non possono essere osservati nei singoli blocchi di costruzione. In questo problema si sono per indagare le eccitazioni vibrazionali di
cristalli.
Per questo, considerate per semplicità un cristallo unidimensional in cui un numero molto grande di
Atomi sono disposti lungo
in un asse, come nella figura adiacente. Gli atomi hanno massa m e sono posizionati in posizioni
$x_i$ with $i \in \mathbb{Z}$. La posizione restante dell'atomo ith è at
$i \cdot a$, dove a è la costante lattice del cristallo.
Fig. 2: Sketch of the atoms of the one-dimensional
Crystal at their respective rest positions.
L'interazione degli atomi tra loro può, in una semplice approssimazione, essere modellata come la forza di una primavera di
Prossima costante D tra atomi vicini. Il primo atomo così esercita
sul $(i-1)$-th atomo a force of magnitude
$$F_{i\to i-1} = D\,(x_i - x_{i-1} - a)\,.$$
a) Setting up the equation of motion for the position of the ith atom in the crystal lattice e
mostrare che le equazioni di movimento degli atomi sono risolte da onde in piedi del
forma
$$x_i(t) = \hat{x}\,\sin(i\,a\,k)\,\sin(\omega\,t) + i\,a\,.$$
Per la soluzione, dare $\omega$ in termini di D, m, a e k, e determinare il
il valore massimo di $\omega$ in termini dei parametri del cristallo. Inoltre,
il comportamento di $\omega$ come funzione di k. (cfr.
La quantità k è chiamata la frequenza d'onda e $\omega$ è la frequenza circolare o angolare dell'onda. - Sono
sono correlati alla lunghezza d'onda $\lambda$ e alla frequenza f dell'oscillazione via
$$|k| = \frac{2\pi}{\lambda}\,,$$
e
$$\omega = 2\pi f\,.$$
Se la costante lattice del cristallo è molto piccola rispetto alla lunghezza d'onda, l'onda "senti"
La disumogeneità della cristallina non è che molto. Si comporta quindi come luce in un medio omogeneo
e $\omega$ è approssimativamente proporzionale a k. Così la velocità di propagazione $c = \dfrac{\partial\omega}{\partial k} \approx \dfrac{\omega}{k}$ del
Le onde sono più o meno costanti e i pacchetti di onde possono diffondersi a più grandi distanze nel cristallo.
Questo è il motivo per cui il suono può viaggiare attraverso solidi cristallini senza grandi
- le distorsioni.
b) Esprimere la velocità del suono c nel cristallo per lunghezze d'onda che sono grandi rispetto al
spaziamento atomico a, in termini di quantità D, m e a. (1 pt.)
In molti casi il suono non si presenta come un'onda in piedi ma come un'onda in viaggio.
c) Sosteni che la standing wave considerata in parte a) può essere rappresentata come $i \cdot a$ più una combinazione di diverse onde viaggianti della forma
$$x'_i = \hat{x}'\,\sin\!\left(\omega'\,t - i\,a\,k' - \phi'\right)$$
I numeri d'onda $k'$ e le fasi $\phi'$ possono prendere qualsiasi valore reale, mentre le frequenze angolari $\omega'$ possono essere solo positive. - 2 punti

In the following, onde sonore in un cristallo di diamante cuboidal
sono ora considerati come un esempio concreto. Il diamante è da essere orientato in modo che i suoi bordi corrano paralleli a un sistema di coordinate cartesiane. Gli effetti della struttura tridimensionale del cristallo sono da essere
Negliziati, in modo che i risultati precedenti possano essere utilizzati. Tu puoi
utilizzare i seguenti valori per il cristallo di diamante:
Spaziamento atomico nel cristallo di diamante:
$a = 1{,}78 \cdot 10^{-10}\ \text{m}$
Massa atomica per diamante:
$m = 12{,}01\ \text{u}$
(u è l'unità di massa atomica)
Speed of sound in diamond:
$c = 1{,}8 \cdot 10^4\ \text{m s}^{-1}$
Indice refrattivo di diamante:
$n = 2{,}42$
Nel cristallo, una ondata di suono di frequenza $f = 1{,}0$ GHz è generata nella direzione z.
d) Determine la lunghezza d'onda $\lambda$ della onda in piedi e mostra che alla data frequenza la proporzionalità tra la frequenza angolare $\omega$ e il numero d'onda k si mantiene a un buon
Approximation. - 2 punti
Il cristallo è ora irradiato ulteriormente lungo l'asse x con un raggio laser di lunghezza d'onda $\lambda_L = 630$ nm.
Passando attraverso il cristallo, il fascio laser è sparso più fortemente nei luoghi dove il stand
Sound wave is compressed than at other locations. Questi luoghi formano quindi
una griglia ottica per il raggio laser.
e) Determine l'angolo all'indiffracted beam at which the first principal maximum of the
si può vedere il modello di diffrazione dietro il cristallo. - 4 punti
Le onde sonore considerate possono anche essere interpretate quantum mechanically. Proprio come un raggio laser è composto da singoli quantitativi di luce, i fotoni, si immagina che l'onda sonora sia composta da un
Numero di vibrazione quantica. Il quantum delle onde sonore è chiamato un "phonon". Per la situazione attuale, supponiamo che un fonone abbia le stesse proprietà che
- Un fotone. In particolare, la sua energia dovrebbe essere correlata alla frequenza via $E = h f$,
dove h indica la costante di Planck. I fotoni del fascio laser possono, con un
- Certo probabilità, assorbire fononi.
(f) Esplorare il massimo principale che si verifica sopra e sotto il fascio non sfocato con l'aiuto
della macchine quantistiche. Determine, quindi per questo punto di vista, l'angolo
a un fascio non frazionato, al quale il primo massimo principale del modello di diffrazione è stato
Crystal può essere visto.
State what condition the wavelengths $\lambda$ and $\lambda_L$ must satisfy so that the classically determined diffraction angle agrees well with that from the quantum mechanical consideration.
(6 punti)

**Topic:** [[Oscillations & Waves]], [[Wave Optics]], [[Modern-Quantum Physics]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Superposition Principle (metodo)|Superposition Principle]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Atom (object)|Atom]], [[Spring (object)|Spring]], [[Diffraction Grating (object)|Diffraction Grating]], [[Photon (object)|Photon]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1QnwZuN7zt7ag83rZc4013PtLRPBcSkzg/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="IPhO 2014 — Quesito 3" data-tags="kg/prova,paese/Germania,comp/IPhO,cluster/Fisica Moderna,object/gas"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 3 Tropical Cyclones
(30 pts.)
Storm systems in tropical latitudes
can have significantly higher wind speeds and thereby be significantly more
destructive than most storms, for
example in Germany. The large-area heated sea surface near the
equator plays an essential role as an energy supplier for
the storms.
Fundamental properties of these cyclones can be investigated with a simplified
thermodynamic model, as shown in Figure 3.
Consider a small air parcel of mass
$\Delta m$ that moves, at the level of the sea surface,
from the high-pressure region at A to the outer
edge of the storm center (B).
Fig. 3: Cross-section sketch for the motion of an air parcel in a tropical cyclone. z gives
the height above the sea surface and r the
distance from the center of the storm.
The temperature of the air remains constant and equal to the sea temperature $T_1$; however, seawater
continually evaporates, so that the humidity in the air parcel increases.
Near the storm center the air is then saturated and the additionally absorbed humidity rains out. As a result the air masses rise to great heights and cool down to the
temperature $T_2$ of the tropopause. This process from B to the region marked C in
the figure proceeds, to a good approximation, without heat exchange with the surroundings. At roughly constant temperature the air then travels along the tropopause again from the center of the storm
outward and releases heat in the form of radiation. Finally the cooled air sinks down again
to region A. This process too occurs without significant heat exchange. In this
way a thermodynamic cycle arises, which in this model is assumed to be reversible.
a) Determine the heat $Q_1$ absorbed by the air parcel along the path from A to B.
The partial pressure of the water vapor may at all times be assumed very small compared to the
air pressure. Express the result in terms of the mass $\Delta m$, the mass
$\Delta m_\text{Dampf}$ of the absorbed water vapor, the pressures $p_A$ and $p_B$ at A and B respectively, the temperature
$T_1$ as well as occurring constants. (10 pts.)
b) Derive an expression for the total work W done on the air parcel during the cycle and express it in terms of the quantities used in part a)
as well as $T_2$. (6 pts.)
Assume that about 50% of the work done on the air parcel leads directly to an increase of the
rotational energy of the air parcel about the center of the storm on the path from A to B.
c) Give the rotation speed of the cyclone $v_B$ at the edge of the center in terms of the quantities used in the previous parts and the rotation speed
$v_A$ at the outer edge of the storm. (3 pts.)

For the last parts use the following numerical values:
Universal gas constant
$R = 8{,}314\ \text{J mol}^{-1}\,\text{K}^{-1}$
Temperature at the sea surface
$T_1 = 303\ \text{K}$
Temperature at the tropopause
$T_2 = 213\ \text{K}$
Air pressure at A (edge of the cyclone)
$p_A = 1000\ \text{mbar}$
Air pressure at B (edge of the storm center)
$p_B = 950\ \text{mbar}$
Saturation vapor pressure over water
$E_W = 43\ \text{mbar}$
at pressure $p_B$ and temperature $T_1$
Mean molar mass of air
$M_L = 29 \cdot 10^{-3}\ \text{kg mol}^{-1}$
Molar mass of water
$M_W = 18 \cdot 10^{-3}\ \text{kg mol}^{-1}$
Heat of vaporization of water at temperature $T_1$
$\lambda_W = 2{,}41 \cdot 10^6\ \text{J kg}^{-1}$
Relative humidity of the air at A
$\phi = 75\%$
d) Determine, for $v_A \approx 10\ \text{m s}^{-1}$, the rotation speed of the cyclone $v_B$ at the edge of the
center. (4 pts.)
Note: If you were unable to determine the value for the rotation speed, you may
use the substitute value $v_B = 250\ \text{km h}^{-1}$ for the following parts.
The rotation speed v of the air in a cyclone is, outside the center of the storm,
approximately proportional to the inverse square root of the distance r, i.e. $v \sim 1/\sqrt{r}$.
e) Calculate the approximate diameter of the cyclone considered, under the assumption
that the point B is at $r \approx 10$ km. (2 pts.)
f) Estimate the rotational energy of the entire cyclone and compare this
value with the annual primary energy consumption in Germany, which in 2011 was about 14 exajoules.
For this, assume a constant air density of $1{,}2\ \text{kg m}^{-3}$ and a height of the cyclone
of about 12 km. (4 pts.)
g) When the cyclone hits land, its energy supply is cut off and it becomes
weaker. Assume that the cyclone considered completely dissipates on land within about 10
days and estimate what average power the cyclone
releases in doing so. (1 pt.)

<!--fig:start-->
![[_attachments/45_IPhO_2014_2Rd_Aufgaben/45_IPhO_2014_2Rd_Aufgaben_p5_f2.png]]
*cross-section of tropical cyclone, z-r*
<!--fig:end-->

**Topic:** [[Thermodynamics]], [[Fluid Mechanics]], [[Newtonian Mechanics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]], [[Ideal Gas Law (metodo)|Ideal Gas Law]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Gas (object)|Gas]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1QnwZuN7zt7ag83rZc4013PtLRPBcSkzg/view)


<div class="qlang-split" data-lang="it"></div>

**Problema 3 Cicloni tropicali (30 punti)**
I sistemi temporaleschi nelle latitudini tropicali possono raggiungere velocità del vento significativamente maggiori e quindi essere notevolmente più distruttivi rispetto alla maggior parte dei temporali, ad esempio in Germania. La superficie marina estesa e riscaldata vicino all'equatore svolge un ruolo essenziale come fonte di energia per questi sistemi temporaleschi.

Proprietà fondamentali di questi cicloni possono essere studiate mediante un modello termodinamico semplificato, come mostrato nella Figura 3.

Si consideri un piccolo pacchetto d'aria di massa $\Delta m$ che si muove, al livello della superficie marina, dalla regione ad alta pressione in A all'estremità esterna del centro dell'uragano (B).

Fig. 3: Schizzo in sezione per il moto di un pacchetto d'aria in un ciclone tropicale. z indica l'altezza rispetto alla superficie marina e r la distanza dal centro dell'uragano.

La temperatura dell'aria rimane costante e uguale alla temperatura del mare $T_1$; tuttavia, l'acqua di mare evapora continuamente, così che l'umidità nel pacchetto d'aria aumenta.

Vicino al centro dell'uragano l'aria diventa saturata e l'umidità aggiuntivamente assorbita precipita sotto forma di pioggia. Di conseguenza, le masse d'aria salgono fino a grandi altezze e si raffreddano sino alla temperatura $T_2$ della tropopausa. Questo processo dal punto B alla regione contrassegnata con C nella figura procede, in buona approssimazione, senza scambio di calore con l'ambiente esterno. A temperatura approssimativamente costante, l'aria quindi si muove nuovamente lungo la tropopausa dal centro dell'uragano verso l'esterno e rilascia calore sotto forma di radiazione. Infine, l'aria raffreddata ricade nuovamente nella regione A. Anche questo processo avviene senza scambio significativo di calore. In tal modo si instaura un ciclo termodinamico, che in questo modello è assunto reversibile.

a) Determinare il calore $Q_1$ assorbito dal pacchetto d'aria lungo il percorso da A a B.
La pressione parziale del vapore acqueo può essere considerata in ogni momento molto piccola rispetto alla pressione dell'aria. Espriete il risultato in termini della massa $\Delta m$, della massa $\Delta m_\text{Dampf}$ del vapore acqueo assorbito, delle pressioni $p_A$ e $p_B$ nei punti A e B rispettivamente, della temperatura $T_1$ nonché delle costanti che intervengono. (10 punti)

b) Derivare un'espressione per il lavoro totale W compiuto sull'elemento d'aria durante il ciclo e esprimerlo in termini delle grandezze utilizzate al punto a) nonché di $T_2$. (6 punti)

Si assuma che circa il 50% del lavoro compiuto sull'elemento d'aria porti direttamente a un aumento dell'energia rotazionale dell'elemento d'aria rispetto al centro dell'uragano lungo il percorso da A a B.

c) Esprimere la velocità di rotazione dell'uragano $v_B$ al bordo del centro in termini delle grandezze utilizzate nei punti precedenti e della velocità di rotazione $v_A$ al bordo esterno dell'uragano. (3 punti)

Per le ultime parti utilizzare i seguenti valori numerici:
Costante universale dei gas
$R = 8{,}314\ \text{J mol}^{-1}\,\text{K}^{-1}$
Temperatura alla superficie del mare
$T_1 = 303\ \text{K}$
Temperatura al tropopausa
$T_2 = 213\ \text{K}$
Pressione dell'aria in A (bordo del ciclone)
$p_A = 1000\ \text{mbar}$
Pressione dell'aria in B (bordo del centro della tempesta)
$p_B = 950\ \text{mbar}$
Pressione parziale di saturazione del vapore acqueo sull'acqua
$E_W = 43\ \text{mbar}$ alla pressione $p_B$ e temperatura $T_1$
Massa molare media dell'aria
$M_L = 29 \cdot 10^{-3}\ \text{kg mol}^{-1}$
Massa molare dell'acqua
$M_W = 18 \cdot 10^{-3}\ \text{kg mol}^{-1}$
Calore di vaporizzazione dell'acqua alla temperatura $T_1$
$\lambda_W = 2{,}41 \cdot 10^6\ \text{J kg}^{-1}$
Umidità relativa dell'aria in A
$\phi = 75\%$

d) Determinare, per $v_A \approx 10\ \text{m s}^{-1}$, la velocità di rotazione del ciclone $v_B$ al bordo del centro. (4 punti)
Nota: Se non sei riuscito a determinare il valore della velocità di rotazione, puoi utilizzare il valore sostitutivo $v_B = 250\ \text{km h}^{-1}$ per le parti successive.

La velocità di rotazione v dell'aria in un ciclone, al di fuori del centro della tempesta, è approssimativamente proporzionale all'inverso della radice quadrata della distanza r, cioè $v \sim 1/\sqrt{r}$.

e) Calcolare il diametro approssimativo del ciclone considerato, nell'ipotesi che il punto B si trovi a $r \approx 10$ km di distanza dal centro. (2 punti)

f) Stimare l'energia rotazionale dell'intero ciclone e confrontarla con il consumo energetico primario annuo in Germania, che nel 2011 era di circa 14 esajoule.
Per questo, assumere una densità dell'aria costante di $1{,}2\ \text{kg m}^{-3}$ e un'altezza del ciclone di circa 12 km. (4 punti)

g) Quando il ciclone raggiunge la terraferma, il suo approvvigionamento energetico viene interrotto e si indebolisce. Supponi che il ciclone considerato si dissipi completamente sulla terraferma in circa 10 giorni e stimare la potenza media che il ciclone rilascia durante questo processo. (1 punto.)

<!--fig:start-->
![[_attachments/45_IPhO_2014_2Rd_Aufgaben/45_IPhO_2014_2Rd_Aufgaben_p5_f2.png]]
*cross-section of tropical cyclone, z-r*
<!--fig:end-->



<span class="atom-split" id="q04" data-atom="q04" data-title="IPhO 2014 — Quesito 4" data-tags="kg/prova,paese/Germania,comp/IPhO,cluster/Fisica Moderna,object/ball"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 4 Experimental Problem - Big Jumps with Small Balls
(30 pts.)
If one lets a table tennis ball fall vertically onto
a solid surface, it usually bounces many times before coming to rest. In doing so, the bounce duration T,
i.e. the time between two successive impacts with the surface, slowly decreases. In
this problem you are to investigate these impacts with the help of audio recording software.
As materials you may use in this experiment
table tennis balls, a computer or other device with audio recording software1,
a ruler, various surfaces as well as paper.
Fig. 4: Audio recording of the bouncing of a table tennis ball on a solid surface.
For the mass m and the diameter d of a table tennis ball you may use the values prescribed for competitions, $m = (2{,}70 \pm 0{,}05)\ \text{g}$ and $d = (40{,}0 \pm 0{,}5)\ \text{mm}$. You may also determine the
values for your ball with a scale and a caliper, e.g. at school.
Theoretical preliminary considerations
Since the ball is relatively light, the influence of the surrounding air cannot necessarily be neglected.
If a body falls with a velocity v through a gaseous medium of density $\rho$, it
is slowed, over a large range of velocities, by a friction force
$$F_R = \tfrac{1}{2}\,c_W\,A\,\rho\,v^2$$
Here A denotes the cross-sectional area of the body perpendicular to the motion and $c_W$
the so-called drag coefficient, which depends on the shape of the body. For a sphere
$c_W \approx 0{,}4$.
In the following problems use the value $\rho_L = 1{,}20\ \text{kg m}^{-3}$ for the density of air and
$g = 9{,}81\ \text{m s}^{-2}$ for the gravitational acceleration on Earth.
a) The stated mass of the ball is the mass that a scale displays under atmospheric conditions.
Calculate what mass the scale would display in a vacuum. (1 pt.)
b) Estimate theoretically up to which bounce duration T the motion of the table tennis ball is only
weakly slowed by air friction, i.e. for which range of the bounce duration the
influence of air friction on the motion can be neglected to a good approximation. (2 pts.)
Investigation without taking air friction into account
At each impact with the surface the table tennis ball loses a relatively small part of its kinetic
energy. If the ball strikes the surface with a kinetic energy $E_\text{kin}$, then for the
kinetic energy $E'_\text{kin}$ directly after the impact
$$E'_\text{kin} = \eta\,E_\text{kin}\,.$$
The factor $\eta$, assumed constant, is a measure of the elasticity of the impact.
1Suitable, for example, is the free open-source software Audacity, which is available for various platforms.
c) Determine experimentally the elasticity factor $\eta$ for the impact of the table tennis ball for two
different surfaces. For this, let the ball fall from a fixed height onto the surface.
Carry out the experiment in such a way that you can neglect air friction and
estimate the error of your result. (11 pts.)
d) Determine from your measurements, in each case, the time from the first impact on the surface
until the ball stops bouncing. Also carry out an error estimate for this. (3 pts.)
Bouncing with air friction taken into account
Taking air friction into account makes the investigation of the ball's motion more involved.
In a fall from a very great height the ball moves, after a longer fall distance, with a
constant velocity, the terminal velocity $v_\infty$. More precisely, for the fall velocity v
of the ball as a function of the fall time t,
$$|v(t)| = v_\infty\,\tanh\!\left(\frac{g\,t}{v_\infty}\right).$$
Here it is assumed that the ball is initially at rest. For an upward motion
that begins with the vertical velocity $v_0$ at $t = 0$, however,
$$|v(t)| = v_\infty\,\tan\!\left(\arctan\!\left(\frac{v_0}{v_\infty}\right) - \frac{g\,t}{v_\infty}\right)$$
as long as the argument of the tangent is positive. If the velocity of the ball during bouncing
is small compared to the terminal velocity, the rise and fall durations between two impacts
with the floor are, to a good approximation, equal. In the evaluation, approximations
for the occurring trigonometric functions can also be helpful. Thus, for $|x| \ll 1$, for example $\tanh(x) = x - \tfrac{1}{3}x^3 + \tfrac{2}{15}x^5 + \ldots$
e) Compare the bounce durations for each pair of two successive bounces and now determine
experimentally, taking air friction into account, the elasticity factor $\eta$ again for
bouncing on the two surfaces. Compare the obtained values with those you determined without
taking air friction into account. (9 pts.)
f) Determine from your measured values also the drag coefficient $c_W$ of the table tennis ball.
An error estimate is not required for this part. (4 pts.)
General note
In all parts, describe your theoretical considerations, the approximations made, the
experimental setups, the experimental procedure and the evaluation in such a way that they are easy to follow.
The IPhO team wishes you much fun and success in the 2nd Round!

<!--fig:start-->
![[_attachments/45_IPhO_2014_2Rd_Aufgaben/45_IPhO_2014_2Rd_Aufgaben_p7_f3.png]]
*audio recording of ping-pong ball bounces*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Fluid Mechanics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Ball (object)|Ball]]
**Fonte:** [Testo (PDF) — p.7](https://drive.google.com/file/d/1QnwZuN7zt7ag83rZc4013PtLRPBcSkzg/view)


<div class="qlang-split" data-lang="it"></div>

**Problema 4 Problema sperimentale - Grandi salti con piccole palline (30 punti)**
Se si lascia cadere verticalmente una pallina da ping-pong su una superficie solida, di solito rimbalza molte volte prima di fermarsi. In questo processo, la durata del rimbalzo T, ovvero il tempo tra due impatti successivi con la superficie, diminuisce lentamente. In questo problema dovrai indagare questi impatti servendoti del software per la registrazione audio.
Come materiali puoi utilizzare palline da ping-pong, un computer o altro dispositivo con software per la registrazione audio¹, una riga, varie superfici e carta.
Figura 4: Registrazione audio del rimbalzo di una pallina da ping-pong su una superficie solida.
Per la massa m e il diametro d di una pallina da ping-pong puoi utilizzare i valori prescritti per le competizioni, $m = (2{,}70 \pm 0{,}05)\ \text{g}$ e $d = (40{,}0 \pm 0{,}5)\ \text{mm}$. Puoi anche determinare i valori per la tua pallina con una bilancia e un calibro, ad esempio a scuola.

Considerazioni teoriche preliminari
Poiché la pallina è relativamente leggera, l'influenza dell'aria circostante non può essere necessariamente trascurata.
Se un corpo cade con velocità v attraverso un mezzo gassoso di densità $\rho$, viene rallentato, in un ampio intervallo di velocità, da una forza d'attrito
$$F_R = \tfrac{1}{2}\,c_W\,A\,\rho\,v^2$$.
Qui A indica l'area della sezione trasversale del corpo perpendicolare al moto e $c_W$ è il cosiddetto coefficiente di resistenza, che dipende dalla forma del corpo. Per una sfera
$c_W \approx 0{,}4$.
Nei seguenti problemi utilizza il valore $\rho_L = 1{,}20\ \text{kg m}^{-3}$ per la densità dell'aria e
$g = 9{,}81\ \text{m s}^{-2}$ per l'accelerazione di gravità sulla Terra.

a) La massa indicata è quella che una bilancia mostra in condizioni atmosferiche.
Calcola quale massa la bilancia mostrerebbe nel vuoto. (1 punto)
b) Stimare teoricamente fino a quale durata del rimbalzo T il moto della pallina da ping-pong è soltanto debolmente rallentato dall’attrito dell’aria, ovvero per quale intervallo della durata del rimbalzo l’influenza dell’attrito aerodinamico sul moto può essere trascurata con buona approssimazione. (2 punti)

Indagine senza considerare l’attrito dell’aria
In ogni impatto con la superficie, la pallina da ping-pong perde una frazione relativamente piccola della sua energia cinetica. Se la pallina colpisce la superficie con un’energia cinetica $E_\text{kin}$, allora per l’energia cinetica $E'_\text{kin}$ subito dopo l’impatto vale
$$E'_\text{kin} = \eta\,E_\text{kin}\,.$$
Il fattore $\eta$, supposto costante, è una misura dell’elasticità dell’impatto.
1Adatto, ad esempio, è il software libero e open-source Audacity, disponibile per diverse piattaforme.

c) Determinare sperimentalmente il fattore di elasticità $\eta$ per l’impatto della pallina da ping-pong su due superfici diverse. A tale scopo, far cadere la pallina da un’altezza fissa sulla superficie.
Effettuare l’esperimento in modo tale da poter trascurare l’attrito dell’aria e stimare l’errore del risultato. (11 punti)

d) Determinare dai propri dati, in ogni caso, il tempo dal primo impatto con la superficie fino a quando la pallina smette di rimbalzare. Effettuare anche una stima dell’errore per questo valore. (3 punti)

Rimbalzo considerando l’attrito dell’aria
Il considerare l’attrito dell’aria rende l’indagine del moto della pallina più complessa.
In una caduta da un’altezza molto grande, dopo un percorso di caduta più lungo, la pallina si muove con una velocità costante, detta velocità terminale $v_\infty$. Più precisamente, per la velocità di caduta v della pallina in funzione del tempo di caduta t vale
$$|v(t)| = v_\infty\,\tanh\!\left(\frac{g\,t}{v_\infty}\right).$$
Si assume qui che la pallina inizialmente sia ferma. Per un moto verso l’alto che inizia con la velocità verticale $v_0$ al tempo $t = 0$, invece
$$|v(t)| = v_\infty\,\tan\!\left(\arctan\!\left(\frac{v_0}{v_\infty}\right) - \frac{g\,t}{v_\infty}\right)$$ fintanto che l'argomento della tangente è positivo. Se la velocità della palla durante i rimbalzi è piccola rispetto alla velocità terminale, le durate di salita e discesa tra due impatti con il pavimento sono, a buona approssimazione, uguali. Nella valutazione possono essere utili anche approssimazioni per le funzioni trigonometriche che compaiono. Così, ad esempio per $|x| \ll 1$ si ha $\tanh(x) = x - \tfrac{1}{3}x^3 + \tfrac{2}{15}x^5 + \ldots$.

e) Confronta le durate dei rimbalzi per ciascuna coppia di due rimbalzi consecutivi e determina ora sperimentalmente, tenendo conto dell'attrito aerodinamico, il fattore di elasticità $\eta$ per i rimbalzi sui due diversi materiali. Confronta i valori ottenuti con quelli determinati trascurando l'attrito aerodinamico. (9 punti)

f) Determina dai tuoi valori misurati anche il coefficiente di attrito aerodinamico $c_W$ della palla da ping-pong.

Non è richiesta una stima dell'errore per questo punto. (4 punti)

Nota generale
In tutte le parti, descrivi in modo chiaro e comprensibile i tuoi ragionamenti teorici, le approssimazioni effettuate, il montaggio sperimentale, la procedura sperimentale e l'analisi dei risultati.

Il team della IPhO ti augura tanti divertimenti e successi nella seconda fase!

<!--fig:start-->
![[_attachments/45_IPhO_2014_2Rd_Aufgaben/45_IPhO_2014_2Rd_Aufgaben_p7_f3.png]]
*audio recording of ping-pong ball bounces*
<!--fig:end-->
