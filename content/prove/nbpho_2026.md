---
title: NBPhO 2026
tipo: prova
tags:
  - kg/prova
  - anno/2026
  - paese/Nordic-Baltic
  - comp/Nordic
  - tipo-gara/individuale
---
<div class="atom-reader" data-prova="nbpho_2026"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="NBPhO 2026 — Problema 1" data-tags="kg/prova,paese/Nordic-Baltic,comp/Nordic,tipo-gara/individuale,livello/internazionale,difficolta/4,multidisciplina/mono,topic/geometric-optics,argomento/ottica,object/lens"></span>

<div class="qlang-switch" data-default="en"></div>



**Moving lens (6 points) — Eppu Leinonen**

The centre of a thin converging lens moves along a circle while the orientation of the lens remains fixed; the optical axis of the lens lies in the plane of the circle (the plane of the figure). Two fixed points $P$ and $Q$, also in this plane, are imaged by the lens; the images are always real. As the lens moves, each image traces a closed curve in the plane of the figure: $P \to P'$, $Q \to Q'$. The two points and both curves are shown in the figure.

![[NBPhO_2026_Q1_fig1.png]]

**i)** *(2 points)* Construct the circle along which the lens centre moves.

**ii)** *(4 points)* Determine the direction of the lens plane, i. e. construct a line parallel to the lens.

In the construction tasks, draw the construction on the provided sheet with the figure, detail the steps of your construction, and explain why your construction works.

**Risposta:** geometric construction — see the official solution

**Soluzione:**

**i)** *(2 points)* Let $\Gamma$ denote the circle traced by the lens centre. A light ray from $P$ that passes through the lens centre $O$ is undeflected, so it continues straight through to the image of $P$ at that instant. As $O$ moves around $\Gamma$, the undeflected ray through $P$ and $O$ sweeps a family of lines through $P$, and its intersection with the image curve $P'$ gives the current image. The *extreme angular positions* of this sweep correspond to $O$ being at the tangent points of $\Gamma$ as seen from $P$ --- that is, the lines from $P$ that are tangent to $\Gamma$. At these extreme instants the corresponding image point on $P'$ is where the line from $P$ is tangent to the curve $P'$.

Hence: from $P$, draw the two lines tangent to curve $P'$ --- call them $\ell_1^P, \ell_2^P$, with point $A$ and $B$ on curve $P'$. They are tangent to $\Gamma$. Repeat from $Q$, drawing two lines tangent to $Q'$ --- call them $\ell_1^Q, \ell_2^Q$ with points $C$ and $D$ on curve $Q'$. These are also tangent to $\Gamma$. Four tangent lines determine the circle $\Gamma$: for instance, the centre of $\Gamma$ lies at the intersection of the angle bisectors of any two pairs of these tangents (since each bisector is the locus of points equidistant from two lines). Project this centre perpendicularly onto any tangent to get the radius, and draw $\Gamma$.

![[NBPhO_2026_S1_fig1.png]]

**Grading:**

-   Recognising that a ray from $P$ through the lens centre $O$ is undeflected **0.2 pts**

-   Recognising that the tangents from $P$ to curve $P'$ are tangent to $\Gamma$ **0.8 pts**

-   Correct detailed construction idea of $\Gamma$ \[from (at least three of) the four tangent lines\] **0.5 pts**

-   Correctly performed construction (i.e. constructed circle on paper is close to the actual circle) **0.5 pts**

    -   Only given if the construction corresponds to a correct idea

    -   It is important that the circle intersects $P'$ and not $Q'$

**ii)** *(4 points)* Fix any point $O$ on $\Gamma$. It is enough to find one other point on the lens to draw the lens plane at this position. For this, we aim to identify the images of $P$ and $Q$ for this chosen point for the centre of the lens.

Draw the line through $P$ and $O$; it extends to intersect curve $P'$ possibly at two points. The intersection corresponding to the location $O$ of the lens needs to be determined. Using continuity and the reality of images: as $O$ moves continuously around $\Gamma$, the image moves continuously on $P'$, and the tangent-correspondence from (i) matches regions of $\Gamma$ with regions of $P'$. (Moreover, near an intersection of $P'$ with $\Gamma$, the corresponding $O$ must be the *far* intersection of line $PO$ with $\Gamma$ --- the near intersection would place the object within the focal region, making the image virtual.) This resolves the ambiguity and identifies $P^\star \in P'$ as the current image of $P$. For $Q$, the above identification procedure doesn't work as it does not intersect $\Gamma$ and thus intersection with the focal region (a priori we do not know the focal length) is not guaranteed. Therefore, it is convenient to pick point $O$ to be such that $QO$ is tangent to $Q'$ in which case there is only one valid point ($C$ or $D$). In the figure, $O$ is chosen such that $QO$ is $QD$, then $P^\star$ is the closer intersection of $PO$ with $P'$.

Now we have: object $P$ imaged to $P^\star$, object $Q$ imaged to $D$, through a lens with centre at $O$. With two objects and their real images under a converging lens, the lens can be reconstructed. Suppose a light ray starts from $P$ toward $Q$. Then, as $P^\star$ and $D$ are the images of $P$ and $Q$ (and the lens is ideal), the ray must refract from the lens to form the line $P^\star D$. Therefore the lines $PQ$ and $P^\star D$ intersect at the lens plane plane, identifying another point of the lens plane $E$. Thus $OE$ is the lens plane at the moment of time when the centre of the lens is at $O$ and is thus parallel to the lens plane at all moments in time.

![[NBPhO_2026_S1_fig2.png]]

**Grading:**

-   Idea: selecting a specific $O$ and intending to find its image pair to locate the lens plane **0.5 pts**

-   Correct argument that the image points and object points are enough to find the lens plane (eg. analysing $PQ$ as a ray that refracts to a line through the image points) **0.5 pts**

-   Justification for the correspondence between regions of $\Gamma$ and an image curve ($P'$ or $Q'$) **1 pts**

    -   Uses continuity of motion (to split image curve into regions corresponding to regions in $\Gamma'$) **0.5 pts**

        -   Given only if it is explicitly mentioned or implicitly used in correct reasoning to relate a point on $\Gamma$ to its unique real image in a non-trivial case

    -   Uses correct reasoning to relate a point on $\Gamma$ to its unique real image **0.5 pts**

-   Identifying the correct image point on $P'$ (or $Q'$, non-trivial case) **1 pts**

    -   Correct point with no or weak justification **0.5 pts**

-   Choosing point $O$ such that the image on $Q'$ (or $P'$) is at the tangent (alternatively, a correct argument for finding the correct point on the other image curve $Q'$ (or $P'$)) **0.5 pts**

    -   This point is given for finding the point on the other curve (in relation to items 3 and 4) with justification. Alternatively if student only has identified one point on one curve with just tangency, give 0.5 points for this and nothing for items 3 and 4.

-   Correctly performed construction (consistent with detailed steps to a correct construction) **0.5 pts**

**NB!** Due to in accurately drawn diagrams, it can seem like that there is a lens position $O$ where $Q$ will image to the intersection of $Q'$ and $P$ to one of its tangents $P'$. In this case identifying points $P'$ and $Q'$ will in total give 2 points (instead of 1.5 points) which replaces items 3--5 in the above scheme. In addition $-$0.5 points will be given for an inaccurately drawn diagram. I.e. in this case maximum of points is 3.

**Grading (replaces items 3--5)**

-   Finding $O$ with two trivial points **2 pts**

-   No points for correctly performed construction (due to inaccuracy)

*Solution 2.* This problem can also be solved using the lens formula. Namely, take the tangent lines (or if any two line for which you know how to identify the points). Take the angle between these lines $\varphi$ and the angles $\alpha$ and $\beta$ at which the optical axis (perpendicular to the lens) intersects these. From basic geometry $\varphi = \alpha + \beta$ (exact equation depends on the definitions). Now the lens positions $O_1$ and $O_2$ relevant, will split the lines in lengths $a$ and $b$ for one line and $c$ and $d$ for one line. Then the lens equation states $1/f = 1/(a\cos\alpha) + 1/(b\cos\alpha) = 1/(c\cos\beta) + 1/(d\cos\beta)$ (whether or not it is cosine or sine depends on the definitions). Now we have two equations and two unknowns. Thus $\alpha$ (or $\beta$) can be solved and thus a parallel line drawn with a protractor.

**Grading:**

-   Image points identified correctly (either trivial or non-trivial with justification) **0.5**

-   Lens formula written with respect to **measured lengths** (projected correctly) **0.5**

-   Angle/direction solved correctly (all or nothing) **2.5**

-   Correctly performed constructions (angles match) (only given for correctly calculated angle) **0.5**

*Official solution (NBPhO 2026, solutions v1.2 with grading scheme), from the [official PDF](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf); text as transcribed by [olimpicos.net](https://olimpicos.net/nbpho/).*

**Topic:** [[Geometric Optics]]
**Metodi:** [[Ray Tracing (metodo)|Ray Tracing]], [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Lens (object)|Lens]]
**Fonte:** [Testo (PDF) — p.1](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=1) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)


<div class="qlang-split" data-lang="it"></div>

**Lente in movimento (6 punti) — Eppu Leinonen**

Il centro di una lente sottile convergente si muove lungo una circonferenza, mentre l'orientazione della lente resta fissa; l'asse ottico della lente giace nel piano della circonferenza (il piano della figura). Due punti fissi $P$ e $Q$, anch'essi in questo piano, vengono immaginati dalla lente; le immagini sono sempre reali. Mentre la lente si muove, ciascuna immagine descrive una curva chiusa nel piano della figura: $P \to P'$, $Q \to Q'$. I due punti ed entrambe le curve sono mostrati in figura.

![[NBPhO_2026_Q1_fig1.png]]

**i)** *(2 punti)* Costruisci la circonferenza lungo cui si muove il centro della lente.

**ii)** *(4 punti)* Determina la direzione del piano della lente, cioè costruisci una retta parallela alla lente.

Nei compiti di costruzione, traccia la costruzione sul foglio fornito con la figura, descrivi i passaggi e spiega perché la costruzione funziona.

**Risposta:** costruzione geometrica — vedi la soluzione ufficiale

**Soluzione:** La soluzione ufficiale completa (in inglese) è nella versione originale di questo quesito e nel PDF ufficiale.

**Topic:** [[Geometric Optics]]
**Metodi:** [[Ray Tracing (metodo)|Ray Tracing]], [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Lens (object)|Lens]]
**Fonte:** [Testo (PDF) — p.1](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=1) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)



<span class="atom-split" id="q02" data-atom="q02" data-title="NBPhO 2026 — Problema 2" data-tags="kg/prova,paese/Nordic-Baltic,comp/Nordic,tipo-gara/individuale,livello/internazionale,difficolta/4,multidisciplina/mono,topic/circuits,argomento/elettromagnetismo,object/resistor,object/capacitor,object/inductor"></span>

<div class="qlang-switch" data-default="en"></div>



**Lissajous bridge (6 points) — Jaan Kalda**

A circuit has four nodes $A$, $B$, $E$, $D$. An AC source of amplitude $V$ is applied between $A$ and $E$. A resistor $R_1$ connects $A$ to $B$ and a capacitor $C$ connects $B$ to $E$; a resistor $R_2$ connects $A$ to $D$ and an inductor $L$ connects $D$ to $E$. A potentiometer with a sliding contact $P$ is connected between $A$ and $E$. The voltage between $P$ and $B$ feeds the $x$-input of an oscilloscope, and the voltage between $P$ and $D$ feeds the $y$-input; both input channels have the same gain. The oscilloscope plots the voltage $V_x$ from the $x$-input and the voltage $V_y$ from the $y$-input in the $V_x$--$V_y$-plane. The position of the sliding contact $P$ is adjusted until the figure on the screen degenerates into a line segment. It appears that in that case, the line segment makes an angle $\alpha$ with the $x$-axis, and the sliding contact $P$ divides the potentiometer's length in the ratio $1 : 2$ from left to right in the figure. Find the amplitude of the voltage between $B$ and $P$.

![[NBPhO_2026_Q2_fig1.png]]

**Risposta:** $|V_{PB}| = \dfrac{V}{3}\sqrt{\dfrac{2}{|\tan\alpha|}}$

**Soluzione:**

Set $V_E = 0$ and $V_A = V$ (phasor). Consider the RC branch: since $R_1$ and $C$ carry the same current, their voltages are in the impedance ratio $Z_C/Z_{R_1} = 1/(\mathrm{i}\omega R_1 C) = -\mathrm{i}/(\omega R_1 C)$. The factor $-\mathrm{i}$ is a $90^\circ$ *clockwise* rotation in the phasor plane, so $V_{BE}$ is $V_{AB}$ rotated $90^\circ$ clockwise --- in particular, $V_{AB} \perp V_{BE}$, and $V_B$ lies in the lower half-plane ($\operatorname{Im} V_B < 0$).

For the RL branch, $Z_L/Z_{R_2} = \mathrm{i}\omega L/R_2$: the factor $\mathrm{i}$ is a $90^\circ$ *counterclockwise* rotation, so $V_{DE}$ is $V_{AD}$ rotated $90^\circ$ counterclockwise, giving $V_{AD} \perp V_{DE}$ and $V_D$ in the upper half-plane ($\operatorname{Im} V_D > 0$).

By Thales' theorem applied to each branch, both $V_B$ and $V_D$ lie on the circle of diameter $\overline{AE}$ (centre $V/2$, radius $V/2$), on opposite semicircles.

![[NBPhO_2026_S2_fig1.png]]

The oscilloscope displays $V_{PB}$ on $x$ and $V_{PD}$ on $y$; the Lissajous figure degenerates to a line when these phasors are parallel or antiparallel --- equivalently, when $P$, $B$, $D$ are collinear in the phasor plane. Since $V_B$ and $V_D$ are on opposite sides of the real axis, and $V_P$ is real (a fraction of $V$), $V_P$ lies *between* them on the line, so $V_{PB}$ and $V_{PD}$ are antiparallel. Hence the displayed line has negative slope and

$$|\tan\alpha| = \frac{|V_{PD}|}{|V_{PB}|}.$$

The potentiometer is split 1:2 from left to right; depending on the orientation this gives $V_P = V/3$ or $V_P = 2V/3$. The power of point $P$ with respect to the Thales circle,

$$\operatorname{pow}(P) = V_P(V_P - V),$$

takes the value $-2V^2/9$ in *both* cases (by symmetry of the quadratic about $V_P = V/2$). Since $P$ is inside the circle and the line $BPD$ cuts it at two points,

$$|PB| \cdot |PD| = |\operatorname{pow}(P)| = \frac{2V^2}{9}.$$

Combining with $|\tan\alpha| = |V_{PD}|/|V_{PB}|$:

$$|V_{PB}|^2 |\tan\alpha| = \frac{2V^2}{9},$$

$$\boxed{|V_{PB}| = \frac{V}{3}\sqrt{\frac{2}{|\tan\alpha|}}\,.}$$

**Grading:** (6 points total)

-   Showing that $V_{AB} \perp V_{BE}$ **0.5 pts**

-   Showing that $V_{AD} \perp V_{DE}$ **0.5 pts**

-   Correctly identifying that $V_B$ lies in the lower half-plane ($\operatorname{Im} V_B < 0$) ($\operatorname{Im} V_B > 0$ if $V_A = 0$) **0.3 pts**

-   Correctly identifying that $V_D$ lies in the upper half-plane ($\operatorname{Im} V_D > 0$) ($\operatorname{Im} V_D < 0$ if $V_A = 0$) **0.3 pts**

-   Identifying that $V_B$ lies on a circle with $\overline{AE}$ as a chord **0.3 pts**

-   Identifying that $V_D$ lies on a circle with $\overline{AE}$ as a chord **0.3 pts**

-   Identifying $\overline{AE}$ as the diameter of the (common) circle **0.3 pts**

-   Recognising that Lissajous degeneracy requires $B$, $P$, $D$ collinear in the phasor plane **1.5 pts**

-   Applying power of a point at $V_P$ to get $|PB| \cdot |PD| = 2V^2/9$ **1.0 pts**

-   Correctly relating $|\tan\alpha|$ to the voltage amplitude ratio $|V_{PD}|/|V_{PB}|$ (only if phasors considered) **0.5 pts**

-   Combining with the power-of-a-point result to obtain the final answer **0.5 pts**

Since the condition *the line segment makes an angle $\alpha$ with the $x$-axis* could be understood in different ways, we did not deduct marks for failing to realize that the slope is negative or using $\tan\alpha$ without absolute value.

**Alternative solution (pure algebraic/impedance method, for students who do not spot the Thales circle).** Ground node $E$ and write $V_A = V$. The voltage dividers at $B$ and $D$ give

$$V_B = \frac{V}{1+\mathrm{i}\omega R_1 C}, \qquad V_D = \frac{V}{1-\mathrm{i}R_2/(\omega L)},$$

and the resistive slider gives $V_P = 2V/3$ (or $V/3$; the answer is insensitive to this choice). Introduce dimensionless parameters $u = \omega R_1 C$ and $w = R_2/(\omega L)$, so that

$$V_B = \frac{V(1-\mathrm{i}u)}{1+u^2}, \qquad V_D = \frac{V(1+\mathrm{i}w)}{1+w^2}.$$

Taking $V_P = 2V/3$, write $V_{PB}/V = X_B + \mathrm{i}Y_B$ and $V_{PD}/V = X_D + \mathrm{i}Y_D$:

$$\begin{aligned}
X_B &= \frac{2u^2-1}{3(1+u^2)}, & Y_B &= \frac{u}{1+u^2}, \\
X_D &= \frac{2w^2-1}{3(1+w^2)}, & Y_D &= -\frac{w}{1+w^2}.
\end{aligned}$$

The Lissajous curve degenerates to a line iff $V_{PB}/V_{PD}$ is real, i.e., $X_B Y_D - Y_B X_D = 0$. Substituting and simplifying yields

$$(u + w)(2uw - 1) = 0,$$

so (since $u,w > 0$) the bridge condition is $uw = 1/2$, i.e., $R_1R_2C = L/2$. The slope of the displayed line equals the ratio of the phasors (both now real), conveniently computed from imaginary parts:

$$\tan\alpha = \frac{Y_D}{Y_B} = -\frac{w(1+u^2)}{u(1+w^2)}.$$

Substituting $w = 1/(2u)$ gives

$$\tan\alpha = -\frac{2(1+u^2)}{1+4u^2}, \quad \text{so} \quad \frac{1+4u^2}{1+u^2} = \frac{2}{|\tan\alpha|}.
\tag{$\dagger$}$$

The amplitude between $B$ and $P$ follows from $X_B^2 + Y_B^2$:

$$\begin{aligned}
\frac{|V_{PB}|^2}{V^2} &= \frac{(2u^2-1)^2 + 9u^2}{9(1+u^2)^2} \\
&= \frac{(4u^2+1)(1+u^2)}{9(1+u^2)^2} = \frac{4u^2+1}{9(1+u^2)}.
\end{aligned}$$

Using ($\dagger$):

$$\boxed{|V_{PB}| = \frac{V}{3}\sqrt{\frac{4u^2+1}{1+u^2}} = \frac{V}{3}\sqrt{\frac{2}{|\tan\alpha|}}\,.}$$

**Grading (alternative solution):** 6 points total

-   Correctly computing $V_B$ as a phasor **0.5 pts**

-   Correctly computing $V_D$ as a phasor **0.5 pts**

-   Identifying $V_P = 2V/3$ (or $V/3$) **0.3 pts**

-   Expressing $V_{PB}/V$ and $V_{PD}/V$ in the form $X + \mathrm{i}Y$ with explicit real and imaginary parts **0.5 pts**

-   Recognising that the Lissajous curve degenerates to a line iff $V_{PB}/V_{PD}$ is real (i.e., $X_B Y_D - Y_B X_D = 0$, or equivalent condition) **0.7 pts**

-   Correctly deriving the bridge condition $R_1 R_2 C = L/2$ (equivalently $uw = 1/2$) **0.5 pts**

-   Expressing $\tan\alpha$ in terms of $u$ and $w$ (or equivalent parameters) **0.5 pts**

-   Substituting the bridge condition to write $\tan\alpha$ as a function of $u$ alone **0.5 pts**

-   Correctly computing $|V_{PB}|^2$ in terms of $u$ (before factoring) **0.7 pts**

-   Recognising the factoring $4u^4 + 5u^2 + 1 = (4u^2 + 1)(1 + u^2)$ that simplifies $|V_{PB}|^2$ **0.8 pts**

-   Eliminating $u$ using the $\tan\alpha$ expression **0.3 pts**

-   Obtaining the final answer $|V_{PB}| = (V/3)\sqrt{2/|\tan\alpha|}$ **0.2 pts**

Students who reach the correct final form via either route receive full credit. Algebraic errors may lose the corresponding stage points but could retain partial credit if the overall structure is right.

*Official solution (NBPhO 2026, solutions v1.2 with grading scheme), from the [official PDF](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf); text as transcribed by [olimpicos.net](https://olimpicos.net/nbpho/).*

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Resistor (object)|Resistor]], [[Capacitor (object)|Capacitor]], [[Inductor (object)|Inductor]]
**Fonte:** [Testo (PDF) — p.1](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=1) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)


<div class="qlang-split" data-lang="it"></div>

**Ponte di Lissajous (6 punti) — Jaan Kalda**

Un circuito ha quattro nodi $A$, $B$, $E$, $D$. Tra $A$ ed $E$ è applicato un generatore alternato di ampiezza $V$. Un resistore $R_1$ collega $A$ a $B$ e un condensatore $C$ collega $B$ a $E$; un resistore $R_2$ collega $A$ a $D$ e un induttore $L$ collega $D$ a $E$. Tra $A$ ed $E$ è collegato un potenziometro con contatto strisciante $P$. La tensione tra $P$ e $B$ alimenta l'ingresso $x$ di un oscilloscopio e la tensione tra $P$ e $D$ l'ingresso $y$; i due canali hanno lo stesso guadagno. L'oscilloscopio traccia la tensione $V_x$ dell'ingresso $x$ e la tensione $V_y$ dell'ingresso $y$ nel piano $V_x$–$V_y$. La posizione del contatto $P$ viene regolata finché la figura sullo schermo degenera in un segmento. Si osserva che in tal caso il segmento forma un angolo $\alpha$ con l'asse $x$ e che il contatto $P$ divide la lunghezza del potenziometro nel rapporto $1 : 2$ da sinistra a destra nella figura. Trova l'ampiezza della tensione tra $B$ e $P$.

![[NBPhO_2026_Q2_fig1.png]]

**Risposta:** $|V_{PB}| = \dfrac{V}{3}\sqrt{\dfrac{2}{|\tan\alpha|}}$

**Soluzione:** La soluzione ufficiale completa (in inglese) è nella versione originale di questo quesito e nel PDF ufficiale.

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Resistor (object)|Resistor]], [[Capacitor (object)|Capacitor]], [[Inductor (object)|Inductor]]
**Fonte:** [Testo (PDF) — p.1](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=1) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)



<span class="atom-split" id="q03" data-atom="q03" data-title="NBPhO 2026 — Problema 3" data-tags="kg/prova,paese/Nordic-Baltic,comp/Nordic,tipo-gara/individuale,livello/internazionale,difficolta/4,multidisciplina/multi,topic/rotational-dynamics,topic/oscillations-and-waves,argomento/meccanica,object/pendulum,object/rod"></span>

<div class="qlang-switch" data-default="en"></div>



**Kirill on a swing (8 points) — Kaarel Hänni**

A swing has rigid rods attaching it to a horizontal pivot, so it can rotate freely in a vertical plane. Initially the swing hangs vertically below the pivot with Kirill standing upright on the seat; his friend gives him an initial angular velocity $\omega_0$ about the pivot. Kirill is practising athletic swinging: whenever the swing momentarily has zero angular velocity, he quickly squats; whenever the rods are again vertical, he quickly stands up. Treat Kirill as a point mass at distance $a$ from the pivot when standing and $b$ when squatting ($a < b$); squatting and standing are motions along the rods. Neglect friction, air resistance, and the mass of the swing. Gravitational acceleration is $g$.

**i)** *(1.5 points)* Sketch, qualitatively, how Kirill's angular speed depends on time during the first full period of the swing.

**ii)** *(2 points)* On the phase diagram (angular velocity vs. angle), sketch, qualitatively, the trajectory from the initial push until the swing first goes over the top. The total number of periods shown need not be correct.

**iii)** *(4.5 points)* Find how many times Kirill must stand up before the swing first goes over the top. Evaluate your answer for $a = 2.5\,\mathrm{m}$, $b = 3.0\,\mathrm{m}$, $\omega_0 = 1.0\,\mathrm{rad/s}$, and $g = 10\,\mathrm{m/s^2}$.

**Risposta:** iii) $N = 6$ stand-ups ($N \ge \tfrac23\ln4/\ln1.2 \approx 5.07$)

**Soluzione:**

**i)** *(1.5 points)* Starting at the bottom with $|\omega| = \omega_0$, Kirill (standing, radius $a$) swings up; $|\omega|$ falls smoothly to $0$ at the turning point, after a quarter-period $T_a/4 = (\pi/2)\sqrt{a/g}$. At the turning point Kirill squats (radius $a \to b$, no effect on the plot since $\omega = 0$). Swinging back while squatting, $|\omega|$ rises smoothly from $0$ to $\eta_1$ (see part c; $\eta_1 = \omega_0\sqrt{a/b} < \omega_0$) after a quarter-period $T_b/4 = (\pi/2)\sqrt{b/g}$, which is *longer* than the first since $b > a$. At the bottom Kirill stands up: $|\omega|$ *jumps* from $\eta_1$ to $\omega_1 = \eta_1(b/a)^2 = \omega_0(b/a)^{3/2} > \omega_0$. The second half of the period repeats the pattern with new amplitudes $\omega_1$, $\eta_2 = \omega_1\sqrt{a/b} > \omega_0$, $\omega_2 = \omega_0(b/a)^3$.

The sketch should therefore show:

-   smooth arches during swinging, cusps at the bottom (jumps) and smoothness at turning points;

-   the "squatting" arches taking longer than the "standing" ones;

-   growth of successive peaks.

**Part (i): Angular speed vs time, first full period.**

![[NBPhO_2026_S3_fig1.png]]

*Part (i) --- qualitative sketch of $|\omega|$ (or signed $\omega$) vs $t$:*

-   Approximately sinusoidal arcs between jumps **0.3 pts**

-   Instantaneous jumps at the maximum values of $\omega$ (at the bottom of the swing, during stand-up) **0.6 pts**

-   Smaller amplitude during "squatting" arches, or equivalently a longer quarter-period while $r = b$ **0.3 pts**

-   Overall growth of peak $\omega$ over the period **0.3 pts**

A sketch of signed $\omega$ (rather than $|\omega|$) receives full credit if the curve correctly corresponds to the axis labels and all other qualitative features are preserved. Failure to correctly mark $|\omega|$, where necessary, deducts 0.5 pts. The same goes for not completing the full period of the first swing.

**ii)** *(2 points)* The trajectory in the $(\alpha, \omega)$ plane pieces together arcs of pendulum-like phase curves at two radii, $a$ and $b$. Each half-swing traces an arc of the energy conservation curve for the relevant radius. Stand-ups at $\alpha = 0$ appear as *vertical segments* where $|\omega|$ jumps from $\eta_i$ to $\omega_i = \eta_i(b/a)^2$. Squats at the turning points ($\omega = 0$) appear as smooth transitions (the radius-$a$ arc meets the radius-$b$ arc tangentially at $\omega = 0$).

The motion is an outward spiral: each full cycle brings Kirill back to $\alpha = 0$ with a larger $|\omega|$. When $\omega$ at the bottom (standing, radius $a$) first exceeds $\omega_{\min} = 2\sqrt{g/a}$, the next upward arc does not close: it reaches $\alpha = \pi$ with $\omega > 0$ and continues past the top. This is the open curve on the sketch.

**Part (ii): Phase diagram ($\omega$ vs $\varphi$), first three half-swings.**

![[NBPhO_2026_S3_fig2.png]]

Key features for grading:

-   lens-shaped/pendulum-like arcs (not ellipses);

-   vertical line segments only at $\alpha = 0$ (stand-ups), smooth meeting at turning points (squats);

-   spiral grows outward;

-   final open curve goes over the top with non-zero $\omega$.

Failure to use the phase diagram of angular velocity and angle, deducts 0.5 pts from the sum of part ii).

The number of spiral loops is not required to match the actual answer $N$ computed in part (c).

*Part (ii) --- qualitative sketch of phase diagram $\omega$ vs $\varphi$:*

-   Elliptical arcs for small-amplitude (early) cycles, with standing arcs ($r = a$) visibly taller (steeper in $\omega$) than squatting arcs ($r = b$) **0.5 pts**

-   Trajectory passes *continuously* through the turning points ($\omega = 0$): no jump at maximum $|\varphi|$ **0.3 pts**

-   Vertical jumps at $\varphi = 0$ (during stand-up at the bottom): $\omega$ jumps by factor $(b/a)^2$ **0.4 pts**

-   Overall growth: each successive cycle encloses the previous one, spiralling outward **0.4 pts**

-   Final half-cycle goes over the top --- trajectory crosses $\varphi = \pm\pi$ with $\omega$ still nonzero (no turning point on this segment) **0.4 pts**

**iii)** *(4.5 points)* **Growth factor per stand-up.** Let $\omega_i$ denote the angular velocity just after the $i$-th stand-up (at the bottom, standing, radius $a$); let $\eta_i$ denote the angular velocity just before that stand-up (at the bottom, squatting, radius $b$).

Energy conservation on the way up (standing, radius $a$) to turning point at angle $\alpha$: $$\tfrac12(\omega_i a)^2 = ga(1-\cos\alpha) \implies \omega_i^2 a = 2g(1-\cos\alpha).$$ At the turning point $\omega = 0$, so the squat ($a \to b$) leaves $\alpha$ and $\omega$ unchanged. Swinging back down (squatting, radius $b$): $$\tfrac12(\eta_{i+1} b)^2 = gb(1-\cos\alpha) \implies \eta_{i+1}^2 b = 2g(1-\cos\alpha).$$ Equating: $\eta_{i+1} = \omega_i\sqrt{a/b}$. The stand-up is a purely radial motion, so angular momentum about the pivot is conserved: $\eta_{i+1} b^2 = \omega_{i+1} a^2$, whence $$\frac{\omega_{i+1}}{\omega_i} = \sqrt{\frac{a}{b}}\cdot\frac{b^2}{a^2} = \left(\frac{b}{a}\right)^{3/2}.$$ After $N$ stand-ups, $\omega_N = \omega_0 (b/a)^{3N/2}$.

**Minimum angular velocity for a loop.** The rods are rigid, so the condition for reaching the top is simply that the kinetic energy at the bottom suffice to raise Kirill by $2a$: $$\tfrac12(\omega_{\min} a)^2 = 2ga \implies \omega_{\min} = 2\sqrt{g/a}.$$

**Counting.** Kirill first loops over when $\omega_N \ge \omega_{\min}$, i.e. $$N \ge \frac{2}{3}\,\frac{\ln(\omega_{\min}/\omega_0)}{\ln(b/a)}.$$

**Numerical evaluation.** With $a = 2.5\,\mathrm{m}$, $b = 3.0\,\mathrm{m}$, $\omega_0 = 1.0\,\mathrm{rad/s}$, $g = 10\,\mathrm{m/s^2}$: $$\begin{gathered}
    b/a = 1.2, \quad (b/a)^{3/2} \approx 1.3145, \\
    \omega_{\min} = 2\sqrt{10/2.5} = 4\,\mathrm{rad/s}, \\
    N \ge \frac{2}{3}\cdot\frac{\ln 4}{\ln 1.2} = \frac{2}{3}\cdot\frac{1.386}{0.1823} \approx 5.07 \implies \boxed{N = 6}\,.
  \end{gathered}$$

Check: $\omega_5 = 1.2^{7.5} \approx 3.93$ rad/s (just short); $\omega_6 = 1.2^9 \approx 5.16$ rad/s (exceeds $\omega_{\min}$). So Kirill loops over on the swing-up following his *sixth* stand-up.

**Grading (part c):**

-   Angular momentum conservation during the stand-up **0.7 pts**

-   Energy conservation during the swing **0.7 pts**

-   Growth factor $(b/a)^{3/2}$ per stand-up **0.7 pts**

-   Minimum angular velocity $\omega_{\min}^2 = 4g/a$ for the rigid-rod swing to loop over the top **0.8 pts**

-   Correct inequality for the over-the-top condition ($\omega_N \ge         \omega_{\min}$ after the $N$th stand-up) **0.4 pts**

-   Solving the inequality for $N$ using the growth law $\omega_N =         \omega_0(b/a)^{3N/2}$, yielding **0.7 pts** $$N \ge \log[4g/(a\omega_0^2)]/[3\log(b/a)]$$

-   Numerical answer $N = 6$ **0.5 pts**

*Official solution (NBPhO 2026, solutions v1.2 with grading scheme), from the [official PDF](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf); text as transcribed by [olimpicos.net](https://olimpicos.net/nbpho/).*

**Topic:** [[Rotational Dynamics]], [[Oscillations & Waves]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Pendulum (object)|Pendulum]], [[Rod (object)|Rod]]
**Fonte:** [Testo (PDF) — p.1](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=1) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)


<div class="qlang-split" data-lang="it"></div>

**Kirill sull'altalena (8 punti) — Kaarel Hänni**

Un'altalena è collegata a un perno orizzontale da aste rigide, così che può ruotare liberamente in un piano verticale. Inizialmente l'altalena pende verticalmente sotto il perno, con Kirill in piedi sul sedile; un amico gli imprime una velocità angolare iniziale $\omega_0$ attorno al perno. Kirill si allena a dondolarsi in modo atletico: ogni volta che l'altalena ha velocità angolare istantaneamente nulla si accovaccia rapidamente; ogni volta che le aste tornano verticali si rialza rapidamente. Tratta Kirill come una massa puntiforme a distanza $a$ dal perno quando è in piedi e $b$ quando è accovacciato ($a < b$); accovacciarsi e rialzarsi sono movimenti lungo le aste. Trascura attriti, resistenza dell'aria e massa dell'altalena. L'accelerazione di gravità è $g$.

**i)** *(1,5 punti)* Disegna qualitativamente come dipende dal tempo la velocità angolare di Kirill durante il primo periodo completo dell'altalena.

**ii)** *(2 punti)* Sul diagramma di fase (velocità angolare in funzione dell'angolo) disegna qualitativamente la traiettoria dalla spinta iniziale fino a quando l'altalena compie per la prima volta il giro completo. Il numero totale di periodi rappresentati non deve essere necessariamente corretto.

**iii)** *(4,5 punti)* Trova quante volte Kirill deve rialzarsi prima che l'altalena compia per la prima volta il giro completo. Calcola il risultato per $a = 2{,}5\,\mathrm{m}$, $b = 3{,}0\,\mathrm{m}$, $\omega_0 = 1{,}0\,\mathrm{rad/s}$ e $g = 10\,\mathrm{m/s^2}$.

**Risposta:** iii) $N = 6$ volte ($N \ge \tfrac23\ln4/\ln1{,}2 \approx 5{,}07$)

**Soluzione:** La soluzione ufficiale completa (in inglese) è nella versione originale di questo quesito e nel PDF ufficiale.

**Topic:** [[Rotational Dynamics]], [[Oscillations & Waves]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Pendulum (object)|Pendulum]], [[Rod (object)|Rod]]
**Fonte:** [Testo (PDF) — p.1](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=1) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)



<span class="atom-split" id="q04" data-atom="q04" data-title="NBPhO 2026 — Problema 4" data-tags="kg/prova,paese/Nordic-Baltic,comp/Nordic,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/multi,topic/newtonian-mechanics,topic/electrostatics,argomento/meccanica,object/rod,object/ball,object/spring"></span>

<div class="qlang-switch" data-default="en"></div>



**Rod and bead (8 points) — Eero Ristolainen, Jaan Kalda**

A bead is threaded on a rigid frictionless rod. The rod rotates with constant angular velocity $\omega$ about a horizontal axis that is perpendicular to the rod and passes through a fixed point on it. Gravitational acceleration is $g$.

**i)** *(1 point)* With suitable initial conditions, the trajectory of the bead is a circle. Sketch this trajectory in the plane perpendicular to the rotation axis, in a coordinate system with the axis at the origin.

**ii)** *(1 point)* Given that the trajectory is exactly a circle, find its radius.

**iii)** *(2 points)* The circular trajectory of the previous tasks is unstable. To stabilise it, one attaches a spring that produces a restoring force $-kx$ when the bead is displaced by $x$ along the rod from the axis of rotation. For what values of the stiffness $k$ can the bead move along a *stable* circular trajectory, and what is the radius of such a trajectory?

**iv)** *(4 points)* Next, the spring is removed, the bead is given a charge $q$, and a uniform electric field of strength $E$ whose vector rotates with angular velocity $\Omega$ in the same direction as the rod is introduced. With suitable initial conditions, the bead follows the trajectory shown below. Find $\Omega$, $g$, and the ratio $a_E = Eq/m$, where $m$ is the mass of the bead, in terms of $\omega$ and $d$, the side length of the grid squares shown in the figure. You may take measurements from the figure.

![[NBPhO_2026_Q4_fig1.png]]

**Risposta:** ii) $R = g/(4\omega^2)$; iii) $k > m\omega^2$, $R = \dfrac{mg}{2|2m\omega^2-k|}$; iv) $\Omega = \tfrac95\omega$, $g = d\omega^2/2$, $a_E = 5d\omega^2$

**Soluzione:**

**i)** *(1 point)* *Solution 1 by Eero Ristolainen:* The bead must pass through the origin (rotation axis). Otherwise, the bead would stay on "one side of the rod" and thus at the lowest point of the trajectory the force exerted by the rod couldn't be entirely vertical and thus it couldn't be the lowest point. Hence, the bead must pass through the origin at the lowest point of the trajectory which corresponds to the rod being horizontal. This is enough to make a sketch: the path is a circle of radius $R$ centred at $(0, R)$.

![[NBPhO_2026_S4_fig1.png]]

*Solution 2:* The plot can be made also from solution 4 of part ii.

-   Correct sketch **1 pts**

    -   Otherwise correct sketch without axis **0.5 pts**.

**ii)** *(1 point)*

*Solution 1 by Eppu Leinonen:* The bead's velocity normal to the rod has to be the same as the rod's velocity at that point for the bead to stay on the rod. At the topmost point the bead has no radial velocity. Thus, at the topmost point $v = 2R\omega$. On the other hand, at the topmost point $a = g$ (from Newton's law) and from centripetal acceleration $a = v^2/R$ we can solve $R = g/(4\omega^2)$.

*Solution 2 by Eero Ristolainen, Eppu Leinonen:* The circular motion must be uniform as the rod performs uniform circular motion. A straight forward formal proof for the this follows from the inscribed angle theorem. The angle of the bead measured from the centre of the rod is twice the angle measured from the origin at the circumference of the circle. The latter changes with speed $\omega$ as the corresponding straight line is the rod, thus the former must be $2\omega$. Thus the centripetal acceleration on the bead is $a = \dfrac{v^2}{R}$. At the topmost point, the speed is $2R\omega$ and the acceleration is only due to gravity and is $g$. Thus $R = g/(4\omega^2)$.

**Grading (solutions 1 and 2 or similar):**

-   Recognises that the normal velocity of the bead to the rod is the rod's velocity (implicitly or explicitly) OR a valid argument for uniform circular motion with $2\omega$ **0.2 pts**

-   $v = 2R\omega$ at the topmost point **0.2 pts**

-   At the topmost point $a = g$ **0.2 pts**

-   $a = v^2/R$ **0.2 pts**

-   Correct answer **0.2 pts**

*Solution 3 by Eero Ristolainen:* The centre of the motion is $(0, R/2)$ and the angular velocity is $2\omega$ since the bead performs a circle on both sides of the rod. Thus the coordinates of the bead with respect to time are $$\bigl(R\sin(2\omega t),\, R\bigl(\tfrac{1}{2} + \cos(2\omega t)\bigr)\bigr) =$$ $$\bigl(4R\sin(\omega t)\cos(\omega t),\, 4R\sin(\omega t)\sin(\omega t)\bigr) =
  \bigl(f(t)\cos(\omega t),\, f(t)\sin(\omega t)\bigr),$$ where $f(t) = 4R\sin(\omega t)$ is the location of the bead measured from the axis of rotation (and taking into account the direction). In the frame of the rod, the equation of motion is $$\ddot f = g\sin(\omega t) + \omega^2 f,$$ since Coriolis force is perpendicular to the direction of motion which is counteracted by the rod. Substituting the above expression yields the answer.

**Grading:**

-   A valid argument for uniform circular motion with $2\omega$ **0.2 pts**

-   Parametrisation of the circle with respect to angle ($\theta$) and $R$ **0.2 pts**

-   Correct equation of motion in the rotating frame **0.2 pts**

-   Explains why Coriolis force doesn't matter **0.2 pts**

-   Correct answer **0.2 pts**

*Solution 4 by Eppu Leinonen, Eero Ristolainen:* Go to the corotating frame of the rod. Since the bead is moving in this rotating frame, it experiences a Coriolis force. However, it is directed perpendicular to the velocity which is limited to be along the rod. Hence, it does not affect the equation of motion of the bead and can be ignored. Let $r$ be the coordinate of the bead along the rod (with sign determining the direction). Then the equation of motion along the rod is $$\ddot r = \omega^2 r - g\sin(\omega t).$$ This gives an inhomogeneous second order linear differential equation $$\ddot r - \omega^2 r = -g\sin(\omega t).$$ The general solution is a sum of the general solution to the homogenous problem and any solution to the inhomogeneous problem. The homogenous solution is $$r_h = A e^{\omega t} + B e^{-\omega t}.$$ A particular solution we can guess by substituting $C\sin(\omega t)$. This gives an equation for $C$ as $2C\omega^2 = g$ and thus $C = g/(2\omega^2)$. Thus the general solution is $$r = \frac{g}{2\omega^2}\sin(\omega t) + A e^{\omega t} + B e^{-\omega t},$$ which can only be periodic (in finite time) if $A = B = 0$, which determines the initial conditions (which of there are only one) for the bead to have a circular trajectory. In the lab frame: $$\vec r(t) = r(t)\,\hat u(t) = \frac{g}{2\omega^2}\sin\omega t\,(\cos\omega t, \sin\omega t)
  = \frac{g}{4\omega^2}(\sin 2\omega t,\, 1 - \cos 2\omega t).$$ This is a circle of radius $R = g/(4\omega^2)$ centred at $(0, R)$ (which gives the solution to part i as well).

**Grading:**

-   Correct equation of motion in the rotating frame **0.2 pts**

-   States implicitly or explicitly that the general solution to the differential equation is the sum of the homogeneous and particular solutions **0.2 pts**

-   Correct homogenous solution **0.1 pts**

-   Correct particular solution **0.2 pts**

-   States that homogenous solution corresponding to periodic motion is 0 **0.1 pts**

-   Correct answer **0.2 pts**

**iii)** *(2 points)* *Solution 1 by Jaan Kalda, Eero Ristolainen, Eppu Leinonen* With the spring, the equation of motion becomes $$\ddot r = (\omega^2 - \omega_0^2)\,r - g\sin\omega t, \quad \text{where } \omega_0^2 = k/m.$$

**Stability.** Perturbations $\delta r$ from the periodic particular solution obey the homogeneous equation $\delta\ddot r = (\omega^2 - \omega_0^2)\,\delta r$. If $\omega_0^2 > \omega^2$ (i.e., $k > m\omega^2$), this is simple harmonic motion at frequency $\sqrt{\omega_0^2 - \omega^2}$ --- perturbations remain bounded, orbit is *stable*. If $\omega_0^2 < \omega^2$, perturbations grow exponentially --- *unstable*. The stability criterion is $$k > m\omega^2.$$ The centrifugal term acts as an effective destabilising stiffness $-m\omega^2$, and the spring must overcome it.

As in solution 2 to part ii, we again look at the topmost point of the trajectory. The velocity is again $v = 2R\omega$, but now the acceleration is $a = g + 2Rk$. Solving this gives $R = \dfrac{mg}{2(2m\omega^2 - k)}$. In the case the radius becomes negative, the circular trajectory simply appears below the origin, so we can take the magnitude of the radius above, giving the final result: $$R = \frac{mg}{2\,|2m\omega^2 - k|}.$$

**Grading:**

-   Equation of motion including the spring **0.2 pts**

-   Idea of looking at (small) displacements to analyse stability **0.3 pts**

-   Identifying the homogeneous equation governing perturbations **0.5 pts**

-   Correct stability criterion $k > m\omega^2$ **0.3 pts**

-   Correct equations for the acceleration and velocity at the top of the trajectory **0.5 pts**

-   Correct radius formula $R = mg/[2|2m\omega^2 - k|]$ **0.2 pts**

*Solution 2 by Jaan Kalda (for finding the radius)* The particular solution is again (as in solution 4 to part ii) $r_p = A'\sin\omega t$: $$\begin{aligned}
    -\omega^2 A' &= (\omega^2 - \omega_0^2)A' - g \\
    \Rightarrow\quad A' &= \frac{g}{2\omega^2 - \omega_0^2} = \frac{mg}{2m\omega^2 - k}.
  \end{aligned}$$ The corresponding lab-frame orbit is, as in (b), a circle of radius $|A'|/2$, giving the result as in solution 1. For $m\omega^2 < k < 2m\omega^2$ the amplitude $A'$ is positive and the circle sits above the axis (as in parts a, b); at $k = 2m\omega^2$ the driven amplitude diverges (driving resonance --- the bounded circular orbit ceases to exist); for $k > 2m\omega^2$ the amplitude is negative, meaning the circle flips to below the axis, but remains stable. **Grading:**

-   Solving for particular-solution amplitude $A'$ **0.5 pts**

-   Correct radius formula $R = mg/[2|2m\omega^2 - k|]$ **0.2 pts**

*Solution 2 by Eppu Leinonen* Alternatively following solution 4 of part ii, the general solution to this differential equation can be found. However, now the homogenous solution is sum of real exponentials if $\omega^2 - \omega_0^2 > 0$ which is unstable and a sum of sinusoid if $\omega^2 - \omega_0^2 < 0$ which is stable. Then the particular solution can be guessed the same way as in the solution above.

**iv)** *(4 points)* *Solution by Eero Ristolainen and Eppu Leinonen*

Now the equation of motion in the frame of the rod is: $$\ddot f = g\sin(\omega t) + a_E\sin((\Omega - \omega)t + \phi) + \omega^2 f.$$ Let us write $\Omega' = \Omega - \omega$ as the angular velocity of the electric field in the frame of the rod. From the figure we see that $f(t)$ is a sum of two periodic components $f(t) = f_1(t) + f_2(t)$. Furthermore, the linearity of the differential equation gives us that $$\ddot f_1 - \omega^2 f_1 = g\sin(\omega t), \qquad
  \ddot f_2 - \omega^2 f_2 = a_E\sin(\Omega' t + \phi).$$ The first one is fulfilled by the exact same solution as before (deduced the same way as in solution 2 of part), $f_1 = \dfrac{g}{2\omega^2}\sin(\omega t)$. We guess the second solution to be of the form $f_2 = A\sin(\Omega' t + \phi)$, which gives $A = a_E/(\Omega'^2 + \omega^2)$.

We see that the solution is periodic. Let this period be $T_f$. Then we must have that $T_f = nT_{f_1} = pT_{f_2}$ with some positive integers $n$ and $p$ where $T_{f_1}$ and $T_{f_2}$ are the periods of $f_1$ and $f_2$ respectively. We notice that the figure is *almost* symmetric with respect to $x$-axis, which is a huge deviation from the solution with just $f_1$. Thus the amplitude of $f_2$ must dominate the one of $f_1$. Therefore, the sign changes changes of $f_2$ corresponds to the loops in the figure which there are 8 of. Since the sine function has changes sign twice in a period, we get $4T_{f_2} = T_f = nT_{f_1}$.

For the motion to reach the same ray (from origin, an example dashed in the figure below) twice, it takes time $T_{f_1}/2$ (the rod has made half a turn). From the graph, we can read that in time $\approx 3T_{f_2}/4$ (red + blue) the bead travels less distance than in $T_{f_1}$ (red+blue+orange). Similarly in time $\approx T_{f_2}$ (red + blue + orange + the rest of the black to the horizontal axis) the bead travels more than in $T_{f_1}$ (red + blue + orange).

![[NBPhO_2026_S4_fig2.png]]

Thus we get the following inequalities $$\tfrac{4}{3}\,T_{f_1} > T_{f_2} > T_{f_1},$$ which gives $$\tfrac{4}{3} > \tfrac{n}{4} > 1$$ for which $n = 5$ is the only solution. I.e. we get $$\Omega' = \tfrac{4}{5}\omega \iff \Omega = \tfrac{9}{5}\omega.$$ (This can also be recovered from there being 4 loops corresponding to 5 $y$-intercepts corresponding to the rod being vertical. This automatically gives $\Omega' = 4/5\,\omega$.)

The symmetry with respect to reflection along the $y$-axis in the figure (the trajectory is parallel to the $x$-axis at the extremal points on the $y$-axis) dictates that the electric field must point vertically when the bead is on the extremal points on the $y$-axis. Thus, the corresponding displacements along these extremal $y$-points must align constructively or destructively. I.e. the top-most $|f|_t$ and bottom-most $|f|_b$ distances from the origin correspond to the cases $$|f|_b = \frac{a_E}{\omega^2 + \Omega'^2} - \frac{g}{2\omega^2}, \qquad
  |f|_t = \frac{a_E}{\omega^2 + \Omega'^2} + \frac{g}{2\omega^2}.$$ (The formal justification is that at these extremal points $\dot f_1 + \dot f_2 = 0$ and both contributions are proportional to a sinusoid, thus $\ddot f_1$ and $\ddot f_2$ are "orthogonal" at the same points. Thus, as gravity is parallel to the rod we have $\ddot f_2$ is at its extremum and thus $\dot f_1 = 0$. Thus $\dot f_2 = 0$ and thus contribution from $\ddot f_2$ has to be at its extremum. This implies that the electric field points parallel or anti parallel to the rod at these extremal points. Now $f_1, f_2 \propto \ddot f_1, f_2$ (due to both being orthogonal to $\dot f_1, \dot f_2$) and thus at these extremal points on the $y$-axis, we have $|f|_b = |f_2| - |f_1|$ and $|f|_t = |f_2| + |f_1|$.)

Measuring $$|f|_b \approx 2.8d, \qquad |f|_t \approx 3.3d$$ and solving gives $$g = \frac{d\omega^2}{2}, \qquad a_E = 5d\omega^2.$$

**Grading:**

-   Equation of motion including the electric field **0.1 pts**

-   Writing $f(t) = f_1(t) + f_2(t)$ **0.1 pts**

-   Deducing $f_1 = \frac{g}{2\omega^2}\sin(\omega t)$ **0.2 pts**

-   Guessing $f_2 = A\sin(\Omega' t + \phi)$ **0.2 pts**

-   Finding $A = a_E/(\Omega'^2 + \omega^2)$ **0.2 pts**

-   Realising $f_2$ dominates with proper reasoning **0.5 pts**

-   Noting periodicity **0.2 pts**

-   $T_f = nT_{f_1} = pT_{f_2}$ **0.2 pts**

-   Finding a restrictive enough inequality for $n$ (or $p$) from the figure (or any other procedure that works for finding $n$) **0.8 pts**

    -   For a correct idea (in case it is executed wrong) **0.2 pts**

-   $n = 5$ **0.1 pts**

-   $\Omega = \tfrac{9}{5}\omega$ **0.2 pts**

-   Deducing with reasonable explanation that electric field points along the $y$-axis when bead reaches extremal $y$ **0.5 pts**

-   Writing $|f|_b$ and $|f|_t$ as the difference/sum of the $f_1$ and $f_2$ amplitudes **0.3 pts**

-   Solving for $g$ and $a_E$ **0.1 pts**

-   $g \approx d\omega^2/2$ and $a_E \approx 5d\omega^2$ **0.3 pts**

    -   0.1pt for one correct.

    -   $g \in [0.30, 0.70]\,d\omega^2$, $a_E \in [4.8, 5.2]\,d\omega^2$

*Official solution (NBPhO 2026, solutions v1.2 with grading scheme), from the [official PDF](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf); text as transcribed by [olimpicos.net](https://olimpicos.net/nbpho/).*

**Topic:** [[Newtonian Mechanics]], [[Electrostatics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Superposition Principle (metodo)|Superposition Principle]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Rod (object)|Rod]], [[Ball (object)|Ball]], [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.1](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=1) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)


<div class="qlang-split" data-lang="it"></div>

**Asta e perlina (8 punti) — Eero Ristolainen, Jaan Kalda**

Una perlina è infilata su un'asta rigida senza attrito. L'asta ruota con velocità angolare costante $\omega$ attorno a un asse orizzontale perpendicolare all'asta e passante per un suo punto fisso. L'accelerazione di gravità è $g$.

**i)** *(1 punto)* Con opportune condizioni iniziali la traiettoria della perlina è una circonferenza. Disegna questa traiettoria nel piano perpendicolare all'asse di rotazione, in un sistema di coordinate con l'asse nell'origine.

**ii)** *(1 punto)* Sapendo che la traiettoria è esattamente una circonferenza, trova il suo raggio.

**iii)** *(2 punti)* La traiettoria circolare delle domande precedenti è instabile. Per stabilizzarla si aggiunge una molla che esercita una forza di richiamo $-kx$ quando la perlina è spostata di $x$ lungo l'asta rispetto all'asse di rotazione. Per quali valori della costante elastica $k$ la perlina può muoversi lungo una traiettoria circolare *stabile*, e qual è il raggio di tale traiettoria?

**iv)** *(4 punti)* Si toglie poi la molla, si dà alla perlina una carica $q$ e si introduce un campo elettrico uniforme di intensità $E$ il cui vettore ruota con velocità angolare $\Omega$ nello stesso verso dell'asta. Con opportune condizioni iniziali la perlina segue la traiettoria mostrata qui sotto. Trova $\Omega$, $g$ e il rapporto $a_E = Eq/m$, dove $m$ è la massa della perlina, in funzione di $\omega$ e di $d$, lato dei quadretti della griglia in figura. Puoi prendere misure dalla figura.

![[NBPhO_2026_Q4_fig1.png]]

**Risposta:** ii) $R = g/(4\omega^2)$; iii) $k > m\omega^2$, $R = \dfrac{mg}{2|2m\omega^2-k|}$; iv) $\Omega = \tfrac95\omega$, $g = d\omega^2/2$, $a_E = 5d\omega^2$

**Soluzione:** La soluzione ufficiale completa (in inglese) è nella versione originale di questo quesito e nel PDF ufficiale.

**Topic:** [[Newtonian Mechanics]], [[Electrostatics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Superposition Principle (metodo)|Superposition Principle]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Rod (object)|Rod]], [[Ball (object)|Ball]], [[Spring (object)|Spring]]
**Fonte:** [Testo (PDF) — p.1](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=1) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)



<span class="atom-split" id="q05" data-atom="q05" data-title="NBPhO 2026 — Problema 5" data-tags="kg/prova,paese/Nordic-Baltic,comp/Nordic,tipo-gara/individuale,livello/internazionale,difficolta/4,multidisciplina/multi,topic/thermodynamics,topic/fluid-mechanics,argomento/termodinamica,object/pipe-tube,object/gas"></span>

<div class="qlang-switch" data-default="en"></div>



**Saturation pressure of water (8 points) — Eero Uustalu**

*Experimental problem.* Tools: transparent plastic tube (open at both ends, Luer lock to connect with a syringe at one end, length $\sim1.5\,\mathrm{m}$, inner diameter $\sim1.5\,\mathrm{mm}$); plastic syringe with a water-tight Luer fitting to the tube; small open container with a few millilitres of dodecane (labelled "D"); metal pin with outer diameter $\sim2\,\mathrm{mm}$ to close the tube tightly (if it gets stuck, ask the invigilator to help remove it); measuring tape; container with water (labelled "W"); a large container for waste liquids; a small wooden stick; a few strips of masking tape; paper towel.

Water and dodecane do not dissolve in each other. The density of dodecane is less than the density of water.

Avoid skin and eye contact with dodecane, and do not ingest it; wash your hands after handling.

During the experiment, the tube can only be filled with dodecane: **the inner surface of the tube must never touch water!**

If necessary, you can have one replacement tube, one replacement syringe, and reasonable additional amounts of dodecane and water.

Determine the saturated vapour pressure $p_\mathrm{sat}$ of water at room temperature; room temperature and air pressure are recorded by the invigilator at the start of the session: $T_\mathrm{room} = \underline{\hspace{2cm}}\,^\circ\mathrm{C}$; $p_\mathrm{air} = \underline{\hspace{2cm}}\,\mathrm{kPa}$.

Note that at typical room temperatures, the saturated vapour pressure of dodecane is much lower than that of water.

**i)** *(2 points)* Describe your measurement procedure and explain the physical principle it is based on.

**ii)** *(4 points)* Perform the measurements. Tabulate all quantities you measure and document the sequence of operations.

**iii)** *(2 points)* Determine $p_\mathrm{sat}$ at room temperature. What is the dominant source of systematic error?

**Risposta:** experimental — e.g. $p_\mathrm{sat} \approx 2.6\,\mathrm{kPa}$ at $22\,^\circ\mathrm{C}$ (see the official solution)

**Soluzione:**

**Main idea.** Use a sealed air bubble as a manometer. If we can trap a small air bubble somewhere in the tube, note its initial length $l_0$ under atmospheric pressure, and then reduce the pressure in the bubble, the bubble's length grows. Since the tube's cross-section is uniform, the bubble's pressure is determined by the ideal gas law (isothermal expansion): $$p_{\mathrm{bubble}} = p_{\mathrm{atm}} \cdot \frac{l_0}{l_1}.$$

If we reduce the air bubble's pressure by pulling on the syringe plunger, dodecane carries the reduced pressure from the air bubble back through the tube to the water--dodecane interface inside the syringe. Once the pressure there drops to $p_{\mathrm{sat}}$, water vapour starts forming bubbles at the interface, which grow and coalesce. At that point, pulling the syringe further no longer reduces the air bubble's pressure: any further pressure drop is immediately compensated by additional vapour evaporating at the interface. So once the air bubble stops growing in response to syringe pulling, we have $p_{\mathrm{bubble}} = p_{\mathrm{sat}}$ (plus a small hydrostatic correction if the tube is not laid horizontally; see below).

**Why dodecane?** The role of dodecane is to act as an incompressible, non-volatile piston between the syringe and the air bubble. Dodecane is hydrophobic, does not dissolve in water, and has negligible vapour pressure at room temperature (as stated in the problem). It is also lighter than water, so water stays below dodecane in any at-rest configuration.

The problem warns that water must not touch the inner surface of the tube, because traces of water get adsorbed onto the plastic wall. When the pressure in the tube is then reduced below $p_{\mathrm{sat}}$, these adsorbed traces boil off, forming a series of small bubbles distributed along the tube. Each such bubble also expands during the measurement, adding uncontrolled volume to the gas column and distorting the $l_0$-to-$l_1$ ratio. By filling the tube with dodecane *before* introducing any water, the inner surface is prewetted with a hydrophobic liquid that excludes water from the wall.

**Design.** The tube must contain dodecane filling it from the syringe end up to a small air bubble of initial length $l_0 \approx 15\,\mathrm{mm}$ at the far end (closed by the metal pin). Water sits in the syringe itself, not in the tube. The air bubble cannot be too small (initial length reading becomes imprecise) nor too large: during the measurement it expands by a factor of $\approx 40$ (since $p_{\mathrm{atm}}/p_{\mathrm{sat}} \approx 101/2.6 \approx 39$ at room temperature), so an initial bubble of $15\,\mathrm{mm}$ expands to $\approx 0.6\,\mathrm{m}$, comfortably fitting in a $1.5\,\mathrm{m}$ tube. Any additional air bubbles elsewhere in the tube or in the syringe would also expand during the measurement, distorting the result or making it impossible to reach $p_{\mathrm{sat}}$ within the full travel of the syringe plunger.

Note on orientation: the dodecane column has density $\approx 750\,\frac{\mathrm{kg}}{\mathrm{m}^3}$, so a vertical $1.5\,\mathrm{m}$ column of dodecane produces a hydrostatic pressure difference of $\rho g h \approx 11\,\mathrm{kPa}$ --- several times larger than the $p_{\mathrm{sat}} \approx 2.6\,\mathrm{kPa}$ being measured. The tube must therefore be laid horizontally, otherwise the hydrostatic correction will dominate the result.

**Preparation.**

-   Connect the syringe to the tube.

-   Dip the far end of the tube into the dodecane container and pull the syringe plunger; dodecane fills the tube.

-   Lift the far end of the tube out of the dodecane and pull in a small amount of air, forming an air bubble of initial length $l_0 \approx 15\,\mathrm{mm}$ at the far end.

-   Close the far end of the tube tightly with the metal pin.

-   Disconnect the syringe (keeping the plunger in place so no air enters the syringe from the open end).

-   Pull a small amount of water ($\sim 1\,\mathrm{mL}$) into the syringe.

-   Reconnect the syringe to the tube (a small air bubble at the Luer joint is tolerable, but minimise it).

At this point, from syringe end to far end: syringe (with water) --- water--dodecane interface near the Luer joint --- dodecane filling the tube --- air bubble at the far end --- metal pin closure.

**Measurement.**

-   Lay the tube horizontally to avoid any hydrostatic correction in the dodecane column.

-   Measure the initial bubble length $l_0$. Record the atmospheric pressure $p_{\mathrm{atm}}$ and the room temperature $T_{\mathrm{room}}$ from the invigilator.

-   Pull the syringe plunger slowly. The bubble grows as the pressure drops. Continue until the bubble stops growing (the limit where $p_{\mathrm{bubble}} = p_{\mathrm{sat}}$). Fix the plunger at this position.

-   Measure the final bubble length $l_1$.

Typical values: $l_0 \approx 15\,\mathrm{mm}$, $l_1 \approx 400\,\mathrm{mm}$ to $800\,\mathrm{mm}$ (depending on room temperature; at $T = 22\,^\circ\mathrm{C}$, $p_{\mathrm{sat}} \approx 2.6\,\mathrm{kPa}$ gives $l_1/l_0 \approx 101/2.6 \approx 39$, so $l_1 \approx 580\,\mathrm{mm}$).

**Calculation.** From the ideal gas law at constant temperature, $$p_{\mathrm{sat}} = p_{\mathrm{atm}} \cdot \frac{l_0}{l_1}.$$ With $l_0 = 14.5\,\mathrm{mm}$, $l_1 = 660\,\mathrm{mm}$, $p_{\mathrm{atm}} = 101\,\mathrm{kPa}$: $$p_{\mathrm{sat}} = 101 \cdot \frac{14.5}{660} \approx 2.2\,\mathrm{kPa}.$$

**Dominant source of systematic error.** Incomplete saturation: it takes time for water to evaporate at the interface inside the syringe, and if the plunger is pulled too fast, the pressure temporarily falls below $p_{\mathrm{sat}}$ (supersaturated vapour). The measured $l_1$ is then larger than its true equilibrium value, giving an underestimate of $p_{\mathrm{sat}}$. Mitigation: pull slowly and wait for the bubble to stabilise before recording $l_1$.

A secondary source is residual air: from the Luer joint, from air dissolved in the dodecane, or from water traces adsorbed on the tube wall (if dodecane pre-wetting was imperfect). These behave as additional gas in the air bubble and artificially reduce the apparent $p_{\mathrm{sat}}$. Careful preparation --- filling the tube with dodecane before any water enters, keeping the water--dodecane interface inside the syringe, and avoiding air at the Luer joint --- minimises this.

**Grading for methods similar to official solution, that don't need to know the partial water pressure of the ambient room air. (8 points total)**

For methods that require knowing the partial water pressure of the ambient room air, look at alternate scheme.

*Part (i) --- description of procedure and principle (2 points).*

-   Main idea: using the air bubble as a manometer **0.5 pts**

-   Recognising that $p_{\mathrm{bubble}} = p_{\mathrm{sat}}$ when the bubble stops growing under syringe pulling **0.5 pts**

-   Correct role of dodecane: serves as piston; negligible vapour pressure; prevents water from wetting tube walls **0.6 pts**

-   Application of the ideal gas law (or equivalent isothermal pressure--volume relation) to relate initial and final bubble lengths to pressures **0.4 pts**

*Part (ii) --- performing the measurements (4 points).*

-   Correct tube preparation: dodecane fills the entire tube, small air bubble at the far end, water in the syringe **1.0 pts**

-   Correct choice of initial bubble length (approximately $10\,\mathrm{mm}$ to $20\,\mathrm{mm}$) **0.5 pts**

-   Documentation of preparation steps with a clear sequence **0.5 pts**

-   Tabulation of the measured quantities $l_0$ and $l_1$ **0.8 pts**

-   Recording atmospheric pressure $p_{\mathrm{atm}}$ and room temperature $T_{\mathrm{room}}$ **0.2 pts**

-   Slow pulling of the syringe / waiting for stabilisation **0.6 pts**

-   Tube laid horizontally (or a correction applied if vertical) **0.4 pts**

*Part (iii) --- determination of $p_{\mathrm{sat}}$ and systematic error (2 points).*

-   Correct computation of $p_{\mathrm{sat}}$ from $l_0$, $l_1$, $p_{\mathrm{atm}}$ **0.4 pts**

-   Result within a factor of 1.5 of the expected value for the measured $T_{\mathrm{room}}$ **1.2 pts**

-   *Otherwise*, within a factor of 2 of the expected value **0.6 pts**

-   *Otherwise*, within a factor of 3 of the expected value **0.3 pts**

-   Identification of incomplete saturation (or a comparable dominant systematic source) **0.4 pts**

(The three tolerance bands are mutually exclusive: award only the highest band the result falls in.)

**Grading (methods that depend on knowing the partial pressure of ambient water moisture in the room air). (Maximally 5.6 points of 8 points total.)**

The summary of these solutions is that they had a \"dry\" end of the long tube, with some dodecane in the middle to act as a piston, and the other end of the tube having the syringe on it, with some water in it. Over enough time, the water in the syringe will evaporate (raising the partial pressure of water, from the room's ambient water vapor pressure, to the saturated vapor pressure), moving the dodecane piston towards the dry end.

If the dry end of the long tube was sealed, additional assumptions have to be made, which have to be explicitly justified.

*Part (i) --- description of procedure and principle (2 points).*

-   Explicitly stating, that the result comes to be lower than the real saturated vapor pressure of water, due to the ambient room air (and as such, the near end of the syringe where the water evaporates) also having water vapor already in it **1.6 pts**

-   Application of the ideal gas law **0.4 pts**

*Part (ii) --- performing the measurements and calculating the expressions (max 3.2 out of 4 points).*

For the sake of clarity, let's say that the room air pressure is $p$, length from the end of the dodecane until the (dry) end of the tube is $x$, and the volume of the entire half of the system from the dodecane of the syringe side to be $V_{\mathrm{TOT}}$. Likewise, the respective new pressure, length, and volume, after the water vapor pressure has reached saturation on the syringe side, to be $p_{\mathrm{new}}$, $x_{\mathrm{new}}$, and $V_{\mathrm{TOT,new}}$.

-   Expressing $p_{\mathrm{sat}} = p\left(\frac{x}{x_{\mathrm{new}}} - 1\right)$ if the dry end is sealed (or $p_{\mathrm{sat}} = p\left(\frac{V_{\mathrm{TOT,new}}}{V_{\mathrm{TOT}}} - 1\right)$ if dry end is left open) **1 pts**

-   If it's **explicitly** stated how/why $p_{\mathrm{new}} \approx p + p_{\mathrm{sat}}$, due to $\frac{x}{x_{\mathrm{new}}} \gg \frac{V_{\mathrm{TOT,new}}}{V_{\mathrm{TOT}}}$ or something similar. (give automatically if dry end was left unsealed) **1 pts**

-   Documentation of preparation steps with a clear sequence **0.3 pts**

-   Recording atmospheric pressure $p_{\mathrm{atm}}$ and room temperature $T_{\mathrm{room}}$ **0.2 pts**

-   Waiting for stabilisation **0.3 pts**

-   Tube laid horizontally (or a correction applied if vertical) **0.4 pts**

*Part (iii) --- determination of systematic error, sourcing from other than that of the ambient room's water vapor pressure (max 0.4 points out of 2 points).*

-   Identification of incomplete saturation (or a comparable dominant systematic source) **0.4 pts**

*Official solution (NBPhO 2026, solutions v1.2 with grading scheme), from the [official PDF](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf); text as transcribed by [olimpicos.net](https://olimpicos.net/nbpho/).*

**Topic:** [[Thermodynamics]], [[Fluid Mechanics]]
**Metodi:** [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]], [[Gas (object)|Gas]]
**Fonte:** [Testo (PDF) — p.1](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=1) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)


<div class="qlang-split" data-lang="it"></div>

**Tensione di vapore saturo dell'acqua (8 punti) — Eero Uustalu**

*Problema sperimentale.* Materiale: tubo di plastica trasparente (aperto alle due estremità, con attacco Luer a un'estremità per collegare una siringa, lunghezza $\sim1{,}5\,\mathrm{m}$, diametro interno $\sim1{,}5\,\mathrm{mm}$); siringa di plastica con raccordo Luer a tenuta d'acqua per il tubo; piccolo contenitore aperto con alcuni millilitri di dodecano (etichetta "D"); spillo metallico di diametro esterno $\sim2\,\mathrm{mm}$ per chiudere ermeticamente il tubo (se si incastra, chiedi aiuto al sorvegliante per toglierlo); metro a nastro; contenitore con acqua (etichetta "W"); un grande contenitore per i liquidi di scarto; un bastoncino di legno; alcune strisce di nastro adesivo di carta; carta assorbente.

Acqua e dodecano non si mescolano. La densità del dodecano è minore di quella dell'acqua.

Evita il contatto del dodecano con pelle e occhi e non ingerirlo; lavati le mani dopo averlo maneggiato.

Durante l'esperimento il tubo può essere riempito solo di dodecano: **la superficie interna del tubo non deve mai toccare l'acqua!**

Se necessario puoi avere un tubo e una siringa di ricambio e quantità aggiuntive ragionevoli di dodecano e acqua.

Determina la tensione di vapore saturo $p_\mathrm{sat}$ dell'acqua a temperatura ambiente; temperatura ambiente e pressione dell'aria vengono annotate dal sorvegliante all'inizio della sessione: $T_\mathrm{amb} = \underline{\hspace{2cm}}\,^\circ\mathrm{C}$; $p_\mathrm{aria} = \underline{\hspace{2cm}}\,\mathrm{kPa}$.

A temperatura ambiente la tensione di vapore saturo del dodecano è molto minore di quella dell'acqua.

**i)** *(2 punti)* Descrivi la procedura di misura e spiega il principio fisico su cui si basa.

**ii)** *(4 punti)* Esegui le misure. Riporta in tabella tutte le grandezze misurate e documenta la sequenza delle operazioni.

**iii)** *(2 punti)* Determina $p_\mathrm{sat}$ a temperatura ambiente. Qual è la principale fonte di errore sistematico?

**Risposta:** sperimentale — ad es. $p_\mathrm{sat} \approx 2{,}6\,\mathrm{kPa}$ a $22\,^\circ\mathrm{C}$ (vedi la soluzione ufficiale)

**Soluzione:** La soluzione ufficiale completa (in inglese) è nella versione originale di questo quesito e nel PDF ufficiale.

**Topic:** [[Thermodynamics]], [[Fluid Mechanics]]
**Metodi:** [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]], [[Gas (object)|Gas]]
**Fonte:** [Testo (PDF) — p.1](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=1) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)



<span class="atom-split" id="q06" data-atom="q06" data-title="NBPhO 2026 — Problema 6" data-tags="kg/prova,paese/Nordic-Baltic,comp/Nordic,tipo-gara/individuale,livello/internazionale,difficolta/3,multidisciplina/mono,topic/newtonian-mechanics,argomento/meccanica,object/rope-string,object/block"></span>

<div class="qlang-switch" data-default="en"></div>



**Pull-up bar rope (5 points) — Jaan Kalda**

A rope is thrown over a horizontal pull-up bar at height $H$ above the frictionless floor. One end of the rope is tied to a heavy weight resting on the floor; the other end is pulled so that the length of the rope between the bar and the weight decreases at a constant rate $v$. At a given moment, this segment makes an angle $\alpha$ with the vertical (see figure); the weight is still in contact with the floor. Gravitational acceleration is $g$.

![[NBPhO_2026_Q6_fig1.png]]

**i)** *(1 point)* Find the speed $u$ of the weight.

**ii)** *(1 point)* Find the magnitude of the acceleration of the weight.

**iii)** *(3 points)* Find the angle $\alpha_0$ at which the weight lifts off the floor.

**Risposta:** i) $u = v/\sin\alpha$; ii) $|\ddot x| = \dfrac{v^2}{H}\cot^3\alpha$; iii) $\alpha_0 = \arctan\sqrt[4]{v^2/(gH)}$

**Soluzione:**

**i)** *(1 point)* Place the bar at the origin of a coordinate system where $x$ is the horizontal distance from the bar to the weight along the floor, and $H$ is the height of the bar above the floor. The length of the bar-to-weight rope segment is $$L = \sqrt{x^2 + H^2}, \qquad \sin\alpha = x/L.$$

**Method 1 (inextensibility / velocity projection).** Since the rope is inextensible, the velocity components of its two endpoints *along the rope direction* must match: whatever rate one end recedes from a point on the rope, the other end must approach it at the same rate. The puller's hand pulls the rope along its own direction at speed $v$, so the rope shortens at rate $v$. The weight moves horizontally toward the bar at speed $u$; its velocity component along the rope (which makes angle $\alpha$ with the vertical, hence angle $\frac{\pi}{2}-\alpha$ with the floor) is $u\sin\alpha$. Equating: $$u\sin\alpha = v \quad\Longrightarrow\quad \boxed{u = \frac{v}{\sin\alpha}}\,.$$

**Method 2 (implicit differentiation).** Differentiating $L^2 = x^2 + H^2$ with respect to time: $$L\dot{L} = x\dot{x}.$$ With $\dot{L} = -v$ (the segment shortens at constant rate) and $\sin\alpha = x/L$: $$\dot{x} = -\frac{Lv}{x} = -\frac{v}{\sin\alpha},$$ $$u = |\dot{x}| = \frac{v}{\sin\alpha}.$$

**Grading (Method 1).**

-   Recognising that the velocity components of the rope endpoints along the rope direction must match (rope inextensibility) **0.4 pts**

-   Identifying the projection $u\sin\alpha$ for the weight's velocity along the rope **0.3 pts**

-   Final answer $u = v/\sin\alpha$ **0.3 pts**

**Grading (Method 2).**

-   Setting up $L^2 = x^2 + H^2$ with $\dot{L} = -v$ **0.3 pts**

-   Correctly differentiating to obtain $L\dot{L} = x\dot{x}$ **0.4 pts**

-   Final answer $u = v/\sin\alpha$ **0.3 pts**

**ii)** *(1 point)* **Method 1 (continuing from $L\dot{L} = x\dot{x}$).** Differentiate again, with $\dot{L} = -v$ constant (so $\ddot{L} = 0$): $$\dot{L}^2 = \dot{x}^2 + x\ddot{x},$$ $$\ddot{x} = \frac{v^2 - \dot{x}^2}{x} = \frac{v^2 - u^2}{x}.$$ Since $u^2 > v^2$, we have $\ddot{x} < 0$: the weight accelerates toward the bar. With $u = v/\sin\alpha$ and $x = H\tan\alpha$: $$|\ddot{x}| = \frac{u^2 - v^2}{x} = \frac{v^2(1-\sin^2\alpha)/\sin^2\alpha}{H\tan\alpha},$$ $$|\ddot{x}| = \boxed{\frac{v^2}{H}\cot^3\alpha}\,.$$

-   Correctly differentiating an incorrect result from the previous part **0.5 pts**.

**Method 2 (direct differentiation of $u = v/\sin\alpha$).** The angle $\alpha$ changes in time as the weight slides; introduce $\omega = -\dot{\alpha}$ (positive as $\alpha$ decreases). The weight's position is $x = H\tan\alpha$, so its speed is $$u = -\dot{x} = -\frac{H}{\cos^2\alpha}\,\dot{\alpha} = \frac{H\omega}{\cos^2\alpha}.$$ Combined with $u = v/\sin\alpha$: $$\omega = \frac{u\cos^2\alpha}{H} = \frac{v\cos^2\alpha}{H\sin\alpha}.$$ Differentiating $u = v/\sin\alpha$ with respect to time: $$\dot{u} = -\frac{v\cos\alpha}{\sin^2\alpha}\,\dot{\alpha} = \frac{v\omega\cos\alpha}{\sin^2\alpha}.$$ Substituting $\omega$: $$|\ddot{x}| = \dot{u} = \frac{v\cos\alpha}{\sin^2\alpha}\cdot\frac{v\cos^2\alpha}{H\sin\alpha} = \boxed{\frac{v^2}{H}\cot^3\alpha}\,.$$

**Grading (Method 1).**

-   Differentiating $L\dot{L} = x\dot{x}$ to obtain $\ddot{x} = (v^2 - u^2)/x$ **0.5 pts**

-   Substituting $u$ and $x$ to obtain final answer $a = (v^2/H)\cot^3\alpha$ **0.5 pts**

**Grading (Method 2).**

-   Introducing $\omega = -\dot{\alpha}$ as the angular rate of the rope direction **0.2 pts**

-   Relating the weight's speed to $\omega$: $u = H\omega/\cos^2\alpha$ **0.2 pts**

-   Deriving $\omega = v\cos^2\alpha/(H\sin\alpha)$ from $u = v/\sin\alpha$ **0.2 pts**

-   Differentiating $u = v/\sin\alpha$ to obtain $\dot{u} = v\omega\cos\alpha/\sin^2\alpha$ **0.2 pts**

-   Substituting $\omega$ and obtaining final answer $a = (v^2/H)\cot^3\alpha$ **0.2 pts**

**iii)** *(3 points)* While the weight is on the floor, the only horizontal force on it is the horizontal component of the rope tension $T\sin\alpha$, directed toward the bar. Newton's second law in the horizontal direction: $$T\sin\alpha = M|\ddot{x}| = \frac{Mv^2\cos^3\alpha}{H\sin^3\alpha},$$ $$T = \frac{Mv^2\cos^3\alpha}{H\sin^4\alpha}.$$ Vertically, $T\cos\alpha + N = Mg$, where $N$ is the normal force from the floor. The weight lifts off when $N = 0$, i.e., $T\cos\alpha_0 = Mg$: $$\frac{Mv^2\cos^4\alpha_0}{H\sin^4\alpha_0} = Mg,$$ $$\tan^4\alpha_0 = \frac{v^2}{gH},$$ $$\boxed{\alpha_0 = \arctan\sqrt[4]{\frac{v^2}{gH}}}\,.$$

**Grading.**

-   Identifying that the only horizontal force on the weight is $T\sin\alpha$ **0.3 pts**

-   Writing Newton's second law horizontally: $T\sin\alpha = M|\ddot{x}|$ **0.3 pts**

-   Substituting the expression for $|\ddot{x}|$ from part (ii) **0.2 pts**

-   Isolating $T$ to obtain $T = Mv^2\cos^3\alpha/(H\sin^4\alpha)$ **0.2 pts**

-   Correctly setting up the vertical force balance $T\cos\alpha + N = Mg$ **0.5 pts**

-   Correct lift-off condition $N = 0$, i.e., $T\cos\alpha_0 = Mg$ **0.5 pts**

-   Algebraic manipulation to $\tan^4\alpha_0 = v^2/(gH)$ **0.5 pts**

-   Final answer $\alpha_0 = \arctan\sqrt[4]{v^2/(gH)}$ **0.5 pts**

*Official solution (NBPhO 2026, solutions v1.2 with grading scheme), from the [official PDF](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf); text as transcribed by [olimpicos.net](https://olimpicos.net/nbpho/).*

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Rope/String (object)|Rope/String]], [[Block (object)|Block]]
**Fonte:** [Testo (PDF) — p.2](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=2) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)


<div class="qlang-split" data-lang="it"></div>

**La fune sulla sbarra (5 punti) — Jaan Kalda**

Una fune è gettata sopra una sbarra orizzontale per trazioni, posta ad altezza $H$ sopra un pavimento senza attrito. Un'estremità della fune è legata a un peso pesante appoggiato sul pavimento; l'altra viene tirata in modo che la lunghezza del tratto di fune tra la sbarra e il peso diminuisca a ritmo costante $v$. In un certo istante questo tratto forma un angolo $\alpha$ con la verticale (vedi figura); il peso è ancora a contatto con il pavimento. L'accelerazione di gravità è $g$.

![[NBPhO_2026_Q6_fig1.png]]

**i)** *(1 punto)* Trova la velocità $u$ del peso.

**ii)** *(1 punto)* Trova il modulo dell'accelerazione del peso.

**iii)** *(3 punti)* Trova l'angolo $\alpha_0$ al quale il peso si stacca dal pavimento.

**Risposta:** i) $u = v/\sin\alpha$; ii) $|\ddot x| = \dfrac{v^2}{H}\cot^3\alpha$; iii) $\alpha_0 = \arctan\sqrt[4]{v^2/(gH)}$

**Soluzione:** La soluzione ufficiale completa (in inglese) è nella versione originale di questo quesito e nel PDF ufficiale.

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Rope/String (object)|Rope/String]], [[Block (object)|Block]]
**Fonte:** [Testo (PDF) — p.2](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=2) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)



<span class="atom-split" id="q07" data-atom="q07" data-title="NBPhO 2026 — Problema 7" data-tags="kg/prova,paese/Nordic-Baltic,comp/Nordic,tipo-gara/individuale,livello/internazionale,difficolta/4,multidisciplina/mono,topic/fluid-mechanics,argomento/fluidi,object/pipe-tube"></span>

<div class="qlang-switch" data-default="en"></div>



**Water hose (5 points) — Ralf Robert Paabo**

A liquid with density $\rho$ flows in a pipe with diameter $D$. At low mean speeds $v$, the flow is laminar (uniform and without vortices); the drag force per unit area $F_L = \mu\,\mathrm{d}u/\mathrm{d}r$ on the liquid comes from wall friction, where $\mu$ (unit $\mathrm{Pa\cdot s}$) is the dynamic viscosity, $u$ is the local speed, and $r$ is the distance from the axis. When $v$ is large enough, the flow becomes turbulent, filled with vortices whose velocity fluctuations are of the order of $v$ itself. The drag $F_T$ still comes from wall friction $\mu\,\mathrm{d}u/\mathrm{d}r$, but the vortices squeeze the near-wall layer (across which the flow speed drops from $v$ to zero) to a thickness $\delta \ll D$ where the drag force per unit area $\mu v/\delta$ is of the order of the dynamic pressure $\rho v^2$ carried by the vortices.

**i)** *(1.5 points)* At any given flow speed, only one of the two mechanisms actually dominates the drag – but the dimensionless ratio of the two characteristic drag scales, $R = F_T/F_L$, can be computed regardless and tells us which regime we are in. This ratio is the Reynolds number. Express $R$ as a product of powers of $\rho$, $v$, $D$, and $\mu$.

A water pump with output power $P = 250\,\mathrm{W}$ is used for watering a garden; it draws water from a depth $h = 20\,\mathrm{m}$ directly into a hose of length $s = 40\,\mathrm{m}$ and inner diameter $d = 13\,\mathrm{mm}$. Water leaves the end of the hose at a volumetric rate $Q = 25\,\mathrm{L\cdot min^{-1}}$. Density of water is $\rho_w = 1000\,\mathrm{kg\cdot m^{-3}}$, viscosity $\mu_w = 1.1\times10^{-3}\,\mathrm{Pa\cdot s}$ and gravitational acceleration is $g = 9.8\,\mathrm{N\cdot kg^{-1}}$.

**ii)** *(0.5 points)* Determine the flow type in the hose. It is known that flow is turbulent when $R > 2500$ and laminar otherwise.

**iii)** *(3 points)* The gardener is cleaning tools by directing the water jet onto dirty surfaces. Where the jet meets the surface, the pressure rises above atmospheric; this excess pressure is what removes dirt. To make cleaning more efficient, the gardener attaches a spray nozzle set to narrow-jet mode, so that the exit cross-section of the nozzle is $f = 15\,\%$ of the hose's cross-section. By what factor does the volumetric flow rate $Q$ change? By what factor does the excess pressure at the dirty surface change? Find both within $1\,\%$ accuracy. You are allowed to use numerical methods.

**Risposta:** i) $R = \rho v D/\mu$; ii) turbulent; iii) $Q'/Q \approx 0.88$, excess pressure $\times 35$

**Soluzione:**

![[NBPhO_2026_S7_p1.png]]

![[NBPhO_2026_S7_p2.png]]

![[NBPhO_2026_S7_p3.png]]

*Official solution (NBPhO 2026, solutions v1.2 with grading scheme), from the [official PDF](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf); text as transcribed by [olimpicos.net](https://olimpicos.net/nbpho/).*

**Topic:** [[Fluid Mechanics]]
**Metodi:** [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Bernoulli's Equation (metodo)|Bernoulli's Equation]], [[Continuity Equation (metodo)|Continuity Equation]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.2](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=2) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)


<div class="qlang-split" data-lang="it"></div>

**Tubo dell'acqua (5 punti) — Ralf Robert Paabo**

Un liquido di densità $\rho$ scorre in un tubo di diametro $D$. A basse velocità medie $v$ il flusso è laminare (uniforme e senza vortici); la forza di attrito per unità di superficie $F_L = \mu\,\mathrm{d}u/\mathrm{d}r$ sul liquido è dovuta all'attrito con la parete, dove $\mu$ (in $\mathrm{Pa\cdot s}$) è la viscosità dinamica, $u$ la velocità locale e $r$ la distanza dall'asse. Quando $v$ è abbastanza grande, il flusso diventa turbolento, pieno di vortici le cui fluttuazioni di velocità sono dell'ordine di $v$. L'attrito $F_T$ è ancora dovuto all'attrito con la parete, $\mu\,\mathrm{d}u/\mathrm{d}r$, ma i vortici comprimono lo strato vicino alla parete (in cui la velocità passa da $v$ a zero) fino a uno spessore $\delta \ll D$, tale che la forza per unità di superficie $\mu v/\delta$ sia dell'ordine della pressione dinamica $\rho v^2$ trasportata dai vortici.

**i)** *(1,5 punti)* A una data velocità domina solo uno dei due meccanismi, ma il rapporto adimensionale tra le due scale caratteristiche di attrito, $R = F_T/F_L$, si può calcolare comunque e indica in quale regime ci si trova. Questo rapporto è il numero di Reynolds. Esprimi $R$ come prodotto di potenze di $\rho$, $v$, $D$ e $\mu$.

Una pompa di potenza utile $P = 250\,\mathrm{W}$ è usata per annaffiare un giardino; aspira l'acqua da una profondità $h = 20\,\mathrm{m}$ direttamente in un tubo di lunghezza $s = 40\,\mathrm{m}$ e diametro interno $d = 13\,\mathrm{mm}$. L'acqua esce dall'estremità del tubo con portata volumetrica $Q = 25\,\mathrm{L\cdot min^{-1}}$. La densità dell'acqua è $\rho_w = 1000\,\mathrm{kg\cdot m^{-3}}$, la viscosità $\mu_w = 1{,}1\times10^{-3}\,\mathrm{Pa\cdot s}$ e l'accelerazione di gravità $g = 9{,}8\,\mathrm{N\cdot kg^{-1}}$.

**ii)** *(0,5 punti)* Determina il tipo di flusso nel tubo. È noto che il flusso è turbolento se $R > 2500$ e laminare altrimenti.

**iii)** *(3 punti)* Il giardiniere pulisce gli attrezzi dirigendo il getto d'acqua sulle superfici sporche. Dove il getto colpisce la superficie la pressione supera quella atmosferica; è questa sovrapressione a rimuovere lo sporco. Per pulire meglio il giardiniere monta una lancia regolata in modalità getto stretto, così che la sezione di uscita sia $f = 15\,\%$ della sezione del tubo. Di che fattore cambia la portata volumetrica $Q$? Di che fattore cambia la sovrapressione sulla superficie sporca? Trova entrambi con un'accuratezza dell'$1\,\%$. Puoi usare metodi numerici.

**Risposta:** i) $R = \rho v D/\mu$; ii) turbolento; iii) $Q'/Q \approx 0{,}88$, sovrapressione $\times 35$

**Soluzione:** La soluzione ufficiale completa (in inglese) è nella versione originale di questo quesito e nel PDF ufficiale.

**Topic:** [[Fluid Mechanics]]
**Metodi:** [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Bernoulli's Equation (metodo)|Bernoulli's Equation]], [[Continuity Equation (metodo)|Continuity Equation]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.2](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=2) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)



<span class="atom-split" id="q08" data-atom="q08" data-title="NBPhO 2026 — Problema 8" data-tags="kg/prova,paese/Nordic-Baltic,comp/Nordic,tipo-gara/individuale,livello/internazionale,difficolta/4,multidisciplina/mono,topic/oscillations-and-waves,argomento/onde-e-oscillazioni"></span>

<div class="qlang-switch" data-default="en"></div>



**Jet sound (8 points) — Teo Kai Wen, Jaan Kalda**

A fighter jet flies past a ground observer along a straight horizontal line at constant supersonic velocity, passing at closest-approach distance $d$. The jet's Mach number is $M = v/c > 1$, where $v$ is the speed of the jet and $c$ is the speed of sound. The air is at rest. The observer records the sound as a spectrogram (intensity colour-coded as a function of frequency and time; black means silence), shown below.

![[NBPhO_2026_Q8_fig1.png]]

**i)** *(2 points)* Explain, qualitatively, the features seen in the spectrogram.

**ii)** *(3 points)* From the spectrogram, find the Mach number $M$.

**iii)** *(3 points)* Find the closest-approach distance $d$ given that $c = 340\,\mathrm{m\cdot s^{-1}}$.

**Risposta:** ii) $M = 1.5$; iii) $d = \dfrac{\tau c}{1-\sqrt{1-M^{-2}}} \approx 1.5\,\mathrm{km}$

**Soluzione:**

**i)** *(2 points)* The spectrogram shows four qualitative features.

*(a) Silence before $t_0$.* Since sound travels at a finite pace, it takes some time to hear the sound (this feature would also hold for a non-supersonic plane).

*(b) Broadband spike at $t_0$.* An entire interval of past emissions reaches the observer simultaneously, forming a shockwave front --- the "boom" --- that registers as a short, strong pressure peak at the sensor and represents the superposition of a wide range of frequencies.

*(c) Two simultaneous tones for $t > t_0$.* For each reception time $t > t_0$ (let us set $t = 0$), two distinct past emission events 1 and 2 contribute. Suppose the sound from event 1, emitted at time $-t_1$ from distance $L_1$, reaches us now. Since the jet is supersonic, there is a second emission --- event 2 at a later time $-t_2$, distance $L_2$ from us, separated from event 1 by distance $L_0$ along the trajectory --- such that $$\frac{L_0}{v} = \frac{L_1 - L_2}{c},$$ i.e., the jet's traversal time from 1 to 2 equals the sound delay $(L_1 - L_2)/c$. Both arrivals are Doppler-shifted, but to different degrees: the sound coming from behind (event 1, jet far upstream and approaching the observer) is blue-shifted (upper ridge), while the sound coming from ahead (event 2, jet receding past closest approach) is red-shifted (lower ridge).

*(d) Ridges decrease in time.* Both ridges diverge at the boom (the broadband spike at $t_0$) and decrease monotonically afterward, tending toward finite asymptotic values as $t \to \infty$.

![[NBPhO_2026_S8_fig1.png]]

**Grading.**

-   Silence before $t_0$, explained as the sound not reachin the receiver yet **0.2 pts**

-   Sonic boom at $t_0$, explained as the shockwave front producing a short broadband pressure peak **0.5 pts**

-   Associating the changes in frequency with the Doppler effect **0.2 pts**

-   Explanation of two simultaneous tones for $t > t_0$, with two emission events reaching the observer at the same time **0.6 pts**

-   Explanation of ridges diverging at the boom and tending asymptotically to finite values as $t \to \infty$ **0.5 pts**

**ii)** *(3 points)* As $t \to \infty$, the jet's velocity becomes nearly aligned with the line of sight, so the radial velocity (component along the line from source to observer) approaches $\pm v$. The classical Doppler formula for a source moving radially at speed $v_r$ relative to a stationary observer is $$f = \frac{f_0}{|1 \pm v_r/c|},$$ with the $-$ sign for an approaching source ($v_r > 0$, source moving toward observer) and $+$ for a receding source. Applied to the two asymptotic limits with $|v_r| \to v$: $$f_2 = \frac{f_0}{M-1} \qquad \text{(upper ridge, approaching),}$$ $$f_1 = \frac{f_0}{M+1} \qquad \text{(lower ridge, receding).}$$ Combining: $\frac{1}{f_1} - \frac{1}{f_2} = \frac{2}{f_0}$ and $\frac{1}{f_1} + \frac{1}{f_2} = \frac{2M}{f_0}$, so $$f_0 = \frac{2f_1f_2}{f_2 - f_1}, \qquad M = \frac{f_2 + f_1}{f_2 - f_1}.$$ Reading from the spectrogram: $f_1 \approx 320\,\mathrm{Hz}$ and $f_2 \approx 1600\,\mathrm{Hz}$. Therefore $$f_0 = \frac{2 \cdot 320 \cdot 1600}{1280} = 800\,\mathrm{Hz},$$ $$M = \frac{1920}{1280} = 1.5.$$

**Grading.**

-   Recognising that the radial velocity tends to $\pm v$ in the asymptotic limits **0.5 pts**

-   Correct Doppler formula $f = f_0/|1 \pm v_r/c|$ **0.5 pts**

-   Asymptotic upper-ridge value $f_2 = f_0/(M-1)$ **0.2 pts**

-   Asymptotic lower-ridge value $f_1 = f_0/(M+1)$ **0.2 pts**

-   Reading $f_1 \in [310, 350]\,\mathrm{Hz}$ and $f_2 \in [1500, 1700]\,\mathrm{Hz}$ from the spectrogram (0.2p each) **0.4 pts**

-   Correct symbolic form $M = (f_2 + f_1)/(f_2 - f_1)$ **0.8 pts**

-   Numerical answer $M \in [1.35, 1.65]$ **0.4 pts**

**iii)** *(3 points)* The closest-approach signal is the sound emitted when the jet's radial velocity is zero (jet directly overhead $B$). At that emission, $v_r = 0$, so the received frequency equals $f_0$. From part (ii)'s asymptotic relations we have $$f_0 = \frac{2f_1f_2}{f_2 - f_1} = \frac{2 \cdot 320 \cdot 1600}{1280} = 800\,\mathrm{Hz}.$$ The observer hears this frequency on the *lower* ridge (the receding branch crosses $f_0$ as the jet passes overhead). Read $t_1$ from the spectrogram as the time when the lower ridge crosses $f_0 = 800\,\mathrm{Hz}$.

Set $t = 0$ at the moment the jet emits the sound that the observer eventually hears as the boom; call this position $A$. Let $J$ denote the jet's position when the observer hears the boom, and $O$ the observer. Then $$|AJ| = vt, \qquad |AO| = ct,$$ and the boom-tangency condition fixes $\angle AOJ = \pi/2$ (the wavefront from $A$ just grazes the observer). In particular, $\sin(\angle AJO) = |AO|/|AJ| = 1/M$, identifying $\angle AJO$ as the Mach angle $\alpha$.

![[NBPhO_2026_S8_fig2.png]]

Let $B$ be the foot of perpendicular from $O$ onto trajectory $AJ$, so $|OB| = d$ (closest-approach distance). The right triangles $\triangle JOA$ and $\triangle OBA$ are similar (both right-angled, sharing the angle at $A$). From this similarity: $$|BA| = \frac{|OA|^2}{|JA|} = \frac{ct}{M},$$ $$d = \frac{|OA| \cdot |JO|}{|JA|} = \frac{ct\sqrt{M^2 - 1}}{M}.$$ The observer hears the boom at time $t$ and the closest-approach signal at time $|BA|/v + d/c$. The lag is $$\tau = \frac{|BA|}{v} + \frac{d}{c} - t,$$ $$\tau = \frac{t}{M^2} + \frac{t\sqrt{M^2 - 1}}{M} - t.$$ Eliminating $t$ via $t = dM/(c\sqrt{M^2 - 1})$ and simplifying: $$\tau c = d\left(1 - \sqrt{1 - M^{-2}}\right),$$ $$\boxed{d = \frac{\tau c}{1 - \sqrt{1 - M^{-2}}}}\,.$$ Reading from the spectrogram: $t_0 \approx 3.3\,\mathrm{s}$ (boom onset) and $t_1 \approx 4.4\,\mathrm{s}$ (lower ridge crosses $800\,\mathrm{Hz}$), so $\tau \approx 1.1\,\mathrm{s}$. With $M = 1.5$: $$1 - \sqrt{1 - 1/2.25} = 1 - \sqrt{0.5556} \approx 0.255,$$ $$d = \frac{340 \cdot 1.1}{0.255} \approx 1.5\,\mathrm{km}.$$

**Grading.**

-   Computing $f_0 = 2f_1f_2/(f_2 - f_1)$ with $f_0 \in [720, 910]\,\mathrm{Hz}$ using the asymptotes from part (ii) **0.4 pts**

-   Using Mach cone and the corresponding condition $\sin\alpha = 1/M$ **0.4 pts**

-   Recognising that at the point of closest approach, $f = f_0$ (no Doppler shift) **0.3 pts**

-   Expressing the time $t_0$ between the emission (event A) and reception of the sonic boom in terms of $d$ **0.5 pts**

-   Expressing the time $t_1$ between event A and reception of the wave emitted at B in terms of $d$ **1.0 pts**

-   Reading $t_0, t_1$ from the spectrogram and computing $\tau \in [0.85, 1.15]\,\mathrm{s}$ **0.2 pts**

-   Numerical answer if approach correct $d \in [1.0, 1.7]\,\mathrm{km}$ **0.2 pts**

*Official solution (NBPhO 2026, solutions v1.2 with grading scheme), from the [official PDF](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf); text as transcribed by [olimpicos.net](https://olimpicos.net/nbpho/).*

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.2](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=2) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)


<div class="qlang-split" data-lang="it"></div>

**Il suono del jet (8 punti) — Teo Kai Wen, Jaan Kalda**

Un caccia sorvola un osservatore a terra lungo una retta orizzontale a velocità supersonica costante, passando alla distanza minima $d$. Il numero di Mach del jet è $M = v/c > 1$, dove $v$ è la velocità del jet e $c$ quella del suono. L'aria è ferma. L'osservatore registra il suono come spettrogramma (intensità codificata a colori in funzione di frequenza e tempo; il nero indica silenzio), mostrato qui sotto.

![[NBPhO_2026_Q8_fig1.png]]

**i)** *(2 punti)* Spiega qualitativamente le caratteristiche visibili nello spettrogramma.

**ii)** *(3 punti)* Dallo spettrogramma ricava il numero di Mach $M$.

**iii)** *(3 punti)* Trova la distanza minima $d$ sapendo che $c = 340\,\mathrm{m\cdot s^{-1}}$.

**Risposta:** ii) $M = 1{,}5$; iii) $d = \dfrac{\tau c}{1-\sqrt{1-M^{-2}}} \approx 1{,}5\,\mathrm{km}$

**Soluzione:** La soluzione ufficiale completa (in inglese) è nella versione originale di questo quesito e nel PDF ufficiale.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.2](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=2) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)



<span class="atom-split" id="q09" data-atom="q09" data-title="NBPhO 2026 — Problema 9" data-tags="kg/prova,paese/Nordic-Baltic,comp/Nordic,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/mono,topic/thermodynamics,argomento/termodinamica,object/gas"></span>

<div class="qlang-switch" data-default="en"></div>



**CO2 fire extinguisher (8 points) — Jaan Kalda**

A fire extinguisher contains liquid CO$_2$ in equilibrium with its saturated vapour at room temperature $T_0 = 298\,\mathrm{K}$. Consider two scenarios: **(a)** the container is held upside-down so that the liquid phase flows to the nozzle; **(b)** it is held upright so that the saturated vapour flows to the nozzle. The nozzle has the shape of a converging--diverging channel (see figure), and the flow through it can be modelled as reversible and adiabatic. Atmospheric pressure is $p_\mathrm{atm} = 1.0\times 10^{5}\,\mathrm{Pa}$; the CO$_2$ triple point is at $(T_\mathrm{t}, p_\mathrm{t}) = (216.6\,\mathrm{K}, 0.518\,\mathrm{MPa})$.

![[NBPhO_2026_Q9_fig1.png]]

The temperature--entropy diagram of CO$_2$ with isobars is provided below.

![[NBPhO_2026_Q9_fig2.png]]

**i)** *(1.5 points)* Identify the phase or phases present and their temperature in the stream emerging from the nozzle.

**ii)** *(3.5 points)* Find the mass fraction $x$ of solid CO$_2$ in the stream for both scenarios.

**iii)** *(3 points)* Now consider an arbitrary pure substance in equilibrium with its saturated vapour at temperature $T$, and suppose that only the vapour (not the liquid) escapes through a nozzle, undergoing reversible adiabatic expansion. Under what condition on the vaporisation latent heat $L$ (per unit mass), the isobaric specific heat of the vapour $c_p$, and the temperature $T$ does a fraction of the escaping vapour condense into droplets, even for a vanishingly small pressure drop? Does condensation occur for water vapour at $T = 373\,\mathrm{K}$ ($L \approx 2260\,\mathrm{kJ\cdot kg^{-1}}$, $c_p \approx 2.0\,\mathrm{kJ\cdot kg^{-1}\cdot K^{-1}}$)?

**Risposta:** ii) $x_a \approx 0.40$, $x_b \approx 0.25$; iii) condensation iff $L/(c_pT) > 1$ — yes for water ($\approx 3.0$)

**Soluzione:**

**i)** *(1.5 points)* At atmospheric pressure $p_{\mathrm{atm}} = 1.0 \times 10^5\,\mathrm{Pa}$, which is below the triple-point pressure $p_t = 5.18 \times 10^5\,\mathrm{Pa}$, no liquid CO$_2$ can exist. The exit stream is therefore either pure vapour, pure solid, or a solid--vapour mixture. Pure solid is impossible: a rigid (incompressible) solid cannot expand or accelerate through a converging--diverging nozzle. So the exit is either pure vapour, or a solid--vapour mixture; in the latter case the temperature must be the sublimation temperature at 1 atm, $T_{\mathrm{sub}} \approx 195\,\mathrm{K}$ ($\approx -78\,^{\circ}\mathrm{C}$).

Tracing the isentrope from the initial state to $p = 1$ bar on the $T$--$s$ diagram (provided): for both scenarios (a) and (b), the trajectory crosses the saturation boundary into the two-phase region. Hence the stream is a solid--vapour mixture at $T \approx 195\,\mathrm{K}$ in both cases.

**Grading.**

-   Recognising that liquid is impossible at $p_{\mathrm{atm}} < p_t$, so the stream is solid, vapour, or a mixture **0.5 pts**

-   Excluding pure solid (cannot adiabatically expand through nozzle) **0.2 pts**

-   If solid--vapour coexistence, identifying $T = T_{\mathrm{sub}}(1\,\mathrm{atm}) \approx 195\,\mathrm{K}$ ($\approx -78\,^{\circ}\mathrm{C}$), within $\pm 10\,\mathrm{K}$ **0.3 pts**

-   Tracing the isentrope on the $T$--$s$ diagram and concluding the stream is in the two-phase region for one scenario **0.3 pts**

-   Two-phase for both scenarios **0.2 pts**

**ii)** *(3.5 points)* The expansion through the nozzle is reversible and adiabatic, so it is *isentropic*: the entropy per unit mass $s$ is conserved between the inlet and the exit. On the $T$--$s$ diagram, the trajectory is therefore vertical (constant $s$) until it crosses a phase boundary or a chosen isobar.

The exit pressure is $p_{\mathrm{atm}} = 1$ bar, well below the triple-point pressure $p_t = 5.18$ bar. From part (i), the exit state is in the two-phase (solid+vapour) region at $T_{\mathrm{sub}}(1\,\mathrm{bar}) \approx 195\,\mathrm{K}$ ($-78\,^{\circ}\mathrm{C}$).

**Lever rule.** In the two-phase region at fixed $p$, $T$, the total entropy per unit mass for a mixture with mass fraction $x$ of solid (and $1-x$ vapour) is $$s_{\mathrm{end}} = x\,s_{\mathrm{sol}} + (1-x)\,s_{\mathrm{vap}},$$ $$x = \frac{s_{\mathrm{vap}} - s_{\mathrm{end}}}{s_{\mathrm{vap}} - s_{\mathrm{sol}}},$$ where $s_{\mathrm{sol}}$ and $s_{\mathrm{vap}}$ are the entropies of pure solid and pure vapour at the boundaries of the two-phase region at $p = 1$ bar.

**Reading entropies from the $T$--$s$ diagram.** At $p = 1$ bar (sublimation isobar at $T \approx -78\,^{\circ}\mathrm{C}$), the boundaries are $$s_{\mathrm{sol}} \approx 400(50)\,\frac{\mathrm{J}}{\mathrm{kg\cdot K}}, \qquad s_{\mathrm{vap}} \approx 3250(50)\,\frac{\mathrm{J}}{\mathrm{kg\cdot K}}.$$

The initial entropies for the two scenarios are read at $T_0 = 298$ K ($25\,^{\circ}\mathrm{C}$) on the saturation dome:

-   Scenario (a), saturated liquid at $T_0$: $s_a \approx 2100(50)\,\frac{\mathrm{J}}{\mathrm{kg\cdot K}}$.

-   Scenario (b), saturated vapour at $T_0$: $s_b \approx 2550(50)\,\frac{\mathrm{J}}{\mathrm{kg\cdot K}}$.

**Mass fractions.** Applying the lever rule to each: $$\begin{aligned}
x_a &= \frac{3250 - 2100}{3250 - 400} = \frac{1150}{2850} \approx 0.40, \\
x_b &= \frac{3250 - 2550}{3250 - 400} = \frac{700}{2850} \approx 0.25.
\end{aligned}$$

So the liquid-fed extinguisher (a) produces a stream that is $\sim$40% dry ice (and 60% vapour) by mass, while the vapour-fed extinguisher (b) produces a stream that is only $\sim$25% dry ice. The liquid scenario yields about 1.6 times more solid CO$_2$ per unit mass discharged --- which is why fire extinguishers are designed to draw liquid.

**Grading.**

-   Recognising that "reversible adiabatic" means isentropic ($s = \mathrm{const}$), so the end-point is found by tracing vertically downward on the $T$--$s$ diagram **0.6 pts**

-   Deriving the lever rule for mass fraction $x$ in the two-phase region: $x = (s_{\mathrm{vap}} - s_{\mathrm{end}})/(s_{\mathrm{vap}} - s_{\mathrm{sol}})$ **0.7 pts**

-   Reading the initial entropy $s_a$ from the saturated-liquid line at $T_0 = 298$ K (scenario a) **0.5 pts**

-   Reading the initial entropy $s_b$ from the saturated-vapour line at $T_0$ (scenario b) **0.5 pts**

-   Reading $s_{\mathrm{sol}}$ at the 1-bar solid boundary **0.3 pts**

-   Reading $s_{\mathrm{vap}}$ at the 1-bar vapour boundary **0.3 pts**

-   Computing $x_a \approx 0.40 \pm 0.05$ for scenario (a) **0.3 pts**

-   Computing $x_b \approx 0.25 \pm 0.05$ for scenario (b) **0.3 pts**

**iii)** *(3 points)* Consider an infinitesimal isentropic (reversible adiabatic) expansion of the saturated vapour from $(T, p_{\mathrm{sat}}(T))$. Two trajectories meet at this point: the saturation curve $p_{\mathrm{sat}}(T)$, and the adiabat (constant entropy). The expansion follows the adiabat. If the adiabat falls *below* the saturation curve in $T$--$p$ space (i.e., the vapour cools more slowly than the saturation temperature drops with pressure), then a finite fraction of the vapour condenses into droplets. Otherwise the expansion remains in the pure-vapour region.

**Saturation slope (Clausius--Clapeyron).** The saturated vapour above a liquid has number density $n_{\mathrm{vap}}$ in thermal equilibrium with the liquid. By the Boltzmann distribution, the probability of a molecule occupying the vapour state (energy $\ell$ per molecule above the liquid) versus the liquid state is $$\frac{n_{\mathrm{vap}}}{n_{\mathrm{liq}}} \propto \exp\!\left(-\frac{\ell}{k_B T}\right).$$ Treating $n_{\mathrm{liq}}$ as $T$-independent and using $p_{\mathrm{sat}} = n_{\mathrm{vap}} k_B T \approx (\mathrm{const})\cdot T\cdot\exp(-\ell/k_B T)$, the dominant temperature dependence is exponential. Per unit mass, $\ell/k_B = L/R_s$ where $R_s$ is the specific gas constant of the vapour. Differentiating $\ln p_{\mathrm{sat}}$: $$\frac{1}{p_{\mathrm{sat}}}\frac{\mathrm{d}p_{\mathrm{sat}}}{\mathrm{d}T} = \frac{L}{R_s T^2}.$$ Equivalently, $$\left.\frac{\mathrm{d}T}{\mathrm{d}p}\right|_{\mathrm{sat}} = \frac{R_s T^2}{pL}.$$

**Adiabat slope.** For the ideal-gas adiabat $T p^{(1-\gamma)/\gamma} = \mathrm{const}$, with $R_s = c_p - c_v$ and $\gamma = c_p/c_v$: $$\left.\frac{\mathrm{d}T}{\mathrm{d}p}\right|_{\mathrm{adiab}} = \frac{R_s T}{c_p p}.$$

**Condensation condition.** The vapour condenses on expansion iff the adiabat cools less than the saturation curve, i.e. $\left.\frac{\mathrm{d}T}{\mathrm{d}p}\right|_{\mathrm{adiab}} < \left.\frac{\mathrm{d}T}{\mathrm{d}p}\right|_{\mathrm{sat}}$: $$\frac{R_s T}{c_p p} < \frac{R_s T^2}{pL},$$ $$\boxed{L > c_p T}.$$

**Numerical check (water at $T = 373$ K).** $L = 2260\,\frac{\mathrm{kJ}}{\mathrm{kg}}$, $c_p = 2.0\,\frac{\mathrm{kJ}}{\mathrm{kg\cdot K}}$: $$\frac{L}{c_p T} = \frac{2260}{2.0 \cdot 373} \approx 3.0 > 1.$$

So water vapour does condense on isentropic expansion. This is precisely why steam from a kettle appears as a visible white plume of fine droplets, rather than as invisible pure water vapour.

**iv)** *(? points)* Consider an infinitesimal isentropic (reversible adiabatic) expansion of the saturated vapour from $(T, p_{\mathrm{sat}}(T))$. Two trajectories meet at this point: the saturation curve $p_{\mathrm{sat}}(T)$, and the adiabat (constant entropy). The expansion follows the adiabat. If the adiabat falls *below* the saturation curve in $T$--$p$ space (i.e., the vapour cools more slowly than the saturation temperature drops with pressure), then a finite fraction of the vapour condenses into droplets. Otherwise the expansion remains in the pure-vapour region.

**Saturation slope (Clausius--Clapeyron).** The saturated vapour above a liquid has number density $n_{\mathrm{vap}}$ in thermal equilibrium with the liquid. By the Boltzmann distribution, the probability of a molecule occupying the vapour state (energy $\ell$ per molecule above the liquid) versus the liquid state is $$\frac{n_{\mathrm{vap}}}{n_{\mathrm{liq}}} \propto \exp\!\left(-\frac{\ell}{k_B T}\right).$$ Treating $n_{\mathrm{liq}}$ as $T$-independent and using $p_{\mathrm{sat}} = n_{\mathrm{vap}} k_B T \approx (\mathrm{const})\cdot T\cdot\exp(-\ell/k_B T)$, the dominant temperature dependence is exponential. Per unit mass, $\ell/k_B = L/R_s$ where $R_s$ is the specific gas constant of the vapour. Differentiating $\ln p_{\mathrm{sat}}$: $$\frac{1}{p_{\mathrm{sat}}}\frac{\mathrm{d}p_{\mathrm{sat}}}{\mathrm{d}T} = \frac{L}{R_s T^2}.$$ Equivalently, $$\left.\frac{\mathrm{d}T}{\mathrm{d}p}\right|_{\mathrm{sat}} = \frac{R_s T^2}{pL}.$$

**Adiabat slope.** For the ideal-gas adiabat $T p^{(1-\gamma)/\gamma} = \mathrm{const}$, with $R_s = c_p - c_v$ and $\gamma = c_p/c_v$: $$\left.\frac{\mathrm{d}T}{\mathrm{d}p}\right|_{\mathrm{adiab}} = \frac{R_s T}{c_p p}.$$

**Condensation condition.** The vapour condenses on expansion iff the adiabat cools less than the saturation curve, i.e. $\left.\frac{\mathrm{d}T}{\mathrm{d}p}\right|_{\mathrm{adiab}} < \left.\frac{\mathrm{d}T}{\mathrm{d}p}\right|_{\mathrm{sat}}$: $$\frac{R_s T}{c_p p} < \frac{R_s T^2}{pL},$$ $$\boxed{L > c_p T}.$$

**Numerical check (water at $T = 373$ K).** $L = 2260\,\frac{\mathrm{kJ}}{\mathrm{kg}}$, $c_p = 2.0\,\frac{\mathrm{kJ}}{\mathrm{kg\cdot K}}$: $$\frac{L}{c_p T} = \frac{2260}{2.0 \cdot 373} \approx 3.0 > 1.$$

So water vapour does condense on isentropic expansion. This is precisely why steam from a kettle appears as a visible white plume of fine droplets, rather than as invisible pure water vapour.

**Grading.**

-   Setting up the comparison: condensation occurs iff the adiabat lies below the saturation curve in $T$--$p$ space **0.5 pts**

-   Deriving the saturation slope via Boltzmann: $n_{\mathrm{vap}}/n_{\mathrm{liq}} \propto \exp(-\ell/k_B T)$ (those who know and use the Clausius--Clapeyron equation do not need to derive it) **0.6 pts**

-   Obtaining the Clausius--Clapeyron form $\frac{\mathrm{d}p_{\mathrm{sat}}}{\mathrm{d}T} = pL/(R_s T^2)$ **0.6 pts**

-   Adiabat slope $\frac{\mathrm{d}T}{\mathrm{d}p} = R_s T/(c_p p)$ from ideal-gas adiabatic relation **0.4 pts**

-   Comparing slopes to obtain the condition $L > c_p T$ **0.6 pts**

-   Numerical check for water giving $L/(c_p T) \approx 3 > 1$, hence condensation **0.3 pts**

*Official solution (NBPhO 2026, solutions v1.2 with grading scheme), from the [official PDF](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf); text as transcribed by [olimpicos.net](https://olimpicos.net/nbpho/).*

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Gas (object)|Gas]]
**Fonte:** [Testo (PDF) — p.2](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=2) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)


<div class="qlang-split" data-lang="it"></div>

**Estintore a CO₂ (8 punti) — Jaan Kalda**

Un estintore contiene CO$_2$ liquida in equilibrio con il suo vapore saturo a temperatura ambiente $T_0 = 298\,\mathrm{K}$. Considera due casi: **(a)** l'estintore è tenuto capovolto, così che verso l'ugello fluisce la fase liquida; **(b)** è tenuto diritto, così che verso l'ugello fluisce il vapore saturo. L'ugello ha la forma di un condotto convergente–divergente (vedi figura) e il flusso al suo interno si può modellare come reversibile e adiabatico. La pressione atmosferica è $p_\mathrm{atm} = 1{,}0\times 10^{5}\,\mathrm{Pa}$; il punto triplo della CO$_2$ è $(T_\mathrm{t}, p_\mathrm{t}) = (216{,}6\,\mathrm{K}, 0{,}518\,\mathrm{MPa})$.

![[NBPhO_2026_Q9_fig1.png]]

Qui sotto è riportato il diagramma temperatura–entropia della CO$_2$ con le isobare.

![[NBPhO_2026_Q9_fig2.png]]

**i)** *(1,5 punti)* Individua la fase o le fasi presenti nel getto che esce dall'ugello e la loro temperatura.

**ii)** *(3,5 punti)* Trova la frazione in massa $x$ di CO$_2$ solida nel getto in entrambi i casi.

**iii)** *(3 punti)* Considera ora una sostanza pura qualsiasi in equilibrio con il suo vapore saturo alla temperatura $T$, e supponi che dall'ugello esca solo il vapore (non il liquido), subendo un'espansione adiabatica reversibile. A quale condizione sul calore latente di vaporizzazione $L$ (per unità di massa), sul calore specifico a pressione costante del vapore $c_p$ e sulla temperatura $T$ una parte del vapore che esce condensa in goccioline, anche per una caduta di pressione piccolissima? La condensazione avviene per il vapore acqueo a $T = 373\,\mathrm{K}$ ($L \approx 2260\,\mathrm{kJ\cdot kg^{-1}}$, $c_p \approx 2{,}0\,\mathrm{kJ\cdot kg^{-1}\cdot K^{-1}}$)?

**Risposta:** ii) $x_a \approx 0{,}40$, $x_b \approx 0{,}25$; iii) condensa se $L/(c_pT) > 1$ — sì per l'acqua ($\approx 3{,}0$)

**Soluzione:** La soluzione ufficiale completa (in inglese) è nella versione originale di questo quesito e nel PDF ufficiale.

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Gas (object)|Gas]]
**Fonte:** [Testo (PDF) — p.2](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=2) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)



<span class="atom-split" id="q10" data-atom="q10" data-title="NBPhO 2026 — Problema 10" data-tags="kg/prova,paese/Nordic-Baltic,comp/Nordic,tipo-gara/individuale,livello/internazionale,difficolta/4,multidisciplina/mono,topic/magnetism,argomento/elettromagnetismo,object/magnet,object/magnetic-dipole"></span>

<div class="qlang-switch" data-default="en"></div>



**Ball magnet (10 points) — Jaan Kalda**

*Experimental problem.* *Tools:* ball-shaped neodymium magnet of diameter $d = 10\,\mathrm{mm}$ with remanence $B_\mathrm{r} = 1.2\,\mathrm{T}$, density $\rho_\mathrm{M} \approx 7500\,\mathrm{kg\cdot m^{-3}}$; stand; permanent marker; ruler; measuring tape; flat iron disk; square wooden plate with an iron pin inserted at one side; flat wooden plate with guiding rails and non-slipping surface between them; piece of titanium of diameter $2.4\,\mathrm{mm}$ and length $3.4\,\mathrm{mm}$ fixed to a string. Density of titanium $\rho_\mathrm{Ti} \approx 4500\,\mathrm{kg\cdot m^{-3}}$.

A uniformly magnetised sphere produces an external field identical to that of a point magnetic dipole with a moment $\mu = \frac{4}{3}\pi R^3 B_\mathrm{r}/\mu_0$, where $R$ is the sphere's radius. Along the axis of a dipole, $\vec{B} = \mu_0\vec{\mu}/(2\pi r^3)$, where $r$ is the distance from the dipole. The dipole moment of the Earth is pointing southwards.

**Warning:** measure as far as possible from iron objects (table frames, chairs), which strongly perturb the geomagnetic field.

**i)** *(2 points)* Find the direction of the magnetisation of the magnet: mark on its surface a dot at the point where the straight magnetic field line exits, and a cross where it enters. *Before leaving the room, give the magnet with the markings to the invigilator.*

**ii)** *(4 points)* Find the magnitude of the Earth's magnetic field $|\vec{B}_\mathrm{E}|$ at the laboratory location.

**iii)** *(4 points)* Titanium is a paramagnetic material with magnetic susceptibility $\chi \ll 1$. A small sample of volume $V$ in an inhomogeneous field $\vec{B}(\vec{r})$ experiences a force $\vec{F} = \frac{1}{2}(\chi V/\mu_0)\,\mathrm{grad}\,B^2$ ('grad' denotes derivative in the direction of greatest change). Find $\chi$ for the supplied titanium wire piece.

**Risposta:** experimental — e.g. $|B_E| \approx 51\,\mu\mathrm{T}$, $\chi \sim 10^{-4}$ (see the official solution)

**Soluzione:**

**i)** *(2 points)* The procedure has two stages: (1) locate the magnetic axis on the ball's surface, and (2) determine which end is N (field exits) and which is S (field enters).

**Stage 1: locate the axis.** Place the ball-magnet on the flat iron disk. The magnet polarises the iron underneath, creating an attractive image-dipole. The interaction energy is minimised when the magnet's dipole axis is perpendicular to the iron surface (so the two dipoles are aligned head-to-tail). The ball therefore rolls until its axis points straight down at the disk. With a permanent marker, mark a dot at the topmost point of the ball (where the axis exits the upper hemisphere). Then carefully invert the ball, place it on the disk again, and mark a second dot at the new topmost point. The two dots are diametrically opposite and lie on the dipole axis.

For full marking precision, the dot should be placed within $\sim$1 mm of the highest point of the ball; on a 10 mm ball this corresponds to better than $\sim$$10^\circ$ angular alignment.

**Stage 2: identify which dot is N.** At Tallinn's latitude, the geomagnetic field $\vec{B}_E$ points downward into the ground (the Earth's dipole moment points southwards as stated, so its field lines re-enter the ground in the northern hemisphere). A free magnet self-orients with $\vec{\mu}_\mathrm{magnet} \parallel \vec{B}_E$. Place the ball on the flat wooden plate (well away from iron objects). The geomagnetic torque rotates the ball until its dipole moment $\vec{\mu}$ aligns with $\vec{B}_E$ --- pointing downward, predominantly. The ball does not roll away: $\vec{B}_E$ itself holds the ball in the aligned orientation, since once $\vec{\mu} \parallel \vec{B}_E$ the torque vanishes.

The N pole (where $\vec{B}$ exits, head of $\vec{\mu}$) is then on the bottom of the ball, and the S pole on top. Re-mark the upward-pointing dot with a cross ($\times$): this is the S pole where $\vec{B}$ enters. Leave the downward-pointing dot as a dot: this is the N pole where $\vec{B}$ exits.

**Grading.**

Method:

-   Realising that the magnet rolls so its axis is perpendicular to the iron disk **0.5 pts**

-   Recognising that the geomagnetic field at Tallinn points downward into the ground **0.5 pts**

-   Realising that the free magnet self-orients with $\vec{\mu} \parallel \vec{B}_E$, hence N points downward **0.5 pts**

Experiment:

-   Procedure to mark both poles (dot on top, invert, dot on top again, giving two diametrically opposite axis-points) **0.2 pts**

-   Both dots placed within $\sim$1 mm of the true axis-exit points **0.1 pts**

-   Correctly marking the upward-pointing dot as a cross (S, field enters) and leaving the downward dot (N, field exits) **0.2 pts**

**ii)** *(4 points)* **Idea.** Place the ball-magnet between the rails on the wooden plate. As the plate is tilted, gravity tries to roll the ball downhill (rotating $\vec{\mu}$ away from $\vec{B}_E$), while $\vec{B}_E$ exerts a restoring magnetic torque trying to keep $\vec{\mu}$ aligned. At a critical tilt $\beta_c$, gravity overcomes the maximum magnetic restoring torque, and the ball begins to roll. Measuring $\beta_c$ gives $B_E$.

**Setup.** The cross on the ball is slightly displaced from the exact top because $\vec{B}_E$ is tilted from vertical (dip angle $\sim 70^\circ$ in Tallinn, so the horizontal component of $\vec{B}_E$ is non-zero and points magnetic-north). Orient the plate so that the cross's small horizontal offset from the topmost point lies parallel to the rails. Equivalently, the rails should run along the magnetic meridian, with the ball's dipole axis lying in the vertical plane containing $\vec{B}_E$ and the rolling direction.

**Procedure.**

-   Place the plate horizontally and let the ball settle: it self-orients with $\vec{\mu} \parallel \vec{B}_E$, with the cross slightly offset toward magnetic-south of the topmost point.

-   Re-orient the plate (in the horizontal plane) so the cross's offset is parallel to the rails (cross equidistant from both rails).

-   Slowly tilt one end of the plate upward. Measure the elevation $h$ of the higher end above the lower end with the ruler; for a plate of length $L$, the tilt angle satisfies $\sin\beta = h/L$.

-   Continue tilting smoothly and slowly until the ball just begins to roll down. Record $h$ at that instant.

-   Lower the plate, slightly displace the ball to reset, allow re-orientation, repeat. Average over many trials --- readings fluctuate due to small variations in initial alignment, friction at the rails, and the smoothness of tilting.

**Force/torque balance.** Just before rolling, the ball is in static equilibrium between gravity and the magnetic restoring torque. The gravitational torque about the ball's center (acting through the rail contact at distance $r$) is $\tau_g = mgr\sin\beta$, where $r = d/2$ is the ball radius. The maximum magnetic restoring torque (when $\vec{\mu} \perp \vec{B}_E$) is $\tau_\mathrm{mag,max} = \mu B_E$. Critical condition: $$\mu B_E = mgr\sin\beta_c,$$ $$\boxed{B_E = \frac{mgr\sin\beta_c}{\mu}}.$$

The magnet's dipole moment is $\mu = (4\pi r^3/3)B_\mathrm{r}/\mu_0 = 0.50\,\mathrm{A\cdot m^2}$, with mass $m = \rho_\mathrm{M}\cdot(4\pi r^3/3) \approx 3.93\,\mathrm{g}$. So $$\frac{mgr}{\mu} = \frac{3.93\times10^{-3}\cdot 9.8\cdot 0.005}{0.50} \approx 385\,\mu\mathrm{T}.$$

**Measurements.** A representative set of trials with rail length $L = 19\,\mathrm{cm}$:

| trial    |   1 |   2 |   3 |   4 |   5 |   6 |   7 |   8 |   9 |  10 |  avg |
|:---------|----:|----:|----:|----:|----:|----:|----:|----:|----:|----:|-----:|
| $h$ (mm) |  24 |  26 |  25 |  27 |  23 |  25 |  26 |  24 |  25 |  25 | 25.0 |

The standard deviation of the readings is $\sigma_h \approx 0.12\,\mathrm{cm}$, giving a standard error on the mean of $\sigma_h/\sqrt{10} \approx 0.04\,\mathrm{cm}$, or about 1.5% of the average.

With $\sin\beta_c = \bar{h}/L = 0.025/0.19 \approx 0.132$: $$B_E = \frac{mgr\sin\beta_c}{\mu} = 385\,\mu\mathrm{T}\cdot 0.132 \approx 51\,\mu\mathrm{T}.$$

Combined uncertainty (statistical from $\sigma_h$ plus systematic from $\mu$ and $r$ at the few-percent level): $B_E \approx 51(3)\,\mu\mathrm{T}$, in good agreement with the known geomagnetic field at Tallinn's latitude ($\sim$50 $\mu$T).

**Grading.**

-   Recognising that gravity drives rolling and magnetic torque resists it **0.2 pts**

-   Gravity torque on ball: $\tau_g = mgr\sin\beta$ (force times lever arm $r$ to contact line) **0.2 pts**

-   Maximum magnetic torque $\tau_\mathrm{mag,max} = \mu B_E$ (when $\vec{\mu} \perp \vec{B}_E$) **0.3 pts**

-   Procedure: tilt the plate and record the critical angle when the ball begins to roll **0.4 pts**

-   Realising that the rails should be aligned with the cross's horizontal offset (i.e., parallel to the magnetic meridian) **0.4 pts**

-   Critical-condition formula $\mu B_E = mgr\sin\beta_c$ **0.5 pts**

-   Solving for $B_E = mgr\sin\beta_c/\mu$ **0.3 pts**

-   Computing $\mu = (4\pi r^3/3)B_\mathrm{r}/\mu_0$ from the given $B_\mathrm{r}$ and ball geometry **0.4 pts**

-   Documented measurements (multiple trials, table or list of readings) with averaging and uncertainties **0.8 pts**

-   Plausible numerical answer for $B_E$ in the range $30\,\mu\mathrm{T}$ to $70\,\mu\mathrm{T}$ **0.5 pts**

**iii)** *(4 points)* **Setup.** The titanium piece hangs as a pendulum from a string of length $L$ attached to the stand. Bring the ball-magnet close to the Ti so that one of its poles touches the Ti's surface. The paramagnetic Ti is attracted toward the magnet. Slowly and smoothly pull the magnet-and-Ti combination horizontally; the pendulum tilts. At a critical horizontal displacement $x_c$, the magnetic attraction can no longer balance the gravitational restoring force, and the Ti detaches from the magnet and swings back. Measuring $x_c$ gives $\chi$.

**Practical execution.**

-   Keep the magnet stuck to the iron pin in the wooden plate as a holder, so it always points one pole forward (rather than rotating in the hand).

-   Ensure the magnet's pole touches the Ti at all times and at the same point (the magnet's tip, on the dipole axis); a slight shift up or down reduces the magnetic force.

-   Pull very slowly so the system is quasi-static (no inertial effects, $a \approx 0$).

-   Repeat many times. Take the *maximum* observed $x_c$ as the result; smaller readings reflect imperfect execution (acceleration, off-axis contact, etc.).

A typical observed range: $x_c \approx 210\,\mathrm{mm}$ to $260\,\mathrm{mm}$.

**Physics.** The ball-magnet has dipole moment $\mu = (4\pi/3)(d/2)^3 B_\mathrm{r}/\mu_0 \approx 0.50\,\mathrm{A\cdot m^2}$. On its dipole axis, at distance $r$ from the centre, $$B(r) = \frac{\mu_0\mu}{2\pi r^3}.$$

At the moment of contact with the Ti, the smallest distance from the magnet's center to the Ti's center is $r_\mathrm{min} = (d/2) + d_\mathrm{Ti}/2 \approx 5 + 1.2 = 6.2\,\mathrm{mm}$.

The force on the paramagnetic Ti, using the formula given in the problem with $B^2 \propto 1/r^6$ and $|\nabla B^2| = 6B^2/r$: $$F_\mathrm{mag} = \frac{1}{2}\,\frac{\chi V_\mathrm{Ti}}{\mu_0}\cdot 6\,\frac{B^2(r)}{r} = \frac{3\chi V_\mathrm{Ti}\mu_0\mu^2}{4\pi^2 r^7}.$$

**Force balance at detachment.** Just before the Ti detaches, the pendulum's tilt angle $\theta_c$ satisfies $\sin\theta_c = x_c/L$, and the horizontal restoring force is $m_\mathrm{Ti}\,g\tan\theta_c$. Setting this equal to the maximum magnetic force (at $r = r_\mathrm{min}$): $$m_\mathrm{Ti}\,g\tan\theta_c = \frac{3\chi V_\mathrm{Ti}\mu_0\mu^2}{4\pi^2 r_\mathrm{min}^7}.$$

Using $m_\mathrm{Ti} = \rho_\mathrm{Ti}V_\mathrm{Ti}$ to cancel $V_\mathrm{Ti}$: $$\chi = \frac{4\pi^2\rho_\mathrm{Ti}\,g\tan\theta_c\cdot r_\mathrm{min}^7}{3\mu_0\mu^2}.$$

**Numerical evaluation.** Take pendulum length $L = 1.0\,\mathrm{m}$ (estimated from the stand) and $x_c = 235\,\mathrm{mm}$ (representative maximum from many trials). Then $\sin\theta_c = 0.235$, $\tan\theta_c \approx 0.242$. With $\rho_\mathrm{Ti} = 4500\,\frac{\mathrm{kg}}{\mathrm{m}^3}$: $$\chi \approx \frac{4\pi^2 \cdot 4500 \cdot 9.8 \cdot 0.242 \cdot (6.2\times10^{-3})^7}{3\cdot 4\pi\times10^{-7}\cdot 0.5^2} \approx \boxed{1.6\times10^{-4}}.$$

This is consistent with the literature value for pure titanium ($\chi_\mathrm{Ti} \approx 1.8\times10^{-4}$), within the precision afforded by the experimental uncertainties.

**Grading.**

-   Setup: pendulum + magnet, identification of detachment as the limit condition **0.3 pts**

-   Practical execution detail: keep magnet on iron pin to maintain orientation **0.2 pts**

-   Practical execution detail: ensure pole touches Ti at the same axial point **0.2 pts**

-   Practical execution detail: pull slowly (quasi-static, $a \approx 0$) **0.2 pts**

-   Performing $\geq 5$ measurements (either stated explicitly that the reported value is the maximum of $\geq 5$ trials, or $\geq 5$ measurements documented in a table/list) **0.4 pts**

-   Taking the *maximum* (not average) of the measurements as the reported $x_c$ **0.4 pts**

-   Combining the given dipole-field and paramagnetic-force formulas into $F_\mathrm{mag} = 3\chi V_\mathrm{Ti}\mu_0\mu^2/(4\pi^2 r^7)$ **0.3 pts**

-   Identifying $r_\mathrm{min}$ as magnet radius + Ti half-thickness (accounting for the wire's radius) **0.4 pts**

-   Force balance $mg\tan\theta_c = F_\mathrm{mag,max}$ (or equivalently $\sin\theta_c$ if the magnet is pulled perpendicular to the thread rather than strictly horizontally; the two forms differ by $\sim$3% at the critical angle, smaller than experimental scatter; both can be approximated as $\theta$) **0.5 pts**

-   Solving this equation for $\chi = 4\pi^2\rho_\mathrm{Ti}\,g\tan\theta_c\,r_\mathrm{min}^7/(3\mu_0\mu^2)$ **0.3 pts**

-   Documenting the observed maximum $\theta_c$. Full credit for $\theta_c \in [11.9^\circ, 14.5\,\mathrm{mm}]$; reduce by 0.1 pts per half a degree outside this range, down to a minimum of 0 **0.3 pts**

-   Numerical answer for $\chi$. Full credit for $\chi \in [1.5\times10^{-4}, 1.9\times10^{-4}]$; reduce by 0.1 pts for each $0.1\times10^{-4}$ outside this range, down to a minimum of 0 **0.5 pts**

*Grading note (default credit for execution details):* if the three execution details (iron-pin holder, axial pole contact, slow quasi-static pulling) are not stated explicitly but the reported maximum horizontal displacement is at least $220\,\mathrm{mm}$, award 50% of each item's points (0.1 pts each, keep one decimal). The reasoning: a result in this range can only be obtained if execution was acceptable, even if the student didn't articulate why.

*Official solution (NBPhO 2026, solutions v1.2 with grading scheme), from the [official PDF](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf); text as transcribed by [olimpicos.net](https://olimpicos.net/nbpho/).*

**Topic:** [[Magnetism]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Magnet (object)|Magnet]], [[Magnetic Dipole (object)|Magnetic Dipole]]
**Fonte:** [Testo (PDF) — p.2](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=2) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)


<div class="qlang-split" data-lang="it"></div>

**Magnete sferico (10 punti) — Jaan Kalda**

*Problema sperimentale.* *Materiale:* magnete sferico al neodimio di diametro $d = 10\,\mathrm{mm}$ con magnetizzazione residua $B_\mathrm{r} = 1{,}2\,\mathrm{T}$ e densità $\rho_\mathrm{M} \approx 7500\,\mathrm{kg\cdot m^{-3}}$; supporto; pennarello indelebile; righello; metro a nastro; disco di ferro piatto; tavoletta quadrata di legno con un perno di ferro inserito su un lato; tavoletta piana di legno con guide e superficie antiscivolo tra di esse; pezzetto di titanio di diametro $2{,}4\,\mathrm{mm}$ e lunghezza $3{,}4\,\mathrm{mm}$ fissato a un filo. Densità del titanio $\rho_\mathrm{Ti} \approx 4500\,\mathrm{kg\cdot m^{-3}}$.

Una sfera magnetizzata uniformemente produce all'esterno lo stesso campo di un dipolo magnetico puntiforme di momento $\mu = \frac{4}{3}\pi R^3 B_\mathrm{r}/\mu_0$, dove $R$ è il raggio della sfera. Lungo l'asse di un dipolo $\vec{B} = \mu_0\vec{\mu}/(2\pi r^3)$, dove $r$ è la distanza dal dipolo. Il momento di dipolo della Terra è diretto verso sud.

**Attenzione:** misura il più lontano possibile da oggetti di ferro (telai dei tavoli, sedie), che perturbano fortemente il campo geomagnetico.

**i)** *(2 punti)* Trova la direzione della magnetizzazione del magnete: segna sulla sua superficie un punto dove esce la linea di campo rettilinea e una croce dove entra. *Prima di lasciare l'aula consegna il magnete con i segni al sorvegliante.*

**ii)** *(4 punti)* Trova il modulo del campo magnetico terrestre $|\vec{B}_\mathrm{E}|$ nel luogo del laboratorio.

**iii)** *(4 punti)* Il titanio è un materiale paramagnetico con suscettività magnetica $\chi \ll 1$. Un piccolo campione di volume $V$ in un campo non uniforme $\vec{B}(\vec{r})$ subisce una forza $\vec{F} = \frac{1}{2}(\chi V/\mu_0)\,\mathrm{grad}\,B^2$ ("grad" indica la derivata nella direzione di massima variazione). Trova $\chi$ per il pezzetto di filo di titanio fornito.

**Risposta:** sperimentale — ad es. $|B_E| \approx 51\,\mu\mathrm{T}$, $\chi \sim 10^{-4}$ (vedi la soluzione ufficiale)

**Soluzione:** La soluzione ufficiale completa (in inglese) è nella versione originale di questo quesito e nel PDF ufficiale.

**Topic:** [[Magnetism]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Magnet (object)|Magnet]], [[Magnetic Dipole (object)|Magnetic Dipole]]
**Fonte:** [Testo (PDF) — p.2](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_problems_eng.pdf#page=2) · [Soluzione ufficiale (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)



<span class="atom-split" id="risposte" data-atom="risposte" data-title="NBPhO 2026 · Answer key — Answer key" data-tags="kg/prova,comp/Nordic,tipo-gara/individuale"></span>

<div class="qlang-switch" data-default="en"></div>



Final results from the official NBPhO 2026 solutions (v1.2).

| Problem | Title | Risposta |
|---:|---|---|
| 1 | Moving lens (6 points) — Eppu Leinonen | geometric construction — see the official solution |
| 2 | Lissajous bridge (6 points) — Jaan Kalda | $|V_{PB}| = \dfrac{V}{3}\sqrt{\dfrac{2}{|\tan\alpha|}}$ |
| 3 | Kirill on a swing (8 points) — Kaarel Hänni | iii) $N = 6$ stand-ups ($N \ge \tfrac23\ln4/\ln1.2 \approx 5.07$) |
| 4 | Rod and bead (8 points) — Eero Ristolainen, Jaan Kalda | ii) $R = g/(4\omega^2)$; iii) $k > m\omega^2$, $R = \dfrac{mg}{2|2m\omega^2-k|}$; iv) $\Omega = \tfrac95\omega$, $g = d\omega^2/2$, $a_E = 5d\omega^2$ |
| 5 | Saturation pressure of water (8 points) — Eero Uustalu | experimental — e.g. $p_\mathrm{sat} \approx 2.6\,\mathrm{kPa}$ at $22\,^\circ\mathrm{C}$ (see the official solution) |
| 6 | Pull-up bar rope (5 points) — Jaan Kalda | i) $u = v/\sin\alpha$; ii) $|\ddot x| = \dfrac{v^2}{H}\cot^3\alpha$; iii) $\alpha_0 = \arctan\sqrt[4]{v^2/(gH)}$ |
| 7 | Water hose (5 points) — Ralf Robert Paabo | i) $R = \rho v D/\mu$; ii) turbulent; iii) $Q'/Q \approx 0.88$, excess pressure $\times 35$ |
| 8 | Jet sound (8 points) — Teo Kai Wen, Jaan Kalda | ii) $M = 1.5$; iii) $d = \dfrac{\tau c}{1-\sqrt{1-M^{-2}}} \approx 1.5\,\mathrm{km}$ |
| 9 | CO2 fire extinguisher (8 points) — Jaan Kalda | ii) $x_a \approx 0.40$, $x_b \approx 0.25$; iii) condensation iff $L/(c_pT) > 1$ — yes for water ($\approx 3.0$) |
| 10 | Ball magnet (10 points) — Jaan Kalda | experimental — e.g. $|B_E| \approx 51\,\mu\mathrm{T}$, $\chi \sim 10^{-4}$ (see the official solution) |

**Fonte:** [Testo e soluzioni (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)


<div class="qlang-split" data-lang="it"></div>

Risultati finali dalle soluzioni ufficiali NBPhO 2026 (v1.2).

| Problema | Titolo | Risposta |
|---:|---|---|
| 1 | Lente in movimento (6 punti) — Eppu Leinonen | costruzione geometrica — vedi la soluzione ufficiale |
| 2 | Ponte di Lissajous (6 punti) — Jaan Kalda | $|V_{PB}| = \dfrac{V}{3}\sqrt{\dfrac{2}{|\tan\alpha|}}$ |
| 3 | Kirill sull'altalena (8 punti) — Kaarel Hänni | iii) $N = 6$ volte ($N \ge \tfrac23\ln4/\ln1{,}2 \approx 5{,}07$) |
| 4 | Asta e perlina (8 punti) — Eero Ristolainen, Jaan Kalda | ii) $R = g/(4\omega^2)$; iii) $k > m\omega^2$, $R = \dfrac{mg}{2|2m\omega^2-k|}$; iv) $\Omega = \tfrac95\omega$, $g = d\omega^2/2$, $a_E = 5d\omega^2$ |
| 5 | Tensione di vapore saturo dell'acqua (8 punti) — Eero Uustalu | sperimentale — ad es. $p_\mathrm{sat} \approx 2{,}6\,\mathrm{kPa}$ a $22\,^\circ\mathrm{C}$ (vedi la soluzione ufficiale) |
| 6 | La fune sulla sbarra (5 punti) — Jaan Kalda | i) $u = v/\sin\alpha$; ii) $|\ddot x| = \dfrac{v^2}{H}\cot^3\alpha$; iii) $\alpha_0 = \arctan\sqrt[4]{v^2/(gH)}$ |
| 7 | Tubo dell'acqua (5 punti) — Ralf Robert Paabo | i) $R = \rho v D/\mu$; ii) turbolento; iii) $Q'/Q \approx 0{,}88$, sovrapressione $\times 35$ |
| 8 | Il suono del jet (8 punti) — Teo Kai Wen, Jaan Kalda | ii) $M = 1{,}5$; iii) $d = \dfrac{\tau c}{1-\sqrt{1-M^{-2}}} \approx 1{,}5\,\mathrm{km}$ |
| 9 | Estintore a CO₂ (8 punti) — Jaan Kalda | ii) $x_a \approx 0{,}40$, $x_b \approx 0{,}25$; iii) condensa se $L/(c_pT) > 1$ — sì per l'acqua ($\approx 3{,}0$) |
| 10 | Magnete sferico (10 punti) — Jaan Kalda | sperimentale — ad es. $|B_E| \approx 51\,\mu\mathrm{T}$, $\chi \sim 10^{-4}$ (vedi la soluzione ufficiale) |

**Fonte:** [Testo e soluzioni (PDF)](https://nbpho.ee/wp-content/uploads/2026/04/NBPhO_2026_v1.2.pdf)
