---
tipo: prova
prova_id: prova_2023 34 OAF 2023 PRUEBA TEORICA
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2023'
level: ''
pdf: >-
  gare di altri paesi/Spagna/Saragozza-locali/2023 34 OAF 2023 PRUEBA
  TEORICA.pdf
cluster: Fisica Moderna
n_problemi: '3'
tags:
  - kg/prova
  - anno/2023
  - paese/Spagna
  - comp/Spagna
  - cluster/Fisica Moderna
---

# Spagna 2023 — 2023 34 OAF 2023 PRUEBA TEORICA.pdf

**Fonte:** `gare di altri paesi/Spagna/Saragozza-locali/2023 34 OAF 2023 PRUEBA TEORICA.pdf` · Apri PDF · apri PDF p.2
**Cluster:** [[Fisica Moderna]]

## Problema 1

P1. Física en el tren.
Albert Einstein y su segunda esposa visitaron España entre marzo y
abril de 1923, cuando ya era público que le habían concedido el premio
Nobel de Física. Su llegada en tren a Barcelona fue pintoresca, ya que
olvidó avisar en qué tren llegaban, con lo que no hubo nadie esperándoles
en la estación. Afortunadamente, a su llegada a Zaragoza, el 12 de marzo,
fue recibido como merecía un genio de su nivel.
Los largos viajes en tren de la época seguro que permitieron a
Einstein meditar sobre sus teorías. De hecho, uno de sus experimentos
mentales más famosos, que le ayudó a deducir su teoría de la relatividad,
está relacionado con un tren y un rayo de luz.
Si tienes ocasión de viajar en tren puedes realizar el siguiente
experimento: Imagina un péndulo colgado en el interior del tren. Si el tren
está parado, el péndulo permanecerá en su posición de equilibrio (Fig. 1a).
Por el contrario, cuando el tren arranque, el péndulo se moverá
“misteriosamente” debido a la inercia (Fig. 1b).

a) Indica en qué sentido está acelerando el tren.
Considera que el tren se mueve con aceleración constante, $a$, y el
péndulo tiene una longitud $L$ y masa $m$.

b) Dibuja el diagrama de cuerpo libre del péndulo, es decir, las fuerzas
que actúan sobre él.

c) Calcula la relación entre la aceleración del tren, $a$, y el ángulo de inclinación del péndulo, $\theta$.

Este sencillo sistema puede usarse1 para calcular la distancia entre dos estaciones de tren, suponiendo
que el desplazamiento del tren está compuesto por la concatenación de multitud de movimientos rectilíneos
uniformemente acelerados y obteniendo la aceleración para cada uno de ellos a partir del ángulo que forma el
péndulo con la vertical.
Imaginemos que el tren parte del reposo y medimos el ángulo promedio en intervalos de 10 segundos,
considerando que la aceleración se mantiene prácticamente constante en el intervalo. Obtenemos los
siguientes valores:

| $t_i - t_f$ (s) | 0-10 | 11-20 | 21-30 | 31-40 | 41-50 |
| --- | --- | --- | --- | --- | --- |
| $\theta$ ($^\circ$) | 3 | 5 | 7 | 6 | 4 |

d) Calcula qué distancia ha recorrido durante los 50 segundos.

Cuando el tren viaja con aceleración constante, $a$, separamos ligeramente el péndulo de su posición de
equilibrio.

e) Calcula el periodo de la oscilación resultante alrededor de la posición de equilibrio.

A partir de un determinado momento el tren se mueve con velocidad constante.

f) Calcula en este caso el periodo de la oscilación alrededor de la posición de equilibrio.

1 Claire Tham et al. "Using a Simple Pendulum to Calculate the Distance Between Two Train Stations", The Physics Teacher 60,
748-751 (2022) https://doi.org/10.1119/5.0043205

P1. Solución

a) La masa suspendida del péndulo tiende a quedarse en reposo por efecto de la inercia
mientras el tren acelera, siendo la componente de la tensión de la cuerda en
dirección horizontal la que le hace moverse solidaria con el tren. Por tanto, como
muestra la Fig. 2, el tren está acelerando hacia la derecha.

b) Las únicas fuerzas “reales” que actúan sobre el péndulo son el peso,
$m\vec{g}$, y la
tensión de la cuerda,
$\vec{T}$, con lo que el diagrama de cuerpo libre quedaría tal y como
muestra la figura 2.

c) Aplicando la 2a Ley de Newton, tenemos

$$\vec{F} = m\sum \vec{a} \tag{1}$$

Descomponiendo en los ejes horizontal, $x$, y vertical, $y$, tenemos

$$\begin{cases} T\cos\theta - mg = 0 \\ T\,\text{sen}\,\theta = ma \end{cases} \tag{2}$$

De donde podemos despejar $a$ en función de $\theta$,

$$a = g\,\text{tg}\,\theta \tag{3}$$

d) El espacio recorrido en cada tramo vendrá dado por la ecuación del desplazamiento con movimiento
uniformemente acelerado,

$$x_i = v_{0,i}\,\Delta t_i + \tfrac{1}{2} a_i\,\Delta t_i^2 \tag{4}$$

Para cada tramo necesitamos saber la velocidad inicial, que vendrá dada por la aceleración y velocidad
inicial del tramo anterior

$$v_{0,i+1} = v_{0,i} + a_i\,\Delta t_i \tag{5}$$

con
$v_{0,1} = 0$, puesto que el tren parte del reposo.
A partir de las ecuaciones (3), (4) y (5) obtenemos

| $i$ | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| $\Delta t_i$ (s) | 10 | 10 | 10 | 10 | 10 |
| $\theta$ ($^\circ$) | 3 | 5 | 7 | 6 | 4 |
| $a_i$ ($\text{m/s}^2$) | 0,51 | 0,86 | 1,20 | 1,03 | 0,69 |
| $v_{0,i}$ (m/s) | 0 | 5,1 | 13,7 | 25,7 | 36,0 |
| $x_i$ (m) | 25,5 | 94,0 | 197,0 | 308,5 | 394,5 |

De modo que el espacio total recorrido en los 50 primeros segundos será

$$x = \sum_{i=1}^{5} x_i = 1019{,}5\ \text{m} \tag{6}$$

e) En un péndulo sometido sólo a la aceleración de la gravedad, el periodo de oscilación viene dado por

$$P_0 = 2\pi\sqrt{\frac{L}{g}} \tag{7}$$

Un observador montado en el tren es un observador no inercial (se mueve con velocidad no constante).
Al arrancar el tren con una cierta aceleración
$\vec{a}$, el observador montado en el tren ve que el péndulo se
inclina sin que sobre él actúe aparentemente ninguna fuerza, por lo que decide
inventarse una fuerza hacia atrás,
$\vec{F}_i = -m\vec{a}$, que denomina “fuerza de
inercia” (Fig. 3).
Esta es la misteriosa fuerza que parece empujarnos hacia atrás cuando
viajamos en un tren que acelera. Pero esta fuerza es ficticia, no existe. Visto
por un observador inercial exterior, fijo al suelo de la calle, lo que ocurre es
que el tren acelera mientras que el pasajero tiende a mantenerse con velocidad
constante. Por ello el pasajero necesita agarrarse a la barra del tren para no
quedarse rezagado respecto del tren, y por tanto, caerse al suelo.
Para el observador que viaja en el tren el péndulo está en equilibrio, por lo
que el diagrama de fuerzas sobre el péndulo sería el mostrado en la figura 3,
de modo que

$$\vec{T} = m(\vec{g} - \vec{a}) \tag{8}$$

El observador no inercial interpreta que el péndulo se orienta en la dirección de una gravedad
“aparente”
$\vec{g}\,'$, mostrada en la figura 3, dada por

$$\vec{g}\,' = \vec{g} - \vec{a} \tag{9}$$

Por analogía con la expresión (7), sometido a esta “gravedad aparente”, al separarlo ligeramente de la
posición de equilibrio el péndulo oscila con un periodo

$$P = 2\pi\sqrt{\frac{L}{g'}} \tag{10}$$

A partir de (9) obtenemos el módulo de la gravedad aparente,
$g'$,

$$g' = \sqrt{g^2 + a^2} \tag{11}$$

Y sustituyendo $a$ por la expresión obtenida en (3),

$$g' = \sqrt{g^2 + (g\,\text{tg}\,\theta)^2} = g\sqrt{1 + (\text{tg}\,\theta)^2} = \frac{g}{\cos\theta} \tag{12}$$

De modo que el periodo del péndulo que se mueve con aceleración $a$ viene dado por

$$P = 2\pi\sqrt{\frac{L\cos\theta}{g}} \tag{13}$$

f) Si el tren se mueve con velocidad constante, un observador montado en el tren será un observador
inercial y por tanto aplicará las leyes de Newton como si estuviera en reposo. Por tanto, el periodo del
péndulo será el dado por la expresión (7).

$$P_0 = 2\pi\sqrt{\frac{L}{g}}$$

Se puede comprobar que esta expresión coincide con la (12) cuando
$a = 0$ (y por tanto
$\theta = 0$), como
era de esperar.

<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p2_f1.png]]
*Pendolo nel treno fermo e accelerante*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p3_f2.png]]
*Diagramma corpo libero pendolo (Fig 2)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p4_f3.png]]
*FBD pendolo con forza d'inerzia (Fig 3)*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Oscillations & Waves]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Problema 2

P2. Einstein y su violín.
Albert Einstein era un apasionado de la música. A los 6 años comenzó a
tocar el violín y más adelante el piano. Cuando viajaba solía llevar su violín,
al que llamaba "Lina", a la espera de alguna ocasión para interpretar a sus
músicos preferidos, solo o en compañía. Con tal de enfrascarse en la música
tocaba con científicos amigos, con vecinos de su entorno o con cualquiera que
le ofreciera esa oportunidad. Tocar el violín le ayudaba a pensar y a la vez era
una válvula de escape cuando se encallaba trabajando en sus teorías. Incluso
es posible que la “cuantificación” de frecuencias característica de las ondas
estacionarias que se producen en los instrumentos musicales influyera en la
intuición de Einstein de que la energía de los fotones está cuantizada.
Vamos a estudiar las ondas estacionarias que se producen en las cuerdas del violín. Colocamos junto a
un violín un altavoz con un generador de frecuencia variable capaz de producir sonidos armónicos entre 500
y 1500 Hz. Observamos que la segunda cuerda (que cuando el violín está afinado corresponde a la nota La)
sólo oscila apreciablemente para las frecuencias de 880 y 1320 Hz. La cuerda tiene una longitud
$L = 32{,}6\ \text{cm}$.

A partir de estos datos,

a) Determina y calcula la velocidad, $v$, de propagación de las ondas transversales en la cuerda de violín.

b) ¿Se produciría una oscilación apreciable de la cuerda para alguna frecuencia inferior a 500 Hz? Explica
por qué.

La velocidad de propagación de ondas transversales en una cuerda tensa depende de la densidad lineal
de masa $\mu$ de la cuerda (masa por unidad de longitud) y de su tensión $T$. La forma de esta dependencia es una
de las cuatro siguientes:

i) $\quad v = \sqrt{\dfrac{\mu}{T}}$

ii) $\quad v = \sqrt{\dfrac{1}{\mu T}}$

iii) $\quad v = \sqrt{\dfrac{T}{\mu}}$

iv) $\quad v = \sqrt{\mu T}$

c) Basándote en la homogeneidad de dimensiones de las fórmulas físicas, indica razonadamente cuál de
estas expresiones es la única correcta.

La segunda cuerda del violín tiene un diámetro $D = 0{,}76\ \text{mm}$ y una densidad de masa por unidad de
volumen promedio $\rho = 5{,}93\ \text{g/cm}^3$.

d) Calcula la tensión a la que está sometida la cuerda del violín.

Se observa que los vientres (antinodos) de la onda estacionaria que se produce a 880 Hz tienen una
amplitud de oscilación $A = 12{,}7\ \text{mm}$. Tomamos $t = 0$ en el instante en que la cuerda pasa por su posición de
equilibrio,

e) Escribe la ecuación de la onda estacionaria, en unidades SI.

f) Escribe la ecuación de la velocidad máxima $v_t$ de vibración de cualquier punto de la cuerda. Determina
su valor para un punto situado a una distancia $x = \lambda/2$ de un extremo de la cuerda, siendo $\lambda$ la longitud
de onda.

P2. Solución

a) La cuerda oscilará apreciablemente cuando el sonido que produce el altavoz corresponda a una de las
frecuencias que pueden generar ondas estacionarias en la cuerda. Esto ocurre para dos frecuencias
consecutivas, $f_n = 880$ Hz y $f_{n+1} = 1320$ Hz. Aunque desconocemos el valor de $n$, se debe cumplir,

$$\left.\begin{aligned} f_n &= n\,\frac{v}{2L} \\ f_{n+1} &= (n+1)\,\frac{v}{2L} \end{aligned}\right\} \tag{1}$$

Despejamos $n$ de la primera ecuación,

$$n = \frac{2L}{v}\,f_n \tag{2}$$

y sustituimos en la segunda

$$f_{n+1} = f_n + \frac{v}{2L} \;\Rightarrow\; v = 2L(f_{n+1} - f_n) = 286{,}9\ \text{m/s} \tag{3}$$

b) En la ecuación (2) sustituimos la velocidad obtenida,

$$n = \frac{f_n}{f_{n+1} - f_n} = 2 \tag{4}$$

lo que significa que se excita el modo $n = 2$ para una frecuencia $f_2 = 880$ Hz y el modo $n + 1 = 3$ para
una frecuencia $f_3 = 1320$ Hz. Por tanto, el modo fundamental ($n = 1$) se excitará para una frecuencia

$$f_1 = \frac{v}{2L} = 440\ \text{Hz} \tag{5}$$

que es la correspondiente a la nota La.

c) Utilizando el análisis dimensional podemos determinar cuál de las cuatro ecuaciones es la correcta. En el
lado de la izquierda de las cuatro aparece la velocidad. Sus dimensiones físicas son

$$[v] = \frac{[L]}{[T]} \tag{6}$$

Las dimensiones físicas de la densidad de masa por unidad de longitud $\mu$ son

$$[\mu] = \frac{[M]}{[L]} \tag{7}$$

y las de la tensión (considerando que es una fuerza, y por tanto tiene dimensiones de masa por
aceleración),

$$[T] = [M]\frac{[L]}{[T]^2} \tag{8}$$

Teniendo en cuenta las ecuaciones (7) y (8), las dimensiones del término de la izquierda de cada una de
las expresiones de $v$ son

i) $\quad \sqrt{\dfrac{[\mu]}{[T]}}$

ii) $\quad \sqrt{\dfrac{1}{[\mu][T]}}$

iii) $\quad \sqrt{\dfrac{[T]}{[\mu]}} = \dfrac{[L]}{[T]}$

iv) $\quad \sqrt{[\mu][T]} \tag{9}$

Como las dimensiones deben coincidir en los dos términos de la ecuación, la ecuación correcta es

$$\text{iii)} \quad v = \sqrt{\frac{T}{\mu}} \tag{10}$$

d) A partir de la expresión (10) podemos despejar la tensión,

$$T = \mu \cdot v^2 \tag{11}$$

La densidad de masa por unidad de volumen $\rho$ y la densidad de masa por unidad de longitud $\mu$ están
relacionadas con la sección $S$ de la cuerda, de modo que

$$\mu = \rho \cdot S \;\Rightarrow\; \mu = \rho \cdot \pi\left(\frac{D}{2}\right)^2 \tag{12}$$

Sustituyendo en la ecuación (11) se obtiene

$$T = \pi\rho\left(\frac{D}{2}\right)^2 v^2 \;\Rightarrow\; T = 221{,}4\ \text{N} \tag{13}$$

e) La cuerda de violín está sujeta por sus extremos, por lo que dichos extremos están en reposo, y por tanto
son nodos de la onda estacionaria. Tomando $x = 0$ en el extremo izquierdo, la ecuación de la onda
estacionaria es

$$y(x,t) = A\,\text{sen}\,Kx\;\text{sen}(\omega t + \phi_0) \tag{14}$$

El valor de
$\phi_0$ se obtiene de la situación inicial. En $t=0$ la cuerda está en su posición de equilibrio,
$y(x,0) = 0$, de modo que

$$0 = A\,\text{sen}\,Kx\;\text{sen}\,\phi_0 \tag{15}$$

Como
$A \neq 0$ y, en general,
$\text{sen}\,Kx \neq 0$ (sólo es cero en los nodos), se deduce que

$$\text{sen}\,\phi_0 = 0 \;\Rightarrow\; \phi_0 = \begin{cases} 0 \\ \pi\ \text{rad} \end{cases} \tag{16}$$

Dado que el ejercicio no nos dá más información, podemos elegir cualquiera de las dos, por lo que
tomamos la más simple,
$\phi_0 = 0$.
Los valores de $K$ y $\omega$ vienen dados por

$$K = \frac{2\pi}{\lambda} = \frac{2\pi}{v}\,f \approx 2\pi\cdot 3\ \text{rad/m}, \qquad \omega = 2\pi f = 1760\pi\ \text{rad/s} \tag{17}$$

de modo que

$$y(x,t) = 12{,}7\cdot 10^{-3}\,\text{sen}\left(2\pi\cdot 3\,x\right)\text{sen}(1760\pi t)\ \text{m} \tag{18}$$

f) La velocidad de vibración trasversal de los puntos de la cuerda viene determinada por

$$v_t(x,t) = \frac{\mathrm{d}\,y(x,t)}{\mathrm{d}t} = \frac{\mathrm{d}\left[A\,\text{sen}\,Kx\;\text{sen}\,\omega t\right]}{\mathrm{d}t} = A\omega\,\text{sen}\,Kx\;\cos\omega t \tag{19}$$

La velocidad transversal máxima se producirá cuando
$\cos\omega t = 1$, es decir,

$$v_{t\,\text{max}}(x) = A\omega\,\text{sen}\,Kx \tag{20}$$

de modo que

$$v_{t\,\text{max}}\!\left(x = \frac{\lambda}{2}\right) = A\omega\,\text{sen}\left(K\frac{\lambda}{2}\right) = A\omega\,\text{sen}\,\pi = 0 \tag{21}$$

como era de esperar, dado que en la posición $x = \lambda/2$ aparece un nodo de oscilación para esa
frecuencia.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.6

## Problema 3

P3. Einstein y la velocidad de la luz.
En su visita a Zaragoza, Einstein impartió dos conferencias en el Paraninfo de la Universidad. La primera
de ellas la dedicó a exponer su teoría de la Relatividad Especial. Uno de los postulados más importantes de
esta teoría es que la velocidad de la luz en el vacío, $c$, es constante e independiente del movimiento relativo
entre emisor, receptor y observadores. Con un sencillo experimento mental podemos deducir alguna de las
consecuencias de dicho postulado.
Considera un tren en movimiento a velocidad contante $v$. Una
joven estudiante de física que va montada en el tren (Fig. 1) observa
que se emite un pulso de luz desde un foco situado en el suelo hacia
un espejo colocado en el techo del tren, a una altura $L$ desde el
suelo, de modo que la luz se refleja y vuelve al foco.

a) Calcula el tiempo
$\Delta t$ que, desde el punto de vista de la
estudiante, tarda el pulso desde que sale del foco hasta que
vuelve al mismo.

Un compañero suyo, que está viendo pasar el tren, observa que
la luz describe una trayectoria distinta (Fig. 2), aunque según el
postulado de Einstein, la velocidad de la luz, $c$, es la misma para él
que la que observa su compañera en el tren. Por lo tanto, para él, el
pulso tardará un tiempo
$\Delta t_0 > \Delta t$ en volver al foco.

b) Calcula en función del tiempo
$\Delta t_0$ la distancia $D$ que recorre
la luz desde el foco hasta el espejo desde el punto de vista del
estudiante en reposo.

c) Calcula, en función de $v$, $c$ y $L$, el tiempo
$\Delta t_0$ que, desde el punto de vista del estudiante en reposo, tarda
el pulso desde que sale del foco hasta que vuelve al mismo.

d) Expresa
$\Delta t$ en función de
$\Delta t_0$.

La expresión
que has obtenido en d) corresponde a la dilatación temporal
relativista: un reloj que se mueve se retrasa respecto de otro que se encuentra en reposo.
Este efecto permite que lleguen a la superficie de la Tierra partículas como los piones cargados
$\pi^\pm$, que
se producen en las capas altas de la atmósfera por el bombardeo constante de partículas cargadas
(principalmente protones y núcleos de átomos más pesados) que llegan desde el espacio exterior, conocidas
como rayos cósmicos. Los piones en reposo tienen un tiempo de vida media de 25 ns, antes de desintegrarse
en otras partículas, por lo que difícilmente tendrían tiempo de llegar a la superficie terrestre. Sin embargo,
gracias a la dilatación temporal que se produce cuando se observan moviéndose a gran velocidad, pudieron ser
detectados por primera vez en 1947 en el Laboratorio de Física de Rayos Cósmicos de Chacaltaya (Bolivia),
situado a 5200 m sobre el nivel del mar. Supongamos que los piones viajan por la atmósfera a una velocidad
constante
$v$ cercana a la de la luz,
$v = 0{,}99999c$.

e) Determina el tiempo de vida media de los piones a dicha velocidad que medirá un observador en el
laboratorio.

f) Calcula la altura media sobre el nivel del mar a la que se generaron estos piones en la atmósfera.

$c = 3\cdot 10^5\ \text{km/s}$

P3. Solución

a) Para la observadora montada en el tren, el pulso de luz recorre una distancia $2L$ y se mueve con velocidad
$c$, por lo que

$$\Delta t = \frac{2L}{c} \tag{1}$$

b) Para el observador que está viendo pasar el tren con velocidad $v$, la distancia $s$ que recorre el tren desde
que el pulso de luz sale del foco hasta que vuelve al mismo viene dada por

$$s = v\,\Delta t_0 \tag{2}$$

Aplicando el teorema de Pitágoras (Fig. 3), la distancia $D$ que recorre la luz entre
el foco y el espejo es

$$D = \sqrt{L^2 + \left(\frac{s}{2}\right)^2} \;\Rightarrow\; D = \sqrt{L^2 + \left(\frac{v\,\Delta t_0}{2}\right)^2} \tag{3}$$

c) Para el observador que está en reposo, el pulso de luz recorre una distancia $2D$ y, según el postulado de
Einstein, se mueve también con velocidad $c$, por lo que

$$\Delta t_0 = \frac{2D}{c} \tag{4}$$

Sustituyendo (4) en (3) encontramos la siguiente relación,

$$\Delta t_0 = \frac{2}{c}\sqrt{L^2 + \left(\frac{v\,\Delta t_0}{2}\right)^2} \tag{5}$$

Pasando $c/2$ multiplicando a la izquierda y elevando ambos términos al cuadrado podemos quitar la raíz
cuadrada,

$$\frac{c^2}{4}\,\Delta t_0^2 = L^2 + \left(\frac{v\,\Delta t_0}{2}\right)^2 \tag{6}$$

de donde, con un poco de álgebra, podemos despejar
$\Delta t_0$,

$$\Delta t_0 = \frac{2L}{\sqrt{c^2 - v^2}} \tag{7}$$

Para poder comparar con el valor de
$\Delta t$ obtenido para la observadora en movimiento, la expresión (7) se
puede escribir en la forma

$$\Delta t_0 = \frac{2L}{c}\frac{1}{\sqrt{1 - \left(\dfrac{v}{c}\right)^2}} \tag{8}$$

d) A partir de la expresión (8) podemos escribir,

$$\Delta t_0\sqrt{1 - \left(\frac{v}{c}\right)^2} = \frac{2L}{c} \tag{9}$$

Comparando la expresión (9) con la (1) se obtiene

$$\Delta t = \Delta t_0\sqrt{1 - \left(\frac{v}{c}\right)^2} \tag{10}$$

e) En el sistema de referencia del pion (en movimiento con velocidad
$v = 0{,}99999c$ respecto del laboratorio)
su tiempo de vida media es
$\Delta t = 25$ ns. Para el observador en el laboratorio, que está en reposo, el tiempo
de vida media del pion,
$\Delta t_0$, se puede obtener despejando de la ecuación (10),

$$\Delta t_0 = \frac{\Delta t}{\sqrt{1 - (v/c)^2}} \;\Rightarrow\; \Delta t_0 = 5590\ \text{ns} \tag{11}$$

f) La distancia media que recorren los piones más alejados desde que se producen hasta el punto de
detección, $s$, vendrá dada por

$$s = v \cdot \Delta t_0 \tag{12}$$

De modo que

$$s = 0{,}99999c \cdot \Delta t_0 \;\Rightarrow\; s = 1670\ \text{m} \tag{13}$$

Como el laboratorio de Chacaltaya se encuentra a una altitud
$h_0 = 5200\ \text{m}$, la altura media sobre el nivel
del mar a la que se producen estos piones es

$$h = h_0 + s = 6870\ \text{m}$$

<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p10_f4.png]]
*Luce verticale nel treno (Figura 1)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p10_f5.png]]
*Luce diagonale D osservatore fermo (Figura 2)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA TEORICA/2023 34 OAF 2023 PRUEBA TEORICA_p11_f6.png]]
*Triangolo pitagorico percorso luce (Figura 3)*
<!--fig:end-->

**Topic:** [[Special Relativity]], [[Nuclear & Particle Physics]]
**Metodi:** [[Lorentz Transformation (metodo)|Lorentz Transformation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.10
