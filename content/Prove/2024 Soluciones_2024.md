---
tipo: prova
prova_id: prova_2024 Soluciones_2024
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2024'
level: ''
pdf: gare di altri paesi/Spagna/Samanca-locali/2024 Soluciones_2024.pdf
cluster: Termodinamica
n_problemi: '10'
tags:
  - kg/prova
  - anno/2024
  - paese/Spagna
  - comp/Spagna
  - cluster/Termodinamica
---

# Spagna 2024 — 2024 Soluciones_2024.pdf

**Fonte:** `gare di altri paesi/Spagna/Samanca-locali/2024 Soluciones_2024.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Termodinamica]]

## Problema 1

Ejercicio 1 (1 punto) Seg ́un la definici ́on, que el mar tenga una salinidad $s$ significa que por cada
100 g de agua pura, hay $s$ gramos de sal. Cojamos un volumen $V$ de agua de mar y supongamos
que contiene una masa $m_a$ de agua pura y una masa $m_s$ de sal. Dado que nos dicen que podemos
despreciar el cambio de volumen, es claro que $V = m_a/\rho_0$. Por tanto,
$$\rho_s = \frac{m_a + m_s}{V} = (1 + s)\rho_0.$$
Esta expresi ́on cuadra con el hecho que la densidad aumenta con la salinidad. La densidad del  ́Artico
ser ́ıa por tanto $\rho_{\text{Ártico}} = (1 + 0{,}03)\rho_0 = 1030\ \text{kg/m}^3$.
Correcci ́on: Llegar a la f ́ormula de $\rho_s$, 0.8 puntos. Aplicaci ́on num ́erica, 0.2 puntos.

**Topic:** [[Fluid Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.1

## Problema 2

Ejercicio 2 (1.5 puntos) Por el principio de Arqu ́ımedes, el empuje en la direcci ́on vertical que
experimenta el hielo es $E = \rho_s V_\text{des} g$, donde $V_\text{des} = \pi r^2(h-a)$ es el volumen de agua l ́ıquida desalojado.
El peso del iceberg es $P = \rho_h V_h g$, siendo $V_h = \pi r^2 h$ el volumen total del iceberg. Igualando ambas
expresiones y despejando $a$,
$$h - a = \frac{\epsilon}{1 + s}h \iff a = \frac{1 + s - \epsilon}{1 + s}h. \tag{1}$$
Para un iceberg en el oc ́eano  ́Artico,
$$a = \frac{1 + 0{,}03 - 0{,}9}{1 + 0{,}03}h \simeq 0{,}13h.$$
Esto significa que el 87 % del iceberg se encuentra bajo la superficie del oc ́eano.
Correcci ́on: Llegar a la f ́ormula de $a$, 1.2 puntos. Aplicaci ́on num ́erica, 0.3 puntos.

**Topic:** [[Fluid Mechanics]]
**Metodi:** [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.1

## Problema 3

Ejercicio 3 (2.5 puntos) Si se sumerge el iceberg una distancia $\delta$ respecto de su posici ́on de equilibrio, el nuevo empuje viene dado por $E = \pi r^2 \rho_s g(h - a + \delta)$, mientras que el peso sigue siendo el
mismo. Por tanto, se produce una fuerza neta ascendente con m ́odulo $F = \pi r^2 \rho_s g \delta$ que har ́a que el
iceberg ascienda. Si despreciamos cualquier rozamiento con el agua, por conservaci ́on de la energ ́ıa el
iceberg ascender ́a hasta quedar a una distancia $\delta$ por encima de su posici ́on de equilibrio. En este caso
el empuje es $E = \pi r^2 \rho_s g(h - a - \delta)$, que es menor que el peso, luego la fuerza neta ser ́a descendente
con m ́odulo $F = \pi r^2 \rho_s g \delta$ y el iceberg descender ́a. En definitiva, se producir ́a un movimiento de tipo
oscilatorio.
Por la segunda ley de Newton,
$$F = m_h \ddot{x} \iff \pi r^2 \rho_s g x = \pi r^2 h \rho_h \ddot{x} \iff \ddot{x} + \frac{(1 + s)g}{\epsilon h}x = 0. \tag{2}$$
Dado que la fuerza es proporcional a la distancia y tiene sentido opuesto al desplazamiento (como en
la ley de Hooke), el movimiento ser ́a arm ́onico simple y la altura emergida respecto del equilibrio ser ́a
$$x(t) = -\delta \cos(\omega t) \tag{3}$$
con una frecuencia que vendr ́a dada por $\omega^2 = \dfrac{(1 + s)g}{\epsilon h}$. Observamos que cuanto m ́as largo es el iceberg, menor es su frecuencia de oscilaci ́on. Tambi ́en vemos que esta frecuencia no depende de $r$. El
periodo de este movimiento viene dado por $T = \dfrac{2\pi}{\omega}$.
Para determinar la velocidad m ́axima lo haremos de dos maneras. En primer lugar, derivando la
trayectoria,
$$\dot{x}(t) = \delta \omega \sin(\omega t),$$
que toma su valor m ́aximo (en m ́odulo) cuando $x = 0$ y vale
$$v_\text{max} = \delta \omega = \sqrt{\frac{(1 + s)g\delta^2}{\epsilon h}}.$$
Otra forma de hacerlo es por conservaci ́on de la energ ́ıa. Para un oscilador la energ ́ıa vale
$$E = \frac{1}{2}kA^2 = \frac{1}{2}mv^2 + \frac{1}{2}kx^2. \tag{4}$$
Observando las ecuaciones (2) y (3) podemos identificar
$$A = \delta, \qquad \frac{k}{m} = \frac{(1 + s)g}{\epsilon h},$$
de donde usando que $v$ es m ́axima en $x = 0$ (ver (4)) se deduce que
$$v_\text{max}^2 = \frac{(1 + s)g\delta^2}{\epsilon h},$$
que es lo que obtuvimos anteriormente.
Correcci ́on: Diagrama de fuerzas, 0.5 puntos. Segunda ley de Newton, 0.5 puntos. An ́alisis cualitativo
del movimiento, 0.5 puntos. Encontrar $x(t)$, 0.5 puntos. Hallar la velocidad m ́axima, 0.5 puntos.

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]], [[Fluid Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Conservation of Energy (metodo)|Conservation of Energy]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.1

## Problema 4

Ejercicio 4 (1.5 puntos) Como las dimensiones del oc ́eano son mucho mayores a las del iceberg es
de esperar que la temperatura de equilibrio coincida con la temperatura inicial del oc ́eano, es decir,
$T_0$. Por tanto, el calor transferido al iceberg ser ́a la suma de tres calores: (i) el calor para aumentar la
temperatura del hielo desde $T_h$ hasta los $0\ ^\circ\text{C}$, (ii) el calor necesario para fundir el hielo, y (iii) el calor
para aumentar la temperatura del iceberg ya fundido hasta $T_0$. Si llamamos $m$ a la masa del iceberg,
este calor vendr ́a dado por
$$Q = m\left(c_h(0\ ^\circ\text{C} - T_h) + c_f + c_l(T_0 - 0\ ^\circ\text{C})\right).$$
Tambi ́en lo podemos escribir en t ́erminos de los par ́ametros del problema usando que $m = \rho V$,
$$Q = \pi r^2 h \rho_h \left(c_h(0\ ^\circ\text{C} - T_h) + c_f + c_l(T_0 - 0\ ^\circ\text{C})\right).$$
Sustituyendo los valores del enunciado, se obtiene $Q \simeq 1{,}27 \times 10^{14}$ J. El consumo mensual promedio
de un hogar es de unos 270 kWh $= 2{,}7 \times 10^5\ \text{W} \cdot 3{,}6 \times 10^3\ \text{s} \simeq 9{,}72 \times 10^8$ J, por lo que si hacemos el
cociente entre ambos
$$\frac{1{,}27 \times 10^{14}}{9{,}72 \times 10^8} \simeq 1{,}31 \times 10^5.$$
Esto equivale al consumo energ ́etico mensual de una ciudad como Salamanca. Este n ́umero es tan
elevado debido tanto al enorme tama ̃no del iceberg como a la elevada capacidad calor ́ıfica del agua.
Correcci ́on: Argumentar que $T_\text{eq} = T_0$, 0.5 puntos. Hallar el calor transferido, 0.5 puntos. Aplicaci ́on
num ́erica, 0.5 puntos.

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.2

## Problema 5

Ejercicio 5 (1 punto) Por an ́alisis dimensional es claro que $\kappa$ tiene dimensiones de
$$\text{Energ\'ia} \cdot \text{Superficie}^{-1} \cdot \text{Temperatura}^{-1} \cdot \text{Tiempo}^{-1},$$
o equivalentemente,
$$\text{Masa} \cdot \text{Temperatura}^{-1} \cdot \text{Tiempo}^{-3}.$$
Por tanto, sus unidades en el SI ser ́ıan $\dfrac{\text{kg}}{\text{K}\cdot\text{s}^3}$. F ́ısicamente, $\kappa$ mide el calor transferido por unidad de
tiempo, temperatura y superficie.
Correcci ́on: An ́alisis dimensional, 0.7 puntos. Explicaci ́on f ́ısica, 0.3 puntos.

**Topic:** [[Thermodynamics]]
**Metodi:** [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Unit Conversion (competenza)|Unit Conversion]]
**Fonte:** Testo (PDF) — p.3

## Problema 6

Ejercicio 6 (2.5 puntos) Una posible manera de estimar este tiempo ser ́ıa calcular la superficie
“media” de contacto durante el proceso, que ser ́a la mitad del  ́area inicial de contacto, esto es
$$\langle S\rangle = \frac{1}{2}\left(\pi r^2 + 2\pi r(h - a)\right) = \frac{\pi r}{2}\left(r + \frac{2\epsilon}{1 + s}h\right) \approx 6{,}4 \times 10^5\ \text{m}^2.$$
A continuaci ́on calculamos el calor necesario para que el hielo se funda, que como vimos en el ejercicio
4 viene dado por $Q = \pi r^2 h \rho_h c_f$. Por tanto, el tiempo estimado que tarda en fundirse el iceberg viene
dado por
$$\tau \approx \frac{\pi r^2 h \rho_h c_f}{\kappa T_0 \langle S\rangle} = \frac{2h\epsilon c_f \rho_0}{\kappa T_0}\frac{1}{1 + \dfrac{2\epsilon}{1 + s}\dfrac{h}{r}}.$$
Usando los datos num ́ericos se obtiene que $h \approx 177$ m por lo que $\tau \approx 2{,}6 \cdot 10^6$ s, lo que equivale a unos
30 d ́ıas. Otra posible manera ser ́ıa hacer el c ́alculo con la superficie en $r/2$, que ser ́ıa
$$S_{r/2} = \pi\left(\frac{r}{2}\right)^2 + 2\pi\frac{r}{2}(h - a) = \pi r\left(\frac{r}{4} + \frac{\epsilon}{1 + s}h\right) \approx 5{,}6 \times 10^5\ \text{m}^2,$$
de manera que $\tau \approx 2{,}9 \times 10^6$ s, que corresponden a aproximadamente 34.5 d ́ıas. Observamos que el
resultado es mayor que al tomar la superficie promedio, pues $\langle S\rangle = S_{r/2} + \pi r^2/4 > S_{r/2}$.
A continuaci ́on vamos a hallar este tiempo de manera exacta. En primer lugar sabemos que el calor
transferido por unidad de tiempo viene dado por $\dot{Q} = \kappa T_0 S = \pi \kappa T_0 r(t)\left(r(t) + 2(h - a)\right)$, donde
observemos que la  ́unica magnitud que var ́ıa con el tiempo es $r(t)$, pues tanto $h$ como $a$ son constantes
durante el proceso. Por otro lado, derivando la ecuaci ́on $Q = c_f m_h$ y teniendo en cuenta que $m_h = \rho_h \pi r^2 h$, obtenemos $\dot{Q} = -2\pi\epsilon\rho_0 c_f h\, r(t)\,\dot{r}(t)$, donde el signo negativo viene de que la masa del hielo
disminuye a medida que  ́este se funde. Igualando las dos expresiones que tenemos para $\dot{Q}$ se llega a
$$\dot{r}(t) = -\frac{\kappa T_0}{2h\epsilon\rho_0 c_f}\left(r(t) + \frac{2\epsilon}{1 + s}h\right),$$
donde hemos usado (1). Integrando,
$$\int_r^0 \frac{dr}{r + \dfrac{2\epsilon}{1 + s}h} = -\frac{\kappa T_0}{2h\epsilon\rho_0 c_f}\int_0^\tau dt \implies \tau = \frac{2h\epsilon\rho_0 c_f}{\kappa T_0}\log\left(1 + \frac{1 + s}{2\epsilon}\frac{r}{h}\right).$$
Usando los datos num ́ericos se obtiene $\tau \approx 3 \times 10^6$ s, que son unos 34.5 d ́ıas. Observamos que este
resultado coincide con la aproximaci ́on de tomar como superficie $S_{r/2}$.
Correcci ́on: Haci ́endolo con cualquiera de las aproximaciones, 1.5 puntos (1 punto la f ́ormula +
0.5 la aplicaci ́on num ́erica). Haci ́endolo de manera exacta, 2.5 puntos (2 puntos la f ́ormula + 0.5 la
aplicaci ́on num ́erica).

**Topic:** [[Thermodynamics]], [[Fluid Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.3

## Problema 7

Ejercicio 1
$$t = \frac{e}{c} = \frac{0{,}47 \times 10^{-10}\ (\text{m})}{3 \times 10^8\ (\text{m/s})} = 1{,}57 \times 10^{-19}\ (\text{s}) = 0{,}157\ (\text{as}) \tag{2}$$

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Unit Conversion (competenza)|Unit Conversion]]
**Fonte:** Testo (PDF) — p.5

## Problema 8

Ejercicio 2
$$c = v = \frac{\omega}{k} = \frac{2\pi\nu}{2\pi\lambda^{-1}} = \lambda\nu = \frac{\lambda}{T} \tag{3}$$
$$\lambda = cT = 3 \times 10^8\ (\text{m/s}) \times 0{,}157 \times 10^{-18}\ (\text{s}) = 0{,}47 \times 10^{-10}\ (\text{m}) = 0{,}47\ (\text{\AA}) \tag{4}$$

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.5

## Problema 9

Ejercicio 3
$$\Delta\nu = \frac{0{,}44}{43 \times 10^{-18}\ (\text{s})} = 1{,}023 \times 10^{16}\ (\text{s}^{-1} = 10{,}23\ \text{PHz}) \tag{5}$$

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.5

## Problema 10

Ejercicio 4 Para la longitud de onda de 6.5 nm:
$$T = \frac{\lambda}{c} = \frac{6{,}5 \times 10^{-9}\ (\text{m})}{3 \times 10^8\ (\text{m/s})} = 2{,}17 \times 10^{-17}\ (\text{s}) \tag{6}$$
$$\text{n\textsuperscript{o} de oscilaciones} = \frac{\Delta t}{T} = \frac{43 \times 10^{-18}\ (\text{s})}{2{,}17 \times 10^{-17}\ (\text{s})} = 2{,}03 \tag{7}$$
Para la longitud de onda de 120 nm:
$$T = \frac{\lambda}{c} = \frac{120 \times 10^{-9}\ (\text{m})}{3 \times 10^8\ (\text{m/s})} = 4 \times 10^{-16}\ (\text{s}) \tag{8}$$
$$\text{n\textsuperscript{o} de oscilaciones} = \frac{\Delta t}{T} = \frac{43 \times 10^{-18}\ (\text{s})}{4 \times 10^{-16}\ (\text{s})} = 0{,}11 \tag{9}$$
Conclusi ́on: como un pulso de luz tiene que estar formado por al menos una oscilaci ́on del campo
el ́ectrico, solo podr ́ıa elegir el l ́aser de 6.5 nm de longitud de onda.

Resoluci ́on problema 3: Radiaci ́on y temperatura de una bombilla
a) Traslada las medidas a una tabla. (4 puntos)
La temperatura ambiente y la resistencia del filamento a esa temperatura son: $T_0 = 294$ K y $R_0 = 16{,}3\ \Omega$
b) Representa en papel milimetrado los valores de $\ln P$ (en ordenadas) frente a los correspondientes valores de $\ln T$ (en abscisas). (3 puntos)
c) A partir de dos puntos elegidos de la recta, y aplicando la expresi ́on (5), determina el
valor de la pendiente. El valor de $n$ que se busca es el valor entero m ́as pr ́oximo al de la
pendiente obtenida. (3 puntos)
Para determinar la pendiente de la recta se eligen dos puntos de la misma, $A$ y $B$, suficientemente
separados, cuyas coordenadas son:
$$A\,(\ln T_A, \ln P_A) \to A\,(7{,}44;\ -1{,}80)$$
$$B\,(\ln T_B, \ln P_B) \to B\,(6{,}88;\ -4{,}10)$$
La pendiente de la recta es:
$$\text{pendiente} = \frac{\ln P_A - \ln P_B}{\ln T_A - \ln T_B} = \frac{-1{,}80 - (-4{,}10)}{7{,}44 - 6{,}88} = 4{,}11.$$
Por lo tanto, el valor entero pedido es
$$n = 4.$$

**Topic:** [[Oscillations & Waves]], [[Thermodynamics]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.5
