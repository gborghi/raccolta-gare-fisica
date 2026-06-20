---
tipo: prova
prova_id: prova_2018 29_oaf_prueba_experimental
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2018'
level: ''
pdf: >-
  gare di altri paesi/Spagna/Saragozza-locali/2018
  29_oaf_prueba_experimental.pdf
cluster: Meccanica
n_problemi: '1'
tags:
  - kg/prova
  - anno/2018
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---

# Spagna 2018 — 2018 29_oaf_prueba_experimental.pdf

**Fonte:** `gare di altri paesi/Spagna/Saragozza-locali/2018 29_oaf_prueba_experimental.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Problema 1

**Problema experimental. Bobinas de Helmholtz.**

**Modelo teórico.**

El campo magnético en el centro O de una bobina de $N$ espiras circulares de radio $R$, delgadas y apretadas, por las que circula una corriente $I$ es

$$B_O = \frac{\mu_0 N I}{2R} \tag{1}$$

donde $\mu_0 = 4\pi \times 10^{-7}\,\text{N/A}^2$ es la permeabilidad del vacío. Este campo no es uniforme, sino que decrece rápidamente a lo largo del eje de simetría de la espira.

Uno de los montajes más empleados para obtener un campo magnético uniforme en una zona del espacio son las **bobinas de Helmholtz**: se hace circular la misma corriente y en el mismo sentido por dos bobinas iguales y coaxiales situadas en planos paralelos, separados una distancia igual al radio de las espiras. Con esta configuración, el campo magnético en torno al centro C del sistema es muy uniforme dentro de una región con dimensiones del orden de $R/2$.

El campo en C es directamente proporcional al número total $N$ de espiras de las dos bobinas ($N/2$ en cada una) y a la corriente $I$, pero se espera que $B_C$ sea inferior al que se tiene en el centro de una única bobina de $N$ espiras:

$$B_C = K\,B_O \tag{2}$$

donde $K$ es una constante menor que la unidad. El primer objetivo de esta prueba experimental es determinar el valor de esta constante.

Para medir el campo magnético se emplea una brújula formada por un imán cilíndrico colgado mediante un hilo. En equilibrio, el eje de la brújula se orienta en la dirección del campo magnético, y el periodo $T$ de pequeñas oscilaciones torsionales en torno a dicha dirección depende del módulo del campo, $B$, en la forma

$$\frac{1}{T^2} = \alpha\,B \tag{3}$$

donde $\alpha$ es una constante que depende del momento magnético del imán y del momento de inercia del cilindro. Para un cierto imán, se ha determinado experimentalmente:

$$\alpha = (1{,}0 \pm 0{,}4) \times 10^4\,\text{s}^{-2}\text{T}^{-1} \tag{4}$$

Las bobinas de Helmholtz se orientan con su eje en la dirección del campo magnético terrestre (componente horizontal) $B_H$, y la brújula se coloca en el centro de las bobinas, de forma que estará sometida a un campo total aproximadamente uniforme:

$$B = B_H + B_C = B_H + K\frac{\mu_0 N I}{2R} \tag{5}$$

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
**Fonte:** Testo (PDF) — p.1
