---
title: Argent 2009
tipo: prova
tags:
  - kg/prova
  - anno/2009
  - paese/Argentina
  - comp/Argent
  - cluster/Termodinamica
---
<div class="atom-reader" data-prova="prueba_2009"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Argent 2009 — Quesito 1" data-tags="kg/prova,paese/Argentina,comp/Argent,cluster/Termodinamica,object/battery"></span>

<div class="qlang-switch" data-default="es"></div>



Problema 1: Señal luminosa en isla desierta.

Usted se encuentra en una isla desierta y luego de recorrerla encuentra una
lámpara, cuatro cajas conteniendo cada una 12 pilas y algunos cables. La lámpara es de
100 W con resistencia de 9 $\Omega$ y las pilas son de 6 V con resistencia interna de 3 $\Omega$.

 Con estos elementos decide armar un circuito para enviar señales luminosas
cuando pase un avión o un barco cerca de la isla. Con el objeto de ser observado desde
lo más lejos posible se debe lograr la mayor iluminación de la lámpara y para esto es
necesario hacer circular la máxima corriente a través de la misma.

Con este objetivo Ud. arma un circuito de manera de tener M ramas en paralelo y
en cada una de ellas N pilas en serie, de manera tal de utilizar todas las pilas
encontradas ($M \cdot N = 48$).

a) Encuentre una expresión para la corriente que circula a través de la lámpara en
términos de N y M

b) Encuentre los valores de M y N correspondientes al circuito con el cuál se logra hacer
circular la máxima corriente a través de la lámpara.

c) Encuentre los valores de M y N con los cuales se logra la mayor iluminación sin
quemar la lámpara

d) Sabiendo que la eficiencia lumínica de la lámpara es de 6 lum/W, y que la
sensibilidad de los bastones del ojo humano es de $10^{-6}\ \text{lum/m}^2$ calcule la máxima
distancia a la cual podrán ser observadas las señales.

Nota: Para los puntos a, b y c considere que la resistencia no cambia con la
temperatura.

Ayuda: La expresión $(ax + b/x)$, con $x > 0$, toma un valor mínimo para $x^2 = b/a$

Solución

a) Total = 4 puntos.

Un esquema del circuito se muestra en la figura de abajo

Si denominamos $i_r$ a la corriente que pasa por cada una de las ramas tenemos que la
diferencia de potencial entre los bornes de una pila es

$$\Delta V_P = V_P - i_r \cdot R_P$$

y como en una rama tenemos N pilas la diferencia de potencial en los extremos de cada
rama será:

$$\Delta V_r = N \cdot \Delta V_P = N \cdot (V_P - i_r \cdot R_P)$$
(1 punto)

Por la lámpara pasará una corriente igual a la suma de la corriente que pasa por todas las
ramas que contienen pilas entonces $I = M \cdot i_r$ entonces la diferencia de potencial en la
rama que contiene la lámpara será:

$$\Delta V = I \cdot R_L = M \cdot i_r \cdot R_L$$
(1 punto)

Cómo la diferencia de potencial en todas las ramas debe ser la misma tenemos que:

$$N \cdot (V_P - i_r \cdot R_P) = M \cdot i_r \cdot R_L$$

Despejando se obtiene

$$i_r = \frac{N \cdot V_P}{M \cdot R_L + N \cdot R_P}$$

(1 punto)

Por lo tanto la corriente que circula por la lámpara es

$$I = M \cdot i_r = \frac{M \cdot N \cdot V_P}{M \cdot R_L + N \cdot R_P}$$

(1 punto)

Como en nuestro caso $M \cdot N = 48$ podemos reescribir esta ecuación en término sólo de la
cantidad de pilas que hay en una rama

$$I = \frac{48 \cdot V_P}{\dfrac{48}{N} \cdot R_L + N \cdot R_P}$$

b) Total = 2 puntos.

La máxima corriente que circulará por la lámpara corresponderá a aquella para la cual el
denominador en la expresión anterior toma su mínimo valor. Haciendo uso de la ayuda
podemos identificar $a = R_P$ y $b = 48\,R_L$ ($R_P = 3\ \Omega$ y $R_L = 9\ \Omega$) podemos determinar

$$N^2 = \frac{48 \cdot R_L}{R_P} = 144$$
$$N = 12$$

Es decir que pasará la máxima corriente por la lámpara cuando armemos un circuito con
4 ramas con 12 pilas en cada una de ellas.

Otra posibilidad es evaluar la expresión de la corriente total para todas las
combinaciones posibles de M y N.

| N | M | I [A] |
|---|---|---|
| 1 | 48 | 0.662 |
| 2 | 24 | 1.297 |
| 3 | 16 | 1.882 |
| 4 | 12 | 2.400 |
| 6 | 8 | 3.200 |
| 8 | 6 | 3.692 |
| 12 | 4 | 4.000 |
| 16 | 3 | 3.840 |
| 24 | 2 | 3.200 |
| 48 | 1 | 1.882 |

De donde resulta evidente que la máxima corriente se logra con un circuito que contiene
4 ramas con 12 pilas en cada una de ellas.

c) Total = 2 puntos.

Cómo la lámpara es de 100 W con una resistencia interna de 9 $\Omega$ la máxima corriente
que puede pasar por ella es:

$$P = i_\text{max}^2 \cdot R$$
$$i_\text{max} = \sqrt{\frac{P}{R}} = \sqrt{11.1}\ \text{A} = 3.3\ \text{A}$$

(1 punto)

Por lo tanto, analizando la tabla anterior, la máxima corriente que se puede hacer pasar
por la lámpara sin quemarla es 3.2 A.

Existen dos circuitos posibles para lograr esta corriente, uno de 8 ramas con 6 pilas en
cada una de ellas (N = 6 y M = 8) ó uno de 2 ramas con 24 pilas en cada una de ellas
(N = 24 y M = 2).

Si dan 1 solo circuito 0.5 puntos
Si da los dos circuitos posibles 1 punto

d) Total = 2 puntos.

Con esta corriente máxima de 3.2 A la potencia disipada por la lámpara es

$$P = i_\text{max}^2 \cdot R = (3.2\ \text{A})^2 \cdot 9\ \Omega = 92.16\ \text{W}$$

(0.5 puntos)

la potencia lumínica de la lámpara será

$$P_L = 92.16\ \text{W} \cdot 6\ \frac{\text{lum}}{\text{W}} = 552.96\ \text{lum}$$

(0.5 puntos)

Cómo esa potencia lumínica se distribuye en todas las direcciones en una semiesfera
tenemos que a una distancia L la densidad de potencia lumínica será

$$\delta_{PL} = \frac{P_L}{2\pi L^2}$$

y la luz de la lámpara podrá ser observada en todo lugar en el cual esta densidad de
potencia lumínica sea superior a la sensibilidad del ojo ($10^{-6}\ \text{lum/m}^2$), entonces

$$\delta_{PL} = \frac{P_L}{2\pi L^2} \geq 10^{-6}\ \frac{\text{lum}}{\text{m}^2}$$

(0.75 puntos)

$$L \leq \sqrt{\frac{P_L}{2 \cdot 10^{-6}\ \text{lum/m}^2}} = 9381.2\ \text{m}$$

(0.25 puntos)

También puede considerarse bien si el alumno toma la potencia lumínica dispersada en
la esfera total ($S = 4\pi L^2$), entonces la distancia será $L \leq 6633.5$ m.

**Topic:** [[Circuits]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Battery (object)|Battery]]
**Fonte:** [Testo (PDF) — p.13](https://drive.google.com/file/d/126QgIjCAz2XtSpFUOgsPOUksVygs0W3r/view)


<div class="qlang-split" data-lang="it"></div>

Problema 1: segnale luminoso su un'isola deserta.

Sei su un'isola deserta e dopo averla percorsa trovi una
lampada, quattro scatole contenenti ciascuno 12 batterie e alcuni cavi. La lampada è di
100 W con resistenza 9 $\Omega$ e le batterie sono di 6 V con resistenza interna 3 $\Omega$.

Con questi elementi decide di costruire un circuito per inviare segnali luminosi
quando un aereo o una barca passa vicino all'isola. Per l'osservazione dal
Il più lontano possibile è raggiungere la maggiore illuminazione della lampada e per questo è
La massima corrente deve essere circolare attraverso la stessa.

Per questo scopo, Armata un circuito in modo da avere M rami in parallelo e
in ciascuna di esse N batterie in serie, in modo tale da utilizzare tutte le batterie
le informazioni disponibili ($M \cdot N = 48$).

a) Trova un'espressione per il corrente che circola attraverso la lampada in
termini di N e M

b) Trova i valori di M e N corrispondenti al circuito con cui si riesce a fare
circolare la corrente massima attraverso la lampada.

c) Trova i valori di M e N con cui si ottiene la massima illuminazione senza
bruciare la lampada

d) Sapendo che l'efficienza luminosa della lampada è di 6 lum/W, e che la
sensibilità dei bastoni dell'occhio umano è di $10^{-6}\ \text{lum/m}^2$ calcola la massima
Distanza a cui i segnali possono essere osservati.

Nota: per i punti a, b e c considera che la resistenza non cambia con la
temperatura.

Aiuto: l'espressione $(ax + b/x)$, con $x > 0$, assume un valore minimo per $x^2 = b/a$

Soluzione

a) Total = 4 punti.

Un schema del circuito è mostrato nella figura di seguito

Si denominamos $i_r$ a la corriente que pasa por cada una de las ramas tenemos que la
La differenza di potenziale tra i bordi di una pila è

$$\Delta V_P = V_P - i_r \cdot R_P$$

e come in un ramo abbiamo N pietra la differenza di potenziale alle estremità di ogni
il ramo sarà:

$$\Delta V_r = N \cdot \Delta V_P = N \cdot (V_P - i_r \cdot R_P)$$
(punto 1)

La lampada attraverserà un flusso pari alla somma del flusso che attraverserà tutte le parti.
ramas que contienen pilas entonces $I = M \cdot i_r$ entonces la diferencia de potencial en la
il ramo contenente la lampada sarà:

$$\Delta V = I \cdot R_L = M \cdot i_r \cdot R_L$$
(punto 1)

Come la differenza di potenziale in tutti i rami deve essere la stessa abbiamo che:

$$N \cdot (V_P - i_r \cdot R_P) = M \cdot i_r \cdot R_L$$

La pulizia si ottiene

$$i_r = \frac{N \cdot V_P}{M \cdot R_L + N \cdot R_P}$$

(punto 1)

Quindi il corrente che circola attraverso la lampada è

$$I = M \cdot i_r = \frac{M \cdot N \cdot V_P}{M \cdot R_L + N \cdot R_P}$$

(punto 1)

Come nel nostro caso $M \cdot N = 48$ possiamo riscrivere questa equazione in termini solo di
numero di pile in un ramo

$$I = \frac{48 \cdot V_P}{\dfrac{48}{N} \cdot R_L + N \cdot R_P}$$

b) Total = 2 punti.

La corrente massima che circola attraverso la lampada corrisponde a quella per la quale il
il denominatore nella espressione precedente prende il suo valore minimo. L'aiuto è stato utilizzato
Possiamo identificare $a = R_P$ e $b = 48\,R_L$ ($R_P = 3\ \Omega$ e $R_L = 9\ \Omega$) possiamo determinare

$$N^2 = \frac{48 \cdot R_L}{R_P} = 144$$
$$N = 12$$

Questo significa che il massimo corrente passerà attraverso la lampada quando si armonia un circuito con
4 rami con 12 batterie in ciascuno di essi.

Un'altra possibilità è quella di valutare l'espressione del corrente totale per tutte le
possibili combinazioni di M e N.

| N | M | I [A] |
|---|---|---|
| 1 | 48 | 0.662 |
| 2 | 24 | 1.297 |
| 3 | 16 | 1.882 |
| 4 | 12 | 2.400 |
| 6 | 8 | 3.200 |
| 8 | 6 | 3.692 |
| 12 | 4 | 4.000 |
| 16 | 3 | 3.840 |
| 24 | 2 | 3.200 |
| 48 | 1 | 1.882 |

Da cui è evidente che la massima corrente viene ottenuta con un circuito che contiene
4 rami con 12 batterie in ciascuno di essi.

c) Total = 2 punti.

Come la lampada è di 100 W con una resistenza interna di 9 $\Omega$ il massimo corrente
che può passare attraverso di essa è:

$$P = i_\text{max}^2 \cdot R$$
$$i_\text{max} = \sqrt{\frac{P}{R}} = \sqrt{11.1}\ \text{A} = 3.3\ \text{A}$$

(punto 1)

Quindi, analizzando la tabella precedente, la corrente massima che si può passare
per la lampada senza bruciare è 3.2 A.

Esistono due circuiti possibili per ottenere questo corrente, uno di 8 rami con 6 batterie in
ciascuna di esse (N = 6 e M = 8) o una di 2 rami con 24 pile in ciascuna di esse
(N = 24 y M = 2).

Se danno 1 solo circuito 0,5 punti
Se dà i due circuiti possibili 1 punto

d) Total = 2 punti.

Con questo corrente massimo di 3.2 A la potenza dissipata dalla lampada è

$$P = i_\text{max}^2 \cdot R = (3.2\ \text{A})^2 \cdot 9\ \Omega = 92.16\ \text{W}$$

0,5 punti)

la potenza luminosa della lampada sarà

$$P_L = 92.16\ \text{W} \cdot 6\ \frac{\text{lum}}{\text{W}} = 552.96\ \text{lum}$$

0,5 punti)

Come si distribuisce questa potenza luminosa in tutte le direzioni in una semisfera
Abbiamo che a distanza L la densità di potenza luminosa sarà

$$\delta_{PL} = \frac{P_L}{2\pi L^2}$$

e la luce della lampada può essere osservata ovunque questa densità di
se la potenza luminosa è superiore alla sensibilità dell'occhio ($10^{-6}\ \text{lum/m}^2$),

$$\delta_{PL} = \frac{P_L}{2\pi L^2} \geq 10^{-6}\ \frac{\text{lum}}{\text{m}^2}$$

0,75 punti)

$$L \leq \sqrt{\frac{P_L}{2 \cdot 10^{-6}\ \text{lum/m}^2}} = 9381.2\ \text{m}$$

0,25 punti)

Si può anche considerare bene se l'allievo prende la potenza luminosa dispersa in
la sfera totale ($S = 4\pi L^2$), quindi la distanza sarà $L \leq 6633.5$ m.

**Topic:** [[Circuits]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Battery (object)|Battery]]
**Fonte:** [Testo (PDF) — p.13](https://drive.google.com/file/d/126QgIjCAz2XtSpFUOgsPOUksVygs0W3r/view)

<div class="qlang-split" data-lang="en"></div>

Problem 1: Light signal on a desert island.

You're on a desert island and after you walk around it you find a
lamp, four boxes containing 12 batteries and some cables each. The lamp is from
100 W with a resistance of 9 $\Omega$ and the batteries are 6 V with an internal resistance of 3 $\Omega$.

With these elements, he decides to assemble a circuit to send out light signals.
When a plane or boat passes near the island. For the purpose of observing the
As far as possible, the lamp should be illuminated as much as possible.
The maximum current must be circulated through it.

With this aim, you will be able to Arms a circuit so as to have M branches in parallel and
In each of them N series batteries, so as to use all the batteries
encontradas ($M \cdot N = 48$).

(a) Find an expression for the current flowing through the lamp in
terms of N and M

(b) Find the M and N values for the circuit with which it is possible to make
Circulate the maximum current through the lamp.

(c) Find the values of M and N with which the greatest illumination is achieved without
burning the lamp

(d) Knowing that the luminous efficiency of the lamp is 6 lum/W, and that the
sensitivity of the human eyelid rods is $10^{-6}\ \text{lum/m}^2$ calculate the maximum
distance from which the signals can be observed.

Note: For points a, b and c consider that the resistance does not change with the
The temperature.

Aid: The expression $(ax + b/x)$, with $x > 0$, takes a minimum value for $x^2 = b/a$

Solution

(a) Total = 4 points.

A circuit diagram is shown in the figure below

Si denominamos $i_r$ a la corriente que pasa por cada una de las ramas tenemos que la
The potential difference between the ends of a stack is

$$\Delta V_P = V_P - i_r \cdot R_P$$

And as in a branch, we have N piles the potential difference at the ends of each
branch shall be:

$$\Delta V_r = N \cdot \Delta V_P = N \cdot (V_P - i_r \cdot R_P)$$
(a) the number of days

A current passing through the lamp is equal to the sum of the current passing through all the
branches containing batteries then $I = M \cdot i_r$ then the potential difference in the
the branch containing the lamp shall be:

$$\Delta V = I \cdot R_L = M \cdot i_r \cdot R_L$$
(a) the number of days

How the potential difference in all branches should be the same we have to:

$$N \cdot (V_P - i_r \cdot R_P) = M \cdot i_r \cdot R_L$$

Clearing you get

$$i_r = \frac{N \cdot V_P}{M \cdot R_L + N \cdot R_P}$$

(a) the number of days

So the current that's circulating through the lamp is

$$I = M \cdot i_r = \frac{M \cdot N \cdot V_P}{M \cdot R_L + N \cdot R_P}$$

(a) the number of days

As in our case $M \cdot N = 48$ we can rewrite this equation in terms of only the
Number of batteries in a branch

$$I = \frac{48 \cdot V_P}{\dfrac{48}{N} \cdot R_L + N \cdot R_P}$$

(b) Total = 2 points.

The maximum current to be circulated by the lamp shall be the same as that for which the lamp is
The denominator in the above expression takes its minimum value. Using the aid
We can identify $a = R_P$ and $b = 48\,R_L$ ($R_P = 3\ \Omega$ and $R_L = 9\ \Omega$) we can determine

$$N^2 = \frac{48 \cdot R_L}{R_P} = 144$$
$$N = 12$$

That means the maximum current will pass through the lamp when we put a circuit with
Four branches with 12 batteries in each.

Another possibility is to evaluate the total current expression for all
possible combinations of M and N.

| N | M | I [A] |
|---|---|---|
| 1 | 48 | 0.662 |
| 2 | 24 | 1.297 |
| 3 | 16 | 1.882 |
| 4 | 12 | 2.400 |
| 6 | 8 | 3.200 |
| 8 | 6 | 3.692 |
| 12 | 4 | 4.000 |
| 16 | 3 | 3.840 |
| 24 | 2 | 3.200 |
| 48 | 1 | 1.882 |

Where it is clear that the maximum current is achieved with a circuit containing
Four branches with 12 batteries in each.

(c) Total = 2 points.

How the lamp is 100 W with an internal resistance of 9 $\Omega$ the maximum current
What can happen to her is:

$$P = i_\text{max}^2 \cdot R$$
$$i_\text{max} = \sqrt{\frac{P}{R}} = \sqrt{11.1}\ \text{A} = 3.3\ \text{A}$$

(a) the number of days

Therefore, by analyzing the table above, the maximum current that can be passed
For the unlit lamp, it's 3.2 A.

There are two possible circuits for achieving this current, one of 8 branches with 6 batteries in
Each of them (N = 6 and M = 8) or one of 2 branches with 24 batteries in each of them
(N = 24 y M = 2).

If you give 1 only circuit 0.5 points
If it gives the two possible circuits 1 point

(d) Total = 2 points.

With this maximum current of 3.2 A the power dissipated by the lamp is

$$P = i_\text{max}^2 \cdot R = (3.2\ \text{A})^2 \cdot 9\ \Omega = 92.16\ \text{W}$$

(Some of the following points)

The luminous power of the lamp shall be

$$P_L = 92.16\ \text{W} \cdot 6\ \frac{\text{lum}}{\text{W}} = 552.96\ \text{lum}$$

(Some of the following points)

How that light power is distributed in all directions in a hemisphere.
We have to have a distance L. The density of light power will be

$$\delta_{PL} = \frac{P_L}{2\pi L^2}$$

And the light from the lamp can be seen everywhere where this density of
If the light output is greater than the sensitivity of the eye ($10^{-6}\ \text{lum/m}^2$), then

$$\delta_{PL} = \frac{P_L}{2\pi L^2} \geq 10^{-6}\ \frac{\text{lum}}{\text{m}^2}$$

(00.75 points)

$$L \leq \sqrt{\frac{P_L}{2 \cdot 10^{-6}\ \text{lum/m}^2}} = 9381.2\ \text{m}$$

(00.25 points)

It can also be considered good if the student takes the scattered light power in
the total sphere ($S = 4\pi L^2$), then the distance will be $L \leq 6633.5$ m.

**Topic:** [[Circuits]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Battery (object)|Battery]]
**Fonte:** [Testo (PDF) — p.13](https://drive.google.com/file/d/126QgIjCAz2XtSpFUOgsPOUksVygs0W3r/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Argent 2009 — Quesito 2" data-tags="kg/prova,paese/Argentina,comp/Argent,cluster/Termodinamica,object/pipe-tube"></span>

<div class="qlang-switch" data-default="es"></div>



Problema 2: Horno por radiación.

Un sistema para calentar agua de piletas de natación aprovechando la radiación
solar consiste de una cañería pintada de negro, por cuyo interior circula agua.
Externamente los caños están rodeados de un espacio al vacío delimitado por un tubo
de acrílico de baja conductividad térmica, evitando de esta manera los efectos de
convección y conducción del calor con el exterior. Aprovechando esta idea, un inventor
decide fabricar un horno que le permita calentar agua aprovechando la radiación solar.
De esta manera diseña la tapa del horno con las características mostradas en la Figura

La lámina intermedia está pintada de plateado de un lado y de negro del otro, lo
que permite reflejar o absorber la radiación que incide sobre ella regulando
la temperatura del interior del horno. Esta tapa puede ser colocada con el lado negro o el
plateado hacia fuera.

En un ambiente a temperatura de $20\ ^\circ\text{C}$, se encuentra experimentalmente que
cuando el sistema alcanza el estado estacionario (es decir todas las temperaturas se
mantienen constantes) la temperatura en el interior del horno es de $80\ ^\circ\text{C}$.

En estas condiciones y suponiendo que:

La tapa tiene un área de $1/2\ \text{m}^2$

La radiación solar promedio por unidad de área es $P_s = 1000\ \text{W/m}^2$

La reflectividad del lado plateado es del 90% y del lado negro del 10%.

a) Encontrar una expresión para la potencia absorbida por la lámina en términos de los
coeficientes de reflectividad interior (r) y exterior (R)

b) Encontrar una expresión para la potencia irradiada por la lámina en función de r, R y
su temperatura ($T_L$).

c) Encontrar una expresión para la temperatura que adquiere la lámina.

d) ¿En que caso (con la cara plateada hacia fuera o hacia adentro) la temperatura que
adquiere la lámina es mayor? Justifique.

e) ¿En que caso la potencia irradiada por la lámina hacia el interior del horno es mayor?
Justifique.

f) Calcule la potencia perdida por las paredes del horno en ambos casos.

AYUDA: Se sabe que la energía emitida por unidad de tiempo y por unidad de área por
un objeto a temperatura T está dada por la ley de Stefan-Boltzmann

$$E = e \cdot \sigma \cdot T_e^4 \qquad \sigma = 5{,}67 \cdot 10^{-8}\ \frac{\text{W}}{\text{m}^2 \cdot \text{K}^4}$$

donde $\sigma$ es una constante universal y e es la emisividad. Un cuerpo en equilibrio con
sus alrededores emite y absorbe la misma cantidad de energía en la unidad de tiempo,
manteniendo su temperatura constante. Para un absorbedor ideal e = 1.

Los coeficiente de absorción A y de reflectividad R satisfacen $A + R = 1$

La emisividad e es igual al coeficiente de absorción A.

Solución

a) Total = 2 puntos.

Si denominamos R a la reflectividad de la superficie expuesta hacia el exterior del horno
y r a la reflectividad de la superficie que queda hacia el interior del horno, resulta:

- Potencia absorbida de la radiación solar

$$P_{AS} = (1 - R) \cdot S \cdot P_s$$

(1 puntos)

- Potencia absorbida del ambiente exterior

$$P_{Aext} = (1 - R) \cdot S \cdot \sigma \cdot T_\text{ext}^4$$

(0.5 puntos)

- Potencia absorbida del interior del horno

$$P_{A\text{int}} = (1 - r) \cdot S \cdot \sigma \cdot T_\text{int}^4$$

(0.5 puntos)

Por lo tanto la potencia total absorbida por la lámina es

$$P_A = (1 - R) \cdot S \cdot P_s + (1 - R) \cdot S \cdot \sigma \cdot T_\text{ext}^4 + (1 - r) \cdot S \cdot \sigma \cdot T_\text{int}^4$$

b) Total = 2 puntos.

- Potencia irradiada al ambiente exterior por la lámina

$$P_{Iext} = (1 - R) \cdot S \cdot \sigma \cdot T_t^4$$

(1 punto)

- Potencia irradiada al interior del horno por la lámina

$$P_{I\text{int}} = (1 - r) \cdot S \cdot \sigma \cdot T_t^4$$

(1 punto)

Por lo tanto la potencia total irradiada por la lámina es

$$P_I = (2 - R - r) \cdot S \cdot \sigma \cdot T_t^4$$

c) Total = 2 puntos.

En el estado estacionario, cuando ya todas las temperaturas se mantienen constantes, la
potencia absorbida por la lámina es igual a la potencia irradiada por la misma.

$$P_A = P_I$$
$$(1 - R) \cdot S \cdot P_s + (1 - R) \cdot S \cdot \sigma \cdot T_\text{ext}^4 + (1 - r) \cdot S \cdot \sigma \cdot T_\text{int}^4 = (2 - R - r) \cdot S \cdot \sigma \cdot T_t^4$$
 (1 punto)

$$T_t = \sqrt[4]{\frac{(1 - R) \cdot P_s / \sigma + (1 - R) \cdot T_\text{ext}^4 + (1 - r) \cdot T_\text{int}^4}{(2 - R - r)}}$$

(1 punto)

d) Total = 1.5 puntos.

En la situación en que el lado negro de la lámina está hacia fuera R = 0.1 y r = 0.9
resultando:

$$T_t = 393.91\ \text{K} = 120.75\ ^\circ\text{C}$$

(0.75 puntos)

Cuando el lado plateado de la lámina está hacia fuera R = 0.91 y r = 0.1 resultando:

$$T_t = 358.42\ \text{K} = 85.26\ ^\circ\text{C}$$

(0.75 puntos)

Por lo tanto la temperatura de la lámina será mayor cuando el lado plateado de la misma
esté hacia dentro.

e) Total = 1.5 puntos.

La potencia irradiada por la lámina hacia el interior del horno es:

$$P_{I\text{int}} = (1 - r) \cdot S \cdot \sigma \cdot T_t^4$$

- Cuando el lado negro está hacia fuera r = 0.9 resultando:

$$P_{I\text{int}} = 68.26\ \text{W}$$

(0.75 puntos)

- Cuando el lado plateado está hacia fuera r = 0.1 resultando:

$$P_{I\text{int}} = 421.08\ \text{W}$$

(0.75 puntos)

f) Total = 1 puntos.

Cómo es sistema está en estado estacionario (todas las temperaturas de mantienen
constantes) la potencia perdida por las paredes del horno será igual a la potencia que le
entrega la lámina de la tapa, por lo tanto

- Cuando el lado negro está hacia fuera:

$$P_\text{perd} = 68.26\ \text{W}$$
(0.5 puntos)

- Cuando el lado plateado está hacia fuera:

$$P_\text{perd} = 421.08\ \text{W}$$
(0.5 puntos)

**Topic:** [[Thermodynamics]], [[Electromagnetism]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.17](https://drive.google.com/file/d/126QgIjCAz2XtSpFUOgsPOUksVygs0W3r/view)


<div class="qlang-split" data-lang="it"></div>

Problema 2: Forno a radiazioni.

Un sistema per riscaldare l'acqua da bagni da nuoto sfruttando la radiazione
Il sistema solare consiste in un canale dipinto di nero, attraverso il quale circola acqua.
Esternamente i tubi sono circondati da uno spazio vuoto delimitato da un tubo
di acrilico a bassa conducibilità termico, evitando così gli effetti di
convezione e conduzione del calore con l'esterno. Sfruttando questa idea, un inventore
decide di costruire un forno che gli permetta di riscaldare l'acqua utilizzando la radiazione solare.
In questo modo progetta la copertura del forno con le caratteristiche mostrate nella Figura

La lamina intermedia è dipinta di argento da un lato e di nero dall'altro, il
che consente di riflettere o assorbire la radiazione che incide su di essa regolamentando
la temperatura all'interno del forno. Questa copertura può essere collocata con il lato nero o il
Arricchito fuori.

In ambiente a temperatura $20\ ^\circ\text{C}$, si trova sperimentalmente che
quando il sistema raggiunge lo stato di stazione (cioè tutte le temperature sono
La temperatura all'interno del forno è $80\ ^\circ\text{C}$.

In queste condizioni, purché:

La copertura ha un'area di $1/2\ \text{m}^2$

La radiazione solare media per unità di area è $P_s = 1000\ \text{W/m}^2$

La riflettività del lato argento è del 90% e del lato nero del 10%.

a) Trovare un'espressione della potenza assorbita dalla lamina in termini di
Coefficienti di riflettività interna (r) ed esterna (R)

b) Trovare un'espressione per la potenza irradiata dalla lamina in funzione di r, R e
la sua temperatura ($T_L$).

c) Trovare un'espressione per la temperatura che la lamina acquista.

d) In che caso (con la faccia argento verso l'esterno o verso l'interno) la temperatura che
acquista la lamina è maggiore? giustifica.

e) In che caso la potenza irradiata dalla lamina verso l'interno del forno è maggiore?
giustifica.

f) Calcolare la potenza persa dalle pareti del forno in entrambi i casi.

Aiuto: è noto che l'energia emessa per unità di tempo e per unità di area per
un oggetto a temperatura T è dato dalla legge di Stefan-Boltzmann

$$E = e \cdot \sigma \cdot T_e^4 \qquad \sigma = 5{,}67 \cdot 10^{-8}\ \frac{\text{W}}{\text{m}^2 \cdot \text{K}^4}$$

dove $\sigma$ è una costante universale e e è l'emissività. Un corpo in equilibrio con
i suoi dintorni emettono e assorbono la stessa quantità di energia nell'unità di tempo;
mantenendo la temperatura costante. Per un assorbente ideale e = 1.

I coefficienti di assorbimento A e di riflettività R soddisfano $A + R = 1$

L'emissività e è pari al coefficiente di assorbimento A.

Soluzione

a) Total = 2 punti.

Se diamo R alla riflettività della superficie esposta all'esterno del forno
e r alla riflettività della superficie rimasta all'interno del forno, si ottiene:

- Potenza assorbita dalla radiazione solare

$$P_{AS} = (1 - R) \cdot S \cdot P_s$$

(1 punti)

- Potenza assorbita dall'ambiente esterno

$$P_{Aext} = (1 - R) \cdot S \cdot \sigma \cdot T_\text{ext}^4$$

0,5 punti)

- Potenza assorbita dall'interno del forno

$$P_{A\text{int}} = (1 - r) \cdot S \cdot \sigma \cdot T_\text{int}^4$$

0,5 punti)

La potenza totale assorbita dalla lamina è quindi

$$P_A = (1 - R) \cdot S \cdot P_s + (1 - R) \cdot S \cdot \sigma \cdot T_\text{ext}^4 + (1 - r) \cdot S \cdot \sigma \cdot T_\text{int}^4$$

b) Total = 2 punti.

- Potenza irradiata all'ambiente esterno dalla lamina

$$P_{Iext} = (1 - R) \cdot S \cdot \sigma \cdot T_t^4$$

(punto 1)

- Potenza irradiata all'interno del forno dalla lamina

$$P_{I\text{int}} = (1 - r) \cdot S \cdot \sigma \cdot T_t^4$$

(punto 1)

La potenza totale irradiata dalla lamina è quindi

$$P_I = (2 - R - r) \cdot S \cdot \sigma \cdot T_t^4$$

c) Total = 2 punti.

In stato stazionario, quando tutte le temperature sono state mantenute costanti, la temperatura è
la potenza assorbita dalla lamina è pari alla potenza irradiata dalla lamina.

$$P_A = P_I$$
$$(1 - R) \cdot S \cdot P_s + (1 - R) \cdot S \cdot \sigma \cdot T_\text{ext}^4 + (1 - r) \cdot S \cdot \sigma \cdot T_\text{int}^4 = (2 - R - r) \cdot S \cdot \sigma \cdot T_t^4$$
(punto 1)

$$T_t = \sqrt[4]{\frac{(1 - R) \cdot P_s / \sigma + (1 - R) \cdot T_\text{ext}^4 + (1 - r) \cdot T_\text{int}^4}{(2 - R - r)}}$$

(punto 1)

d) Total = 1,5 punti.

In una situazione in cui il lato nero della lamina è verso l'esterno R = 0,1 e r = 0,9
risultando:

$$T_t = 393.91\ \text{K} = 120.75\ ^\circ\text{C}$$

0,75 punti)

Quando il lato argento della lamina è verso l'esterno R = 0,91 e r = 0,1 risultando:

$$T_t = 358.42\ \text{K} = 85.26\ ^\circ\text{C}$$

0,75 punti)

Quindi la temperatura della lamina sarà maggiore quando il lato argento della stessa
- Sta' dentro.

e) Total = 1,5 punti.

La potenza irradiata dalla lamina verso l'interno del forno è:

$$P_{I\text{int}} = (1 - r) \cdot S \cdot \sigma \cdot T_t^4$$

- Quando il lato nero è verso l'esterno r = 0,9 risultando:

$$P_{I\text{int}} = 68.26\ \text{W}$$

0,75 punti)

- Quando il lato argento è verso l'esterno r = 0,1 risultando:

$$P_{I\text{int}} = 421.08\ \text{W}$$

0,75 punti)

f) Total = 1 punto.

Come è sistema è in stato di stazione (tutte le temperature di mantenere
- la potenza perduta dalle pareti del forno sarà pari alla potenza che viene
consegna la lamina della copertura, quindi

- Quando il lato nero è verso l'esterno:

$$P_\text{perd} = 68.26\ \text{W}$$
0,5 punti)

- Quando il lato argento è verso l'esterno:

$$P_\text{perd} = 421.08\ \text{W}$$
0,5 punti)

**Topic:** [[Thermodynamics]], [[Electromagnetism]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.17](https://drive.google.com/file/d/126QgIjCAz2XtSpFUOgsPOUksVygs0W3r/view)

<div class="qlang-split" data-lang="en"></div>

Problem two: radiation furnace.

A system for heating swimming pool water using radiation
The solar system consists of a black-painted pipeline through which water flows.
Externally the tubes are surrounded by a gap bounded by a tube
Low thermal conductivity acrylic, thus avoiding the effects of
heat convection and conduction with the outside. Taking advantage of this idea, an inventor
He decides to make a furnace that heals water using solar radiation.
This way he designs the oven lid with the characteristics shown in Figure

The middle sheet is painted silver on one side and black on the other, the
which allows the radiation to be reflected or absorbed by regulating it
the temperature inside the furnace. This cap can be placed with the black side or the
Silvered out.

In an environment with a temperature of $20\ ^\circ\text{C}$, it is experimentally found that
When the system reaches steady state (i.e. all temperatures are
The temperature inside the furnace is $80\ ^\circ\text{C}$.

Under these conditions and assuming that:

The cover has an area of $1/2\ \text{m}^2$

The average solar radiation per unit area is $P_s = 1000\ \text{W/m}^2$

The reflectivity on the silver side is 90% and the black side is 10%.

(a) Find an expression for the absorbed power of the sheet in terms of the
Inner and outer reflectivity coefficients (r)

(b) Find an expression for the power radiated by the sheet in terms of r, R and
the temperature of the product ($T_L$).

(c) Find an expression for the temperature acquired by the sheet.

(d) In which case (with the silver face facing out or in) the temperature at which the
Does the sheet get bigger? You justify it.

(e) In which case is the power radiated by the sheet into the furnace greater?
You justify it.

(f) Calculate the power lost by the furnace walls in both cases.

HELP: It is known that energy emitted per unit of time and per unit of area per
an object at temperature T is given by Stefan-Boltzmann's law

$$E = e \cdot \sigma \cdot T_e^4 \qquad \sigma = 5{,}67 \cdot 10^{-8}\ \frac{\text{W}}{\text{m}^2 \cdot \text{K}^4}$$

donde $\sigma$ es una constante universal y e es la emisividad. A body in balance with
its surroundings emit and absorb the same amount of energy per unit time,
Keeping its temperature constant. For an ideal absorber e = 1.

The absorption coefficients A and reflectivity coefficients R satisfy $A + R = 1$

The emissivity e is equal to the absorption coefficient A.

Solution

(a) Total = 2 points.

If we call R the reflectivity of the surface exposed to the outside of the furnace
and r to the reflectivity of the surface remaining inside the furnace, it is:

- Power absorbed from solar radiation

$$P_{AS} = (1 - R) \cdot S \cdot P_s$$

(one point)

- Power absorbed from the external environment

$$P_{Aext} = (1 - R) \cdot S \cdot \sigma \cdot T_\text{ext}^4$$

(Some of the following points)

- Power absorbed from the inside of the furnace

$$P_{A\text{int}} = (1 - r) \cdot S \cdot \sigma \cdot T_\text{int}^4$$

(Some of the following points)

Therefore the total power absorbed by the sheet is

$$P_A = (1 - R) \cdot S \cdot P_s + (1 - R) \cdot S \cdot \sigma \cdot T_\text{ext}^4 + (1 - r) \cdot S \cdot \sigma \cdot T_\text{int}^4$$

(b) Total = 2 points.

- Power radiated to the outside environment by the sheet

$$P_{Iext} = (1 - R) \cdot S \cdot \sigma \cdot T_t^4$$

(a) the number of days

- Power radiated to the inside of the furnace by the sheet

$$P_{I\text{int}} = (1 - r) \cdot S \cdot \sigma \cdot T_t^4$$

(a) the number of days

Therefore the total power radiated by the sheet is

$$P_I = (2 - R - r) \cdot S \cdot \sigma \cdot T_t^4$$

(c) Total = 2 points.

In the steady state, when all temperatures are already kept constant, the
The energy absorbed by the sheet is equal to the energy radiated by the sheet.

$$P_A = P_I$$
$$(1 - R) \cdot S \cdot P_s + (1 - R) \cdot S \cdot \sigma \cdot T_\text{ext}^4 + (1 - r) \cdot S \cdot \sigma \cdot T_\text{int}^4 = (2 - R - r) \cdot S \cdot \sigma \cdot T_t^4$$
(a) the number of days

$$T_t = \sqrt[4]{\frac{(1 - R) \cdot P_s / \sigma + (1 - R) \cdot T_\text{ext}^4 + (1 - r) \cdot T_\text{int}^4}{(2 - R - r)}}$$

(a) the number of days

(d) Total = 1.5 points.

In the situation where the black side of the sheet is outward R = 0.1 and r = 0.9
resulting in:

$$T_t = 393.91\ \text{K} = 120.75\ ^\circ\text{C}$$

(00.75 points)

When the silver side of the sheet is outward R = 0.91 and r = 0.1 resulting in:

$$T_t = 358.42\ \text{K} = 85.26\ ^\circ\text{C}$$

(00.75 points)

Therefore the temperature of the sheet will be higher when the silver side of the sheet is
Get in there.

(e) Total = 1.5 points.

The power radiated by the sheet into the furnace is:

$$P_{I\text{int}} = (1 - r) \cdot S \cdot \sigma \cdot T_t^4$$

- When the black side is outward r = 0.9 resulting in:

$$P_{I\text{int}} = 68.26\ \text{W}$$

(00.75 points)

- When the silver side is outward r = 0.1 resulting:

$$P_{I\text{int}} = 421.08\ \text{W}$$

(00.75 points)

(f) Total = 1 point.

How is the system in steady state (all temperatures of maintain
The power lost by the walls of the furnace shall be equal to the power lost by the furnace walls.
Delivers the lid sheet, therefore

- When the black side is out:

$$P_\text{perd} = 68.26\ \text{W}$$
(Some of the following points)

- When the silver side is out:

$$P_\text{perd} = 421.08\ \text{W}$$
(Some of the following points)

**Topic:** [[Thermodynamics]], [[Electromagnetism]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.17](https://drive.google.com/file/d/126QgIjCAz2XtSpFUOgsPOUksVygs0W3r/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Argent 2009 — Quesito 3" data-tags="kg/prova,paese/Argentina,comp/Argent,cluster/Termodinamica,object/prism,object/satellite,object/planet"></span>

<div class="qlang-switch" data-default="es"></div>



Problema 3: Una sorpresa extraterrestre.

Una civilización proveniente de algún sistema planetario lejano, pone en órbita
alrededor de la Luna un objeto en forma de prisma. Tan pronto como los humanos se
enteran de su presencia, los científicos de la Tierra comienzan a estudiar las propiedades
de ese extraño objeto. Las observaciones que realizaron indican que el objeto en su
movimiento orbital, permanece siempre en el plano de la órbita Tierra – Luna, que
realiza una órbita circular alrededor de la Luna, que la extensión de la bisectriz del
prisma pasa en todo momento por el centro de la Luna (ver figura 1) y que su período
de revolución es de 2 horas y 40 minutos. A partir de esta información,

a) calcule la distancia Luna – prisma.
Nota 1: Suponga que el efecto gravitatorio de la Tierra sobre el objeto es despreciable y
que para describir su movimiento alrededor de la Luna lo pensamos como un cuerpo
puntual.
Para estudiar tanto las características geométricas como el material con el que se ha
construido el prisma, los científicos planifican el siguiente experimento: cuando el
objeto se encuentra en la posición indicada en la figura 2 (dibujo no a escala), se envían
desde la Tierra dos poderosos rayos laser, paralelos al eje que pasa por el centro de la
Tierra, el centro de la Luna y por el vértice del prisma. Esos rayos, al tocar la superficie
del prisma, sufren tanto una reflexión como una refracción. Los rayos reflejados son
captados por sensores ubicados sobre la superficie lunar que se encuentran separados
entre si por una distancia $d_{AB} = 200$ km medida sobre la superficie lunar. A partir de
este dato:

b) Calcule el ángulo de refringencia $\alpha$ del prisma (ver figura 3).
Por otro lado, los rayos que se refractaron en el prisma, emergen del mismo por la cara
más cercana a la luna, para luego ser detectados por sensores ubicados sobre la
superficie lunar y separados por una distancia $d_{CD} = 100$ km (ver figura 2). A partir de
esta información.

c) Calcule el ángulo $\theta'_r$ con que los rayos emergen del prisma luego de la
segunda refracción (ver figura 3).
d) Muestre que el índice de refracción del prisma está dado por las siguiente
expresión:

$$n = \sqrt{\cos^2\!\left(\frac{\alpha}{2}\right) + \left(\frac{\operatorname{sen}\!\left(\frac{\theta'_r}{2}\right) + \operatorname{sen}\!\left(\frac{\alpha}{2}\right)}{\cos\!\left(\frac{\alpha}{2}\right)}\right)^2}$$

e) Determine el índice de refracción n del prisma. Exprese el resultado con
cuatro cifras significativas.
Nota 2: En los puntos b) y c) considere que el prisma es lo suficientemente pequeño
como para suponer que todos los rayos (tanto los reflejados como los refractados)
emergen de un único punto interior al prisma.
Nota 3: Considere que la luz se propaga a velocidad infinita.
Nota 4: Para todos los cálculos trabaje con seis cifras significativas.

Figura 1

Figura 2

Figura 3: Diagrama no a escala de uno de los rayos que inciden en el prisma y sus
respectivas refracciones. Los ángulos se han exagerado para mayor claridad en el
dibujo.

Datos necesarios:
1. Radio de la Luna: 1737 km
2. Índice de refracción del vacío: 1
3. Masa de la Luna: $7{,}35 \times 10^{22}$ kg
4. Constante Universal de la Gravitación: $6{,}67 \times 10^{-11}\ \text{m}^3\text{kg}^{-1}\text{s}^{-2}$

Fórmulas útiles:

$$\operatorname{sen}(a \pm b) = \operatorname{sen}(a)\cos(b) \pm \cos(a)\operatorname{sen}(b)$$
$$\cos(a \pm b) = \cos(a)\cos(b) \mp \operatorname{sen}(a)\operatorname{sen}(b)$$
$$\operatorname{sen}(a/2)\cos(a/2) = (1/2)\operatorname{sen}(a)$$

Recta normal al lado del prisma. Recta normal a la base del prisma. Rayo incidente.

Solución

a) Total = 2 puntos.

$$T = 2\text{h}\ 40' = 160' = 9600\ \text{s}$$

$$F = -\frac{G m_L m_p}{R^2} = -m \omega^2 R \qquad \text{(1.5 puntos)}$$
$$\omega = \frac{2\pi}{T}$$
$$R^3 = \frac{G m_L T^2}{4\pi^2} = 2253.54\ \text{km} \qquad \text{(0.5 puntos)}$$

b) Total = 2 puntos.

$$d_{AB} = 200\ \text{km}$$
$$\beta R_L = 200\ \text{km}$$
$$\beta = 0.115141\ \text{rad}$$
$$\beta/2 = 0.0575705\ \text{rad}$$

$$R_L \operatorname{sen}\!\left(\frac{\beta}{2}\right) = h$$
$$\tan(\alpha) = \left(\frac{h}{R - R_L \cos\!\left(\frac{\beta}{2}\right)}\right) = \left(\frac{R_L \operatorname{sen}\!\left(\frac{\beta}{2}\right)}{R - R_L \cos\!\left(\frac{\beta}{2}\right)}\right)$$
$$\tan(\alpha) = 0.192417$$
$$\alpha = 0.190094$$

c) Total = 2 puntos.

 De la misma forma que calculamos $\alpha$ podemos calcular $\theta'_r$.

$$d_{CD} = 100\ \text{km}$$
$$\gamma R_L = 100\ \text{km}$$
$$\gamma = 0.0575705\ \text{rad}$$
$$\gamma/2 = 0.0287853\ \text{rad}$$

$$\tan(\theta'_r) = \left(\frac{R_L \operatorname{sen}\!\left(\frac{\gamma}{2}\right)}{R - R_L \cos\!\left(\frac{\gamma}{2}\right)}\right)$$
$$\tan(\theta'_r) = 0.0966501$$
$$\theta'_r = 0.09635088\ \text{rad}$$

d) Total = 3 puntos

$$\theta_i = \frac{\pi}{2} - \frac{\alpha}{2} \qquad \text{(0.5 puntos)}$$
$$\operatorname{sen}(\theta_i) = n \operatorname{sen}(\theta_r) = \cos\!\left(\frac{\alpha}{2}\right) \qquad \text{(0.5 puntos)}$$
$$n \operatorname{sen}(\theta'_i) = \operatorname{sen}(\theta'_r) \qquad \text{(0.5 puntos)}$$
$$\theta_r + \theta'_i + \pi - \theta_i = \pi$$
$$\theta'_i = \frac{\pi}{2} - \frac{\alpha}{2} - \theta_r \qquad \text{(0.5 puntos)}$$
$$n \operatorname{sen}\!\left(\frac{\pi}{2} - \frac{\alpha}{2} - \theta_r\right) = \operatorname{sen}(\theta'_r)$$
$$n = \sqrt{\cos^2\!\left(\frac{\alpha}{2}\right) + \left(\frac{\operatorname{sen}(\theta'_r) + \operatorname{sen}\!\left(\frac{\alpha}{2}\right)}{\cos\!\left(\frac{\alpha}{2}\right)}\right)^2} \qquad \text{(1 punto)}$$

e)
$$n = 1.0138 \qquad \text{(1 punto)}$$

Recta normal al lado del prisma. Recta normal a la base del prisma. Rayo incidente.

**Topic:** [[Gravitation]], [[Geometric Optics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Snell's Law (metodo)|Snell's Law]], [[Ray Tracing (metodo)|Ray Tracing]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Significant Figures (competenza)|Significant Figures]]
**Objects:** [[Prism (object)|Prism]], [[Satellite (object)|Satellite]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.21](https://drive.google.com/file/d/126QgIjCAz2XtSpFUOgsPOUksVygs0W3r/view)


<div class="qlang-split" data-lang="it"></div>

Problema 3: Una sorpresa extraterrestre.

Una civiltà proveniente da qualche sistema planetario lontano, mette in orbita
intorno alla Luna un oggetto in forma di prisma. Non appena gli umani si
Quando hanno saputo della sua presenza, gli scienziati della Terra iniziano a studiare le proprietà
di quell'oggetto strano. Le osservazioni che hanno fatto indicano che l'oggetto nel suo
movimento orbitale, rimane sempre sul piano dell'orbita Terra  Luna, che
La sua orbita circolare attorno alla Luna è molto più elevata rispetto a quella della luna.
Il prisma passa in ogni momento attraverso il centro della Luna (vedi figura 1) e il suo periodo è di
La rivoluzione è di 2 ore e 40 minuti. Sulla base di queste informazioni,

a) Calcolare la distanza Luna  prisma.
Nota 1: Supponiamo che l'effetto gravitazionale della Terra sull'oggetto sia scarsa e
che per descrivere il suo movimento attorno alla Luna lo pensiamo come un corpo
puntuale.
Per studiare le caratteristiche geometriche e il materiale con cui si è
La ricerca ha portato a un nuovo approccio, il primo di cui è stato sviluppato.
oggetto si trova nella posizione indicata in figura 2 (disegno non a scala), sono inviati
da terra due potenti raggi laser, paralleli all'asse che attraversa il centro della Terra
Terra, centro della Luna e per la vertica del prisma. Quegli raggi, toccando la superficie
La loro riflessione e la loro refraczione sono due elementi che possono essere osservati. I raggi riflessi sono
rilevati da sensori situati sulla superficie lunare separati
tra loro per una distanza $d_{AB} = 200$ km misurata sulla superficie lunare. A partire da
il dato:

b) Calcolare l'angolo di rifresco $\alpha$ del prisma (vedere figura 3).
D'altra parte, i raggi che si sono refrattati nel prisma, emergono dal mismo attraverso il viso
più vicino alla luna, per poi essere rilevati da sensori posizionati sulla Terra.
superficie lunare e separati da una distanza $d_{CD} = 100$ km (vedere figura 2). A partire da
- questa informazione.

c) Calcolare l'angolo $\theta'_r$ con cui i raggi emergono dal prisma dopo la
Se la seconda refraczione è stata effettuata (vedi figura 3).
d) Dimostra che l'indice di refraczione del prisma è dato da:
espressione:

$$n = \sqrt{\cos^2\!\left(\frac{\alpha}{2}\right) + \left(\frac{\operatorname{sen}\!\left(\frac{\theta'_r}{2}\right) + \operatorname{sen}\!\left(\frac{\alpha}{2}\right)}{\cos\!\left(\frac{\alpha}{2}\right)}\right)^2}$$

e) Determina l'indice di refraczione n del prisma. Esprimere il risultato con
quattro cifre significative.
Nota 2: nei punti (b) e (c) considera che il prisma è sufficientemente piccolo
come supporre che tutti i raggi (tanto riflessi che refratti)
emerge da un unico punto interno alla prisma.
Nota 3: Considera che la luce si diffonde a velocità infinite.
Nota 4: Per tutti i calcoli, lavora con sei cifre significative.

Figura 1

Figura 2

Figura 3: Diagramma non a scala di uno dei raggi che incidono sul prisma e sui suoi
le rispettive refraczioni. Gli angoli sono stati esagerati per una maggiore chiarezza nel
- lo disegno.

Dati necessari:
1. Radios della Luna: 1737 km
2. Indice di refraczione del vuoto: 1
3. Massa della Luna: $7{,}35 \times 10^{22}$ kg
4. Costante universale di gravità: $6{,}67 \times 10^{-11}\ \text{m}^3\text{kg}^{-1}\text{s}^{-2}$

Formulazioni utili:

$$\operatorname{sen}(a \pm b) = \operatorname{sen}(a)\cos(b) \pm \cos(a)\operatorname{sen}(b)$$
$$\cos(a \pm b) = \cos(a)\cos(b) \mp \operatorname{sen}(a)\operatorname{sen}(b)$$
$$\operatorname{sen}(a/2)\cos(a/2) = (1/2)\operatorname{sen}(a)$$

Normalmente, prosegue accanto al prisma. Normalmente diretto alla base del prisma. Raggione incidente.

Soluzione

a) Total = 2 punti.

$$T = 2\text{h}\ 40' = 160' = 9600\ \text{s}$$

$$F = -\frac{G m_L m_p}{R^2} = -m \omega^2 R \qquad \text{(1.5 puntos)}$$
$$\omega = \frac{2\pi}{T}$$
$$R^3 = \frac{G m_L T^2}{4\pi^2} = 2253.54\ \text{km} \qquad \text{(0.5 puntos)}$$

b) Total = 2 punti.

$$d_{AB} = 200\ \text{km}$$
$$\beta R_L = 200\ \text{km}$$
$$\beta = 0.115141\ \text{rad}$$
$$\beta/2 = 0.0575705\ \text{rad}$$

$$R_L \operatorname{sen}\!\left(\frac{\beta}{2}\right) = h$$
$$\tan(\alpha) = \left(\frac{h}{R - R_L \cos\!\left(\frac{\beta}{2}\right)}\right) = \left(\frac{R_L \operatorname{sen}\!\left(\frac{\beta}{2}\right)}{R - R_L \cos\!\left(\frac{\beta}{2}\right)}\right)$$
$$\tan(\alpha) = 0.192417$$
$$\alpha = 0.190094$$

c) Total = 2 punti.

Così come abbiamo calcolato $\alpha$ possiamo calcolare $\theta'_r$.

$$d_{CD} = 100\ \text{km}$$
$$\gamma R_L = 100\ \text{km}$$
$$\gamma = 0.0575705\ \text{rad}$$
$$\gamma/2 = 0.0287853\ \text{rad}$$

$$\tan(\theta'_r) = \left(\frac{R_L \operatorname{sen}\!\left(\frac{\gamma}{2}\right)}{R - R_L \cos\!\left(\frac{\gamma}{2}\right)}\right)$$
$$\tan(\theta'_r) = 0.0966501$$
$$\theta'_r = 0.09635088\ \text{rad}$$

d) Total = 3 punti

$$\theta_i = \frac{\pi}{2} - \frac{\alpha}{2} \qquad \text{(0.5 puntos)}$$
$$\operatorname{sen}(\theta_i) = n \operatorname{sen}(\theta_r) = \cos\!\left(\frac{\alpha}{2}\right) \qquad \text{(0.5 puntos)}$$
$$n \operatorname{sen}(\theta'_i) = \operatorname{sen}(\theta'_r) \qquad \text{(0.5 puntos)}$$
$$\theta_r + \theta'_i + \pi - \theta_i = \pi$$
$$\theta'_i = \frac{\pi}{2} - \frac{\alpha}{2} - \theta_r \qquad \text{(0.5 puntos)}$$
$$n \operatorname{sen}\!\left(\frac{\pi}{2} - \frac{\alpha}{2} - \theta_r\right) = \operatorname{sen}(\theta'_r)$$
$$n = \sqrt{\cos^2\!\left(\frac{\alpha}{2}\right) + \left(\frac{\operatorname{sen}(\theta'_r) + \operatorname{sen}\!\left(\frac{\alpha}{2}\right)}{\cos\!\left(\frac{\alpha}{2}\right)}\right)^2} \qquad \text{(1 punto)}$$

e)
$$n = 1.0138 \qquad \text{(1 punto)}$$

Normalmente, prosegue accanto al prisma. Normalmente diretto alla base del prisma. Raggione incidente.

**Topic:** [[Gravitation]], [[Geometric Optics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Snell's Law (metodo)|Snell's Law]], [[Ray Tracing (metodo)|Ray Tracing]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Significant Figures (competenza)|Significant Figures]]
**Objects:** [[Prism (object)|Prism]], [[Satellite (object)|Satellite]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.21](https://drive.google.com/file/d/126QgIjCAz2XtSpFUOgsPOUksVygs0W3r/view)

<div class="qlang-split" data-lang="en"></div>

Problem three: An alien surprise.

A civilization from some distant planetary system, puts it in orbit.
Around the moon, a prism-shaped object. As soon as humans are
When they learn of its presence, Earth scientists begin to study its properties.
of that strange object. The observations made by the
Orbital motion, always remains in the plane of Earth  Moon orbit, which
It orbits the Moon in a circular orbit, which is the extension of the bisector of the Moon.
The prism passes at all times through the center of the Moon (see Figure 1) and its period is
The revolution is 2 hours and 40 minutes. Based on this information,

(a) calculate the distance Moon  prism.
Note 1: Suppose the Earth's gravitational effect on the object is negligible and
That to describe its motion around the moon, we think of it as a body.
I'm on time.
To study both geometric characteristics and the material with which it has been made
The scientists plan the following experiment:
object is in the position indicated in Figure 2 (not at scale), they are sent
From Earth, two powerful laser beams, parallel to the axis passing through the center of the Earth's orbit,
Earth, the center of the Moon and by the tip of the prism. Those lightning strikes the surface
The prism is reflected and refracted. The reflected rays are
Captured by sensors located on the lunar surface that are separate
each other by a distance $d_{AB} = 200$ km measured over the lunar surface. From
This data:

(b) Calculate the angle of refraction $\alpha$ of the prism (see Figure 3).
On the other hand, the rays that were refracted in the prism emerge from the same through the face
closer to the moon, to be detected by sensors located above the moon.
lunar surface and separated by a distance $d_{CD} = 100$ km (see Figure 2). From
This information.

(c) Calculate the angle $\theta'_r$ at which the rays emerge from the prism after the
The second refraction (see Figure 3).
(d) Show that the refractive index of the prism is given by the following:
The expression:

$$n = \sqrt{\cos^2\!\left(\frac{\alpha}{2}\right) + \left(\frac{\operatorname{sen}\!\left(\frac{\theta'_r}{2}\right) + \operatorname{sen}\!\left(\frac{\alpha}{2}\right)}{\cos\!\left(\frac{\alpha}{2}\right)}\right)^2}$$

(e) Determine the refractive index n of the prism. Express the result with
Four significant numbers.
Note 2: In points (b) and (c) consider that the prism is small enough
As to assume that all rays (both reflected and refracted)
emerge from a single point inside the prism.
Note 3: Consider that light is propagating at infinite speed.
Note 4: For all calculations work with six significant figures.

Figure 1

Figure 2

Figure 3: Non-scale diagram of one of the rays that strike the prism and its
the respective refractions. The angles have been exaggerated for greater clarity in the
I draw.

Data required:
1. Radius of the Moon: 1737 km
2. The vacuum refractive index: 1
3. The mass of the moon: $7{,}35 \times 10^{22}$ kg
4. Constante Universal de la Gravitación: $6{,}67 \times 10^{-11}\ \text{m}^3\text{kg}^{-1}\text{s}^{-2}$

Useful formulas:

$$\operatorname{sen}(a \pm b) = \operatorname{sen}(a)\cos(b) \pm \cos(a)\operatorname{sen}(b)$$
$$\cos(a \pm b) = \cos(a)\cos(b) \mp \operatorname{sen}(a)\operatorname{sen}(b)$$
$$\operatorname{sen}(a/2)\cos(a/2) = (1/2)\operatorname{sen}(a)$$

Normal straight next to the prism. Straight to the base of the prism. Lightning incident.

Solution

(a) Total = 2 points.

$$T = 2\text{h}\ 40' = 160' = 9600\ \text{s}$$

$$F = -\frac{G m_L m_p}{R^2} = -m \omega^2 R \qquad \text{(1.5 puntos)}$$
$$\omega = \frac{2\pi}{T}$$
$$R^3 = \frac{G m_L T^2}{4\pi^2} = 2253.54\ \text{km} \qquad \text{(0.5 puntos)}$$

(b) Total = 2 points.

$$d_{AB} = 200\ \text{km}$$
$$\beta R_L = 200\ \text{km}$$
$$\beta = 0.115141\ \text{rad}$$
$$\beta/2 = 0.0575705\ \text{rad}$$

$$R_L \operatorname{sen}\!\left(\frac{\beta}{2}\right) = h$$
$$\tan(\alpha) = \left(\frac{h}{R - R_L \cos\!\left(\frac{\beta}{2}\right)}\right) = \left(\frac{R_L \operatorname{sen}\!\left(\frac{\beta}{2}\right)}{R - R_L \cos\!\left(\frac{\beta}{2}\right)}\right)$$
$$\tan(\alpha) = 0.192417$$
$$\alpha = 0.190094$$

(c) Total = 2 points.

In the same way that we calculate $\alpha$ we can calculate $\theta'_r$.

$$d_{CD} = 100\ \text{km}$$
$$\gamma R_L = 100\ \text{km}$$
$$\gamma = 0.0575705\ \text{rad}$$
$$\gamma/2 = 0.0287853\ \text{rad}$$

$$\tan(\theta'_r) = \left(\frac{R_L \operatorname{sen}\!\left(\frac{\gamma}{2}\right)}{R - R_L \cos\!\left(\frac{\gamma}{2}\right)}\right)$$
$$\tan(\theta'_r) = 0.0966501$$
$$\theta'_r = 0.09635088\ \text{rad}$$

(d) Total = 3 points

$$\theta_i = \frac{\pi}{2} - \frac{\alpha}{2} \qquad \text{(0.5 puntos)}$$
$$\operatorname{sen}(\theta_i) = n \operatorname{sen}(\theta_r) = \cos\!\left(\frac{\alpha}{2}\right) \qquad \text{(0.5 puntos)}$$
$$n \operatorname{sen}(\theta'_i) = \operatorname{sen}(\theta'_r) \qquad \text{(0.5 puntos)}$$
$$\theta_r + \theta'_i + \pi - \theta_i = \pi$$
$$\theta'_i = \frac{\pi}{2} - \frac{\alpha}{2} - \theta_r \qquad \text{(0.5 puntos)}$$
$$n \operatorname{sen}\!\left(\frac{\pi}{2} - \frac{\alpha}{2} - \theta_r\right) = \operatorname{sen}(\theta'_r)$$
$$n = \sqrt{\cos^2\!\left(\frac{\alpha}{2}\right) + \left(\frac{\operatorname{sen}(\theta'_r) + \operatorname{sen}\!\left(\frac{\alpha}{2}\right)}{\cos\!\left(\frac{\alpha}{2}\right)}\right)^2} \qquad \text{(1 punto)}$$

e)
$$n = 1.0138 \qquad \text{(1 punto)}$$

Normal straight next to the prism. Straight to the base of the prism. Lightning incident.

**Topic:** [[Gravitation]], [[Geometric Optics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Snell's Law (metodo)|Snell's Law]], [[Ray Tracing (metodo)|Ray Tracing]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Significant Figures (competenza)|Significant Figures]]
**Objects:** [[Prism (object)|Prism]], [[Satellite (object)|Satellite]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.21](https://drive.google.com/file/d/126QgIjCAz2XtSpFUOgsPOUksVygs0W3r/view)
