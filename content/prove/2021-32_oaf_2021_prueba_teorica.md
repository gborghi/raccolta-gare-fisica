---
title: Spagna 2021
tipo: prova
tags:
  - kg/prova
  - anno/2021
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="2021-32_oaf_2021_prueba_teorica"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2021 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/star,object/planet"></span>

<div class="qlang-switch" data-default="es"></div>



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

$$h = R\left(\frac{1}{\cos\omega t} - 1\right) \quad (1)$$

c) Durante el tiempo $t_1$ que el ascensor tarda en llegar a la terraza del hotel, la sombra del sol alcanzará una
altura

$$h = 6{,}371\cdot10^6\left(\frac{1}{\cos\left(\frac{2\pi}{24\cdot3600}\,25\right)} - 1\right) \quad\Rightarrow\quad h = 10{,}52\ \text{m}$$

Esta altura es inferior a la altura de la terraza del hotel, de modo que la pareja sí llegará a tiempo para
observar la segunda puesta de Sol.
d) Para seguir la puesta de sol, el ascensor deberá ascender con la misma velocidad que asciende la sombra,
que podemos obtener a partir de la ecuación (1),

$$v(t) = \frac{dh}{dt} \quad\Rightarrow\quad v(t) = \frac{R\omega\,\text{sen}(\omega t)}{\cos^2(\omega t)}$$

e) Con la aproximación propuesta podemos obtener una expresión de la velocidad más simple,

$$v(t) = R\omega^2 t \quad (2)$$

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
**Objects:** [[Star (object)|Star]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1pD5KB2u80zsdaQa50HV8UM6DFFMHz40X/view)


<div class="qlang-split" data-lang="it"></div>

P1. Due tramonde consecutive
Una coppia innamorata si trova al piede di un lussuoso hotel,
sul bordo di una idilliaca spiaggia situata nel cerchio equatoriale
quando, al tramonto, vedono una bella stampa della Terra
Il sole che si pone su un mare calmo (Fig. 1).
Uno degli attrazioni di questo lussuoso hotel è la
la possibilità di osservare un secondo tramonto. Per
Per facilitare questo capriccio astronomico l'hotel pone la porta d'accesso
di un ascensore proprio al piede della spiaggia. Per adempiere
soddisfazione di questo evento, la coppia felice, immediatamente dopo
Da osservare il primo tramonto, prendere l'ascensore e andare
sulla terrazza dell'hotel, situata ad un'altezza $H = 20\ \text{m}$, dove si aspettano di poter vedere per la seconda volta così eccitante
Scena. Per semplicità, consideriamo che l'ascensore salire a una velocità costante $v = 0{,}8\ \text{m/s}$.
A causa della rotazione terrestre, con velocità angolare $\omega$, la Terra ruota un piccolo angolo $\theta$ che
provoca, dopo il primo tramonto, l'apparenza di un'ombra di altezza $h$ sulla facciata dell'hotel, tale
come mostra la figura 2. Per semplificare la situazione descritta, supponiamo che i raggi del sole incidano su
parallelo al piano del cerchio equatoriale terrestre.
a)
Calcola il tempo che l'ascensore impiega per raggiungere la terrazza dell'edificio.
b)
Ottieni l'espressione $h$ di altezza dell'ombra proiettata dalla Terra sullo sfondo dell'hotel in
La funzione $R$, $\omega$ e $t$.
c)
Determina se la coppia arrivera' in tempo al terrazzo per vedere un secondo tramonto.
L'equipaggio tecnico dell'hotel decide di migliorare l'attrazione integrando un sistema di controllo del
L'ascensore che permette di salire contemporaneamente alla sua ombra, in modo che le
Gli amanti viaggiatori a bordo dell'ascensore possono godere di un lungo tramonto che dura fino a
che l'ascensore arrivi sulla terrazza.
d)
Sulla base dell'espressione ottenuta in b), calcola, in base a $R$, $\omega$ e $t$, la velocità a cui dovrebbe
salire l'ascensore per seguire l'ombra del sole sulla facciata dell'hotel.

Fig. 1

Fig. 2

Dado que el ángulo de giro $\theta$ de la Tierra durante la subida del ascensor es pequeño, las funciones
$\text{sen}\,\theta$ e $\cos\theta$ possono essere avvicinati come segue:
$\text{sen}\,\theta \approx \theta$; $\cos\theta \approx 1$.
e)
Applica l'approccio proposto per semplificare l'espressione della velocità ottenuta nel paragrafo
d).
f)
Dall'esito precedente deduce con quale velocità deve salire l'ascensore per seguire la
- Oh, l'ombra. Che tipo di movimento dovrebbe descrivere l'ascensore?
g)
Secondo i risultati di cui ai paragrafi e) e f), quanto tempo la coppia innamorata avrà per vivere il matrimonio?
Il tramonto, dal momento che l'ascensore inizia a salire fino a quando arrivano sulla terrazza dell'hotel?

Dati: - Radio Terra $R_T = 6{,}37 \times 10^6\ \text{m}$.

P1. Soluzione
a) L'ascensore sale a velocità costante, in modo che ci vorrà un tempo $t_1$ per raggiungere il terrazzo;

$$v = \frac{H}{t_1} \quad\Rightarrow\quad t_1 = \frac{H}{v} = \frac{20}{0{,}8} \quad\Rightarrow\quad t_1 = 25\ \text{s}$$

b) Secondo la figura 2, del triangolo rettangolo di angolo $\theta$ che ha per cateti $R$ e il raggio del Sole tangente a
la superficie della Terra, si deduce

$$\cos\theta = \frac{R}{R+h} \quad\Rightarrow\quad h = R\left(\frac{1}{\cos\theta} - 1\right)$$

sostituendo $\theta = \omega t$,

$$h = R\left(\frac{1}{\cos\omega t} - 1\right) \quad (1)$$

c) Durante el tiempo $t_1$ que el ascensor tarda en llegar a la terraza del hotel, la sombra del sol alcanzará una
altezza

$$h = 6{,}371\cdot10^6\left(\frac{1}{\cos\left(\frac{2\pi}{24\cdot3600}\,25\right)} - 1\right) \quad\Rightarrow\quad h = 10{,}52\ \text{m}$$

Questa altezza è inferiore alla altezza della terrazza dell'hotel, quindi la coppia arriverà in tempo per
osservare il secondo tramonto.
d) Per seguire il tramonto, l'ascensore deve salire alla stessa velocità con cui l'ombra sale;
che possiamo ottenere dall'equazione (1),

$$v(t) = \frac{dh}{dt} \quad\Rightarrow\quad v(t) = \frac{R\omega\,\text{sen}(\omega t)}{\cos^2(\omega t)}$$

e) Con l'approccio proposto possiamo ottenere un'espressione della velocità più semplice,

$$v(t) = R\omega^2 t \quad (2)$$

f) L'accelerazione può essere ottenuta dall'espressione (2) come

$$a(t) = \frac{dv}{dt} \quad\Rightarrow\quad a(t) = R\omega^2$$

L'espressione ottenuta indica che l'accelerazione è costante, quindi l'ascensore deve salire con un
movimento uniformemente accelerato.
g) Poiché l'ascensore sale con un movimento uniformemente accelerato, il tempo di salita $t_2$ fino alla fine del ciclo di
terrazza del edificio, a una altezza $H$, sarà determinata da

$$H = \frac{1}{2}at_2^2 = \frac{1}{2}R\omega^2 t_2^2 \quad\Rightarrow\quad t_2 = \sqrt{\frac{2H}{R\omega^2}} = \sqrt{\frac{2\cdot20}{6{,}371\cdot10^6\left(\frac{2\pi}{24\cdot3600}\right)^2}} \quad\Rightarrow\quad t_2 = 34{,}45\ \text{s}$$

Quindi gli innamorati avranno un po' più di mezzo minuto per procedere alla loro dichiarazione d'amore,
Il tempo che, in termini fisici, non può essere determinato se è sufficiente o meno. Per questo tempo
La maggior parte dei progetti di ricerca e di sviluppo sono stati realizzati in modo che la produzione di energia sia più rapida.
La portata di coppie veramente innamorate.

<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p2_f1.png]]
*geometria ombra Terra-Sole hotel*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Astrophysics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Small-Angle Approximation (metodo)|Small-Angle Approximation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Star (object)|Star]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1pD5KB2u80zsdaQa50HV8UM6DFFMHz40X/view)

<div class="qlang-split" data-lang="en"></div>

P1. Two consecutive sunsets
A couple in love is at the foot of a luxury hotel.
on the edge of an idyllic beach located on the equatorial circle
When they see a beautiful image of the sunset,
sunset over a calm sea (Fig. 1).
One of the attractions of this luxurious hotel is the
The possibility of a second sunset. Stop
To facilitate this astronomical whim the hotel places the entrance gate
From an elevator right at the foot of the beach. To fulfill
satisfaction to this event, the happy couple, immediately after
From watching the first sunset, take the elevator and head for the
to the hotel terrace, located at an altitude of $H = 20\ \text{m}$, where they hope to see for the second time so exciting
The scene. For simplicity, let's consider that the elevator goes up at a constant speed $v = 0{,}8\ \text{m/s}$.
Because of the Earth's rotation, at angular speed $\omega$, the Earth rotates at a small angle $\theta$ that
causes, after the first sunset, the appearance of a shadow of height $h$ on the façade of the hotel, such as
as shown in Figure 2. To simplify the situation described, let's say that the sun's rays affect the
parallel to the plane of the Earth's equatorial circle.
a)
Calculate how long it takes the elevator to reach the building's terrace.
b)
Get the expression of the height $h$ of the shadow projected by the Earth over the façade of the hotel in
The function of $R$, $\omega$ and $t$.
c)
Determine if the couple will arrive on the terrace in time to see a second sunset.
The hotel's technical team decided to improve the attraction by incorporating a control system for the
A lift which allows simultaneous ascent to the shade projected over it, so that the
For those in love, travelers aboard the elevator can enjoy a prolonged sunset that lasts up to
I want the elevator to get to the terrace.
d)
From the expression obtained in b, calculate, based on $R$, $\omega$ and $t$, the speed at which it should
climb the elevator to follow the shadow of the sun over the hotel façade.

Fig. 1

Fig. 2

Dado que el ángulo de giro $\theta$ de la Tierra durante la subida del ascensor es pequeño, las funciones
$\text{sen}\,\theta$ and $\cos\theta$ can be approximated as follows:
$\text{sen}\,\theta \approx \theta$; $\cos\theta \approx 1$.
e)
Applies the proposed approach to simplify the expression of the speed obtained in paragraph
d).
f)
From the above result it is deduced at what speed the elevator must ascend to follow the
Shadow. What kind of movement should the elevator describe?
g)
According to the results of paragraphs (e) and (f), how long will the married couple enjoy the
sunset from the moment the elevator starts to rise until you get to the hotel terrace?

Data: - Radio from the Earth $R_T = 6{,}37 \times 10^6\ \text{m}$.

P1. Solution
(a) The elevator is going up at a constant speed, so that it will take $t_1$ time to reach the terrace,

$$v = \frac{H}{t_1} \quad\Rightarrow\quad t_1 = \frac{H}{v} = \frac{20}{0{,}8} \quad\Rightarrow\quad t_1 = 25\ \text{s}$$

(b) According to Figure 2, the angle $\theta$ of the rectangle having by catheters $R$ and the ray of the Sun tangent to
the surface of the Earth, it is deduced

$$\cos\theta = \frac{R}{R+h} \quad\Rightarrow\quad h = R\left(\frac{1}{\cos\theta} - 1\right)$$

Substituting $\theta = \omega t$,

$$h = R\left(\frac{1}{\cos\omega t} - 1\right) \quad (1)$$

(c) During the time $t_1$ it takes the elevator to reach the hotel terrace, the shade of the sun will reach a
Height

$$h = 6{,}371\cdot10^6\left(\frac{1}{\cos\left(\frac{2\pi}{24\cdot3600}\,25\right)} - 1\right) \quad\Rightarrow\quad h = 10{,}52\ \text{m}$$

This height is lower than the height of the hotel terrace, so the couple will arrive in time for
observing the second sunset.
(d) To follow the sunset, the elevator shall ascend at the same speed as the shadow ascends,
which we can get from equation (1),

$$v(t) = \frac{dh}{dt} \quad\Rightarrow\quad v(t) = \frac{R\omega\,\text{sen}(\omega t)}{\cos^2(\omega t)}$$

(e) With the proposed approximation we can obtain a simpler expression of velocity,

$$v(t) = R\omega^2 t \quad (2)$$

(f) From the expression (2) we can obtain the acceleration as

$$a(t) = \frac{dv}{dt} \quad\Rightarrow\quad a(t) = R\omega^2$$

The resulting expression indicates that the acceleration is constant, so the elevator must ascend with a
uniformly accelerated movement.
g) Como el ascensor sube con movimiento uniformemente acelerado, el tiempo $t_2$ que tarda en subir hasta la
The building terrace, at a height $H$, shall be determined by:

$$H = \frac{1}{2}at_2^2 = \frac{1}{2}R\omega^2 t_2^2 \quad\Rightarrow\quad t_2 = \sqrt{\frac{2H}{R\omega^2}} = \sqrt{\frac{2\cdot20}{6{,}371\cdot10^6\left(\frac{2\pi}{24\cdot3600}\right)^2}} \quad\Rightarrow\quad t_2 = 34{,}45\ \text{s}$$

So the lovers will enjoy a little over half a minute to proceed with their declaration of love,
The Commission has already taken a number of measures to ensure that the Commission's proposals are implemented in a manner that is consistent with the objectives of the programme. So that this time was
The Commission has already decided to take the necessary steps to ensure that the
The reach of truly in love couples.

<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p2_f1.png]]
*geometria ombra Terra-Sole hotel*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Astrophysics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Small-Angle Approximation (metodo)|Small-Angle Approximation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Star (object)|Star]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1pD5KB2u80zsdaQa50HV8UM6DFFMHz40X/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Spagna 2021 — Quesito 2" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/black-hole,object/star,object/planet"></span>

<div class="qlang-switch" data-default="es"></div>



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

$$\frac{T^2}{a^3} = \frac{4\pi^2}{GM} \quad (1)$$

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

$$\frac{T_1^2}{a_1^3} = \frac{T_2^2}{a_2^3} \cong 2{,}4\cdot10^{-7}\ \text{años}^2/\text{UA}^3 \quad (2)$$

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
**Objects:** [[Black Hole (object)|Black Hole]], [[Star (object)|Star]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1pD5KB2u80zsdaQa50HV8UM6DFFMHz40X/view)


<div class="qlang-split" data-lang="it"></div>

P2. La cacciatrice di buchi neri
I buchi neri sono oggetti astrofisici che concentrano una massa così grande che non c'è nemmeno la luce.
può sfuggire al campo gravitazionale che generano. Questa proprietà rende invisibili e quindi
molto difficili da individuare, salvo per i loro effetti gravitazionali, poiché governano la dinamica delle stelle
che orbitano intorno a loro. I buchi neri sembrano emettere forme diverse di radiazione, in realtà.
originata dalla materia che li circonda.
Sagittarius A* è un oggetto compatto e luminoso in onde
radio nel centro della Via Lattea, a 26 mila anni luce dal
Sistema solare. Sagittarius A fu scoperto nel 1931 da Karl
Jansky, e consiste in diverse fonti di onde radio
che nel 1974 sono state risolte, essendo Sagittario
A* la denominazione che ha ricevuto la più intensa e compatta di
tutte.
Sagittarius A* si trova nel foco delle orbite di
varie stelle, i cui movimenti orbitali sono stati analizzati
per più di 16 anni da Andrea Ghez e Reinhard Genzel.
La figura 1 mostra le orbite apparenti1 di sei di queste
Le stelle.
Le osservazioni di Ghez e Genzel hanno rivelato che la
l'esistenza di un oggetto invisibile ed estremamente pesante,
compatibile con un buco nero supermassiccio, che attira
Le stelle orbitano intorno a loro in modo incredibile.
velocità. Andrea Ghez ha ottenuto, insieme a Reinhard Genzel, il
Premio Nobel di Fisica nel 2020 per la sua ricerca pionieristica
che ha permesso di scoprire questo buco nero supermassiccio, che
Si trova al centro della Via Lattea, il quarto
donna in ricevere questo premio sin dalla sua istituzione2.
Supponiamo in modo semplificato che si possa
Applicare la dinamica newtonica alle orbite delle stelle che
circondano Sagittarius A*, quindi non è necessario inserire
correzioni di Relatività Generale.
a)
Esprime la terza legge di Kepler in funzione della massa $M$ dell'oggetto centrale. Per questo si può supporre
orbite circolari.
Concentreremo la nostra attenzione sulle stelle S1 e S2, i cui dati sono indicati alla fine. Le sue orbite sono
Elipsi molto eccentrici, il cui semiegio maggiore equivale al raggio orbitale medio.
b)
Sulla base dei dati delle orbite di S1 e S2, verifica che rispettano la terza legge di Kepler.
_______________________________________________________________________________________
(1)
L'orbita apparente è la traiettoria della stella osservata dalla Terra, cioè la proiezione dell'orbita sulla Terra.
piano perpendicolare alla nostra linea di vista.
(2)
Andrea Ghez condivide metà del premio Nobel con Reinhard Genzel. L'altra metà del premio Nobel è per
Roger Penrose per aver scoperto che la formazione di buchi neri è una conseguenza diretta della teoria generale della
la relatività di Albert Einstein.
(3)
L'escentricità di un'orbita è correlata alle distanze all'afélium, $r_A$, e al perihelium, $r_P$, in forma

$$e = \frac{r_A - r_P}{r_A + r_P}$$

Fig. 2: Andrea Ghez

Il suo nome è stato firmato in un'unica occasione.
Fig. 1

c)
Calcola la massa $M_*$ dell'oggetto centrale, responsabile del movimento delle stelle S1 e S2.
Le dimensioni dell'oggetto centro non sono note, ma sono state accostate ad una sfera radio
$R_* = 2{,}2\cdot10^7\ \text{km}$.
d)
Calcola l'accelerazione della gravità che avremmo osservato in un punto sul bordo di tale distribuzione
di massa, presumibilmente sferica, in unità $g$, l'accelerazione della gravità sulla superficie terrestre.
e)
Qual è la velocità di scarico di tale oggetto in unità della velocità della luce?
in vuoto, $c$?
Quando un oggetto non puntuale è sottoposto all'azione gravitazionale di un altro appariscono su di esso ciò che si
La forza di marea è la differenza tra le forze gravitazionali che un'altra
massa $m$ in diverse posizioni della superficie dell'oggetto non puntuale4. Sono definite come la differenza tra
la forza che agisce sulla massa $m$ in un punto della superficie dell'oggetto non puntuale meno la forza che
agisce su tale massa se si trova al centro dell'oggetto.
La situazione semplificata è illustrata in figura 3.
Considereremo i punti A e B, sulla superficie del
oggetto radio $R$ su cui agisce l'azione gravitazionale
di massa $M$ (che possiamo considerare puntuale); C è il
centro dell'oggetto, a distanza $r$ dalla massa $M$;
di superficie più vicina alla massa $M$ e B più
- Non lo so. Tutti i punti sono allineati.
f)
Calcolare5 la forza di marea per una massa $m$ collocata nei punti A e B, in funzione di $r$, $R$ e $M$,
Indicando il modulo, la direzione e il senso.
g)
Determina il rapporto tra la forza di marea che agisce sul punto A della Terra a causa della
l'azione combinata del sole e della luna quando i tre sono perfettamente allineati e la forza di
La marea che avrebbe sperimentato tale punto A sulla Terra se si trovasse situato sul perihelio della Terra
Orbita della stella S2 attorno a Sagittario A*.

Dati:
- eccentricità dell'orbita di S1, $e_1 = 0{,}5560$
- eccentricità dell'orbita di S2, $e_2 = 0{,}8843$
- Periodo orbitale di S1, $T_1 = 166\ \text{años}$
- Periodo orbitale di S2, $T_2 = 16{,}1\ \text{años}$
- Distanza per perihelione di S1, $r_{P1} = 2160{,}7\ \text{UA}$
- Distanza da S2 perielio, $r_{P2} = 118{,}4\ \text{UA}$
- unità astronomica, $1\ \text{UA} = 1{,}5\cdot10^{11}\ \text{m}$
- Velocità della luce in vuoto, $c = 3\cdot10^8\ \text{m/s}$
- Massa del Sole, $M_\odot = 1{,}99\cdot10^{30}\ \text{kg}$
- Massa della luna, $M_L = 7{,}34\cdot10^{22}\ \text{kg}$
- Distanza Sole-Terra, $r_S = 1\ \text{UA}$
- Distanza Luna-Terra, $r_L = 3{,}844\cdot10^5\ \text{km}$
- Costante gravitazionale $G = 6{,}67\cdot10^{-11}\ \text{N m}^2\text{kg}^{-2}$
- Radio Terra $R_T = 6{,}37\times10^6\ \text{m}$
________________________________________________________________________________________
(4)
Le forze delle maree provocano le maree sulla Terra, sono responsabili del fatto che vediamo sempre la stessa faccia della Luna e
frenano continuamente la rotazione della Terra. Se le forze di marea su un oggetto solido sono molto grandi, potrebbero
e di creare la sua rottura.
(5)
Poiché in genere si soddisferà $r \gg R$, si possono utilizzare le seguenti approcci:

$$\frac{1}{(1-R/r)^2} \approx 1 + 2\frac{R}{r}; \qquad \frac{1}{(1+R/r)^2} \approx 1 - 2\frac{R}{r}$$

Fig. 3

P2. Soluzione
a) Supponiamo orbite circolari di radio $r$ che la forza centripetal sia uguale alla forza gravitazionale,

$$G\frac{Mm}{r^2} = m\frac{v^2}{r}$$

Il periodo di orbita $T$ può essere correlato alla velocità orbitale e alla lunghezza della circonferenza,

$$T = \frac{2\pi r}{v}$$

Da dove, se si sbarazza di $v$ e si sostituisce nell'espressione della forza centripeta, si ottiene,

$$G\frac{M}{r^2} = \frac{\left(\frac{2\pi r}{T}\right)^2}{r} \quad\Rightarrow\quad \frac{T^2}{r^3} = \frac{4\pi^2}{GM}$$

Per le orbite elliptiche, questa relazione diventa

$$\frac{T^2}{a^3} = \frac{4\pi^2}{GM} \quad (1)$$

Essendo $a$ la semicirca maggiore dell'orbita (corrispondente al raggio orbitale medio).
b) Per verificare la legge di Kepler utilizzando i dati delle orbite S1 e S2 calcoliamo il quadrato del
periodo orbitale diviso dal cubo del semiegio maggiore dell'orbita. Questo coefficiente deve essere costante. A
Sulla base dei dati dell'eccentricità orbitale, $e$, e della distanza al perihelione, $r_P$, calcoliamo la distanza al
aereo, $r_A$,

$$r_A = r_P\frac{1+e}{1-e}$$

Sostituendo i dati della tabella per l'escentricità di S1 e S2 otteniamo

$$r_{A1} = 3{,}5\,r_{P1}; \qquad r_{A2} = 16{,}3\,r_{P2}$$

Quindi la semiaestria maggiore delle sue orbite sarà

$$a_1 = \frac{1}{2}(r_{A1} + r_{P1}) = 2{,}25\,r_{P1} = 4861{,}58\ \text{UA}$$

$$a_2 = \frac{1}{2}(r_{A2} + r_{P2}) = 8{,}65\,r_{P2} = 1024{,}16\ \text{UA}$$

Si verifica che

$$\frac{T_1^2}{a_1^3} = \frac{T_2^2}{a_2^3} \cong 2{,}4\cdot10^{-7}\ \text{años}^2/\text{UA}^3 \quad (2)$$

Quindi possiamo concludere che si adempie alla legge di Kepler per le orbite di S1 e S2.
c) Per calcolare la massa $M_*$ dell'oggetto centrale, la dischiamo dall'espressione (1) della legge di Kepler che
abbiamo ottenuto al punto (a) e sostituito con il valore ottenuto al punto (2)

$$M_* = \frac{4\pi^2}{G}\left(\frac{T^2}{a^3}\right)^{-1} = \frac{4\pi^2}{6{,}67\cdot10^{-11}}(2{,}4\cdot10^{-7})^{-1} \quad\Rightarrow\quad M_* = 8{,}35\cdot10^{36}\ \text{kg} = 4{,}18\cdot10^6\,M_\odot$$

<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p5_f2.png]]
Orbita stellare attorno a Sagittario A
<!--fig:end-->
<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p6_f3.png]]
*massa M e punti A B superficie terrestre*
<!--fig:end-->

**Topic:** [[Gravitation]], [[Astrophysics]], [[Newtonian Mechanics]]
**Metodi:** [[Kepler's Laws (metodo)|Kepler's Laws]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Black Hole (object)|Black Hole]], [[Star (object)|Star]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1pD5KB2u80zsdaQa50HV8UM6DFFMHz40X/view)

<div class="qlang-split" data-lang="en"></div>

P2. The black hole hunter
Black holes are astrophysical objects that concentrate mass so large that not even light can be seen.
It can escape the gravitational field they generate. This property makes them invisible and therefore
Very difficult to detect, except for their gravitational effects, as they govern the dynamics of stars.
orbiting in their environment. Black holes seem to emit different forms of radiation, actually.
The origin of the matter in them.
Sagittarius A* is a compact, bright object in waves
The radiation at the center of the Milky Way, 26,000 light-years from Earth
The solar system. Sagittarius A was discovered in 1931 by Karl
Jansky, and consists of different radio wave sources
overlapping, which in 1974 were resolved, being Sagittarius
A* the name given to the most intense and compact of the
All of them.
Sagittarius A* is in the focus of the orbits of the
Several stars, whose orbital motions were analyzed
For over 16 years by Andrea Ghez and Reinhard Genzel.
Figure 1 shows the apparent orbits1 of six of these
The stars.
The observations of Ghez and Genzel have revealed the
the existence of an invisible and extremely heavy object,
It is compatible with a supermassive black hole, which attracts
These stars orbit around them in incredible ways.
speed. Andrea Ghez obtained, together with Reinhard Genzel, the
Nobel Prize in Physics in 2020 for his pioneering research
which has allowed us to discover this supermassive black hole, which
It is located in the center of the Milky Way, being the fourth
The award is the first of its kind to be awarded since its inception.
Let's assume in a simplified way that you can
Apply newtonian dynamics to the orbits of stars that
surround Sagittarius A*, so it is not necessary to enter
The correction of general relativity.
a)
Expresa la tercera ley de Kepler en función de la masa $M$ del objeto central. For that you can assume
orbiting in a circular orbit.
We're going to focus our attention on the stars S1 and S2, whose data are indicated at the end. Its orbits are
Very eccentric ellipses3, the major half-life of which is equal to the average orbital radius.
b)
From the data of the orbits of S1 and S2, you check that they meet Kepler's third law.
_______________________________________________________________________________________
(1)
The apparent orbit is the path of the star as seen from Earth, i.e. the projection of the orbit over the
plane perpendicular to our line of sight.
(2)
Andrea Ghez shares half the Nobel Prize with Reinhard Genzel. The other half of the Nobel Prize goes to
Roger Penrose for finding that black hole formation is a direct consequence of the general theory of
It's the theory of relativity of Albert Einstein.
(3)
The eccentricity of an orbit is related to the distances to the aphelion, $r_A$, and to the perihelion, $r_P$, in the form

$$e = \frac{r_A - r_P}{r_A + r_P}$$

Fig. 2: Andrea Ghez

https://en.wikipedia.org/wiki/Sagittarius_A*
Fig. 1

c)
Calculates the mass $M_*$ of the central object, responsible for the movement of the stars S1 and S2.
The dimensions of the object are unknown, but they have been attached to a radio sphere.
$R_* = 2{,}2\cdot10^7\ \text{km}$.
d)
Calculate the gravitational acceleration we would observe at a point on the edge of that distribution
of mass, assumed spherical, in units of $g$, the acceleration of gravity on the earth's surface.
e)
What would be the escape velocity of that object in units of the speed of light?
in the vacuum, $c$?
When a non-point object is subjected to the gravitational action of another object, what appears over it is
They call tidal forces, because of the difference in gravitational forces that would be experienced by a
mass $m$ at different positions on the surface of the non-point object4. They are defined as the difference between
The force acting on the mass $m$ at a point on the surface of the object not punctuated less the force that
It would act on that mass if it were located at the centre of the object.
The simplified situation is illustrated in Figure 3.
We will consider points A and B on the surface of the
radio object $R$ on which the gravitational action acts
of mass $M$ (which we can consider pointed); C is the
The object centre, at a distance $r$ from the mass $M$;
of the surface closest to the mass $M$ and B the nearest
I'm going to go away. All points are aligned.
f)
Calculate5 the tidal force for a mass $m$ placed at points A and B, based on $r$, $R$ and $M$,
indicating its module, direction and direction.
g)
It determines the relationship between the tidal force acting on point A of the Earth due to the
The combined action of the Sun and Moon when the three are perfectly aligned and the force of the
The tidal wave that would be experienced by point A on Earth if it were placed at the perihelion of the
orbit of the star S2 around Sagittarius A*.

The data:
- Excentricity of the orbit of S1, $e_1 = 0{,}5560$
- Excentricity of the orbit of S2, $e_2 = 0{,}8843$
- orbital period of S1, $T_1 = 166\ \text{años}$
- orbital period of S2, $T_2 = 16{,}1\ \text{años}$
- S1 perihelion distance, $r_{P1} = 2160{,}7\ \text{UA}$
- S2 perihelion distance, $r_{P2} = 118{,}4\ \text{UA}$
- Astronomical unit, $1\ \text{UA} = 1{,}5\cdot10^{11}\ \text{m}$
- Speed of light in vacuum, $c = 3\cdot10^8\ \text{m/s}$
- Mass of the Sun, $M_\odot = 1{,}99\cdot10^{30}\ \text{kg}$
- Mass of the Moon, $M_L = 7{,}34\cdot10^{22}\ \text{kg}$
- Sun-Earth distance, $r_S = 1\ \text{UA}$
- Moon-Earth distance, $r_L = 3{,}844\cdot10^5\ \text{km}$
- Gravitational constant $G = 6{,}67\cdot10^{-11}\ \text{N m}^2\text{kg}^{-2}$
- Radio of the Earth $R_T = 6{,}37\times10^6\ \text{m}$
________________________________________________________________________________________
(4)
The tidal forces cause the tides on Earth, they're responsible for making us always see the same face of the moon and
They continuously slow down the Earth's rotation. If the tidal forces on a solid object are too great, they could
cause its rupture.
(5)
Since $r \gg R$ will generally be met, you can use the following approaches:

$$\frac{1}{(1-R/r)^2} \approx 1 + 2\frac{R}{r}; \qquad \frac{1}{(1+R/r)^2} \approx 1 - 2\frac{R}{r}$$

Fig. 3

P2. Solution
(a) Assuming circular radial orbits $r$ we can equate the centrifugal force with the gravitational force,

$$G\frac{Mm}{r^2} = m\frac{v^2}{r}$$

El periodo de la órbita $T$ lo podemos relacionar con la velocidad orbital y la longitud de la circunferencia,

$$T = \frac{2\pi r}{v}$$

Where, if we clear $v$ and substitute in the centrifugal force expression, we get,

$$G\frac{M}{r^2} = \frac{\left(\frac{2\pi r}{T}\right)^2}{r} \quad\Rightarrow\quad \frac{T^2}{r^3} = \frac{4\pi^2}{GM}$$

For elliptical orbits, this relationship becomes

$$\frac{T^2}{a^3} = \frac{4\pi^2}{GM} \quad (1)$$

Being $a$ the major halfway point of the orbit (which coincides with the mean orbital radius).
(b) To test Kepler's law using the data from orbits S1 and S2 we calculated the square of the
orbital period divided by the cube of the major semicircle of the orbit. This ratio must be constant. A
From the data of the orbital eccentricity, $e$, and distance to perihelion, $r_P$, we calculate the distance to the
afelio, $r_A$,

$$r_A = r_P\frac{1+e}{1-e}$$

By replacing the data from the table for the eccentricity of S1 and S2 we get

$$r_{A1} = 3{,}5\,r_{P1}; \qquad r_{A2} = 16{,}3\,r_{P2}$$

So the major semiaquity of its orbits will be

$$a_1 = \frac{1}{2}(r_{A1} + r_{P1}) = 2{,}25\,r_{P1} = 4861{,}58\ \text{UA}$$

$$a_2 = \frac{1}{2}(r_{A2} + r_{P2}) = 8{,}65\,r_{P2} = 1024{,}16\ \text{UA}$$

It is proved that

$$\frac{T_1^2}{a_1^3} = \frac{T_2^2}{a_2^3} \cong 2{,}4\cdot10^{-7}\ \text{años}^2/\text{UA}^3 \quad (2)$$

So we can conclude that Kepler's Law is fulfilled for the orbits of S1 and S2.
c) Para calcular la masa $M_*$ del objeto central, la despejamos de la expresión (1) de la ley de Kepler que
We have obtained in subparagraph (a) and we have replaced by the value obtained in (2)

$$M_* = \frac{4\pi^2}{G}\left(\frac{T^2}{a^3}\right)^{-1} = \frac{4\pi^2}{6{,}67\cdot10^{-11}}(2{,}4\cdot10^{-7})^{-1} \quad\Rightarrow\quad M_* = 8{,}35\cdot10^{36}\ \text{kg} = 4{,}18\cdot10^6\,M_\odot$$

<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p5_f2.png]]
*orbite stelle intorno a Sagittario A**
<!--fig:end-->
<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p6_f3.png]]
*mass M and points A B surface *
<!--fig:end-->

**Topic:** [[Gravitation]], [[Astrophysics]], [[Newtonian Mechanics]]
**Metodi:** [[Kepler's Laws (metodo)|Kepler's Laws]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Black Hole (object)|Black Hole]], [[Star (object)|Star]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1pD5KB2u80zsdaQa50HV8UM6DFFMHz40X/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Spagna 2021 — Quesito 3" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/electron,object/particle-beam"></span>

<div class="qlang-switch" data-default="es"></div>



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

$$v_0 = \sqrt{\frac{2e\Delta V}{m}} \quad (1)$$

A continuación, sobre los iones que se mueven en el campo magnético actúa la fuerza de Lorentz,
indicada en la nota 1 del enunciado

$$\vec{F} = e\,\vec{v}_0\times\vec{B}$$

Como $\vec{v}_0$ y $\vec{B}$ son perpendiculares, el módulo de esta fuerza es

$$F = ev_0 B$$

Esta fuerza es siempre perpendicular a la velocidad, de forma que la aceleración de los iones es normal o
centrípeta, por lo que

$$ev_0 B = m\frac{v_0^2}{R}$$

y, por tanto

$$R = \frac{mv_0}{eB} \quad (2)$$

Como $v_0$ es constante2, el radio de curvatura de la trayectoria que describen los iones es también constante,
es decir, desde que entran en el campo magnético por la rendija de entrada hasta que lo abandonan a través
de la rendija de salida seguirán una trayectoria circular. Teniendo en cuenta (1) y (2), el radio de esta
trayectoria es

$$R = \frac{1}{B}\sqrt{2\Delta V\frac{m}{e}} \quad (3)$$

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

$$B = 0{,}0526\sqrt{m} \quad (4)$$

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
**Objects:** [[Electron (object)|Electron]], [[Particle Beam (object)|Particle Beam]]
**Fonte:** [Testo (PDF) — p.10](https://drive.google.com/file/d/1pD5KB2u80zsdaQa50HV8UM6DFFMHz40X/view)


<div class="qlang-split" data-lang="it"></div>

P3. Spettometro di massa del settore magnetico1
La figura 1 mostra lo schema di uno spettometro di massa (dempster) il cui funzionamento
è, in sostanza, il seguente:
Nella camera di ionizzazione, gli elettroni emessi da un filamento incandescente, una volta accelerati,
colpiscono gli atomi o le molecole di un gas, producendo ioni positivi. Supponiamo, per semplicità, che
ioni prodotti hanno una carica elettrica $+e$, essendo $e = 1{,}60218\times10^{-19}\ \text{C}$, e che si nascono a velocità
- Niente. La velocità di un'accelerazione è di circa un milione di metri.
una differenza di potenziale $\Delta V$ (Figura 2). Gli ioni che entrano lì sono accelerati dal campo elettrico $\vec{E}$
La velocità di uscita è $v_0$.
Attraverso la fessura di ingresso, questi ioni penetrano a velocità $v_0$ in una regione in cui c'è
un campo magnetico uniforme (regione ombrata di figura 1), modulo $B$ e orientato perpendicularmente
al piano della figura. Di conseguenza, gli ioni descrivono una traiettoria circolare.

1 Questo problema è stato proposto nella Fase Aragona della XV Olimpiada spagnola di fisica, celebrata nel 2004.

Fig. 1

Fig. 2

a)
Determina il raggio di percorso degli ioni, $R$, in funzione della loro massa, $m$, della loro carica elettrica, $e$,
di potenza acceleratrice, $\Delta V$, e di campo magnetico, $B$.
b)
Verifica che, in uno spettometro di questo tipo, con $R = 0{,}150\ \text{m}$ e $\Delta V = 3{,}00\ \text{kV}$, il campo
Magnetico $B$ che focalizza gli ioni nella spazia di uscita viene dato, in funzione della massa $m$ degli ioni,
per l'espressione $B = 0{,}0526\sqrt{m}$, in cui $B$ è ottenuto in tessuti quando $m$ è espresso in unità di massa
- Atomico.
Quando gli ioni escono dal campo magnetico attraverso la scia di uscita, vengono raccolti in un colettore (caixa)
di Faraday). Gli ioni che entrano in esso producono un corrente elettrica alla resistenza $R_c$ e, per
La differenza di potenziale tra le loro estremità. Questa voltazione è proporzionale alla quantità di
ioni di un determinato rapporto $m/e$ che arrivano al collezionista per unità di tempo. Quindi, sarà anche
proporzionale all'abbondanza di molecole o atomi di massa $m$ contenuta nel gas studiato. Variazione
L'intensità del campo magnetico può essere raccolta nel colettore da ioni di diverse masse, dando luogo a
$R_c$ a segnali che, una volta amplificati, elaborati e registrati, forniscono lo spettro di massa del gas
studiato.
La figura 3 mostra lo spettro di massa di una miscela di due gas nobili. In quel spettro
i picchi corrispondenti agli isotopi di ogni gas sono visualizzati.
c)
Usando il frammento di Periodic Table che si trova accanto alla figura 3, determina i gas
nobili che compongono la miscela.

Dati: - Unità di massa atomica, $1\ \text{uma} = 1{,}66054\cdot10^{-27}\ \text{kg}$.

Fig. 2

P3. Soluzione
a) Quando gli ioni di massa $m$ e carico $+e$ entrano a velocità praticamente zero nel campo elettrico
La capacità di un'accelerazione di un'energia di tipo di gas di cui all'allegato II, paragrafo 1, del regolamento (CE) n.
electrostática, $e\Delta V$. Il campo elettrico li accelera e ne esce con energia che è solo cinetica,
$mv_0^2/2$. Come l'energia meccanica deve essere conservata

$$e\Delta V = \frac{1}{2}mv_0^2$$

La velocità degli ioni che entrano nella regione del campo magnetico è

$$v_0 = \sqrt{\frac{2e\Delta V}{m}} \quad (1)$$

Quindi, sugli ioni che si muovono nel campo magnetico agisce la forza di Lorentz,
di cui alla nota 1 della dichiarazione

$$\vec{F} = e\,\vec{v}_0\times\vec{B}$$

Poiché $\vec{v}_0$ e $\vec{B}$ sono perpendicolari, il modulo di questa forza è

$$F = ev_0 B$$

Questa forza è sempre perpendicolare alla velocità, in modo che l'accelerazione degli ioni sia normale o
Centripetto, quindi

$$ev_0 B = m\frac{v_0^2}{R}$$

e, quindi,

$$R = \frac{mv_0}{eB} \quad (2)$$

Poiché $v_0$ è costante2, il raggio di curvatura del percorso che descrivono gli ioni è anche costante,
Cioè, da quando entrano nel campo magnetico attraverso la fessura di ingresso fino a quando non lo lasciano attraverso
dalla rottura di uscita seguiranno un percorso circolare. Considerando (1) e (2), il raggio di
La traccia è

$$R = \frac{1}{B}\sqrt{2\Delta V\frac{m}{e}} \quad (3)$$

b) Sconfiggendo $B$ in (3), si ottiene il campo magnetico che "conduce" gli ioni di massa $m$ fino alla spazzatura
di uscita, in base ai dati di costruzione dello spettometro (radio $R$ del tubo e potenziale acceleratore)
$\Delta V$)

$$B = \frac{1}{R}\sqrt{2\Delta V\frac{m}{e}}$$

Con i dati numerici indicati nella frase espressi in unità di S.I., il valore del campo
Magnetico necessario per focalizzare ioni di massa $m$ nella rete di uscita è

$$B = \frac{1}{0{,}150}\sqrt{\frac{2\times3000}{1{,}60\times10^{-19}}}\,\sqrt{m} = 1{,}29\times10^{12}\,\sqrt{m}$$

Come indicato in precedenza, nell'espressione precedente la massa $m$ deve essere espressa in kg, ma in
La frequenza di un'unità di massa atomica è la frequenza di un'unità di massa atomica. Considerando che
l'equivalenza $1\ \text{uma} = 1{,}66054\times10^{-27}\ \text{kg}$, l'espressione del campo magnetico viene convertita in

$$B = 0{,}0526\sqrt{m} \quad (4)$$

(B in T; m in una)
(c) Nel spettro di figura 3 sono distinguiti sette picchi, corrispondenti agli ioni che raggiungono il colettore
per sette valori del campo magnetico $B$. In tabella I sono riportati i valori di $B$ insieme alle
le massime di ioni ottenute a partire da (4).
Logicamente, queste masse devono appartenere agli isotopi dei due gas nobili che costituiscono la
un mix di quello che la frase fa riferimento.
Usando la tabella periodica si può concludere che i primi due picchi corrispondono a masse vicine
a 20,179 che è la massa atomica del Ne, quindi devono appartenere agli isotopi di tale gas. Analogamente,
Gli altri cinque picchi possono essere identificati come isotopi del Kr poiché i loro massaggi sono intorno a 83,6
che è la massa di questo gas nobile.
La risposta a questo punto del problema è:

Nota: anche se non è espressamente richiesto dalla frase, è possibile utilizzare lo spettro di figura 3
determinare la relativa abbondanza di isotopi di Ne e Kr presenti nella miscela di gas analizzata, che
è direttamente proporzionale alla altezza dei picchi registrati.
I primi due picchi, che corrispondono agli isotopi del Ne, hanno altezza nella figura 3 di 54 e 6 unità.
(arbitrari) Quindi, l'abbondanza totale di Ne nella miscela sarà proporzionale a 60 e l'abbondanza di
ogni isotopo corrispondente sarà 54/60 = 0,90 e 6/60 = 0,10, cioè un 90% e un 10%
rispettivamente.
Consultando un'adeguata tabella si scopre che il Ne è un mix naturale di tre isotopi stabili:
20Ne, 21Ne e 22Ne, rispettivamente con abbondanza di 90,48%, 0,27% e 9,25%. Anche se il 21Ne è
La nostra ricerca è stata condotta in modo che la produzione di prodotti di questo tipo sia più che possibile riprodurre.
Altri due isotopi, in considerazione dell'imprecisione nella lettura delle altezze, concordano
La Commissione ha adottato una decisione che non è stata adottata.
Analogamente, gli altri cinque picchi corrispondono al Kr, con altezze rispettive di 0,9, 4,5 , 4,5 , 22 e 6,8
unità. La quantità di Kr nella miscela è proporzionale alla somma di queste altezze (38,7) e
il relativo di ciascun isotopo è rispettivamente: 2,3%, 11,6%, 11,6%, 56,8% e 17,6%.
Infine, la Commissione ha adottato una decisione che prevede che il sistema di controllo dei dati sia stato adottato in base alle informazioni disponibili.
Kr, che sono: 78Kr (0,35%; non si distingue nello spettro), 80Kr (2,25%), 82Kr (11,6%), 83Kr (11,5%), 84Kr
(57,0%) y 86Kr (17,3%).
Infine, le somme delle altezze dei picchi Ne (60) e Kr (38,7) sono proporzionali alle altezze dei picchi Ne (60) e Kr (38,7)
l'abbondanza di tali gas nella miscela. Si deduce quindi che la miscela è costituita da:
un 61% di Ne e un 39% di Kr, circa.

<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p10_f4.png]]
*schema di spettrometro di massa Dempster*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p10_f5.png]]
*regione accelerazione ioni tra il piastra*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_teorica/2021 32_oaf_2021_prueba_teorica_p11_f6.png]]
*spettro di massa miscela di gas nobile*
<!--fig:end-->

**Topic:** [[Magnetism]], [[Electrostatics]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Electron (object)|Electron]], [[Particle Beam (object)|Particle Beam]]
**Fonte:** [Testo (PDF) — p.10](https://drive.google.com/file/d/1pD5KB2u80zsdaQa50HV8UM6DFFMHz40X/view)

<div class="qlang-split" data-lang="en"></div>

P3. Magnetic sector mass spectrometer1
Figure 1 shows the diagram of a mass spectrometer (Dempster) whose operation is
is essentially as follows:
In the ionization chamber, electrons emitted by an incandescent filament, once accelerated,
They collide with atoms or molecules in a gas, producing positive ions. We shall assume, for simplicity's sake, that
The ions produced have an electric charge of $+e$, being $e = 1{,}60218\times10^{-19}\ \text{C}$, and are natured at a rate of
- No, not at all. The electric field is less intense and leads to the accelerating plates, including the
una diferencia de potencial $\Delta V$, (figura 2). Los iones que allí entran son acelerados por el campo eléctrico $\vec{E}$
existente entre dichas placas y salen con una velocidad $v_0$.
Through the input gap, these ions penetrate at $v_0$ speed into a region where there is a
a uniform magnetic field (shading region of Figure 1), of module $B$ and with a perpendicular direction
the plane of the figure. As a result, the ions describe a circular path.

1 This problem was proposed in the Aragonese phase of the XV Spanish Physics Olympiad, held in 2004.

Fig. 1

Fig. 2

a)
Determine the radius of the ion trajectory, $R$, by mass, $m$, electric charge, $e$,
The accelerator potential, $\Delta V$, and the magnetic field, $B$.
b)
Check that, on a spectrometer of this type, with $R = 0{,}150\ \text{m}$ and $\Delta V = 3{,}00\ \text{kV}$, the field
The magnetic $B$ that focuses the ions in the output slit is given, based on the mass $m$ of the ions,
by the expression $B = 0{,}0526\sqrt{m}$, where $B$ is obtained in units of mass when $m$ is expressed in units of mass
The atomic bomb.
When the ions leave the magnetic field through the output slot, they are collected in a collector (box)
It's a faraday. The ions entering it give rise to an electric current at the resistance $R_c$ and, by
The Commission has therefore decided to extend the scope of the proposed measures to the Member States. This voltage is proportional to the amount of
ions of a given ratio $m/e$ reaching the collector per unit time. So it will also be
proportional to the abundance of molecules or atoms of mass $m$ contained in the gas being studied. Varying
The magnetic field intensity can be collected in the collector of different masses, resulting in
$R_c$ to signals which, once amplified, processed and recorded, provide the gas mass spectrum
I've been studying.
Figure 3 shows the mass spectrum of a mixture of two noble gases. In that spectrum
The peaks corresponding to the isotopes of each gas are shown.
c)
Using the periodic table fragment next to Figure 3, it determines the gases
The nobles who make up the mix.

Data: - Unit of atomic mass, $1\ \text{uma} = 1{,}66054\cdot10^{-27}\ \text{kg}$.

Fig. 2

P3. Solution
(a) When mass ions $m$ and charge $+e$ enter the electric field at virtually zero speed
The electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated by the electricity generated electricity generated by the electricity generated by the electricity generated electricity generated by the electricity generated electricity generated by electricity generated by electricity generated by electricity generated electricity generated by electricity generated electricity generated by electricity generated by electricity generated electricity generated electricity.
electrostática, $e\Delta V$. The electric field accelerates them and they come out of it with energy that's only kinetic,
$mv_0^2/2$. How mechanical energy should be conserved

$$e\Delta V = \frac{1}{2}mv_0^2$$

The velocity of the ions entering the region of the magnetic field is

$$v_0 = \sqrt{\frac{2e\Delta V}{m}} \quad (1)$$

Then on the ions moving in the magnetic field acts the Lorentz force,
as indicated in footnote 1 to the statement

$$\vec{F} = e\,\vec{v}_0\times\vec{B}$$

Since $\vec{v}_0$ and $\vec{B}$ are perpendicular, the modulus of this force is

$$F = ev_0 B$$

This force is always perpendicular to the velocity, so the acceleration of the ions is normal or
centrifugal, so that

$$ev_0 B = m\frac{v_0^2}{R}$$

and therefore

$$R = \frac{mv_0}{eB} \quad (2)$$

Since $v_0$ is constant2, the radius of curvature of the trajectory that the ions describe is also constant,
That is, from the moment they enter the magnetic field through the input slot until they leave it through
the exit clearance shall follow a circular path. Having regard to paragraphs (1) and (2), the radius of this
trajectory is

$$R = \frac{1}{B}\sqrt{2\Delta V\frac{m}{e}} \quad (3)$$

b) By clearing $B$ in (3), we obtain the magnetic field that "conducts" the mass ions $m$ to the cleft
output, based on the construction data of the spectrometer (radio $R$ of the tube and accelerator potential
$\Delta V$)

$$B = \frac{1}{R}\sqrt{2\Delta V\frac{m}{e}}$$

With the numerical data indicated in the statement expressed in units of SI, the value of the field
The magnetic field required to focus mass ions $m$ on the output grid is

$$B = \frac{1}{0{,}150}\sqrt{\frac{2\times3000}{1{,}60\times10^{-19}}}\,\sqrt{m} = 1{,}29\times10^{12}\,\sqrt{m}$$

As indicated above, in the above expression the mass $m$ must be expressed in kg, but in
The use of the atomic mass unit, a. Given that
the equivalent $1\ \text{uma} = 1{,}66054\times10^{-27}\ \text{kg}$, the magnetic field expression becomes

$$B = 0{,}0526\sqrt{m} \quad (4)$$

(B in T; m in a)
(c) In the spectrum of Figure 3 seven peaks are distinguished, corresponding to ions reaching the collector
for seven magnetic field values $B$. In Table I, these values of $B$ are presented together with the values of
The corresponding mass of ions obtained from (4).
The two noble gases which constitute the
The mixing of the sentence.
Using the Periodic Table, it can be concluded that the first two peaks correspond to nearby masses.
And then they're going to be in the isotopes of that gas. Similarly,
The other five peaks can be identified as Kr isotopes as their masses are around 83.6
which is the mass of this noble gas.
The answer to this part of the problem is therefore: the binary mixture is Ne-Kr

Note: although not explicitly requested in the statement, from the spectrum in Figure 3 it is possible to
determine the relative abundance of the isotopes of Ne and Kr present in the analyzed gas mixture, which
is directly proportional to the height of the recorded peaks.
The first two peaks, corresponding to Ne isotopes, have heights in Figure 3 of 54 and 6 units.
(Arbitrary) Therefore, the total abundance of Ne in the mixture will be proportional to 60 and the abundance of
Each of the corresponding isotopes will be 54/60 = 0,90 and 6/60 = 0,10, i.e. 90% and 10%
the Commission.
A proper table shows that Ne is a natural mixture of three stable isotopes:
20Ne, 21Ne and 22Ne, the abundance of which is 90.48%, 0.27% and 9.25% respectively. Although the 21Ne is
The Commission has already taken a number of measures to ensure that the
The two other isotopes, given the inaccuracy in the reading of heights, agree
The Commission's proposal for a directive on the protection of workers' rights in the field of social security is therefore not a satisfactory one.
Similarly, the other five peaks correspond to the Kr, with heights of 0,9, 4,5 , 4,5 , 22 and 6,8 respectively.
units. Therefore, the abundance of Kr in the mixture is proportional to the sum of these heights (38,7) and
The relative of each isotope is 2,3%, 11,6%, 11,6%, 56,8% and 17,6% respectively.
Again, these data are acceptably consistent with the relative abundance of stable isotopes of the
Kr, which are: 78Kr (0.35%; not distinguished in the spectrum), 80Kr (2,25%), 82Kr (11,6%), 83Kr (11,5%), 84Kr
(57,0%) y 86Kr (17,3%).
Finally, the sums of the heights of the Ne (60) and Kr (38.7) peaks are proportional to the heights of the Ne (60) and Kr (38.7) peaks.
the abundance of such gases in the mixture. It follows that the mixture is composed of:
61% of Ne and 39% of Kr, approximately.

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
*spettro di massa of noble gas mixture *
<!--fig:end-->

**Topic:** [[Magnetism]], [[Electrostatics]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Electron (object)|Electron]], [[Particle Beam (object)|Particle Beam]]
**Fonte:** [Testo (PDF) — p.10](https://drive.google.com/file/d/1pD5KB2u80zsdaQa50HV8UM6DFFMHz40X/view)
