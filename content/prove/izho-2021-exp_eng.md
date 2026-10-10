---
title: IZhO 2021
tipo: prova
tags:
  - kg/prova
  - anno/2021
  - paese/Kazakhstan
  - comp/IZhO
  - cluster/Oscillations & Waves
---
<div class="atom-reader" data-prova="izho-2021-exp_eng"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="IZhO 2021 — Quesito 1" data-tags="kg/prova,paese/Kazakhstan,comp/IZhO,cluster/Oscillations &amp; Waves,topic/oscillations-waves"></span>

<div class="qlang-switch" data-default="en"></div>



**COMPUTER EXPERIMENT: A mathematical pendulum or what angle can be considered rather small ...**

*Experimental competition — 9 January 2021 (XVII IZhO).*

At its core, physics is an experimental science and this is definitely its strength. However, without comprehending a large number of experimental facts, physics would degenerate into a description of a huge amount of phenomena and processes. This is how the physical laws and the corresponding models came to life in the remote past by ignoring insignificant features of the subject under consideration. In recent decades, rapid progress has been witnessed in such a field as computer modeling or, as it has become common to say, a computer experiment. The point is that the developed physical models can be directly implemented on a computer in the form of a computational process and the regularities of interest can be thoroughly investigated in their pure forms. In this competition, you are asked to carry out such a computer experiment for a well-known system of a mathematical pendulum.

A formula is well known for the period of oscillation of a mathematical pendulum of length $l$ subject to a uniform gravity field of the Earth, characterized by the acceleration of gravity $g$. However, this formula is only applicable for rather small deflection angles. The main question that you have to answer when doing this computational experiment is: ***"What angular deflection can be considered small?"***

In the educational literature on laboratory experiments, you can find an indication that the maximum deflection angle should not exceed $1^\circ$, $2^\circ$, $5^\circ$, etc. You must answer the above question on the basis of this computer experiment! Namely, you are asked to study the dependence of the oscillation period of a mathematical pendulum on its amplitude, which is the maximum angular deflection from the vertical.

The order of conducting and processing the results of a computer experiment does not differ much from the order of a real, full-scale experiment. Therefore, the parts of this problem directly correspond to the main stages of a real physical experiment.

### 1. Constructing a theoretical model.

![[IZhO-2021-Exp_eng_p1_f1.png]]

Consider a mathematical pendulum, which is a small massive ball suspended on an inextensible thread of length $l$. The pendulum is subject to the gravity field with the free fall acceleration $g$. In the following neglect the air resistance completely.

**1.1** Write down a formula for the period $T$ of small oscillations of a mathematical pendulum.

Assume that at the initial moment of time $t_0 = 0$ the angle of the thread deflection from the vertical is $\varphi_0$, and the initial velocity of the ball is equal to zero. The ball moves along an arc of a circle, therefore, its position is determined by the angle of the thread deflection from the vertical $\varphi$, and the rate of change of this angle in time is determined by the angular velocity $\omega = \dfrac{d\varphi}{dt}$.

**1.2** Obtain an exact formula for the dependence of the angular velocity of the pendulum on the deflection angle $\omega(\varphi)$ for a given angular amplitude $\varphi_0$ and known values of $l, g$.

The motion of the pendulum is symmetrical with respect to the vertical, therefore, to calculate the period of oscillation, it is sufficient to evaluate the time $t_1$ of its motion from the maximum to zero deflection.

**1.3** Write down an exact expression for calculating the time $t_1$ from the known dependence of the angular velocity on the deflection angle $\omega(\varphi)$.

**1.4** Express a period of oscillations $T$ in terms of time $t_1$.

In a computer experiment, when performing calculations, real dimensional quantities are rarely used, since they can have very different orders of magnitude and are extremely inconvenient. Usually, all quantities are made dimensionless or reduced with the aid of some values characteristic for a given problem. For example, in our study, the characteristic time is the period of oscillations, so it is convenient to introduce the dimensionless time $\tau$, which is determined by the following formula:

$$\tau = t\sqrt{\frac{g}{l}}.$$

**1.5** Write down a formula relating the angular velocity in dimensionless units $\tilde{\omega} = \dfrac{d\varphi}{d\tau}$ to the previously defined angular velocity $\omega$.

**1.6** Determine a period $\tilde{T}$ of small oscillations of the mathematical pendulum in the dimensionless units of time.

**1.7** Determine a dependence of the angular velocity $\tilde{\omega}$ on the deflection angle $\varphi$: $\tilde{\omega}(\varphi)$.

**ATTENTION! In what follows, the introduced dimensionless quantities are used everywhere: time $\tau$, period $\tilde{T}$ and angular velocity $\tilde{\omega}$, which are respectively denoted as $t$, $T$ and $\omega$.**

### 2. Designing an experimental setup, planning an experiment.

![[IZhO-2021-Exp_eng_p2_f2.png]]

In a computer experiment, this stage corresponds to the development of a calculation algorithm. In this case, the main idea of numerical (computer) calculations is to divide the trajectory of motion into small sections, in which the motion is described approximately.

We divide the interval of motion from $\varphi = \varphi_0$ to $\varphi = 0$ into $N$ equal intervals of width $\Delta\varphi$. Let us denote the splitting points as $\varphi_k$, $k = 0, 1, \ldots N$ and the angular velocities at these points as $\omega_k$. The main approximation used in further calculations is that at each interval from $\varphi_k$ to $\varphi_{k+1}$ the motion of the pendulum is considered uniformly accelerated. It is natural to expect that with an increase in the number of partition intervals $N$, the calculation accuracy should grow.

Within the framework of the approximation made, it is straightforward to find the time of the pendulum motion in the interval from $\varphi_0$ to 0. For a given amplitude $\varphi_0$ and the number of partition intervals $N$, the calculation algorithm is revealed in the sequence of answers to the following questions.

**2.1** Determine the partition interval $\Delta\varphi$.

**2.2** Determine the coordinates of the splitting points $\varphi_k$.

**2.3** Express the angular velocity $\omega_k$ at the point $\varphi_k$ at an arbitrary initial angle of deflection $\varphi_0$. Write down this formula for a particular case of $\varphi_0 = \dfrac{\pi}{2}$.

**2.4** Determine the travel time $\Delta t_k$ for the $k$-th interval from $\varphi_{k-1}$ to $\varphi_k$.

**2.5** Find an expression for the time $t_k$ it takes the ball to reach the angle $\varphi_k$. To simplify matters, express it in terms of the travel time $t_{k-1}$ to the previous value of the angle $\varphi_{k-1}$.

**2.6** Put down a formula for the oscillation period $T_N$ for a given split into intervals.

### 3. Trial experiment, estimation of errors.

At this stage, it is necessary to make sure that the installation is operational, which in this case means the possibility of performing calculations according to the algorithm developed above, and to assess whether the required accuracy of results is achieved.

As noted earlier, calculation errors depend on the number of partition intervals $N$. In this task, you have to carry out calculations not on a computer, but "manually" using your calculator. A growth of $N$ reduces the error of calculations, but increases the time of their execution. Therefore, it is important to choose its optimal value, i.e. the minimum value at which the required accuracy is achieved. At this stage, carry out all calculations at $\varphi_0 = \dfrac{\pi}{2}$.

***ATTENTION! Hereinafter, calculations should be carried out with an accuracy of 4 decimal digits. To save time, carefully think over the entire sequence of calculations: use previously calculated values, define necessary constants that are present in the formulas (so as not to recalculate them several times), write down results of intermediate calculations in the most convenient form.***

**3.1** Calculate the travel times $t_k$ for the points with angles $\varphi_k$ for $N = 1, 2, 4, 8, 16, 32$. Find the approximate values of the periods of oscillation $T_N$, calculated for a given $N$. The results should be complied in Table 1.

**3.2** Plot Graph 1 of the law of motion $\varphi(t)$ of the pendulum for a quarter of the period based on the results of calculations at $N = 16$.

**3.3** On the same Graph 1, plot the law of motion $\varphi(t)$, assuming that the oscillations are small. The results of calculations of the law of motion should be presented in Table 2.

As an estimate of the relative error in calculating the oscillation period when dividing into $N$ intervals, we use the following value

$$\varepsilon_N = \frac{T_N - T_{32}}{T_{32}},$$

where $T_{32}$ stands for the period calculated at $N = 32$, which is closest to the true value.

The dependence of the relative calculation error $\varepsilon_N$ on the number of partition intervals $N$ is described by the approximate formula

$$\varepsilon_N = \frac{C}{N^{\gamma}},$$

where $C$ and $\gamma$ are some constants.

**3.4** Calculate the relative errors $\varepsilon_N$ in determining the periods. The results must be presented in Table 3.

**3.5** Prove in Graph 2 the applicability of the above formula for the relative error and find the values of the parameters $C$ and $\gamma$.

**3.6** Determine the minimum value $N_{min}$ at which the relative error in calculating the period does not exceed 0.2%.

In further calculations, use only the found value $N_{min}$ for the number of partition intervals.

### 4. Experiment: the dependence of the period on the amplitude.

At this stage of the computer experiment, we determine the dependence of the oscillation period of the mathematical pendulum on the amplitude, $T(\varphi_0)$, which is described by the formula

$$T(\varphi_0) = T_0\left(a + \frac{\varphi_0^2}{b}\right),$$

where $T_0$ designates the period of small oscillations of the pendulum, $a, b$ are constant values.

**4.1** Calculate the periods of oscillation of the mathematical pendulum for the following set of amplitudes $\varphi_0$: $15^\circ, 30^\circ, 45^\circ, 60^\circ, 75^\circ$ and $90^\circ$, which you have already determined.

**4.2** Prove in Graph 3 the applicability of the above formula for the dependence of the oscillation period of the pendulum on its amplitude.

**4.3** Determine the values of parameters $a, b$.

Let the error in measuring the oscillation period of the pendulum in a real experiment be approximately equal to 5%.

**4.4** Determine at what angles $\varphi_0$, expressed in degrees, the oscillations of the mathematical pendulum can be considered small.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Small-Angle Approximation (metodo)|Small-Angle Approximation]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]


<div class="qlang-split" data-lang="it"></div>

**ESPERIMENTO AL COMPUTER: un pendolo matematico, ovvero quale angolo si può considerare abbastanza piccolo...**  

*Prova sperimentale – 9 gennaio 2021 (XVII IZhO).*  

In fondo, la fisica è una scienza sperimentale e questa è sicuramente la sua forza principale. Tuttavia, senza comprendere un gran numero di fatti sperimentali, la fisica degenererebbe in una semplice descrizione di un’enorme quantità di fenomeni e processi. È proprio ignorando caratteristiche insignificanti dell’oggetto di studio che, nel lontano passato, sono nate le leggi fisiche e i modelli corrispondenti. Negli ultimi decenni si è registrato un rapido progresso in campi come la modellazione al computer, ovvero quelli che oggi vengono comunemente definiti “esperimenti con il computer”. I modelli fisici sviluppati possono essere infatti implementati direttamente su computer sotto forma di processi computazionali, permettendo di studiare in modo approfondito le regolarità interessanti nelle loro forme pure. In questa competizione vi viene chiesto di effettuare un esperimento del genere per un sistema ben noto, ovvero il pendolo matematico.  

Esiste una formula nota per calcolare il periodo di oscillazione di un pendolo matematico di lunghezza $l$ sottoposto a un campo gravitazionale uniforme terrestre, caratterizzato dall’accelerazione di gravità $g$. Tuttavia, questa formula è applicabile soltanto per angoli di deviazione abbastanza piccoli. La domanda principale che dovrete affrontare in questo esperimento computazionale è: ***“Quale angolo di deviazione si può considerare piccolo?”***

Nella letteratura didattica sugli esperimenti di laboratorio si trova spesso l’indicazione che l’angolo di deviazione massimo non dovrebbe superare i $1^\circ$, $2^\circ$, $5^\circ$, ecc. È necessario rispondere alla domanda sopra menzionata sulla base di questo esperimento al computer. In particolare, si deve studiare la dipendenza del periodo di oscillazione di un pendolo matematico dalla sua ampiezza, ovvero dall’angolo di deviazione massimo rispetto alla verticale.

L’ordine con cui vengono condotti ed elaborati i risultati di un esperimento al computer non differisce molto da quello di un esperimento reale su scala completa. Pertanto, le fasi di questo problema corrispondono direttamente alle principali tappe di un vero esperimento fisico.

### 1. Costruire un modello teorico.

![[IZhO-2021-Exp_eng_p1_f1.png]]

Si consideri un pendolo matematico, costituito da una piccola pallina massiccia sospesa su un filo inestensibile di lunghezza $l$. Il pendolo è soggetto al campo gravitazionale, con un’accelerazione di caduta libera pari a $g$. Nel seguito si trascuri completamente la resistenza dell’aria.

**1.1** Scrivere una formula per il periodo $T$ delle piccole oscillazioni di un pendolo matematico.

Si assuma che, al momento iniziale $t_0 = 0$, l’angolo di deviazione del filo rispetto alla verticale sia $\varphi_0$, e che la velocità iniziale della pallina sia uguale a zero. La pallina si muove lungo un arco di cerchio; pertanto, la sua posizione è determinata dall’angolo di deviazione del filo rispetto alla verticale $\varphi$, mentre il tasso di variazione di questo angolo nel tempo è dato dalla velocità angolare $\omega = \dfrac{d\varphi}{dt}$.

**1.2** Ottenere una formula esatta per la dipendenza della velocità angolare del pendolo dall’angolo di deviazione, $\omega(\varphi)$, per una data ampiezza angolare $\varphi_0$ e valori noti di $l$ e $g$.

Il movimento del pendolo è simmetrico rispetto alla verticale; pertanto, per calcolare il periodo di oscillazione, è sufficiente determinare il tempo $t_1$ del suo moto dalla deviazione massima a quella nulla.

**1.3** Scrivere un’espressione esatta per calcolare il tempo $t_1$, in base alla dipendenza nota tra la velocità angolare e l’angolo di deviazione, $\omega(\varphi)$.

**1.4** Esprimere il periodo di oscillazione $T$ in termini del tempo $t_1$.

In un esperimento al computer, durante i calcoli, si usano raramente le grandezze dimensionali reali, poiché possono presentare ordini di grandezza molto diversi e risultano estremamente scomode da manipolare. Di solito, tutte le grandezze vengono rese adimensionali o ridotte utilizzando valori caratteristici di un determinato problema. Ad esempio, nel nostro studio, il tempo caratteristico è il periodo delle oscillazioni; pertanto, è conveniente introdurre il tempo adimensionale $\tau$, che viene calcolato con la seguente formula:

$$\tau = t\sqrt{\frac{g}{l}}.$$

**1.5** Scrivere una formula che correli la velocità angolare in unità adimensionali $\tilde{\omega} = \dfrac{d\varphi}{d\tau}$ con la velocità angolare precedentemente definita $\omega$.  

**1.6** Determinare un periodo $\tilde{T}$ delle piccole oscillazioni del pendolo matematico nelle unità adimensionali di tempo.  

**1.7** Determinare la dipendenza della velocità angolare $\tilde{\omega}$ dall’angolo di deflessione $\varphi$: $\tilde{\omega}(\varphi)$.  

**ATTENZIONE! Nelle seguenti parti verranno utilizzate ovunque le grandezze adimensionali introdotte: il tempo $\tau$, il periodo $\tilde{T}$ e la velocità angolare $\tilde{\omega}$, che vengono rispettivamente denotati con $t$, $T$ e $\omega$.**  

### 2. Progettare l’apparato sperimentale, pianificare l’esperimento.

![[IZhO-2021-Exp_eng_p2_f2.png]]

In un esperimento al computer, questa fase corrisponde allo sviluppo di un algoritmo di calcolo. In questo caso, l’idea principale dei calcoli numerici è quella di dividere la traiettoria del movimento in piccole sezioni, all’interno delle quali il movimento viene descritto in modo approssimativo.

Dividiamo l’intervallo di movimento da $\varphi = \varphi_0$ a $\varphi = 0$ in $N$ intervalli uguali di larghezza $\Delta\varphi$. Denominiamo i punti di divisione $\varphi_k$, con $k = 0, 1, \ldots N$, e le velocità angolari in questi punti $\omega_k$. L’approssimazione principale utilizzata nei calcoli successivi è quella secondo cui, in ciascun intervallo da $\varphi_k$ a $\varphi_{k+1}$, il movimento del pendolo viene considerato uniformemente accelerato. È naturale aspettarsi che, aumentando il numero di intervalli di divisione $N$, anche l’accuratezza dei calcoli aumenti.

All’interno dell’ambito di questa approssimazione, è facile determinare il tempo impiegato dal pendolo per muoversi nell’intervallo da $\varphi_0$ a 0. Data un’ampiezza $\varphi_0$ e il numero di intervalli $N$, l’algoritmo di calcolo viene individuato attraverso la risposta alle seguenti domande.

**2.1** Determinare l’intervallo di divisione $\Delta\varphi$.  

**2.2** Determinare le coordinate dei punti di divisione $\varphi_k$.  

**2.3** Esprimere la velocità angolare $\omega_k$ nel punto $\varphi_k$, considerando un angolo iniziale di deflessione arbitrario $\varphi_0$. Scrivere questa formula per il caso particolare in cui $\varphi_0 = \dfrac{\pi}{2}$.  

**2.4** Determinare il tempo di percorrenza $\Delta t_k$ del $k$-esimo intervallo, da $\varphi_{k-1}$ a $\varphi_k$.

**2.5** Trovare un’espressione per il tempo $t_k$ necessario alla pallina per raggiungere l’angolo $\varphi_k$. Per semplificare le cose, esprimerlo in termini del tempo di percorrenza $t_{k-1}$ fino al valore precedente dell’angolo $\varphi_{k-1}$.  

**2.6** Formulare un’espressione per il periodo di oscillazione $T_N$ in funzione della divisione del percorso in intervalli dati.  

### 3. Esperimento di prova, stima degli errori.  

A questo stadio è necessario verificare che l’apparato sia funzionante, il che significa la possibilità di eseguire i calcoli secondo l’algoritmo sviluppato in precedenza, e valutare se si raggiunge l’accuratezza richiesta nei risultati.  

Come già accennato, gli errori di calcolo dipendono dal numero di intervalli di divisione $N$. In questa attività, i calcoli devono essere eseguiti “manualmente” utilizzando la calcolatrice, e non al computer. Un aumento di $N$ riduce l’errore nei calcoli, ma aumenta il tempo necessario per eseguirli. Pertanto è importante scegliere il valore ottimale di $N$, cioè quello minimo che garantisca l’accuratezza richiesta. A questo stadio, effettuare tutti i calcoli con $\varphi_0 = \dfrac{\pi}{2}$.  

***ATTENZIONE! Da ora in poi, i calcoli devono essere eseguiti con un’accuratezza di 4 cifre decimali. Per risparmiare tempo, pianificare attentamente l’intera sequenza di calcoli: utilizzare i valori già calcolati in precedenza, definire le costanti necessarie presenti nelle formule (per evitare di ricalcolarle più volte) e annotare i risultati dei calcoli intermedi nella forma più conveniente.***

**3.1** Calcolare i tempi di percorrenza $t_k$ dei punti con angoli $\varphi_k$ per $N = 1, 2, 4, 8, 16, 32$. Determinare i valori approssimativi dei periodi di oscillazione $T_N$, calcolati per un dato $N$. I risultati devono essere riportati nella Tabella 1.

**3.2** Tracciare il Grafico 1 che rappresenta la legge del movimento $\varphi(t)$ del pendolo nel quarto di periodo, basandosi sui calcoli effettuati per $N = 16$.

**3.3** Nello stesso Grafico 1, tracciare anche la legge del movimento $\varphi(t)$, assumendo che le oscillazioni siano piccole. I risultati dei calcoli devono essere riportati nella Tabella 2.

Come stima dell’errore relativo nel calcolo del periodo di oscillazione quando il percorso viene diviso in $N$ intervalli, utilizziamo il seguente valore:

$$\varepsilon_N = \frac{T_N - T_{32}}{T_{32}},$$

dove $T_{32}$ rappresenta il periodo calcolato con $N = 32$, valore che è il più vicino al valore reale.

La dipendenza dell’errore di calcolo relativo $\varepsilon_N$ dal numero di intervalli di partizione $N$ viene descritta dalla seguente formula approssimativa.

$$\varepsilon_N = \frac{C}{N^{\gamma}},$$

dove $C$ e $\gamma$ sono alcune costanti.

**3.4** Calcolare gli errori relativi $\varepsilon_N$ nella determinazione dei periodi. I risultati devono essere presentati nella Tabella 3.

**3.5** Dimostrare nel Grafico 2 l’applicabilità della formula sopra indicata per gli errori relativi e trovare i valori dei parametri $C$ e $\gamma$.

**3.6** Determinare il valore minimo $N_{min}$ al quale l’errore relativo nel calcolo del periodo non supera lo 0,2%.

Nei calcoli successivi, utilizzare esclusivamente il valore trovato di $N_{min}$ come numero di intervalli di suddivisione.

### 4. Esperimento: la dipendenza del periodo dall’ampiezza.

In questa fase dell’esperimento al computer, determiniamo la dipendenza del periodo di oscillazione del pendolo matematico dall’ampiezza, $T(\varphi_0)$, che è descritta dalla formula:

$$T(\varphi_0) = T_0\left(a + \frac{\varphi_0^2}{b}\right),$$

dove $T_0$ designa il periodo delle piccole oscillazioni del pendolo, $a, b$ sono valori costanti.

**4.1** Calcolare i periodi di oscillazione del pendolo matematico per il seguente insieme di ampiezze $\varphi_0$: $15^\circ, 30^\circ, 45^\circ, 60^\circ, 75^\circ$ e $90^\circ$, già determinate.

**4.2** Dimostrare nel Grafico 3 l’applicabilità della formula sopra riportata per la dipendenza del periodo di oscillazione del pendolo dalla sua ampiezza.

**4.3** Determinare i valori dei parametri $a, b$.

Si supponga che l’errore nella misurazione del periodo di oscillazione del pendolo in un esperimento reale sia approssimativamente pari al 5%.

**4.4** Determinare a quali angoli $\varphi_0$, espressi in gradi, le oscillazioni del pendolo matematico possono essere considerate piccole.
