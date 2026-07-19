---
title: OPhO 2025 — Invitational Part II
tipo: prova
tags:
  - kg/prova
  - paese/international
  - comp/OPhO
---
<div class="atom-reader" data-prova="opho_2025_invitational_part_ii"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="OPhO 2025 — Invitational Part II — Quesito 1" data-tags="kg/prova,paese/International,comp/OPhO,topic/newtonian-mechanics,argomento/meccanica,difficolta/4,multidisciplina/multi,object/ball"></span>

<div class="qlang-switch" data-default="en"></div>



**Experimental Question [15 marks] — Ball Knowledge [15 marks]**

Lionel finds himself on an unknown planet, with only a very precarious camera of fixed frame rate and a spherical football with him. He feels that the air is weird and that gravity is too, so he decides to put his skills to use and starts kicking his ball and recording the trajectory it makes with his camera. The football has a radius of $r = 11$ centimeters and a mass of $m = 430$ grams. Let the drag coefficient be $C_d = 0.47$. Despite his high skill, Lionel is still human; therefore, there will be some uncertainty in the speed, angle and angular speed he imparts on the ball.

The following equations determine the forces experienced by a ball traveling in the air:

$$\vec{F}_{\text{drag}} = -\frac{1}{2}\rho C_d A v^2 \,\hat{v}$$

$$\vec{F}_{\text{Magnus}} = K r\, \vec{\omega} \times \vec{v}$$

where $\rho$ is the air density, $A$ is the cross sectional area of the ball, $\vec{v}$ is the ball's velocity, $\vec{\omega}$ is the ball's angular velocity, and $K$ is the Magnus force coefficient. The angular deceleration felt by the ball is given by

$$\dot{\omega} = -B\omega v.$$

**Explanation of the simulation program.** The executable files are found in this Google Drive folder. Please select the folder that corresponds to the operating system of your computer. For Linux and Windows, simply download the executable file ("magnus.bin" or "magnus.exe", respectively) inside. For MacOS, download the file "magnus.zip", then double-click it to create the file "magnus sim.dist". Right-click on "magnus sim.dist" and select "Show Package Contents" to reveal the folder's contents; inside, locate the executable file "magnus". Do not delete any of the other files in the package!

Double-click the executable to run. You may have to temporarily disable your local malware-blocking software. On MacOS, if your computer blocks the opening of the executable, navigate to System Settings and go to Privacy & Security. Below Security, there should be a notification that "magnus" is trying to be opened; click "Allow anyways" or "Open anyways".

Please note that the executable may take a few moments to load. It will prompt you for the following quantities:

- Initial speed $v_0$ in m/s, restricted to the range $[5\text{ m/s}, 40\text{ m/s}]$; the uncertainty in $v_0$ is of order $0.5$ m/s.
- Initial angle of launch $\theta_0$ in degrees, restricted to positive $\theta_0$ only; the uncertainty in $\theta_0$ is of order $0.5^\circ$.
- Initial angular velocity $\omega_0$ in rad/s, restricted to the range $[-400\text{ rad/s}, 400\text{ rad/s}]$; the uncertainty in $\omega_0$ is of order $1$ rad/s. Only angular velocities perpendicular to the trajectory are allowed in the simulation. The initial angular velocity $\omega$ is positive when the ball is given underspin and is negative when the ball is given topspin.
- The desired name of the output text file, such as "output.txt".

The executable will then provide you with the location that the output file has been saved at. If you have trouble finding the output file, paste the location of the file's folder into the URL bar of your file explorer (in Mac Finder, use Cmd+Shift+G).

The output text file will contain the data points $(x, y)$ of the ball's trajectory that the camera captures, in chronological order. The executable will then ask you if you would like to run the simulation again.

If you wish, you may also use this Jupyter notebook to plot the trajectory. Make a copy of the notebook, and copy the output file's text into the indicated portion of the notebook's code.

Your task is to find the following quantities, with uncertainties, to the highest accuracy that you are able to. Provide all data, tables, graphs, and/or intermediate quantities you use.

- wind speed $v_w$ [2 pts]
- air density $\rho$ [2.6 pts]
- gravitational acceleration $g$ [2.6 pts]
- camera frame rate $r_c$ in Hz [0.8 pt]
- Magnus force coefficient $K$ [3 pts]
- inertial coefficient $B$ [4 pts]

**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1YFayR75SoYhFVdJsM4uGZ07CjneMTQvb/view)

**Topic:** [[Newtonian Mechanics]], [[Fluid Mechanics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Ball (object)|Ball]]


<div class="qlang-split" data-lang="it"></div>

**Questione sperimentale [15 punti]  Conoscenza della palla [15 punti]**

Lionel si ritrova su un pianeta sconosciuto, con solo una telecamera molto precaria e una palla da calcio sferica con lui. Sente che l'aria è strana e che la gravità lo è anche, quindi decide di usare le sue abilità e inizia a calciare la palla e a registrare la traiettoria che fa con la sua fotocamera. Il calcio ha un raggio di $r = 11$ centimetri e una massa di $m = 430$ grammi. Il coefficiente di resistenza deve essere $C_d = 0.47$. Nonostante la sua grande abilità, Lionel è ancora umano; quindi, ci sarà un certo incertezza nella velocità, angolo e velocità angolare che impartisce alla palla.

Le seguenti equazioni determinano le forze sperimentate da una palla che viaggia nell'aria:

$$\vec{F}_{\text{drag}} = -\frac{1}{2}\rho C_d A v^2 \,\hat{v}$$

$$\vec{F}_{\text{Magnus}} = K r\, \vec{\omega} \times \vec{v}$$

dove $\rho$ è la densità dell'aria, $A$ è l'area di sezione trasversale della palla, $\vec{v}$ è la velocità della palla, $\vec{\omega}$ è la velocità angolare della palla e $K$ è il coefficiente di forza Magnus. La decelerazione angolare sentita dalla palla è data da

$$\dot{\omega} = -B\omega v.$$

**Esplanamento del programma di simulazione.** I file eseguibili sono presenti in questa cartella Google Drive. Selezionare la cartella che corrisponde al sistema operativo del computer. Per Linux e Windows, scarica semplicemente il file eseguibile ("magnus.bin" o "magnus.exe", rispettivamente) all'interno. Per MacOS scaricare il file "magnus.zip", quindi fare doppio clic per creare il file "magnus sim.dist". Fare clic a destra su "magnus sim.dist" e selezionare "Mostra contenuti del pacchetto" per rivelare il contenuto della cartella; all'interno, individuare il file eseguibile "magnus". Non eliminare nessun altro file del pacchetto!

Fai doppio clic sull'esecuttable per eseguire. Potrebbe essere necessario disabilitare temporaneamente il software locale per bloccare il malware. Su MacOS, se il computer blocca l'apertura dell'esecutable, navigare alle impostazioni di sistema e andare a Privacy & Security. Sotto la sicurezza, dovrebbe esserci una notifica che "magnus" sta cercando di essere aperto; fare clic su "Permettere comunque" o "Apri comunque".

Si prega di notare che l'esecutable può richiedere alcuni minuti per caricare. Ti chiederà di ottenere le seguenti quantità:

- velocità iniziale $v_0$ in m/s, limitata all'intervallo $[5\text{ m/s}, 40\text{ m/s}]$; l'incertezza in $v_0$ è dell'ordine $0.5$ m/s.
- angolo di lancio iniziale $\theta_0$ in gradi, limitato solo a $\theta_0$ positivo; l'incertezza di $\theta_0$ è di ordine $0.5^\circ$.
- velocità angolare iniziale $\omega_0$ in rad/s, limitata all'intervallo $[-400\text{ rad/s}, 400\text{ rad/s}]$; l'incertezza in $\omega_0$ è dell'ordine $1$ rad/s. Nella simulazione sono consentite solo velocità angolari perpendicolari alla traiettoria. La velocità angolare iniziale $\omega$ è positiva quando la palla viene sottospinta e negativa quando la palla viene sopra spinta.
- Il nome desiderato del file di testo di uscita, come "output.txt".

L'esecutable vi fornirà quindi la posizione in cui il file di uscita è stato salvato. Se hai problemi a trovare il file di uscita, incolla la posizione della cartella del file nella barra URL del tuo archivista (in Mac Finder, usa Cmd+Shift+G).

Il file di testo di uscita contengono i punti dati $(x, y)$ della traiettoria della palla che la fotocamera cattura, in ordine cronologico. L'esecutable ti chiederà se vuoi eseguire di nuovo la simulazione.

Se lo desideri, puoi anche usare questo quaderno Jupyter per tracciare la traiettoria. Fare una copia del libro di appunti e copiare il testo del file di uscita nella parte indicata del codice del libro di appunti.

Il vostro compito è trovare le seguenti quantità, con incertezza, con la massima precisione che si può. Fornire tutti i dati, le tabelle, i grafici e/o le quantità intermedi utilizzate.

- velocità del vento $v_w$ [2 pts]
- densità dell'aria $\rho$ [2,6 pts]
- accelerazione gravitazionale $g$ [2,6 pts]
- frequenza fotovoltaica della fotocamera $r_c$ in Hz [0,8 pt]
- Coefficiente di forza Magnus $K$ [3 punti]
- coefficiente di inerzia $B$ [4 punti]

**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1YFayR75SoYhFVdJsM4uGZ07CjneMTQvb/view)

**Topic:** [[Newtonian Mechanics]], [[Fluid Mechanics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Ball (object)|Ball]]



<span class="atom-split" id="q02" data-atom="q02" data-title="OPhO 2025 — Invitational Part II — Quesito 2" data-tags="kg/prova,paese/International,comp/OPhO,topic/newtonian-mechanics,argomento/meccanica,difficolta/4,multidisciplina/multi,object/wedge,object/block,object/photon,object/gas,object/spinning-top"></span>

<div class="qlang-switch" data-default="en"></div>



**Theory Question 4 [5 marks] — Paradoxes [5 marks, 0.5 marks each]**

Physics is sometimes highly counterintuitive. Below, you will be provided with a number of scenarios which seem to imply some contradiction in the laws of physics. Please submit, in your solution, your resolution to these apparent paradoxes.

**Energy and a Wedge**

Consider a fixed wedge facing right of height $h$. Neglect friction, air resistance, and rotational effects. A block is placed on the top of the wedge and slides down it. At the bottom of the wedge, there is a bevel which enables the block to preserve its speed as it reaches the ground and moves horizontally to the right. The final velocity of the block is $v$.

Now consider the situation in a different frame, one which is moving to the right with velocity $v$ relative to the lab frame. Initially, the block is moving to the left with velocity $v$ and has a positive gravitational potential energy. In the final state, the block is stationary and it has zero gravitational potential energy (relative to the ground). Where has the energy gone?

**Sheets and magnets**

Consider a finite sheet of conducting metal moving in the $x$-direction and with its normal pointing in the $z$-direction, parallel to a uniform magnetic field. An EMF will form in the $y$-direction on the sheet. Now consider the frame moving along with the sheet; everything is static and no EMFs are formed. Why?

**Mistakes in the elevator**

The classical example of the equivalence principle in the textbook states that in the Earth's gravitational field of strength $g$ and in an elevator in free space accelerating upwards at $g$, a photon travelling horizontally across a distance $l$ will both drop a vertical distance of $\dfrac{gl^2}{2c^2}$. In fact, this is incorrect; the photon will drop three times as much of a distance on Earth. Why? How can this be reconciled with the equivalence principle?

**Divisive Gas**

Consider a diatomic gas consisting of molecules of two identical atoms, each of mass $m$, at a temperature $T$. Suppose an amount of energy just higher than the binding energy of the gas were injected into the system so that the bond gently breaks apart without imparting any additional kinetic energy to the atoms. Before the bond breakage each molecule was travelling at an rms speed of $\sqrt{\dfrac{3kT}{2m}}$. After the bond breakage the atoms travel at approximately the same speed so the rms speed is the same but the mass of the species has halved, so therefore the temperature has also halved. What is the flaw in this argument?

**Capacity Capacitor**

Consider a rectangular block of conductor in a strong uniform electric field perpendicular to one of the faces of the conductor. Let the thickness of the conductor be $d$; the two faces end up with surface charge densities $\epsilon_0 E d$ of opposing charges, where $E$ is the electric field strength. The attractive force from the opposite charges on the other side of the conductor cancels out with the force on the charges by the $E$-field and hence the block experiences no tensile stress. Alternatively, observe that electric field is absent inside the conductor and conduct a virtual work analysis; it seems, instead, that there is a tensile force on the block! What is the actual force on the block, and how can these approaches be reconciled?

**Sunspot**

It is well known that one can use a magnifying glass or other lens to focus sunlight onto a small point in order to heat it up. By focusing sufficient sunlight onto a sufficiently well insulated point it seems that we can heat the material above the temperature of the surface of the Sun; this would violate the second law of thermodynamics by transferring energy from a lower temperature region to a higher temperature region. Why can't we do this? (Hint: there is a common answer that you might think you know. In fact, it is not the complete story.)

**Spinny Spin**

Consider a top that is spinning and almost upright. We know that the top will precess around the vertical axis and, in the absence of friction, will not fall down. Now consider the rotating frame where the angular velocity is equal to that of the top. The top looks almost stationary in this frame but doesn't fall over. How can this be explained in the rotating frame?

**Spinny Spinny Spin**

Demonstrate quantitatively why the majority of structures in the universe take the form of disks.

**Circular Twin Paradox**

Suppose the universe had a closed geometry, i.e. it is the surface of a 3-sphere. Alice remains on Earth while Bob heads off in a spaceship in a random direction. After a sufficiently long time, Bob will show up approaching Earth from the other side assuming he travelled in a straight line. Bob did not accelerate during the entire trip and Alice and Bob experience the same curvature in spacetime as the universe is isotropic. Which twin is older when they meet up again? Explain.

**Occlusivity**

Consider two identical, always stationary, spheres A and B. Sphere A is much farther away than sphere B, and yet the angular size of sphere A is larger than the angular size of sphere B. Demonstrate quantitatively how this can be the case.

**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1YFayR75SoYhFVdJsM4uGZ07CjneMTQvb/view)

**Topic:** [[Newtonian Mechanics]], [[Special Relativity]]
**Metodi:** [[Conservation Laws (metodo)|Conservation Laws]], [[Symmetry Argument (metodo)|Symmetry Argument]], [[Conservation of Energy (metodo)|Conservation of Energy]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Wedge (object)|Wedge]], [[Block (object)|Block]], [[Photon (object)|Photon]], [[Gas (object)|Gas]], [[Spinning Top (object)|Spinning Top]]


<div class="qlang-split" data-lang="it"></div>

Teoria Domanda 4 [5 punti]  Paradossi [5 punti, 0,5 punti ciascuno]

La fisica è talvolta molto contraria all'intuizione. Qui sotto, verrà fornito un certo numero di scenari che sembrano implicare una certa contraddizione nelle leggi della fisica. In questa relazione, vorrei dire che il Parlamento europeo ha deciso di non fare altro che dare un'occhiata alla situazione.

**Energia e una Cunega**

Considera una ciglia fissa rivolta a destra di altezza $h$. Trascurare l'attrito, la resistenza dell'aria e gli effetti di rotazione. Un blocco viene posto sulla parte superiore della cucina e scivola giù. In fondo alla cuccia c'è un bisello che consente al blocco di mantenere la sua velocità quando raggiunge il suolo e si muove orizzontalmente a destra. La velocità finale del blocco è $v$.

Ora consideriamo la situazione in un quadro diverso, uno che si muove a destra con velocità $v$ rispetto al quadro di laboratorio. Inizialmente, il blocco si muove a sinistra con velocità $v$ e ha un'energia potenziale gravitazionale positiva. In stato finale, il blocco è stazionario e ha energia potenziale gravitazionale zero (relativa al suolo). Dove è andata l'energia?

**Legge e magneti**

Considerate un foglio finito di metallo conduttore che si muove nella direzione $x$ e che punta normalmente nella direzione $z$, parallelo a un campo magnetico uniforme. Un FEM si forma nella direzione $y$ della scheda. Ora, considerate che il telaio si muove insieme al foglio; tutto è statico e non si formano EMF. - Perché? - Perché?

**Erri nel monte**

L'esempio classico del principio di equivalenza nel libro di testo afferma che nel campo gravitazionale della Terra di forza $g$ e in un ascensore nello spazio libero che accelera verso l'alto a $g$, un fotone che viaggia orizzontalmente attraverso una distanza $l$ cadrà entrambe una distanza verticale di $\dfrac{gl^2}{2c^2}$. In realtà, questo è sbagliato; il fotone cadrà tre volte più di una distanza sulla Terra. - Perché? - Perché? Come si può conciliare questo con il principio di equivalenza?

**Gas di divisione**

Considera un gas diatomico costituito da molecole di due atomi identici, ciascuna di massa $m$, a una temperatura $T$. Supponiamo che una quantità di energia appena superiore all'energia di legame del gas sia stata iniettata nel sistema in modo che il legame si spezzi delicatamente senza fornire alcuna energia cinetica aggiuntiva agli atomi. Prima della rottura del legame ogni molecola viaggiava a una velocità rms di $\sqrt{\dfrac{3kT}{2m}}$. Dopo la rottura del legame gli atomi viaggiano a circa la stessa velocità quindi la velocità rms è la stessa ma la massa della specie è dimezzata, quindi la temperatura è anche dimezzata. Qual è il difetto di questa discussione?

**Capacitore di capacità**

Considerate un blocco rettangolare di conduttore in un forte campo elettrico uniforme perpendicolare a una delle facce del conduttore. Il conduttore deve avere un spessore $d$; le due facce finiscono con densità di carica superficiale $\epsilon_0 E d$ di cariche opposte, dove $E$ è la resistenza del campo elettrico. La forza attraente delle cariche opposte dall'altra parte del conduttore si annulla con la forza sulle cariche dal campo $E$ e quindi il blocco non subisce alcuna tensione di trazione. In alternativa, osservate che il campo elettrico è assente all'interno del conduttore e eseguite un'analisi virtuale del lavoro; invece, sembra che ci sia una forza di trazione sul blocco! Qual è la forza reale sul blocco, e come si possono conciliare questi approcci?

**L'incisione solare**

È noto che si può usare una lente di ingrandimento o un'altra lente per focalizzare la luce solare su un piccolo punto per riscaldarlo. Concentrandosi su un punto sufficientemente isolato, sembra che possiamo riscaldare il materiale al di sopra della temperatura della superficie del Sole; ciò violerebbe la seconda legge della termodinamica trasferendo energia da una regione a temperatura inferiore a una regione a temperatura superiore. Perché non possiamo farlo? (Signore: c'è una risposta comune che potresti pensare di conoscere. In realtà, non è la storia completa.)

** Spinny Spin**

Considerate una cima che ruota e quasi verticale. Sappiamo che la parte superiore si accenderà intorno all'asse verticale e, in assenza di attrito, non cadrà. Ora, consideriamo il telaio rotativo dove la velocità angolare è uguale a quella della parte superiore. La parte superiore sembra quasi fermata in questo quadro, ma non cade. Come si può spiegare questo in una cornice rotante?

Spinny Spinny Spinny Spin

Dimostra quantitativamente perché la maggior parte delle strutture dell'universo assume la forma di dischi.

Paradox gemello circolare

Supponiamo che l'universo abbia una geometria chiusa, cioè E' la superficie di una 3 sfere. Alice rimane sulla Terra mentre Bob parte in una nave spaziale in una direzione casuale. Dopo un tempo abbastanza lungo, Bob si mostrerà ad avvicinarsi alla Terra dall'altro lato, supponendo di aver viaggiato in linea retta. Bob non ha accelerato durante l'intero viaggio e Alice e Bob sperimentano la stessa curvatura nello spazio-tempo come l'universo è isotropo. Quale gemello sarà più vecchio quando si incontreranno di nuovo? - Spiegami.

**Occlusività**

Considerate due sfere identiche, sempre stazionarie, A e B. La sfera A è molto più lontana della sfera B, eppure la dimensione angolare della sfera A è più grande della dimensione angolare della sfera B. Dimostra quantitativamente come questo possa essere il caso.

**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/1YFayR75SoYhFVdJsM4uGZ07CjneMTQvb/view)

**Topic:** [[Newtonian Mechanics]], [[Special Relativity]]
**Metodi:** [[Conservation Laws (metodo)|Conservation Laws]], [[Symmetry Argument (metodo)|Symmetry Argument]], [[Conservation of Energy (metodo)|Conservation of Energy]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Wedge (object)|Wedge]], [[Block (object)|Block]], [[Photon (object)|Photon]], [[Gas (object)|Gas]], [[Spinning Top (object)|Spinning Top]]
