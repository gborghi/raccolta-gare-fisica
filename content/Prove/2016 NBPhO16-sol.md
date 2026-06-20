---
tipo: prova
prova_id: prova_2016 NBPhO16-sol
competition: Nordic-Baltic Physics Olympiad
comp_code: BPhO
country: Nordic-Baltic
year: '2016'
level: ''
pdf: gare di altri paesi/Nordic-Baltic/all/2016 NBPhO16-sol.pdf
cluster: Meccanica
n_problemi: '5'
tags:
  - kg/prova
  - anno/2016
  - paese/Nordic-Baltic
  - comp/BPhO
  - cluster/Meccanica
---

# BPhO 2016 — 2016 NBPhO16-sol.pdf

**Fonte:** `gare di altri paesi/Nordic-Baltic/all/2016 NBPhO16-sol.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]
**Soluzioni (stessa cartella):**  · 
## Problema 1

1. Fuel consumption
If the car produces a forward force $F$ at a speed of $v$, then the work done on a path length $s$ is $W = Fs$. Since the efficiency is constant, this work is proportional to the consumed fuel volume, $W = ksf$, where $f = f(t)$ denotes the fuel consumption rate (volume per distance), and $k$ is a proportionality coefficient. Hence, $F = kf(t)$, i.e. the fuel consumption graph can be interpreted as a force graph.

The proportionality constant $k$ can be found from the fact that when the car is starting from the rest, there is no air drag (air drag is zero if speed is zero), and hence, all the driving force goes to accelerating the car, $F(0\ \text{s}) = ma_0$. Keeping in mind that $f(0\ \text{s}) = 33$ l/100km $= ma_0/k = \frac{mg}{2k}$, we obtain $\frac{k}{mg} = 1.52$ km/l.

At $v_0 = 90$ km/h, there is air drag which we need to consider, but since the speed is constant, so is the force from the air drag and we can just subtract $F(16\ \text{s})$ to get the force without the air drag. The increased fuel consumption when going uphill at an angle $\alpha$ comes from the component of the gravitational force tangential to the road $F(t) - F(16\ \text{s}) = mg\sin(\alpha)$. The highest point with $\sin\alpha = 0$ is reached when the fuel consumption is again equal to that at 16 s, which is at 22 s. The work done by the force pushing the car $W = \int [F(t) - F(16\ \text{s})]\,ds = \int [F(t) - F(16\ \text{s})]v_0\,dt = \frac{k}{v_0}\int_{16\ \text{s}}^{22\ \text{s}} [f(t) - f(16\ \text{s})]\,dt$ goes to the change of the potential energy $mgh$; here the integral $I \equiv \int_{16\ \text{s}}^{22\ \text{s}} [f(t) - f(16\ \text{s})]\,dt \approx 0.38$ l s/km is found as a surface area from the graph [the area between the graph and the line $f(t) = f(16\ \text{s})$]. Therefore, $h = W/mg = \frac{kI}{v_0 mg}$; with $\frac{k}{mg} = 1.52$ km/l we obtain $h \approx 14$ m.

The problem was graded as follows.
• Relating consumption rate $C$ to $F$ - 1.5 p
• Determining the coeff. of proportionality based on $C(0) = 33$ L/100 km and $a(0) = 5\ \text{m/s}^2$ - 0.5 p
• Noticing that max height is at 21 s - 0.5 p
• Noticing that due to friction, only the excess consumption is related to $mgh$ - 1 p
• Relating the excess area under the curve ($S$) to $mgh$ - 1 p
• Finding $S$ - 0.3 p
• Finding $h$ - 0.2 p

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1

## Problema 2

2. Glass plate
i) The energy and impulse of a photon are related by $E = pc$. Because the incident side is black, it will absorb the photons and feel the force due to their momentum: $F_a = \frac{dp}{dt}$, where $\frac{dp}{dt} = \frac{1}{c}\frac{dE}{dt} = \frac{P}{c}$ is the impulse of the photons generated per unit time. $F_a = \frac{P}{c}$.

ii) A fraction $r$ of the photons will be reflected, so they will exert twice the force, because the momentum change is twice as much as compared to absorbing them. A fraction $1-r$ will be absorbed and will give a force similar to the previous expression. $F_b = 2r\frac{P}{c} + (1 - r)\frac{P}{c} = (1 + r)\frac{P}{c}$.

iii) The light will be reflected many times and we will have to consider interference. Since energy is proportional to the square of the amplitude of the electric field, if a fraction $r$ of the photons and therefore of the energy is reflected, the amplitude of the reflected wave's electric field is $\sqrt{r}$ of the incident electric field. Let's calculate the total electric field amplitude of the wave that goes through. Denote by $E_i$ the electric field of the incident wave and by $E_t$ the electric field of the wave that has gone through the other side of the glass. On the incident side the proportion of the electric field amplitude that goes through is $\sqrt{1-r}$, of which a part $\sqrt{1-r}$ will go through and part $\sqrt{r}$ will bounce pack. So a wave with amplitude $E_0 = (1-r)E_i$ went straight through and a wave with amplitude $\sqrt{(1-r)r}\,E_i$ is bouncing back through the glass. Now it will go back to the first side, reflect back from there and of that a proportion $\sqrt{1-r}$ will go through and add to $E_t$. However the wave has traveled an optical path $2nd = 200.5\lambda$, so it will be 180 degrees out of phase and we get $E_1 = -(1-r)rE_i$. Repeating the procedure $E_2 = (1-r)r^2 E_i$ and so on $E_n = (1-r)(-r)^n E_i$. Summing all the electric fields that go through the other side of the glass we get:
$$E_t = \sum_{n=0}^{\infty} E_n = (1-r)E_i \sum_{n=0}^{\infty} (-r)^n = \frac{1-r}{1+r}E_i.$$
Power is proportional to the square of the electric field:
$$\frac{P_t}{P} = \left(\frac{E_t}{E_i}\right)^2 = \left(\frac{1-r}{1+r}\right)^2.$$
Since power is also proportional to the number of photons, this fraction of the photons have gone through and haven't given their momentum to the glass. By energy conservation the rest have been reflected back toward the laser and since their momentum has been reversed:
$$F_c = 2\left(\frac{P - P_t}{c}\right) = \frac{2P}{c}\left(1 - \left(\frac{1-r}{1+r}\right)^2\right) = \frac{8Pr}{c(1+r)^2}.$$
Note: if we would calculate directly the total electric field of the reflected light, we would need to take into account that on the first reflection of the laser light from the glass there is a phase shift of 180 degrees due to reflection from a surface with a higher refractive index (air to glass surface).

Alternative solution: The light is bouncing back and forth. Inside the glass there is some sum of waves with the same frequency, which we can represent as a single wave moving forward and a single wave moving backwards. Denote by $E$ the wave amplitude of the forward moving wave right under the surface in the glass. The wave amplitude is constant at that point and it is made of the transmitted part of the incoming light $\sqrt{1-r}\,E_i$ and from the 180 degrees out of phase part of $E$ itself as it bounces twice inside the glass to arrive at the same point back again: $-rE$. We get the relation:
$$E = \sqrt{1-r}\,E_i - rE \to E = \frac{\sqrt{1-r}}{1+r}E_i.$$
The wave that has gone all the way through the plate is
$$E_t = \sqrt{1-r}\,E = \frac{1-r}{1+r}E_i.$$
The rest follows as in the previous solution.

**Topic:** [[Wave Optics]], [[Oscillations & Waves]], [[Modern-Quantum Physics]]
**Metodi:** [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Superposition Principle (metodo)|Superposition Principle]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.1

## Problema 3

3. Music
i) For the tubular bells we can find the speed of sound in steel using dimensional analysis. It can depend on the young modulus $E$ and on the density $\rho$. We find that $v \propto \sqrt{\frac{E}{\rho}} \propto \sqrt{\frac{EL^3}{m}}$, where $L$ is the characteristic length of the bell. The speed, frequency and wavelength are related by $f = \frac{v}{\lambda}$. For a standing wave to exist on the bell, the wavelength must be proportional to it's characteristic length, because it has anti-nodes at the ends: $\lambda \propto L$. We get $f \propto \sqrt{\frac{L^3}{L}} = \sqrt{L}$. Due to thermal expansion, the lengths scale by $(1+\alpha\Delta T)$, where $\alpha$ is the coefficient of thermal expansion. Using this we have $f = f_0\sqrt{1 + \alpha\Delta T} \approx 330.04$ Hz. This is a very small change from $f_0 = 330$ Hz.

For the pipe organ we also have $f = \frac{v}{\lambda}$. The sound is generated by a standing wave in the air column. The speed $v$ in the formula is the speed of sound in the air. As in the previous case, the wavelength has to be proportional to the length of the pipe for a standing wave to exist and the length scales by $(1 + \alpha T)$. Since $\alpha T \approx 2.4 \times 10^{-4}$ is much smaller than the change in the speed of sound, we can ignore it. Using the given formula for the speed of sound, we have $f = f_0\sqrt{1 + \frac{45}{273.15}} / \sqrt{1 + \frac{25}{273.15}} \approx 341$ Hz. This is a significant change.

For the guitar string the speed of the wave can depend on the mass $m$ of the string, the length $L$ and the tension $T$. Using dimensional analysis we get $v \propto \sqrt{\frac{LT}{m}}$. A more accurate derivation will show that the constant of proportionality is 1, which would be the simplest guess. The lowest frequency on the string has a wavelength of $2L$, because the wave has to have nodes at the ends of the string. The tension is given by $T = ES\Delta L/L$, where $\Delta L$ is the change in length of the string due to the tension and $S$ is the area of the cross section of the string. Putting it all together:
$$f = \frac{\sqrt{\frac{LT}{m}}}{2L} = \frac{\sqrt{\frac{LES\Delta L/L}{\rho S L}}}{2L} = \frac{\sqrt{\frac{E\Delta L/L}{\rho}}}{2L}.$$
Let's find $\frac{\Delta L}{L} = \frac{\rho}{E}(2Lf)^2 \approx 7.3 \times 10^{-3}$. When the temperature increases and the string stretches, the relative lengthening $\frac{\Delta L}{L}$ will decrease by $\alpha T$,
$$\frac{\Delta L}{L} \to \frac{\Delta L}{L} - \alpha T = \frac{\Delta L}{L}\left(1 - \frac{\alpha T}{\Delta L/L}\right) = \frac{\Delta L}{L}(1 - 3.3 \times 10^{-2}).$$
This proportional change is larger than the changes in the other factors (the lengths get scaled by $(1 + \alpha\Delta T)$), which we can ignore. We get $f = f_0\sqrt{1 - 3.3 \times 10^{-2}} \approx 325$ Hz. This is also a significant change when the instruments are playing together.

ii) For the tubular bells and for the guitar the frequency is determined by the properties and the speed of sound of the metal and therefore doesn't change in the heliox. For the pipe organ, the sound is generated directly by the vibrating air column in the pipe and changing the air to heliox will change the frequency. The wavelength is determined by the length of the pipe and since the frequency is $f = \frac{v}{\lambda}$, it will change proportionally with the speed of sound, $f = 1.7 \cdot f_0 \approx 561$ Hz. This is a very significant change.

**Topic:** [[Oscillations & Waves]], [[Thermodynamics]], [[Elasticity & Materials]]
**Metodi:** [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Wave Equation (metodo)|Wave Equation]], [[Small-Angle Approximation (metodo)|Small-Angle Approximation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.1

## Problema 4

4. Dimmer
i) Denote $\omega = 2\pi f$. Adding an imaginary component to the voltages $u = Ue^{j\omega t}$ and $u_C = U_C e^{j(\omega t + \phi)}$ (with $j$ being the imaginary unit), there is a relation $u_C = u z_C/(R + z_C)$, where the capacitor's impedance $z_C = 1/(j\omega C)$. Calculating, we get
$$k \equiv z_C/(R + z_C) = 1/(j\omega RC + 1) = 1/\left[\sqrt{1 + (\omega RC)^2} \times e^{j\arctan(\omega RC)}\right].$$
Therefore $U_C = U|k| = U/\sqrt{1 + (2\pi f RC)^2}$ and $\phi = \arg k = -\arctan(2\pi f RC)$. (The answers could also be obtained by analyzing a vector diagram.)

ii) The diac starts to conduct when the voltage on the capacitor rises to $U_b$. This voltage is then applied to the series connection of $R_t$ and the diac, whose voltage has dropped to $U_d$. Therefore the current through the diac is $(U_b - U_d)/R_t$ and the inequality is $R_t I_t < U_b - U_d$.

iii) At $t_0$, the voltage on the capacitor becomes larger than $U_b$. Thus, $U_C\sin(2\pi f t_0 + \phi) = U_b$ and $t_0 = [\arcsin(U_b/U_C) - \phi]/(2\pi f)$.

iv) The lamp is lit at phase $2\pi f t_0$ and turned off at phase $\pi$. The power is proportional to the voltage squared, giving the ratio
$$r = \frac{\int_0^\pi \sin^2\alpha\,d\alpha}{\int_{2\pi f t_0}^\pi \sin^2\alpha\,d\alpha}.$$
Because $\int \sin^2\alpha\,d\alpha = \int\frac{1-\cos(2\alpha)}{2}\,d\alpha = \frac{\alpha}{2} - \frac{\sin(2\alpha)}{4}$, we get
$$r = \frac{\left(\frac{\pi}{2} - \frac{\sin(2\pi)}{4}\right) - \left(\frac{0}{2} - \frac{\sin(0)}{4}\right)}{\left(\frac{\pi}{2} - \frac{\sin(2\pi)}{4}\right) - \left(\frac{2\pi f t_0}{2} - \frac{\sin(4\pi f t_0)}{4}\right)} = \frac{1}{1 - 2f t_0 + \frac{\sin(4\pi f t_0)}{2\pi}}.$$

**Topic:** [[Circuits]], [[Oscillations & Waves]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Problema 5

5. Candy wrapper
The setup is as follows. First the candy wrapper is cut in half and then wound around the hexagonal pencil on both ends $A$ times and fixed tightly against the other pencil using the rubber bands. That way there is a gap of width $Ad$ between the two pencils. The laser light is directed through the gap between the two pencils and the resulting diffraction pattern is displayed on the screen (which is fixed vertically to the stand). We can keep the pencils and laser horizontal using the given clamps and adjust the height of the laser so it passes through the gap by placing sheets of paper below the laser. Because the pencil surface is rough the gap between the pencils varies. In order to diminish this effect we can put more layers of the candy wrapper between the pencils. The resulting experimental values are displayed on the table, where $N$ is the number of local maxima or minima on the screen, $a$ is the distance between the first and last measured maximum or minimum and $L$ is the distance from the screen to the pencils. Note that the central maximum is double-wide and we have to take it into account when counting minima (as it covers one minimum) and take it into account twice when counting maxima.

| $A$ | $N$ | $a$ (cm) | $L$ (cm) | $d$ ($\mu\text{m}$) |
|---|---|---|---|---|
| 12 | 21 | 2.4 | 70 | 20 |
| 12 | 14 | 1.6 | 63 | 29 |
| 8 | 9 | 1.3 | 60 | 23 |

Let $\theta$ be the angle of incidence of the laser light that lands on the screen. Then the difference between the angles for the different maxima or minima can be expressed as $\theta \approx \frac{a}{L}$ using the small angle approximation. The number of maxima or minima can be expressed using $A\theta d = N\lambda$. Then
$$d = \frac{N\lambda}{A\theta} = \frac{N\lambda L}{Aa}$$
Using the data from the table we get $d = 25\ \mu\text{m}$. The main contributing factor for uncertainty comes from the roughness of the pencil which can be estimated using the maximal and minimal values of measured wrapper thickness. Then $\Delta d \approx \frac{d_\text{max} - d_\text{min}}{2} = 4.5\ \mu\text{m}$.

6. Charge on a ring
i) The speed $v$ is just the magnitude of $r\dot\phi$, and energy conservation gives us that
$$v^2 + \frac{C}{|r - r_Q|} = \text{const.} = 2E/m,$$
where $C = \frac{Qq}{2\pi m\varepsilon_0}$. The value hence must equal the initial value. The figure indicates that $\phi(0) = 0$ and $\phi_Q = -\pi/2$, and we get:
$$v(\phi)^2 = v_0^2 + \frac{C}{\sqrt{r^2 + d^2}} - \frac{C}{\sqrt{r^2 + d^2 + 2rd\sin\phi}},$$
and $v(\phi)$ is just the square-root of this.

ii) The force $F_n$ from the ring is a constraint force, normal to the ring, and balances the other forces to give a total perpendicular force equal to the required centripetal force $F_c = mv^2/r$, directed inwards. The other force is the Coulomb repulsion (if $C > 0$) from $Q$, with a magnitude $F_Q = \frac{mC}{2(r^2+d^2+2rd\sin\phi)}$. Its perpendicular component acquires a factor of $\cos\alpha$, with $\alpha$ the angle between the local radius vector and the line $Qq$. The cosine theorem on the triangle defined by $q$, $Q$, and the ring's center yields $\cos\alpha = \frac{r+d\sin\phi}{\sqrt{r^2+d^2+2rd\sin\phi}}$. We have $\cos\alpha > 0$ consistently, the normal part of $F_Q$ pointing outwards everywhere (in the repulsive case). We get for the force from the ring
$$F_n = \frac{mv^2}{r} + \frac{mC(r + d\sin\phi)}{2(r^2 + d^2 + 2rd\sin\phi)^{3/2}},$$
with both terms directed inwards in the repulsive case of $C > 0$, else the second term will point outwards.

iii) When the particle has come to rest, the friction force parallel to the ring is automatically zero, but the other forces must balance. All normal forces are automatically balanced by the ring. We need to consider the longitudinal force, which can only come form the Coulomb force on $q$, and so its longitudinal component must vanish. This can only happen in two places, at the maximal and minimal distance from $Q$, i.e. at the top or bottom point. These points correspond to a minimum and maximum, respectively, of the electrostatic potential, and only the former would be stable for the repulsive case of $qQ > 0$ (else the opposite).

7. Helium
The heat required for vaporization comes from the heat energy of the liquid: $\lambda\,dm = mc(T)\,dT$. By separating the variables $m$ and $T$ and integrating, we get:
$$\lambda\int_{m_0}^m \frac{dm'}{m'} = \int_{T_0}^T c\,dT',$$
$$\lambda\ln\frac{m}{m_0} = \int_{T_0}^T c\,dT',$$
$$\frac{m}{m_0} = \exp\frac{\int_{T_0}^T c\,dT'}{\lambda}.$$
By numerically approximating the integral from the given graph, we get $\int_{T_0}^T c\,dT' \approx -5.2$ kJ $\text{kg}^{-1}$. Thus the fraction of liquid that was vaporized is
$$\frac{m_0 - m}{m_0} = 1 - \frac{m}{m_0} \approx 1 - \exp\frac{-5.2\ \text{kJ kg}^{-1}}{22\ \text{kJ kg}^{-1}} \approx 0.21.$$

8. Oscillations
i) The stiffness $k$ of the spring is found from the force balance $mg = kx$, thus $k = mg/x$. The period of oscillations for such a spring pendulum is $T = 2\pi\sqrt{m/k} \overset{!}{=} 2\pi\sqrt{l/g} \Rightarrow l = mg/k = x$.

ii) Apply Gauss's theorem to a sphere with radius $r$, concentric with the asteroid. By symmetry, the field strength (the gravitational acceleration) is constant on the sphere, thus the flux of this field strength equals the area of the sphere multiplied by field strength (with a minus sign, because the force is directed inwards). On the other hand, Gauss's theorem states that this flux equals $-4\pi G$ times the total mass inside the sphere. Formulaically (denote the asteroid's density by $\varrho$), $-4\pi r^2 g = -4\pi G \times \frac{4}{3}\pi r^3 \varrho$ and $g = \frac{4}{3}\pi G\varrho r = GMr/R^3$ (denoting the total mass by $M$ and the total radius by $R$). Whenever we have an attractive force that is proportional to the displacement, we have harmonic motion (like in a spring pendulum).

iii) Identifying the gravitational acceleration as the centripetal acceleration, $GM/R^2 = \omega_o^2 R \Rightarrow \omega_o^2 = GM/R^3$ (with $\omega_o$ being the orbital angular speed). The time of reaching the friend is $t_o = T_o/2 = \frac{2\pi}{\omega_o}/2 = \pi/\omega_o$. Through the hole, on the other hand, we have half a period of an effective spring pendulum with a "stiffness" $k = GMm/R^3$: namely, $t_h = T_h/2 = \frac{2\pi}{\omega_h}/2 = \pi/\omega_h$. From the "stiffness" and a general formula for a spring pendulum, $\omega_h^2 = k/m = GM/R^3 = \omega_o^2$. Therefore $t_o = t_h$ — the times are equal!

iv) As the motion after a bounce equals the time-reversed motion before the bounce, the period is twice the time of the first bounce ($t_b$). For a constant acceleration, $h = gt_b^2/2 \Rightarrow T = 2t_b = 2\sqrt{\frac{2h}{g}}$. On the Earth, $g \approx 10\ \text{m/s}^2$, therefore $T = 2\sqrt{\frac{2\times 50\ \text{cm}}{10\ \text{m/s}^2}} \approx 0.6$ s. This is not a harmonic motion, because the displacement is a quadratic function of time, not a sinusoid. Also, here the restoring force is not proportional to displacement.

9. Deflection on Falling
i) The Earth is rotating with angular velocity $\omega = \frac{2\pi}{T}$, where $T = 24$ h. The velocities at the top and bottom of the shaft are $v_t = \omega R$ and $v_b = \omega(R - h)$, where $R$ is radius of Earth. The difference of the velocities is thus $\Delta v = v_t - v_b = \omega h \approx 7.3$ mm/s.

ii) The time of free fall can be found from the relation $h = gt^2/2$, giving $t = \sqrt{2h/g}$. Thus, the horizontal displacement is simply $\Delta x = \Delta v\,t = \omega h t = \omega\sqrt{2h^3/g} \approx 33$ mm.

iii) There are at least three different approaches to this problem; one is using the angular momentum conservation law, second one is based on Kepler's laws (given later below), and the third one — which we don't consider here — is based on Coriolis force formula.

Consider the rotation speed $\omega'$ of the radius vector drwan from the falling body to the centre of Earth, and let us compare this speed with the rotation speed of Earth $\omega$. The angular momentum of the falling body is conserved, hence $\omega' r^2 = \omega R^2$. We can sub

**Topic:** [[Wave Optics]], [[Electrostatics]], [[Thermodynamics]]
**Metodi:** [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Small-Angle Approximation (metodo)|Small-Angle Approximation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Conservation Laws (metodo)|Conservation Laws]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2
