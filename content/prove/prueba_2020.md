---
title: Argent 2020
tipo: prova
tags:
  - kg/prova
  - anno/2020
  - paese/Argentina
  - comp/Argent
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="prueba_2020"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Argent 2020 — Quesito 1" data-tags="kg/prova,paese/Argentina,comp/Argent,cluster/Meccanica,object/planet,object/satellite,object/projectile"></span>

<div class="qlang-switch" data-default="es"></div>



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
**Objects:** [[Planet (object)|Planet]], [[Satellite (object)|Satellite]], [[Projectile (object)|Projectile]]
**Fonte:** [Testo (PDF) — p.19](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)


<div class="qlang-split" data-lang="it"></div>

Problema 1: Un'avventura spaziale nel Rinascimento!!!
Una delle potenze mondiali del XVII secolo ha assunto uno scienziato
di tempo per fare i calcoli necessari per mettere un oggetto in orbita
intorno alla Terra. La conoscenza di allora si limitava alle leggi di Kepler
E alcune questioni di cinematografia e molto poco di dinamica. Si disponeva anche
La Commissione ha adottato una serie di misure per la protezione dell'ambiente, la protezione dell'ambiente e la protezione dell'ambiente.
telescopio recentemente sviluppato da Galileo.
Le leggi di Kepler, espresse per il movimento planetario, sono:
1) I pianeti si muovono su elisi con il Sole in uno dei loro foci.

2) Il radio vettore che descrive il movimento del pianeta, spazza le stesse aree in
- E' la stessa cosa.

3) Se $T_1$, $T_2$, $a_1$ e $a_2$ rappresentano i periodi e le semiaie superiori delle
le orbite di due pianeti, 1 e 2, si ottengono la seguente relazione:

$$\left(\frac{T_1}{T_2}\right)^2 = \left(\frac{a_1}{a_2}\right)^3$$

La Commissione ha adottato una proposta di direttiva che prevede che le misure di cui all'articolo 1 del regolamento (CEE) n.
Kepler stesso, che in un romanzo chiamato Somnium, ha speculato sulla possibilità di
mandare gli esseri umani a viaggiare verso la Luna.
Il compito del ricercatore era quello di determinare le caratteristiche dell'orbita che il
L'oggetto sarebbe stato così come pensare al modo in cui tale oggetto potrebbe essere messo in
Orbita.
Considerando i dati che il ricercatore aveva:
Tabella 1: Dati con cui il scienziato contava
Radiosfera media dell'orbita lunare
$384000$ km
Periodo di orbita lunare
$27{,}32$ giorni
Radio medio della Terra
$6371$ km

Sapendo che tra le condizioni che il corpo messo in orbita doveva soddisfare,
era il fatto che doveva rimanere fermo sul cielo della potenza che aveva
Insegna al scienziato; in terminologia moderna si direbbe che era un oggetto geo
- Sincronica.
a) Calcolare la semicilometria maggiore dell'ellipse su cui si muove il corpo.
Un altro requisito che è stato richiesto al scienziato rinascimentale per la progettazione della
L'orbita, era che l'eccentricità di esso fosse $e = 0{,}30$. Ricordare che la
eccentricità di un'ellipse è definita da:
$$e = \sqrt{1 - \left(\frac{b}{a}\right)^2}$$

dove $a$ è la semiscia maggiore e $b$ la semiscia minore dell'ellisse.
b) Calcolare la semicilometria minore dell'ellipse su cui si muove il corpo.

Considerando che l'equazione per un'ellipse, in coordinate polari, è
data da:
$$r(\theta) = \frac{a(1 - e^2)}{1 + e\cos(\theta)}$$
dove $\theta$ è l'angolo misurato dal perigeo, in senso antiorario e tale che
l'origine di $r$ è nel foco dell'ellipse (vedere Figura 1). E che l'area $A$ di esso
è data da: $A = \pi a b$.

Figura 1: Elice che rappresenta il percorso del corpo in orbita intorno a
la Terra (disegno non a scala)

c) Calcolare la velocità aerea media del corpo in orbita.

d) Calcolare la velocità media del corpo nei pressi del perigeo di
l'orbita.

e) Calcolare la velocità media del corpo al punto più lontano (apoggio)
di tutto il suo percorso.

Finire la prova di livello 1
Continua la prova per il livello 2

Altri preparati$\dots$
Tra i compiti del scienziato rinascimentale c'era la determinazione della posizione del corpo in
La sua orbita è a seconda del tempo. Per ottenere questo calcolato l'area dei settori
dilimitati dalla posizione del vettore $r$ sul perihelione, $r_p$, e del vettore $r(\theta_j)$,
dove
$$\theta_j = \frac{2\pi j}{10}, \quad j = 0, \dots, 10$$
e corrispondono a aver diviso l'intervallo $[0, 2\pi]$ in 10 parti uguali (vedere Figura 2).

Figura 2: Settore di area spazzato per il vettore di posizione
L'area $A_j$ corrispondente al settore con angolo $\theta_j$, è data dalla espressione:
$$A_j(a, e, \theta_j) = \frac{a^2(1 - e^2)^2}{2}\, I(e, \theta_j)$$
dove $a$ è la semicentrismo maggiore dell'ellipse, $e$ la sua eccentricità. Quantità $I(e, \theta_j)$
sono indicate in Tabella 2, per l'escentricità $e = 0{,}3$.

Tabella 2: Valori delle quantità $I(e, \theta_j)$
per $e = 0.3$

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
f) Sulla base dei dati della tabella 1, e usando le leggi di Kepler,
Configgere una tabella per il modulo del vettore posizione del corpo
messo in orbita in funzione del tempo. Con i dati forniti
potrà valutare la posizione del vettore in 11 tempi diversi.

Infinito e oltre!!!
Isaac Newton ha discusso dell'uso di un cannone per posizionare un oggetto in orbita. Newton
Il suo parere è stato il seguente:
parole: immaginiamo una montagna molto alta che la sua
il picco è sopra l'atmosfera terrestre;
Sul monte c'è un cannone che spara
- Orisontale. Come ogni tiro viene fatto
con un carico esplosivo maggiore, la pallottola di cannone avrà
una velocità maggiore, e il proiettile cadrà sempre più.
- lontano. Infine, a una certa velocità il proiettile non
Toccerà la terra e resterà in orbita per sempre
intorno alla Terra.
Per prova e errore e procedendo secondo le
suggerito da Newton, lo scienziato rinascimentale si prepara a lanciare il proiettile,
direzione orizzontale, a diverse velocità. L'oggetto che volevo mettere in orbita
Aveva una massa di $200$ kg e la massa del cannone che aveva era $2000$ kg.
g) Progettare un metodo per misurare la velocità di uscita del proiettile
con misurazioni della velocità di "retrocesso" del cannone.
Pagina di risposte Problema 1
Un'avventura spaziale nel Rinascimento!!!

Pts
a)
la semiezza maggiore dell'ellisse è:

b)
la semiezza minore dell'ellisse è:

c)
la velocità aerea media è:

d)
la velocità media del corpo nei pressi del perigeo è:

e)
la velocità media del corpo in apoggio è:

Finità di livello 1, continuazione di livello 2

f)
Tabella per: modulo del vettore posizione come funzione del tempo:

g)
Metodo per misurare la velocità di uscita:
Pagina di risposte Problema N°2:
Un'avventura spaziale nel Rinascimento!!!

Pts
a)
la semiezza maggiore dell'ellisse è:

$a_1 = 442333$ km

b)
la semiezza minore dell'ellisse è:

$b = 40383$ km

c)
la velocità aerea media è:

$$\text{vel}_\text{areolar} = \frac{\text{área de la elipse}}{\text{período de la órbita}} = \frac{\pi a b}{T}$$

d)
la velocità media del corpo nei pressi del perigeo è:
$$V_p = 15103\ \frac{\text{km}}{\text{h}}$$

e)
la velocità media del corpo in apoggio è:

$$v_a = \frac{2\pi b}{T(1 + e)} = 8132\ \frac{\text{km}}{\text{h}}$$

Finità di livello 1, continuazione di livello 2
continua livello 2

f)
Tabella per: modulo del vettore posizione come funzione del tempo:

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
Metodo per misurare la velocità di uscita:

Ogni volta che si lancia il cannone si muoverà in direzione opposta al proiettile e la sua velocità
dopo il tiro sarà:

$$v_\text{cañón} = -\frac{m_\text{cuerpo}}{m_\text{cañón}}\, v_\text{cuerpo}$$
La velocità media del cannone dopo il colpo è:
$$v_\text{cañón} = \frac{d}{t}$$
in cui $d$ è la distanza percorsa in un determinato tempo $t$. Se fissate la distanza, e
Se riusciamo a misurare il tempo, possiamo ottenere la velocità media del cannone nel
E' il momento di fare un passo indietro e di usare l'equazione di sopra, per ottenere la velocità con cui è stato lanciato il
corpo nello spazio.
Soluzione del problema "Un'avventura spaziale nel Rinascimento"
a) Secondo la Terza Legge di Kepler, se
$T_1$ = periodo dell'oggetto da mettere in orbita = $24$ hs
$T_2 = T_L = 27{,}32$ giorni $= 27{,}32\times24 = 655{,}68$ hs
$a_1$ = semicilogramma maggiore dell'orbita dell'oggetto
$a_2$ = semicilogramma maggiore dell'orbita lunare $= 384000$ km. Allora:
$$a_1 = a_2 \left(\frac{T_1}{T_2}\right)^{2/3} \implies$$

$$a_1 = 384000\ \text{km} \left(\frac{24}{655{,}68}\right)^{2/3} = 42333\ \text{km}$$

b) Dall'espressione di eccentricità, possiamo chiarire il semiconduzione minore
$b$:
$$b = a\sqrt{1 - e^2}$$
In sostituzione, si ottiene
$$b = 42426\ \text{km} \times \sqrt{1 - (0.3)^2} = 40383\ \text{km}$$
La velocità areolare è
$$\text{vel}_\text{areolar} = \frac{\text{área de la elipse}}{\text{período de la órbita}} = \frac{\pi a b}{T}$$
Secondo la seconda legge di Kepler, questa velocità è la stessa per ogni settore.
di superficie dell'ellipse. Prendiamo due punti vicini al perihelione, come si
mostra nella figura

L'area del settore compresa tra i punti $P_1$ e $P_2$ è:
$$\Delta A \approx \frac{1}{2}\, r_p\, \Delta r$$

**Topic:** [[Gravitation]], [[Newtonian Mechanics]]
**Metodi:** [[Kepler's Laws (metodo)|Kepler's Laws]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Planet (object)|Planet]], [[Satellite (object)|Satellite]], [[Projectile (object)|Projectile]]
**Fonte:** [Testo (PDF) — p.19](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)

<div class="qlang-split" data-lang="en"></div>

Problem 1: A Space Adventure in the Renaissance!!!
One of the world's great powers of the early 17th century hired a scientist
of time to perform the calculations necessary to put an object into orbit
around the Earth. The knowledge of the time was limited to Kepler's laws.
And some questions of kinematics and very little of dynamics. It was also available
The Commission has already adopted a number of proposals for the
A telescope recently developed by Galileo.
Kepler's laws, stated for planetary motion, are:
1) The planets move on ellipses with the Sun at one of their focuses.

2) The radiolector that describes the motion of the planet, swept equal areas in the
equal times.

3) If $T_1$, $T_2$, $a_1$ and $a_2$ represent the periods and the longer half-lives of the
orbits of two planets, 1 and 2, the following relationship is satisfied:

$$\left(\frac{T_1}{T_2}\right)^2 = \left(\frac{a_1}{a_2}\right)^3$$

It may seem strange to think of this kind of approach, but it is known that it was the
Kepler himself, who, in a novel called Somnium, speculated about the possibility of
Put humans on a journey to the moon.
The task of the scientist was to determine the characteristics of the orbit that the
The object would then, as well as think about the way that object could be placed in the
orbit.
Considering the data the scientist had:
Table 1: Data used by the scientist
The mean radius of lunar orbit
$384000$ km
Period of lunar orbit
$27{,}32$ días
Average radio of the Earth
$6371$ km

Knowing that among the conditions that the body put into orbit must meet,
There was the fact that he had to remain still over the sky of power that had
It was a geological object.
synchronous.
(a) Calculate the major semicircle of the ellipse over which the body moves.
Another requirement that was asked of the Renaissance scientist for the design of the
The orbit was that the eccentricity of the same was $e = 0{,}30$. Remember that the
The eccentricity of an ellipse is defined by:
$$e = \sqrt{1 - \left(\frac{b}{a}\right)^2}$$

where $a$ is the major semicircle and $b$ the minor semicircle of the ellipse.
(b) Calculate the minor semicircle of the ellipse over which the body moves.

Considering that the equation for an ellipse, in polar coordinates, is
given by:
$$r(\theta) = \frac{a(1 - e^2)}{1 + e\cos(\theta)}$$
where $\theta$ is the angle measured from the perigee, in the anti-clockwise direction and such that
The origin of $r$ is in the focus of the ellipse (see Figure 1). And that the area $A$ of the same
is given by: $A = \pi a b$.

Figure 1: Elipse representing the path of the body placed in orbit around the Earth
the Earth (not-scale drawing)

(c) Calculate the average aerodynamic velocity of the body in its orbit.

(d) Calculate the average body speed near the perigee of the
the orbit.

e) Calculate the average body speed at the farthest point (height)
of his career.

End of test level 1
Continue testing for Level 2

Some other preparations$\dots$
Among the tasks of the Renaissance scientist was to determine the position of the body in the
Its orbit depends on time. To achieve this, he calculated the area of the sectors
Delimited by the position of the vector radius $r$ in perihelion, $r_p$, and the vector radius $r(\theta_j)$,
where
$$\theta_j = \frac{2\pi j}{10}, \quad j = 0, \dots, 10$$
and correspond to having divided the $[0, 2\pi]$ interval into 10 equal parts (see Figure 2).

Figure 2: Area sector swept by position vector
The area $A_j$ corresponding to the sector with angle $\theta_j$ is given by the expression:
$$A_j(a, e, \theta_j) = \frac{a^2(1 - e^2)^2}{2}\, I(e, \theta_j)$$
where $a$ is the major semicircle of the ellipse, $e$ its eccentricity. The quantities $I(e, \theta_j)$
are given in Table 2, for eccentricity $e = 0{,}3$.

Table 2: Values of the quantities $I(e, \theta_j)$
for $e = 0.3$

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
(f) Based on the data in Table 1, and using Kepler's laws,
Make a table for the body position vector module
put into orbit as a function of time. With the data provided
You can evaluate the vector position in 11 different times.

To infinity and beyond!!!
Isaac Newton discussed the use of a cannon to place an object in orbit. The newton
The Commission has made the following reasoning (in its own words)
Let's imagine a mountain that's very high
peak is above the Earth's atmosphere; over
On top of that mountain there's a cannon firing
horizontally. As each shot is made
With a higher explosive charge, the cannonball will have
A higher speed, and the projectile will drop more and more.
I'm not far away. Finally, at a certain speed the projectile does not
It will touch the earth and remain orbiting forever
around the Earth.
By trial and error and proceeding according to the
suggested by Newton, the Renaissance scientist is about to launch the projectile,
horizontal direction, at different speeds. The object you wanted to put into orbit
It had a mass of $200$ kg and the mass of the cannon at its disposal was $2000$ kg.
(g) Design a method for measuring the projectile's output speed
using measurements of the cannon's 'retrocessing' speed.
Question 1 Answer Sheet
A Space Adventure in the Renaissance!!!

Pts
a)
The major semicircle of the ellipse is:

b)
The smallest half of the ellipse is:

c)
the mean areolar velocity is:

d)
the average body speed near perigee is:

e)
The average body speed at peak is:

End of Level 1, continue to Level 2

f)
Table for: position vector module as a function of time:

g)
method for measuring the output speed:
Hoja de Respuestas Problema N°2:
A Space Adventure in the Renaissance!!!

Pts
a)
The major semicircle of the ellipse is:

$a_1 = 442333$ km

b)
The smallest half of the ellipse is:

$b = 40383$ km

c)
the mean areolar velocity is:

$$\text{vel}_\text{areolar} = \frac{\text{área de la elipse}}{\text{período de la órbita}} = \frac{\pi a b}{T}$$

d)
the average body speed near perigee is:
$$V_p = 15103\ \frac{\text{km}}{\text{h}}$$

e)
The average body speed at peak is:

$$v_a = \frac{2\pi b}{T(1 + e)} = 8132\ \frac{\text{km}}{\text{h}}$$

End of Level 1, continue to Level 2
Level 2 is continuing

f)
Table for: position vector module as a function of time:

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
method for measuring the output speed:

At each shot the cannon will move in the opposite direction to the projectile and its speed
After the shooting, it'll be:

$$v_\text{cañón} = -\frac{m_\text{cuerpo}}{m_\text{cañón}}\, v_\text{cuerpo}$$
The average gun speed after firing is:
$$v_\text{cañón} = \frac{d}{t}$$
where $d$ is the distance travelled at a given time $t$. If we look at the distance, and
We can measure the time, we can get the average speed of the cannon in the
So we're going to go back and use the equation above, take the velocity at which the
body into space.
Solution to the "A Space Adventure in the Renaissance" Problem
(a) According to Kepler's Third Law, if
$T_1$ = period of the object to be placed into orbit = $24$ hs
$T_2 = T_L = 27{,}32$ días $= 27{,}32\times24 = 655{,}68$ hs
$a_1$ = greater half of the object's orbit
$a_2$ = greater half-life of the lunar orbit $= 384000$ km. So , what ?
$$a_1 = a_2 \left(\frac{T_1}{T_2}\right)^{2/3} \implies$$

$$a_1 = 384000\ \text{km} \left(\frac{24}{655{,}68}\right)^{2/3} = 42333\ \text{km}$$

(b) From the expression of eccentricity, we can clear the minor semicircle.
$b$:
$$b = a\sqrt{1 - e^2}$$
Substituting, it turns out
$$b = 42426\ \text{km} \times \sqrt{1 - (0.3)^2} = 40383\ \text{km}$$
The areolar velocity is
$$\text{vel}_\text{areolar} = \frac{\text{área de la elipse}}{\text{período de la órbita}} = \frac{\pi a b}{T}$$
According to Kepler's Second Law, this velocity is the same for each sector.
of the ellipse area. Let's take two points near the perihelion, as we do.
sample in the figure

The area of the sector between $P_1$ and $P_2$ is
$$\Delta A \approx \frac{1}{2}\, r_p\, \Delta r$$

**Topic:** [[Gravitation]], [[Newtonian Mechanics]]
**Metodi:** [[Kepler's Laws (metodo)|Kepler's Laws]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Planet (object)|Planet]], [[Satellite (object)|Satellite]], [[Projectile (object)|Projectile]]
**Fonte:** [Testo (PDF) — p.19](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Argent 2020 — Quesito 2" data-tags="kg/prova,paese/Argentina,comp/Argent,cluster/Meccanica,object/particle-beam,object/nucleus"></span>

<div class="qlang-switch" data-default="es"></div>



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
- **B.** ¿Cuál es la velocidad de las partículas alfa cuando son inyectadas en el LINAC?
- **C.** ¿Cuál debe ser la longitud del primer tubo de desplazamiento del LINAC ($T_1$ en
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
$$Q = (M_a + M_X - M_Y - M_b)\, c^2 \quad (1)$$

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

$$\alpha + {}^{14}_{7}\text{N} \to p + {}^{17}_{8}\text{O} \quad (2)$$

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
**Objects:** [[Particle Beam (object)|Particle Beam]], [[Nucleus (object)|Nucleus]]
**Fonte:** [Testo (PDF) — p.30](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)


<div class="qlang-split" data-lang="it"></div>

Problema 2: Accelerazione profonda con un LINAC!!!

Un acceleratore lineare per radio frequenza, di solito chiamato LINAC, è un
dispositivo per accelerare le particelle elettricamente cariche. In questo tipo di acceleratori
la particella si muove in un percorso rettilineo, lungo il quale si accelera a
Intervalli attraverso un campo elettrico ad alta frequenza.

In un modello semplificato possiamo considerare che un LINAC per accelerare gli ioni è
composto da una successione di tubi di spostamento metallici separati da
le aperture di accelerazione, come illustrato schematicamente nella figura 1. Tutto il
Il sistema si trova all'interno di una camera evacuata ad un alto livello di vuoto.

Figura 1: Schema di un lineare acceleratore di particelle (LINAC) con due fasi di
Accelerazione.

Con F viene definito il "source" di particelle e PA rappresenta un preacceleratore che iniege
Particelle ad una determinata energia nel LINAC. Con $T_1$, $T_2$ e $T_3$ indicare i tubi di
desplazamiento y con $A_1$ y $A_2$ las aberturas de aceleración. V è una fonte di tensione
un'alternativa ad alta frequenza che alimenta il LINAC. La linea a tracciato indica il percorso di
le particelle accelerate. I tubi funzionano come elettrodi e sono collegati a una
fonte di tensione ad alta frequenza. Potenzio elettrico $V(t)$, che produce il campo
Accelerazione elettrica lungo l'asse all'interno delle aperture di accelerazione, variabile
Sinusoidalmente con il tempo come mostrato in Figura 2.

L'acceleratore è progettato in modo che, attraversando un'apertura, l'ion si accelera
per la differenza di potenziale elettrico che si stabilisce tra i due tubi adiacenti. El
Il passo dell'ion attraverso un'apertura di accelerazione è sincronizzato con il massimo valore che
può raggiungere il potenziale acceleratore. Dopo aver accelerato, l'ion entra in un tubo di
il movimento, all'interno del quale non si sperimenta l'azione di alcun campo elettrico. La
Distanza tra i centri di due aperture di accelerazione consecutive, è progettata per:
in modo che l'ion raggiunga la prossima apertura di accelerazione in sincronia con il massimo
Potenzialmente accelerante. In questo modo, la particella guadagna energia poco a poco a
misura che attraversa l'acceleratore.

Vogliamo costruire un LINAC per accelerare le particelle alfa. Per questo abbiamo una
una fonte di alimentazione V, di frequenza $20$ MHz e una tensione massima di $V_0 = 12{,}5$ kV.
Le particelle alfa sono nuclei di ${}^{4}_{2}\text{He}$ (elio-4), cioè composti da due
Protoni e due neutroni. In una fase di pre-accelerazione si eleva l'energia cinetica di
las partículas alfa a $4{,}806\times10^{-14}$ J. Questa energia viene injectata nel primo tubo di
desplazamiento del LINAC en el instante de tiempo $t = 0$ (ver Figura 2).

Considera che la lunghezza delle aperture di accelerazione è piccola, in modo che il tempo
La permanenza della particella in loro è molto piccola. In questo modo, il potenziale
Il campo elettrico dell'acceleratore può quindi essere avvicinato a un valore di
costante finché la particella è all'interno di un'apertura di accelerazione.
Figura 2: Potenziali elettrici applicati ai tubi di spostamento in funzione del tempo.

Tabella 1: Valori di quantità fisiche di interesse per il problema
Carga elementare
$1{,}602176\,634\times10^{-19}$ C
Velocità della luce
$299792458$ m/s
Massa della particella alfa
$4{,}001506179127$ u
Nota: l'unità di massa atomica (u) è definita come la dodicesima
parte della massa atomica del
${}^{12}_{6}\text{C}$, cioè $1\,\text{u} = M({}^{12}_{6}\text{C})/12$.

Tabella 2: Valori di massa atomica
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
Nota: l'unità di massa atomica (u) è definita come la dodicesima
parte della massa atomica del
${}^{12}_{6}\text{C}$, cioè $1\,\text{u} = M({}^{12}_{6}\text{C})/12$.

a) Qual è la massa della particella alfa in kg? Qual è la carica elettrica della
particella alfa?
- **B.** Qual è la velocità delle particelle alfa quando vengono iniezionate nel LINAC?
- **C.** Qual è la lunghezza del primo tubo di spostamento del LINAC ($T_1$ in
La figura 1?
d) Quanta energia cinetica ottiene la particella alfa nella prima apertura di
Accelerazione?
e) Qual è la lunghezza del secondo tubo di spostamento del LINAC ($T_2$)
Nella figura 1?
(f) Quanta energia cinetica ottiene la particella alfa nella seconda apertura di
Accelerazione?

Finire la prova di livello 1
Continua la prova per il livello 2

Utilizzando il LINAC

Un processo di interazione tra una particella e un nucleo atomico può dare luogo a un
reazione nucleare. In queste reazioni, un nucleo, chiamato nucleo bianco o nucleo padre
e che designeremo genericamente per X, viene bombardato da un proiettile, la particella a,
che si traduce in un nucleo residuo o nucleo figlio, che chiameremo Y, e un
particella emessa b. La reazione nucleare può essere scritta simbolicamente dal seguente:
modo:

$$a + X \to Y + b$$

In alcune reazioni nucleari la struttura del nucleo residuo può essere diversa da quella del nucleo residuo.
La reazione produce una trasmutazione nucleare.

Una quantità importante in questo tipo di processi è l'energia di reazione $Q$. Questa energia
La differenza di energia in riposo prima e dopo la
reazione. Se la particella proiettata e la particella emessa corrispondono a nuclei atomici, la
L'energia di reazione può essere valutata conoscendo le massime atomiche corrispondenti.
($M$), cioè con la seguente espressione:
$$Q = (M_a + M_X - M_Y - M_b)\, c^2 \quad (1)$$

la velocità della luce è $c$. È importante notare che le masse coinvolte nella
Equation (1) si riferiscono a masse atomiche. Por lo tanto, $M_a$ y $M_b$ se refieren a las masas de
gli atomi i cui nuclei sono le particelle a e b.
Se il valore di $Q$ è positivo, la reazione è denominata esotermica. In questa situazione, $Q$ è la
energia totale rilasciata nella reazione che si trasforma in energia cinetica dei prodotti
fine della reazione (nucleo residuo Y e particella emessa b).
Nel caso in cui $Q$ risulti negativo, la reazione è denominata endotermica. Questo tipo di
la reazione non può verificarsi, a meno che la particella incidente non abbia sufficiente energia
Cinetica. La minima energia cinetica che il proiettile deve avere per questa reazione
che può avere luogo è chiamata energia soglia. A partire dai principi di conservazione si
può derivare la seguente espressione per valutare, in modo approssimativo, l'energia soglia
$E_u$ per una reazione endotermica:
$$E_u = -Q \left(1 + \frac{M_a}{M_X}\right)$$

Consideriamo ora che vogliamo studiare la reazione nucleare seguente:

$$\alpha + {}^{14}_{7}\text{N} \to p + {}^{17}_{8}\text{O} \quad (2)$$

in cui un nucleo di nitrogeno-14 (${}^{14}_{7}\text{N}$) viene bombardato con particelle alfa ($\alpha$) dando
La produzione di nuclei di ossigeno-17 (${}^{17}_{8}\text{O}$) e di protoni (p) è determinata. Considerando il
La capacità di rilevamento delle radiazioni è stata determinata in base alle
se la massa atomica corrispondente è sufficiente, questa reazione può essere scritta come segue:

$$\text{He} \,{}^{4}_{2} + {}^{14}_{7}\text{N} \to {}^{1}_{1}\text{H} + {}^{17}_{8}\text{O}$$

dove abbiamo sostituito nell'espressione (2) la particella $\alpha$ con ${}^{4}_{2}\text{He}$ e il protone p
(nucleo dell'atomo di idrogeno) per ${}^{1}_{1}\text{H}$. È importante notare che questa reazione particolare ha
di interesse storico perché fu la reazione studiata da Ernest Rutherford nel 1919,
che ha portato alla prima trasmutazione nucleare indotta in laboratorio. In quella
Rutherford ha usato particelle alfa emesse da una fonte radioattiva perché
Gli acceleratori di particelle non erano ancora stati sviluppati.

g) La reazione espressa in (2) è esotermica o endotermica?
h) Qual è la soglia di energia $E_u$ per la reazione?
(i) Quanti gradi di accelerazione devono essere costruiti nel precedente LINAC per
- Potremmo studiare questa reazione?
Pagina di risposte Problema 2:
Accelerando fino in fondo con un LINAC!!!

Pts
a)
massa della particella alfa:

carico elettrico della particola

**Topic:** [[Electrostatics]], [[Nuclear & Particle Physics]]
**Metodi:** [[Conservation of Energy (metodo)|Conservation of Energy]], [[Mass-Energy Equivalence (metodo)|Mass-Energy Equivalence]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Unit Conversion (competenza)|Unit Conversion]]
**Objects:** [[Particle Beam (object)|Particle Beam]], [[Nucleus (object)|Nucleus]]
**Fonte:** [Testo (PDF) — p.30](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)

<div class="qlang-split" data-lang="en"></div>

Problem 2: Accelerating to the bottom with a LINAC!!!

A linear radio frequency accelerator, usually called LINAC, is a radio frequency
a device for accelerating electrically charged particles. In this type of accelerator
The particle moves in a straight path, along which it accelerates to
intervals by means of a high frequency electric field.

In a simplified model we can consider that a LINAC for ion acceleration is
consisting of a series of metallic displacement tubes separated by
The acceleration apertures, as shown in Figure 1. All the
The system is inside an evacuated chamber at a high vacuum level.

Figure 1: Scheme of a linear particle accelerator (LINAC) with two stages of
The acceleration.

F is the name of the particle source and PA represents a pre-accelerator that injects
particles at a given energy in the LINAC. Con $T_1$, $T_2$ y $T_3$ se indican los tubos de
The acceleration apertures are $A_1$ and $A_2$. V is a source of voltage
high frequency alternator that powers the LINAC. The line at trajectory indicates the trajectory of the
The accelerated particles. The tubes function as electrodes and are connected to a
High frequency voltage source. The electric potential $V(t)$, which originates the field
Electrical accelerator along the axis within the acceleration openings, variable
The time-symmetrical patterns are shown in Figure 2.

The accelerator is designed so that, when it passes through an opening, the ion is accelerated
for the difference in electrical potential between the two adjacent tubes. El
The ion pass through an acceleration aperture is synchronized with the maximum value that
It can reach the accelerating potential. After acceleration, the ion enters a tube of
The resulting displacement is not electric field action. La
The distance between the centers of two consecutive acceleration openings is designed to
So the ion reaches the next acceleration aperture in synchrony with the maximum
The accelerating potential. This way, the particle is gaining energy gradually at
the speed of the accelerator.

We want to build a LINAC to accelerate alpha particles. We have a
The power supply V, of $20$ MHz frequency and a maximum voltage of $V_0 = 12{,}5$ kV.
Alpha particles are ${}^{4}_{2}\text{He}$ (helium-4) nuclei, i.e. they are composed of two
Protons and two neutrons. In a pre-acceleration stage the kinetic energy of
las partículas alfa a $4{,}806\times10^{-14}$ J. This energy is injected into the first tube of the
desplazamiento del LINAC en el instante de tiempo $t = 0$ (ver Figura 2).

Consider that the length of the acceleration apertures is small, so that the time
The particle's permanence in them is very small. In this way, the potential
The electric field, and therefore the accelerating electric field, can be approximated by a value
constant as long as the particle is inside an acceleration aperture.
Figure 2: Electrical potential applied to the displacement tubes depending on the time.

Table 1: Values of physical interest amounts for the problem
The following shall be added:
$1{,}602176\,634\times10^{-19}$ C
Speed of light
$299792458$ m/s
Mass of alpha particle
$4{,}001506179127$ u
Note: The atomic mass unit (s) is defined as the twelfth
part of the atomic mass of the
${}^{12}_{6}\text{C}$, es decir $1\,\text{u} = M({}^{12}_{6}\text{C})/12$.

Table 2: Atomic mass values
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
Note: The atomic mass unit (s) is defined as the twelfth
part of the atomic mass of the
${}^{12}_{6}\text{C}$, es decir $1\,\text{u} = M({}^{12}_{6}\text{C})/12$.

(a) What is the mass of the alpha particle in kg? What is the electrical charge of the
The alpha particle?
- **B.** What is the speed of alpha particles when injected into LINAC?
- **C.** What should be the length of the first LINAC displacement tube ($T_1$ in
the figure 1)?
(d) How much kinetic energy does the alpha particle gain at the first opening of the
What's the acceleration?
(e) What is the length of the second LINAC displacement tube ($T_2$)
In Figure 1, what is the value of the data?
(f) How much kinetic energy does the alpha particle gain in the second aperture of the
What's the acceleration?

End of test level 1
Continue testing for Level 2

Using the LINAC

A process of interaction between a particle and an atomic nucleus can result in a
nuclear reaction. In these reactions, a nucleus, called a white nucleus or parent nucleus
And we'll designate it generically as X, it's bombarded by a projectile, the particle a,
So we're going to have to do this by giving a residual core or a child core, which we're going to call Y, and a
Particle emitted b. The nuclear reaction can be written symbolically as follows:
method:

$$a + X \to Y + b$$

In some nuclear reactions the structure of the residual nucleus may be different from that of the
The reaction results in a nuclear transmutation.

An important quantity in this type of process is the reaction energy $Q$. This energy
The difference in the resting energy before and after the
The reaction. If the projectile particle and the emitted particle correspond to atomic nuclei, the
The reaction energy can be estimated by the corresponding atomic masses.
($M$), that is to say, by the following expression:
$$Q = (M_a + M_X - M_Y - M_b)\, c^2 \quad (1)$$

where $c$ is the speed of light. It is important to note that the masses involved in the
Equation (1) refers to atomic masses. Therefore, $M_a$ and $M_b$ refer to the masses of
The atoms whose nuclei are the particles a and b.
If the value of $Q$ is positive, the reaction is called exothermic. In this situation, $Q$ is the
Total energy released in the reaction that is converted into kinetic energy of the products
end of the reaction (residual core Y and particulate emitted b).
In the case where $Q$ is negative, the reaction is called endothermic. This kind of
The reaction cannot occur unless the incident particle has enough energy
It's kinetic. The minimum kinetic energy that the projectile must have for this reaction
This is called threshold energy. The conservation principle is that the
The following expression can be derived to approximate the threshold energy
$E_u$ for an endothermic reaction:
$$E_u = -Q \left(1 + \frac{M_a}{M_X}\right)$$

Consider now that we want to study the following nuclear reaction:

$$\alpha + {}^{14}_{7}\text{N} \to p + {}^{17}_{8}\text{O} \quad (2)$$

where a nitrogen-14 core (${}^{14}_{7}\text{N}$) is bombarded with alpha particles ($\alpha$) giving
The resulting oxygen--17 (${}^{17}_{8}\text{O}$) and proton (p) nuclei are produced. Given the
The electron balance, in order to correctly evaluate the reaction energy from the
The reaction can be written as follows:

$$\text{He} \,{}^{4}_{2} + {}^{14}_{7}\text{N} \to {}^{1}_{1}\text{H} + {}^{17}_{8}\text{O}$$

where we have replaced in expression (2) the particle $\alpha$ by ${}^{4}_{2}\text{He}$ and the proton p
(hydrogen atom core) by ${}^{1}_{1}\text{H}$. It should be noted that this particular reaction has
It's of historical interest because it was the reaction studied by Ernest Rutherford in 1919,
This led to the first induced nuclear transmutation in a laboratory. In that
Rutherford used alpha particles emitted from a radioactive source because
Particle accelerators had not yet been developed.

(g) Is the reaction expressed in (2) exothermic or endothermic?
(h) What is the threshold energy $E_u$ for this reaction to occur?
(i) How many acceleration stages should be built in the previous LINAC for
Can we study this reaction?
The answer sheet for problem 2:
Accelerating to the bottom with a LINAC!!!

Pts
a)
mass of the alpha particle:

Electrical charge of the part

**Topic:** [[Electrostatics]], [[Nuclear & Particle Physics]]
**Metodi:** [[Conservation of Energy (metodo)|Conservation of Energy]], [[Mass-Energy Equivalence (metodo)|Mass-Energy Equivalence]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Unit Conversion (competenza)|Unit Conversion]]
**Objects:** [[Particle Beam (object)|Particle Beam]], [[Nucleus (object)|Nucleus]]
**Fonte:** [Testo (PDF) — p.30](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Argent 2020 — Quesito 3" data-tags="kg/prova,paese/Argentina,comp/Argent,cluster/Meccanica,object/black-hole,object/star"></span>

<div class="qlang-switch" data-default="es"></div>



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

$$\frac{T^2}{a^3} = \frac{4\pi^2}{G M} \quad (1)$$

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
$$e = \sqrt{1 - \frac{b^2}{a^2}} \quad (2)$$

con $b$ la longitud del semieje menor. Otro parámetro importante de la órbita es la
distancia $d$ al perihelio, el punto más próximo de la órbita al foco donde se encuentra el
cuerpo masivo,
$$d = a(1 - e) \quad (3)$$

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
$$a_{0A} = a_A - a \quad (4)$$
en términos de $G$, $M$, $r$ y $L$. Esta aceleración relativa se llaman aceleración de
marea.

2c. Tome el límite en que la longitud del cuerpo es mucho menor que la distancia al
centro del agujero negro, $L \ll r$ para determinar claramente el signo de la
aceleración de marea. Indique su sentido.
Puede ser útil la expresión
$$\frac{1}{(1 \pm x)^2} \approx 1 \mp 2x \quad (5)$$
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

$$T_E = \frac{1}{\sqrt{1 - \alpha\,\dfrac{2 M}{r}}}\, T_S \quad (6)$$

donde $M$ es la masa del agujero negro, $r$ es la distancia a la que se encuentra
Schrödinger del centro un agujero negro y $\alpha$ es una constan

**Topic:** [[Astrophysics]], [[Gravitation]], [[Special Relativity]]
**Metodi:** [[Kepler's Laws (metodo)|Kepler's Laws]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Black Hole (object)|Black Hole]], [[Star (object)|Star]]
**Fonte:** [Testo (PDF) — p.41](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)


<div class="qlang-split" data-lang="it"></div>

Problema 3: buchi neri e curvatura dello spazio-tempo

Costanti fisiche
•
Massa solare $M_\text{sol} = 2\times10^{30}$ kg.
•
Costante di gravitazione di Newton $G = 6{,}67\times10^{-11}\ \text{N m}^2\,\text{kg}^{-2}$
•
Costante di Planck $h = 6{,}6\times10^{-34}$ J s
•
Velocità della luce $c = 3\times10^{8}\ \text{m s}^{-1}$
•
Costante di Faraday $F = 96\times10^{3}\ \text{C mol}^{-1}$
•
Permeabilità magnetica del vuoto $\mu_0 = 1{,}26\times10^{-6}\ \text{N A}^{-2}$

I buchi neri sono una delle previsioni
Le cose più affascinanti della teoria della relatività
Generale
de
Einstein.
Minuti,
enormi,
di massa supermassiva, di massa minima, di rotazione, di staticità,
solitari o accompagnati. Tutti diversi, ma
Tutti strani e un po' pazzi. E con una cosa in
comune: distortano lo spazio-tempo in questo modo
che, se qualcosa attraversa il suo orizzonte di eventi,
Allora non può uscire.

In molte situazioni, il campo gravitazionale di un buco nero può essere descritto come
usando la legge di Newton della gravità. Tuttavia, ci sono fenomeni che non si possono
e hanno bisogno di tutta la macchina della teoria della relatività.

In questo problema, studiamo come "vedere" un buco nero e come misurare alcuni dei
i suoi parametri di base. E poi analizzeremo cosa ci sarebbe successo se avessimo attraversato il
orizzonte degli eventi di un buco nero. Infine, studieremo come il buco
il nero curva lo spazio-tempo e come questo influisce sulle nostre idee del tempo.

Parte 1. Sagitario A* al centro della Via Lattea

I buchi neri sono... Negri. Sí. Non possono essere visti direttamente, se li "illuminamo"
con una lanterna, la luce non si riflette nell'orizzonte degli eventi. Entrate e non uscite.
Molti anni fa, nel centro della nostra Via Lattea, è stato rilevato un oggetto molto massiccio e
Compatto chiamato Sagitario A*. Questo oggetto non è stato descritto con i modelli
standard, quindi si pensava che fosse un buco nero (attualmente si pensa che può
ci sono più di un buco nero nella regione centrale della nostra galassia).

Un modo per stimare la massa e la dimensione di Sagitario A* è attraverso lo studio delle
orbite elliptiche delle stelle che le circondano. Considereremo che queste orbite sono
che descrivono con le leggi di Kepler.

In particolare, avvicineremo la terza legge di Kepler in modo che

$$\frac{T^2}{a^3} = \frac{4\pi^2}{G M} \quad (1)$$

dove $T$ è il periodo orbitale, $a$ è la lunghezza della semicilometria maggiore dell'orbita elliptica, $M$ è
La massa del corpo intorno al quale orbita la stella (in questo caso Sagittario A*) e $G$
Costante di gravitazione universale di Newton.
Problema teorico 3 - NIVEL 1

Una delle stelle più vicine a Sagitario A* è la stella S2, il cui movimento orbitale
ha le seguenti caratteristiche:

•
$a = 840\ \text{UA} = 1{,}3\times10^{14}\ \text{m}$ , Lunghezza del semestre maggiore
•
$T = 15$ anni , Periodo orbitale
•
$e = 0{,}989$ , eccentricità

dove UA (unità astronomica) è $1\,\text{UA} = 150\times10^{9}$ m e $e$ è l'escentricità dell'orbita
elliptica
$$e = \sqrt{1 - \frac{b^2}{a^2}} \quad (2)$$

con $b$ la lunghezza del semestre minore. Un altro parametro importante dell'orbita è la
Distanza $d$ al perihelio, il punto più vicino dell'orbita al foco in cui si trova il
corpo massiccio,
$$d = a(1 - e) \quad (3)$$

1a. Sulla base dei dati dell'orbita di S2, stima la massa $M$ di Sagittario A*.

1b. Indicare quanto misura il semiegio minore $b$ e la distanza dal perihelio $d$ in orbita
de S2.

1c. Considerando che S2 può essere pensato come un punto quando si muove
in orbita, e non colpisce Sagittario A*, dà un'altitudine superiore per il radio
di Sagitario A*. Cioè, quale valore non può superare il raggio di Sagitario A*?
Nota: Un quota superiore per un quantitativo $f$ è un valore superiore a $f$.

1d. Usando la stima precedente calcola la densità che corrisponde a
Sagitario A*.

Parte 2 O sarà troppo tardi?

Abbiamo deciso di fare un viaggio nello spazio. Sappiamo che c'è un buco nero vicino, ma...
Non sappiamo quanto vicino. All'improvviso sentiamo cose strane nel corpo... Apriremo?
Attraverso l'orizzonte degli eventi? Possiamo scappare? - Sarà troppo tardi?
Problema teorico 3 - NIVEL 1
Consideriamo una persona nel campo gravitazionale di un buco nero con i piedi
puntando al centro del buco nero, come si vede nella figura seguente.

Supponendo che il campo gravitazionale del buco nero possa essere descritto dalla legge di
La gravitazione di Newton, abbiamo scoperto che i diversi punti del corpo sentono diversi
Le forze si trovano a diverse distanze dal buco nero. Anche se
Tutti i punti del corpo si accelerano verso il buco nero, i piedi sono attirati
più forte della testa. Quindi, la persona sente che la testa e i piedi sono
si tirano in direzioni opposte, e il corpo tende a allungarsi. Questo fenomeno è noto
come "spaghettizzazione" perché il corpo si allunga e si affianca come uno spaghetti.
Per semplificare l'analisi, modelliamo il corpo umano da un segmento di lunghezza $L$
che si trova lungo una linea che passa attraverso il centro del buco nero. Supponiamo
che il centro del corpo sia a $r$ distanza dal centro del buco nero. Vedi Figura.

2a. Date un'espressione per l'accelerazione gravitazionale $a$ che sente il punto centrale
La velocità di accelerazione gravitatoria $a_A$ che si sente il punto estremo del corpo
corpo più vicino al buco nero indicato nella figura come A. Scrivi
in termini di costante gravitazionale universale di Newton $G$, la massa del
agujero negro $M$, $r$ y $L$.

2b. Date un'espressione per l'accelerazione che il punto A sente rispetto alla
che sente il punto medio della stessa. Cioè, scrivere
$$a_{0A} = a_A - a \quad (4)$$
in termini di $G$, $M$, $r$ e $L$. Questa accelerazione relativa è chiamata accelerazione di
- La marea.

2c. Prendi il limite in cui la lunghezza del corpo è molto inferiore alla distanza al
centro del buco nero, $L \ll r$ per determinare chiaramente il segno di
accelerazione della marea. Indica il suo senso.
La parola può essere utile.
$$\frac{1}{(1 \pm x)^2} \approx 1 \mp 2x \quad (5)$$
validità quando $x \ll 1$.

Per capire l'effetto delle maree che i buchi neri producono sul corpo,
Considereremo due buchi neri ben diversi:
Problema teorico 3 - NIVEL 1
• AN1: buco nero supermassiccio
- massa: $M_1 = 2\times10^{39}$ kg (miliardi di masse solari).
- radiosità di orizzonte di eventi $R_1 = 3\times10^{12}$ m (30 miliardi di euro)
chilometri).

• AN2: buco nero stellare
- massa: $M_2 = 2\times10^{31}$ kg (10 masse solari).
- radiosità dell'orizzonte degli eventi $R_2 = 3\times10^{4}$ m (30 chilometri).

2d. Supponendo che quando l'accelerazione della marea è uguale a $10\ \frac{\text{N}}{\text{kg}}$, una persona
Se si sente a disagio, calcola la distanza tra il centro di AN1 e quello di AN2
- Questo. Supponiamo che la lunghezza della persona sia $L = 2$ m.

Parte 3. Dilatazione gravitazionale del tempo

Nella teoria della relatività generale, la gravità si manifesta attraverso la curvatura
dello spazio e del tempo. Ciò ha in particolare a che fare con il tempo in modo diverso in
regioni con campi gravitazionali di diversa intensità, ad esempio vicino a un buco
nero o lontano da lui. Più ci si avvicina ad un oggetto molto massiccio, più lentamente corre
Il tempo. Questo effetto è derivato dalla costante velocità della luce e viene usato quotidianamente.
per esempio nel Sistema di Posizione Globale (GPS).
Supponiamo che a una distanza $r$ dal centro un buco nero, ci sia Schrödinger con un
gatto (vivo e fuori cassa). Il gatto ha polpe. Il gatto si graffi due volte. A una
La distanza molto, molto grande da loro e dal buco nero è Einstein. Einstein è così
lontano dal buco nero che praticamente non sente il suo campo gravitazionale. Tanto
Schrödinger come Einstein misurare il tempo che passa tra le due volte che il gatto è
- Scratta. Il tempo che Schrödinger trova è $T_S$ e il tempo che Einstein trova è
$T_E$. Quando si confrontano le due misurazioni si trovano

$$T_E = \frac{1}{\sqrt{1 - \alpha\,\dfrac{2 M}{r}}}\, T_S \quad (6)$$

dove $M$ è la massa del buco nero, $r$ è la distanza che si trova
Schrödinger del centro un buco nero e $\alpha$ è una costante

**Topic:** [[Astrophysics]], [[Gravitation]], [[Special Relativity]]
**Metodi:** [[Kepler's Laws (metodo)|Kepler's Laws]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Black Hole (object)|Black Hole]], [[Star (object)|Star]]
**Fonte:** [Testo (PDF) — p.41](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)

<div class="qlang-split" data-lang="en"></div>

Problem 3: Black Holes and the Curvature of Space-Time

The following is a list of the physical constants:
•
The mass of the sun is $M_\text{sol} = 2\times10^{30}$ kg.
•
Constante de la gravitación de Newton $G = 6{,}67\times10^{-11}\ \text{N m}^2\,\text{kg}^{-2}$
•
Constante de Planck $h = 6{,}6\times10^{-34}$ J s
•
The speed of light $c = 3\times10^{8}\ \text{m s}^{-1}$
•
Constante de Faraday $F = 96\times10^{3}\ \text{C mol}^{-1}$
•
Magnetic permeability of the vacuum $\mu_0 = 1{,}26\times10^{-6}\ \text{N A}^{-2}$

The Black Holes are one of the predictions
The most fascinating of all the relativity theories
General
de
Einstein. What is it?
For a few minutes,
huge,
The following definitions shall apply:
alone or accompanied. They're all different, but
All weird and a little crazy. And with one thing in
common: they distort space-time in such a way
That if something goes through your event horizon,
Then you can't get out.

In many situations, the gravitational field of a black hole can be described as
using Newton's law of gravitation. However, there are phenomena which cannot be
They need all the machinery of the theory of relativity.

In this problem we will study how to "see" a black hole and how to measure some of the
the basic parameters. We will also examine what would happen to us if we crossed the
event horizon of a black hole. We'll finally study how the hole
Black curves space-time and how this affects our ideas of time.

The following information is provided: Sagittarius A* at the center of the Milky Way

The black holes are... - The black people. Sí. They can't be seen directly, if we "light them up"
With a flashlight, the light is not reflected in the event horizon. He's in and out.
Several years ago, at the center of our Milky Way, a very massive object was detected and
It's a compact one called Sagittarius A*. This object could not be described with the models
Standard, so it was thought to be a black hole (currently believed to be
There's more than one black hole in the central region of our galaxy.

One way to estimate the mass and size of Sagittarius A* is through the study of the
elliptical orbits of the stars around them. We will consider these orbits to be
They describe it with Kepler's laws.

In particular, we'll approximate Kepler's third law in the form

$$\frac{T^2}{a^3} = \frac{4\pi^2}{G M} \quad (1)$$

where $T$ is the orbital period, $a$ is the length of the major semicircle of the elliptical orbit, $M$ is
The mass of the body around which the star orbits (in this case, Sagittarius A*) and $G$
Newton's universal gravitational constant is the same as the Newton's constant.
Theoretical problem 3 - Level 1

One of the nearest stars to Sagittarius A* is the star S2, whose orbital motion is
has the following characteristics:

•
$a = 840\ \text{UA} = 1{,}3\times10^{14}\ \text{m}$ , Longest half-life
•
$T = 15$ años , Período orbital
•
$e = 0{,}989$ , Excentricidad

where UA (astronomical unit) is $1\,\text{UA} = 150\times10^{9}$ m and $e$ is the eccentricity of the orbit
Other
$$e = \sqrt{1 - \frac{b^2}{a^2}} \quad (2)$$

with $b$ the length of the minor semis. Another important parameter of the orbit is the
The distance $d$ to perihelion, the point closest to the orbit to the focus where the
mass body,
$$d = a(1 - e) \quad (3)$$

1a. A partir de los datos de la órbita de S2 estime la masa $M$ de Sagitario A*.

1b. Indicate the size of the minor semicircle $b$ and the distance to perihelion $d$ in orbit
de S2.

1c. Considering that S2 can be thought of as a point when it moves
In its orbit, and not colliding with Sagittarius A*, give a higher radius for the
de Sagitario A*. I mean, what value can't exceed the radius of Sagittarius A*?
Note: A higher quota for a quantity $f$ is a value that is greater than $f$.

1d. Using the above estimate, calculate the density that would correspond to
Sagitario A*.

The following information is provided: Or will it be too late?

We decided to go on a space trip. We know there's a black hole nearby, but
We don't know how close. Suddenly we feel strange things in the body... We'll open up
Through the event horizon? Can we escape? Is it too late?
Theoretical problem 3 - Level 1
Let's consider a person in the gravitational field of a black hole with feet.
pointing to the center of the black hole, as shown in the figure below.

Assuming that the gravitational field of the black hole can be described by the law of
Newton's gravitational pull, we find that different points in the body feel differently.
forces, as they are at different distances from the black hole. Although
All the points on the body are accelerated towards the black hole, the feet are attracted.
stronger than the head. So the person feels that the head and feet are
Tossed in opposite directions, and the body tends to stretch. This phenomenon is known
It's called spaghetti because the body stretches and tastes like spaghetti.
To simplify the analysis, we model the human body by a length segment $L$
It's located along a line that goes through the center of the black hole. Let's say
The centre of the body is $r$ from the centre of the black hole. See Figure.

2a. Give an expression for the gravitational acceleration $a$ that feels the center point
The body and gravitational acceleration $a_A$ that feels the extreme point of the
body closest to the black hole shown in Figure A. Write them down
In terms of the Newton universal gravitational constant $G$, the mass of the
agujero negro $M$, $r$ y $L$.

2b. Give an expression for the acceleration that point A feels with respect to the
who feels the middle of it. I mean, write
$$a_{0A} = a_A - a \quad (4)$$
en términos de $G$, $M$, $r$ y $L$. This relative acceleration is called the acceleration of
The tide.

2c. Take the limit where the body length is much shorter than the distance to the
the centre of the black hole, $L \ll r$ to clearly determine the sign of the
The tidal acceleration. Point out your point.
The expression may be useful
$$\frac{1}{(1 \pm x)^2} \approx 1 \mp 2x \quad (5)$$
válida cuando $x \ll 1$.

To understand the tidal effect that black holes produce on the body,
Let 's consider two very different black holes:
Theoretical problem 3 - Level 1
• AN1: Supermassive black hole
- mass: $M_1 = 2\times10^{39}$ kg (one billion solar masses).
- the radius of the event horizon $R_1 = 3\times10^{12}$ m (30 billion m)
miles .

• AN2: Star black hole
- mass: $M_2 = 2\times10^{31}$ kg (10 solar masses).
- the radius of the event horizon $R_2 = 3\times10^{4}$ m (30 kilometres).

2d. Assuming that when the tidal acceleration is $10\ \frac{\text{N}}{\text{kg}}$, a person
If you feel uncomfortable, calculate how far from the center of AN1 and AN2 it occurs.
This one. Suppose the length of the person is $L = 2$ m.

The following is the list of the products: Gravitational time dilation

In general relativity, gravity is manifested through curvature.
of space and time. This makes time run differently in particular.
regions with different gravitational fields, for example near a hole
black or away from it. The closer you are to a very massive object, the slower you run.
The weather. This effect is the result of the constant of the speed of light and is used daily.
For example, in the Global Positioning System (GPS).
Let's say that at a distance $r$ from the center of a black hole, there is Schrödinger with a
cat (living and out of the box). The cat has fleas. The cat scratches twice. One to one
Very, very, very large distance from them and the black hole is Einstein. Einstein is so
away from the black hole that practically doesn't feel its gravitational field. So much
Schrödinger and Einstein measure the time between the two times that the cat is
scratch it. The time Schrödinger finds is $T_S$ and the time Einstein finds is
$T_E$. When you compare the two measurements, you find

$$T_E = \frac{1}{\sqrt{1 - \alpha\,\dfrac{2 M}{r}}}\, T_S \quad (6)$$

where $M$ is the mass of the black hole, $r$ is the distance from which it is located
Schrödinger of the center a black hole and $\alpha$ is a constant

**Topic:** [[Astrophysics]], [[Gravitation]], [[Special Relativity]]
**Metodi:** [[Kepler's Laws (metodo)|Kepler's Laws]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Black Hole (object)|Black Hole]], [[Star (object)|Star]]
**Fonte:** [Testo (PDF) — p.41](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)



<span class="atom-split" id="q04" data-atom="q04" data-title="Argent 2020 — Quesito 4" data-tags="kg/prova,paese/Argentina,comp/Argent,cluster/Meccanica,topic/newtonian-mechanics,argomento/meccanica,difficolta/3,multidisciplina/mono"></span>

<div class="qlang-switch" data-default="es"></div>



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

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.65](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)


<div class="qlang-split" data-lang="it"></div>

Il problema 1
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

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.65](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)

<div class="qlang-split" data-lang="en"></div>

The problem is 1
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

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.65](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)



<span class="atom-split" id="q05" data-atom="q05" data-title="Argent 2020 — Quesito 5" data-tags="kg/prova,paese/Argentina,comp/Argent,cluster/Meccanica,topic/newtonian-mechanics,argomento/meccanica,difficolta/3,multidisciplina/mono"></span>

<div class="qlang-switch" data-default="es"></div>



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

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.65](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)


<div class="qlang-split" data-lang="it"></div>

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

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.65](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)

<div class="qlang-split" data-lang="en"></div>

Problem 2
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

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.65](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)



<span class="atom-split" id="q06" data-atom="q06" data-title="Argent 2020 — Quesito 6" data-tags="kg/prova,paese/Argentina,comp/Argent,cluster/Meccanica,topic/newtonian-mechanics,argomento/meccanica,difficolta/3,multidisciplina/mono"></span>

<div class="qlang-switch" data-default="es"></div>



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

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.66](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)


<div class="qlang-split" data-lang="it"></div>

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
1,5 (dare qualcosa se si usa a o b)
1.c)
1,5 (dare qualcosa se si usa a o b)
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

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.66](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)

<div class="qlang-split" data-lang="en"></div>

Problem 3 is that
Problem 3 is that
Level 1
Level 2
1.a)
1
1.a)
1
1.b)
0,5 (0,25+0,25)
1.b)
0,5 (0,25+0,25)
1.c)
1.5 (give something if you use a or b)
1.c)
1.5 (give something if you use a or b)
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

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.66](https://drive.google.com/file/d/1pfQ0ZUmFLvRqD2yn1tMXdmobeizKuNTU/view)
