---
title: OPhO 2024 — Invitational Theory
tipo: prova
tags:
  - kg/prova
  - paese/international
  - comp/OPhO
---
<div class="atom-reader" data-prova="opho_2024_invitational_theory"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="OPhO 2024 — Invitational Theory — Quesito 1" data-tags="kg/prova,paese/International,comp/OPhO,topic/electromagnetism,argomento/elettromagnetismo,difficolta/5,multidisciplina/multi,object/point-charge,object/resistor,object/photon"></span>

<div class="qlang-switch" data-default="en"></div>



**Penned Particles**

A Penning trap is a device used to store charged particles using static magnetic and electric fields. In this problem we will investigate the motion of an ion inside the trap.

### 1.1

**(a)** The trap is a cylinder, parallel to the $z$-axis, with the origin at the center. Inside, the electric potential is
$$V = V_0\,\frac{z^2 - r^2}{2d^2},$$
where $d$ is the characteristic dimension of the trap. In order to generate the quadrupole field inside, there are two sets of electrodes: two endcaps and the ring electrode, which are held at potential difference $V_0$, and are solids of revolution. Refer to part (e) for a diagram. Let the minimum distance between endcaps be $2z_0$, and the smallest inside diameter of the ring be $2r_0$.

- Take a cross section parallel to the $z$-axis through the origin. What are the equations of the cross section of the ring and endcap electrodes?
- Express $d$ in terms of $r_0$ and $z_0$.

**(b)** The magnetic field $\mathbf{B} = B_0\hat{z}$ is homogeneous inside the trap. Suppose we have a particle with charge $q$ and mass $m$. Assume its speed is nonrelativistic, and neglect energy loss from radiation. Throughout the rest of the problem, assume $q$ is positive.

- The $z$-axis motion is simple harmonic. Find the angular frequency $\omega_z$.
- Write the differential equation for the motion in the $xy$-plane.
- Suppose $\omega_z = 0$. Solve the differential equation, and find the angular frequency of the motion $\omega_c$. This is the cyclotron frequency.

Typically, $\omega_c \gg \omega_z$. Assume this for the rest of the problem.

**(c)** The motion of the electron in the $xy$-plane consists of two separate uniform circular motions overlaid on top of each other. One is the cyclotron motion and the other is the magnetron motion. Find expressions for the angular frequencies of the cyclotron motion and the magnetron motion, in terms of $\omega_z$ and $\omega_c$.

### 1.2

**(d)** We will now consider the effects of radiation. Typically, the magnetron motion has a much lower frequency than the cyclotron motion, so the decay of the magnetron motion is negligible. The power radiated by an accelerating particle is:
$$P = \frac{q^2 a^2}{6\pi\varepsilon_0 c^3}.$$

- The energy of the orbit decays as $e^{-t/\gamma_c}$. Find $\gamma_c$.
- Now consider the radiation damping of the axial motion. The energy of the oscillation decays as $e^{-t/\gamma_z}$. Find $\gamma_z$.

**(e)** For an electron at typical $\omega_c$, $\gamma_c$ is quite small, allowing for easy damping. However, $\gamma_z$ is much larger, and for a proton, radiation damping is insignificant. In order to cool large particles, a circuit is used instead. We first consider axial damping.

The oscillations of the ion induce image charges in the electrode, which can be interpreted as a current $I$. See the following circuit:

![[OPhO_2024_Invitational_Theory_p5_f1.png]]

You may ignore the quadrupole potential in this part.

- There will be a potential difference of $IR$ between the endcap and the ring (as well as the other endcap). This will produce an electric field $E\hat{z}$ proportional to $I$ inside the trap. Find $E$, up to a constant factor $\kappa$, which depends on the geometry of the electrodes. *Hint:* if the endcaps are infinite flat planes, $\kappa$ is equal to 1.
- Consider the power lost through the resistor. Use this to derive the force on the ion, $f = -m\zeta\dot{z}$. Write an expression for $\zeta$.

**(f)** To conclude, we will consider how to cool the magnetron motion (decrease its radius).

- Find the total energy of the magnetron motion. Assume $z = 0$.

The process works as follows. We shine photons of energy $\hbar(\omega_z + \omega_m)$, which interact with the ion. Let the quantum numbers of the $z$ motion and the magnetron motion be $k$ and $l$ respectively. Then, the cooling transition is from $(k, l) \to (k+1, l-1)$, and the heating transition is from $(k, l) \to (k-1, l+1)$. Using quantum mechanics, we can derive that these happen at rates proportional to $(k+1)l$ and $k(l+1)$ respectively. The magnetron motion will be cooled until $l = k$, at which point it will be in equilibrium, and there is no long term change in temperature.

- We will now derive the equilibrium energy of the magnetron motion. Assume that at equilibrium, the axial and magnetron motions are at temperatures $T_z$ and $T_m$ respectively. As we continue to shine photons, consider the change in entropy. Use this to derive $T_m$ in terms of $\omega_m$, $\omega_z$, and $T_z$.

**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RJ_qIR9t_tKq42wNvZXZNUiF7sloXszn/view)
**Topic:** [[Electromagnetism]], [[Electrostatics]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Conservation of Energy (metodo)|Conservation of Energy]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Point Charge (object)|Point Charge]], [[Resistor (object)|Resistor]], [[Photon (object)|Photon]]


<div class="qlang-split" data-lang="it"></div>

**Particelle scritte**

Una trappola di penning è un dispositivo utilizzato per memorizzare particelle cariche utilizzando campi magnetici statici e elettrici. In questo problema esamineremo il movimento di un ione all'interno della trappola.

### 1.1

**(a) ** La trappola è un cilindro, parallelo all'asse $z$, con origine al centro. Dentro, il potenziale elettrico è
$$V = V_0\,\frac{z^2 - r^2}{2d^2},$$
dove $d$ è la dimensione caratteristica della trappola. Per generare il campo quadrupolo all'interno, ci sono due set di elettrodi: due cappucci finali e l'elettrodo anello, che sono tenuti alla differenza potenziale $V_0$, e sono solidi di rivoluzione. Per un diagramma, si riferisce alla parte e). La distanza minima tra le cappe finali deve essere $2z_0$ e il diametro interno più piccolo dell'anello deve essere $2r_0$.

- Prendere una sezione incrociata parallela all'asse $z$ attraverso l'origine. Quali sono le equazioni della sezione trasversale dell'anello e degli elettrodi endcap?
- Esprimere $d$ in termini di $r_0$ e $z_0$.

**(b) ** Il campo magnetico $\mathbf{B} = B_0\hat{z}$ è omogeneo all'interno della trappola. Supponiamo che abbiamo una particella con carica $q$ e massa $m$. Supponiamo che la sua velocità sia non relativistica e trascuriamo la perdita di energia da radiazioni. Per il resto del problema, supponiamo che $q$ sia positivo.

- Il movimento dell'asse $z$ è armonico. Trova la frequenza angolare $\omega_z$.
- Scrivere l'equazione differenziale del movimento nel piano $xy$.
- Supponiamo che $\omega_z = 0$. Risolvi l'equazione differenziale e trova la frequenza angolare del movimento $\omega_c$. Questa è la frequenza del ciclotrone.

In genere $\omega_c \gg \omega_z$. Supponiamo questo per il resto del problema.

**(c) ** Il movimento dell'elettrone nel piano $xy$ consiste in due movimenti circolari uniformi separati sovrapposti l'uno all'altro. Uno è il movimento dei ciclotroni e l'altro è il movimento dei magnetroni. Trova espressioni per le frequenze angolari del movimento del ciclotrone e del movimento del magnetrone, in termini di $\omega_z$ e $\omega_c$.

### 1.2

In questo caso, la Commissione ha deciso di adottare una decisione che non può essere adottata. In genere, il movimento dei magnetroni ha una frequenza molto inferiore al movimento dei ciclotroni, quindi il decadimento del movimento dei magnetroni è trascurabile. La potenza irradiata da una particella accelerante è:
$$P = \frac{q^2 a^2}{6\pi\varepsilon_0 c^3}.$$

- L'energia dell'orbita decade come $e^{-t/\gamma_c}$. Trova $\gamma_c$.
- Ora consideriamo l'ammortizzazione delle radiazioni del movimento assiale. L'energia dell'oscillazione decade come $e^{-t/\gamma_z}$. Trova $\gamma_z$.

**(e) ** Per un elettrone a tipico $\omega_c$, $\gamma_c$ è abbastanza piccolo, consentendo un facile ammortizzazione. Tuttavia, $\gamma_z$ è molto più grande, e per un protone, l'ammortizzazione radiologica è insignificante. Per raffreddare le particelle di grandi dimensioni, viene utilizzato un circuito. Prendiamo in considerazione l'ammortizzazione assiale.

Le oscillazioni dell'ion inducono cariche di immagine nell'elettrodo, che possono essere interpretate come corrente $I$. Vedi il seguente circuito:

![[OPhO_2024_Invitational_Theory_p5_f1.png]]

Potresti ignorare il potenziale quadrupolo in questa parte.

- Ci sarà una differenza potenziale di $IR$ tra la cappa finale e l' anello (così come l' altra cappa finale). In questo modo si produce un campo elettrico $E\hat{z}$ proporzionale a $I$ all'interno della trappola. Trova $E$ fino a un fattore costante $\kappa$, che dipende dalla geometria degli elettrodi. *Signore: * se le cappe finali sono piani piatti infiniti, $\kappa$ è uguale a 1.
- Considerate la potenza perduta attraverso la resistenza. Usare questo per derivare la forza sull'ion, $f = -m\zeta\dot{z}$. Scrivere un'espressione per $\zeta$.

**(f) ** In conclusione, consideriamo come raffreddare il movimento del magnetrone (riducendo il suo raggio).

- Trova l'energia totale del movimento dei magnetroni. Supponiamo $z = 0$.

Il processo funziona così: L'energia di questi fotoni è $\hbar(\omega_z + \omega_m)$, che interagiscono con l'ion. I numeri quantistici del movimento $z$ e del movimento dei magnetroni siano rispettivamente $k$ e $l$. In seguito, la transizione di raffreddamento è da $(k, l) \to (k+1, l-1)$ e la transizione di riscaldamento è da $(k, l) \to (k-1, l+1)$. Usando la meccanica quantistica, possiamo derivare che queste accadono a tassi proporzionali rispettivamente a $(k+1)l$ e $k(l+1)$. Il movimento del magnetrone sarà raffreddato fino a $l = k$, punto in cui sarà in equilibrio, senza che la temperatura cambi a lungo termine.

- Ora deriveremo l'energia di equilibrio del movimento dei magnetroni. Supponiamo che, a equilibrio, i movimenti axiali e magnetroni siano rispettivamente a temperature $T_z$ e $T_m$. Mentre continuiamo a illuminare i fotoni, consideriamo il cambiamento di entropia. Usare questo per derivare $T_m$ in termini di $\omega_m$, $\omega_z$ e $T_z$.

**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1RJ_qIR9t_tKq42wNvZXZNUiF7sloXszn/view)
**Topic:** [[Electromagnetism]], [[Electrostatics]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Conservation of Energy (metodo)|Conservation of Energy]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Point Charge (object)|Point Charge]], [[Resistor (object)|Resistor]], [[Photon (object)|Photon]]



<span class="atom-split" id="q02" data-atom="q02" data-title="OPhO 2024 — Invitational Theory — Quesito 2" data-tags="kg/prova,paese/International,comp/OPhO,topic/fluid-mechanics,argomento/fluidi,difficolta/5,multidisciplina/multi,object/bubble,object/gas"></span>

<div class="qlang-switch" data-default="en"></div>



**Bouncy Bubble**

In this problem, we will investigate the interaction between fast oscillations and gradual changes in a physical system.

### 2.1

A large volume of incompressible, non-viscous liquid with density $\rho$ is kept at temperature $T_c$ and pressure $P_c$. A spherical bubble consisting of $N$ particles of ideal gas with temperature $T_0 > T_c$ is introduced into the liquid. Neglect surface tension and any heat transfer between the liquid and the gas.

**(a)** Find the equilibrium radius $R_0$ of the bubble.

The bubble's radius is perturbed slightly from equilibrium and its oscillations are observed; the gas remains near thermal equilibrium at all times. Assume that the motion of the liquid is laminar and radial, and that the density of the gas is negligible compared to $\rho$. You may express future answers in terms of $R_0$.

**(b)** Find the frequency $\omega$ of the bubble's small oscillations.

### 2.2

Now, assume that the interface between the gas and the liquid has thermal conductance per unit area $\kappa$. Then, because of heat loss, the bubble will shrink over time, approaching a final radius $R_f$ (which you may use in future answers). The shrinkage is slow enough that the kinetic energy of the liquid can be neglected.

**(c)** If the bubble starts at radius $R_0$, find the approximate time $\tau$ until it shrinks to radius $(R_0 + R_f)/2$. Express your answer to the lowest order in the quantity $\alpha = R_0/R_f - 1$.

**(d)** Next, the bubble starts off oscillating around $R_0$ with amplitude $R_0\delta_0$, where $\delta_0 \ll 1$; assume that the oscillations are much faster than the shrinkage. Find the time-averaged final radius $R'_f$ of the bubble, to the lowest order in $\delta_0$. Qualitatively explain the reason for any difference between $R'_f$ and $R_f$.

**(e)** Given the situation in part (d), find the approximate time $\tau'$ until the bubble's time-averaged radius shrinks to $(R_0 + R'_f)/2$, to the lowest orders in $\alpha' = R_0/R'_f - 1$ and $\delta_0$.

**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1RJ_qIR9t_tKq42wNvZXZNUiF7sloXszn/view)
**Topic:** [[Fluid Mechanics]], [[Oscillations & Waves]]
**Metodi:** [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Bubble (object)|Bubble]], [[Gas (object)|Gas]]


<div class="qlang-split" data-lang="it"></div>

**Bubble di scaldamento**

In questo problema, esamineremo l'interazione tra oscillazioni veloci e cambiamenti graduali in un sistema fisico.

### 2.1

Un grande volume di liquido non compressibile non viscoso con densità $\rho$ è conservato a temperatura $T_c$ e pressione $P_c$. Una bolla sferica costituita da particelle di gas ideale $N$ con temperatura $T_0 > T_c$ viene introdotta nel liquido. Ignorare la tensione superficiale e qualsiasi trasferimento di calore tra il liquido e il gas.

** a) ** Trova il raggio di equilibrio $R_0$ della bolla.

Il raggio della bolla è leggermente perturbato dall'equilibrio e le sue oscillazioni sono osservate; il gas rimane vicino all'equilibrio termico in ogni momento. Supponiamo che il movimento del liquido sia laminare e radiale e che la densità del gas sia trascurabile rispetto a $\rho$. Le risposte future potranno essere espresse in termini di $R_0$.

**(b) ** Trova la frequenza $\omega$ delle piccole oscillazioni della bolla.

### 2.2

Ora, supponiamo che l'interfaccia tra il gas e il liquido abbia una conduzione termica per unità di superficie $\kappa$. Poi, a causa della perdita di calore, la bolla si restringe nel tempo, avvicinandosi al raggio finale $R_f$ (che potresti usare nelle future risposte). La contrazione è abbastanza lenta da poter trascurare l'energia cinetica del liquido.

Se la bolla inizia a raggio $R_0$, trova il tempo approssimativo $\tau$ fino a quando non si riduce a raggio $(R_0 + R_f)/2$. Esprimere la risposta al numero più basso nella quantità $\alpha = R_0/R_f - 1$.

**(d) ** Successivamente, la bolla inizia a oscillarsi intorno a $R_0$ con amplitudine $R_0\delta_0$, dove $\delta_0 \ll 1$; supponiamo che le oscillazioni siano molto più veloci della contrazione. Trova il raggio finale medio temporale $R'_f$ della bolla, fino all'ordine più basso in $\delta_0$. Esprimi qualitativamente la ragione di qualsiasi differenza tra $R'_f$ e $R_f$.

**(e) ** Considerata la situazione di cui alla parte (d), trovare il tempo approssimativo $\tau'$ fino a quando il raggio medio temporale della bolla si riduca a $(R_0 + R'_f)/2$, fino ai livelli più bassi di $\alpha' = R_0/R'_f - 1$ e $\delta_0$.

**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1RJ_qIR9t_tKq42wNvZXZNUiF7sloXszn/view)
**Topic:** [[Fluid Mechanics]], [[Oscillations & Waves]]
**Metodi:** [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Bubble (object)|Bubble]], [[Gas (object)|Gas]]



<span class="atom-split" id="q03" data-atom="q03" data-title="OPhO 2024 — Invitational Theory — Quesito 3" data-tags="kg/prova,paese/International,comp/OPhO,topic/astrophysics,argomento/gravitazione-e-astrofisica,difficolta/5,multidisciplina/multi,object/star,object/planet"></span>

<div class="qlang-switch" data-default="en"></div>



**Stellar Shaping**

In this problem, we investigate the formation of stellar systems.

### 3.1

Consider a cloud of dust of radius $R$ of mass $M$ with particles of mass $m$, all held at a constant temperature $T$. Assume that $kT \gg GMm/R$; i.e. the particles are far enough apart such that gravitational interactions are nearly negligible.

**(a)** What is the expected value and variance of the angular momentum of one particle in the $\hat{x}$ direction?

**(b)** What is the variance in the total angular momentum of the cloud, $\langle L^2 \rangle$?

### 3.2

Suppose some density fluctuations occur, which leads this cloud of gas into gravitational collapse. Now, we must take gravitational interaction into account; assume that the cloud remains at thermal equilibrium and that the total energy of the cloud remains constant — the work done by the exterior gas is small.

**(c)** Assume that the cloud remains spherically symmetric. Find the approximate distribution of densities $\rho(r)$. You can use the new equilibrium temperature in your expression, which will be calculated in part (f). The model you find should work under the limit $r^2 \gg k_b T / (Gm)$.

**(d)** What is the new radius of the cloud, $R'$?

**(e)** Find the angular velocity $\omega$ of the cloud, assuming that the cloud rotates uniformly. Take the total angular momentum of the cloud to be $\sqrt{\langle L^2 \rangle}\,\hat{z}$, which you found in part (b).

**(f)** What is the new temperature of the cloud, $T'$?

### 3.3

The nebula is not at its most stable state because of the high angular velocity. Suppose that the part of the cloud that reaches beyond a critical density limit $\rho_c$ collapses and begins forming a star.

**(g)** Find the initial radius of collapse, $R_c$, and the mass of the star $M_s$. Assume the radius of the star is a lot smaller than $R_c$.

For the last two parts, we will assume that the gravitational potential is quadratic, $U = \tfrac{1}{2}k(x^2 + y^2 + z^2)$, and the angular velocity of the particles is $\omega$. Leave answers in terms of the variables given in this part.

**(h)** Suppose all the leftover material, some $N$ particles at temperature $T'$, begins to settle into a gas. What is the expected value for $r^2$, the distance of these particles to the axis of rotation, once they reach their most stable state?

**(i)** What is the approximate variance in the orbital inclination for this leftover material — that eventually begins to form asteroids and planets? (to first order in $\omega^2$)

**Fonte:** [Testo (PDF) — p.7](https://drive.google.com/file/d/1RJ_qIR9t_tKq42wNvZXZNUiF7sloXszn/view)
**Topic:** [[Astrophysics]], [[Gravitation]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Star (object)|Star]], [[Planet (object)|Planet]]


<div class="qlang-split" data-lang="it"></div>

**Stelare Shaping**

In questo problema, indaghiamo sulla formazione dei sistemi stellari.

### 3.1

Si consideri una nube di polvere di raggio $R$ di massa $M$ con particelle di massa $m$, tutte tenute a temperatura costante $T$. Supponiamo che $kT \gg GMm/R$; cioè Le particelle sono abbastanza distanti da sé che le interazioni gravitazionali sono quasi trascurabili.

**(a) ** Qual è il valore atteso e la varianza del momento angolare di una particella nella direzione $\hat{x}$?

**(b) ** Qual è la varianza nel momento angolare totale della nuvola, $\langle L^2 \rangle$?

### 3.2

Supponiamo che si verifichino alcune fluttuazioni di densità, che portano questa nube di gas al collasso gravitazionale. Ora, dobbiamo tenere conto dell'interazione gravitazionale; supponiamo che la nube rimanga in equilibrio termico e che l'energia totale della nube rimanga costante  il lavoro svolto dal gas esterno è piccolo.

**(c) ** Supponiamo che la nuvola rimanga sfericamente simmetrica. Trova la distribuzione approssimativa delle densità $\rho(r)$. È possibile utilizzare la nuova temperatura di equilibrio nella propria espressione, che verrà calcolata nella parte (f). Il modello che trovi dovrebbe funzionare sotto il limite $r^2 \gg k_b T / (Gm)$.

**(d) ** Qual è il nuovo raggio della nuvola, $R'$?

**(e) ** Trova la velocità angolare $\omega$ della nuvola, supponendo che la nuvola ruota uniformemente. Prendete il momento angolare totale della nuvola a $\sqrt{\langle L^2 \rangle}\,\hat{z}$, che avete trovato nella parte (b).

**(f)** What is the new temperature of the cloud, $T'$?

### 3.3

La nebulosa non è nello stato più stabile a causa della sua alta velocità angolare. Supponiamo che la parte della nuvola che raggiunge oltre un limite di densità critica $\rho_c$ crolla e inizia a formare una stella.

**(g) ** Trova il raggio iniziale del collasso, $R_c$, e la massa della stella $M_s$. Supponiamo che il raggio della stella sia molto più piccolo di $R_c$.

Per le ultime due parti, supponiamo che il potenziale gravitazionale sia quadratico, $U = \tfrac{1}{2}k(x^2 + y^2 + z^2)$, e la velocità angolare delle particelle è $\omega$. Lasciate le risposte in termini di variabili indicate in questa parte.

**(h) ** Supponiamo che tutto il materiale rimanente, alcune particelle $N$ a temperatura $T'$, iniziino a fissarsi in un gas. Qual è il valore atteso per $r^2$, la distanza tra queste particelle e l'asse di rotazione, una volta raggiunti i loro stati più stabili?

**(i)** What is the approximate variance in the orbital inclination for this leftover material — that eventually begins to form asteroids and planets? (a prima ordine in $\omega^2$)

**Fonte:** [Testo (PDF) — p.7](https://drive.google.com/file/d/1RJ_qIR9t_tKq42wNvZXZNUiF7sloXszn/view)
**Topic:** [[Astrophysics]], [[Gravitation]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Star (object)|Star]], [[Planet (object)|Planet]]



<span class="atom-split" id="q04" data-atom="q04" data-title="OPhO 2024 — Invitational Theory — Quesito 4" data-tags="kg/prova,paese/International,comp/OPhO,topic/oscillations-and-waves,argomento/onde-e-oscillazioni,difficolta/5,multidisciplina/multi,object/spring,object/atom"></span>

<div class="qlang-switch" data-default="en"></div>



**Hot Solids**

In this problem, we investigate a one-dimensional model of atoms in a solid. Assume the atoms are point masses of mass $m$ connected by springs with spring constant $\kappa$ and rest length $a$, and the total rest length of the chain is $L$.

### 4.1

First, assume that the mass is spread continuously throughout the chain (in other words, $a$ is very small). Here, longitudinal waves have the same speed for all values of the angular frequency $\omega$ and wavenumber $k$.

**(a)** Find this speed of sound in the solid, $v$, up to a dimensionless constant.

Now, we get rid of this assumption and solve fully.

**(b)** Find a dispersion relation (a relationship between $\omega$ and $k$) for the chain of atoms if $a$ is not required to be small. Use this result to find the dimensionless constant from part (a).

### 4.2

We can use the above results to find the heat capacity of the chain. To do so, treat each possible frequency $\omega$ as its own quantum harmonic oscillator (QHO) with a particle of mass $m$ moving in a potential defined by $V(x) = \tfrac{1}{2}m\omega^2 x^2$. Each of these harmonic oscillators is at thermal equilibrium, and the total energy of the chain is the sum of the contributions from each frequency. You may find the following integrals useful:
$$\int_0^\infty \frac{x}{e^x - 1}\,dx = \frac{\pi^2}{6}, \qquad \int_0^\infty \frac{x^3}{e^x - 1}\,dx = \frac{\pi^4}{15}.$$

**(c)** First, derive the energy levels of a quantum harmonic oscillator by using the WKB approximation:
$$\oint p(x)\,dx = 2\pi\hbar\left(n + 1/2\right) \tag{1}$$
Here, $p(x)$ is the momentum of the particle as a function of position and the integral is across one classical period.

**(d)** Using the model from part (a), derive the total energy and heat capacity as a function of the temperature $T$. (Your result only needs to hold for $\beta\hbar\omega_{\mathrm{avg}} \gg 1$, with $\beta = 1/k_B T$.) Assume that the atoms at either end of the chain must remain fixed in place.

**(e)** Using the dispersion relation from part (b), find the energy and heat capacity to the next order in $T$.

**(f)** Above we assumed $\beta\hbar\omega_{\mathrm{avg}} \gg 1$. Why do our results fail for high $T$?

### 4.3

When the mass-energy of a particle is small compared to its energy level, relativistic corrections are required. The relativistic energy levels of a particle in a harmonic oscillator potential are given by:
$$E_n = mc^2\left(-1 + \sqrt{1 + \frac{2\hbar\omega}{mc^2}\left(n + \frac{1}{2}\right)}\right) \tag{2}$$

**(g)** Use the given energy levels to find the total energy and heat capacity of the chain where each particle is moving relativistically; you may assume that the dispersion relation is linear as in part (d). Give your answer to the lowest order in $\hbar\omega/mc^2$.

**Fonte:** [Testo (PDF) — p.8](https://drive.google.com/file/d/1RJ_qIR9t_tKq42wNvZXZNUiF7sloXszn/view)
**Topic:** [[Oscillations & Waves]], [[Thermodynamics]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Spring (object)|Spring]], [[Atom (object)|Atom]]


<div class="qlang-split" data-lang="it"></div>

**Solidi caldi**

In questo problema, indaghiamo un modello unidimensionale di atomi in un solido. Supponiamo che gli atomi siano masse puntate di massa $m$ collegate da sorgenti con costante sorgente $\kappa$ e lunghezza di riposo $a$, e che la lunghezza totale di riposo della catena sia $L$.

### 4.1

In primo luogo, supponiamo che la massa sia distribuita continuamente in tutta la catena (in altre parole, $a$ è molto piccola). Qui, le onde longitudinali hanno la stessa velocità per tutti i valori della frequenza angolare $\omega$ e del numero d'onda $k$.

**(a) ** Trova questa velocità del suono nel solido, $v$, fino a una costante senza dimensioni.

Ora, ci liberiamo di questa ipotesi e risolviamo completamente.

**(b) ** Trovare una relazione di dispersione (una relazione tra $\omega$ e $k$) per la catena di atomi se $a$ non è richiesta per essere piccola. Utilizzare questo risultato per trovare la costante dimensionaria della parte (a).

### 4.2

Possiamo utilizzare i risultati di cui sopra per trovare la capacità termico della catena. Per questo, trattare ogni possibile frequenza $\omega$ come un suo oscillatore armonico quantistico (QHO) con una particella di massa $m$ che si muove in un potenziale definito da $V(x) = \tfrac{1}{2}m\omega^2 x^2$. Ciascuno di questi oscillatori armonici è in equilibrio termico e l'energia totale della catena è la somma dei contributi di ogni frequenza. Potreste trovare utili i seguenti integrali:
$$\int_0^\infty \frac{x}{e^x - 1}\,dx = \frac{\pi^2}{6}, \qquad \int_0^\infty \frac{x^3}{e^x - 1}\,dx = \frac{\pi^4}{15}.$$

**(c) ** In primo luogo, derivare i livelli di energia di un oscillatore armonico quantistico utilizzando l'approssimazione WKB:
$$\oint p(x)\,dx = 2\pi\hbar\left(n + 1/2\right) \tag{1}$$
Qui, $p(x)$ è la dinamica della particella come funzione di posizione e l'integrale è attraverso un periodo classico.

**(d) ** Utilizando il modello della parte a), derivare la capacità energetica e termica totale in funzione della temperatura $T$. (Il risultato deve essere valido solo per $\beta\hbar\omega_{\mathrm{avg}} \gg 1$, con $\beta = 1/k_B T$.) Supponiamo che gli atomi alle estremità della catena debbano rimanere fissi in posizione.

**(e) ** Usando la relazione di dispersione della parte (b), trovare la capacità di energia e calore al successivo ordine in $T$.

**(f) ** In precedenza abbiamo supposto $\beta\hbar\omega_{\mathrm{avg}} \gg 1$. Perché i nostri risultati non sono riusciti per $T$?

### 4.3

Quando la massa-energia di una particella è piccola rispetto al suo livello energetico, sono necessarie correzioni relativistiche. I livelli di energia relativistici di una particella in un potenziale oscillatore armonico sono dati da:
$$E_n = mc^2\left(-1 + \sqrt{1 + \frac{2\hbar\omega}{mc^2}\left(n + \frac{1}{2}\right)}\right) \tag{2}$$

**(g) ** Utilizzare i livelli di energia dati per trovare la capacità energetica e termica totale della catena in cui ogni particella si muove relativisticamente; si può presumere che la relazione di dispersione sia lineare come nella parte (d). Rispondi al ordine più basso in $\hbar\omega/mc^2$.

**Fonte:** [Testo (PDF) — p.8](https://drive.google.com/file/d/1RJ_qIR9t_tKq42wNvZXZNUiF7sloXszn/view)
**Topic:** [[Oscillations & Waves]], [[Thermodynamics]]
**Metodi:** [[Wave Equation (metodo)|Wave Equation]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Spring (object)|Spring]], [[Atom (object)|Atom]]
