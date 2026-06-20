---
tipo: prova
prova_id: prova_P1_La_DANA_de_octubre
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2025'
level: ''
pdf: gare di altri paesi/Spagna/RSF/2025/P1_La_DANA_de_octubre.pdf
cluster: Meccanica
n_problemi: '10'
tags:
  - kg/prova
  - anno/2025
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---

# Spagna 2025 — P1_La_DANA_de_octubre.pdf

**Fonte:** `gare di altri paesi/Spagna/RSF/2025/P1_La_DANA_de_octubre.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Problema 1

**P1. La DANA de octubre** — Parte a)

El 29 de octubre de 2024 una gota fría o DANA (depresión aislada en niveles altos) desencadenó un episodio extraordinario de lluvias que produjo el desbordamiento de ríos y ramblas en el sureste de la península. La estación meteorológica de Turís registró el récord histórico de 185 l/m² en una hora.

Los pluviómetros miden el agua de lluvia de dos formas: en litros por metro cuadrado (l/m²) o en milímetros (mm). La precipitación expresada en mm corresponde al espesor de la lámina de agua que se formaría sobre una superficie plana e impermeable.

Obtenga la conversión entre mm y l/m² de lluvia. ¿Qué altura alcanzó el agua dentro de un caldero cilíndrico en Turís tras la hora de lluvia más intensa?

<!--fig:start-->
![[_attachments/P1_La_DANA_de_octubre/P1_La_DANA_de_octubre_p1_f1.png]]
*Mapa cuenca rambla del Poyo y zona inundada Valencia*
<!--fig:end-->

**Topic:** [[Fluid Mechanics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Unit Conversion (competenza)|Unit Conversion]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1

## Problema 2

**P1. La DANA de octubre** — Parte b)

La intensidad de la precipitación es la precipitación por unidad de tiempo. Supongamos una precipitación constante de intensidad $I$ que cae homogéneamente sobre una cuenca que abarca una superficie $S$. Como parte del agua se filtra en el suelo, la precipitación neta que discurre por el terreno es la precipitación real multiplicada por el llamado coeficiente de escorrentía, $k$. Toda el agua no infiltrada recogida por la cuenca genera al final de ésta un caudal de salida $Q$ (el caudal es volumen por unidad de tiempo, $Q = dV/dt$).

Obtenga el caudal $Q$ que genera la lluvia al final de una cuenca, en función de $I$, $S$ y $k$. Calcule el caudal máximo que circuló por la rambla del Poyo a la altura de la estación de aforo, sabiendo que su cuenca tiene una extensión de 479 km² y un coeficiente de escorrentía $k = 0{,}5$. (Recuerde que la estación sólo recoge agua de la mitad de la cuenca.) Dato: la precipitación media en la primera mitad de la cuenca fue de 500 l/m² en 6 horas.

**Topic:** [[Fluid Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1

## Problema 3

**P1. La DANA de octubre** — Parte c)

En el **modelo de reservorio** se considera una cuenca hidrográfica como un depósito abierto de superficie $S$, inicialmente vacío, cuyo volumen $V(t)$ varía debido al agua que aporta la lluvia al mismo tiempo que se desagua al cauce un caudal $Q(t)$. Este caudal es proporcional al volumen de agua contenido en el depósito, es decir: $Q(t) = V(t)/\tau$, donde $\tau$ es una constante con unidades de tiempo que da cuenta de la rapidez de una avenida. Para tener en cuenta la aportación de la lluvia al depósito, suponemos que llueve de forma constante y que la superficie de la cuenca recoge una intensidad de precipitación neta $kI$.

Demuestre que el volumen de agua que acumula la cuenca-depósito es

$$V(t) = SkI\tau\left(1 - e^{-t/\tau}\right)$$

Obtenga la expresión para el caudal $Q(t)$. Después de un tiempo prolongado, cuando el caudal ha alcanzado un valor máximo constante, deja de llover. Obtenga el caudal $Q(t)$ a partir del instante en que cesa la lluvia. Haga una gráfica del caudal en función del tiempo con la forma aproximada de la curva de crecida y la curva de recesión.

**Topic:** [[Fluid Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Physical Modeling (metodo)|Physical Modeling]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Problema 4

**P1. La DANA de octubre** — Parte d)

En la estación de aforo de la rambla del Poyo se registraron dos valores de caudal: $Q_1 = 800\ \text{m}^3/\text{s}$ a las 18:00 h y $Q_2 = 2283\ \text{m}^3/\text{s}$ a las 18:55 h. El caudal máximo calculado en el apartado b) es $Q_{\max} = SkI$.

Calcule el parámetro $\tau$ para la cuenca de la rambla del Poyo. ¿En cuántos minutos se alcanzó el último caudal registrado de 2283 m³/s, partiendo de un caudal nulo?

**Topic:** [[Fluid Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Problema 5

**P1. La DANA de octubre** — Parte e)

Una corriente de agua circula a velocidad $u$ a través de una sección transversal $A$ de un cauce.

Determine el caudal $Q$ de la corriente, en función de $A$ y $u$. Obtenga la potencia mecánica $P$ que genera la corriente, en función de $Q$, $u$ y la densidad $\rho$ del agua. ¿Cuál fue la velocidad y la potencia del agua en la rambla del Poyo a su paso por la estación de aforo justo antes de romperse el sensor?

Datos: el perfil transversal del cauce de la rambla, donde está la estación, es rectangular de 100 m de anchura; el nivel de agua llegó a 4,9 m; el último caudal registrado fue 2283 m³/s; la densidad del agua es 1000 kg/m³.

**Topic:** [[Fluid Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Continuity Equation (metodo)|Continuity Equation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Problema 6

**P1. La DANA de octubre** — Parte f)

Suponga que cuando el embalse de Forata alcanzó su máxima capacidad de 39 hm³ se hubiera roto la presa y que el vaciado total se hubiese producido en un tiempo de 1 h. Por simplicidad, consideramos que el embalse es paralelepípedo con un nivel del agua de 17 m.

Calcule el valor de la potencia generada por el vaciado del agua del embalse.

**Topic:** [[Fluid Mechanics]], [[Conservation of Energy]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Problema 7

**P1. La DANA de octubre** — Parte g)

Un **caudalímetro ultrasónico de tiempo de tránsito** consta de dos sensores colocados a lo largo del curso del agua separados una distancia $L$, que actúan a la vez como emisores y detectores de ultrasonidos. Cada sensor envía ondas que llegan al otro sensor después de reflejarse en una superficie situada enfrente de ambos. Las ondas emitidas por el sensor situado aguas arriba tardan un tiempo $t_1$ en llegar al segundo sensor, mientras que las ondas del que está aguas abajo tardan un tiempo $t_2$ en alcanzar al primero.

Demuestre que la velocidad del agua viene dada por la expresión

$$u \approx \frac{v_s^2 \,\Delta t}{2L}$$

donde $v_s$ es la velocidad del sonido en el agua y $\Delta t = t_2 - t_1$. (Utilice que $v_s^2 \gg u^2$ cuando sea necesario.)

<!--fig:start-->
![[_attachments/P1_La_DANA_de_octubre/P1_La_DANA_de_octubre_p2_f2.png]]
*Diagrama caudalímetro ultrasónico tiempo de tránsito*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]], [[Fluid Mechanics]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Problema 8

**P1. La DANA de octubre** — Parte h)

Otro sensor de ultrasonidos, que hace de **sensor de nivel**, está situado a una altura de 10 m sobre el lecho del río. Suponemos que el cauce es rectangular de 5 m de ancho. El sensor de nivel detecta el eco de los ultrasonidos reflejados en la superficie del agua 20,5 ms después de haber sido emitidos. El caudalímetro de tiempo de tránsito tiene sus sensores separados una distancia $L = 1\ \text{m}$ y detecta una diferencia de tiempos $\Delta t = 5{,}5\ \mu\text{s}$. La velocidad de sonido es de 343 m/s en el aire y de 1480 m/s en el agua.

Calcule el caudal del río.

**Topic:** [[Oscillations & Waves]], [[Fluid Mechanics]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Physical Modeling (metodo)|Physical Modeling]], [[Continuity Equation (metodo)|Continuity Equation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.3

## Problema 9

**P1. La DANA de octubre** — Parte i)

Un **caudalímetro electromagnético** consta de un tubo de material aislante situado en el entrehierro de un electroimán, el cual crea un campo magnético uniforme perpendicular a la corriente de agua. Como el agua contiene iones, a medida que ésta fluye por el tubo induce una diferencia de potencial eléctrico entre dos electrodos enfrentados situados en la pared del tubo en la dirección perpendicular al campo magnético.

Obtenga la velocidad del agua $u$ en función del campo magnético $B$, el voltaje $\Delta V$ medido por los electrodos y el diámetro $D$ del tubo.

<!--fig:start-->
![[_attachments/P1_La_DANA_de_octubre/P1_La_DANA_de_octubre_p3_f3.png]]
*Caudalímetro electromagnético con campo B y electrodos*
<!--fig:end-->

**Topic:** [[Electromagnetism]], [[Fluid Mechanics]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Electric Potential Method (metodo)|Electric Potential Method]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.3

## Problema 10

**P1. La DANA de octubre** — Parte j)

El **caudalímetro ultrasónico de efecto Doppler** consta de un sensor que emite ultrasonidos de frecuencia $f_0$ que se reflejan en pequeñas partículas de suciedad que viajan a la misma velocidad que el agua, arrastradas por la corriente. Las ondas reflejadas viajan aguas arriba y son detectadas por el sensor con una frecuencia $f$ distinta a $f_0$.

Obtenga la velocidad del agua $u$ en función de la velocidad $v_s$ del sonido en el agua, la frecuencia $f_0$ y la diferencia de frecuencias $\Delta f = f - f_0$.

<!--fig:start-->
![[_attachments/P1_La_DANA_de_octubre/P1_La_DANA_de_octubre_p3_f4.png]]
*Diagrama caudalímetro Doppler con partículas en corriente*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]], [[Fluid Mechanics]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.3
