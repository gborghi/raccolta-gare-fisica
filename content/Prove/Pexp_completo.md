---
tipo: prova
prova_id: prova_Pexp_completo
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: na
level: ''
pdf: gare di altri paesi/Spagna/RSF/Pexp_completo.pdf
cluster: Meccanica
n_problemi: '8'
tags:
  - kg/prova
  - anno/na
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---

# Spagna na — Pexp_completo.pdf

**Fonte:** `gare di altri paesi/Spagna/RSF/Pexp_completo.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Problema 1

**Prueba experimental: Absorción de luz por un filtro neutro**

Cuando un haz de luz de intensidad $I_0$ incide sobre una de las caras planas de un medio parcialmente transparente, como un filtro de gelatina, parte de la luz se transmite y emerge por la otra cara con una intensidad inferior $I$ (Fig. 1). La intensidad luminosa se ve reducida en un factor $T$, menor que la unidad, denominado transmitancia:

$$I = T I_0 \tag{1}$$

Cuando el haz de luz atraviesa un conjunto de $n$ filtros iguales, la intensidad transmitida es:

$$I_n = T^n I_0 \tag{2}$$

La intensidad luminosa transmitida se mide con un fotodetector (LED detector). Supondremos que la diferencia de potencial $V$ entre sus terminales es directamente proporcional a dicha intensidad. En consecuencia:

$$V_n = T^n V_0 \tag{3}$$

El sistema experimental consta de dos circuitos: el primero está formado por una pila, una resistencia y un LED que actúa como emisor de luz; el segundo lo constituye otro LED que actúa como fotodetector, conectado a un polímetro en función de voltímetro (Fig. 3). Los dos circuitos se acoplan ópticamente mediante un tubo con una ranura transversal donde se colocan los filtros (Fig. 4).

**Primer procedimiento para determinar $T$.**

Sin ningún filtro en la ranura del tubo ($n = 0$) anote el valor indicado por el voltímetro, $V_0$. Coloque un filtro en la ranura ($n = 1$) y tome la medida del voltímetro, $V_1$. Añada un segundo filtro ($n = 2$) y mida $V_2$, etc., hasta acumular los ocho filtros en la ranura. Presente los datos en una tabla con columnas: N° de filtros $n$, $V_n$ (mV), función de $V_n$, $V_{n+1}/V_n$. (2 p.)

<!--fig:start-->
![[_attachments/Pexp_completo/Pexp_completo_p1_f1.png]]
*Fig. 1: light beam through gelatin filter*
<!--fig:end-->
<!--fig:start-->
![[_attachments/Pexp_completo/Pexp_completo_p1_f2.png]]
*Fig. 2: experimental materials*
<!--fig:end-->
<!--fig:start-->
![[_attachments/Pexp_completo/Pexp_completo_p2_f3.png]]
*Fig. 3: LED emitter-detector circuit*
<!--fig:end-->
<!--fig:start-->
![[_attachments/Pexp_completo/Pexp_completo_p2_f4.png]]
*Fig. 4: optical coupling tube*
<!--fig:end-->
<!--fig:start-->
![[_attachments/Pexp_completo/Pexp_completo_p2_f5.png]]
*Fig. 5: assembled circuit on breadboard*
<!--fig:end-->

**Topic:** [[Geometric Optics]], [[Circuits]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Physical Modeling (metodo)|Physical Modeling]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.3

## Problema 2

Transforme la expresión (3),

$$V_n = T^n V_0$$

para obtener una dependencia lineal entre una función de $V_n$ y $n$. (1 p.)

**Topic:** [[Geometric Optics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.3

## Problema 3

Anote en la tercera columna de la tabla anterior los valores de esa función de $V_n$. (1 p.)

**Topic:** [[Geometric Optics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Statistical Averaging (metodo)|Statistical Averaging]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Significant Figures (competenza)|Significant Figures]]
**Fonte:** Testo (PDF) — p.3

## Problema 4

Represente gráficamente en el papel milimetrado los puntos correspondientes a la dependencia lineal esperada. (3 p.)

**Topic:** [[Geometric Optics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Curve Fitting (metodo)|Curve Fitting]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.3

## Problema 5

Determine la pendiente $p$ de la recta que mejor se ajuste a esos puntos. Deduzca el valor de la transmitancia $T$. (4 p.)

*Indicación:* tomando logaritmos en la ecuación (3) se obtiene

$$\ln V_n = \ln V_0 + n \ln T$$

por tanto la pendiente es $p = \ln T$, y la transmitancia es $T = e^p$.

**Topic:** [[Geometric Optics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Curve Fitting (metodo)|Curve Fitting]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.3

## Problema 6

Haga una estimación de la incertidumbre de $T$. (4 p.)

*Indicación:* trace las rectas con pendiente máxima $p_\mathrm{max}$ y mínima $p_\mathrm{min}$ que se ajusten razonablemente a los puntos experimentales y que pasen por el «centro» $(\bar{x}, \bar{y})$. Las transmitancias extremas son $T_\mathrm{max} = e^{p_\mathrm{max}}$ y $T_\mathrm{min} = e^{p_\mathrm{min}}$, y la incertidumbre es

$$\Delta T = \frac{T_\mathrm{max} - T_\mathrm{min}}{2}$$

**Topic:** [[Geometric Optics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.3

## Problema 7

**Segundo procedimiento para determinar $T$.**

La transmitancia de un filtro también puede determinarse a partir de dos medidas consecutivas con $n$ y $n+1$ filtros. Teniendo en cuenta (3), es evidente que

$$T = \frac{V_{n+1}}{V_n} \tag{4}$$

Aplicando (4) a parejas consecutivas de sus nueve medidas $V_0, V_1 \ldots V_8$, calcule los ocho valores correspondientes de $T$ y anótelos en la cuarta columna de la tabla. (1 p.)

**Topic:** [[Geometric Optics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Significant Figures (competenza)|Significant Figures]]
**Fonte:** Testo (PDF) — p.3

## Problema 8

Mediante un tratamiento estadístico, calcule el valor más fiable de la transmitancia $T$ de un filtro, y su margen de incertidumbre. (4 p.)

*Indicación:* el valor más fiable es la media de los ocho valores de $T$ calculados en el apartado anterior:

$$\bar{T} = \frac{1}{N}\sum_{i=1}^{N} T_i$$

La incertidumbre estándar de la media (error típico) es:

$$\sigma_m = \sqrt{\frac{\sum_{i=1}^{N}(T_i - \bar{T})^2}{N(N-1)}}$$

**Topic:** [[Geometric Optics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Statistical Averaging (metodo)|Statistical Averaging]], [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.3
