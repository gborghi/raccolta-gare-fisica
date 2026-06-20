---
tipo: prova
prova_id: prova_P2-Anillos-de-Saturno
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2026'
level: ''
pdf: gare di altri paesi/Spagna/RSF/2026/P2-Anillos-de-Saturno.pdf
cluster: Meccanica
n_problemi: '1'
tags:
  - kg/prova
  - anno/2026
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---

# Spagna 2026 — P2-Anillos-de-Saturno.pdf

**Fonte:** `gare di altri paesi/Spagna/RSF/2026/P2-Anillos-de-Saturno.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Problema 1

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
**Fonte:** Testo (PDF) — p.1
