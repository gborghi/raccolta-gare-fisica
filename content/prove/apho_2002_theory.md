---
title: APhO 2002 — Teorica
tipo: prova
tags:
  - kg/prova
  - paese/asia
  - comp/APhO
---
<div class="atom-reader" data-prova="apho_2002_theory"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="APhO 2002 — Teorica — Quesito 1" data-tags="kg/prova,paese/Asia,comp/APhO,topic/oscillations-and-waves,argomento/onde-e-oscillazioni,difficolta/5,multidisciplina/multi,object/spring"></span>

<div class="qlang-switch" data-default="en"></div>



**(vibrations of a linear crystal lattice)**

A very large number $N$ of movable identical point particles ($N \gg 1$), each with mass $m$, are set in a straight chain with $N + 1$ identical massless springs, each with stiffness (spring constant) $S$, linking them to each other and the ends attached to two additional immovable particles. See figure. This chain will serve as a model of the vibration modes of a one-dimensional crystal. When the chain is set in motion, the longitudinal vibrations of the chain can be looked upon as a superposition of simple oscillations (called modes) each with its own characteristic mode frequency.

![[APhO_2002_theory_Q1_p1_f1.png]]

**(a)** Write down the equation of motion of the $n^{\text{th}}$ particle. **[0.7 marks]**

**(b)** To attempt to solve the equation of motion of part (a) use the trial solution

$$X_n(t) = A \sin nka \, \cos(\omega t + \varphi),$$

where $X_n(t)$ is the displacement of the $n^{\text{th}}$ particle from equilibrium, $\omega$ the angular frequency of the vibration mode and $A$, $k$ and $\varphi$ are constants; $k$ and $\omega$ are the wave numbers and mode frequencies respectively. For each $k$, there will be a corresponding frequency $\omega$. Find the dependence of $\omega$ on $k$, the allowed values of $k$, and the maximum value of $\omega$. The chain's vibration is thus a superposition of all these vibration modes. Useful formulas:

$$\frac{d}{dx}\cos\alpha x = -\alpha \sin\alpha x, \qquad \frac{d}{dx}\sin\alpha x = \alpha \cos\alpha x, \quad \alpha = \text{constant}.$$

$$\sin(A + B) = \sin A \cos B + \cos A \sin B, \qquad \cos(A + B) = \cos A \cos B - \sin A \sin B$$

**[2.2 marks]**

According to Planck the energy of a photon with a frequency of $\omega$ is $\hbar\omega$, where $\hbar$ is the Planck constant divided by $2\pi$. Einstein made a leap from this by assuming that a given crystal vibration mode with frequency $\omega$ also has this energy. Note that a vibration mode is not a particle, but a simple oscillation configuration of the entire chain. This vibration mode is analogous to the photon and is called a *phonon*. We will follow up the consequences of this idea in the rest of the problem. Suppose a crystal is made up of a very large ($\sim 10^{23}$) number of particles in a straight chain.

**(c)** For a given allowed $\omega$ (or $k$) there may be no phonons; or there may be one; or two; or any number of phonons. Hence it makes sense to try to calculate the average energy $\langle E(\omega) \rangle$ of a particular mode with a frequency $\omega$. Let $P_p(\omega)$ represent the probability that there are $p$ phonons with this frequency $\omega$. Then the required average is

$$\langle E(\omega) \rangle = \frac{\displaystyle\sum_{p=0}^{\infty} p\hbar\omega \, P_p(\omega)}{\displaystyle\sum_{p=0}^{\infty} P_p(\omega)}.$$

Although the phonons are discrete, the fact that there are so many of them (and the $P_p$ becomes tiny for large $p$) allows us to extend the sum to $p = \infty$, with negligible error. Now the probability $P_p$ is given by Boltzmann's formula

$$P_p(\omega) \propto \exp(-p\hbar\omega / k_B T),$$

where $k_B$ is Boltzmann's constant and $T$ is the absolute temperature of the crystal, assumed constant. The constant of proportionality does not depend on $p$. Calculate the average energy for phonons of frequency $\omega$. Possibly useful formula: $\dfrac{d}{dx} e^{f(x)} = \left(\dfrac{df}{dx}\right) e^{f(x)}$. **[2 marks]**

**(d)** We would like next to compute the total energy $E_T$ of the crystal. In part (c) we found the average energy $\langle E(\omega) \rangle$ for the vibration mode $\omega$. To find $E_T$ we must multiply $\langle E(\omega) \rangle$ by the number of modes of the crystal per unit of frequency $\omega$ and then sum up all these for the entire range from $\omega = 0$ to $\omega_{\max}$. Take an interval $\Delta k$ in the range of wave numbers. For very large $N$ and for $\Delta k$ much larger than the spacing between successive (allowed) $k$ values, how many modes can be found in the interval $\Delta k$? **[1 mark]**

**(e)** To make use of the results of (a) and (b), approximate $\Delta k$ by $(dk/d\omega)\,d\omega$ and replace any sum by an integral over $\omega$. (It is more convenient to use the variable $\omega$ in place of $k$ at this point.) State the total number of modes of the crystal in this approximation. Also derive an expression $E_T$ but do not evaluate it. The following integral may be useful:

$$\int_0^{1} \frac{dx}{\sqrt{1 - x^2}} = \frac{\pi}{2}.$$

**[2.2 marks]**

**(f)** The molar heat capacity $C_V$ of a crystal at constant volume is experimentally accessible: $C_V = dE_T/dT$ ($T = $ absolute temperature). For the crystal under discussion determine the dependence of $C_V$ on $T$ for very large and very low temperatures (i.e., is it constant, linear or power dependent for an interval of the temperature?). Sketch a qualitative graph of $C_V$ versus $T$, indicating the trends predicted for very low and very high $T$. **[1.9 marks]**

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1aHT6cQga3zxcY4Nwla8uhnsQ89LtQlTm/view)

**Topic:** [[Oscillations & Waves]], [[Modern-Quantum Physics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Spring (object)|Spring]]


<div class="qlang-split" data-lang="it"></div>

**(vibrazioni di una reticola di cristallo lineare) **

Un numero molto elevato di particelle mobili identiche a punto $N$ ($N \gg 1$), ciascuna con massa $m$, è montata in catena retta con sorgenti senza massa identiche $N + 1$, ciascuna con rigidità (constante sorgente) $S$, che le collegano tra loro e le estremità sono attaccate a due particelle immobili supplementari. Vedi la figura. Questa catena servirà come modello delle modalità di vibrazione di un cristallo unidimensionato. Quando la catena viene messa in movimento, le vibrazioni longitudinali della catena possono essere considerate come una sovrapposizione di semplici oscillazioni (chiamate modalità) ciascuna con la propria frequenza caratteristica di modalità.

![[APhO_2002_theory_Q1_p1_f1.png]]

**(a) ** Scrivi l'equazione di movimento della particella $n^{\text{th}}$. **[0,7 punti]**

**(b) ** Per cercare di risolvere l'equazione di movimento della parte (a) utilizzare la soluzione di prova

$$X_n(t) = A \sin nka \, \cos(\omega t + \varphi),$$

se $X_n(t)$ è lo spostamento della particella $n^{\text{th}}$ dall'equilibrio, $\omega$ è la frequenza angolare della modalità di vibrazione e $A$, $k$ e $\varphi$ sono costanti; $k$ e $\omega$ sono rispettivamente i numeri d'onda e le frequenze di modalità. Per ogni $k$, vi sarà una frequenza corrispondente $\omega$. Trova la dipendenza di $\omega$ da $k$, i valori consentiti di $k$ e il valore massimo di $\omega$. La vibrazione della catena è quindi una sovrapposizione di tutti questi modi di vibrazione. Formule utili:

$$\frac{d}{dx}\cos\alpha x = -\alpha \sin\alpha x, \qquad \frac{d}{dx}\sin\alpha x = \alpha \cos\alpha x, \quad \alpha = \text{constant}.$$

$$\sin(A + B) = \sin A \cos B + \cos A \sin B, \qquad \cos(A + B) = \cos A \cos B - \sin A \sin B$$

**[2,2 punti]**

Secondo Planck l'energia di un fotone con una frequenza di $\omega$ è $\hbar\omega$, dove $\hbar$ è la costante di Planck divisa da $2\pi$. Einstein ha fatto un salto da questo supponendo che una data modalità di vibrazione cristallina con frequenza $\omega$ ha anche questa energia. Si noti che una modalità di vibrazione non è una particella, ma una semplice configurazione di oscillazione dell'intera catena. Questa modalità di vibrazione è analoga al fotone e si chiama un fonone **. In questo caso, la Commissione ha deciso di adottare un'azione di riforma. Supponiamo che un cristallo sia composto da un numero molto grande ($\sim 10^{23}$) di particelle in una catena dritta.

**(c) ** Per un dato $\omega$ (o $k$) autorizzato non possono esserci fononi; oppure possono esserci uno; o due; o qualsiasi numero di fononi. Pertanto è logico cercare di calcolare l'energia media $\langle E(\omega) \rangle$ di una determinata modalità con una frequenza $\omega$. $P_p(\omega)$ rappresenta la probabilità che ci siano fononi $p$ con questa frequenza $\omega$. Quindi la media richiesta è

$$\langle E(\omega) \rangle = \frac{\displaystyle\sum_{p=0}^{\infty} p\hbar\omega \, P_p(\omega)}{\displaystyle\sum_{p=0}^{\infty} P_p(\omega)}.$$

Sebbene i fononi siano discreti, il fatto che ne siano così tanti (e la $P_p$ diventa minuscola per la grande $p$) ci permette di estendere la somma a $p = \infty$, con errore trascurabile. Ora la probabilità $P_p$ viene data dalla formula di Boltzmann

$$P_p(\omega) \propto \exp(-p\hbar\omega / k_B T),$$

dove $k_B$ è costante di Boltzmann e $T$ è la temperatura assoluta del cristallo, costante presunta. La costante di proporzionalità non dipende da $p$. Calcolare l'energia media dei fononi di frequenza $\omega$. Formula potenzialmente utile: $\dfrac{d}{dx} e^{f(x)} = \left(\dfrac{df}{dx}\right) e^{f(x)}$. ** [2 punti] **

**(d) ** Vorremmo quindi calcolare l'energia totale $E_T$ del cristallo. Nella parte (c) abbiamo trovato l'energia media $\langle E(\omega) \rangle$ per la modalità di vibrazione $\omega$. Per trovare $E_T$ dobbiamo moltiplicare $\langle E(\omega) \rangle$ per il numero di modi del cristallo per unità di frequenza $\omega$ e quindi sommare tutti questi per l'intero intervallo da $\omega = 0$ a $\omega_{\max}$. Prendi un intervallo $\Delta k$ nell'intervallo dei numeri d'onda. Per $N$ molto grandi e per $\Delta k$ molto più grandi dell'intervallo tra i valori successivi (permessi) $k$, quante modalità si possono trovare nell'intervallo $\Delta k$? **[1 segno]**

**(e) ** Per utilizzare i risultati delle lettere a) e b), approssimare $\Delta k$ con $(dk/d\omega)\,d\omega$ e sostituire qualsiasi somma con un'integrale sopra $\omega$. (È più conveniente utilizzare la variabile $\omega$ al posto di $k$ in questo punto.) Indicare il numero totale di modi del cristallo in questa approssimazione. Derivare anche un'espressione $E_T$ ma non valutarla. La seguente integrale può essere utile:

$$\int_0^{1} \frac{dx}{\sqrt{1 - x^2}} = \frac{\pi}{2}.$$

**[2,2 punti]**

La capacità termico molare $C_V$ di un cristallo a volume costante è accessibile sperimentalmente: $C_V = dE_T/dT$ (temperatura assoluta $T = $). Per il cristallo in discussione, determinare la dipendenza di $C_V$ da $T$ per temperature molto elevate e molto basse (cioè, è costante, lineare o potenza dipendente per un intervallo di temperatura?). Segnare un grafico qualitativo di $C_V$ contro $T$, indicando le tendenze previste per $T$ molto basso e molto alto. **[1,9 punti]**

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1aHT6cQga3zxcY4Nwla8uhnsQ89LtQlTm/view)

**Topic:** [[Oscillations & Waves]], [[Modern-Quantum Physics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Differential Equations (metodo)|Differential Equations]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Spring (object)|Spring]]



<span class="atom-split" id="q02" data-atom="q02" data-title="APhO 2002 — Teorica — Quesito 2" data-tags="kg/prova,paese/Asia,comp/APhO,topic/magnetism,argomento/elettromagnetismo,difficolta/5,multidisciplina/multi,object/rod,object/wire,object/magnet"></span>

<div class="qlang-switch" data-default="en"></div>



**(the rail gun)**

A young man at P and a young lady at Q were deeply in love. These two places are separated by a strait of width $w = 1000$ m. After learning about the theory of rail gun in class, the young man could not wait to construct such a device to launch himself across the strait. He constructed a ramp of adjustable elevation of angle $\theta$ on which he laid two metal rails (the length of each rail is $D = 35.0$ m) in parallel, separated by $L = 2.00$ m. He managed to connect a $2424$ V DC power supply to the ends of the rails. A conducting bar can slide freely on the metal rails such that he could hang on to it safely as it slides.

A skilled engineer, moved by all these efforts, designed a system that can produce a $B = 10.0$ T magnetic field that can be directed perpendicular to the plane of the rails. The mass of the young man is $70$ kg. The mass of the conducting bar is $10$ kg and its resistance is $R = 1.0\ \Omega$.

![[APhO_2002_theory_Q2_p1_f1.png]]

Just after he had completed the construction and checked that it worked perfectly, he received a call from the young lady, sobbing and telling him that her father was going to marry her off to a rich man unless he can arrive at Q within $11$ seconds after the call, and having said that she hang up.

The young man immediately got into action and launched himself across the strait to Q.

Show, using the steps listed below, whether it is possible for him to make it in time, and if so, what is the range of $\theta$ he must set the ramp?

![[APhO_2002_theory_Q2_p2_f1.png]]

**(a)** Derive an expression for the acceleration of the young man parallel to the rail. **[3 marks]**

**(b)** Obtain an expression in terms of $\theta$ for the time spent
- i. on the rails, $t_s$ and
- ii. in flight, $t_f$.

**[3 marks]**

**(c)** Plot a graph of the total time $T = t_s + t_f$ against the angle of inclination $\theta$. **[1.5 marks]**

**(d)** By considering the relevant parameters of this device, obtain the range of angles that he should set. Plot another graph if necessary. **[2.5 marks]**

Make the following assumptions:

1) The time between the end of the call and all preparations (such as setting $\theta$ to the appropriate angle) for the launch is negligible. This is to say, the launch is considered to start at time $t = 0$ when the bar (with the young man hanging to it) is starting to move.
2) The young man may start his motion from any point along the metal rails.
3) The higher end of the ramp and Q is at the same level, and the distance between them is $w = 1000$ m.
4) There is no question about safety such as when landing, electric shocks, etc.
5) The resistance of the metal rails, the internal resistance of the power supply, the friction between the conducting bar and the rails and the air resistance are all negligible.
6) Take acceleration due to gravity as $g = 10$ m/s$^2$.

**Some Mathematical notes:**

1. $\displaystyle\int e^{-ax}\, dx = -\frac{e^{-ax}}{a}.$

2. The solution to $\dfrac{dx}{dt} = a + bx$ is given by

$$x(t) = \frac{a}{b}\left(e^{bt} - 1\right) + x(0)\, e^{bt}.$$

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1Dr-ztLrZZ3mdXReiIaw9Ghak4DsX0FcD/view)

**Topic:** [[Magnetism]], [[Newtonian Mechanics]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Differential Equations (metodo)|Differential Equations]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Rod (object)|Rod]], [[Wire (object)|Wire]], [[Magnet (object)|Magnet]]


<div class="qlang-split" data-lang="it"></div>

**(la pistola del binario) **

Un giovane a P e una giovane donna a Q erano profondamente innamorati. Questi due posti sono separati da uno stretto di larghezza $w = 1000$ m. Dopo aver imparato la teoria della pistola ferroviaria in classe, il giovane non poteva aspettare di costruire un tale dispositivo per lanciarsi attraverso lo stretto. Costruì una rampa di angolo $\theta$ regolabile su cui pose in parallelo due binari metallici (la lunghezza di ciascun binario è $D = 35.0$ m), separati da $L = 2.00$ m. He managed to connect a $2424$ V DC power supply to the ends of the rails. Una barra di conduttore può scivolare liberamente sulle rotaie metalliche in modo che possa attaccarla in modo sicuro mentre scivola.

Un ingegnere qualificato, spinto da tutti questi sforzi, progettò un sistema che potesse produrre un campo magnetico T $B = 10.0$ che potesse essere diretto perpendicolare al piano delle rotaie. La massa del giovane è $70$ kg. La massa della barra conduttrice è $10$ kg e la sua resistenza è $R = 1.0\ \Omega$.

![[APhO_2002_theory_Q2_p1_f1.png]]

Poco dopo aver completato la costruzione e verificato che funzionava perfettamente, ricevette una chiamata dalla giovane signora, che la solenneva e gli diceva che suo padre la avrebbe sposata con un uomo ricco a meno che non riuscisse a raggiungere Q entro $11$ secondi dalla chiamata, e che aveva detto che lei avrebbe raccontato.

Il giovane si è subito messo in azione e si è lanciato attraverso lo stretto per Q.

Indicare, utilizzando i passaggi elencati di seguito, se è possibile farlo in tempo e, se sì, quale è il range di $\theta$ deve impostare la rampa?

![[APhO_2002_theory_Q2_p2_f1.png]]

**(a)** Derive an expression for the acceleration of the young man parallel to the rail. **[3 punti] **

**(b) ** Ottenere un'espressione in termini di $\theta$ per il tempo trascorso
- i. sui binari, $t_s$ e
- ii. in volo, $t_f$.

**[3 punti] **

**(c) ** Tracciare un grafico del tempo totale $T = t_s + t_f$ contro l'angolo di inclinazione $\theta$. **[1,5 punti]**

**(d) ** Considerando i parametri pertinenti di questo dispositivo, si ottiene l'intervallo di angoli che deve impostare. Se necessario, disegnare un altro grafico. ** [2,5 punti] **

Fate le seguenti ipotesi:

1) Il tempo tra la fine dell'appello e tutte le preparazioni (come la regolazione del $\theta$ all'angolo appropriato) per il lancio è trascurabile. In altre parole, il lancio è considerato come iniziato al momento $t = 0$ in cui la barra (con il giovane appeso a essa) inizia a muoversi.
2) Il giovane può iniziare il suo movimento da qualsiasi punto lungo le rotaie metalliche.
3) L'estremità superiore della rampa e Q è allo stesso livello e la distanza tra loro è $w = 1000$ m.
4) Non si discute della sicurezza, come ad esempio durante l'atterraggio, le scosse elettriche, ecc.
5) La resistenza delle rotaie metalliche, la resistenza interna dell'alimentazione, l'attrito tra la barra di conduttore e le rotaie e la resistenza all'aria sono tutti trascurabili.
6) Prendere l'accelerazione dovuta alla gravità come $g = 10$ m/s$^2$.

**Some Mathematical notes:**

1. $\displaystyle\int e^{-ax}\, dx = -\frac{e^{-ax}}{a}.$

2. La soluzione di $\dfrac{dx}{dt} = a + bx$ è data da

$$x(t) = \frac{a}{b}\left(e^{bt} - 1\right) + x(0)\, e^{bt}.$$

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1Dr-ztLrZZ3mdXReiIaw9Ghak4DsX0FcD/view)

**Topic:** [[Magnetism]], [[Newtonian Mechanics]]
**Metodi:** [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Differential Equations (metodo)|Differential Equations]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Rod (object)|Rod]], [[Wire (object)|Wire]], [[Magnet (object)|Magnet]]



<span class="atom-split" id="q03" data-atom="q03" data-title="APhO 2002 — Teorica — Quesito 3" data-tags="kg/prova,paese/Asia,comp/APhO,topic/kinetic-theory,argomento/termodinamica,difficolta/5,multidisciplina/multi,object/gas"></span>

<div class="qlang-switch" data-default="en"></div>



**(wafer fabrication)**

Wafer fabrication refers to the production of semiconductor chips from silicon. In modern technologies there are more than 20 processes; we are going to concentrate on thin films deposition.

In wafer fabrication process, thin films of various materials are deposited on the surface of the silicon wafer. The surface of the substrate must be extremely clean before the process of deposition. The presence of traces of oxygen or other elements will result in the formation of a contamination layer. The rate of formation of this layer is determined by the impingement rate of the gas molecules hitting the substrate surface. Assuming the number of molecules per unit volume is $n$, the impingement rate on a unit area of the substrate from the gas is given by

$$J = \frac{1}{4} n \bar{v}$$

where $\bar{v}$ is the average or mean speed of the gas molecules.

**(a)** Assuming that the gas molecules obey a Maxwell-Boltzmann distribution,

$$W(v) = 4\pi \left(\frac{M}{2\pi R T}\right)^{3/2} v^2 \, e^{-Mv^2/(2RT)},$$

where $W(v)\,dv$ is the fraction of molecules whose speed lie between $v$ and $v + dv$, $M$ is the molar mass of the gas, $T$ is the gas temperature and $R$ is the gas constant, show that the average or mean speed of the gas molecules is given by

$$\bar{v} = \int_0^{\infty} v \, W(v)\, dv = \sqrt{\frac{8 R T}{\pi M}}.$$

**[1.5 marks]**

**(b)** Assuming that the gases behave as an ideal gas at low pressure, $P$, show that the rate of impingement is given by

$$J = \frac{P}{\sqrt{2\pi m k T}}$$

where $m$ is the mass of the molecule and $T$ is the temperature of the gas. **[1.5 marks]**

**(c)** If the residual pressure of oxygen in a vacuum system is $133$ Pa, and by modelling the oxygen molecule as a sphere of radius approximately $3.6 \times 10^{-10}$ m, estimate how long it takes to deposit a molecule-thick layer of oxygen on the wafer at $300^{\circ}$ Celsius, assuming that all the oxygen molecules which strike the silicon wafer surface are deposited. Assume also that oxygen molecules in the layer are arranged side by side. **[1.7 marks]**

**(d)** In reality, not all molecules of oxygen react with the silicon. This can be modeled by the concept of activation energy where the reacting molecules should have total energy greater than the activation energy before it can react. Physically this activation energy describes the fact that chemical bonds between the silicon atoms have to be broken before a new bond between silicon and oxygen atoms is formed. Assuming an activation energy for the reaction to be $1$ eV, estimate again how long it would take to deposit one atomic layer of oxygen at the above temperature. You may assume that the area under the Maxwell distribution in part (a) is unity. **[2.8 marks]**

![[APhO_2002_theory_Q3_p2_f1.png]]

**(e)** For lithography processes, the clean silicon wafer is coated evenly with a layer of transparent polymer (photo-resist) of refractive index $\mu = 1.40$. To measure the thickness of this photo-resist, the wafer is illuminated with collimated monochromatic beam of light of wavelength $\lambda = 589$ nm. For a certain minimum thickness of photo-resist, $d$, there is a destructive interference of reflected light, assuming normal incidence on the coating. Derive an expression for relation between $d$, $\mu$ and $\lambda$. Calculate $d$ using the given data. In this point you may assume that silicon behaves as a medium with a refractive index greater than $1.40$ and you may ignore multiple reflections. **[2.5 marks]**

The following data may be helpful:

- Molar mass of oxygen is $32$ g mol$^{-1}$.
- Boltzmann constant, $k = 1.38 \times 10^{-23}$ J K$^{-1}$.
- Avogadro number, $N_A = 6.02 \times 10^{23}$ mol$^{-1}$.

Useful formula:

$$\int_0^{\infty} x^3 \, e^{-x^2/k}\, dx = -\frac{1}{2}\, e^{-x^2/k}\left(\frac{1}{k^2} + \frac{x^2}{k}\right).$$

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/13ivO5a1QRJhbIRIi_FIWhszxusjRo2Po/view)

**Topic:** [[Kinetic Theory]], [[Wave Optics]]
**Metodi:** [[Kinetic Theory of Gases (metodo)|Kinetic Theory of Gases]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Gas (object)|Gas]]


<div class="qlang-split" data-lang="it"></div>

**(fabbricazione di onde) **

La fabbricazione di wafer si riferisce alla produzione di chip semiconduttori a partire dal silicio. Le tecnologie moderne hanno più di 20 processi; ci concentreremo sul deposito di pellicole sottili.

Nel processo di fabbricazione delle wafer, vengono depositati film sottili di vari materiali sulla superficie della wafer di silicio. La superficie del substrato deve essere estremamente pulita prima del processo di deposizione. La presenza di tracce di ossigeno o di altri elementi comporta la formazione di uno strato di contaminazione. Il tasso di formazione di questo strato è determinato dal tasso di impingement delle molecole di gas che colpiscono la superficie del substrato. Supponendo che il numero di molecole per unità di volume sia $n$, la velocità di impatto su un'area unitaria del substrato dal gas è data da

$$J = \frac{1}{4} n \bar{v}$$

in cui $\bar{v}$ è la velocità media o media delle molecole di gas.

Se le molecole di gas obbediscono alla distribuzione di Maxwell-Boltzmann,

$$W(v) = 4\pi \left(\frac{M}{2\pi R T}\right)^{3/2} v^2 \, e^{-Mv^2/(2RT)},$$

se $W(v)\,dv$ è la frazione di molecole la cui velocità si trova tra $v$ e $v + dv$, $M$ è la massa molare del gas, $T$ è la temperatura del gas e $R$ è la costante del gas, indicare che la velocità media o media delle molecole di gas è data da

$$\bar{v} = \int_0^{\infty} v \, W(v)\, dv = \sqrt{\frac{8 R T}{\pi M}}.$$

**[1,5 punti]**

**(b) ** Supponendo che i gas si comportino come un gas ideale a bassa pressione, $P$, dimostrano che il tasso di impingimento è dato da

$$J = \frac{P}{\sqrt{2\pi m k T}}$$

dove $m$ è la massa della molecola e $T$ è la temperatura del gas. **[1,5 punti]**

Se la pressione residuale dell'ossigeno in un sistema a vuoto è $133$ Pa, e modellare la molecola di ossigeno come sfera di raggio approssimativamente $3.6 \times 10^{-10}$ m, calcolare quanto tempo ci vuole per depositare un strato di ossigeno di spessore molecolare sul wafer a $300^{\circ}$ Celsius, supponendo che tutte le molecole di ossigeno che colpiscono la superficie del wafer di silicio siano depositate. Supponiamo anche che le molecole di ossigeno nello strato siano disposte fianco a fianco. **[1,7 punti]**

In realtà non tutte le molecole di ossigeno reagiscono con il silicio. Questo può essere modellato dal concetto di energia di attivazione in cui le molecole che reagiscono devono avere un'energia totale superiore all'energia di attivazione prima di poter reagire. Fisicamente questa energia di attivazione descrive il fatto che i legami chimici tra gli atomi di silicio devono essere spezzati prima che si formi un nuovo legame tra gli atomi di silicio e ossigeno. Supponendo che l'energia di attivazione della reazione sia $1$ eV, calcolare di nuovo quanto tempo ci vorrebbe per depositare uno strato atomico di ossigeno alla temperatura sopra indicata. Potresti supporre che l'area sotto la distribuzione di Maxwell nella parte (a) sia unità. **[2,8 punti] **

![[APhO_2002_theory_Q3_p2_f1.png]]

**(e) ** Per i processi di litografia, la tavola di silicio pulita è rivestita uniformemente con uno strato di polimero trasparente (foto-resistente) di indice di rifrazione $\mu = 1.40$. Per misurare lo spessore di questa foto-resistenza, la vaffa è illuminata con fascio monocromatico collimato di luce di lunghezza d'onda $\lambda = 589$ nm. Per un certo spessore minimo di foto-resistenza, $d$, si verifica un'interferenza distruttiva della luce riflessa, assumendo un'incidenza normale sul rivestimento. Derivare un'espressione per la relazione tra $d$, $\mu$ e $\lambda$. Calcolare $d$ utilizzando i dati forniti. In questo punto si può presumere che il silicio si comporti come un mezzo con un indice di rifrazione superiore a $1.40$ e si possono ignorare molteplici riflessi. ** [2,5 punti] **

I seguenti dati possono essere utili:

- La massa molare dell' ossigeno è $32$ g mol$^{-1}$.
- costante di Boltzmann, $k = 1.38 \times 10^{-23}$ J K $^{-1}$.
- Numero di Avogadro, $N_A = 6.02 \times 10^{23}$ mol $^{-1}$.

Formula utile:

$$\int_0^{\infty} x^3 \, e^{-x^2/k}\, dx = -\frac{1}{2}\, e^{-x^2/k}\left(\frac{1}{k^2} + \frac{x^2}{k}\right).$$

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/13ivO5a1QRJhbIRIi_FIWhszxusjRo2Po/view)

**Topic:** [[Kinetic Theory]], [[Wave Optics]]
**Metodi:** [[Kinetic Theory of Gases (metodo)|Kinetic Theory of Gases]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Gas (object)|Gas]]
