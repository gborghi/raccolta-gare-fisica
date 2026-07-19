---
title: APhO 2021 — Teorica
tipo: prova
tags:
  - kg/prova
  - paese/asia
  - comp/APhO
---
<div class="atom-reader" data-prova="apho_2021_theory"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="APhO 2021 — Teorica — Quesito 1" data-tags="kg/prova,paese/Asia,comp/APhO,topic/fluid-mechanics,argomento/fluidi,difficolta/5,multidisciplina/mono,object/pipe-tube"></span>

<div class="qlang-switch" data-default="en"></div>



### Water-Hammer Effect

#### Introduction

This problem studies variations of fluid pressure caused by pressure waves in a flow pipe. Proposed tasks mainly deal with the water-hammer effect arising from both fast and slow closings of a flow-control valve in the pipe.

We consider only nonviscous liquids and liquid flows which are essentially one-dimensional. All pipes including their valves are assumed to be rigid, but liquids are not always considered to be incompressible. If a liquid element of volume $V_0$ at equilibrium under pressure $P_0$ is subjected to a change of pressure $\Delta P$, the change of its volume $\Delta V$ is assumed to be proportional to $\Delta P$ so that

$$\Delta P = -B\,\frac{\Delta V}{V_0} \tag{1}$$

The constant of proportionality $B$ represents the bulk modulus of the liquid. For water, take $\rho_0 = 1.0 \times 10^3\ \text{kg/m}^3$ as its equilibrium density and $B = 2.2\ \text{GPa}$.

#### Part A. Excess Pressure and Propagation of Pressure Wave (2.2 points)

In a uniform cylindrical pipe of length $L$, water is flowing steadily along the $+x$ direction with horizontal velocity $v_0$, density $\rho_0$, and pressure $P_0$. As shown in Fig. 1, the pipe is connected to a reservoir at a depth $h$ and opens into the atmosphere at pressure $P_a$.

Suppose the flow-control valve T at the end of the pipe is then shut instantly so that the oncoming liquid element next to the valve suffers both a pressure change $\Delta P_s \equiv P_1 - P_0$ and a velocity change $\Delta v = v_1 - v_0$ with $v_1 \le 0$. This causes a longitudinal wave of excess pressure $\Delta P_s$ to travel upstream in the $-x$ direction with a speed of propagation $c$.

<!--fig:start-->
![[APhO_2021_theory_Q1_p1_f1.png]]
*Fig. 1: Steady flow in a uniform pipe.*
<!--fig:end-->

> **A.1** The excess pressure $\Delta P_s$ is related to the velocity change $\Delta v$ by $\Delta P_s = \alpha\rho_0 c\,\Delta v$. The speed of propagation $c$ is given by $c = \beta + \sqrt{\gamma B/\rho_0}$. Find $\alpha$, $\beta$, and $\gamma$. *(1.6pt)*

> **A.2** Calculate values of $c$ and $\Delta P_s$ for the case of water flow with $v_0 = 4.0\ \text{m/s}$ and $v_1 = 0$. *(0.6pt)*

#### Part B. A Model for the Flow-control Valve (1.0 points)

Fig. 2 shows a model for control valve T and the liquid flow through it. The valve is taken to be a short section of length $\Delta L$ and inner radius $R$ near the end A of the pipe. Its cone-shaped outlet has an orifice of radius $r$ and opens into the atmosphere at pressure $P_a$. Effects of gravity on the efflux are to be neglected.

The liquid is to be regarded as incompressible and the flow as steady with liquid element at the valve inlet having velocity $v_{\text{in}}$, pressure $P_{\text{in}}$, and density $\rho_0$. In Fig. 2, stream lines and normal lines are drawn only as an aid for visualizing the flow pattern.

<!--fig:start-->
![[APhO_2021_theory_Q1_p2_f1.png]]
*Fig. 2: Valve dimensions and contraction of jet.*
<!--fig:end-->

It is known that, after leaving the valve into the atmosphere, the cross section of the flow will contract until it reaches a minimum where the stream lines are again parallel. At this point of minimum, the flow velocity is $v_c$ and the cross section of the flow has a radius $r_c = r\sqrt{C_c}$. Here $C_c$, called the **contraction coefficient**, depends on the ratio $r/R$ and the cone angle $\beta$ as shown in Table 1.

| $r/R$ | $C_c\ (\beta = 45^\circ)$ | $C_c\ (\beta = 90^\circ)$ |
| ----- | ------------------------- | ------------------------- |
| 0.00  | 0.746                     | 0.611                     |
| 0.20  | 0.747                     | 0.616                     |
| 0.30  | 0.748                     | 0.622                     |
| 0.40  | 0.749                     | 0.631                     |
| 1.00  | 1.000                     | 1.000                     |

*Table 1. Contraction Coefficients for Orifices*

> **B.1** Find the excess pressure $\Delta P_{\text{in}} = P_{\text{in}} - P_a$ at the valve inlet where the stream lines are parallel. Give your answer in terms of $\rho_0$, $v_{\text{in}}$, $r$, $R$, and $C_c$. *(1.0pt)*

For all tasks in Part C and Part D, we consider the reservoir-pipe system in Fig. 1 and make the following assumptions:

- Speed of propagation $c$ and density $\rho_0$ of liquid are given constants independent of flow velocity. The ambient atmospheric pressure $P_a$ and the acceleration of gravity $g$ are constant.
- Initially, the valve is fully open and the flow in the pipe is steady with fluid pressure $P_0$ and velocity $v_0$.
- As in Fig. 1 and Fig. 2, the pipe has length $L$ and radius $R$. The valve T is a circular opening of variable radius $r$ with angle $\beta = 90^\circ$ and its length $\Delta L$ is negligible so that the valve inlet is effectively at the end A of the pipe. Effects of gravity on the efflux are negligible.
- Liquid in the reservoir is quasi-static so that its pressure $P_h$ near the pipe entrance B remains constant and we assume that the variation of fluid pressure across the pipe is negligible so that the flow is one-dimensional throughout the pipe.
- The model outlined in Part B may be used to determine the excess pressure $\Delta P_{\text{in}} = P_{\text{in}} - P_a$ at the valve inlet.

#### Part C. Water-Hammer Effect due to Fast Closure of Flow Control Valve (1.8 points)

Refer to the reservoir-pipe system in Fig. 1. When liquid flow in the pipe is obstructed by complete or partial closure of the valve, a pressure wave starts traveling upstream. It gets reflected at the reservoir end of the pipe and travels back to the valve and gets reflected there. Then another pressure wave is generated and the process just described is repeated. This causes a sequence of sudden pressure surges and dips for liquid element next to the valve and is referred to as **water-hammering**.

> **C.1** Refer to Fig. 1 and Fig. 2. Find the pressure $P_0$ and velocity $v_0$ of the steady flow in the pipe when valve T is fully open ($r = R$). Give answers in terms of $\rho_0$, $g$, $h$, and $P_a$. *(0.6pt)*

> **C.2** Consider the same steady flow as in task C.1 with pressure $P_0$ and flow velocity $v_0$. Now, at $t = 0$, the valve is closed ($r = 0$) instantly. A pressure wave heads toward the reservoir with speed of propagation $c$. Take note $P_h = P_0 + \rho_0 g h$. Let $\tau = 2L/c$. What are the fluid pressure $P(t)$ and flow velocity $v(t)$ in the pipe when $t$ is getting very close to each of the instants $\tau/2$ and $\tau$? *(1.2pt)*

#### Part D. Water-Hammer Effect due to Slow Closure of Flow Control Valve (5.0 points)

Consider again the same steady flow as in task C.1 with pressure $P_0$ and flow velocity $v_0$. Now we close the valve slowly and adopt a finite-step approach to simulate the closing process.

Starting at time $t = 0$, the instant reduction of the radius $r$ of the valve (see Fig. 2) is carried out sequentially at a time interval $\tau = 2L/c$. Immediately after each instant reduction of radius, the flow in the valve region is approximated to be steady as in Part B. The pressure and velocity at the valve are then different from those of the rest of the flow in the pipe.

For each closing step $n$, its duration and the radius $r_n$ of the valve opening are specified in Table 2 along with the symbols used to represent the corresponding fluid pressure $P_n$ and flow velocity $v_n$ at the valve.

| closing step $n$ | time interval of step $n$ | ratio $r_n/R$ | pressure at valve when $t = (n-1)\tau$ | flow velocity at valve when $t = (n-1)\tau$ |
| ---------------- | ------------------------- | ------------- | -------------------------------------- | ------------------------------------------- |
| $n = 0$          | $t < 0$                   | 1.00          | $P_0$                                  | $v_0$                                       |
| $n = 1$          | $0 \le t < \tau$          | 0.40          | $P_1$                                  | $v_1$                                       |
| $n = 2$          | $\tau \le t < 2\tau$      | 0.30          | $P_2$                                  | $v_2$                                       |
| $n = 3$          | $2\tau \le t < 3\tau$     | 0.20          | $P_3$                                  | $v_3$                                       |
| $n = 4$          | $3\tau \le t < 4\tau$     | 0.00          | $P_4$                                  | $v_4 = 0$                                   |

*Table 2. Valve closing steps*

Take fluid density $\rho_0$ and speed of propagation $c$ as constants. Let $n = 0, 1, 2, 3, 4$. Define $\Delta P_n = P_n - P_0$ and $\Delta v_n = v_n - v_0$. Make sure to enforce the approximation $P_h = P_0$.

> **D.1** Obtain an equation which expresses $\Delta P_n/(\rho_0 c)$ in terms of $\Delta P_{n-1}/(\rho_0 c)$, $v_{n-1}$, and $v_n$. It must be valid for all steps $n > 0$ specified in Table 2. For $n = 1, 2, 3$, obtain also an equation which allows $v_n$ to be computed if both $v_{n-1}$ and $\Delta P_{n-1}/(\rho_0 c)$ are known. *(3.0pt)*

> **D.2** Apply the result of task D.1 to water flow with $v_0 = 4.0\ \text{m/s}$. Use the graph paper provided in the Answer Sheet to make all plots of $\Delta P$ versus $\rho_0 c v$. Be sure to draw lines and curves intersecting at points having coordinates which give the values of $\rho_0 c v_n$ and $\Delta P_n$ for steps $n = 1, 2, 3, 4$. On the plot, label each point of intersection $(\rho_0 c v_n, \Delta P_n)$ with the value of $n$ to which it corresponds. From the graph, estimate values of $\rho_0 c v_n$ and $\Delta P_n$ (both in units of MPa) for $n = 1, 2, 3, 4$. *(2.0pt)*

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1nEMdC8ClQZ7UfUIsg0RAGUoeO_T3XeBG/view)

**Topic:** [[Fluid Mechanics]], [[Elasticity & Materials]]
**Metodi:** [[Bernoulli's Equation (metodo)|Bernoulli's Equation]], [[Continuity Equation (metodo)|Continuity Equation]], [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Wave Equation (metodo)|Wave Equation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]]

---


<div class="qlang-split" data-lang="it"></div>

### Effetto del martello d'acqua

#### Introduzione

Questo problema studia le variazioni della pressione del fluido causate dalle onde di pressione in un tubo di flusso. I compiti proposti riguardano principalmente l'effetto martello idrico derivante sia da chiusure rapide che lente di una valvola di controllo del flusso nel tubo.

Si considerano solo liquidi non viscosi e flussi liquidi che sono essenzialmente unidimensionali. Si presume che tutti i tubi, comprese le valvole, siano rigidi, ma non sempre i liquidi siano considerati incompressibili. Se un elemento liquido di volume $V_0$ in equilibrio sotto pressione $P_0$ è sottoposto a un cambiamento di pressione $\Delta P$, si presume che il suo cambiamento di volume $\Delta V$ sia proporzionale a $\Delta P$ in modo tale che

$$\Delta P = -B\,\frac{\Delta V}{V_0} \tag{1}$$

La costante di proporzionalità $B$ rappresenta il modulo di massa del liquido. Per l'acqua, prendere $\rho_0 = 1.0 \times 10^3\ \text{kg/m}^3$ come densità di equilibrio e $B = 2.2\ \text{GPa}$.

#### Parte A. Pressione eccessiva e diffusione dell'onda di pressione (2,2 punti)

In un tubo cilindrico uniforme di lunghezza $L$, l'acqua scorre costantemente lungo la direzione $+x$ con velocità orizzontale $v_0$, densità $\rho_0$ e pressione $P_0$. Come mostrato nella figura. 1, il tubo è collegato a un serbatoio a una profondità $h$ e si apre nell'atmosfera a pressione $P_a$.

Supponiamo che la valvola T di controllo del flusso alla fine del tubo venga chiusa istantaneamente in modo che l'elemento liquido di fronte accanto alla valvola subisca sia un cambiamento di pressione $\Delta P_s \equiv P_1 - P_0$ che un cambiamento di velocità $\Delta v = v_1 - v_0$ con $v_1 \le 0$. Ciò provoca che un'onda longitudinale di pressione in eccesso $\Delta P_s$ si muova a monte nella direzione $-x$ con una velocità di propagazione $c$.

<!--fig:start-->
![[APhO_2021_theory_Q1_p1_f1.png]]
*Fig. 1: flusso costante in un tubo uniforme.*
<!--fig:end-->

> **A.1** La pressione in eccesso $\Delta P_s$ è correlata al cambiamento di velocità $\Delta v$ da $\Delta P_s = \alpha\rho_0 c\,\Delta v$. La velocità di propagazione $c$ è data da $c = \beta + \sqrt{\gamma B/\rho_0}$. Trova $\alpha$, $\beta$ e $\gamma$. *(1.6pt)*

> **A.2** Calcolare i valori di $c$ e $\Delta P_s$ per il caso del flusso d'acqua con $v_0 = 4.0\ \text{m/s}$ e $v_1 = 0$. *(0.6pt)*

#### Parte B. Modello della valvola di controllo del flusso (1,0 punti)

Fig. - Cosa? 2 mostra un modello della valvola di controllo T e del flusso di liquido attraverso di essa. La valvola è considerata una sezione breve di lunghezza $\Delta L$ e di raggio interno $R$ vicino alla fine A del tubo. La sua uscita a forma di cono ha un orificio di raggio $r$ e si apre nell'atmosfera a pressione $P_a$. Gli effetti della gravità sull'efflusso devono essere trascurati.

Il liquido deve essere considerato incompressibile e il flusso deve essere considerato stabile con l'elemento liquido all'entrata della valvola, avendo velocità $v_{\text{in}}$, pressione $P_{\text{in}}$ e densità $\rho_0$. - In Fig. 2, le linee di flusso e le linee normali sono disegnate solo come aiuto per visualizzare il modello di flusso.

<!--fig:start-->
![[APhO_2021_theory_Q1_p2_f1.png]]
*Fig. 2: Dimensioni della valvola e contrazione del getto.*
<!--fig:end-->

È noto che, dopo aver lasciato la valvola nell'atmosfera, la sezione trasversale del flusso si contraverrà fino a raggiungere un minimo in cui le linee di flusso sono nuovamente parallele. A questo punto minimo, la velocità di flusso è $v_c$ e la sezione trasversale del flusso ha un raggio $r_c = r\sqrt{C_c}$. Qui $C_c$, denominato coefficiente di contrazione ****, dipende dal rapporto $r/R$ e dall'angolo conico $\beta$ come mostrato nella tabella 1.

| $r/R$ | $C_c\ (\beta = 45^\circ)$ | $C_c\ (\beta = 90^\circ)$ |
| ----- | ------------------------- | ------------------------- |
| 0.00  | 0.746                     | 0.611                     |
| 0.20  | 0.747                     | 0.616                     |
| 0.30  | 0.748                     | 0.622                     |
| 0.40  | 0.749                     | 0.631                     |
| 1.00  | 1.000                     | 1.000                     |

*Tabella 1. Coefficienti di contrazione per gli orifici*

> **B.1** Trova la pressione in eccesso $\Delta P_{\text{in}} = P_{\text{in}} - P_a$ all'entrata della valvola dove le linee di flusso sono parallele. Rispondi con $\rho_0$, $v_{\text{in}}$, $r$, $R$ e $C_c$. *(1.0pt)*

Per tutti i compiti della parte C e della parte D, si considera il sistema di tubi di serbatoio nella figura. 1 e fare le seguenti ipotesi:

- La velocità di propagazione $c$ e la densità $\rho_0$ del liquido sono date costanti indipendenti dalla velocità di flusso. La pressione atmosferica ambientale $P_a$ e l'accelerazione della gravità $g$ sono costanti.
- Inizialmente, la valvola è completamente aperta e il flusso nel tubo è costante con pressione del fluido $P_0$ e velocità $v_0$.
- Come in Fig. 1 e Fig. 2, il tubo ha lunghezza $L$ e raggio $R$. La valvola T è un'apertura circolare di raggio variabile $r$ con angolo $\beta = 90^\circ$ e la sua lunghezza $\Delta L$ è trascurabile in modo che l'entrata della valvola sia effettivamente all'estremità A del tubo. Gli effetti della gravità sull'efflusso sono trascurabili.
- Il liquido nel serbatoio è quasi-statico, in modo che la sua pressione $P_h$ vicino all'entrata del tubo B rimanga costante e presumiamo che la variazione della pressione del fluido attraverso il tubo sia trascurabile, in modo che il flusso sia unidimensionario in tutto il tubo.
- Il modello descritto nella parte B può essere utilizzato per determinare la pressione in eccesso $\Delta P_{\text{in}} = P_{\text{in}} - P_a$ all' ingresso della valvola.

#### Parte C. Effetto martello-acqua dovuto alla chiusura rapida della valvola di controllo del flusso (1,8 punti)

Si riferisce al sistema di tubi di riserva in Figura. 1. Quando il flusso di liquido nel tubo viene ostacolato dalla chiusura completa o parziale della valvola, un'onda di pressione inizia a viaggiare a monte. Si riflette all'estremità del serbatoio della tubazione e si riporta alla valvola e si riflette lì. Poi viene generata un'altra onda di pressione e si ripete il processo appena descritto. Questo provoca una sequenza di improvvisi solti di pressione e di scarsezza per l'elemento liquido accanto alla valvola e viene indicato come ** martellamento idrico**.

> **C.1** Si riferisce alla figura. 1 e Fig. 2. Trova la pressione $P_0$ e la velocità $v_0$ del flusso costante nel tubo quando la valvola T è completamente aperta ($r = R$). Risposte in termini di $\rho_0$, $g$, $h$ e $P_a$. *(0.6pt)*

> **C.2** Considera lo stesso flusso costante come nella attività C.1 con pressione $P_0$ e velocità di flusso $v_0$. Ora, a $t = 0$, la valvola viene chiusa ($r = 0$) istantaneamente. Un'onda di pressione si dirige verso il serbatoio con velocità di propagazione $c$. Si noti $P_h = P_0 + \rho_0 g h$. Lasciate $\tau = 2L/c$. Qual è la pressione del fluido $P(t)$ e la velocità di flusso $v(t)$ nel tubo quando $t$ si avvicina molto a ciascuno degli istanti $\tau/2$ e $\tau$? *(1.2pt)*

Parte D. Effetto martello-acqua dovuto alla lenta chiusura della valvola di controllo del flusso (5,0 punti)

Considerare di nuovo lo stesso flusso costante come nella attività C.1 con pressione $P_0$ e velocità di flusso $v_0$. Ora chiudiamo lentamente la valvola e adottiamo un approccio a passaggi finiti per simulare il processo di chiusura.

A partire dal tempo $t = 0$, la riduzione istantanea del raggio $r$ della valvola (vedi figura 1. 2) viene effettuata sequenzialmente ad intervallo temporale $\tau = 2L/c$. Subito dopo ogni riduzione istantanea del raggio, il flusso nella regione della valvola è stimato a essere costante come nella parte B. La pressione e la velocità della valvola sono quindi diverse da quelle del resto del flusso nel tubo.

Per ogni fase di chiusura $n$, la sua durata e il raggio $r_n$ dell'apertura della valvola sono specificati nella tabella 2 insieme ai simboli utilizzati per rappresentare la corrispondente pressione del fluido $P_n$ e la velocità di flusso $v_n$ alla valvola.

| closing step $n$ | time interval of step $n$ | ratio $r_n/R$ | pressure at valve when $t = (n-1)\tau$ | flow velocity at valve when $t = (n-1)\tau$ |
| ---------------- | ------------------------- | ------------- | -------------------------------------- | ------------------------------------------- |
| $n = 0$          | $t < 0$                   | 1.00          | $P_0$                                  | $v_0$                                       |
| $n = 1$          | $0 \le t < \tau$          | 0.40          | $P_1$                                  | $v_1$                                       |
| $n = 2$          | $\tau \le t < 2\tau$      | 0.30          | $P_2$                                  | $v_2$                                       |
| $n = 3$          | $2\tau \le t < 3\tau$     | 0.20          | $P_3$                                  | $v_3$                                       |
| $n = 4$          | $3\tau \le t < 4\tau$     | 0.00          | $P_4$                                  | $v_4 = 0$                                   |

*Tabella 2. Passi di chiusura della valvola*

Prendi come costanti la densità del fluido $\rho_0$ e la velocità di propagazione $c$. Lasciate $n = 0, 1, 2, 3, 4$. Definire $\Delta P_n = P_n - P_0$ e $\Delta v_n = v_n - v_0$. Assicurarsi di applicare l'approssimazione $P_h = P_0$.

> **D.1** Ottieni un'equazione che esprime $\Delta P_n/(\rho_0 c)$ in termini di $\Delta P_{n-1}/(\rho_0 c)$, $v_{n-1}$ e $v_n$. Deve essere valida per tutte le fasi $n > 0$ specificate nella tabella 2. Per $n = 1, 2, 3$, ottenere anche un'equazione che consente di calcolare $v_n$ se sono noti sia $v_{n-1}$ che $\Delta P_{n-1}/(\rho_0 c)$. *(3.0pt)*

> **D.2** Applicare il risultato della attività D.1 al flusso d'acqua con $v_0 = 4.0\ \text{m/s}$. Utilizzare la carta grafica fornita nella scheda delle risposte per fare tutti i grafici di $\Delta P$ contro $\rho_0 c v$. Assicurarsi di disegnare linee e curve che si intersecano in punti con coordinate che danno i valori di $\rho_0 c v_n$ e $\Delta P_n$ per i passi $n = 1, 2, 3, 4$. Sul plotone, etichettare ogni punto di intersezione $(\rho_0 c v_n, \Delta P_n)$ con il valore di $n$ al quale corrisponde. Dal grafico, i valori stimati di $\rho_0 c v_n$ e $\Delta P_n$ (tutti in unità di MPa) per $n = 1, 2, 3, 4$. *(2.0pt)*

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1nEMdC8ClQZ7UfUIsg0RAGUoeO_T3XeBG/view)

**Topic:** [[Fluid Mechanics]], [[Elasticity & Materials]]
**Metodi:** [[Bernoulli's Equation (metodo)|Bernoulli's Equation]], [[Continuity Equation (metodo)|Continuity Equation]], [[Impulse-Momentum Theorem (metodo)|Impulse-Momentum Theorem]], [[Wave Equation (metodo)|Wave Equation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]]

---



<span class="atom-split" id="q02" data-atom="q02" data-title="APhO 2021 — Teorica — Quesito 2" data-tags="kg/prova,paese/Asia,comp/APhO,topic/wave-optics,argomento/ottica,difficolta/5,multidisciplina/multi,object/photon"></span>

<div class="qlang-switch" data-default="en"></div>



### Ray tracing and generation of entangled light

**Useful formula:**

$$\vec{A} \times (\vec{B} \times \vec{C}) = \vec{B}\,(\vec{A} \cdot \vec{C}) - \vec{C}\,(\vec{A} \cdot \vec{B})$$

#### Introduction

Let $\vec{E}$ represent the electric field, $\vec{H}$ the magnetic field, $\vec{D}$ the electric displacement, and $\vec{B}$ the magnetic induction. We have $\vec{D} = \epsilon_0\vec{E} + \vec{P}$, with $\vec{P}$ being the polarization of the medium and $\epsilon_0$ being the permittivity of free space. Only nonmagnetic dielectric media are considered in this problem, hence $\vec{B} = \mu_0\vec{H}$, with $\mu_0$ being the permeability of free space. The energy density and energy flow density associated with the electromagnetic field are given by $u_{em} = \tfrac{1}{2}(\vec{E} \cdot \vec{D} + \vec{H} \cdot \vec{B})$ and Poynting's vector $\vec{S} = \vec{E} \times \vec{H}$, respectively.

In homogeneous dielectric media, a monochromatic plane wave of light can be described by its angular frequency $\omega$, wave vector $\vec{k}$, $\vec{D}$, and $\vec{B}$. According to Maxwell's equations, we have $\vec{k} \times \vec{E} = \omega\vec{B}$ and $\vec{k} \times \vec{H} = -\omega\vec{D}$. For such a wave, variations of $\vec{D}$ and $\vec{B}$ with position $\vec{r}$ and time $t$ are given by sinusoidal functions of the phase $(\vec{k} \cdot \vec{r} - \omega t)$.

#### Part A. Light propagation in isotropic dielectric media (1.0 points)

If the medium is isotropic, we have $\vec{P} = \chi\epsilon_0\vec{E}$ and $\vec{D} = \epsilon\vec{E}$, with $\chi$ and $\epsilon = \epsilon_0(1 + \chi)$ being the electric susceptibility and permittivity, respectively, of the medium. For a light wave of angular frequency $\omega$ in such a medium, a given phase will propagate in the direction $\vec{k}$ with a velocity (called *phase velocity*) $v_p = c/n$. Here $c$ is the speed of light in vacuum and $n$ is the refractive index of the medium. One can also use rays to represent a train of light waves. The propagation of a light ray is characterized by the direction and speed $v_r$ of the electromagnetic energy flow.

Consider a plane wave of light with angular frequency $\omega$ and wave vector $\vec{k}$ in a homogeneous isotropic dielectric medium.

> **A.1** Express its phase velocity $v_p$ in terms of $\epsilon$ and $\mu_0$. *(0.4pt)*

> **A.2** What is the refractive index $n$ of the dielectric medium for the wave? *(0.2pt)*

> **A.3** What are the direction $\hat{S} \equiv \vec{S}/S$ and speed $v_r$ of its electromagnetic energy flow? *(0.4pt)*

#### Part B. Light propagation in uniaxial dielectric media (4.8 points)

We now assume the dielectric medium to be uniaxial, i.e, it is electrically anisotropic along a special direction fixed in the medium, called the *optic axis*, which we presently call it the $z$ direction. In such a case, the displacement $\vec{D}$ and the electric field $\vec{E}$ are related by $D_x = \epsilon E_x$, $D_y = \epsilon E_y$, and $D_z = \epsilon' E_z$, where $x$, $y$, and $z$ axes are mutually orthogonal. Consequently, the phase velocity of a light wave is anisotropic and depends additionally on the directions of $\vec{k}$ and $\vec{D}$. Let $n_o = c\sqrt{\mu_0\epsilon}$ and $n_e = c\sqrt{\mu_0\epsilon'}$, answer the followings questions: **B.1**, **B.2**, and **B.3**.

> **B.1** Suppose the wave vector $\vec{k}$ of a monochromatic plane light wave is in the $xz$ plane so that $\vec{k} = k(\sin\theta, 0, \cos\theta)$. At each angle $\theta$, what directions of $\vec{D}$ and $\vec{B}$ are permissible for the light wave? Find all possible refractive indices and express the refractive indices in terms of $\theta$, $n_o$, and $n_e$. Find the angle $\theta$ for which only one value is permitted for the refractive index. *(1.5pt)*

> **B.2** The polarization of a light wave, i.e., the direction of its electric field $\vec{E}$, can be either perpendicular (called an *ordinary wave or ray*) or parallel (called an *extraordinary wave or ray*) to the $xz$ plane. For each of the light waves you found in **B.1**, specify its polarization as a unit vector and indicate whether it is an ordinary or extraordinary wave. Also compute $\tan\alpha$, where $\alpha$ is the angle between $\vec{E}$ and $\vec{D}$ ($\alpha$ is positive when going from $\vec{E}$ to $\vec{D}$ is clockwise). *(0.8pt)*

> **B.3** Extend the results in **B.1** and **B.2** to the general case when the angle between $\vec{k}$ and the positive $z$ direction is still $\theta$, but $\vec{k}$ is not in the $xz$ plane. Find all possible values of the refractive indices and the corresponding polarizations. *(0.6pt)*

In a uniaxial medium, the direction of $\vec{k}$ of a light wave may differ from the direction of the light ray. The phase velocity of the wave is still given by $c/n$ with $n$ being the refractive index along $\vec{k}$, while the ray velocity is defined jointly by the direction and the rate of energy flow.

> **B.4** Following problems **B.1-3**, consider a light wave with $\vec{k} = k(\sin\theta, 0, \cos\theta)$. Let the angle between $\hat{k} \equiv \vec{k}/k$ and the direction of the ray, $\hat{S}$, be $\alpha_r$ ($\alpha_r$ is positive when going from $\hat{S}$ to $\hat{k}$ is clockwise). Find all possible values of $\tan\alpha_r$, speed $v_r$ of the ray and $\hat{S}$. Using these results, express the ray index $n_s = c/v_r$ in terms of $\hat{S}$, $\hat{x}$, $\hat{z}$, $n_o$, and $n_e$. *(0.8pt)*

Consider the propagation of a light ray from A to B through an interface between an isotropic medium, labelled 1, and an anisotropic medium, labelled 2, as shown in Fig. 1. The interface coincides with the $yz$ plane, while the plane of incidence is the $xz$ plane. Let the angle of incidence be $\theta_1$. The refractive index of medium 1 is $n$, while the refractive indices of medium 2 for axes $z_2$, $y_2$, $x_2$ are $n_e$, $n_o$, and $n_o$, respectively. Here $y_2$ axis coincides with $y$ axis. Fermat's principle states that the propagation time for the path that the light ray goes from A to B is a minimum. For light with polarization parallel to $xz$ plane and incident at the angle $\theta_1$, Fermat's principle leads to the following equation:

$$\bar{A}(\tan\theta_2)^2 + \bar{B}\tan\theta_2 + \bar{C} = 0 \tag{1}$$

> **B.5** Find $\bar{A}$, $\bar{B}$, and $\bar{C}$ in terms of $P_1$, $P_2$, $P_3$, and $n\sin\theta_1$, where $P_1 = n_o^2\cos^2\phi + n_e^2\sin^2\phi$, $P_2 = n_o^2\sin^2\phi + n_e^2\cos^2\phi$, and $P_3 = (n_o^2 - n_e^2)\sin\phi\cos\phi$. From Eq. (1), find corresponding $\tan\theta_2$ to two special orientations: $\phi = 0$ and $\phi = \pi/2$. *(1.1pt)*

<!--fig:start-->
![[APhO_2021_theory_Q2_p3_f1.png]]
*Fig. 1: Propagation of light from A to B through an interface between an isotropic medium 1 and an anisotropic medium 2.*
<!--fig:end-->

#### Part C. Entanglement of light (4.2 points)

In a nonlinear medium, the electric field $\vec{E}$ is related to the polarization $\vec{P}$ by $P_i = (\epsilon - \epsilon_0)E_i + \sum_j \sum_k \chi^{(2)}_{ijk} E_j E_k$. Here $i$, $j$, $k$ each can be any one of the three components $x$, $y$, $z$, and $\chi^{(2)}_{ijk}$ are constants representing the second-order nonlinear susceptibility of the medium. Non-vanishing of $\chi^{(2)}_{ijk}$ implies that as a light wave travels through a nonlinear medium, it can split into two light waves.

Suppose that because $\chi^{(2)}_{ijk}$ are not all zero, the electric field in the medium is made up of a superposition of three plane waves of angular frequencies $\omega$, $\omega_1$, and $\omega_2$, propagating with wave vectors $\vec{k}$, $\vec{k}_1$, and $\vec{k}_2$, respectively. Assume $\omega \ge \omega_2$ and $\omega_1 \ge \omega_2$.

> **C.1** Find all possible relations (known as the *phase matching conditions*) between these angular frequencies and wave vectors. Viewing light as composed of photons, what kinds of conservation laws do these conditions imply for the three photons involved? Write down equations expressing these conservation laws for the case that a photon with angular frequency $\omega$ and wave vector $\vec{k}$ being split into two photons of angular frequencies $\omega_1$ and $\omega_2$, propagating with wave vectors $\vec{k}_1$ and $\vec{k}_2$, respectively. *(0.8pt)*

> **C.2** Consider a light wave in a uniaxial medium. Denote an ordinary ray as **o** and an extraordinary ray as **e**. There are 8 possible ways of splitting for the light wave: $\mathbf{o} \to \mathbf{o} + \mathbf{o}$, $\mathbf{o} \to \mathbf{e} + \mathbf{o}$, $\mathbf{o} \to \mathbf{o} + \mathbf{e}$, $\mathbf{o} \to \mathbf{e} + \mathbf{e}$, $\mathbf{e} \to \mathbf{o} + \mathbf{o}$, $\mathbf{e} \to \mathbf{e} + \mathbf{o}$, $\mathbf{e} \to \mathbf{o} + \mathbf{e}$, and $\mathbf{e} \to \mathbf{e} + \mathbf{e}$. Assume that the refractive indices $n_o$ and $n_e$ are both increasing functions of $\omega$. Using the same notations for wave vectors as in problem **C.1** and considering the case that $\vec{k}$, $\vec{k}_1$, and $\vec{k}_2$ are collinear, indicate which of the 8 ways of splitting are not possible. *(0.8pt)*

Consider an incoming **e** ray traveling along $z'$ direction with wave vector $\vec{k}$ and $\omega = \Omega_p$ in an uniaxial medium with refractive index $n_e < n_o$. Suppose that, in a collinear splitting $\mathbf{e} \to \mathbf{e} + \mathbf{o}$, the phase-matching conditions are realized with $k_1 = K_e$, $\omega_1 = \Omega_e$, $k_2 = K_o$, and $\omega_2 = \Omega_o$. Here subscripts 1 and 2 refer to **e** ray and **o** ray. $\vec{k}_1$, $\vec{k}_2$ and $\vec{k}$ all point in the $z'$ direction. As shown in Fig. 2(a), the optic axis (OA) of the medium lies in the $x'z'$ plane and makes an angle $\theta < \pi/2$ with the $z'$ axis. Therefore, $n_e$ is a function of $\omega$ and $\theta$, i.e., $n_e = n_e(\omega, \theta)$. For the same incoming **e** ray with wave vector $\vec{k}$ and $\omega = \Omega_p$, suppose its non-collinear splitting into $\mathbf{e} + \mathbf{o}$ rays causes the latter two rays to separate but remain on two cones with $\omega_1 = \omega_2 = \Omega$, $k_1 = k_2$, as shown in Fig. 2(b). Note that in the collinear splitting, $\Omega_e$ is already close to $\Omega_o$, and here $\Omega$ is only slightly less than $\Omega_e$. In a plane perpendicular to $\vec{k}$, two circles on the cones for $\vec{k}_1$ and $\vec{k}_2$ intersect at points $a$ and $b$ with the line $\overline{ab}$ parallel to $y'$ axis. As shown in Fig. 2(a), $\vec{k}_\alpha$ ($\alpha = 1, 2$) makes an angle $\theta_\alpha$ with the optic axis and has angular coordinates $(\psi_\alpha, \phi_\alpha)$ with $\vec{k}_{\alpha\perp}$ being its projection in the $x'y'$ plane. Each vector $\vec{k}_\alpha$ deviates from $z'$ axis only slightly so that $|(\Omega - \Omega_e)/\Omega_e| \ll 1$, $|\vec{k}_{\alpha\perp}|/k_\alpha \ll 1$ and $|\theta_\alpha - \theta| \ll 1$. Using approximations which agree with the $z'$ component of $\vec{k}_\alpha$ to terms of the order $k^2_{\alpha\perp}$ and the angle $\theta_\alpha$ to $(\theta_\alpha - \theta)^2$, one finds that $\vec{k}_{2\perp} = (q_{x'}, q_{y'})$ must satisfy $M(q_{x'} + N)^2 + M q^2_{y'} = L$.

> **C.3** Let $M > 0$. Evaluate $M$, $N$, and $L$ in terms of $\Omega$, $\Omega_e$, $\Omega_o$, $K_e$, $K_o$ and $N_e(\omega, \theta) = \dfrac{1}{n_e(\omega,\theta)}\dfrac{dn_e(\omega,\theta)}{d\theta}$ and the group velocities $u_o = \dfrac{d\omega_2}{dk_2}$ and $u_e = \dfrac{d\omega_1}{dk_1}$ for the **o** and **e** rays. Estimate the angle between the axis of the cone and $z'$, and also the angle of the cone in terms of $L$, $M$, $N$ and $K_o$. *(1.3pt)*

<!--fig:start-->
![[APhO_2021_theory_Q2_p4_f1.png]]
*Fig. 2: (a) Vector $\vec{k}_\alpha$ has angular coordinates $(\psi_\alpha, \phi_\alpha)$ in the $x'y'z'$ coordinate system with $\vec{k}_{\alpha\perp}$ being its projection in the $x'y'$ plane. Note that $\vec{k}_\alpha$ makes an angle $\theta_\alpha$ with OA. (b) Non-collinear splitting of an $\mathbf{e}$ ray into $\mathbf{e} + \mathbf{o}$ rays that form two cones. Line $\overline{ab}$ is parallel to the $y'$ axis.*
<!--fig:end-->

Problem **C.3** shows that a photon may split into two photons which when passing through points $a$ and $b$ are polarized in perpendicular directions. These two photons are called *entangled photon pair* because if one photon that passes $a$ (called $a$-photon) is polarized in a direction $\hat{x}'$, the other that passes $b$ (called $b$-photon) will be polarized in the direction $\hat{y}' \perp \hat{x}'$, and if the $a$-photon is polarized in $\hat{y}'$, then the $b$-photon will be polarized in $\hat{x}'$. The entangled photon-pair state can be prepared experimentally. It is a superposition of the above two alternative states and can be expressed as $\frac{1}{\sqrt{2}}(|\hat{x}'_a\rangle|\hat{y}'_b\rangle + |\hat{y}'_a\rangle|\hat{x}'_b\rangle)$. Here $|\hat{x}'_a\rangle|\hat{y}'_b\rangle$ represents the state when $a$-photon is polarized in $\hat{x}'$ direction and $b$-photon is polarized in $\hat{y}'$ direction; similar meaning applies to $|\hat{y}'_a\rangle|\hat{x}'_b\rangle$. The coefficient $1/\sqrt{2}$ can be viewed as the product of electric field amplitudes (expressed in suitable units) of $a$- and $b$-photons. As illustrated in Fig. 3, two linear polarizers 1 and 2 have transmission axes at angles $\alpha$ and $\beta$ respectively with respect to $\hat{x}'$. We may use them to perform coincidence measurement on the two photons that pass $a$ and $b$. Let the probability of simultaneously finding two photons passing through polarizers 1 and 2 be $P(\alpha, \beta)$. Alternatively, $P(\alpha, \beta)$ can also be regarded as being proportional to the product of intensities (after appropriate superpositions) of light passing through the two polarizers. Denote $\alpha + \pi/2$ and $\beta + \pi/2$ by $\alpha_\perp$ and $\beta_\perp$ respectively.

<!--fig:start-->
![[APhO_2021_theory_Q2_p4_f2.png]]
*Fig. 3: Two linear polarizers 1 and 2 for coincidence measurement of photons that pass $a$ and $b$.*
<!--fig:end-->

> **C.4** Consider the total electric field projected by linear polarizers. Find the probabilities $P(\alpha, \beta)$, $P(\alpha, \beta_\perp)$, $P(\alpha_\perp, \beta)$, and $P(\alpha_\perp, \beta_\perp)$. *(0.8pt)*

> **C.5** Assign $\sigma_a = 1$ when polarizer 1 with angle $\alpha$ finds an $a$-photon and $\sigma_a = -1$ when polarizer 1 with angle $\alpha_\perp$ finds an $a$-photon. Similarly, $\sigma_\beta = 1$ or $-1$ is assigned when polarizer 2 with angle $\beta$ or $\beta_\perp$ finds a $b$-photon. If $E(\alpha, \beta)$ denotes the average of $\sigma_a\sigma_b$, the quantity $S = |E(\alpha, \beta) - E(\alpha, \beta')| + |E(\alpha', \beta) + E(\alpha', \beta')|$ has important meaning. For classical theories of light, $S \le 2$. This is a variant form of Bell's inequality (the Clauser-Horne-Shimony-Holt inequality). Find the expression of $S$ and evaluate $S$ for the case $\alpha = \dfrac{\pi}{4}$, $\alpha' = 0$, $\beta = -\dfrac{\pi}{8}$, $\beta' = \dfrac{\pi}{8}$. Indicate if $S$ is consistent with the classical theories. *(0.5pt)*

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/16-xyzJaTiJkXiW_uReEqSmJwF2_a4gqQ/view)

**Topic:** [[Wave Optics]], [[Modern-Quantum Physics]], [[Electromagnetism]]
**Metodi:** [[Snell's Law (metodo)|Snell's Law]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Superposition Principle (metodo)|Superposition Principle]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Photon (object)|Photon]]

---


<div class="qlang-split" data-lang="it"></div>

### Tracciamento dei raggi e generazione di luce intricata

**Figura utile: **

$$\vec{A} \times (\vec{B} \times \vec{C}) = \vec{B}\,(\vec{A} \cdot \vec{C}) - \vec{C}\,(\vec{A} \cdot \vec{B})$$

#### Introduzione

Il campo elettrico è rappresentato da $\vec{E}$, il campo magnetico è rappresentato da $\vec{H}$, il campo elettrico è rappresentato da $\vec{D}$ e l'induzione magnetica è rappresentata da $\vec{B}$. Abbiamo $\vec{D} = \epsilon_0\vec{E} + \vec{P}$, con $\vec{P}$ che è la polarizzazione del mezzo e $\epsilon_0$ che è la permissività dello spazio libero. In questo problema vengono considerati solo i mezzi dielettrici non magnetici, quindi $\vec{B} = \mu_0\vec{H}$, con $\mu_0$ come permeabilità dello spazio libero. La densità di energia e la densità di flusso di energia associate al campo elettromagnetico sono indicate rispettivamente dal vettore $u_{em} = \tfrac{1}{2}(\vec{E} \cdot \vec{D} + \vec{H} \cdot \vec{B})$ e dal vettore $\vec{S} = \vec{E} \times \vec{H}$ di Poynting.

In media dielettrici omogenei, un'onda di luce monocromatica a piano può essere descritta con la sua frequenza angolare $\omega$, il vettore d'onda $\vec{k}$, $\vec{D}$ e $\vec{B}$. Secondo le equazioni di Maxwell, abbiamo $\vec{k} \times \vec{E} = \omega\vec{B}$ e $\vec{k} \times \vec{H} = -\omega\vec{D}$. Per tale onda, le variazioni di $\vec{D}$ e $\vec{B}$ con posizione $\vec{r}$ e tempo $t$ sono indicate dalle funzioni sinusoidali della fase $(\vec{k} \cdot \vec{r} - \omega t)$.

#### Parte A. Propagazione della luce nei media dielettrici isotropi (1,0 punti)

Se il mezzo è isotropo, abbiamo $\vec{P} = \chi\epsilon_0\vec{E}$ e $\vec{D} = \epsilon\vec{E}$, con $\chi$ e $\epsilon = \epsilon_0(1 + \chi)$ che sono rispettivamente la sensibilità elettrica e la permissività del mezzo. Per un'onda luminosa di frequenza angolare $\omega$ in tale mezzo, una data fase si propaga nella direzione $\vec{k}$ con una velocità (chiamata * velocità di fase*) $v_p = c/n$. Qui $c$ è la velocità della luce nel vuoto e $n$ è l'indice di rifrazione del mezzo. Si possono anche usare i raggi per rappresentare un tratto di onde di luce. La propagazione di un raggio luminoso è caratterizzata dalla direzione e dalla velocità $v_r$ del flusso di energia elettromagnetica.

Considera un'onda di luce a piana con frequenza angolare $\omega$ e vettore d'onda $\vec{k}$ in un mezzo dielettrico isotropo omogeneo.

> **A.1 ** Esprimere la sua velocità di fase $v_p$ in termini di $\epsilon$ e $\mu_0$. *(0.4pt)*

> **A.2** Qual è l'indice di rifrazione $n$ del mezzo dielettrico per l'onda? *(0.2pt)*

> **A.3** Qual è la direzione $\hat{S} \equiv \vec{S}/S$ e la velocità $v_r$ del suo flusso di energia elettromagnetica? *(0.4pt)*

#### Parte B. Propagazione della luce in media dielettrici uniaxiali (4,8 punti)

We now assume the dielectric medium to be uniaxial, i.e, it is electrically anisotropic along a special direction fixed in the medium, called the *optic axis*, which we presently call it the $z$ direction. In tal caso, il spostamento $\vec{D}$ e il campo elettrico $\vec{E}$ sono correlati da $D_x = \epsilon E_x$, $D_y = \epsilon E_y$ e $D_z = \epsilon' E_z$, dove gli assi $x$, $y$ e $z$ sono reciprocamente ortogonali. Di conseguenza, la velocità di fase di un'onda luminosa è anisotropa e dipende ulteriormente dalle direzioni di $\vec{k}$ e $\vec{D}$. Let $n_o = c\sqrt{\mu_0\epsilon}$ and $n_e = c\sqrt{\mu_0\epsilon'}$, answer the followings questions: **B.1**, **B.2**, and **B.3**.

> **B.1** Supponiamo che il vettore d'onda $\vec{k}$ di un'onda di luce a piano monocromatico sia nel piano $xz$ in modo che $\vec{k} = k(\sin\theta, 0, \cos\theta)$. In ciascun angolo $\theta$, quali direzioni di $\vec{D}$ e $\vec{B}$ sono ammesse per l'onda luminosa? Trova tutti gli indici di rifrazione possibili ed esprimere gli indici di rifrazione in termini di $\theta$, $n_o$ e $n_e$. Trova l'angolo $\theta$ per il quale è consentito un solo valore per l'indice di rifrazione. *(1.5pt)*

> **B.2** La polarizzazione di un'onda luminosa, cioè la direzione del suo campo elettrico $\vec{E}$, può essere perpendicolare (chiamata onda ordinaria o raggio *) o parallela (chiamata onda extraordinaria o raggio **) al piano $xz$. Per ciascuna delle onde di luce che si trovano in **B.1**, specificare la sua polarizzazione come vettore unitario e indicare se si tratta di un'onda ordinaria o straordinaria. Calcolare anche $\tan\alpha$, dove $\alpha$ è l'angolo tra $\vec{E}$ e $\vec{D}$ ($\alpha$ è positivo quando si passa da $\vec{E}$ a $\vec{D}$ è nel senso orario). *(0.8pt)*

> **B.3** Estendere i risultati di **B.1** e **B.2** al caso generale quando l'angolo tra $\vec{k}$ e la direzione positiva $z$ è ancora $\theta$, ma $\vec{k}$ non è nel piano $xz$. Trova tutti i valori possibili degli indici di rifrazione e delle polarizzazioni corrispondenti. *(0.6pt)*

In un mezzo uniaxiale, la direzione di $\vec{k}$ di un'onda luminosa può differire dalla direzione del raggio luminoso. La velocità di fase dell'onda è ancora data da $c/n$ con $n$ essendo l'indice di rifrazione lungo $\vec{k}$, mentre la velocità del raggio è definita congiuntamente dalla direzione e dal tasso di flusso di energia.

> ** B.4 ** Dopo i problemi ** B.1-3 **, si deve considerare un'onda luminosa con $\vec{k} = k(\sin\theta, 0, \cos\theta)$. L'angolo tra $\hat{k} \equiv \vec{k}/k$ e la direzione del raggio, $\hat{S}$, sia $\alpha_r$ ($\alpha_r$ è positivo quando si passa da $\hat{S}$ a $\hat{k}$ in senso orario). Trova tutti i valori possibili di $\tan\alpha_r$, velocità $v_r$ del raggio e $\hat{S}$. Con questi risultati, esprimere l'indice di raggi $n_s = c/v_r$ in termini di $\hat{S}$, $\hat{x}$, $\hat{z}$, $n_o$ e $n_e$. *(0.8pt)*

Si consideri la propagazione di un raggio luminoso da A a B attraverso un'interfaccia tra un mezzo isotropo, etichettato 1, e un mezzo anisotropo, etichettato 2, come mostrato nella figura. 1. L'interfaccia coincide con il piano $yz$, mentre il piano di incidenza è il piano $xz$. L' angolo di incidenza deve essere $\theta_1$. L'indice di rifrazione del mezzo 1 è $n$, mentre gli indici di rifrazione del mezzo 2 per gli assi $z_2$, $y_2$, $x_2$ sono $n_e$, $n_o$ e $n_o$, rispettivamente. Qui l'asse $y_2$ coincide con l'asse $y$. Il principio di Fermat afferma che il tempo di propagazione per il percorso che il raggio di luce va da A a B è minimo. Per la luce con polarizzazione parallela al piano $xz$ e incidente all'angolo $\theta_1$, il principio di Fermat porta alla seguente equazione:

$$\bar{A}(\tan\theta_2)^2 + \bar{B}\tan\theta_2 + \bar{C} = 0 \tag{1}$$

> **B.5** Trova $\bar{A}$, $\bar{B}$ e $\bar{C}$ in termini di $P_1$, $P_2$, $P_3$ e $n\sin\theta_1$, dove $P_1 = n_o^2\cos^2\phi + n_e^2\sin^2\phi$, $P_2 = n_o^2\sin^2\phi + n_e^2\cos^2\phi$ e $P_3 = (n_o^2 - n_e^2)\sin\phi\cos\phi$. - Da Eq. (1) trovare le corrispondenti $\tan\theta_2$ a due orientamenti speciali: $\phi = 0$ e $\phi = \pi/2$. *(1.1pt)*

<!--fig:start-->
![[APhO_2021_theory_Q2_p3_f1.png]]
*Fig. 1: Propagazione della luce da A a B attraverso un'interfaccia tra un mezzo isotropo 1 e un mezzo anisotropo 2.*
<!--fig:end-->

#### Parte C. Intraposizione della luce (4,2 punti)

In un mezzo non lineare, il campo elettrico $\vec{E}$ è correlato alla polarizzazione $\vec{P}$ da $P_i = (\epsilon - \epsilon_0)E_i + \sum_j \sum_k \chi^{(2)}_{ijk} E_j E_k$. Qui $i$, $j$, $k$ possono essere ognuna delle tre componenti $x$, $y$, $z$ e $\chi^{(2)}_{ijk}$, costanti che rappresentano la sensibilità non lineare di secondo ordine del mezzo. La non scomparsa di $\chi^{(2)}_{ijk}$ implica che, mentre un'onda luminosa attraversa un mezzo non lineare, può dividersi in due onde luminose.

Supponiamo che, poiché $\chi^{(2)}_{ijk}$ non sono tutti zero, il campo elettrico nel mezzo sia costituito da una sovrapposizione di tre onde piane di frequenze angolari $\omega$, $\omega_1$ e $\omega_2$, che si propagano con vettori d'onda $\vec{k}$, $\vec{k}_1$ e $\vec{k}_2$, rispettivamente. Supponiamo $\omega \ge \omega_2$ e $\omega_1 \ge \omega_2$.

> **C.1** Trovare tutte le possibili relazioni (conosciute come * condizioni di abbinamento di fase*) tra queste frequenze angolari e vettori d'onda. Considerando la luce come composta da fotoni, quali tipi di leggi di conservazione queste condizioni implicano per i tre fotoni coinvolti? Scrivere le equazioni che esprimono queste leggi di conservazione nel caso in cui un fotone con frequenza angolare $\omega$ e vettore d'onda $\vec{k}$ si divida in due fotoni di frequenze angolari $\omega_1$ e $\omega_2$, che si propaga con vettori d'onda $\vec{k}_1$ e $\vec{k}_2$, rispettivamente. *(0.8pt)*

> **C.2 ** Considera un'onda di luce in un mezzo uniaxiale. Indicare un raggio ordinario come **o** e un raggio straordinario come **e**. Esistono otto possibili modi di divisione per l'onda luminosa: $\mathbf{o} \to \mathbf{o} + \mathbf{o}$, $\mathbf{o} \to \mathbf{e} + \mathbf{o}$, $\mathbf{o} \to \mathbf{o} + \mathbf{e}$, $\mathbf{o} \to \mathbf{e} + \mathbf{e}$, $\mathbf{e} \to \mathbf{o} + \mathbf{o}$, $\mathbf{e} \to \mathbf{e} + \mathbf{o}$, $\mathbf{e} \to \mathbf{o} + \mathbf{e}$ e $\mathbf{e} \to \mathbf{e} + \mathbf{e}$. Supponiamo che gli indici di rifrazione $n_o$ e $n_e$ siano entrambe funzioni di aumento di $\omega$. Utilizzando le stesse notazioni per i vettori d'onda come nel problema **C.1** e considerando che $\vec{k}$, $\vec{k}_1$ e $\vec{k}_2$ sono collineari, indicare quale dei 8 modi di divisione non è possibile. *(0.8pt)*

Considera un raggio **e** che viaggia lungo la direzione $z'$ con il vettore d'onda $\vec{k}$ e $\omega = \Omega_p$ in un mezzo uniaxiale con indice di rifrazione $n_e < n_o$. Supponiamo che, in una divisione collineare $\mathbf{e} \to \mathbf{e} + \mathbf{o}$, le condizioni di abbinamento di fase siano realizzate con $k_1 = K_e$, $\omega_1 = \Omega_e$, $k_2 = K_o$ e $\omega_2 = \Omega_o$. Qui i sottoscrizioni 1 e 2 si riferiscono al raggio **e** e al raggio **o**. $\vec{k}_1$, $\vec{k}_2$ e $\vec{k}$ tutti punti nella direzione $z'$. Come mostrato nella figura. 2(a), l'asse ottico (OA) del mezzo si trova nel piano $x'z'$ e fa un angolo $\theta < \pi/2$ con l'asse $z'$. Pertanto, $n_e$ è una funzione di $\omega$ e $\theta$, cioè $n_e = n_e(\omega, \theta)$. Per lo stesso raggio **e** entrante con vettore d'onda $\vec{k}$ e $\omega = \Omega_p$, supponiamo che la sua divisione non collineare in raggi $\mathbf{e} + \mathbf{o}$ faccia separare questi ultimi due raggi ma rimanga su due coni con $\omega_1 = \omega_2 = \Omega$, $k_1 = k_2$, come mostrato alla figura. 2(b). Si noti che nella divisione collineare $\Omega_e$ è già vicino a $\Omega_o$, e qui $\Omega$ è solo leggermente inferiore a $\Omega_e$. In un piano perpendicolare a $\vec{k}$, due cerchi sui coni per $\vec{k}_1$ e $\vec{k}_2$ si intersecano nei punti $a$ e $b$ con la linea $\overline{ab}$ parallela all'asse $y'$. Come mostrato nella figura. 2(a), $\vec{k}_\alpha$ ($\alpha = 1, 2$) fa un angolo $\theta_\alpha$ con l'asse ottica e ha coordinate angolari $(\psi_\alpha, \phi_\alpha)$ con $\vec{k}_{\alpha\perp}$ che è la sua proiezione nel piano $x'y'$. Ogni vettore $\vec{k}_\alpha$ si allontana solo leggermente dall'asse $z'$ in modo che $|(\Omega - \Omega_e)/\Omega_e| \ll 1$, $|\vec{k}_{\alpha\perp}|/k_\alpha \ll 1$ e $|\theta_\alpha - \theta| \ll 1$. Usando approssimazioni che concordano con la componente $z'$ di $\vec{k}_\alpha$ in termini dell'ordine $k^2_{\alpha\perp}$ e l'angolo $\theta_\alpha$ a $(\theta_\alpha - \theta)^2$, si constata che $\vec{k}_{2\perp} = (q_{x'}, q_{y'})$ deve soddisfare $M(q_{x'} + N)^2 + M q^2_{y'} = L$.

> **C.3 ** Lasciate $M > 0$. Valutare $M$, $N$ e $L$ in termini di $\Omega$, $\Omega_e$, $\Omega_o$, $K_e$, $K_o$ e $N_e(\omega, \theta) = \dfrac{1}{n_e(\omega,\theta)}\dfrac{dn_e(\omega,\theta)}{d\theta}$ e le velocità di gruppo $u_o = \dfrac{d\omega_2}{dk_2}$ e $u_e = \dfrac{d\omega_1}{dk_1}$ per i raggi ** o ** e ** e**. Calcolare l'angolo tra l'asse del cono e $z'$, nonché l'angolo del cono in termini di $L$, $M$, $N$ e $K_o$. *(1.3pt)*

<!--fig:start-->
![[APhO_2021_theory_Q2_p4_f1.png]]
*Fig. 2: a) Il vettore $\vec{k}_\alpha$ ha coordinate angolari $(\psi_\alpha, \phi_\alpha)$ nel sistema di coordinate $x'y'z'$ con $\vec{k}_{\alpha\perp}$ la sua proiezione nel piano $x'y'$. Si noti che $\vec{k}_\alpha$ fa un angolo $\theta_\alpha$ con OA. b) Divisione non collineare di un raggio $\mathbf{e}$ in raggi $\mathbf{e} + \mathbf{o}$ che formano due coni. La linea $\overline{ab}$ è parallela all'asse $y'$.*
<!--fig:end-->

Il problema **C.3** mostra che un fotone può dividersi in due fotoni che, passando attraverso i punti $a$ e $b$, sono polarizzati in direzioni perpendicolari. Questi due fotoni sono chiamati *parete di fotoni intrappolati* perché se un fotone che passa $a$ (chiamato $a$-fotone) è polarizzato in una direzione $\hat{x}'$, l'altro che passa $b$ (chiamato $b$-fotone) sarà polarizzato nella direzione $\hat{y}' \perp \hat{x}'$, e se il $a$-fotone è polarizzato in $\hat{y}'$, allora il $b$-fotone sarà polarizzato in $\hat{x}'$. Lo stato di coppia di fotoni intrecciati può essere preparato sperimentalmente. Si tratta di una sovrapposizione dei due stati alternativi di cui sopra e può essere espressa come $\frac{1}{\sqrt{2}}(|\hat{x}'_a\rangle|\hat{y}'_b\rangle + |\hat{y}'_a\rangle|\hat{x}'_b\rangle)$. Qui $|\hat{x}'_a\rangle|\hat{y}'_b\rangle$ rappresenta lo stato in cui $a$-fotone è polarizzato in direzione $\hat{x}'$ e $b$-fotone è polarizzato in direzione $\hat{y}'$; un significato simile si applica a $|\hat{y}'_a\rangle|\hat{x}'_b\rangle$. Il coefficiente $1/\sqrt{2}$ può essere considerato il prodotto delle amplitudini del campo elettrico (espresse in unità appropriate) dei fotoni $a$- e $b$. Come illustrato in Figura 1. 3, due polarizzatori lineari 1 e 2 hanno assi di trasmissione rispettivamente a angoli $\alpha$ e $\beta$ rispetto a $\hat{x}'$. Possiamo usarle per eseguire la misurazione della coincidenza sui due fotoni che passano $a$ e $b$. La probabilità di trovare contemporaneamente due fotoni che passano attraverso i polarizzatori 1 e 2 sia $P(\alpha, \beta)$. In alternativa, $P(\alpha, \beta)$ può essere considerato anche proporzionale al prodotto delle intensità (dopo le superposizioni appropriate) della luce che attraversa i due polarizzatori. Denotare $\alpha + \pi/2$ e $\beta + \pi/2$ rispettivamente con $\alpha_\perp$ e $\beta_\perp$.

<!--fig:start-->
![[APhO_2021_theory_Q2_p4_f2.png]]
*Fig. 3: Due polarizzatori lineari 1 e 2 per la misurazione della coincidenza dei fotoni che passano $a$ e $b$.*
<!--fig:end-->

> **C.4 ** Considera il campo elettrico totale proiettato dai polarizzatori lineari. Trova le probabilità $P(\alpha, \beta)$, $P(\alpha, \beta_\perp)$, $P(\alpha_\perp, \beta)$ e $P(\alpha_\perp, \beta_\perp)$. *(0.8pt)*

> **C.5** Assegna $\sigma_a = 1$ quando il polarizzatore 1 con angolo $\alpha$ trova un $a$-fotone e $\sigma_a = -1$ quando il polarizzatore 1 con angolo $\alpha_\perp$ trova un $a$-fotone. Allo stesso modo, $\sigma_\beta = 1$ o $-1$ viene assegnato quando il polarizzatore 2 con angolo $\beta$ o $\beta_\perp$ trova un fotone $b$. Se $E(\alpha, \beta)$ indica la media di $\sigma_a\sigma_b$, la quantità $S = |E(\alpha, \beta) - E(\alpha, \beta')| + |E(\alpha', \beta) + E(\alpha', \beta')|$ ha un significato importante. Per le teorie classiche della luce, $S \le 2$. Questa è una variante della disuguaglianza di Bell (la disuguaglianza Clauser-Horne-Shimony-Holt). Trova l'espressione di $S$ e valuta $S$ per il caso $\alpha = \dfrac{\pi}{4}$, $\alpha' = 0$, $\beta = -\dfrac{\pi}{8}$, $\beta' = \dfrac{\pi}{8}$. Indicare se $S$ è coerente con le teorie classiche. *(0.5pt)*

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/16-xyzJaTiJkXiW_uReEqSmJwF2_a4gqQ/view)

**Topic:** [[Wave Optics]], [[Modern-Quantum Physics]], [[Electromagnetism]]
**Metodi:** [[Snell's Law (metodo)|Snell's Law]], [[Vector Decomposition (metodo)|Vector Decomposition]], [[Superposition Principle (metodo)|Superposition Principle]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Photon (object)|Photon]]

---



<span class="atom-split" id="q03" data-atom="q03" data-title="APhO 2021 — Teorica — Quesito 3" data-tags="kg/prova,paese/Asia,comp/APhO,topic/magnetism,argomento/elettromagnetismo,difficolta/5,multidisciplina/multi,object/magnetic-dipole,object/magnet"></span>

<div class="qlang-switch" data-default="en"></div>



### Magnetic Levitation

#### Useful Information

(1) Directional derivative of a spatial function $f(\vec{r})$, given by $\vec{\nabla} f(\vec{r})$, has

$$\vec{\nabla} f \equiv \left(\hat{x}\frac{\partial}{\partial x} + \hat{y}\frac{\partial}{\partial y} + \hat{z}\frac{\partial}{\partial z}\right) f(\vec{r}),$$

where $\dfrac{\partial}{\partial x} f(\vec{r})$ denotes a partial derivative of $f(\vec{r})$ with respect to $x$ while keeping $y$ and $z$ unchanged.

(2) Integral:

$$\int_0^\infty dt\,\frac{(a + pt)}{[(a + pt)^2 + (b + qt)^2]^{3/2}} = \frac{1}{bp - aq}\left(\frac{b}{\sqrt{a^2 + b^2}} - \frac{q}{\sqrt{p^2 + q^2}}\right).$$

#### Introduction

We intend to study the motion of a small magnetic dipole in the vicinity of a conducting thin film. In the problem text, the terms dipole and monopole are to be regarded, respectively, as synonymous with magnetic dipole and magnetic monopole.

A dipole consisting of a spherical permanent magnet with a uniform magnetization $\vec{M}$ (magnetic dipole moment per unit volume) and a uniform mass density $\rho_0$ may be treated as a point-like object when its radius $R$ is small. Such a dipole representation is good for describing the magnetic field that the dipole produces everywhere outside of its sphere. The representation is also a good approximation for the force acting on the dipole from an applied magnetic field, whenever distances of field sources from the dipole are much larger than $R$.

A point-like dipole can be considered as a pair of monopoles carrying negative and positive magnetic charges $-q_m$ and $q_m$ respectively. The pair has a vanishingly small separation, but possesses a finite magnetic dipole moment $\vec{m} = q_m\vec{\delta}_m$. Here $\vec{\delta}_m$ is the displacement vector from the south monopole ($-q_m$) to the north monopole ($+q_m$). The position of the point-like dipole is chosen to be that of the north monopole.

The magnetic field $\vec{B}_{mp}$ from a monopole $q_m$ is assumed to have a Coulombic form, given by

$$\vec{B}_{mp} = \frac{\mu_0 q_m}{4\pi r^2}\,\hat{r}, \tag{1}$$

where $\vec{r}$ is the displacement vector from $q_m$ to the observation point (or field point), $\hat{r}$ is the unit vector $\hat{r} = \vec{r}/r$, and $\mu_0$ is the free-space permeability. The force exerted by an applied magnetic field $\vec{B}'$ on $q_m$ is given by $\vec{F} = q_m\vec{B}'$. It follows, from extending the concept of the monopole field just described in Eq.(1), that the magnetic field $\vec{B}$ from a point-dipole is derivable from a scalar potential $\Phi$, given by the form $\vec{B} = -\vec{\nabla}\Phi$. The scalar potential $\Phi$ is also called the magnetic potential.

The conducting thin film is uniform with thickness $d$ in the $z$ direction (Fig. 1). It extends horizontally in $x$ and $y$ directions to infinity and its upper surface is located at a distance $h$ from either a point monopole or a dipole. We consider only the case $h \gg d$. This allows us to take the electric current density induced in the film to be independent of $z$. We also assume that the displacement current effect to be negligible.

<!--fig:start-->
![[APhO_2021_theory_Q3_p2_f1.png]]
*Fig.1 A monopole $q_m$ appears at a distance $h$ from a conducting thin film of thickness $d$. The origin of the coordinates is located on the upper surface.*
<!--fig:end-->

The problem is divided into three parts. In Part A, the system consists of a monopole and a thin film, while in Parts B and C, a moving dipole and a thin film.

We choose the $z = 0$ plane to coincide with the upper surface of the thin film. The vector $\vec{\rho} = x\hat{x} + y\hat{y} = \rho\hat{\rho}$ denotes the in-plane position vector.

#### Part A. Sudden appearance of a magnetic monopole: initial response and subsequent time evolution of the response in the thin film (3.0 points)

We first focus on the initial response of the conducting thin film when at time $t = 0$ a north monopole $q_m$ appears suddenly at the position $\vec{r}_{mp} = h\hat{z}$ ($h > 0$), as is shown in Fig. 1. The monopole remains stationary in all later times ($t > 0$).

Our interest here is the initial total magnetic field $\vec{B}(\vec{\rho}, z)$ in regions $z \ge 0$ and $z \le -d$, and the induced electric current density in the thin film. The total magnetic field $\vec{B} = \vec{B}_{mp} + \vec{B}'$, where magnetic fields $\vec{B}_{mp}$ and $\vec{B}'$ are, respectively, due to the monopole and the induced current in the thin film. The initial $\vec{B}(\vec{\rho}, z)$ we refer to is at the time $t_0$, which falls within the interval $h/c \le t_0 \ll \tau_c$. Here $\tau_c$ is a time constant characterizing the subsequent response of the thin film, and $c$ is the speed of light in vacuum. In this problem, we take the limit $h/c \to 0$ and hence let $t_0 = 0$.

The calculation of the initial total magnetic field $\vec{B}(\vec{\rho}, z)$ (at $t_0 = 0$) is facilitated by introducing an image monopole. For $\vec{B}(\vec{\rho}, z)$ in the region $z \ge 0$, the image monopole has a magnetic charge $q_m$ and is located at $z = -h$. On the other hand, for $\vec{B}(\vec{\rho}, z)$ in the region $z \le -d$, the image monopole has a magnetic charge $-q_m$ and is located at $z = h$.

**Initial response**

> **A.1** Obtain the initial total magnetic field $\vec{B}(\vec{\rho}, z)$ in $z \ge 0$ at $t_0 = 0$. *(0.4pt)*

> **A.2** Obtain the initial total magnetic field $\vec{B}(\vec{\rho}, z)$ in $z \le -d$ at $t_0 = 0$. *(0.2pt)*

> **A.3** Find the initial magnetic flux $\Phi_B$ through surfaces at $z = 0$, and at $z = -d$. *(0.4pt)*

> **A.4** Obtain the initial induced electric current density $\vec{j}(\vec{\rho})$ in the conducting thin film at $t_0 = 0$. *(0.6pt)*

For $t > 0$, the total magnetic field $\vec{B}$ becomes $\vec{B}(\vec{\rho}, z; t) = \vec{B}_{mp}(\vec{\rho}, z) + \vec{B}'(\vec{\rho}, z; t)$, by superposition, with $\vec{B}'(\vec{\rho}, z; t)$ due to the induced electric current in the thin film. You are required below to obtain an equation for $B'_z(\rho, z; t)$ near the $z = 0$ thin film surface. The time-evolution behavior of $B'_z$ would reveal a moving image-monopole picture for the description of the $\vec{B}'$ field near $z \approx 0$ in $t > 0$.

The equation for $B'_z$ inside the thin film is given below,

$$\frac{\partial^2 B'_z(\rho, z; t)}{\partial z^2} = \mu_0\sigma\frac{\partial B'_z(\rho, z; t)}{\partial t}. \tag{2}$$

This equation has been obtained from imposing inside the thin film the Maxwell equation and the Ohmic behavior of the conducting thin film ($\vec{j} = \sigma\vec{E}$, where $\sigma$ is the electrical conductivity) while neglecting the displacement-current effect. Term being neglected on the left-hand side of Eq.(2) is $\dfrac{1}{\rho}\dfrac{\partial}{\partial\rho}\left(\rho\dfrac{\partial B'_z}{\partial\rho}\right)$, based on the $h \gg d$ condition.

**Subsequent response**

> **A.5** Obtain from Eq. (2) an equation of $B'_z(\rho, z; t)$ near $z \approx 0$. The equation contains first partial derivatives of $B'_z(\rho, z; t)$ with respect to $z$, and, separately, to $t$. *(0.6pt)*

> **A.6** Solve for the general form of $B'_z(\rho, z; t)$ near $z \approx 0$ in $t > 0$. *(0.4pt)*

> **A.7** Show that your solution in **A.6** reveals a moving image-monopole picture for the magnetic field $B'_z(\rho, z \approx 0; t)$, with a downwardly moving velocity. Find the speed $v_0$ of the image monopole in terms of known parameters from the problem text. *(0.4pt)*

#### Part B. Magnetic force acting on a point-like dipole moving with a constant velocity and at a constant h (4.0 points)

The moving image-monopole concept developed in **A.7** for $B'_z$ near $z \approx 0$ can be assumed to hold also for the $\vec{B}'$ field in the $z \ge 0$ region. This assumption is good as long as the time evolution is sufficiently slow in the conducting thin film response.

<!--fig:start-->
![[APhO_2021_theory_Q3_p3_f1.png]]
*Fig. 2 A monopole $q_m$ moves with a constant velocity $\vec{v}$ and a constant height $h$ from the conducting thin film. As shown are its coordinates at $t = 0$.*
<!--fig:end-->

A monopole $q_m$ (Fig. 2) is caused to move in a constant velocity $v\hat{x}$, with $v \ll c$, and a constant height, at $z = h$, motion up to the present moment ($t = 0$). Its present coordinates $(x, y)$ are $(0, 0)$. Our focus is on the magnetic potential $\Phi_+$ due to all image monopoles generated by this moving monopole along its trajectory.

By splitting $q_m$'s trajectory into discrete time steps (a very small time step $\tau$), we replace the motion of the $q_m$ by a hopping at the beginning moment of each time step. The hopping is represented by a simultaneous removal and creation of the monopoles. The position of the created monopole coincides with a point on its trajectory right at the beginning moment of this time step. Thus the position of the removed monopole coincides with its trajectory position at the beginning moment of the previous time step. This is achieved by a simultaneous sudden appearance of two magnetic monopoles: $q_m$ and $-q_m$ at, respectively, the trajectory positions corresponding to the beginning moments of this and the previous time step. The two positions are separated by a hopping distance $\Delta x = v\tau$. This time-step approach facilitates the determination of all the image magnetic monopoles, and their positions, that are generated in all the time steps.

**A moving monopole**

> **B.1** Write down the present ($t = 0$) positions of all the image monopoles of the types $q_m$ and $-q_m$. The beginning moments of the time steps are at $t = -n\tau$, where $n \ge 0$. *(0.8pt)*

> **B.2** Find the summation form of the magnetic potential $\Phi_+(x, z)$ at $t = 0$ from all the image monopoles in **B.1**. Calculate $\Phi_+(x, z)$. *(0.7pt)*

<!--fig:start-->
![[APhO_2021_theory_Q3_p4_f1.png]]
*Fig. 3 A dipole with an **upward-pointing** magnetic dipole moment $\vec{m}$ moves with a constant $\vec{v}$ and a constant height $h$ from the conducting thin film. As shown are its coordinates at $t = 0$.*
<!--fig:end-->

Now consider a point-like moving magnetic dipole as shown in Fig. 3. The dipole, with a dipole moment $\vec{m} = m\hat{z}$, is caused to move in a constant velocity $v\hat{x}$, and a constant height ($z = h$) motion up to the present moment ($t = 0$), where its present coordinates are at $(0, 0)$. The point-like dipole can be represented by two slightly displaced monopoles as has been mentioned in the Introduction section. The location of the magnetic dipole is chosen to be that of the north monopole, and $\vec{m}$ is assumed kept fixed.

**A moving dipole**

> **B.3** Find the force $\vec{F}$ acting upon the point-like magnetic dipole by the conducting thin film at $t = 0$. *(1.5pt)*

**Relation between $v_0$ and $v$**

For the numerical evaluation in this Part below, we consider a conducting thin film that is made of copper, such that $\sigma = 5.9 \times 10^7\ \Omega^{-1}\text{m}^{-1}$, $d = 0.50\ \text{cm}$, and $h = 5.0\ \text{cm}$.

> **B.4** Calculate the value of $v_0$, the speed of the image dipole as according to **A.7**. *(0.3pt)*

It is known that the penetration depth $\delta$ (called skin depth), which distance an electromagnetic wave can penetrate into a conducting slab, depends on the angular frequency $\omega$ of the wave. The dependence is given by

$$\delta = \sqrt{\frac{2}{\omega\mu_0\sigma}}. \tag{3}$$

For the consideration below, we take $\omega = v_L/h$, where $v_L$ equals the larger velocity of $v$ and $v_0$.

> **B.5** Obtain the $v$ dependence of $v_0(v)$ in both the small and the large $v$ regimes. *(0.4pt)*

> **B.6** Obtain the critical velocity $v = v_c$ at which the two regimes in **B.5** meet. *(0.3pt)*

#### Part C. Motion of the magnetic dipole when the conducting thin film is superconducting (3.0 points)

The consideration above can be applied to the case of type-I superconductors, where magnetic fields are completely repelled from the superconductors (the Meissner effect) at all times, by taking the limit that electrical conductivity $\sigma \to \infty$.

Here we consider a point-like magnetic dipole with a **horizontal** magnetic dipole moment $\vec{m} = m\hat{x}$, a mass $M_0$, and located at $(x, y, z) = (0, 0, h)$. We focus on vertical motions of the magnetic dipole under the action of a gravitational field, with gravitational acceleration $\vec{g} = -g\hat{z}$. Weak coupling between the given dipole orientation and its center-of-mass motion is assumed and is neglected. As such, we fix the magnetic dipole moment, as is given above, for our considerations below. In addition, we assume an ultra-high vacuum environment so that no damping to the motion from the residual air needs to be considered.

> **C.1** Find the equilibrium distance $h_0$ of the dipole from the superconducting thin film. *(1.2pt)*

> **C.2** Find the dipole angular frequency $\Omega$ of oscillations about the equilibrium. *(0.8pt)*

Physical parameters for a spherical permanent magnet are as follows: radius $R = 1.0\ \mu\text{m}$, mass density $\rho_0 = 7400\ \text{kg m}^{-3}$, $g = 9.8\ \text{m s}^{-2}$, $\mu_0 = 4\pi \times 10^{-7}\ \text{TA}^{-1}\text{m}$, and magnetization $|\vec{M}| = 75 \times 10^{-2}\ \text{T}/\mu_0$.

> **C.3** Calculate the value of $h_0$. *(0.7pt)*

> **C.4** Calculate the value of $\Omega$. *(0.3pt)*

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1v8fHNf9Y1akgSvCsmcvWpVjprPiQha5_/view)

**Topic:** [[Magnetism]], [[Electromagnetism]], [[Oscillations & Waves]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Magnetic Dipole (object)|Magnetic Dipole]], [[Magnet (object)|Magnet]]


<div class="qlang-split" data-lang="it"></div>

### Levitamento magneto

#### Informazioni utili

(1) La derivata direzionale di una funzione spaziale $f(\vec{r})$, data da $\vec{\nabla} f(\vec{r})$, ha

$$\vec{\nabla} f \equiv \left(\hat{x}\frac{\partial}{\partial x} + \hat{y}\frac{\partial}{\partial y} + \hat{z}\frac{\partial}{\partial z}\right) f(\vec{r}),$$

in cui $\dfrac{\partial}{\partial x} f(\vec{r})$ indica una derivata parziale di $f(\vec{r})$ rispetto a $x$ mantenendo invariati $y$ e $z$.

(2) Integral:

$$\int_0^\infty dt\,\frac{(a + pt)}{[(a + pt)^2 + (b + qt)^2]^{3/2}} = \frac{1}{bp - aq}\left(\frac{b}{\sqrt{a^2 + b^2}} - \frac{q}{\sqrt{p^2 + q^2}}\right).$$

#### Introduzione

Intendiamo studiare il movimento di un piccolo dipolo magnetico nelle vicinanze di un film sottile conduttore. Nel testo del problema, i termini dipole e monopole devono essere considerati, rispettivamente, come sinonimi di dipole magnetico e di monopole magnetico.

Un dipolo costituito da un magnete permanente sferevole con una magnetizzazione uniforme $\vec{M}$ (momento di dipolo magnetico per unità di volume) e una densità di massa uniforme $\rho_0$ può essere trattato come un oggetto puntuale quando il suo raggio $R$ è piccolo. Una simile rappresentazione dipolo è utile per descrivere il campo magnetico che il dipolo produce ovunque al di fuori della sua sfera. La rappresentazione rappresenta anche una buona approssimazione della forza che agisce sul dipolo da un campo magnetico applicato, quando le distanze delle fonti di campo dal dipolo sono molto più grandi di $R$.

Un dipolo a punto può essere considerato come una coppia di monopoli che trasportano rispettivamente cariche magnetiche negative e positive $-q_m$ e $q_m$. La coppia ha una separazione scarsamente piccola, ma possiede un momento di dipolo magnetico finito $\vec{m} = q_m\vec{\delta}_m$. Qui $\vec{\delta}_m$ è il vettore di spostamento dal monopolio meridionale ($-q_m$) al monopolio nord ($+q_m$). La posizione del dipolo punto-simile è scelto per essere quello del monopolio nord.

Il campo magnetico $\vec{B}_{mp}$ di un monopole $q_m$ si presume abbia una forma coulombica, data da

$$\vec{B}_{mp} = \frac{\mu_0 q_m}{4\pi r^2}\,\hat{r}, \tag{1}$$

se $\vec{r}$ è il vettore di spostamento da $q_m$ al punto di osservazione (o punto di campo), $\hat{r}$ è il vettore unitario $\hat{r} = \vec{r}/r$ e $\mu_0$ è la permeabilità nello spazio libero. La forza esercitata da un campo magnetico applicato $\vec{B}'$ su $q_m$ è data da $\vec{F} = q_m\vec{B}'$. Dall'estensione del concetto di campo monopolistico appena descritto in Eq.(1), si deduce che il campo magnetico $\vec{B}$ da un punto diopo è derivabile da un potenziale scalare $\Phi$, dato dalla forma $\vec{B} = -\vec{\nabla}\Phi$. Il potenziale scalare $\Phi$ è anche chiamato potenziale magnetico.

Il film sottile conduttore è uniforme con spessore $d$ nella direzione $z$ (Fig. 1). Si estende orizzontalmente nelle direzioni $x$ e $y$ fino all'infinito e la sua superficie superiore si trova a una distanza $h$ da un monopolio di punto o da un dipolo. Si tratta solo del caso $h \gg d$. Questo ci permette di prendere la densità di corrente elettrica indotta nel film per essere indipendente da $z$. Supponiamo anche che l'effetto della corrente di spostamento sia trascurabile.

<!--fig:start-->
![[APhO_2021_theory_Q3_p2_f1.png]]
*Fig.1 Un monopole $q_m$ appare a una distanza $h$ da un sottile film di spessore $d$. L'origine delle coordinate si trova sulla superficie superiore.*
<!--fig:end-->

Il problema è diviso in tre parti. Nella parte A, il sistema è costituito da un monopolio e da un film sottile, mentre nelle parti B e C, da un dipolo in movimento e da un film sottile.

Scegliamo il piano $z = 0$ per coincidere con la superficie superiore del film sottile. Il vettore $\vec{\rho} = x\hat{x} + y\hat{y} = \rho\hat{\rho}$ indica il vettore di posizione in piano.

#### Parte A. Aparizione improvvisa di un monopolio magnetico: risposta iniziale e successiva evoluzione temporale della risposta nel film sottile (3.0 punti)

Si concentra innanzitutto sulla risposta iniziale del film sottile conduttore quando al tempo $t = 0$ un monopolio nord $q_m$ appare improvvisamente alla posizione $\vec{r}_{mp} = h\hat{z}$ ($h > 0$), come mostrato nella figura. 1. Il monopolio rimane stazionario in tutti i tempi successivi ($t > 0$).

Il nostro interesse è il campo magnetico totale iniziale $\vec{B}(\vec{\rho}, z)$ nelle regioni $z \ge 0$ e $z \le -d$, e la densità di corrente elettrica indotta nel film sottile. Il campo magnetico totale $\vec{B} = \vec{B}_{mp} + \vec{B}'$, dove i campi magnetici $\vec{B}_{mp}$ e $\vec{B}'$ sono, rispettivamente, dovuti al monopolio e alla corrente indotta nel film sottile. L'iniziale $\vec{B}(\vec{\rho}, z)$ a cui ci riferisce è il tempo $t_0$, che rientra nell'intervallo $h/c \le t_0 \ll \tau_c$. Qui $\tau_c$ è una costante temporale che caratterizza la risposta successiva del film sottile, e $c$ è la velocità della luce nel vuoto. In questo problema, prendiamo il limite $h/c \to 0$ e quindi lasciamo $t_0 = 0$.

Il calcolo del campo magnetico totale iniziale $\vec{B}(\vec{\rho}, z)$ (a $t_0 = 0$) è facilitato mediante l'introduzione di un monopolio di immagine. Per $\vec{B}(\vec{\rho}, z)$ nella regione $z \ge 0$, il monopolio di immagine ha una carica magnetica $q_m$ e si trova a $z = -h$. D'altra parte, per $\vec{B}(\vec{\rho}, z)$ nella regione $z \le -d$, il monopolio di immagine ha una carica magnetica $-q_m$ e si trova a $z = h$.

**Resposizione iniziale**

> **A.1 ** Ottieni il campo magnetico totale iniziale $\vec{B}(\vec{\rho}, z)$ in $z \ge 0$ a $t_0 = 0$. *(0.4pt)*

> **A.2** Ottieni il campo magnetico totale iniziale $\vec{B}(\vec{\rho}, z)$ in $z \le -d$ a $t_0 = 0$. *(0.2pt)*

> **A.3** Trova il flusso magnetico iniziale $\Phi_B$ attraverso le superfici a $z = 0$ e a $z = -d$. *(0.4pt)*

> **A.4 ** Ottieni la densità iniziale di corrente elettrica indotta $\vec{j}(\vec{\rho})$ nel film sottile conduttore a $t_0 = 0$. *(0.6pt)*

Per $t > 0$, il campo magnetico totale $\vec{B}$ diventa $\vec{B}(\vec{\rho}, z; t) = \vec{B}_{mp}(\vec{\rho}, z) + \vec{B}'(\vec{\rho}, z; t)$, per superposizione, con $\vec{B}'(\vec{\rho}, z; t)$ a causa della corrente elettrica indotta nel film sottile. Si richiede di ottenere un'equazione per $B'_z(\rho, z; t)$ vicino alla superficie del film sottile $z = 0$. Il comportamento di evoluzione temporale di $B'_z$ rivelerebbe un'immagine in movimento monopole per la descrizione del campo $\vec{B}'$ vicino a $z \approx 0$ in $t > 0$.

L'equazione per $B'_z$ all'interno del film sottile è riportata di seguito,

$$\frac{\partial^2 B'_z(\rho, z; t)}{\partial z^2} = \mu_0\sigma\frac{\partial B'_z(\rho, z; t)}{\partial t}. \tag{2}$$

Questa equazione è stata ottenuta imponendo all'interno del film sottile l'equazione di Maxwell e il comportamento Ohmico del film sottile conduttore ($\vec{j} = \sigma\vec{E}$, dove $\sigma$ è la conducibilità elettrica) trascurando l'effetto di spostamento-corente. Il termine trascurato sul lato sinistro di Eq.(2) è $\dfrac{1}{\rho}\dfrac{\partial}{\partial\rho}\left(\rho\dfrac{\partial B'_z}{\partial\rho}\right)$, basato sulla condizione $h \gg d$.

**Resposizione successiva**

> **A.5 ** Ottenere da Eq. (2) un'equazione di $B'_z(\rho, z; t)$ vicino a $z \approx 0$. L'equazione contiene le prime derivate parziali di $B'_z(\rho, z; t)$ rispetto a $z$ e, separatamente, a $t$. *(0.6pt)*

> **A.6** Risolvi la forma generale di $B'_z(\rho, z; t)$ vicino a $z \approx 0$ in $t > 0$. *(0.4pt)*

> **A.7** Mostra che la soluzione in **A.6** rivela un'immagine in movimento monopole per il campo magnetico $B'_z(\rho, z \approx 0; t)$, con una velocità in movimento verso il basso. Trova la velocità $v_0$ del monopolio di immagine in termini di parametri noti dal testo del problema. *(0.4pt)*

#### Parte B. Forza magnetica che agisce su un dipolo a forma di punto in movimento a velocità costante e a una costante h (4,0 punti)

Il concetto di monopolio di immagine in movimento sviluppato in **A.7** per $B'_z$ vicino a $z \approx 0$ può essere presunto per il campo $\vec{B}'$ nella regione $z \ge 0$. Questa ipotesi è buona finché l'evoluzione temporale è sufficientemente lenta nella risposta del film sottile conduttore.

<!--fig:start-->
![[APhO_2021_theory_Q3_p3_f1.png]]
*Fig. 2 Un monopole $q_m$ si muove con una velocità costante $\vec{v}$ e con un'altezza costante $h$ dal film sottile conduttore. Come mostrato, le sue coordinate sono $t = 0$.*
<!--fig:end-->

Un monopolio $q_m$ (Fig. 2) si fa muovere a velocità costante $v\hat{x}$, con $v \ll c$, e a altezza costante, a $z = h$, fino al momento presente ($t = 0$). Le sue attuali coordinate $(x, y)$ sono $(0, 0)$. La nostra attenzione è sul potenziale magnetico $\Phi_+$ dovuto a tutti i monopoli di immagine generati da questo monopole in movimento lungo la sua traiettoria.

Dividendo la traiettoria di $q_m$ in passi temporali discreti (un piccolo passo temporale $\tau$), sostituisco il movimento del $q_m$ con un salto al momento iniziale di ogni passo temporale. Il salto è rappresentato dalla rimozione e dalla creazione simultanei dei monopoli. La posizione del monopolio creato coincide con un punto della sua traiettoria proprio all'inizio di questo passo temporale. La posizione del monopolio rimosso coincide quindi con la sua posizione di traiettoria al momento iniziale del passaggio temporale precedente. Ciò è ottenuto mediante l'apparizione simultanea improvvisa di due monopoli magnetici: $q_m$ e $-q_m$ rispettivamente alle posizioni di traiettoria corrispondenti ai momenti di inizio di questo e del passaggio temporale precedente. Le due posizioni sono separate da una distanza di salto $\Delta x = v\tau$. Questo approccio a tempo facilita la determinazione di tutti i monopoli magnetici dell'immagine e delle loro posizioni, che vengono generati in tutti i passi temporali.

**Un monopolio mobile**

> **B.1** Scrivi le posizioni presenti ($t = 0$) di tutti i monopoli di immagini dei tipi $q_m$ e $-q_m$. I momenti di inizio dei passaggi temporali sono $t = -n\tau$, dove $n \ge 0$. *(0.8pt)*

> **B.2** Trova la forma di somma del potenziale magnetico $\Phi_+(x, z)$ a $t = 0$ da tutti i monopoli di immagine di **B.1**. Calcolare $\Phi_+(x, z)$. *(0.7pt)*

<!--fig:start-->
![[APhO_2021_theory_Q3_p4_f1.png]]
*Fig. 3 Un dipolo con un momento di dipolo magnetico ** puntato verso l'alto ** $\vec{m}$ si muove con una costante $\vec{v}$ e una costante altezza $h$ dal film sottile conduttore. Come mostrato, le sue coordinate sono $t = 0$.*
<!--fig:end-->

Ora consideriamo un dipolo magnetico in movimento simile a un punto come mostrato nella figura. 3. Il dipolo, con un momento dipolo $\vec{m} = m\hat{z}$, si muove a velocità costante $v\hat{x}$, e a altezza costante ($z = h$) fino al momento presente ($t = 0$), dove le sue coordinate attuali sono a $(0, 0)$. Il dipolo a punto può essere rappresentato da due monopoli leggermente spostati come è stato menzionato nella sezione Introduzione. La posizione del dipolo magnetico è scelta per essere quella del monopolio nord, e $\vec{m}$ è presumita mantenuta fissa.

**Un dipolo in movimento**

> **B.3** Trova la forza $\vec{F}$ che agisce sul dipolo magnetico a forma di punto con il film sottile conduttore a $t = 0$. *(1.5pt)*

**Relazione tra $v_0$ e $v$**

Per la valutazione numerico di questa parte di seguito, consideriamo un film tenuto conduttore che è fatto di rame, come $\sigma = 5.9 \times 10^7\ \Omega^{-1}\text{m}^{-1}$, $d = 0.50\ \text{cm}$ e $h = 5.0\ \text{cm}$.

> **B.4** Calcolare il valore di $v_0$, la velocità del dipolo dell'immagine secondo **A.7**. *(0.3pt)*

È noto che la profondità di penetrazione $\delta$ (denominata profondità della pelle), che è la distanza che un'onda elettromagnetica può penetrare in una lastra conduttrice, dipende dalla frequenza angolare $\omega$ dell'onda. La dipendenza è data da

$$\delta = \sqrt{\frac{2}{\omega\mu_0\sigma}}. \tag{3}$$

Per la considerazione di seguito, prendiamo $\omega = v_L/h$, dove $v_L$ è uguale alla velocità più grande di $v$ e $v_0$.

> **B.5 ** Ottieni la dipendenza $v$ di $v_0(v)$ sia nei regimi $v$ piccoli che grandi. *(0.4pt)*

> **B.6** Ottieni la velocità critica $v = v_c$ alla quale i due regimi di **B.5** si incontrano. *(0.3pt)*

#### Parte C. Movimento del dipolo magnetico quando il film sottile conduttore è superconduttore (3,0 punti)

La considerazione di cui sopra può essere applicata al caso dei superconduttori di tipo I, in cui i campi magnetici sono completamente respinti dai superconduttori (effetto Meissner) in ogni momento, prendendo il limite di quella conducibilità elettrica $\sigma \to \infty$.

Qui consideriamo un dipolo magnetico a punto con un momento di dipolo magnetico ** orizzontale ** $\vec{m} = m\hat{x}$, una massa $M_0$, e situato a $(x, y, z) = (0, 0, h)$. Ci concentriamo sui movimenti verticali del dipolo magnetico sotto l'azione di un campo gravitazionale, con accelerazione gravitazionale $\vec{g} = -g\hat{z}$. Si assume un debole accoppiamento tra l'orientamento di un dato dipolo e il suo movimento al centro della massa e viene trascurato. Come tale, fissamo il momento di dipolo magnetico, come è dato sopra, per le nostre considerazioni di seguito. Inoltre, presumiamo un ambiente a vuoto ultra-alto in modo che non occorra considerare l'ammortizzazione del movimento dell'aria residua.

> **C.1 ** Trova la distanza di equilibrio $h_0$ del dipolo dal film sottile superconduttore. *(1.2pt)*

> **C.2 ** Trova la frequenza angolare di dipole $\Omega$ delle oscillazioni intorno all'equilibrio. *(0.8pt)*

I parametri fisici per un magnete permanente sferevole sono i seguenti: raggio $R = 1.0\ \mu\text{m}$, densità di massa $\rho_0 = 7400\ \text{kg m}^{-3}$, $g = 9.8\ \text{m s}^{-2}$, $\mu_0 = 4\pi \times 10^{-7}\ \text{TA}^{-1}\text{m}$ e magnetizzazione $|\vec{M}| = 75 \times 10^{-2}\ \text{T}/\mu_0$.

> **C.3 ** Calcolare il valore di $h_0$. *(0.7pt)*

> **C.4 ** Calcolare il valore di $\Omega$. *(0.3pt)*

**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1v8fHNf9Y1akgSvCsmcvWpVjprPiQha5_/view)

**Topic:** [[Magnetism]], [[Electromagnetism]], [[Oscillations & Waves]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Magnetic Dipole (object)|Magnetic Dipole]], [[Magnet (object)|Magnet]]
