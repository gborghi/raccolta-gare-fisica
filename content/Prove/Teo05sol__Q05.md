---
tipo: quesito
quesito_id: quesito_Teo05sol__Q05
parent: prova_Teo05sol
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: '2005'
level: Nazionale
pdf: Gara individuale/nazionale/teorica/naz2005tpd/Teo05sol.pdf
cluster: Meccanica
quesito: '5'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/mono
  - topic/thermodynamics
  - argomento/meccanica
---

# OII 2005 Nazionale Teorica — Problema 5

Quesito n. 5.
Conviene esprimere la funzione $W(T)$ nella forma più compatta, in questo modo
$$W(T) = \left( 1 - \frac{T_0}{T} \right) \left( \alpha - \beta T^4 \right)$$
con $\alpha = 13.572$ kW, $\beta = 6.8832 \times 10^{-13}$ kW $\text{K}^{-4}$ .
La derivazione rispetto a $T$ dell’equazione precedente, per trovare il massimo, porterebbe ad un’equazione di
$5^\circ$ grado (v. sotto). Per via numerica si può calcolare $W$ iniziando dal valore già ottenuto per $1600\ ^\circ\text{C}$, con un
passo di $200\ ^\circ\text{C}$ a scendere. Infatti facendo il calcolo a $1600\ ^\circ\text{C}$ si nota che le perdite radiative (rapidamente variabili perché dipendono da $T^4$) sono nettamente maggiori di $W_1$; quindi la temperatura di $1600\ ^\circ\text{C}$ è sicuramente
più alta del valore che ottimizza la potenza meccanica.
Si trova che il massimo sta tra $800\ ^\circ\text{C}$ e $1000\ ^\circ\text{C}$, come appare evidente riportando i valori su un grafico, dato
che $W(600\ ^\circ\text{C}) < W(1000\ ^\circ\text{C})$.

| $T\ [^\circ\text{C}]$ | $T\ [\text{K}]$ | $W\ [\text{kW}]$ |
|---|---|---|
| 1400 | 1673 | 4.30 |
| 1200 | 1473 | 8.27 |
| 1000 | 1273 | 9.05 |
| 800 | 1073 | 9.20 |
| 600 | 873 | 8.75 |

| $T\ [^\circ\text{C}]$ | $T\ [\text{K}]$ | $W\ [\text{kW}]$ |
|---|---|---|
| 900 | 1173 | 9.20 |
| 850 | 1123 | 9.22 |

A questo punto (v. tabella a destra) si può procedere con metodo dicotomico, ma si trova che il valore a
$900\ ^\circ\text{C}$ è uguale, entro la terza cifra, a quello a $800\ ^\circ\text{C}$. Il valore di $W$ a $850\ ^\circ\text{C}$ è appena di poco superiore e
quindi può essere accettato. Ad esso corrisponde una potenza meccanica di 9.22 kW.
Con questo procedimento i calcoli numerici vengono ripetuti solo sette volte.
Un modo alternativo consiste nel calcolare la derivata della $W(T)$ e cercare per via numerica il valore di $T$
per cui essa si annulla:
$$\frac{d W(T)}{dT} = 4\beta T^5 - 3\beta T_0 T^4 - \alpha T_0 = 0$$
si può usare anche qui, in modo equivalente, il metodo dicotomico.
Un metodo iterativo molto efficace si può seguire scrivendo l’equazione precedente in questa forma
$$4\beta T^5 \left( 1 - \frac{3 T_0}{4T} \right) = \alpha T_0 \quad\Rightarrow\quad T = \sqrt[5]{\frac{\alpha T_0}{4\beta (1 - 3 T_0/(4T))}}$$
Poiché $T_0/T \ll 1$ si ottiene una prima approssimazione di $T$ ponendo $T_0/T = 0$ e iterando successivamente in
questo modo:
$$T_1 = \sqrt[5]{\frac{\alpha T_0}{4\beta}} = 1076\ \text{K}$$
e
$$T_n = \sqrt[5]{\frac{\alpha T_0}{4\beta \left( 1 - 3 T_0/(4 T_{n-1}) \right)}}$$
La sequenza può essere limitata alle prime due iterazioni, come mostrato in tabella:

| $T_{n-1}\ [\text{K}]$ | $T_n\ [\text{K}]$ | $T_n\ [^\circ\text{C}]$ | $W\ [\text{kW}]$ |
|---|---|---|---|
| 1076 | 1126 | 853 | 9.205 |
| 1126 | 1124 | 851 | 9.222 |
| 1124 | 1124 | 851 | 9.222 |

**Topic:** [[Thermodynamics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.4
**Soluzione:** Soluzioni (PDF)
