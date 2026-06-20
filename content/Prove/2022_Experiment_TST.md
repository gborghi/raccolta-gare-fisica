---
tipo: prova
prova_id: prova_2022_Experiment_TST
competition: USA Physics Olympiad
comp_code: USA
country: USA
year: '2022'
level: ''
pdf: gare di altri paesi/USA/all/2022/2022_Experiment_TST.pdf
cluster: Meccanica
n_problemi: '2'
tags:
  - kg/prova
  - anno/2022
  - paese/USA
  - comp/USA
  - cluster/Meccanica
---

# USA 2022 — 2022_Experiment_TST.pdf

**Fonte:** `gare di altri paesi/USA/all/2022/2022_Experiment_TST.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]
**Soluzioni (stessa cartella):**  ·  ·  · 
## Problema 1

**4.1 Collision with Wall**

In this part, you will launch a disk with mass $M$, radius $R$ and moment of inertia $I = \beta M R^2$ towards a fixed, long vertical wall. You specify the initial speed and counter-clockwise angular velocity of the disk, and the angle of its initial velocity incident to the normal of the wall. The program will simulate the collision and return the final values of these parameters after collision.

| you input | program returns |
|---|---|
| initial speed (m/s) | final speed (m/s) |
| initial angular velocity (rad/s) | final angular velocity (rad/s) |
| incidence angle (°) | reflected angle (°) |

The parameters you specify must be in the following ranges:
- $0.5\text{ m/s} \leq \text{initial speed} \leq 10\text{ m/s}$
- $-50\text{ rad/s} \leq \text{initial angular velocity} \leq 50\text{ rad/s}$
- $0° \leq \text{incidence angle} \leq 75°$

To simulate imperfections in the disk-firing mechanism, the initial values you specify are always affected by the following uncertainties:
- Initial speed: relative uncertainty 5%, compounded with absolute uncertainty 0.05 m/s.
- Initial angular velocity: relative uncertainty 5%, compounded with absolute uncertainty 0.2 rad/s.
- Incidence angle: absolute uncertainty 1°.

**(a)** Find the coefficient of restitution $c$ between the disk and wall.

**(b)** Find the radius $R$ of the disk, and the values of $\mu$ and $\beta$.

<!--fig:start-->
![[_attachments/2022_Experiment_TST/2022_Experiment_TST_p3_f1.png]]
*Input/output table for disk-wall collision simulation*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Rotational Dynamics]], [[Conservation of Momentum]]
**Metodi:** [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Fonte:** Testo (PDF) — p.3

## Problema 2

**4.2 Collision with Disk**

In this part, you will launch a "probe" disk towards a hidden, second disk on the table, which begins at rest with its center at an unknown position $(x_0, y_0)$ (where $x_0 > 0$), with mass $M$ and radius $R$. The probe disk has radius $r = (0.250 \pm 0.001)\text{ m}$, but you may choose its mass $m$, initial position $(0, s)$, initial speed $v$, and the initial direction $\Theta$ of its velocity (as an angle relative to the horizontal). Both disks are frictionless, so that rotation is irrelevant. The program will simulate the collision, if it occurs, and return the final velocity (speed and angle) of the probe disk.

The parameters you choose must be in the following ranges:
- $1\text{ kg} \leq m \leq 5\text{ kg}$
- $-2\text{ m} \leq s \leq 2\text{ m}$
- $0.5\text{ m/s} \leq v \leq 10.0\text{ m/s}$
- $-90° \leq \Theta \leq 90°$

The parameters you specify are affected by the following uncertainties:
- $m$: relative 1%, plus absolute 0.05 kg.
- $s$: absolute 2 mm.
- $v$: relative 1%, plus absolute 0.05 m/s.
- $\Theta$: absolute 0.1°.

**(a)** Find the initial position $(x_0, y_0)$ of the hidden disk.

**(b)** Find the radius $R$ of the hidden disk.

**(c)** Find the mass $M$ of the hidden disk and the coefficient of restitution $c$ between the disks.

<!--fig:start-->
![[_attachments/2022_Experiment_TST/2022_Experiment_TST_p4_f2.png]]
*Probe disk launched toward hidden disk diagram*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Conservation of Momentum]], [[Conservation of Energy]]
**Metodi:** [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.4
