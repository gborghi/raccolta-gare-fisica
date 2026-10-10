---
title: IZhO 2026
tipo: prova
tags:
  - kg/prova
  - anno/2026
  - paese/Kazakhstan
  - comp/IZhO
  - cluster/Rotational Dynamics
---
<div class="atom-reader" data-prova="izho-2026-physexp_eng"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="IZhO 2026 — Quesito 1" data-tags="kg/prova,paese/Kazakhstan,comp/IZhO,cluster/Rotational Dynamics,topic/rotational-dynamics"></span>

<div class="qlang-switch" data-default="en"></div>



**Torsion: Construction of the Potential Curve**

*Experimental competition — January 12, 2026 (XXII IZhO). The Experimental competition consists of one problem. This part of the competition lasts 4 hours.*

The behavior of mechanical systems with one degree of freedom is completely determined by the dependence of the system's potential energy on the coordinate, the graph of which is called the potential curve. In many cases, a theoretical calculation of this dependence can be complicated and sometimes even impossible. In such situations, the potential curve can be obtained on the basis of experimental data.

In this work, you are required to determine the dependence of the potential energy on the coordinate for the free rotation of a metal rod suspended by two vertical threads. During all experiments, keep the thread length $l$ and the distance between them $h$ constant.

![[IZhO-2026-PhysExp_eng_p2_f1.png]]

To carry out the measurements, use the following procedure. Starting from the initial position, when the threads are vertical (1), rotate the rod by half a turn (2), so that the threads come into contact. Then continue rotating the rod so that the threads are twisted, making the required number of full turns $N$ (3). After that, rotate the rod by an additional quarter turn and release it. Start the stopwatch only when, during unwinding, the rod again reaches position (3). After that, measure the time for the required number of rotation turns until position (4). In the calculations, assume that the angular velocity of the rod in the initial position (3) is zero, despite the additional quarter turn.

![[IZhO-2026-PhysExp_eng_p2_f2.png]]

In this problem, two interrelated coordinates are used: $N$ – the number of turns during the twisting of the threads, counted from the lower position of the rod (2) upward; $k$ – the number of turns made by the rod during the unwinding of the threads, counted from position (3) at $N = 30$ downward. The unit of measurement for the coordinates is "one turn." Accordingly, the unit of velocity $V$ is "number of turns per second," with dimension $[V] = \text{s}^{-1}$. As a measure of energy, the square of the velocity $E = V^2$ is used, which is proportional to the rotational kinetic energy of the rod. Let us call the unit of energy in this case $[E] = \text{s}^{-2}$ – ***Ku*** (Kazakhstani unit). The potential energy of the rod is taken to be zero at position (3) for $N = 30$, unless another "zero" position is specified.

### Part 1. Theoretical Introduction

The mass of the rod is $m_1 = 50.0$ g, and the mass of one nut is $m_2 = 6.4$ g.

**1.1** Express the energy unit ***Ku*** in joules and calculate its numerical value.

During the measurements, you need to measure the times $t(k)$ over which the rod makes $k$ turns. Let this dependence be approximately described by the formula

$$t(k) = Ak^{\alpha},$$

where $A, \alpha$ are constants.

**1.2** Derive a formula for calculating the velocity $V(k)$ and kinetic energy $E(k)$ in ***Ku*** units as a function of the coordinate $k$, which may be formally treated as continuous. Express them in terms of the parameters $A$, $\alpha$, and $k$.

Let the potential energy $U$ be taken as zero at position (2), and let its dependence on the coordinate $N$ be approximately described by the formula:

$$U(N) = BN^{\beta}.$$

Denote by $T$ the time required for the rod to unwind from the initial position (3) to the lower position (4). Under these conditions, the approximate dependence $T(N)$ is given by the formula %% Kepler: nel PDF la formula di T(N) non è stampata (la frase finisce qui; più avanti, in 4.4, compare T(N) = GN^γ). %%

**1.3** Express the exponent $\gamma$ in terms of the exponent $\beta$.

### Part 2. Study of the Law of Motion

Set the rod in the initial position (3) with $N = 30$. Release the rod and use a stopwatch with lap memory to record the times $t(k)$ during which the rod makes $k$ turns from the initial position. Perform the measurements in the range $k = 0$ to $30$, taking data every three turns.

**2.1** Enter the measured values $t(k)$ into Table 1.

**2.2** Plot the graph of the law of motion $k(t)$.

To calculate the rod's velocity from the experimental data, use the symmetric formula

$$V(k) = \frac{6}{t(k+3) - t(k-3)}.$$

**2.3** Using the experimental data, calculate the values of the kinetic energy $E(k)$ for all measured values of the coordinate $k$. Enter the results into Table 1 in the column "$E(k)$ (exp.)."

**2.4** Plot the resulting dependence $E(k)$. Label it as No. 1.

**2.5** Write down the formula for the potential energy of the rod $U(k)$, expressing it in terms of $E(k)$.

**2.6** Plot the dependence of $t(k)$ on the number of turns $k$ using a logarithmic scale.

**2.7** Calculate the values of the parameters $A$ and $\alpha$, and estimate their uncertainties.

**2.8** Using the obtained values of the parameters $A$ and $\alpha$, calculate the kinetic energy values $E(k)$ in accordance with Section 1.2. Enter the results into Table 1 in the column "$E(k)$ (theor.)."

**2.9** Plot the calculated dependence of the rod's kinetic energy $E(k)$ on the same graph as in Section 2.4. Label it as No. 2.

### Part 3. Step-by-Step Probing

In this part, estimation of uncertainties is not required. To determine the parameters of the dependences, use the graphical method.

The smaller the interval, the more accurately the approximate (fitting) formulas describe the motion. In this part of the work, you are required to study the motion of the rod over small intervals of variation of the coordinate $N$, the boundaries of which are specified in the ***Writing Sheets***. The larger value corresponds to the initial position. For each interval, you must measure the law of motion, namely, the times during which the rod makes $k = 10$ turns from the initial position. Within each given interval of the coordinate $N$, the coordinate $k$ varies from 1 to 10. Perform the measurements with a step $\Delta k = 1$. Use a stopwatch with lap memory and record the time after each turn of the rod.

For each interval, assume that the obtained dependence $t(k)$ can be approximately described by the function $t(k) = Ak^{\alpha}$ with its own values of the parameters $A$ and $\alpha$, which you must determine. For each of the specified intervals, perform the following tasks.

**3.1** Measure the values of the times $t(k)$ during which the rod makes $k$ turns from the initial position.

**3.2** Plot the dependence $t(k)$ on the prepared sections of the ***Writing Sheets*** using a logarithmic scale.

**3.3** Draw a smoothing straight line through the last six points (for values of $k$ from 5 to 10).

**3.** Using the constructed linear graph, determine the values of the parameters $A$ and $\alpha$, indicating the formulas used for their calculation. %% Kepler: numerato «3.» nel PDF (sarebbe 3.4). %%

**3.5** Calculate the change in the kinetic energy of the rod $E_{5-10} = E(10) - E(5)$ as the coordinate $k$ changes from 5 to 10. Provide the formula used to calculate this quantity.

Summarize the obtained results. To this end, assume that the rod unwinds from the initial position $N = 30$.

**3.6** Using the data obtained in this part, calculate the values of the rod's kinetic energy $E(k)$ after $k = 5, 10, 15, 20, 25$, and 30 turns. Plot, on the graph from Section 2.4, the dependence obtained in this part. Label it as No. 3.

### Part 4. Unwinding Time

In this part, you are required to investigate the dependence of the total unwinding time $T(N)$ of the rod on the initial value $N$ until the lower position (4).

**4.1** Measure the dependence of the total unwinding time $T(N)$ of the rod on the number of turns $N$ for $N = 5, 10, 15, 20, 25, 30..$

**4.2** Estimate the uncertainty in the measurement of the unwinding time for $N = 10$. To do this, perform at least five measurements of this time.

**4.3** Plot the obtained dependence $T(N)$ using a logarithmic scale.

**4.4** Assuming that this dependence is described by the formula $T(N) = GN^{\gamma}$, determine the exponent $\gamma$ in this formula.

**4.5** Using the obtained value of the exponent $\gamma$, calculate the value of the exponent $\beta$ in the formula for the dependence of the potential energy on the coordinate, $U = BN^{\beta}$.

Assume that the unwinding of the rod starts from the position $N = 30$.

**4.6** Calculate the values of the rod's kinetic energy $E(k)$ after $k = 5, 10, 15, 20, 25, 30$ turns. Provide the formulas that you used to calculate $E(k)$.

Choose the value of the coefficient $B$ in the formula $U = BN^{\beta}$ such that the value of the kinetic energy at $k = 30$ coincides with the value of this energy calculated in Section 3.6.

**4.7** Plot, on the graph from Section 2.4, the dependence obtained in this part. Label it as No. 4.

*Table 1 and the Writing Sheets are not in the official PDF. The stopwatch used is described in [[prove/instruction_stopwatch_eng#q01|istruzioni dei cronometri FS-810 e FS-830]].*

**Topic:** [[Rotational Dynamics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]]


<div class="qlang-split" data-lang="it"></div>

**Torsione: costruzione della curva di potenziale**

*Prova sperimentale — 12 gennaio 2026 (XXII IZhO). La prova sperimentale consiste in un problema e dura 4 ore.*

Il comportamento dei sistemi meccanici con un grado di libertà è completamente determinato dalla dipendenza dell’energia potenziale del sistema dalla coordinata; il grafico di tale dipendenza viene chiamato curva di potenziale. In molti casi, il calcolo teorico di questa dipendenza può risultare complicato, o addirittura impossibile. In tali situazioni, la curva di potenziale può essere ottenuta sulla base di dati sperimentali.

In questo lavoro si chiede di determinare la dipendenza dell’energia potenziale dalla coordinata per il caso di un’asta metallica in rotazione libera, sospesa da due fili verticali. Durante tutti gli esperimenti, mantenere costanti la lunghezza dei fili $l$ e la distanza tra di essi $h$.

![[IZhO-2026-PhysExp_eng_p2_f1.png]]

Per effettuare le misurazioni, seguire la seguente procedura. Partendo dalla posizione iniziale, quando i fili sono verticali (1), ruotare l’asta di mezzo giro (2) in modo che i fili entrino in contatto. Successivamente continuare a ruotare l’asta fino a quando i fili non siano avvolti tra loro, effettuando il numero necessario di giri completi $N$ (3). Dopo di ciò, ruotare l’asta di un altro quarto di giro e lasciarla andare. Avviare il cronometro soltanto quando, durante lo svolgimento dei fili, l’asta raggiunge nuovamente la posizione (3). Misurare quindi il tempo impiegato per effettuare il numero necessario di giri fino alla posizione (4). Nei calcoli, si assuma che la velocità angolare dell’asta nella posizione iniziale (3) sia zero, nonostante l’aggiunta di quel quarto di giro.

![[IZhO-2026-PhysExp_eng_p2_f2.png]]

In questo problema vengono utilizzate due coordinate interconnesse: $N$ – il numero di giri effettuati durante la torsione dei fili, contati dalla posizione inferiore dell’asta (2) verso l’alto; $k$ – il numero di giri compiuti dall’asta durante lo svolgimento dei fili, contati partendo dalla posizione (3) con $N = 30$ e andando verso il basso. L’unità di misura per queste coordinate è “un giro”. Di conseguenza, l’unità di velocità $V$ è “numero di giri al secondo”, con dimensione $[V] = \text{s}^{-1}$. Per misurare l’energia viene utilizzato il quadrato della velocità, ovvero $E = V^2$, che è proporzionale all’energia cinetica rotazionale dell’asta. In questo caso, l’unità di energia viene definita come $[E] = \text{s}^{-2}$ – ***Ku*** (unità kazaka). L’energia potenziale dell’asta è considerata zero nella posizione (3) per $N = 30$, a meno che non venga specificata un’altra posizione “zero”.

### Parte 1. Introduzione teorica

La massa dell’asta è $m_1 = 50{,}0$ g, mentre la massa di un dado è $m_2 = 6{,}4$ g.

**1.1** Esprimere l’unità di energia ***Ku*** in joule e calcolarne il valore numerico.

Durante le misurazioni, è necessario determinare i tempi $t(k)$ durante i quali l’asta compie $k$ giri. Si supponga che questa dipendenza possa essere approssimativamente descritta dalla formula

$$t(k) = Ak^{\alpha},$$

dove $A, \alpha$ sono costanti.

**1.2** Ricavare una formula per calcolare la velocità $V(k)$ e l’energia cinetica $E(k)$ in unità ***Ku***, in funzione della coordinata $k$, che può essere considerata formalmente continua. Esprimerle in termini dei parametri $A$, $\alpha$ e $k$.

Si assuma che l’energia potenziale $U$ sia zero nella posizione (2), e si supponga che la sua dipendenza dalla coordinata $N$ possa essere approssimativamente descritta dalla seguente formula:

$$U(N) = BN^{\beta}.$$

Si indichi con $T$ il tempo necessario perché l’asta si srotoli dalla posizione iniziale (3) alla posizione inferiore (4). In queste condizioni, la dipendenza approssimativa di $T(N)$ è data dalla formula %% Kepler: nel PDF la formula di T(N) non è stampata (la frase finisce qui; più avanti, in 4.4, compare T(N) = GN^γ). %%

**1.3** Esprimere l’esponente $\gamma$ in termini dell’esponente $\beta$.

### Parte 2. Studio della legge del moto

Posizionare l’asta nella posizione iniziale (3) con $N = 30$. Lasciare andare l’asta e utilizzare un cronometro con memoria dei giri (lap) per registrare i valori $t(k)$ durante i quali l’asta compie $k$ giri dalla posizione iniziale. Eseguire le misurazioni nell’intervallo $k = 0$ a $30$, raccogliendo dati ogni tre giri.

**2.1** Inserire i valori misurati $t(k)$ nella Tabella 1.

**2.2** Tracciare il grafico della legge del moto $k(t)$.

Per calcolare la velocità dell’asta a partire dai dati sperimentali, utilizzare la formula simmetrica

$$V(k) = \frac{6}{t(k+3) - t(k-3)}.$$

**2.3** Utilizzando i dati sperimentali, calcolare i valori dell’energia cinetica $E(k)$ per tutte le coordinate $k$ misurate. Inserire i risultati nella Tabella 1, nella colonna “$E(k)$ (exp.).”

**2.4** Tracciare la dipendenza $E(k)$ ottenuta. Etichettarla come “N. 1”.

**2.5** Scrivere la formula dell’energia potenziale dell’asta $U(k)$, esprimendola in termini di $E(k)$.

**2.6** Tracciare la dipendenza di $t(k)$ dal numero di giri $k$ utilizzando una scala logaritmica.

**2.7** Calcolare i valori dei parametri $A$ e $\alpha$, e stimare le loro incertezze.

**2.8** Utilizzando i valori ottenuti per i parametri $A$ e $\alpha$, calcolare i valori dell’energia cinetica $E(k)$ secondo quanto indicato nella Sezione 1.2. Inserire i risultati nella Tabella 1, nella colonna “$E(k)$ (theor.).”

**2.9** Tracciare la dipendenza calcolata dell’energia cinetica dell’asta $E(k)$ sullo stesso grafico utilizzato nella Sezione 2.4. Etichettarla come “N. 2”.

### Parte 3. Sondaggio passo per passo

In questa parte, non è necessario stimare le incertezze. Per determinare i parametri delle relazioni osservate, utilizzare il metodo grafico.

Più piccolo è l’intervallo, più accurate sono le formule approssimative che descrivono il movimento. In questa parte del lavoro, si chiede di studiare il movimento dell’asta in piccoli intervalli di variazione della coordinata $N$, i cui limiti sono specificati nelle ***Writing Sheets*** (fogli risposte). Il valore più alto corrisponde alla posizione iniziale. Per ogni intervallo, è necessario misurare il tempo impiegato dall’asta per compiere $k = 10$ giri rispetto alla posizione iniziale; la coordinata $k$ varia da 1 a 10 all’interno di ciascun intervallo. Eseguire le misurazioni con un passo di $\Delta k = 1$, utilizzando un cronometro con memoria dei giri (lap) e registrando il tempo trascorso dopo ogni giro dell’asta.

Per ogni intervallo, si assume che la relazione temporale $t(k)$ possa essere approssimativamente descritta dalla funzione $t(k) = Ak^{\alpha}$, con valori specifici per i parametri $A$ e $\alpha$, da determinare. Per ciascun intervallo specificato, eseguire i seguenti compiti.

**3.1** Misurare i tempi $t(k)$ impiegati dall’asta per compiere $k$ giri rispetto alla posizione iniziale.

**3.2** Tracciare la relazione $t(k)$ sulle sezioni predisposte delle ***Writing Sheets*** (fogli risposte), utilizzando una scala logaritmica.

**3.3** Tracciare una retta di interpolazione per gli ultimi sei punti (per valori di $k$ da 5 a 10).

**3.** Utilizzando il grafico lineare costruito, determinare i valori dei parametri $A$ e $\alpha$, indicando le formule utilizzate per il loro calcolo. %% Kepler: numerato «3.» nel PDF (sarebbe 3.4). %%

**3.5** Calcolare la variazione dell’energia cinetica dell’asta $E_{5-10} = E(10) - E(5)$ quando la coordinata $k$ cambia da 5 a 10. Indicare la formula utilizzata per calcolare questa quantità.

Riassumere i risultati ottenuti. Per farlo, si assuma che l’asta si srotoli partendo dalla posizione iniziale $N = 30$.

**3.6** Utilizzando i dati ottenuti in questa parte, calcolare i valori dell’energia cinetica dell’asta $E(k)$ dopo $k = 5, 10, 15, 20, 25$ e 30 giri. Disegnare, sul grafico della Sezione 2.4, la dipendenza ottenuta in questa parte. Etichettarla come “N. 3”.

### Parte 4. Tempo di srotolamento

In questa parte, è necessario studiare la dipendenza del tempo totale di srotolamento $T(N)$ dell’asta dal numero iniziale di giri $N$ fino alla posizione inferiore (4).

**4.1** Misurare la dipendenza del tempo totale di srotolamento $T(N)$ dal numero di giri $N$ per i valori $N = 5, 10, 15, 20, 25, 30..$

**4.2** Stimare l’incertezza nella misurazione del tempo di srotolamento per $N = 10$. Per farlo, eseguire almeno cinque misurazioni di questo tempo.

**4.3** Disegnare la dipendenza ottenuta $T(N)$ utilizzando una scala logaritmica.

**4.4** Supponendo che questa dipendenza sia descritta dalla formula $T(N) = GN^{\gamma}$, determinare l’esponente $\gamma$ in questa formula.

**4.5** Utilizzando il valore ottenuto per l’esponente $\gamma$, calcolare il valore dell’esponente $\beta$ nella formula che descrive la dipendenza dell’energia potenziale dalla coordinata, $U = BN^{\beta}$.

Si assuma che lo srotolamento dell’asta inizi dalla posizione $N = 30$.

**4.6** Calcolare i valori dell’energia cinetica $E(k)$ dell’asta dopo $k = 5, 10, 15, 20, 25, 30$ giri. Indicare le formule utilizzate per il calcolo di $E(k)$.

Scegliere il valore del coefficiente $B$ nella formula $U = BN^{\beta}$ in modo che il valore dell’energia cinetica a $k = 30$ coincida con quello calcolato nella Sezione 3.6.

**4.7** Tracciare, sul grafico della Sezione 2.4, la dipendenza ottenuta in questa parte. Etichettarla come “N. 4”.

*La Tabella 1 e i fogli di lavoro non sono presenti nel PDF ufficiale. Il cronometro utilizzato è descritto in [[prove/instruction_stopwatch_eng#q01|istruzioni dei cronometri FS-810 e FS-830]].*
