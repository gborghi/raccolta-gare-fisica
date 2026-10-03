---
title: Svizzera 2024
tipo: prova
tags:
  - kg/prova
  - anno/2024
  - paese/Svizzera
  - comp/Svizze
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="2nd_round_2024_it"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Svizzera 2024 — Quesito 1" data-tags="kg/prova,paese/Svizzera,comp/Svizze,cluster/Meccanica,object/point-charge,object/conducting-sphere"></span>

<div class="qlang-switch" data-default="it"></div>



Figura B.1: Conduttore piano a massa infinitamente lungo con una carica $Q_1$ in una posizione $\vec{r}_1 = (x_1, y_1, z_1) = (0, 0, d)$.

i. (0.25 pt) Quali sono le condizioni al contorno per il potenziale elettrostatico $V$ di questo sistema?

ii. (1.5 pt) Immaginiamo un secondo sistema fisico con la stessa carica $Q_1$ nella stessa posizione $\vec{r}_1$ della Fig. B.1 ma senza il piano conduttore. Il nostro obiettivo è trovare una configurazione con una seconda carica $Q_2$ nella posizione $\vec{r}_2$ che abbia le stesse condizioni al contorno della Fig. B.1. Quali dovrebbero essere i valori di $Q_2$ e $\vec{r}_2 = (x_2, y_2, z_2)$ perché ciò avvenga? Perché?

iii. (1 pt) Utilizzando i risultati precedenti, calcolare il potenziale elettrico $V(x, y, z)$ al di sopra del suolo nel sistema di Fig. B.1 in funzione delle coordinate $(x, y, z)$, della distanza $d$ e della carica $Q_1$. L'espressione può essere lasciata come somma di due termini, non è necessario semplificarla completamente.

iv. (1.5 pt) Disegnare schematicamente il sistema di conduttori di Fig. B.1 con le linee di campo corrispondenti, assumendo che $Q_1 > 0$ (in uno schizzo separato, non sul foglio del problema).

Parte C. Carica immagine ad angolo retto (5.5 punti)

Considereremo ora geometrie di conduttori più complesse.

i. (2.5 pt) Consideriamo il sistema mostrato in Fig. C.1. Qual è il numero $N$ di cariche speculari necessarie per riprodurre le condizioni limite del conduttore? Quali sono i loro valori $Q_i$ e le loro posizioni $\vec{r}_i = (x_i, y_i, z_i)$ per $i = 1, 2, \dots, N$? Perché?

Figura C.1: Due semipiani conduttori infinitamente lunghi messi a terra ad angolo retto con una carica $Q_1$ nella posizione $\vec{r}_1 = (x_1, y_1, z_1) = (d, 0, d)$.

ii. (1 pt) Qual è il potenziale corrispondente $V(x, y, z)$ in funzione delle coordinate $(x, y, z)$, della distanza $d$ e della carica $Q_1$? L'espressione può essere lasciata come somma di $N$ termini, non è necessario semplificarla completamente.

iii. (2 pt) Disegnare schematicamente il sistema carica-mezzo piano-conduttore con le linee di campo corrispondenti, assumendo che $Q_1 < 0$ (in uno schizzo separato, non sul foglio del problema).

Parte D. Cariche dello specchio circolare (4 punti)

i. (2.5 pt) Consideriamo ora il sistema mostrato in Fig. D.1. Si scopre che è necessaria una sola carica speculare per riprodurre le condizioni al contorno corrispondenti. Qual è il suo valore $Q_2$ e la sua posizione $\vec{r}_2 = (x_2, y_2, z_2)$?

Suggerimento: si può usare senza prova che un potenziale che soddisfa le condizioni al contorno appropriate nelle posizioni $(r, 0, 0)$ e $(-r, 0, 0)$ soddisfa le condizioni al contorno sull'intera sfera.

Figura D.1: Conduttore sferico a massa di raggio $r$ con centro $O$ in posizione $\vec{r}_0 = (0, 0, 0)$ e carica $Q_1$ in posizione $\vec{r}_1 = (x_1, y_1, z_1) = (r/2, 0, 0)$. Qui vediamo una fetta a $y = 0$ della sfera nel piano $xz$.

ii. (1.5 pt) Qual è il potenziale corrispondente $V(x, y, z)$ in funzione delle coordinate $(x, y, z)$, del raggio $r$ e della carica $Q_1$? L'espressione può essere lasciata come somma di due termini, non è necessario semplificarla completamente.

SOLUTION

Problemi lunghi: soluzioni

Problema lungo 2.1: Stabilità di un uovo

Consideriamo un uovo rappresentato da un solido omogeneo di rivoluzione con profilo $f(x) = \frac{1}{2}\sqrt{x - x^4}$ sul dominio $x \in [a = 0, b = 1]$. Le unità di lunghezza sono arbitrarie.

Parte A. Centro di gravità e raggio

Il baricentro $c$ di un solido di rivoluzione si trova sul suo asse e può essere calcolato dividendolo in dischi di spessore infinitesimale $dx$ e volume $\pi f^2(x)\, dx$:

$$c = \frac{1}{V} \int_a^b x\,\pi f^2(x)\, dx,$$

dove $V$ è il volume del solido.

i. Calcolare $c$ per l'uovo.

Following the idea of splitting the egg into disk-shaped infinitely thin slices, the volume is given by:

$$V = \int_a^b \pi f^2(x)\, dx.$$

Thus for the egg, we have

$$c = \frac{\int_0^1 x\,\tfrac{1}{4}(x - x^4)\, dx}{\int_0^1 \tfrac{1}{4}(x - x^4)\, dx} = \frac{\int_0^1 (x^2 - x^5)\, dx}{\int_0^1 (x - x^4)\, dx} = \frac{\left[\tfrac{1}{3}x^3 - \tfrac{1}{6}x^6\right]_0^1}{\left[\tfrac{1}{2}x^2 - \tfrac{1}{5}x^5\right]_0^1},$$

And finally

$$c = \frac{\tfrac{1}{3} - \tfrac{1}{6}}{\tfrac{1}{2} - \tfrac{1}{5}} = \frac{\tfrac{1}{6}}{\tfrac{3}{10}} = \frac{5}{9}.$$

ii. Se fosse stato scelto un fattore diverso da $\frac{1}{2}$ nel profilo $f(x)$ dell'uovo, quale sarebbe stato l'impatto sul valore di $c$? Giustificare.

SOLUTION

$c$ wouldn't change, because the factor (squared) appears both in the numerator and in the denominator of $c$.

This is the same reason why the egg's density doesn't play a role, nor does $\pi$.

iii. Trovare un'espressione per il «raggio» $r(x)$ dell'uovo, cioè la distanza tra il baricentro e un punto $(x, f(x))$ sulla superficie dell'uovo. Il risultato deve essere della forma $\sqrt{P(x)}$, dove $P(x)$ è un polinomio.

We can use the Pythagorean theorem:

$$r(x) = \sqrt{f^2(x) + (x - c)^2},$$

and we get

$$r(x) = \sqrt{\tfrac{1}{4}x - \tfrac{1}{4}x^4 + x^2 + c^2 - 2xc} = \sqrt{-\tfrac{1}{4}x^4 + x^2 - \tfrac{31}{36}x + \tfrac{25}{81}}.$$

Parte B. Intermezzo analitico

Sia $g(x) > 0$ una funzione differenziabile strettamente positiva.

i. Espandere $\dfrac{d\sqrt{g(x)}}{dx}$, la derivata della radice quadrata di $g(x)$.

We can use the generic formula

$$\frac{dg^n(x)}{dx} = n\,g^{n-1}(x)\,\frac{dg(x)}{dx}.$$

Here we have the case $n = \frac{1}{2}$, so

$$\frac{d\sqrt{g(x)}}{dx} = \frac{1}{2\sqrt{g(x)}}\,\frac{dg(x)}{dx}.$$

Full points are given as long as the answer is of the desired final form, even if the generic formula is not explicitly stated.

ii. Dimostrare che il segno di $\dfrac{d\sqrt{g(x)}}{dx}$ è sempre uguale a quello di $\dfrac{dg(x)}{dx}$.

$$g(x) > 0 \Rightarrow \sqrt{g(x)} > 0 \Rightarrow \frac{1}{2\sqrt{g(x)}} > 0.$$

Thus the factor in front of the derivative does not change the sign, so both will always be equal. This is in particular valid for the case $0$: if the derivative of $g(x)$ is null, so is the derivative of $\sqrt{g(x)}$.

Parte C. Stabilità dell'uovo deposto

Poniamo ora l'uovo su una superficie orizzontale e identifichiamo il punto in cui l'uovo è a contatto con la superficie con la sua coordinata $x$.

SOLUTION

i. Le posizioni $a = 0$ e $b = 1$ sono posizioni di equilibrio, a causa della simmetria di rivoluzione. Determinare la stabilità di queste due posizioni dall'espressione $r(x)$ trovata in A.iii. e utilizzando il risultato mostrato in B.ii.

To study the stability, we need to compute the derivative of the radius found in A.iii. But we are only interested in its sign, so instead, and according to B.ii., we can compute the derivative of its square, $P(x)$.

$$\frac{dP(x)}{dx} = -x^3 + 2x - \frac{31}{36}.$$

For $x = a = 0$, $\left.\dfrac{dP(x)}{dx}\right|_a = -\dfrac{31}{36} < 0$.

This means that all values slightly larger than $a$ lead to a smaller $r^2$, thus also to a smaller $r$. Because $a$ is at the end of the domain, it corresponds to a local maximum of the radius, and therefore $a$ is an instable equilibrium.

For $x = b = 1$, $\left.\dfrac{dP(x)}{dx}\right|_b = -1 + 2 - \dfrac{31}{36} = \dfrac{5}{36} > 0$.

This means that all values slightly smaller than $b$ lead again to a smaller $r^2$, thus also to a smaller $r$. Because $b$ is at the other end of the domain, it corresponds to a local maximum of the radius, and therefore $b$ is an instable equilibrium as well.

Esiste una posizione $a < s < b$ in cui l'uovo disteso su un fianco è in equilibrio stabile.

ii. Qual è la particolarità di $r(s)$?

It is a local minimum of $r(x)$, and in fact its only minimum.

Give 0.5 point if it is only mentioned that the segment of $r(s)$ is perpendicular to the egg's surface.

iii. Trovare un'equazione polinomiale per $s$.

The condition for $s$ is that the derivative of the radius is zero.

Again we can use B.ii. and only consider the derivative of $P(x)$.

Thus the equation is

$$-s^3 + 2s - \frac{31}{36} = 0.$$

SOLUTION

Purtroppo, questa equazione polinomiale non è (facilmente) risolvibile. Cercheremo quindi un'approssimazione utilizzando un'espansione di Taylor.

iv. Scegliere un buon punto di partenza $t$ per lo sviluppo. Giustificate la vostra scelta.

If the egg was symmetric, that is an ellipse, $s$ would be in the center ($\frac{1}{2}$).

The egg is not very dissymmetric, so $t = \frac{1}{2}$ is a good starting point, and easy to comput

<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p15_f9.png]]
*conduttore sferico a massa Fig D.1*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p25_f13.png]]
*linee di campo piano conduttore a massa*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p27_f14.png]]
*linee di campo sistema quattro cariche speculari*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p28_f15.png]]
*conduttore sferico Fig D.1 soluzione*
<!--fig:end-->

**Topic:** [[Electrostatics]], [[Electromagnetism]]
**Metodi:** [[Electric Potential Method (metodo)|Electric Potential Method]], [[Symmetry Argument (metodo)|Symmetry Argument]], [[Coulomb's Law (metodo)|Coulomb's Law]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Point Charge (object)|Point Charge]], [[Conducting Sphere (object)|Conducting Sphere]]
**Fonte:** [Testo (PDF) — p.14](https://drive.google.com/file/d/14f5cOECox8iz56s6uHvon5QiZdkP6xLO/view)


<div class="qlang-split" data-lang="en"></div>

Figure B.1: Infinite plane conducting surface with a charge $Q_1$ located at position $\vec{r}_1 = (x_1, y_1, z_1) = (0, 0, d)$.

i. (0.25 pt) What are the boundary conditions for the electrostatic potential $V$ of this system?

ii. (1.5 pt) Consider a second physical system with the same charge $Q_1$ located at the same position $\vec{r}_1$ as in Figure B.1, but without the conducting plane. Our goal is to find a configuration with a second charge $Q_2$ located at position $\vec{r}_2$ such that the boundary conditions match those of Figure B.1. What should be the values of $Q_2$ and $\vec{r}_2 = (x_2, y_2, z_2)$ for this to happen? Why?

iii. (1 pt) Using the previous results, compute the electric potential $V(x, y, z)$ above the ground in the system of Figure B.1 as a function of coordinates $(x, y, z)$, distance $d$, and charge $Q_1$. The expression may be left as a sum of two terms; full simplification is not required.

iv. (1.5 pt) Sketch schematically the conductor system of Figure B.1 with the corresponding field lines, assuming that $Q_1 > 0$ (on a separate sketch, not on the problem sheet).

Part C. Image charge at right angle (5.5 points)

We will now consider more complex conductor geometries.

i. (2.5 pt) Consider the system shown in Figure C.1. How many image charges $N$ are required to reproduce the boundary conditions of the conductor? What are their values $Q_i$ and positions $\vec{r}_i = (x_i, y_i, z_i)$ for $i = 1, 2, \dots, N$? Why?

Figure C.1: Two infinitely long grounded conducting half-planes at right angles with a charge $Q_1$ at position $\vec{r}_1 = (x_1, y_1, z_1) = (d, 0, d)$.

ii. (1 pt) What is the corresponding potential $V(x, y, z)$ as a function of the coordinates $(x, y, z)$, the distance $d$ and the charge $Q_1$? The expression may be left as a sum of $N$ terms, it is not necessary to simplify it completely.

iii. (2 pt) Schematically draw the charge-half-plane-conductor system with the corresponding field lines, assuming that $Q_1 < 0$ (in a separate sketch, not on the problem sheet).

Part D. Circular mirror charges (4 points)

i. (2.5 pt) Let us now consider the system shown in Fig. D.1. It turns out that only one image charge is needed to reproduce the corresponding boundary conditions. What is its value $Q_2$ and its position $\vec{r}_2 = (x_2, y_2, z_2)$?

Hint: one may use without proof that a potential satisfying the appropriate boundary conditions at the positions $(r, 0, 0)$ and $(-r, 0, 0)$ satisfies the boundary conditions on the entire sphere.

Figure D.1: Grounded spherical conductor of radius $r$ with center $O$ at position $\vec{r}_0 = (0, 0, 0)$ and charge $Q_1$ at position $\vec{r}_1 = (x_1, y_1, z_1) = (r/2, 0, 0)$. Here we see a slice at $y = 0$ of the sphere in the plane $xz$.

ii. (1.5 pt) What is the corresponding potential $V(x, y, z)$ as a function of the coordinates $(x, y, z)$, the radius $r$ and the charge $Q_1$? The expression may be left as a sum of two terms, it is not necessary to simplify it completely.

SOLUTION

Long Problems: Solutions

Long Problem 2.1: Stability of an Egg

Consider an egg represented by a homogeneous solid of revolution with profile $f(x) = \frac{1}{2}\sqrt{x - x^4}$ on the domain $x \in [a = 0, b = 1]$. Length units are arbitrary.

Part A. Center of gravity and radius

The center of mass $c$ of a solid of revolution lies on its axis and can be computed by dividing it into infinitesimally thin disks of thickness $dx$ and volume $\pi f^2(x)\, dx$:

$$c = \frac{1}{V} \int_a^b x\,\pi f^2(x)\, dx,$$

where $V$ is the volume of the solid.

i. Compute $c$ for the egg.

Following the idea of splitting the egg into disk-shaped infinitely thin slices, the volume is given by:

$$V = \int_a^b \pi f^2(x)\, dx.$$

Thus for the egg, we have

$$c = \frac{\int_0^1 x\,\tfrac{1}{4}(x - x^4)\, dx}{\int_0^1 \tfrac{1}{4}(x - x^4)\, dx} = \frac{\int_0^1 (x^2 - x^5)\, dx}{\int_0^1 (x - x^4)\, dx} = \frac{\left[\tfrac{1}{3}x^3 - \tfrac{1}{6}x^6\right]_0^1}{\left[\tfrac{1}{2}x^2 - \tfrac{1}{5}x^5\right]_0^1},$$

And finally

$$c = \frac{\tfrac{1}{3} - \tfrac{1}{6}}{\tfrac{1}{2} - \tfrac{1}{5}} = \frac{\tfrac{1}{6}}{\tfrac{3}{10}} = \frac{5}{9}.$$

ii. If a different factor than $\frac{1}{2}$ had been chosen in the profile $f(x)$ of the egg, what would have been the impact on the value of $c$? Justify.

SOLUTION

$c$ would not change, because the factor (squared) appears both in the numerator and in the denominator of $c$.

This is the same reason why the egg's density doesn't play a role, nor does $\pi$.

iii. Find an expression for the "radius" $r(x)$ of the egg, i.e., the distance between the center of mass and a point $(x, f(x))$ on the egg's surface. The result must be of the form $\sqrt{P(x)}$, where $P(x)$ is a polynomial.

We can use the Pythagorean theorem:

$$r(x) = \sqrt{f^2(x) + (x - c)^2},$$

and we get

$$r(x) = \sqrt{\tfrac{1}{4}x - \tfrac{1}{4}x^4 + x^2 + c^2 - 2xc} = \sqrt{-\tfrac{1}{4}x^4 + x^2 - \tfrac{31}{36}x + \tfrac{25}{81}}.$$

Part B. Analytical interlude

Let $g(x) > 0$ be a differentiable strictly positive function.

i. Expand $\dfrac{d\sqrt{g(x)}}{dx}$, the derivative of the square root of $g(x)$.

We can use the generic formula

$$\frac{dg^n(x)}{dx} = n\,g^{n-1}(x)\,\frac{dg(x)}{dx}.$$

Here we have the case $n = \frac{1}{2}$, so

$$\frac{d\sqrt{g(x)}}{dx} = \frac{1}{2\sqrt{g(x)}}\,\frac{dg(x)}{dx}.$$

Full points are awarded as long as the answer is in the required final form, even if the general formula is not explicitly stated.

ii. Prove that the sign of $\dfrac{d\sqrt{g(x)}}{dx}$ is always equal to that of $\dfrac{dg(x)}{dx}$.

$$g(x) > 0 \Rightarrow \sqrt{g(x)} > 0 \Rightarrow \frac{1}{2\sqrt{g(x)}} > 0.$$

Thus, the factor in front of the derivative does not change the sign, so both will always be equal. This is particularly valid for the case $0$: if the derivative of $g(x)$ is zero, then so is the derivative of $\sqrt{g(x)}$.

Part C. Stability of the deposited egg

Now place the egg on a horizontal surface and identify the point where the egg contacts the surface by its coordinate $x$.

SOLUTION

i. The positions $a = 0$ and $b = 1$ are equilibrium positions, due to axial symmetry. Determine the stability of these two positions using the expression $r(x)$ obtained in A.iii., and applying the result shown in B.ii.

To study stability, we need to compute the derivative of the radius found in A.iii. However, we are only interested in its sign; therefore, according to B.ii., instead we can compute the derivative of its square, $P(x)$.

$$\frac{dP(x)}{dx} = -x^3 + 2x - \frac{31}{36}.$$

For $x = a = 0$, $\left.\dfrac{dP(x)}{dx}\right|_a = -\dfrac{31}{36} < 0$.

This means that all values slightly larger than $a$ lead to a smaller $r^2$, thus also to a smaller $r$. Since $a$ is at the end of the domain, it corresponds to a local maximum of the radius, and therefore $a$ is an unstable equilibrium.

For $x = b = 1$, $\left.\dfrac{dP(x)}{dx}\right|_b = -1 + 2 - \dfrac{31}{36} = \dfrac{5}{36} > 0$.

This means that all values slightly smaller than $b$ again lead to a smaller $r^2$, thus also to a smaller $r$. Since $b$ is at the other end of the domain, it corresponds to a local maximum of the radius, and therefore $b$ is an unstable equilibrium as well.

There exists a position $a < s < b$ at which the egg lying on its side is in stable equilibrium.

ii. What is special about $r(s)$?

It is a local minimum of $r(x)$, and in fact its only minimum.

Give 0.5 point if it is only mentioned that the segment of $r(s)$ is perpendicular to the egg's surface.

iii. Find a polynomial equation for $s$.

The condition for $s$ is that the derivative of the radius is zero.

Again we can use B.ii. and only consider the derivative of $P(x)$.

Thus the equation is

$$-s^3 + 2s - \frac{31}{36} = 0.$$

SOLUTION

Unfortunately, this polynomial equation is not (easily) solvable. We will therefore seek an approximation using a Taylor expansion.

iv. Choose a good starting point $t$ for the expansion. Justify your choice.

If the egg were symmetric, that is an ellipse, $s$ would be at the center ($\frac{1}{2}$).

The egg is not very asymmetric, so $t = \frac{1}{2}$ is a good starting point, and easy to compute.

<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p15_f9.png]]
*conducting sphere with mass Figure D.1*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p25_f13.png]]
*field lines, plane conducting surface with mass*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p27_f14.png]]
*field lines, system of four symmetric charges*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p28_f15.png]]
*conducting sphere Figure D.1 solution*
<!--fig:end-->



<span class="atom-split" id="q02" data-atom="q02" data-title="Svizzera 2024 — Quesito 2" data-tags="kg/prova,paese/Svizzera,comp/Svizze,cluster/Meccanica,object/point-charge,object/manometer,object/gas"></span>

<div class="qlang-switch" data-default="it"></div>



e i termini di ordine superiore.

We can start by rewriting the right-hand side of the previous answer in a way that we can use the given Taylor expansion:

$$\left(\frac{P_0 + h_A}{P_0 + h_C}\right)^{\gamma} = \left(1 + \frac{h_A}{P_0}\right)^{\gamma}\left(1 + \frac{h_C}{P_0}\right)^{-\gamma}$$

Applying the Taylors expansion then gives (keeping only terms linear in $\frac{h_A}{P_0}$ and $\frac{h_C}{P_0}$)

$$\left(\frac{P_0 + h_A}{P_0 + h_C}\right)^{\gamma} \approx \left(1 + \gamma\frac{h_A}{P_0}\right)\left(1 - \gamma\frac{h_C}{P_0}\right) \approx 1 + \gamma\frac{h_A - h_C}{P_0}.$$

We end up with

$$\frac{P_0 + h_A}{P_0} = 1 + \gamma\frac{h_A - h_C}{P_0}.$$

iv. Utilizzando i risultati precedenti, esprimere l'indice adiabatico $\gamma$ in funzione di $h_A$ e $h_C$.

Isolating $\gamma$ we find

$$\gamma = \frac{h_A}{h_A - h_C}.$$

v. Calcolare numericamente l'indice adiabatico $\gamma$ a partire dalle misure fornite.

Using the given numerical values for $P_0$, $P_0 + h_A$ and $h_C$, one finds

$$\gamma = \frac{780.31 - 766.50}{780.31 - 766.50 - 3.61} \approx 1.35.$$

vi. Dal teorema di equipartizione, è possibile ricavare che $C_V = \frac{f}{2}R$ e $C_P = \frac{f+2}{2}R$, dove $f$ è il numero di gradi di libertà consentiti per le molecole del gas. Il gas qui studiato ha $f = 5$ gradi di libertà. Qual è la differenza relativa tra i valori teorici e quelli sperimentali dell'indice adiabatico $\gamma$?

Using the definition of $\gamma$ we find $\gamma = \frac{f+2}{f} = \frac{7}{5} = 1.4$. This gives a relative difference $\dfrac{\gamma_{th} - \gamma_{exp}}{\gamma_{th}} = 3.6\%$.

vii. Quali potrebbero essere le ragioni di questa differenza?

If at least two of the following reasons is mentioned, or any other meaningful potential reasson is mentioned, then the full points are obtained.

The discrepancy could come from: the statistical uncertainty in the measurements, a systematic uncertainty due to a wrong assumption (the process $A \to B$ might not be fully adiabatic, the change of volume due to the pressure changes in the manometer might not be negligible, the initial compression might not be fully isothermic, ...), etc.

SOLUTION

Problema lungo 2.3: Carica immagine

Un problema molto comune in elettrostatica è quello di determinare il potenziale elettrico di un sistema composto da cariche puntiformi e conduttori di varia forma. In questo esercizio svilupperemo un metodo, il cosiddetto metodo della carica immagine, per semplificare notevolmente tali problemi nei casi con una simmetria appropriata. In questo esercizio consideriamo il sistema di unità SI.

Parte A. Potenziale elettrico e conduttori

In questa prima parte parleremo delle gabbie di Faraday.

i. Scrivere il potenziale elettrico $V$ dovuto a una carica puntiforme $q$ in funzione della distanza $r$ dalla carica.

The potential is given by $V(r) = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q}{r}$.

ii. Scrivere il potenziale elettrico $V$ dovuto a $N$ cariche puntiformi $q_i$, $i \in 1, 2, \dots, N$, in funzione delle distanze $r_i$ da ciascuna carica $q_i$.

The total potential is given by the sum of the individual potentials: $V = \dfrac{1}{4\pi\varepsilon_0}\displaystyle\sum_{i=1}^{N} \dfrac{q_i}{r_i}$.

iii. Considerate la situazione mostrata in Fig. B.1. Che cosa si può dire del potenziale elettrico sulla superficie del materiale conduttore collegato a terra?

As we have a grounded conductor, the potential on the surface must vanish, so $V = 0$ on the conductor.

iv. Durante un temporale, è più sicuro rimanere in auto o stare all'aperto? Perché? Argomentate utilizzando la risposta alla domanda precedente.

It is safer to stay in one's car, because the metallic hull of the car is a grounding conducting surface for which $V = 0$ holds such that its inside is protected against lightning.

Parte B. Carica immagine con un conduttore piano

Consideriamo nuovamente la situazione illustrata nella Fig. B.1. L'obiettivo di questa parte è determinare il potenziale elettrico in qualsiasi punto al di sopra del piano. A tale scopo, è possibile utilizzare un trucco che semplifica notevolmente la situazione. L'idea è quella di introdurre una carica immaginaria «specchio» per riprodurre le condizioni al contorno poste dal materiale conduttore.

In elettrostatica, se due sistemi fisici hanno potenziali con le stesse condizioni al contorno, le due situazioni sono fisicamente equivalenti.

Quindi, per determinare il potenziale elettrico di questo sistema, vorremmo trovare un altro sistema più semplice per descrivere il suo potenziale.

Figura B.1: Conduttore piano a massa infinitamente lungo con una carica $Q_1$ in una posizione $\vec{r}_1 = (x_1, y_1, z_1) = (0, 0, d)$.

SOLUTION

i. Quali sono le condizioni al contorno per il potenziale elettrostatico $V$ di questo sistema?

As seen in the previous part, the potential must satisfy $V = 0$ on the grounded conducting surface.

ii. Immaginiamo un secondo sistema fisico con la stessa carica $Q_1$ nella stessa posizione $\vec{r}_1$ della Fig. B.1 ma senza il piano conduttore. Il nostro obiettivo è trovare una configurazione con una seconda carica $Q_2$ nella posizione $\vec{r}_2$ che abbia le stesse condizioni al contorno della Fig. B.1. Quali dovrebbero essere i valori di $Q_2$ e $\vec{r}_2 = (x_2, y_2, z_2)$ perché ciò avvenga? Perché?

By symmetry, we can expect the mirror charge to lie at position $\vec{r}_2 = (0, 0, -d)$.

If the mirror charge lies at $(x_2, y_2, z_2) = (0, 0, -d)$ we can check that picking $Q_2 = -Q_1$ indeed satisfies the boundary conditions.

Indeed, this must be the case by symmetry. One could also check it explicitly using the result from A.ii.

iii. Utilizzando i risultati precedenti, calcolare il potenziale elettrico $V(x, y, z)$ al di sopra del suolo nel sistema di Fig. B.1 in funzione delle coordinate $(x, y, z)$, della distanza $d$ e della carica $Q_1$. L'espressione può essere lasciata come somma di due termini, non è necessario semplificarla completamente.

The resulting potential in the charge-plane conductor system must be the same as the charge-mirror charge system, so we obtain for $\vec{r} = (x, y, z)$

$$V(\vec{r}) = \frac{1}{4\pi\varepsilon_0}\left[\frac{Q_1}{\sqrt{x^2 + y^2 + (z - d)^2}} - \frac{Q_1}{\sqrt{x^2 + y^2 + (z + d)^2}}\right].$$

The solution could be written in a different form as long as the potential is written explicitly as a function of the required quantities.

iv. Disegnare schematicamente il sistema di conduttori di Fig. B.1 con le linee di campo corrispondenti, assumendo che $Q_1 > 0$ (in uno schizzo separato, non sul foglio del problema).

The drawing should qualitatively look like the upper half of the following image. The lower half should contain no field lines.

https://commons.wikimedia.org/wiki/File:VFPt_imagecharge_plane_horizontal_plusminus.svg

SOLUTION

The field lines should flow from the positive charge to the conductor.

The field lines should stop at the level of the conductor.

The field lines at the level of the conductor should be perpendicular to its surface.

Parte C. Carica immagine ad angolo retto

Considereremo ora geometrie di conduttori più complesse.

i. Consideriamo il sistema mostrato in Fig. C.1. Qual è il numero $N$ di cariche speculari necessarie per riprodurre le condizioni limite del conduttore? Quali sono i loro valori $Q_i$ e le loro posizioni $\vec{r}_i = (x_i, y_i, z_i)$ per $i = 1, 2, \dots, N$? Perché?

Figura C.1: Due semipiani conduttori infinitamente lunghi messi a terra ad angolo retto con una carica $Q_1$ nella posizione $\vec{r}_1 = (x_1, y_1, z_1) = (d, 0, d)$.

We want the potential to vanish on the conductor plates.

By symmetry considerations, we can convince ourselves that the mirror charges should lie at the positions $\vec{r}_2 = (-d, 0, d)$, $\vec{r}_3 = (-d, 0, -d)$ and $\vec{r}_4 = (d, 0, -d)$.

Similarly, we can expect to have $Q_2 = Q_4$.

After some trial and error, one can notice that the choice $Q_2 = Q_4 = -Q_1$ and $Q_3 = Q_1$ leads to a vanishing potential on the conducting plates.

Indeed, by saying that $r_i$ is the distance from the position $\vec{r}$ to the charge $i$, we have

$$V(\vec{r}) = \frac{1}{4\pi\varepsilon_0}\left(\frac{Q_1}{r_1} - \frac{Q_1}{r_2} + \frac{Q_1}{r_3} - \frac{Q_1}{r_4}\right).$$

On the vertical plate, we have $r_1 = r_2$ and $r_3 = r_4$ such that indeed $V = 0$. On the horizontal plate we have $r_1 = r_4$ and $r_2 = r_3$ so we also have a vanishing potential.

A more explicit computation making less explicit use of symmetries, or a more implicit reasoning with the symmetries is fine as long as the reasoning is corr

<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p12_f8.png]]
*schema apparato Clément-Desormes pompa valvola manometro*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p20_f11.png]]
*schema Clément-Desormes soluzione*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p22_f12.png]]
*diagramma P-V esperimento A B C*
<!--fig:end-->

**Topic:** [[Thermodynamics]], [[Kinetic Theory]]
**Metodi:** [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Point Charge (object)|Point Charge]], [[Manometer (object)|Manometer]], [[Gas (object)|Gas]]
**Fonte:** [Testo (PDF) — p.23](https://drive.google.com/file/d/14f5cOECox8iz56s6uHvon5QiZdkP6xLO/view)

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

<!--fig:start-->
**p.4** — orbita ellittica pianeta-stella
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p4_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.4** — quattro traiettorie I-IV corda-carrucola
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p4_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.6** — configurazioni A-F cariche puntiformi campo E
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p6_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.6** — circuito con batterie resistori corrente


<figure class="tikz-fig">
<!-- This file was generated by dvisvgm 3.2.2 -->
<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='204.309527pt' height='102.02757pt' viewBox='-65.739227 -65.062695 204.309527 102.02757'>
<defs>
<path id='g1-10' d='M6.744707-1.613948H6.495641C6.445828-1.354919 6.405978-1.125778 6.316314-.886675C6.266501-.727273 6.236613-.647572 5.65878-.647572H4.861768C4.991283-1.205479 5.300125-1.683686 5.748443-2.34122C6.216687-3.048568 6.625156-3.73599 6.625156-4.523039C6.625156-5.907846 5.280199-7.023661 3.596513-7.023661C1.882939-7.023661 .557908-5.88792 .557908-4.523039C.557908-3.73599 .966376-3.048568 1.43462-2.34122C1.872976-1.683686 2.191781-1.205479 2.321295-.647572H1.524284C.946451-.647572 .916563-.727273 .86675-.876712C.787049-1.105853 .737235-1.364882 .687422-1.613948H.438356L.767123 0H2.361146C2.580324 0 2.610212 0 2.610212-.209215C2.610212-.9066 2.30137-1.783313 2.072229-2.420922C1.863014-2.998755 1.58406-3.785803 1.58406-4.533001C1.58406-6.127024 2.67995-6.804483 3.58655-6.804483C4.542964-6.804483 5.599004-6.087173 5.599004-4.533001C5.599004-3.785803 5.330012-3.028643 5.041096-2.211706C4.891656-1.793275 4.572852-.896638 4.572852-.209215C4.572852 0 4.60274 0 4.83188 0H6.41594L6.744707-1.613948Z'/>
<path id='g1-48' d='M4.582814-3.188045C4.582814-3.985056 4.533001-4.782067 4.184309-5.519303C3.726027-6.475716 2.909091-6.635118 2.49066-6.635118C1.892902-6.635118 1.165629-6.37609 .757161-5.449564C.438356-4.762142 .388543-3.985056 .388543-3.188045C.388543-2.440847 .428394-1.544209 .836862-.787049C1.265255 .019925 1.992528 .219178 2.480697 .219178C3.01868 .219178 3.775841 .009963 4.214197-.936488C4.533001-1.62391 4.582814-2.400996 4.582814-3.188045ZM2.480697 0C2.092154 0 1.504359-.249066 1.325031-1.205479C1.215442-1.803238 1.215442-2.719801 1.215442-3.307597C1.215442-3.945205 1.215442-4.60274 1.295143-5.140722C1.484433-6.326276 2.231631-6.41594 2.480697-6.41594C2.809465-6.41594 3.466999-6.236613 3.656289-5.250311C3.755915-4.692403 3.755915-3.935243 3.755915-3.307597C3.755915-2.560399 3.755915-1.882939 3.646326-1.24533C3.496887-.298879 2.929016 0 2.480697 0Z'/>
<path id='g1-50' d='M1.265255-.767123L2.321295-1.793275C3.875467-3.16812 4.473225-3.706102 4.473225-4.702366C4.473225-5.838107 3.576588-6.635118 2.361146-6.635118C1.235367-6.635118 .498132-5.718555 .498132-4.83188C.498132-4.273973 .996264-4.273973 1.026152-4.273973C1.195517-4.273973 1.544209-4.393524 1.544209-4.801993C1.544209-5.061021 1.364882-5.32005 1.016189-5.32005C.936488-5.32005 .916563-5.32005 .886675-5.310087C1.115816-5.957659 1.653798-6.326276 2.231631-6.326276C3.138232-6.326276 3.566625-5.519303 3.566625-4.702366C3.566625-3.905355 3.068493-3.118306 2.520548-2.500623L.607721-.368618C.498132-.259029 .498132-.239103 .498132 0H4.194271L4.473225-1.733499H4.224159C4.174346-1.43462 4.104608-.996264 4.004981-.846824C3.935243-.767123 3.277709-.767123 3.058531-.767123H1.265255Z'/>
<path id='g1-51' d='M2.889166-3.506849C3.706102-3.775841 4.283935-4.473225 4.283935-5.260274C4.283935-6.07721 3.407223-6.635118 2.450809-6.635118C1.444583-6.635118 .687422-6.03736 .687422-5.280199C.687422-4.951432 .9066-4.762142 1.195517-4.762142C1.504359-4.762142 1.703611-4.98132 1.703611-5.270237C1.703611-5.768369 1.235367-5.768369 1.085928-5.768369C1.39477-6.256538 2.052304-6.386052 2.410959-6.386052C2.819427-6.386052 3.367372-6.166874 3.367372-5.270237C3.367372-5.150685 3.347447-4.572852 3.088418-4.134496C2.789539-3.656289 2.450809-3.626401 2.201743-3.616438C2.122042-3.606476 1.882939-3.58655 1.8132-3.58655C1.733499-3.576588 1.663761-3.566625 1.663761-3.466999C1.663761-3.35741 1.733499-3.35741 1.902864-3.35741H2.34122C3.158157-3.35741 3.526775-2.67995 3.526775-1.703611C3.526775-.348692 2.839352-.059776 2.400996-.059776C1.972603-.059776 1.225405-.229141 .876712-.816936C1.225405-.767123 1.534247-.986301 1.534247-1.364882C1.534247-1.723537 1.265255-1.92279 .976339-1.92279C.737235-1.92279 .418431-1.783313 .418431-1.344956C.418431-.438356 1.344956 .219178 2.430884 .219178C3.646326 .219178 4.552927-.687422 4.552927-1.703611C4.552927-2.520548 3.92528-3.297634 2.889166-3.506849Z'/>
<path id='g1-52' d='M2.929016-1.643836V-.777086C2.929016-.418431 2.909091-.308842 2.171856-.308842H1.96264V0C2.371108-.029888 2.889166-.029888 3.307597-.029888S4.254047-.029888 4.662516 0V-.308842H4.4533C3.716065-.308842 3.696139-.418431 3.696139-.777086V-1.643836H4.692403V-1.952677H3.696139V-6.485679C3.696139-6.684932 3.696139-6.744707 3.536737-6.744707C3.447073-6.744707 3.417186-6.744707 3.337484-6.625156L.278954-1.952677V-1.643836H2.929016ZM2.988792-1.952677H.557908L2.988792-5.668742V-1.952677Z'/>
<path id='g1-65' d='M3.965131-6.933998C3.915318-7.063512 3.895392-7.13325 3.73599-7.13325S3.5467-7.073474 3.496887-6.933998L1.43462-.976339C1.255293-.468244 .856787-.318804 .318804-.308842V0C.547945-.009963 .976339-.029888 1.334994-.029888C1.643836-.029888 2.161893-.009963 2.480697 0V-.308842C1.982565-.308842 1.733499-.557908 1.733499-.816936C1.733499-.846824 1.743462-.946451 1.753425-.966376L2.211706-2.271482H4.672478L5.200498-.747198C5.210461-.707347 5.230386-.647572 5.230386-.607721C5.230386-.308842 4.672478-.308842 4.403487-.308842V0C4.762142-.029888 5.459527-.029888 5.838107-.029888C6.266501-.029888 6.724782-.019925 7.143213 0V-.308842H6.963885C6.366127-.308842 6.22665-.37858 6.117061-.707347L3.965131-6.933998ZM3.437111-5.818182L4.562889-2.580324H2.321295L3.437111-5.818182Z'/>
<path id='g1-86' d='M6.1868-5.828144C6.326276-6.196762 6.595268-6.485679 7.272727-6.495641V-6.804483C6.963885-6.784558 6.56538-6.774595 6.306351-6.774595C6.007472-6.774595 5.429639-6.794521 5.17061-6.804483V-6.495641C5.688667-6.485679 5.897883-6.22665 5.897883-5.997509C5.897883-5.917808 5.867995-5.858032 5.84807-5.798257L4.024907-.996264L2.122042-6.027397C2.062267-6.166874 2.062267-6.1868 2.062267-6.206725C2.062267-6.495641 2.630137-6.495641 2.879203-6.495641V-6.804483C2.520548-6.774595 1.833126-6.774595 1.454545-6.774595C.976339-6.774595 .547945-6.794521 .18929-6.804483V-6.495641C.836862-6.495641 1.026152-6.495641 1.165629-6.117061L3.476961 0C3.5467 .18929 3.596513 .219178 3.726027 .219178C3.895392 .219178 3.915318 .169365 3.965131 .029888L6.1868-5.828144Z'/>
<path id='g0-85' d='M6.326276-5.758406C6.425903-6.166874 6.60523-6.465753 7.402242-6.495641C7.452055-6.495641 7.571606-6.505604 7.571606-6.694894C7.571606-6.704857 7.571606-6.804483 7.442092-6.804483C7.113325-6.804483 6.764633-6.774595 6.425903-6.774595S5.718555-6.804483 5.389788-6.804483C5.330012-6.804483 5.210461-6.804483 5.210461-6.60523C5.210461-6.495641 5.310087-6.495641 5.389788-6.495641C5.957659-6.485679 6.067248-6.276463 6.067248-6.057285C6.067248-6.027397 6.047323-5.877958 6.03736-5.84807L5.140722-2.291407C4.801993-.956413 3.656289-.089664 2.660025-.089664C1.982565-.089664 1.444583-.52802 1.444583-1.384807C1.444583-1.404732 1.444583-1.723537 1.554172-2.161893L2.520548-6.03736C2.610212-6.396015 2.630137-6.495641 3.35741-6.495641C3.616438-6.495641 3.696139-6.495641 3.696139-6.694894C3.696139-6.804483 3.58655-6.804483 3.556663-6.804483C3.277709-6.804483 2.560399-6.774595 2.281445-6.774595C1.992528-6.774595 1.285181-6.804483 .996264-6.804483C.916563-6.804483 .806974-6.804483 .806974-6.60523C.806974-6.495641 .896638-6.495641 1.085928-6.495641C1.105853-6.495641 1.295143-6.495641 1.464508-6.475716C1.643836-6.455791 1.733499-6.445828 1.733499-6.316314C1.733499-6.256538 1.62391-5.838107 1.564134-5.608966L1.344956-4.732254C1.255293-4.343711 .777086-2.460772 .737235-2.271482C.667497-1.992528 .667497-1.843088 .667497-1.693649C.667497-.478207 1.574097 .219178 2.620174 .219178C3.875467 .219178 5.110834-.9066 5.439601-2.221669L6.326276-5.758406Z'/>
</defs>
<g id='page1'>
<path d='M-43.812498 36.765624V.1992M-43.812498-11.707V-48.2734' stroke='#000' fill='none' stroke-width='.3985'/>
<path d='M-43.812498-7.7188V-11.707M-43.812498-3.7891V.1992' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-49.76562-7.7188H-37.85937M-55.7187-3.7891H-31.9062' stroke='#000' fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 -22.5935 -40.37544)'>
<use x='-43.813224' y='36.766666' xlink:href='#g0-85'/>
</g>
<path d='M-43.812498-48.2734H-17.168M14.582-48.2734H41.2266' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-17.5664-48.2734L-14.5234-54.2266L-9.2305-42.3203L-3.9375-54.2266L1.3516-42.3203L6.6445-54.2266L11.9336-42.3203L14.9805-48.2734' stroke='#000' fill='none' stroke-width='.797' stroke-miterlimit='10' stroke-linejoin='bevel'/>
<g transform='matrix(1 0 0 1 35.60162 -94.8057)'>
<use x='-43.813224' y='36.766666' xlink:href='#g1-51'/>
<use x='-37.171486' y='36.766666' xlink:href='#g1-10'/>
</g>
<path d='M41.2266-48.2734H67.8748M99.6208-48.2734H126.2698' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M67.4768-48.2734L70.5198-54.2266L75.8088-42.3203L81.1018-54.2266L86.3948-42.3203L91.6838-54.2266L96.9768-42.3203L100.0198-48.2734' stroke='#000' fill='none' stroke-width='.797' stroke-miterlimit='10' stroke-linejoin='bevel'/>
<g transform='matrix(1 0 0 1 120.6421 -94.8057)'>
<use x='-43.813224' y='36.766666' xlink:href='#g1-50'/>
<use x='-37.171486' y='36.766666' xlink:href='#g1-10'/>
</g>
<path d='M126.2698-48.2734V-11.707M126.2698 .1992V36.765624' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M126.2698-3.7891V.1992M126.2698-7.7188V-11.707' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M132.2188-3.7891H120.3168M138.1718-7.7188H114.3628' stroke='#000' fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 136.2806 -40.37544)'>
<use x='-43.813224' y='36.766666' xlink:href='#g1-50'/>
<use x='-38.831885' y='36.766666' xlink:href='#g1-48'/>
<use x='-32.190147' y='36.766666' xlink:href='#g1-86'/>
</g>
<path d='M41.2266-48.2734V-21.6289M41.2266 10.1211V36.765624' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M41.2266-22.0273L47.1797-18.9805L35.2734-13.6914L47.1797-8.3984L35.2734-3.1094L47.1797 2.1836L35.2734 7.4766L41.2266 10.5195' stroke='#000' fill='none' stroke-width='.797' stroke-miterlimit='10' stroke-linejoin='bevel'/>
<g transform='matrix(1 0 0 1 93.1971 -40.37544)'>
<use x='-43.813224' y='36.766666' xlink:href='#g1-52'/>
<use x='-37.171486' y='36.766666' xlink:href='#g1-10'/>
</g>
<path d='M41.2266 21.707H39.2422L41.2266 25.9258L43.2109 21.707Z'/>
<path d='M41.2266 21.707H39.2422L41.2266 25.9258L43.2109 21.707Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 88.5602 -9.919)'>
<use x='-43.813224' y='36.766666' xlink:href='#g1-51'/>
<use x='-37.171486' y='36.766666' xlink:href='#g1-65'/>
</g>
<path d='M-43.812498 36.765624H126.2698' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
</g>
</svg>
</figure>


<!--fig:end-->

<!--fig:start-->
**p.6** — altoparlante e particella di polvere
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p6_f5.png]]
<!--fig:end-->

<!--fig:start-->
**p.11** — profilo uovo f(x) r(x) baricentro c
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p11_f6.png]]
<!--fig:end-->

<!--fig:start-->
**p.11** — uovo su superficie orizzontale a=0 b=1
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p11_f7.png]]
<!--fig:end-->

<!--fig:start-->
**p.18** — uovo su superficie soluzione equilibrio


<figure class="tikz-fig">
<!-- This file was generated by dvisvgm 3.2.2 -->
<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='187.321376pt' height='96.968837pt' viewBox='-64.137726 -64.910247 187.321376 96.968837'>
<defs>
<pattern id='pat0-0' x='-.99628' y='-.99628' width='2.98883' height='2.98883' viewBox='-.99628 -.99628 2.98883 2.98883' patternUnits='userSpaceOnUse' patternTransform='matrix(1 0 0 -1 26.6063 22.1377)' overflow='visible'>
<clipPath id='pc0'>
<rect x='-.99628' y='-.99628' width='4.98138' height='4.98138'/>
</clipPath>
<g clip-path='url(#pc0)'>
<path d='M0 0L3.08984 3.08984' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
</g>
</pattern>
<path id='g0-98' d='M2.381071-6.804483C2.381071-6.814446 2.381071-6.914072 2.251557-6.914072C2.022416-6.914072 1.295143-6.834371 1.036115-6.814446C.956413-6.804483 .846824-6.794521 .846824-6.615193C.846824-6.495641 .936488-6.495641 1.085928-6.495641C1.564134-6.495641 1.58406-6.425903 1.58406-6.326276C1.58406-6.256538 1.494396-5.917808 1.444583-5.708593L.627646-2.460772C.508095-1.96264 .468244-1.803238 .468244-1.454545C.468244-.508095 .996264 .109589 1.733499 .109589C2.909091 .109589 4.134496-1.374844 4.134496-2.809465C4.134496-3.716065 3.606476-4.403487 2.809465-4.403487C2.351183-4.403487 1.942715-4.11457 1.643836-3.805729L2.381071-6.804483ZM1.444583-3.038605C1.504359-3.257783 1.504359-3.277709 1.594022-3.387298C2.082192-4.034869 2.530511-4.184309 2.789539-4.184309C3.148194-4.184309 3.417186-3.88543 3.417186-3.247821C3.417186-2.660025 3.088418-1.514321 2.909091-1.135741C2.580324-.468244 2.122042-.109589 1.733499-.109589C1.39477-.109589 1.066002-.37858 1.066002-1.115816C1.066002-1.305106 1.066002-1.494396 1.225405-2.122042L1.444583-3.038605Z'/>
<path id='g0-120' d='M3.327522-3.008717C3.387298-3.267746 3.616438-4.184309 4.313823-4.184309C4.363636-4.184309 4.60274-4.184309 4.811955-4.054795C4.533001-4.004981 4.333748-3.755915 4.333748-3.516812C4.333748-3.35741 4.443337-3.16812 4.712329-3.16812C4.931507-3.16812 5.250311-3.347447 5.250311-3.745953C5.250311-4.26401 4.662516-4.403487 4.323786-4.403487C3.745953-4.403487 3.39726-3.875467 3.277709-3.646326C3.028643-4.303861 2.49066-4.403487 2.201743-4.403487C1.165629-4.403487 .597758-3.118306 .597758-2.86924C.597758-2.769614 .697385-2.769614 .71731-2.769614C.797011-2.769614 .826899-2.789539 .846824-2.879203C1.185554-3.935243 1.843088-4.184309 2.181818-4.184309C2.371108-4.184309 2.719801-4.094645 2.719801-3.516812C2.719801-3.20797 2.550436-2.540473 2.181818-1.145704C2.022416-.52802 1.673724-.109589 1.235367-.109589C1.175592-.109589 .946451-.109589 .737235-.239103C.986301-.288917 1.205479-.498132 1.205479-.777086C1.205479-1.046077 .986301-1.125778 .836862-1.125778C.537983-1.125778 .288917-.86675 .288917-.547945C.288917-.089664 .787049 .109589 1.225405 .109589C1.882939 .109589 2.241594-.587796 2.271482-.647572C2.391034-.278954 2.749689 .109589 3.347447 .109589C4.373599 .109589 4.941469-1.175592 4.941469-1.424658C4.941469-1.524284 4.851806-1.524284 4.821918-1.524284C4.732254-1.524284 4.712329-1.484433 4.692403-1.414695C4.363636-.348692 3.686177-.109589 3.367372-.109589C2.978829-.109589 2.819427-.428394 2.819427-.767123C2.819427-.986301 2.879203-1.205479 2.988792-1.643836L3.327522-3.008717Z'/>
<path id='g1-48' d='M4.582814-3.188045C4.582814-3.985056 4.533001-4.782067 4.184309-5.519303C3.726027-6.475716 2.909091-6.635118 2.49066-6.635118C1.892902-6.635118 1.165629-6.37609 .757161-5.449564C.438356-4.762142 .388543-3.985056 .388543-3.188045C.388543-2.440847 .428394-1.544209 .836862-.787049C1.265255 .019925 1.992528 .219178 2.480697 .219178C3.01868 .219178 3.775841 .009963 4.214197-.936488C4.533001-1.62391 4.582814-2.400996 4.582814-3.188045ZM2.480697 0C2.092154 0 1.504359-.249066 1.325031-1.205479C1.215442-1.803238 1.215442-2.719801 1.215442-3.307597C1.215442-3.945205 1.215442-4.60274 1.295143-5.140722C1.484433-6.326276 2.231631-6.41594 2.480697-6.41594C2.809465-6.41594 3.466999-6.236613 3.656289-5.250311C3.755915-4.692403 3.755915-3.935243 3.755915-3.307597C3.755915-2.560399 3.755915-1.882939 3.646326-1.24533C3.496887-.298879 2.929016 0 2.480697 0Z'/>
<path id='g1-61' d='M6.844334-3.257783C6.993773-3.257783 7.183064-3.257783 7.183064-3.457036S6.993773-3.656289 6.854296-3.656289H.886675C.747198-3.656289 .557908-3.656289 .557908-3.457036S.747198-3.257783 .896638-3.257783H6.844334ZM6.854296-1.325031C6.993773-1.325031 7.183064-1.325031 7.183064-1.524284S6.993773-1.723537 6.844334-1.723537H.896638C.747198-1.723537 .557908-1.723537 .557908-1.524284S.747198-1.325031 .886675-1.325031H6.854296Z'/>
</defs>
<g id='page1'>
<path d='M-58.4336 32.05859V22.13672H122.9844V32.05859Z' fill='url(#pat0-0)'/>
<path d='M-58.4336 22.13672H122.9844' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M5.3477 9.3828C-9.6992-.5156-18.4961-6.3398-20.1641-20.3828C-21.8359-34.4219-15.4453-41.7891-1.7422-50.1484C11.9648-58.5039 20.89453-59.4922 37.9453-55.8164C54.9961-52.1367 60.8477-45.9219 70.543-34.5547S80.3867-18.9922 79.0469-7.625C77.7109 3.7383 73.2305 6.7461 64.875 13.63281C56.5156 20.51953 57.6562 22.57422 43.6133 21.570313C29.57422 20.56641 20.39062 19.27734 5.3477 9.3828Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-47.0938-61.4844L104.7422 17.19531' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M108.081978 18.925732C107.722602 18.61323 106.214793 17.109324 105.4101 15.910109L104.078076 18.480416C105.523383 18.445261 107.621037 18.812445 108.081978 18.925732Z'/>
<path d='M108.081978 18.925732C107.722602 18.61323 106.214793 17.109324 105.4101 15.910109L104.078076 18.480416C105.523383 18.445261 107.621037 18.812445 108.081978 18.925732Z' stroke='#000' fill='none' stroke-width='.398481' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 -91.3019 -80.4128)'>
<use x='26.606266' y='22.137672' xlink:href='#g1-61'/>
<use x='37.122346' y='22.137672' xlink:href='#g1-48'/>
</g>
<g transform='matrix(1 0 0 1 75.8047 -9.1891)'>
<use x='26.606266' y='22.137672' xlink:href='#g0-98'/>
<use x='33.649233' y='22.137672' xlink:href='#g1-61'/>
</g>
<path d='M64.875-3.375L43.6133 21.570313' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10' stroke-dasharray='2.98883 2.98883'/>
<g transform='matrix(1 0 0 1 38.2558 -30.44919)'>
<use x='26.606266' y='22.137672' xlink:href='#g0-120'/>
</g>
</g>
</svg>
</figure>


<!--fig:end-->


<div class="qlang-split" data-lang="en"></div>

and higher-order terms.

We can begin by rewriting the right-hand side of the previous answer in a form suitable for applying the given Taylor expansion:

$$\left(\frac{P_0 + h_A}{P_0 + h_C}\right)^{\gamma} = \left(1 + \frac{h_A}{P_0}\right)^{\gamma}\left(1 + \frac{h_C}{P_0}\right)^{-\gamma}$$

Applying the Taylor expansion then yields (retaining only terms linear in $\frac{h_A}{P_0}$ and $\frac{h_C}{P_0}$)

$$\left(\frac{P_0 + h_A}{P_0 + h_C}\right)^{\gamma} \approx \left(1 + \gamma\frac{h_A}{P_0}\right)\left(1 - \gamma\frac{h_C}{P_0}\right) \approx 1 + \gamma\frac{h_A - h_C}{P_0}.$$

We thus obtain

$$\frac{P_0 + h_A}{P_0} = 1 + \gamma\frac{h_A - h_C}{P_0}.$$

iv. Using the previous results, express the adiabatic index $\gamma$ as a function of $h_A$ and $h_C$.

Isolating $\gamma$, we find

$$\gamma = \frac{h_A}{h_A - h_C}.$$

v. Compute numerically the adiabatic index $\gamma$ based on the provided measurements.

Using the given numerical values for $P_0$, $P_0 + h_A$ and $h_C$, one finds

$$\gamma = \frac{780.31 - 766.50}{780.31 - 766.50 - 3.61} \approx 1.35.$$

vi. From the equipartition theorem, it is possible to deduce that $C_V = \frac{f}{2}R$ and $C_P = \frac{f+2}{2}R$, where $f$ is the number of allowed degrees of freedom for gas molecules. The gas studied here has $f = 5$ degrees of freedom. What is the relative difference between the theoretical and experimental values of the adiabatic index $\gamma$?

Using the definition of $\gamma$, we find $\gamma = \frac{f+2}{f} = \frac{7}{5} = 1.4$. This yields a relative difference $\dfrac{\gamma_{th} - \gamma_{exp}}{\gamma_{th}} = 3.6\%$.

vii. What could be the reasons for this discrepancy?

If at least two of the following reasons are mentioned, or any other meaningful potential reason is mentioned, then full points are awarded.

The discrepancy could come from: the statistical uncertainty in the measurements, a systematic uncertainty due to a wrong assumption (the process $A \to B$ might not be fully adiabatic, the change of volume due to the pressure changes in the manometer might not be negligible, the initial compression might not be fully isothermal, ...), etc.

SOLUTION

Problem 2.3: Image Charge

A very common problem in electrostatics is determining the electric potential of a system composed of point charges and conductors of various shapes. In this exercise we will develop a method, called the image charge method, to greatly simplify such problems in cases with appropriate symmetry. In this exercise we use SI units.

Part A. Electric potential and conductors

In this first part we will discuss Faraday cages.

i. Write the electric potential $V$ due to a point charge $q$ as a function of the distance $r$ from the charge.

The potential is given by $V(r) = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q}{r}$.

ii. Write the electric potential $V$ due to $N$ point charges $q_i$, $i \in 1, 2, \dots, N$, as a function of the distances $r_i$ from each charge $q_i$.

The total potential is given by the sum of the individual potentials: $V = \dfrac{1}{4\pi\varepsilon_0}\displaystyle\sum_{i=1}^{N} \dfrac{q_i}{r_i}$.

iii. Consider the situation shown in Fig. B.1. What can be said about the electric potential on the surface of the grounded conducting material?

Since we have a grounded conductor, the potential on its surface must vanish, so $V = 0$ holds on the conductor.

iv. During a thunderstorm, is it safer to stay inside a car or remain outdoors? Why? Argue using the answer to the previous question.

It is safer to stay in one's car, because the metallic hull of the car is a grounding conducting surface for which $V = 0$ holds such that its interior is protected against lightning.

Part B. Image charge with a planar conductor

We again consider the situation illustrated in Fig. B.1. The goal of this part is to determine the electrostatic potential at any point above the plane. To achieve this, it is possible to use a trick that greatly simplifies the situation. The idea is to introduce an imaginary "mirror" charge in order to reproduce the boundary conditions imposed by the conducting material.

In electrostatics, if two physical systems have potentials satisfying the same boundary conditions, then the two situations are physically equivalent.

Therefore, to determine the electrostatic potential of this system, we wish to find another simpler system that describes its potential.

Figure B.1: An infinitely long grounded planar conductor with a charge $Q_1$ located at position $\vec{r}_1 = (x_1, y_1, z_1) = (0, 0, d)$.

SOLUTION

i. What are the boundary conditions for the electrostatic potential $V$ of this system?

As seen in the previous part, the potential must satisfy $V = 0$ on the grounded conducting surface.

ii. Imagine a second physical system with the same charge $Q_1$ at the same position $\vec{r}_1$ as in Fig. B.1, but without the conducting plane. Our goal is to find a configuration with a second charge $Q_2$ at position $\vec{r}_2$ such that it satisfies the same boundary conditions as in Fig. B.1. What should be the values of $Q_2$ and $\vec{r}_2 = (x_2, y_2, z_2)$ for this to happen? Why?

By symmetry, we expect the mirror charge to be located at position $\vec{r}_2 = (0, 0, -d)$.

If the mirror charge is placed at $(x_2, y_2, z_2) = (0, 0, -d)$, we can verify that choosing $Q_2 = -Q_1$ indeed satisfies the boundary conditions.

Indeed, this must be true by symmetry. One could also verify it explicitly using the result from A.ii.

iii. Using the previous results, calculate the electric potential $V(x, y, z)$ above ground in the system of Fig. B.1 as a function of coordinates $(x, y, z)$, distance $d$, and charge $Q_1$. The expression may be left as a sum of two terms; it is not necessary to fully simplify it.

The resulting potential in the charge-conductor plane system must be identical to that of the charge-mirror charge system, so we obtain for $\vec{r} = (x, y, z)$

$$V(\vec{r}) = \frac{1}{4\pi\varepsilon_0}\left[\frac{Q_1}{\sqrt{x^2 + y^2 + (z - d)^2}} - \frac{Q_1}{\sqrt{x^2 + y^2 + (z + d)^2}}\right].$$

The solution could be expressed in a different form, as long as the potential is explicitly written as a function of the required quantities.

iv. Sketch schematically the conductor system in Fig. B.1 with corresponding field lines, assuming $Q_1 > 0$ (on a separate sketch, not on the problem sheet).

The drawing should qualitatively resemble the upper half of the following image. The lower half should contain no field lines.

https://commons.wikimedia.org/wiki/File:VFPt_imagecharge_plane_horizontal_plusminus.svg

SOLUTION

The field lines should originate from the positive charge and terminate on the conductor.

The field lines should end at the surface of the conductor.

The field lines at the surface of the conductor should be perpendicular to its surface.

Part C. Charge near a right-angled corner

We will now consider more complex conductor geometries.

i. Consider the system shown in Fig. C.1. How many mirror charges $N$ are required to reproduce the boundary conditions on the conductor? What are their values $Q_i$ and positions $\vec{r}_i = (x_i, y_i, z_i)$ for $i = 1, 2, \dots, N$? Why?

Figure C.1: Two infinitely long grounded conducting half-planes arranged at a right angle, with a charge $Q_1$ located at position $\vec{r}_1 = (x_1, y_1, z_1) = (d, 0, d)$.

We require the potential to vanish on the conductor plates.

By symmetry considerations, we can convince ourselves that the mirror charges should be located at positions $\vec{r}_2 = (-d, 0, d)$, $\vec{r}_3 = (-d, 0, -d)$ and $\vec{r}_4 = (d, 0, -d)$.

Similarly, we can expect to have $Q_2 = Q_4$.

After some trial and error, one can notice that the choice $Q_2 = Q_4 = -Q_1$ and $Q_3 = Q_1$ results in a vanishing potential on the conducting plates.

Indeed, by denoting $r_i$ as the distance from position $\vec{r}$ to the charge $i$, we have

$$V(\vec{r}) = \frac{1}{4\pi\varepsilon_0}\left(\frac{Q_1}{r_1} - \frac{Q_1}{r_2} + \frac{Q_1}{r_3} - \frac{Q_1}{r_4}\right).$$

On the vertical plate, we have $r_1 = r_2$ and $r_3 = r_4$ such that indeed $V = 0$. On the horizontal plate we have $r_1 = r_4$ and $r_2 = r_3$ so that the potential also vanishes.

A more explicit computation making less explicit use of symmetries, or a more implicit reasoning using symmetries, is acceptable as long as the reasoning is correct.

<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p12_f8.png]]
*Clément-Desormes apparatus diagram: pump, valve, manometer*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p20_f11.png]]
*Clément-Desormes experiment solution diagram*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p22_f12.png]]
*P-V diagram of experiment: points A, B, C*
<!--fig:end-->

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

<!--fig:start-->
**p.4** — elliptical orbit of planet-star system
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p4_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.4** — four trajectories I–IV for mass-string-pulley system
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p4_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.6** — configurations A–F of point charges and corresponding electric field E
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p6_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.6** — circuit with batteries, resistors, and current flow


<figure class="tikz-fig">
<!-- This file was generated by dvisvgm 3.2.2 -->
<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='204.309527pt' height='102.02757pt' viewBox='-65.739227 -65.062695 204.309527 102.02757'>
<defs>
<path id='g1-10' d='M6.744707-1.613948H6.495641C6.445828-1.354919 6.405978-1.125778 6.316314-.886675C6.266501-.727273 6.236613-.647572 5.65878-.647572H4.861768C4.991283-1.205479 5.300125-1.683686 5.748443-2.34122C6.216687-3.048568 6.625156-3.73599 6.625156-4.523039C6.625156-5.907846 5.280199-7.023661 3.596513-7.023661C1.882939-7.023661 .557908-5.88792 .557908-4.523039C.557908-3.73599 .966376-3.048568 1.43462-2.34122C1.872976-1.683686 2.191781-1.205479 2.321295-.647572H1.524284C.946451-.647572 .916563-.727273 .86675-.876712C.787049-1.105853 .737235-1.364882 .687422-1.613948H.438356L.767123 0H2.361146C2.580324 0 2.610212 0 2.610212-.209215C2.610212-.9066 2.30137-1.783313 2.072229-2.420922C1.863014-2.998755 1.58406-3.785803 1.58406-4.533001C1.58406-6.127024 2.67995-6.804483 3.58655-6.804483C4.542964-6.804483 5.599004-6.087173 5.599004-4.533001C5.599004-3.785803 5.330012-3.028643 5.041096-2.211706C4.891656-1.793275 4.572852-.896638 4.572852-.209215C4.572852 0 4.60274 0 4.83188 0H6.41594L6.744707-1.613948Z'/>
<path id='g1-48' d='M4.582814-3.188045C4.582814-3.985056 4.533001-4.782067 4.184309-5.519303C3.726027-6.475716 2.909091-6.635118 2.49066-6.635118C1.892902-6.635118 1.165629-6.37609 .757161-5.449564C.438356-4.762142 .388543-3.985056 .388543-3.188045C.388543-2.440847 .428394-1.544209 .836862-.787049C1.265255 .019925 1.992528 .219178 2.480697 .219178C3.01868 .219178 3.775841 .009963 4.214197-.936488C4.533001-1.62391 4.582814-2.400996 4.582814-3.188045ZM2.480697 0C2.092154 0 1.504359-.249066 1.325031-1.205479C1.215442-1.803238 1.215442-2.719801 1.215442-3.307597C1.215442-3.945205 1.215442-4.60274 1.295143-5.140722C1.484433-6.326276 2.231631-6.41594 2.480697-6.41594C2.809465-6.41594 3.466999-6.236613 3.656289-5.250311C3.755915-4.692403 3.755915-3.935243 3.755915-3.307597C3.755915-2.560399 3.755915-1.882939 3.646326-1.24533C3.496887-.298879 2.929016 0 2.480697 0Z'/>
<path id='g1-50' d='M1.265255-.767123L2.321295-1.793275C3.875467-3.16812 4.473225-3.706102 4.473225-4.702366C4.473225-5.838107 3.576588-6.635118 2.361146-6.635118C1.235367-6.635118 .498132-5.718555 .498132-4.83188C.498132-4.273973 .996264-4.273973 1.026152-4.273973C1.195517-4.273973 1.544209-4.393524 1.544209-4.801993C1.544209-5.061021 1.364882-5.32005 1.016189-5.32005C.936488-5.32005 .916563-5.32005 .886675-5.310087C1.115816-5.957659 1.653798-6.326276 2.231631-6.326276C3.138232-6.326276 3.566625-5.519303 3.566625-4.702366C3.566625-3.905355 3.068493-3.118306 2.520548-2.500623L.607721-.368618C.498132-.259029 .498132-.239103 .498132 0H4.194271L4.473225-1.733499H4.224159C4.174346-1.43462 4.104608-.996264 4.004981-.846824C3.935243-.767123 3.277709-.767123 3.058531-.767123H1.265255Z'/>
<path id='g1-51' d='M2.889166-3.506849C3.706102-3.775841 4.283935-4.473225 4.283935-5.260274C4.283935-6.07721 3.407223-6.635118 2.450809-6.635118C1.444583-6.635118 .687422-6.03736 .687422-5.280199C.687422-4.951432 .9066-4.762142 1.195517-4.762142C1.504359-4.762142 1.703611-4.98132 1.703611-5.270237C1.703611-5.768369 1.235367-5.768369 1.085928-5.768369C1.39477-6.256538 2.052304-6.386052 2.410959-6.386052C2.819427-6.386052 3.367372-6.166874 3.367372-5.270237C3.367372-5.150685 3.347447-4.572852 3.088418-4.134496C2.789539-3.656289 2.450809-3.626401 2.201743-3.616438C2.122042-3.606476 1.882939-3.58655 1.8132-3.58655C1.733499-3.576588 1.663761-3.566625 1.663761-3.466999C1.663761-3.35741 1.733499-3.35741 1.902864-3.35741H2.34122C3.158157-3.35741 3.526775-2.67995 3.526775-1.703611C3.526775-.348692 2.839352-.059776 2.400996-.059776C1.972603-.059776 1.225405-.229141 .876712-.816936C1.225405-.767123 1.534247-.986301 1.534247-1.364882C1.534247-1.723537 1.265255-1.92279 .976339-1.92279C.737235-1.92279 .418431-1.783313 .418431-1.344956C.418431-.438356 1.344956 .219178 2.430884 .219178C3.646326 .219178 4.552927-.687422 4.552927-1.703611C4.552927-2.520548 3.92528-3.297634 2.889166-3.506849Z'/>
<path id='g1-52' d='M2.929016-1.643836V-.777086C2.929016-.418431 2.909091-.308842 2.171856-.308842H1.96264V0C2.371108-.029888 2.889166-.029888 3.307597-.029888S4.254047-.029888 4.662516 0V-.308842H4.4533C3.716065-.308842 3.696139-.418431 3.696139-.777086V-1.643836H4.692403V-1.952677H3.696139V-6.485679C3.696139-6.684932 3.696139-6.744707 3.536737-6.744707C3.447073-6.744707 3.417186-6.744707 3.337484-6.625156L.278954-1.952677V-1.643836H2.929016ZM2.988792-1.952677H.557908L2.988792-5.668742V-1.952677Z'/>
<path id='g1-65' d='M3.965131-6.933998C3.915318-7.063512 3.895392-7.13325 3.73599-7.13325S3.5467-7.073474 3.496887-6.933998L1.43462-.976339C1.255293-.468244 .856787-.318804 .318804-.308842V0C.547945-.009963 .976339-.029888 1.334994-.029888C1.643836-.029888 2.161893-.009963 2.480697 0V-.308842C1.982565-.308842 1.733499-.557908 1.733499-.816936C1.733499-.846824 1.743462-.946451 1.753425-.966376L2.211706-2.271482H4.672478L5.200498-.747198C5.210461-.707347 5.230386-.647572 5.230386-.607721C5.230386-.308842 4.672478-.308842 4.403487-.308842V0C4.762142-.029888 5.459527-.029888 5.838107-.029888C6.266501-.029888 6.724782-.019925 7.143213 0V-.308842H6.963885C6.366127-.308842 6.22665-.37858 6.117061-.707347L3.965131-6.933998ZM3.437111-5.818182L4.562889-2.580324H2.321295L3.437111-5.818182Z'/>
<path id='g1-86' d='M6.1868-5.828144C6.326276-6.196762 6.595268-6.485679 7.272727-6.495641V-6.804483C6.963885-6.784558 6.56538-6.774595 6.306351-6.774595C6.007472-6.774595 5.429639-6.794521 5.17061-6.804483V-6.495641C5.688667-6.485679 5.897883-6.22665 5.897883-5.997509C5.897883-5.917808 5.867995-5.858032 5.84807-5.798257L4.024907-.996264L2.122042-6.027397C2.062267-6.166874 2.062267-6.1868 2.062267-6.206725C2.062267-6.495641 2.630137-6.495641 2.879203-6.495641V-6.804483C2.520548-6.774595 1.833126-6.774595 1.454545-6.774595C.976339-6.774595 .547945-6.794521 .18929-6.804483V-6.495641C.836862-6.495641 1.026152-6.495641 1.165629-6.117061L3.476961 0C3.5467 .18929 3.596513 .219178 3.726027 .219178C3.895392 .219178 3.915318 .169365 3.965131 .029888L6.1868-5.828144Z'/>
<path id='g0-85' d='M6.326276-5.758406C6.425903-6.166874 6.60523-6.465753 7.402242-6.495641C7.452055-6.495641 7.571606-6.505604 7.571606-6.694894C7.571606-6.704857 7.571606-6.804483 7.442092-6.804483C7.113325-6.804483 6.764633-6.774595 6.425903-6.774595S5.718555-6.804483 5.389788-6.804483C5.330012-6.804483 5.210461-6.804483 5.210461-6.60523C5.210461-6.495641 5.310087-6.495641 5.389788-6.495641C5.957659-6.485679 6.067248-6.276463 6.067248-6.057285C6.067248-6.027397 6.047323-5.877958 6.03736-5.84807L5.140722-2.291407C4.801993-.956413 3.656289-.089664 2.660025-.089664C1.982565-.089664 1.444583-.52802 1.444583-1.384807C1.444583-1.404732 1.444583-1.723537 1.554172-2.161893L2.520548-6.03736C2.610212-6.396015 2.630137-6.495641 3.35741-6.495641C3.616438-6.495641 3.696139-6.495641 3.696139-6.694894C3.696139-6.804483 3.58655-6.804483 3.556663-6.804483C3.277709-6.804483 2.560399-6.774595 2.281445-6.774595C1.992528-6.774595 1.285181-6.804483 .996264-6.804483C.916563-6.804483 .806974-6.804483 .806974-6.60523C.806974-6.495641 .896638-6.495641 1.085928-6.495641C1.105853-6.495641 1.295143-6.495641 1.464508-6.475716C1.643836-6.455791 1.733499-6.445828 1.733499-6.316314C1.733499-6.256538 1.62391-5.838107 1.564134-5.608966L1.344956-4.732254C1.255293-4.343711 .777086-2.460772 .737235-2.271482C.667497-1.992528 .667497-1.843088 .667497-1.693649C.667497-.478207 1.574097 .219178 2.620174 .219178C3.875467 .219178 5.110834-.9066 5.439601-2.221669L6.326276-5.758406Z'/>
</defs>
<g id='page1'>
<path d='M-43.812498 36.765624V.1992M-43.812498-11.707V-48.2734' stroke='#000' fill='none' stroke-width='.3985'/>
<path d='M-43.812498-7.7188V-11.707M-43.812498-3.7891V.1992' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-49.76562-7.7188H-37.85937M-55.7187-3.7891H-31.9062' stroke='#000' fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 -22.5935 -40.37544)'>
<use x='-43.813224' y='36.766666' xlink:href='#g0-85'/>
</g>
<path d='M-43.812498-48.2734H-17.168M14.582-48.2734H41.2266' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-17.5664-48.2734L-14.5234-54.2266L-9.2305-42.3203L-3.9375-54.2266L1.3516-42.3203L6.6445-54.2266L11.9336-42.3203L14.9805-48.2734' stroke='#000' fill='none' stroke-width='.797' stroke-miterlimit='10' stroke-linejoin='bevel'/>
<g transform='matrix(1 0 0 1 35.60162 -94.8057)'>
<use x='-43.813224' y='36.766666' xlink:href='#g1-51'/>
<use x='-37.171486' y='36.766666' xlink:href='#g1-10'/>
</g>
<path d='M41.2266-48.2734H67.8748M99.6208-48.2734H126.2698' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M67.4768-48.2734L70.5198-54.2266L75.8088-42.3203L81.1018-54.2266L86.3948-42.3203L91.6838-54.2266L96.9768-42.3203L100.0198-48.2734' stroke='#000' fill='none' stroke-width='.797' stroke-miterlimit='10' stroke-linejoin='bevel'/>
<g transform='matrix(1 0 0 1 120.6421 -94.8057)'>
<use x='-43.813224' y='36.766666' xlink:href='#g1-50'/>
<use x='-37.171486' y='36.766666' xlink:href='#g1-10'/>
</g>
<path d='M126.2698-48.2734V-11.707M126.2698 .1992V36.765624' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M126.2698-3.7891V.1992M126.2698-7.7188V-11.707' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M132.2188-3.7891H120.3168M138.1718-7.7188H114.3628' stroke='#000' fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 136.2806 -40.37544)'>
<use x='-43.813224' y='36.766666' xlink:href='#g1-50'/>
<use x='-38.831885' y='36.766666' xlink:href='#g1-48'/>
<use x='-32.190147' y='36.766666' xlink:href='#g1-86'/>
</g>
<path d='M41.2266-48.2734V-21.6289M41.2266 10.1211V36.765624' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M41.2266-22.0273L47.1797-18.9805L35.2734-13.6914L47.1797-8.3984L35.2734-3.1094L47.1797 2.1836L35.2734 7.4766L41.2266 10.5195' stroke='#000' fill='none' stroke-width='.797' stroke-miterlimit='10' stroke-linejoin='bevel'/>
<g transform='matrix(1 0 0 1 93.1971 -40.37544)'>
<use x='-43.813224' y='36.766666' xlink:href='#g1-52'/>
<use x='-37.171486' y='36.766666' xlink:href='#g1-10'/>
</g>
<path d='M41.2266 21.707H39.2422L41.2266 25.9258L43.2109 21.707Z'/>
<path d='M41.2266 21.707H39.2422L41.2266 25.9258L43.2109 21.707Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 88.5602 -9.919)'>
<use x='-43.813224' y='36.766666' xlink:href='#g1-51'/>
<use x='-37.171486' y='36.766666' xlink:href='#g1-65'/>
</g>
<path d='M-43.812498 36.765624H126.2698' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
</g>
</svg>
</figure>


<!--fig:end-->

<!--fig:start-->
**p.6** — loudspeaker and dust particle
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p6_f5.png]]
<!--fig:end-->

<!--fig:start-->
**p.11** — egg-shaped profile: f(x), r(x), center of mass c
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p11_f6.png]]
<!--fig:end-->

<!--fig:start-->
**p.11** — egg on horizontal surface: case a=0, b=1
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p11_f7.png]]
<!--fig:end-->

<!--fig:start-->
**p.18** — egg on surface: solution for equilibrium condition


<figure class="tikz-fig">
<!-- This file was generated by dvisvgm 3.2.2 -->
<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='187.321376pt' height='96.968837pt' viewBox='-64.137726 -64.910247 187.321376 96.968837'>
<defs>
<pattern id='pat0-0' x='-.99628' y='-.99628' width='2.98883' height='2.98883' viewBox='-.99628 -.99628 2.98883 2.98883' patternUnits='userSpaceOnUse' patternTransform='matrix(1 0 0 -1 26.6063 22.1377)' overflow='visible'>
<clipPath id='pc0'>
<rect x='-.99628' y='-.99628' width='4.98138' height='4.98138'/>
</clipPath>
<g clip-path='url(#pc0)'>
<path d='M0 0L3.08984 3.08984' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
</g>
</pattern>
<path id='g0-98' d='M2.381071-6.804483C2.381071-6.814446 2.381071-6.914072 2.251557-6.914072C2.022416-6.914072 1.295143-6.834371 1.036115-6.814446C.956413-6.804483 .846824-6.794521 .846824-6.615193C.846824-6.495641 .936488-6.495641 1.085928-6.495641C1.564134-6.495641 1.58406-6.425903 1.58406-6.326276C1.58406-6.256538 1.494396-5.917808 1.444583-5.708593L.627646-2.460772C.508095-1.96264 .468244-1.803238 .468244-1.454545C.468244-.508095 .996264 .109589 1.733499 .109589C2.909091 .109589 4.134496-1.374844 4.134496-2.809465C4.134496-3.716065 3.606476-4.403487 2.809465-4.403487C2.351183-4.403487 1.942715-4.11457 1.643836-3.805729L2.381071-6.804483ZM1.444583-3.038605C1.504359-3.257783 1.504359-3.277709 1.594022-3.387298C2.082192-4.034869 2.530511-4.184309 2.789539-4.184309C3.148194-4.184309 3.417186-3.88543 3.417186-3.247821C3.417186-2.660025 3.088418-1.514321 2.909091-1.135741C2.580324-.468244 2.122042-.109589 1.733499-.109589C1.39477-.109589 1.066002-.37858 1.066002-1.115816C1.066002-1.305106 1.066002-1.494396 1.225405-2.122042L1.444583-3.038605Z'/>
<path id='g0-120' d='M3.327522-3.008717C3.387298-3.267746 3.616438-4.184309 4.313823-4.184309C4.363636-4.184309 4.60274-4.184309 4.811955-4.054795C4.533001-4.004981 4.333748-3.755915 4.333748-3.516812C4.333748-3.35741 4.443337-3.16812 4.712329-3.16812C4.931507-3.16812 5.250311-3.347447 5.250311-3.745953C5.250311-4.26401 4.662516-4.403487 4.323786-4.403487C3.745953-4.403487 3.39726-3.875467 3.277709-3.646326C3.028643-4.303861 2.49066-4.403487 2.201743-4.403487C1.165629-4.403487 .597758-3.118306 .597758-2.86924C.597758-2.769614 .697385-2.769614 .71731-2.769614C.797011-2.769614 .826899-2.789539 .846824-2.879203C1.185554-3.935243 1.843088-4.184309 2.181818-4.184309C2.371108-4.184309 2.719801-4.094645 2.719801-3.516812C2.719801-3.20797 2.550436-2.540473 2.181818-1.145704C2.022416-.52802 1.673724-.109589 1.235367-.109589C1.175592-.109589 .946451-.109589 .737235-.239103C.986301-.288917 1.205479-.498132 1.205479-.777086C1.205479-1.046077 .986301-1.125778 .836862-1.125778C.537983-1.125778 .288917-.86675 .288917-.547945C.288917-.089664 .787049 .109589 1.225405 .109589C1.882939 .109589 2.241594-.587796 2.271482-.647572C2.391034-.278954 2.749689 .109589 3.347447 .109589C4.373599 .109589 4.941469-1.175592 4.941469-1.424658C4.941469-1.524284 4.851806-1.524284 4.821918-1.524284C4.732254-1.524284 4.712329-1.484433 4.692403-1.414695C4.363636-.348692 3.686177-.109589 3.367372-.109589C2.978829-.109589 2.819427-.428394 2.819427-.767123C2.819427-.986301 2.879203-1.205479 2.988792-1.643836L3.327522-3.008717Z'/>
<path id='g1-48' d='M4.582814-3.188045C4.582814-3.985056 4.533001-4.782067 4.184309-5.519303C3.726027-6.475716 2.909091-6.635118 2.49066-6.635118C1.892902-6.635118 1.165629-6.37609 .757161-5.449564C.438356-4.762142 .388543-3.985056 .388543-3.188045C.388543-2.440847 .428394-1.544209 .836862-.787049C1.265255 .019925 1.992528 .219178 2.480697 .219178C3.01868 .219178 3.775841 .009963 4.214197-.936488C4.533001-1.62391 4.582814-2.400996 4.582814-3.188045ZM2.480697 0C2.092154 0 1.504359-.249066 1.325031-1.205479C1.215442-1.803238 1.215442-2.719801 1.215442-3.307597C1.215442-3.945205 1.215442-4.60274 1.295143-5.140722C1.484433-6.326276 2.231631-6.41594 2.480697-6.41594C2.809465-6.41594 3.466999-6.236613 3.656289-5.250311C3.755915-4.692403 3.755915-3.935243 3.755915-3.307597C3.755915-2.560399 3.755915-1.882939 3.646326-1.24533C3.496887-.298879 2.929016 0 2.480697 0Z'/>
<path id='g1-61' d='M6.844334-3.257783C6.993773-3.257783 7.183064-3.257783 7.183064-3.457036S6.993773-3.656289 6.854296-3.656289H.886675C.747198-3.656289 .557908-3.656289 .557908-3.457036S.747198-3.257783 .896638-3.257783H6.844334ZM6.854296-1.325031C6.993773-1.325031 7.183064-1.325031 7.183064-1.524284S6.993773-1.723537 6.844334-1.723537H.896638C.747198-1.723537 .557908-1.723537 .557908-1.524284S.747198-1.325031 .886675-1.325031H6.854296Z'/>
</defs>
<g id='page1'>
<path d='M-58.4336 32.05859V22.13672H122.9844V32.05859Z' fill='url(#pat0-0)'/>
<path d='M-58.4336 22.13672H122.9844' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M5.3477 9.3828C-9.6992-.5156-18.4961-6.3398-20.1641-20.3828C-21.8359-34.4219-15.4453-41.7891-1.7422-50.1484C11.9648-58.5039 20.89453-59.4922 37.9453-55.8164C54.9961-52.1367 60.8477-45.9219 70.543-34.5547S80.3867-18.9922 79.0469-7.625C77.7109 3.7383 73.2305 6.7461 64.875 13.63281C56.5156 20.51953 57.6562 22.57422 43.6133 21.570313C29.57422 20.56641 20.39062 19.27734 5.3477 9.3828Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-47.0938-61.4844L104.7422 17.19531' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M108.081978 18.925732C107.722602 18.61323 106.214793 17.109324 105.4101 15.910109L104.078076 18.480416C105.523383 18.445261 107.621037 18.812445 108.081978 18.925732Z'/>
<path d='M108.081978 18.925732C107.722602 18.61323 106.214793 17.109324 105.4101 15.910109L104.078076 18.480416C105.523383 18.445261 107.621037 18.812445 108.081978 18.925732Z' stroke='#000' fill='none' stroke-width='.398481' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 -91.3019 -80.4128)'>
<use x='26.606266' y='22.137672' xlink:href='#g1-61'/>
<use x='37.122346' y='22.137672' xlink:href='#g1-48'/>
</g>
<g transform='matrix(1 0 0 1 75.8047 -9.1891)'>
<use x='26.606266' y='22.137672' xlink:href='#g0-98'/>
<use x='33.649233' y='22.137672' xlink:href='#g1-61'/>
</g>
<path d='M64.875-3.375L43.6133 21.570313' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10' stroke-dasharray='2.98883 2.98883'/>
<g transform='matrix(1 0 0 1 38.2558 -30.44919)'>
<use x='26.606266' y='22.137672' xlink:href='#g0-120'/>
</g>
</g>
</svg>
</figure>


<!--fig:end-->
