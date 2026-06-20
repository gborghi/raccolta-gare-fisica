---
tipo: prova
prova_id: prova_prueba_2009
competition: Argentina Physics Olympiad
comp_code: Argent
country: Argentina
year: '2009'
level: ''
pdf: gare di altri paesi/Argentina/pruebas-nacionales/prueba_2009.pdf
cluster: Termodinamica
n_problemi: '3'
tags:
  - kg/prova
  - anno/2009
  - paese/Argentina
  - comp/Argent
  - cluster/Termodinamica
---

# Argent 2009 — prueba_2009.pdf

**Fonte:** `gare di altri paesi/Argentina/pruebas-nacionales/prueba_2009.pdf` · Apri PDF · apri PDF p.13
**Cluster:** [[Termodinamica]]

## Problema 1

Problema 1: Señal luminosa en isla desierta.

Usted se encuentra en una isla desierta y luego de recorrerla encuentra una
lámpara, cuatro cajas conteniendo cada una 12 pilas y algunos cables. La lámpara es de
100 W con resistencia de 9 $\Omega$ y las pilas son de 6 V con resistencia interna de 3 $\Omega$.

 Con estos elementos decide armar un circuito para enviar señales luminosas
cuando pase un avión o un barco cerca de la isla. Con el objeto de ser observado desde
lo más lejos posible se debe lograr la mayor iluminación de la lámpara y para esto es
necesario hacer circular la máxima corriente a través de la misma.

Con este objetivo Ud. arma un circuito de manera de tener M ramas en paralelo y
en cada una de ellas N pilas en serie, de manera tal de utilizar todas las pilas
encontradas ($M \cdot N = 48$).

a) Encuentre una expresión para la corriente que circula a través de la lámpara en
términos de N y M

b) Encuentre los valores de M y N correspondientes al circuito con el cuál se logra hacer
circular la máxima corriente a través de la lámpara.

c) Encuentre los valores de M y N con los cuales se logra la mayor iluminación sin
quemar la lámpara

d) Sabiendo que la eficiencia lumínica de la lámpara es de 6 lum/W, y que la
sensibilidad de los bastones del ojo humano es de $10^{-6}\ \text{lum/m}^2$ calcule la máxima
distancia a la cual podrán ser observadas las señales.

Nota: Para los puntos a, b y c considere que la resistencia no cambia con la
temperatura.

Ayuda: La expresión $(ax + b/x)$, con $x > 0$, toma un valor mínimo para $x^2 = b/a$

Solución

a) Total = 4 puntos.

Un esquema del circuito se muestra en la figura de abajo

Si denominamos $i_r$ a la corriente que pasa por cada una de las ramas tenemos que la
diferencia de potencial entre los bornes de una pila es

$$\Delta V_P = V_P - i_r \cdot R_P$$

y como en una rama tenemos N pilas la diferencia de potencial en los extremos de cada
rama será:

$$\Delta V_r = N \cdot \Delta V_P = N \cdot (V_P - i_r \cdot R_P)$$
(1 punto)

Por la lámpara pasará una corriente igual a la suma de la corriente que pasa por todas las
ramas que contienen pilas entonces $I = M \cdot i_r$ entonces la diferencia de potencial en la
rama que contiene la lámpara será:

$$\Delta V = I \cdot R_L = M \cdot i_r \cdot R_L$$
(1 punto)

Cómo la diferencia de potencial en todas las ramas debe ser la misma tenemos que:

$$N \cdot (V_P - i_r \cdot R_P) = M \cdot i_r \cdot R_L$$

Despejando se obtiene

$$i_r = \frac{N \cdot V_P}{M \cdot R_L + N \cdot R_P}$$

(1 punto)

Por lo tanto la corriente que circula por la lámpara es

$$I = M \cdot i_r = \frac{M \cdot N \cdot V_P}{M \cdot R_L + N \cdot R_P}$$

(1 punto)

Como en nuestro caso $M \cdot N = 48$ podemos reescribir esta ecuación en término sólo de la
cantidad de pilas que hay en una rama

$$I = \frac{48 \cdot V_P}{\dfrac{48}{N} \cdot R_L + N \cdot R_P}$$

b) Total = 2 puntos.

La máxima corriente que circulará por la lámpara corresponderá a aquella para la cual el
denominador en la expresión anterior toma su mínimo valor. Haciendo uso de la ayuda
podemos identificar $a = R_P$ y $b = 48\,R_L$ ($R_P = 3\ \Omega$ y $R_L = 9\ \Omega$) podemos determinar

$$N^2 = \frac{48 \cdot R_L}{R_P} = 144$$
$$N = 12$$

Es decir que pasará la máxima corriente por la lámpara cuando armemos un circuito con
4 ramas con 12 pilas en cada una de ellas.

Otra posibilidad es evaluar la expresión de la corriente total para todas las
combinaciones posibles de M y N.

| N | M | I [A] |
|---|---|---|
| 1 | 48 | 0.662 |
| 2 | 24 | 1.297 |
| 3 | 16 | 1.882 |
| 4 | 12 | 2.400 |
| 6 | 8 | 3.200 |
| 8 | 6 | 3.692 |
| 12 | 4 | 4.000 |
| 16 | 3 | 3.840 |
| 24 | 2 | 3.200 |
| 48 | 1 | 1.882 |

De donde resulta evidente que la máxima corriente se logra con un circuito que contiene
4 ramas con 12 pilas en cada una de ellas.

c) Total = 2 puntos.

Cómo la lámpara es de 100 W con una resistencia interna de 9 $\Omega$ la máxima corriente
que puede pasar por ella es:

$$P = i_\text{max}^2 \cdot R$$
$$i_\text{max} = \sqrt{\frac{P}{R}} = \sqrt{11.1}\ \text{A} = 3.3\ \text{A}$$

(1 punto)

Por lo tanto, analizando la tabla anterior, la máxima corriente que se puede hacer pasar
por la lámpara sin quemarla es 3.2 A.

Existen dos circuitos posibles para lograr esta corriente, uno de 8 ramas con 6 pilas en
cada una de ellas (N = 6 y M = 8) ó uno de 2 ramas con 24 pilas en cada una de ellas
(N = 24 y M = 2).

Si dan 1 solo circuito 0.5 puntos
Si da los dos circuitos posibles 1 punto

d) Total = 2 puntos.

Con esta corriente máxima de 3.2 A la potencia disipada por la lámpara es

$$P = i_\text{max}^2 \cdot R = (3.2\ \text{A})^2 \cdot 9\ \Omega = 92.16\ \text{W}$$

(0.5 puntos)

la potencia lumínica de la lámpara será

$$P_L = 92.16\ \text{W} \cdot 6\ \frac{\text{lum}}{\text{W}} = 552.96\ \text{lum}$$

(0.5 puntos)

Cómo esa potencia lumínica se distribuye en todas las direcciones en una semiesfera
tenemos que a una distancia L la densidad de potencia lumínica será

$$\delta_{PL} = \frac{P_L}{2\pi L^2}$$

y la luz de la lámpara podrá ser observada en todo lugar en el cual esta densidad de
potencia lumínica sea superior a la sensibilidad del ojo ($10^{-6}\ \text{lum/m}^2$), entonces

$$\delta_{PL} = \frac{P_L}{2\pi L^2} \geq 10^{-6}\ \frac{\text{lum}}{\text{m}^2}$$

(0.75 puntos)

$$L \leq \sqrt{\frac{P_L}{2 \cdot 10^{-6}\ \text{lum/m}^2}} = 9381.2\ \text{m}$$

(0.25 puntos)

También puede considerarse bien si el alumno toma la potencia lumínica dispersada en
la esfera total ($S = 4\pi L^2$), entonces la distancia será $L \leq 6633.5$ m.

**Topic:** [[Circuits]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.13

## Problema 2

Problema 2: Horno por radiación.

Un sistema para calentar agua de piletas de natación aprovechando la radiación
solar consiste de una cañería pintada de negro, por cuyo interior circula agua.
Externamente los caños están rodeados de un espacio al vacío delimitado por un tubo
de acrílico de baja conductividad térmica, evitando de esta manera los efectos de
convección y conducción del calor con el exterior. Aprovechando esta idea, un inventor
decide fabricar un horno que le permita calentar agua aprovechando la radiación solar.
De esta manera diseña la tapa del horno con las características mostradas en la Figura

La lámina intermedia está pintada de plateado de un lado y de negro del otro, lo
que permite reflejar o absorber la radiación que incide sobre ella regulando
la temperatura del interior del horno. Esta tapa puede ser colocada con el lado negro o el
plateado hacia fuera.

En un ambiente a temperatura de $20\ ^\circ\text{C}$, se encuentra experimentalmente que
cuando el sistema alcanza el estado estacionario (es decir todas las temperaturas se
mantienen constantes) la temperatura en el interior del horno es de $80\ ^\circ\text{C}$.

En estas condiciones y suponiendo que:

La tapa tiene un área de $1/2\ \text{m}^2$

La radiación solar promedio por unidad de área es $P_s = 1000\ \text{W/m}^2$

La reflectividad del lado plateado es del 90% y del lado negro del 10%.

a) Encontrar una expresión para la potencia absorbida por la lámina en términos de los
coeficientes de reflectividad interior (r) y exterior (R)

b) Encontrar una expresión para la potencia irradiada por la lámina en función de r, R y
su temperatura ($T_L$).

c) Encontrar una expresión para la temperatura que adquiere la lámina.

d) ¿En que caso (con la cara plateada hacia fuera o hacia adentro) la temperatura que
adquiere la lámina es mayor? Justifique.

e) ¿En que caso la potencia irradiada por la lámina hacia el interior del horno es mayor?
Justifique.

f) Calcule la potencia perdida por las paredes del horno en ambos casos.

AYUDA: Se sabe que la energía emitida por unidad de tiempo y por unidad de área por
un objeto a temperatura T está dada por la ley de Stefan-Boltzmann

$$E = e \cdot \sigma \cdot T_e^4 \qquad \sigma = 5{,}67 \cdot 10^{-8}\ \frac{\text{W}}{\text{m}^2 \cdot \text{K}^4}$$

donde $\sigma$ es una constante universal y e es la emisividad. Un cuerpo en equilibrio con
sus alrededores emite y absorbe la misma cantidad de energía en la unidad de tiempo,
manteniendo su temperatura constante. Para un absorbedor ideal e = 1.

Los coeficiente de absorción A y de reflectividad R satisfacen $A + R = 1$

La emisividad e es igual al coeficiente de absorción A.

Solución

a) Total = 2 puntos.

Si denominamos R a la reflectividad de la superficie expuesta hacia el exterior del horno
y r a la reflectividad de la superficie que queda hacia el interior del horno, resulta:

- Potencia absorbida de la radiación solar

$$P_{AS} = (1 - R) \cdot S \cdot P_s$$

(1 puntos)

- Potencia absorbida del ambiente exterior

$$P_{Aext} = (1 - R) \cdot S \cdot \sigma \cdot T_\text{ext}^4$$

(0.5 puntos)

- Potencia absorbida del interior del horno

$$P_{A\text{int}} = (1 - r) \cdot S \cdot \sigma \cdot T_\text{int}^4$$

(0.5 puntos)

Por lo tanto la potencia total absorbida por la lámina es

$$P_A = (1 - R) \cdot S \cdot P_s + (1 - R) \cdot S \cdot \sigma \cdot T_\text{ext}^4 + (1 - r) \cdot S \cdot \sigma \cdot T_\text{int}^4$$

b) Total = 2 puntos.

- Potencia irradiada al ambiente exterior por la lámina

$$P_{Iext} = (1 - R) \cdot S \cdot \sigma \cdot T_t^4$$

(1 punto)

- Potencia irradiada al interior del horno por la lámina

$$P_{I\text{int}} = (1 - r) \cdot S \cdot \sigma \cdot T_t^4$$

(1 punto)

Por lo tanto la potencia total irradiada por la lámina es

$$P_I = (2 - R - r) \cdot S \cdot \sigma \cdot T_t^4$$

c) Total = 2 puntos.

En el estado estacionario, cuando ya todas las temperaturas se mantienen constantes, la
potencia absorbida por la lámina es igual a la potencia irradiada por la misma.

$$P_A = P_I$$
$$(1 - R) \cdot S \cdot P_s + (1 - R) \cdot S \cdot \sigma \cdot T_\text{ext}^4 + (1 - r) \cdot S \cdot \sigma \cdot T_\text{int}^4 = (2 - R - r) \cdot S \cdot \sigma \cdot T_t^4$$
 (1 punto)

$$T_t = \sqrt[4]{\frac{(1 - R) \cdot P_s / \sigma + (1 - R) \cdot T_\text{ext}^4 + (1 - r) \cdot T_\text{int}^4}{(2 - R - r)}}$$

(1 punto)

d) Total = 1.5 puntos.

En la situación en que el lado negro de la lámina está hacia fuera R = 0.1 y r = 0.9
resultando:

$$T_t = 393.91\ \text{K} = 120.75\ ^\circ\text{C}$$

(0.75 puntos)

Cuando el lado plateado de la lámina está hacia fuera R = 0.91 y r = 0.1 resultando:

$$T_t = 358.42\ \text{K} = 85.26\ ^\circ\text{C}$$

(0.75 puntos)

Por lo tanto la temperatura de la lámina será mayor cuando el lado plateado de la misma
esté hacia dentro.

e) Total = 1.5 puntos.

La potencia irradiada por la lámina hacia el interior del horno es:

$$P_{I\text{int}} = (1 - r) \cdot S \cdot \sigma \cdot T_t^4$$

- Cuando el lado negro está hacia fuera r = 0.9 resultando:

$$P_{I\text{int}} = 68.26\ \text{W}$$

(0.75 puntos)

- Cuando el lado plateado está hacia fuera r = 0.1 resultando:

$$P_{I\text{int}} = 421.08\ \text{W}$$

(0.75 puntos)

f) Total = 1 puntos.

Cómo es sistema está en estado estacionario (todas las temperaturas de mantienen
constantes) la potencia perdida por las paredes del horno será igual a la potencia que le
entrega la lámina de la tapa, por lo tanto

- Cuando el lado negro está hacia fuera:

$$P_\text{perd} = 68.26\ \text{W}$$
(0.5 puntos)

- Cuando el lado plateado está hacia fuera:

$$P_\text{perd} = 421.08\ \text{W}$$
(0.5 puntos)

**Topic:** [[Thermodynamics]], [[Electromagnetism]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.17

## Problema 3

Problema 3: Una sorpresa extraterrestre.

Una civilización proveniente de algún sistema planetario lejano, pone en órbita
alrededor de la Luna un objeto en forma de prisma. Tan pronto como los humanos se
enteran de su presencia, los científicos de la Tierra comienzan a estudiar las propiedades
de ese extraño objeto. Las observaciones que realizaron indican que el objeto en su
movimiento orbital, permanece siempre en el plano de la órbita Tierra – Luna, que
realiza una órbita circular alrededor de la Luna, que la extensión de la bisectriz del
prisma pasa en todo momento por el centro de la Luna (ver figura 1) y que su período
de revolución es de 2 horas y 40 minutos. A partir de esta información,

a) calcule la distancia Luna – prisma.
Nota 1: Suponga que el efecto gravitatorio de la Tierra sobre el objeto es despreciable y
que para describir su movimiento alrededor de la Luna lo pensamos como un cuerpo
puntual.
Para estudiar tanto las características geométricas como el material con el que se ha
construido el prisma, los científicos planifican el siguiente experimento: cuando el
objeto se encuentra en la posición indicada en la figura 2 (dibujo no a escala), se envían
desde la Tierra dos poderosos rayos laser, paralelos al eje que pasa por el centro de la
Tierra, el centro de la Luna y por el vértice del prisma. Esos rayos, al tocar la superficie
del prisma, sufren tanto una reflexión como una refracción. Los rayos reflejados son
captados por sensores ubicados sobre la superficie lunar que se encuentran separados
entre si por una distancia $d_{AB} = 200$ km medida sobre la superficie lunar. A partir de
este dato:

b) Calcule el ángulo de refringencia $\alpha$ del prisma (ver figura 3).
Por otro lado, los rayos que se refractaron en el prisma, emergen del mismo por la cara
más cercana a la luna, para luego ser detectados por sensores ubicados sobre la
superficie lunar y separados por una distancia $d_{CD} = 100$ km (ver figura 2). A partir de
esta información.

c) Calcule el ángulo $\theta'_r$ con que los rayos emergen del prisma luego de la
segunda refracción (ver figura 3).
d) Muestre que el índice de refracción del prisma está dado por las siguiente
expresión:

$$n = \sqrt{\cos^2\!\left(\frac{\alpha}{2}\right) + \left(\frac{\operatorname{sen}\!\left(\frac{\theta'_r}{2}\right) + \operatorname{sen}\!\left(\frac{\alpha}{2}\right)}{\cos\!\left(\frac{\alpha}{2}\right)}\right)^2}$$

e) Determine el índice de refracción n del prisma. Exprese el resultado con
cuatro cifras significativas.
Nota 2: En los puntos b) y c) considere que el prisma es lo suficientemente pequeño
como para suponer que todos los rayos (tanto los reflejados como los refractados)
emergen de un único punto interior al prisma.
Nota 3: Considere que la luz se propaga a velocidad infinita.
Nota 4: Para todos los cálculos trabaje con seis cifras significativas.

Figura 1

Figura 2

Figura 3: Diagrama no a escala de uno de los rayos que inciden en el prisma y sus
respectivas refracciones. Los ángulos se han exagerado para mayor claridad en el
dibujo.

Datos necesarios:
1. Radio de la Luna: 1737 km
2. Índice de refracción del vacío: 1
3. Masa de la Luna: $7{,}35 \times 10^{22}$ kg
4. Constante Universal de la Gravitación: $6{,}67 \times 10^{-11}\ \text{m}^3\text{kg}^{-1}\text{s}^{-2}$

Fórmulas útiles:

$$\operatorname{sen}(a \pm b) = \operatorname{sen}(a)\cos(b) \pm \cos(a)\operatorname{sen}(b)$$
$$\cos(a \pm b) = \cos(a)\cos(b) \mp \operatorname{sen}(a)\operatorname{sen}(b)$$
$$\operatorname{sen}(a/2)\cos(a/2) = (1/2)\operatorname{sen}(a)$$

Recta normal al lado del prisma. Recta normal a la base del prisma. Rayo incidente.

Solución

a) Total = 2 puntos.

$$T = 2\text{h}\ 40' = 160' = 9600\ \text{s}$$

$$F = -\frac{G m_L m_p}{R^2} = -m \omega^2 R \qquad \text{(1.5 puntos)}$$
$$\omega = \frac{2\pi}{T}$$
$$R^3 = \frac{G m_L T^2}{4\pi^2} = 2253.54\ \text{km} \qquad \text{(0.5 puntos)}$$

b) Total = 2 puntos.

$$d_{AB} = 200\ \text{km}$$
$$\beta R_L = 200\ \text{km}$$
$$\beta = 0.115141\ \text{rad}$$
$$\beta/2 = 0.0575705\ \text{rad}$$

$$R_L \operatorname{sen}\!\left(\frac{\beta}{2}\right) = h$$
$$\tan(\alpha) = \left(\frac{h}{R - R_L \cos\!\left(\frac{\beta}{2}\right)}\right) = \left(\frac{R_L \operatorname{sen}\!\left(\frac{\beta}{2}\right)}{R - R_L \cos\!\left(\frac{\beta}{2}\right)}\right)$$
$$\tan(\alpha) = 0.192417$$
$$\alpha = 0.190094$$

c) Total = 2 puntos.

 De la misma forma que calculamos $\alpha$ podemos calcular $\theta'_r$.

$$d_{CD} = 100\ \text{km}$$
$$\gamma R_L = 100\ \text{km}$$
$$\gamma = 0.0575705\ \text{rad}$$
$$\gamma/2 = 0.0287853\ \text{rad}$$

$$\tan(\theta'_r) = \left(\frac{R_L \operatorname{sen}\!\left(\frac{\gamma}{2}\right)}{R - R_L \cos\!\left(\frac{\gamma}{2}\right)}\right)$$
$$\tan(\theta'_r) = 0.0966501$$
$$\theta'_r = 0.09635088\ \text{rad}$$

d) Total = 3 puntos

$$\theta_i = \frac{\pi}{2} - \frac{\alpha}{2} \qquad \text{(0.5 puntos)}$$
$$\operatorname{sen}(\theta_i) = n \operatorname{sen}(\theta_r) = \cos\!\left(\frac{\alpha}{2}\right) \qquad \text{(0.5 puntos)}$$
$$n \operatorname{sen}(\theta'_i) = \operatorname{sen}(\theta'_r) \qquad \text{(0.5 puntos)}$$
$$\theta_r + \theta'_i + \pi - \theta_i = \pi$$
$$\theta'_i = \frac{\pi}{2} - \frac{\alpha}{2} - \theta_r \qquad \text{(0.5 puntos)}$$
$$n \operatorname{sen}\!\left(\frac{\pi}{2} - \frac{\alpha}{2} - \theta_r\right) = \operatorname{sen}(\theta'_r)$$
$$n = \sqrt{\cos^2\!\left(\frac{\alpha}{2}\right) + \left(\frac{\operatorname{sen}(\theta'_r) + \operatorname{sen}\!\left(\frac{\alpha}{2}\right)}{\cos\!\left(\frac{\alpha}{2}\right)}\right)^2} \qquad \text{(1 punto)}$$

e)
$$n = 1.0138 \qquad \text{(1 punto)}$$

Recta normal al lado del prisma. Recta normal a la base del prisma. Rayo incidente.

**Topic:** [[Gravitation]], [[Geometric Optics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Snell's Law (metodo)|Snell's Law]], [[Ray Tracing (metodo)|Ray Tracing]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Significant Figures (competenza)|Significant Figures]]
**Fonte:** Testo (PDF) — p.21
