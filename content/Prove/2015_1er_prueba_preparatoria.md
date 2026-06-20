---
tipo: prova
prova_id: prova_2015_1er_prueba_preparatoria
competition: Argentina Physics Olympiad
comp_code: Argent
country: Argentina
year: '2015'
level: ''
pdf: >-
  gare di altri
  paesi/Argentina/pruebas-preparatorias/2015_1er_prueba_preparatoria.pdf
cluster: ''
n_problemi: '3'
tags:
  - kg/prova
  - anno/2015
  - paese/Argentina
  - comp/Argent
---

# Argent 2015 — 2015_1er_prueba_preparatoria.pdf

**Fonte:** `gare di altri paesi/Argentina/pruebas-preparatorias/2015_1er_prueba_preparatoria.pdf` · Apri PDF · apri PDF p.15

## Problema 1

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
**Fonte:** Testo (PDF) — p.15

## Problema 2

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
**Fonte:** Testo (PDF) — p.17

## Problema 3

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
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p4_f3.png]]
*blocco su loma con due molle R1 e R2*
<!--fig:end-->

**Topic:** [[Conservation of Energy]], [[Newtonian Mechanics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Statistical Averaging (metodo)|Statistical Averaging]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Fonte:** Testo (PDF) — p.19

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
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p9_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.9** — regola su bordo tavolo con tapita (Figura 2)
![[_attachments/2015_1er_prueba_preparatoria/2015_1er_prueba_preparatoria_p9_f5.png]]
<!--fig:end-->
