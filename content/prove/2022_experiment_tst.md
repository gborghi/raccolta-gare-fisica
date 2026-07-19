---
title: USA 2022
tipo: prova
tags:
  - kg/prova
  - anno/2022
  - paese/USA
  - comp/USA
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="2022_experiment_tst"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="USA 2022 — Quesito 1" data-tags="kg/prova,paese/USA,comp/USA,cluster/Meccanica,object/disk"></span>

<div class="qlang-switch" data-default="en"></div>



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
**Objects:** [[Disk (object)|Disk]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1RWx4h02EIBK2kzmrj3dVhLh37W2BXKAq/view)


<div class="qlang-split" data-lang="it"></div>

**4.1 Collisione con il muro**

In questa parte, lancierai un disco con massa $M$, raggio $R$ e momento di inerzia $I = \beta M R^2$ verso un muro fisso e lungo verticale. Specifichi la velocità iniziale e la velocità angolare contro il senso orario del disco, e l'angolo del suo incidente di velocità iniziale alla normalità del muro. Il programma simulerà la collisione e restituirà i valori finali di questi parametri dopo la collisione.

Il programma ritorna.
|---|---|
♬ velocità iniziale ♬ velocità finale ♬
♬ velocità angolare iniziale (rad/s) ♬ velocità angolare finale (rad/s) ♬
➡️Angolo di incidenza ➡️Angolo riflessi ➡️

I parametri che si specificano devono essere nelle seguenti fasce:
- $0.5\text{ m/s} \leq \text{initial speed} \leq 10\text{ m/s}$
- $-50\text{ rad/s} \leq \text{initial angular velocity} \leq 50\text{ rad/s}$
- $0° \leq \text{incidence angle} \leq 75°$

Per simulare le imperfezioni del meccanismo di scarica del disco, i valori iniziali che si specificano sono sempre influenzati dalle seguenti incertezze:
- velocità iniziale: incertezza relativa del 5%, composta da incertezza assoluta di 0,05 m/s.
- Velocità angolare iniziale: incertezza relativa del 5%, composta da incertezza assoluta di 0,2 rad/s.
- angolo di incidenza: incertezza assoluta 1°.

**(a) ** Trova il coefficiente di restituzione $c$ tra disco e muro.

**(b) ** Trova il raggio $R$ del disco e i valori di $\mu$ e $\beta$.

<!--fig:start-->
![[_attachments/2022_Experiment_TST/2022_Experiment_TST_p3_f1.png]]
*Tabella di input/output per simulazione di collisione tra parete del disco*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Rotational Dynamics]], [[Conservation of Momentum]]
**Metodi:** [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Disk (object)|Disk]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1RWx4h02EIBK2kzmrj3dVhLh37W2BXKAq/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="USA 2022 — Quesito 2" data-tags="kg/prova,paese/USA,comp/USA,cluster/Meccanica,object/disk"></span>

<div class="qlang-switch" data-default="en"></div>



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
**Objects:** [[Disk (object)|Disk]]
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RWx4h02EIBK2kzmrj3dVhLh37W2BXKAq/view)


<div class="qlang-split" data-lang="it"></div>

**4.2 Collisione con disco**

In questa parte, si lancia un disco "sonda" verso un disco nascosto, secondo sulla tavola, che inizia a riposo con il suo centro in una posizione sconosciuta $(x_0, y_0)$ (dove $x_0 > 0$), con massa $M$ e raggio $R$. Il disco di sonda ha un raggio $r = (0.250 \pm 0.001)\text{ m}$, ma è possibile scegliere la sua massa $m$, la sua posizione iniziale $(0, s)$, la sua velocità iniziale $v$ e la sua direzione iniziale $\Theta$ (come angolo relativo all'orizzontale). Entrambi i dischi sono senza attrito, quindi la rotazione è irrilevante. Il programma simulerà la collisione, se si verifica, e restituirà la velocità finale (velocità e angolo) del disco della sonda.

I parametri che si scelgono devono essere nelle seguenti fasce:
- $1\text{ kg} \leq m \leq 5\text{ kg}$
- $-2\text{ m} \leq s \leq 2\text{ m}$
- $0.5\text{ m/s} \leq v \leq 10.0\text{ m/s}$
- $-90° \leq \Theta \leq 90°$

I parametri che specifica sono influenzati dalle seguenti incertezze:
- $m$: relativo 1%, più assoluto 0,05 kg.
- $s$: 2 mm assoluti.
- $v$: relativo 1%, più assoluto 0,05 m/s.
- $\Theta$: assoluto 0.1°.

**(a) ** Trova la posizione iniziale $(x_0, y_0)$ del disco nascosto.

**(b) ** Trova il raggio $R$ del disco nascosto.

**(c) ** Trova la massa $M$ del disco nascosto e il coefficiente di restituzione $c$ tra i dischi.

<!--fig:start-->
![[_attachments/2022_Experiment_TST/2022_Experiment_TST_p4_f2.png]]
*Il disco di prova è lanciato verso il diagramma di disco nascosto*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Conservation of Momentum]], [[Conservation of Energy]]
**Metodi:** [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Disk (object)|Disk]]
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RWx4h02EIBK2kzmrj3dVhLh37W2BXKAq/view)
