---
tipo: quesito
quesito_id: quesito_exam-experiment-Q2-italiano_3__Q01
parent: prova_exam-experiment-Q2-italiano_3
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/sperimentale/int22sit/exam-experiment-Q2-italiano.pdf
cluster: Meccanica
quesito: '1'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/electrostatics
  - topic/circuits
  - topic/order-of-magnitude-estimation
  - argomento/meccanica
---

# OII na Sperimentale — Problema 1

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
**Fonte:** Testo (PDF) — p.1
**Soluzione:** Soluzioni (PDF)
