---
tipo: quesito
quesito_id: quesito_Teo11sol__Q03
parent: prova_Teo11sol
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: '2011'
level: Nazionale
pdf: Gara individuale/nazionale/teorica/naz2011th/Teo11sol.pdf
cluster: Meccanica
quesito: '3'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/multi
  - topic/conservation-of-momentum
  - topic/rotational-dynamics
  - topic/newtonian-mechanics
  - argomento/meccanica
---

# OII 2011 Nazionale Teorica — Problema 3

Quesito n. 3.
Si indichi con $\Delta p$ e con $\Delta p_c$ rispettivamente la variazione della quantità di moto della lastra causata dal rullo
urtato e da ognuno dei $2N - 1$ rulli a contatto con la lastra. Si indichi inoltre con $\Delta J$ e $\Delta J_c$ rispettivamente
la variazione del momento angolare del rullo fermo e di ognuno dei $2N - 1$ rulli in rotazione a contatto con la
lastra.
Il momento angolare di un corpo rigido si può esprimere come $J = I\omega$ dove $I$ rappresenta il momento d’inerzia
e $\omega$ la velocità angolare.
In un urto, tra la lastra ed i rulli si sviluppano delle forze impulsive parallele alla direzione del moto (forze
d’attrito).
L’impulso delle forze che i rulli esercitano sulla lastra fa cambiare la quantità di moto della lastra
$$M\,(v'_n - v_n) = \Delta p + (2N - 1)\Delta p_c$$
Si noti che $\Delta p$ e $\Delta p_c$ hanno segno opposto.
La variazione della quantità di moto della lastra prodotta dai singoli rulli è legata alla variazione del momento
angolare di ogni rullo. Infatti la variazione di q.d.m. della lastra è data da
$$\Delta p = \int f\,dt$$
dove $f$ è la forza applicata da un rullo alla lastra. Nel caso di forza impulsiva l’integrale è esteso ad un intervallo
temporale trascurabile, ma la variazione di q.d.m. risulta comunque finita.
Il momento dell’impulso delle forze $f'$ che la lastra esercita su ogni singolo rullo in un punto della superficie,
che per il terzo principio della dinamica hanno la stessa intensità, la stessa direzione e verso opposto, fa cambiare
il momento angolare dei rulli: precisamente fa diminuire il momento angolare di $2N - 1$ rulli ed aumentare il
momento angolare del rullo che viene messo in moto. Ne segue che la variazione di momento angolare del rullo
risulta
$$\Delta J = \int f'R\,dt = -R\int f\,dt = -R\,\Delta p$$
Si ha dunque
$$I\,(\omega'_n - \omega_n) = \Delta J = -R\,\Delta p \quad\Rightarrow\quad I\omega'_n = -R\,\Delta p$$
e
$$I\left(\omega'_{c,n} - \omega_{c,n}\right) = \Delta J_c = -R\,\Delta p_c$$
Sostituendo le ultime due espressioni nella prima si ottiene
$$M\,(v'_n - v_n) = -\frac{I\omega'_n}{R} - \frac{(2N - 1)\,I\,(\omega'_n - \omega_n)}{R}$$
Ricordando che $\omega = v/R$ e che $I = mR^2/2$ e sviluppando i calcoli si ricava infine
$$v'_n = \frac{2M + (2N - 1)m}{2M + 2Nm}\,v_n = \left(1 - \frac{1}{2}\frac{m}{M + Nm}\right)v_n$$

**Topic:** [[Conservation of Momentum]], [[Rotational Dynamics]], [[Newtonian Mechanics]]
**Metodi:** [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.1
**Soluzione:** Soluzioni (PDF)
