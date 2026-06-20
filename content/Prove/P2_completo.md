---
tipo: prova
prova_id: prova_P2_completo
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: na
level: ''''''
pdf: gare di altri paesi/Spagna/RSF/P2_completo.pdf
generator: llm-retranscribed
tags:
  - kg/prova
---

# Spagna na '' — P2_completo.pdf

**Fonte:** `gare di altri paesi/Spagna/RSF/P2_completo.pdf` · Apri PDF

## Problema 1







**El cañón magnético de raíles**

La idea del cañón de raíles (*rail gun*) es debida a un inventor francés, que la patentó en 1919. Alemania diseñó en los últimos meses de la segunda Guerra Mundial un prototipo operativo, como base de un arma antiaérea que no llegó a construirse. Las potencias militares actuales prosiguen su desarrollo como posible arma naval para disparar proyectiles sólidos, no explosivos, a muy alta velocidad. Una aplicación futurista más pacífica y natural sería el lanzamiento de cargas de material desde la superficie de la Luna, aprovechando la menor velocidad de "satelización" en torno a este astro, el vacío reinante y la posibilidad de generar en el mismo lugar la electricidad necesaria con paneles fotovoltaicos.

El dispositivo se basa en la fuerza que ejerce un campo magnético sobre un conductor por el que circula una corriente eléctrica. El campo magnético $\vec{B}$ lo produce (ley de Biot-Savart) la corriente $I$ que circula por dos conductores rectilíneos y paralelos, los raíles $A_1$ y $A_2$, alimentados por un generador con la polaridad indicada en la figura 1. Supondremos que los raíles son cilíndricos, de radio $R$ y separados una distancia $L$ entre ejes. El circuito eléctrico lo cierra, formando una U, una armadura conductora transversal deslizante AT, sobre la que actúa la fuerza impulsora magnética. Esta armadura, en su movimiento paralelo a los raíles, empuja al proyectil o carga que se quiere lanzar.

Seguramente conoce la expresión del campo magnético creado por una corriente rectilínea e indefinida, pero esta expresión no puede aplicarse en nuestro caso para determinar el campo magnético en un punto de la armadura transversal, ya que sólo circula corriente por el tramo de los raíles entre la fuente de alimentación y la propia armadura (zona a la derecha de AT en la figura 1).

Aplicando la Ley de Biot-Savart, puede demostrarse que el campo magnético producido por una corriente rectilínea finita en un punto $P$ (véase la figura 2) puede expresarse en la forma

$$\vec{B} = \frac{\mu_0 I}{4\pi r}(\sin\alpha_1 + \sin\alpha_2)\,\hat{u}_\theta$$

donde $\hat{u}_\theta$ es un vector unitario normal al plano de la figura 2 (regla del sacacorchos) y $\mu_0 = 4\pi \times 10^{-7}\ \text{N/A}^2$ es la permeabilidad magnética del vacío.

Suponga que la longitud de los raíles por los que circula la corriente $I$ es en todo momento mucho mayor que la separación $L$ entre ellos, y que el campo magnético en el exterior de una corriente cilíndrica coincide con el de una corriente filiforme a lo largo del eje del cilindro.

**a)** Determine el campo magnético total, $\vec{B}(y)$, producido por la corriente que circula por los dos raíles en un punto de AT situado a una distancia $y$ del eje de $A_1$ (figura 3).

Por la armadura transversal AT circula la misma corriente $I$, en presencia del campo no uniforme $\vec{B}(y)$. Por tanto, sobre AT va a actuar una fuerza no uniformemente distribuida.

**b)** Considere un pequeño elemento de corriente en AT, de longitud infinitesimal $dy$, situado a una distancia $y$ del eje de $A_1$. Determine la fuerza magnética $d\vec{F}(y)$ (módulo, dirección y sentido) que actúa sobre este elemento de corriente.

**c)** Determine la fuerza magnética neta $\vec{F}$ que actúa sobre AT.

*Ayudas:* Tenga en cuenta que la longitud de la armadura deslizante no es $L$, sino $L - 2R$. Pueden serle útiles las siguientes integrales indefinidas:

$$\int \frac{dy}{y} = \ln y, \qquad \int \frac{dy}{L - y} = -\ln(L - y)$$

---

Vamos ahora a hacer algunos cálculos numéricos, para poner de manifiesto las extraordinarias características de un dispositivo de este tipo. En concreto, vamos a considerar un cañón de raíles diseñado para lanzar cargas desde la superficie de la Luna, con los raíles paralelos a la superficie. El radio de la Luna es $R_L = 1{,}74 \times 10^6\ \text{m}$, y la aceleración de la gravedad en su superficie es $g_L = 1{,}62\ \text{m/s}^2$.

Considere un sistema con $L = 1{,}0\ \text{m}$ y $R = 10\ \text{cm}$, que acelera una carga de masa $m = 200\ \text{kg}$ hasta la velocidad de escape de la Luna, con la fuerza magnética $F$ actuando a lo largo de una longitud de raíles $D = 1000\ \text{m}$. Suponga despreciables las fuerzas de fricción entre AT y los raíles.[^1]

**d)** Calcule la velocidad de escape desde la superficie de la Luna, $v_L$.

**e)** Calcule la intensidad $I$ de la corriente que debe circular por los raíles.

Habrá obtenido una corriente enorme, del orden del millón de amperios. Todos los valores de las magnitudes involucradas en este dispositivo son muy grandes, lo que provoca numerosos problemas prácticos de diseño. Por ejemplo, existe una gran fuerza de interacción entre los dos raíles, pues por ellos circulan intensas corrientes antiparalelas. Esto obliga a que el montaje real deba tener una gran resistencia mecánica, soportando grandes esfuerzos sin deformaciones apreciables.

**f)** Haga una estimación de la fuerza magnética por unidad de longitud que actúa sobre los raíles, en las proximidades de AT.

Otro problema práctico es el calentamiento de los raíles por efecto Joule, y la consiguiente dilatación térmica. Suponga que los raíles son de cobre, que tiene una resistividad $\rho = 1{,}7 \times 10^{-8}\ \Omega{\cdot}\text{m}$.

**g)** Calcule la potencia disipada en forma de calor en la longitud efectiva de los dos raíles, $2D = 2000\ \text{m}$, cuando por ambos circula la corriente $I$. Calcule también la energía total disipada durante el lanzamiento y compárela con la energía cinética de la carga lanzada.

[^1]: Esta suposición no es muy realista. Precisamente uno de los problemas prácticos de este dispositivo es la abrasión mecánica de los raíles, debida a la fricción durante el lanzamiento.

**Topic:** [[Magnetism]], [[Electromagnetism]], [[Gravitation]]
**Metodi:** [[Biot-Savart Law (metodo)|Biot-Savart Law]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.1
