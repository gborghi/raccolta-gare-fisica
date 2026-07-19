---
title: APhO 2026 — Teorica
tipo: prova
tags:
  - kg/prova
  - paese/asia
  - comp/APhO
---
<div class="atom-reader" data-prova="apho_2026_theory"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="APhO 2026 — Teorica — Quesito 1" data-tags="kg/prova,paese/Asia,comp/APhO,topic/rigid-body-statics,argomento/meccanica,difficolta/5,multidisciplina/multi,object/beam,object/lever"></span>

<div class="qlang-switch" data-default="en"></div>



**Physics of Weighing Scales**

Various scales for measuring the mass of objects are used in daily life. This question is about the physical principles related to the beam balance, the Roberval balance. While these balances look similar, they have slightly different structures and behave differently.

We assume that small friction at the pivots allows the balance to eventually come to rest. However, this friction is sufficiently small that it does not affect the equilibrium angle determined from torque balance. Therefore, friction and air resistance may be neglected in the calculations.

### A. Sensitivity of the Beam Balance (2.5 pts)

![[APhO_2026_theory_Q1_p1_f1.png]]
*Fig.1*

A beam balance consists of a beam (lever arm) that rotates about a fixed axis (pivot or fulcrum) and two pans of equal mass suspended from each side of the beam. If the masses placed on the pans differ, the beam tilts toward the heavier side to reach equilibrium.

During the motion of the beam, the suspended pans may swing. Although the force exerted by the system consisting of the pan and the object on the beam may vary over time due to this swinging, we approximate the force as the total weight of the pan and the object, neglecting the swinging effect.

If the beam tilts at a large angle for even a small mass difference, the scale is considered sensitive. Part A of the question examines the issue of sensitivity.

The beam is assumed to be a flat sheet with negligible thickness. Let $O$ be the fixed point, and $L$ and $R$ be the points where the left and right pans are suspended, respectively. The center of mass of the beam coincides with point $O$, as in Fig.2. The axis of rotation passes through $O$ and is perpendicular to the beam. The physical parameters and variables that may be related to the beam balance and its sensitivity are as follows.

- $b$: the vertical distance between $O$ and the line connecting $L$ and $R$
- $l$: the horizontal distance from the perpendicular bisector passing through $O$ to points $L$ and $R$
- $g$: gravitational acceleration
- $M$: mass of the beam
- $m_1$: total mass of the left pan and its load
- $m_2$: total mass of the right pan and its load

When $m_1 > m_2$, the beam tilts counter-clockwise by an angle $\theta_0$ to reach equilibrium.

![[APhO_2026_theory_Q1_p2_f1.png]]
*Fig. 2.*

**A.1** *(0.3 pt)* When the beam is tilted by an angle $\theta$ counter-clockwise from the horizontal, find the magnitude of the torque about $O$ exerted by the left pan and its load, taking the counter-clockwise direction as positive.

**A.2** *(0.3 pt)* When the beam is tilted by an angle $\theta$ counter-clockwise from the horizontal, find the torque exerted by the right pan and its load (total mass $m_2$) that tends to rotate the beam clockwise.

**A.3** *(0.4 pt)* Express the tilt angle $\theta_0$ at equilibrium in terms of the given variables and parameters.

**A.4** *(0.3 pt)* To make the scale more sensitive (a larger $\theta_0$ for a small mass difference), which of the following conditions for $b$ and $l$ is correct? (Selecting an incorrect option will result in a 0.1-point deduction.)

1. Larger $l$ or larger $b$ leads to a larger $|\theta_0|$.
2. Smaller $l$ or smaller $b$ leads to a larger $|\theta_0|$.
3. Larger $l$ or smaller $b$ leads to a larger $|\theta_0|$.
4. Smaller $l$ or larger $b$ leads to a larger $|\theta_0|$.

The beam of a commercially available beam balance is often made so that the rotation axis (pivot point $O$) is higher than the center of mass (CM) of the beam. However, making the beam this way reduces the sensitivity of the beam balance. To solve this problem and design a more sensitive scale, we intend to change the structure of the beam. As a candidate, the beam is designed by modifying it so that the pivot point ($O$) of the beam is below the center of mass (CM) of the beam as shown in Fig.3. Let the pivot point of the beam positioned at a distance $d$ underneath the center of mass. The beam is assumed to be a flat sheet with negligible thickness. The meanings of $M$, $L$, $R$, $b$, $l$, $m_1$, $m_2$, $g$ for the scale are the same as in the previous problem.

![[APhO_2026_theory_Q1_p3_f1.png]]
*Fig.3*

**A.5** *(0.8 pt)* When the beam tilts by an angle $\theta_1 (< \pi/2)$ from the horizontal to reach equilibrium, express the tilt angle $\theta_1$ in terms of the given variables and parameters.

**A.6** *(0.4 pt)* Obtain the condition under which the beam reaches a stable equilibrium angle $\theta_1 (< \pi/2)$. Express the condition as an inequality independent of $\theta_1$.

### B. Basic Model of Roberval Balance (3.6 pts)

![[APhO_2026_theory_Q1_p3_f2.png]]
*Fig.4*

The Roberval balance uses a parallel-linkage structure, where the pans are connected to two horizontal beams (upper and lower). These two beams are joined to the pans by pivots, which act like hinges. This special connection allows each pan of two pivots to stay perfectly vertical even when the beams tilt (Fig.4). As the beams rotate, the pans move together in a synchronized way. A unique feature of this design is that the balance depends only on the total mass on each side; it does not matter where you place the weights on the pans. The physical parameters, variables and notations that may be related to the beam balance is as follows (Fig.5).

- $O, O'$: fixed pivots for the two horizontal beams
- $I_1$: the moment of inertia of the upper beam about its axis of rotation
- $I_2$: the moment of inertia of the lower beam about its axis of rotation
- $l$: the distance from the central pivot to the pan suspension point
- $x_L, x_R$: horizontal offsets of the weights from the center of the left and right pans, respectively.
- $m$: mass of each pan
- $m_L, m_R$: mass of the load placed on the left and right pans, respectively. ($m_L \ge m_R$)
- $g$: gravitational acceleration.

Assume that the center of mass (CM) of each beam coincides with its pivot and that pivots of pans and pivot of the beam lays on one line.

![[APhO_2026_theory_Q1_p4_f1.png]]
*Fig.5*

**B.1** *(0.3 pt)* Calculate the total potential energy of the system $U(\theta)$, when the beam is tilted counter-clockwise by an angle $\theta$ from the horizontal ($m_L \ge m_R$). Define the potential energy $U$ to be zero at the initial horizontal position.

**B.2** *(0.5 pt)* Express the total kinetic energy of the system in terms of the given variables and parameters and the angular velocity $\dot{\theta}$.

**B.3** *(0.6 pt)* Obtain the second-order differential equation governing the rotation angle $\theta$.

The angular acceleration $\ddot{\theta}$ at the instant the beam is released from the horizontal position is as follows:

$$\ddot{\theta} = \frac{(m_L - m_R)\,g\,l}{I_1 + I_2 + (2m + m_L + m_R)\,l^2}$$

**B.4** *(1 pt)* At the instant with zero initial velocity, let $T_{L1}, T_{L2}$ be the magnitudes of the vertical components of forces acting between the left pan and the upper and lower beams, respectively, and similarly, let $T_{R1}, T_{R2}$ be the magnitudes of the vertical components of the forces for the right pan. Calculate the values of $(T_{L2} + T_{R1})$ in terms of the given variables and parameters.

**B.5** *(0.6 pt)* Assuming that all components of the balance, including the beams and pans, are rigid bodies, determine whether each of the following forces can be calculated at the moment of release. (Answer with Yes, No, or blank for each. A penalty of 0.1 points will be applied for each incorrect answer.)

1. $T_{R1}$
2. Vertical component of force exerted by the central pivot on the upper beam

Set up all the necessary relational equations required to solve this problem. Note that you are only required to provide the forms of the equations; explicit final calculations are not necessary.

**B.6** *(0.6 pt)* Let $M_T$ be the mass of the balance without any weights. Weights of mass $m_L$ and $m_R$ ($m_L > m_R$) are placed on the left and right pans, respectively. The beam is initially held horizontal by hand and then released. Find the normal force $N$ exerted by the floor on the balance immediately after release.

### C. Practical Model of Roberval Balance (3.9 pts)

In the basic model of Roberval balance discussed in Part B, a mass imbalance causes continuous angular acceleration, making it impossible to determine a static equilibrium angle. In contrast, a practical Roberval balance reaches a stable equilibrium at a specific tilt angle depending on the mass difference. In Part C, we analyze the physical structure of such practical Roberval balances.

To calculate the equilibrium angle as a function of the mass difference, consider the following variables and parameters:

- **Upper Beam:** The pivot point (fixed axis of the beam) is located at a vertical distance $d$ directly above the beam's center of mass. The beam has a mass $M$ and a moment of inertia $I_1$ about its pivot (fixed axis).
- **Lower Beam:** The pivot point (fixed axis of the beam) coincides with the beam's center of mass. The beam has a moment of inertia $I_2$ about its pivot (fixed axis).
- $m_1, m_2$ ($m_1 \ge m_2$): the combined mass of the pan and any objects placed upon it for the left and right sides, respectively. (Please note the difference in notation from part B.)
- $l$: the horizontal distance from the perpendicular bisector passing through the central pivot to the pan suspension point
- $g$: gravitational acceleration.

It is assumed that the weights remain stationary relative to the pans and move in unison with them and that pivots of pans and pivot of the beam lays on one line.

**C.1** *(1.4 pt)* With two weights of different masses placed on the pans ($m_1 > m_2$), the beam is initially held in a horizontal position and then released from rest. In the situation, the second-order differential equation of motion for the tilt angle $\theta$ takes the form: $A\ddot{\theta} = B\cos\theta + C\sin\theta$. Determine the coefficients $A$, $B$ and $C$ in terms of the given variables and parameters. Set $\theta = 0$ at the horizontal position.

**C.2** *(1.9 pt)* When the balance is at its equilibrium state ($\theta = \theta_0$), a slight disturbance causes the beams and pans to oscillate about the equilibrium angle. To analyze this small oscillation, we define a new variable $\eta = \theta - \theta_0$. By approximating the equation of motion obtained in Part C.1, derive the governing equation for $\eta$ in terms of the given variables and parameters. The answer must not include $\theta_0$.

**C.3** *(0.6 pt)* If the total mass $m_1 + m_2$ is constant, determine how the mass should be distributed between the pans to maximize the period of small oscillations. Calculate the period of small oscillations in the limit where $m_1 = m_2 = 0$.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/17qJE_93WXoxQHMmFc_F6Rxsq81v82Gas/view)
**Topic:** [[Rigid Body Statics]], [[Rotational Dynamics]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Beam (object)|Beam]], [[Lever (object)|Lever]]


<div class="qlang-split" data-lang="it"></div>

**Fisica delle pesanti**

Le varie scale per misurare la massa degli oggetti sono utilizzate nella vita quotidiana. Questa domanda riguarda i principi fisici relativi all'equilibrio del fascio, l'equilibrio Roberval. Sebbene questi bilanci sembrino simili, hanno strutture leggermente diverse e si comportano in modo diverso.

Supponiamo che un piccolo attrito ai punti di rotazione permetta all'equilibrio di riposare. Tuttavia, questo attrito è sufficientemente piccolo da non influenzare l'angolo di equilibrio determinato dall'equilibrio della coppia. Pertanto, nel calcolo possono essere trascurate le condizioni di attrito e di resistenza all'aria.

### A. Sensibilità della bilancia del fascio (2,5 pts)

![[APhO_2026_theory_Q1_p1_f1.png]]
*Fig.1*

Un equilibrio del fascio consiste in un fascio (braccio di leva) che ruota attorno ad un asse fisso (pivot o fulcro) e due parti di massa uguale sospesi da ogni lato del fascio. Se le masse posizionate sulle cassette differiscono, il fascio si inclina verso il lato più pesante per raggiungere l'equilibrio.

Durante il movimento del fascio, le vasche sospese possono oscillare. Sebbene la forza esercitata dal sistema costituito dalla padella e dall'oggetto sul fascio possa variare nel tempo a causa di questa oscillazione, si approssima la forza come il peso totale della padella e dell'oggetto, trascurando l'effetto di oscillazione.

Se il fascio si inclina ad un'angolazione ampia anche per una piccola differenza di massa, la scala è considerata sensibile. La parte A della domanda esamina la questione della sensibilità.

Si presume che il raggio sia un foglio piatto di spessore trascurabile. Il punto fisso è $O$ e il punto di sospensione è $L$ e il punto di sospensione è $R$, rispettivamente, il punto di sospensione delle pannelle sinistra e destra. Il centro di massa del fascio coincide con il punto $O$, come in figura 2. L'asse di rotazione passa attraverso $O$ ed è perpendicolare al fascio. I parametri fisici e le variabili che possono essere correlati al bilanciamento del fascio e alla sua sensibilità sono i seguenti:

- $b$: la distanza verticale tra $O$ e la linea di collegamento $L$ e $R$
- $l$: la distanza orizzontale dal bisettore perpendicolare che passa attraverso $O$ ai punti $L$ e $R$
- $g$: accelerazione gravitazionale
- $M$: massa del fascio
- $m_1$: massa totale della vasca sinistra e il suo carico
- $m_2$: massa totale della vasca destra e il suo carico

Quando $m_1 > m_2$, il fascio si inclina in senso antiorario con un angolo $\theta_0$ per raggiungere l'equilibrio.

![[APhO_2026_theory_Q1_p2_f1.png]]
*Fig. 2.*

Quando il fascio è inclinato da un angolo $\theta$ contro il senso dell'orologio dall'orizzontale, trovare la grandezza della coppia di $O$ esercitata dalla pannella sinistra e il suo carico, prendendo come positiva la direzione contro il senso dell'orologio.

Quando il fascio è inclinato da un angolo $\theta$ contro il senso orologio orizzontale, si trova la coppia esercitata dalla pannella destra e il suo carico (massa totale $m_2$) che tende a ruotare il fascio in senso orologio.

**A.3** *(0,4 pt) * Esprimere l'angolo di inclinazione $\theta_0$ in equilibrio in termini di variabili e parametri dati.

**A.4** *(0,3 pt) * Per rendere la scala più sensibile (una maggiore $\theta_0$ per una piccola differenza di massa), quale delle seguenti condizioni per $b$ e $l$ è corretta? (Se si sceglie un'opzione sbagliata si deriverà in una deduzione di 0,1 punti.)

1. Un $l$ più grande o un $b$ più grande porta ad un $|\theta_0|$ più grande.
2. Una $l$ più piccola o $b$ più piccola porta ad un $|\theta_0|$ più grande.
3. Un $l$ più grande o un $b$ più piccolo porta ad un $|\theta_0|$ più grande.
4. Una dimensione più piccola $l$ o più grande $b$ porta ad un $|\theta_0|$ più grande.

Il fascio di un fascio di equilibrio commerciale è spesso realizzato in modo tale che l'asse di rotazione (punto di rotazione $O$) sia superiore al centro di massa (CM) del fascio. Tuttavia, la realizzazione del fascio in questo modo riduce la sensibilità dell'equilibrio del fascio. Per risolvere questo problema e progettare una scala più sensibile, intendiamo cambiare la struttura del fascio. Il fascio è progettato modificandolo in modo che il punto di rotazione ($O$) del fascio sia inferiore al centro di massa (CM) del fascio come mostrato nella figura 3. Il punto di rotazione del fascio deve essere posizionato a una distanza $d$ sotto il centro di massa. Si presume che il raggio sia un foglio piatto di spessore trascurabile. I significati di $M$, $L$, $R$, $b$, $l$, $m_1$, $m_2$, $g$ per la scala sono gli stessi del problema precedente.

![[APhO_2026_theory_Q1_p3_f1.png]]
*Fig.3*

Quando il fascio si inclina da un angolo $\theta_1 (< \pi/2)$ orizzontale fino all'equilibrio, esprimere l'angolo di inclinazione $\theta_1$ in termini di variabili e parametri dati.

**A.6 ** *(0,4 pt) * Ottenere la condizione in cui il fascio raggiunge un angolo di equilibrio stabile $\theta_1 (< \pi/2)$. Esprimere la condizione come una disuguaglianza indipendente da $\theta_1$.

### B. Modello di base del saldo roberval (3,6 pts)

![[APhO_2026_theory_Q1_p3_f2.png]]
*Fig.4 *

L'equilibrio Roberval utilizza una struttura di collegamento parallelo, in cui le pentole sono collegate a due travi orizzontali (alto e basso). Questi due travi sono collegati alle pentole da pivot, che agiscono come cerniere. Questa speciale connessione consente a ciascuna pannella di due pivot di rimanere perfettamente verticale anche quando i fasci sono inclinati (Fig.4). Mentre i fasci ruotano, le cassette si muovono insieme in modo sincronizzato. Una caratteristica unica di questo disegno è che l'equilibrio dipende solo dalla massa totale su ciascun lato; non importa dove si collocano i pesi sulle pentole. I parametri fisici, le variabili e le notazioni che possono essere correlate al bilanciamento del fascio sono i seguenti (Fig. 5).

- $O, O'$: pivot fissi per i due travi orizzontali
- $I_1$: il momento di inerzia del fascio superiore intorno al suo asse di rotazione
- $I_2$: il momento di inerzia del fascio inferiore intorno al suo asse di rotazione
- $l$: distanza dal pivot centrale al punto di sospensione della pan
- $x_L, x_R$: compensazioni orizzontali dei pesi dal centro delle vasche e delle vasche destre, rispettivamente.
- $m$: massa di ciascuna scatola
- $m_L, m_R$: massa del carico posto rispettivamente sulle vasche sinistra e sulla destra. ($m_L \ge m_R$)
- $g$: accelerazione gravitazionale.

Supponiamo che il centro di massa (CM) di ogni fascio coincida con il suo pivot e che i pivot delle padelle e il pivot del fascio si trovino su una linea.

![[APhO_2026_theory_Q1_p4_f1.png]]
*Fig.5*

**B.1** *(0,3 pt) * Calcolare l'energia potenziale totale del sistema $U(\theta)$, quando il fascio è inclinato contro il senso orario da un angolo $\theta$ orizzontale ($m_L \ge m_R$). Definire l'energia potenziale $U$ come zero nella posizione orizzontale iniziale.

**B.2** *(0,5 pt)* Esprimere l'energia cinetica totale del sistema in termini di variabili e parametri dati e velocità angolare $\dot{\theta}$.

**B.3 ** *(0,6 pt) * Ottieni l'equazione differenziale di secondo ordine che regola l'angolo di rotazione $\theta$.

L'accelerazione angolare $\ddot{\theta}$ nel momento in cui il fascio viene rilasciato dalla posizione orizzontale è la seguente:

$$\ddot{\theta} = \frac{(m_L - m_R)\,g\,l}{I_1 + I_2 + (2m + m_L + m_R)\,l^2}$$

**B.4** *(1 pt) * In un istante con velocità iniziale zero, $T_{L1}, T_{L2}$ siano le magnitudini delle componenti verticali delle forze che agiscono tra il pannello sinistro e il fascio superiore e inferiore, rispettivamente, e allo stesso modo $T_{R1}, T_{R2}$ siano le magnitudini delle componenti verticali delle forze per il pannello destro. Calcolare i valori di $(T_{L2} + T_{R1})$ in termini di variabili e parametri dati.

**B.5** *(0,6 pt)* Supponendo che tutti i componenti del bilanciatore, compresi i fasci e le cassette, siano corpi rigidi, si determina se ciascuna delle seguenti forze può essere calcolata al momento del rilascio. (Risponi con sì, no o bianco per ciascuna. Per ogni risposta errata verrà applicata una pena di 0,1 punti.)

1. $T_{R1}$
2. Componente verticale della forza esercitata dal pivot centrale sul fascio superiore

Si possono creare tutte le equazioni relazionali necessarie per risolvere questo problema. Si noti che è richiesto di fornire solo le forme delle equazioni; non sono necessari calcoli definitivi espliciti.

**B.6 ** *(0,6 pt) * $M_T$ sia la massa del bilanciatore senza alcun peso. I pesi di massa $m_L$ e $m_R$ ($m_L > m_R$) sono posizionati rispettivamente sulle vasche sinistra e destra. Il fascio viene inizialmente tenuto orizzontale a mano e poi rilasciato. Trova la forza normale $N$ esercitata dal pavimento sulla bilancia immediatamente dopo il rilascio.

### C. Modello pratico di equilibrio roberval (3.9 pts)

Nel modello di base dell'equilibrio Roberval discusso nella parte B, uno squilibrio di massa provoca un'accelerazione angolare continua, rendendo impossibile determinare un angolo di equilibrio statico. Al contrario, un equilibrio Roberval pratico raggiunge un equilibrio stabile ad un angolo specifico di inclinazione a seconda della differenza di massa. Nella parte C, analizziamo la struttura fisica di tali equilibri Roberval pratici.

Per calcolare l'angolo di equilibrio in funzione della differenza di massa, si devono considerare le seguenti variabili e parametri:

- **Raccio superiore: ** Il punto di rotazione (asse fisso del fascio) si trova a una distanza verticale $d$ direttamente sopra il centro di massa del fascio. Il fascio ha una massa $M$ e un momento di inerzia $I_1$ intorno al suo pivot (asse fisso).
- **Fonte inferiore: ** Il punto di rotazione (asse fissa del fascio) coincide con il centro di massa del fascio. Il fascio ha un momento di inerzia $I_2$ intorno al suo pivot (asse fisso).
- $m_1, m_2$ ($m_1 \ge m_2$): la massa combinata della padella e di tutti gli oggetti che si trovano su di essa per i lati sinistro e destro, rispettivamente. (Si prega di notare la differenza di notazione della parte B.)
- $l$: la distanza orizzontale dal bisettore perpendicolare che passa attraverso il pivot centrale fino al punto di sospensione della panchina
- $g$: accelerazione gravitazionale.

Si presume che i pesi rimangano statici rispetto alle pentole e si muovano all'unisono con loro e che i pivot delle pentole e il pivot del fascio si trovino su una linea.

**C.1** *(1.4 pt) * Con due pesi di diverse masse posizionate sulle cassette ($m_1 > m_2$), il fascio viene inizialmente tenuto in posizione orizzontale e poi rilasciato dal riposo. In questa situazione, l'equazione differenziale di movimento di secondo ordine per l'angolo di inclinazione $\theta$ assume la forma: $A\ddot{\theta} = B\cos\theta + C\sin\theta$. Determinare i coefficienti $A$, $B$ e $C$ in termini di variabili e parametri dati. Impostare $\theta = 0$ nella posizione orizzontale.

**C.2 ** *(1,9 pt) * Quando l'equilibrio è in stato di equilibrio ($\theta = \theta_0$), un leggero disturbo fa oscillare i fasci e le vaselle intorno all'angolo di equilibrio. Per analizzare questa piccola oscillazione, definiamo una nuova variabile $\eta = \theta - \theta_0$. Approximando l'equazione di movimento ottenuta nella parte C.1, derivare l'equazione di governo per $\eta$ in termini di variabili e parametri dati. La risposta non deve includere $\theta_0$.

Se la massa totale $m_1 + m_2$ è costante, determinare come la massa deve essere distribuita tra le cassette per massimizzare il periodo di piccole oscillazioni. Calcolare il periodo di piccole oscillazioni nel limite in cui $m_1 = m_2 = 0$.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/17qJE_93WXoxQHMmFc_F6Rxsq81v82Gas/view)
**Topic:** [[Rigid Body Statics]], [[Rotational Dynamics]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Beam (object)|Beam]], [[Lever (object)|Lever]]



<span class="atom-split" id="q02" data-atom="q02" data-title="APhO 2026 — Teorica — Quesito 2" data-tags="kg/prova,paese/Asia,comp/APhO,topic/wave-optics,argomento/ottica,difficolta/5,multidisciplina/multi,object/electron,object/photon"></span>

<div class="qlang-switch" data-default="en"></div>



**Diffraction of X-rays by Structured and Evolving Targets (10 points)**

**Note**

1. Vectors are denoted by bold symbols (e.g., $\mathbf{r}$, $\mathbf{q}$).
2. Assume that absorption is neglected and that the electric field is polarized perpendicular to the plane of incidence.

X-ray diffraction patterns arise because many tiny "wave sources" within a crystal interfere, and we can predict this by adding their complex amplitudes with the correct phases. Consider a monochromatic wave characterized by a (real) amplitude $A \ge 0$ and a phase $\phi$. We define the complex amplitude $\tilde{A}$ as

$$\tilde{A} = A e^{i\phi},$$

so that the (real) amplitude of the wave is the magnitude (absolute value) of $\tilde{A}$, and $\phi$ is its phase. Thus $\tilde{A}$ conveniently encodes both magnitude and phase in a single complex number. In this problem set, we define a dimensionless intensity by the squared magnitude of the total complex amplitude:

$$I = |\tilde{A}|^2 = A^2.$$

Common experimental and geometric proportionality factors, such as detector response, incident-beam normalization, and common propagation factors, are absorbed into this definition. By contrast, the single-electron scattering amplitude $f_0$ is retained explicitly as the amplitude scale for scattering from one point electron.

When a crystalline material is exposed to an incident wave, the wave is diffracted by the crystal lattice and the diffracted parts interfere with one another. The intensity of the resulting diffracted wave can be calculated by adding the complex amplitudes of the individual diffracted waves, taking into account the phase differences between them, and then computing the squared magnitude of the resulting total complex amplitude. Diffraction primarily arises from interactions with electrons, and contributions from heavier particles such as nuclei are typically negligible. The amplitude of the wave diffracted by a single point electron depends only on $R = |\mathbf{R}|$, the distance from the electron to the detector. Since $R$ is much larger than the dimensions of the sample, its variation across the sample can be neglected. Therefore, the total diffracted wave can be accurately determined by properly accounting for the phase differences between individual diffracted waves, while their amplitudes are assumed to be constant.

Let $\mathbf{k}_i$ and $\mathbf{k}_f$ denote the wavevectors of the incident and diffracted waves, respectively. An incident plane wave with wavevector $\mathbf{k}_i$ is diffracted into a wave with wavevector $\mathbf{k}_f$. The momentum transfer is defined as

$$\mathbf{q} = \mathbf{k}_f - \mathbf{k}_i$$

and their magnitudes are assumed to be equal, because the wavelength is unchanged:

$$k \equiv |\mathbf{k}_i| = |\mathbf{k}_f| = \frac{2\pi}{\lambda}.$$

### Part A: Diffraction from two electrons treated as point particles (2.0 pts)

Consider two point electrons located at positions $\mathbf{r}_1$ and $\mathbf{r}_2$, and define $\mathbf{r} \equiv \mathbf{r}_2 - \mathbf{r}_1$. A detector is located at $P$, and we define $\mathbf{R} \equiv P - \mathbf{r}_1$. A plane wave $E_i(\mathbf{r}) \propto e^{i\mathbf{k}_i \cdot \mathbf{r}}$ is incident on the two electrons, and the diffracted wave is observed in the far field along the direction $\mathbf{k}_f$. In part A, the common time-dependent factor $e^{-i\omega t}$ is suppressed, since only relative spatial phases are relevant.

**A.1** *(0.6 pt)* Under the far-field approximation, $R \equiv |\mathbf{R}| \gg |\mathbf{r}|$, keep only the leading-order term in $|\mathbf{r}|/R$ and write the outgoing geometric path difference, $\Delta L_{\text{out}} \equiv |P - \mathbf{r}_1| - |P - \mathbf{r}_2|$, in terms of $\mathbf{r}$ and $\mathbf{k}_f$, or equivalently $\mathbf{k}_f / k_f$.

**A.2** *(0.4 pt)* Using your result from A.1 and accounting for the position-dependent phase of the incident wave at $\mathbf{r}_1$ and $\mathbf{r}_2$, find the phase difference between the two diffracted contributions at the detector, expressed in terms of $\mathbf{q}$ and $\mathbf{r}$. The phase difference is defined as $\Delta\phi \equiv \phi_1 - \phi_2$, where $\phi_1$ and $\phi_2$ are the phases of the contributions from the electrons at $r_1$ and $r_2$.

**A.3** *(0.6 pt)* Express the total complex amplitude of the diffracted wave from these two electrons in terms of $\mathbf{q}$ and $\mathbf{r}$. You may ignore any overall common phase factor, since it does not affect the intensity. Assume that the real amplitude of a diffracted wave from a single point electron is a constant $f_0$, independent of position.

**A.4** *(0.4 pt)* Express the intensity of diffracted waves from those two electrons in terms of $\mathbf{q}$ and $\mathbf{r}$.

### Part B: Finite longitudinal coherence (phase-jump model) (2.3 pts)

Consider two point-like electrons located at positions $\mathbf{r}_1$ and $\mathbf{r}_2$, with $\mathbf{r} \equiv \mathbf{r}_2 - \mathbf{r}_1$. A beam of wavelength $\lambda_0$ (so $k = 2\pi/\lambda_0$ and $\omega = 2\pi c/\lambda_0$) illuminates the electrons, and the diffracted wave is observed in the far field along $\mathbf{k}_f$. We model the incident field as a plane wave with a time-dependent random phase,

$$E_i(\mathbf{r}, t) = A \exp\!\big[i(\mathbf{k}_i \cdot \mathbf{r} - \omega t + \phi(t))\big],$$

where $\phi(t)$ is piecewise constant and undergoes random phase jumps at regular time intervals of duration

$$t_0 \equiv \frac{L_0}{c},$$

with $L_0$ the (given) longitudinal coherence length. At the beginning of each interval of length $t_0$, $\phi(t)$ is reset to a new independent value uniformly distributed on $[0, 2\pi)$. Let $I_0$ denote the (time-averaged) intensity at the detector that would be obtained from a single electron in the same geometry. In this problem, the detector is assumed to measure a time-averaged intensity. That is, it does not resolve the individual random phase jumps. Instead, it records the average of the instantaneous intensity over a time much longer than the phase-jump interval $t_0$: $\langle I \rangle_t \equiv \langle |E(t)|^2 \rangle_t$. Here $\langle \cdots \rangle_t$ denotes an average over many phase-jump intervals.

**B.1** *(2.3 pt)* Using the phase-jump model above, derive the time-averaged total intensity $\langle I \rangle_t$ at the detector from the two electrons. Your final result should be written in terms of $I_0$, $\mathbf{q} \equiv \mathbf{k}_f - \mathbf{k}_i$, the separation vector $\mathbf{r}$, the wavelength $\lambda_0$, and the coherence length $L_0$. Assume the detector averages over times much longer than $t_0$.

### Part C: Non-point particle effect (1.0 pts)

An electron is often treated as a classical point particle, but in a more realistic model its charge may be regarded as being distributed over a finite spatial region. Consider two idealized charge distributions: (i) an ideal point charge located at $\mathbf{r} = 0$, whose scattering amplitude is $A_1(\mathbf{q}) = Q_0$, (ii) an extended Gaussian charge distribution

$$\rho_2(\mathbf{r}) = \rho_0 \exp\!\left(-\frac{r^2}{R_0^2}\right), \qquad r = |\mathbf{r}|.$$

The constants $Q_0$ and $\rho_0$ are chosen so that the total charge is the same in both cases:

$$Q_0 = \int \rho_2(\mathbf{r})\, d^3r.$$

Here $d^3r$ denotes the volume element in three-dimensional space. In Cartesian coordinates, $d^3r = dx\,dy\,dz$ and $\int_{\mathbb{R}^3}$ means integration over all space. Useful identities (may be used without proof):

$$\int_0^\infty e^{-r^2/R_0^2}\, 4\pi r^2\, dr = \pi^{3/2} R_0^3, \qquad \int_{\mathbb{R}^3} e^{-\alpha r^2} e^{i\mathbf{k}\cdot\mathbf{r}}\, d^3r = \left(\frac{\pi}{\alpha}\right)^{3/2} \exp\!\left(-\frac{k^2}{4\alpha}\right), \quad \alpha > 0.$$

**C.1** *(0.4 pt)* Obtain the relation among $Q_0$, $\rho_0$, and $R_0$.

**C.2** *(0.4 pt)* Evaluate the amplitude

$$A_2(\mathbf{q}) \equiv \int_{\mathbb{R}^3} \rho_2(\mathbf{r})\, e^{i\mathbf{q}\cdot\mathbf{r}}\, d^3r$$

and compare it with the point-charge amplitude $A_1(\mathbf{q}) = Q_0$.

**C.3** *(0.2 pt)* Estimate the ratio of the diffracted intensities, $\dfrac{I_2}{I_1}$, for these two idealized cases when $q = \dfrac{2}{R_0}$.

### Part D: Diffraction from a film with non-flat surface morphology (2.4 pts)

Imagine that the surface of a film (i.e., the top atomic layers) is not perfectly flat, but exhibits surface roughness. A common model is to assume that the local film thickness (measured in monolayers) follows a Gaussian distribution. Let $N$ denote the local number of completed monolayers within a lateral coherence area of the beam. We assume that $N$ varies across the surface and is normally distributed with mean $\bar{N}$ and standard deviation $\sigma$ (both in units of monolayers):

$$P(N) = \frac{1}{\sqrt{2\pi}\,\sigma} \exp\!\left[-\frac{(N - \bar{N})^2}{2\sigma^2}\right].$$

(For the purpose of evaluating averages, you may treat $N$ as a continuous variable.) Let $d$ be the spacing between adjacent atomic layers (monolayers), and let $q_z$ denote the component of the scattering vector $\mathbf{q} = \mathbf{k}_f - \mathbf{k}_i$ normal to the flat surface of the film, i.e., $q_z = \mathbf{q} \cdot \hat{z}$. For an integer number of monolayers $N$, the scattering amplitude is

$$A_N(q_z) = \sum_{n=0}^{N-1} e^{i q_z n d} = \frac{1 - e^{i q_z N d}}{1 - e^{i q_z d}}.$$

When averaging over the Gaussian thickness distribution, we treat $N$ as a continuous variable and use the closed-form expression

$$A_N(q_z) \equiv \frac{1 - e^{i q_z N d}}{1 - e^{i q_z d}}$$

as the corresponding continuous extension. Assume the measured diffraction intensity is obtained from the coherent average amplitude,

$$I(q_z) \equiv \big|\langle A(q_z) \rangle\big|^2, \qquad \langle A(q_z) \rangle = \int_{-\infty}^{\infty} P(N)\, A_N(q_z)\, dN.$$

**D.1** *(2.4 pt)* Calculate the intensity ratios

$$\frac{I(q_z,\ \sigma = 0.4,\ \bar{N} = 5)}{I(q_z,\ \sigma = 0,\ \bar{N} = 5)}$$

at

$$q_z = \frac{\pi}{2d} \qquad \text{and} \qquad q_z = \frac{2\pi}{d},$$

respectively. If needed, evaluate the second case by taking the appropriate limit.

### Part E: Diffraction from a film with evolving surface morphology (2.3 pts)

Imagine a thin film with a simple cubic structure grown on a substrate in a layer-by-layer mode, i.e., each monolayer is completed before the next monolayer starts to grow. Let $d$ be the spacing between adjacent atomic layers (monolayers), and let $q_z$ denote the component of $\mathbf{q} = \mathbf{k}_f - \mathbf{k}_i$ normal to the flat surface of the film, i.e., $q_z = \mathbf{q} \cdot \hat{z}$. As the film is being grown, the thickness of the film changes, and so does the diffraction intensity at $\mathbf{q} = \frac{\pi}{d}\hat{z}$. The calculation is performed at the specified out-of-plane momentum transfer, and all monolayer contributions are coherently summed.

**E.1** *(2.3 pt)* If the film starts to grow at $t = 0$ and the time required to complete one monolayer is $t_0$, obtain the diffraction intensity ratio

$$\frac{I(t = 0.8\,t_0)}{I(t = 3.6\,t_0)}$$

measured at $\mathbf{q} = \frac{\pi}{d}\hat{z}$. Assume that during each monolayer-growth interval, the fractional coverage of the top layer increases linearly from 0 to 1, so that at time $t = (N + \theta)t_0$, there are $N$ completed monolayers and a fractional coverage $\theta$ of the next monolayer.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1XV2UMXsCnxfhiMpntZTu_5D_Ue9_e2yS/view)
**Topic:** [[Wave Optics]], [[Modern-Quantum Physics]]
**Metodi:** [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Superposition Principle (metodo)|Superposition Principle]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Electron (object)|Electron]], [[Photon (object)|Photon]]


<div class="qlang-split" data-lang="it"></div>

**Diffrazione dei raggi X per obiettivi strutturati e in evoluzione (10 punti) **

**Nota**

1. I vettori sono indicati con simboli in grasso (ad esempio, $\mathbf{r}$, $\mathbf{q}$).
2. Supponiamo che l'assorbimento sia trascurato e che il campo elettrico sia polarizzato perpendicolare al piano di incidenza.

I modelli di diffrazione dei raggi X si verificano perché molte piccole "fonti d'onda" all'interno di un cristallo interferiscono, e possiamo prevedere questo aggiungendo le loro complesse amplitudini con le fasi corrette. Si consideri un'onda monocromatica caratterizzata da un'ampiezza (real) $A \ge 0$ e una fase $\phi$. Definitiamo l'ampiezza complessa $\tilde{A}$ come

$$\tilde{A} = A e^{i\phi},$$

in modo che l'ampiezza (rea) dell'onda sia la magnitudine (valore assoluto) di $\tilde{A}$ e $\phi$ sia la sua fase. Così $\tilde{A}$ codifica convenientemente sia la magnitudine che la fase in un singolo numero complesso. In questo insieme di problemi, definiamo un'intensità senza dimensioni per la magnitudine quadrata dell'ampiezza complessa totale:

$$I = |\tilde{A}|^2 = A^2.$$

Fattori comuni di proporzionalità sperimentale e geometrica, come la risposta del rilevatore, la normalizzazione del fascio di incidente e i fattori comuni di propagazione, sono assorbiti in questa definizione. Al contrario, l'ampiezza di scattering singolo-elettrone $f_0$ viene mantenuta esplicitamente come scala di amplitudine per la scattering da un elettrone di un punto.

Quando un materiale cristallino è esposto ad un'onda incidentale, l'onda viene diffratta dalla rete cristallina e le parti diffratte interferiscono tra loro. L'intensità dell'onda diffratta risultante può essere calcolata aggiungendo le amplitudini complesse delle singole onde diffratte, tenendo conto delle differenze di fase tra di esse, e quindi calcolando la grandezza quadrata dell'ampiezza complessa totale risultante. La diffrazione deriva principalmente dalle interazioni con gli elettroni e i contributi di particelle più pesanti come i nuclei sono tipicamente trascurabili. L'ampiezza dell'onda diffratta da un singolo elettrone di punto dipende solo da $R = |\mathbf{R}|$, la distanza dall'elettrone al rilevatore. Poiché $R$ è molto più grande delle dimensioni del campione, la sua variazione nel campione può essere trascurata. Pertanto, l'onda diffratta totale può essere determinata con precisione tenendo conto delle differenze di fase tra le singole onde diffratte, mentre le loro amplitudini sono presunte come costanti.

$\mathbf{k}_i$ e $\mathbf{k}_f$ indichino rispettivamente i vettori d'onda dell'incidente e le onde diffratte. Un'onda a piano incidentale con il vettore d'onda $\mathbf{k}_i$ viene diffratta in un'onda con il vettore d'onda $\mathbf{k}_f$. Il trasferimento di impulso è definito come

$$\mathbf{q} = \mathbf{k}_f - \mathbf{k}_i$$

e le loro magnitudini sono presunte uguali, perché la lunghezza d'onda è invariata:

$$k \equiv |\mathbf{k}_i| = |\mathbf{k}_f| = \frac{2\pi}{\lambda}.$$

### Parte A: Diffrazione da due elettroni trattati come particelle puntine (2.0 pts)

Considerate due elettroni puntini situati nelle posizioni $\mathbf{r}_1$ e $\mathbf{r}_2$, e definite $\mathbf{r} \equiv \mathbf{r}_2 - \mathbf{r}_1$. Un rilevatore è situato a $P$, e definiamo $\mathbf{R} \equiv P - \mathbf{r}_1$. Una onda piana $E_i(\mathbf{r}) \propto e^{i\mathbf{k}_i \cdot \mathbf{r}}$ incide sui due elettroni, e l'onda diffratta è osservata nel campo lontano lungo la direzione $\mathbf{k}_f$. Nella parte A, il fattore comune di dipendenza temporale $e^{-i\omega t}$ è soppresso, poiché sono rilevanti solo le fasi spaziali relative.

**A.1** *(0,6 pt) * Nell'approssimazione a campo lontano, $R \equiv |\mathbf{R}| \gg |\mathbf{r}|$, conservare solo il termine di ordine di punta in $|\mathbf{r}|/R$ e scrivere la differenza di percorso geometrico uscente, $\Delta L_{\text{out}} \equiv |P - \mathbf{r}_1| - |P - \mathbf{r}_2|$, in termini di $\mathbf{r}$ e $\mathbf{k}_f$, o equivalentemente $\mathbf{k}_f / k_f$.

**A.2** *(0,4 pt) * Usando il risultato di A.1 e tenendo conto della fase posizionata-dipendente dell'onda incidente a $\mathbf{r}_1$ e $\mathbf{r}_2$, si trova la differenza di fase tra i due contributi diffratti al rilevatore, espressa in termini di $\mathbf{q}$ e $\mathbf{r}$. La differenza di fase è definita come $\Delta\phi \equiv \phi_1 - \phi_2$, dove $\phi_1$ e $\phi_2$ sono le fasi dei contributi degli elettroni a $r_1$ e $r_2$.

**A.3 ** *(0,6 pt) * Esprimere l'ampiezza complessa totale dell'onda diffratta da questi due elettroni in termini di $\mathbf{q}$ e $\mathbf{r}$. Potreste ignorare qualsiasi fattore di fase comune, poiché non influisce sull'intensità. Supponiamo che l'ampiezza reale di un'onda diffratta da un singolo elettrone di punto sia una costante $f_0$, indipendente dalla posizione.

**A.4 ** *(0,4 pt) * Esprimere l'intensità delle onde diffratte da questi due elettroni in termini di $\mathbf{q}$ e $\mathbf{r}$.

### Parte B: Coerenza longitudinale finita (modello di salto di fase) (2,3 punti)

Considerate due elettroni point-like situati nelle posizioni $\mathbf{r}_1$ e $\mathbf{r}_2$, con $\mathbf{r} \equiv \mathbf{r}_2 - \mathbf{r}_1$. Un fascio di lunghezza d'onda $\lambda_0$ (così $k = 2\pi/\lambda_0$ e $\omega = 2\pi c/\lambda_0$) illumina gli elettroni e l'onda diffratta è osservata nel campo lontano lungo $\mathbf{k}_f$. Modelliamo il campo incidente come un'onda aereo con una fase casuale a seconda del tempo,

$$E_i(\mathbf{r}, t) = A \exp\!\big[i(\mathbf{k}_i \cdot \mathbf{r} - \omega t + \phi(t))\big],$$

in cui $\phi(t)$ è costante a pezzi e subisce salti di fase casuali a intervalli di tempo regolari di durata

$$t_0 \equiv \frac{L_0}{c},$$

con $L_0$ la lunghezza di coerenza longitudinale (dita). All'inizio di ogni intervallo di lunghezza $t_0$, $\phi(t)$ viene riimpostato su un nuovo valore indipendente uniformemente distribuito su $[0, 2\pi)$. $I_0$ indica l'intensità (in media temporale) al rilevatore che si ottiene da un singolo elettrone nella stessa geometria. In questo problema, il rilevatore si presume di misurare un'intensità media temporale. Cioè, non risolve i singoli salti di fase casuali. Invece, registra la media dell'intensità istantanea per un periodo molto più lungo dell'intervallo di salto di fase $t_0$: $\langle I \rangle_t \equiv \langle |E(t)|^2 \rangle_t$. Qui $\langle \cdots \rangle_t$ indica una media su molti intervalli di salto di fase.

**B.1** *(2,3 pt)* Usando il modello di salto di fase di cui sopra, derivare l'intensità totale media temporale $\langle I \rangle_t$ al rilevatore dai due elettroni. Il risultato finale deve essere scritto in termini di $I_0$, $\mathbf{q} \equiv \mathbf{k}_f - \mathbf{k}_i$, il vettore di separazione $\mathbf{r}$, la lunghezza d'onda $\lambda_0$ e la lunghezza di coerenza $L_0$. Supponiamo che il rilevatore abbia una media di tempo molto più lunga di $t_0$.

### Parte C: effetto particella non-punto (1,0 pts)

Un elettrone è spesso trattato come una classica particella di punto, ma in un modello più realistico la sua carica può essere considerata come distribuita su una regione spaziale finita. Considera due distribuzioni di carica idealizzate: (i) una carica punto ideale situata a $\mathbf{r} = 0$, la cui amplitudine di dispersione è $A_1(\mathbf{q}) = Q_0$, (ii) una distribuzione di carica gaussiana estesa

$$\rho_2(\mathbf{r}) = \rho_0 \exp\!\left(-\frac{r^2}{R_0^2}\right), \qquad r = |\mathbf{r}|.$$

Le costanti $Q_0$ e $\rho_0$ sono scelte in modo che la carica totale sia la stessa in entrambi i casi:

$$Q_0 = \int \rho_2(\mathbf{r})\, d^3r.$$

Qui $d^3r$ indica l'elemento volume nello spazio tridimensionale. In coordinate cartesiane, $d^3r = dx\,dy\,dz$ e $\int_{\mathbb{R}^3}$ si intendono integrazioni su tutto lo spazio. Identifiche utili (può essere utilizzata senza prova):

$$\int_0^\infty e^{-r^2/R_0^2}\, 4\pi r^2\, dr = \pi^{3/2} R_0^3, \qquad \int_{\mathbb{R}^3} e^{-\alpha r^2} e^{i\mathbf{k}\cdot\mathbf{r}}\, d^3r = \left(\frac{\pi}{\alpha}\right)^{3/2} \exp\!\left(-\frac{k^2}{4\alpha}\right), \quad \alpha > 0.$$

**C.1 ** *(0,4 pt) * Ottieni la relazione tra $Q_0$, $\rho_0$ e $R_0$.

**C.2** *(0,4 pt)* Valutare l'ampiezza

$$A_2(\mathbf{q}) \equiv \int_{\mathbb{R}^3} \rho_2(\mathbf{r})\, e^{i\mathbf{q}\cdot\mathbf{r}}\, d^3r$$

e confrontarlo con l'ampiezza di carica puntante $A_1(\mathbf{q}) = Q_0$.

**C.3 ** *(0,2 pt) * Estimare il rapporto delle intensità diffratte, $\dfrac{I_2}{I_1}$, per questi due casi idealizzati quando $q = \dfrac{2}{R_0}$.

### Parte D: Diffrazione da un film con morfologia non piatta di superficie (2.4 pts)

Immaginate che la superficie di un film (cioè i livelli atomici superiori) non sia perfettamente piatta, ma mostri rugosità superficiale. Un modello comune è quello di supporre che lo spessore del film locale (misurato in monolieri) segua una distribuzione gaussiana. Il numero locale di monolieri completati entro un'area di coerenza laterale del fascio deve essere indicato da $N$. Supponiamo che $N$ varia su tutta la superficie ed è normalmente distribuita con media $\bar{N}$ e deviazione standard $\sigma$ (entrambi in unità di monolivello):

$$P(N) = \frac{1}{\sqrt{2\pi}\,\sigma} \exp\!\left[-\frac{(N - \bar{N})^2}{2\sigma^2}\right].$$

(Per valutare le medie, si può trattare $N$ come una variabile continua.) $d$ deve essere l'intervallo tra strati atomici adiacenti (mono strati) e $q_z$ deve indicare la componente del vettore di dispersione $\mathbf{q} = \mathbf{k}_f - \mathbf{k}_i$ normale alla superficie piana del film, cioè $q_z = \mathbf{q} \cdot \hat{z}$. Per un numero intero di monolieri $N$, l'ampiezza di dispersione è

$$A_N(q_z) = \sum_{n=0}^{N-1} e^{i q_z n d} = \frac{1 - e^{i q_z N d}}{1 - e^{i q_z d}}.$$

Quando si fa una media sulla distribuzione di spessore di Gaussian, si tratta di $N$ come una variabile continua e si usa l'espressione di forma chiusa

$$A_N(q_z) \equiv \frac{1 - e^{i q_z N d}}{1 - e^{i q_z d}}$$

come estensione continua corrispondente. Supponiamo che l'intensità di diffrazione misurata sia ottenuta dall'ampiezza media coerente,

$$I(q_z) \equiv \big|\langle A(q_z) \rangle\big|^2, \qquad \langle A(q_z) \rangle = \int_{-\infty}^{\infty} P(N)\, A_N(q_z)\, dN.$$

**D.1 ** *(2,4 pt) * Calcolare i rapporti di intensità

$$\frac{I(q_z,\ \sigma = 0.4,\ \bar{N} = 5)}{I(q_z,\ \sigma = 0,\ \bar{N} = 5)}$$

at

$$q_z = \frac{\pi}{2d} \qquad \text{and} \qquad q_z = \frac{2\pi}{d},$$

rispettivamente. Se necessario, valutare il secondo caso prendendo il limite appropriato.

### Parte E: Diffrazione da un film con morfologia evoluta della superficie (2.3 pts)

Immaginate un film sottile con una semplice struttura cubica coltivata su un substrato in modalità strato per strato, cioè, ogni mono strato è completato prima che il prossimo mono strato cominciasse a crescere. Il $d$ deve essere l'intervallo tra strati atomici adiacenti (mono strati), e $q_z$ deve indicare la componente di $\mathbf{q} = \mathbf{k}_f - \mathbf{k}_i$ normale alla superficie piana del film, cioè $q_z = \mathbf{q} \cdot \hat{z}$. Mentre il film viene coltivato, il spessore del film cambia, così come l'intensità di diffrazione a $\mathbf{q} = \frac{\pi}{d}\hat{z}$. Il calcolo viene effettuato al trasferimento di impulso specificato fuori piano e tutti i contributi monolivello sono sommati in modo coerente.

Se il film inizia a crescere a $t = 0$ e il tempo necessario per completare un mono strato è $t_0$, ottenere il rapporto di intensità di diffrazione

$$\frac{I(t = 0.8\,t_0)}{I(t = 3.6\,t_0)}$$

misurata a $\mathbf{q} = \frac{\pi}{d}\hat{z}$. Supponiamo che durante ogni intervallo di crescita di uno strato, la copertura frazionaria dello strato superiore aumenta linearmente da 0 a 1, in modo che al tempo $t = (N + \theta)t_0$, ci siano $N$ monolieri completati e una copertura frazionaria $\theta$ del prossimo monoliero.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1XV2UMXsCnxfhiMpntZTu_5D_Ue9_e2yS/view)
**Topic:** [[Wave Optics]], [[Modern-Quantum Physics]]
**Metodi:** [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Superposition Principle (metodo)|Superposition Principle]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Electron (object)|Electron]], [[Photon (object)|Photon]]



<span class="atom-split" id="q03" data-atom="q03" data-title="APhO 2026 — Teorica — Quesito 3" data-tags="kg/prova,paese/Asia,comp/APhO,topic/magnetism,argomento/elettromagnetismo,difficolta/5,multidisciplina/multi,object/magnetic-dipole,object/nucleus,object/electron"></span>

<div class="qlang-switch" data-default="en"></div>



**Magnetic Resonance and External Fluctuation**

The origin of a material's magnetic property is the magnetic moment from the angular momentum of its microscopic constituent such as electrons and the nuclei. For some material the tiny magnetic moments are aligned along a particular direction to produce a net magnetic field. In other words, the material has non-zero magnetization. For different kinds of material the tiny magnetic moments are randomly oriented, but when the material is put in an external magnetic field, the tiny magnetic moments rotate around the direction of the external magnetic field and in average the material develops a nonzero magnetization. If we turn off the external magnetic field the magnetization of the material may gradually decrease until it returns to its original value. It is due to the interaction between the magnetic moments, or their interaction with other microscopic degrees of freedom such as lattice vibration. This process is called the relaxation, which will be considered below using classical mechanics models.

### Part A. Forced harmonic oscillator (3.6 pts)

We consider the problem of nuclear spin relaxation due to random fluctuation of other physical degrees of freedom such as lattice vibration or electron's magnetic dipole moments. In order to familiarize ourselves with a randomness in the solutions of a classical mechanics system, let us start with a forced harmonic oscillator of mass $m$ and angular frequency $\omega_0$. The energy of the oscillator changes because of the effect of a time-dependent external force.

$$m\frac{d^2 q(t)}{dt^2} + m\omega_0^2 q(t) = F(t) \tag{1}$$

where the external force is given by the following step-wise function.

$$F(t) = \begin{cases} 0, & t < 0 \\ +m f_0, & 0 \le t < T_0/2 \\ -m f_0, & T_0/2 \le t < T_0 \\ 0, & t \ge T_0 \end{cases}$$

Here $\omega_0 = 2\pi/T_0$ is the angular frequency of the oscillator $q(t)$. Suppose that the initial condition is given as $q(0) = A\sin\delta$, $\dot{q}(0) = A\omega_0 \cos\delta$. Before turning on the external force, energy is conserved and its value is $E_0 = \frac{m}{2}\omega_0^2 A^2$. Without losing generality we assume $-\pi \le \delta < \pi$.

**A.1** *(1.2 pt)* Find the position $q$ and the velocity $\dot{q} = \frac{dq}{dt}$ at $t = T_0$. Express them in terms of $A$, $\delta$, $f_0$, $\omega_0$.

**A.2** *(1.2 pt)* Consider the total mechanical energy $E(t) = \dfrac{m(\dot{q}^2 + \omega_0^2 q^2)}{2}$. Calculate the difference of $E(t)$ between $t = T_0$ and $t = 0$, due to the effect of the external force $F(t)$. In other words, calculate $\Delta E \equiv E(t \ge T_0) - E(t \le 0)$ and express it in terms of $A$, $\delta$, $f_0$, $\omega_0$.

**A.3** *(1.2 pt)* Suppose that $\delta$ is a random variable with a uniform distribution in the range of $-\pi \le \delta < \pi$. In other words, we have a large number of identical forced harmonic oscillators which all follow the same equation (1). Their initial conditions are given so that $A$ is the same, but $\delta$ is chosen randomly from $-\pi \le \delta < \pi$. Calculate the statistical average of the absorbed energy $\langle \Delta E \rangle$, and also the 2nd moment $\langle (\Delta E)^2 \rangle$.

### Part B: Precession of magnetic dipole moment and the use of rotating frame variables (6.4 pts)

The energy of a magnetic dipole moment under magnetic field $\vec{B}$ is given as

$$E = -\vec{\mu} \cdot \vec{B} = -\gamma \vec{S} \cdot \vec{B}$$

When we consider an infinitesimal rotation of the angular momentum $\vec{S}$ and equate the energy difference with the product of torque ($\vec{\tau}$) and angular displacement, we obtain the equation for $\vec{S}$.

$$\vec{\tau} = \frac{d\vec{S}}{dt} = \gamma \vec{S} \times \vec{B}$$

According to this equation, when $\vec{B}$ is constant the angular momentum $\vec{S}$ precesses around the direction of the magnetic field $\vec{B}$. This phenomenon is known as Larmor precession, and the frequency of the precession is given by $\gamma|\vec{B}|$ and in particular it is independent of the angle between $\vec{S}$ and $\vec{B}$.

![[APhO_2026_theory_Q3_p2_f1.png]]

**Irradiation of circularly polarized light**

Let us now consider turning on an oscillating magnetic field in xy-plane, in addition to a constant part along z-direction. The magnetic energy is then

$$E = -\omega_0 S_z - \omega_1 \cos(\omega_2 t) S_x - \omega_1 \sin(\omega_2 t) S_y \tag{2}$$

where $\omega_0, \omega_1$ are given by the relevant components of the magnetic field and $\gamma$, while $\omega_2$ is the frequency of the oscillating magnetic field. We assume $\omega_0, \omega_1, \omega_2$ are all positive. The equations for $\vec{S}$ are

$$\dot{S}_x = +\omega_0 S_y - \omega_1 \sin(\omega_2 t) S_z$$
$$\dot{S}_y = -\omega_0 S_x + \omega_1 \cos(\omega_2 t) S_z$$
$$\dot{S}_z = -\omega_1 \cos(\omega_2 t) S_y + \omega_1 \sin(\omega_2 t) S_x$$

It is convenient to write these equations in terms of $S_\pm \equiv S_x \pm i S_y$. We have

$$\dot{S}_+ = -i\omega_0 S_+ + i\omega_1 e^{+i\omega_2 t} S_z$$
$$\dot{S}_- = +i\omega_0 S_- - i\omega_1 e^{-i\omega_2 t} S_z$$
$$\dot{S}_z = \frac{i\omega_1}{2}\big(e^{-i\omega_2 t} S_+ - e^{+i\omega_2 t} S_-\big)$$

For the next step, let us introduce spin in rotating frame using $S_\pm \equiv e^{\pm i\omega_2 t}\Sigma_\pm$, $S_z \equiv \Sigma_z$. One can show that the equations for $\Sigma_x \equiv \frac{1}{2}(\Sigma_+ + \Sigma_-)$, $\Sigma_y \equiv \frac{i}{2}(\Sigma_- - \Sigma_+)$, and $\Sigma_z$ can be written as

$$\frac{d}{dt}\vec{\Sigma} = \vec{M} \times \vec{\Sigma}$$

where $\vec{\Sigma} = (\Sigma_x, \Sigma_y, \Sigma_z)$ and $\vec{M} = (M_x, M_y, M_z)$.

**B.1** *(1.5 pt)* Find the expressions for $M_x, M_y, M_z$ in terms of $\omega_0, \omega_1, \omega_2$.

The equations are simplified even further, if we consider a static rotation in xz-plane and define new variables $\Sigma_X, \Sigma_Y, \Sigma_Z$ as follows.

$$\Sigma_X = \cos\Theta\,\Sigma_x - \sin\Theta\,\Sigma_z$$
$$\Sigma_Y = \Sigma_y$$
$$\Sigma_Z = \sin\Theta\,\Sigma_x + \cos\Theta\,\Sigma_z$$

**B.2** *(0.9 pt)* Derive the equations of motion for $\Sigma_X, \Sigma_Y, \Sigma_Z$ and express them using $M_x, M_y, M_z$ and $\Theta$.

Then in terms of the new variables in doubly-rotating frame, the equations can be reduced to the following form,

$$\dot{\Sigma}_X = +\Omega\,\Sigma_Y$$
$$\dot{\Sigma}_Y = -\Omega\,\Sigma_X$$
$$\dot{\Sigma}_Z = 0$$

if $\Omega$ and $\tan\Theta$ are chosen appropriately.

**B.3** *(1.0 pt)* By combining the answers of B.1 and B.2, find the expressions for $\Omega$ and $\tan\Theta$ in terms of $\omega_0, \omega_1, \omega_2$.

Let us now consider a large number of spins with a statistical distribution of initial configurations: at $t = 0$, the average values satisfy $\langle S_x(0) \rangle = \langle S_y(0) \rangle = 0$ and $\langle S_z(0) \rangle > 0$. The spins all satisfy the same equation derived from Eq.(2).

**B.4** *(1.5 pt)* Calculate $\langle S_z(t) \rangle$.

**B.5** *(1.5 pt)* If $\langle S_z(t) \rangle = 0$ at odd multiples of $T_1$ (i.e. $t = T_1, 3T_1, 5T_1, \cdots$) and $\langle S_z(t) \rangle > 0$ otherwise, what is the value of $\omega_1 T_1$?

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/11uexakrtqQn-Mavu3OmrqUxD5Sndn4PP/view)
**Topic:** [[Magnetism]], [[Oscillations & Waves]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Statistical Averaging (metodo)|Statistical Averaging]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Magnetic Dipole (object)|Magnetic Dipole]], [[Nucleus (object)|Nucleus]], [[Electron (object)|Electron]]


<div class="qlang-split" data-lang="it"></div>

**Risonanza magnetica e fluttuazione esterna**

L'origine della proprietà magnetica di un materiale è il momento magnetico dal momento angolare del suo componente microscopico come gli elettroni e i nuclei. Per alcuni materiali i minuscoli momenti magnetici sono allineati lungo una particolare direzione per produrre un campo magnetico netto. In altre parole, il materiale ha una magnetizzazione non zero. Per diversi tipi di materiale i minuscoli momenti magnetici sono orientati in modo casuale, ma quando il materiale viene messo in un campo magnetico esterno, i minuscoli momenti magnetici ruotano intorno alla direzione del campo magnetico esterno e in media il materiale sviluppa una magnetizzazione non zero. Se spegniamo il campo magnetico esterno la magnetizzazione del materiale può diminuire gradualmente fino a quando non ritorna al suo valore originale. È dovuto all'interazione tra i momenti magnetici, o alla loro interazione con altri gradi microscopici di libertà come la vibrazione della rete. Questo processo è chiamato rilassamento, che verrà esaminato di seguito utilizzando modelli di meccanica classica.

### Parte A. Oscillatore armonico forzato (3,6 pts)

Consideramo il problema della rilassamento dello spin nucleare dovuto a fluttuazioni casuali di altri gradi fisici di libertà come la vibrazione della griglia o i momenti di dipolo magnetico dell'elettrone. Per familiarizzare con una randomità nelle soluzioni di un sistema di meccanica classica, iniziamo con un oscillatore armonico forzato di massa $m$ e frequenza angolare $\omega_0$. L'energia dell'oscillato cambia a causa dell'effetto di una forza esterna dipendente dal tempo.

$$m\frac{d^2 q(t)}{dt^2} + m\omega_0^2 q(t) = F(t) \tag{1}$$

quando la forza esterna è data dalla seguente funzione di passo.

$$F(t) = \begin{cases} 0, & t < 0 \\ +m f_0, & 0 \le t < T_0/2 \\ -m f_0, & T_0/2 \le t < T_0 \\ 0, & t \ge T_0 \end{cases}$$

Qui $\omega_0 = 2\pi/T_0$ è la frequenza angolare dell'oscilatore $q(t)$. Supponiamo che la condizione iniziale sia data come $q(0) = A\sin\delta$, $\dot{q}(0) = A\omega_0 \cos\delta$. Prima di accendere la forza esterna, l'energia viene conservata e il suo valore è $E_0 = \frac{m}{2}\omega_0^2 A^2$. Senza perdere la generalità, supponiamo $-\pi \le \delta < \pi$.

**A.1 ** *(1.2 pt) * Trova la posizione $q$ e la velocità $\dot{q} = \frac{dq}{dt}$ a $t = T_0$. Esprimere le informazioni in termini di $A$, $\delta$, $f_0$, $\omega_0$.

**A.2 ** *(1.2 pt) * Considera l'energia meccanica totale $E(t) = \dfrac{m(\dot{q}^2 + \omega_0^2 q^2)}{2}$. Calcolare la differenza di $E(t)$ tra $t = T_0$ e $t = 0$, a causa dell'effetto della forza esterna $F(t)$. In altre parole, calcolare $\Delta E \equiv E(t \ge T_0) - E(t \le 0)$ e esprimere in termini di $A$, $\delta$, $f_0$, $\omega_0$.

**A.3** *(1.2 pt) * Supponiamo che $\delta$ sia una variabile casuale con una distribuzione uniforme nell'intervallo di $-\pi \le \delta < \pi$. In altre parole, abbiamo un gran numero di oscillatori armonici forzati identici che seguono tutti la stessa equazione (1). Le loro condizioni iniziali sono indicate in modo che $A$ sia la stessa, ma $\delta$ è scelto a caso da $-\pi \le \delta < \pi$. Calcolare la media statistica dell'energia assorbita $\langle \Delta E \rangle$, nonché il secondo momento $\langle (\Delta E)^2 \rangle$.

### Parte B: Precessione del momento di dipolo magnetico e utilizzo di variabili di telaio rotante (6,4 pts)

L'energia di un momento di dipolo magnetico sotto campo magnetico $\vec{B}$ è data come

$$E = -\vec{\mu} \cdot \vec{B} = -\gamma \vec{S} \cdot \vec{B}$$

Quando consideriamo una rotazione infinitesimale del momento angolare $\vec{S}$ e eguagliamo la differenza di energia con il prodotto della coppia ($\vec{\tau}$) e dello spostamento angolare, otteniamo l'equazione per $\vec{S}$.

$$\vec{\tau} = \frac{d\vec{S}}{dt} = \gamma \vec{S} \times \vec{B}$$

Secondo questa equazione, quando $\vec{B}$ è costante, il momento angolare $\vec{S}$ si precede intorno alla direzione del campo magnetico $\vec{B}$. Questo fenomeno è conosciuto come la precessione di Larmor, e la frequenza della precessione è data da $\gamma|\vec{B}|$ e in particolare è indipendente dall'angolo tra $\vec{S}$ e $\vec{B}$.

![[APhO_2026_theory_Q3_p2_f1.png]]

**Radiamento di luce polarizzata circolare**

Consideriamo ora di attivare un campo magnetico oscillante in piano xy, oltre a una parte costante lungo la direzione z. L'energia magnetica è quindi

$$E = -\omega_0 S_z - \omega_1 \cos(\omega_2 t) S_x - \omega_1 \sin(\omega_2 t) S_y \tag{2}$$

in cui $\omega_0, \omega_1$ sono dati dalle componenti rilevanti del campo magnetico e $\gamma$, mentre $\omega_2$ è la frequenza del campo magnetico oscillante. Supponiamo che $\omega_0, \omega_1, \omega_2$ siano tutti positivi. Le equazioni per $\vec{S}$ sono:

$$\dot{S}_x = +\omega_0 S_y - \omega_1 \sin(\omega_2 t) S_z$$
$$\dot{S}_y = -\omega_0 S_x + \omega_1 \cos(\omega_2 t) S_z$$
$$\dot{S}_z = -\omega_1 \cos(\omega_2 t) S_y + \omega_1 \sin(\omega_2 t) S_x$$

È conveniente scrivere queste equazioni in termini di $S_\pm \equiv S_x \pm i S_y$. Abbiamo

$$\dot{S}_+ = -i\omega_0 S_+ + i\omega_1 e^{+i\omega_2 t} S_z$$
$$\dot{S}_- = +i\omega_0 S_- - i\omega_1 e^{-i\omega_2 t} S_z$$
$$\dot{S}_z = \frac{i\omega_1}{2}\big(e^{-i\omega_2 t} S_+ - e^{+i\omega_2 t} S_-\big)$$

Per il passo successivo, introduciamo lo spin in telaio rotante utilizzando $S_\pm \equiv e^{\pm i\omega_2 t}\Sigma_\pm$, $S_z \equiv \Sigma_z$. Si può dimostrare che le equazioni per $\Sigma_x \equiv \frac{1}{2}(\Sigma_+ + \Sigma_-)$, $\Sigma_y \equiv \frac{i}{2}(\Sigma_- - \Sigma_+)$ e $\Sigma_z$ possono essere scritte come

$$\frac{d}{dt}\vec{\Sigma} = \vec{M} \times \vec{\Sigma}$$

dove $\vec{\Sigma} = (\Sigma_x, \Sigma_y, \Sigma_z)$ e $\vec{M} = (M_x, M_y, M_z)$.

**B.1** *(1,5 pt)* Trova le espressioni per $M_x, M_y, M_z$ in termini di $\omega_0, \omega_1, \omega_2$.

Le equazioni sono semplificate ancora di più, se consideriamo una rotazione statica in piano xz e definiamo le nuove variabili $\Sigma_X, \Sigma_Y, \Sigma_Z$ come segue.

$$\Sigma_X = \cos\Theta\,\Sigma_x - \sin\Theta\,\Sigma_z$$
$$\Sigma_Y = \Sigma_y$$
$$\Sigma_Z = \sin\Theta\,\Sigma_x + \cos\Theta\,\Sigma_z$$

**B.2** *(0,9 pt)* Derivare le equazioni di movimento per $\Sigma_X, \Sigma_Y, \Sigma_Z$ e esprimerele usando $M_x, M_y, M_z$ e $\Theta$.

Poi in termini di nuove variabili in quadri a doppio rotazione, le equazioni possono essere ridotte alla seguente forma,

$$\dot{\Sigma}_X = +\Omega\,\Sigma_Y$$
$$\dot{\Sigma}_Y = -\Omega\,\Sigma_X$$
$$\dot{\Sigma}_Z = 0$$

se sono scelte appropriatamente $\Omega$ e $\tan\Theta$.

**B.3** *(1.0 pt)* Combinando le risposte di B.1 e B.2, si trovano le espressioni per $\Omega$ e $\tan\Theta$ in termini di $\omega_0, \omega_1, \omega_2$.

Consideriamo ora un gran numero di giri con una distribuzione statistica delle configurazioni iniziali: a $t = 0$, i valori medi soddisfano $\langle S_x(0) \rangle = \langle S_y(0) \rangle = 0$ e $\langle S_z(0) \rangle > 0$. Tutti i giri soddisfano la stessa equazione derivata da Eq.(2).

**B.4 ** *(1,5 pt) * Calcolare $\langle S_z(t) \rangle$.

**B.5 ** *(1,5 pt) * Se $\langle S_z(t) \rangle = 0$ a multipli dispari di $T_1$ (cioè $t = T_1, 3T_1, 5T_1, \cdots$) and $\langle S_z(t) \rangle > 0$ otherwise, what is the value of $\omega_1 T_1$?

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/11uexakrtqQn-Mavu3OmrqUxD5Sndn4PP/view)
**Topic:** [[Magnetism]], [[Oscillations & Waves]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Statistical Averaging (metodo)|Statistical Averaging]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Magnetic Dipole (object)|Magnetic Dipole]], [[Nucleus (object)|Nucleus]], [[Electron (object)|Electron]]
