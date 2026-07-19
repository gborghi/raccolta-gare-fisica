---
title: Spagna 2015 ''
tipo: prova
tags:
  - kg/prova
---
<div class="atom-reader" data-prova="pexp-oef-2015"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2015 '' — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,object/battery,object/resistor"></span>

<div class="qlang-switch" data-default="es"></div>



**Prueba experimental. Radiación de una lámpara de incandescencia**

### OBJETIVO

Se va a estudiar experimentalmente la radiación emitida por el filamento de una lámpara de incandescencia y su dependencia con la temperatura.

### MATERIALES

- Pequeña lámpara de incandescencia.
- Pila de 9 V.
- Portapilas.
- Potenciómetro multivuelta de $1\ \mathrm{k\Omega}$.
- Resistencia de protección de $22\ \Omega$.
- Placa de pruebas.
- Dos polímetros, DVM890L y DT9201A, con sondas y cuatro pinzas (cocodrilos).
- Cables para conexión.
- Destornillador.
- Manuales de los polímetros.

### MODELO TEÓRICO

**Potencia radiada y temperatura.**

Los cuerpos pueden transferir energía a otros cuerpos que se encuentran a diferente temperatura mediante tres vías: conducción, convección y radiación. La radiación está constituida por ondas electromagnéticas, con una distribución espectral que depende de la temperatura.

Consideremos una bombilla convencional por la que circula una corriente eléctrica creciente, de modo que la temperatura de su filamento de wolframio aumenta gradualmente a partir de la temperatura ambiente, hasta llegar a la incandescencia. A bajas temperaturas la pérdida de energía de la bombilla se produce principalmente por conducción y convección. Sin embargo, a temperaturas elevadas la disipación de energía por radiación es la dominante y pueden despreciarse las pérdidas por conducción y convección. En este problema experimental vamos a suponer que nos encontramos en este último caso.

Asumiremos que la potencia de la radiación emitida por el filamento caliente, $P$, es proporcional a la $n$-ésima potencia de la temperatura absoluta $T$:

$$P = a\, T^n \quad (1)$$

donde se supone que $n$ es un número entero. La constante $a$ puede factorizarse en la forma

$$a = \varepsilon\,\sigma\, S \quad (2)$$

donde $S$ es el área de la superficie emisora, $\sigma$ es una constante llamada de Stefan-Boltzmann, y $\varepsilon$ es un coeficiente adimensional característico de cada cuerpo, conocido como «emisividad».

Los objetivos concretos de nuestro problema experimental son:

- **A.** Determinar el valor de $n$.
- **B.** Obtener el valor de la emisividad del filamento de una bombilla, $\varepsilon$.

---

**Resistencia eléctrica y temperatura.**

La resistencia eléctrica, $R$, de un filamento de wolframio aumenta con la temperatura, $T$. Un estudio experimental permite ajustar la dependencia entre estas variables a la siguiente relación empírica:

$$\frac{R}{R_0} = \left(\frac{T}{T_0}\right)^{0{,}83} \quad (3)$$

donde $R_0$ y $T_0$ son los valores a temperatura ambiente.

---

**Potencia eléctrica.**

La potencia eléctrica suministrada al filamento es

$$P = V\,I \quad (4)$$

donde $V$ es la diferencia de potencial entre los terminales del filamento e $I$ la intensidad que circula por él. Como ya se ha indicado, en nuestras condiciones de trabajo (filamento incandescente), supondremos que la energía eléctrica suministrada se transforma íntegramente en energía de radiación.

### PROCEDIMIENTO EXPERIMENTAL Y MEDIDAS

1. Mida la resistencia del filamento de la bombilla, $R_0$, a temperatura ambiente. Utilice para ello el polímetro DT9201A y las sondas con pinzas de cocodrilo. Se le indicará el valor de la temperatura $T_0$ en el aula. Si el valor de $R_0$ no está comprendido entre $10$ y $15\ \Omega$, comuníquelo a un responsable de la prueba.

2. En el pequeño potenciómetro que va a utilizar (figura 1) la patilla central corresponde al cursor que se mueve al girar el tornillo de la cara superior, y las patillas laterales a los extremos de la resistencia de $1\ \mathrm{k\Omega}$. Utilice el destornillador para poner inicialmente el cursor en, aproximadamente, el centro de su recorrido, es decir que la resistencia entre las patillas 1 y 2 (o 2 y 3) sea de unos $500\ \Omega$.

3. Lea con atención el ANEXO, con las instrucciones de uso de la placa de pruebas. A continuación monte en la placa el circuito de la figura 2, pero no conecte todavía la pila al portapilas. Tenga cuidado de que las patillas del potenciómetro o de la bombilla no se doblen al insertarlas en la placa.

4. Ajuste el miliamperímetro en la escala de 200 mA y el voltímetro en la de 20 V.

5. Revise el montaje y asegúrese de que las conexiones en la placa son correctas. Conecte entonces la pila y compruebe que los polímetros indican tensión y corriente no nulas, y que al girar el tornillo del potenciómetro cambian la tensión, la corriente y la intensidad luminosa de la bombilla.

6. Ajuste el potenciómetro hasta que la tensión en la bombilla sea, aproximadamente, $V = 1{,}5\ \mathrm{V}$. Tras esperar unos segundos hasta que las lecturas de los polímetros se estabilicen, anote los valores de $V$ e $I$. Para valores crecientes de $V$, hasta aproximadamente $V_{\max} = 5{,}0\ \mathrm{V}$, mida una serie de parejas de valores de $V$ e $I$.[^1] Evite que accidentalmente llegue a superarse una diferencia de potencial de $6\ \mathrm{V}$, que es la máxima que puede soportar el filamento sin fundirse.

7. Presente en una tabla como la que se muestra más abajo:
   - a) Los valores de $V$ e $I$ que ha obtenido experimentalmente. (4 p.)
   - b) Los sucesivos valores de la resistencia $R$ del filamento, obtenidos utilizando la ley de Ohm. (1 p.)
   - c) Los valores de las correspondientes temperaturas $T$ del filamento, calculados con la expresión (3). (1 p.)
   - d) La potencia suministrada al filamento en cada caso, teniendo en cuenta (4). (1 p.)

| $V\ (\mathrm{V})$ | $I\ (\mathrm{A})$ | $R\ (\Omega)$ | $T\ (\mathrm{K})$ | $P\ (\mathrm{W})$ |
|:-----------------:|:-----------------:|:-------------:|:-----------------:|:-----------------:|
|                   |                   |               |                   |                   |
|                   |                   |               |                   |                   |
|                   |                   |               |                   |                   |

8. Transforme la expresión (1) para obtener una dependencia lineal entre una función de $P$ y una función de $T$. Anote en dos columnas de la tabla anterior los valores de estas funciones de $P$ y $T$. (1 p.)

9. Represente gráficamente en el papel milimetrado los puntos correspondientes a esta dependencia lineal. (2 p.)

10. Determine la pendiente, $p$, de la recta que mejor se ajusta a esos puntos y deduzca el valor del exponente entero $n$ de la ecuación (1). (2 p.)

11. Conocido el exponente $n$, determine el valor de la constante $a$ de la ecuación (1). (4 p.)

12. Sabiendo que, en unidades del SI,

$$\sigma = 5{,}67 \times 10^{-8}\ \mathrm{W\,m^{-2}\,K^{-4}}$$

y que el área de la superficie emisora es

$$S = (9{,}1 \pm 0{,}7)\times 10^{-7}\ \mathrm{m^2}$$

calcule el valor de la emisividad del filamento de wolframio, $\varepsilon$. (1 p.)

13. Haga una estimación de la incertidumbre de $\varepsilon$. Suponga que la principal fuente de error en este experimento es la incertidumbre de la superficie emisora, dada en el apartado anterior. (3 p.)

[^1]: Para no prolongar en exceso el tiempo de medida, es suficiente con que mida unas diez parejas de valores.

**Topic:** [[Thermodynamics]], [[Circuits]], [[Modern-Quantum Physics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Physical Modeling (metodo)|Physical Modeling]], [[Error Propagation (metodo)|Error Propagation]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Battery (object)|Battery]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1fXuRErLc9Fkk-r-GIs-e-mszKLcaGZMW/view)


<div class="qlang-split" data-lang="it"></div>

La prova sperimentale. Radiamento di una lampada di incandescenza**

### Obiettivo

Si studierà sperimentalmente la radiazione emessa dal filamento di una lampada incandescente e la sua dipendenza dalla temperatura.

# # # MATERIALI

- Una piccola lampada incandescente.
- Pietra a 9 V.
- Portable.
- Potenziometro multi-rotto $1\ \mathrm{k\Omega}$.
- resistenza di protezione $22\ \Omega$.
- Una targa di prova.
- Due pollimetri, DVM890L e DT9201A, con sonde e quattro pinze (coccodrilli).
- Cable di connessione.
- Scratch.
- Manuali dei pollimetri.

### Modello teorico

**Potenza e temperatura di irradiazione.**

I corpi possono trasferire energia ad altri corpi che si trovano a diverse temperature attraverso tre vie: conduzione, convezione e radiazione. La radiazione è costituita da onde elettromagnetiche, con una distribuzione spettrale che dipende dalla temperatura.

Considerate una lampada convenzionale attraverso la quale circola un crescente corrente elettrica, in modo che la temperatura del suo filamento di wolframio aumenta gradualmente dalla temperatura ambiente fino alla fiammazione. A basse temperature la perdita di energia della lampada si verifica principalmente per conduzione e convezione. Tuttavia, a temperature elevate la dissipazione di energia da radiazioni è dominante e le perdite da condotta e convezione possono essere trascurate. In questo problema sperimentale, supponiamo di trovarci in questo ultimo caso.

Supponiamo che la potenza della radiazione emessa dal filamento caldo, $P$, sia proporzionale alla potenza $n$-esima della temperatura assoluta $T$:

$$P = a\, T^n \quad (1)$$

dove $n$ è un numero intero. La costante $a$ può essere fatturata in

$$a = \varepsilon\,\sigma\, S \quad (2)$$

dove $S$ è l'area della superficie emissione, $\sigma$ è una costante chiamata di Stefan-Boltzmann, e $\varepsilon$ è un coefficiente dimensionale caratteristico di ogni corpo, noto come emisività.

Gli obiettivi concreti del nostro problema sperimentale sono:

- **A.** Determinare il valore di $n$.
- **B.** Ottenere il valore di emissività del filamento di una lampada, $\varepsilon$.

---

**Resistenza elettrica e temperatura.**

La resistenza elettrica, $R$, di un filamento di wolframio aumenta con la temperatura, $T$. Uno studio sperimentale consente di regolare la dipendenza tra queste variabili al seguente rapporto empirico:

$$\frac{R}{R_0} = \left(\frac{T}{T_0}\right)^{0{,}83} \quad (3)$$

dove $R_0$ e $T_0$ sono valori a temperatura ambiente.

---

**Potenza elettrica.**

La potenza elettrica fornita al filamento è

$$P = V\,I \quad (4)$$

dove $V$ è la differenza di potenziale tra i terminali del filamento e $I$ l'intensità che circola attraverso di esso. Come già detto, nelle nostre condizioni di lavoro (filamento incandescente), supponiamo che l'energia elettrica fornita si trasformi interamente in energia di radiazione.

### PROCEDURA E METTE

1. Misura la resistenza del filamento della lampada, $R_0$, a temperatura ambiente. Utilizzare il polimetro DT9201A e le sonde con pinze di coccodrillo. Vi verrà indicato il valore della temperatura $T_0$ in classe. Se il valore di $R_0$ non è compreso tra $10$ e $15\ \Omega$, comunicarlo a un responsabile della prova.

2. Nel piccolo potenziometro che userai (figura 1) la lamina centrale corrisponde al cursore che si muove girando lo scheggiale della faccia superiore, e le lamine laterali alle estremità della resistenza $1\ \mathrm{k\Omega}$. Utilizzare il screwdriver per inizialmente mettere il cursore in, circa, il centro del suo percorso, cioè la resistenza tra le lamelle 1 e 2 (o 2 e 3) è di alcuni $500\ \Omega$.

3. Leggi attentamente l'ANEXO, con le istruzioni per l'uso della scheda di prova. Poi montare sulla scheda il circuito di figura 2, ma non ancora collegare la pila al portapiede. Attenzione che le lampadine del potenziometro o della lampada non si pieghino quando vengono inserite nella targa.

4. Aggiusta il miliamperietro sulla scala di 200 mA e il voltimetro su quella di 20 V.

5. Controlla il montaggio e assicurati che le connessioni sulla scheda siano corrette. Quindi collegate la pila e verificate che i polimeri indicino tensione e corrente non nulli, e che girando lo schino del potenziometro cambiano tensione, corrente e intensità luminosa della lampadina.

6. Aggiusta il potenziometro fino a quando la tensione della lampada è circa $V = 1{,}5\ \mathrm{V}$. Dopo aver atteso qualche secondo fino a quando le letture dei polimeri si stabilizzeranno, annotare i valori $V$ e $I$. Per valori crescenti di $V$, fino a circa $V_{\max} = 5{,}0\ \mathrm{V}$, misurare una serie di coppie di valori di $V$ e $I$.[^1] Evita che venga accidentalmente superata una differenza di potenziale di $6\ \mathrm{V}$, che è la massima che il filamento può supportare senza fondere.

7. Presente in una tabella come la seguente:
- a) I valori di $V$ e $I$ ottenuti sperimentalmente. (4 p.)
- b) I successivi valori della resistenza $R$ del filamento, ottenuti utilizzando la legge di Ohm. (1 p.)
- c) Valori delle temperature $T$ del filamento, calcolati con l'espressione (3). (1 p.)
- d) Potenza fornita al filamento in ogni caso, tenendo conto (4). (1 p.)

| $V\ (\mathrm{V})$ | $I\ (\mathrm{A})$ | $R\ (\Omega)$ | $T\ (\mathrm{K})$ | $P\ (\mathrm{W})$ |
|:-----------------:|:-----------------:|:-------------:|:-----------------:|:-----------------:|
|                   |                   |               |                   |                   |
|                   |                   |               |                   |                   |
|                   |                   |               |                   |                   |

8. Trasforma l'espressione (1) per ottenere una dipendenza lineare tra una funzione di $P$ e una funzione di $T$. Nota in due colonne della tabella precedente i valori di queste funzioni di $P$ e $T$. (1 p.)

9. Rappresenta graficamente sul cartace mm i punti corrispondenti a questa dipendenza lineare. (2 p.)

10. Determina la pendice, $p$, della retta che si adatta meglio a tali punti e deduci il valore dell'intero esponente $n$ dell'equazione (1). (2 p.)

11. Con il conosciuto esponente $n$, determina il valore della costante $a$ dell'equazione (1). (4 p.)

12. Sapendo che, in unità del SI,

$$\sigma = 5{,}67 \times 10^{-8}\ \mathrm{W\,m^{-2}\,K^{-4}}$$

e che l'area della superficie emissione è

$$S = (9{,}1 \pm 0{,}7)\times 10^{-7}\ \mathrm{m^2}$$

Calcolare il valore di emissività del filamento di wolframio, $\varepsilon$. (1 p.)

13. Calcolare l'incertezza di $\varepsilon$. Supponiamo che la principale fonte di errore in questo esperimento sia l'incertezza della superficie emittente, data nel paragrafo precedente. (3 p.)

[^1]: Per non prolungare troppo il tempo di misurazione, basta misurare circa dieci coppie di valori.

**Topic:** [[Thermodynamics]], [[Circuits]], [[Modern-Quantum Physics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Physical Modeling (metodo)|Physical Modeling]], [[Error Propagation (metodo)|Error Propagation]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Battery (object)|Battery]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1fXuRErLc9Fkk-r-GIs-e-mszKLcaGZMW/view)

<div class="qlang-split" data-lang="en"></div>

The test is carried out in a laboratory. Radiation from a flashing lamp**

### Objective

The radiation emitted by the filament of an incandescent lamp and its dependence on temperature will be experimentally studied.

### Materials

- It's a small incandescent lamp.
- Nine-volt battery .
- It's a handheld.
- Multi-rotation power meter of $1\ \mathrm{k\Omega}$.
- Protective resistance of $22\ \Omega$.
- It's a test plate.
- Two polymers, DVM890L and DT9201A, with probes and four clamps (crocodiles).
- Cable for connection.
- It's a screwdriver.
- The polymers manuals.

### Theoretical model

**Radiated power and temperature.**

Bodies can transfer energy to other bodies at different temperatures through three pathways: conduction, convection, and radiation. Radiation is composed of electromagnetic waves, with a spectral distribution that depends on temperature.

Consider a conventional bulb through which an increasing electric current circulates, so that the temperature of its tungsten filament gradually increases from room temperature to incandescent. At low temperatures the loss of energy from the bulb is mainly due to conduction and convection. However, at high temperatures radiation dissipation is dominant and conduction and convection losses can be neglected. In this experimental problem we're going to assume that we're in this last case.

Assume that the radiation output of the hot filament, $P$, is proportional to the $n$-th power of the absolute temperature $T$:

$$P = a\, T^n \quad (1)$$

where $n$ is assumed to be an integer. The $a$ constant can be factored into the form

$$a = \varepsilon\,\sigma\, S \quad (2)$$

where $S$ is the area of the emitting surface, $\sigma$ is a Stefan-Boltzmann constant, and $\varepsilon$ is a characteristic dimensional coefficient of each body, known as emissivity.

The specific objectives of our experimental problem are:

- **A.** Determine the value of $n$.
- **B.** Obtain the emissivity value of a filament of a bulb, $\varepsilon$.

---

The following conditions shall apply:

The electrical resistance, $R$, of a tungsten filament increases with temperature, $T$. An experimental study allows the dependence between these variables to be adjusted to the following empirical relationship:

$$\frac{R}{R_0} = \left(\frac{T}{T_0}\right)^{0{,}83} \quad (3)$$

where $R_0$ and $T_0$ are the ambient temperature values.

---

The following is the list of the following:

The electrical power supplied to the filament is

$$P = V\,I \quad (4)$$

where $V$ is the potential difference between the filament terminals and $I$ the intensity circulating through it. As already mentioned, in our working conditions (incandescent filament), we will assume that the electrical energy supplied is completely converted into radiation energy.

### Experimental and measurement procedure

1. Measure the resistance of the filament of the bulb, $R_0$, at room temperature. Use the DT9201A polymer and the crocodile-clamp probes. The temperature $T_0$ in the classroom will be given. If the value of $R_0$ is not between $10$ and $15\ \Omega$, please notify a test authority.

2. In the small potentiometer you are going to use (Figure 1) the center pad corresponds to the cursor that moves when the upper face screw is turned, and the side pads to the ends of the resistance $1\ \mathrm{k\Omega}$. Use the screwdriver to initially place the cursor at approximately the centre of its path, i.e. the resistance between the 1 and 2 (or 2 and 3) pads is $500\ \Omega$.

3. Read the ANNEX carefully, with the instructions for use of the test plate. Then mount the circuit in Figure 2 on the board, but do not yet connect the battery to the portable battery. Be careful that the patches of the potentiometer or bulb do not bend when inserted into the plate.

4. Adjust the millimeter on the 200 mA scale and the voltmeter on the 20 V scale.

5. Check the assembly and make sure the connections on the board are correct. Then connect the battery and check that the polymers indicate non-zero voltage and current, and that when the screw of the potentiometer is rotated, the voltage, current and light intensity of the bulb are changed.

6. Adjust the potentiometer until the voltage in the bulb is approximately $V = 1{,}5\ \mathrm{V}$. After waiting a few seconds for the readings of the polymers to stabilize, write down the values of $V$ and $I$. For increasing values of $V$, up to approximately $V_{\max} = 5{,}0\ \mathrm{V}$, measure a series of value pairs of $V$ and $I$.[^1] Avoid accidentally exceeding a potential difference of $6\ \mathrm{V}$, which is the maximum that the filament can withstand without melting.

7. Present in a table like the one shown below:
- (a) The values of $V$ and $I$ obtained experimentally. (4 p.)
- (b) The successive values of the filament resistance $R$ obtained using Ohm's law. (1 p.)
- (c) The values of the corresponding filament temperatures $T$, calculated by the expression (3). (1 p.)
- (d) The power supplied to the filament in each case, taking into account (4). (1 p.)

| $V\ (\mathrm{V})$ | $I\ (\mathrm{A})$ | $R\ (\Omega)$ | $T\ (\mathrm{K})$ | $P\ (\mathrm{W})$ |
|:-----------------:|:-----------------:|:-------------:|:-----------------:|:-----------------:|
|                   |                   |               |                   |                   |
|                   |                   |               |                   |                   |
|                   |                   |               |                   |                   |

8. Transform expression (1) to obtain a linear dependence between a function of $P$ and a function of $T$. Note in two columns of the table above the values of these functions $P$ and $T$. (1 p.)

9. Graphically represent the points corresponding to this linear dependence on the millimeter paper. (2 p.)

10. Determine the slope, $p$, of the straight line that best fits those points and deduce the value of the whole exponent $n$ of equation (1). (2 p.)

11. If the exponent $n$ is known, determine the value of the constant $a$ of equation (1). (4 p.)

12. Knowing that, in SI units,

$$\sigma = 5{,}67 \times 10^{-8}\ \mathrm{W\,m^{-2}\,K^{-4}}$$

and that the area of the emission surface is

$$S = (9{,}1 \pm 0{,}7)\times 10^{-7}\ \mathrm{m^2}$$

calculate the emissivity value of the tungsten filament, $\varepsilon$. (1 p.)

13. Estimate the uncertainty of $\varepsilon$. Suppose the main source of error in this experiment is the uncertainty of the emission surface given in the previous section. (3 p.)

[^1]: To avoid prolonging the measurement time excessively, it is sufficient to measure about ten value pairs.

**Topic:** [[Thermodynamics]], [[Circuits]], [[Modern-Quantum Physics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Physical Modeling (metodo)|Physical Modeling]], [[Error Propagation (metodo)|Error Propagation]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Battery (object)|Battery]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1fXuRErLc9Fkk-r-GIs-e-mszKLcaGZMW/view)
