---
tipo: prova
prova_id: prova_P2_MateriaViaLactea
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: na
level: ''
pdf: gare di altri paesi/Spagna/RSF/P2_MateriaViaLactea.pdf
cluster: Meccanica
n_problemi: '1'
tags:
  - kg/prova
  - anno/na
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---

# Spagna na — P2_MateriaViaLactea.pdf

**Fonte:** `gare di altri paesi/Spagna/RSF/P2_MateriaViaLactea.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Problema 1

**P2 – La materia de la Vía Láctea**

Desde los años 30 del siglo pasado los físicos creen que en el universo debe existir mucha más materia de la que podemos ver (estrellas, gas interestelar, planetas, etc.). A esa materia no visible se la llama **materia oscura** y, a día de hoy, aún se desconoce qué la constituye; sólo sabemos que interacciona con la materia visible (también llamada materia ordinaria) mediante la gravedad. En las últimas décadas se ha acumulado abundante evidencia experimental de su existencia mediante observaciones astrofísicas y cosmológicas. En particular, se sabe que nuestra galaxia, la Vía Láctea, debe contener más materia oscura que materia ordinaria.

Una galaxia espiral común como la Vía Láctea está formada por un bulbo central aproximadamente esférico donde se acumula la mayor parte de la masa ordinaria de la galaxia, y un disco aplanado con forma espiral. En este problema vamos a suponer que toda la masa ordinaria está concentrada en el bulbo central de radio $R_b$ y masa $M_b$ (es decir, despreciaremos la masa del disco galáctico). Supondremos que la densidad del bulbo es constante.

Una de las primeras evidencias de la materia oscura se observó en las llamadas **curvas de rotación**, que representan la velocidad orbital de una estrella en su movimiento de rotación alrededor del centro de su galaxia.

**a)** Considere una estrella situada a una distancia $r$ del centro galáctico. Obtenga su velocidad orbital $v_{\mathrm{orb}}(r)$ en función de $r$, $R_b$, $M_b$ y $G$ (constante de gravitación), en las dos regiones $r < R_b$ y $r > R_b$.

*Ayuda:* Sólo la materia contenida dentro de la esfera de radio $r$ contribuye para el cálculo de la fuerza gravitatoria a la distancia $r$.

Para la Vía Láctea, la representación gráfica de $v_{\mathrm{orb}}(r)$ del apartado anterior corresponde a la curva A de la figura adjunta. Sin embargo, experimentalmente se observan los puntos indicados, para distintas estrellas, que se ajustan bien a la curva B. Como puede apreciarse, la velocidad orbital no es decreciente para $r > R_b$, sino que es aproximadamente constante.

**b)** Obtenga de la gráfica el radio $R_b$ del bulbo de materia visible de la Vía Láctea y la velocidad orbital de una estrella situada en $r = R_b$. A partir de estos valores, calcule la masa $M_b$ de la materia ordinaria de la Vía Láctea. Exprese el resultado en masas solares.

El hecho de que la velocidad orbital sea constante lejos del bulbo puede explicarse si, además de la materia visible, consideramos la materia oscura, que no podemos detectar salvo por sus efectos gravitatorios. Supongamos que la densidad de materia oscura es de la forma:

$$\rho(r) = \begin{cases} \dfrac{k}{r^2} & \text{si } r \leq R_g \\ 0 & \text{si } r > R_g \end{cases} \tag{1}$$

donde $k$ es una constante y $R_g$ es el radio que fija el borde de la galaxia hasta donde se extiende la materia oscura. Se ha estimado que para la Vía Láctea $R_g \approx 58\,\text{kpc}$. Vamos a considerar distancias grandes fuera del bulbo, para poder despreciar el efecto de la materia visible, pero inferiores al radio galáctico de materia oscura, es decir $R_b \leq r \leq R_g$.

**c)** Demuestre que, con la densidad (1), la masa de la materia oscura contenida en una esfera de radio $r$ crece linealmente como $M(r) = 4\pi k\, r$. Demuestre también que, en efecto, se obtiene una velocidad orbital constante de valor $v_c = \sqrt{4\pi G k}$.

**d)** Teniendo en cuenta el valor de $v_c$ para la Vía Láctea que se obtiene de la gráfica, calcule la masa $M_g$ (en masas solares) de toda la materia oscura de la Vía Láctea.

**e)** Sabiendo que el Sol se encuentra a 8 kpc del centro galáctico, calcule la densidad de materia oscura en el Sistema Solar. Compárela con el valor de la densidad de la materia ordinaria en el espacio interplanetario en el Sistema Solar, que es de unos 5 átomos de H por cada cm$^3$.

Hay modelos alternativos para explicar la planitud de la curva de rotación que no recurren a la materia oscura. Uno de ellos es la llamada teoría MOND (por Modified Newtonian Dynamics), que propone una modificación de la 2ª ley de Newton, $F = ma$, sustituyéndola por una ley más general del tipo:

$$F = m\,a\,\mu(x) \tag{2}$$

donde $x = a/a_0$, $a_0$ es una constante, y $\mu(x)$ es una función que tiende a 1 cuando $x \gg 1$ y tiende a $x$ cuando $x \ll 1$. Así, cuando las aceleraciones son mucho mayores que la constante $a_0$ se está en el régimen newtoniano clásico, mientras que si las aceleraciones son mucho menores que $a_0$ domina el llamado régimen MOND.

**f)** Asumiendo el régimen MOND en nuestra galaxia, determine la velocidad orbital constante $v_c$ en función de $M_b$, $a_0$ y $G$, y calcule el valor de $a_0$. Calcule también la aceleración de la Tierra en su órbita en torno al Sol. Comparando los dos valores, indique si es coherente aplicar la teoría MOND en el Sistema Solar.

Volvamos a la hipótesis de la materia oscura y a la densidad dada por la Ec. (1).

**g)** Demuestre que la velocidad de escape de la galaxia, desde un punto a distancia $r$ del centro, es:

$$v_{\mathrm{esc}}^2(r) = 2v_c^2\left(1 + \ln\frac{R_g}{r}\right) \tag{3}$$

*Ayuda:* Para que una masa escape del campo gravitatorio debe tener una energía cinética igual al trabajo que realiza la fuerza gravitatoria para llevar la masa desde su posición hasta el infinito. Utilice la expresión de la masa $M(r)$ del apartado c) para $r < R_g$ y el valor $M_g$ para $r \geq R_g$.

*Ayuda:* $\displaystyle\int \frac{dx}{x} = \ln x + \text{cte}$; $\displaystyle\int \frac{dx}{x^2} = -\frac{1}{x} + \text{cte}$

Nos preguntamos si la velocidad orbital de las estrellas de la Vía Láctea es suficiente para que alguna de ellas, en particular el Sol junto a todo nuestro Sistema Solar, pueda escapar de la galaxia. Se sabe que el disco espiral galáctico tiene un radio de 25 kpc.

**h)** ¿Puede escapar alguna estrella teniendo en cuenta sólo su velocidad orbital $v_c$? ¿Cuánta velocidad debería ganar el Sol, en la dirección de su velocidad orbital galáctica, para que pudiera escapar de la galaxia?

---

**Datos:**
- Un kpc es un "kilo parsec", donde 1 parsec (pc) = 3,26 años-luz
- $G = 6{,}67 \times 10^{-11}\,\text{N}\cdot\text{m}^2\cdot\text{kg}^{-2}$
- $M_{\odot} = 1{,}99 \times 10^{30}\,\text{kg}$
- Distancia Tierra–Sol: $150 \times 10^6\,\text{km}$
- Masa del átomo de hidrógeno: $1{,}67 \times 10^{-27}\,\text{kg}$

<!--fig:start-->
![[_attachments/P2_MateriaViaLactea/P2_MateriaViaLactea_p1_f1.png]]
*Galaxy diagram: bulbo, disco and Sun*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P2_MateriaViaLactea/P2_MateriaViaLactea_p1_f2.png]]
*Galactic rotation curves A and B*
<!--fig:end-->

**Topic:** [[Astrophysics]], [[Gravitation]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.1
