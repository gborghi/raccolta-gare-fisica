---
title: Spagna 2012
tipo: prova
tags:
  - kg/prova
  - anno/2012
  - paese/Spagna
  - comp/Spagna
  - cluster/Onde e Oscillazioni
---
<div class="atom-reader" data-prova="p-experimental-oef-2012"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2012 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni,object/photon,object/battery"></span>

<div class="qlang-switch" data-default="es"></div>



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

$$V_0 \approx \frac{h}{q}\nu + C \quad (1)$$

Por otra parte, para $V$ superior a $V_0$, la corriente $I$ aumenta de modo aproximadamente exponencial, en la forma

$$I \approx I_s \, e^{\frac{qV}{\eta kT}} \quad (2)$$

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
**Objects:** [[Photon (object)|Photon]], [[Battery (object)|Battery]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)


<div class="qlang-split" data-lang="it"></div>

**Prueba experimental. Costante di Planck e comportamento di un LED**

**Objective.** Si costruirà un circuito elettrico per alimentare LED di diversi colori e ottenere un valore approssimativo della costante di Planck. Inoltre, per uno di questi LED, si determinerà il valore di una caratteristica costante chiamata fattore di idealità.

**Materiali.**
- Cinque LED di diversi colori.
- Pietra a 9 V.
- Potenziometro e resistenza di protezione.
- Due pollimetri con sonde e quattro pinze (coccodrilli).
- Regola di connessione.
- Scratch.

**Modello teorico.** Un LED (Light-Emitting Diode) è un dispositivo optoelettronica che emette luce quando un corrente elettrica $I$ circola attraverso di esso. Per circolare questo flusso è necessario che la differenza di potenziale tra i suoi terminali, $V$, sia superiore a un certo valore limite, $V_0$.

In sostanza, un LED è un semiconduttore in cui gli elettroni si trovano a livelli di energia molto vicini che formano bande. La banda di valenza è quella a più bassa energia, che è normalmente piena di elettroni. C'è un'altra banda, con energia superiore e contenente pochi elettroni, chiamata banda di conduzione. Entrambe le bande sono separate da una banda proibita, di energia $E$.

Per un elettrone da valenza a conduzione eccitare deve assorbire almeno un'energia $E = qV_0$, dove $q$ è la carica elementare (valore assoluto della carica dell'elettrone). Questa energia viene fornita dalla batteria che alimenta il circuito con il LED.

Quando l'elettrone viene decessato e ritorna nella banda di valenza viene emesso un fotone di energia $E = h\nu$, dove $h$ è la costante di Planck e $\nu$ la frequenza della radiazione emessa. Pertanto, con questo modello semplificato si potrebbe aspettarsi di raggiungere l'eguaglianza $qV_0 = h\nu$. In pratica, si trova questa relazione lineare tra $V_0$ e $\nu$, ma con un termine indipendente, $C$, approssimativamente costante, che non può essere giustificata con questo modello, cioè

$$V_0 \approx \frac{h}{q}\nu + C \quad (1)$$

Per i tipi di scarico di corrente di $V$ superiore a $V_0$, il flusso $I$ aumenta in modo esponenziale, in

$$I \approx I_s \, e^{\frac{qV}{\eta kT}} \quad (2)$$

dove $I_s$ è il cosiddetto corrente di saturazione, $k$ la costante di Boltzmann, $T$ la temperatura assoluta e $\eta$ è definita come fattore di idealità del LED.

**Dati: **
- Temperatura ambiente: $T = (295 \pm 3)\,\text{K}$
- Carga elementare: $q = 1{,}60 \times 10^{-19}\,\text{C}$
- Velocità della luce nel vuoto: $c = 3{,}00 \times 10^{8}\,\text{m/s}$
- Costante di Boltzmann: $k = 1{,}38 \times 10^{-23}\,\text{J/K}$

**1° parte. Determinazione di $h$.**

**1.a) ** Collegare il LED infrarosso (capsula oscura) al rubricatore. Collegare la pila e aumentare la tensione di alimentazione del LED, girando il potenziometro in senso orario, fino a che circola un corrente di $0{,}010\,\text{mA}$. Supponiamo che, in queste circostanze, la tensione indicata dal voltímetro sia circa la tensione di soglia per questo diodo, $V_0$. Scrivi il tuo valore.

Ristabilire ogni volta il potenziometro alla sua posizione iniziale, ripete la misura di $V_0$ per gli altri quattro LED: rosso, giallo, blu e viola. Trasferisci le tue misure nella tabella 1, che indica la lunghezza d'onda di emissione di ciascun LED. Per calcolare la frequenza $\nu$, ricordate che $\nu = c/\lambda$, dove $c$ è la velocità della luce nel vuoto e $\lambda$ la lunghezza d'onda.

| LED | $\lambda$ (nm) | $\nu$ (Hz) | $V_0$ (V) |
|-----------|---------------|------------|----------|
# Il nostro gruppo è il gruppo di ricerca # # il gruppo di ricerca # # il gruppo di ricerca # # il gruppo di ricerca # # il gruppo di ricerca # # il gruppo di ricerca # # il gruppo di ricerca # # il gruppo di ricerca # # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # il gruppo di ricerca # # il gruppo di ricerca # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# Rossa # 632 #
# Giallo # 593 # # Giallo # 593 #
# Azzurro # 464 #
# Viola # 405 #

<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2012/P-EXPERIMENTAL-OEF-2012_p1_f1.png]]
*LED symbol and circuit diagram*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2012/P-EXPERIMENTAL-OEF-2012_p1_f2.png]]
*Band diagram semiconduttore LED*
<!--fig:end-->

**Topic:** [[Modern-Quantum Physics]], [[Circuits]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Photon (object)|Photon]], [[Battery (object)|Battery]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)

<div class="qlang-split" data-lang="en"></div>

**Prueba experimental. Planck constant and behavior of an LED**

**Objetivo.** Se va a construir un circuito eléctrico para alimentar LEDs de diferentes colores y obtener un valor aproximado de la constante de Planck. In addition, for one of these LEDs, the value of a constant characteristic called the ideal factor will be determined.

**Materiales.**
- Five LEDs, different colors.
- Nine-volt battery .
- Power meter and resistance protection.
- Two polymers with probes and four clamps (crocodiles).
- The connection rule.
- It's a screwdriver.

**Theoretical Model.** An LED (Light-Emitting Diode) is an optoelectronic device that emits light when an electric current $I$ is circulated through it. For this current to circulate it is necessary that the potential difference between its terminals, $V$, exceeds a certain threshold value, $V_0$.

Essentially, an LED is a semiconductor in which the electrons are at very close energy levels that form bands. The lowest energy is the valence band, which is normally full of electrons. There is another band, with higher energy and containing few electrons, called the conduction band. Both bands are separated by a prohibited band, of energy $E$.

For an electron to be excited from the valence band to the conduction band it must absorb at least one energy $E = qV_0$, where $q$ is the elementary charge (absolute value of the electron charge). This energy is supplied by the battery that powers the circuit with the LED.

When the electron is desiccated and returned to the valence band, a photon of energy $E = h\nu$ is emitted, where $h$ is the Planck constant and $\nu$ the frequency of the emitted radiation. Therefore, with this simplified model, it would be expected that equality $qV_0 = h\nu$ would be met. In practice, this linear relationship is found between $V_0$ and $\nu$, but with an independent term, $C$, approximately constant, which cannot be justified by this model, i.e.

$$V_0 \approx \frac{h}{q}\nu + C \quad (1)$$

Moreover, for $V$ greater than $V_0$, the current $I$ increases approximately exponentially, in the form of

$$I \approx I_s \, e^{\frac{qV}{\eta kT}} \quad (2)$$

where $I_s$ is the so-called saturation current, $k$ the Boltzmann constant, $T$ the absolute temperature and $\eta$ is known as the LED's ideal factor.

**Datos:**
- Room temperature: $T = (295 \pm 3)\,\text{K}$
- Basic load: $q = 1{,}60 \times 10^{-19}\,\text{C}$
- Light speed in vacuum: $c = 3{,}00 \times 10^{8}\,\text{m/s}$
- Boltzmann constant: $k = 1{,}38 \times 10^{-23}\,\text{J/K}$

**1ª parte. Determinación de $h$.**

**1.a)** Conecte en la regleta el LED infrarrojo (cápsula oscura). Connect the battery and increase the power voltage of the LED, rotating the potentiometer clockwise until a current of $0{,}010\,\text{mA}$ circulates. Suppose, under these circumstances, the voltage indicated by the voltmeter is approximately the threshold voltage for this diode, $V_0$. Write down your courage.

Re-establishing the potentiometer at its initial position each time, repeat the $V_0$ measurement for the other four LEDs: red, yellow, blue and violet. Transfer your measurements to Table 1, which shows the emission wavelength of each LED. To calculate the frequency $\nu$, remember $\nu = c/\lambda$, where $c$ is the speed of light in vacuum and $\lambda$ the wavelength.

| LED | $\lambda$ (nm) | $\nu$ (Hz) | $V_0$ (V) |
|-----------|---------------|------------|----------|
♪ Infrared 938 ♪
♪ Red ♪ 632 ♪
♪ Yellow ♪ 593 ♪
♪ Blue ♪ 464 ♪ ♪ and the world is full of you ♪
♪ Purple ♪ 405 ♪ ♪ and the whole world ♪

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
**Objects:** [[Photon (object)|Photon]], [[Battery (object)|Battery]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Spagna 2012 — Quesito 2" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni"></span>

<div class="qlang-switch" data-default="es"></div>



**1.b)** Represente gráficamente los valores de $V_0$ (en ordenadas) frente a las frecuencias $\nu$ (en abscisas).

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)


<div class="qlang-split" data-lang="it"></div>

**1.b) ** Rappresenta graficamente i valori di $V_0$ (ordinati) rispetto alle frequenze $\nu$ (abcissi).

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)

<div class="qlang-split" data-lang="en"></div>

**1.b) ** Graphically represents the values of $V_0$ (in ordered) versus the frequencies $\nu$ (in abscesses).

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Spagna 2012 — Quesito 3" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni"></span>

<div class="qlang-switch" data-default="es"></div>



**1.c)** Obtenga el valor de la pendiente de la recta que mejor se ajusta a los puntos de la gráfica.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)


<div class="qlang-split" data-lang="it"></div>

**1.c) ** Ottieni il valore della pendenza della retta che meglio si adatta ai punti del grafico.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)

<div class="qlang-split" data-lang="en"></div>

**1.c) ** Obtain the value of the slope of the straight line that best fits the points on the graph.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)



<span class="atom-split" id="q04" data-atom="q04" data-title="Spagna 2012 — Quesito 4" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni"></span>

<div class="qlang-switch" data-default="es"></div>



**1.d)** Deduzca el valor de $h$.

Teniendo en cuenta que según la ecuación (1) la pendiente de la recta $V_0$ vs $\nu$ es $p = h/q$, obtenga el valor de la constante de Planck $h = pq$.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)


<div class="qlang-split" data-lang="it"></div>

**1.d) ** Detraggere il valore di $h$.

Considerando che, secondo l'equazione (1), l'inclinazione della retta $V_0$ vs $\nu$ è $p = h/q$, si ottiene il valore della costante di Planck $h = pq$.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)

<div class="qlang-split" data-lang="en"></div>

**1.d) ** Subtract the value of $h$.

Whereas according to equation (1) the slope of the straight $V_0$ vs $\nu$ is $p = h/q$, obtain the value of the Planck constant $h = pq$.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)



<span class="atom-split" id="q05" data-atom="q05" data-title="Spagna 2012 — Quesito 5" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni"></span>

<div class="qlang-switch" data-default="es"></div>



**1.e)** Haga una estimación de la incertidumbre de la pendiente.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)


<div class="qlang-split" data-lang="it"></div>

**1.e) ** Fa' un'estimazione dell'incertezza della pendenza.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)

<div class="qlang-split" data-lang="en"></div>

**1.e) ** Estimate the uncertainty of the slope.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)



<span class="atom-split" id="q06" data-atom="q06" data-title="Spagna 2012 — Quesito 6" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni"></span>

<div class="qlang-switch" data-default="es"></div>



**1.f)** Teniendo en cuenta lo anterior, haga una estimación de la incertidumbre del valor de $h$.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)


<div class="qlang-split" data-lang="it"></div>

**1.f) ** Considerando quanto sopra, si deve calcolare l'incertezza del valore di $h$.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)

<div class="qlang-split" data-lang="en"></div>

**1.f) ** In view of the above, estimate the uncertainty of the value of $h$.

**Topic:** [[Modern-Quantum Physics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)



<span class="atom-split" id="q07" data-atom="q07" data-title="Spagna 2012 — Quesito 7" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni,object/battery,object/resistor"></span>

<div class="qlang-switch" data-default="es"></div>



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
**Objects:** [[Battery (object)|Battery]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)


<div class="qlang-split" data-lang="it"></div>

** parte 2. Determinazione del fattore di idealità, $\eta$.**

Gira il potenziometro in senso antiorario fino alla fine del percorso e collega il LED rosso alla regola. Selezionate sul voltometro la scala di 2 V. Collegare la pila e aumentare la tensione di alimentazione fino a quando l'ampiecatore indichi di nuovo un'intensità $0{,}010\,\text{mA}$.

**2.a) ** A partire dalla situazione precedente, aumentare successivamente la tensione di alimentazione a intervalli regolari di circa $0{,}02\,\text{V}$ fino a un massimo di $1{,}70\,\text{V}$. Nota in ciascun caso i valori di $V$ e $I$ in Tabella 2. In questa tabella è disponibile una colonna vuota, per una certa grandezza derivata da quelle precedenti che è necessaria nel paragrafo successivo.

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
**Objects:** [[Battery (object)|Battery]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)

<div class="qlang-split" data-lang="en"></div>

The following information shall be provided: Determination of the ideal factor, $\eta$.**

Turn the power meter counterclockwise until the end of your tour and connect the red LED to the control. Select the 2 V scale on the voltmeter. Connect the battery and increase the power voltage until the amp indicates again an intensity of $0{,}010\,\text{mA}$.

**2.a) ** Starting from the previous situation, increase the feed voltage at regular intervals of approximately $0{,}02\,\text{V}$, successively, to a maximum value of $1{,}70\,\text{V}$. Note in each case the values of $V$ and $I$ in Table 2. In this table, you have an empty column for any magnitude derived from the previous ones that you need in the next section.

| $V$ (V) | $I$ (A) | | |
|---------|---------|---|---|
| | | | |
| | | | |

<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2012/P-EXPERIMENTAL-OEF-2012_p2_f3.png]]
The following is the list of the main characteristics of the LED:
<!--fig:end-->

**Topic:** [[Circuits]], [[Modern-Quantum Physics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Battery (object)|Battery]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)



<span class="atom-split" id="q08" data-atom="q08" data-title="Spagna 2012 — Quesito 8" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni"></span>

<div class="qlang-switch" data-default="es"></div>



**2.b)** A partir de la gráfica y del ajuste que estime oportunos, determine el valor del coeficiente de idealidad, $\eta$, del LED rojo.

Recuerde que la corriente sigue la ley:

$$I \approx I_s \, e^{\frac{qV}{\eta kT}}$$

donde $I_s$ es la corriente de saturación, $k$ la constante de Boltzmann, $T$ la temperatura absoluta y $\eta$ el factor de idealidad.

**Topic:** [[Circuits]], [[Modern-Quantum Physics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Photon Energy Relation (metodo)|Photon Energy Relation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)


<div class="qlang-split" data-lang="it"></div>

**2.b) ** Sulla base del grafico e dell'aggiustamento che ritiene opportuno, determinare il valore del coefficiente di ottimizzazione, $\eta$, del LED rosso.

Ricordate che il corrente segue la legge:

$$I \approx I_s \, e^{\frac{qV}{\eta kT}}$$

dove $I_s$ è il corrente di saturazione, $k$ la costante di Boltzmann, $T$ la temperatura assoluta e $\eta$ il fattore di idealità.

**Topic:** [[Circuits]], [[Modern-Quantum Physics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Photon Energy Relation (metodo)|Photon Energy Relation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)

<div class="qlang-split" data-lang="en"></div>

**2.b) ** From the chart and the adjustment which you deem appropriate, determine the value of the ideal coefficient, $\eta$, of the red LED.

Remember, the current follows the law:

$$I \approx I_s \, e^{\frac{qV}{\eta kT}}$$

where $I_s$ is the saturation current, $k$ the Boltzmann constant, $T$ the absolute temperature and $\eta$ the ideal factor.

**Topic:** [[Circuits]], [[Modern-Quantum Physics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Photon Energy Relation (metodo)|Photon Energy Relation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)



<span class="atom-split" id="q09" data-atom="q09" data-title="Spagna 2012 — Quesito 9" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni"></span>

<div class="qlang-switch" data-default="es"></div>



**2.c)** Haga una estimación de la incertidumbre de este coeficiente $\eta$.

**Topic:** [[Circuits]], [[Modern-Quantum Physics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)


<div class="qlang-split" data-lang="it"></div>

**2.c) ** Estima l'incertezza di questo coefficiente $\eta$.

**Topic:** [[Circuits]], [[Modern-Quantum Physics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)

<div class="qlang-split" data-lang="en"></div>

**2.c) ** Estimate the uncertainty of this coefficient $\eta$.

**Topic:** [[Circuits]], [[Modern-Quantum Physics]]
**Metodi:** [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1RRCLWFu6H3pcgcKqHwFIVZsww5tathI5/view)
