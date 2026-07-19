---
title: OPhO 2024 — Invitational Experimental
tipo: prova
tags:
  - kg/prova
  - paese/international
  - comp/OPhO
---
<div class="atom-reader" data-prova="opho_2024_invitational_experimental"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="OPhO 2024 — Invitational Experimental — Quesito 1" data-tags="kg/prova,paese/International,comp/OPhO,topic/thermodynamics,argomento/termodinamica,difficolta/4,multidisciplina/multi,object/magnetic-dipole"></span>

<div class="qlang-switch" data-default="en"></div>



**2024 OPhO Experimental Exam: Ising Model of Ferromagnetism** (August 30 – September 1)

### Introduction

Paramagnetic materials have atoms with permanent magnetic dipoles, but point in random directions unless aligned by an external magnetic field. On the other hand, magnetic dipoles in ferromagnetic materials align with neighboring dipoles and can have a significant magnetization even without an external field.

Iron is one common example of a material that is ferromagnetic at room temperature. Other materials undergo a phase transition, where they are paramagnetic at higher temperatures, but become ferromagnetic below a certain temperature (the Curie temperature, $T_c$).

In this experiment, we will use the Ising Model and a Monte Carlo simulation to compute and examine the properties of this phase transition.

The Ising Model is a simple approximation for ferromagnetism. We take a 2D lattice of atoms and assume that each dipole points either up ($s_i = 1$) or down ($s_i = -1$) along the same axis. Then we run the Monte Carlo simulation, which uses the following algorithm:

1. Start with a 2D grid of size $L\times L$, where each site represents a spin that can be either $+1$ or $-1$. The initial configuration is randomly assigned.

2. **Energy Calculation:** For each spin at position $(i, j)$, calculate the change in energy ($\Delta E$) if the spin is flipped. This is done by considering the interaction of the spin with its nearest neighbors. The energy change $\Delta E$ (in the absence of an external field) is given by:

$$\Delta E = 2J \times \text{spin} \times \left( \sum_{\text{neighbors}} \text{spin} \right)$$

where $J$ is the interaction strength.

3. For each Monte Carlo step:
   - Randomly select a spin in the grid.
   - Calculate the energy change $\Delta E$ if this spin were to be flipped.
   - If $\Delta E < 0$, flip the spin.
   - If $\Delta E \ge 0$, flip the spin with probability $e^{-\Delta E / k_B T}$, where $T$ is the temperature and $k_B$ is the Boltzmann constant.

4. Repeat the spin-flipping process for a set number of steps, allowing the system to reach equilibrium.

5. The final configuration of the grid after the simulation, representing the state of the system at temperature $T$.

### Accessing the Program

To access the Python notebook, follow this link and make a copy to your own Google Drive. You will be able to perform all the code online without needing to download anything.

### Overview of Code

There are three cells to run experiments:

1. Varying the temperature via `T_list` which contains all of the simulated temperatures.
2. Varying the external magnetic field via `B_list` which contains all of the simulated external fields.
3. Varying both.

### Instructions for Using the Simulation

- The simulation uses a 50x50 grid to represent the 2D lattice of atoms. This grid is periodic, meaning that it wraps around at the edges, allowing for continuous boundary conditions.
- You can simulate the system at different temperatures by adjusting the `T_list` or `B_list` variable (based on desired experiment) in the code. The default temperatures provided are 1.0, 2.5, and 5.0.
- The number of Monte Carlo steps can be modified by changing the `n_steps` variable. The default is set to 100,000 steps, but you may increase or decrease this based on your needs.
- The interaction strength ($J$) and Boltzmann constant ($k_B$) are set to 1.0 by default. It is recommended not to change these values as they are critical to maintaining the accuracy of the model.
- Once you've adjusted the parameters, run the cells in the notebook to simulate the Ising Model at the chosen temperatures. The results will be visualized, showing the spin configuration of the grid for each temperature.

Below is an image of what the initial simulation should look like for the first cell:

![[OPhO_2024_Invitational_Experimental_p2_f1.png]]

For the second cell:

![[OPhO_2024_Invitational_Experimental_p2_f2.png]]

For the third cell:

![[OPhO_2024_Invitational_Experimental_p3_f1.png]]

### Phase Transition

For the following questions, include the figure with uncertainty if applicable, your reasoning, and any graphs if used.

**a)** Find the value of $T_c$ and explain what criteria you used.

**b)** Keeping the external magnetic field constant, plot the energy $E$ of the system as a function of temperature.

**c)** Plot the heat capacity $C$ of the system as a function of temperature. What are its maximum and minimum values?

A phase transition is first order in temperature if the energy is discontinuous, second order if the energy is continuous but its first derivative is discontinuous, etc. What is the order of the phase transition here?

Consider the net magnetization $M = \mu \sum_{i=1}^{N} s_i$ of the system.

**d)** At temperatures slightly below $T_c$, $M$ can be approximated as $M = \alpha |T_c - T|^{\beta}$. Find values for $\alpha$ and $\beta$.

**e)** Set $T = T_c$. Plot how the net magnetization reacts as $B$ is varied. Qualitatively, what do you observe? What happens if $T < T_c$?

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1xBX7TuxvS-YlGte3lVlK2k8J-1UtiXj_/view)

**Topic:** [[Thermodynamics]], [[Magnetism]]
**Metodi:** [[Statistical Averaging (metodo)|Statistical Averaging]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Magnetic Dipole (object)|Magnetic Dipole]]


<div class="qlang-split" data-lang="it"></div>

Esame sperimentale di OPhO: Modello di ising del ferromagnetismo (MSK1/) (2024 OPhO Exam: Ising Model of Ferromagnetism)

### Introduzione

I materiali paramagnetistici hanno atomi con dipoli magnetici permanenti, ma puntano in direzioni casuali a meno che non siano allineati da un campo magnetico esterno. D'altra parte, i dipoli magnetici nei materiali ferromagnetici si allineano con i dipoli vicini e possono avere una significativa magnetizzazione anche senza un campo esterno.

Il ferro è un esempio comune di materiale ferromagnetico a temperatura ambiente. Altri materiali subiscono una transizione di fase, in cui sono paramagneticamente ad alte temperature, ma diventano ferromagneticamente al di sotto di una certa temperatura (temperatura di Curie, $T_c$).

In questo esperimento, useremo il modello Ising e una simulazione di Monte Carlo per calcolare e esaminare le proprietà di questa transizione di fase.

Il modello di Ising è un'approssimazione semplice per il ferromagnetismo. Prendiamo una rete 2D di atomi e supponiamo che ogni dipolo punta su ($s_i = 1$) o giù ($s_i = -1$) lungo lo stesso asse. Quindi eseguiamo la simulazione di Monte Carlo, che utilizza il seguente algoritmo:

1. Inizia con una griglia 2D di dimensioni $L\times L$, dove ogni sito rappresenta uno spin che può essere $+1$ o $-1$. La configurazione iniziale è assegnata a caso.

2. **Calcolo dell'energia: ** Per ogni rotazione in posizione $(i, j)$, calcolare il cambiamento di energia ($\Delta E$) se la rotazione è ribaltata. Questo viene fatto considerando l'interazione del spin con i suoi vicini più vicini. Il cambiamento di energia $\Delta E$ (in assenza di un campo esterno) è dato da:

$$\Delta E = 2J \times \text{spin} \times \left( \sum_{\text{neighbors}} \text{spin} \right)$$

dove $J$ è la forza di interazione.

3. Per ogni passo di Monte Carlo:
- Selezionate un giro in griglia.
- Calcolare il cambiamento di energia $\Delta E$ se si inversa questo giro.
- Se $\Delta E < 0$, inversa la rotazione.
- Se $\Delta E \ge 0$, inversione della rotazione con probabilità $e^{-\Delta E / k_B T}$, dove $T$ è la temperatura e $k_B$ è la costante di Boltzmann.

4. Ripetere il processo di spinning-flipping per un determinato numero di passaggi, consentendo al sistema di raggiungere l'equilibrio.

5. La configurazione finale della griglia dopo la simulazione, che rappresenta lo stato del sistema a temperatura $T$.

### Accedere al programma

Per accedere al notebook Python, segui questo link e fai una copia sul tuo Google Drive. Potrai eseguire tutto il codice online senza dover scaricare nulla.

### Overview del codice

Ci sono tre cellule per eseguire esperimenti:

1. Variazione della temperatura via `T_list` che contiene tutte le temperature simulate.
2. Variazione del campo magnetico esterno tramite `B_list` che contiene tutti i campi esterni simulati.
3. - Variazione delle due.

### Instruzioni per l'uso della simulazione

- La simulazione utilizza una griglia 50x50 per rappresentare la rete 2D di atomi. Questa griglia è periodica, il che significa che si avvolge ai bordi, consentendo condizioni di confine continue.
- Si può simulare il sistema a diverse temperature regolaendo la variabile `T_list` o `B_list` (in base all'esperimento desiderato) nel codice. Le temperature predefinite fornite sono 1.0, 2.5 e 5.0.
- Il numero di passi di Monte Carlo può essere modificato modificando la variabile `n_steps`. La definizione predefinita è di 100.000 passi, ma puoi aumentare o diminuire in base alle tue esigenze.
- La forza di interazione ($J$) e la costante di Boltzmann ($k_B$) sono impostate a 1,0 per impostazione predefinita. Si raccomanda di non modificare questi valori in quanto sono fondamentali per mantenere l'accuratezza del modello.
- Una volta che hai regolato i parametri, eseguire le celle nel notebook per simulare il modello di Ising alle temperature scelte. I risultati saranno visualizzati, mostrando la configurazione di spin della griglia per ogni temperatura.

Di seguito è riportata un'immagine di come dovrebbe essere la simulazione iniziale per la prima cella:

![[OPhO_2024_Invitational_Experimental_p2_f1.png]]

Per la seconda cella:

![[OPhO_2024_Invitational_Experimental_p2_f2.png]]

Per la terza cella:

![[OPhO_2024_Invitational_Experimental_p3_f1.png]]

### Transizione di fase

Per le seguenti domande, inserisci la cifra con incertezza se del caso, il tuo ragionamento e eventuali grafici se del caso.

**a) ** Trova il valore di $T_c$ e spiega quali criteri hai utilizzato.

**b) ** Tenendo costante il campo magnetico esterno, tracciare l'energia $E$ del sistema in funzione della temperatura.

**c) ** Indicare la capacità termico $C$ del sistema in funzione della temperatura. Quali sono i valori massimi e minimi?

Una transizione di fase è di primo ordine di temperatura se l'energia è discontinuo, di secondo ordine se l'energia è continua ma la sua prima derivata è discontinuo, ecc. Qual è l'ordine della transizione di fase qui?

Considerate la magnetizzazione netta $M = \mu \sum_{i=1}^{N} s_i$ del sistema.

**d) ** A temperature leggermente inferiori a $T_c$, $M$ può essere approssimato a $M = \alpha |T_c - T|^{\beta}$. Trova i valori per $\alpha$ e $\beta$.

**e) ** Set $T = T_c$. Tracciare come la magnetizzazione netta reagisce come $B$ è variabile. Qualitativamente, cosa osservate? Che cosa succede se $T < T_c$?

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1xBX7TuxvS-YlGte3lVlK2k8J-1UtiXj_/view)

**Topic:** [[Thermodynamics]], [[Magnetism]]
**Metodi:** [[Statistical Averaging (metodo)|Statistical Averaging]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Magnetic Dipole (object)|Magnetic Dipole]]
