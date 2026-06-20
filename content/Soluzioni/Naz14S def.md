---
tipo: soluzione
solves: Naz14T def
prova_id: prova_Naz14S def
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: '2014'
level: Nazionale
pdf: Gara individuale/nazionale/teorica/naz2014th/Naz14S def.pdf
cluster: Meccanica
n_problemi: '20'
tags:
  - kg/prova
  - anno/2014
  - paese/Italia
  - comp/OII
  - cluster/Meccanica
---

# OII 2014 Nazionale Teorica — Naz14S def.pdf

> Documento di **soluzioni** (spostato da Prove). Testi: [[Naz14T def]].

**Fonte:** `Gara individuale/nazionale/teorica/naz2014th/Naz14S def.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Soluzione 1

PROBLEMA n.1 – Sbarra in caduta
Quesito n. 1.
Dalla legge della conservazione dell’energia abbiamo $\frac{1}{2}mv_0^2 = mgh$ e da qui $v_0 = \sqrt{2gh}$.

**Topic:** [[Conservation of Energy]], [[Newtonian Mechanics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1

## Soluzione 2

Quesito n. 2.
La forza $\vec{F}$ non ha componenti orizzontali, perché il pavimento è privo di attrito. La prima equazione
cardinale della dinamica si scrive
$$\frac{\Delta\vec{Q}}{\Delta t} = \vec{R}_\text{ext}$$
dove $\vec{Q}$ è la quantità di moto del corpo e $\vec{R}_\text{ext}$ è la risultante delle forze esterne. In presenza di forze impulsive,
tutte le altre forze (in questo caso il peso) agenti sul corpo diventano trascurabili, per cui possiamo porre, con
buona approssimazione, $\vec{R}_\text{ext} \approx \vec{F}$. Inoltre sappiamo che $\vec{Q} = m\vec{v}$, dove $\vec{v}$ è la velocità del CdM.
Dall’equazione precedente si ricava quindi
$$\vec{v}_1 = \vec{v}_0 + \frac{1}{m}\vec{F}\Delta t$$
Poiché né $\vec{v}_0$ né $\vec{F}$ hanno componenti orizzontali, nemmeno $\vec{v}_1$ ne avrà: questo significa che il CdM della
sbarra si muove verticalmente anche dopo l’urto. Orientando verso l’alto l’asse verticale, le componenti di $\vec{F}$ e
$\vec{v}_0$ risultano rispettivamente $F$ e $-v_0$. Indicando con $v_1$ la componente verticale di $\vec{v}_1$, di cui non conosciamo il
segno, dall’equazione precedente ricaviamo allora
$$F\Delta t = m(v_1 + v_0) \tag{1}$$
La seconda equazione cardinale si scrive
$$\frac{\Delta\vec{L}}{\Delta t} = \vec{M}_\text{ext}$$
dove $\vec{L}$ è il momento angolare della sbarra, che scegliamo di calcolare rispetto al CdM, e $\vec{M}_\text{ext}$ è il risultante dei
momenti delle forze esterne (rispetto allo stesso punto). Per quanto detto sopra, possiamo approssimare questo
momento con il momento di $\vec{F}$.
Per un corpo rigido, e in questo caso, il momento angolare baricentrale è $\vec{L} = I\vec{\omega}$, dove $I$ è il momento
d’inerzia baricentrale e $\vec{\omega}$ la velocità angolare(1). Tenendo conto del fatto che prima dell’urto si ha $L = 0$ e
$\omega = 0$, e indicando con il pedice 1 i valori immediatamente dopo l’urto, si ha quindi
$$\vec{L}_1 = \vec{M}_\text{ext}\,\Delta t \quad\Rightarrow\quad I\omega_1 = F\frac{\ell}{2}\cos\alpha\,\Delta t \tag{2}$$
Poiché l’urto è elastico, l’energia cinetica si conserva, quindi
$$\frac{1}{2}I\omega_1^2 + \frac{1}{2}mv_1^2 = \frac{1}{2}mv_0^2 \tag{3}$$
(1)
Questa relazione è vera quando l’asse di rotazione è fisso oppure, come in questo caso, quando il momento angolare è allineato
con un asse di simmetria (asse principale d’inerzia).

**Topic:** [[Newtonian Mechanics]], [[Rotational Dynamics]], [[Conservation of Momentum]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1

## Soluzione 3

Quesito n. 3.
Dalla (1) e dalla (2) si ottiene
$$I\omega_1 = \frac{\ell}{2}\cos\alpha\,m(v_1 + v_0) \tag{4}$$
e la (3) si può riscrivere
$$I\omega_1^2 = m(v_0^2 - v_1^2) \tag{5}$$
Poiché la velocità del CdM dopo l’urto ($v_1$) è certamente diversa da quella prima dell’urto ($-v_0$), possiamo
dividere la (5) per la (4) ottenendo
$$\omega_1 = 2(v_0 - v_1)/(\ell\cos\alpha) \tag{6}$$
Risolvendo il sistema formato dalla (4) e la (6) si ottiene (ricordando l’espressione di $I$)
$$v_1 = \frac{1 - 3\cos^2\alpha}{1 + 3\cos^2\alpha}\,v_0$$
$$\omega_1 = \frac{12\cos\alpha}{\ell(1 + 3\cos^2\alpha)}\,v_0$$

**Topic:** [[Newtonian Mechanics]], [[Rotational Dynamics]], [[Conservation of Momentum]]
**Metodi:** [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Conservation Laws (metodo)|Conservation Laws]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Soluzione 4

Quesito n. 4.
Come abbiamo visto, $\vec{v}_1$ non ha componenti orizzontali, quindi il CdM si muove ancora verticalmente, dopo
l’urto, di moto rettilineo uniformemente accelerato, con accelerazione $\vec{g}$.(2) Ci sono due casi qualitativamente
diversi, a seconda che $\vec{v}_1$ sia rivolto verso l’alto o verso il basso.

**Topic:** [[Newtonian Mechanics]], [[Rotational Dynamics]], [[Conservation of Momentum]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Soluzione 5

Quesito n. 5.
Se l’inclinazione della sbarra deve essere la stessa nel momento del secondo urto, è necessario che il CdM si
trovi alla stessa altezza del primo urto. Questo è impossibile se, dopo il primo urto, il CdM continua a scendere,
cioè se $v_1 < 0$.
Questa condizione si verifica se $1 - 3\cos^2\alpha < 0 \Rightarrow 0 < \alpha < 54.7^\circ$.

**Topic:** [[Newtonian Mechanics]], [[Rotational Dynamics]], [[Conservation of Momentum]]
**Metodi:** [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Conservation Laws (metodo)|Conservation Laws]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Soluzione 6

Quesito n. 6.
Nel momento del secondo urto il CdM si trova all’altezza del primo urto. Questo è possibile, come detto
prima, solo se $v_1 > 0$ e quindi per $54.7^\circ < \alpha < 90^\circ$.
In questo caso il tempo impiegato a ruotare di un angolo $2\alpha$, poiché il moto è un moto circolare uniforme, è
$t_1 = 2\alpha/\omega_1$ e deve essere uguale al tempo impiegato dal CdM a raggiungere l’apice della traiettoria e ridiscendere
$t_2 = 2v_1/g$.
Dall’uguaglianza, tenuto conto del risultato della prima domanda si ottiene
$$\frac{h}{\ell} = \frac{\alpha(1 + 3\cos^2\alpha)^2}{24\cos\alpha(1 - 3\cos^2\alpha)}$$

**Topic:** [[Newtonian Mechanics]], [[Rotational Dynamics]], [[Conservation of Momentum]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Conservation Laws (metodo)|Conservation Laws]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Soluzione 7

Quesito n. 7.
Dalla formula precedente si ottiene
$$h = \frac{\alpha(3\cos^2\alpha + 1)^2\,\ell}{24\cos\alpha(1 - 3\cos^2\alpha)} = 2.14\ \text{m}$$
RIS $\Rightarrow$ $2.09 \leq h_f \leq 2.19$ [ m ]
(2)
Si noti che per questa conclusione è essenziale supporre, come abbiamo fatto, che l’attrito sia nullo.
In presenza di un
coefficiente di attrito statico diverso da zero, per quanto piccolo, ci sarà una componente orizzontale della forza impulsiva e di
conseguenza una componente orizzontale di $\vec{v}_1$. Il moto che ne risulterà sarà quindi parabolico.

PROBLEMA n.2 – Trasformazione termodinamica

**Topic:** [[Newtonian Mechanics]], [[Rotational Dynamics]], [[Conservation of Momentum]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Conservation Laws (metodo)|Conservation Laws]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Soluzione 8

Quesito n. 1.
La temperatura iniziale del gas è $20\ ^\circ\text{C} = 293.15$ K (accettabile anche 293 K). Il volume iniziale è $V_0 = Sh_0 = 1000\ \text{cm}^3$. La pressione iniziale è
$$p_0 = p_\text{atm} + \rho_\text{Hg}\,g\,H_0 = 367.0\ \text{kPa}$$
RIS $\Rightarrow$ $366.2 \leq p_0 \leq 367.8$ [ kPa ]

**Topic:** [[Thermodynamics]], [[Fluid Mechanics]]
**Metodi:** [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.3

## Soluzione 9

Quesito n. 2.
Nello stato finale, il volume è $V_f = 2V_0 = 2000\ \text{cm}^3$. Il pistone si sarà quindi sollevato di un tratto $\Delta h = 10$ cm.
La superficie libera del mercurio sarà scesa allora di un tratto $9\Delta h$, e di conseguenza l’altezza del mercurio varia
di $\Delta H = -10\Delta h$. L’altezza finale del mercurio risulta quindi $H_f = H_0 + \Delta H = 1.00$ m, e la pressione finale del
gas è
$$p_f = p_\text{atm} + \rho_\text{Hg}\,g\,H_f = 234.2\ \text{kPa}$$
RIS $\Rightarrow$ $233.8 \leq p_f \leq 234.6$ [ kPa ]
Dall’equazione di stato dei gas perfetti si ha
$$\frac{p_f V_f}{T_f} = \frac{p_0 V_0}{T_0} \quad\Rightarrow\quad T_f = \frac{p_f V_f}{p_0 V_0}T_0 = 374.1\ \text{K}$$
RIS $\Rightarrow$ $373.5 \leq T_f \leq 375.7$ [ K ]

**Topic:** [[Thermodynamics]], [[Fluid Mechanics]]
**Metodi:** [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.3

## Soluzione 10

Quesito n. 3.
La variazione di volume del gas è legata al sollevamento del pistone: $\Delta V = S\Delta h$. La variazione di pressione
è legata alla variazione dell’altezza del mercurio: $\Delta p = \rho_\text{Hg}\,g\,\Delta H = -10\rho_\text{Hg}\,g\,\Delta h$. Di conseguenza, il rapporto
$\Delta p/\Delta V$ è costante e risulta $\Delta p/\Delta V = -k$ con
$$k = 10\frac{\rho_\text{Hg}\,g}{S} = 1.328 \times 10^8\ \text{Pa}\,\text{m}^{-3}$$
RIS $\Rightarrow$ $1.324 \leq k \leq 1.332$ [ $10^8\ \text{Pa}\,\text{m}^{-3}$ ]
La trasformazione è quindi rappresentata nel piano cartesiano da una retta passante per $(V_0, p_0)$ e di coefficiente
angolare $-k$
$$p - p_0 = -k(V - V_0) \quad\Rightarrow\quad p(V) = -kV + p_0 + kV_0$$

**Topic:** [[Thermodynamics]], [[Fluid Mechanics]]
**Metodi:** [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.3

## Soluzione 11

Quesito n. 4.
Il lavoro è dato dall’area tratteggiata nella figura precedente:
$$L = \frac{p_0 + p_f}{2}(2V_0 - V_0) = \frac{p_0 + p_f}{2}V_0 = 300.6\ \text{J}$$
RIS $\Rightarrow$ $299.0 \leq L \leq 302.2$ [ J ]
La variazione di energia interna risulta
$$\Delta U = nc_V\,\Delta T = \frac{5}{2}(p_f(2V_0) - p_0V_0) = \frac{5}{2}(2p_f - p_0)V_0 = \frac{5}{2}p_\text{atm}V_0 = 253.3\ \text{J}$$
RIS $\Rightarrow$ $252.1 \leq \Delta U \leq 254.5$ [ J ]
Infine
$$Q = L + \Delta U = 553.9\ \text{J}$$
In funzione dei dati del problema, l’espressione di $Q$ risulta
$$Q = V_0\left(\frac{7}{2}p_\text{atm} + \frac{3}{4}\rho_\text{Hg}\,g\,H_0\right)$$

**Topic:** [[Thermodynamics]], [[Fluid Mechanics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]], [[Ideal Gas Law (metodo)|Ideal Gas Law]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.3

## Soluzione 12

Quesito n. 5.
Poiché il calore è fornito ad una potenza costante, la durata della trasformazione sarà
$$\Delta t = \frac{Q}{P} = 276.9\ \text{s}$$
RIS $\Rightarrow$ $275.7 \leq \Delta t \leq 278.1$ [ s ]

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Ideal Gas Law (metodo)|Ideal Gas Law]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.4

## Soluzione 13

Quesito n. 6.
Considerando l’equazione di stato dei gas perfetti, nel processo di trasformazione descritto nel problema la
temperatura dipende dal volume, secondo la relazione
$$T(V) = \frac{pV}{nR} = \frac{T_0}{p_0V_0}\left[-kV^2 + (p_0 + kV_0)V\right]$$
dunque è una parabola con la concavità rivolta verso il basso e la temperatura sarà massima nel punto di vertice
della parabola.
Ricordando dalla geometria analitica che il vertice di una parabola di equazione $y(x) = ax^2 + bx + c$ ha
coordinate: $x_V = -b/(2a)$, $y_V = -\Delta/(4a)$, si ha
$$V(T_M) = \frac{1}{2}\left(V_0 + \frac{p_0}{k}\right) = 1881\ \text{cm}^3$$
RIS $\Rightarrow$ $1875 \leq V(T_M) \leq 1887$ [ cm$^3$ ]
$$T_M = \frac{(p_0 + kV_0)^2\,T_0}{4kp_0V_0} = 375.6\ \text{K}$$
RIS $\Rightarrow$ $372.6 \leq T_M \leq 378.6$ [ K ]

**Topic:** [[Thermodynamics]]
**Metodi:** [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.4

## Soluzione 14

Quesito n. 7.
In un intervallo di tempo infinitesimo $dt$, il gas riceve la quantità di calore $dQ = P\,dt$. Per il primo principio
della termodinamica, si ha
$$dQ = dL + dU = p\,dV + \frac{5}{2}nR\,dT = p\,dV + \frac{5}{2}d(pV) =$$
$$= p\,dV + \frac{5}{2}(p\,dV + V\,dp) = \frac{7}{2}p\,dV + \frac{5}{2}V\,dp = \frac{7p - 5kV}{2}\,dV$$
Poiché $dV = S\,dh$, abbiamo:
$$P\,dt = \frac{7p - 5kV}{2}S\,dh$$
e quindi la velocità con cui sale il pistone è
$$v = \frac{dh}{dt} = \frac{2P}{(7p - 5kV)S} = \frac{2P}{(7p_0 + 7kV_0 - 12kV)S}$$
Nello stato finale la velocità del pistone sarà dunque
$$v_f = \frac{2P}{(7p_0 - 17kV_0)S} = 1.29\ \text{mm}\,\text{s}^{-1}$$
RIS $\Rightarrow$ $1.26 \leq v_f \leq 1.32$ [ mm s$^{-1}$ ]
Osserviamo incidentalmente che l’espressione della velocità diverge per $V \to (7/12)(V_0 + p_0/k) = 2193\ \text{cm}^3$,
quindi questa trasformazione non potrebbe continuare con queste modalità fino a questo valore.

PROBLEMA n.3 – Pendolo elettrostatico

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Differential Equations (metodo)|Differential Equations]], [[Ideal Gas Law (metodo)|Ideal Gas Law]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.4

## Soluzione 15

Quesito n. 1.
Quando P è lontana da A, questa si è caricata completamente e si è portata al potenziale $V$ rispetto alla
terra. Poiché può essere trattata come una sfera isolata, la relazione tra carica e potenziale è
$$V = \frac{1}{4\pi\varepsilon_0}\frac{Q_A}{r}$$
da cui
$$Q_A = 4\pi\varepsilon_0 rV$$
Quando P è lontana da B, questa si è completamente scaricata a terra, per cui $Q_B = 0$.
Il valore numerico di $Q_A$ risulta 4.451 nC
RIS $\Rightarrow$ $4.433 \leq Q_A \leq 4.469$ [ nC ]

**Topic:** [[Electrostatics]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Electric Potential Method (metodo)|Electric Potential Method]], [[Gauss's Law (metodo)|Gauss's Law]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.5

## Soluzione 16

Quesito n. 2.
Quando P si muove da A a B (“all’andata”), la sua carica è $q_1$. Quando urta B, questa si è scaricata
completamente, e quindi la sua carica è zero. Durante il contatto fra le due sfere identiche la carica si ripartisce
fra esse in misura eguale, per motivi di simmetria, e quindi la carica trasportata da P al ritorno sarà $q_2 = q_1/2$.
Quando urta A (che nel frattempo si è ricaricata e dunque ha carica $Q_A$), la carica complessiva $Q_A + q_1/2$ si
ripartisce in modo uguale tra A e P, e dunque P ne prende la metà. Se siamo all’equilibrio, questa carica sarà
uguale a $q_1$:
$$\frac{1}{2}\left(Q_A + \frac{1}{2}q_1\right) = q_1 \quad\Rightarrow\quad q_1 = \frac{2}{3}Q_A \quad\text{e}\quad q_2 = \frac{1}{3}Q_A$$
I valori numerici sono:
$q_1 = 2.967$ nC
RIS $\Rightarrow$ $2.956 \leq q_1 \leq 2.978$ [ nC ]
$q_2 = 1.484$ nC
RIS $\Rightarrow$ $1.478 \leq q_2 \leq 1.490$ [ nC ]

**Topic:** [[Electrostatics]]
**Metodi:** [[Electric Potential Method (metodo)|Electric Potential Method]], [[Coulomb's Law (metodo)|Coulomb's Law]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.5

## Soluzione 17

Quesito n. 3.
In definitiva, ad ogni oscillazione viene trasferita la quantità di carica $Q_A/3$ da A a B. Poiché il periodo $T$
delle oscillazioni è 1/95 di minuto, l’intensità di corrente media risulta:
$$I = Q_A/3T = 2.349\ \text{nA}$$
RIS $\Rightarrow$ $2.335 \leq I \leq 2.363$ [ nA ]
La resistenza equivalente $R_e$ sarà:
$$R_e = V/I = 851\ \text{G}\Omega$$
RIS $\Rightarrow$ $847 \leq R_e \leq 855$ [ G$\Omega$ ]

**Topic:** [[Electrostatics]], [[Circuits]]
**Metodi:** [[Electric Potential Method (metodo)|Electric Potential Method]], [[Coulomb's Law (metodo)|Coulomb's Law]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.5

## Soluzione 18

Quesito n. 4.
In figura è rappresentato lo schema del circuito equivalente.
La corrente parassita risulta:
$$I_p = V/R_p = 200.0\ \text{nA}$$
RIS $\Rightarrow$ $199.2 \leq I_p \leq 200.8$ [ nA ]
Questo valore è 85 volte più grande di $I$. È chiaro quindi che il processo dominante che contribuisce a scaricare
il generatore è la corrente parassita, e non quella che passa attraverso il pendolo.

**Topic:** [[Electrostatics]], [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Electric Potential Method (metodo)|Electric Potential Method]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.5

## Soluzione 19

Quesito n. 5.
La corrente totale che attraversa il generatore è $I_t = I + I_p$
La carica totale che attraversa il generatore nel tempo $\Delta t$ sarà allora
$$Q_t = I_t\Delta t = V\Delta t\left(\frac{4\pi\varepsilon_0 r}{3T} + \frac{1}{R_p}\right) = 6.39\ \text{C}$$
RIS $\Rightarrow$ $6.35 \leq Q_t \leq 6.43$ [ C ]
Se per ogni molecola di elettrolita sono in gioco 2 cariche elementari, detta $n$ la quantità di elettrolita espressa
in moli, il numero di molecole è $N = N_A n$, essendo $N_A$ la costante di Avogadro, e la carica totale si può scrivere
come $Q_t = 2e N_A n$. Ne segue che
$$n = Q_t/2eN_A = 33.1\ \mu\text{mol}$$
RIS $\Rightarrow$ $32.9 \leq n \leq 33.4$ [ $\mu\text{mol}$ ]

**Topic:** [[Electrostatics]], [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Electric Potential Method (metodo)|Electric Potential Method]], [[Coulomb's Law (metodo)|Coulomb's Law]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.6

## Soluzione 20

Quesito n. 6.
La potenza fornita dal generatore è $P_g = I_t V$. La quantità di energia erogata ad ogni oscillazione sarà quindi
$$E = P_g T = I_t V T = 256\ \mu\text{J}$$
RIS $\Rightarrow$ $253 \leq E \leq 259$ [ $\mu\text{J}$ ]
Nota storica:
All’inizio del secolo XIX, subito dopo l’invenzione della pila da parte di Volta, fiorirono numerosi dispositivi
più o meno ingegnosi che sfruttavano il nuovo potente “generatore perpetuo di elettricità”, come lo chiamò Volta
stesso. Fra i più curiosi, c’è un interessante “orologio elettrostatico”, ancora conservato nel museo di Storia
dell’Arte di Modena, ideato da un geniale costruttore di pile veneto contemporaneo di Volta, l’abate Zamboni.
Le sfere metalliche sulle due aste sono collegate ad un vero e proprio generatore elettrostatico costruito da
Zamboni mettendo in serie dentro un tubo di vetro circa un migliaio di pile a secco preparate con una “ricetta”
particolare sviluppata da Zamboni stesso. Il generatore elettrostatico poteva raggiungere 2000 V; non era di
grande utilità perché poteva produrre correnti molto basse, però poteva essere usato per effetti elettrostatici.
Secondo i documenti storici, il pendolo funzionò senza fermarsi né aver bisogno di essere ricaricato per più
di 100 anni! Mentre però all’inizio il pendolo faceva 95 oscillazioni al minuto, alla fine ne faceva solo 45.

**Topic:** [[Electrostatics]], [[Circuits]], [[Conservation of Energy]]
**Metodi:** [[Electric Potential Method (metodo)|Electric Potential Method]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.6
