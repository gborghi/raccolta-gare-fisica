---
tipo: prova
prova_id: prova_2022_USAPhO
competition: USA Physics Olympiad
comp_code: USAPhO
country: USA
year: '2022'
level: ''
pdf: gare di altri paesi/USA/all/2022/2022_USAPhO.pdf
cluster: Meccanica
n_problemi: '6'
tags:
  - kg/prova
  - anno/2022
  - paese/USA
  - comp/USAPhO
  - cluster/Meccanica
---

# USAPhO 2022 — 2022_USAPhO.pdf

**Fonte:** `gare di altri paesi/USA/all/2022/2022_USAPhO.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]
**Soluzioni (stessa cartella):**  ·  ·  · 
## Problema 1

## Problem A1 — Moment of Clarity

When you hold a pencil horizontally by its tip, you must exert two types of forces: a net upward force to support the pencil's weight, and a pair of opposite forces that twist the pencil to keep it level. This second type of force is called the **bending moment**.

More precisely, consider a horizontal rod. Imagine making a cut somewhere in the middle of the rod, and think of the bending moment at that point as the torque that the left half of the rod exerts on the right half (or equivalently, the torque the right half exerts on the left half), measured about the cut point.

**(a)** Consider a rod of length $\ell$ and uniform mass per unit length $\lambda$, held horizontal. What is the magnitude of the bending moment $M$ you must exert at the end of the rod to hold it horizontally (i.e., the bending moment at the supported end)?

**(b)** Now suppose the same rod is supported at both ends, forming a bridge. The supports are simple (they only exert upward forces, no bending moment). The rod has uniform mass per unit length $\lambda$, length $\ell$, and can sustain a maximum bending moment of magnitude $M_0$ at any point before breaking. Find the maximum value of $\lambda$ for which the bridge does not collapse.

**(c)** Now suppose one support is at the left end ($x = 0$) and the other is located a distance $d$ from the right end (i.e., at position $x = \ell - d$), so the right end overhangs by a distance $d$. The rod again has uniform mass per unit length $\lambda$ and maximum tolerable bending moment $M_0$. Find the value of $d$ (in terms of $\ell$) that maximizes the load $\lambda$ the bridge can carry without collapsing, and find the corresponding maximum $\lambda$.

**Topic:** [[Rigid Body Statics]], [[Newtonian Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Problema 2

## Problem A2 — Droplet Fission

A droplet of liquid metal has constant mass density $\rho$ and constant surface tension $\sigma$ (energy per unit area), which causes it to form into a sphere of radius $R$. A thin wire is inserted into the droplet and connected to an electric current source, which slowly charges the droplet.

There is a critical value of the charge, $Q_0$, that causes the droplet to split in half. Each half takes half the total charge ($Q_0/2$) and half the mass of the original droplet. The "ejected half" is repelled far away from the other half, which remains in contact with the wire.

**(a)** For simplicity, assume the droplet splits as soon as the final state (after the droplet has split in half and the two halves are well separated) has a lower total energy than the initial single droplet. Find the critical charge $Q_0$. Express your answer in terms of $\sigma$, $R$, and $\varepsilon_0$.

*Hint: when the droplet splits, each new half has radius $R_1 = R/2^{1/3}$ (since total volume is conserved).*

**(b)** As more charge is added to the droplet by the current source, the remaining droplet continues to split in half repeatedly. What is the charge $q_n$ on the $n$-th ejected droplet (in terms of $Q_0$ and $n$)?

**(c)** In the limit where all of the initial mass of the droplet has been ejected (infinitely many splittings), what is the total work $W$ done by the current source? Give your answer in the form $W = B\, \sigma^\alpha R^\beta \varepsilon_0^\gamma$, specify the exponents, and give the numerical value of $B$ to three significant figures.

**Topic:** [[Electrostatics]], [[Fluid Mechanics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation Laws (metodo)|Conservation Laws]], [[Coulomb's Law (metodo)|Coulomb's Law]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.3

## Problema 3

## Problem A3 — Rainbow Road

A **caustic** is a bright curve of light that appears when many incoming light rays converge to nearly the same outgoing direction. The most famous example is the rainbow, which occurs when sunlight interacts with spherical water droplets.

Consider a spherical liquid droplet of radius $r$ with index of refraction $n$ ($1 < n < 2$), suspended in air. A light ray enters the droplet with impact parameter $b$ (perpendicular distance from the centre of the droplet to the incoming ray). The ray refracts upon entry, reflects once off the inside surface, then refracts again upon exit. All answers should be expressed in terms of the dimensionless impact parameter $x = b/r\in[0,1]$.

**(a)** Find the angle $\theta_r$ by which the ray is deflected at the first refraction (i.e., the change in direction upon entering the droplet), in terms of $x$ and $n$.

**(b)** Find the total deflection angle $\Phi(x, n)$ of the light ray (measured from its original direction of travel) after undergoing one internal reflection and two refractions.

**(c)** The rainbow angle $\phi_0$ corresponds to the minimum total deflection angle (i.e., the value of $\Phi$ at the stationary point $d\Phi/dx = 0$). Find $\phi_0$ in terms of $n$.

**(d)** For water, the index of refraction for red light is $n_{\text{red}} = 1.331$ and for violet light is $n_{\text{violet}} = 1.343$. Calculate the angular width of the rainbow (difference in rainbow angles for red and violet light) in degrees.

**Topic:** [[Geometric Optics]], [[Wave Optics]]
**Metodi:** [[Snell's Law (metodo)|Snell's Law]], [[Ray Tracing (metodo)|Ray Tracing]], [[Small-Angle Approximation (metodo)|Small-Angle Approximation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.5

## Problema 4

## Problem B1 — Virial Reality

The ideal gas law states that $PV_m = RT$, where $V_m = V/n$ is the molar volume of the gas. Real gases exhibit deviations from ideal behaviour, described by the **virial expansion**:

$$PV_m = RT\left[1 + \frac{B(T)}{V_m} + \frac{C(T)}{V_m^2} + \cdots\right]$$

where $B(T)$, $C(T)$, … are the second, third, … virial coefficients. In this problem, keep only the $B(T)/V_m$ correction and neglect all higher-order terms.

The table below gives measured values of the second virial coefficient $B$ for nitrogen gas (N$_2$) at atmospheric pressure $P = 1.01\times10^5\,\text{Pa}$:

| $T$ (K) | $B$ (cm$^3$/mol) |
|---------|------------------|
| 100 | $-160$ |
| 200 | $-35$ |
| 300 | $-4.2$ |
| 400 | $+9.0$ |
| 500 | $+16.9$ |
| 600 | $+21.3$ |

**(a)** Using the ideal gas law, calculate the molar volume $V_m$ at $T = 100\,\text{K}$, $T = 300\,\text{K}$, and $T = 600\,\text{K}$. Give your answers in SI units.

**(b)** The van der Waals equation of state implies that $B(T) \approx b - a/(RT)$, where $a$ and $b$ are the van der Waals constants. Describe how to linearise the data to obtain $a$ and $b$ from a graph, and sketch the expected form of the graph.

**(c)** Using the data in the table, determine the van der Waals constants $a$ and $b$ for nitrogen by applying the linearisation from part (b). (A precise graphical analysis or linear regression is expected.)

**(d)** Using the van der Waals constants found in part (c), estimate the temperature range within which the volume correction due to $B(T)/V_m$ is at most 10% at atmospheric pressure.

**(e)** Comment briefly on whether the van der Waals approximation is consistent with the data over the entire temperature range given.

**Topic:** [[Thermodynamics]], [[Kinetic Theory]]
**Metodi:** [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.6

## Problema 5

## Problem B2 — Broken Vase

A uniformly charged ring of radius $d$ with total charge $Q$ is fixed in place. A point charge $-q$ of mass $m$ is placed at the centre of the ring. Both $Q$ and $q$ are positive.

**(a)** If the point charge is given a small velocity along the ring's axis of symmetry, it will undergo simple harmonic oscillation about the centre. Find the period $T$ of these oscillations in terms of $Q$, $q$, $m$, $d$, and $\varepsilon_0$.

**(b)** Now consider the system from a reference frame moving with a small velocity $v$ along the axis of symmetry of the ring (i.e., the ring and charge move together with velocity $v$ in the lab frame, with the charge additionally oscillating about the ring's centre). In this frame, the charges $Q$ and $q$ appear as currents. By computing the effective currents and using the resulting magnetic force, find the restoring force on the oscillating charge in this moving frame. Express your answer in terms of $q'$, $Q'$, $v$, $d$, $\Delta x$ (small displacement from centre along the axis), and fundamental constants, where $q'$ and $Q'$ are the charges as measured in the moving frame.

**(c)** Using the result of parts (a) and (b), show that the period of oscillation measured in the moving frame is consistent with the time-dilation formula from special relativity: $T' = \gamma T$, where $\gamma = (1-v^2/c^2)^{-1/2}$. This is a demonstration that electrostatics plus special relativity implies time dilation.

**Topic:** [[Electrostatics]], [[Special Relativity]]
**Metodi:** [[Lorentz Transformation (metodo)|Lorentz Transformation]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.7

## Problema 6

## Problem B3 — Time Crystal

For a free particle, the momentum $p$ and energy $E$ are related by $E = p^2/(2m)$. However, when an electron moves inside a metal, its interactions with the crystal lattice lead to a different dispersion relation. In a simplified one-dimensional model, the energy–momentum relation becomes:

$$E(p) = V\left(1 - \cos\!\left(\frac{pb}{\hbar}\right)\right)$$

where $V$ and $b$ are constants that depend on the metal, and $\hbar$ is the reduced Planck constant.

**(a)** Find the velocity $v$ of the electron as a function of its momentum $p$.

**(b)** Define the **effective mass** $m^*$ of the electron by $F = m^* a$, where $F$ is an applied force and $a$ is the resulting acceleration (both along the one-dimensional direction of motion). Find $m^*$ as a function of $p$.

**(c)** A uniform electric field $E_0$ is applied along the rod (so the force on the electron is $F = eE_0$). The electron suffers collisions with the crystal lattice every time interval $\tau$, which resets its momentum to $p = 0$ instantaneously. Assuming the electron starts from rest after each collision and $eE_0 b\tau/\hbar \ll 1$, find the average current density (current per unit cross-sectional area per electron) $\langle J \rangle$ in the limit of frequent collisions.

**(d)** If $\tau$ can be freely adjusted, find the value of $\tau$ (in terms of the given constants) that maximises the average current $\langle J \rangle$, and find the corresponding maximum current.

**Topic:** [[Modern-Quantum Physics]], [[Electromagnetism]]
**Metodi:** [[de Broglie Relation (metodo)|de Broglie Relation]], [[Differential Equations (metodo)|Differential Equations]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.9
