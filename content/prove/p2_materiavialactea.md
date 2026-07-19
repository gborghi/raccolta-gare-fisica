---
title: Spagna na
tipo: prova
tags:
  - kg/prova
  - anno/na
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="p2_materiavialactea"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna na — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/star"></span>

<div class="qlang-switch" data-default="es"></div>



**P2 – La materia de la Vía Láctea**

Desde los años 30 del siglo pasado los físicos creen que en el universo debe existir mucha más materia de la que podemos ver (estrellas, gas interestelar, planetas, etc.). A esa materia no visible se la llama **materia oscura** y, a día de hoy, aún se desconoce qué la constituye; sólo sabemos que interacciona con la materia visible (también llamada materia ordinaria) mediante la gravedad. En las últimas décadas se ha acumulado abundante evidencia experimental de su existencia mediante observaciones astrofísicas y cosmológicas. En particular, se sabe que nuestra galaxia, la Vía Láctea, debe contener más materia oscura que materia ordinaria.

Una galaxia espiral común como la Vía Láctea está formada por un bulbo central aproximadamente esférico donde se acumula la mayor parte de la masa ordinaria de la galaxia, y un disco aplanado con forma espiral. En este problema vamos a suponer que toda la masa ordinaria está concentrada en el bulbo central de radio $R_b$ y masa $M_b$ (es decir, despreciaremos la masa del disco galáctico). Supondremos que la densidad del bulbo es constante.

Una de las primeras evidencias de la materia oscura se observó en las llamadas **curvas de rotación**, que representan la velocidad orbital de una estrella en su movimiento de rotación alrededor del centro de su galaxia.

**a)** Considere una estrella situada a una distancia $r$ del centro galáctico. Obtenga su velocidad orbital $v_{\mathrm{orb}}(r)$ en función de $r$, $R_b$, $M_b$ y $G$ (constante de gravitación), en las dos regiones $r < R_b$ y $r > R_b$.

*Ayuda:* Sólo la materia contenida dentro de la esfera de radio $r$ contribuye para el cálculo de la fuerza gravitatoria a la distancia $r$.

Para la Vía Láctea, la representación gráfica de $v_{\mathrm{orb}}(r)$ del apartado anterior corresponde a la curva A de la figura adjunta. Sin embargo, experimentalmente se observan los puntos indicados, para distintas estrellas, que se ajustan bien a la curva B. Como puede apreciarse, la velocidad orbital no es decreciente para $r > R_b$, sino que es aproximadamente constante.

**b)** Obtenga de la gráfica el radio $R_b$ del bulbo de materia visible de la Vía Láctea y la velocidad orbital de una estrella situada en $r = R_b$. A partir de estos valores, calcule la masa $M_b$ de la materia ordinaria de la Vía Láctea. Exprese el resultado en masas solares.

El hecho de que la velocidad orbital sea constante lejos del bulbo puede explicarse si, además de la materia visible, consideramos la materia oscura, que no podemos detectar salvo por sus efectos gravitatorios. Supongamos que la densidad de materia oscura es de la forma:

$$\rho(r) = \begin{cases} \dfrac{k}{r^2} & \text{si } r \leq R_g \\ 0 & \text{si } r > R_g \end{cases} \quad (1)$$

donde $k$ es una constante y $R_g$ es el radio que fija el borde de la galaxia hasta donde se extiende la materia oscura. Se ha estimado que para la Vía Láctea $R_g \approx 58\,\text{kpc}$. Vamos a considerar distancias grandes fuera del bulbo, para poder despreciar el efecto de la materia visible, pero inferiores al radio galáctico de materia oscura, es decir $R_b \leq r \leq R_g$.

**c)** Demuestre que, con la densidad (1), la masa de la materia oscura contenida en una esfera de radio $r$ crece linealmente como $M(r) = 4\pi k\, r$. Demuestre también que, en efecto, se obtiene una velocidad orbital constante de valor $v_c = \sqrt{4\pi G k}$.

**d)** Teniendo en cuenta el valor de $v_c$ para la Vía Láctea que se obtiene de la gráfica, calcule la masa $M_g$ (en masas solares) de toda la materia oscura de la Vía Láctea.

**e)** Sabiendo que el Sol se encuentra a 8 kpc del centro galáctico, calcule la densidad de materia oscura en el Sistema Solar. Compárela con el valor de la densidad de la materia ordinaria en el espacio interplanetario en el Sistema Solar, que es de unos 5 átomos de H por cada cm$^3$.

Hay modelos alternativos para explicar la planitud de la curva de rotación que no recurren a la materia oscura. Uno de ellos es la llamada teoría MOND (por Modified Newtonian Dynamics), que propone una modificación de la 2ª ley de Newton, $F = ma$, sustituyéndola por una ley más general del tipo:

$$F = m\,a\,\mu(x) \quad (2)$$

donde $x = a/a_0$, $a_0$ es una constante, y $\mu(x)$ es una función que tiende a 1 cuando $x \gg 1$ y tiende a $x$ cuando $x \ll 1$. Así, cuando las aceleraciones son mucho mayores que la constante $a_0$ se está en el régimen newtoniano clásico, mientras que si las aceleraciones son mucho menores que $a_0$ domina el llamado régimen MOND.

**f)** Asumiendo el régimen MOND en nuestra galaxia, determine la velocidad orbital constante $v_c$ en función de $M_b$, $a_0$ y $G$, y calcule el valor de $a_0$. Calcule también la aceleración de la Tierra en su órbita en torno al Sol. Comparando los dos valores, indique si es coherente aplicar la teoría MOND en el Sistema Solar.

Volvamos a la hipótesis de la materia oscura y a la densidad dada por la Ec. (1).

**g)** Demuestre que la velocidad de escape de la galaxia, desde un punto a distancia $r$ del centro, es:

$$v_{\mathrm{esc}}^2(r) = 2v_c^2\left(1 + \ln\frac{R_g}{r}\right) \quad (3)$$

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
**Objects:** [[Star (object)|Star]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1berlLE_vxuTDoRm5kx8bdLKwSOJLphui/view)


<div class="qlang-split" data-lang="it"></div>

**P2  Materia della Via Lattea**

Negli anni '30 del secolo scorso i fisici hanno creduto che nell'universo ci dovesse essere molto più materia di quella che possiamo vedere (stele, gas interstellare, pianeti, ecc.). A esa materia no visible se la llama **materia oscura** y, a día de hoy, aún se desconoce qué la constituye; sólo sabemos que interacciona con la materia visible (también llamada materia ordinaria) mediante la gravedad. Negli ultimi decenni si sono accumulate abbondanti prove sperimentali della loro esistenza attraverso osservazioni astrofisiche e cosmologiche. In particolare, la nostra galassia, la Via Lattea, è nota per contenere più materia oscura della materia ordinaria.

Una galassia a spirale comune come la Via Lattea è costituita da un bulbo centrale approssimativamente sferico dove si accumula la maggior parte della massa ordinaria della galassia, e da un disco appiattito a forma di spirale. In questo problema supponiamo che tutta la massa ordinaria sia concentrata nel bulbo centrale di radio $R_b$ e massa $M_b$ (cioè, disprezzeremo la massa del disco galattico). Supponiamo che la densità del bulbo sia costante.

Una de las primeras evidencias de la materia oscura se observó en las llamadas **curvas de rotación**, que representan la velocidad orbital de una estrella en su movimiento de rotación alrededor del centro de su galaxia.

**a) ** Considera una stella situata a $r$ distanza dal centro galattico. Ottieni la sua velocità orbitale $v_{\mathrm{orb}}(r)$ in funzione di $r$, $R_b$, $M_b$ e $G$ (constante di gravità), nelle due regioni $r < R_b$ e $r > R_b$.

*Aiuto:* Solo la materia contenuta all'interno della sfera radio $r$ contribuisce al calcolo della forza gravitazionale a distanza $r$.

Per la Via Lattea, la rappresentazione grafica di $v_{\mathrm{orb}}(r)$ del precedente paragrafo corrisponde alla curva A della figura allegata. Tuttavia, si osservano sperimentalmente i punti indicati, per diverse stelle, che si adattano bene alla curva B. Come si può notare, la velocità orbitale non è diminuente per $r > R_b$, ma è circa costante.

**b) ** Ottieni dal grafico il raggio $R_b$ del bulbo di materia visibile della Via Lattea e la velocità orbitale di una stella situata a $r = R_b$. A partire da questi valori, calcoli la massa $M_b$ della materia ordinaria della Via Lattea. Esprimere il risultato in masse solari.

Il fatto che la velocità orbitale sia costante lontano dal bulbo può essere spiegato se, oltre alla materia visibile, consideriamo la materia oscura, che non possiamo rilevare se non per i suoi effetti gravitazionali. Supponiamo che la densità di materia oscura sia così:

$$\rho(r) = \begin{cases} \dfrac{k}{r^2} & \text{si } r \leq R_g \\ 0 & \text{si } r > R_g \end{cases} \quad (1)$$

dove $k$ è una costante e $R_g$ è il raggio che fissa il bordo della galassia fino a dove la materia oscura si estende. È stato stimato che per la Via Lattea $R_g \approx 58\,\text{kpc}$. Considereremo le grandi distanze fuori dal bulbo, per poter disprezzare l'effetto della materia visibile, ma inferiori al raggio galattico di materia oscura, cioè $R_b \leq r \leq R_g$.

**c) ** Dimostra che, con la densità (1), la massa della materia oscura contenuta in una sfera radio $r$ cresce linealmente come $M(r) = 4\pi k\, r$. Inoltre, dimostra che si ottiene una velocità orbitale costante di valore $v_c = \sqrt{4\pi G k}$.

**d) ** Considerando il valore di $v_c$ per la Via Lattea ottenuto dal grafico, calcola la massa $M_g$ (in masse solari) di tutta la materia oscura della Via Lattea.

**e)** Sabiendo que el Sol se encuentra a 8 kpc del centro galáctico, calcule la densidad de materia oscura en el Sistema Solar. Compara con il valore della densità della materia ordinaria nello spazio interplanetario nel Sistema Solare, che è di circa 5 atomi di H per ogni cm$^3$.

Ci sono modelli alternativi per spiegare la piattazza della curva di rotazione che non ricorrono alla materia oscura. Una di queste è la cosiddetta teoria MOND (per Modified Newtonian Dynamics), che propone una modifica della seconda legge di Newton, $F = ma$, sostituendola con una legge più generale del tipo:

$$F = m\,a\,\mu(x) \quad (2)$$

dove $x = a/a_0$, $a_0$ è una costante, e $\mu(x)$ è una funzione che tende a 1 quando $x \gg 1$ e tende a $x$ quando $x \ll 1$. Quindi, quando le accelerazioni sono molto più alte della costante $a_0$ si trova nel classico regime newtoniano, mentre se le accelerazioni sono molto più piccole di $a_0$ domina il cosiddetto regime MOND.

**f) ** Assumendo il regime MOND nella nostra galassia, determina la velocità orbitale costante $v_c$ in funzione di $M_b$, $a_0$ e $G$, e calcola il valore di $a_0$. Calcola anche l'accelerazione della Terra in orbita attorno al Sole. Confrontando i due valori, indicare se è coerente applicare la teoria MOND nel Sistema Solare.

Torniamo all'ipotesi della materia oscura e alla densità data dall'Ec. (1).

**g) ** Dimostra che la velocità di fuga della galassia, da un punto distante $r$ dal centro, è:

$$v_{\mathrm{esc}}^2(r) = 2v_c^2\left(1 + \ln\frac{R_g}{r}\right) \quad (3)$$

*Ayuda:* Para que una masa escape del campo gravitatorio debe tener una energía cinética igual al trabajo que realiza la fuerza gravitatoria para llevar la masa desde su posición hasta el infinito. Utilizzare l'espressione di massa $M(r)$ di cui al punto (c) per $r < R_g$ e il valore $M_g$ per $r \geq R_g$.

*Aiuto: * $\displaystyle\int \frac{dx}{x} = \ln x + \text{cte}$; $\displaystyle\int \frac{dx}{x^2} = -\frac{1}{x} + \text{cte}$

Ci chiedevamo se la velocità orbitale delle stelle della Via Lattea fosse sufficiente per far sì che una di esse, in particolare il Sole, insieme a tutto il nostro Sistema Solare, potesse sfuggire dalla galassia. Si sa che il disco spirale galattico ha un raggio di 25 kpc.

**h)** ¿Puede escapar alguna estrella teniendo en cuenta sólo su velocidad orbital $v_c$? Quanta velocità dovrebbe raggiungere il Sole, nella direzione della sua velocità orbitale galattica, per poter sfuggire dalla galassia?

---

**Dati: **
- Un kpc è un "kilo parsec", dove 1 parsec (pc) = 3,26 anni-luce
- $G = 6{,}67 \times 10^{-11}\,\text{N}\cdot\text{m}^2\cdot\text{kg}^{-2}$
- $M_{\odot} = 1{,}99 \times 10^{30}\,\text{kg}$
- Distanza Terra Sol: $150 \times 10^6\,\text{km}$
- Massa dell'atomo di idrogeno: $1{,}67 \times 10^{-27}\,\text{kg}$

<!--fig:start-->
![[_attachments/P2_MateriaViaLactea/P2_MateriaViaLactea_p1_f1.png]]
*Galaxy diagram: bulbo, disco and Sun*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P2_MateriaViaLactea/P2_MateriaViaLactea_p1_f2.png]]
*Gallactic rotation curves A and B*
<!--fig:end-->

**Topic:** [[Astrophysics]], [[Gravitation]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Star (object)|Star]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1berlLE_vxuTDoRm5kx8bdLKwSOJLphui/view)

<div class="qlang-split" data-lang="en"></div>

**P2 – La materia de la Vía Láctea**

Since the 1930s, physicists have believed that there must be much more matter in the universe than we can see (stars, interstellar gas, planets, etc.). A esa materia no visible se la llama **materia oscura** y, a día de hoy, aún se desconoce qué la constituye; sólo sabemos que interacciona con la materia visible (también llamada materia ordinaria) mediante la gravedad. In recent decades, abundant experimental evidence of its existence has been accumulated through astrophysical and cosmological observations. In particular, it is known that our galaxy, the Milky Way, must contain more dark matter than ordinary matter.

A common spiral galaxy like the Milky Way is made up of a central bulb that is roughly spherical where most of the ordinary mass of the galaxy accumulates, and a flattened disk with a spiral shape. En este problema vamos a suponer que toda la masa ordinaria está concentrada en el bulbo central de radio $R_b$ y masa $M_b$ (es decir, despreciaremos la masa del disco galáctico). Let's assume that the bulb density is constant.

One of the first evidence of dark matter was observed in the so-called ** rotation curves**, which represent the orbital velocity of a star in its rotational motion around the center of its galaxy.

**a) ** Consider a star located at a distance $r$ from the galactic center. It obtains its orbital velocity $v_{\mathrm{orb}}(r)$ in terms of $r$, $R_b$, $M_b$ and $G$ (gravity constant), in the two regions $r < R_b$ and $r > R_b$.

*Help:* Only the matter contained within the radius sphere $r$ contributes to the calculation of the gravitational force at the distance $r$.

For the Milky Way, the graphical representation of $v_{\mathrm{orb}}(r)$ in the previous section corresponds to the curve A of the figure attached. However, experimentally, the points indicated for different stars are observed, which fit well to the B curve. As can be seen, the orbital velocity is not decreasing for $r > R_b$, but is approximately constant.

**b) ** Get from the graph the radius $R_b$ of the Milky Way visible-matter bulb and the orbital velocity of a star located at $r = R_b$. From these values, calculate the mass $M_b$ of ordinary Milky Way matter. Express the result in solar masses.

The fact that the orbital velocity is constant away from the bulb can be explained by considering dark matter, which we cannot detect except by its gravitational effects. Let's say the density of dark matter is like this:

$$\rho(r) = \begin{cases} \dfrac{k}{r^2} & \text{si } r \leq R_g \\ 0 & \text{si } r > R_g \end{cases} \quad (1)$$

where $k$ is a constant and $R_g$ is the radius that fixes the edge of the galaxy to where dark matter extends. It has been estimated that for the Milky Way $R_g \approx 58\,\text{kpc}$. We'll consider large distances outside the bulb, so we can disregard the effect of visible matter, but less than the galactic radius of dark matter, that is, $R_b \leq r \leq R_g$.

**c) ** Demonstrate that, with density (1), the mass of dark matter contained in a radius sphere $r$ grows linearly as $M(r) = 4\pi k\, r$. It also demonstrates that a constant orbital velocity of $v_c = \sqrt{4\pi G k}$ is indeed obtained.

**d) ** Taking into account the value of $v_c$ for the Milky Way obtained from the graph, calculate the mass $M_g$ (in solar masses) of all dark matter in the Milky Way.

**e) ** Knowing that the Sun is 8 kpc from the galactic center, calculate the density of dark matter in the Solar System. Compare it to the density value of ordinary matter in interplanetary space in the Solar System, which is about 5 H atoms per cm$^3$.

There are alternative models to explain the flatness of the rotation curve that do not resort to dark matter. One of them is the so-called MOND theory (by Modified Newtonian Dynamics), which proposes a modification of Newton's second law, $F = ma$, replacing it with a more general law of the type:

$$F = m\,a\,\mu(x) \quad (2)$$

where $x = a/a_0$, $a_0$ is a constant, and $\mu(x)$ is a function that tends to 1 when $x \gg 1$ and tends to $x$ when $x \ll 1$. Thus, when the accelerations are much higher than the constant $a_0$ it is in the classical Newtonian regime, while if the accelerations are much lower than $a_0$ it dominates the so-called MOND regime.

**f) ** Assuming the MOND regime in our galaxy, determine the constant orbital velocity $v_c$ based on $M_b$, $a_0$ and $G$, and calculate the value of $a_0$. Also calculate the acceleration of the Earth in its orbit around the Sun. By comparing the two values, indicate whether it is consistent to apply the MOND theory in the Solar System.

Let's go back to the hypothesis of dark matter and the density given by the Ec. (1).

**g) ** Demonstrate that the velocity of escape of the galaxy from a point at a distance $r$ from the center is:

$$v_{\mathrm{esc}}^2(r) = 2v_c^2\left(1 + \ln\frac{R_g}{r}\right) \quad (3)$$

*Ayuda:* Para que una masa escape del campo gravitatorio debe tener una energía cinética igual al trabajo que realiza la fuerza gravitatoria para llevar la masa desde su posición hasta el infinito. Use the mass $M(r)$ expression of paragraph (c) for $r < R_g$ and the value $M_g$ for $r \geq R_g$.

*Ayuda:* $\displaystyle\int \frac{dx}{x} = \ln x + \text{cte}$; $\displaystyle\int \frac{dx}{x^2} = -\frac{1}{x} + \text{cte}$

We wondered if the orbital velocity of the stars in the Milky Way was enough for any of them, particularly the Sun along with our entire solar system, to escape the galaxy. The spiral galactic disc is known to have a radius of 25 kpc.

**h)** ¿Puede escapar alguna estrella teniendo en cuenta sólo su velocidad orbital $v_c$? How fast should the Sun gain in the direction of its galactic orbital velocity, so that it can escape the galaxy?

---

**Datos:**
- A kpc is a "kilo parsec", where 1 parsec (pc) = 3.26 light-years
- $G = 6{,}67 \times 10^{-11}\,\text{N}\cdot\text{m}^2\cdot\text{kg}^{-2}$
- $M_{\odot} = 1{,}99 \times 10^{30}\,\text{kg}$
- Distance from Earth Sole: $150 \times 10^6\,\text{km}$
- Mass of the hydrogen atom: $1{,}67 \times 10^{-27}\,\text{kg}$

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
**Objects:** [[Star (object)|Star]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1berlLE_vxuTDoRm5kx8bdLKwSOJLphui/view)
