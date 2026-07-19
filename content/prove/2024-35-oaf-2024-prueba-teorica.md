---
title: Spagna 2024
tipo: prova
tags:
  - kg/prova
  - anno/2024
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="2024-35-oaf-2024-prueba-teorica"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2024 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/cart,object/spring"></span>

<div class="qlang-switch" data-default="es"></div>



P1. Rizando el rizo.
Un carrito de masa $m$ se apoya contra un muelle
de constante $k$ comprimido una distancia $x$. Se suelta el
muelle de forma que el carrito sale disparado hacia la
derecha por un rail sin rozamiento, como muestra la
figura 1. En su trayectoria se encuentra con un bucle
circular de radio $R$ por el que asciende. Considera que
las dimensiones del carrito son despreciables frente a $R$.
a)
Calcula, en función de $k$, $m$, y $R$, qué distancia $x_A$
se debe comprimir el muelle para que el carrito se
quede parado en el punto A.
Para una distancia $x < x_A$ el carrito se parará antes de A, en un punto determinado por el ángulo $\theta < 90^\circ$.
b) Obtén la expresión, en función de $x$, del ángulo $\theta$ para el que el carrito se detiene.
Se desea que el carrito describa una vuelta completa al bucle, pasando por el punto B.
c)
Dibuja las fuerzas que actúan sobre el carrito cuando pasa por el punto B.
d) ¿Cuál es la velocidad mínima $v_B$ que debe tener el carrito en el punto B para que describa una vuelta
completa?
e)
¿Cuál es la distancia mínima $x_B$ que debe comprimirse el muelle para que el carrito llegue al punto B.
Para una distancia $x$ tal que $x_A < x < x_B$ el carrito superará el punto A, pero se separará del rail antes de
llegar al punto B.
f)
Obtén la expresión, en función de $x$, del ángulo $\theta_S$ a partir del cual el carrito se separa del rail.

Figura 1

P1. Solución
a)
Aplicando la conservación de energía entre el punto en que el carrito apoya contra el muelle
comprimido y el punto A, situado a una altura $R$, donde se para ($v_A = 0$),

$$\frac{1}{2}kx_A^2 = mgR,$$

(1)
de donde obtenemos

$$x_A = \sqrt{\frac{2mgR}{k}}.$$

(2)
b) Como muestra la figura 2, la altura de un punto de la pista en
función de $\theta$ viene dado por $R(1-\cos\theta)$.
Aplicando la conservación de energía entre el punto en que el
carrito apoya contra el muelle comprimido y el punto del bucle en
el que el carrito se para ($v = 0$),

$$\frac{1}{2}kx^2 = mgR(1-\cos\theta),$$

(3)
de donde

$$\cos\theta = 1 - \frac{kx^2}{2mgR}.$$

(4)
c) En el punto B sobre el carrito actuará el peso, $mg$, y la normal de la superficie de la
pista, $N_B$, tal como muestra la figura 3.

d) Para que llegue al punto B no es suficiente con que lo alcance con $v_B = 0$. Como en el
bucle describe un movimiento circular, en el punto B se cumple que

$$mg + N_B = m\frac{v_B^2}{R},$$

(5)
Como el peso no se anula, el caso límite ($v_B$ mínima) correspondería a $N_B = 0$, de modo que

$$v_B = \sqrt{gR}.$$

(6)
e) Aplicando la conservación de energía entre el punto en que el carrito apoya contra el muelle comprimido
y el punto B, situado a una altura $2R$,

$$\frac{1}{2}kx_B^2 = mg2R + \frac{1}{2}mv_B^2.$$

(7)
Sustituyendo el valor $v_B$ de la ecuación (6),

$$\frac{1}{2}kx_B^2 = mg2R + \frac{1}{2}mgR,$$

(8)
de donde podemos despejar $x_B$,

$$x_B = \sqrt{\frac{5mgR}{k}}.$$

(9)
f) La figura 4 muestra las fuerzas que actúan sobre el carrito una vez superado el
punto A. La componente del peso en dirección radial es $mg\cos(180-\theta)$, así que

$$mg\cos(180-\theta) + N = m\frac{v^2}{R}.$$

(10)
El carrito deja de tener contacto con el bucle cuando $N = 0$, de modo que

$$v = \sqrt{gR\cos(180-\theta_S)}.$$

(11)
Aplicando la conservación de energía entre el punto en que el carrito apoya contra el
muelle comprimido y el punto del bucle en el que se separa,

$$\frac{1}{2}kx^2 = mgR\left[1+\cos(180-\theta_S)\right] + \frac{1}{2}mv^2.$$
(12)
Sustituyendo el valor de $v$ obtenido en la ecuación (11) y utilizando la relación
$\cos(180-\theta_S) = -\cos\theta_S$ se
obtiene

$$\cos\theta_S = \frac{1}{3}\left(2 - \frac{kx^2}{mgR}\right).$$

(13)

Figura 2

Figura 3

Figura 4

<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p2_f1.png]]
*carrello su molla e pista circolare*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p3_f2.png]]
*geometria pista circolare angolo theta*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p3_f3.png]]
*forze sul carrello in cima al cerchio*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p4_f4.png]]
*forze sul carrello angolo theta*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]], [[Rotational Dynamics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Conservation of Energy (metodo)|Conservation of Energy]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Cart (object)|Cart]], [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1eNgr-xjyYDdb9Xk2r04cIKobNQ14mBXm/view)


<div class="qlang-split" data-lang="it"></div>

P1. Rizzando il riso.
Un carrello di massa $m$ si appoggia a un molo
di costante $k$ compressa a distanza $x$. Si rilascia il
Sulla presa del molo, il carro si spara verso la
a destra per un rack senza macchia, come mostra la
Figura 1. Nel suo percorso si trova un ciclo
circolo di radio $R$ per il quale sale. Considera che
le dimensioni del carrello sono scarsa rispetto a $R$.
a)
Calcola, in base a $k$, $m$ e $R$, quale distanza $x_A$
il molo deve essere compresso in modo che il carrello sia
rimane fermo al punto A.
Per una distanza $x < x_A$ il carrello si ferma prima di A, a un punto determinato dall'angolo $\theta < 90^\circ$.
b) Ottieni l'espressione, in funzione di $x$, dell'angolo $\theta$ per il quale il carrello si ferma.
Si desidera che il carrello descriva un giro completo del ciclo, passando per il punto B.
c)
Disegna le forze che agiscono sul carrello quando passa attraverso il punto B.
d) Qual è la velocità minima $v_B$ che deve avere il carrello al punto B per descrivere un giro
- Completamente?
e)
Qual è la distanza minima $x_B$ da comprimere per il carrello fino al punto B?
Per una distanza $x$ tale che $x_A < x < x_B$ il carrello supererà il punto A, ma si separerà dal rail prima di
arrivare al punto B.
f)
Ottenere l'espressione, in funzione di $x$, dell'angolo $\theta_S$ da cui il carrello si separa dal rail.

Figura 1

P1. Soluzione
a)
Applicando la conservazione dell'energia tra il punto in cui il carrello appoggia il molo
compressa e punto A, situato ad un'altezza $R$, dove si ferma ($v_A = 0$),

$$\frac{1}{2}kx_A^2 = mgR,$$

(1)
Da dove provieniamo

$$x_A = \sqrt{\frac{2mgR}{k}}.$$

(2)
b) Come mostrato in figura 2, l'altezza di un punto della pista in
La funzione di $\theta$ viene data da $R(1-\cos\theta)$.
Applicando la conservazione dell'energia tra il punto in cui il
Carro appoggia contro il molo compresso e il punto del loop in
il luogo in cui si ferma il carrello ($v = 0$),

$$\frac{1}{2}kx^2 = mgR(1-\cos\theta),$$

(3)
Da dove

$$\cos\theta = 1 - \frac{kx^2}{2mgR}.$$

(4)
c) Al punto B sul carrello si agiranno il peso, $mg$, e la normalità della superficie del carrello.
pista, $N_B$, come mostrato in figura 3.

d) Per raggiungere il punto B non basta raggiungerlo con $v_B = 0$. Come nel
il loop descrive un movimento circolare, nel punto B si ottengono che

$$mg + N_B = m\frac{v_B^2}{R},$$

(5)
Poiché il peso non viene annullato, il caso limite ($v_B$ minimo) corrisponde a $N_B = 0$, in modo che

$$v_B = \sqrt{gR}.$$

(6)
e) Applicando la conservazione dell'energia tra il punto in cui il carrello si appoggia contro il molo compresso
e il punto B, situato ad un'altezza $2R$,

$$\frac{1}{2}kx_B^2 = mg2R + \frac{1}{2}mv_B^2.$$

(7)
sostituendo il valore $v_B$ dell'equazione (6),

$$\frac{1}{2}kx_B^2 = mg2R + \frac{1}{2}mgR,$$

(8)
da cui possiamo scaricare $x_B$,

$$x_B = \sqrt{\frac{5mgR}{k}}.$$

(9)
f) La figura 4 mostra le forze che agiscono sul carrello dopo aver superato il
punto A. Il componente di peso in direzione radial è $mg\cos(180-\theta)$, quindi

$$mg\cos(180-\theta) + N = m\frac{v^2}{R}.$$

(10)
Il carrello smette di entrare in contatto con il ciclo quando $N = 0$, in modo che

$$v = \sqrt{gR\cos(180-\theta_S)}.$$

(11)
Applicando la conservazione dell'energia tra il punto in cui il carrello appoggia il
il molo compresso e il punto del ciclo in cui si separa,

$$\frac{1}{2}kx^2 = mgR\left[1+\cos(180-\theta_S)\right] + \frac{1}{2}mv^2.$$
(12)
Sostituendo il valore di $v$ ottenuto nell'equazione (11) e utilizzando il rapporto
$\cos(180-\theta_S) = -\cos\theta_S$ se
si ottiene

$$\cos\theta_S = \frac{1}{3}\left(2 - \frac{kx^2}{mgR}\right).$$

(13)

Figura 2

Figura 3

Figura 4

<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p2_f1.png]]
*carro la sua molla e pista circolare*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p3_f2.png]]
*geometria pista circolare angolo theta*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p3_f3.png]]
*forze sul carrello in cima al cerchio*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p4_f4.png]]
*forze sul carrello angolo theta*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]], [[Rotational Dynamics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Conservation of Energy (metodo)|Conservation of Energy]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Cart (object)|Cart]], [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1eNgr-xjyYDdb9Xk2r04cIKobNQ14mBXm/view)

<div class="qlang-split" data-lang="en"></div>

P1. Riding the rice.
A mass cart $m$ rests against a dock
de constante $k$ comprimido una distancia $x$. It's released.
The wheelbarrow is so high that the carriage is fired towards the
straight through a non-razor rail, as shown in the
The following table shows the following: In its trajectory it encounters a loop
a radius $R$ circle through which it rises. It considers that
the dimensions of the cart are negligible in relation to $R$.
a)
Calculate, based on $k$, $m$, and $R$, what distance $x_A$ is
The dock must be compressed so that the cart is
Stand still at point A.
For a distance $x < x_A$ the cart shall be stopped before A at a point determined by the angle $\theta < 90^\circ$.
(b) Get the expression, according to $x$, of the angle $\theta$ for which the cart stops.
The cart is to be described as completing a loop turn by passing through point B.
c)
Draw the forces acting on the cart as it passes through point B.
d) What is the minimum speed $v_B$ that the cart must have at point B to describe a turn
complete?
e)
What is the minimum distance $x_B$ to be compressed from the dock for the cart to reach point B?
For a distance $x$ such that $x_A < x < x_B$ the cart shall pass point A but shall separate from the rail before
to get to point B.
f)
Get the expression, according to $x$, of the angle $\theta_S$ from which the cart is separated from the rail.

Figure 1

P1. Solution
a)
Applying energy conservation between the point where the cart rests against the dock
tablet and point A, at a height $R$, where it stops ($v_A = 0$),

$$\frac{1}{2}kx_A^2 = mgR,$$

(1)
Where do we get

$$x_A = \sqrt{\frac{2mgR}{k}}.$$

(2)
(b) As shown in Figure 2, the height of a track point on the
The function of $\theta$ is given by $R(1-\cos\theta)$.
Energy conservation between the point at which the
The cart rests against the compressed dock and the loop point in the
the carriage where the carriage is stopped ($v = 0$),

$$\frac{1}{2}kx^2 = mgR(1-\cos\theta),$$

(3)
Where did you come from?

$$\cos\theta = 1 - \frac{kx^2}{2mgR}.$$

(4)
(c) In point B above the cart the weight $mg$ and the normal surface area of the cart shall be used.
track, $N_B$, as shown in Figure 3.

(d) It is not sufficient to reach point B with $v_B = 0$. As in the
loop describes a circular motion, in point B it is fulfilled that

$$mg + N_B = m\frac{v_B^2}{R},$$

(5)
Since the weight is not cancelled, the limit case ($v_B$ minimum) would be $N_B = 0$, so that

$$v_B = \sqrt{gR}.$$

(6)
(e) Applying energy conservation between the point where the cart rests against the compressed dock
and point B, at a height $2R$,

$$\frac{1}{2}kx_B^2 = mg2R + \frac{1}{2}mv_B^2.$$

(7)
Substituting the value $v_B$ of equation (6),

$$\frac{1}{2}kx_B^2 = mg2R + \frac{1}{2}mgR,$$

(8)
where we can clear $x_B$,

$$x_B = \sqrt{\frac{5mgR}{k}}.$$

(9)
(f) Figure 4 shows the forces acting on the cart after the
The following points shall be added: The radial directional weight component is $mg\cos(180-\theta)$, so

$$mg\cos(180-\theta) + N = m\frac{v^2}{R}.$$

(10)
The cart ceases to contact the loop when $N = 0$, so that

$$v = \sqrt{gR\cos(180-\theta_S)}.$$

(11)
Applying energy conservation between the point at which the cart rests against the
the compressed dock and the point of the loop at which it is separated,

$$\frac{1}{2}kx^2 = mgR\left[1+\cos(180-\theta_S)\right] + \frac{1}{2}mv^2.$$
(12)
Substituting the value of $v$ obtained in equation (11) and using the ratio
$\cos(180-\theta_S) = -\cos\theta_S$ se
You get

$$\cos\theta_S = \frac{1}{3}\left(2 - \frac{kx^2}{mgR}\right).$$

(13)

Figure 2

Figure 3

Figure 4

<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p2_f1.png]]
*carriage its spring and circular track*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p3_f2.png]]
*geometria pista circolare angolo theta*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p3_f3.png]]
*force on the top of the circle carriage*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p4_f4.png]]
*force on the angular carriage theta*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]], [[Rotational Dynamics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Conservation of Energy (metodo)|Conservation of Energy]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Cart (object)|Cart]], [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1eNgr-xjyYDdb9Xk2r04cIKobNQ14mBXm/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Spagna 2024 — Quesito 2" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/photon,object/mirror"></span>

<div class="qlang-switch" data-default="es"></div>



P2. Viaje a Próxima b.
Alfa Centauri es un sistema estelar compuesto por tres estrellas, la más pequeña de las cuales, Próxima
Centauri, es una enana roja y la estrella más próxima al Sol, a 4,25 años-luz. Próxima Centauri tiene al menos
un planeta, Próxima b, descubierto en 2016, y que despertó mucho interés al ser de tamaño similar a la Tierra
y estar en la zona habitable de la estrella, en la que puede existir agua en estado líquido.
Con la tecnología actual se tardaría del orden de 30000 años en alcanzar el
sistema estelar de Alfa Centauri. Sin embargo, una propuesta reciente denominada
Breakthrough Starshot1, que lideraron Zuckerberg y Hawking, propuso conseguirlo
en 20 años con naves espaciales miniaturizadas de unos gramos de masa impulsadas
mediante velas de luz. Todavía hay que desarrollar esta tecnología, pero parece un
hito accesible en unos años de investigación.
Considera que la masa de la nave espacial es de $1{,}5$ g y que, partiendo del reposo, alcanza una velocidad
estable de crucero $v_0$, que mantiene durante los 20 años de su viaje.
a)
Calcula la velocidad $v_0$, suponiendo que se alcanza de forma inmediata.
Realmente la velocidad $v_0$ no se adquiere de forma inmediata, sino que hay que acelerar la nave durante
un determinado tiempo $\Delta t$, usando una fuerza constante $F$, que actúa sobre la vela.
b) Expresa la fuerza $F$ necesaria para alcanzar $v_0$, en función de $\Delta t$.
Las velas de luz utilizarán la presión de la radiación de un haz láser emitido desde la Tierra para generar
el impulso necesario sobre la vela, mucho mayor que el de la radiación solar. Para ver cómo puede la luz
empujar una vela tienes que pensar que la luz está compuesta por partículas, los fotones, que tienen energía, $E$
y momento lineal, $p$, aunque no tengan masa, siendo la relación entre ellos $p = E/c$, donde $c$ es la velocidad de
la luz. Considera que la vela se comporta como un espejo perfecto (equivalente a una pared rígida) y que los
fotones inciden perpendicularmente a la vela.
c)
Obtén la expresión de la fuerza realizada sobre la vela por un gran número de fotones, $N$, durante el
tiempo, $\Delta t$, en el que el sistema de aceleración, es decir el láser, esté activo.
Supón que la vela tiene unas dimensiones de $4\times4\ \text{m}^2$, y que el sistema láser la ilumina con una intensidad
de $6{,}25\ \text{GW/m}^2$.
d) Calcula la potencia de la luz que incide sobre la vela.
e)
¿Durante cuánto tiempo $\Delta t$ tendrá que estar encendido el sistema láser para conseguir impulsar la nave
hasta Próxima b como se desea?
Las velas solares se realizan con materiales muy delgados y resistentes, como por ejemplo el polímero
denominado Kapton, ampliamente utilizado en aplicaciones espaciales, que es estable hasta $400\ ^\circ\text{C}$, tiene una
densidad de $1{,}42\ \text{g/cm}^3$, y un calor específico de $1090\ \text{J/kg·K}$. El Kapton debe llevar un recubrimiento de
multicapas que le confiera gran reflectancia, aunque una pequeña parte de la energía (alrededor de $10^{-11}$ veces
la radiación incidente) será absorbida, calentando el material. Considera que la lámina tiene un espesor de
$0{,}05$ micras.
f)
Calcula el incremento de temperatura de la vela durante el tiempo que está iluminada por el láser.
Dato: velocidad de la luz en vacío $c = 3\times10^5$ km/s.

1 https://breakthroughinitiatives.org/initiative/3

P2. Solución
a)
La distancia entre Próxima b y la Tierra es de 4,25 años luz, y el tiempo del viaje desde la Tierra debe ser
de 20 años, de modo que la velocidad con la que se mueve la nave (supuesta constante) es

$$v_0 = \frac{4{,}25}{20}c \quad\to\quad v_0 = 0{,}21c.$$

(1)
b) En el movimiento uniformemente acelerado partiendo del reposo podemos obtener la aceleración a partir
del cambio de velocidad en un determinado intervalo temporal,

$$a = \frac{\Delta v}{\Delta t} = \frac{v_0 - 0}{\Delta t} = \frac{0{,}21c}{\Delta t},$$

(2)
de modo que la fuerza expresada en unidades del SI quedará como

$$F = m\cdot a = 1{,}5\times10^{-3}\,\frac{0{,}21\times3\times10^8}{\Delta t} \quad\to\quad F = \frac{94500}{\Delta t}.$$
(3)
c)
Podemos calcular la fuerza a partir del momento lineal transferido por el fotón a la vela-espejo,
$N$, $\Delta p$,

$$F = \frac{\Delta p}{\Delta t}.$$

(4)
Como cada fotón incide con momento $p$ y se refleja con el mismo momento en sentido contrario, el
momento transferido por el fotón es $2p$, de modo que podemos calcular la fuerza media producida por el
choque de $N$ fotones como

$$F = \frac{N\cdot 2p}{\Delta t},$$

(5)
y, teniendo en cuenta la relación $p = E/c$, se obtiene

$$F = \frac{2NE}{c\Delta t}.$$

(6)
Este cálculo no sería correcto si solo hubiera una partícula, pero al haber $N$ partículas que chocan contra
la vela durante el tiempo $\Delta t$ en el que está activo el láser, podemos calcular la fuerza promedio sobre la
vela durante todo ese tiempo, de forma similar a como se hace en el estudio de la presión de las moléculas
de un gas sobre la pared del recipiente que lo contiene.
d) La potencia recogida por la vela se puede calcular como el producto de la intensidad de la luz multiplicado
por la superficie de la vela,

$$P = I\cdot A = 6{,}25\times4\times4\ \text{GW} \quad\to\quad P = 100\ \text{GW}.$$
(7)
e)
A partir de la potencia que incide sobre la vela, podemos obtener la energía recibida en el tiempo $\Delta t$ que
el láser está activo por el choque de los $N$ fotones,

$$NE = P\Delta t,$$

(8)
de modo que la fuerza sobre la vela calculada en (6) se puede expresar como

$$F = \frac{2P}{c} = \frac{2\times10^{11}}{3\times10^8} = 667\ \text{N}.$$

(9)

Por lo tanto, el tiempo $\Delta t$ que debe estar encendido el láser se obtiene a partir de la ecuación (3),

$$\Delta t = \frac{94500}{F} = \frac{94500}{667} \quad\to\quad \Delta t = 142\ \text{s}.$$

(10)
f)
La variación de temperatura de la lámina de Kapton es proporcional al calor, $Q$, absorbido por la misma,

$$\Delta T = \frac{Q}{mc_e},$$

(11)
donde $m$ es la masa de la vela y $c_e$ el calor específico del material. La masa de la vela se puede obtener a
partir de la densidad $\rho$ del Kapton, del espesor $d$ y de la superficie $A$,

$$m = \rho A d.$$

(12)
El calor absorbido por el material será

$$Q = 10^{-11}P\Delta t.$$

(13)
Introduciendo (12) y (13) en (11) obtenemos

$$\Delta T = \frac{10^{-11}P\Delta t}{\rho A d c_e} = \frac{10^{-11}\times10^{11}\times142}{1{,}42\times10^3\times4\times4\times0{,}05\times10^{-6}\times1090},$$

$$\Delta T = 115\ \text{K} = 115\ ^\circ\text{C}.$$

(11)

Actualmente, la tecnología disponible no permite la producción de láminas de Kapton tan delgadas ni la
creación de recubrimientos con una reflectancia tan alta como los indicados en el ejercicio. Estos
requisitos, junto con otros desafíos inherentes a la misión Breakthrough Starshot, plantean un formidable
reto científico y tecnológico. Este desafío será abordado en las próximas décadas, y es probable que
algunos de los participantes en esta Olimpiada de Física contribuyan a los avances en este campo.

**Topic:** [[Conservation of Momentum]], [[Newtonian Mechanics]], [[Thermodynamics]]
**Metodi:** [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Photon (object)|Photon]], [[Mirror (object)|Mirror]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1eNgr-xjyYDdb9Xk2r04cIKobNQ14mBXm/view)


<div class="qlang-split" data-lang="it"></div>

P2. Viaggio verso Proxima b.
Alfa Centauri è un sistema stellare composto da tre stelle, la più piccola delle quali, Próxima
Centauri, è un nano rosso e la stella più vicina al Sole, a 4,25 anni luce. Il prossimo Centauri ha almeno
un pianeta, Proxima b, scoperto nel 2016, che ha suscitato grande interesse per essere di dimensioni simili alla Terra.
e di essere nella zona abitabile della stella, dove può esistere acqua liquida.
Con la tecnologia attuale ci vorrebbero circa 30.000 anni per raggiungere il
Sistema stellare di Alfa Centauri. Tuttavia, una recente proposta denominata
Breakthrough Starshot1, guidato da Zuckerberg e Hawking, ha proposto di farlo.
in 20 anni con miniaturizzate navi spaziali di un paio di grammi di massa a impulso
con candele di luce. Questa tecnologia deve ancora essere sviluppata, ma sembra un
Un traguardo accessibile in pochi anni di ricerca.
Considera che la massa della nave spaziale è di $1{,}5$ g e che, partendo dal riposo, raggiunge una velocità di
Stabilità di crociera $v_0$, che si mantiene per i 20 anni di viaggio.
a)
Calcola la velocità $v_0$, supponendo che si raggiunga immediatamente.
La velocità $v_0$ non viene acquisita immediatamente, ma si deve accelerare la nave durante il
un determinato tempo $\Delta t$, usando una forza costante $F$, che agisce sulla vela.
b) Esprime la forza $F$ necessaria per raggiungere $v_0$, in funzione di $\Delta t$.
Le candele di luce utilizzeranno la pressione di radiazioni di un raggio laser emesso dalla Terra per generare
La forza necessaria sulla vela, molto più grande di quella del raggi solare. Per vedere come la luce può
empujar una vela tienes que pensar que la luz está compuesta por partículas, los fotones, que tienen energía, $E$
e momento lineare, $p$, anche se non hanno massa, essendo il rapporto tra loro $p = E/c$, dove $c$ è la velocità di
la luce. Il suo parere è che la vela si comporta come uno specchio perfetto (equivalente a un muro rigido) e che le
I fotoni incidono perpendicularmente alla vela.
c)
Ottieni l'espressione della forza esercitata sulla vela da un gran numero di fotoni, $N$, durante il
tempo, $\Delta t$, in cui il sistema di accelerazione, cioè il laser, è attivo.
Supponiamo che la candela abbia dimensioni $4\times4\ \text{m}^2$, e che il sistema laser la illumini con un'intensità
de $6{,}25\ \text{GW/m}^2$.
d) Calcola la potenza della luce che colpisce la vela.
e)
¿Durante cuánto tiempo $\Delta t$ tendrá que estar encendido el sistema láser para conseguir impulsar la nave
- fino a Proxima B come desiderate?
Le candele solari sono realizzate con materiali molto sottili e resistenti, come ad esempio il polimero
Il nome di Kapton, ampiamente utilizzato in applicazioni spaziali, che è stabile fino a $400\ ^\circ\text{C}$, ha un
di $1{,}42\ \text{g/cm}^3$ e di $1090\ \text{J/kg·K}$ specifico di calore. Il Kapton deve portare un rivestimento di
un'ampia copertura che conferisce una grande riflessione, anche se una piccola parte dell'energia (circa $10^{-11}$ volte
La radiazione incidente) sarà assorbita, riscaldando il materiale. Considera che la lamina ha un spessore di
$0{,}05$ microfoni.
f)
Calcola l'aumento della temperatura della candela durante il tempo che è illuminata dal laser.
Data: velocità della luce in vuoto $c = 3\times10^5$ km/s.

1 https://breakthroughinitiatives.org/initiative/3

P2. Soluzione
a)
La distanza tra Proxima b e la Terra è di 4,25 anni luce, e il tempo di viaggio dalla Terra deve essere
20 anni, in modo che la velocità con cui la nave si muove (supposizione costante) sia

$$v_0 = \frac{4{,}25}{20}c \quad\to\quad v_0 = 0{,}21c.$$

(1)
b) Nel movimento uniformemente accelerato partendo dal riposo possiamo ottenere l'accelerazione partendo dal
il cambio di velocità in un determinato intervallo di tempo,

$$a = \frac{\Delta v}{\Delta t} = \frac{v_0 - 0}{\Delta t} = \frac{0{,}21c}{\Delta t},$$

(2)
la forza espressa in unità SI rimane così:

$$F = m\cdot a = 1{,}5\times10^{-3}\,\frac{0{,}21\times3\times10^8}{\Delta t} \quad\to\quad F = \frac{94500}{\Delta t}.$$
(3)
c)
Possiamo calcolare la forza dal momento lineare trasferito dal fotone alla vela-specchio,
$N$, $\Delta p$,

$$F = \frac{\Delta p}{\Delta t}.$$

(4)
Poiché ogni fotone incide con il momento $p$ e si riflette con il stesso momento in senso contrario, il
Il momento trasferito dal fotone è $2p$, quindi possiamo calcolare la forza media prodotta dal fotone
colpi di $N$ fotoni come

$$F = \frac{N\cdot 2p}{\Delta t},$$

(5)
e, tenendo conto del rapporto $p = E/c$, si ottiene

$$F = \frac{2NE}{c\Delta t}.$$

(6)
Questo calcolo non sarebbe corretto se ci fosse solo una particella, ma se ci sono $N$ particelle che si scontrano contro
la vela durante el tiempo $\Delta t$ en el que está activo el láser, podemos calcular la fuerza promedio sobre la
E' un'ottica di ricerca che si svolge in questo modo.
di un gas sul muro del recipiente che lo contiene.
d) La potenza raccolta dalla vela può essere calcolata come il prodotto dell'intensità della luce moltiplicata
per la superficie della vela,

$$P = I\cdot A = 6{,}25\times4\times4\ \text{GW} \quad\to\quad P = 100\ \text{GW}.$$
(7)
e)
Dalla potenza che colpisce la vela, possiamo ottenere l'energia ricevuta nel tempo $\Delta t$ che
il laser è attivato dal colpo dei fotoni $N$,

$$NE = P\Delta t,$$

(8)
La forza sul velo calcolata in (6) può essere espressa come:

$$F = \frac{2P}{c} = \frac{2\times10^{11}}{3\times10^8} = 667\ \text{N}.$$

(9)

Quindi il tempo $\Delta t$ che il laser deve essere acceso si ottiene dall'equazione (3),

$$\Delta t = \frac{94500}{F} = \frac{94500}{667} \quad\to\quad \Delta t = 142\ \text{s}.$$

(10)
f)
La variazione di temperatura della lamina di Kapton è proporzionale al calore, $Q$, assorbito dalla stessa,

$$\Delta T = \frac{Q}{mc_e},$$

(11)
dove $m$ è la massa della vela e $c_e$ il calore specifico del materiale. La massa della candela può essere ottenuta a
a partire dalla densità $\rho$ del Kapton, dal spessore $d$ e dalla superficie $A$,

$$m = \rho A d.$$

(12)
Il calore assorbito dal materiale sarà

$$Q = 10^{-11}P\Delta t.$$

(13)
Introducendo (12) e (13) in (11) otteniamo

$$\Delta T = \frac{10^{-11}P\Delta t}{\rho A d c_e} = \frac{10^{-11}\times10^{11}\times142}{1{,}42\times10^3\times4\times4\times0{,}05\times10^{-6}\times1090},$$

$$\Delta T = 115\ \text{K} = 115\ ^\circ\text{C}.$$

(11)

La tecnologia attualmente disponibile non consente di produrre schede di Kapton così sottili né di
la creazione di rivestimenti con una riflessione alta rispetto a quella indicata nell'esercizio. Questi
Le esigenze, insieme ad altre sfide inerenti alla missione Breakthrough Starshot, presentano un'enorme
Sfida scientifica e tecnologica. Questa sfida sarà affrontata nei prossimi decenni, e è probabile che
Alcuni dei partecipanti a questa Olimpiada di Fisica contribuiscono ai progressi in questo campo.

**Topic:** [[Conservation of Momentum]], [[Newtonian Mechanics]], [[Thermodynamics]]
**Metodi:** [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Photon (object)|Photon]], [[Mirror (object)|Mirror]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1eNgr-xjyYDdb9Xk2r04cIKobNQ14mBXm/view)

<div class="qlang-split" data-lang="en"></div>

P2. Travel to next b.
Alpha Centauri is a star system composed of three stars, the smallest of which, Próxima
Centauri, it's a red dwarf and the closest star to the Sun, 4.25 light-years away. Next Centauri has at least
A planet, Proxima b, discovered in 2016, and that sparked much interest because it's Earth-sized.
And to be in the habitable zone of the star, where liquid water can exist.
With current technology it would take the order of 30,000 years to reach the
The star system of Alpha Centauri. However, a recent proposal called
Breakthrough Starshot1, led by Zuckerberg and Hawking, proposed to achieve it
In 20 years with miniaturized spacecraft of a few grams of pushed mass
by means of light candles. This technology is still to be developed, but it seems to be a
A milestone accessible in a few years of research.
It considers that the mass of the spacecraft is $1{,}5$ g and that, starting from the rest, it reaches a speed of
The cruise ship's stable $v_0$, which it maintains for 20 years of its journey.
a)
Calculate the speed $v_0$, assuming that it is reached immediately.
The speed $v_0$ is not acquired immediately, but the ship must be accelerated during the
a certain time $\Delta t$, using a constant force $F$, acting on the sail.
(b) Expresses the force $F$ required to reach $v_0$, according to $\Delta t$.
The light candles will use the radiation pressure of a laser beam emitted from Earth to generate
The necessary momentum over the candle, much greater than that of solar radiation. To see how light can
empujar una vela tienes que pensar que la luz está compuesta por partículas, los fotones, que tienen energía, $E$
and linear momentum, $p$, although they have no mass, the ratio between them being $p = E/c$, where $c$ is the velocity of
The light. It considers that the candle behaves like a perfect mirror (equivalent to a rigid wall) and that the
photons affect the candle perpendicularly.
c)
Get the expression of the force applied to the sail by a large number of photons, $N$, during the
time, $\Delta t$, in which the acceleration system, i.e. the laser, is active.
Suppose the candle has dimensions of $4\times4\ \text{m}^2$, and the laser system illuminates it with an intensity
de $6{,}25\ \text{GW/m}^2$.
(d) Calculate the intensity of the light that hits the candle.
e)
¿Durante cuánto tiempo $\Delta t$ tendrá que estar encendido el sistema láser para conseguir impulsar la nave
to next b as desired?
Solar candles are made of very thin and durable materials, such as polymer
The first is the capton, which is widely used in space applications and is stable to $400\ ^\circ\text{C}$, has a
densidad de $1{,}42\ \text{g/cm}^3$, y un calor específico de $1090\ \text{J/kg·K}$. The Kapton must carry a coating of
Multilayer that gives it great reflectivity, although a small part of the energy (about $10^{-11}$ times
The resulting radiation is absorbed by heating the material. Consider that the sheet has a thickness of
$0{,}05$ micras.
f)
Calculate the temperature increase of the candle during the time it is illuminated by the laser.
Date: speed of light in vacuum $c = 3\times10^5$ km/s.

The Commission has also adopted a number of measures to combat fraud.

P2. Solution
a)
The distance between Proxima b and Earth is 4.25 light years, and the time of travel from Earth must be
20 years, so the speed at which the ship moves (constant assumption) is

$$v_0 = \frac{4{,}25}{20}c \quad\to\quad v_0 = 0{,}21c.$$

(1)
(b) In uniformly accelerated motion starting from rest we can obtain acceleration from
the change of speed at a given time interval,

$$a = \frac{\Delta v}{\Delta t} = \frac{v_0 - 0}{\Delta t} = \frac{0{,}21c}{\Delta t},$$

(2)
So the force expressed in SI units is as

$$F = m\cdot a = 1{,}5\times10^{-3}\,\frac{0{,}21\times3\times10^8}{\Delta t} \quad\to\quad F = \frac{94500}{\Delta t}.$$
(3)
c)
We can calculate the force from the linear momentum transferred by the photon to the sail mirror,
$N$, $\Delta p$,

$$F = \frac{\Delta p}{\Delta t}.$$

(4)
Como cada fotón incide con momento $p$ y se refleja con el mismo momento en sentido contrario, el
The momentum transferred by the photon is $2p$, so we can calculate the mean force produced by the photon
choque de $N$ fotones como

$$F = \frac{N\cdot 2p}{\Delta t},$$

(5)
and, taking into account the $p = E/c$ ratio,

$$F = \frac{2NE}{c\Delta t}.$$

(6)
This calculation would not be correct if there were only one particle, but since there are $N$ particles that collide with
The candle during the time $\Delta t$ in which the laser is active, we can calculate the average force on the
And then you're going to look at it all the time, in a similar way to the way you do in the study of molecular pressure.
of a gas on the wall of the container containing it.
(d) The power collected by the candle can be calculated as the product of the light intensity multiplied by the
by the surface of the candle,

$$P = I\cdot A = 6{,}25\times4\times4\ \text{GW} \quad\to\quad P = 100\ \text{GW}.$$
(7)
e)
From the power that affects the candle, we can get the energy received in time $\Delta t$ that
The laser is activated by the impact of $N$ photons,

$$NE = P\Delta t,$$

(8)
so that the force on the sail calculated in (6) can be expressed as

$$F = \frac{2P}{c} = \frac{2\times10^{11}}{3\times10^8} = 667\ \text{N}.$$

(9)

Therefore, the $\Delta t$ time the laser must be on is obtained from equation (3),

$$\Delta t = \frac{94500}{F} = \frac{94500}{667} \quad\to\quad \Delta t = 142\ \text{s}.$$

(10)
f)
The temperature variation of Kapton sheet is proportional to the heat, $Q$, absorbed by it,

$$\Delta T = \frac{Q}{mc_e},$$

(11)
where $m$ is the mass of the candle and $c_e$ the specific heat of the material. The mass of the candle can be obtained from
from the density $\rho$ of Kapton, the thickness $d$ and the surface $A$,

$$m = \rho A d.$$

(12)
The heat absorbed by the material shall be

$$Q = 10^{-11}P\Delta t.$$

(13)
By entering (12) and (13) in (11) we get

$$\Delta T = \frac{10^{-11}P\Delta t}{\rho A d c_e} = \frac{10^{-11}\times10^{11}\times142}{1{,}42\times10^3\times4\times4\times0{,}05\times10^{-6}\times1090},$$

$$\Delta T = 115\ \text{K} = 115\ ^\circ\text{C}.$$

(11)

The technology available today does not allow the production of such thin Kapton sheets or the
the creation of coatings with a reflectivity as high as those indicated in the financial year. These
The requirements, along with other challenges inherent in the Breakthrough Starshot mission, pose a formidable
The European Union is a world leader in the field of science and technology. This challenge will be addressed in the coming decades, and it is likely that the
Some of the participants in this Physics Olympiad contribute to advances in this field.

**Topic:** [[Conservation of Momentum]], [[Newtonian Mechanics]], [[Thermodynamics]]
**Metodi:** [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Photon (object)|Photon]], [[Mirror (object)|Mirror]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1eNgr-xjyYDdb9Xk2r04cIKobNQ14mBXm/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Spagna 2024 — Quesito 3" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/cylinder,object/membrane,object/point-charge"></span>

<div class="qlang-switch" data-default="es"></div>



P3. Modelo físico de una neurona.
El pasado 25 de octubre de 2023, se inauguró en el edificio Paraninfo de la Universidad de Zaragoza un
nuevo espacio expositivo permanente dedicado a la figura de Santiago Ramón y Cajal, Premio Nobel de
Medicina en 1906, en reconocimiento a su trabajo sobre la estructura del sistema nervioso. La neurona
constituye el elemento básico del sistema nervioso (Fig. 1). A través del axón se transmite el impulso
nervioso desde el cuerpo celular hasta los terminales del axón.
Podemos considerar el axón como un cilindro rodeado por la
membrana celular y relleno por el axoplasma, que es una disolución de
diversos iones en agua, entre los que destacan Na+ y K+. El exterior de la
membrana del axón está rodeado también de una disolución con diferentes
concentraciones de los mismos iones. En la membrana hay un conjunto de
canales que permiten o bloquean el paso de iones y unas proteínas
denominadas bombas sodio-potasio, que extraen sodio e introducen potasio,
a costa del consumo de energía metabólica.
Cuando la neurona está en reposo, la pared interna de la membrana
celular está cargada negativamente y la pared externa está cargada
positivamente, con una diferencia de potencial electrostático
$$V_0 = -70\ \text{mV}$$
respecto del exterior de la membrana. En esta situación de reposo, la
concentración de iones de Na+ y K+ en el interior y el exterior de la
membrana es la que se muestra en la Tabla 1.
Además del efecto sobre los iones del potencial electrostático, las
diferencias de concentración de cada ion entre el interior y el exterior tienden
a igualarse a través de la membrana. Este efecto puede expresarse mediante un potencial $V_X$, al que se ve
sometido el ion X, denominado potencial de Nerst, que viene determinado por

$$V_X = \frac{RT}{eN_A}\ln\frac{[X]_\text{ext}}{[X]_\text{int}},$$

(1)
con $R$ la constante de los gases ideales, $T$ la temperatura, $e$ la unidad de carga elemental, $N_A$ el número de
Avogadro, y $[X]_\text{int}$ y $[X]_\text{ext}$ las concentraciones del ion X en el interior y exterior de la membrana celular,
respectivamente.
El "duelo" entre la interacción eléctrica y el gradiente de concentración de ambos iones entre el interior
y el exterior celular resultan en una diferencia de potencial $V_X^\text{eff}$, denominada potencial efectivo, diferente
para cada ion X, dada por

$$V_X^\text{eff} = V_X - V_0.$$

(2)
a)
Con las concentraciones de los iones Na+ y K+ mostradas en la Tabla 1, calcula el potencial efectivo
para cada ion. ¿Qué efecto producirá este potencial efectivo en cada ion a ambos lados de la membrana?
Considera que un ion K+ pasa del interior al exterior de la membrana sin experimentar ningún tipo de
rozamiento, partiendo del reposo desde un punto en el eje del axón.
b) Determina la velocidad del ion K+ al abandonar la membrana celular.
c)
¿Cuánto tiempo tarda el ion K+ en recorrer el radio del axón?

| Ion | Concentración $(\text{mol/m}^3)$ Interior | Concentración $(\text{mol/m}^3)$ Exterior |
| --- | --- | --- |
| Na+ | 15 | 145 |
| K+ | 150 | 5 |

Tabla 1

Figura 1

Cuando llega un estímulo nervioso a un punto del axón (que tomamos como $x = 0$), la diferencia de
potencial de la membrana en ese punto aumenta hasta $V_p = +40$ mV. Esta diferencia de potencial disminuye
con la distancia a lo largo del axón hasta alcanzar el potencial de reposo $V_0$ debido a dos efectos: la corriente
que se pierde a través de la membrana debida a canales iónicos permanentemente abiertos, caracterizada por
la llamada conductancia por unidad de área, $g_m \approx 0{,}01\ \text{k}\Omega^{-1}\text{cm}^{-2}$; y una resistencia a lo largo del axón debida
al axoplasma, $R_L$, que es directamente proporcional a la resistividad del líquido intracelular, $\rho_a$, a la longitud
del axón, $L_a$, e inversamente proporcional a la sección transversal del axón, $S_a$.
d) Escribe la expresión de la resistencia eléctrica $R_L$ en función de $\rho_a$, $L_a$ y del radio del axón. Calcula su
valor numérico.
Es posible expresar la diferencia de potencial a lo largo del axón en función de λ como

$$V(x) = (V_p - V_0)e^{-x/\lambda},$$

(3)
donde $\lambda = 1/\sqrt{g_m R_L}$ se denomina "parámetro espacial", e indica qué distancia recorre una corriente
eléctrica para un estímulo débil antes de que la mayor parte de ella se pierda a través de la membrana.
e)
Obtén el valor del parámetro espacial $\lambda$.
f)
Calcula el trabajo realizado sobre un ion Na+ para trasladarlo desde $x = 0$ hasta una distancia
$x_m = 0{,}2$ cm.
g)
Obtén la expresión en función de $x$ de la fuerza eléctrica que actúa sobre una carga $q$ a lo largo del axón
a partir de la derivada (gradiente) del potencial.
Ayuda: Sea $f(x) = a\cdot e^{b\cdot x}$ con $a$ y $b$ constantes, entonces $\dfrac{df(x)}{dx} = a\cdot b\cdot e^{b\cdot x}$.
h) Calcula el valor de la fuerza que actúa en la dirección del eje del axón sobre ion Na+ situado en la
posición $x = 0$.

Datos:
•
Constante de los gases ideales: $R = 8{,}31\ \text{J mol}^{-1}\text{K}^{-1}$
•
Temperatura del cuerpo humano: $T_\text{cuerpo} = 37\ ^\circ\text{C}$.
•
Unidad de carga elemental: $1e = 1{,}602\times10^{-19}$ C.
•
Número de Avogadro: $N_A = 6{,}022\times10^{23}\ \text{mol}^{-1}$.
•
Diámetro del axón: $D_A = 10\ \mu\text{m}$.
•
Masas atómicas: $m(\text{Na}) = 23\,\text{u}$, $m(\text{K}) = 39\,\text{u}$.
•
Unidad de masa atómica: $1\,\text{u} = 1{,}66\times10^{-27}$ kg.
•
Resistividad del líquido intracelular: $\rho_a = 60\ \Omega$ cm.
•
Longitud del axón: $L_a = 5$ mm.

P3. Solución
a)
Con la expresión (1), calculamos el potencial de Nerst para cada ion:

$$V_{K^+} = \frac{RT}{eN_A}\ln\frac{[K^+]_\text{ext}}{[K^+]_\text{int}} = \frac{8{,}31\times310{,}15}{1{,}602\times10^{-19}\times6{,}022\times10^{23}}\ln\left(\frac{5}{150}\right) = -91\ \text{mV},$$
(4)

$$V_{Na^+} = \frac{RT}{eN_A}\ln\frac{[Na^+]_\text{ext}}{[Na^+]_\text{int}} = \frac{8{,}31\times310{,}15}{1{,}602\times10^{-19}\times6{,}022\times10^{23}}\ln\left(\frac{145}{15}\right) = 61\ \text{mV}.$$
(5)
Sustituyendo el potencial de Nerst en la expresión (2) y teniendo en cuenta que el potencial en reposo es
$V_0 = -70\ \text{mV}$, obtenemos el potencial efectivo para cada ion:

$$V_{K^+}^\text{eff} = 21\ \text{mV},$$

(6)

$$V_{Na^+}^\text{eff} = -131\ \text{mV}.$$

(7)
Como el potencial efectivo para el K+ es positivo, los iones K+ experimentarán una fuerza que tiende a
sacarlos de la célula. Para el Na+ la situación es la contraria, al ser negativo el potencial efectivo, los
iones de Na+ tienden a entrar en la célula. Cuando se abran los canales iónicos, se producirá un flujo
hacia afuera de iones de K+ y un flujo hacia dentro de iones Na+.
b) En el interior de la célula, el ion de K+ está en reposo y, por tanto, sólo tiene energía potencial,
$E_{p,\text{int}} = qV_{K^+}^\text{eff}$. Sin embargo, en el exterior de la célula el potencial es nulo, por lo que toda la energía
potencial inicial se habrá convertido en energía cinética:

$$E_{p,\text{int}} = E_{c,\text{ext}} \quad\to\quad qV_{K^+}^\text{eff} = \frac{1}{2}mv^2,$$

(8)

$$v = \sqrt{\frac{2qV_{K^+}^\text{eff}}{m}} = \sqrt{\frac{2\times1{,}602\times10^{-19}\times0{,}021}{39\times1{,}66\times10^{-27}}} \quad\to\quad v = 322{,}4\ \text{m/s}.$$
(9)
c)
Al estar sometido a la fuerza eléctrica, el ion de K+ describe un MRUA en el que la velocidad y la
distancia recorrida (el radio $r_a$ del axón) se pueden expresar de la siguiente manera:

$$\left.\begin{aligned} v &= at \\ r_a &= \tfrac{1}{2}at^2 \end{aligned}\right\} \to t = \frac{2r_a}{v} = \frac{2\times5\times10^{-6}}{322{,}4} \quad\to\quad t = 31\ \text{ns}.$$
(10)
d) Podemos expresar la resistencia eléctrica como:

$$R_L = \rho_a\frac{L_a}{S_a}.$$

(11)
Considerando que el axón es un cilindro, la sección transversal en función del radio del axón vendrá
dada por $S_a = \pi r_a^2$. Por tanto

$$R_L = \rho_a\frac{L_a}{\pi r_a^2}.$$

(12)

Sustituyendo en (12) los valores de los datos del problema,

$$R_L = 3{,}8\times10^7\ \Omega = 38\ \text{M}\Omega.$$

(13)
e)
Sustituyendo en la expresión $\lambda = 1/\sqrt{g_m R_L}$ el valor de $R_L$ y $g_m$ se obtiene

$$\lambda = 0{,}05\ \text{cm}.$$

(14)
f)
El trabajo realizado sobre un ión Na+ para trasladarlo desde $x = 0$ hasta $x_m = 0{,}2$ cm vendrá dado por

$$W = -q[V(x_m)-V(0)] = q(V_p - V_0)(1-e^{-x_m/\lambda}) \quad\to\quad W = 1{,}73\times10^{-20}\ \text{J}.$$

(15)
g)
Obtenemos la expresión de la fuerza eléctrica a partir de la derivada del potencial,

$$F(x) = qE(x) = -q\frac{dV(x)}{dx} \quad\to\quad F(x) = \frac{q(V_p - V_0)}{\lambda}e^{-x/\lambda}.$$

(16)
h) Sustituyendo $x = 0$ en la expresión (16),

$$F(x = 0) = \frac{q(V_p - V_0)}{\lambda} \quad\to\quad F(x = 0) = 3{,}52\times10^{-17}\ \text{N}.$$

(14)

<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p8_f5.png]]
*illustrazione anatomia neurone*
<!--fig:end-->

**Topic:** [[Electrostatics]], [[Circuits]], [[Newtonian Mechanics]]
**Metodi:** [[Electric Potential Method (metodo)|Electric Potential Method]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Differential Equations (metodo)|Differential Equations]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Membrane (object)|Membrane]], [[Point Charge (object)|Point Charge]]
**Fonte:** [Testo (PDF) — p.8](https://drive.google.com/file/d/1eNgr-xjyYDdb9Xk2r04cIKobNQ14mBXm/view)


<div class="qlang-split" data-lang="it"></div>

P3. Modello fisico di un neurone.
Il 25 ottobre 2023, è stato inaugurato nell'edificio Paraninfo dell'Università di Zaragoza un
nuovo spazio espositivo permanente dedicato alla figura di Santiago Ramón y Cajal, Premio Nobel di
Medicina nel 1906, in riconoscimento al suo lavoro sulla struttura del sistema nervoso. Il neurone
La struttura nervosa è costituita da un elemento di base del sistema nervoso (Fig. 1). Attraverso l'asse viene trasmesso l'impulso
Nervo dal corpo cellulare fino ai terminali dell'asse.
Possiamo considerare l'asse come un cilindro circondato dalla
membrana cellulare e riempimento da axoplasma, che è una soluzione di
diversi ioni in acqua, tra cui Na+ e K+. L'esterno della
La membrana dell'asse è circondata anche da una dissoluzione con diverse
concentrazioni degli stessi ioni. Nella membrana c'è un insieme di
Canali che consentono o bloccano il passaggio di ioni e proteine
i quali sono chiamati pompe sodio-potassio, che estraggono il sodio e introducono il potassio,
a scapito del consumo di energia metabolica.
Quando il neurone è a riposo, la parete interna della membrana
Il cellulare è caricato negativamente e la parete esterna è carica
positivamente, con una differenza di potenziale elettrostatico
$$V_0 = -70\ \text{mV}$$
rispetto all'esterno della membrana. In questo momento di riposo, la
concentrazione di ioni Na+ e K+ all'interno e all'esterno della
la membrana è quella che viene mostrata nella tabella 1.
In aggiunta all'effetto sugli ioni del potenziale elettrostatico, le
Le differenze di concentrazione di ogni ione tra l'interno e l'esterno tendono a
per essere uguali attraverso la membrana. Questo effetto può essere espresso da un potenziale $V_X$, che si vede
Il potenziale di Nerst, determinato da

$$V_X = \frac{RT}{eN_A}\ln\frac{[X]_\text{ext}}{[X]_\text{int}},$$

(1)
con $R$ la costante dei gas ideali, $T$ la temperatura, $e$ l'unità di carico elementare, $N_A$ il numero di
Avogadro, e $[X]_\text{int}$ e $[X]_\text{ext}$ le concentrazioni di ion X all'interno e all'esterno della membrana cellulare,
rispettivamente.
Il "duello" tra l'interazione elettrica e il gradiente di concentrazione di entrambi gli ioni tra l'interno
e l'esterno cellulare risultano in una differenza di potenziale $V_X^\text{eff}$, denominata potenziale effettivo, diversa
per ogni ion X, dato da

$$V_X^\text{eff} = V_X - V_0.$$

(2)
a)
Con le concentrazioni di ioni Na+ e K+ mostrate in Tabella 1, si calcola il potenziale effettivo
per ogni ione. Che effetto produrrà questo potenziale efficace su ogni ione su entrambi i lati della membrana?
Considera che un ion K+ passa dall'interno all'esterno della membrana senza sperimentare alcun tipo di
Raggiustamento, partendo dal riposo da un punto sull'asse dell'asse.
b) Determina la velocità dell'ion K+ quando esce dalla membrana cellulare.
c)
Quanto tempo ci vuole per il K+ per attraversare il raggio dell'axo?

| Ion | Concentración $(\text{mol/m}^3)$ Interior | Concentración $(\text{mol/m}^3)$ Exterior |
| --- | --- | --- |
| Na+ | 15 | 145 |
| K+ | 150 | 5 |

Tabella 1

Figura 1

Quando uno stimolo nervoso arriva ad un punto dell'axo (che prendiamo come $x = 0$), la differenza di
la potenziale della membrana a quel punto aumenta fino a $V_p = +40$ mV. Questa differenza di potenziale diminuisce
con la distanza lungo l'asse fino a raggiungere il potenziale di riposo $V_0$ a causa di due effetti:
che si perde attraverso la membrana a causa di canali ionici permanentemente aperti, caratterizzati da
la cosiddetta conduzione per unità di area, $g_m \approx 0{,}01\ \text{k}\Omega^{-1}\text{cm}^{-2}$; e una resistenza lungo l'asse dovuta
all'axoplasma, $R_L$, che è direttamente proporzionale alla resistenza del liquido intracellulare, $\rho_a$, alla lunghezza
di un'asse, $L_a$, e inversamente proporzionale alla sezione trasversale dell'asse, $S_a$.
d) Scrive l'espressione della resistenza elettrica $R_L$ in funzione di $\rho_a$, $L_a$ e del raggio dell'asse. Calcola il suo
valore numerico.
È possibile esprimere la differenza di potenziale lungo l'asse in funzione di λ come

$$V(x) = (V_p - V_0)e^{-x/\lambda},$$

(3)
dove $\lambda = 1/\sqrt{g_m R_L}$ è denominato "parametro spaziale", e indica la distanza percorsa da un corrente
la sua energia elettrica per un debole stimolo prima che la maggior parte di esso sia persa attraverso la membrana.
e)
Ottenere il valore del parametro spaziale $\lambda$.
f)
Calcola il lavoro svolto su un ion Na+ per spostarlo da $x = 0$ a una distanza
$x_m = 0{,}2$ cm.
g)
Ottenere l'espressione in funzione di $x$ della forza elettrica che agisce su un carico $q$ lungo l'asse
a partire dal derivato (gradiente) del potenziale.
Aiuto: Se $f(x) = a\cdot e^{b\cdot x}$ con $a$ e $b$ costanti, allora $\dfrac{df(x)}{dx} = a\cdot b\cdot e^{b\cdot x}$.
h) Calcola il valore della forza che agisce nella direzione dell'asse dell'asse sull'ion Na+ situato nella
posizione $x = 0$.

Dati:
•
Costante dei gas ideali: $R = 8{,}31\ \text{J mol}^{-1}\text{K}^{-1}$
•
Temperatura del corpo umano: $T_\text{cuerpo} = 37\ ^\circ\text{C}$.
•
Unità di carico elementare: $1e = 1{,}602\times10^{-19}$ C.
•
Numero di Avogadro: $N_A = 6{,}022\times10^{23}\ \text{mol}^{-1}$.
•
Diametro dell'asse: $D_A = 10\ \mu\text{m}$.
•
Masse atomiche: $m(\text{Na}) = 23\,\text{u}$, $m(\text{K}) = 39\,\text{u}$.
•
Unità di massa atomica: $1\,\text{u} = 1{,}66\times10^{-27}$ kg.
•
Resistenza del liquido intracellulare: $\rho_a = 60\ \Omega$ cm.
•
Longitud del axón: $L_a = 5$ mm.

P3. Soluzione
a)
Con l'espressione (1), calcoliamo il potenziale di Nerst per ogni ione:

$$V_{K^+} = \frac{RT}{eN_A}\ln\frac{[K^+]_\text{ext}}{[K^+]_\text{int}} = \frac{8{,}31\times310{,}15}{1{,}602\times10^{-19}\times6{,}022\times10^{23}}\ln\left(\frac{5}{150}\right) = -91\ \text{mV},$$
(4)

$$V_{Na^+} = \frac{RT}{eN_A}\ln\frac{[Na^+]_\text{ext}}{[Na^+]_\text{int}} = \frac{8{,}31\times310{,}15}{1{,}602\times10^{-19}\times6{,}022\times10^{23}}\ln\left(\frac{145}{15}\right) = 61\ \text{mV}.$$
(5)
Sostituendo il potenziale di Nerst nell'espressione (2) e considerando che il potenziale a riposo è
$V_0 = -70\ \text{mV}$, otteniamo il potenziale effettivo per ogni ion:

$$V_{K^+}^\text{eff} = 21\ \text{mV},$$

(6)

$$V_{Na^+}^\text{eff} = -131\ \text{mV}.$$

(7)
Poiché il potenziale effettivo per il K+ è positivo, gli ioni K+ sperimenteranno una forza che tende a
- E' il mio primo lavoro. Per il Na+ la situazione è l'opposto, poiché il potenziale effettivo è negativo, le
Ioni di Na+ tendono a entrare nella cellula. Quando si aprono i canali ionici, si produce un flusso
all'esterno di ioni K+ e un flusso verso l'interno di ioni Na+.
b) All'interno della cellula, l'ion di K+ è a riposo e quindi ha solo energia potenziale,
$E_{p,\text{int}} = qV_{K^+}^\text{eff}$. Tuttavia, all'esterno della cellula il potenziale è nullo, quindi tutta l'energia
il potenziale iniziale sarà stato convertito in energia cinetica:

$$E_{p,\text{int}} = E_{c,\text{ext}} \quad\to\quad qV_{K^+}^\text{eff} = \frac{1}{2}mv^2,$$

(8)

$$v = \sqrt{\frac{2qV_{K^+}^\text{eff}}{m}} = \sqrt{\frac{2\times1{,}602\times10^{-19}\times0{,}021}{39\times1{,}66\times10^{-27}}} \quad\to\quad v = 322{,}4\ \text{m/s}.$$
(9)
c)
L'ion K+ è sottoposto a forza elettrica e descrive un MRUA in cui la velocità e la velocità di
La distanza percorsa (radio $r_a$ dell'asse) può essere espressa come segue:

$$\left.\begin{aligned} v &= at \\ r_a &= \tfrac{1}{2}at^2 \end{aligned}\right\} \to t = \frac{2r_a}{v} = \frac{2\times5\times10^{-6}}{322{,}4} \quad\to\quad t = 31\ \text{ns}.$$
(10)
d) Possiamo esprimere la resistenza elettrica come:

$$R_L = \rho_a\frac{L_a}{S_a}.$$

(11)
Considerando che l'asse è un cilindro, la sezione trasversale in funzione del raggio dell'asse verrà
data da $S_a = \pi r_a^2$. Quindi

$$R_L = \rho_a\frac{L_a}{\pi r_a^2}.$$

(12)

Rimpiazzando in (12) i valori dei dati del problema,

$$R_L = 3{,}8\times10^7\ \Omega = 38\ \text{M}\Omega.$$

(13)
e)
Substituendo nel termine $\lambda = 1/\sqrt{g_m R_L}$ i valori di $R_L$ e $g_m$ si ottiene

$$\lambda = 0{,}05\ \text{cm}.$$

(14)
f)
Il lavoro effettuato su un ion Na+ per spostarlo da $x = 0$ a $x_m = 0{,}2$ cm sarà dato da

$$W = -q[V(x_m)-V(0)] = q(V_p - V_0)(1-e^{-x_m/\lambda}) \quad\to\quad W = 1{,}73\times10^{-20}\ \text{J}.$$

(15)
g)
Ottieniamo l'espressione della forza elettrica dalla derivata del potenziale,

$$F(x) = qE(x) = -q\frac{dV(x)}{dx} \quad\to\quad F(x) = \frac{q(V_p - V_0)}{\lambda}e^{-x/\lambda}.$$

(16)
h) sostituendo $x = 0$ nell'espressione (16),

$$F(x = 0) = \frac{q(V_p - V_0)}{\lambda} \quad\to\quad F(x = 0) = 3{,}52\times10^{-17}\ \text{N}.$$

(14)

<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p8_f5.png]]
*illustrazione anatomia neurone*
<!--fig:end-->

**Topic:** [[Electrostatics]], [[Circuits]], [[Newtonian Mechanics]]
**Metodi:** [[Electric Potential Method (metodo)|Electric Potential Method]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Differential Equations (metodo)|Differential Equations]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Membrane (object)|Membrane]], [[Point Charge (object)|Point Charge]]
**Fonte:** [Testo (PDF) — p.8](https://drive.google.com/file/d/1eNgr-xjyYDdb9Xk2r04cIKobNQ14mBXm/view)

<div class="qlang-split" data-lang="en"></div>

P3. Physical model of a neuron.
On 25 October 2023, a new building was opened at Paraninfo, University of Zaragoza.
new permanent exhibition space dedicated to the figure of Santiago Ramón y Cajal, Nobel Prize winner of the Nobel Prize in Literature
Medicine in 1906, in recognition of his work on the structure of the nervous system. The neuron
It is the basic element of the nervous system (Fig. 1). The impulse is transmitted through the axon.
It's nerve-wracking from the cell body to the axon terminals.
We can think of the axon as a cylinder surrounded by the
cell membrane and filling by axoplasm, which is a dissolving of
The water is a source of water for the production of hydrocarbons. The exterior of the
The axon membrane is also surrounded by a solution with different
concentrations of the same ions. In the membrane there is a set of
channels that allow or block the passage of ions and proteins
So-called sodium-potassium pumps, which extract sodium and introduce potassium,
The Commission has already established that the Commission is not in a position to adopt a decision on the basis of the information provided by the Commission.
When the neuron is at rest, the inner wall of the membrane
Cell phone is negatively charged and the outer wall is charged.
positive, with a difference in electrostatic potential
$$V_0 = -70\ \text{mV}$$
relative to the outer membrane. In this situation of rest, the
concentration of Na+ and K+ ions inside and outside the
The membrane is the one shown in Table 1.
In addition to the effect on ions of the electrostatic potential, the
The difference in the concentration of each ion between the inside and the outside tends to be
to be equal across the membrane. This effect can be expressed by a potential $V_X$, which is
The resulting X ion, called the Nerst potential, is determined by the

$$V_X = \frac{RT}{eN_A}\ln\frac{[X]_\text{ext}}{[X]_\text{int}},$$

(1)
with $R$ the ideal gas constant, $T$ the temperature, $e$ the elementary load unit, $N_A$ the number of
Avogadro, and $[X]_\text{int}$ and $[X]_\text{ext}$ the X-ion concentrations in the inner and outer cell membrane,
the Commission.
The 'duel' between the electrical interaction and the concentration gradient of both ions between the interior
and the cell surface result in a different potential difference $V_X^\text{eff}$, called effective potential,
for each X ion, given by

$$V_X^\text{eff} = V_X - V_0.$$

(2)
a)
The effective potential is calculated using the concentrations of Na+ and K+ ions shown in Table 1.
for each ion. What effect will this effective potential produce on each ion on both sides of the membrane?
It considers that a K+ ion passes from the inside to the outside of the membrane without experiencing any type of
The axis of the axis of the axis shall be the axis of the axis of the axis of the axis of the axis.
(b) Determines the velocity of the K+ ion when it leaves the cell membrane.
c)
How long does it take the K+ ion to travel through the axon radius?

| Ion | Concentración $(\text{mol/m}^3)$ Interior | Concentración $(\text{mol/m}^3)$ Exterior |
| --- | --- | --- |
| Na+ | 15 | 145 |
| K+ | 150 | 5 |

The following table shows the following:

Figure 1

When a nerve stimulus reaches an axon point (which we take as $x = 0$), the difference in
The potential of the membrane at that point increases to $V_p = +40$ mV. This potential difference is decreasing
with the distance along the axis until the resting potential $V_0$ is reached due to two effects: current
which is lost through the membrane due to permanently open ion channels, characterized by
the so-called conductivity per unit area, $g_m \approx 0{,}01\ \text{k}\Omega^{-1}\text{cm}^{-2}$; and a resistance along the axon due
The axoplasm, $R_L$, which is directly proportional to the intracellular fluid resistivity, $\rho_a$, at the length
The axis, $L_a$, and inversely proportional to the cross section of the axis, $S_a$.
(d) Write the expression of the electrical resistance $R_L$ in terms of $\rho_a$, $L_a$ and axon radius. Calculate your
the numerical value.
It is possible to express the potential difference along the axon as λ

$$V(x) = (V_p - V_0)e^{-x/\lambda},$$

(3)
where $\lambda = 1/\sqrt{g_m R_L}$ is called 'spatial parameter', and indicates the distance travelled by a current
electrical to a weak stimulus before most of it is lost through the membrane.
e)
Get the value of the spatial parameter $\lambda$.
f)
Calculates the work done on a Na+ ion to move it from $x = 0$ to a distance
$x_m = 0{,}2$ cm.
g)
Get the expression in $x$ of the electrical force acting on a load $q$ along the axon
The value of the underlying asset is the sum of the underlying asset's assets.
Assistance: Be $f(x) = a\cdot e^{b\cdot x}$ with $a$ and $b$ constants, then $\dfrac{df(x)}{dx} = a\cdot b\cdot e^{b\cdot x}$.
(h) Calculates the value of the force acting in the direction of the axis of the axon on the Na+ ion located at the
posición $x = 0$.

The data:
•
The ideal gas constant is $R = 8{,}31\ \text{J mol}^{-1}\text{K}^{-1}$
•
Human body temperature: $T_\text{cuerpo} = 37\ ^\circ\text{C}$
•
Unidad de carga elemental: $1e = 1{,}602\times10^{-19}$ C.
•
Avogadro number: $N_A = 6{,}022\times10^{23}\ \text{mol}^{-1}$
•
The axis diameter is $D_A = 10\ \mu\text{m}$.
•
Masas atómicas: $m(\text{Na}) = 23\,\text{u}$, $m(\text{K}) = 39\,\text{u}$.
•
The atomic mass unit is $1\,\text{u} = 1{,}66\times10^{-27}$ kg.
•
Resistivity of intracellular fluid: $\rho_a = 60\ \Omega$ cm.
•
The axle length: $L_a = 5$ mm.

P3. Solution
a)
With the expression (1), we calculate the Nerst potential for each ion:

$$V_{K^+} = \frac{RT}{eN_A}\ln\frac{[K^+]_\text{ext}}{[K^+]_\text{int}} = \frac{8{,}31\times310{,}15}{1{,}602\times10^{-19}\times6{,}022\times10^{23}}\ln\left(\frac{5}{150}\right) = -91\ \text{mV},$$
(4)

$$V_{Na^+} = \frac{RT}{eN_A}\ln\frac{[Na^+]_\text{ext}}{[Na^+]_\text{int}} = \frac{8{,}31\times310{,}15}{1{,}602\times10^{-19}\times6{,}022\times10^{23}}\ln\left(\frac{145}{15}\right) = 61\ \text{mV}.$$
(5)
Substituting the Nerst potential in the expression (2) and taking into account that the potential at rest is
$V_0 = -70\ \text{mV}$, we get the effective potential for each ion:

$$V_{K^+}^\text{eff} = 21\ \text{mV},$$

(6)

$$V_{Na^+}^\text{eff} = -131\ \text{mV}.$$

(7)
Since the effective potential for K+ is positive, K+ ions will experience a force that tends to
Get them out of the cell. The situation is the opposite for the Na+ as the actual potential is negative.
Na+ ions tend to enter the cell. When the ion channels are opened, there will be a flow
K+ ions out and a flow of Na+ ions in.
(b) Inside the cell, the K+ ion is at rest and therefore has only potential energy,
$E_{p,\text{int}} = qV_{K^+}^\text{eff}$. However, outside the cell the potential is zero, so all the energy
the initial potential has been converted to kinetic energy:

$$E_{p,\text{int}} = E_{c,\text{ext}} \quad\to\quad qV_{K^+}^\text{eff} = \frac{1}{2}mv^2,$$

(8)

$$v = \sqrt{\frac{2qV_{K^+}^\text{eff}}{m}} = \sqrt{\frac{2\times1{,}602\times10^{-19}\times0{,}021}{39\times1{,}66\times10^{-27}}} \quad\to\quad v = 322{,}4\ \text{m/s}.$$
(9)
c)
When subjected to electrical force, the K+ ion describes an MRUA in which the velocity and the
The distance travelled (radius $r_a$ of the axon) can be expressed as follows:

$$\left.\begin{aligned} v &= at \\ r_a &= \tfrac{1}{2}at^2 \end{aligned}\right\} \to t = \frac{2r_a}{v} = \frac{2\times5\times10^{-6}}{322{,}4} \quad\to\quad t = 31\ \text{ns}.$$
(10)
(d) We can express the electrical resistance as:

$$R_L = \rho_a\frac{L_a}{S_a}.$$

(11)
Considering that the axis is a cylinder, the cross section depending on the axis radius will come
given by $S_a = \pi r_a^2$. So, what?

$$R_L = \rho_a\frac{L_a}{\pi r_a^2}.$$

(12)

Substituting the values of the problem data in (12)

$$R_L = 3{,}8\times10^7\ \Omega = 38\ \text{M}\Omega.$$

(13)
e)
Substituting the values of $R_L$ and $g_m$ in the expression $\lambda = 1/\sqrt{g_m R_L}$ is obtained

$$\lambda = 0{,}05\ \text{cm}.$$

(14)
f)
The work done on a Na+ ion to move it from $x = 0$ to $x_m = 0{,}2$ cm will be given by

$$W = -q[V(x_m)-V(0)] = q(V_p - V_0)(1-e^{-x_m/\lambda}) \quad\to\quad W = 1{,}73\times10^{-20}\ \text{J}.$$

(15)
g)
We get the expression of the electrical force from the derivative of the potential,

$$F(x) = qE(x) = -q\frac{dV(x)}{dx} \quad\to\quad F(x) = \frac{q(V_p - V_0)}{\lambda}e^{-x/\lambda}.$$

(16)
(h) Substituting $x = 0$ in the expression (16),

$$F(x = 0) = \frac{q(V_p - V_0)}{\lambda} \quad\to\quad F(x = 0) = 3{,}52\times10^{-17}\ \text{N}.$$

(14)

<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA TEORICA/2024 35 OAF 2024 PRUEBA TEORICA_p8_f5.png]]
*illustrazione anatomia neurone*
<!--fig:end-->

**Topic:** [[Electrostatics]], [[Circuits]], [[Newtonian Mechanics]]
**Metodi:** [[Electric Potential Method (metodo)|Electric Potential Method]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Differential Equations (metodo)|Differential Equations]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Membrane (object)|Membrane]], [[Point Charge (object)|Point Charge]]
**Fonte:** [Testo (PDF) — p.8](https://drive.google.com/file/d/1eNgr-xjyYDdb9Xk2r04cIKobNQ14mBXm/view)
