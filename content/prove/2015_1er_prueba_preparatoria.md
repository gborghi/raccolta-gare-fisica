---
title: Argent 2015
tipo: prova
tags:
  - kg/prova
  - anno/2015
  - paese/Argentina
  - comp/Argent
---
<div class="atom-reader" data-prova="2015_1er_prueba_preparatoria"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Argent 2015 — Quesito 1" data-tags="kg/prova,paese/Argentina,comp/Argent,object/projectile"></span>

<div class="qlang-switch" data-default="es"></div>



Problema 1:
a.

Sistema de coordenada en la posición del barco enemigo con $x_M=2500$ m posición de la
montaña, $y_M=1800$ m altura de la montaña y $x_E=2800$ m posición de la costa este de la isla.
$\theta=45^{\circ}$ es el ángulo de disparo.

$$a_x= 0$$
$$a_y= -g= -10\ \text{m}\,\text{s}^{-2}$$

$$v_x(t) = v_0 \cos\theta = \frac{\sqrt{2}}{2} v_0 = 0.7071\,v_0$$
$$v_y(t) = v_0 \operatorname{sen}\theta -gt= \frac{\sqrt{2}}{2} v_0 -10\ \text{m}\,\text{s}^{-2}t= 0.7071\,v_0 -10\ \text{m}\,\text{s}^{-2}t$$

$$x(t) = v_0 \cos\theta\, t= \frac{\sqrt{2}}{2} v_0 t= 0.7071\,v_0 t$$
$$y(t) = v_0 \operatorname{sen}\theta\, t-\frac{1}{2} gt^2 = \frac{\sqrt{2}}{2} v_0 t-5\ \text{m}\,\text{s}^{-2}t^2 = 0.7071\,v_0 t-5\ \text{m}\,\text{s}^{-2}t^2$$

b.

Como $x= v_0\cos(\theta)t$ entonces,

$$t= \frac{x}{v_0\cos(\theta)}$$

Reemplazando $t$ en $y(t)$

$$y(x) = \tan\theta\, x-\frac{gx^2}{2v_0^2\cos(\theta)^2} = x-\frac{10\ \text{m}\,\text{s}^2}{v_0^2}x^2$$

c. Dado que $v_0 = 720$ km $\text{h}^{-1}$ = 200 m $\text{s}^{-1}$ entonces,

$$y(x) = x-2.5 \times 10^{-4}\ \text{m}^{-2}\, x^2$$

Para que el proyectil supere la montaña es necesario que la trayectoria cumpla que,

$$y_M> y(x_M)$$

Como $y(x_M) = 937.5$ m $< 1800$ m $= y_M$ el proyectil no supera la montaña y choca a una
altura (respecto del nivel del agua) de 937.5 m.

d. La velocidad mínima $v_\text{min}$ necesaria para que el proyectil es aquella en la cual la
trayectoria cumple,

$$y_M= x_M-\frac{g}{v_\text{min}^2}x_M^2$$

Despejando se obtiene que

$$v_\text{min}= \sqrt{\frac{gx_M^2}{x_M-y_M}} = 298.807\ \text{m}\,\text{s}^{-1}$$

e. La distancia más cercana a la orilla este a la cual un proyectil puede impactar está dado
por las raíces de la trayectoria obtenida utilizando la velocidad mínima determinada en el
punto anterior,

$$y(x) = x-\frac{g}{v_\text{min}^2}x^2 = x\left(1-\frac{g}{v_\text{min}^2}x\right) = x(1-1.12 \times 10^{-4}x)$$

Las raíces $x_1$ y $x_2$ son

$$x_1 = 0\ \text{m}$$
$$x_2 = 8928.571\ \text{m}$$

$x_1$ corresponde a la posición del barco enemigo y $x_2$ a la distancia a la cual el proyectil
impacta en el agua.
Entonces el rango de distancia medida desde la orilla este es,

$$[0;\, 6128.571]\ \text{m}$$


<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p2_f1.png]]
*barco, isola, montagna 1800m, traiettoria*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p15_f8.png]]
*sistema di coordinate per proiettile*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Projectile (object)|Projectile]]
**Fonte:** [Testo (PDF) — p.15](https://drive.google.com/file/d/1PP1RurRAc-dPxWGq0ro8-XcZjOLM_i45/view)


<div class="qlang-split" data-lang="it"></div>

Problema 1:
a.

Sistema di coordinate in posizione del navetto nemico con $x_M=2500$ m posizione della nave
montagna, $y_M=1800$ m altezza della montagna e $x_E=2800$ m posizione della costa orientale dell'isola.
$\theta=45^{\circ}$ è l'angolo di lancio.

$$a_x= 0$$
$$a_y= -g= -10\ \text{m}\,\text{s}^{-2}$$

$$v_x(t) = v_0 \cos\theta = \frac{\sqrt{2}}{2} v_0 = 0.7071\,v_0$$
$$v_y(t) = v_0 \operatorname{sen}\theta -gt= \frac{\sqrt{2}}{2} v_0 -10\ \text{m}\,\text{s}^{-2}t= 0.7071\,v_0 -10\ \text{m}\,\text{s}^{-2}t$$

$$x(t) = v_0 \cos\theta\, t= \frac{\sqrt{2}}{2} v_0 t= 0.7071\,v_0 t$$
$$y(t) = v_0 \operatorname{sen}\theta\, t-\frac{1}{2} gt^2 = \frac{\sqrt{2}}{2} v_0 t-5\ \text{m}\,\text{s}^{-2}t^2 = 0.7071\,v_0 t-5\ \text{m}\,\text{s}^{-2}t^2$$

b.

Como $x= v_0\cos(\theta)t$ entonces,

$$t= \frac{x}{v_0\cos(\theta)}$$

Sostituendo $t$ da $y(t)$

$$y(x) = \tan\theta\, x-\frac{gx^2}{2v_0^2\cos(\theta)^2} = x-\frac{10\ \text{m}\,\text{s}^2}{v_0^2}x^2$$

c. Poiché $v_0 = 720$ km $\text{h}^{-1}$ = 200 m $\text{s}^{-1}$ allora,

$$y(x) = x-2.5 \times 10^{-4}\ \text{m}^{-2}\, x^2$$

Per superare la montagna, il proiettile deve essere in orario che:

$$y_M> y(x_M)$$

Come $y(x_M) = 937.5$ m $< 1800$ m $= y_M$ il proiettile non supera la montagna e colpisce una
altezza (rispetto al livello dell'acqua) di 937,5 m.

d. La velocità minima $v_\text{min}$ necessaria per il proiettile è quella in cui il proiettile
percorso complesso,

$$y_M= x_M-\frac{g}{v_\text{min}^2}x_M^2$$

La chiusura ottiene che

$$v_\text{min}= \sqrt{\frac{gx_M^2}{x_M-y_M}} = 298.807\ \text{m}\,\text{s}^{-1}$$

e. La distanza più vicina alla costa orientale che un proiettile può colpire è data
per le radici del percorso ottenuto utilizzando la velocità minima determinata nel
punto precedente,

$$y(x) = x-\frac{g}{v_\text{min}^2}x^2 = x\left(1-\frac{g}{v_\text{min}^2}x\right) = x(1-1.12 \times 10^{-4}x)$$

Le radici $x_1$ e $x_2$ sono:

$$x_1 = 0\ \text{m}$$
$$x_2 = 8928.571\ \text{m}$$

$x_1$ corrisponde alla posizione della nave nemico e $x_2$ alla distanza a cui il proiettile
colpisce l'acqua.
Quindi il range di distanza misurato dalla riva orientale è,

$$[0;\, 6128.571]\ \text{m}$$


<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p2_f1.png]]
*barco, isola, montagna 1800m, traiettoria*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p15_f8.png]]
*sistema di coordinate per proiettile*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Projectile (object)|Projectile]]
**Fonte:** [Testo (PDF) — p.15](https://drive.google.com/file/d/1PP1RurRAc-dPxWGq0ro8-XcZjOLM_i45/view)

<div class="qlang-split" data-lang="en"></div>

Problem number one:
a.

Coordinate system in enemy ship position with $x_M=2500$ m position
mountain, $y_M=1800$ m mountain height and $x_E=2800$ m position of the east coast of the island.
$\theta=45^{\circ}$ is the angle of shooting.

$$a_x= 0$$
$$a_y= -g= -10\ \text{m}\,\text{s}^{-2}$$

$$v_x(t) = v_0 \cos\theta = \frac{\sqrt{2}}{2} v_0 = 0.7071\,v_0$$
$$v_y(t) = v_0 \operatorname{sen}\theta -gt= \frac{\sqrt{2}}{2} v_0 -10\ \text{m}\,\text{s}^{-2}t= 0.7071\,v_0 -10\ \text{m}\,\text{s}^{-2}t$$

$$x(t) = v_0 \cos\theta\, t= \frac{\sqrt{2}}{2} v_0 t= 0.7071\,v_0 t$$
$$y(t) = v_0 \operatorname{sen}\theta\, t-\frac{1}{2} gt^2 = \frac{\sqrt{2}}{2} v_0 t-5\ \text{m}\,\text{s}^{-2}t^2 = 0.7071\,v_0 t-5\ \text{m}\,\text{s}^{-2}t^2$$

b.

Como $x= v_0\cos(\theta)t$ entonces,

$$t= \frac{x}{v_0\cos(\theta)}$$

Substituting $t$ for $y(t)$

$$y(x) = \tan\theta\, x-\frac{gx^2}{2v_0^2\cos(\theta)^2} = x-\frac{10\ \text{m}\,\text{s}^2}{v_0^2}x^2$$

c. Since $v_0 = 720$ km $\text{h}^{-1}$ = 200 m $\text{s}^{-1}$ then,

$$y(x) = x-2.5 \times 10^{-4}\ \text{m}^{-2}\, x^2$$

For the projectile to overcome the mountain, the trajectory must meet the following criteria:

$$y_M> y(x_M)$$

As $y(x_M) = 937.5$ m $< 1800$ m $= y_M$ the projectile does not overrun the mountain and hits a
height (in respect of water level) of 937.5 m.

d. The minimum speed $v_\text{min}$ required for the projectile is that at which the projectile is
trajectory is fulfilled,

$$y_M= x_M-\frac{g}{v_\text{min}^2}x_M^2$$

Clearing you get that

$$v_\text{min}= \sqrt{\frac{gx_M^2}{x_M-y_M}} = 298.807\ \text{m}\,\text{s}^{-1}$$

e. The closest distance to the east bank to which a projectile can strike is given
The roots of the trajectory obtained using the minimum speed determined at the
previous point,

$$y(x) = x-\frac{g}{v_\text{min}^2}x^2 = x\left(1-\frac{g}{v_\text{min}^2}x\right) = x(1-1.12 \times 10^{-4}x)$$

The roots $x_1$ and $x_2$ are

$$x_1 = 0\ \text{m}$$
$$x_2 = 8928.571\ \text{m}$$

$x_1$ corresponds to the position of the enemy ship and $x_2$ to the distance at which the projectile is
It impacts the water.
So the range of distance measured from the east bank is,

$$[0;\, 6128.571]\ \text{m}$$


<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p2_f1.png]]
*barco, isola, montagna 1800m, traiettoria*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p15_f8.png]]
*sistema di coordinate per proiettile*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Projectile (object)|Projectile]]
**Fonte:** [Testo (PDF) — p.15](https://drive.google.com/file/d/1PP1RurRAc-dPxWGq0ro8-XcZjOLM_i45/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Argent 2015 — Quesito 2" data-tags="kg/prova,paese/Argentina,comp/Argent,object/block,object/rope-string,object/pulley,object/inclined-plane"></span>

<div class="qlang-switch" data-default="es"></div>



Problema 2:
a.

b.
Cuerpo 1.

$$\vec{T}_1 + \vec{P}_1 = m_1\vec{a}_1$$

Según el sistema de coordenada elegido para el cuerpo 1

$$T_1 -m_1g= -m_1a$$

Cuerpo 2.

$$\vec{T}_2 + \vec{P}_2 + \vec{F}_R + \vec{N} = m_2\vec{a}_2$$

Según el sistema de coordenada elegido para el cuerpo 2
En la dirección x)
$$T_2 -F_R-m_2g\sin 30 = m_2a$$
En la dirección y)
$$N-m_2g\cos 30 = 0$$

Como la cuerda no tiene masa y no hay fricción en las poleas,

$$T_1 = T_2 = T$$

c.
De la ecuación de movimiento del cuerpo 1

$$T= m_1(g-a) = 48\ \text{N}$$

d.
De la ecuación de movimiento en la dirección x) del cuerpo 2

$$F_R= T-m_2(a+ g\sin 30) = 20\ \text{N}$$

e. Como
$$F_R= \mu_d N$$

De la ecuación de movimiento en la dirección y) del cuerpo 2
$$N= m_2g\cos 30$$

Luego

$$\mu_d= \frac{F_R}{N}= \frac{T-m_2(a+ g\sin 30)}{m_2g\cos 30}= \frac{1}{\sqrt{3}}$$


<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p3_f2.png]]
*blocchi collegati da fune su piano inclinato 30°*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p13_f6.png]]
*diagramma corpo libero Cuerpo 1 (soluzione)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p13_f7.png]]
*diagramma corpo libero Cuerpo 2 (soluzione)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p17_f9.png]]
*diagramma corpo libero entrambi i blocchi*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Block (object)|Block]], [[Rope/String (object)|Rope/String]], [[Pulley (object)|Pulley]], [[Inclined Plane (object)|Inclined Plane]]
**Fonte:** [Testo (PDF) — p.17](https://drive.google.com/file/d/1PP1RurRAc-dPxWGq0ro8-XcZjOLM_i45/view)


<div class="qlang-split" data-lang="it"></div>

Il problema 2:
a.

b.
Corpo uno.

$$\vec{T}_1 + \vec{P}_1 = m_1\vec{a}_1$$

Secondo il sistema di coordinate scelto per il corpo 1

$$T_1 -m_1g= -m_1a$$

Corpo 2.

$$\vec{T}_2 + \vec{P}_2 + \vec{F}_R + \vec{N} = m_2\vec{a}_2$$

Secondo il sistema di coordinate scelto per il corpo 2
In direzione x)
$$T_2 -F_R-m_2g\sin 30 = m_2a$$
In indirizzo e)
$$N-m_2g\cos 30 = 0$$

Poiché la corda non ha massa e non c'è attrito nelle pollice,

$$T_1 = T_2 = T$$

c.
Della equazione di movimento del corpo 1

$$T= m_1(g-a) = 48\ \text{N}$$

d.
dell'equazione di movimento nella direzione x) del corpo 2

$$F_R= T-m_2(a+ g\sin 30) = 20\ \text{N}$$

e. Come
$$F_R= \mu_d N$$

dell'equazione di movimento in direzione y) del corpo 2
$$N= m_2g\cos 30$$

Poi

$$\mu_d= \frac{F_R}{N}= \frac{T-m_2(a+ g\sin 30)}{m_2g\cos 30}= \frac{1}{\sqrt{3}}$$


<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p3_f2.png]]
*blocchi collegati da fune il suo pianoforte inclinato 30°*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p13_f6.png]]
*diagrafo corpo libero Corpo 1 (soluzione) *
<!--fig:end-->
<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p13_f7.png]]
*diagrafo corpo libero Corpo 2 (soluzione) *
<!--fig:end-->
<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p17_f9.png]]
*diagrafo corpo libero entrambi i blocchi*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Block (object)|Block]], [[Rope/String (object)|Rope/String]], [[Pulley (object)|Pulley]], [[Inclined Plane (object)|Inclined Plane]]
**Fonte:** [Testo (PDF) — p.17](https://drive.google.com/file/d/1PP1RurRAc-dPxWGq0ro8-XcZjOLM_i45/view)

<div class="qlang-split" data-lang="en"></div>

Problem two:
a.

b.
Body one.

$$\vec{T}_1 + \vec{P}_1 = m_1\vec{a}_1$$

According to the coordinate system chosen for the body 1

$$T_1 -m_1g= -m_1a$$

Body two.

$$\vec{T}_2 + \vec{P}_2 + \vec{F}_R + \vec{N} = m_2\vec{a}_2$$

According to the coordinate system chosen for body 2
In the address x)
$$T_2 -F_R-m_2g\sin 30 = m_2a$$
In the address y)
$$N-m_2g\cos 30 = 0$$

Since the rope has no mass and no friction in the pulleys,

$$T_1 = T_2 = T$$

c.
From the equation of motion of the body 1

$$T= m_1(g-a) = 48\ \text{N}$$

d.
Of the equation of motion in the direction x) of the body 2

$$F_R= T-m_2(a+ g\sin 30) = 20\ \text{N}$$

e. As
$$F_R= \mu_d N$$

Of the equation of motion in the direction y) of the body 2
$$N= m_2g\cos 30$$

Then

$$\mu_d= \frac{F_R}{N}= \frac{T-m_2(a+ g\sin 30)}{m_2g\cos 30}= \frac{1}{\sqrt{3}}$$


<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p3_f2.png]]
The following is the list of the instruments used in the production of the instrument:
<!--fig:end-->
<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p13_f6.png]]
The following table shows the results of the evaluation of the results of the evaluation:
<!--fig:end-->
<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p13_f7.png]]
The following table shows the results of the evaluation of the results of the evaluation:
<!--fig:end-->
<!--fig:start-->
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p17_f9.png]]
The Commission has also adopted a draft decision on the implementation of the Community's budget.
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Block (object)|Block]], [[Rope/String (object)|Rope/String]], [[Pulley (object)|Pulley]], [[Inclined Plane (object)|Inclined Plane]]
**Fonte:** [Testo (PDF) — p.17](https://drive.google.com/file/d/1PP1RurRAc-dPxWGq0ro8-XcZjOLM_i45/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Argent 2015 — Quesito 3" data-tags="kg/prova,paese/Argentina,comp/Argent,object/block,object/spring"></span>

<div class="qlang-switch" data-default="es"></div>



Problema 3:

a. La energía inicial del sistema es

$$E_0 = \frac{1}{2} mv^2 + mgh_1 = 4\,\text{J}$$

Por conservación de energía
$$E_A= \frac{1}{2} mv_A^2 + mgh_2 = 4\,\text{J}$$

$$v_A= 5\ \text{m}\,\text{s}^{-1}$$

b. Por conservación de energía, cuando el resorte se comprimió totalmente se debe cumplir
que
$$E_R= \frac{1}{2} k_1x^2 + mgh_2 = 4\,\text{J}$$

$$x= 0.2\ \text{m}$$

c. Por conservación de energía, la velocidad del bloque en la loma tiene igual magnitud
pero dirección contraria a la velocidad inicial,

$$v= 4\ \text{m}\,\text{s}^{-1}$$

d. Por conservación de energía hasta el punto B

$$E_B= \frac{1}{2} mv_B^2 = 4\,\text{J}$$

$$v_B= 6.325\ \text{m}\,\text{s}^{-1}$$

Entre los puntos B y C hay roce dinámico por lo cual no se conserva la energía en ese
tramo. El módulo de la fuerza de roce es,

$$F_R= \mu_d N= \mu_d mg$$

La perdida de energía es,

$$W= -F_R L= -\mu_d mgL= -1.3\,\text{J}$$

$$W= E_C-E_B= \frac{1}{2} mv_C^2 -4\,\text{J}$$

$$v_C= 5.196\ \text{m}\,\text{s}^{-1}$$

e.
La energía se conserva desde C hasta el resorte y desde el resorte a C. Al pasar por el tramo
entre los puntos C y B, el bloque pierde la misma energía -1.3J que cuando recorrió el
tramo la primera vez, por lo cual en el punto B la energía del bloque es,

$$E_B= 4\,\text{J}-1.3\,\text{J}-1.3\,\text{J}= 1.4\,\text{J}$$

La mínima energía para alcanzar la elevación $h_1$ es,

$$E_\text{min}= mgh_1 = 2.4\,\text{J}$$

Por lo tanto, el bloque no alcanza la elevación $h_1$. La altura $h$ a la cual llega el bloque es,

$$E_B= mgh= 1.4\,\text{J}$$

$$h= 0.7\ \text{m}$$

Prueba Experimental
Hoja de respuestas.

Puntos 1 a 7. Por cada medición: 1.50 ptos.

| #Medición | D [cm] | d [cm] | D' [cm] | d' [cm] | M [g] |
|---|---|---|---|---|---|
| 1 | 1.8 | 12.2 | 4.1 | 9.9 | 18.7 |
| 2 | 1.6 | 10.4 | 3.5 | 8.5 | 19.4 |
| 3 | 1.7 | 11.3 | 3.8 | 9.2 | 19.0 |
| 4 | 1.5 | 9.5 | 3.3 | 7.7 | 18.5 |
| 5 | 1.4 | 8.6 | 3.0 | 7.0 | 18.8 |
| 6 | 1.2 | 7.8 | 2.7 | 6.3 | 18.2 |
| 7 | 1.1 | 6.9 | 2.4 | 5.6 | 18.6 |
| 8 | 1.0 | 6.0 | 2.1 | 4.9 | 19.1 |
| 9 | 0.8 | 5.2 | 1.8 | 4.2 | 18.2 |
| 10 | 0.7 | 4.3 | 1.5 | 3.5 | 18.8 |

Punto 8: 5.00 ptos.
$$M= \bar{M} \pm \frac{s}{\sqrt{10}}= 18.7 \pm 0.1\ \text{g}$$

SOLUCION

| #Medición | D [cm] | d [cm] | D' [cm] | d' [cm] | M [g] |
|---|---|---|---|---|---|
| 1 | 1.8 | 12.2 | 4.1 | 9.9 | 18.7 |
| 2 | 1.6 | 10.4 | 3.5 | 8.5 | 19.4 |
| 3 | 1.7 | 11.3 | 3.8 | 9.2 | 19.0 |
| 4 | 1.5 | 9.5 | 3.3 | 7.7 | 18.5 |
| 5 | 1.4 | 8.6 | 3.0 | 7.0 | 18.8 |
| 6 | 1.2 | 7.8 | 2.7 | 6.3 | 18.2 |
| 7 | 1.1 | 6.9 | 2.4 | 5.6 | 18.6 |
| 8 | 1.0 | 6.0 | 2.1 | 4.9 | 19.1 |
| 9 | 0.8 | 5.2 | 1.8 | 4.2 | 18.2 |
| 10 | 0.7 | 4.3 | 1.5 | 3.5 | 18.8 |

Las distancias se miden con 1 mm de incertidumbre y la masa de agua con 0.2 g si
la jeringa tiene 5 subdivisiones por cada $\text{cm}^3$

$$\bar{M} = \sum_i M_i= 18.73\ \text{g}$$

$$s= \sqrt{\frac{\sum_i(M_i-\bar{M})^2}{N}}= 0.36 \quad \text{con } N = 10$$

$$M= \bar{M} \pm \frac{s}{\sqrt{10}}= 18.7 \pm 0.1\ \text{g}$$

Otra opción es asociar una incertidumbre igual al ancho del intervalo de masas
determinadas dividido 2. En este caso:

$$\varepsilon= \frac{M_\text{max}-M_\text{min}}{2}= 0.6\ \text{g}$$

$$M= 18.7 \pm 0.6\ \text{g}$$


<!--fig:start-->
*blocco su loma con due molle R1 e R2*
<!--fig:end-->

**Topic:** [[Conservation of Energy]], [[Newtonian Mechanics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Statistical Averaging (metodo)|Statistical Averaging]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Block (object)|Block]], [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.19](https://drive.google.com/file/d/1PP1RurRAc-dPxWGq0ro8-XcZjOLM_i45/view)

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

<!--fig:start-->
**p.9** — bilancia a bracci con pesi (Figura 1)
<!--fig:end-->

<!--fig:start-->
**p.9** — regola su bordo tavolo con tapita (Figura 2)
<!--fig:end-->


<div class="qlang-split" data-lang="it"></div>

Problema 3:

a. L'energia iniziale del sistema è

$$E_0 = \frac{1}{2} mv^2 + mgh_1 = 4\,\text{J}$$

Per la conservazione dell'energia
$$E_A= \frac{1}{2} mv_A^2 + mgh_2 = 4\,\text{J}$$

$$v_A= 5\ \text{m}\,\text{s}^{-1}$$

b. Per conservare l'energia, quando la risorsa è stata completamente compressa deve essere rispettata
che
$$E_R= \frac{1}{2} k_1x^2 + mgh_2 = 4\,\text{J}$$

$$x= 0.2\ \text{m}$$

c. Per conservare l'energia, la velocità del blocco nella loma è uguale
ma in direzione contraria alla velocità iniziale,

$$v= 4\ \text{m}\,\text{s}^{-1}$$

d. Per conservazione dell'energia fino al punto B

$$E_B= \frac{1}{2} mv_B^2 = 4\,\text{J}$$

$$v_B= 6.325\ \text{m}\,\text{s}^{-1}$$

Tra i punti B e C c'è un rottura dinamico che non consente di conservare l'energia in quel punto.
- La trama. Il modulo della forza di rottura è,

$$F_R= \mu_d N= \mu_d mg$$

La perdita di energia è,

$$W= -F_R L= -\mu_d mgL= -1.3\,\text{J}$$

$$W= E_C-E_B= \frac{1}{2} mv_C^2 -4\,\text{J}$$

$$v_C= 5.196\ \text{m}\,\text{s}^{-1}$$

e.
L'energia viene conservata da C fino alla primavera e dalla primavera fino a C. Passando per il tratto
Tra i punti C e B, il blocco perde la stessa energia -1.3J che quando ha percorso il
la prima volta, quindi al punto B l'energia del blocco è,

$$E_B= 4\,\text{J}-1.3\,\text{J}-1.3\,\text{J}= 1.4\,\text{J}$$

L'energia minima per raggiungere l'elevazione $h_1$ è:

$$E_\text{min}= mgh_1 = 2.4\,\text{J}$$

Il blocco non raggiunge quindi l'elevazione $h_1$. L'altezza $h$ a cui raggiunge il blocco è,

$$E_B= mgh= 1.4\,\text{J}$$

$$h= 0.7\ \text{m}$$

Prova sperimentale
Pagina di risposte.

Punti da uno a sette. Per ogni misurazione: 1,50 p.

#Medizione #D [cm] #D [cm] #D [cm] #D [cm] #D [cm] #M [g]
|---|---|---|---|---|---|
| 1 | 1.8 | 12.2 | 4.1 | 9.9 | 18.7 |
| 2 | 1.6 | 10.4 | 3.5 | 8.5 | 19.4 |
| 3 | 1.7 | 11.3 | 3.8 | 9.2 | 19.0 |
| 4 | 1.5 | 9.5 | 3.3 | 7.7 | 18.5 |
| 5 | 1.4 | 8.6 | 3.0 | 7.0 | 18.8 |
| 6 | 1.2 | 7.8 | 2.7 | 6.3 | 18.2 |
| 7 | 1.1 | 6.9 | 2.4 | 5.6 | 18.6 |
| 8 | 1.0 | 6.0 | 2.1 | 4.9 | 19.1 |
| 9 | 0.8 | 5.2 | 1.8 | 4.2 | 18.2 |
| 10 | 0.7 | 4.3 | 1.5 | 3.5 | 18.8 |

Sotto il punto:
$$M= \bar{M} \pm \frac{s}{\sqrt{10}}= 18.7 \pm 0.1\ \text{g}$$

SOLUCIONE

#Medizione #D [cm] #D [cm] #D [cm] #D [cm] #D [cm] #M [g]
|---|---|---|---|---|---|
| 1 | 1.8 | 12.2 | 4.1 | 9.9 | 18.7 |
| 2 | 1.6 | 10.4 | 3.5 | 8.5 | 19.4 |
| 3 | 1.7 | 11.3 | 3.8 | 9.2 | 19.0 |
| 4 | 1.5 | 9.5 | 3.3 | 7.7 | 18.5 |
| 5 | 1.4 | 8.6 | 3.0 | 7.0 | 18.8 |
| 6 | 1.2 | 7.8 | 2.7 | 6.3 | 18.2 |
| 7 | 1.1 | 6.9 | 2.4 | 5.6 | 18.6 |
| 8 | 1.0 | 6.0 | 2.1 | 4.9 | 19.1 |
| 9 | 0.8 | 5.2 | 1.8 | 4.2 | 18.2 |
| 10 | 0.7 | 4.3 | 1.5 | 3.5 | 18.8 |

Le distanze sono misurate con 1 mm di incertezza e la massa dell'acqua con 0,2 g se:
la siringa ha 5 suddivisioni per ogni $\text{cm}^3$

$$\bar{M} = \sum_i M_i= 18.73\ \text{g}$$

$$s= \sqrt{\frac{\sum_i(M_i-\bar{M})^2}{N}}= 0.36 \quad \text{con } N = 10$$

$$M= \bar{M} \pm \frac{s}{\sqrt{10}}= 18.7 \pm 0.1\ \text{g}$$

Un'altra opzione è associare un'incertezza uguale alla larghezza dell'intervallo di massa
- di cui al punto 2. In questo caso:

$$\varepsilon= \frac{M_\text{max}-M_\text{min}}{2}= 0.6\ \text{g}$$

$$M= 18.7 \pm 0.6\ \text{g}$$


<!--fig:start-->
*blocco la sua loma con due molle R1 e R2*
<!--fig:end-->

**Topic:** [[Conservation of Energy]], [[Newtonian Mechanics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Statistical Averaging (metodo)|Statistical Averaging]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Block (object)|Block]], [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.19](https://drive.google.com/file/d/1PP1RurRAc-dPxWGq0ro8-XcZjOLM_i45/view)

## Figurare

## Figurare

## Figurare

## Figurare

## Figurare

## Figurare

## Figurare

## Figurare

## Figurare

## Figurare

## Figurare

## Figurare

## Figurare

## Figurare

<!--fig:start-->
**p.9**  bilanciamento a bracci con peso (Figura 1)
<!--fig:end-->

<!--fig:start-->
**p.9 **  regola il bordo della tavola con tappeto (Figura 2)
<!--fig:end-->

<div class="qlang-split" data-lang="en"></div>

Problem three:

a. The initial energy of the system is

$$E_0 = \frac{1}{2} mv^2 + mgh_1 = 4\,\text{J}$$

Energy conservation
$$E_A= \frac{1}{2} mv_A^2 + mgh_2 = 4\,\text{J}$$

$$v_A= 5\ \text{m}\,\text{s}^{-1}$$

b. For energy conservation, when the spring is fully compressed it must be met
which
$$E_R= \frac{1}{2} k_1x^2 + mgh_2 = 4\,\text{J}$$

$$x= 0.2\ \text{m}$$

c. For energy conservation, the block velocity in the loop is equal to the magnitude
but direction contrary to the initial speed,

$$v= 4\ \text{m}\,\text{s}^{-1}$$

d. By energy conservation up to point B

$$E_B= \frac{1}{2} mv_B^2 = 4\,\text{J}$$

$$v_B= 6.325\ \text{m}\,\text{s}^{-1}$$

Between points B and C there is dynamic friction so no energy is conserved in that
I'll take the stretch. The modulus of bridging force is,

$$F_R= \mu_d N= \mu_d mg$$

The energy loss is,

$$W= -F_R L= -\mu_d mgL= -1.3\,\text{J}$$

$$W= E_C-E_B= \frac{1}{2} mv_C^2 -4\,\text{J}$$

$$v_C= 5.196\ \text{m}\,\text{s}^{-1}$$

e.
Energy is conserved from C to spring and from spring to C. Passing the stretch
Between points C and B, the block loses the same energy -1.3J as when it traveled the
So at point B the energy of the block is,

$$E_B= 4\,\text{J}-1.3\,\text{J}-1.3\,\text{J}= 1.4\,\text{J}$$

The minimum energy to reach the $h_1$ elevation is,

$$E_\text{min}= mgh_1 = 2.4\,\text{J}$$

Therefore, the block does not reach the $h_1$ elevation. The height $h$ at which the block reaches is,

$$E_B= mgh= 1.4\,\text{J}$$

$$h= 0.7\ \text{m}$$

The test shall be carried out in accordance with the following conditions:
Answer sheet.

Scores are 1-7. For each measurement: 1.50 pts.

♪ ♪ Measurement ♪ ♪ D [cm] ♪ D [cm] ♪ D [cm] ♪ M [g] ♪
|---|---|---|---|---|---|
| 1 | 1.8 | 12.2 | 4.1 | 9.9 | 18.7 |
| 2 | 1.6 | 10.4 | 3.5 | 8.5 | 19.4 |
| 3 | 1.7 | 11.3 | 3.8 | 9.2 | 19.0 |
| 4 | 1.5 | 9.5 | 3.3 | 7.7 | 18.5 |
| 5 | 1.4 | 8.6 | 3.0 | 7.0 | 18.8 |
| 6 | 1.2 | 7.8 | 2.7 | 6.3 | 18.2 |
| 7 | 1.1 | 6.9 | 2.4 | 5.6 | 18.6 |
| 8 | 1.0 | 6.0 | 2.1 | 4.9 | 19.1 |
| 9 | 0.8 | 5.2 | 1.8 | 4.2 | 18.2 |
| 10 | 0.7 | 4.3 | 1.5 | 3.5 | 18.8 |

The point is 8:5.00 p.m.
$$M= \bar{M} \pm \frac{s}{\sqrt{10}}= 18.7 \pm 0.1\ \text{g}$$

The Commission

♪ ♪ Measurement ♪ ♪ D [cm] ♪ D [cm] ♪ D [cm] ♪ M [g] ♪
|---|---|---|---|---|---|
| 1 | 1.8 | 12.2 | 4.1 | 9.9 | 18.7 |
| 2 | 1.6 | 10.4 | 3.5 | 8.5 | 19.4 |
| 3 | 1.7 | 11.3 | 3.8 | 9.2 | 19.0 |
| 4 | 1.5 | 9.5 | 3.3 | 7.7 | 18.5 |
| 5 | 1.4 | 8.6 | 3.0 | 7.0 | 18.8 |
| 6 | 1.2 | 7.8 | 2.7 | 6.3 | 18.2 |
| 7 | 1.1 | 6.9 | 2.4 | 5.6 | 18.6 |
| 8 | 1.0 | 6.0 | 2.1 | 4.9 | 19.1 |
| 9 | 0.8 | 5.2 | 1.8 | 4.2 | 18.2 |
| 10 | 0.7 | 4.3 | 1.5 | 3.5 | 18.8 |

Distances are measured with 1 mm of uncertainty and the water mass with 0.2 g if
the syringe has 5 subdivisions for each $\text{cm}^3$

$$\bar{M} = \sum_i M_i= 18.73\ \text{g}$$

$$s= \sqrt{\frac{\sum_i(M_i-\bar{M})^2}{N}}= 0.36 \quad \text{con } N = 10$$

$$M= \bar{M} \pm \frac{s}{\sqrt{10}}= 18.7 \pm 0.1\ \text{g}$$

Another option is to associate an uncertainty equal to the width of the mass interval.
the following: In this case:

$$\varepsilon= \frac{M_\text{max}-M_\text{min}}{2}= 0.6\ \text{g}$$

$$M= 18.7 \pm 0.6\ \text{g}$$


<!--fig:start-->
*block its rim with two R1 and R2 springs*
<!--fig:end-->

**Topic:** [[Conservation of Energy]], [[Newtonian Mechanics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Statistical Averaging (metodo)|Statistical Averaging]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Block (object)|Block]], [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.19](https://drive.google.com/file/d/1PP1RurRAc-dPxWGq0ro8-XcZjOLM_i45/view)

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

<!--fig:start-->
The weight of the weighted arm balances (Figure 1)
<!--fig:end-->

<!--fig:start-->
The table edge shall be adjusted with a rug (Figure 2)
<!--fig:end-->
