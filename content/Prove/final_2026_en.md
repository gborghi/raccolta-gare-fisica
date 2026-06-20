---
tipo: prova
prova_id: prova_final_2026_en
competition: Svizzera Physics Olympiad
comp_code: Svizze
country: Svizzera
year: '2026'
level: ''
pdf: gare di altri paesi/Svizzera/Nazionale/2026/final_2026_en.pdf
cluster: Meccanica
n_problemi: '11'
tags:
  - kg/prova
  - anno/2026
  - paese/Svizzera
  - comp/Svizze
  - cluster/Meccanica
---

# Svizze 2026 — final_2026_en.pdf

**Fonte:** `gare di altri paesi/Svizzera/Nazionale/2026/final_2026_en.pdf` · Apri PDF · apri PDF p.35
**Cluster:** [[Meccanica]]

## Problema 1

1. This oscilloscope is able to display the evolution of the voltage for a time window ranging from 10
nanoseconds to 100 seconds.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.35

## Problema 2

2. In order to display a stable curve (i.e.
not jumping around), you do not only need to feed the
corresponding voltage into the oscilloscope but also set a proper trigger. The trigger tells the oscilloscope
when to plot the next trace, if the trigger is not properly set, the oscilloscope will either ”freeze”, i.e.
not update at all or it the displayed curve will jump around and nothing can be read of. The trigger is
explained in point 5 of this list.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.35

## Problema 3

3. To start with, connect the BNC cables with the channels you want to display (CH1 and/or CH2).
Active the corresponding channels by clicking on the button F or G in figure Ax1.2. Lines corresponding
to each channel (yellow for CH1 and blue for CH2) are supposed to appear. If they don’t, disconnect
the cable and check if they appear (because it might happen that the connected voltage is out of range
of the window). If the lines don’t appear, click the corresponding buttons F and/or G again. Note,
each channel can either be used with a $50\ \Omega$ internal termination or with high impedance
($1\ \text{M}\Omega$). Chose carefully what you need.

**Topic:** [[Circuits]], [[Oscillations & Waves]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.35

## Problema 4

**with the socket EXT TRIG**

4. Optional: If you want to have an additional external trigger, connect the corresponding BNC cable
with the socket EXT TRIG.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.35

## Problema 5

5. The correct trigger has to be set. The trigger identifies a particular feature in the voltage trace and
starts plotting once this feature appears (actually even a bit before). To set it up, press the button L in
figure Ax1.2 to open the trigger menu which should now appear at the right of the window. Set/ensure
the type is set to ”edge”. Chose the channel which shall serve as a trigger. Set/change the slope, i.e.
whether the trigger shall be active if the voltage rises or falls. Then ensure the mode is ”Auto” and
select the coupling (AC = alternating current, any offset is cut off or DC = direct current, also offset
included).

**Topic:** [[Oscillations & Waves]], [[Circuits]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.35

## Problema 6

6. Set up the settings as needed. The following steps might be needed or iterated, depending on the
problem:
• To start with it is usually suitable to press the AUTO button, see M in figure Ax1.2. This usually
gives a first good set of settings, in some cases however fails and then they have to be found
manually.
• Check the trigger settings (point 5) did not change.
• Set/check the trigger level, i.e. the time when the voltage of the trigger source crosses this point
corresponds to time zero. The trigger level can be changed by the knob J in figure Ax1.2
• Set the voltage range by the knob D1 or D2 (depending on channel) in figure Ax1.2. Also set the
offset for each channel by turning knob E1 or E2 in figure Ax1.2
• Set the time range by rotating knob H, you can also shift time zero by knob I.
Figure Ax1.1: Explanations display oscilloscope: 1: zero voltage line (however, take into account that the
different channels can be shifted vertically and might have their own zero. Check by disconnecting the
channel), 2: trace of channel 1, 3: trace of channel 2, 4: voltage scale of channel 1. The value corresponds to
one tile (i.e. the height of item 9, see below), 5: voltage scale of channel 2. The value corresponds to one tile
(i.e. the height of item 9, see below), 6: time scale of both channels, the value corresponds to the width of
each tile (see 10), 7: settings of the trigger, here channel 2 is used as a trigger and it is triggering at the
falling edge crosses the tirgger voltage of channel 2 (see also item 8). 8: Trigger level (here for channel 2,
see item 7). 9: Height of one tile, corresponds to voltage scale of item 4 or item 5. 10: Width of one tile,
corresponds to the time scale of item 6. The items 11-15 only apply for the channel menu: 11: coupling,
”wave”: whether DC offset is cut off (usually used at high frequencies), straight line on top of dashed: also
including DC offset, ground symbol: short cut, nothing can be measured. 12: Invertierung der Kurve, sollte
off sein. 13: Bandwidth limit, some filtering (cutoff at 20 MHz), usually off. 14: Switch between voltage and
current, select voltage 1x. Better keep at 1. 15: Type of zoom, ”Centre” should be better
Figure Ax1.2: Explanation knobs and buttons oscilloscope: A: BNC input channel 1, B: BNC input channel
2, C: Input external trigger (if used/needed), D1 and D2: knob to change vertical voltage scale of the
corresponding channel, E1 and E2: vertical offset of the corresponding channel, F: to active channel 1, G:
to activate channel 2, H: change horizontal scale for both channels, I horizontally shift the two curved, J:
trigger level, see also 7 and 8 in figure Ax1.1, K: If the oscilloscope does not trigger, it can be forced to do
so. Might give some insights into curve and help fixing the trigger. L: Trigger menu, it will appear at the
right side of the display, M: Auto button, sets all parameter to values the oscilloscope considers suitable.
Sometimes good first guess, sometimes completely off. ..
Appendix 2: Signal generator
For this experiment, a periodic signal might be useful. The available signal generator allows for different
waveforms at a large frequency range. However, for the experiment a different setting might be more useful:
A TTL signal, i.e. a rectangular waveform with a particularly sharp edge. This signal is available at the
TTL port, see caption of figure Ax2.1. Make sure all the knobs are pushed, in particular DUTY (as set up
by default).
Figure Ax2.1: Explanation signal generator: 1: Knob to turn it on and off. 2: Set the frequency range. 3:
Display of the frequency. 4: Knob to set the coarse frequency, 5: Knob for fine tuning of the frequency. 6:
TTL output.
Appendix 3: The Multimeter
A multimeter can be used for general measurements, see Figure Ax3.1. Some general points:
• One cable must always be in the COM socket. This is the zero point (usually the black cable).
• The input for voltage measurement has high impedance, i.e. only a small current flows through the
multimeter.
• The input for current measurement has low impedance, i.e. a large current can flow through the
multimeter.
• In general, when measuring currents: the current flows through the multimeter, which has a much
lower resistance than when measuring a voltage. This means that large currents can flow and destroy
the multimeter (or the voltage source)! Therefore, the multimeter in this configuration must NEVER
be connected in parallel to the voltage source, but only in series with a load!
Figure Ax3.1: Explanation of the different items: 1: Off position, 2: COM socket, 3: socket for voltage and
resistance (and other quantities), 4: port for small currents, 5: socket for large currents.6: measurement of
small voltages (AC and DC, to switch use 11), 7: DC voltages,8: AC voltages, 9: Measurement of ohmic
resistance, 10: current measurements (different ranges), 11: switch between DC and AC for small voltages
(6) or currents (10). The current setting is displayed on the display 12. 12: Display
SOLUTION
Experiments: solutions
Experiment 3.1: Signal Propagation in Coaxial Cables
Introduction
This experiment investigates the wave propagation in coaxial cables. These cables consist of two lines, an
inner one usually carrying the signal and an outer cylindric one enclose the inner one. This outer line is
usually connected to ground. We will look at the commonly used BNC standard (particular design of
coaxial cables) and call the used cable from now on BNC cables.
To enable for a closed circuit, cables usually have at least 2 lines in a fixed geometry with respect to
each other. The geometry and involved materials define the propagation properties of the signals in the
cable. Denote by $L'$ and $C'$ the inductance and capacitance respectively (i.e. inductivity and capacity per
length). The ratio between amplitude of the current $I_0$ flowing in the lines and the voltage $V_0$ between
the lines is given by the characteristic impedance $Z_0$ (in high frequency limit) as

$$\frac{V_0}{I_0} = Z_0 = \sqrt{\frac{L'}{C'}}$$

and is a property of the cable itself.
If two cables with different impedance are connected with each other (or an ohmic resistor is attached to
the end of the cable), the wave can only be fully transmitted if the impedance of the two cables is the
same. Otherwise a reflection at the connection happens such that the ratio of current and voltage in both
cables is given by their corresponding impedances. Furthermore, the speed $v_p$ at which a wave propagates
(phase velocity) is given by

$$v_p = \frac{1}{\sqrt{L'C'}}$$

and is independent of the frequency (given the simple model we use here). Correspondingly, this velocity
coincides with the speed of a signal (group velocity).
To perform the experiments, you have the following material available:
Material
• A signal generator, details see appendix. For this experiment, only use the middle connection,
labelled with output TTL and do not pull the knobs out. This will provide you with a rectangular
signal that might be useful.
• An oscilloscope, details see appendix. Note, each channel can either be used with a $50\ \Omega$
internal termination or with high impedance ($1\ \text{M}\Omega$). Chose carefully what you need.
• One Multimeter, details see appendix.
• BNC cables of length 1m, 2m, 3m (2x).
• One cable with clamps at its end.
• 2 pieces to connect one BNC cable with another one.
• One T-piece which can be plugged into the oscilloscope and two cables can be connected.
• A set of various resistors.
SOLUTION
Tasks
Part A. Impedance measurement
Here we want to estimate the wave impedance $Z_0$ in our BNC cables.
i.
Come up with an experimental setup to determine the impedance $Z_0$

**Topic:** [[Oscillations & Waves]], [[Circuits]], [[Electromagnetism]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Physical Modeling (metodo)|Physical Modeling]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.35

## Problema 7

1. $M_R > 0$ (clockwise torque): Hence, $M_R < \mu_2 F r$. Hence,
$$F > Mg - \mu_2 F \implies F > \frac{Mg}{1 + \mu_2} = \frac{4}{5}Mg.$$

**Topic:** [[Rotational Dynamics]], [[Newtonian Mechanics]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.51

## Problema 8

2. $M_R < 0$ (counter-clockwise torque): Hence, $-M_R < \mu_2 F r$. Hence,
$$F < G + \mu_2 F \implies F < \frac{Mg}{1 - \mu_2} = \frac{4}{3}Mg.$$
For the smallest mass $m$, we have $F_s = \frac{4}{5}Mg$ and $mg < F_s$. Hence, by the hint,
$$\frac{4}{5}Mg \leq mg e^{\mu_H \frac{\pi}{2}} \implies m \geq \frac{4}{5}Me^{-\mu_H \frac{\pi}{2}}.$$
For the largest mass $m$, we have $F_s = \frac{4}{3}Mg$ and $mg > F_s$. Hence, by the hint,
$$\frac{4}{3}Mg \leq mg e^{-\mu_H \frac{\pi}{2}} \implies m \leq \frac{4}{3}Me^{\mu_H \frac{\pi}{2}}.$$
A suitable sketch of the forces acting on the big ball. This point is also given, if the next point is achieved.
0.5
Correct expression for the torque equilibrium (2) of the big ball.
0.5
Correct condition on the torque for case 1 ($M_R < \mu_2 F r$).
0.25
Correct expression for the lower bound on $F_s$ in case 1.
0.5
Correct condition on the torque for case 2 ($-M_R < \mu_2 F r$).
0.25
Correct expression for the upper bound on $F_s$ in case 2.
0.5
Correct bound on $m$.
1.5
Give only 0.5 points if only one of the two bounds on $m$ is present. Do not deduct points if $<$ instead of $\leq$
is used.
SOLUTION
Short question 4.3: Safety on the roof
Bob the Builder has bought a new climbing harness for fall protection on the roof. It
includes a rope that must be secured to the ridge of the roof with a bolt. However, before
Bob entrusts his life to it, he wants to test the rope on the roof.
To test his rope with length $l$, Bob takes a barrel with radius $R$, where $R \ll l$. The barrel
has the same mass $m$ as Bob himself and is attached to the rope. He places the barrel at
the top of the roof ridge so that the axis of rotation of the barrel is perpendicular to the
fall line and lets it roll down (see sketch). If the rope breaks, it has failed the test and Bob
has to buy a new rope.
i. Assume that the rope has a spring constant $D$ and a length $l$ without load. Furthermore,
assume that the length of the roof is $L$ with a slope $\alpha$. The barrel performs a pure rolling
motion without slipping. Bob wants the rope to reach a maximum length $L$ when he rolls
down from the ridge so that he does not fall off the roof. Specify the length of the rope
$l$ without load as a function of the aforementioned variables so that it is extended to the
maximum length $L$ in the test.
Figure 1: Setup of Bob’s experiment. Barrel is at the top near the ridge (left). Barrel on its way down
(right).
Force acting on barrel before braking: $F_\text{parallel} = mg \sin\alpha$
0.25
Force acting on barrel while braking: $F_\text{tot} = F_\text{spring} - F_\text{parallel} = Dx - mg \sin\alpha$
where $x = L - l$
0.5
Expressing energies and using energy conservation: $E_\text{before} = E_\text{while} \implies mg \sin\alpha\, l = \frac{1}{2}Dx^2 - mg \sin\alpha\, x$
0.5
Inserting $l = L - x$ one finds quadratic equation: $\frac{1}{2}Dx^2 - mg \sin\alpha\, L = 0$
0.25
Solution for $x$: $x = \pm\sqrt{\frac{2mg \sin\alpha}{D}L}$, where minus solution is unphysical.
0.25
Solution for $l$: $l = L - x = L\left(1 - \sqrt{\frac{2mg \sin\alpha}{DL}}\right)$
0.25
ii. The rope breaks at a force of $F$. Calculate the force exerted on the rope by the braking
of the barrel and define a lower limit for $F$ depending on the variables mentioned above.
0.5
SOLUTION
Spring force: $F_\text{spring} = Dx$ with $x$ from before.
0.25
Result (Points only if $>$!): $F > F_\text{spring} = \sqrt{2mg \sin\alpha\, DL}$
0.25
iii. Since Bob is interested in the physics behind this experiment, he would like to calculate
a few more things about it. Assume that the ratio of rotational energy to kinetic energy
for a cylinder is 1 : 2. Specify the moment of inertia $J$ of the cylinder as a function of the
aforementioned variables.
0.5
Using $\frac{E_\text{rot}}{E_\text{kin}} = \frac{1}{2}$ gives:
$$\frac{J\omega^2}{mv^2} = \frac{1}{2} \implies J = \frac{mv^2}{2\omega^2}$$
0.25
Noting $\omega = \frac{v}{R}$ and inserting $J = \frac{1}{2}mR^2$
0.25
iv. Find the equilibrium position of the barrel as the distance to the ridge.
1
Force equilibrium: $F_g = F_\text{spring} \implies mg \sin\alpha = Dx'$
0.5
Solving for $x'$: $x' = \frac{mg \sin\alpha}{D}$
0.25
Result: $x = l + x' = l + \frac{mg \sin\alpha}{D}$
0.25
SOLUTION
Short question 4.4: Melting Ice
On a warm summer day, you place a block of ice with mass $m = 100$ g at temperature
$T_i = -10\ ^\circ\text{C}$ outside. The temperature outside is $T_a = 20\ ^\circ\text{C}$. The specific heat capacity of ice
is $c_i = 2.05\ \text{J}\cdot\text{g}^{-1}\cdot\text{K}^{-1}$ and the specific heat capacity of water is $c_w = 4.18\ \text{J}\cdot\text{g}^{-1}\cdot\text{K}^{-1}$. The
latent heat for melting ice is given by $L = 334\ \text{J}\cdot\text{g}^{-1}$.
i. What is the entropy change of the universe, if we heat the ice block to $T_e = 10\ ^\circ\text{C}$? Assume
the temperature of the surroundings to be constant.
The entropy change of the universe is given by the sum of the entropy changes of the ice block and the
surroundings.
$$\Delta S_\text{univ} = \Delta S_\text{sys} + \Delta S_\text{surr}.$$
We divide our process into 3 steps.

**Topic:** [[Rotational Dynamics]], [[Conservation of Energy]], [[Thermodynamics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Hooke's Law (metodo)|Hooke's Law]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.52

## Problema 9

1. Heating the ice from $-10\ ^\circ\text{C}$ to $0\ ^\circ\text{C}$,

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.55

## Problema 10

2. Melting the ice at $0\ ^\circ\text{C}$,

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.55

## Problema 11

3. Heating the water from $0\ ^\circ\text{C}$ to $10\ ^\circ\text{C}$.
If $T$ is constant during a process the entropy change is given by
$$\Delta S = \frac{Q}{T},$$
where $\Delta Q = cm\Delta T$ for heating/cooling and $\Delta Q = Lm$ for phase changes.
If $T$ is not constant during a process, we can divide the process into infinitesimal steps and integrate:
$$\Delta S = \int dS = \int_{T_i}^{T_e} \frac{dQ}{T} = \int_{T_i}^{T_e} \frac{cm\, dT}{T} = cm \ln\left(\frac{T_e}{T_i}\right).$$
So $\Delta S_\text{univ} = \Delta S_{\text{univ},1} + \Delta S_{\text{univ},2} + \Delta S_{\text{univ},3}$ where 1, 2, 3 denote the three processes. Hence, we calculate:
$$\Delta S_\text{univ} = \Delta S_{\text{sys},1} + \Delta S_{\text{surr},1} + \Delta S_{\text{sys},2} + \Delta S_{\text{surr},2} + \Delta S_{\text{sys},3} + \Delta S_{\text{surr},3}$$
$$= c_i m \ln\left(\frac{T_0}{T_i}\right) + \frac{-c_i m(T_0 - T_i)}{T_a} + \frac{Lm}{T_0} + \frac{-Lm}{T_a} + c_w m \ln\left(\frac{T_e}{T_0}\right) + \frac{-c_w m(T_e - T_0)}{T_a}$$
$$= m\left[c_i\left(\ln\left(\frac{T_0}{T_i}\right) - \frac{T_0 - T_i}{T_a}\right) + L\left(\frac{1}{T_0} - \frac{1}{T_a}\right) + c_w\left(\ln\left(\frac{T_e}{T_0}\right) - \frac{T_e - T_0}{T_a}\right)\right].$$
where $T_0$ is the melting temperature of ice in Kelvin.
Numerically, we get
$$\Delta S_\text{univ} = 9.78\ \text{J}\cdot\text{K}^{-1}.$$
Noting that the total entropy change of the universe is the sum of the entropy changes of the system and
the surroundings.
0.25
Explicitly stating the three steps of the process.
0.25
$\Delta S = \frac{Q}{T}$
0.25
Finding $\Delta Q$ for heating/cooling and phase changes.
0.25
Correctly finding $\Delta S = cm \ln\left(\frac{T_e}{T_i}\right)$.
1
Correctly calculating $\Delta S_\text{univ}$ as the sum of the entropy changes of the three steps.
1.5
Correct numerical value of $\Delta S_\text{univ} = 9.78\ \text{J}\cdot\text{K}^{-1}$.
0.5
SOLUTION
Short question 4.5: Marmot whistles
Amdo, the marmot, loves nothing more than whistling competitively with his friends. In
doing so, he generates a sound wave with a frequency of 1000 Hz. The speed of sound in air
is $c = 330\ \text{m}\cdot\text{s}^{-1}$.
Part A. The Echo
i. Amdo practises whistling diligently in the mountains. To determine his frequency, he
runs straight towards a rock face that produces a perfect echo. This allows Amdo to hear
his own whistling with an oscillating volume. Determine how fast Amdo must run towards
the rock face if the volume is to be at its maximum 10 times per second.
When walking towards the wall, Amdo perceives a frequency shift due to the Doppler effect. The frequency
of the reflected wave can be calculated as
$$f' = f \cdot \frac{c + v_s}{c - v_s}.$$
What Amdo hears is the superposition of the original wave and the reflected wave. This is known as a beat
frequency, which can be calculated as
$$f_\text{beat} = \frac{|f - f'|}{2} = f \cdot \frac{v_s}{c - v_s}.$$
Further notice, that since the amplitude of the volume is always positive, the beat frequency is doubled in
perception. Thus, we have $f_\text{beat} = 5\ \text{Hz}$, which leads to
$$v_s = \frac{f_\text{beat} \cdot c}{f + f_\text{beat}} \approx 1.6\ \text{m/s}.$$
Notice that a doppler shift occurs when Amdo is moving towards the wall.
0.25
Computing the frequency of the reflected wave using the Doppler effect.
0.5
Mentioning that a beat frequency occurs due to the superposition of the original and reflected wave.
0.25
Formula for the beat frequency.
0.5
Final calculation of the speed $v_s$.
0.25
Correct numerical result.
0.25
Subtract 0.5 points in case student assumes that $f_\text{beat} = 10\ \text{Hz}$ instead of $5\ \text{Hz}$, or does not notice that the
frequency is doubled in perception.
If both effects are considered the same result is obtained and thus full marks should be given. (Which
method is chosen depends on how the beat frequency is defined.)
Part B. Entering the forest
i. Amdo walks along the forest where one of his friends is also whistling with 1000 Hz. His
friend is standing still, but there are two trees between Amdo and his friend, with a diameter
of $d = 0.2$ m and a distance of $b = 0.9$ m between them. Amdo now runs parallel to the trees
along the path. As he does so, he hears a pulsating whistle. Determine how many places
along the path Amdo cannot hear his friend whistling if the trees are $s \gg b$ away from the
path.
SOLUTION
Road
b
s
Amdo’s friend
The wavelength $\lambda$ of the sound wave can be calculated using the wave equation:
$$\lambda = \frac{c}{f}.$$
By Babinet’s principle, the setup is equivalent to having two slits of width $d$ and distance $b$ between them.
The setup thus represents a classic double-slit interference experiment, where the condition for destructive
interference is given by
$$b \sin(\theta) = \left(n + \frac{1}{2}\right)\lambda \qquad n = 0, 1, 2, \ldots,$$
Where $\theta$ is the angle between the central axis and the direction to the point of destructive interference. To
find the number of points along the path where Amdo hears no sound, we need to find the maximum value
of $n$ such that
$$\sin(\theta) \leq 1 \implies \left(n + \frac{1}{2}\right)\lambda \leq b.$$
Solving for $n$, we get
$$n \leq \frac{b}{\lambda} - \frac{1}{2} = 2.2.$$
Thus, the possible values for $n$ are 0, 1, 2, leading to a total of 6 points along the path where Amdo hears
no sound as each value of $n$ corresponds to two points (one on each side of the central axis).
Calculating the wavelength of the sound wave.
0.25
Recognizing the setup as a double-slit interference problem using Babinet’s principle.
0.5
Writing down the condition for destructive interference.
0.5
Solving for the maximum value of $n$ that satisfies the destructive interference condition.
0.5
Correct final numerical result of 6 points.
0.25
SOLUTION
Short question 4.6: Space-time
Albert Einstein’s theory of special relativity is based on the fundamental postulate that
nothing can travel faster than the speed of light. In this exercise, we want to demonstrate
the invariance of the space-time interval using the speed of light.
Part A. The definition
First, let’s define the terms we will be using.
i. The space-time interval plays a central role in special relativity. Write the equation for
the space-time interval $(\Delta s)^2$ between two events $s$ and $s'$.
Note: The spacetime interval is the difference between the squares of the temporal and
spatial distances between the two events.
0.5
The space-time-interval is given by: $(\Delta s)^2 = (c\Delta t)^2 - (\Delta x)^2 - (\Delta y)^2 - (\Delta z)^2$
Or $ds^2 = cdt^2 - dx^2 - dy^2 - dz^2$ (Both correct)
0.5
ii.
Define the Lorentz transformation in all 4 space-time components for a boost with
velocity $v$ in the y-direction. Note that a boost with velocity $\vec{v}$ is a change to a reference
system moving at velocity $\vec{v}$ with respect to the current system.
Note: Use the Lorentz factor $\gamma = \frac{1}{\sqrt{1-\beta^2}}$, with $\beta = \frac{v}{c}$.
For the time component we have: $t' = \gamma\left(t - \frac{v}{c^2}y\right)$
0.5
For the space component in boost direction (y) we have: $y' = \gamma(y - vt)$
0.5
For the space component in other directions we have: $x' = x$ and $z' = z$
0.25
Reduce 0.5 points if boost in wrong direction but definitions correct.
Part B. Speed of light
Now let’s use the definitions in the previous sub-task to perform calculations. Consider
switching on a lamp at space-time point (0, 0, 0, 0). Since the light propagates in all direction
with the speed of light it will form a sphere. In a reference frame where the lamp is moving
with constant velocity, the emitted light also propagates in all directions with the speed of
light (this is one of the postulates of special relativity). In the following subtasks we will
demonstrate that a space-time interval is invariant under a Lorentz transformation.
i. Consider the sphere of the light from the lamp spreading out in all spatial dimensions
in a stationary system with respect to the lamp. Look at the two events at $s_1 = (0, 0, 0, 0)$
and $s_2 = (t, x, y, z)$, when the light first reaches the point $(x, y, z)$, and calculate its space-time
interval. Show that the space-time interval vanishes.
0.75
We say $\Delta t = t - t_0$ with $t_0 = 0$ hence $\Delta t = t$ and the same for x,y,z for simpler notation. For any point
on the surface of the ball at time $t$ we can relate the velocity and distance as: $c \cdot t = \sqrt{x^2 + y^2 + z^2}$
0.5
Inserting this into the definition of space-time-interval gives: $(\Delta s)^2 = (\sqrt{x^2 + y^2 + z^2})^2 - x^2 - y^2 - z^2 = x^2 + y^2 + z^2 - x^2 - y^2 - z^2 = 0$ as desired.
0.25
ii. Consider the two events from B.i. in a moving reference frame moving with velocity $v$ in
y-direction with respect to the original one. Use the Lorentz transformation obtained in
part A ii. to transform the coordinates of these events to the moving reference frame. Show
that their space-time interval vanishes also in the moving frame.
1.5
We again use $\Delta t' =$

**Topic:** [[Oscillations & Waves]], [[Thermodynamics]], [[Special Relativity]]
**Metodi:** [[Superposition Principle (metodo)|Superposition Principle]], [[Wave Equation (metodo)|Wave Equation]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Lorentz Transformation (metodo)|Lorentz Transformation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.55
