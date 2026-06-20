---
tipo: prova
prova_id: prova_2020_USAPhO
competition: USA Physics Olympiad
comp_code: USAPhO
country: USA
year: '2020'
level: ''
pdf: gare di altri paesi/USA/all/2020/2020_USAPhO.pdf
cluster: Meccanica
n_problemi: '6'
tags:
  - kg/prova
  - anno/2020
  - paese/USA
  - comp/USAPhO
  - cluster/Meccanica
---

# USAPhO 2020 — 2020_USAPhO.pdf

**Fonte:** `gare di altri paesi/USA/all/2020/2020_USAPhO.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]
**Soluzioni (stessa cartella):**  · 
## Problema 1

**Question A1 — Braking up**

An infinitely long wire with linear charge density $-\lambda$ lies along the $z$-axis. An infinitely long insulating cylindrical shell of radius $a$ is concentric with the wire and can rotate freely about the $z$-axis. The shell has moment of inertia per unit length $I$. Charge is uniformly distributed on the shell, with surface charge density $\dfrac{\lambda}{2\pi a}$.

The system is immersed in an external magnetic field $B_0\hat{z}$, and is initially at rest. Starting at $t = 0$, the external magnetic field is slowly reduced to zero over a time $T \gg a/c$, where $c$ is the speed of light.

a. Find an expression of the final angular velocity $\omega$ of the cylinder in terms of the symbols given and other constants.

b. You may be surprised that the expression you find above is not zero! However, the electric and magnetic fields can have angular momentum. Analogous to the "regular" angular momentum definition, the EM field angular momentum per unit volume at a displacement $r$ from the axis of rotation is:
$$\mathbf{L}(r) = r \times \mathbf{P}(r).$$
$\mathbf{P}(r)$ is a vector analogous to momentum, given by
$$\mathbf{P}(r) = \alpha \cdot \bigl(\mathbf{E}(r) \times \mathbf{B}(r)\bigr),$$
where $\alpha$ is some proportionality constant. Find an expression for $\alpha$ in terms of given variables and fundamental constants.

<!--fig:start-->
![[_attachments/2020_USAPhO/2020_USAPhO_p2_f1.png]]
*Cylindrical shell and wire geometry*
<!--fig:end-->

**Topic:** [[Electromagnetism]], [[Electromagnetic Induction]], [[Electrostatics]]
**Metodi:** [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Gauss's Law (metodo)|Gauss's Law]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Problema 2

**Question A2 — Swoosh!**

In 1851, Léon Foucault built a pendulum 67 metres tall with a 28-kg weight. He connected it to the top of the Panthéon in Paris with a bearing that enabled it to freely change its plane of oscillation. Because of the Earth's rotation, the plane of oscillation slowly moved over time: if we imagine a large horizontal clock under the pendulum, if initially the oscillations went from "12" to "6", later on they would move to the "3-9" plane, for example, as shown in the figure below. Perhaps surprisingly, the time it took the oscillations to go back to their original plane is longer than 12 hours. In this problem we will investigate why this is the case, and what the shape the pendulum traces out.

First, consider the case of a Foucault pendulum installed precisely at the North Pole, with length $l$. We denote $\sqrt{g/l} = \omega$. The angular velocity of the Earth is $\Omega$.

John is an observer looking at the pendulum from a fixed point in space. At $t = 0$, he sees the pendulum at position $(A, 0)$ and with velocity $(0, V)$ in the $x$-$y$ (horizontal) plane.

a. For John, what are the approximate equations describing the motion of the pendulum in the $x$-$y$ plane? You may assume that the amplitude of the oscillations is small. We define the coordinates of the pendulum at rest as $(0, 0)$.

b. What will the coordinates $x$, $y$ in John's frame be at a later time $t$?

c. Ella, an observer resides at the North Pole, is also looking at the pendulum. What are the coordinates, $\tilde{x}(t)$ and $\tilde{y}(t)$, as observed by Ella? Assume that at time $t = 0$, the coordinate systems of John's and Ella's overlap.

d. What is the speed of the pendulum bob observed by Ella at $t = 0$?

e. Find the initial conditions for $A$, $V$, such that as measured in Ella's frame:
   i. the pendulum passes precisely through its resting position.
   ii. it has a "spike" at the points of maximal amplitude (see figure below) instead of a "rounded" trajectory.

In a rotating frame, a fictitious force known as the Coriolis force acts on the particles. For Foucault's pendulum, the Coriolis force acts primarily in the horizontal plane, in a direction perpendicular to the velocity of the mass in the Earth's frame with magnitude:
$$F = 2m\Omega v \cdot \sin\theta, \tag{A2-1}$$
where $m$ and $v$ are the pendulum's mass and its velocity, and $\theta$ the latitude ($90°$ for the North Pole). Note that when the velocity changes sign, so does the Coriolis force.

f. How long would it take for the plane of oscillation of Foucault's pendulum to return to its initial value in Paris, which has a latitude of about $49°$.

<!--fig:start-->
![[_attachments/2020_USAPhO/2020_USAPhO_p3_f2.png]]
*Foucault pendulum schematic and projected motion*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2020_USAPhO/2020_USAPhO_p4_f3.png]]
*Spike vs rounded trajectory in rotating frame*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]], [[Rotational Dynamics]], [[Newtonian Mechanics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.3

## Problema 3

**Question A3 — Spin Cycle**

Cosmonaut Carla is preparing for the Intergalactic 5000 race. She practices for her race on her handy race track of radius $R$, carrying a stopwatch with her. Her racecar maintains a constant speed $v$ during her practices. For this problem, you can assume that $v > 0.1c$, where $c$ is the speed of light.

a. How much time elapses on Carla's stopwatch with each revolution?

Carla decides to do a fun experiment during her training. She places two stationary clocks down: Clock A at the center of the race track, i.e. the origin; and Clock B at a point on the race track denoted as $(R, 0)$. She then begins her training.

For parts (b) through (d), we define Carla's inertial reference frame (CIRF) as an inertial reference frame in which Carla is momentarily at rest, and which has the same origin of coordinates as the lab frame. Thus, CIRF is a new inertial frame each moment. The times on the clocks and stopwatch are all calibrated such that they all read 0 in CIRF when she passes by Clock B for the first time.

b. In the lab frame (the reference frame of the clocks, which are at rest), what is the offset between Clock A and Clock B?

c. If Carla's stopwatch measures an elapsed time $\tau$, what does Clock A measure in CIRF?

d. If Carla's stopwatch measures an elapsed time $\tau$, what does Clock B measure in CIRF?

**Topic:** [[Special Relativity]], [[Newtonian Mechanics]]
**Metodi:** [[Lorentz Transformation (metodo)|Lorentz Transformation]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Relativistic Energy-Momentum (metodo)|Relativistic Energy-Momentum]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.5

## Problema 4

**Question B1 — String Cheese**

a. When a faucet is turned on, a stream of water flows down with initial speed $v_0$ at the spout. For this problem, we define $y$ to be the vertical coordinate with its positive direction pointing up.

Assuming the water speed is only affected by gravity as the water falls, find the speed of water $v(y)$ at height $y$. Define the zero of $y$ such that the equation for $v^2$ has only one term and find $y_0$, the height of the spout.

b. Assume that the stream of water falling from the faucet is cylindrically symmetric about a vertical axis through the center of the stream. Also assume that the volume of water per unit time exiting the spout is constant, and that the shape of the stream of water is constant over time.

In this case, the radius $r$ of the stream of water is a function of vertical position $y$. Let the radius at the faucet be $r_0$. Using your result from part (a), find $r(y)$.

If $r(y)$ is not constant, it implies that the water has some radial velocity during its fall, in contradiction to our assumptions in part (a) that the motion is purely vertical. You may assume throughout the problem that any such radial velocity is negligibly small.

c. The water-air interface has some surface tension, $\sigma$. The effect of surface tension is to change the pressure in the stream according to the Young-Laplace equation,
$$\Delta P = \sigma\left(\frac{1}{r} + \frac{1}{R}\right),$$
where $\Delta P$ is the difference in pressure between the stream and the atmosphere and $R$ is the radius of curvature of the vertical profile of the stream. ($R < 0$ for the stream of water; the radius of curvature would be positive only if the stream profile curved inwards.)

For this part of the problem, we assume that $|R| \gg |r|$, so that the curvature of the vertical profile of the stream can be ignored. Also assume that water is incompressible.

Accounting for the pressure in the stream, find a new equation relating $r(y)$ in terms of $\sigma$, $r_0$, $v_0$, and $\rho$, the density of water. You do not need to solve the equation for $r$.

d. After falling for some distance, the water stream usually breaks into smaller droplets. This occurs because small random perturbations to the shape of the stream grow over time, eventually breaking the stream apart.

For the rest of this problem we ignore the change in the radius of the stream due to changing speed of the water. Instead, we examine small random variations in the radius of the stream.

Random variations can be broken down into a sum of sinusoidal variations in stream radius, each with a different wavenumber $k$. We can analyze these different sinusoidal variations independently.

Consider a stream of water whose radius obeys
$$r(y) = r_0 + A\cos(ky),$$
where $A \ll r_0$ is the perturbation amplitude. To analyze such a stream, it is sufficient to consider only the thickest and thinnest parts of the stream.

Accounting for both sources of curvature, find a condition on $r_0$ and $k$ such that the size of perturbations increases with time.

<!--fig:start-->
![[_attachments/2020_USAPhO/2020_USAPhO_p6_f4.png]]
*Water stream cross-section with radius |R|*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2020_USAPhO/2020_USAPhO_p7_f5.png]]
*Stream profile r(y) and curvature |R(y)|*
<!--fig:end-->

**Topic:** [[Fluid Mechanics]], [[Oscillations & Waves]]
**Metodi:** [[Bernoulli's Equation (metodo)|Bernoulli's Equation]], [[Continuity Equation (metodo)|Continuity Equation]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.6

## Problema 5

**Question B2 — Mirror Mirror on the Wall**

Consider a square room with side length $L$. The bottom wall of the room is a perfect mirror.* A perfect monochromatic point source with wavelength $\lambda$ is placed a distance $d$ above the center of the mirror, where $\lambda \ll d \ll L$.

*(Remember that the phase of light reflected by a mirror changes by $180°$.)*

a. On the right wall, an interference pattern emerges. What is the distance $y$ between the bottom corner and the closest bright fringe above it? *Hint: you may assume $\lambda \ll y \ll L$ as well.*

b. You plan on running an experiment to determine $\lambda$ in a room with $L = 40$ m, and you know that $\lambda$ is between 550 and 750 nm. You will measure $d$ and $y_{10}$ (the distance of the tenth fringe from the corner) with the same ruler (with markings of 1 mm). At what $d$ should you place the point source to minimize your error in your $\lambda$ measurement? Roughly what is that minimum error?

c. Now suppose we place a transparent hemispherical shell of thickness $s$ and index of refraction $n$ over the source such that all light from the source that directly strikes the right wall passes through the shell, and all light from the source that strikes the mirror first does not pass through the shell.

At what $y$ is the fringe closest to the bottom-most corner now? (You may find it convenient to use $\lfloor x \rfloor$, the largest integer below $x$.) What is the spacing between the fringes now? Ignore any reflections or diffraction from the hemispherical shell.

d. Now, suppose the hemispherical shell is removed, and we instead observe the interference pattern on the top wall. To the nearest integer, what is the total number of fringes that appear on the top wall? You may assume that $d \ll L$.

<!--fig:start-->
![[_attachments/2020_USAPhO/2020_USAPhO_p8_f6.png]]
*Square room with mirror and point source*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2020_USAPhO/2020_USAPhO_p8_f7.png]]
*Hemispherical shell over point source*
<!--fig:end-->

**Topic:** [[Wave Optics]], [[Geometric Optics]]
**Metodi:** [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Superposition Principle (metodo)|Superposition Principle]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.8

## Problema 6

**Question B3 — Real Expansion**

Consider a "real" monatomic gas consisting of $N$ atoms of negligible volume and mass $m$ in equilibrium inside a closed cubical container of volume $V$. In this "real" gas, the attractive forces between atoms is small but not negligible. Because these atoms have negligible volume, you can assume that the atoms do not collide with each other for the entirety of the problem.

a. Consider an atom in the interior of this container of volume $V$. Suppose the potential energy of the interaction is given by
$$u(r) = \begin{cases} 0 & r < d \\ -\epsilon\left(\dfrac{d}{r}\right)^6 & r \geq d \end{cases}$$
where $d \ll V^{1/3}$ is the minimum allowed distance between two atoms. Assume the gas is uniformly distributed within the container, what is the average potential energy of this atom? Write your answer in terms of $a' = \dfrac{2\pi d^3 \epsilon}{3}$, $N$, and $V$.

b. What is the average potential energy of an atom near the boundary of the box? Assume that there is no interaction between atoms near the boundary and the box itself.

c. Using Bernoulli's law $P + U + \rho v^2/2 = \text{constant}$, with pressure $P$, potential energy density $U$, mass density $\rho$ and fluid velocity $v$, what is the pressure at the boundary of the box? Assume the interior pressure is given by the ideal gas law.

d. Assuming most atoms are in the interior of the box, what is the total energy of the atoms in the box?

Now consider an insulated partitioned container with two sections, each of volume $V$. We fill one side of the container with $N$ atoms of this "real" gas at temperature $T$, with the other side being a vacuum. We then quickly remove the partition and let the gas expand to fill the entirety of the partitioned container. During this expansion, the energy of the gas remains unchanged.

e. What is the final temperature of the gas after the expansion?

f. What is the increase in the entropy of the universe as a result of the free expansion? Give your answer to first order in $\dfrac{a'N}{Vk_BT}$.

**Topic:** [[Thermodynamics]], [[Kinetic Theory]]
**Metodi:** [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.10
