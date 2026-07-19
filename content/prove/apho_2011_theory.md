---
title: APhO 2011 — Teorica
tipo: prova
tags:
  - kg/prova
  - paese/asia
  - comp/APhO
---
<div class="atom-reader" data-prova="apho_2011_theory"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="APhO 2011 — Teorica — Quesito 1" data-tags="kg/prova,paese/Asia,comp/APhO,topic/special-relativity,argomento/fisica-moderna,difficolta/5,multidisciplina/multi,object/coil,object/point-charge,object/magnet"></span>

<div class="qlang-switch" data-default="en"></div>



**The Shockley-James Paradox**

In the year 1905, Albert Einstein proposed the special theory of relativity to resolve the inconsistency between Newton's mechanics and Maxwell's electromagnetism. Proper understanding of the theory led to the resolution of many apparent paradoxes. At the time, the discussion focused mostly on the propagation of electromagnetic waves.

In this question, we solve a paradox of a different type. For a fairly simple system of charges proposed by W. Shockley and R. P. James in 1967, understanding the conservation of linear momentum requires careful relativistic analysis. If a point charge is located near a magnet of changing magnetization, there's an induced electric force on the charge, but no apparent reaction on the magnet. The process may be slow enough that any electromagnetic radiation (and any momentum carried away by it) is negligible. Thus, apparently we get a cannon without recoil.

In our analysis of this system, we will demonstrate that in relativistic mechanics, a composite body may hold a non-zero mechanical momentum while remaining stationary.

### Part I: Understanding the impulse on the point charge (3.3 points)

Consider a circular current loop of radius $r$ carrying a current $I_1$, and a second, larger current loop of radius $R \gg r$, concentric with the first and lying in the same plane.

**a. (1 pt.)** A current $I_2$ passing through loop 2 (the larger loop) generates a magnetic flux $\Phi_{B1}$ through loop 1. Find the ratio $M_{21} = \Phi_{B1}/I_2$. It is called the mutual inductance coefficient.

**b. (0.8 pts.)** Given that $M_{12} = \Phi_{B2}/I_1 = M_{21}$, obtain the total induced EMF $\varepsilon_2$ in the larger loop as a result of a variation $\dot{I}_1 = dI_1/dt$ of the current in the smaller loop. Neglect the current in the larger loop. *Hint: the induced EMF is equal to the rate of change of the magnetic flux through the loop.*

**c. (0.5 pts.)** The EMF you found in part (b) is due to the tangential component of an induced electric field. Obtain an expression for the tangential electric field $E$ at radius $R$ as a function of the rate of change $\dot{I}_1$ of the current.

![[APhO_2011_theory_Q1_p1_f1.png]]
*Figure 1: A circular current loop and a point charge $Q$.*

We now remove the larger current loop, and instead put a massive point charge $Q$ at radius $R$, as shown in Figure 1. It may be assumed that the charge moves very little during the relevant time periods.

**d. (1 pt.)** Find the total tangential impulse $\Delta p$ received by the point charge as the current in the small loop changes from an initial value $I_1 = I$ to the final value $I_1 = 0$.

### Part II: Understanding the recoil of the current loop (4.4 points)

We will now understand the origin of the recoil of the loop, using a loop of different geometry.

**e. (1.1 pts.)** Consider a hollow tube with walls made of a neutral insulating material of length $l$ and cross section $A$ carrying an electric current $I$. The current is due to charged particles of rest mass $m$ and charge $q$ distributed homogenously inside the tube with number density $n$. Assume that the charged particles are all moving along the tube with the same velocity. Find the total momentum $p$ of the charged particles in the tube, taking Special Relativity effects into account.

**f. (3.3 pts.)** Consider a square current loop with side $l$. At a distance $R \gg l$ from the loop, there is a point charge $Q$; see Figure 2. The loop carries current $I$. We will model the current loop as a neutral tube, as in part (e). The charge carriers can move freely along the loop, colliding elastically with the walls and making elastic right turns at the corners. Neglect all interactions among the charge carriers. Assume also that all the charge carriers at a given section along the tube always move with the same velocity. Assume that the loop is heavy and that its motion can be neglected. Calculate the total linear momentum $p_{hid}$ of the charge carriers in the loop. It is called "hidden momentum".

![[APhO_2011_theory_Q1_p2_f2.png]]
*Figure 2: A square current loop and a point charge $Q$.*

When the current stops, this linear momentum is transferred to the loop, and it gets an impulse equal to minus the impulse received by the point charge $Q$. This is the missing recoil that we were looking for (note that in the initial state there is also momentum in the electromagnetic field; this is important for conservation of the total momentum of the entire system).

### Part III: Summarizing the results (2.3 points)

**g. (0.8 pts.)** Current loops are often characterized by their magnetic moment $\mu = IS$, where $I$ is the current and $S$ is the loop's area. Express the answer to part (d) in terms of $\mu$, $r$, $R$ and $Q$. Likewise, express the answer to part (f) in terms of $\mu$, $l$, $R$ and $Q$. Note that the electric and magnetic constants are related by:

$$\frac{4\pi k}{\mu_0} = \frac{1}{\varepsilon_0 \mu_0} = c^2$$

where $c$ is the speed of light.

**h. (1.5 pts.)** In a more realistic model, the current loop is a conducting wire, and the field of the point charge $Q$ does not penetrate into the conductor. We assume that the current is still conducted by charge carriers inside the wire. Decide whether each of the following statements is true or false, and circle the correct option in the Answer Form. Note: You may leave a statement undecided, but if you decide incorrectly, you will not get credit at all for part (h).

A. (0.5 pts.) The linear momentum of the current loop is zero.

B. (0.5 pts.) As the total current in the loop changes from $I$ to zero, the charge carriers decelerate, causing induced currents in the wire's conducting material. Because of these induced currents, the point charge $Q$ will not get a net impulse.

C. (0.5 pts.) The surface charges on the wire, induced by the presence of the external charge, will experience an electric force as the current changes from $I$ to zero. This way, the loop will get the same impulse as found in part (f).

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1wxiOZRCwnQ1oFR7D3FWnKr5G326R3iPv/view)

**Topic:** [[Special Relativity]], [[Electromagnetic Induction]], [[Magnetism]]
**Metodi:** [[Relativistic Energy-Momentum (metodo)|Relativistic Energy-Momentum]], [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Coil (object)|Coil]], [[Point Charge (object)|Point Charge]], [[Magnet (object)|Magnet]]


<div class="qlang-split" data-lang="it"></div>

Il Paradosso Shockley-James

Nell'anno 1905, Albert Einstein propose la teoria speciale della relatività per risolvere l'incoerenza tra la meccanica di Newton e l'elettromagnetismo di Maxwell. Una corretta comprensione della teoria ha portato alla risoluzione di molti apparenti paradossi. All'epoca, la discussione si concentrava principalmente sulla propagazione delle onde elettromagnetiche.

In questa domanda, risolviamo un paradosso di un altro tipo. Per un sistema di tariffe piuttosto semplice proposto da W. Shockley e R. P. James nel 1967, per capire la conservazione dell'impulso lineare è necessaria una attenta analisi relativistica. Se una carica puntaria si trova vicino a un magnete di mutazione di magnetizzazione, c'è una forza elettrica indotta sulla carica, ma nessuna apparente reazione sul magnete. Il processo può essere abbastanza lento da rendersi trascurabile qualsiasi radiazione elettromagnetica (e qualsiasi impulso che essa trasporta). Quindi, a quanto pare, abbiamo un cannone senza ritiro.

Nella nostra analisi di questo sistema, dimostreremo che nella meccanica relativistica, un corpo composto può mantenere un impulso meccanico non zero mentre rimane fermo.

### Parte I: Comprendere l'impulso sulla carica di punto (3,3 punti)

Considerate un ciclo di corrente circolare di raggio $r$ con corrente $I_1$ e un secondo ciclo di corrente più grande di raggio $R \gg r$, concentrico con il primo e situato nello stesso piano.

**a. (1 pt.)** Una corrente $I_2$ che passa attraverso il ciclo 2 (il ciclo più grande) genera un flusso magnetico $\Phi_{B1}$ attraverso il ciclo 1. Trova il rapporto $M_{21} = \Phi_{B1}/I_2$. Si chiama coefficiente di induzione reciproca.

**b. (0,8 pts.) ** Dato che $M_{12} = \Phi_{B2}/I_1 = M_{21}$, ottenere la FEM totale indotta $\varepsilon_2$ nel ciclo più grande a seguito di una variazione $\dot{I}_1 = dI_1/dt$ della corrente nel ciclo più piccolo. Lascia perdere la corrente nel circuito più grande. *Signal: la FEM indotta è uguale al tasso di variazione del flusso magnetico attraverso il ciclo.*

**c. (0,5 pts.) ** La FEM che hai trovato nella parte (b) è dovuta alla componente tangenziale di un campo elettrico indotto. Ottenere un'espressione per il campo elettrico tangenziale $E$ al raggio $R$ come funzione del tasso di variazione $\dot{I}_1$ della corrente.

![[APhO_2011_theory_Q1_p1_f1.png]]
*Figura 1: Un circuito di corrente circolare e una carica di punto $Q$.*

Ora rimuoviamo il circuito corrente più grande, e invece mettiamo una carica di punto massiccia $Q$ al raggio $R$, come mostrato nella Figura 1. Si può presumere che l'imposta si muova molto poco durante i periodi di tempo pertinenti.

**d. (1 pt.)** Trova l'impulso tangenziale totale $\Delta p$ ricevuto dalla carica di punto in quanto la corrente nel piccolo ciclo cambia da un valore iniziale $I_1 = I$ al valore finale $I_1 = 0$.

### Parte II: Comprendere il retrocesso del circuito corrente (4.4 punti)

Ora capiremo l'origine del retrocesso del ciclo, utilizzando un ciclo di geometria diversa.

**e. (1.1 pts.)** Considera un tubo vuoto con pareti realizzate in materiale isolante neutro di lunghezza $l$ e sezione trasversale $A$ con corrente elettrica $I$. La corrente è dovuta a particelle cariche di massa di riposo $m$ e carica $q$ distribuite in modo omogeneo all'interno del tubo con densità di numero $n$. Supponiamo che le particelle cariche si muovano tutte lungo il tubo con la stessa velocità. Trova il momento totale $p$ delle particelle cariche nel tubo, tenendo conto degli effetti di Relatività Speciale.

**f. (3.3 punti) ** Considera un ciclo di corrente quadrato con lato $l$. A una distanza $R \gg l$ dal ciclo, vi è una carica di punto $Q$; vedere figura 2. Il circuito porta corrente $I$. Modelleremo il circuito corrente come tubo neutro, come nella parte (e). I portatori di carica possono muoversi liberamente lungo il ciclo, collidendo elasticamente con le pareti e facendo elasticamente le curve a destra negli angoli. Ignorare tutte le interazioni tra i portatori di carica. Supponiamo anche che tutti i portatori di carica in una determinata sezione lungo il tubo si muovano sempre con la stessa velocità. Supponiamo che il circuito sia pesante e che il suo movimento possa essere trascurato. Calcolare il momento lineare totale $p_{hid}$ dei portatori di carica nel circuito. Si chiama "momento nascosto".

![[APhO_2011_theory_Q1_p2_f2.png]]
*Figura 2: Un ciclo di corrente quadrato e una carica di punto $Q$.*

Quando la corrente si ferma, questo momento lineare viene trasferito nel loop, e ottiene un impulso uguale a meno l'impulso ricevuto dalla carica di punto $Q$. Questo è il ritiro mancante che stavamo cercando (nota che nello stato iniziale c'è anche slancio nel campo elettromagnetico; questo è importante per la conservazione del slancio totale dell'intero sistema).

### Parte III: Riassunto dei risultati (2,3 punti)

**g. (0.8 pts.) ** I circuiti di corrente sono spesso caratterizzati dal loro momento magnetico $\mu = IS$, dove $I$ è la corrente e $S$ è l'area del circuito. Esprimere la risposta alla parte d) in termini di $\mu$, $r$, $R$ e $Q$. Allo stesso modo, esprimere la risposta alla parte (f) in termini di $\mu$, $l$, $R$ e $Q$. Si noti che le costanti elettriche e magnetiche sono correlate da:

$$\frac{4\pi k}{\mu_0} = \frac{1}{\varepsilon_0 \mu_0} = c^2$$

dove $c$ è la velocità della luce.

**h. (1.5 pts.) ** In un modello più realistico, il circuito corrente è un filo conduttore e il campo della carica puntaria $Q$ non penetra nel conduttore. Supponiamo che la corrente sia ancora condotta da portatori di carica all'interno del filo. Decidi se ciascuno dei seguenti affermazioni è vero o falso e circolare l'opzione corretta nel modulo di risposta. Nota: Potete lasciare una dichiarazione indecisa, ma se decidete erroneamente, non riceverete alcun merito per la parte (h).

A. (0,5 punti) La dinamica lineare del loop corrente è zero.

B. (0,5 pts) Quando la corrente totale del circuito cambia da $I$ a zero, i portatori di carica rallentano, causando correnti indotte nel materiale conduttore del filo. A causa di queste correnti indotte, la carica puntologica $Q$ non riceverà un impulso netto.

C. (0,5 pts) Le cariche superficiali sul filo, indotte dalla presenza della carica esterna, sperimenteranno una forza elettrica quando la corrente cambia da $I$ a zero. In questo modo, il ciclo otterrà lo stesso impulso che si trova nella parte (f).

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1wxiOZRCwnQ1oFR7D3FWnKr5G326R3iPv/view)

**Topic:** [[Special Relativity]], [[Electromagnetic Induction]], [[Magnetism]]
**Metodi:** [[Relativistic Energy-Momentum (metodo)|Relativistic Energy-Momentum]], [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Coil (object)|Coil]], [[Point Charge (object)|Point Charge]], [[Magnet (object)|Magnet]]



<span class="atom-split" id="q02" data-atom="q02" data-title="APhO 2011 — Teorica — Quesito 2" data-tags="kg/prova,paese/Asia,comp/APhO,topic/oscillations-and-waves,argomento/onde-e-oscillazioni,difficolta/5,multidisciplina/multi,object/spring,object/block,object/cylinder"></span>

<div class="qlang-switch" data-default="en"></div>



**Creaking Door**

The phenomenon of creaking is very common, and can be found in doors, closets, chalk squeaking on a blackboard, playing a violin, new shoes, car brakes and other systems from everyday life. Here in Israel, a similar phenomenon causes violent earthquakes with a period of several decades. These originate in the Dead Sea rift, located right above the deepest known break in the earth's crust.

The physical mechanism for creaking is based on elasticity combined with the difference between the static and the kinetic friction coefficients. In this question, we will study this mechanism and its application to the case of an opening door.

### Part I: General model (7.5 points)

Consider the following system (see Figure 1):

A box with mass $m$ is attached to a long ideal spring with spring constant $k$, whose other end is driven at a constant velocity $u$. The static and the kinetic friction coefficients between the box and the floor are given respectively by $\mu_s$ and $\mu_k$, where $\mu_k < \mu_s$.

We would like to understand why this setup supports two different forms of motion:

1. The friction is always kinetic. This is known as a pure slip mode.
2. Kinetic and static friction alternate. This is known as a stick-slip mode. Stick-slip motion is the source of the creaking sound commonly encountered.

**a. (1 pt.)** Consider the case where at the initial time $t = 0$, the box slides on the floor with velocity $v_0$, and the spring's tension exactly balances the kinetic friction. Assume $0 < v_0 < u$. The **spring's elongation** $x$ will oscillate as a function of $t$.

&nbsp;&nbsp;&nbsp;&nbsp;**a1. (0.6 points)** Find the period $T_0$ and the amplitude $A$ of these oscillations.

&nbsp;&nbsp;&nbsp;&nbsp;**a2. (0.4 points)** Sketch a qualitative graph of the spring's elongation $x(t)$ for $0 < t < 3T_0$.

**b. (1.2 pts.)** Now, consider the case where at $t = 0$ the box is at rest, while the initial spring elongation $x$ is the same as in part (a). Sketch a qualitative graph of the velocity $v(t)$ of the box with respect to the floor for $0 < t < 3T_0$, where $T_0$ is the (new) period of the oscillations $v(t)$. Motion to the right corresponds to a positive sign of $v$. Indicate approximately on your graph the horizontal line $v = u$.

**c. (0.5 pts.)** For the initial conditions of part (b), find the time-averaged value $\bar{x}$ of the spring's elongation after a sufficiently long time has passed.

![[APhO_2011_theory_Q2_p1_f1.png]]
*Figure 1: A general model for creaking*

**d. (2.4 pts.)** For the conditions of part (b), find the period $T$ of the oscillations $x(t)$.

Generically, stick-slip motion stops at high driving velocities $u$. We will now discuss one of the possible mechanisms behind this effect.

**e. (2.4 pts.)** Suppose that during each period $T$, a small amount of energy is dissipated into heat in the spring, via an additional mechanism. Let $\eta = |\Delta A/A|$ be the fractional amplitude loss per period due to dissipation in pure-slip motion. For $\eta \ll 1$, find the critical driving velocity $u_c$ above which periodic stick-slip becomes impossible. *The results of part (e) are not required for part II.*

### Part II: Application to creaking door (2.5 points)

A door hinge is a hollow, open-ended metal cylinder with radius $r$, height $h$ and thickness $\Delta r$. The lower end of the cylinder lies on a metal base attached to the wall (the area of contact is a ring of radius $r$); see Figure 2. The static and the kinetic friction coefficients between the cylinder and its base are $\mu_s$ and $\mu_k$ respectively, with $\mu_k < \mu_s$. The upper end of the cylinder is attached to the door, which can be regarded as perfectly rigid. A typical door hangs on two or three such hinges, but its weight is concentrated on only one of them — this is the hinge that will creak. The cylinder of that hinge presses down on its metal base with the weight of the entire door, whose mass is $M$.

![[APhO_2011_theory_Q2_p2_f2.png]]
*Figure 2: Schematic drawing of a door*

![[APhO_2011_theory_Q2_p2_f3.png]]
*Figure 3: The twisted hinge cylinder*

The cylinder is not a perfectly rigid body — it can twist tangentially without changing its overall form, so that vertical line segments become tilted with a small angle $\alpha$; see Figure 3. The elastic force on a small area element $dS$ of the base due to this deformation is given by:

$$dF = G\alpha\,dS,$$

where $G$ is a material property known as the shear modulus. Use the values $r = 5\,\text{mm}$, $h = 3\,\text{cm}$, $\Delta r = 1\,\text{mm}$, $\mu_s = 0.75$, $\mu_k = 0.55$, $G = 8 \cdot 10^{10}\,\text{Pa}$, $M = 30\,\text{kg}$, $g = 9.8\,\text{m/s}^2$. You may use the approximation $\Delta r \ll r$.

**f. (1 pt.)** We start rotating the door very slowly from equilibrium (zero torque). For small rotation angles, obtain an expression for the torsion coefficient $\kappa = \tau/\theta$, where $\tau$ is the torque which must be applied to rotate the door by an angle $\theta$.

**g. (1.5 pts.)** At very low angular velocity, when a transition from stick to slip occurs, a sound pulse is emitted. Find the angular velocity $\Omega$ of the door for which the frequency of these pulses enters the audible range at $f = 20\,\text{Hz}$. Assume that the frequency $f_0$ of pure-slip oscillations in the hinge is much higher: $f_0 \gg f$. Provide an expression and a numerical result.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1VtUXLVTOrt6D28o5_b4EAg6VmqtjHRe9/view)

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]], [[Elasticity & Materials]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Hooke's Law (metodo)|Hooke's Law]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Spring (object)|Spring]], [[Block (object)|Block]], [[Cylinder (object)|Cylinder]]


<div class="qlang-split" data-lang="it"></div>

** Porta a crepe **

Il fenomeno del crepitto è molto comune, e può essere trovato in porte, armadi, grido di gesso su una lavagna, suonare il violino, scarpe nuove, freni auto e altri sistemi della vita quotidiana. Qui in Israele, un fenomeno simile provoca violenti terremoti che durano diversi decenni. Queste si originano nella spaccatura del Mar Morto, che si trova proprio sopra la più profonda frattura conosciuta nella crosta terrestre.

Il meccanismo fisico per il creccaggio si basa sull'elasticità combinata con la differenza tra i coefficienti di attrito statico e cinetico. In questa domanda, esamineremo questo meccanismo e la sua applicazione al caso di una porta aperta.

### Parte I: Modello generale (7,5 punti)

Considerate il seguente sistema (vedi figura 1):

Una scatola con massa $m$ è attaccata a una molla ideale lunga con costante molla $k$, la cui altra estremità è guidata a velocità costante $u$. I coefficienti di attrito statico e cinetico tra la scatola e il pavimento sono indicati rispettivamente da $\mu_s$ e $\mu_k$, dove $\mu_k < \mu_s$.

Vorremmo capire perché questa configurazione supporta due forme di movimento diverse:

1. La frizione è sempre cinetica. Questo è noto come modalità di scivolamento puro.
2. Friczione cinetica e statica alternano. Questo è noto come modalità stick-slip. Il movimento di scivolamento è la fonte del grido che si verifica comunemente.

**a. (1 pt.)** Considerate il caso in cui al momento iniziale $t = 0$ la scatola scivola sul pavimento con velocità $v_0$ e la tensione della molla bilancia esattamente la frizione cinetica. Supponiamo $0 < v_0 < u$. L'allungamento della sorgente **** $x$ oscilla come funzione di $t$.

&nbsp;&nbsp;&nbsp;&nbsp;**a1. (0,6 punti) ** Trova il periodo $T_0$ e l'ampiezza $A$ di queste oscillazioni.

Il valore di un'impresa è pari a quello di un'impresa. (0,4 punti) ** Segnare un grafico qualitativo dell'allungamento della molla $x(t)$ per $0 < t < 3T_0$.

**b. (1.2 pts.)** Ora, considera il caso in cui alla $t = 0$ la scatola è a riposo, mentre l'allungamento iniziale della primavera $x$ è lo stesso della parte (a). Segnare un grafico qualitativo della velocità $v(t)$ della scatola rispetto al pavimento per $0 < t < 3T_0$, dove $T_0$ è il (nuovo) periodo delle oscillazioni $v(t)$. Il movimento a destra corrisponde a un segno positivo di $v$. Indicare sulla tua grafica la linea orizzontale $v = u$.

**c. (0,5 pts.)** Per le condizioni iniziali di cui alla parte (b), si trova il valore medio temporale $\bar{x}$ dell'allungamento della molla dopo un tempo sufficientemente lungo.

![[APhO_2011_theory_Q2_p1_f1.png]]
*Figura 1: Modello generale per la crepa*

**d. (2,4 punti) ** Per le condizioni della parte (b), trovare il periodo $T$ delle oscillazioni $x(t)$.

Generalmente, il movimento di stick-slip si ferma ad alte velocità di guida $u$. Ora parleremo di uno dei possibili meccanismi che hanno causato questo effetto.

**e. (2,4 pts.) ** Supponiamo che durante ogni periodo $T$, una piccola quantità di energia venga dissipata in calore in primavera, tramite un meccanismo aggiuntivo. Il valore $\eta = |\Delta A/A|$ deve essere la perdita di amplitudine frazionaria per periodo dovuta alla dissipazione in movimento di scivolamento puro. Per $\eta \ll 1$, trovare la velocità di guida critica $u_c$ al di sopra della quale il scivolamento periodico diventa impossibile. *I risultati della parte (e) non sono necessari per la parte II.*

### Parte II: Applicazione alla porta a craccaggio (2,5 punti)

Una cerniera di porta è un cilindro di metallo a bordo aperto vuoto con raggio $r$, altezza $h$ e spessore $\Delta r$. L'estremità inferiore del cilindro si trova su una base metallica attaccata alla parete (la zona di contatto è un anello di raggio $r$); vedere figura 2. I coefficienti di attrito statico e cinetico tra il cilindro e la sua base sono $\mu_s$ e $\mu_k$ rispettivamente, con $\mu_k < \mu_s$. L'estremità superiore del cilindro è attaccata alla porta, che può essere considerata perfettamente rigida. Una tipicamente porta appesa a due o tre cerniere, ma il suo peso è concentrato su una sola di esse. Il cilindro di quella cerniera si premesse sulla sua base metallica con il peso di tutta la porta, la cui massa è $M$.

![[APhO_2011_theory_Q2_p2_f2.png]]
*Figura 2: Disegno schematico di una porta*

![[APhO_2011_theory_Q2_p2_f3.png]]
*Figura 3: Il cilindro di cerniera torso*

Il cilindro non è un corpo perfettamente rigido  può torcersi tangenzalmente senza cambiare la sua forma complessiva, in modo che i segmenti della linea verticale si inclinino con un angolo piccolo $\alpha$; vedere figura 3. La forza elastica su un elemento di superficie piccola $dS$ della base a causa di questa deformazione è data da:

$$dF = G\alpha\,dS,$$

in cui $G$ è una proprietà materiale nota come modulo di taglio. Utilizzare i valori $r = 5\,\text{mm}$, $h = 3\,\text{cm}$, $\Delta r = 1\,\text{mm}$, $\mu_s = 0.75$, $\mu_k = 0.55$, $G = 8 \cdot 10^{10}\,\text{Pa}$, $M = 30\,\text{kg}$, $g = 9.8\,\text{m/s}^2$. È possibile utilizzare l' approssimazione $\Delta r \ll r$.

**f. (1 pt.)** Cominciamo a ruotare la porta molto lentamente dall'equilibrio (torno zero). Per gli angoli di rotazione piccoli, si ottiene un'espressione per il coefficiente di torsione $\kappa = \tau/\theta$, dove $\tau$ è la coppia che deve essere applicata per ruotare la porta con un angolo $\theta$.

**g. (1,5 pts) ** A velocità angolare molto bassa, quando si verifica una transizione da bastone a scivolo, viene emesso un impulso sonoro. Trova la velocità angolare $\Omega$ della porta per la quale la frequenza di questi impulsi entra nell'intervallo udibile a $f = 20\,\text{Hz}$. Supponiamo che la frequenza $f_0$ delle oscillazioni di scivolamento puro nella cerniera sia molto superiore: $f_0 \gg f$. Fornisci un'espressione e un risultato numerico.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1VtUXLVTOrt6D28o5_b4EAg6VmqtjHRe9/view)

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]], [[Elasticity & Materials]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Hooke's Law (metodo)|Hooke's Law]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Spring (object)|Spring]], [[Block (object)|Block]], [[Cylinder (object)|Cylinder]]



<span class="atom-split" id="q03" data-atom="q03" data-title="APhO 2011 — Teorica — Quesito 3" data-tags="kg/prova,paese/Asia,comp/APhO,topic/elasticity-and-materials,argomento/meccanica,difficolta/5,multidisciplina/multi,object/cylinder,object/gas"></span>

<div class="qlang-switch" data-default="en"></div>



**Birthday Balloon**

The picture shows a long rubber balloon, the kind that is popular at birthday parties. A partially inflated balloon usually splits into two domains of different radii. In this question, we consider a simplified model to help us understand this phenomenon. Consider a balloon with the shape of a long homogeneous cylinder (except for the ends), with a mouthpiece through which the balloon can be inflated. All processes will be considered isothermal at room temperature. At all times, the pressure $P$ inside the balloon exceeds the atmospheric pressure $P_0$ by a small fraction, so the air may be treated as an incompressible fluid. Gravity and the balloon's weight may also be neglected. The inflation is slow and quasistatic. In parts (a)-(d), the balloon is inflated uniformly throughout its length. We denote by $r_0$ and $L_0$ the radius and length of the balloon before it was inflated.

![[APhO_2011_theory_Q3_p1_f1.png]]
*Figure 1: A partially inflated birthday balloon.*

**a. (1.8 pts.)** The balloon is held by the mouthpiece, while its other parts hang freely. Find the ratio $\sigma_L/\sigma_t$ between the longitudinal surface tension $\sigma_L$ (in the direction parallel to the balloon's axis) and the transverse surface tension $\sigma_t$ (in the direction tangent to the balloon's circular cross-section).

The surface tension of a rubber film is the force that adjacent parts exert on each other, per unit length of the boundary.

Hooke's Law is a linear approximation of real-world elasticity for small tensions. Assume that the balloon's length remains constant at $L_0$, while the surface tension $\sigma_t$ depends linearly on the inflation ratio $r/r_0$:

$$\sigma_t = k\left(\frac{r}{r_0} - 1\right) \tag{1}$$

**b. (1 pt.)** With these assumptions, obtain an expression for the dependence of the pressure $P$ inside the balloon on the balloon's volume $V$. Sketch a plot of $P - P_0$ as a function of $V$. What is the maximal inflation pressure $P_{max}$ resulting from Hooke's elasticity approximation?

In reality, because the inflation ratio $r/r_0$ is large (in Figure 1, typical values of about 5 can be observed), one must consider non-linear behavior of the rubber and changes in the balloon's length. These effects allow higher inflation pressures than predicted by part (b). In a typical balloon, the graph of $\sigma_t(r)$ is composed of three pieces:

1. For small inflation ratios, $\sigma_t(r)$ grows in a Hooke-like manner.
2. At $r - r_0 \sim r_0$, the balloon's length $L$ begins to increase, and $\sigma_t(r)$ reaches a long plateau where it grows very slowly.
3. At some large inflation ratio, the rubber starts strongly resisting any further stretch, which leads to a sharp rise in $\sigma_t(r)$.

This behavior is depicted in Figure 2.

![[APhO_2011_theory_Q3_p2_f2.png]]
*Figure 2: $\sigma_t(r)$ for a realistic party balloon.*

**c. (1.3 pts.)** Sketch a qualitative plot of the pressure difference $P - P_0$ as a function of $V$ for a uniformly inflated balloon that behaves according to Figure 2. Indicate any local extremum points on your plot. Indicate also the points corresponding to $r = 1\,\text{cm}$ and $r = 2.5\,\text{cm}$. Find the values of $P - P_0$ at these two points with 10% accuracy.

![[APhO_2011_theory_Q3_p2_f3.png]]
*Figure 3: A plot of equation (2).*

To explore the consequences of the behavior you found in part (c), we approximate $P(V)$ for a uniformly inflated balloon with a cubic function:

$$P - P_0 = a\big((V - u)^3 - b(V - u) + c\big) \tag{2}$$

where $a$, $b$, $c$ and $u$ are positive constants. Assume that the volume $V$ is larger than the balloon's uninflated volume $V_0$, and $c$ is large enough so that the function (2) is positive in the entire physical range $V > V_0$. See Figure (3).

The balloon is attached to a large air reservoir maintained at a controllable pressure $P$. It may happen that some values of $P$ are consistent with more than one value of the volume $V$. If the balloon suffers occasional perturbations (such as local stretching by external forces) while held at such inflation pressure, it may jump to a state of different volume. This will happen when it becomes energetically favorable for the entire system, consisting of the balloon, the atmosphere and the machinery maintaining the pressure $P$. If the pressure is slowly increased from $P_0$, and sufficient perturbations exist at every step, this explosive volume jump will happen at a certain pressure $P_c$ where the energy required to move between the two states is zero. Above this pressure, going from the smaller volume to the larger volume branch releases energy, and vice versa. This type of discontinuity is often found in nature, and is sometimes referred to as a "phase transition".

**d. (2.3 pts.)** By considering equation (2), obtain the value of $P_c$, the volume $V_1$ of the balloon before the jump, and the volume $V_2$ after the jump. Express your answers using $a$, $b$, $c$ and $u$.

A more realistic inflating agent, such as a birthday boy, is unable to supply enough air for the instantaneous volume change described above. Instead, air is pumped gradually into the balloon, effectively controlling the balloon's volume rather than the pressure. In this case, a new type of behavior becomes possible. If it helps to minimize the total energy of the system, the balloon will split (given sufficient perturbations) into two cylindrical domains of different radii, whose lengths will gradually change. The splitting boundary itself requires energy, which you may neglect. We shall also neglect the length of the boundary layer (these assumptions are valid for a very long balloon.)

**e. (1 pt.)** Sketch a qualitative graph of the pressure difference $P - P_0$ as a function of $V$, taking the split into account. Indicate on your axes the pressure $P_c - P_0$ and the volumes $V_1$ and $V_2$.

**f. (1.4 pts.)** The balloon is in the volume range that supports two coexisting domains. Find the length $L_{thin}$ of the thinner domain as a function of the total air volume $V$. Express your answer in terms of $V_1$, $V_2$ and the radius $r_1$ of the thinner domain.

**g. (1.2 pts.)** The balloon is in the volume range that supports two coexisting domains. Find the latent work $\Delta W/\Delta L_{thin}$ that must be performed on the balloon to convert a unit length of the thin domain into the thick domain. Express your answer in terms of $P_c$, $V_1$, $V_2$ and the radius $r_1$ of the thinner domain.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/10skm8ViZGk_L_nyiA7SvHMa3cMiG8ynE/view)

**Topic:** [[Elasticity & Materials]], [[Thermodynamics]]
**Metodi:** [[Hooke's Law (metodo)|Hooke's Law]], [[Stress-Strain Analysis (metodo)|Stress-Strain Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Gas (object)|Gas]]


<div class="qlang-split" data-lang="it"></div>

Balone per il compleanno

La foto mostra un lungo pallone di gomma, il tipo che è popolare alle feste di compleanno. Un palloncino parzialmente gonfiato di solito si divide in due domini di diversi raggi. In questa domanda consideriamo un modello semplificato per aiutarci a comprendere questo fenomeno. Considerate un palloncino con forma di un lungo cilindro omogeneo (escluse le estremità), con una boccetta attraverso la quale il palloncino può essere gonfiato. Tutti i processi saranno considerati isotermici a temperatura ambiente. In ogni momento, la pressione $P$ all'interno del palloncino supera di una piccola frazione la pressione atmosferica $P_0$, quindi l'aria può essere trattata come un fluido incompressibile. Anche la gravità e il peso del palloncino possono essere trascurati. L'inflazione è lenta e quasi costante. Le parti a) - d) indicano che il palloncino è gonfiato uniformemente per tutta la sua lunghezza. Indichiamo con $r_0$ e $L_0$ il raggio e la lunghezza del palloncino prima di essere gonfiato.

![[APhO_2011_theory_Q3_p1_f1.png]]
*Figura 1: Balone di compleanno parzialmente gonfiato.*

**a. Il palloncino è tenuto dalla bocca, mentre le altre parti sono appese liberamente. Trova il rapporto $\sigma_L/\sigma_t$ tra la tensione superficiale longitudinale $\sigma_L$ (in direzione parallela all'asse del palloncino) e la tensione superficiale trasversale $\sigma_t$ (in direzione tangente alla sezione trasversale circolare del palloncino).

La tensione superficiale di un film di gomma è la forza che le parti adiacenti esercitano l'una sull'altra, per unità di lunghezza del confine.

La Legge di Hooke è un'approssimazione lineare dell'elasticità del mondo reale per piccole tensioni. Supponiamo che la lunghezza del palloncino rimanga costante a $L_0$, mentre la tensione superficiale $\sigma_t$ dipende linearmente dal rapporto di inflazione $r/r_0$:

$$\sigma_t = k\left(\frac{r}{r_0} - 1\right) \tag{1}$$

**b. (1 pt.)** Con queste ipotesi si ottiene un'espressione per la dipendenza della pressione $P$ all'interno del palloncino dal volume del palloncino $V$. Segnare un diagramma di $P - P_0$ come funzione di $V$. Qual è la pressione di inflazione massima $P_{max}$ risultante dalla approssimazione di elasticità di Hooke?

In realtà, poiché il rapporto di inflazione $r/r_0$ è grande (la figura 1 può osservare valori tipici di circa 5), occorre considerare il comportamento non lineare della gomma e le variazioni della lunghezza del palloncino. Questi effetti consentono pressioni inflazionistiche più elevate di quelle previste dalla parte b). In un tipico pallone, il grafico di $\sigma_t(r)$ è composto da tre pezzi:

1. Per i piccoli rapporti di inflazione, $\sigma_t(r)$ cresce in modo simile a Hooke.
2. A $r - r_0 \sim r_0$, la lunghezza del palloncino $L$ inizia ad aumentare e $\sigma_t(r)$ raggiunge un lungo altopiano dove cresce molto lentamente.
3. Con un rapporto di inflazione elevato, la gomma inizia a resistere fortemente a qualsiasi ulteriore estensione, il che porta ad un forte aumento di $\sigma_t(r)$.

Questo comportamento è raffigurato nella Figura 2.

![[APhO_2011_theory_Q3_p2_f2.png]]
*Figura 2: $\sigma_t(r)$ per un pallone da festa realistico.*

**c. (1,3 punti) ** Segnare un diagramma qualitativo della differenza di pressione $P - P_0$ come funzione di $V$ per un palloncino gonfiato uniformemente che si comporta secondo la figura 2. Indicate tutti i punti di estremazione locali sul vostro complotto. Indicare anche i punti corrispondenti a $r = 1\,\text{cm}$ e $r = 2.5\,\text{cm}$. Trova i valori di $P - P_0$ in questi due punti con una precisione del 10%.

![[APhO_2011_theory_Q3_p2_f3.png]]
*Figura 3: Un grafico dell'equazione (2). *

Per esplorare le conseguenze del comportamento trovato nella parte (c), approssimare $P(V)$ per un palloncino gonfiato uniformemente con una funzione cubica:

$$P - P_0 = a\big((V - u)^3 - b(V - u) + c\big) \tag{2}$$

in cui $a$, $b$, $c$ e $u$ sono costanti positive. Supponiamo che il volume $V$ sia più grande del volume non gonfiato del palloncino $V_0$, e $c$ sia sufficientemente grande da rendere la funzione (2) positiva in tutto l'intero intervallo fisico $V > V_0$. V. Figura (3).

Il palloncino è collegato a un grande serbatoio di aria mantenuto a una pressione controllabile $P$. Può accadere che alcuni valori di $P$ siano coerenti con più di un valore del volume $V$. Se il palloncino subisce occasionalmente perturbazioni (come lo stretching locale da forze esterne) mentre è tenuto a tale pressione di inflazione, può saltare a uno stato di volume diverso. Questo accadrà quando diventerà energeticamente favorevole per l'intero sistema, composto dal palloncino, dall'atmosfera e dalla macchina che mantiene la pressione $P$. Se la pressione è lentamente aumentata da $P_0$ e ci sono sufficienti perturbazioni ad ogni passo, questo salto di volume esplosivo si verifica a una certa pressione $P_c$ in cui l'energia necessaria per muoversi tra i due stati è zero. Sopra questa pressione, passare dal volume più piccolo al ramo più grande rilascia energia e viceversa. Questo tipo di discontinuità si trova spesso nella natura, e talvolta viene definito una "transizione di fase".

**d. (2,3 punti) ** Considerando l'equazione (2), si ottiene il valore di $P_c$, il volume $V_1$ del palloncino prima del salto e il volume $V_2$ dopo il salto. Esprimere le risposte utilizzando $a$, $b$, $c$ e $u$.

Un agente gonfiante più realistico, come un bambino di compleanno, non è in grado di fornire abbastanza aria per il cambiamento istantaneo del volume descritto sopra. Invece, l'aria viene pompata gradualmente nel palloncino, controllando efficacemente il volume del palloncino piuttosto che la pressione. In questo caso, diventa possibile un nuovo tipo di comportamento. Se contribuisce a ridurre al minimo l'energia totale del sistema, il pallone si dividerà (con sufficienti perturbazioni) in due domini cilindrici di diversi raggi, le cui lunghezze cambieranno gradualmente. Il confine di separazione richiede energia, che potresti trascurare. Non si deve considerare la lunghezza dello strato di confine (queste ipotesi sono valide per un pallone molto lungo).

**e. (1 pt.)** Segnare un grafico qualitativo della differenza di pressione $P - P_0$ come funzione di $V$, tenendo conto della divisione. Indicare sui suoi assi la pressione $P_c - P_0$ e i volumi $V_1$ e $V_2$.

**f. Il palloncino si trova nell'intervallo di volume che supporta due domini coesistenti. Trova la lunghezza $L_{thin}$ del dominio più sottile in funzione del volume totale di aria $V$. Esprimere la risposta in termini di $V_1$, $V_2$ e del raggio $r_1$ del dominio più sottile.

**g. (1.2 pts.) ** Il pallone è nell'intervallo di volume che supporta due domini coesistenti. Trova il lavoro latente $\Delta W/\Delta L_{thin}$ che deve essere eseguito sul pallone per convertire una lunghezza unitaria del dominio sottile nel dominio spessore. Esprimere la risposta in termini di $P_c$, $V_1$, $V_2$ e il raggio $r_1$ del dominio più sottile.

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/10skm8ViZGk_L_nyiA7SvHMa3cMiG8ynE/view)

**Topic:** [[Elasticity & Materials]], [[Thermodynamics]]
**Metodi:** [[Hooke's Law (metodo)|Hooke's Law]], [[Stress-Strain Analysis (metodo)|Stress-Strain Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Gas (object)|Gas]]
