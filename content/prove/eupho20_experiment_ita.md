---
title: EuPhO 2020 — Sperimentale
tipo: prova
tags:
  - kg/prova
  - paese/international
  - comp/EuPhO
---
<div class="atom-reader" data-prova="eupho20_experiment_ita"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="EuPhO 2020 — Sperimentale — Quesito 1" data-tags="kg/prova,paese/International,comp/EuPhO,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/bi,topic/electrostatics,topic/newtonian-mechanics,argomento/meccanica,object/point-charge,object/electron,object/screen"></span>

<div class="qlang-switch" data-default="it"></div>



## Problema 1 — Una carica sconosciuta

### 1.1 Introduzione

Una carica puntiforme di valore $Q$ sconosciuto è mantenuta ferma in una regione di spazio. Degli elettroni vengono lanciati parallelamente all'asse $z$ partendo da lontano rispetto alla carica e vengono diffusi a causa della forza elettrostatica prodotta dalla carica fissa e quindi colpiscono uno schermo di rilevamento. È possibile conoscere i dettagli della carica sconosciuta variando l'energia cinetica iniziale e le coordinate iniziali $x_i$ e $y_i$ del fascio di elettroni e misurando le coordinate finali $x_f$ e $y_f$ del punto in cui l'elettrone colpisce lo schermo piatto di rilevamento di dimensioni finite, perpendicolare all'asse $z$ e situato a $z = 0$.

È utile conoscere la formula della diffusione alla Rutherford,

$$b = \frac{kqQ}{2E} \frac{1}{\tan(\theta/2)}$$

dove $b$ è il parametro d'impatto, $E$ è l'energia dell'elettrone, $q = -1.602 \times 10^{-19}\,\text{C}$ è la carica dell'elettrone, $k = 8.99 \times 10^9\,\text{N}\,\text{m}^2/\text{C}^2$, e $\theta$ è l'angolo di diffusione. Il parametro di impatto è definito come la minima distanza dell'elettrone dal bersaglio, supponendo che l'elettrone non venga influenzato dal bersaglio e quindi si muova in linea retta; l'angolo di diffusione è l'angolo tra il vettore di velocità iniziale dell'elettrone quando si trova lontano dal bersaglio e il vettore di velocità finale dell'elettrone lontano dal bersaglio dopo la diffusione.

### 1.2 Scopo

Lo scopo è determinare la posizione $(x_Q, y_Q, z_Q)$ e anche l'intensità e il segno della carica fissa $Q$, nel modo più preciso possibile. È necessario fornire stime approssimative e ordini di grandezza di questi risultati. C'è un errore gaussiano associato alla posizione iniziale del fascio dell'ordine di $0.5\,\text{mm}$.

Come per tutti gli esperimenti, devi fornire tabelle di dati chiaramente etichettate, grafici chiaramente etichettati e derivazioni di formule sufficienti per chiarire cosa hai misurato e come stai ottenendo i risultati.

### 1.3 Interfaccia del programma

Il programma richiede di fornire da tastiera un valore della tensione di accelerazione.

```
Beam accelerating voltage in V:
```

Immettere da tastiera un numero compreso tra 1 e 10000 e premere return. Il programma quindi richiede le coordinate iniziali di partenza, iniziando con $x_i$:

```
x-coordinate of the electron beam in cm:
```

Immettere da tastiera un numero compreso tra -20 e 20 e premere return. Infine, il programma richiede l'immissione da tastiera di $y_i$:

```
y-coordinate of the electron beam in cm:
```

Immettere da tastiera un numero compreso tra -20 e 20 e premere return. Se si immette un numero non valido in uno dei tre precedenti casi, il programma risponderà `Invalid entry.` e chiederà di nuovo il valore, ricordando i limiti consentiti.

Dopo aver inserito i tre numeri, il programma fornirà:

```
Electron beam fired with parameters (x, y, V) =
```

e riaffermerà i valori immessi, quindi:

```
Electron detected at (x, y) =
```

e indicherà la posizione sullo schermo dell'elettrone misurato. Tuttavia, se l'elettrone non colpisce lo schermo di dimensioni finite, verrà detto:

```
Electron not detected...
```

Il programma al termine si predispone per consentire l'inserimento di una nuova serie di coordinate iniziali.

<!--fig:start-->
![[_attachments/EuPhO20_experiment_ITA/EuPhO20_experiment_ITA_p1_f1.png]]
*Schema diffusione Rutherford con parametro b e angolo θ*
<!--fig:end-->
<!--fig:start-->
![[_attachments/EuPhO20_experiment_ITA/EuPhO20_experiment_ITA_p1_f2.png]]
*Schema scatola nera con masse e molle*
<!--fig:end-->

**Topic:** [[Electrostatics]], [[Newtonian Mechanics]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Physical Modeling (metodo)|Physical Modeling]], [[Error Propagation (metodo)|Error Propagation]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Point Charge (object)|Point Charge]], [[Electron (object)|Electron]], [[Screen (object)|Screen]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1TA013Qzdvm8X5oG3yUWo2qwojp5QU6xI/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1i2EQfs_tWpOxycssXq4GtRs5-G6niWF5/view)


<div class="qlang-split" data-lang="en"></div>

## Problem 1 — Hidden Charge

### 1.1 Introduction

An unknown point charge $Q$ is fixed in a region of space. Electrons launched parallel to the $z$ axis far from the charge will scatter electrostatically off of the fixed charge and strike a detecting screen. It is possible learn about the details of the hidden charge by varying the initial kinetic energy as well as the initial $x_i$ and $y_i$ coordinates of the electron beam and measuring the final coordinates $x_f$ and $y_f$ of where an electron strikes a finite flat screen perpendicular to the $z$ axis and located at $z = 0$.

It is useful to know the Rutherford scattering formula,

$$b = \frac{kqQ}{2E} \frac{1}{\tan(\theta/2)}$$

where $b$ is the impact parameter, $E$ is the energy of the electron, $q = -1.602 \times 10^{-19}\,\text{C}$ is the charge of the electron, $k = 8.99 \times 10^9\,\text{N}\,\text{m}^2/\text{C}^2$, and $\theta$ is the scattering angle. The impact parameter is defined as the closest approach of the electron to the target, assuming that the electron were unaffected by the target and hence would move in a straight line; the scattering angle is angle between the original velocity vector of the electron far from the target and the final velocity vector of the electron far from the target after scattering.

<!--fig:start-->
![[_attachments/EuPhO20_experiment_ITA/EuPhO20_experiment_ITA_p1_f1.png]]
*Electron trajectory: impact parameter b and scattering angle θ*
<!--fig:end-->

### 1.2 Task

The task is to determine the position $(x_Q, y_Q, z_Q)$ and also the magnitude and sign of the fixed charge $Q$, as precisely as possible. You should provide rough, order of magnitude error estimates on these results. There is Gaussian error associated with initial beam location that is on the order of $0.5\,\text{mm}$.

As with all experiments, you must provide clearly labelled tables of data, clearly labelled graphs, and sufficient formulae derivations to make it clear what you have measured, and how you are deriving your results.

### 1.3 Program Interface

The program asks for an accelerating voltage with the prompt

```
Beam accelerating voltage in V:
```

Enter a number between 1 and 10000, and press return. The program then asks for the initial launch coordinates, starting with $x_i$, with the prompt

```
x-coordinate of the electron beam in cm:
```

Enter a number between -20 and 20 and then press return. Finally, the program asks for $y_i$, with the prompt

```
y-coordinate of the electron beam in cm:
```

Enter a number between -20 and 20 and then press return. If you enter an invalid number for any of these three, the program will prompt you with `Invalid entry.` and will then prompt you for the value again, reminding you of the allowed limits.

After the three numbers have been entered, the program will output

```
Electron beam fired with parameters (x, y, V) =
```

and it will restate your entered values, and then

```
Electron detected at (x, y) =
```

and give the screen location of the detected electron. However, if the electron misses the finite size screen, you will be told

```
Electron not detected...
```

The program then repeats, allowing you to enter in a new set of initial coordinates.

<!--fig:start-->
![[_attachments/EuPhO20_experiment_ITA/EuPhO20_experiment_ITA_p1_f2.png]]
*Black box with masses and springs*
<!--fig:end-->

**Topic:** [[Electrostatics]], [[Newtonian Mechanics]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Physical Modeling (metodo)|Physical Modeling]], [[Error Propagation (metodo)|Error Propagation]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Point Charge (object)|Point Charge]], [[Electron (object)|Electron]], [[Screen (object)|Screen]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1TA013Qzdvm8X5oG3yUWo2qwojp5QU6xI/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1i2EQfs_tWpOxycssXq4GtRs5-G6niWF5/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="EuPhO 2020 — Sperimentale — Quesito 2" data-tags="kg/prova,paese/International,comp/EuPhO,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/bi,topic/oscillations-e-waves,topic/newtonian-mechanics,argomento/meccanica,object/tank-container,object/spring,object/block"></span>

<div class="qlang-switch" data-default="it"></div>



## Problema 2 — Una scatola nera

### 2.1 Introduzione

Hai una scatola nera meccanica rigida composta da un recipiente di massa $m_1$. All'interno del recipiente c'è un oggetto di massa $m_2$ appeso a una molla di massa trascurabile e di costante elastica $k_1$ che è fissata al soffitto della scatola. Un'altra massa $m_3$ è appesa alla massa $m_2$ tramite un'altra molla senza massa e di costante elastica $k_2$. È presente una piccola resistenza viscosa che dipende dalla velocità degli oggetti. L'accelerazione di gravità della Terra è $g = 9.81\,\text{m/s}^2$ ed è parallela ai lati della scatola.

La scatola può essere spostata verso l'alto o verso il basso con un'accelerazione costante a tratti. L'andamento dell'accelerazione può essere programmato tramite input fornendo la durata (in secondi) e l'accelerazione (in $\text{m/s}^2$) di ogni step. La simulazione mostra in "tempo reale" la forza $F$ esercitata sulla scatola necessaria per mantenere l'accelerazione data in quell'istante, insieme alla lettura del tempo. La simulazione registrerà anche le letture in un file di testo nella stessa cartella del programma. Tutte le simulazioni inizieranno sempre con la stessa configurazione iniziale per le masse.

**Nota:** Ogni misurazione della forza $F$ ha un piccolo errore casuale. Le molle sono lineari per deformazioni ragionevolmente piccole, ma non lineari per deformazioni maggiori. I valori $k_1$ e $k_2$ sono definiti come la costante elastica di ogni molla per piccole deformazioni vicine all'equilibrio quando la scatola è a riposo. La forza $F$ e l'accelerazione sono considerati positivi se diretti verso l'alto. La lunghezza del lato della scatola è $0.6\,\text{m}$ e la scatola inizialmente si trova al centro di una stanza di altezza $3\,\text{m}$. Una simulazione termina automaticamente se la scatola colpisce il soffitto o il pavimento o se una delle masse si scontra con la scatola o con l'altra massa.

La figura non è disegnata in scala.

### 2.2 Scopo

Lo scopo è determinare tutti i parametri: $m_1$, $m_2$, $m_3$, $k_1$, $k_2$. Non è necessario fornire un'analisi degli errori per questi risultati.

Come per tutti gli esperimenti, devi fornire tabelle di dati chiaramente etichettate, grafici chiaramente etichettati e derivazioni di formule sufficienti per chiarire cosa hai misurato e come stai ottenendo i risultati.

### 2.3 Interfaccia del programma

Inizialmente, il programma richiede una sequenza di input da tastiera. Hai le seguenti possibilità.

- Inserire due numeri e premere return per aggiungere uno step all'andamento dell'accelerazione, per esempio: `1.5 -0.4`. Il primo numero rappresenta la durata dello step in secondi (deve essere un multiplo di $0.01\,\text{s}$) e il secondo numero rappresenta l'accelerazione in $\text{m/s}^2$ (deve essere compreso tra $-30$ e $30$).
- Inserire `repeat` e un numero intero e premere return per ripetere le azioni, per esempio: `repeat 10`. Il numero intero rappresenta il numero di volte che si vuole ripetere le azioni. Ogni azione ripetuta finisce con `endrepeat`.
- Inserire `endrepeat` per terminare la ripetizione delle azioni.
- Inserire `sample` e un numero e premere return per cambiare il tempo di campionamento, per esempio: `sample 0.4`. Il numero rappresenta il nuovo tempo di campionamento che è il tempo dopo il quale ogni nuova lettura è registrata in un file testo. Il tempo di campionamento deve essere un multiplo di $0.01\,\text{s}$, che è anche il tempo di campionamento di default.
- Inserire `begin` per terminare la sequenza e iniziare la simulazione.

È anche possibile scrivere azioni multiple sulla stessa linea e quindi premere return. Per esempio, è possibile inserire:

```
sample 0.4 repeat 10 1.5 0.4 1.5 -0.4 endrepeat begin
```

per iniziare una simulazione dove si è cambiato il tempo di campionamento al valore $0.4\,\text{s}$ e accelerare la scatola rispettivamente con $a = 0.4\,\text{m/s}^2$ e $a = -0.4\,\text{m/s}^2$ 10 volte.

Se si inserisce un input non valido, si otterrà uno dei seguenti messaggi di errore:

- Se l'accelerazione è fuori dall'intervallo permesso: `Acceleration is out of range.`
- Se la durata dell'accelerazione è fuori dall'intervallo permesso: `Duration is out of range.`
- Se il tempo di campionamento è fuori dall'intervallo permesso: `Sampling time is out of range.`
- Se il numero di ripetizioni è fuori dall'intervallo permesso: `Number of repeat times is out of range.`
- Se si prova a ripetere azioni all'interno di un'altra azione ripetuta: `Cannot repeat actions inside another repeat.`
- Se si prova a terminare la ripetizione senza un'azione di fine ripetizione: `Cannot end repeat outside repeat.`
- In tutti gli altri casi: `Invalid entry.`

Dopo aver inserito `begin`, il programma chiederà di inserire da tastiera un nome per il file di restituzione dei dati:

```
Enter name for output file (e.g. "results"). You should use Latin letters and numbers because some special characters are not allowed.
```

Inserire un nome e premere return. Le letture verranno salvate in un file `.txt` con il nome indicato nella stessa cartella del programma.

Successivamente, il programma visualizzerà `Begin experiment.` e inizia l'esperimento. Il programma visualizzerà quindi il tempo attuale dall'inizio dell'esperimento (`Time (s)`), il valore misurato della forza $F$ (`Force (N)`) e l'accelerazione della scatola (`Accel (m/s^2)`).

Il programma visualizzerà quindi uno dei seguenti messaggi:

- Se la simulazione si è conclusa con successo: `Experiment ended successfully.`
- Se la scatola tocca il soffitto: `The box hit the ceiling. Experiment ended.`
- Se la scatola tocca il pavimento: `The box hit the floor. Experiment ended.`
- Se le masse all'interno della scatola urtano tra loro o colpiscono le pareti della scatola: `Masses and/or the box collided. Experiment ended.`

Dopo la conclusione della simulazione è possibile iniziarne un'altra.

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Physical Modeling (metodo)|Physical Modeling]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Hooke's Law (metodo)|Hooke's Law]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Tank/Container (object)|Tank/Container]], [[Spring (object)|Spring]], [[Block (object)|Block]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1TA013Qzdvm8X5oG3yUWo2qwojp5QU6xI/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1i2EQfs_tWpOxycssXq4GtRs5-G6niWF5/view)


<div class="qlang-split" data-lang="en"></div>

## Problem 2 — Black box

### 2.1 Introduction

You have a rigid mechanical black box consisting of a container of mass $m_1$. Inside the container there is a load of mass $m_2$ that hangs on an effectively massless spring of stiffness $k_1$ from the ceiling of the box. Another mass $m_3$ is hanged to the mass $m_2$ via another massless spring of stiffness $k_2$. There is a small viscous drag which depends on the velocity of the objects. The gravity of Earth is $g = 9.81\,\text{m/s}^2$ and is parallel to the sides of the box.

The box can be moved up or down with a piece-wise constant acceleration. The acceleration pattern can be programmed through input by giving the duration (in seconds) and acceleration (in $\text{m/s}^2$) for each step. The simulation shows in "real time" the force $F$ exerted to the box that is needed to maintain the given acceleration at the current moment of time, together with the reading of time. The simulation will also output the readings to a text file in the same folder as the program. All simulations will always start with the same initial configuration for the masses.

**Note:** Every measurement of force $F$ has a small random error. The springs are linear for reasonably small deformations, but nonlinear for larger deformations. The values $k_1$ and $k_2$ are defined to be the stiffness of each spring for small deformations near equilibrium when the box is at rest. Force $F$ and acceleration are considered to be positive if they are directed upwards. The side length of the box is $0.6\,\text{m}$ and the box is initially in the middle of a room with height $3\,\text{m}$. An experiment ends automatically if the box hits the ceiling or the floor, or if any of the masses collide with the box or with the other mass. The figure is not drawn to scale.

### 2.2 Task

The task is to determine all the parameters: $m_1$, $m_2$, $m_3$, $k_1$, $k_2$. You do not need to provide an error analysis for these results.

As with all experiments, you must provide clearly labelled tables of data, clearly labelled graphs, and sufficient formulae derivations to make it clear what you have measured, and how you are deriving your results.

### 2.3 Program Interface

Initially, the program asks for a sequence of input actions. You have the following possibilities.

- Enter two numbers and press return to add a step to the acceleration pattern, for example: `1.5 -0.4`. The first number should be the duration of the step in seconds (must be a multiple of $0.01\,\text{s}$) and the second number should be the acceleration in $\text{m/s}^2$ (must be between $-30$ and $30$).
- Enter `repeat` and an integer and press return to repeat actions, for example: `repeat 10`. The integer should be the number of times you want to repeat actions. Every repeat action should end with an `endrepeat` action (see below).
- Enter `endrepeat` to end repeating actions. If you start the experiment, all actions between `repeat` and `endrepeat` will be repeated a given number of times. You cannot repeat actions inside another repeat.
- Enter `sample` and a number and press return to change the sampling time, for example: `sample 0.4`. The number should be the new sampling time which is the time after which every new reading is output to the text file. The sampling time must be a multiple of $0.01\,\text{s}$, which is also the default sampling time.
- Enter `begin` to finish the sequence and start the experiment.

You can also write multiple actions on the same line and then press return. For example, you can enter

```
sample 0.4 repeat 10 1.5 0.4 1.5 -0.4 endrepeat begin
```

to start an experiment where you change the sampling time to $0.4\,\text{s}$ and accelerate the box respectively with $a = 0.4\,\text{m/s}^2$ and $a = -0.4\,\text{m/s}^2$ ten times.

If you enter an invalid input, you will get one of the following error messages and you can try to enter an action again.

- If acceleration is out of range: `Acceleration is out of range.`
- If duration of acceleration is out of range: `Duration is out of range.`
- If sampling time is out of range: `Sampling time is out of range.`
- If the number of repeat times is out of range: `Number of repeat times is out of range.`
- If you try to repeat actions inside another repeat action: `Cannot repeat actions inside another repeat.`
- If you try to end repeat without a repeat action to end: `Cannot end repeat outside repeat.`
- In all other cases: `Invalid entry.`

After you enter `begin`, the program will ask you for a name for the output file with the prompt

```
Enter name for output file (e.g. "results"). You should use Latin letters and numbers because some special characters are not allowed.
```

Enter a name and press return. You are advised to use only Latin letters and numbers for the name. Other characters may or may not be allowed in the filename and in case of an invalid filename the readings will not be saved. The readings will be saved in a .txt file with the given name in the same folder as the program.

After this, the program will display `Begin experiment.` and start the experiment. The program will then display the current time since the beginning of the experiment (`Time (s)`), measured value of force $F$ (`Force (N)`) and acceleration of the box (`Accel (m/s^2)`). The readings will be similarly displayed in the text file.

The program will then display one of the following messages.

- If the experiment ended successfully: `Experiment ended successfully.`
- If the box hit the ceiling: `The box hit the ceiling. Experiment ended.`
- If the box hit the floor: `The box hit the floor. Experiment ended.`
- If the masses inside the box collided or one of the masses inside the box collided with the box: `Masses and/or the box collided. Experiment ended.`

After the experiment ends, you can start another experiment.

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Physical Modeling (metodo)|Physical Modeling]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Hooke's Law (metodo)|Hooke's Law]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Tank/Container (object)|Tank/Container]], [[Spring (object)|Spring]], [[Block (object)|Block]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1TA013Qzdvm8X5oG3yUWo2qwojp5QU6xI/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1i2EQfs_tWpOxycssXq4GtRs5-G6niWF5/view)
