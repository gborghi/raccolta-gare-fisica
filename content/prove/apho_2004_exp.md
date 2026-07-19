---
title: APhO 2004 — Sperimentale
tipo: prova
tags:
  - kg/prova
  - paese/asia
  - comp/APhO
---
<div class="atom-reader" data-prova="apho_2004_exp"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="APhO 2004 — Sperimentale — Quesito 1" data-tags="kg/prova,paese/Asia,comp/APhO,topic/magnetism,argomento/elettromagnetismo,difficolta/4,multidisciplina/mono,object/magnet,object/coil"></span>

<div class="qlang-switch" data-default="en"></div>



### Hall effect and magnetoresistivity effect

#### Apparatus and materials

1. Three digital multimeters.
2. A Hall sensor with four pins MNPQ (M in black wire, N yellow wire, P red wire, Q green wire), fixed on a printed circuit, a pair of conductors leading to M, N; another pair of conductors leading to P, Q.
3. A permanent magnet in the shape of a disk, of radius $r = 14\ \text{mm}$, of thickness $t = 4\ \text{mm}$. The magnetization is perpendicular to the surface of the disk. The value $B_0$ (in Tesla) of the magnetic field at the surface of the magnet is written on the magnet's surface.

   *During the experiment, keep the magnet far away from the Hall sensor whenever you do not use it.*
4. A coil of $N$ turns is wound on a core having the shape of a toroid, made of a ferromagnetic material. The average diameter of the core is $\rho = 25\ \text{mm}$. The toroid has a gap of width $d = 3\ \text{mm}$.
5. A box with two independent 1.5 V dry cells. The cell connected in series to a 10 kΩ variable resistor, called *battery 1*, is used to supply the current to the Hall sensor. The second cell, called *battery 2*, is used to supply the current to the coil only during the measurement.
6. A protractor with a small hole at its center.
7. A piece of plexiglass with a small needle fixed on it.
8. A holder for the printed circuit with the Hall sensor.
9. A small piece of plastic used to fix the sensor on the needle.
10. Conductors with negligible resistance.
11. Graph papers.

> [!figure] Figure 1 — Apparatus layout
> ![[APhO_2004_exp_Q1_p1_f1.png]]
> Numbered items: 1 — digital multimeters; 2 — protractor; 3 — magnet; 4 — printed circuit with the Hall sensor; 5 — box with the two dry cells; 6 — plexiglass with the needle; 7 — graph paper; 8 — holder for the printed circuit; 9 — sensor mount. A 10 kΩ variable resistor is indicated at the top left.

#### Experiment

##### I. Introduction

###### 1. The magnetoresistivity effect and the Hall effect.

Consider a conductor sample in the shape of a parallelepiped of length $a$, width $b$ and thickness $c$ (see Figure 2). The current $I$ flows along the direction of $a$. If the sample is placed in a magnetic field $\vec{B}$, the magnetic field affects the resistance $R$ of the sample. This effect is called the **magneto-resistivity effect (MRE)**. Let $\Delta R$ be the increase of the resistance $R$ of the sample, $R_0$ the value of the resistance in the absence of a magnetic field, then the magnitude of the MRE is defined by the ratio $\Delta R / R_0$.

> [!figure] Figure 2 — Sample geometry
> ![[APhO_2004_exp_Q1_p2_f1.png]]

Assume that the applied magnetic field is uniform and the magnetic induction vector $\vec{B}$ is parallel to the top face of the sample as shown in Figure 2. If the charge carriers in the sample are electrons, the Lorentz force will bend them upward, and the top face of the sample will be charged negatively. This effect is called the **Hall effect**. The voltage appearing between electrodes M (on the top face) and N (on the bottom face) is called the **Hall voltage**. This can be measured by use of a voltmeter.

The potential difference measured between the electrodes M and N is given by

$$U_{MN} = U_H + V_{MN} \tag{1}$$

where $U_H$ is the Hall voltage, $V_{MN}$ is the potential difference in the absence of a magnetic field due to some undesired effects (the electrodes M and N being not exactly opposite to each other, etc.).

Normally, the Hall voltage $U_H$ is proportional to $I\,B\,\sin\theta$, and the magnitude of the MRE is proportional to $B^2\sin^2\theta$, where $\theta$ is the angle between vector $\vec{B}$ and the current direction. But when the sample has a non regular shape, the dependence of $U_H$ and $\Delta R / R$ on $B\sin\theta$ may be more complicated.

The Hall effect is used to fabricate a device for measuring the magnetic field. This device is called the **Hall sensor**. For a Hall sensor, the expression of $U_H$ is given by:

$$U_H = \alpha\,I\,B\,\sin\theta \tag{2}$$

where $\alpha$ is, by definition, the sensitivity of the Hall sensor.

##### II. The measuring sample

The measuring sample in this experiment is a commercial Hall sensor. It consists of a small thin semiconductor plate covered with plastic, with 4 ohmic electrodes, leading to the pins M, N, P, Q (see Figure 3). It is used in this experiment to study both the MRE and the Hall effect.

> [!figure] Figure 3 — Commercial Hall sensor (pin layout)
> ![[APhO_2004_exp_Q1_p2_f2.png]]

Place the sensor in the magnetic field and use an ohmmeter to measure the resistance between pins M and N, we can deduce the magnitude of the MRE. Set a current ($I \sim 1\ \text{mA}$) flowing from P to Q, we can study the Hall effect by measuring the voltage between M and N with a millivoltmeter.

##### III. Experiment

###### 1. Determination of the sensitivity $\alpha$ of the Hall sensor

Set the current through the sensor $I \sim 1\ \text{mA}$. Keep the distance between the sensor and the centre of the surface of the magnet $y = 2\ \text{cm}$. Adjust the orientation of the magnet to obtain maximal value of the Hall voltage. Measure the Hall voltage with some values of $I$ and determine the sensitivity $\alpha$ of the Hall sensor.

For a magnet having the shape of a disk of radius $r$, thickness $t$, the magnetic field at a point situated on its axis at a distance $y$ from the center of the disk surface with $y \gg t$ is given by the expression

$$B(y) = \frac{1}{2}B_0\left[\frac{y+t}{\sqrt{(y+t)^2 + r^2}} - \frac{y}{\sqrt{y^2 + r^2}}\right] \tag{1}$$

where $B_0$ is the magnetic induction at the surface of the magnet. The value of $B_0$ is given on the surface of the magnet.

**[2.0 pts]**

###### 2. Study of the dependence of $U_H$ on angle $\theta$ between $\vec{B}$ and the current direction.

Set the current through the sensor $I \sim 1\ \text{mA}$. Keep the distance between the sensor and the centre of the surface of the magnet $y = 2\ \text{cm}$. Put the magnet on the protractor so that the plane of the magnet is perpendicular to the line connecting the sensor and centre of the magnet.

a. Draw a sketch of the experimental arrangement.

b. Tabulate the values of $U_H$ for $\theta$ in the range of $-90^\circ \le \theta \le 90^\circ$.

c. Verify the proportionality between $U_H$ and $\sin\theta$ by using a graph plotted in an appropriate way.

**[2.5 pts]**

###### 3. Study of the dependence of $\Delta R / R$ on $B$, for $\vec{B}$ perpendicular to the sample plane.

The MRE is significant only at sufficiently strong magnetic field. So it is recommended to use a magnetic field as strong as possible.

a. Draw a sketch of the experimental arrangement and explain the principle of the measurements.

b. Perform measurements and tabulate the data.

c. Assume that $\Delta R / R \sim B^k$, determine the value of $k$ by using a graph plotted in an appropriate way. Estimate the maximal deviation of the obtained value of $k$.

**[4.0 pts]**

###### 4. Determination of the relative permeability $\mu$ of the ferromagnetic materials of the core of the toroidal coil

Determine the relative permeability $\mu$ of the core material at the measured current intensity $I$ by following this guidance step by step:

- Put the Hall sensor into the gap on the core.
- Connect the coil and an ammeter to *battery 2*. Use only the inputs COM and 20A of the ammeter in this case.
- Measure the current $I$ in the coil and the magnetic field $B$ in the gap.
- Calculate the value of $\mu$.

You can use the following relation:

$$\frac{B\,(\rho - d)}{\mu} + B\,d = 4\pi\cdot 10^{-7}\,N\,I$$

**[1.5 pts]**

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1rEjE481wZfPcB4nfl8SNy2T7pErzOgfe/view)
**Topic:** [[Magnetism]], [[Electromagnetism]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Magnet (object)|Magnet]], [[Coil (object)|Coil]]


<div class="qlang-split" data-lang="it"></div>

### Effetto Hall e effetto magnetoresistività

Apparecchi e materiali

1. Tre multimetri digitali.
2. Un sensore Hall con quattro pin MNPQ (M in filo nero, N in filo giallo, P in filo rosso, Q in filo verde), fissato su un circuito stampato, una coppia di conduttori che portano a M, N; un altro paio di conduttori che portano a P, Q.
3. Magnete permanente a forma di disco, di raggio $r = 14\ \text{mm}$, di spessore $t = 4\ \text{mm}$. La magnetizzazione è perpendicolare alla superficie del disco. Il valore $B_0$ (in Tesla) del campo magnetico alla superficie del magnete è scritto sulla superficie del magnete.

Durante l'esperimento, tenete il magnete lontano dal sensore Hall ogni volta che non lo utilizzate.
4. Una bobina di $N$ giri è avvolta su un nucleo a forma di toroide, realizzato in materiale ferromagnetico. Il diametro medio del nucleo è $\rho = 25\ \text{mm}$. Il toroide ha un intervallo di larghezza $d = 3\ \text{mm}$.
5. Una scatola con due celle secche indipendenti da 1,5 V. La cella collegata in serie a una resistenza variabile da 10 kΩ, denominata *batteria 1*, viene utilizzata per fornire la corrente al sensore Hall. La seconda cella, denominata *batteria 2*, viene utilizzata per fornire la corrente alla bobina solo durante la misura.
6. Un prolungatore con un piccolo buco al centro.
7. Un pezzo di plexiglass con un piccolo ago fissato su di esso.
8. Un supporto per il circuito stampato con il sensore Hall.
9. Un piccolo pezzo di plastica utilizzato per fissare il sensore sull'ago.
10. Conduttori con una resistenza trascurabile.
11. - Carta grafica.

> [fig.] Figura 1  Disegno dell'apparecchio
> ![[APhO_2004_exp_Q1_p1_f1.png]]
> articoli numerati: 1  multimetro digitale; 2  prolungatore; 3  magnete; 4  circuito stampato con il sensore Hall; 5  scatola con le due celle secche; 6  plexiglass con l'ago; 7  carta grafica; 8  tenitore per il circuito stampato; 9  montatura del sensore. Un resistore variabile di 10 kΩ è indicato in alto a sinistra.

#### # Esperimento

##### I. Introduzione

###### 1. L'effetto magnetoresistività e l'effetto Hall.

Si consideri un campione di conduttore a forma di parallelepiped di lunghezza $a$, larghezza $b$ e spessore $c$ (vedi figura 2). La corrente $I$ scorre lungo la direzione $a$. Se il campione è collocato in un campo magnetico $\vec{B}$, il campo magnetico influisce sulla resistenza $R$ del campione. Questo effetto è chiamato effetto ** magnetorresistenza (MRE) **. Se $\Delta R$ è l'aumento della resistenza $R$ del campione, $R_0$ è il valore della resistenza in assenza di un campo magnetico, allora la magnitudine del MRE è definita dal rapporto $\Delta R / R_0$.

> [!figura] Figura 2  Geometria campione
> ![[APhO_2004_exp_Q1_p2_f1.png]]

Supponiamo che il campo magnetico applicato sia uniforme e che il vettore di induzione magnetica $\vec{B}$ sia parallelo alla superficie superiore del campione come mostrato nella figura 2. Se i vettori di carica del campione sono elettroni, la forza di Lorentz li piegarà verso l'alto e la superficie superiore del campione sarà carica negativa. Questo effetto è chiamato **effetto Hall**. La tensione che appare tra gli elettrodi M (sulla superficie superiore) e N (sulla superficie inferiore) è chiamata **tensione di sala**. Questo può essere misurato con un voltmeter.

La differenza di potenziale misurata tra gli elettrodi M e N è data da

$$U_{MN} = U_H + V_{MN} \tag{1}$$

se $U_H$ è la tensione Hall, $V_{MN}$ è la differenza potenziale in assenza di campo magnetico a causa di alcuni effetti indesiderati (l'elettrodo M e N non sono esattamente opposti tra loro, ecc.).

Normalmente, la tensione di Hall $U_H$ è proporzionale a $I\,B\,\sin\theta$, e la magnitudine del MRE è proporzionale a $B^2\sin^2\theta$, dove $\theta$ è l'angolo tra il vettore $\vec{B}$ e la direzione corrente. Ma quando il campione ha una forma non regolare, la dipendenza di $U_H$ e $\Delta R / R$ da $B\sin\theta$ può essere più complicata.

L'effetto Hall viene utilizzato per fabbricare un dispositivo per misurare il campo magnetico. Questo dispositivo è chiamato sensore **Hall**. Per un sensore Hall, l'espressione $U_H$ è data da:

$$U_H = \alpha\,I\,B\,\sin\theta \tag{2}$$

dove $\alpha$ è, per definizione, la sensibilità del sensore Hall.

##### II. Il campione di misurazione

Il campione di misurazione in questo esperimento è un sensore commerciale Hall. È costituito da una piccola sottile piastra semiconduttrice coperta di plastica, con 4 elettrodi ohmici, che portano ai pin M, N, P, Q (vedi figura 3). È usato in questo esperimento per studiare sia l'effetto MRE che l'effetto Hall.

> [fig.] Figura 3  Sensore della Sala Commerciale (disegno del pin)
> ![[APhO_2004_exp_Q1_p2_f2.png]]

Mettiamo il sensore nel campo magnetico e usiamo un ohmmeter per misurare la resistenza tra i pin M e N, possiamo dedurre la magnitudine del MRE. Impostare una corrente ($I \sim 1\ \text{mA}$) che scorre da P a Q, possiamo studiare l'effetto Hall misurando la tensione tra M e N con un milivoltmeter.

###### # III. Esperimento

###### 1. Determinazione della sensibilità $\alpha$ del sensore Hall

Impostare la corrente attraverso il sensore $I \sim 1\ \text{mA}$. Tenere la distanza tra il sensore e il centro della superficie del magnete $y = 2\ \text{cm}$. Adeguare l'orientamento del magnete per ottenere il valore massimo della tensione Hall. Misurare la tensione Hall con alcuni valori di $I$ e determinare la sensibilità $\alpha$ del sensore Hall.

Per un magnete con forma di disco di raggio $r$, spessore $t$, il campo magnetico in un punto situato sul suo asse a distanza $y$ dal centro della superficie del disco con $y \gg t$ è indicato con l'espressione

$$B(y) = \frac{1}{2}B_0\left[\frac{y+t}{\sqrt{(y+t)^2 + r^2}} - \frac{y}{\sqrt{y^2 + r^2}}\right] \tag{1}$$

dove $B_0$ è l'induzione magnetica alla superficie del magnete. Il valore di $B_0$ è indicato sulla superficie del magnete.

**[2,0 pts]**

###### 2. Studi sulla dipendenza di $U_H$ da un angolo $\theta$ tra $\vec{B}$ e la direzione corrente.

Impostare la corrente attraverso il sensore $I \sim 1\ \text{mA}$. Tenere la distanza tra il sensore e il centro della superficie del magnete $y = 2\ \text{cm}$. Mettete il magnete sul prolungatore in modo che il piano del magnete sia perpendicolare alla linea che collega il sensore e il centro del magnete.

a. Disegna uno schema dell'arrangimento sperimentale.

b. Tabulare i valori di $U_H$ per $\theta$ nell'intervallo di $-90^\circ \le \theta \le 90^\circ$.

c. Verificare la proporzionalità tra $U_H$ e $\sin\theta$ utilizzando un grafico tracciato in modo appropriato.

**[2,5 pts]**

###### 3. Studi sulla dipendenza di $\Delta R / R$ da $B$ per $\vec{B}$ perpendicolare al piano del campione.

Il MRE è significativo solo a un campo magnetico sufficientemente forte. Quindi si consiglia di usare un campo magnetico il più forte possibile.

a. Disegnare uno schema dell'arredamento sperimentale e spiegare il principio delle misurazioni.

b. Eseguire misure e tabulare i dati.

c. Supponiamo che $\Delta R / R \sim B^k$, determinare il valore di $k$ utilizzando un grafico tracciato in modo appropriato. Calcolare la deviazione massima del valore ottenuto di $k$.

**[4.0 pts]**

###### 4. Determinazione della permeabilità relativa $\mu$ dei materiali ferromagnetici del nucleo della bobina toroidale

Determinare la relativa permeabilità $\mu$ del materiale di base all'intensità di corrente misurata $I$ seguendo step by step questa guida:

- Metti il sensore Hall nel vuoto del nucleo.
- Collegare la bobina e un ammetro alla batteria 2 MSK1/>. In questo caso utilizzare solo le entrate COM e 20A dell'ampilometro.
- Misurare la corrente $I$ nella bobina e il campo magnetico $B$ nel gap.
- Calcolare il valore di $\mu$.

È possibile utilizzare la seguente relazione:

$$\frac{B\,(\rho - d)}{\mu} + B\,d = 4\pi\cdot 10^{-7}\,N\,I$$

**[1,5 pts]**

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1rEjE481wZfPcB4nfl8SNy2T7pErzOgfe/view)
**Topic:** [[Magnetism]], [[Electromagnetism]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Magnet (object)|Magnet]], [[Coil (object)|Coil]]



<span class="atom-split" id="q02" data-atom="q02" data-title="APhO 2004 — Sperimentale — Quesito 2" data-tags="kg/prova,paese/Asia,comp/APhO,topic/circuits,argomento/elettromagnetismo,difficolta/4,multidisciplina/mono,object/resistor,object/capacitor,object/inductor"></span>

<div class="qlang-switch" data-default="en"></div>



### Black box

#### Apparatus and materials

1. A double beam oscilloscope.
2. A function generator capable to generate sine, triangle and square waves over the 0.02 Hz to 2 MHz range.
3. A "Black box" with two groups of connectors: the ABCD group and A'B'C'D' group. Besides, there are also two connectors for the standard resistor $R_n = 5\ \text{k}\Omega$, which is isolated from the two groups.
4. Conductors of negligible resistance.
5. Graph paper.

> **Warning:** You are not allowed to open the black box.

#### Experiment

In the black box, there are two groups of passive elements (that are elements of the types: resistor $R$, capacitor $C$ or inductor (induction coil) $L$). The first group consists of three elements $Z_1$, $Z_2$, $Z_3$, connected in a star circuit as shown in Figure 1. The elements are led out to the connectors A, B, C and D, with A — the common connector of the ABCD group. The second group consists of three elements $Z'_1$, $Z'_2$, $Z'_3$ connected in the same manner to connectors A', B', C' and D', with A' — the common connector of the A'B'C'D' group (see Figure 2).

> [!figure] Figure 1 — First group (ABCD star)
> ![[APhO_2004_exp_Q2_p1_f1.png]]

> [!figure] Figure 2 — Second group (A'B'C'D' star)
> ![[APhO_2004_exp_Q2_p1_f2.png]]

1. By using the oscilloscope and the function generator, determine the type and the parameter (that is resistance of $R$, capacity of $C$, inductivity of $L$) of each of the elements $Z_1$, $Z_2$, $Z_3$ and $Z'_1$, $Z'_2$, $Z'_3$.

   **[5.0 pts]**

2. Connect five points B, C, B', C' and D' together. We obtain a new black box with terminals DD'A' (called DD'A').

   a. Draw the electric circuit of this black box.

   b. Apply a sine wave from the generator to connectors D and A'. Plot a graph of the ratio of the voltage amplitudes
   $$K = \frac{U_{D'A'}}{U_{DA'}}$$
   and the phase shift $\varphi$ between these voltages as functions of the frequency $f$ of the signal.

   c. The graphs possess a particular point at a certain frequency $f_0$. Determine the value of the frequency $f_0$, the ratio
   $$K = \frac{U_{D'A'}}{U_{DA'}}$$
   and the phase shift $\varphi$ at this frequency.

   d. Derive the relation between $f_0$ and the parameters of the elements in the black box and calculate the values of $f_0$.

   **[5.0 pts]**

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1sNQtX47X5S6mbhrXZ51AsfPxM_IhJSK_/view)
**Topic:** [[Circuits]], [[Electromagnetism]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Resistor (object)|Resistor]], [[Capacitor (object)|Capacitor]], [[Inductor (object)|Inductor]]


<div class="qlang-split" data-lang="it"></div>

### # scatola nera

Apparecchi e materiali

1. Un osciloscopio a doppio raggio.
2. Un generatore di funzioni in grado di generare onde sinusoide, triangolari e quadrate nell'intervallo da 0,02 Hz a 2 MHz.
3. Una "scatola nera" con due gruppi di connettori: il gruppo ABCD e il gruppo A'B'C'D'. Inoltre, sono presenti anche due connettori per la resistenza standard $R_n = 5\ \text{k}\Omega$, che è isolata dai due gruppi.
4. Conduttori di resistenza trascurabile.
5. Carta grafica.

> **Avvertimento: ** Non è consentito aprire la casella nera.

#### # Esperimento

Nella scatola nera, ci sono due gruppi di elementi passivi (che sono elementi di tipo: resistore $R$, condensatore $C$ o induttore (coil di induzione) $L$). Il primo gruppo è costituito da tre elementi $Z_1$, $Z_2$, $Z_3$, collegati in un circuito stellare come mostrato alla figura 1. Gli elementi sono condotti ai connettori A, B, C e D, con A  il connettore comune del gruppo ABCD. Il secondo gruppo è costituito da tre elementi $Z'_1$, $Z'_2$, $Z'_3$ collegati allo stesso modo ai connettori A', B', C' e D', con A'  il connettore comune del gruppo A'B'C'D' (vedere figura 2).

> [figura] Figura 1  Primo gruppo (aereo ABCD)
> ![[APhO_2004_exp_Q2_p1_f1.png]]

> [figura] Figura 2  Secondo gruppo (a'B'C'D' stella)
> ![[APhO_2004_exp_Q2_p1_f2.png]]

1. Utilizzando l'oscilloscopio e il generatore di funzioni, determinare il tipo e il parametro (cioè resistenza di $R$, capacità di $C$, induttività di $L$) di ciascuno degli elementi $Z_1$, $Z_2$, $Z_3$ e $Z'_1$, $Z'_2$, $Z'_3$.

**[5,0 pts]**

2. Collegare i cinque punti B, C, B', C' e D' insieme. Abbiamo ottenuto una nuova scatola nera con i terminali DD'A' (chiamato DD'A').

   a. Disegna il circuito elettrico di questa scatola nera.

   b. Applicare un'onda sinusa dal generatore ai connettori D e A'. Tracciare un grafico del rapporto delle amplitudini di tensione
   $$K = \frac{U_{D'A'}}{U_{DA'}}$$
e il passaggio di fase $\varphi$ tra tali tensioni come funzioni della frequenza $f$ del segnale.

   c. I grafici hanno un punto particolare a una certa frequenza $f_0$. Determinare il valore della frequenza $f_0$, il rapporto
   $$K = \frac{U_{D'A'}}{U_{DA'}}$$
e il cambiamento di fase $\varphi$ a questa frequenza.

   d. Derivare la relazione tra $f_0$ e i parametri degli elementi nella casella nera e calcolare i valori di $f_0$.

**[5,0 pts]**

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1sNQtX47X5S6mbhrXZ51AsfPxM_IhJSK_/view)
**Topic:** [[Circuits]], [[Electromagnetism]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Resistor (object)|Resistor]], [[Capacitor (object)|Capacitor]], [[Inductor (object)|Inductor]]
