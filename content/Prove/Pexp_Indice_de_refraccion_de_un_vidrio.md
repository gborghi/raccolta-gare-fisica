---
tipo: prova
prova_id: prova_Pexp_Indice_de_refraccion_de_un_vidrio
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2025'
level: ''
pdf: gare di altri paesi/Spagna/RSF/2025/Pexp_Indice_de_refraccion_de_un_vidrio.pdf
cluster: Meccanica
n_problemi: '8'
tags:
  - kg/prova
  - anno/2025
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---

# Spagna 2025 — Pexp_Indice_de_refraccion_de_un_vidrio.pdf

**Fonte:** `gare di altri paesi/Spagna/RSF/2025/Pexp_Indice_de_refraccion_de_un_vidrio.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Problema 1

**Contexto experimental:** Se desea determinar el índice de refracción $n$ de una lámina portaobjetos de vidrio. El dispositivo experimental consta de un led amarillo emisor y un led amarillo fotodetector acoplados ópticamente mediante un tubo con una ranura transversal donde se coloca la lámina. La diferencia de potencial $V_0$ (sin lámina) y $V$ (con lámina) medidas por el voltímetro son directamente proporcionales a las intensidades luminosas incidente y transmitida, respectivamente. De la teoría se tiene:

$$\frac{V}{V_0} = T^2$$

donde $T$ es la transmitancia de cada interfase vidrio-aire, dada por:

$$T = \frac{4n_0 n}{(n_0 + n)^2}$$

con $n_0 = 1{,}000$ el índice de refracción del aire.

Conecte el portapilas, encienda el polímetro y, utilizando el destornillador, inicie las medidas moviendo el tornillo del potenciómetro hasta que el voltímetro señale un primer valor superior a 0 V. Anote el valor exacto obtenido (primera medida de $V_0$). A continuación, coloque la lámina portaobjetos en la ranura del tubo y anote la medida $V$ señalada por el voltímetro. Actuando sobre el tornillo del potenciómetro, continúe tomando medidas hasta recoger **al menos quince pares de valores** de $V_0$ y $V$, en un intervalo para $V_0$ comprendido entre 0 mV y 1000 mV. Presente los datos en una tabla:

| $V_0$ / mV | $V$ / mV |
|---|---|
| | |

(4 puntos)

<!--fig:start-->
![[_attachments/Pexp_Indice_de_refraccion_de_un_vidrio/Pexp_Indice_de_refraccion_de_un_vidrio_p1_f1.png]]
*Fig. 1: rayo de luz a través de lámina*
<!--fig:end-->
<!--fig:start-->
![[_attachments/Pexp_Indice_de_refraccion_de_un_vidrio/Pexp_Indice_de_refraccion_de_un_vidrio_p2_f2.png]]
*Fig. 2: circuito emisor-fotodetector con tubo*
<!--fig:end-->

**Topic:** [[Geometric Optics]], [[Electrostatics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Snell's Law (metodo)|Snell's Law]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.4

## Problema 2

Escriba la expresión (4)

$$\frac{V}{V_0} = T^2$$

de forma que aparezca explícitamente una **dependencia lineal** entre $V$ y $V_0$. Represente gráficamente los puntos correspondientes a esa dependencia, con $V_0$ en el eje de abscisas, y trace la línea que mejor se ajusta.

(4 puntos)

**Topic:** [[Geometric Optics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.4

## Problema 3

Halle la pendiente de la línea obtenida en el apartado anterior y deduzca el valor de $T^2$.

(2 puntos)

**Topic:** [[Geometric Optics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.4

## Problema 4

Considerando únicamente las barras de error de los **puntos extremos** de la gráfica (ver ANEXO 2), halle las rectas de máxima y mínima pendiente y los valores de esas pendientes.

Para establecer la longitud de las barras de error de esos dos puntos se han de tener en cuenta las características del multímetro dadas por el fabricante. Este indica que, en medidas de voltaje para corriente continua en el rango de 2 V:

- Resolución: 1 mV  
- Precisión: $\pm 0{,}5\%$ de la medida $\pm 1$ dígito

Ejemplo: para $V = 274$ mV:
$$\Delta V = \pm\left(\frac{0{,}5}{100} \times 274 + 1\right)\,\text{mV} \approx \pm 2\,\text{mV}$$
por lo que $(V \pm \Delta V) = (274 \pm 2)$ mV.

(3 puntos)

**Topic:** [[Geometric Optics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.4

## Problema 5

A partir de las pendientes máxima y mínima obtenidas en el apartado anterior, calcule la incertidumbre $\Delta(T^2)$.

(1 punto)

**Topic:** [[Geometric Optics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.4

## Problema 6

Determine la transmitancia $T$ y su incertidumbre $\Delta T$.

*Indicación:* si $T^2$ tiene incertidumbre $\Delta(T^2)$, entonces $T = \sqrt{T^2}$ y
$$\Delta T = \frac{\Delta(T^2)}{2T}$$

(2 puntos)

**Topic:** [[Geometric Optics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.4

## Problema 7

A partir de la expresión

$$T = \frac{4n_0 n}{(n_0 + n)^2}$$

halle el valor del índice de refracción $n$, considerando que $n_0 = 1{,}000$.

(2 puntos)

**Topic:** [[Geometric Optics]]
**Metodi:** [[Snell's Law (metodo)|Snell's Law]], [[Physical Modeling (metodo)|Physical Modeling]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.4

## Problema 8

Determine el valor de la incertidumbre del índice de refracción, $\Delta n$.

(2 puntos)

**Topic:** [[Geometric Optics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.4
