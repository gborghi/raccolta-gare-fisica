---
tipo: quesito
quesito_id: quesito_exam-experiment-Q2-italiano_2__Q01
parent: prova_exam-experiment-Q2-italiano_2
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/sperimentale/int21sit/exam-experiment-Q2-italiano.pdf
cluster: Meccanica
quesito: '1'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/circuits
  - topic/thermodynamics
  - topic/modern-quantum-physics
  - argomento/meccanica
---

# OII na Sperimentale — Problema 1

Experiment
Q2-1
Italiano (Italy)
Light Emitting Diode (LED) (10 punti)
Questo esperimento è progettato per investigare le proprietà elettriche e termiche dei LED. Per le misurazioni della temperatura del PCB si dovrebbero utilizzare i coefficienti ottenuti nella sezione Esperimento-1
B.1. Il circuito elettrico usato in questo esperimento è mostrato in Fig. 2.1. Per l’uso della strumentazione
vedi la descrizione del problema 1.
Figura 2.1. Apparato sperimentale per lo studio sperimentale del LED. Il LED è alimentato con
corrente costante (continua o pulsata) a un potenziale diretto misurato con un voltmetro ad
alta impedenza. Le parti dell’esperimento relative al riscaldamento e alla misura della temperatura sono condotte come nell’Esperimento 1. L’equilibrio termico viene mantenuto tra tutti
i componenti sul circuito stampato (PCB).
I LED sono tipicamente alimentati con una corrente costante, a differenza di una alimentazione a differenza di potenziale costante utilizzata per le lampade a incandescenza. La differenza di potenziale dei
LED dipende dalla corrente impostata e dalla temperatura del substrato semiconduttore. L’espressione
matematica delle caratteristiche volt-ampere è complicata e dipende da parametri fisici e tecnologici,
che di solito non sono noti. Di conseguenza in questo esperimento studieremo la dipendenza bidimensionale della differenza di potenziale dalla corrente del LED e dalla temperatura del substrato del LED
TJ:
ULED = function(ILED, TJ).
La resistenza termica tra il semiconduttore del LED e il PCB è calcolata in questo modo (per valori differenti della corrente (ILED)):
$\DeltaT$
P
= (TJ $-TPCB$)
P
.
Attenzione: il LED può essere alimentato in corrente continua o mediante brevi impulsi di corrente. In
quest’ultimo caso si assume che la durata dell’impulso sia abbastanza breve da evitare il surriscaldamento del LED (per esempio un impulso di durata di 1 ms con misure intervallate di almeno 100 ms), e
si assume che in questa modalità di alimentazione TJ = TPCB . Operando in modalità continua TJ > TPCB e
la resistenza termica $\DeltaT$
Ppuò essere calcolata.
Part A. Caratteristica Volt-Ampere a differenti temperature (5.0 punti)
La relazione approssimata tra la differenza di potenziale e la temperatura è la seguente: T(U) =
3500
$9.9-ln($ 1
$U-0.3$), dove Tè in Kelvin e Uin volt.

Experiment
Q2-2
Italiano (Italy)
Misura e riporta in grafico Corrente vs Differenza di potenziale del LED per valori della temperatura
variabili dalla temperatura ambiente a 80 $^{\circ}C$ in modalità pulsata.
A.1
Misura e riporta in grafico la dipendenza ILED_pulsato(ULED_pulsato, T) nell’intervallo
tra 3 mA e 50 mA a temperatura ambiente, e 40, 60, e 80 $^{\circ}C$. Traccia le curve
sullo stesso grafico.
2.5pt
A.2
Nel foglio risposte, compila la tabella con i valori di ULED_pulsato a 3, 10, 20, e 40
mA di corrente erogata ILED_pulsato a temperatura ambiente, 40, 60, e 80 $^{\circ}C$.
1.0pt
A.3
Riporta in grafico i punti principali di ULED_pulsato(ILED_pulsato, T) (quelli indicati nella domanda A.2) e calcola (approssima graficamente) la dipendenza lineare del
coefficiente di temperatura $(\DeltaU(I)/\DeltaT$) a 3, 10, 20, e 40 mA.
1.5pt
Parte B. Misura della caratteristica Volt-Ampere del LED per corrente di alimentazione
continua 3.5 punti)
B.1
Misura e riporta in grafico la relazione ILED_continuo(ULED_continuo) nell’intervallo da
3 mA a 50 mA con il riscaldatore spento nel regime di alimentazione continuo.
Scrivi inoltre nel foglio risposte i valori di ULED_continuo, temperatura del PCB (termostato ) TPCB, e la differenza $\DeltaU=$ ULED_pulsato $-ULED_continuo$ a 3, 10, 20, e 40
mA.
1.5pt
B.2
Poiché la resistenza dei LED non è costante (dipende dalla corrente), viene utilizzato il termine Resistenza Dinamica ed espresso come dU
dI. Utilizzando il grafico
(B.1), stimare il reciproco della resistenza dinamica del LED 1/( dU
dI) =
dI
dU. Nel
foglio delle risposte, scrivi i valori di dI
dUa 3, 10, 20 e 40 mA. Disegna le tangenti
dI
dUin questi punti del grafico.
0.5pt
B.3
Calcola e riporta in grafico la differenza $\DeltaT(P$) tra la temperatura del semiconduttore del LED in modalità continua (TJ) e la temperatura del PCB (TPCB) come
funzione della potenza elettrica (a 3, 10, 20, e 40 mA). Calcola (approssimando graficamente) la resistenza termica lineare del LED $\DeltaT$
P, e scrivi il valore nel
foglio risposte.
Nota: Assumi che tutta l’energia elelttrica consumata dal LED sia convertita in
calore e che l’energia luminosa emessa sia trascurabile.
1.5pt
Parte C. Calcolo della corrente di deriva del LED dovuta alla temperatura. (1.5 punti)
Nell’introduzione è stato detto che i LED sono tipicamente alimentati a corrente costante, ma non a
differenza di potenziale costante. Supponi che si decida di alimentare il LED al valore nominale di corrente
di 20 mA con il valore della differenza di potenziale che hai misurato per la corrente di 20 mA nella parte
B.1.

Experiment
Q2-3
Italiano (Italy)
C.1
Utilizzando la caratteristica del LED determinata nella parte B, stima la reale
corrente che fluisce nel LED se la differenza di potenziale è mantenuta costante
(differenza di potenziale misurata in B.1, U(20mA)), ma la temperatura del PCB
è a 0 $^{\circ}C$ e 40 $^{\circ}C$.
1.5pt

<!--fig:start-->
**p.1** — Circuito elettrico con LED e apparato termico PCB
![[_attachments/exam-experiment-Q2-italiano_2/exam-experiment-Q2-italiano_2_p1_f1.png]]
<!--fig:end-->

**Topic:** [[Circuits]], [[Thermodynamics]], [[Modern-Quantum Physics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.1
**Soluzione:** Soluzioni (PDF)
