---
tipo: prova
prova_id: prova_P-EXPERIMENTAL-OEF-2012
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2012'
level: ''
pdf: gare di altri paesi/Spagna/RSF/P-EXPERIMENTAL-OEF-2012.pdf
cluster: Onde e Oscillazioni
n_problemi: '9'
tags:
  - kg/prova
  - anno/2012
  - paese/Spagna
  - comp/Spagna
  - cluster/Onde e Oscillazioni
---

# Spagna 2012 — P-EXPERIMENTAL-OEF-2012.pdf

**Fonte:** `gare di altri paesi/Spagna/RSF/P-EXPERIMENTAL-OEF-2012.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Onde e Oscillazioni]]

## Problema 1

**Prueba experimental. Constante de Planck y comportamiento de un LED**

**Objetivo.** Se va a construir un circuito eléctrico para alimentar LEDs de diferentes colores y obtener un valor aproximado de la constante de Planck. Además se determinará, para uno de estos LEDs, el valor de una constante característica llamada factor de idealidad.

**Materiales.**
- Cinco LEDs, de colores diferentes.
- Pila de 9 V.
- Potenciómetro y resistencia de protección.
- Dos polímetros con sondas y cuatro pinzas (cocodrilos).
- Regleta de conexión.
- Destornillador.

**Modelo teórico.** Un LED (Light-Emitting Diode) es un dispositivo optoelectrónico que emite luz cuando circula por él una corriente eléctrica $I$. Para que circule esta corriente es necesario que la diferencia de potencial entre sus terminales, $V$, sea superior a un cierto valor umbral, $V_0$.

En esencia, un LED es un semiconductor en el que los electrones se encuentran en niveles de energía muy próximos que forman bandas. La de menor energía es la banda de valencia, que está normalmente llena de electrones. Existe otra banda, con energía superior y que contiene pocos electrones, llamada banda de conducción. Ambas bandas están separadas por una banda prohibida, de energía $E$.

Para que un electrón pueda excitarse desde la banda de valencia hasta la de conducción debe absorber, como mínimo, una energía $E = qV_0$, donde $q$ es la carga elemental (valor absoluto de la carga del electrón). Esta energía es aportada por la batería que alimenta el circuito con el LED.

Cuando el electrón se desexcita y regresa a la banda de valencia se emite un fotón de energía $E = h\nu$, donde $h$ es la constante de Planck y $\nu$ la frecuencia de la radiación emitida. Por tanto, con este modelo simplificado, sería de esperar que se cumpliese la igualdad $qV_0 = h\nu$. En la práctica, se encuentra esta relación lineal entre $V_0$ y $\nu$, pero con un término independiente, $C$, aproximadamente constante, que no puede justificarse con este modelo, es decir

$$V_0 \approx \frac{h}{q}\nu + C \tag{1}$$

Por otra parte, para $V$ superior a $V_0$, la corriente $I$ aumenta de modo aproximadamente exponencial, en la forma

$$I \approx I_s \, e^{\frac{qV}{\eta kT}} \tag{2}$$

donde $I_s$ es la llamada corriente de saturación, $k$ la constante de Boltzmann, $T$ la temperatura absoluta y $\eta$ se conoce como factor de idealidad del LED.

**Datos:**
- Temperatura ambiente: $T = (295 \pm 3)\,\text{K}$
- Carga elemental: $q = 1{,}60 \times 10^{-19}\,\text{C}$
- Velocidad de la luz en el vacío: $c = 3{,}00 \times 10^{8}\,\text{m/s}$
- Constante de Boltzmann: $k = 1{,}38 \times 10^{-23}\,\text{J/K}$

**1ª parte. Determinación de $h$.**

**1.a)** Conecte en la regleta el LED infrarrojo (cápsula oscura). Conecte la pila y aumente la tensión de alimentación del LED, girando el potenciómetro en sentido horario, hasta que circule una corriente de $0{,}010\,\text{mA}$. Supondremos que, en estas circunstancias, la tensión indicada por el voltímetro es aproximadamente la tensión umbral para este diodo, $V_0$. Anote su valor.

Restableciendo cada vez el potenciómetro a su posición inicial, repita la medida de $V_0$ para los otros cuatro LEDs: rojo, amarillo, azul y violeta. Traslade sus medidas a la Tabla 1, donde se indica la longitud de onda de emisión de cada LED. Para calcular la frecuencia $\nu$, recuerde que $\nu = c/\lambda$, donde $c$ es la velocidad de la luz en el vacío y $\lambda$ la longitud de onda.

| LED | $\lambda$ (nm) | $\nu$ (Hz) | $V_0$ (V) |
|-----------|---------------|------------|----------|
| Infrarrojo | 938 | | |
| Rojo | 632 | | |
| Amarillo | 593 | | |
| Azul | 464 | | |
| Violeta | 405 | | |

<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2012/P-EXPERIMENTAL-OEF-2012_p1_f1.png]]
*LED symbol and circuit diagram*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2012/P-EXPERIMENTAL-OEF-2012_p1_f2.png]]
*Band diagram semiconductor LED*
<!--fig:end-->

**Topic:** [[Modern-Quantum Physics]], [[Circuits]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.1

## Problema 2

**1.b)** Represente gráficamente los valores de $V_0$ (en ordenadas) frente a las frecuencias $\nu$ (en abscisas).

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.4

## Problema 3

**1.c)** Obtenga el valor de la pendiente de la recta que mejor se ajusta a los puntos de la gráfica.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.4

## Problema 4

**1.d)** Deduzca el valor de $h$.

Teniendo en cuenta que según la ecuación (1) la pendiente de la recta $V_0$ vs $\nu$ es $p = h/q$, obtenga el valor de la constante de Planck $h = pq$.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.4

## Problema 5

**1.e)** Haga una estimación de la incertidumbre de la pendiente.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.4

## Problema 6

**1.f)** Teniendo en cuenta lo anterior, haga una estimación de la incertidumbre del valor de $h$.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.4

## Problema 7

**2ª parte. Determinación del factor de idealidad, $\eta$.**

Gire el potenciómetro en sentido antihorario hasta el final de su recorrido y conecte el LED rojo en la regleta. Seleccione en el voltímetro la escala de 2 V. Conecte la pila y aumente la tensión de alimentación hasta que el amperímetro indique, de nuevo, una intensidad de $0{,}010\,\text{mA}$.

**2.a)** Partiendo de la situación anterior, aumente sucesivamente la tensión de alimentación a intervalos regulares de aproximadamente $0{,}02\,\text{V}$, hasta un valor máximo de $1{,}70\,\text{V}$. Anote en cada caso los valores de $V$ y de $I$ en la Tabla 2. En esta tabla dispone de una columna vacía, para alguna magnitud derivada de las anteriores que necesite en el siguiente apartado.

| $V$ (V) | $I$ (A) | | |
|---------|---------|---|---|
| | | | |
| | | | |

<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2012/P-EXPERIMENTAL-OEF-2012_p2_f3.png]]
*I-V characteristic curve of LED*
<!--fig:end-->

**Topic:** [[Circuits]], [[Modern-Quantum Physics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.5

## Problema 8

**2.b)** A partir de la gráfica y del ajuste que estime oportunos, determine el valor del coeficiente de idealidad, $\eta$, del LED rojo.

Recuerde que la corriente sigue la ley:

$$I \approx I_s \, e^{\frac{qV}{\eta kT}}$$

donde $I_s$ es la corriente de saturación, $k$ la constante de Boltzmann, $T$ la temperatura absoluta y $\eta$ el factor de idealidad.

**Topic:** [[Circuits]], [[Modern-Quantum Physics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Photon Energy Relation (metodo)|Photon Energy Relation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.5

## Problema 9

**2.c)** Haga una estimación de la incertidumbre de este coeficiente $\eta$.

**Topic:** [[Circuits]], [[Modern-Quantum Physics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.5
