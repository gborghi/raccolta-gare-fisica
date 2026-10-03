---
title: Spagna 2023
tipo: prova
tags:
  - kg/prova
  - anno/2023
  - paese/Spagna
  - comp/Spagna
  - cluster/Fisica Moderna
---
<div class="atom-reader" data-prova="2023-34-oaf-2023-prueba-teorica"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2023 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Fisica Moderna,object/pendulum"></span>

<div class="qlang-switch" data-default="es"></div>



P1. Física en el tren.
Albert Einstein y su segunda esposa visitaron España entre marzo y
abril de 1923, cuando ya era público que le habían concedido el premio
Nobel de Física. Su llegada en tren a Barcelona fue pintoresca, ya que
olvidó avisar en qué tren llegaban, con lo que no hubo nadie esperándoles
en la estación. Afortunadamente, a su llegada a Zaragoza, el 12 de marzo,
fue recibido como merecía un genio de su nivel.
Los largos viajes en tren de la época seguro que permitieron a
Einstein meditar sobre sus teorías. De hecho, uno de sus experimentos
mentales más famosos, que le ayudó a deducir su teoría de la relatividad,
está relacionado con un tren y un rayo de luz.
Si tienes ocasión de viajar en tren puedes realizar el siguiente
experimento: Imagina un péndulo colgado en el interior del tren. Si el tren
está parado, el péndulo permanecerá en su posición de equilibrio (Fig. 1a).
Por el contrario, cuando el tren arranque, el péndulo se moverá
“misteriosamente” debido a la inercia (Fig. 1b).

a) Indica en qué sentido está acelerando el tren.
Considera que el tren se mueve con aceleración constante, $a$, y el
péndulo tiene una longitud $L$ y masa $m$.

b) Dibuja el diagrama de cuerpo libre del péndulo, es decir, las fuerzas
que actúan sobre él.

c) Calcula la relación entre la aceleración del tren, $a$, y el ángulo de inclinación del péndulo, $\theta$.

Este sencillo sistema puede usarse1 para calcular la distancia entre dos estaciones de tren, suponiendo
que el desplazamiento del tren está compuesto por la concatenación de multitud de movimientos rectilíneos
uniformemente acelerados y obteniendo la aceleración para cada uno de ellos a partir del ángulo que forma el
péndulo con la vertical.
Imaginemos que el tren parte del reposo y medimos el ángulo promedio en intervalos de 10 segundos,
considerando que la aceleración se mantiene prácticamente constante en el intervalo. Obtenemos los
siguientes valores:

| $t_i - t_f$ (s) | 0-10 | 11-20 | 21-30 | 31-40 | 41-50 |
| --- | --- | --- | --- | --- | --- |
| $\theta$ ($^\circ$) | 3 | 5 | 7 | 6 | 4 |

d) Calcula qué distancia ha recorrido durante los 50 segundos.

Cuando el tren viaja con aceleración constante, $a$, separamos ligeramente el péndulo de su posición de
equilibrio.

e) Calcula el periodo de la oscilación resultante alrededor de la posición de equilibrio.

A partir de un determinado momento el tren se mueve con velocidad constante.

f) Calcula en este caso el periodo de la oscilación alrededor de la posición de equilibrio.

1 Claire Tham et al. "Using a Simple Pendulum to Calculate the Distance Between Two Train Stations", The Physics Teacher 60,
748-751 (2022) https://doi.org/10.1119/5.0043205

P1. Solución

a) La masa suspendida del péndulo tiende a quedarse en reposo por efecto de la inercia
mientras el tren acelera, siendo la componente de la tensión de la cuerda en
dirección horizontal la que le hace moverse solidaria con el tren. Por tanto, como
muestra la Fig. 2, el tren está acelerando hacia la derecha.

b) Las únicas fuerzas “reales” que actúan sobre el péndulo son el peso,
$m\vec{g}$, y la
tensión de la cuerda,
$\vec{T}$, con lo que el diagrama de cuerpo libre quedaría tal y como
muestra la figura 2.

c) Aplicando la 2a Ley de Newton, tenemos

$$\vec{F} = m\sum \vec{a} \quad (1)$$

Descomponiendo en los ejes horizontal, $x$, y vertical, $y$, tenemos

$$\begin{cases} T\cos\theta - mg = 0 \\ T\,\text{sen}\,\theta = ma \end{cases} \quad (2)$$

De donde podemos despejar $a$ en función de $\theta$,

$$a = g\,\text{tg}\,\theta \quad (3)$$

d) El espacio recorrido en cada tramo vendrá dado por la ecuación del desplazamiento con movimiento
uniformemente acelerado,

$$x_i = v_{0,i}\,\Delta t_i + \tfrac{1}{2} a_i\,\Delta t_i^2 \quad (4)$$

Para cada tramo necesitamos saber la velocidad inicial, que vendrá dada por la aceleración y velocidad
inicial del tramo anterior

$$v_{0,i+1} = v_{0,i} + a_i\,\Delta t_i \quad (5)$$

con
$v_{0,1} = 0$, puesto que el tren parte del reposo.
A partir de las ecuaciones (3), (4) y (5) obtenemos

| $i$ | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| $\Delta t_i$ (s) | 10 | 10 | 10 | 10 | 10 |
| $\theta$ ($^\circ$) | 3 | 5 | 7 | 6 | 4 |
| $a_i$ ($\text{m/s}^2$) | 0,51 | 0,86 | 1,20 | 1,03 | 0,69 |
| $v_{0,i}$ (m/s) | 0 | 5,1 | 13,7 | 25,7 | 36,0 |
| $x_i$ (m) | 25,5 | 94,0 | 197,0 | 308,5 | 394,5 |

De modo que el espacio total recorrido en los 50 primeros segundos será

$$x = \sum_{i=1}^{5} x_i = 1019{,}5\ \text{m} \quad (6)$$

e) En un péndulo sometido sólo a la aceleración de la gravedad, el periodo de oscilación viene dado por

$$P_0 = 2\pi\sqrt{\frac{L}{g}} \quad (7)$$

Un observador montado en el tren es un observador no inercial (se mueve con velocidad no constante).
Al arrancar el tren con una cierta aceleración
$\vec{a}$, el observador montado en el tren ve que el péndulo se
inclina sin que sobre él actúe aparentemente ninguna fuerza, por lo que decide
inventarse una fuerza hacia atrás,
$\vec{F}_i = -m\vec{a}$, que denomina “fuerza de
inercia” (Fig. 3).
Esta es la misteriosa fuerza que parece empujarnos hacia atrás cuando
viajamos en un tren que acelera. Pero esta fuerza es ficticia, no existe. Visto
por un observador inercial exterior, fijo al suelo de la calle, lo que ocurre es
que el tren acelera mientras que el pasajero tiende a mantenerse con velocidad
constante. Por ello el pasajero necesita agarrarse a la barra del tren para no
quedarse rezagado respecto del tren, y por tanto, caerse al suelo.
Para el observador que viaja en el tren el péndulo está en equilibrio, por lo
que el diagrama de fuerzas sobre el péndulo sería el mostrado en la figura 3,
de modo que

$$\vec{T} = m(\vec{g} - \vec{a}) \quad (8)$$

El observador no inercial interpreta que el péndulo se orienta en la dirección de una gravedad
“aparente”
$\vec{g}\,'$, mostrada en la figura 3, dada por

$$\vec{g}\,' = \vec{g} - \vec{a} \quad (9)$$

Por analogía con la expresión (7), sometido a esta “gravedad aparente”, al separarlo ligeramente de la
posición de equilibrio el péndulo oscila con un periodo

$$P = 2\pi\sqrt{\frac{L}{g'}} \quad (10)$$

A partir de (9) obtenemos el módulo de la gravedad aparente,
$g'$,

$$g' = \sqrt{g^2 + a^2} \quad (11)$$

Y sustituyendo $a$ por la expresión obtenida en (3),

$$g' = \sqrt{g^2 + (g\,\text{tg}\,\theta)^2} = g\sqrt{1 + (\text{tg}\,\theta)^2} = \frac{g}{\cos\theta} \quad (12)$$

De modo que el periodo del péndulo que se mueve con aceleración $a$ viene dado por

$$P = 2\pi\sqrt{\frac{L\cos\theta}{g}} \quad (13)$$

f) Si el tren se mueve con velocidad constante, un observador montado en el tren será un observador
inercial y por tanto aplicará las leyes de Newton como si estuviera en reposo. Por tanto, el periodo del
péndulo será el dado por la expresión (7).

$$P_0 = 2\pi\sqrt{\frac{L}{g}}$$

Se puede comprobar que esta expresión coincide con la (12) cuando
$a = 0$ (y por tanto
$\theta = 0$), como
era de esperar.

<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p2_f1.png]]
*Pendolo nel treno fermo e accelerante*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p3_f2.png]]
*Diagramma corpo libero pendolo (Fig 2)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p4_f3.png]]
*FBD pendolo con forza d'inerzia (Fig 3)*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Oscillations & Waves]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Pendulum (object)|Pendulum]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1UaxomltixM7jARUskPOIsQLA3pL8aVw6/view)


<div class="qlang-split" data-lang="it"></div>

P1. Fisica sul treno.

Albert Einstein e sua seconda moglie visitarono la Spagna tra marzo e aprile del 1923, quando ormai era di pubblico dominio che gli era stato assegnato il premio Nobel per la Fisica. Il loro arrivo in treno a Barcellona fu pittoresco, poiché dimenticarono di avvisare su quale treno arrivassero, con il risultato che non c’era nessuno ad aspettarli alla stazione. Per fortuna, all'arrivo a Saragozza il 12 marzo, fu ricevuto come si conveniva a un genio del suo livello.

I lunghi viaggi in treno dell’epoca probabilmente diedero ad Einstein l’opportunità di riflettere sulle sue teorie. Infatti, uno dei suoi esperimenti mentali più famosi, che lo aiutò a dedurre la sua teoria della relatività, è legato a un treno e a un raggio di luce.

Se hai occasione di viaggiare in treno puoi effettuare il seguente esperimento: immagina un pendolo appeso all’interno del treno. Se il treno è fermo, il pendolo rimarrà nella sua posizione di equilibrio (Fig. 1a).
Al contrario, quando il treno partirà, il pendolo si muoverà “misteriosamente” a causa dell’inerzia (Fig. 1b).

a) Indica in che senso sta accelerando il treno.

Considera che il treno si muove con accelerazione costante, $a$, e che il pendolo ha una lunghezza $L$ e massa $m$.

b) Disegna il diagramma di corpo libero del pendolo, ossia le forze che agiscono su di esso.

c) Calcola il rapporto tra l’accelerazione del treno, $a$, e l’angolo di inclinazione del pendolo, $\theta$.

Questo semplice sistema può essere utilizzato per calcolare la distanza tra due stazioni ferroviarie, supponendo che lo spostamento del treno sia composto dalla concatenazione di numerose fasi di moto rettilineo uniformemente accelerato e determinando l'accelerazione per ciascuna di esse a partire dall'angolo formato dal pendolo con la verticale.

Immaginiamo che il treno sia parte da fermo e misuriamo l'angolo medio in intervalli di 10 secondi, assumendo che l'accelerazione rimanga praticamente costante nell'intervallo. Otteniamo i seguenti valori:

| $t_i - t_f$ (s) | 0-10 | 11-20 | 21-30 | 31-40 | 41-50 |
| --- | --- | --- | --- | --- | --- |
| $\theta$ ($^\circ$) | 3 | 5 | 7 | 6 | 4 |

d) Calcola la distanza percorsa dal treno nei 50 secondi.

Quando il treno si muove con accelerazione costante, $a$, il pendolo si sposta leggermente rispetto alla sua posizione di equilibrio.

e) Calcola il periodo dell'oscillazione risultante intorno alla posizione di equilibrio.

A partire da un certo istante, il treno si muove con velocità costante.

f) Calcola in questo caso il periodo dell'oscillazione intorno alla posizione di equilibrio.

1 Claire Tham et al. "Using a Simple Pendulum to Calculate the Distance Between Two Train Stations", The Physics Teacher 60, 748-751 (2022) https://doi.org/10.1119/5.0043205

P1. Soluzione

a) La massa appesa del pendolo tende a rimanere in quiete per effetto dell'inerzia mentre il treno accelera, essendo la componente della tensione del filo nella direzione orizzontale quella che lo fa muovere solidamente con il treno. Pertanto, come mostrato in Figura 2, il treno sta accelerando verso destra.

b) Le uniche forze "reali" che agiscono sul pendolo sono il peso, $m\vec{g}$, e la tensione del filo, $\vec{T}$; pertanto il diagramma delle forze sul corpo libero risulterà come mostrato in Figura 2.

c) Applicando la seconda legge di Newton, otteniamo

$$\vec{F} = m\sum \vec{a} \quad (1)$$

Scomponendo lungo gli assi orizzontale, $x$, e verticale, $y$, otteniamo

$$\begin{cases} T\cos\theta - mg = 0 \\ T\,\text{sen}\,\theta = ma \end{cases} \quad (2)$$

Da cui possiamo ricavare $a$ in funzione di $\theta$,

$$a = g\,\text{tg}\,\theta \quad (3)$$

d) Lo spazio percorso in ciascun tratto sarà dato dall'equazione del moto uniformemente accelerato,

$$x_i = v_{0,i}\,\Delta t_i + \tfrac{1}{2} a_i\,\Delta t_i^2 \quad (4)$$

Per ciascun tratto dobbiamo conoscere la velocità iniziale, che sarà determinata dall'accelerazione e dalla velocità iniziale del tratto precedente

$$v_{0,i+1} = v_{0,i} + a_i\,\Delta t_i \quad (5)$$

con $v_{0,1} = 0$, poiché il treno parte da fermo.
A partire dalle equazioni (3), (4) e (5) otteniamo

| $i$ | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| $\Delta t_i$ (s) | 10 | 10 | 10 | 10 | 10 |
| $\theta$ ($^\circ$) | 3 | 5 | 7 | 6 | 4 |
| $a_i$ ($\text{m/s}^2$) | 0,51 | 0,86 | 1,20 | 1,03 | 0,69 |
| $v_{0,i}$ (m/s) | 0 | 5,1 | 13,7 | 25,7 | 36,0 |
| $x_i$ (m) | 25,5 | 94,0 | 197,0 | 308,5 | 394,5 |

Così lo spazio totale percorso nei primi 50 secondi sarà

$$x = \sum_{i=1}^{5} x_i = 1019{,}5\ \text{m} \quad (6)$$

e) Nel caso di un pendolo soggetto soltanto all'accelerazione di gravità, il periodo di oscillazione è dato da

$$P_0 = 2\pi\sqrt{\frac{L}{g}} \quad (7)$$

Un osservatore montato sul treno è un osservatore non inerziale (si muove con velocità non costante).
All'accensione del treno con una certa accelerazione
$\vec{a}$, l'osservatore montato sul treno osserva che il pendolo si inclina senza che su di esso apparentemente agisca alcuna forza, per cui decide di inventarsi una forza indietro,
$\vec{F}_i = -m\vec{a}$, che denomina "forza d'inerzia" (Fig. 3).
Questa è la misteriosa forza che sembra spingerci indietro quando viaggiamo su un treno che accelera. Ma questa forza è fittizia, non esiste. Vista da un osservatore inerziale esterno, fisso al suolo della strada, ciò che avviene è che il treno accelera mentre il passeggero tende a mantenere una velocità costante. Per questo motivo, il passeggero deve aggrapparsi alla sbarra del treno per non rimanere indietro rispetto al treno, e quindi cadere sul pavimento.
Per l'osservatore che viaggia sul treno, il pendolo è in equilibrio, per cui il diagramma delle forze sul pendolo sarebbe quello mostrato in figura 3, tale che

$$\vec{T} = m(\vec{g} - \vec{a}) \quad (8)$$

L'osservatore non inerziale interpreta che il pendolo si orienta nella direzione di una gravità
"apparente"
$\vec{g}\,'$, mostrata in figura 3, data da

$$\vec{g}\,' = \vec{g} - \vec{a} \quad (9)$$

Per analogia con l'espressione (7), soggetto a questa "gravità apparente", allontanandolo leggermente dalla posizione di equilibrio, il pendolo oscilla con un periodo

$$P = 2\pi\sqrt{\frac{L}{g'}} \quad (10)$$

Dalla (9) otteniamo il modulo dell'accelerazione gravitazionale apparente,

$g'$

$$g' = \sqrt{g^2 + a^2} \quad (11)$$

Sostituendo $a$ con l'espressione ottenuta in (3),

$$g' = \sqrt{g^2 + (g\,\text{tg}\,\theta)^2} = g\sqrt{1 + (\text{tg}\,\theta)^2} = \frac{g}{\cos\theta} \quad (12)$$

Così il periodo del pendolo che si muove con accelerazione $a$ è dato da

$$P = 2\pi\sqrt{\frac{L\cos\theta}{g}} \quad (13)$$

f) Se il treno si muove con velocità costante, un osservatore a bordo del treno è un osservatore inerziale e pertanto applicherà le leggi di Newton come se fosse fermo. Di conseguenza, il periodo del pendolo sarà quello dato dall'espressione (7).

$$P_0 = 2\pi\sqrt{\frac{L}{g}}$$

Si può verificare che questa espressione coincide con la (12) quando
$a = 0$ (e quindi
$\theta = 0$), come ci si aspettava.

<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p2_f1.png]]
*Pendolo nel treno fermo e accelerante*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p3_f2.png]]
*Diagramma corpo libero pendolo (Fig 2)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p4_f3.png]]
*FBD pendolo con forza d'inerzia (Fig 3)*
<!--fig:end-->

<div class="qlang-split" data-lang="en"></div>

P1. Physics on the Train.

Albert Einstein and his second wife visited Spain between March and April 1923, by which time it was already public that he had been awarded the Nobel Prize in Physics. Their arrival by train in Barcelona was picturesque, as they forgot to inform which train they were taking, so no one was waiting for them at the station. Fortunately, upon their arrival in Zaragoza on March 12th, he was received as befit a genius of his stature.

The long train journeys of that era surely gave Einstein time to reflect on his theories. Indeed, one of his most famous thought experiments—helping him deduce his theory of relativity—is related to a train and a beam of light.

If you ever have the opportunity to travel by train, you can perform the following experiment: Imagine a pendulum hanging inside the train. If the train is stationary, the pendulum will remain at rest in its equilibrium position (Fig. 1a).
On the other hand, when the train starts moving, the pendulum will move "mysteriously" due to inertia (Fig. 1b).

a) Indicate in which direction the train is accelerating.

Assume that the train moves with constant acceleration, $a$, and that the pendulum has length $L$ and mass $m$.

b) Draw the free-body diagram of the pendulum, that is, all forces acting on it.

c) Calculate the ratio between the train's acceleration, $a$, and the pendulum’s angle of inclination, $\theta$.

This simple system can be used to calculate the distance between two train stations, assuming that the train's displacement consists of a concatenation of numerous uniformly accelerated rectilinear motions and obtaining the acceleration for each segment from the angle formed by the pendulum with the vertical.

Let us imagine that the train starts from rest and we measure the average angle in intervals of 10 seconds, assuming that the acceleration remains practically constant over each interval. We obtain the following values:

| $t_i - t_f$ (s) | 0–10 | 11–20 | 21–30 | 31–40 | 41–50 |
| --- | --- | --- | --- | --- | --- |
| $\theta$ ($^\circ$) | 3 | 5 | 7 | 6 | 4 |

d) Calculate the distance traveled by the train during the 50 seconds.

When the train moves with constant acceleration, $a$, the pendulum is slightly displaced from its equilibrium position.

e) Calculate the period of oscillation around the equilibrium position in this case.

From a certain point onward, the train moves with constant velocity.

f) Calculate the period of oscillation around the equilibrium position in this case.

1 Claire Tham et al. "Using a Simple Pendulum to Calculate the Distance Between Two Train Stations", The Physics Teacher 60, 748–751 (2022) https://doi.org/10.1119/5.0043205

P1. Solution

a) The suspended mass of the pendulum tends to remain at rest due to inertia while the train accelerates, and it is the horizontal component of the string's tension that causes it to move together with the train. Therefore, as shown in Figure 2, the train is accelerating to the right.

b) The only "real" forces acting on the pendulum are its weight, $m\vec{g}$, and the tension in the string, $\vec{T}$; thus, the free-body diagram would appear as shown in Figure 2.

c) Applying Newton's second law, we have

$$\vec{F} = m\sum \vec{a} \quad (1)$$

Decomposing into horizontal, $x$, and vertical, $y$, components, we obtain

$$\begin{cases} T\cos\theta - mg = 0 \\ T\,\text{sen}\,\theta = ma \end{cases} \quad (2)$$

From this, we can solve for $a$ in terms of $\theta$,

$$a = g\,\text{tg}\,\theta \quad (3)$$

d) The distance traveled in each segment is given by the equation for displacement under uniformly accelerated motion,

$$x_i = v_{0,i}\,\Delta t_i + \tfrac{1}{2} a_i\,\Delta t_i^2 \quad (4)$$

For each segment, we need the initial velocity, which is determined by the acceleration and initial velocity of the previous segment:

$$v_{0,i+1} = v_{0,i} + a_i\,\Delta t_i \quad (5)$$

with $v_{0,1} = 0$, since the train starts from rest.
From equations (3), (4), and (5) we obtain

| $i$ | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| $\Delta t_i$ (s) | 10 | 10 | 10 | 10 | 10 |
| $\theta$ ($^\circ$) | 3 | 5 | 7 | 6 | 4 |
| $a_i$ ($\text{m/s}^2$) | 0.51 | 0.86 | 1.20 | 1.03 | 0.69 |
| $v_{0,i}$ (m/s) | 0 | 5.1 | 13.7 | 25.7 | 36.0 |
| $x_i$ (m) | 25.5 | 94.0 | 197.0 | 308.5 | 394.5 |

Thus, the total distance traveled in the first 50 seconds is

$$x = \sum_{i=1}^{5} x_i = 1019{,}5\ \text{m} \quad (6)$$

e) In a pendulum subjected only to the acceleration due to gravity, the oscillation period is given by

$$P_0 = 2\pi\sqrt{\frac{L}{g}} \quad (7)$$

An observer riding on the train is a non-inertial observer (moving with non-constant velocity).
As the train starts accelerating with a certain acceleration
$\vec{a}$, the observer on the train sees that the pendulum tilts even though no apparent force acts upon it, so he decides to invent a backward-directed force,
$\vec{F}_i = -m\vec{a}$, which he calls the "inertial force" (Figure 3).
This is the mysterious force that seems to push us backward when traveling in an accelerating train. But this force is fictitious and does not actually exist. From the perspective of an external inertial observer fixed to the ground, what happens is that the train accelerates while the passenger tends to maintain constant velocity. Therefore, the passenger must hold onto the train’s handrail in order not to fall behind relative to the train, and thus avoid falling onto the floor.

For the observer traveling on the train, the pendulum is in equilibrium; thus, the force diagram acting on the pendulum would be as shown in Figure 3, so that

$$\vec{T} = m(\vec{g} - \vec{a}) \quad (8)$$

The non-inertial observer interprets the pendulum as aligning itself along an "apparent gravity"
$\vec{g}\,'$, shown in Figure 3, given by

$$\vec{g}\,' = \vec{g} - \vec{a} \quad (9)$$

By analogy with expression (7), under this "apparent gravity," if the pendulum is slightly displaced from equilibrium, it oscillates with a period

$$P = 2\pi\sqrt{\frac{L}{g'}} \quad (10)$$

From (9) we obtain the magnitude of the apparent gravity,

$g'$

$$g' = \sqrt{g^2 + a^2} \quad (11)$$

And substituting $a$ with the expression obtained in (3),

$$g' = \sqrt{g^2 + (g\,\text{tg}\,\theta)^2} = g\sqrt{1 + (\text{tg}\,\theta)^2} = \frac{g}{\cos\theta} \quad (12)$$

Thus, the period of the pendulum moving with acceleration $a$ is given by

$$P = 2\pi\sqrt{\frac{L\cos\theta}{g}} \quad (13)$$

f) If the train moves with constant velocity, an observer on board is an inertial observer and therefore applies Newton's laws as if at rest. Hence, the pendulum's period will be given by expression (7).

$$P_0 = 2\pi\sqrt{\frac{L}{g}}$$

It can be verified that this expression coincides with (12) when
$a = 0$ (and therefore
$\theta = 0$), as expected.

<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p2_f1.png]]
*Pendulum in a stationary and accelerating train*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p3_f2.png]]
*Free-body diagram of pendulum (Fig 2)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p4_f3.png]]
*Free-body diagram of pendulum with inertial force (Fig 3)*
<!--fig:end-->



<span class="atom-split" id="q02" data-atom="q02" data-title="Spagna 2023 — Quesito 2" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Fisica Moderna,object/rope-string"></span>

<div class="qlang-switch" data-default="es"></div>



P2. Einstein y su violín.
Albert Einstein era un apasionado de la música. A los 6 años comenzó a
tocar el violín y más adelante el piano. Cuando viajaba solía llevar su violín,
al que llamaba "Lina", a la espera de alguna ocasión para interpretar a sus
músicos preferidos, solo o en compañía. Con tal de enfrascarse en la música
tocaba con científicos amigos, con vecinos de su entorno o con cualquiera que
le ofreciera esa oportunidad. Tocar el violín le ayudaba a pensar y a la vez era
una válvula de escape cuando se encallaba trabajando en sus teorías. Incluso
es posible que la “cuantificación” de frecuencias característica de las ondas
estacionarias que se producen en los instrumentos musicales influyera en la
intuición de Einstein de que la energía de los fotones está cuantizada.
Vamos a estudiar las ondas estacionarias que se producen en las cuerdas del violín. Colocamos junto a
un violín un altavoz con un generador de frecuencia variable capaz de producir sonidos armónicos entre 500
y 1500 Hz. Observamos que la segunda cuerda (que cuando el violín está afinado corresponde a la nota La)
sólo oscila apreciablemente para las frecuencias de 880 y 1320 Hz. La cuerda tiene una longitud
$L = 32{,}6\ \text{cm}$.

A partir de estos datos,

a) Determina y calcula la velocidad, $v$, de propagación de las ondas transversales en la cuerda de violín.

b) ¿Se produciría una oscilación apreciable de la cuerda para alguna frecuencia inferior a 500 Hz? Explica
por qué.

La velocidad de propagación de ondas transversales en una cuerda tensa depende de la densidad lineal
de masa $\mu$ de la cuerda (masa por unidad de longitud) y de su tensión $T$. La forma de esta dependencia es una
de las cuatro siguientes:

i) $\quad v = \sqrt{\dfrac{\mu}{T}}$

ii) $\quad v = \sqrt{\dfrac{1}{\mu T}}$

iii) $\quad v = \sqrt{\dfrac{T}{\mu}}$

iv) $\quad v = \sqrt{\mu T}$

c) Basándote en la homogeneidad de dimensiones de las fórmulas físicas, indica razonadamente cuál de
estas expresiones es la única correcta.

La segunda cuerda del violín tiene un diámetro $D = 0{,}76\ \text{mm}$ y una densidad de masa por unidad de
volumen promedio $\rho = 5{,}93\ \text{g/cm}^3$.

d) Calcula la tensión a la que está sometida la cuerda del violín.

Se observa que los vientres (antinodos) de la onda estacionaria que se produce a 880 Hz tienen una
amplitud de oscilación $A = 12{,}7\ \text{mm}$. Tomamos $t = 0$ en el instante en que la cuerda pasa por su posición de
equilibrio,

e) Escribe la ecuación de la onda estacionaria, en unidades SI.

f) Escribe la ecuación de la velocidad máxima $v_t$ de vibración de cualquier punto de la cuerda. Determina
su valor para un punto situado a una distancia $x = \lambda/2$ de un extremo de la cuerda, siendo $\lambda$ la longitud
de onda.

P2. Solución

a) La cuerda oscilará apreciablemente cuando el sonido que produce el altavoz corresponda a una de las
frecuencias que pueden generar ondas estacionarias en la cuerda. Esto ocurre para dos frecuencias
consecutivas, $f_n = 880$ Hz y $f_{n+1} = 1320$ Hz. Aunque desconocemos el valor de $n$, se debe cumplir,

$$\left.\begin{aligned} f_n &= n\,\frac{v}{2L} \\ f_{n+1} &= (n+1)\,\frac{v}{2L} \end{aligned}\right\} \quad (1)$$

Despejamos $n$ de la primera ecuación,

$$n = \frac{2L}{v}\,f_n \quad (2)$$

y sustituimos en la segunda

$$f_{n+1} = f_n + \frac{v}{2L} \;\Rightarrow\; v = 2L(f_{n+1} - f_n) = 286{,}9\ \text{m/s} \quad (3)$$

b) En la ecuación (2) sustituimos la velocidad obtenida,

$$n = \frac{f_n}{f_{n+1} - f_n} = 2 \quad (4)$$

lo que significa que se excita el modo $n = 2$ para una frecuencia $f_2 = 880$ Hz y el modo $n + 1 = 3$ para
una frecuencia $f_3 = 1320$ Hz. Por tanto, el modo fundamental ($n = 1$) se excitará para una frecuencia

$$f_1 = \frac{v}{2L} = 440\ \text{Hz} \quad (5)$$

que es la correspondiente a la nota La.

c) Utilizando el análisis dimensional podemos determinar cuál de las cuatro ecuaciones es la correcta. En el
lado de la izquierda de las cuatro aparece la velocidad. Sus dimensiones físicas son

$$[v] = \frac{[L]}{[T]} \quad (6)$$

Las dimensiones físicas de la densidad de masa por unidad de longitud $\mu$ son

$$[\mu] = \frac{[M]}{[L]} \quad (7)$$

y las de la tensión (considerando que es una fuerza, y por tanto tiene dimensiones de masa por
aceleración),

$$[T] = [M]\frac{[L]}{[T]^2} \quad (8)$$

Teniendo en cuenta las ecuaciones (7) y (8), las dimensiones del término de la izquierda de cada una de
las expresiones de $v$ son

i) $\quad \sqrt{\dfrac{[\mu]}{[T]}}$

ii) $\quad \sqrt{\dfrac{1}{[\mu][T]}}$

iii) $\quad \sqrt{\dfrac{[T]}{[\mu]}} = \dfrac{[L]}{[T]}$

iv) $\quad \sqrt{[\mu][T]} \quad (9)$

Como las dimensiones deben coincidir en los dos términos de la ecuación, la ecuación correcta es

$$\text{iii)} \quad v = \sqrt{\frac{T}{\mu}} \quad (10)$$

d) A partir de la expresión (10) podemos despejar la tensión,

$$T = \mu \cdot v^2 \quad (11)$$

La densidad de masa por unidad de volumen $\rho$ y la densidad de masa por unidad de longitud $\mu$ están
relacionadas con la sección $S$ de la cuerda, de modo que

$$\mu = \rho \cdot S \;\Rightarrow\; \mu = \rho \cdot \pi\left(\frac{D}{2}\right)^2 \quad (12)$$

Sustituyendo en la ecuación (11) se obtiene

$$T = \pi\rho\left(\frac{D}{2}\right)^2 v^2 \;\Rightarrow\; T = 221{,}4\ \text{N} \quad (13)$$

e) La cuerda de violín está sujeta por sus extremos, por lo que dichos extremos están en reposo, y por tanto
son nodos de la onda estacionaria. Tomando $x = 0$ en el extremo izquierdo, la ecuación de la onda
estacionaria es

$$y(x,t) = A\,\text{sen}\,Kx\;\text{sen}(\omega t + \phi_0) \quad (14)$$

El valor de
$\phi_0$ se obtiene de la situación inicial. En $t=0$ la cuerda está en su posición de equilibrio,
$y(x,0) = 0$, de modo que

$$0 = A\,\text{sen}\,Kx\;\text{sen}\,\phi_0 \quad (15)$$

Como
$A \neq 0$ y, en general,
$\text{sen}\,Kx \neq 0$ (sólo es cero en los nodos), se deduce que

$$\text{sen}\,\phi_0 = 0 \;\Rightarrow\; \phi_0 = \begin{cases} 0 \\ \pi\ \text{rad} \end{cases} \quad (16)$$

Dado que el ejercicio no nos dá más información, podemos elegir cualquiera de las dos, por lo que
tomamos la más simple,
$\phi_0 = 0$.
Los valores de $K$ y $\omega$ vienen dados por

$$K = \frac{2\pi}{\lambda} = \frac{2\pi}{v}\,f \approx 2\pi\cdot 3\ \text{rad/m}, \qquad \omega = 2\pi f = 1760\pi\ \text{rad/s} \quad (17)$$

de modo que

$$y(x,t) = 12{,}7\cdot 10^{-3}\,\text{sen}\left(2\pi\cdot 3\,x\right)\text{sen}(1760\pi t)\ \text{m} \quad (18)$$

f) La velocidad de vibración trasversal de los puntos de la cuerda viene determinada por

$$v_t(x,t) = \frac{\mathrm{d}\,y(x,t)}{\mathrm{d}t} = \frac{\mathrm{d}\left[A\,\text{sen}\,Kx\;\text{sen}\,\omega t\right]}{\mathrm{d}t} = A\omega\,\text{sen}\,Kx\;\cos\omega t \quad (19)$$

La velocidad transversal máxima se producirá cuando
$\cos\omega t = 1$, es decir,

$$v_{t\,\text{max}}(x) = A\omega\,\text{sen}\,Kx \quad (20)$$

de modo que

$$v_{t\,\text{max}}\!\left(x = \frac{\lambda}{2}\right) = A\omega\,\text{sen}\left(K\frac{\lambda}{2}\right) = A\omega\,\text{sen}\,\pi = 0 \quad (21)$$

como era de esperar, dado que en la posición $x = \lambda/2$ aparece un nodo de oscilación para esa
frecuencia.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Rope/String (object)|Rope/String]]
**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1UaxomltixM7jARUskPOIsQLA3pL8aVw6/view)


<div class="qlang-split" data-lang="it"></div>

P2. Einstein e il suo violino.
Albert Einstein era appassionato di musica. A sei anni ha iniziato a
suonare il violino e poi il pianoforte. Quando viaggiava, portava il suo violino.
che chiamava "Lina", in attesa di qualche occasione per interpretare i suoi
musicisti preferiti, da soli o in compagnia. Per immergersi nella musica
ha giocato con gli amici scienziati, con i suoi vicini o con chiunque
gli offrirebbe quella possibilità. Suonare il violino gli aiutava a pensare e al tempo stesso era
una valvola di scarico quando si incollava lavorando alle sue teorie. Anche
È possibile che la quantificazione delle frequenze caratteristiche delle onde
La produzione di strumenti musicali a livello di
l'intuizione di Einstein che l'energia dei fotoni è quantificata.
Studiamo le onde stazionarie che si producono nelle corde del violino. Abbiamo messo al fianco di
un violino un altoparlante con un generatore di frequenza variabile capace di produrre suoni armonici tra 500
y 1500 Hz. Si osserva che la seconda corda (che quando il violino è affine corrisponde alla nota La)
oscilla appreziatamente solo per le frequenze di 880 e 1320 Hz. La corda ha una lunghezza
$L = 32{,}6\ \text{cm}$.

Sulla base di questi dati,

a) Determina e calcola la velocità, $v$, di diffusione delle onde trasversali nella corda del violino.

b) Si produrrebbe un oscillazione apprezzabile della corda per una frequenza inferiore a 500 Hz? Spiega
- Perché?

La velocità di diffusione delle onde trasversali in una corda tensa dipende dalla densità lineare
di massa $\mu$ della corda (massa per unità di lunghezza) e di tensione $T$. La forma di questa dipendenza è una
di cui sopra:

i) $\quad v = \sqrt{\dfrac{\mu}{T}}$

ii) $\quad v = \sqrt{\dfrac{1}{\mu T}}$

(iii) $\quad v = \sqrt{\dfrac{T}{\mu}}$

iv) $\quad v = \sqrt{\mu T}$

c) Sulla base dell'omogeneità di dimensioni delle formule fisiche, indicare ragionevolmente quale di esse sia
Queste espressioni sono le uniche giuste.

La seconda corda del violino ha un diametro $D = 0{,}76\ \text{mm}$ e una densità di massa per unità di
volume medio $\rho = 5{,}93\ \text{g/cm}^3$.

d) Calcola la tensione alla quale è sottoposta la corda del violino.

Si osserva che i ventri (antinodi) dell'onda stazionaria che si produce a 880 Hz hanno un
amplitudine di oscillazione $A = 12{,}7\ \text{mm}$. Prendiamo $t = 0$ nel momento in cui la corda passa attraverso la sua posizione di
equilibrio,

e) Scrivi l'equazione dell'onda stazionaria, in unità SI.

f) Scrivere l'equazione della velocità massima di vibrazione $v_t$ di qualsiasi punto della corda. Determina
il suo valore per un punto situato a $x = \lambda/2$ di un'estremità della corda, la cui lunghezza è $\lambda$
- Come?

P2. Soluzione

a) La corda oscilla notevolmente quando il suono prodotto dal altoparlante corrisponde a una delle seguenti condizioni:
frequenze che possono generare onde stazionarie nella corda. Questo avviene per due frequenze
in seguito, $f_n = 880$ Hz e $f_{n+1} = 1320$ Hz. Anche se non sappiamo il valore di $n$, deve essere rispettato,

$$\left.\begin{aligned} f_n &= n\,\frac{v}{2L} \\ f_{n+1} &= (n+1)\,\frac{v}{2L} \end{aligned}\right\} \quad (1)$$

Quindi, se si toglie $n$ dalla prima equazione,

$$n = \frac{2L}{v}\,f_n \quad (2)$$

e sostituiremo la seconda

$$f_{n+1} = f_n + \frac{v}{2L} \;\Rightarrow\; v = 2L(f_{n+1} - f_n) = 286{,}9\ \text{m/s} \quad (3)$$

b) Nella equazione (2) sostituiremo la velocità ottenuta,

$$n = \frac{f_n}{f_{n+1} - f_n} = 2 \quad (4)$$

che significa che viene attivato il modo $n = 2$ per una frequenza $f_2 = 880$ Hz e il modo $n + 1 = 3$ per
una frequenza $f_3 = 1320$ Hz. Quindi, il modo fondamentale ($n = 1$) sarà eccitato per una frequenza

$$f_1 = \frac{v}{2L} = 440\ \text{Hz} \quad (5)$$

che corrisponde alla nota La.

c) Usando l'analisi dimensionale possiamo determinare quale delle quattro equazioni sia corretta. En el
Il lato sinistro delle quattro è la velocità. Le sue dimensioni fisiche sono

$$[v] = \frac{[L]}{[T]} \quad (6)$$

Le dimensioni fisiche della densità di massa per unità di lunghezza $\mu$ sono:

$$[\mu] = \frac{[M]}{[L]} \quad (7)$$

e quelle della tensione (considerando che è una forza, e quindi ha dimensioni di massa per
accelerazione),

$$[T] = [M]\frac{[L]}{[T]^2} \quad (8)$$

Considerando le equazioni (7) e (8), le dimensioni del termine a sinistra di ciascuna di
le espressioni di $v$ sono

i) $\quad \sqrt{\dfrac{[\mu]}{[T]}}$

ii) $\quad \sqrt{\dfrac{1}{[\mu][T]}}$

(iii) $\quad \sqrt{\dfrac{[T]}{[\mu]}} = \dfrac{[L]}{[T]}$

iv) $\quad \sqrt{[\mu][T]} \quad (9)$

Poiché le dimensioni devono coincidere nei due termini dell'equazione, l'equazione corretta è

$$\text{iii)} \quad v = \sqrt{\frac{T}{\mu}} \quad (10)$$

d) L'espressione (10) consente di chiarire la tensione,

$$T = \mu \cdot v^2 \quad (11)$$

La densità di massa per unità di volume $\rho$ e la densità di massa per unità di lunghezza $\mu$ sono
connessi alla sezione $S$ della corda, in modo che

$$\mu = \rho \cdot S \;\Rightarrow\; \mu = \rho \cdot \pi\left(\frac{D}{2}\right)^2 \quad (12)$$

Substituendo nell'equazione (11) si ottiene

$$T = \pi\rho\left(\frac{D}{2}\right)^2 v^2 \;\Rightarrow\; T = 221{,}4\ \text{N} \quad (13)$$

e) La corda del violino è tenuta per le sue estremità, quindi tali estremità sono a riposo, e quindi
Sono nodi dell'onda stazionaria. Prendendo $x = 0$ all'estremo sinistro, l'equazione dell'onda
Stazionaria è

$$y(x,t) = A\,\text{sen}\,Kx\;\text{sen}(\omega t + \phi_0) \quad (14)$$

Il valore di
$\phi_0$ si ottiene dalla situazione iniziale. In $t=0$ la corda è in posizione di equilibrio,
$y(x,0) = 0$, in modo che

$$0 = A\,\text{sen}\,Kx\;\text{sen}\,\phi_0 \quad (15)$$

Come
$A \neq 0$ e, in generale,
$\text{sen}\,Kx \neq 0$ (solo zero nei nodi), si deduce che

$$\text{sen}\,\phi_0 = 0 \;\Rightarrow\; \phi_0 = \begin{cases} 0 \\ \pi\ \text{rad} \end{cases} \quad (16)$$

Poiché l'esercizio non ci dà più informazioni, possiamo scegliere tra le due, quindi
Prendiamo la più semplice,
$\phi_0 = 0$.
I valori di $K$ e $\omega$ vengono dati da

$$K = \frac{2\pi}{\lambda} = \frac{2\pi}{v}\,f \approx 2\pi\cdot 3\ \text{rad/m}, \qquad \omega = 2\pi f = 1760\pi\ \text{rad/s} \quad (17)$$

Quindi

$$y(x,t) = 12{,}7\cdot 10^{-3}\,\text{sen}\left(2\pi\cdot 3\,x\right)\text{sen}(1760\pi t)\ \text{m} \quad (18)$$

f) La velocità di vibrazione trasversale dei punti della corda è determinata da

$$v_t(x,t) = \frac{\mathrm{d}\,y(x,t)}{\mathrm{d}t} = \frac{\mathrm{d}\left[A\,\text{sen}\,Kx\;\text{sen}\,\omega t\right]}{\mathrm{d}t} = A\omega\,\text{sen}\,Kx\;\cos\omega t \quad (19)$$

La velocità trasversale massima si verificherà quando:
$\cos\omega t = 1$, cioè:

$$v_{t\,\text{max}}(x) = A\omega\,\text{sen}\,Kx \quad (20)$$

Quindi

$$v_{t\,\text{max}}\!\left(x = \frac{\lambda}{2}\right) = A\omega\,\text{sen}\left(K\frac{\lambda}{2}\right) = A\omega\,\text{sen}\,\pi = 0 \quad (21)$$

Come ci si aspetterebbe, dato che nella posizione $x = \lambda/2$ appare un nodo di oscillazione per quella
frequenza.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Rope/String (object)|Rope/String]]
**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1UaxomltixM7jARUskPOIsQLA3pL8aVw6/view)

<div class="qlang-split" data-lang="en"></div>

P2. Einstein and his violin.
Albert Einstein was a passionate musician. At the age of six he began to
playing the violin and later the piano. When I was traveling, I used to bring his violin.
I called her "Lina", waiting for some opportunity to play her
favorite musicians, solo or in company. So you can immerse yourself in music.
He played with friends scientists, neighbors around him or anyone else who
I'd give him that chance. Playing the violin helped him think and at the same time it was
an exhaust valve when he was working on his theories. Even the
It is possible that the quantification of characteristic frequencies of waves
The use of the instrument in the production of musical instruments
Einstein's intuition that the energy of photons is quantified.
We're going to study the stationary waves that occur in the strings of the violin. We put it next to
a violin a speaker with a variable frequency generator capable of producing harmonic sounds between 500
y 1500 Hz. We notice that the second string (which when the violin is tuned corresponds to the note La)
It only oscillates appreciably for the frequencies of 880 and 1320 Hz. The string has a length
$L = 32{,}6\ \text{cm}$.

Based on this data,

(a) Determine and calculate the speed, $v$, of propagation of the cross-wave waves on the violin string.

(b) Would there be a noticeable oscillation of the string at any frequency below 500 Hz? Explain
Why?

The speed of propagation of transverse waves in a tense string depends on the linear density
The value of the wire shall be the sum of the values of the wire's mass $\mu$ (mass per unit length) and its voltage $T$. The form of this dependence is a
of the following four:

i) $\quad v = \sqrt{\dfrac{\mu}{T}}$

ii) $\quad v = \sqrt{\dfrac{1}{\mu T}}$

(iii) $\quad v = \sqrt{\dfrac{T}{\mu}}$

iv) $\quad v = \sqrt{\mu T}$

(c) Based on the homogeneity of dimensions of the physical formulas, reasonably indicate which of the following:
These expressions are the only correct ones.

The second string of the violin has a diameter $D = 0{,}76\ \text{mm}$ and a mass density per unit of
The average volume is $\rho = 5{,}93\ \text{g/cm}^3$.

(d) Calculate the tension to which the violin string is subjected.

It is observed that the ventricles (anthenoids) of the stationary wave occurring at 880 Hz have a
amplitud de oscilación $A = 12{,}7\ \text{mm}$. We take $t = 0$ the moment the string passes through its position of
the balance,

(e) Write the equation of the stationary wave, in SI units.

(f) Write the equation of the maximum vibration speed $v_t$ of any point on the rope. Determine
its value for a point located at a distance $x = \lambda/2$ from one end of the rope, being $\lambda$ the length
I'm going to be a wave.

P2. Solution

(a) The string shall oscillate appreciably when the sound produced by the speaker corresponds to one of the following:
frequencies that can generate stationary waves on the string. This is happening for two frequencies.
consecutivas, $f_n = 880$ Hz y $f_{n+1} = 1320$ Hz. Although we do not know the value of $n$, it must be met,

$$\left.\begin{aligned} f_n &= n\,\frac{v}{2L} \\ f_{n+1} &= (n+1)\,\frac{v}{2L} \end{aligned}\right\} \quad (1)$$

We cleared $n$ from the first equation,

$$n = \frac{2L}{v}\,f_n \quad (2)$$

And we replace it with the second.

$$f_{n+1} = f_n + \frac{v}{2L} \;\Rightarrow\; v = 2L(f_{n+1} - f_n) = 286{,}9\ \text{m/s} \quad (3)$$

(b) In equation (2), we substitute the obtained velocity,

$$n = \frac{f_n}{f_{n+1} - f_n} = 2 \quad (4)$$

This means that the $n = 2$ mode is triggered for a frequency $f_2 = 880$ Hz and the $n + 1 = 3$ mode is triggered for
a frequency $f_3 = 1320$ Hz. Therefore, the fundamental mode ($n = 1$) will be excited for a frequency

$$f_1 = \frac{v}{2L} = 440\ \text{Hz} \quad (5)$$

which is the corresponding one to the note La.

c) Using dimensional analysis we can determine which of the four equations is correct. En el
The left side of the four shows the speed. Its physical dimensions are

$$[v] = \frac{[L]}{[T]} \quad (6)$$

The physical dimensions of the mass density per unit length $\mu$ are

$$[\mu] = \frac{[M]}{[L]} \quad (7)$$

And the voltage (considering that it's a force, and therefore has mass dimensions per
the acceleration),

$$[T] = [M]\frac{[L]}{[T]^2} \quad (8)$$

Taking into account the equations (7) and (8), the dimensions of the left term of each of the
the expressions of $v$ are

i) $\quad \sqrt{\dfrac{[\mu]}{[T]}}$

ii) $\quad \sqrt{\dfrac{1}{[\mu][T]}}$

(iii) $\quad \sqrt{\dfrac{[T]}{[\mu]}} = \dfrac{[L]}{[T]}$

iv) $\quad \sqrt{[\mu][T]} \quad (9)$

Since the dimensions must match both terms of the equation, the correct equation is

$$\text{iii)} \quad v = \sqrt{\frac{T}{\mu}} \quad (10)$$

(d) From the expression (10) we can clear the voltage,

$$T = \mu \cdot v^2 \quad (11)$$

The mass density per unit volume $\rho$ and the mass density per unit length $\mu$ are
related to the $S$ section of the rope, so that

$$\mu = \rho \cdot S \;\Rightarrow\; \mu = \rho \cdot \pi\left(\frac{D}{2}\right)^2 \quad (12)$$

Substituting in equation (11) is obtained

$$T = \pi\rho\left(\frac{D}{2}\right)^2 v^2 \;\Rightarrow\; T = 221{,}4\ \text{N} \quad (13)$$

(e) The violin string is held by its ends, so that those ends are at rest, and therefore
They're nodes in the stationary wave. Taking $x = 0$ at the left end, the wave equation
stationary is

$$y(x,t) = A\,\text{sen}\,Kx\;\text{sen}(\omega t + \phi_0) \quad (14)$$

The value of
$\phi_0$ is obtained from the initial situation. In $t=0$ the string is in its equilibrium position,
$y(x,0) = 0$, so that

$$0 = A\,\text{sen}\,Kx\;\text{sen}\,\phi_0 \quad (15)$$

As
$A \neq 0$ and generally
$\text{sen}\,Kx \neq 0$ (only zero at the nodes), it follows that

$$\text{sen}\,\phi_0 = 0 \;\Rightarrow\; \phi_0 = \begin{cases} 0 \\ \pi\ \text{rad} \end{cases} \quad (16)$$

Since the exercise does not give us any more information, we can choose either, so
We take the simplest one,
$\phi_0 = 0$.
The values of $K$ and $\omega$ are given by

$$K = \frac{2\pi}{\lambda} = \frac{2\pi}{v}\,f \approx 2\pi\cdot 3\ \text{rad/m}, \qquad \omega = 2\pi f = 1760\pi\ \text{rad/s} \quad (17)$$

So that

$$y(x,t) = 12{,}7\cdot 10^{-3}\,\text{sen}\left(2\pi\cdot 3\,x\right)\text{sen}(1760\pi t)\ \text{m} \quad (18)$$

(f) The transverse vibration velocity of the points of the rope is determined by

$$v_t(x,t) = \frac{\mathrm{d}\,y(x,t)}{\mathrm{d}t} = \frac{\mathrm{d}\left[A\,\text{sen}\,Kx\;\text{sen}\,\omega t\right]}{\mathrm{d}t} = A\omega\,\text{sen}\,Kx\;\cos\omega t \quad (19)$$

The maximum transverse speed shall occur when
$\cos\omega t = 1$, that is to say,

$$v_{t\,\text{max}}(x) = A\omega\,\text{sen}\,Kx \quad (20)$$

So that

$$v_{t\,\text{max}}\!\left(x = \frac{\lambda}{2}\right) = A\omega\,\text{sen}\left(K\frac{\lambda}{2}\right) = A\omega\,\text{sen}\,\pi = 0 \quad (21)$$

As expected, given that in the position $x = \lambda/2$ there is a oscillation node for that
frequency.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Rope/String (object)|Rope/String]]
**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1UaxomltixM7jARUskPOIsQLA3pL8aVw6/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Spagna 2023 — Quesito 3" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Fisica Moderna,object/mirror"></span>

<div class="qlang-switch" data-default="es"></div>



P3. Einstein y la velocidad de la luz.
En su visita a Zaragoza, Einstein impartió dos conferencias en el Paraninfo de la Universidad. La primera
de ellas la dedicó a exponer su teoría de la Relatividad Especial. Uno de los postulados más importantes de
esta teoría es que la velocidad de la luz en el vacío, $c$, es constante e independiente del movimiento relativo
entre emisor, receptor y observadores. Con un sencillo experimento mental podemos deducir alguna de las
consecuencias de dicho postulado.
Considera un tren en movimiento a velocidad contante $v$. Una
joven estudiante de física que va montada en el tren (Fig. 1) observa
que se emite un pulso de luz desde un foco situado en el suelo hacia
un espejo colocado en el techo del tren, a una altura $L$ desde el
suelo, de modo que la luz se refleja y vuelve al foco.

a) Calcula el tiempo
$\Delta t$ que, desde el punto de vista de la
estudiante, tarda el pulso desde que sale del foco hasta que
vuelve al mismo.

Un compañero suyo, que está viendo pasar el tren, observa que
la luz describe una trayectoria distinta (Fig. 2), aunque según el
postulado de Einstein, la velocidad de la luz, $c$, es la misma para él
que la que observa su compañera en el tren. Por lo tanto, para él, el
pulso tardará un tiempo
$\Delta t_0 > \Delta t$ en volver al foco.

b) Calcula en función del tiempo
$\Delta t_0$ la distancia $D$ que recorre
la luz desde el foco hasta el espejo desde el punto de vista del
estudiante en reposo.

c) Calcula, en función de $v$, $c$ y $L$, el tiempo
$\Delta t_0$ que, desde el punto de vista del estudiante en reposo, tarda
el pulso desde que sale del foco hasta que vuelve al mismo.

d) Expresa
$\Delta t$ en función de
$\Delta t_0$.

La expresión
que has obtenido en d) corresponde a la dilatación temporal
relativista: un reloj que se mueve se retrasa respecto de otro que se encuentra en reposo.
Este efecto permite que lleguen a la superficie de la Tierra partículas como los piones cargados
$\pi^\pm$, que
se producen en las capas altas de la atmósfera por el bombardeo constante de partículas cargadas
(principalmente protones y núcleos de átomos más pesados) que llegan desde el espacio exterior, conocidas
como rayos cósmicos. Los piones en reposo tienen un tiempo de vida media de 25 ns, antes de desintegrarse
en otras partículas, por lo que difícilmente tendrían tiempo de llegar a la superficie terrestre. Sin embargo,
gracias a la dilatación temporal que se produce cuando se observan moviéndose a gran velocidad, pudieron ser
detectados por primera vez en 1947 en el Laboratorio de Física de Rayos Cósmicos de Chacaltaya (Bolivia),
situado a 5200 m sobre el nivel del mar. Supongamos que los piones viajan por la atmósfera a una velocidad
constante
$v$ cercana a la de la luz,
$v = 0{,}99999c$.

e) Determina el tiempo de vida media de los piones a dicha velocidad que medirá un observador en el
laboratorio.

f) Calcula la altura media sobre el nivel del mar a la que se generaron estos piones en la atmósfera.

$c = 3\cdot 10^5\ \text{km/s}$

P3. Solución

a) Para la observadora montada en el tren, el pulso de luz recorre una distancia $2L$ y se mueve con velocidad
$c$, por lo que

$$\Delta t = \frac{2L}{c} \quad (1)$$

b) Para el observador que está viendo pasar el tren con velocidad $v$, la distancia $s$ que recorre el tren desde
que el pulso de luz sale del foco hasta que vuelve al mismo viene dada por

$$s = v\,\Delta t_0 \quad (2)$$

Aplicando el teorema de Pitágoras (Fig. 3), la distancia $D$ que recorre la luz entre
el foco y el espejo es

$$D = \sqrt{L^2 + \left(\frac{s}{2}\right)^2} \;\Rightarrow\; D = \sqrt{L^2 + \left(\frac{v\,\Delta t_0}{2}\right)^2} \quad (3)$$

c) Para el observador que está en reposo, el pulso de luz recorre una distancia $2D$ y, según el postulado de
Einstein, se mueve también con velocidad $c$, por lo que

$$\Delta t_0 = \frac{2D}{c} \quad (4)$$

Sustituyendo (4) en (3) encontramos la siguiente relación,

$$\Delta t_0 = \frac{2}{c}\sqrt{L^2 + \left(\frac{v\,\Delta t_0}{2}\right)^2} \quad (5)$$

Pasando $c/2$ multiplicando a la izquierda y elevando ambos términos al cuadrado podemos quitar la raíz
cuadrada,

$$\frac{c^2}{4}\,\Delta t_0^2 = L^2 + \left(\frac{v\,\Delta t_0}{2}\right)^2 \quad (6)$$

de donde, con un poco de álgebra, podemos despejar
$\Delta t_0$,

$$\Delta t_0 = \frac{2L}{\sqrt{c^2 - v^2}} \quad (7)$$

Para poder comparar con el valor de
$\Delta t$ obtenido para la observadora en movimiento, la expresión (7) se
puede escribir en la forma

$$\Delta t_0 = \frac{2L}{c}\frac{1}{\sqrt{1 - \left(\dfrac{v}{c}\right)^2}} \quad (8)$$

d) A partir de la expresión (8) podemos escribir,

$$\Delta t_0\sqrt{1 - \left(\frac{v}{c}\right)^2} = \frac{2L}{c} \quad (9)$$

Comparando la expresión (9) con la (1) se obtiene

$$\Delta t = \Delta t_0\sqrt{1 - \left(\frac{v}{c}\right)^2} \quad (10)$$

e) En el sistema de referencia del pion (en movimiento con velocidad
$v = 0{,}99999c$ respecto del laboratorio)
su tiempo de vida media es
$\Delta t = 25$ ns. Para el observador en el laboratorio, que está en reposo, el tiempo
de vida media del pion,
$\Delta t_0$, se puede obtener despejando de la ecuación (10),

$$\Delta t_0 = \frac{\Delta t}{\sqrt{1 - (v/c)^2}} \;\Rightarrow\; \Delta t_0 = 5590\ \text{ns} \quad (11)$$

f) La distancia media que recorren los piones más alejados desde que se producen hasta el punto de
detección, $s$, vendrá dada por

$$s = v \cdot \Delta t_0 \quad (12)$$

De modo que

$$s = 0{,}99999c \cdot \Delta t_0 \;\Rightarrow\; s = 1670\ \text{m} \quad (13)$$

Como el laboratorio de Chacaltaya se encuentra a una altitud
$h_0 = 5200\ \text{m}$, la altura media sobre el nivel
del mar a la que se producen estos piones es

$$h = h_0 + s = 6870\ \text{m}$$

<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p10_f4.png]]
*Luce verticale nel treno (Figura 1)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p10_f5.png]]
*Luce diagonale D osservatore fermo (Figura 2)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p11_f6.png]]
*Triangolo pitagorico percorso luce (Figura 3)*
<!--fig:end-->

**Topic:** [[Special Relativity]], [[Nuclear & Particle Physics]]
**Metodi:** [[Lorentz Transformation (metodo)|Lorentz Transformation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Mirror (object)|Mirror]]
**Fonte:** [Testo (PDF) — p.10](https://drive.google.com/file/d/1UaxomltixM7jARUskPOIsQLA3pL8aVw6/view)


<div class="qlang-split" data-lang="it"></div>

P3. Einstein e la velocità della luce.
Nella sua visita a Saragoza, Einstein ha tenuto due conferenze presso il Paraninfo dell'Università. La prima
di queste le dedicò a esporre la sua teoria della Relatività Speciale. Uno dei più importanti postulati di
Questa teoria è che la velocità della luce nel vuoto, $c$, è costante e indipendente dal movimento relativo
tra emittente, ricevente e osservatore. Con un semplice esperimento mentale possiamo dedurre alcune delle
Le conseguenze di tale pretesa.
Considera un treno in movimento a velocità continua $v$. Una
giovane studente di fisica che si imbarca in treno (Fig. 1) osserva
che emette un impulso di luce da un foco situato sul suolo verso
uno specchio posto sul tetto del treno, ad un'altezza $L$ dal
il terreno, così la luce si riflette e ritorna al fuoco.

a) Calcola il tempo
$\Delta t$ que, desde el punto de vista de la
studente, il polso dura da quando esce dal fuoco fino a quando
Torna allo stesso.

Un suo compagno, che sta guardando il treno passare, osserva che
La luce descrive un percorso diverso (Fig. 2), anche se secondo il
postulato da Einstein, la velocità della luce, $c$, è la stessa per lui
che quella che guarda la sua compagna sul treno. Per lui, quindi, il
pulso ci vorrà un po '
$\Delta t_0 > \Delta t$ en volver al foco.

b) Calcolazione in base al tempo
$\Delta t_0$ la distanza $D$ percorsa
la luce dal foco allo specchio dal punto di vista del
studente in riposo.

c) Calcola, in funzione di $v$, $c$ e $L$, il tempo
$\Delta t_0$ que, desde el punto de vista del estudiante en reposo, tarda
il polso dal momento in cui esce dal fuoco fino a quando ritorna al suo stesso.

d) Espresso
$\Delta t$ in funzione del
$\Delta t_0$.

L'espressione
che hai ottenuto in d) corrisponde alla dilatazione temporale
Relativista: un orologio in movimento si ritardano rispetto ad un altro in riposo.
Questo effetto permette di raggiungere la superficie della Terra particelle come i pioni carichi
$\pi^\pm$, che
si producono nelle alte strati dell'atmosfera dal costante bombardamento di particelle cariche
(principalmente protoni e nuclei di atomi più pesanti) che arrivano dallo spazio esterno, noti
Come i raggi cosmici. I pioni in riposo hanno una vita media di 25 ns prima di disintegrarsi.
In altre particelle, quindi non avrebbero avuto il tempo di raggiungere la superficie terrestre. Tuttavia,
Grazie alla dilatazione temporale che si verifica quando si osservano muoversi a grande velocità, sono stati
I primi sono stati rilevati nel 1947 al Laboratorio di Fisica dei Raggi Cosmici di Chacaltaya (Bolivia),
situato a 5200 m sul livello del mare. Supponiamo che i pioni viaggiino nell'atmosfera a una velocità
costante
$v$ vicino a quella della luce,
$v = 0{,}99999c$.

e) Determina il tempo di vita medio dei pignoni a tale velocità che un osservatore in
laboratorio.

f) Calcola l'altezza media sul livello del mare a cui sono stati generati questi pioni nell'atmosfera.

$c = 3\cdot 10^5\ \text{km/s}$

P3. Soluzione

a) Per l'osservatore montato sul treno, il pulso di luce percorre una distanza $2L$ e si muove a velocità
$c$, per cui

$$\Delta t = \frac{2L}{c} \quad (1)$$

b) Per l'osservatore che sta osservando il treno a $v$, la distanza $s$ da cui il treno passa
che il polso di luce esce dal foco fino a quando non torna allo stesso viene dato da

$$s = v\,\Delta t_0 \quad (2)$$

Applicando il teorema di Pitagora (Fig. 3), la distanza $D$ tra la luce
Il fuoco e lo specchio sono

$$D = \sqrt{L^2 + \left(\frac{s}{2}\right)^2} \;\Rightarrow\; D = \sqrt{L^2 + \left(\frac{v\,\Delta t_0}{2}\right)^2} \quad (3)$$

c) Per l'osservatore a riposo, il pulso di luce percorre una distanza $2D$ e, secondo il postulato di
Einstein, si muove anche a velocità $c$, quindi

$$\Delta t_0 = \frac{2D}{c} \quad (4)$$

Rimpiazzando (4) con (3) troviamo la seguente relazione,

$$\Delta t_0 = \frac{2}{c}\sqrt{L^2 + \left(\frac{v\,\Delta t_0}{2}\right)^2} \quad (5)$$

Passando $c/2$ moltiplicando a sinistra e sollevando entrambi i termini al quadrato possiamo rimuovere la radice
quadrato,

$$\frac{c^2}{4}\,\Delta t_0^2 = L^2 + \left(\frac{v\,\Delta t_0}{2}\right)^2 \quad (6)$$

Da dove, con un po' di algebra, possiamo chiarire
$\Delta t_0$,

$$\Delta t_0 = \frac{2L}{\sqrt{c^2 - v^2}} \quad (7)$$

Per poter confrontare il valore di
$\Delta t$ ottenuto per l'osservatore in movimento, espressione (7) è
può scrivere in forma

$$\Delta t_0 = \frac{2L}{c}\frac{1}{\sqrt{1 - \left(\dfrac{v}{c}\right)^2}} \quad (8)$$

d) L'espressione (8) ci permette di scrivere:

$$\Delta t_0\sqrt{1 - \left(\frac{v}{c}\right)^2} = \frac{2L}{c} \quad (9)$$

Confrontando l'espressione (9) con la (1) si ottiene

$$\Delta t = \Delta t_0\sqrt{1 - \left(\frac{v}{c}\right)^2} \quad (10)$$

e) Nel sistema di riferimento del pion (in movimento a velocità)
$v = 0{,}99999c$ per quanto riguarda il laboratorio)
La sua media vita è
$\Delta t = 25$ ns. Per l'osservatore in laboratorio, che sta a riposo, il tempo
di vita media del pion,
$\Delta t_0$, può essere ottenuto chiarendo l'equazione (10),

$$\Delta t_0 = \frac{\Delta t}{\sqrt{1 - (v/c)^2}} \;\Rightarrow\; \Delta t_0 = 5590\ \text{ns} \quad (11)$$

f) La distanza media tra i pioni più lontani da quando si producono fino al punto di
Il sistema di controllo, $s$, verrà fornito da

$$s = v \cdot \Delta t_0 \quad (12)$$

Quindi

$$s = 0{,}99999c \cdot \Delta t_0 \;\Rightarrow\; s = 1670\ \text{m} \quad (13)$$

Come il laboratorio di Chacaltaya si trova ad un'altitudine
$h_0 = 5200\ \text{m}$, altezza media sul livello
Il mare dove vengono prodotti questi pioni è

$$h = h_0 + s = 6870\ \text{m}$$

<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p10_f4.png]]
*Luminazione verticale nel treno (Figura 1) *
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p10_f5.png]]
*Luce diagonale D osservatore fermo (Figura 2) *
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p11_f6.png]]
*Triangolo pitagorico percorso luce (Figura 3) *
<!--fig:end-->

**Topic:** [[Special Relativity]], [[Nuclear & Particle Physics]]
**Metodi:** [[Lorentz Transformation (metodo)|Lorentz Transformation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Mirror (object)|Mirror]]
**Fonte:** [Testo (PDF) — p.10](https://drive.google.com/file/d/1UaxomltixM7jARUskPOIsQLA3pL8aVw6/view)

<div class="qlang-split" data-lang="en"></div>

P3. Einstein and the speed of light.

During his visit to Zaragoza, Einstein gave two lectures at the University's Paraninfo. The first of these was devoted to presenting his Special Theory of Relativity. One of the most important postulates of this theory is that the speed of light in vacuum, $c$, is constant and independent of the relative motion between emitter, receiver, and observers. With a simple thought experiment we can deduce some of the consequences of this postulate.

Consider a train moving at constant velocity $v$. A young physics student riding on the train (Figure 1) observes that a pulse of light is emitted from a source located on the floor toward a mirror mounted on the ceiling of the train, at height $L$ above the floor, so that the light reflects and returns to the source.

a) Calculate the time $\Delta t$, from the student’s point of view, that the pulse takes to travel from the source until it returns to the same point.

Her classmate, who is watching the train pass by, observes that the light follows a different trajectory (Figure 2), although according to Einstein’s postulate, the speed of light, $c$, is the same for him as it is for his companion on the train. Therefore, from his point of view, the pulse takes a time $\Delta t_0 > \Delta t$ to return to the source.

b) Calculate, in terms of time $\Delta t_0$, the distance $D$ that the light travels from the source to the mirror, as seen by the student at rest.

c) Calculate, in terms of $v$, $c$ and $L$, the time $\Delta t_0$ that, from the point of view of the student at rest, the pulse takes to travel from the source and return to it.

d) Express $\Delta t$ in terms of $\Delta t_0$.

The expression you obtained in d) corresponds to relativistic time dilation: a moving clock runs slow compared to one at rest. This effect allows particles such as charged pions $\pi^\pm$, produced in the upper layers of the atmosphere by constant bombardment from charged particles (mainly protons and nuclei of heavier atoms) coming from outer space, known as cosmic rays, to reach Earth's surface. Pions at rest have a mean lifetime of 25 ns before decaying into other particles, so they would hardly have time to reach Earth's surface. However, thanks to relativistic time dilation when observed moving at high speed, they were first detected in 1947 at the Chacaltaya Cosmic Ray Physics Laboratory (Bolivia), located 5200 m above sea level. Suppose the pions travel through the atmosphere at a constant speed $v$ close to that of light, $v = 0{,}99999c$.

e) Determine the mean lifetime of pions at this speed as measured by an observer in the laboratory.

f) Calculate the average height above sea level at which these pions were generated in the atmosphere.

$c = 3\cdot 10^5\ \text{km/s}$

P3. Solution

a) For the observer riding on the train, the light pulse travels a distance $2L$ and moves with velocity $c$, therefore

$$\Delta t = \frac{2L}{c} \quad (1)$$

b) For the observer watching the train pass with velocity $v$, the distance $s$ that the train travels from when the light pulse leaves the source until it returns to the same point is given by

$$s = v\,\Delta t_0 \quad (2)$$

Applying the Pythagorean theorem (Fig. 3), the distance $D$ that light travels between source and mirror is

$$D = \sqrt{L^2 + \left(\frac{s}{2}\right)^2} \;\Rightarrow\; D = \sqrt{L^2 + \left(\frac{v\,\Delta t_0}{2}\right)^2} \quad (3)$$

c) For the observer at rest, the light pulse travels a distance $2D$ and, according to Einstein's postulate, also moves with velocity $c$, therefore

$$\Delta t_0 = \frac{2D}{c} \quad (4)$$

Substituting (4) into (3), we find the following relation:

$$\Delta t_0 = \frac{2}{c}\sqrt{L^2 + \left(\frac{v\,\Delta t_0}{2}\right)^2} \quad (5)$$

Moving $c/2$ to the left side, multiplying by it and squaring both sides allows us to eliminate the square root:

$$\frac{c^2}{4}\,\Delta t_0^2 = L^2 + \left(\frac{v\,\Delta t_0}{2}\right)^2 \quad (6)$$

From which, with a bit of algebra, we can solve for $\Delta t_0$,

$$\Delta t_0 = \frac{2L}{\sqrt{c^2 - v^2}} \quad (7)$$

To compare with the value of $\Delta t$ obtained by the moving observer, expression (7) can be rewritten in the form

$$\Delta t_0 = \frac{2L}{c}\frac{1}{\sqrt{1 - \left(\dfrac{v}{c}\right)^2}} \quad (8)$$

d) From expression (8), we can write,

$$\Delta t_0\sqrt{1 - \left(\frac{v}{c}\right)^2} = \frac{2L}{c} \quad (9)$$

Comparing expression (9) with (1), we obtain

$$\Delta t = \Delta t_0\sqrt{1 - \left(\frac{v}{c}\right)^2} \quad (10)$$

e) In the pion's reference frame (moving with velocity $v = 0{,}99999c$ relative to the laboratory),
its mean lifetime is $\Delta t = 25$ ns. For the observer in the laboratory, who is at rest, the pion's mean lifetime $\Delta t_0$ can be obtained by solving equation (10):

$$\Delta t_0 = \frac{\Delta t}{\sqrt{1 - (v/c)^2}} \;\Rightarrow\; \Delta t_0 = 5590\ \text{ns} \quad (11)$$

f) The average distance traveled by the most distant pions from their production point to the detection point, $s$, is given by

$$s = v \cdot \Delta t_0 \quad (12)$$

Therefore,

$$s = 0{,}99999c \cdot \Delta t_0 \;\Rightarrow\; s = 1670\ \text{m} \quad (13)$$

Since the Chacaltaya laboratory is located at an altitude $h_0 = 5200\ \text{m}$, the average height above sea level at which these pions are produced is

$$h = h_0 + s = 6870\ \text{m}$$

<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p10_f4.png]]
*Vertical light beam in the train (Figure 1)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p10_f5.png]]
*Diagonal light beam D for the stationary observer (Figure 2)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p11_f6.png]]
*Right triangle for light path (Figure 3)*
<!--fig:end-->
