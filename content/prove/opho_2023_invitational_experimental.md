---
title: OPhO 2023 — Invitational Experimental
tipo: prova
tags:
  - kg/prova
  - paese/international
  - comp/OPhO
---
<div class="atom-reader" data-prova="opho_2023_invitational_experimental"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="OPhO 2023 — Invitational Experimental — Quesito 1" data-tags="kg/prova,paese/International,comp/OPhO,topic/mathematics,argomento/metodi-trasversali,difficolta/4,multidisciplina/multi"></span>

<div class="qlang-switch" data-default="en"></div>



What condition needs to be satisfied for $\sigma$, $\rho$, $\beta$ in order for the ODE to be stable (i.e. bounded orbits)? Where are the attractors located?

**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/154QI_Ik4jXKUvpMMiGNBGIVs_arPyxIl/view)

**Topic:** [[Mathematics]], [[Newtonian Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —


<div class="qlang-split" data-lang="it"></div>

Quali condizioni devono essere soddisfatte per $\sigma$, $\rho$, $\beta$ per garantire la stabilità dell'ODE (cioè orbite limitate)? Dove sono i centri attractors?

**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/154QI_Ik4jXKUvpMMiGNBGIVs_arPyxIl/view)

**Topic:** [[Mathematics]], [[Newtonian Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —



<span class="atom-split" id="q02" data-atom="q02" data-title="OPhO 2023 — Invitational Experimental — Quesito 2" data-tags="kg/prova,paese/International,comp/OPhO,topic/mathematics,argomento/metodi-trasversali,difficolta/4,multidisciplina/multi"></span>

<div class="qlang-switch" data-default="en"></div>



Suppose you change the parameter $\rho$ slightly above its original value, and keep $\sigma$ and $\beta$ at their original values. How does the system behavior change? In particular, how does the position of the attractors change, and what happens to the system's stability?

Now suppose you keep $\rho$ at its original value, and change $\sigma$ and $\beta$ to values slightly different from their original ones. Again, describe the changes in the system behavior, the position of the attractors, and the system's stability.

To analyze how chaotic a system is, we often use the **Lyapunov exponent**. Let us consider two trajectories of a dynamical system that start at slightly different initial conditions. We denote the state of the first trajectory at time $t$ as $\mathbf{r}(t) = [x(t), y(t), z(t)]$, and the state of the second trajectory as $\mathbf{r}(t) + \delta\mathbf{r}(t)$, where $\delta$ is a small perturbation.

The distance between both trajectories can be represented as $d(t) = \lVert \delta\mathbf{r}(t) \rVert$. If the system is sensitive to initial conditions, then over time $d(t)$ will grow or shrink at an exponential rate. Therefore, we can write

$$
d(t) \approx d(0)\, e^{\lambda t}
$$

where $\lambda$ is the Lyapunov exponent. Here we assume that $d(0)$ is small enough so that an exponential approximation can be taken. Then, by taking natural logarithms, we find that the Lyapunov exponent can be written as

$$
\lambda = \lim_{t \to \infty} \frac{1}{t} \ln\!\left( \frac{d(t)}{d(0)} \right)
$$

As $\mathbf{r} \in \mathbb{R}^3$ for the Lorenz system, there will be 3 Lyapunov exponents $\{\lambda_1, \lambda_2, \lambda_3\}$ that characterize the system in all 3 directions. We are typically most interested in the **Maximum Lyapunov Exponent (MLE)**, as it tells us a lot about the system itself.

- If the Lyapunov exponent is positive ($\lambda > 0$), the trajectories are diverging on average (as $e^{\lambda t} \to \infty$) and the system is chaotic.
- If it is negative ($\lambda < 0$), the trajectories are converging on average (as $e^{-\lambda t} \to 0$) and the system is stable.
- If it is zero ($\lambda = 0$), the trajectories neither converge nor diverge on average (as $e^0 = 1$), indicating a neutral or marginally periodic stable system.

Below, we show a plot for an unrelated system and its behavior for the corresponding MLE.

![[OPhO_2023_Invitational_Experimental_p5_f1.png]]
*Behavior of an unrelated system for the corresponding MLE: steady state, periodic state, and chaotic state.*

**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/154QI_Ik4jXKUvpMMiGNBGIVs_arPyxIl/view)

**Topic:** [[Mathematics]], [[Newtonian Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —


<div class="qlang-split" data-lang="it"></div>

Supponi di aumentare leggermente il parametro $\rho$ rispetto al suo valore originale, mantenendo $\sigma$ e $\beta$ ai loro valori originali. Come cambia il comportamento del sistema? In particolare, come cambia la posizione degli attrattori e che cosa succede alla stabilità del sistema?

Supponi ora di mantenere $\rho$ al suo valore originale e di modificare $\sigma$ e $\beta$ a valori leggermente diversi da quelli originali. Anche in questo caso, descrivi le variazioni del comportamento del sistema, la posizione degli attrattori e la stabilità del sistema.

Per analizzare quanto sia caotico un sistema, si usa spesso l'**esponente di Lyapunov**. Consideriamo due traiettorie di un sistema dinamico che partono da condizioni iniziali leggermente diverse. Indichiamo lo stato della prima traiettoria al tempo $t$ con $\mathbf{r}(t) = [x(t), y(t), z(t)]$, e lo stato della seconda traiettoria con $\mathbf{r}(t) + \delta\mathbf{r}(t)$, dove $\delta$ è una piccola perturbazione.

La distanza tra le due traiettorie può essere rappresentata come $d(t) = \lVert \delta\mathbf{r}(t) \rVert$. Se il sistema è sensibile alle condizioni iniziali, allora nel tempo $d(t)$ crescerà o diminuirà a un ritmo esponenziale. Possiamo quindi scrivere

$$
d(t) \approx d(0)\, e^{\lambda t}
$$

dove $\lambda$ è l'esponente di Lyapunov. Qui assumiamo che $d(0)$ sia abbastanza piccolo da poter adottare un'approssimazione esponenziale. Prendendo poi i logaritmi naturali, troviamo che l'esponente di Lyapunov può essere scritto come

$$
\lambda = \lim_{t \to \infty} \frac{1}{t} \ln\!\left( \frac{d(t)}{d(0)} \right)
$$

Poiché $\mathbf{r} \in \mathbb{R}^3$ per il sistema di Lorenz, vi saranno 3 esponenti di Lyapunov $\{\lambda_1, \lambda_2, \lambda_3\}$ che caratterizzano il sistema in tutte e 3 le direzioni. Di solito siamo interessati soprattutto al **massimo esponente di Lyapunov (MLE)**, poiché ci dice molto sul sistema stesso.

- Se l'esponente di Lyapunov è positivo ($\lambda > 0$), le traiettorie divergono in media (poiché $e^{\lambda t} \to \infty$) e il sistema è caotico.
- Se è negativo ($\lambda < 0$), le traiettorie convergono in media (poiché $e^{-\lambda t} \to 0$) e il sistema è stabile.
- Se è nullo ($\lambda = 0$), le traiettorie in media non convergono né divergono (poiché $e^0 = 1$), indicando un sistema neutro o marginalmente periodico stabile.

Di seguito mostriamo un grafico per un sistema non correlato e il suo comportamento per il corrispondente MLE.

![[OPhO_2023_Invitational_Experimental_p5_f1.png]]
*Behavior of an unrelated system for the corresponding MLE: steady state, periodic state, and chaotic state.*

**Fonte:** [Testo (PDF) — p.4](https://drive.google.com/file/d/154QI_Ik4jXKUvpMMiGNBGIVs_arPyxIl/view)

**Topic:** [[Mathematics]], [[Newtonian Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —



<span class="atom-split" id="q03" data-atom="q03" data-title="OPhO 2023 — Invitational Experimental — Quesito 3" data-tags="kg/prova,paese/International,comp/OPhO,topic/mathematics,argomento/metodi-trasversali,difficolta/4,multidisciplina/multi"></span>

<div class="qlang-switch" data-default="en"></div>



Compute the Maximal Lyapunov Exponent (MLE) for a Lorenz system with these parameters:

- $\sigma = 15.6$
- $\rho = 35.4$
- $\beta = 3.13$

What does this imply about the system? See if you can estimate uncertainties!

**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/154QI_Ik4jXKUvpMMiGNBGIVs_arPyxIl/view)

**Topic:** [[Mathematics]], [[Newtonian Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —


<div class="qlang-split" data-lang="it"></div>

Calcolare l'Esponente massimo di Lyapunov (MLE) per un sistema di Lorenz con questi parametri:

- $\sigma = 15.6$
- $\rho = 35.4$
- $\beta = 3.13$

Cosa implica questo per il sistema? Vedi se riesci a valutare le incertezze!

**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/154QI_Ik4jXKUvpMMiGNBGIVs_arPyxIl/view)

**Topic:** [[Mathematics]], [[Newtonian Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —



<span class="atom-split" id="q04" data-atom="q04" data-title="OPhO 2023 — Invitational Experimental — Quesito 4" data-tags="kg/prova,paese/International,comp/OPhO,topic/mathematics,argomento/metodi-trasversali,difficolta/4,multidisciplina/multi"></span>

<div class="qlang-switch" data-default="en"></div>



Call $T_{\max}$ the maximal time for when a simulation is accurate to 99% of reality. A simulation is characterized by the specific numerical solver and the time step $dt$.

Using `rk4_step`, estimate $T_{\max}$ at various values of $dt$, given the initial point of $(1, 1, 1)$. Make a plot. Then do the same thing with `rk2_step`. What differences do you notice?

**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/154QI_Ik4jXKUvpMMiGNBGIVs_arPyxIl/view)

**Topic:** [[Mathematics]], [[Newtonian Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —


<div class="qlang-split" data-lang="it"></div>

Chiamare $T_{\max}$ il tempo massimo per quando una simulazione è accurata al 99% della realtà. Una simulazione è caratterizzata dal solvente numerico specifico e dal passo temporale $dt$.

Utilizzando `rk4_step`, stima $T_{\max}$ a vari valori di $dt$, data la data iniziale di $(1, 1, 1)$. Facciamo un complotto. Allora fai lo stesso con `rk2_step`. Quali differenze notate?

**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/154QI_Ik4jXKUvpMMiGNBGIVs_arPyxIl/view)

**Topic:** [[Mathematics]], [[Newtonian Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —



<span class="atom-split" id="q05" data-atom="q05" data-title="OPhO 2023 — Invitational Experimental — Quesito 5" data-tags="kg/prova,paese/International,comp/OPhO,topic/mathematics,argomento/metodi-trasversali,difficolta/4,multidisciplina/multi"></span>

<div class="qlang-switch" data-default="en"></div>



Let $\sigma = 10$, $\rho = 28$, $\beta = 8/3$. What is the average angular frequency $\omega_0$? Report with uncertainty. How does this change with position?

**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/154QI_Ik4jXKUvpMMiGNBGIVs_arPyxIl/view)

**Topic:** [[Mathematics]], [[Newtonian Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —


<div class="qlang-split" data-lang="it"></div>

Si possono utilizzare $\sigma = 10$, $\rho = 28$, $\beta = 8/3$. Qual è la frequenza angolare media $\omega_0$? Segna con incertezza. Come cambia questo con la posizione?

**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/154QI_Ik4jXKUvpMMiGNBGIVs_arPyxIl/view)

**Topic:** [[Mathematics]], [[Newtonian Mechanics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** —
