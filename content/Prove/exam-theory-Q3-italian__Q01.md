---
tipo: quesito
quesito_id: quesito_exam-theory-Q3-italian__Q01
parent: prova_exam-theory-Q3-italian
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/teorica/int18tit/exam-theory-Q3-italian.pdf
cluster: Meccanica
quesito: '1'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/fluid-mechanics
  - topic/circuits
  - topic/elasticity-e-materials
  - argomento/meccanica
---

# OII na Teorica — Problema 1

Theory
Q3-1
Italian (Italy)
Fisica dei Sistemi Viventi (10 punti)
Dati: pressione atmosferica normale, P0 = 1.013 $\times$ 105 Pa = 760 mmHg
Part A. La fisica del flusso sanguigno (4.5 punti)
In questa parte analizzerai due modelli semplificati del flusso sanguigno nei vasi.
I vasi sanguigni sono approssimativamente di forma cilindrica, ed è noto che per un flusso stazionario,
non turbolento di un fluido incomprimibile in un cilindro rigido, la differenza di pressione del fluido alle
due estremità del cilindro è data da
$\DeltaP=$ 8lη
πr4 Q,
(1)
dove le rsono la lunghezza e il raggio del cilindro, ηè la viscosità del fluido e Qè la portata volumetrica,
cioè il volume del fluido che attraversa la sezione trasversale del cilindro per unità di tempo.
Questa espressione è spesso sufficiente per fornire il corretto ordine di grandezza della differenza di
pressione nel vaso, anche senza prendere in considerazione le variazioni periodiche del flusso, la compressibilità del vaso e la sua forma irregolare, ed il fatto che il sangue non è semplicemente un fluido ma
una miscela di cellule e plasma. Inoltre, questa espressione ha la stessa forma della legge di Ohm, con
la portata volumetrica corrispondente alla corrente, la differenza di pressione alla tensione, e il fattore
R= 8lη
πr4 alla resistenza.
Considera per esempio la rete simmetrica di arteriole (piccole arterie) illustrata nella Figura 1 che porta
il sangue ad una distesa di capillari di un tessuto. In questa rete, ad ogni biforcazione un vaso è diviso
in due identici vasi. Tuttavia, i vasi di livello più alto sono più sottili e più corti: supponi che i raggi e le
lunghezze dei vasi in due livelli consecutivi, ie i+ 1 , siano collegati tra loro in modo che ri+1 = ri/21/3 e
che li+1 = li/21/3.
Figura 1. Rete di arteriole.

Theory
Q3-2
Italian (Italy)
A.1
Ricava un’espressione per la portata volumetrica, Qi, in un vaso del livello i, in
funzione del numero totale di livelli N, della viscosità η, del raggio r0 e lunghezza l0 del primo vaso, e della differenza $\DeltaP=$ P0 $-Pcap$ tra la pressione delle
arteriole del livello 0, P0, e la pressione della distesa dei capillari Pcap.
1.3pt
A.2
Calcola il valore numerico della portata volumetrica Q0dell’arteriola al livello 0,
se il suo raggio è 6.0 $\times 10-5$ m e la sua lunghezza è 2.0 $\times 10-3$ m. Supponi che la
pressione all’entrata dell’arteriola sia 55 mmHg e che la rete di vasi abbia N=
6 livelli che collegano questa arteriola alla distesa di capillari alla pressione di
30 mmHg. Ipotizza che la viscosità del sangue sia η= 3.5 $\times 10-3$ kg $m-1 s-1$.
Esprimi il risultato in ml/h.
0.5pt
Un vaso sanguigno come circuito RLC
L’approssimazione di vaso rigido cilindrico è insufficiente per diverse ragioni. E’ di particolare importanza
includere la dipendenza dal tempo del flusso e considerare la variazione di diametro del vaso che avviene
quando la pressione varia durante il pompaggio ciclico del sangue prodotto dal cuore. Inoltre, è stato
osservato che nei vasi più grandi la pressione del sangue varia in modo significativo durante un ciclo,
mentre in quelli più piccoli l’ampiezza delle oscillazioni della pressione è molto inferiore, e che il flusso è
quasi indipendente dal tempo.
Quando la pressione aumenta all’interno di un singolo vaso elastico, avverrà un aumento del suo diametro, permettendo così di immagazzinare più fluido nel vaso, e di scaricarlo invece quando la pressione
diminuisce. Per questo motivo, il comportamento elastico di un vaso può essere simulato aggiungendo
un condensatore alla nostra descrizione iniziale. Inoltre, quando consideriamo la dipendenza dal tempo
della portata volumetrica, si deve tenere presente l’inerzia del fluido che è proporzionale alla sua densità ρ= 1.05 $\times$ 103 kg $m-3$. Questa inerzia può essere descritta come un’induttanza nel nostro modello.
Nella Figura 2 il modello di un singolo vaso è rappresentato da un circuito equivalente. La capacità e
l’induttanza equivalenti sono date da
C= 3lπr3
2Eh
and L= 9lρ
4πr2 ,
(2)
rispettivamente, dove hè lo spessore della parete del vaso ed Eil modulo di Young dell’arteria, un coefficiente che descrive la deformazione del tessuto del vaso quando una forza viene applicata. Il modulo
di Young ha la stessa unità di misura della pressione ed è dell’ordine di E= 0.06 MPa per le arteriole.
Figura 2. Circuito equivalente di un singolo vaso.

Theory
Q3-3
Italian (Italy)
A.3
Calcola, in regime stazionario, l’ampiezza della pressione in uscita dal vaso, Pout,
in funzione dell’ampiezza della pressione in ingresso, Pin, la resistenza equivalente, R, l’induttanza Le la capacità C, per un flusso di pulsazione ω. Stabilisci la condizione tra η, ρ, E, h, re laffinché, per valori bassi della pulsazione ,
l’ampiezza di oscillazione della pressione in uscita sia inferiore a quella di Pin.
2.0pt
A.4
Per la rete di vasi in A.2 stima lo spessore massimo hdella parete dell’arteriola in modo che la condizione stabilita in A.3 sia soddisfatta (ipotizza che hsia
indipendente dal livello).
0.7pt
Parte B. Crescita di un tumore (5.5 punti)
La crescita di un tumore è un processo molto complesso dove i meccanismi biologici di selezione naturale
e proliferazione delle cellule sono intrecciati con la fisica. In questo problema considereremo un modello
semplificato per la crescita di un tumore che descrive l’aumento della pressione comunemente osservata
nei tumori solidi.
Consideriamo un gruppo di cellule sane che formano un tessuto circondato da una membrana inestensibile, che costringe il tessuto a mantenere sempre la stessa forma: una sfera di raggio R (Figura
3).
Figure 3. Tumore semplificato.
Inizialmente il tessuto non presenta sforzi residui, cioè la pressione in ogni punto è uguale a quella
atmosferica.
All’istante t= 0, un tumore inizia a crescere nel centro di questa sfera e, man mano che cresce, la pressione all’interno del tessuto aumenta. Considera che entrambi i tessuti (sani cioè normali, N, e il tumore,
T) siano comprimibili in modo che le loro densità, ρN e ρT, crescano linearmente con la pressione:
ρN = ρ0 (1 + p
KN
) ,
ρT = ρ0 (1 + p
KT
) ,
(3)
dove ρ0 è la densità del tessuto a riposo, pè la differenza di pressione rispetto alla pressione atmosferica
e KN , KT i moduli di compressibilità (moduli di massa) dei tessuti normali e tumorali, rispettivamente. In
generale, i tumori sono più rigidi e quindi hanno un modulo di massa più elevato.

Theory
Q3-4
Italian (Italy)
B.1
La massa delle cellule sane non viene alterata dalla crescita del tumore. Calcola
il rapporto tra il volume del tumore e il volume totale del tessuto, v= VT/V, in
funzione del rapporto tra la massa del tumore (MT) e la massa del tessuto sano
(MN), μ= MT/MN e il rapporto tra i moduli di massa, κ= KN/KT.
1.0pt
L’ipertermia è talvolta impiegata assieme alla chemioterapia e alla radioterapia nel trattamento del cancro. Con l’ipertermia, le cellule cancerogene sono selettivamente riscaldate dalla normale temperatura
del corpo umano , 37 oC, fino ad una temperatura superiore a 43 oC, inducendo la loro morte. I ricercatori stanno attualmente sviluppando dei nanotubi di carbonio ricoperti con speciali proteine in grado di
legarsi alle cellule tumorali. Quando il tessuto è irradiato con radiazione nel vicino infrarosso, i nanotubi
la assorbono in misura molto maggiore rispetto ai tessuti circostanti e quindi possono essere riscaldati
selettivamente così come le cellule tumorali a cui sono attaccati.
Supponi che il tumore, le cellule sane e il tessuto circostante abbiano una conduttività termica costante
k, cioè nella geometria di questo problema, l’energia che attraversa una superficie sferica di raggio r
per unità di tempo e per unità di area sia uguale a kvolte la derivata della temperatura rispetto ad rI
nanotubi sono uniformemente distribuiti all’interno del volume del tumore e sono in grado di rilasciare
una potenza Pdi energia termica per unità di volume. Supponiamo che la temperatura sia uguale alla
normale temperatura corporea umana molto lontana da quella del tumore.
B.2

<!--fig:start-->
**p.1** — Rete di arteriole ad albero binario
![[_attachments/exam-theory-Q3-italian/exam-theory-Q3-italian_p1_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.2** — Circuito RLC equivalente di un vaso
![[_attachments/exam-theory-Q3-italian/exam-theory-Q3-italian_p2_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.3** — Tumore semplificato a cerchi concentrici
![[_attachments/exam-theory-Q3-italian/exam-theory-Q3-italian_p3_f3.png]]
<!--fig:end-->

**Topic:** [[Fluid Mechanics]], [[Circuits]], [[Elasticity & Materials]]
**Metodi:** [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Differential Equations (metodo)|Differential Equations]], [[Stress-Strain Analysis (metodo)|Stress-Strain Analysis]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.1
