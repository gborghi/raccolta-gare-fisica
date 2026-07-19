---
title: Spagna 2024
tipo: prova
tags:
  - kg/prova
  - anno/2024
  - paese/Spagna
  - comp/Spagna
  - cluster/Gravitazione e Astrofisica
---
<div class="atom-reader" data-prova="2024-35-oaf-2024-prueba-experimental"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2024 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Gravitazione e Astrofisica,object/spring"></span>

<div class="qlang-switch" data-default="es"></div>



**Problema experimental. Medir la masa de un astronauta**

En una nave que orbita alrededor de la Tierra no se puede usar una báscula para pesar a los astronautas, debido a que se experimenta una sensación de ingravidez. Por ello, la masa de los astronautas en la estación espacial ISS se mide con un aparato que se basa en el movimiento vibratorio armónico, denominado Body Mass Measurement Device. Cuando el astronauta se coloca en él, el aparato inicia un movimiento vibratorio y mide el periodo de oscilación, a partir del cual se determina la masa del astronauta.

**Modelo teórico.**

Si se coloca una masa $M$ sobre un resorte ideal (sin masa) de constante elástica $k$ y se le da un pequeño empujón vertical, $M$ oscila armónicamente con un periodo

$$T = 2\pi\sqrt{\frac{M}{k}}, \quad (1)$$

de donde se puede obtener el valor de $M$ en función de $T$,

$$M = \frac{k}{4\pi^2}T^2. \quad (2)$$

Por tanto, si se conoce $k$ y se mide $T$ con un cronómetro, es inmediato determinar $M$.

Los muelles reales tienen una masa $m$, no siempre despreciable frente a la masa $M$. Podría pensarse que, como la masa del resorte también oscila, el periodo de oscilación vendría dado por la misma expresión (1) sustituyendo $M$ por $M+m$. Pero esta idea no es correcta. Para comprenderlo, basta pensar que cada espira del resorte oscila con una amplitud diferente, desde la espira superior que lo hace con la misma amplitud que $M$, hasta la inferior que prácticamente no se mueve. Esto hace intuir una contribución parcial de $m$ a la masa efectiva oscilante, es decir que

$$T = 2\pi\sqrt{\frac{M + \alpha m}{k}}, \quad (3)$$

donde $\alpha$ es una constante menor que la unidad, en principio desconocida.

**Montaje experimental.**

En la figura 1 se muestra una fotografía del dispositivo de medida de la masa corporal del que va provisto la ISS, en el que se observa cómo debe sujetarse el astronauta debido a la ausencia de gravedad. Se muestra también un modelo simplificado del dispositivo: una plataforma de masa $M_p$ está sujeta a un muelle de masa $m$. A esta plataforma se sujeta la masa $M_a$ del astronauta, de modo que la masa suspendida será $M = M_p + M_a$.

Se separa la plataforma de la posición de equilibrio y se suelta, produciéndose la oscilación. Para calibrar el dispositivo es preciso determinar los valores de $k$ y $\alpha$, a partir de medidas de $T$ para diversos valores de $M_a$, mediante la relación que se obtiene de la ecuación (3),

$$M_a = \frac{k}{4\pi^2}T^2 - (M_p + \alpha m). \quad (4)$$

**Preguntas.**

En un experimento de calibración del Body Mass Measurement Device se miden los valores del periodo de oscilación $T$ cuando se colocan en el dispositivo cuerpos de masa $M_a$:

| $M_a$ (kg) | $T$ (s) |
|---|---|
| 0 | 0,71 |
| 20 | 1,58 |
| 40 | 2,03 |
| 60 | 2,38 |
| 80 | 2,80 |
| 100 | 3,04 |

a) Elabora una tabla de valores para los puntos $(x, y) = (T^2, M_a)$, y represéntalos gráficamente en el papel milimetrado.

b) Determina el valor de la pendiente $p$ de la recta que mejor se ajusta a estos puntos.

c) A partir de la pendiente $p$ y de la expresión (4) deduce el valor de la constante elástica del muelle, $k$.

d) Haz una estimación razonada de la incertidumbre $\Delta p$ de la pendiente obtenida en el apartado b).

e) Teniendo en cuenta lo anterior, haz una estimación de la incertidumbre $\Delta k$ en el valor de la constante elástica que has obtenido en c).

f) Determina el valor de la constante $\alpha$.

**Datos:** Masa del muelle, $m = 800$ g; masa de la plataforma, $M_p = 6{,}80$ kg.

<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA EXPERIMENTAL/2024 35 OAF 2024 PRUEBA EXPERIMENTAL_p2_f1.png]]
*ISS Body Mass Device and simplified spring-platform model*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]], [[Elasticity & Materials]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1qOwyyGEgTcAdIOhLvWmFceEp9eNaC0oI/view)


<div class="qlang-split" data-lang="it"></div>

**Problema experimental. Misurare la massa di un astronauta**

In una nave che orbita intorno alla Terra non si può usare una bilancia per pesare gli astronauti, perché si prova una sensazione di ingravidità. Per questo, la massa degli astronauti della stazione spaziale ISS viene misurata con un apparecchio che si basa sul movimento vibratorio armono, chiamato Body Mass Measurement Device. Quando l'astronauta si mette su di esso, l'apparecchio inizia un movimento vibratorio e misura il periodo di oscillazione, a partire dal quale viene determinata la massa dell'astronauta.

**Modello teorico.**

Se si colloca una massa $M$ su una sorgente ideale (senza massa) di costante elastica $k$ e si dà un piccolo impulso verticale, $M$ oscilla armonicamente con un periodo di tempo

$$T = 2\pi\sqrt{\frac{M}{k}}, \quad (1)$$

di cui si può ottenere il valore di $M$ in funzione di $T$,

$$M = \frac{k}{4\pi^2}T^2. \quad (2)$$

Pertanto, se $k$ è conosciuto e se $T$ è misurato con un cronometro, è immediato determinare $M$.

Los muelles reales tienen una masa $m$, no siempre despreciable frente a la masa $M$. Si potrebbe pensare che, poiché la massa della primavera oscilla anche, il periodo di oscillazione sarebbe dato dalla stessa espressione (1) sostituendo $M$ con $M+m$. Ma questa idea non è giusta. Per capire questo, basta pensare che ogni spira della primavera oscilla con una ampiezza diversa, dalla spira superiore che lo fa con la stessa ampiezza di $M$, alla spira inferiore che praticamente non si muove. Ciò suggerisce un contributo parziale di $m$ alla massa effettiva oscillante, cioè che

$$T = 2\pi\sqrt{\frac{M + \alpha m}{k}}, \quad (3)$$

dove $\alpha$ è una costante minore dell'unità, in principio sconosciuta.

**Montaggio sperimentale.**

La figura 1 mostra una fotografia del dispositivo di misura della massa corporea che viene fornito dall'ISS, in cui si osserva come l'astronauta deve afferrarsi a causa dell'assenza di gravità. Si mostra anche un modello del dispositivo semplificato: una piattaforma di massa $M_p$ è soggetta a un molo di massa $m$. A questa piattaforma viene attaccata la massa $M_a$ dell'astronauta, in modo che la massa sospesa sia $M = M_p + M_a$.

Si separa la piattaforma dalla posizione di equilibrio e si solleva, producendo l'oscillazione. Per calibrare il dispositivo è necessario determinare i valori di $k$ e $\alpha$, a partire da misure di $T$ per diversi valori di $M_a$, mediante il rapporto ottenuto dall'equazione (3),

$$M_a = \frac{k}{4\pi^2}T^2 - (M_p + \alpha m). \quad (4)$$

**Domande.**

In un esperimento di calibrazione del dispositivo di massimetria del corpo, i valori del periodo di oscillazione $T$ sono misurati quando i corpi di massa $M_a$ sono inseriti nel dispositivo:

| $M_a$ (kg) | $T$ (s) |
|---|---|
| 0 | 0,71 |
| 20 | 1,58 |
| 40 | 2,03 |
| 60 | 2,38 |
| 80 | 2,80 |
| 100 | 3,04 |

a) elabora una tabella dei valori dei punti $(x, y) = (T^2, M_a)$ e li rappresenta graficamente su carta millimetrica.

b) Determina il valore della pendenza $p$ della retta che meglio si adatta a questi punti.

c) Dal pendente $p$ e dall'espressione (4) si deduce il valore della costante elastica del molo, $k$.

d) Fare una ragionevole stima dell'incertezza $\Delta p$ della pendenza ottenuta in (b).

e) Considerando quanto sopra, si deve calcolare l'incertezza $\Delta k$ del valore della costante elastica ottenuta in c).

f) Determina il valore della costante $\alpha$.

**Dati: ** Massa del molo, $m = 800$ g; massa della piattaforma, $M_p = 6{,}80$ kg.

<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA EXPERIMENTAL/2024 35 OAF 2024 PRUEBA EXPERIMENTAL_p2_f1.png]]
*ISS Body Mass Device and simplified spring-platform model*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]], [[Elasticity & Materials]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1qOwyyGEgTcAdIOhLvWmFceEp9eNaC0oI/view)

<div class="qlang-split" data-lang="en"></div>

**Problema experimental. Measuring the mass of an astronaut**

On a spacecraft orbiting the Earth, you can't use a scale to weigh astronauts because you experience a feeling of weightlessness. Therefore, the mass of astronauts at the ISS space station is measured with a device based on the harmonic vibrational movement, called the Body Mass Measurement Device. When the astronaut is placed on it, the apparatus initiates a vibrational movement and measures the oscillation period, from which the astronaut's mass is determined.

**Modelo teórico.**

If a mass $M$ is placed on an ideal spring (without mass) of elastic constant $k$ and given a small vertical push, $M$ oscillates harmoniously with a period of time

$$T = 2\pi\sqrt{\frac{M}{k}}, \quad (1)$$

where the value of $M$ can be obtained for $T$,

$$M = \frac{k}{4\pi^2}T^2. \quad (2)$$

Therefore, if $k$ is known and $T$ is measured with a chronometer, $M$ is immediately determined.

Real docks have a mass $m$, not always despicable in relation to the mass $M$. It could be thought that, as the spring mass also oscillates, the period of oscillation would be given by the same expression (1) by substituting $M$ for $M+m$. But this idea is not right. To understand this, it is enough to think that each spring spire oscillates with a different width, from the upper spire that does so with the same width as $M$, to the lower spire that is practically motionless. This suggests a partial contribution of $m$ to the oscillating effective mass, i.e.

$$T = 2\pi\sqrt{\frac{M + \alpha m}{k}}, \quad (3)$$

where $\alpha$ is a constant less than the unit, unknown in principle.

**Montaje experimental.**

Figure 1 shows a photograph of the body mass measuring device provided by the ISS, showing how the astronaut must hold up due to the absence of gravity. A simplified model of the device is also shown: a mass platform $M_p$ is subjected to a mass dock $m$. The mass $M_a$ of the astronaut is attached to this platform, so that the suspended mass will be $M = M_p + M_a$.

The platform is separated from the equilibrium position and released, producing the oscillation. To calibrate the device, the values of $k$ and $\alpha$ must be determined from measurements of $T$ for various values of $M_a$, using the ratio obtained from the equation (3),

$$M_a = \frac{k}{4\pi^2}T^2 - (M_p + \alpha m). \quad (4)$$

**Preguntas.**

In a Body Mass Measurement Device calibration experiment, the values of the oscillation period $T$ are measured when mass bodies $M_a$ are placed on the device:

| $M_a$ (kg) | $T$ (s) |
|---|---|
| 0 | 0,71 |
| 20 | 1,58 |
| 40 | 2,03 |
| 60 | 2,38 |
| 80 | 2,80 |
| 100 | 3,04 |

(a) Draw up a table of values for the $(x, y) = (T^2, M_a)$ points and represent them graphically on millimeter paper.

(b) Determine the value of the slope $p$ of the straight line that best fits these points.

(c) From the slope $p$ and the expression (4) deduct the value of the dock elastic constant, $k$.

(d) Make a reasoned estimate of the slope uncertainty $\Delta p$ obtained in paragraph (b).

(e) In view of the above, estimate the uncertainty $\Delta k$ in the value of the elastic constant obtained in c).

(f) Determine the value of the constant $\alpha$.

**Datos:** Masa del muelle, $m = 800$ g; masa de la plataforma, $M_p = 6{,}80$ kg.

<!--fig:start-->
![[_attachments/2024 35 OAF 2024 PRUEBA EXPERIMENTAL/2024 35 OAF 2024 PRUEBA EXPERIMENTAL_p2_f1.png]]
*ISS Body Mass Device and simplified spring-platform model*
<!--fig:end-->

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]], [[Elasticity & Materials]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1qOwyyGEgTcAdIOhLvWmFceEp9eNaC0oI/view)
