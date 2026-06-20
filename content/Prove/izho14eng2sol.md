---
tipo: prova
prova_id: prova_izho14eng2sol
competition: Russia Physics Olympiad
comp_code: IZhO
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/izho.kz/izho14eng2sol.pdf
cluster: Meccanica
n_problemi: '1'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/IZhO
  - cluster/Meccanica
---

# IZhO na — izho14eng2sol.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/izho14eng2sol.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1

**Magnetic interactions**

X International Zhautykov Olimpiad / Experimental Competition

SOLUTION FOR THE EXPERIMENTAL COMPETITION

Magnetic interactions

Part 1. Interaction with the magnetic field of a coil

1.1. To measure the oscillation period it is necessary to measure the time of at least 10 oscillations several times. The following values for 10 oscillations are obtained:

$$t_1 = 25{,}02\ \text{s}, \qquad t_2 = 25{,}06\ \text{s}, \qquad t_3 = 24{,}92\ \text{s}.$$

Evaluation of the period from this data gives rise to

$$T = \frac{\langle t \rangle}{10} = 2{,}50\ \text{s}.$$

Experimental error is evaluated by the formula

$$\Delta t = 2\sqrt{\frac{\sum_k \left(t_k - \langle t \rangle\right)^2}{n(n-1)}} = 0{,}08\ \text{s},$$

and, therefore, the accuracy of the period is equal to $\Delta T = \Delta t / 10 = 0{,}008\ \text{s}$.

Finally, one can write

$$T = (2{,}50 \pm 0{,}01)\ \text{s}. \tag{1}$$

1.2. The following circuit can be used for measurements (it is also acceptable for the rheostat to be used as a potentiometer).

1.3. Table 1 shows the dependence of the oscillation period of the pendulum againgst the current in the coil and below the corresponding graph is drawn.

Table 1

| $I$, A | $T$, s | $\nu^2$, s$^{-2}$ | $(\nu^2 - \nu_0^2)$, s$^{-2}$ |
| --- | --- | --- | --- |
| 0,00 | 2,655 | 0,142 | 0,000 |
| 0,80 | 2,062 | 0,235 | 0,093 |
| 0,37 | 2,350 | 0,181 | 0,039 |
| -0,37 | 3,083 | 0,105 | -0,037 |
| -0,72 | 3,724 | 0,072 | -0,070 |

Figure 1. Dependence of the oscillation period of the pendulum on the current in the coil.

1.4. To describe the motion of the pendulum the following equation should be used

$$J \frac{d^2\phi}{dt^2} = -mga \cdot \phi - \mu I \phi, \tag{2}$$

where $\phi$ stands for the angle of deflection of the pendulum from the vertical, $J$ denotes the moment of inertia of the pendulum about the axis of rotation, $m$ is the pendulum mass, $a$ designates the distance from the axis of rotation to the center of the pendulum mass, $\mu I \phi$ refers to the moment of the force acting on a magnetized bead caused by the magnetic field of the coil. Equation (2) implies that the square of the oscillation frequency depends linearly on the current strength as:

$$\nu^2 = \frac{1}{T^2} = \frac{mga + \mu I}{J}$$

It is clearly seen that the square of the oscillation frequency against the coil current is convinuently represented as

$$\nu^2 - \nu_0^2 = \frac{\mu I}{J},$$

where $\nu_0^2 = \dfrac{mga}{J}$ stands for the square of the oscillation frequency in the absence of the current in the coil.

Thus, the linear dependence of the value $\left(\nu^2 - \nu_0^2\right)$ against the current strength proves the assertion of direct proportionality between the strength of the magnetic interaction and the current in the coil. The figure shows the corresponding graph which confirms the linearity assumption.

Part 2. Pointlike interaction

2.1. To write the equation of motion it is necessary to correctly calculate the torque of the interaction forces between magnetized beads. Since the force is central, the shoulder is a segment $OD$, and its length is

$$d = |OD| = (l + x) \cdot \alpha,$$

where $l$ is the distance from the rotation axis to the bead in the pendulum, $x$ stands for the distance between the beads in the equilibrium position. Hereinafter angles are assumed small. The angle $\alpha$ should be expressed through the angle $\phi$ of the pendulum deflection. For this purpose the following ratio can be used

$$|CB| = l\phi = x\alpha,$$

which gives rise to

$$\alpha = \frac{l}{x}\phi.$$

Thus, the motion of the pendulum is described by the equation

$$J \frac{d^2\phi}{dt^2} = -mga\,\phi - F\frac{l(l+x)}{x}\phi. \tag{3}$$

This equation implies that the formula for the oscillation period is given by

$$T = 2\pi \sqrt{\frac{J}{mga + F\dfrac{l(l+x)}{x}}}. \tag{4}$$

2.2. Measurement results of the time of 10 oscillations at different distances between the centers of the beads are given in Table 2 and are drawn in the graph below.

Table 2.

| $x$, mm | $t_1$, s | $t_2$, s | $t_3$, s | $T$, s |
| --- | --- | --- | --- | --- |
| 23 | 4,27 | 4,09 | 3,90 | 0,409 |
| 33 | 8,72 | 9,03 | 8,83 | 0,886 |
| 43 | 15,96 | 15,73 | 15,68 | 1,579 |
| 53 | 19,20 | 19,64 | 19,36 | 1,940 |

2.3. To determine the exponent it is necessary to express the strength of interaction in terms of measurable characteristics. It follows from the formula for the oscillation period that the change of the squared frequency is found as

$$\nu^2 - \nu_0^2 = F\frac{l(l+x)}{x}\frac{1}{J},$$

This means that the value

$$\xi = \left(\nu^2 - \nu_0^2\right)\frac{x}{l+x}$$

is proportional to the strength of the magnetic interaction $F = \dfrac{C}{r^\gamma}$. To determine the exponent it is necessary to plot the dependence of $\xi$ on the distance $\xi$ in a logarithmic scale. The slope coefficient in this graph provides the desired exponent.

The figure shows the corresponding graph. It follows from this graph that the exponent is equal to $\gamma = 4$.

Part 3. Magnetic chocolate

3.1 Chocolate does not affect the period of oscillation, but significantly increases the damping of oscillations. This occurs due to the occurrence of eddy currents in the foil.

3.2 In order to prove this, one can measure the dependence of the oscillation amplitude on the time (or, equivalently, on the number of oscillations in semi-logarithmic scale.
The graph below shows the corresponding data with (1) and without (2) chocolate. The graphs show an increase in the damping of oscillations in the presence of chocolate.

Grading scheme

| No | Part of the problem | Total for the part | Points |
| --- | --- | --- | --- |
| 1.1 | Measurement of the period:<br>- Period is larger than 2 seconds;<br>- Not less than 3 measurements;<br>- Each measurement includes at least 10 periods;<br>- The average value is found;<br>- Random error is evaluated; | 0,5 | 0,1<br>0,1<br>0,1<br>0,1<br>0,1 |
| 1.2 | Circuit diagram (all elements connected in series):<br>- Source;<br>- Coil;<br>- Rheostat (two possible ways);<br>- Key;<br>- Ammeter; | 0,5 | 0,1<br>0,1<br>0,1<br>0,1<br>0,1 |
| 1.3 | Measurements (counted only if the period is measured in the range 1-5 s)<br>- Measured at 7 (5, 3, less) values of the current;<br>- Current flows in two directions;<br>- Change in the period is not less than 50% (20% less);<br>- Measured not less than 5 oscillations;<br>Plotting:<br>- Axis signed and digitized;<br>- All the points of the table are plotted;<br>- A smooth line is drawn; | 2,0 | 1(0,5; 0,3; 0)<br>0,4<br>0,2 (0,1;0)<br>0,1<br>0,1<br>0,1<br>0,1 |
| 1.4 | Linearization:<br>- Dependence of the squared frequency on the current is linear;<br>- all the points are included in evaluation;<br>Plotting:<br>- Axis signed and digitized;<br>- All the points of the table are plotted;<br>- A smooth straight line is drawn;<br>Conclusions on the validity | 1,0 | 0,4<br>0,2<br>0,1<br>0,1<br>0,1<br>0,1 |
| 2.1 | The equation of motion:<br>- General view (the dynamics of rotational motion);<br>- Torque of the gravity force;<br>- Torque of the magnetic interaction force;<br>Formula for the period of oscillation | 1,0 | 0,3<br>0,2<br>0,3<br>0,2 |
| 2.2 | Measurements of the oscillation period (counted only if the period is the range of 0.3-5 s)<br>- Measurements for 7 (5.3 less) distances;<br>- Change in the period is not less than 4 times (2 times, or less);<br>Plotting:<br>- Axis signed and digitized;<br>- All the points of the table are plotted;<br>- A smooth line is drawn; | 4,0 | 2,5(1,5; 1,0; 0)<br>1,2(0,5;0)<br>0,1<br>0,1<br>0,1 |
| 2.3 | Determination of the exponent<br>The correct linearization is found;<br>The parameters of the linearized dependence are determined;<br>Plotting:<br>- Axis signed and digitized;<br>- All the points of the table are plotted;<br>- A smooth straight line is drawn;<br>The slope lies in the range from 2 to 6;<br>The exponent is found to be equal to 4; | 4,0 | 2,0<br>0,5<br>0,1<br>0,1<br>0,1<br>(0,6)<br>1,2 |
| 3.1 | Period is constant;<br>Damping is increased;<br>The reason is the eddy currents in the chocolate bar. | 0,5 | 0,2<br>0,2<br>0,1 |
| 3.2 | The dependence of the amplitude on the number of oscillations (it is equivalent to measure the number of oscillations for amplitude decrease in the specified limits)<br>Plotting:<br>- Axis signed and digitized;<br>- All the points of the table are plotted;<br>- A smooth line is drawn; | 1,5 | 1,2<br>0,1<br>0,1<br>0,1 |
|  | TOTAL | 15 |  |

**Topic:** [[Oscillations & Waves]], [[Magnetism]], [[Electromagnetic Induction]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Fonte:** Testo (PDF) — p.1
