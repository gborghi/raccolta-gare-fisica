---
tipo: prova
prova_id: prova_2019 prueba_experimental_2019
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2019'
level: ''
pdf: gare di altri paesi/Spagna/Saragozza-locali/2019 prueba_experimental_2019.pdf
cluster: Onde e Oscillazioni
n_problemi: '1'
tags:
  - kg/prova
  - anno/2019
  - paese/Spagna
  - comp/Spagna
  - cluster/Onde e Oscillazioni
---

# Spagna 2019 — 2019 prueba_experimental_2019.pdf

**Fonte:** `gare di altri paesi/Spagna/Saragozza-locali/2019 prueba_experimental_2019.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Onde e Oscillazioni]]

## Problema 1

**Prueba experimental: Absorción de luz por un filtro neutro**

**Objetivo**

En ocasiones interesa reducir la intensidad de un haz de luz, para lo que puede emplearse un filtro comercial de gelatina. Cuando un haz de luz de intensidad $I_0$ incide sobre una de las caras planas del filtro, parte de la luz se transmite y emerge por la otra cara con una intensidad inferior $I_1$.

La intensidad luminosa se ve reducida en un factor $T$, menor que la unidad, denominado **transmitancia** del filtro:

$$T = \frac{I_1}{I_0} \tag{1}$$

El objetivo de esta prueba experimental es determinar la transmitancia de un filtro neutro (con $T$ aproximadamente independiente de la longitud de onda en el visible) por dos procedimientos diferentes.

**Modelo teórico**

Teniendo en cuenta (1), cuando el haz de luz atraviesa un conjunto de $n$ filtros iguales, la intensidad transmitida final es:

$$I_n = T^n I_0 \tag{2}$$

Esta intensidad transmitida se mide con un fotodetector. Supondremos que la diferencia de potencial $V$ entre sus terminales de salida es directamente proporcional a dicha intensidad. En consecuencia, la expresión (2) se transforma en:

$$V_n = T^n V_0 \tag{3}$$

donde $V_n$ es la lectura del voltímetro cuando se interponen $n$ filtros.

**Procedimiento experimental**

El sistema consta de dos circuitos: el primero está formado por una pila, una resistencia y un led que actúa como emisor de luz, y el segundo lo constituye otro led, que actúa como fotodetector, conectado a un polímetro en función de voltímetro. Los dos circuitos se acoplan ópticamente mediante un tubo para mantener fija la distancia entre emisor y detector y apantallar la luz ambiente. El tubo tiene una ranura transversal en la que se colocan los filtros.

**Primer procedimiento para determinar $T$**

Sin ningún filtro en la ranura del tubo ($n = 0$) se anota el valor indicado por el voltímetro, $V_0$. Se coloca un filtro en la ranura ($n = 1$) y se toma la medida $V_1$, etc. hasta acumular ocho filtros. Los resultados son:

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| $V_n$ (mV) | 277 | 192 | 131 | 89 | 60 | 40 | 26 | 17 | 11 |

a) Transforma la expresión (3) para obtener una dependencia lineal entre una función de $V_n$ y $n$. (Ayuda: toma logaritmos en (3).)

b) Representa gráficamente en papel milimetrado los puntos correspondientes a esta dependencia lineal, con $n$ en abscisas.

c) Determina la pendiente $p$ de la recta que mejor se ajuste a esos puntos.

d) A partir del resultado anterior, deduce el valor de la transmitancia de un filtro, $T$.

e) Haz una estimación de la incertidumbre de $T$.

**Segundo procedimiento para determinar $T$**

La transmitancia de un filtro también puede determinarse a partir de dos medidas consecutivas con $n$ y $n+1$ filtros. Teniendo en cuenta (3), es evidente que:

$$T = \frac{V_{n+1}}{V_n} \tag{4}$$

f) Aplicando (4) a parejas consecutivas de las nueve medidas $V_0, V_1 \dots V_8$, calcula los ocho valores correspondientes de $T$.

g) Mediante un tratamiento estadístico, calcula el valor más fiable de la transmitancia $T$ de un filtro, y su margen de incertidumbre.

<!--fig:start-->
![[_attachments/2019 prueba_experimental_2019/2019 prueba_experimental_2019_p1_f1.png]]
*Light beam through gelatine filter: I0 to I1*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2019 prueba_experimental_2019/2019 prueba_experimental_2019_p1_f2.png]]
*Circuit: LED emitter, LED detector, voltmeter*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2019 prueba_experimental_2019/2019 prueba_experimental_2019_p2_f3.png]]
*Optical coupling tube with filter slot*
<!--fig:end-->

**Topic:** [[Geometric Optics]], [[Circuits]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.1
