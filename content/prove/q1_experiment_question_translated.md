---
title: IPhO 2011 sperimentale
tipo: prova
tags:
  - kg/prova
---
<div class="atom-reader" data-prova="q1_experiment_question_translated"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="IPhO 2011 sperimentale — Problema 1" data-tags="kg/prova,nazione/italia,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/multi,topic/circuits,topic/electrostatics,topic/oscillations-e-waves,object/capacitor,object/battery,object/switch"></span>

<div class="qlang-switch" data-default="en"></div>



**Una "Scatola Nera" Elettrica: come usare la capacità elettrica per misurare lunghezze.**

Per un condensatore di capacità $C$ che fa parte di un oscillatore smorzato la cui frequenza di oscillazione è $f$, la relazione tra $f$ e $C$ è:

$$f^2 = \frac{k}{C + C_0}$$

dove $k$ è una costante e $C_0$ è la capacità propria del circuito. La frequenza $f$ può essere misurata usando un frequenzimetro digitale.

La "scatola nera" elettrica che ti è stata fornita per questo esperimento è un condensatore con armature piane e parallele. Ciascuna armatura ha la forma di un "pettine" costituito da un certo numero di denti tutti della stessa forma geometrica. Il valore di $C$ può essere variato spostando orizzontalmente l'armatura superiore rispetto a quella inferiore. Tra le due armature c'è un foglio di materiale dielettrico.

**Materiale:** Un oscillatore smorzato nella scatola con a lato un interruttore, un multimetro digitale per misurare la frequenza dell'oscillatore, un insieme di condensatori di capacità nota, una "scatola nera" elettrica e una batteria.

**Avvertenza:** controlla la tensione della batteria e chiedi di sostituirla se il voltaggio è minore di 9 V. Non dimenticarti di accendere l'interruttore.

---

Il setup sperimentale è mostrato nelle figure seguenti (Figura 1: schema del circuito; Figura 2: condensatori disponibili; Figura 3: multimetro digitale per la misura della frequenza).

**Tabella 1 — Valori nominali della capacità**

| Codice | Valore della capacità (pF) |
|--------|---------------------------|
| 33J    | 33                        |
| 68     | 68                        |
| 82J    | 82                        |
| 151    | 150                       |

---

### Parte 1 — Calibrazione [3.0 punti]

Misura $f^2$ usando le capacità $C$ ottenibili dai condensatori forniti. Traccia un grafico appropriato per trovare i valori di $k$ e $C_0$. L'analisi degli errori non è richiesta.

---

### Parte 2 — Determinazione della forma geometrica di un condensatore a piatti piani e paralleli [6.0 punti]

Considera le seguenti tre possibili forme geometriche dei denti delle armature (Profilo I, Profilo II e Profilo III):

- **Profilo I:** i denti hanno sezione rettangolare; l'area sovrapposta $A(x)$ varia linearmente con lo spostamento $x$, quindi $C \propto x$.
- **Profilo II:** i denti hanno forma triangolare; l'area sovrapposta $A(x)$ varia quadraticamente con $x$, quindi $C \propto x^2$.
- **Profilo III:** i denti hanno profilo a gradini; l'area sovrapposta $A(x)$ è costante a tratti.

In ciascun caso l'armatura superiore trasla orizzontalmente rispetto a quella inferiore (verso destra e sinistra).

Per ciascun profilo, traccia il grafico che ti aspetti per $f$ in funzione della posizione $x$ dell'armatura superiore: i grafici vanno tracciati qualitativamente, ma riportando le indicazioni sull'asse delle posizioni. Successivamente, prendi le misure della frequenza $f$ in funzione delle posizioni $x$ dell'armatura superiore. Riporta i dati in un grafico e, in base a questo, deduci il profilo del condensatore e le sue dimensioni caratteristiche (cioè i valori di larghezza $b$ e altezza $w$ dei denti).

La distanza $d$ tra l'armatura superiore e quella inferiore è $d = 0{,}20\ \text{mm}$. Il foglio dielettrico tra le armature ha una costante dielettrica relativa $\varepsilon_r = 2{,}0$. La costante dielettrica del vuoto è $\varepsilon_0 = 8{,}85 \times 10^{-12}\ \text{F/m}$. L'analisi degli errori non è richiesta.

> La capacità di un condensatore a piatti piani e paralleli con area sovrapposta $A$, distanza tra le armature $d$ e dielettrico di costante relativa $\varepsilon_r$ è:
> $$C = \varepsilon_r \varepsilon_0 \frac{A}{d}$$

---

### Parte 3 — Risoluzione del calibro digitale [1.0 punto]

Quando si varia la posizione relativa delle armature, la capacità $C$ cambia; quindi questo apparato può essere usato come calibro digitale per misurare lunghezze. Se il condensatore in questo esperimento viene usato come calibro digitale, stimare la sua risoluzione in base ai dati sperimentali ricavati nella Parte 2: ovvero stimare la più piccola distanza $\Delta x$ che può essere misurata quando il valore della frequenza è all'incirca $f \approx 100\ \text{kHz}$. Una stima dell'errore nella risposta finale non è richiesta.

<!--fig:start-->
**p.2** — Apparato scatola nera con armature
![[_attachments/Q1_Experiment_Question_translated/Q1_Experiment_Question_translated_p2_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.2** — Condensatori di prova
![[_attachments/Q1_Experiment_Question_translated/Q1_Experiment_Question_translated_p2_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.3** — Multimetro digitale per misura frequenze
![[_attachments/Q1_Experiment_Question_translated/Q1_Experiment_Question_translated_p3_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.4** — Profilo I geometria armature
![[_attachments/Q1_Experiment_Question_translated/Q1_Experiment_Question_translated_p4_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.4** — Profilo II geometria armature
![[_attachments/Q1_Experiment_Question_translated/Q1_Experiment_Question_translated_p4_f5.png]]
<!--fig:end-->

<!--fig:start-->
**p.5** — Profilo III geometria armature
![[_attachments/Q1_Experiment_Question_translated/Q1_Experiment_Question_translated_p5_f6.png]]
<!--fig:end-->

**Topic:** [[Circuits]], [[Electrostatics]], [[Oscillations & Waves]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Physical Modeling (metodo)|Physical Modeling]], [[Curve Fitting (metodo)|Curve Fitting]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Objects:** [[Capacitor (object)|Capacitor]], [[Battery (object)|Battery]], [[Switch (object)|Switch]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1WSufRT04y3ZSZ3yogd33MNfzivFhWhUw/view)


<div class="qlang-split" data-lang="it"></div>

**Una "Scatola Nera" Elettrica: come usare la capacità elettrica per misurare lunghezze.**

Per un condensatore di capacità $C$ che fa parte di un oscillatore di oscillazione la cui frequenza di oscillazione è $f$, il rapporto tra $f$ e $C$ è:

$$f^2 = \frac{k}{C + C_0}$$

dove $k$ è una costante e $C_0$ è la capacità propria del circuito. La frequenza $f$ può essere misurata utilizzando un frequenzimetro digitale.

La "scatola nera" elettrica che è stata fornita per questo esperimento è un condensatore con armatura piana e parallela. La struttura ha la forma di una "petina" costituita da un certo numero di denti tutti della stessa forma geometrica. Il valore di $C$ può variare spostando orizzontalmente l'armatura superiore rispetto a quella inferiore. La dovuta armatura è un foglio di materiale elettrico.

**Materiale:** Un oscillatore smorzato nella scatola con a lato un interruttore, un multimetro digitale per misurare la frequenza dell'oscillatore, un insieme di condensatori di capacità nota, una "scatola nera" elettrica e una batteria.

**Avvertenza:** controlla la tensione della batteria e chiedi di sostituirla se il voltaggio è minore di 9 V. Non dimentichiamo di accendere l'interruttore.

---

L'impostazione sperimentale è mostrata nelle figure seguenti (Figura 1: schema del circuito; Figura 2: condensatori disponibili; Figura 3: multimetro digitale per la misura della frequenza).

**Tabella 1  Valori nominali della capacità**

♬ Codice ♬ Valore della capacità ♬
|--------|---------------------------|
| 33J    | 33                        |
| 68     | 68                        |
| 82J    | 82                        |
| 151    | 150                       |

---

### Parte 1  Calibrazione [3.0 punti]

Misura $f^2$ usando la capacità $C$ ottenibili dai condensatori forniti. Traccia un grafico appropriato per trovare i valori di $k$ e $C_0$. L'analisi degli errori non è richiesta.

---

### Parte 2  Determinazione della forma geometrica di un condensatore a piatti piani e paralleli [6.0 punti]

Considerare le seguenti tre forme geometriche possibili dei denti delle armature (profile I, II e III):

- ** Profile I: ** i denti hanno sezione rettangolare; l'area sovrapposta $A(x)$ varia linearmente con il spostamento $x$, quindi $C \propto x$.
- ** Profile II: ** i denti hanno forma triangolare; l'area sovrapposta $A(x)$ varia quadraticamente con $x$, quindi $C \propto x^2$.
- **Profilo III:** i denti hanno profilo a gradini; l'area sovrapposta $A(x)$ è costante a tratti.

In ogni caso l'armatura superiore trasla orizzontalmente rispetto a quella inferiore (verso destra e sinistra).

Per ciascun profilo, traccia il grafico che indica gli aspetti per $f$ in funzione della posizione $x$ dell'armatura superiore: i grafici vanno tracciati qualitativamente, riportando le indicazioni sull'asse delle posizioni. Successivamente, prendiamo le misure della frequenza $f$ in funzione delle posizioni $x$ dell'armatura superiore. Riporta i dati in un grafico e, in base a questo, deduce il profilo del condensatore e le sue caratteristiche dimensionali (cioè i valori di larghezza $b$ e altezza $w$ dei denti).

La distanza $d$ tra l'armatura superiore e quella inferiore è $d = 0{,}20\ \text{mm}$. Il foglio dilettrico della armatura ha una costante dilettrica relativa $\varepsilon_r = 2{,}0$. La costante dielettrica del vuoto è $\varepsilon_0 = 8{,}85 \times 10^{-12}\ \text{F/m}$. L'analisi degli errori non è richiesta.

> La capacità di un condensatore a piatti piani e parallele con la superficie sovrapposta $A$, distanza tra l'armatura $d$ e dielettrico di costante relativa $\varepsilon_r$ è:
> $$C = \varepsilon_r \varepsilon_0 \frac{A}{d}$$

---

### Parte 3  Risoluzione del calibro digitale [1.0 punto]

Quando si varia la posizione relativa delle armature, la capacità $C$ cambia; quindi questo apparecchio può essere utilizzato come calibro digitale per misura lunghezza. Se il condensatore in questo esperimento viene utilizzato come calibro digitale, stimare la sua risoluzione in base ai dati sperimentali ricavati nella Parte 2: ovvero stimare la più piccola distanza $\Delta x$ che può essere misurata quando il valore della frequenza è tutto circa $f \approx 100\ \text{kHz}$. Una stima dell'errore nella risposta finale non è richiesta.

<!--fig:start-->
** p.2 **  Apparatato scatola nera con armatura
![[_attachments/Q1_Experiment_Question_translated/Q1_Experiment_Question_translated_p2_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.2 **  Condensatori di prova
![[_attachments/Q1_Experiment_Question_translated/Q1_Experiment_Question_translated_p2_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.3 **  Multimetro digitale per misura frequenza
![[_attachments/Q1_Experiment_Question_translated/Q1_Experiment_Question_translated_p3_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.4 **  Armatura per geometria del profilo I
![[_attachments/Q1_Experiment_Question_translated/Q1_Experiment_Question_translated_p4_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.4 **  Armatura per geometria del profilo II
![[_attachments/Q1_Experiment_Question_translated/Q1_Experiment_Question_translated_p4_f5.png]]
<!--fig:end-->

<!--fig:start-->
**p.5 **  Armatura per geometria del profilo III
![[_attachments/Q1_Experiment_Question_translated/Q1_Experiment_Question_translated_p5_f6.png]]
<!--fig:end-->

**Topic:** [[Circuits]], [[Electrostatics]], [[Oscillations & Waves]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Physical Modeling (metodo)|Physical Modeling]], [[Curve Fitting (metodo)|Curve Fitting]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Objects:** [[Capacitor (object)|Capacitor]], [[Battery (object)|Battery]], [[Switch (object)|Switch]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1WSufRT04y3ZSZ3yogd33MNfzivFhWhUw/view)
