---
tipo: quesito
quesito_id: quesito_EuPhO20_experiment_ITA__Q02
parent: prova_EuPhO20_experiment_ITA
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/eupho/sperimentale/euphospe20/EuPhO20_experiment_ITA.pdf
cluster: Meccanica
quesito: '2'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/bi
  - topic/oscillations-e-waves
  - topic/newtonian-mechanics
  - argomento/meccanica
---

# OII na Sperimentale — Problema 2

## Problema 2 — Una scatola nera

### 2.1 Introduzione

Hai una scatola nera meccanica rigida composta da un recipiente di massa $m_1$. All'interno del recipiente c'è un oggetto di massa $m_2$ appeso a una molla di massa trascurabile e di costante elastica $k_1$ che è fissata al soffitto della scatola. Un'altra massa $m_3$ è appesa alla massa $m_2$ tramite un'altra molla senza massa e di costante elastica $k_2$. È presente una piccola resistenza viscosa che dipende dalla velocità degli oggetti. L'accelerazione di gravità della Terra è $g = 9.81\,\text{m/s}^2$ ed è parallela ai lati della scatola.

La scatola può essere spostata verso l'alto o verso il basso con un'accelerazione costante a tratti. L'andamento dell'accelerazione può essere programmato tramite input fornendo la durata (in secondi) e l'accelerazione (in $\text{m/s}^2$) di ogni step. La simulazione mostra in "tempo reale" la forza $F$ esercitata sulla scatola necessaria per mantenere l'accelerazione data in quell'istante, insieme alla lettura del tempo. La simulazione registrerà anche le letture in un file di testo nella stessa cartella del programma. Tutte le simulazioni inizieranno sempre con la stessa configurazione iniziale per le masse.

**Nota:** Ogni misurazione della forza $F$ ha un piccolo errore casuale. Le molle sono lineari per deformazioni ragionevolmente piccole, ma non lineari per deformazioni maggiori. I valori $k_1$ e $k_2$ sono definiti come la costante elastica di ogni molla per piccole deformazioni vicine all'equilibrio quando la scatola è a riposo. La forza $F$ e l'accelerazione sono considerati positivi se diretti verso l'alto. La lunghezza del lato della scatola è $0.6\,\text{m}$ e la scatola inizialmente si trova al centro di una stanza di altezza $3\,\text{m}$. Una simulazione termina automaticamente se la scatola colpisce il soffitto o il pavimento o se una delle masse si scontra con la scatola o con l'altra massa.

La figura non è disegnata in scala.

### 2.2 Scopo

Lo scopo è determinare tutti i parametri: $m_1$, $m_2$, $m_3$, $k_1$, $k_2$. Non è necessario fornire un'analisi degli errori per questi risultati.

Come per tutti gli esperimenti, devi fornire tabelle di dati chiaramente etichettate, grafici chiaramente etichettati e derivazioni di formule sufficienti per chiarire cosa hai misurato e come stai ottenendo i risultati.

### 2.3 Interfaccia del programma

Inizialmente, il programma richiede una sequenza di input da tastiera. Hai le seguenti possibilità.

- Inserire due numeri e premere return per aggiungere uno step all'andamento dell'accelerazione, per esempio: `1.5 -0.4`. Il primo numero rappresenta la durata dello step in secondi (deve essere un multiplo di $0.01\,\text{s}$) e il secondo numero rappresenta l'accelerazione in $\text{m/s}^2$ (deve essere compreso tra $-30$ e $30$).
- Inserire `repeat` e un numero intero e premere return per ripetere le azioni, per esempio: `repeat 10`. Il numero intero rappresenta il numero di volte che si vuole ripetere le azioni. Ogni azione ripetuta finisce con `endrepeat`.
- Inserire `endrepeat` per terminare la ripetizione delle azioni.
- Inserire `sample` e un numero e premere return per cambiare il tempo di campionamento, per esempio: `sample 0.4`. Il numero rappresenta il nuovo tempo di campionamento che è il tempo dopo il quale ogni nuova lettura è registrata in un file testo. Il tempo di campionamento deve essere un multiplo di $0.01\,\text{s}$, che è anche il tempo di campionamento di default.
- Inserire `begin` per terminare la sequenza e iniziare la simulazione.

È anche possibile scrivere azioni multiple sulla stessa linea e quindi premere return. Per esempio, è possibile inserire:

```
sample 0.4 repeat 10 1.5 0.4 1.5 -0.4 endrepeat begin
```

per iniziare una simulazione dove si è cambiato il tempo di campionamento al valore $0.4\,\text{s}$ e accelerare la scatola rispettivamente con $a = 0.4\,\text{m/s}^2$ e $a = -0.4\,\text{m/s}^2$ 10 volte.

Se si inserisce un input non valido, si otterrà uno dei seguenti messaggi di errore:

- Se l'accelerazione è fuori dall'intervallo permesso: `Acceleration is out of range.`
- Se la durata dell'accelerazione è fuori dall'intervallo permesso: `Duration is out of range.`
- Se il tempo di campionamento è fuori dall'intervallo permesso: `Sampling time is out of range.`
- Se il numero di ripetizioni è fuori dall'intervallo permesso: `Number of repeat times is out of range.`
- Se si prova a ripetere azioni all'interno di un'altra azione ripetuta: `Cannot repeat actions inside another repeat.`
- Se si prova a terminare la ripetizione senza un'azione di fine ripetizione: `Cannot end repeat outside repeat.`
- In tutti gli altri casi: `Invalid entry.`

Dopo aver inserito `begin`, il programma chiederà di inserire da tastiera un nome per il file di restituzione dei dati:

```
Enter name for output file (e.g. "results"). You should use Latin letters and numbers because some special characters are not allowed.
```

Inserire un nome e premere return. Le letture verranno salvate in un file `.txt` con il nome indicato nella stessa cartella del programma.

Successivamente, il programma visualizzerà `Begin experiment.` e inizia l'esperimento. Il programma visualizzerà quindi il tempo attuale dall'inizio dell'esperimento (`Time (s)`), il valore misurato della forza $F$ (`Force (N)`) e l'accelerazione della scatola (`Accel (m/s^2)`).

Il programma visualizzerà quindi uno dei seguenti messaggi:

- Se la simulazione si è conclusa con successo: `Experiment ended successfully.`
- Se la scatola tocca il soffitto: `The box hit the ceiling. Experiment ended.`
- Se la scatola tocca il pavimento: `The box hit the floor. Experiment ended.`
- Se le masse all'interno della scatola urtano tra loro o colpiscono le pareti della scatola: `Masses and/or the box collided. Experiment ended.`

Dopo la conclusione della simulazione è possibile iniziarne un'altra.

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Physical Modeling (metodo)|Physical Modeling]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Hooke's Law (metodo)|Hooke's Law]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1
**Soluzione:** Soluzioni (PDF)
