---
title: Russia na
tipo: prova
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="golden"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Russia na — Quesito 1" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/disk"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 1 (Balancing Act)
Consider three planar shapes each with mass density $\sigma$, and the radii of the points of contact make an angle $\theta$
with the horizontal. The radius of the circle is $R$ and the height of the rectangle is $L$. Determine the minimum
horizontal force needed to keep the circles together. For what $\theta$ is this force a maximum? (Source: Morin)
Answer: $\cos\theta = 1/\phi$.
Solution: Let $N$ be the normal between the disk and the rectangle. At the minimum force, there will be no normal force
between the two disks. A horizontal force balance on the disk gives:
$F = N\cos\theta$
and a vertical force balance on the rectangles gives:
$\sigma(wL)g = 2N\sin\theta$
where the width is $w = 2R(1 - \cos\theta)$. Combining these two equations together gives:
$F = \sigma R L g(1 - \cos\theta)\cot\theta$
From here, it is not too difficult to show that the maximum value occurs at
$$\cos\theta = \frac{-1 + \sqrt{5}}{2} \equiv \frac{1}{\phi}$$

**Topic:** [[Rigid Body Statics]], [[Newtonian Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Disk (object)|Disk]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Problema 1 (Legge di bilanciamento)
Considerate tre forme pianale, ciascuna con densità di massa $\sigma$, e i raggi dei punti di contatto fanno un angolo $\theta$
con l'orizzontale. Il raggio di radio del cerchio è $R$ e l'altezza del rettangolo è $L$. Determinare il minimo
la forza orizzontale necessaria per tenere insieme i cerchi. Per quale $\theta$ è la forza massima? (Fonte: Morin)
Risposta: $\cos\theta = 1/\phi$.
Soluzione: $N$ sia la normalità tra il disco e il rettangolo. Al minimo non ci sarà forza normale.
tra i due dischi. Un equilibrio di forza orizzontale sul disco dà:
$F = N\cos\theta$
e un equilibrio di forza verticale sui rettangoli dà:
$\sigma(wL)g = 2N\sin\theta$
in cui la larghezza è $w = 2R(1 - \cos\theta)$. Combinando queste due equazioni insieme si ottiene:
$F = \sigma R L g(1 - \cos\theta)\cot\theta$
Da qui non è troppo difficile dimostrare che il valore massimo si verifica a
$$\cos\theta = \frac{-1 + \sqrt{5}}{2} \equiv \frac{1}{\phi}$$

**Topic:** [[Rigid Body Statics]], [[Newtonian Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Disk (object)|Disk]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Russia na — Quesito 2" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/ball"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 2 (Drag Force)
A ball is thrown with speed a $v_0$ at an angle $\theta$ over a horizontal flat ground. It experiences a drag force with
magnitude $F = -m\alpha v$. Suppose the initial drag force equals the weight of the ball. At what angle $\theta$ should we
throw it such that it maximizes the distance travelled once the ball has reached its maximum value? (Source:
Morin)
Answer: $\sin\theta = 1/\phi$
Solution: Our equations of motion gives:
$\frac{dv_x}{dt} = -\alpha v_x$ and $\frac{dv_y}{dt} = -g - \alpha v_y$. Separating variables two times for the
first equation, we get
$$v_x = v_0\cos\theta\, e^{-\alpha t}$$
$$x = \frac{v_0\cos\theta}{\alpha}(1 - e^{-\alpha t})$$
through applying the initial conditions. Similarly, in the y-direction, we get:
$$v_y = \left(v_0\sin\theta + \frac{g}{\alpha}\right)e^{-\alpha t} - \frac{g}{\alpha}$$
Applying the condition $m\alpha v_0 = mg \Rightarrow \alpha = \frac{g}{v_0}$, we can simplify the $v_y$ equation to:
$$v_y = (v_0\sin\theta + v_0)e^{-\alpha t} - v_0$$
At the maximum point, this is zero or:
$$e^{-\alpha t} = \frac{1}{1 + \sin\theta}$$
The x-position at this time would therefore be:
$$x = \frac{v_0^2}{g}\left(\frac{\sin\theta\cos\theta}{1 + \sin\theta}\right)$$
which is maximized at $\sin\theta = 1/\phi$.

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Ball (object)|Ball]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Problema 2 (Forza di trasmissione)
Una palla viene lanciata a velocità $v_0$ in un angolo $\theta$ su un terreno piatto orizzontale. Essa sperimenta una forza di trazione con
Magnitude $F = -m\alpha v$. Supponiamo che la forza di trazione iniziale sia uguale al peso della palla. In quale angolo $\theta$ dovremmo
lanciarla in modo tale da massimizzare la distanza percorsa una volta che la palla ha raggiunto il suo valore massimo? (Fonte:
Morin)
Risposta: $\sin\theta = 1/\phi$
Soluzione: Le nostre equazioni di movimento danno:
$\frac{dv_x}{dt} = -\alpha v_x$ e $\frac{dv_y}{dt} = -g - \alpha v_y$. Separare le variabili due volte per il
Prima equazione, otteniamo
$$v_x = v_0\cos\theta\, e^{-\alpha t}$$
$$x = \frac{v_0\cos\theta}{\alpha}(1 - e^{-\alpha t})$$
applicando le condizioni iniziali. Allo stesso modo, nella direzione y, otteniamo:
$$v_y = \left(v_0\sin\theta + \frac{g}{\alpha}\right)e^{-\alpha t} - \frac{g}{\alpha}$$
Applicando la condizione $m\alpha v_0 = mg \Rightarrow \alpha = \frac{g}{v_0}$, possiamo semplificare l'equazione $v_y$ a:
$$v_y = (v_0\sin\theta + v_0)e^{-\alpha t} - v_0$$
Al punto massimo, questo è zero o:
$$e^{-\alpha t} = \frac{1}{1 + \sin\theta}$$
La posizione di x in questo momento sarebbe quindi:
$$x = \frac{v_0^2}{g}\left(\frac{\sin\theta\cos\theta}{1 + \sin\theta}\right)$$
che è massimizzata a $\sin\theta = 1/\phi$.

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Ball (object)|Ball]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Russia na — Quesito 3" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/ball"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 3 (Forever Bouncing)
Two fixed circular rings in contact with each other, stand in the vertical plane such that a ball bounces elastically
back and forth. The initial conditions are set up such that the ball will forever bounce in an ellipse. If the parabola
hits the ring at an angle $\theta$ from the horizontal, what angle will maximize $\Delta p_x$, the maximum change in the ball's
horizontal momentum? (Source: Morin)
Answer: $\cos\theta = 1/\phi$.
Solution: Let $v$ be the initial speed after a bounce. It is well known that the range of a projectile is given by:
$$x = \frac{v^2}{g}\sin 2\theta$$
We can calculate the range through geometry to be $2R(1 - \cos\theta)$. Setting these two equal to each other, we can solve for
$v_x$ to be
$$v_x = v\cos\theta = \sqrt{\frac{gR\cos\theta(1 - \cos\theta)}{\sin\theta}}$$
The change in the horizontal momentum is simply just $|\Delta p_x| = 2v_x$.
Therefore, maximizing $v_x$ is achieved through
$\cos\theta = 1/\phi$.

**Topic:** [[Newtonian Mechanics]], [[Conservation of Momentum]]
**Metodi:** [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Ball (object)|Ball]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Problema 3 (Ripuntare per sempre)
Due anelli circolari fissi in contatto tra loro, in posizione verticale in modo che la palla rimbalzi in modo elastico
- avanti e indietro. Le condizioni iniziali sono stabilite in modo tale che la palla rimbalzi per sempre in un'ellisse. Se la parabola
colpisce l'anello ad un angolo $\theta$ dall'orizzontale, quale angolo massimizzerà $\Delta p_x$, il massimo cambiamento nella palla
- Impulso orizzontale? (Fonte: Morin)
Risposta: $\cos\theta = 1/\phi$.
Soluzione: $v$ deve essere la velocità iniziale dopo un rimbalzo. È noto che la portata di un proiettile è data da:
$$x = \frac{v^2}{g}\sin 2\theta$$
Possiamo calcolare l'intervallo attraverso la geometria per essere $2R(1 - \cos\theta)$. Mettere questi due uguali l'uno all'altro, possiamo risolvere per
$v_x$ to be
$$v_x = v\cos\theta = \sqrt{\frac{gR\cos\theta(1 - \cos\theta)}{\sin\theta}}$$
Il cambiamento di impulso orizzontale è semplicemente $|\Delta p_x| = 2v_x$.
Pertanto, la massimizzazione di $v_x$ è raggiunta attraverso
$\cos\theta = 1/\phi$.

**Topic:** [[Newtonian Mechanics]], [[Conservation of Momentum]]
**Metodi:** [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Ball (object)|Ball]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q04" data-atom="q04" data-title="Russia na — Quesito 4" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/spring,object/block"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 4 (Two Springs One Wall)
Two identical springs and two identical masses are attached to a wall as shown below. Determine the frequencies.
(Source: Morin)
Answer: $\omega_1 = \sqrt{\frac{k}{m}} = \phi$ and $\omega_2 = \sqrt{\frac{k}{m}} = 1/\phi$
Solution: Let the first mass be denoted as 1 and the second mass 2. The equations of motion are:
$$m\ddot{x}_1 = -kx_1 - k(x_1 - x_2)$$
$$m\ddot{x}_2 = -k(x_2 - x_1)$$
Making the replacement $\omega_0^2 = \frac{k}{m}$ and guessing a general solution in the form of $x_1 = Ae^{i\omega t}$ and $x_2 = Be^{i\omega t}$, we get:
$$A(-\omega_0^2 + 2\omega^2) - B(-\omega_0^2) = 0$$
$$A(-\omega_0^2) + B(-\omega^2 + \omega_0^2) = 0$$
Solving this (if unsure, see sec 2.1) gives:
$$\omega = \omega_0\sqrt{\frac{5 \pm 1}{2}}$$

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Superposition Principle (metodo)|Superposition Principle]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Spring (object)|Spring]], [[Block (object)|Block]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Il problema 4 (due sorgenti, una parete)
Due sorgenti identiche e due masse identiche sono attaccate a un muro come mostrato di seguito. Determina le frequenze.
(Fonte: Morin)
Risposta: $\omega_1 = \sqrt{\frac{k}{m}} = \phi$ e $\omega_2 = \sqrt{\frac{k}{m}} = 1/\phi$
Soluzione: La prima massa è indicata come 1 e la seconda massa come 2. Le equazioni di movimento sono:
$$m\ddot{x}_1 = -kx_1 - k(x_1 - x_2)$$
$$m\ddot{x}_2 = -k(x_2 - x_1)$$
Facendo la sostituzione $\omega_0^2 = \frac{k}{m}$ e indovinando una soluzione generale sotto forma di $x_1 = Ae^{i\omega t}$ e $x_2 = Be^{i\omega t}$, otteniamo:
$$A(-\omega_0^2 + 2\omega^2) - B(-\omega_0^2) = 0$$
$$A(-\omega_0^2) + B(-\omega^2 + \omega_0^2) = 0$$
Risoluzione di questo problema (se non è sicuro, vedere sezione 2.1):
$$\omega = \omega_0\sqrt{\frac{5 \pm 1}{2}}$$

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Superposition Principle (metodo)|Superposition Principle]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Spring (object)|Spring]], [[Block (object)|Block]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q05" data-atom="q05" data-title="Russia na — Quesito 5" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/spring,object/wheel"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 5 (Springed Mass on Rim)
A mass $m$ is free to slide along a smooth rim of a wheel of radius $R$ that rolls without slipping on the ground. The
wheel is massless, except for a mass $m$ located at its center. The mass is attached to a zero length spring with
constant $k$ and the other end is attached to a point on the rim. Assume that the spring is constrained to run along
the rim, and assume that the mass can pass freely over the point where the spring is attached to the rim. For the
special case where $g/R = k/m$, determine the frequency of oscillations. (Source: Morin)
Answer: $\omega_1 = \sqrt{\frac{k}{m\phi}}$ and $\omega_2 = \sqrt{\frac{k}{m}\frac{1}{\phi}}$
Solution: Let $\theta$ be the angle the wheel has rotated, relative to the position where the spring's contact point is on the
ground. Let $\alpha$ be the clockwise angle subtended by the spring. Then the position and velocity of the mass on the end of
the spring are:
$$(x, y) = (R\theta - R\sin(\theta + \alpha),\ R - R\cos(\theta + \alpha))$$
$$(\dot{x}, \dot{y}) = (R\dot{\theta} - R(\dot{\theta} + \dot{\alpha})\cos(\theta + \alpha),\ R(\dot{\theta} + \dot{\alpha})\sin(\theta + \alpha))$$
We can show, by neglecting higher order terms that the speed is $v = R\dot{\alpha}$. Assuming small angles, the horizontal position
of the center of the wheel is $R\theta$, so the Lagrangian is:
$$L = \frac{m}{2}R^2\dot{\theta}^2 + \frac{m}{2}R^2\dot{\alpha}^2 + mgR\cos(\theta + \alpha) - \frac{k}{2}(R\alpha)^2$$
This gives the equations of motion to be:
$$\ddot{\theta} + \frac{g}{R}(\theta + \alpha) = 0$$
$$\ddot{\alpha} + \frac{g}{R}(\theta + \alpha) + \frac{k}{m}\alpha = 0$$
Letting $\omega_0 = \frac{g}{R} = \frac{k}{m}$, we can show similar to above that:
$$\omega = \omega_0\sqrt{\frac{5 \pm 1}{2}}$$

**Topic:** [[Oscillations & Waves]], [[Rotational Dynamics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Spring (object)|Spring]], [[Wheel (object)|Wheel]]
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Problema 5 (Massa di primavera sul bordo)
Una massa $m$ può scivolare liberamente lungo un bordo liscio di una ruota di raggio $R$ che ruota senza scivolare sul terreno. Il
la ruota è senza massa, ad eccezione di una massa $m$ situata al centro. La massa è fissata ad una sorgente di lunghezza zero con
la costante $k$ e l'altra estremità è fissata a un punto del bordo. Supponiamo che la primavera sia costretta a correre lungo
la gomma, e supponiamo che la massa possa passare liberamente sul punto in cui la molla è attaccata alla gomma. Per il
in caso speciale in cui $g/R = k/m$, determinare la frequenza delle oscillazioni. (Fonte: Morin)
Risposta: $\omega_1 = \sqrt{\frac{k}{m\phi}}$ e $\omega_2 = \sqrt{\frac{k}{m}\frac{1}{\phi}}$
Soluzione: $\theta$ sia l'angolo in cui la ruota è rotata, rispetto alla posizione in cui il punto di contatto della molla è sul
- A terra. Let $\alpha$ be the clockwise angle subtended by the spring. Poi la posizione e velocità della massa alla fine di
le sorgenti sono:
$$(x, y) = (R\theta - R\sin(\theta + \alpha),\ R - R\cos(\theta + \alpha))$$
$$(\dot{x}, \dot{y}) = (R\dot{\theta} - R(\dot{\theta} + \dot{\alpha})\cos(\theta + \alpha),\ R(\dot{\theta} + \dot{\alpha})\sin(\theta + \alpha))$$
Possiamo dimostrare, trascurando termini di ordine superiore che la velocità è $v = R\dot{\alpha}$. Presumendo angoli piccoli, la posizione orizzontale
di centro della ruota è $R\theta$, quindi il Lagrangian è:
$$L = \frac{m}{2}R^2\dot{\theta}^2 + \frac{m}{2}R^2\dot{\alpha}^2 + mgR\cos(\theta + \alpha) - \frac{k}{2}(R\alpha)^2$$
Questo dà le equazioni di movimento ad essere:
$$\ddot{\theta} + \frac{g}{R}(\theta + \alpha) = 0$$
$$\ddot{\alpha} + \frac{g}{R}(\theta + \alpha) + \frac{k}{m}\alpha = 0$$
Se si lascia $\omega_0 = \frac{g}{R} = \frac{k}{m}$, possiamo mostrare simili a quanto sopra:
$$\omega = \omega_0\sqrt{\frac{5 \pm 1}{2}}$$

**Topic:** [[Oscillations & Waves]], [[Rotational Dynamics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Spring (object)|Spring]], [[Wheel (object)|Wheel]]
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q06" data-atom="q06" data-title="Russia na — Quesito 6" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 6 (Swirling on a Cone)
A fixed hollow frictionless cone is positioned with its tip pointing down. A particle is released from rest on the
inside surface.
After it has slid halfway down to the tip, it bounces elastically off a platform at a height $H$.
The platform is positioned at a $45^\circ$ angle along the surface of the cone, so the particle ends up being deflected
horizontally along the surface (into the page). The particle then swirls up and around the cone before coming
down. Measured from the tip of the cone, what is the ratio of the particle's maximum swirling height to the height
of the platform? (Source: Morin)
Answer: $h_\text{max}/H = \phi$
Solution: Conservation of energy tells us that it bounces off the platform at a speed $v_0 = \sqrt{2gH}$. If the angle of the
cone is $2\beta$, then conservation of angular momentum and energy from the platform to the top of the trajectory tells us:
$$mv_0(H\tan\beta) = mv(h_\text{max}\tan\beta) \Rightarrow v = (H/h_\text{max})v_0$$
$$\tfrac{1}{2}mv_0^2 + mgH = \tfrac{1}{2}mv^2 + mgh_\text{max} \Rightarrow v^2 = v_0^2 - 2g(y - H)$$
Solving for $h_\text{max}$ directly yields $h_\text{max} = \phi H$.

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation Laws (metodo)|Conservation Laws]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Problema 6 (torcigliare su un cono)
Un cono fissato vuoto senza attrito è posizionato con la punta puntata verso il basso. Una particella viene rilasciata dal riposo sulla
all'interno della superficie.
Dopo aver scivolato a metà della punta, rimbalza elasticamente da una piattaforma ad un'altezza $H$.
La piattaforma è posizionata ad un angolo $45^\circ$ lungo la superficie del cono, in modo che la particella finisca per essere deviata
orizzontale lungo la superficie (in pagina). La particella si gira intorno al cono prima di arrivare
- Scendi. Misurato dalla punta del cono, qual è il rapporto tra l'altezza di torsione massima della particella e l'altezza
della piattaforma? (Fonte: Morin)
Risposta: $h_\text{max}/H = \phi$
Soluzione: La conservazione dell'energia ci dice che rimbalza dalla piattaforma a una velocità $v_0 = \sqrt{2gH}$. Se l'angolo del
Conone è $2\beta$, quindi la conservazione del momento angolare e dell'energia dalla piattaforma alla cima della traiettoria ci dice:
$$mv_0(H\tan\beta) = mv(h_\text{max}\tan\beta) \Rightarrow v = (H/h_\text{max})v_0$$
$$\tfrac{1}{2}mv_0^2 + mgH = \tfrac{1}{2}mv^2 + mgh_\text{max} \Rightarrow v^2 = v_0^2 - 2g(y - H)$$
Risoluzione per $h_\text{max}$ produce direttamente $h_\text{max} = \phi H$.

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation Laws (metodo)|Conservation Laws]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q07" data-atom="q07" data-title="Russia na — Quesito 7" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 7 (Square Rotation)
A square lamina ABCD with one of its flat faces on a horizontal floor is sliding on the floor. At an instant, the
velocity vectors of the corners A and B are perpendicular to each other and the corner C is moving with a velocity
$v$ at an angle with vector $\vec{CD}$ such that the tangent of which is 0.5. Find the velocity of the midpoint P of the
side AB at this instant. (Source: Pathfinder)
Answer: $v_P = \phi v/2$ or $v_P = v/(2\phi)$
Solution: This problem, while it involves the golden ratio, is by no means "pretty" and I was unable to find an
explanation behind why the golden ratio shows up, besides pure coincidence. We begin with the condition that $\vec{v}_A\cdot\vec{v}_B = 0$,
which after expanding, eventually gives us:
$$v_\text{cm}^2 = v_{\text{cm},y}\,\omega a = 0$$
where $a$ is the side length and $\omega$ is the angular speed about the center of mass. Then, we use look at the motion of point
C by writing it in terms of:
$$\vec{v}_c = \left(v_{\text{cm},x} + \frac{\omega a}{2}\right)\hat{i} + \left(v_{\text{cm},y} + \frac{\omega a}{2}\right)\hat{j}$$
And using the condition that $\dfrac{v_{\text{cm},y} - \frac{\omega a}{2}}{v_{\text{cm},x} + \frac{\omega a}{2}} = \dfrac{1}{2}$ gives us our second equation:
$$2v_{\text{cm},y} - v_{\text{cm},x} = \frac{3\omega a}{2}$$
We want to relate $v_c$ with $v_{\text{cm},x}$ and $v_{\text{cm},y}$ via:
$$v^2 = (v_{\text{cm},x} + \omega a/2)^2 + (v_{\text{cm},y} - \omega a/2)^2$$
to get three equations, which after solving gives us all the relevant parameters to the motion of the square. We can then
use these information to determine $v_P = \phi v/2$ or $v_P = v/(2\phi)$

Problems in Relativity

**Topic:** [[Rotational Dynamics]], [[Newtonian Mechanics]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Problema 7 (Rotatazione quadrata)
Una lamina quadrata ABCD con una delle sue facce piatte su un pavimento orizzontale si scivola sul pavimento. In un istante, il
I vettori di velocità delle curve A e B sono perpendicolari l'uno all'altro e l'angolo C si muove con una velocità
$v$ ad un angolo con vettore $\vec{CD}$ tale che la sua tangente sia di 0,5. Trova la velocità del punto medio P del
Il lato AB in questo istante. (Fonte: Pathfinder)
Risposta: $v_P = \phi v/2$ o $v_P = v/(2\phi)$
Soluzione: questo problema, pur riguardando il rapporto dorato, non è affatto "più bello" e non sono riuscito a trovare un
spiegazione dietro il motivo per cui il rapporto dorato appare, oltre a pura coincidenza. Iniziamo con la condizione che $\vec{v}_A\cdot\vec{v}_B = 0$,
che dopo l'espansione, alla fine ci dà:
$$v_\text{cm}^2 = v_{\text{cm},y}\,\omega a = 0$$
dove $a$ è la lunghezza laterale e $\omega$ è la velocità angolare intorno al centro di massa. Poi, usiamo guardare il movimento del punto
C scrivendo la lettera in termini di:
$$\vec{v}_c = \left(v_{\text{cm},x} + \frac{\omega a}{2}\right)\hat{i} + \left(v_{\text{cm},y} + \frac{\omega a}{2}\right)\hat{j}$$
E usando la condizione che $\dfrac{v_{\text{cm},y} - \frac{\omega a}{2}}{v_{\text{cm},x} + \frac{\omega a}{2}} = \dfrac{1}{2}$ ci dà la nostra seconda equazione:
$$2v_{\text{cm},y} - v_{\text{cm},x} = \frac{3\omega a}{2}$$
Vogliamo correlare $v_c$ con $v_{\text{cm},x}$ e $v_{\text{cm},y}$ tramite:
$$v^2 = (v_{\text{cm},x} + \omega a/2)^2 + (v_{\text{cm},y} - \omega a/2)^2$$
per ottenere tre equazioni, che dopo la risoluzione ci dà tutti i parametri pertinenti al movimento del quadrato. Possiamo allora
utilizzare queste informazioni per determinare $v_P = \phi v/2$ o $v_P = v/(2\phi)$

Problemi di relazione

**Topic:** [[Rotational Dynamics]], [[Newtonian Mechanics]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q08" data-atom="q08" data-title="Russia na — Quesito 8" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/ball"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 8 (Ball on Train)
A train of proper length $L$ moves at speed $v$ with respect to the ground. When the front of the train passes a
tree on the ground, a ball is simultaneously (as measured in the ground frame) thrown from the back of the train
toward the front, with a speed $u$ with respect to the train. The ball hits the front simultaneously (as measured in
the train frame) with the tree passing the back of the train. What is the maximum value of $v$ such that this can
happen? (Source: Morin)
Answer: $v_\text{max} = \dfrac{c}{\phi}$
Solution: Let there be two clocks on the train. As the front of the train passes the tree, the clock at the front reads
$t = 0$. Due to the loss of simultaneity, the clock at the back will read $Lv/c^2$ (in the ground frame). If we switch to the
frame on the train, the ball will be thrown at a time $t = Lv/c^2$.
The tree has travelled a distance $v(Lv/c^2)$, and will reach the back of the train in a time $L(1 - v^2/c^2)/v$. This must
also be the time the ball takes to reach the front of the train, so:
$$\frac{L\,1 - v^2/c^2}{v} = \frac{L}{u} \Rightarrow u = \gamma^2 v$$
This value needs to be smaller than $c$ so we can solve for $v$ to be: $v < \dfrac{\sqrt{5} - 1}{2}$.

**Topic:** [[Special Relativity]]
**Metodi:** [[Lorentz Transformation (metodo)|Lorentz Transformation]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Ball (object)|Ball]]
**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Il problema 8 (Ball on Train)
Un treno di lunghezza corretta $L$ si muove a velocità $v$ rispetto al suolo. Quando la parte anteriore del treno passa un
albero a terra, una palla viene gettata contemporaneamente (come misurato nel telaio del terreno) dalla parte posteriore del treno
verso l'anteriore, con velocità $u$ rispetto al treno. La palla colpisce contemporaneamente il fronte (come misurato in
il telaio del treno) con l'albero che passa dietro il treno. Qual è il valore massimo di $v$ tale da poter
- Che succede? (Fonte: Morin)
Risposta: $v_\text{max} = \dfrac{c}{\phi}$
Soluzione: Lascia che ci siano due orologi sul treno. Mentre la parte anteriore del treno passa attraverso l'albero, l'orologio di fronte legge
$t = 0$. A causa della perdita di simultaneità, l'orologio posteriore sarà indicato come $Lv/c^2$ (nel telaio di terra). Se passiamo al
il corpo del treno, la palla verrà lanciata a un tempo $t = Lv/c^2$.
L'albero ha percorso una distanza $v(Lv/c^2)$ e raggiungerà la parte posteriore del treno in un tempo $L(1 - v^2/c^2)/v$. Questo deve essere
anche il tempo necessario per raggiungere la parte anteriore del treno, quindi:
$$\frac{L\,1 - v^2/c^2}{v} = \frac{L}{u} \Rightarrow u = \gamma^2 v$$
Questo valore deve essere inferiore a $c$ in modo da risolvere per $v$ essere: $v < \dfrac{\sqrt{5} - 1}{2}$.

**Topic:** [[Special Relativity]]
**Metodi:** [[Lorentz Transformation (metodo)|Lorentz Transformation]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Ball (object)|Ball]]
**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q09" data-atom="q09" data-title="Russia na — Quesito 9" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/rope-string,object/tank-container"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 9 (Relativistic Leaky Bucket)
A massless string with an initial length $l$ with constant tension $T$ has one end attached to a wall and the other
end attached to a massless bucket containing an initial mass $M = \dfrac{Tl}{c^2}$ of sand. The bucket is released and on the
way to the wall, it leaks sand at a rate $\dfrac{dm}{dt} = \dfrac{M}{l}$. When is the momentum of the bucket at a maximum? (Source:
Morin)
Answer: $\ln(x/l) = -1/\phi$
Solution: The change in energy with respect to position is:
$$\frac{dE}{dx} = -T + \frac{E}{x}$$
Solving this differential equation, we get:
$$E(x) = Cx - Tx\ln(x/l)$$
where $C$ is a constant of integration. At $x = l$, the energy is $E = Mc^2$ so $B = Mc^2/l$. We can write the momentum as:
$$p = \sqrt{E^2 - m^2c^4} = \sqrt{E^2 - (Mx/l\,c^2)^2} = \sqrt{E^2 - T^2x^2}.$$
Substituting in the expression for $E(x)$, we can maximize the momentum when: $\ln(x/l) = -1/\phi$.

**Topic:** [[Special Relativity]], [[Conservation of Momentum]]
**Metodi:** [[Relativistic Energy-Momentum (metodo)|Relativistic Energy-Momentum]], [[Differential Equations (metodo)|Differential Equations]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Rope/String (object)|Rope/String]], [[Tank/Container (object)|Tank/Container]]
**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Problema 9 (Relativistico Bucket Leaky)
Una corda senza massa con una lunghezza iniziale $l$ con tensione costante $T$ ha una estremità attaccata a un muro e l'altra
fine attaccata a un secchio senza massa contenente una massa iniziale $M = \dfrac{Tl}{c^2}$ di sabbia. Il secchio viene rilasciato e sulla
per il muro, si perdono sabbie a un ritmo $\dfrac{dm}{dt} = \dfrac{M}{l}$. Quando è il massimo di impulso del secchio? (Fonte:
Morin)
Risposta: $\ln(x/l) = -1/\phi$
Soluzione: Il cambiamento di energia rispetto alla posizione è:
$$\frac{dE}{dx} = -T + \frac{E}{x}$$
Risolvendo questa equazione differenziale, otteniamo:
$$E(x) = Cx - Tx\ln(x/l)$$
in cui $C$ è una costante di integrazione. Al $x = l$, l'energia è $E = Mc^2$ quindi $B = Mc^2/l$. Possiamo scrivere l'impulso come:
$$p = \sqrt{E^2 - m^2c^4} = \sqrt{E^2 - (Mx/l\,c^2)^2} = \sqrt{E^2 - T^2x^2}.$$
Substituendo l'espressione $E(x)$, possiamo massimizzare l'impulso quando: $\ln(x/l) = -1/\phi$.

**Topic:** [[Special Relativity]], [[Conservation of Momentum]]
**Metodi:** [[Relativistic Energy-Momentum (metodo)|Relativistic Energy-Momentum]], [[Differential Equations (metodo)|Differential Equations]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Rope/String (object)|Rope/String]], [[Tank/Container (object)|Tank/Container]]
**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q10" data-atom="q10" data-title="Russia na — Quesito 10" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/photon"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 10 (Photon Decay)
A mass $m$ moving at a speed $v$ decays into two photons. One photon moves perpendicular to the original direction,
and the other photon moves off at an angle $\theta$, as shown. If the resulting angle is $\tan\theta = 1/2$, determine the initial
speed $v$. (Source: Morin)
Answer: $v = \dfrac{c}{\phi}$
Solution: Let the energy of the bottom and top photons be $E$ and $\gamma mc^2 - E$ respectively. Conservation of momentum
gives $p_x = \gamma mv$ and $p_y = E/c$ for the top photon. Since $E^2 = p^2c^2$, we get:
$$(E/c)^2 = p_x^2 + p_y^2 \Rightarrow E = \frac{mc^2}{2\gamma}$$
Since $p_y/p_x = 1/2$, we can expand $\gamma$ and solve for $v$ to be:
$$v/c = \frac{\sqrt{5} - 1}{2}$$

Electromagnetism

**Topic:** [[Special Relativity]], [[Conservation of Momentum]]
**Metodi:** [[Relativistic Energy-Momentum (metodo)|Relativistic Energy-Momentum]], [[Conservation Laws (metodo)|Conservation Laws]], [[Photon Energy Relation (metodo)|Photon Energy Relation]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Photon (object)|Photon]]
**Fonte:** [Testo (PDF) — p.7](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Problema 10 (decaimento fotonico)
Una massa $m$ in movimento a una velocità $v$ si decompone in due fotoni. Un fotone si muove perpendicolare alla direzione originale,
e l'altro fotone si allontana ad un angolo $\theta$, come mostrato. Se l'angolo risultante è $\tan\theta = 1/2$, determinare l'angolo iniziale
velocità $v$. (Fonte: Morin)
Risposta: $v = \dfrac{c}{\phi}$
Soluzione: La potenza dei fotoni di fondo e di cima sia rispettivamente $E$ e $\gamma mc^2 - E$. Conservazione dell'impulso
dà $p_x = \gamma mv$ e $p_y = E/c$ per il fotone superiore. Dal momento che $E^2 = p^2c^2$, otteniamo:
$$(E/c)^2 = p_x^2 + p_y^2 \Rightarrow E = \frac{mc^2}{2\gamma}$$
Poiché $p_y/p_x = 1/2$, possiamo espandere $\gamma$ e risolvere per $v$ per essere:
$$v/c = \frac{\sqrt{5} - 1}{2}$$

Magnetismo elettrico

**Topic:** [[Special Relativity]], [[Conservation of Momentum]]
**Metodi:** [[Relativistic Energy-Momentum (metodo)|Relativistic Energy-Momentum]], [[Conservation Laws (metodo)|Conservation Laws]], [[Photon Energy Relation (metodo)|Photon Energy Relation]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Photon (object)|Photon]]
**Fonte:** [Testo (PDF) — p.7](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q11" data-atom="q11" data-title="Russia na — Quesito 11" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/electron"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 11 (Zero Energy)
Find a geometric arrangement of one proton and two electrons are colinear and the potential energy of the system
is zero. What is the ratio of the distance between the left two particles and the right two particles? (Source:
Purcell)
Answer: $\phi$ or $1/\phi$
Solution: Suppose the three charges $q_1$, $q_2$, and $q_3$ are located at distances $x = 0$, $x = 1$, and $x = a$ respectively. Then
the energy of the system would be:
$$\frac{q_1q_3}{a} + \frac{q_2q_3}{b - 1} + \frac{q_1q_2}{1} = 0$$
Letting $q_1 = +e$ and $q_2 = q_3 = -e$, we get:
$$\frac{1}{a} + 1 = \frac{1}{a - 1}$$
The root is therefore $a = \phi$

**Topic:** [[Electrostatics]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Electric Potential Method (metodo)|Electric Potential Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Electron (object)|Electron]]
**Fonte:** [Testo (PDF) — p.7](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Problema 11 (Energia zero)
Trova un'arrangimento geometrico di un protone e due elettroni sono colineari e l'energia potenziale del sistema
- E' zero. Qual è il rapporto tra le due particelle sinistra e le due particole destre? (Fonte:
Purcell)
Risposta: $\phi$ o $1/\phi$
Soluzione: supponiamo che le tre cariche $q_1$, $q_2$ e $q_3$ siano situate a distanze $x = 0$, $x = 1$ e $x = a$ rispettivamente. Allora...
l'energia del sistema sarebbe:
$$\frac{q_1q_3}{a} + \frac{q_2q_3}{b - 1} + \frac{q_1q_2}{1} = 0$$
Se lasciamo $q_1 = +e$ e $q_2 = q_3 = -e$, otteniamo:
$$\frac{1}{a} + 1 = \frac{1}{a - 1}$$
La radice è quindi $a = \phi$

**Topic:** [[Electrostatics]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Electric Potential Method (metodo)|Electric Potential Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Electron (object)|Electron]]
**Fonte:** [Testo (PDF) — p.7](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q12" data-atom="q12" data-title="Russia na — Quesito 12" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/point-charge,object/conducting-sphere"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 12 (Zero Force from Sphere)
A point charge $Q$ is located a distance $r > R$ from the center of a nongrounded conducting spherical shell with
radius $R$ and net charge that is also $Q$. At what distance from the center should we place the charge such that
the force is zero? (Source: Purcell)
Answer: $r = R\phi$
Solution: This problem is solved by applying the method of image charges. If we let $r = nR$, then it is well known that
we can create the necessary boundary conditions by placing an image charge $q = -Q/n$ located a distance $R/n$ from the
center of the shell and an additional image charge $(1 + 1/n)Q$ located at the center of the shell. The net field is thus:
$$E = \frac{(1 + 1/n)Q}{(nR)^2} + \frac{-Q/n}{(n - 1/n)^2R^2}$$
which equals zero when $n = \phi$.

**Topic:** [[Electrostatics]]
**Metodi:** [[Electric Potential Method (metodo)|Electric Potential Method]], [[Coulomb's Law (metodo)|Coulomb's Law]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Point Charge (object)|Point Charge]], [[Conducting Sphere (object)|Conducting Sphere]]
**Fonte:** [Testo (PDF) — p.8](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Problema 12 (Fuerza Zero dalla Sfera)
Una carica puntologica $Q$ si trova a una distanza $r > R$ dal centro di una conchiglia sferica conduttrice non arrotondata con
il raggio $R$ e la carica netta che è anche $Q$. A che distanza dal centro dovremmo posizionare la carica in modo tale che
La forza è zero? (Fonte: Purcell)
Risposta: $r = R\phi$
Soluzione: Questo problema viene risolto applicando il metodo di carica dell'immagine. Se lasciamo $r = nR$, allora è ben noto che
Possiamo creare le condizioni di confine necessarie inserendo una carica di immagine $q = -Q/n$ situata a una distanza $R/n$ dalla
centro della conchiglia e una carica di immagine aggiuntiva $(1 + 1/n)Q$ situata al centro della conchiglia. Il campo netto è così:
$$E = \frac{(1 + 1/n)Q}{(nR)^2} + \frac{-Q/n}{(n - 1/n)^2R^2}$$
che è pari a zero quando $n = \phi$.

**Topic:** [[Electrostatics]]
**Metodi:** [[Electric Potential Method (metodo)|Electric Potential Method]], [[Coulomb's Law (metodo)|Coulomb's Law]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Point Charge (object)|Point Charge]], [[Conducting Sphere (object)|Conducting Sphere]]
**Fonte:** [Testo (PDF) — p.8](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q13" data-atom="q13" data-title="Russia na — Quesito 13" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/resistor,object/wire"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 13 (Infinite Resistances)
Determine the resistance between terminals A and B in each of the infinite resistors shown below where each
resistor has a resistance of $r$. (Source: Purcell)
Answer: a) $R = \phi r$ b) $R = \phi/r$
Solution: The circuits here are self similar so it shouldn't be surprising that the golden ratio shows up. Let $R$ be the
resistance from A to B. To solve (a) we can simply cut the wires past the first vertical resistor, then replace the rest of
the circuit with a resistor $R$ (similar to the very first example in the introduction). This gives:
$$R = r + \frac{rR}{r + R}$$
Solving gives $R = \phi r$. Part (b) and the following example are extremely similar so they are left as an exercise to the
reader.

**Topic:** [[Circuits]]
**Metodi:** [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Resistor (object)|Resistor]], [[Wire (object)|Wire]]
**Fonte:** [Testo (PDF) — p.9](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Il problema 13 (Ristorsi infiniti)
Determina la resistenza tra i terminali A e B in ciascuna delle resistenze infinite mostrate di seguito, dove ciascuna
la resistenza è di $r$. (Fonte: Purcell)
Risposta: a) $R = \phi r$ b) $R = \phi/r$
Soluzione: I circuiti qui sono simili, quindi non dovrebbe sorprendere che venga mostrato il rapporto dorato. La misurazione del valore di $R$ è
resistenza da A a B. Per risolvere (a) possiamo semplicemente tagliare i fili oltre la prima resistenza verticale, quindi sostituire il resto di
il circuito con resistenza $R$ (simile al primo esempio dell'introduzione). Questo dà:
$$R = r + \frac{rR}{r + R}$$
La soluzione dà $R = \phi r$. La parte b) e l'esempio seguente sono estremamente simili, quindi sono lasciati come un esercizio per la
- Il lettore.

**Topic:** [[Circuits]]
**Metodi:** [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Resistor (object)|Resistor]], [[Wire (object)|Wire]]
**Fonte:** [Testo (PDF) — p.9](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q14" data-atom="q14" data-title="Russia na — Quesito 14" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/resistor"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 14 (Another Infinite Bridge)
Determine the resistance between the legs of the ladder if each resistor has a resistance $r$. (Source: Physics Brawl)
Answer: $R = \phi r$
Solution: Again, we can simply use the self similarity principle and obtain the exact same result as before.

**Topic:** [[Circuits]]
**Metodi:** [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.10](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Il problema 14 (Un altro ponte infinito)
Determinare la resistenza tra le gambe della scala se ogni resistente ha una resistenza $r$. (Fonte: Physics Brawl)
Risposta: $R = \phi r$
Soluzione: Ancora una volta, possiamo semplicemente usare il principio di somiglianza di sé e ottenere lo stesso risultato esatto come prima.

**Topic:** [[Circuits]]
**Metodi:** [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.10](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q15" data-atom="q15" data-title="Russia na — Quesito 15" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/resistor"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 15 (Infinite Triangles)
In the diagram below, each segment represents a resistor $r$. Suppose that we extend this pattern such that there
are an infinite number of triangles (which spiral out of the page to prevent bumping into each other). What is the
effective resistance between A and B? (Source: Purcell)
Answer: $R = \phi r$
Solution: Let us consider constructing such a circuit. We will begin with only two resistors such that their resistance is
$2R$. We then add in a third (to make a triangle). This gives a resistance $(2/3)R$. We continue adding resistors one by
one and we see it follows the pattern (omitting the factor of $R$):
$$\frac{2}{1},\ \frac{2}{3},\ \frac{5}{3},\ \frac{5}{8},\ \frac{13}{21},\ \frac{34}{55}$$
which appear to be going in order of the Fibonacci sequence. Thus the ratio will eventually converge to $\phi$.

**Topic:** [[Circuits]]
**Metodi:** [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.10](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Il problema 15 (Triangoli infiniti)
Nel diagramma di seguito, ciascun segmento rappresenta una resistenza $r$. Supponiamo che estendiamo questo modello in modo che ci
sono un numero infinito di triangoli (che si spiralizzano fuori dalla pagina per evitare di scontrarsi tra loro). Che cos'è
resistenza efficace tra A e B? (Fonte: Purcell)
Risposta: $R = \phi r$
Soluzione: Consideriamo di costruire un tale circuito. Inizieremo con solo due resistenti tali che la loro resistenza sia
$2R$. Poi aggiungiamo un terzo (per fare un triangolo). Questo dà una resistenza $(2/3)R$. Continueremo ad aggiungere le resistenze uno dopo l'altro.
uno e vediamo che segue il modello (omissione del fattore di $R$):
$$\frac{2}{1},\ \frac{2}{3},\ \frac{5}{3},\ \frac{5}{8},\ \frac{13}{21},\ \frac{34}{55}$$
che sembrano andare nell'ordine della sequenza di Fibonacci. In tal modo il rapporto si converge alla fine a $\phi$.

**Topic:** [[Circuits]]
**Metodi:** [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.10](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)



<span class="atom-split" id="q16" data-atom="q16" data-title="Russia na — Quesito 16" data-tags="kg/prova,paese/Russia,comp/Russia,cluster/Meccanica,object/capacitor,object/inductor"></span>

<div class="qlang-switch" data-default="en"></div>



Problem 16 (Natural Frequencies)
Determine the largest two natural frequencies of the circuit shown below. Let $C_1 \ll C_2$, and $L_1 \ll L_2$. (Source:
Physics Cup 2012)
Answer: $\omega_1 = \dfrac{\phi}{\sqrt{L_1C_1}}$ and $\omega_2 = \dfrac{1}{\phi\sqrt{L_1C_1}}$
See the solutions here. We can choose to brute force the problem via complex impedances, but we can also draw an
analog to springs, as shown in the link. For example, the first scenario is exactly identical to problem 4!

**Topic:** [[Circuits]], [[Oscillations & Waves]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Capacitor (object)|Capacitor]], [[Inductor (object)|Inductor]]
**Fonte:** [Testo (PDF) — p.11](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)


<div class="qlang-split" data-lang="it"></div>

Problema 16 (Frequenze naturali)
Determina le due frequenze naturali più grandi del circuito mostrato di seguito. Let $C_1 \ll C_2$ e $L_1 \ll L_2$. (Fonte:
Coppa della fisica 2012)
Risposta: $\omega_1 = \dfrac{\phi}{\sqrt{L_1C_1}}$ e $\omega_2 = \dfrac{1}{\phi\sqrt{L_1C_1}}$
Vedi le soluzioni qui. Possiamo scegliere di forzare il problema attraverso impedanze complesse, ma possiamo anche disegnare un
analogo alle sorgenti, come illustrato nel collegamento. Per esempio, il primo scenario è esattamente identico al problema 4!

**Topic:** [[Circuits]], [[Oscillations & Waves]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Capacitor (object)|Capacitor]], [[Inductor (object)|Inductor]]
**Fonte:** [Testo (PDF) — p.11](https://drive.google.com/file/d/1IF7PfLE9j_mBh0b02i3AtpLjGKEgUiH_/view)
