---
title: OII na Sperimentale
tipo: prova
tags:
  - graph/prova
---
<div class="atom-reader" data-prova="exam-experiment-q2-italiano_2"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="OII na Sperimentale — Problema 1" data-tags="nazione/italia,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/multi,topic/circuits,topic/thermodynamics,topic/modern-quantum-physics,argomento/meccanica"></span>

<div class="qlang-switch" data-default="it"></div>



Experiment
Q2-1
Italiano (Italy)
Light Emitting Diode (LED) (10 punti)
Questo esperimento è progettato per investigare le proprietà elettriche e termiche dei LED. Per le misurazioni della temperatura del PCB si dovrebbero utilizzare i coefficienti ottenuti nella sezione Esperimento-1
B.1. Il circuito elettrico usato in questo esperimento è mostrato in Fig. 2.1. Per l’uso della strumentazione
vedi la descrizione del problema 1.
Figura 2.1. Apparato sperimentale per lo studio sperimentale del LED. Il LED è alimentato con
corrente costante (continua o pulsata) a un potenziale diretto misurato con un voltmetro ad
alta impedenza. Le parti dell’esperimento relative al riscaldamento e alla misura della temperatura sono condotte come nell’Esperimento 1. L’equilibrio termico viene mantenuto tra tutti
i componenti sul circuito stampato (PCB).
I LED sono tipicamente alimentati con una corrente costante, a differenza di una alimentazione a differenza di potenziale costante utilizzata per le lampade a incandescenza. La differenza di potenziale dei
LED dipende dalla corrente impostata e dalla temperatura del substrato semiconduttore. L’espressione
matematica delle caratteristiche volt-ampere è complicata e dipende da parametri fisici e tecnologici,
che di solito non sono noti. Di conseguenza in questo esperimento studieremo la dipendenza bidimensionale della differenza di potenziale dalla corrente del LED e dalla temperatura del substrato del LED
TJ:
ULED = function(ILED, TJ).
La resistenza termica tra il semiconduttore del LED e il PCB è calcolata in questo modo (per valori differenti della corrente (ILED)):
$\DeltaT$
P
= (TJ $-TPCB$)
P
.
Attenzione: il LED può essere alimentato in corrente continua o mediante brevi impulsi di corrente. In
quest’ultimo caso si assume che la durata dell’impulso sia abbastanza breve da evitare il surriscaldamento del LED (per esempio un impulso di durata di 1 ms con misure intervallate di almeno 100 ms), e
si assume che in questa modalità di alimentazione TJ = TPCB . Operando in modalità continua TJ > TPCB e
la resistenza termica $\DeltaT$
Ppuò essere calcolata.
Part A. Caratteristica Volt-Ampere a differenti temperature (5.0 punti)
La relazione approssimata tra la differenza di potenziale e la temperatura è la seguente: T(U) =
3500
$9.9-ln($ 1
$U-0.3$), dove Tè in Kelvin e Uin volt.

Experiment
Q2-2
Italiano (Italy)
Misura e riporta in grafico Corrente vs Differenza di potenziale del LED per valori della temperatura
variabili dalla temperatura ambiente a 80 $^{\circ}C$ in modalità pulsata.
A.1
Misura e riporta in grafico la dipendenza ILED_pulsato(ULED_pulsato, T) nell’intervallo
tra 3 mA e 50 mA a temperatura ambiente, e 40, 60, e 80 $^{\circ}C$. Traccia le curve
sullo stesso grafico.
2.5pt
A.2
Nel foglio risposte, compila la tabella con i valori di ULED_pulsato a 3, 10, 20, e 40
mA di corrente erogata ILED_pulsato a temperatura ambiente, 40, 60, e 80 $^{\circ}C$.
1.0pt
A.3
Riporta in grafico i punti principali di ULED_pulsato(ILED_pulsato, T) (quelli indicati nella domanda A.2) e calcola (approssima graficamente) la dipendenza lineare del
coefficiente di temperatura $(\DeltaU(I)/\DeltaT$) a 3, 10, 20, e 40 mA.
1.5pt
Parte B. Misura della caratteristica Volt-Ampere del LED per corrente di alimentazione
continua 3.5 punti)
B.1
Misura e riporta in grafico la relazione ILED_continuo(ULED_continuo) nell’intervallo da
3 mA a 50 mA con il riscaldatore spento nel regime di alimentazione continuo.
Scrivi inoltre nel foglio risposte i valori di ULED_continuo, temperatura del PCB (termostato ) TPCB, e la differenza $\DeltaU=$ ULED_pulsato $-ULED_continuo$ a 3, 10, 20, e 40
mA.
1.5pt
B.2
Poiché la resistenza dei LED non è costante (dipende dalla corrente), viene utilizzato il termine Resistenza Dinamica ed espresso come dU
dI. Utilizzando il grafico
(B.1), stimare il reciproco della resistenza dinamica del LED 1/( dU
dI) =
dI
dU. Nel
foglio delle risposte, scrivi i valori di dI
dUa 3, 10, 20 e 40 mA. Disegna le tangenti
dI
dUin questi punti del grafico.
0.5pt
B.3
Calcola e riporta in grafico la differenza $\DeltaT(P$) tra la temperatura del semiconduttore del LED in modalità continua (TJ) e la temperatura del PCB (TPCB) come
funzione della potenza elettrica (a 3, 10, 20, e 40 mA). Calcola (approssimando graficamente) la resistenza termica lineare del LED $\DeltaT$
P, e scrivi il valore nel
foglio risposte.
Nota: Assumi che tutta l’energia elelttrica consumata dal LED sia convertita in
calore e che l’energia luminosa emessa sia trascurabile.
1.5pt
Parte C. Calcolo della corrente di deriva del LED dovuta alla temperatura. (1.5 punti)
Nell’introduzione è stato detto che i LED sono tipicamente alimentati a corrente costante, ma non a
differenza di potenziale costante. Supponi che si decida di alimentare il LED al valore nominale di corrente
di 20 mA con il valore della differenza di potenziale che hai misurato per la corrente di 20 mA nella parte
B.1.

Experiment
Q2-3
Italiano (Italy)
C.1
Utilizzando la caratteristica del LED determinata nella parte B, stima la reale
corrente che fluisce nel LED se la differenza di potenziale è mantenuta costante
(differenza di potenziale misurata in B.1, U(20mA)), ma la temperatura del PCB
è a 0 $^{\circ}C$ e 40 $^{\circ}C$.
1.5pt

<!--fig:start-->
**p.1** — Circuito elettrico con LED e apparato termico PCB
![[_attachments/exam-experiment-Q2-italiano_2/exam-experiment-Q2-italiano_2_p1_f1.png]]
<!--fig:end-->

**Topic:** [[Circuits]], [[Thermodynamics]], [[Modern-Quantum Physics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/16yhRuI2jX6QMR5wSbR1kgZ8_Evq1G8Tt/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1XQJ924hStEhE452AhCosejFW74UsiSbM/view)


<div class="qlang-split" data-lang="en"></div>

Experiments
Q2-1
Italian (Italy)
The following information shall be provided:
This experiment is designed to investigate the electrical and thermal properties of LEDs. For the measurements of the temperature of the PCB, the coefficients obtained in Experiment-1 should be used.
B.1. The electrical circuit used in this experiment is shown in Fig. 2.1. For use in instrumentation
See the description of problem 1.
The following is the list of the countries of the European Union: Experimental apparatus for the experimental study of LEDs. The LED is powered by
A continuous current (continuous or pulsed) at a direct potential measured by a voltmeter at
high impedance. The parts of the experiment relating to heating and temperature measurement are conducted as in Experiment 1. The thermal balance is maintained between all
the printed circuit board (PCB) components.
LEDs are typically powered by a constant current, as opposed to a constant power as used for incandescent lamps. The difference in the potential of the
LED depends on the current set and the temperature of the semiconductor substrate. The expression
The mathematics of volt-ampere characteristics is complicated and depends on physical and technological parameters.
They're usually unknown. So in this experiment, we're going to study the two-dimensional dependence of the potential difference from the LED current and the temperature of the LED substrate.
TJ:
The value of the input data is the sum of the values of the input data.
The thermal resistance between the semiconductor of the LED and the PCB is calculated as follows (for different current values (ILED):
$\DeltaT$
P
= (TJ $-TPCB$)
P
.
Note: the LED can be powered by direct current or short current pulses. In
In the latter case, the pulse duration is assumed to be short enough to avoid overheating the LED (e.g. a pulse of 1 ms with interval measurements of at least 100 ms), and
It is assumed that in this mode of supply TJ = TPCB . Operating in continuous mode TJ > TPCB and
The heat resistance $\DeltaT$
It can be calculated.
Part A. The following is the list of the main characteristics of the engine:
The approximate ratio of the potential difference to the temperature is as follows:
3500
$9.9-ln($ 1
$U-0.3$), where T in Kelvin and Uin volt.

Experiments
Q2-2
Italian (Italy)
Measures and reports in current vs. difference in LED potential by temperature values
Variable from room temperature to 80 $^{\circ}C$ in pressed mode.
A.1
Measures and records the ILED_pulture dependence, T) in the range
between 3 mA and 50 mA at room temperature, and 40, 60 and 80 $^{\circ}C$. Draw the curves
It's on the same chart.
2.5pt
A.2
In the reply sheet, fill in the table with the values of ULED_pushed at 3, 10, 20, and 40
mA di corrente erogata ILED_pulsato a temperatura ambiente, 40, 60, e 80 $^{\circ}C$.
1.0pt
A.3
It shows the main points of ULED_pulsate, T (the ones shown in question A.2) and calculates (approximately graphically) the linear dependence of the
The temperature coefficient $(\DeltaU(I)/\DeltaT$) at 3, 10, 20, and 40 mA.
1.5pt
Part B. Measurement of the Volt-Ampere characteristic of the LED per power current
(continues 3.5 points)
B.1
Measures and records the ILED_continuous (ULED_continuous) ratio in the interval from
3 mA to 50 mA with the heater off in the continuous supply mode.
Also write in the answer sheet the values of ULED_continuous, TPCB (thermostat) PCB temperature, and the difference $\DeltaU=$ ULED_push $-ULED_continuo$ at 3, 10, 20, and 40
mA.
1.5pt
B.2
Since the resistance of LEDs is not constant (depends on the current), the term Dynamic Resistance is used and expressed as dU
dI. Using the graph
(B.1), estimate the reciprocal of the dynamic resistance of the LED 1/(dU
dI) =
dI
dU. In the
The answer sheet, write the values of dI
of 3, 10, 20 and 40 mA. Draw the tangents
dI
I'm going to do this in these points on the chart.
0.5pt
B.3
Calculates and records the difference $\DeltaT(P$ between the temperature of the continuous mode LED semiconductor (TJ) and the temperature of the PCB (TPCB) as
The electrical power function (at 3, 10, 20, and 40 mA). Calculate (by approximating graphically) the linear thermal resistance of the LED $\DeltaT$
P, and write the value in
The answer sheet.
Note: Assume that all electrical energy consumed by the LED is converted to
The Commission has already decided to adopt a proposal for a directive on the protection of the environment.
1.5pt
Part C. Calculation of the LED drift current due to temperature. (a) the number of persons who are not members of the
The introduction stated that LEDs are typically powered by a constant current, but not by a
The difference in constant potential. Suppose that you decide to power the LED to the rated current value
of 20 mA with the value of the potential difference you measured for the current of 20 mA in the part
B.1.

Experiments
Q2-3
Italian (Italy)
C.1
Using the LED characteristic determined in Part B, estimate the actual
current flowing into the LED if the potential difference is maintained constant
(potential difference measured in B.1, U(20mA) but the PCB temperature
è a 0 $^{\circ}C$ e 40 $^{\circ}C$.
1.5pt

<!--fig:start-->
**p.1**  Electrical circuit with LED and PCB thermal apparatus
![[_attachments/exam-experiment-Q2-italiano_2/exam-experiment-Q2-italiano_2_p1_f1.png]]
<!--fig:end-->

**Topic:** [[Circuits]], [[Thermodynamics]], [[Modern-Quantum Physics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/16yhRuI2jX6QMR5wSbR1kgZ8_Evq1G8Tt/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1XQJ924hStEhE452AhCosejFW74UsiSbM/view)
