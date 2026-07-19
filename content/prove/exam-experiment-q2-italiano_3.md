---
title: OII na Sperimentale
tipo: prova
tags:
  - graph/prova
---
<div class="atom-reader" data-prova="exam-experiment-q2-italiano_3"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="OII na Sperimentale — Problema 1" data-tags="nazione/italia,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/multi,topic/electrostatics,topic/circuits,topic/order-of-magnitude-estimation,argomento/meccanica,object/cylinder,object/electron"></span>

<div class="qlang-switch" data-default="it"></div>



**Diodo cilindrico**

Experiment
Q2-1
Italiano (Italy)
Diodo cilindrico
Setup sperimentale e misure
Un diodo cilindrico a vuoto è formato da due cilindri coassiali. C’è un emettitore di raggio REe lunghezza
LEche emette elettroni: questi elettroni si muovono nel vuoto verso il collettore, il quale ha raggio RC
e una lunghezza efficace infinita. Il collettore è posto ad un potenziale positivo V, mentre l’emettitore è
collegato a terra, cosicché gli elettroni sono convogliati dall’emettitore al collettore.
L’emettitore viene riscaldato cosicché ci sono sempre elettroni in eccesso pronti per essere accelerati
attraverso la differenza di potenziale verso il collettore. Gli elettroni riempiono il vuoto con un plasma. A
causa delle proprietà del plasma c’è una corrente massima che può scorrere nel diodo che dipende dal
potenziale del collettore e dalla geometria del sistema.
In questo esperimento bisognerebbe limitare le misure alla condizione $RC\geq5RE$.
Quando LEè abbastanza grande rispetto a RCsi ipotizza che la corrente massima che attraversa il diodo
è data da
$I\infty=$ GRC
αLE
βVγ
(1)
dove G= G(RC/RE) non è una costante ma è invece una funzione del rapporto adimensionale RC/RE.
Quando LEè confrontabile con RCè necessario introdurre una correzione alla espressione precedente
e la corrente massima che attraversa il diodo è data dall’espressione
IL= $I\inftyF(RC$, RE, LE, V)
(2)
dove Fè una funzione adimensionale di alcune o tutte le quantità RC, RE, LE, e V. L’equazione (1) è un
caso speciale della Equazione (2) quando F=1
Nell’effettuare questo esperimento si può disporre di qualsiasi cilindro di raggio compreso tra 0.1 cm e
20.0 cm, in incrementi di 0.1 cm; la lunghezza del cilindro può essere compresa tra 1.0 cm e 99.0 cm,
sempre in incrementi di 0.1 cm. C’è un generatore di differenza di potenziale simulato che può fornire
un potenziale positivo al collettore tra 0 e 2000 Volt, e un amperometro che può misurare la corrente nel
diodo.
Si consiglia di leggere tutto il problema rapidamente prima di cominciare per pianificare la raccolta dei
dati in modo più efficiente.
Descrizione del software di simulazione.
Il programma di simulazione, chiamato Exp2, permette all’utente di effettuare un numero illimitato di
misure della corrente massima Iper valori differenti dei parametri di ingresso – il raggio del collettore

Experiment
Q2-2
Italiano (Italy)
RC, il raggio dell’emettitore e la lunghezza REe LE, e la differenza di potenziale tra l’emettitore e il collettore V. Tutti i valori dei parametri di ingresso sono scritti con la tastiera dopo la richiesta corrispondente
e immessi premendo il tasto Enter.
Per cominciare, usa la seguente sequenza di autorizzazione quando richiesto:
Immettendo un valore errato farà entrare il programma in modalità di prova; sarà necessario far ripartire
il programma.
Una tipica interfaccia di un singolo ciclo di simulazione del programma assomiglia a questa:
Dapprima si introduce il raggio del collettore, poi il raggio dell’emettitore, poi la lunghezza dell’emettitore, ognuno in centimetri, e infine la differenza di potenziale, in Volt. Ogni valore viene confermato
premendo il tasto Enter.
Il programma ritorna quindi alla richiesta del raggio del collettore.
Inserendo un valore che è al di fuori dei limiti si ottiene un messaggio di errore.
e si ritorna quindi alla richiesta del valore errato immesso.
Tutte le lunghezze sono arrotondate solo al millimetro più vicino mentre tutte le differenze di potenziale
sono arrotondate solo al volt: immettendo un valore più preciso non si migliora la misura. Inoltre, c’è
una incertezza di 0.5 mm in ogni lunghezza e di 0.5 V in ogni differenza di potenziale. Per questo motivo
misure ripetute potrebbero fornire valori differenti per la corrente.
La scala dell’amperometro è automatica cosicché mostra solo tre cifre significative e passa dalla scala
A a mA quando appropriato. L’incertezza è di $\pm$ 1
2 dell’ultima cifra riportata. Si ponga attenzione all’unità
della misura, se viene riportata in mA o A.
Superando il valore di 40 A sull’amperometro lo si brucia. Il programma segnala questo fatto e quindi lo
predispone per la misura successiva.
Volendo in ogni momento fermare il programma per farlo ripartire si prema Ctrl+C.
Parte A: Trovare gli esponenti (4.5 punti)
Trova il valore degli esponenti nell’ Eq (1), riportando una analisi dell’incertezza di ogni risultato:

Experiment
Q2-3
Italiano (Italy)
A.1
Raccogli un insieme di dati che possano essere utilizzati per trovare l’esponente
γrelativo alla variabile V. Riporta il grafico appropriato nello spazio fornito; per
vostra comodità viene fornita della carta lineare e log-log , ma viene richiesto
di fornire solo un grafico. Fornisci il risultato per γe l’analisi dell’incertezza del
tuo risultato.
1.5pt
A.2
Raccogli un insieme di dati che possano essere utilizzati per trovare l’esponente
βrelativo alla variabile LE. Riporta il grafico appropriato nello spazio fornito; un
solo grafico è richiesto. Fornisci il risultato per βe l’analisi dell’incertezza del tuo
risultato.
1.5pt
A.3
Raccogli un insieme di dati che possano essere utilizzati per trovare l’esponente
αrelativo alla variabile RC. Riporta il grafico appropriato nello spazio fornito; un
solo grafico è richiesto. Fornisci il risultato per αe l’analisi dell’incertezza del tuo
risultato.
1.5pt
Parte B: Trovare il coefficiente G (1.0 punti)
Trova il valore della funzione Gquando RC= 10RE:
B.1
Raccogliendo altri dati o riutilizzando i precedenti, determina il valore di G
quando RC= 10REe fornisci una analisi della incertezza del risultato.
1.0pt
Parte C: Trovare la funzione adimensionale F (2.5 punti)
Determina sperimentalmente quali delle quantità RC, RE, LE, e Vinfluenzano FquandoLEè confrontabile con la dimensione di RCnell’ Equazione (2).
C.1
Nell’elenco delle variabili nel foglio risposte riporta la direzione dell’effetto; per
esempio Faumenta, diminuisce o rimane costante se RCviene aumentato?
0.5pt
C.2
Si osserva che quando $LE\approxRCla$ funzione Fpuò essere approssimata come
lineare in una singola variabile x, dove xè una funzione di solo due tra RC,
RE, LE, e V. Il foglio risposte riporta diverse forme funzionali possibili per x; si
scelga quella che riproduce il comportamento più significativo.
0.5pt
C.3
Si assuma una dipendenza lineare della forma F(x) = A+ Bxper i valori di
$LE\approxRC$, e si determini sperimentalmente il parametro B. Ci si limiti all’intervallo RC/2 $\leqLE\leq2RC$. Si disegni un grafico appropriato per Fin termini
della singola scelta per la quantità appropriata xper approssimare Fcome una
funzione lineare. L’analisi degli errori non è richiesta.
1.5pt

<!--fig:start-->
**p.1** — Schema del diodo cilindrico coassiale
![[_attachments/exam-experiment-Q2-italiano_3/exam-experiment-Q2-italiano_3_p1_f1.png]]
<!--fig:end-->

**Topic:** [[Electrostatics]], [[Circuits]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Electron (object)|Electron]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/16yhRuI2jX6QMR5wSbR1kgZ8_Evq1G8Tt/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1KXuT6bDQq8jiG9IX-LCpWdWEAMX1ndDS/view)


<div class="qlang-split" data-lang="en"></div>

**Diodo cilindrico**

Experiments
Q2-1
Italian (Italy)
Other, of a kind used for the manufacture of goods of heading 8106
Experimental setup and measures
A vacuum cylindrical diode is made up of two coaxial cylinders. There is a REe radius emitter and length
ELE emits electrons: these electrons move in the vacuum towards the collector, which has an RC radius
and an effective length that is infinite. The collector is placed at a positive potential V, while the emitter is
The electrons are then transported from the emitter to the collector.
The emitter is heated so that there are always excess electrons ready to be accelerated
through the potential difference to the collector. The electrons fill the vacuum with a plasma. A
The reason for the plasma properties is that there is a maximum current that can flow through the diode depending on the
The potential of the collector and the geometry of the system.
In this experiment, the measurements should be limited to the condition $RC\geq5RE$.
When LE is large enough relative to RCsi it assumes that the maximum current passing through the diode
is given by
$I\infty=$ GRC
Other
Other
(1)
where G= G(RC/RE) is not a constant but is instead a function of the dimensionless RC/RE ratio.
When LE is comparable to RC, a correction to the previous expression must be made.
and the maximum current through the diode is given by the expression
IL= $I\inftyF(RC$, RE, LE, V)
(2)
where Fè is an additive function of some or all of the quantities RC, RE, LE, and V. Equation (1) is a
special case of Equation (2) when F=1
In this experiment, any cylinder with a radius of between 0.1 cm and
20,0 cm, in increments of 0,1 cm; the length of the cylinder may be between 1,0 cm and 99,0 cm,
always in increments of 0.1 cm. There is a simulated potential difference generator that can provide
a positive potential to the collector between 0 and 2000 volts, and an ampere meter that can measure the current in the
I'm not going to say.
It is recommended that you read the whole matter quickly before you start planning the collection of
The data is more efficient.
Description of the simulation software.
The simulation program, called Exp2, allows the user to perform an unlimited number of
Maximum current measurements For different input parameters  the collector radius

Experiments
Q2-2
Italian (Italy)
The emission factor shall be the emission factor, the radius of the emitter and the length REe and LE, and the potential difference between the emitter and the V collector. All input parameters are written on the keyboard after the corresponding request
And then I pressed the Enter key.
To begin, use the following authorisation sequence when required:
The error will enter the program into test mode; it will be necessary to restart the program.
The program.
A typical interface of a single simulation program cycle looks like this:
First, the radius of the collector, then the radius of the emitter, then the length of the emitter, each in centimeters, and finally the potential difference, in Volt. Each value is confirmed
I'm going to press the Enter button.
The program then returns to the request for the collector's beam.
If you enter a value that is outside the limits, you get an error message.
and then you go back to the request for the wrong value you entered.
All the lengths are rounded only to the nearest millimeter while all the potential differences
The value of the measurement is not improved by inserting a more precise value. In addition, there is
an uncertainty of 0.5 mm per length and 0.5 V per potential difference. That is why
repeated measurements could provide different current values.
The scale of the amperometer is automatic so it shows only three significant digits and passes through the scale
A to mA when appropriate. Uncertainty is $\pm$ 1
2 of the last figure reported. Attention to unity
of the measurement, if reported in mA or A.
If you exceed 40 A on the amp, you burn it. The programme reports this fact and therefore the
It is a preparation for the next measure.
To stop the program at any time to restart it, press Ctrl+C.
Part A: Find the exponents (4.5 points)
Find the value of the exponents in the  Eq (1), giving an analysis of the uncertainty of each result:

Experiments
Q2-3
Italian (Italy)
A.1
Collect a set of data that can be used to find the respondent
Relative to variable V. Report the appropriate chart in the space provided; for
Your convenience is provided by linear paper and log-log , but is required
I'm just going to give you a chart. Provide the result for the uncertainty analysis of the
I'm sorry, but your result.
1.5pt
A.2
Collect a set of data that can be used to find the respondent
The value of the product is the value of the product. Report the appropriate chart in the space provided; a
All you need is a graphic. Provide the result for your uncertainty analysis
The result.
1.5pt
A.3
Collect a set of data that can be used to find the respondent
is related to the variable RC. Report the appropriate chart in the space provided; a
All you need is a graphic. Provide the result for the analysis of your uncertainty
The result.
1.5pt
Part B: Find the G coefficient (1.0 points)
Find the value of the function G When RC= 10RE:
B.1
By collecting other data or reusing the previous data, it determines the value of G
where RC= 10REe provides an analysis of the uncertainty of the result.
1.0pt
Part C: Find the additive function F (2.5 points)
It determines experimentally which of the quantities RC, RE, LE, and Vinfluence when it is comparable to the size of the RCnell Equation (2).
C.1
The list of variables in the reply sheet shall indicate the direction of the effect;
For example, does it increase, decrease or remain constant if RC increases?
0.5pt
C.2
It is noted that when $LE\approxRCla$ function F can be approximated as
linear in a single variable x, where it's a function of only two between RC,
RE, LE, e V. The answer sheet contains several possible functional forms for x;
Choose the one that reproduces the most significant behavior.
0.5pt
C.3
Assume a linear dependence of the form F(x) = A+ Bxper the values of
$LE\approxRC$, e si determini sperimentalmente il parametro B. The range is limited to the RC/2 $\leqLE\leq2RC$ range. Draw an appropriate chart for the end-term
of the single selection for the appropriate quantity xper approximate F as a
linear function. Analysis of errors is not required.
1.5pt

<!--fig:start-->
**p.1** — Schema del diodo cilindrico coassiale
![[_attachments/exam-experiment-Q2-italiano_3/exam-experiment-Q2-italiano_3_p1_f1.png]]
<!--fig:end-->

**Topic:** [[Electrostatics]], [[Circuits]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Electron (object)|Electron]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/16yhRuI2jX6QMR5wSbR1kgZ8_Evq1G8Tt/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1KXuT6bDQq8jiG9IX-LCpWdWEAMX1ndDS/view)
