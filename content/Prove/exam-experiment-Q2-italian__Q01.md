---
tipo: quesito
quesito_id: quesito_exam-experiment-Q2-italian__Q01
parent: prova_exam-experiment-Q2-italian
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/sperimentale/int18sit/exam-experiment-Q2-italian.pdf
cluster: Meccanica
quesito: '1'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/elasticity-e-materials
  - topic/fluid-mechanics
  - topic/thermodynamics
  - argomento/meccanica
---

# OII na Sperimentale — Problema 1

Experiment
Q2-1
Italian (Italy)
Viscoleasticità di un filo di polimero (10 punti)
Attenzione: Il filo non deve essere stirato prima dell’inizio dell’esperimento!
Accendi subito la bilancia (il tempo di riscaldamento è circa 10 minuti). Non cambiare il
settaggio della bilancia.
Introduzione
Quando un materiale solido è sottoposto a una forza esterna si deforma. Per forze di piccola intensità
la deformazione è proporzionale alla forza (legge di Hooke) ed è reversibile, dunque il materiale ritorna
alla sua forma originaria se si rimuove la forza.
Per un solido, conviene descrivere il fenomeno usando i concetti di sforzo e deformazione. Lo sforzo σ
è definito come il rapporto tra la forza Fe la superficie S su cui agisce, mentre la deformazione εè la
variazione relativa di lunghezza:
σ= F
S
e
ε= $l-l0$
l0
,
(1)
dove le l0 sono rispettivamente la lunghezza finale e iniziale. Nel range di elasticità, lo sforzo è semplicemente proporzionale alla deformazione: σ= Eε(legge di Hooke) e il fattore di proporzionalità, E,
prende il nome di modulo di Young.
Il comportamento elastico descritto dalla legge di Hooke è un’approssimazione valida solo per deformazioni sufficientemente piccole. Per deformazioni più grandi le variazioni diventano gradualmente irreversibili e si entra nella zona di plasticità, nella quale i movimenti molecolari cominciano a non essere più
vincolati, in maniera simile a quanto accade in un fluido viscoso. In altre parole, sia nel caso di stiramento
sia in quello di compressione, oltre il limite di elasticità il materiale diventa asintoticamente fluido.
Materiali viscoelastici
Alcuni materiali combinano aspetti di un solido elastico e caratteristiche simili a quelle dei fluidi viscosi,
e sono perciò chiamati viscoelastici.
Nei materiali viscoelastici è dunque ragionevole considerare separatamente il comportamento puramente elastico e il comportamento aggiuntivo viscoso; questo implica che lo sforzo totale σnecessario per
produrre una data deformazione εè la somma di un termine puramente elastico σ0 = E0 ε0 e di un
termine viscoelastico σ1:
σ= σ0 + σ1
(2)
Entrambi i termini dello sforzo corrispondono alla stessa deformazione (ε= ε0 = ε1). Però la deformazione ε1 corrispondente al termine viscoelastico viene di solito modellizzata come la somma di una
deformazione puramente elastica, εe
1 = σ1/E1, e di una puramente viscosa, εv
1 (entrambe soggette allo
stesso sforzo σ1 = σe
1 = σv
1):
ε1 = εe
1 + εv
1
(3)

Experiment
Q2-2
Italian (Italy)
Nel processo puramente viscoso, si assume una relazione lineare tra lo sforzo e la derivata della deformazione rispetto al tempo (analogamente a quanto vale nei fluidi viscosi):
σ1 = η1
dεv
1
dt,
dove η1 è il coefficiente di viscosità.
Questo modello fenomenologico è il cosiddetto modello lineare standard per i solidi, ed è illustrato nella
Figura 1: le molle rappresentano i componenti puramente elastici e la tazza il componente puramente
viscoso.
Figura 1. Modello lineare standard per la viscoelasticità lineare dei solidi.
Dalle equazioni precedenti si ottiene la relazione seguente:
dε1
dt= 1
E1
dσ1
dt+ σ1
η1
(4)
Pertanto, nel modello lineare standard per la viscoelasticità dei solidi, è possibile dimostrare che
σ= E0 ε+ τ1(E0 + E1)dε
$dt-τ1$
dσ
dt
(5)
dove τ1 = η1/E1. Questa equazione differenziale mostra che la relazione tra sforzo e deformazione non
è lineare, e che la deformazione e lo sforzo sono entrambi, in generale, funzioni del tempo. Per ottenere
ε(t) è necessario specificare la funzione σ(t) e viceversa.
Ci sono due casi speciali di interesse pratico, in cui o dε/dt= 0 o dσ/dt= 0, comunemente noti rispettivamente come condizione di rilassamento dello sforzo e condizione di allungamento lento. Nella condizione
di rilassamento dello sforzo si applica al materiale una deformazione improvvisa εche viene mantenuta

Experiment
Q2-3
Italian (Italy)
costante nel tempo, cosicché dε/dt= 0. In questo caso, la funzione σ(t) dipende quindi solamente dai
parametri viscoelastici del materiale e la soluzione dell’equazione (5) è:
σ(t) = ε(E0 + $E1e-t/τ1$)
(6)
dove si assume che per t= 0 solo i componenti elastici contribuiscano allo sforzo e quindi σ(t= 0) =
ε(E0+E1). Questa soluzione mostra che lo sforzo viscoelastico decade esponenzialmente nel tempo, con
una costante di tempo τ1.
Processi multiviscoelastici
Il modello lineare standard può essere facilmente esteso al caso di molti processi viscoelastici, come
suggerisce la Figura 2
Figura 2. Modello generalizzato per processi multiviscoelastici.
Dunque, considerando Ncomponenti viscoelastici diversi,
σ= σ0 + $\sum$
k
σk,
k= 1, 2, ⋯, N
(7)
dove dεk
dt=
1
Ek
dσk
dt+ σk
ηke, come sopra, dε0
dt= dεk
dt= dε
dt.
L’equazione (5) si può dunque generalizzare in questo modo:
σ= E0ε+ ηt
dε
$dt-\sum$
k
τk
dσk
dt,
k= 1, 2, ⋯, N
(8)
dove ηt= $\sumkηk$, e τk= ηk/Ek.

Experiment
Q2-4
Italian (Italy)
In condizioni di deformazione costante, ciascuno sforzo viscoelastico dovrebbe ancora decadere esponenzialmente nel tempo, σk= $Ake-t/τke$ si avrebbe quindi la soluzione:
σ(t) = ε(E0 + $\sum$
k
$Eke-t/τk$) ,
k= 1, 2, ⋯, N
(9)
dove si è assunto che per t= 0 solo i componenti elastici contribuiscano allo sforzo totale e dunque
σ0 = ε(E0 + $\sumkEk$). La risposta viscoelastica che ne risulta è evidentemente non lineare.

Experiment
Q2-5
Italian (Italy)

Attrezzatura
Per l’esperimento viene fornita la seguente attrezzatura (Figura 3):
1. 1 piedistallo, con un sistema di sostegno per posizionare un puntatore laser e un altro supporto
superiore per tenere verticalmente il filo stirato con una deformazione costante sopra la bilancia;
2. 1 massetta, consistente in un cilindro cavo e una vite per fissare il filo;
3. 1 filo lungo di poliuretano termoplastico (TPU) attaccato alla massetta e a un’altra vite usata per
appendere il filo al supporto superiore;
4. 1 filo TPU corto fissato a una vite singola;
5. 1 puntatore laser col relativo supporto;
6. 1 bilancia digitale;
7. 2 specchi piani;
8. 1 cronometro;
9. 1 righello;
10. 1 metro a nastro metallico;
11. 1 foglio di carta A4 da usare come schermo;
12. 1 fermaglio a molla per tenere il laser in posizione e per accenderlo;

Experiment
Q2-6
Italian (Italy)

Figura 3. Attrezzatura per il problema sperimentale.

Experiment
Q2-7
Italian (Italy)
Parte A: Misure di rilassamento dello sforzo (1.9 punti)
Attenzione: il filo non deve essere stirato prima dell’inizio dell’esperimento! Se per caso il filo
viene inavvertitamente stirato, chiedine un altro, ma tieni presente che questo richiederà un
po’ di tempo, e di conseguenza avrai meno tempo per il tuo esperimento.
Leggi attentamente le indicazioni date nella ”Parte D: Analisi dei dati” prima di iniziare le
misure, allo scopo di pianificare il modo in cui condurrai l’esperimento.
A.1
Misura la lunghezza del filo tra le teste delle viti quando esso non è teso. Per ottenere la lunghezza totale del filo l0, compresa la lunghezza tra le viti, aggiungi
5 mm per ciascuna vite. Scrivi nel foglio risposte il valore che hai misurato per
l0 e la sua incertezza.
0.3pt
A.2
Misura il peso totale della massetta, P0, in unità grammi-forza (gf). Ricorda che
1 grammo-forza è la forza corrispondente al peso di una massa di 1 grammo
(1 gf = 9.80 $\times 10-3$ N). Scrivi nel foglio risposte il valore misurato, e una stima
della sua incertezza.
0.3pt
Per osservare sperimentalmente le varie componenti del rilassamento è necessario misurare lo sforzo
per un tempo sufficientemente lungo. In questo caso, è sufficiente campionare l’evoluzione dello sforzo
per circa 45 minuti.
Ora devi effettuare due azioni simultanee: 1 e 2. Leggi attentamente le istruzioni prima di
iniziare.
Importante: se per qualunque motivo l’esperimento viene interrotto non può essere ripreso.
Bisogna ripartire con un altro filo. In questo caso, chiedine uno.
Effettua simultaneamente queste due azioni:
1. Tenendo la massettina sul piatto della bilancia, tendi il filo sistemando la vite fissata all’estremità
sul supporto superiore situato nel piedistallo (Figura 4).
2. Contemporaneamente fai partire i

<!--fig:start-->
**p.2** — Modello lineare standard del solido
![[_attachments/exam-experiment-Q2-italian/exam-experiment-Q2-italian_p2_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.3** — Modello generalizzato processi multiviscoelastici
![[_attachments/exam-experiment-Q2-italian/exam-experiment-Q2-italian_p3_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.6** — Attrezzatura per il problema sperimentale
![[_attachments/exam-experiment-Q2-italian/exam-experiment-Q2-italian_p6_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.8** — Appendi il filo al supporto e inizia misure
![[_attachments/exam-experiment-Q2-italian/exam-experiment-Q2-italian_p8_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.9** — Accendi il laser usando il fermaglio a molla
![[_attachments/exam-experiment-Q2-italian/exam-experiment-Q2-italian_p9_f5.png]]
<!--fig:end-->

<!--fig:start-->
**p.10** — Montaggio del filo TPU sulla vite di fissaggio
![[_attachments/exam-experiment-Q2-italian/exam-experiment-Q2-italian_p10_f6.png]]
<!--fig:end-->

**Topic:** [[Elasticity & Materials]], [[Fluid Mechanics]], [[Thermodynamics]]
**Metodi:** [[Hooke's Law (metodo)|Hooke's Law]], [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.1
