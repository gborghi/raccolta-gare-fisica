---
tipo: prova
prova_id: prova_golden
competition: Russia Physics Olympiad
comp_code: Russia
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/ruPho/golden.pdf
cluster: Meccanica
n_problemi: '16'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
  - cluster/Meccanica
---

# Russia na — golden.pdf

**Fonte:** `gare di altri paesi/Russia/ruPho/golden.pdf` · Apri PDF · apri PDF p.2
**Cluster:** [[Meccanica]]

## Problema 1

Problem 1 (Balancing Act)
Consider three planar shapes each with mass density $\sigma$, and the radii of the points of contact make an angle $\theta$
with the horizontal. The radius of the circle is $R$ and the height of the rectangle is $L$. Determine the minimum
horizontal force needed to keep the circles together. For what $\theta$ is this force a maximum? (Source: Morin)
Answer: $\cos\theta = 1/\phi$.
Solution: Let $N$ be the normal between the disk and the rectangle. At the minimum force, there will be no normal force
between the two disks. A horizontal force balance on the disk gives:
$F = N\cos\theta$
and a vertical force balance on the rectangles gives:
$\sigma(wL)g = 2N\sin\theta$
where the width is $w = 2R(1 - \cos\theta)$. Combining these two equations together gives:
$F = \sigma R L g(1 - \cos\theta)\cot\theta$
From here, it is not too difficult to show that the maximum value occurs at
$$\cos\theta = \frac{-1 + \sqrt{5}}{2} \equiv \frac{1}{\phi}$$

**Topic:** [[Rigid Body Statics]], [[Newtonian Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Problema 2

Problem 2 (Drag Force)
A ball is thrown with speed a $v_0$ at an angle $\theta$ over a horizontal flat ground. It experiences a drag force with
magnitude $F = -m\alpha v$. Suppose the initial drag force equals the weight of the ball. At what angle $\theta$ should we
throw it such that it maximizes the distance travelled once the ball has reached its maximum value? (Source:
Morin)
Answer: $\sin\theta = 1/\phi$
Solution: Our equations of motion gives:
$\frac{dv_x}{dt} = -\alpha v_x$ and $\frac{dv_y}{dt} = -g - \alpha v_y$. Separating variables two times for the
first equation, we get
$$v_x = v_0\cos\theta\, e^{-\alpha t}$$
$$x = \frac{v_0\cos\theta}{\alpha}(1 - e^{-\alpha t})$$
through applying the initial conditions. Similarly, in the y-direction, we get:
$$v_y = \left(v_0\sin\theta + \frac{g}{\alpha}\right)e^{-\alpha t} - \frac{g}{\alpha}$$
Applying the condition $m\alpha v_0 = mg \Rightarrow \alpha = \frac{g}{v_0}$, we can simplify the $v_y$ equation to:
$$v_y = (v_0\sin\theta + v_0)e^{-\alpha t} - v_0$$
At the maximum point, this is zero or:
$$e^{-\alpha t} = \frac{1}{1 + \sin\theta}$$
The x-position at this time would therefore be:
$$x = \frac{v_0^2}{g}\left(\frac{\sin\theta\cos\theta}{1 + \sin\theta}\right)$$
which is maximized at $\sin\theta = 1/\phi$.

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Problema 3

Problem 3 (Forever Bouncing)
Two fixed circular rings in contact with each other, stand in the vertical plane such that a ball bounces elastically
back and forth. The initial conditions are set up such that the ball will forever bounce in an ellipse. If the parabola
hits the ring at an angle $\theta$ from the horizontal, what angle will maximize $\Delta p_x$, the maximum change in the ball's
horizontal momentum? (Source: Morin)
Answer: $\cos\theta = 1/\phi$.
Solution: Let $v$ be the initial speed after a bounce. It is well known that the range of a projectile is given by:
$$x = \frac{v^2}{g}\sin 2\theta$$
We can calculate the range through geometry to be $2R(1 - \cos\theta)$. Setting these two equal to each other, we can solve for
$v_x$ to be
$$v_x = v\cos\theta = \sqrt{\frac{gR\cos\theta(1 - \cos\theta)}{\sin\theta}}$$
The change in the horizontal momentum is simply just $|\Delta p_x| = 2v_x$.
Therefore, maximizing $v_x$ is achieved through
$\cos\theta = 1/\phi$.

**Topic:** [[Newtonian Mechanics]], [[Conservation of Momentum]]
**Metodi:** [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.3

## Problema 4

Problem 4 (Two Springs One Wall)
Two identical springs and two identical masses are attached to a wall as shown below. Determine the frequencies.
(Source: Morin)
Answer: $\omega_1 = \sqrt{\frac{k}{m}} = \phi$ and $\omega_2 = \sqrt{\frac{k}{m}} = 1/\phi$
Solution: Let the first mass be denoted as 1 and the second mass 2. The equations of motion are:
$$m\ddot{x}_1 = -kx_1 - k(x_1 - x_2)$$
$$m\ddot{x}_2 = -k(x_2 - x_1)$$
Making the replacement $\omega_0^2 = \frac{k}{m}$ and guessing a general solution in the form of $x_1 = Ae^{i\omega t}$ and $x_2 = Be^{i\omega t}$, we get:
$$A(-\omega_0^2 + 2\omega^2) - B(-\omega_0^2) = 0$$
$$A(-\omega_0^2) + B(-\omega^2 + \omega_0^2) = 0$$
Solving this (if unsure, see sec 2.1) gives:
$$\omega = \omega_0\sqrt{\frac{5 \pm 1}{2}}$$

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Superposition Principle (metodo)|Superposition Principle]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.3

## Problema 5

Problem 5 (Springed Mass on Rim)
A mass $m$ is free to slide along a smooth rim of a wheel of radius $R$ that rolls without slipping on the ground. The
wheel is massless, except for a mass $m$ located at its center. The mass is attached to a zero length spring with
constant $k$ and the other end is attached to a point on the rim. Assume that the spring is constrained to run along
the rim, and assume that the mass can pass freely over the point where the spring is attached to the rim. For the
special case where $g/R = k/m$, determine the frequency of oscillations. (Source: Morin)
Answer: $\omega_1 = \sqrt{\frac{k}{m\phi}}$ and $\omega_2 = \sqrt{\frac{k}{m}\frac{1}{\phi}}$
Solution: Let $\theta$ be the angle the wheel has rotated, relative to the position where the spring's contact point is on the
ground. Let $\alpha$ be the clockwise angle subtended by the spring. Then the position and velocity of the mass on the end of
the spring are:
$$(x, y) = (R\theta - R\sin(\theta + \alpha),\ R - R\cos(\theta + \alpha))$$
$$(\dot{x}, \dot{y}) = (R\dot{\theta} - R(\dot{\theta} + \dot{\alpha})\cos(\theta + \alpha),\ R(\dot{\theta} + \dot{\alpha})\sin(\theta + \alpha))$$
We can show, by neglecting higher order terms that the speed is $v = R\dot{\alpha}$. Assuming small angles, the horizontal position
of the center of the wheel is $R\theta$, so the Lagrangian is:
$$L = \frac{m}{2}R^2\dot{\theta}^2 + \frac{m}{2}R^2\dot{\alpha}^2 + mgR\cos(\theta + \alpha) - \frac{k}{2}(R\alpha)^2$$
This gives the equations of motion to be:
$$\ddot{\theta} + \frac{g}{R}(\theta + \alpha) = 0$$
$$\ddot{\alpha} + \frac{g}{R}(\theta + \alpha) + \frac{k}{m}\alpha = 0$$
Letting $\omega_0 = \frac{g}{R} = \frac{k}{m}$, we can show similar to above that:
$$\omega = \omega_0\sqrt{\frac{5 \pm 1}{2}}$$

**Topic:** [[Oscillations & Waves]], [[Rotational Dynamics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.4

## Problema 6

Problem 6 (Swirling on a Cone)
A fixed hollow frictionless cone is positioned with its tip pointing down. A particle is released from rest on the
inside surface.
After it has slid halfway down to the tip, it bounces elastically off a platform at a height $H$.
The platform is positioned at a $45^\circ$ angle along the surface of the cone, so the particle ends up being deflected
horizontally along the surface (into the page). The particle then swirls up and around the cone before coming
down. Measured from the tip of the cone, what is the ratio of the particle's maximum swirling height to the height
of the platform? (Source: Morin)
Answer: $h_\text{max}/H = \phi$
Solution: Conservation of energy tells us that it bounces off the platform at a speed $v_0 = \sqrt{2gH}$. If the angle of the
cone is $2\beta$, then conservation of angular momentum and energy from the platform to the top of the trajectory tells us:
$$mv_0(H\tan\beta) = mv(h_\text{max}\tan\beta) \Rightarrow v = (H/h_\text{max})v_0$$
$$\tfrac{1}{2}mv_0^2 + mgH = \tfrac{1}{2}mv^2 + mgh_\text{max} \Rightarrow v^2 = v_0^2 - 2g(y - H)$$
Solving for $h_\text{max}$ directly yields $h_\text{max} = \phi H$.

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation Laws (metodo)|Conservation Laws]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.5

## Problema 7

Problem 7 (Square Rotation)
A square lamina ABCD with one of its flat faces on a horizontal floor is sliding on the floor. At an instant, the
velocity vectors of the corners A and B are perpendicular to each other and the corner C is moving with a velocity
$v$ at an angle with vector $\vec{CD}$ such that the tangent of which is 0.5. Find the velocity of the midpoint P of the
side AB at this instant. (Source: Pathfinder)
Answer: $v_P = \phi v/2$ or $v_P = v/(2\phi)$
Solution: This problem, while it involves the golden ratio, is by no means "pretty" and I was unable to find an
explanation behind why the golden ratio shows up, besides pure coincidence. We begin with the condition that $\vec{v}_A\cdot\vec{v}_B = 0$,
which after expanding, eventually gives us:
$$v_\text{cm}^2 = v_{\text{cm},y}\,\omega a = 0$$
where $a$ is the side length and $\omega$ is the angular speed about the center of mass. Then, we use look at the motion of point
C by writing it in terms of:
$$\vec{v}_c = \left(v_{\text{cm},x} + \frac{\omega a}{2}\right)\hat{i} + \left(v_{\text{cm},y} + \frac{\omega a}{2}\right)\hat{j}$$
And using the condition that $\dfrac{v_{\text{cm},y} - \frac{\omega a}{2}}{v_{\text{cm},x} + \frac{\omega a}{2}} = \dfrac{1}{2}$ gives us our second equation:
$$2v_{\text{cm},y} - v_{\text{cm},x} = \frac{3\omega a}{2}$$
We want to relate $v_c$ with $v_{\text{cm},x}$ and $v_{\text{cm},y}$ via:
$$v^2 = (v_{\text{cm},x} + \omega a/2)^2 + (v_{\text{cm},y} - \omega a/2)^2$$
to get three equations, which after solving gives us all the relevant parameters to the motion of the square. We can then
use these information to determine $v_P = \phi v/2$ or $v_P = v/(2\phi)$

Problems in Relativity

**Topic:** [[Rotational Dynamics]], [[Newtonian Mechanics]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.5

## Problema 8

Problem 8 (Ball on Train)
A train of proper length $L$ moves at speed $v$ with respect to the ground. When the front of the train passes a
tree on the ground, a ball is simultaneously (as measured in the ground frame) thrown from the back of the train
toward the front, with a speed $u$ with respect to the train. The ball hits the front simultaneously (as measured in
the train frame) with the tree passing the back of the train. What is the maximum value of $v$ such that this can
happen? (Source: Morin)
Answer: $v_\text{max} = \dfrac{c}{\phi}$
Solution: Let there be two clocks on the train. As the front of the train passes the tree, the clock at the front reads
$t = 0$. Due to the loss of simultaneity, the clock at the back will read $Lv/c^2$ (in the ground frame). If we switch to the
frame on the train, the ball will be thrown at a time $t = Lv/c^2$.
The tree has travelled a distance $v(Lv/c^2)$, and will reach the back of the train in a time $L(1 - v^2/c^2)/v$. This must
also be the time the ball takes to reach the front of the train, so:
$$\frac{L\,1 - v^2/c^2}{v} = \frac{L}{u} \Rightarrow u = \gamma^2 v$$
This value needs to be smaller than $c$ so we can solve for $v$ to be: $v < \dfrac{\sqrt{5} - 1}{2}$.

**Topic:** [[Special Relativity]]
**Metodi:** [[Lorentz Transformation (metodo)|Lorentz Transformation]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.6

## Problema 9

Problem 9 (Relativistic Leaky Bucket)
A massless string with an initial length $l$ with constant tension $T$ has one end attached to a wall and the other
end attached to a massless bucket containing an initial mass $M = \dfrac{Tl}{c^2}$ of sand. The bucket is released and on the
way to the wall, it leaks sand at a rate $\dfrac{dm}{dt} = \dfrac{M}{l}$. When is the momentum of the bucket at a maximum? (Source:
Morin)
Answer: $\ln(x/l) = -1/\phi$
Solution: The change in energy with respect to position is:
$$\frac{dE}{dx} = -T + \frac{E}{x}$$
Solving this differential equation, we get:
$$E(x) = Cx - Tx\ln(x/l)$$
where $C$ is a constant of integration. At $x = l$, the energy is $E = Mc^2$ so $B = Mc^2/l$. We can write the momentum as:
$$p = \sqrt{E^2 - m^2c^4} = \sqrt{E^2 - (Mx/l\,c^2)^2} = \sqrt{E^2 - T^2x^2}.$$
Substituting in the expression for $E(x)$, we can maximize the momentum when: $\ln(x/l) = -1/\phi$.

**Topic:** [[Special Relativity]], [[Conservation of Momentum]]
**Metodi:** [[Relativistic Energy-Momentum (metodo)|Relativistic Energy-Momentum]], [[Differential Equations (metodo)|Differential Equations]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.6

## Problema 10

Problem 10 (Photon Decay)
A mass $m$ moving at a speed $v$ decays into two photons. One photon moves perpendicular to the original direction,
and the other photon moves off at an angle $\theta$, as shown. If the resulting angle is $\tan\theta = 1/2$, determine the initial
speed $v$. (Source: Morin)
Answer: $v = \dfrac{c}{\phi}$
Solution: Let the energy of the bottom and top photons be $E$ and $\gamma mc^2 - E$ respectively. Conservation of momentum
gives $p_x = \gamma mv$ and $p_y = E/c$ for the top photon. Since $E^2 = p^2c^2$, we get:
$$(E/c)^2 = p_x^2 + p_y^2 \Rightarrow E = \frac{mc^2}{2\gamma}$$
Since $p_y/p_x = 1/2$, we can expand $\gamma$ and solve for $v$ to be:
$$v/c = \frac{\sqrt{5} - 1}{2}$$

Electromagnetism

**Topic:** [[Special Relativity]], [[Conservation of Momentum]]
**Metodi:** [[Relativistic Energy-Momentum (metodo)|Relativistic Energy-Momentum]], [[Conservation Laws (metodo)|Conservation Laws]], [[Photon Energy Relation (metodo)|Photon Energy Relation]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.7

## Problema 11

Problem 11 (Zero Energy)
Find a geometric arrangement of one proton and two electrons are colinear and the potential energy of the system
is zero. What is the ratio of the distance between the left two particles and the right two particles? (Source:
Purcell)
Answer: $\phi$ or $1/\phi$
Solution: Suppose the three charges $q_1$, $q_2$, and $q_3$ are located at distances $x = 0$, $x = 1$, and $x = a$ respectively. Then
the energy of the system would be:
$$\frac{q_1q_3}{a} + \frac{q_2q_3}{b - 1} + \frac{q_1q_2}{1} = 0$$
Letting $q_1 = +e$ and $q_2 = q_3 = -e$, we get:
$$\frac{1}{a} + 1 = \frac{1}{a - 1}$$
The root is therefore $a = \phi$

**Topic:** [[Electrostatics]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Electric Potential Method (metodo)|Electric Potential Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.7

## Problema 12

Problem 12 (Zero Force from Sphere)
A point charge $Q$ is located a distance $r > R$ from the center of a nongrounded conducting spherical shell with
radius $R$ and net charge that is also $Q$. At what distance from the center should we place the charge such that
the force is zero? (Source: Purcell)
Answer: $r = R\phi$
Solution: This problem is solved by applying the method of image charges. If we let $r = nR$, then it is well known that
we can create the necessary boundary conditions by placing an image charge $q = -Q/n$ located a distance $R/n$ from the
center of the shell and an additional image charge $(1 + 1/n)Q$ located at the center of the shell. The net field is thus:
$$E = \frac{(1 + 1/n)Q}{(nR)^2} + \frac{-Q/n}{(n - 1/n)^2R^2}$$
which equals zero when $n = \phi$.

**Topic:** [[Electrostatics]]
**Metodi:** [[Electric Potential Method (metodo)|Electric Potential Method]], [[Coulomb's Law (metodo)|Coulomb's Law]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.8

## Problema 13

Problem 13 (Infinite Resistances)
Determine the resistance between terminals A and B in each of the infinite resistors shown below where each
resistor has a resistance of $r$. (Source: Purcell)
Answer: a) $R = \phi r$ b) $R = \phi/r$
Solution: The circuits here are self similar so it shouldn't be surprising that the golden ratio shows up. Let $R$ be the
resistance from A to B. To solve (a) we can simply cut the wires past the first vertical resistor, then replace the rest of
the circuit with a resistor $R$ (similar to the very first example in the introduction). This gives:
$$R = r + \frac{rR}{r + R}$$
Solving gives $R = \phi r$. Part (b) and the following example are extremely similar so they are left as an exercise to the
reader.

**Topic:** [[Circuits]]
**Metodi:** [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.9

## Problema 14

Problem 14 (Another Infinite Bridge)
Determine the resistance between the legs of the ladder if each resistor has a resistance $r$. (Source: Physics Brawl)
Answer: $R = \phi r$
Solution: Again, we can simply use the self similarity principle and obtain the exact same result as before.

**Topic:** [[Circuits]]
**Metodi:** [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.10

## Problema 15

Problem 15 (Infinite Triangles)
In the diagram below, each segment represents a resistor $r$. Suppose that we extend this pattern such that there
are an infinite number of triangles (which spiral out of the page to prevent bumping into each other). What is the
effective resistance between A and B? (Source: Purcell)
Answer: $R = \phi r$
Solution: Let us consider constructing such a circuit. We will begin with only two resistors such that their resistance is
$2R$. We then add in a third (to make a triangle). This gives a resistance $(2/3)R$. We continue adding resistors one by
one and we see it follows the pattern (omitting the factor of $R$):
$$\frac{2}{1},\ \frac{2}{3},\ \frac{5}{3},\ \frac{5}{8},\ \frac{13}{21},\ \frac{34}{55}$$
which appear to be going in order of the Fibonacci sequence. Thus the ratio will eventually converge to $\phi$.

**Topic:** [[Circuits]]
**Metodi:** [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.10

## Problema 16

Problem 16 (Natural Frequencies)
Determine the largest two natural frequencies of the circuit shown below. Let $C_1 \ll C_2$, and $L_1 \ll L_2$. (Source:
Physics Cup 2012)
Answer: $\omega_1 = \dfrac{\phi}{\sqrt{L_1C_1}}$ and $\omega_2 = \dfrac{1}{\phi\sqrt{L_1C_1}}$
See the solutions here. We can choose to brute force the problem via complex impedances, but we can also draw an
analog to springs, as shown in the link. For example, the first scenario is exactly identical to problem 4!

**Topic:** [[Circuits]], [[Oscillations & Waves]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.11
