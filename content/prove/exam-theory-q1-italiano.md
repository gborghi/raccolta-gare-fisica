---
title: OII na Teorica
tipo: prova
tags:
  - graph/prova
---
<div class="atom-reader" data-prova="exam-theory-q1-italiano"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="OII na Teorica — Problema 1" data-tags="nazione/italia,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/multi,topic/newtonian-mechanics,topic/conservation-of-energy,topic/oscillations-e-waves,argomento/meccanica,object/spring"></span>

<div class="qlang-switch" data-default="it"></div>



Molle a lunghezza zero e molle slinky

Una molla a lunghezza efficace zero (ZLS) è una molla per cui la forza è proporzionale alla lunghezza della molla stessa, cioè $F = kL$ se $L > L_0$, dove $L_0$ è la lunghezza minima della molla o, anche, la sua lunghezza quando non è allungata. La figura 1 mostra la relazione tra la forza $F$ e la lunghezza della molla $L$ per una ZLS. La pendenza della retta è la costante $k$ della molla.

Figura 1: relazione tra la forza $F$ e la lunghezza $L$ della molla

Si può usare una ZLS in sismografia perché consente una misurazione molto accurata delle variazioni dell'accelerazione gravitazionale $g$. In questo problema, considereremo una ZLS omogenea, il cui peso $Mg$ supera $kL_0$. Si definisce il rapporto adimensionale $\alpha = kL_0/Mg < 1$, per caratterizzare quanto la molla è "tenera" (una molla è dura, generalmente, se ha una costante elastica grande). Il giocattolo conosciuto come molla "slinky" può essere (ma non necessariamente) considerato un esempio per una ZLS.

Parte A: Statica (3.0 punti)

A.1
Considerare un segmento di lunghezza $\Delta\ell$ di una molla ZLS, inizialmente non allungata. Essa, poi, viene tirata da una forza $F$, ignorando la gravità. Qual è la lunghezza $\Delta y$ di questo segmento in funzione di $F$, $\Delta\ell$ e dei parametri della molla?
0.5pt

A.2
Calcolare il lavoro $\Delta W$ richiesto per allungare un segmento di molla dalla sua lunghezza originaria $\Delta\ell$ fino alla lunghezza $\Delta y$.
0.5pt

In questa domanda, si identifica un anello particolare della molla con la coordinata $\ell$ che rappresenta la distanza dell'anello dal fondo della molla stessa quando non viene stirata con $0 \leq \ell \leq L_0$. Si ricordi, in particolare, che la coordinata $\ell$ rimane commovente per la spira anche quando viene allungata. In parole povere $\ell$ rappresenta la coordinata di un anello qualsiasi della molla, sia quando si trova in posizione di riposo sia quando viene allungata dalla forza $F$.

A.3
Si supponga, ora, di appendere la molla alla sua estremità superiore, in modo che si allunghi sotto il suo stesso peso. Qual è la lunghezza totale $H$ della molla sospesa quando si trova in equilibrio? Esprimi le risposte in termini di $L_0$ e $\alpha$.
2.0pt

Parte B: Dinamica (5.5 punti)

Gli esperimenti mostrano che quando la molla viene appesa, mantenuta ferma in equilibrio e poi rilasciata, si contrae gradualmente dall'alto, mentre la parte inferiore continua a rimanere ferma (vedere la Figura 2). Con il passare del tempo la parte, che si contrae, cade come un pezzo solido e nella caduta cattura altri anelli della molla, mentre la parte immobile diventa via via più corta. Ogni anello successivo della molla inizia a muoversi solo quando la parte in caduta lo raggiunge. L'estremità inferiore della molla inizia a muoversi solo quando tutta la molla è completamente caduta e ha raggiunto la sua lunghezza minima $L_0$, quella che aveva quando non era stata ancora stirata. Dopo di ciò, la molla contratta continua a cadere, senza ruotare, come un corpo rigido che trasla sotto l'azione della gravità.

Figura 2: a sinistra una sequenza di foto scattate durante la caduta libera di una slinky; a destra: la parte mobile, I, e la parte stazionaria, II, durante la caduta libera della molla.

Nel resto del problema, si richiede di fondare la soluzione sul modello descritto fin qui. Si può trascurare la resistenza dell'aria, ma non si può trascurare $L_0$.

B.1
Calcolare il tempo $t_c$ trascorso dal momento in cui la molla viene lasciata andare, fino a quando è collassata completamente alla sua lunghezza minima $L_0$. Esprimere la risposta in termini di $L_0$, $g$ e $\alpha$. Calcolare il valore numerico di $t_c$ per una molla con $k = 1.02\ \text{N/m}$, $L_0 = 0.055\ \text{m}$ ed $M = 0.201\ \text{kg}$, mentre per $g$ si assuma $9.80\ \text{m/s}^2$.
2.5pt

B.2
Per risolvere questo punto si usa la coordinata $\ell$ per indicare il bordo tra le parti I e II (in figura 2 la parte I è quella in movimento e la parte II quella ferma). Ad un certo momento, mentre una parte stazionaria esiste ancora, la sua massa è $m(\ell) = \dfrac{\ell}{L_0} M$, e la parte in moto si muove con velocità istantanea $v_I(\ell)$. Far vedere che, in questo istante (mentre esiste ancora una parte della molla che è stazionaria), la velocità della parte di molla in movimento è $v_I(\ell) = \sqrt{A\ell + B}$. Esprimere le costanti $A$ e $B$ in termini di $L_0$, $g$ e $\alpha$.
2.5pt

B.3
Basando il calcolo su B.2, trovare la velocità minima $v_\text{min}$ della parte mobile della molla che si muove, dopo il suo rilascio e prima che colpisca il suolo. Esprimere la risposta in termini di $L_0$, $\alpha$, $A$ e $B$.
0.5pt

Parte C: Bilancio energetico (1.5 punti)

C.1
Calcolare quanta energia meccanica $Q$ è stata trasformata in calore, dal momento in cui la molla viene rilasciata fino all'attimo prima che la molla colpisca il suolo. Esprimere la risposta in termini di $L_0$, $M$, $g$ e $\alpha$.
1.5pt

<!--fig:start-->
**p.1** — Grafico forza-lunghezza della molla ZLS
![[_attachments/exam-theory-Q1-italiano/exam-theory-Q1-italiano_p1_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.2** — Foto di molle slinky appese in equilibrio
![[_attachments/exam-theory-Q1-italiano/exam-theory-Q1-italiano_p2_f2.png]]
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]], [[Oscillations & Waves]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Hooke's Law (metodo)|Hooke's Law]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1r0x7UgPURigNOfFcmUieRNKOkghaBcyV/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1LrmVSVwQXc63dbzJTjTORlIbRwquc2XT/view)


<div class="qlang-split" data-lang="en"></div>

Zero-length molds and slinky molds

A zero effective length spring (ZLS) is a spring for which the force is proportional to the length of the spring itself, i.e. $F = kL$ if $L > L_0$, where $L_0$ is the minimum length of the spring or, also, its length when not extended. Figure 1 shows the relationship between the force $F$ and the length of the spring $L$ for a ZLS. The slope of the straight line is the spring constant $k$.

Figure 1: Relation between the force $F$ and the length $L$ of the spring

A ZLS can be used in seismography because it allows a very accurate measurement of gravitational acceleration variations $g$. In this problem, we will consider a homogeneous ZLS, whose weight $Mg$ exceeds $kL_0$. The dimension ratio $\alpha = kL_0/Mg < 1$ is defined to characterize how "soft" the spring is (a spring is generally hard if it has a large elastic constant). The toy known as the "slinky" spring can (but not necessarily) be considered an example for a ZLS.

Part A: Static (3.0 points)

A.1
Consider a length segment $\Delta\ell$ of a ZLS spring, initially not lengthened. It is then pulled by a force $F$, ignoring gravity. What is the length $\Delta y$ of this segment according to $F$, $\Delta\ell$ and the spring parameters?
0.5pt

A.2
Calculate the $\Delta W$ work required to extend a spring segment from its original length $\Delta\ell$ to its length $\Delta y$.
0.5pt

In this query, a particular ring of the spring is identified with the coordinate $\ell$ representing the distance of the ring from the bottom of the spring itself when not stretched with $0 \leq \ell \leq L_0$. In particular, remember that the $\ell$ coordinate remains moving for the spire even when it is stretched. In simple terms $\ell$ represents the coordinate of any ring of the spring, whether it is at rest or being stretched by force $F$.

A.3
Suppose, now, that the spring is hung at its upper end, so that it stretches under its own weight. What is the total length $H$ of the spring suspended when in equilibrium? Express the answers in terms of $L_0$ and $\alpha$.
2.0pt

The following points shall be added:

Experiments show that when the spring is hung, kept firm in balance and then released, it gradually contracts from the top, while the bottom part continues to remain firm (see Figure 2). Over time the shrinking part falls as a solid piece and in the fall catches other rings of the spring, while the still part becomes shorter. Each ring of the spring begins to move only when the falling part reaches it. The lower end of the spring begins to move only when the entire spring has completely fallen and has reached its minimum length $L_0$, the same as when it had not yet been stretched. After that, the contracted spring continues to fall, without rotating, like a rigid body moving under the action of gravity.

Figure 2: On the left a sequence of photos taken during the free fall of a slinky; on the right: the moving part, I, and the stationary part, II, during the free fall of the spring.

In the rest of the problem, the solution is to be based on the model described so far. The air resistance can be ignored, but $L_0$ cannot be ignored.

B.1
Calculate the time $t_c$ elapsed from the moment the spring is released until it has completely collapsed to its minimum length $L_0$. Express the answer in terms of $L_0$, $g$ and $\alpha$. Calculate the numerical value of $t_c$ for a spring with $k = 1.02\ \text{N/m}$, $L_0 = 0.055\ \text{m}$ and $M = 0.201\ \text{kg}$, while for $g$ assume $9.80\ \text{m/s}^2$.
2.5pt

B.2
To solve this point, the coordinate $\ell$ is used to indicate the edge between Parts I and II (in Figure 2, Part I is the moving part and Part II is the fixed part). At a certain point, while a stationary part still exists, its mass is $m(\ell) = \dfrac{\ell}{L_0} M$, and the moving part moves at instantaneous speed $v_I(\ell)$. Show that at this moment (while there is still a part of the spring that is stationary), the speed of the spring part in motion is $v_I(\ell) = \sqrt{A\ell + B}$. Esprimere le costanti $A$ e $B$ in termini di $L_0$, $g$ e $\alpha$.
2.5pt

B.3
Based on the calculation on B.2, find the minimum speed $v_\text{min}$ of the moving part of the spring after release and before it hits the ground. The answer shall be expressed in terms of $L_0$, $\alpha$, $A$ and $B$.
0.5pt

Part C: Energy balance (1.5 points)

C.1
Calculate how much mechanical energy $Q$ has been converted into heat from the moment the spring is released to the moment before the spring hits the ground. The answer shall be expressed in terms of $L_0$, $M$, $g$ and $\alpha$.
1.5pt

<!--fig:start-->
**p.1** — Grafico forza-lunghezza della molla ZLS
![[_attachments/exam-theory-Q1-italiano/exam-theory-Q1-italiano_p1_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.2** — Foto di molle slinky appese in equilibrio
![[_attachments/exam-theory-Q1-italiano/exam-theory-Q1-italiano_p2_f2.png]]
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]], [[Oscillations & Waves]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Hooke's Law (metodo)|Hooke's Law]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1r0x7UgPURigNOfFcmUieRNKOkghaBcyV/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1LrmVSVwQXc63dbzJTjTORlIbRwquc2XT/view)
