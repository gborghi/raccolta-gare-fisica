---
title: Spagna 2026
tipo: prova
tags:
  - kg/prova
  - anno/2026
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="p2-anillos-de-saturno"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2026 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/satellite,object/planet,object/star"></span>

<div class="qlang-switch" data-default="es"></div>



**P2. Los anillos de Saturno**

Cuando Galileo apuntó su telescopio hacia Saturno en 1610, vio algo que no supo explicar: el planeta parecía tener "orejas". Pasaron cincuenta años hasta que Huygens reconoció que eran anillos: un disco de innumerables fragmentos de hielo, cada uno en su propia órbita, que se extienden una distancia comparable a la que separa la Tierra de la Luna, pero con apenas diez metros de grosor.

**Constantes físicas y datos:**

- Constante gravitacional: $G = 6{,}67 \times 10^{-11}\,\mathrm{N\,m^2/kg^2}$
- Radio medio de Saturno: $R_S = 58\,232\,\mathrm{km}$
- Densidad media de Saturno: $\rho_S = 687\,\mathrm{kg/m^3}$
- Densidad del hielo poroso: $\rho_{\text{hielo}} = 600\,\mathrm{kg/m^3}$

En todo el problema puedes usar la aproximación $(1+x)^n \approx 1 + nx$ cuando $x \ll 1$.

Una de las hipótesis sobre el origen de los anillos es que se formaron a partir de la desintegración de un cometa que pasó muy cerca. Por simplicidad, en lugar de un cometa vamos a considerar un pequeño satélite esférico formado por partículas sueltas —como un montón de escombros— que se mantiene unido solo por su propia gravedad y que está en el campo gravitacional de un planeta. El planeta atrae con más fuerza al lado cercano del satélite que al lejano. Si el satélite orbita demasiado cerca, esta diferencia de fuerzas puede romperlo, dispersando los fragmentos a lo largo de la órbita hasta formar un anillo. La distancia crítica a la que esto ocurre es el **límite de Roche**.

El satélite tiene masa $m$, radio $r$ y densidad uniforme $\rho_m$, y orbita, sin rotar sobre sí mismo, un planeta de masa $M$, radio $R$ y densidad $\rho_M$ a una distancia centro a centro $d$. Supón que $r \ll d$ y simplifica las expresiones resultantes con esta aproximación siempre que se pueda.

**(a)** Considera una masa de prueba $\delta m$ en la superficie del satélite, en el punto más cercano al planeta. ¿Cuál es la fuerza gravitacional del satélite sobre $\delta m$?

**(b)** Calcula la fuerza de marea del planeta sobre esta masa de prueba, definida como la diferencia entre la fuerza de atracción que ejerce el planeta sobre $\delta m$ y sobre una masa igual en el centro del satélite.

**(c)** Halla el límite de Roche, $d_{\text{Roche}}$: la distancia desde el centro del planeta al centro del satélite a la que la masa de prueba deja de estar ligada al satélite y este empieza a romperse; exprésala en términos de $R$, $\rho_M$ y $\rho_m$. Calcula su valor numérico para un satélite de hielo poroso alrededor de Saturno.

Hasta ahora hemos ignorado tanto la deformación del satélite como su posible rotación. Considera ahora un satélite fluido e incompresible —un cuerpo sin rigidez interna, como una gota de agua en el espacio, unido solo por su propia gravedad— en órbita circular y con rotación síncrona (siempre muestra la misma cara al planeta). Bajo estas condiciones, el satélite se alargará en un esferoide prolato (como un balón de rugby), con su eje mayor apuntando hacia el planeta.

**(d)** Para un satélite fluido que se alarga bajo las mareas, deduce cualitativamente si el límite de Roche será menor, igual o mayor que el calculado en (c).

Vamos a estudiar la deformación que sufre el satélite fluido. Para ello, es más sencillo trabajar en un sistema de referencia no inercial que gira con el satélite, a velocidad angular $\Omega$, alrededor del planeta. En este sistema corrotante el satélite está en reposo y la aceleración centrípeta se experimenta como una aceleración centrífuga —hacia afuera.

**(e)** Determina la aceleración centrífuga de un punto situado a una distancia $x$ del centro del satélite, con $x \geq 0$ en la dirección que se aleja del planeta —en términos de $G$, $M$, $d$ y $x$.

En el sistema corrotante, la deformación del satélite se debe a la combinación de la fuerza gravitatoria del planeta y de la fuerza centrífuga.

**(f)** Demuestra que la aceleración neta de un punto situado a distancia $x$ del centro del satélite, resultante de la combinación de la aceleración gravitacional y la centrífuga, se puede derivar de un potencial de la forma
$$V_T(x) = Px^2 + \text{const}$$
Determina $P$ en términos de $G$, $M$ y $d$.

La superficie de un fluido en equilibrio, como es el caso del satélite, debe ser equipotencial ($V = \text{cte}$) —si no, el fluido fluiría. Como $V_T \propto x^2$, el equilibrio requiere que el potencial autogravitacional también varíe como $x^2$ en la superficie. Esto ocurre si el satélite es un elipsoide. Dentro de un elipsoide uniforme con semiejes $a$, $b$, $c$ y densidad $\rho$, el potencial gravitacional es
$$V_S(x,y,z) = -G\pi\rho\left(A_a x^2 + A_b y^2 + A_c z^2\right) + \text{const}$$
donde $A_a$, $A_b$ y $A_c$ son coeficientes positivos que dependen de las proporciones de los ejes y cumplen $A_a + A_b + A_c = 2$.

**(g)** Supón que el satélite se alarga en un esferoide prolato con semieje mayor $a$ (a lo largo de $x$) y semiejes menores iguales, $b = c$ (a lo largo de $y$ y $z$). Su superficie cumple:
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1,\quad b = c$$
Demuestra que el potencial autogravitacional en la superficie se puede escribir como
$$V_S^{\text{superficie}} = -G\pi\rho_m\, f(\epsilon)\, x^2 + \text{const}$$
donde $\epsilon = 1 - b^2/a^2$ es la excentricidad del esferoide. Halla $f(\epsilon)$ en términos de $A_a$, $A_b$ y $\epsilon$.

**(h)** ¿A qué formas corresponden $\epsilon = 0$ y $\epsilon \to 1$? Calcula $f(0)$ y $f(1)$. Sabiendo que la función tiene un único máximo en $\epsilon_c = 0{,}86$ con valor $f_{\max} = 0{,}14$, dibuja $f(\epsilon)$.

**(i)** Deriva una expresión para el límite de Roche de un satélite fluido, $d_{\text{fluido}}$. Calcula su valor para un satélite de hielo poroso alrededor de Saturno.

**(j)** Considera ahora una pequeña partícula esférica opaca de los anillos, permanentemente expuesta al Sol y que refleja una fracción $A = 0{,}6$ de la luz que recibe (el albedo). Como todo cuerpo a temperatura $T$, también emite radiación térmica con una potencia por unidad de superficie $e\sigma T^4$, donde $\sigma = 5{,}67 \times 10^{-8}\,\mathrm{W\,m^{-2}\,K^{-4}}$ y, en este caso, la emisividad es $e \approx 1$. Sabiendo que Saturno orbita a $d = 9{,}5\,\mathrm{UA}$ del Sol y que el flujo solar a una distancia equivalente a la distancia del Sol a la Tierra (1 UA) es $F_0 = 1{,}36\,\mathrm{kW/m^2}$, calcula la temperatura de la partícula.

**Topic:** [[Gravitation]], [[Astrophysics]], [[Thermodynamics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Physical Modeling (metodo)|Physical Modeling]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Satellite (object)|Satellite]], [[Planet (object)|Planet]], [[Star (object)|Star]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1tvYn73RN6f3uQh16WKa7EDdWW2ELBeFL/view)


<div class="qlang-split" data-lang="it"></div>

**P2. Gli anelli di Saturno**

Quando Galileo puntò il suo telescopio verso Saturno nel 1610, vide qualcosa che non riuscì a spiegare: il pianeta sembrava avere "orecchie". Sono passati cinquant'anni prima che Huygens riconoscesse che erano anelli: un disco di innumerevoli frammenti di ghiaccio, ciascuno nella sua propria orbita, che si estendono a una distanza paragonabile a quella che separa la Terra dalla Luna, ma con appena dieci metri di spessore.

**Constanti fisiche e dati:**

- Costante gravitazionale: $G = 6{,}67 \times 10^{-11}\,\mathrm{N\,m^2/kg^2}$
- Radio medio di Saturno: $R_S = 58\,232\,\mathrm{km}$
- Densità media di Saturno: $\rho_S = 687\,\mathrm{kg/m^3}$
- Densità del ghiaccio poroso: $\rho_{\text{hielo}} = 600\,\mathrm{kg/m^3}$

Per tutto il problema puoi usare l'approccio $(1+x)^n \approx 1 + nx$ quando $x \ll 1$.

Una delle ipotesi sull'origine degli anelli è che si sono formati dalla disintegrazione di una cometa che è passata molto vicino. Per semplicità, invece di una cometa, consideriamo un piccolo satellite sferico costituito da particelle sciolte come un mucchio di detriti che si mantiene unito solo dalla sua stessa gravità e che è nel campo gravitazionale di un pianeta. Il pianeta attira più fortemente il lato vicino del satellite che quello lontano. Se il satellite orbita troppo vicino, questa differenza di forze può romperlo, disperdendo i frammenti lungo l'orbita fino a formare un anello. La distanza critica a cui questo accade è il limite di Roche ****.

Il satellite ha massa $m$, radio $r$ e densità uniforme $\rho_m$, e orbita, senza ruotare su se stesso, un pianeta di massa $M$, radio $R$ e densità $\rho_M$ a una distanza centro-centro $d$. Supponi $r \ll d$ e semplifica le espressioni risultanti con questo approccio quando possibile.

**(a) ** Considera una massa di prova $\delta m$ sulla superficie del satellite, al punto più vicino al pianeta. Qual è la forza gravitazionale del satellite su $\delta m$?

**(b) ** Calcola la forza di marea del pianeta su questa massa di prova, definita come la differenza tra la forza di attrazione esercitata dal pianeta su $\delta m$ e su una massa uguale al centro del satellite.

**(c) ** Trova il limite di Roche, $d_{\text{Roche}}$: la distanza dal centro del pianeta al centro del satellite alla quale la massa di prova smette di essere legata al satellite e il satellite inizia a rompersi; esprimelo in termini di $R$, $\rho_M$ e $\rho_m$. Calcola il suo valore numerico per un satellite di ghiaccio poroso attorno a Saturno.

Finora abbiamo ignorato sia la deformazione del satellite che la sua possibile rotazione. Considera ora un satellite fluido e incompressibile un corpo senza rigidità interna, come una goccia d'acqua nello spazio, unita solo dalla sua stessa gravità in orbita circolare e con rotazione sincrona (sempre mostra la stessa faccia al pianeta). In queste condizioni, il satellite si allungerà in uno sferoide prolato (come una palla da rugby), con il suo asse maggiore puntando verso il pianeta.

**(d) ** Per un satellite fluido che si allunga sotto le maree, deduce qualitativamente se il limite di Roche sarà inferiore, pari o superiore a quello calcolato in (c).

Studieremo la deformazione che il satellite fluido subisce. Per questo è più semplice lavorare su un sistema di riferimento non inerziale che ruota con il satellite, a velocità angolare $\Omega$, intorno al pianeta. In questo sistema corrottivo il satellite è a riposo e l'accelerazione centripetata viene sperimentata come un'accelerazione centrifuga verso l'esterno.

**(e) ** Determina l'accelerazione centrifugata di un punto situato a una distanza $x$ dal centro del satellite, con $x \geq 0$ nella direzione che si allontana dal pianeta  in termini di $G$, $M$, $d$ e $x$.

Nel sistema corrotto, la deformazione del satellite è dovuta alla combinazione della forza gravitazionale del pianeta e della forza centrifugante.

**(f) ** Dimostra che l'accelerazione netta di un punto situato a distanza $x$ dal centro del satellite, risultante dalla combinazione di accelerazione gravitazionale e centrifugato, può essere derivata da un potenziale di forma
$$V_T(x) = Px^2 + \text{const}$$
Determina $P$ in termini di $G$, $M$ e $d$.

La superficie di un fluido in equilibrio, come nel caso del satellite, deve essere equipotenziale ($V = \text{cte}$) Come $V_T \propto x^2$, l'equilibrio richiede che il potenziale autogravitazionale varia anche come $x^2$ sulla superficie. Questo succede se il satellite è un ellipsoide. All'interno di un ellipsoide uniforme con semiconduzioni $a$, $b$, $c$ e densità $\rho$, il potenziale gravitazionale è
$$V_S(x,y,z) = -G\pi\rho\left(A_a x^2 + A_b y^2 + A_c z^2\right) + \text{const}$$
in cui $A_a$, $A_b$ e $A_c$ sono coefficienti positivi che dipendono dalle proporzioni degli assi e soddisfano $A_a + A_b + A_c = 2$.

**(g) ** Supponiamo che il satellite si estenda in uno sferoide prolato con semiezza maggiore $a$ (lungo $x$) e semiezza minore uguali, $b = c$ (lungo $y$ e $z$). La superficie è complessiva:
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1,\quad b = c$$
Dimostra che il potenziale di autogravitazione sulla superficie può essere scritto come
$$V_S^{\text{superficie}} = -G\pi\rho_m\, f(\epsilon)\, x^2 + \text{const}$$
dove $\epsilon = 1 - b^2/a^2$ è l'escentricità dello spheroide. Raccogli $f(\epsilon)$ in termini di $A_a$, $A_b$ e $\epsilon$.

**(h) ** Quali sono le forme di $\epsilon = 0$ e $\epsilon \to 1$? Calcola $f(0)$ e $f(1)$. Sapendo che la funzione ha un unico massimo in $\epsilon_c = 0{,}86$ con valore $f_{\max} = 0{,}14$, disegna $f(\epsilon)$.

**(i) ** Deriva un'espressione per il limite di Roche di un satellite fluido, $d_{\text{fluido}}$. Calcola il suo valore per un satellite di ghiaccio poroso attorno a Saturno.

**(j) ** Considera ora una piccola particella sferica opaca degli anelli, permanentemente esposta al Sole e che riflette una frazione $A = 0{,}6$ della luce che riceve (l'albedo). Come ogni corpo a temperatura $T$, emette anche radiazioni termiche con una potenza per unità di superficie $e\sigma T^4$, dove $\sigma = 5{,}67 \times 10^{-8}\,\mathrm{W\,m^{-2}\,K^{-4}}$ e, in questo caso, l'emissività è $e \approx 1$. Sapendo che Saturno orbita $d = 9{,}5\,\mathrm{UA}$ sul Sole e che il flusso solare a una distanza equivalente alla distanza dal Sole alla Terra (1 UA) è $F_0 = 1{,}36\,\mathrm{kW/m^2}$, calcola la temperatura della particella.

**Topic:** [[Gravitation]], [[Astrophysics]], [[Thermodynamics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Physical Modeling (metodo)|Physical Modeling]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Satellite (object)|Satellite]], [[Planet (object)|Planet]], [[Star (object)|Star]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1tvYn73RN6f3uQh16WKa7EDdWW2ELBeFL/view)

<div class="qlang-split" data-lang="en"></div>

**P2. The rings of Saturn**

When Galileo pointed his telescope toward Saturn in 1610, he saw something he could not explain: the planet seemed to have "ears". It was fifty years before Huygens recognized that they were rings: a disc of countless ice fragments, each in its own orbit, that extend a distance comparable to that of the Earth from the Moon, but barely ten meters thick.

The following information is provided for in the Annex to Implementing Regulation (EU) 2015/2446.

- Gravitational constant: $G = 6{,}67 \times 10^{-11}\,\mathrm{N\,m^2/kg^2}$
- Average radius of Saturn: $R_S = 58\,232\,\mathrm{km}$
- Average density of Saturn: $\rho_S = 687\,\mathrm{kg/m^3}$
- Density of porous ice: $\rho_{\text{hielo}} = 600\,\mathrm{kg/m^3}$

For the whole problem you can use the $(1+x)^n \approx 1 + nx$ approximation when $x \ll 1$.

One of the hypotheses about the origin of the rings is that they formed from the disintegration of a comet that passed very close. For simplicity's sake, instead of a comet, we're going to consider a small spherical satellite made up of loose particles like a pile of debris that's held together by its own gravity and that's in the gravitational field of a planet. The planet attracts more force to the near side of the satellite than to the far side. If the satellite orbits too close, this force difference can break it, scattering the fragments along the orbit to form a ring. The critical distance at which this occurs is the **Roche** limit.

The satellite has mass $m$, radius $r$ and uniform density $\rho_m$, and orbits, without rotating over itself, a planet of mass $M$, radius $R$ and density $\rho_M$ at a centre-to-center distance $d$. Assume $r \ll d$ and simplify the resulting expressions with this approximation whenever possible.

**(a) ** Consider a test mass $\delta m$ on the surface of the satellite, at the point closest to the planet. What is the gravitational force of the satellite over $\delta m$?

**(b) ** Calculates the tidal force of the planet over this test mass, defined as the difference between the gravitational force exerted by the planet over $\delta m$ and over an equal mass at the centre of the satellite.

**(c) ** Find the Roche limit, $d_{\text{Roche}}$: the distance from the centre of the planet to the centre of the satellite at which the test mass stops being attached to the satellite and it begins to break; express it in terms of $R$, $\rho_M$ and $\rho_m$. Calculate its numerical value for a porous ice satellite around Saturn.

So far we have ignored both the deformation of the satellite and its possible rotation. It now considers a fluid, incompressible satellite a body without internal rigidity, like a drop of water in space, united only by its own gravity in circular orbit and synchronous rotation (always showing the same face to the planet). Under these conditions, the satellite will extend into a prolate spheroid (like a rugby ball), with its main axis pointing toward the planet.

**(d) ** For a fluid satellite that extends under tides, qualitatively deduce whether the Roche limit will be less, equal to or greater than that calculated in (c).

We're going to study the deformation that the fluid satellite suffers. For this, it is easier to work on a non-inertial reference system that rotates with the satellite, at angular speed $\Omega$, around the planet. In this corrosive system the satellite is at rest and the centrifugal acceleration is experienced as a centrifugal acceleration towards the outside.

**(e) ** Determines the centrifugal acceleration of a point located at a distance $x$ from the centre of the satellite, with $x \geq 0$ in the direction away from the planet  in terms of $G$, $M$, $d$ and $x$.

In the corrosive system, the deformation of the satellite is due to the combination of the planet's gravitational force and centrifugal force.

**(f) ** It shows that the net acceleration of a point located at a distance $x$ from the satellite centre, resulting from the combination of gravitational acceleration and centrifugal acceleration, can be derived from a potential of the form
$$V_T(x) = Px^2 + \text{const}$$
It determines $P$ in terms of $G$, $M$ and $d$.

The surface of a fluid in equilibrium, as in the case of a satellite, must be equipotencial ($V = \text{cte}$)  otherwise the fluid would flow. As $V_T \propto x^2$, the equilibrium requires that the self-gravitational potential also varies as $x^2$ on the surface. This happens if the satellite is an ellipsoid. Within a uniform ellipsoid with semicircles $a$, $b$, $c$ and density $\rho$, the gravitational potential is
$$V_S(x,y,z) = -G\pi\rho\left(A_a x^2 + A_b y^2 + A_c z^2\right) + \text{const}$$
where $A_a$, $A_b$ and $A_c$ are positive coefficients that depend on axle proportions and meet $A_a + A_b + A_c = 2$.

**(g) ** Suppose the satellite is elongated into a prolatal spheroid with a larger half-life $a$ (along $x$) and equal smaller half-life, $b = c$ (along $y$ and $z$). Its surface area is:
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1,\quad b = c$$
It shows that the self-gravitational potential on the surface can be written as
$$V_S^{\text{superficie}} = -G\pi\rho_m\, f(\epsilon)\, x^2 + \text{const}$$
where $\epsilon = 1 - b^2/a^2$ is the eccentricity of the spheroid. Find $f(\epsilon)$ in terms of $A_a$, $A_b$ and $\epsilon$.

**(h) ** What forms are $\epsilon = 0$ and $\epsilon \to 1$? Calculate $f(0)$ and $f(1)$. Knowing that the function has a single maximum in $\epsilon_c = 0{,}86$ with a value of $f_{\max} = 0{,}14$, draw $f(\epsilon)$.

**(i) ** Derives an expression for the Roche limit of a fluid satellite, $d_{\text{fluido}}$. Calculate its value for a porous ice satellite around Saturn.

**(j) ** It now considers a small opaque spherical particle of the rings, permanently exposed to the Sun and reflecting a fraction $A = 0{,}6$ of the light it receives (the albedo). Like any body at $T$, it also emits thermal radiation with a power per surface unit $e\sigma T^4$, where $\sigma = 5{,}67 \times 10^{-8}\,\mathrm{W\,m^{-2}\,K^{-4}}$ and, in this case, the emissivity is $e \approx 1$. Knowing that Saturn orbits at $d = 9{,}5\,\mathrm{UA}$ from the Sun and that the solar flux at a distance equivalent to the Sun's distance from the Earth (1 AU) is $F_0 = 1{,}36\,\mathrm{kW/m^2}$, it calculates the particle temperature.

**Topic:** [[Gravitation]], [[Astrophysics]], [[Thermodynamics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Physical Modeling (metodo)|Physical Modeling]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Satellite (object)|Satellite]], [[Planet (object)|Planet]], [[Star (object)|Star]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1tvYn73RN6f3uQh16WKa7EDdWW2ELBeFL/view)
