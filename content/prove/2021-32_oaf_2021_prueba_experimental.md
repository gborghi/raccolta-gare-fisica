---
title: Spagna 2021
tipo: prova
tags:
  - kg/prova
  - anno/2021
  - paese/Spagna
  - comp/Spagna
  - cluster/Gravitazione e Astrofisica
---
<div class="atom-reader" data-prova="2021-32_oaf_2021_prueba_experimental"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2021 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Gravitazione e Astrofisica,object/screen"></span>

<div class="qlang-switch" data-default="es"></div>



**Problema experimental. La ley del cuadrado de la distancia en fotometría.**

**Modelo teórico.**

La fotometría es el campo de la física que se encarga de determinar la capacidad de la luz para ser percibida por el ojo humano, es decir, estudia la capacidad que tiene la radiación electromagnética de estimular el sistema visual.

Para medir la cantidad de luz visible que emite una fuente luminosa se emplea una magnitud denominada **intensidad luminosa**, que es la energía por unidad de tiempo emitida por la fuente que llega a la unidad de superficie colocada a una distancia de 1 metro. Dicha energía está multiplicada por un factor que depende de la capacidad del ojo para percibir esa radiación. Así, la luz ultravioleta o infrarroja estaría multiplicada por un factor 0, mientras que la luz verde de 555 nm, para la que el ojo es más sensible, estaría multiplicada por un factor 1. La intensidad luminosa es una magnitud fundamental de la física (como la longitud, la masa o el tiempo) que tiene su propia unidad en el Sistema Internacional, la **candela** (cd).

En general, una fuente de luz no emite con la misma intensidad luminosa en todas las direcciones. En el caso de la luz led que utilizaremos en esta experiencia, la figura 1 muestra la distribución de intensidad en función del ángulo $\theta$ respecto del eje perpendicular al led, suministrada por el fabricante. Se puede ver que emite con máxima intensidad para $\theta = 0°$ y la fracción de intensidad respecto de la máxima (expresada en porcentaje) disminuye al apartarse progresivamente de esa dirección.

La magnitud que nos indica la iluminación que recibe una superficie se denomina **iluminancia**. Su unidad en el sistema internacional es el **lux** ($1\,\text{lux} = 1\,\text{candela/m}^2$).

Cuando iluminamos perpendicularmente una superficie con una fuente de luz puntual se observa que la iluminancia disminuye al alejar la superficie de la fuente. Así, para una fuente que emite con intensidad luminosa $I(\theta)$ en una determinada dirección, la iluminancia $E$ producida a una distancia $d$ será

$$E = \frac{I(\theta)}{d^2} \quad (1)$$

es decir, la iluminancia disminuye con el cuadrado de la distancia a la fuente.

El objetivo de esta práctica es la determinación de la intensidad luminosa de una fuente puntual (led) a partir de la medida de la iluminancia sobre una superficie colocada a distintas distancias de la fuente.

**Montaje experimental.**

En el laboratorio disponemos de una fuente de luz compuesta de un único led. El tamaño de dicho led es suficientemente pequeño para que se pueda considerar una fuente puntual cuando se observa a una distancia del orden de centímetros.

Para medir la iluminancia se utiliza un aparato denominado **luxómetro** (Fig. 2). Dispone de un fotorreceptor que convierte la energía luminosa en corriente eléctrica, y un lector que permite la lectura en una escala calibrada en lux.

La fuente de luz led se sitúa en un extremo de un banco óptico. A la misma altura que la fuente, y a una distancia inicial de 50 cm, se coloca una pantalla con una señal en su centro y se orienta la fuente de modo que la distribución de luz quede centrada con la señal del centro de la pantalla. Con ello nos aseguramos de estar recibiendo la luz emitida en el eje de la fuente, con una intensidad $I(0)$. Se desplaza la pantalla a lo largo del banco, alejándola de la fuente para comprobar que el sistema está bien alineado. Una vez alineado el sistema, se coloca el detector del luxómetro en la señal de la pantalla y se toma la medida de la iluminancia para diferentes posiciones de la pantalla.

**Preguntas.**

En la siguiente tabla se recogen los valores de iluminancia, $E$, medidos para diferentes posiciones del detector a diferentes distancias $d$ de la fuente.

| $d$ (cm) | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 |
|---|---|---|---|---|---|---|---|---|---|---|
| $E$ (lux) | 101 | 73,8 | 54,4 | 39,7 | 31,1 | 27,3 | 21,9 | 18,7 | 14,9 | 12,9 |

(a) Representa gráficamente en el papel milimetrado los puntos $\left(x, y\right) = \left(\frac{1}{d^2},\, E\right)$.

(b) Ajusta los puntos experimentales a una línea recta.

(c) Determina la intensidad luminosa de la fuente en su eje, $I(0)$.

(d) Haz una estimación razonada de la incertidumbre (margen de error) de $I(0)$.

(e) A partir de la figura 1, determina la intensidad luminosa que emite la fuente de luz a $45°$ respecto de su eje, $I(45°)$.

<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_experimental/2021 32_oaf_2021_prueba_experimental_p1_f1.png]]
*LED intensity distribution vs angle*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_experimental/2021 32_oaf_2021_prueba_experimental_p2_f2.png]]
*Luxmeter (luxómetro) photo*
<!--fig:end-->

**Topic:** [[Geometric Optics]], [[Order-of-Magnitude Estimation]], [[Electromagnetism]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Screen (object)|Screen]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1XD1gWEGZy8OD5RKVyzEZsK9miI_GWcGv/view)


<div class="qlang-split" data-lang="it"></div>

**Problema experimental. La legge del quadrato della distanza in fotometria.**

**Modello teorico.**

La fotometria è il campo della fisica che si occupa di determinare la capacità della luce da percepire dall'occhio umano, cioè studia la capacità che ha la radiazione elettromagnetica di stimolare il sistema visivo.

Per misurare la quantità di luce visibile emessa da una fonte luminosa si utilizza una magnitudine denominata ** intensità luminosa**, che è l'energia per unità di tempo emessa dalla fonte che raggiunge l'unità di superficie posta a una distanza di 1 metro. Questa energia è moltiplicata da un fattore che dipende dalla capacità dell'occhio di percepire quella radiazione. Così, la luce ultravioletta o infrarossa sarebbe moltiplicata di un fattore 0, mentre la luce verde di 555 nm, per la quale l'occhio è più sensibile, sarebbe moltiplicata di un fattore 1. L'intensità luminosa è una grandezza fondamentale della fisica (come la lunghezza, la massa o il tempo) che ha la sua unità nel Sistema Internazionale, la candela **** (cd).

In generale, una fonte di luce non emette con la stessa intensità luminosa in tutte le direzioni. Per il lampo LED che useremo in questa esperienza, la figura 1 mostra la distribuzione di intensità a seconda dell'angolo $\theta$ rispetto all'asse perpendicolare al LED, fornita dal produttore. Si può vedere che emette con massima intensità per $\theta = 0°$ e la frazione di intensità rispetto alla massima (espressa in percentuale) diminuisce all'andamento progressivamente da quella direzione.

La magnitudine che ci indica l'illuminazione che riceve una superficie è denominata **illuminazione**. La sua unità nel sistema internazionale è il **lux** ($1\,\text{lux} = 1\,\text{candela/m}^2$).

Quando illuminiamo perpendicularmente una superficie con una fonte di luce puntuale si osserva che l'illuminazione diminuisce all'andamento della superficie dalla fonte. Per un'intensità luminosa $I(\theta)$ in una determinata direzione, l'illuminazione $E$ prodotta a distanza $d$ sarà

$$E = \frac{I(\theta)}{d^2} \quad (1)$$

Cioè, l'illuminazione diminuisce a seconda del quadrato della distanza dalla sorgente.

L'obiettivo di questa pratica è determinare l'intensità luminosa di una fonte puntuale (led) a partire dalla misura dell'illuminazione su una superficie posta a diverse distanze dalla fonte.

**Montaggio sperimentale.**

In laboratorio abbiamo una fonte di luce composta da un unico led. Il formato di tale led è sufficientemente piccolo da essere considerato una fonte puntuale quando osservato a una distanza dell'ordine di centimetri.

Per misurare l'illuminazione si utilizza un apparecchio denominato **lusso-metro** (Fig. 2). Dispone di un fotorecepitore che converte l'energia luminosa in corrente elettrica, e di un lettore che permette la lettura su una scala calibrata in lux.

La fonte di luce LED è posta su un'estremità di un banco ottico. All'altezza della sorgente, a una distanza iniziale di 50 cm, si pone uno schermo con un segnale al centro e si orienta la sorgente in modo che la distribuzione della luce sia focalizzata sul segnale del centro dello schermo. In questo modo si assicura che la luce emessa nell'asse della fonte sia ricevuta con un'intensità $I(0)$. Si sposta lo schermo lungo la banchina, allontanandolo dalla fonte per verificare che il sistema sia ben allineato. Una volta allineato il sistema, si colloca il rilevatore del lussometro sul segnale dello schermo e si misura l'illuminazione per diverse posizioni dello schermo.

**Domande.**

La tabella seguente rileva i valori di illuminazione, $E$, misurati per diverse posizioni del rilevatore a diverse distanze $d$ dalla sorgente.

| $d$ (cm) | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 |
|---|---|---|---|---|---|---|---|---|---|---|
| $E$ (lux) | 101 | 73,8 | 54,4 | 39,7 | 31,1 | 27,3 | 21,9 | 18,7 | 14,9 | 12,9 |

(a) Rappresenta graficamente i punti $\left(x, y\right) = \left(\frac{1}{d^2},\, E\right)$ su carta millimetrica.

b) Aggiusta i punti sperimentali in una linea retta.

(c) Determina l'intensità luminosa della fonte sul suo asse, $I(0)$.

(d) Fare una ragionevole stima dell'incertezza (margine di errore) di $I(0)$.

(e) A partire da figura 1, determina l'intensità luminosa emessa dalla fonte luminosa a $45°$ rispetto al suo asse, $I(45°)$.

<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_experimental/2021 32_oaf_2021_prueba_experimental_p1_f1.png]]
*LED intensity distribution vs angle*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_experimental/2021 32_oaf_2021_prueba_experimental_p2_f2.png]]
*Luxmeter (lusso-metro) photo*
<!--fig:end-->

**Topic:** [[Geometric Optics]], [[Order-of-Magnitude Estimation]], [[Electromagnetism]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Screen (object)|Screen]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1XD1gWEGZy8OD5RKVyzEZsK9miI_GWcGv/view)

<div class="qlang-split" data-lang="en"></div>

**Problema experimental. The law of the square of distance in photometry.**

**Modelo teórico.**

Photometry is the field of physics that determines the ability of light to be perceived by the human eye, that is, it studies the ability of electromagnetic radiation to stimulate the visual system.

To measure the amount of visible light emitted by a light source, a magnitude called ** luminous intensity** is used, which is the energy per unit of time emitted by the source that reaches the surface unit placed at a distance of 1 meter. This energy is multiplied by one factor that depends on the eye's ability to perceive that radiation. So ultraviolet or infrared light would be multiplied by a factor of 0, while 555 nm green light, for which the eye is most sensitive, would be multiplied by a factor of 1. Light intensity is a fundamental quantity of physics (such as length, mass or time) that has its own unit in the International System, the **candle** (cd).

Generally, a light source does not emit the same light intensity in all directions. In the case of the LED light we will use in this experiment, Figure 1 shows the distribution of intensity according to the angle $\theta$ with respect to the axis perpendicular to the LED, supplied by the manufacturer. It can be seen that it emits at maximum intensity for $\theta = 0°$ and the fraction of intensity relative to the maximum (expressed as a percentage) decreases as it progressively moves away from that direction.

The magnitude that tells us the illumination received by a surface is called **luminance**. Its unit in the international system is the **lux** ($1\,\text{lux} = 1\,\text{candela/m}^2$).

When we illuminate perpendicularly a surface with a point light source, we observe that the illuminance decreases as the surface is moved away from the source. Thus, for a source emitting light intensity $I(\theta)$ in a given direction, the illuminance $E$ produced at a distance $d$ shall be

$$E = \frac{I(\theta)}{d^2} \quad (1)$$

That is, the illuminance decreases with the square of the distance to the source.

The objective of this practice is to determine the luminous intensity of a point source (led) from the measurement of illuminance on a surface placed at different distances from the source.

**Montaje experimental.**

In the lab we have a light source made up of a single LED. The size of such LED is small enough to be considered a point source when viewed at a distance of the order of centimetres.

A device called **luxometre** is used to measure the illuminance (Fig. 2). It has a photoreceptor that converts light energy into electric current, and a reader that allows reading on a lux-calibrated scale.

The LED light source is located at one end of an optical bench. At the same height as the source, and at an initial distance of 50 cm, a screen with a signal in its center is placed and the source is oriented so that the light distribution is centered with the signal from the center of the screen. This ensures that the light emitted on the source axis is received with an intensity $I(0)$. The screen is moved along the bank, moving it away from the source to check that the system is well aligned. Once the system is aligned, the luxometer detector is placed on the display signal and the illuminance for different screen positions is measured.

**Preguntas.**

The following table summarizes the illuminance values, $E$, measured for different detector positions at different distances $d$ from the source.

| $d$ (cm) | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 |
|---|---|---|---|---|---|---|---|---|---|---|
| $E$ (lux) | 101 | 73,8 | 54,4 | 39,7 | 31,1 | 27,3 | 21,9 | 18,7 | 14,9 | 12,9 |

(a) Graphically represent the $\left(x, y\right) = \left(\frac{1}{d^2},\, E\right)$ points on millimeter paper.

(b) Adjust the experimental points to a straight line.

(c) Determine the light intensity of the source on its axis, $I(0)$.

(d) Make a reasonable estimate of the uncertainty (error margin) of $I(0)$.

(e) From Figure 1, determine the luminous intensity emitted by the light source at $45°$ with respect to its axis, $I(45°)$.

<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_experimental/2021 32_oaf_2021_prueba_experimental_p1_f1.png]]
*LED intensity distribution vs angle*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2021 32_oaf_2021_prueba_experimental/2021 32_oaf_2021_prueba_experimental_p2_f2.png]]
*Luxmeter (luxómetro) photo*
<!--fig:end-->

**Topic:** [[Geometric Optics]], [[Order-of-Magnitude Estimation]], [[Electromagnetism]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Screen (object)|Screen]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1XD1gWEGZy8OD5RKVyzEZsK9miI_GWcGv/view)
