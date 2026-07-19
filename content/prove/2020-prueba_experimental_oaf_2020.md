---
title: Spagna 2020
tipo: prova
tags:
  - kg/prova
  - anno/2020
  - paese/Spagna
  - comp/Spagna
  - cluster/Onde e Oscillazioni
---
<div class="atom-reader" data-prova="2020-prueba_experimental_oaf_2020"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2020 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni,object/pipe-tube,object/piston,object/gas"></span>

<div class="qlang-switch" data-default="es"></div>



**Problema experimental. Ondas estacionarias en un tubo**

**Modelo teórico.**

Una onda sonora en un medio gaseoso es una perturbación longitudinal de la presión local del medio, en este caso aire, que se transmite con una velocidad $v$, que depende, entre otras cosas, de la temperatura a la que se encuentra el aire. Si el gas está confinado en un tubo, cuando dicha perturbación llega a un extremo del tubo se origina en dicho extremo una onda reflejada que se propaga en dirección opuesta. El movimiento resultante de una capa delgada del gas está determinado por el principio de superposición, que establece que el desplazamiento real de la capa de gas en cualquier instante se obtiene sumando el desplazamiento que habría experimentado la capa si sólo hubiera estado presente la primera onda, y el desplazamiento debido únicamente a la segunda onda. En términos matemáticos, el principio de superposición establece que la función que describe la onda resultante se obtiene sumando las funciones correspondientes a dos ondas primitivas, dando lugar para determinadas frecuencias al fenómeno de las ondas estacionarias.

Si la onda sonora de frecuencia $f$ y longitud de onda $\lambda$ se transmite por un tubo que tiene un extremo cerrado (donde tomamos $x = 0$) y un extremo abierto (donde tomamos $x = L$), el desplazamiento de las capas de gas dentro del tubo, alrededor de su posición de equilibrio, vendrá descrito por la expresión

$$\Psi(x,t) = \Psi_o \sin\!\left(\frac{2\pi}{\lambda}x\right)\cos(2\pi f\, t) \quad (1)$$

En la expresión (1) puede observarse que en determinadas posiciones del tubo (denominadas **nodos**) el aire está en reposo, mientras que en otras posiciones (denominadas **vientres** o **antinodos**) el aire vibra con amplitud máxima.

En este caso, la condición para producir ondas estacionarias (ver Fig. 1) es que el extremo cerrado coincida con un nodo de vibración de la capa delgada de aire y el extremo abierto con un vientre de vibración, lo que se consigue cuando la distancia $L_n$ entre el extremo cerrado y el extremo abierto es un número impar de veces $\lambda/4$, esto es

$$L_n = (2n-1)\frac{\lambda}{4} \quad (2)$$

donde $n$ (denominado orden o modo de la onda) es un número entero cualquiera, $n = 1, 2, 3,\ldots$ y coincide con el número de nodos. Utilizando la relación $f\cdot\lambda = v$ podemos expresar la ecuación anterior en función de la frecuencia $f$ y la velocidad $v$ de la onda,

$$f_n = (2n-1)\frac{v}{4L_n} \quad (3)$$

Los objetivos de esta práctica son la determinación de la longitud de onda y de la velocidad de la onda sonora que se propaga por el interior del tubo.

---

**Montaje experimental.**

En el laboratorio puede reproducirse un sencillo sistema para producir ondas estacionarias en tubos con el montaje mostrado en la figura 2. Se toma un tubo de vidrio y se coloca en uno de sus extremos un altavoz conectado a un generador de señal sinusoidal. Para cerrar un extremo del tubo se utiliza un pistón que permite, introduciéndolo mediante una varilla sujeta al mismo, variar la posición del extremo cerrado. De este modo se pueden determinar, para una frecuencia fija, las diferentes longitudes $L_n$ del tubo para las que se produce onda estacionaria.

Para localizar los nodos y vientres de la onda estacionaria se introduce por el tubo mediante otra varilla un pequeño micrófono conectado a un osciloscopio. Para permitir el paso del micrófono el pistón dispone en su centro de un pequeño agujero.

Dado que el micrófono es un transductor de presión, lo que observamos en la pantalla del osciloscopio es la variación de presión en el tubo. En los lugares donde el aire está en reposo la variación de presión es máxima, mientras que donde vibra con amplitud máxima, la variación de presión es cero, por lo que se puede expresar la onda de presión como

$$P(x,t) = P_o \cos\!\left(\frac{2\pi}{\lambda}x\right)\cos(2\pi f\, t) \quad (4)$$

Esto hace que en los nodos de vibración se obtenga variación de presión máxima y en los vientres variación de presión nula.

Se aplica al altavoz un voltaje sinusoidal de frecuencia

$$f = 2800{,}0 \pm 0{,}5\,\text{Hz} \quad (5)$$

Vamos introduciendo lentamente el pistón con el micrófono enrasado con su superficie (Fig. 3) para obtener los diferentes modos, que se producen cuando la lectura del osciloscopio sea máxima, lo que corresponde a un nodo en la pared del pistón. Sin mover el pistón se recorre con el micrófono el tubo y se cuenta el número de nodos, que se corresponde con el orden $n$ (modo $n$) de la onda estacionaria.

---

**Preguntas.**

En la siguiente tabla se recogen los valores de longitud libre del tubo, $L_n$, medidos para una serie de modos correlativos, $n$:

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| $L_n$ (mm) | 31 | 91 | 157 | 218 | 271 | 341 | 411 | 468 | 526 | 579 |

**(a)** Representa gráficamente en el papel milimetrado los puntos $(x,y) = (2n-1,\, L_n)$.

**(b)** Determina la pendiente, $p$, de la recta que mejor se ajusta a estos puntos.

**(c)** A partir de la pendiente $p$ y de las expresiones (2) y (3) deduce el valor de la velocidad del sonido, $v$, y de la longitud de onda $\lambda$.

**(d)** Haz una estimación razonada de la incertidumbre $\Delta p$ de la pendiente obtenida en el apartado b).

**(e)** Teniendo en cuenta lo anterior y la incertidumbre de $f$, haz una estimación de la incertidumbre $\Delta v$ de la velocidad del sonido que has obtenido en c).

<!--fig:start-->
![[_attachments/2020 prueba_experimental_oaf_2020/2020 prueba_experimental_oaf_2020_p1_f1.png]]
*Standing wave modes in closed-open tube*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2020 prueba_experimental_oaf_2020/2020 prueba_experimental_oaf_2020_p2_f2.png]]
*Experimental setup: speaker, tube, piston, microphone*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2020 prueba_experimental_oaf_2020/2020 prueba_experimental_oaf_2020_p2_f3.png]]
*Piston with central hole for microphone*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]], [[Piston (object)|Piston]], [[Gas (object)|Gas]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/13-lINr5CTTpE3ykkP816hVvIeN4frUL3/view)


<div class="qlang-split" data-lang="it"></div>

Il problema sperimentale. Valve stazionarie in un tubo**

**Modello teorico.**

Un'onda sonora in un ambiente gassoso è una perturbazione longitudinale della pressione locale del medio, in questo caso aria, che si trasmette a una velocità $v$, che dipende, tra le altre cose, dalla temperatura a cui si trova l'aria. Se il gas è confinato in un tubo, quando tale perturbazione raggiunge un'estremità del tubo, sorge a tale estremità un'onda riflessa che si diffonde nella direzione opposta. Il movimento risultante da una sottile pietra di gas è determinato dal principio di sovrapposizione, che stabilisce che il movimento reale della pietra di gas in qualsiasi istante si ottiene sommando il movimento che la pietra avrebbe sperimentato se solo la prima onda fosse stata presente, e il spostamento dovuto solo alla seconda onda. In termini matematici, il principio di sovrapposizione stabilisce che la funzione che descrive l'onda risultante si ottiene sommando le funzioni corrispondenti a due onde primitive, dando luogo per determinate frequenze al fenomeno delle onde stazionarie.

Se l'onda sonora di frequenza $f$ e lunghezza d'onda $\lambda$ viene trasmessa da un tubo che ha un'estremità chiusa (dove prendiamo $x = 0$) e un'estremità aperta (dove prendiamo $x = L$), il spostamento delle strati di gas all'interno del tubo, attorno alla sua posizione di equilibrio, verrà descritto dall'espressione

$$\Psi(x,t) = \Psi_o \sin\!\left(\frac{2\pi}{\lambda}x\right)\cos(2\pi f\, t) \quad (1)$$

In espressione (1) si può osservare che in determinate posizioni del tubo (denominate **nodos**) l'aria è a riposo, mentre in altre posizioni (denominate **ventri** o **antinodi**) l'aria vibra con massima amplitudine.

In questo caso, la condizione per produrre onde stazionarie (vedi Figura 1). 1) è che l'estremità chiusa coincide con un nodo di vibrazione del sottile strato di aria e l'estremità aperta con un ventre di vibrazione, che si ottiene quando la distanza $L_n$ tra l'estremità chiusa e l'estremità aperta è un numero impar di volte $\lambda/4$, cioè

$$L_n = (2n-1)\frac{\lambda}{4} \quad (2)$$

dove $n$ (denominato ordine o modalità di onda) è un intero qualsiasi, $n = 1, 2, 3,\ldots$ e corrisponde al numero di nodi. Usando il rapporto $f\cdot\lambda = v$ possiamo esprimere l'equazione precedente in funzione della frequenza $f$ e della velocità $v$ dell'onda,

$$f_n = (2n-1)\frac{v}{4L_n} \quad (3)$$

Gli obiettivi di questa pratica sono determinare la lunghezza d'onda e la velocità dell'onda sonora che si diffonde all'interno del tubo.

---

**Montaggio sperimentale.**

In laboratorio si può riprodurre un semplice sistema per produrre onde stazionarie in tubi con il montaggio mostrato nella figura 2. Si prende un tubo di vetro e si colloca ad una delle sue estremità un altoparlante collegato a un generatore di segnale sinusoidale. Per chiudere un'estremità del tubo si utilizza un pistone che permette, inserendolo mediante una canna adatta al tubo, di variare la posizione dell'estremità chiusa. In questo modo, per una frequenza fissa, si possono determinare le diverse lunghezze $L_n$ del tubo per cui si produce un'onda stazionaria.

Per localizzare i nodi e i ventre dell'onda stazionaria viene inserito attraverso il tubo con un altro bastone un piccolo microfono collegato ad un osciloscopio. Per permettere il passaggio del microfono il pistone dispone al suo centro di un piccolo buco.

Poiché il microfono è un trasduttore di pressione, quello che vediamo sullo schermo dell'oscilloscopio è la variazione della pressione nel tubo. In luoghi dove l'aria è a riposo la variazione di pressione è massima, mentre dove vibra con massima amplitudine, la variazione di pressione è zero, quindi si può esprimere l'onda di pressione come

$$P(x,t) = P_o \cos\!\left(\frac{2\pi}{\lambda}x\right)\cos(2\pi f\, t) \quad (4)$$

Ciò permette di ottenere variazioni di pressione massima nei nodi di vibrazione e variazioni di pressione zero nei vasi.

Si applica al altoparlante una tensione sinusoidale di frequenza

$$f = 2800{,}0 \pm 0{,}5\,\text{Hz} \quad (5)$$

In questo modo, il microfono è stato inserito lentamente nella superficie del pistone (Fig. 3) per ottenere le diverse modalità, che si verificano quando l'oscilloscopio è più grande, che corrisponde a un nodo nel muro del pistone. Senza spostare il pistone si passa attraverso il tubo con il microfono e si conta il numero di nodi, che corrisponde all'ordine $n$ (modo $n$) dell'onda stazionaria.

---

**Domande.**

La tabella seguente rileva i valori di lunghezza libera del tubo, $L_n$, misurati per una serie di modalità correlatrici, $n$:

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| $L_n$ (mm) | 31 | 91 | 157 | 218 | 271 | 341 | 411 | 468 | 526 | 579 |

**(a) ** Rappresenta graficamente i punti $(x,y) = (2n-1,\, L_n)$ su carta millimetrica.

**(b) ** Determina la pendenza, $p$, della retta che meglio si adatta a questi punti.

**(c) ** Dalla pendenza $p$ e dalle espressioni (2) e (3) si deduce il valore della velocità del suono, $v$, e della lunghezza d'onda $\lambda$.

**(d) ** Fa' una ragionevole stima dell'incertezza $\Delta p$ della pendenza ottenuta in (b).

**(e) ** Considerando quanto precede e l'incertezza di $f$, si deve calcolare l'incertezza $\Delta v$ della velocità del suono ottenuta in c).

<!--fig:start-->
![[_attachments/2020 prueba_experimental_oaf_2020/2020 prueba_experimental_oaf_2020_p1_f1.png]]
*Standing wave modes in closed-open tube*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2020 prueba_experimental_oaf_2020/2020 prueba_experimental_oaf_2020_p2_f2.png]]
*Settatura sperimentale: speaker, tube, pistone, microfono*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2020 prueba_experimental_oaf_2020/2020 prueba_experimental_oaf_2020_p2_f3.png]]
*Piston with central hole for microphone*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]], [[Piston (object)|Piston]], [[Gas (object)|Gas]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/13-lINr5CTTpE3ykkP816hVvIeN4frUL3/view)

<div class="qlang-split" data-lang="en"></div>

**Problema experimental. Ondas estacionarias en un tubo**

**Modelo teórico.**

A sound wave in a gaseous medium is a longitudinal disturbance of the local pressure of the medium, in this case air, which is transmitted at a speed $v$, which depends, inter alia, on the temperature at which the air is located. If the gas is confined in a tube, when such a disturbance reaches one end of the tube, a reflected wave originates at that end and spreads in the opposite direction. The resulting motion of a thin layer of gas is determined by the overlap principle, which states that the actual displacement of the gas layer at any moment is obtained by adding the displacement that the layer would have experienced if only the first wave had been present, and the displacement due only to the second wave. In mathematical terms, the principle of superposition states that the function describing the resulting wave is obtained by adding the functions corresponding to two primitive waves, giving rise to certain frequencies to the phenomenon of stationary waves.

If the frequency sound wave $f$ and wavelength $\lambda$ is transmitted through a tube that has a closed end (where we take $x = 0$) and an open end (where we take $x = L$), the displacement of the gas layers inside the tube, around its equilibrium position, will be described by the expression

$$\Psi(x,t) = \Psi_o \sin\!\left(\frac{2\pi}{\lambda}x\right)\cos(2\pi f\, t) \quad (1)$$

In expression (1) it can be observed that at certain positions of the tube (called **nodes**) air is at rest, while at other positions (called **belly** or **anthinoids**) air vibrates at maximum amplitude.

In this case, the condition for producing stationary waves (see Fig. 1) is that the closed end matches a vibration node of the thin layer of air and the open end with a vibration belly, which is achieved when the distance $L_n$ between the closed end and the open end is an odd number of times $\lambda/4$, that is

$$L_n = (2n-1)\frac{\lambda}{4} \quad (2)$$

where $n$ (called wave order or mode) is any integer, $n = 1, 2, 3,\ldots$ and corresponds to the number of nodes. Using the $f\cdot\lambda = v$ ratio we can express the above equation as a function of the frequency $f$ and the speed $v$ of the wave,

$$f_n = (2n-1)\frac{v}{4L_n} \quad (3)$$

The objectives of this practice are to determine the wavelength and speed of the sound wave propagating through the inside of the tube.

---

**Montaje experimental.**

In the laboratory a simple system for producing stationary waves in tubes with the assembly shown in Figure 2 can be reproduced. A glass tube is taken and a speaker connected to a sinusoidal signal generator is placed at one end. A piston is used to close one end of the tube, which allows the position of the closed end to be varied by inserting it with a rod attached to it. The different lengths $L_n$ of the tube for which a stationary wave is produced can thus be determined at a fixed frequency.

To locate the nodes and belly of the stationary wave, a small microphone connected to an oscilloscope is inserted through the tube using another rod. To allow the microphone to pass, the piston has a small hole in its center.

Since the microphone is a pressure transducer, what we see on the oscilloscope screen is the pressure variation in the tube. In places where air is at rest the pressure variation is maximum, whereas where it vibrates at maximum amplitude, the pressure variation is zero, so the pressure wave can be expressed as

$$P(x,t) = P_o \cos\!\left(\frac{2\pi}{\lambda}x\right)\cos(2\pi f\, t) \quad (4)$$

This results in a maximum pressure variation at the vibration nodes and a zero pressure variation in the wombs.

A frequency sinusoidal voltage is applied to the speaker

$$f = 2800{,}0 \pm 0{,}5\,\text{Hz} \quad (5)$$

We're slowly introducing the piston with the microphone tangled to its surface (Fig. 3) to obtain the different modes, which occur when the oscilloscope reading is maximum, which corresponds to a node in the piston wall. Sin mover el pistón se recorre con el micrófono el tubo y se cuenta el número de nodos, que se corresponde con el orden $n$ (modo $n$) de la onda estacionaria.

---

**Preguntas.**

The following table summarizes the tube free length values, $L_n$, measured for a series of correlative modes, $n$:

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| $L_n$ (mm) | 31 | 91 | 157 | 218 | 271 | 341 | 411 | 468 | 526 | 579 |

**(a) ** Graphically represents the $(x,y) = (2n-1,\, L_n)$ points on the millimeter paper.

**(b) ** Determine the slope, $p$, of the straight line that best fits these points.

**(c) ** From the slope $p$ and the expressions (2) and (3) deduces the value of the sound speed, $v$, and the wavelength $\lambda$.

**(d) ** Make a reasoned estimate of the slope uncertainty $\Delta p$ obtained in paragraph (b).

**(e) ** Considering the above and the uncertainty of $f$, estimate the uncertainty $\Delta v$ of the sound speed you have obtained in c).

<!--fig:start-->
![[_attachments/2020 prueba_experimental_oaf_2020/2020 prueba_experimental_oaf_2020_p1_f1.png]]
*Standing wave modes in closed-open tube*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2020 prueba_experimental_oaf_2020/2020 prueba_experimental_oaf_2020_p2_f2.png]]
*Experimental setup: speaker, tube, piston, microphone*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2020 prueba_experimental_oaf_2020/2020 prueba_experimental_oaf_2020_p2_f3.png]]
*Piston with central hole for microphone*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]], [[Piston (object)|Piston]], [[Gas (object)|Gas]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/13-lINr5CTTpE3ykkP816hVvIeN4frUL3/view)
