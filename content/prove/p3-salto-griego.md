---
title: Spagna 2026
tipo: prova
tags:
  - kg/prova
  - anno/2026
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="p3-salto-griego"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2026 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/rod,object/projectile"></span>

<div class="qlang-switch" data-default="es"></div>



P3. Salto griego
Autores clásicos como Heródoto, Plutarco, Aristófanes y Pausanias, cuentan que en el siglo V a. C. un atleta
griego llamado Phayllos (Faílo de Crotona) estableció un récord de salto de longitud durante el pentatlón de
los juegos délficos. El pentatlón consistía en 5 pruebas:
carrera, lanzamiento de jabalina, lanzamiento de disco,
salto de longitud y competición de lucha libre. La
hazaña de Phayllos quedó registrada en el siguiente
epigrama: “Phayllos saltó 5 pies más de 50 pies y lanzó
el disco 5 pies menos de 100 pies” (Antología Palatina,
Apéndice 297). Un pie délfico medía 29,6 cm, lo que
implica que Phayllos saltaba 16,28 m y lanzaba el disco
a 28,12 m. Si bien el rendimiento en el lanzamiento de
disco parece aceptable hoy en día, dada la técnica y los
pesos utilizados en la antigüedad, el salto de longitud
ha sido motivo de controversia dado que ningún atleta
moderno es capaz de saltar esa distancia.
Tras estudiar abundantes fuentes, tanto escritas como
pictóricas, muchos autores concluyen que el salto de longitud
se realizaba estando el atleta parado en el suelo y llevando
pesas (o halteras) en las manos durante el salto. La forma en
que se realizaba el salto y cómo estas pesas ayudaban al atleta
durante el mismo ha sido objeto de debate durante mucho
tiempo. Diversos autores sugieren que el atleta balanceaba los
brazos estando parado en el suelo, realizaba el salto y, una vez
que se encontraba en el aire, lanzaba hacia atrás las halteras
para aumentar la longitud del salto. Además, según algunos autores, los atletas realizaban tres saltos (o cinco
saltos según otros) seguidos, y la distancia computada era la suma de todos los saltos.
El análisis preciso del salto griego es muy complejo, e implica conocimientos avanzados de mecánica y
biomecánica. En este problema vamos a analizar modelos muy simplificados para estudiar dos tipos de salto.
Primero analizaremos un salto sin carrera, con ambos pies en reposo sobre el suelo sin halteras.
Posteriormente analizaremos el salto al estilo griego, en las mismas condiciones que el anterior, pero con
halteras en las manos que son lanzadas por el atleta durante el vuelo. Queremos saber si saltar con halteras es
una ventaja o no. En todo el problema despreciaremos la influencia del aire sobre el saltador y tomaremos
para la aceleración de la gravedad el valor
2
9,8 m/s
g =
.
Para estudiar los movimientos del atleta y las halteras durante el salto, es necesario utilizar el concepto de
centro de masas, que introduciremos a continuación. Dado un sistema de n partículas, cada una de masa
i
m
y vector de posición
(
)
,
i
i
i
r
x y
=

, el centro de masas (CM) del sistema se define como el punto del espacio
dado por el vector
CM
1
1
1
,
n
n
i
i
i
i
i
i
r
m x
m y
M
=
=

=

$\sum$
$\sum$

, donde
1
n
i
i
M
m
=
$=\sum$
 es la masa total del sistema de partículas.
El CM de un sistema que contiene barras (rígidas, homogéneas y muy delgadas) y partículas con masa se
obtiene considerando que cada barra es equivalente a una partícula que tiene la masa de la barra y está en el
centro geométrico de la barra. A continuación, se calcula la posición del CM del sistema a partir de estas
partículas equivalentes a las barras, junto con las masas puntuales que forman también parte del sistema.
Vasija griega del año 540 a. C. que muestra a un atleta realizando un salto de longitud con pesas (halteras) en las manos.
Halteras de un saltador de longitud griego.

En las figuras 1 a 5 se muestra un modelo biomecánico muy simplificado de atleta. Consideraremos que las
piernas, el tronco (incluyendo cuello y cabeza) y los brazos son barras rígidas homogéneas y muy delgadas.
Además, las únicas articulaciones son las de los brazos con el tronco (hombros) y las piernas con el tronco
(caderas). En todas las figuras se indica la posición del CM del sistema con un círculo negro. En todos los
cálculos despreciaremos las dimensiones horizontales del tronco del atleta.

La figura 1 muestra una vista frontal del atleta con el cuerpo estirado y sin las halteras; la 2 es la misma
figura que la 1 pero con halteras en las manos del atleta. La figura 3 muestra una vista lateral del atleta en el
punto más alto de su trayectoria en el salto; la 4 es la misma figura que la 3 pero con halteras en las manos.
La figura 5 muestra una vista lateral del atleta justo en el momento en el que toma tierra tras el salto. Las
longitudes de piernas, tronco y brazos son respectivamente
pl ,
tl y
bl . La altura del atleta es
1,80 m
l =

(distancia desde los pies hasta la parte superior de la cabeza), las piernas miden
0,55
pl
l
=
, el tronco
0,3
tl
l
=
 y los brazos
0,4
bl
l
=
. El atleta tiene una masa
75 kg
m =
, la masa total de ambas piernas es
0,35m , la masa del tronco es 0,55m , y la total de ambos brazos es 0,10m . Para simplificar el cálculo,
consideraremos que las masas del cuello y la cabeza están incluidas en la masa del tronco. La masa total de
las dos halteras es
0,05
h
m
m
=
.
a) Obtén la posición del CM del atleta de las figuras 1, 2 y 5 calculando las distancias 1r , 2r y 5r .
Consideremos un tiro parabólico en el plano XY de una masa puntual lanzada desde el punto (
)
0
0
,
x
y
 con
una velocidad inicial de módulo
0v (llamaremos celeridad al módulo de la velocidad) y formando un ángulo
$\theta$ respecto de la horizontal. El eje X es horizontal, creciente hacia la derecha, y está sobre el suelo; el eje Y
es vertical y creciente hacia arriba. El origen de coordenadas está en el suelo. Se puede demostrar que el
ángulo de lanzamiento con el que se logra el alcance máximo (es decir, la distancia máxima horizontal hasta
que la masa cae al suelo) y dicho alcance máximo son
2
0
0
0
0
0
2
0
0
arctan
,
2
2
max
max
v
v
x
x
v
g y
g
v
g y
$\theta$
=
=
+
+
+

Analicemos ahora el salto del atleta sin halteras1. El movimiento de un sistema de sólidos rígidos, en el que
las fuerzas internas entre las partes del sistema cumplen la tercera ley de Newton (como nuestro modelo de
atleta), cumple la segunda ley de Newton para sistemas de partículas: la suma de las fuerzas externas es igual
a la masa total del sistema multiplicada por la aceleración del CM. Esto implica que las fuerzas internas de
ese tipo no pueden acelerar el CM del sistema, y por tanto podemos estudiar el movimiento del atleta a partir
del movimiento de su CM.

1 En este problema no tendremos en cuenta ni rotaciones ni conservación del momento angular.

Con respecto a la técnica de salto supondremos que, en el momento del salto, el cuerpo del atleta está
completamente estirado (es decir, en la posición de la figura 1) formando un ángulo
0
25o
$\alpha$ =
 con respecto al
suelo (ver figura 6). Experimentalmente, analizando el rendimiento de un grupo de saltadores, se comprueba
que este valor es cercano al óptimo (en sentido biomecánico) para este tipo de
salto. Para ese grupo de saltadores, la celeridad promedio del CM del atleta en
el momento del salto es
0
3,5 m s
v =
. Para calcular la longitud del salto,
consideraremos que, en el momento de tomar tierra, el atleta está colocado
como en la figura 5. Así, el punto de contacto del atleta con el suelo es el
extremo de la pierna (es decir, los dedos del pie). Tras contactar con el suelo,
el atleta gira hacia adelante, de forma que el punto de contacto anterior es el
que determina la longitud total del salto. Haremos la aproximación de que,
cuando el atleta contacta con el suelo, el tronco, las piernas y los brazos están
alineados a la misma altura y en horizontal.
b) Considera el atleta sin halteras. Sabiendo que en el salto su CM describe el mismo movimiento que
un tiro parabólico, y aplicando las condiciones para que el alcance horizontal del CM del atleta sea
máximo, calcula el ángulo
max
$\theta$
 respecto a la horizontal que debe tener la celeridad inicial del CM
del atleta, y calcula la longitud máxima del salto
salto
d
.
Ahora estudiaremos el salto con ha

**Topic:** [[Newtonian Mechanics]], [[Conservation of Momentum]], [[Rotational Dynamics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Rod (object)|Rod]], [[Projectile (object)|Projectile]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1IsconoUp1l4WADY8Y6IIox2ICGj_i6Uu/view)


<div class="qlang-split" data-lang="it"></div>

P3. Salto greco
Autori classici come Erodoto, Plutarco, Aristofani e Pausanias, raccontano che nel V secolo a.C. C. un atleta
Il griego Phayllos (Failio di Crotona) ha stabilito un record di salto di lunghezza durante il pentathlon di
I giochi delfici. Il pentathlon consisteva in 5 prove:
corsa, lancio di boia, lancio di disco,
Salto di lunghezza e competizione di wrestling. La
L'atto di Phayllos fu registrato nel seguente
epigramma: Phayllos ha saltato 5 piedi più di 50 piedi e lanciato
il disco 5 piedi meno di 100 piedi (Antologia Palatina,
Appendice 297). Un piede delfico misurava 29,6 cm, il che significava che
implica che Phayllos saltava 16,28 m e lanciava il disco
a 28,12 m. Mentre il rendimento nel lancio di
La tecnologia e le tecnologie di
Pese usate in antiquità, salto di lunghezza
È stato motivo di controversia, dato che nessun atleta
La moderna è in grado di saltare quella distanza.
Dopo aver studiato molte fonti, scritte e
La maggior parte delle persone che hanno un'idea di un salto di lunghezza
si faceva mentre l'atleta era in piedi sul pavimento e portando
pesanti (o haltere) nelle mani durante il salto. La forma in cui
che si fa il salto e come questi pesi aiutano l'atleta
Il Parlamento europeo ha adottato una decisione che ha
tempo. Alcuni autori suggeriscono che l'atleta balanzava le
braccia in piedi sul pavimento, ha fatto il salto e, una volta
che era in aria, lanciava le palle indietro
per aumentare la lunghezza del salto. Inoltre, secondo alcuni autori, gli atleti facevano tre salti (o cinque salti)
La distanza calcolata era la somma di tutti i salti.
L'analisi precisa del salto greco è molto complessa e comporta conoscenze avanzate di meccanica e di
Biomeccanica. In questo problema analizzeremo modelli molto semplificati per studiare due tipi di salti.
Prima analizzeremo un salto senza corsa, con entrambi i piedi a riposo sul pavimento senza sbarre.
In seguito analizzeremo il salto in stile greco, nelle stesse condizioni di quello precedente, ma con
le sbarre nelle mani che l'atleta lancia durante il volo. Vogliamo sapere se saltare con i palloni è
un vantaggio o no. In tutto il problema disprezziamo l'influenza dell'aria sul saltatore e prenderemo
per l'accelerazione della gravità il valore
2
9,8 m/s
g =
.
Per studiare i movimenti dell'atleta e gli halter durante il salto, è necessario utilizzare il concetto di
Il centro di massa, che introdurremo di seguito. Dato un sistema di n particelle, ciascuna di massa
i
m
e vettore di posizione
(
)
,
i
i
i
r
x y
=

, il centro di massa (CM) del sistema è definito come il punto dello spazio
dato dal vettore
CM
1
1
1
,
n
n
i
i
i
i
i
i
r
m x
m y
M
=
=

=

$\sum$
$\sum$

, dove
1
n
i
i
M
m
=
$=\sum$
è la massa totale del sistema di particelle.
Il CM di un sistema che contiene barre (rigide, omogenee e molto sottili) e particelle a massa se
si ottiene considerando che ogni barra è equivalente a una particella che ha la massa della barra e è nel
centro geometrico della barra. In seguito si calcola la posizione del CM del sistema a partire da queste
Particelle equivalenti a barre, insieme alle masse puntate che fanno parte del sistema.
Vaso greco del 540 a.C. C. che mostra un atleta che fa un salto di lunghezza con pesanti (halter) in mano.
Scalpi di un saltatore di lunghezza greco.

Le figure 1-5 mostrano un modello biomeccanico molto semplificato di atleta. Considereremo che le
le gambe, il tronco (compresi il collo e la testa) e le braccia sono rigide barre omogenee e molto sottili.
Inoltre, le uniche articolazioni sono quelle delle braccia con il tronco (soppi) e le gambe con il tronco
(anca) In tutte le figure è indicata la posizione del CM del sistema con un cerchio nero. In tutti i
Per calcoli, disprezziamo le dimensioni orizzontali del tronco dell'atleta.

La figura 1 mostra una vista frontale dell'atleta con il corpo stretto e senza i halter; la figura 2 è la stessa
figura come la 1 ma con i bracci nelle mani dell'atleta. La figura 3 mostra una vista laterale dell'atleta in
punto più alto della sua traccia nel salto; la 4 è la stessa figura della 3 ma con gli halter in mano.
La figura 5 mostra una vista laterale dell'atleta proprio quando si fa terra dopo il salto. Le
le lunghezze delle gambe, del tronco e delle braccia sono rispettivamente
pl ,
tl y
bl . L'altezza dell'atleta è
1,80 m
l =

(distanza dai piedi alla testa), le gambe misurano
0,55
pl
l
=
, il tronco
0,3
tl
l
=
e le braccia
0,4
bl
l
=
. L'atleta ha una massa
75 kg
m =
, la massa totale di entrambe le gambe è
0,35 m , il tronco è di 0,55 m , e il totale di entrambi gli braccia è di 0,10 m . Per semplificare il calcolo,
Considerando che la massa del collo e della testa sono incluse nella massa del tronco. La massa totale di
Le due haltere sono
0,05
h
m
m
=
.
a) Ottieni la posizione del CM dell' atleta nelle figure 1, 2 e 5 calcolando le distanze 1r , 2r e 5r .
Considerate un tiro parabolico sul piano XY di una massa puntuale lanciata dal punto (
)
0
0
,
x
y
con
una velocità iniziale di modulo
0v (chiameremo velocità al modulo della velocità) e formando un angolo
$\theta$ rispetto alla orizzontale. L'asse X è orizzontale, crescente verso destra, e si trova sul pavimento; l'asse Y
è verticale e crescente verso l'alto. La fonte delle coordinate è nel terreno. Si può dimostrare che il
angolo di lancio con cui si raggiunge la massima portata (cioè la massima distanza orizzontale fino a
che la massa cade al suolo) e tale portata massima è
2
0
0
0
0
0
2
0
0
Arctano
,
2
2
Max
Max
v
v
x
x
v
g y
g
v
g y
$\theta$
=
=
+
+
+

Ora analizziamo il salto senza sosta 1. Il movimento di un sistema di solidi rigidi, in cui
Le forze interne tra le parti del sistema rispettano la terza legge di Newton (come il nostro modello di
Atleta), si adempie alla seconda legge di Newton per i sistemi di particelle: la somma delle forze esterne è uguale
alla massa totale del sistema moltiplicata dall'accelerazione del CM. Ciò implica che le forze interne di
che non possono accelerare il CM del sistema, e quindi possiamo studiare il movimento dell'atleta a partire da
il movimento del suo CM.

1 In questo problema non si terranno conto né di rotazioni né di conservazione del momento angolare.

Per quanto riguarda la tecnica di salto, supponiamo che, al momento del salto, il corpo dell'atleta sia
completamente esteso (cioè nella posizione della figura 1) formando un angolo
0
25o
$\alpha$ =
per quanto riguarda il
il terreno (vedere figura 6). L'esperimento, analizzando le prestazioni di un gruppo di saltatori,
che questo valore sia vicino all'ottimale (in senso biomeccanico) per questo tipo di
Salto. Per quel gruppo di saltatori, la velocità media del CM dell'atleta in
Il momento del salto è
0
3,5 m s
v =
. Per calcolare la lunghezza del salto,
Considereremo che, al momento di prendere terra, l'atleta è posto
come nella figura 5. Quindi il punto di contatto dell'atleta con il suolo è il
estremità della gamba (cioè i piedi). Dopo aver contattato il suolo,
l'atleta gira verso l'avanguardia, in modo che il punto di contatto precedente sia il
che determina la lunghezza totale del salto. Faremo l'approccio che,
Quando l'atleta si mette in contatto con il terreno, il tronco, le gambe e le braccia sono
allineati all'altezza e orizzontalmente.
b) Considera l'atleta senza ostacoli. Sapendo che nel salto il suo CM descrive lo stesso movimento che
un tiro parabolico, e applicando le condizioni per rendere il raggio orizzontale del CM dell'atleta
massimo, calcola l'angolo
Max
$\theta$
rispetto alla orizzontale che deve avere la velocità iniziale del CM
di un atleta, e calcola la lunghezza massima del salto
Salto
d
.
Ora studiamo il salto con ha

**Topic:** [[Newtonian Mechanics]], [[Conservation of Momentum]], [[Rotational Dynamics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Rod (object)|Rod]], [[Projectile (object)|Projectile]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1IsconoUp1l4WADY8Y6IIox2ICGj_i6Uu/view)

<div class="qlang-split" data-lang="en"></div>

P3. Greek jump
Classical authors such as Herodotus, Plutarch, Aristophanes, and Pausanias, say that in the 5th century BCE. C. an athlete
The Greek named Phayllos (Croton Fail) set a record for long jump during the pentathlon of
The Delphic games. The pentathlon consisted of 5 events:
race, boar throwing, disc throwing,
Long jump and wrestling competition. La
Phayllos' feat was recorded in the following
epigram: Phayllos jumped 5 feet over 50 feet and threw
The disc 5 feet less than 100 feet (Palatine Anthology,
The following is the list of the following: A deaf foot measured 29.6 cm, which is
implies that Phayllos jumped 16.28 m and threw the disc
a 28,12 m. While the performance in the launch of
The new system is designed to be more efficient and to be more efficient.
Weights used in antiquity, long jump
It has been a matter of controversy since no athlete
Modern is capable of jumping that distance.
After studying a number of sources, both written and
The first is that the long jump is a very important aspect of the
It was done while the athlete was standing on the floor and carrying
Weights (or halters) on the hands during the jump. The way in which
How the jump was done and how these weights helped the athlete
The Commission has been discussing this issue for a long time.
time. Several authors suggest that the athlete balanced the
arms standing on the ground, he made the jump and, once
He was in the air, throwing his halters backwards.
to increase the length of the jump. In addition, according to some authors, the athletes made three leaps (or five) in the event of a fall.
The total number of jumps was calculated as the sum of all the jumps.
The precise analysis of the Greek leap is very complex and involves advanced knowledge of mechanics and
The biomechanics. In this problem we're going to look at very simplified models to study two types of jumps.
First we'll analyze a non-running jump, with both feet resting on the floor without a hammer.
We shall then examine the leap to the Greek style, under the same conditions as the previous one, but with a
the hand stops that are thrown by the athlete during flight. We want to know if jumping with a hammer is
An advantage or not. In the whole problem we will disregard the influence of air on the jumper and take
For acceleration of gravity the value
2
9,8 m/s
g =
.
In order to study the athlete's movements and halters during the jump, the concept of
The mass center, which we will introduce next. Given a system of n particles, each mass
i
m
and position vector
(
)
,
i
i
i
r
x y
=

, the center of mass (CM) of the system is defined as the point of space
given by the vector
CM
1
1
1
,
n
n
i
i
i
i
i
i
r
m x
m y
M
=
=

=

$\sum$
$\sum$

, where
1
n
i
i
M
m
=
$=\sum$
is the total mass of the particle system.
The CM of a system containing bars (rigid, homogeneous and very thin) and particles with mass is
You get this by considering that each bar is equivalent to a particle that has the mass of the bar and is in the
the geometric center of the bar. The position of the system CM is then calculated from these
particles equivalent to bars, together with the point masses that are also part of the system.
Greek vase from 540 BC. C. showing an athlete making a long jump with weights (halters) in his hands.
Halters of a Greek long jumper.

Figures 1 to 5 show a very simplified biomechanical model of athlete. We shall consider that the
legs, trunk (including neck and head) and arms are very thin, homogeneous stiff bars.
In addition, the only joints are those of the arms with the trunk (shoulders) and the legs with the trunk
(hips) All figures indicate the position of the CM of the system with a black circle. In all the
calculations we will disregard the horizontal dimensions of the athlete's trunk.

Figure 1 shows a frontal view of the athlete with the body stretched and without the halters; Figure 2 is the same
Figure 1 but with a hammer in the athlete's hands. Figure 3 shows a lateral view of the athlete in the
The highest point of its trajectory in the jump; the 4 is the same figure as the 3 but with halters in the hands.
Figure 5 shows a lateral view of the athlete just as he takes ground after the jump. The Commission
Leg lengths, trunk and arms are respectively
pl ,
tl y
bl . The athlete's height is
1,80 m
l =

(distance from the feet to the top of the head), the legs measure
0,55
pl
l
=
, the trunk
0,3
tl
l
=
And the arms
0,4
bl
l
=
. The athlete has a mass
75 kg
m =
, the total mass of both legs is
0.35m , the mass of the trunk is 0.55m , and the total of both arms is 0.10m . To simplify the calculation,
We will consider that the mass of the neck and head is included in the mass of the trunk. The total mass of
The two halters are
0,05
h
m
m
=
.
(a) Get the position of the athlete 's CM from Figures 1, 2 and 5 by calculating distances 1r , 2r and 5r .
Consider a parabolic shot in the XY plane of a point mass thrown from the point (
)
0
0
,
x
y
with
a module speed of at least one
0v (we'll call velocity the speed module) and forming an angle
$\theta$ with respect to the horizontal. The X axis is horizontal, rising to the right, and is above the ground; the Y axis
It's vertical and rising up. The origin of coordinates is in the ground. It can be shown that the
The maximum range (i.e. maximum horizontal distance to the
The mass falls to the ground) and the maximum range is
2
0
0
0
0
0
2
0
0
Arctans
,
2
2
Max
Max
v
v
x
x
v
g y
g
v
g y
$\theta$
=
=
+
+
+

Now let's look at the athlete's jump without a stop. The motion of a solid system in which the
The internal forces between the parts of the system comply with Newton's third law (as our model of
The second law of Newton for particle systems is that the sum of the external forces is equal to the sum of the
the total mass of the system multiplied by the acceleration of the CM. This implies that the internal forces of the
These guys can't accelerate the CM of the system, and so we can study the athlete's movement from
the movement of its CM.

1 In this problem we will not take into account either rotations or conservation of angular momentum.

As regards the technique of jumping, we shall assume that at the time of the jump, the athlete's body is
a total of at least one of the following:
0
25o
$\alpha$ =
with regard to the
the soil (see Figure 6). Experimentally, by analysing the performance of a group of jumpers, it is shown that the
This value is close to the optimal (in the biomechanical sense) for this type of
I'm going to jump. For that group of jumpers, the average CM speed of the athlete in
The time of the jump is
0
3,5 m s
v =
. To calculate the length of the jump,
We will consider that, at the time of landing, the athlete is placed
as shown in Figure 5. So the contact point of the athlete with the ground is the
the end of the leg (i.e. the toes). After contacting the ground,
The athlete turns forward, so that the previous contact point is the
determining the total length of the jump. We'll make the approximation that,
When the athlete touches the ground, the trunk, legs and arms are
aligned at the same height and horizontally.
(b) Consider the athlete without a hammer. Knowing that in the jump your CM describes the same movement that
a parabolic shot, and applying the conditions so that the horizontal range of the athlete's CM is
Maximum, calculates the angle
Max
$\theta$
with respect to the horizontal that the initial CM velocity must have
the athlete, and calculates the maximum jump length
I jump
d
.
Now we're going to study the jump with ha

**Topic:** [[Newtonian Mechanics]], [[Conservation of Momentum]], [[Rotational Dynamics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Rod (object)|Rod]], [[Projectile (object)|Projectile]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1IsconoUp1l4WADY8Y6IIox2ICGj_i6Uu/view)
