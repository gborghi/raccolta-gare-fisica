---
title: APhO 2001 - Teorica
tipo: prova
tags:
  - kg/prova
  - paese/Asia
  - comp/APhO
---
<div class="atom-reader" data-prova="apho_2001_theory"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="APhO 2001 - Teorica - Quesito 1" data-tags="kg/prova,paese/Asia,comp/APhO,cluster/Gravitazione e Astrofisica,topic/gravitation,argomento/gravitazione-e-astrofisica,difficolta/5,multidisciplina/multi,object/planet,object/satellite"></span>

<div class="qlang-switch" data-default="en"></div>



**When will the Moon become a Synchronous Satellite?**

The period of rotation of the Moon about its axis is currently the same as its period of revolution about the Earth so that the same side of the Moon always faces the Earth. The equality of these two periods presumably came about because of actions of tidal forces over the long history of the Earth-Moon system.

However, the period of rotation of the Earth about its axis is currently shorter than the period of revolution of the Moon. As a result, lunar tidal forces continue to act in a way that tends to slow down the rotational speed of the Earth and drive the Moon itself further away from the Earth.

In this question, we are interested in obtaining an estimate of how much more time it will take for the rotational period of the Earth to become equal to the period of revolution of the Moon. The Moon will then become a synchronous satellite, appearing as a fixed object in the sky and visible only to those observers on the side of the Earth facing the Moon. We also want to find out how long it will take for the Earth to complete one rotation when the said two periods are equal.

Two right-handed rectangular coordinate systems are adopted as reference frames. The third coordinate axes of these two systems are parallel to each other and normal to the orbital plane of the Moon.

- (I) The first frame, called the CM frame, is an inertial frame with its origin located at the center of mass $C$ of the Earth-Moon system.
- (II) The second frame, called the $xyz$ frame, has its origin fixed at the center $O$ of the Earth. Its $z$-axis coincides with the axis of rotation of the Earth. Its $x$-axis is along the line connecting the centers of the Moon and the Earth, and points in the direction of the unit vector $\hat{r}$ as shown in Fig. 1a. The Moon remains always on the negative $x$-axis in this frame.

Note that distances in Fig. 1a are not drawn to scale. The curved arrows show the directions of the Earth's rotation and the Moon's revolution. The Earth-Moon distance is denoted by $r$.

<!--fig:start-->
![[_attachments/APhO_2001_theory/APhO_2001_theory_q01_f1.png]]
<!--fig:end-->

The following data are given:

- (a) At present, the distance between the Moon and the Earth is $r_0 = 3.85 \times 10^{8}\ \text{m}$ and increases at a rate of 0.038 m per year.
- (b) The period of revolution of the Moon is currently $T_M = 27.322$ days.
- (c) The mass of the Moon is $M = 7.35 \times 10^{22}\ \text{kg}$.
- (d) The radius of the Moon is $R_M = 1.74 \times 10^{6}\ \text{m}$.
- (e) The period of rotation of the Earth is currently $T_E = 23.933$ hours.
- (f) The mass of the Earth is $M_E = 5.97 \times 10^{24}\ \text{kg}$.
- (g) The radius of the Earth is $R_E = 6.37 \times 10^{6}\ \text{m}$.
- (h) The universal gravitational constant is $G = 6.67259 \times 10^{-11}\ \text{N}\cdot\text{m}^2/\text{kg}^2$.

The following assumptions may be made when answering questions:

- (i) The Earth-Moon system is isolated from the rest of the universe.
- (ii) The orbit of the Moon about the Earth is circular.
- (iii) The axis of rotation of the Earth is perpendicular to the orbital plane of the Moon.
- (iv) If the Moon is absent and the Earth does not rotate, then the mass distribution of the Earth is spherically symmetric and the radius of the Earth is $R_E$.
- (v) For the Earth or the Moon, the moment of inertia $I$ about any axis passing through its center is that of a uniform sphere of mass $M$ and radius $R$, i.e. $I = \frac{2}{5}MR^2$.
- (vi) The water around the Earth is stationary in the $xyz$ frame.

Answer the following questions:

- (1) With respect to the center of mass $C$, what is the current value of the total angular momentum $L$ of the Earth-Moon system?
- (2) When the period of rotation of the Earth and the period of revolution of the Moon become equal, what is the duration of one rotation of the Earth? Denote the answer as $T$ and express it in units of the present day. Only an approximate solution is required so that iterative methods may be used.
- (3) Consider the Earth to be a rotating solid sphere covered with a surface layer of water and assume that, as the Moon moves around the Earth, the water layer is stationary in the $xyz$-frame. In one model, frictional forces between the rotating solid sphere and the water layer are taken into account. The faster spinning solid Earth is assumed to drag lunar tides along so that the line connecting the tidal bulges is at an angle $\delta$ with the $x$-axis, as shown in Fig. 1b. Consequently, lunar tidal forces acting on the Earth will exert a torque $\Gamma$ about $O$ to slow down the rotation of the Earth.

The angle $\delta$ is assumed to be constant and independent of the Earth-Moon distance $r$ until it vanishes when the Moon's revolution is synchronous with the Earth's rotation so that frictional forces no longer exist. The torque $\Gamma$ therefore scales with the Earth-Moon distance and is proportional to $r^{-6}$.

According to this model, when will the rotation of the Earth and the revolution of the Moon have the same period? Denote the answer as $t_f$ and express it in units of the present year.

<!--fig:start-->
![[_attachments/APhO_2001_theory/APhO_2001_theory_q01_f2.png]]
<!--fig:end-->

The following mathematical formulae may be useful when answering questions:

(M1) For $0 \leq s < r$ and $x = s\cos\theta$:
$$\frac{1}{\sqrt{r^2 + s^2 + 2rx}} \approx \frac{1}{r} - \frac{x}{r^2} + \frac{3x^2 - s^2}{2r^3} + \cdots$$

(M2) If $a \neq 0$ and $\displaystyle \frac{d\omega}{dt} = b\,\omega^{1-a}$, then $\omega^{a}(t') - \omega^{a}(t) = (t' - t)\,a\,b$.

**Topic:** [[Gravitation]], [[Rotational Dynamics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Kepler's Laws (metodo)|Kepler's Laws]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Planet (object)|Planet]], [[Satellite (object)|Satellite]]
**Fonte:** [Testo (PDF) - p.1](https://drive.google.com/file/d/1ki0tCMwFMAC56prmn1amslcO4KRfUGeb/view)


<div class="qlang-split" data-lang="it"></div>

Quando la Luna diventerà un satellite sincrono?

Il periodo di rotazione della Luna intorno al suo asse è attualmente lo stesso del suo periodo di rivoluzione intorno alla Terra in modo che lo stesso lato della Luna sia sempre rivolto verso la Terra. L'uguaglianza di questi due periodi è probabilmente avvenuta a causa delle azioni delle forze delle maree nel lungo periodo della storia del sistema Terra-Luna.

Tuttavia, il periodo di rotazione della Terra intorno al suo asse è attualmente più breve del periodo di rivoluzione della Luna. Di conseguenza, le forze di marea lunare continuano ad agire in un modo che tende a rallentare la velocità di rotazione della Terra e a allontanare la Luna stessa dalla Terra.

In questa domanda, siamo interessati a ottenere una stima di quanto tempo ci vorrà ancora per il periodo di rotazione della Terra per diventare uguale al periodo di rivoluzione della Luna. La Luna diventerà quindi un satellite sincrono, apparendo come un oggetto fisso nel cielo e visibile solo agli osservatori sul lato della Terra rivolto alla Luna. Vogliamo anche scoprire quanto tempo ci vorrà per la Terra per completare una rotazione quando i due periodi sono uguali.

Due sistemi di coordinate rettangolari a destra sono adottati come cornici di riferimento. I tre assi di coordinate di questi due sistemi sono paralleli l'uno all'altro e normali al piano orbitale della Luna.

- (I) Il primo quadro, chiamato quadro CM, è un quadro inerziale con la sua origine situata al centro di massa $C$ del sistema Terra-Luna.
- (II) Il secondo telaio, chiamato telaio $xyz$, ha la sua origine fissa al centro $O$ della Terra. Il suo asse $z$ coincide con l'asse di rotazione della Terra. Il suo asse $x$ è lungo la linea che collega i centri della Luna e della Terra e punta nella direzione del vettore unitario $\hat{r}$ come mostrato nella figura. 1a. La Luna rimane sempre sull'asse negativo $x$ in questo quadro.

Nota che le distanze in Figura. 1a non sono stati elaborati in scala. Le frecce curve mostrano le direzioni della rotazione della Terra e della rivoluzione della Luna. La distanza Terra-Luna è indicata da $r$.

<!--fig:start-->
![[_attachments/APhO_2001_theory/APhO_2001_theory_q01_f1.png]]
<!--fig:end-->

I dati seguenti sono riportati:

- (a) Attualmente la distanza tra la Luna e la Terra è $r_0 = 3.85 \times 10^{8}\ \text{m}$ e aumenta a un ritmo di 0,038 m all'anno.
- (b) Il periodo di rivoluzione della Luna è attualmente $T_M = 27.322$ giorni.
- (c) La massa della Luna è $M = 7.35 \times 10^{22}\ \text{kg}$.
- (d) Il raggio della Luna è $R_M = 1.74 \times 10^{6}\ \text{m}$.
- (e) Il periodo di rotazione della Terra è attualmente $T_E = 23.933$ ore.
- (f) La massa della Terra è $M_E = 5.97 \times 10^{24}\ \text{kg}$.
- (g) Il raggio della Terra è $R_E = 6.37 \times 10^{6}\ \text{m}$.
- (h) La costante gravitazionale universale è $G = 6.67259 \times 10^{-11}\ \text{N}\cdot\text{m}^2/\text{kg}^2$.

Le seguenti ipotesi possono essere prese quando si rispondono alle domande:

- (i) Il sistema Terra-Luna è isolato dal resto dell'universo.
- (ii) L'orbita della Luna intorno alla Terra è circolare.
- (iii) L'asse di rotazione della Terra è perpendicolare al piano orbitale della Luna.
- (iv) Se la Luna è assente e la Terra non ruota, la distribuzione di massa della Terra è sferica e il raggio di radio della Terra è $R_E$.
- (v) Per la Terra o la Luna, il momento di inerzia $I$ su qualsiasi asse che attraversa il suo centro è quello di una sfera uniforme di massa $M$ e di raggio $R$, cioè $I = \frac{2}{5}MR^2$.
- (vi) L'acqua intorno alla Terra è stazionaria nel quadro $xyz$.

Rispondi alle seguenti domande:

- (1) Per quanto riguarda il centro di massa $C$, qual è il valore corrente del momento angolare totale $L$ del sistema Terra-Luna?
- (2) Quando il periodo di rotazione della Terra e il periodo di rivoluzione della Luna diventano uguali, quale è la durata di una rotazione della Terra? Nota la risposta come $T$ e esprimila in unità di oggi. È necessaria solo una soluzione approssimativa per poter utilizzare metodi iterativi.
- (3) Considerare la Terra come una sfera solida rotante coperta da uno strato superficiale di acqua e supporre che, mentre la Luna si muove attorno alla Terra, lo strato idrico sia stazionario nel quadro $xyz$. In un modello, si prendono in considerazione le forze di attrito tra la sfera solida rotante e lo strato idrico. Si presume che la Terra solida che ruota più velocemente trascinerà le maree lunari lungo il percorso in modo che la linea che collega le protuberanze di marea sia ad un angolo $\delta$ con l'asse $x$, come mostrato nella figura. 1b. Di conseguenza, le forze di marea lunare che agiscono sulla Terra eserciteranno una coppia $\Gamma$ di circa $O$ per rallentare la rotazione della Terra.

Si presume che l'angolo $\delta$ sia costante e indipendente dalla distanza Terra-Luna $r$ fino a quando non scompare quando la rivoluzione della Luna è sincrona con la rotazione della Terra in modo che le forze di attrito non esistano più. La coppia $\Gamma$ si esaurisce quindi con la distanza Terra-Luna e è proporzionale a $r^{-6}$.

Secondo questo modello, quando la rotazione della Terra e la rivoluzione della Luna avranno lo stesso periodo? Indicare la risposta come $t_f$ e esprimere in unità dell'anno in corso.

<!--fig:start-->
![[_attachments/APhO_2001_theory/APhO_2001_theory_q01_f2.png]]
<!--fig:end-->

Le seguenti formule matematiche possono essere utili per rispondere alle domande:

(M1) Per $0 \leq s < r$ e $x = s\cos\theta$:
$$\frac{1}{\sqrt{r^2 + s^2 + 2rx}} \approx \frac{1}{r} - \frac{x}{r^2} + \frac{3x^2 - s^2}{2r^3} + \cdots$$

(M2) Se $a \neq 0$ e $\displaystyle \frac{d\omega}{dt} = b\,\omega^{1-a}$, allora $\omega^{a}(t') - \omega^{a}(t) = (t' - t)\,a\,b$.

**Topic:** [[Gravitation]], [[Rotational Dynamics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Kepler's Laws (metodo)|Kepler's Laws]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Planet (object)|Planet]], [[Satellite (object)|Satellite]]
**Fonte:** [Testo (PDF) - p.1](https://drive.google.com/file/d/1ki0tCMwFMAC56prmn1amslcO4KRfUGeb/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="APhO 2001 - Teorica - Quesito 2" data-tags="kg/prova,paese/Asia,comp/APhO,cluster/Elettromagnetismo,topic/electromagnetism,argomento/elettromagnetismo,difficolta/5,multidisciplina/multi,object/point-charge,object/rod"></span>

<div class="qlang-switch" data-default="en"></div>



**Motion of an Electric Dipole in a Magnetic Field**

In the presence of a constant and uniform magnetic field $\vec{B}$, the translational motion of a system of electric charges is coupled to its rotational motion. As a result, the conservation laws for the momentum and the component of the angular momentum along the direction of $\vec{B}$ are modified from the usual form. This is illustrated in this problem by considering the motion of an electric dipole made of two particles of equal mass $m$ and carrying charges $q$ and $-q$ respectively ($q > 0$). The two particles are connected by a rigid insulating rod of length $\ell$, the mass of which can be neglected. Let $\vec{r}_1$ be the position vector of the particle with charge $q$, $\vec{r}_2$ that of the other particle and $\vec{\ell} = \vec{r}_1 - \vec{r}_2$. Denote by $\vec{\omega}$ the angular velocity of the rotation around the center of mass of the dipole. Denote by $\vec{r}_{CM}$ and $\vec{v}_{CM}$ the position and the velocity vectors of the center of mass respectively. Relativistic effects and effects of electromagnetic radiation can be neglected.

Note that the magnetic force acting on a particle of charge $q$ and velocity $\vec{v}$ is $q\,\vec{v} \times \vec{B}$, where the cross product of two vectors $\vec{A}_1 \times \vec{A}_2$ is defined, in terms of the $x, y, z$ components of the vectors, by

$$(\vec{A}_1 \times \vec{A}_2)_x = (\vec{A}_1)_y (\vec{A}_2)_z - (\vec{A}_1)_z (\vec{A}_2)_y,$$
$$(\vec{A}_1 \times \vec{A}_2)_y = (\vec{A}_1)_z (\vec{A}_2)_x - (\vec{A}_1)_x (\vec{A}_2)_z,$$
$$(\vec{A}_1 \times \vec{A}_2)_z = (\vec{A}_1)_x (\vec{A}_2)_y - (\vec{A}_1)_y (\vec{A}_2)_x.$$

Note that

$$\vec{A}_1 \times \vec{A}_2 = -\,\vec{A}_2 \times \vec{A}_1$$
$$\vec{A}_1 \cdot (\vec{A}_2 \times \vec{A}_3) = (\vec{A}_1 \times \vec{A}_2) \cdot \vec{A}_3$$
$$\vec{A}_1 \times (\vec{A}_2 \times \vec{A}_3) = (\vec{A}_1 \cdot \vec{A}_3)\,\vec{A}_2 - (\vec{A}_1 \cdot \vec{A}_2)\,\vec{A}_3$$

for any three vectors $\vec{A}_1$, $\vec{A}_2$ and $\vec{A}_3$. Repeated application of the above first two formulas may be useful in deriving the conservation law in question.

In the following, let $\vec{B}$ be in the $z$-direction.

## (1) Conservation Laws

- (a) Write down the equations of motion for the center of mass of the dipole and for the rotation around the center of mass by computing the total force and the total torque with respect to the center of mass acting on the dipole.
- (b) From the equation of motion for the center of mass, obtain the modified form of the conservation law for the total momentum. Denote the corresponding modified conserved quantity by $\vec{P}$. Write down an expression in terms of $\vec{v}_{CM}$ and $\vec{\omega}$ for the conserved energy $E$.
- (c) The angular momentum consists of two parts. One part is due to the motion of the center of mass and the other is due to rotation around the center of mass. From the modified form of the conservation law for the total momentum and the equation of motion of the rotation around the center of mass, prove that the quantity $J$ as defined by

$$J = \left(\vec{r}_{CM} \times \vec{P} + I\,\vec{\omega}\right) \cdot \hat{B}$$

is conserved.

## (2) Motion in a Plane Perpendicular to $\vec{B}$

Suppose initially the center of mass of the dipole is at rest at the origin, $\vec{\ell}$ points in the $x$-direction and the initial angular velocity of the dipole is $\omega_0\,\hat{z}$ ($\hat{z}$ is the unit vector in the $z$-direction).

- (a) If the magnitude of $\omega_0$ is smaller than a critical value $\omega_c$, the dipole will not make a full turn with respect to its center of mass. Find $\omega_c$.
- (b) For a general $\omega_0 > 0$, what is the maximum distance $d_m$ in the $x$-direction that the center of mass can reach?
- (c) What is the tension on the rod? Express it as a function of the angular velocity $\omega$.

**Topic:** [[Electromagnetism]], [[Newtonian Mechanics]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Conservation Laws (metodo)|Conservation Laws]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Point Charge (object)|Point Charge]], [[Rod (object)|Rod]]
**Fonte:** [Testo (PDF) - p.1](https://drive.google.com/file/d/1YmuknWzDdNxcM1qH-W9ZLv_Tuf9ZtSUz/view)


<div class="qlang-split" data-lang="it"></div>

**Movimento di un dipolo elettrico in un campo magnetico**

In presenza di un campo magnetico costante e uniforme $\vec{B}$, il movimento traslazionale di un sistema di cariche elettriche è accoppiato al suo movimento di rotazione. Di conseguenza, le leggi di conservazione del momento e della componente del momento angolare lungo la direzione di $\vec{B}$ sono modificate dalla forma abituale. Questo è illustrato in questo problema considerando il movimento di un dipolo elettrico costituito da due particelle di massa uguale $m$ e carica $q$ e $-q$ rispettivamente ($q > 0$). Le due particelle sono collegate da una rigida canna isolante di lunghezza $\ell$, la cui massa può essere trascurata. Il $\vec{r}_1$ deve essere il vettore di posizione della particella con carica $q$, $\vec{r}_2$ quella dell'altra particella e $\vec{\ell} = \vec{r}_1 - \vec{r}_2$. Denotare per $\vec{\omega}$ la velocità angolare della rotazione intorno al centro di massa del dipolo. Detona rispettivamente $\vec{r}_{CM}$ e $\vec{v}_{CM}$ la posizione e i vettori di velocità del centro di massa. Gli effetti relativistici e gli effetti delle radiazioni elettromagnetiche possono essere trascurati.

Si noti che la forza magnetica che agisce su una particella di carica $q$ e la velocità $\vec{v}$ è $q\,\vec{v} \times \vec{B}$, dove il prodotto incrociato di due vettori $\vec{A}_1 \times \vec{A}_2$ è definito, in termini di componenti $x, y, z$ dei vettori, da:

$$(\vec{A}_1 \times \vec{A}_2)_x = (\vec{A}_1)_y (\vec{A}_2)_z - (\vec{A}_1)_z (\vec{A}_2)_y,$$
$$(\vec{A}_1 \times \vec{A}_2)_y = (\vec{A}_1)_z (\vec{A}_2)_x - (\vec{A}_1)_x (\vec{A}_2)_z,$$
$$(\vec{A}_1 \times \vec{A}_2)_z = (\vec{A}_1)_x (\vec{A}_2)_y - (\vec{A}_1)_y (\vec{A}_2)_x.$$

Si noti che

$$\vec{A}_1 \times \vec{A}_2 = -\,\vec{A}_2 \times \vec{A}_1$$
$$\vec{A}_1 \cdot (\vec{A}_2 \times \vec{A}_3) = (\vec{A}_1 \times \vec{A}_2) \cdot \vec{A}_3$$
$$\vec{A}_1 \times (\vec{A}_2 \times \vec{A}_3) = (\vec{A}_1 \cdot \vec{A}_3)\,\vec{A}_2 - (\vec{A}_1 \cdot \vec{A}_2)\,\vec{A}_3$$

per tutti e tre i vettori $\vec{A}_1$, $\vec{A}_2$ e $\vec{A}_3$. L'applicazione ripetuta delle prime due formule di cui sopra può essere utile per derivare la legge in questione sulla conservazione.

In seguito, $\vec{B}$ deve essere nella direzione $z$.

## (1) Leggi di conservazione

- a) Scrivere le equazioni di movimento del centro di massa del dipolo e della rotazione intorno al centro di massa calcolando la forza totale e la coppia totale rispetto al centro di massa che agisce sul dipolo.
- (b) L'equazione di movimento per il centro di massa, ottenete la forma modificata della legge di conservazione per il momento totale. Denotare il corrispondente quantitativo conservato modificato con $\vec{P}$. Scrivere un'espressione in termini di $\vec{v}_{CM}$ e $\vec{\omega}$ per l'energia conservata $E$.
- (c) Il momento angolare è costituito da due parti. Una parte è dovuta al movimento del centro di massa e l'altra alla rotazione intorno al centro di massa. Dalla forma modificata della legge di conservazione per il momento totale e l'equazione di movimento della rotazione intorno al centro di massa, dimostrare che la quantità $J$ come definita da

$$J = \left(\vec{r}_{CM} \times \vec{P} + I\,\vec{\omega}\right) \cdot \hat{B}$$

- è conservato.

## (2) Movimento in piano perpendicolare a $\vec{B}$

Supponiamo che inizialmente il centro di massa del dipolo sia a riposo all'origine, $\vec{\ell}$ punti nella direzione $x$ e la velocità angolare iniziale del dipolo sia $\omega_0\,\hat{z}$ ($\hat{z}$ è il vettore unitario nella direzione $z$).

- a) Se la magnitudine di $\omega_0$ è inferiore a un valore critico $\omega_c$, il dipolo non farà una rotazione completa rispetto al suo centro di massa. Trova $\omega_c$.
- (b) Per un $\omega_0 > 0$ generale, qual è la distanza massima $d_m$ nella direzione $x$ che il centro di massa può raggiungere?
- (c) Qual è la tensione sulla canna? Esprimere come funzione della velocità angolare $\omega$.

**Topic:** [[Electromagnetism]], [[Newtonian Mechanics]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Conservation Laws (metodo)|Conservation Laws]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Point Charge (object)|Point Charge]], [[Rod (object)|Rod]]
**Fonte:** [Testo (PDF) - p.1](https://drive.google.com/file/d/1YmuknWzDdNxcM1qH-W9ZLv_Tuf9ZtSUz/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="APhO 2001 - Teorica - Quesito 3" data-tags="kg/prova,paese/Asia,comp/APhO,topic/modern-quantum-physics,argomento/fisica-moderna,difficolta/5,multidisciplina/multi,object/electron,object/atom"></span>

<div class="qlang-switch" data-default="en"></div>



## Thermal Vibrations of Surface Atoms

This question considers the thermal vibrations of surface atoms in an elemental metallic crystal with a face-centered cubic ($fcc$) lattice structure. The unit cubic cell of an $fcc$ lattice consists of one atom at each corner and one atom at the center of each face of the cubic cell, as shown in Fig. 3a. For the crystal under consideration, we use $(a, 0, 0)$, $(0, a, 0)$ and $(0, 0, a)$ to represent the locations of the three atoms on the $x$, $y$ and $z$ axes of its cell. The lattice constant $a$ is equal to 3.92 Angstrom (i.e. the length of each side of the cube is 3.92 Angstrom).

<!--fig:start-->
![[_attachments/APhO_2001_theory/APhO_2001_theory_Q3_p1_f1.png]]
*Fig. 3a*
<!--fig:end-->

- (1) The crystal is cut in such a way that the plane containing ABCD becomes a boundary surface and is chosen for doing low-energy electron diffraction experiments. A collimated beam of electrons with kinetic energy of 64.0 eV is incident on this surface plane at an incident angle $\phi_0$ of $15.0^\circ$. Note that the incident angle $\phi_0$ is the angle between the incident electron beam and the normal of the surface plane. The plane containing $\overline{AC}$ and the normal of the surface plane is the plane of incidence. For simplicity, we assume that all incident electrons are back scattered only by the surface atoms on the topmost layer.
  - (a) What is the wavelength of the matter waves of the incident electrons?
  - (b) If a detector is set up to detect electrons that do not leave the plane of incidence after being diffracted, at what angles with the normal of the surface will these diffracted electrons be observable?

- (2) Assume that the thermal vibrational motions of the surface atoms are simple harmonic. The amplitude of vibration increases as the temperature rises. Low-energy electron diffraction provides a way to measure the average amplitude of vibration. The intensity $I$ of the diffracted beam is proportional to the number of scattered electrons per second. The relation between the intensity $I$ and the displacement $u(t)$ of the surface atoms is given by

$$I = I_0 \exp\!\left\{-\left\langle \left[(\vec{k}-\vec{k}_0)\cdot \vec{u}(t)\right]^2 \right\rangle \right\} \qquad (1)$$

In Eq.(1), $I$ and $I_0$ are the intensities at temperature $T$ and absolute zero, respectively. $\vec{k}_0$ and $\vec{k}$ are wave vectors of incident electron and diffracted electron, respectively. The angle brackets $\langle\ \rangle$ is used to denote average over time. Note that the relation between the wave vector $\vec{k}$ and the momentum $\vec{p}$ of a particle is $\vec{k} = 2\pi \vec{p}/h$, where $h$ is the Planck constant.

To measure vibration amplitudes of surface atoms of a metallic crystal, a collimated electron beam with kinetic energy of 64.0 eV is incident on a crystal surface at an incident angle of $15.0^\circ$. The detector is set up for measuring specularly reflected electrons. Only elastically scattered electrons are detected. A plot of $\ln(I/I_0)$ versus temperature $T$ is shown in Fig. 3b.

Assume the total energy of an atom vibrating in the direction of the surface normal is given by $k_B T$, where $k_B$ is the Boltzmann constant.

- (a) Calculate the frequency of vibration in the direction of the surface normal for the surface atoms.
- (b) Calculate the root-mean-square displacement, i.e. the value of $(\langle u_x^2 \rangle)^{1/2}$, in the direction of the surface normal for the surface atoms at 300 K.

<!--fig:start-->
![[_attachments/APhO_2001_theory/APhO_2001_theory_Q3_p2_f2.png]]
*Fig. 3b: plot of $\ln(I/I_0)$ versus temperature $T$.*
<!--fig:end-->

## The following data are given:

- Atomic weight of the metal $M = 195.1$
- Boltzmann constant $k_B = 1.38 \times 10^{-23}$ J/K
- Mass of electron $m_e = 9.11 \times 10^{-31}$ kg
- Charge of electron $e = 1.60 \times 10^{-19}$ C
- Planck constant $h = 6.63 \times 10^{-34}$ J-s

**Topic:** [[Modern-Quantum Physics]], [[Oscillations & Waves]]
**Metodi:** [[de Broglie Relation (metodo)|de Broglie Relation]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Electron (object)|Electron]], [[Atom (object)|Atom]]
**Fonte:** [Testo (PDF) - p.1](https://drive.google.com/file/d/1yhaooa40yrLCh3J_8PKUDI8_J7q9YIKo/view)


<div class="qlang-split" data-lang="it"></div>

## Vibrazioni termiche degli atomi di superficie

Questa domanda considera le vibrazioni termiche degli atomi di superficie in un cristallo metallico elementare con una struttura di rete cubica ($fcc$) centrata sulla faccia. La cellula cubica unità di una rete $fcc$ è composta da un atomo in ogni angolo e da un atomo al centro di ogni faccia della cellula cubica, come mostrato nella figura. 3a. Per il cristallo in esame, si utilizzano $(a, 0, 0)$, $(0, a, 0)$ e $(0, 0, a)$ per rappresentare le posizioni dei tre atomi sugli assi $x$, $y$ e $z$ della sua cella. La costante della rete $a$ è uguale a 3,92 Angstrom (cioè La lunghezza di ciascun lato del cubo è di 3,92 Angstrom).

<!--fig:start-->
![[_attachments/APhO_2001_theory/APhO_2001_theory_Q3_p1_f1.png]]
*Fig. 3a*
<!--fig:end-->

- (1) Il cristallo è tagliato in modo tale che il piano contenente ABCD diventi una superficie di confine e viene scelto per fare esperimenti di diffrazione elettronica a bassa energia. Un fascio di elettroni collimato con energia cinetica di 64,0 eV si incide su questo piano superficiale ad un angolo di incidenza $\phi_0$ di $15.0^\circ$. Si noti che l'angolo di incidenza $\phi_0$ è l'angolo tra il fascio di elettroni incidentale e la normalità del piano superficiale. Il piano contenente $\overline{AC}$ e la norma del piano superficiale è il piano di incidenza. Per semplicità, supponiamo che tutti gli elettroni incidenti siano scatenati solo dagli atomi superficiali sul livello superiore.
- (a) Qual è la lunghezza d'onda delle onde di materia degli elettroni incidenti?
- (b) Se un rilevatore è installato per rilevare gli elettroni che non lasciano il piano di incidenza dopo essere stati diffratti, a quali angoli con la normale superficie saranno osservabili questi elettroni diffratti?

- (2) Supponiamo che i movimenti termali e vibrazionali degli atomi superficiali siano armonici. L'ampiezza delle vibrazioni aumenta con l'aumento della temperatura. La diffrazione elettronica a bassa energia fornisce un modo per misurare l'ampiezza media delle vibrazioni. L'intensità $I$ del fascio diffratto è proporzionale al numero di elettroni sparsi al secondo. Il rapporto tra l'intensità $I$ e il spostamento $u(t)$ degli atomi superficiali è dato da

$$I = I_0 \exp\!\left\{-\left\langle \left[(\vec{k}-\vec{k}_0)\cdot \vec{u}(t)\right]^2 \right\rangle \right\} \qquad (1)$$

In Eq.(1), $I$ e $I_0$ sono rispettivamente le intensità a temperatura $T$ e zero assoluto. $\vec{k}_0$ e $\vec{k}$ sono vettori d'onda di elettroni incidenti e di elettroni diffratti, rispettivamente. Le cornette angolari $\langle\ \rangle$ sono utilizzate per indicare la media nel tempo. Si noti che la relazione tra il vettore d'onda $\vec{k}$ e il momento $\vec{p}$ di una particella è $\vec{k} = 2\pi \vec{p}/h$, dove $h$ è la costante di Planck.

Per misurare le amplitudini di vibrazione degli atomi superficiali di un cristallo metallico, un fascio di elettroni collimato con energia cinetica di 64,0 eV incide su una superficie del cristallo ad un angolo di incidenza di $15.0^\circ$. Il rilevatore è configurato per misurare gli elettroni riflessi specolarmente. Solo elettroni dispersi in modo elastico vengono rilevati. La figura mostra un grafico di $\ln(I/I_0)$ rispetto alla temperatura $T$. 3b.

Supponiamo che l'energia totale di un atomo che vibra nella direzione della superficie normale sia data da $k_B T$, dove $k_B$ è la costante di Boltzmann.

- a) Calcolare la frequenza di vibrazione nella direzione della superficie normale per gli atomi di superficie.
- b) Calcolare il spostamento radice-media quadrata, cioè il valore di $(\langle u_x^2 \rangle)^{1/2}$, nella direzione della superficie normale per gli atomi di superficie a 300 K.

<!--fig:start-->
![[_attachments/APhO_2001_theory/APhO_2001_theory_Q3_p2_f2.png]]
*Fig. 3b: grafica di $\ln(I/I_0)$ contro temperatura $T$.*
<!--fig:end-->

## I seguenti dati sono forniti:

- Peso atomico del metallo $M = 195.1$
- Costante di Boltzmann $k_B = 1.38 \times 10^{-23}$ J/K
- massa di elettrone $m_e = 9.11 \times 10^{-31}$ kg
- carico di elettrone $e = 1.60 \times 10^{-19}$ C
- Costante di Planck $h = 6.63 \times 10^{-34}$ J-s

**Topic:** [[Modern-Quantum Physics]], [[Oscillations & Waves]]
**Metodi:** [[de Broglie Relation (metodo)|de Broglie Relation]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Electron (object)|Electron]], [[Atom (object)|Atom]]
**Fonte:** [Testo (PDF) - p.1](https://drive.google.com/file/d/1yhaooa40yrLCh3J_8PKUDI8_J7q9YIKo/view)
