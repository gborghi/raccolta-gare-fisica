---
tipo: quesito
quesito_id: quesito_exam-experiment-Q1-italian__Q01
parent: prova_exam-experiment-Q1-italian
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/sperimentale/int18sit/exam-experiment-Q1-italian.pdf
cluster: Meccanica
quesito: '1'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/circuits
  - topic/electrostatics
  - topic/electromagnetism
  - argomento/meccanica
---

# OII na Sperimentale — Problema 1

Experiment
Q1-1
Italian (Italy)
Transistor di carta (10 punti)
La tecnologia elettronica nella società moderna si basa su un dispositivo semplice ma potente: il transistor, che può essere utilizzato sia come interruttore che come amplificatore. In modalità interruttore il
transistor viene utilizzato per la memorizzazione e l’elaborazione di informazioni digitali.
Qui analizzeremo due tipi di transistor a effetto di campo (FET = Field Effect Transistor): il JFET (transistor
a effetto di campo di giunzione) e il TFT (transistor a campo sottile).
Spieghiamo brevemente come funziona un FET. Un FET è un dispositivo non lineare a 3 terminali [i terminali sono chiamati Base (Gate G); emettitore (Source S);collettore (Drain D)] che può controllare il flusso
di corrente tra Source e Drain agendo sulla tensione applicata tra Gate e Source . In un’analogia semplice, benché imperfetta, un FET funziona in modo simile a un rubinetto dell’acqua, dove la manopola che
controlla il flusso dell’acqua svolge un ruolo analogo al Gate.
Figura 1. Schema di un JFET a ”canale n” (a sinistra), la sua analogia idraulica (al centro) e il
simbolo del circuito elettrico (a destra). Le frecce nello schema del JFET (figura a sinistra) indicano il flusso della corrente elettrica tra Source (S) e Drain (D) attraverso lo stretto ”canale n”.
La larghezza del canale dipende dalla tensione applicata tra Gate (G) e Source (S).
Il Junction-FET (JFET) funziona grazie alle proprietà della giunzione (del contatto) tra due tipi di un materiale semiconduttore, come il silicio drogato p e n. Per questo motivo viene chiamato ”Junction”-FET. Un
JFET contiene uno stretto canale attraverso il quale scorre la corrente tra Source e Drain, e in un FET a ”canale n” questo canale è fatto di materiale di tipo n. La larghezza di questo canale può essere controllata
in modo preciso applicando una tensione negativa tra Gate e Source, VGS= $VG-VS$. Per VGSfissato, la
corrente che scorre tra Source e Drain dipende in maniera non lineare dalla tensione applicata tra Drain
e Source, VDS= $VD-VS$. Tuttavia, se la tensione VDSè piccola, la corrente dipende in modo lineare dalla
tensione applicata, pertanto il JFET segue la legge di Ohm. Tuttavia, la resistenza di uscita, RDS= VDS
IDS
dipende fortemente dalla tensione VGSapplicata, e segue con ottima approssimazione la legge:
RDS =
R0
DS
1 $-VGS/VP$
,
(1)
dove R0
DSè la resistenza di uscita per VGS= 0 e VP< 0 è un parametro relativo al JFET chiamato la tensione
di pinch-off. Chiaramente, alla tensione di pinch-off, il FET blocca compleamente il flusso di corrente.
Per ogni fissato VGS> VP, la corrente tra Source e Drain inizierà a discostarsi dal comportamento lineare all’aumentare VDS, e ad un certo punto raggiungerà la saturazione ad un valore quasi costante.
Chiamiamo IDSSla corrente di saturazione per VGS= 0. Nel regime di saturazione (cioè per VDSgrande),
la corrente di saturazione dipende da VGSnella maniera seguente:
IDS = IDSS (1 $-VGS/VP)2$ .
(2)

Experiment
Q1-2
Italian (Italy)
Dobbiamo sottolineare due caratteristiche molto importanti di un JFET. Sebbene la sua resistenza di
uscita (controllata dalla tensione) possa essere molto bassa, la resistenza di ingresso (RGS = VGS/IGS) è
estremamente alta, solitamente maggiore di 109 $\Omega$, quindi questo dispositivo utilizza pochissima corrente in ingresso. Inoltre, la capacità di un JFET di piccole dimensioni è piuttosto bassa, il che lo rende un
dispositivo molto veloce che può ”aprirsi e chiudersi” con frequenze superiori al MHz.
Ora procediamo a descrivere come funziona un diverso tipo di FET, il TFT.
Come qualsiasi altro FET, il TFT consente il controllo di una corrente tra due contatti, gli elettrodi ”Drain”
e ”Source”, mediante un potenziale applicato al terzo elettrodo, il Gate.
L’elettrodo Gate è fisicamente separato dallo strato di semiconduttore attraverso un dielettrico che consente la creazione di un campo elettrico verticale che controlla i portatori di carica liberi presenti nel
semiconduttore (effetto di campo). Lo strato di dielettrico può essere sostituito da una membrana elettrolitica come un foglio di carta in cui esistono ioni mobili (vedi figura 2) e in questo caso la tensione
applicata al Gate spingerà gli ioni con carica opposta verso l’interfaccia del semiconduttore, creando
uno strato di cariche ioniche che modificherà la densità dei portatori liberi di carica presenti all’interno
del semiconduttore (Electrolye Gated Transistors - EGT). I ricercatori della ”Universidade Nova” di Lisbona, sono stati pionieri nel 2008 nello sviluppo del ”transistor cartaceo”, e sono leader mondiali in questo
campo.
Figura 2. Schema del transistor a pellicola sottile (TFT) da utilizzare in questo problema. S =
Source; D = Drain; G = Gate; A = carta (strato di dielettrico); B - substrato; C - strato semiconduttore (ossido di gallio-indio-zinco (GIZO)); X - Contatti metallici. Le frecce indicano il flusso
corrente.
Analogamente ai JFET, i transistor TFT possono operare in due modalità operative fondamentali, una
modalità lineare e una modalità di saturazione. Al contrario dei JFET, la capacità intrinseca dei TFT è un
parametro rilevante per le prestazioni del dispositivo.
In questo problema sperimentale ti si chiede di esaminare come funziona un JFET a canale n e un TFT
cartaceo.
Devi determinare le curve caratteristiche (CC) di questi dispositivi misurando la corrente tra Se D(IDS)
attraverso l’applicazione di varie tensioni a G(VGS) e D(VDS).
Le due CC più importanti sono le curve di output e di trasferimento:
• Curva di output: per questa curva la corrente tra Source e Drain (IDS) verrà misurata e tracciata in
funzione della tensione tra Source e Drain (VDS), lasciando variare VDSda 0 Vfino a +3 V , in passi
successivi, mantenendo VGS costante.

Experiment
Q1-3
Italian (Italy)
• Curva di trasferimento: per questa curva, IDSsarà misurata e graficata come funzione di VGS. VDS
verrà mantenuta costante con un valore appropriato in modo che il transistor funzioni in modalità
di saturazione e VGSverrà fatto variare da $-3$ Va 0 Vin passi successivi.

Experiment
Q1-4
Italian (Italy)
Materiale
Il seguente materiale (Figura 3) è fornito per questo problema sperimentale:
1. multimetro
2. transistor JFET (fornito all’interno di una busta di plastica etichettata)
3. cavi (10) con morsetti a coccodrillo
4. morsetti a coccodrillo piatti (4, forniti all’interno di un sacchetto di plastica)
5. batterie (4 $\times$ 1,5 V)
6. portabatterie
7. piastrina forata (mini-breadboard) con supporto
8. cavetti sottili (3) per i collegamenti alla piastrina forata
9. matita HB
10. penna con inchiostro argentato conduttore (Circuit Scribe)
11. cronometro
12. foglio di carta con circuiti stampati e TFT incorporato che utilizza la carta come strato dielettrico
(Figura 4)
13. borsa con materiale di scrittura (1 penna, 1 matita, 1 gomma / temperino, 1 righello)

Experiment
Q1-5
Italian (Italy)
Figura 3. Materiale sperimentale

Experiment
Q1-6
Italian (Italy)
Figura 4. A sinistra: foglio di carta con circuiti stampati incluso nel materiale: carta (1), piste
conduttrici argentate (2), piste resistive al carbonio (3), transistor di carta (4), resistenze del
partitore di tensione (R1 e R2). A destra: dimensioni fisiche delle resistenze del partitore di
tensione (i passi di 0,5 mm sono costanti per ciascun pezzo).
Precauzione importante:
Non piegare il foglio di carta con i circuiti stampati ed il transistor inserito poiché si potrebbe danneggiare. Cerca di lasciarlo il più possibile piatto durante le misure al fine di raggiungere i migliori
risultati.
Ai fini delle misure è importante considerare le seguenti importanti informazioni:

Experiment
Q1-7
Italian (Italy)
• Il multimetro deve operare sempre in modalità CD
• Il multimetro non autoregola la portata e devi attentamente scegliere quelle più appropriate
per le tue misure . Nel caso il valore sia fuori dall’intervallo delle letture , il display mostrerà ”1”
o ”-1” (a sinistra del display) per valori

<!--fig:start-->
**p.1** — Schema JFET, analogia idraulica e simbolo
![[_attachments/exam-experiment-Q1-italian/exam-experiment-Q1-italian_p1_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.2** — Schema TFT a effetto di campo
![[_attachments/exam-experiment-Q1-italian/exam-experiment-Q1-italian_p2_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.5** — Materiale sperimentale fornito
![[_attachments/exam-experiment-Q1-italian/exam-experiment-Q1-italian_p5_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.6** — Foglio circuiti stampati e dimensioni resistenze
![[_attachments/exam-experiment-Q1-italian/exam-experiment-Q1-italian_p6_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.8** — Partitore di tensione
![[_attachments/exam-experiment-Q1-italian/exam-experiment-Q1-italian_p8_f5.png]]
<!--fig:end-->

<!--fig:start-->
**p.9** — Punti di contatto sulle linee tracciate
![[_attachments/exam-experiment-Q1-italian/exam-experiment-Q1-italian_p9_f6.png]]
<!--fig:end-->

<!--fig:start-->
**p.9** — Connessioni delle batterie
![[_attachments/exam-experiment-Q1-italian/exam-experiment-Q1-italian_p9_f7.png]]
<!--fig:end-->

<!--fig:start-->
**p.10** — Apparato caratterizzazione JFET e piedinatura
![[_attachments/exam-experiment-Q1-italian/exam-experiment-Q1-italian_p10_f8.png]]
<!--fig:end-->

<!--fig:start-->
**p.11** — Partitore di tensione con carico
![[_attachments/exam-experiment-Q1-italian/exam-experiment-Q1-italian_p11_f9.png]]
<!--fig:end-->

<!--fig:start-->
**p.13** — Misura caratteristiche TFT
![[_attachments/exam-experiment-Q1-italian/exam-experiment-Q1-italian_p13_f10.png]]
<!--fig:end-->

<!--fig:start-->
**p.14** — Amplificatore a Source comune, circuito inverter
![[_attachments/exam-experiment-Q1-italian/exam-experiment-Q1-italian_p14_f11.png]]
<!--fig:end-->

<!--fig:start-->
**p.15** — Setup inverter/amplificatore a Source comune
![[_attachments/exam-experiment-Q1-italian/exam-experiment-Q1-italian_p15_f12.png]]
<!--fig:end-->

**Topic:** [[Circuits]], [[Electrostatics]], [[Electromagnetism]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.1
