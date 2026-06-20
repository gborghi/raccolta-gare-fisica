---
tipo: quesito
quesito_id: quesito_exam-theory-Q1-italian__Q01
parent: prova_exam-theory-Q1-italian
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/teorica/int18tit/exam-theory-Q1-italian.pdf
cluster: Meccanica
quesito: '1'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/gravitation
  - topic/astrophysics
  - topic/special-relativity
  - argomento/meccanica
---

# OII na Teorica — Problema 1

**LIGO-GW150914 (10 punti)**

Nel 2015 l'osservatorio di onde gravitazionali LIGO rivelò, per la prima volta, il passaggio di onde gravitazionali (GW, Gravitational Waves) attraverso la Terra. Questo evento, denominato GW150914, è stato innescato dalle onde prodotte da due buchi neri in moto su orbite quasi circolari. In questo problema dovrai stimare alcuni parametri fisici del sistema, basandoti sulle proprietà del segnale registrato.

Parte A: Orbite (stazionarie) newtoniane (3.0 punti)

A.1 Considera un sistema di due stelle di massa rispettivamente $M_1$, $M_2$, nelle posizioni $\vec{r}_1$, $\vec{r}_2$, rispetto al centro di massa del sistema, cioè:
$$M_1\vec{r}_1 + M_2\vec{r}_2 = 0 . \tag{1}$$
Le stelle sono isolate dal resto dell'universo e si muovono a basse velocità (cosicché è applicabile, in prima approssimazione, la meccanica newtoniana). Usando le leggi di Newton, l'accelerazione della massa $M_1$ è
$$\frac{d^2\vec{r}_1}{dt^2} = -\alpha\frac{\vec{r}_1}{r_1^n} , \tag{2}$$
dove $r_1 = |\vec{r}_1|$, $r_2 = |\vec{r}_2|$. Trova $n\in\mathbb{N}$ e $\alpha = \alpha(G, M_1, M_2)$, dove $G$ è la costante di gravitazione [$G\simeq6.67 \times 10^{-11}$, in unità SI].

1.0pt

A.2 L'energia totale del sistema delle due masse in orbita circolare può essere espressa come:
$$E = A(\mu, \Omega, L) - G\frac{M\mu}{L} , \tag{3}$$
dove
$$\mu \equiv \frac{M_1M_2}{M_1 + M_2} , \qquad M \equiv M_1 + M_2 , \tag{4}$$
sono la massa ridotta e la massa totale del sistema, $\Omega$ è la velocità angolare e $L$ è la distanza tra le due stelle $L = r_1 + r_2$. Ricava la forma esplicita del termine $A(\mu, \Omega, L)$.

1.0pt

A.3 L'equazione 3 può essere scritta nella forma $E = \beta G\frac{M\mu}{L}$. Ricava il numero $\beta$.

1.0pt

Parte B. Introduzione della dissipazione relativistica (7.0 punti)

La corretta teoria della gravità, la Relatività Generale, fu formulata da Einstein nel 1915 e prevede che la gravità viaggi alla velocità della luce. I messaggeri che portano l'informazione sull'interazione vengono chiamati onde gravitazionali (GW). Le GW vengono emesse ogniqualvolta le masse vengono accelerate, cosicché il sistema di masse perde energia.

Considera un sistema di due particelle puntiformi, isolate dal resto dell'Universo. Einstein ha dimostrato che per velocità sufficientemente basse le GW emesse: 1) hanno una frequenza doppia di quella orbitale; 2) possono essere caratterizzate da una luminosità (potenza emessa) $\mathcal{P}$ che è descritta dalla formula del quadrupolo di Einstein
$$\mathcal{P} = \frac{G}{5c^5}\sum_{i=1}^{3}\sum_{j=1}^{3}\left(\frac{d^3Q_{ij}}{dt^3}\right)\left(\frac{d^3Q_{ij}}{dt^3}\right) . \tag{5}$$
Qui $c$ è la velocità della luce $c\simeq3 \times 10^8$ m/s. Per un sistema di due particelle puntiformi che orbitano nel piano $x-y$, le $Q_{ij}$ sono date dalla tabella seguente ($i, j$ sono gli indici di riga/colonna)
$$Q_{11} = \sum_{A=1}^{2}\frac{M_A}{3}(2x_A^2 - y_A^2) , \qquad Q_{22} = \sum_{A=1}^{2}\frac{M_A}{3}(2y_A^2 - x_A^2) , \qquad Q_{33} = -\sum_{A=1}^{2}\frac{M_A}{3}(x_A^2 + y_A^2) , \tag{6}$$
$$Q_{12} = Q_{21} = \sum_{A=1}^{2}M_A x_A y_A , \tag{7}$$
e $Q_{ij} = 0$ in tutti gli altri casi. Qui, $(x_A, y_A)$ è la posizione della massa A nel riferimento del centro di massa.

B.1 Per le orbite circolari descritte in A.2 le componenti $Q_{ij}$ possono essere espresse in funzione del tempo $t$ come:
$$Q_{ii} = \frac{\mu L^2}{2}(a_i + b_i\cos kt) , \qquad Q_{ij}^{i\neq j} = \frac{\mu L^2}{2}c_{ij}\sin kt . \tag{8}$$
Determina $k$ in funzione di $\Omega$ e dei valori numerici delle costanti $a_i, b_i, c_{ij}$.

1.0pt

B.2 Calcola la luminosità $\mathcal{P}$ emessa sotto forma di onde gravitazionali per questo sistema e ricava:
$$\mathcal{P} = \xi\frac{G}{c^5}\mu^2 L^4\Omega^6 . \tag{9}$$
Qual è il numero $\xi$? [Se non riesci a ottenere $\xi$, nel seguito usa $\xi = 6.4$].

1.0pt

B.3 In assenza di emissione di GW, le due masse continuano a orbitare indefinitamente su orbite circolari fisse. L'emissione di GW provoca però una perdita di energia da parte del sistema e fa in modo che esso evolva lentamente verso orbite circolari sempre più piccole.

Dimostra che la velocità di cambiamento della velocità angolare orbitale, $\frac{d\Omega}{dt}$, può essere scritta nella forma
$$\left(\frac{d\Omega}{dt}\right)^3 = (3\xi)^3\frac{\Omega^{11}}{c^{15}}(GM_c)^5 , \tag{10}$$
dove $M_c$ è chiamata chirp mass. Ricava $M_c$ in funzione di $M$ e $\mu$. Questa massa determina l'aumento di frequenza durante il decadimento orbitale. [Il nome "chirp" (cinguettio) deriva dal tono alto e a frequenza crescente del suono prodotto da piccoli uccelli].

1.0pt

B.4 Usando l'informazione fornita sopra, esprimi la velocità angolare orbitale $\Omega$ in funzione della frequenza $f_\text{GW}$ delle GW. Sapendo che, per ogni funzione liscia $F(t)$ e per $a\neq1$,
$$\frac{dF(t)}{dt} = \chi F(t)^a \quad\Rightarrow\quad F(t)^{1-a} = \chi(1-a)(t-t_0) , \tag{11}$$
dove $\chi$ è una costante e $t_0$ è una costante di integrazione, dimostra che la (10) implica che la frequenza delle GW è
$$f_\text{GW}^{-8/3} = 8\pi^{8/3}\xi\left(\frac{GM_c}{c^3}\right)^{(2/3)+p}(t_0-t)^{2-p} \tag{12}$$
e determina la costante $p$.

2.0pt

Il 14 settembre 2015, l'evento GW 150914 è stato registrato dai rivelatori LIGO, consistenti in due bracci disposti a forma di L, ognuno lungo 4 km. La variazione relativa della lunghezza di questi bracci è mostrata nella Fig. 1. I bracci del rivelatore rispondono linearmente al passaggio di un'onda gravitazionale, e le variazioni della loro lunghezza hanno lo stesso andamento dell'onda. Quest'onda è stata prodotta da due buchi neri su orbite quasi circolari; la perdita di energia per l'emissione di onde gravitazionali ha provocato una contrazione delle orbite cosicché i due buchi neri alla fine sono entrati in collisione. L'istante in cui questo è avvenuto corrisponde, grosso modo, al picco del segnale dopo il punto D nella Fig. 1.

Figura 1. Deformazione (variazione relativa della lunghezza) di ciascun braccio nel rivelatore H1 di LIGO. Sulle ascisse è riportato il tempo, e i punti A, B, C e D corrispondono rispettivamente a $t = 0.00, 0.009, 0.034, 0.040$ secondi.

B.5 Dalla figura, stima il valore di $f_\text{GW}(t)$ per
$$t_\text{AB} = \frac{t_B + t_A}{2} \quad\text{and}\quad t_\text{CD} = \frac{t_D + t_C}{2} . \tag{13}$$
Assumendo che la (12) sia valida durante l'intero processo che porta alla collisione (il che a rigore non è del tutto vero) e che i due oggetti abbiano uguale massa, fornisci una stima per la chirp mass $M_c$ e per la massa totale del sistema, in unità di masse solari $M_\odot\simeq2 \times 10^{30}$ kg.

1.0pt

B.6 Fornisci una stima per la minima separazione orbitale tra i due oggetti immediatamente prima della collisione, usando i dati orbitali all'istante $t_\text{CD}$. Fornisci quindi una stima per la dimensione massima di ciascun oggetto: $R_\text{max}$. Calcola $R_\odot/R_\text{max}$ per confrontare questa dimensione con il raggio del nostro Sole, $R_\odot\simeq7 \times 10^5$ km. Fornisci anche una stima della velocità lineare orbitale nello stesso istante, $v_\text{col}$, e confrontala con la velocità della luce calcolando il rapporto $v_\text{col}/c$.

1.0pt

Concludi che questi oggetti sono estremamente compatti e si muovono davvero molto velocemente!

<!--fig:start-->
**p.3** — Forma d'onda gravitazionale GW150914 ai due rivelatori
![[_attachments/exam-theory-Q1-italian/exam-theory-Q1-italian_p3_f1.png]]
<!--fig:end-->

**Topic:** [[Gravitation]], [[Astrophysics]], [[Special Relativity]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Differential Equations (metodo)|Differential Equations]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Kepler's Laws (metodo)|Kepler's Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1
