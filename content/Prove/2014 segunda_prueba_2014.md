---
tipo: prova
prova_id: prova_2014 segunda_prueba_2014
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2014'
level: ''
pdf: gare di altri paesi/Spagna/Saragozza-locali/2014 segunda_prueba_2014.pdf
cluster: Ottica
n_problemi: '1'
tags:
  - kg/prova
  - anno/2014
  - paese/Spagna
  - comp/Spagna
  - cluster/Ottica
---

# Spagna 2014 — 2014 segunda_prueba_2014.pdf

**Fonte:** `gare di altri paesi/Spagna/Saragozza-locali/2014 segunda_prueba_2014.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Ottica]]

## Problema 1

**PROBLEMA EXPERIMENTAL. Caída de una bolita en un fluido**

En la figura se muestra una fotografía, con exposiciones múltiples, de la caída de una pequeña esfera en el seno de un líquido viscoso. La esfera, de radio $R = 1{,}00$ mm, ha sido abandonada sin velocidad inicial en $t = 0$ (instante de la primera foto), y las sucesivas exposiciones han sido tomadas a intervalos regulares y exactos de $0{,}02$ s. Las posiciones en cada instante pueden determinarse mediante la escala que también se muestra en la figura.

a) Mide en la escala la posición $z$ del centro de la bolita en el instante $t$ de cada exposición. Presenta los datos en una tabla.
_Sugerencia:_ teniendo en cuenta el tamaño de la esfera, interpola visualmente en la escala para apreciar décimas de milímetro.

b) Calcula la velocidad media de la bolita entre cada dos exposiciones consecutivas. Tabula los resultados, asignando la velocidad calculada al tiempo medio entre las dos exposiciones. Habrás obtenido que la velocidad es prácticamente constante en la zona final del recorrido. ¿Cuál es esta velocidad límite, $v_L$?

Este comportamiento experimental es congruente con un modelo de fuerza constante hacia abajo (peso de la bolita menos empuje de Arquímedes) y fuerza de fricción proporcional a la velocidad de la esfera en el seno del líquido, en sentido opuesto. Puede demostrarse que, con este modelo, la velocidad de la esfera tiende exponencialmente a $v_L$, es decir

$$v = v_L\left(1 - e^{-\gamma t}\right) \tag{1}$$

donde $\gamma$ es una constante que depende de la masa de la esfera, $m$, de su radio, $R$, y del llamado coeficiente de viscosidad del fluido, $\eta$, en la forma

$$\gamma = \frac{6\pi R \eta}{m} \tag{2}$$

Reordenando la ecuación (1) y tomando logaritmos se obtiene

$$\ln\left(1 - \frac{v}{v_L}\right) = -\gamma\, t \tag{3}$$

Es decir, se espera una dependencia lineal entre la variable $y = \ln\left(1 - v/v_L\right)$ y el tiempo $t$.

c) Representa gráficamente en el papel milimetrado los seis primeros puntos $y(t)$. Ajusta una línea recta a estos puntos y deduce el valor de $\gamma$ en nuestro experimento.

d) Sabiendo que se ha empleado una esfera con $m = 48$ mg, obtén la viscosidad del líquido, $\eta$, en unidades del SI.

e) Supón que la principal fuente de error en este último resultado es el valor de la masa de la esfera, que se ha medido con una balanza digital que aprecia milésimas de gramo. Calcula la incertidumbre de $\eta$.

<!--fig:start-->
![[_attachments/2014 segunda_prueba_2014/2014 segunda_prueba_2014_p1_f1.png]]
*Multiple-exposure photo of sphere falling in viscous fluid*
<!--fig:end-->

**Topic:** [[Fluid Mechanics]], [[Newtonian Mechanics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Fonte:** Testo (PDF) — p.1
