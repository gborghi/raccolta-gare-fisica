---
title: PLANCKS 2015 — Leiden
tipo: prova
tags:
  - kg/prova
  - paese/international
  - comp/PLANCKS
---
<div class="atom-reader" data-prova="plancks_2015"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="PLANCKS 2015 — Leiden — Quesito 1" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/special-relativity,argomento/fisica-moderna,difficolta/5,multidisciplina/multi,object/point-charge,object/electron,object/particle-beam"></span>

<div class="qlang-switch" data-default="en"></div>



**A Positron in an Electric Field** (Jom Luiten — TU Eindhoven)

A positron with mass $m$, charge $e$ and initial (i.e. at time $t=0$) velocity $\vec u_0 = u_0 \hat e_y$ is injected into a uniform electric field $\vec E = E_0 \hat e_x$, i.e. at right angles with the electric field lines. We will study the counter-intuitive motion at relativistic speeds and the curved trajectory of the accelerated positron. *Some useful formulas can be found on the next page.*

**(1.1)** *[1 point]* Show that the relativistic Lorentz factor of the accelerated positron is given by

$$
\gamma(t) = \sqrt{1 + \frac{(eE_0 t)^2 + p_0^2}{m^2 c^2}},
$$

where $p_0 = m u_0 / \sqrt{1 - u_0^2/c^2}$ is the initial positron momentum and $c$ is the speed of light. Give a detailed derivation with clear instructions for each step.

**(1.2)** *[1 point]* Derive expressions for the position velocities $u_x(t)$ and $u_y(t)$ as functions of time in respectively the $x$-direction and the $y$-direction.

**(1.3)** *[1 point]* Make a single plot in which both $u_x(t)/u_0$ and $u_y(t)/u_0$ are shown as function of time. Express time along the horizontal axis in units of $eE_0 t/\sqrt{p_0^2 + m^2 c^2}$.

**(1.4)** *[1 point]* Discuss and explain both the initial and the asymptotic behaviour of $u_x(t)$ and, in particular, $u_y(t)$, since the latter displays a quite surprising non-Newtonian behavior: the particle is apparently decelerated in a direction in which there is no force.

One of the biggest problems in particle accelerator physics is how to deal with the Coulomb repulsions between particles in the beam. To get a sufficient number of events in colliders, for example, hundreds of millions of charged particles need to be packed into a very compact bunch. For the planned ILC, the successor of the LHC, positrons will be colliding with electrons at a kinetic energy of $0.5$ TeV, in bunches hundreds of microns in length and only tens of nanometers across. We will now first investigate how mutual Coulomb repulsion between two positrons travelling side by side in a beam leads to expanding. Subsequently we will see that relativistic effects do come to our rescue here, when we look at the 'Coulomb bomb'.

We first consider the problem in the centre-of-mass inertial frame, in which electron 1 is initially ($t=0$) at position $x_1(t=0) = x_0$ and electron 2 at position $x_2(t=0) = -x_0$. They are initially at rest: $\dot x_1(t=0) = \dot x_2(t=0) = 0$. We assume the velocities the electrons reach in the centre-of-mass frame remain non-relativistic (Newtonian mechanics) is allowed.

**(1.5)** *[2 points]* Show that the time $t$ it takes for the electron initially at position $x_0$ to reach position $x$ is given by

$$
\frac{t}{t_0} = \sqrt{\left(\frac{x}{x_0}-1\right)\frac{x}{x_0}} + \ln\left(\sqrt{\frac{x}{x_0}-1} + \sqrt{\frac{x}{x_0}}\right),
$$

with $t_0 = \sqrt{\dfrac{8\pi\varepsilon_0 m x_0^3}{e^2}}$. Give a detailed derivation with clear instructions for each step. Hint: use conversion of potential energy into kinetic energy.

**(1.6)** *[2 points]* Make a plot of $\frac{t}{t_0}$ as a function of $x$ from $x = x_0$ for $x = 5 x_0$. Derive an expression for the asymptotic speed $v_\infty$ the electrons reach for $|x| \gg |x_0|$. Add a curve to the plot displaying motion at constant velocity $v_\infty$. For which intensity (number of charged particles per unit volume) is this non-relativistic treatment justified? Discuss whether a situation might occur in practice where the non-relativistic treatment would not be a good approximation.

**(1.7)** *[2 points]* Now consider the problem in the lab frame, in which both electrons initially are moving with velocity $v_z \gg v_\infty$ in the $z$-direction, satisfying $v_z(0) = \pm z_0$, $\dot x_1(0) = \dot x_2(0) = 0$. Derive expressions for the electric and the magnetic field vector due to electron 2 at the position of electron 1.

**(1.8)** *[2 points]* At relativistic speeds the problems of Coulomb repulsion are fortunately softened by relativistic effects. Calculate the force exerted by electron 2 on electron 1 as a function of $z_1$. Using the fact that $v_z \gg v_\infty$, so that the Lorentz factor may be approximated by $\gamma = 1/\sqrt{1 - v_z^2/c^2}$, show that the repulsion in the lab frame is suppressed by a factor $1/\gamma^2$ with respect to the center-of-mass frame, i.e. compared to non-relativistic, Newtonian intuition. Use basic relativistic arguments, like time dilation and relativistic increase of the mass, to explain this suppression. Discuss why this suppression is essential for the point of collision in the future ILC collider.

**Useful formulas.** Relativistic equation of motion: $\vec F = \dot{\vec p} = \gamma m \vec u$, with $\vec F$ the applied force and $\gamma = (1 - u^2/c^2)^{-1/2} = (1-\beta^2)^{-1/2}$ the relativistic Lorentz factor. The total energy of the particle is given by $E = \gamma m c^2 = mc^2 + E_{kin}$, with $mc^2$ the rest energy of the particle and $E_{kin} = (\gamma - 1)mc^2$ the kinetic energy gained through acceleration. Note: this is *not* the familiar Newtonian kinetic energy.

Transformation of electric fields: $\overline{\vec E}^{\,\perp} = \gamma(\vec E^\perp + \vec v \times \vec B^\perp)$, $\overline E^{\,//} = E^{//}$, where the 'bar' reference frame has velocity $\vec v$ with respect to the 'non-bar' frame and $\perp$ denotes the electric field component perpendicular to $\vec v$ and $//$ parallel to $\vec v$. Transformation of magnetic fields: $\overline{\vec B}^{\,\perp} = \gamma(\vec B^\perp - \vec v \times \vec E^\perp/c^2)$, $\overline B^{\,//} = B^{//}$. Take care of $+$ and $-$ signs!

**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Special Relativity]], [[Electromagnetism]]
**Metodi:** [[Relativistic Energy-Momentum (metodo)|Relativistic Energy-Momentum]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Lorentz Transformation (metodo)|Lorentz Transformation]], [[Conservation of Energy (metodo)|Conservation of Energy]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Point Charge (object)|Point Charge]], [[Electron (object)|Electron]], [[Particle Beam (object)|Particle Beam]]


<div class="qlang-split" data-lang="it"></div>

**Un positrone in un campo elettrico** (Jom Luiten — TU Eindhoven)

Un positrone di massa $m$, carica $e$ e velocità iniziale (cioè all'istante $t=0$) $\vec u_0 = u_0 \hat e_y$ viene iniettato in un campo elettrico uniforme $\vec E = E_0 \hat e_x$, cioè perpendicolarmente alle linee del campo elettrico. Studieremo il moto controintuitivo a velocità relativistiche e la traiettoria curva del positrone accelerato. *Alcune formule utili si trovano nella pagina seguente.*

**(1.1)** *[1 punto]* Mostra che il fattore di Lorentz relativistico del positrone accelerato è dato da

$$
\gamma(t) = \sqrt{1 + \frac{(eE_0 t)^2 + p_0^2}{m^2 c^2}},
$$

dove $p_0 = m u_0 / \sqrt{1 - u_0^2/c^2}$ è la quantità di moto iniziale del positrone e $c$ è la velocità della luce. Fornisci una derivazione dettagliata con istruzioni chiare per ogni passaggio.

**(1.2)** *[1 punto]* Ricava le espressioni per le velocità $u_x(t)$ e $u_y(t)$ in funzione del tempo rispettivamente nella direzione $x$ e nella direzione $y$.

**(1.3)** *[1 punto]* Traccia un unico grafico in cui siano mostrati sia $u_x(t)/u_0$ sia $u_y(t)/u_0$ in funzione del tempo. Esprimi il tempo lungo l'asse orizzontale in unità di $eE_0 t/\sqrt{p_0^2 + m^2 c^2}$.

**(1.4)** *[1 punto]* Discuti e spiega sia il comportamento iniziale sia quello asintotico di $u_x(t)$ e, in particolare, di $u_y(t)$, poiché quest'ultimo mostra un comportamento non newtoniano piuttosto sorprendente: la particella viene apparentemente decelerata in una direzione in cui non agisce alcuna forza.

Uno dei maggiori problemi nella fisica degli acceleratori di particelle è come trattare le repulsioni coulombiane tra le particelle nel fascio. Per ottenere un numero sufficiente di eventi nei collisori, ad esempio, centinaia di milioni di particelle cariche devono essere impacchettate in un pacchetto molto compatto. Per il progettato ILC, il successore dell'LHC, i positroni collideranno con gli elettroni a un'energia cinetica di $0.5$ TeV, in pacchetti lunghi centinaia di micron e larghi solo decine di nanometri. Ora studieremo dapprima come la repulsione coulombiana reciproca tra due positroni che viaggiano affiancati in un fascio porti a un'espansione. Successivamente vedremo che qui gli effetti relativistici vengono in nostro soccorso, quando esaminiamo la 'bomba di Coulomb'.

Consideriamo dapprima il problema nel sistema di riferimento inerziale del centro di massa, in cui l'elettrone 1 si trova inizialmente ($t=0$) nella posizione $x_1(t=0) = x_0$ e l'elettrone 2 nella posizione $x_2(t=0) = -x_0$. Sono inizialmente in quiete: $\dot x_1(t=0) = \dot x_2(t=0) = 0$. Assumiamo che le velocità raggiunte dagli elettroni nel sistema del centro di massa rimangano non relativistiche (è consentita la meccanica newtoniana).

**(1.5)** *[2 punti]* Mostra che il tempo $t$ impiegato dall'elettrone inizialmente in posizione $x_0$ per raggiungere la posizione $x$ è dato da

$$
\frac{t}{t_0} = \sqrt{\left(\frac{x}{x_0}-1\right)\frac{x}{x_0}} + \ln\left(\sqrt{\frac{x}{x_0}-1} + \sqrt{\frac{x}{x_0}}\right),
$$

con $t_0 = \sqrt{\dfrac{8\pi\varepsilon_0 m x_0^3}{e^2}}$. Fornisci una derivazione dettagliata con istruzioni chiare per ogni passaggio. Suggerimento: usa la conversione dell'energia potenziale in energia cinetica.

**(1.6)** *[2 punti]* Traccia un grafico di $\frac{t}{t_0}$ in funzione di $x$ da $x = x_0$ fino a $x = 5 x_0$. Ricava un'espressione per la velocità asintotica $v_\infty$ raggiunta dagli elettroni per $|x| \gg |x_0|$. Aggiungi al grafico una curva che mostri il moto a velocità costante $v_\infty$. Per quale intensità (numero di particelle cariche per unità di volume) è giustificato questo trattamento non relativistico? Discuti se in pratica possa verificarsi una situazione in cui il trattamento non relativistico non sarebbe una buona approssimazione.

**(1.7)** *[2 punti]* Considera ora il problema nel sistema del laboratorio, in cui entrambi gli elettroni si muovono inizialmente con velocità $v_z \gg v_\infty$ nella direzione $z$, soddisfacendo $v_z(0) = \pm z_0$, $\dot x_1(0) = \dot x_2(0) = 0$. Ricava le espressioni per il vettore campo elettrico e per il vettore campo magnetico dovuti all'elettrone 2 nella posizione dell'elettrone 1.

**(1.8)** *[2 punti]* Alle velocità relativistiche i problemi della repulsione coulombiana sono fortunatamente attenuati dagli effetti relativistici. Calcola la forza esercitata dall'elettrone 2 sull'elettrone 1 in funzione di $z_1$. Usando il fatto che $v_z \gg v_\infty$, cosicché il fattore di Lorentz può essere approssimato da $\gamma = 1/\sqrt{1 - v_z^2/c^2}$, mostra che la repulsione nel sistema del laboratorio è soppressa di un fattore $1/\gamma^2$ rispetto al sistema del centro di massa, cioè rispetto all'intuizione non relativistica newtoniana. Usa argomenti relativistici di base, come la dilatazione temporale e l'aumento relativistico della massa, per spiegare questa soppressione. Discuti perché questa soppressione è essenziale per il punto di collisione nel futuro collisore ILC.

**Formule utili.** Equazione del moto relativistica: $\vec F = \dot{\vec p} = \gamma m \vec u$, con $\vec F$ la forza applicata e $\gamma = (1 - u^2/c^2)^{-1/2} = (1-\beta^2)^{-1/2}$ il fattore di Lorentz relativistico. L'energia totale della particella è data da $E = \gamma m c^2 = mc^2 + E_{kin}$, con $mc^2$ l'energia a riposo della particella ed $E_{kin} = (\gamma - 1)mc^2$ l'energia cinetica acquisita attraverso l'accelerazione. Nota: questa *non* è la familiare energia cinetica newtoniana.

Trasformazione dei campi elettrici: $\overline{\vec E}^{\,\perp} = \gamma(\vec E^\perp + \vec v \times \vec B^\perp)$, $\overline E^{\,//} = E^{//}$, dove il sistema di riferimento 'con barra' ha velocità $\vec v$ rispetto al sistema 'senza barra' e $\perp$ indica la componente del campo elettrico perpendicolare a $\vec v$ e $//$ quella parallela a $\vec v$. Trasformazione dei campi magnetici: $\overline{\vec B}^{\,\perp} = \gamma(\vec B^\perp - \vec v \times \vec E^\perp/c^2)$, $\overline B^{\,//} = B^{//}$. Fai attenzione ai segni $+$ e $-$!

**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Special Relativity]], [[Electromagnetism]]
**Metodi:** [[Relativistic Energy-Momentum (metodo)|Relativistic Energy-Momentum]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Lorentz Transformation (metodo)|Lorentz Transformation]], [[Conservation of Energy (metodo)|Conservation of Energy]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Point Charge (object)|Point Charge]], [[Electron (object)|Electron]], [[Particle Beam (object)|Particle Beam]]



<span class="atom-split" id="q02" data-atom="q02" data-title="PLANCKS 2015 — Leiden — Quesito 2" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/elasticity-and-materials,argomento/meccanica,difficolta/5,multidisciplina/multi,object/rod,object/beam"></span>

<div class="qlang-switch" data-default="en"></div>



**Configurations of DNA Molecules** (Helmut Schiessel — Leiden University)

DNA is a rather stiff polymer. Its mechanical properties can be well approximated by the wormlike chain model, that describes DNA as an elastic rod with fixed contour length and a local bending energy (per length) that is given by $(A/2)\cdot(1/R^2)$. Here $A$ denotes the bending modulus of the rod and $R$ the local radius of curvature.

The shapes of such rods under various boundary conditions have been worked out by Leonhard Euler in 1744, see Figure 1. These shapes, the so-called Euler elasticas, are described by elliptic functions that are difficult to deal with. A useful approximation that typically deviates only about 10% from the exact result is the circle-line approximation. One replaces the exact shape by a set of straight lines and sections of circles that are connected smoothly. As an example, consider one half of the lying figure 8 that Euler happened to call Fig. 8 (see Figure 1). One obtains this shape when one bends a beam such that its two ends touch, a relevant minimization problem that asks how to distribute the curvature along the rod into a tensionless figure (see Figure 1).

> ![[PLANCKS_2015_p2_f1.png]]
> *Figure 1: Euler's 1744 drawings of the elasticas.*

**(2.1)** *[3 points]* Estimate this angle using a circle-line approximation. You can approximate the teardrop loop by two lines that touch at one end and are connected via a circular section at the other end. Assume that the total length of the teardrop is constant. This relevant minimization problem can be solved analytically (with respect to the angle). What is the optimal angle?

> ![[PLANCKS_2015_p2_f2.png]]
> *Figure 2: Configuration of a wormlike chain.*

We consider next a free DNA molecule, i.e. a molecule without any constraints, but account for thermal fluctuations. One can show that for a wormlike chain (see Figure 2) the orientations $\hat t(s)$ and $\hat t(s+l_P)$ of the tangents along the molecule, separated by a contour length $l_P$ (the persistence length, $l_P \approx 50$ nm for DNA), are uncorrelated. More precisely, the tangent-tangent correlation function decays exponentially with the contour length of the chain:

$$
\langle \hat t(0) \cdot \hat t(s) \rangle = e^{-s/l_P}.
$$

We consider now the above case to the case of a perfectly flexible polymer that have no constraints whatsoever — the so-called freely jointed chain. As shown in Figure 3, this chain is characterized by the set of bond vectors $\{\vec r_1, \vec r_2, \dots, \vec r_N\}$ (see figure 3).

> ![[PLANCKS_2015_p2_f3.png]]
> *Figure 3: The freely jointed chain.*

**(2.2)** *[1 point]* Calculate the value $a$ of the r.h.s. are solutions to the Legendre equation, the end-to-end distance vector $\vec R$ of the polymer chain in terms of the bond vectors.

**(2.3)** *[1 point]* Determine for this polymer model the mean-squared end-to-end distance $\langle R^2 \rangle = \langle \vec R^2 \rangle = \left\langle \left(\sum_{i=1}^N \vec r_i\right)^2 \right\rangle$. Hint: use the facts that each bond has a fixed length, $\langle \vec r_i^2 \rangle = b^2$, and that different bonds are uncorrelated from each other, i.e. $\langle \vec r_i \cdot \vec r_j \rangle = 0$ for $i \neq j$.

**(2.4)** *[1 point]* Long wormlike chains with $L \gg l_P$ look like flexible chains on large length scales. Show this by comparing the expressions for $\langle R^2 \rangle$ from 2.2 and 2.3.

**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Elasticity & Materials]], [[Mathematics]]
**Metodi:** [[Stress-Strain Analysis (metodo)|Stress-Strain Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Rod (object)|Rod]], [[Beam (object)|Beam]]


<div class="qlang-split" data-lang="it"></div>

**Configurazioni delle molecole di DNA** (Helmut Schiessel  Leiden University)

Il DNA è un polimero piuttosto rigido. Le sue proprietà meccaniche possono essere ben approssimate dal modello di catena simile a vermi, che descrive il DNA come una barra elastica con lunghezza di contorno fissa e un'energia di piegatura locale (per lunghezza) che viene data da $(A/2)\cdot(1/R^2)$. Qui $A$ indica il modulo di piegatura della canna e $R$ il raggio di curvatura locale.

Le forme di tali bastone in varie condizioni di confine sono state elaborate da Leonhard Euler nel 1744, vedi Figura 1. Queste forme, le cosiddette Euler elasticas, sono descritte da funzioni ellitte difficili da gestire. Un approssimazione utile che in genere si devia solo del 10% dal risultato esatto è l'approssimazione circolo-linea. Uno sostituisce la forma esatta con un insieme di linee rette e sezioni di cerchi che sono collegati senza problemi. Per esempio, consideriamo la metà della figura 8 che Euler chiama Fig. 8 (vedi figura 1). Si ottiene questa forma quando si piega un fascio in modo tale che le sue due estremità si toccino, un problema di minimizzazione rilevante che chiede come distribuire la curvatura lungo la canna in una figura senza tensione (vedi Figura 1).

> ![[PLANCKS_2015_p2_f1.png]]
> *Figura 1: disegni di Euler 1744 delle elastica.*

**(2.1) ** *[3 punti] * Estimare questo angolo utilizzando un approccio a una linea circolare. Si può approssimare il ciclo di lacrime con due linee che si toccano ad una estremità e sono collegate attraverso una sezione circolare all'altra estremità. Supponiamo che la lunghezza totale della goccia sia costante. Questo problema di minimizzazione rilevante può essere risolto analiticamente (in relazione all'angolo). Qual è l'angolo ottimale?

> ![[PLANCKS_2015_p2_f2.png]]
> *Figura 2: Configurazione di una catena vermiforme.*

Consideramo quindi una molecola di DNA libera, cioè una molecola senza vincoli, ma che si basa su fluttuazioni termiche. Si può dimostrare che per una catena vermiforme (vedi Figura 2) gli orientamenti $\hat t(s)$ e $\hat t(s+l_P)$ delle tangenti lungo la molecola, separati da una lunghezza di contorno $l_P$ (la lunghezza di persistenza, $l_P \approx 50$ nm per il DNA), non sono correlati. Più precisamente, la funzione di correlazione tangente-tangente decade esponenzialmente con la lunghezza del contorno della catena:

$$
\langle \hat t(0) \cdot \hat t(s) \rangle = e^{-s/l_P}.
$$

Considerando ora il caso di cui sopra, il caso di un polimero perfettamente flessibile che non ha alcuna limitazione  la cosiddetta catena di freeware joint. Come mostrato alla figura 3, questa catena è caratterizzata dall'insieme di vettori di legame $\{\vec r_1, \vec r_2, \dots, \vec r_N\}$ (vedere figura 3).

> ![[PLANCKS_2015_p2_f3.png]]
> *Figura 3: La catena di freature connessioni.*

**(2.2) ** *[1 punto] * Calcolare il valore $a$ delle r.h.s. sono soluzioni dell'equazione di Legendre, il vettore di distanza da estremità a estremità $\vec R$ della catena polimerica in termini di vettori di legame.

**(2.3) ** *[1 punto] * Determinare per questo modello polimerico la distanza media quadrata di fine a fine $\langle R^2 \rangle = \langle \vec R^2 \rangle = \left\langle \left(\sum_{i=1}^N \vec r_i\right)^2 \right\rangle$. Suggerimento: utilizzare i fatti che ogni obbligazione ha una lunghezza fissa, $\langle \vec r_i^2 \rangle = b^2$, e che i diversi obbligazioni non sono correlati tra loro, ovvero $\langle \vec r_i \cdot \vec r_j \rangle = 0$ per $i \neq j$.

**(2.4) ** *[1 punto] * Lungi catene vermiche con $L \gg l_P$ sembrano catene flessibili su grandi scale di lunghezza. Mostra questo confrontando le espressioni per $\langle R^2 \rangle$ da 2.2 e 2.3.

**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Elasticity & Materials]], [[Mathematics]]
**Metodi:** [[Stress-Strain Analysis (metodo)|Stress-Strain Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Rod (object)|Rod]], [[Beam (object)|Beam]]



<span class="atom-split" id="q03" data-atom="q03" data-title="PLANCKS 2015 — Leiden — Quesito 3" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/newtonian-mechanics,argomento/meccanica,difficolta/5,multidisciplina/mono,object/spring"></span>

<div class="qlang-switch" data-default="en"></div>



**Falling Slinky** (Martin van Exter — Leiden University)

Consider a slinky (i.e. a flexible open spring) suspended from its top and at rest. When you release the top end the time evolution of the slinky is fascinating, as shown in the series of pictures below. To describe this phenomenon, we consider an ideal uniform slinky of mass $m$, and negligible rest length, for which each segment obeys Hooke's law (force $\propto$ extension): $F = kL$. We will consider both its static shape and its dynamic evolution in free fall.

> ![[PLANCKS_2015_p3_f1.png]]
> *Figure 1.*

**(3.1)** *[1 point]* Describe the (vertical) shape of the slinky at rest (left frame). Hint: denote points on the slinky by a dimensionless variable $x$, ranging from $x = 0$ at the bottom to $x = l$ at the top and describe its shape by specifying the height $L(x)$ of each segment above the bottom of the slinky.

**(3.2)** *[1 point]* Explain in words why the slinky behaves the way it does while falling.

**(3.3)** *[1 point]* How long will it take for the top of the slinky to reach the bottom of the slinky? How does this result compare with the fall time of a small object falling from the same height $L$?

**(3.4)** *[1 point]* Derive equations (you don't have to solve them) to describe the distance $\Delta L(t)$ travelled by the top of the slinky at a time $t$ after 'launch', up to moment when it reaches the bottom of the slinky.

**Fonte:** [Testo (PDF) — p.8](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Newtonian Mechanics]], [[Oscillations & Waves]]
**Metodi:** [[Hooke's Law (metodo)|Hooke's Law]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Spring (object)|Spring]]


<div class="qlang-split" data-lang="it"></div>

**Falling Slinky** (Martin van Exter  Leiden University)

Considerate un slinky (cioè: una sorgente aperta flessibile) sospesa dalla sua parte superiore e in riposo. Quando si libera la parte superiore, l'evoluzione temporale della griglia è affascinante, come mostrato nella serie di immagini qui sotto. Per descrivere questo fenomeno, consideriamo un idealista slinky uniforme di massa $m$, e lunghezza di riposo trascurabile, per il quale ogni segmento obbedisce alla legge di Hooke (forza $\propto$ estensione): $F = kL$. Considereremo sia la sua forma statica che la sua evoluzione dinamica nella caduta libera.

> ![[PLANCKS_2015_p3_f1.png]]
> *Figura 1.*

**(3.1) ** *[1 punto] * Descrivere la forma (verticale) del pendolo in riposo (quadro sinistro). Suggerimento: indicare i punti sul slinky con una variabile senza dimensioni $x$, che va da $x = 0$ in basso a $x = l$ in alto e descrivere la sua forma specificando l'altezza $L(x)$ di ogni segmento sopra il fondo del slinky.

**(3.2) ** *[1 punto] * Spiegare in parole perché il pesce si comporta come fa quando cade.

**(3.3) ** *[1 punto] * Quanto tempo ci vorrà prima che la parte superiore del slinky raggiunga il fondo del slinky? Come si confronta questo risultato con il tempo di caduta di un piccolo oggetto che cade dalla stessa altezza $L$?

**(3.4) ** *[1 punto] * Derivare equazioni (non è necessario risolverle) per descrivere la distanza $\Delta L(t)$ percorsa dalla parte superiore del slinky in un momento $t$ dopo il "lancio", fino al momento in cui raggiunge la parte inferiore del slinky.

**Fonte:** [Testo (PDF) — p.8](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Newtonian Mechanics]], [[Oscillations & Waves]]
**Metodi:** [[Hooke's Law (metodo)|Hooke's Law]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Spring (object)|Spring]]



<span class="atom-split" id="q04" data-atom="q04" data-title="PLANCKS 2015 — Leiden — Quesito 4" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/modern-quantum-physics,argomento/fisica-moderna,difficolta/5,multidisciplina/multi,object/electron,object/particle-beam"></span>

<div class="qlang-switch" data-default="en"></div>



**Measuring Interlayer States in Graphene and Graphite** (Sense Jan van der Molen — Leiden University)

In a low-energy electron microscope (LEEM), electrons probe the properties of a sample by interacting coherently with the sample's top layers (see Fig. 1). The reflected electrons are collected by a pixel detector to make a spatial image. The energy with which the electrons land, $E$, is tunable between roughly $0$ and $50$ eV. These numbers are defined with respect to the so-called vacuum energy $E_{vac}$, which we take as our zero, i.e. $E_{vac} = 0$. In vacuum, the electron dispersion relation, relating the electron energy $E$ and the electron wave number $k$, is given by

$$
E(k) = \frac{\hbar^2 k^2}{2 m_0},
$$

where $m_0$ is the rest mass of the free electron, and $\hbar = \frac{h}{2\pi}$ with $h$ the Planck constant. By correcting for lens errors (aberrations), the LEEM in Leiden has a lateral resolution (i.e. in the plane) of $1.4$ nm at $5$ eV.

> ![[PLANCKS_2015_p4_f1.png]]
> *Figure 1.*

**(4.1)** *[1 point]* Express the resolution in terms of the wave length lambda at $5$ eV. Is there, in principle, room for improvement?

**(4.2)** *[1 point]* What should happen to the resolution if the electron landing energy approaches $0$ eV? What does the latter situation mean, physically?

Interestingly, LEEM does not only have a good lateral resolution. It is also an ideal probe to study the properties of layered materials in the vertical $z$-direction. The simplest example would be two layers of graphene (graphene is a hexagonal sheet of carbon atoms, the structure within each layer being so strong that we can consider it a specific electron crystal). This idea is summarized by the following picture, in which a specific energy approaches $0.5$ eV, in bunches hundreds of microns in length and only tens of nanometers across. We will now first investigate how electron energy $z$ and vertical electron wave vector $k_z$. To calculate $E(k_z)$, we first construct a wave function in $k_z$ space by taking a Fourier transform of the interlayer wave functions in $z$-space, such that:

$$
|k_z\rangle = \frac{1}{\sqrt N} \sum_{n=1}^N e^{i n k_z c} |\Psi_n\rangle,
$$

where $|\Psi_n\rangle$ denotes the $n$th interlayer state.

> ![[PLANCKS_2015_p4_f2.png]]
> *Figure 2.*

**(4.3)** *[2 points]* Calculate the dispersion relation $\varepsilon(k_z)$ by calculating $\langle k_z | H | k_z \rangle$. We assume that only the nearest neighbor interlayer states couple, again with hopping integral $-t$. Interlayer states that are further away from each other have zero coupling.

**(4.4)** *[1 point]* Sketch the $E(E)$ curve one expects to measure for graphite. Make clear which energy scales are involved.

**(4.5)** *[1 point]* Let us go to two layers of graphene (see 4.3-4.5). Up to now, we have assumed the electron beam to reach the sample at normal incidence. Suppose we change the angle of incidence from normal towards near-grazing incidence (i.e. the electron comes in almost horizontally).

**(4.6)** *[2 points]* Calculate the dispersion relation $\varepsilon(k_z)$ by calculating $\langle k_z | H | k_z \rangle$. We assume that only the nearest neighbor interlayer states couple, again with hopping integral $-t$. Interlayer states that are further away from each other have zero coupling.

**(4.7)** *[1 point]* Sketch the $I(E)$ curve one expects to measure for graphite. Make clear which energy scales are involved.

**(4.8)** *[2 points]* What will happen to the energetic position of the dip in the $I(E)$ curve of double layer graphene (Fig. 2) as the angle is changed from normal to off-normal? Explain why. (You may give a qualitative answer and use a sketch. However, do explain the basic physics.)

**Fonte:** [Testo (PDF) — p.9](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Modern-Quantum Physics]], [[Wave Optics]]
**Metodi:** [[de Broglie Relation (metodo)|de Broglie Relation]], [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Superposition Principle (metodo)|Superposition Principle]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Electron (object)|Electron]], [[Particle Beam (object)|Particle Beam]]


<div class="qlang-split" data-lang="it"></div>

**Misurare gli stati interstrato nel grafene e nella grafite** (Sense Jan van der Molen — Leiden University)

In un microscopio elettronico a bassa energia (LEEM), gli elettroni sondano le proprietà di un campione interagendo in modo coerente con gli strati superiori del campione (vedi Fig. 1). Gli elettroni riflessi sono raccolti da un rivelatore a pixel per formare un'immagine spaziale. L'energia con cui gli elettroni arrivano, $E$, è regolabile tra circa $0$ e $50$ eV. Questi valori sono definiti rispetto alla cosiddetta energia del vuoto $E_{vac}$, che assumiamo come nostro zero, cioè $E_{vac} = 0$. Nel vuoto, la relazione di dispersione degli elettroni, che lega l'energia dell'elettrone $E$ e il numero d'onda dell'elettrone $k$, è data da

$$
E(k) = \frac{\hbar^2 k^2}{2 m_0},
$$

dove $m_0$ è la massa a riposo dell'elettrone libero, e $\hbar = \frac{h}{2\pi}$ con $h$ la costante di Planck. Correggendo gli errori delle lenti (aberrazioni), il LEEM a Leiden ha una risoluzione laterale (cioè nel piano) di $1.4$ nm a $5$ eV.

> ![[PLANCKS_2015_p4_f1.png]]
> *Figure 1.*

**(4.1)** *[1 punto]* Esprimi la risoluzione in termini della lunghezza d'onda lambda a $5$ eV. C'è, in linea di principio, margine di miglioramento?

**(4.2)** *[1 punto]* Che cosa dovrebbe accadere alla risoluzione se l'energia di arrivo dell'elettrone si avvicina a $0$ eV? Che cosa significa, fisicamente, quest'ultima situazione?

È interessante notare che il LEEM non ha soltanto una buona risoluzione laterale. È anche una sonda ideale per studiare le proprietà dei materiali stratificati nella direzione verticale $z$. L'esempio più semplice sarebbe costituito da due strati di grafene (il grafene è un foglio esagonale di atomi di carbonio, la cui struttura all'interno di ciascuno strato è così forte che possiamo considerarlo uno specifico cristallo elettronico). Questa idea è riassunta dalla figura seguente, in cui una specifica energia si avvicina a $0.5$ eV, in pacchetti lunghi centinaia di micron e larghi solo decine di nanometri. Ora studieremo dapprima come l'energia dell'elettrone $z$ e il vettore d'onda verticale dell'elettrone $k_z$. Per calcolare $E(k_z)$, costruiamo dapprima una funzione d'onda nello spazio $k_z$ prendendo una trasformata di Fourier delle funzioni d'onda interstrato nello spazio $z$, tale che:

$$
|k_z\rangle = \frac{1}{\sqrt N} \sum_{n=1}^N e^{i n k_z c} |\Psi_n\rangle,
$$

dove $|\Psi_n\rangle$ indica l'$n$-esimo stato interstrato.

> ![[PLANCKS_2015_p4_f2.png]]
> *Figure 2.*

**(4.3)** *[2 punti]* Calcola la relazione di dispersione $\varepsilon(k_z)$ calcolando $\langle k_z | H | k_z \rangle$. Assumiamo che si accoppino solo gli stati interstrato primi vicini, ancora con integrale di hopping $-t$. Gli stati interstrato più lontani tra loro hanno accoppiamento nullo.

**(4.4)** *[1 punto]* Traccia la curva $E(E)$ che ci si aspetta di misurare per la grafite. Chiarisci quali scale di energia sono coinvolte.

**(4.5)** *[1 punto]* Passiamo a due strati di grafene (vedi 4.3-4.5). Finora abbiamo assunto che il fascio di elettroni raggiunga il campione con incidenza normale. Supponi di cambiare l'angolo di incidenza dalla normale verso un'incidenza quasi radente (cioè l'elettrone arriva quasi orizzontalmente).

**(4.6)** *[2 punti]* Calcola la relazione di dispersione $\varepsilon(k_z)$ calcolando $\langle k_z | H | k_z \rangle$. Assumiamo che si accoppino solo gli stati interstrato primi vicini, ancora con integrale di hopping $-t$. Gli stati interstrato più lontani tra loro hanno accoppiamento nullo.

**(4.7)** *[1 punto]* Traccia la curva $I(E)$ che ci si aspetta di misurare per la grafite. Chiarisci quali scale di energia sono coinvolte.

**(4.8)** *[2 punti]* Che cosa accadrà alla posizione energetica del minimo nella curva $I(E)$ del grafene a doppio strato (Fig. 2) quando l'angolo viene cambiato da normale a non normale? Spiega perché. (Puoi dare una risposta qualitativa e usare uno schizzo. Tuttavia, spiega la fisica di base.)

**Fonte:** [Testo (PDF) — p.9](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Modern-Quantum Physics]], [[Wave Optics]]
**Metodi:** [[de Broglie Relation (metodo)|de Broglie Relation]], [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Superposition Principle (metodo)|Superposition Principle]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Electron (object)|Electron]], [[Particle Beam (object)|Particle Beam]]



<span class="atom-split" id="q05" data-atom="q05" data-title="PLANCKS 2015 — Leiden — Quesito 5" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/fluid-mechanics,argomento/fluidi,difficolta/5,multidisciplina/mono,object/pipe-tube,object/sphere,object/cylinder"></span>

<div class="qlang-switch" data-default="en"></div>



**Physics of Oil and Gas Production** (Pavel Levchenko)

It is a common misunderstanding that oil is located in the form of an underground lake. Actually, it is found in very small pores with a size comparable to the diameter of the human hair. The void space between the particles of sand is filled with a sponge is filled with water. Here molecules can move between the pores and oil molecules into the sweet stream will tend to speed up the slower stream, whereas intrusion of slower molecules into the faster stream beneath the surface of the rock above the reservoir exert a huge pressure on the 'petroleum sponge', the oil flows to the surface (see Figure 1a).

*In this problem we neglect capillary and gravity effects on the fluid flow.*

> ![[PLANCKS_2015_p5_f1.png]]
> *Figure 1: (a) Scheme of the oil production process. (b) Representation of the porous medium (grains in white and void space in blue). (c) Cubic stacking of identical spherical grains.*

**Basic Concepts.** One of the most important characteristics of the reservoir is *porosity*, which is the fraction of the void space in the rock to the total volume:

$$
\phi = \frac{V_{void}}{V_{grains} + V_{void}},
$$

where $V$ stands for volume.

To understand the meaning of this concept, imagine identical balls (grains of sand) which are put in a pile as shown in Figure 1c.

**(5.1)** *[1 point]* Find the porosity of the system described in Figure 1c in terms of the number of balls is infinitely large.

A fluid flow between the grains of sand is controlled by the *viscosity* and the *permeability*. Consider a flow of the viscous fluid through a tube with length $L_0$ and radius $r_0$ (see Figure 2). Fluid molecules move along free paths and collide with each other. However, this process is not uniform. Close to the solid boundary the molecules are stuck, while in other regions the velocity varies with a profile similar to the sketch shown in Figure 2. Going analogous with the heat transfer could significantly help you in solving this problem, because the approach is very similar.

> ![[PLANCKS_2015_p5_f2.png]]
> *Figure 2: Schematics of the viscous fluid flow in the tube. (Not to scale.)*

The reason for this effect is the internal friction of the fluid, or viscosity. If two adjacent layers of fluid flow with slightly different speeds, the random motion of faster molecules into the slower lane induces a faster layer (the 'newer' well-known equation:

$$
F_{fr} = -\mu A_{f} \frac{dv}{dy},
$$

where $F_{fr}$ is a friction force which occurs between two thin layers of the fluid separated by a small distance $dy$, which have differences in velocity of $dv$. $A_{f}$ is a contact area on which the internal friction force is applied and $\mu$ is a fluid property called the *coefficient of viscosity*.

**(5.2)** *[1 point]* Find the velocity distribution $v(y)$ in terms of $\mu$, $L_0$, $r_0$, $P_1$ and $P_2$. Assume that a mean free path within the tube is small compared to $r_0$.

**(5.3)** *[1 point]* Find the coefficient $k_0$ of the Poiseuille equation.

The action of these layers is governed by Darcy's law:

$$
q = \frac{dV}{dt} = \frac{k}{\mu} \frac{P_{in} - P_{out}}{L} A,
$$

where $\frac{dV}{dt}$ is the amount of fluid transferred through the tube in some period of time. $A$ and $L$ are the cross-sectional area and length of the porous plug and $k$ is the *permeability*, which is a function of time.

> ![[PLANCKS_2015_p5_f3.png]]
> *Figure 3: Diagram showing definitions of Darcy's law.*

**(5.4)** *[1 point]* Estimate the permeability of the system described in 5.1 in terms of $\phi$, $r_0$, $P_1$, $P_2$. Assume that a mean free path within the tube is small compared to $r_0$ and the porosity $\phi$ of this system is equal to $1 \cdot 10^{-9} m^2$.

Usually, rock properties are not uniform throughout the reservoir. Two adjacent samples can have different permeability $k$ but the same length $L$. The fluid easily moves through the high-permeable part, while it is more difficult through the low-permeable part. Consider the case of two pieces differing in their wavelength, called red and blue for simplicity. Hint: in this case, the creation operators should be indexed with the property of the photon.

> ![[PLANCKS_2015_p5_f4.png]]
> *Figure 4: Composite rock sample.*

**(5.5)** *[2 points]* Determine for the system described as a system of twisted tubes (Figure 3), with permeability $k = k_0 \phi^2$, where $k_0$ is the coefficient of the system are connected in series with $k = 1 \cdot 10^{-9} m^2$, and that different bonds are characterized by the set of fixed length, $\langle r_i^2 \rangle = b^2$, and that different bonds are correlated to the 'new' homogeneous sample. To compute this 'new', look for the double permeability $k_{eff}$.

**(5.6)** *[1 point]* Find the effective permeability of the system $k_{eff}$.

**Vertical Well.** Often the reservoir can be modeled as a cylinder (see Figure 5). For this problem all properties were averaged out as in the previous part, so we can model the reservoir as a single cylinder with permeability $k$. The reservoir disk has dimensions $h$, an outer radius $R$ and an inner well radius $r_w$ (see Figure 5). The pressure at the outer boundary is $P_b$, and the well pressure (in the inner radius) is $P_w$. In the vacuum, the electron dispersion. Notice that the well length is much larger than the radius ($h \ll R$), one can conclude that fluid flows only in the radial direction.

> ![[PLANCKS_2015_p5_f5.png]]
> *Figure 5: Cylindrical reservoir with a vertical well drilled in the center.*

**(5.7)** *[2 points]* Find the velocity of the oil $v_w$ inside the well with a radius $r_w = 0.1$ m and a flow rate of $1\cdot10^{-3}$ m$^3$/s.

**(5.8)** *[1 point]* Find the relation between $q$, the volume of the fluid that flows per second, and the pressure difference $\Delta P = P_b - P_w$, in terms of $k$, $\mu$, $h$, $P_b$, $P_w$, $R$ and $r_w$.

**(5.9)** *[1 point]* What is the amount of fluid transferred through the tube in some period of time (i.e. flow rate), in terms of $k$, $\mu$, $h$, $\Delta P$, $R$ and $r_w$?

**Modeling Reservoir Depletion.** In this part the depletion process will be analyzed for the reservoir shown in Figure 6. The well has a horizontal part, therefore, the fluid flow in the reservoir is linear ($h \ll L$). The well bool has a fixed length, while the volume of the reservoir changes during the production at the production process. The reservoir compressibility $c$ can be treated as a constant, which is a function of physical definition:

$$
c = -\frac{1}{V} \left(\frac{dV}{dP}\right)_T,
$$

where $V$ is the initial volume of the examined sample and $dV$ is the isothermal volume change, when an additional pressure $dP$ is applied.

> ![[PLANCKS_2015_p5_f6.png]]
> *Figure 6: System used for modeling reservoir depletion.*

**(5.10)** *[2 points]* Show that the bottom of the well $P_w$ is constant (hydrostatic column of oil). However, the pressure at the boundary $P_b(t)$ is constant. So well as the oil production rate $q(t)$.

**(5.11)** *[2 points]* Derive an explicit expression for $q(t)$ in terms of $k$, $\mu$, $c$, $\phi$ and the reservoir dimensions, if the initial flow rate is $q_0$.

**Fonte:** [Testo (PDF) — p.11](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Fluid Mechanics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Continuity Equation (metodo)|Continuity Equation]], [[Bernoulli's Equation (metodo)|Bernoulli's Equation]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Unit Conversion (competenza)|Unit Conversion]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]], [[Sphere (object)|Sphere]], [[Cylinder (object)|Cylinder]]


<div class="qlang-split" data-lang="it"></div>

**Fisica della produzione di petrolio e gas** (Pavel Levchenko)

È un comune fraintendimento pensare che il petrolio si trovi sotto forma di un lago sotterraneo. In realtà, esso si trova in pori molto piccoli con dimensioni paragonabili al diametro di un capello umano. Lo spazio vuoto tra le particelle di sabbia è riempito da una spugna riempita d'acqua. Qui le molecole possono muoversi tra i pori e le molecole di petrolio nel flusso dolce tenderanno ad accelerare il flusso più lento, mentre l'intrusione di molecole più lente nel flusso più veloce sotto la superficie della roccia sopra il giacimento esercita una pressione enorme sulla 'spugna petrolifera', il petrolio risale in superficie (vedi Figura 1a).

*In questo problema trascuriamo gli effetti capillari e gravitazionali sul flusso del fluido.*

> ![[PLANCKS_2015_p5_f1.png]]
> *Figura 1: (a) Schema del processo di produzione del petrolio. (b) Rappresentazione del mezzo poroso (grani in bianco e spazio vuoto in blu). (c) Impilamento cubico di grani sferici identici.*

**Concetti di base.** Una delle caratteristiche più importanti del giacimento è la *porosità*, ovvero la frazione dello spazio vuoto nella roccia rispetto al volume totale:

$$
\phi = \frac{V_{void}}{V_{grains} + V_{void}},
$$

dove $V$ indica il volume.

Per comprendere il significato di questo concetto, si immaginino delle palline identiche (grani di sabbia) disposte in una pila come mostrato nella Figura 1c.

**(5.1)** *[1 punto]* Trovare la porosità del sistema descritto nella Figura 1c nel caso in cui il numero di palline sia infinitamente grande.

Un flusso di fluido tra i grani di sabbia è controllato dalla *viscosità* e dalla *permeabilità*. Si consideri un flusso di fluido viscoso attraverso un tubo di lunghezza $L_0$ e raggio $r_0$ (vedi Figura 2). Le molecole del fluido si muovono lungo cammini liberi e collidono tra loro. Tuttavia, questo processo non è uniforme. In prossimità del contorno solido le molecole restano bloccate, mentre in altre regioni la velocità varia con un profilo simile allo schizzo mostrato nella Figura 2. Procedere per analogia con il trasporto del calore potrebbe aiutare notevolmente a risolvere questo problema, poiché l'approccio è molto simile.

> ![[PLANCKS_2015_p5_f2.png]]
> *Figura 2: Schema del flusso di fluido viscoso nel tubo. (Non in scala.)*

La ragione di questo effetto è l'attrito interno del fluido, ovvero la viscosità. Se due strati adiacenti di fluido scorrono con velocità leggermente diverse, il moto casuale delle molecole più veloci nella corsia più lenta induce uno strato più veloce (la 'più recente' equazione ben nota:

$$
F_{fr} = -\mu A_{f} \frac{dv}{dy},
$$

dove $F_{fr}$ è la forza di attrito che si manifesta tra due strati sottili del fluido separati da una piccola distanza $dy$, che hanno una differenza di velocità $dv$. $A_{f}$ è l'area di contatto su cui è applicata la forza di attrito interno e $\mu$ è una proprietà del fluido detta *coefficiente di viscosità*.

**(5.2)** *[1 punto]* Trovare la distribuzione di velocità $v(y)$ in funzione di $\mu$, $L_0$, $r_0$, $P_1$ e $P_2$. Assumere che il cammino libero medio all'interno del tubo sia piccolo rispetto a $r_0$.

**(5.3)** *[1 punto]* Trovare il coefficiente $k_0$ dell'equazione di Poiseuille.

L'azione di questi strati è governata dalla legge di Darcy:

$$
q = \frac{dV}{dt} = \frac{k}{\mu} \frac{P_{in} - P_{out}}{L} A,
$$

dove $\frac{dV}{dt}$ è la quantità di fluido trasferita attraverso il tubo in un certo intervallo di tempo. $A$ e $L$ sono l'area della sezione trasversale e la lunghezza del tappo poroso e $k$ è la *permeabilità*, che è funzione del tempo.

> ![[PLANCKS_2015_p5_f3.png]]
> *Figura 3: Diagramma che mostra le definizioni della legge di Darcy.*

**(5.4)** *[1 punto]* Stimare la permeabilità del sistema descritto in 5.1 in funzione di $\phi$, $r_0$, $P_1$, $P_2$. Assumere che il cammino libero medio all'interno del tubo sia piccolo rispetto a $r_0$ e che la porosità $\phi$ di questo sistema sia uguale a $1 \cdot 10^{-9} m^2$.

Di solito, le proprietà della roccia non sono uniformi in tutto il giacimento. Due campioni adiacenti possono avere permeabilità $k$ diversa ma la stessa lunghezza $L$. Il fluido si muove facilmente attraverso la parte ad alta permeabilità, mentre è più difficile attraverso la parte a bassa permeabilità. Si consideri il caso di due pezzi che differiscono nella loro lunghezza d'onda, chiamati rosso e blu per semplicità. Suggerimento: in questo caso, gli operatori di creazione dovrebbero essere indicizzati con la proprietà del fotone.

> ![[PLANCKS_2015_p5_f4.png]]
> *Figura 4: Campione di roccia composito.*

**(5.5)** *[2 punti]* Determinare per il sistema descritto come un sistema di tubi contorti (Figura 3), con permeabilità $k = k_0 \phi^2$, dove $k_0$ è il coefficiente del sistema che sono connessi in serie con $k = 1 \cdot 10^{-9} m^2$, e che i diversi legami sono caratterizzati dall'insieme di lunghezza fissa, $\langle r_i^2 \rangle = b^2$, e che i diversi legami sono correlati al 'nuovo' campione omogeneo. Per calcolare questo 'nuovo', cercare la doppia permeabilità $k_{eff}$.

**(5.6)** *[1 punto]* Trovare la permeabilità efficace del sistema $k_{eff}$.

**Pozzo verticale.** Spesso il giacimento può essere modellato come un cilindro (vedi Figura 5). Per questo problema tutte le proprietà sono state mediate come nella parte precedente, quindi possiamo modellare il giacimento come un singolo cilindro con permeabilità $k$. Il disco del giacimento ha dimensioni $h$, un raggio esterno $R$ e un raggio interno del pozzo $r_w$ (vedi Figura 5). La pressione al contorno esterno è $P_b$, e la pressione del pozzo (nel raggio interno) è $P_w$. Nel vuoto, la dispersione dell'elettrone. Si noti che la lunghezza del pozzo è molto maggiore del raggio ($h \ll R$), si può concludere che il fluido scorre solo in direzione radiale.

> ![[PLANCKS_2015_p5_f5.png]]
> *Figura 5: Giacimento cilindrico con un pozzo verticale perforato al centro.*

**(5.7)** *[2 punti]* Trovare la velocità del petrolio $v_w$ all'interno del pozzo con raggio $r_w = 0.1$ m e una portata di $1\cdot10^{-3}$ m$^3$/s.

**(5.8)** *[1 punto]* Trovare la relazione tra $q$, il volume di fluido che scorre al secondo, e la differenza di pressione $\Delta P = P_b - P_w$, in funzione di $k$, $\mu$, $h$, $P_b$, $P_w$, $R$ e $r_w$.

**(5.9)** *[1 punto]* Qual è la quantità di fluido trasferita attraverso il tubo in un certo intervallo di tempo (cioè la portata), in funzione di $k$, $\mu$, $h$, $\Delta P$, $R$ e $r_w$?

**Modellazione dell'esaurimento del giacimento.** In questa parte verrà analizzato il processo di esaurimento per il giacimento mostrato nella Figura 6. Il pozzo ha una parte orizzontale, pertanto il flusso di fluido nel giacimento è lineare ($h \ll L$). Il pozzo ha una lunghezza fissa, mentre il volume del giacimento cambia durante la produzione nel processo di produzione. La compressibilità del giacimento $c$ può essere trattata come una costante, che è funzione della definizione fisica:

$$
c = -\frac{1}{V} \left(\frac{dV}{dP}\right)_T,
$$

dove $V$ è il volume iniziale del campione esaminato e $dV$ è la variazione isoterma di volume, quando viene applicata una pressione aggiuntiva $dP$.

> ![[PLANCKS_2015_p5_f6.png]]
> *Figura 6: Sistema usato per modellare l'esaurimento del giacimento.*

**(5.10)** *[2 punti]* Mostrare che il fondo del pozzo $P_w$ è costante (colonna idrostatica di petrolio). Tuttavia, la pressione al contorno $P_b(t)$ è costante. Così come la portata di produzione del petrolio $q(t)$.

**(5.11)** *[2 punti]* Ricavare un'espressione esplicita per $q(t)$ in funzione di $k$, $\mu$, $c$, $\phi$ e delle dimensioni del giacimento, se la portata iniziale è $q_0$.

**Fonte:** [Testo (PDF) — p.11](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Fluid Mechanics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Continuity Equation (metodo)|Continuity Equation]], [[Bernoulli's Equation (metodo)|Bernoulli's Equation]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Unit Conversion (competenza)|Unit Conversion]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]], [[Sphere (object)|Sphere]], [[Cylinder (object)|Cylinder]]



<span class="atom-split" id="q06" data-atom="q06" data-title="PLANCKS 2015 — Leiden — Quesito 6" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/nuclear-and-particle-physics,argomento/fisica-moderna,difficolta/5,multidisciplina/multi,object/disk"></span>

<div class="qlang-switch" data-default="en"></div>



**Scattering** (Eric Laenen and Robbert Rietkerk — University of Amsterdam)

**Yukawa potential scattering.** Subatomic particles are often studied through scattering experiments. In an example, we will calculate the differential cross section for an incoming wave being the best physics student team of the world! We hope you will enjoy the competition. Before you start working on the exercises, a few remarks must be made. The probability for an incoming wave with wave vector $\vec k$ to be scattered with wave vector $\vec k'$ and the probability is given by

$$
V(r) = V_0 \frac{e^{-\mu r}}{\mu r},
$$

where $V_0$ is an overall normalization factor and $\mu$ is the inverse range of the potential. The differential cross section in the so-called Born approximation, assume this acceleration to be constant?

**(6.1)** *[2 points]* In the first Born approximation (e.g. for weak potentials and/or fast incoming particles), the scattering amplitude $f(\theta)$ is related to the potential by

$$
f(\theta) = -\frac{m}{2\pi\hbar^2} \int d^3 r' \, e^{i(\vec k - \vec k')\cdot\vec r'} V(r')\, e^{i \vec k' \cdot \vec r'} \quad \text{for large } r \,,
$$

$$
f(\theta) = \sum_{\ell=0}^\infty (2\ell+1) f_\ell(k) P_\ell(\cos\theta) \,.
$$

The Legendre polynomials $P_\ell(x)$ on the r.h.s. are solutions to the Legendre equation,

$$
\frac{d}{dx}\left[(1 - x^2)\frac{dP_\ell(x)}{dx}\right] + \ell(\ell+1)P_\ell(x) = 0 \,,
$$

and are given explicitly in terms of the Rodrigues formula,

$$
P_\ell(x) = \frac{1}{2^\ell\,\ell!}\frac{d^\ell}{dx^\ell}(x^2 - 1)^\ell \,,
$$

where $\ell$ is a non-negative integer.

**(6.2)** *[3 points]* Show that the Legendre polynomials are orthogonal, in the sense that

$$
\int_{-1}^1 dx\; P_\ell(x)\, P_{\ell'}(x) = \frac{2}{2\ell+1}\delta_{\ell,\ell'} \,.
$$

The quantity of interest is now the complex partial wave amplitude $f_\ell(k)$. It is constrained by the *optical theorem*, which relates the imaginary part of the forward amplitude to the total cross section:

$$
\mathrm{Im}\, f(\theta = 0) = \frac{k}{4\pi}\sigma_{tot} \,.
$$

For a spherical potential like the scatterer of this problem, the partial wave amplitudes only have a finite range of $\ell$ values. The cross section can be related to the partial wave amplitudes via

$$
e^{ikz} \simeq \sum_{\ell=0}^\infty (2\ell+1)\frac{1}{2 i k r}\left(e^{ikr} - (-1)^\ell e^{-ikr}\right)P_\ell(\cos\theta) \quad \text{for large } r \,.
$$

**(6.3)** *[3 points]* Show that the Legendre polynomials $P_\ell(x)$ on the r.h.s. are solutions to the Legendre equation.

**(6.4)** *[3 points]* Use the optical theorem to show that $|S_\ell(k)| = 1$, where $S_\ell(k) \equiv 1 + 2 i k f_\ell(k)$. What is the physical interpretation of this condition? Hint: write out the formula for the wave function and compare the incoming and outgoing spherical waves.

In the event of absorption by the scatterer this condition must be relaxed. One may then write $S_\ell(k) = \eta_\ell(k) e^{2 i \delta_\ell(k)}$, with real $0 \leq \eta_\ell(k) \leq 1$. In this case the *elastic* cross section is given by

$$
\sigma_{el} = 4\pi \sum_{\ell=0}^\infty (2\ell+1)|f_\ell(k)|^2 \,,
$$

while the total cross section $\sigma_{tot}$ is still obtained from the optical theorem.

An example of scattering with absorption is scattering due to a black disc. An incoming wave is incident normally to this disc. The disc has radius $R$ and is capable of total absorption: $\eta_\ell(k) = 0$. Restricting attention to scattering of short wavelengths (large $k$) limits the angular momentum quantum number of the partial wave to $\ell \leq L = kR$.

**(6.5)** *[3 points]* Compute the elastic cross section as well as the total cross section. Explain the difference.

**Fonte:** [Testo (PDF) — p.15](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Nuclear & Particle Physics]], [[Modern-Quantum Physics]]
**Metodi:** [[Calculus-Integration (metodo)|Calculus-Integration]], [[Superposition Principle (metodo)|Superposition Principle]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Disk (object)|Disk]]


<div class="qlang-split" data-lang="it"></div>

**Scattering** (Eric Laenen and Robbert Rietkerk — University of Amsterdam)

**Scattering dal potenziale di Yukawa.** Le particelle subatomiche vengono spesso studiate attraverso esperimenti di scattering. In un esempio, calcoleremo la sezione d'urto differenziale per un'onda incidente essendo la migliore squadra di studenti di fisica del mondo! Speriamo che vi godrete la competizione. Prima di iniziare a lavorare sugli esercizi, devono essere fatte alcune osservazioni. La probabilità che un'onda incidente con vettore d'onda $\vec k$ venga diffusa con vettore d'onda $\vec k'$ e la probabilità è data da

$$
V(r) = V_0 \frac{e^{-\mu r}}{\mu r},
$$

dove $V_0$ è un fattore di normalizzazione complessivo e $\mu$ è l'inverso della portata del potenziale. La sezione d'urto differenziale nella cosiddetta approssimazione di Born, assumere che questa accelerazione sia costante?

**(6.1)** *[2 punti]* Nella prima approssimazione di Born (ad esempio per potenziali deboli e/o particelle incidenti veloci), l'ampiezza di scattering $f(\theta)$ è legata al potenziale da

$$
f(\theta) = -\frac{m}{2\pi\hbar^2} \int d^3 r' \, e^{i(\vec k - \vec k')\cdot\vec r'} V(r')\, e^{i \vec k' \cdot \vec r'} \quad \text{for large } r \,,
$$

$$
f(\theta) = \sum_{\ell=0}^\infty (2\ell+1) f_\ell(k) P_\ell(\cos\theta) \,.
$$

I polinomi di Legendre $P_\ell(x)$ al secondo membro sono soluzioni dell'equazione di Legendre,

$$
\frac{d}{dx}\left[(1 - x^2)\frac{dP_\ell(x)}{dx}\right] + \ell(\ell+1)P_\ell(x) = 0 \,,
$$

e sono dati esplicitamente in termini della formula di Rodrigues,

$$
P_\ell(x) = \frac{1}{2^\ell\,\ell!}\frac{d^\ell}{dx^\ell}(x^2 - 1)^\ell \,,
$$

dove $\ell$ è un intero non negativo.

**(6.2)** *[3 punti]* Mostrare che i polinomi di Legendre sono ortogonali, nel senso che

$$
\int_{-1}^1 dx\; P_\ell(x)\, P_{\ell'}(x) = \frac{2}{2\ell+1}\delta_{\ell,\ell'} \,.
$$

La quantità di interesse è ora l'ampiezza complessa dell'onda parziale $f_\ell(k)$. Essa è vincolata dal *teorema ottico*, che lega la parte immaginaria dell'ampiezza in avanti alla sezione d'urto totale:

$$
\mathrm{Im}\, f(\theta = 0) = \frac{k}{4\pi}\sigma_{tot} \,.
$$

Per un potenziale sferico come il diffusore di questo problema, le ampiezze delle onde parziali hanno soltanto un intervallo finito di valori di $\ell$. La sezione d'urto può essere legata alle ampiezze delle onde parziali tramite

$$
e^{ikz} \simeq \sum_{\ell=0}^\infty (2\ell+1)\frac{1}{2 i k r}\left(e^{ikr} - (-1)^\ell e^{-ikr}\right)P_\ell(\cos\theta) \quad \text{for large } r \,.
$$

**(6.3)** *[3 punti]* Mostrare che i polinomi di Legendre $P_\ell(x)$ al secondo membro sono soluzioni dell'equazione di Legendre.

**(6.4)** *[3 punti]* Usare il teorema ottico per mostrare che $|S_\ell(k)| = 1$, dove $S_\ell(k) \equiv 1 + 2 i k f_\ell(k)$. Qual è l'interpretazione fisica di questa condizione? Suggerimento: scrivere per esteso la formula per la funzione d'onda e confrontare le onde sferiche entranti e uscenti.

In caso di assorbimento da parte del diffusore questa condizione deve essere allentata. Si può allora scrivere $S_\ell(k) = \eta_\ell(k) e^{2 i \delta_\ell(k)}$, con $\eta_\ell(k)$ reale $0 \leq \eta_\ell(k) \leq 1$. In questo caso la sezione d'urto *elastica* è data da

$$
\sigma_{el} = 4\pi \sum_{\ell=0}^\infty (2\ell+1)|f_\ell(k)|^2 \,,
$$

mentre la sezione d'urto totale $\sigma_{tot}$ si ottiene ancora dal teorema ottico.

Un esempio di scattering con assorbimento è lo scattering dovuto a un disco nero. Un'onda incidente arriva perpendicolarmente su questo disco. Il disco ha raggio $R$ ed è capace di assorbimento totale: $\eta_\ell(k) = 0$. Restringendo l'attenzione allo scattering di lunghezze d'onda corte (grandi $k$) si limita il numero quantico di momento angolare dell'onda parziale a $\ell \leq L = kR$.

**(6.5)** *[3 punti]* Calcolare la sezione d'urto elastica così come la sezione d'urto totale. Spiegare la differenza.

**Fonte:** [Testo (PDF) — p.15](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Nuclear & Particle Physics]], [[Modern-Quantum Physics]]
**Metodi:** [[Calculus-Integration (metodo)|Calculus-Integration]], [[Superposition Principle (metodo)|Superposition Principle]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Disk (object)|Disk]]



<span class="atom-split" id="q07" data-atom="q07" data-title="PLANCKS 2015 — Leiden — Quesito 7" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/modern-quantum-physics,argomento/fisica-moderna,difficolta/5,multidisciplina/multi,object/wire,object/atom,object/electron"></span>

<div class="qlang-switch" data-default="en"></div>



**Single Atom Contacts** (Jan van Ruitenbeek — Leiden University)

**The context.** Electrical resistance for regular, macroscopic wires is the result of scattering of the electrons on defects and lattice vibrations. For a wire of constant cross section, the conductance $G$ scales with the cross section area $A$ and inversely with the length $L$: $G \propto A/L$. This relation becomes invalid for very small wires. Below a certain length scale, electrons travel through the wire without being scattered: the wire becomes a ballistic conductor. We will see in this problem that the conductance even becomes quantized at the level of single atoms.

In this small-size limit it is useful to consider the conductance $G$ rather than the resistance $R$, where $G = 1/R$.

When the diameter of a wire is reduced to atomic dimensions (length $L$, width $W$, and thickness $D$) of the wire are small, $L, W, D \ll \lambda$. Here $\lambda$ denotes the Fermi wavelength. Here a number of standing-wave electron modes fit. Only the modes that have a wave number $k$ smaller than the Fermi wave number $k_F$ contribute to the conductance. Each conductance channel can carry a current, and the contribution of each is given by

$$
G = \frac{2e^2}{h}\sum_n T_n \,.
$$

This is the famous Landauer formula. Each channel's contribution to the conductance is characterized by a number $T_n$, which gives the probability for an electron arriving at one side of the channel to be transmitted to the other side. This is a probability between zero and one. Since $T_n$ is a probability we have

$$
0 \le T_n \le 1 \,.
$$

Landauer's formula also shows that each channel contributes a maximum of $2e^2/h$ to the conductance, where $e$ is the electron charge, and $h$ is Planck's constant. The factor of $2e^2/h$ is the conductance quantum. Since $T_n$ is a probability we have $0 \le T_n \le 1$.

One way of obtaining more information is by measuring the intrinsic noise in the current. The intrinsic noise, or shot noise, is due to the discrete character of the electron charge. Electrons arriving one-by-one at the other side of the wire produce a current that fluctuates due to the statistical fluctuation in the numbers arriving per given unit of time. This is very similar to the acoustic noise of hail stones falling on a roof. For a small conductor characterized by a set of conductance channels with transmission probabilities $\{T_1, T_2, \dots, T_N\}$ the noise power is given by,

$$
S = 2 e I \frac{\sum_{n=1}^N T_n(1 - T_n)}{\sum_{n=1}^N T_n} \,.
$$

**Problems.**

**(7.1)** *[6 points]* For a given value of the conductance $G$, assuming we know there are $N$ channels ($N = 1, 2, 3, \dots$), determine the maximum value for the noise power. Also give the values for the transmission values for this solution.

**(7.2)** *[6 points]* For a given value of the conductance $G$, assuming we know there are N channels ($N = 1, 2, 3, \dots$), determine the absolute minimum for the noise power. Also give the values for the transmission values for this solution.

**Fonte:** [Testo (PDF) — p.17](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Modern-Quantum Physics]], [[Mathematics]]
**Metodi:** [[Statistical Averaging (metodo)|Statistical Averaging]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Physical Modeling (metodo)|Physical Modeling]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Wire (object)|Wire]], [[Atom (object)|Atom]], [[Electron (object)|Electron]]


<div class="qlang-split" data-lang="it"></div>

**Contacchi singoli di atomi** (Jan van Ruitenbeek  Università di Leiden)

La resistenza elettrica per i fili macroscopici regolari è il risultato della dispersione degli elettroni su difetti e vibrazioni della rete. Per un filo di sezione incrociata costante, la conduttività $G$ si riduce con la superficie incrociata $A$ e inversamente con la lunghezza $L$: $G \propto A/L$. Questa relazione diventa invalida per i fili molto piccoli. Sotto una certa scala di lunghezza, gli elettroni viaggiano attraverso il filo senza essere sparsi: il filo diventa un conduttore balistico. Vedremo in questo problema che la conduttività viene anche quantizzata a livello di singoli atomi.

In questo limite di dimensioni ridotte è utile considerare la conduttività $G$ piuttosto che la resistenza $R$, dove $G = 1/R$.

Quando il diametro di un filo è ridotto a dimensioni atomiche (lunghezza $L$, larghezza $W$ e spessore $D$) del filo sono piccole, $L, W, D \ll \lambda$. Qui $\lambda$ indica la lunghezza d'onda di Fermi. Qui si adattano una serie di modalità di elettroni a onde in piedi. Solo le modalità che hanno un numero d'onda $k$ inferiore al numero d'onda Fermi $k_F$ contribuiscono alla conduttività. Ogni canale di conduttività può trasportare una corrente e il contributo di ciascuno è dato da

$$
G = \frac{2e^2}{h}\sum_n T_n \,.
$$

Questa è la famosa formula di Landauer. Il contributo di ciascun canale alla conduzione è caratterizzato da un numero $T_n$, che dà la probabilità che un elettrone che arriva da un lato del canale venga trasmesso dall'altro. Questa è una probabilità tra zero e uno. Poiché $T_n$ è una probabilità che abbiamo

$$
0 \le T_n \le 1 \,.
$$

La formula di Landauer mostra anche che ogni canale contribuisce al massimo di $2e^2/h$ alla conduttività, dove $e$ è la carica di elettroni e $h$ è la costante di Planck. Il fattore di $2e^2/h$ è il quantum di conduttività. Poiché $T_n$ è una probabilità abbiamo $0 \le T_n \le 1$.

Un modo per ottenere maggiori informazioni è misurare il rumore intrinseco nella corrente. Il rumore intrinseco, o rumore di colpo, è dovuto al carattere discreto della carica elettronica. Gli elettroni che arrivano uno dopo l'altro lato del filo producono una corrente che fluctua a causa delle fluttuazioni statistiche dei numeri che arrivano per una data unità di tempo. Questo è molto simile al rumore acustico delle pietre di grossa pioggia che cadono su un tetto. Per un piccolo conduttore caratterizzato da una serie di canali di conduttività con probabilità di trasmissione $\{T_1, T_2, \dots, T_N\}$, la potenza acustica è data da:

$$
S = 2 e I \frac{\sum_{n=1}^N T_n(1 - T_n)}{\sum_{n=1}^N T_n} \,.
$$

**Problemi.**

**(7.1) ** * [6 punti] * Per un dato valore della conduttività $G$, presumendo che sappiamo che ci sono canali $N$ ($N = 1, 2, 3, \dots$), determinare il valore massimo per la potenza rumorosa. Indicare anche i valori dei valori di trasmissione di questa soluzione.

**(7.2) ** * [6 punti] * Per un dato valore della conduttività $G$, presumendo che si sappiano che ci sono N canali ($N = 1, 2, 3, \dots$), determinare il minimo assoluto per la potenza del rumore. Indicare anche i valori dei valori di trasmissione di questa soluzione.

**Fonte:** [Testo (PDF) — p.17](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Modern-Quantum Physics]], [[Mathematics]]
**Metodi:** [[Statistical Averaging (metodo)|Statistical Averaging]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Physical Modeling (metodo)|Physical Modeling]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Wire (object)|Wire]], [[Atom (object)|Atom]], [[Electron (object)|Electron]]



<span class="atom-split" id="q08" data-atom="q08" data-title="PLANCKS 2015 — Leiden — Quesito 8" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/gravitation,argomento/gravitazione-e-astrofisica,difficolta/5,multidisciplina/multi,object/photon,object/star"></span>

<div class="qlang-switch" data-default="en"></div>



**Solar Sail** (Martin van Exter — Leiden University)

A wild idea in space technology considers the possibility to propel a space craft by the photon pressure exerted by sunlight. Consider a square sail with dimensions of $800$ m $\times$ $800$ m and weight $m = 3$ kg that completely reflects the incoming sunlight. We will study the propulsion of this sail and note in this exercise to remain near the Earth. The space craft is connected with an underground source of water. At a distance of $10$ meters from the Earth our sail is in $100\%$ reflective. Call the distance from the sun and the mass ($\sim$ solar constant) at the position of the sail $r(t)$, using classical mechanics to describe its motion (so neglecting all relativistic effects). The mass of the sun and the distance between the sun and the earth (Earth orbit) are $1 \cdot 10^{30}$ kg and $r(0) = 1 \cdot 10^{11}$ m, and the solar constant at this distance is $1.36$ kW/m$^2$.

> ![[PLANCKS_2015_p8_f1.png]]
> *Figure.*

**(8.1)** *[2 points]* Calculate the initial acceleration $a_0$ of the solar sail when the normal of the sail points towards the sun and compare this with the centrifugal force at all points towards the sun for the case in which the sun always points towards the sun. Only in the final question we consider different orientations.

**(8.2)** *[1 point]* How long will it *roughly* take the sail to escape from the sun by calculating its escape velocity at $r = 2.49 \cdot 10^9$ km, $149\,$m, i.e. as a first rough approximation, assume that this acceleration to be constant?

**(8.3)** *[1 point]* Next, derive the full evolution equation for the distance $r(t)$, using classical mechanics to determine the maximum distance of the sail.

**(8.4)** *[2 points]* Sketch the angular quantity does $\theta$ represent?

**(8.5)** *[2 points]* Use the relations given above, compute the state after the beam splitter. What is the probability of finding the photon at either output facet?

**(8.6)** *[2 points]* How would the outcome of the experiment described in 4 change if the photons were *not* identical? Consider the case of two photons differing in their wavelength, called red and blue for simplicity. Hint: in this case, the creation operators should be indexed with the property of the photon.

**Fonte:** [Testo (PDF) — p.19](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Gravitation]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Differential Equations (metodo)|Differential Equations]], [[Photon Energy Relation (metodo)|Photon Energy Relation]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Photon (object)|Photon]], [[Star (object)|Star]]


<div class="qlang-split" data-lang="it"></div>

**Solar Sail** (Martin van Exter  Leiden University)

Un'idea selvaggia nella tecnologia spaziale considera la possibilità di spingere una nave spaziale dalla pressione dei fotoni esercitata dalla luce solare. Si consideri una vela quadrata con dimensioni $800$ m $\times$ $800$ m e peso $m = 3$ kg che riflette completamente la luce solare in arrivo. Studieremo la propulsione di questa vela e la nota in questo esercizio per rimanere vicino alla Terra. La nave spaziale è collegata a una fonte sotterranea di acqua. A una distanza di $10$ metri dalla Terra la nostra vela è in $100\%$ riflettente. Indicare la distanza dal sole e la massa (constante solare $\sim$) nella posizione della vela $r(t)$, utilizzando la meccanica classica per descrivere il suo movimento (negliendosi così tutti gli effetti relativistici). La massa del sole e la distanza tra il sole e la terra (orbita terrestre) sono $1 \cdot 10^{30}$ kg e $r(0) = 1 \cdot 10^{11}$ m, e la costante solare a questa distanza è $1.36$ kW/m$^2$.

> ![[PLANCKS_2015_p8_f1.png]]
> *Figura.*

**(8.1) ** *[2 punti] * Calcolare l'accelerazione iniziale $a_0$ della vela solare quando la normalità delle vele punta verso il sole e confrontarla con la forza centrifugante in tutti i punti verso il sole nel caso in cui il sole punta sempre verso il sole. Solo nell'ultima domanda consideriamo diversi orientamenti.

**(8.2) ** *[1 punto] * Quanto tempo la vela trascorrerà per fuggire dal sole calcolando la sua velocità di fuga a $r = 2.49 \cdot 10^9$ km, $149\,$m, cioè Come prima approssimazione approssimativa, supponiamo che questa accelerazione sia costante?

**(8.3) ** *[1 punto]* Successivamente, derivare l'equazione di evoluzione completa per la distanza $r(t)$, utilizzando la meccanica classica per determinare la distanza massima della vela.

**(8.4) ** *[2 punti] * Sketta la quantità angolare che $\theta$ rappresenta?

**(8.5) ** *[2 punti]* Utilizzare le relazioni indicate sopra, calcolare lo stato dopo lo scartatore di fascia. Qual è la probabilità di trovare il fotone in entrambi i fattori di uscita?

**(8.6) ** *[2 punti] * Come cambierebbe l'esito dell'esperimento descritto in 4 se i fotoni fossero * non * identici? Considerate il caso di due fotoni che hanno lunghezze d'onda diverse, chiamati rosso e blu per semplicità. In questo caso, gli operatori di creazione dovrebbero essere indicizzati con la proprietà del fotone.

**Fonte:** [Testo (PDF) — p.19](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Gravitation]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Differential Equations (metodo)|Differential Equations]], [[Photon Energy Relation (metodo)|Photon Energy Relation]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Photon (object)|Photon]], [[Star (object)|Star]]



<span class="atom-split" id="q09" data-atom="q09" data-title="PLANCKS 2015 — Leiden — Quesito 9" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/modern-quantum-physics,argomento/fisica-moderna,difficolta/5,multidisciplina/mono,object/photon"></span>

<div class="qlang-switch" data-default="en"></div>



**The Quantum Mechanical Beamsplitter** (Jelmer Renema — Leiden University)

The quantum state of light is described by quantizing the harmonic oscillation of the $E$ and $B$ fields, resulting in a set of creation (raising) and annihilation (lowering) operators $a^\dagger$ and $a$, where each excitation corresponds to a photon.

In this exercise, we will be considering the effect of a beam splitter (e.g. a piece of partially reflecting glass) on such a state of light. We consider the simplest case where there are two input facets, and two output facets. A picture of such a beam splitter is shown below.

> ![[PLANCKS_2015_p9_f1.png]]
> *Figure 1.*

We denote the state at the input of the beam splitter $\Psi = |n_1, n_2\rangle$, where the indices refer to the two input facets of the beam splitter. The action of the beam splitter is described by a transformation on the operators

$$
a_1^\dagger \to \cos\theta a_1'^\dagger + i\sin\theta a_2'^\dagger , \qquad
a_2^\dagger \to i\sin\theta a_1'^\dagger + \cos\theta a_2'^\dagger
$$

where the primed operators work on the *output* modes of the beam splitter, as defined in figure 1.

**(9.1)** *[1 point]* Verify that this operator transformation is unitary. What physical requirement does this correspond to?

**(9.2)** *[2 points]* Why is it necessary that the number of input ports is equal to the number of output ports? What physical quantity does $\theta$ represent?

We now consider the input state $|1, 0\rangle$.

**(9.3)** *[2 points]* Using the relations given above, compute the state after the beam splitter. What is the probability of finding the photon at either output facet?

We now consider the input state $|1, 1\rangle$.

**(9.4)** *[2 points]* Using the relations given above, compute the state after the beam splitter.

**(9.5)** *[2 points]* What happens when $\theta = \pi/4$? In light of this result, do you agree with Paul Dirac's 1923 statement that photons can only interfere with themselves? Motivate your answer.

We have — without telling you — been considering the rather particular case of *identical* photons. In experiments, however, photons may differ from each other in many ways: wavelength, temporal profile, spatial profile, etcetera.

**(9.6)** *[2 points]* How would the outcome of the experiment described in 4 change if the photons were *not* identical? Consider the case of two photons differing in their wavelength, called red and blue for simplicity. Hint: in this case, the creation operators should be indexed with the property of the photon.

**Fonte:** [Testo (PDF) — p.20](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Modern-Quantum Physics]], [[Wave Optics]]
**Metodi:** [[Superposition Principle (metodo)|Superposition Principle]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Symmetry Argument (metodo)|Symmetry Argument]], [[Photon Energy Relation (metodo)|Photon Energy Relation]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Photon (object)|Photon]]


<div class="qlang-split" data-lang="it"></div>

**Il divisore di fascio quantistico** (Jelmer Renema — Leiden University)

Lo stato quantistico della luce si descrive quantizzando l'oscillazione armonica dei campi $E$ e $B$, ottenendo un insieme di operatori di creazione (innalzamento) e distruzione (abbassamento) $a^\dagger$ e $a$, dove ogni eccitazione corrisponde a un fotone.

In questo esercizio, considereremo l'effetto di un divisore di fascio (ad esempio un pezzo di vetro parzialmente riflettente) su un tale stato di luce. Consideriamo il caso più semplice in cui vi sono due facce di ingresso e due facce di uscita. Un'immagine di un tale divisore di fascio è mostrata di seguito.

> ![[PLANCKS_2015_p9_f1.png]]
> *Figura 1.*

Indichiamo lo stato all'ingresso del divisore di fascio con $\Psi = |n_1, n_2\rangle$, dove gli indici si riferiscono alle due facce di ingresso del divisore di fascio. L'azione del divisore di fascio è descritta da una trasformazione sugli operatori

$$
a_1^\dagger \to \cos\theta a_1'^\dagger + i\sin\theta a_2'^\dagger , \qquad
a_2^\dagger \to i\sin\theta a_1'^\dagger + \cos\theta a_2'^\dagger
$$

dove gli operatori con l'apice agiscono sui modi di *uscita* del divisore di fascio, come definito nella figura 1.

**(9.1)** *[1 punto]* Verificare che questa trasformazione degli operatori è unitaria. A quale requisito fisico corrisponde?

**(9.2)** *[2 punti]* Perché è necessario che il numero di porte di ingresso sia uguale al numero di porte di uscita? Quale grandezza fisica rappresenta $\theta$?

Consideriamo ora lo stato di ingresso $|1, 0\rangle$.

**(9.3)** *[2 punti]* Usando le relazioni date sopra, calcolare lo stato dopo il divisore di fascio. Qual è la probabilità di trovare il fotone in una delle due facce di uscita?

Consideriamo ora lo stato di ingresso $|1, 1\rangle$.

**(9.4)** *[2 punti]* Usando le relazioni date sopra, calcolare lo stato dopo il divisore di fascio.

**(9.5)** *[2 punti]* Cosa succede quando $\theta = \pi/4$? Alla luce di questo risultato, siete d'accordo con l'affermazione di Paul Dirac del 1923 secondo cui i fotoni possono interferire solo con se stessi? Motivare la risposta.

Abbiamo — senza dirvelo — considerato il caso piuttosto particolare di fotoni *identici*. Negli esperimenti, tuttavia, i fotoni possono differire l'uno dall'altro in molti modi: lunghezza d'onda, profilo temporale, profilo spaziale, eccetera.

**(9.6)** *[2 punti]* Come cambierebbe l'esito dell'esperimento descritto in 4 se i fotoni *non* fossero identici? Si consideri il caso di due fotoni che differiscono nella loro lunghezza d'onda, chiamati rosso e blu per semplicità. Suggerimento: in questo caso, gli operatori di creazione dovrebbero essere indicizzati con la proprietà del fotone.

**Fonte:** [Testo (PDF) — p.20](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Modern-Quantum Physics]], [[Wave Optics]]
**Metodi:** [[Superposition Principle (metodo)|Superposition Principle]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Symmetry Argument (metodo)|Symmetry Argument]], [[Photon Energy Relation (metodo)|Photon Energy Relation]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Photon (object)|Photon]]



<span class="atom-split" id="q10" data-atom="q10" data-title="PLANCKS 2015 — Leiden — Quesito 10" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/fluid-mechanics,argomento/fluidi,difficolta/5,multidisciplina/multi"></span>

<div class="qlang-switch" data-default="en"></div>



**Wind Drift of Icebergs Explained** (Rudi Kunnen — TU Eindhoven)

The Norwegian polar explorer Fridtjof Nansen had observed during an expedition in 1893 that icebergs were not transported in the direction of the wind, but at an angle of $20$ to $40$ degrees to it. This prompted the Swedish oceanographer Vagn Walfrid Ekman to study this puzzling feature. In 1905 he published his theory that could explain this remarkable finding.

The flow of an incompressible Newtonian fluid is described by the Navier–Stokes equations

$$
\frac{\partial \vec v}{\partial t} + (\vec v \cdot \vec\nabla)\vec v = -\frac{1}{\rho}\vec\nabla p + \nu \nabla^2 \vec v ,
$$

which describes the evolution in time $t$ of the velocity $\vec v$ in a fluid of density $\rho$ and kinematic viscosity $\nu = \mu/\rho$ ($\mu$ is the dynamic viscosity); $p$ is the pressure. This equation combined with the constraint of incompressibility

$$
\vec\nabla \cdot \vec v = 0 ,
$$

fully describes the fluid motion provided that adequate initial and boundary conditions are given.

Some hints on the applied notations in this equation, using $\vec v = (v_x, v_y, v_z)$:

$$
\nabla^2 \vec v = (\nabla^2 v_x, \nabla^2 v_y, \nabla^2 v_z),
$$

$$
(\vec v \cdot \vec\nabla)\vec v = \left(v_x \frac{\partial v_x}{\partial x} + v_y \frac{\partial v_x}{\partial y} + v_z \frac{\partial v_x}{\partial z},\; v_x \frac{\partial v_y}{\partial x} + v_y \frac{\partial v_y}{\partial y} + v_z \frac{\partial v_y}{\partial z},\; v_x \frac{\partial v_z}{\partial x} + v_y \frac{\partial v_z}{\partial y} + v_z \frac{\partial v_z}{\partial z}\right).
$$

Ekman found that Earth's axial rotation plays an important role in this problem. Assume a generic rotation vector $\vec\Omega$.

**(10.1)** *[4 points]* Show how to rewrite the Navier–Stokes equations to the following form, representing the motion in the co-rotating reference frame:

$$
\frac{\partial \vec v}{\partial t} + 2\vec\Omega \times \vec v + (\vec v \cdot \vec\nabla)\vec v = -\frac{1}{\rho}\vec\nabla P + \nu \nabla^2 \vec v .
$$

Give also an expression for $P$, where $P$ is the so-called reduced pressure.

For the remainder you may assume a counterclockwise rotation about the $z$ axis with a positive angular velocity $\Omega$. The dominant force balance is oceanic flow away from the surface and the ocean floor is the so-called geostrophic balance between the pressure gradient and the Coriolis force:

$$
2\Omega \times \vec v = -\frac{1}{\rho}\vec\nabla P .
$$

The vertical unit vector is denoted as $\hat z$. Under this balance the horizontal velocity components perpendicular to rotation are determined via geostrophy.

**(10.2)** *[3 points]* What can you say about the vertical variation of $\vec v$ based on this force balance?

> ![[PLANCKS_2015_p10_f1.png]]
> *Figure 1: Sketch: wind stress on the ocean surface.*

The boundary layer described in this problem leads to a so-called Ekman boundary layer. This is the upper part of the ocean, where the wind stress drives the flow. We assume the equation of motion which neglects the time derivative and the convective term $(\vec v \cdot \vec\nabla)\vec v$ to describe the boundary-layer flow near the wall.

**(10.3)** *[5 points]* Consider a situation in which horizontal pressure differences are absent. Use the boundary-layer approximation that $\nabla^2 \approx \partial^2/\partial z^2$ to derive the horizontal velocity components $v_x$ and $v_y$ in the boundary layer. The solution should fulfill the following boundary conditions:

$$
v_x \to 0,\; v_y \to 0 \quad \text{as } z \to -\infty ,
$$

$$
\frac{\partial v_x}{\partial z} = \frac{\tau}{\rho\nu},\; \frac{\partial v_y}{\partial z} = 0 \quad \text{at } z = 0 ,
$$

where $\tau$ is the wind stress, pointing in the $x$ direction. In your solution, what is the predicted drift direction of the icebergs?

The boundary layers derived in this problem are now referred to as Ekman boundary layers, in honor of the person who first described them theoretically.

**Fonte:** [Testo (PDF) — p.21](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Fluid Mechanics]], [[Earth & Environmental Science]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Physical Modeling (metodo)|Physical Modeling]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —


<div class="qlang-split" data-lang="it"></div>

**Spiegazione della deriva degli iceberg dovuta al vento** (Rudi Kunnen — TU Eindhoven)

L'esploratore polare norvegese Fridtjof Nansen aveva osservato durante una spedizione nel 1893 che gli iceberg non venivano trasportati nella direzione del vento, ma con un angolo da $20$ a $40$ gradi rispetto ad essa. Questo spinse l'oceanografo svedese Vagn Walfrid Ekman a studiare questa caratteristica sconcertante. Nel 1905 egli pubblicò la sua teoria che poteva spiegare questa notevole scoperta.

Il moto di un fluido newtoniano incomprimibile è descritto dalle equazioni di Navier–Stokes

$$
\frac{\partial \vec v}{\partial t} + (\vec v \cdot \vec\nabla)\vec v = -\frac{1}{\rho}\vec\nabla p + \nu \nabla^2 \vec v ,
$$

che descrivono l'evoluzione nel tempo $t$ della velocità $\vec v$ in un fluido di densità $\rho$ e viscosità cinematica $\nu = \mu/\rho$ ($\mu$ è la viscosità dinamica); $p$ è la pressione. Questa equazione combinata con il vincolo di incomprimibilità

$$
\vec\nabla \cdot \vec v = 0 ,
$$

descrive completamente il moto del fluido a condizione che siano date adeguate condizioni iniziali e al contorno.

Alcuni suggerimenti sulle notazioni usate in questa equazione, usando $\vec v = (v_x, v_y, v_z)$:

$$
\nabla^2 \vec v = (\nabla^2 v_x, \nabla^2 v_y, \nabla^2 v_z),
$$

$$
(\vec v \cdot \vec\nabla)\vec v = \left(v_x \frac{\partial v_x}{\partial x} + v_y \frac{\partial v_x}{\partial y} + v_z \frac{\partial v_x}{\partial z},\; v_x \frac{\partial v_y}{\partial x} + v_y \frac{\partial v_y}{\partial y} + v_z \frac{\partial v_y}{\partial z},\; v_x \frac{\partial v_z}{\partial x} + v_y \frac{\partial v_z}{\partial y} + v_z \frac{\partial v_z}{\partial z}\right).
$$

Ekman scoprì che la rotazione assiale della Terra gioca un ruolo importante in questo problema. Assumere un generico vettore di rotazione $\vec\Omega$.

**(10.1)** *[4 punti]* Mostrare come riscrivere le equazioni di Navier–Stokes nella seguente forma, che rappresenta il moto nel sistema di riferimento co-rotante:

$$
\frac{\partial \vec v}{\partial t} + 2\vec\Omega \times \vec v + (\vec v \cdot \vec\nabla)\vec v = -\frac{1}{\rho}\vec\nabla P + \nu \nabla^2 \vec v .
$$

Dare anche un'espressione per $P$, dove $P$ è la cosiddetta pressione ridotta.

Per il resto si può assumere una rotazione antioraria attorno all'asse $z$ con velocità angolare positiva $\Omega$. Il bilancio di forze dominante è quello del flusso oceanico lontano dalla superficie e dal fondo dell'oceano, il cosiddetto bilancio geostrofico tra il gradiente di pressione e la forza di Coriolis:

$$
2\Omega \times \vec v = -\frac{1}{\rho}\vec\nabla P .
$$

Il versore verticale è indicato con $\hat z$. Sotto questo bilancio le componenti orizzontali della velocità perpendicolari alla rotazione sono determinate tramite la geostrofia.

**(10.2)** *[3 punti]* Cosa si può dire sulla variazione verticale di $\vec v$ in base a questo bilancio di forze?

> ![[PLANCKS_2015_p10_f1.png]]
> *Figura 1: Schizzo: sforzo del vento sulla superficie dell'oceano.*

Lo strato limite descritto in questo problema conduce a un cosiddetto strato limite di Ekman. Questa è la parte superiore dell'oceano, dove lo sforzo del vento guida il flusso. Assumiamo l'equazione del moto che trascura la derivata temporale e il termine convettivo $(\vec v \cdot \vec\nabla)\vec v$ per descrivere il flusso nello strato limite in prossimità della parete.

**(10.3)** *[5 punti]* Si consideri una situazione in cui le differenze di pressione orizzontali sono assenti. Usare l'approssimazione di strato limite $\nabla^2 \approx \partial^2/\partial z^2$ per ricavare le componenti orizzontali della velocità $v_x$ e $v_y$ nello strato limite. La soluzione deve soddisfare le seguenti condizioni al contorno:

$$
v_x \to 0,\; v_y \to 0 \quad \text{as } z \to -\infty ,
$$

$$
\frac{\partial v_x}{\partial z} = \frac{\tau}{\rho\nu},\; \frac{\partial v_y}{\partial z} = 0 \quad \text{at } z = 0 ,
$$

dove $\tau$ è lo sforzo del vento, diretto nella direzione $x$. Nella vostra soluzione, qual è la direzione di deriva prevista degli iceberg?

Gli strati limite ricavati in questo problema sono ora chiamati strati limite di Ekman, in onore della persona che per prima li descrisse teoricamente.

**Fonte:** [Testo (PDF) — p.21](https://drive.google.com/file/d/1yO0cxulTSMyIYtGXkAQr8Z5jsgxPPXFl/view)
**Topic:** [[Fluid Mechanics]], [[Earth & Environmental Science]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Physical Modeling (metodo)|Physical Modeling]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
