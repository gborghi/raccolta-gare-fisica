---
title: IPhO 2026 — Teorica
tipo: prova
tags:
  - kg/prova
  - anno/2026
  - paese/International
  - comp/IPhO
  - tipo-gara/individuale
---
<div class="atom-reader" data-prova="ipho_2026_theory"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="IPhO 2026 — Teorica — Problema 1" data-tags="kg/prova,paese/International,comp/IPhO,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/multi,topic/fluid-mechanics,topic/electrostatics,topic/conservation-of-momentum,argomento/fluidi,object/block,object/electron,object/photon,object/atom"></span>

<div class="qlang-switch" data-default="en"></div>



**T1. Three problems**

This question consists of three independent problems.

**T1-A [3.0 pts]. Hydrostatic gate**

![[IPhO_2026_Q1_fig1.png]]

Fig. 1a.

Two water reservoirs are separated by a vertical wall MN, as shown in the figure 1a. The left reservoir can receive water from a source. It must be ensured that the maximum possible difference between the water levels is $\Delta h = 1.41\,\mathrm{m}$. To achieve this, a slot of vertical size $a\sqrt{2}/2$ is cut in MN and sealed with a solid cubic block of side length $a$. The block has density $3\rho_0$, with $\rho_0$ the density of water. The block is fully submerged, fixed to the wall at $O$ and can rotate without friction about the axis perpendicular to the plane of the figure that passes through point $O$.

**T1-A1 [3.0 pts]** Calculate the value of $a$ that ensures the maximum permissible difference in water levels is not exceeded.

**T1-B [3.5 pts]. Electron-positron pair**

![[IPhO_2026_Q1_fig2.png]]

*Fig. 1b.*

At a certain instant of time, a positron $e^+$ is located at a distance of $100a_0$ from an electron $e^-$. The particles are moving in such a way that their velocities are antiparallel at that instant, perpendicular to their separation, as shown in figure 1b. It is known that each particle has an angular momentum of magnitude $\mu\hbar$ with respect to the system's center of mass, where $\mu$ is a dimensionless numerical factor. Assume that the only interaction between $e^+$ and $e^-$ is electrostatic (both particles have the same mass $m$ and equal magnitude of the charge but of opposite sign). Furthermore, assume that this system remains isolated and that its dynamics are classical and non-relativistic.

*The Bohr radius $a_0$ is given by $a_0 = 4\pi\epsilon_0\hbar^2/(me^2)$.*

**T1-B1 [1.0 pts]** If $\mu = 4$, the system is bound, meaning that the particles move in a closed orbit around the system's center of mass. Find the maximum separation distance between $e^+$ and $e^-$ in terms of $a_0$.

**T1-B2 [2.5 pts].** If $\mu = \frac{15}{2}$, the system is unbound, meaing that the particles are no longer in closed orbit around the system's center of mass. Let $\vec{u}_\infty$ be the velocity of $e^+$ relative to $e^-$ as the separation distance between them tends to infinity. Calculate the angle between $\vec{u}_\infty$ and the initial line of motion of $e^+$. Give your answer in degrees.

*Hint 1: The eccentricty $\varepsilon$ of a conic trajectory for the present case is given by* $$\varepsilon = \sqrt{1 + \frac{4L^2E}{k^2e^4m}}$$ *where E and L are the total energy and the magnitude of the total angular momentum, respectively. k is Coulombs constant $k = 1/(4\pi\epsilon_0)$.*

*Hint 2: The equation of a conic in polar coordinates is* $$r = \frac{a}{1 - \varepsilon\cos(\theta)}$$

**T1-C [3.5 pts]. Photodissociation of ozone**

![[IPhO_2026_Q1_fig3.png]]

Fig. 1c.

A photon with angular frequency $\omega$ strikes an ozone molecule O$_3$ at rest, dissociating it (breaking it apart) into an oxygen molecule O$_2$ and an oxygen atom O, as shown in figure 1c. The photon is absorbed in this process. Let $U_i$ and $U_f$ be the ground state energies of the ozone and oxygen molecules, respectively. Assume that this system remains isolated and that its dynamics is classical (potential energies do not contribute to mass and the motion of the Oxygen atoms are non-relativistic). Use the relation $p = E/c$ for the linear momentum of the photon, where $E$ is its energy.

**T1-C1 [2.5 pts].** If the angle that the momentum of the outgoing O$_2$ with respect to the incident photon is $\theta$, determine the minimum angular frequency $\omega_{\mathrm{min}}$ required for this dissociation to occur at this angle. Write your answer in terms of $\hbar$, $c$, $\theta$, $\Delta U = U_f - U_i$, and the mass $m$ of an oxygen atom.

**T1-C2 [1.0 pts].** If $\theta = \pi/6$, calculate the value of $\hbar\omega_{\mathrm{min}} - \Delta U$. Give your answer in electronvolts (eV). Take $\Delta U = 1.10\,e\mathrm{V}$ and $m = 16.0\,\mathrm{amu}$.

*Hint:* $$(1+x)^r = 1 + rx + \frac{r(r-1)}{2!}x^2 + \frac{r(r-1)(r-2)}{3!}x^3 + \cdots$$

**Soluzione:**

**T1-A [3.0 pts]. Hydrostatic gate**

**T1-A1 [3.0 pts].**\
Since the dam is perfectly sealed, the area of the opening is $a \cdot (a/\sqrt{2})$:

![[IPhO_2026_S1_fig1.png]]

The horizontal force exerted by the water on either side is equal to the pressure at the centroid of the cube sections on the corresponding side times the effective area, as calculated previously: $$\Delta F = \frac{a^2}{\sqrt{2}}\rho_0 g\Delta h$$ With an effective application point at the centroid of the left region of the block. The other relevant forces are the block's weight $\rho \times g \times vol$, the vertical component of the force exerted by the fluid (buoyant force) $\rho_0 \times g \times vol$, and the force that the hinge applies to the block (which exerts no torque).\
At the critical $\Delta h$, the bottom edge of the opening applies zero force to the block. For the net torque to be 0, $$\frac{a^2}{\sqrt{2}}\rho_0 g\Delta h\left(\frac{a}{2\sqrt{2}}\right) = (\rho - \rho_0)a^3 g\left(\frac{a}{2\sqrt{2}}\right)$$ **Note:** Arms are $a/(2\sqrt{2})$ from O either in the horizontal or vertical direction for pressure difference and effective weight respectively. $$a = \frac{\rho_0}{\sqrt{2}(\rho - \rho_0)}\Delta h$$ For $\rho = 3\rho_0$, $$\boxed{a = \frac{\Delta h}{2\sqrt{2}} = 0.50m}$$

**T1-B [2.5 pts]. Electron-positron pair**\
From the definition of angular momentum, $$mv_0(50a_0) = \mu\hbar$$ $$v_0 = \frac{\mu\hbar}{50ma_0}$$ The total energy of the system is $$2\left(\frac{1}{2}mv_0^2\right) - \frac{ke^2}{100a_0} = \frac{ke^2}{a_0}\left(\frac{\mu^2}{50^2} - \frac{1}{100}\right)$$

**T1-B1 [1.0 pts].**

For $\mu = 4$, $$E = -\frac{9ke^2}{2500a_0}$$

**SOLUTION 1:**\
At the critical separation distances, $\vec{v} \perp \vec{r}$ and $L = mvr$. The energy at $r_{max}$ and $r_{min}$ can be written as $$E = 2\frac{L^2}{2mr^2} - \frac{ke^2}{r}$$ Using $L = 2\mu\hbar = 8\hbar$ and the conservation of energy, $$-\frac{9ke^2}{2500a_0} = \frac{64\hbar^2}{mr^2} - \frac{ke^2}{r}$$ $$\frac{ke^2}{a_0}\left(\frac{9}{2500}r^2 - a_0 r + 64a_0^2\right) = 0$$ $$r = \frac{a_0 \pm \sqrt{a_0^2 - \frac{576}{625}a_0^2}}{9/1250}$$ $$r = \frac{1250}{9}a_0\left(1 \pm \frac{7}{25}\right)$$ The maximum separation corresponds to the solution with the plus sign, $$\boxed{r_{max} = \frac{1600}{9}a_0}$$

**SOLUTION 2:**\
Since the energy is negative and the electrostatic force is central and proportional to $r^{-2}$, the trajectory of the particles will be elliptical with respect to the CM. The energy can be written in terms of the semi-major axis $x$ as $$E = -\frac{ke^2}{2x}$$ $$x = \frac{1250}{9}a_0$$ Since $\vec{v}_0$ is perpendicular to the vector that connects the two particles, the initial position must correspond to either $r_{max}$ or $r_{min}$. The other critical distance, $r_2$ is given by the definition of $x$: $$2x = r_0 + r_2$$ $$\boxed{r_2 = \left(\frac{2500}{9} - 100\right)a_0 = \frac{1600}{9}a_0}$$ Which is greater than $r_0$ and corresponds to $r_{max}$

**SOLUTION 3:**\
The general equation for the trajectory in polar coordinates is $$r(\theta) = \frac{\ell}{1 + \varepsilon\cos(\theta - \theta_0)}$$ with $\ell = \frac{2L^2}{mke^2}$ the semi-latus rectum and $\varepsilon$ the eccentricity, as given by the hint in question T1-B2. The maximum separation distance is reached when $\cos(\theta - \theta_0) = -1$: $$r_{max} = \frac{\ell}{1 - \varepsilon}$$ Calculating the values of $\ell$ and $\varepsilon$, $$\ell = \frac{2(8\hbar)^2}{mke^2} = 128a_0$$ $$\varepsilon = \sqrt{1 - \frac{36ke^2(8\hbar)^2}{2500a_0 m(ke^2)^2}}$$ $$\varepsilon = \sqrt{1 - \frac{2304}{2500}} = \frac{7}{25}$$ Replacing these values in the expression for $r_{max}$, $$\boxed{r_{max} = \frac{128}{1 - (7/25)}a_0 = \frac{1600}{9}a_0}$$

**T1-B2 [2.5 pts].**\
For $\mu = 15/2$, $$E = +\frac{ke^2}{80a_0}$$ The distance between particles follows $$r(\theta) = \frac{\ell}{1 + \varepsilon\cos(\theta - \theta_0)}$$ Since the initial position corresponds to the closest approach, it is convenient to measure the angle $\theta$ with respect to the y axis so that $\cos\theta_0 = 1$, $\theta_0 = 0$.\
For $r \to \infty$, $$1 + \varepsilon\cos\theta' \to 0$$ $$\theta' = \arccos(-1/\varepsilon)$$ Calculating the eccentricity, $$\varepsilon = \sqrt{1 + \frac{4ke^2(15\hbar^2)}{80a_0 m(ke^2)^2}}$$ $$\varepsilon = \sqrt{1 + \frac{45}{4}} = \frac{7}{2}$$ Replacing this value in the expression for $\theta$, $$\theta' = \arccos(-2/7) = 106.60^\circ$$ Since this is the angle with respect to the $y$-axis but the initial $e^+$ velocity is directed towards the positive $x$-axis, heading downward $$\boxed{\theta = 90^\circ - \theta' = -16.60^\circ}$$

.

**T1-C [3.5 pts]. Photodissociation of ozone**\
**T1-C1 [2.5 pts].**

**SOLUTION 1: pure algebra**

The momentum conservation is $$\hbar\frac{\omega}{c}\hat{k} = \vec{p} + \vec{q},$$ where $\vec{p}$ and $\vec{q}$ are the momentum of the O$_2$ and the O, respectively. Solving for $q^2$, $$q^2 = \left(\frac{\hbar\omega}{c} - p\cos(\theta)\right)^2 + p^2\sin^2(\theta).$$ The energy conservation reads $$\hbar\omega = \Delta U + \frac{p^2}{4m} + \frac{q^2}{2m}$$ where $\Delta U = U_f - U_i$.

For a given $\theta$, $p$ can be written in terms of $\omega$. Replacing $q^2$ on energy balance and simplifying, we get $$p^2 - \frac{4\hbar\omega\cos(\theta)}{3c}p + \frac{2\hbar^2\omega^2}{3c^2} + \frac{4}{3}m(\Delta U - \hbar\omega) = 0.$$ This gives a quadratic equation on $p$. For $p$ to be real, the discriminant must be positive. $$\frac{16\hbar^2\omega^2\cos^2(\theta)}{9c^2} - 4\left(\frac{2\hbar^2\omega^2}{3c^2} + \frac{4}{3}m(\Delta U - \hbar\omega)\right) \geq 0$$ The previous bound determines $\omega_\mathrm{min}$ as the minimal root of the quadratic equation on $\omega$ $$(\cos(2\theta) - 2)\hbar^2\omega^2 + 6mc^2\hbar\omega - 6\Delta U mc^2 = 0$$ $$\omega_\pm = \frac{-6mc^2\hbar \pm \sqrt{D}}{2\left(\cos(2\theta) - 2\right)\hbar^2}$$ $$D = 36\hbar^2 m^2 c^4 + 24\Delta U mc^2\hbar^2\left(\cos(2\theta) - 2\right)$$ The smallest root $\omega_+$. Thus, simplifying, one gets $$\boxed{\omega_\mathrm{min} = \frac{3mc^2 - \sqrt{3mc^2\left(3mc^2 + 2\Delta U(\cos(2\theta) - 2)\right)}}{\hbar(2 - \cos(2\theta))}}$$

**SOLUTION 2: Center of mass approach**\
*Part I: Conservation laws*\
First, find the velocity of the center of mass. We get $$(3mv_{CM}) = p_\gamma = \hbar\omega/c$$ We will use $p_\gamma$ for calculations $$v_{CM} = p_\gamma/(3m)$$ We want to relate the relative velocities in CM. We have by magnitude $$2mv_1 = mv_2$$ And $v_2$ is the single oxygen atom (the one we don't want). The energy conservation equation is $$\begin{aligned}
E_\gamma = p_\gamma c &= \frac{1}{2}(3m)v_{CM}^2 + \Delta U + \frac{1}{2}mv_2^2 + \frac{1}{2}(2m)v_1^2\\
&= \Delta U + \frac{p_\gamma^2}{6m} + \frac{1}{2} \times 6m(v_1)^2
\end{aligned}$$ We can now find $v_1$ in terms of $p_\gamma$.\
*Part 2: geometry and critical condition*\
We see that the set of possible velocities $\vec{v}_1$ form a circle (they have constant $v_1$). We need to consider that $\theta$ is the angle between $\vec{v}_{CM}$ and $\vec{v}_{CM} + \vec{v}_1$ (this is the full velocity of particle 1).\
If the circle of radius $v_1$ is too small there is no solution (the straight line at the angle will not intersect the circle). If the radius $v_1$ is big enough, there will always be two solutions intersecting the circle. The critical case (crossover from no solution to two) is when the circle is tangent to the straight line. This is the case we need.\
In that case the triangle formed by $0, \vec{v}_{CM}, \vec{v}_{CM} + \vec{v}_1$ is a right triangle.\
**Warning: This can only happen if $\theta \leq 90^o$. The other case will be dealt with separately.**\
This way $$v_1 = v_{CM}\sin(\theta)$$ Replace above to find that in conservation of energy $$p_\gamma c = \Delta U + \frac{p_\gamma^2}{6m} + \frac{1}{2} \times \frac{p_\gamma^2\sin^2(\theta)}{3m}$$ now we can solve the quadratic equation for $p_\gamma$. We get (*we need to choose the correct solution of the quadratic equation*) $$p_\gamma = \frac{3cm - \sqrt{3}\sqrt{m}\sqrt{3c^2 m + 2\Delta U\cos(2\theta) - 4\Delta U}}{2\sin^2(\theta) + 1}$$ **Note:** Any of the following expressions are the same: $$2\sin^2(\theta) + 1 = 3 - 2\cos^2(\theta) = 2 - \cos(2\theta)$$ Rewrite as the angular frequency $$\boxed{\omega_{min} = 3mc^2\left[\tfrac{1 - \sqrt{1 - \frac{\Delta U}{3mc^2}(2\sin^2(\theta) + 1)}}{(2\sin^2(\theta) + 1)\hbar}\right]}$$ **Special case:** $\theta \geq 90^0$, *this is essentially impossible to see in a brute force algebraic solution, but it is an important feature of the problem. Needs a small amount of points in this solution*\
For angle greater than $90^0$, as soon as the circle reaches the answer for $90^0$ it becomes big enough to allow all angles. Formula is the same with $\theta = 90^0$.\
**T1-C2 [1.0 pts].**

Up to second order in $\Delta U$ $$\omega_\mathrm{min} = \frac{\Delta U}{\hbar} - \frac{(\cos(2\theta) - 2)\Delta U^2}{6\hbar mc^2}$$ $$\hbar\omega_\mathrm{min} - \Delta U = \frac{(2 - \cos(2\theta))}{6mc^2}(\Delta U)^2$$ $$\boxed{\hbar\omega_\mathrm{min} - \Delta U = 2.03 \times 10^{-11}\mathrm{eV}}$$

*Soluzione ufficiale (official solution), trascrizione LaTeX di olimpicos.net: [IPhO_2026_S1.pdf](https://olimpicos.net/files/ipho/IPhO_2026_S1.pdf).*

**Topic:** [[Fluid Mechanics]], [[Electrostatics]], [[Conservation of Momentum]]
**Metodi:** [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Block (object)|Block]], [[Electron (object)|Electron]], [[Photon (object)|Photon]], [[Atom (object)|Atom]]
**Fonte:** [Testo (PDF) — p.4](https://assets.zyrosite.com/mk3Jq6ly29i40jE2/theoretical-exam-VD3AIsWsVvCnBRpu.pdf#page=4)


<div class="qlang-split" data-lang="it"></div>

**T1. Tre problemi**

Questo quesito è costituito da tre problemi indipendenti.

**T1-A [3.0 pt]. Paratoia idrostatica**

![[IPhO_2026_Q1_fig1.png]]

*Fig. 1a.*

Due serbatoi d'acqua sono separati da una parete verticale MN, come mostrato in figura 1a. Il serbatoio di sinistra può ricevere acqua da una sorgente. Si deve garantire che la massima differenza possibile tra i livelli dell'acqua sia $\Delta h = 1.41\,\mathrm{m}$. A questo scopo, nella parete MN viene praticata una fessura di altezza verticale $a\sqrt{2}/2$, chiusa ermeticamente da un blocco cubico pieno di lato $a$. Il blocco ha densità $3\rho_0$, dove $\rho_0$ è la densità dell'acqua. Il blocco è completamente immerso, è fissato alla parete nel punto $O$ e può ruotare senza attrito attorno all'asse perpendicolare al piano della figura passante per $O$.

**T1-A1 [3.0 pt].** Calcola il valore di $a$ che garantisce che la massima differenza ammissibile tra i livelli dell'acqua non venga superata.

**T1-B [3.5 pt]. Coppia elettrone-positrone**

![[IPhO_2026_Q1_fig2.png]]

*Fig. 1b.*

In un certo istante un positrone $e^+$ si trova a distanza $100a_0$ da un elettrone $e^-$. Le particelle si muovono in modo che, in quell'istante, le loro velocità siano antiparallele e perpendicolari alla loro congiungente, come mostrato in figura 1b. È noto che ciascuna particella ha un momento angolare di modulo $\mu\hbar$ rispetto al centro di massa del sistema, dove $\mu$ è un fattore numerico adimensionale. Si supponga che l'unica interazione tra $e^+$ ed $e^-$ sia quella elettrostatica (le due particelle hanno la stessa massa $m$ e cariche di uguale modulo e segno opposto). Si supponga inoltre che il sistema rimanga isolato e che la sua dinamica sia classica e non relativistica.

*Il raggio di Bohr $a_0$ è dato da $a_0 = 4\pi\epsilon_0\hbar^2/(me^2)$.*

**T1-B1 [1.0 pt].** Se $\mu = 4$ il sistema è legato, cioè le particelle percorrono un'orbita chiusa attorno al centro di massa del sistema. Trova la massima distanza tra $e^+$ ed $e^-$ in funzione di $a_0$.

**T1-B2 [2.5 pt].** Se $\mu = \frac{15}{2}$ il sistema non è legato, cioè le particelle non percorrono più un'orbita chiusa attorno al centro di massa. Sia $\vec{u}_\infty$ la velocità di $e^+$ relativa a $e^-$ quando la loro distanza tende all'infinito. Calcola l'angolo tra $\vec{u}_\infty$ e la retta iniziale del moto di $e^+$. Esprimi la risposta in gradi.

*Suggerimento 1: l'eccentricità $\varepsilon$ di una traiettoria conica, nel caso in esame, è data da* $$\varepsilon = \sqrt{1 + \frac{4L^2E}{k^2e^4m}}$$ *dove E e L sono rispettivamente l'energia totale e il modulo del momento angolare totale; k è la costante di Coulomb $k = 1/(4\pi\epsilon_0)$.*

*Suggerimento 2: l'equazione di una conica in coordinate polari è* $$r = \frac{a}{1 - \varepsilon\cos(\theta)}$$

**T1-C [3.5 pt]. Fotodissociazione dell'ozono**

![[IPhO_2026_Q1_fig3.png]]

*Fig. 1c.*

Un fotone di frequenza angolare $\omega$ colpisce una molecola di ozono O$_3$ in quiete e la dissocia (la spezza) in una molecola di ossigeno O$_2$ e un atomo di ossigeno O, come mostrato in figura 1c. Nel processo il fotone viene assorbito. Siano $U_i$ e $U_f$ le energie dello stato fondamentale rispettivamente della molecola di ozono e della molecola di ossigeno. Si supponga che il sistema rimanga isolato e che la sua dinamica sia classica (le energie potenziali non contribuiscono alla massa e il moto degli atomi di ossigeno è non relativistico). Per la quantità di moto del fotone si usi la relazione $p = E/c$, dove $E$ è la sua energia.

**T1-C1 [2.5 pt].** Se l'angolo tra la quantità di moto della molecola O$_2$ uscente e il fotone incidente è $\theta$, determina la minima frequenza angolare $\omega_{\mathrm{min}}$ necessaria perché la dissociazione avvenga con quell'angolo. Esprimi la risposta in funzione di $\hbar$, $c$, $\theta$, $\Delta U = U_f - U_i$ e della massa $m$ di un atomo di ossigeno.

**T1-C2 [1.0 pt].** Se $\theta = \pi/6$, calcola il valore di $\hbar\omega_{\mathrm{min}} - \Delta U$. Esprimi la risposta in elettronvolt (eV). Assumi $\Delta U = 1.10\,e\mathrm{V}$ e $m = 16.0\,\mathrm{u}$.

*Suggerimento:* $$(1+x)^r = 1 + rx + \frac{r(r-1)}{2!}x^2 + \frac{r(r-1)(r-2)}{3!}x^3 + \cdots$$

**Soluzione:** La soluzione ufficiale completa (in inglese) è nella versione originale di questo quesito e nel PDF ufficiale.

**Topic:** [[Fluid Mechanics]], [[Electrostatics]], [[Conservation of Momentum]]
**Metodi:** [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Block (object)|Block]], [[Electron (object)|Electron]], [[Photon (object)|Photon]], [[Atom (object)|Atom]]
**Fonte:** [Testo (PDF) — p.4](https://assets.zyrosite.com/mk3Jq6ly29i40jE2/theoretical-exam-VD3AIsWsVvCnBRpu.pdf#page=4)



<span class="atom-split" id="q02" data-atom="q02" data-title="IPhO 2026 — Teorica — Problema 2" data-tags="kg/prova,paese/International,comp/IPhO,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/mono,topic/geometric-optics,argomento/ottica,object/mirror,object/cylinder"></span>

<div class="qlang-switch" data-default="en"></div>



**T2. Cooking with sunlight?**

The redistribution of luminous flux into regions of high and low intensity due to reflection or refraction can lead to the formation of *caustics:* curves formed by the intersection of infinitesimally close light rays. As an example, Figure 2a shows the caustic formed by rays incident paraxially on a half-cylindrical mirror. Figure 2b shows a photograph of the caustic formed by the reflection of light on the bottom part of a coffee cup. The brightest and central point of the caustic is called the *cusp*; at this point, the light intensity is maximal.

![[IPhO_2026_Q2_fig1.png]]

*Fig. 2a.*

![[IPhO_2026_Q2_fig2.jpg]]

*Fig. 2b.*

Caustics have a variety of applications in science, ranging from high-precision optics and quantum optics to astrophysics. In this question, you will study the caustic formation by light reflection on a half-cylinder mirror of radius $R$, as shown in figure 2c. You will also investigate other aspects of this mirror, such as its application in *solar cookers*.

Throughout the problem, assume that the incident rays come from a distant external light source and are parallel to the mirror's optical axis. By symmetry, it is sufficient to study reflection in one plane. Figure 2d shows such a plane, the mirror, and the coordinate system used throughout the problem.

![[IPhO_2026_Q2_fig3.png]]

*Fig. 2c.*

![[IPhO_2026_Q2_fig4.png]]

*Fig. 2d.*

**T2-A [1.5 pts]. Multiple reflections**

![[IPhO_2026_Q2_fig5.png]]

*Fig.2e.*

Figure 2e shows the relationship between the $x$-coordinate of an incident ray and the number $N$ of reflections it undergoes, up to $N = 3$. As $x$ varies over the interval $(-R, R)$, the variable $N$ varies over all natural numbers greater than or equal to 1. The maximum distance from the optical axis that allows an incident ray to be reflected by the mirror at most $N$ times is denoted $x_N$.

**T2-A1 [1.5 pts].** Find the general expression for $x_N$ in the infinite sequence $x_1, x_2, x_3, \ldots$ that limits the coordinates of the rays with at most $N$ reflections. Express your answer in terms of $R$ and $N$.

**T2-B [4.0 pts]. Solar Cooker**

![[IPhO_2026_Q2_fig6.png]]

*Fig.2f.*

Consider a system consisting of a half-hollow-cylinder mirror and a cylindrical container. The cylinder is fully absorbing: any ray of light hitting it will be absorbed. The mirror radius is $R$. The container radius $a$. The axes of the mirror and the container are parallel. The center of the container is $R/2$ from the mirror on the system's symmetry plane, as shown in figure 2f. The mirror harnesses solar radiation to heat food inside the container. Assume that the sunlight is of constant and uniform intensity (power per unit area), and that the light rays are parallel to the optical axis of the mirror. Furthermore, assume that $a$ is such that any ray that is absorbed by the cylinder reflects from the mirror at most once. Let $\theta_{\mathrm{max}}$ be the maximum angle of incidence on the mirror (measured with respect to the normal drawn at the point of incidence) of any reflected ray striking the container.

**T2-B1 [2.0 pts].** The container radius is $a = \alpha\sin(\theta_{max}) + \beta\sin(2\theta_{max})$. Write $\alpha$ and $\beta$ in terms of $R$.

If you do not find $\alpha$ and $\beta$, use the expression given for the rest of the problem.

**T2-B2 [1.5 pts].** Let $P_0$ be the power that would be received by the cyllinder if the mirror was not present. Write $P/P_0$, the ratio of the actual received power $P$ to $P_0$, in terms of $\theta_{\mathrm{max}}$.

**T2-B3 [0.5 pts].** If $R = 1.0\,\mathrm{m}$, write the value of $a$ such that $P = 5P_0$. Give your answer in cm.

**T2-C [4.5 pts]. Caustics and Cusp**

**T2-C1 [0.5 pts].** Consider a ray $A$ that strikes the mirror at an angle $\theta$, as shown in Figure 2g. Upon reflection, the equation corresponding to this ray in the coordinate system defined in Figure 2g. is $y = m_Ax + b_A$. Write $m_A$ and $b_A$ in terms of $\theta$ and $R$

Hint: the expected form of $m_A = K_1\cot(K_2\theta)$ and $b_A = R\frac{K_3}{\cos(K_4\theta)}$, with $K_i$ numerical constants.

![[IPhO_2026_Q2_fig7.png]]

Fig. 2g.

**T2-C2 [2.0 pts].** Now consider a ray $B$, parallel to $A$, that strikes the surface at an angle $\theta + \Delta\theta$, with $\Delta\theta \ll \theta$. Upon reflection, the equation corresponding to this ray is $y = m_Bx + b_B$. Write $m_B$ and $b_B$ in terms of $\theta$, $\Delta\theta$, and $R$, approximating to first order in $\Delta\theta$.

**T2-C3 [1.0 pts].** Find the coordinates of the point of intersection $(X_c, Y_c)$ between the reflected rays of $A$ and $B$. Write your answer in terms of $R$ and $\theta$.

**T2-C4 [1.0 pts].** For $\theta \ll 1$, we have $Y_c = v|X_c|^{p/q}+u$. Write $v$ and $u$ in terms of $R$ and find the values of the integers $p$ and $q$ (equivalently, give the rational number $p/q$).

**Soluzione:**

**PART A [1.5 pts]. Multiple reflections**

**T2-A1 [1.5 pts].** For $n = 1$, finding $x_1$ corresponds to considering the limiting case of the ray, shown in blue in the figure below.

![[IPhO_2026_S2_fig1.png]]

In this case, the incident ray passes through point $A$, and the reflected ray, shown in red in the figure, passes exactly through point $B$ on the edge of the mirror.\
Let $\theta_1$ be the angle formed by the radius passing through the reflection point $C_1$ with the vertical axis (the $y$ axis). Let $O$ be the center of the mirror.\
Since the incident ray is parallel to the $y$ axis, the angle of incidence is $$\angle OC_1A = \theta_1\,.$$ By the law of reflection, $$\angle OC_1A = \angle OC_1B = \theta_1\,.$$ Additionally, note that the triangle $C_1BO$ is isosceles, so $$\angle C_1BO = \theta_1\,.$$ Finally, summing the internal angles of the triangle $C_1BA$, we have $$3\theta_1 + \frac{\pi}{2} = \pi,$$ $$\theta_1 = \frac{\pi}{6}.$$ Correspondingly, from the triangle $OC_1A$, we obtain $$\boxed{x_1 = R\sin\frac{\pi}{6} = \frac{R}{2}.}$$

For $n = 2$, the limiting case for two reflections is shown in the figure below.

![[IPhO_2026_S2_fig2.png]]

In analogy with the case $n = 1$, we let $\theta_2$ be the angle between the radius passing through the reflection point $C_2$ and the mirror axis. We see that the trajectory of the reflected ray determines two isosceles triangles with a common side and a base angle of $\theta_2$. Also note that the ray's trajectory forms half of a regular pentagon. Summing over the internal angles of the two isosceles triangles and the rectangular triangle, we obtain $$5\theta_2 + \frac{\pi}{2} + \pi = 3\pi,$$ which simplifies to $$\theta_2 = \frac{3\pi}{10}.$$ Correspondingly, $$\boxed{x_2 = R\sin\frac{3\pi}{10} = \frac{1 + \sqrt{5}}{4}R \approx 0.8R.}$$

**Case n=3:** For completeness, we present the limiting case for 3 reflections in the figure below.

![[IPhO_2026_S2_fig3.png]]

Letting $\theta_3$ be the incidence angle, we observe that the trajectory of the reflected ray determines three isosceles triangles with common sides and a base angle of $\theta_3$. Also notice that the ray's trajectory now forms half of a regular heptagon. Summing over the internal angles of the three isosceles triangles and the rectangular triangle, we obtain $$7\theta_3 + \frac{\pi}{2} + \pi = 4\pi,$$ which simplifies to $$\theta_3 = \frac{5\pi}{14}$$ Correspondingly $$\boxed{x_3 = R\sin\frac{5\pi}{14} \approx 0.9R.}$$ Generalizing the result, the limiting case for $n$ reflections corresponds to the ray with incidence angle $\theta_N$.\
The trajectory of the reflected ray determines $n$ isosceles triangles with common sides and a base angle of $\theta_N$.\
Also note that the ray's trajectory now forms half of a regular $2n+1$-gon. Summing over the internal angles of the $n$ isosceles triangles and the rectangular triangle determined by the incident ray, we obtain $$(2n\theta_N + \pi) + \left(\frac{\pi}{2} + \theta_N\right) = (n + 1)\pi,$$ $$(2n + 1)\theta_N + \frac{3\pi}{2} = (n + 1)\pi,$$ which simplifies to $$\theta_N = \frac{2n - 1}{4n + 2}\pi$$ Correspondingly $$\boxed{x_n = R\sin\frac{2N - 1}{4N + 2}\pi = R\cos\frac{\pi}{2N + 1}}$$

**T2-B [4.0 pts]. Solar Cooker**

**T2-B1 [2.0 pts].**\
The limiting case is shown in the figure below.

![[IPhO_2026_S2_fig4.png]]

-   $O_c$ is the center of the container.

-   $A$ is the incidence point on the $x$-axis

-   $B$ is the reflection point

-   The reflected ray is tangential to the container at the point $C$

-   The reflected ray crosses the $y$-axis at $D$.

As the triangle $ODB$ is isosceles, $$\angle ODB = \pi - 2\theta_\mathrm{max}\,,$$ $$\cos\theta_\mathrm{max} = \frac{R}{2\overline{OD}}.$$ $$\overline{OD} = \frac{R}{2\cos\theta_\mathrm{max}}.$$ The triangle $O_cDC$ is rectangle $$\begin{aligned}
a &= \overline{O_cD}\sin\left(\pi - 2\theta_\mathrm{max}\right)\\
&= \left(\overline{OD} - \frac{R}{2}\right)\sin\left(2\theta_\mathrm{max}\right)\\
&= \left(\frac{R}{2\cos\theta_\mathrm{max}} - \frac{R}{2}\right)\sin\left(2\theta_\mathrm{max}\right)\\
&= R\sin\theta_\mathrm{max} - \frac{R}{2}\sin\left(2\theta_\mathrm{max}\right)
\end{aligned}$$ The coefficients read $$\boxed{\alpha = R}$$ $$\boxed{\beta = -\frac{R}{2}}$$

**T2-B2 [1.5 pts].** Without the mirror: $$P_0 = 2Ial,$$ where $I$ is the sunlight intensity and $l$ is the length of the cylinder.\
With the mirror: $$\begin{aligned}
P &= 2I\overline{OA}l\\
&= 2IRl\sin\theta_\mathrm{max}
\end{aligned}$$ Thus $$\begin{aligned}
\frac{P}{P_0} &= \frac{2IRl\sin\theta_\mathrm{max}}{2Ial}\\
&= \frac{R\sin\theta_\mathrm{max}}{R\sin\theta_\mathrm{max}(1 - \cos\theta_\mathrm{max})}
\end{aligned}$$ $$\boxed{\frac{P}{P_0} = \frac{1}{1 - \cos\theta_\mathrm{max}}.}$$ **Alternative answer in terms of $\alpha$ and $\beta$:** Without the mirror: $$P_0 = 2Ial = 2I(\alpha\sin\theta_\mathrm{max} + \beta\sin\left(2\theta_\mathrm{max}\right))l$$ where $I$ is the sunlight intensity and $l$ is the length of the cylinder.\
With the mirror: $$\begin{aligned}
P &= 2I\overline{OA}l\\
&= 2IRl\sin\theta_\mathrm{max}
\end{aligned}$$ Thus $$\begin{aligned}
\frac{P}{P_0} &= \frac{2IRl\sin\theta_\mathrm{max}}{2Ial}\\
&= \frac{R\sin\theta_\mathrm{max}}{\alpha\sin\theta_\mathrm{max} + \beta\sin\left(2\theta_\mathrm{max}\right)}
\end{aligned}$$ $$\boxed{\frac{P}{P_0} = \frac{R}{\alpha + 2\beta\cos\theta_\mathrm{max}}.}$$ **T2-B3 [0.5 pts].** If $P = 5P_0$ $$\begin{aligned}
5 &= \frac{1}{1 - \cos\theta_\mathrm{max}},\\
\cos\theta_\mathrm{max} &= \frac{4}{5},\\
\sin\theta_\mathrm{max} &= \frac{3}{5}.
\end{aligned}$$ Finally $$a = (1\mathrm{m})\frac{3}{5}\left(1 - \frac{4}{5}\right).$$ $$\boxed{a = 12\,\mathrm{cm}.}$$ **Alternative solution parametrized in terms of $\alpha$ and $\beta$** $$a = -\frac{R\sqrt{100\beta^2 - (R - 5\alpha)^2}}{50\beta}$$

**T2-C [4.5 pts]. Caustics and Cusp**

**T2-C1 [0.5 pts].**

![[IPhO_2026_S2_fig5.png]]

The reflected ray forms an angle $2\theta$ with the vertical axis. Therefore, the slope of the line is $$\boxed{m_{\scriptscriptstyle A} = \cot(2\theta).}$$ The reflected ray intersects the $y$-axis at $C$, $\overline{OC} = b_A$, forming the isosceles triangle $OBC$. from the intersection $$\cos\theta = \frac{R}{2b_A}.$$ $$\boxed{b_A = \frac{R}{2\cos\theta}.}$$ Equivalent expressions: $$\begin{aligned}
m_{\scriptscriptstyle A} &= \cot(2\theta) = \frac{1}{\tan(2\theta)} = \frac{\cot(\theta)}{2} - \frac{\tan(\theta)}{2}\\
b_A &= \frac{R}{2\cos\theta} = \frac{R}{2}\sec\theta
\end{aligned}$$

**T2-C2 [2.0 pts].**

![[IPhO_2026_S2_fig6.png]]

The slope is $$\begin{aligned}
m_{\scriptscriptstyle B} &= \cot(2\theta + 2\Delta\theta)\\
&= \frac{\cot(2\theta)\cot(2\Delta\theta) - 1}{\cot(2\theta) + \cot(2\Delta\theta)}\\
&= \frac{\cot(2\theta) - \tan(2\Delta\theta)}{\cot(2\theta)\tan(2\Delta\theta) + 1}\\
&= (\cot(2\theta) - 2\Delta\theta)(1 - 2\Delta\theta\cot(2\theta)) + \ldots\\
&= \cot(2\theta) - 2\Delta\theta(1 - \tan^2(2\Delta\theta)) + \ldots
\end{aligned}$$ Then, the first-order expansion of $m_{\scriptscriptstyle B}$ reads $$\boxed{m_{\scriptscriptstyle B} = \cot(2\theta) - 2\csc^2(2\theta)\Delta\theta.}$$ On the other hand, the intercept is $$\begin{aligned}
b_{\scriptscriptstyle B} &= \frac{R}{2}\sec(\theta + \Delta\theta)\\
&= \frac{R}{2}\frac{\sec(\theta)\sec(\Delta\theta)}{1 - \tan(\theta)\tan(\Delta\theta)}\\
&= \frac{R}{2}\left(\sec(\theta)(1 + \tan(\theta)\Delta\theta)\right) + \ldots
\end{aligned}$$ and the first-order expansion reads $$\boxed{b_{\scriptscriptstyle B} = \frac{R}{2}\sec(\theta)\left(1 + \tan(\theta)\Delta\theta\right)}$$ Equivalent expressions: $$\begin{aligned}
m_{\scriptscriptstyle B} &= \cot(2\theta) - 2\csc^2(2\theta)\Delta\theta\\
&= \frac{1}{2}\csc^2(2\theta)(\sin(4\theta) - 4\Delta\theta)\\
&= \frac{1}{2}\left(\cot(\theta) - \tan(\theta) - \csc^2(\theta)\sec^2(\theta)\right)\Delta\theta
\end{aligned}$$ $$\begin{aligned}
b_{\scriptscriptstyle B} &= \frac{R}{2}\sec(\theta)\left(1 + \tan(\theta)\Delta\theta\right)\\
&= \frac{R}{2\cos(\theta)}\left(1 + \tan(\theta)\Delta\theta\right)
\end{aligned}$$

**T2-C3 [1.0 pts].**\
The coordinates of the intersection point, $(X_C, Y_C)$, fulfill the following equations: $$\begin{aligned}
Y_C &= m_{\scriptscriptstyle A}X_C + b_{\scriptscriptstyle A}\\
Y_C &= m_{\scriptscriptstyle B}X_C + b_{\scriptscriptstyle B},
\end{aligned}$$ Solving: $$(X_C, Y_C) = \left(-\frac{b_{\scriptscriptstyle A} - b_{\scriptscriptstyle B}}{m_{\scriptscriptstyle A} - m_{\scriptscriptstyle B}}, \frac{m_{\scriptscriptstyle A}b_{\scriptscriptstyle B} - b_{\scriptscriptstyle A}m_{\scriptscriptstyle B}}{m_{\scriptscriptstyle A} - m_{\scriptscriptstyle B}}\right)$$ Replacing $m_{\scriptscriptstyle B}$ and $b_{\scriptscriptstyle B}$, we find: $$(X_C, Y_C) = \left(R\sin^3(\theta), \frac{R}{2}\cos(\theta)(2 - \cos(2\theta))\right)$$ $$\boxed{X_C = R\sin^3(\theta)}$$ $$\boxed{Y_C = \frac{R}{2}\cos(\theta)(2 - \cos(2\theta))}$$ Equivalent expressions: $$\begin{aligned}
Y_C &= \frac{R}{2}\cos(\theta)(2 - \cos(2\theta))\\
&= \frac{R}{4}(3\cos(\theta) - \cos(3\theta))\\
&= \frac{R}{4}(3\cos(\theta) - \cos^3(\theta) + 3\sin^2(\theta)\cos(\theta))
\end{aligned}$$

**T2-C4 [1.0 pts].** For $\theta \ll 1$, we use the approximations $$\begin{aligned}
\sin\theta &\approx \theta,\\
\cos\theta &\approx 1 - \frac{\theta^2}{2}.
\end{aligned}$$ Thus, near the cusp, the caustic is approximated as $$(X_C, Y_C) \approx \left(R\theta^3, \frac{R}{4}(2 + 3\theta^2)\right)$$ $$(X_C, Y_C) \approx \left(R\theta^3, \frac{R}{2} + \frac{3R}{4}\theta^2\right)$$ Solving for $\theta$, we get $$\theta = \left(\frac{X_C}{R}\right)^{\frac{1}{3}},$$ and substitute in $Y_C$ $$Y_C = \frac{R}{2} + \frac{3R}{4}\left(\frac{X_C}{R}\right)^{\frac{2}{3}}$$ Comparing with $$Y_C = v|X_C|^{p/q} + u,$$ we find $$\boxed{v = \frac{3}{4}R^{\frac{1}{3}}}$$ $$\boxed{u = \frac{R}{2},}$$ $$\boxed{p = 2}$$ $$\boxed{q = 3}$$ This shows that the shape of the cusp is universal and that its tip is located at $y = \frac{R}{2}$.

*Soluzione ufficiale (official solution), trascrizione LaTeX di olimpicos.net: [IPhO_2026_S2.pdf](https://olimpicos.net/files/ipho/IPhO_2026_S2.pdf).*

**Topic:** [[Geometric Optics]]
**Metodi:** [[Ray Tracing (metodo)|Ray Tracing]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Mirror (object)|Mirror]], [[Cylinder (object)|Cylinder]]
**Fonte:** [Testo (PDF) — p.7](https://assets.zyrosite.com/mk3Jq6ly29i40jE2/theoretical-exam-VD3AIsWsVvCnBRpu.pdf#page=7)


<div class="qlang-split" data-lang="it"></div>

**T2. Cucinare con la luce del Sole?**

La ridistribuzione del flusso luminoso in regioni di alta e bassa intensità dovuta a riflessione o rifrazione può portare alla formazione di *caustiche*: curve formate dall'intersezione di raggi luminosi infinitamente vicini. Ad esempio, la Figura 2a mostra la caustica formata da raggi parassiali incidenti su uno specchio semicilindrico. La Figura 2b mostra una fotografia della caustica formata dalla luce riflessa sul fondo di una tazzina da caffè. Il punto centrale e più luminoso della caustica si chiama *cuspide*: in quel punto l'intensità luminosa è massima.

![[IPhO_2026_Q2_fig1.png]]

*Fig. 2a.*

![[IPhO_2026_Q2_fig2.jpg]]

*Fig. 2b.*

Le caustiche hanno molte applicazioni scientifiche, dall'ottica di alta precisione e dall'ottica quantistica fino all'astrofisica. In questo quesito studierai la formazione della caustica per riflessione della luce su uno specchio semicilindrico di raggio $R$, come mostrato in figura 2c. Studierai anche altri aspetti di questo specchio, come il suo impiego nei *forni solari*.

In tutto il problema si assuma che i raggi incidenti provengano da una sorgente luminosa esterna lontana e siano paralleli all'asse ottico dello specchio. Per simmetria è sufficiente studiare la riflessione in un piano. La Figura 2d mostra tale piano, lo specchio e il sistema di coordinate usato in tutto il problema.

![[IPhO_2026_Q2_fig3.png]]

*Fig. 2c.*

![[IPhO_2026_Q2_fig4.png]]

*Fig. 2d.*

**T2-A [1.5 pt]. Riflessioni multiple**

![[IPhO_2026_Q2_fig5.png]]

*Fig. 2e.*

La Figura 2e mostra la relazione tra la coordinata $x$ di un raggio incidente e il numero $N$ di riflessioni che esso subisce, fino a $N = 3$. Al variare di $x$ nell'intervallo $(-R, R)$, la variabile $N$ assume tutti i numeri naturali maggiori o uguali a 1. La massima distanza dall'asse ottico che consente a un raggio incidente di essere riflesso dallo specchio al più $N$ volte è indicata con $x_N$.

**T2-A1 [1.5 pt].** Trova l'espressione generale di $x_N$ nella successione infinita $x_1, x_2, x_3, \ldots$ che delimita le coordinate dei raggi con al più $N$ riflessioni. Esprimi la risposta in funzione di $R$ e $N$.

**T2-B [4.0 pt]. Forno solare**

![[IPhO_2026_Q2_fig6.png]]

*Fig. 2f.*

Si consideri un sistema formato da uno specchio a semicilindro cavo e da un contenitore cilindrico. Il cilindro è completamente assorbente: ogni raggio di luce che lo colpisce viene assorbito. Il raggio dello specchio è $R$, quello del contenitore è $a$. Gli assi dello specchio e del contenitore sono paralleli. Il centro del contenitore si trova a distanza $R/2$ dallo specchio, sul piano di simmetria del sistema, come mostrato in figura 2f. Lo specchio sfrutta la radiazione solare per scaldare il cibo nel contenitore. Si assuma che la luce solare abbia intensità (potenza per unità di area) costante e uniforme, e che i raggi siano paralleli all'asse ottico dello specchio. Si assuma inoltre che $a$ sia tale che ogni raggio assorbito dal cilindro venga riflesso dallo specchio al più una volta. Sia $\theta_{\mathrm{max}}$ il massimo angolo di incidenza sullo specchio (misurato rispetto alla normale nel punto di incidenza) di un raggio riflesso che colpisce il contenitore.

**T2-B1 [2.0 pt].** Il raggio del contenitore è $a = \alpha\sin(\theta_{max}) + \beta\sin(2\theta_{max})$. Scrivi $\alpha$ e $\beta$ in funzione di $R$.

Se non trovi $\alpha$ e $\beta$, usa l'espressione data per il resto del problema.

**T2-B2 [1.5 pt].** Sia $P_0$ la potenza che il cilindro riceverebbe se lo specchio non ci fosse. Scrivi $P/P_0$, il rapporto tra la potenza effettivamente ricevuta $P$ e $P_0$, in funzione di $\theta_{\mathrm{max}}$.

**T2-B3 [0.5 pt].** Se $R = 1.0\,\mathrm{m}$, scrivi il valore di $a$ per cui $P = 5P_0$. Esprimi la risposta in cm.

**T2-C [4.5 pt]. Caustiche e cuspide**

**T2-C1 [0.5 pt].** Si consideri un raggio $A$ che colpisce lo specchio con un angolo $\theta$, come mostrato in Figura 2g. Dopo la riflessione, l'equazione di questo raggio nel sistema di coordinate definito in Figura 2g è $y = m_Ax + b_A$. Scrivi $m_A$ e $b_A$ in funzione di $\theta$ e $R$.

Suggerimento: la forma attesa è $m_A = K_1\cot(K_2\theta)$ e $b_A = R\frac{K_3}{\cos(K_4\theta)}$, con $K_i$ costanti numeriche.

![[IPhO_2026_Q2_fig7.png]]

*Fig. 2g.*

**T2-C2 [2.0 pt].** Si consideri ora un raggio $B$, parallelo ad $A$, che colpisce la superficie con un angolo $\theta + \Delta\theta$, con $\Delta\theta \ll \theta$. Dopo la riflessione, l'equazione di questo raggio è $y = m_Bx + b_B$. Scrivi $m_B$ e $b_B$ in funzione di $\theta$, $\Delta\theta$ e $R$, approssimando al primo ordine in $\Delta\theta$.

**T2-C3 [1.0 pt].** Trova le coordinate del punto di intersezione $(X_c, Y_c)$ tra i raggi riflessi di $A$ e $B$. Esprimi la risposta in funzione di $R$ e $\theta$.

**T2-C4 [1.0 pt].** Per $\theta \ll 1$ si ha $Y_c = v|X_c|^{p/q}+u$. Scrivi $v$ e $u$ in funzione di $R$ e trova i valori degli interi $p$ e $q$ (o, equivalentemente, il numero razionale $p/q$).

**Soluzione:** La soluzione ufficiale completa (in inglese) è nella versione originale di questo quesito e nel PDF ufficiale.

**Topic:** [[Geometric Optics]]
**Metodi:** [[Ray Tracing (metodo)|Ray Tracing]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Mirror (object)|Mirror]], [[Cylinder (object)|Cylinder]]
**Fonte:** [Testo (PDF) — p.7](https://assets.zyrosite.com/mk3Jq6ly29i40jE2/theoretical-exam-VD3AIsWsVvCnBRpu.pdf#page=7)



<span class="atom-split" id="q03" data-atom="q03" data-title="IPhO 2026 — Teorica — Problema 3" data-tags="kg/prova,paese/International,comp/IPhO,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/multi,topic/thermodynamics,topic/magnetism,argomento/termodinamica,object/coil"></span>

<div class="qlang-switch" data-default="en"></div>



**T3. Chasing the absolute zero**

A refrigeration cycle must be carried out by a system with characteristics appropriate for the temperatures to be achieved. One hundred years ago, in 1926, the chemist William Giauque and, independently, the physicist Peter Debye proposed paramagnetic salts as ideal systems for lowering temperatures far below $1\,\mathrm{K}$. Indeed, beginning in the following decade, temperatures as low as $0.0044\,\mathrm{K}$ were achieved (Wander de Haas and Gerrit Wiersma, 1935, Leiden Cryogenic Laboratories). In this question, the paramagnetic Carnot refrigeration cycle is studied.

![[IPhO_2026_Q3_fig1.png]]

*Fig. 3a.*

Consider a torus with mean radius $R$ and inner radius $r$ made of a homogeneous, isotropic paramagnetic material, around which an insulated conducting wire is wound, with its ends connected to an external voltage source (emf), as shown in figure 3a. The resistance of the wire is so low that energy losses due to the heating of the wire can be neglected. The winding is dense, with $N$ turns in total, and it is assumed that $r \ll R$, so that the fields $\vec{H}$ and $\vec{B}$ and the magnetization $\vec{M}$ have approximately constant magnitudes throughout the torus. Let $V$ and $A$ be the volume and the cross-section area of the torus. Hereinafter, the abbreviation Pm-T is used to refer to the paramagnetic torus.

In paramagnetic materials, $\vec{M}$ is parallel to $\vec{H}$ and the following relation holds: $$\overrightarrow{B} = \mu_0\overrightarrow{H} + \mu_0\overrightarrow{M}.$$

**Energy transfer sign convention:** in this problem, Work ($W$) and Heat ($Q$) are considered positive when they flow into the system, and negative when they flow out.

**T3-A [1.0 pts]. Work in the Pm-T**

*Hint: in magnetic materials, $\oint_C \vec{H}\cdot d\vec{\ell} = I_C$, where $I_C$ is the net free current passing through the area bounded by the closed curve $C$.*

**T3-A1 [0.2 pts].** Let $H$ be the magnitude of $\vec{H}$ in the torus. Write $H$ in terms of $N$, $A$, $V$ and the instantaneous electric current $I$ in the wire.

**T3-A2 [0.6 pts].** Let $dW_{emf}$ be the work that the external voltage source performs to change the magnitude of $\vec{B}$ by $dB$. Write $dW_{emf}$ in terms of $V$, $H$, and $dB$.

**T3-A3 [0.2 pts]**. The total work done by the voltage source, $dW_{emf}$, can be divided in two parts: the work that would be performed to change the magnetic field if the toroid had a vacuum core, $dW_{vac}$, and the work done on the paramagnetic material itself, $dW$. Write $dW$ in terms of $\mu_0$, $H$, $V$ and $dM$.

**T3-B [3.0 pts]. Heat and temperature in the Pm-T**

The following table compares two thermodynamic systems: the ideal gas and the Pm-T. Use this information and your answer to question T3-A3 to solve the following questions. This information will also be used in part C. If you did not find an answer for $dW$ in question T3-A3, you may use $dW = \alpha V\mu_0 HdM$ where $\alpha$ is a number. The volume $V$ of the paramagnetic torus is constant, so that there is no work due to pressure. Below, $T$ is the temperature in all instances.

| **IDEAL GAS** | **PARAMAGNETIC TORUS** |
|:---:|:---:|
| State functions: $P, V$ and temperature $T$ | State functions: $H, M$ and temperature $T$ |
| Constants: $R, \gamma$ and number of moles $n$ | Constants: $K, \lambda$ and number of moles $n$ |
| Equation of state: $PV = nRT$ | Equation of state: $TMV = nKH$ |
| Heat capacity at constant $V$: $C_V = nR/(\gamma - 1)$ | Heat capacity at constant $M$: $C_M = n\lambda/T^2$ |
| Internal energy $U$ in any process satisfies $dU = C_VdT$ | Internal energy $U$ in any process satisfies $dU = C_MdT$ |

$K$ and $\lambda$ are constants given by the material in the torus. You may use the equations provided in the table directly without proving them.

**T3-B1 [1.5 pts].** If the magnitude of $\vec{H}$ changes from $H_i$ to $H_f$ at a constant temperature $T$, an energy $Q$ is transferred between the Pm-T and its environment. Write $Q$ in terms of $\mu_0$, $n$, $V$, $K$, $H_i$, $H_f$, and $T$.

**T3-B2 [1.5 pts].** If the magnitude of $\vec{H}$ changes adiabatically from $H_i$ to $H_f$, the temperature of the Pm-T changes from $T_i$ to $T_f$. Write $\Delta T = T_f - T_i$ in terms of $\mu_0$, $V$, $n$, $K$, $\lambda$, $H_i$, $H_f$, and $T_i$.

**T3-C [6.0 pts]. Carnot refrigerator of the Pm-T**

![[IPhO_2026_Q3_fig2.png]]

*Fig. 3b.*

The $H$ vs. $T$ diagram of the Carnot refrigeration cycle $1 \rightarrow 2 \rightarrow 3 \rightarrow 4 \rightarrow 1$ performed by the Pm-T is shown in figure 3b. In this cycle, let:

$T_h$: temperature of the hot reservoir\
$T_c$: temperature of the cold reservoir\
$Q_h$: absolute value of the heat transferred to the hot reservoir\
$Q_c$: absolute value of the heat absorbed from the cold reservoir

**T3-C1 [0.2 pts].** Mark $T_h$ and $T_c$ on the $T$ axis of the $H$ vs. $T$ diagram. Also label the processes in which the transfers of $Q_h$ and $Q_c$ occur, respectively.

**T3-C2 [1.5 pts].** Let $M_1$, $M_2$, $M_3$, and $M_4$ be the magnitudes of $\vec{M}$ at the vertices of this cycle. Write $M_1$ in terms of $M_2$, $M_3$, and $M_4$.

**T3-C3 [0.8 pts].** Suppose that to cool $1.00\,\mathrm{L}$ of liquid helium initially at $1.00\,\mathrm{K}$, we utilize a 2.0 moles Pm-T made of *potassium chromate*. For this material, $K = 1.87 \times 10^{-6}\,\mathrm{K{\cdot}m^3/mol}$, its density is $2730\,\mathrm{kg/m^3}$ and its molar mass is $0.19\,\mathrm{kg/mol}$. The Pm-T performs a Carnot refrigeration cycle with $H_1 = 411624\,\mathrm{A/m}$, $H_2 = 311306\,\mathrm{A/m}$, $H_3 = 204618\,\mathrm{A/m}$ and $H_4 = 240446\,\mathrm{A/m}$. After one operating cycle, calculate the final temperature of the liquid helium. Assume that for the liquid helium both the specific heat capacity $c = 100\,\mathrm{J/(kg{\cdot}K)}$ and the density $\rho = 130\,\mathrm{kg/m^3}$ remain constant.

**T3-C4 [2.0 pts].** In order to continuously lower the temperature of a body with constant heat capacity $C_c$, Carnot cycles are allowed to occur over time in such a way that the power $P$ transferred to the refrigerator remains constant. It is then assumed that the temperature $T_h$ of the hot reservoir remains constant and that in each operating cycle the temperature $T_c$ of the cooled body decreases by $dT_c$, satisfying the relation $dQ_c/dQ_h = T_c/T_h$. If at $t = 0$ we have $T_c = T_0$, determine the time $t$ that the Carnot refrigerator must operate for the cooled body to reach a temperature $T < T_0$. Express your answer in terms of $C_c$, $T_h, P, T_0$ and $T$.

**T3-C5 [1.5 pts].** The efficiency of a refrigerator is quantified by its *coefficient of performance* $\mathrm{COP} = Q_c/W$. Determine the overall COP of the refrigerator of question T3-C4 with all the cycles performed until time $t$. Write your answer in terms of $T_0$ and $T_h$ and $T$.

**Soluzione:**

**T3-A [1.0 points]**\
**T1-A1 [0.2 pts].** Field $\vec{H}$ inside the torus is almost entirely confined to its core, forming concentric circumferential circles. Therefore, from magnetic circuital law $\oint_C \vec{H} \cdot d\vec{\ell} = I_C$ we have $H \cdot 2\pi R = NI$. Dividing and multiplying by $A = \pi r^2$ yields to $$H = \frac{NI}{2\pi R}\frac{A}{\pi r^2} = \frac{NIA}{V}.$$ **T3-A2 [0.6 pts].** When $I$ is changed, there is induced an *emf* $\mathcal{E}_{\scriptscriptstyle\mathrm{ind}}$. Thus, since $$\mathcal{E} + \mathcal{E}_{\scriptscriptstyle\mathrm{ind}} = \text{resistance} \times I \approx 0,$$ from Faraday's law of induction, the work done by the external *emf* is given by $$dW_{\scriptscriptstyle emf} = \mathcal{E}dq = -\mathcal{E}_{\scriptscriptstyle\mathrm{ind}}Idt = \frac{d\Phi_B}{dt}Idt = Id\Phi_B,$$ where $dq$ is the quantity of electric charge flowing during the time interval $dt$ and $\Phi_B = NAB$ is the flux of the field $\vec{B}$ inside the torus. Therefore, $$dW_{\scriptscriptstyle emf} = NIA\ dB = VH\ dB.$$ **T3-A3 [0.2 pts].** Since $\vec{B}$, $\vec{H}$ and $\vec{M}$ are paralell vectors, from $\vec{B} = \mu_0\vec{H} + \mu_0\vec{M}$ we get $$dB = \mu_0 dH + \mu_0 dM,$$ from which, after substitution in the answer of question T3-A2, yields to $$dW_{\scriptscriptstyle emf} = \mu_0 VHdH + \mu_0 VHdM.$$ Hence, $$dW = \mu_0 VHdM.$$

**T3-B [3.0 pts]**\
**T3-B1 [1.5 pts].** The first law of thermodynamics for the torus is $dU = dW + dQ = \mu_0 VHdM + CdT$. At constant $M$, we have $dU = C_M dT = n\lambda dT/T^2$, i. e., $U$ depends only on $T$. Hence, for isothermal processes, $dQ = -dW = -\mu_0 VHdM$. Furthermore, from the equation of state we have for isothermal processes that $TVdM = nKdH$ and then $$dQ = -\mu_0 VH\left(\frac{nK}{TV}dH\right) = -\mu_0\frac{nK}{T}HdH.$$ Integration from $H_i$ to $H_f$ gives $$Q = -\mu_0\frac{nK}{T}\frac{H_f^2 - H_i^2}{2}.$$ **Note**: This is proportional to the volume because it has the number of moles.\
**T3-B2 [1.5 pts].** For adiabatic processes, the first law yields to $dU = dW$ and then $$\frac{n\lambda}{T^2}dT = \mu_0 VHdM = \mu_0 V\frac{TMV}{nK}dM,$$ where we have used the equation of state to substitute $H$. Separating variables we have $$\frac{n\lambda}{T^3}dT = \mu_0\frac{V^2}{nK}MdM,$$ and hence, after integration from $(T_i, M_i)$ to $(T_f, M_f)$, $$\frac{n\lambda}{2}\left(\frac{1}{T_i^2} - \frac{1}{T_f^2}\right) = \mu_0\frac{V^2}{nK}\frac{M_f^2 - M_i^2}{2}.$$ Since $M = nKH/TV$, this equation simplifies to $$\frac{\lambda}{T_i^2} - \frac{\lambda}{T_f^2} = \mu_0 K\left(\frac{H_f^2}{T_f^2} - \frac{H_i^2}{T_i^2}\right),$$ from which $$\frac{T_f^2}{T_i^2} = \frac{\lambda + \mu_0 KH_f^2}{\lambda + \mu_0 KH_i^2}.$$ Hence $$\Delta T = T_f - T_i = T_i\left(\sqrt{\frac{\lambda + \mu_0 KH_f^2}{\lambda + \mu_0 KH_i^2}} - 1\right).$$

**T3-C [6.0 pts]**\
**T3-C1 [0.2 pts].**

![[IPhO_2026_S3_fig1.png]]

**T3-C2 [1.5 pts].** In the Carnot cycle $$\frac{Q_c}{Q_h} = \frac{T_c}{T_h}.$$ Particularly, for the Carnot cycle of paramagnetic refrigeration, we have $Q_c = |Q_{2\to 3}| = Q_{2\to 3}$ and $Q_h = |Q_{4\to 1}| = -Q_{4\to 1}$. From the answer to question T3-B1, $$\begin{aligned}
Q_c &= -\,\mu_0\frac{nK}{T_c}\frac{H_3^2 - H_2^2}{2} = \mu_0\frac{nK}{T_c}\frac{H_2^2 - H_3^2}{2},\\
Q_h &= -\left(-\mu_0\frac{nK}{T_h}\frac{H_1^2 - H_4^2}{2}\right) = \mu_0\frac{nK}{T_h}\frac{H_1^2 - H_4^2}{2},
\end{aligned}$$ where $T_c = T_2 = T_3$ and $T_h = T_4 = T_1$ are the respective temperatures of the isothermal processes $2 \to 3$ and $4 \to 1$. Therefore, after substitution and simplification in the Carnot identity, we have $$\frac{T_h}{T_c}\frac{H_2^2 - H_3^2}{H_1^2 - H_4^2} = \frac{T_c}{T_h},\ \frac{H_2^2 - H_3^2}{T_c^2} = \frac{H_1^2 - H_4^2}{T_h^2}.$$ Since, by the equation of state, $M = nKH/TV$, we get $$M_2^2 - M_3^2 = M_1^2 - M_4^2,\ M_1 = \sqrt{M_2^2 - M_3^2 + M_4^2}.$$ **T3-C3 [0.8 pts].** By substituting the given numerical values $$Q_c = \mu_0\frac{nK}{T_c}\frac{H_2^2 - H_3^2}{2} = 1.29 \times 10^{-1}\,\mathrm{J}.$$ Hence $$\begin{aligned}
|\Delta T|_{\mathbf{helium}} &= \frac{1.29 \times 10^{-1}\,\mathrm{J}}{130\,\mathrm{kg \cdot m^{-3}} \times 10^{-3}\,\mathrm{m^3} \times 10^2\,\mathrm{J \cdot kg^{-1} \cdot K^{-1}}}\\
&= \frac{1.29}{1.30} \times 10^{-2}\,\mathrm{K} = 9.92 \times 10^{-3}\,\mathrm{K}.
\end{aligned}$$ Hence $$T_f = T_i - |\Delta T| = 1.00\,\mathrm{K} - 0.00992\,\mathrm{K} = 0.99008\,\mathrm{K}.$$ **T3-C4 [2.0 pts].** From the Carnot cycle identity $dQ_c/dQ_h = T_c/T_h$ and the first law in differential form $dQ_h = dW + dQ_c$, we have $$\frac{dW + dQ_c}{dQ_c} = \frac{dW}{dQ_c} + 1 = -\frac{Pdt}{C_c dT_c} + 1 = \frac{T_h}{T_c},$$ where $dW = Pdt$ and $dQ_c = -C_c dT_c$ have been used. Hence, after separation of variables, $$dt = -\frac{C_c T_h}{P}\left(\frac{dT_c}{T_c} - \frac{dT_c}{T_h}\right).$$ Integrating from $t = 0$ ($T_c = T_0$) to $t$ ($T_c = T$) we get $$t = \frac{C_c T_h}{P}\left(\ln\frac{T_0}{T} - \frac{T_0 - T}{T_h}\right).$$ **T3-C5 [1.5 pts].** Since $W = Pt$ and $Q_c = C_c(T_0 - T)$, $$W = Pt = C_c T_h\ln\frac{T_0}{T} - Q_c.$$ Therefore $$\mathrm{COP} = \frac{Q_c}{W} = \left(\frac{T_h}{T_0 - T}\ln\frac{T_0}{T} - 1\right)^{-1}.$$

*Soluzione ufficiale (official solution), trascrizione LaTeX di olimpicos.net: [IPhO_2026_S3.pdf](https://olimpicos.net/files/ipho/IPhO_2026_S3.pdf).*

**Topic:** [[Thermodynamics]], [[Magnetism]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]], [[Ampère's Law (metodo)|Ampère's Law]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Coil (object)|Coil]]
**Fonte:** [Testo (PDF) — p.11](https://assets.zyrosite.com/mk3Jq6ly29i40jE2/theoretical-exam-VD3AIsWsVvCnBRpu.pdf#page=11)


<div class="qlang-split" data-lang="it"></div>

**T3. A caccia dello zero assoluto**

Un ciclo frigorifero deve essere realizzato con un sistema le cui caratteristiche siano adatte alle temperature da raggiungere. Cento anni fa, nel 1926, il chimico William Giauque e, indipendentemente, il fisico Peter Debye proposero i sali paramagnetici come sistemi ideali per scendere a temperature molto inferiori a $1\,\mathrm{K}$. Infatti, a partire dal decennio successivo, si raggiunsero temperature fino a $0.0044\,\mathrm{K}$ (Wander de Haas e Gerrit Wiersma, 1935, Laboratori criogenici di Leida). In questo quesito si studia il ciclo frigorifero di Carnot paramagnetico.

![[IPhO_2026_Q3_fig1.png]]

*Fig. 3a.*

Si consideri un toro di raggio medio $R$ e raggio interno $r$, fatto di un materiale paramagnetico omogeneo e isotropo, attorno al quale è avvolto un filo conduttore isolato, i cui estremi sono collegati a un generatore di tensione esterno (fem), come mostrato in figura 3a. La resistenza del filo è così bassa che le perdite di energia per riscaldamento del filo sono trascurabili. L'avvolgimento è fitto, con $N$ spire in totale, e si assume $r \ll R$, in modo che i campi $\vec{H}$ e $\vec{B}$ e la magnetizzazione $\vec{M}$ abbiano modulo approssimativamente costante in tutto il toro. Siano $V$ e $A$ il volume e l'area della sezione del toro. Nel seguito si usa la sigla Pm-T per indicare il toro paramagnetico.

Nei materiali paramagnetici $\vec{M}$ è parallelo a $\vec{H}$ e vale la relazione $$\overrightarrow{B} = \mu_0\overrightarrow{H} + \mu_0\overrightarrow{M}.$$

**Convenzione sui segni degli scambi di energia:** in questo problema lavoro ($W$) e calore ($Q$) sono positivi quando entrano nel sistema e negativi quando ne escono.

**T3-A [1.0 pt]. Lavoro nel Pm-T**

*Suggerimento: nei materiali magnetici $\oint_C \vec{H}\cdot d\vec{\ell} = I_C$, dove $I_C$ è la corrente libera netta che attraversa la superficie delimitata dalla curva chiusa $C$.*

**T3-A1 [0.2 pt].** Sia $H$ il modulo di $\vec{H}$ nel toro. Scrivi $H$ in funzione di $N$, $A$, $V$ e della corrente istantanea $I$ nel filo.

**T3-A2 [0.6 pt].** Sia $dW_{emf}$ il lavoro compiuto dal generatore esterno per variare il modulo di $\vec{B}$ di $dB$. Scrivi $dW_{emf}$ in funzione di $V$, $H$ e $dB$.

**T3-A3 [0.2 pt].** Il lavoro totale compiuto dal generatore, $dW_{emf}$, si può dividere in due parti: il lavoro necessario per variare il campo magnetico se il toro avesse il nucleo vuoto, $dW_{vac}$, e il lavoro compiuto sul materiale paramagnetico stesso, $dW$. Scrivi $dW$ in funzione di $\mu_0$, $H$, $V$ e $dM$.

**T3-B [3.0 pt]. Calore e temperatura nel Pm-T**

La tabella seguente confronta due sistemi termodinamici: il gas ideale e il Pm-T. Usa queste informazioni e la risposta alla domanda T3-A3 per rispondere alle domande seguenti; esse serviranno anche nella parte C. Se non hai trovato $dW$ nella domanda T3-A3, puoi usare $dW = \alpha V\mu_0 HdM$, dove $\alpha$ è un numero. Il volume $V$ del toro paramagnetico è costante, quindi non c'è lavoro dovuto alla pressione. Qui sotto $T$ indica sempre la temperatura.

| **GAS IDEALE** | **TORO PARAMAGNETICO** |
|:---:|:---:|
| Funzioni di stato: $P, V$ e temperatura $T$ | Funzioni di stato: $H, M$ e temperatura $T$ |
| Costanti: $R, \gamma$ e numero di moli $n$ | Costanti: $K, \lambda$ e numero di moli $n$ |
| Equazione di stato: $PV = nRT$ | Equazione di stato: $TMV = nKH$ |
| Capacità termica a $V$ costante: $C_V = nR/(\gamma - 1)$ | Capacità termica a $M$ costante: $C_M = n\lambda/T^2$ |
| In ogni processo l'energia interna $U$ soddisfa $dU = C_VdT$ | In ogni processo l'energia interna $U$ soddisfa $dU = C_MdT$ |

$K$ e $\lambda$ sono costanti che dipendono dal materiale del toro. Puoi usare direttamente le equazioni della tabella senza dimostrarle.

**T3-B1 [1.5 pt].** Se il modulo di $\vec{H}$ varia da $H_i$ a $H_f$ a temperatura costante $T$, tra il Pm-T e l'ambiente viene scambiata un'energia $Q$. Scrivi $Q$ in funzione di $\mu_0$, $n$, $V$, $K$, $H_i$, $H_f$ e $T$.

**T3-B2 [1.5 pt].** Se il modulo di $\vec{H}$ varia adiabaticamente da $H_i$ a $H_f$, la temperatura del Pm-T passa da $T_i$ a $T_f$. Scrivi $\Delta T = T_f - T_i$ in funzione di $\mu_0$, $V$, $n$, $K$, $\lambda$, $H_i$, $H_f$ e $T_i$.

**T3-C [6.0 pt]. Frigorifero di Carnot con il Pm-T**

![[IPhO_2026_Q3_fig2.png]]

*Fig. 3b.*

La Figura 3b mostra il diagramma $H$–$T$ del ciclo frigorifero di Carnot $1 \rightarrow 2 \rightarrow 3 \rightarrow 4 \rightarrow 1$ compiuto dal Pm-T. In questo ciclo siano:

$T_h$: temperatura della sorgente calda\
$T_c$: temperatura della sorgente fredda\
$Q_h$: valore assoluto del calore ceduto alla sorgente calda\
$Q_c$: valore assoluto del calore sottratto alla sorgente fredda

**T3-C1 [0.2 pt].** Segna $T_h$ e $T_c$ sull'asse $T$ del diagramma $H$–$T$. Indica anche le trasformazioni in cui avvengono, rispettivamente, gli scambi $Q_h$ e $Q_c$.

**T3-C2 [1.5 pt].** Siano $M_1$, $M_2$, $M_3$ e $M_4$ i moduli di $\vec{M}$ nei vertici del ciclo. Scrivi $M_1$ in funzione di $M_2$, $M_3$ e $M_4$.

**T3-C3 [0.8 pt].** Si supponga di voler raffreddare $1.00\,\mathrm{L}$ di elio liquido, inizialmente a $1.00\,\mathrm{K}$, usando un Pm-T di 2.0 moli di *cromato di potassio*. Per questo materiale $K = 1.87 \times 10^{-6}\,\mathrm{K{\cdot}m^3/mol}$, la densità è $2730\,\mathrm{kg/m^3}$ e la massa molare è $0.19\,\mathrm{kg/mol}$. Il Pm-T compie un ciclo frigorifero di Carnot con $H_1 = 411624\,\mathrm{A/m}$, $H_2 = 311306\,\mathrm{A/m}$, $H_3 = 204618\,\mathrm{A/m}$ e $H_4 = 240446\,\mathrm{A/m}$. Dopo un ciclo di funzionamento, calcola la temperatura finale dell'elio liquido. Si assuma che per l'elio liquido il calore specifico $c = 100\,\mathrm{J/(kg{\cdot}K)}$ e la densità $\rho = 130\,\mathrm{kg/m^3}$ restino costanti.

**T3-C4 [2.0 pt].** Per abbassare con continuità la temperatura di un corpo di capacità termica costante $C_c$, si fanno avvenire nel tempo cicli di Carnot in modo che la potenza $P$ fornita al frigorifero resti costante. Si assume che la temperatura $T_h$ della sorgente calda resti costante e che in ogni ciclo la temperatura $T_c$ del corpo raffreddato diminuisca di $dT_c$, con $dQ_c/dQ_h = T_c/T_h$. Se a $t = 0$ si ha $T_c = T_0$, determina il tempo $t$ per cui il frigorifero di Carnot deve funzionare perché il corpo raggiunga una temperatura $T < T_0$. Esprimi la risposta in funzione di $C_c$, $T_h$, $P$, $T_0$ e $T$.

**T3-C5 [1.5 pt].** L'efficienza di un frigorifero si misura con il suo *coefficiente di prestazione* $\mathrm{COP} = Q_c/W$. Determina il COP complessivo del frigorifero della domanda T3-C4, considerando tutti i cicli compiuti fino al tempo $t$. Esprimi la risposta in funzione di $T_0$, $T_h$ e $T$.

**Soluzione:** La soluzione ufficiale completa (in inglese) è nella versione originale di questo quesito e nel PDF ufficiale.

**Topic:** [[Thermodynamics]], [[Magnetism]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]], [[Ampère's Law (metodo)|Ampère's Law]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Coil (object)|Coil]]
**Fonte:** [Testo (PDF) — p.11](https://assets.zyrosite.com/mk3Jq6ly29i40jE2/theoretical-exam-VD3AIsWsVvCnBRpu.pdf#page=11)
