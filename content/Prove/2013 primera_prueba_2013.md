---
tipo: prova
prova_id: prova_2013 primera_prueba_2013
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2013'
level: ''
pdf: gare di altri paesi/Spagna/Saragozza-locali/2013 primera_prueba_2013.pdf
cluster: Meccanica
n_problemi: '3'
tags:
  - kg/prova
  - anno/2013
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---

# Spagna 2013 — 2013 primera_prueba_2013.pdf

**Fonte:** `gare di altri paesi/Spagna/Saragozza-locali/2013 primera_prueba_2013.pdf` · Apri PDF · apri PDF p.3
**Cluster:** [[Meccanica]]

## Problema 1

P1 Solución

1) Esta primera parte del problema, con una fuerza de frenado constante, se puede resolver cinemáticamente, teniendo en cuenta que los movimientos entre A y B y entre B y el suelo, son uniformemente acelerados. Sin embargo, es más sencillo y directo trabajar con las variaciones de energía del sistema.

1a) El trabajo de todas las fuerzas que actúan sobre $M$ debe ser igual a la variación de su energía cinética. Como las velocidades inicial y final son nulas, la suma de los trabajos del peso y de la fuerza de frenado entre A y el suelo ha de ser cero. Es decir

$$W(\text{peso})\Big|_A^{\text{suelo}} + W(F_\text{frenado})\Big|_A^{\text{suelo}} = 0 \quad\Rightarrow\quad M g H + (-F\,h_B) = 0$$

Como $h_B = \dfrac{3}{5}H$ $\Rightarrow$ $F = \dfrac{5}{3}M g$

1b) La fuerza anterior de frenado $F$, que empieza a actuar en B, es superior al peso, por lo que la velocidad de caída máxima se alcanzará precisamente en B. Hasta ese punto el movimiento es de caída libre, luego

$$v_\text{max} = \sqrt{2 g (H - h_B)} = \sqrt{2 g \left(H - \dfrac{3}{5}H\right)} \quad\Rightarrow\quad v_\text{max} = \sqrt{\dfrac{4}{5} g H}$$

2a) De nuevo, el trabajo de la fuerza de frenado tiene que ser igual a la variación de la energía potencial gravitatoria. Este trabajo, en valor absoluto, es la suma de las áreas 1, 2 y 3 de la figura 4. Por tanto

$$M g H = \dfrac{1}{2}(h_B - h_C)F_m + \dfrac{1}{2}(h_C - 0)(F_m - Mg) + (h_C - 0)Mg$$

Sustituyendo $h_B = \dfrac{3}{5}H$ y $h_C = \dfrac{1}{5}H$ $\Rightarrow$ $F_m = 3M g$

2b) La velocidad máxima se alcanzará cuando la aceleración sea nula. Esto ocurrirá en el punto E, en el que el peso es contrarrestado por la fuerza de frenado, es decir cuando $F = M g$.

Para determinar la altura del punto E establecemos una relación de semejanza entre el triángulo rectángulo de base BC y el sombreado de la figura 5.

$$\dfrac{Mg}{3Mg} = \dfrac{h_B - h_E}{h_B - h_C} \quad\Rightarrow\quad h_E = \dfrac{7}{15}H$$

El valor de la velocidad máxima en E se obtiene igualando el trabajo realizado por todas las fuerzas con la variación de energía cinética entre A y E.

$$M g (H - h_E) - \dfrac{1}{2}(h_B - h_E)M g = \dfrac{1}{2}M v_\text{max}^2 \quad\Rightarrow\quad v_\text{max} = \sqrt{\dfrac{14}{15}gH}$$

2c) Sustituyendo $H = 100\ \text{m}$ y $g = 9{,}8\ \text{m/s}^2$, se obtiene

$$v_\text{max} = 30{,}2\ \text{m/s} = 109\ \text{km/h}$$

<!--fig:start-->
![[_attachments/2013 primera_prueba_2013/2013 primera_prueba_2013_p2_f1.png]]
*torre caduta libera e frenata*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2013 primera_prueba_2013/2013 primera_prueba_2013_p2_f2.png]]
*piattaforma con forze e masse*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2013 primera_prueba_2013/2013 primera_prueba_2013_p2_f3.png]]
*grafico forza frenante vs posizione*
<!--fig:end-->

**Topic:** [[Conservation of Energy]], [[Newtonian Mechanics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.3

## Problema 2

P2 Solución

a) La conservación de la energía mecánica del proyectil y de su momento angular respecto al centro de la Tierra permiten escribir:

$$\dfrac{1}{2}m v_0^2 - G\dfrac{M_T m}{R_T} = \dfrac{1}{2}mv^2 - G\dfrac{M_T m}{R_T + h}$$

$$m v_0 R_T \cos\phi = m v (R_T + h)$$

b) Eliminando $v_0$ entre las ecuaciones anteriores y despejando $\cos^2\phi$ se llega a la expresión dada:

$$\cos^2\phi = \dfrac{v^2 (R_T + h)^3}{v^2 R_T^2 (R_T + h) + 2 G M_T h R_T} \qquad (1)$$

c) La velocidad, $v_s$, de un satélite de masa $m_s$ en una órbita circular de radio $R_T + h$ se deduce de

$$G\dfrac{M_T m_s}{(R_T + h)^2} = m_s \dfrac{v_s^2}{R_T + h} \quad\Rightarrow\quad v_s^2 = \dfrac{G M_T}{R_T + h}$$

d) De acuerdo con la hipótesis del ciudadano, si el proyectil se ha de convertir en un satélite artificial en la órbita circular de radio $R_T + h$, su velocidad deberá ser igual a $v_s$. Por tanto, haciendo $v = v_s$ en (1) se tiene:

$$\cos^2\phi = \dfrac{v_s^2 (R_T + h)^3}{v_s^2 R_T^2 (R_T + h) + 2 G M_T h R_T} \quad\Rightarrow\quad \cos^2\phi = \dfrac{\dfrac{G M_T}{R_T + h}(R_T + h)^3}{\dfrac{G M_T}{R_T + h} R_T^2 (R_T + h) + 2 G M_T h R_T}$$

Simplificando,

$$\cos^2\phi = \dfrac{(R_T + h)^2}{R_T^2 + 2 h R_T} \quad\Rightarrow\quad \cos^2\phi = \dfrac{R_T^2 + h^2 + 2 h R_T}{R_T^2 + 2 h R_T}$$

Como $h^2 \geq 0$ el numerador es mayor o igual que el denominador, y se obtiene $\cos^2\phi \geq 1$. Pero $\cos^2\phi$ no puede ser mayor que la unidad, luego la idea del ciudadano no es válida, salvo que $h = 0$ y por consiguiente, $\phi = 0$. En este caso, la órbita circular sería rasante a la superficie. Menos mal que la Tierra no es perfectamente lisa, de lo contrario el proyectil, al cabo de algo más de 10 minutos del disparo, le atacaría por retaguardia.

<!--fig:start-->
![[_attachments/2013 primera_prueba_2013/2013 primera_prueba_2013_p4_f4.png]]
*proiettile Terra orbita circolare*
<!--fig:end-->

**Topic:** [[Gravitation]], [[Conservation of Energy]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Conservation Laws (metodo)|Conservation Laws]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Kepler's Laws (metodo)|Kepler's Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.5

## Problema 3

P3 Solución

a) Dado que el punto P está a la misma distancia de las dos cargas y éstas tienen el mismo valor absoluto, los módulos de los campos creados por cada una de las cargas serán iguales

$$E_{+Q} = E_{-Q} = K\dfrac{Q}{d^2 + (L/2)^2}$$

Según la figura 3, las componentes verticales de los campos tienen sentidos opuestos y se cancelan, mientras que las componentes horizontales se suman, de forma que

$$E = 2 E_{+Q} \cos\theta = 2 K\dfrac{Q}{d^2 + (L/2)^2}\dfrac{L/2}{[d^2 + (L/2)^2]^{1/2}} \quad\Rightarrow\quad E = K\dfrac{Q L}{[d^2 + (L/2)^2]^{3/2}}$$

b) Si $d \gg L$ podemos considerar $d^2 + (L/2)^2 \approx d^2$, y el campo total queda

$$E \approx K\dfrac{Q L}{d^3}$$

Es decir, el campo es inversamente proporcional al cubo de la distancia.

c) El valor de la carga que produce un campo $E_\text{min}$ a la distancia $d_\text{max}$ se obtiene despejando $Q$ de la ecuación anterior,

$$Q = \dfrac{E_\text{min}\, d_\text{max}^3}{K L} \quad\Rightarrow\quad Q = 1{,}54\cdot10^{-10}\ \text{C} = 9{,}6\cdot10^8\ e$$

d) En esta nueva situación sólo tenemos componentes en dirección horizontal, en sentidos opuestos, tal como muestra la figura 4.

El campo total será ahora

$$E = K\left[\dfrac{Q}{(d - L/2)^2} - \dfrac{Q}{(d + L/2)^2}\right] \quad\Rightarrow\quad E = 2 K\dfrac{Q L d}{[d^2 - (L/2)^2]^2}$$

e) Si $d \gg L$ podemos considerar que $d^2 - (L/2)^2 \approx d^2$, de modo que el campo total queda

$$E \approx 2 K\dfrac{Q L}{d^3}$$

Este campo disminuye también con el cubo de la distancia, pero es el doble del calculado en el apartado b).

f) A partir del módulo de $E$ puede despejarse la distancia $d_\text{max}$ en función del resto de parámetros

$$d_\text{max} = \left(2 K\dfrac{Q L}{E_\text{min}}\right)^{1/3} \quad\Rightarrow\quad d_\text{max} = 25{,}2\ \text{m}$$

Esta distancia es $2^{1/3} = 1{,}26$ veces mayor que la distancia máxima $d_\text{max}$ del apartado c).

<!--fig:start-->
![[_attachments/2013 primera_prueba_2013/2013 primera_prueba_2013_p6_f5.png]]
*squalo e dipolo elettrico verticale*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2013 primera_prueba_2013/2013 primera_prueba_2013_p6_f6.png]]
*squalo e dipolo elettrico orizzontale*
<!--fig:end-->

**Topic:** [[Electrostatics]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Superposition Principle (metodo)|Superposition Principle]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.7
