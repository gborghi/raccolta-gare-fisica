---
tipo: quesito
quesito_id: quesito_exam-experiment-Q1-italiano_4__Q01
parent: prova_exam-experiment-Q1-italiano_4
competition: International Physics Olympiad 2022
comp_code: IPhO2022
country: International
year: '2022'
level: Experimental Q1
pdf: Gara individuale/ipho/sperimentale/int22sit/exam-experiment-Q1-italiano.pdf
quesito: '1'
generator: llm-extracted
tags:
  - kg/prova
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/newtonian-mechanics
  - topic/fluid-mechanics
  - topic/thermodynamics
---

# [IPhO2022 2022 Experimental Q1] — Problema 1

**Pianeta** (12 punti)

Ti ritrovi su un pianeta alieno senza sapere come ci sei arrivato. La prima cosa che provi a fare è conoscere meglio il pianeta in cui ti trovi. Ricordi come Galileo sperimentò la caduta delle sfere e, ispirato da questo, costruisci una torre perfettamente verticale di altezza $H = 2000\ \text{m}$. Ottenuta la torre, ora puoi iniziare a far cadere sfere da qualsiasi altezza $h$ dalla torre (misurata tra il terreno e la parte inferiore della sfera immediatamente prima che viene lasciata libera). A causa delle limitazioni dei materiali a tua disposizione, puoi far cadere solo sfere di raggio compreso tra $5\ \text{cm} \leq r \leq 50\ \text{cm}$ e densità compresa tra $0{,}1\ \text{g/cm}^3 \leq \rho \leq 10\ \text{g/cm}^3$.

Ogni volta che lasci cadere una sfera, la lasci andare da ferma e sei in grado di misurare la durata $t$ della caduta e la distanza orizzontale $s$ tra il punto in cui la sfera tocca terra e il punto perpendicolare al punto in cui è stata lasciata cadere.

Prima di iniziare i tuoi esperimenti, hai effettuato le seguenti osservazioni sul pianeta:

- Basandoti sul movimento del Sole, hai scoperto di essere da qualche parte sull'equatore del pianeta.
- Il pianeta ha un'atmosfera; la densità dell'aria è abbastanza piccola da trascurare la forza di galleggiamento dovuta ad essa.
- La temperatura al suolo vale $T_0 = 20\ ^\circ\text{C}$.
- Sembra che ci sia un vento che soffia lungo l'equatore uniforme per tutta l'altezza della torre; trascurare l'effetto della torre sulla velocità del vento.

**Dati e relazioni utili:**

- Costante gravitazionale: $G = 6{,}67 \times 10^{-11}\ \text{m}^3\,\text{kg}^{-1}\,\text{s}^{-2}$
- Costante dei gas perfetti: $R = 8{,}314\ \text{J}\,\text{mol}^{-1}\,\text{K}^{-1}$, con $0\ ^\circ\text{C} = 273{,}15\ \text{K}$
- La resistenza dell'aria per una sfera di area della sezione trasversale $A$ e velocità $v$ nell'aria di densità $\rho_a$ è:

$$F_d = 0{,}24\, A\, \rho_a\, v^2$$

- Un'atmosfera adiabatica ha un profilo di densità:

$$\rho_a(h) = \rho_{a0}\left(1 - \frac{\gamma-1}{\gamma}\frac{\mu g h}{R T_0}\right)^{\frac{1}{\gamma-1}} = \rho_{a0}\left(1 - \frac{h}{H_0}\right)^{\frac{1}{\gamma-1}}$$

valida fino all'estremità superiore dell'atmosfera dove $T = 0\ \text{K}$. Nella formula $\gamma$ è il coefficiente adiabatico, $\mu$ la massa molare dell'aria, $g$ l'accelerazione di caduta libera e $h$ l'altezza da terra.

---

### Parte A. Le proprietà del pianeta (3,0 punti)

**A.1** (2,0 pt) — Determinare l'accelerazione di caduta libera $g$ sul pianeta effettuando una serie adeguata di misurazioni e disegnando un grafico appropriato. Fornire un'analisi dell'incertezza nel risultato.

**A.2** (0,5 pt) — Allontanandoti dalla torre lungo l'equatore, scopri di poter vedere la torre fino a una certa distanza $L = 230\ \text{km}$ (misurata come la distanza tra te e la cima della torre). Qual è il raggio $R$ del pianeta? Puoi presumere che la tua altezza sia molto inferiore all'altezza della torre.

**A.3** (0,5 pt) — Stimare la massa $M$ del pianeta. Fornire un'analisi dell'incertezza nel risultato. Quale effetto fisico contribuisce maggiormente all'accuratezza della tua stima per $M$? Spunta l'effetto appropriato nel foglio delle risposte.

---

### Parte B. Le proprietà dell'atmosfera (6,5 punti)

**B.1** (2,0 pt) — Determinare la velocità $u$ del vento sulla superficie del pianeta effettuando un'opportuna serie di misurazioni e disegnando un grafico appropriato. Fornire un'analisi dell'incertezza nel risultato.

**B.2** (1,0 pt) — Determinare la densità dell'aria $\rho_{a0}$ sulla superficie del pianeta raccogliendo dati aggiuntivi o riutilizzando i dati precedenti e disegnando un grafico appropriato. Fornire un'analisi dell'incertezza nel risultato.

**B.3** (3,0 pt) — Supponendo che l'atmosfera sia adiabatica con un coefficiente adiabatico $\gamma = 1{,}4$, determinare lo spessore $H_0$ dell'atmosfera effettuando un opportuno insieme di misurazioni e disegnando un grafico appropriato. Fornire un'analisi dell'incertezza nel risultato.

**B.4** (0,5 pt) — Determinare la massa molare $\mu$ dell'aria e la pressione $p_0$ dell'aria alla base della torre. Fornire un'analisi dell'incertezza nel risultato.

---

### Parte C. La durata di un giorno (2,5 punti)

**C.1** (2,5 pt) — Determinare la durata, $T_p$, di un giorno sul pianeta effettuando un opportuno insieme di misurazioni e disegnando un grafico appropriato. Fornire un'analisi dell'incertezza nel risultato.

**Topic:** [[Newtonian Mechanics]], [[Fluid Mechanics]], [[Thermodynamics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Graph Linearization (metodo)|Graph Linearization]], [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Fonte:** Testo (PDF) — p.3
**Soluzione:** Soluzioni (PDF)
