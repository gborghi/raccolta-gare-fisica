---
tipo: prova
prova_id: prova_2019 solucioness_2019
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2019'
level: ''
pdf: gare di altri paesi/Spagna/Samanca-locali/2019 solucioness_2019.pdf
cluster: Gravitazione e Astrofisica
n_problemi: '3'
tags:
  - kg/prova
  - anno/2019
  - paese/Spagna
  - comp/Spagna
  - cluster/Gravitazione e Astrofisica
---

# Spagna 2019 — 2019 solucioness_2019.pdf

**Fonte:** `gare di altri paesi/Spagna/Samanca-locali/2019 solucioness_2019.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Gravitazione e Astrofisica]]

## Problema 1

Problema 1: Un meteorito impacta con la ISS

(a) Para calcular la velocidad orbital tenemos que igualar la fuerza de la gravedad con la aceleración centrípeta

$$G\frac{M_T M_\text{ISS}}{r^2} = M_\text{ISS}\frac{v^2}{r} \to v = \sqrt{\frac{G M_T}{r}}$$

dónde $r$ es la distancia al centro de la tierra, $r = (R_T+408) = (6370+408)$ km, y $M_T$ la masa de la Tierra.

Como se puede observar, la velocidad orbital resultante es independiente de la masa $M_\text{ISS}$.

Usando para $G=6{,}67\times10^{-11}$ $\text{Nm}^2/\text{kg}^2$ y para $M_T=6\times10^{24}$ kg se obtiene $v=7{,}68\times10^3$ m/s.

El periodo orbital es

$$T = \frac{2\pi r}{v} = 5{,}54\times10^3 \text{ s}$$

(b) La fuerza gravitatoria de la ISS está dada por su masa multiplicada por el valor de la aceleración de la gravedad a una distancia $r$:

$$F = M_\text{ISS}\cdot g = M_\text{ISS}\,G\frac{M_T}{r^2} = 3{,}66\times10^6 \text{ N}$$

Y para calcular la energía mecánica total simplemente debemos sumar la energía cinética y la energía potencial gravitatoria

$$E_\text{mec} = \frac{1}{2}M_\text{ISS}v^2 + \left(-G\frac{M_T M_\text{ISS}}{r}\right) = -G\frac{M_T M_\text{ISS}}{2r} = -1{,}25\times10^{13} \text{ J}$$

(c) La manera más rápida e ingeniosa de resolver el problema es hacerlo analizando lo que vería un astronauta de la ISS, lo que equivale a resolverlo en el sistema de referencia del centro de masas pues $m\ll M_\text{ISS}$. Así, el astronauta estaría en reposo y vería acercarse el meteorito con una velocidad $2v$. Después del choque, considerado elástico, el meteorito sale en dirección contraria con velocidad $v'=2v$ para el astronauta. Sólo nos queda volver al sistema de referencia de la Tierra, para lo que tenemos que añadir la velocidad $v$ con la que se movía la ISS con respecto a la Tierra. Por lo tanto, la velocidad del meteorito inmediatamente después del impacto es $3v$.

(d) Hay que señalar que la velocidad que acabamos de calcular es válida solo inmediatamente después del choque. En efecto, puesto que en ese instante el meteorito se desplaza con una velocidad triple de la que corresponde a la órbita circular, esta cambiará a una órbita abierta alejándose indefinidamente de la Tierra. Su trayectoria corresponderá a una hipérbola por ser la energía mecánica positiva, ya que la velocidad es triple de la correspondiente a esa distancia, teniendo lugar justamente en ese momento el perigeo (máxima velocidad y distancia mínima a la Tierra).

Puedes aprender más en este link:
http://www.sc.ehu.es/sbweb/fisica/celeste/kepler3/kepler3.html

El procediendo más tradicional es resolver el problema en el sistema de referencia de la Tierra. Dado que el meteorito se encuentra en la misma órbita, su velocidad será la misma que la de la ISS, pues como hemos visto anteriormente, es independiente de la masa del objeto que orbita. Llamemos a esta velocidad $v$ y sean $v_1$ y $v_2$ las velocidades de la ISS y del meteorito después del choque, respectivamente.

Escribimos la conservación del momento y de la energía en el momento del choque:

$$-M_\text{ISS}v + mv = -M_\text{ISS}v_1 - mv_2$$

$$\frac{1}{2}M_\text{ISS}v^2 + \frac{1}{2}mv^2 = \frac{1}{2}M_\text{ISS}v_1^2 + \frac{1}{2}mv_2^2$$

Despejando $v_1$ en ambas ecuaciones e igualando tenemos:

$$\left(\frac{M_\text{ISS}v - mv - mv_2}{M_\text{ISS}}\right)^2 = \frac{M_\text{ISS}v^2 + mv^2 - mv_2^2}{M_\text{ISS}}$$

Desarrollando esta expresión es fácil llegar a:

$$M_\text{ISS}^2 v^2 + m^2 v^2 + m^2 v_2^2 - 2M_\text{ISS}mv^2 - 2M_\text{ISS}mvv_2 + 2m^2 vv_2 = M_\text{ISS}^2 v^2 + M_\text{ISS}mv^2 - M_\text{ISS}mv_2^2$$

Eliminando el término $M_\text{ISS}^2 v^2$ y agrupando se tiene:

$$m^2 v^2 + m^2 v_2^2 - 3M_\text{ISS}mv^2 - 2M_\text{ISS}mvv_2 + 2m^2 vv_2 + M_\text{ISS}mv_2^2 = 0$$

Dividiendo por $m$ la expresión anterior y agrupando términos se tiene que:

$$(m - 3M_\text{ISS})v^2 + 2(m - M_\text{ISS})vv_2 + (m + M_\text{ISS})v_2^2 = 0$$

Ahora podemos despreciar los términos en $m$ pues $m\ll M_\text{ISS}$:

$$-3M_\text{ISS}v^2 - 2M_\text{ISS}vv_2 + M_\text{ISS}v_2^2 = 0$$

$$-3v^2 - 2vv_2 + v_2^2 = 0$$

Resulta una ecuación cuadrática cuya solución es:

$$v_2 = \frac{2v \pm \sqrt{4v^2 + 12v^2}}{2} = 3v$$

dónde el resultado con signo negativo no tiene sentido físico.

**Topic:** [[Gravitation]], [[Newtonian Mechanics]], [[Conservation of Momentum]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Kepler's Laws (metodo)|Kepler's Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.1

## Problema 2

Problema 2: Spiderman al rescate

(a) Aplicando el teorema de conservación de la energía entre el punto A y B tenemos:

$$mgH = mg2R + \frac{1}{2}mv_B^2$$

Por otra parte, para que Spiderman llegue hasta el punto B se debe cumplir que

$$mg = m\frac{v_B^2}{R}$$

Combinando ambas ecuaciones podemos obtener el valor mínimo para la altura $H$.

$$mgH = mg2R + \frac{1}{2}mRg$$

$$H \geq 2R + \frac{R}{2} = \frac{5R}{2} \Rightarrow H \geq 2{,}5 \text{ m}$$

(b) En primer lugar, conocido el ángulo $\alpha=45^\circ$ y el radio del looping, hay que determinar la altura $h$ del punto C:

$$h = R(1 - \cos\alpha) = 1(1 - \cos 45^\circ) \to h = 0{,}29 \text{ m}$$

Repitiendo el razonamiento anterior de conservación de la energía desde A hasta C

$$mgH = mgh + \frac{1}{2}mv_C^2$$

$$v_C^2 = 2g(H - h) \to v_C = \sqrt{2g(H - h)} \to v_C = \sqrt{2 \cdot 9{,}8 \cdot (5 - 0{,}29)}$$

$$v_C = 9{,}6 \text{ m/s}$$

Una vez obtenida la velocidad de Spiderman en el punto C, simplemente tenemos que estudiar el movimiento parabólico que describe Spiderman:

- En vertical realiza un mrua: $y = h + v_{Cy}t - \frac{1}{2}gt^2$
- En horizontal realiza un mru: $x = v_{Cx}t \Rightarrow t = \frac{x}{v_{Cx}}$

Siendo $v_{Cx} = v_C\cdot\cos\alpha$ y $v_{Cy} = v_C\cdot\operatorname{sen}\alpha$ y sustituyendo el tiempo en desplazamiento vertical $y$, se obtiene la ecuación de la trayectoria de Spiderman:

$$y = h + x\cdot\tan\alpha - \frac{g}{2v_{Cx}^2}x^2$$

Únicamente nos falta calcular la altura que alcanzará desde C cuando alcance el punto de coordenada $x=3$ m:

$$y = 0{.}29 + 3\cdot\tan(45^\circ) - \frac{9{,}8}{2[9{,}6\cdot\cos(45^\circ)]^2}3^2 \to y = 2{,}33 \text{ m}$$

Por lo tanto, como el gato se encuentra en una azotea de altura $a=4$ m, Spiderman no llegará a rescatarlo pues $y = 2{,}33 \text{ m} < 4 \text{ m} = a$ y tendrá que trepar 1.67 m para rescatar al gato.

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.3

## Problema 3

Problema 3: Ondas estacionarias en una cuera tensa

(a) Se completa la tabla:

| $T$ (N) | 0,541 | 0,358 | 0,275 | 0,187 | 0,132 | 0,113 | 0,082 |
|---|---|---|---|---|---|---|---|
| $n$ | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| $1/n^2$ | 0,063 | 0,040 | 0,028 | 0,020 | 0,016 | 0,012 | 0,010 |

(b) Esta es la gráfica obtenida:

(c) Con ello la ecuación experimental que relaciona la tensión en Newtons con $1/n^2$ sería:

$$T = (8{,}88 \pm 0{,}65)\frac{1}{n^2}$$

Al comparar la ecuación anterior con la teórica se observa que la pendiente se corresponde con $4\mu L^2 f^2$. En fácil obtener la densidad lineal de masa de la cuerda y su error:

$$\mu = (1{,}32 \pm 0{,}09)10^{-3} \text{ kg/m}$$

(d) Utilizando los valores obtenido calculamos la tensión de la cuerda para el armónico $n=1$. Se obtiene que

$$T = \frac{4L^2 f^2 \mu}{n^2} = 8{.}88 \pm 0{.}62 \text{ N}$$

Expresando el resultado de forma apropiada:

$$T = (8{,}9 \pm 0{,}6) \text{ N}$$

Gráfica T frente a $1/n^2$ (eje x: $n^{-2}$, eje y: T (N)):
y = 8,88x, $R^2 = 0{,}9929$
y = 8,65x, $R^2 = 1$
y = 9,90x, $R^2 = 1$

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Fonte:** Testo (PDF) — p.4
