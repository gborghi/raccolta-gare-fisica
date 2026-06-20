---
tipo: quesito
quesito_id: quesito_INAO2018-Question__Q04
parent: prova_INAO2018-Question
competition: India Physics Olympiad
comp_code: INAO
country: India
year: '2018'
level: ''
pdf: gare di altri paesi/India/astronomia/INAO2018-Question.pdf
cluster: Gravitazione e Astrofisica
quesito: '4'
tags:
  - nazione/india
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/bi
  - topic/geometric-optics
  - topic/order-of-magnitude-estimation
  - argomento/gravitazione-e-astrofisica
---

# INAO 2018 — Problema 4

Aditya is fascinated by the famous 'infinity corridor' of IITB. The corridor is a very long, straight, roofed pathway connecting different departments. The roof of the corridor is supported by square pillars of width $b$ on either side. Let $D$ be the distance between consecutive pillars on the same side and $L$ be the width of the pathway (see figure).

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.9]
  % top row of pillars
  \foreach \x in {0,2,4,6,8,10}{
    \fill[gray!50] (\x,3.2) rectangle (\x+0.8,4.0);
  }
  % bottom row of pillars
  \foreach \x in {0,2,4,6,8,10}{
    \fill[gray!50] (\x,0) rectangle (\x+0.8,0.8);
  }
  % pillar width b (top)
  \draw[<->] (5.1,3.2) -- (5.1,4.0);
  \node[right] at (5.2,3.6) {$b$};
  % distance D between consecutive pillars (bottom)
  \draw[<->] (2.8,0.4) -- (4.0,0.4);
  \node[above] at (3.4,0.5) {$D$};
  % corridor width L
  \draw[<->] (9.2,0.8) -- (9.2,3.2);
  \node[right] at (9.3,2.0) {$L$};
  % point M (middle of corridor)
  \fill (5.4,2.4) circle (1.5pt);
  \node[below] at (5.4,2.4) {$M$};
  % point N (bottom row, near a pillar)
  \fill (5.4,0.9) circle (1.5pt);
  \node[above] at (5.4,0.9) {$N$};
\end{tikzpicture}
\end{document}
```

(a) (8 marks) One day Aditya was standing at point M (see figure), in the middle of the corridor, looking ahead along the path. He found that he cannot see any object outside the corridor beyond the $n^{\text{th}}$ pillar on his either side. Derive an expression for n.

(b) (3 marks) Assume that the space between the successive pillars is $D = 3$ m, width of each pillar is $b = 0.3$ m and width of the corridor is $L = 5$ m. Find numerical value of n.

(c) (4 marks) How will the answer in part (b) change, if Aditya was at position N instead of M (see figure) and looking through pillars along the top row of the figure?

**Topic:** [[Geometric Optics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Small-Angle Approximation (metodo)|Small-Angle Approximation]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.2
**Soluzione:** Soluzioni (PDF)
