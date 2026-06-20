---
tipo: quesito
quesito_id: quesito_exam-experiment-G1-italiano__Q10
parent: prova_exam-experiment-G1-italiano
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/sperimentale/int21sit/exam-experiment-G1-italiano.pdf
cluster: Elettromagnetismo
quesito: '10'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/circuits
  - topic/electrostatics
  - topic/thermodynamics
  - argomento/elettromagnetismo
---

# OII na Sperimentale — Problema 10

3. confermare l’accesso USB e premere sul tasto reset della scheda entro 10 secondi da quando l’app
ti chiede di farlo.
Attenzione: se ad un certo momento
•
– la scheda smette di rispondere e non restituisce alcuna misurazione (né nello ’Check
state’ né in Measurement mode),
•
– il riscaldamento / la corrente del LED non cambia (la tensione del termistore non
cambia e il LED non si accende anche alla massima corrente del LED),
premere il pulsante RESET sulla scheda ed eseguire il passaggio 3 ”conferma l’accesso USB...”
Se non è sufficiente:
• uscire dall’app toccando due volte il pulsante Indietro,
• scollegare la scheda,
• aprire di nuovo l’app,
• ricollegare la scheda ed eseguire il passaggio 3 sopra descritto.
Experiment
G1-5
Italiano (Italy)
I controlli e i campi sono (i numeri verranno utilizzati come riferimenti in seguito):
La finestra principale dell’app.
• 1 - Toccando questo interruttore si avvia una sessione di misurazione. Toccandolo di nuovo si ferma.
• 2 - Quando questo interruttore è selezionato, lo schermo mostra i valori in tempo reale delle misurazioni.
• 3 - Apre le impostazioni
• 4 - Visualizza un breve riepilogo delle impostazioni.
• 5 - Titolo della misura da salvare o cancellare.
• 6 - Salva con un nuovo nome una misurazione appena misurata o selezionata.
• 7 - Elimina la misura selezionata.
• 8 - Seleziona una misurazione precedentemente salvata.
• 9, 10, 11 - Campi di testo per inserire manualmente i valori di corrente di riscaldamento (9), corrente
LED (10), durata impulso corrente LED (11). I valori vuoti significano 0. tL (durata impulso corrente
LED) = 0 significa corrente continua costante.
• 12, 13, 14 - Cursori per modificare i valori corrispondenti (la corrente del LED cambia in modo esponenziale!).
• 15 - Apre l’editor delle funzioni.
• 16, 17, 18 - Seleziona variabili o funzioni per le colonne della tabella di misurazione.
Experiment
G1-6
Italiano (Italy)
• 19 - Zona della tabella delle misure.
• 20 - Ricalcola manualmente le misurazioni in un grafico.
• 21, 22 - Limiti minimo e massimo dell’asse X (possono essere inseriti manualmente premendo poi
il pulsante di ricalcolo).
• 23, 24 - Limiti minimo e massimo dell’asse Y.
• 25, 27 - Seleziona gli assi Y e X del grafico.
• 26 - Seleziona le misure da tracciare sul grafico.
• 28 - Zona del grafico.
• BB - Il pulsante Indietro del sistema operativo Android (tocca due volte per chiudere l’app).
Impostazione di una misurazione della curva I-V di scansione
Ulteriori controlli LED sono disponibili per LAB 2 toccando il pulsante delle impostazioni (3) della finestra
principale. Nella finestra che si apre seleziona:
• ”LAB 2” o ”ANY LAB” nella sezione ”Mostra controlli per”.
• attivare l’opzione ”Misura sweep”.
Altre impostazioni sono:
• ”Minimo...” e ”Massima corrente di misurazione della scansione” impostano rispettivamente il
valore iniziale e l’ultimo valore della corrente del LED durante la misurazione della scansione.
• ”Numero di passaggi della misurazione dello sweep” indica quanti passaggi di misurazione verranno effettuati.
• scegli ”Aumenta la corrente secondo la progressione geometrica” se vuoi che la corrente aumenti in modo esponenziale.
• scegliere ”Imposta corrente pulsata” e impostare ”Larghezza impulso corrente” se si desidera
che ogni valore venga misurato utilizzando un impulso di tempo limitato della corrente del LED.
Ad esempio, se il numero di passi è 51, ’Aumenta corrente secondo progressione geometrica’ è spento, la
corrente del LED cambia rispettivamente da 0 mA a 50 mA, la corrente del LED durante la misurazione sarà 0
mA, 1 mA, .. 49 mA e 50 mA.
Ora puoi iniziare a misurare la curva I-V dopo essere tornato alla finestra principale premendo il pulsante
Indietro.
Experiment
G1-7
Italiano (Italy)
Funzioni di modifica
Toccando il pulsante (15) della finestra principale si apre la finestra di modifica delle funzioni.
Le funzioni create possono accettare alcune delle variabili (e loro derivate) misurate direttamente sulla
scheda.
Sono:
• differenze di potenziale (in V):
– uC - al condensatore selezionato (C1 o C2);
– uT - al termistore;
– uL - al LED;
• loro derivate rispetto al tempo (dy/dt) (in V/s):
– duC
– duT
– duL
• le correnti (in mA):
– iL - al LED (in mA);
– iH - corrente di riscaldamento (in mA);
• tempo t (in s).
Experiment
G1-8
Italiano (Italy)
E’ possibile inserire una funzione personalizzata utilizzando queste variabili e funzioni matematiche (utilizzando pulsanti di supporto o una tastiera Android standard) di tua scelta e salvarla premendo successivamente il pulsante verde +. Le funzioni salvate possono essere utilizzate come assi del grafico o come
colonne della tabella di misura. Il pulsante matita seleziona le funzioni esistenti. Le funzioni selezionate
possono essere eliminate premendo il pulsante rosso x.
Per i numeri sono accettabili sia il formato decimale usuale (e.g. 25.02) che il formato scientifico (e.g.
2.502e+1).
• * è operatore di moltiplicazione,
• / è l’operatore di divisione,
• ̂ è l’operatore di elevamento a potenza.
Experiment
G1-9
Italiano (Italy)
Visualizzazione delle misurazioni
La misura finita può essere salvata inserendo il suo nome nel campo (5) della finestra principale e premendo il pulsante verde + (6) vicino. I dati di misura grezzi vengono salvati, e possono essere in seguito
visualizzati su qualsiasi altro asse. Le misurazioni salvate possono essere visualizzate sul grafico toccando
l’area vicino all’angolo del grafico (26).
E’ possibile eseguire una panoramica/ingrandire il grafico e, se lo si tocca nel punto esatto, verrà contrassegnato il punto più vicino della misurazione (se non esistono punti di misurazione vicini a quello toccato) o il
punto stesso e le sue coordinate visualizzate.
L’asse può essere scelto toccando le etichette degli assi esistenti (aree del grafico 25 e 27).

**Topic:** [[Circuits]], [[Electrostatics]], [[Thermodynamics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.4
**Soluzione:** Soluzioni (PDF)
