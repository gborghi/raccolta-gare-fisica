---
tipo: prova
prova_id: prova_2021 32_oaf_2021_prueba_teorica
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2021'
level: ''
pdf: >-
  gare di altri paesi/Spagna/Saragozza-locali/2021
  32_oaf_2021_prueba_teorica.pdf
cluster: Meccanica
n_problemi: '3'
tags:
  - kg/prova
  - anno/2021
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---

# Spagna 2021 — 2021 32_oaf_2021_prueba_teorica.pdf

**Fonte:** `gare di altri paesi/Spagna/Saragozza-locali/2021 32_oaf_2021_prueba_teorica.pdf` · Apri PDF · apri PDF p.2
**Cluster:** [[Meccanica]]

## Problema 1

P1. Dos puestas de sol consecutivas
Una enamorada pareja se encuentra al pie de un lujoso hotel,
en la orilla de una idílica playa situada en el círculo ecuatorial
terrestre, cuando, al atardecer, observan una bella estampa de la
puesta de sol sobre un mar en calma (Fig. 1).
Una de las atracciones que presenta este lujoso hotel es la
posibilidad de poder observar una segunda puesta de sol. Para
facilitar este capricho astronómico el hotel sitúa la puerta de acceso
de un ascensor justo al pie de la playa. Para dar cumplida
satisfacción a este evento, la feliz pareja, inmediatamente después
de observar la primera puesta de Sol, toma el ascensor y se dirigen
a la terraza del hotel, situada a una altura $H = 20\ \text{m}$, donde esperan poder ver por segunda vez tan excitante
escena. Por simplicidad, vamos a considerar que el ascensor sube con una velocidad constante $v = 0{,}8\ \text{m/s}$.
Debido a la rotación terrestre, con velocidad angular $\omega$, la Tierra gira un pequeño ángulo $\theta$ que
provoca, tras la primera puesta de sol, la aparición de una sombra de altura $h$ sobre la fachada del hotel, tal
como muestra la figura 2. Para simplificar la situación descrita, supongamos que los rayos del Sol inciden en
paralelo al plano del círculo ecuatorial terrestre.
a)
Calcula el tiempo que tarda el ascensor en llegar a la terraza del edificio.
b)
Obtén la expresión de la altura $h$ de la sombra proyectada por la Tierra sobre la fachada del hotel en
función de $R$, $\omega$ y $t$.
c)
Determina si la pareja llegará a tiempo a la terraza para ver una segunda puesta de sol.
El equipo técnico del hotel decide mejorar la atracción incorporando un sistema de control del
ascensor que permita su ascenso simultáneamente a la sombra proyectada sobre el mismo, de forma que los
enamorados viajeros a bordo del ascensor puedan disfrutar de una prolongada puesta de sol que dure hasta
que el ascensor llegue a la terraza.
d)
A partir de la expresión obtenida en b), calcula, en función de $R$, $\omega$ y $t$, la velocidad a la que debería
ascender el ascensor para seguir la sombra del sol sobre la fachada del hotel.

Fig. 1

Fig. 2

Dado que el ángulo de giro $\theta$ de la Tierra durante la subida del ascensor es pequeño, las funciones
$\text{sen}\,\theta$ y $\cos\theta$ se pueden aproximar del siguiente modo:
$\text{sen}\,\theta \approx \theta$; $\cos\theta \approx 1$.
e)
Aplica la aproximación propuesta para simplificar la expresión de la velocidad obtenida en el apartado
d).
f)
A partir del resultado anterior deduce con qué aceleración debe ascender el ascensor para seguir la
sombra. ¿Qué tipo de movimiento debe describir el ascensor?
g)
¿Según los resultados de los apartados e) y f), ¿cuánto tiempo disfrutará la enamorada pareja de la
puesta de sol desde que el ascensor empieza a ascender hasta que llegan a la terraza del hotel?

Datos: - Radio de la Tierra $R_T = 6{,}37 \times 10^6\ \text{m}$.

P1. Solución
a) El ascensor sube con velocidad constante, de modo que tardará un tiempo $t_1$ en llegar a la terraza,

$$v = \frac{H}{t_1} \quad\Rightarrow\quad t_1 = \frac{H}{v} = \frac{20}{0{,}8} \quad\Rightarrow\quad t_1 = 25\ \text{s}$$

b) Según la figura 2, del triángulo rectángulo de ángulo $\theta$ que tiene por catetos $R$ y el rayo del Sol tangente a
la superficie de la Tierra, se deduce

$$\cos\theta = \frac{R}{R+h} \quad\Rightarrow\quad h = R\left(\frac{1}{\cos\theta} - 1\right)$$

Sustituyendo $\theta = \omega t$,

$$h = R\left(\frac{1}{\cos\omega t} - 1\right) \tag{1}$$

c) Durante el tiempo $t_1$ que el ascensor tarda en llegar a la terraza del hotel, la sombra del sol alcanzará una
altura

$$h = 6{,}371\cdot10^6\left(\frac{1}{\cos\left(\frac{2\pi}{24\cdot3600}\,25\right)} - 1\right) \quad\Rightarrow\quad h = 10{,}52\ \text{m}$$

Esta altura es inferior a la altura de la terraza del hotel, de modo que la pareja sí llegará a tiempo para
observar la segunda puesta de Sol.
d) Para seguir la puesta de sol, el ascensor deberá ascender con la misma velocidad que asciende la sombra,
que podemos obtener a partir de la ecuación (1),

$$v(t) = \frac{dh}{dt} \quad\Rightarrow\quad v(t) = \frac{R\omega\,\text{sen}(\omega t)}{\cos^2(\omega t)}$$

e) Con la aproximación propuesta podemos obtener una expresión de la velocidad más simple,

$$v(t) = R\omega^2 t \tag{2}$$

f) A partir de la expresión (2) podemos obtener la aceleración como

$$a(t) = \frac{dv}{dt} \quad\Rightarrow\quad a(t) = R\omega^2$$

La expresión obtenida indica que la aceleración es constante, por lo que el ascensor debe ascender con un
movimiento uniformemente acelerado.
g) Como el ascensor sube con movimiento uniformemente acelerado, el tiempo $t_2$ que tarda en subir hasta la
terraza del edifico, a una altura $H$, estará determinado por

$$H = \frac{1}{2}at_2^2 = \frac{1}{2}R\omega^2 t_2^2 \quad\Rightarrow\quad t_2 = \sqrt{\frac{2H}{R\omega^2}} = \sqrt{\frac{2\cdot20}{6{,}371\cdot10^6\left(\frac{2\pi}{24\cdot3600}\right)^2}} \quad\Rightarrow\quad t_2 = 34{,}45\ \text{s}$$

Así que los enamorados disfrutarán de algo más de medio minuto para proceder a su declaración de amor,
tiempo que, en términos físicos, no se puede determinar si es o no suficiente. Para que este tiempo fuera
más prolongado sería necesario añadir plantas al edifico o frenar la rotación del Sol, algo que solo está al
alcance de parejas verdaderamente enamoradas.

<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p2_f1.png]]
*geometria ombra Terra-Sole hotel*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Astrophysics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Small-Angle Approximation (metodo)|Small-Angle Approximation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Problema 2

P2. La cazadora de agujeros negros
Los agujeros negros son objetos astrofísicos que concentran una masa tan grande que ni siquiera la luz
puede escapar del campo gravitatorio que generan. Esta propiedad hace que sean invisibles y por lo tanto
muy difíciles de detectar, salvo por sus efectos gravitatorios, ya que gobiernan la dinámica de las estrellas
que orbitan en su entorno. Los agujeros negros parecen emitir diferentes formas de radiación, realmente
originada por la materia que “cae” en ellos.
Sagittarius A* es un objeto compacto y brillante en ondas
de radio en el centro de la Vía Láctea, a 26 mil años-luz del
sistema solar. Sagittarius A fue descubierto en 1931 por Karl
Jansky, y consiste en diferentes fuentes de ondas de radio
superpuestas, que en 1974 fueron resueltas, siendo Sagittarius
A* la denominación que recibió la más intensa y compacta de
todas ellas.
Sagittarius A* se encuentra en el foco de las órbitas de
varias estrellas, cuyos movimientos orbitales fueron analizados
durante más de 16 años por Andrea Ghez y Reinhard Genzel.
En la figura 1 se muestran las órbitas aparentes1 de seis de estas
estrellas.
Las observaciones de Ghez y Genzel han revelado la
existencia de un objeto invisible y extremadamente pesado,
compatible con un agujero negro supermasivo, que atrae a
dichas estrellas de forma que orbitan a su alrededor a increíbles
velocidades. Andrea Ghez obtuvo, junto a Reinhard Genzel, el
premio Nobel en Física en 2020 por su investigación pionera
que ha permitido descubrir este agujero negro supermasivo, que
se encuentra en el centro de la Vía Láctea, siendo la cuarta
mujer en recibir este premio desde su instauración2.
Vamos a suponer de forma simplificada que se puede
aplicar la dinámica newtoniana a las órbitas de las estrellas que
rodean Sagittarius A*, de modo que no es necesario introducir
correcciones de Relatividad General.
a)
Expresa la tercera ley de Kepler en función de la masa $M$ del objeto central. Para ello puedes suponer
órbitas circulares.
Vamos a centrar nuestra atención en las estrellas S1 y S2, cuyos datos se indican al final. Sus órbitas son
elipses muy excéntricas3, cuyo semieje mayor equivale al radio orbital promedio.
b)
A partir de los datos de las órbitas de S1 y S2, comprueba que cumplen la tercera ley de Kepler.
_______________________________________________________________________________________
(1)
La órbita aparente es la trayectoria de la estrella que se observa desde la Tierra, es decir, la proyección de la orbita sobre el
plano perpendicular a nuestra línea de visión.
(2)
Andrea Ghez comparte la mitad del premio Nobel con Reinhard Genzel. La otra mitad del premio Nobel le corresponde a
Roger Penrose por el hallazgo de que la formación de agujeros negros es una consecuencia directa de la teoría general de la
relatividad de Albert Einstein.
(3)
La excentricidad de una órbita se relaciona con las distancias al afelio, $r_A$, y al perihelio, $r_P$, en la forma

$$e = \frac{r_A - r_P}{r_A + r_P}$$

Fig. 2: Andrea Ghez

https://en.wikipedia.org/wiki/Sagittarius_A*
Fig. 1

c)
Calcula la masa $M_*$ del objeto central, responsable del movimiento de las estrellas S1 y S2.
Las dimensiones del objeto “central” no son conocidas, pero se han acotado a una esfera de radio
$R_* = 2{,}2\cdot10^7\ \text{km}$.
d)
Calcula la aceleración de la gravedad que observaríamos en un punto en el borde de dicha distribución
de masa, supuesta esférica, en unidades de $g$, la aceleración de la gravedad en la superficie terrestre.
e)
¿Cuál sería la velocidad de escape correspondiente a dicho objeto en unidades de la velocidad de la luz
en vacío, $c$?
Cuando un objeto no puntual está sometido a la acción gravitatoria de otro aparecen sobre él lo que se
denominan fuerzas de marea, debidas a la diferencia de las fuerzas gravitatorias que experimentaría una
masa $m$ en diferentes posiciones de la superficie del objeto no puntual4. Se definen como la diferencia entre
la fuerza que actúa sobre la masa $m$ en un punto de la superficie del objeto no puntual menos la fuerza que
actuaría sobre dicha masa si estuviera situada en el punto central del objeto.
La situación simplificada se ilustra en la figura 3.
Consideraremos los puntos A y B, en la superficie del
objeto de radio $R$ sobre el que actúa la acción gravitatoria
de la masa $M$ (que podemos considerar puntual); C es el
centro del objeto, a distancia $r$ de la masa $M$; A el punto
de la superficie más próximo a la masa $M$ y B el más
alejado. Todos los puntos están alineados.
f)
Calcula5 la fuerza de marea para una masa $m$ colocada en los puntos A y B, en función de $r$, $R$ y $M$,
indicando su módulo, dirección y sentido.
g)
Determina la relación entre la fuerza de marea que actúa sobre el punto A de la Tierra debido a la
acción combinada del Sol y la Luna cuando los tres se encuentran perfectamente alineados y la fuerza de
marea que experimentaría dicho punto A en la Tierra si ésta se encontrara colocada en el perihelio de la
órbita de la estrella S2 alrededor de Sagittarius A*.

Datos:
- Excentricidad de la órbita de S1, $e_1 = 0{,}5560$
- Excentricidad de la órbita de S2, $e_2 = 0{,}8843$
- Periodo orbital de S1, $T_1 = 166\ \text{años}$
- Periodo orbital de S2, $T_2 = 16{,}1\ \text{años}$
- Distancia al perihelio de S1, $r_{P1} = 2160{,}7\ \text{UA}$
- Distancia al perihelio de S2, $r_{P2} = 118{,}4\ \text{UA}$
- Unidad astronómica, $1\ \text{UA} = 1{,}5\cdot10^{11}\ \text{m}$
- Velocidad de la luz en el vacío, $c = 3\cdot10^8\ \text{m/s}$
- Masa del Sol, $M_\odot = 1{,}99\cdot10^{30}\ \text{kg}$
- Masa de la Luna, $M_L = 7{,}34\cdot10^{22}\ \text{kg}$
- Distancia Sol-Tierra, $r_S = 1\ \text{UA}$
- Distancia Luna-Tierra, $r_L = 3{,}844\cdot10^5\ \text{km}$
- Constante gravitatoria $G = 6{,}67\cdot10^{-11}\ \text{N m}^2\text{kg}^{-2}$
- Radio de la Tierra $R_T = 6{,}37\times10^6\ \text{m}$
________________________________________________________________________________________
(4)
Las fuerzas de marea provocan las mareas en la Tierra, son responsables de que siempre veamos la misma cara de la Luna y
frenan de forma continua la rotación de la Tierra. Si las fuerzas de marea sobre un objeto sólido son muy grandes, podrían
producir su ruptura.
(5)
 Dado que en general se cumplirá que $r \gg R$, puedes utilizar las aproximaciones:

$$\frac{1}{(1-R/r)^2} \approx 1 + 2\frac{R}{r}; \qquad \frac{1}{(1+R/r)^2} \approx 1 - 2\frac{R}{r}$$

Fig. 3

P2. Solución
a) Suponiendo órbitas circulares de radio $r$ podemos igualar la fuerza centrípeta con la fuerza gravitatoria,

$$G\frac{Mm}{r^2} = m\frac{v^2}{r}$$

El periodo de la órbita $T$ lo podemos relacionar con la velocidad orbital y la longitud de la circunferencia,

$$T = \frac{2\pi r}{v}$$

De donde, si despejamos $v$ y sustituimos en la expresión de la fuerza centrípeta, obtenemos,

$$G\frac{M}{r^2} = \frac{\left(\frac{2\pi r}{T}\right)^2}{r} \quad\Rightarrow\quad \frac{T^2}{r^3} = \frac{4\pi^2}{GM}$$

Para órbitas elípticas, esta relación se convierte en

$$\frac{T^2}{a^3} = \frac{4\pi^2}{GM} \tag{1}$$

Siendo $a$ el semieje mayor de la órbita (que coincide con el radio orbital medio).
b) Para comprobar la ley de Kepler utilizando los datos de las órbitas S1 y S2 calculamos el cuadrado del
periodo orbital dividido por el cubo del semieje mayor de la órbita. Este cociente debe ser constante. A
partir de los datos de la excentricidad orbital, $e$, y distancia al perihelio, $r_P$, calculamos la distancia al
afelio, $r_A$,

$$r_A = r_P\frac{1+e}{1-e}$$

Sustituyendo los datos de la tabla para la excentricidad de S1 y S2 obtenemos

$$r_{A1} = 3{,}5\,r_{P1}; \qquad r_{A2} = 16{,}3\,r_{P2}$$

De modo que el semieje mayor de sus órbitas será

$$a_1 = \frac{1}{2}(r_{A1} + r_{P1}) = 2{,}25\,r_{P1} = 4861{,}58\ \text{UA}$$

$$a_2 = \frac{1}{2}(r_{A2} + r_{P2}) = 8{,}65\,r_{P2} = 1024{,}16\ \text{UA}$$

Se comprueba que

$$\frac{T_1^2}{a_1^3} = \frac{T_2^2}{a_2^3} \cong 2{,}4\cdot10^{-7}\ \text{años}^2/\text{UA}^3 \tag{2}$$

Por lo que podemos concluir que se cumple la Ley de Kepler para las órbitas de S1 y S2.
c) Para calcular la masa $M_*$ del objeto central, la despejamos de la expresión (1) de la ley de Kepler que
hemos obtenidos en el apartado a) y sustituimos por el valor obtenido en (2)

$$M_* = \frac{4\pi^2}{G}\left(\frac{T^2}{a^3}\right)^{-1} = \frac{4\pi^2}{6{,}67\cdot10^{-11}}(2{,}4\cdot10^{-7})^{-1} \quad\Rightarrow\quad M_* = 8{,}35\cdot10^{36}\ \text{kg} = 4{,}18\cdot10^6\,M_\odot$$

<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p5_f2.png]]
*orbite stelle intorno a Sagittario A**
<!--fig:end-->
<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p6_f3.png]]
*massa M e punti A B superficie terrestre*
<!--fig:end-->

**Topic:** [[Gravitation]], [[Astrophysics]], [[Newtonian Mechanics]]
**Metodi:** [[Kepler's Laws (metodo)|Kepler's Laws]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.5

## Problema 3

P3. Espectrómetro de masas de sector magnético1
En la figura 1 se muestra el esquema de un espectrómetro de masas (de Dempster) cuyo funcionamiento
es, en esencia, el siguiente:
En la cámara de ionización, los electrones emitidos por un filamento incandescente, una vez acelerados,
chocan con los átomos o moléculas de un gas, produciendo iones positivos. Supondremos, por sencillez, que
los iones producidos tienen carga eléctrica $+e$, siendo $e = 1{,}60218\times10^{-19}\ \text{C}$, y que “nacen” con velocidad
nula. Mediante un campo eléctrico poco intenso se conducen hacia las placas aceleradoras, entre las que existe
una diferencia de potencial $\Delta V$, (figura 2). Los iones que allí entran son acelerados por el campo eléctrico $\vec{E}$
existente entre dichas placas y salen con una velocidad $v_0$.
A través de la rendija de entrada, estos iones penetran con la velocidad $v_0$ en una región en la que hay
un campo magnético uniforme (región sombreada de la figura 1), de módulo $B$ y con dirección perpendicular
al plano de la figura. Como consecuencia, los iones describen una trayectoria circular.

1 Este problema se propuso en la Fase Aragonesa de la XV Olimpiada Española de Física, celebrada en 2004.

Fig. 1

Fig. 2

a)
Determina el radio de la trayectoria de los iones, $R$, en función de su masa, $m$, de su carga eléctrica, $e$,
del potencial acelerador, $\Delta V$, y del campo magnético, $B$.
b)
Comprueba que, en un espectrómetro de este tipo, con $R = 0{,}150\ \text{m}$ y $\Delta V = 3{,}00\ \text{kV}$, el campo
magnético $B$ que focaliza los iones en la rendija de salida viene dado, en función de la masa $m$ de los iones,
por la expresión $B = 0{,}0526\sqrt{m}$, en la que $B$ se obtiene en teslas cuando $m$ se expresa en unidades de masa
atómica.
Cuando los iones salen del campo magnético por la rendija de salida, son recogidos en un colector (caja
de Faraday). Los iones que entran en él dan lugar a una corriente eléctrica en la resistencia $R_c$ y, por
consiguiente, a una diferencia de potencial entre sus extremos. Este voltaje es proporcional a la cantidad de
iones de una determinada relación $m/e$ que llegan al colector por unidad de tiempo. Por lo tanto, será también
proporcional a la abundancia de moléculas o átomos de masa $m$ que contenga el gas que se estudia. Variando
la intensidad del campo magnético se podrán recoger en el colector iones de distintas masas, dando lugar en
$R_c$ a señales que, una vez amplificadas, procesadas y registradas, proporcionan el espectro de masas del gas
estudiado.
En la figura 3 se muestra el espectro de masas de una mezcla de dos gases nobles. En dicho espectro
aparecen los picos correspondientes a los isótopos de cada gas.
c)
Ayudándote del fragmento de Tabla Periódica que se encuentra junto a la figura 3, determina los gases
nobles que componen la mezcla.

Datos: - Unidad de masa atómica, $1\ \text{uma} = 1{,}66054\cdot10^{-27}\ \text{kg}$.

Fig. 2

P3. Solución
a) Cuando los iones de masa $m$ y carga $+e$ entran con velocidad prácticamente nula en el campo eléctrico
existente entre las placas aceleradoras (figura 2), su energía mecánica es exclusivamente potencial
electrostática, $e\Delta V$. El campo eléctrico los acelera y salen de él con energía que sólo es cinética,
$mv_0^2/2$. Como la energía mecánica debe conservarse

$$e\Delta V = \frac{1}{2}mv_0^2$$

La velocidad de los iones al entrar en la región del campo magnético es

$$v_0 = \sqrt{\frac{2e\Delta V}{m}} \tag{1}$$

A continuación, sobre los iones que se mueven en el campo magnético actúa la fuerza de Lorentz,
indicada en la nota 1 del enunciado

$$\vec{F} = e\,\vec{v}_0\times\vec{B}$$

Como $\vec{v}_0$ y $\vec{B}$ son perpendiculares, el módulo de esta fuerza es

$$F = ev_0 B$$

Esta fuerza es siempre perpendicular a la velocidad, de forma que la aceleración de los iones es normal o
centrípeta, por lo que

$$ev_0 B = m\frac{v_0^2}{R}$$

y, por tanto

$$R = \frac{mv_0}{eB} \tag{2}$$

Como $v_0$ es constante2, el radio de curvatura de la trayectoria que describen los iones es también constante,
es decir, desde que entran en el campo magnético por la rendija de entrada hasta que lo abandonan a través
de la rendija de salida seguirán una trayectoria circular. Teniendo en cuenta (1) y (2), el radio de esta
trayectoria es

$$R = \frac{1}{B}\sqrt{2\Delta V\frac{m}{e}} \tag{3}$$

b) Despejando $B$ en (3), obtenemos el campo magnético que "conduce" a los iones de masa $m$ hasta la rendija
de salida, en función de los datos de construcción del espectrómetro (radio $R$ del tubo y potencial acelerador
$\Delta V$)

$$B = \frac{1}{R}\sqrt{2\Delta V\frac{m}{e}}$$

Con los datos numéricos que se indican en el enunciado expresados en unidades del S.I., el valor del campo
magnético necesario para focalizar iones de masa $m$ en la rejilla de salida es

$$B = \frac{1}{0{,}150}\sqrt{\frac{2\times3000}{1{,}60\times10^{-19}}}\,\sqrt{m} = 1{,}29\times10^{12}\,\sqrt{m}$$

Como se ha indicado antes, en la expresión anterior la masa $m$ debe estar expresada en kg, pero en
espectrometría de masas es habitual la utilización de la unidad de masa atómica, uma. Teniendo en cuenta
la equivalencia $1\ \text{uma} = 1{,}66054\times10^{-27}\ \text{kg}$, la expresión del campo magnético se convierte en

$$B = 0{,}0526\sqrt{m} \tag{4}$$

(B en T; m en uma)
c) En el espectro de la figura 3 se distinguen siete picos, correspondientes a iones que alcanzan el colector
para siete valores del campo magnético $B$. En la tabla I se presentan estos valores de $B$ junto con las
correspondientes masas de los iones obtenidas a partir de (4).
Lógicamente, estas masas tienen que pertenecer a los isótopos de los dos gases nobles que constituyen la
mezcla a la que hace alusión el enunciado.
Utilizando la Tabla Periódica puede concluirse que los dos primeros picos corresponden a masas próximas
a 20,179 que es la masa atómica del Ne, luego deben pertenecer a isótopos de dicho gas. Análogamente,
los otros cinco picos pueden ser identificados como isótopos del Kr ya que sus masas están en torno a 83,6
que es la masa de este gas noble.
En consecuencia, la respuesta a este apartado del problema es: la mezcla binaria es de Ne-Kr

Nota: aunque no lo pide explícitamente el enunciado, a partir del espectro de la figura 3 es posible
determinar la abundancia relativa de los isótopos de Ne y Kr presentes en la mezcla de gases analizada, que
es directamente proporcional a la altura de los picos registrados.
Los dos primeros picos, correspondientes a isótopos del Ne, tienen alturas en la figura 3 de 54 y 6 unidades
(arbitrarias). Por tanto, la abundancia total de Ne en la mezcla será proporcional a 60 y la abundancia de
cada uno de los isótopos correspondientes será 54/60 = 0,90 y 6/60 = 0,10, es decir un 90% y un 10%
respectivamente.
Consultando una tabla adecuada se encuentra que el Ne es una mezcla natural de tres isótopos estables:
20Ne, 21Ne y 22Ne, cuyas abundancias son, respectivamente, 90,48%, 0,27% y 9,25%. Aunque el 21Ne es
demasiado poco abundante para ser apreciado en el espectro, las abundancias que hemos deducido para los
otros dos isótopos, habida cuenta de la imprecisión en la lectura de las alturas, concuerdan
satisfactoriamente con las dadas en la bibliografía.
Análogamente, los otros cinco picos corresponden al Kr, con alturas respectivas de 0,9 , 4,5 , 4,5 , 22 y 6,8
unidades. Por tanto, la abundancia de Kr en la mezcla es proporcional a la suma de estas alturas (38,7) y
la relativa de cada isótopo es, respectivamente: 2,3%, 11,6%, 11,6%, 56,8% y 17,6%.
De nuevo estos datos concuerdan aceptablemente con las abundancias relativas de los isótopos estables del
Kr, que son: 78Kr (0,35%; no se distingue en el espectro), 80Kr (2,25%), 82Kr (11,6%), 83Kr (11,5%), 84Kr
(57,0%) y 86Kr (17,3%).
Por último, las sumas de las alturas de los picos del Ne (60) y del Kr (38,7) son proporcionales a las
abundancias de dichos gases en la mezcla. Por consiguiente, se deduce que la mezcla está constituida por
un 61% de Ne y un 39% de Kr, aproximadamente.

<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p10_f4.png]]
*schema spettrometro di massa Dempster*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p10_f5.png]]
*regione accelerazione ioni tra le piastre*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p11_f6.png]]
*spettro di massa miscela gas nobili*
<!--fig:end-->

**Topic:** [[Magnetism]], [[Electrostatics]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.10
