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

P1. Gravitational Slingshot toward Jupiter

Gravitational maneuvers, also known as slingshots, are fundamental techniques in space exploration used to increase a spacecraft's speed without requiring additional fuel. By passing close to a planet, a spacecraft can exploit the planet’s gravity to gain momentum and alter its trajectory, thereby enabling it to reach its destination more energy-efficiently.

Such maneuvers have been employed in space missions such as the Voyager probes or Juice (Jupiter Icy Moons Explorer), and are essential for traveling to distant destinations in the Solar System without relying solely on the spacecraft’s own fuel.

In this problem, we consider a space probe launched from Earth with the mission of reaching Jupiter. To save fuel, it uses a gravitational assist maneuver by passing near Venus.

Assume that the probe (mass $m$) begins its motion toward Venus at point A with a velocity $v_0$ relative to the Sun. Also assume that Venus (mass $M_V$) orbits the Sun with a velocity $v_V$, and that the initial direction of the probe’s velocity relative to the Sun before the maneuver is the same as Venus's (see Figure 1). Let $d$ be the minimum distance from the center of Venus during the gravitational assist maneuver.

a)
Determine the velocity relative to Venus that the probe achieves at points A, B, and C.
b) Draw the approximate trajectory of the probe in Venus's reference frame during the maneuver.
After the maneuver, the probe gains relative velocity with respect to the Sun due to the "gravitational assist" provided by Venus and experiences a change in its trajectory direction.

c)
Calculate the probe’s velocity relative to the Sun at point C.
Assume that, after this maneuver, the probe follows a straight-line trajectory toward Jupiter, which is located at a distance $d_{V\text{-}J}$ from Venus at that moment.

d)
Calculate the travel time of the probe from Venus to Jupiter. What is the percentage reduction in travel time due to the gravitational maneuver at Venus?

Due to the gravitational influence of the Sun and other planets, it is actually very difficult for the probe to maintain a perfectly straight-line trajectory. Suppose a deviation in its path toward Jupiter is detected, and to correct this deviation, the propulsion system performs an adjustment that applies a thrust perpendicular to the current direction of motion, providing a lateral velocity increment $\Delta v$.

e)
Calculate the change in kinetic energy of the probe due to this impulse. Compare this energy with the gain in kinetic energy obtained from the gravitational maneuver at Venus.

36th SPANISH PHYSICS OLYMPIAD
ARAGON REGIONAL PHASE

Consider that the impulse is provided by a propulsion system using a chemical fuel (propellant) delivering 25 MJ/kg, with an efficiency of 85% in energy conversion.

f)
Calculate the amount of fuel required to achieve the lateral velocity increment $\Delta v$.
Compare this with the amount of fuel that would have been needed to achieve the lateral velocity increment provided by the gravitational assist maneuver.

Data:
Universal gravitational constant
Mass of the probe
Initial velocity of the probe relative to the Sun
Mass of Venus
Minimum distance from the center of Venus
Velocity of Venus relative to the Sun
Distance between Venus and Jupiter
Lateral velocity increment of the probe

$G = 6{,}67\times10^{-11}\ \text{Nm}^2\text{kg}^{-2}$
$m = 5000\ \text{kg}$
$v_0 = 10\ \text{km s}^{-1}$
$M_V = 4{,}87\times10^{24}\ \text{kg}$
$d = 1{,}10\times10^7\ \text{m}$
$v_V = 35\ \text{km s}^{-1}$
$d_{V\text{-}J} = 6{,}30\times10^{11}\ \text{m}$
$\Delta v = 0{,}2\ \text{km s}^{-1}$

36th SPANISH PHYSICS OLYMPIAD
ARAGON REGIONAL PHASE

P1. Solution a)
Before the maneuver, the probe approaches Venus with velocity $\vec{v}_0$ relative to the Sun. In turn,
Venus approaches the probe with velocity $\vec{v}_V$ relative to the Sun. Therefore, from Venus's reference frame, the probe approaches at point A with velocity $\vec{v}_A$ given by

$$\vec{v}_A = \vec{v}_0 - \vec{v}_V \quad\Rightarrow\quad v_A = v_0 + v_V \quad\Rightarrow\quad v_A = 45\ \text{km/s} \quad (1)$$

To compute the probe's velocity relative to Venus at point B, $v_B$, we apply the principle of conservation of mechanical energy. The probe approaches with velocity $v_A$ from a point very far away, where its potential energy is zero; thus:

$$E_{cA} = E_{cB} + E_{pB} \quad\Rightarrow\quad \tfrac{1}{2}mv_A^2 = \tfrac{1}{2}mv_B^2 - G\frac{M_V m}{d}, \quad (2)$$

from which we can solve for $v_B$,

$$v_B = \sqrt{v_A^2 + \frac{2GM_V}{d}} = \sqrt{(45\times10^3)^2 + \frac{2\times6{,}67\times10^{-11}\times4{,}87\times10^{24}}{1{,}10\times10^7}} \quad\Rightarrow\quad v_B = 45{,}7\ \text{km/s}. \quad (3)$$

After the maneuver, when the probe leaves Venus's gravitational field at point C, its potential energy again becomes zero, so its kinetic energy returns to the value it had before interacting with Venus. That is, the probe's velocity relative to Venus at point C, $v_C$, is

$$v_C = v_A \quad\Rightarrow\quad v_C = 45\ \text{km/s} \quad (4)$$

b) Since at a very large distance from Venus the probe has velocity, its mechanical energy is positive; therefore, the probe will follow a hyperbolic trajectory, as shown in Figure 2. At a large distance from Venus, the initial and final velocities will be parallel but opposite in direction—approaching Venus in the first case, and receding from Venus in the second.

c)
To compute the probe's initial velocity relative to Venus, we subtracted vectorially Venus’s velocity. Therefore, to compute the probe's final velocity relative to the Sun, we must reverse this transformation by vectorially adding Venus’s velocity. In this case, both Venus and the probe move in the same direction; thus, the magnitude of the final velocity will be the sum of both,

$$\vec{v}_f = \vec{v}_C + \vec{v}_V \quad\Rightarrow\quad v_f = v_C + v_V \quad\Rightarrow\quad v_f = 80\ \text{km/s} \quad (5)$$

d) The travel time from Venus to Jupiter is

$$t_{\text{post-maniobra}} = \frac{d_{V\text{-}J}}{v_f} = \frac{6{,}3\times10^{11}}{80\times10^3} \quad\Rightarrow\quad t_{\text{post-maniobra}} = 7{,}87\times10^6\ \text{s} = 91{,}1\ \text{días} \quad (6)$$

If, instead of the gravitational maneuver, the probe had traveled with initial velocity $v_0$, the time it would have taken to reach Jupiter would be

$$t_{\text{sin maniobra}} = \frac{d_{V\text{-}J}}{v_0} = \frac{6{,}3\times10^{11}}{10\times10^3} \quad\Rightarrow\quad t_{\text{sin maniobra}} = 6{,}30\times10^6\ \text{s} = 729{,}2\ \text{días} \quad (7)$$

Figure 2
36 SPANISH PHYSICS OLYMPIAD
ARAGON REGIONAL ROUND

Therefore, the percentage reduction in travel time due to the gravitational maneuver at Venus is

$$\text{Reducción}(\%) = \left(1 - \frac{t_{\text{post-maniobra}}}{t_{\text{sin maniobra}}}\right)\times100 \quad\Rightarrow\quad \text{Reducción}(\%) = 87\ \% \quad (8)$$

e)
Since the velocity increment $\Delta v$ occurs in a direction perpendicular to the probe's trajectory, the magnitude of the velocity vector after the propulsion maneuver will be

$$v^2 = v_f^2 + \Delta v^2 \quad (9)$$

thus, the change in kinetic energy during the maneuver is

$$\Delta E_c = \tfrac{1}{2}m\Delta v^2 = \tfrac{1}{2}\,5000\times(0{,}2\times10^3)^2 \quad\Rightarrow\quad \Delta E_c = 1{,}00\times10^8\ \text{J} \quad (10)$$

The change in kinetic energy achieved after the gravitational maneuver is

$$E_{cf} - E_{c0} = \tfrac{1}{2}mv_f^2 - \tfrac{1}{2}mv_0^2 = \tfrac{1}{2}\,5000\times\left[(80\times10^3)^2 - (10\times10^3)^2\right] \quad\Rightarrow\quad E_{cf} - E_{c0} = 1{,}58\times10^{13}\ \text{J} \quad (11)$$

Therefore, the propulsion maneuver requires only 0.0006% of the kinetic energy gained through the gravitational maneuver, demonstrating that gravitational maneuvers are extraordinarily efficient compared to propulsion-based adjustments.

f)
To calculate the total energy that must be supplied by the fuel, it should be noted that the total energy required is greater than the change in kinetic energy due to the propulsion system's efficiency $\eta$. The amount of fuel required will be

$$m_{\text{combustible}} = \frac{\Delta E_c/\eta}{E_{\text{combustible}}} = \frac{1{,}00\times10^8\ /\ 0{,}85}{25\times10^6} \quad\Rightarrow\quad m_{\text{combustible}} = 4{,}71\ \text{kg} \quad (12)$$

The amount of fuel needed to achieve the velocity increment provided by the gravitational assist maneuver would have been

$$m'_{\text{combustible}} = \frac{(E_{cf} - E_{c0})/\eta}{E_{\text{combustible}}} = \frac{1{,}58\times10^{13}\ /\ 0{,}85}{25\times10^6} \quad\Rightarrow\quad m'_{\text{combustible}} = 7{,}41\times10^5\ \text{kg} = 741\ \text{t} \quad (13)$$

36 SPANISH PHYSICS OLYMPIAD
ARAGON REGIONAL ROUND

<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p2_f1.png]]
*Gravitational slingshot maneuver around Venus*
<!--fig:end-->


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

Il Festival Internazionale delle Culture o Pirinei Sud si svolge dal 1992 nella comarca aragonese dell'Alto Gállego, precisamente nel paese di Lanuza, appartenente al comune di Sallent de Gállego. A questo festival il palco è galleggiante sul lago artificiale di Lanuza e i posti a sedere si trovano sulla riva del lago.

Alcuni amici che hanno lavorato all'organizzazione della scorsa edizione, conoscendo il tuo grande interesse per la fisica, vorrebbero che li aiutassi a capire alcune cose che si sono presentate preparando i concerti, in modo da non ripetere gli stessi errori. A tale scopo, hanno realizzato uno schizzo del palco e delle gradinate. Iniziamo!

Una delle prime attività svolte è stata la sincronizzazione degli impianti audio presenti nella zona di controllo (punto C) e all'estremità delle gradinate (punto F). A tale scopo, hanno considerato che la velocità di propagazione del suono nell'aria è $v = 340\ \text{m/s}$.

a)
Se il suono viene emesso dal punto A, quale ritardo c'è nella ricezione tra i punti C e F?

Alcuni tecnici hanno misurato questo ritardo e non hanno ottenuto quel risultato. Al chiedere spiegazioni, ci hanno detto che la velocità di propagazione del suono in un gas ideale dipende dalla temperatura assoluta secondo un'espressione che include la costante dei gas ideali $R = 8{,}314\ \text{J/mol}\cdot\text{K}$, il coefficiente adiabatico $\gamma$ (adimensionale) e la massa molare $M$ del gas in kg/mol. Il problema è che i tuoi amici non hanno copiato correttamente la dipendenza e non sanno quale delle seguenti espressioni sia quella corretta:

i) $v = \sqrt{\dfrac{\gamma R}{M}}\,\dfrac{1}{\sqrt{T}}$ ii) $v = \sqrt{\dfrac{\gamma R}{M}}\,\dfrac{1}{T}$ iii) $v = \sqrt{\dfrac{\gamma R}{M}}\,\sqrt{T}$ iv) $v = \sqrt{\dfrac{\gamma R}{M}}\,T$

b) Spiega qual è l'espressione che ti hanno indicato gli addetti.

c) L’esperimento è stato effettuato a $25\ ^\circ\text{C}$ e, per l’aria, $\gamma = 1{,}4$ e $M = 28{,}97\ \text{g/mol}$. Quale ritardo hanno misurato gli addetti?

Per le prime prove acustiche, hanno collocato tutti gli altoparlanti, che insieme forniscono 10 kW di potenza acustica, al centro del palcoscenico (punto A), hanno messo una canzone a massimo volume e misurato il livello di intensità sonora $\beta$ in diversi punti.

d) La prima misura è stata effettuata nel punto F. Supponendo una emissione semisferica, quale valore hanno ottenuto?

Il punto successivo in cui volevano misurare il livello di intensità sonora era il punto C, ma gli addetti li hanno avvertiti che sarebbe stato meglio non avvicinarsi troppo senza prima ridurre la potenza emessa dagli altoparlanti.

e) Gli addetti hanno dato un buon consiglio? Giustifica la tua risposta.

Per il successivo esperimento, i tuoi amici hanno collocato metà degli altoparlanti a 2,5 m alla destra del punto A e l’altra metà a 2,5 m alla sua sinistra (punti a e a’). Durante i preparativi, per errore hanno fatto suonare un tono di una certa frequenza, del quale sono stati avvertiti da alcuni addetti che lavoravano nel punto F.

Gli addetti si sono spostati fino al punto F’, dove hanno smesso di sentire il suono anche se il tono continuava a essere emesso.

f) Spiega perché gli addetti hanno sentito il tono in F ma hanno smesso di sentirlo spostandosi in F’.

g) Di quale frequenza era il tono che è stato fatto suonare per errore?

Dati: Area della sfera $S = 4\pi R^2$; intensità minima udibile $I_0 = 10^{-12}\ \text{W/m}^2$; soglia del dolore $\beta_\text{dolor} = 120\ \text{dB}$.

36 OLIMPIADA SPAGNOLA DI FISICA
FASE DELL'ARAGONA
P2. Soluzione a)
Il suono viene emesso dal punto A e i fronti d'onda si propagano con velocità costante $v = 340\ \text{m/s}$ in tutte le direzioni. In particolare, i punti C e F sono allineati con A e separati da una distanza $d_{CF} = 80\ \text{m}$, quindi il ritardo $\Delta t$ tra i due punti è:

$$\Delta t = \frac{d_{CF}}{v} \quad\Rightarrow\quad \Delta t = 235\ \text{ms} \quad (1)$$

b) Utilizzando l'analisi dimensionale possiamo determinare quale delle quattro equazioni è corretta. Nel membro di sinistra delle quattro compare la velocità. Le sue dimensioni fisiche sono

$$[v] = \frac{[L]}{[T]} \quad (2)$$

In tutti i casi, nel membro di destra esiste un fattore comune le cui dimensioni sono

$$\left[\sqrt{\frac{\gamma R}{M}}\right] = \frac{[L]}{[T][\Theta]^{1/2}} \quad (3)$$

dove $[\Theta]$ corrisponde alle dimensioni della temperatura. Affinché la formula sia dimensionalmente corretta, bisogna moltiplicarla per un elemento che abbia come dimensioni $[\Theta]^{1/2}$. Pertanto, la soluzione corretta è la iii),

$$v = \sqrt{\frac{\gamma R}{M}}\,\sqrt{T} \quad (4)$$

c)
Nel caso indicato, sostituendo i valori dati nell'espressione iii) si ottiene

$$v = 346\ \text{m/s} \quad (5)$$

Di conseguenza, il ritardo misurato dai tecnici è

$$\Delta t = 231\ \text{ms} \quad (6)$$

d) La potenza $P$ emessa dagli altoparlanti si distribuisce in modo uniforme su una superficie semisferica, cioè pari a $2\pi R^2$, dove $R$ è la distanza tra il punto emittente e il punto di interesse. In questo modo, il livello di intensità sonora misurato nel punto F, che si trova a una distanza $d_{AF} = 110\ \text{m}$ da A è

$$\beta_F = 10\log\frac{I_F}{I_0} = 10\log\frac{P}{2\pi d_{AF}^2\,I_0} \quad\Rightarrow\quad \beta_F = 111{,}2\ \text{dB} \quad (7)$$

e) Mantenendo la emissione di 10 kW di potenza in A, i nostri amici si sono avvicinati al punto C, in modo che la distanza tra il foco emittente e il punto di interesse si è ridotta a $d_{AC} = 30\ \text{m}$, per cui l'intensità sarà aumentata e di conseguenza anche il livello di intensità sonora. Il valore che ci si aspetta misurare in C nelle condizioni date è

$$\beta_C = 10\log\frac{I_C}{I_0} = 10\log\frac{P}{2\pi d_{AC}^2\,I_0} \quad\Rightarrow\quad \beta_C = 122{,}5\ \text{dB} \quad (8)$$

Il valore di $\beta_C$ supera i 120 dB indicati dal limite del dolore. Pertanto, gli addetti hanno dato un consiglio corretto.

36 OLIMPIADA ESPAÑOLA DE FÍSICA
FASE DI ARAGÓN f)
Alla separazione degli altoparlanti in due gruppi posti a 2,5 m da entrambi i lati di A, si crea una situazione in cui sono presenti due sorgenti puntiformi armoniche identiche distanti tra loro una distanza $d = 5\ \text{m}$. Ognuna di esse emette onde della stessa frequenza e in fase che si propagano nello spazio e, incontrandosi, si sovrappongono, producendosi un fenomeno di interferenza.

Tale interferenza può essere costruttiva se la differenza dei percorsi percorsi dalle onde al sovrapporsi è uguale a un multiplo intero della lunghezza d'onda $\lambda$, e distruttiva se la differenza dei percorsi è uguale a un multiplo intero della lunghezza d'onda più metà lunghezza d'onda (oppure, in modo equivalente, uguale a un multiplo dispari di metà lunghezza d'onda).

Pertanto, il fatto che gli addetti abbiano sentito il tono quando si trovavano in F e non lo abbiano sentito quando si trovavano in F’ dipende dal fatto che in F si verifica un'interferenza costruttiva (la differenza dei percorsi tra le due onde è nulla) e in F’ si verifica un'interferenza distruttiva.

g)
Se gli addetti, spostandosi parallelamente al fondo delle gradinate, smettono di sentire (per la prima volta) il tono in F’, questo punto corrisponde al primo minimo di interferenza.

Se i due emettitori si trovano alla distanza $d_{Aa} = d_{Aa'} = 2{,}5\ \text{m}$ da A, come mostrato in figura, la loro distanza rispetto al punto F' è

$$d_{aF'} = \sqrt{d_{AF}^2 + (d_{FF'} - d_{Aa})^2} \quad (9)$$

$$d_{a'F'} = \sqrt{d_{AF}^2 + (d_{FF'} + d_{Aa'})^2} \quad (10)$$

Di conseguenza, la differenza di cammino percorsa dalle due onde, $\Delta r$, è

$$\Delta r = \left|d_{a'F'} - d_{aF'}\right| \quad (11)$$

Nel punto F' si verifica il primo minimo di interferenza, quindi la differenza di cammino deve essere uguale a metà lunghezza d'onda,

$$\Delta r = \frac{\lambda}{2} \quad (12)$$

Per un'onda, la relazione tra lunghezza d'onda $\lambda$, frequenza $f$ e velocità di propagazione $v$ è

$$v = \lambda f \quad (13)$$

Combinando le equazioni (9) fino a (13) si può ottenere l'espressione della frequenza di emissione dell'onda che produce in F' il primo minimo di interferenza,

$$f = \frac{v}{2\left[\sqrt{d_{AF}^2 + (d_{FF'} + d_{Aa'})^2} - \sqrt{d_{AF}^2 + (d_{FF'} - d_{Aa})^2}\right]} \quad\Rightarrow\quad f = 762{,}2\ \text{Hz}$$

36 OLIMPIADA ESPAÑOLA DE FÍSICA
FASE DI ARAGÓN

<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p6_f2.png]]
*Schema escenario galleggiante e gradinata*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p8_f3.png]]
*Geometria interferenza due altoparlanti a e a'*
<!--fig:end-->


<div class="qlang-split" data-lang="en"></div>

P2. Summer Festival.

The International Festival of Cultures, or Pirineos Sur, has been held since 1992 in the Alto Gállego region of Huesca, specifically in the town of Lanuza, part of the municipality of Sallent de Gállego. At this festival, the stage floats on the Lanuza reservoir and the stands are located along the reservoir's shore.

Some friends who worked in organizing last year’s edition, knowing your great interest in physics, want you to help them understand some issues that arose while preparing the concerts, so they don’t happen again. To this end, they have drawn a sketch of the stage and stands. Let's begin!

One of their first tasks was to synchronize the sound equipment located in the control area (point C) and at the back of the stands (point F). For this, they assumed that the speed of sound propagation in air is $v = 340\ \text{m/s}$.

a)
If sound is emitted from point A, what time delay exists in reception between points C and F?

Some technicians measured this delay but did not obtain the expected result. When asked why, they explained that the speed of sound propagation in an ideal gas depends on absolute temperature through an expression involving the universal gas constant $R = 8{,}314\ \text{J/mol}\cdot\text{K}$, the adiabatic coefficient $\gamma$ (dimensionless), and the molar mass $M$ of the gas in kg/mol. The problem is that your friends copied the dependence incorrectly and do not know which of the following expressions is correct:

i) $v = \sqrt{\dfrac{\gamma R}{M}}\,\dfrac{1}{\sqrt{T}}$
ii) $v = \sqrt{\dfrac{\gamma R}{M}}\,\dfrac{1}{T}$
iii) $v = \sqrt{\dfrac{\gamma R}{M}}\,\sqrt{T}$
iv) $v = \sqrt{\dfrac{\gamma R}{M}}\,T$

b) Explain which expression the technicians indicated to them.
c) The test was conducted at $25\ ^\circ\text{C}$, and for air, $\gamma = 1{,}4$ and $M = 28{,}97\ \text{g/mol}$. What delay did the technicians measure?
For the initial sound tests, they placed all the speakers—collectively producing 10 kW of acoustic power—at the center of the stage (point A), played a song at maximum volume, and measured the sound intensity level $\beta$ at various points.
d) The first measurement was taken at point F. Assuming hemispherical emission, what value did they obtain?
The next point where they wanted to measure the sound intensity level was point C, but the technicians warned them not to get too close without first reducing the power emitted by the speakers.
e) Did the technicians give good advice? Justify your answer.
For the next test, your friends placed half of the speakers 2.5 m to the right of point A and the other half 2.5 m to its left (points a and a′). During preparations, they accidentally played a tone of a certain frequency, which prompted some technicians working at point F to intervene.
The technicians moved to point F′ and stopped hearing the sound, even though the tone continued to play.
f) Explain why the technicians heard the tone at F but stopped hearing it when they moved to F′.
g) What was the frequency of the tone that was accidentally played?
Data: Surface area of a sphere $S = 4\pi R^2$; minimum audible intensity $I_0 = 10^{-12}\ \text{W/m}^2$; pain threshold $\beta_\text{dolor} = 120\ \text{dB}$.

36 SPANISH PHYSICS OLYMPIAD
ARAGON REGIONAL ROUND
P2. Solution a)
The sound is emitted from point A and the wavefronts propagate with constant velocity $v = 340\ \text{m/s}$ in all directions. In particular, points C and F are aligned with A and separated by a distance $d_{CF} = 80\ \text{m}$; therefore, the time delay $\Delta t$ between these two points is:

$$\Delta t = \frac{d_{CF}}{v} \quad\Rightarrow\quad \Delta t = 235\ \text{ms} \quad (1)$$

b) Using dimensional analysis, we can determine which of the four equations is correct. On the left-hand side of all four equations, velocity appears. Its physical dimensions are

$$[v] = \frac{[L]}{[T]} \quad (2)$$

In all cases, the right-hand side contains a common factor whose dimensions are

$$\left[\sqrt{\frac{\gamma R}{M}}\right] = \frac{[L]}{[T][\Theta]^{1/2}} \quad (3)$$

where $[\Theta]$ corresponds to the dimensions of temperature. For the formula to be dimensionally correct, it must be multiplied by a quantity having dimensions $[\Theta]^{1/2}$. Therefore, the correct solution is iii),

$$v = \sqrt{\frac{\gamma R}{M}}\,\sqrt{T} \quad (4)$$

c)
In the case indicated, substituting the given values into expression iii) yields:

$$v = 346\ \text{m/s} \quad (5)$$

Thus, the time delay measured by the technicians is

$$\Delta t = 231\ \text{ms} \quad (6)$$

d) The power $P$ emitted by the speakers is distributed uniformly over a hemispherical surface, i.e., equal to $2\pi R^2$, where $R$ is the distance between the sound source and the point of interest. Thus, the sound intensity level measured at point F, located a distance $d_{AF} = 110\ \text{m}$ from A, is

$$\beta_F = 10\log\frac{I_F}{I_0} = 10\log\frac{P}{2\pi d_{AF}^2\,I_0} \quad\Rightarrow\quad \beta_F = 111{,}2\ \text{dB} \quad (7)$$

e)
Keeping the power emission at 10 kW from point A, our friends moved closer to point C, so that the distance between the emitting source and the point of interest was reduced to $d_{AC} = 30\ \text{m}$; therefore, the intensity increased and consequently the sound intensity level also rose. The value expected to be measured at point C under these conditions is

$$\beta_C = 10\log\frac{I_C}{I_0} = 10\log\frac{P}{2\pi d_{AC}^2\,I_0} \quad\Rightarrow\quad \beta_C = 122{,}5\ \text{dB} \quad (8)$$

The value of $\beta_C$ exceeds 120 dB, which marks the pain threshold. Therefore, the technicians were given sound advice.

36 SPANISH PHYSICS OLYMPIAD
ARAGÓN REGIONAL ROUND f)
By separating the speakers into two groups located 2.5 m on either side of point A, a situation is created in which there are two identical point harmonic emitters separated by a distance $d = 5\ \text{m}$. Each emits waves of the same frequency and in phase that travel through space, and when they meet, they superpose, producing an interference phenomenon.

This interference may be constructive if the path difference traveled by the waves when superposing is equal to an integer multiple of the wavelength $\lambda$, and destructive if the path difference is equal to an integer multiple of the wavelength plus half a wavelength (or equivalently, equal to an odd multiple of half a wavelength).

Therefore, the fact that the technicians heard the tone when positioned at F and did not hear it when positioned at F’ is due to constructive interference occurring at F (the path difference between the two waves is zero) and destructive interference occurring at F’.

g)
If, while moving parallel to the back of the stands, the technicians first stop hearing the tone at point F’, this point corresponds to the first interference minimum.

If the two emitters are at distance $d_{Aa} = d_{Aa'} = 2{,}5\ \text{m}$ from point A, as shown in the figure, their distance with respect to point F′ is

$$d_{aF'} = \sqrt{d_{AF}^2 + (d_{FF'} - d_{Aa})^2} \quad (9)$$

$$d_{a'F'} = \sqrt{d_{AF}^2 + (d_{FF'} + d_{Aa'})^2} \quad (10)$$

Therefore, the path difference traveled by the two waves, $\Delta r$, is

$$\Delta r = \left|d_{a'F'} - d_{aF'}\right| \quad (11)$$

At point F′, the first interference minimum occurs, so the path difference must be equal to half a wavelength,

$$\Delta r = \frac{\lambda}{2} \quad (12)$$

For a wave, the relationship between wavelength $\lambda$, frequency $f$, and propagation speed $v$ is

$$v = \lambda f \quad (13)$$

By combining equations (9) to (13), the expression for the emission frequency of the wave that produces the first interference minimum at point F′ can be obtained,

$$f = \frac{v}{2\left[\sqrt{d_{AF}^2 + (d_{FF'} + d_{Aa'})^2} - \sqrt{d_{AF}^2 + (d_{FF'} - d_{Aa})^2}\right]} \quad\Rightarrow\quad f = 762{,}2\ \text{Hz}$$

36 SPANISH PHYSICS OLYMPIAD
ARAGON REGIONAL ROUND

<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p6_f2.png]]
*Floating stage and grandstand diagram*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p8_f3.png]]
*Interference geometry of two loudspeakers at e a'*
<!--fig:end-->


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

P3. Linee del campo elettrostatico1
Un campo elettrostatico può essere rappresentato graficamente mediante le sue linee di forza (o di campo).
Il numero di linee che "nascono" o "muoiono" in una carica è proporzionale all'intensità di tale carica. (L'espressione matematica di questo concetto costituisce il teorema di Gauss). Il campo elettrico in ogni punto è tangente alla linea di forza che passa per quel punto, e la sua intensità è proporzionale alla densità di linee (numero di linee per unità di superficie) nel suo intorno.
Nella figura 1 sono mostrate le linee di forza che descrivono il campo elettrostatico generato da due cariche puntiformi, $q_1$ e $q_2$, separate da una distanza $d$.

a)
Spiega di che segno è ciascuna delle cariche.

b)
Qual è il loro rapporto di intensità, $q_1/q_2$?

c)
Ragiona, con la massima precisione possibile, in quali punti del piano della figura 1 il campo elettrostatico $\vec{E}$ creato dalle due cariche è nullo.

d)
Determina in quali punti del piano di tale figura il potenziale elettrostatico creato dalle due cariche è nullo.

Considera ora la distribuzione di cariche puntiformi rappresentata nella figura 2, con $Q_1 = 6\ \mu\text{C}$, $Q_2 = -2\ \mu\text{C}$ e $d = 4\ \text{cm}$.

e)
Calcola il potenziale elettrostatico, $V$, e il campo elettrico, $\vec{E}$, nel punto A della figura, situato a 3 cm da $Q_1$ e a 1 cm da $Q_2$.

f)
Disegna le linee di forza per questa distribuzione di cariche.

Dato: $K = \dfrac{1}{4\pi\epsilon_0} = 9\cdot10^9\ \text{N m}^2/\text{C}^2$

1 Questo problema è stato proposto nella Fase di Aragona della 21ª Olimpiade di Fisica (2010) ed è ispirato a uno dei problemi presentati alla II OIbF di Oaxtepec (Messico) nel 1997.

A d
Figura 2
Figura 1

36ª OLIMPIADA SPAGNOLA DI FISICA
FASE DI ARAGONA
Soluzione P3

a)
Le linee del campo "nascono" dalle cariche positive (o dall'infinito) e "terminano" sulle cariche negative (o nell'infinito). Osservando la figura 1, deduciamo che la carica $q_1$ è positiva e la $q_2$ negativa.

b)
Il numero di linee del campo che nascono o terminano su una carica è proporzionale all'intensità di tale carica. Nella figura 1, vediamo che escono 24 linee da $q_1$ e ne arrivano 8 in $q_2$. Pertanto,

$$\frac{q_1}{q_2} = -3 \quad (1)$$

c)
Affinché il campo totale $\vec{E}_t = \vec{E}_1 + \vec{E}_2$ creato dalle due cariche sia nullo, deve verificarsi che oppure $E_1 = E_2 = 0$, il che avviene in punti infinitamente lontani dalle cariche, oppure $\vec{E}_1 = -\vec{E}_2$. In quest'ultimo caso i due vettori hanno lo stesso modulo, la stessa direzione e versi opposti. Poiché $q_1 > q_2$, $\vec{E}$ può annullarsi soltanto in un punto come P della figura 3, allineato con le cariche e più lontano da 1 che da 2. L'uguaglianza dei moduli dei due campi impone che

$$K\frac{q_1}{r_1^2} = K\frac{|q_2|}{r_2^2} \quad\to\quad \frac{3}{(d + r_2)^2} = \frac{1}{r_2^2}$$

Effettuando i calcoli, si ottiene che la distanza $r_2$ tra $q_2$ e P è

$$r_2 = \frac{1 + \sqrt{3}}{2}\,d = 1{,}366\,d$$

d) Affinché il potenziale totale $V_t = V_1 + V_2$ creato dalle due cariche sia nullo, deve verificarsi che oppure $V_1 = V_2 = 0$, situazione che si verifica nei punti infinitamente lontani dalle cariche, oppure $V_1 = -V_2$.

Tenendo conto di (1) e con la notazione della figura 4, affinché il potenziale nel punto P(x, y) sia nullo deve verificarsi che

$$K\frac{q_1}{r_1} = K\frac{|q_2|}{r_2} \quad\Rightarrow\quad \frac{3}{\sqrt{x^2 + y^2}} = \frac{1}{\sqrt{(d - x)^2 + y^2}}$$

Elevando al quadrato e sviluppando si ottiene l'espressione

$$\left(x - \frac{9}{8}d\right)^2 + y^2 = \left(\frac{3d}{8}\right)^2$$

che è l'equazione di una circonferenza con centro $C\left(\dfrac{9d}{8}, 0\right)$ e raggio $R = \dfrac{3d}{8}$.

In particolare, esistono due punti allineati con le cariche nei quali il potenziale è nullo (punti A e B nella figura 4), situati rispetto a $q_1$ in

$$x_A = \frac{9d}{8} - \frac{3d}{8} = \frac{3d}{4} \qquad\text{y}\qquad x_B = \frac{9d}{8} + \frac{3d}{8} = \frac{3d}{2}$$

Figura 3
Figura 4
36 OLIMPIADA ESPAÑOLA DE FÍSICA
FASE DE ARAGÓN

e) Si osservi che, con i dati numerici di questo punto, $Q_1/Q_2 = -3$, per cui ci troviamo ancora con la stessa distribuzione elettrostatica dei punti precedenti. In particolare, il punto A indicato nel testo si trova a una distanza $x_A = 3\ \text{cm} = 3d/4$ da $Q_1$, in cui abbiamo appena visto che il potenziale è nullo. Ciò può essere verificato immediatamente in modo numerico

$$V_t = V_1 + V_2 = 9\cdot10^9\left(\frac{6\cdot10^{-6}}{3\cdot10^{-2}} + \frac{-2\cdot10^{-6}}{10^{-2}}\right) = 0$$

Il campo elettrostatico creato dalle due cariche nel punto A è

$$\vec{E}_t = \vec{E}_1 + \vec{E}_2$$

I vettori $\vec{E}_1$ e $\vec{E}_2$ hanno la stessa direzione e lo stesso verso, per cui $\vec{E}_t$ è diretto dalla carica positiva a quella negativa (vedi figura 5). Il suo modulo è

$$E_t = E_1 + E_2 = 9\cdot10^9\left(\frac{6\cdot10^{-6}}{9\cdot10^{-4}} + \frac{2\cdot10^{-6}}{10^{-4}}\right) = 2{,}4\cdot10^8\ \text{N/C}$$

f) Le linee di forza create da queste due cariche puntiformi sono quelle mostrate nella figura 1 del testo.

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


<div class="qlang-split" data-lang="en"></div>

P3. Electrostatic field lines
An electrostatic field can be represented graphically by its force lines (or field lines).
The number of lines that "originate" or "terminate" at a charge is proportional to the magnitude of that charge. (The mathematical expression of this concept constitutes Gauss's theorem.) The electric field at each point is tangent to the field line passing through that point, and its magnitude is proportional to the density of lines (number of lines per unit area) in its vicinity.

In Figure 1, the field lines describing the electrostatic field generated by two point charges, $q_1$ and $q_2$, separated by a distance $d$, are shown.

a)
Justify the sign of each charge.

b)
What is their relative magnitude, $q_1/q_2$?

c)
With the greatest possible precision, explain at which point or points in the plane of Figure 1 the electrostatic field $\vec{E}$ created by both charges is zero.

d)
Determine at which point or points in the plane of Figure 1 the electrostatic potential created by the two charges is zero.

Now consider the distribution of point charges shown in Figure 2, with $Q_1 = 6\ \mu\text{C}$, $Q_2 = -2\ \mu\text{C}$ and $d = 4\ \text{cm}$.

e)
Calculate the electrostatic potential, $V$, and the electric field, $\vec{E}$, at point A in Figure 2, located 3 cm from $Q_1$ and 1 cm from $Q_2$.

f)
Draw the field lines for this charge distribution.

Data: $K = \dfrac{1}{4\pi\epsilon_0} = 9\cdot10^9\ \text{N m}^2/\text{C}^2$

1 This problem was proposed in the Aragón Phase of the 21st Spanish Physics Olympiad (2010) and is inspired by one presented at the II IBOF in Oaxtepec (Mexico) in 1997.

A d
Figure 2
Figure 1

36th SPANISH PHYSICS OLYMPIAD
ARAGÓN PHASE
Solution P3

a)
Field lines "originate" at positive charges (or from infinity) and "terminate" at negative charges (or at infinity). From Figure 1, we deduce that charge $q_1$ is positive and charge $q_2$ is negative.

b)
The number of field lines originating from or terminating at a charge is proportional to the magnitude of that charge. In Figure 1, we observe that 24 lines emerge from $q_1$ and 8 lines arrive at $q_2$. Therefore,

$$\frac{q_1}{q_2} = -3 \quad (1)$$

c)
For the total field $\vec{E}_t = \vec{E}_1 + \vec{E}_2$ created by both charges to be zero, either $E_1 = E_2 = 0$ must hold (which occurs at points infinitely far from the charges), or else $\vec{E}_1 = -\vec{E}_2$. In the latter case, both vectors have equal magnitude, the same direction, and opposite senses. Therefore, since $q_1 > q_2$, $\vec{E}$ can only cancel at a point such as P in Figure 3, aligned with the charges and farther from charge 1 than from charge 2. The equality of magnitudes of the two fields requires that

$$K\frac{q_1}{r_1^2} = K\frac{|q_2|}{r_2^2} \quad\to\quad \frac{3}{(d + r_2)^2} = \frac{1}{r_2^2}$$

After performing the algebra, we find that the distance $r_2$ between $q_2$ and point P is

$$r_2 = \frac{1 + \sqrt{3}}{2}\,d = 1{,}366\,d$$

d) For the total potential $V_t = V_1 + V_2$ created by both charges to be zero, either $V_1 = V_2 = 0$ must hold—this occurs at points infinitely far from the charges—or else $V_1 = -V_2$.

Taking (1) into account, and using the notation from Figure 4, for the potential at point P(x, y) to be zero it must hold that

$$K\frac{q_1}{r_1} = K\frac{|q_2|}{r_2} \quad\Rightarrow\quad \frac{3}{\sqrt{x^2 + y^2}} = \frac{1}{\sqrt{(d - x)^2 + y^2}}$$

Squaring both sides and expanding yields the expression

$$\left(x - \frac{9}{8}d\right)^2 + y^2 = \left(\frac{3d}{8}\right)^2$$

which is the equation of a circle with center $C\left(\dfrac{9d}{8}, 0\right)$ and radius $R = \dfrac{3d}{8}$.

In particular, there are two points aligned with the charges at which the potential is zero (points A and B in Figure 4), located relative to $q_1$ as

$$x_A = \frac{9d}{8} - \frac{3d}{8} = \frac{3d}{4} \qquad\text{y}\qquad x_B = \frac{9d}{8} + \frac{3d}{8} = \frac{3d}{2}$$

Figure 3
Figure 4
36 SPANISH PHYSICS OLYMPIAD
ARAGON REGIONAL ROUND

e) Note that, with the numerical values given in this section, $Q_1/Q_2 = -3$, so we maintain the same electrostatic distribution as in previous parts. In particular, point A indicated in the statement lies at a distance $x_A = 3\ \text{cm} = 3d/4$ from $Q_1$, where we have just seen that the potential is zero. This can be immediately verified numerically:

$$V_t = V_1 + V_2 = 9\cdot10^9\left(\frac{6\cdot10^{-6}}{3\cdot10^{-2}} + \frac{-2\cdot10^{-6}}{10^{-2}}\right) = 0$$

The electrostatic field created by the two charges at point A is

$$\vec{E}_t = \vec{E}_1 + \vec{E}_2$$

Vectors $\vec{E}_1$ and $\vec{E}_2$ have the same direction and sense, so $\vec{E}_t$ points from the positive to the negative charge (see Figure 5). Its magnitude is

$$E_t = E_1 + E_2 = 9\cdot10^9\left(\frac{6\cdot10^{-6}}{9\cdot10^{-4}} + \frac{2\cdot10^{-6}}{10^{-4}}\right) = 2{,}4\cdot10^8\ \text{N/C}$$

f) The field lines generated by these two point charges are those shown in Figure 1 of the statement.

Figure 5

<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p9_f4.png]]
*Electrostatic field lines due to two charges (Figure 1)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p9_f5.png]]
*Positions of charges Q1, Q2 and point A (Figure 2)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p10_f6.png]]
*Point P where the electric field is zero between the charges (Figure 3)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA TEORICA/2025 36 OAF 2025 PRUEBA TEORICA_p10_f7.png]]
*Coordinate system for zero potential (Figure 4)*
<!--fig:end-->


