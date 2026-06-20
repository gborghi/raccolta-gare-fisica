---
tipo: prova
prova_id: prova_2021 32_oaf_2021_prueba_experimental
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2021'
level: ''
pdf: >-
  gare di altri paesi/Spagna/Saragozza-locali/2021
  32_oaf_2021_prueba_experimental.pdf
cluster: Gravitazione e Astrofisica
n_problemi: '1'
tags:
  - kg/prova
  - anno/2021
  - paese/Spagna
  - comp/Spagna
  - cluster/Gravitazione e Astrofisica
---

# Spagna 2021 — 2021 32_oaf_2021_prueba_experimental.pdf

**Fonte:** `gare di altri paesi/Spagna/Saragozza-locali/2021 32_oaf_2021_prueba_experimental.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Gravitazione e Astrofisica]]

## Problema 1

**Problema experimental. La ley del cuadrado de la distancia en fotometría.**

**Modelo teórico.**

La fotometría es el campo de la física que se encarga de determinar la capacidad de la luz para ser percibida por el ojo humano, es decir, estudia la capacidad que tiene la radiación electromagnética de estimular el sistema visual.

Para medir la cantidad de luz visible que emite una fuente luminosa se emplea una magnitud denominada **intensidad luminosa**, que es la energía por unidad de tiempo emitida por la fuente que llega a la unidad de superficie colocada a una distancia de 1 metro. Dicha energía está multiplicada por un factor que depende de la capacidad del ojo para percibir esa radiación. Así, la luz ultravioleta o infrarroja estaría multiplicada por un factor 0, mientras que la luz verde de 555 nm, para la que el ojo es más sensible, estaría multiplicada por un factor 1. La intensidad luminosa es una magnitud fundamental de la física (como la longitud, la masa o el tiempo) que tiene su propia unidad en el Sistema Internacional, la **candela** (cd).

En general, una fuente de luz no emite con la misma intensidad luminosa en todas las direcciones. En el caso de la luz led que utilizaremos en esta experiencia, la figura 1 muestra la distribución de intensidad en función del ángulo $\theta$ respecto del eje perpendicular al led, suministrada por el fabricante. Se puede ver que emite con máxima intensidad para $\theta = 0°$ y la fracción de intensidad respecto de la máxima (expresada en porcentaje) disminuye al apartarse progresivamente de esa dirección.

La magnitud que nos indica la iluminación que recibe una superficie se denomina **iluminancia**. Su unidad en el sistema internacional es el **lux** ($1\,\text{lux} = 1\,\text{candela/m}^2$).

Cuando iluminamos perpendicularmente una superficie con una fuente de luz puntual se observa que la iluminancia disminuye al alejar la superficie de la fuente. Así, para una fuente que emite con intensidad luminosa $I(\theta)$ en una determinada dirección, la iluminancia $E$ producida a una distancia $d$ será

$$E = \frac{I(\theta)}{d^2} \tag{1}$$

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
**Fonte:** Testo (PDF) — p.1
