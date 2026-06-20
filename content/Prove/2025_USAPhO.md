---
tipo: prova
prova_id: prova_2025_USAPhO
competition: USA Physics Olympiad
comp_code: USAPhO
country: USA
year: '2025'
level: ''
pdf: gare di altri paesi/USA/all/2025/2025_USAPhO.pdf
cluster: Meccanica
n_problemi: '6'
tags:
  - kg/prova
  - anno/2025
  - paese/USA
  - comp/USAPhO
  - cluster/Meccanica
---

# USAPhO 2025 — 2025_USAPhO.pdf

**Fonte:** `gare di altri paesi/USA/all/2025/2025_USAPhO.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]
**Soluzioni (stessa cartella):** 
## Problema 1

**Problem A1: Shake It**

Most hairy mammals shake after getting wet; shaking the water off is energetically advantageous to waiting for it to dry on its own. In this problem, we investigate the mechanics of shaking off water. For simplicity, we will model animals as solid cylinders with the sides covered in fur. You may ignore gravity throughout the problem.

a. We can model the shaking by assuming that the angular position of the cylinder undergoes a sinusoidal oscillation: $\theta = A\cos(\omega t)$. (The rotation is about the axis of rotational symmetry.) Letting the radius of the cylindrical animal be $R$, derive an expression for the magnitude of the acceleration of a point on the surface of the animal under such a motion.

b. For the rest of this problem, rather than modeling sinusoidal motion, we will assume that the cylindrical animal is simply spinning at constant angular speed $\omega$. Wet fur tends to separate into cylindrical clumps of radius $r \ll R$. A droplet of water on the end of a clump of fur will be separated from it if the centripetal force overcomes the forces due to surface tension. Derive an approximate relationship (valid up to scalar numerical constants) between the surface tension $\sigma$, the radius $r$ of the fur clump, the radius $R$ of the animal, the angular speed $\omega$, and the density $\rho$ of water. The diagram below shows the cross-section of the animal, showing four clumps of fur with droplets on their end.

c. Experimentally, it is observed that all mammalian fur forms clumps of similar radius. Under the assumption that different animals all have the same density and are simply scaled copies of each other (i.e. larger animals are both longer and fatter), the relationship between an animal's mass $M$ and its angular velocity of shaking $\omega$ is of the form $\omega \sim M^n$: find the value of $n$.

d. Shaking requires energy, which we can crudely model as the rotational energy of the corresponding cylinder. An alternative strategy for the animal is to simply air-dry their fur, which requires energy to evaporate the water. Assume a wet animal has approximately 5% of their body weight in water, and has to supply all the energy for evaporating the water. Our model predicts that for some animal sizes, it will be energetically advantageous to air dry themselves: estimate the range of animal masses for which this is true. You may use the following facts: a mouse weighs 20 g, has a radius of 1 cm, and shakes itself with angular velocity $\omega = 30$ rad/s. The latent heat of vaporization of water at room temperature is $\lambda = 2430$ J/g.

<!--fig:start-->
![[_attachments/2025_USAPhO/2025_USAPhO_p4_f1.png]]
*Cross-section of animal showing four fur clumps with droplets*
<!--fig:end-->

**Topic:** [[Rotational Dynamics]], [[Fluid Mechanics]], [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.4

## Problema 2

**Problem A2: Black Tides**

Consider a spherically symmetric, nonrotating star of mass $m$ and radius $r$. If it gets too close to the supermassive black hole of mass $M \gg m$ at the center of a galaxy, it will be ripped apart by tidal forces. Throughout this problem, neglect relativistic effects and give answers in terms of $G$, $M$, $m$, and $r$. When asked for numbers, assume the star is Sun-like, so that $m = 2 \times 10^{30}$ kg, $r = 7 \times 10^8$ m, and $M = 10^6 m$, and give all numeric answers to one significant figure.

a. Suppose the star orbits the black hole in a circle of radius $R$. What is the radius of curvature of the trajectory of each point on the star's surface? Note that the star does not rotate as it orbits.

b. Gas on the star's surface facing the black hole is attracted to the star by the star's gravity, and pulled away from the star by the black hole's tidal force. Write an expression for the tidal acceleration at the point closest to the black hole.

c. At a radius $R$ where the gravitational and tidal forces are in equilibrium, the star will start being tidally ripped apart. This effect can only be observed when $R$ is outside the black hole's Schwarzschild radius $R_s = 2GM/c^2$. Find an expression for $R$ and numerically evaluate the ratio $R/R_s$.

For the rest of the problem, we consider a star on a parabolic orbit whose periapsis (distance of closest approach) is equal to the radius $R$ found in part c. Near periapsis, the star will be torn apart in a "tidal disruption event". As a very rough model of this phenomenon, assume the star is initially a single rigid body. The moment it reaches periapsis, it fragments into many rigid pieces which do not interact with each other, and feel only the black hole's gravity.

d. Afterward, some of the fragments will escape from the black hole, while the rest remain bound. Numerically evaluate the fraction of the mass which escapes.

e. An escaping fragment has speed $v_f$ when it is far from the black hole. Find the maximum possible value of $v_f$, among all fragments, and evaluate it numerically.

f. A bound fragment orbits with period $T_f$. Find the minimum possible value of $T_f$, among all fragments, and evaluate it numerically.

As bound fragments return to the location of the initial disruption, they collide with other debris, causing them to be absorbed into the black hole's accretion disk. This process produces an enormous amount of light, with the luminosity (or energy emitted over time) proportional to the mass absorption rate. If $t = 0$ at the moment the star fragments apart, then light begins to be emitted at the time you found in part f, and afterward the luminosity scales as $L \propto 1/t^n$ for a constant $n$.

g. Find the value of $n$. Assume for simplicity that the total energies of the bound fragments are uniformly distributed between their minimum and maximum values.

**Topic:** [[Gravitation]], [[Astrophysics]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Conservation Laws (metodo)|Conservation Laws]], [[Kepler's Laws (metodo)|Kepler's Laws]], [[Conservation of Energy (metodo)|Conservation of Energy]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.5

## Problema 3

**Problem A3: Bitter and Magnetic**

In this problem, we explore some of the design considerations for an electromagnet.

a. Consider an electromagnet consisting of a long solenoid, i.e. a spiral of thin wire wrapped in a single layer around a cylindrical nonmagnetic core. The wire is wrapped in such a way that the adjacent coils almost touch. When a current is sent through the wire, a magnetic field is generated inside the solenoid; this magnetic field exerts an outward force on the wire. Find the pressure $P$ on the solenoid in terms of the magnetic field $B$ inside the solenoid.

b. The pressure on the "walls" of the solenoid is counteracted by tension inside the wire. Derive an expression for the maximal achievable magnetic field $B$ in terms of coil radius $a$, wire diameter (thickness) $t \ll a$, and wire tensile strength $\sigma$. (The tensile strength of a material is the force per unit cross-sectional area that needs to be applied in order to pull the material apart.) Assume the wire is circular in cross-section.

c. Let $a = 0.1$ m, $t = 0.001$ m. The tensile strength of copper is $\sigma = 250$ MPa, and the permeability of free space is $\mu_0 = 4\pi \times 10^{-7}$ H/m. What is the maximum magnetic field that can be achieved in a single-layer solenoid made out of such a wire without the wire snapping?

d. In theory, we could generate a stronger field by increasing the wire thickness, but the nonuniform distribution of current inside the wire makes this difficult to analyze. Instead, consider wrapping the solenoid in many layers of wire. We will place adjacent layers a distance $t$ apart so that they just barely don't touch, and will adjust the current through each wire to equalize the tensile stress. The wire coils span the space from an inner core radius of $a$ to an outer radius of $b$. Estimate the maximum achievable field strength inside this electromagnet. You may assume that the wire is thin ($t \ll a$, $t \ll b - a$).

e. Estimate the numeric value of the maximum magnetic field that can be achieved in a multi-layer solenoid described above with $a = 0.1$ m and $b = 0.3$ m.

**Topic:** [[Electromagnetism]], [[Magnetism]], [[Elasticity & Materials]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Stress-Strain Analysis (metodo)|Stress-Strain Analysis]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.6

## Problema 4

**Problem B1: Scroll 'n' Roll**

Consider a disk with mass $m$ and radius $R$ placed on a large and frictionless table. An ant with mass $m$ is placed on top of the disk. The ant can move freely without sliding on the disk.

a. Initially, the ant starts on the edge of the disk, and both the ant and the disk are at rest (relative to the table). Then, the ant starts walking across the disk's diameter, such that in the frame of the disk, the ant has (constant) velocity $v$. What is ant's velocity in the frame of the table?

b. Suppose instead that the ant walks counterclockwise along the edge of the disk at constant speed $v$ in the frame of the disk. What is the ant's speed in the frame of the table?

c. Now there are two ants on the disk! The second ant (also of mass $m$) starts at distance $R/2$ from the center of the disk, with an angle offset by $\theta$ from the first ant. The second ant walks counterclockwise around this circle with radius $R/2$ at speed $v/2$ (relative to the disk). Find all $\theta$ such that the second ant is stationary in the frame of the table.

<!--fig:start-->
![[_attachments/2025_USAPhO/2025_USAPhO_p7_f2.png]]
*Disk with two ants showing angle theta offset*
<!--fig:end-->

**Topic:** [[Rotational Dynamics]], [[Newtonian Mechanics]], [[Conservation of Momentum]]
**Metodi:** [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.7

## Problema 5

**Problem B2: Where's the Kaboom?**

A plane is flying horizontally at constant velocity $v$ and altitude $z = H$. The speed of sound at altitude $z$ is given by
$$c(z) = \alpha\sqrt{T(z)},$$
where $\alpha$ is a constant. Suppose $v > c(H)$, and define the Mach number as
$$\mathcal{M} \equiv \frac{v}{c(H)} > 1.$$
If $c(z)$ is constant for all $z$, then the envelope is a cone with half angle $\theta$ where $\sin\theta = \frac{1}{\mathcal{M}}$ and propagates with the speed of sound $c$.

a. Sketch the envelope.

b. Now, the speed of sound depends on the altitude because the temperature is not uniform. For the altitudes we are interested in, the following linear model works well:
$$T(z) = T_0 - \beta z,$$
where $\beta > 0$ is a constant. Sketch the envelope of the boom.

c. If the Mach number is large enough then the sonic boom hits the ground. Assume it is large enough. On the ground, there are two sensors at $z = 0$ and $z = h$, one directly above the other. Assume $h \ll H$ and $\beta h \ll T_0$. At time $t_1$, the top sensor receives the sonic boom signal and at a later time, the bottom sensor also receives the signal. Express the Mach number $\mathcal{M}$ of the airplane in terms of $H$, $h$, $t$, $T_0$, $\alpha$, $\beta$, where $t = t_2 - t_1$.

d. If the plane travels slower without changing direction, its sonic boom could become no longer audible from the ground for the Mach number $1 < \mathcal{M} < \mathcal{M}_{\max}$. What is the upper limit for the Mach number $\mathcal{M}_{\max}$ for which this can occur? Express your answer in terms of $T_0$, $H$, $\alpha$, $\beta$. You do not necessarily need all of these parameters.

**Topic:** [[Oscillations & Waves]], [[Thermodynamics]], [[Geometric Optics]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Ray Tracing (metodo)|Ray Tracing]], [[Snell's Law (metodo)|Snell's Law]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.8

## Problema 6

**Problem B3: Locked and Moded**

a. Consider two mirrors facing each other separated by a distance $L$ (a Fabry–Pérot resonator). The cavity (the space between the two mirrors) is in vacuum (index of refraction $n = 1$, no dispersion), and the mirrors have high reflectivities so that the main resonance condition is that an integer multiple of half-wavelengths fit into the cavity. A light pulse containing multiple different frequencies travels between the mirrors and interferes with itself.

   i. State the condition for resonance in terms of $L$ and wavelength $\lambda$.

   ii. Write down an expression for the resonant angular frequencies $\omega_m$, with $m$ counting each of the possible resonances.

   iii. What is the angular frequency spacing $\Delta\omega \equiv \omega_{m+1} - \omega_m$ between adjacent angular frequencies?

b. The electric field at the antinodes of the standing waves in the resonator is a superposition of oscillations at the resonant angular frequencies and is given by:
$$E_{\text{before}}(t) = \sum_{k=-\infty}^{+\infty} E_k \cos\!\left(k\,\Delta\omega\, t\right).$$
Now suppose we introduce a gain medium (such as a doped crystal) into the laser cavity. The gain medium completely absorbs incoming light and re-emits it over a finite range of $N$ angular frequencies centered around some angular frequency $\omega_0$, which coincides with one of the $\omega_m$ values determined above. Within this bandwidth, the gain medium amplifies and supports oscillations at all $\omega_m$ that fall within the range. (Assume $N$ is an odd number.)

Assume that each of these $N$ angular frequencies—also referred to as modes—has the same amplitude $E_0$, and that their phases are locked such that there is zero relative phase between them at $t = 0$. This condition is known as **mode locking**. Set their common phase so that all electric fields are expressed as cosine functions, consistent with the form of $E_{\text{before}}(t)$.

   i. Write an expression for the total electric field $E_{\text{after}}(t)$ as the sum of these $N$ equally spaced angular frequencies (with zero relative phase).

   ii. Show that in the limit of many angular frequencies ($\Delta\omega \ll \omega_0$, $N \gg 1$), the time-dependent electric field approximately takes the following form:
$$E_{\text{after}}(t) \approx E_0\, f(\omega_0, t)\, \frac{\sin\!\left(\dfrac{N\,(\Delta\omega)\,t}{2}\right)}{\sin\!\left(\dfrac{(\Delta\omega)\,t}{2}\right)}$$
and determine the function $f(\omega_0, t)$.

c. To answer the next part of the problem, assume $N$ is odd and find the following limit when $a = \pi m$, where $m$ is an integer:
$$\lim_{x \to a} \frac{\sin(Nx)}{\sin x}.$$

d. Mode locking can dramatically increase the peak intensity $I$ of the laser output. Use the expression $I = \gamma E^2$, where $\gamma$ is a known constant, to answer the following questions.

   i. Determine the total instantaneous intensity $I_{\text{after}}(t)$ of the electric field.

   ii. What is the maximum possible intensity of the total field, and at what time(s) is this achieved?

e. The uncertainty principle states $\Delta x\,\Delta p \geq \dfrac{\hbar}{2}$. In optics, we are more commonly interested in the duration of the pulse rather than its spatial extent; the two are related via $\Delta x = c\,\Delta t$. Consider the problem of setting up a very short laser pulse. Use the uncertainty principle to estimate the required bandwidth (range of frequencies). Compare that to the relationship between pulse duration and gain bandwidth that we're achieving in this problem.

**Topic:** [[Wave Optics]], [[Oscillations & Waves]], [[Modern-Quantum Physics]]
**Metodi:** [[Superposition Principle (metodo)|Superposition Principle]], [[Wave Equation (metodo)|Wave Equation]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.9
