---
title: Anacleto 2022 Nazionale Sperimentale
tipo: prova
tags:
  - kg/prova
  - anno/2022
  - paese/Italia
  - comp/Anacleto
  - cluster/Ottica
---
<div class="atom-reader" data-prova="anainlab_2022"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Anacleto 2022 Nazionale Sperimentale — Problema 1" data-tags="kg/prova,nazione/italia,comp/anacleto,cluster/Ottica"></span>

<div class="qlang-switch" data-default="it"></div>



**PRIMA PARTE — Determinazione della distanza incognita $x$ tramite triangolazione**

L'esperimento consiste nella determinazione di una distanza incognita $x$ con il metodo della triangolazione. Dal punto $O$, posto a distanza nota $d$ dalla base delle mire (punti $A, B, C, D, E$ a diverse altezze su un pannello verticale), misura l'angolo di elevazione $\alpha_i$ di ciascuna mira usando uno smartphone con app inclinometro (sensibilità $\leq \pm 0{,}1°$). Ripeti la misura di ogni angolo almeno 5 volte e calcola media e semidispersione. Poi sposta lo smartphone nel punto $X$ (a distanza incognita $x$ dal pannello, sullo stesso piano orizzontale) e misura i corrispondenti angoli $\beta_i$.

Le altezze delle mire valgono:
$$h_i = d \cdot \tan\alpha_i = x \cdot \tan\beta_i$$

da cui si ricava:
$$x = d \cdot \frac{\tan\alpha_i}{\tan\beta_i}$$

Misura la distanza $d$ con il metro di carta fornito. Calcola $x$ per ogni mira e riporta media e semidispersione come incertezza. Usa la formula per trovare $x$ e scrivila esplicitamente sul foglio dati.

**Foglio dati (Prima Parte):** Per ogni mira $(A, B, C, D, E)$ riporta le 5 misure di $\alpha$ e le 5 misure di $\beta$, la media, la tangente, il valore di $x$ ottenuto. Calcola infine:
$$x = \overline{x} \pm \Delta x$$

<!--fig:start-->
![[_attachments/ANAinLAB_2022/ANAinLAB_2022_p12_f1.png]]
*Schema triangolazione: osservatore O, mire A–E, punto X*
<!--fig:end-->
<!--fig:start-->
![[_attachments/ANAinLAB_2022/ANAinLAB_2022_p13_f2.png]]
*Smartphone su cartone con cannucce, spessore sotto*
<!--fig:end-->

**Topic:** [[Order-of-Magnitude Estimation]], [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Error Propagation (metodo)|Error Propagation]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.13](https://drive.google.com/file/d/1Qrj4h12F2m6UlQ4sBYCzRKVo-d9-ZGbS/view)


<div class="qlang-split" data-lang="en"></div>

**PART 1  Determination of the unknown distance $x$ by triangulation**

The experiment consists of determining an unknown distance $x$ using the triangulation method. From the $O$ point, located at a distance known as $d$ from the base of the targets ($A, B, C, D, E$ points at different heights on a vertical panel), the $\alpha_i$ elevation angle of each target is measured using a smartphone with inclinometer app (sensitivity $\leq \pm 0{,}1°$). Repeat the measurement of each angle at least 5 times and calculate the mean and half-dispersion. Then move the smartphone to the $X$ point (uncognito $x$ from the panel, on the same horizontal plane) and measure the corresponding $\beta_i$ angles.

The heights of the targets are:
$$h_i = d \cdot \tan\alpha_i = x \cdot \tan\beta_i$$

from which it derives:
$$x = d \cdot \frac{\tan\alpha_i}{\tan\beta_i}$$

Measure the distance $d$ with the paper meter provided. Calculates $x$ for each target and reports mean and semispersion as uncertainty. Use the formula to find $x$ and write it explicitly on the datasheet.

**Data sheet (Part One): ** For each target $(A, B, C, D, E)$ reports the 5 measurements of $\alpha$ and the 5 measurements of $\beta$, the mean, tangent, value of $x$ obtained. Finally, he calculates:
$$x = \overline{x} \pm \Delta x$$

<!--fig:start-->
![[_attachments/ANAinLAB_2022/ANAinLAB_2022_p12_f1.png]]
The following is the list of the following:
<!--fig:end-->
<!--fig:start-->
![[_attachments/ANAinLAB_2022/ANAinLAB_2022_p13_f2.png]]
*Smartphone on cardboard with canvas, thickness below *
<!--fig:end-->

**Topic:** [[Order-of-Magnitude Estimation]], [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Error Propagation (metodo)|Error Propagation]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.13](https://drive.google.com/file/d/1Qrj4h12F2m6UlQ4sBYCzRKVo-d9-ZGbS/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Anacleto 2022 Nazionale Sperimentale — Problema 2" data-tags="kg/prova,nazione/italia,comp/anacleto,cluster/Ottica,object/rod"></span>

<div class="qlang-switch" data-default="it"></div>



**SECONDA PARTE — Determinazione della distanza incognita $y$ tramite angolo di elevazione**

Posiziona un'asta verticale di altezza $z$ nel punto $O$ (misura $z$ con la squadretta). Dal punto $X$ punta la cima dell'asta $Z$ e misura l'angolo di elevazione $\theta$ con l'app inclinometro, ripetendo la misura almeno 5 volte.

Dalla relazione:
$$z = y \cdot \tan\theta$$

ricava la distanza $y = XO$:
$$y = \frac{z}{\tan\theta}$$

Calcola media e semidispersione di $\theta$. Fornisci una stima dell'incertezza su $\tan\theta$:
$$\Delta(\tan\theta) = \frac{1}{2}\left[\tan(\bar{\theta}+\Delta\theta) - \tan(\bar{\theta}-\Delta\theta)\right]$$

Quindi stima l'incertezza su $y$ e spiega il ragionamento seguito.

**Foglio dati (Seconda Parte):** Riporta $z$ con unità e incertezza; 5 misure di $\theta$, media, $\tan\theta$, incertezza su $\tan\theta$; valore di $y$ con incertezza e cifre significative corrette.

<!--fig:start-->
![[_attachments/ANAinLAB_2022/ANAinLAB_2022_p14_f3.png]]
*Asta verticale OZ in O, misura angolo θ da X*
<!--fig:end-->

**Topic:** [[Order-of-Magnitude Estimation]], [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Error Propagation (metodo)|Error Propagation]], [[Statistical Averaging (metodo)|Statistical Averaging]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Rod (object)|Rod]]
**Fonte:** [Testo (PDF) — p.14](https://drive.google.com/file/d/1Qrj4h12F2m6UlQ4sBYCzRKVo-d9-ZGbS/view)


<div class="qlang-split" data-lang="en"></div>

**SEQUENTH PART  Determination of the unknown distance $y$ by elevation angle**

Place a vertical axis of height $z$ at $O$ (measure $z$ with the square). From the point $X$, point to the top of the axle $Z$ and measure the angle of lift $\theta$ with the inclinometer app, repeating the measurement at least 5 times.

From the report:
$$z = y \cdot \tan\theta$$

The distance $y = XO$ is:
$$y = \frac{z}{\tan\theta}$$

Calculate mean and half-diffusion of $\theta$. Provide an estimate of the uncertainty on $\tan\theta$:
$$\Delta(\tan\theta) = \frac{1}{2}\left[\tan(\bar{\theta}+\Delta\theta) - \tan(\bar{\theta}-\Delta\theta)\right]$$

The uncertainty is then estimated at $y$ and the reasoning explained below.

**Data file (Part Two):** Report $z$ with unit and uncertainty; 5 measurements of $\theta$, mean, $\tan\theta$, uncertainty on $\tan\theta$; value of $y$ with uncertainty and significantly correct figures.

<!--fig:start-->
![[_attachments/ANAinLAB_2022/ANAinLAB_2022_p14_f3.png]]
*This vertical OZ in O, measuring angle θ from X*
<!--fig:end-->

**Topic:** [[Order-of-Magnitude Estimation]], [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Error Propagation (metodo)|Error Propagation]], [[Statistical Averaging (metodo)|Statistical Averaging]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Rod (object)|Rod]]
**Fonte:** [Testo (PDF) — p.14](https://drive.google.com/file/d/1Qrj4h12F2m6UlQ4sBYCzRKVo-d9-ZGbS/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Anacleto 2022 Nazionale Sperimentale — Problema 3" data-tags="kg/prova,nazione/italia,comp/anacleto,cluster/Ottica"></span>

<div class="qlang-switch" data-default="it"></div>



**TERZA PARTE — Individuazione della posizione $X$ sulla piantina**

Noti i valori di $d$, $x$ e $y$, individua sulla piantina fornita la posizione esatta del punto $X$. Sul foglio è disegnato il segmento $OH$ di lunghezza $d$. Il punto $X$ si trova come intersezione di due circonferenze:
- una di raggio $x$ centrata in $H$
- una di raggio $y$ centrata in $O$

I punti candidati sono due ($X_1$ e $X_2$). Osserva la piantina con le curve di livello (isoipse): il punto $X_2$ ricade in una zona a quota diversa rispetto al piano su cui si svolge l'esperimento, quindi va escluso. Il punto corretto è $X_1$.

Sul foglio dati indica:
- la scala del disegno
- la lunghezza di $x$ e di $y$ nella scala del disegno
- la posizione di $X$ nel disegno
- una spiegazione chiara del criterio adottato per individuare $X$ e per escludere l'altra soluzione

<!--fig:start-->
![[_attachments/ANAinLAB_2022/ANAinLAB_2022_p7_f4.png]]
*Piantina con isoipse, cerchi di raggi x e y, punti X1 X2*
<!--fig:end-->

**Topic:** [[Order-of-Magnitude Estimation]], [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.14](https://drive.google.com/file/d/1Qrj4h12F2m6UlQ4sBYCzRKVo-d9-ZGbS/view)


<div class="qlang-split" data-lang="en"></div>

**Third PART  Location indication $X$ on the plant**

Note the values of $d$, $x$ and $y$, and indicate on the provided plank the exact location of the $X$ point. The $OH$ segment of length $d$ is drawn on the sheet. The point $X$ is located as the intersection of two circumferences:
- a radius $x$ centred on $H$
- a radius $y$ centred on $O$

The candidate points are two ($X_1$ and $X_2$). Observe the plane with the level curves (isoipse): the point $X_2$ falls into a zone at a different altitude from the plane on which the experiment is carried out, so it should be excluded. The correct point is $X_1$.

On the data sheet it shall indicate:
- the scale of the drawing
- the length of $x$ and $y$ in the drawing scale
- the position of $X$ in the drawing
- a clear explanation of the criterion adopted to identify $X$ and to exclude the other solution

<!--fig:start-->
![[_attachments/ANAinLAB_2022/ANAinLAB_2022_p7_f4.png]]
*Plant with isoipse, x-ray and y-ray circles, X1 X2 points *
<!--fig:end-->

**Topic:** [[Order-of-Magnitude Estimation]], [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.14](https://drive.google.com/file/d/1Qrj4h12F2m6UlQ4sBYCzRKVo-d9-ZGbS/view)
