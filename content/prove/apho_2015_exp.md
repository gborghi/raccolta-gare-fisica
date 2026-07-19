---
title: APhO 2015 — Sperimentale
tipo: prova
tags:
  - kg/prova
  - paese/asia
  - comp/APhO
---
<div class="atom-reader" data-prova="apho_2015_exp"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="APhO 2015 — Sperimentale — Quesito 1" data-tags="kg/prova,paese/Asia,comp/APhO,topic/circuits,argomento/elettromagnetismo,difficolta/4,multidisciplina/multi,object/capacitor,object/inductor,object/spring"></span>

<div class="qlang-switch" data-default="en"></div>



### The Piezoelectric Effect And Its Applications

#### 1. Introduction

The piezoelectric effect refers to the process whereby electric charge accumulates in solid materials in response to applied mechanical stress (see Figure 1(a)). It is reversible, which means that materials exhibiting the piezoelectric effect also exhibit the **converse piezoelectric effect**, i.e. the internal generation of a mechanical strain resulting from an applied electric field (see Figure 1(b)).

<!--fig:start-->
![[APhO_2015_exp_p3_f1.png]]
*Figure 1. (a) The piezoelectric effect. Left: a yellow piezoelectric cube under no mechanical stress. Right: the electric charge accumulates on opposite surfaces of the cube in response to applied mechanical stress. (b) The converse piezoelectric effect. Left: without applying an electric field, the cube is un-stressed and remains in its natural shape. Right: the cube is stressed and deformed resulting from an applied electric field.*
<!--fig:end-->

Piezoelectric materials are used in a wide range of applications, from industrial and manufacturing to daily life, such as the production and detection of sound, generation of high voltages, microbalances, ultra-fine focusing of optical assemblies, ignition source for cigarette lighters, push-start propane barbecues, and quartz watches.

In addition, piezoelectric materials are actively used in scientific research. As very high electric fields correspond to only tiny changes in the dimensions of the piezoelectric materials, they are the most important tool for positioning objects with extreme accuracy. They are the basis of some commonly used tools in surface science, the scanning tunneling microscope (STM) and its variants. The 1986 Nobel Prize in physics was awarded to Gerd Binnig and Heinrich Rohrer for their design of the STM. Another merit of piezoelectric materials is that they can enable conversion of signals between different modes such as mechanical, electrical and optical. With the help of ultra-low temperatures and state-of-the-art electronics, researchers have been able to cool down the mechanical mode to its ground state and observe the quantization of motion. The experiment of creating such a quantum machine, a mechanical resonator made of piezoelectric aluminum nitride, was titled "Breakthrough of the Year 2010" by *Science* magazine.

There are many piezoelectric materials, both natural and synthetic. Some naturally occurring materials include quartz, bone and silk; synthetic materials include ceramics, semiconductors and polymers. Lead zirconate titanate ($\mathrm{Pb[Zr}_x\mathrm{Ti}_{1-x}\mathrm{]O}_3$), known as **PZT**, is the most common piezoelectric ceramic in use today, exhibiting strong piezoelectricity.

In this APhO 2015 experiment, we explore the properties of PZT and its applications. For a given PZT plate, we measure its piezoelectric coefficient via the resonant method and estimate its Curie temperature by linear extrapolation. We make a transducer out of a PZT plate to produce mechanical motions and sound waves in a medium, and a sensor out of a PZT plate for sensing the strength of sound waves. With the hand-made transducer and sensor, we measure the longitudinal and transverse wave velocities of sound in an aluminum rod. Finally, we use sound waves to resonantly locate an artificially-designed defect in another aluminum rod.

#### 2. General Safety Precautions

1. Be sure to switch off the equipment before plugging its power cord in/out. Otherwise damage can occur.
2. Do not turn on the thermostat water bath if the heating unit is not covered by water.
3. Be careful not to spill the water onto nearby electronics and the electrical power socket.
4. Be careful of the hot water.
5. Be careful of electric shock.
6. Do not drink/consume any of the materials provided for the experiment.

#### 3. Apparatus

1. A signal generator which can output simple repetitive electrical waveforms over a wide range of frequencies.
2. A digital multimeter (DMM).
3. 5 PZT plates. The two flat surfaces of each plate are coated with thin films of silver.
4. A Vernier caliper.
5. An electronic weighing scale.
6. A Kelvin clip. The Kelvin clip features a crocodile clip with two isolated jaws, connected to two banana plugs respectively. It is used to clamp a PZT plate.
7. A cable with two banana plugs connecting to two crocodile clips. One jaw of each crocodile clip is wrapped by a black tube, so it is important to have the correct polarity when clamping.
8. A thermostat water bath.
9. A plastic bag.
10. Paper towels.
11. A plastic clip.
12. A pebble.
13. An aluminum rod.
14. A steel tape measure.
15. A spring.
16. An eraser.
17. A transparent plastic box to accommodate the aluminum rod and the PZT plates together.
18. A black plastic box with an aluminum rod inside. A defect, invisible from outside the box, is artificially engineered at a spot along the rod.
19. A pair of earplugs.
20. 1.5 L bottled water.

##### Instructions for the electronic weighing scale (see Figure 2)

- Place the scale on a flat, very stable surface.
- Press the "ON/OFF" button to turn on the scale.
- Wait until the reading is stable. If the reading is not zero, press the "TARE" button to re-zero it.
- Press the "MODE" button to toggle units between "g", "gn", "oz", "ozt", "dwt", "ct" and "tl". It is recommended that you use the unit "g" (gram).

<!--fig:start-->
![[APhO_2015_exp_p7_f2.png]]
*Figure 2. An electronic weighing scale.*
<!--fig:end-->

##### Instructions for the signal generator (see Figure 3)

- To turn on the machine, connect the detachable USB power cord (with the AC adapter) to the rear panel receptacle and turn on the front panel power button.
- The "Display Panel" shows the wave frequency and the wave type (sine, square, or triangle). We recommend sine for the experiment.
- Use the "Amplitude" knob to adjust the signal amplitude. Use the "Adjust" knob to change the signal frequency. Use the "◄" or "►" button to move the cursor.
- Be careful when tuning the "DC offset" knob. This knob changes the DC offset of the signal. A big DC offset may cause signal clipping (see Figure 4(a)). It is recommended that you calibrate the DC offset before using the signal generator: while using the DMM to monitor the DC voltage of the output, adjust the "DC Offset" knob until the DC voltage reaches zero.
- It is also recommended that you do not tune the "Amplitude" knob to maximum, to avoid signal clipping (see Figure 4(b)). You can tune the output amplitude to $3.0\ \mathrm{V}$ (rms) for the experiment: while using the DMM to monitor the AC voltage of the output at a frequency of, e.g., $1\ \mathrm{kHz}$, adjust the "Amplitude" knob until the AC voltage reaches about $3.0\ \mathrm{V}$ (rms).
- If you press a button by mistake and do not know how to return to the original configuration, restart the machine to restore the default configuration.

<!--fig:start-->
![[APhO_2015_exp_p8_f3.png]]
*Figure 3. A signal generator.*
<!--fig:end-->

<!--fig:start-->
![[APhO_2015_exp_p8_f4.png]]
*Figure 4. Two symptoms of signal clipping. (a) Signal clipping when the DC offset is nonzero. (b) Signal clipping when the output amplitude is too large.*
<!--fig:end-->

##### Instructions for the digital multimeter (DMM; see Figure 5)

- Use the "V$\Omega$" and "COM" inlets for measuring voltage, resistance and capacitance.
- Use the "mA" and "COM" inlets for measuring current.
- Use the rotary switch to select the proper function and measuring range.
- Toggle between the AC and DC modes by pressing the YELLOW button.
- The DMM enters the "Sleep mode" and blanks the display if it remains inactive for more than 20 minutes. Turn the rotary switch to OFF and back to wake it up. To disable the Sleep mode, hold down the YELLOW button while turning the DMM on.
- **Attention:** although it is usable for the experiment with frequencies up to $40\ \mathrm{kHz}$, the DMM is not designed for accurately measuring the amplitude values of AC signals above $1\ \mathrm{kHz}$. To calibrate the output voltage of the signal generator using the DMM, you should set the signal frequency to $1\ \mathrm{kHz}$ or below.

<!--fig:start-->
![[APhO_2015_exp_p9_f5.png]]
*Figure 5. A digital multimeter.*
<!--fig:end-->

##### Instructions for the thermostat water bath (see Figure 6)

- Surfaces can become hot during use.
- It is strictly prohibited to turn on the machine if the heating unit is not covered by water.
- Be careful not to spill water onto the nearby electronics and the power socket.
- Fill in bottled water for the bath to be about half full. Properly connect the power cord and turn the bath on.
- To set the target temperature, press the "Set" button to enter the "Set" mode (the "Set" indicator will illuminate). Use the "Increasing" ("Decreasing") button to increase (decrease) the displayed value to the target temperature. Press the "Set" button again to exit the "Set" mode and the water bath will start heating automatically. Check the "Temperature display" for actual temperature readings.
- During heating, the "Heat" indicator illuminates. After reaching the set temperature, the "Keep" indicator will illuminate and heating will stop.
- It is recommended that you ramp up the temperature gradually from low to high during the experiment.

<!--fig:start-->
![[APhO_2015_exp_p10_f6.png]]
*Figure 6. A thermostat water bath.*
<!--fig:end-->

---

### Experiment A — Basic measurement [3.0 pts]

In this experiment, you are required to measure the dimensions, the mass and the capacitance of a PZT plate, and then calculate its density $\rho$ and relative permittivity $\varepsilon_r$.

Please choose a PZT plate. You are supposed to perform Experiments A, B and C using this same plate.

In Experiments A to E, error analysis is required if it is explicitly stated; it is not required if it is not stated.

**A.1** [1.6 pts]
Choose a PZT plate and use the Vernier caliper to measure its length $l$, width $w$, and thickness $t$. Use the electronic weighing scale to measure its mass $m$. Use the DMM and the Kelvin clip to measure its capacitance $C$ (at ambient temperature).
Considering the slight non-uniformity in the dimensions of the PZT plate and the uncertainties of instrumental readings, repeat each measurement several times and then calculate the mean and the standard error.

> **Attention:** The relative permittivity of the PZT plate is temperature dependent (see Experiment C). You are supposed to perform the capacitance measurement at ambient temperature. Avoid the direct warming up of the plate by your hand.

**A.2** [1.4 pts]
Now calculate the density $\rho$ and the relative permittivity $\varepsilon_r$ of the PZT plate. Based on the standard errors obtained from A.1, carry out the error analysis to estimate the uncertainties of $\rho$ and $\varepsilon_r$ (vacuum permittivity $\varepsilon_0 = 8.85\times10^{-12}\ \mathrm{F/m}$).

---

### Experiment B — The resonant method to measure the piezoelectric coefficient [4.5 pts]

<!--fig:start-->
![[APhO_2015_exp_p12_f7.png]]
*Figure 7. The PZT plate.*
<!--fig:end-->

As described in the introduction, the piezoelectric plate produces distortion (also called strain $S$) when subjected to an electric field. The proportionality coefficient $d$ of the strain $S$ versus the electric field strength $E$ is defined as the **piezoelectric coefficient**:

$$d = \frac{S}{E}.$$

In reality, the PZT plate is anisotropic. There is a special direction called the **polarization direction**. During production of the PZT plate, a strong DC electric field is applied along its thickness direction ($z$-axis in Figure 7) to align the molecular dipoles of the ceramic at a temperature higher than the Curie temperature (see Experiment C). This polarization remains after the temperature is reduced below the Curie temperature and the DC electric field is removed.

The top and bottom flat surfaces of the plate are coated with silver films as electrodes (see Figure 7). The electric field is along the $z$-axis (3) when the electrodes are connected to a voltage source, and we shall denote it as $E_3$. Here we define

$$d_{31} = \frac{S_1}{E_3}, \qquad d_{33} = \frac{S_3}{E_3},$$

where $S_1 = \Delta l / l$ and $S_3 = \Delta t / t$ are the strains along the $x$-axis (1) and $z$-axis (3), respectively. Note that the strain is not necessarily parallel to the electric field $E_3$. For PZT materials, $d_{31}$ is roughly half of $d_{33}$. According to the parameters in Experiment A, it can be shown that the length $l$ changes the most when a voltage $V$ is applied across the electrodes, i.e.,

$$\Delta l = l\,d_{31}E_3 = \frac{l}{t}\,d_{31}V,$$
$$\Delta w = \frac{w}{t}\,d_{31}V,$$
$$\Delta t = t\,d_{33}E_3 = d_{33}V \approx 2\,d_{31}V,$$

where $l/t \gg w/t \gg 2$. To simplify the theoretical treatment, for such a long thin plate, vibrations along the width ($y$-axis) and thickness ($z$-axis) directions can be neglected and the problem reduces to a one-dimensional vibration problem. As such we remove the redundant subscript and simply denote $d_{31}$ as $d$. In Experiments D and E the ignored vibration along the width ($y$-axis) direction may cause slight imperfection to the measurement.

The PZT plate performs like a pure capacitor (with a capacitance $C$ from A.1) when driven by low-frequency signals. However, as frequency increases, the vibration of the PZT plate changes its circuitry behavior significantly. At certain frequencies called **resonant frequencies**, the plate vibrates strongly and its impedance reaches a minimum. Along with the resonant frequencies, there are also frequencies where the impedance reaches a maximum, and we call them **antiresonant frequencies**.

The first resonant frequency $f_r$ of the plate is associated with its fundamental vibration mode along the length direction ($x$-axis). Near $f_r$, the PZT plate can be approximated by a simple circuit, with two capacitors ($C_0$ and $C_1$) and an inductor ($L_1$) being arranged as shown in Figure 8.

<!--fig:start-->
![[APhO_2015_exp_p13_f8.png]]
*Figure 8. The equivalent circuit model (in response to an external signal drive) of the PZT plate near its first resonant frequency. The PZT plate vibrates in its fundamental mode. Under the free boundary condition, the middle point along the length direction is the node.*
<!--fig:end-->

**B.1** [1.0 pts]
Derive the expressions for the resonant frequency $f_r$ and the antiresonant frequency $f_a$ of the equivalent circuit.

The piezoelectric coefficient $d$ can be calculated by the following formula:

$$d = \sqrt{\dfrac{\varepsilon_0\,\varepsilon_r}{128\,f_r^4\,l^2\,\rho\left[\dfrac{1}{(2\pi f_a)^2 - (2\pi f_r)^2} + \dfrac{1}{32 f_r^2}\right]}}\,.$$

Now we perform the experiment to locate $f_r$ and $f_a$. See the circuit schematics in Figure 9. We keep the output amplitude (the voltage $V$) of the signal generator constant, such that the impedance of the PZT plate correlates with the AC current in the circuit.

<!--fig:start-->
![[APhO_2015_exp_p14_f9.png]]
*Figure 9. Circuit schematics for measuring the resonant and antiresonant frequencies.*
<!--fig:end-->

**B.2** [3.5 pts]
Measure the AC current $I$ through the PZT plate as a function of the signal frequency $f$. Draw the $I$–$f$ curve and find the resonant frequency $f_r$ and the antiresonant frequency $f_a$. Calculate the piezoelectric coefficient $d$ accordingly.

Instructions:
1. Connect the signal generator, the DMM and the PZT plate according to Figure 9. Note that the PZT plate should be clamped at the middle point along the length direction using the Kelvin clip, since the middle point is the node under the free boundary condition.
2. The amplitude of the output signal changes little with frequency if the "Amplitude" knob of the signal generator remains untouched. However, the DMM may not respond to signals with a frequency above $40\ \mathrm{kHz}$. Data above $40\ \mathrm{kHz}$ are not required.
3. **Attention:** keep the clamped PZT plate intact during the experiment. Slight movement may cause drifting of the current reading.
4. **Attention:** as mentioned in A.1, you are supposed to perform the measurement at ambient temperature. Avoid the direct warming up of the plate by your hand.
5. **Attention:** if you do not hear any high pitch sound from your testing plate after sweeping frequency and you are confident with your measurement setup, you should contact the organizer as your instruments might be faulty.

---

### Experiment C — The Curie temperature of the PZT plate [4.0 pts]

Most insulators have a dielectric susceptibility which is insensitive to temperature variation. However, the static relative permittivity of the PZT ceramics changes with temperature according to the relation

$$\varepsilon_r = A + \frac{B}{T - T_c}, \qquad \text{where } T > T_c.$$

Here $A$ and $B$ are constants independent of temperature. This relation is known as the **Curie–Weiss law**. The parameters $B$ and $T_c$ are called the **Curie constant** and the **Curie temperature** respectively, named after Pierre Curie.

A phase transition occurs at the transition temperature $T_c$. Above $T_c$, the substance is in the paraelectric phase, in which the elementary dipoles of the various unit cells in the crystal are oriented randomly. Below $T_c$, the elementary dipoles interact with each other, giving rise to an internal field, which lines up the dipoles. A spontaneous polarization appears in the absence of an applied electric field. The relative permittivity below $T_c$ is given as

$$\varepsilon_r = 1 + \frac{B}{2(T_c - T)}, \qquad \text{where } T < T_c.$$

<!--fig:start-->
![[APhO_2015_exp_p15_f0.png]]
*Pierre Curie.*
<!--fig:end-->

From Experiment A we know that $\varepsilon_r \gg 1$. We can ignore the constant term to obtain an approximation of the static relative permittivity as

$$\varepsilon_r = \frac{B}{2(T_c - T)}, \qquad \text{where } T < T_c.$$

Therefore the capacitance of the PZT plate obtained from A.1 could vary with temperature as well. Since the Curie temperature of the PZT plate is much higher than the boiling temperature of water, we will estimate its Curie temperature by linear extrapolation.

**C.1** [1.5 pts]
Now measure the capacitance of the PZT plate at various temperatures and record the data.

Instructions:
1. Use the cable with two banana plugs and two crocodile clips to connect the PZT plate to the DMM. Pay attention to the polarity of the two crocodile clips when clamping the PZT plate. Do not use the Kelvin clip because its ABS plastics will soften when heated.
2. Put the PZT plate inside the plastic bag. Use the plastic clip to clamp the cable and the bag. **Warning:** one side of the bag is open. Do not tear the other side!
3. Pour the $1.5\ \mathrm{L}$ bottled water into the water bath. Immerse the plastic bag in the water. Use the pebble to keep the plastic bag in the water.
4. Turn on the water bath and set the target temperature. **Warning:** it is strictly prohibited to turn on the machine if the heating unit is not covered by water.
5. **Warning:** be very careful with the hot water in the water bath. Remember that water at temperatures higher than $50\ ^\circ\mathrm{C}$ can cause burns. For safety please do not set the temperature higher than $90\ ^\circ\mathrm{C}$.
6. The temperature will rise slowly. Please record the capacitance $C$ of the PZT plate at different temperatures.
7. Turn off the water bath and unplug the power cord from the power socket when the measurement is finished.
8. **Hint:** to speed up the experiment, you can choose to set the target temperature to $90\ ^\circ\mathrm{C}$ and record the capacitance as the temperature rises.

**C.2** [2.5 pts]
Analyze the data, draw a proper plot and calculate the Curie temperature accordingly.

---

### Experiment D — Application: measuring the speed of sound in aluminum [6.5 pts]

In solids, sound can be transmitted as both longitudinal waves and transverse waves. The medium movements responsible for the two types of waves are illustrated below.

<!--fig:start-->
![[APhO_2015_exp_p17_f10.png]]
*Figure 10. Longitudinal and transverse waves in solids.*
<!--fig:end-->

In **longitudinal waves**, oscillation occurs in the longitudinal direction or the direction of wave propagation. Longitudinal waves can be generated in liquids, as well as in solids, because the energy travels through the atomic structure by a series of compression and expansion movements.

In **transverse waves**, displacement of the medium is perpendicular to the direction of wave propagation. Transverse waves require a solid medium for propagation, and cannot effectively propagate in liquids or gases.

In this experiment, we will measure the longitudinal and transverse wave velocities of sound in an aluminum rod. We will first measure the transverse wave velocity, and then the longitudinal wave velocity.

**D.1** [0.6 pts]
Assume that the length of the aluminum rod is $L$ and the wave velocity is $u$. Under the free boundary condition, derive the equation for the frequencies $f_n$ of the standing (resonant) waves along the long rod. Then derive the equation for the wave velocity $u$ from $f_n$.

Now, we use a PZT plate as a transducer to produce sound waves in the aluminum rod, and use another PZT plate as a vibration sensor to detect the reflected sound waves.

First we measure the transverse wave velocity. As discussed in Experiment B, the vibration along the length direction is dominant. We position the transducer and the sensor at one end of the rod, as illustrated in Figure 11. The vibration of the transducer will propagate into the rod via friction, forming transverse waves.

<!--fig:start-->
![[APhO_2015_exp_p18_f11.png]]
*Figure 11. Illustration of the setup for measuring the transverse wave velocity (top view).*
<!--fig:end-->

**D.2** [1.6 pts]
Use the steel tape measure to read the length $L$ of the aluminum rod. Please repeat the measurement several times and calculate the mean and the standard error.

While changing the frequency of the sound waves produced by the transducer, record the peak values monitored by the sensor. Draw a spectrum containing all measured resonant peaks, similar to that shown in Figure 12.

Instructions:
1. Follow steps 2 to 4 to arrange the experimental setup as illustrated in Figure 11. Note that the plastic box is specifically designed to accommodate the setup.
2. Place the aluminum rod in the long trough of the plastic box, and use the eraser to press the PZT plates against one end of the aluminum rod, as illustrated in Figure 11. The two plates should not touch each other.
3. Put the spring on the other end of the trough to gently push the rod against the PZT plates.
4. Connect one PZT plate to the signal generator as the transducer. Connect the other PZT plate to the DMM as the sensor. Pay attention to the polarity when using the crocodile clips.
5. The PZT plate is fragile and there is no extra supply.
6. Use earplugs if you are annoyed by the high pitch sound.
7. It is recommended that you sweep the frequency in the range between $0$ and $40\ \mathrm{kHz}$.

<!--fig:start-->
![[APhO_2015_exp_p19_f12.png]]
*Figure 12. Exemplary spectrum showing all resonant peaks.*
<!--fig:end-->

**D.3** [1.4 pts]
Identify the resonant peaks likely resulting from the transverse waves. Calculate the transverse wave velocity accordingly and carry out the error analysis.

> **Attention:** there might be irrelevant peaks caused by imperfection of the experimental setup, e.g. imperfect free boundary condition. You need to make a judgement and ignore the irrelevant peaks during your analysis.

By changing the contact style between the PZT plates and the rod, we can also measure the longitudinal wave velocity in the rod. Attach the transducer and the sensor to the rod as illustrated in Figure 13. Vibration along the length direction of the transducer will propagate into the rod via compression, forming longitudinal waves.

<!--fig:start-->
![[APhO_2015_exp_p20_f13.png]]
*Figure 13. Illustration of the setup for measuring the longitudinal wave velocity.*
<!--fig:end-->

As discussed in Experiment B, although vibration along the length direction is dominant, vibrations along other directions also exist, which could produce sound waves in the rod and introduce extra resonant peaks in the spectrum as well. Note that vibrations along other directions only introduce transverse waves. Therefore the extra resonant peaks will not coincide with the peaks caused by the longitudinal standing waves.

**D.4** [1.5 pts]
While changing the frequency of the sound waves produced by the transducer, record the peak values monitored by the sensor. Draw a spectrum containing all measured resonant peaks, similar to that shown in Figure 12.

Instructions:
1. Follow steps 2 to 5 to arrange the experimental setup as illustrated in Figure 13. Note that the plastic box is specifically designed to accommodate the setup.
2. Align the two PZT plates in the two slim slots, respectively, on one end of the plastic box.
3. With the long aluminum rod in the trough, use the eraser as a cushion to press the PZT plates against one end of the rod.
4. Insert the spring on the other end to gently push the rod against the PZT plates.
5. Connect one PZT plate to the signal generator as the transducer. Connect the other PZT plate to the DMM as the sensor. Note the polarity when using the crocodile clips.
6. **Attention:** the style of contact between the PZT plates and the rod is crucial. Please have the edges of the PZT plates fully in touch with the side of the rod, so as to avoid point or partial contact.
7. **Attention:** if you find too many resonant peaks in the spectrum, you can try to reduce the signal amplitude from the signal generator and/or slightly release the pressure between the PZT plates and the rod to reduce the production of transverse waves. You can also try to remove the spring on the other end if the contact between the PZT plates and the rod is still decent without the spring.
8. It is recommended that you sweep the frequency between $0$ and $40\ \mathrm{kHz}$.

**D.5** [1.4 pts]
Compare with the result in D.2, identify the resonant peaks caused by the transverse waves. Select the resonant peaks resulting from the longitudinal waves and calculate the longitudinal wave velocity accordingly. Carry out the error analysis.

---

### Experiment E — Application: locating a defect in an aluminum rod [2.0 pts]

<!--fig:start-->
![[APhO_2015_exp_p22_f14.png]]
*Figure 14. Illustration of the setup for locating a defect in an aluminum rod.*
<!--fig:end-->

After knowing the longitudinal wave velocity from Experiment D, here we attempt to locate an artificially-engineered defect, a deep cut, along the long aluminum rod.

Sound waves through solid materials have been used to detect hidden cracks, voids, and other internal discontinuities in metals, composites, plastics, and ceramics. Industrial ultrasonic testing is done by repeatedly generating a several-megahertz short pulse with an amplitude up to several hundred volts to drive the transducer, and then by amplifying the received signal to see if there is any reflection from a flaw. This is technically too complicated for our current setup. Instead, as a simple demonstration, we use the resonant method again to detect a deep, flat cut in the rod. Different from the case in Experiment D, sound waves will be bounced back at the spot of the deep cut instead of the far end of the rod. Therefore the arrangement of the resonant peaks in the spectrum will be different from that in Experiment D, which can be the criterion for locating the spot of the deep cut. The detection can be done using longitudinal waves.

**E.1** [1.2 pts]
While changing the frequency of the sound waves produced by the transducer, record the peak values monitored by the sensor. Draw a spectrum containing all measured resonant peaks, similar to that shown in Figure 12.

**E.2** [0.8 pts]
In the measured spectrum, identify the resonant peaks corresponding to the existence of the deep cut. Estimate the distance from the spot of the cut to the end of the rod that is in contact with the PZT plates.

**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1yQ9dA9qBEEjkxRMzbEH_Rp4pVpVEPPZu/view)
**Topic:** [[Circuits]], [[Oscillations & Waves]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Error Propagation (metodo)|Error Propagation]], [[Wave Equation (metodo)|Wave Equation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Error Propagation (competenza)|Error Propagation]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Capacitor (object)|Capacitor]], [[Inductor (object)|Inductor]], [[Spring (object)|Spring]]


<div class="qlang-split" data-lang="it"></div>

### L'effetto piezoelettrico e le sue applicazioni

#### 1. Introduzione

L'effetto piezoelettrico si riferisce al processo per cui, nei materiali solidi, si accumula carica elettrica in risposta a uno sforzo meccanico applicato (vedi Figura 1(a)). È reversibile, il che significa che i materiali che presentano l'effetto piezoelettrico presentano anche l'**effetto piezoelettrico inverso**, cioè la generazione interna di una deformazione meccanica risultante da un campo elettrico applicato (vedi Figura 1(b)).

<!--fig:start-->
![[APhO_2015_exp_p3_f1.png]]
*Figura 1. (a) L'effetto piezoelettrico. A sinistra: un cubo piezoelettrico giallo in assenza di sforzo meccanico. A destra: la carica elettrica si accumula sulle superfici opposte del cubo in risposta a uno sforzo meccanico applicato. (b) L'effetto piezoelettrico inverso. A sinistra: senza applicare un campo elettrico, il cubo è privo di sforzo e mantiene la sua forma naturale. A destra: il cubo è sottoposto a sforzo e deformato in seguito all'applicazione di un campo elettrico.*
<!--fig:end-->

I materiali piezoelettrici sono impiegati in un'ampia gamma di applicazioni, dall'industria e dalla manifattura alla vita quotidiana, come la produzione e la rivelazione del suono, la generazione di alte tensioni, le microbilance, la messa a fuoco ultra-fine di gruppi ottici, la sorgente di accensione degli accendini, i barbecue a propano ad accensione a pressione e gli orologi al quarzo.

Inoltre, i materiali piezoelettrici sono attivamente utilizzati nella ricerca scientifica. Poiché campi elettrici molto elevati corrispondono soltanto a variazioni minime delle dimensioni dei materiali piezoelettrici, essi sono lo strumento più importante per posizionare oggetti con estrema precisione. Sono alla base di alcuni strumenti di uso comune nella scienza delle superfici, il microscopio a effetto tunnel (STM) e le sue varianti. Il Premio Nobel per la fisica del 1986 fu assegnato a Gerd Binnig e Heinrich Rohrer per la loro progettazione dell'STM. Un altro pregio dei materiali piezoelettrici è che possono consentire la conversione di segnali tra modi diversi, come quello meccanico, elettrico e ottico. Con l'aiuto di temperature ultra-basse e di elettronica all'avanguardia, i ricercatori sono stati in grado di raffreddare il modo meccanico fino al suo stato fondamentale e di osservare la quantizzazione del moto. L'esperimento di creazione di una tale macchina quantistica, un risonatore meccanico realizzato in nitruro di alluminio piezoelettrico, fu intitolato "Breakthrough of the Year 2010" dalla rivista *Science*.

Esistono molti materiali piezoelettrici, sia naturali sia sintetici. Alcuni materiali presenti in natura includono il quarzo, l'osso e la seta; i materiali sintetici includono ceramiche, semiconduttori e polimeri. Il titanato zirconato di piombo ($\mathrm{Pb[Zr}_x\mathrm{Ti}_{1-x}\mathrm{]O}_3$), noto come **PZT**, è la ceramica piezoelettrica più diffusa oggi in uso, e presenta una forte piezoelettricità.

In questo esperimento delle APhO 2015 esploriamo le proprietà del PZT e le sue applicazioni. Per una data piastrina di PZT, ne misuriamo il coefficiente piezoelettrico tramite il metodo risonante e ne stimiamo la temperatura di Curie mediante estrapolazione lineare. Realizziamo un trasduttore a partire da una piastrina di PZT per produrre moti meccanici e onde sonore in un mezzo, e un sensore a partire da una piastrina di PZT per rilevare l'intensità delle onde sonore. Con il trasduttore e il sensore costruiti a mano, misuriamo le velocità delle onde longitudinali e trasversali del suono in una barra di alluminio. Infine, usiamo le onde sonore per localizzare in modo risonante un difetto artificialmente progettato in un'altra barra di alluminio.

#### 2. Precauzioni generali di sicurezza

1. Assicurarsi di spegnere l'apparecchiatura prima di inserire/disinserire il cavo di alimentazione. In caso contrario possono verificarsi danni.
2. Non accendere il bagno termostatico ad acqua se l'unità riscaldante non è coperta dall'acqua.
3. Fare attenzione a non versare l'acqua sull'elettronica vicina e sulla presa di alimentazione elettrica.
4. Fare attenzione all'acqua calda.
5. Fare attenzione alle scosse elettriche.
6. Non bere/consumare nessuno dei materiali forniti per l'esperimento.

#### 3. Apparecchiatura

1. Un generatore di segnali in grado di fornire in uscita semplici forme d'onda elettriche ripetitive in un'ampia gamma di frequenze.
2. Un multimetro digitale (DMM).
3. 5 piastrine di PZT. Le due superfici piatte di ciascuna piastrina sono ricoperte con sottili film di argento.
4. Un calibro a corsoio (calibro Vernier).
5. Una bilancia elettronica.
6. Una pinza Kelvin. La pinza Kelvin è costituita da una pinza a coccodrillo con due ganasce isolate, collegate rispettivamente a due spine a banana. Serve per bloccare una piastrina di PZT.
7. Un cavo con due spine a banana che si collegano a due pinze a coccodrillo. Una ganascia di ciascuna pinza a coccodrillo è avvolta da un tubetto nero, perciò è importante rispettare la corretta polarità durante il bloccaggio.
8. Un bagno termostatico ad acqua.
9. Un sacchetto di plastica.
10. Salviette di carta.
11. Una clip di plastica.
12. Un ciottolo.
13. Una barra di alluminio.
14. Un metro a nastro d'acciaio.
15. Una molla.
16. Una gomma da cancellare.
17. Una scatola di plastica trasparente per alloggiare insieme la barra di alluminio e le piastrine di PZT.
18. Una scatola di plastica nera con all'interno una barra di alluminio. Un difetto, invisibile dall'esterno della scatola, è realizzato artificialmente in un punto lungo la barra.
19. Un paio di tappi per le orecchie.
20. 1,5 L di acqua in bottiglia.

##### Istruzioni per la bilancia elettronica (vedi Figura 2)

- Collocare la bilancia su una superficie piana e molto stabile.
- Premere il pulsante "ON/OFF" per accendere la bilancia.
- Attendere che la lettura sia stabile. Se la lettura non è zero, premere il pulsante "TARE" per riazzerarla.
- Premere il pulsante "MODE" per commutare le unità tra "g", "gn", "oz", "ozt", "dwt", "ct" e "tl". Si raccomanda di usare l'unità "g" (grammo).

<!--fig:start-->
![[APhO_2015_exp_p7_f2.png]]
*Figura 2. Una bilancia elettronica.*
<!--fig:end-->

##### Istruzioni per il generatore di segnali (vedi Figura 3)

- Per accendere lo strumento, collegare il cavo di alimentazione USB removibile (con l'alimentatore AC) alla presa del pannello posteriore e premere il pulsante di accensione sul pannello frontale.
- Il "Pannello di visualizzazione" mostra la frequenza dell'onda e il tipo di onda (sinusoidale, quadra o triangolare). Raccomandiamo la sinusoidale per l'esperimento.
- Usare la manopola "Amplitude" per regolare l'ampiezza del segnale. Usare la manopola "Adjust" per cambiare la frequenza del segnale. Usare il pulsante "◄" o "►" per spostare il cursore.
- Fare attenzione nella regolazione della manopola "DC offset". Questa manopola cambia l'offset in continua del segnale. Un grande offset in continua può causare il clipping del segnale (vedi Figura 4(a)). Si raccomanda di calibrare l'offset in continua prima di usare il generatore di segnali: mentre si usa il DMM per monitorare la tensione continua dell'uscita, regolare la manopola "DC Offset" finché la tensione continua raggiunge lo zero.
- Si raccomanda inoltre di non portare la manopola "Amplitude" al massimo, per evitare il clipping del segnale (vedi Figura 4(b)). Si può regolare l'ampiezza di uscita a $3.0\ \mathrm{V}$ (rms) per l'esperimento: mentre si usa il DMM per monitorare la tensione alternata dell'uscita a una frequenza di, ad esempio, $1\ \mathrm{kHz}$, regolare la manopola "Amplitude" finché la tensione alternata raggiunge circa $3.0\ \mathrm{V}$ (rms).
- Se si preme un pulsante per errore e non si sa come tornare alla configurazione originale, riavviare lo strumento per ripristinare la configurazione predefinita.

<!--fig:start-->
![[APhO_2015_exp_p8_f3.png]]
*Figura 3. Un generatore di segnali.*
<!--fig:end-->

<!--fig:start-->
![[APhO_2015_exp_p8_f4.png]]
*Figura 4. Due sintomi del clipping del segnale. (a) Clipping del segnale quando l'offset in continua è diverso da zero. (b) Clipping del segnale quando l'ampiezza di uscita è troppo grande.*
<!--fig:end-->

##### Istruzioni per il multimetro digitale (DMM; vedi Figura 5)

- Usare gli ingressi "V$\Omega$" e "COM" per misurare tensione, resistenza e capacità.
- Usare gli ingressi "mA" e "COM" per misurare la corrente.
- Usare il selettore rotativo per selezionare la funzione e la portata di misura appropriate.
- Commutare tra i modi AC e DC premendo il pulsante GIALLO.
- Il DMM entra in "modalità Sleep" e spegne il display se rimane inattivo per più di 20 minuti. Ruotare il selettore rotativo su OFF e di nuovo indietro per riattivarlo. Per disattivare la modalità Sleep, tenere premuto il pulsante GIALLO mentre si accende il DMM.
- **Attenzione:** sebbene sia utilizzabile per l'esperimento con frequenze fino a $40\ \mathrm{kHz}$, il DMM non è progettato per misurare accuratamente i valori di ampiezza di segnali AC superiori a $1\ \mathrm{kHz}$. Per calibrare la tensione di uscita del generatore di segnali usando il DMM, si dovrebbe impostare la frequenza del segnale a $1\ \mathrm{kHz}$ o inferiore.

<!--fig:start-->
![[APhO_2015_exp_p9_f5.png]]
*Figura 5. Un multimetro digitale.*
<!--fig:end-->

##### Istruzioni per il bagno termostatico ad acqua (vedi Figura 6)

- Le superfici possono diventare calde durante l'uso.
- È severamente vietato accendere lo strumento se l'unità riscaldante non è coperta dall'acqua.
- Fare attenzione a non versare acqua sull'elettronica vicina e sulla presa di alimentazione.
- Riempire d'acqua in bottiglia in modo che il bagno sia circa a metà. Collegare correttamente il cavo di alimentazione e accendere il bagno.
- Per impostare la temperatura obiettivo, premere il pulsante "Set" per entrare in modalità "Set" (l'indicatore "Set" si illuminerà). Usare il pulsante "Increasing" ("Decreasing") per aumentare (diminuire) il valore visualizzato fino alla temperatura obiettivo. Premere di nuovo il pulsante "Set" per uscire dalla modalità "Set" e il bagno inizierà a riscaldare automaticamente. Controllare il "Temperature display" per le letture della temperatura effettiva.
- Durante il riscaldamento, l'indicatore "Heat" si illumina. Dopo aver raggiunto la temperatura impostata, l'indicatore "Keep" si illuminerà e il riscaldamento si arresterà.
- Si raccomanda di aumentare la temperatura gradualmente dal basso verso l'alto durante l'esperimento.

<!--fig:start-->
![[APhO_2015_exp_p10_f6.png]]
*Figura 6. Un bagno termostatico ad acqua.*
<!--fig:end-->

---

### Esperimento A — Misura di base [3.0 pts]

In questo esperimento, si richiede di misurare le dimensioni, la massa e la capacità di una piastrina di PZT, e poi di calcolarne la densità $\rho$ e la permettività relativa $\varepsilon_r$.

Scegliere una piastrina di PZT. Si dovranno eseguire gli Esperimenti A, B e C usando questa stessa piastrina.

Negli Esperimenti da A a E, l'analisi degli errori è richiesta se esplicitamente indicata; non è richiesta se non è indicata.

**A.1** [1.6 pts]
Scegliere una piastrina di PZT e usare il calibro Vernier per misurarne la lunghezza $l$, la larghezza $w$ e lo spessore $t$. Usare la bilancia elettronica per misurarne la massa $m$. Usare il DMM e la pinza Kelvin per misurarne la capacità $C$ (a temperatura ambiente).
Considerando la lieve non uniformità nelle dimensioni della piastrina di PZT e le incertezze delle letture strumentali, ripetere ciascuna misura più volte e poi calcolare la media e l'errore standard.

> **Attenzione:** La permettività relativa della piastrina di PZT dipende dalla temperatura (vedi Esperimento C). Si deve eseguire la misura di capacità a temperatura ambiente. Evitare il riscaldamento diretto della piastrina con la mano.

**A.2** [1.4 pts]
Ora calcolare la densità $\rho$ e la permettività relativa $\varepsilon_r$ della piastrina di PZT. In base agli errori standard ottenuti in A.1, svolgere l'analisi degli errori per stimare le incertezze di $\rho$ e $\varepsilon_r$ (permettività del vuoto $\varepsilon_0 = 8.85\times10^{-12}\ \mathrm{F/m}$).

---

### Esperimento B — Il metodo risonante per misurare il coefficiente piezoelettrico [4.5 pts]

<!--fig:start-->
![[APhO_2015_exp_p12_f7.png]]
*Figura 7. La piastrina di PZT.*
<!--fig:end-->

Come descritto nell'introduzione, la piastrina piezoelettrica produce una distorsione (chiamata anche deformazione $S$) quando è sottoposta a un campo elettrico. Il coefficiente di proporzionalità $d$ della deformazione $S$ rispetto all'intensità del campo elettrico $E$ è definito come **coefficiente piezoelettrico**:

$$d = \frac{S}{E}.$$

In realtà, la piastrina di PZT è anisotropa. Esiste una direzione speciale chiamata **direzione di polarizzazione**. Durante la produzione della piastrina di PZT, si applica un forte campo elettrico continuo lungo la direzione del suo spessore (asse $z$ nella Figura 7) per allineare i dipoli molecolari della ceramica a una temperatura superiore alla temperatura di Curie (vedi Esperimento C). Questa polarizzazione permane dopo che la temperatura è ridotta al di sotto della temperatura di Curie e il campo elettrico continuo è rimosso.

Le superfici piatte superiore e inferiore della piastrina sono ricoperte con film di argento come elettrodi (vedi Figura 7). Il campo elettrico è lungo l'asse $z$ (3) quando gli elettrodi sono collegati a una sorgente di tensione, e lo indicheremo con $E_3$. Qui definiamo

$$d_{31} = \frac{S_1}{E_3}, \qquad d_{33} = \frac{S_3}{E_3},$$

dove $S_1 = \Delta l / l$ e $S_3 = \Delta t / t$ sono le deformazioni lungo l'asse $x$ (1) e l'asse $z$ (3), rispettivamente. Si noti che la deformazione non è necessariamente parallela al campo elettrico $E_3$. Per i materiali PZT, $d_{31}$ è all'incirca la metà di $d_{33}$. Secondo i parametri dell'Esperimento A, si può mostrare che la lunghezza $l$ è quella che cambia di più quando si applica una tensione $V$ agli elettrodi, cioè,

$$\Delta l = l\,d_{31}E_3 = \frac{l}{t}\,d_{31}V,$$
$$\Delta w = \frac{w}{t}\,d_{31}V,$$
$$\Delta t = t\,d_{33}E_3 = d_{33}V \approx 2\,d_{31}V,$$

dove $l/t \gg w/t \gg 2$. Per semplificare la trattazione teorica, per una piastrina così lunga e sottile, le vibrazioni lungo le direzioni della larghezza (asse $y$) e dello spessore (asse $z$) possono essere trascurate e il problema si riduce a un problema di vibrazione unidimensionale. Pertanto rimuoviamo il pedice ridondante e indichiamo semplicemente $d_{31}$ come $d$. Negli Esperimenti D ed E la vibrazione trascurata lungo la direzione della larghezza (asse $y$) può causare una lieve imperfezione nella misura.

La piastrina di PZT si comporta come un condensatore puro (con capacità $C$ da A.1) quando è pilotata da segnali a bassa frequenza. Tuttavia, all'aumentare della frequenza, la vibrazione della piastrina di PZT ne modifica significativamente il comportamento circuitale. A certe frequenze chiamate **frequenze di risonanza**, la piastrina vibra fortemente e la sua impedenza raggiunge un minimo. Insieme alle frequenze di risonanza, vi sono anche frequenze in cui l'impedenza raggiunge un massimo, che chiamiamo **frequenze di antirisonanza**.

La prima frequenza di risonanza $f_r$ della piastrina è associata al suo modo di vibrazione fondamentale lungo la direzione della lunghezza (asse $x$). In prossimità di $f_r$, la piastrina di PZT può essere approssimata da un semplice circuito, con due condensatori ($C_0$ e $C_1$) e un induttore ($L_1$) disposti come mostrato nella Figura 8.

<!--fig:start-->
![[APhO_2015_exp_p13_f8.png]]
*Figura 8. Il modello circuitale equivalente (in risposta a un pilotaggio con segnale esterno) della piastrina di PZT in prossimità della sua prima frequenza di risonanza. La piastrina di PZT vibra nel suo modo fondamentale. Nella condizione di bordo libero, il punto medio lungo la direzione della lunghezza è il nodo.*
<!--fig:end-->

**B.1** [1.0 pts]
Ricavare le espressioni per la frequenza di risonanza $f_r$ e la frequenza di antirisonanza $f_a$ del circuito equivalente.

Il coefficiente piezoelettrico $d$ può essere calcolato con la seguente formula:

$$d = \sqrt{\dfrac{\varepsilon_0\,\varepsilon_r}{128\,f_r^4\,l^2\,\rho\left[\dfrac{1}{(2\pi f_a)^2 - (2\pi f_r)^2} + \dfrac{1}{32 f_r^2}\right]}}\,.$$

Ora eseguiamo l'esperimento per localizzare $f_r$ e $f_a$. Vedi gli schemi circuitali nella Figura 9. Manteniamo costante l'ampiezza di uscita (la tensione $V$) del generatore di segnali, in modo che l'impedenza della piastrina di PZT sia correlata alla corrente alternata nel circuito.

<!--fig:start-->
![[APhO_2015_exp_p14_f9.png]]
*Figura 9. Schemi circuitali per misurare le frequenze di risonanza e antirisonanza.*
<!--fig:end-->

**B.2** [3.5 pts]
Misurare la corrente alternata $I$ attraverso la piastrina di PZT in funzione della frequenza del segnale $f$. Disegnare la curva $I$–$f$ e trovare la frequenza di risonanza $f_r$ e la frequenza di antirisonanza $f_a$. Calcolare di conseguenza il coefficiente piezoelettrico $d$.

Istruzioni:
1. Collegare il generatore di segnali, il DMM e la piastrina di PZT secondo la Figura 9. Si noti che la piastrina di PZT deve essere bloccata nel punto medio lungo la direzione della lunghezza usando la pinza Kelvin, poiché il punto medio è il nodo nella condizione di bordo libero.
2. L'ampiezza del segnale di uscita cambia poco con la frequenza se la manopola "Amplitude" del generatore di segnali resta intatta. Tuttavia, il DMM potrebbe non rispondere a segnali con frequenza superiore a $40\ \mathrm{kHz}$. I dati oltre $40\ \mathrm{kHz}$ non sono richiesti.
3. **Attenzione:** mantenere intatta la piastrina di PZT bloccata durante l'esperimento. Un lieve movimento può causare una deriva della lettura della corrente.
4. **Attenzione:** come menzionato in A.1, si deve eseguire la misura a temperatura ambiente. Evitare il riscaldamento diretto della piastrina con la mano.
5. **Attenzione:** se non si sente alcun suono acuto dalla piastrina in prova dopo aver spazzato la frequenza e si è fiduciosi del proprio setup di misura, si dovrebbe contattare l'organizzatore poiché gli strumenti potrebbero essere difettosi.

---

### Esperimento C — La temperatura di Curie della piastrina di PZT [4.0 pts]

La maggior parte degli isolanti ha una suscettività dielettrica insensibile alle variazioni di temperatura. Tuttavia, la permettività relativa statica delle ceramiche PZT cambia con la temperatura secondo la relazione

$$\varepsilon_r = A + \frac{B}{T - T_c}, \qquad \text{where } T > T_c.$$

Qui $A$ e $B$ sono costanti indipendenti dalla temperatura. Questa relazione è nota come **legge di Curie–Weiss**. I parametri $B$ e $T_c$ sono chiamati rispettivamente **costante di Curie** e **temperatura di Curie**, in onore di Pierre Curie.

Una transizione di fase avviene alla temperatura di transizione $T_c$. Al di sopra di $T_c$, la sostanza è nella fase paraelettrica, in cui i dipoli elementari delle varie celle unitarie nel cristallo sono orientati casualmente. Al di sotto di $T_c$, i dipoli elementari interagiscono tra loro, dando origine a un campo interno che allinea i dipoli. In assenza di un campo elettrico applicato compare una polarizzazione spontanea. La permettività relativa al di sotto di $T_c$ è data da

$$\varepsilon_r = 1 + \frac{B}{2(T_c - T)}, \qquad \text{where } T < T_c.$$

<!--fig:start-->
![[APhO_2015_exp_p15_f0.png]]
*Pierre Curie.*
<!--fig:end-->

Dall'Esperimento A sappiamo che $\varepsilon_r \gg 1$. Possiamo trascurare il termine costante per ottenere un'approssimazione della permettività relativa statica come

$$\varepsilon_r = \frac{B}{2(T_c - T)}, \qquad \text{where } T < T_c.$$

Pertanto anche la capacità della piastrina di PZT ottenuta da A.1 può variare con la temperatura. Poiché la temperatura di Curie della piastrina di PZT è molto più alta della temperatura di ebollizione dell'acqua, ne stimeremo la temperatura di Curie mediante estrapolazione lineare.

**C.1** [1.5 pts]
Ora misurare la capacità della piastrina di PZT a varie temperature e registrare i dati.

Istruzioni:
1. Usare il cavo con due spine a banana e due pinze a coccodrillo per collegare la piastrina di PZT al DMM. Prestare attenzione alla polarità delle due pinze a coccodrillo durante il bloccaggio della piastrina di PZT. Non usare la pinza Kelvin perché la sua plastica ABS si ammorbidisce se riscaldata.
2. Mettere la piastrina di PZT dentro il sacchetto di plastica. Usare la clip di plastica per stringere il cavo e il sacchetto. **Attenzione:** un lato del sacchetto è aperto. Non strappare l'altro lato!
3. Versare l'$1.5\ \mathrm{L}$ di acqua in bottiglia nel bagno ad acqua. Immergere il sacchetto di plastica nell'acqua. Usare il ciottolo per tenere il sacchetto di plastica nell'acqua.
4. Accendere il bagno ad acqua e impostare la temperatura obiettivo. **Attenzione:** è severamente vietato accendere lo strumento se l'unità riscaldante non è coperta dall'acqua.
5. **Attenzione:** fare molta attenzione all'acqua calda nel bagno. Ricordare che l'acqua a temperature superiori a $50\ ^\circ\mathrm{C}$ può provocare ustioni. Per sicurezza non impostare la temperatura a un valore superiore a $90\ ^\circ\mathrm{C}$.
6. La temperatura salirà lentamente. Registrare la capacità $C$ della piastrina di PZT a diverse temperature.
7. Spegnere il bagno ad acqua e staccare il cavo di alimentazione dalla presa quando la misura è terminata.
8. **Suggerimento:** per velocizzare l'esperimento, si può scegliere di impostare la temperatura obiettivo a $90\ ^\circ\mathrm{C}$ e registrare la capacità mentre la temperatura sale.

**C.2** [2.5 pts]
Analizzare i dati, disegnare un grafico opportuno e calcolare di conseguenza la temperatura di Curie.

---

### Esperimento D — Applicazione: misura della velocità del suono nell'alluminio [6.5 pts]

Nei solidi, il suono può essere trasmesso sia come onde longitudinali sia come onde trasversali. I movimenti del mezzo responsabili dei due tipi di onde sono illustrati di seguito.

<!--fig:start-->
![[APhO_2015_exp_p17_f10.png]]
*Figura 10. Onde longitudinali e trasversali nei solidi.*
<!--fig:end-->

Nelle **onde longitudinali**, l'oscillazione avviene nella direzione longitudinale, ovvero la direzione di propagazione dell'onda. Le onde longitudinali possono essere generate nei liquidi, oltre che nei solidi, perché l'energia viaggia attraverso la struttura atomica per mezzo di una serie di movimenti di compressione ed espansione.

Nelle **onde trasversali**, lo spostamento del mezzo è perpendicolare alla direzione di propagazione dell'onda. Le onde trasversali richiedono un mezzo solido per la propagazione e non possono propagarsi efficacemente nei liquidi o nei gas.

In questo esperimento, misureremo le velocità delle onde longitudinali e trasversali del suono in una barra di alluminio. Misureremo prima la velocità dell'onda trasversale, e poi la velocità dell'onda longitudinale.

**D.1** [0.6 pts]
Si assuma che la lunghezza della barra di alluminio sia $L$ e la velocità dell'onda sia $u$. Nella condizione di bordo libero, ricavare l'equazione per le frequenze $f_n$ delle onde stazionarie (risonanti) lungo la barra lunga. Poi ricavare l'equazione per la velocità dell'onda $u$ a partire da $f_n$.

Ora, usiamo una piastrina di PZT come trasduttore per produrre onde sonore nella barra di alluminio, e usiamo un'altra piastrina di PZT come sensore di vibrazione per rilevare le onde sonore riflesse.

Prima misuriamo la velocità dell'onda trasversale. Come discusso nell'Esperimento B, la vibrazione lungo la direzione della lunghezza è dominante. Posizioniamo il trasduttore e il sensore a un'estremità della barra, come illustrato nella Figura 11. La vibrazione del trasduttore si propagherà nella barra tramite attrito, formando onde trasversali.

<!--fig:start-->
![[APhO_2015_exp_p18_f11.png]]
*Figura 11. Illustrazione del setup per misurare la velocità dell'onda trasversale (vista dall'alto).*
<!--fig:end-->

**D.2** [1.6 pts]
Usare il metro a nastro d'acciaio per leggere la lunghezza $L$ della barra di alluminio. Ripetere la misura più volte e calcolare la media e l'errore standard.

Mentre si cambia la frequenza delle onde sonore prodotte dal trasduttore, registrare i valori di picco monitorati dal sensore. Disegnare uno spettro contenente tutti i picchi di risonanza misurati, simile a quello mostrato nella Figura 12.

Istruzioni:
1. Seguire i passi da 2 a 4 per predisporre il setup sperimentale come illustrato nella Figura 11. Si noti che la scatola di plastica è specificamente progettata per alloggiare il setup.
2. Collocare la barra di alluminio nella scanalatura lunga della scatola di plastica, e usare la gomma da cancellare per premere le piastrine di PZT contro un'estremità della barra di alluminio, come illustrato nella Figura 11. Le due piastrine non devono toccarsi.
3. Mettere la molla sull'altra estremità della scanalatura per spingere delicatamente la barra contro le piastrine di PZT.
4. Collegare una piastrina di PZT al generatore di segnali come trasduttore. Collegare l'altra piastrina di PZT al DMM come sensore. Prestare attenzione alla polarità quando si usano le pinze a coccodrillo.
5. La piastrina di PZT è fragile e non c'è scorta di ricambio.
6. Usare i tappi per le orecchie se si è infastiditi dal suono acuto.
7. Si raccomanda di spazzare la frequenza nell'intervallo tra $0$ e $40\ \mathrm{kHz}$.

<!--fig:start-->
![[APhO_2015_exp_p19_f12.png]]
*Figura 12. Spettro esemplificativo che mostra tutti i picchi di risonanza.*
<!--fig:end-->

**D.3** [1.4 pts]
Identificare i picchi di risonanza che verosimilmente derivano dalle onde trasversali. Calcolare di conseguenza la velocità dell'onda trasversale e svolgere l'analisi degli errori.

> **Attenzione:** potrebbero esserci picchi irrilevanti causati dall'imperfezione del setup sperimentale, ad esempio una condizione di bordo libero imperfetta. Occorre esprimere un giudizio e ignorare i picchi irrilevanti durante l'analisi.

Cambiando il tipo di contatto tra le piastrine di PZT e la barra, possiamo anche misurare la velocità dell'onda longitudinale nella barra. Fissare il trasduttore e il sensore alla barra come illustrato nella Figura 13. La vibrazione lungo la direzione della lunghezza del trasduttore si propagherà nella barra tramite compressione, formando onde longitudinali.

<!--fig:start-->
![[APhO_2015_exp_p20_f13.png]]
*Figura 13. Illustrazione del setup per misurare la velocità dell'onda longitudinale.*
<!--fig:end-->

Come discusso nell'Esperimento B, sebbene la vibrazione lungo la direzione della lunghezza sia dominante, esistono anche vibrazioni lungo altre direzioni, che potrebbero produrre onde sonore nella barra e introdurre picchi di risonanza aggiuntivi anche nello spettro. Si noti che le vibrazioni lungo altre direzioni introducono solo onde trasversali. Pertanto i picchi di risonanza aggiuntivi non coincideranno con i picchi causati dalle onde stazionarie longitudinali.

**D.4** [1.5 pts]
Mentre si cambia la frequenza delle onde sonore prodotte dal trasduttore, registrare i valori di picco monitorati dal sensore. Disegnare uno spettro contenente tutti i picchi di risonanza misurati, simile a quello mostrato nella Figura 12.

Istruzioni:
1. Seguire i passi da 2 a 5 per predisporre il setup sperimentale come illustrato nella Figura 13. Si noti che la scatola di plastica è specificamente progettata per alloggiare il setup.
2. Allineare le due piastrine di PZT nelle due fessure strette, rispettivamente, a un'estremità della scatola di plastica.
3. Con la barra di alluminio lunga nella scanalatura, usare la gomma da cancellare come cuscinetto per premere le piastrine di PZT contro un'estremità della barra.
4. Inserire la molla nell'altra estremità per spingere delicatamente la barra contro le piastrine di PZT.
5. Collegare una piastrina di PZT al generatore di segnali come trasduttore. Collegare l'altra piastrina di PZT al DMM come sensore. Notare la polarità quando si usano le pinze a coccodrillo.
6. **Attenzione:** il tipo di contatto tra le piastrine di PZT e la barra è cruciale. Fare in modo che i bordi delle piastrine di PZT siano in pieno contatto con il fianco della barra, così da evitare un contatto puntuale o parziale.
7. **Attenzione:** se si trovano troppi picchi di risonanza nello spettro, si può provare a ridurre l'ampiezza del segnale dal generatore di segnali e/o allentare leggermente la pressione tra le piastrine di PZT e la barra per ridurre la produzione di onde trasversali. Si può anche provare a rimuovere la molla sull'altra estremità se il contatto tra le piastrine di PZT e la barra è ancora buono senza la molla.
8. Si raccomanda di spazzare la frequenza tra $0$ e $40\ \mathrm{kHz}$.

**D.5** [1.4 pts]
Confrontando con il risultato di D.2, identificare i picchi di risonanza causati dalle onde trasversali. Selezionare i picchi di risonanza che derivano dalle onde longitudinali e calcolare di conseguenza la velocità dell'onda longitudinale. Svolgere l'analisi degli errori.

---

### Esperimento E — Applicazione: localizzazione di un difetto in una barra di alluminio [2.0 pts]

<!--fig:start-->
![[APhO_2015_exp_p22_f14.png]]
*Figura 14. Illustrazione del setup per localizzare un difetto in una barra di alluminio.*
<!--fig:end-->

Dopo aver conosciuto la velocità dell'onda longitudinale dall'Esperimento D, qui tentiamo di localizzare un difetto realizzato artificialmente, un taglio profondo, lungo la barra di alluminio lunga.

Le onde sonore attraverso i materiali solidi sono state usate per rilevare cricche nascoste, vuoti e altre discontinuità interne in metalli, compositi, plastiche e ceramiche. I controlli industriali a ultrasuoni si eseguono generando ripetutamente un breve impulso di alcuni megahertz con ampiezza fino a diverse centinaia di volt per pilotare il trasduttore, e poi amplificando il segnale ricevuto per vedere se vi è qualche riflessione da un difetto. Questo è tecnicamente troppo complicato per il nostro setup attuale. Invece, come semplice dimostrazione, usiamo di nuovo il metodo risonante per rilevare un taglio profondo e piatto nella barra. A differenza del caso dell'Esperimento D, le onde sonore saranno rimbalzate indietro nel punto del taglio profondo invece che all'estremità lontana della barra. Pertanto la disposizione dei picchi di risonanza nello spettro sarà diversa da quella dell'Esperimento D, il che può essere il criterio per localizzare il punto del taglio profondo. La rilevazione può essere fatta usando le onde longitudinali.

**E.1** [1.2 pts]
Mentre si cambia la frequenza delle onde sonore prodotte dal trasduttore, registrare i valori di picco monitorati dal sensore. Disegnare uno spettro contenente tutti i picchi di risonanza misurati, simile a quello mostrato nella Figura 12.

**E.2** [0.8 pts]
Nello spettro misurato, identificare i picchi di risonanza corrispondenti alla presenza del taglio profondo. Stimare la distanza dal punto del taglio all'estremità della barra che è in contatto con le piastrine di PZT.

**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1yQ9dA9qBEEjkxRMzbEH_Rp4pVpVEPPZu/view)
**Topic:** [[Circuits]], [[Oscillations & Waves]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Error Propagation (metodo)|Error Propagation]], [[Wave Equation (metodo)|Wave Equation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Error Propagation (competenza)|Error Propagation]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Capacitor (object)|Capacitor]], [[Inductor (object)|Inductor]], [[Spring (object)|Spring]]
