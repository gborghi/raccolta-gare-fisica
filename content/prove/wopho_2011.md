---
title: WoPhO 2011
tipo: prova
tags:
  - kg/prova
  - paese/international
  - comp/WoPhO
---
<div class="atom-reader" data-prova="wopho_2011"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="WoPhO 2011 — Quesito 1" data-tags="kg/prova,paese/International,comp/WoPhO,topic/oscillations-and-waves,argomento/onde-e-oscillazioni,difficolta/5,multidisciplina/multi,object/spring,object/rod"></span>

<div class="qlang-switch" data-default="en"></div>



**A Model for Collisions Between Two Solid Objects**

One way mechanical energy is lost during collision between two solid objects is by way of acoustic waves propagating inside both objects. Even though the real situation is quite complicated, in this problem it is modeled in a simple way. First treat each solid rod as a spring with unstretched length $L_l$ and $L_r$. Spring constant times the length of the spring are then $K_l$ and $K_r$, respectively. Mass density (mass per unit length) of the spring are given by $\rho_l$ and $\rho_r$. Indexes $l$ and $r$ represent the left and right springs.

The left spring is moving with velocity $+v_0/2$, while the right spring is moving in the opposite direction with velocity $-v_0/2$. Each spring is initially relaxed. At $t = 0$, the springs collide at $x = 0$. The displacement of each point on the springs are described by a function $y(x, t)$ so that $x + y(x, t)$ represents the position of said point at time $t$; this point was at $x$ when $t = 0$.

1. Derive the wave equation on the springs and write down the speed of the wave.

The general solution to the wave equation is given by $g(x, t) = \psi(ct - x) + \phi(ct + x)$, where $c$ is the speed of the wave propagation. The form of $\psi$ and $\phi$ are determined from the boundary conditions.

2. Write down the boundary conditions at $x = 0$, $x = -L_l$ and $x = L_r$.

3. Write down the function of $y(x, t)$ before the collision ($t \le 0$), i.e. $y_{0l}(x, t)$ and $y_{0r}(x, t)$.

At $t = 0$, an acoustic wave starts to propagate in both springs away from the collision point $x = 0$. The dynamics of the system is analyzed using the space-time diagram as shown in Fig. 1. The horizontal axis represents time, and the vertical axis represents the position of points on the spring. Each line in the diagram represents an acoustic wave front that emerges each time a wave front arrives at the border.

For example, the line AB represents a wave front emerging from the collision at point A ($x = 0$). Waves propagating in the left and right springs are given by functions $f_l(c_l t + x)$ and $f_r(c_r t - x)$, where $c_l$ and $c_r$ are the speed of the wave propagation in left and right spring, respectively. The space-time diagram indicates that $L_l/c_l > L_r/c_r$ in this problem. As the wave front of $f_r(c_r t - x)$ arrives at point B, a new reflected wave, $g_r(c_r t + x)$, emerges. The same event also occurs in the left spring at point C.

Now back in the right spring, when the wave front of $g_r(c_r t + x)$ arrives at the end of the spring ($x = 0$, at point D in the diagram), a new reflected wave $h_r(c_r t - x)$ is generated. This phenomena always occur when a wave front arrives at the border; a new reflected wave or new reflected and transmitted waves are generated.

4. Write down the wave function $y(x, t)$ in the region I, II, III, IV, V, VI and VII in terms of $y_0$, $f_r$, $f_l$, $g_r$, $h_r$ and $h_l$.

<!--fig:start-->
![[WoPhO_2011_Q1_p2_f1.png]]
*Figure 1: Space-time diagram*
<!--fig:end-->

5. Using the boundary condition(s), determine the form of $f_r(c_r t - x)$ and $f_l(c_l t + x)$ in terms of the springs' properties and initial velocity.

6. Determine the velocity of the contact point ($x = 0$) immediately after the collision.

7. Using the boundary condition(s), determine the form of $g_r(c_r t + x)$ in terms of the springs' properties and initial velocities.

Now consider a case where both springs are identical except in its length. In this case, $\rho_l = \rho_r = \rho$, $K_l = K_r = K$. Take $L_r < L_l$.

8. Determine $y(x, t)$ in region III and IV. Draw a graph for $y(x)$ at $t = 0.4\frac{L_r}{c}$. For drawing the graph, you may use $L_r = 0.6L$, $L_l = L$ and $v_0 = 0.5c$.

9. Determine $y(x, t)$ in region V. Draw a graph for $y(x)$ at $t = 0.8\frac{L_r}{c}$, use the same $L_r$, $L_l$ and $v_0$ as in the previous question.

10. When will the two springs separate? Draw a graph for $y(x)$, use the same $L_r$, $L_l$ and $v_0$ as in the previous question.

11. Calculate the coefficient of restitution $e$ between the springs.

12. Calculate the ratio of the translational kinetic energy of the springs after the collision to the kinetic energy before the collision.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1_NaZZYSvC6igVD7qyFJIdD8KY8nt2ozA/view)
**Topic:** [[Oscillations & Waves]], [[Conservation of Energy]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Spring (object)|Spring]], [[Rod (object)|Rod]]


<div class="qlang-split" data-lang="it"></div>

**Un modello per le collisioni tra due oggetti solidi**

Un modo in cui l'energia meccanica viene persa durante la collisione tra due oggetti solidi è attraverso onde acustiche che si propagano all'interno di entrambi gli oggetti. Anche se la situazione reale è piuttosto complessa, in questo problema è modellato in modo semplice. Prima di tutto trattare ogni bastone solido come una molla con lunghezza non allungata $L_l$ e $L_r$. La durata della molla è quindi $K_l$ e $K_r$. La densità di massa (massa per lunghezza unitaria) della molla è data da $\rho_l$ e $\rho_r$. Gli indici $l$ e $r$ rappresentano le sorgenti sinistra e destra.

La molla sinistra si muove con velocità $+v_0/2$, mentre la molla destra si muove nella direzione opposta con velocità $-v_0/2$. Ogni primavera è inizialmente rilassante. A $t = 0$, le sorgenti si schiantano a $x = 0$. Il spostamento di ciascun punto sulle sorgenti è descritto con una funzione $y(x, t)$ in modo che $x + y(x, t)$ rappresenti la posizione di detto punto al tempo $t$; questo punto era a $x$ quando $t = 0$.

1. Deriva l'equazione delle onde sulle sorgenti e segnala la velocità dell'onda.

La soluzione generale dell'equazione d'onda è data da $g(x, t) = \psi(ct - x) + \phi(ct + x)$, dove $c$ è la velocità di propagazione dell'onda. La forma di $\psi$ e $\phi$ è determinata dalle condizioni di confine.

2. Scrivere le condizioni di confine a $x = 0$, $x = -L_l$ e $x = L_r$.

3. Scrittura della funzione di $y(x, t)$ prima della collisione ($t \le 0$), ovvero $y_{0l}(x, t)$ e $y_{0r}(x, t)$.

A $t = 0$, un'onda acustica inizia a propagarsi in entrambe le sorgenti lontano dal punto di collisione $x = 0$. La dinamica del sistema viene analizzata utilizzando il diagramma spazio-tempo come mostrato nella figura. 1. L'asse orizzontale rappresenta il tempo e l'asse verticale la posizione dei punti sulla molla. Ogni linea del diagramma rappresenta un fronte d'onda acustica che emerge ogni volta che un fronte d'onda arriva al confine.

Ad esempio, la linea AB rappresenta un fronte d'onda che emerge dalla collisione al punto A ($x = 0$). Le onde che si propagano nelle sorgenti sinistra e destra sono indicate con le funzioni $f_l(c_l t + x)$ e $f_r(c_r t - x)$, dove $c_l$ e $c_r$ sono la velocità di propagazione delle onde nella sorgente sinistra e destra, rispettivamente. Il diagramma spazio-tempo indica che $L_l/c_l > L_r/c_r$ in questo problema. Quando il fronte d'onda di $f_r(c_r t - x)$ arriva al punto B, emerge una nuova onda riflessa, $g_r(c_r t + x)$. Lo stesso evento si verifica anche nella primavera sinistra al punto C.

Ora, nella primavera destra, quando il fronte d'onda di $g_r(c_r t + x)$ arriva alla fine della primavera ($x = 0$, al punto D del diagramma), viene generata una nuova onda riflessa $h_r(c_r t - x)$. Questo fenomeno si verifica sempre quando un fronte d'onda arriva al confine; si genera una nuova onda riflessa o nuove onde riflesse e trasmesse.

4. Scrivere la funzione d'onda $y(x, t)$ nelle regioni I, II, III, IV, V, VI e VII in termini di $y_0$, $f_r$, $f_l$, $g_r$, $h_r$ e $h_l$.

<!--fig:start-->
![[WoPhO_2011_Q1_p2_f1.png]]
*Figura 1: diagramma spazio-tempo*
<!--fig:end-->

5. Utilizzando la condizione di confine ((s), determinare la forma di $f_r(c_r t - x)$ e $f_l(c_l t + x)$ in termini di proprietà delle sorgenti e velocità iniziale.

6. Determinare la velocità del punto di contatto ($x = 0$) immediatamente dopo la collisione.

7. Utilizzando la condizione di confine ((s), determinare la forma di $g_r(c_r t + x)$ in termini di proprietà delle sorgenti e velocità iniziali.

Ora consideriamo un caso in cui entrambe le sorgenti sono identiche tranne che nella loro lunghezza. In questo caso $\rho_l = \rho_r = \rho$, $K_l = K_r = K$. Prendi $L_r < L_l$.

8. Determinare $y(x, t)$ nelle regioni III e IV. Disegnare un grafico per $y(x)$ a $t = 0.4\frac{L_r}{c}$. Per disegnare il grafico è possibile utilizzare $L_r = 0.6L$, $L_l = L$ e $v_0 = 0.5c$.

9. Determinare $y(x, t)$ nella regione V. Disegnare un grafico per $y(x)$ a $t = 0.8\frac{L_r}{c}$, utilizzare gli stessi $L_r$, $L_l$ e $v_0$ come nella domanda precedente.

10. Quando le due sorgenti si separeranno? Disegnare un grafico per $y(x)$, utilizzare gli stessi $L_r$, $L_l$ e $v_0$ come nella domanda precedente.

11. Calcolare il coefficiente di restituzione $e$ tra le sorgenti.

12. Calcolare il rapporto tra l'energia cinetica traslazionale delle sorgenti dopo la collisione e l'energia cinetica prima della collisione.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1_NaZZYSvC6igVD7qyFJIdD8KY8nt2ozA/view)
**Topic:** [[Oscillations & Waves]], [[Conservation of Energy]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Spring (object)|Spring]], [[Rod (object)|Rod]]



<span class="atom-split" id="q02" data-atom="q02" data-title="WoPhO 2011 — Quesito 2" data-tags="kg/prova,paese/International,comp/WoPhO,topic/oscillations-and-waves,argomento/onde-e-oscillazioni,difficolta/5,multidisciplina/multi,object/spring,object/block"></span>

<div class="qlang-switch" data-default="en"></div>



**Spring and Mass Problem**

1. A mass $M$ moves toward a semi infinite spring with initial velocity $v_0$, as shown in Fig. 1. The spring has mass per unit length $\mu$ and spring constant times the spring length $K \equiv kL$. The mass and the spring collide at $x = 0$ and $t = 0$. Write down the velocity of the mass $M$ after the collision as a function of time, and also write down the velocity of the mass $M$ as a function of position.

<!--fig:start-->
![[WoPhO_2011_Q2_p1_f1.png]]
*Figure 1:*
<!--fig:end-->

2. For this part another mass $m$ is placed at the other end of the spring. After the initial wave front from the collision of mass $M$ with the spring reaches this mass, how long would it take for this mass to leave the spring? Also calculate the velocity of mass $m$ when it leaves the spring. Assume the waves in the spring travel faster than the initial velocity of mass $M$ but the spring is long enough so that when the mass $m$ leaves the spring, the reflected waves from $m$ have not yet returned to $M$.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1WNfZX0xewuQymfTTkuFmfoeJHWfMXX1i/view)
**Topic:** [[Oscillations & Waves]], [[Conservation of Momentum]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Differential Equations (metodo)|Differential Equations]], [[Hooke's Law (metodo)|Hooke's Law]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Spring (object)|Spring]], [[Block (object)|Block]]


<div class="qlang-split" data-lang="it"></div>

**Problema di primavera e massa**

1. Una massa $M$ si muove verso una molla seminfinita con velocità iniziale $v_0$, come mostrato nella figura. 1. La molla ha massa per lunghezza unitaria $\mu$ e costante molla per la lunghezza molla $K \equiv kL$. La massa e la molla si scontrano a $x = 0$ e $t = 0$. Scrivere la velocità della massa $M$ dopo la collisione come funzione del tempo e anche scrivere la velocità della massa $M$ come funzione della posizione.

<!--fig:start-->
![[WoPhO_2011_Q2_p1_f1.png]]
*Figura 1: *
<!--fig:end-->

2. Per questa parte viene inserita un'altra massa $m$ all'altra estremità della molla. Dopo che il fronte d'onda iniziale della collisione di massa $M$ con la molla raggiunge questa massa, quanto tempo ci vorrebbe per lasciare la molla? Calcolare anche la velocità della massa $m$ quando essa esce dalla molla. Supponiamo che le onde della primavera viaggiino più velocemente della velocità iniziale di massa $M$, ma che la primavera sia abbastanza lunga da far sì che quando la massa $m$ lascia la primavera, le onde riflesse da $m$ non siano ancora tornate a $M$.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1WNfZX0xewuQymfTTkuFmfoeJHWfMXX1i/view)
**Topic:** [[Oscillations & Waves]], [[Conservation of Momentum]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Differential Equations (metodo)|Differential Equations]], [[Hooke's Law (metodo)|Hooke's Law]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Spring (object)|Spring]], [[Block (object)|Block]]



<span class="atom-split" id="q03" data-atom="q03" data-title="WoPhO 2011 — Quesito 3" data-tags="kg/prova,paese/International,comp/WoPhO,topic/rotational-dynamics,argomento/meccanica,difficolta/5,multidisciplina/mono,object/block"></span>

<div class="qlang-switch" data-default="en"></div>



**Sliding Block**

A rectangular block of width $2b$, length $2a$, and mass $M$ rests on a rough surface which has a coefficient of kinetic friction $\mu$. At some time, the block is given a sharp kick, such that it suddenly attains a horizontal velocity $v_0$. Under certain circumstances the rear end of the

<!--fig:start-->
![[WoPhO_2011_Q3_p1_f1.png]]
*Figure 1: The block, after given its initial velocity.*
<!--fig:end-->

block will begin to lift and the block will subsequently rotate about its front lower edge, which will remain in contact with the surface.

1. Derive the equation of rotational motion of the block in terms of $\theta$, $a$, $b$, $\mu$, and $g$.

2. Find the physical condition, namely the range of $\mu$, that allows this to happen.

The next question assume this condition is fulfilled, and concerns the subsequent motion of the block.

3. Consider a final state in which the block is at rest in the position shown in Fig. 2, where its center of mass has undergone a total horizontal displacement $x$. Is such a

<!--fig:start-->
![[WoPhO_2011_Q3_p1_f2.png]]
*Figure 2: A presumed final position of the sliding block.*
<!--fig:end-->

position possible? If yes, calculate the initial velocity required to achieve it for the following values: $a = 0.8$ m, $b = 1.0$ m, $\mu = 0.9$, $x = 1.65$ m, $\dot{\theta}_{\max} = 1.27$ s$^{-1}$. Note: Knowing $a$, $b$ and $\mu$ the initial velocity can be solved numerically.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1VDzEvlWhuusXTTz4sLm0vOYn0Q1BlhMi/view)
**Topic:** [[Rotational Dynamics]], [[Newtonian Mechanics]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Differential Equations (metodo)|Differential Equations]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Block (object)|Block]]


<div class="qlang-split" data-lang="it"></div>

**Blocco di scorrere**

Un blocco rettangolare di larghezza $2b$, lunghezza $2a$ e massa $M$ si basa su una superficie rugosa con un coefficiente di attrito cinetico $\mu$. A un certo punto, il blocco riceve un colpo forte, in modo che raggiunga improvvisamente una velocità orizzontale $v_0$. In determinate circostanze l'estremità posteriore della

<!--fig:start-->
![[WoPhO_2011_Q3_p1_f1.png]]
*Figura 1: Il blocco, dopo aver dato la sua velocità iniziale.*
<!--fig:end-->

il blocco inizierà a sollevarsi e il blocco si ruoterà successivamente intorno al suo bordo inferiore anteriore, che rimarrà in contatto con la superficie.

1. Derivare l'equazione del movimento di rotazione del blocco in termini di $\theta$, $a$, $b$, $\mu$ e $g$.

2. Trova la condizione fisica, vale a dire la gamma di $\mu$, che consente di farlo.

La domanda successiva, che presuppone che tale condizione sia soddisfatta, riguarda la successiva mozione del blocco.

3. Considerate uno stato finale in cui il blocco è a riposo nella posizione mostrata nella figura. 2, se il suo centro di massa ha subito un spostamento orizzontale totale $x$. E ' un tale

<!--fig:start-->
![[WoPhO_2011_Q3_p1_f2.png]]
*Figura 2: Presunta posizione finale del blocco scorrevole.*
<!--fig:end-->

- Possibile posizione? Se sì, calcolare la velocità iniziale necessaria per raggiungerla per i seguenti valori: $a = 0.8$ m, $b = 1.0$ m, $\mu = 0.9$, $x = 1.65$ m, $\dot{\theta}_{\max} = 1.27$ s$^{-1}$. Nota: Conoscendo $a$, $b$ e $\mu$ la velocità iniziale può essere risolta numericamente.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1VDzEvlWhuusXTTz4sLm0vOYn0Q1BlhMi/view)
**Topic:** [[Rotational Dynamics]], [[Newtonian Mechanics]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Differential Equations (metodo)|Differential Equations]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Block (object)|Block]]



<span class="atom-split" id="q04" data-atom="q04" data-title="WoPhO 2011 — Quesito 4" data-tags="kg/prova,paese/International,comp/WoPhO,topic/wave-optics,argomento/ottica,difficolta/5,multidisciplina/multi"></span>

<div class="qlang-switch" data-default="en"></div>



**Dielectric Slab Waveguide**

### 1. Total Internal Reflection

The electric field of a polarized monochromatic plane wave can be generally represented as $\mathbf{E}(\mathbf{r}, t) = \mathbf{E} \exp i(\mathbf{k} \cdot \mathbf{r} - \omega t)$, where $\mathbf{E}$ is the amplitude of the wave, $k$ the wavenumber, and $\omega$ the frequency. Suppose that a monochromatic plane wave with frequency $\omega$ travels in the medium of refractive index $n_1$, and is incident on the boundary of another medium of refractive index $n_2$. The incoming wave forms an angle $\theta_i$ with respect to the normal of the boundary. Throughout this problem, we only consider transverse electric (TE) polarized wave where the electric field is perpendicular to the plane of incidence and all media are non-magnetic.

<!--fig:start-->
![[WoPhO_2011_Q4_p1_f1.png]]
*Figure: TE wave incident, reflected and transmitted at the boundary between media $n_1$ and $n_2$.*
<!--fig:end-->

1. In the case of $n_1 > n_2$, there exists a critical angle $\theta_c$ where the incoming wave will be totally reflected for $\theta_i > \theta_c$ (total internal reflection or TIR). The phase of the reflected wave lags for $\delta$ with respect to the incident wave. Derive $\delta$ and state it in terms of $n_1$, $n_2$, and $\theta_i$.

2. Using the necessary boundary condition, derive the reflectance $R$ for the case of TIR. Show that the wave is perfectly reflected for all $\theta_i > \theta_c$.

### 2. Constructive Phase Matching

The most simple dielectric waveguide is a planar slab with thickness $d$ and refractive index $n_1$ located in a homogeneous background medium with refractive index $n_2$ ($n_2 < n_1$). In the case of TIR, the slab can be used to guide waves without loss, with the additional condition that the waves interfere constructively. In other words, the wavefronts should be preserved as the waves travel inside the waveguide. The wavenumbers for the vacuum, medium $n_1$, and medium $n_2$ are taken to be $k_0$, $k_1$, and $k_2$, respectively.

<!--fig:start-->
![[WoPhO_2011_Q4_p1_f2.png]]
*Figure: Ray path inside the slab waveguide of thickness $d$ (index $n_1$) bounded by medium $n_2$.*
<!--fig:end-->

1. Find the necessary condition for the constructive phase matching.

2. The wave can only be guided without loss for certain values of $\theta$. Show that in these cases, $\theta$ must satisfy the equations:
$$k_1 d \cos\theta - \delta = m\pi; \qquad m = 1, 2, 3, \dots \tag{1}$$
Verify that the equations above can also be written as:
$$\sqrt{u^2 + v^2} = \frac{k_0 d}{2}\sqrt{n_1^2 - n_2^2}, \tag{2}$$
$$u \tan u = v \quad \text{or} \quad -u \cot u = v, \tag{3}$$
with $u = \frac{k_1 d}{2}\cos\theta$ and $v = \frac{d}{2}\sqrt{k_1^2 \sin^2\theta - k_2^2}$.

### 3. Maxwell's Equations

The Maxwell wave equation for the electric field in a dielectric medium of relative permittivity $\varepsilon$ is
$$\left(\frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}\right)\mathbf{E}(\mathbf{r}, t) = \mu_0 \varepsilon \varepsilon_0 \frac{\partial^2 \mathbf{E}(\mathbf{r}, t)}{\partial t^2}. \tag{4}$$

<!--fig:start-->
![[WoPhO_2011_Q4_p2_f1.png]]
*Figure: Slab waveguide oriented with the wave travelling in the $xz$-plane.*
<!--fig:end-->

In the case of the slab waveguide shown in the figure above, $\varepsilon = n_1^2$ for $0 < z < d$, and $\varepsilon = n_2^2$ for $z < 0$ or $z > d$. Taking the system coordinates such that the wave travels in the $xz$-plane, the electric field can be generally written as
$$\mathbf{E}(\mathbf{r}, t) = \mathbf{E}(x, z, t) = \mathbf{E}(z) \exp i(\beta x - \omega t), \tag{5}$$
where $\beta$ is the effective propagation constant along the waveguide due to the translational symmetry of the structure in the $x$-direction. In the case of waveguiding the TE polarized wave ($\mathbf{E}(z) = E(z)\hat{y}$), $\mathbf{E}(\mathbf{r}, t)$ should be simple harmonic inside the slab and decay exponentially outside.

1. What is the relation of $\beta$ to $k_1$ and $\theta$?

2. From the boundary conditions at $z = 0$ and $z = d$, derive from the Maxwell equations the condition for waveguiding as found in Part 2.

3. Sketch the functions in eqs. (1)-(2) in $(u, v)$ coordinates. Determine the necessary condition for only one solution of $\theta$ to exist.

### 4. Mode Solutions

The waveguide mode solutions are solutions of $\theta$ where waveguiding occurs inside the slab. The solution for $m = 0$ (see Part 2) is commonly called the fundamental mode (the lowest mode or the first mode), the $m = 1$ mode is called as the second mode, and so on.

1. Sketch the functions in eqs. (2)-(3) in $(u, v)$ coordinates. Determine the necessary condition for only one mode solution to exist.

2. Show that the maximum number of modes supported by the dielectric slab is
$$M = \left\lceil \frac{k_0 d}{\pi}\sqrt{n_1^2 - n_2^2} \right\rceil, \tag{6}$$
where the $\lceil\ \rceil$ symbol denotes the ceiling function for which the expression inside is increased to the nearest integer.

3. Verify the number of mode solutions is incremented by one for every increase of frequency:
$$\Delta\omega = \frac{\pi c}{d\sqrt{n_1^2 - n_2^2}}. \tag{7}$$

4. From eq.1, show that the group velocity ($d\omega/d\beta$) of each supported mode solution is
$$v_g = \frac{d \tan\theta + \frac{\partial \delta}{\partial \beta}}{\frac{n_1 d}{c \cos\theta} - \frac{\partial \delta}{\partial \omega}}. \tag{8}$$

5. Show that the maximum time disparity for different modes in the dielectric slab waveguide to travel a distance $L$ is
$$\tau = \frac{L}{c}(n_1 - n_2). \tag{9}$$

6. For $n_1 = 1.7$, $n_2 = 1.5$, $\lambda = 800$ nm (in vacuum), and $d = 1$ μm, find all the mode solutions for $\theta$ (with $\theta > \theta_c$). Plot the electric field $E(z)$ for these solutions.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1mir4XI0fZCKiFilqsuv26nVDG4u16XMV/view)
**Topic:** [[Wave Optics]], [[Electromagnetism]]
**Metodi:** [[Snell's Law (metodo)|Snell's Law]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Wave Equation (metodo)|Wave Equation]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** —


<div class="qlang-split" data-lang="it"></div>

**Guida d'onda a lastra dielettrica**

### 1. Riflessione totale interna

Il campo elettrico di un'onda piana monocromatica polarizzata può essere rappresentato in generale come $\mathbf{E}(\mathbf{r}, t) = \mathbf{E} \exp i(\mathbf{k} \cdot \mathbf{r} - \omega t)$, dove $\mathbf{E}$ è l'ampiezza dell'onda, $k$ il numero d'onda e $\omega$ la frequenza. Supponi che un'onda piana monocromatica di frequenza $\omega$ viaggi nel mezzo di indice di rifrazione $n_1$, e incida sul confine di un altro mezzo di indice di rifrazione $n_2$. L'onda incidente forma un angolo $\theta_i$ rispetto alla normale al confine. In tutto questo problema consideriamo solo onde con polarizzazione trasversale elettrica (TE), in cui il campo elettrico è perpendicolare al piano di incidenza e tutti i mezzi sono non magnetici.

<!--fig:start-->
![[WoPhO_2011_Q4_p1_f1.png]]
*Figura: onda TE incidente, riflessa e trasmessa al confine tra i mezzi $n_1$ e $n_2$.*
<!--fig:end-->

1. Nel caso $n_1 > n_2$, esiste un angolo critico $\theta_c$ per cui l'onda incidente viene totalmente riflessa per $\theta_i > \theta_c$ (riflessione totale interna o TIR). La fase dell'onda riflessa è in ritardo di $\delta$ rispetto all'onda incidente. Ricava $\delta$ ed esprimilo in funzione di $n_1$, $n_2$ e $\theta_i$.

2. Usando le necessarie condizioni al contorno, ricava la riflettanza $R$ nel caso di TIR. Mostra che l'onda è perfettamente riflessa per ogni $\theta_i > \theta_c$.

### 2. Accordo di fase costruttivo

La guida d'onda dielettrica più semplice è una lastra planare di spessore $d$ e indice di rifrazione $n_1$ posta in un mezzo di fondo omogeneo con indice di rifrazione $n_2$ ($n_2 < n_1$). Nel caso di TIR, la lastra può essere usata per guidare le onde senza perdite, con la condizione aggiuntiva che le onde interferiscano costruttivamente. In altre parole, i fronti d'onda devono essere preservati mentre le onde viaggiano all'interno della guida d'onda. I numeri d'onda per il vuoto, il mezzo $n_1$ e il mezzo $n_2$ sono assunti pari a $k_0$, $k_1$ e $k_2$, rispettivamente.

<!--fig:start-->
![[WoPhO_2011_Q4_p1_f2.png]]
*Figura: percorso del raggio all'interno della guida d'onda a lastra di spessore $d$ (indice $n_1$) delimitata dal mezzo $n_2$.*
<!--fig:end-->

1. Trova la condizione necessaria per l'accordo di fase costruttivo.

2. L'onda può essere guidata senza perdite solo per certi valori di $\theta$. Mostra che in questi casi $\theta$ deve soddisfare le equazioni:
$$k_1 d \cos\theta - \delta = m\pi; \qquad m = 1, 2, 3, \dots \tag{1}$$
Verifica che le equazioni precedenti possono essere scritte anche come:
$$\sqrt{u^2 + v^2} = \frac{k_0 d}{2}\sqrt{n_1^2 - n_2^2}, \tag{2}$$
$$u \tan u = v \quad \text{or} \quad -u \cot u = v, \tag{3}$$
con $u = \frac{k_1 d}{2}\cos\theta$ e $v = \frac{d}{2}\sqrt{k_1^2 \sin^2\theta - k_2^2}$.

### 3. Equazioni di Maxwell

L'equazione d'onda di Maxwell per il campo elettrico in un mezzo dielettrico di permittività relativa $\varepsilon$ è
$$\left(\frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}\right)\mathbf{E}(\mathbf{r}, t) = \mu_0 \varepsilon \varepsilon_0 \frac{\partial^2 \mathbf{E}(\mathbf{r}, t)}{\partial t^2}. \tag{4}$$

<!--fig:start-->
![[WoPhO_2011_Q4_p2_f1.png]]
*Figura: guida d'onda a lastra orientata con l'onda che viaggia nel piano $xz$.*
<!--fig:end-->

Nel caso della guida d'onda a lastra mostrata nella figura precedente, $\varepsilon = n_1^2$ per $0 < z < d$, e $\varepsilon = n_2^2$ per $z < 0$ o $z > d$. Scegliendo le coordinate del sistema in modo che l'onda viaggi nel piano $xz$, il campo elettrico può essere scritto in generale come
$$\mathbf{E}(\mathbf{r}, t) = \mathbf{E}(x, z, t) = \mathbf{E}(z) \exp i(\beta x - \omega t), \tag{5}$$
dove $\beta$ è la costante di propagazione effettiva lungo la guida d'onda dovuta alla simmetria traslazionale della struttura nella direzione $x$. Nel caso della guida dell'onda con polarizzazione TE ($\mathbf{E}(z) = E(z)\hat{y}$), $\mathbf{E}(\mathbf{r}, t)$ deve essere armonica semplice all'interno della lastra e decadere esponenzialmente all'esterno.

1. Qual è la relazione tra $\beta$ e $k_1$ e $\theta$?

2. Dalle condizioni al contorno in $z = 0$ e $z = d$, ricava dalle equazioni di Maxwell la condizione per la guida d'onda trovata nella Parte 2.

3. Traccia le funzioni nelle eq. (1)-(2) nelle coordinate $(u, v)$. Determina la condizione necessaria affinché esista una sola soluzione di $\theta$.

### 4. Soluzioni dei modi

Le soluzioni dei modi della guida d'onda sono le soluzioni di $\theta$ per cui la guida dell'onda avviene all'interno della lastra. La soluzione per $m = 0$ (vedi Parte 2) è comunemente chiamata modo fondamentale (il modo più basso o primo modo), il modo $m = 1$ è chiamato secondo modo, e così via.

1. Traccia le funzioni nelle eq. (2)-(3) nelle coordinate $(u, v)$. Determina la condizione necessaria affinché esista una sola soluzione di modo.

2. Mostra che il numero massimo di modi supportati dalla lastra dielettrica è
$$M = \left\lceil \frac{k_0 d}{\pi}\sqrt{n_1^2 - n_2^2} \right\rceil, \tag{6}$$
dove il simbolo $\lceil\ \rceil$ indica la funzione di arrotondamento per eccesso, per cui l'espressione al suo interno è aumentata all'intero più vicino.

3. Verifica che il numero di soluzioni di modo aumenta di uno per ogni incremento di frequenza:
$$\Delta\omega = \frac{\pi c}{d\sqrt{n_1^2 - n_2^2}}. \tag{7}$$

4. A partire dall'eq. 1, mostra che la velocità di gruppo ($d\omega/d\beta$) di ciascuna soluzione di modo supportata è
$$v_g = \frac{d \tan\theta + \frac{\partial \delta}{\partial \beta}}{\frac{n_1 d}{c \cos\theta} - \frac{\partial \delta}{\partial \omega}}. \tag{8}$$

5. Mostra che la massima differenza di tempo, per i diversi modi nella guida d'onda a lastra dielettrica, per percorrere una distanza $L$ è
$$\tau = \frac{L}{c}(n_1 - n_2). \tag{9}$$

6. Per $n_1 = 1.7$, $n_2 = 1.5$, $\lambda = 800$ nm (nel vuoto) e $d = 1$ μm, trova tutte le soluzioni di modo per $\theta$ (con $\theta > \theta_c$). Traccia il campo elettrico $E(z)$ per queste soluzioni.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1mir4XI0fZCKiFilqsuv26nVDG4u16XMV/view)
**Topic:** [[Wave Optics]], [[Electromagnetism]]
**Metodi:** [[Snell's Law (metodo)|Snell's Law]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Wave Equation (metodo)|Wave Equation]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** —



<span class="atom-split" id="q05" data-atom="q05" data-title="WoPhO 2011 — Quesito 5" data-tags="kg/prova,paese/International,comp/WoPhO,topic/thermodynamics,argomento/termodinamica,difficolta/5,multidisciplina/multi,object/gas,object/piston,object/tank-container"></span>

<div class="qlang-switch" data-default="en"></div>



**Liquid Air**

A mixture of oxygen and nitrogen gas is stored in a closed container equipped with a piston on one end at a temperature of $T = 77.4$ K. The total amount of the gas mixture is 1.1 mole and its initial pressure is 0.5 atm. With the help of the piston the gas mixture is slowly compressed at constant temperature.

Using plausible assumptions, plot the pressure of the system as a function of its volume until one tenth of the initial volume, if the ratio of the number of moles of oxygen to the number of moles of nitrogen is

a) $\dfrac{n_{\mathrm{O}_2}}{n_{\mathrm{N}_2}} = \dfrac{1}{9}$.

b) $\dfrac{n_{\mathrm{O}_2}}{n_{\mathrm{N}_2}} = \dfrac{2}{9}$.

c) $\dfrac{n_{\mathrm{O}_2}}{n_{\mathrm{N}_2}} = \dfrac{1}{4}$.

Find the pressure and volume at distinctive points of these isothermal curves.

You can use the following data:

- Boiling point of liquid nitrogen at 1 atmosphere: 77.4 K
- Boiling point of liquid oxygen at 1 atmosphere: 90.2 K
- Heat of vaporization of oxygen: 213 J/g

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1-4sLTxve1wiwUF4hswdYZ8ZwNK5wsM3A/view)
**Topic:** [[Thermodynamics]], [[Kinetic Theory]]
**Metodi:** [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Gas (object)|Gas]], [[Piston (object)|Piston]], [[Tank/Container (object)|Tank/Container]]


<div class="qlang-split" data-lang="it"></div>

**Aerolo liquido**

Una miscela di ossigeno e di gas azoto viene immagazzinata in un contenitore chiuso dotato di un pistone su una estremità a una temperatura di $T = 77.4$ K. La quantità totale della miscela di gas è di 1,1 mol e la sua pressione iniziale è di 0,5 atm. Con l'aiuto del pistone la miscela di gas viene lentamente compressa a temperatura costante.

Usando ipotesi plausibili, tracciare la pressione del sistema in funzione del suo volume fino a un decimo del volume iniziale, se il rapporto tra il numero di mole di ossigeno e il numero di mole di azoto è

a) $\dfrac{n_{\mathrm{O}_2}}{n_{\mathrm{N}_2}} = \dfrac{1}{9}$.

b) $\dfrac{n_{\mathrm{O}_2}}{n_{\mathrm{N}_2}} = \dfrac{2}{9}$.

c) $\dfrac{n_{\mathrm{O}_2}}{n_{\mathrm{N}_2}} = \dfrac{1}{4}$.

Trova la pressione e il volume nei punti distinti di queste curve isotermiche.

È possibile utilizzare i seguenti dati:

- punto di ebollizione dell'azoto liquido a 1 atmosfera: 77,4 K
- punto di ebollizione dell'ossigeno liquido a 1 atmosfera: 90,2 K
- Calore di vaporizzazione dell'ossigeno: 213 J/g

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1-4sLTxve1wiwUF4hswdYZ8ZwNK5wsM3A/view)
**Topic:** [[Thermodynamics]], [[Kinetic Theory]]
**Metodi:** [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Gas (object)|Gas]], [[Piston (object)|Piston]], [[Tank/Container (object)|Tank/Container]]



<span class="atom-split" id="q06" data-atom="q06" data-title="WoPhO 2011 — Quesito 6" data-tags="kg/prova,paese/International,comp/WoPhO,topic/gravitation,argomento/gravitazione-e-astrofisica,difficolta/5,multidisciplina/multi,object/planet,object/star"></span>

<div class="qlang-switch" data-default="en"></div>



**Lagrange Points Stability**

In a system that rotates with the Earth around the Sun, there are five equilibrium points (where the sum of the forces is zero). These 5 points are known as Lagrange Points (named after Joseph Lagrange, the first person to study this three-body system). Exact analysis of this system is very complicated and chaotic. In the following problem, the mass of the two bodies ($M_1$ and $M_2$) are taken to be much larger than that of the third body ($m$). The distance between $M_1$ and $M_2$ is taken to be $R$.

<!--fig:start-->
![[WoPhO_2011_Q6_p1_f1.png]]
*Figure: Geometry of the three-body system showing $M_1$, $M_2$, $m$, the vectors $\mathbf{r}_1$, $\mathbf{r}_2$, $r_{m1}$, $r_{m2}$, $\mathbf{r}$, and the separation $R$.*
<!--fig:end-->

#### 1. Basic equations of the system

(a) Write down the vector of the total gravitational forces $\mathbf{F}_g$ on $m$.

(b) By assuming $M_1, M_2 \gg m$, determine the angular velocity of the $M_1$ and $M_2$ system ($\Omega$).

(c) In a frame that rotates with the system, there are fictitious forces on $m$. Write down the vector of the total forces on this mass ($\mathbf{F_\Omega}$) in this frame.

(d) Choose a coordinate system where the three masses are in the $xy$-plane and the angular velocity $\Omega$ is in the positive $z$-axis. The center of the coordinate is set at the center of mass of $M_1$ and $M_2$ on the $x$-axis. Write the position of $m$ as $\mathbf{r} = x(t)\hat{i} + y(t)\hat{j}$. In the rotating frame where $m$ is at rest, write down the total forces on $m$ in the $x$- and $y$-axis using parameter $\alpha = \frac{M_1}{M_1 + M_2}$ and $\beta = \frac{M_2}{M_1 + M_2}$.

#### 2. Identifying Lagrange Points

There are 5 points with zero net forces in this rotating system. Three of them (call them $L_1$, $L_2$ and $L_3$) lie on the line connecting $M_1$ and $M_2$ (the $x$-axis) and the other two (call them $L_4$ and $L_5$) lie on the $xy$-plane on symmetric positions above and below the $x$-axis; that is, $y_4 = -y_5$.

The following three questions will help you determine the three Lagrange points on the $x$-axis.

(a) First consider the case of finding the position of $L_1$, $L_2$ and $L_3$. Use $x = (\nu - \alpha)R$, with $\nu$ the distance of $m$ from $M_1$ in units of $R$. Write down the equation of force that must be satisfied to identify these points. Express this equation in terms of $\nu$ and $\alpha$.

(b) The equation above gives rise to three cases (each for $L_1$, $L_2$ and $L_3$) to consider, $\nu < a$, $a < \nu < b$ and $b < \nu$. Determine the values of $a$ and $b$.

(c) For the first case, $\nu < a$, write $\nu = -1 + \delta_1$ with $\delta_1$ a small positive number that depends on $\alpha$. This value of $\nu$ will determine the position of the first Lagrange point at $x = -R(1 + \xi_1)$. Determine $\xi_1$ as a function of $\alpha$.

(d) For the second case, $a < \nu < b$, write $\nu = 1 - \delta_2$ with $\delta_2$ a small positive number that depends on $\alpha$. This value of $\nu$ will determine the position of the second Lagrange point at $x = R(1 - \xi_2)$. Determine $\xi_2$ as a function of $\alpha$.

(e) For the third case, $b < \nu$, write $\nu = 1 + \delta_3$ with $\delta_3$ a small positive number that depends on $\alpha$. This value of $\nu$ will determine the position of the third Lagrange point at $x = R(1 + \xi_3)$. Determine $\xi_3$ as a function of $\alpha$.

Determining the fourth and fifth Lagrange points requires a more complicated method. First decompose the gravitational force on $m$ into components parallel and perpendicular to the vector $\mathbf{r}$.

(f) Find the unit vector parallel to the vector $\mathbf{r}$, $\hat{\mathbf{e}}_r$. Find also the unit vector perpendicular to the vector $\mathbf{r}$ on the $xy$-plane, $\hat{\mathbf{e}}_\perp$.

(g) Find the component of the force on $m$ parallel to the vector $\mathbf{r}$, $F^\parallel_{\Omega}$, and find the component perpendicular to the vector $\mathbf{r}$, $F^\perp_{\Omega}$.

(h) Specify the condition that must be satisfied by the force component perpendicular to the vector $\mathbf{r}$ in order that mass $m$ be in equilibrium. With this condition, determine the relation between $r_{m1}$ and $r_{m2}$.

(i) Specify the condition that must be satisfied by the force component parallel to the vector $\mathbf{r}$ in order that mass $m$ be in equilibrium. With this condition, determine the relation between $r_{m1}$ and $R$.

(j) Now determine the position of the fourth Lagrange point ($x_4, y_4$) and the fifth Lagrange point ($x_5, y_5$).

#### 3. Lagrange Point Stability

To test the stability of these Lagrange points, small perturbation are given to the mass $m$ around its equilibrium points. Because the forces in this system depend on the position $(x, y)$ and the velocity $(v_x, v_y)$ of the mass $m$, the restoring forces must be calculated for variations in position and velocity. Expand the total force as follows:

$$
\begin{aligned}
F_x(x_0 + \delta x, y_0 + \delta y, v_{x,0} + \delta v_x, v_{y,0} + \delta v_y) &= \frac{\partial F_x}{\partial x}\delta x + \frac{\partial F_x}{\partial y}\delta y + \frac{\partial F_x}{\partial v_x}\delta v_x + \frac{\partial F_x}{\partial v_y}\delta v_y \\
F_y(x_0 + \delta x, y_0 + \delta y, v_{x,0} + \delta v_x, v_{y,0} + \delta v_y) &= \frac{\partial F_y}{\partial x}\delta x + \frac{\partial F_y}{\partial y}\delta y + \frac{\partial F_y}{\partial v_x}\delta v_x + \frac{\partial F_y}{\partial v_y}\delta v_y
\end{aligned}
$$

This force has taken into account the contribution of the velocity of the mass $m$. All the partial derivatives are evaluated at the point $(x_0, y_0, v_{x,0}, v_{y,0})$.

(a) Write down the general form for $\frac{1}{m}\frac{\partial F_x}{\partial x}$, $\frac{1}{m}\frac{\partial F_x}{\partial y}$, $\frac{1}{m}\frac{\partial F_x}{\partial v_x}$, $\frac{1}{m}\frac{\partial F_x}{\partial v_y}$. Show that $\frac{\partial F_x}{\partial y} = \frac{\partial F_y}{\partial x}$.

(b) Calculate $\frac{1}{m}\frac{\partial F_x}{\partial v_x}$, $\frac{1}{m}\frac{\partial F_x}{\partial v_y}$, $\frac{1}{m}\frac{\partial F_y}{\partial v_x}$, $\frac{1}{m}\frac{\partial F_y}{\partial v_y}$. These four coefficients should not change for the five Lagrange points.

These eight coefficients should act as a restoring constant (analog to the spring constant). Now we are ready to check the stability of the five Lagrange points. Consider only the lowest order term in $\alpha$, ignore all higher order terms.

(c) The first Lagrange Point

i. Show that $\frac{1}{m}\frac{\partial F_x}{\partial x} = c_1\Omega^2$. Determine $c_1$.

ii. Show that $\frac{\partial F_x}{\partial y} = \frac{\partial F_y}{\partial x} = 0$.

iii. Show that $\frac{1}{m}\frac{\partial F_y}{\partial y} = c_2\Omega^2$. Determine $c_2$.

iv. By substituting $\delta x = Ae^M$ and $\delta y = Be^M$, with $A$ and $B$ nonzero, determine $\lambda$ as a function of $\alpha$ and $\Omega$ only.

v. There are four solutions to $\lambda$. Write down the condition that these solutions must satisfy in order that the first Lagrange point is stable and allowed to oscillate freely. Write down the equation of motion of the second Lagrange point assuming $\theta$ and $\alpha$ are small.

vi. For the Earth-Sun system $\alpha$ is $3.0 \times 10^{-6}$ and $\Omega$ is $2\pi/$year. If this point is stable, determine its period of oscillation (in days), if not, determine its time constant $1/\lambda$ (in days also).

(d) The second Lagrange Point

i. Show that $\frac{1}{m}\frac{\partial F_x}{\partial x} = c_3\Omega^2$. Determine $c_3$.

ii. Show that $\frac{1}{m}\frac{\partial F_x}{\partial y} = \frac{1}{m}\frac{\partial F_y}{\partial x} = 0$.

iii. Show that $\frac{1}{m}\frac{\partial F_y}{\partial y} = c_4\Omega^2$. Determine $c_4$.

iv. By substituting $\delta x = Ae^M$ and $\delta y = Be^M$, with $A$ and $B$ nonzero, determine $\lambda$ as a function of $\alpha$ and $\Omega$ only.

v. There are four solutions to $\lambda$. Write down the condition that these solutions must satisfy in order that the second Lagrange point is stable and allowed to oscillate freely. Write down the equation of motion of the second Lagrange point assuming $\theta$ and $\alpha$ are small.

vi. For the Earth-Sun system: if this point is stable, determine its period of oscillation (in days), if not, determine its time constant $1/\lambda$ (in days also).

The third Lagrange point is similar to the second Lagrange point hence it need not be considered.

(e) The fourth Lagrange Point

i. Show that $\frac{1}{m}\frac{\partial F_x}{\partial x} = c_5\Omega^2$. Determine $c_5$.

ii. Show that $\frac{1}{m}\frac{\partial F_x}{\partial y} = \frac{1}{m}\frac{\partial F_y}{\partial x} = (c_6 + c_7\alpha)\Omega^2$. Determine $c_6$ and $c_7$.

iii. Show that $\frac{1}{m}\frac{\partial F_y}{\partial y} = c_8\Omega^2$. Determine $c_8$.

iv. By substituting $\delta x = Ae^M$ and $\delta y = Be^M$, with $A$ and $B$ nonzero, determine $\lambda$ as a function of $\alpha$ and $\Omega$ only.

v. Define $M_1/M_2 = \xi$. Find the range of value of $\xi$ for the fourth Lagrange point to be stable.

The fifth Lagrange point has the same behavior as the fourth Lagrange point, hence it need not be considered.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1fGuzmV3XWxdtinhwpyd6euwc6J4rwrCk/view)
**Topic:** [[Gravitation]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Differential Equations (metodo)|Differential Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Planet (object)|Planet]], [[Star (object)|Star]]


<div class="qlang-split" data-lang="it"></div>

**Stabilità dei punti di Lagrange**

In un sistema che ruota con la Terra attorno al Sole, ci sono cinque punti di equilibrio (dove la somma delle forze è nulla). Questi 5 punti sono noti come punti di Lagrange (dal nome di Joseph Lagrange, la prima persona a studiare questo sistema a tre corpi). L'analisi esatta di questo sistema è molto complicata e caotica. Nel problema seguente, la massa dei due corpi ($M_1$ e $M_2$) è assunta molto maggiore di quella del terzo corpo ($m$). La distanza tra $M_1$ e $M_2$ è assunta pari a $R$.

<!--fig:start-->
![[WoPhO_2011_Q6_p1_f1.png]]
*Figura: geometria del sistema a tre corpi che mostra $M_1$, $M_2$, $m$, i vettori $\mathbf{r}_1$, $\mathbf{r}_2$, $r_{m1}$, $r_{m2}$, $\mathbf{r}$, e la separazione $R$.*
<!--fig:end-->

#### 1. Equazioni fondamentali del sistema

(a) Scrivi il vettore delle forze gravitazionali totali $\mathbf{F}_g$ su $m$.

(b) Assumendo $M_1, M_2 \gg m$, determina la velocità angolare del sistema $M_1$ e $M_2$ ($\Omega$).

(c) In un sistema di riferimento che ruota con il sistema, ci sono forze fittizie su $m$. Scrivi il vettore delle forze totali su questa massa ($\mathbf{F_\Omega}$) in questo riferimento.

(d) Scegli un sistema di coordinate in cui le tre masse sono nel piano $xy$ e la velocità angolare $\Omega$ è lungo l'asse $z$ positivo. L'origine delle coordinate è posta nel centro di massa di $M_1$ e $M_2$ sull'asse $x$. Scrivi la posizione di $m$ come $\mathbf{r} = x(t)\hat{i} + y(t)\hat{j}$. Nel riferimento rotante in cui $m$ è in quiete, scrivi le forze totali su $m$ lungo gli assi $x$ e $y$ usando i parametri $\alpha = \frac{M_1}{M_1 + M_2}$ e $\beta = \frac{M_2}{M_1 + M_2}$.

#### 2. Identificazione dei punti di Lagrange

Ci sono 5 punti con forza netta nulla in questo sistema rotante. Tre di essi (chiamiamoli $L_1$, $L_2$ e $L_3$) giacciono sulla retta che connette $M_1$ e $M_2$ (l'asse $x$) e gli altri due (chiamiamoli $L_4$ e $L_5$) giacciono nel piano $xy$ in posizioni simmetriche sopra e sotto l'asse $x$; cioè, $y_4 = -y_5$.

Le seguenti tre domande ti aiuteranno a determinare i tre punti di Lagrange sull'asse $x$.

(a) Considera prima il caso di trovare la posizione di $L_1$, $L_2$ e $L_3$. Usa $x = (\nu - \alpha)R$, con $\nu$ la distanza di $m$ da $M_1$ in unità di $R$. Scrivi l'equazione delle forze che deve essere soddisfatta per identificare questi punti. Esprimi questa equazione in funzione di $\nu$ e $\alpha$.

(b) L'equazione precedente dà origine a tre casi (uno per ciascuno di $L_1$, $L_2$ e $L_3$) da considerare, $\nu < a$, $a < \nu < b$ e $b < \nu$. Determina i valori di $a$ e $b$.

(c) Per il primo caso, $\nu < a$, scrivi $\nu = -1 + \delta_1$ con $\delta_1$ un piccolo numero positivo che dipende da $\alpha$. Questo valore di $\nu$ determinerà la posizione del primo punto di Lagrange in $x = -R(1 + \xi_1)$. Determina $\xi_1$ in funzione di $\alpha$.

(d) Per il secondo caso, $a < \nu < b$, scrivi $\nu = 1 - \delta_2$ con $\delta_2$ un piccolo numero positivo che dipende da $\alpha$. Questo valore di $\nu$ determinerà la posizione del secondo punto di Lagrange in $x = R(1 - \xi_2)$. Determina $\xi_2$ in funzione di $\alpha$.

(e) Per il terzo caso, $b < \nu$, scrivi $\nu = 1 + \delta_3$ con $\delta_3$ un piccolo numero positivo che dipende da $\alpha$. Questo valore di $\nu$ determinerà la posizione del terzo punto di Lagrange in $x = R(1 + \xi_3)$. Determina $\xi_3$ in funzione di $\alpha$.

Determinare il quarto e il quinto punto di Lagrange richiede un metodo più complicato. Prima decomponi la forza gravitazionale su $m$ in componenti parallela e perpendicolare al vettore $\mathbf{r}$.

(f) Trova il versore parallelo al vettore $\mathbf{r}$, $\hat{\mathbf{e}}_r$. Trova anche il versore perpendicolare al vettore $\mathbf{r}$ nel piano $xy$, $\hat{\mathbf{e}}_\perp$.

(g) Trova la componente della forza su $m$ parallela al vettore $\mathbf{r}$, $F^\parallel_{\Omega}$, e trova la componente perpendicolare al vettore $\mathbf{r}$, $F^\perp_{\Omega}$.

(h) Specifica la condizione che deve essere soddisfatta dalla componente della forza perpendicolare al vettore $\mathbf{r}$ affinché la massa $m$ sia in equilibrio. Con questa condizione, determina la relazione tra $r_{m1}$ e $r_{m2}$.

(i) Specifica la condizione che deve essere soddisfatta dalla componente della forza parallela al vettore $\mathbf{r}$ affinché la massa $m$ sia in equilibrio. Con questa condizione, determina la relazione tra $r_{m1}$ e $R$.

(j) Ora determina la posizione del quarto punto di Lagrange ($x_4, y_4$) e del quinto punto di Lagrange ($x_5, y_5$).

#### 3. Stabilità dei punti di Lagrange

Per verificare la stabilità di questi punti di Lagrange, si danno piccole perturbazioni alla massa $m$ attorno ai suoi punti di equilibrio. Poiché le forze in questo sistema dipendono dalla posizione $(x, y)$ e dalla velocità $(v_x, v_y)$ della massa $m$, le forze di richiamo devono essere calcolate per variazioni di posizione e velocità. Sviluppa la forza totale come segue:

$$
\begin{aligned}
F_x(x_0 + \delta x, y_0 + \delta y, v_{x,0} + \delta v_x, v_{y,0} + \delta v_y) &= \frac{\partial F_x}{\partial x}\delta x + \frac{\partial F_x}{\partial y}\delta y + \frac{\partial F_x}{\partial v_x}\delta v_x + \frac{\partial F_x}{\partial v_y}\delta v_y \\
F_y(x_0 + \delta x, y_0 + \delta y, v_{x,0} + \delta v_x, v_{y,0} + \delta v_y) &= \frac{\partial F_y}{\partial x}\delta x + \frac{\partial F_y}{\partial y}\delta y + \frac{\partial F_y}{\partial v_x}\delta v_x + \frac{\partial F_y}{\partial v_y}\delta v_y
\end{aligned}
$$

Questa forza ha tenuto conto del contributo della velocità della massa $m$. Tutte le derivate parziali sono valutate nel punto $(x_0, y_0, v_{x,0}, v_{y,0})$.

(a) Scrivi la forma generale di $\frac{1}{m}\frac{\partial F_x}{\partial x}$, $\frac{1}{m}\frac{\partial F_x}{\partial y}$, $\frac{1}{m}\frac{\partial F_x}{\partial v_x}$, $\frac{1}{m}\frac{\partial F_x}{\partial v_y}$. Mostra che $\frac{\partial F_x}{\partial y} = \frac{\partial F_y}{\partial x}$.

(b) Calcola $\frac{1}{m}\frac{\partial F_x}{\partial v_x}$, $\frac{1}{m}\frac{\partial F_x}{\partial v_y}$, $\frac{1}{m}\frac{\partial F_y}{\partial v_x}$, $\frac{1}{m}\frac{\partial F_y}{\partial v_y}$. Questi quattro coefficienti non dovrebbero cambiare per i cinque punti di Lagrange.

Questi otto coefficienti dovrebbero agire come una costante di richiamo (analoga alla costante elastica). Ora siamo pronti a verificare la stabilità dei cinque punti di Lagrange. Considera solo il termine di ordine più basso in $\alpha$, ignora tutti i termini di ordine superiore.

(c) Il primo punto di Lagrange

i. Mostra che $\frac{1}{m}\frac{\partial F_x}{\partial x} = c_1\Omega^2$. Determina $c_1$.

ii. Mostra che $\frac{\partial F_x}{\partial y} = \frac{\partial F_y}{\partial x} = 0$.

iii. Mostra che $\frac{1}{m}\frac{\partial F_y}{\partial y} = c_2\Omega^2$. Determina $c_2$.

iv. Sostituendo $\delta x = Ae^M$ e $\delta y = Be^M$, con $A$ e $B$ non nulli, determina $\lambda$ come funzione di soli $\alpha$ e $\Omega$.

v. Ci sono quattro soluzioni per $\lambda$. Scrivi la condizione che queste soluzioni devono soddisfare affinché il primo punto di Lagrange sia stabile e possa oscillare liberamente. Scrivi l'equazione del moto del secondo punto di Lagrange assumendo che $\theta$ e $\alpha$ siano piccoli.

vi. Per il sistema Terra-Sole $\alpha$ è $3.0 \times 10^{-6}$ e $\Omega$ è $2\pi/$anno. Se questo punto è stabile, determina il suo periodo di oscillazione (in giorni), altrimenti determina la sua costante di tempo $1/\lambda$ (anch'essa in giorni).

(d) Il secondo punto di Lagrange

i. Mostra che $\frac{1}{m}\frac{\partial F_x}{\partial x} = c_3\Omega^2$. Determina $c_3$.

ii. Mostra che $\frac{1}{m}\frac{\partial F_x}{\partial y} = \frac{1}{m}\frac{\partial F_y}{\partial x} = 0$.

iii. Mostra che $\frac{1}{m}\frac{\partial F_y}{\partial y} = c_4\Omega^2$. Determina $c_4$.

iv. Sostituendo $\delta x = Ae^M$ e $\delta y = Be^M$, con $A$ e $B$ non nulli, determina $\lambda$ come funzione di soli $\alpha$ e $\Omega$.

v. Ci sono quattro soluzioni per $\lambda$. Scrivi la condizione che queste soluzioni devono soddisfare affinché il secondo punto di Lagrange sia stabile e possa oscillare liberamente. Scrivi l'equazione del moto del secondo punto di Lagrange assumendo che $\theta$ e $\alpha$ siano piccoli.

vi. Per il sistema Terra-Sole: se questo punto è stabile, determina il suo periodo di oscillazione (in giorni), altrimenti determina la sua costante di tempo $1/\lambda$ (anch'essa in giorni).

Il terzo punto di Lagrange è simile al secondo punto di Lagrange, quindi non è necessario considerarlo.

(e) Il quarto punto di Lagrange

i. Mostra che $\frac{1}{m}\frac{\partial F_x}{\partial x} = c_5\Omega^2$. Determina $c_5$.

ii. Mostra che $\frac{1}{m}\frac{\partial F_x}{\partial y} = \frac{1}{m}\frac{\partial F_y}{\partial x} = (c_6 + c_7\alpha)\Omega^2$. Determina $c_6$ e $c_7$.

iii. Mostra che $\frac{1}{m}\frac{\partial F_y}{\partial y} = c_8\Omega^2$. Determina $c_8$.

iv. Sostituendo $\delta x = Ae^M$ e $\delta y = Be^M$, con $A$ e $B$ non nulli, determina $\lambda$ come funzione di soli $\alpha$ e $\Omega$.

v. Definisci $M_1/M_2 = \xi$. Trova l'intervallo di valori di $\xi$ affinché il quarto punto di Lagrange sia stabile.

Il quinto punto di Lagrange ha lo stesso comportamento del quarto punto di Lagrange, quindi non è necessario considerarlo.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1fGuzmV3XWxdtinhwpyd6euwc6J4rwrCk/view)
**Topic:** [[Gravitation]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Differential Equations (metodo)|Differential Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Planet (object)|Planet]], [[Star (object)|Star]]



<span class="atom-split" id="q07" data-atom="q07" data-title="WoPhO 2011 — Quesito 7" data-tags="kg/prova,paese/International,comp/WoPhO,topic/oscillations-and-waves,argomento/onde-e-oscillazioni,difficolta/5,multidisciplina/multi,object/cylinder,object/spring,object/rope-string"></span>

<div class="qlang-switch" data-default="en"></div>



**Helical Rope**

A device is built by placing two metal strips, each of mass $m$, on a large, frictionless cylinder. Two identical massless elastic ropes each with spring constant $k$ and obeying Hooke's Law are used to connect the metal strips such that the two ropes are initially at their natural length $x_0$ and parallel to each other. The contact points of each rope on the same strip are diametrically opposite to each other, and the whole device can be seen on Figure 1. Strip A is bolted to the cylinder, while strip B is free to move along and rotate about the cylinder's axis.

<!--fig:start-->
![[WoPhO_2011_Q7_p1_f1.png]]
*Figure 1: The device in its initial configuration. The screw can be used to prevent rotation of strip B.*
<!--fig:end-->

1. The cylinder is now oriented such that its axis is vertical under a constant gravitational field $g$, and strip A is above strip B. Strip B is now rotated $N$ times while its distance from strip A is maintained at $x_0$. After this, strip B is prevented from rotating by a screw, as shown in Figure 1.

(a) Find an equation that, given numerical values for the initial conditions, would allow you to calculate $x_1$, the new equilibrium position.

(b) Under certain conditions the metal strip will undergo simple harmonic oscillation. Calculate the frequency of oscillation for small $\Delta x$, in terms of $k$, $r$, $N$, $x_0$, and $x_1$.

2. The cylinder is now oriented horizontally: the ropes are returned to their initial position, and strip B is prevented from rotating by means of the screw.

(a) A horizontal stretching force $F$ is now applied to strip B. If the force is increased very gradually, the ropes break when the force reaches a value $F_0$. What, then, is the minimum amount of constant force required to break the ropes?

(b) If strip B is rotated $N$ times before the screw is put in place keeping the total length of the ropes $x_0$, calculate the minimum horizontal force required to break the ropes if said force is:

i. increased very gradually.

ii. kept constant.

3. The system is returned to its initial horizontal configuration. All constraints on strip B are now removed, and the strip is rotated through an angle $\theta_0$ while keeping the distance between the two metal strip $x_0$, and then released (initially $\dot{x}(0) = 0$, and $\dot{\theta}(0) = 0$).

(a) Find the equation of motion of strip B!

(b) Solve the equation of motion for $x(t)$ and $\theta(t)$!

(c) Find the maximum velocity and maximum angular velocity, and also the time $T$ required for strip B to reach strip A!

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1MRYZzZJ2kV9JFK3_V8RbgJfz2oPxub9z/view)
**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Hooke's Law (metodo)|Hooke's Law]], [[Differential Equations (metodo)|Differential Equations]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Spring (object)|Spring]], [[Rope/String (object)|Rope/String]]


<div class="qlang-split" data-lang="it"></div>

**Riccia a spirale**

Un dispositivo è costruito posizionando due strisce di metallo, ciascuna di massa $m$, su un cilindro grande e senza attrito. Per collegare le strisce di metallo vengono utilizzate due identiche corde elastiche senza massa, ciascuna con costante di molla $k$ e obbedendo alla legge di Hooke, in modo che le due corde siano inizialmente a loro lunghezza naturale $x_0$ e parallele l'una all'altra. I punti di contatto di ciascuna corda sulla stessa striscia sono diametralmente opposti l'uno all'altro, e l'intero dispositivo può essere visto nella Figura 1. La striscia A è legata al cilindro, mentre la striscia B è libera di muoversi e ruotare attorno all'asse del cilindro.

<!--fig:start-->
![[WoPhO_2011_Q7_p1_f1.png]]
*Figura 1: Il dispositivo nella sua configurazione iniziale. La vite può essere utilizzata per impedire la rotazione della striscia B.*
<!--fig:end-->

1. Il cilindro è ora orientato in modo tale che il suo asse sia verticale sotto un campo gravitazionale costante $g$, e la striscia A è sopra la striscia B. La striscia B è ora rotata $N$ volte mentre la sua distanza dalla striscia A è mantenuta a $x_0$. Dopo di che, la striscia B viene impedita di ruotare con una vite, come mostrato alla figura 1.

(a) Trovare un'equazione che, dati i valori numerici delle condizioni iniziali, vi permetterebbe di calcolare $x_1$, la nuova posizione di equilibrio.

b) In determinate condizioni la striscia metallica subirà una semplice oscillazione armonica. Calcolare la frequenza di oscillazione per $\Delta x$ di piccole dimensioni, in termini di $k$, $r$, $N$, $x_0$ e $x_1$.

2. Il cilindro è ora orizzontalmente orientato: le corde vengono riportate nella posizione iniziale e la striscia B viene impedita di ruotare con la vite.

(a) Si applica ora alla striscia B una forza di estensione orizzontale $F$. Se la forza viene aumentata molto gradualmente, le corde si rompono quando la forza raggiunge un valore $F_0$. Quanto è dunque necessaria la forza minima costante per rompere le corde?

b) Se la striscia B viene girata $N$ volte prima di mettere in funzione la vite mantenendo la lunghezza totale delle corde $x_0$, calcolare la forza orizzontale minima necessaria per rompere le corde se tale forza è:

i. La crescita è aumentata molto gradualmente.

ii. - E' stato costante.

3. Il sistema viene riportato alla sua configurazione orizzontale iniziale. Tutti i vincoli sulla striscia B sono ora rimossi e la striscia viene rotata in un angolo $\theta_0$ mantenendo la distanza tra le due strisce metalliche $x_0$, e quindi rilasciata (in primo luogo $\dot{x}(0) = 0$ e $\dot{\theta}(0) = 0$).

(a) Trova l'equazione di movimento della striscia B!

b) Risolvere l'equazione di movimento per $x(t)$ e $\theta(t)$!

c) Trova la velocità massima e la velocità angolare massima, nonché il tempo $T$ necessario per raggiungere la banda B la banda A!

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1MRYZzZJ2kV9JFK3_V8RbgJfz2oPxub9z/view)
**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Hooke's Law (metodo)|Hooke's Law]], [[Differential Equations (metodo)|Differential Equations]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Spring (object)|Spring]], [[Rope/String (object)|Rope/String]]



<span class="atom-split" id="q08" data-atom="q08" data-title="WoPhO 2011 — Quesito 8" data-tags="kg/prova,paese/International,comp/WoPhO,topic/magnetism,argomento/elettromagnetismo,difficolta/5,multidisciplina/multi,object/magnetic-dipole,object/rope-string"></span>

<div class="qlang-switch" data-default="en"></div>



**Magnetic Dipole Oscillation**

A magnetic dipole with magnetic moment $m_1$ is placed at the coordinate origin parallel to the $x$-axis.

1. Determine the resulting magnetic field in all space.

2. Another dipole is placed at a distance $r$ from the origin at an angle $\theta$ to the $x$-axis. The magnetic moment of the second dipole, $m_2$, forms an angle $\alpha$ to the $x$-axis. The whole set-up can be seen in Fig. 1. Determine the torque on the second dipole.

3. Determine the interaction energy between the two dipoles.

4. Determine the force on the second dipole.

5. The second dipole is tied to the first dipole via a massless string such that the distance between the two is fixed at $R$. While the orientation of the first dipole at the coordinate origin is fixed, the orientation of the second dipole may change. It is also allowed to move freely in the $xy$-plane around the first dipole. Write down the equation of motion of the second dipole. The mass and moment of inertia of the second dipole are taken to be $m$ and $I$ respectively.

6. Initially the second dipole is at rest on the $x$-axis, with the magnetic moment forming an angle $\alpha_0$ to the $x$-axis ($\alpha_0 < 1$). At $t = 0$, the second dipole is released and allowed to move freely. Write down the equation of motion of the second dipole assuming $\theta$ and $\alpha$ are small.

7. The system undergoes simple harmonic oscillation. You are asked to determine the normal mode frequencies of oscillation. The system is in a normal mode when the oscillating variables are in phase and can be written as follows: $\theta = \theta_0 \cos(\omega t + \phi)$ and $\alpha = \alpha_0 \cos(\omega t + \phi)$. There are two possible values of $\omega$ (denoted by $\omega_1$ and $\omega_2$). Determine $\omega_1$ and $\omega_2$.

8. For each normal mode, determine the ratio of the amplitude of $\alpha$ to $\theta$, $c_1 = \alpha_1/\theta_1$ and $c_2 = \alpha_2/\theta_2$.

9. The equation of motion of the system can be expressed as follows:
$$
\begin{aligned}
\theta &= \theta_1 \cos(\omega_1 t + \phi_1) + \theta_2 \cos(\omega_2 t + \phi_2), \\
\alpha &= c_1 \theta_1 \cos(\omega_1 t + \phi_1) + c_2 \theta_2 \cos(\omega_2 t + \phi_2).
\end{aligned}
$$
Using the initial conditions, determine the values of $\theta_1$, $\alpha_1$, $\theta_2$, and $\phi_2$.

<!--fig:start-->
![[WoPhO_2011_Q8_p1_f1.png]]
*Figure 1:*
<!--fig:end-->

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1SjkGL9p9N_GkU1OEmk98I80gFJ9Jvi5H/view)
**Topic:** [[Magnetism]], [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Magnetic Dipole (object)|Magnetic Dipole]], [[Rope/String (object)|Rope/String]]


<div class="qlang-split" data-lang="it"></div>

**Oscillazione di dipolo magnetico**

Un dipolo magnetico con momento magnetico $m_1$ è posto nell'origine delle coordinate parallelo all'asse $x$.

1. Determina il campo magnetico risultante in tutto lo spazio.

2. Un altro dipolo è posto a una distanza $r$ dall'origine con un angolo $\theta$ rispetto all'asse $x$. Il momento magnetico del secondo dipolo, $m_2$, forma un angolo $\alpha$ con l'asse $x$. L'intera configurazione è visibile in Fig. 1. Determina il momento torcente sul secondo dipolo.

3. Determina l'energia di interazione tra i due dipoli.

4. Determina la forza sul secondo dipolo.

5. Il secondo dipolo è legato al primo dipolo tramite un filo privo di massa in modo che la distanza tra i due sia fissata a $R$. Mentre l'orientazione del primo dipolo nell'origine delle coordinate è fissa, l'orientazione del secondo dipolo può cambiare. Esso può inoltre muoversi liberamente nel piano $xy$ attorno al primo dipolo. Scrivi l'equazione del moto del secondo dipolo. La massa e il momento d'inerzia del secondo dipolo sono assunti pari a $m$ e $I$ rispettivamente.

6. Inizialmente il secondo dipolo è in quiete sull'asse $x$, con il momento magnetico che forma un angolo $\alpha_0$ con l'asse $x$ ($\alpha_0 < 1$). A $t = 0$, il secondo dipolo viene rilasciato e lasciato muovere liberamente. Scrivi l'equazione del moto del secondo dipolo assumendo che $\theta$ e $\alpha$ siano piccoli.

7. Il sistema compie un'oscillazione armonica semplice. Ti si chiede di determinare le frequenze dei modi normali di oscillazione. Il sistema è in un modo normale quando le variabili oscillanti sono in fase e possono essere scritte come segue: $\theta = \theta_0 \cos(\omega t + \phi)$ e $\alpha = \alpha_0 \cos(\omega t + \phi)$. Ci sono due possibili valori di $\omega$ (indicati con $\omega_1$ e $\omega_2$). Determina $\omega_1$ e $\omega_2$.

8. Per ogni modo normale, determina il rapporto tra l'ampiezza di $\alpha$ e $\theta$, $c_1 = \alpha_1/\theta_1$ e $c_2 = \alpha_2/\theta_2$.

9. L'equazione del moto del sistema può essere espressa come segue:
$$
\begin{aligned}
\theta &= \theta_1 \cos(\omega_1 t + \phi_1) + \theta_2 \cos(\omega_2 t + \phi_2), \\
\alpha &= c_1 \theta_1 \cos(\omega_1 t + \phi_1) + c_2 \theta_2 \cos(\omega_2 t + \phi_2).
\end{aligned}
$$
Usando le condizioni iniziali, determina i valori di $\theta_1$, $\alpha_1$, $\theta_2$ e $\phi_2$.

<!--fig:start-->
![[WoPhO_2011_Q8_p1_f1.png]]
*Figura 1:*
<!--fig:end-->

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1SjkGL9p9N_GkU1OEmk98I80gFJ9Jvi5H/view)
**Topic:** [[Magnetism]], [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Magnetic Dipole (object)|Magnetic Dipole]], [[Rope/String (object)|Rope/String]]



<span class="atom-split" id="q09" data-atom="q09" data-title="WoPhO 2011 — Quesito 9" data-tags="kg/prova,paese/International,comp/WoPhO,topic/conservation-of-momentum,argomento/meccanica,difficolta/5,multidisciplina/multi,object/cylinder,object/disk"></span>

<div class="qlang-switch" data-default="en"></div>



**Cylinder Collision**

A hollow cylinder with mass $M$ and radius $R$ is at rest on a horizontal plane. In the interior of this cylinder, there is a solid disk with mass $m$ and radius $r$. Initially, the center of the disk is at a distance $l$ from the center of the cylinder and moves with velocity $v\,\hat{y}$ as shown in Fig. 1. Unless otherwise specified, all collisions are elastic and frictions can be ignored.

<!--fig:start-->
![[WoPhO_2011_Q9_p1_f1.png]]
*Figure 1:*
<!--fig:end-->

1. Determine the velocity (the $\dot{x}$ and the $\dot{y}$ components of the velocity) of the disk and the cylinder immediately after the first collision. Write your answer in terms of $m$, $M$, $v$ and $\theta$.

2. Determine the velocity (the $\dot{x}$ and the $\dot{y}$ components of the velocity) of the disk and the cylinder immediately after the second collision. Write your answer in terms of $m$, $M$, $v$ and $\theta$.

3. If initially the disk is placed at $l = (R - r)/2$, determine the velocity of the disk and the cylinder immediately after the $n$-th collision.

4. What is the condition for $l$ such that immediately after the $n$-th collision $m$ moves with velocity $v\,\hat{y}$ and $M$ is at rest? Determine the distance between two successive positions of the center of $M$ when it is at rest.

5. For this part, the friction between the disk and the cylinder cannot be ignored. As in part (a), initially the cylinder is at rest, while the center of the disk is at a distance $l < (R - r)$ from the center of the cylinder and moves with velocity $v\,\hat{y}$ as shown in Fig. 1. If during the collision process the point of contact does not slide, determine the angular velocity of the disk and the cylinder immediately after the first collision.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/13kpja7XIoL2OfkZAkTQhSuJmEN3YtqIA/view)
**Topic:** [[Conservation of Momentum]], [[Rotational Dynamics]]
**Metodi:** [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Disk (object)|Disk]]


<div class="qlang-split" data-lang="it"></div>

**Collisione dei cilindri**

Un cilindro vuoto di massa $M$ e di raggio $R$ è a riposo su un piano orizzontale. All'interno di questo cilindro, si trova un disco solido con massa $m$ e raggio $r$. Inizialmente, il centro del disco è a una distanza $l$ dal centro del cilindro e si muove con velocità $v\,\hat{y}$ come mostrato nella figura. 1. Salvo indicazione contraria, tutte le collisioni sono elastiche e le frizioni possono essere ignorate.

<!--fig:start-->
![[WoPhO_2011_Q9_p1_f1.png]]
*Figura 1: *
<!--fig:end-->

1. Determinare la velocità (le $\dot{x}$ e le $\dot{y}$ componenti della velocità) del disco e del cilindro immediatamente dopo la prima collisione. Scrivi la tua risposta in termini di $m$, $M$, $v$ e $\theta$.

2. Determinare la velocità (le $\dot{x}$ e le $\dot{y}$ componenti della velocità) del disco e del cilindro immediatamente dopo la seconda collisione. Scrivi la tua risposta in termini di $m$, $M$, $v$ e $\theta$.

3. Se inizialmente il disco è posto a $l = (R - r)/2$, determinare la velocità del disco e del cilindro immediatamente dopo la collisione $n$-th.

4. Qual è la condizione per $l$ tale che immediatamente dopo la collisione $n$-th $m$ si muova con velocità $v\,\hat{y}$ e $M$ è in riposo? Determinare la distanza tra due posizioni successive del centro di $M$ quando è a riposo.

5. Per questa parte, non si può ignorare l'attrito tra disco e cilindro. Come nella parte (a), inizialmente il cilindro è a riposo, mentre il centro del disco è a una distanza $l < (R - r)$ dal centro del cilindro e si muove con velocità $v\,\hat{y}$ come mostrato nella figura. 1. Se durante il processo di collisione il punto di contatto non scivola, determinare la velocità angolare del disco e del cilindro immediatamente dopo la prima collisione.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/13kpja7XIoL2OfkZAkTQhSuJmEN3YtqIA/view)
**Topic:** [[Conservation of Momentum]], [[Rotational Dynamics]]
**Metodi:** [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Disk (object)|Disk]]



<span class="atom-split" id="q10" data-atom="q10" data-title="WoPhO 2011 — Quesito 10" data-tags="kg/prova,paese/International,comp/WoPhO,topic/electrostatics,argomento/elettromagnetismo,difficolta/5,multidisciplina/mono,object/disk"></span>

<div class="qlang-switch" data-default="en"></div>



**Charged Discs**

Two thin metal discs of radius 5 cm each are suspended by electrically insulating threads such that the discs are parallel (see Fig. 1a) and close to each other (for example their distance could be 2 mm).

1. Calculate the force between the two discs if they are charged with small charges $+q$ and $-q$ respectively. As $q$ is small, the displacement of the discs and the possibility of electric discharge can be neglected.

2. Now consider only one disc; calculate the surface charge distribution on a metal disc of radius $R$ having total charge $+q$. (This charge distribution might be useful to answer the next question.)

After this, the two original discs are each charged $+q$. A third metal disc of radius $R^* > 5$ cm is carefully inserted between the two discs; the third disc is neutral and is suspended by an electrically insulating thread. The three discs are all parallel to each other and their centers lie along the same horizontal line (so that when viewed head-on the discs are concentric circles). The resulting set-up is shown in Fig. 1c.

3. Find the radius $R^*$ of the third disc such that the net electrostatic force acting on each charged disc is zero. (The fringing effect is neglected in this problem.)

<!--fig:start-->
![[WoPhO_2011_Q10_p1_f1.png]]
*Figure 1: Charged discs set-up (a) the two original discs $A$, $B$; (c) the third disc $C$ inserted between them.*
<!--fig:end-->

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1v3Uw1xjYb4JJ8wF3lrumxitwHO3-lia7/view)
**Topic:** [[Electrostatics]], [[Electromagnetism]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Gauss's Law (metodo)|Gauss's Law]], [[Electric Potential Method (metodo)|Electric Potential Method]], [[Superposition Principle (metodo)|Superposition Principle]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Disk (object)|Disk]]


<div class="qlang-split" data-lang="it"></div>

Dischi carichi

Due dischi di metallo sottili di raggio di 5 cm ciascuno sono sospesi da fili isolanti elettricamente in modo che i dischi siano paralleli (vedi figura 1). 1a) e vicini (ad esempio, la loro distanza potrebbe essere di 2 mm).

1. Calcolare la forza tra i due dischi se sono caricati rispettivamente con piccole cariche $+q$ e $-q$. Poiché $q$ è piccolo, si può trascurare il spostamento dei dischi e la possibilità di scarico elettrico.

2. Ora si considera solo un disco; calcola la distribuzione della carica superficiale su un disco metallico di raggio $R$ con carica totale $+q$. (Questa distribuzione dei carichi potrebbe essere utile per rispondere alla seguente domanda.)

Dopo questo, i due dischi originali sono caricati $+q$ ciascuno. Un terzo disco metallico di raggio $R^* > 5$ cm è inserito accuratamente tra i due dischi; il terzo disco è neutro e viene sospeso da un filo isolante elettrico. I tre dischi sono tutti paralleli e i loro centri si trovano lungo la stessa linea orizzontale (in modo che quando si vedono a testa in testa i dischi sono cerchi concentrici). La configurazione risultante è mostrata in Figura 1. 1c.

3. Trova il raggio $R^*$ del terzo disco in modo tale che la forza elettrostatica netta che agisce su ciascun disco carico sia zero. (L'effetto di franging è trascurato in questo problema.)

<!--fig:start-->
![[WoPhO_2011_Q10_p1_f1.png]]
*Figura 1: Dischi carichi di installazione (a) i due dischi originali $A$, $B$; (c) il terzo disco $C$ inserito tra loro.*
<!--fig:end-->

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1v3Uw1xjYb4JJ8wF3lrumxitwHO3-lia7/view)
**Topic:** [[Electrostatics]], [[Electromagnetism]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Gauss's Law (metodo)|Gauss's Law]], [[Electric Potential Method (metodo)|Electric Potential Method]], [[Superposition Principle (metodo)|Superposition Principle]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Disk (object)|Disk]]
