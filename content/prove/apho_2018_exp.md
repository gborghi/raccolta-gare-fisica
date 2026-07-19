---
title: APhO 2018 — Sperimentale
tipo: prova
tags:
  - kg/prova
  - paese/asia
  - comp/APhO
---
<div class="atom-reader" data-prova="apho_2018_exp"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="APhO 2018 — Sperimentale — Quesito 1" data-tags="kg/prova,paese/Asia,comp/APhO,topic/magnetism,argomento/elettromagnetismo,difficolta/4,multidisciplina/multi,object/coil,object/resistor,object/magnet,object/battery"></span>

<div class="qlang-switch" data-default="en"></div>



**Giant Magnetoresistance (GMR)**

### I. Introduction

Magnetoresistance is the dependence of electrical resistance of a sample on the strength of an external magnetic field. It is characterized by the following formula:

$$\delta(B) = \frac{R(B) - R(0)}{R(0)} \tag{1}$$

where $R(B)$ is the resistance of the sample in the magnetic field $B$, and $R(0)$ corresponds to $B = 0$; $\delta(B)$ is called the relative change of resistance.

There exist several "normal" magnetoresistance effects whose relative change of resistance is small at relatively weak magnetic field, typically in the order of less than several percent. For instance, one of the magnetoresistance effects may arise from the direct action of magnetic field on electric current. Due to the Lorentz force, the flow of the charge carriers is deflected, leading to the effective reduction in the mobility. Hence, the electric conductivity will decrease with increasing magnetic field, and the resistance of the sample will increase. It occurs in a relatively large range of change in the strength of the magnetic field.

Giant magnetoresistance arises from the interaction of the spin of conduction electrons with the magnetic moments in the solid. This effect consists of the reduction of the electrical resistance in multilayer structures composed of alternating ferromagnetic and non-ferromagnetic layers with thickness of several nanometers when an external magnetic field is applied. The change of the electric resistance is large in relatively weak field; therefore it is called Giant Magneto Resistance (GMR) effect. Due to the practical significance of GMR, its discoverers, Albert Fert and Peter Grünberg, were awarded the Nobel Prize in Physics, in 2007.

In such a multilayer, two adjacent ferromagnetic layers have spontaneous magnetization with opposite directions in the absence of an external magnetic field. Let us suppose that scattering of conduction electrons with magnetic moments of the solid is weak for electrons with spin parallel to the magnetization direction and is strong for electrons with spin antiparallel to the magnetization direction. Thus, both the parallel-spin and antiparallel-spin electrons are scattered strongly within one of the ferromagnetic layers. Therefore, in this case the total resistivity of the multilayer is high (see Fig. 1a).

If a sufficiently strong magnetic field is applied parallel to the plane of the layers, then all ferromagnetic layers are magnetized in the same direction of the magnetic field. As a consequence, the electrons with spin parallel to the magnetization direction pass through the structure almost without scattering on magnetic moments. On the contrary, the electrons with spin antiparallel to the magnetization are scattered strongly within the ferromagnetic layers. Since conduction occurs in parallel for the two spin channels, the total resistance of the multilayer is determined mainly by the highly-conductive parallel-spin electrons and appears to be low (see Fig. 1b). In Figure 1, $R$ denotes the high resistance of the layer with strong scattering, and $r$ the low resistance of the layer with weak scattering. $R_0$ is the resistance of the structure in a zero magnetic field, and $R_B$ is that in a sufficiently strong magnetic field which makes the two adjacent ferromagnetic layers magnetized in the same direction. The equivalent electrical model (so-called "two resistor" model) of the GMR effect is shown at the bottom of Figure 1. The circuit of the model represents one GMR element.

![Figure 1](_attachments/APhO_2018_exp/APhO_2018_exp_p2_f1.png)

**Figure 1:** GMR effect model. (1) magnetization; (2) electron path; (3) electron spin

One of the applications of GMR is the magnetic sensor, also called magnetometer, which can be used to measure the strength of an applied magnetic field. A widely used GMR magnetic sensor consists of four GMR elements connected in a Wheatstone bridge as shown in Fig. 2b. Each GMR element consists of a multilayer structure as described in the above model. Two of these elements are shielded to prevent the applied magnetic field from reaching them, hence they are not sensitive to the external magnetic field. The magnetic sensor is packaged in an 8-pin device as shown in Fig. 2a. The supply voltage is connected to pins 4 and 8. The signal output is taken from pins 1 and 5. This is the normal way of operation. However, during solving the problem, you can connect the power supply to any other pair of pins without destroying the sensor. The axis of sensitivity of the sensor is indicated by the arrow on Fig. 2a. The magnetic sensor is not sensitive to an applied magnetic field which is perpendicular to this axis.

![Figure 2](_attachments/APhO_2018_exp/APhO_2018_exp_p2_f2.png)

**Figure 2**

We call the resistance of the elements $a$, $b$, $c$, $d$ as shown in Fig. 2b.

Please note that resistance of the elements can be considered not dependent on current.

To fabricate sensors with different sensitivities, an integrated flux concentrator is used. Thanks to it, the magnetic field acting on the elements inside the sensor is stronger than the applied magnetic field. Due to the presence of ferromagnetic materials in the flux concentrator and in the magnetic layers of the multilayer structure, there exists hysteresis in electrical characteristics of the sensor.

The aims of the experiment are:

1. Investigation of the GMR effect.
2. Investigation of the GMR magnetic sensor.
3. Study of some applications of the GMR magnetic sensor.

### II. Apparatus

![Figure 3](_attachments/APhO_2018_exp/APhO_2018_exp_p4_f1.png)

**Figure 3**

| # | Item | # | Item |
|---|------|---|------|
| 1 | Leads | 12 | Platform with longitudinal rail |
| 2 | Rheostat | 13 | Magnetic sensor |
| 3 | 220-V AC supply cord | 14 | Sensor holder |
| 4 | Battery *) | 15 | Round table graduated in degrees, fixed on the support with short pole (not seen in the picture) |
| 5 | Flat coil | 16 | Sensor connection box *) |
| 6 | Adjustable DC current source (with its adapter [6a]) | 17 | Connection box |
| 7 | Support with tall pole | 18 | Ferromagnetic sheets |
| 8 | Circular coil | 19 | Plate of permanent magnet |
| 9 | Printed circuit boards with buried electric circuit | 20 | Multimeters *) (3 pcs) |
| 10 | Transverse rail | 21 | Double-filament electric bulb |
| 11 | Turntable | | |

*) See more details in the Appendix

**Warning:** The 220 V AC voltage is used only for the table lamp (it is not shown in the Figure 3) and the adapter (6a) of the adjustable DC current source. Plugging any other device to this voltage is strictly forbidden.

### III. Experiment

#### A. Understanding of magnetic fields (1.0 point)

In this experimental problem, the magnetic field may be

- the magnetic field created by
  - a circular coil carrying an electric current;
  - a flat coil carrying an electric current;
  - a plate of permanent magnet.
- the magnetic field of the Earth.

**1. Understanding of magnetic field created by a circular coil**

The circular coil [8] has an average diameter $d = 10.0$ cm and the number of turns $N = 500$. The magnetic field created by this coil at its center when a current $I$ flows in it can be approximated to that of a circular current loop with radius equal to the average radius of the circular coil and a current equal to $500\,I$.

**A.1** *(0.5 pt)* The magnitude of the magnetic field at the center of the circular coil can be written in the form $B = kI$. Calculate the numerical value of $k$ if $B$ is measured in mT and $I$ — in mA.

**2. Understanding of the Earth's magnetic field**

The Earth's magnetic field exists everywhere. It can be considered as a uniform magnetic field in a large region of space around each given point. The magnitude of the horizontal component of the Earth's magnetic field is denoted as $B_h$.

**A.2** *(0.5 pt)* Write down the expression for the magnitude $B_\beta$ of the Earth's magnetic field measured in the horizontal plane and in the direction making an angle $\beta$ with the horizontal component of the Earth's magnetic field in terms of $\beta$ and $B_h$.

*Note: Always take into account the effect of the Earth's magnetic field on the magnetic measurements.*

#### B. Investigation of the GMR effect using a GMR magnetic sensor (7 points)

*Note: This part is relatively independent of the remaining parts. You can also solve parts C and D without having to solve part B.*

In this part, we investigate the dependence on the external magnetic field of the resistance of each element inside the magnetic sensor. The circular coil [8] stands on the longitudinal rail. The sensor holder [14] is screwed on the round plate [15] in the horizontal position, with the magnetic sensor [13] at the center of the circular coil, and the sensor axis perpendicular to the plane of the coil. By changing the electric current in the coil, we vary the magnetic field acting on the sensor. Be sure that the axis of sensitivity of the magnetic sensor is oriented along the West–East direction (marked on the experiment table) so that the Earth's magnetic field does not affect your measurements. Note that the West–East direction has been determined locally using a magnetic compass.

The magnetic sensor is supplied by the battery [4]. The circular coil is fed by current from the adjustable DC current source [6].

**1. Determination of resistance of GMR elements**

**a. Resistance of the elements at $B = 0$.**

Set the current in the circular coil at $I = 0$.

**B.1** *(1.25 pt)* Sketch the diagrams of the experiment and find the expressions for calculating the resistance of each element in terms of measurement data.

**B.2** *(1.25 pt)* Perform the measurements and calculations to determine the resistance of the elements $a$, $b$, $c$ and $d$ at $B = 0$.

**b. Resistance of the elements at maximum external magnetic field.**

Set the current $I$ in the coil to the highest possible value.

**B.3** *(0.5 pt)* Perform the measurements and calculations to determine the resistance of the elements $a$, $b$, $c$ and $d$ in the maximum external magnetic field.

**c. Properties of the elements.**

**B.4** *(0.25 pt)* Indicate which elements are sensitive to the magnetic field.

**2. Characteristics of a GMR element**

In this section, you will study the properties of one of the two GMR elements which are not shielded. Choose one of such GMR elements and determine $\delta(B)$ — the dependence on the external magnetic field of the relative change of resistance.

**B.5** *(0.75 pt)* Give the name of the chosen GMR element. Sketch diagrams of the experiment and find the expressions for calculating $\delta(B)$ in terms of measurement data.

**B.6** *(1.25 pt)* Perform the measurements and calculations to determine $\delta(B)$ with the external magnetic field $B$, in the range from zero to the maximum possible value. Fill the table with the values of the measured quantities and determine $\delta(B)$ corresponding to the values of the current $I$ and the external magnetic field $B$.

**B.7** *(0.5 pt)* Plot on a graph $\delta(B)$ as a function of the external magnetic field $B$ (Graph 1).

**B.8** *(0.25 pt)* Determine the average slope $\alpha = \dfrac{\triangle\delta(B)}{\triangle B}$ of the curve $\delta(B)$ in the region in which $\delta(B)$ depends strongly on $B$.

**B.9** *(0.25 pt)* Determine the GMR coefficient $\delta = \dfrac{\triangle R_{max}}{R(0)}$ of the element. Here $\triangle R_{max}$ is the maximum change of the resistance in a magnetic field.

**B.10** *(0.75 pt)* Find the value of the resistances $R$ and $r$ of the GMR element according to the model given in Figure 1 and the ratio $\gamma = \dfrac{r}{R}$.

#### C. Study of GMR magnetic sensor (6 points)

In this part, we investigate the most important characteristics of the magnetic sensor [13]. The circular coil [8] stands on the longitudinal rail [12]. The sensor holder [14] is screwed on the round plate [15] in the horizontal position, such that the sensor is at the center of the circular coil, and the sensor axis is perpendicular to the plane of the coil. By changing the electric current in the coil, we vary the magnetic field acting on the sensor. Be sure that the axis of sensitivity of the magnetic sensor is oriented along the East–West direction so that the Earth's magnetic field does not affect your measurements.

**1. Characteristics of sensor output signal**

The magnetic sensor is supplied by the battery [4] at maximum voltage. The supply voltage is connected to pins 4 and 8. The circular coil is fed by the adjustable DC current source [6].

a. First, set the current $I$ in the coil to the highest possible value. The voltage between pins 1 and 5 is the output signal $S$ of the sensor.

b. While gradually decreasing the current in the coil to $I = 0$, read the value of $S$ corresponding to each value of $I$.

c. Change the direction of current $I$ in the coil. While gradually increasing the current to its maximum value, read the value of $S$ corresponding to each value of $I$.

d. While gradually decreasing the current to $I = 0$, read the value of $S$ corresponding to each value of $I$.

e. Change the direction of current $I$ in the coil. While gradually increasing the current to its maximum value, read the value of $S$ corresponding to each value of $I$.

**C.1** *(1.0 pt)* Fill the table with the values of $S$ corresponding to the values of the current $I$ in the coil and the external magnetic field $B$ during the above measuring process.

**C.2** *(1.0 pt)* Plot the graph $S(B)$ of the output signal $S$ as a function of the external magnetic field $B$ (Graph 2).

**C.3** *(0.5 pt)*
1. Circle the region of saturation in the curve $S(B)$ and label it with "S".
2. Circle the region of linearity in the curve $S(B)$ and label it with "L". For this region, find the average value of the slope $m = \dfrac{\triangle S}{\triangle B}$.

**C.4** *(0.5 pt)* From the graph $S(B)$, determine the coercive field $B_C$, which is the external magnetic field needed to make $S$ minimum after being magnetized in the opposite direction with a saturation field.

*Note: In the case you want to use the linear region of the curve $S(B)$, a small plate of permanent magnet [19] is provided. Just place the permanent magnet on the sensor holder [14], near the sensor [13], and change the relative position of the magnet to the sensor to choose the working point on the curve. Once the suitable working point is found, you can fix the magnet on the holder by means of adhesive tape. This process is called biasing.*

**2. Dependence of output signal on supply voltage**

The magnetic sensor is supplied by the battery [4]. By connecting the sensor to different sockets on the battery box, you can change the supply voltage $E$. The current $I$ in the circular coil is set at a value corresponding to the linear region on the curve $S(B)$.

**C.5** *(0.25 pt)* Fill the table with the values of $S$ corresponding to the values of $E$.

**C.6** *(0.25 pt)* Plot a graph of $S$ as a function of $E$.

**C.7** *(0.5 pt)* Derive an analytical expression relating the output signal $S$ of the sensor with the slope $\alpha$ of the GMR element found in B.8, the supply voltage $E$ and the applied magnetic field $B$. Here, we assume that $\alpha$ is the same for the two elements and there is no hysteresis in the characteristics of the elements. Besides, we assume here that in the absence of a magnetic field, values of resistance of all 4 elements are the same.

**3. Study of effects of a flux concentrator**

The integrated flux concentrator inside the magnetic sensor consists of two thin-film ferromagnetic structures with thickness in the order of micrometers, with length in the order of some hundreds of micrometers. The purpose of the flux concentrator is to magnify the magnetic field in the gap between the structures.

In order to study the effect of a flux concentrator on a magnetic sensor, we use an external flux concentrator made of two ferromagnetic sheets (as shown in Fig. 4) placed near the two ends of the sensor, with length $L_2$, and mutual distance $L_1$.

![Figure 4](_attachments/APhO_2018_exp/APhO_2018_exp_p9_f1.png)

**Figure 4.** Diagram of the flux concentrator

Once the sensor with a flux concentrator is put in a uniform magnetic field of magnitude $B_0$, the effective magnetic field acting on the sensor is $B$. In a not very large range of change of $L_1$, $B$ can be approximately found by using the empirical formula:

$$\frac{B}{B_0} = n\frac{L_2}{L_1} + 1 \tag{2}$$

You are asked to perform an experiment with the magnetic sensor and the two ferromagnetic sheets [18] to determine the value of $n$ in formula (2).

**C.8** *(0.25 pt + 0.75 pt = 1.0 pt)* Which magnetic field in the following will you use in this experiment?

- **A.** The field of the circular coil carrying an electric current
- **B.** The field of the flat coil carrying an electric current
- **C.** The field of the plate of permanent magnet
- **D.** The magnetic field of the Earth

Sketch diagrams of the experiment and find expressions to determine the value of $n$ in terms of measurement data.

**C.9** *(0.5 pt)* Perform the experiment to find $B/B_0$ for different values of $L_1$ and fill the table with the measurement data.

**C.10** *(0.5 pt)* Plot a graph of $B/B_0$ as a function of an appropriate variable to determine the value of $n$ (Graph 4). Give the value of $n$.

#### D. Applications of GMR magnetic sensors (6 points)

In this part, we consider some applications of the magnetic sensor.

**1. Measuring the Earth's magnetic field**

You are asked to use the magnetic sensor to determine some parameters of the Earth's magnetic field. Some extra graph sheets are provided, in case you need them for solving this question.

**a. Magnitude of the horizontal component of the Earth's magnetic field**

Fix the round plate [15] in the horizontal plane. The sensor holder [14] is screwed on the round plate. By rotating the sensor holder on the round plate, you can determine the component in the horizontal plane of the Earth's magnetic field in different directions of the sensor axis.

**D.1** *(0.5 pt)* Sketch diagrams of the experiment and find expressions for calculating the magnitude $B_h$ of the horizontal component of the Earth's magnetic field in terms of measurement data.

**D.2** *(0.25 pt)* Perform the measurements and calculations to find $B_h$.

**b. Magnitude of the Earth's magnetic field and magnetic inclination**

The magnetic inclination is defined as the angle $\theta$ between the Earth's magnetic field vector $\vec{B}_{Earth}$ and the horizontal plane.

Fix the round plate [15] to the tall pole [7], with the round plate in the vertical plane containing the South–North direction. The sensor holder [14] is screwed on the round plate. By rotating the sensor holder on the round plate, you can determine the component of the Earth's magnetic field in different directions of the sensor axis.

**D.3** *(0.75 pt)* Sketch diagrams of the experiment and find expressions for calculating the Earth's magnetic field $B_{Earth}$ and the magnetic inclination $\theta$ in terms of measurement data.

**D.4** *(0.5 pt)* Perform measurements and calculations to find $B_{Earth}$ and $\theta$.

**2. DC wattmeter**

In this section, you use the magnetic sensor to form the circuit of a wattmeter. The flat coil [5] wraps around the sensor. This flat coil is connected in series with the load, so the electric current $I$ in the flat coil is the same as that in the load. The current $I$ in the flat coil creates the magnetic field which acts on the sensor, and the voltage $U$ across the load is used to supply the sensor.

The output signal $S$ of the sensor is used to determine the power $P$ dissipated in the load.

The double-filament electric bulb [21] is used as the load. By using the three terminals of the bulb in different ways, you may obtain several values of the load's resistance $R_L$.

In many cases, the Wheatstone bridge of the magnetic sensor is unbalanced even when there is no external magnetic field acting on it. This is due to a small difference in the resistance of the elements and remanence of the ferromagnetic layers. In this case, you need to balance the bridge before using it in the circuit of the wattmeter. The sensor holder [14] is screwed on the round plate [15] in the horizontal position. The sensor is supplied by the battery [4] with the highest voltage. Orient the sensor perpendicular to the Earth's magnetic field. Observe the output signal $S$ on a multimeter. If $S = 0$, the bridge is balanced, and you do not need to do anything else. If $S \neq 0$, the bridge is unbalanced, and you need to balance it. Connect the rheostat [2] in parallel with one of the elements $a$, $b$, $c$, and $d$, for which once the rheostat is connected to it, $S$ decreases its magnitude. Adjust the rheostat to reduce $S$ to zero. Now the bridge is balanced. This process is called balancing.

In some cases, the use of the rheostat cannot help to balance the bridge. In such cases, it suffices to rotate the sensor holder by a small angle such that the output signal $S$ is reduced to $S = 0$.

**D.5** *(0.5 pt)* Sketch the diagram of the wattmeter circuit together with the load and the multimeters used in the measurements.

Use the Connection Box [17] to build the circuit of the wattmeter according to your diagram. Vary the resistance $R_L$ of the load and adjust the output of the DC current source [6] to change the voltage $U$ across the load.

**D.6** *(0.75 pt)* Fill the table with the values of the sensor output signal $S$ corresponding to the values of $I$ and $U$, and of $P = U \cdot I$.

**D.7** *(0.5 pt)* Plot a graph of $P$ as a function of $S$ (Graph 5).

The curve $P = f(S)$ is called the calibration curve of the wattmeter.

**D.8** *(0.25 pt)* Find the form of the function $P = f(S)$ of the calibration curve and determine values of its coefficients.

**3. Detection of buried electrical circuits**

In this section, you are asked to use the magnetic sensor to form a device for finding the shapes of two buried electric circuits. The electric circuit is made on the hidden surface of a printed circuit board. A grid sheet attached on the reversed surface of the printed circuit board serves as a system of coordinates.

You may carry out this experiment in the following way. Set the round plate [15] in the horizontal position and fixed to the short pole. The sensor holder [14] is screwed on the round plate. The printed circuit board with the buried electric circuit [9] lies flat on the turntable [11]. The turntable is free to rotate in the horizontal plane, and also to move in two perpendicular directions along the rails [10] and [12]. Connect the conductors of the printed circuit board to the adjustable DC current source [6], with the red conductor at the positive terminal. Adjust the DC current source to choose a value of the current in the circuit. By moving the printed circuit board relatively to the magnetic sensor [13], and looking at the change in the output signal $S$ of the sensor, you can detect the position and the shape of the buried circuit and also the direction of the current in the buried circuit. Some larger scale Grid Sheets are provided, in case you need them in solving this question.

**D.9** *(2.0 pt)* Draw a diagram of the buried electric circuits together with the direction of the current in them on the grid sheets in the Answer Sheet.

### Appendix

**1. Instructions for the multimeter**

![Figure A1](_attachments/APhO_2018_exp/APhO_2018_exp_p12_f1.png)

**Figure A1**

| # | Item | # | Item |
|---|------|---|------|
| 1 | Display | 7 | Measuring terminal (mA) |
| 2 | REL Key | 8 | Measuring terminal (A) |
| 3 | HOLD Key | 9 | Function Selector Switch |
| 4 | Hz/DUTY Key | 10 | RESET Key |
| 5 | Measuring terminal (COM) | 11 | SELECT Key |
| 6 | Measuring terminal (V/Ω/Hz) | 12 | RANGE Key |

- To avoid complications do not use the following keys: REL Key [2], HOLD Key [3], Hz, DUTY Key [4], RESET Key [10].
- To power on the multimeter and begin a measurement, rotate the Function Selector Switch [9] to the desired function.
- Use the Measuring terminal (V/Ω/Hz) [6] and Measuring terminal (COM) [5] for measuring voltage and resistance.
- Use the Measuring terminal (A) [8] and Measuring terminal (COM) [5] and Function A for measuring current.
- The multimeter is automatically switched off about 30 minutes after power on. Rotate the Function Selector Switch to OFF and then back to the function to continue the measurement.

To avoid automatic switching off, press the SELECT Key while rotating the Function Selector Switch to the desired function.

**2. The battery**

The circuit of the battery is given in Fig. A2. The battery is switched on when the button is pressed, and is switched off when the button is released.

![Figure A2](_attachments/APhO_2018_exp/APhO_2018_exp_p13_f2.png)

**Figure A2**

**3. Sensor connection box**

Before using the sensor, its cable needs to be plugged to the sensor connection box. Once the sensor is connected to this box, the numbers labeled on the box correspond to the pin numbers in Figure 2.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/15CCvN-EJpWVhyGGMXpY5ch0_vH0jIhKK/view)
**Topic:** [[Magnetism]], [[Circuits]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Graph Linearization (competenza)|Graph Linearization]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Coil (object)|Coil]], [[Resistor (object)|Resistor]], [[Magnet (object)|Magnet]], [[Battery (object)|Battery]]


<div class="qlang-split" data-lang="it"></div>

**Gigante Magnetoresistenza (GMR) **

### I. Introduzione

La resistenza magnetica è la dipendenza della resistenza elettrica di un campione dalla forza di un campo magnetico esterno. Si caratterizza per la seguente formula:

$$\delta(B) = \frac{R(B) - R(0)}{R(0)} \tag{1}$$

dove $R(B)$ è la resistenza del campione nel campo magnetico $B$ e $R(0)$ corrisponde a $B = 0$; $\delta(B)$ si chiama variazione relativa della resistenza.

Esistono diversi effetti di magnetoresistenza "normali" il cui cambiamento relativo di resistenza è piccolo a un campo magnetico relativamente debole, tipicamente nell'ordine di meno di diversi per cento. Ad esempio, uno degli effetti della magnetoresistenza può derivare dall'azione diretta del campo magnetico sulla corrente elettrica. A causa della forza di Lorentz, il flusso dei portatori di carica è deviato, portando alla riduzione effettiva della mobilità. Pertanto, la conducibilità elettrica diminuirà con l'aumento del campo magnetico e la resistenza del campione aumenterà. Si verifica in un intervallo relativamente ampio di variazioni della forza del campo magnetico.

La magnetoresistenza gigante nasce dall'interazione dello spin degli elettroni di conduttività con i momenti magnetici nel solido. Questo effetto consiste nella riduzione della resistenza elettrica nelle strutture a più strati composte da strati ferromagnetici e non ferromagnetici alternati con spessore di diversi nanometri quando viene applicato un campo magnetico esterno. Il cambiamento della resistenza elettrica è grande in un campo relativamente debole; quindi si chiama effetto Giant Magneto Resistance (GMR). A causa del significato pratico del GMR, i suoi scopritori, Albert Fert e Peter Grünberg, furono premiati con il Premio Nobel di Fisica, nel 2007.

In un tale strato multilayer, due strati ferromagnetici adiacenti hanno una magnetizzazione spontanea con direzioni opposte in assenza di un campo magnetico esterno. Supponiamo che la dispersione di elettroni di conduttività con i momenti magnetici del solido sia debole per gli elettroni con spin parallelo alla direzione di magnetizzazione ed è forte per gli elettroni con spin antiparallelle alla direzione di magnetizzazione. Così, sia gli elettroni a spin parallelo che quelli antiparallelo sono fortemente sparsi all'interno di uno degli strati ferromagnetici. Pertanto, in questo caso la resistività totale del multilayer è elevata (vedi figura 1). 1a).

Se un campo magnetico sufficientemente forte viene applicato parallelo al piano dei strati, tutti i strati ferromagnetici sono magnetizzati nella stessa direzione del campo magnetico. Di conseguenza, gli elettroni con spin paralleli alla direzione di magnetizzazione passano attraverso la struttura quasi senza dispersione nei momenti magnetici. Al contrario, gli elettroni con spin antiparallelli alla magnetizzazione sono fortemente dispersi all'interno degli strati ferromagnetici. Poiché la conduzione si verifica in parallelo per i due canali di spin, la resistenza totale del multilayer è determinata principalmente dagli elettroni di spin parallelo altamente conduttivi e sembra essere bassa (vedi Figura. 1b). Nella figura 1, $R$ indica l'elevata resistenza dello strato con forte dispersione e $r$ la bassa resistenza dello strato con scattering debole. $R_0$ è la resistenza della struttura in un campo magnetico zero e $R_B$ è quella in un campo magnetico sufficientemente forte che rende i due strati ferromagnetici adiacenti magnetizzati nella stessa direzione. Il modello elettrico equivalente (cosiddetto modello "due resistori") dell'effetto GMR è mostrato in basso nella figura 1. Il circuito del modello rappresenta un elemento GMR.

Il programma di valutazione del rischio di rischio è stato sviluppato in base alle informazioni disponibili.

**Figura 1: ** Modello di effetto GMR. (1) magnetizzazione; (2) percorso di elettroni; (3) spin di elettroni

Una delle applicazioni del GMR è il sensore magnetico, chiamato anche magnetometro, che può essere utilizzato per misurare la forza di un campo magnetico applicato. Un sensore magnetico GMR ampiamente utilizzato è costituito da quattro elementi GMR collegati in un ponte di Wheatstone come mostrato nella figura. 2b. Ogni elemento GMR è costituito da una struttura a più strati descritta nel modello sopra. Due di questi elementi sono protetti per impedire che il campo magnetico applicato li raggiunga, quindi non sono sensibili al campo magnetico esterno. Il sensore magnetico è confezionato in un dispositivo a 8 pin come mostrato nella figura. 2a. La tensione di alimentazione è collegata ai pin 4 e 8. La uscita del segnale viene effettuata dai punti 1 e 5. Questo è il normale modo di operare. Tuttavia, durante la risoluzione del problema, è possibile collegare l'alimentazione a qualsiasi altra coppia di pin senza distruggere il sensore. L'asse di sensibilità del sensore è indicato dalla freccia di cui alla figura. 2a. Il sensore magnetico non è sensibile a un campo magnetico applicato perpendicolare a questo asse.

Il programma di ricerca è stato sviluppato in base alle informazioni disponibili.

**Figura 2**

La resistenza degli elementi $a$, $b$, $c$, $d$ è indicata nella figura. 2b.

Si prega di notare che la resistenza degli elementi può essere considerata non dipendente dalla corrente.

Per la fabbricazione di sensori con diverse sensibilità, viene utilizzato un concentratore di flusso integrato. Grazie a esso, il campo magnetico che agisce sugli elementi all'interno del sensore è più forte del campo magnetico applicato. A causa della presenza di materiali ferromagnetici nel concentratore di flusso e nei strati magnetici della struttura a più strati, esiste l'isteresi delle caratteristiche elettriche del sensore.

Gli obiettivi dell'esperimento sono:

1. Indagine sull'effetto GMR.
2. Investigazione del sensore magnetico GMR.
3. Studi di alcune applicazioni del sensore magnetico GMR.

### II. Apparecchi

Il programma di valutazione del rischio di rischio è stato sviluppato in base alle informazioni disponibili.

**Figura 3**

# # Cose # # Cose # # Cose #
|---|------|---|------|
∙ 1 ∙ 12 ∙ Piattaforma con rotaia longitudinale ∙
# 2 # Reostato # 13 # Sensore magnetico #
♬ 3 ♬ 220 V cavo di alimentazione AC ♬ 14 ♬ Tenitore sensore ♬
➡️ 4 ➡️ Batteria ➡️ 15 ➡️ Tavola rotonda graduata in gradi, fissata sul supporto con polo corto (non visto sulla foto) ➡️
∙ 5 ∙ Flat coil ∙ 16 ∙ Sensor box di connessione
➡️6 ➡️Fonte di corrente regolabile (con l'addattatore [6a]) ➡️17 ➡️ Cassa di connessione ➡️
♬ 7 ♬ Supporto con alto palo ♬ 18 ♬ Maniferi ferromagnetici ♬
∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙                                                                                                                                                                                                                                                                                                                                                                                                                                                           
∙ 9 ∙ Circuiti stampati con circuito elettrico sepolto ∙ 20 ∙ Multimetro ∙
♬ 10 ♬ Ferrovia trasversale 21 ♬ lampadina a doppio filamento ♬
♬ 11 ♬ Turntable ♬

*) Per ulteriori dettagli, consultare l'appendice

**Avvertimento: ** La tensione 220 V AC è utilizzata solo per la lampada da tavolo (non mostrata nella figura 3) e l'adattatore (6a) della sorgente di corrente corrente corrente a corrente continua regolabile. Il collegamento di qualsiasi altro dispositivo a questa tensione è severamente vietato.

### III. Esperimento

#### A. Comprensione dei campi magnetici (1,0 punti)

In questo problema sperimentale, il campo magnetico può essere

- il campo magnetico creato da
- una bobina circolare con corrente elettrica;
- una bobina piatta che trasporta una corrente elettrica;
- una piastra di magnete permanente.
- il campo magnetico della Terra.

**1. Comprensione del campo magnetico creato da una bobina circolare**

La bobina circolare [8] ha un diametro medio $d = 10.0$ cm e il numero di giri $N = 500$. Il campo magnetico creato da questa bobina al suo centro quando una corrente $I$ scorre in essa può essere approssimato a quello di un ciclo di corrente circolare con raggio uguale al raggio medio della bobina circolare e una corrente uguale a $500\,I$.

**A.1** *(0,5 pt) * La magnitudine del campo magnetico al centro della bobina circolare può essere scritta nella forma $B = kI$. Calcolare il valore numerico di $k$ se $B$ è misurato in mT e $I$  in mA.

**2. Comprensione del campo magnetico terrestre**

Il campo magnetico terrestre esiste ovunque. Può essere considerato come un campo magnetico uniforme in una grande regione dello spazio intorno a ogni dato punto. La grandezza della componente orizzontale del campo magnetico terrestre è indicata come $B_h$.

**A.2** *(0,5 pt) * Scrivi l'espressione per la magnitudine $B_\beta$ del campo magnetico terrestre misurata nel piano orizzontale e nella direzione che fa un angolo $\beta$ con la componente orizzontale del campo magnetico terrestre in termini di $\beta$ e $B_h$.

*Nota: Tenere sempre conto dell'effetto del campo magnetico terrestre sulle misurazioni magnetiche.*

#### B. L'esame dell'effetto GMR con un sensore magnetico GMR (7 punti)

*Nota: questa parte è relativamente indipendente dalle altre parti. È anche possibile risolvere le parti C e D senza dover risolvere la parte B.*

In questa parte, indaghiamo la dipendenza dal campo magnetico esterno della resistenza di ogni elemento all'interno del sensore magnetico. La bobina circolare [8] si trova sulla rotaia longitudinale. Il supporto del sensore [14] è vischiato sulla piastra rotonda [15] in posizione orizzontale, con il sensore magnetico [13] al centro della bobina circolare e l'asse del sensore perpendicolare al piano della bobina. Cambiando la corrente elettrica nella bobina, variamo il campo magnetico che agisce sul sensore. Assicurati che l'asse di sensibilità del sensore magnetico sia orientato in direzione ovest-est (indicato sulla tavola di esperimento) in modo che il campo magnetico terrestre non influisca sulle tue misurazioni. Si noti che la direzione ovest-est è stata determinata localmente utilizzando una bussola magnetica.

Il sensore magnetico è fornito dalla batteria [4]. La bobina circolare è alimentata da corrente proveniente dalla sorgente di corrente di corrente a corrente continua regolabile [6].

**1. Determinazione della resistenza degli elementi GMR**

**a. Resistenza degli elementi a $B = 0$.**

Impostare la corrente nella bobina circolare a $I = 0$.

**B.1** *(1,25 pt)* Segna i diagrammi dell'esperimento e trova le espressioni per calcolare la resistenza di ogni elemento in termini di dati di misura.

**B.2** *(1,25 pt)* Eseguire le misurazioni e calcoli per determinare la resistenza degli elementi $a$, $b$, $c$ e $d$ a $B = 0$.

**b. Resistenza degli elementi al massimo campo magnetico esterno.**

Impostare la corrente $I$ nella bobina al massimo valore possibile.

**B.3** *(0,5 pt)* Eseguire le misurazioni e calcoli per determinare la resistenza degli elementi $a$, $b$, $c$ e $d$ nel campo magnetico esterno massimo.

**c. Proprietà degli elementi.**

**B.4 ** *(0,25 pt) * Indicare quali elementi sono sensibili al campo magnetico.

**2. Caratteristiche di un elemento GMR**

In questa sezione, si studiano le proprietà di uno dei due elementi GMR che non sono protetti. Scegli uno di questi elementi di GMR e determina $\delta(B)$  la dipendenza dal campo magnetico esterno del cambiamento relativo della resistenza.

**B.5** *(0,75 pt)* Indicare il nome dell'elemento GMR scelto. Sketch diagrammi dell'esperimento e trovare le espressioni per calcolare $\delta(B)$ in termini di dati di misura.

**B.6 ** *(1,25 pt) * Eseguire le misurazioni e calcoli per determinare $\delta(B)$ con il campo magnetico esterno $B$, nell'intervallo da zero al valore massimo possibile. Riempire la tabella con i valori delle quantità misurate e determinare $\delta(B)$ corrispondente ai valori della corrente $I$ e del campo magnetico esterno $B$.

**B.7 ** *(0,5 pt) * Tracciato su un grafico $\delta(B)$ in funzione del campo magnetico esterno $B$ (grafico 1).

**B.8** *(0,25 pt) * Determina la pendenza media $\alpha = \dfrac{\triangle\delta(B)}{\triangle B}$ della curva $\delta(B)$ nella regione in cui $\delta(B)$ dipende fortemente da $B$.

**B.9** *(0,25 pt) * Determina il coefficiente GMR $\delta = \dfrac{\triangle R_{max}}{R(0)}$ dell'elemento. Qui $\triangle R_{max}$ è il massimo cambiamento della resistenza in un campo magnetico.

**B.10** *(0,75 pt) * Trova il valore delle resistenze $R$ e $r$ dell'elemento GMR secondo il modello riportato nella figura 1 e il rapporto $\gamma = \dfrac{r}{R}$.

#### C. Studi sul sensore magnetico GMR (6 punti)

In questa parte, si esaminano le caratteristiche più importanti del sensore magnetico [13]. La bobina circolare [8] si trova sulla rotaia longitudinale [12]. Il supporto del sensore [14] è vischiato sulla piastra rotonda [15] in posizione orizzontale, in modo che il sensore sia al centro della bobina circolare e l'asse del sensore sia perpendicolare al piano della bobina. Cambiando la corrente elettrica nella bobina, variamo il campo magnetico che agisce sul sensore. Assicurati che l'asse di sensibilità del sensore magnetico sia orientato lungo la direzione Est/Ovest in modo che il campo magnetico terrestre non influisca sulle tue misurazioni.

**1. Caratteristiche del segnale di uscita del sensore**

Il sensore magnetico è fornito dalla batteria [4] a tensione massima. La tensione di alimentazione è collegata ai pin 4 e 8. La bobina circolare è alimentata dalla sorgente di corrente corrente CC regolabile [6].

a. In primo luogo, impostare la corrente $I$ nella bobina al valore più alto possibile. La tensione tra i pin 1 e 5 è il segnale di uscita $S$ del sensore.

b. Se si vuole ridurre gradualmente la corrente della bobina a $I = 0$, si deve leggere il valore di $S$ corrispondente a ogni valore di $I$.

c. Cambiare la direzione della corrente $I$ nella bobina. Al tempo che aumenta gradualmente la corrente al suo valore massimo, si legge il valore di $S$ corrispondente a ogni valore di $I$.

d. Se si vuole ridurre gradualmente la corrente a $I = 0$, si deve leggere il valore di $S$ corrispondente a ogni valore di $I$.

e. Cambiare la direzione della corrente $I$ nella bobina. Al tempo che aumenta gradualmente la corrente al suo valore massimo, si legge il valore di $S$ corrispondente a ogni valore di $I$.

**C.1** *(1.0 pt) * Riempire la tabella con i valori di $S$ corrispondenti ai valori della corrente $I$ nella bobina e del campo magnetico esterno $B$ durante il processo di misurazione di cui sopra.

**C.2** *(1.0 pt) * Tracciare il grafico $S(B)$ del segnale di uscita $S$ come funzione del campo magnetico esterno $B$ (grafico 2).

**C.3** *(0.5 pt)*
1. Circolare la regione di saturazione nella curva $S(B)$ e etichettarla con "S".
2. Circolare la regione di linearità nella curva $S(B)$ e etichettarla con "L". Per questa regione, trovare il valore medio della pendenza $m = \dfrac{\triangle S}{\triangle B}$.

**C.4 ** *(0,5 pt) * Dal grafico $S(B)$, determinare il campo di coercizione $B_C$, che è il campo magnetico esterno necessario per rendere $S$ minimo dopo essere stato magnetizzato nella direzione opposta con un campo di saturazione.

Nota: nel caso in cui si desidera utilizzare la regione lineare della curva $S(B)$, è fornita una piccola piastra di magnete permanente [19]. Basta posizionare il magnete permanente sul supporto del sensore [14], vicino al sensore [13], e modificare la posizione relativa del magnete al sensore per scegliere il punto di lavoro sulla curva. Una volta trovato il punto di lavoro adatto, si può fissare il magnete sul supporto con nastro adesivo. Questo processo è chiamato biasing.*

**2. Dipendenze del segnale di uscita dalla tensione di alimentazione**

Il sensore magnetico è fornito dalla batteria [4]. Connette il sensore a diverse prese della batteria, e cambiate la tensione di alimentazione $E$. La corrente $I$ nella bobina circolare è impostata a un valore corrispondente alla regione lineare della curva $S(B)$.

**C.5 ** *(0,25 pt) * Riempire la tabella con i valori di $S$ corrispondenti ai valori di $E$.

**C.6 ** *(0,25 pt) * Tracciare un grafico di $S$ come funzione di $E$.

**C.7** *(0,5 pt) * Derivare un'espressione analitica relativa al segnale di uscita $S$ del sensore con la pendenza $\alpha$ dell'elemento GMR trovato in B.8, la tensione di alimentazione $E$ e il campo magnetico applicato $B$. Qui, supponiamo che $\alpha$ sia lo stesso per i due elementi e non vi sia alcuna isteresi nelle caratteristiche degli elementi. Inoltre, supponiamo che in assenza di un campo magnetico, i valori di resistenza di tutti e 4 gli elementi sono gli stessi.

**3. Studi sugli effetti di un concentratore di flusso**

Il concentratore di flusso integrato all'interno del sensore magnetico è costituito da due strutture ferromagnetiche a film sottile con spessore nell'ordine di micrometri, con lunghezza nell'ordine di alcune centinaia di micrometri. Lo scopo del concentratore di flusso è di ingrandire il campo magnetico nel divario tra le strutture.

Per studiare l'effetto di un concentratore di flusso su un sensore magnetico, si utilizza un concentratore di flusso esterno fatto di due fogli ferromagnetici (come mostrato nella figura. 4) posizionato vicino alle due estremità del sensore, con lunghezza $L_2$ e distanza reciproca $L_1$.

Il programma di valutazione del rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di rischio di

**Figura 4.** Diagramma del concentratore di flusso

Una volta che il sensore con concentratore di flusso è inserito in un campo magnetico uniforme di magnitudo $B_0$, il campo magnetico effettivo che agisce sul sensore è $B$. In un intervallo di variazione non molto ampio di $L_1$, $B$ può essere trovato approssimativamente utilizzando la formula empirica:

$$\frac{B}{B_0} = n\frac{L_2}{L_1} + 1 \tag{2}$$

Vi viene chiesto di eseguire un esperimento con il sensore magnetico e i due fogli ferromagnetici [18] per determinare il valore di $n$ nella formula (2).

**C.8 ** *(0,25 pt + 0,75 pt = 1,0 pt) * Quale campo magnetico di seguito userai in questo esperimento?

- **A.** Il campo della bobina circolare che trasporta una corrente elettrica
- **B.** Il campo della bobina piatta che trasporta una corrente elettrica
- **C.** Il campo della piastra di magnete permanente
- **D.** Il campo magnetico della Terra

Sketch diagrammi dell'esperimento e trovare espressioni per determinare il valore di $n$ in termini di dati di misura.

**C.9** *(0,5 pt)* Eseguire l'esperimento per trovare $B/B_0$ per i diversi valori di $L_1$ e riempire la tabella con i dati di misura.

**C.10** *(0,5 pt) * Tracciare un grafico di $B/B_0$ come funzione di una variabile appropriata per determinare il valore di $n$ (Grafico 4). Indicare il valore di $n$.

#### D. Applicazioni dei sensori magnetici GMR (6 punti)

In questa parte, consideriamo alcune applicazioni del sensore magnetico.

**1. Misurazione del campo magnetico terrestre**

Vi viene chiesto di usare il sensore magnetico per determinare alcuni parametri del campo magnetico terrestre. Sono fornite alcune schede grafiche in più, nel caso ne aveste bisogno per risolvere questa domanda.

**a. Magnitude della componente orizzontale del campo magnetico terrestre**

Rettificare la piastra rotonda [15] nel piano orizzontale. Il supporto del sensore [14] è vischiato sulla piastra rotonda. Rotando il supporto del sensore sulla piastra rotonda, si può determinare il componente nel piano orizzontale del campo magnetico terrestre in diverse direzioni dell'asse del sensore.

**D.1** *(0,5 pt)* Sketch diagrammi dell'esperimento e trovare espressioni per calcolare la magnitudine $B_h$ della componente orizzontale del campo magnetico terrestre in termini di dati di misurazione.

**D.2** *(0,25 pt)* Eseguire le misurazioni e i calcoli per trovare $B_h$.

**b. Magnitude del campo magnetico terrestre e inclinazione magnetica**

L'inclinazione magnetica è definita come l'angolo $\theta$ tra il vettore del campo magnetico terrestre $\vec{B}_{Earth}$ e il piano orizzontale.

Fissare la piastra rotonda [15] al polo alto [7], con la piastra rotonda nel piano verticale contenente la direzione SudNord. Il supporto del sensore [14] è vischiato sulla piastra rotonda. Rotando il supporto del sensore sulla piastra rotonda, si può determinare la componente del campo magnetico terrestre in diverse direzioni dell'asse del sensore.

**D.3 ** *(0,75 pt) * Sketch diagrammi dell'esperimento e trovare espressioni per calcolare il campo magnetico della Terra $B_{Earth}$ e l'inclinazione magnetica $\theta$ in termini di dati di misurazione.

**D.4** *(0,5 pt)* Eseguire misure e calcoli per trovare $B_{Earth}$ e $\theta$.

**2. Vattometro DC**

In questa sezione, si utilizza il sensore magnetico per formare il circuito di un wattmeter. La bobina piatta [5] avvolge il sensore. Questa bobina piatta è collegata in serie al carico, quindi la corrente elettrica $I$ nella bobina piatta è la stessa di quella del carico. La corrente $I$ nella bobina piatta crea il campo magnetico che agisce sul sensore e la tensione $U$ attraverso il carico viene utilizzata per alimentare il sensore.

Il segnale di uscita $S$ del sensore viene utilizzato per determinare la potenza $P$ dissipata nel carico.

La lampadina elettrica a doppio filamento [21] è utilizzata come carico. Utilizzando i tre terminali della lampadina in modi diversi, si possono ottenere diversi valori della resistenza del carico $R_L$.

In molti casi, il ponte Wheatstone del sensore magnetico è squilibrato anche quando non vi è alcun campo magnetico esterno che agisce su di esso. Ciò è dovuto a una piccola differenza nella resistenza degli elementi e nella rimanenza dei strati ferromagnetici. In questo caso, è necessario bilanciare il ponte prima di usarlo nel circuito del wattmeter. Il supporto del sensore [14] è vischiato sulla piastra rotonda [15] in posizione orizzontale. Il sensore è fornito dalla batteria [4] con la tensione più alta. Orienta il sensore perpendicolare al campo magnetico terrestre. Osservare il segnale di uscita $S$ su un multimetro. Se $S = 0$, il ponte è equilibrato e non è necessario fare altro. Se $S \neq 0$, il ponte è squilibrato e devi bilanciarlo. Collegare il reostato [2] in parallelo con uno degli elementi $a$, $b$, $c$ e $d$, per il quale una volta collegato il reostato, $S$ diminuisce la sua magnitudine. Aggiusta il reostato per ridurre $S$ a zero. Ora il ponte è in equilibrio. Questo processo si chiama bilanciamento.

In alcuni casi, l'uso del reostato non può aiutare a bilanciare il ponte. In tali casi è sufficiente ruotare il tenitore del sensore con un angolo piccolo in modo tale che il segnale di uscita $S$ sia ridotto a $S = 0$.

**D.5 ** *(0,5 pt) * Scrittura del diagramma del circuito wattmeter insieme al carico e ai multimetri utilizzati nelle misurazioni.

Utilizzare la casella di connessione [17] per costruire il circuito del wattmeter secondo il diagramma. Varia la resistenza $R_L$ del carico e regola l'uscita della sorgente di corrente continua [6] per cambiare la tensione $U$ nel carico.

**D.6** *(0,75 pt) * Riempire la tabella con i valori del segnale di uscita del sensore $S$ corrispondenti ai valori di $I$ e $U$ e di $P = U \cdot I$.

**D.7 ** *(0,5 pt) * Tracciare un grafico di $P$ come funzione di $S$ (Grafico 5).

La curva $P = f(S)$ è chiamata curva di calibrazione del wattmeter.

**D.8** *(0,25 pt) * Trova la forma della funzione $P = f(S)$ della curva di calibrazione e determina i valori dei suoi coefficienti.

**3. Rilevazione dei circuiti elettrici sepolti**

In questa sezione, si chiede di usare il sensore magnetico per formare un dispositivo per trovare le forme di due circuiti elettrici sepolti. Il circuito elettrico è realizzato sulla superficie nascosta di una scheda di circuito stampato. Un foglio di griglia attaccato sulla superficie inversa della scheda di circuito stampato funge da sistema di coordinate.

Potete eseguire questo esperimento nel modo seguente. Impostare la piastra rotonda [15] in posizione orizzontale e fissare il polo corto. Il supporto del sensore [14] è vischiato sulla piastra rotonda. La scheda di circuiti stampati con il circuito elettrico sepolto [9] si trova piatta sulla scheda [11]. La scheda rotatoria è libera di ruotare nel piano orizzontale e di muoversi in due direzioni perpendicolari lungo le rotaie [10] e [12]. Collegare i conduttori della scheda di circuito stampato alla sorgente di corrente corrente di corrente continua regolabile [6], con il conduttore rosso al terminale positivo. Aggiusta la fonte di corrente corrente corrente per scegliere un valore della corrente nel circuito. Movendo la scheda di circuito stampato rispetto al sensore magnetico [13] e osservando il cambiamento del segnale di uscita $S$ del sensore, è possibile rilevare la posizione e la forma del circuito sepolto e anche la direzione della corrente nel circuito sepolto. Sono forniti alcuni fogli di griglia su scala più grande, nel caso ne aveste bisogno per risolvere questa domanda.

**D.9** *(2.0 pt)* Disegnare un diagramma dei circuiti elettrici sepolti insieme alla direzione della corrente in essi sulle schede di griglia nella scheda delle risposte.

### Appendice

**1. Instruzioni per il multimetro**

![Figura A1](_attaccamenti/APhO_2018_exp/APhO_2018_exp_p12_f1.png)

**Figura A1**

# # Cose # # Cose # # Cose #
|---|------|---|------|
 1  Display  7  Terminal di misurazione 
∙ 2 ∙ REL Key ∙ 8 ∙ Terminal di misurazione ∙ A
♬ 3 ♬ TENERE LA TECCHIA ♬ 9 ♬ Scelte di funzione ♬
♬ 4 Hz/DUTY Key ♬ 10 ♬ RISET Key ♬
♬ 5 ♬ Terminal di misura ♬ 11 ♬ SELECT Key ♬
 6  Terminal di misurazione (V/Ω/Hz)  12  RANGE Key 

- Per evitare complicazioni non utilizzare le seguenti chiavi: REL Key [2], HOLD Key [3], Hz, DUTY Key [4], RESET Key [10].
- Per accendere il multimetro e iniziare la misura, ruotare il switch del selettore di funzione [9] alla funzione desiderata.
- Per misurare tensione e resistenza utilizzare il terminale di misurazione (V/Ω/Hz) [6] e il terminale di misurazione (COM) [5].
- Per la misurazione della corrente utilizzare il terminale di misurazione (A) [8] e il terminale di misurazione (COM) [5] e la funzione A.
- Il multimetro si spegne automaticamente circa 30 minuti dopo l'accensione. Rotare il switch del selettore di funzione in STOP e poi tornare alla funzione per continuare la misurazione.

Per evitare l' spegnimento automatico, premere il tasto SELECT mentre ruota il switch del selettore di funzione alla funzione desiderata.

**2. La batteria**

Il circuito della batteria è indicato in figura 2. A2. La batteria si accende quando si premono i pulsanti e si spegne quando viene rilasciato il pulsante.

![Figura A2](_attaccamenti/APhO_2018_exp/APhO_2018_exp_p13_f2.png)

**Figura A2**

**3. Cassa di connessione sensore**

Prima di utilizzare il sensore, il cavo deve essere collegato alla scatola di connessione del sensore. Una volta collegato al sensore, i numeri etichettati sulla scatola corrispondono ai numeri di pin della figura 2.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/15CCvN-EJpWVhyGGMXpY5ch0_vH0jIhKK/view)
**Topic:** [[Magnetism]], [[Circuits]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Graph Linearization (competenza)|Graph Linearization]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Coil (object)|Coil]], [[Resistor (object)|Resistor]], [[Magnet (object)|Magnet]], [[Battery (object)|Battery]]
