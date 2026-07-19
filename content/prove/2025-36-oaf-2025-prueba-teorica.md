---
title: Spagna 2025
tipo: prova
tags:
  - kg/prova
  - anno/2025
  - paese/Spagna
  - comp/Spagna
  - cluster/Onde e Oscillazioni
---
<div class="atom-reader" data-prova="2025-36-oaf-2025-prueba-teorica"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2025 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni,object/satellite,object/planet"></span>

<div class="qlang-switch" data-default="es"></div>



P1. Slingshot gravitacional hacia Júpiter
Las maniobras gravitacionales, también conocidas como slingshots, son técnicas fundamentales en la
exploración espacial que se utilizan para aumentar la velocidad de una nave sin necesidad de combustible
adicional. Al pasar cerca de un planeta, una nave puede aprovechar la gravedad de este para ganar impulso y
modificar su trayectoria, lo que le permite alcanzar su destino con mayor eficiencia energética.
Este tipo de maniobras ha sido utilizado en misiones espaciales como las de las sondas Voyager o Juice
(Jupiter Icy Moons Explorer), y es esencial para viajar a destinos lejanos del Sistema Solar sin depender
únicamente del combustible de la nave.
En este problema, consideramos una sonda espacial que se lanza desde la Tierra con la misión de llegar a Júpiter. Para ahorrar combustible, utiliza una maniobra de asistencia gravitacional al pasar cerca de Venus.
Supón que la sonda (masa $m$) inicia su movimiento hacia Venus en el punto A, con una velocidad $v_0$ con respecto al Sol. Considera también que Venus (masa $M_V$) orbita alrededor del Sol con una velocidad $v_V$
y que la dirección de la velocidad inicial de la sonda respecto al Sol antes de la maniobra es la misma que la
de Venus (ver Fig. 1). Sea $d$ la distancia mínima al centro de Venus durante la maniobra de asistencia
gravitacional.
a)
Determina la velocidad respecto a Venus que alcanza la sonda en los puntos A, B y C.
b) Dibuja la trayectoria aproximada de la sonda en el marco de referencia de Venus durante la maniobra.
Después de la maniobra, la sonda obtiene una ganancia en su velocidad relativa al Sol debido a la
“ayuda gravitacional” proporcionada por Venus y experimenta un cambio en la dirección de su trayectoria.
c)
Calcula la velocidad de la sonda respecto al Sol en el punto C.
Considera que, tras esta maniobra, la sonda sigue una trayectoria rectilínea hacia Júpiter, que se
encuentra a una distancia $d_{V\text{-}J}$ de Venus en ese momento.
d) Calcula el tiempo de viaje de la sonda desde Venus hasta Júpiter. ¿Cuál es el porcentaje de reducción
del tiempo de viaje gracias a la maniobra gravitacional en Venus?
Debido a la influencia gravitatoria del Sol y otros planetas, es realmente complicado que la sonda
mantenga una trayectoria rectilínea. Considera que se detecta una desviación en su trayectoria hacia Júpiter y
que, para corregir esta desviación, el sistema de propulsión realiza un ajuste que aplica un impulso
perpendicular a la dirección actual de movimiento, proporcionando un incremento de velocidad lateral $\Delta v$.
e)
Calcula el cambio de energía cinética de la sonda debido a este impulso. Compara esta energía con la
ganancia de energía cinética obtenida gracias a la maniobra gravitacional en Venus.

36 OLIMPIADA ESPAÑOLA DE FÍSICA
FASE DE ARAGÓN
Considera que el impulso es realizado por un sistema de propulsión que utiliza un combustible químico
(propelente) que proporciona 25 MJ/kg, con un rendimiento del 85% en la conversión de energía.
f)
Calcula la cantidad de combustible necesaria para lograr el incremento de velocidad lateral $\Delta v$.
Compara con la cantidad de combustible que se habría necesitado para lograr el incremento de
velocidad proporcionado por la maniobra de asistencia gravitacional.

Datos:
Constante de gravitación universal
Masa de la sonda
Velocidad inicial de la sonda con respecto al Sol
Masa de Venus
Distancia mínima al centro de Venus
Velocidad de Venus con respecto al Sol
Distancia entre Venus y Júpiter
Incremento de velocidad lateral de la sonda

$G = 6{,}67\times10^{-11}\ \text{Nm}^2\text{kg}^{-2}$
$m = 5000\ \text{kg}$
$v_0 = 10\ \text{km s}^{-1}$
$M_V = 4{,}87\times10^{24}\ \text{kg}$
$d = 1{,}10\times10^7\ \text{m}$
$v_V = 35\ \text{km s}^{-1}$
$d_{V\text{-}J} = 6{,}30\times10^{11}\ \text{m}$
$\Delta v = 0{,}2\ \text{km s}^{-1}$
36 OLIMPIADA ESPAÑOLA DE FÍSICA
FASE DE ARAGÓN
P1. Solución
a)
Antes de la maniobra, la sonda se aproxima a Venus con velocidad $\vec{v}_0$ con respecto al Sol. A su vez,
Venus se aproxima a la sonda con velocidad $\vec{v}_V$ con respecto al Sol. Por tanto, desde el punto de vista
de Venus, la sonda se aproxima en el punto A con velocidad $\vec{v}_A$ dada por

$$\vec{v}_A = \vec{v}_0 - \vec{v}_V \quad\Rightarrow\quad v_A = v_0 + v_V \quad\Rightarrow\quad v_A = 45\ \text{km/s} \quad (1)$$

Para calcular la velocidad de la sonda respecto de Venus en el punto B, $v_B$, utilizamos el principio de
conservación de la energía mecánica. La sonda se acerca con velocidad $v_A$ desde un punto muy alejado,
donde su energía potencial es nula, por lo que:

$$E_{cA} = E_{cB} + E_{pB} \quad\Rightarrow\quad \tfrac{1}{2}mv_A^2 = \tfrac{1}{2}mv_B^2 - G\frac{M_V m}{d}, \quad (2)$$

de donde podemos despejar $v_B$,

$$v_B = \sqrt{v_A^2 + \frac{2GM_V}{d}} = \sqrt{(45\times10^3)^2 + \frac{2\times6{,}67\times10^{-11}\times4{,}87\times10^{24}}{1{,}10\times10^7}} \quad\Rightarrow\quad v_B = 45{,}7\ \text{km/s}. \quad (3)$$

Tras la maniobra, cuando la sonda abandona el campo gravitatorio de Venus en el punto C, de nuevo se
anula su energía potencial, por lo que la energía cinética vuelve a ser la que tenía antes de interaccionar
con Venus. Es decir, la velocidad de la sonda en C con respecto a Venus, $v_C$, es

$$v_C = v_A \quad\Rightarrow\quad v_C = 45\ \text{km/s} \quad (4)$$

b) Dado que a distancia muy grande de Venus la sonda tiene velocidad, la energía
mecánica es positiva, por lo que la sonda describirá una trayectoria con forma de
hipérbola, como representa la figura 2. A una gran distancia de Venus las velocidades
inicial y final serán paralelas y de sentidos contrarios, acercándose a Venus en el
primer caso y alejándose de Venus en el segundo.

c)
Para calcular la velocidad inicial de la sonda con respecto a Venus, hemos sustraído vectorialmente la
velocidad de Venus. Por tanto, para calcular la velocidad final de la sonda con respecto al Sol, debemos
deshacer este cambio, sumando vectorialmente la velocidad de Venus. En este caso, tanto Venus como
la sonda se mueven en el mismo sentido, por lo que el módulo de la velocidad final será la suma de
ambas,

$$\vec{v}_f = \vec{v}_C + \vec{v}_V \quad\Rightarrow\quad v_f = v_C + v_V \quad\Rightarrow\quad v_f = 80\ \text{km/s} \quad (5)$$

d) El tiempo de viaje desde Venus hasta Júpiter es

$$t_{\text{post-maniobra}} = \frac{d_{V\text{-}J}}{v_f} = \frac{6{,}3\times10^{11}}{80\times10^3} \quad\Rightarrow\quad t_{\text{post-maniobra}} = 7{,}87\times10^6\ \text{s} = 91{,}1\ \text{días} \quad (6)$$

Si, en lugar de la maniobra gravitacional, la sonda hubiera viajado con la velocidad inicial $v_0$, el tiempo
que habría tardado en llegar a Júpiter sería

$$t_{\text{sin maniobra}} = \frac{d_{V\text{-}J}}{v_0} = \frac{6{,}3\times10^{11}}{10\times10^3} \quad\Rightarrow\quad t_{\text{sin maniobra}} = 6{,}30\times10^6\ \text{s} = 729{,}2\ \text{días} \quad (7)$$

Figura 2
36 OLIMPIADA ESPAÑOLA DE FÍSICA
FASE DE ARAGÓN
Por tanto, el porcentaje de reducción del tiempo de viaje gracias a la maniobra gravitacional en Venus es

$$\text{Reducción}(\%) = \left(1 - \frac{t_{\text{post-maniobra}}}{t_{\text{sin maniobra}}}\right)\times100 \quad\Rightarrow\quad \text{Reducción}(\%) = 87\ \% \quad (8)$$

e)
Como el incremento en velocidad $\Delta v$ se produce en dirección perpendicular a la trayectoria de la sonda,
el módulo del vector velocidad tras el ajuste propulsivo será

$$v^2 = v_f^2 + \Delta v^2 \quad (9)$$

de modo que el cambio de energía cinética en el ajuste es

$$\Delta E_c = \tfrac{1}{2}m\Delta v^2 = \tfrac{1}{2}\,5000\times(0{,}2\times10^3)^2 \quad\Rightarrow\quad \Delta E_c = 1{,}00\times10^8\ \text{J} \quad (10)$$

El cambio de energía cinética obtenido tras la maniobra gravitacional es

$$E_{cf} - E_{c0} = \tfrac{1}{2}mv_f^2 - \tfrac{1}{2}mv_0^2 = \tfrac{1}{2}\,5000\times\left[(80\times10^3)^2 - (10\times10^3)^2\right] \quad\Rightarrow\quad E_{cf} - E_{c0} = 1{,}58\times10^{13}\ \text{J} \quad (11)$$

Por tanto, el ajuste propulsivo requiere apenas el 0,0006% de la energía cinética ganada por la maniobra
gravitacional, lo que muestra que las maniobras gravitacionales son extraordinariamente eficientes en
comparación con los ajustes realizados mediante propulsión.
f)
Para calcular la energía total que debe suministrar el combustible, se debe tener en cuenta que la energía
total requerida es mayor que el cambio de energía cinética debido al rendimiento $\eta$ del sistema de
propulsión. La cantidad de combustible necesario será

$$m_{\text{combustible}} = \frac{\Delta E_c/\eta}{E_{\text{combustible}}} = \frac{1{,}00\times10^8\ /\ 0{,}85}{25\times10^6} \quad\Rightarrow\quad m_{\text{combustible}} = 4{,}71\ \text{kg} \quad (12)$$

La cantidad de combustible necesaria para lograr el incremento de velocidad proporcionado por la
maniobra de asistencia gravitacional hubiera sido

$$m'_{\text{combustible}} = \frac{(E_{cf} - E_{c0})/\eta}{E_{\text{combustible}}} = \frac{1{,}58\times10^{13}\ /\ 0{,}85}{25\times10^6} \quad\Rightarrow\quad m'_{\text{combustible}} = 7{,}41\times10^5\ \text{kg} = 741\ \text{t} \quad (13)$$

36 OLIMPIADA ESPAÑOLA DE FÍSICA
FASE DE ARAGÓN


<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p2_f1.png]]
*Manovra slingshot gravitazionale attorno a Venere*
<!--fig:end-->

**Topic:** [[Gravitation]], [[Conservation of Energy]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Satellite (object)|Satellite]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1JYsFZ8q7JfUgiMR89Ud1kkukswesUpqf/view)


<div class="qlang-split" data-lang="it"></div>

P1. Slingshot gravitazionale verso Giove
Le manovre gravitazionali, conosciute anche come slingshots, sono tecniche fondamentali per la
esplorazione spaziale utilizzata per aumentare la velocità di una nave senza bisogno di carburante
- Un altro. Passando vicino a un pianeta, una nave può sfruttare la sua gravità per guadagnare impulso e
modificare la sua traccia, consentendole di raggiungere la destinazione con maggiore efficienza energetica.
Questo tipo di manovra è stato utilizzato in missioni spaziali come quelle delle sonde Voyager o Juice
(Jupiter Icy Moons Explorer), ed è essenziale per viaggiare verso destinazioni lontane del Sistema Solare senza dipendere
il combustibile della nave.
In questo problema, consideriamo una sonda spaziale lanciata dalla Terra con la missione di raggiungere Giove. Per risparmiare carburante, usa una manovra di assistenza gravitazionale quando passa vicino a Venere.
Supponiamo che la sonda (massa $m$) inizia il suo movimento verso Venere al punto A, con una velocità $v_0$ rispetto al Sole. Considera inoltre che Venere (massa $M_V$) orbita intorno al Sole a una velocità $v_V$
e che la direzione della velocità iniziale della sonda rispetto al Sole prima della manovra è la stessa della
di Venere (vedi Figura 1. 1). Sea $d$ la distanza minima al centro di Venere durante la manovra di assistenza
gravità.
a)
Determina la velocità rispetto a Venere raggiunta dalla sonda nei punti A, B e C.
b) Desegna il percorso approssimativo della sonda nel quadro di riferimento di Venere durante la manovra.
Dopo la manovra, la sonda ottiene un guadagno nella sua velocità relativa al Sole a causa della
aiuto gravitazionale fornito da Venere e sperimenta un cambiamento nella direzione della sua traiettoria.
c)
Calcola la velocità della sonda rispetto al Sole al punto C.
La sonda, dopo questa manovra, segue una traiettoria rettilinea verso Giove, che si
si trova a una distanza $d_{V\text{-}J}$ da Venere in quel momento.
d) Calcola il tempo di viaggio della sonda da Venere a Giove. Qual è il tasso di riduzione
Il tempo di viaggio grazie alla manovra gravitazionale su Venere?
A causa dell'influenza gravitazionale del Sole e di altri pianeti, è davvero complicato che la sonda
mantenere un percorso rettilineo. Considera che si rileva una deviazione nella sua traccia verso Giove e
che, per correggere questa deviazione, il sistema di propulsione effettua un regolamento che applica un impulso
perpendicolare alla direzione di movimento attuale, fornendo un aumento della velocità laterale $\Delta v$.
e)
Calcola il cambiamento di energia cinetica della sonda a causa di questo impulso. Comparare questa energia con la
La maggior parte delle persone che hanno un'energia cinetica in questo campo sono i primi a ottenere un'energia cinetica grazie alla manovra gravitazionale su Venere.

36 Olimpiadi di fisica spagnoli
Fase di ARAGON
Considera che la spinta sia effettuata da un sistema di propulsione che utilizza un combustibile chimico
(propellente) che fornisce 25 MJ/kg, con un rendimento dell'85% in conversione di energia.
f)
Calcola la quantità di combustibile necessaria per ottenere l'aumento della velocità laterale $\Delta v$.
Rispetto alla quantità di combustibile che sarebbe stata necessaria per ottenere l'aumento di
velocità fornita dalla manovra di assistenza gravitazionale.

Dati:
Costante di gravitazione universale
Massa della sonda
Velocità iniziale della sonda rispetto al Sole
Massa di Venere
Distanza minima al centro di Venere
Velocità di Venere rispetto al Sole
Distanza tra Venere e Giove
Aumento della velocità laterale della sonda

$G = 6{,}67\times10^{-11}\ \text{Nm}^2\text{kg}^{-2}$
$m = 5000\ \text{kg}$
$v_0 = 10\ \text{km s}^{-1}$
$M_V = 4{,}87\times10^{24}\ \text{kg}$
$d = 1{,}10\times10^7\ \text{m}$
$v_V = 35\ \text{km s}^{-1}$
$d_{V\text{-}J} = 6{,}30\times10^{11}\ \text{m}$
$\Delta v = 0{,}2\ \text{km s}^{-1}$
36 Olimpiadi di fisica spagnoli
Fase di ARAGON
P1. Soluzione
a)
Prima della manovra, la sonda si avvicina a Venere a velocità $\vec{v}_0$ rispetto al Sole. E a sua volta,
Venere si avvicina alla sonda a velocità $\vec{v}_V$ rispetto al Sole. Il problema è che, in questo caso, il
di Venere, la sonda si avvicina al punto A con velocità $\vec{v}_A$ data da

$$\vec{v}_A = \vec{v}_0 - \vec{v}_V \quad\Rightarrow\quad v_A = v_0 + v_V \quad\Rightarrow\quad v_A = 45\ \text{km/s} \quad (1)$$

Per calcolare la velocità della sonda rispetto a Venere al punto B, $v_B$, usiamo il principio di
la conservazione dell'energia meccanica. La sonda si avvicina a velocità $v_A$ da un punto molto lontano,
dove la sua energia potenziale è zero, quindi:

$$E_{cA} = E_{cB} + E_{pB} \quad\Rightarrow\quad \tfrac{1}{2}mv_A^2 = \tfrac{1}{2}mv_B^2 - G\frac{M_V m}{d}, \quad (2)$$

da cui possiamo scaricare $v_B$,

$$v_B = \sqrt{v_A^2 + \frac{2GM_V}{d}} = \sqrt{(45\times10^3)^2 + \frac{2\times6{,}67\times10^{-11}\times4{,}87\times10^{24}}{1{,}10\times10^7}} \quad\Rightarrow\quad v_B = 45{,}7\ \text{km/s}. \quad (3)$$

Dopo la manovra, quando la sonda abbandona il campo gravitazionale di Venere al punto C, si riproduce
annulla la sua energia potenziale, e quindi la sua energia cinetica torna a essere quella che aveva prima di interagire
con Venere. Cioè, la velocità della sonda in C rispetto a Venere, $v_C$, è

$$v_C = v_A \quad\Rightarrow\quad v_C = 45\ \text{km/s} \quad (4)$$

b) Dato che a una grande distanza da Venere la sonda ha velocità, l'energia
La meccanica è positiva, quindi la sonda descriverà un percorso in forma di
iperbola, come rappresentato dalla figura 2. A una grande distanza da Venere le velocità
Inizialmente e infine saranno parallele e di senso contrario, avvicinandosi a Venere nel
Il primo caso e la distanza da Venere nel secondo.

c)
Per calcolare la velocità iniziale della sonda rispetto a Venere, abbiamo sottraito vettoricamente la velocità di
velocità di Venere. Quindi, per calcolare la velocità finale della sonda rispetto al Sole, dobbiamo
Svanire questo cambiamento, sommando vettoralmente la velocità di Venere. In questo caso, sia Venus che
La sonda si muove nella stessa direzione, quindi il modulo della velocità finale sarà la somma di
Entrambi,

$$\vec{v}_f = \vec{v}_C + \vec{v}_V \quad\Rightarrow\quad v_f = v_C + v_V \quad\Rightarrow\quad v_f = 80\ \text{km/s} \quad (5)$$

d) Il tempo di viaggio da Venere a Giove è

$$t_{\text{post-maniobra}} = \frac{d_{V\text{-}J}}{v_f} = \frac{6{,}3\times10^{11}}{80\times10^3} \quad\Rightarrow\quad t_{\text{post-maniobra}} = 7{,}87\times10^6\ \text{s} = 91{,}1\ \text{días} \quad (6)$$

Se, invece della manovra gravitazionale, la sonda avesse viaggiato con la velocità iniziale $v_0$, il tempo
che ci sarebbe voluto molto tempo per arrivare a Giove sarebbe stato

$$t_{\text{sin maniobra}} = \frac{d_{V\text{-}J}}{v_0} = \frac{6{,}3\times10^{11}}{10\times10^3} \quad\Rightarrow\quad t_{\text{sin maniobra}} = 6{,}30\times10^6\ \text{s} = 729{,}2\ \text{días} \quad (7)$$

Figura 2
36 Olimpiadi di fisica spagnoli
Fase di ARAGON
Quindi, la percentuale di riduzione del tempo di viaggio grazie alla manovra gravitazionale su Venere è

$$\text{Reducción}(\%) = \left(1 - \frac{t_{\text{post-maniobra}}}{t_{\text{sin maniobra}}}\right)\times100 \quad\Rightarrow\quad \text{Reducción}(\%) = 87\ \% \quad (8)$$

e)
Poiché l'aumento di velocità $\Delta v$ si verifica in direzione perpendicolare al percorso della sonda,
il modulo del vettore di velocità dopo l'impostazione propulsiva sarà

$$v^2 = v_f^2 + \Delta v^2 \quad (9)$$

Quindi il cambiamento di energia cinetica nell'aggiustamento è

$$\Delta E_c = \tfrac{1}{2}m\Delta v^2 = \tfrac{1}{2}\,5000\times(0{,}2\times10^3)^2 \quad\Rightarrow\quad \Delta E_c = 1{,}00\times10^8\ \text{J} \quad (10)$$

Il cambiamento di energia cinetica ottenuto dopo la manovra gravitazionale è

$$E_{cf} - E_{c0} = \tfrac{1}{2}mv_f^2 - \tfrac{1}{2}mv_0^2 = \tfrac{1}{2}\,5000\times\left[(80\times10^3)^2 - (10\times10^3)^2\right] \quad\Rightarrow\quad E_{cf} - E_{c0} = 1{,}58\times10^{13}\ \text{J} \quad (11)$$

Il sistema propulsivo richiede quindi solo lo 0,0006% dell'energia cinetica ottenuta dalla manovra.
gravità, che mostra che le manovre gravitazionali sono straordinariamente efficienti nel
il confronto con gli aggiustamenti effettuati con propulsione.
f)
Per calcolare l'energia totale da fornire al combustibile, si deve tenere conto che l'energia
total requerida es mayor que el cambio de energía cinética debido al rendimiento $\eta$ del sistema de
Propulsione. La quantità di combustibile necessaria sarà

$$m_{\text{combustible}} = \frac{\Delta E_c/\eta}{E_{\text{combustible}}} = \frac{1{,}00\times10^8\ /\ 0{,}85}{25\times10^6} \quad\Rightarrow\quad m_{\text{combustible}} = 4{,}71\ \text{kg} \quad (12)$$

La quantità di combustibile necessaria per ottenere l'aumento di velocità fornito dalla
manovra di assistenza gravitazionale sarebbe stato

$$m'_{\text{combustible}} = \frac{(E_{cf} - E_{c0})/\eta}{E_{\text{combustible}}} = \frac{1{,}58\times10^{13}\ /\ 0{,}85}{25\times10^6} \quad\Rightarrow\quad m'_{\text{combustible}} = 7{,}41\times10^5\ \text{kg} = 741\ \text{t} \quad (13)$$

36 Olimpiadi di fisica spagnoli
Fase di ARAGON


<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p2_f1.png]]
*Manovra slingshot gravitazionale attorno a Venere*
<!--fig:end-->

**Topic:** [[Gravitation]], [[Conservation of Energy]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Satellite (object)|Satellite]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1JYsFZ8q7JfUgiMR89Ud1kkukswesUpqf/view)

<div class="qlang-split" data-lang="en"></div>

P1. Gravitational slingshot to Jupiter
Gravitational maneuvers, also known as slingshots, are fundamental techniques in the
space exploration used to increase the speed of a spacecraft without the need for fuel
additional. When passing close to a planet, a spacecraft can use its gravity to gain momentum and
change its trajectory, allowing it to reach its destination more efficiently.
This type of maneuver has been used in space missions such as those of the Voyager or Juice probes
(Jupiter Icy Moons Explorer), and is essential for traveling to distant destinations in the Solar System without depending on
only the fuel of the ship.
In this problem, we consider a space probe that launches from Earth with the mission to reach Jupiter. To save fuel, he uses a gravitational assistance maneuver when passing near Venus.
Suppose the probe (mass $m$) starts its movement towards Venus at point A, with a velocity $v_0$ with respect to the Sun. It also considers that Venus (mass $M_V$) orbits the Sun at a speed $v_V$
And the direction of the probe's initial velocity with respect to the Sun before the maneuver is the same as the
The number of species of birds in the world is estimated to be around 1). Sea $d$ minimum distance to the centre of Venus during the assistance maneuver
It's gravitational.
a)
Determines the speed relative to Venus that the probe reaches at points A, B and C.
(b) Draw the approximate trajectory of the probe in the Venus reference frame during the maneuver.
After the maneuver, the probe gains a gain in its relative speed to the Sun due to the
 Gravitational aid provided by Venus and experiences a change in the direction of its trajectory.
c)
Calculate the probe's speed with respect to the Sun at point C.
It considers that, following this maneuver, the probe follows a straight path towards Jupiter, which is
It's a distance of $d_{V\text{-}J}$ from Venus at that moment.
(d) Calculate the time of the spacecraft's journey from Venus to Jupiter. What is the percentage reduction
of travel time thanks to gravitational maneuver on Venus?
Because of the gravitational influence of the Sun and other planets, it's really complicated that the probe
Keep a straight path. It considers that a deviation in its path towards Jupiter is detected and
The propulsion system shall adjust the torque to the torque of the vehicle.
Perpendicular to the current direction of motion, providing an increase in lateral speed $\Delta v$.
e)
Calculates the change in the probe's kinetic energy due to this pulse. Compare this energy to the
gain of kinetic energy obtained by gravitational maneuver on Venus.

36 Spanish Olympics in Physics
The following is the list of the categories of products:
It considers that the thrust is carried out by a propulsion system using a chemical fuel
(propellant) which provides 25 MJ/kg, with an energy conversion efficiency of 85%.
f)
Calculates the amount of fuel required to achieve the lateral speed increase $\Delta v$.
It compares with the amount of fuel that would have been needed to achieve the increase in
speed provided by the gravitational assistance maneuver.

The data:
The following is the list of the elements used:
Mass of the probe
Initial speed of the probe with respect to the Sun
Mass of Venus
Minimum distance to the centre of Venus
Venus's speed with respect to the Sun
Distance between Venus and Jupiter
Increase of lateral speed of the probe

$G = 6{,}67\times10^{-11}\ \text{Nm}^2\text{kg}^{-2}$
$m = 5000\ \text{kg}$
$v_0 = 10\ \text{km s}^{-1}$
$M_V = 4{,}87\times10^{24}\ \text{kg}$
$d = 1{,}10\times10^7\ \text{m}$
$v_V = 35\ \text{km s}^{-1}$
$d_{V\text{-}J} = 6{,}30\times10^{11}\ \text{m}$
$\Delta v = 0{,}2\ \text{km s}^{-1}$
36 Spanish Olympics in Physics
The following is the list of the categories of products:
P1. Solution
a)
Before the maneuver, the probe approaches Venus at $\vec{v}_0$ with respect to the Sun. In turn,
Venus is approaching the probe at $\vec{v}_V$ with respect to the Sun. The Commission has therefore taken the view that the
From Venus, the probe approaches at point A at a speed $\vec{v}_A$ given by

$$\vec{v}_A = \vec{v}_0 - \vec{v}_V \quad\Rightarrow\quad v_A = v_0 + v_V \quad\Rightarrow\quad v_A = 45\ \text{km/s} \quad (1)$$

To calculate the speed of the probe with respect to Venus at point B, $v_B$, we use the principle of
The Commission will also consider the possibility of a new approach to the protection of the environment. The probe is approaching at $v_A$ speed from a very distant point,
where its potential energy is zero, so:

$$E_{cA} = E_{cB} + E_{pB} \quad\Rightarrow\quad \tfrac{1}{2}mv_A^2 = \tfrac{1}{2}mv_B^2 - G\frac{M_V m}{d}, \quad (2)$$

where we can clear $v_B$,

$$v_B = \sqrt{v_A^2 + \frac{2GM_V}{d}} = \sqrt{(45\times10^3)^2 + \frac{2\times6{,}67\times10^{-11}\times4{,}87\times10^{24}}{1{,}10\times10^7}} \quad\Rightarrow\quad v_B = 45{,}7\ \text{km/s}. \quad (3)$$

After the maneuver, when the probe leaves the gravitational field of Venus at point C, it is again
It cancels its potential energy, so the kinetic energy is back to what it was before it interacted.
with Venus. That is, the speed of the probe in C with respect to Venus, $v_C$, is

$$v_C = v_A \quad\Rightarrow\quad v_C = 45\ \text{km/s} \quad (4)$$

(b) Since at a very large distance from Venus the probe has speed, the energy
The probe will describe a trajectory in the form of
hyperbola, as shown in Figure 2. At a great distance from Venus the speeds
The initial and final will be parallel and opposite, approaching Venus in the
first case and moving away from Venus in the second.

c)
To calculate the probe's initial velocity with respect to Venus, we vectorally subtracted the
speed of Venus. So to calculate the probe's final velocity with respect to the Sun, we have to
Undo this change by vectorally adding up the velocity of Venus. In this case, both Venus and
The probe is moving in the same direction, so the module of the final velocity will be the sum of
Both of them,

$$\vec{v}_f = \vec{v}_C + \vec{v}_V \quad\Rightarrow\quad v_f = v_C + v_V \quad\Rightarrow\quad v_f = 80\ \text{km/s} \quad (5)$$

(d) The travel time from Venus to Jupiter is

$$t_{\text{post-maniobra}} = \frac{d_{V\text{-}J}}{v_f} = \frac{6{,}3\times10^{11}}{80\times10^3} \quad\Rightarrow\quad t_{\text{post-maniobra}} = 7{,}87\times10^6\ \text{s} = 91{,}1\ \text{días} \quad (6)$$

If, instead of gravitational maneuver, the probe had travelled at the initial speed $v_0$, the time
It would have taken him long to reach Jupiter.

$$t_{\text{sin maniobra}} = \frac{d_{V\text{-}J}}{v_0} = \frac{6{,}3\times10^{11}}{10\times10^3} \quad\Rightarrow\quad t_{\text{sin maniobra}} = 6{,}30\times10^6\ \text{s} = 729{,}2\ \text{días} \quad (7)$$

Figure 2
36 Spanish Olympics in Physics
The following is the list of the categories of products:
So the percentage of travel time reduced by gravitational maneuver on Venus is

$$\text{Reducción}(\%) = \left(1 - \frac{t_{\text{post-maniobra}}}{t_{\text{sin maniobra}}}\right)\times100 \quad\Rightarrow\quad \text{Reducción}(\%) = 87\ \% \quad (8)$$

e)
As the $\Delta v$ speed increase occurs in a direction perpendicular to the probe's path,
the speed vector module after the propulsion adjustment shall be

$$v^2 = v_f^2 + \Delta v^2 \quad (9)$$

So the change in kinetic energy in the adjustment is

$$\Delta E_c = \tfrac{1}{2}m\Delta v^2 = \tfrac{1}{2}\,5000\times(0{,}2\times10^3)^2 \quad\Rightarrow\quad \Delta E_c = 1{,}00\times10^8\ \text{J} \quad (10)$$

The kinetic energy change obtained by the gravitational maneuver is

$$E_{cf} - E_{c0} = \tfrac{1}{2}mv_f^2 - \tfrac{1}{2}mv_0^2 = \tfrac{1}{2}\,5000\times\left[(80\times10^3)^2 - (10\times10^3)^2\right] \quad\Rightarrow\quad E_{cf} - E_{c0} = 1{,}58\times10^{13}\ \text{J} \quad (11)$$

Therefore, propulsion adjustment requires only 0.0006% of the kinetic energy gained by manoeuvring.
Gravitational maneuvers are extremely efficient in
comparison with the adjustments made by propulsion.
f)
In calculating the total energy to be supplied by the fuel, it must be taken into account that the energy
The total required is greater than the kinetic energy change due to the $\eta$ performance of the system.
The engine is propelled. The amount of fuel required will be

$$m_{\text{combustible}} = \frac{\Delta E_c/\eta}{E_{\text{combustible}}} = \frac{1{,}00\times10^8\ /\ 0{,}85}{25\times10^6} \quad\Rightarrow\quad m_{\text{combustible}} = 4{,}71\ \text{kg} \quad (12)$$

The amount of fuel needed to achieve the increase in speed provided by the
gravitational assistance maneuver would have been

$$m'_{\text{combustible}} = \frac{(E_{cf} - E_{c0})/\eta}{E_{\text{combustible}}} = \frac{1{,}58\times10^{13}\ /\ 0{,}85}{25\times10^6} \quad\Rightarrow\quad m'_{\text{combustible}} = 7{,}41\times10^5\ \text{kg} = 741\ \text{t} \quad (13)$$

36 Spanish Olympics in Physics
The following is the list of the categories of products:


<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p2_f1.png]]
*Manovra slingshot gravitazionale attorno a Venere*
<!--fig:end-->

**Topic:** [[Gravitation]], [[Conservation of Energy]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Satellite (object)|Satellite]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1JYsFZ8q7JfUgiMR89Ud1kkukswesUpqf/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Spagna 2025 — Quesito 2" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni"></span>

<div class="qlang-switch" data-default="es"></div>



P2. Festival de verano.
El Festival Internacional de las Culturas o Pirineos Sur se celebra desde 1992 en la comarca oscense del
Alto Gállego, concretamente en la localidad de Lanuza, perteneciente al municipio de Sallent de Gállego. En
este festival el escenario es flotante sobre el pantano de Lanuza y el graderío se sitúa en la orilla del pantano.
Unos amigos que trabajaron en la organización
de la pasada edición, conociendo tu gran interés por
la física, quieren que les ayudes a entender cosas
que les surgieron preparando los conciertos para
que no les vuelvan a suceder. Para ello, hacen un
esquema del escenario y las gradas. ¡Empecemos!
Una de las primeras tareas que hicieron fue sincronizar los equipos de sonido que hay en la zona de
control (punto C) y al fondo de las gradas (punto F). Para ello, consideraron que la velocidad de propagación
del sonido en el aire es $v = 340\ \text{m/s}$.
a)
Si el sonido se emite desde el punto A, ¿qué retardo hay en la recepción entre los puntos C y F?
Unos técnicos midieron ese retardo y no obtuvieron ese resultado. Al preguntarles por qué, les
explicaron que la velocidad de propagación del sonido en un gas ideal depende de la temperatura absoluta
con una expresión que incluye la constante de los gases ideales $R = 8{,}314\ \text{J/mol}\cdot\text{K}$, el coeficiente adiabático $\gamma$
(adimensional) y la masa molar $M$ del gas en kg/mol. El problema es que tus amigos no copiaron bien la
dependencia y no saben cuál de las siguientes expresiones es la correcta:

i) $v = \sqrt{\dfrac{\gamma R}{M}}\,\dfrac{1}{\sqrt{T}}$ ii) $v = \sqrt{\dfrac{\gamma R}{M}}\,\dfrac{1}{T}$ iii) $v = \sqrt{\dfrac{\gamma R}{M}}\,\sqrt{T}$ iv) $v = \sqrt{\dfrac{\gamma R}{M}}\,T$

b) Razona cuál es la expresión que les indicaron los técnicos.
c)
La prueba se hizo a $25\ ^\circ\text{C}$ y, para el aire, $\gamma = 1{,}4$ y $M = 28{,}97\ \text{g/mol}$. ¿Qué retardo midieron los técnicos?
Para las primeras pruebas de sonido colocaron todos los altavoces, que en conjunto dan 10 kW de
potencia de sonido, en el centro del escenario (punto A), pusieron una canción a toda potencia y midieron el
nivel de intensidad sonora $\beta$ en distintos puntos.
d) La primera medida la hicieron en el punto F. Suponiendo emisión semiesférica, ¿qué valor obtuvieron?
El siguiente punto en el que querían medir el nivel de intensidad sonora era el punto C, pero los técnicos
les advirtieron que era mejor no acercarse tanto sin antes disminuir la potencia a la que emitían los altavoces.
e)
¿Les dieron un buen consejo los técnicos? Justifica tu respuesta.
Para la siguiente prueba, tus amigos colocaron la mitad de los altavoces 2,5 m a la derecha del punto A
y la otra mitad 2,5 m a su izquierda (puntos a y a’). En los preparativos, por error hicieron sonar un tono de
una cierta frecuencia, de lo que fueron advertidos por unos técnicos que estaban trabajando en el punto F.
Los técnicos se desplazaron hasta el punto F’, donde dejaron de oír el sonido aunque el tono seguía sonando.
f)
Explica por qué los técnicos oyeron el tono en F pero dejaron de oírlo al desplazarse a F’.
g)
¿De qué frecuencia era el tono que hicieron sonar por error?
Datos: Área de la esfera $S = 4\pi R^2$; mínima intensidad audible $I_0 = 10^{-12}\ \text{W/m}^2$; umbral del dolor $\beta_\text{dolor} = 120\ \text{dB}$.

36 OLIMPIADA ESPAÑOLA DE FÍSICA
FASE DE ARAGÓN
P2. Solución
a)
El sonido se emite desde el punto A y los frentes de onda se propagan con una velocidad constante
$v = 340\ \text{m/s}$ en todas las direcciones. En particular, los puntos C y F están alineados con A y separados
una distancia $d_{CF} = 80\ \text{m}$, por lo que el retardo $\Delta t$ entre ambos puntos es:

$$\Delta t = \frac{d_{CF}}{v} \quad\Rightarrow\quad \Delta t = 235\ \text{ms} \quad (1)$$

b) Utilizando el análisis dimensional podemos determinar cuál de las cuatro ecuaciones es la correcta. En el
miembro de la izquierda de las cuatro aparece la velocidad. Sus dimensiones físicas son

$$[v] = \frac{[L]}{[T]} \quad (2)$$

En todos los casos en el miembro de la derecha existe un factor común cuyas dimensiones son

$$\left[\sqrt{\frac{\gamma R}{M}}\right] = \frac{[L]}{[T][\Theta]^{1/2}} \quad (3)$$

donde $[\Theta]$ corresponde a las dimensiones de temperatura. Para que la fórmula sea dimensionalmente
correcta, hay que multiplicarla por un elemento que tenga como dimensiones $[\Theta]^{1/2}$. Por tanto, la
solución correcta es la iii),

$$v = \sqrt{\frac{\gamma R}{M}}\,\sqrt{T} \quad (4)$$

c)
En el caso indicado, sustituyendo los valores dados en la expresión iii) se obtiene

$$v = 346\ \text{m/s} \quad (5)$$

Por lo tanto, el retardo que miden los técnicos es

$$\Delta t = 231\ \text{ms} \quad (6)$$

d) La potencia $P$ emitida por los altavoces se reparte de forma uniforme sobre una superficie semiesférica,
es decir, igual a $2\pi R^2$, siendo $R$ la distancia que existe entre el foco emisor y el punto de interés. De
esta manera, el nivel de intensidad sonora medido en el punto F, que se sitúa a una distancia $d_{AF} = 110\ \text{m}$ de A es

$$\beta_F = 10\log\frac{I_F}{I_0} = 10\log\frac{P}{2\pi d_{AF}^2\,I_0} \quad\Rightarrow\quad \beta_F = 111{,}2\ \text{dB} \quad (7)$$

e)
Manteniendo la emisión de 10 kW de potencia en A nuestros amigos se acercaron hasta el punto C, de
modo que la distancia entre el foco emisor y el punto de interés se redujo a $d_{AC} = 30\ \text{m}$, por lo que la
intensidad habrá aumentado y consecuentemente el nivel de intensidad sonora también. El valor que se
espera medir en C en estas condiciones es

$$\beta_C = 10\log\frac{I_C}{I_0} = 10\log\frac{P}{2\pi d_{AC}^2\,I_0} \quad\Rightarrow\quad \beta_C = 122{,}5\ \text{dB} \quad (8)$$

El valor de $\beta_C$ excede los 120 dB que marcan el umbral del dolor. Por lo tanto, los técnicos les dieron
un consejo acertado.
36 OLIMPIADA ESPAÑOLA DE FÍSICA
FASE DE ARAGÓN
f)
Al separar los altavoces en dos grupos situados a 2,5 m a ambos lados de A, se está creando una
situación en la que se tienen dos emisores armónicos puntuales e idénticos separados entre sí una
distancia $d = 5\ \text{m}$. Cada uno de ellos emite ondas de la misma frecuencia y en fase que viajan por el
espacio y que, al encontrarse, se superponen, produciéndose un fenómeno de interferencia.
Dicha interferencia puede ser constructiva si la diferencia de caminos recorridos por las ondas al
superponerse es igual a un múltiplo entero de la longitud de onda $\lambda$, y destructiva si la diferencia de
caminos es igual a un múltiplo entero de la longitud de onda más media longitud de onda (o de forma
equivalente igual a un múltiplo impar de media longitud de onda).
Por lo tanto, el hecho de que los técnicos escuchasen el tono al estar situados en F y no lo escuchasen al
estar situados en F’ se debe a que en F se produce una interferencia constructiva (la diferencia de
caminos entre ambas ondas es cero) y en F’ se produce una interferencia destructiva.
g)
Si los técnicos al desplazarse en paralelo al fondo de las gradas dejan de escuchar (por primera vez) el
tono en F’, este punto corresponde al primer mínimo de interferencia.

Si los dos emisores están a distancia $d_{Aa} = d_{Aa'} = 2{,}5\ \text{m}$ de A, tal y como se muestra en la figura, su
distancia con respecto al punto F’ es

$$d_{aF'} = \sqrt{d_{AF}^2 + (d_{FF'} - d_{Aa})^2} \quad (9)$$

$$d_{a'F'} = \sqrt{d_{AF}^2 + (d_{FF'} + d_{Aa'})^2} \quad (10)$$

Por lo tanto, la diferencia de caminos recorrida por las dos ondas, $\Delta r$, es

$$\Delta r = \left|d_{a'F'} - d_{aF'}\right| \quad (11)$$

En el punto F’ se produce el primer mínimo de interferencia, por lo que la diferencia de caminos debe
ser igual a media longitud de onda,

$$\Delta r = \frac{\lambda}{2} \quad (12)$$

Para una onda la relación entre longitud de onda $\lambda$, frecuencia $f$ y velocidad de propagación $v$ es

$$v = \lambda f \quad (13)$$

Combinando las ecuaciones (9) a (13) se puede obtener la expresión de la frecuencia de emisión de la
onda que produce en F’ el primer mínimo de interferencia,

$$f = \frac{v}{2\left[\sqrt{d_{AF}^2 + (d_{FF'} + d_{Aa'})^2} - \sqrt{d_{AF}^2 + (d_{FF'} - d_{Aa})^2}\right]} \quad\Rightarrow\quad f = 762{,}2\ \text{Hz}$$

36 OLIMPIADA ESPAÑOLA DE FÍSICA
FASE DE ARAGÓN


<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p6_f2.png]]
*Schema escenario galleggiante e gradinata*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p8_f3.png]]
*Geometria interferenza due altoparlanti a e a'*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]], [[Thermodynamics]], [[Kinetic Theory]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Superposition Principle (metodo)|Superposition Principle]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Ideal Gas Law (metodo)|Ideal Gas Law]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1JYsFZ8q7JfUgiMR89Ud1kkukswesUpqf/view)


<div class="qlang-split" data-lang="it"></div>

P2. Festival estivo.
Il Festival Internazionale delle Culture o dei Pirinei del Sud si celebra dal 1992 nella regione oscense del
Alto Gállego, in particolare nella località di Lanuza, appartenente al comune di Sallent di Gállego. En
Questo festival lo scenario è galleggiante sopra la palude di Lanuza e il gradorio si trova sul marcia del palude.
Amici che lavoravano all'organizzazione
La mia ultima edizione, sapendo il tuo grande interesse per
La fisica, vogliono che tu li aiuti a capire le cose
che sono emersi preparando i concerti per
che non succederà mai più. Per questo, fanno un
schema di scena e scale. - Cominciamo!
Uno dei primi compiti che hanno fatto è stato sincronizzare i dispositivi audio presenti nella zona di
controlli (punto C) e fondo delle scale (punto F). Per questo, hanno considerato che la velocità di diffusione
il suono in aria è $v = 340\ \text{m/s}$.
a)
Se il suono viene emesso dal punto A, quale ritardo c'è nella ricezione tra i punti C e F?
Alcuni tecnici hanno misurato il ritardo e non hanno ottenuto quel risultato. Quando le chiedo perché, le dico:
Hanno spiegato che la velocità di diffusione del suono in un gas ideale dipende dalla temperatura assoluta
con un'espressione che includa la costante dei gas ideali $R = 8{,}314\ \text{J/mol}\cdot\text{K}$, il coefficiente adiabatico $\gamma$
(dimensionale) e la massa mollare $M$ del gas in kg/mol. Il problema è che i tuoi amici non hanno copiato bene la
dipendenza e non sanno quale delle seguenti espressioni è corretta:

I) $v = \sqrt{\dfrac{\gamma R}{M}}\,\dfrac{1}{\sqrt{T}}$ ii) $v = \sqrt{\dfrac{\gamma R}{M}}\,\dfrac{1}{T}$ iii) $v = \sqrt{\dfrac{\gamma R}{M}}\,\sqrt{T}$ iv) $v = \sqrt{\dfrac{\gamma R}{M}}\,T$

b) Sulla base dell'espressione che gli tecnici hanno indicato.
c)
La prova è stata effettuata a $25\ ^\circ\text{C}$ e, per l'aria, a $\gamma = 1{,}4$ e $M = 28{,}97\ \text{g/mol}$. Che ritardo hanno misurato i tecnici?
Per le prime prove sonore, hanno messo tutti gli altoparlanti, che insieme danno 10 kW di
Potenza di suono, al centro dello scenario (punto A), hanno messo una canzone a potenza piena e hanno misurato il
livello di intensità sonora $\beta$ in punti diversi.
d) La prima misura è stata effettuata al punto F. Supponiamo emissione semisferale, che valore hanno ottenuto?
Il punto successivo in cui volevano misurare il livello di intensità sonora era il punto C, ma i tecnici
Le autorità locali hanno detto che è meglio non avvicinarsi così tanto senza prima ridurre la potenza dei diffusori.
e)
I tecnici hanno dato un buon consiglio? giustifica la tua risposta.
Per il prossimo test, i tuoi amici hanno messo la metà degli altoparlanti a 2,5 metri a destra del punto A.
e l'altra metà 2,5 m a sinistra (punti a e a). In preparazione, hanno erroneamente fatto suonare un tono di
una certa frequenza, di cui sono stati avvertiti da alcuni tecnici che stavano lavorando al punto F.
I tecnici si spostarono fino al punto F, dove smarrirono di sentire il suono anche se il tono continuava a suonare.
f)
Spiega perché i tecnici hanno sentito il tono in F ma hanno smesso di sentirlo spostandosi a F.
g)
Che frequenza di tono hanno fatto suonare per errore?
Dati: area della sfera $S = 4\pi R^2$; minima intensità uditiva $I_0 = 10^{-12}\ \text{W/m}^2$; soglia del dolore $\beta_\text{dolor} = 120\ \text{dB}$.

36 Olimpiadi di fisica spagnoli
Fase di ARAGON
P2. Soluzione
a)
Il suono viene emesso dal punto A e i frunti d'onda si diffondono a velocità costante
$v = 340\ \text{m/s}$ in tutte le direzioni. In particolare, i punti C e F sono allineati a A e separati
una distanza $d_{CF} = 80\ \text{m}$, quindi il ritardo $\Delta t$ tra i due punti è:

$$\Delta t = \frac{d_{CF}}{v} \quad\Rightarrow\quad \Delta t = 235\ \text{ms} \quad (1)$$

b) Usando l'analisi dimensionale possiamo determinare quale delle quattro equazioni è corretta. En el
membro sinistra delle quattro viene mostrata la velocità. Le sue dimensioni fisiche sono

$$[v] = \frac{[L]}{[T]} \quad (2)$$

In tutti i casi nel membro di destra c'è un fattore comune le cui dimensioni sono

$$\left[\sqrt{\frac{\gamma R}{M}}\right] = \frac{[L]}{[T][\Theta]^{1/2}} \quad (3)$$

in cui $[\Theta]$ corrisponde alle dimensioni di temperatura. Per rendere la formula dimensionale
Se la dimensione è corretta, è necessario moltiplicarla per un elemento con dimensioni $[\Theta]^{1/2}$. La Commissione ha pertanto
La soluzione corretta è iii),

$$v = \sqrt{\frac{\gamma R}{M}}\,\sqrt{T} \quad (4)$$

c)
In questo caso, sostituendo i valori di cui all'espressione iii) si ottiene

$$v = 346\ \text{m/s} \quad (5)$$

Il ritardo misurato dai tecnici è quindi

$$\Delta t = 231\ \text{ms} \quad (6)$$

d) La potenza $P$ emessa dagli altoparlanti è distribuita uniformemente su una superficie semisferale,
in altre parole, è uguale a $2\pi R^2$, essendo $R$ la distanza tra il foco di emissione e il punto di interesse. De
In questo modo, il livello di intensità sonora misurato al punto F, situato a $d_{AF} = 110\ \text{m}$ da A, è

$$\beta_F = 10\log\frac{I_F}{I_0} = 10\log\frac{P}{2\pi d_{AF}^2\,I_0} \quad\Rightarrow\quad \beta_F = 111{,}2\ \text{dB} \quad (7)$$

e)
Mantiene l'emissione di 10 kW di potenza in A.
La distanza tra il foco di emissione e il punto di interesse è stata ridotta a $d_{AC} = 30\ \text{m}$, quindi la
l'intensità sarà aumentata e di conseguenza il livello di intensità sonora. Il valore che si
aspettare di misurare in C in queste condizioni è

$$\beta_C = 10\log\frac{I_C}{I_0} = 10\log\frac{P}{2\pi d_{AC}^2\,I_0} \quad\Rightarrow\quad \beta_C = 122{,}5\ \text{dB} \quad (8)$$

Il valore di $\beta_C$ supera i 120 dB che segnano il limite di dolore. Quindi i tecnici hanno dato loro
un consiglio appropriato.
36 Olimpiadi di fisica spagnoli
Fase di ARAGON
f)
Se si separano i diffusori in due gruppi situati a 2,5 m da entrambi i lati di A, si sta creando una
situazione in cui si hanno due emissionari armonici identici e puntuali separati tra loro
Distanza $d = 5\ \text{m}$. Ciascuno di essi emette onde della stessa frequenza e in fase che viaggiano attraverso il
La struttura è stata costruita per la costruzione di una struttura di spazio e che, quando si incontrano, si sovrappongono, producendo un fenomeno di interferenza.
Tale interferenza può essere costruttiva se la differenza di percorsi tra le onde e il
superposizione è pari a un intero multiple di lunghezza d'onda $\lambda$, e distruttiva se la differenza di
i percorsi è uguale a un intero multiplo della lunghezza d'onda più la media di lunghezza d'onda (o di forma
equivalente a un multiplo impar di media lunghezza d'onda).
Il fatto che i tecnici ascoltino il tono in posizione F e non lo ascoltino nel
La differenza di frequenza di un'interferenza di F è che la
La velocità di un'onda di radio è di zero) e in F si produce un'interferenza distruttiva.
g)
Se i tecnici si spostano in parallelo al fondo delle scale e non ascoltano (per la prima volta) il
il tono in F, questo punto corrisponde al primo minimo di interferenza.

Se i due emittenti sono distanti $d_{Aa} = d_{Aa'} = 2{,}5\ \text{m}$ da A, come illustrato nella figura, il loro
Distanza rispetto al punto F è

$$d_{aF'} = \sqrt{d_{AF}^2 + (d_{FF'} - d_{Aa})^2} \quad (9)$$

$$d_{a'F'} = \sqrt{d_{AF}^2 + (d_{FF'} + d_{Aa'})^2} \quad (10)$$

Quindi, la differenza di percorrenza tra le due onde, $\Delta r$, è

$$\Delta r = \left|d_{a'F'} - d_{aF'}\right| \quad (11)$$

Il primo minimo di interferenza si verifica al punto F, quindi la differenza di percorso deve essere
essere uguale a metà lunghezza d'onda,

$$\Delta r = \frac{\lambda}{2} \quad (12)$$

Per un'onda il rapporto tra lunghezza d'onda $\lambda$, frequenza $f$ e velocità di diffusione $v$ è

$$v = \lambda f \quad (13)$$

Combinando le equazioni (9) a (13) si ottiene l'espressione della frequenza di emissione della
onde che producono il primo minimo di interferenza in F,

$$f = \frac{v}{2\left[\sqrt{d_{AF}^2 + (d_{FF'} + d_{Aa'})^2} - \sqrt{d_{AF}^2 + (d_{FF'} - d_{Aa})^2}\right]} \quad\Rightarrow\quad f = 762{,}2\ \text{Hz}$$

36 Olimpiadi di fisica spagnoli
Fase di ARAGON


<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p6_f2.png]]
*Sistema di scenario galleggiante e gradinato*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p8_f3.png]]
*Geometria di interferenza due altoparlanti a e a'*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]], [[Thermodynamics]], [[Kinetic Theory]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Superposition Principle (metodo)|Superposition Principle]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Ideal Gas Law (metodo)|Ideal Gas Law]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1JYsFZ8q7JfUgiMR89Ud1kkukswesUpqf/view)

<div class="qlang-split" data-lang="en"></div>

P2. Summer festival.
The International Festival of Cultures or Southern Pyrenees has been held since 1992 in the Oscense region of the Netherlands.
Alto Gállego, specifically in the town of Lanuza, belonging to the municipality of Sallent de Gállego. En
This festival the stage is floating above the swamp of Lanuza and the gradium is located on the shore of the swamp.
Friends who worked in the organization
I'm aware of your great interest in
Physics, they want you to help them understand things
They came up with the idea of preparing the concerts for
Don't let that happen to you again. For this, they make a
stage layout and stairs. Let's get this started!
One of the first tasks they did was synchronize the sound equipment in the area.
control (point C) and the bottom of the stairs (point F). For this reason, they considered that the rate of spread
the sound in the air is $v = 340\ \text{m/s}$.
a)
If the sound is emitted from point A, what is the delay in reception between points C and F?
Technicians measured that delay and didn't get that result. When I ask them why, they say
They explained that the speed of propagation of sound in an ideal gas depends on the absolute temperature.
with an expression including the ideal gas constant $R = 8{,}314\ \text{J/mol}\cdot\text{K}$, the adiabatic coefficient $\gamma$
(dimensional) and the molar mass $M$ of the gas in kg/mol. The problem is your friends didn't copy it well.
dependence and don't know which of the following is correct:

i) $v = \sqrt{\dfrac{\gamma R}{M}}\,\dfrac{1}{\sqrt{T}}$ ii) $v = \sqrt{\dfrac{\gamma R}{M}}\,\dfrac{1}{T}$ iii) $v = \sqrt{\dfrac{\gamma R}{M}}\,\sqrt{T}$ iv) $v = \sqrt{\dfrac{\gamma R}{M}}\,T$

(b) The reason given by the technicians.
c)
The test was carried out at $25\ ^\circ\text{C}$ and, for air, $\gamma = 1{,}4$ and $M = 28{,}97\ \text{g/mol}$. What delay did the technicians measure?
For the first sound tests all speakers were placed, which together give 10 kW of sound.
The sound power, in the middle of the stage (point A), put a song to full power and measured the
the sound intensity level $\beta$ at different points.
(d) The first measure was taken at point F. Assuming semispheric emission, what value did they get?
The next point where they wanted to measure the sound intensity level was the C point, but technicians
They warned them that it was better not to get too close without first decreasing the power of the speakers.
e)
Did the technicians give you any good advice? Justify your answer.
For the next test, your friends placed half the speakers 2.5 m to the right of point A.
and the other half 2,5 m to its left (points a and a). In preparation, they mistakenly sounded a tone of
A certain frequency, which was warned by technicians working at the F point.
The technicians moved to the F point, where they stopped hearing the sound although the tone was still ringing.
f)
It explains why the technicians heard the tone in F but stopped hearing it when they moved to F.
g)
How often was the tone they made by mistake?
Data: Area of the sphere $S = 4\pi R^2$; minimum audible intensity $I_0 = 10^{-12}\ \text{W/m}^2$; threshold of pain $\beta_\text{dolor} = 120\ \text{dB}$.

36 Spanish Olympics in Physics
The following is the list of the categories of products:
P2. Solution
a)
The sound is emitted from point A and the wavefronts are propagating at a constant speed
$v = 340\ \text{m/s}$ in all directions. In particular, points C and F are aligned with A and separate
a distance $d_{CF} = 80\ \text{m}$, so the delay $\Delta t$ between the two points is:

$$\Delta t = \frac{d_{CF}}{v} \quad\Rightarrow\quad \Delta t = 235\ \text{ms} \quad (1)$$

(b) Using dimensional analysis we can determine which of the four equations is correct. En el
Member left of four shows the speed. Its physical dimensions are

$$[v] = \frac{[L]}{[T]} \quad (2)$$

In all cases in the right member there is a common factor whose dimensions are

$$\left[\sqrt{\frac{\gamma R}{M}}\right] = \frac{[L]}{[T][\Theta]^{1/2}} \quad (3)$$

where $[\Theta]$ corresponds to temperature dimensions. So the formula is dimensional
If the value of the data is correct, it must be multiplied by an element having dimensions $[\Theta]^{1/2}$. The Commission therefore
correct solution is iii),

$$v = \sqrt{\frac{\gamma R}{M}}\,\sqrt{T} \quad (4)$$

c)
In the case indicated, the values given in expression (iii) are replaced by:

$$v = 346\ \text{m/s} \quad (5)$$

The delay measured by technicians is therefore

$$\Delta t = 231\ \text{ms} \quad (6)$$

(d) The $P$ power emitted by the speakers is evenly distributed over a semispherical surface,
i.e. equal to $2\pi R^2$, being $R$ the distance between the emission focus and the point of interest. De
This means that the sound intensity level measured at point F, which is located at a distance $d_{AF} = 110\ \text{m}$ from A, is

$$\beta_F = 10\log\frac{I_F}{I_0} = 10\log\frac{P}{2\pi d_{AF}^2\,I_0} \quad\Rightarrow\quad \beta_F = 111{,}2\ \text{dB} \quad (7)$$

e)
Keeping the output of 10 kW of power in A our friends came close to the C point,
The distance between the issuing focus and the point of interest was reduced to $d_{AC} = 30\ \text{m}$, so that the
The intensity will have increased and consequently the sound intensity level will have increased as well. The value of the
Expect to measure in C under these conditions is

$$\beta_C = 10\log\frac{I_C}{I_0} = 10\log\frac{P}{2\pi d_{AC}^2\,I_0} \quad\Rightarrow\quad \beta_C = 122{,}5\ \text{dB} \quad (8)$$

The value of $\beta_C$ exceeds 120 dB which mark the pain threshold. So the technicians gave them
I'm giving you good advice.
36 Spanish Olympics in Physics
The following is the list of the categories of products:
f)
By separating the speakers into two groups located 2.5 m on either side of A, you are creating a
situation where two identical, spot harmonic emitters are separated from each other
The distance $d = 5\ \text{m}$. Each of them emits waves of the same frequency and phase that travel through the
The two interfaces are superimposed, creating an interference phenomenon.
Such interference can be constructive if the difference in paths travelled by the waves to the
overlapping is equal to an integer multiple of the wavelength $\lambda$, and destructive if the difference of
paths is equal to an integer multiple of the wavelength plus half wavelength (or form
equivalent to an odd multiple of half wavelength).
Therefore, the fact that technicians hear the tone while they are in F and not in the
The difference between the two is that the two components are not in the same position.
The paths between the two waves are zero) and in F there is destructive interference.
g)
If the technicians, moving parallel to the bottom of the stairs, stop hearing (for the first time) the
The first minimum of interference is given by the first point.

If the two emitters are $d_{Aa} = d_{Aa'} = 2{,}5\ \text{m}$ from A, as shown in Figure 1, their
distance from point F is

$$d_{aF'} = \sqrt{d_{AF}^2 + (d_{FF'} - d_{Aa})^2} \quad (9)$$

$$d_{a'F'} = \sqrt{d_{AF}^2 + (d_{FF'} + d_{Aa'})^2} \quad (10)$$

Therefore, the difference in paths travelled by the two waves, $\Delta r$, is

$$\Delta r = \left|d_{a'F'} - d_{aF'}\right| \quad (11)$$

The first minimum of interference occurs at point F, so the difference in paths must be
be equal to half the wavelength,

$$\Delta r = \frac{\lambda}{2} \quad (12)$$

For a wave the ratio of wavelength $\lambda$, frequency $f$ and propagation speed $v$ is

$$v = \lambda f \quad (13)$$

The expression of the emission frequency of the
wave that produces the first minimum interference in F,

$$f = \frac{v}{2\left[\sqrt{d_{AF}^2 + (d_{FF'} + d_{Aa'})^2} - \sqrt{d_{AF}^2 + (d_{FF'} - d_{Aa})^2}\right]} \quad\Rightarrow\quad f = 762{,}2\ \text{Hz}$$

36 Spanish Olympics in Physics
The following is the list of the categories of products:


<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p6_f2.png]]
*Scenario floating and grid pattern*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p8_f3.png]]
*Geometria interferenza due altoparlanti a e a'*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]], [[Thermodynamics]], [[Kinetic Theory]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Superposition Principle (metodo)|Superposition Principle]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Ideal Gas Law (metodo)|Ideal Gas Law]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1JYsFZ8q7JfUgiMR89Ud1kkukswesUpqf/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Spagna 2025 — Quesito 3" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni,object/point-charge"></span>

<div class="qlang-switch" data-default="es"></div>



P3. Líneas de campo electrostático1
Un campo electrostático puede representarse gráficamente mediante sus líneas de fuerza (o de campo).
El número de líneas que “nacen” o “mueren” en una carga es proporcional a la magnitud de dicha carga. (La
expresión matemática de esta idea constituye el teorema de Gauss). El campo eléctrico en cada punto es
tangente a la línea de fuerza que pasa por dicho punto, y su intensidad es proporcional a la densidad de líneas
(número de líneas por unidad de superficie) que hay en su entorno.
En la figura 1 se muestran las líneas de fuerza que describen el campo electrostático generado por dos
cargas puntuales, $q_1$ y $q_2$, separadas una distancia $d$.
a)
Justifica de qué signo es cada una de las cargas.
b)
¿Cuál es su magnitud relativa, $q_1/q_2$?
c)
Razona, con la mayor precisión posible, en qué punto o puntos del plano de la figura 1 el campo
electrostático $\vec{E}$ creado por ambas cargas es nulo.
d)
Determina en qué punto o puntos del plano de dicha figura es nulo el potencial electrostático creado por
las dos cargas.
Considera ahora la distribución de cargas puntuales representada en la figura 2, con $Q_1 = 6\ \mu\text{C}$, $Q_2 = -2\ \mu\text{C}$ y $d = 4\ \text{cm}$.
e)
Calcula el potencial electrostático, $V$, y el campo eléctrico, $\vec{E}$,
en el punto A de la figura, situado a 3 cm de $Q_1$ y a 1 cm de $Q_2$.
f)
Dibuja las líneas de fuerza para esta distribución de cargas.

Dato: $K = \dfrac{1}{4\pi\epsilon_0} = 9\cdot10^9\ \text{N m}^2/\text{C}^2$

1 Este problema se propuso en la Fase de Aragón de la 21 Olimpiada de Física (2010) y está inspirado en uno de los
propuestos en la II OIbF de Oaxtepec (México) en 1997.
A
d
Figura 2
Figura 1
36 OLIMPIADA ESPAÑOLA DE FÍSICA
FASE DE ARAGÓN
Solución P3

a)
Las líneas de campo “nacen” en las cargas positivas (o en el infinito) y “mueren” en las cargas negativas
(o en el infinito). A la vista de la figura 1, deducimos que la carga $q_1$ es positiva y la $q_2$ negativa.
b)
El número de líneas de campo que nacen o mueren en una carga es proporcional a la magnitud de dicha
carga. En la figura 1, vemos que salen 24 líneas de $q_1$ y llegan 8 a $q_2$. Por tanto,

$$\frac{q_1}{q_2} = -3 \quad (1)$$

c)
Para que el campo total $\vec{E}_t = \vec{E}_1 + \vec{E}_2$ creado por ambas
cargas sea nulo ha de cumplirse que, o bien $E_1 = E_2 = 0$, lo
que ocurre en puntos infinitamente alejados de las cargas, o
bien $\vec{E}_1 = -\vec{E}_2$. En este último caso ambos vectores tienen
el mismo módulo, la misma dirección y sentidos opuestos. Por tanto, como $q_1 > q_2$, $\vec{E}$ sólo puede
anularse en un punto como el P de la figura 3, alineado con las cargas y más lejano de 1 que de 2. La
igualdad de módulos de los dos campos exige que

$$K\frac{q_1}{r_1^2} = K\frac{|q_2|}{r_2^2} \quad\to\quad \frac{3}{(d + r_2)^2} = \frac{1}{r_2^2}$$

Operando, se obtiene que la distancia $r_2$ entre $q_2$ y P es

$$r_2 = \frac{1 + \sqrt{3}}{2}\,d = 1{,}366\,d$$

d) Para que el potencial total $V_t = V_1 + V_2$ creado por ambas sea nulo ha
de cumplirse que, o bien $V_1 = V_2 = 0$, lo que ocurre en puntos
infinitamente alejados de las cargas, o bien $V_1 = -V_2$.
Teniendo en cuenta (1) y con la notación de la figura 4, para que el
potencial en el punto P(x, y) sea nulo se debe cumplir que

$$K\frac{q_1}{r_1} = K\frac{|q_2|}{r_2} \quad\Rightarrow\quad \frac{3}{\sqrt{x^2 + y^2}} = \frac{1}{\sqrt{(d - x)^2 + y^2}}$$

Elevando al cuadrado y desarrollando se llega a la expresión

$$\left(x - \frac{9}{8}d\right)^2 + y^2 = \left(\frac{3d}{8}\right)^2$$

que es la ecuación de una circunferencia con centro $C\left(\dfrac{9d}{8}, 0\right)$ y radio $R = \dfrac{3d}{8}$.

En particular, hay dos puntos alineados con las cargas en los que el potencial es nulo (puntos A y B en
la figura 4), situados respecto a $q_1$ en

$$x_A = \frac{9d}{8} - \frac{3d}{8} = \frac{3d}{4} \qquad\text{y}\qquad x_B = \frac{9d}{8} + \frac{3d}{8} = \frac{3d}{2}$$

Figura 3
Figura 4
36 OLIMPIADA ESPAÑOLA DE FÍSICA
FASE DE ARAGÓN
e)
Nótese que, con los datos numéricos de este apartado, $Q_1/Q_2 = -3$, de forma que seguimos con la
misma distribución electrostática de los apartados anteriores. En particular, el punto A indicado en el
enunciado está situado a una distancia $x_A = 3\ \text{cm} = 3d/4$ de $Q_1$, en el que acabamos de ver que el
potencial es nulo. Esto puede comprobarse numéricamente de forma inmediata

$$V_t = V_1 + V_2 = 9\cdot10^9\left(\frac{6\cdot10^{-6}}{3\cdot10^{-2}} + \frac{-2\cdot10^{-6}}{10^{-2}}\right) = 0$$

El campo electrostático creado por las dos cargas en A es

$$\vec{E}_t = \vec{E}_1 + \vec{E}_2$$

Los vectores $\vec{E}_1$ y $\vec{E}_2$ tienen la misma dirección y sentido
por lo que $\vec{E}_t$ se dirige de la carga positiva hacia la negativa
(ver figura 5). Su módulo es

$$E_t = E_1 + E_2 = 9\cdot10^9\left(\frac{6\cdot10^{-6}}{9\cdot10^{-4}} + \frac{2\cdot10^{-6}}{10^{-4}}\right) = 2{,}4\cdot10^8\ \text{N/C}$$

f)
Las líneas de fuerza creadas por estas dos cargas puntuales son las de la figura 1 del enunciado.

Figura 5


<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p9_f4.png]]
*Linee di campo elettrostatico due cariche (Figura 1)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p9_f5.png]]
*Posizioni cariche Q1, Q2 e punto A (Figura 2)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p10_f6.png]]
*Punto P campo nullo tra le cariche (Figura 3)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p10_f7.png]]
*Sistema coordinate potenziale nullo (Figura 4)*
<!--fig:end-->

**Topic:** [[Electrostatics]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Gauss's Law (metodo)|Gauss's Law]], [[Electric Potential Method (metodo)|Electric Potential Method]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Point Charge (object)|Point Charge]]
**Fonte:** [Testo (PDF) — p.9](https://drive.google.com/file/d/1JYsFZ8q7JfUgiMR89Ud1kkukswesUpqf/view)


<div class="qlang-split" data-lang="it"></div>

P3. Linee di campo elettrostatico1
Un campo elettrostatico può essere rappresentato graficamente attraverso le sue linee di forza (o di campo).
Il numero di linee che nascono o muoiono in una carica è proporzionale alla grandezza di tale carica. (La
L'espressione matematica di questa idea costituisce il teorema di Gauss). Il campo elettrico in ogni punto è
tangente alla linea di forza che attraversa tale punto, e la sua intensità è proporzionale alla densità di linee
(numero di linee per unità di superficie) che vi sono nel vostro ambiente.
La figura 1 mostra le linee di forza che descrivono il campo elettrostatico generato da due
carichi puntati, $q_1$ e $q_2$, separati da una distanza $d$.
a)
Esamina di che segno sono le cariche.
b)
Qual è la sua magnitudine relativa, $q_1/q_2$?
c)
Raziona, con la massima precisione possibile, in quale punto o punti del piano di figura 1 il campo
l'elettrostatico $\vec{E}$ creato da entrambe le cariche è nullo.
d)
Determina a quale punto o punti del piano di tale figura il potenziale elettrostatico creato da
Le due cariche.
Considera ora la distribuzione di carichi puntuali rappresentata nella figura 2, con $Q_1 = 6\ \mu\text{C}$, $Q_2 = -2\ \mu\text{C}$ e $d = 4\ \text{cm}$.
e)
Calcola il potenziale elettrostatico, $V$, e il campo elettrico, $\vec{E}$,
nel punto A della figura, situato a 3 cm di $Q_1$ e a 1 cm di $Q_2$.
f)
Disegna le linee di forza per questa distribuzione di cariche.

Data: $K = \dfrac{1}{4\pi\epsilon_0} = 9\cdot10^9\ \text{N m}^2/\text{C}^2$

1 Questo problema è stato proposto nella Fase di Aragone delle 21 Olimpiadi di Fisica (2010) ed è ispirato a uno dei
Proposte all'OIbF II di Oaxtepec (Messico) nel 1997.
A
d
Figura 2
Figura 1
36 Olimpiadi di fisica spagnoli
Fase di ARAGON
Soluzione P3

a)
Le linee di campo nascono nelle cariche positive (o infinite) e muoiono nelle cariche negative.
(o all'infinito). Dalla figura 1 si deduce che la carica $q_1$ è positiva e la carica $q_2$ negativa.
b)
Il numero di linee di campo che nascono o muoiono in un carico è proporzionale alla grandezza di tale carico.
carica. Nella figura 1, vediamo che 24 linee usciranno da $q_1$ e arrivano a 8 da $q_2$. Quindi,

$$\frac{q_1}{q_2} = -3 \quad (1)$$

c)
Per il campo totale $\vec{E}_t = \vec{E}_1 + \vec{E}_2$ creato da entrambi
cargas sea nulo ha de cumplirse que, o bien $E_1 = E_2 = 0$, lo
che si verifica in punti infinitamente lontani dai carichi; o
Bene $\vec{E}_1 = -\vec{E}_2$. In questo ultimo caso entrambi i vettori hanno
lo stesso modulo, la stessa direzione e sentimenti opposti. Quindi, come $q_1 > q_2$, $\vec{E}$ può solo
annullare in un punto come il P di figura 3, allineato con le cariche e più lontano da 1 che da 2. La
l'equità di moduli dei due campi richiede che

$$K\frac{q_1}{r_1^2} = K\frac{|q_2|}{r_2^2} \quad\to\quad \frac{3}{(d + r_2)^2} = \frac{1}{r_2^2}$$

Operando, si ottiene che la distanza $r_2$ tra $q_2$ e P è

$$r_2 = \frac{1 + \sqrt{3}}{2}\,d = 1{,}366\,d$$

d) Per ridurre il totale di $V_t = V_1 + V_2$ creato da entrambi a zero
di soddisfazione che, o $V_1 = V_2 = 0$, ciò che accade in punti
infinitamente alejados de las cargas, o bien $V_1 = -V_2$.
Considerando (1) e con la notazione di figura 4,
Potenzialmente, il punto P(x, e) è nullo, deve essere soddisfatto che

$$K\frac{q_1}{r_1} = K\frac{|q_2|}{r_2} \quad\Rightarrow\quad \frac{3}{\sqrt{x^2 + y^2}} = \frac{1}{\sqrt{(d - x)^2 + y^2}}$$

E' un'espressione che si sviluppa.

$$\left(x - \frac{9}{8}d\right)^2 + y^2 = \left(\frac{3d}{8}\right)^2$$

che è l'equazione di una circonferenza con centro $C\left(\dfrac{9d}{8}, 0\right)$ e radio $R = \dfrac{3d}{8}$.

In particolare, ci sono due punti allineati alle cariche in cui il potenziale è zero (punti A e B in
Fig. 4), situati rispetto a $q_1$ in

$$x_A = \frac{9d}{8} - \frac{3d}{8} = \frac{3d}{4} \qquad\text{y}\qquad x_B = \frac{9d}{8} + \frac{3d}{8} = \frac{3d}{2}$$

Figura 3
Figura 4
36 Olimpiadi di fisica spagnoli
Fase di ARAGON
e)
Si noti che, con i dati numerici di questo paragrafo, $Q_1/Q_2 = -3$, così che si continua con la
la stessa distribuzione elettrostatica di cui ai paragrafi precedenti. In particolare, il punto A del regolamento (CEE) n.
La data di riferimento è stata data da un'intervallo di $x_A = 3\ \text{cm} = 3d/4$ di $Q_1$, in cui abbiamo appena visto che il
Potenziale è nulla. Questo può essere verificato numericamente immediatamente.

$$V_t = V_1 + V_2 = 9\cdot10^9\left(\frac{6\cdot10^{-6}}{3\cdot10^{-2}} + \frac{-2\cdot10^{-6}}{10^{-2}}\right) = 0$$

Il campo elettrostatico creato dalle due cariche in A è

$$\vec{E}_t = \vec{E}_1 + \vec{E}_2$$

I vettori $\vec{E}_1$ e $\vec{E}_2$ hanno la stessa direzione e senso
il cui $\vec{E}_t$ va dal carico positivo al negativo
(vedi figura 5). Il suo modulo è

$$E_t = E_1 + E_2 = 9\cdot10^9\left(\frac{6\cdot10^{-6}}{9\cdot10^{-4}} + \frac{2\cdot10^{-6}}{10^{-4}}\right) = 2{,}4\cdot10^8\ \text{N/C}$$

f)
Le linee di forza create da queste due cariche puntate sono quelle della figura 1 della frase.

Figura 5


<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p9_f4.png]]
*Linee di campo elettrostatico due cariche (Figura 1) *
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p9_f5.png]]
*Posizioni cariche Q1, Q2 e punto A (Figura 2)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p10_f6.png]]
*Punto P campo nullo tra le cariche (Figura 3) *
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p10_f7.png]]
*Sistema coordinato potenziale zero (Figura 4) *
<!--fig:end-->

**Topic:** [[Electrostatics]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Gauss's Law (metodo)|Gauss's Law]], [[Electric Potential Method (metodo)|Electric Potential Method]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Point Charge (object)|Point Charge]]
**Fonte:** [Testo (PDF) — p.9](https://drive.google.com/file/d/1JYsFZ8q7JfUgiMR89Ud1kkukswesUpqf/view)

<div class="qlang-split" data-lang="en"></div>

P3. Electrostatic field lines1
An electrostatic field can be represented graphically by its force (or field) lines.
The number of lines that nath or death in a load is proportional to the magnitude of that load. (La
The mathematical expression of this idea is Gauss's theorem). The electric field at each point is
tangent to the line of force passing through that point, and its intensity is proportional to the density of lines
(number of lines per unit area) that are in your environment.
Figure 1 shows the lines of force describing the electrostatic field generated by two
cargas puntuales, $q_1$ y $q_2$, separadas una distancia $d$.
a)
It justifies what sign each of the charges is.
b)
What is its relative magnitude, $q_1/q_2$?
c)
Raises, as accurately as possible, at which point or points in the plane of Figure 1 the field is
The electrostatic $\vec{E}$ created by both charges is zero.
d)
Determines at which point or points in the plane of the given figure the electrostatic potential created by the
the two charges.
Consider now the spot load distribution as shown in Figure 2, with $Q_1 = 6\ \mu\text{C}$, $Q_2 = -2\ \mu\text{C}$ and $d = 4\ \text{cm}$.
e)
Calculates the electrostatic potential, $V$, and the electric field, $\vec{E}$,
in point A of the figure, located 3 cm from $Q_1$ and 1 cm from $Q_2$.
f)
Draw the lines of force for this load distribution.

Dato: $K = \dfrac{1}{4\pi\epsilon_0} = 9\cdot10^9\ \text{N m}^2/\text{C}^2$

1 This problem was proposed in the Aragon Phase of the 21st Physics Olympiad (2010) and is inspired by one of the
The Commission has also adopted a number of proposals for the second ILOF in Oaxtepec, Mexico, in 1997.
A
d
Figure 2
Figure 1
36 Spanish Olympics in Physics
The following is the list of the categories of products:
Solution P3

a)
Field lines are born on positive (or infinite) charges and die on negative charges.
(or in infinity). From the figure 1, we deduce that the charge $q_1$ is positive and the charge $q_2$ is negative.
b)
The number of field lines born or dying on a load is proportional to the magnitude of the load.
load. In Figure 1, we see that 24 lines come out of $q_1$ and get 8 to $q_2$. So, what?

$$\frac{q_1}{q_2} = -3 \quad (1)$$

c)
So that the total field $\vec{E}_t = \vec{E}_1 + \vec{E}_2$ created by both
cargas sea nulo ha de cumplirse que, o bien $E_1 = E_2 = 0$, lo
occurring at points infinitely far from the loads; or
bien $\vec{E}_1 = -\vec{E}_2$. In the latter case, both vectors have
The same module, the same direction and opposite senses. Therefore, as $q_1 > q_2$, $\vec{E}$ can only be
be cancelled at a point such as P in Figure 3, aligned with the loads and further away from 1 than 2. La
The two fields of modules equality requires that

$$K\frac{q_1}{r_1^2} = K\frac{|q_2|}{r_2^2} \quad\to\quad \frac{3}{(d + r_2)^2} = \frac{1}{r_2^2}$$

Operating, the distance $r_2$ between $q_2$ and P is obtained

$$r_2 = \frac{1 + \sqrt{3}}{2}\,d = 1{,}366\,d$$

(d) For the total potential $V_t = V_1 + V_2$ created by both to be zero,
de cumplirse que, o bien $V_1 = V_2 = 0$, lo que ocurre en puntos
infinitamente alejados de las cargas, o bien $V_1 = -V_2$.
Having regard to point (1) and under the notation in figure 4,
potential at point P(x, and) is zero must be met that

$$K\frac{q_1}{r_1} = K\frac{|q_2|}{r_2} \quad\Rightarrow\quad \frac{3}{\sqrt{x^2 + y^2}} = \frac{1}{\sqrt{(d - x)^2 + y^2}}$$

Raising the square and developing you get to the expression

$$\left(x - \frac{9}{8}d\right)^2 + y^2 = \left(\frac{3d}{8}\right)^2$$

which is the equation of a circle with center $C\left(\dfrac{9d}{8}, 0\right)$ and radius $R = \dfrac{3d}{8}$.

In particular, there are two points aligned with loads where the potential is zero (points A and B in the
Figure 4), located with respect to $q_1$ in

$$x_A = \frac{9d}{8} - \frac{3d}{8} = \frac{3d}{4} \qquad\text{y}\qquad x_B = \frac{9d}{8} + \frac{3d}{8} = \frac{3d}{2}$$

Figure 3
Figure 4
36 Spanish Olympics in Physics
The following is the list of the categories of products:
e)
Please note that, with the numerical data in this section, $Q_1/Q_2 = -3$, so that we continue with the
the same electrostatic distribution as in the previous paragraphs. In particular, point A of the
enunciado está situado a una distancia $x_A = 3\ \text{cm} = 3d/4$ de $Q_1$, en el que acabamos de ver que el
The potential is zero. This can be numerically verified immediately.

$$V_t = V_1 + V_2 = 9\cdot10^9\left(\frac{6\cdot10^{-6}}{3\cdot10^{-2}} + \frac{-2\cdot10^{-6}}{10^{-2}}\right) = 0$$

The electrostatic field created by the two charges in A is

$$\vec{E}_t = \vec{E}_1 + \vec{E}_2$$

The vectors $\vec{E}_1$ and $\vec{E}_2$ have the same direction and direction
so $\vec{E}_t$ is directed from the positive charge to the negative charge
(see figure 5). Your module is

$$E_t = E_1 + E_2 = 9\cdot10^9\left(\frac{6\cdot10^{-6}}{9\cdot10^{-4}} + \frac{2\cdot10^{-6}}{10^{-4}}\right) = 2{,}4\cdot10^8\ \text{N/C}$$

f)
The force lines created by these two point loads are those in figure 1 of the statement.

Figure 5


<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p9_f4.png]]
*Linee di campo elettrostatico due cariche (Figura 1)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p9_f5.png]]
*Posizioni cariche Q1, Q2 e punto A (Figura 2)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p10_f6.png]]
*Punto P campo nullo tra le cariche (Figura 3)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p10_f7.png]]
*Sistema coordinate potenziale nullo (Figura 4)*
<!--fig:end-->

**Topic:** [[Electrostatics]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Gauss's Law (metodo)|Gauss's Law]], [[Electric Potential Method (metodo)|Electric Potential Method]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Point Charge (object)|Point Charge]]
**Fonte:** [Testo (PDF) — p.9](https://drive.google.com/file/d/1JYsFZ8q7JfUgiMR89Ud1kkukswesUpqf/view)
