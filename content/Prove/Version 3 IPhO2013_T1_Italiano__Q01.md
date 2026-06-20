---
tipo: quesito
quesito_id: quesito_Version 3 IPhO2013_T1_Italiano__Q01
parent: prova_Version 3 IPhO2013_T1_Italiano
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: '2013'
level: ''''''
pdf: Gara individuale/ipho/teorica/int13tit/Version 3 IPhO2013_T1_Italiano.pdf
quesito: '1'
generator: llm-retranscribed
tags:
  - kg/prova
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/newtonian-mechanics
  - topic/thermodynamics
  - topic/nuclear-e-particle-physics
---

# OII 2013 '' — Version 3 IPhO2013_T1_Italiano.pdf — Problema 1

**Il Meteorite Maribo**

### Introduzione

Un meteoroide è una piccola particella (tipicamente di dimensioni minori di 1 m) proveniente da una cometa o un asteroide. Quando un meteoroide cade sul suolo viene chiamato meteorite.

La notte del 17 gennaio 2009 molte persone vicino al mar Baltico videro una traccia brillante o una palla di fuoco attribuita ad un meteoroide in caduta nell'atmosfera terrestre. In Svezia una telecamera di sorveglianza registrò un video dell'avvenimento, alcuni fotogrammi del quale sono riprodotti nella figura 1.1(a).

Da queste inquadrature e dalle descrizioni dei testimoni oculari fu possibile restringere la possibile zona di impatto e sei settimane più tardi venne individuato un meteorite di massa $0{.}025\ \text{kg}$ nelle vicinanze della città di Maribo nella Danimarca meridionale. Misure effettuate sul meteorite, ora chiamato Maribo, e sulla sua orbita nel cielo diedero interessanti risultati. La sua velocità all'ingresso nell'atmosfera risultò estremamente alta. La sua età, $4{.}4 \times 10^{9}\ \text{anni}$, mostra che si formò poco dopo la nascita del sistema solare. Il meteorite Maribo potrebbe essere una parte della cometa Encke.

---

### La velocità di Maribo

La palla di fuoco si muoveva all'incirca in direzione ovest, più precisamente lungo un percorso che forma un angolo di $285°$ rispetto al nord, verso il luogo dove il meteorite fu successivamente trovato, come schematizzato in figura 1.1. Il meteorite fu individuato ad una distanza di $195\ \text{km}$ dalla telecamera di sorveglianza in direzione $230°$ rispetto al nord.

Dati da Fig. 1.1(b) — azimuth = posizione angolare dal nord in verso orario nel piano orizzontale; altitudine = posizione angolare sull'orizzonte:

| Fotogramma | Tempo | Azimuth | Altitudine |
|---|---|---|---|
| 155 | $1{.}46\ \text{s}$ | $215°$ | $19{.}2°$ |
| 161 | $2{.}28\ \text{s}$ | $221°$ | $14{.}7°$ |
| Atterraggio a M | — | $230°$ | $0{.}0°$ |

**Domanda 1.1** *(1.3 punti)*

Sulla base di quanto detto sopra e usando i dati forniti in Fig. 1.1, calcola la velocità media di Maribo nell'intervallo tra i fotogrammi 155 e 161. Trascura la curvatura della Terra e la forza gravitazionale sul meteoroide.

---

### L'attraversamento dell'atmosfera e la fusione

La forza di attrito dell'aria sul meteoroide in moto nella parte più esterna dell'atmosfera dipende in maniera complicata dalla forma e dalla velocità del meteoroide e dalla temperatura e densità dell'atmosfera. Con ragionevole approssimazione la forza d'attrito $F$ in questa regione è data dalla formula

$$F = \frac{1}{2}\,C_D\,\rho_{\text{atm}}\,A\,v^2,$$

dove $C_D$ è una costante adimensionale, $\rho_{\text{atm}}$ la densità dell'atmosfera, $A$ la sezione trasversale del meteorite proiettata nella direzione della velocità, e $v$ la sua velocità.

Per analizzare il meteoroide si facciano le seguenti ipotesi semplificatrici: l'oggetto mentre entra nell'atmosfera era una sfera di massa $m_0 = 0{.}5\ \text{kg}$, raggio $r_0 = 0{.}04\ \text{m}$, temperatura $T_0 = 300\ \text{K}$ e velocità $v_0 = 3{.}0 \times 10^{4}\ \text{m\,s}^{-1}$. La densità dell'atmosfera viene assunta costante (con valore pari a quello ad una altezza di 40 km sulla superficie della Terra), $\rho_{\text{atm}} = 3{.}97 \times 10^{-3}\ \text{kg\,m}^{-3}$, e il coefficiente di attrito è $C_D = 1{.}0$.

**Domanda 1.2a** *(0.7 punti)*

Trova il valore dell'intervallo di tempo trascorso a partire dall'ingresso nell'atmosfera del meteoroide affinché la sua velocità si riduca del 10% dal valore $v_0$ fino a $0{.}9\,v_0$. Trascura la forza gravitazionale agente sul meteoroide e assumi che esso mantenga la stessa massa e forma.

**Domanda 1.2b** *(0.3 punti)*

Calcola quante volte l'energia cinetica del meteoroide all'ingresso nell'atmosfera $E_k$ è maggiore dell'energia $E_{\text{fus}}$ necessaria per fonderlo completamente (si veda la tabella dei dati numerici).

---

### Il riscaldamento di Maribo durante la caduta nell'atmosfera

Quando il meteoroide di pietra Maribo entrò nell'atmosfera a velocità supersonica apparve come una palla di fuoco a causa dell'aria circostante incandescente. Nondimeno, solo lo strato più esterno di Maribo era riscaldato. Assumi che Maribo sia una sfera omogenea di densità $\rho_m$, calore specifico $c_m$ e conducibilità termica $\kappa_m$ (i valori sono riportati nella tabella dei dati numerici). Inoltre, all'ingresso nell'atmosfera, aveva temperatura $T_0 = 300\ \text{K}$, mentre attraversando l'atmosfera la sua temperatura superficiale rimaneva costante $T_s = 1500\ \text{K}$ a causa dell'attrito con l'aria, riscaldando progressivamente in questo modo il suo interno.

Dopo essere caduto per un tempo $t$ nell'atmosfera, lo strato più esterno di Maribo di spessore $d$ risulterà essere stato riscaldato ad una temperatura significativamente maggiore di $T_0$. Questo valore dello spessore può essere stimato sulla base di una analisi dimensionale come un semplice prodotto di potenze dei parametri termodinamici:

$$d \propto \kappa_m^{\,\alpha}\, c_m^{\,\beta}\, \rho_m^{\,\gamma}\, t^{\,\delta}.$$

**Domanda 1.3a** *(0.6 punti)*

Determina mediante analisi dimensionale delle unità il valore dei quattro esponenti $\alpha$, $\beta$, $\gamma$ e $\delta$.

**Domanda 1.3b** *(0.4 punti)*

Calcola lo spessore $d$ dopo un tempo di caduta $t = 30\ \text{s}$, e determina il rapporto $d/r_0$.

---

### L'età di un meteorite

Le proprietà chimiche di elementi radioattivi possono essere differenti, cosicché durante la cristallizzazione dei minerali di un dato meteorite qualche minerale avrà un alto contenuto di uno specifico elemento radioattivo e altri un basso contenuto. Questa differenza può essere utilizzata per determinare l'età di un meteorite mediante datazione radiometrica dei suoi minerali radioattivi.

Come esempio specifico studiamo l'isotopo $^{87}_{37}\text{Rb}$ (elemento n. 37), che decade nell'isotopo stabile $^{87}_{38}\text{Sr}$ (elemento n. 38) con una emivita di $t_{1/2} = 4{.}88 \times 10^{10}\ \text{anni}$, relativamente all'isotopo stabile $^{86}\text{Sr}$. All'epoca della cristallizzazione il rapporto ${}^{87}\text{Sr}/{}^{86}\text{Sr}$ era lo stesso per tutti i minerali mentre il rapporto ${}^{87}\text{Rb}/{}^{86}\text{Sr}$ era differente. Con il trascorrere del tempo, la quantità di $^{87}\text{Rb}$ diminuisce per decadimento mentre, conseguentemente, la quantità di $^{87}\text{Sr}$ aumenta. Come risultato oggi il rapporto ${}^{87}\text{Sr}/{}^{86}\text{Sr}$ sarà differente. In Fig. 1.2(a), i punti sulla retta orizzontale si riferiscono al rapporto ${}^{87}\text{Rb}/{}^{86}\text{Sr}$ in differenti minerali all'istante di tempo in cui essi sono cristallizzati.

**Domanda 1.4a** *(0.3 punti)*

Scrivi lo schema di decadimento del ${}^{87}_{37}\text{Rb}$ in ${}^{87}_{38}\text{Sr}$.

**Domanda 1.4b** *(0.7 punti)*

Mostra che il grafico del rapporto ${}^{87}\text{Sr}/{}^{86}\text{Sr}$ al tempo presente riportato in funzione del rapporto ${}^{87}\text{Rb}/{}^{86}\text{Sr}$ al tempo presente per campioni di minerali differenti ma provenienti dallo stesso meteorite è una linea retta, la cosiddetta **linea isocrona**, con pendenza

$$s(t) = e^{\lambda t} - 1.$$

Qui $t$ è il tempo trascorso dalla formazione dei minerali mentre $\lambda$ è la costante di decadimento inversamente proporzionale all'emivita $t_{1/2}$.

**Domanda 1.4c** *(0.4 punti)*

Determina l'età $t_0$ del meteorite utilizzando la linea isocrona di Fig. 1.2(b).

---

### La cometa Encke, da cui Maribo può provenire

Nella sua orbita intorno al Sole la distanza minima e massima tra la cometa Encke e il Sole sono rispettivamente $r_{\min} = 0{.}3140\ \text{AU}$ e $r_{\max} = 4{.}429\ \text{AU}$.

**Domanda 1.5** *(0.6 punti)*

Calcola il periodo orbitale $T_{\text{Encke}}$ della cometa Encke.

---

### Conseguenze dell'impatto di un asteroide con la Terra

65 milioni di anni fa la Terra fu colpita da un enorme asteroide con densità $\rho_a = 2500\ \text{kg\,m}^{-3}$, raggio $r_a = 5{.}0\ \text{km}$ e velocità finale $v_a = 7{.}4 \times 10^{4}\ \text{m\,s}^{-1}$. Questo impatto provocò la sparizione di molte forme viventi sulla Terra e la formazione dell'enorme Cratere Chicxulub. Assumi che un identico asteroide colpisca oggi la Terra in un urto completamente anelastico e usa il fatto che il momento di inerzia della Terra è $0.83$ volte quello di una sfera omogenea della stessa massa e raggio. Il momento di inerzia di una sfera omogenea di massa $M$ e raggio $R$ è $\tfrac{2}{5}MR^2$. Trascura ogni cambiamento nell'orbita della Terra.

**Domanda 1.6a** *(0.7 punti)*

Supponi che l'asteroide urti il Polo Nord. Trova la massima variazione dell'orientazione angolare $\Delta\theta$ dell'asse della Terra dopo l'impatto.

**Domanda 1.6b** *(0.7 punti)*

Supponi che l'asteroide colpisca l'Equatore con un urto radiale. Trova la variazione $\Delta T$ nella durata di una rivoluzione della Terra dopo l'impatto.

**Domanda 1.6c** *(0.7 punti)*

Supponi che l'asteroide colpisca l'Equatore con un urto tangenziale nel piano equatoriale. Trova la variazione $\Delta T$ nella durata di una rivoluzione della Terra dopo l'impatto.

---

### Velocità massima di impatto

Considera un corpo celeste, gravitazionalmente legato al sistema solare, che urta la superficie della Terra con velocità $v_{\text{imp}}$. Inizialmente l'effetto del campo gravitazionale della Terra sul corpo può essere trascurato. Trascura l'attrito con l'atmosfera, l'effetto degli altri corpi celesti e la rotazione della Terra.

**Domanda 1.7** *(1.6 punti)*

Calcola $v_{\text{imp}}^{\max}$, il valore massimo possibile di $v_{\text{imp}}$.

---

<!--fig:start-->
**p.2** — Fotogrammi della palla di fuoco nel cielo
![[_attachments/Version 3 IPhO2013_T1_Italiano/Version 3 IPhO2013_T1_Italiano_p2_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.2** — Mappa Copenaghen-Maribo con azimut
![[_attachments/Version 3 IPhO2013_T1_Italiano/Version 3 IPhO2013_T1_Italiano_p2_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.3** — Figura 1.2 isocrone datazione del meteorite
![[_attachments/Version 3 IPhO2013_T1_Italiano/Version 3 IPhO2013_T1_Italiano_p3_f3.png]]
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Thermodynamics]], [[Nuclear & Particle Physics]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Differential Equations (metodo)|Differential Equations]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Radioactive Decay Law (metodo)|Radioactive Decay Law]], [[Kepler's Laws (metodo)|Kepler's Laws]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.1
**Soluzione:** Soluzioni (PDF)
