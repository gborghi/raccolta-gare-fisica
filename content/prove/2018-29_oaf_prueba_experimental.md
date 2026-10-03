---
title: Spagna 2018
tipo: prova
tags:
  - kg/prova
  - anno/2018
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="2018-29_oaf_prueba_experimental"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2018 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/coil,object/magnet"></span>

<div class="qlang-switch" data-default="es"></div>



**Problema experimental. Bobinas de Helmholtz.**

**Modelo teórico.**

El campo magnético en el centro O de una bobina de $N$ espiras circulares de radio $R$, delgadas y apretadas, por las que circula una corriente $I$ es

$$B_O = \frac{\mu_0 N I}{2R} \quad (1)$$

donde $\mu_0 = 4\pi \times 10^{-7}\,\text{N/A}^2$ es la permeabilidad del vacío. Este campo no es uniforme, sino que decrece rápidamente a lo largo del eje de simetría de la espira.

Uno de los montajes más empleados para obtener un campo magnético uniforme en una zona del espacio son las **bobinas de Helmholtz**: se hace circular la misma corriente y en el mismo sentido por dos bobinas iguales y coaxiales situadas en planos paralelos, separados una distancia igual al radio de las espiras. Con esta configuración, el campo magnético en torno al centro C del sistema es muy uniforme dentro de una región con dimensiones del orden de $R/2$.

El campo en C es directamente proporcional al número total $N$ de espiras de las dos bobinas ($N/2$ en cada una) y a la corriente $I$, pero se espera que $B_C$ sea inferior al que se tiene en el centro de una única bobina de $N$ espiras:

$$B_C = K\,B_O \quad (2)$$

donde $K$ es una constante menor que la unidad. El primer objetivo de esta prueba experimental es determinar el valor de esta constante.

Para medir el campo magnético se emplea una brújula formada por un imán cilíndrico colgado mediante un hilo. En equilibrio, el eje de la brújula se orienta en la dirección del campo magnético, y el periodo $T$ de pequeñas oscilaciones torsionales en torno a dicha dirección depende del módulo del campo, $B$, en la forma

$$\frac{1}{T^2} = \alpha\,B \quad (3)$$

donde $\alpha$ es una constante que depende del momento magnético del imán y del momento de inercia del cilindro. Para un cierto imán, se ha determinado experimentalmente:

$$\alpha = (1{,}0 \pm 0{,}4) \times 10^4\,\text{s}^{-2}\text{T}^{-1} \quad (4)$$

Las bobinas de Helmholtz se orientan con su eje en la dirección del campo magnético terrestre (componente horizontal) $B_H$, y la brújula se coloca en el centro de las bobinas, de forma que estará sometida a un campo total aproximadamente uniforme:

$$B = B_H + B_C = B_H + K\frac{\mu_0 N I}{2R} \quad (5)$$

Consideraremos $B_H$ como positivo, pero $B_C$ puede ser positivo o negativo según el sentido de la corriente $I$. El valor local de $B_H$ será la segunda incógnita del problema.

**Montaje experimental.**

El número total de espiras es $N = 20$ (10 espiras en cada bobina). El radio de las espiras es $R = 4{,}50\,\text{cm}$. La brújula se coloca en el centro de las bobinas. El montaje incluye una pila de alimentación, un potenciómetro para variar la corriente $I$ y un amperímetro para medirla. El periodo de oscilación torsional de la brújula se mide con un cronómetro manual.

**Preguntas.**

En la siguiente tabla se recogen los valores del periodo de oscilación torsional $T$ medidos a intervalos aproximadamente regulares de la corriente entre $I = -80\,\text{mA}$ e $I = 200\,\text{mA}$. Para mejorar la precisión de $T$, se ha medido el tiempo $t$ de 20 oscilaciones y calculado $T = t/20$.

| $I$ (mA) | $-80{,}5$ | $-59{,}8$ | $-40{,}1$ | $-20{,}4$ | $0{,}0$ | $20{,}1$ | $40{,}1$ | $60{,}2$ | $80{,}2$ | $100{,}1$ | $120{,}2$ | $138{,}8$ | $160{,}3$ | $180{,}3$ | $197{,}4$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $T$ (s) | $1{,}703$ | $1{,}415$ | $1{,}238$ | $1{,}107$ | $1{,}025$ | $0{,}945$ | $0{,}887$ | $0{,}822$ | $0{,}785$ | $0{,}750$ | $0{,}722$ | $0{,}690$ | $0{,}666$ | $0{,}644$ | $0{,}625$ |

a) Representa gráficamente en papel milimetrado los puntos $(x, y) = (I,\,1/T^2)$.

b) Determina la pendiente $p$ y la ordenada en el origen $y_0$ de la recta que mejor se ajusta a estos puntos.

c) Deduce los valores de la constante $K$ de las bobinas de Helmholtz y del campo magnético local $B_H$.

d) Haz una estimación razonada de la incertidumbre $\Delta p$ de la pendiente obtenida en el apartado b).

e) Teniendo en cuenta lo anterior y la incertidumbre de la constante $\alpha$ dada en (4), haz una estimación de la incertidumbre $\Delta K$ de la constante de las bobinas obtenida en c).

<!--fig:start-->
![[_attachments/2018 29_oaf_prueba_experimental/2018 29_oaf_prueba_experimental_p1_f1.png]]
*Fig. 1: single circular coil field direction*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2018 29_oaf_prueba_experimental/2018 29_oaf_prueba_experimental_p2_f2.png]]
*Fig. 2: Helmholtz coil pair geometry*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2018 29_oaf_prueba_experimental/2018 29_oaf_prueba_experimental_p3_f3.png]]
*Figs. 3-6: experimental setup photos and circuit*
<!--fig:end-->

**Topic:** [[Magnetism]], [[Oscillations & Waves]], [[Electromagnetism]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Coil (object)|Coil]], [[Magnet (object)|Magnet]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1TUt0CV7mZOPatZwW3KqCP_9lvVuKI3vX/view)


<div class="qlang-split" data-lang="it"></div>

Il problema sperimentale. Coioni di Helmholtz.**

**Modello teorico.**

Il campo magnetico al centro O di una bobina di $N$ spirale circolari di radio $R$, sottili e stretti, per le quali circola un corrente $I$ è

$$B_O = \frac{\mu_0 N I}{2R} \quad (1)$$

dove $\mu_0 = 4\pi \times 10^{-7}\,\text{N/A}^2$ è la permeabilità del vuoto. Questo campo non è uniforme, ma diminuisce rapidamente lungo l'asse di simmetria della spira.

Uno dei montamenti più utilizzati per ottenere un campo magnetico uniforme in una zona dello spazio sono i bobine di Helmholtz: si circola lo stesso corrente e nella stessa direzione da due bobine uguali e coassiali situate in piani paralleli, separate a una distanza pari al raggio delle spirale. Con questa configurazione, il campo magnetico attorno al centro C del sistema è molto uniforme all'interno di una regione con dimensioni dell'ordine $R/2$.

Il campo in C è direttamente proporzionale al numero totale di spirale $N$ delle due bobine ($N/2$ in ciascuna) e al corrente $I$, ma $B_C$ è previsto per essere inferiore a quello che si ha nel centro di una singola bobina di spirale $N$:

$$B_C = K\,B_O \quad (2)$$

dove $K$ è una costante minore dell'unità. Il primo obiettivo di questa prova sperimentale è determinare il valore di questa costante.

Per misurare il campo magnetico si utilizza una compassa formata da un magnete cilindrico appeso con un filo. In equilibrio, l'asse della compassa si orienta nella direzione del campo magnetico, e il periodo $T$ di piccole oscillazioni torsionali attorno a tale direzione dipende dal modulo del campo, $B$, in forma

$$\frac{1}{T^2} = \alpha\,B \quad (3)$$

dove $\alpha$ è una costante che dipende dal momento magnetico del magnete e dal momento di inerzia del cilindro. Per un certo magnate, si è dimostrato sperimentalmente:

$$\alpha = (1{,}0 \pm 0{,}4) \times 10^4\,\text{s}^{-2}\text{T}^{-1} \quad (4)$$

Le bobine di Helmholtz sono orientate con l'asse in direzione del campo magnetico terrestre (componente orizzontale) $B_H$, e la compassa è collocata al centro delle bobine, in modo che sia sottoposta a un campo totale approssimativamente uniforme:

$$B = B_H + B_C = B_H + K\frac{\mu_0 N I}{2R} \quad (5)$$

Considereremo $B_H$ come positivo, ma $B_C$ può essere positivo o negativo a seconda del senso del corrente $I$. Il valore locale di $B_H$ sarà il secondo incognito del problema.

**Montaggio sperimentale.**

Il numero totale di spirale è $N = 20$ (10 spirale su ciascuna bobina). Il raggio di spirale è $R = 4{,}50\,\text{cm}$. La compassa si colloca al centro delle bobine. Il montaggio comprende una pila di alimentazione, un potenziometro per variare il corrente $I$ e un amperimetro per misurarlo. Il periodo di oscillazione torzionale della compassa è misurato con un cronometro manuale.

**Domande.**

La tabella seguente rileva i valori del periodo di oscillazione torzionale $T$ misurati a intervalli di corrente approssimativamente regolari tra $I = -80\,\text{mA}$ e $I = 200\,\text{mA}$. Per migliorare l'accuratezza di $T$, è stato misurato il tempo $t$ di 20 oscillazioni e calcolato $T = t/20$.

| $I$ (mA) | $-80{,}5$ | $-59{,}8$ | $-40{,}1$ | $-20{,}4$ | $0{,}0$ | $20{,}1$ | $40{,}1$ | $60{,}2$ | $80{,}2$ | $100{,}1$ | $120{,}2$ | $138{,}8$ | $160{,}3$ | $180{,}3$ | $197{,}4$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $T$ (s) | $1{,}703$ | $1{,}415$ | $1{,}238$ | $1{,}107$ | $1{,}025$ | $0{,}945$ | $0{,}887$ | $0{,}822$ | $0{,}785$ | $0{,}750$ | $0{,}722$ | $0{,}690$ | $0{,}666$ | $0{,}644$ | $0{,}625$ |

a) Rappresenta graficamente i punti $(x, y) = (I,\,1/T^2)$ su carta millimetrica.

b) Determina la pendice $p$ e la pendice ordinata alla sorgente $y_0$ della retta che meglio si adatta a questi punti.

c) Deduce i valori della costante $K$ delle bobine di Helmholtz e del campo magnetico locale $B_H$.

d) Fare una ragionevole stima dell'incertezza $\Delta p$ della pendenza ottenuta in (b).

e) Considerando quanto sopra e l'incertezza della costante $\alpha$ di cui al punto (4), calcolare l'incertezza $\Delta K$ della costante dei bobini ottenuta in c).

<!--fig:start-->
![[_attachments/2018 29_oaf_prueba_experimental/2018 29_oaf_prueba_experimental_p1_f1.png]]
*Fig. 1: single circular coil field direction*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2018 29_oaf_prueba_experimental/2018 29_oaf_prueba_experimental_p2_f2.png]]
*Fig. 2: geometria di coppia di bobine Helmholtz*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2018 29_oaf_prueba_experimental/2018 29_oaf_prueba_experimental_p3_f3.png]]
Figs. 3-6: setup photos and circuit
<!--fig:end-->

**Topic:** [[Magnetism]], [[Oscillations & Waves]], [[Electromagnetism]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Coil (object)|Coil]], [[Magnet (object)|Magnet]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1TUt0CV7mZOPatZwW3KqCP_9lvVuKI3vX/view)

<div class="qlang-split" data-lang="en"></div>

**Experimental Problem. Helmholtz Coils.**

**Theoretical Model.**

The magnetic field at the center O of a coil consisting of $N$ circular turns of radius $R$, thin and tightly wound, through which a current $I$ flows, is

$$B_O = \frac{\mu_0 N I}{2R} \quad (1)$$

where $\mu_0 = 4\pi \times 10^{-7}\,\text{N/A}^2$ is the permeability of vacuum. This field is not uniform, but decreases rapidly along the symmetry axis of the coil.

One of the most commonly used setups to obtain a uniform magnetic field in a region of space are **Helmholtz coils**: the same current and direction are passed through two identical, coaxial coils located in parallel planes, separated by a distance equal to the radius of the turns. With this configuration, the magnetic field around the center C of the system is very uniform within a region whose dimensions are on the order of $R/2$.

The magnetic field at point C is directly proportional to the total number $N$ of turns in both coils ($N/2$ per coil) and to the current $I$, but it is expected that $B_C$ will be less than the field at the center of a single coil with $N$ turns:

$$B_C = K\,B_O \quad (2)$$

where $K$ is a constant less than unity. The first goal of this experimental test is to determine the value of this constant.

To measure the magnetic field, a compass is used consisting of a cylindrical magnet suspended by a thread. In equilibrium, the axis of the compass aligns with the direction of the magnetic field, and the period $T$ of small torsional oscillations around this direction depends on the magnitude of the field, $B$, according to

$$\frac{1}{T^2} = \alpha\,B \quad (3)$$

where $\alpha$ is a constant depending on the magnetic moment of the magnet and the moment of inertia of the cylinder. For a certain magnet, the following has been determined experimentally:

$$\alpha = (1{,}0 \pm 0{,}4) \times 10^4\,\text{s}^{-2}\text{T}^{-1} \quad (4)$$

The Helmholtz coils are oriented so that their axis lies along the direction of the Earth's magnetic field (horizontal component) $B_H$, and the compass is placed at the center of the coils so that it experiences a total magnetic field approximately uniform:

$$B = B_H + B_C = B_H + K\frac{\mu_0 N I}{2R} \quad (5)$$

We will consider $B_H$ positive, but $B_C$ may be positive or negative depending on the direction of current $I$. The local value of $B_H$ will be the second unknown in this problem.

**Experimental setup.**

The total number of turns is $N = 20$ (10 turns in each coil). The radius of the coils is $R = 4{,}50\,\text{cm}$. The compass is placed at the center of the coils. The setup includes a power supply, a potentiometer to vary the current $I$, and an ammeter to measure it. The torsional oscillation period of the compass is measured with a manual stopwatch.

**Questions.**

The following table collects the values of the torsional oscillation period $T$ measured at approximately regular intervals of the current between $I = -80\,\text{mA}$ and $I = 200\,\text{mA}$. To improve the accuracy of $T$, the time $t$ for 20 oscillations was measured and $T = t/20$ was calculated.

| $I$ (mA) | $-80{,}5$ | $-59{,}8$ | $-40{,}1$ | $-20{,}4$ | $0{,}0$ | $20{,}1$ | $40{,}1$ | $60{,}2$ | $80{,}2$ | $100{,}1$ | $120{,}2$ | $138{,}8$ | $160{,}3$ | $180{,}3$ | $197{,}4$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $T$ (s) | $1{,}703$ | $1{,}415$ | $1{,}238$ | $1{,}107$ | $1{,}025$ | $0{,}945$ | $0{,}887$ | $0{,}822$ | $0{,}785$ | $0{,}750$ | $0{,}722$ | $0{,}690$ | $0{,}666$ | $0{,}644$ | $0{,}625$ |

a) Plot the points $(x, y) = (I,\,1/T^2)$ on millimeter paper.

b) Determine the slope $p$ and the y-intercept $y_0$ of the straight line that best fits these points.

c) Deduce the values of the Helmholtz coil constant $K$ and the local magnetic field $B_H$.

d) Make a reasonable estimate of the uncertainty $\Delta p$ of the slope obtained in part b).

e) Taking into account the previous results and the uncertainty of the constant $\alpha$ given in (4), estimate the uncertainty $\Delta K$ of the coil constant obtained in c).

<!--fig:start-->
![[_attachments/2018 29_oaf_prueba_experimental/2018 29_oaf_prueba_experimental_p1_f1.png]]
*Fig. 1: single circular coil field direction*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2018 29_oaf_prueba_experimental/2018 29_oaf_prueba_experimental_p2_f2.png]]
*Fig. 2: Helmholtz coil pair geometry*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2018 29_oaf_prueba_experimental/2018 29_oaf_prueba_experimental_p3_f3.png]]
*Figs. 3-6: experimental setup photos and circuit*
<!--fig:end-->
