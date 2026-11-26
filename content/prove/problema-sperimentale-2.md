---
title: IPhO 2009 — Sperimentale — Problema 2
tipo: prova
tags:
  - kg/prova
  - paese/international
  - comp/IPhO
---
<div class="atom-reader" data-prova="problema-sperimentale-2"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="IPhO 2009 — Sperimentale — Problema 2 — Quesito 1" data-tags="kg/prova,paese/International,comp/IPhO,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/multi,topic/wave-optics,topic/oscillations-e-waves,topic/electromagnetism,object/mirror"></span>

<div class="qlang-switch" data-default="it"></div>



### Birifrangenza della mica

In questo esperimento misurerai la birifrangenza della mica, un cristallo usato spesso per componenti ottici polarizzanti.

---

#### Materiali

Oltre alla strumentazione descritta in 1), 2) e 3) userai:

14. Due filtri polarizzatori montati in supporti da diapositive e provvisti di un sostegno acrilico (**ETICHETTA J**).
15. Un foglietto di mica assai sottile montato entro un cilindro di plastica dotato di una graduazione non numerata. Un supporto acrilico per sostenere il cilindro (**ETICHETTA K**).
16. Il sistema del Photodetector: un photodetector in una scatola di plastica, cavetti di collegamento e una basetta gommosa. Un multimetro per misurare la tensione in uscita dal photodetector (**ETICHETTA L**).
17. Una calcolatrice.
18. Cartoncini bianchi, nastro di carta adesiva, bastoncini di sostegno, forbici, squadrette.
19. Matite, carta e carta millimetrata.

---

#### Descrizione del fenomeno

La luce è un'onda elettromagnetica trasversale con il campo elettrico che sta in un piano perpendicolare alla direzione di propagazione dell'onda e oscilla con la frequenza dell'onda che si propaga.

Se il campo elettrico oscilla costantemente in una stessa direzione si dice che l'onda è **linearmente polarizzata** (o, più semplicemente, polarizzata). *(Figura 2.1: onda che viaggia in direzione $y$ e polarizzata lungo $z$.)*

Un **filtro polarizzatore** è una pellicola a cui è associato un asse privilegiato parallelo alla superficie della pellicola, così che la luce trasmessa attraverso di esso emerge polarizzata lungo l'asse del polarizzatore. Si indicherà con $(+)$ l'asse privilegiato e con $(-)$ l'asse ad esso perpendicolare sulla superficie della pellicola. *(Figura 2.2.)*

Materiali trasparenti di uso comune, come il vetro delle finestre, trasmettono la luce senza modificarne lo stato di polarizzazione, poiché il loro indice di rifrazione non dipende né dalla direzione né dalla polarizzazione dell'onda incidente. Molti cristalli però, come la mica, si comportano in maniera diversa a seconda della direzione del campo elettrico dell'onda. Per un fascio di luce che si propaga perpendicolarmente alla sua superficie, un foglio di mica presenta due assi ortogonali caratteristici — **Asse 1** e **Asse 2** — che danno luogo al fenomeno chiamato **birifrangenza**. *(Figura 2.3.)*

**Caso 1.** Uno degli assi (Asse 1 o Asse 2) è parallelo alla direzione di polarizzazione dell'onda incidente. L'onda trasmessa conserva il suo stato di polarizzazione, ma la propagazione avviene come se il materiale avesse indice di rifrazione $n_1$ oppure $n_2$ a seconda dei due casi. *(Figure 2.4 e 2.5.)*

**Caso 2.** L'Asse 1 forma un angolo $\Omega$ con la direzione di polarizzazione dell'onda incidente. La luce trasmessa può essere pensata come la sovrapposizione di due onde con fase diversa: una con polarizzazione **parallela** alla polarizzazione dell'onda incidente (verticale) e l'altra con polarizzazione **perpendicolare** (orizzontale). *(Figura 2.6.)*

Chiama $I_P(\Omega)$ l'intensità dell'onda trasmessa parallela alla polarizzazione dell'onda incidente, e $I_O(\Omega)$ l'intensità dell'onda trasmessa perpendicolare. Queste intensità dipendono dall'angolo $\Omega$, dalla lunghezza d'onda $\lambda$ della sorgente di luce monocromatica, dallo spessore $L$ della lastrina e dal valore assoluto della differenza fra i due indici di rifrazione, $|n_1 - n_2|$. Quest'ultima quantità si chiama **birifrangenza** del materiale ed è lo scopo di questo esperimento misurarla.

La dipendenza di $I_P(\Omega)$ e $I_O(\Omega)$ dall'angolo è complicata a causa di altri effetti (come l'assorbimento da parte della mica). Si possono tuttavia ottenere espressioni approssimate e molto semplici per i valori normalizzati delle intensità, $\hat{I}_P(\Omega)$ e $\hat{I}_O(\Omega)$, definiti come:

$$\hat{I}_P(\Omega) = \frac{I_P(\Omega)}{I_P(\Omega) + I_O(\Omega)} \quad (2.1)$$

$$\hat{I}_O(\Omega) = \frac{I_O(\Omega)}{I_P(\Omega) + I_O(\Omega)} \quad (2.2)$$

Si può mostrare che le intensità normalizzate sono (approssimativamente):

$$\hat{I}_P(\Omega) = 1 - \tfrac{1}{2}\!\left(1 - \cos\Delta\varphi\right)\sin^2(2\Omega) \quad (2.3)$$

$$\hat{I}_O(\Omega) = \tfrac{1}{2}\!\left(1 - \cos\Delta\varphi\right)\sin^2(2\Omega) \quad (2.4)$$

dove $\Delta\varphi$ è la differenza di fase fra le onde trasmesse (quella parallela e quella perpendicolare), data da:

$$\Delta\varphi = \frac{2\pi L}{\lambda}\,|n_1 - n_2| \quad (2.5)$$

dove $L$ è lo spessore della piastrina di mica, $\lambda$ la lunghezza d'onda della radiazione incidente e $|n_1 - n_2|$ la birifrangenza.

---

#### Apparecchiatura sperimentale

**Compito 2.1** — *Montaggio sperimentale per la misura delle intensità* **(1.0 punto)**

Progetta un modo per usare le apparecchiature disponibili al fine di misurare le intensità $I_P$ e $I_O$ dell'onda trasmessa, in funzione dell'angolo $\Omega$ di uno qualunque degli assi ottici (figura 2.6). Presenta il tuo progetto riportando opportunamente sul disegno del banco ottico le **ETICHETTE** dei diversi dispositivi. Usa i segni convenzionali $(+)$ e $(-)$ per indicare il verso di polarizzazione dei polarizzatori.

- **Compito 2.1 a)** Montaggio sperimentale per la misura di $\hat{I}_P$ **(0.5 punti)**.
- **Compito 2.1 b)** Montaggio sperimentale per la misura di $\hat{I}_O$ **(0.5 punti)**.

**Allineamento del fascio laser.** Allinea il fascio laser in modo che sia parallelo alla tavola e incida sul centro del cilindro che contiene la mica. Puoi effettuare l'allineamento usando uno dei cartoncini bianchi per intercettare il fascio di luce e seguirne il percorso. Si possono ottenere aggiustamenti fini agendo sullo specchio mobile.

**Photodetector e multimetro.** Il photodetector produce una tensione linearmente proporzionale all'intensità della luce che lo colpisce; misura tale tensione con il multimetro. Quando la luce laser non incide sul photodetector si misura l'intensità della luce di fondo (circa $1\ \text{mV}$). Non effettuare correzioni in base alla luce di fondo quando prendi le misure di intensità.

> **ATTENZIONE:** La luce laser è parzialmente polarizzata ma non si sa in quale direzione. Per ottenere una luce polarizzata che consenta buone letture di intensità, metti un polarizzatore con uno dei suoi assi, $(+)$ oppure $(-)$, in direzione fissa verticale e agisci in modo da ottenere un massimo di intensità trasmessa in assenza di ogni altro dispositivo ottico.

---

#### Misura delle intensità

**Compito 2.2** — *La scala per la determinazione dell'angolo* **(0.25 punti)**

Il cilindro che contiene la mica presenta una graduazione regolare. Determina il valore in gradi che corrisponde al minimo intervallo, cioè all'arco fra due linee consecutive.

**Trovare approssimativamente lo zero di $\Omega$ e la disposizione degli assi della mica.**

Prima di tutto conviene identificare la posizione di uno dei due assi della mica (Asse 1). È quasi certo che questa posizione non coincida con una delle linee del cilindro graduato. Prendi come origine provvisoria la linea più vicina della graduazione e chiama $\Omega'$ gli angoli misurati rispetto a questa origine.

**Compito 2.3** — *Misura di $\hat{I}_P$ e $\hat{I}_O$* **(3.0 punti)**

Misura le intensità $I_P$ e $I_O$ per un numero adeguatamente elevato di angoli $\Omega'$. Riporta le tue misure nella Tabella I. Cerca di prendere le misure di $I_P$ e $I_O$ per le stesse posizioni del cilindro con la mica (cioè per un valore fisso di $\Omega'$).

**Compito 2.4** — *Trovare uno zero appropriato per $\Omega$* **(1.0 punto)**

La collocazione dell'Asse 1 definisce lo zero dell'angolo $\Omega$. Per determinare lo zero degli angoli puoi procedere graficamente o numericamente. In posizioni abbastanza vicine ad un massimo o ad un minimo la relazione può essere approssimata con una parabola:

$$f(\Omega') \approx a\,(\Omega')^2 + b\,\Omega' + c$$

e il minimo (o massimo) della parabola è dato da:

$$\Omega'_{\min} = -\frac{b}{2a}$$

Qualunque sia il metodo usato, otterrai uno scostamento $\Delta\Omega'$ rispetto all'origine provvisoria; gli angoli corretti sono $\Omega = \Omega' - \Delta\Omega'$. Scrivi il valore dello scostamento in gradi.

---

#### Analisi dei dati

**Compito 2.5** — *Scegliere la relazione appropriata* **(0.5 punti)**

Prendi $\hat{I}_P(\Omega)$ oppure $\hat{I}_O(\Omega)$ per elaborare un metodo che ti consenta di determinare la differenza di fase $\Delta\varphi$. Descrivi la relazione fra le variabili che vuoi utilizzare.

**Compito 2.6** — *Analisi dei dati e differenza di fase*

- Usa la Tabella II per scrivere i valori delle variabili necessari per sviluppare il metodo di determinazione scelto. Assicurati di usare i valori corretti per gli angoli $\Omega$ e includi le incertezze. Usa la carta millimetrata per mettere in grafico i valori delle variabili scelte **(1.0 punto)**.
- Sviluppa un'analisi dei dati per ottenere la misura della differenza di fase $\Delta\varphi$ e riporta i risultati con le incertezze. Riporta tutte le formule usate per analizzare i dati e fai l'analisi grafica dei risultati **(1.75 punti)**.
- Calcola il valore della differenza di fase $\Delta\varphi$ in radianti, inclusa la sua incertezza, nell'intervallo $[0,\,\pi]$ **(0.5 punti)**.

**Compito 2.7** — *Calcolo della birifrangenza $|n_1 - n_2|$* **(1.0 punto)**

Si può notare che aggiungere $2N\pi$ alla differenza di fase $\Delta\varphi$ (con $N$ intero qualsiasi), o cambiarne il segno, lascia invariati i valori delle intensità normalizzate, ma modifica il valore della birifrangenza. Per calcolare correttamente la birifrangenza a partire dal valore di $\Delta\varphi$ trovato nel Compito 2.6 si devono usare le seguenti relazioni:

$$\Delta\varphi = \frac{2\pi L}{\lambda}\,|n_1 - n_2| \qquad \text{se} \quad L < 82 \times 10^{-6}\ \text{m}$$

oppure

$$2\pi - \Delta\varphi = \frac{2\pi L}{\lambda}\,|n_1 - n_2| \qquad \text{se} \quad L > 82 \times 10^{-6}\ \text{m}$$

dove il valore dello spessore $L$ della lastrina di mica è scritto sul cilindro che la contiene (in micrometri; $1\ \mu\text{m} = 10^{-6}\ \text{m}$). Assumi che l'incertezza di $L$ sia $1 \times 10^{-6}\ \text{m}$. Per la lunghezza d'onda del laser puoi usare il valore trovato nel Problema 1 oppure il valore medio fra $620 \times 10^{-9}\ \text{m}$ e $750 \times 10^{-9}\ \text{m}$, che definisce la banda del rosso.

Riporta sul foglio risposte i valori di $L$ e di $\lambda$ e il valore della birifrangenza $|n_1 - n_2|$ compresa la sua incertezza. Scrivi le formule usate per determinare l'incertezza.

---

<!--fig:start-->
**p.1** — Polarizzatore montato su supporto
![[_attachments/problema sperimentale 2/problema sperimentale 2_p1_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.1** — Foglietto di mica su supporto acrilico
![[_attachments/problema sperimentale 2/problema sperimentale 2_p1_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.3** — Multimetro e fotodetector collegati
![[_attachments/problema sperimentale 2/problema sperimentale 2_p3_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.3** — Figura 2.1 onda che viaggia lungo z
![[_attachments/problema sperimentale 2/problema sperimentale 2_p3_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.4** — Figura 2.2 luce polarizzata e non polarizzata
![[_attachments/problema sperimentale 2/problema sperimentale 2_p4_f5.png]]
<!--fig:end-->

<!--fig:start-->
**p.4** — Figura 2.3 lastrina di mica con assi
![[_attachments/problema sperimentale 2/problema sperimentale 2_p4_f6.png]]
<!--fig:end-->

<!--fig:start-->
**p.5** — Figura 2.4 asse parallelo alla polarizzazione
![[_attachments/problema sperimentale 2/problema sperimentale 2_p5_f7.png]]
<!--fig:end-->

<!--fig:start-->
**p.5** — Figura 2.5 asse 2 parallelo alla polarizzazione
![[_attachments/problema sperimentale 2/problema sperimentale 2_p5_f8.png]]
<!--fig:end-->

<!--fig:start-->
**p.5** — Figura 2.6 asse a angolo theta
![[_attachments/problema sperimentale 2/problema sperimentale 2_p5_f9.png]]
<!--fig:end-->

**Topic:** [[Wave Optics]], [[Oscillations & Waves]], [[Electromagnetism]]
**Metodi:** [[Superposition Principle (metodo)|Superposition Principle]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Mirror (object)|Mirror]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1Zeza1ZI6_hAQJuMxJiqsAJhzZqamLxGG/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1VkgraHGRh6Ftg6YtwX-S7vtwHjfz6s6Z/view)


<div class="qlang-split" data-lang="en"></div>

### Birefringence of mica

In this experiment, you will measure the birefringence of mica, a crystal commonly used for polarizing optical components.

---

#### Materials

In addition to the equipment described in 1), 2), and 3), you will use:

14. Two polarizing filters mounted in slide holders and provided with an acrylic support (**LABEL J**).
15. A very thin mica sheet mounted inside a plastic cylinder with an unnumbered scale. An acrylic support for holding the cylinder (**LABEL K**).
16. The photodetector system: a photodetector in a plastic box, connecting wires, and a rubber base plate. A multimeter for measuring the voltage output from the photodetector (**LABEL L**).
17. A calculator.
18. White cardboard squares, adhesive paper tape, support sticks, scissors, set squares.
19. Pencils, paper, and graph paper.

---

#### Description of the Phenomenon

Light is a transverse electromagnetic wave in which the electric field lies in a plane perpendicular to the direction of wave propagation and oscillates at the frequency of the propagating wave.

If the electric field oscillates continuously in the same direction, the wave is said to be **linearly polarized** (or, more simply, polarized). *(Figure 2.1: a wave traveling in the $y$ direction and polarized along $z$.)*

A **polarizing filter** is a film to which a preferred axis parallel to the film's surface is associated, such that the light transmitted through it emerges polarized along the axis of the polarizer. The preferred axis will be denoted by $(+)$, and the axis perpendicular to it on the film's surface will be denoted by $(-)$. *(Figure 2.2.)*

Commonly used transparent materials, such as window glass, transmit light without altering its state of polarization, since their refractive index depends neither on the direction nor on the polarization of the incident wave. However, many crystals, such as mica, behave differently depending on the direction of the wave's electric field. For a beam of light propagating perpendicular to its surface, a mica sheet has two characteristic orthogonal axes—**Axis 1** and **Axis 2**—which give rise to the phenomenon known as **birefringence**. *(Figure 2.3.)*

**Case 1.** One of the axes (Axis 1 or Axis 2) is parallel to the polarization direction of the incident wave. The transmitted wave retains its polarization state, but propagation occurs as if the material had a refractive index of $n_1$ or $n_2$, depending on the two cases. *(Figures 2.4 and 2.5.)*

**Case 2.** Axis 1 forms an angle $\Omega$ with the polarization direction of the incident wave. The transmitted light can be regarded as the superposition of two waves with different phases: one with polarization **parallel** to the polarization of the incident wave (vertical), and the other with polarization **perpendicular** (horizontal). *(Figure 2.6.)*

Let $I_P(\Omega)$ be the intensity of the transmitted wave parallel to the polarization of the incident wave, and let $I_O(\Omega)$ be the intensity of the transmitted wave perpendicular to it. These intensities depend on the angle $\Omega$, on the wavelength $\lambda$ of the monochromatic light source, on the thickness $L$ of the plate, and on the absolute value of the difference between the two refractive indices, $|n_1 - n_2|$. This latter quantity is called the **birefringence** of the material, and the aim of this experiment is to measure it.

The dependence of $I_P(\Omega)$ and $I_O(\Omega)$ on the angle is complicated by other effects (such as absorption by mica). However, very simple approximate expressions can be obtained for the normalized values of the intensities, $\hat{I}_P(\Omega)$ and $\hat{I}_O(\Omega)$, defined as:

$$\hat{I}_P(\Omega) = \frac{I_P(\Omega)}{I_P(\Omega) + I_O(\Omega)} \quad (2.1)$$

$$\hat{I}_O(\Omega) = \frac{I_O(\Omega)}{I_P(\Omega) + I_O(\Omega)} \quad (2.2)$$

It can be shown that the normalized intensities are (approximately):

$$\hat{I}_P(\Omega) = 1 - \tfrac{1}{2}\!\left(1 - \cos\Delta\varphi\right)\sin^2(2\Omega) \quad (2.3)$$

$$\hat{I}_O(\Omega) = \tfrac{1}{2}\!\left(1 - \cos\Delta\varphi\right)\sin^2(2\Omega) \quad (2.4)$$

where $\Delta\varphi$ is the phase difference between the transmitted waves (the parallel one and the perpendicular one), given by:

$$\Delta\varphi = \frac{2\pi L}{\lambda}\,|n_1 - n_2| \quad (2.5)$$

where $L$ is the thickness of the mica plate, $\lambda$ is the wavelength of the incident radiation, and $|n_1 - n_2|$ is the birefringence.

---

#### Experimental apparatus

**Task 2.1** — *Experimental assembly for measuring intensities* **(1.0 point)**

Design a method for using the available equipment to measure the intensities $I_P$ and $I_O$ of the transmitted wave as a function of the angle $\Omega$ of any of the optical axes (Figure 2.6). Present your design by appropriately indicating on the optical bench drawing the **LABELS** of the various devices. Use the conventional symbols $(+)$ and $(-)$ to indicate the direction of polarization of the polarizers.

- **Task 2.1 a)** Experimental assembly for measuring $\hat{I}_P$ **(0.5 points)**.
- **Task 2.1 b)** Experimental assembly for measuring $\hat{I}_O$ **(0.5 points)**.

Laser beam alignment. Align the laser beam so that it is parallel to the table and strikes the center of the cylinder containing the mica. You can perform the alignment using one of the white cardboard pieces to intercept the light beam and follow its path. Fine adjustments can be made by adjusting the movable mirror.

**Photodetector and multimeter.** The photodetector produces a voltage that is linearly proportional to the intensity of the light striking it; the multimeter measures this voltage. When the laser light does not fall on the photodetector, the intensity of the ambient light is measured (approximately $1\ \text{mV}$). Do not apply corrections based on the ambient light when taking intensity measurements.

**ATTENTION:** The laser light is partially polarized, but its polarization direction is unknown. To obtain polarized light that allows good intensity readings, place a polarizer with one of its axes, $(+)$ or $(-)$, in a fixed vertical direction, and adjust so as to achieve a maximum transmitted intensity in the absence of any other optical device.

---

#### Measurement of Intensities

**Task 2.2** — *The scale for determining the angle* **(0.25 points)**

The cylinder containing the mica has a regular graduation. Determine the value in degrees corresponding to the smallest interval, that is, to the arc between two consecutive lines.

Find approximately the zero of $\Omega$ and the arrangement of the mica axes.

First of all, it is advisable to identify the position of one of the two mica axes (Axis 1). It is almost certain that this position will not coincide with any of the lines on the graduated cylinder. Take the nearest line on the scale as a provisional origin, and call $\Omega'$ the angles measured relative to this origin.

Task 2.3 — *Measurement of $\hat{I}_P$ and $\hat{I}_O$* **(3.0 points)**

Measure the intensities $I_P$ and $I_O$ for a sufficiently large number of angles $\Omega'$. Record your measurements in Table I. Try to take the measurements of $I_P$ and $I_O$ for the same positions of the mica cylinder (that is, for a fixed value of $\Omega'$).

Task 2.4 — *Find an appropriate zero for $\Omega$* **(1.0 point)**

The placement of Axis 1 defines the zero of angle $\Omega$. To determine the zero of the angles, you can proceed graphically or numerically. In positions sufficiently close to a maximum or a minimum, the relationship can be approximated by a parabola:

$$f(\Omega') \approx a\,(\Omega')^2 + b\,\Omega' + c$$

And the minimum (or maximum) of the parabola is given by:

$$\Omega'_{\min} = -\frac{b}{2a}$$

Whatever method is used, you will obtain a deviation $\Delta\Omega'$ from the provisional origin; the corrected angles are $\Omega = \Omega' - \Delta\Omega'$. Write the value of the deviation in degrees.

---

#### Data Analysis

**Task 2.5** — *Choose the appropriate relation* **(0.5 points)**

Take $\hat{I}_P(\Omega)$ or $\hat{I}_O(\Omega)$ to develop a method that will allow you to determine the phase difference $\Delta\varphi$. Describe the relationship between the variables you intend to use.

**Task 2.6** — *Data Analysis and Phase Difference*

- Use Table II to write the values of the variables needed to develop the chosen determination method. Make sure to use the correct values for the angles $\Omega$ and include the uncertainties. Use graph paper to plot the values of the chosen variables **(1.0 point)**.
- Develop a data analysis to obtain the measure of the phase difference $\Delta\varphi$ and report the results with the uncertainties. Report all the formulas used to analyze the data and perform a graphical analysis of the results **(1.75 points)**.
- Calculate the value of the phase difference $\Delta\varphi$ in radians, including its uncertainty, over the interval $[0,\,\pi]$ **(0.5 points)**.

**Task 2.7** — *Calculation of birefringence $|n_1 - n_2|$* **(1.0 point)**

It can be noted that adding $2N\pi$ to the phase difference $\Delta\varphi$ (with any integer $N$), or changing its sign, leaves the values of the normalized intensities unchanged but modifies the value of birefringence. To correctly calculate birefringence from the value of $\Delta\varphi$ found in Task 2.6, the following relationships must be used:

$$\Delta\varphi = \frac{2\pi L}{\lambda}\,|n_1 - n_2| \qquad \text{se} \quad L < 82 \times 10^{-6}\ \text{m}$$

or

$$2\pi - \Delta\varphi = \frac{2\pi L}{\lambda}\,|n_1 - n_2| \qquad \text{se} \quad L > 82 \times 10^{-6}\ \text{m}$$

where the value of the thickness $L$ of the mica sheet is written on the cylinder that contains it (in micrometres; $1\ \mu\text{m} = 10^{-6}\ \text{m}$). Assume that the uncertainty of $L$ is $1 \times 10^{-6}\ \text{m}$. For the laser wavelength, you can use the value found in Problem 1 or the average value between $620 \times 10^{-9}\ \text{m}$ and $750 \times 10^{-9}\ \text{m}$, which defines the red band.

On the answer sheet, record the values of $L$ and $\lambda$ and the value of the birefringence $|n_1 - n_2|$, including its uncertainty. Write the formulas used to determine the uncertainty.

---

<!--fig:start-->
**p.1** — Polarizer mounted on a support
![[_attachments/problema sperimentale 2/problema sperimentale 2_p1_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.1** — Mica sheet on an acrylic substrate
![[_attachments/problema sperimentale 2/problema sperimentale 2_p1_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.3** — Multimeter and photodetector connected
![[_attachments/problema sperimentale 2/problema sperimentale 2_p3_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.3** — Figure 2.1: wave traveling along z
![[_attachments/problema sperimentale 2/problema sperimentale 2_p3_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.4** — Figure 2.2 Polarized and unpolarized light
![[_attachments/problema sperimentale 2/problema sperimentale 2_p4_f5.png]]
<!--fig:end-->

<!--fig:start-->
**p.4** — Figure 2.3 mica plate with axes
![[_attachments/problema sperimentale 2/problema sperimentale 2_p4_f6.png]]
<!--fig:end-->

<!--fig:start-->
**p.5** — Figure 2.4: axis parallel to the polarization
![[_attachments/problema sperimentale 2/problema sperimentale 2_p5_f7.png]]
<!--fig:end-->

<!--fig:start-->
**p.5** — Figure 2.5: axis 2 parallel to the polarization
![[_attachments/problema sperimentale 2/problema sperimentale 2_p5_f8.png]]
<!--fig:end-->

<!--fig:start-->
**p.5** — Figure 2.6 axis a at angle theta
![[_attachments/problema sperimentale 2/problema sperimentale 2_p5_f9.png]]
<!--fig:end-->

**Topic:** [[Wave Optics]], [[Oscillations & Waves]], [[Electromagnetism]]
**Metodi:** [[Superposition Principle (metodo)|Superposition Principle]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Mirror (object)|Mirror]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1Zeza1ZI6_hAQJuMxJiqsAJhzZqamLxGG/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1VkgraHGRh6Ftg6YtwX-S7vtwHjfz6s6Z/view)

