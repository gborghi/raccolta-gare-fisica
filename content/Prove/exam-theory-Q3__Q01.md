---
tipo: quesito
quesito_id: quesito_exam-theory-Q3__Q01
parent: prova_exam-theory-Q3
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/teorica/int25tit/exam-theory-Q3.pdf
cluster: Meccanica
quesito: '1'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/fluid-mechanics
  - topic/thermodynamics
  - topic/oscillations-e-waves
  - argomento/meccanica
---

# OII na Teorica — Problema 1

1. A glass filled with champagne.

Part A. Nucleation, growth and rise of bubbles

Immediately after opening a bottle of champagne at temperature $T_0 = 20\ ^\circ\text{C}$ , we fill a glass. The pressure in the liquid is $P_0$ and its temperature stays constant at $T_0$. The concentration $c_\ell$ of dissolved CO2 exceeds the equilibrium concentration and we study the nucleation of a CO2 bubble. We note $a$ its radius and $P_b$ its inner pressure.

A.1
Express the pressure $P_b$ in terms of $P_0$, $a$ and $\sigma$.
0.2pt

In the liquid, the concentration of dissolved CO2 depends on the distance to the bubble. At long distance we recover the value $c_\ell$ and we note $c_b$ the concentration close to the bubble surface. According to Henry's law, $c_b = k_H P_b$. We furthermore assume in all the problem that bubbles contain only CO2.
Since $c_\ell \neq c_b$, CO2 molecules diffuse from areas of high to low concentration. We assume also that any molecule from the liquid phase reaching the bubble surface is transferred to the vapour.

A.2
Express the critical radius $a_c$ above which a bubble is expected to grow in terms
of $P_0$, $\sigma$, $c_\ell$ and $c_0$ where $c_0 = k_H P_0$. Calculate numerically $a_c$ for $c_\ell = 4c_0$.
0.5pt

In practice, bubbles mainly grow from pre-existing gas cavities. Consider then a bubble with initial radius
$a_0 \approx 40\ \mu\text{m}$. The number of moles of CO2 transferred at the bubble's surface per unit area and time is noted
$j$. Two models are possible for $j$.
• model (1) $j = \dfrac{D}{a}(c_\ell - c_b)$ where $D$ is the diffusion coefficient of CO2 in the liquid.
• model (2) $j = K(c_\ell - c_b)$ where $K$ is a constant here.
Experimentally, the bubble radius $a(t)$ is found to depend on time as shown in Fig. 2. Here $c_\ell \approx 4c_0$, and since bubbles are large enough to be visible, the excess pressure due to surface tension can be neglected and $P_b \approx P_0$.

A.3
Express the number of CO2 moles in the bubble $n_c$ in terms of $a$, $P_0$, $T_0$ and ideal
gas constant $R$. Find $a(t)$ for both models. Indicate which model explains the
experimental results in Fig. 2. Depending on your answer, calculate numerically $K$ or $D$.
1.2pt

Fig. 2. Time evolution of CO2 bubble radius in a glass of champagne (adapted from [1]).
Eventually bubbles detach from the bottom of the glass and continue to grow while rising. Fig. 3. shows
a train of bubbles. The bubbles of the train have the same initial radius and are emitted at a constant
frequency $f_b = 20\ \text{Hz}$.
$z$, $\vec{u}_z$, $\vec{g}_0$, 1 mm
Fig. 3. A train of bubbles. The photo is rotated horizontally for the page layout (adapted from
[1]).
For the range of velocities studied here, the drag force $F$ on a bubble of radius $a$ moving at velocity $v$ in a
liquid of dynamic viscosity $\eta$ is given by Stokes' law $F = 6\pi\eta a v$. Measurements show that at any moment
in time, the bubble can be assumed to be travelling at its terminal velocity.

A.4
Give the expression of the main forces exerted on a vertically rising bubble.
Obtain the expression of $v(a)$. Give a numerical estimate of $\eta$ using $\rho_\ell$, $g_0$ and
quantities measured on Fig. 3.
0.8pt

The quasi-stationary growth of bubbles with rate $q_a = \dfrac{da}{dt}$ still applies during bubble rise.

A.5
Express the radius $a_{H_\ell}$ of a bubble reaching the free surface in terms of height
travelled $H_\ell$, growth rate $q_a = \dfrac{da}{dt}$, and any constants you may need. Assume
$a_{H_\ell} \gg a_0$ and $q_a$ constant, and give the numerical value of $a_{H_\ell}$ with $H_\ell = 10\ \text{cm}$
and $q_a$ corresponding to Fig. 2.
0.5pt

There are $N_b$ nucleation sites of bubbles. Assume that the bubbles are nucleated at a constant frequency
$f_b$ at the bottom of a glass of champagne (height $H_\ell$ for a volume $V_\ell$), with $a_0$ still negligible. Neglect
diffusion of CO2 at the free surface.

A.6
Write the differential equation for $c_\ell(t)$. Obtain from this equation the characteristic time $\tau$ for the decay of the concentration of dissolved CO2 in the liquid.
1.1pt

Part B. Acoustic emission of a bursting bubble

Small bubbles are nearly spherical as they reach the free surface. Once the liquid film separating the
bubble from the air thins out sufficiently, a circular hole of radius $r$ forms in the film and, driven by
surface tension, opens very quickly (Fig. 4. left). The hole opens at constant speed $v_f$ (Fig. 4. right). The
film outside the rim remains still, with constant thickness $h$.

Fig. 4. (Left) ($\alpha$) Bubble at the surface: (1) liquid, (2) air at pressure $P_0$ and (3), CO2 at pressure
$P_b$, ($\beta$) and ($\gamma$) retraction of the liquid film, where the rim is in dark blue, ($\delta$) bubble collapse.
(Right) Retraction of the liquid film at time $t$. Top: sketch of the pierced film seen from above.
Bottom: cross-section of the rim and the retracting film. During $dt$ the rim accumulates nearby
liquid (dotted).
Due to dissipative processes, only half of the difference of the surface energy between $t$ and $t+dt$ of the
rim and the accumulated liquid is transformed into kinetic energy. We further assume that the variation
of the surface of the rim is negligible compared to that of the film.

B.1
Express $v_f$ in terms of $\rho_\ell$, $\sigma$ and $h$.
1.1pt

Fig. 5. (Left) a Helmholtz resonator. (Right) a bubble as
an oscillator.
When the film bursts, it releases internal
pressure and emits a sound. We model
this acoustic emission by a Helmholtz resonator: a cavity open to the atmosphere
at $P_0$ through a bottleneck aperture of
area $S$ (Fig. 5. left). In the neck, a mass
$m_p$ makes small amplitude position oscillations due to the pressure forces it experiences as the gas in the cavity expands
or compresses adiabatically.
The gravity force on $m_p$ is negligible compared to
pressure forces. Let $V_0$ be the volume of
gas under the mass $m_p$ for $P = P_0$ as $z = 0$.

B.2
Express the frequency of oscillation $f_0$ of $m_p$. Hint: for $\varepsilon \ll 1$, $(1+\varepsilon)^\alpha \approx 1+\alpha\varepsilon$.
1.1pt

The Helmholtz model may be used for a bubble of radius $a$. $V_0$ is the volume of the closed bubble. From
litterature, the mass of the equivalent of the piston is $m_p = 8\rho_g r^3/3$ where $r$ is the radius of the circular
aperture and $\rho_g = 1.8\ \text{kg}\cdot\text{m}^{-3}$ is the density of the gas (Fig. 5. right). During the bursting process, $r$ goes
from 0 to $r_c$, given by $r_c = \dfrac{2}{\sqrt{3}} a^2 \dfrac{\rho_\ell g_0}{\sigma}$. At the same time, the frequency of emitted sound increases until
a maximum value of $40\ \text{kHz}$ and the bursting time is $t_b = 3\times10^{-2}$ ms.

B.3
Find the radius $a$ and the thickness $h$ of the champagne film separating the
bubble from the atmosphere.
1.1pt

Part C. Popping champagne

In a bottle, the total quantity of CO2 is $n_T = 0.2\ \text{mol}$, either dissolved in the volume $V_L = 750\ \text{mL}$ of liquid
champagne, or as a gas in the volume $V_G = 25\ \text{mL}$ under the cork (Fig. 6. left). $V_G$ contains only CO2.
The equilibrium between both CO2 phases follows Henry's Law. We suppose that the fast gaseous CO2
expansion when the bottle is opened, is adiabatic and reversible. Ambient temperature $T_0$ and pressure
$P_0 = 1\ \text{bar}$ are constant.

Fig. 6. Left: traditional bottleneck: (1) surrounding air, (2) cork stopper, (3) headspace, (4)
liquid champagne. Right: Two phenomena observed while opening the bottle at two different
temperatures (adapted from [2]).

C.1
Give the numerical value of the pressure $P_i$ of gaseous CO2 in the bottle for
$T_0 = 6\ ^\circ\text{C}$ and $T_0 = 20\ ^\circ\text{C}$.
0.4pt

Another step of champagne production (not described here) leads to the following values of $P_i$ that we
will use for the next questions: $P_i = 4.69\ \text{bar}$ at $T_0 = 6\ ^\circ\text{C}$ and $P_i = 7.45\ \text{bar}$ at $T_0 = 20\ ^\circ\text{C}$.
During bottle opening, two different phenomena can be observed, depending on $T_0$ (Fig. 6. right).
• either a blue fog appears, due to the formation of solid CO2 crystals (but water condensation is
inhibited);
• or a grey-white fog appears, due to water vapor condensation in the air surrounding the bottleneck.
In this latter case, there is no formation of CO2 solid crystals.
The saturated vapor pressure $P^{\text{CO2}}_{\text{sat}}$ for the CO2 solid/gas transition follows : $\log_{10}\left(\dfrac{P^{\text{CO2}}_{\text{sat}}}{P_0}\right) = A - \dfrac{B}{T+C}$ with
$T$ in K, $A = 6.81$, $B = 1.30\times10^3$ K and $C = -3.49$ K.

C.2
Give the numerical value $T_f$ of the CO2 gas at the end of the expansion, af

<!--fig:start-->
**p.1** — Bicchiere riempito di champagne
![[_attachments/exam-theory-Q3/exam-theory-Q3_p1_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.2** — Raggio della bolla di CO2 nel tempo
![[_attachments/exam-theory-Q3/exam-theory-Q3_p2_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.2** — Treno di bolle in salita
![[_attachments/exam-theory-Q3/exam-theory-Q3_p2_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.3** — Bolla che scoppia in superficie, calotta sferica
![[_attachments/exam-theory-Q3/exam-theory-Q3_p3_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.4** — Risonatore di Helmholtz
![[_attachments/exam-theory-Q3/exam-theory-Q3_p4_f5.png]]
<!--fig:end-->

**Topic:** [[Fluid Mechanics]], [[Thermodynamics]], [[Oscillations & Waves]]
**Metodi:** [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Differential Equations (metodo)|Differential Equations]], [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Continuity Equation (metodo)|Continuity Equation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.1
**Soluzione:** Soluzioni (PDF)
