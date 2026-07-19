---
title: OPhO 2021 — Invitational
tipo: prova
tags:
  - kg/prova
  - paese/international
  - comp/OPhO
---
<div class="atom-reader" data-prova="opho_2021_invitational"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="OPhO 2021 — Invitational — Quesito 1" data-tags="kg/prova,paese/International,comp/OPhO,topic/oscillations-and-waves,argomento/onde-e-oscillazioni,difficolta/5,multidisciplina/multi,object/sphere,object/gas,object/piston,object/pipe-tube"></span>

<div class="qlang-switch" data-default="en"></div>



**T1: Levitation**

Levitation is a widely researched area in physics with wide applications in real life. Commercial high speed trains use magnetic levitation to transport passengers and the very physics of aerodynamics helps planes fly in the sky. Although the many uses of levitation physics apply on macroscopic dimensions, this problem will also analyze the various applications of levitation on the microscopic scale.

**Optical Tweezers**

An optical tweezer (OT) is a device which uses tightly focused laser beams to trap an object in all three spatial dimensions ($x - y - z$). Consider using an OT to trap a dielectric polystyrene nanosphere with mass $m$, radius $R$, and relative dielectric constant $\varepsilon_r$. A laser beam is directed to the vertical $z$-direction (the laser beam is similar to a monochromatic light wave propagating a sparse medium.) The laser beam has a wavelength $\lambda$. The time averaged intensity in the $z$-direction due to light can be considered to follow a Gaussian distribution function:

$$I(\rho, z) = I_0 \left(\frac{W_0}{W(z)}\right)^2 \exp\left(\frac{-2\rho^2}{W(z)^2}\right)$$

where $\rho$ is the distance from the center of the beam and $W_0$ is known as the waist size, or the measure of the beam size at the point of its focus. Here the waist length, in general, follows $W(z) = W_0\sqrt{1 + z^2/z_R^2}$ where $z_R = \pi W_0^2/\lambda$ denotes the Rayleigh length.

![[OPhO_2021_Invitational_p4_f1.png]]
*Figure 1: A nanosphere placed off-center in a Gaussian beam.*

![[OPhO_2021_Invitational_p4_f2.png]]
*Figure 2: A graphic of the intensity distribution in a Gaussian beam.*

The OT traps particles via three different forces: **scattering forces** created by the change in momentum of light scattered or absorbed by a particle; **gradient forces** due to the polarization of the particle created by the strong electric fields of the laser beam; and, **radiation forces** produced by an accelerating charge. The total power radiated by an oscillating electric dipole with dipole moment $p_0$ at frequency $\omega$ will be $P_R = \dfrac{\mu_0 p_0^2 \omega^4}{12\pi c}$, where $c$ is the speed of light.

**1. (6 pts.)** In the Rayleigh spectrum, the nanosphere's size is such that $\lambda \gg R$. Find the oscillation frequency $\Omega$ and equilibrium position of the nanosphere when slightly displaced a distance $d \ll W_0$ in the $x$-direction. Neglect the scattering forces in this part.

In the Mie spectrum, the particle size is no longer negligible such as in part A, and follows $R \gtrsim \lambda$.[^1] As a result, a non-homogeneous electric field is incident upon the sphere and scattering forces are no longer neglectable. Parts B and C will investigate the nanosphere in the Mie spectrum.

[^1]: The order of magnitude of $R$ is greater than $\lambda$.

**2. (5 pts.)** Determine the scattering force and torque on the nanosphere as a function of a distance $x \ll W_0$ from its origin. We can consider $x \sim R$. Assume that 100% of light is transmitted for simplicity.[^2] The index of refraction of the nanosphere is $n$ while the index of refraction of the medium is $m$. You may express your answer as an integral if needed.

[^2]: In reality, some light will be reflected due to Fresnel's equations.

**3. (2 pts.)** In a simplified model, the torque acting on the nanosphere can be represented as $\tau = \kappa\omega$ where $\kappa$ is a numerical constant and $\omega$ is the angular velocity of the nanosphere. At $t = 0$, the nanosphere is stationary with an angular velocity $\omega_0$ and the OT is turned on. After a time $T$, the OT is turned off with the nanosphere left floating in the medium again. Determine the angular velocity of the nanosphere after a time $t$ passes where $t$ is the time of the entire process. It can be expressed as a piecewise function.

**Acoustic Levitation**

Objects can also be trapped via sound waves. Consider the simplest way to model sound waves; that is, in one dimension. A cylindrical tube of length $L_0$ with ambient temperature and pressure $T_0$ and $P_0$ is fixed with a piston at one end[^3] of cross-sectional area $S$ that moves periodically as $x(t) = A\cos(2\pi f t)$ where $A \ll L_0$ is the amplitude of the piston and $f$ is the frequency of the process. The tube contains $n$ monatomic particles of mass $m$ per unit volume. As the piston moves back and forth, the air in the tube compresses or expands (rarefies) in the tube as a sound wave. The molecules within the tube move back or forth parallel to their equilibrium position as the air travels within the piston. Neglect any viscous or turbulent friction within the pipe.

[^3]: In some models, the piston can represent the moving cone of a loud speaker.

**4. (6 pts.)** What is the average power required to move the piston? Consider the limits of $f \gg c_s/A$ and $f \ll c_s/A$ where $c_s$ is the speed of the sound wave.

In sound waves, the density perturbations are very small, so it can be assumed that $\Delta\rho \ll \rho_0$[^4] where $\rho_0$ is the original density of the pipe. Furthermore, the wavelength of the sound waves are much larger than the mean free path of the gas molecules. The sound wave created by the oscillating piston moves at a speed $c_s$ and dissipates the power given by the piston.

[^4]: You cannot use $\Delta\rho$ as a variable in this problem, but you can use $\rho_0$.

**5. (4 pts.)** As a result of compression, the air within the sound wave has a larger temperature $\Delta T \ll T_0$. Find the change in temperature $\Delta T$. If you were unable to solve problem 4, express the average power to move the piston as $P$.

**6. (2 pts.)** Consider a small cylindrical object of radius $R < \sqrt{S}$ and width $h \ll R$ in the pipe where variations of pressure on the cylinder's surface are negligible. Determine the force $F$ acting on the cylinder when the sound wave passes through it. If the pipe is placed on a vertical plane where gravity is present, qualitatively describe what location(s) the cylinder would levitate.

![[OPhO_2021_Invitational_p5_f3.png]]
*Figure 3: A visualization of how acoustic waves within the pipe are created via the oscillation of the piston.*

**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1vwaHW04dv8bo2hUUEJuXjUgvw6pE-BiS/view)
**Topic:** [[Oscillations & Waves]], [[Electromagnetism]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Wave Equation (metodo)|Wave Equation]], [[Differential Equations (metodo)|Differential Equations]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Sphere (object)|Sphere]], [[Gas (object)|Gas]], [[Piston (object)|Piston]], [[Pipe/Tube (object)|Pipe/Tube]]


<div class="qlang-split" data-lang="it"></div>

**T1: Levitamento**

La Levitation è un campo ampiamente studiato in fisica con ampie applicazioni nella vita reale. I treni commerciali ad alta velocità utilizzano la levitazione magnetica per trasportare i passeggeri e la stessa fisica dell'aerodinamica aiuta gli aerei a volare nel cielo. Sebbene i molti usi della fisica della levitazione si applicino alle dimensioni macroscopiche, questo problema analizzerà anche le varie applicazioni della levitazione sulla scala microscopica.

**Twizers ottici**

Una pinzetta ottica (OT) è un dispositivo che utilizza fasci laser strettamente focalizzati per intrappolare un oggetto in tutte e tre le dimensioni spaziali ($x - y - z$). Considera l'utilizzo di un OT per intrappolare una nanosfera di polistirolo dielettrico con massa $m$, raggio $R$ e costante dielettrica relativa $\varepsilon_r$. Un raggio laser è diretto verso la direzione verticale $z$ (il raggio laser è simile ad un'onda di luce monocromatica che si propaga in un mezzo scarse) Il raggio laser ha una lunghezza d'onda $\lambda$. L'intensità media temporale nella direzione $z$ dovuta alla luce può essere considerata come seguendo una funzione di distribuzione gaussiana:

$$I(\rho, z) = I_0 \left(\frac{W_0}{W(z)}\right)^2 \exp\left(\frac{-2\rho^2}{W(z)^2}\right)$$

dove $\rho$ è la distanza dal centro del fascio e $W_0$ è nota come la cintura, o la misura della dimensione del fascio al punto di focalizzazione. Qui la lunghezza della vita, in generale, segue $W(z) = W_0\sqrt{1 + z^2/z_R^2}$ dove $z_R = \pi W_0^2/\lambda$ indica la lunghezza di Rayleigh.

![[OPhO_2021_Invitational_p4_f1.png]]
*Figura 1: Una nanosfera posizionata fuori dal centro di un raggio di Gaussian.*

![[OPhO_2021_Invitational_p4_f2.png]]
*Figura 2: Grafica della distribuzione dell'intensità in fascio di Gaussian.*

L'OT cattura le particelle tramite tre forze diverse: **forze di dispersione** create dal cambiamento di impulso della luce dispersa o assorbita da una particella; **forze gradienti** dovute alla polarizzazione della particella creata dai forti campi elettrici del raggio laser; e, **forze di radiazione** prodotte da una carica accelerante. La potenza totale irradiata da un dipolo elettrico oscillante con momento di dipolo $p_0$ alla frequenza $\omega$ sarà $P_R = \dfrac{\mu_0 p_0^2 \omega^4}{12\pi c}$, dove $c$ è la velocità della luce.

**1. (6 pts.) ** nello spettro di Rayleigh, la dimensione della nanosfera è tale che $\lambda \gg R$. Trova la frequenza di oscillazione $\Omega$ e la posizione di equilibrio della nanosfera quando si spostano leggermente una distanza $d \ll W_0$ nella direzione $x$. Lascia perdere le forze di dispersione in questa parte.

Nel spettro di Mie, la dimensione delle particelle non è più trascurabile come nella parte A, e segue $R \gtrsim \lambda$. [1] Di conseguenza, si verifica un campo elettrico non omogeneo sulla sfera e le forze di dispersione non sono più trascurabili. Le parti B e C esamineranno la nanosfera nello spettro Mie.

[^1]: L'ordine di grandezza di $R$ è maggiore di $\lambda$.

**2. (5 punti) ** Determinare la forza di dispersione e la coppia sulla nanosfera in funzione della distanza $x \ll W_0$ dalla sua origine. Possiamo considerare $x \sim R$. Supponiamo che il 100% della luce sia trasmesso per semplicità. [2] L'indice di rifrazione della nanosfera è $n$ mentre l'indice di rifrazione del mezzo è $m$. Se necessario, potete esprimere la vostra risposta come un'integrale.

[^2]: In realtà, una certa luce si rifletterà a causa delle equazioni di Fresnel.

**3. (2 pts.)** In un modello semplificato, la coppia che agisce sulla nanosfera può essere rappresentata come $\tau = \kappa\omega$ dove $\kappa$ è una costante numerica e $\omega$ è la velocità angolare della nanosfera. A $t = 0$, la nanosfera è stazionaria con una velocità angolare $\omega_0$ e l'OT è attivata. Dopo un tempo $T$, il OT viene spento con la nanosfera lasciata nuovamente galleggiare nel mezzo. Determinare la velocità angolare della nanosfera dopo un tempo di $t$, dove $t$ è il tempo di tutto il processo. Può essere espressa come una funzione a pezzi.

**Livitazione acustica**

Gli oggetti possono anche essere intrappolati tramite onde sonore. Considerate il modo più semplice per modellare le onde sonore, cioè in una dimensione. Un tubo cilindrico di lunghezza $L_0$ con temperatura ambientale e pressione $T_0$ e $P_0$ è fissato con un pistone ad una estremità [^3] dell'area trasversale $S$ che si muove periodicamente come $x(t) = A\cos(2\pi f t)$ dove $A \ll L_0$ è l'ampiezza del pistone e $f$ è la frequenza del processo. Il tubo contiene particelle monatomiche $n$ di massa $m$ per unità di volume. Mentre il pistone si muove avanti e indietro, l'aria nel tubo si comprime o si espande (rarifica) nel tubo come un'onda sonora. Le molecole all'interno del tubo si muovono avanti o indietro parallele alla loro posizione di equilibrio mentre l'aria si sposta all'interno del pistone. Non si deve considerare alcuna friczione viscosa o turbolenta all'interno della tubazione.

[^3]: In alcuni modelli, il pistone può rappresentare il cono in movimento di un altoparlante.

**4. (6 pts.)** Qual è la potenza media necessaria per muovere il pistone? Considerare i limiti di $f \gg c_s/A$ e $f \ll c_s/A$, dove $c_s$ è la velocità dell'onda sonora.

Nelle onde sonore, le perturbazioni di densità sono molto piccole, quindi si può supporre che $\Delta\rho \ll \rho_0$[^4] dove $\rho_0$ è la densità originale del tubo. Inoltre, la lunghezza d'onda delle onde sonore è molto maggiore del percorso libero medio delle molecole di gas. L'onda sonora creata dal pistone oscillante si muove a una velocità $c_s$ e dissipa la potenza fornita dal pistone.

[^4]: Non è possibile utilizzare $\Delta\rho$ come variabile in questo problema, ma è possibile utilizzare $\rho_0$.

**5. (4 pts.) ** A causa della compressione, l'aria all'interno dell'onda sonora ha una temperatura superiore $\Delta T \ll T_0$. Trova il cambiamento di temperatura $\Delta T$. Se non è stato possibile risolvere il problema 4, esprimere la potenza media per spostare il pistone come $P$.

**6. (2 pts.)** Considerare un piccolo oggetto cilindrico di raggio $R < \sqrt{S}$ e larghezza $h \ll R$ nel tubo in cui le variazioni di pressione sulla superficie del cilindro sono trascurabili. Determinare la forza $F$ che agisce sul cilindro quando l'onda sonora lo attraversa. Se il tubo è posizionato su un piano verticale in cui è presente la gravità, descrivere qualitativamente quale posizione (s) il cilindro leviterebbe.

![[OPhO_2021_Invitational_p5_f3.png]]
*Figura 3: Una visualizzazione di come le onde acustiche all'interno del tubo vengono create tramite l'oscillazione del pistone.*

**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1vwaHW04dv8bo2hUUEJuXjUgvw6pE-BiS/view)
**Topic:** [[Oscillations & Waves]], [[Electromagnetism]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Wave Equation (metodo)|Wave Equation]], [[Differential Equations (metodo)|Differential Equations]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Sphere (object)|Sphere]], [[Gas (object)|Gas]], [[Piston (object)|Piston]], [[Pipe/Tube (object)|Pipe/Tube]]



<span class="atom-split" id="q02" data-atom="q02" data-title="OPhO 2021 — Invitational — Quesito 2" data-tags="kg/prova,paese/International,comp/OPhO,topic/special-relativity,argomento/fisica-moderna,difficolta/5,multidisciplina/mono,object/electron,object/nucleus,object/atom"></span>

<div class="qlang-switch" data-default="en"></div>



**T2: Thomas Precession**

**Successive Transformations**

In this section, we examine what happens when two successive Lorentz transformations are applied in non-parallel directions.

**1. (6 pts.)** Consider the three reference frames $S_1$, $S_2$, and $S_3$. Events as seen from frame $S_i$ will be labeled with the space-time coordinates $(x_i, y_i, z_i, t_i)$, for $i = 1, 2, 3$. All three frames coincide at $(0, 0, 0, 0)$. Suppose frame $S_2$ travels with velocity $\beta c$ in the $x_1$-direction of frame $S_1$ and frame $S_3$ travels with velocity $\beta'_x c\,\hat{i}_2 + \beta'_y c\,\hat{j}_2$ with respect to frame $S_2$.

Perform two successive Lorentz transformations: one expressing the $S_3$ coordinates in terms of the $S_2$ coordinates and another expressing the $S_2$ coordinates in terms of the $S_1$ coordinates. Then, as the final answer, express the $S_3$ coordinates in terms of the $S_1$ coordinates.

Assume that $\beta' = (\beta'^2_x + \beta'^2_y)^{1/2} \ll \beta$ and work to first order.

**2. (5 pts.)** Now, find the velocity of $S_3$ in $S_1$ with the appropriate velocity addition. Perform a single Lorentz transformation to express the $S_3$ coordinates in terms of the $S_1$ coordinates. Once again, work to first order. The answer will not be the same as part 1.

**3. (3 pts.)** Show that your answer in Problem 1 differs from your answer in Problem 2 by a spatial rotation. In other words, two successive Lorentz transformations in non-parallel directions cannot be combined as one Lorentz transformation. Rather, they are the combination of one Lorentz transformation and one spatial rotation. Determine the magnitude and direction of this spatial rotation in the current setup.

Then argue and explain why the answer in Problem 1 and not Problem 2 is the correct transformation.

**Precession Frequency**

In this section, we examine the precession of the electron's spin magnetic moment within the hydrogen atom. Electrons possess an attribute known as spin. One can imagine the electron as being a small, spherical charged particle that is spinning on some axis. Although this mental picture is not physically correct, it is enough for us. From this mental picture, we can gather that the electron will possess a dipole moment and angular momentum intrinsic to itself and not induced by any orbital motion. Respectively, these are known as the spin magnetic moment and the spin angular momentum that behave, in our model, just as their classical counterparts do. These two vector quantities, $\boldsymbol{\mu}$ and $\mathbf{L}$ respectively, are related by

$$\boldsymbol{\mu} \simeq -\frac{e}{m_e}\mathbf{L},$$

which is determined by experiment.

In this section, we will use the Bohr model of the hydrogen atom, where the electron circles the proton at some radius $r$, pulled in by the Coulomb force.

**4. (3 pts.)** In the laboratory frame, the electron orbits the proton with some velocity $v$ in the $x$-$y$ plane. Now switch to the instantaneous rest frame of the electron, where the proton moves with speed $v$ relative to the stationary electron. The moving proton will then induce some magnetic field at the electron's location.

Suppose the spin angular momentum of the electron points in some direction other than the direction of the magnetic field. Because the electron also possesses a spin magnetic moment, it will precess as a result of the torque done on it. Find the angular frequency of the precession of the electron's spin in terms of $r$ and whatever fundamental constants.

Ignore any relativistic effects.

**5. (6 pts.)** This problem will use the answer from Part 1. Once again, assume that the electron is orbiting in the $x$-$y$ plane.

Consider the instantaneous rest frame of the electron at some time $t$, $S_2$. Also consider the instantaneous rest frame of the electron at some time $t + dt$, $S_3$. Relative to the laboratory frame, $S_1$, $S_2$ will have velocity $v$. $S_3$ will have a velocity $dv$ relative to $S_2$, but $v$ and $dv$ won't be parallel.

The result from Part 1 tells us that $S_3$ will experience an infinitesimal rotation in this time $dt$ with respect to the laboratory frame. Since the electron is continuously accelerating, its rest frame, $S_3$, must then rotate continuously relative to the lab frame. Assume that the spin of the electron always points in the same direction in its rest frame. If the spin is not pointing in the $z$ direction, find the angular frequency of the spin's precession in terms of $r$ and whatever fundamental constants. Ignore the effects of the previous problem.

Note: although relativistic effects cannot be ignored, you can assume that the electron's velocity $v$ is not comparable to the speed of light in the calculation.

**6. (2 pts.)** Combine your answers from parts 4 and 5 and find the relativistically correct angular frequency of the precession of the electron's spin.

**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1vwaHW04dv8bo2hUUEJuXjUgvw6pE-BiS/view)
**Topic:** [[Special Relativity]], [[Modern-Quantum Physics]]
**Metodi:** [[Lorentz Transformation (metodo)|Lorentz Transformation]], [[Bohr Model & Quantization (metodo)|Bohr Model & Quantization]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Electron (object)|Electron]], [[Nucleus (object)|Nucleus]], [[Atom (object)|Atom]]


<div class="qlang-split" data-lang="it"></div>

T2: Thomas Precession

** Trasformazioni successive**

In questa sezione, esaminiamo cosa succede quando due successive trasformazioni di Lorentz vengono applicate in direzioni non parallele.

**1. (6 punti) ** Considerate i tre quadri di riferimento $S_1$, $S_2$ e $S_3$. Gli eventi osservati dal quadro $S_i$ saranno etichettati con le coordinate spazio-tempo $(x_i, y_i, z_i, t_i)$, per $i = 1, 2, 3$. Tutti e tre i quadri coincidono a $(0, 0, 0, 0)$. Supponiamo che il telaio $S_2$ viaggi con velocità $\beta c$ nella direzione $x_1$ del telaio $S_1$ e che il telaio $S_3$ viaggi con velocità $\beta'_x c\,\hat{i}_2 + \beta'_y c\,\hat{j}_2$ rispetto al telaio $S_2$.

Eseguire due trasformazioni di Lorentz successive: una che esprime le coordinate $S_3$ in termini di coordinate $S_2$ e un'altra che esprime le coordinate $S_2$ in termini di coordinate $S_1$. In seguito, come risposta finale, esprimere le coordinate $S_3$ in termini di coordinate $S_1$.

Supponiamo che $\beta' = (\beta'^2_x + \beta'^2_y)^{1/2} \ll \beta$ e lavoriamo al primo ordine.

**2. Ora, trovare la velocità di $S_3$ in $S_1$ con la velocità di aggiunta appropriata. Eseguire una sola trasformazione di Lorentz per esprimere le coordinate $S_3$ in termini di coordinate $S_1$. Ancora una volta, lavoro a primo ordine. La risposta non sarà la stessa della parte 1.

**3. (3 punti) ** Mostra che la tua risposta al problema 1 differisce dalla tua risposta al problema 2 mediante una rotazione spaziale. In altre parole, due trasformazioni di Lorentz successive in direzioni non parallele non possono essere combinate come una sola trasformazione di Lorentz. Piuttosto, sono la combinazione di una trasformazione di Lorentz e una rotazione spaziale. Determinare la grandezza e la direzione di questa rotazione spaziale nell'impostazione corrente.

Quindi, discutete e spiegate perché la risposta al problema 1 e non al problema 2 è la giusta trasformazione.

**Frequenza di precessione**

In questa sezione, esaminiamo la precisione del momento magnetico di spin dell'elettrone all'interno dell'atomo di idrogeno. Gli elettroni possiedono un attributo noto come spin. Si può immaginare l'elettrone come una piccola particella a carica sferica che gira su un asse. Anche se questa immagine mentale non è corretta fisicamente, è sufficiente per noi. Da questo quadro mentale, possiamo dedurre che l'elettrone avrà un momento diopolare e un momento angolare intrinseco a se stesso e non indotto da alcun movimento orbitale. Rispettivamente, questi sono noti come il momento magnetico di spin e il momento angolare di spin che si comportano, nel nostro modello, proprio come le loro controparti classiche. Queste due quantità vettoriali, $\boldsymbol{\mu}$ e $\mathbf{L}$, sono correlate rispettivamente da

$$\boldsymbol{\mu} \simeq -\frac{e}{m_e}\mathbf{L},$$

che viene determinata da un esperimento.

In questa sezione, useremo il modello di Bohr dell'atomo di idrogeno, dove l'elettrone circonda il protone a un certo raggio $r$, tirato in con la forza di Coulomb.

**4. (3 pts.) ** Nel quadro di laboratorio, l'elettrone orbita il protone con una certa velocità $v$ nel piano $x$-$y$. Ora passare al sistema di riposo istantaneo dell'elettrone, dove il protone si muove a velocità $v$ rispetto all'elettrone fermo. Il protone in movimento indurrà quindi un campo magnetico nella posizione dell'elettrone.

Supponiamo che il momento angolare di spin degli elettroni punti in una direzione diversa dalla direzione del campo magnetico. Poiché l'elettrone possiede anche un momento magnetico spin, precesserà a causa della coppia che viene fatta su di esso. Trova la frequenza angolare della precisione dello spin dell'elettrone in termini di $r$ e di qualsiasi costante fondamentale.

Ignorare qualsiasi effetto relativistico.

**5. (6 punti) ** Questo problema utilizzerà la risposta della parte 1. Ancora una volta, supponiamo che l'elettrone sia in orbita nel piano $x$-$y$.

Considerate il frame di riposo istantaneo dell'elettrone in un certo momento $t$, $S_2$. Si consideri anche il quadro di riposo istantaneo dell'elettrone in un certo momento $t + dt$, $S_3$. Relativamente al telaio di laboratorio, $S_1$, $S_2$ avrà velocità $v$. $S_3$ avrà una velocità $dv$ rispetto a $S_2$, ma $v$ e $dv$ non saranno parallele.

Il risultato della parte 1 ci dice che $S_3$ sperimenterà una rotazione infinitesimale in questo tempo $dt$ rispetto al quadro di laboratorio. Poiché l'elettrone è in continua accelerazione, il suo frame di riposo, $S_3$, deve quindi ruotare continuamente rispetto al frame di laboratorio. Supponiamo che il spin dell'elettrone punta sempre nella stessa direzione nel suo frame di riposo. Se il spin non punta nella direzione $z$, trovare la frequenza angolare della precisione del spin in termini di $r$ e di qualsiasi costante fondamentale. Ignorate gli effetti del problema precedente.

Nota: sebbene gli effetti relativistici non possano essere ignorati, si può presumere che la velocità dell'elettrone $v$ non sia paragonabile alla velocità della luce nel calcolo.

**6. (2 punti) ** Combina le risposte delle parti 4 e 5 e trova la frequenza angolare relativisticamente corretta della precisione dello spin dell'elettrone.

**Fonte:** [Testo (PDF) — p.6](https://drive.google.com/file/d/1vwaHW04dv8bo2hUUEJuXjUgvw6pE-BiS/view)
**Topic:** [[Special Relativity]], [[Modern-Quantum Physics]]
**Metodi:** [[Lorentz Transformation (metodo)|Lorentz Transformation]], [[Bohr Model & Quantization (metodo)|Bohr Model & Quantization]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Electron (object)|Electron]], [[Nucleus (object)|Nucleus]], [[Atom (object)|Atom]]



<span class="atom-split" id="q03" data-atom="q03" data-title="OPhO 2021 — Invitational — Quesito 3" data-tags="kg/prova,paese/International,comp/OPhO,topic/rotational-dynamics,argomento/meccanica,difficolta/5,multidisciplina/multi,object/cylinder"></span>

<div class="qlang-switch" data-default="en"></div>



**T3: Moving Media**

Interesting phenomena can arise in situations where there are 2 media that are moving with respect to each other. In particular, objects can move at much faster speeds than the relative speeds of the media, without using any energy. In this problem, we explore two such examples of this effect.

**Moving Cylinders**

Suppose we have three cylinders, two small cylinders and a large cylinder, of radii $r$ and $R$. The frictionless pivots (centers) of the cylinders are attached to a massless triangular frame, such that the large cylinder is in contact with the two small cylinders but the two small cylinders are not touching each other. The small cylinders each have a thin groove along their circumferences (which does not affect the moment of inertia significantly), so that the large cylinder makes contact with the small cylinder at a point with radial distance $\alpha r$ from the center of the small cylinder. The axes of all cylinders are perpendicular to the plane of the triangular frame. The system is placed on a level ground and a long flat horizontal board is put on top of the large cylinder, with the two small cylinders touching the ground (making contact at their outer edge with radial distance $r$, not $\alpha r$). Assume that the friction due to contact between all surfaces is large enough to prevent any slipping.

**1. (4 pts.)** The board is moved with speed $v$ in a direction perpendicular to the axes of the cylinders. Find the speed of the cylinder system.

**2. (5 pts.)** The mass of the small and large cylinders are $m$ and $M$, respectively. The mass of the board is $m'$. If at a moment in time the board is pushed with speed $v$ and acceleration $a$, find the power $P$ required to push the board. Assume the cylinders have uniform mass distribution.

![[OPhO_2021_Invitational_p8_f4.png]]
*Figure 4: A visual of the three cylinder setup.*

**Windsurfing**

In windsurfing, it is possible to sail faster than the wind without using any energy. Suppose we have a sailboat moving on a large, motionless body of water. The air of density $\rho$ is moving at a speed $v$ uniformly in one direction. If the sailboat is pointed in a certain direction and moves in that direction with velocity $u$, the drag force from the water $\mathbf{F}$ satisfies $\mathbf{F} \cdot \mathbf{u} = -\gamma u^2$, where $\gamma$ can be assumed to be a constant drag coefficient.

**3. (10 pts.)** If the wind is moving in the $\hat{x}$ direction, what is the maximum possible sustainable $x$-component of velocity for the sailboat? Assume that the sailboat can neither generate nor store energy in its interaction with the air. Also, the effective cross-sectional area of the sail is $A$ (this is the component of cross-sectional area that is perpendicular to the wind in the reference frame of the sailboat).

**4. (3 pts.)** What is the power dissipated due to the interaction with the water?

**5. (3 pts.)** It seems that the law of conservation of energy is being violated, as the speed of the sailboat isn't changing despite heat generation in the water. Explain why energy is still conserved.

**Fonte:** [Testo (PDF) — p.8](https://drive.google.com/file/d/1vwaHW04dv8bo2hUUEJuXjUgvw6pE-BiS/view)
**Topic:** [[Rotational Dynamics]], [[Fluid Mechanics]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation Laws (metodo)|Conservation Laws]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Cylinder (object)|Cylinder]]


<div class="qlang-split" data-lang="it"></div>

**T3: Medii in movimento**

I fenomeni interessanti possono verificarsi in situazioni in cui ci sono due media che si muovono l'uno rispetto all'altro. In particolare, gli oggetti possono muoversi a velocità molto più veloci delle velocità relative dei media, senza utilizzare alcuna energia. In questo problema, esploriamo due esempi di questo effetto.

**Cilindri in movimento**

Supponiamo di avere tre cilindri, due cilindri piccoli e un cilindro grande, di radii $r$ e $R$. I centri dei cilindri non fratturabili sono attaccati a un telaio triangolare senza massa, in modo che il grande cilindro sia in contatto con i due piccoli cilindri ma i due piccoli cilindri non si toccano. I cilindri piccoli hanno ciascun un sottile groove lungo le loro circonferenze (che non influisce significativamente sul momento di inerzia), in modo che il cilindro grande si faccia contatto con il cilindro piccolo in un punto con distanza radiale $\alpha r$ dal centro del cilindro piccolo. Gli assi di tutti i cilindri sono perpendicolari al piano del telaio triangolare. Il sistema è posizionato su un terreno piatto e una lunga tabella orizzontale piatta è posta sopra il grande cilindro, con i due piccoli cilindri che toccano il terreno (che si mettono in contatto al loro bordo esterno con la distanza radial $r$, non $\alpha r$). Supponiamo che l'attrito dovuto al contatto tra tutte le superfici sia sufficiente a prevenire qualsiasi scivolamento.

**1. (4 pts.)** La lavagna è spostata con velocità $v$ in direzione perpendicolare agli assi dei cilindri. Trova la velocità del sistema cilindrico.

**2. (5 pts.) ** La massa dei cilindri piccoli e grandi è rispettivamente $m$ e $M$. La massa della lavagna è $m'$. Se in un momento il pannello viene spinto con velocità $v$ e accelerazione $a$, trovare la potenza $P$ necessaria per spingere il pannello. Supponiamo che i cilindri abbiano una distribuzione di massa uniforme.

![[OPhO_2021_Invitational_p8_f4.png]]
*Figura 4: Una visualizzazione della configurazione dei tre cilindri.*

**Windsurfing**

Nel windsurf è possibile navigare più velocemente del vento senza usare energia. Supponiamo di avere una barca a vela che si muove su un grande e immobile corpo d'acqua. L'aria di densità $\rho$ si muove a velocità $v$ uniformemente in una direzione. Se la vela è puntata in una certa direzione e si muove in tale direzione con velocità $u$, la forza di resistenza dell'acqua $\mathbf{F}$ soddisfa $\mathbf{F} \cdot \mathbf{u} = -\gamma u^2$, dove $\gamma$ può essere presumita un coefficiente di resistenza costante.

**3. (10 pts.)** Se il vento si muove nella direzione $\hat{x}$, qual è il componente di velocità $x$ più sostenibile possibile per la barca a vela? Supponiamo che la barca a vela non possa né generare né conservare energia nell'interazione con l'aria. Inoltre, l'area di sezione trasversale effettiva della vela è $A$ (questa è la componente dell'area trasversale perpendicolare al vento nel telaio di riferimento della vela).

**4. (3 pts.)** Qual è la potenza dissipata a causa dell'interazione con l'acqua?

**5. (3 pts.)** Sembra che la legge della conservazione dell'energia sia stata violata, poiché la velocità della barca a vela non cambia nonostante la generazione di calore nell'acqua. Spiegate perché l'energia è ancora risparmiata.

**Fonte:** [Testo (PDF) — p.8](https://drive.google.com/file/d/1vwaHW04dv8bo2hUUEJuXjUgvw6pE-BiS/view)
**Topic:** [[Rotational Dynamics]], [[Fluid Mechanics]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation Laws (metodo)|Conservation Laws]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Cylinder (object)|Cylinder]]



<span class="atom-split" id="q04" data-atom="q04" data-title="OPhO 2021 — Invitational — Quesito 4" data-tags="kg/prova,paese/International,comp/OPhO,topic/circuits,argomento/elettromagnetismo,difficolta/5,multidisciplina/mono,object/capacitor,object/switch,object/wire,object/resistor,object/inductor"></span>

<div class="qlang-switch" data-default="en"></div>



**T4: Missing Energy**

**Part A**

**1. (3 pts.)** Consider a simple circuit with two parallel-plate capacitors of capacitance $C_1$ and $C_2$ connected to each other using purely conducting wires and a switch. One of the capacitors is initially charged to a voltage $V_0$, while the other one is completely uncharged. The circuit is kept in a square shaped figure of side length $\ell$ throughout the problem, while the diameter of the conducting wires is $D$. Find the initial total energy of the circuit when the switch is open, given by $E_0$, and a sufficiently long time after the switch is closed, given by $E_\infty$. Calculate the remaining energy $E_\Delta = E_0 - E_\infty$. What is $E_\Delta$ for the case $C_2 \to \infty$?

![[OPhO_2021_Invitational_p10_f5.png]]
*Figure 5: The two parallel plate capacitor-switch circuit.*

It seems odd for there to be a difference in energy as the circuit is a closed system. Three young scientists Fermi, Jackson, and Feynman have created different theories to find and verify the correct source of this missing energy.

**Thermal Losses: Fermi**

To investigate the cause of this missing energy, Fermi assumes that there must be an ohmic resistive load $r$ and a self-inductance $L$ in the circuit responsible for $E_\Delta$.

**2. (3 pts.)** Find the current in the circuit $I(t)$ as a function of time and $E_\Delta$ for the circuit.

**3. (1 pt.)** For small values of $r$, find the oscillation frequency $\Omega$ of $I(t)$.

**4. (1 pt.)** For $L = 0$, can Fermi's reasoning be correct for any value of $r$? If yes, what is this value of $r$?

**Dipole Radiation Losses: Jackson**

Jackson believes that the missing energy is dissipated in the form of dipole radiation losses due to the charges accelerating. He assumes that the electric dipole moment of the system remains constant during the process, but the magnetic moment is allowed to vary. Thus, he seeks to determine the maximal possible radiation losses. For this he uses Larmor's formula, which states that for small velocities relative to the speed of light $c$, total power radiated which the radiation power is defined as:

$$P_r = \frac{\ddot{m}^2}{4\pi\epsilon_0 c^3}$$

where $m$ is the magnetic moment of the circuit as a function of time. Ignore all relativistic effects and the possible charge accumulation in the wires compared to that on the capacitor plates. Moreover, note that he does not assume any resistance or self-inductance in the circuit in his model.

**5. (4 pts.)** Find the total energy dissipation $E_r$ due to this radiation.

**6. (1 pt.)** For what value of time interval $\Delta\tau$ taken by the charges to move from one capacitor to another, can Jackson's theory be reasoned true?

**Kinetic Energy: Feynman**

Feynman has the following hypothesis:

> The missing energy goes into the kinetic energy of the charge carriers going from $C_1$ to $C_2$.

Assume that the mean free path of collisions of the carriers is $\lambda > 2\ell$.

**7. (4 pts.)** Find the total kinetic energy $\Delta K$ gained by the carriers during a total charge transfer from $C_1$ to $C_2$.

**8. (1 pt.)** Could this be a valid hypothesis to explain the cause of the missing energy? When the charges get completely deposited on the plates of $C_2$, what happens to this kinetic energy?

**Part B**

Instead of charging one capacitor using the other, we take an ideal parallel-plate capacitor such that the surface charge density $\pm\sigma$ on its plates is uniform throughout both plates, and that the charges are 'fixed' to the surface as the plate expands. The dimensions of the plates are $a$, $b$ and the plate separation distance is $d$. The plate is now stretched quasi-statically by a factor of $\kappa$ in one of the dimensions such that the dimensions of the capacitor plates are now $\kappa a$, $b$ but the plate separation remains $d$.

**1. (6 pts.)** Calculate the work $dW$ done during stretching the plates of this capacitor. Also write a simplified form of this expression for $d \ll \kappa a, b$.

**2. (1 pt.)** In this case, there are no resistive loads, and since the process of plate expansion is quasi-static, there is no gain in kinetic energy of the charge carriers. Where does the energy disappear in this case?

**Fonte:** [Testo (PDF) — p.10](https://drive.google.com/file/d/1vwaHW04dv8bo2hUUEJuXjUgvw6pE-BiS/view)
**Topic:** [[Circuits]], [[Electrostatics]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Differential Equations (metodo)|Differential Equations]], [[Electric Potential Method (metodo)|Electric Potential Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Capacitor (object)|Capacitor]], [[Switch (object)|Switch]], [[Wire (object)|Wire]], [[Resistor (object)|Resistor]], [[Inductor (object)|Inductor]]


<div class="qlang-split" data-lang="it"></div>

**T4: Energia mancante **

**Parte A**

**1. (3 pts.)** Considera un circuito semplice con due condensatori a piastra parallela di capacità $C_1$ e $C_2$ collegati tra loro utilizzando fili puramente conduttori e un interruttore. Uno dei condensatori è inizialmente caricato a una tensione $V_0$, mentre l'altro è completamente scaricato. Il circuito è tenuto in forma quadrata di lunghezza laterale $\ell$ durante tutto il problema, mentre il diametro dei fili conduttori è $D$. Trova l'energia totale iniziale del circuito quando il interruttore è aperto, data da $E_0$, e un tempo sufficientemente lungo dopo che il interruttore è chiuso, data da $E_\infty$. Calcolare l'energia rimanente $E_\Delta = E_0 - E_\infty$. Qual è il valore $E_\Delta$ per il caso $C_2 \to \infty$?

![[OPhO_2021_Invitational_p10_f5.png]]
*Figura 5: Il circuito di commutazione dei condensatori delle piastre parallele.*

Sembra strano che ci sia una differenza di energia, visto che il circuito è un sistema chiuso. Tre giovani scienziati, Fermi, Jackson e Feynman, hanno creato teorie diverse per trovare e verificare la fonte corretta di questa energia mancante.

**Perdite termiche: Fermi**

Per indagare la causa di questa energia mancante, Fermi presume che debba esistere un carico resistente ohmico $r$ e un'auto-induzione $L$ nel circuito responsabile di $E_\Delta$.

**2. (3 pts.)** Trova la corrente nel circuito $I(t)$ come funzione del tempo e $E_\Delta$ per il circuito.

**3. (1 pt.)** Per i valori di $r$, si trova la frequenza di oscillazione $\Omega$ di $I(t)$.

**4. (1 pt.)** Per $L = 0$, il ragionamento di Fermi può essere corretto per qualsiasi valore di $r$? Se sì, qual è questo valore di $r$?

**Prospezioni di radiazione di polo: Jackson**

Jackson crede che l'energia mancante sia dissipata sotto forma di perdite di radiazioni dipoliche a causa dell'accelerazione delle cariche. Egli suppone che il momento di dipolo elettrico del sistema rimanga costante durante il processo, ma il momento magnetico è consentito di variare. Così cerca di determinare le perdite massime possibili da radiazioni. Per questo utilizza la formula di Larmor, che afferma che per piccole velocità relative alla velocità della luce $c$, la potenza totale irradiata che la potenza di radiazione è definita come:

$$P_r = \frac{\ddot{m}^2}{4\pi\epsilon_0 c^3}$$

dove $m$ è il momento magnetico del circuito in funzione del tempo. Ignorare tutti gli effetti relativistici e il possibile accumulo di carica nei fili rispetto a quello sulle placche condensatori. Inoltre, si noti che non assume alcuna resistenza o autoinduzione nel circuito nel suo modello.

**5. (4 punti) ** Trova la dissipazione energetica totale $E_r$ dovuta a questa radiazione.

**6. Per quale valore di intervallo di tempo $\Delta\tau$ si prendono le cariche per spostarsi da un condensatore all'altro, la teoria di Jackson può essere ragionevole vera?

**Energia cinetica: Feynman**

Feynman ha la seguente ipotesi:

> L'energia mancante entra nell'energia cinetica dei vettori di carica che vanno da $C_1$ a $C_2$.

Supponiamo che il percorso libero medio di collisioni dei vettori sia $\lambda > 2\ell$.

**7. (4 punti) ** Trova l'energia cinetica totale $\Delta K$ acquisita dai vettori durante un trasferimento totale di carica da $C_1$ a $C_2$.

**8. (1 p.t.)** Potrebbe essere una valida ipotesi per spiegare la causa dell'energia mancante? Quando le cariche vengono completamente depositate sulle placche di $C_2$, cosa succede a questa energia cinetica?

**Parte B **

Invece di caricare un condensatore utilizzando l'altro, prendiamo un condensatore di piastra parallela ideale in modo tale che la densità di carica superficiale $\pm\sigma$ sulle sue piastre sia uniforme in entrambe le piastre, e che le cariche siano "fissate" sulla superficie man mano che la piastra si espande. Le dimensioni delle lastre sono $a$, $b$ e la distanza di separazione delle lastre è $d$. La piastra è ora estesa quasi-staticamente da un fattore di $\kappa$ in una delle dimensioni in modo tale che le dimensioni delle piastre condensatori sono ora $\kappa a$, $b$, ma la separazione della piastra rimane $d$.

**1. (6 punti) ** Calcolare il lavoro $dW$ svolto durante lo striscio delle lastre di questo condensatore. Scrivere anche una forma semplificata di questa espressione per $d \ll \kappa a, b$.

**2. (1 pt.)** In questo caso non vi sono carichi resistivi e, poiché il processo di espansione delle piastre è quasi-statico, non vi è alcun aumento dell'energia cinetica dei portatori di carica. Dove scompare l'energia in questo caso?

**Fonte:** [Testo (PDF) — p.10](https://drive.google.com/file/d/1vwaHW04dv8bo2hUUEJuXjUgvw6pE-BiS/view)
**Topic:** [[Circuits]], [[Electrostatics]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Differential Equations (metodo)|Differential Equations]], [[Electric Potential Method (metodo)|Electric Potential Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Capacitor (object)|Capacitor]], [[Switch (object)|Switch]], [[Wire (object)|Wire]], [[Resistor (object)|Resistor]], [[Inductor (object)|Inductor]]
