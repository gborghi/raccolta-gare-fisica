---
tipo: prova
prova_id: prova_P3completo2017
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2017'
level: ''''''
pdf: gare di altri paesi/Spagna/RSF/P3completo2017.pdf
generator: llm-retranscribed
tags:
  - kg/prova
---

# Spagna 2017 '' — P3completo2017.pdf

**Fonte:** `gare di altri paesi/Spagna/RSF/P3completo2017.pdf` · Apri PDF

## Problema 1







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

$$\frac{P}{\mathcal{V}} = \underbrace{\rho J^2}_{\text{Joule}} - \underbrace{\sigma J \frac{\Delta T}{L}}_{\text{Thomson}} \tag{1}$$

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
**Fonte:** Testo (PDF) — p.1
