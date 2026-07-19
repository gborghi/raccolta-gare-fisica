---
title: PLANCKS 2024 — Dublin
tipo: prova
tags:
  - kg/prova
  - paese/international
  - comp/PLANCKS
---
<div class="atom-reader" data-prova="plancks_2024"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="PLANCKS 2024 — Dublin — Quesito 1" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/rotational-dynamics,argomento/meccanica,difficolta/5,multidisciplina/mono"></span>

<div class="qlang-switch" data-default="en"></div>



**Moment of Inertia**

This question concerns the moment of inertia, $I_G$, of a uniform lamina of mass $m$, about an axis perpendicular to the plane of the lamina, passing through the mass centre, $G$.

Figure 1 shows $ABC$, an isosceles triangle with two sides of length $r$ and third side $2a$.

![[PLANCKS_2024_p1_f1.png]]
*Figure 1: Isosceles triangle with semivertical angle $\theta$ and moment of inertia $I_G$.*

**(a)** [6 marks] Show that the formula for the moment of inertia about the centre of mass is

$$I_G = \frac{1}{18} m r^2 \,(2 - \cos 2\theta).$$

Consider now a regular $n$-gon lamina comprised of $n$ isosceles triangles. The diameter of the $n$-gon will be $2r$ and its mass centre is denoted as $G'$. You may take the total mass of the $n$-gon lamina to be $M$.

For example, a 6-gon lamina (i.e. a hexagon) would be formed of six isosceles triangles, with their apexes touching. Each of these triangles has two sides of length $r$.

**(b)** [4 marks] Find an expression for the moment of inertia of a regular $n$-gon lamina about its centre of mass $G'$ and show that in the limit $n \to \infty$ the result for a circle is recovered, i.e. $\frac{1}{2} M r^2$.

**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Rotational Dynamics]], [[Mathematics]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Symmetry Argument (metodo)|Symmetry Argument]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —


<div class="qlang-split" data-lang="it"></div>

**Momento di inerzia**

La questione riguarda il momento di inerzia, $I_G$, di una lamina uniforme di massa $m$, intorno ad un asse perpendicolare al piano della lamina, passando attraverso il centro di massa, $G$.

La figura 1 mostra $ABC$, un triangolo a uguali stelle con due lati di lunghezza $r$ e un terzo lato $2a$.

![[PLANCKS_2024_p1_f1.png]]
*Figura 1: triangolo a parice con angolo semivertico $\theta$ e momento di inerzia $I_G$.*

**(a) ** [6 punti] Mostra che la formula per il momento di inerzia intorno al centro di massa è

$$I_G = \frac{1}{18} m r^2 \,(2 - \cos 2\theta).$$

Si consideri ora una lamina di $n$-gon regolare composta da triangoli di $n$ eusoceles. Il diametro del $n$-gon sarà $2r$ e il suo centro di massa è indicato come $G'$. Si può prendere la massa totale della lamina $n$-gon a $M$.

Ad esempio, una lamina a 6 goni (cioè un esagono) sarebbe formato da sei triangoli a uguale di mancia, con i loro apici che si toccano. Ciascun triangolo ha due lati di lunghezza $r$.

**(b) ** [4 punti] Trova un'espressione per il momento di inerzia di una lamina di massa regolare $n$-gon circa il suo centro di massa $G'$ e mostra che nel limite $n \to \infty$ viene recuperato il risultato per un cerchio, cioè $\frac{1}{2} M r^2$.

**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Rotational Dynamics]], [[Mathematics]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Symmetry Argument (metodo)|Symmetry Argument]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —



<span class="atom-split" id="q02" data-atom="q02" data-title="PLANCKS 2024 — Dublin — Quesito 2" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/mathematics,argomento/metodi-trasversali,difficolta/5,multidisciplina/mono"></span>

<div class="qlang-switch" data-default="en"></div>



**Quaternions**

Everybody[^1] knows how complex numbers work. Each complex number is made of a doublet of real numbers:

$$z_1 = a_1 + i b_1, \qquad z_2 = a_2 + i b_2$$

where $i^2 = -1$. In order to be useful, one has to be able to add and multiply complex numbers:

$$z_1 + z_2 = (a_1 + a_2) + i(b_1 + b_2)$$
$$z_1 z_2 = (a_1 a_2 - b_1 b_2) + i(a_1 b_2 + b_1 a_2).$$

Fundamentally, in order to be considered addition and multiplication, these definitions should satisfy standard associativity and distribution rules

$$(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$$
$$(z_1 z_2) z_3 = z_1 (z_2 z_3)$$
$$z_1 (z_2 + z_3) = z_1 z_2 + z_1 z_3,$$

which can easily be shown to be true for complex numbers. In addition, one would like to be able to associate with a complex number a real number known as its magnitude

$$|z_1|^2 = a_1^2 + b_1^2,$$

which, amongst other things, should satisfy the rule

$$|z_1 z_2| = |z_1| |z_2|.$$

In 1843, Hamilton wanted to extend 'couples' (complex numbers) to 'triples' — numbers of the form

$$z = a + i b + j c$$

where $i^2 = -1$ and $j^2 = -1$ (but $i \neq j$). The idea is that if you can make up one 'imaginary' square root of $-1$, why not make up another in a 'perpendicular' direction. Unfortunately reality turned out to be less enthusiastic about this idea. Apparently, Hamilton's children would ask him at breakfast each morning "Papa, can you multiply triples yet?" to which he would reply sadly "No, I can only add and subtract them". In October of that year, while out for a walk, the answer finally came to him. He graffitied the answer onto the Brougham Bridge. The graffiti has faded over the years, but there is now a plaque commemorating the event if you wish to visit it while in Dublin.

[^1]: At least, everybody who makes it to a PLANCKS final.

**(a)** [1 mark] Prove that $ij = -ji$, i.e. the different square roots of $-1$ must anti-commute.

**(b)** [2 marks] Prove that if one writes $k = ij$, then $k^2 = -1$, i.e. $k$ is another square root of $-1$. Further prove that $k$ cannot be written as a 'triple', i.e. $k \neq \alpha + \beta i + \gamma j$ for real $\alpha, \beta, \gamma$.

You have now shown that 'triples' do not exist if one wants a consistent algebra including multiplication — they must be extended into quaternions.

Hamilton had a notation for quaternions

$$q = (s, \vec{v}) = s + v_x i + v_y j + v_z k,$$

where he called the real part of the quaternion $s$ the 'scalar' part, and the imaginary parts of the quaternion $\vec{v}$ the vector part. In this notation, consider $q_1 = (0, \vec{v}_1)$ and $q_2 = (0, \vec{v}_2)$. It is worthy of historic note that the modern concept of scalar and vector product had not yet been invented when Hamilton first developed his theory of quaternions.

**(c)** [2 marks] From the rules you have previously derived about multiplying quaternions, prove that

$$q_1 q_2 = (-\vec{v}_1 \cdot \vec{v}_2, \; \vec{v}_1 \times \vec{v}_2).$$

**(d)** [5 marks] Calculate $e^q$ if

$$q = \frac{\pi}{5} i + \frac{4\pi}{15} k.$$

*Hint:* First, work out why this is not trivial. Second, you may find it easier to first work out the general formula for $e^q$ where $q$ is a quaternion, and then substitute in the specific value given.

**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Mathematics]]
**Metodi:** [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —


<div class="qlang-split" data-lang="it"></div>

**Quaternioni**

Tutti sanno come funzionano i numeri complessi. Ogni numero complesso è costituito da un doppio di numeri reali:

$$z_1 = a_1 + i b_1, \qquad z_2 = a_2 + i b_2$$

dove $i^2 = -1$. Per essere utili, bisogna essere in grado di sommare e moltiplicare numeri complessi:

$$z_1 + z_2 = (a_1 + a_2) + i(b_1 + b_2)$$
$$z_1 z_2 = (a_1 a_2 - b_1 b_2) + i(a_1 b_2 + b_1 a_2).$$

Fondamentalmente, per essere considerate somma e moltiplicazione, queste definizioni dovrebbero soddisfare le norme di associazione e distribuzione.

$$(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$$
$$(z_1 z_2) z_3 = z_1 (z_2 z_3)$$
$$z_1 (z_2 + z_3) = z_1 z_2 + z_1 z_3,$$

che può essere facilmente dimostrato vero per i numeri complessi. Inoltre, si desidera essere in grado di associare con un numero complesso un numero reale noto come la sua magnitudine

$$|z_1|^2 = a_1^2 + b_1^2,$$

che, tra l'altro, dovrebbe soddisfare la regola

$$|z_1 z_2| = |z_1| |z_2|.$$

Nel 1843, Hamilton voleva estendere i "coppie" (numeri complessi) a "tripli"  numeri della forma

$$z = a + i b + j c$$

in cui $i^2 = -1$ e $j^2 = -1$ (ma $i \neq j$). L'idea è che se si può comporre una radice quadrata "immaginaria" di $-1$, perché non comporre un'altra in una direzione "perpendicolare". Purtroppo la realtà si è rivelata meno entusiasta di questa idea. A quanto pare, i figli di Hamilton gli chiedevano ogni mattina alla colazione: "Papà, puoi ancora moltiplicare il triplo?" a cui egli rispondeva con tristezza: "No, posso solo aggiungere e sottrarre". Nell'ottobre di quell'anno, mentre andava a fare una passeggiata, finalmente la risposta gli venne da lui. Ha graffitiato la risposta sul Brougham Bridge. Il graffiti è svanito negli anni, ma ora c'è una targa che commemora l'evento se si desidera visitarla mentre si è a Dublino.

Almeno, tutti quelli che arrivano alla finale di PANCKS.

**(a) ** [1 segno] Dimostra che $ij = -ji$, ovvero le diverse radici quadrate di $-1$ devono essere anti-commute.

**(b) ** [2 punti] Prova che se si scrive $k = ij$, allora $k^2 = -1$, cioè $k$ è un'altra radice quadrata di $-1$. Prove inoltre che $k$ non può essere scritto come "triplice", ovvero $k \neq \alpha + \beta i + \gamma j$ per $\alpha, \beta, \gamma$ reale.

Ora hai dimostrato che i 'tripli' non esistono se si vuole un'algebra coerente compresa la moltiplicazione  devono essere estesi in quaternioni.

Hamilton aveva una notazione per i quaternioni

$$q = (s, \vec{v}) = s + v_x i + v_y j + v_z k,$$

dove ha chiamato la parte reale del quaternion $s$ la parte "scalare", e le parti immaginarie del quaternion $\vec{v}$ la parte vettore. In questa notazione, considerate $q_1 = (0, \vec{v}_1)$ e $q_2 = (0, \vec{v}_2)$. Vale la pena di notare storicamente che il concetto moderno di prodotto scalare e vettoriale non era stato ancora inventato quando Hamilton sviluppò per la prima volta la sua teoria dei quaternioni.

Dalle regole che avete precedentemente derivato sul moltiplicare i quaternioni, dimostrate che

$$q_1 q_2 = (-\vec{v}_1 \cdot \vec{v}_2, \; \vec{v}_1 \times \vec{v}_2).$$

**(d) ** [5 punti] Calcolare $e^q$ se

$$q = \frac{\pi}{5} i + \frac{4\pi}{15} k.$$

*Suggetta: * Innanzitutto, scopri perché non è banale. In secondo luogo, è più facile elaborare la formula generale per $e^q$, dove $q$ è un quaternion, e quindi sostituirla nel valore specifico dato.

**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Mathematics]]
**Metodi:** [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —



<span class="atom-split" id="q03" data-atom="q03" data-title="PLANCKS 2024 — Dublin — Quesito 3" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/modern-quantum-physics,argomento/fisica-moderna,difficolta/5,multidisciplina/mono,object/electron"></span>

<div class="qlang-switch" data-default="en"></div>



**Möbius Strip.... Time Travel?**

In *Avengers Endgame*, Tony Stark asks his AI assistant 'Friday' to find the eigenvalues of an inverted Möbius strip so that they can build a device to time travel into the past and... spoilers.

What is a Möbius strip? Imagine a rectangle of length $L$ and width $W$; you connect the two ends and the result is a band of circumference $L$. However, if you twist the rectangle $180^\circ$ before you connect the ends, you get a Möbius strip.

In this problem, you will solve the Schrödinger equation for a quantum particle of mass $m$ confined on a Möbius strip.

For this problem, consider the easiest geometry that a space with Möbius strip topology can have — a flat space with Möbius strip boundary conditions. The problem will be further simplified by ignoring spin.

**(a)** [6 marks] Find the energies and normalised wavefunctions of a quantum particle of mass $m$ moving on a Möbius strip of length $L$ and width $W$ with potential $V(x, y) = 0$ everywhere on the strip.

Now let us imagine that the confined quantum particle is an electron with mass $m = 9.11 \times 10^{-31}$ kg.

The electron is described at time $t = 0$ by a wave packet with wavefunction confined to a circle of radius $a$ at the point $x = \frac{W}{2}, \; y = 0$ (depending on your orientation of the strip).

Take the length of the Möbius strip, $L = 20$ nm and the width, $W = 3$ nm.

**(b)** [4 marks] After what time will the wavefunction return to its initial position? Give your answer in seconds.

State any assumptions you have made to get to your answers.

**Fonte:** [Testo (PDF) — p.11](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Modern-Quantum Physics]], [[Oscillations & Waves]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Wave Equation (metodo)|Wave Equation]], [[de Broglie Relation (metodo)|de Broglie Relation]], [[Bohr Model & Quantization (metodo)|Bohr Model & Quantization]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Electron (object)|Electron]]


<div class="qlang-split" data-lang="it"></div>

La striscia di Mobius... Viaggi nel tempo?

In Avengers Endgame Tony Stark chiede al suo assistente di IA 'Friday' di trovare i valori propri di una striscia di Möbius invertita in modo che possano costruire un dispositivo per viaggiare nel tempo e... - Gli spoiler.

Cos'è una striscia Möbius? Immaginate un rettangolo di lunghezza $L$ e larghezza $W$; collegate le due estremità e il risultato è una banda di circonferenza $L$. Tuttavia, se si torce il rettangolo $180^\circ$ prima di collegare le estremità, si ottiene una striscia di Möbius.

In questo problema, risolverete l'equazione di Schrödinger per una particella quantistica di massa $m$ confinata su una striscia di Möbius.

Per questo problema, considera la geometria più semplice che uno spazio con topologia della striscia di Möbius può avere uno spazio piatto con condizioni di confine della striscia di Möbius. Il problema sarà ulteriormente semplificato ignorando la rotazione.

**(a) ** [6 punti] Trova le energie e le funzioni d'onda normalizzate di una particella quantistica di massa $m$ che si muove su una striscia di Möbius di lunghezza $L$ e larghezza $W$ con potenziale $V(x, y) = 0$ ovunque sulla striscia.

Ora immaginiamo che la particella quantistica confinata sia un elettrone con massa $m = 9.11 \times 10^{-31}$ kg.

L'elettrone è descritto al tempo $t = 0$ da un pacchetto d'onda con funzione d'onda confinata a un cerchio di raggio $a$ al punto $x = \frac{W}{2}, \; y = 0$ (a seconda dell'orientamento della striscia).

Prendi la lunghezza della striscia di Möbius, $L = 20$ nm e la larghezza, $W = 3$ nm.

**(b) ** [4 punti] Dopo che ora la funzione d'onda tornerà alla sua posizione iniziale? Dammi la tua risposta in pochi secondi.

Indicate le ipotesi che avete formulato per arrivare alle vostre risposte.

**Fonte:** [Testo (PDF) — p.11](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Modern-Quantum Physics]], [[Oscillations & Waves]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Wave Equation (metodo)|Wave Equation]], [[de Broglie Relation (metodo)|de Broglie Relation]], [[Bohr Model & Quantization (metodo)|Bohr Model & Quantization]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Electron (object)|Electron]]



<span class="atom-split" id="q04" data-atom="q04" data-title="PLANCKS 2024 — Dublin — Quesito 4" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/newtonian-mechanics,argomento/meccanica,difficolta/5,multidisciplina/mono,object/sphere"></span>

<div class="qlang-switch" data-default="en"></div>



**Icy Roof**

After a night of frivolity, Patrick decides to climb on to the top of his roof. His house has an interesting shape — the upper half of a sphere of radius 10 m. It being an icy night, Patrick unsurprisingly starts to slip down.

![[PLANCKS_2024_p4_f1.png]]
*Figure 3: Sketch of Patrick's house and garden.*

**(a)** [6 marks] Making the standard undergraduate physics approximations (no friction, point mass, etc.), calculate how far from the edge of the house Patrick lands, to see if he makes it into the pond, slams into the concrete path, or ends up in the thorny rose bush.

**(b)** [4 marks] Without detailed calculation (but with sound physics arguments), estimate how much of a difference it makes to relax the more unreasonable approximations to predict where Patrick will really land.

**Fonte:** [Testo (PDF) — p.14](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Sphere (object)|Sphere]]


<div class="qlang-split" data-lang="it"></div>

**Tacchetto di ghiaccio**

Dopo una notte di frivolità, Patrick decide di salire sulla cima del suo tetto. La sua casa ha una forma interessante. La metà superiore di una sfera di raggio di 10 m. Essendo una notte ghiacciata, Patrick, non sorprende, inizia a scivolare.

![[PLANCKS_2024_p4_f1.png]]
Figura 3: Sketch di casa e giardino di Patrick.

Facendo gli approssimativi standard di fisica di laurea (senza attrito, massa di punto, ecc.), calcolare quanto lontano dal bordo della casa Patrick atterra, per vedere se si trova nel lago, si sbatte nel percorso di cemento, o finisce nel bosco di rose spinosa.

Senza calcoli dettagliati (ma con argomenti di fisica solida), stimare quanto la differenza fa per rilasciare le approssimazioni più irragionevoli per prevedere dove Patrick atterrerà davvero.

**Fonte:** [Testo (PDF) — p.14](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Sphere (object)|Sphere]]



<span class="atom-split" id="q05" data-atom="q05" data-title="PLANCKS 2024 — Dublin — Quesito 5" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/electromagnetic-induction,argomento/elettromagnetismo,difficolta/5,multidisciplina/multi,object/coil,object/magnet"></span>

<div class="qlang-switch" data-default="en"></div>



**Floating Ring**

A thin superconducting ring is held above a vertical, cylindrical magnetic rod. The axis of symmetry of the ring is the same as that of the rod. The cylindrically symmetrical magnetic field around the ring can be described approximately in terms of the vertical and radial components of the magnetic field vector as $B_z = B_0 (1 - \alpha z)$ and $B_r = B_0 \beta r$, where $B_0$, $\alpha$ and $\beta$ are constants, and $z$ and $r$ are the vertical and radial position coordinates, respectively. A sketch of this can be seen in Figure 4.

![[PLANCKS_2024_p5_f1.png]]
*Figure 4: A thin superconducting ring above a cylindrical metal rod.*

Initially, the ring has no current flowing in it. The coordinates of the centre of the ring are $(z, r) = (0, 0)$. When released, it starts to move downwards with its axis still vertical.

Useful data:

- Ring's mass, $m = 50$ mg
- Ring's radius, $r_0 = 0.5$ cm
- Ring's inductance, $L = 1.3 \times 10^{-8}$ H
- Magnetic field constant, $B_0 = 0.01$ T
- Magnetic field constant, $\alpha = 2 \ \mathrm{m^{-1}}$
- Magnetic field constant, $\beta = 32 \ \mathrm{m^{-1}}$

**(a)** [8 marks] Show that the ring undergoes simple harmonic motion, and find the frequency and amplitude of the oscillation.

**(b)** [2 marks] What is the maximum current that flows in the ring, and where in the oscillation does it occur?

**Fonte:** [Testo (PDF) — p.17](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Electromagnetic Induction]], [[Oscillations & Waves]]
**Metodi:** [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Lenz's Law (metodo)|Lenz's Law]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Coil (object)|Coil]], [[Magnet (object)|Magnet]]


<div class="qlang-split" data-lang="it"></div>

**Anello galleggiante**

Un sottile anello superconduttore è tenuto sopra una barra magnetica verticale e cilindrica. L'asse di simmetria dell'anello è lo stesso di quello della canna. Il campo magnetico cilindricamente simmetrico intorno all'anello può essere descritto approssimativamente in termini di componenti verticali e radiali del vettore del campo magnetico come $B_z = B_0 (1 - \alpha z)$ e $B_r = B_0 \beta r$, dove $B_0$, $\alpha$ e $\beta$ sono costanti e $z$ e $r$ sono rispettivamente le coordinate di posizione verticale e radiale. Un bozzetto di questo può essere visto nella Figura 4.

![[PLANCKS_2024_p5_f1.png]]
*Figura 4: Un sottile anello superconduttore sopra una barra metallica cilindrica.*

Inizialmente, l'anello non ha corrente che fluisca in esso. Le coordinate del centro dell'anello sono $(z, r) = (0, 0)$. Una volta rilasciato, inizia a muoversi verso il basso con l'asse ancora verticale.

Dati utili:

- massa dell'anello, $m = 50$ mg
- Radius dell'anello, $r_0 = 0.5$ cm
- Induttanza dell'anello, $L = 1.3 \times 10^{-8}$ H
- Costante del campo magnetico, $B_0 = 0.01$ T
- Costante del campo magnetico, $\alpha = 2 \ \mathrm{m^{-1}}$
- Costante del campo magnetico, $\beta = 32 \ \mathrm{m^{-1}}$

**(a) ** [8 segni] Mostra che l'anello subisce un semplice movimento armonico e trova la frequenza e l'ampiezza dell'oscillazione.

**(b) ** [2 punti] Qual è la corrente massima che scorre nell'anello e dove nell'oscillazione si verifica?

**Fonte:** [Testo (PDF) — p.17](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Electromagnetic Induction]], [[Oscillations & Waves]]
**Metodi:** [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Lenz's Law (metodo)|Lenz's Law]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Coil (object)|Coil]], [[Magnet (object)|Magnet]]



<span class="atom-split" id="q06" data-atom="q06" data-title="PLANCKS 2024 — Dublin — Quesito 6" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/nuclear-particle-physics,argomento/fisica-moderna,difficolta/5,multidisciplina/multi,object/photon,object/nucleus"></span>

<div class="qlang-switch" data-default="en"></div>



**Nuclear Medicine Scan**

Red deer are native to Ireland; as they get older the male deer grow very large antlers. A young deer wanted to check if his budding antlers were growing uniformly. So, the Stag visited St James' Hospital in Dublin. He received a nuclear medicine scan, whereby he was injected with a photon-emitting radionuclide which accumulates primarily, but not exclusively, in areas of bone growth (his antlers).

The signal from the radioactivity measured from a detector placed outside an object will depend on both the activity present and on the distribution of the photon attenuation coefficients.

Consider an object with a distribution of attenuation coefficients $\mu(x, y)$ and radioactivity distribution $A(x, y)$ as shown in Figure 5.

![[PLANCKS_2024_p6_f1.png]]
*Figure 5: Object with arbitrary activity distribution $A(x, y)$ and attenuation coefficient distribution $\mu(x, y)$.*

Assume that the detector has 100% efficiency (i.e., all photons hitting it are detected) and that it is collimated (i.e., it will only detect photons emitted along a thin line). The photons emitted, from a point source, in a specific direction are proportional, by a factor $k < 1$, to the total number of photons emitted.

Remember that the variation in intensity for a beam travelling through an infinitesimally small thickness $dt$ is

$$dI = -\mu I \, dt.$$

**(a)** [1 mark] In the absence of attenuation, the signal measured along an arbitrary line $\ell$ is given by

$$I = k \int_0^{\ell} A(x, y) \, ds.$$

How would this be modified when attenuation is taken into account? Assume that there is no geometrical correction for the distance of the emission point from the detector.

Consider now the top of the Stag's skull, approximated by an ellipse with semi-axes $a$ and $b$, arbitrary radioactivity distribution $A(R, \vartheta)$ in polar coordinates and a constant attenuation coefficient $\mu$ (see Figure 6).

![[PLANCKS_2024_p6_f2.png]]
*Figure 6: Ellipse with arbitrary activity distribution and constant attenuation coefficient.*

**(b)** [3 marks] Write an expression, in polar coordinates, for the signal measured from a line going through the origin of the axes at an angle $\vartheta$ to the $x$-axis.

So far we have assumed a point-like detector with infinite angular resolution (i.e., it will only detect photons emitted along a very thin line). The detector now has a circular aperture of radius $R$, as shown in Figure 7.

![[PLANCKS_2024_p6_f3.png]]
*Figure 7: Activity distribution in a plane, with a circular detector aperture.*

We can assume that the radioactivity is still distributed in a plane, but that photons are emitted isotropically in a sphere.

**(c)** [3 marks] How would your solution to part b change if we had a detector with a circular aperture of radius $R$?

The diagram in Figure 8 shows the Stag's scan, with a diffuse "background" uptake of radionuclide and two "points" representing the antler buds.

![[PLANCKS_2024_p6_f4.png]]
*Figure 8: Diagram of the Stag's scan.*

- The detector counts measured along the two parallel lines are $I_1 = 1.23 \ \mathrm{s^{-1}}$ and $I_2 = 1.15 \ \mathrm{s^{-1}}$.
- The two antler buds can be treated as point-like, with radioactivity uptakes $A_1$ and $A_2$. If $A_1 = A_2$, the antlers were growing uniformly and the Stag will now have developed a pair of symmetrical antlers.
- The radioactivity/unit length in the rest of the skull is $A_0 = 3000 \ \mathrm{Bq\,cm^{-1}}$.
- The attenuation coefficient of the head tissue is $0.27 \ \mathrm{cm^{-1}}$.
- $\ell_1 = 5.25$ cm, $\ell_2 = 11$ cm, $z_1 = 24.5$ cm and $z_2 = 12.5$ cm.
- For this part of the question, assume again a perfectly collimated detector, with the ratio between photons emitted in the detector's direction / total photons emitted at each point $k = 10^{-4}$.

**(d)** [3 marks] On the basis of the quantities above, calculate $A_1$ and $A_2$ and determine if the Stag's antlers were growing uniformly at the time of the scan.

**Fonte:** [Testo (PDF) — p.20](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Nuclear & Particle Physics]], [[Mathematics]]
**Metodi:** [[Radioactive Decay Law (metodo)|Radioactive Decay Law]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Physical Modeling (metodo)|Physical Modeling]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Photon (object)|Photon]], [[Nucleus (object)|Nucleus]]


<div class="qlang-split" data-lang="it"></div>

Scanner di Medicina Nucleare

I cervi rossi sono nativi dell'Irlanda; man mano che invecchiano i cervi maschi crescono corna molto grandi. Un giovane cervo voleva vedere se le sue corna crescevano uniformemente. Quindi, lo Stag ha visitato l'ospedale di St. James a Dublino. Ha ricevuto una scansione di medicina nucleare, in cui gli è stato iniettato un radionuclido emettente fotoni che si accumula principalmente, ma non esclusivamente, nelle aree di crescita ossea (le sue corna).

Il segnale della radioattività misurato da un rilevatore posto al di fuori di un oggetto dipenderà sia dall'attività presente che dalla distribuzione dei coefficienti di attenuazione dei fotoni.

Considera un oggetto con una distribuzione dei coefficienti di attenuazione $\mu(x, y)$ e la distribuzione della radioattività $A(x, y)$ come mostrato alla figura 5.

![[PLANCKS_2024_p6_f1.png]]
*Figura 5: oggetti con distribuzione arbitraria dell'attività $A(x, y)$ e distribuzione del coefficiente di attenuazione $\mu(x, y)$.*

Supponiamo che il rilevatore abbia un'efficienza del 100% (cioè che tutti i fotoni che lo colpiscono sono rilevati) e che sia collimato (cioè che rilevera solo i fotoni emessi lungo una linea sottile). I fotoni emessi da una fonte puntaria in una direzione specifica sono proporzionali, per un fattore $k < 1$, al numero totale di fotoni emessi.

Ricorda che la variazione di intensità per un raggio che attraversa uno spessore infinitesimalmente piccolo $dt$ è

$$dI = -\mu I \, dt.$$

**(a) ** [1 segno] In assenza di attenuazione, il segnale misurato lungo una linea arbitraria $\ell$ viene dato da

$$I = k \int_0^{\ell} A(x, y) \, ds.$$

Come si potrebbe modificare questo quando si tiene conto dell'attuazione? Supponiamo che non vi sia alcuna correzione geometrica per la distanza del punto di emissione dal rilevatore.

Considera ora la parte superiore del cranio dello Stag, approssimata da un'ellisse con semi-asse $a$ e $b$, distribuzione arbitraria della radioattività $A(R, \vartheta)$ nelle coordinate polari e un costante coefficiente di attenuazione $\mu$ (vedi figura 6).

![[PLANCKS_2024_p6_f2.png]]
*Figura 6: Ellisse con distribuzione arbitraria dell'attività e costante coefficiente di attenuazione.*

**(b) ** [3 segni] Scrivere un'espressione, in coordinate polari, per il segnale misurato da una linea che attraversa l'origine degli assi ad un angolo $\vartheta$ all'asse $x$.

Finora abbiamo assunto un rilevatore a puntine con risoluzione angolare infinita (cioè, rileva solo i fotoni emessi lungo una linea molto sottile). Il rilevatore ha ora un'apertura circolare di raggio $R$, come mostrato alla figura 7.

![[PLANCKS_2024_p6_f3.png]]
*Figura 7: Distribuzione dell'attività in un piano, con apertura circolare del rilevatore.*

Possiamo supporre che la radioattività sia ancora distribuita in un piano, ma che i fotoni siano emessi isotropicamente in una sfera.

**(c) ** [3 punti] Come cambierebbe la soluzione della parte b se avessimo un rilevatore con apertura circolare di raggio $R$?

Il diagramma della figura 8 mostra la scansione dello Stag, con un diffuso assorbimento "di fondo" di radionuclide e due "punti" che rappresentano i ciocchini di corna.

![[PLANCKS_2024_p6_f4.png]]
*Figura 8: Diagramma della scansione dello Stag.*

- I numeri del rilevatore misurati lungo le due linee parallele sono $I_1 = 1.23 \ \mathrm{s^{-1}}$ e $I_2 = 1.15 \ \mathrm{s^{-1}}$.
- Le due ciocche cornali possono essere trattate come puntate, con assorbimenti di radioattività $A_1$ e $A_2$. Se $A_1 = A_2$, le corna erano in crescita uniforme e lo Stag ora avrà sviluppato un paio di corna simmetriche.
- La radioattività/lunga dell'unità nel resto del cranio è $A_0 = 3000 \ \mathrm{Bq\,cm^{-1}}$.
- Il coefficiente di attenuazione del tessuto della testa è $0.27 \ \mathrm{cm^{-1}}$.
- $\ell_1 = 5.25$ cm, $\ell_2 = 11$ cm, $z_1 = 24.5$ cm e $z_2 = 12.5$ cm.
- Per questa parte della domanda, supponiamo di nuovo un rilevatore perfettamente collimato, con il rapporto tra i fotoni emessi nella direzione del rilevatore / fotoni totali emessi in ogni punto $k = 10^{-4}$.

**(d) ** [3 punti] Sulla base delle quantità sopra indicate, calcolare $A_1$ e $A_2$ e determinare se le corna del Stag crescevano uniformemente al momento della scansione.

**Fonte:** [Testo (PDF) — p.20](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Nuclear & Particle Physics]], [[Mathematics]]
**Metodi:** [[Radioactive Decay Law (metodo)|Radioactive Decay Law]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Physical Modeling (metodo)|Physical Modeling]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Photon (object)|Photon]], [[Nucleus (object)|Nucleus]]



<span class="atom-split" id="q07" data-atom="q07" data-title="PLANCKS 2024 — Dublin — Quesito 7" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/astrophysics,argomento/gravitazione-e-astrofisica,difficolta/5,multidisciplina/multi,object/black-hole,object/star,object/planet"></span>

<div class="qlang-switch" data-default="en"></div>



**Dark Matter in the Galaxy**

In a galaxy all objects inside orbit around its centre. At a point $r = 2.6 \times 10^4$ ly from the centre the measured velocity of orbit is $v_{\text{meas}} = 250 \ \mathrm{km\,s^{-1}}$. However, if we were to calculate the velocity of orbit at distance $r$ based on all the luminous matter in the galaxy, the value would be much lower, $v_{\text{calc}} = 15 \ \mathrm{km\,s^{-1}}$. Why is there such a large difference? It can only be possible if the galaxy had a lot more matter inside but it was hidden from view. The hidden matter is now called dark matter and we know it exists throughout the universe, even though we have no idea what it is.

Imagine you are an astronomer in this galaxy who is investigating dark matter in the galaxy's spherical halo.

Useful data:

- Gravitational constant, $G = 6.67 \times 10^{-11} \ \mathrm{N\,m^2\,kg^{-2}}$
- One light year, $1 \ \mathrm{ly} = 9.46 \times 10^{15}$ m
- One electron volt, $1 \ \mathrm{eV} = 1.602 \times 10^{-19}$ J

**(a)** [5 marks] Calculate the average dark matter density in this region of the galaxy. Give your answer in $\frac{\mathrm{GeV}}{c^2} \ \mathrm{cm^{-3}}$.

Your galaxy is in a universe where all the dark matter is made up of miniature black holes. These mini black holes are spread throughout a galaxy's spherical halo (like a dark matter halo).

The mini black holes orbit around the centre of the galaxy like every other object. Your planet sits approximately at distance $r$ from the centre of the galaxy. Through observation you notice that roughly once a year one of these mini black holes passes between you and your local star which you can assume is at distance $\sim 1$ AU to you.

Useful data:

- One astronomical unit, $1 \ \mathrm{AU} = 1.50 \times 10^{11}$ m
- Solar mass, $1 \ M_\odot = 2 \times 10^{30}$ kg

**(b)** [5 marks] What is the approximate mass of these miniature black holes? Give your answer in units of the Solar mass.

State any assumptions you have made to get to your answers.

**Fonte:** [Testo (PDF) — p.25](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Astrophysics]], [[Gravitation]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]], [[Kepler's Laws (metodo)|Kepler's Laws]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Unit Conversion (competenza)|Unit Conversion]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Black Hole (object)|Black Hole]], [[Star (object)|Star]], [[Planet (object)|Planet]]


<div class="qlang-split" data-lang="it"></div>

La materia oscura nella galassia

In una galassia tutti gli oggetti all'interno dell'orbita intorno al suo centro. A un punto $r = 2.6 \times 10^4$ ly dal centro la velocità di orbita misurata è $v_{\text{meas}} = 250 \ \mathrm{km\,s^{-1}}$. Tuttavia, se calcolassimo la velocità di orbita a distanza $r$ sulla base di tutta la materia luminosa nella galassia, il valore sarebbe molto inferiore, $v_{\text{calc}} = 15 \ \mathrm{km\,s^{-1}}$. Perché c'è una tale differenza? Può essere possibile solo se la galassia avesse molta più materia all'interno ma fosse nascosta alla vista. La materia nascosta si chiama ora materia oscura e sappiamo che esiste in tutto l'universo, anche se non abbiamo idea di cosa sia.

Immaginate di essere un astronomo in questa galassia che sta studiando la materia oscura nell'halo sferica della galassia.

Dati utili:

- Costante gravitazionale, $G = 6.67 \times 10^{-11} \ \mathrm{N\,m^2\,kg^{-2}}$
- Un anno luce, $1 \ \mathrm{ly} = 9.46 \times 10^{15}$ m
- Un volt elettronico, $1 \ \mathrm{eV} = 1.602 \times 10^{-19}$ J

**(a) ** [5 punti] Calcolare la densità media di materia oscura in questa regione della galassia. Rispondi in $\frac{\mathrm{GeV}}{c^2} \ \mathrm{cm^{-3}}$.

La vostra galassia è in un universo dove tutta la materia oscura è composta da miniature buchi neri. Questi mini buchi neri sono diffusi in tutto l'halo sferico di una galassia (come un halo di materia oscura).

I mini buchi neri orbitano intorno al centro della galassia come ogni altro oggetto. Il vostro pianeta si trova a una distanza approssimativa $r$ dal centro della galassia. Attraverso l'osservazione si nota che una volta all'anno uno di questi mini buchi neri passa tra voi e la vostra stella locale che si può presumere sia a distanza $\sim 1$ AU da voi.

Dati utili:

- Una unità astronomica, $1 \ \mathrm{AU} = 1.50 \times 10^{11}$ m
- Massa solare, $1 \ M_\odot = 2 \times 10^{30}$ kg

**(b) ** [5 punti] Qual è la massa approssimativa di questi buchi neri in miniatura? Di' la tua risposta in unità di massa solare.

Indicate le ipotesi che avete formulato per arrivare alle vostre risposte.

**Fonte:** [Testo (PDF) — p.25](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Astrophysics]], [[Gravitation]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]], [[Kepler's Laws (metodo)|Kepler's Laws]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Unit Conversion (competenza)|Unit Conversion]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Black Hole (object)|Black Hole]], [[Star (object)|Star]], [[Planet (object)|Planet]]



<span class="atom-split" id="q08" data-atom="q08" data-title="PLANCKS 2024 — Dublin — Quesito 8" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/circuits,argomento/elettromagnetismo,difficolta/5,multidisciplina/mono,object/resistor"></span>

<div class="qlang-switch" data-default="en"></div>



**Icosahedron of Resistors**

An icosahedron consists of 20 equilateral triangles. It has 12 vertices and 30 edges, with 5 edges meeting at each vertex. Figure 9 shows an icosahedron and its net.

![[PLANCKS_2024_p8_f1.png]]
*Figure 9: Icosahedron (left) and its 2D net (right).*

Now imagine that this icosahedron was a component in a circuit, where each edge of the icosahedron is a $1 \ \Omega$ resistor.

You may use the model icosahedron kit provided to you.

**(a)** [10 marks] Find the effective resistance between two adjacent vertices.

**Fonte:** [Testo (PDF) — p.27](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Symmetry Argument (metodo)|Symmetry Argument]], [[Superposition Principle (metodo)|Superposition Principle]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Resistor (object)|Resistor]]


<div class="qlang-split" data-lang="it"></div>

**Icosahedron di resistori**

Un icosaedro è composto da 20 triangoli equilaterali. Ha 12 vertici e 30 bordi, con 5 bordi che si incontrano a ciascun vertice. La figura 9 mostra un icosaedro e la sua rete.

![[PLANCKS_2024_p8_f1.png]]
*Figura 9: Icosahedron (a sinistra) e la sua rete 2D (a destra).*

Ora immaginate che questo icosaedro fosse un componente in un circuito, dove ogni bordo dell'icosaedro è una resistenza $1 \ \Omega$.

È possibile utilizzare il kit di icosahedron del modello fornito.

**a) ** [10 punti] Trova la resistenza effettiva tra due vertici adiacenti.

**Fonte:** [Testo (PDF) — p.27](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Symmetry Argument (metodo)|Symmetry Argument]], [[Superposition Principle (metodo)|Superposition Principle]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Resistor (object)|Resistor]]



<span class="atom-split" id="q09" data-atom="q09" data-title="PLANCKS 2024 — Dublin — Quesito 9" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/thermodynamics,argomento/termodinamica,difficolta/5,multidisciplina/multi"></span>

<div class="qlang-switch" data-default="en"></div>



**Molecular Zipper**

In the 1960s, Charles Kittel proposed a toy model to illustrate the physics of the separation of strands of DNA. The model consists of two long molecules coupled by $N$ links, with the following rules:

- Each link can be closed or open — and if open, they can be in one of $G$ orientations where $G > 0$ is an integer parameter of the model. There is only one way the link can be closed.
- If links 1 to $n$ are open, then link $n + 1$ can also open with energy cost $\epsilon > 0$. This is the basic idea of the zipper model — a link can only be open if all the ones before it are also open.
- The final link $n = N$ cannot be opened.

The final rule means that the model is a 'single-ended zipper' — which is a slight simplification of earlier models that could be 'unzipped' from both ends.

**(a)** [4 marks] Calculate the free energy of the model with $N$ links at a temperature $T$.

**(b)** [2 marks] Hence show that the model has a finite-temperature phase transition if $G > 1$, and find an expression for the transition temperature.

**(c)** [2 marks] Calculate the expected number of open links as a function of temperature, and show that this may be used as an order parameter for the phase transition.

**(d)** [2 marks] Come up with a physical explanation why one requires this extra degeneracy $G > 1$ in order to have a phase transition in the model.

**Fonte:** [Testo (PDF) — p.31](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Thermodynamics]], [[Biology]]
**Metodi:** [[Statistical Averaging (metodo)|Statistical Averaging]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Physical Modeling (metodo)|Physical Modeling]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —


<div class="qlang-split" data-lang="it"></div>

Sciacche di scatto

Negli anni '60, Charles Kittel propose un modello di giocattoli per illustrare la fisica della separazione di fili di DNA. Il modello è costituito da due molecole lunghe accoppiate da collegamenti $N$, con le seguenti regole:

- Ogni collegamento può essere chiuso o aperto  e, se aperto, può essere in uno degli orientamenti $G$ in cui $G > 0$ è un parametro di numero intero del modello. C'è solo un modo per chiudere il collegamento.
- Se sono aperti i collegamenti 1 a $n$, allora il collegamento $n + 1$ può essere aperto anche con costo energetico $\epsilon > 0$. Questa è l'idea di base del modello dello sportello  un collegamento può essere aperto solo se tutti quelli prima di esso sono aperti anche.
- Non è possibile aprire il collegamento finale $n = N$.

La regola finale significa che il modello è un "giubbotto a singolo termine"  che è una leggera semplificazione dei modelli precedenti che potrebbero essere "non bloccati" da entrambe le estremità.

**(a) ** [4 punti] Calcolare l'energia libera del modello con $N$ collegamenti a una temperatura $T$.

**(b) ** [2 segni] Indicare quindi che il modello ha una transizione di fase a temperatura finita se $G > 1$, e trovare un'espressione per la temperatura di transizione.

**(c) ** [2 punti] Calcolare il numero previsto di collegamenti aperti in funzione della temperatura e mostrare che questo può essere utilizzato come parametro di ordine per la transizione di fase.

**(d) ** [2 punti] Provate ad una spiegazione fisica del motivo per cui si richiede questa degenerazione extra $G > 1$ per avere una transizione di fase nel modello.

**Fonte:** [Testo (PDF) — p.31](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Thermodynamics]], [[Biology]]
**Metodi:** [[Statistical Averaging (metodo)|Statistical Averaging]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Physical Modeling (metodo)|Physical Modeling]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** —



<span class="atom-split" id="q10" data-atom="q10" data-title="PLANCKS 2024 — Dublin — Quesito 10" data-tags="kg/prova,paese/International,comp/PLANCKS,topic/thermodynamics,argomento/termodinamica,difficolta/5,multidisciplina/multi,object/star,object/photon"></span>

<div class="qlang-switch" data-default="en"></div>



**4D Sun**

Imagine you were transported to another universe with one more spatial dimension; everything appeared as 4D. In this problem, you will investigate if the light generated from the Sun would be different in this universe.

You may assume that the surface temperature of the Sun would not change from our universe and is approximately $T = 6 \times 10^3$ K.

Useful data:

- Boltzmann constant, $k_B = 1.38 \times 10^{-23} \ \mathrm{J\,K^{-1}}$
- Speed of light, $c = 3 \times 10^8 \ \mathrm{m\,s^{-1}}$

**(a)** [10 marks] What would the colour of the Sun be in this four-dimensional universe?

**Fonte:** [Testo (PDF) — p.35](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Thermodynamics]], [[Modern-Quantum Physics]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Statistical Averaging (metodo)|Statistical Averaging]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Star (object)|Star]], [[Photon (object)|Photon]]


<div class="qlang-split" data-lang="it"></div>

**4D Sole**

Immaginate di essere trasportati in un altro universo con un'altra dimensione spaziale; tutto appare come 4D. In questo problema, si esaminerà se la luce generata dal Sole sarebbe diversa in questo universo.

Si può supporre che la temperatura superficiale del Sole non cambierebbe dal nostro universo ed è circa $T = 6 \times 10^3$ K.

Dati utili:

- costante di Boltzmann, $k_B = 1.38 \times 10^{-23} \ \mathrm{J\,K^{-1}}$
- Velocità della luce, $c = 3 \times 10^8 \ \mathrm{m\,s^{-1}}$

Qual è il colore del Sole in questo universo quadrimensionale?

**Fonte:** [Testo (PDF) — p.35](https://drive.google.com/file/d/1CwwUdPEUeMbRrHpO__l9BdjGpmZJsYeY/view)
**Topic:** [[Thermodynamics]], [[Modern-Quantum Physics]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Statistical Averaging (metodo)|Statistical Averaging]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Star (object)|Star]], [[Photon (object)|Photon]]
