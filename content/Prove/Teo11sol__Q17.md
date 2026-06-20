---
tipo: quesito
quesito_id: quesito_Teo11sol__Q17
parent: prova_Teo11sol
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: '2011'
level: Nazionale
pdf: Gara individuale/nazionale/teorica/naz2011th/Teo11sol.pdf
cluster: Meccanica
quesito: '17'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/bi
  - topic/electrostatics
  - topic/newtonian-mechanics
  - argomento/meccanica
---

# OII 2011 Nazionale Teorica — Problema 17

Quesito n. 6.
Alla distanza minima $r$ (si omette il pedice per semplicità) la particella si muove con velocità incognita di
modulo $v$. Occorre quindi impostare un sistema di due equazioni: una è fornita dalla conservazione dell’energia,
l’altra dalla conservazione del momento angolare
$$\begin{cases}\frac{1}{2}mv^2 + qV(r) = \frac{1}{2}mv^2_0 + qV(2R) \\ mrv = m(2R)v_0\,\text{sen}\,45^\circ\end{cases} \Rightarrow \begin{cases}mr^2v^2 R + mr^2 v^2_0(2R - r) = mr^2 v^2_0 R \\ rv = 2Rv_0\,\text{sen}\,45^\circ\end{cases}$$
avendo moltiplicato la prima equazione per $2r^2 R$ ed avendo sostituito $2qE_0 R = mv^2_0$ per definizione di $v_0$.
Dalla seconda equazione $r^2 v^2 = 4R^2 v^2_0\,\text{sen}^2\,45^\circ = 2R^2 v^2_0$ che, sostituito nella prima per eliminare l’incognita
$v$ dà
$$2R^3 v^2_0 + r^2 v^2_0(2R - r) = r^2 v^2_0 R \quad\Rightarrow\quad r^3 - Rr^2 - 2R^3 = 0$$
Nella variabile $z = r/R$ l’equazione da risolvere è
$$f(z) = z^3 - z^2 - 2 = 0 \quad\text{in}\quad 1 < z < 2$$
Si osserva che $f(1) = -2 < 0$, $f(2) = 2 > 0$ e che la derivata $f' = 3z^2 - 2z$ è sempre positiva nell’intervallo
considerato: dunque nello stesso intervallo la funzione è continua e crescente per cui ha certamente uno ed un
solo zero che può essere determinato ad esempio col metodo dicotomico:
Soluzione numerica dell’equazione $f(z) = 0$ in $1 < z < 2$

| valore nel punto medio | nuovo intervallo | nuova posizione |
|---|---|---|
| $f(1.500) = -0.8750 < 0$ | 1.500 – 2.000 | $1.750 \pm 0.250$ |
| $f(1.750) = 0.2969 > 0$ | 1.500 – 1.750 | $1.625 \pm 0.125$ |
| $f(1.625) = -0.3496 < 0$ | 1.625 – 1.750 | $1.687 \pm 0.063$ |
| $f(1.687) = -0.0422 < 0$ | 1.687 – 1.750 | $1.719 \pm 0.031$ |
| $f(1.719) = 0.1246 > 0$ | 1.687 – 1.719 | $1.703 \pm 0.016$ |

La soluzione (a meno dell’1 %) vale $z = 1.70$ per cui $r_\text{min} \approx 1.70\,R$.
———————————
PROBLEMA n. 4 – Due altoparlanti
45 Punti

**Topic:** [[Electrostatics]], [[Newtonian Mechanics]]
**Metodi:** [[Conservation Laws (metodo)|Conservation Laws]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.6
**Soluzione:** Soluzioni (PDF)
