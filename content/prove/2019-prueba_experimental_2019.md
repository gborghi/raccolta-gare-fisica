---
title: Spagna 2019
tipo: prova
tags:
  - kg/prova
  - anno/2019
  - paese/Spagna
  - comp/Spagna
  - cluster/Onde e Oscillazioni
---
<div class="atom-reader" data-prova="2019-prueba_experimental_2019"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2019 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni,object/battery,object/resistor,object/pipe-tube"></span>

<div class="qlang-switch" data-default="es"></div>



**Prueba experimental: Absorción de luz por un filtro neutro**

**Objetivo**

En ocasiones interesa reducir la intensidad de un haz de luz, para lo que puede emplearse un filtro comercial de gelatina. Cuando un haz de luz de intensidad $I_0$ incide sobre una de las caras planas del filtro, parte de la luz se transmite y emerge por la otra cara con una intensidad inferior $I_1$.

La intensidad luminosa se ve reducida en un factor $T$, menor que la unidad, denominado **transmitancia** del filtro:

$$T = \frac{I_1}{I_0} \quad (1)$$

El objetivo de esta prueba experimental es determinar la transmitancia de un filtro neutro (con $T$ aproximadamente independiente de la longitud de onda en el visible) por dos procedimientos diferentes.

**Modelo teórico**

Teniendo en cuenta (1), cuando el haz de luz atraviesa un conjunto de $n$ filtros iguales, la intensidad transmitida final es:

$$I_n = T^n I_0 \quad (2)$$

Esta intensidad transmitida se mide con un fotodetector. Supondremos que la diferencia de potencial $V$ entre sus terminales de salida es directamente proporcional a dicha intensidad. En consecuencia, la expresión (2) se transforma en:

$$V_n = T^n V_0 \quad (3)$$

donde $V_n$ es la lectura del voltímetro cuando se interponen $n$ filtros.

**Procedimiento experimental**

El sistema consta de dos circuitos: el primero está formado por una pila, una resistencia y un led que actúa como emisor de luz, y el segundo lo constituye otro led, que actúa como fotodetector, conectado a un polímetro en función de voltímetro. Los dos circuitos se acoplan ópticamente mediante un tubo para mantener fija la distancia entre emisor y detector y apantallar la luz ambiente. El tubo tiene una ranura transversal en la que se colocan los filtros.

**Primer procedimiento para determinar $T$**

Sin ningún filtro en la ranura del tubo ($n = 0$) se anota el valor indicado por el voltímetro, $V_0$. Se coloca un filtro en la ranura ($n = 1$) y se toma la medida $V_1$, etc. hasta acumular ocho filtros. Los resultados son:

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| $V_n$ (mV) | 277 | 192 | 131 | 89 | 60 | 40 | 26 | 17 | 11 |

a) Transforma la expresión (3) para obtener una dependencia lineal entre una función de $V_n$ y $n$. (Ayuda: toma logaritmos en (3).)

b) Representa gráficamente en papel milimetrado los puntos correspondientes a esta dependencia lineal, con $n$ en abscisas.

c) Determina la pendiente $p$ de la recta que mejor se ajuste a esos puntos.

d) A partir del resultado anterior, deduce el valor de la transmitancia de un filtro, $T$.

e) Haz una estimación de la incertidumbre de $T$.

**Segundo procedimiento para determinar $T$**

La transmitancia de un filtro también puede determinarse a partir de dos medidas consecutivas con $n$ y $n+1$ filtros. Teniendo en cuenta (3), es evidente que:

$$T = \frac{V_{n+1}}{V_n} \quad (4)$$

f) Aplicando (4) a parejas consecutivas de las nueve medidas $V_0, V_1 \dots V_8$, calcula los ocho valores correspondientes de $T$.

g) Mediante un tratamiento estadístico, calcula el valor más fiable de la transmitancia $T$ de un filtro, y su margen de incertidumbre.

<!--fig:start-->
![[_attachments/2019 prueba_experimental_2019/2019 prueba_experimental_2019_p1_f1.png]]
*Light beam through gelatine filter: I0 to I1*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2019 prueba_experimental_2019/2019 prueba_experimental_2019_p1_f2.png]]
*Circuit: LED emitter, LED detector, voltmeter*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2019 prueba_experimental_2019/2019 prueba_experimental_2019_p2_f3.png]]
*Optical coupling tube with filter slot*
<!--fig:end-->

**Topic:** [[Geometric Optics]], [[Circuits]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Battery (object)|Battery]], [[Resistor (object)|Resistor]], [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/19HeIsyvGYADA4dv3ehZ9-7UzOHwlpfsr/view)


<div class="qlang-split" data-lang="it"></div>

**Prova sperimentale: Assorbimento della luce da un filtro neutro**

**Obiettivo**

A volte è interessante ridurre l'intensità di un fascio di luce, per cui si può utilizzare un filtro commerciale di gelatina. Quando un fascio di luce di intensità $I_0$ incide su una delle facce piatte del filtro, parte della luce viene trasmessa e viene emessa dall'altra faccia con una intensità inferiore $I_1$.

L'intensità luminosa è ridotta di un fattore $T$ inferiore all'unità, denominato ** trasmissione ** del filtro:

$$T = \frac{I_1}{I_0} \quad (1)$$

L'obiettivo di questo test sperimentale è determinare la trasmissione di un filtro neutro (con $T$ approssimativamente indipendente dalla lunghezza d'onda in visibile) da due diverse procedure.

**Modello teorico**

Considerando (1), quando il fascio di luce passa attraverso un insieme di filtri $n$ uguali, l'intensità trasmessa finale è:

$$I_n = T^n I_0 \quad (2)$$

Questa intensità trasmessa viene misurata con un fotodettore. Supponiamo che la differenza di potenziale $V$ tra i loro terminali di uscita sia direttamente proporzionale a tale intensità. In seguito, l'espressione (2) si trasforma in:

$$V_n = T^n V_0 \quad (3)$$

dove $V_n$ è la lettura del voltometro quando vengono inseriti $n$ filtri.

**Processo sperimentale**

Il sistema è costituito da due circuiti: il primo è costituito da una pila, una resistenza e un led che agisce come emettitore di luce, e il secondo lo costituisce un altro led, che agisce come fotodettore, collegato a un polímetro in funzione di voltometro. I due circuiti sono accoppiati otticamente mediante un tubo per mantenere fissa la distanza tra emittente e rilevatore e per visualizzare la luce ambientale. Il tubo ha un foro trasversale in cui vengono inseriti i filtri.

**Prima procedura per determinare $T$**

Senza filtri nel tubo ($n = 0$) viene annotato il valore indicato dal voltometro, $V_0$. Si inserisce un filtro nella ranura ($n = 1$) e si misura $V_1$, ecc. fino a accumulare otto filtri. I risultati sono:

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| $V_n$ (mV) | 277 | 192 | 131 | 89 | 60 | 40 | 26 | 17 | 11 |

a) Trasforma l'espressione (3) per ottenere una dipendenza lineare tra una funzione di $V_n$ e $n$. (Aiuto: prendere logaritmi in (3).)

b) Rappresenta graficamente in carta millimetrica i punti corrispondenti a questa dipendenza lineare, con $n$ in abcissi.

c) Determina la pendice $p$ della retta che meglio si adatta a tali punti.

d) Dalla risultato precedente, deduce il valore di trasmissione di un filtro, $T$.

e) Estimare l'incertezza di $T$.

**Seconda procedura per determinare $T$**

La trasmissione di un filtro può anche essere determinata da due misure consecutive con filtri $n$ e $n+1$. Considerando (3), è evidente che:

$$T = \frac{V_{n+1}}{V_n} \quad (4)$$

f) Applicando (4) a coppie consecutive delle nove misure $V_0, V_1 \dots V_8$, si calcolano gli otto valori corrispondenti di $T$.

g) Calcola con un trattamento statistico il valore più affidabile della trasmissione $T$ di un filtro e il suo margine di incertezza.

<!--fig:start-->
![[_attachments/2019 prueba_experimental_2019/2019 prueba_experimental_2019_p1_f1.png]]
*Light beam through gelatine filter: I0 to I1*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2019 prueba_experimental_2019/2019 prueba_experimental_2019_p1_f2.png]]
*Circuito: emittente LED, rilevatore LED, voltmeter*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2019 prueba_experimental_2019/2019 prueba_experimental_2019_p2_f3.png]]
*Optical coupling tube with filter slot*
<!--fig:end-->

**Topic:** [[Geometric Optics]], [[Circuits]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Battery (object)|Battery]], [[Resistor (object)|Resistor]], [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/19HeIsyvGYADA4dv3ehZ9-7UzOHwlpfsr/view)

<div class="qlang-split" data-lang="en"></div>

**Experimental test: Light absorption by a neutral filter**

**Objetivo**

It is sometimes useful to reduce the intensity of a beam of light, for which a commercial gelatin filter may be used. When a beam of light of $I_0$ intensity hits one of the flat faces of the filter, some of the light is transmitted and emerges from the other face with a lower intensity $I_1$.

La intensidad luminosa se ve reducida en un factor $T$, menor que la unidad, denominado **transmitancia** del filtro:

$$T = \frac{I_1}{I_0} \quad (1)$$

The objective of this experimental test is to determine the transmittance of a neutral filter (with $T$ approximately independent of the wavelength in the visible medium) by two different procedures.

**Modelo teórico**

Whereas (1) when the beam of light passes through a set of $n$ identical filters, the final transmitted intensity is:

$$I_n = T^n I_0 \quad (2)$$

This transmitted intensity is measured with a photodetector. Assume that the potential difference $V$ between their output terminals is directly proportional to that intensity. The expression (2) is therefore transformed into:

$$V_n = T^n V_0 \quad (3)$$

where $V_n$ is the read of the voltmeter when $n$ filters are intercepted.

**Procedimiento experimental**

The system consists of two circuits: the first is made up of a battery, a resistor and an LED that acts as a light emitting device, and the second is another LED, which acts as a photodetector, connected to a polymer in terms of voltmeter. The two circuits are optically coupled by a tube to maintain the distance between the emitter and detector and to screen the ambient light. The tube has a transverse groove into which the filters are placed.

**Primer procedimiento para determinar $T$**

Without any filter in the tube groove ($n = 0$) the value indicated by the voltmeter, $V_0$ is noted. A filter is placed in the slot ($n = 1$) and the measurement $V_1$ is taken, etc. I'm going to build up eight filters. The results are:

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| $V_n$ (mV) | 277 | 192 | 131 | 89 | 60 | 40 | 26 | 17 | 11 |

(a) Transform the expression (3) to obtain a linear dependence between a function of $V_n$ and $n$. (Help: take logarithms in (3).)

(b) Graphically depicts on millimeter paper the points corresponding to this linear dependence, with $n$ in abscises.

(c) Determine the slope $p$ of the straight line that best fits those points.

(d) From the previous result, deduct the transmittance value of a filter, $T$.

(e) Estimate the uncertainty of $T$.

**Segundo procedimiento para determinar $T$**

The transmittance of a filter can also be determined from two consecutive measurements with $n$ and $n+1$ filters. In view of (3), it is clear that:

$$T = \frac{V_{n+1}}{V_n} \quad (4)$$

(f) Applying (4) to consecutive pairs of the nine measures $V_0, V_1 \dots V_8$, calculate the corresponding eight values of $T$.

(g) By statistical treatment, calculate the most reliable value of the transmittance $T$ of a filter and its margin of uncertainty.

<!--fig:start-->
![[_attachments/2019 prueba_experimental_2019/2019 prueba_experimental_2019_p1_f1.png]]
*Light beam through gelatine filter: I0 to I1*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2019 prueba_experimental_2019/2019 prueba_experimental_2019_p1_f2.png]]
*Circuit: LED emitter, LED detector, voltmeter*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2019 prueba_experimental_2019/2019 prueba_experimental_2019_p2_f3.png]]
*Optical coupling tube with filter slot*
<!--fig:end-->

**Topic:** [[Geometric Optics]], [[Circuits]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Battery (object)|Battery]], [[Resistor (object)|Resistor]], [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/19HeIsyvGYADA4dv3ehZ9-7UzOHwlpfsr/view)
