---
tipo: prova
prova_id: prova_prueba_2020
competition: Argentina Physics Olympiad
comp_code: Argent
country: Argentina
year: '2020'
level: ''
pdf: gare di altri paesi/Argentina/pruebas-nacionales/prueba_2020.pdf
cluster: Meccanica
n_problemi: '6'
tags:
  - kg/prova
  - anno/2020
  - paese/Argentina
  - comp/Argent
  - cluster/Meccanica
---

# Argent 2020 — prueba_2020.pdf

**Fonte:** `gare di altri paesi/Argentina/pruebas-nacionales/prueba_2020.pdf` · Apri PDF · apri PDF p.19
**Cluster:** [[Meccanica]]

## Problema 1

Problema 1: ¡¡¡Una Aventura Espacial en el Renacimiento!!!
Una de las potencias mundiales de comienzos del siglo XVII contrató a un científico
de la época para que realice los cálculos necesarios para poner un objeto en órbita
alrededor de la Tierra. El conocimiento de la época se limitaba a las Leyes de Kepler
y a algunas cuestiones de cinemática y muy poco de dinámica. Se disponía también
de datos sobre los parámetros de la órbita lunar y estaba en ciernes el uso del
telescopio recientemente desarrollado por Galileo.
Las Leyes de Kepler, enunciadas para el movimiento planetario, son:
1) Los planetas se mueven sobre elipses con el Sol en uno de sus focos.

2) El radio vector que describe el movimiento del planeta, barre áreas iguales en
tiempos iguales.

3) Si $T_1$, $T_2$, $a_1$ y $a_2$ representan los periodos y los semiejes mayores de las
órbitas de dos planetas, 1 y 2, se cumple la siguiente relación:

$$\left(\frac{T_1}{T_2}\right)^2 = \left(\frac{a_1}{a_2}\right)^3$$

Puede resultar extraño pensar en este tipo de planteos, pero se conoce que fue el
propio Kepler quien, en una novela llamada Somnium, especuló sobre la posibilidad de
poner humanos en viaje hacia la Luna.
La tarea del científico contratado era determinar las características de la órbita que el
objeto seguiría, como así también pensar el modo en que ese objeto podía ponerse en
órbita.
Considerando los datos con los que contaba el científico:
Tabla 1: Datos con los que contaba el científico
Radio medio de la órbita lunar
$384000$ km
Período de la órbita lunar
$27{,}32$ días
Radio promedio de la Tierra
$6371$ km

Sabiendo que entre las condiciones que el cuerpo puesto en órbita debía cumplir,
estaba el hecho que debía permanecer quieto sobre el cielo de la potencia que había
contratado al científico; en la terminología moderna se diría que era un objeto geo
sincrónico.
a) Calcule el semieje mayor de la elipse sobre la que se mueve el cuerpo.
Otro requerimiento que se le solicitó al científico renacentista para el diseño de la
órbita, era que la excentricidad de la misma fuese $e = 0{,}30$. Recordar que la
excentricidad de una elipse está definida por:
$$e = \sqrt{1 - \left(\frac{b}{a}\right)^2}$$

donde $a$ es el semieje mayor y $b$ el semieje menor de la elipse.
b) Calcule el semieje menor de la elipse sobre la que se mueve el cuerpo.

Teniendo en cuenta que la ecuación para una elipse, en coordenadas polares, está
dada por:
$$r(\theta) = \frac{a(1 - e^2)}{1 + e\cos(\theta)}$$
donde $\theta$ es el ángulo que se mide desde el perigeo, en el sentido antihorario y tal que
el origen de $r$ está en el foco de la elipse (ver Figura 1). Y que el área $A$ de la misma
está dada por: $A = \pi a b$.

Figura 1: Elipse que representa la trayectoria del cuerpo puesto en órbita alrededor de
la Tierra (dibujo no a escala)

c) Calcule la velocidad areolar media del cuerpo al recorrer su órbita.

d) Calcule la velocidad media del cuerpo en las cercanías del perigeo de
la órbita.

e) Calcule la velocidad media del cuerpo en el punto más lejano (apogeo)
de su trayectoria.

Fin Prueba Nivel 1
Continúa Prueba para Nivel 2

Algunos preparativos más$\dots$
Entre las tareas del científico renacentista estaba determinar la posición del cuerpo en
su órbita en función del tiempo. Para conseguirlo calculó el área de los sectores
delimitados por la posición del radio vector $r$ en el perihelio, $r_p$, y el radio vector $r(\theta_j)$,
donde
$$\theta_j = \frac{2\pi j}{10}, \quad j = 0, \dots, 10$$
y corresponden a haber dividido el intervalo $[0, 2\pi]$ en 10 partes iguales (ver Figura 2).

Figura 2: Sector de área barrido por el vector posición
El área $A_j$ correspondiente al sector con ángulo $\theta_j$, está dada por la expresión:
$$A_j(a, e, \theta_j) = \frac{a^2(1 - e^2)^2}{2}\, I(e, \theta_j)$$
donde $a$ es el semieje mayor de la elipse, $e$ su excentricidad. Las cantidades $I(e, \theta_j)$
están dadas en la Tabla 2, para la excentricidad $e = 0{,}3$.

Tabla 2: Valores de las cantidades $I(e, \theta_j)$
para $e = 0.3$

$I(0.3, \theta_j)$
$\theta_j$
0.00
0.00
0.383
0.63
0.842
1.26
1.475
1.88
2.403
2.51
3.619
3.14
4.835
3.77
5.763
4.40
6.396
5.03
6.855
5.65
7.238
6.28
f) A partir de los datos de la Tabla 1, y usando las leyes de Kepler,
confeccione una tabla para el módulo del vector posición del cuerpo
puesto en órbita como función del tiempo. Con los datos provistos
podrá evaluar el vector posición en 11 tiempos diferentes.

¡¡¡Al infinito y más allá!!!
Isaac Newton discutió el uso de un cañón para colocar un objeto en órbita. Newton
hizo el siguiente razonamiento (en sus propias
palabras): imaginemos una montaña muy alta que su
pico esté por encima de la atmósfera de la Tierra; sobre
la cima de esa montaña hay un cañón que dispara
horizontalmente. A medida que cada disparo se hace
con una mayor carga explosiva, la bala de cañón tendrá
una mayor velocidad, y el proyectil caerá cada vez más
lejos. Finalmente, a cierta velocidad el proyectil no
tocará la tierra y quedará orbitando por siempre
alrededor de la Tierra.
Por prueba y error y procediendo de acuerdo a lo
sugerido por Newton, el científico renacentista se dispone a lanzar el proyectil, en
dirección horizontal, a distintas velocidades. El objeto que deseaba poner en órbita
tenía una masa de $200$ kg y la masa del cañón del que disponía era de $2000$ kg.
g) Diseñe un método para medir la velocidad de salida del proyectil
utilizando mediciones de la velocidad de "retroceso" de cañón.
Hoja de Respuestas Problema 1
¡¡¡Una Aventura Espacial en el Renacimiento!!!

Pts
a)
el semieje mayor de la elipse es:

b)
el semieje menor de la elipse es:

c)
la velocidad areolar media es:

d)
la velocidad media del cuerpo en las cercanías del perigeo es:

e)
la velocidad media del cuerpo en el apogeo es:

Fin Nivel 1, continúa Nivel 2

f)
Tabla para: módulo del vector posición como función del tiempo:

g)
método para medir la velocidad de salida:
Hoja de Respuestas Problema N°2:
Una Aventura Espacial en el Renacimiento!!!

Pts
a)
el semieje mayor de la elipse es:

$a_1 = 442333$ km

b)
el semieje menor de la elipse es:

$b = 40383$ km

c)
la velocidad areolar media es:

$$\text{vel}_\text{areolar} = \frac{\text{área de la elipse}}{\text{período de la órbita}} = \frac{\pi a b}{T}$$

d)
la velocidad media del cuerpo en las cercanías del perigeo es:
$$V_p = 15103\ \frac{\text{km}}{\text{h}}$$

e)
la velocidad media del cuerpo en el apogeo es:

$$v_a = \frac{2\pi b}{T(1 + e)} = 8132\ \frac{\text{km}}{\text{h}}$$

Fin Nivel 1, continúa Nivel 2
continúa Nivel 2

f)
Tabla para: módulo del vector posición como función del tiempo:

$t_j$ (h)
$r_j$ (km)
0.00
29633
1.27
31007
2.79
35286
4.89
42393
7.97
50830
12.00
55033
16.03
50868
19.11
42435
21.21
35223
22.73
31021
24.00
29633

g)
método para medir la velocidad de salida:

En cada disparo el cañón se desplazará en sentido contrario al proyectil y su velocidad
tras el disparo será:

$$v_\text{cañón} = -\frac{m_\text{cuerpo}}{m_\text{cañón}}\, v_\text{cuerpo}$$
La velocidad promedio del cañón tras el disparo es:
$$v_\text{cañón} = \frac{d}{t}$$
donde $d$ es la distancia que recorre en determinado tiempo $t$. Si fijamos la distancia, y
logramos medir el tiempo, podemos sacar la velocidad media del cañón en el
retroceso y usando la ecuación de arriba, sacar la velocidad con que se lanzó el
cuerpo al espacio.
Solución Problema "Una Aventura Espacial en el Renacimiento"
a) De acuerdo a la Tercera Ley de Kepler, si
$T_1$ = período del objeto a poner en órbita = $24$ hs
$T_2 = T_L = 27{,}32$ días $= 27{,}32\times24 = 655{,}68$ hs
$a_1$ = semieje mayor de la órbita del objeto
$a_2$ = semieje mayor de la órbita lunar $= 384000$ km. Entonces:
$$a_1 = a_2 \left(\frac{T_1}{T_2}\right)^{2/3} \implies$$

$$a_1 = 384000\ \text{km} \left(\frac{24}{655{,}68}\right)^{2/3} = 42333\ \text{km}$$

b) De la expresión de la excentricidad, podemos despejar el semieje menor
$b$:
$$b = a\sqrt{1 - e^2}$$
Sustituyendo, resulta
$$b = 42426\ \text{km} \times \sqrt{1 - (0.3)^2} = 40383\ \text{km}$$
La velocidad areolar es
$$\text{vel}_\text{areolar} = \frac{\text{área de la elipse}}{\text{período de la órbita}} = \frac{\pi a b}{T}$$
Según la Segunda Ley de Kepler, esta velocidad es la misma para cada sector
de área de la elipse. Tomemos dos puntos vecinos al perihelio, como se
muestra en la figura

El área del sector comprendido entre los puntos $P_1$ y $P_2$, es
$$\Delta A \approx \frac{1}{2}\, r_p\, \Delta r$$

**Topic:** [[Gravitation]], [[Newtonian Mechanics]]
**Metodi:** [[Kepler's Laws (metodo)|Kepler's Laws]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.19

## Problema 2

Problema 2: ¡¡¡Acelerando a fondo con un LINAC!!!

Un acelerador lineal por radio frecuencia, denominado usualmente LINAC, es un
dispositivo para acelerar partículas cargadas eléctricamente. En este tipo de aceleradores
la partícula se desplaza en una trayectoria rectilínea, a lo largo de la cual es acelerada a
intervalos por medio de un campo eléctrico de alta frecuencia.

En un modelo simplificado podemos considerar que un LINAC para acelerar iones está
compuesto por una sucesión de tubos de desplazamiento metálicos separados por
aberturas de aceleración, como se muestra esquemáticamente en la figura 1. Todo el
sistema se encuentra dentro de una cámara evacuada a un alto nivel de vacío.

Figura 1: Esquema de un acelerador lineal de partículas (LINAC) con dos etapas de
aceleración.

Con F se denomina la fuente de partículas y PA representa un pre-acelerador que inyecta
partículas a una energía determinada en el LINAC. Con $T_1$, $T_2$ y $T_3$ se indican los tubos de
desplazamiento y con $A_1$ y $A_2$ las aberturas de aceleración. V es una fuente de tensión
alterna de alta frecuencia que alimenta al LINAC. La línea a trazos indica la trayectoria de
las partículas aceleradas. Los tubos funcionan como electrodos y están conectados a una
fuente de tensión de alta frecuencia. El potencial eléctrico $V(t)$, que origina el campo
eléctrico acelerador a lo largo del eje dentro de las aberturas de aceleración, varía
sinusoidalmente con el tiempo como se muestra en la Figura 2.

El acelerador está diseñado de tal modo que, al atravesar una abertura, el ión es acelerado
por la diferencia de potencial eléctrico que se establece entre los dos tubos adyacentes. El
paso del ión por una abertura de aceleración está sincronizado con el máximo valor que
puede alcanzar el potencial acelerador. Luego de acelerado, el ión ingresa a un tubo de
desplazamiento, dentro del cual no experimenta la acción de ningún campo eléctrico. La
distancia entre los centros de dos aberturas de aceleración consecutivas, está diseñada de
modo que el ión arribe a la próxima abertura de aceleración en sincronismo con el máximo
potencial acelerador. De esta manera, la partícula va ganando energía poco a poco a
medida que atraviesa el acelerador.

Deseamos construir un LINAC para acelerar partículas alfa. Para ello disponemos de una
fuente de alimentación V, de $20$ MHz de frecuencia y una tensión máxima de $V_0 = 12{,}5$ kV.
Las partículas alfa son núcleos de ${}^{4}_{2}\text{He}$ (helio-4), es decir, están compuestas por dos
protones y dos neutrones. En una etapa de pre-aceleración se eleva la energía cinética de
las partículas alfa a $4{,}806\times10^{-14}$ J. A esta energía son inyectadas en el primer tubo de
desplazamiento del LINAC en el instante de tiempo $t = 0$ (ver Figura 2).

Considere que la longitud de las aberturas de aceleración es chica, de modo que el tiempo
de permanencia de la partícula en ellas es muy pequeño. De esta manera, el potencial
eléctrico, y por lo tanto el campo eléctrico acelerador, puede aproximarse por un valor
constante mientras la partícula se encuentra dentro de una abertura de aceleración.
Figura 2: Potencial eléctrico aplicado a los tubos de desplazamiento en función del tiempo.

Tabla 1: Valores de cantidades físicas de interés para el problema
Carga elemental
$1{,}602176\,634\times10^{-19}$ C
Velocidad de la luz
$299792458$ m/s
Masa de la partícula alfa
$4{,}001506179127$ u
Nota: La unidad de masa atómica (u) está definida como la doceava
parte de la masa atómica del
${}^{12}_{6}\text{C}$, es decir $1\,\text{u} = M({}^{12}_{6}\text{C})/12$.

Tabla 2: Valores de masas atómicas
${}^{1}_{1}\text{H}$
$1{,}007825$ u
${}^{4}_{2}\text{He}$
$4{,}002602$ u
${}^{14}_{7}\text{N}$
$14{,}003074$ u
${}^{17}_{8}\text{O}$
$16{,}999132$ u
${}^{12}_{6}\text{C}$
$19{,}926\,4687992\times10^{-27}$ kg
Nota: La unidad de masa atómica (u) está definida como la doceava
parte de la masa atómica del
${}^{12}_{6}\text{C}$, es decir $1\,\text{u} = M({}^{12}_{6}\text{C})/12$.

a) ¿Cuál es la masa de la partícula alfa en kg? ¿Cuál es la carga eléctrica de la
partícula alfa?
b) ¿Cuál es la velocidad de las partículas alfa cuando son inyectadas en el LINAC?
c) ¿Cuál debe ser la longitud del primer tubo de desplazamiento del LINAC ($T_1$ en
la Figura 1)?
d) ¿Cuánta energía cinética gana la partícula alfa en la primera abertura de
aceleración?
e) ¿Cuál debe ser la longitud del segundo tubo de desplazamiento del LINAC ($T_2$
en la Figura 1)?
f) ¿Cuánta energía cinética gana la partícula alfa en la segunda abertura de
aceleración?

Fin Prueba Nivel 1
Continúa Prueba para Nivel 2

Utilizando el LINAC

Un proceso de interacción entre una partícula y un núcleo atómico puede dar lugar a una
reacción nuclear. En estas reacciones, un núcleo, denominado núcleo blanco o núcleo padre
y que designaremos genéricamente por X, es bombardeado por un proyectil, la partícula a,
dando como resultado un núcleo residual o núcleo hijo, al que denominaremos Y, y a una
partícula emitida b. La reacción nuclear se puede escribir simbólicamente de la siguiente
manera:

$$a + X \to Y + b$$

En algunas reacciones nucleares la estructura del núcleo residual puede ser diferente a la
del núcleo blanco, en este caso la reacción da lugar a una transmutación nuclear.

Una cantidad importante en este tipo de procesos es la energía de reacción $Q$. Esta energía
se puede calcular a partir de la diferencia de las energías en reposo antes y después de la
reacción. Si la partícula proyectil y la partícula emitida corresponden a núcleos atómicos, la
energía de reacción se puede evaluar conociendo las masas atómicas correspondientes
($M$), es decir, mediante la siguiente expresión:
$$Q = (M_a + M_X - M_Y - M_b)\, c^2 \tag{1}$$

siendo $c$ la velocidad de la luz. Es importante notar que las masas involucradas en la
ecuación (1) se refieren a masas atómicas. Por lo tanto, $M_a$ y $M_b$ se refieren a las masas de
los átomos cuyos núcleos son las partículas a y b.
Si el valor de $Q$ es positivo, la reacción se denomina exotérmica. En esta situación, $Q$ es la
energía total liberada en la reacción que se convierte en energía cinética de los productos
finales de la reacción (núcleo residual Y y partícula emitida b).
En el caso en que $Q$ resulte negativo, la reacción se denomina endotérmica. Este tipo de
reacción no puede ocurrir, a menos que la partícula incidente a tenga suficiente energía
cinética. La energía cinética mínima que el proyectil a debe tener para que esta reacción
pueda tener lugar se denomina energía umbral. A partir de principios de conservación se
puede derivar la siguiente expresión para evaluar, de manera aproximada, la energía umbral
$E_u$ para una reacción endotérmica:
$$E_u = -Q \left(1 + \frac{M_a}{M_X}\right)$$

Consideremos ahora que deseamos estudiar la siguiente reacción nuclear:

$$\alpha + {}^{14}_{7}\text{N} \to p + {}^{17}_{8}\text{O} \tag{2}$$

en la que un núcleo de nitrógeno-14 (${}^{14}_{7}\text{N}$) es bombardeado con partículas alfa ($\alpha$) dando
lugar a la producción de núcleos de oxígeno-17 (${}^{17}_{8}\text{O}$) y protones (p). Teniendo en cuenta el
balance de electrones, a fin de evaluar correctamente la energía de reacción a partir de las
masas atómicas correspondientes, esta reacción puede escribirse de la siguiente manera:

$$\text{He} \,{}^{4}_{2} + {}^{14}_{7}\text{N} \to {}^{1}_{1}\text{H} + {}^{17}_{8}\text{O}$$

en donde hemos reemplazado en la expresión (2) a la partícula $\alpha$ por ${}^{4}_{2}\text{He}$ y al protón p
(núcleo del átomo de hidrógeno) por ${}^{1}_{1}\text{H}$. Cabe mencionar que esta reacción particular tiene
interés histórico debido a que fue la reacción estudiada por Ernest Rutherford en 1919,
dando lugar a la primera transmutación nuclear inducida en un laboratorio. En aquella
oportunidad Rutherford utilizó partículas alfa emitidas por una fuente radiactiva debido a que
aún no se habían desarrollado los aceleradores de partículas.

g) ¿La reacción expresada en (2) es exotérmica o endotérmica?
h) ¿Cuál es la energía umbral $E_u$ para que ocurra esta reacción?
i) ¿Cuántas etapas de aceleración deben construirse en el LINAC anterior para
poder estudiar esta reacción?
Hoja de Respuestas Problema 2:
¡¡¡Acelerando a fondo con un LINAC!!!

Pts
a)
masa de la partícula alfa:

carga eléctrica de la partíc

**Topic:** [[Electrostatics]], [[Nuclear & Particle Physics]]
**Metodi:** [[Conservation of Energy (metodo)|Conservation of Energy]], [[Mass-Energy Equivalence (metodo)|Mass-Energy Equivalence]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Unit Conversion (competenza)|Unit Conversion]]
**Fonte:** Testo (PDF) — p.30

## Problema 3

Problema 3: Agujeros Negros y la curvatura del Espacio-tiempo

Constantes Físicas
•
Masa solar $M_\text{sol} = 2\times10^{30}$ kg.
•
Constante de la gravitación de Newton $G = 6{,}67\times10^{-11}\ \text{N m}^2\,\text{kg}^{-2}$
•
Constante de Planck $h = 6{,}6\times10^{-34}$ J s
•
Velocidad de la luz $c = 3\times10^{8}\ \text{m s}^{-1}$
•
Constante de Faraday $F = 96\times10^{3}\ \text{C mol}^{-1}$
•
Permeabilidad magnética del vacío $\mu_0 = 1{,}26\times10^{-6}\ \text{N A}^{-2}$

Los Agujeros Negros son una de las predicciones
más fascinantes de la teoría de la Relatividad
General
de
Einstein.
Diminutos,
enormes,
supermasivos, poco masivos, rotantes, estáticos,
solitarios o acompañados. Todos diferentes, pero
todos raros y un poco locos. Y con una cosa en
común: deforman el espacio-tiempo de tal manera
que, si algo atraviesa su horizonte de eventos,
entonces ya no puede salir.

En muchas situaciones, el campo gravitatorio de un agujero negro se puede describir
usando la ley de gravitación de Newton. Sin embargo, hay fenómenos que no se pueden
explicar "a lo Newton" y necesitan toda la maquinaria de la teoría de la Relatividad.

En este problema estudiaremos cómo "ver" un agujero negro y cómo medir algunos de
sus parámetros básicos. También analizaremos qué nos pasaría si atravesáramos el
horizonte de eventos de un agujero negro. Finalmente estudiaremos cómo el agujero
negro curva el espacio-tiempo y cómo esto afecta nuestras ideas de tiempo.

PARTE 1. Sagitario A* en el centro de la Vía Láctea

Los agujeros negros son... negros. Sí. No se pueden ver directamente, si los "iluminamos"
con una linterna, la luz no se refleja en el horizonte de eventos. Entra y ya no sale.
Hace varios años se detectó, en el centro de nuestra Vía Láctea, un objeto muy masivo y
compacto llamado Sagitario A*. Este objeto no se pudo describir con los modelos
estándar, por lo que se pensó que era un agujero negro (actualmente se cree que puede
haber más de un agujero negro en la región central de nuestra galaxia).

Una manera de estimar la masa y el tamaño de Sagitario A* es a través del estudio de las
órbitas elípticas de las estrellas a su alrededor. Consideraremos que estas órbitas se
describen con las Leyes de Kepler.

En particular, aproximaremos la tercera ley de Kepler en la forma

$$\frac{T^2}{a^3} = \frac{4\pi^2}{G M} \tag{1}$$

donde $T$ es el período orbital, $a$ es la longitud del semieje mayor de la órbita elíptica, $M$ es
la masa del cuerpo alrededor del cual la estrella orbita (en este caso, Sagitario A*) y $G$ la
constante de gravitación universal de Newton.
Problema Teórico 3 - NIVEL 1

Una de las estrellas más próximas a Sagitario A* es la estrella S2, cuyo movimiento orbital
tiene las siguientes características

•
$a = 840\ \text{UA} = 1{,}3\times10^{14}\ \text{m}$ , Longitud del semieje mayor
•
$T = 15$ años , Período orbital
•
$e = 0{,}989$ , Excentricidad

donde UA (unidad astronómica) es $1\,\text{UA} = 150\times10^{9}$ m y $e$ es la excentricidad de la órbita
elíptica
$$e = \sqrt{1 - \frac{b^2}{a^2}} \tag{2}$$

con $b$ la longitud del semieje menor. Otro parámetro importante de la órbita es la
distancia $d$ al perihelio, el punto más próximo de la órbita al foco donde se encuentra el
cuerpo masivo,
$$d = a(1 - e) \tag{3}$$

1a. A partir de los datos de la órbita de S2 estime la masa $M$ de Sagitario A*.

1b. Indique cuánto mide el semieje menor $b$ y la distancia al perihelio $d$ en la órbita
de S2.

1c. Teniendo en cuenta que S2 puede pensarse como un punto cuando se mueve
en su órbita, y que no choca con Sagitario A*, dé una cota superior para el radio
de Sagitario A*. Es decir, ¿qué valor no puede superar el radio de Sagitario A*?
Nota: Una cota superior para una cantidad $f$ es un valor que es mayor que $f$.

1d. Usando la estimación anterior calcule la densidad que le correspondería a
Sagitario A*.

PARTE 2. ¿¿O será demasiado tarde??

Nos decidimos a hacer un viaje espacial. Sabemos que hay un agujero negro cerca, pero
no sabemos cuán cerca. De pronto sentimos cosas raras en el cuerpo... ¿Habremos
atravesado el horizonte de eventos? ¿Podremos escapar? ¿Será demasiado tarde?
Problema Teórico 3 - NIVEL 1
Consideremos una persona en el campo gravitatorio de un agujero negro con los pies
apuntando al centro del agujero negro, como se ve en la figura siguiente.

Suponiendo que el campo gravitatorio del agujero negro se puede describir por la ley de
gravitación de Newton, encontramos que diferentes puntos del cuerpo sienten diferentes
fuerzas, ya que se encuentran a diferentes distancias del agujero negro. A pesar de que
todos los puntos del cuerpo son acelerados hacia el agujero negro, los pies son atraídos
con más fuerza que la cabeza. Por lo tanto, la persona siente que la cabeza y los pies son
tironeados en sentidos opuestos, y el cuerpo tiende a estirarse. Este fenómeno se conoce
como "espaguetización" porque el cuerpo se estira y afina como un espagueti.
Para simplificar el análisis, modelamos el cuerpo humano por un segmento de longitud $L$
que se ubica a lo largo de una línea que pasa por el centro del agujero negro. Suponemos
que el centro del cuerpo está a una distancia $r$ del centro del agujero negro. Ver Figura.

2a. Dé una expresión para la aceleración gravitatoria $a$ que siente el punto central
del cuerpo y para la aceleración gravitatoria $a_A$ que siente el punto extremo del
cuerpo más próximo al agujero negro indicado en la figura como A. Escríbalas
en términos de la constante de gravitación universal de Newton $G$, la masa del
agujero negro $M$, $r$ y $L$.

2b. Dé una expresión para la aceleración que siente el punto A con respecto a la
que siente el punto medio del mismo. Es decir, escriba
$$a_{0A} = a_A - a \tag{4}$$
en términos de $G$, $M$, $r$ y $L$. Esta aceleración relativa se llaman aceleración de
marea.

2c. Tome el límite en que la longitud del cuerpo es mucho menor que la distancia al
centro del agujero negro, $L \ll r$ para determinar claramente el signo de la
aceleración de marea. Indique su sentido.
Puede ser útil la expresión
$$\frac{1}{(1 \pm x)^2} \approx 1 \mp 2x \tag{5}$$
válida cuando $x \ll 1$.

Para entender el efecto de marea que producen los agujeros negros sobre el cuerpo,
vamos a considerar dos agujeros negros bien distintos:
Problema Teórico 3 - NIVEL 1
• AN1: Agujero negro supermasivo
- masa: $M_1 = 2\times10^{39}$ kg (mil millones de masas solares).
- radio del horizonte de eventos $R_1 = 3\times10^{12}$ m (30 mil millones de
kilómetros).

• AN2: Agujero negro estelar
- masa: $M_2 = 2\times10^{31}$ kg (10 masas solares).
- radio del horizonte de eventos $R_2 = 3\times10^{4}$ m (30 kilómetros).

2d. Suponiendo que cuando la aceleración de marea es igual a $10\ \frac{\text{N}}{\text{kg}}$, una persona
siente incomodidad, calcule a qué distancia del centro de AN1 y de AN2 ocurre
esto. Suponga que la longitud de la persona es $L = 2$ m.

PARTE 3. Dilatación gravitacional del tiempo

En la teoría de la Relatividad General, la gravedad se manifiesta a través de la curvatura
del espacio y el tiempo. Esto hace, en particular, que el tiempo corra de diferente forma en
regiones con campos gravitatorios de distinta intensidad, por ejemplo cerca de un agujero
negro o lejos de él. Cuanto más cerca uno está de un objeto muy masivo, más lento corre
el tiempo. Este efecto resulta de la constancia de la velocidad de la luz y se usa a diario,
por ejemplo en el Sistema de Posicionamiento Global (GPS).
Pensemos que a una distancia $r$ del centro un agujero negro, está Schrödinger con un
gato (vivo y afuera de la caja). El gato tiene pulgas. El gato se rasca dos veces. A una
distancia muy muy grande de ellos y del agujero negro está Einstein. Einstein está tan
lejos del agujero negro que prácticamente no siente su campo gravitatorio. Tanto
Schrödinger como Einstein miden el tiempo que pasa entre las dos veces que el gato se
rasca. El tiempo que encuentra Schrödinger es $T_S$ y el tiempo que encuentra Einstein es
$T_E$. Cuando comparan las dos mediciones encuentran

$$T_E = \frac{1}{\sqrt{1 - \alpha\,\dfrac{2 M}{r}}}\, T_S \tag{6}$$

donde $M$ es la masa del agujero negro, $r$ es la distancia a la que se encuentra
Schrödinger del centro un agujero negro y $\alpha$ es una constan

**Topic:** [[Astrophysics]], [[Gravitation]], [[Special Relativity]]
**Metodi:** [[Kepler's Laws (metodo)|Kepler's Laws]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.41

## Problema 4

Problema 1
N1
N2
a-
2
1,5
b-
2
1
c-
2
1,5
d-
2
1
e-
2
1
f-
3
g-
1

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.65

## Problema 5

Problema 2
N1
N2
a-
1
0,5
b-
1,5
1
c-
2,5
1,5
d-
1,5
1
e-
2,5
1,5
f-
1
0,5
g-
0,5
h-
0,5
i-
3

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.65

## Problema 6

PROBLEMA 3
PROBLEMA 3
NIVEL 1
NIVEL 2
1.a)
1
1.a)
1
1.b)
0,5 (0,25+0,25)
1.b)
0,5 (0,25+0,25)
1.c)
1,5 (dar algo si usan a o b)
1.c)
1,5 (dar algo si usan a o b)
1.d)
1
1.d)
1
2.a)
0,5
2.a)
0,5
2.b)
0,5
2.b)
0,5
2.c)
1
2.c)
0,5
2.d)
1
2.d)
0,5
3.a)
1
2.e)
1
3.b)
1
3.a)
0,5
3.c)
1
3.b)
0,5
3.d)
1
3.e)
1

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.66
