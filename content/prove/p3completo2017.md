---
title: Spagna 2017 ''
tipo: prova
tags:
  - kg/prova
---
<div class="atom-reader" data-prova="p3completo2017"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2017 '' — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,object/star,object/galvanometer,object/mirror,object/coil,object/wire"></span>

<div class="qlang-switch" data-default="es"></div>



**P3. Lord Kelvin, un surtido de física**

William Thomson, Lord Kelvin (1824–1907), fue un físico e inventor británico que contribuyó decisivamente a modernizar la física en el siglo XIX. Destacó en el campo de la termodinámica, donde ayudó a entender la conservación de la energía y la equivalencia entre calor y trabajo, estableció la escala absoluta de temperatura (escala Kelvin), calculó el cero absoluto, y formuló la segunda ley de la termodinámica. También sobresalió en electromagnetismo, al fundar la termoelectricidad y realizar diseños e inventos que permitieron desarrollar la telegrafía.

---

### Luminosidad, edad y temperatura del Sol

Un gran reto científico del siglo XIX fue explicar el brillo de las estrellas y estimar su edad. Kelvin estudió la luminosidad y la edad del Sol. En astronomía, se llama *luminosidad* a la potencia emitida en todas direcciones por un cuerpo celeste.

Datos para el Sol: luminosidad $L_\odot = 3{,}85 \times 10^{26}\,\text{W}$, radio $R_\odot = 6{,}96 \times 10^{8}\,\text{m}$, masa $M_\odot = 1{,}99 \times 10^{30}\,\text{kg}$, $G = 6{,}67 \times 10^{-11}\,\text{N\,m}^2/\text{kg}^2$.

Para explicar la luminosidad solar, Kelvin consideró primero la hipótesis del “bombardeo de meteoritos”: la energía que emite el Sol proviene de la energía cinética de una lluvia de meteoritos que impactarían contra él a una velocidad igual a la velocidad de escape del Sol.

**(a)** Obtenga una expresión (en función de $L_\odot$, $R_\odot$, $M_\odot$ y $G$) para la masa de meteoritos que debería llegar al Sol por unidad de tiempo para mantener su luminosidad. Calcule la masa total en 1 año.

Tras descartar la hipótesis anterior, Kelvin desarrolló junto a Hermann von Helmholtz la teoría conocida como “contracción de Kelvin-Helmholtz”, según la cual la fuente de energía de las estrellas es su *autoenergía gravitatoria* (la energía de los campos gravitatorios generados por las propias masas que componen el cuerpo).

**(b)** Demuestre que la autoenergía gravitatoria de una esfera homogénea de masa $M$ y radio $R$ es

$$U = -\frac{3GM^2}{5R}.$$

Calcule el valor de la autoenergía gravitatoria del Sol, $U_\odot$.

*(Ayuda: tome una cáscara esférica de radio $r$ y espesor $dr$, calcule la energía potencial $dU$ de dicha cáscara en el campo gravitatorio de la masa esférica interior, e integre de $r=0$ a $r=R$.)*

Según el mecanismo de Kelvin-Helmholtz, el Sol se contrajo hasta su estado actual partiendo de una nube inicial con sus partes infinitamente separadas y en reposo. En una contracción gravitacional, la mitad de la autoenergía potencial perdida se convierte en radiación y la otra mitad en calor.

**(c)** Calcule, a partir de $U_\odot$ y $L_\odot$, la edad del Sol que estimó Kelvin. Exprese el resultado en millones de años.

**(d)** Calcule la temperatura $T_\odot$ del Sol que estimó Kelvin, sabiendo que tomó para el calor específico del Sol un valor igual a 10 veces el del agua. Dato: $c_\text{agua} = 4{,}187\,\text{J/(g\,K)}$.

---

### Termoelectricidad: efectos Joule y Thomson

Kelvin sentó las bases de la termoelectricidad. Descubrió además el **efecto Thomson**: si circula una corriente eléctrica por un conductor homogéneo cuyos extremos se mantienen a temperaturas distintas, se produce absorción o liberación de calor a lo largo del conductor, que se suma a la liberación de calor por efecto Joule.

Para un cable homogéneo y cilíndrico de longitud $L$ y sección $A$ (conductividad térmica despreciable), la potencia calorífica por unidad de volumen $\mathcal{V}$ es

$$\frac{P}{\mathcal{V}} = \underbrace{\rho J^2}_{\text{Joule}} - \underbrace{\sigma J \frac{\Delta T}{L}}_{\text{Thomson}} \quad (1)$$

donde $\rho$ es la resistividad del material, $J$ es la densidad de corriente, $\Delta T$ es la diferencia de temperatura entre los extremos, y $\sigma$ es el coeficiente de Thomson. $J$ y $\Delta T$ tienen el mismo signo si la corriente circula del extremo frío al caliente.

**(e)** Determine (en función de $\sigma$ y $\Delta T$) la diferencia de potencial $\Delta V$ que debe aplicarse al cable para que no emita ni absorba calor.

Datos numéricos: cable cilíndrico de $L = 3\,\text{cm}$ de largo y $r = 5\,\text{mm}$ de radio; extremos a $T_1 = 273\,\text{K}$ y $T_2 = 300\,\text{K}$; corriente $I = 2\,\text{A}$ del extremo caliente al frío; material semiconductor de óxido de zinc con resistividad $\rho = 5 \times 10^{-5}\,\Omega\,\text{m}$ y coeficiente de Thomson $\sigma = 1{,}50 \times 10^{-4}\,\text{V/K}$.

**(f)** Calcule el calor liberado en el cable en 10 minutos por efecto Joule, por efecto Thomson y el calor total.

---

### Un galvanómetro para el telégrafo

Kelvin inventó el galvanómetro de espejo, un detector de corriente de alta sensibilidad gracias al cual pudo empezar a funcionar, en 1866, el primer cable telegráfico transatlántico entre Nueva York y Londres.

Se considera una espira cuadrada de lado $L$ por la que circula una corriente $I$, en el seno de un campo magnético uniforme $\vec{B}$. La espira puede girar respecto a un eje vertical que pasa por su centro. El plano de la espira está girado un ángulo $\alpha$ respecto a la dirección del campo magnético.

**(g)** Determine el momento resultante de las fuerzas que actúan sobre la espira (en función de $L$, $I$, $B$ y $\alpha$). Justifique que si el campo magnético es radial (como en la figura 3b), el momento no depende del ángulo.

El galvanómetro de Kelvin consta de una bobina de $N$ espiras cuadradas de lado $L$ suspendida de un hilo de constante de torsión $k$, al que va adosado un espejo. La bobina se encuentra en una zona de campo magnético radial $B$. Al pasar la corriente, la bobina queda en equilibrio para un cierto ángulo $\phi$ en el que el momento magnético iguala al momento torsional del hilo.

**(h)** Determine (en función de $N$, $L$, $B$, $k$ y $\phi$) la intensidad $I$ que pasa por el galvanómetro.

**(i)** Para una intensidad $I$, la bobina ha rotado un ángulo $\phi$ respecto a la posición de corriente nula, y el punto de impacto de la luz reflejada en el espejo se desplaza una distancia $a$ sobre una escala circular de radio $D$. Determine $a$ en función de $\phi$ y $D$. ¿Podemos graduar la escala de forma lineal para medir la intensidad?

Sin variar el peso total de la bobina ni las características del hilo, se define la sensibilidad del galvanómetro como el cociente $\phi/I$.

**(j)** Razone si construiría el instrumento con una espira menos (y, por tanto, con un tamaño de las espiras algo mayor) o con una espira más.

**Topic:** [[Gravitation]], [[Thermodynamics]], [[Magnetism]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Star (object)|Star]], [[Galvanometer (object)|Galvanometer]], [[Mirror (object)|Mirror]], [[Coil (object)|Coil]], [[Wire (object)|Wire]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1OpioDAsQ3o7lPwrtGI8fsyrFe-uHJg_w/view)


<div class="qlang-split" data-lang="it"></div>

**P3. Lord Kelvin, un surtido de física**

William Thomson, Lord Kelvin (18241907), fu un fisico e inventore britannico che contribuì decisamente alla modernizzazione della fisica nel XIX secolo. Si è dimostrato il più importante nel campo della termodinamica, dove ha aiutato a capire la conservazione dell'energia e l'equivalenza tra calore e lavoro, ha stabilito la scala assoluta di temperatura (scala Kelvin), calcolato il zero assoluto, e ha formulato la seconda legge della termodinamica. Ha anche superato l'elettromagnetismo, fondando la termoelettricità e realizzando progetti e invenzioni che hanno permesso di sviluppare la telegrafia.

---

### Luce, età e temperatura del Sole

Una grande sfida scientifica del XIX secolo fu spiegare il brillo delle stelle e stimare la loro età. Kelvin studiò la luminosità e l'età del Sole. In astronomia, la luminosità è chiamata ** la potenza emessa in tutte le direzioni da un corpo celeste.

Data per il Sole: luminosità $L_\odot = 3{,}85 \times 10^{26}\,\text{W}$, radio $R_\odot = 6{,}96 \times 10^{8}\,\text{m}$, massa $M_\odot = 1{,}99 \times 10^{30}\,\text{kg}$, $G = 6{,}67 \times 10^{-11}\,\text{N\,m}^2/\text{kg}^2$.

Per spiegare la luminosità solare, Kelvin ha considerato prima l'ipotesi del bombardamento dei meteoriti: l'energia emessa dal Sole proviene dall'energia cinetica di una pioggia di meteoriti che impatterebbero contro di lui a una velocità uguale alla velocità di scarico del Sole.

**(a) ** Ottieni un'espressione (a seconda di $L_\odot$, $R_\odot$, $M_\odot$ e $G$) per la massa dei meteoriti che dovrebbero raggiungere il Sole per unità di tempo per mantenere la loro luminosità. Calcola la massa totale in un anno.

Dopo aver scartato l'ipotesi precedente, Kelvin ha sviluppato insieme a Hermann von Helmholtz la teoria conosciuta come contraczione di Kelvin-Helmholtz, secondo la quale la fonte di energia delle stelle è la loro *autoenergia gravitazionale* (l'energia dei campi gravitazionali generati dalle masse stesse che compongono il corpo).

**(b) ** Dimostra che l'autoenergia gravitazionale di una sfera omogenea di massa $M$ e di radio $R$ è

$$U = -\frac{3GM^2}{5R}.$$

Calcola il valore dell'autoenergia gravitazionale del Sole, $U_\odot$.

*(Aiuto: prendere una casca sferica di radio $r$ e spessore $dr$, calcolare l'energia potenziale $dU$ di tale casca nel campo gravitazionale della massa sferica interna, e integrare da $r=0$ a $r=R$.)*

Secondo il meccanismo di Kelvin-Helmholtz, il Sole si contrae fino al suo stato attuale partendo da una nube iniziale con le sue parti infinitamente separate e a riposo. In una contrazione gravitazionale, metà dell'autoenergia potenziale persa viene trasformata in radiazioni e l'altra metà in calore.

**(c)** Calcule, a partir de $U_\odot$ y $L_\odot$, la edad del Sol que estimó Kelvin. Esprimete il risultato in milioni di anni.

**(d)** Calcule la temperatura $T_\odot$ del Sol que estimó Kelvin, sabiendo que tomó para el calor específico del Sol un valor igual a 10 veces el del agua. Data: $c_\text{agua} = 4{,}187\,\text{J/(g\,K)}$.

---

### Termoelettricità: effetti Joule e Thomson

Kelvin ha gettato le basi dell'elettricità termica. Descubrió además el **efecto Thomson**: si circula una corriente eléctrica por un conductor homogéneo cuyos extremos se mantienen a temperaturas distintas, se produce absorción o liberación de calor a lo largo del conductor, que se suma a la liberación de calor por efecto Joule.

Per un cavo omogeneo e cilindrico di lunghezza $L$ e sezione $A$ (conduttività termica scarsa), la potenza calorifica per unità di volume $\mathcal{V}$ è

$$\frac{P}{\mathcal{V}} = \underbrace{\rho J^2}_{\text{Joule}} - \underbrace{\sigma J \frac{\Delta T}{L}}_{\text{Thomson}} \quad (1)$$

dove $\rho$ è la resistività del materiale, $J$ è la densità di corrente, $\Delta T$ è la differenza di temperatura tra le estremità, e $\sigma$ è il coefficiente di Thomson. $J$ e $\Delta T$ hanno lo stesso segno se il corrente circola dall'estremo freddo al caldo.

**(e) ** Determina (in funzione di $\sigma$ e $\Delta T$) la differenza di potenziale $\Delta V$ da applicare al cavo per non emette o assorbe calore.

Dati numerici: cavo cilindrico di $L = 3\,\text{cm}$ di lunghezza e $r = 5\,\text{mm}$ di radio; estremità $T_1 = 273\,\text{K}$ e $T_2 = 300\,\text{K}$; corrente $I = 2\,\text{A}$ da estremità calda a fredda; materiale semiconduttore di ossido di zinco con resistività $\rho = 5 \times 10^{-5}\,\Omega\,\text{m}$ e coefficiente Thomson $\sigma = 1{,}50 \times 10^{-4}\,\text{V/K}$.

**(f) ** Calcola il calore rilasciato nel cavo in 10 minuti per effetto Joule, per effetto Thomson e calore totale.

---

# # # Un galvanometro per il telegrafo

Kelvin inventò il galvanometro dello specchio, un rilevatore di corrente di alta sensibilità grazie al quale fu possibile iniziare a funzionare, nel 1866, il primo cavo telegrafico transatlantico tra New York e Londra.

Si considera una spira quadrata laterale $L$ attraverso la quale si circola un corrente $I$, all'interno di un campo magnetico uniforme $\vec{B}$. La spira può girare rispetto ad un asse verticale che passa attraverso il suo centro. Il piano della spira è girato un angolo $\alpha$ rispetto alla direzione del campo magnetico.

**(g) ** Determina il momento risultante delle forze che agiscono sul spirale (in funzione di $L$, $I$, $B$ e $\alpha$). Raccontate che se il campo magnetico è radiale (come nella figura 3b), il momento non dipende dall'angolo.

El galvanómetro de Kelvin consta de una bobina de $N$ espiras cuadradas de lado $L$ suspendida de un hilo de constante de torsión $k$, al que va adosado un espejo. La bobina è situata in una zona di campo magnetico radial $B$. Passando la corrente, la bobina rimane in equilibrio per un certo angolo $\phi$ in cui il momento magnetico equivale al momento torsionale del filo.

**(h) ** Determina (in funzione di $N$, $L$, $B$, $k$ e $\phi$) l'intensità $I$ che passa attraverso il galvanometro.

**(i) ** Per un'intensità $I$, la bobina ha rotato un angolo $\phi$ rispetto alla posizione di corrente zero e il punto di impatto della luce riflessa nello specchio si sposta a una distanza $a$ su una scala circolare di radio $D$. Determina $a$ in funzione di $\phi$ e $D$. Possiamo gradire la scala in modo lineare per misurare l'intensità?

Senza variare il peso totale della bobina o le caratteristiche del filo, la sensibilità del galvanometro è definita come il coefficiente $\phi/I$.

**(j) ** Raziona se costruire l'istrumento con una spira minore (e quindi con una dimensione delle spira un po' maggiore) o con una spira maggiore.

**Topic:** [[Gravitation]], [[Thermodynamics]], [[Magnetism]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Star (object)|Star]], [[Galvanometer (object)|Galvanometer]], [[Mirror (object)|Mirror]], [[Coil (object)|Coil]], [[Wire (object)|Wire]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1OpioDAsQ3o7lPwrtGI8fsyrFe-uHJg_w/view)

<div class="qlang-split" data-lang="en"></div>

**P3. Lord Kelvin, un surtido de física**

William Thomson, Lord Kelvin (18241907), was a British physicist and inventor who contributed decisively to the modernisation of physics in the 19th century. He excelled in the field of thermodynamics, where he helped understand energy conservation and the equivalence between heat and work, established the absolute temperature scale (Kelvin scale), calculated absolute zero, and formulated the second law of thermodynamics. He also excelled in electromagnetism, founding thermoelectricity and making designs and inventions that allowed telegraphy to develop.

---

### The sun's brightness, age and temperature

A major scientific challenge of the 19th century was explaining the brightness of stars and estimating their age. Kelvin studied the brightness and age of the sun. En astronomía, se llama *luminosidad* a la potencia emitida en todas direcciones por un cuerpo celeste.

The data for the Sun: luminosity $L_\odot = 3{,}85 \times 10^{26}\,\text{W}$, radius $R_\odot = 6{,}96 \times 10^{8}\,\text{m}$, mass $M_\odot = 1{,}99 \times 10^{30}\,\text{kg}$, $G = 6{,}67 \times 10^{-11}\,\text{N\,m}^2/\text{kg}^2$.

To explain solar luminosity, Kelvin first considered the hypothesis of  meteoritic bombardment: the energy the Sun emits comes from the kinetic energy of a meteor shower that would impact against it at a speed equal to the Sun's escape velocity.

**(a) ** Obtain an expression (based on $L_\odot$, $R_\odot$, $M_\odot$ and $G$) for the mass of meteorites that should reach the Sun per unit time to maintain their brightness. Calculate the total mass in 1 year.

Tras descartar la hipótesis anterior, Kelvin desarrolló junto a Hermann von Helmholtz la teoría conocida como “contracción de Kelvin-Helmholtz”, según la cual la fuente de energía de las estrellas es su *autoenergía gravitatoria* (la energía de los campos gravitatorios generados por las propias masas que componen el cuerpo).

**(b) ** Demonstrates that the gravitational self-energy of a homogeneous sphere of mass $M$ and radius $R$ is

$$U = -\frac{3GM^2}{5R}.$$

Calculate the value of the gravitational self-energy of the Sun, $U_\odot$.

*(Help: take a radial spherical shell $r$ and thickness $dr$, calculate the potential energy $dU$ of that shell in the gravitational field of the inner spherical mass, and integrate from $r=0$ to $r=R$.)*

According to the Kelvin-Helmholtz mechanism, the Sun contracted to its present state starting from an initial cloud with its infinitely separate and resting parts. In a gravitational contraction, half of the lost potential self-energy is converted into radiation and the other half into heat.

**(c)** Calcule, a partir de $U_\odot$ y $L_\odot$, la edad del Sol que estimó Kelvin. Express the result in millions of years.

**(d)** Calcule la temperatura $T_\odot$ del Sol que estimó Kelvin, sabiendo que tomó para el calor específico del Sol un valor igual a 10 veces el del agua. Dato: $c_\text{agua} = 4{,}187\,\text{J/(g\,K)}$.

---

### Thermoelectricity: Joule and Thomson effects

Kelvin laid the foundations of the thermoelectricity. Descubrió además el **efecto Thomson**: si circula una corriente eléctrica por un conductor homogéneo cuyos extremos se mantienen a temperaturas distintas, se produce absorción o liberación de calor a lo largo del conductor, que se suma a la liberación de calor por efecto Joule.

For a homogeneous, cylindrical cable of $L$ length and $A$ section (negligible thermal conductivity), the heat output per volume unit $\mathcal{V}$ is

$$\frac{P}{\mathcal{V}} = \underbrace{\rho J^2}_{\text{Joule}} - \underbrace{\sigma J \frac{\Delta T}{L}}_{\text{Thomson}} \quad (1)$$

where $\rho$ is the material resistivity, $J$ is the current density, $\Delta T$ is the temperature difference between the ends, and $\sigma$ is the Thomson coefficient. $J$ and $\Delta T$ have the same sign if the current is flowing from the cold to the hot end.

**(e) ** Determine (based on $\sigma$ and $\Delta T$) the potential difference $\Delta V$ to be applied to the cable so that it does not emit or absorb heat.

Numerical data: cylindrical cable of $L = 3\,\text{cm}$ length and $r = 5\,\text{mm}$ radius; ends at $T_1 = 273\,\text{K}$ and $T_2 = 300\,\text{K}$; current $I = 2\,\text{A}$ from the hot to the cold end; zinc oxide semiconductor material with resistivity $\rho = 5 \times 10^{-5}\,\Omega\,\text{m}$ and Thomson coefficient $\sigma = 1{,}50 \times 10^{-4}\,\text{V/K}$.

**(f) ** Calculate the heat released in the cable in 10 minutes by Joule effect, by Thomson effect and total heat.

---

### A galvanometer for the telegraph

Kelvin invented the mirror galvanometer, a highly sensitive current detector that allowed the first transatlantic telegraph cable between New York and London to start operating in 1866.

A square side spiral $L$ through which a current $I$ circulates within a uniform magnetic field $\vec{B}$ is considered. The spire can rotate with respect to a vertical axis passing through its centre. The plane of the spindle is rotated at an angle $\alpha$ with respect to the direction of the magnetic field.

**(g) ** Determine the resulting moment of the forces acting on the spindle (depending on $L$, $I$, $B$ and $\alpha$). Justify that if the magnetic field is radial (as in Figure 3b), the moment is not dependent on the angle.

The Kelvin galvanometer consists of a coil of $N$ square side spirals $L$ suspended from a thread of constant torque $k$, to which a mirror is attached. The coil is located in a radial magnetic field zone $B$. When the current passes, the coil is balanced at a certain angle $\phi$ at which the magnetic momentum equals the torsional momentum of the wire.

**(h)** Determine (en función de $N$, $L$, $B$, $k$ y $\phi$) la intensidad $I$ que pasa por el galvanómetro.

**(i) ** For an intensity $I$, the coil has rotated an angle $\phi$ with respect to the zero current position, and the point of impact of the reflected light in the mirror is shifted a distance $a$ over a circular radius scale $D$. Determine $a$ in terms of $\phi$ and $D$. Can we linearly scale the scale to measure the intensity?

Without variation in the total coil weight or the characteristics of the thread, the sensitivity of the galvanometer is defined as $\phi/I$.

**(j) ** Consider whether to build the instrument with a smaller (and therefore somewhat larger) or a larger (or larger) spindle.

**Topic:** [[Gravitation]], [[Thermodynamics]], [[Magnetism]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Star (object)|Star]], [[Galvanometer (object)|Galvanometer]], [[Mirror (object)|Mirror]], [[Coil (object)|Coil]], [[Wire (object)|Wire]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1OpioDAsQ3o7lPwrtGI8fsyrFe-uHJg_w/view)
