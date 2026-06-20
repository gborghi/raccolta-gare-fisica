---
tipo: quesito
quesito_id: quesito_IOQP2022-PartII-Questions-en__Q01
parent: prova_IOQP2022-PartII-Questions-en
competition: India Physics Olympiad
comp_code: India
country: India
year: '2022'
level: ''
pdf: gare di altri paesi/India/fisica/all/IOQP2022-PartII-Questions-en.pdf
cluster: Onde e Oscillazioni
quesito: '1'
tags:
  - nazione/india
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/mono
  - topic/oscillations-e-waves
  - argomento/onde-e-oscillazioni
---

# IOQP 2022 (Part II) — Problema 1

A block of mass $m = 0.1\ \text{kg}$ is attached to a spring (one end fixed to the wall) with spring constant $k = 50\ \text{N m}^{-1}$. The block slides on a rough horizontal table along the x-axis. Assume that both the coefficients of kinetic $(\mu_k)$ and static friction $(\mu_s)$ are same and constant $(\mu_k = \mu_s = \mu = 0.25)$. The block is initially displaced to $x_0 = 0.1\ \text{m}$ from the unstretched position (normal length of the spring, $x = 0$) of the spring and released from rest as shown below. Neglect any air resistance. Take the acceleration $g$ due to gravity to be $10\ \text{m/s}^2$.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
  % ground
  \draw[thick] (-0.2,0) -- (11,0);
  % wall (hatched)
  \draw[thick] (0,0) -- (0,1.4);
  \foreach \y in {0,0.2,...,1.3} {\draw (-0.25,\y) -- (0,\y+0.25);}
  % spring (coil)
  \draw[thick,decorate,decoration={coil,aspect=0.6,segment length=4mm,amplitude=3mm}] (0,0.9) -- (8.4,0.9);
  % connector to block
  \draw[thick] (8.4,0.9) -- (9.0,0.9);
  % block
  \fill[black] (9.0,0.45) rectangle (10.0,1.35);
  % unstretched position (dashed)
  \draw[dashed] (5.2,-0.3) -- (5.2,1.7);
  % x0 arrow
  \draw[->,thick] (5.2,0.25) -- (9.5,0.25);
  \node at (7.4,-0.05) {$x_0$};
  \node at (5.2,2.0) {\small unstretched position};
\end{tikzpicture}
\end{document}
```

(a) [3 marks] How many times $(n)$ will the block cross the unstretched position before coming to rest permanently?

(b) [1 marks] Determine the total distance $D$ covered by the block before coming to rest.

(c) [6 marks] Let us divide one complete oscillation of the block, starting from a fully stretched condition of the spring, into four distinct sections, requiring the following times in order:
(i) $t_1$: time taken for the block to move from fully stretched to the unstretched position,
(ii) $t_2$: time taken for the block to move from the unstretched position to fully compressed position,
(iii) $t_3$: time taken for the block to move from fully compressed to the unstretched position,
(iv) $t_4$: time taken for the block to move from the unstretched position to fully stretched position.
Let the distance covered during the above intervals be $d_1$, $d_2$, $d_3$, and $d_4$, respectively. Also, let $T_1$ and $T_2$ be the time taken to complete the first and the second oscillations, respectively, starting from the initial displacement, $x_0$.
Compare the above times and distances by inserting an appropriate sign (from among $<$, $>$, or $=$ only) between the given quantities in each of the boxes below. Note that you will be penalised for 0.5 marks for giving each incorrect answer in this part. You need not to justify your answer.

| $t_1$ $\square$ $t_2$ | $t_2$ $\square$ $t_3$ | $t_1$ $\square$ $t_3$ |
|---|---|---|
| $d_1$ $\square$ $d_2$ | $d_2$ $\square$ $d_4$ | $T_1$ $\square$ $T_2$ |

(d) [2 marks] Qualitatively plot the displacement $x$ from the unstretched position vs the time $t$.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2
**Soluzione:** Soluzioni (PDF)
