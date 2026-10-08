---
title: Brazil 2013
tipo: prova
tags:
  - kg/prova
  - anno/2013
  - paese/Russia
  - comp/Russia
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="brazil-tst-2013-1"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Brazil 2013 — Quesito 1" data-tags="kg/prova,paese/Brazil,comp/Brazil,cluster/Meccanica,object/sphere"></span>

<div class="qlang-switch" data-default="en"></div>



1. Movement of a particle on a spherical
surface

Consider a particle of mass m placed on a spherical surface of radius R. Let $\theta$ be the
angle, relative to the vertical, of the position of the particle in a given instant of time.
See the figure below.

The movement of the particle is considered only in the plane of the paper.

Suppose that the particle is placed, initially, in an angle $\theta_0$ and with angular velocity
$\omega_0=(d\theta/dt)_0$. Also assume that the movement is always restricted to the region -
$\pi/2\leq\theta\leq\pi/2$, so that we won’t have to worry about the particle losing contact with the
surface.

a) Calculate the angular velocity $\omega$ of the particle when it is located in a given angle
$\theta$. Express the result in terms of $\omega_0$, $\theta_0$, the radius R and the local gravity g.

b) To what intervals the angle and angular velocity are restricted to in this case?

Now we assume there is a coefficient of dynamical friction $\mu(\theta$), that can depend on
the point, but is a continuous function of the angle.

Suppose that the particle doesn’t roll, it only slips. In the next questions, we will
answer the questions a) and b), but including the effect of friction:
c) Write the differential equation that relates the angle $\theta$ of the position of the particle
with the time t. Make it depend only on known parameters (given in the problem
text). Remember that, due to the fact that the direction of the friction force depends
on the direction of the velocity, we will need two equations, for the cases where the
particle is moving clockwise or counterclockwise.

After it is released from the initial position $\theta_0>0$, starting from rest, it will start to
descend along the surface until it stops. Then, there are many possibilities,
depending on the level of friction: it is possible that is stops in a positive angle, and, if
the static friction can handle it, it will remain stationary; it is possible that it stops in a
negative angle (that is, it goes beyond the lowest point of the cavity) but remains
stationary, if the static friction is enough; or it can also reach a negative angle and
descend once again, in the counterclockwise direction, and then any of the three
situations will repeat. However, we will analyse only the first part of the motion, when
the particle moves in the clockwise direction (before the first stop).

It may be possible to realize that it is pretty complicated to directly solve the equation
of question c). However, we will see that it will be much easier to solve the angular
velocity as a function of the angle $(\omega=\omega(\theta$)) and then, at first, it will be possible to
determine $\theta(t$), or better, $t(\theta$), with the integral

d) Show that it is possible to relate the angular velocity with the angle with the
following differential equation:

Such an equation is much simpler to solve (it is known as a first order linear
differential equation). The idea to solve something like this is to try to use the chain
rule to group the incognito function (in this case $\omega^2$) in one single derivative, so we
can trivially integrate the equation. Take a look at a similar equation where we see a
direct application of the ideia above:
where y=y(x) is the incognito function, x is the independent variable and f, J are known
functions.

e) Solve the differential equation of the previous question. Don’t forget that $\mu$ isn’t constant.
Hint: Try to multiply the equation by a function $\lambda(\theta$) so you can group terms according to
what was shown.

f) What changes must be made to the solution obtained above to analyse the case
where the particle moves in the counterclockwise direction?

Now let us make a simplification, sufficiently reasonable, that the coefficient of
friction $\mu$ is constant on all of the surface.

g) Add this simplification to the previous obtained solution, obtaining the square of
the angular velocity $\omega^2(\theta$) as a function of the angle $\theta$. This expression becomes
that of question a) when we have $\mu=0$?

Hint: You may want to use the result of the following integral:

Aiming to draw some quick conclusions, without having to resort to numerical
methods, and that help us to understand the effect of friction on the motion of the
particle, even though we already have a very clear idea of this, suppose that the
friction is very low, that is, the surface is almost smooth.

h) Show that, for every point of the surface, the angular velocity is lower compared to
the case where friction is absent.

i) After releasing the particle from $\theta_0$, and from rest, it will slide until it stops for the
first time, on an angle $\theta_1$. Since a bit of its energy was removed by the friction it
won’t be able to go as far as it would if there wasn’t friction. Calculate the angle $\delta\theta$
that the particle is incapable of reaching, compared to the case without friction.

j) Now, consider that the surface where the particle descends is convex, instead of
concave, such as an igloo. What changes must be made in the formulas to adapt
them to this case?
k) Imagine someone sliding on the surface of this igloo, of coefficient of friction $\mu<<1$,
that starts from the top and with almost zero initial velocity. Calculate the angle $\theta_*$,
in first approximation, where there is loss of contact.

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Differential Equations (metodo)|Differential Equations]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Sphere (object)|Sphere]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1EoqymfVDezyLMPVXPuBxR_mOr0cF55fx/view)


<div class="qlang-split" data-lang="it"></div>

1. Movimento di una particella su una superficie sferica

Si consideri una particella di massa m posta su una superficie sferica di raggio R. Sia $\theta$ l'angolo, rispetto alla verticale, della posizione della particella in un dato istante di tempo.
Vedere la figura riportata qui sotto.

Il movimento della particella è considerato solo nel piano del foglio.

Si supponga che la particella venga inizialmente collocata a un angolo $\theta_0$ con velocità angolare $\omega_0=(d\theta/dt)_0$. Si assuma inoltre che il movimento sia sempre limitato alla regione -$\pi/2\leq\theta\leq\pi/2$, in modo da non dover preoccuparsi che la particella perda contatto con la superficie.

a) Calcolare la velocità angolare $\omega$ della particella quando si trova in un dato angolo $\theta$. Esporre il risultato in termini di $\omega_0$, $\theta_0$, del raggio R e dell'accelerazione di gravità locale g.

b) A quali intervalli sono limitati l’angolo e la velocità angolare in questo caso?

Ora si assume che esista un coefficiente di attrito dinamico $\mu(\theta$, il quale può dipendere dal punto, ma è una funzione continua dell’angolo.

Supponiamo che la particella non rotoli, ma scivoli soltanto. Nelle domande successive risponderemo ai punti a) e b), ma includendo l'effetto dell’attrito:

c) Scrivere l’equazione differenziale che lega l’angolo $\theta$ della posizione della particella al tempo t. Farla dipendere soltanto dai parametri noti (forniti nel testo del problema). Ricordare che, a causa del fatto che la direzione della forza di attrito dipende dalla direzione della velocità, sarà necessario utilizzare due equazioni, per i casi in cui la particella si muove orariamente o antiorariamente.

Dopo essere stata rilasciata dalla posizione iniziale $\theta_0>0$, partendo da ferma, comincerà a scendere lungo la superficie fino a fermarsi. A questo punto, esistono molteplici possibilità, in base al livello di attrito: è possibile che si fermi a un angolo positivo, e, se l’attrito statico è sufficiente, rimarrà ferma; è possibile che si fermi a un angolo negativo (cioè, abbia superato il punto più basso della cavità), ma rimanga ferma se l’attrito statico è sufficiente; oppure può raggiungere un angolo negativo e scendere nuovamente, in senso antiorario, ripetendo poi qualunque delle tre situazioni precedenti. Tuttavia, analizzeremo soltanto la prima fase del moto, quando la particella si muove in senso orario (prima della prima arresto).

Potrebbe essere possibile rendersi conto che risolvere direttamente l'equazione del punto c) è abbastanza complesso. Tuttavia vedremo che sarà molto più semplice determinare la velocità angolare in funzione dell'angolo $(\omega=\omega(\theta$)) e, successivamente, sarà possibile determinare $\theta(t$), oppure meglio, $t(\theta$), tramite l'integrale

d) Dimostrare che è possibile collegare la velocità angolare all'angolo mediante la seguente equazione differenziale:

Un’equazione di questo tipo è molto più semplice da risolvere (è nota come equazione differenziale lineare del primo ordine). L’idea per risolverne una simile consiste nel provare a utilizzare la regola della catena per raggruppare la funzione incognita (in questo caso $\omega^2$) in un’unica derivata, così da poter integrare banalmente l’equazione. Osserva un'equazione simile in cui viene mostrata direttamente l’applicazione dell’idea sopra descritta:
dove y=y(x) è la funzione incognita, x è la variabile indipendente e f, J sono funzioni note.

e) Risolvere l’equazione differenziale del punto precedente. Non dimenticare che $\mu$ non è costante.
Suggerimento: Prova a moltiplicare l’equazione per una funzione $\lambda(\theta$) in modo da poter raggruppare i termini secondo quanto mostrato.

f) Cosa deve essere modificato nella soluzione ottenuta in precedenza per analizzare il caso in cui la particella si muove nel senso antiorario?

Ora facciamo una semplificazione, sufficientemente ragionevole, secondo cui il coefficiente di attrito $\mu$ è costante su tutta la superficie.

g) Aggiungi questa semplificazione alla soluzione precedente, ottenendo il quadrato della velocità angolare $\omega^2(\theta$ come funzione dell'angolo $\theta$. Questa espressione diventa quella del punto a) quando abbiamo $\mu=0$?

Suggerimento: Potresti voler utilizzare il risultato dell'integrale seguente:

Per trarre alcune conclusioni rapide, senza dover ricorrere a metodi numerici, e che ci aiutino a comprendere l'effetto dell’attrito sul moto della particella, anche se già ne abbiamo un'idea molto chiara, supponiamo che l’attrito sia molto basso, ossia la superficie sia quasi liscia.

h) Dimostra che, in ogni punto della superficie, la velocità angolare è minore rispetto al caso in cui l’attrito è assente.

i) Dopo aver rilasciato la particella da $\theta_0$, e da fermo, essa scivolerà fino a fermarsi per la prima volta in un angolo $\theta_1$. Poiché una piccola parte della sua energia è stata dissipata dall’attrito, non riuscirà ad arrivare così lontano come farebbe in assenza di attrito. Calcola l’angolo $\delta\theta$ che la particella non riesce a raggiungere, rispetto al caso senza attrito.

j) Ora considera che la superficie lungo cui scende la particella è convessa, invece di concava, come un igloo. Quali modifiche devono essere apportate alle formule per adattarle a questo caso?

k) Immagina qualcuno che scivola sulla superficie di questo igloo, con coefficiente di attrito $\mu<<1$, che parte dalla cima e con velocità iniziale quasi nulla. Calcola l’angolo $\theta_*$, in prima approssimazione, dove si verifica la perdita di contatto.



<span class="atom-split" id="q02" data-atom="q02" data-title="Brazil 2013 — Quesito 2" data-tags="kg/prova,paese/Brazil,comp/Brazil,cluster/Meccanica,object/gas"></span>

<div class="qlang-switch" data-default="en"></div>



2. Schottky Effect

Let’s consider a simplified model of an ideal gas composed by N particles that can
be found in two states, with energies 0 or $\epsilon>0$. To specify the microscopic state of
this system, the knowledge of the number of particles in each energetic state is
necessary. Consider the case where N_1 particles are in the 0 energy state and
N_2=N-N_1 particles are in the energy state $\epsilon>0$.

a) Considering that all the particles are identical and that the only form to distinguish
them is by their energy, find in how many ways W it is possible to obtain a state like
that described in the text, as a function of N, N_1 and N_2.

b) Express the result obtained in the previous question as a function of the total
energy $E=\epsilon(Ν-Ν_1$) of the system, the energy $\epsilon$ and the total number of particles N of
the sample.

The entropy of a system is given by Boltzmann’s formula, expressed in his
tombstone as shown in following figure:
(In this figure, “log” means the natural logarithm, of base e.)

c) Using the given formula, write the entropy S of the system composed by the twolevels gas.

In general, when we treat thermodynamic systems, we are interested in the
properties for great populations, ie. when N, N_1 and N_2 are great numbers, of the
order of 1 mol. In this case, we can use approximations that enable an analytic
treatment of the problem without losing the basic characteristics of it. These
approximations are part of what we usually call the thermodynamic limit.

One of the main approximations used is the famous Stirling expansion, that is given
by

where terms of the order of log(x) can be neglected in the thermodynamic limit.

d) Use the Stirling expansion to express the entropy density of the system s=S/N, as
a function of the Boltzmann constant, the energy $\epsilon$ and the energy density u=E/N of
the system.

e) Obtain the temperature T of the system as a function of k, u and $\epsilon$. If necessary, use:

f) With the results obtained in questions d) and e), sketch the graph of s as a function of u.

g) What is expected about the temperature when $u>\epsilon/2$? Discuss the result.

h) Determine the energy density u as a function of $\epsilon$ and the Boltzmann factor $\beta=1/(kT$).

i) The same result could have been obtained using the Boltzmann factors P(0) and $P(\epsilon$), and
a weighted average, that is,
. Determine which are these Boltzmann
factors.

j) Sketch the graph of u as a function of the temperature T.

k) Find the specific heat c of the system as a function of $\beta$, $\epsilon$ and k.

l) Make a graph of the specific heat c as a function of the temperatura for this kind of system.
Highlight in your sketch the limits $\beta\epsilon\to0$ and $\beta\epsilon\to\infty$.
The signature of this kind of system is the graph of the specific heat obtained in the previous
question, and is known as the Schottky effect.

**Topic:** [[Thermodynamics]], [[Kinetic Theory]]
**Metodi:** [[Statistical Averaging (metodo)|Statistical Averaging]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Kinetic Theory of Gases (metodo)|Kinetic Theory of Gases]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Gas (object)|Gas]]
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1EoqymfVDezyLMPVXPuBxR_mOr0cF55fx/view)


<div class="qlang-split" data-lang="it"></div>

2. Effetto Schottky

Consideriamo un modello semplificato di un gas ideale composto da particelle N che possono
essere trovati in due stati, con energie 0 o $\epsilon>0$. Per specificare lo stato microscopico di
Questo sistema, la conoscenza del numero di particelle in ogni stato energetico è
- E' necessario. Considerare il caso in cui le particelle N_1 sono nello stato di energia 0 e
N_2=N-N_1 le particelle sono nello stato energetico $\epsilon>0$.

a) Considerando che tutte le particelle sono identiche e che l'unica forma di distinzione è
che è per la loro energia, trovare in quanti modi W è possibile ottenere uno stato come
che è descritta nel testo, come funzione di N, N_1 e N_2.

b) Esprimere il risultato ottenuto nella domanda precedente in funzione del totale
energia $E=\epsilon(Ν-Ν_1$) del sistema, l'energia $\epsilon$ e il numero totale di particelle N di
il campione.

L'entropia di un sistema è data dalla formula di Boltzmann, espressa nel suo
la lapide sepolcrale come mostrato nella figura seguente:
(In questa figura, log significa il logaritmo naturale, di base e.)

c) Con la formula data, scrivere l'entropia S del sistema composto dai gas a due livelli.

In generale, quando si tratta di sistemi termodinamici, ci interessa la
Property per grandi popolazioni, cioè. quando N, N_1 e N_2 sono grandi numeri,
ordinamento di 1 mol. In questo caso, possiamo usare approssimazioni che consentono un analisi
Il problema è stato trattato senza perdere le sue caratteristiche fondamentali. Questi
Le approssimative fanno parte di quello che di solito chiamiamo il limite termodinamico.

Una delle principali approssimazioni utilizzate è la famosa espansione di Stirling, che è data
by

quando i termini dell'ordine di log(x) possono essere trascurati nel limite termodinamico.

d) Utilizzare l'espansione di Stirling per esprimere la densità di entropia del sistema s=S/N, come
una funzione della costante di Boltzmann, l'energia $\epsilon$ e la densità energetica u=E/N di
- Il sistema.

e) Ottenere la temperatura T del sistema come funzione di k, u e $\epsilon$. Se necessario, utilizzare:

f) Con i risultati ottenuti nelle domande d) e e), disegnare il grafico di s come funzione di u.

g) Cosa si può aspettare della temperatura quando $u>\epsilon/2$? Parlate del risultato.

h) Determinare la densità energetica u come funzione di $\epsilon$ e il fattore Boltzmann $\beta=1/(kT$).

i) Lo stesso risultato avrebbe potuto essere ottenuto utilizzando i fattori di Boltzmann P  0 e $P(\epsilon$), e
una media ponderata, cioè
. Determina quali sono questi Boltzmann
fattori.

j) Segnare il grafico di u in funzione della temperatura T.

k) Trova il calore specifico c del sistema come funzione di $\beta$, $\epsilon$ e k.

l) Rendi un grafico del calore specifico c in funzione della temperatura di questo tipo di sistema.
In un sketch, evidenziare i limiti $\beta\epsilon\to0$ e $\beta\epsilon\to\infty$.
La firma di questo tipo di sistema è il grafico del calore specifico ottenuto nel precedente
E' noto come effetto Schottky.

**Topic:** [[Thermodynamics]], [[Kinetic Theory]]
**Metodi:** [[Statistical Averaging (metodo)|Statistical Averaging]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Kinetic Theory of Gases (metodo)|Kinetic Theory of Gases]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Gas (object)|Gas]]
**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1EoqymfVDezyLMPVXPuBxR_mOr0cF55fx/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Brazil 2013 — Quesito 3" data-tags="kg/prova,paese/Brazil,comp/Brazil,cluster/Meccanica,object/mirror"></span>

<div class="qlang-switch" data-default="en"></div>



3. Ellipsoidal Mirror

In this problem we will investigate the characteristics of the image formed by a mirror
in the shape of an ellipse. This kind of mirror has the memorable property that every
ray that starts from one of the foci F or F’, as shown in the figure, hits the other
focus. In this case, we say that the foci F and F’ are an object-image pair, or
conjugated points.

The ellipse has major axis 2a and minor axis 2b.

An ellipse is characterized by its foci F and F’. The main characteristic of an ellipse is
that for many point P on it, such as the points A, B and C on the figure, the
relationship
 is valid. We define the eccentricity $\epsilon$ of an ellipse as

This quantity indicates how oval the ellipse is. Suppose that an object is placed on
the focus F of the mirror, as shown in the figure. Answer the following.
a) What is the transverse magnification of the mirror if we consider only the light rays
that hit the mirror near point A? Make an illustration of the formed image. Express
your result in terms of the eccentricity $\epsilon$ of the ellipse. (Obs: The transverse
magnification is defined as the ratio between the length of the image and the length
of the object when the object is placed in the direction perpendicular to the optical
axis of the mirror).

b) Repeat what was done in question a) considering the rays that hit the mirror near
point B.

c) Repeat what was done in question a) considering the rays that hit the mirror near
point C.

d) Based on the previous questions, determine what would be the transverse
magnification of an ellipsoidal mirror.

e) The circle is a particular case of ellipse, where $\epsilon=0$. Determine the transverse
magnification of a spherical mirror, for an object placed on point F. Where is the
image in this case?

**Topic:** [[Geometric Optics]]
**Metodi:** [[Ray Tracing (metodo)|Ray Tracing]], [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Mirror (object)|Mirror]]
**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1EoqymfVDezyLMPVXPuBxR_mOr0cF55fx/view)


<div class="qlang-split" data-lang="it"></div>

3. Specchio ellissoide

In questo problema esamineremo le caratteristiche dell'immagine formata da uno specchio
in forma di ellisse. Questo tipo di specchio ha la proprietà memorabile che ogni
il raggio che parte da uno dei foci F o F, come mostrato nella figura, colpisce l'altro
Concentrati. In questo caso, diciamo che i foci F e F sono una coppia di immagini oggetto, o
punti coniugati.

L'ellisse ha l'asse principale 2a e l'asse minore 2b.

Un'ellisse è caratterizzata dai suoi foci F e F. La caratteristica principale di un'ellisse è
che per molti punti P, come i punti A, B e C della figura, il
Relazione
è valido. Definciamo l'escentricità $\epsilon$ di un'ellisse come

Questa quantità indica quanto sia ovale l'ellisse. Supponiamo che un oggetto sia posto su
il fuoco F dello specchio, come mostrato nella figura. Rispondi alle seguenti domande.
a) Qual è la ingrandimento trasversale dello specchio se si considerano solo i raggi di luce
che ha colpito lo specchio vicino al punto A? Fate un'illustrazione dell'immagine formata. Espresso
il risultato in termini di eccentricità $\epsilon$ dell'ellisse. (Obs: il lato trasversale)
l'ingrandimento è definito come il rapporto tra la lunghezza dell'immagine e la lunghezza
di un oggetto quando l'oggetto è posizionato nella direzione perpendicolare all'ottica
asse dello specchio).

b) Ripetere ciò che è stato fatto in questione a) considerando i raggi che hanno colpito lo specchio vicino
punto B.

c) Ripetere ciò che è stato fatto in questione a) considerando i raggi che hanno colpito lo specchio vicino
punto C.

d) Sulla base delle domande precedenti, determinare quale sarebbe la
ingrandimento di uno specchio ellissoide.

e) Il cerchio è un caso particolare di ellisse, dove $\epsilon=0$. Determina la trasversale
ingrandimento di uno specchio sferico, per un oggetto posto al punto F. Dov' è la
immagine in questo caso?

**Topic:** [[Geometric Optics]]
**Metodi:** [[Ray Tracing (metodo)|Ray Tracing]], [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Mirror (object)|Mirror]]
**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1EoqymfVDezyLMPVXPuBxR_mOr0cF55fx/view)
