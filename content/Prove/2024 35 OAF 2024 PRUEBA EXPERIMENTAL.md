---
tipo: prova
prova_id: prova_2024 35 OAF 2024 PRUEBA EXPERIMENTAL
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2024'
level: ''
pdf: >-
  gare di altri paesi/Spagna/Saragozza-locali/2024 35 OAF 2024 PRUEBA
  EXPERIMENTAL.pdf
cluster: Gravitazione e Astrofisica
n_problemi: '1'
tags:
  - kg/prova
  - anno/2024
  - paese/Spagna
  - comp/Spagna
  - cluster/Gravitazione e Astrofisica
---

# Spagna 2024 — 2024 35 OAF 2024 PRUEBA EXPERIMENTAL.pdf

**Fonte:** `gare di altri paesi/Spagna/Saragozza-locali/2024 35 OAF 2024 PRUEBA EXPERIMENTAL.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Gravitazione e Astrofisica]]

## Problema 1

**Problema experimental. Medir la masa de un astronauta**

En una nave que orbita alrededor de la Tierra no se puede usar una báscula para pesar a los astronautas, debido a que se experimenta una sensación de ingravidez. Por ello, la masa de los astronautas en la estación espacial ISS se mide con un aparato que se basa en el movimiento vibratorio armónico, denominado Body Mass Measurement Device. Cuando el astronauta se coloca en él, el aparato inicia un movimiento vibratorio y mide el periodo de oscilación, a partir del cual se determina la masa del astronauta.

**Modelo teórico.**

Si se coloca una masa $M$ sobre un resorte ideal (sin masa) de constante elástica $k$ y se le da un pequeño empujón vertical, $M$ oscila armónicamente con un periodo

$$T = 2\pi\sqrt{\frac{M}{k}}, \tag{1}$$

de donde se puede obtener el valor de $M$ en función de $T$,

$$M = \frac{k}{4\pi^2}T^2. \tag{2}$$

Por tanto, si se conoce $k$ y se mide $T$ con un cronómetro, es inmediato determinar $M$.

Los muelles reales tienen una masa $m$, no siempre despreciable frente a la masa $M$. Podría pensarse que, como la masa del resorte también oscila, el periodo de oscilación vendría dado por la misma expresión (1) sustituyendo $M$ por $M+m$. Pero esta idea no es correcta. Para comprenderlo, basta pensar que cada espira del resorte oscila con una amplitud diferente, desde la espira superior que lo hace con la misma amplitud que $M$, hasta la inferior que prácticamente no se mueve. Esto hace intuir una contribución parcial de $m$ a la masa efectiva oscilante, es decir que

$$T = 2\pi\sqrt{\frac{M + \alpha m}{k}}, \tag{3}$$

donde $\alpha$ es una constante menor que la unidad, en principio desconocida.

**Montaje experimental.**

En la figura 1 se muestra una fotografía del dispositivo de medida de la masa corporal del que va provisto la ISS, en el que se observa cómo debe sujetarse el astronauta debido a la ausencia de gravedad. Se muestra también un modelo simplificado del dispositivo: una plataforma de masa $M_p$ está sujeta a un muelle de masa $m$. A esta plataforma se sujeta la masa $M_a$ del astronauta, de modo que la masa suspendida será $M = M_p + M_a$.

Se separa la plataforma de la posición de equilibrio y se suelta, produciéndose la oscilación. Para calibrar el dispositivo es preciso determinar los valores de $k$ y $\alpha$, a partir de medidas de $T$ para diversos valores de $M_a$, mediante la relación que se obtiene de la ecuación (3),

$$M_a = \frac{k}{4\pi^2}T^2 - (M_p + \alpha m). \tag{4}$$

**Preguntas.**

En un experimento de calibración del Body Mass Measurement Device se miden los valores del periodo de oscilación $T$ cuando se colocan en el dispositivo cuerpos de masa $M_a$:

| $M_a$ (kg) | $T$ (s) |
|---|---|
| 0 | 0,71 |
| 20 | 1,58 |
| 40 | 2,03 |
| 60 | 2,38 |
| 80 | 2,80 |
| 100 | 3,04 |

a) Elabora una tabla de valores para los puntos $(x, y) = (T^2, M_a)$, y represéntalos gráficamente en el papel milimetrado.

b) Determina el valor de la pendiente $p$ de la recta que mejor se ajusta a estos puntos.

c) A partir de la pendiente $p$ y de la expresión (4) deduce el valor de la constante elástica del muelle, $k$.

d) Haz una estimación razonada de la incertidumbre $\Delta p$ de la pendiente obtenida en el apartado b).

e) Teniendo en cuenta lo anterior, haz una estimación de la incertidumbre $\Delta k$ en el valor de la constante elástica que has obtenido en c).

f) Determina el valor de la constante $\alpha$.

**Datos:** Masa del muelle, $m = 800$ g; masa de la plataforma, $M_p = 6{,}80$ kg.

<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA EXPERIMENTAL/2024 35 OAF 2024 PRUEBA EXPERIMENTAL_p2_f1.png]]
*ISS Body Mass Device and simplified spring-platform model*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]], [[Elasticity & Materials]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.2
