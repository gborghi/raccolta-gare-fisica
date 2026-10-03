---
title: OII 2005 Nazionale Teorica
tipo: prova
tags:
  - graph/prova
---
<div class="atom-reader" data-prova="teo05sol"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="OII 2005 Nazionale Teorica — Problema 1" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/multi,topic/astrophysics,topic/gravitation,topic/newtonian-mechanics,argomento/meccanica,object/planet,object/satellite,object/star"></span>

<div class="qlang-switch" data-default="it"></div>



PROBLEMA n. 1 – Trittico lunare
100 Punti

A — Al chiaro di Luna. . .

La potenza luminosa della luce solare raccolta dalla Luna (o dalla Terra, che si trova all’incirca alla stessa
distanza) è data da
$$W_L = \Phi_S \pi r^2$$
essendo $\Phi_S$ il flusso della radiazione solare alla distanza tra Sole e sistema Terra-Luna ed $r$ il raggio della Luna.
La potenza irradiata dalla Luna sarà allora $K W_L$ e il flusso di luce diffusa che raggiunge la Terra, nell’ipotesi
di diffusione isotropa, è
$$\Phi_L = \frac{K W_L}{2\pi d^2} = \frac{K \Phi_S}{2\pi d^2} \pi r^2$$
essendo $d$ la distanza Terra-Luna.
La differenza delle magnitudini di Sole e Luna piena è
$$\Delta m = m_S - m_L = 2.5 \log \frac{\Phi_L}{\Phi_S} = 2.5 \log \frac{K r^2}{2 d^2} = 2.5 \log \frac{K(\delta/2)^2}{2} \quad\Rightarrow\quad K = \frac{8}{\delta^2} 10^{(0.4\,\Delta m)} = 0.23$$
avendo espresso in radianti il diametro angolare della Luna: $\delta = 9.3 \times 10^{-3}$ rad .
NOTA: L’ipotesi di isotropia della luce diffusa dalla Luna, introdotta allo scopo di semplificare il problema, è
di fatto decisamente scorretta; come conseguenza di ciò il coefficiente $K$ così ottenuto risulta sovrastimato di
un fattore circa 4.

B — L’orbita lunare

Quesito n. 1.
Si consideri in ogni caso un istante in cui il satellite è sulla congiungente Sole–pianeta e compreso tra questi. In
entrambi i casi rappresentati in figura nel testo la traiettoria presenta una curvatura rivolta verso il pianeta.
Poiché il verso della curvatura della traiettoria coincide con il verso della forza applicata è necessario (e
sufficiente) che la forza risultante sia diretta verso il pianeta.
Dette $F$ ed $f$ i moduli delle forze gravitazionali tra Sole e satellite e tra pianeta e satellite deve essere
$$\frac{f}{F} > 1 \quad\Rightarrow\quad \frac{G m\, m_\text{sat}}{r^2} \frac{R^2}{G M\, m_\text{sat}} = \mu \rho^2 > 1$$
L’orbita presenta i “riccioli” se, nel punto considerato, la velocità del satellite rispetto al Sole ha verso opposto
a quella del pianeta; poiché tale velocità si ottiene come somma vettoriale della velocità $\vec{v}$ del satellite rispetto
al pianeta e di quella, $\vec{V}$, del pianeta rispetto al Sole, la condizione si esprime ponendo $v > V$ ovvero $v/V > 1$.
Identificando la forza gravitazionale con quella centripeta nel moto circolare si ha
$$\frac{m v^2}{r} = \frac{G M m}{r^2} \quad\Rightarrow\quad v = \sqrt{\frac{G M}{r}}$$
e la condizione data sopra si esprime come
$$\frac{v}{V} = \sqrt{\frac{G m}{r}} \sqrt{\frac{R}{G M}} = \sqrt{\mu \rho} > 1 \quad\Rightarrow\quad \mu \rho > 1$$
In tabella sono calcolate le espressioni precedenti ed è indicato il corrispondente tipo di traiettoria: Phobos,
Callisto e Titano oscillano attorno ai rispettivi pianeti con movimento di andamento sinusoidale; Io e Mimas
orbitano descrivendo i “riccioli”.

| Pianeta | $\mu$ | Satellite | $\rho\ [10^3]$ | $\mu \rho^2$ | $\mu \rho$ | Traiettoria |
|---|---|---|---|---|---|---|
| Terra | $3.04 \times 10^{-6}$ | Luna | 0.385 | 0.450 | $1.17 \times 10^{-3}$ | – |
| Marte | $3.23 \times 10^{-7}$ | Phobos | 24.2 | 189 | $7.80 \times 10^{-3}$ | (a) |
| Giove | $9.52 \times 10^{-4}$ | Io | 1.84 | $3.24 \times 10^3$ | 1.76 | (b) |
|  |  | Callisto | 0.413 | 162 | 0.393 | (a) |
| Saturno | $2.86 \times 10^{-4}$ | Mimas | 7.69 | $16.9 \times 10^3$ | 2.20 | (b) |
|  |  | Titano | 1.17 | 389 | 0.334 | (a) |

**Topic:** [[Astrophysics]], [[Gravitation]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Planet (object)|Planet]], [[Satellite (object)|Satellite]], [[Star (object)|Star]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)


<div class="qlang-split" data-lang="en"></div>

PROBLEM no. 1 – Lunar triptych
100 points

A — By moonlight. . .

The luminous power of the sunlight collected by the Moon (or by the Earth, which is located at approximately the same distance) is given by
$$W_L = \Phi_S \pi r^2$$ where $\Phi_S$ is the flux of solar radiation at the distance between the Sun and the Earth-Moon system and $r$ is the radius of the Moon.
The power radiated by the Moon will then be $K W_L$ and the flux of scattered light that reaches the Earth, under the assumption of isotropic scattering, is
$$\Phi_L = \frac{K W_L}{2\pi d^2} = \frac{K \Phi_S}{2\pi d^2} \pi r^2$$ where $d$ is the Earth-Moon distance.
The difference in the magnitudes of the Sun and the full Moon is
$$\Delta m = m_S - m_L = 2.5 \log \frac{\Phi_L}{\Phi_S} = 2.5 \log \frac{K r^2}{2 d^2} = 2.5 \log \frac{K(\delta/2)^2}{2} \quad\Rightarrow\quad K = \frac{8}{\delta^2} 10^{(0.4\,\Delta m)} = 0.23$$ having expressed the angular diameter of the Moon in radians: $\delta = 9.3 \times 10^{-3}$ rad .
NOTE: The assumption of isotropy of the light scattered by the Moon, introduced for the purpose of simplifying the problem, is in fact decidedly incorrect; as a consequence of this, the coefficient $K$ thus obtained turns out to be overestimated by a factor of about 4.

B — The lunar orbit

Problem 1.
In each case, consider an instant in which the satellite is on the Sun–planet line and between them. In both cases represented in the figure in the text, the trajectory has a curvature directed toward the planet.
Since the direction of the curvature of the trajectory coincides with the direction of the applied force, it is necessary (and sufficient) that the resultant force be directed toward the planet.
Letting $F$ and $f$ be the magnitudes of the gravitational forces between the Sun and the satellite and between the planet and the satellite, it must be
$$\frac{f}{F} > 1 \quad\Rightarrow\quad \frac{G m\, m_\text{sat}}{r^2} \frac{R^2}{G M\, m_\text{sat}} = \mu \rho^2 > 1$$
The orbit exhibits “curls” if, at the point considered, the velocity of the satellite relative to the Sun has the opposite direction to that of the planet; since this velocity is obtained as the vector sum of the velocity $\vec{v}$ of the satellite relative to the planet and that, $\vec{V}$, of the planet relative to the Sun, the condition is expressed by setting $v > V$ or $v/V > 1$.
Identifying the gravitational force with the centripetal force in circular motion, we have
$$\frac{m v^2}{r} = \frac{G M m}{r^2} \quad\Rightarrow\quad v = \sqrt{\frac{G M}{r}}$$ and the condition given above is expressed as
$$\frac{v}{V} = \sqrt{\frac{G m}{r}} \sqrt{\frac{R}{G M}} = \sqrt{\mu \rho} > 1 \quad\Rightarrow\quad \mu \rho > 1$$
In the table the preceding expressions are calculated and the corresponding type of trajectory is indicated: Phobos,
Callisto and Titan oscillate around their respective planets with sinusoidal motion; Io and Mimas orbit describing the “curls”.

| Planet | $\mu$ | Satellite | $\rho\ [10^3]$ | $\mu \rho^2$ | $\mu \rho$ | Trajectory |
|---|---|---|---|---|---|---|
| Earth | $3.04 \times 10^{-6}$ | Moon | 0.385 | 0.450 | $1.17 \times 10^{-3}$ | – |
| Mars | $3.23 \times 10^{-7}$ | Phobos | 24.2 | 189 | $7.80 \times 10^{-3}$ | (a) |
| Jupiter | $9.52 \times 10^{-4}$ | Io | 1.84 | $3.24 \times 10^3$ | 1.76 | (b) |
|  |  | Callisto | 0.413 | 162 | 0.393 | (a) |
| Saturn | $2.86 \times 10^{-4}$ | Mimas | 7.69 | $16.9 \times 10^3$ | 2.20 | (b) |
|  |  | Titan | 1.17 | 389 | 0.334 | (a) |

**Solution:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="OII 2005 Nazionale Teorica — Problema 2" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/multi,topic/gravitation,topic/astrophysics,topic/newtonian-mechanics,argomento/meccanica,object/planet,object/satellite"></span>

<div class="qlang-switch" data-default="it"></div>



Quesito n. 2.
Dalla tabella appare che per la Luna nessuna delle due condizioni è verificata; l’orbita della Luna presenta dunque la
concavità sempre diretta verso il Sole, con raggio di curvatura minimo nella fase di Luna Piena e massimo nella fase
di Luna Nuova, come nella figura a fianco.
Notare che, per chiarezza, il rapporto dei raggi delle orbite è molto accentuato rispetto alla realtà.

C — Influenza lunare

Quesito n. 1.
Il punto essenziale da considerare è la distinzione tra il centro della Terra e il centro di massa del sistema
Terra–Luna che, come detto, si muove di moto circolare uniforme; trascurando gli effetti dovuti ad altre cause,
il valore medio della durata dell’anno tropico coinciderebbe quindi con il periodo di rivoluzione del centro di
massa; questo si trova a circa 4600 km di distanza dal centro della Terra, sulla congiungente Terra–Luna, come
si ricava facilmente. Infatti in un riferimento con origine nel centro della Terra, dette $M$ ed $m$ le masse di Terra
e Luna rispettivamente, il centro di massa T–L si trova calcolando
$$x_G = \frac{M x_T + m x_L}{M + m} = \frac{m}{M + m} r = \frac{3.8 \times 10^5\ \text{km}}{82} = 4600\ \text{km}$$
con $x_T = 0$ e $x_L = r$ .
Al Primo Quarto, Terra e Luna sono allineate con la tangente all’orbita della Terra e il centro della Terra è
in anticipo sul centro di massa di circa 2.6 minuti dato che
$$\Delta t = \frac{x_G}{v} = \frac{4600}{30} = 153\ \text{s}$$
Quindi l’equinozio (geocentrico!) avviene 2.6 minuti prima del passaggio del centro di massa.
Poiché in un anno ci sono circa 12.5 cicli lunari, il successivo equinozio avviene (approssimativamente) in
fase di Ultimo Quarto, guadagnando così altrettanto perché adesso il centro della Terra transita sulla linea del
punto gamma dopo il centro di massa: l’anno risulta più lungo della media di circa $2\Delta t = 5.2$ minuti.

Quesito n. 2.
Nell’anno successivo gli effetti sono opposti; l’anno è più corto di circa $2\Delta t$ e, detta $T_0$ la durata media
dell’anno tropico, la differenza tra i due anni – a causa della Luna – risulta
$$\Delta T = T_0 + 2\Delta t - (T_0 - 2\Delta t) = 4\Delta t \approx 10.4\ \text{minuti} .$$
NOTA: Come detto, ci sono molti altri effetti perturbativi sul moto della Terra, cosicché la durata di anni
tropici successivi varia in modo molto più accentuato e irregolare.

<!--fig:start-->
**p.2** — Orbita lunare, curvatura verso il Sole (LN, LP)
![[_attachments/Teo05sol/Teo05sol_p2_f1.png]]
<!--fig:end-->

**Topic:** [[Gravitation]], [[Astrophysics]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Physical Modeling (metodo)|Physical Modeling]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Planet (object)|Planet]], [[Satellite (object)|Satellite]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)


<div class="qlang-split" data-lang="en"></div>

Question No. 2.
The table shows that neither of these conditions is observed for the Moon; the Moon's orbit therefore presents the
concavity always directed towards the Sun, with a minimum radius of curvature in the Full Moon phase and maximum in the phase
of the New Moon, as in the figure next to it.
Note that, for clarity, the ratio of orbital rays is very high relative to reality.

C  Lunar flu

Question No. 1.
The essential point to consider is the distinction between the center of the Earth and the center of mass of the system
EarthMoon which, as stated, moves in a uniform circular motion; neglecting the effects due to other causes,
The average duration of the tropical year would therefore coincide with the period of the central revolution of the
This is about 4600 km from the Earth's center, on the EarthMoon connecting, as
It's easy to get rich. In fact, in a reference originating in the center of the Earth, the masses of the Earth are called $M$ and $m$
and Moon respectively, the mass center TL is calculated by
$$x_G = \frac{M x_T + m x_L}{M + m} = \frac{m}{M + m} r = \frac{3.8 \times 10^5\ \text{km}}{82} = 4600\ \text{km}$$
with $x_T = 0$ and $x_L = r$.
In the first quarter, Earth and Moon are aligned with the tangent to Earth's orbit and the Earth's center is
The mass centre is approximately 2.6 minutes in advance, as
$$\Delta t = \frac{x_G}{v} = \frac{4600}{30} = 153\ \text{s}$$
So the equinox (geocentric!) takes place 2.6 minutes before the mass center passes.
Since there are about 12.5 lunar cycles in a year, the next equinox takes place (approximately) in the year of the moon.
The first is the Earth's orbit around the Sun.
Gamma point after the centre of mass: the year is longer than the average of about $2\Delta t = 5.2$ minutes.

Question No. 2.
The effects are opposite in the following year; the year is shorter than about $2\Delta t$ and, so called $T_0$, the average duration is less than the average year.
The difference between the two years due to the Moon is
$$\Delta T = T_0 + 2\Delta t - (T_0 - 2\Delta t) = 4\Delta t \approx 10.4\ \text{minuti} .$$
NOTE: As I said, there are many other disruptive effects on the motion of the Earth, so the duration of years
The following tropical seasons vary much more accentually and irregularly.

<!--fig:start-->
The following table shows the total number of days in which the monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly average monthly monthly average monthly monthly monthly average monthly monthly monthly average monthly monthly average monthly monthly monthly average monthly monthly monthly average monthly monthly monthly monthly monthly monthly average monthly monthly monthly monthly monthly monthly monthly average monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly
![[_attachments/Teo05sol/Teo05sol_p2_f1.png]]
<!--fig:end-->

**Topic:** [[Gravitation]], [[Astrophysics]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Physical Modeling (metodo)|Physical Modeling]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Planet (object)|Planet]], [[Satellite (object)|Satellite]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="OII 2005 Nazionale Teorica — Problema 3" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/bi,topic/thermodynamics,topic/geometric-optics,argomento/meccanica,object/mirror,object/cylinder,object/heat-engine,object/star"></span>

<div class="qlang-switch" data-default="it"></div>



PROBLEMA n. 2 – Motore solare
100 Punti

Quesito n. 1.
Poiché si trascurano le aberrazioni, l’immagine solare è semplicemente un disco il cui diametro $a$ è legato a
quello della sorgente dal rapporto di ingrandimento dello specchio. La distanza solare è tale da poter assumere
che l’immagine si formi alla distanza focale $f$ dello specchio:
$$a = D_S \frac{f}{u} = \frac{D_S R}{2u} .$$
Se lo specchio viene mantenuto correttamente orientato, il cilindro deve quindi avere almeno un diametro di
base pari ad $a$. Con i dati forniti, $a = 9.27$ cm.

Quesito n. 2.
La radiazione solare investe lo specchio, in direzione ortogonale, secondo un cerchio di diametro $d$. La potenza
in arrivo su quest’area è
$$W_S = S \pi \frac{d^2}{4}$$
e siccome non ci sono perdite per riflessione sullo specchio, questa è anche la potenza ottica sulla base del
cilindro. Con i dati forniti, $W_S = 45.2$ kW.

Quesito n. 3.
A regime il cilindro costituisce un termostato a temperatura $T$ in equilibrio fra la potenza entrante $W_S$ e la
potenza uscente, dovuta in parte alle perdite radiative e nella restante parte alla potenza termica $W_1$ assorbita
dalla macchina. Poiché il cilindro è metallico e la sua temperatura è uniforme, la superficie radiante è quella
totale. La superficie totale del cilindro equilatero è
$$2\pi \frac{a^2}{4} + \pi a^2 = \frac{3}{2} \pi a^2 ,$$
quindi le perdite radiative sono
$$\frac{3}{2} \pi \left( \frac{D_S R}{2u} \right)^2 \sigma T^4 .$$
La potenza $W_1$ si può ricavare calcolando dapprima il rendimento, che è
$$\eta = 0.3 \frac{T - T_0}{T} .$$
Se la potenza meccanica è $W$, allora
$$W_1 = \frac{W}{\eta} = \frac{W T}{0.3 (T - T_0)} .$$
Abbiamo quindi in ultima analisi che
$$\frac{\pi}{4} S d^2 = \frac{3\pi}{8} \frac{D_S^2 R^2 \sigma T^4}{u^2} + \frac{W T}{0.3 (T - T_0)} .$$

**Topic:** [[Thermodynamics]], [[Geometric Optics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]], [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Mirror (object)|Mirror]], [[Cylinder (object)|Cylinder]], [[Heat Engine (object)|Heat Engine]], [[Star (object)|Star]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)


<div class="qlang-split" data-lang="en"></div>

PROBLEM no. 2 – Solar engine
100 points

Question no. 1.
Since aberrations are neglected, the solar image is simply a disk whose diameter $a$ is related to that of the source by the magnification ratio of the mirror. The solar distance is such that one may assume that the image forms at the focal distance $f$ of the mirror:
$$a = D_S \frac{f}{u} = \frac{D_S R}{2u} .$$
If the mirror is kept correctly oriented, the cylinder must therefore have a base diameter of at least $a$. With the data provided, $a = 9.27$ cm.

Question no. 2.
The solar radiation strikes the mirror, in a direction orthogonal to it, over a circle of diameter $d$. The power arriving on this area is
$$W_S = S \pi \frac{d^2}{4}$$ and since there are no losses due to reflection on the mirror, this is also the optical power on the base of the cylinder. With the data provided, $W_S = 45.2$ kW.

Question no. 3.
At steady state the cylinder constitutes a thermostat at temperature $T$ in equilibrium between the incoming power $W_S$ and the outgoing power, due in part to radiative losses and in the remaining part to the thermal power $W_1$ absorbed by the machine. Since the cylinder is metallic and its temperature is uniform, the radiating surface is the total one. The total surface of the equilateral cylinder is
$$2\pi \frac{a^2}{4} + \pi a^2 = \frac{3}{2} \pi a^2 ,$$ therefore the radiative losses are
$$\frac{3}{2} \pi \left( \frac{D_S R}{2u} \right)^2 \sigma T^4 .$$
The power $W_1$ can be obtained by first calculating the efficiency, which is
$$\eta = 0.3 \frac{T - T_0}{T} .$$
If the mechanical power is $W$, then
$$W_1 = \frac{W}{\eta} = \frac{W T}{0.3 (T - T_0)} .$$
We therefore ultimately have that
$$\frac{\pi}{4} S d^2 = \frac{3\pi}{8} \frac{D_S^2 R^2 \sigma T^4}{u^2} + \frac{W T}{0.3 (T - T_0)} .$$

**Solution:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)



<span class="atom-split" id="q04" data-atom="q04" data-title="OII 2005 Nazionale Teorica — Problema 4" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/bi,topic/thermodynamics,topic/geometric-optics,argomento/meccanica,object/heat-engine,object/mirror,object/cylinder"></span>

<div class="qlang-switch" data-default="it"></div>



Quesito n. 4.
L’equazione precedente può essere esplicitata per ricavare $W$:
$$W = \frac{0.3 (T - T_0) \pi}{4} \left( \frac{S d^2}{T} - \frac{3 D_S^2 R^2 \sigma T^3}{2 u^2} \right)$$
da cui si ricava $W = 4.30$ kW.

**Topic:** [[Thermodynamics]], [[Geometric Optics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Heat Engine (object)|Heat Engine]], [[Mirror (object)|Mirror]], [[Cylinder (object)|Cylinder]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)


<div class="qlang-split" data-lang="en"></div>

Question No. 4.
The previous equation can be expressed to $W$:
$$W = \frac{0.3 (T - T_0) \pi}{4} \left( \frac{S d^2}{T} - \frac{3 D_S^2 R^2 \sigma T^3}{2 u^2} \right)$$
from which $W = 4.30$ kW is obtained.

**Topic:** [[Thermodynamics]], [[Geometric Optics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Heat Engine (object)|Heat Engine]], [[Mirror (object)|Mirror]], [[Cylinder (object)|Cylinder]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)



<span class="atom-split" id="q05" data-atom="q05" data-title="OII 2005 Nazionale Teorica — Problema 5" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/thermodynamics,argomento/meccanica,object/heat-engine,object/cylinder"></span>

<div class="qlang-switch" data-default="it"></div>



Quesito n. 5.
Conviene esprimere la funzione $W(T)$ nella forma più compatta, in questo modo
$$W(T) = \left( 1 - \frac{T_0}{T} \right) \left( \alpha - \beta T^4 \right)$$
con $\alpha = 13.572$ kW, $\beta = 6.8832 \times 10^{-13}$ kW $\text{K}^{-4}$ .
La derivazione rispetto a $T$ dell’equazione precedente, per trovare il massimo, porterebbe ad un’equazione di
$5^\circ$ grado (v. sotto). Per via numerica si può calcolare $W$ iniziando dal valore già ottenuto per $1600\ ^\circ\text{C}$, con un
passo di $200\ ^\circ\text{C}$ a scendere. Infatti facendo il calcolo a $1600\ ^\circ\text{C}$ si nota che le perdite radiative (rapidamente variabili perché dipendono da $T^4$) sono nettamente maggiori di $W_1$; quindi la temperatura di $1600\ ^\circ\text{C}$ è sicuramente
più alta del valore che ottimizza la potenza meccanica.
Si trova che il massimo sta tra $800\ ^\circ\text{C}$ e $1000\ ^\circ\text{C}$, come appare evidente riportando i valori su un grafico, dato
che $W(600\ ^\circ\text{C}) < W(1000\ ^\circ\text{C})$.

| $T\ [^\circ\text{C}]$ | $T\ [\text{K}]$ | $W\ [\text{kW}]$ |
|---|---|---|
| 1400 | 1673 | 4.30 |
| 1200 | 1473 | 8.27 |
| 1000 | 1273 | 9.05 |
| 800 | 1073 | 9.20 |
| 600 | 873 | 8.75 |

| $T\ [^\circ\text{C}]$ | $T\ [\text{K}]$ | $W\ [\text{kW}]$ |
|---|---|---|
| 900 | 1173 | 9.20 |
| 850 | 1123 | 9.22 |

A questo punto (v. tabella a destra) si può procedere con metodo dicotomico, ma si trova che il valore a
$900\ ^\circ\text{C}$ è uguale, entro la terza cifra, a quello a $800\ ^\circ\text{C}$. Il valore di $W$ a $850\ ^\circ\text{C}$ è appena di poco superiore e
quindi può essere accettato. Ad esso corrisponde una potenza meccanica di 9.22 kW.
Con questo procedimento i calcoli numerici vengono ripetuti solo sette volte.
Un modo alternativo consiste nel calcolare la derivata della $W(T)$ e cercare per via numerica il valore di $T$
per cui essa si annulla:
$$\frac{d W(T)}{dT} = 4\beta T^5 - 3\beta T_0 T^4 - \alpha T_0 = 0$$
si può usare anche qui, in modo equivalente, il metodo dicotomico.
Un metodo iterativo molto efficace si può seguire scrivendo l’equazione precedente in questa forma
$$4\beta T^5 \left( 1 - \frac{3 T_0}{4T} \right) = \alpha T_0 \quad\Rightarrow\quad T = \sqrt[5]{\frac{\alpha T_0}{4\beta (1 - 3 T_0/(4T))}}$$
Poiché $T_0/T \ll 1$ si ottiene una prima approssimazione di $T$ ponendo $T_0/T = 0$ e iterando successivamente in
questo modo:
$$T_1 = \sqrt[5]{\frac{\alpha T_0}{4\beta}} = 1076\ \text{K}$$
e
$$T_n = \sqrt[5]{\frac{\alpha T_0}{4\beta \left( 1 - 3 T_0/(4 T_{n-1}) \right)}}$$
La sequenza può essere limitata alle prime due iterazioni, come mostrato in tabella:

| $T_{n-1}\ [\text{K}]$ | $T_n\ [\text{K}]$ | $T_n\ [^\circ\text{C}]$ | $W\ [\text{kW}]$ |
|---|---|---|---|
| 1076 | 1126 | 853 | 9.205 |
| 1126 | 1124 | 851 | 9.222 |
| 1124 | 1124 | 851 | 9.222 |

**Topic:** [[Thermodynamics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Heat Engine (object)|Heat Engine]], [[Cylinder (object)|Cylinder]]
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)


<div class="qlang-split" data-lang="en"></div>

Question No. 5.
It is appropriate to express the $W(T)$ function in the most compact form, thus
$$W(T) = \left( 1 - \frac{T_0}{T} \right) \left( \alpha - \beta T^4 \right)$$
with $\alpha = 13.572$ kW, $\beta = 6.8832 \times 10^{-13}$ kW $\text{K}^{-4}$ .
The derivation from $T$ of the previous equation, to find the maximum, would lead to an equation of
$5^\circ$ grado (v. (see below). Per via numerica si può calcolare $W$ iniziando dal valore già ottenuto per $1600\ ^\circ\text{C}$, con un
passo di $200\ ^\circ\text{C}$ a scendere. In fact, when calculating at $1600\ ^\circ\text{C}$, you notice that radiative losses (quickly variable because they depend on $T^4$) are significantly higher than $W_1$; therefore the temperature of $1600\ ^\circ\text{C}$ is definitely
higher than the value that optimizes the mechanical power.
The maximum is found to be between $800\ ^\circ\text{C}$ and $1000\ ^\circ\text{C}$, as is evident by returning the values on a graph, given
che $W(600\ ^\circ\text{C}) < W(1000\ ^\circ\text{C})$.

| $T\ [^\circ\text{C}]$ | $T\ [\text{K}]$ | $W\ [\text{kW}]$ |
|---|---|---|
| 1400 | 1673 | 4.30 |
| 1200 | 1473 | 8.27 |
| 1000 | 1273 | 9.05 |
| 800 | 1073 | 9.20 |
| 600 | 873 | 8.75 |

| $T\ [^\circ\text{C}]$ | $T\ [\text{K}]$ | $W\ [\text{kW}]$ |
|---|---|---|
| 900 | 1173 | 9.20 |
| 850 | 1123 | 9.22 |

At this point (v. The value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the value of the
$900\ ^\circ\text{C}$ is equal, within the third digit, to $800\ ^\circ\text{C}$. The value of $W$ to $850\ ^\circ\text{C}$ is just slightly higher and
So it can be accepted. It has a mechanical output of 9.22 kW.
With this procedure, numerical calculations are repeated only seven times.
An alternative method is to calculate the derivative of $W(T)$ and numerically look for the value of $T$
It shall therefore be annulled:
$$\frac{d W(T)}{dT} = 4\beta T^5 - 3\beta T_0 T^4 - \alpha T_0 = 0$$
The dictomy method can also be used here, in an equivalent way.
A very effective iterative method can be followed by writing the previous equation in this form
$$4\beta T^5 \left( 1 - \frac{3 T_0}{4T} \right) = \alpha T_0 \quad\Rightarrow\quad T = \sqrt[5]{\frac{\alpha T_0}{4\beta (1 - 3 T_0/(4T))}}$$
Since $T_0/T \ll 1$ is obtained by first approximating $T$ by placing $T_0/T = 0$ and then iterating into
This way:
$$T_1 = \sqrt[5]{\frac{\alpha T_0}{4\beta}} = 1076\ \text{K}$$
e
$$T_n = \sqrt[5]{\frac{\alpha T_0}{4\beta \left( 1 - 3 T_0/(4 T_{n-1}) \right)}}$$
The sequence may be limited to the first two iterations, as shown in the table:

| $T_{n-1}\ [\text{K}]$ | $T_n\ [\text{K}]$ | $T_n\ [^\circ\text{C}]$ | $W\ [\text{kW}]$ |
|---|---|---|---|
| 1076 | 1126 | 853 | 9.205 |
| 1126 | 1124 | 851 | 9.222 |
| 1124 | 1124 | 851 | 9.222 |

**Topic:** [[Thermodynamics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Heat Engine (object)|Heat Engine]], [[Cylinder (object)|Cylinder]]
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)



<span class="atom-split" id="q06" data-atom="q06" data-title="OII 2005 Nazionale Teorica — Problema 6" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/multi,topic/magnetism,topic/rotational-dynamics,topic/circuits,argomento/meccanica,object/wheel,object/battery,object/block,object/rope-string"></span>

<div class="qlang-switch" data-default="it"></div>



PROBLEMA n. 3 – Sollevamento pesi
100 Punti

Quesito n. 1.
Poiché il cerchione ha resistenza trascurabile, con il collegamento proposto la corrente scorrerà in tutti i bracci
dal centro alla periferia o dalla periferia al centro, a seconda della polarità. L’intensità di corrente in ciascun
raggio risulta $i_0 = V_0/R$.
La tensione del filo tende a far girare la ruota in senso orario, quindi, per avere l’equilibrio, il momento della
forza magnetica agente sui raggi deve essere orientato in senso opposto. La forza magnetica applicata a ciascun
braccio è $\vec{F} = i\,\vec{\ell} \times \vec{B}$ dove $\vec{\ell}$ è un vettore orientato nel verso della corrente: questa dovrà quindi scorrere dal
cerchione verso l’asse della ruota. Quindi il polo della batteria collegato all’asse dovrà essere quello negativo.
Siccome la forza magnetica è uniformemente distribuita, la si può considerare applicata nel centro di ciascun
raggio, e il modulo del momento magnetico complessivo risulta quindi $4 B \ell i_0\, \tfrac{1}{2} \ell = 2 B i_0 \ell^2$.
Per avere l’equilibrio dovrà quindi essere $2 B i_0 \ell^2 = M g \ell$, da cui si ricava:
$$V_0 = \frac{M g R}{2 B \ell} = 0.167\ \text{V}$$

**Topic:** [[Magnetism]], [[Rotational Dynamics]], [[Circuits]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Wheel (object)|Wheel]], [[Battery (object)|Battery]], [[Block (object)|Block]], [[Rope/String (object)|Rope/String]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)


<div class="qlang-split" data-lang="en"></div>

PROBLEM no. 3 – Weight lifting
100 points

Question no. 1.
Since the rim has negligible resistance, with the proposed connection the current will flow in all the spokes from the center to the periphery or from the periphery to the center, depending on the polarity. The current intensity in each spoke is $i_0 = V_0/R$.
The tension of the string tends to make the wheel rotate clockwise, therefore, in order to have equilibrium, the moment of the magnetic force acting on the spokes must be oriented in the opposite direction. The magnetic force applied to each spoke is $\vec{F} = i\,\vec{\ell} \times \vec{B}$ where $\vec{\ell}$ is a vector oriented in the direction of the current: this must therefore flow from the rim toward the axis of the wheel. Therefore the battery terminal connected to the axis must be the negative one.
Since the magnetic force is uniformly distributed, it can be considered applied at the center of each spoke, and the magnitude of the total magnetic moment is therefore $4 B \ell i_0\, \tfrac{1}{2} \ell = 2 B i_0 \ell^2$.
For equilibrium, therefore, we must have $2 B i_0 \ell^2 = M g \ell$, from which we obtain:
$$V_0 = \frac{M g R}{2 B \ell} = 0.167\ \text{V}$$

**Solution:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)



<span class="atom-split" id="q07" data-atom="q07" data-title="OII 2005 Nazionale Teorica — Problema 7" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/multi,topic/electromagnetic-induction,topic/magnetism,topic/circuits,argomento/meccanica,object/wheel"></span>

<div class="qlang-switch" data-default="it"></div>



Quesito n. 2.
Le cariche presenti nei raggi della ruota in moto subiscono una forza uguale alla forza di Lorentz il cui modulo
è $F = |q| v B$. Per una carica a distanza $r$ dall’asse $v = \omega r$. La forza elettromotrice indotta ai capi di ciascun
raggio risulta quindi:
$$\mathcal{E} = \int_0^\ell \frac{F}{q}\, dr = \int_0^\ell B \omega r\, dr = \frac{1}{2} B \omega \ell^2$$
Per quanto riguarda il verso della f.e.m. indotta, se la ruota gira in senso antiorario è tale da favorire una
corrente che va dall’asse verso il bordo.

**Topic:** [[Electromagnetic Induction]], [[Magnetism]], [[Circuits]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Wheel (object)|Wheel]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)


<div class="qlang-split" data-lang="en"></div>

Question No. 2.
The loads present in the radii of the moving wheel shall have a force equal to the Lorentz force whose modulus
è $F = |q| v B$. For a charge at a distance $r$ from the $v = \omega r$ axis. The electromotive force induced at the heads of each
The radius is therefore:
$$\mathcal{E} = \int_0^\ell \frac{F}{q}\, dr = \int_0^\ell B \omega r\, dr = \frac{1}{2} B \omega \ell^2$$
As for the f.e.m. verse. induced, if the wheel turns against the clock, it is such that it favours a
current running from the axis to the edge.

**Topic:** [[Electromagnetic Induction]], [[Magnetism]], [[Circuits]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Wheel (object)|Wheel]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)



<span class="atom-split" id="q08" data-atom="q08" data-title="OII 2005 Nazionale Teorica — Problema 8" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/multi,topic/magnetism,topic/rotational-dynamics,topic/electromagnetic-induction,argomento/meccanica,object/wheel,object/battery,object/block,object/rope-string"></span>

<div class="qlang-switch" data-default="it"></div>



Quesito n. 3.
Poiché il valore di $V$ è superiore a quello trovato al punto 1, il momento delle forze magnetiche è inizialmente
maggiore del momento dato dalla tensione del filo e l’oggetto viene sollevato con una certa accelerazione.
All’aumentare della velocità cresce la f.e.m. indotta che si sottrae a quella fornita dal generatore.
Di conseguenza la corrente in ciascun raggio non è più $i_0$, ma assume il valore (che dipende dalla velocità):
$$i = \frac{V - 1/2\, \ell^2 B \omega}{R} = \frac{V - 1/2\, \ell B v}{R}$$
All’aumentare della velocità diminuisce il momento magnetico $2 B i \ell^2$.
Si raggiunge quindi un equilibrio dinamico quando i due momenti sono uguali:
$$2 B i \ell^2 = M g \ell$$
da cui
$$\frac{2 B \ell V - \ell^2 B^2 v}{R} = M g$$
e infine:
$$v = \frac{2 B \ell V - M g R}{\ell^2 B^2} = \frac{2}{B \ell}(V - V_0) = 3.33\ \text{m}\,\text{s}^{-1}$$
Si nota che la corrente, in condizioni stazionarie, torna al valore $i_0$.

**Topic:** [[Magnetism]], [[Rotational Dynamics]], [[Electromagnetic Induction]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Wheel (object)|Wheel]], [[Battery (object)|Battery]], [[Block (object)|Block]], [[Rope/String (object)|Rope/String]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)


<div class="qlang-split" data-lang="en"></div>

Question No. 3.
Since the value of $V$ is higher than that found in point 1, the moment of magnetic forces is initially
The wire is raised at a certain speed.
The higher the speed, the higher the f.e.m. induced by the generator.
Therefore, the current in each beam is no longer $i_0$, but takes the value (depending on the speed):
$$i = \frac{V - 1/2\, \ell^2 B \omega}{R} = \frac{V - 1/2\, \ell B v}{R}$$
The speed increases and the magnetic momentum $2 B i \ell^2$ decreases.
A dynamic balance is then achieved when the two moments are equal:
$$2 B i \ell^2 = M g \ell$$
from which
$$\frac{2 B \ell V - \ell^2 B^2 v}{R} = M g$$
And finally:
$$v = \frac{2 B \ell V - M g R}{\ell^2 B^2} = \frac{2}{B \ell}(V - V_0) = 3.33\ \text{m}\,\text{s}^{-1}$$
It is noted that the current, under stationary conditions, returns to $i_0$.

**Topic:** [[Magnetism]], [[Rotational Dynamics]], [[Electromagnetic Induction]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Wheel (object)|Wheel]], [[Battery (object)|Battery]], [[Block (object)|Block]], [[Rope/String (object)|Rope/String]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)



<span class="atom-split" id="q09" data-atom="q09" data-title="OII 2005 Nazionale Teorica — Problema 9" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/multi,topic/magnetism,topic/rotational-dynamics,topic/circuits,argomento/meccanica,object/wheel,object/battery"></span>

<div class="qlang-switch" data-default="it"></div>



Quesito n. 4.
Il rendimento è dato dal rapporto tra la potenza necessaria per il sollevamento della massa a velocità costante
e la potenza erogata dal generatore:
$$\eta = \frac{M g v}{4 V i_0} = \frac{B \ell v}{2 V} = \left( 1 - \frac{V_0}{V} \right) = 33\ \%$$

**Topic:** [[Magnetism]], [[Rotational Dynamics]], [[Circuits]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Wheel (object)|Wheel]], [[Battery (object)|Battery]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)


<div class="qlang-split" data-lang="en"></div>

Question No. 4.
The yield is given by the ratio of the power required to lift the mass at a constant speed
And the power of the generator.
$$\eta = \frac{M g v}{4 V i_0} = \frac{B \ell v}{2 V} = \left( 1 - \frac{V_0}{V} \right) = 33\ \%$$

**Topic:** [[Magnetism]], [[Rotational Dynamics]], [[Circuits]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Wheel (object)|Wheel]], [[Battery (object)|Battery]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)



<span class="atom-split" id="q10" data-atom="q10" data-title="OII 2005 Nazionale Teorica — Problema 10" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/multi,topic/magnetism,topic/rotational-dynamics,topic/electromagnetic-induction,argomento/meccanica,object/wheel,object/block,object/rope-string"></span>

<div class="qlang-switch" data-default="it"></div>



Quesito n. 5.
Valgono ancora le considerazioni svolte al punto 3, ma questa volta con $V = 0$. Risulta quindi:
$$v' = \frac{2 V_0}{B \ell} = \frac{M g R}{B^2 \ell^2} = 6.67\ \text{m}\,\text{s}^{-1}$$

**Topic:** [[Magnetism]], [[Rotational Dynamics]], [[Electromagnetic Induction]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Wheel (object)|Wheel]], [[Block (object)|Block]], [[Rope/String (object)|Rope/String]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)


<div class="qlang-split" data-lang="en"></div>

Question No. 5.
The considerations in point 3 are still valid, but this time with $V = 0$. It follows:
$$v' = \frac{2 V_0}{B \ell} = \frac{M g R}{B^2 \ell^2} = 6.67\ \text{m}\,\text{s}^{-1}$$

**Topic:** [[Magnetism]], [[Rotational Dynamics]], [[Electromagnetic Induction]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Wheel (object)|Wheel]], [[Block (object)|Block]], [[Rope/String (object)|Rope/String]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)



<span class="atom-split" id="q11" data-atom="q11" data-title="OII 2005 Nazionale Teorica — Problema 11" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/multi,topic/magnetism,topic/rotational-dynamics,topic/thermodynamics,argomento/meccanica,object/wheel"></span>

<div class="qlang-switch" data-default="it"></div>



Quesito n. 6.
Come già accennato, in condizioni di velocità costante il momento delle forze magnetiche equilibra il momento
della tensione e quindi la corrente assume il valore $i_0$ calcolato al punto 1 sia in salita che in discesa.
La variazione di temperatura è proporzionale al calore sviluppato per effetto Joule e quindi proporzionale
a $i^2$ e al periodo di rotazione. Di conseguenza il riscaldamento in un giro sarà maggiore quando la velocità è
minore.
Essendo
$$\frac{v}{v'} = \frac{V - V_0}{V_0}$$
per $V > 2 V_0$ la velocità è maggiore in salita e il riscaldamento è maggiore in discesa; viceversa per $2 V_0 < V < V_0$,
come accade con i valori numerici assegnati.
NOTA: Il problema è stato sviluppato da un’idea di Andrea Stefanini dell’I.T.I. di Livorno, al quale il Gruppo
Olimpiadi rivolge un sentito ringraziamento per la collaborazione.
Materiale prodotto dal gruppo
OLIMPIADI
PROGETTO
PROGETTO OLIMPIADI
Segreteria Olimpiadi Italiane della Fisica
presso Liceo Scientifico “U. Morin”
VENEZIA MESTRE
fax: 041.584.1272
e-mail: olifis@libero.it

 Zanichelli editore

La Gara Nazionale è realizzata con il sostegno di
Ministero dell’Istruzione, dell’Università e della Ricerca
Comune di Senigallia
Liceo Scientifico “E. Medi” di Senigallia

**Topic:** [[Magnetism]], [[Rotational Dynamics]], [[Thermodynamics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Wheel (object)|Wheel]]
**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)


<div class="qlang-split" data-lang="en"></div>

Problem no. 6.
As already mentioned, under conditions of constant speed the torque of the magnetic forces balances the torque of the tension and therefore the current takes the value $i_0$ calculated in point 1 both going up and going down.
The temperature variation is proportional to the heat developed by the Joule effect and therefore proportional to $i^2$ and to the rotation period. Consequently, the heating in one turn will be greater when the speed is lower.
Since
$$\frac{v}{v'} = \frac{V - V_0}{V_0}$$ for $V > 2 V_0$ the speed is greater going up and the heating is greater going down; vice versa for $2 V_0 < V < V_0$, as happens with the assigned numerical values.
NOTE: The problem was developed from an idea by Andrea Stefanini of the I.T.I. of Livorno, to whom the Olympiad Group extends heartfelt thanks for the collaboration.
Material produced by the group
OLYMPIADS
PROJECT
OLYMPIAD PROJECT
Secretariat of the Italian Physics Olympiads at Liceo Scientifico “U. Morin”
VENEZIA MESTRE fax: 041.584.1272 e-mail: olifis@libero.it

 Zanichelli publisher

The National Competition is carried out with the support of
Ministry of Education, Universities and Research
Municipality of Senigallia
Liceo Scientifico “E. Medi” of Senigallia

**Solution:** [Soluzioni (PDF)](https://drive.google.com/file/d/1fK3L6uika0gScRj0cqfcTLsPwyxm_Una/view)
