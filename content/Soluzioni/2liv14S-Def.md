---
tipo: soluzione
solves: 2liv14T-Def
prova_id: prova_2liv14S-Def
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: '2014'
level: 2° Livello
pdf: Gara individuale/2livello/2014/2liv14S-Def.pdf
cluster: Meccanica
n_problemi: '21'
tags:
  - kg/prova
  - anno/2014
  - paese/Italia
  - comp/OII
  - cluster/Meccanica
---

# OII 2014 2° Livello — 2liv14S-Def.pdf

> Documento di **soluzioni** (spostato da Prove). Testi: [[2liv14T-Def]].

**Fonte:** `Gara individuale/2livello/2014/2liv14S-Def.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Soluzione 1

**QUESITO n.1**

Le sorgenti che si osservano in astronomia sono molto distanti, pertanto in assenza dell'oculare, l'obiettivo formerebbe immagini reali sul piano focale, quindi ad $1\ \text{m}$ da esso; per poter avere raggi paralleli in uscita dal cannocchiale (cioè per osservare l'immagine all'infinito) i prolungamenti geometrici dei raggi che incidono sull'oculare devono convergere nel fuoco oltre lo stesso; in altre parole le due lenti devono avere un fuoco (oltre che l'asse ottico) in comune. La distanza $d$ tra le due lenti (detta "tiraggio") deve quindi essere uguale alla somma delle distanze focali delle due lenti, cioè $d = 95\ \text{cm}$.

Osserviamo che la condizione per cui il tiraggio dev'essere uguale alla somma delle distanze focali delle due lenti vale anche per il cannocchiale astronomico, realizzato con lenti entrambe convergenti.

**Topic:** [[Geometric Optics]]
**Metodi:** [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]], [[Ray Tracing (metodo)|Ray Tracing]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.1

## Soluzione 2

**QUESITO n.2**

In condizioni stazionarie, il flusso di calore che attraversa i due strati della lastra è lo stesso. Ricordiamo che il flusso termico attraverso uno strato omogeneo di area $A$ è direttamente proporzionale all'area stessa e alla differenza di temperatura tra le facce opposte, e inversamente proporzionale allo spessore dello strato; la costante di proporzionalità è la conducibilità termica del materiale di cui esso è costituito. Abbiamo allora:

$$\sigma_v\, A\, \frac{t_v - t_i}{s_v} = \sigma_p\, A\, \frac{t_i - t_p}{s_p}$$

da cui

$$s_p = s_v\, \frac{\sigma_p}{\sigma_v}\, \frac{t_i - t_p}{t_v - t_i} = 6.0\ \text{mm} .$$

$$\text{RIS} \quad \Rightarrow \quad 5.96 \leq s_p \leq 6.02 \quad [\,\text{mm}\,]$$

**Topic:** [[Thermodynamics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1

## Soluzione 3

**QUESITO n.3**

Scegliendo come verso positivo il verso orario per la corrente, la legge di Kirchhoff delle maglie si scrive

$$RI + \frac{Q}{2C} - \frac{Q}{C} = 0 \quad \Rightarrow \quad I = \frac{Q}{2RC} = 40\ \text{mA} .$$

Dato che questo valore è positivo, la corrente circola in verso orario.

NOTA per i correttori $\Rightarrow$ Attribuire 1 punto a chi sbaglia o non specifica il verso della corrente.

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Soluzione 4

**QUESITO n.4**

In un urto elastico (in assenza di forze esterne impulsive) si conservano sia la quantità di moto sia l'energia cinetica. Possiamo quindi scrivere (indicando con apici le velocità finali)

$$\begin{cases} m_1 v'_1 + m_2 v'_2 = m_1 v_1 + m_2 v_2 \\ \dfrac{1}{2} m_1 v'^2_1 + \dfrac{1}{2} m_2 v'^2_2 = \dfrac{1}{2} m_1 v^2_1 + \dfrac{1}{2} m_2 v^2_2 \end{cases} \Rightarrow \begin{cases} m_1(v'_1 - v_1) = m_2(v_2 - v'_2) \\ m_1(v'^2_1 - v^2_1) = m_2(v^2_2 - v'^2_2) \end{cases} \quad (1)$$

Dividendo la seconda equazione per la prima otteniamo

$$v'_1 = v'_2 + v_2 - v_1$$

espressione che, sostituita nella prima delle (1), dà infine

$$m_2 = m_1\, \frac{v_2 + v'_2 - 2 v_1}{v_2 - v'_2} = 15\ \text{kg} .$$

**Topic:** [[Conservation of Energy]], [[Conservation of Momentum]], [[Newtonian Mechanics]]
**Metodi:** [[Conservation of Energy (metodo)|Conservation of Energy]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Soluzione 5

**QUESITO n.5**

Il rendimento di una macchina termica reversibile che scambia calore con due sole sorgenti (macchina di Carnot) è $\eta_C = (T_2 - T_1)/T_2$, dove $T_1$ e $T_2$ sono le temperature assolute rispettivamente della sorgente fredda e di quella calda.

Poiché il rendimento di una qualunque macchina termica è, per definizione, $L/Q_a$ dove $L$ è il lavoro netto scambiato durante il ciclo e $Q_a$ è il calore assorbito, e poiché – indicando con $P_m$ e $P_{t\,a}$ rispettivamente la potenza meccanica e quella termica assorbita – risulta evidentemente $L/Q_a = P_m/P_{t\,a}$, abbiamo:

$$0.4\, (T_2 - T_1)/T_2 = P_m/P_{t\,a}$$

da cui

$$P_{t\,a} = P_m\, \frac{T_2}{0.4\,(T_2 - T_1)} = 2.99\ \text{kW} .$$

$$\text{RIS} \quad \Rightarrow \quad 2.984 \leq P_{t\,a} \leq 2.998 \quad [\,\text{kW}\,]$$

**Topic:** [[Thermodynamics]], [[Conservation of Energy]]
**Metodi:** [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Soluzione 6

**QUESITO n.6**

Se si trascura la resistenza dell'aria, l'energia meccanica si conserva durante il moto. Abbiamo quindi:

$$m g h_0 + \tfrac{1}{2} m v^2_0 = \tfrac{1}{2} m v^2_f$$

dove $m$ è la massa della palla, $v_f$ la sua velocità finale e $h_0$ l'altezza del punto di lancio della palla. Da questa relazione ricaviamo

$$h_0 = \frac{v^2_f - v^2_0}{2g} = 9.2\ \text{m} .$$

Se $h$ è l'altezza della studentessa, il terrapieno ha un'altezza $h_0 - h = 7.5\ \text{m}$ .

$$\text{RIS} \quad \Rightarrow \quad 7.42 \leq h \leq 7.52 \quad [\,\text{m}\,]$$

NOTA per i correttori $\Rightarrow$ Attribuire 2 punti se non viene sottratta l'altezza della studentessa.

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Soluzione 7

**QUESITO n.7**

Dal lato del rame sul piatto della bilancia, tenendo conto anche della spinta idrostatica, agisce una forza $F_{Cu} = m_{Cu} g - (m_{Cu}/\rho_{Cu})\rho_{acq}\, g$; dal lato dell'oro, una forza $F_{Au} = m_{Au} g - (m_{Au}/\rho_{Au})\rho_{acq}\, g$, con evidente significato dei simboli. Quando la bilancia è in equilibrio, le due forze sono uguali, quindi si ricava

$$m_{Au} = m_{Cu}\, \frac{\rho_{Au}(\rho_{Cu} - \rho_{acq})}{\rho_{Cu}(\rho_{Au} - \rho_{acq})} = 1.124\ \text{kg} .$$

$$\text{RIS} \quad \Rightarrow \quad 1.123 \leq m_{Au} \leq 1.125 \quad [\,\text{kg}\,]$$

**Topic:** [[Fluid Mechanics]], [[Newtonian Mechanics]]
**Metodi:** [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.3

## Soluzione 8

**QUESITO n.8**

Detta $T < F$ la forza che il bullone esercita sulla staffa ed $a > d/2$ la distanza tra il muro e il punto di applicazione del lampione, all'equilibrio risulta, dall'equazione dei momenti, $hT = aP$ con $P$ peso del lampione. A parità di $T$, quindi, il massimo peso del lampione che si può appendere corrisponde a un valore di $a$ minimo. Risulta

$$P = \frac{hT}{a} < \frac{2hT}{d} < \frac{2hF}{d} .$$

NOTA per i correttori $\Rightarrow$ Si attribuisca punteggio pieno anche a chi esamina direttamente la situazione limite ponendo $T = F$ .

**Topic:** [[Rigid Body Statics]], [[Newtonian Mechanics]]
**Metodi:** [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.3

## Soluzione 9

**QUESITO n.9**

Tra i punti A e B ci sono tre fili collegati in parallelo. Il primo è il tratto AB del filo ABC, il secondo è il filo AB e il terzo è dato dal filo AC in serie con il tratto CB del filo ABC.

La resistenza complessiva $R_{AB}$ è data dal parallelo delle tre resistenze. Posta uguale a $R$ la resistenza del filo AB, ricordando che la resistenza di un filo è direttamente proporzionale alla sua lunghezza, si ha

$$\frac{1}{R_{AB}} = \frac{1}{R} + \frac{a}{R(a + x)} + \frac{a}{R(\ell - x)}$$

Sommando si ottiene

$$\frac{1}{R_{AB}} = \frac{1}{R}\left[ 1 + \frac{a(\ell + a)}{(a + x)(\ell - x)} \right]$$

Al variare di $x$, $R_{AB}$ è massima quando è massimo il prodotto $(\ell - x)(a + x) = \ell a + x(\ell - a) - x^2$, il cui grafico è una parabola con la concavità verso il basso. Il massimo si ha per $x$ corrispondente al vertice della parabola, cioè per $x = (\ell - a)/2$.

**Topic:** [[Circuits]]
**Metodi:** [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.3

## Soluzione 10

**QUESITO n.10**

Prima dell'apertura della botola, sul primo corpo agisce il peso $m_1 g$ (verso il basso) e la spinta della molla (verso l'alto); le due forze si equilibrano, quindi la spinta della molla è anch'essa $m_1 g$. Sul secondo corpo agiscono: il peso $m_2 g$ (verso il basso), la spinta della molla $m_1 g$ (verso il basso) e la reazione vincolare della botola (verso l'alto). Immediatamente dopo che quest'ultima viene a mancare, l'estensione della molla, e quindi la sua spinta, è invariata, quindi il secondo corpo è soggetto a una forza $(m_1 + m_2)g = m_2 a$. La sua accelerazione è quindi $a = 1.5\, g = 14.7\ \text{m s}^{-2}$, mentre quella del primo corpo è ancora nulla.

$$\text{RIS} \quad \Rightarrow \quad 14.70 \leq a \leq 14.73 \quad [\,\text{m s}^{-2}\,]$$

NOTA per i correttori $\Rightarrow$ Si assegni un solo punto a chi sbaglia o non fornisce l'accelerazione di uno dei due corpi.

**Topic:** [[Newtonian Mechanics]], [[Oscillations & Waves]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Hooke's Law (metodo)|Hooke's Law]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.3

## Soluzione 11

**PROBLEMA n.1 – Asta in equilibrio**

*[Vedi i quesiti seguenti per lo svolgimento delle singole parti del problema.]*

**Topic:** [[Rigid Body Statics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.4

## Soluzione 12

**Quesito n. 1.**

L'angolo $\alpha$ può variare tra $\arcsin(1/4) = 14.5°$ (asta appoggiata con la punta allo spigolo del gradino) e $90°$ (asta verticale).

**Topic:** [[Rigid Body Statics]], [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.4

## Soluzione 13

**Quesito n. 2.**

Le forze che agiscono sull'asta in equilibrio sono: il peso $\vec{P}$, la forza esercitata dal pavimento – che come al solito scomponiamo in una componente normale ($\vec{N}_1$) e una tangenziale (l'attrito statico $\vec{A}$) – e la forza esercitata dal gradino. Poiché l'attrito tra l'asta e il gradino è trascurabile, questa forza è normale all'asta, e la indicheremo con $\vec{N}_2$.

La condizione di equilibrio dell'asta rispetto alla traslazione, ovvero l'annullamento della forza risultante, si scrive quindi:

$$\vec{P} + \vec{N}_1 + \vec{A} + \vec{N}_2 = 0$$

*[Figura: schema dell'asta appoggiata allo spigolo del gradino, con le forze $\vec{P}$, $\vec{N}_2$, $\vec{A}$ e $\vec{N}_1$.]*

Scomponendo questa equazione lungo una direzione orizzontale e una verticale, otteniamo due equazioni scalari:

$$\begin{cases} N_2 \sin\alpha - A = 0 \\ N_1 + N_2 \cos\alpha - P = 0 \end{cases} \quad (1)$$

La condizione di equilibrio rispetto alla rotazione è data dall'annullarsi dei momenti delle forze agenti rispetto ad uno stesso punto, che può essere scelto arbitrariamente se la risultante delle forze è nulla. Scegliendo per comodità il punto di contatto tra l'asta e il pavimento, e considerando positivi i momenti che tendono a far ruotare l'asta in senso antiorario, abbiamo

$$2 P h \cos\alpha - N_2 h / \sin\alpha = 0$$

Quest'ultima equazione ci consente di ricavare immediatamente $N_2$

$$N_2 = 2 P \sin\alpha \cos\alpha$$

Sostituendo questo valore nelle (1) abbiamo

$$A = 2 P \sin^2\alpha \cos\alpha$$
$$N_1 = P - 2 P \sin\alpha \cos^2\alpha \quad (2)$$

Questi sono i valori dei moduli delle forze vincolari che sono necessari per assicurare l'equilibrio dell'asta.

**Topic:** [[Rigid Body Statics]], [[Newtonian Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.4

## Soluzione 14

**Quesito n. 3.**

Notiamo che, dal punto di vista matematico, l'espressione di $N_1$ può essere positiva o negativa; se la (2) fornisce un valore negativo, questo significa che, per assicurare l'equilibrio dell'asta, occorrerebbe una forza rivolta verso il basso. Poiché questo non è fisicamente possibile, si ha che in questo caso l'asta ruota attorno allo spigolo del gradino. In altre parole, per avere l'equilibrio dev'essere:

$$\sin\alpha \cos^2\alpha < 1/2 \quad \Rightarrow \quad \sin 2\alpha \cos\alpha < 1$$

Nell'intervallo che ci interessa (tra $14.5°$ e $90°$), questa disequazione è sempre soddisfatta perché risulta sempre $\sin 2\alpha \leq 1$, $\cos\alpha \leq 1$ e i due fattori non sono mai contemporaneamente uguali ad 1. Possiamo concludere che l'asta non ruota mai attorno allo spigolo del gradino.

**Topic:** [[Rigid Body Statics]], [[Newtonian Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.4

## Soluzione 15

**Quesito n. 4.**

Affinché l'asta non scivoli, dev'essere

$$A < \mu N_1 \quad \text{ovvero} \quad 2 P \sin^2\alpha \cos\alpha < \mu P (1 - 2 \sin\alpha \cos^2\alpha) \quad \Rightarrow$$
$$\Rightarrow \quad \sin\alpha \cos\alpha\, (\sin\alpha + \mu \cos\alpha) = f(\alpha) < \mu/2$$

Studiamo per punti la funzione al primo membro, nell'intervallo che ci interessa:

| $\alpha$ | $f(\alpha)$ |
|---|---|
| $14°$ | $0.239$ |
| $20°$ | $0.352$ |
| $30°$ | $0.517$ |
| $40°$ | $0.618$ |
| $50°$ | $0.630$ |
| $60°$ | $0.548$ |
| $70°$ | $0.390$ |
| $80°$ | $0.192$ |
| $90°$ | $0$ |

Osserviamo che la funzione ha un andamento regolare, crescente fino a circa $50°$ e poi decrescente. Supera il valore $\mu/2 = 0.4$ in qualche punto tra $20°$ e $30°$, e torna poi al di sotto di questo valore in qualche punto tra $60°$ e $70°$.

Analizziamo allora più in dettaglio questi intervalli:

| $\alpha$ | $f(\alpha)$ |
|---|---|
| $22°$ | $0.388$ |
| $24°$ | $0.423$ |
| $26°$ | $0.456$ |
| $28°$ | $0.487$ |
| $30°$ | $0.517$ |

| $\alpha$ | $f(\alpha)$ |
|---|---|
| $62°$ | $0.522$ |
| $64°$ | $0.492$ |
| $66°$ | $0.460$ |
| $68°$ | $0.426$ |
| $70°$ | $0.390$ |

Nel primo caso vediamo che il valore $0.4$ viene attraversato tra $22°$ e $24°$. Prendendo il punto medio di questo intervallo, $23°$, siamo sicuri di individuare il punto di passaggio con la precisione richiesta. Nel secondo caso vediamo che il punto $0.4$ viene attraversato tra $68°$ e $70°$. Anche in questo caso, è sufficiente prendere il valore medio dell'intervallo.

Concludiamo quindi che l'asta è in equilibrio per angoli compresi tra $14.5°$ e $23°$, e tra $69°$ e $90°$.

**Topic:** [[Rigid Body Statics]], [[Newtonian Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.5

## Soluzione 16

**PROBLEMA n.2 – Interferenza**

**Quesito n. 1.**

In un generico punto P dello schermo si ha un massimo di oscillazione se $r_2 - r_1 = m\lambda$ (dove $m$ è un intero che rappresenta l'ordine del massimo, e $r_1$ e $r_2$ rappresentano rispettivamente le distanze tra P e le due sorgenti); abbiamo invece un minimo se $r_2 - r_1 = (k - 1/2)\lambda$, con $k = 1, 2, \dots$ Per il punto A abbiamo $r_2 - r_1 = d = N\lambda$, quindi abbiamo un massimo di ordine $N$.

**Topic:** [[Wave Optics]], [[Oscillations & Waves]]
**Metodi:** [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Superposition Principle (metodo)|Superposition Principle]], [[Wave Equation (metodo)|Wave Equation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.5

## Soluzione 17

**Quesito n. 2.**

Considerata la simmetria cilindrica del sistema, attorno all'asse costituito dalla retta passante per le due sorgenti, il luogo geometrico dei punti, appartenenti al piano considerato, tali che $r_2 - r_1 = \text{costante}$ è una circonferenza con il centro nel punto A. Le frange d'interferenza assumono quindi la forma di circonferenze concentriche.

**Topic:** [[Wave Optics]], [[Oscillations & Waves]]
**Metodi:** [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Superposition Principle (metodo)|Superposition Principle]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.5

## Soluzione 18

**Quesito n. 3.**

Si presentano qui di seguito quattro alternative di soluzione.

**Alternativa A**

Come detto sopra, le frange corrispondenti ad un minimo di oscillazione si hanno per $r_2 - r_1 = (k - 1/2)\lambda$, con $k$ intero. Il triangolo avente per vertici S$_1$, S$_2$ e un punto P sullo schermo ha lati $r_2$, $r_1$ e $d$. Ricordando che in un triangolo la differenza di due lati è sempre minore o uguale del terzo si ha:

$$(k - 1/2)\lambda \leq d \quad \Rightarrow \quad k \leq d/\lambda + 1/2 = N + 1/2 .$$

Al crescere della distanza fra P e A, la differenza di cammino delle due onde provenienti da S$_2$ e S$_1$ diminuisce, quindi per la frangia più vicina ad A il valore di $k$ deve essere il massimo possibile. Il massimo valore intero che soddisfa la relazione qui sopra è evidentemente $k = N$. La frangia, corrispondente ad un minimo, più vicina al punto A, cioè quella di ordine $N$, si trova ad una distanza $h$ da A determinata dall'equazione

$$\sqrt{(d + D)^2 + h^2} - \sqrt{D^2 + h^2} = (N - 1/2)\lambda = d - \lambda/2 \quad (1)$$

$$(d + D)\sqrt{1 + \left(\frac{h}{d + D}\right)^2} - D\sqrt{1 + \left(\frac{h}{D}\right)^2} = d - \frac{\lambda}{2}$$

Per $h \ll D$ possiamo usare l'approssimazione suggerita nel testo:

$$(d + D)\left[1 + \frac{1}{2}\left(\frac{h}{d + D}\right)^2\right] - D\left[1 + \frac{1}{2}\left(\frac{h}{D}\right)^2\right] = d - \frac{\lambda}{2}$$

$$d + D + \frac{h^2}{2(d + D)} - D - \frac{h^2}{2D} = d - \frac{\lambda}{2}$$

$$h = \sqrt{\frac{D(N\lambda + D)}{N}} \quad (2)$$

**Alternativa B**

Detto $\alpha$ l'angolo $\widehat{POA}$, dove O è il centro del segmento S$_1$S$_2$, poiché $d \ll D$, la differenza $r_2 - r_1$ si può approssimare con $d \cos\alpha$. Quindi

$$\cos\alpha = \frac{(N - 1/2)\lambda}{N\lambda} = 1 - \frac{1}{2N}$$

da cui

$$h = \left(D + \frac{N\lambda}{2}\right)\tan\alpha = \left(D + \frac{N\lambda}{2}\right)\frac{\sqrt{4N - 1}}{2N - 1} \quad (3)$$

**Alternativa C**

Si possono sviluppare i passaggi algebrici a partire dalla (1) senza fare approssimazioni. Si ottiene

$$(d + D)^2 + h^2 = (N - 1/2)^2\lambda^2 + D^2 + h^2 + 2(N - 1/2)\lambda\sqrt{D^2 + h^2}$$

$$\frac{\lambda}{4}(4N - 1) + 2ND = (2N - 1)\sqrt{D^2 + h^2}$$

$$h = \frac{1}{2N - 1}\sqrt{\frac{\lambda^2}{16}(4N - 1)^2 + DN\lambda(4N - 1) - D^2 + 4ND^2} = \frac{4N - 1}{2N - 1}\sqrt{\frac{\lambda^2}{16} + \frac{D(N\lambda + D)}{4N - 1}} \quad (4)$$

**Alternativa D**

Infine un ulteriore approccio si ottiene ricordando che il luogo geometrico dei punti per cui è costante la differenza $r_2 - r_1$ è un ramo d'iperbole che, in un sistema di riferimento con l'origine nel punto O della figura precedente e asse $x$ coincidente con OA, si scrive nella forma canonica

$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \quad \text{ponendo poi} \quad c = \sqrt{a^2 + b^2}$$

Il parametro $a$ definisce un semiasse dell'iperbole e individua la posizione dei vertici sull'asse delle ascisse, cioè l'intersezione dell'iperbole con il segmento S$_1$S$_2$, mentre $c$ dà l'ascissa della sorgente S$_1$. Nel nostro caso è allora

$$a = \frac{d}{2} - \frac{\lambda}{4} = \frac{\lambda}{4}(2N - 1) \quad \text{e} \quad c = \frac{d}{2} = \frac{N\lambda}{2}$$

Ne segue che

$$b = \sqrt{c^2 - a^2} = \sqrt{\left(\frac{d}{2}\right)^2 - \left(\frac{d}{2} - \frac{\lambda}{4}\right)^2} = \frac{\lambda}{4}\sqrt{4N - 1}$$

e l'equazione dell'iperbole diventa

$$\frac{16x^2}{(2N - 1)^2\lambda^2} - \frac{16y^2}{(4N - 1)\lambda^2} = 1 \quad \Rightarrow \quad \frac{x^2}{(2N - 1)^2} - \frac{y^2}{(4N - 1)} = \frac{\lambda^2}{16}$$

Il valore di $h$ si ottiene cercando l'intersezione di questa iperbole con la retta $x = d/2 + D = N\lambda/2 + D$. Sviluppando i calcoli si ottiene la soluzione esatta, ovvero la (4).

**Topic:** [[Wave Optics]], [[Oscillations & Waves]]
**Metodi:** [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Small-Angle Approximation (metodo)|Small-Angle Approximation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.6

## Soluzione 19

**Quesito n. 4.**

Con i valori indicati, risulta

$$h = 42.2\ \text{m} .$$

$$\text{RIS} \quad \Rightarrow \quad 40.4 \leq h \leq 42.3 \quad [\,\text{m}\,]$$

Nota: Sostanzialmente le tre espressioni trovate differiscono per il peso che si attribuisce al termine $\lambda/D$ (che è molto piccolo) come si può vedere scrivendole nella forma

$$h = D\, \frac{1}{\sqrt{N}}\sqrt{1 + N\frac{\lambda}{D}} \quad (2')$$

$$h = D\, \frac{\sqrt{4N - 1}}{2N - 1}\left(1 + \frac{N\lambda}{2D}\right) \quad (3')$$

$$h = D\, \frac{\sqrt{4N - 1}}{2N - 1}\sqrt{1 + N\frac{\lambda}{D} + \frac{4N - 1}{16}\left(\frac{\lambda}{D}\right)^2} \quad (4')$$

È chiaro che la (2) e la (3) sono approssimazioni della (4). Si può fare un'ulteriore approssimazione della (2) o della (3), un po' più forte, che porta in entrambi i casi all'espressione $h \approx D/\sqrt{N} = 40.4\ \text{m}$ .

**Topic:** [[Wave Optics]], [[Oscillations & Waves]]
**Metodi:** [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Small-Angle Approximation (metodo)|Small-Angle Approximation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.7

## Soluzione 20

**PROBLEMA n.3 – Forza elettrica e forza magnetica**

**Parte A**

La figura qui sotto schematizza la situazione descritta dal problema. Delle infinite cariche allineate, ne sono rappresentate solo otto. In centro è posta la carica $Q = +q$.

*[Figura: fila di cariche alternate ($-q$, $q$, $-q$, $q$, $Q$, $-q$, $q$, $-q$, $q$) allineate sull'asse, con spaziatura $d$ tra cariche dello stesso segno e $d/2$ dalla carica centrale $Q$.]*

**Quesito n. 1.**

La risultante delle forze elettrostatiche sulla carica $Q$ si ottiene sommando i contributi di ciascuna coppia di cariche, a partire da quella costituita dalle due cariche più vicine, che dà una forza di modulo

$$F_1 = 2\, \frac{1}{4\pi\varepsilon_0}\, \frac{q^2}{(d/2)^2} = \frac{2}{\pi\varepsilon_0}\, \frac{q^2}{d^2}$$

orientata verso destra. La coppia successiva fornisce un contributo di modulo

$$F_2 = 2\, \frac{1}{4\pi\varepsilon_0}\, \frac{q^2}{(3d/2)^2} = \frac{2}{\pi\varepsilon_0}\, \frac{q^2}{(3d)^2}$$

verso sinistra, poi avremo una $F_3$ verso destra e così via. In definitiva, l'intensità della risultante è data dalla somma algebrica

$$F = F_1 - F_2 + F_3 - \dots = \frac{2}{\pi\varepsilon_0}\, \frac{q^2}{d^2}\left[1 - \frac{1}{3^2} + \frac{1}{5^2} - \frac{1}{7^2} + \dots\right] = (2.876 \times 10^{-5}\ \text{N})\left[1 - \frac{1}{3^2} + \frac{1}{5^2} - \frac{1}{7^2} + \dots\right]$$

La tabella seguente mostra i termini della serie entro la parentesi, insieme alle somme parziali dei vari termini:

| Coppia | Contributo | Somma parziale |
|---|---|---|
| 1 | $1$ | $1$ |
| 2 | $-0.1111$ | $0.8889$ |
| 3 | $+0.0400$ | $0.9289$ |
| 4 | $-0.0204$ | $0.9085$ |
| 5 | $+0.0123$ | $0.9208$ |
| 6 | $-0.0083$ | $0.9126$ |
| 7 | $+0.0059$ | $0.9185$ |
| 8 | $-0.0044$ | $0.9140$ |
| $\dots$ | $\dots$ | $\dots$ |
| $\infty$ | | $0.91596 \dots$ (1) |

Un valore approssimato della forza risultante è $F = 2.63 \times 10^{-5}\ \text{N}$.

Nota – L'errore che si commette troncando una serie convergente a segni alterni all'$n$-simo termine è inferiore al valore assoluto del termine di ordine $n + 1$.

**Topic:** [[Electrostatics]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Superposition Principle (metodo)|Superposition Principle]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.7

## Soluzione 21

**Quesito n. 2.**

L'errore che si commette troncando la serie deve essere inferiore allo $0.5\,\%$. Vediamo che l'ottava coppia fornisce un contributo relativo inferiore allo $0.5\,\%$, quindi per una verifica sperimentale, sarà sufficiente considerare 7 coppie.

———————————

**Parte B**

La forza d'attrito dinamico $F = \mu m g$ è costante e sempre opposta al verso del moto e fa variare (linearmente nel tempo) il modulo della velocità; la forza di Lorentz, al contrario, è perpendicolare alla velocità e non ne cambia il modulo. Allora

$$v(t) = v_0 - at \quad \text{con} \quad a = F/m = \mu g$$

$$r(t) = \frac{m\, v(t)}{qB} = \frac{m(v_0 - \mu g t)}{qB} \quad \Rightarrow \quad \Delta r = -\frac{\mu m g\, \Delta t}{qB}$$

*Materiale elaborato dal Gruppo*

NOTA BENE: È possibile utilizzare, riprodurre, distribuire, comunicare al pubblico questo materiale alle due seguenti condizioni: citare la fonte; non usare il materiale, nemmeno parzialmente, per fini commerciali.

(1) Curiosità: la somma della serie, cioè il limite della somma parziale $n$-sima per $n$ che tende a infinito è nota come Costante di Catalan: $G = 0.915\,965\,594\,177\,219\,015\,054\,603\,514\,932\,384\,110\,774 \dots$; non è ancora noto se si tratti di un numero irrazionale o trascendente.

**Topic:** [[Electrostatics]], [[Magnetism]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.8
