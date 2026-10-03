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

P3. Greek Jump
Classical authors such as Herodotus, Plutarch, Aristophanes, and Pausanias recount that in the 5th century B.C., a Greek athlete named Phayllos (Phayllus of Crotona) set a record in the long jump during the Pythian Games' pentathlon. The pentathlon consisted of five events:
running, javelin throw, discus throw, long jump, and wrestling competition. Phayllos's feat was recorded in the following epigram: “Phayllos jumped 5 feet more than 50 feet and threw the discus 5 feet less than 100 feet” (Palatine Anthology, Appendix 297). A Pythian foot measured 29.6 cm, implying that Phayllos jumped 16.28 m and threw the discus to a distance of 28.12 m. While today’s performance in the discus throw seems acceptable given ancient techniques and weights, the long jump has been a subject of controversy because no modern athlete is able to achieve such a distance.
After studying numerous written and pictorial sources, many authors conclude that the long jump was performed with the athlete standing still on the ground while holding weights (or halteres) in their hands during the jump. The manner in which the jump was executed and how these weights assisted the athlete has been debated for a long time. Various authors suggest that the athlete swung their arms while standing on the ground, performed the jump, and once airborne, threw the halteres backward to increase the jumping distance. Additionally, according to some authors, athletes performed three jumps (or five jumps according to others) consecutively, and the total distance recorded was the sum of all individual jumps.

The precise analysis of the Greek long jump is highly complex and requires advanced knowledge in mechanics and biomechanics. In this problem, we will examine two highly simplified models to study two types of jumps.

First, we will analyze a jump without a run-up, with both feet at rest on the ground and no halteres.

Subsequently, we will analyze the Greek-style jump under identical conditions as above, but with halteres held in the hands that are thrown by the athlete during flight. We wish to determine whether jumping with halteres provides an advantage or not. Throughout the problem, we will neglect air resistance on the jumper and take the acceleration due to gravity as
2
9.8 m/s g = .
To study the motion of the athlete and the weights during the jump, it is necessary to use the concept of center of mass, which we introduce below. Given a system of n particles, each with mass i m and position vector (
)
, i i i r x y
= , the center of mass (CM) of the system is defined as the point in space given by the vector
CM
1
1
1
, n n i i i i i i r m x m y
M
=
=

=

$\sum$
$\sum$

, where
1 n i i
M m
=
$=\sum$ is the total mass of the system of particles.

The CM of a system containing bars (rigid, homogeneous, and very thin) and point masses is obtained by considering each bar as equivalent to a particle having the mass of the bar and located at the geometric center of the bar. Subsequently, the position of the CM of the system is calculated based on these equivalent particles representing the bars, together with the point masses that also form part of the system.

Greek vase from 540 B.C. depicting an athlete performing a long jump with weights (halteres) in his hands.
Halteres of a Greek long jumper.

In figures 1 to 5 a highly simplified biomechanical model of an athlete is shown. We will consider the legs, trunk (including neck and head), and arms as thin, homogeneous rigid rods.
Additionally, the only joints are those between the arms and trunk (shoulders) and between the legs and trunk (hips). In all figures, the center of mass (CM) of the system is indicated by a black circle. In all calculations, we will neglect the horizontal dimensions of the athlete’s trunk.

Figure 1 shows a front view of the athlete with body fully extended and without weights; figure 2 is identical to figure 1 but with weights held in the athlete’s hands. Figure 3 shows a side view of the athlete at the highest point of their trajectory during the jump; figure 4 is identical to figure 3 but with weights held in the hands.
Figure 5 shows a side view of the athlete exactly at the moment they land after the jump. The lengths of legs, trunk, and arms are respectively pl, tl, and bl. The athlete’s height is
1.80 m l =

(distance from feet to top of head), the legs measure
0.55 pl l = , the trunk
0.3 tl l = , and the arms
0.4 bl l = . The athlete has a mass
75 kg m = , the total mass of both legs is
0.35m , the trunk mass is 0.55m , and the total mass of both arms is
0.10m . For simplicity, we will assume that the masses of the neck and head are included in the trunk mass. The total mass of the two weights is
0.05 h m m = .

a) Determine the position of the CM of the athlete in figures 1, 2, and 5 by calculating the distances 1r , 2r , and 5r .

Consider a projectile motion in the XY plane of a point mass launched from point (
0
0
, x y ) with an initial velocity of magnitude
0v (we will call speed the magnitude of velocity) and forming an angle
$\theta$ with respect to the horizontal. The X-axis is horizontal, increasing to the right, and lies on the ground; the Y-axis is vertical and increases upward. The origin of coordinates is located on the ground. It can be shown that the launch angle for maximum range (i.e., the maximum horizontal distance until the mass hits the ground) and said maximum range are
2
0
0
0
0
0
2
0
0 arctan
,
2
2 max max v v x x v g y g v g y
$\theta$
=
=
+
+
+

Let us now analyze the athlete's jump without weights. The motion of a system of rigid bodies, in which internal forces between the parts of the system satisfy Newton's third law (as in our athlete model), obeys Newton's second law for systems of particles: the sum of external forces equals the total mass of the system multiplied by the acceleration of the center of mass (CM). This implies that internal forces of this type cannot accelerate the CM of the system; therefore, we can study the athlete's motion based on the motion of their CM.

1 In this problem, we will not consider rotations or conservation of angular momentum.

With regard to the jumping technique, we assume that at the moment of takeoff, the athlete's body is fully extended (i.e., in the position shown in Figure 1), forming an angle
0
25° $\alpha$ with respect to the ground (see Figure 6). Experimentally, by analyzing the performance of a group of jumpers, it is found that this value is close to the biomechanically optimal one for this type of jump. For this group of athletes, the average speed of the athlete's center of mass (CM) at takeoff is
0
3.5 m s v = . To compute the jump length, we assume that at the moment of landing, the athlete is positioned as shown in Figure 5. Thus, the point of contact between the athlete and the ground is at the end of the leg (i.e., the toes). After contacting the ground, the athlete rotates forward so that the previous contact point determines the total jump length. We make the approximation that, when the athlete contacts the ground, the trunk, legs, and arms are aligned at the same height and horizontally.

b) Consider the athlete without weights. Knowing that during the jump, the CM follows motion identical to a projectile motion, and applying the conditions for maximum horizontal range of the athlete's CM, calculate the angle max $\theta$ that the initial speed of the CM must make with respect to the horizontal, and calculate the maximum jump length d.

Now we will study the jump with weights.
