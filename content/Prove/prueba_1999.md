---
tipo: prova
prova_id: prova_prueba_1999
competition: Argentina Physics Olympiad
comp_code: Argent
country: Argentina
year: '1999'
level: ''
pdf: gare di altri paesi/Argentina/pruebas-nacionales/prueba_1999.pdf
cluster: Meccanica
n_problemi: '3'
tags:
  - kg/prova
  - anno/1999
  - paese/Argentina
  - comp/Argent
  - cluster/Meccanica
---

# Argent 1999 — prueba_1999.pdf

**Fonte:** `gare di altri paesi/Argentina/pruebas-nacionales/prueba_1999.pdf` · Apri PDF · apri PDF p.2
**Cluster:** [[Meccanica]]

## Problema 1

Un cuerpo que puede oscilar libremente alrededor de un eje de suspensión, bajo la acción
de su propio peso, constituye un péndulo físico. Si el cuerpo tiene masa $M$ y la
aceleración de la gravedad en el lugar en que se encuentra es $g$, se demuestra que el
período de oscilación, para pequeños apartamientos de la posición de equilibrio está dado
por

$$T = 2\pi\sqrt{\frac{I}{Mgd}} \tag{1}$$

donde $I$ es el momento de inercia del cuerpo respecto del eje de suspensión, y $d$ es la
distancia del eje al centro de masa del cuerpo.
Un ejemplo simple está dado por una varilla homogénea de longitud $l$, suspendida por
uno de sus extremos, tal como muestra la figura 1.

 EJE DE OSCILACION

 $l$

 Figura 1

Si las dimensiones transversales de la varilla son pequeñas respecto de $l$, el momento de
inercia respecto de un eje perpendicular a la varilla y que pasa por uno de sus extremos
es:

$$I = \frac{Ml^2}{3}$$

Pregunta 1:
Para una varilla de cobre de $55\ \text{cm}$ de longitud, cuya masa $M=500\ \text{g}$, ¿cuál es
el período de oscilación si la gravedad en el lugar es $g=9.79\ \text{m/s}^2$?

Hoy sabemos que los primeros relojes de precisión se construyeron basándose en la
regularidad del período de un péndulo que está en la práctica constituido por un cuerpo
metálico, y para el cual el período está dado por la ecuación (1). Cuando se requiere gran
estabilidad en el período de oscilación, ante cambios en las condiciones exteriores, es
necesario tener en cuenta que las dimensiones de un cuerpo se alteran al variar la
temperatura ambiente, de acuerdo con la ley de dilatación lineal para un cuerpo
homogéneo:

$$\Delta l = \alpha\, l\, \Delta t$$

donde $l$ es la longitud inicial, $\Delta l$ su variación ante un cambio $\Delta t$ en la temperatura y $\alpha$ es
el coeficiente de dilatación lineal.

Pregunta 2
Si el valor del período calculado anteriormente corresponde a una
temperatura ambiente de $20\ ^\circ\text{C}$, ¿cuál es el nuevo período del péndulo si la
temperatura ambiente subió hasta los $30\ ^\circ\text{C}$ y el coeficiente de dilatación
lineal del cobre es $\alpha=0.0000165\ ^\circ\text{C}^{-1}$?

Pregunta 3
¿Cuál es el cambio en el número de períodos en un lapso de $24$ horas, ante
este cambio temperatura?

El problema que implica la dilatación térmica para la estabilidad del período del péndulo
puede mejorarse, mediante un diseño que hace uso de este mismo efecto para
compensarlo. Consideremos como ejemplo el péndulo físico de la figura 2, el que está
constituido por dos varillas de distinto material unidos por sus extremos, con el eje de
suspensión pasando por la unión de las dos varillas, en forma perpendicular a esta. Por
simplicidad suponemos que las dos varillas tienen igual masa $M$, sus longitudes a $20\ ^\circ\text{C}$
son $l_1$ y $l_2$ y $\alpha_1$ y $\alpha_2$ son sus coeficientes de dilatación lineal. Las dimensiones
transversales de ambas varillas son pequeñas con respecto a sus longitudes.

 $l_2$

 EJE DE OSCILACION

 $l_1$

 Figura 2

Pregunta 4
Muestre que la expresión del período de oscilación de este péndulo para $l_1>l_2$
está dada por

$$T = 2\pi\sqrt{k\,\frac{(l_1^2 + l_2^2)}{g(l_1 - l_2)}}$$

y encuentre el valor numérico de la constante $k$
Ayuda: el momento de inercia de un cuerpo respecto de un cierto eje es la suma de los
momentos de inercia de cada una de las partes del cuerpo, respecto de ese mismo
eje.

Pregunta 5
¿Cuál es la dependencia con la temperatura, del período calculado en el
punto anterior, en la aproximación lineal en $\Delta t=(t-20\ ^\circ\text{C})$?. Para esto tenga en
cuenta que $\alpha_1\Delta t\ll1$ y $\alpha_2\Delta t\ll1$ ($\ll$ significa mucho menor).

Ayuda: Si $x\ll1$ entonces se verifica aproximadamente que para cualquier $r$ entero

$$(1 + x)^r \approx 1 + rx$$

Pregunta 6
Para el caso que $l_1=2l_2$, ¿cuál es la condición que se debe cumplir entre
$\alpha_1$ y $\alpha_2$ para que el período $T$ no dependa de $\Delta t$ en la aproximación lineal?

**Topic:** [[Oscillations & Waves]], [[Rotational Dynamics]], [[Thermodynamics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Problema 2

Una tradicional familia inglesa ha decidido reciclar su castillo del siglo XII contratando a
tal fin a un afamado estudio de arquitectos. El principal inconveniente que enfrentan los
encargados de la obra es la automatización del puente levadizo que permite el acceso al
castillo sobre un foso con cocodrilos. Debido al deterioro que presenta es necesario
reemplazar las cadenas que sirven para izarlo e incorporar un motor eléctrico para
levantar o bajar el puente levadizo. Los arquitectos eligieron unas hermosas cadenas
doradas y agregaron un motor cuyo color de carcaza estaba a tono con las cadenas; sin
embargo en su primer intento quemaron el motor y luego las cadenas se rompieron.

Para solucionar este problema el estudio de arquitectos decide encarar el problema de una
manera más científica y decide subcontratarlo a usted con el propósito que les realice
todos los cálculos necesarios para realizar la elección de la cadena y el dispositivo de
motor más conveniente. A tal fin ellos le efectúan una serie de preguntas que usted debe
responder:

a) El puente levadizo está construido con madera maciza, siendo sus dimensiones $5\ \text{m}$
de largo, $2\ \text{m}$ de ancho y $20\ \text{cm}$ de espesor (la densidad de la madera es $1.2\ \text{gr/cm}^3$).
El puente puede rotar alrededor un eje que se apoya en la base de la entrada al
castillo, y a cada lado del otro extremo están sujetas sendas cadenas que permiten
izarlo y ponerlo en posición vertical u horizontal. Suponiendo que el puente debe
izarse muy lentamente:

a1) ¿cuál es la fuerza que deben ser capaces de soportar las cadenas en función
del ángulo de inclinación del puente?

a2) ¿cuál es la máxima tensión que soportarán las cadenas?

a3) Grafique aproximadamente la expresión obtenida en el punto a1).

b) El sistema de elevación del puente está constituido por un cilindro (A) de $5\ \text{cm}$ de
radio, en el cual se enrollan las cadenas, y tiene adosado una polea (B) de $40\ \text{cm}$ de
radio. La transmisión se realiza por medio de esta polea y otra en el motor (C) unidas
a través de una correa inextensible y que no desliza sobre las poleas (B) o (C)

Si la máxima cupla (o torque) que puede aportar el motor sin quemarse es de $60\ \text{N m}$

¿cuál es el máximo radio que puede tener la polea (C) adosada al motor de
manera tal que no se supere la cupla máxima?

c) Todo el sistema está montado utilizando un motor alimentado por una fuente de
corriente continua, con una diferencia de potencial de $220\ \text{V}$; se observa que al elevar
el puente la corriente suministrada al motor, en función del tiempo, tiene la forma
observada en la figura.

c1) ¿cuál es la potencia máxima suministrada al motor?

c2) ¿cuál es el consumo total de energía eléctrica para elevar el puente desde su
posición horizontal hasta que esté vertical?

c3) ¿cuánto es la energía perdida, de la energía suministrada de acuerdo con el
punto anterior, cada vez que se eleva el puente?
NOTA: CONSIDERE DESPRECIABLE LA ENERGÍA CINÉTICA DEL
PUENTE EN TODO MOMENTO

Corriente [A]
tiempo [s]

**Topic:** [[Rotational Dynamics]], [[Conservation of Energy]], [[Circuits]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.5

## Problema 3

Uno de los posibles estados finales de la evolución de una estrella, es una estrella de
neutrones. En dicho cuerpo, la materia se encuentra en un estado de muy alta
densidad, por lo que su extensión espacial es muy pequeña comparada con la de una
estrella normal, como el Sol. Según los modelos aceptados en la actualidad, los valores
típicos para el radio $R$ y la masa $M$ de una estrella de neutrones son $R = 10\ \text{km}$ y
$M = 3\times10^{30}\ \text{kg}$, respectivamente.

Pregunta a: ¿Cuál es la densidad media de tal estrella de neutrones?

Pregunta b: ¿Qué volumen ocuparía $1\ \text{m}^3$ de agua, si se la comprimiera hasta alcanzar la
densidad de la materia de una estrella de neutrones?

De acuerdo con la ley de la gravitación universal de Newton, dos cuerpos
esféricos de masas $M_1$ y $M_2$, separados por una distancia $r$ entre sus centros, se atraen
entre si con una fuerza $F$, cuya magnitud está dada por:

$$F = \frac{GM_1 M_2}{r^2}$$

donde $G = 6.67\times10^{-11}\ \text{N m}^2/\text{kg}^2$ es la constante de la gravitación. Esta misma ley es
válida si uno de los cuerpos es esférico y el otro es pequeño comparado con el primero.

Sabemos también que el peso de un cuerpo es la fuerza neta que se ejerce sobre este,
cuando está en reposo sobre la superficie de un planeta o estrella.

Pregunta c: ¿Cuál sería el peso de un estudiante cuya masa es de $60\ \text{kg}$ en la superficie
de la estrella de neutrones?

Si la estrella o planeta está en rotación, el peso de un cuerpo es distinto al que tendría de
no haber rotación, ya que aparece la fuerza centrífuga. (Recuerde que esta fuerza sólo
existe para el observador que rota con la tierra).

Pregunta d: ¿Cuál sería el peso del estudiante del punto c), ubicado sobre La Tierra,
supuesta esférica, en las siguientes situaciones:?

i)
Estudiante en el ecuador. Tierra que no rota.
ii)
Estudiante en el ecuador. Tierra rotando normalmente alrededor de su eje.
iii)
Estudiante en el polo. Tierra que no rota.
iv)
Estudiante en el polo. Tierra rotando normalmente alrededor de su eje.

Nota: Masa de la Tierra $M_T = 5.98\times10^{24}\ \text{kg}$. Radio de la Tierra $R_T = 6.37\times10^3\ \text{km}$.

La teoría de formación de las estrellas de neutrones indica que estas, en general, deben
estar dotadas de una alta velocidad de rotación sobre su eje. Sin embargo, esta velocidad
no puede sobrepasar ciertos límites ya que de hacerlo la estrella se desarmaría.

Pregunta e: ¿cuál sería la velocidad angular máxima para la estrella de neutrones de
nuestro ejemplo, suponiendo que la misma mantiene su forma esférica y su densidad
constante?

Las estrellas de neutrones se observan detectando las ondas de radio que emiten. Dicha
emisión tiene una intensidad que varía en forma periódica entre un valor máximo y cero.
La explicación más simple de este fenómeno es que la emisión se produce en una región
limitada de la superficie de la estrella, en forma esencialmente constante. De este modo,
si la estrella gira, sólo se observa cuando la zona emisora apunta en nuestra dirección y
desaparece al ocultarse. Entonces, el período de variación de la intensidad, $\tau$, es igual al
período de rotación de la estrella.

Esta pulsación en la intensidad de la emisión es la razón por la que estos objetos se
conocen como pulsares.

Para el púlsar PSR1913+16, se ha observado que el período de las pulsaciones,
$\tau$, además varía periódicamente, aumentando y disminuyendo, con un período
$T = 8\ \text{hrs}$. La explicación más simple de este fenómeno es que el púlsar (estrella) se acerca
a nosotros en los intervalos en que el período, $\tau$, decrece y se aleja cuando aumenta
(fenómeno conocido como efecto Doppler). Esto lleva a la conclusión de que el púlsar,
además de girar sobre si mismo, describe una órbita debido a la presencia de otra estrella
de neutrones, similar al pulsar. Estas dos estrellas forman lo que se conoce con el nombre
de sistema binario. Cada uno de los cuerpos que lo componen gira en órbitas alrededor
del centro de masa del sistema.

Si hacemos la suposición de que las órbitas son circulares y que las estrellas (una un
pulsar y la otra no) tienen la misma masa,

Pregunta f: ¿cuál sería el radio de la órbita del púlsar?

OLIMPIADA ARGENTINA
DE FISICA 1999

OAF'99

PRUEBA EXPERIMENTAL - 11 de Octubre de 1999

• Escriba su nombre en todas las hojas y enumere las mismas.
• Recuerde que no se puede utilizar calculadoras programables ni ningún
otro material que no esté incluido en la prueba, aparte de los útiles de
escritura.
• Antes de empezar a trabajar en la prueba experimental, lea
cuidadosamente TODO el enunciado de la misma.

Nombre:

Número de hojas entregadas:
Olimpiada Argentina de Física
1999
Prueba Experimental

Péndulo Físico - Constante de Amortiguamiento – Viscosidad del Aire

1.- Objetivo:

Determinar experimentalmente el valor del coeficiente de la viscosidad del aire.

2.- Introducción

Un cuerpo que puede oscilar libremente alrededor de un eje de suspensión, bajo la acción
de su propio peso, constituye un péndulo físico. El movimiento de un péndulo físico ideal
(en el vacío y sin rozamiento en su eje), se caracteriza por tener una amplitud de
oscilación constante con respecto al tiempo y un período $T$ dado por:

$$T = 2\pi\sqrt{\frac{I}{Mgh}} \tag{1}$$

donde: $I$ es el momento de inercia del péndulo respecto al eje de suspensión,
$M$, la masa total del péndulo
$g$, el valor de la aceleración de la gravedad en el lugar
$h$, la distancia del centro de masa al eje de suspensión.

Nota: Esta expresión es válida para amplitudes inferiores a 8 en la escala del aparato que
Ud. dispone.

Sin embargo, la amplitud y el período de un péndulo físico real usualmente se ven
afectados por la resistencia que ofrece el aire. Esto hace que la amplitud de las sucesivas
oscilaciones disminuya, a medida que transcurre el tiempo, de la forma:

$$A(t) = A_o\, e^{-ct}$$

donde:
 $c$ es la constante de amortiguamiento y
 $A_o$, es la amplitud inicial de oscilación.

En este caso, el período está dado por:

$$T = \frac{2\pi}{\sqrt{\dfrac{Mgh}{I} - c^2}}$$

El presente experimento se realizará con un péndulo físico, como el representado en la
Figura 1. En él se han colocado pantallas de cartón para incrementar el efecto de
amortiguamiento de la amplitud de oscilación, debido a la acción del aire.

La constante de amortiguamiento, $c$, bajo las presentes condiciones experimentales está
dada por:

$$c = \frac{1000\, x_o\, \eta\, S}{2I} \tag{2}$$

donde: $S$ es la superficie total que presenta el péndulo perpendicularmente a la dirección
de movimiento,
$\eta$, el coeficiente de la viscosidad del aire y
$x_o$, la distancia desde el centro de masa de los cartones al eje de oscilación.

3.- Lista de Materiales

•
Un péndulo físico.
•
Un soporte para el péndulo con escala graduada.
•
Un cronómetro.
•
1 sobre con 4 pares de cartones cuadrados de distintas dimensiones.
• Regla.
•
Taco con cuchilla. (OJO!! No tocar las cuchillas)
•
2 pesas con forma de tuercas
•
Papel milimetrado.
•
Un destornillador.

4.- Procedimiento Experimental

4.1.- Decaimiento de la amplitud en función del tiempo

a) Monte el péndulo en el soporte cuidando que el borde filoso de la cuchilla
asiente en las muescas marcadas en el soporte.
b) Utilice el tornillo para balancear el péndulo (ver Figura 1) de modo que la
aguja indique la posición del cero.
c) Tome dos cartones de igual área y sujételos, uno a cada lado del péndulo,
como se indica en la Figura 1, usando los tornillos provistos a tal efecto.
d) Monte el péndulo en el soporte cuidando que el borde filoso de la cuchilla
asiente en las muescas marcadas en el soporte.
e) Haga oscilar el péndulo y mida la amplitud $A(t)$ en función del tiempo $t$.
f) Confeccione una tabla con los valores medidos de la amplitud $A(t)$ y los
correspondientes valores de tiempo $t$.
g) Grafique el logaritmo natural de $A$ en función del tiempo.
h) Trace la recta que mejor ajuste a los puntos marcados.
i) El valor absoluto de la pendiente de esa recta es $c$. Determine el valor

**Topic:** [[Astrophysics]], [[Gravitation]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Kepler's Laws (metodo)|Kepler's Laws]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.7
