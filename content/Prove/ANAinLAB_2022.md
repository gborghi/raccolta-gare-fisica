---
tipo: prova
prova_id: prova_ANAinLAB_2022
competition: Giochi di Anacleto
comp_code: Anacleto
country: Italia
year: '2022'
level: Nazionale
pdf: Anacleto/laboratorio/ANAinLAB_2022.pdf
cluster: Ottica
n_problemi: '3'
tags:
  - kg/prova
  - anno/2022
  - paese/Italia
  - comp/Anacleto
  - cluster/Ottica
---

# Anacleto 2022 Nazionale Sperimentale — ANAinLAB_2022.pdf

**Fonte:** `Anacleto/laboratorio/ANAinLAB_2022.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Ottica]]

## Problema 1

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
**Fonte:** Testo (PDF) — p.13

## Problema 2

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
**Fonte:** Testo (PDF) — p.14

## Problema 3

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
**Fonte:** Testo (PDF) — p.14
