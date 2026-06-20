---
tipo: prova
prova_id: prova_P-EXPERIMENTAL-OEF-2009
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2009'
level: ''
pdf: gare di altri paesi/Spagna/RSF/P-EXPERIMENTAL-OEF-2009.pdf
cluster: Meccanica
n_problemi: '1'
tags:
  - kg/prova
  - anno/2009
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---

# Spagna 2009 — P-EXPERIMENTAL-OEF-2009.pdf

**Fonte:** `gare di altri paesi/Spagna/RSF/P-EXPERIMENTAL-OEF-2009.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Problema 1

**Prueba experimental. Oscilaciones amortiguadas de un péndulo de agua.**

**Objetivos**

Se van a estudiar experimentalmente las oscilaciones de la columna de agua contenida en un tubo cilíndrico, doblado en forma de U. Debido a la fricción del agua con las paredes del tubo, esta oscilación es amortiguada y al cabo de unas pocas oscilaciones se alcanza el equilibrio. En concreto, se van a determinar experimentalmente el radio efectivo del tubo y el coeficiente de amortiguamiento.

**Materiales**

- Tubo de goma de 170 cm de longitud.
- Listón de madera.
- Sargentos y tacos de madera para sujetar el listón a la pata de la mesa.
- 4 pinzas para sujetar el tubo al listón.
- Cinta adhesiva y tijeras.
- Jeringa graduada de 60 cm³.
- Cinta métrica.
- Cronómetro.
- Botella de agua.
- Vaso de plástico.

**Montaje y procedimiento experimental**

- El listón de madera se coloca vertical, apoyado en el suelo y en el lateral de la mesa. Se colocan los tacos de madera entre el listón y la pata de la mesa y se sujetan con los sargentos, como indica la figura 1.
- El tubo se sujeta al listón mediante las pinzas, como se indica en la figura 2. Si es necesario, se puede emplear cinta adhesiva para terminar de sujetar el tubo y darle la forma deseada en U.
- Debe procurarse que el tubo mantenga su sección circular, es decir que no se doble en la parte inferior curvada ni se aplaste con las pinzas. Además, los dos laterales del tubo deben quedar verticales.
- Es necesario que quede un trozo de tubo libre en la parte superior de los dos lados, uno de ellos suficientemente largo para poder soplar por él.
- El volumen deseado de agua se introduce en el tubo mediante una jeringa graduada. Deben evitarse en lo posible las burbujas de aire dentro de la jeringa y en la columna de agua dentro del tubo.
- Para forzar la oscilación de la columna de agua, soplar por un extremo del tubo hasta que el agua alcance el nivel deseado y tapar con un dedo el otro extremo. Al quitar el dedo que cierra el tubo comienza la oscilación de la columna de agua. El desplazamiento inicial del agua debe ser suficiente para que puedan observarse cuatro oscilaciones completas antes de que el sistema alcance el equilibrio.
- Atención: cuando se sopla por un extremo del tubo, debe evitarse que el agua rebose por el otro. Si ocurriese esto, sería necesario vaciar el tubo y volver a empezar la medida pues se desconocería el volumen de agua que queda dentro del tubo.
- Antes de realizar medidas es conveniente adquirir práctica con el método de forzar la oscilación del agua y con el manejo del cronómetro.

**Modelo teórico**

En equilibrio, el nivel de agua en los dos lados del tubo es el mismo (figura 3a). Cuando se sopla por un extremo del tubo el sistema se desequilibra (figura 3b) y, al liberar el sistema, el nivel $x$ del agua oscila en torno al de equilibrio. No es difícil demostrar que, en ausencia de fricción, esta oscilación es armónica:

$$x = A \cos(\omega_0 t) \tag{1}$$

con periodo de oscilación $T_0 = 2\pi/\omega_0$ dado por:

$$T_0 = 2\pi\sqrt{\frac{V}{2\pi g R^2}} \tag{2}$$

donde $g$ es la aceleración de la gravedad, $R$ el radio del tubo y $V$ el volumen de agua.

En ausencia de fricción, la amplitud de oscilación $A$ sería constante en el tiempo. Un tratamiento más realista debe tener en cuenta la fricción del agua con las paredes del tubo. Si se considera una fuerza de fricción proporcional a la velocidad del agua, se obtiene:

$$x = A_0\, e^{-\gamma t} \cos(\omega t) \tag{3}$$

donde $\gamma$ es el llamado coeficiente de amortiguamiento. El resultado (3) representa una oscilación armónica con frecuencia angular $\omega = 2\pi/T$ y amplitud $A$ exponencialmente decreciente (figura 4):

$$A(t) = A_0\, e^{-\gamma t} \tag{4}$$

En particular, la amplitud al cabo de $n$ oscilaciones completas, es decir en $t_n = nT$, es (figura 4):

$$A_n = A_0\, e^{-\gamma n T} \tag{5}$$

Si el amortiguamiento es débil ($\gamma \ll \omega_0$), como es nuestro caso, la frecuencia $\omega$ coincide aproximadamente con la frecuencia $\omega_0$ en ausencia de amortiguamiento, de forma que la expresión (2) para el periodo de oscilación sigue siendo aproximadamente válida.

Pero, debido también a la fricción del agua con las paredes, la columna de agua no oscila "en bloque", es decir como un todo (la capa de agua en contacto con las paredes prácticamente no se mueve). Como consecuencia, el radio efectivo del tubo es inferior al real, y por tanto el periodo de oscilación es mayor que el previsto en ausencia de fricción, de forma que:

$$T = 2\pi\sqrt{\frac{V}{2\pi g R_{ef}^2}} \tag{6}$$

con $R_{ef} < R$ y $T > T_0$.

En la primera parte de esta prueba experimental se van a realizar una serie de medidas para determinar los radios efectivo $R_{ef}$ y real $R$ del tubo. En nuestro montaje, estos dos radios son claramente diferentes, es decir la diferencia entre ambos es mayor que sus incertidumbres experimentales. En la segunda parte se obtendrá el coeficiente de amortiguamiento $\gamma$.

---

**Medidas y preguntas.**

**1ª parte. Determinación de $R_{ef}$ y $R$.**

**1.a)** Mediante la jeringa graduada, añada agua dentro del tubo de forma que el volumen de agua sea sucesivamente $V = 30, 40, 50 \ldots 100\text{ cm}^3$. En cada uno de estos casos:

- Mida con el cronómetro el periodo de oscilación del agua en torno a su nivel de equilibrio. Sugerencia: mida cuatro veces el tiempo de cuatro oscilaciones completas ($4T_1$, $4T_2$, $4T_3$ y $4T_4$) y deduzca el periodo promedio $\bar{T}$. Presente sus medidas y resultados en una tabla 1 como la de la figura 5.
- Para cada $V$, marque con bolígrafo en los dos lados del tubo la posición del nivel de agua en equilibrio. La distancia entre estas dos marcas, que se medirá más tarde cuando se vacíe y estire el tubo, permitirá determinar su radio $R$. Tenga cuidado de que estas marcas no se borren.

**1.b)** Represente gráficamente en un papel milimetrado los puntos experimentales $T^2$ (en ordenadas) frente a $V$ (en abscisas).

**1.c)** Obtenga la pendiente de la recta que mejor se ajusta a estos puntos.

**1.d)** Deduzca el valor del radio efectivo del tubo, $R_{ef}$.

**1.e)** Haga una estimación de la incertidumbre (margen de error) del radio efectivo, $\Delta R_{ef}$.

**1.f)** Desmonte con cuidado un lado del tubo y vacíe el agua en un vaso. Desmonte completamente el tubo y estírelo sobre la mesa, mida la distancia $L$ entre las marcas simétricas que ha hecho para cada $V$ y deduzca en cada caso el radio $R$ del tubo. Anote los valores de $L$ y $R$ en las columnas correspondientes de la tabla 1.

**1.g)** Calcule el valor medio de $R$ y haga una estimación de su incertidumbre.

*(Tabla 1 — figura 5: columnas $V\text{ (cm}^3)$, $4T_1\text{ (s)}$, $4T_2\text{ (s)}$, $4T_3\text{ (s)}$, $4T_4\text{ (s)}$, $\bar{T}\text{ (s)}$, $T^2\text{ (s}^2)$, $L\text{ (cm)}$, $R\text{ (mm)}$; filas $V = 30, 40, 50, 60, 70, 80, 90, 100$.)*

---

**2ª parte. Determinación de $\gamma$.**

Vuelva a sujetar el tubo en U al listón de madera. Introduzca $60\text{ cm}^3$ de agua y marque en el listón el nivel de agua en equilibrio. Haga otra marca unos 20 cm por encima. Ésta será la posición inicial del nivel de agua, $A_0$, en todas las medidas posteriores. Antes de medir debe adquirir práctica en conseguir enrasar el nivel de agua con esta marca, soplando por el otro lado hasta alcanzar un nivel un poco más alto, tapando el tubo con el dedo y dejando entrar un poco de aire hasta que el nivel alcance la marca.

**2.a)** Mida las amplitudes $A_1$, $A_2$ y $A_3$ al cabo de una, dos y tres oscilaciones completas, respectivamente, es decir en $t_1 = T$, $t_2 = 2T$ y $t_3 = 3T$ (el periodo $T$ para este volumen de agua ya ha sido medido previamente). Repita la observación de la oscilación amortiguada todas las veces que sea necesario para, mediante aproximaciones y marcas sucesivas, determinar estas amplitudes con suficiente precisión. Presente sus medidas en la tabla 2 (figura 6).

**2.b)** Transforme la expresión (4) para obtener una relación lineal entre $\ln(A_n/A_0)$ y $n$. Represente gráficamente en papel milimetrado los puntos experimentales $(n,\, \ln(A_n/A_0))$ para $n = 0, 1, 2, 3$.

**2.c)** Obtenga la pendiente de la recta que mejor se ajusta a estos puntos y deduzca el valor del coeficiente de amortiguamiento $\gamma$.

**2.d)** Haga una estimación de la incertidumbre $\Delta\gamma$.

<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p1_f1.png]]
*Fig. 1: vertical wooden slat setup*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p2_f2.png]]
*Fig. 2: U-tube clamped to slat*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p3_f3.png]]
*Fig. 3a-3b: U-tube equilibrium and displaced*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p3_f4.png]]
*Fig. 4: damped oscillation amplitude decay*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p5_f5.png]]
*Fig. 5: Tabla 1 measurement table*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p6_f6.png]]
*Fig. 6: Tabla 2 amplitude measurements*
<!--fig:end-->

**Topic:** [[Fluid Mechanics]], [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Physical Modeling (metodo)|Physical Modeling]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Fonte:** Testo (PDF) — p.1
