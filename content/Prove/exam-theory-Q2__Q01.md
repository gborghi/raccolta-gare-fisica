---
tipo: quesito
quesito_id: quesito_exam-theory-Q2__Q01
parent: prova_exam-theory-Q2
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/teorica/int25tit/exam-theory-Q2.pdf
cluster: Meccanica
quesito: '1'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/fluid-mechanics
  - topic/newtonian-mechanics
  - topic/thermodynamics
  - argomento/meccanica
---

# OII na Teorica — Problema 1

Cox's Timepiece (10 points)

In 1765, British clockmaker James Cox invented a clock whose only source of energy is the fluctuations in atmospheric pressure. Cox's clock used two vessels containing mercury. Changes in atmospheric pressure caused mercury to move between the vessels, and the two vessels to move relative to each other. This movement acted as an energy source for the actual clock.

We propose an analysis of this device. Throughout, we assume that

- the Earth's gravitational field $\vec{g} = -g\,\vec{u}_z$ is uniform with $g = 9.8\ \text{m}\cdot\text{s}^{-2}$ and $\vec{u}_z$ a unit vector;
- all liquids are incompressible and their density is denoted $\rho$;
- no surface tension effects will be considered;
- the variations of atmospheric pressure with altitude are neglected;
- the surrounding temperature $T_a$ is uniform and all transformations are isothermal.

Fig. 1. Artistic view of Cox's clock

### Part A - Pulling on a submerged tube

We first consider a bath of water that occupies the semi-infinite space $z \leq 0$. The air above it is at a pressure $P_a = P_0$. A cylindrical vertical tube of length $H = 1\ \text{m}$, cross-sectional area $S = 10\ \text{cm}^2$ and mass $m = 0.5\ \text{kg}$ is dipped into the bath. The bottom end of the tube is open, and the top end of the tube is closed. We denote $h$ the altitude of the top of the tube and $z_\ell$ that of the water inside the tube. The thickness of the tube walls is neglected.

Fig. 2. Sketch of the tube in different configurations

We start from the situation where the tube in Fig. 2 contains no gas and its top is at the bath level: in other words, $h = 0$ and $z_\ell = 0$ (case a). The tube is then slowly lifted until its bottom end reaches the bath level. The pulling force exerted on the tube is denoted $\vec{F} = F\,\vec{u}_z$.

**A.1** For the configuration shown in Fig. 2 (case b), express the pressure $P_w$ in the water at the top of the tube. Also express the force $\vec{F}$ necessary to maintain the tube at this position. Expressions must be written in terms of $P_0$, $\rho$, $m$, $S$, $h$, $g$ and $\vec{u}_z$. *(0.2pt)*

Three experiments are performed. In each, the tube is lifted from the initial state shown in Fig. 2(a) under the conditions specified in Table 1.

| Experiment | Liquid | $T_a$ ($^\circ$C) | $\rho$ ($\text{kg}\cdot\text{m}^{-3}$) | $P_\text{sat}$ (Pa) |
|---|---|---|---|---|
| 1 | Water | 20 | $1.00\times10^3$ | $2.34\times10^3$ |
| 2 | Water | 80 | $0.97\times10^3$ | $47.4\times10^3$ |
| 3 | Water | 99 | $0.96\times10^3$ | $99.8\times10^3$ |

Table 1. Experimental conditions and numerical values of physical quantities for each experiment ($P_\text{sat}$ designates the saturated vapour pressure of the pure fluid)

In each case, we study the evolution of the force $F$ that must be applied in order to maintain the tube in equilibrium at an altitude $h$, the external pressure being fixed at $P_a = P_0 = 1.000\times10^5$ Pa. Two different behaviours are possible.

Behaviour A: $F$ rises linearly from $F_0$ to $F_\text{max}$ as $h$ goes from $0$ to $H$.

Behaviour B: $F$ rises from $F_0$ to $F_\text{max}$ as $h$ goes from $0$ to $h^\star$, then stays constant at $F_\text{max}$ up to $H$.

**A.2** For each experiment, complete the table in the answer sheet to indicate the expected behaviour and the numerical values for $F_\text{max}$ and for $h^\star$ (when pertinent), where $F_\text{max}$ and $h^\star$ are defined in the figures illustrating the two behaviours. *(0.8pt)*

When we replace the water with liquid mercury (whose properties are given below), behaviour B is observed.

| Liquid | $T_a$ ($^\circ$C) | $\rho$ ($\text{kg}\cdot\text{m}^{-3}$) | $P_\text{sat}$ (Pa) |
|---|---|---|---|
| Mercury | 20 | $13.5\times10^3$ | 0.163 |

**A.3** Express the relative error, denoted $\varepsilon$, committed when we evaluate the maximal force $F_\text{max}$ neglecting $P_\text{sat}$ compared to $P_0$. Give the numerical value of $\varepsilon$. *(0.3pt)*

### Part B - Two-part barometric tube

From now on, we work with mercury (density $\rho = 13.5\times10^3\ \text{kg}\cdot\text{m}^{-3}$) at the ambient temperature $T_a = 20\ ^\circ\text{C}$ and we take $P_\text{sat} = 0$.

Let us consider a tube with a reservoir on top, modeled as two superposed cylinders of different dimensions, as shown in Fig. 3.

- the bottom part (still called the tube) has cross-sectional area $S_t$ and height $H_t = 80\ \text{cm}$;
- the top part (called the bulb) has cross-sectional area $S_b > S_t$ and height $H_b = 20\ \text{cm}$.

This two-part tube is dipped into a semi-infinite liquid bath.

Fig. 3. Sketch of the two-part barometric tube

As in Part A, the system is prepared such that the tube contains no air. We identify the vertical position of the tube by the altitude $h_t$ of the junction between the tube and the bulb. The height of the column of mercury is again denoted $z_\ell$. The force $\vec{F}$ that must be exerted to maintain the tube in equilibrium in the configuration shown in Fig. 3 can now be written as

$$\vec{F} = \left(m_\text{tb} + m_\text{add}\right)g\,\vec{u}_z \tag{1}$$

where $m_\text{tb}$ is the total mass of the two-part tube (when empty of mercury).

**B.1** On the answer sheet, color the area corresponding to the volume of liquid mercury that is responsible for the term $m_\text{add}$ appearing in equation (1). *(0.3pt)*

The mass $m_\text{add}$ depends both on the height $h_t$ and the atmospheric pressure $P_a$. For the next question, assume that the atmospheric pressure is fixed at $P_a = P_0 = 1.000\times10^5$ Pa. Starting from the situation where the system is completely submerged, the tube is slowly lifted until its base is flush with the liquid bath.

**B.2** Sketch the evolution of the mass $m_\text{add}$ as a function of $h_t$ for $h_t \in [-H_b, H_t]$. On the graph, provide the expression for the slopes of the different segments, as well as the $h_t$ analytical value of any angular points, in terms of $P_0$, $\rho$, $g$, $S_b$, $S_t$, $H_b$ and $H_t$. *(1.4pt)*

As the system is lifted while $P_a = P_0 = 10^5$ Pa, we stop when the free surface of the liquid is in the middle of the bulb. The value of $h_t$ is fixed and then we observe variations in the mass $m_\text{add}$ due to variations in the atmospheric pressure described by

$$P_a(t) = P_0 + P_1(t) \tag{2}$$

where $P_0$ designates the average value and $P_1$ is a perturbative term. We model $P_1$ by a periodic triangular function of amplitude $A = 5\times10^2$ Pa and period $\tau_1$ of 1 week.

Fig. 4. Simplified model of the perturbative term $P_1(t)$

**B.3** Given that $S_t = 5\ \text{cm}^2$ and $S_b = 200\ \text{cm}^2$, express the amplitude $\Delta m_\text{add}$ of the variations of the mass $m_\text{add}$ over time, then give its numerical value. *Assume that the liquid surface always stays in the bulb.* *(0.3pt)*

### Part C - Cox's timepiece

The real mechanism developed by Cox is complex (Fig. 5). We study a simplified version, depicted in Fig. 6, and described below.

- a cylindrical bottom cistern containing a mercury bath;
- a two-part barometric tube identical to that studied in part B, which is still completely emptied of any air, is dipped into the bath;
- the cistern and the two-part tube are each suspended by a cable. Both cables (assumed to be inextensible and of negligible mass) pass through a system of ideal pullies and finish attached to either side of the same mass $M$, which can slide on a horizontal surface;
- the total volume of liquid mercury contained in the system is $V_\ell = 5\ \text{L}$.

The height, cross-section and masses of each part are given in Table 2. The position of mass $M$ is referenced by the coordinate $x$ of its center of mass. We consider solid friction between the horizontal support and the mass $M$, without distinction between static and dynamic coefficients; the magnitude of this force when sliding occurs is denoted $F_s$.

Two stops limit the displacement of the mass $M$ such that $-X \leq x \leq X$ (with $X > 0$). Assume that the value of $X$ guarantees that

- the bottom of the two-part tube never touches the bottom of the cistern nor comes out of the liquid bath;
- the altitude $z_\ell$ of the mercury column is always in the upper bulb.

Fig. 5. Real Cox's timepiece (without mercury)

Fig. 6. Sketch of the system modeling the timepiece

| Reference | Name | Height | Cross section area | Empty mass |
|---|---|---|---|---|
| 1 | cistern | $H_c = 30\ \text{cm}$ | $S_c = 210\ \text{cm}^2$ | $m_c$ |
| 2 | tubular part of the barometric tube | $H_t = 80\ \text{cm}$ | $S_t = 5\ \text{cm}^2$ | total mass of the barometric tube: $m_\text{tb}$ |
| 2' | bulb of the barometric tube | $H_b = 20\ \text{cm}$ | $S_b = 200\ \text{cm}^2$ | |

Table 2. Dimensions and notations for the model system

The system evolves in contact with the atmosphere, whose pressure fluctuates as in Fig. 4 (still with amplitude $A = 5\times10^2$ Pa and period $\tau_1 = 1$ week). At the start $t = 0$, the mass $M$ is at rest at $x = 0$ and the tensions exerted by the two cables on either side of the mass $M$ are in balance while $P_1(0) = 0$. We define

$$\xi = \frac{S_b + S_c - S_t}{S_b S_c}\frac{F_s}{A} \simeq \frac{S_b + S_c}{S_b S_c}\frac{F_s}{A} \tag{3}$$

where the last expression uses that $S_t \ll S_b, S_c$ (which we will assume is valid until the end of the problem).

**C.1** Determine the threshold $\xi^\star$ such that $M$ remains indefinitely at rest when $\xi > \xi^\star$. *(1pt)*

For the next question only, suppose that the mass $M$ is temporarily blocked at $x = X$.

**C.2** Give an expression for the total tension force $\vec{T} = T\,\vec{u}_x$ acting on the mass $M$ due to the tension in two cables at this position, when $P_1 = 0$, in terms of $\rho$, $g$, $X$ and pertinent cross-sections. *(1pt)*

When $\xi < \xi^\star$, starting again from $x = 0$ and $P_1 = 0$, two different behaviours can be observed for $t \geq 0$. To distinguish them, we need to introduce another parameter

$$\lambda = \frac{2\left(S_b - S_t\right)}{S_b}\frac{\rho g X}{A} \simeq \frac{2\rho g X}{A} \tag{4}$$

**C.3** Complete the table in the answer sheet to indicate the condition under which each regime is obtained. Conditions must be expressed as inequalities on $\xi$ and/or $\lambda$. In addition, sketch the variations of $x(t)/X$ for $t \in [0, 3\tau_1]$ that are consistent with the variations of $P_1(t)/A$ already present. *Specification of remarkable points coordinates is not required.* *(2pt)*

In the real Cox's timepiece, energy provided by the mechanism is stored using a system of ratchets and used to raise a counterweight, like in a traditional clock. In the simplified model studied here, the energy recovered by the clock corresponds to the energy dissipated by the friction force exerted by the horizontal surface on the mass $M$. From now on, we assume that the system is dimensioned such that to work in the regime that allows the clock to recuperate energy. We also assume that the permanent regime is established. We denote $W$ the energy dissipated by the solid friction force during a period $\tau_1$, which can be expressed only in terms of $F_s$ and $X$.

All else equal, $F_s$ and $X$ can be adjusted to maximize the energy $W$; we denote $F_s^\star$ and $X^\star$ their respective values in the optimal situation.

**C.4** Considering $S_b \simeq S_c$ and $S_t \ll S_b$, determine the expressions for $F_s^\star$ and $X^\star$ as functions of $\rho$, $g$, $S_c$ and $A$. Express the corresponding maximum energy $W^\star$, then calculate its numerical value with $A = 5\times10^2$ Pa. *(1pt)*

We denote $W^\star_\text{pr}$ the work of atmospheric pressure forces received by the system in the optimal situation during a period $\tau_1$.

**C.5** Express $W^\star_\text{pr}$, then calculate the ratio $W^\star/W^\star_\text{pr}$. It could be useful to represent the evolution of the system in a $(P, V)$ diagram, where $V$ is the system's volume. *(1.7pt)*

Credits:
[1]: Bruno Vacaro;
[2]: Victoria and Albert Museum, London.

<!--fig:start-->
**p.1** — Veduta artistica dell'orologio di Cox
![[_attachments/exam-theory-Q2/exam-theory-Q2_p1_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.1** — Schema del tubo in diverse configurazioni
![[_attachments/exam-theory-Q2/exam-theory-Q2_p1_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.2** — Comportamenti A e B della forza
![[_attachments/exam-theory-Q2/exam-theory-Q2_p2_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.3** — Schema del tubo barometrico bipartito
![[_attachments/exam-theory-Q2/exam-theory-Q2_p3_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.4** — Termine perturbativo triangolare semplificato
![[_attachments/exam-theory-Q2/exam-theory-Q2_p4_f5.png]]
<!--fig:end-->

<!--fig:start-->
**p.5** — Orologio di Cox reale senza mercurio
![[_attachments/exam-theory-Q2/exam-theory-Q2_p5_f6.png]]
<!--fig:end-->

<!--fig:start-->
**p.5** — Schema del sistema che modella l'orologio
![[_attachments/exam-theory-Q2/exam-theory-Q2_p5_f7.png]]
<!--fig:end-->

**Topic:** [[Fluid Mechanics]], [[Newtonian Mechanics]], [[Thermodynamics]]
**Metodi:** [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Physical Modeling (metodo)|Physical Modeling]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.1
**Soluzione:** Soluzioni (PDF)
