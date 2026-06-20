---
tipo: prova
prova_id: prova_2016 segunda_prueba_2016
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2016'
level: ''
pdf: gare di altri paesi/Spagna/Saragozza-locali/2016 segunda_prueba_2016.pdf
cluster: Termodinamica
n_problemi: '1'
tags:
  - kg/prova
  - anno/2016
  - paese/Spagna
  - comp/Spagna
  - cluster/Termodinamica
---

# Spagna 2016 — 2016 segunda_prueba_2016.pdf

**Fonte:** `gare di altri paesi/Spagna/Saragozza-locali/2016 segunda_prueba_2016.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Termodinamica]]

## Problema 1

**Problema experimental. Calibrado de un termistor.**

Como bien sabes, un *termómetro* es un dispositivo que permite medir la temperatura. Los termómetros clásicos se basan en el fenómeno de dilatación térmica de un líquido (mercurio o alcohol) que, al aumentar la temperatura, asciende por una columna adecuadamente graduada, es decir, calibrada.

Los *termistores* son dispositivos cuya resistencia eléctrica, $R$, varía con la temperatura, $T$. Si se conoce la dependencia $R(T)$ y se mide $R$ puede deducirse $T$, de forma que pueden emplearse como termómetros.

En los termistores llamados NTC (Negative Temperature Coefficient), la resistencia eléctrica disminuye al aumentar la temperatura. Estos termistores son muy utilizados en amplios rangos de temperatura, de $-200\,°C$ a $+1500\,°C$, ya que ofrecen gran sensibilidad y un cambio continuo en su resistencia eléctrica.

En un termistor NTC la dependencia $R(T)$ no es lineal, sino exponencial. En concreto, se ajusta bien a una dependencia del tipo

$$R = R_0 \exp\!\left[\beta\!\left(\frac{1}{T} - \frac{1}{T_0}\right)\right] \tag{1}$$

donde $T$ es la temperatura absoluta, $\beta$ es una constante característica del termistor y $R_0$ es la resistencia a la temperatura de referencia $T_0$.

Tomando logaritmos en la ecuación (1) se obtiene

$$\ln R = \beta\,\frac{1}{T} + \ln R_0 - \frac{\beta}{T_0} \tag{2}$$

Es decir, se espera una dependencia lineal entre las variables $y = \ln R$ y $x = 1/T$.

En esta prueba experimental vamos a realizar el calibrado de un termistor, es decir a determinar los valores de los parámetros $\beta$ y $R_0$, para una cierta $T_0$, a partir de una serie de medidas experimentales.

El calibrado puede llevarse a cabo introduciendo el termistor en un baño termostático cuya temperatura se puede variar de forma controlada. La resistencia del termistor se mide con un polímetro a diferentes temperaturas del baño, que se miden con un termómetro patrón. Los resultados de las medidas se presentan en la siguiente tabla:

| $T$ (°C) | 25 | 35 | 45 | 55 | 65 | 75 | 85 | 95 |
|---|---|---|---|---|---|---|---|---|
| $R$ (Ω) | 125 | 111 | 88 | 77 | 70 | 58 | 49 | 45 |

a) Representa gráficamente en el papel milimetrado los ocho puntos $(x, y)$ que se obtienen a partir de los datos de la tabla. Recuerda que, en las expresiones (1) y (2), $T$ es la temperatura absoluta.

b) Ajusta una línea recta a los puntos experimentales de la gráfica anterior.

c) A partir de este ajuste, determina los valores de $\beta$ y $R_0$ para $T_0 = 298\,\text{K}$.

d) Haz una estimación de las incertidumbres de $\beta$ y $R_0$.

<!--fig:start-->
![[_attachments/2016 segunda_prueba_2016/2016 segunda_prueba_2016_p2_f1.png]]
*NTC thermistor component photo*
<!--fig:end-->

**Topic:** [[Thermodynamics]], [[Circuits]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.2
