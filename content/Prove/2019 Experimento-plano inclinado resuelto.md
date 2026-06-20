---
tipo: prova
prova_id: prova_2019 Experimento-plano inclinado resuelto
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2019'
level: ''
pdf: gare di altri paesi/Spagna/Jaen/2019 Experimento-plano inclinado resuelto.pdf
cluster: ''
n_problemi: '2'
tags:
  - kg/prova
  - anno/2019
  - paese/Spagna
  - comp/Spagna
---

# Spagna 2019 — 2019 Experimento-plano inclinado resuelto.pdf

**Fonte:** `gare di altri paesi/Spagna/Jaen/2019 Experimento-plano inclinado resuelto.pdf` · Apri PDF · apri PDF p.1

## Problema 1

**Experimento: Plano inclinado — Parte (a): Coeficiente de rozamiento estático**

Cuando un cuerpo está sobre un plano inclinado, la fuerza de su peso ($mg$) se descompone en una fuerza normal ($F_n$) que es contrarrestada por la reacción del plano y en otra fuerza tangencial ($F_t$) que tiende a mover el cuerpo en la dirección del plano. Esta fuerza es mayor cuanto mayor es el ángulo de inclinación del plano. La fuerza de rozamiento ($F_r$) se opone a este movimiento, y es proporcional al valor de la fuerza normal.

Consideremos inicialmente una masa situada sobre un plano horizontal. Si vamos levantando el plano poco a poco, el cuerpo comenzará a moverse cuando la fuerza tangencial supere a la de rozamiento. En esa situación se cumple:

$$mg\,\mathrm{sen}\,\alpha = \mu_e\,mg\cos\alpha \qquad \Rightarrow \qquad \mu_e = \mathrm{tg}\,\alpha$$

Para obtener el coeficiente de rozamiento se ha procedido de la siguiente forma: se ha colocado la pieza sobre el plano, situado al principio horizontalmente, a distintas distancias del origen y se ha variado lentamente su inclinación hasta que comienza a moverse. Se han medido las distancias $x$ y $l$ señaladas en la figura 8 veces, obteniéndose los siguientes resultados:

| Medida | $x$ (cm) | $l$ (cm) | $\mathrm{tg}\,\alpha$ |
|--------|----------|----------|----------------------|
| 1ª | 5 | 33 | 0,153 |
| 2ª | 7 | 46 | 0,154 |
| 3ª | 10 | 61 | 0,166 |
| 4ª | 11 | 76 | 0,146 |
| 5ª | 12 | 79 | 0,154 |
| 6ª | 19 | 130 | 0,148 |
| 7ª | 21 | 149 | 0,142 |
| 8ª | 13 | 150 | 0,155 |
| Promedio | | | 0,152 |

Realice los cálculos necesarios para obtener el valor de $\mu_e$ y haga una estimación del error cometido.

<!--fig:start-->
![[_attachments/2019 Experimento-plano inclinado resuelto/2019 Experimento-plano inclinado resuelto_p1_f1.png]]
*Force decomposition on inclined plane*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2019 Experimento-plano inclinado resuelto/2019 Experimento-plano inclinado resuelto_p1_f2.png]]
*Geometry for measuring x and l on inclined plane*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Elasticity & Materials]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Error Propagation (metodo)|Error Propagation]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Fonte:** Testo (PDF) — p.1

## Problema 2

**Experimento: Plano inclinado — Parte (b): Determinación del valor de la gravedad**

Para determinar el valor de la gravedad se ha procedido de la siguiente manera.

**b.1.** Por procedimientos indirectos se ha determinado el coeficiente de rozamiento dinámico, obteniéndose un valor de $\mu_d = 0{,}139$.

**b.2.** Se han colocado dos masas idénticas a ambos lados del plano que forma un ángulo fijo de $\alpha = 30°$, y en distintos lugares del mismo (con distintos valores de $s$) y se han cronometrado los tiempos que han tardado en recorrerse esa distancia.

En el montaje debe cumplirse:

$$mg\,\mathrm{sen}\,\alpha - \mu_d\,mg\cos\alpha - mg = ma$$

y como es un movimiento uniformemente acelerado:

$$s = \frac{1}{2}a t^2$$

por lo que, simplificando la masa y sacando $g$ factor común:

$$s = \frac{1}{4}\,g\,(\mathrm{sen}\,\alpha - \mu_d\cos\alpha)\,t^2$$

donde la expresión entre paréntesis es, para un ángulo determinado, una constante $k(\mu_d, \alpha)$ que depende del coeficiente de rozamiento dinámico y del ángulo $\alpha$.

Se han realizado 10 medidas de $s$ y $t$ (en unidades SI):

| $s$ (m) | 0,075 | 0,025 | 0,035 | 0,02 | 0,06 | 0,09 | 0,105 | 0,125 | 0,145 | 0,1 |
|---------|-------|-------|-------|------|------|------|-------|-------|-------|-----|
| $t$ (s) | 0,284 | 0,164 | 0,194 | 0,14 | 0,260 | 0,311 | 0,336 | 0,354 | 0,395 | 0,328 |

Se pide:

1. Obtenga el valor de $k(\mu_d, \alpha)$ para el ángulo al que se ha situado el plano y el valor del coeficiente de rozamiento dinámico proporcionado.
2. Haga una gráfica de $s$ frente a $t^2$ y a partir de ella determine el valor de $g$. Haga una estimación del error cometido en la determinación de $g$.

<!--fig:start-->
![[_attachments/2019 Experimento-plano inclinado resuelto/2019 Experimento-plano inclinado resuelto_p2_f3.png]]
*Two masses on fixed-angle inclined plane setup*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2019 Experimento-plano inclinado resuelto/2019 Experimento-plano inclinado resuelto_p3_f4.png]]
*Graph of s vs t² with linear fit*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.2
