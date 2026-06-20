---
tipo: quesito
quesito_id: quesito_Teo11sol__Q10
parent: prova_Teo11sol
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: '2011'
level: Nazionale
pdf: Gara individuale/nazionale/teorica/naz2011th/Teo11sol.pdf
cluster: Meccanica
quesito: '10'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/bi
  - topic/nuclear-e-particle-physics
  - topic/electrostatics
  - argomento/meccanica
---

# OII 2011 Nazionale Teorica — Problema 10

Quesito n. 4.
Nella tabella di dati fornita nel testo si aggiungono tre colonne in cui sono riportati rispettivamente i valori
dell’espressione $(A - 1)/A^{1/3}$, i valori di $\Delta E_\ell$ e il valore di $\beta$ ricavato da quelli:

| $A$ | Nucleo 1 | Nucleo 2 | $(A - 1)/A^{1/3}$ | $\Delta E_\ell$ (MeV) | $\beta$ |
|---|---|---|---|---|---|
| 35 | $^{35}_{17}\text{Cl}_{18}$ (298.2) | $^{35}_{18}\text{Ar}_{17}$ (291.5) | 10.39 | 6.7 | 0.649 |
| 45 | $^{45}_{22}\text{Ti}_{23}$ (385.0) | $^{45}_{23}\text{V}_{22}$ (377.1) | 12.37 | 7.9 | 0.640 |
| 55 | $^{55}_{27}\text{Co}_{28}$ (476.8) | $^{55}_{28}\text{Ni}_{27}$ (467.3) | 14.20 | 9.5 | 0.667 |
| 65 | $^{65}_{32}\text{Ge}_{33}$ (556.0) | $^{65}_{33}\text{As}_{32}$ (545.9) | 15.92 | 10.1 | 0.637 |
| 75 | $^{75}_{37}\text{Rb}_{38}$ (633.6) | $^{75}_{38}\text{Sr}_{37}$ (622.3) | 17.55 | 11.3 | 0.637 |

Calcolando la media dei valori riportati nell’ultima colonna, si ottiene una stima del valore di $\beta$, pari a 0.648 MeV.
Una stima più accurata può essere ottenuta con il metodo dei minimi quadrati cercando la migliore relazione
lineare tra le variabili $x = (A - 1)/A^{1/3}$ ed $y = \Delta E_\ell$, come mostrato nel grafico.
Si dovranno calcolare le somme
$$\sum_i x_i y_i = 661.3\ \text{MeV} \qquad \sum_i x^2_i = 1024.0$$
Il valore della costante di proporzionalità è dato da
$$\beta = \frac{\sum_i x_i y_i}{\sum_i x^2_i} = 0.646\ \text{MeV}$$
Con questo valore, dalla (*) si può infine ottenere
una stima di $R_0$:
$$R_0 = \frac{3\,e^2}{20\pi\epsilon_0\,\beta} = 1.34\ \text{fm}$$
Il valore comunemente accettato, ricavato con
molti metodi diversi, è 1.25 fm: l’errore è del 7.2 %.

<!--fig:start-->
**p.4** — Grafico Delta E_l contro (A-1) su A^(1/3)
![[_attachments/Teo11sol/Teo11sol_p4_f2.png]]
<!--fig:end-->

**Topic:** [[Nuclear & Particle Physics]], [[Electrostatics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Coulomb's Law (metodo)|Coulomb's Law]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.4
**Soluzione:** Soluzioni (PDF)
