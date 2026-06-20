---
tipo: prova
prova_id: prova_2020 prueba_experimental_oaf_2020
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2020'
level: ''
pdf: >-
  gare di altri paesi/Spagna/Saragozza-locali/2020
  prueba_experimental_oaf_2020.pdf
cluster: Onde e Oscillazioni
n_problemi: '1'
tags:
  - kg/prova
  - anno/2020
  - paese/Spagna
  - comp/Spagna
  - cluster/Onde e Oscillazioni
---

# Spagna 2020 — 2020 prueba_experimental_oaf_2020.pdf

**Fonte:** `gare di altri paesi/Spagna/Saragozza-locali/2020 prueba_experimental_oaf_2020.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Onde e Oscillazioni]]

## Problema 1

**Problema experimental. Ondas estacionarias en un tubo**

**Modelo teórico.**

Una onda sonora en un medio gaseoso es una perturbación longitudinal de la presión local del medio, en este caso aire, que se transmite con una velocidad $v$, que depende, entre otras cosas, de la temperatura a la que se encuentra el aire. Si el gas está confinado en un tubo, cuando dicha perturbación llega a un extremo del tubo se origina en dicho extremo una onda reflejada que se propaga en dirección opuesta. El movimiento resultante de una capa delgada del gas está determinado por el principio de superposición, que establece que el desplazamiento real de la capa de gas en cualquier instante se obtiene sumando el desplazamiento que habría experimentado la capa si sólo hubiera estado presente la primera onda, y el desplazamiento debido únicamente a la segunda onda. En términos matemáticos, el principio de superposición establece que la función que describe la onda resultante se obtiene sumando las funciones correspondientes a dos ondas primitivas, dando lugar para determinadas frecuencias al fenómeno de las ondas estacionarias.

Si la onda sonora de frecuencia $f$ y longitud de onda $\lambda$ se transmite por un tubo que tiene un extremo cerrado (donde tomamos $x = 0$) y un extremo abierto (donde tomamos $x = L$), el desplazamiento de las capas de gas dentro del tubo, alrededor de su posición de equilibrio, vendrá descrito por la expresión

$$\Psi(x,t) = \Psi_o \sin\!\left(\frac{2\pi}{\lambda}x\right)\cos(2\pi f\, t) \tag{1}$$

En la expresión (1) puede observarse que en determinadas posiciones del tubo (denominadas **nodos**) el aire está en reposo, mientras que en otras posiciones (denominadas **vientres** o **antinodos**) el aire vibra con amplitud máxima.

En este caso, la condición para producir ondas estacionarias (ver Fig. 1) es que el extremo cerrado coincida con un nodo de vibración de la capa delgada de aire y el extremo abierto con un vientre de vibración, lo que se consigue cuando la distancia $L_n$ entre el extremo cerrado y el extremo abierto es un número impar de veces $\lambda/4$, esto es

$$L_n = (2n-1)\frac{\lambda}{4} \tag{2}$$

donde $n$ (denominado orden o modo de la onda) es un número entero cualquiera, $n = 1, 2, 3,\ldots$ y coincide con el número de nodos. Utilizando la relación $f\cdot\lambda = v$ podemos expresar la ecuación anterior en función de la frecuencia $f$ y la velocidad $v$ de la onda,

$$f_n = (2n-1)\frac{v}{4L_n} \tag{3}$$

Los objetivos de esta práctica son la determinación de la longitud de onda y de la velocidad de la onda sonora que se propaga por el interior del tubo.

---

**Montaje experimental.**

En el laboratorio puede reproducirse un sencillo sistema para producir ondas estacionarias en tubos con el montaje mostrado en la figura 2. Se toma un tubo de vidrio y se coloca en uno de sus extremos un altavoz conectado a un generador de señal sinusoidal. Para cerrar un extremo del tubo se utiliza un pistón que permite, introduciéndolo mediante una varilla sujeta al mismo, variar la posición del extremo cerrado. De este modo se pueden determinar, para una frecuencia fija, las diferentes longitudes $L_n$ del tubo para las que se produce onda estacionaria.

Para localizar los nodos y vientres de la onda estacionaria se introduce por el tubo mediante otra varilla un pequeño micrófono conectado a un osciloscopio. Para permitir el paso del micrófono el pistón dispone en su centro de un pequeño agujero.

Dado que el micrófono es un transductor de presión, lo que observamos en la pantalla del osciloscopio es la variación de presión en el tubo. En los lugares donde el aire está en reposo la variación de presión es máxima, mientras que donde vibra con amplitud máxima, la variación de presión es cero, por lo que se puede expresar la onda de presión como

$$P(x,t) = P_o \cos\!\left(\frac{2\pi}{\lambda}x\right)\cos(2\pi f\, t) \tag{4}$$

Esto hace que en los nodos de vibración se obtenga variación de presión máxima y en los vientres variación de presión nula.

Se aplica al altavoz un voltaje sinusoidal de frecuencia

$$f = 2800{,}0 \pm 0{,}5\,\text{Hz} \tag{5}$$

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
**Fonte:** Testo (PDF) — p.1
