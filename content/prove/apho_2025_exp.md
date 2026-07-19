---
title: APhO 2025 — Sperimentale
tipo: prova
tags:
  - kg/prova
  - paese/asia
  - comp/APhO
---
<div class="atom-reader" data-prova="apho_2025_exp"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="APhO 2025 — Sperimentale — Quesito 1" data-tags="kg/prova,paese/Asia,comp/APhO,topic/electromagnetic-induction,argomento/elettromagnetismo,difficolta/4,multidisciplina/multi,object/coil,object/capacitor,object/resistor"></span>

<div class="qlang-switch" data-default="en"></div>



### Physics of Induction Cooking

#### A. Introduction

![[_attachments/APhO_2025_exp/APhO_2025_exp_p1_f1.png]]
*Figure 1. An induction cooker.*

This problem presents a very interesting kitchen physics: an induction cooker. Such a device consists mainly of a coil, which is driven by an alternating current that heats up a metal pan above it. It is a modern alternative for cooking that provides several benefits such as a safer cooking environment (no fire or flammable gas involved), cleaner utensils (no soot), faster cooking and is more environmentally friendly (can be powered by renewable electricity). In this experiment, we will explore the basic fascinating physics of an induction cooker.

There are three parts in the experiment. Firstly, we will measure the coil's inductance ($L$) and its internal resistance ($R_L$). Secondly, we will investigate the skin-depth phenomena in metals, which is important for induction cooking. Thirdly, we will determine the specific heat capacity ($c$) of different metal pans and their effective load resistance ($R_{\text{LOAD}}$).

#### B. Experimental Components

![[_attachments/APhO_2025_exp/APhO_2025_exp_p2_f1.png]]
*Figure 2. Experimental setup. The components are described in the list below.*

1. Function generator (FG) (operating frequency: $20\ \text{Hz}$ to $100\ \text{kHz}$).
2. Digital oscilloscope "Zoyi" + BNC cable probe (1 pc).
3. Identical coil mounted on a plastic base (2 pcs).
4. Stopwatch (1 pc).
5. Banana to banana-jack cables, two pairs (4 pcs).
6. Banana jack to pin cables, two pairs (4 pcs).
7. Yellow metal resistor "$R_1$" ($1\ \Omega$, $100\ \text{W}$), mounted on a black box (1 pc).
8. Black box with four female banana jack sockets (1 pc).
9. Capacitors $470\ \text{nF}$ (brown), $470\ \mu\text{F}$, $1000\ \mu\text{F}$, $2200\ \mu\text{F}$ (dark blue cylinders) (1 pc each).
10. M3 Allen (L) key (1 pc).
11. Aluminium "pan" with NTC (negative temperature coefficient) thermistor attached, size $= 2\ \text{cm} \times 2\ \text{cm}$, thickness $= 0.73\ \text{mm}$ (1 pc). Both surfaces appearance: silvery / silvery.
12. Stainless steel SS410 "pan" with NTC thermistor attached, size $= 2\ \text{cm} \times 2\ \text{cm}$, thickness $= 0.76\ \text{mm}$ (1 pc). Both surfaces appearance: mirror-like / mirror-like.
13. Aluminium plates, size $= 2.7\ \text{cm} \times 4.6\ \text{cm}$, thickness $= 0.73\ \text{mm}$, relative magnetic permeability $\mu_r = 1$ (5 pcs). Both surfaces appearance: silvery / silvery.
14. Copper plates, size $= 2.7\ \text{cm} \times 4.6\ \text{cm}$, thickness $= 0.71\ \text{mm}$, relative magnetic permeability $\mu_r = 1$ (5 pcs). Both surfaces appearance: orange-red / orange-red.
15. Stainless steel "SS304" plates, size $= 2.7\ \text{cm} \times 4.6\ \text{cm}$, thickness $= 0.72\ \text{mm}$, relative magnetic permeability $\mu_r = 1$ (4 pcs). Surface appearance: one side mirror, the other dull.
16. Stainless steel "SS410" plates, size $= 2.7\ \text{cm} \times 4.6\ \text{cm}$, thickness $= 0.76\ \text{mm}$, relative magnetic permeability $\mu_r = 700$ (4 pcs). Surface appearance: mirror-like / mirror-like.
17. Charger and USB-C cable for the digital handheld oscilloscope (1 pc).

![[_attachments/APhO_2025_exp/APhO_2025_exp_p3_f1.png]]
*Figure 3. The induction cooker setup, (1): coil pin terminals, (2): clamps, (3): coil#1, (4): coil#2.*

##### Parameters and Constants

| Parameter / Constant | Symbol | Value |
|---|---|---|
| Stefan–Boltzmann | $\sigma_S$ | $5.670 \times 10^{-8}\ \text{W}\,\text{m}^{-2}\,\text{K}^{-4}$ |
| Magnetic permeability in vacuum | $\mu_0$ | $4\pi \times 10^{-7}\ \text{H/m}$ |
| Mass density of Al | $\rho_{\text{Al}}$ | $2700\ \text{kg/m}^3$ |
| Mass density of SS410 | $\rho_{\text{SS410}}$ | $7700\ \text{kg/m}^3$ |
| Emissivity of Al | $e_{\text{Al}}$ | $0.65$ |
| Emissivity of SS410 | $e_{\text{SS410}}$ | $0.8$ |

> **NOTE:**
> 1. Please read section D: "Equipment Operating Procedures".
> 2. In all experiments we need a capacitor $C$ to form a series RLC circuit configuration, because without a capacitor (i.e. only RL configuration) the coil could become very hot.
> 3. In all experiments error analysis is not required.
> 4. For all experiments, please set the Function Generator's "Waveform" selection to the "Sine" function.
> 5. Limit the current to the coil at maximum approximately $2\ \text{A-peak}$.
> 6. For the digital oscilloscope, the "oscilloscope" mode is used to measure voltage, frequency and view the waveforms. The "multimeter" mode is used to measure resistance.
> 7. You can connect the oscilloscope probe (item #2) to a banana-to-banana cable (#5) to make it easier to connect to various "banana" terminals.

#### C. The Experiment

##### C.1 Experiment #1: Characterisation of the induction coil (4.5 pts)

The first key component in the induction cooker is the coil. In this experiment we will measure the self inductance ($L$) of coil#1 (the top coil) as shown in Fig. 3b. This coil can be modeled as an ideal inductor $L$ in series with an internal coil resistance $R_L$.

We will use a series RLC circuit with the yellow metal resistor $R_1$, coil#1 and a capacitor. There are four different capacitors. Please note that the Function Generator (FG) output voltage might vary as you change the frequency, as the load impedance may change.

**1.1** *(0.4 pt)* — Sketch your circuit and label all the relevant parts. The resistance from all cables ($R_C$), which contributes to the total resistance ($R_{\text{TOT}}$) in the circuit, is not negligible. Determine $R_C$ using the ohmmeter.

**1.2** *(1.2 pt)* — Determine the resonance frequency of the RLC circuit with two different capacitors: $C = 470\ \text{nF}$ and $2200\ \mu\text{F}$. Record your experimental data in a table. Plot an appropriate resonance curve and determine $L$.

**1.3** *(0.5 pt)* — We also want to determine the coil resistance $R_L$. You might notice that the resonance data of one capacitor is insufficient to determine $L$ accurately. Therefore, develop an alternative linear equation model so you can extract both $L$ and $R_L$ from the series RLC experiment.

**1.4** *(1.4 pt)* — Perform the experiment for the other two capacitors: $C = 470\ \mu\text{F}$ and $1000\ \mu\text{F}$. Record your data. Analyze all four RLC datasets using your new model. Focus on the appropriate range of frequencies and plot appropriate graphs.

**1.5** *(1.0 pt)* — Determine $R_L$ and $L$ for all experiments with the four capacitors. Calculate their averages.

##### C.2 Experiment #2: Mutual Induction and Skin Depth (8.1 pt)

> **NOTE:**
> 1. In this experiment #2 please use a series RLC circuit with $C = 1000\ \mu\text{F}$ to drive the coil.
> 2. If the voltage signal is too low for the digital oscilloscope, you can: (1) Amplify the signal by 10x by choosing MENU > F4 to toggle "PROBE" between 1x and 10x. (2) Press "HOLD/SAVE" to freeze the display.
> 3. When using the digital oscilloscope to measure voltage, the "VMAX" reading can be inaccurate if there are noise or "spikes". Please read the signal amplitude directly from the waveform.

###### A. Mutual inductance

In this experiment #2 we will use the two coils as shown in Fig. 4, but without any metal plates. First, we will measure the mutual inductance $M$ between both coils. Following Faraday's law, the change in current in the first coil will induce a voltage in the second coil.

**2.1** *(0.4 pt)* — Sketch your experimental setup to determine the mutual inductance between the two coils.

**2.2** *(1.0 pt)* — You need to perform the measurement for the mutual inductance $M$ twice, by reversing the roles of the coils. Perform the measurements, record the data and plot the appropriate graphs for each configuration.

**2.3** *(0.4 pt)* — Determine the mutual inductance $M$ for each configuration.

###### B. Skin depth experiment

![[_attachments/APhO_2025_exp/APhO_2025_exp_p5_f1.png]]
*Figure 4. Skin depth experiment, (1): coil pin terminals, (2): coil#1, (3): metal plates, (4): coil#2.*

The "skin-depth" concept plays an important role in the induction cooker. The "skin-depth" characterizes the penetration depth of the alternating current (AC) induced electromagnetic field into metal. In this experiment we will investigate the skin depth of various metals that can be used as cooking pans. We will investigate its frequency-dependence and measure the electrical conductivity ($\sigma$) of the metals.

We set coil#1 as the primary coil and coil#2 as the secondary coil. Since the total metal thickness ($\sim 3\ \text{mm}$) is small compared to the coil–coil distance ($15\ \text{mm}$), we can assume that the magnetic field at the bottom, near the secondary coil, is approximately constant (if there is no metal).

Following Maxwell's equations, when an oscillating electric or magnetic field penetrates a conductor, the field inside the conductor decreases exponentially with the penetration distance $z$:

$$B(z) = B_0\, e^{-z/\delta} \cos\!\left(\omega t - z/\delta + \phi\right) \tag{1}$$

where $B_0$ is the magnetic field amplitude before it enters the conductor, $\delta$ is the "skin depth" and $\phi$ is the phase. Note: we ignore the phase factor $(-z/\delta + \phi)$ in this experiment.

The skin depth in a conductor is given as:

$$\delta = \sqrt{\frac{\sigma^m f^n}{\pi \mu}} \tag{2}$$

where $\sigma$ is the electrical conductivity, $f$ is frequency, $\mu = \mu_r \times \mu_0$ is the magnetic permeability, and $m$ and $n$ are power factors which are integers and to be determined in this experiment.

We will perform experiments on four metals: (1) Aluminium, (2) Copper, (3) Stainless steel "SS304" and (4) Stainless steel "SS410". By inserting the metals in between the coils, the voltage in the secondary coil will drop due to magnetic field "shielding" of the eddy current in the metal.

> **Note:** First explore the appropriate range of frequencies that yield significant changes in secondary coil voltage.

**2.4** *(5.5 pt)* — Develop a model with equations and perform the experiment to determine $n$ for each metal (rounded to the nearest integer). Record your data; you may use linear regression to analyze the data as necessary to obtain data points to plot the final graphs for each metal, to get $n$ and $\sigma$ (which will be asked in Q2.6). Identify one metal that does not yield good data due to an extreme value of skin depth, and thus you can ignore it for Q2.5 and Q2.6.

**2.5** *(0.2 pt)* — Using dimensional analysis, deduce the conductivity power factor $m$ from the previous result.

**2.6** *(0.6 pt)* — Determine $\sigma$ for the three metals that yield good data in Q2.4.

##### C.3 Experiment #3, "Cooking": Specific heat capacity and the effective load resistance (7.4 pt)

> **NOTES:**
> 1. In this experiment #3 please use a series RLC circuit with $C = 1000\ \mu\text{F}$ to drive the coil.
> 2. **WARNING:** Please limit the maximum current to the coil to approximately $2\ \text{A-peak}$ to prevent overheating.
> 3. To operate the "induction cooker" please use frequency approximately $f = 40\ \text{kHz}$.

![[_attachments/APhO_2025_exp/APhO_2025_exp_p7_f1.png]]
*Figure 5. The induction cooking experiment setup, (1): coil#1, (2): metal plates, (3): coil#2, (4): NTC.*

In this experiment we will use the Aluminium and the SS410 metal as the "cooking pan". First you will mount the Aluminium "pan" (item #11), clamp it on the top platform and then you flip it upside down as shown in Fig. 5. You will use coil#2, which is well separated from the "pan", so that there is no heat transfer between them by conduction.

Place the setup inside the black box (item #8) so the convection loss is negligible. Since the metal "pan" sits on a plastic platform (a thermal insulator), we also assume no heat loss due to conduction. Thus the only heat loss is due to radiation to the surroundings. The radiation power of a body with temperature $T$ is given as:

$$P_{RAD} = e A \sigma_S T^4 \tag{3}$$

where $e$ is the emissivity, $\sigma_S$ is the Stefan–Boltzmann constant and $A$ is the radiating surface area.

We can measure the temperature of the metal "pan" by measuring the resistance of the NTC thermistor (attached), which is given as:

$$R_{NTC} = R_0\, \exp\!\left[B\left(\frac{1}{T} - \frac{1}{T_0}\right)\right] \tag{4}$$

where $R_0 = 10\ \text{k}\Omega$ is the nominal resistance at reference temperature $T_0 = 298\ \text{K}$, $B = 3950\ \text{K}$ is a constant, and $T$ is the thermistor temperature (in K).

**3.1** *(0.2 pt)* — Draw a diagram to illustrate how the induction cooker works. Label all physical quantities involved.

**3.2** *(0.5 pt)* — Develop a physical model with equations to determine the specific heat ($c$) of the metal pans.

**3.3** *(1.5 pt)* — Perform an experiment to determine the specific heat of the aluminium pan and plot appropriate graphs. Use coil#2 to heat the pan.

**3.4** *(1.5 pt)* — Repeat Q3.3 for the SS410 "pan".

![[_attachments/APhO_2025_exp/APhO_2025_exp_p8_f1.png]]
*Figure 6. Equivalent model for an induction cooker.*

Finally, we can model the heating of the metal "pan" as if it introduces a "load resistance" $R_{\text{LOAD}}$ to the circuit as shown in Fig. 6. In other words, the coil and metal pan system can be modeled as coil inductance $L$, coil resistance $R_L$ and the "load resistance" $R_{\text{LOAD}}$.

**3.5** *(1.6 pt)* — Develop a model and perform an experiment to determine $R_{\text{LOAD}}$ for the Al "pan". Plot the appropriate data. Suggestion: Perform measurements after approximately 30 sec of applying power to ensure that the coil delivers steady power and so that the heat is distributed more uniformly.

**3.6** *(1.5 pt)* — Repeat Q3.5 for the SS410 "pan".

**3.7** *(0.1 pt)* — Which one works better as a cooking pan? Choose one: (a) Aluminium or (b) SS410.

**3.8** *(0.1 pt)* — What physical parameter plays the most dominant role in the induction heating effect in your choice above? Choose one: (a) Electrical conductivity, (b) Magnetic permeability, (c) Mass density, (d) Specific heat or (e) Thermal conductivity.

**3.9** *(0.4 pt)* — The induction cooking efficiency ($\eta$) is defined as the ratio of power delivered to the plate to the power delivered to the coil. Calculate the efficiency for both metal pans.

#### D. Equipment Operating Procedures

##### D.1. Function Generator Box

![[_attachments/APhO_2025_exp/APhO_2025_exp_p9_f1.png]]
*Figure 7. The function generator box.*

Components:

1. Power LED indicator.
2. Amplitude knob: to adjust the amplitude of the output signal.
3. Frequency range knob: to choose the frequency range.
4. Coarse and fine knobs: to adjust the frequency within the range.
5. Waveform knob: to choose "sine", "triangle" or "square" waveform. In these experiments: **always choose "sine" function**.
6. BNC output before amplification: **not used here**. It is used to monitor the original signal before the amplifier.
7. Output with banana jack terminal.
8. Power socket.
9. Power button: to turn on or off.
10. Fuse box.

##### D.2. Digital Oscilloscope

![[_attachments/APhO_2025_exp/APhO_2025_exp_p10_f1.png]]
*Figure 8. Digital oscilloscope.*

**1. PANEL KEY FUNCTIONS.** These keys allow you to navigate through settings, select functions, and adjust measurements.

1. **F1–F4 keys:** These keys correspond to the function menu displayed at the bottom of the screen.
2. **HOLD/SAVE key:**
   - In oscilloscope mode: Short press: Freeze or resume the waveform display. Long press: save the currently displayed waveform data.
   - In multimeter mode: Short press: Freeze or resume the measurement reading.
3. **MODE key:** To switch between "Oscilloscope" mode or "Multimeter" mode.
4. **POWER key:** Press for $\sim 2$ sec to turn on or off the unit.
5. **AUTO-RANGE key:** To automatically adjust the range.
6. **MENU key:**
   - Press MENU to open the extended system function menu.
   - Use the left/right direction keys to navigate through the expanded menu options.
   - Use F1–F4 keys to customize corresponding system functions.
7. **Direction (Up, Down, Left and Right) keys.** To adjust settings (e.g. voltage, time scale), move cursor position, and navigate through menus.

**2. OSCILLOSCOPE MEASUREMENT MODE:** In oscilloscope mode, the device only measures voltage and displays the waveform as a function of time. This mode can measure voltage signal with very high frequency up to $1\ \text{MHz}$.

1. **Input:** use BNC cable probe (item #2) and connect to the BNC terminal on the top; make sure to lock it by turning it clockwise.
2. **Probe Attenuation Setting:** The probe includes an attenuation switch that affects the signal measurement. It can be set to either X1 or X10.
   **IMPORTANT:** Always ensure the probe's attenuation setting is X1. If necessary, you can adjust the oscilloscope software setting: Press MENU to open the extended menu and press F4 to toggle "PROBE" between X1 and X10.
3. **Oscilloscope Settings:**
   - (a) **Auto Range.** To automatically adjust the vertical and horizontal scales.
   - (b) **Vertical / Horizontal Scale and Position Vertical / Horizontal Scale** Adjustment: Press F1 to select the VOL/TIME menu. Use the Up/Down direction keys to adjust the voltage scale. Use the left/right direction keys to adjust the time scale.
   - (c) **Vertical / Horizontal Position Adjustment:** Press F2 to select the MOVE menu. Use the up/down direction keys to move the waveform vertically. Use Left/Right direction keys to move the waveform horizontally. The trigger cursor will move along with the waveform.
   - (d) **Triggering System Trigger Cursor Setting:** Press F3 to select the TRIG menu. Press up and down direction keys to adjust the trigger position Trigger Mode: Press MENU to expand the pop-up menu, press F2 to the trigger mode. You can select between Auto, Normal, and Single. Trigger Edge: Press MENU to expand the pop-up menu. Press F3 to select the trigger edge mode. You can select between rising edge and falling edge trigger.
   - (e) **Coupling Setting.** Press F4 to switch between AC coupling and DC coupling. For this experiment, use AC coupling only.
   - (f) **Additional tips:** In reading the voltage signal you can obtain the amplitude from the signal waveform on the readout "VPP" (peak-to-peak voltage) or "Vmax" for the maximum voltage or the amplitude. WARNING: Occasionally if there is noise or voltage spikes the "Vmax" reading maybe higher than the actual voltage amplitude. Please verify or use oscilloscope waveform reading for more reliable result.

**3. MULTIMETER MEASUREMENT MODE:** In multimeter mode, the device is used to measure electrical parameters such as voltage and resistance. In AC voltmeter mode it can capture maximal readings with up to 4 significant figures but the frequency is only limited between $40\ \text{Hz}$ to $1\ \text{kHz}$.

1. **Input:** Connect cables with banana jack to the banana input terminal on the front panel.
2. **Measuring voltage:**
   - (a) Press F1 to measure voltage.
   - (b) Press F1 again to toggle between AC and DC voltage ranges (we only use AC voltage mode in this experiment).
   - (c) **NOTE:** For AC voltage measurements in multimeter mode, the frequency range is limited only between $40\ \text{Hz}$ to $1\ \text{kHz}$ range. Please use "Oscilloscope" mode if you want to measure AC voltage with frequency larger than $1\ \text{kHz}$.
3. **Measuring resistance:** Press F2 to measure resistance. If you press F2 again it will cycle through the following modes: resistance, continuity, diode, and capacitance. Make sure to select "resistance" mode.

**4. ADDITIONAL FUNCTIONS:**

1. **Automatic shutdown ("Auto Off"):**
   - (a) Press the MENU key to open the extended system menu.
   - (b) Press F2 to select the automatic shutdown time setting.
   - (c) It is recommended to set it to 15 minutes, to conserve battery power when the device is idle.
2. **Backlight Brightness ("BK Light"):**
   - (a) Press the MENU key to open the extended system menu.
   - (b) Press F3 to adjust the backlight brightness adjustment.

**5. CHARGING THE DIGITAL OSCILLOSCOPE.** To ensure the device is always ready to use, keep track of the battery levels.

1. Battery indicator is displayed at the top right of the display.
2. Charge the handheld oscilloscope using the type-C USB cable and adapter provided.
3. It is not recommended to use the handheld oscilloscope while it is charging, as this may introduce unintended noise.
4. To maintain battery level, we recommend charging the multimeter when it's not in use and also using the automatic shutdown feature.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1H2lhK7RUFoYdMUcPzFGoOHVoXOFY_Jdh/view)
**Topic:** [[Electromagnetic Induction]], [[Circuits]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Graph Linearization (metodo)|Graph Linearization]], [[Curve Fitting (metodo)|Curve Fitting]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Curve Fitting (competenza)|Curve Fitting]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Coil (object)|Coil]], [[Capacitor (object)|Capacitor]], [[Resistor (object)|Resistor]]


<div class="qlang-split" data-lang="it"></div>

### Fisica della cucina a induzione

#### A. Introduzione

![[_attachments/APhO_2025_exp/APhO_2025_exp_p1_f1.png]]
*Figura 1. Una cucina ad induzione.*

Questo problema presenta una fisica della cucina molto interessante: una cucina a induzione. Tale dispositivo consiste principalmente in una bobina, che viene guidata da una corrente alternata che riscalda una padella di metallo sopra. Si tratta di un'alternativa moderna alla cucina che offre diversi vantaggi quali un ambiente di cottura più sicuro (senza incendio o gas infiammabile), utensili più puliti (senza fuliggine), una cottura più veloce ed è più rispettoso dell'ambiente (può essere alimentato da energia elettrica rinnovabile). In questo esperimento esploreremo le fondamentali e affascinanti fisiche di una cucina ad induzione.

L'esperimento ha tre parti. In primo luogo, misureremo l'induttanza della bobina ($L$) e la sua resistenza interna ($R_L$). In secondo luogo, esamineremo i fenomeni della profondità della pelle dei metalli, che sono importanti per la cottura ad induzione. In terzo luogo, determineremo la capacità termico specifica ($c$) delle diverse pannelle di metallo e la loro resistenza efficace al carico ($R_{\text{LOAD}}$).

#### B. Componenti sperimentali

![[_attachments/APhO_2025_exp/APhO_2025_exp_p2_f1.png]]
*Figura 2. - Si', si'. I componenti sono descritti nell'elenco di seguito.*

1. Generatore di funzione (FG) (frequenza di funzionamento: $20\ \text{Hz}$ a $100\ \text{kHz}$).
2. Osciloscopio digitale "Zoyi" + sonda a cavo BNC (1 pc).
3. Una bobina identica montata su una base di plastica (2 pcs).
4. Orologio fermo (1 pc).
5. Cable da banana a banana-jack, due paia (4 pcs).
6. Caccia banane a fili di pin, due coppie (4 pcs).
7. Resistenza metallica gialla "$R_1$" ($1\ \Omega$, $100\ \text{W}$), montata su una scatola nera (1 pc).
8. Scatola nera con quattro prese di banana femminile (1 pc).
9. Capacitori $470\ \text{nF}$ (bruno), $470\ \mu\text{F}$, $1000\ \mu\text{F}$, $2200\ \mu\text{F}$ (cylindri blu scuro) (1 pc ciascuno).
10. M3 chiave Allen (L) (1 pc).
11. "Pane" di alluminio con termistor NTC (coefficiente di temperatura negativo) collegato, dimensione $= 2\ \text{cm} \times 2\ \text{cm}$, spessore $= 0.73\ \text{mm}$ (1 pc). Entrambe le superfici hanno un aspetto: argento / argento.
12. "Pane" in acciaio inossidabile SS410 con termistor NTC collegato, dimensione $= 2\ \text{cm} \times 2\ \text{cm}$, spessore $= 0.76\ \text{mm}$ (1 pc). Entrambe le superfici hanno un aspetto simile a quello di uno specchio.
13. Piastre di alluminio, dimensioni $= 2.7\ \text{cm} \times 4.6\ \text{cm}$, spessore $= 0.73\ \text{mm}$, permeabilità magnetica relativa $\mu_r = 1$ (5 pcs). Entrambe le superfici hanno un aspetto: argento / argento.
14. Piastre di rame, dimensioni $= 2.7\ \text{cm} \times 4.6\ \text{cm}$, spessore $= 0.71\ \text{mm}$, permeabilità magnetica relativa $\mu_r = 1$ (5 pcs). Entrambe le superfici: arancione-rosso / arancione-rosso.
15. Piastre in acciaio inossidabile "SS304" di dimensioni $= 2.7\ \text{cm} \times 4.6\ \text{cm}$, spessore $= 0.72\ \text{mm}$, permeabilità magnetica relativa $\mu_r = 1$ (4 pcs). Apparenza superficiale: uno specchio laterale, l'altro noioso.
16. Piastre in acciaio inossidabile "SS410", di dimensioni $= 2.7\ \text{cm} \times 4.6\ \text{cm}$, spessore $= 0.76\ \text{mm}$, permeabilità magnetica relativa $\mu_r = 700$ (4 pcs). Apparizione superficiale: specchio / specchio.
17. Carreggiatore e cavo USB-C per l'oscilloscopio digitale portatile (1 pc).

![[_attachments/APhO_2025_exp/APhO_2025_exp_p3_f1.png]]
*Figura 3. La configurazione della cucina ad induzione, (1): terminali di pin della bobina, (2): fissature, (3): bobina n. 1, (4): bobina n. 2.*

##### Parametri e costanti

 Parametro  Costante  Simbolo  Valore 
|---|---|---|
| Stefan–Boltzmann | $\sigma_S$ | $5.670 \times 10^{-8}\ \text{W}\,\text{m}^{-2}\,\text{K}^{-4}$ |
| Magnetic permeability in vacuum | $\mu_0$ | $4\pi \times 10^{-7}\ \text{H/m}$ |
| Mass density of Al | $\rho_{\text{Al}}$ | $2700\ \text{kg/m}^3$ |
| Mass density of SS410 | $\rho_{\text{SS410}}$ | $7700\ \text{kg/m}^3$ |
| Emissivity of Al | $e_{\text{Al}}$ | $0.65$ |
| Emissivity of SS410 | $e_{\text{SS410}}$ | $0.8$ |

> **Nota: **
> 1. Si prega di leggere la sezione D: "Procedure di funzionamento delle apparecchiature".
> 2. In tutti gli esperimenti abbiamo bisogno di un condensatore $C$ per formare una configurazione di circuito RLC serie, perché senza un condensatore (cioè La bobina potrebbe diventare molto calda.
> 3. In tutti gli esperimenti non è necessaria l'analisi degli errori.
> 4. Per tutti gli esperimenti, imposta la selezione "Waveform" del Function Generator alla funzione "Sine".
> 5. Limita la corrente alla bobina a un massimo di circa $2\ \text{A-peak}$.
> 6. Per l'oscilloscopio digitale, la modalità "oscilloscopio" è utilizzata per misurare la tensione, la frequenza e la visualizzazione delle forme d'onda. La misura della resistenza è effettuata in modalità "multimetro".
> 7. È possibile collegare la sonda osciloscopico (articolo #2) a un cavo banana-to-banana (#5) per facilitare la connessione a vari terminali "banana".

#### C. L'esperimento

###### C.1 Esperimento #1: Caratterizzazione della bobina di induzione (4.5 pts)

Il primo componente chiave della cucina a induzione è la bobina. In questo esperimento misureremo l'auto-induzione ($L$) della bobina # 1 (la bobina superiore) come mostrato nella figura. 3b. Questa bobina può essere modellata come un induttore ideale $L$ in serie con una resistenza interna della bobina $R_L$.

We will use a series RLC circuit with the yellow metal resistor $R_1$, coil#1 and a capacitor. Ci sono quattro condensatori diversi. Si prega di notare che la tensione di uscita del Function Generator (FG) può variare con la variazione della frequenza, come l'impedenza di carico.

**1.1 ** *(0.4 pt) *  Sceglierete il circuito e etichettatelo su tutte le parti pertinenti. La resistenza di tutti i cavi ($R_C$), che contribuisce alla resistenza totale ($R_{\text{TOT}}$) nel circuito, non è trascurabile. Determina $R_C$ con l'ohmmetro.

**1.2** *(1.2 pt) *  Determinare la frequenza di risonanza del circuito RLC con due condensatori diversi: $C = 470\ \text{nF}$ e $2200\ \mu\text{F}$. Registrate i dati sperimentali in una tabella. Tracciare una cornice di risonanza appropriata e determinare $L$.

**1.3** *(0,5 pt) *  Vogliamo anche determinare la resistenza della bobina $R_L$. Si potrebbe notare che i dati di risonanza di un condensatore non sono sufficienti per determinare con precisione $L$. Pertanto, sviluppare un modello di equazione lineare alternativa in modo da poter estrarre sia $L$ e $R_L$ dall'esperimento RLC serie.

**1.4** *(1.4 pt) *  Eseguire l'esperimento per gli altri due condensatori: $C = 470\ \mu\text{F}$ e $1000\ \mu\text{F}$. Registrate i vostri dati. Analizzare tutti e quattro i set di dati RLC usando il tuo nuovo modello. Concentrati sulla gamma di frequenze appropriata e tracciate grafici appropriati.

**1.5** *(1.0 pt) *  Determina $R_L$ e $L$ per tutti gli esperimenti con i quattro condensatori. Calcola le loro medie.

##### C.2 Esperimento #2: Induzione reciproca e profondità della pelle (8,1 pt)

> **Nota: **
> 1. In questo esperimento #2, si prega di utilizzare un circuito RLC di serie con $C = 1000\ \mu\text{F}$ per guidare la bobina.
> 2. Se il segnale di tensione è troppo basso per l'oscilloscopio digitale, è possibile: (1) Amplificare il segnale di 10x scegliendo MENU > F4 per togliere "PROVATE" tra 1x e 10x. (2) Presi "RISPONERE/SAVARE" per congelare il display.
> 3. Quando si usa l'oscilloscopio digitale per misurare la tensione, la lettura "VMAX" può essere imprecisa se vi sono rumori o "spikes". Leggi l'ampiezza del segnale direttamente dalla forma d'onda.

###### A. Induttura reciproca

In questo esperimento numero 2 useremo le due bobine come mostrato nella figura. 4 ma senza piastre di metallo. In primo luogo, misureremo l'induzione reciproca $M$ tra le due bobine. In base alla legge di Faraday, il cambiamento di corrente nella prima bobina indurrà una tensione nella seconda bobina.

**2.1** *(0.4 pt)*  Sceglierete la vostra configurazione sperimentale per determinare l'inductanza reciproca tra le due bobine.

**2.2** *(1.0 pt) *  È necessario eseguire la misurazione per l'induzione reciproca $M$ due volte, invertendo i ruoli delle bobine. Eseguire le misurazioni, registrare i dati e tracciare i grafici appropriati per ciascuna configurazione.

**2.3** *(0,4 pt) *  Determinare l'induzione reciproca $M$ per ciascuna configurazione.

###### B. Esperimento di profondità della pelle

![[_attachments/APhO_2025_exp/APhO_2025_exp_p5_f1.png]]
*Figura 4. Esperimento di profondità della pelle, (1): terminali di pin di bobina, (2): bobina 1, (3): piastre metalliche, (4): bobina 2.*

Il concetto di "profondità della pelle" svolge un ruolo importante nella cucina a induzione. La "profondità della pelle" caratterizza la profondità di penetrazione del campo elettromagnetico indotto dal corrente alternata (AC) nel metallo. In questo esperimento esamineremo la profondità della pelle di vari metalli che possono essere utilizzati come padelle da cucina. La sua frequenza-dipendenza sarà esaminata e la conduttività elettrica dei metalli ($\sigma$) misurata.

Abbiamo impostato la bobina # 1 come bobina primaria e la bobina # 2 come bobina secondaria. Poiché lo spessore totale del metallo ($\sim 3\ \text{mm}$) è piccolo rispetto alla distanza della bobina ($15\ \text{mm}$), possiamo presumere che il campo magnetico in fondo, vicino alla bobina secondaria, sia approssimativamente costante (se non c'è metallo).

In base alle equazioni di Maxwell, quando un campo elettrico o magnetico oscillante penetra un conduttore, il campo all'interno del conduttore diminuisce esponenzialmente con la distanza di penetrazione $z$:

$$B(z) = B_0\, e^{-z/\delta} \cos\!\left(\omega t - z/\delta + \phi\right) \tag{1}$$

se $B_0$ è l'ampiezza del campo magnetico prima di entrare nel conduttore, $\delta$ è la "profondità della pelle" e $\phi$ è la fase. Nota: ignoriamo il fattore di fase $(-z/\delta + \phi)$ in questo esperimento.

La profondità della pelle in un conduttore è data come segue:

$$\delta = \sqrt{\frac{\sigma^m f^n}{\pi \mu}} \tag{2}$$

se $\sigma$ è la conducibilità elettrica, $f$ è la frequenza, $\mu = \mu_r \times \mu_0$ è la permeabilità magnetica, e $m$ e $n$ sono fattori di potenza che sono enti e che devono essere determinati in questo esperimento.

Esperienti effettuati su quattro metalli: (1) alluminio, (2) rame, (3) acciaio inossidabile "SS304" e (4) acciaio inossidabile "SS410". Inserendo i metalli tra le bobine, la tensione nella bobina secondaria diminuirà a causa dell'"istrutto" del campo magnetico della corrente di correnti eddy nel metallo.

> **Nota:** Prima esplorare la gamma di frequenze appropriata che produce cambiamenti significativi nella tensione della bobina secondaria.

**2.4** *(5,5 pt) *  Sviluppare un modello con equazioni e eseguire l'esperimento per determinare $n$ per ogni metallo (arrotondato al numero intero più vicino). Registrare i dati; è possibile utilizzare la regressione lineare per analizzare i dati come necessario per ottenere i punti dati per tracciare i grafici finali per ogni metallo, per ottenere $n$ e $\sigma$ (che verrà chiesto nella Q2.6). Identificare un metallo che non dà buoni dati a causa di un valore estremo di profondità della pelle, e quindi puoi ignorarlo per Q2.5 e Q2.6.

**2.5** *(0,2 pt) *  Usando l'analisi dimensionale, dedurre dal risultato precedente il fattore di potenza di conduttività $m$.

**2.6** *(0,6 pt) *  Determina $\sigma$ per i tre metalli che producono buoni dati nel Q2.4.

##### C.3 Esperimento n. 3, "Cucinazione": capacità termica specifica e resistenza efficace al carico (7,4 pt)

> **Noti: **
> 1. In questo esperimento # 3, si prega di utilizzare un circuito RLC di serie con $C = 1000\ \mu\text{F}$ per guidare la bobina.
> 2. ** AVVERTENZA: ** Per evitare il surriscaldamento, si prega di limitare la corrente massima della bobina a circa $2\ \text{A-peak}$.
> 3. Per operare la " cucina ad induzione " si prega di utilizzare una frequenza di $f = 40\ \text{kHz}$.

![[_attachments/APhO_2025_exp/APhO_2025_exp_p7_f1.png]]
*Figura 5. L'impostazione dell'esperimento di cottura ad induzione, (1): bobina n°1, (2): piastre di metallo, (3): bobina n°2, (4): NTC.*

In questo esperimento useremo l'alluminio e il metallo SS410 come "pani di cucina". Prima di tutto montare la "pan" in alluminio (articolo 11), appiccare la piattaforma superiore e poi girarla a testa in giù come mostrato nella figura. 5. Utilizzerete la bobina n. 2, che è ben separata dalla "pan", in modo che non vi sia alcun trasferimento di calore tra di loro mediante conduttività.

Metti la configurazione all'interno della scatola nera (articolo #8) in modo che la perdita di convezione sia trascurabile. Poiché la "pan" metallica si trova su una piattaforma di plastica (un isolante termico), presumiamo anche che non si perda calore a causa della conduzione. Pertanto l'unica perdita di calore è dovuta alle radiazioni che si diffondono nell'ambiente circostante. La potenza di radiazione di un corpo a temperatura $T$ è data come segue:

$$P_{RAD} = e A \sigma_S T^4 \tag{3}$$

dove $e$ è l'emissività, $\sigma_S$ è la costante di StefanBoltzmann e $A$ è la superficie irradiante.

Possiamo misurare la temperatura del "pan" metallico misurando la resistenza del termistor NTC (attaccato), che viene data come:

$$R_{NTC} = R_0\, \exp\!\left[B\left(\frac{1}{T} - \frac{1}{T_0}\right)\right] \tag{4}$$

se $R_0 = 10\ \text{k}\Omega$ è la resistenza nominale alla temperatura di riferimento $T_0 = 298\ \text{K}$, $B = 3950\ \text{K}$ è una costante e $T$ è la temperatura del termistor (in K).

**3.1** *(0,2 pt)*  Disegnare un diagramma per illustrare il funzionamento della cucina ad induzione. Etichettare tutte le quantità fisiche coinvolte.

**3.2** *(0,5 pt) *  Sviluppare un modello fisico con equazioni per determinare il calore specifico ($c$) delle pannelle metalliche.

**3.3** *(1,5 pt) *  Eseguire un esperimento per determinare il calore specifico della padella in alluminio e tracciare grafici appropriati. Usa la bobina numero 2 per riscaldare la padella.

**3.4** *(1,5 pt) *  Ripetere Q3.3 per la "pan" SS410.

![[_attachments/APhO_2025_exp/APhO_2025_exp_p8_f1.png]]
*Figura 6. Modello equivalente per una cucina a induzione.*

Infine, possiamo modellare il riscaldamento del "pan" metallico come se introdusse una "resistenza al carico" $R_{\text{LOAD}}$ al circuito come mostrato nella figura. 6. In altre parole, il sistema di bobine e pannelli metallici può essere modellato come induttanza della bobina $L$, resistenza della bobina $R_L$ e "resistenza al carico" $R_{\text{LOAD}}$.

**3.5** *(1.6 pt) *  Sviluppare un modello e eseguire un esperimento per determinare $R_{\text{LOAD}}$ per il "pan" Al. - Disegnare i dati appropriati. Suggerimento: eseguire le misure dopo circa 30 secondi di potenza applicata per garantire che la bobina fornisca una potenza costante e che il calore sia distribuito in modo più uniforme.

**3.6** *(1.5 pt) *  Ripetere Q3.5 per la "pan" SS410.

**3.7** *(0.1 pt) *  Quale funziona meglio come cassetta da cucina? Scegli una: a) alluminio o b) SS410.

**3.8 ** *(0,1 pt) *  Quale parametro fisico svolge il ruolo più dominante nell'effetto di riscaldamento a induzione nella scelta di cui sopra? Scegli una: (a) conduttività elettrica, (b) permeabilità magnetica, (c) densità di massa, (d) calore specifico o (e) conduttività termica.

**3.9** *(0,4 pt) *  L'efficienza di cottura ad induzione ($\eta$) è definita come il rapporto tra la potenza fornita alla piastra e la potenza fornita alla bobina. Calcolare l'efficienza per entrambe le piastrelle di metallo.

#### D. Procedure di funzionamento delle apparecchiature

##### D.1. Cassa Generatore di Funzioni

![[_attachments/APhO_2025_exp/APhO_2025_exp_p9_f1.png]]
*Figura 7. La casella del generatore di funzioni.*

Componenti:

1. Indicatore di LED di potenza.
2. Capo di amplitudine: per regolare l'ampiezza del segnale di uscita.
3. Capo di gamma di frequenze: per scegliere la gamma di frequenze.
4. Buttoni grossi e fini: per regolare la frequenza all'interno della gamma.
5. Fonte di forma d'onda: per scegliere "sin", "triangolo" o "quadrato". In questi esperimenti: **sempre scegli la funzione "sin"**.
6. La produzione di BNC prima dell'amplificazione: **non utilizzata qui**. È utilizzato per monitorare il segnale originale prima dell'amplificatore.
7. Uscita con terminal con jack banano.
8. - Prossima.
9. Pulsante di alimentazione: accendere o spegnere.
10. - Cassa dei fusibili.

##### D.2. Osciloscopio digitale

![[_attachments/APhO_2025_exp/APhO_2025_exp_p10_f1.png]]
*Figura 8. Osciloscopo digitale.*

**1. FUNZIONI CLAVE DEL PANEL.** Queste chiavi consentono di navigare attraverso le impostazioni, selezionare le funzioni e regolare le misure.

1. ** Taste F1F4:** Queste taste corrispondono al menu funzionale visualizzato in basso sullo schermo.
2. **TENERE/SAVARE chiave: **
- In modalità osciloscopo: Presione breve: congelare o riprendere l' visualizzazione della forma d' onda. Presione lunga: salvare i dati di forma d'onda attualmente visualizzati.
- In modalità multimetro: premere breve: congelare o riprendere la lettura della misura.
3. Tastiera **MODE: ** Per passare dalla modalità "Oscilloscope" alla modalità "Multimetro".
4. **TIAVOLLA DEL POWER: ** Presi per $\sim 2$ sec per accendere o spegnere l'unità.
5. **Tastiera AUTOMATICA: ** Per regolare automaticamente la gamma.
6. **MENU key:**
- Presi MENU per aprire il menu di funzioni del sistema esteso.
- Usa i tassi direzione sinistra/destra per navigare nelle opzioni del menu esteso.
- Utilizzare le chiavi F1F4 per personalizzare le funzioni del sistema corrispondenti.
7. **Tasti di direzione (Su, In basso, Sinistra e Destra).** Per regolare le impostazioni (ad esempio: voltage, scala temporale), spostare la posizione del cursore e navigare attraverso i menu.

**2. MODO DI MESURACIA OSCILLOSCOPE:** In modalità oscilloscope, il dispositivo misura solo la tensione e visualizza la forma d'onda in funzione del tempo. Questa modalità può misurare il segnale di tensione con frequenza molto elevata fino a $1\ \text{MHz}$.

1. **Input:** utilizzare la sonda del cavo BNC (articolo #2) e collegarsi al terminale BNC in alto; assicurarsi di bloccarlo girando in senso orario.
2. **Impostazione di attenuazione della sonda:** La sonda include un interruttore di attenuazione che influisce sulla misurazione del segnale. Può essere impostato su X1 o X10.
**IMPORTANT: ** Assicurarsi sempre che la configurazione di attenuazione della sonda sia X1. Se necessario, è possibile regolare l'impostazione del software dell'oscilloscopio: premere MENU per aprire il menu esteso e premere F4 per passare "PROVARE" tra X1 e X10.
3. **Impostazioni dell'oscilloscopio: **
- a) **Range Auto.** Per regolare automaticamente le scale verticali e orizzontali.
- (b) **Scala verticale/orizzontale e posizione Verticale/orizzontale** Regolazione: premere F1 per selezionare il menu VOL/TIME. Utilizzare i tassi direzione Su/Sotto per regolare la scala di tensione. Utilizzare i tassi direzione sinistra/destra per regolare la scala temporale.
- (c) **Regolazione della posizione verticale/orizzontale:** Presi F2 per selezionare il menu MOVE. Utilizzare le chiavi direzione su/basso per spostare la forma d'onda verticalmente. Utilizzare le chiavi direzione sinistra/destra per spostare la forma d'onda orizzontalmente. Il cursore del trigger si muoverà con la forma d'onda.
- (d) **Sistema di scatenazione Impostazione del cursore di scatenazione:** Presi F3 per selezionare il menu TRIG. Premere i tasti di direzione in su e in giù per regolare la posizione del trigger Modalità di attivazione: Premere MENU per espandere il menu pop-up, premere F2 in modalità di attivazione. Puoi scegliere tra Auto, Normal e Single. Trigger Edge: premere MENU per espandere il menu pop-up. Presi F3 per selezionare la modalità di spinta. Puoi scegliere tra il rimbalzo di rimbalzo in salita e il rimbalzo di rimbalzo in caduta.
- e) **Impostazione del connettimento.** Presi F4 per passare dal connettimento CA al connettimento DC. Per questo esperimento, utilizzare solo accoppiamento AC.
- (f) **Tippi aggiuntivi:** Nel leggere il segnale di tensione è possibile ottenere l'ampiezza dalla forma d'onda del segnale sulla lettura "VPP" (voltaggio picco-picco) o "Vmax" per la tensione massima o l'ampiezza. AVVERTENZA: occasionalmente, se c'è rumore o picchi di tensione, la lettura "Vmax" può essere superiore all'ampiezza di tensione effettiva. Per ottenere risultati più affidabili, verificare o utilizzare la lettura delle forme d'onda dell'oscilloscopio.

**3. Modo di misurazione del multimetro:** In modalità multimetro, il dispositivo viene utilizzato per misurare parametri elettrici come tensione e resistenza. In modalità voltometro a corrente continua può catturare le letture massime con fino a 4 cifre significative, ma la frequenza è limitata solo tra $40\ \text{Hz}$ e $1\ \text{kHz}$.

1. **Input: ** Collegare i cavi con jack alla banana al terminal di ingresso alla banana sul pannello anteriore.
2. **Voltaggio di misura: **
- a) Presi F1 per misurare la tensione.
- (b) Presi F1 di nuovo per passare tra le fasce di tensione AC e DC (utilizzeremo solo la modalità di tensione AC in questo esperimento).
- (c) **NOTA:** Per le misurazioni di tensione a corrente in modalità multimetro, la gamma di frequenze è limitata solo tra $40\ \text{Hz}$ e $1\ \text{kHz}$. Per misurare la tensione a corrente a frequenza superiore a $1\ \text{kHz}$, si prega di utilizzare la modalità "oscilloscopio".
3. **Metteria della resistenza:** Presi F2 per misurare la resistenza. Se si premere F2 di nuovo, il ciclo passera' attraverso le seguenti modalità: resistenza, continuità, diodo e capacitanza. Assicurati di selezionare la modalità "resistenza".

**4. FUNZIONI ADDITIONALI: **

1. **Stocco automatico ("Stocco automatico"): **
- (a) Presi il tasto MENU per aprire il menu sistema esteso.
- b) Presione F2 per selezionare l'impostazione del tempo di spegnimento automatico.
- (c) Si consiglia di impostarlo a 15 minuti, per conservare la potenza della batteria quando il dispositivo è inattivo.
2. **Luminanza di retroilluminazione ("Lumina BK"):**
- (a) Presi il tasto MENU per aprire il menu sistema esteso.
- (b) Presi F3 per regolare la luminosità di retroilluminazione.

**5. RICARGARE L'OSCILLOSCOPO DIGITALE.** Per assicurarsi che il dispositivo sia sempre pronto all' uso, tenere traccia dei livelli di batteria.

1. L'indicatore della batteria è visualizzato in alto a destra del display.
2. Caricare l'oscilloscopio portatile utilizzando il cavo USB di tipo C e l'adattatore fornito.
3. Non è raccomandato utilizzare l'oscilloscopio portatile mentre si sta caricando, in quanto questo può provocare rumori non intenzionali.
4. Per mantenere il livello della batteria, consigliamo di caricare il multimetro quando non è in uso e anche utilizzare la funzione di spegnimento automatico.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1H2lhK7RUFoYdMUcPzFGoOHVoXOFY_Jdh/view)
**Topic:** [[Electromagnetic Induction]], [[Circuits]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Graph Linearization (metodo)|Graph Linearization]], [[Curve Fitting (metodo)|Curve Fitting]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Curve Fitting (competenza)|Curve Fitting]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Coil (object)|Coil]], [[Capacitor (object)|Capacitor]], [[Resistor (object)|Resistor]]
