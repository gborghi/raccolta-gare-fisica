---
title: APhO 2023 — Teorica
tipo: prova
tags:
  - kg/prova
  - paese/asia
  - comp/APhO
---
<div class="atom-reader" data-prova="apho_2023_theory"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="APhO 2023 — Teorica — Quesito 1" data-tags="kg/prova,paese/Asia,comp/APhO,topic/gravitation,argomento/gravitazione-e-astrofisica,difficolta/5,multidisciplina/multi,object/satellite"></span>

<div class="qlang-switch" data-default="en"></div>



**ISS Orbital Decay Dynamics [10.0 points]**

### Introduction

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q1_p1_f1.png]]
*Figure 1: The International Space Station orbiting above the Earth.*
<!--fig:end-->

The ISS is currently maintained in a nearly circular orbit with a minimum mean altitude of $370\,km$ and a maximum of $460\,km$, in the center of the thermosphere, at an inclination of $\theta = 51.6^\circ$ (degrees) to Earth's equator. The trajectory of the spacecraft is similar to a spiral with a slowly changing distance from the station to the Earth's surface, and during one cycle of revolution the change in altitude is inconsiderable.

The ISS mass is $M_S = 4.5 \times 10^5\,kg$ and overall length is $L_S = 109\,m$. Huge solar panels with a width of $W_S = 73\,m$ provide the ISS with electrical energy [NASA Official Report (2023)].

Including all batteries and other parts, the effective cross area (section) of the station is approximately $S \approx 2.5 \times 10^3\ \mathrm{m^2}$ [European Space Agency, SDC6-23].

The ISS orbital decay is caused by one or more mechanisms which absorb energy from the orbital motion, the essential ones being:

- atmospheric drag at orbital altitude is caused by frequent collisions of gas molecules with the satellite,
- the Ampere force arising from the motion of the conductive apparatus in the Earth's magnetic field,
- the interaction with the atomic oxygen ions.

"... In May 2008, the altitude was 350 kilometers, the ISS lost $4.5\,km$ and was re-boosted by the Progess-60 supply ship by $5.5\,km$. Again, the ISS continued to lose altitude by $5.5\,km$ ..." [https://mod.jsc.nasa.gov]

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q1_p2_f1.png]]
*Figure 2: The altitude of ISS ($km$) over the years.*
<!--fig:end-->

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q1_p2_f2.png]]
*Figure 3: The ISS mean height ($km$) in 2022-2023.*
<!--fig:end-->

"... The ISS loses up to $330\,ft$ ($100\,m$) of altitude each day ..." [NASA Control Data (2021)]. In 2023 the ISS flies at altitudes of 410 km, with an orbital decay about $70\,m$ every day ($\sim 2\,km$ per month), and during magnetic storms the daily descent reaches $300\,m$. The ISS accomplishes the de-orbit maneuvers by using the propulsion capabilities of the ISS and its visiting vehicles [International Space Station Transition Report (2022)].

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q1_p3_f1.png]]
*Figure 4: ISS model with the cross sections from different aspect angles ($dm^2$). The CROC provides $2481\,m^2$ cross section.*
<!--fig:end-->

### Denotations and Physical constants

| Quantity | Symbol | Value |
|---|---|---|
| Universal gas constant | $R$ | $8.31\ J\cdot K^{-1}\cdot mol^{-1}$ |
| Avogadro's number | $N_A$ | $6.022\cdot 10^{23}\ mol^{-1}$ |
| The molar mass of gas (for air) | $\mu$ | $0.029\ kg\cdot mol^{-1}$ |
| Mass of the Earth | $M_E$ | $5.97\cdot 10^{24}\ kg$ |
| Radius of the Earth | $R_E$ | $6.38\cdot 10^{6}\ m$ |
| Gravitational universal constant | $G$ | $6.67\cdot 10^{-11}\ m^3\cdot s^{-2}\cdot kg^{-1}$ |
| Density of air at Earth's surface | $\rho_0$ | $1.29\ kg/m^3$ |
| Gravitational acceleration at Earth's surface | $g_0$ | $9.81\ m\cdot s^{-2}$ |
| Average magnitude of Earth's magnetic field | $B$ | $5.0\cdot 10^{-5}\ T$ |
| The electron absolute charge | $e$ | $1.60\cdot 10^{-19}\ C$ |

### Part A: Modified barometric formula [2.0 points]

The pressure of atmospheric air, composed mainly of neutral $O_2$ and $N_2$ molecules, can be found by using the Clapeyron-Mendeleev law (the ideal gas law):
$$pV = \frac{M}{\mu}RT,$$
where $p$, $V$, $T$, $M$ and $\mu$ are the pressure, volume, temperature, mass and molar mass of a portion of air, $R$ is the ideal gas universal constant.

There are two equations for computing air pressure as a function of height. The first equation is applicable to the standard model of the troposphere ($h < 100\,km$) in which the temperature is assumed to vary with altitude at a lapse rate.

The second equation belongs to the standard model of the thermosphere ($h > 250\,km$) in which the temperature is assumed not to change considerably with altitude and is applicable to ISS.

We may assume that all pressure is hydrostatic and isotropic (i.e., it acts with equal magnitude in all directions).

**A.1** *(0.5pt)* Derive the general integral expression for the air pressure $p_h$ at ISS altitude $h$. This equation is called the general barometric formula. Hint: the temperature and gravitation may depend on $h$.

*Remark 1.* The temperature of Earth's thermosphere at altitude $300-600\,km$ does not change considerably and reaches averagely about $800-900\,K$ on the solar side [NASA data]. Therefore, one may put $T_h = T = const$ by investigating the ISS orbital flight. Particularly, since the spacecraft spends almost half of its flight time in the shadow side of the Earth, where the temperature drops sharply, we may take the value of $T = 425\,K$ as the average temperature at these altitudes. This temperature is also in agreement with the air density value $\rho_h \sim 10^{-12}\,kg/\mathrm{m^3}$ [MSISE-90 Model of Earth's Upper Atmosphere] at $h = 400\,km$.

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q1_p4_f1.png]]
*Figure 5: The Earth's thermosphere.*
<!--fig:end-->

**A.2** *(0.3pt)* Write down the air pressure (the standard barometric formula) $p_h^{sta}$, when the temperature and gravitation $g_h$ do not depend on $h$. Calculate the parameter $h_0 = \dfrac{RT}{\mu g_0}$ for $T = 425\,K$.

**A.3** *(0.6pt)* Write down the air pressure (the improved barometric formula) $p_h^{imp}$ when the temperature is constant but the gravitation depends on $h$. Hint: Use the leading-order correction only, with accuracy $O(z_h^2)$. Hereby, the flight altitude $h$ above the Earth's surface is significantly smaller than the Earth's radius: $z_h \doteq h/R_E \ll 1$.

**A.4** *(0.4pt)* Write down the ratio of the 'standard' and 'improved' versions of the barometric formula $p_h^{imp}/p_h^{sta}$. Estimate it for $h = 4.0 \times 10^5\,m$. Further use the 'improved' version.

**A.5** *(0.2pt)* Write down the air density $\rho_h$ and the concentration of neutral air molecules $n_h$ at height $h$, with accuracy $O(z_h^2)$.

### Part B: Orbital deceleration and station descent rate [3.0 points]

Let us consider the problem of determining the rate of orbital decay of a satellite with mass $M_S$ that experiences constant friction force $\vec{F}_{drag}$ acting on it. We assume that the decrease in altitude $dh$ is much less than the flight altitude $h$ itself ($dh \ll h$).

**B.1** *(0.5pt)* Write down the satellite velocity $v_h$ and revolution period $\tau_h$ on a stable orbit of altitude $h$.

**B.2** *(0.5pt)* Write down the total energy $E_S$ of a satellite moving along a circular orbit with radius $R_E + h$.

**B.3** *(1.0pt)* The total decelerating force exerted on a satellite of constant mass is given by some external braking force $\vec{F}_{drag}$. As a result, the ISS slows down and its altitude decreases by a height $dh$ for a small time interval, $dt$. Write down the equation for the total energy balance of the ISS and surrounding system, given a value of $F_{drag}$.

**B.4** *(0.5pt)* Define the rate of descent (de-orbiting) speed $u_h$ of the satellite. Hint: The de-orbiting speed depends on the friction force, and on the altitude of the satellite, and on the mass of the satellite.

**B.5** *(0.5pt)* Write down the amount of descent $H_h$ for a revolution around the Earth and the total time $T_h$ for which the satellite will fall from the altitude $h$ to the earth's surface due to the friction. Hint: Take into account relations $h_0 \ll h \ll R_E$.

### Part C: Atmospheric drag [1.0 points]

The speed of the satellite $v$ is many times greater than the average velocities (hundreds m/s) of the thermal motion of atmospheric molecules at a height $h \approx 300 - 400\,km$, so we can assume that the molecules were at rest before the collision with the ISS. To roughly estimate the drag force, we assume that after the collision the molecules acquire the same speed as the satellite.

**C.1** *(0.5pt)* Write down the air drag force $F_{air}$, the de-orbiting descending velocity $u_h^{air}$ and the descent rate $H_h^{air}$.

**C.2** *(0.5pt)* Define the total time $T_h^{air}$ for which the satellite will fall from the altitude $h$ to the earth's surface due to air drag effect. Hint: Take into account relations $h_0 \ll h \ll R_E$.

### Part D: Drag by atomic oxygen ion [1.0 points]

In the thermosphere, under the influence of ultraviolet and X-ray solar radiation and cosmic radiation, air ionization occurs ("polar lights"). Unlike $O_2$, $N_2$ does not undergo strong dissociation under the action of solar radiation, therefore, in general, there is much less atomic nitrogen $N$ in the Earth's upper atmosphere than atomic oxygen. At altitudes above $250\,km$, atomic oxygen $O$ predominates. Layers containing electrons and ions of oxygen atoms appear on the day side of the atmosphere. In this case, the concentration of atomic oxygen ions reaches $n_{ion} \sim 10^{12}\ m^{-3}$.

**D.1** *(0.3pt)* Write down the decelerating force $F_{ion}$, averaged during a 24-hour, associated with the mechanical collisions of these particles. Take into account the strong decrease in ionized layers are negligible during the night. Express the density of ionized oxygen molecules $\rho_{ion}$.

**D.2** *(0.7pt)* Define the speed of fall of the satellite $u_h^{ion}$ due to deceleration by ions of atomic oxygen. Write down the descent rate $H_h^{ion}$ for a revolution caused by the ionization effect. Hint: Take into account relations $h_0 \ll h \ll R_E$.

### Part E: Drag by the Earth's magnetic field [2.0 points]

We consider the influence on the motion of the satellite of the Earth's magnetic field, the value of which near the Earth's surface is equal to $(3.5 - 6.5)\cdot 10^{-5}\,T$ with an average value of $B = 5\cdot 10^{-5}\,T$.

When a satellite moves at high speed in a magnetic field, an inducted electric current (electromotive force (EMF)) occurs in the current-conducting elements of the satellite's structure. This electromotive force causes a redistribution of electric charges in the current-conducting elements of the satellite structure. An electric field appears around the satellite, which affects the movement electrically charged particles in the environment. Electrons are attracted to those parts of the satellite that have a positive potential (relative to the middle part of the satellite), and positively charged ions are attracted to those parts of the satellite that have a negative potential. Electrons and ions that hit the surface of the satellite structures are combined into neutral oxygen atoms, while the electrons 'travel' in the satellite's conductive structures, creating an electric current. The satellite, moving in space, 'collects' electrons and ions from the surrounding space and collides with them. For a rough estimate of the magnitude of the current that can flow through the conductive structures of the satellite, we will assume that the collection occurs only from an area equal to the cross-sectional area $S$ of the satellite, and all ions and electrons participate in the creation of this current.

**E.1** *(0.6pt)* Evaluate approximately the magnitude of the induced electric current $I_{ind}$.

**E.2** *(0.6pt)* Determine an approximate expression for the induced 'braking' Ampere force $F_{ind}$ in the direction opposite to the direction of the satellite's motion. Let $\phi$ be the angle between the Earth magnetic field $\vec{B}$ along the longitude lines. To simplify, you may approximate the length of the satellite $L$ as the square root of the satellite area $S$. Additionally, instead of computing the average of $\sin(\phi)$, you may approximate it with $\sin(\pi/2 - \theta)$. You may use a discrete number of sample points to compute an average value.

**E.3** *(0.8pt)* Write down the descent speed $u_{ind}$ of the satellite due to Earth's magnetic field. Write down the descent rate $H_h^{ind}$ for a revolution caused by the magnetic drag effect. Hint: Take into account relations $h \ll R_E$.

### Part F: Numerical results and conclusion [1.0 points]

**F.1** *(0.4pt)* Calculate and fill Table 1 in the Answer Sheet.

**F.2** *(0.4pt)* Calculate and fill Table 2 in the Answer Sheet.

**F.3** *(0.2pt)* Rank these three orbital slowing processes in order of how strong an impact they have on ISS orbital altitudes higher than $380\,km$. For the International Space Station, orbiting at an altitude above $380\,km$, write down the most significant factors contributing to orbital decay.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1MGt2u1UM9fUkBTsgnEmUuy8kJqKh08fN/view)

**Topic:** [[Gravitation]], [[Fluid Mechanics]], [[Electromagnetism]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Satellite (object)|Satellite]]


<div class="qlang-split" data-lang="it"></div>

**ISS Dinamica di decadimento orbitale [10.0 punti]**

### Introduzione

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q1_p1_f1.png]]
*Figura 1: La Stazione Spaziale Internazionale in orbita sopra la Terra.*
<!--fig:end-->

La ISS è attualmente mantenuta in un'orbita quasi circolare con un'altitudine media minima di $370\,km$ e un massimo di $460\,km$, nel centro della termosfera, ad un'inclinazione di $\theta = 51.6^\circ$ (gradi) all'equatore terrestre. La traiettoria della sonda spaziale è simile a una spirale con una distanza che cambia lentamente dalla stazione alla superficie terrestre, e durante un ciclo di rivoluzione il cambiamento di altitudine è insignificante.

La massa della ISS è $M_S = 4.5 \times 10^5\,kg$ e la lunghezza complessiva è $L_S = 109\,m$. Grandi pannelli solari di $W_S = 73\,m$ di larghezza forniscono all'ISS energia elettrica [Rapporto ufficiale della NASA (2023)].

Con inclusione di tutte le batterie e altre parti, l'area incrociata effettiva (sezione) della stazione è di circa $S \approx 2.5 \times 10^3\ \mathrm{m^2}$ [Agenzia spaziale europea, SDC6-23].

Il decadimento orbitale dell'ISS è causato da uno o più meccanismi che assorbono l'energia dal movimento orbitale, i quali sono essenziali:

- la resistenza atmosferica ad altitudine orbitale è causata da frequenti collisioni di molecole di gas con il satellite,
- la forza di Ampere derivante dal movimento dell'apparecchio conduttore nel campo magnetico terrestre,
- l'interazione con gli ioni di ossigeno atomici.

"... Nel maggio 2008, l'altitudine era di 350 chilometri, la ISS ha perso $4.5\,km$ ed è stata rinforzata dalla nave di approvvigionamento Progess-60 da $5.5\,km$. Ancora una volta, l'ISS ha continuato a perdere altitudine da $5.5\,km$ ... "

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q1_p2_f1.png]]
*Figura 2: L'altitudine della ISS ($km$) nel corso degli anni.*
<!--fig:end-->

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q1_p2_f2.png]]
*Figura 3: Altezza media della ISS ($km$) nel 2022-2023.*
<!--fig:end-->

"... L'ISS perde fino a $330\,ft$ ($100\,m$) di altitudine ogni giorno ... " [Dati di controllo della NASA (2021)]. Nel 2023 l'ISS vola ad altitudini di 410 km, con un declino orbitale di circa $70\,m$ ogni giorno ($\sim 2\,km$ al mese), e durante le tempeste magnetiche la discesa giornaliera raggiunge $300\,m$. L'ISS realizza le manovre di sosta in orbita utilizzando le capacità di propulsione dell'ISS e dei suoi veicoli in visita [Rapporto sulla transizione della Stazione Spaziale Internazionale (2022) ].

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q1_p3_f1.png]]
*Figura 4: modello ISS con le sezioni incrociate da angoli di aspetto diversi ($dm^2$). Il CROC fornisce $2481\,m^2$ sezione trasversale.*
<!--fig:end-->

### Denotamenti e costanti fisiche

# Quantità # Simbolo # Valore #
|---|---|---|
| Universal gas constant | $R$ | $8.31\ J\cdot K^{-1}\cdot mol^{-1}$ |
| Avogadro's number | $N_A$ | $6.022\cdot 10^{23}\ mol^{-1}$ |
| The molar mass of gas (for air) | $\mu$ | $0.029\ kg\cdot mol^{-1}$ |
| Mass of the Earth | $M_E$ | $5.97\cdot 10^{24}\ kg$ |
| Radius of the Earth | $R_E$ | $6.38\cdot 10^{6}\ m$ |
| Gravitational universal constant | $G$ | $6.67\cdot 10^{-11}\ m^3\cdot s^{-2}\cdot kg^{-1}$ |
| Density of air at Earth's surface | $\rho_0$ | $1.29\ kg/m^3$ |
| Gravitational acceleration at Earth's surface | $g_0$ | $9.81\ m\cdot s^{-2}$ |
♬ Magnitude media del campo magnetico terrestre ♬ $B$ ♬ $5.0\cdot 10^{-5}\ T$
| The electron absolute charge | $e$ | $1.60\cdot 10^{-19}\ C$ |

### Parte A: Formula barometrica modificata [2,0 punti]

La pressione dell'aria atmosferica, composta principalmente da molecole neutre $O_2$ e $N_2$, può essere determinata utilizzando la legge di Clapeyron-Mendeleev (la legge dei gas ideali):
$$pV = \frac{M}{\mu}RT,$$
se $p$, $V$, $T$, $M$ e $\mu$ sono la pressione, il volume, la temperatura, la massa e la massa molare di una porzione di aria, $R$ è la costante universale ideale del gas.

Ci sono due equazioni per calcolare la pressione dell'aria come funzione dell'altezza. La prima equazione è applicabile al modello standard della troposfera ($h < 100\,km$) in cui si presume che la temperatura varia con l'altitudine a un ritmo di scadenza.

La seconda equazione appartiene al modello standard della termosfera ($h > 250\,km$) in cui si presume che la temperatura non cambi considerevolmente con l'altitudine ed è applicabile alla ISS.

Possiamo presumere che tutta la pressione sia idrostatica e isotròpica (cioè agisce con uguale magnitudine in tutte le direzioni).

**A.1** *(0,5pt) * Derivare l'espressione integrale generale della pressione dell'aria $p_h$ all'altitudine ISS $h$. Questa equazione è chiamata formula barometrica generale. Suggerimento: la temperatura e la gravità possono dipendere da $h$.

*Rimarca 1. * La temperatura della termosfera terrestre ad altitudine $300-600\,km$ non cambia considerevolmente e raggiunge in media $800-900\,K$ sul lato solare [dati della NASA]. Pertanto, si può mettere $T_h = T = const$ indagando il volo orbitale della ISS. In particolare, poiché la sonda trascorre quasi la metà del suo tempo di volo nel lato ombra della Terra, dove la temperatura scende notevolmente, possiamo prendere il valore di $T = 425\,K$ come la temperatura media a queste altitudini. Questa temperatura è anche in accordo con il valore di densità dell'aria $\rho_h \sim 10^{-12}\,kg/\mathrm{m^3}$ [Modelio MSISE-90 dell'atmosfera superiore della Terra] a $h = 400\,km$.

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q1_p4_f1.png]]
*Figura 5: Termosfera terrestre.*
<!--fig:end-->

**A.2** *(0.3pt) * Indicare la pressione dell'aria (la formula barometrica standard) $p_h^{sta}$, quando la temperatura e la gravità $g_h$ non dipendono da $h$. Calcolare il parametro $h_0 = \dfrac{RT}{\mu g_0}$ per $T = 425\,K$.

**A.3** *(0,6pt) * Indicare la pressione dell'aria (la formula barometrica migliorata) $p_h^{imp}$ quando la temperatura è costante ma la gravità dipende da $h$. Suggerimento: utilizzare solo la correzione di primo ordine, con precisione $O(z_h^2)$. In tal modo, l'altitudine di volo $h$ sopra la superficie terrestre è significativamente inferiore al raggio terrestre: $z_h \doteq h/R_E \ll 1$.

**A.4** *(0,4pt) * Scrivere il rapporto tra le versioni "standard" e "migliorate" della formula barometrica $p_h^{imp}/p_h^{sta}$. La stima è di $h = 4.0 \times 10^5\,m$. Usare ulteriormente la versione "migliorata".

**A.5 ** *(0.2pt) * Indicare la densità dell'aria $\rho_h$ e la concentrazione di molecole di aria neutrale $n_h$ ad altezza $h$, con precisione $O(z_h^2)$.

### Parte B: decelerazione orbitale e tasso di discesa della stazione [3.0 punti]

Consideriamo il problema di determinare il tasso di decadimento orbitale di un satellite con massa $M_S$ che sperimenta una forza di attrito costante $\vec{F}_{drag}$ che agisce su di esso. Supponiamo che la diminuzione dell'altitudine $dh$ sia molto inferiore all'altitudine di volo $h$ stessa ($dh \ll h$).

**B.1 ** *(0,5pt) * Scrivere la velocità del satellite $v_h$ e il periodo di rivoluzione $\tau_h$ su un'orbita stabile di altitudine $h$.

**B.2** *(0,5pt) * Indicare l'energia totale $E_S$ di un satellite che si muove lungo un'orbita circolare con raggio $R_E + h$.

**B.3 ** *(1.0pt) * La forza decelerante totale esercitata su un satellite di massa costante è data da una forza di frenata esterna $\vec{F}_{drag}$. Di conseguenza, la ISS rallenta e la sua altitudine diminuisce di un'altezza $dh$ per un piccolo intervallo di tempo, $dt$. Scrivere l'equazione per il bilancio energetico totale della ISS e del sistema circostante, dato un valore di $F_{drag}$.

**B.4** *(0,5pt) * Definire la velocità di discesa (deorbita) $u_h$ del satellite. Suggerimento: La velocità di decorrimento in orbita dipende dalla forza di attrito, dall'altitudine del satellite e dalla massa del satellite.

**B.5** *(0,5pt) * Scrivi la quantità di discesa $H_h$ per una rotazione attorno alla Terra e il tempo totale $T_h$ per il quale il satellite cadrà dall'altitudine $h$ alla superficie terrestre a causa dell'attrito. Suggerimento: tenere conto delle relazioni $h_0 \ll h \ll R_E$.

### Parte C: Resistenza atmosferica [1,0 punti]

La velocità del satellite $v$ è molte volte superiore alle velocità medie (cento m/s) del movimento termico delle molecole atmosferiche ad un'altezza $h \approx 300 - 400\,km$, quindi possiamo supporre che le molecole fossero in riposo prima della collisione con la ISS. Per stimare approssimativamente la forza di trazione, supponiamo che dopo la collisione le molecole acquisiscano la stessa velocità del satellite.

**C.1** *(0,5pt) * Indicare la forza di resistenza aerea $F_{air}$, la velocità di discesa di decorrere in orbita $u_h^{air}$ e il tasso di discesa $H_h^{air}$.

**C.2** *(0,5pt) * Definire il tempo totale $T_h^{air}$ per il quale il satellite cadrà dall'altitudine $h$ alla superficie terrestre a causa dell'effetto di resistenza dell'aria. Suggerimento: tenere conto delle relazioni $h_0 \ll h \ll R_E$.

### Parte D: Trascinare per ioni di ossigeno atomici [1,0 punti]

Nella termosfera, sotto l'influenza delle radiazioni solari ultraviolette e a raggi X e della radiazione cosmica, si verifica l'ionizzazione dell'aria ("luci polari"). A differenza di $O_2$, $N_2$ non subisce una forte dissociazione sotto l'azione della radiazione solare, quindi, in generale, nella superficie dell'atmosfera terrestre c'è molto meno azoto atomico $N$ rispetto all'ossigeno atomico. A altitudini superiori a $250\,km$ predominano gli ossigenati atomici $O$. Gli strati contenenti elettroni e ioni di atomi di ossigeno appaiono sul lato diurno dell'atmosfera. In questo caso, la concentrazione di ioni di ossigeno atomico raggiunge $n_{ion} \sim 10^{12}\ m^{-3}$.

**D.1** *(0.3pt) * Indicare la forza di rallentamento $F_{ion}$, media durante 24 ore, associata alle collisioni meccaniche di queste particelle. Si tiene conto del forte calo delle strati ionizzate sono trascurabili durante la notte. Esprimere la densità delle molecole di ossigeno ionizzato $\rho_{ion}$.

**D.2** *(0,7pt) * Definire la velocità di caduta del satellite $u_h^{ion}$ a causa della decelerazione da ioni di ossigeno atomico. Scrittore del tasso di discesa $H_h^{ion}$ per una rivoluzione causata dall'effetto di ionizzazione. Suggerimento: tenere conto delle relazioni $h_0 \ll h \ll R_E$.

### Parte E: Trascinate dal campo magnetico terrestre [2,0 punti]

Consideramo l'influenza sul movimento del satellite del campo magnetico terrestre, il cui valore vicino alla superficie terrestre è uguale a $(3.5 - 6.5)\cdot 10^{-5}\,T$ con un valore medio di $B = 5\cdot 10^{-5}\,T$.

Quando un satellite si muove ad alta velocità in un campo magnetico, si verifica una corrente elettrica indotta (forza elettromotrice (EMF)) negli elementi di corrente conduttori della struttura del satellite. Questa forza elettromotrice provoca una ridistribuzione delle cariche elettriche negli elementi di corrente conduttori della struttura satellitare. Un campo elettrico appare intorno al satellite, che influenza il movimento delle particelle elettricamente cariche nell'ambiente. Gli elettroni sono attirati da quelle parti del satellite che hanno un potenziale positivo (rispetto alla parte centrale del satellite), e gli ioni carichi positivamente sono attirati da quelle parti del satellite che hanno un potenziale negativo. Gli elettroni e gli ioni che colpiscono la superficie delle strutture satellitari sono combinati in atomi di ossigeno neutri, mentre gli elettroni 'viano' nelle strutture conduttive del satellite, creando una corrente elettrica. Il satellite, che si muove nello spazio, "colleziona" elettroni e ioni dallo spazio circostante e li colpisce. Per una stima approssimativa della grandezza della corrente che può fluire attraverso le strutture conduttive del satellite, presumere che la raccolta si verifichi solo da un'area pari all'area trasversale $S$ del satellite, e tutti gli ioni ed elettroni partecipano alla creazione di questa corrente.

**E.1 ** *(0,6pt) * Valutare approssimativamente la grandezza della corrente elettrica indotta $I_{ind}$.

**E.2** *(0.6pt)* Determinare un'espressione approssimativa della forza di "freno" di Ampere $F_{ind}$ indotta nella direzione opposta alla direzione del movimento del satellite. $\phi$ sia l'angolo tra il campo magnetico terrestre $\vec{B}$ lungo le linee di longitudine. Per semplificare, si può approssimare la lunghezza del satellite $L$ come radice quadrata dell'area del satellite $S$. Inoltre, invece di calcolare la media di $\sin(\phi)$, è possibile approssimirla con $\sin(\pi/2 - \theta)$. Per calcolare un valore medio si può utilizzare un numero discreto di punti campione.

**E.3 ** *(0.8pt) * Indicare la velocità di discesa $u_{ind}$ del satellite a causa del campo magnetico terrestre. Scrittura del tasso di discesa $H_h^{ind}$ per una rotazione causata dall'effetto di trazione magnetica. Suggerimento: tenere conto delle relazioni $h \ll R_E$.

### Parte F: risultati numerici e conclusioni [1,0 punti]

**F.1 ** *(0,4pt) * Calcolare e compilare la tabella 1 nella scheda di risposta.

**F.2** *(0.4pt)* Calcolare e compilare la tabella 2 nella scheda delle risposte.

**F.3 ** *(0.2pt) * Rendichi questi tre processi di rallentamento orbitale in base alla loro forte influenza sulle altitudini orbitali della ISS superiori a $380\,km$. Per la Stazione Spaziale Internazionale, che orbita ad un'altitudine superiore a $380\,km$, annotare i fattori più significativi che contribuiscono al decadimento orbitale.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1MGt2u1UM9fUkBTsgnEmUuy8kJqKh08fN/view)

**Topic:** [[Gravitation]], [[Fluid Mechanics]], [[Electromagnetism]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Satellite (object)|Satellite]]



<span class="atom-split" id="q02" data-atom="q02" data-title="APhO 2023 — Teorica — Quesito 2" data-tags="kg/prova,paese/Asia,comp/APhO,topic/rotational-dynamics,argomento/meccanica,difficolta/5,multidisciplina/multi,object/ball"></span>

<div class="qlang-switch" data-default="en"></div>



**A ball on a turntable [10.0 points]**

### Preamble

**Notations and conventions:** The length of a vector $\vec{A}$ is simply denoted as $A \equiv |\vec{A}|$. Its $x, y, z$ components are denoted by $A_x, A_y, A_z$, respectively. The time derivative of a quantity is denoted by the dot over the quantity: $\dot{\vec{A}} \equiv d\vec{A}/dt$, $\dot{A} \equiv dA/dt$. The unit vector along the direction of vector $\vec{A}$ is denoted as $\hat{A}$. The unit vectors along the Cartesian coordinates are, therefore, $\hat{x}$, $\hat{y}$ and $\hat{z}$. The definitions of scalar and vector products are:

$$(\vec{A}\cdot\vec{B}) = (\vec{B}\cdot\vec{A}) = A_x B_x + A_y B_y + A_z B_z = AB\cos\theta$$

$$(\vec{A}\times\vec{B}) = -(\vec{B}\times\vec{A}) = (A_y B_z - A_z B_y)\,\hat{x} + (A_z B_x - A_x B_z)\,\hat{y} + (A_x B_y - A_y B_x)\,\hat{z}$$

$$|\vec{A}\times\vec{B}| = AB\sin\theta,$$

where $\theta$ is the angle between $\vec{A}$ and $\vec{B}$. You may need the following properties of vectors and their multiplications. Triple product rules for vectors:

$$(\vec{A}\times\vec{B})\times\vec{C} = (\vec{A}\cdot\vec{C})\vec{B} - (\vec{B}\cdot\vec{C})\vec{A},$$

$$(\vec{A}\times\vec{B})\cdot\vec{C} = (\vec{B}\times\vec{C})\cdot\vec{A} = (\vec{C}\times\vec{A})\cdot\vec{B}.$$

The vector products are very useful in describing many relations in physics. For example:
$$\vec{v} = \vec{\omega}\times\vec{r},\qquad \vec{F}_{Lorentz} = Q\,\vec{v}\times\vec{B},$$
and, often, saves time combining three equations for vector components into a single equation.

### The statement

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q2_p1_f1.png]]
*Figure 1. Ball rolling on the turntable without slipping*
<!--fig:end-->

A ball of mass $m$ and radius $r$ is rolling on a horizontal turntable without slipping (see Figure 1). Its mass density has a spherical symmetry, i.e. only depends on the distance from its center. The moment of inertia of the ball is $I$. In part B and C, where the turntable can rotate freely, the moment of inertia of the turntable is denoted as $I_d$. The purpose of the problem is to analyze the motion and trajectory of the ball with respect to the laboratory frame. Throughout the problem, assume the turntable is large enough so that the ball does not fall off. The following notations are used:

- $\Omega$ — the magnitude of the turntable angular velocity,
- $\vec{\omega}$ — the spinning angular velocity of the ball with respect to its spinning axis,
- $\vec{R}$ — the horizontal position of the ball center with respect to the rotation axis of the turntable,
- $\vec{v}$ — the velocity of the ball at $\vec{R}$ with respect to the laboratory frame.

Assume that the initial position $\vec{R}_0 \equiv \vec{R}(0)$ and velocity $\vec{v}_0 \equiv \vec{v}(0)$ of the ball, the angular velocity of the turntable $\Omega_0 \equiv \Omega(0)$ are known. For the initial vector quantities $\vec{R}_0 \equiv \vec{R}(0)$ and $\vec{v}_0 \equiv \vec{v}(0)$, assume that their directions are known. In addition, whenever you need to express a vector quantity, you may use $\hat{z}$ in your expression. Also, if asked to write your expression in terms of the known quantity you may use any or all of $m, r, I$ and $I_d$. Unless otherwise stated, keep $I$ as general. The following notations are recommended:

$$\alpha = \frac{I}{I + mr^2}, \qquad \delta = \frac{I_d}{mr^2}.$$

You may write the final answers as vector expressions involving cross product (vector product), dot product (scalar product) and unit vectors in axis directions.

### Part A: Ball on turntable with constant angular velocity [1.5 points]

First we start with the simplest case wherein the turntable angular velocity with respect to vertical axis $\hat{z}$ is constant, therefore $\Omega = \Omega_0$.

**A.1** *(0.1pt)* Express the ball's velocity $\vec{v}$ in terms of $\Omega$, $\vec{\omega}$, $r$ and $\vec{R}$ from a kinematic constraint.

**A.2** *(0.2pt)* Using Newton's equation and torque equation with respect to its center, find the acceleration of the ball $\vec{a} \equiv \dot{\vec{v}}$ in terms of $\Omega$, $\vec{v}$, $r$, $m$ and $I$.

**A.3** *(0.2pt)* Find the velocity $\vec{v}$ in terms of $\Omega$, $\vec{R}$, $\vec{v}_0$, $\vec{R}_0$, $r$, $m$ and $I$.

**A.4** *(0.5pt)* Write an explicit solution for the trajectory of the ball given the initial conditions $\vec{v}_0$ and $\vec{R}_0$.

**A.5** *(0.5pt)* Assume this time that the ball has a uniform mass density, i.e. $I = 2mr^2/5$. Trajectory you have found is a circle and its radius is $R_t$. Choose its magnitude to be the same as $R_0$. How long does it take for the ball to approach the initial spot on the table (the position on the turntable at $t = 0$) with the closest distance?

### Part B: Ball on freely rotating turntable [4.0 points]

In this part, the turntable can rotate freely without any friction around $z$-axis. Therefore its free rotation is hindered only by the ball's friction.

**B.1** *(0.2pt)* Find the velocity $\vec{v}$ and acceleration $\dot{\vec{v}}$ of the ball in terms of $\Omega$, $\vec{R}$, $\Omega_0$, $\vec{R}_0$, $\dot{\Omega}$, $r$, $m$ and $I$.

**B.2** *(0.6pt)* Find the magnitude of the angular acceleration of the turntable $\dot{\Omega}$ in terms of $\Omega$, $\Omega_0$, $\vec{R}$, $\vec{R}_0$, $\vec{v}_0$, $r$, $m$, $I$ and $I_d$. You may use the constants $\alpha$ and $\delta$ defined in the beginning of the problem.

**B.3** *(0.6pt)* Find the magnitude of the angular velocity of the turntable $\Omega$ as a function of $R$ only. Use this constants in your expression: $\Omega_0$, $R_0$, $r$, $m$, $I$, $I_d$.

**B.4** *(0.1pt)* From the result of B.3, for a given $\Omega_0$, $R_0$, find the maximum possible $\Omega$.

**B.5** *(2.5pt)* Write down the vertical component the angular momentum $\hat{z}M_z$ of the whole system. Subtract any constant term and rename the remaining part as $\hat{z}L$. In part B.1 you found the velocity of the ball $\vec{v}$, which can be written as the sum of a part that depends on the position of the ball $\vec{R}$ and a constant vector. Let us call this constant vector $\vec{c}$. Choose the direction of $x$-axis along this vector and $y$-axis along $\hat{z}\times\vec{c}$. In this frame of reference, find $\Omega$ in terms of $L$, $\vec{R}$, $\vec{c}$, $\hat{z}$, $R^2$, $r$, $m$, $I$ and $I_d$. Combining this with the result of B.3, write down an equation only containing $R^2$ and $y$ variables and $L$, $r$, $m$, $I$, $c$ and $I_d$. Here $c$ is the magnitude of $\vec{c}$. Substituting $R^2 = x^2 + y^2$, write down an expression containing only $x$ and $y$ variables and describing a curve. From this, list all possible types of trajectories.

### Part C: Ball on turntable in magnetic field [4.5 points]

In this part, we consider a density profile so that $I = mr^2/10$. This can be realized, for example, if the ball is filled up to half of its radius with uniform density and the remaining part has a negligible mass. In addition, on its outer surface, the ball has a uniform charge density $Q/(4\pi r^2)$, where $Q$ is the total surface charge. The whole setup is in a uniform magnetic field $\vec{B}$ that is in $\hat{z}$ direction. The turntable rotates with constant $\Omega$ like in Part A.

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q2_p3_f1.png]]
*Figure 2. Ball rolling on the turntable in a constant magnetic field $\vec{B}$*
<!--fig:end-->

**C.1** *(0.5pt)* Write down Newton's equation and the torque $\vec{\tau}_s$ equation for the ball. Find expression for the torque due to the spinning of the ball around its axis in terms of $Q$, $r$, $\vec{\omega}$ and $\vec{B}$.

**C.2** *(0.5pt)* Using the results of C.1, find expression for the linear acceleration of the ball with respect to the laboratory frame in terms of $Q$, $r$, $\vec{\omega}$ and $\vec{B}$.

**C.3** *(1.0pt)* We assume all quantities of unit length are measured by meter, all angular velocities have unit of 1 Hertz, and all quantities of time have the unit of 1 second. The equation for the linear acceleration you found in part C.2 is a second order differential equation for $\vec{R}$ of the following form:

$$\frac{d^2\vec{R}}{dt^2} - \gamma\frac{d\vec{R}}{dt}\times\hat{z} + \beta\vec{R} = 0.$$

Write down $\gamma$ and $\beta$ constants in terms of $Q$, $r$, $B$, $I$, $m$, $\Omega$. Make the following transformation to a polar coordinates for the components of $\vec{R}$:

$$x(t) = \rho(t)\cos(\eta(t)), \qquad y(t) = \rho(t)\sin(\eta(t))$$

so that the new equations do not have the first time derivative term. Here the polar angle $\eta(t)$ is a function of time. Find the form of this function. Express the coefficient $\beta'$ of $\rho(t)$ in the new equation in terms of $\gamma$ and $\beta$. Write down the conditions for different types of behavior of $\rho(t)$ with respect to time: harmonic, exponential etc.

**C.4** *(0.9pt)* Consider the following initial conditions for the solution found in part C.3:
$$x(0) = 1\ m, \quad y = 0\ m, \quad v_x(0) = \dot{x}|_{t=0} = 1\ m/s, \quad v_y(0) = \dot{y}|_{t=0} = -1\ m/s.$$
From these conditions, find $\beta$ and $\gamma$. Using them find the corresponding $\Omega$. Sketch the trajectory. Is the charge of the surface negative or positive? For the negative write $-$ and for the positive write $+$ on your answer sheet.

**C.5** *(1.6pt)* Consider the solution you have found in part C.4. If you identified it correctly your solution should have a rotating $\vec{R}(t)$. Find the expressions for the total and per rotation changes in energy for $N \gg 1$ number of rotations. Here you may ignore the terms small compared to $N$. In this part assume the mass and the radius of the ball are $m = 1\ kg$ and $r = 1\ m$ so that $I = 1/11\ kg\cdot m^2$.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1xRaCt27TXndEGTpm-z255u1kgQH5O85a/view)

**Topic:** [[Rotational Dynamics]], [[Newtonian Mechanics]], [[Magnetism]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Conservation Laws (metodo)|Conservation Laws]], [[Differential Equations (metodo)|Differential Equations]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Ball (object)|Ball]]


<div class="qlang-split" data-lang="it"></div>

**Una palla su una scheda giratoria [10,0 punti]**

Preambolo

**Notazioni e convenzioni: ** La lunghezza di un vettore $\vec{A}$ è semplicemente indicata come $A \equiv |\vec{A}|$. I suoi componenti $x, y, z$ sono indicati rispettivamente da $A_x, A_y, A_z$. La derivata temporale di una quantità è indicata dal punto sopra la quantità: $\dot{\vec{A}} \equiv d\vec{A}/dt$, $\dot{A} \equiv dA/dt$. Il vettore unitario lungo la direzione del vettore $\vec{A}$ è indicato come $\hat{A}$. I vettori unitari lungo le coordinate cartesiane sono quindi $\hat{x}$, $\hat{y}$ e $\hat{z}$. Le definizioni dei prodotti scalari e vettoriali sono:

$$(\vec{A}\cdot\vec{B}) = (\vec{B}\cdot\vec{A}) = A_x B_x + A_y B_y + A_z B_z = AB\cos\theta$$

$$(\vec{A}\times\vec{B}) = -(\vec{B}\times\vec{A}) = (A_y B_z - A_z B_y)\,\hat{x} + (A_z B_x - A_x B_z)\,\hat{y} + (A_x B_y - A_y B_x)\,\hat{z}$$

$$|\vec{A}\times\vec{B}| = AB\sin\theta,$$

dove $\theta$ è l'angolo tra $\vec{A}$ e $\vec{B}$. Potresti aver bisogno delle seguenti proprietà dei vettori e delle loro moltiplicazioni. Regola tripla del prodotto per i vettori:

$$(\vec{A}\times\vec{B})\times\vec{C} = (\vec{A}\cdot\vec{C})\vec{B} - (\vec{B}\cdot\vec{C})\vec{A},$$

$$(\vec{A}\times\vec{B})\cdot\vec{C} = (\vec{B}\times\vec{C})\cdot\vec{A} = (\vec{C}\times\vec{A})\cdot\vec{B}.$$

I prodotti vettoriali sono molto utili per descrivere molte relazioni in fisica. Per esempio:
$$\vec{v} = \vec{\omega}\times\vec{r},\qquad \vec{F}_{Lorentz} = Q\,\vec{v}\times\vec{B},$$
e, spesso, risparmia tempo combinando tre equazioni per componenti vettoriali in una sola equazione.

### La dichiarazione

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q2_p1_f1.png]]
*Figura 1. Ball rolling sul giradischi senza scivolare*
<!--fig:end-->

Una palla di massa $m$ e di raggio $r$ ruota su una scheda rotatoria orizzontale senza scivolare (vedere figura 1). La densità di massa ha una simmetria sferica, cioè Dipende solo dalla distanza dal suo centro. Il momento di inerzia della palla è $I$. Nella parte B e C, dove la scheda può ruotare liberamente, il momento di inerzia della scheda è indicato come $I_d$. Lo scopo del problema è analizzare il movimento e la traiettoria della palla rispetto al quadro di laboratorio. Durante tutto il problema, supponiamo che il giradischi sia abbastanza grande da non far cadere la palla. Le seguenti notazioni sono utilizzate:

- $\Omega$  la magnitudine della velocità angolare della scheda giratoria,
- $\vec{\omega}$  velocità angolare di rotazione della palla rispetto al suo asse di rotazione,
- $\vec{R}$  la posizione orizzontale del centro della palla rispetto all'asse di rotazione della scheda giratoria,
- $\vec{v}$  velocità della palla a $\vec{R}$ rispetto al telaio di laboratorio.

Supponiamo che la posizione iniziale $\vec{R}_0 \equiv \vec{R}(0)$ e la velocità $\vec{v}_0 \equiv \vec{v}(0)$ della palla, la velocità angolare del giradischi $\Omega_0 \equiv \Omega(0)$ siano conosciute. Per le quantità di vettori iniziali $\vec{R}_0 \equiv \vec{R}(0)$ e $\vec{v}_0 \equiv \vec{v}(0)$, supponiamo che siano conosciute le loro direzioni. Inoltre, quando è necessario esprimere una quantità vettoriale, è possibile utilizzare $\hat{z}$ nella sua espressione. Inoltre, se viene chiesto di scrivere la propria espressione in termini di quantità conosciuta, è possibile utilizzare tutti o parte di $m, r, I$ e $I_d$. Salvo indicazione contraria, conservare il $I$ come generale. Si raccomandano le seguenti notazioni:

$$\alpha = \frac{I}{I + mr^2}, \qquad \delta = \frac{I_d}{mr^2}.$$

Le risposte finali possono essere scritte come espressioni vettoriali che coinvolgono il prodotto incrociato (prodotto vettoriale), il prodotto dotto (prodotto scalare) e i vettori unitari nelle direzioni degli assi.

### Parte A: palla su giradischi con velocità angolare costante [1,5 punti]

In primo luogo iniziamo con il caso più semplice in cui la velocità angolare della scheda giratoria rispetto all'asse verticale $\hat{z}$ è costante, quindi $\Omega = \Omega_0$.

**A.1** *(0.1pt) * Esprimere la velocità della palla $\vec{v}$ in termini di $\Omega$, $\vec{\omega}$, $r$ e $\vec{R}$ da una restrizione cinematica.

**A.2** *(0.2pt) * Usando l'equazione di Newton e l'equazione del coppia rispetto al suo centro, trovare l'accelerazione della palla $\vec{a} \equiv \dot{\vec{v}}$ in termini di $\Omega$, $\vec{v}$, $r$, $m$ e $I$.

**A.3** *(0.2pt) * Trova la velocità $\vec{v}$ in termini di $\Omega$, $\vec{R}$, $\vec{v}_0$, $\vec{R}_0$, $r$, $m$ e $I$.

**A.4 ** *(0,5pt) * Scrivere una soluzione esplicita per la traiettoria della palla data le condizioni iniziali $\vec{v}_0$ e $\vec{R}_0$.

**A.5 ** *(0,5pt) * Supponiamo che la palla abbia una densità di massa uniforme, cioè $I = 2mr^2/5$. La traiettoria che hai trovato è un cerchio e il suo raggio è $R_t$. Scegliere la sua magnitudine per essere uguale a $R_0$. Quanto tempo ci vuole per avvicinare la palla al punto iniziale del tavolo (la posizione sul rotolo a $t = 0$) con la distanza più vicina?

### Parte B: palla su giradischi liberi [4,0 punti]

In questa parte, il giradischi può ruotare liberamente senza attrito intorno all'asse $z$. Pertanto la sua libera rotazione è ostacolata solo dall'attrito della palla.

**B.1** *(0.2pt) * Trova la velocità $\vec{v}$ e l'accelerazione $\dot{\vec{v}}$ della palla in termini di $\Omega$, $\vec{R}$, $\Omega_0$, $\vec{R}_0$, $\dot{\Omega}$, $r$, $m$ e $I$.

**B.2** *(0,6pt) * Trova la magnitudine dell'accelerazione angolare del giradischi $\dot{\Omega}$ in termini di $\Omega$, $\Omega_0$, $\vec{R}$, $\vec{R}_0$, $\vec{v}_0$, $r$, $m$, $I$ e $I_d$. È possibile utilizzare le costanti $\alpha$ e $\delta$ definite all'inizio del problema.

**B.3** *(0,6pt)* Trova la magnitudine della velocità angolare del giradischi $\Omega$ come funzione di $R$ solo. Utilizzare queste costanti nella tua espressione: $\Omega_0$, $R_0$, $r$, $m$, $I$, $I_d$.

**B.4** *(0.1pt) * Dal risultato di B.3, per un dato $\Omega_0$, $R_0$, si trova il massimo possibile $\Omega$.

**B.5 ** *(2.5pt) * Scrivere la componente verticale il momento angolare $\hat{z}M_z$ dell'intero sistema. Sottoprendere qualsiasi termine costante e rinominare la parte rimanente come $\hat{z}L$. Nella parte B.1 si trova la velocità della palla $\vec{v}$, che può essere scritta come la somma di una parte che dipende dalla posizione della palla $\vec{R}$ e di un vettore costante. Chiamiamo questo vettore costante $\vec{c}$. Scegli la direzione dell'asse $x$ lungo questo vettore e dell'asse $y$ lungo $\hat{z}\times\vec{c}$. In questo quadro di riferimento, trovare $\Omega$ in termini di $L$, $\vec{R}$, $\vec{c}$, $\hat{z}$, $R^2$, $r$, $m$, $I$ e $I_d$. Combinando questo con il risultato di B.3, annotare un'equazione contenente solo $R^2$ e $y$ variabili e $L$, $r$, $m$, $I$, $c$ e $I_d$. Qui $c$ è la magnitudine di $\vec{c}$. In sostituzione di $R^2 = x^2 + y^2$, annotare un'espressione contenente solo $x$ e $y$ variabili e descrivere una curva. Da qui, elencare tutti i tipi di traiettorie possibili.

### Parte C: palla su giradischi in campo magnetico [4,5 punti]

In questa parte, consideriamo un profilo di densità in modo che $I = mr^2/10$. Questo può essere realizzato, ad esempio, se la palla è riempita fino alla metà del suo raggio con una densità uniforme e la parte rimanente ha una massa trascurabile. Inoltre, sulla sua superficie esterna, la palla ha una densità di carica uniforme $Q/(4\pi r^2)$, dove $Q$ è la carica totale della superficie. L'intera configurazione è in un campo magnetico uniforme $\vec{B}$ che è in direzione $\hat{z}$. Il rotor girato si ruota con costante $\Omega$ come nella parte A.

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q2_p3_f1.png]]
*Figura 2. Ball rolling sul giradischi in un campo magnetico costante $\vec{B}$ *
<!--fig:end-->

**C.1** *(0.5pt) * Scrivi l'equazione di Newton e l'equazione di coppia $\vec{\tau}_s$ per la palla. Trova espressione della coppia dovuta al girare della palla attorno al suo asse in termini di $Q$, $r$, $\vec{\omega}$ e $\vec{B}$.

**C.2** *(0,5pt) * Usando i risultati di C.1, trovare espressione per l'accelerazione lineare della palla rispetto al telaio di laboratorio in termini di $Q$, $r$, $\vec{\omega}$ e $\vec{B}$.

**C.3 ** *(1.0pt) * Supponiamo che tutte le quantità di lunghezza unitaria siano misurate per metro, tutte le velocità angolari abbiano unità di 1 Hertz, e tutte le quantità di tempo abbiano l'unità di 1 secondo. L'equazione per l'accelerazione lineare che hai trovato nella parte C.2 è un'equazione differenziale di secondo ordine per $\vec{R}$ della seguente forma:

$$\frac{d^2\vec{R}}{dt^2} - \gamma\frac{d\vec{R}}{dt}\times\hat{z} + \beta\vec{R} = 0.$$

Scrivere le costanti $\gamma$ e $\beta$ in termini di $Q$, $r$, $B$, $I$, $m$, $\Omega$. Per i componenti di $\vec{R}$ si deve effettuare la seguente trasformazione alle coordinate polari:

$$x(t) = \rho(t)\cos(\eta(t)), \qquad y(t) = \rho(t)\sin(\eta(t))$$

in modo che le nuove equazioni non abbiano il termine derivato della prima volta. Qui l'angolo polare $\eta(t)$ è una funzione del tempo. Trova la forma di questa funzione. Esprimere il coefficiente $\beta'$ di $\rho(t)$ nella nuova equazione in termini di $\gamma$ e $\beta$. Scrivere le condizioni per i diversi tipi di comportamento di $\rho(t)$ in relazione al tempo: armonico, esponenziale ecc.

**C.4** *(0,9pt)* Considerate le seguenti condizioni iniziali per la soluzione trovata nella parte C.3:
$$x(0) = 1\ m, \quad y = 0\ m, \quad v_x(0) = \dot{x}|_{t=0} = 1\ m/s, \quad v_y(0) = \dot{y}|_{t=0} = -1\ m/s.$$
Da queste condizioni, trovare $\beta$ e $\gamma$. Con queste informazioni si trova la corrispondente $\Omega$. Segna la traiettoria. La carica della superficie è negativa o positiva? Per la risposta negativa scrivete $-$ e per la risposta positiva scrivete $+$ sulla scheda di risposta.

**C.5 ** *(1.6pt) * Considera la soluzione che hai trovato nella parte C.4. Se l'ha identificato correttamente, la soluzione deve avere un $\vec{R}(t)$ in rotazione. Trova le espressioni per il numero di rotazioni $N \gg 1$ per il numero di variazioni di energia totali e per rotazione. Qui si possono ignorare i termini piccoli rispetto a $N$. In questa parte, supponiamo che la massa e il raggio della palla siano $m = 1\ kg$ e $r = 1\ m$ in modo che $I = 1/11\ kg\cdot m^2$.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1xRaCt27TXndEGTpm-z255u1kgQH5O85a/view)

**Topic:** [[Rotational Dynamics]], [[Newtonian Mechanics]], [[Magnetism]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Conservation Laws (metodo)|Conservation Laws]], [[Differential Equations (metodo)|Differential Equations]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Ball (object)|Ball]]



<span class="atom-split" id="q03" data-atom="q03" data-title="APhO 2023 — Teorica — Quesito 3" data-tags="kg/prova,paese/Asia,comp/APhO,topic/fluid-mechanics,argomento/fluidi,difficolta/5,multidisciplina/multi,object/bubble"></span>

<div class="qlang-switch" data-default="en"></div>



**Cavitation [10.0 points]**

### Introduction

Cavitation is the phenomenon of vapour bubbles or "cavities" occurring in a liquid medium due to drop in pressure. This is in contrast to boiling, where vapour bubbles are created due to rise in temperature. Since the vapour bubbles collapse and generate shock waves as well as supersonic jets when the dropped pressure is restored, cavitation is a constant source of damage and even of catastrophe in hydraulic machines, ships, and more generally in any device involving liquid flow. On the other hand, it has found many positive applications, for example in chemical industry, cleaning, and in treatment of kidney stones.

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q3_p1_f1.png]]
*Figure 1. (a) Cavitating propeller (b) Cavitation damage (Source: Wikimedia Commons)*
<!--fig:end-->

It is understood that cavitation generally grow out of microscopic bubbles, called nuclei, that preexisted in the liquid. These micro-bubbles are a few microns in size and contain both vapour and non-condensable gas (the latter is just air when ordinary water is under consideration). If the pressure in the liquid becomes sufficiently low, the nuclei grow into a macroscopic size, initiating cavitation. Liquid purified of such nuclei can even withstand negative pressure without cavitating. One usually compares this with solid under tension, which does not rupture easily if there are no preexisting pockets or cracks in it.

In this problem, we will be concerned with various idealized scenarios related to cavitation. As is often the case, we can glean some nontrivial information from simple dimensional analysis. However, we will need differential equations embodying fundamental laws such as Newton's second law of motion and Fick's law of diffusion, if we want to conduct a more precise study.

One of the first things we want to know is the so called critical (or threshold) pressure, that is the minimum value of the water pressure so that the nuclei remain microscopic without growing into macroscopic bubbles. The critical pressure is roughly equal to the vapour pressure at the given temperature, but the exact value is slightly lower due to surface tension and the air content of the nucleus.

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q3_p2_f1.png]]
*Figure 2. (a) Cavitation (down arrow) and boiling (right arrow) on a phase diagram (b) Typical bubble (see Table 1 for notations)*
<!--fig:end-->

If the external pressure suddenly drops below the critical pressure of a nucleus, then the nucleus starts expanding and the expansion rate quickly reaches a stable value. In practice, after the bubble becomes macroscopic in size, the pressure is typically restored to its original value, and the bubble starts collapsing. We will model this situation by considering a macroscopic bubble in equilibrium, whose external pressure is then suddenly risen. The collapsing bubble will rebound after reaching a minimum size if the bubble had air in it. On the other hand, a pure vapour bubble would completely dissolve, with the shrinkage rate growing unboundedly as the radius of the bubble reaches zero. In reality, towards the end of the collapse, the bubble would lose its spherical shape, and the compressibility of water would become important. However, unless a particular question explicitly asserts otherwise, we will neglect those effects here.

Another interesting question is what happens when sound wave is transmitted through water containing bubbles. It turns out that not only the bubbles pulsate following the pressure oscillations, but also the sound wave induces translational motions of the bubbles. These effects can be used to manipulate bubbles with the help of acoustic waves. For example, in acoustic cavitation, high intensity ultrasound is employed to generate cavitation or cause collapse of bubbles.

Finally, there is a sort of paradox regarding the existence of nuclei in the first place. The theory predicts that unless water is saturated with dissolved air, diffusion of air from any nucleus into water through the gas-water interface must induce a complete dissolution of the nucleus in a matter of seconds. However, in reality, micron sized nuclei exist in water and it is in fact extremely difficult to get rid of them. We will consider one of a few potential resolutions of this paradox, namely the suggestion that small crevices in solid walls or in solid particles carried by water are responsible for acting as micro-pockets of air and vapour.

### Potentially useful information

#### Vapour pressure

Let us say we have a closed jar containing water and air. If the air is too dry, then its humidity will increase due to evaporation of water. If the air is too wet, then its humidity will decrease due to condensation. It turns out that in equilibrium, the partial pressure $p_v = p_v(T)$ of vapour in air is a function of temperature.

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q3_p3_f1.png]]
*Figure 3. (a) Closed jar containing air and water in equilibrium (b) Diffusion flux through the surface S is proportional to the concentration gradient across S*
<!--fig:end-->

Now if a bubble changes its volume in an instant, then the humidity inside the bubble will lose its equilibrium with the surrounding water, and a new equilibrium must be reached either by condensation or evaporation. In reality this process is so rapid that we can justifiably assume that equilibrium is maintained at all times. Moreover, the heat lost or gained by the surrounding water during this process is negligible, so that the temperature remains constant. To conclude, we assume that the partial pressure of vapour contained in a bubble remains equal to $p_v$ at all times.

#### Henry's law

While the concept of vapour pressure gives us a good handle on the vapour content of a bubble, Henry's law offers at least a partial handle on the air content. Thinking of a closed jar containing water and air, it says that in equilibrium, the concentration of dissolved air in water is proportional to the partial pressure of air above the water:

$$u = Hq$$

where, $u$ is the concentration of air in water, $H$ is the so called Henry's constant, and $q$ is the partial pressure of air adjacent to water. As before, we will assume that equilibrium of air content in the sense of Henry's law is maintained at least in the immediate vicinity of the bubble at all times, and that this maintenance does not cause any temperature change.

#### Fick's law

To complement Henry's law, we need to know how dissolved air in water moves from places with high concentration to places with low concentration. This is where Fick's law enters, which states that the diffusion flux across an area element $S$ is proportional to how fast the concentration changes along the direction perpendicular to $S$, see Figure 3:

$$J = \kappa\frac{\partial u}{\partial x}$$

Here $J$ is the diffusion flux, that is the amount of air moving across the surface per unit area per unit time, $\kappa$ is the diffusivity coefficient, and we have assumed that the $x$ coordinate axis is perpendicular to $S$. When $u$ is a function of $x$ and possibly other variables, the notation $\dfrac{\partial u}{\partial x}$ means that we have taken the derivative of $u$ with respect to the variable $x$, while holding all other variables constant.

#### Diffusion equation

If you need to find a function $w = w(x, t)$ in the first quadrant $Q = \{(x, t) : x > 0, t > 0\}$ satisfying $\dfrac{\partial w}{\partial t} = \dfrac{\partial^2 w}{\partial x^2}$ in $Q$, and
$$\begin{cases} w(x, 0) = f(x) & \text{for } x > 0, \\ w(0, t) = 0 & \text{for } t > 0, \end{cases}$$
then the solution is given by
$$w(x, t) = \frac{1}{\sqrt{4\pi t}}\int_0^\infty \left( e^{-(x-y)^2/(4t)} - e^{-(x+y)^2/(4t)} \right) f(y)\, dy.$$

#### Gaussian type integrals

The following integrals may come in handy.
$$\int_0^\infty e^{-bx^2}\, dx = \frac{\sqrt{\pi}}{2\sqrt{b}}, \qquad \int_0^\infty x^2 e^{-bx^2}\, dx = \frac{\sqrt{\pi}}{4b\sqrt{b}} \qquad (b > 0).$$

#### Notations and typical values of parameters

In Table 1, we list the notations used in the statement of the problem, and the typical values of some important constants.

| symbol | assigned meaning | typical value |
|---|---|---|
| $\rho$ | water density | $997\ \mathrm{kg/m^3}$ |
| $p_\infty$ | water pressure far from a bubble | $101\ \mathrm{kPa}$ |
| $p_v$ | vapour pressure | $2340\ \mathrm{Pa}$ |
| $\sigma$ | surface tension | $72.8\cdot 10^{-3}\ \mathrm{N/m}$ |
| $R$ | bubble radius | |
| $R_0$ | initial radius of a bubble | $10^{-5}\ \mathrm{m}$ |
| $\delta$ | density of air | $1.29\ \mathrm{kg/m^3}$ |
| $q$ | partial pressure of air in a bubble | |
| $q_0$ | initial value of $q$ | |
| $\gamma$ | adiabatic exponent of air | $1.4$ |
| $u$ | concentration of dissolved air in water | |
| $\kappa$ | diffusivity coefficient for air in water | $2\cdot 10^{-9}\ \mathrm{m^2/s}$ |
| $H$ | Henry's constant for air in water | $0.24\cdot 10^{-6}\ \mathrm{s^2/m^2}$ |
| $t$ | time | |
| $f_0$ | natural/resonant frequency | |

*Table 1.*

### Assumptions

Unless otherwise specified, throughout this problem we assume the following.

- Water is incompressible, inviscid, and homogeneous.
- Water fills the entire space.
- Pressure variation due to gravity is negligible.
- No spatial or temporal variation in temperature.
- There is a single bubble.
- The bubble remains spherical and without translatory motion.
- No migration of air between the bubble cavity and the surrounding water.
- Air is an ideal gas.

### Part A: Preliminary analysis [1.5 points]

These are warm-up questions to get the initial feel of the phenomenon.

**A.1** *(0.5pt)* By performing a simple dimensional analysis, estimate the collapse time $T$ of a pure vapour bubble, in terms of bubble's initial radius $R_0$, water density $\rho$, water pressure $p_\infty$, and the vapour pressure $p_v$. Evaluate the formula with the numerical constant implicit in the formula equal to 1, when $R_0 = 1\ \mathrm{mm}$ and the quantities $\rho$, $p_\infty$, and $p_v$ take their typical values from previous Notation Table. Assume no surface tension: $\sigma = 0$.

**A.2** *(1.0pt)* Suppose that a nucleus consisting of air and vapour, with radius $R_0 = 10^{-5}\ \mathrm{m}$, is in equilibrium when the external pressure $p_\infty = 101\ \mathrm{kPa}$. Find the partial pressure $q_0$ of air in the bubble. Now suppose that the external pressure $p_\infty$ was gradually decreased, and that the air inside the bubble follows an isothermal process. Find the critical pressure $p_c$, defined by the condition that if $p_\infty < p_c$ the bubble size grows without bound. The quantities $p_v$ and $\sigma$ take their typical values from the above Notation Table.

### Part B: Main dynamics [6.0 points]

Now we will study the detailed dynamics of a spherical bubble consisting of a mixture of air and vapour. Please assume that there is no air migration through the bubble wall, and hence that the whole dynamics is governed by pressure only. Note however that as we have mentioned, there will be evaporation and condensation of water vapour at the bubble wall, that maintains the vapour pressure $p_v$ within the bubble.

**B.1** *(1.5pt)* Suppose that a single spherical bubble resides within water that fills space uniformly, and that the bubble may evolve in size without distorting its spherical shape, due to changes, e.g., in the external pressure $p_\infty$. Derive an equation that relates the bubble radius $R(t)$ and its time derivatives $R'(t)$ and $R''(t)$, surface tension $\sigma$, water density $\rho$, the pressure far from the bubble $p_\infty$, and the pressure inside the bubble $p$. Then split the pressure $p$ into two terms, by assuming that the bubble has both vapour (with partial pressure $p_v$) and air in it, and that the air follows an adiabatic process with exponent $\gamma$. To give a reference point, the partial air pressure must be $q_0$ when the bubble size equals $R_0$. Assume that evaporation, condensation, or transfer of air between the bubble cavity and the surrounding water has no effect on the water volume.

**B.2** *(1.0pt)* A water tank under the external pressure $p_\infty^- = 101\ \mathrm{kPa}$, containing a nucleus of radius $R_0 = 10^{-5}\ \mathrm{m}$ initially in equilibrium, was exposed to vacuum, so that the system suddenly has $p_\infty = 0$. Estimate the terminal (asymptotic) value of the growth speed $R'$, as well as the time it reaches this terminal value.

**B.3** *(1.0pt)* A water tank under the external pressure $p_\infty^- = 1.600\ \mathrm{kPa}$, containing a gas bubble of radius $R_0 = 10^{-5}\ \mathrm{m}$ initially in equilibrium, was suddenly exposed to the atmospheric pressure $p_\infty = 101\ \mathrm{kPa}$. Estimate the minimum radius of the bubble before it rebounds.

**B.4** *(0.5pt)* If there is no gas other than water vapour present in a bubble, the bubble completely collapses in finite time. Determine the characteristic exponent $\alpha$ in
$$R(t) \sim (T - t)^\alpha,$$
where $T$ is the collapse time.

**B.5** *(1.0pt)* Based on the equation derived in B3, find the natural frequency of the spherical oscillation of a bubble of radius $R_0 = 0.1\ \mathrm{mm}$.

**B.6** *(1.0pt)* Suppose that the bubble described in the previous part is subjected to a standing sound wave along the $x$-axis, whose pressure field is given by
$$p(x, t) = p_0 + A\sin\left(\frac{2\pi f}{c}(x + a)\right)\sin(2\pi f t),$$
where $f$ is the frequency, and $c$ is the speed of sound. The parameters $p_0$, $A$ and $a$ are constants, whose meanings may readily be deduced from the equation. Find the average force exerted upon the bubble. The bubble is situated at the origin of the $xyz$ coordinate system, and its size is much smaller than the wavelength of the sound.

### Part C: Dissolution of nuclei through diffusion [2.5 points]

In this final section, complementary to Part B, we focus on the effect of diffusion across the bubble wall.

**C.1** *(2.0pt)* Suppose that a nucleus consisting of air and vapour, with radius $R_0 = 10^{-5}\ \mathrm{m}$, is placed in water-air solution, in which the dissolved air is in equilibrium with the atmospheric pressure above the water. The partial pressure of air in the bubble is $q = 1.70\cdot 10^5\ \mathrm{Pa}$, and the vapour pressure can be neglected. Estimate the time required for the bubble to be completely resorbed into water. The quantities $p_\infty$, $\kappa$, $\delta$ and $\sigma$ take their typical values from Table 1. Assume that the region surrounding the bubble in which air diffusion takes place immediately gets much larger than the bubble itself.

**C.2** *(0.5pt)* Consider a conical crevice in the wall of a water container, with an aperture angle $\alpha$, see the following Figure. A small amount of air and vapour reside within the cone. Write down the condition of mechanical and diffusive equilibrium. Determine when the pocket of air stays in the crevice without disappearing. The contact angle of water on the surface is $\theta$.

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q3_p7_f1.png]]
*Conical Crevice*
<!--fig:end-->

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1rjk7rhzOjiVeuvUOnDEEUZ37CS9u-88s/view)

**Topic:** [[Fluid Mechanics]], [[Oscillations & Waves]], [[Thermodynamics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Bubble (object)|Bubble]]


<div class="qlang-split" data-lang="it"></div>

**Cavitazione [10,0 punti]**

### Introduzione

La cavitazione è il fenomeno di bolle di vapore o "cavità" che si verificano in un mezzo liquido a causa di una diminuzione della pressione. Questo contrasta con l'ebollizione, in cui si creano bolle di vapore a causa dell'aumento della temperatura. Poiché le bolle di vapore crollano e generano onde d'urto e getti supersonici quando la pressione diminuita viene ripristinata, la cavitazione è una fonte costante di danni e persino di catastrofi nelle macchine idrauliche, nelle navi e più in generale in qualsiasi dispositivo che coinvolga il flusso di liquidi. D'altra parte, ha trovato molte applicazioni positive, ad esempio nell'industria chimica, nella pulizia e nel trattamento delle pietre renali.

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q3_p1_f1.png]]
*Figura 1. (a) Epilina cavitatrice (b) Danni cavitativi (Fonte: Wikimedia Commons)*
<!--fig:end-->

Si sa che la cavitazione generalmente nasce da bolle microscopiche, chiamate nuclei, che preesistono nel liquido. Queste micronine sono di dimensioni di pochi microni e contengono sia vapore che gas non condensabile (questo ultimo è solo aria quando si tratta di acqua ordinaria). Se la pressione nel liquido diventa sufficientemente bassa, i nuclei crescono in dimensioni macroscopiche, avviando la cavitazione. Il liquido purificato da tali nuclei può persino resistere alla pressione negativa senza cavitare. Di solito si paragona questo a un solido sotto tensione, che non si rompe facilmente se non vi sono tasche o crepe preesistenti.

In questo problema, ci occuperemo di vari scenari idealizzati relativi alla cavitazione. Come spesso accade, possiamo raccogliere alcune informazioni non triviali da una semplice analisi dimensionale. Tuttavia, avremo bisogno di equazioni differenziali che incarnino leggi fondamentali come la seconda legge di Newton del movimento e la legge di diffusione di Fick, se vogliamo condurre uno studio più preciso.

Una delle prime cose che vogliamo sapere è la cosiddetta pressione critica (o soglia), cioè il valore minimo della pressione dell'acqua in modo che i nuclei rimangano microscopici senza crescere in bolle macroscopiche. La pressione critica è approssimativamente uguale alla pressione del vapore alla temperatura data, ma il valore esatto è leggermente inferiore a causa della tensione superficiale e del contenuto di aria del nucleo.

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q3_p2_f1.png]]
*Figura 2. (a) Cavitazione (filota verso il basso) e bollio (filota verso il destro) su un diagramma di fase (b) Bolla tipica (vedi tabella 1 per le notazioni)*
<!--fig:end-->

Se la pressione esterna scende improvvisamente al di sotto della pressione critica di un nucleo, allora il nucleo inizia a espandersi e il tasso di espansione raggiunge rapidamente un valore stabile. In pratica, dopo che la bolla diventa macroscopica, la pressione viene normalmente ripristinata al suo valore originale e la bolla inizia a crollare. Modelleremo questa situazione considerando una bolla macroscopica in equilibrio, la cui pressione esterna aumenta improvvisamente. La bolla in crollo rimbalzerà dopo aver raggiunto una dimensione minima se la bolla avesse aria dentro. D'altra parte, una bolla di vapore puro si scioglierà completamente, con il tasso di contrazione che cresce senza limiti quando il raggio della bolla raggiunge lo zero. In realtà, verso la fine del crollo, la bolla perderebbe la sua forma sferica e la compressibilità dell'acqua diventerebbe importante. Tuttavia, se una questione specifica non afferma esplicitamente il contrario, non si ignoreranno questi effetti.

Un'altra domanda interessante è cosa succede quando un'onda sonora viene trasmessa attraverso l'acqua contenente bolle. Si scopre che non solo le bolle pulsano seguendo le oscillazioni di pressione, ma anche l'onda sonora induce i movimenti traslazionali delle bolle. Questi effetti possono essere utilizzati per manipolare le bolle con l'aiuto di onde acustiche. Ad esempio, nella cavitazione acustica, viene impiegato ultrasuoni ad alta intensità per generare cavitazione o causare il collasso delle bolle.

Infine, c'è una sorta di paradosso riguardo all'esistenza dei nuclei. La teoria prevede che, a meno che l'acqua non sia satura di aria dissoluta, la diffusione di aria da qualsiasi nucleo nell'acqua attraverso l'interfaccia gas-acqua deve indurre una completa dissoluzione del nucleo in pochi secondi. In realtà, tuttavia, nel mare esistono nuclei di dimensioni micron e in realtà è estremamente difficile sbarazzarsi di loro. Considereremo una delle poche possibili soluzioni di questo paradosso, cioè la suggestione secondo cui le piccole crepe nelle pareti solide o nelle particelle solide trasportate dall'acqua sono responsabili dell'azione di micro tasche di aria e vapore.

### Informazioni potenzialmente utili

##### Pressione di vapore

Diciamo che abbiamo un vaso chiuso contenente acqua e aria. Se l'aria è troppo secca, allora la sua umidità aumenterà a causa dell'evaporazione dell'acqua. Se l'aria è troppo umida, la sua umidità diminuirà a causa della condensazione. Si scopre che in equilibrio la pressione parziale $p_v = p_v(T)$ del vapore nell'aria è una funzione della temperatura.

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q3_p3_f1.png]]
*Figura 3. (a) Un vaso chiuso contenente aria e acqua in equilibrio (b) Il flusso di diffusione attraverso la superficie S è proporzionale al gradiente di concentrazione su S*
<!--fig:end-->

Ora, se una bolla cambia il suo volume in un istante, allora l'umidità all'interno della bolla perderà il suo equilibrio con l'acqua circostante, e un nuovo equilibrio deve essere raggiunto o con la condensazione o l'evaporazione. In realtà questo processo è così rapido che possiamo giustamente presumere che l'equilibrio sia mantenuto in ogni momento. Inoltre, il calore che l'acqua circostante perde o guadagna durante questo processo è trascurabile, così che la temperatura rimane costante. In conclusione, presumiamo che la pressione parziale del vapore contenuto in una bolla rimanga sempre uguale a $p_v$.

##### La legge di Henry

Mentre il concetto di pressione del vapore ci dà una buona idea del contenuto del vapore di una bolla, la legge di Henry ci offre almeno una comprensione parziale del contenuto dell'aria. Pensando a un vaso chiuso contenente acqua e aria, si dice che in equilibrio, la concentrazione di aria dissoluta nell'acqua è proporzionale alla pressione parziale dell'aria sopra l'acqua:

$$u = Hq$$

dove $u$ è la concentrazione di aria nell'acqua, $H$ è la cosiddetta costante di Henry e $q$ è la pressione parziale dell'aria adiacente all'acqua. Come in precedenza, presumpiamo che l'equilibrio del contenuto di aria nel senso della legge di Henry sia mantenuto almeno in ogni momento nelle immediate vicinanze della bolla, e che tale mantenimento non provochi alcun cambiamento di temperatura.

##### La legge del cazzo

Per completare la legge di Henry, dobbiamo sapere come l'aria dissoluta nell'acqua si sposta da luoghi con alta concentrazione a luoghi con bassa concentrazione. È qui che entra in gioco la legge di Fick, che afferma che il flusso di diffusione attraverso un elemento di superficie $S$ è proporzionale alla velocità con cui la concentrazione cambia lungo la direzione perpendicolare a $S$, vedi figura 3:

$$J = \kappa\frac{\partial u}{\partial x}$$

Qui $J$ è il flusso di diffusione, cioè la quantità di aria che si muove attraverso la superficie per unità di area per unità di tempo, $\kappa$ è il coefficiente di diffusione, e abbiamo supposto che l'asse di coordinate $x$ sia perpendicolare a $S$. Quando $u$ è una funzione di $x$ e possibilmente di altre variabili, la notazione $\dfrac{\partial u}{\partial x}$ significa che abbiamo preso la derivata di $u$ rispetto alla variabile $x$, mantenendo tutte le altre variabili costanti.

#### Equazione di diffusione

Se è necessario trovare una funzione $w = w(x, t)$ nel primo quadrante $Q = \{(x, t) : x > 0, t > 0\}$ soddisfacente $\dfrac{\partial w}{\partial t} = \dfrac{\partial^2 w}{\partial x^2}$ in $Q$, e
$$\begin{cases} w(x, 0) = f(x) & \text{for } x > 0, \\ w(0, t) = 0 & \text{for } t > 0, \end{cases}$$
la soluzione viene data da
$$w(x, t) = \frac{1}{\sqrt{4\pi t}}\int_0^\infty \left( e^{-(x-y)^2/(4t)} - e^{-(x+y)^2/(4t)} \right) f(y)\, dy.$$

##### Integrali di tipo Gaussiano

Le seguenti integrali possono essere utili.
$$\int_0^\infty e^{-bx^2}\, dx = \frac{\sqrt{\pi}}{2\sqrt{b}}, \qquad \int_0^\infty x^2 e^{-bx^2}\, dx = \frac{\sqrt{\pi}}{4b\sqrt{b}} \qquad (b > 0).$$

##### Notazioni e valori tipici di parametri

Nella tabella 1 elencamo le notazioni utilizzate nella dichiarazione del problema e i valori tipici di alcune costanti importanti.

 Il simbolo ha un significato specifico 
|---|---|---|
| $\rho$ | water density | $997\ \mathrm{kg/m^3}$ |
| $p_\infty$ | water pressure far from a bubble | $101\ \mathrm{kPa}$ |
| $p_v$ | vapour pressure | $2340\ \mathrm{Pa}$ |
| $\sigma$ | surface tension | $72.8\cdot 10^{-3}\ \mathrm{N/m}$ |
| $R$ | bubble radius | |
| $R_0$ | initial radius of a bubble | $10^{-5}\ \mathrm{m}$ |
| $\delta$ | density of air | $1.29\ \mathrm{kg/m^3}$ |
♬ $q$ ♬ parziale pressione di aria in una bolla ♬
| $q_0$ | initial value of $q$ | |
| $\gamma$ | adiabatic exponent of air | $1.4$ |
| $u$ | concentration of dissolved air in water | |
| $\kappa$ | diffusivity coefficient for air in water | $2\cdot 10^{-9}\ \mathrm{m^2/s}$ |
| $H$ | Henry's constant for air in water | $0.24\cdot 10^{-6}\ \mathrm{s^2/m^2}$ |
| $t$ | time | |
| $f_0$ | natural/resonant frequency | |

*Tabella 1.*

### Presuposizioni

Salvo indicazione contraria, nel corso di questo problema si presuppone quanto segue.

- L'acqua è incompressibile, invisibile e omogenea.
- L'acqua riempie tutto lo spazio.
- La variazione di pressione dovuta alla gravità è trascurabile.
- Nessuna variazione spaziale o temporale della temperatura.
- C'e' una sola bolla.
- La bolla rimane sferica e senza movimento di traduzione.
- Nessuna migrazione di aria tra la cavità della bolla e l'acqua circostante.
- L'aria è un gas ideale.

### Parte A: analisi preliminare [1,5 punti]

Queste sono domande di riscaldamento per avere la sensazione iniziale del fenomeno.

**A.1** *(0,5pt) * Attraverso una semplice analisi dimensionale, si stima il tempo di crollo $T$ di una bolla di vapore pura, in termini di raggio iniziale della bolla $R_0$, densità dell'acqua $\rho$, pressione dell'acqua $p_\infty$ e pressione del vapore $p_v$. Valutare la formula con la costante numerica implicita nella formula pari a 1, quando $R_0 = 1\ \mathrm{mm}$ e le quantità $\rho$, $p_\infty$ e $p_v$ prendono i loro valori tipici dalla precedente tabella di notazione. Assumiamo che non ci sia tensione superficiale: $\sigma = 0$.

**A.2** *(1.0pt)* Supponiamo che un nucleo costituito da aria e vapore, con raggio $R_0 = 10^{-5}\ \mathrm{m}$, sia in equilibrio quando la pressione esterna $p_\infty = 101\ \mathrm{kPa}$. Trova la pressione parziale $q_0$ dell'aria nella bolla. Supponiamo che la pressione esterna $p_\infty$ sia stata gradualmente ridotta e che l'aria all'interno della bolla segua un processo isotermo. Trova la pressione critica $p_c$, definita dalla condizione che se $p_\infty < p_c$ la dimensione della bolla cresce senza limite. I quantitativi $p_v$ e $\sigma$ derivano dai valori tipici della tabella di notazione di cui sopra.

### Parte B: Principale dinamiche [6,0 punti]

Ora studieremo la dinamica dettagliata di una bolla sferica composta da un misto di aria e vapore. Si prega di supporre che non vi sia alcuna migrazione aerea attraverso il muro delle bolle e quindi che l'intera dinamica sia governata solo dalla pressione. Si noti tuttavia che, come abbiamo menzionato, si verificerà evaporazione e condensazione del vapore idrico alla parete della bolla, che mantiene la pressione del vapore $p_v$ all'interno della bolla.

**B.1** *(1.5pt) * Supponiamo che una singola bolla sferica risieda all'interno di acqua che riempie uniformemente lo spazio e che la bolla possa evolvere in dimensioni senza distorcere la sua forma sferica, a causa di variazioni, ad esempio, nella pressione esterna $p_\infty$. Derivare un'equazione che relaziona il raggio della bolla $R(t)$ e le sue derivate temporali $R'(t)$ e $R''(t)$, la tensione superficiale $\sigma$, la densità dell'acqua $\rho$, la pressione lontana dalla bolla $p_\infty$ e la pressione all'interno della bolla $p$. Dividere quindi la pressione $p$ in due termini, supponendo che la bolla abbia entrambe le vapore (con pressione parziale $p_v$) e l'aria, e che l'aria segua un processo adiabatico con esponente $\gamma$. Per fornire un punto di riferimento, la pressione parziale dell'aria deve essere $q_0$ quando la dimensione della bolla è uguale a $R_0$. Supponiamo che l'evaporazione, la condensazione o il trasferimento di aria tra la cavità della bolla e l'acqua circostante non abbiano alcun effetto sul volume dell'acqua.

**B.2 ** *(1.0pt) * Un serbatoio d'acqua sotto pressione esterna $p_\infty^- = 101\ \mathrm{kPa}$, contenente un nucleo di raggio $R_0 = 10^{-5}\ \mathrm{m}$ inizialmente in equilibrio, è stato esposto al vuoto, in modo che il sistema abbia improvvisamente $p_\infty = 0$. Calcolare il valore terminale (asinttico) della velocità di crescita $R'$, nonché il tempo in cui raggiunge questo valore terminale.

**B.3** *(1.0pt)* A water tank under the external pressure $p_\infty^- = 1.600\ \mathrm{kPa}$, containing a gas bubble of radius $R_0 = 10^{-5}\ \mathrm{m}$ initially in equilibrium, was suddenly exposed to the atmospheric pressure $p_\infty = 101\ \mathrm{kPa}$. Calcola il raggio minimo della bolla prima che rimbalzi.

**B.4** *(0.5pt)* If there is no gas other than water vapour present in a bubble, the bubble completely collapses in finite time. Determinare l'esponente caratteristico $\alpha$ in
$$R(t) \sim (T - t)^\alpha,$$
dove $T$ è il tempo di crollo.

**B.5 ** *(1.0pt) * Sulla base dell'equazione derivata da B3, si trova la frequenza naturale dell'oscillazione sferica di una bolla di raggio $R_0 = 0.1\ \mathrm{mm}$.

**B.6 ** *(1.0pt) * Supponiamo che la bolla descritta nella parte precedente sia sottoposta a un'onda sonora in piedi lungo l'asse $x$, il cui campo di pressione è dato da
$$p(x, t) = p_0 + A\sin\left(\frac{2\pi f}{c}(x + a)\right)\sin(2\pi f t),$$
dove $f$ è la frequenza e $c$ è la velocità del suono. I parametri $p_0$, $A$ e $a$ sono costanti, i cui significati possono essere facilmente dedotti dall'equazione. Trova la forza media esercitata sulla bolla. La bolla si trova all'origine del sistema di coordinate $xyz$ e la sua dimensione è molto inferiore alla lunghezza d'onda del suono.

### Parte C: Dissoluzione dei nuclei attraverso la diffusione [2,5 punti]

In questa sezione finale, complementare alla parte B, ci concentriamo sull'effetto della diffusione attraverso la parete delle bolle.

**C.1** *(2.0pt) * Supponiamo che un nucleo costituito da aria e vapore, con raggio $R_0 = 10^{-5}\ \mathrm{m}$, sia collocato in una soluzione acqua-aria, in cui l'aria dissoluta è in equilibrio con la pressione atmosferica sopra l'acqua. La pressione parziale dell'aria nella bolla è $q = 1.70\cdot 10^5\ \mathrm{Pa}$ e la pressione del vapore può essere trascurata. Calcolare il tempo necessario per la completa riassorbazione della bolla nell'acqua. I quantitativi $p_\infty$, $\kappa$, $\delta$ e $\sigma$ assumono i loro valori tipici dalla tabella 1. Supponiamo che la regione che circonda la bolla in cui si verifica la diffusione dell'aria diventi immediatamente molto più grande della bolla stessa.

**C.2 ** *(0,5pt) * Considera una crepa conica nella parete di un contenitore d'acqua, con un angolo di apertura $\alpha$, vedi figura seguente. Una piccola quantità di aria e vapore risiede all'interno del cono. Scrivi la condizione di equilibrio meccanico e diffuso. Determinare quando la tasca di aria rimane nella spaccatura senza scomparire. L'angolo di contatto dell'acqua sulla superficie è $\theta$.

<!--fig:start-->
![[_attachments/APhO_2023_theory/APhO_2023_theory_Q3_p7_f1.png]]
*Crivia conica*
<!--fig:end-->

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1rjk7rhzOjiVeuvUOnDEEUZ37CS9u-88s/view)

**Topic:** [[Fluid Mechanics]], [[Oscillations & Waves]], [[Thermodynamics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Bubble (object)|Bubble]]
