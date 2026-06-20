---
tipo: quesito
quesito_id: quesito_INPhO2023-Question__Q04
parent: prova_INPhO2023-Question
competition: India Physics Olympiad
comp_code: INPhO
country: India
year: '2023'
level: ''
pdf: gare di altri paesi/India/fisica/all/INPhO2023-Question.pdf
cluster: Elettromagnetismo
quesito: '4'
tags:
  - nazione/india
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/mono
  - topic/electrostatics
  - argomento/elettromagnetismo
---

# INPhO 2023 — Problema 4

**4. [16 marks] Electrostatic TikTok**

Consider a fixed infinite vertical thin rod (shown by the red color in the figure below) of linear charge density $\lambda$ along the $z$-axis at the origin (see figure below). A uniformly charged ring of total charge $Q$, mass $M$, and radius $a$ is placed with its center at the origin in the $x$-$y$ plane. Point P is an arbitrary point on the ring. The projection of point P on $x$-$y$ plane makes an angle $\theta$ with respect to the $x$-axis in the anticlockwise direction as seen from the top.

The ring is now given an initial angular velocity $\omega_0$ about the $x$-axis. We define the angle $\alpha$ which the plane of the ring makes with the $x$-$y$ plane. This is illustrated by drawing line segment AB in the plane of the ring. Initially $\alpha = 0$. Ignore gravity.

```tikz
\begin{document}
\begin{tikzpicture}[>=stealth]
  % axes
  \draw[->] (0,0) -- (3.2,-1.2) node[right] {$x$};
  \draw[->] (0,0) -- (4,0.6) node[right] {$y$};
  \draw[->] (0,-2) -- (0,2.4) node[above] {$z$};
  % infinite rod (red) along z
  \draw[red,very thick] (0,-2) -- (0,2.2);
  % ring in x-y plane (ellipse for perspective)
  \draw[thick] (0,0) ellipse (2.6 and 0.9);
  % point P on ring
  \fill (1.9,0.6) circle (1.5pt) node[above] {$P$};
  % line AB across ring
  \draw[dashed] (-2.4,-0.3) node[left] {$A$} -- (2.4,0.3) node[right] {$B$};
  % angle theta marker
  \draw (0.8,0) arc (0:25:0.8);
  \node at (1.0,0.18) {$\theta$};
\end{tikzpicture}
\end{document}
```

You may find the following differentiation useful

$$D = \frac{d}{d\theta}\left[\tan^{-1}(q\tan\theta)\right] = \frac{1}{1 + (q\tan\theta)^2}\left[q(\sec^2\theta)\right] \tag{4.1}$$

(a) [1 marks] State an expression for the electric field ($\vec{E}_0$) due to the infinite rod at a point on the ring when $\alpha=0$ in terms of $x$, $y$ and $\theta$, and related quantities.

(b) [2 marks] At some instant the ring makes an angle $\alpha$. Derive an expression for the electric field $\vec{E}$ due to the infinite rod at a point on the ring in terms of $\theta$, and $\alpha$.

(c) [1 marks] Find the net force $\vec{F}$ acting on the ring.

(d) [5 marks] Find the net torque $\vec{\tau}$ acting on the ring in terms of $\alpha$ and the constants only. Qualitatively plot torque as a function of $\alpha$.

(e) [2 marks] Let the ring is in equilibrium with respect to $\alpha = 0$. Derive an expression for the time period $T$ of small oscillations of the ring in terms of $\lambda$, and $Q$. Take $\lambda = 0.1\ \mu\text{C/m}$, $Q = 2.0\ \mu\text{C}$, $M = 50.0\ \text{g}$, radius $a = 5.0\ \text{cm}$, and $\omega_0 = 1.0\ \text{rad/s}$. Calculate $T$.

(f) [2.5 marks] Find an expression for the potential energy $U$ of the ring in terms of $\alpha$. Qualitatively plot $U$ as a function of $\alpha$. Take the zero of potential energy to be at $\alpha = 0$.

(g) [2.5 marks] Obtain the expression of maximum value of $\alpha$ ($\alpha_\text{max}$) in terms of $\omega_0$. Calculate $\alpha_\text{max}$.

**Topic:** [[Electrostatics]]
**Metodi:** [[Gauss's Law (metodo)|Gauss's Law]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.3
**Soluzione:** Soluzioni (PDF)
