---
tipo: prova
prova_id: prova_Anexo Experimento muelle resuelto
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: na
level: ''
pdf: gare di altri paesi/Spagna/Jaen/Anexo Experimento muelle resuelto.pdf
cluster: ''
n_problemi: '1'
tags:
  - kg/prova
  - anno/na
  - paese/Spagna
  - comp/Spagna
---

# Spagna na — Anexo Experimento muelle resuelto.pdf

**Fonte:** `gare di altri paesi/Spagna/Jaen/Anexo Experimento muelle resuelto.pdf` · Apri PDF · apri PDF p.1

## Problema 1

**DETERMINACIÓN DE LA CONSTANTE DE RECUPERACIÓN ELÁSTICA DE UN RESORTE**

Para la determinación de la constante elástica de un muelle se pueden utilizar dos métodos: estático y dinámico. Nosotros vamos a hacerlo dinámicamente haciendo oscilar un muelle que tiene suspendida una masa $m$. La ecuación que define el movimiento de la masa es

$$m\frac{d^2x}{dt^2} + kx = 0 \tag{1}$$

que es la ecuación de un movimiento armónico simple de período

$$T = 2\pi\sqrt{\frac{m}{k}} \tag{2}$$

Conociendo pues el período de oscilación del resorte, podrá determinarse $k$ de forma sencilla. Este estudio recibe el nombre de estudio dinámico del muelle.

Para llevar a cabo el estudio dinámico del muelle se coloca un número de pesas suficiente para que se alargue el muelle. A continuación, se alarga un poco más el muelle con la mano y se suelta con lo que la masa ligada al muelle empezará a describir un movimiento armónico simple, cuyo período podemos determinar a partir del tiempo $t$ de $n$ oscilaciones mediante

$$T = \frac{t}{n} \tag{3}$$

Determinado el periodo de la oscilación se calculará la constante elástica del muelle aplicando la ecuación (2) elevada al cuadrado:

$$T^2 = \frac{4\pi^2}{k}\,m = b\,m \quad\Rightarrow\quad b = \frac{4\pi^2}{k} \quad\Rightarrow\quad k = \frac{4\pi^2}{b} \tag{4}$$

Según la expresión anterior la representación del periodo de oscilación al cuadrado ($T^2$) en ordenadas frente a la masa que está oscilando ($m$) en abscisas nos debe dar una línea recta. A partir de su pendiente $b$ se puede calcular $k$ utilizando la última parte de la ecuación (4).

**MEDIDAS EXPERIMENTALES**

Para obtener los valores experimentales se van a colgar del muelle diferentes masas y se separará de su punto de equilibrio. Una vez comience a oscilar se mide el tiempo que tardan en darse 10 oscilaciones, a partir de lo cual se obtiene el periodo.

Finalmente representando $T^2$ frente a $m$ podemos obtener el valor de la constante $b$ y a partir de ella el valor de $k$.

La tabla obtenida es la siguiente:

| $m$ (kg) | $10T$ (s) | $T$ (s) | $T^2$ (s²) |
|----------|-----------|---------|-------------|
| 0,20     | 5,0       | 0,500   | 0,250       |
| 0,25     | 5,6       | 0,560   | 0,314       |
| 0,30     | 6,2       | 0,620   | 0,384       |
| 0,35     | 6,6       | 0,660   | 0,436       |
| 0,50     | 7,9       | 0,790   | 0,624       |
| 0,60     | 8,4       | 0,840   | 0,706       |
| 0,70     | 9,3       | 0,930   | 0,865       |
| 0,85     | 10,3      | 1,030   | 1,061       |
| 0,90     | 10,6      | 1,060   | 1,124       |
| 1,10     | 11,5      | 1,150   | 1,323       |
| 1,20     | 12,2      | 1,220   | 1,488       |

La pendiente $b$ de la recta ajustada ($y = 1{,}2311\,x$) es $b = 1{,}231$ s²/kg, por lo que de acuerdo con la ecuación (4):

$$k = \frac{4\pi^2}{b} = 32{,}07 \text{ N/m}$$

Para determinar el error de forma gráfica se trazan las líneas de ajuste que recogen los puntos más alejados de la pendiente y se estiman los valores máximos y mínimos de $k$:

- $m_1 = 1{,}4/1{,}2 = 1{,}167$ s²/kg $\Rightarrow$ $k_1 = 33{,}83$ N/m
- $m_2 = 1{,}4/1{,}1 = 1{,}272$ s²/kg $\Rightarrow$ $k_2 = 31{,}04$ N/m

El intervalo es $33{,}83 - 31{,}04 = 2{,}79$ N/m; la incertidumbre es la mitad: $1{,}4$ N/m.

$$\boxed{k = 32{,}1 \pm 1{,}4 \text{ N/m}}$$

<!--fig:start-->
![[_attachments/Anexo Experimento muelle resuelto/Anexo Experimento muelle resuelto_p2_f1.png]]
*$T^2$ vs $m$ con recta de ajuste y envolventes de error*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]], [[Elasticity & Materials]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Hooke's Law (metodo)|Hooke's Law]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Fonte:** Testo (PDF) — p.1
