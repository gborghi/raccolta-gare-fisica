---
tipo: quesito
quesito_id: quesito_inpho2013-Q__Q06
parent: prova_inpho2013-Q
competition: India Physics Olympiad
comp_code: INPhO
country: India
year: '2013'
level: ''
pdf: gare di altri paesi/India/fisica/all/inpho2013-Q.pdf
cluster: Gravitazione e Astrofisica
quesito: '6'
tags:
  - nazione/india
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/mono
  - topic/gravitation
  - argomento/gravitazione-e-astrofisica
---

# INPhO 2013 — Problema 6

A planet of mass $m$ is orbiting a star of mass $M$ ($M \gg m$) under the influence of a central force. A central force ($F(r)\hat{r}$) is a force that is directed from the particle towards (or away from) a fixed point in space, the center, and whose magnitude only depends on the distance from the planet to the center. Thus gravitational force is central force and it is generally known that the orbit is a conic section of a body under the influence of gravitational force. The planet's position at some point $P$ can be shown in polar coordinates ($r, \theta$) as shown in figure below:

```tikz
\begin{document}
\begin{tikzpicture}
\draw[->] (0,0) -- (4.2,0) node[right] {$x$};
\draw[->] (0,0) -- (0,3.2) node[above] {$y$};
\draw[thick] (0,0) -- (2.8,2.1);
\fill (2.8,2.1) circle (1.5pt) node[above left] {$P$};
\node at (1.3,1.3) {$\vec{r}$};
\draw (0.9,0) arc (0:36.87:0.9);
\node at (1.15,0.32) {$\theta$};
\end{tikzpicture}
\end{document}
```

The planet's position ($\vec{r}$), velocity ($\vec{v}$) and acceleration ($\vec{a}$) can be written as

$$\vec{r} = r\hat{r}, \qquad \vec{v} = \dot{r}\hat{r} + r\dot{\theta}\hat{\theta}, \qquad \vec{a} = (\ddot{r} - r\dot{\theta}^2)\hat{r} + (2\dot{r}\dot{\theta} + r\ddot{\theta})\hat{\theta}$$

Consider central force to be gravitational force for parts (c–h). [Marks: 13]

(a) One can write scalar form of newton's second law as

$$\frac{d^2 r}{dt^2} = g(r, \theta, \dot{r}, \dot{\theta})$$

Obtain $g(r, \theta, \dot{r}, \dot{\theta})$. [1]

$$g(r, \theta, \dot{r}, \dot{\theta}) =$$

(b) Show that the magnitude of the angular momentum ($L$) of planet is constant. [1/2]

(c) Obtain total energy ($E$) of the planet at distance $r$ from the center of the force. Take potential energy to be zero at large $r$. [1]

$$E =$$

(d) State the energy part $V(r) = E - m\dot{r}^2/2$ in terms of $L$ and other quantities. [2]

$$V(r) =$$

(e) Sketch $V(r)$. [1½]

(f) Comment on the allowed regions and shape of the orbit if planet's energy $E > 0$, and $E < 0$. [2]

(g) Obtain the radius ($r_0$) of the circular orbit in terms of $L, m$ and related quantities. [1]

$$r_0 =$$

(h) Hence forward we take that orbit is circular of radius $r_0$ and planet is slightly disturbed from its position such that its position is $r = r_0 + \delta$ where $\delta/r_0 \ll 1$. Show that planet will oscillate simple harmonically around mean position $r_0$. Obtain time period ($T_r$) for these radial oscillations. [2]

$$T(r) =$$

(i) For this part we assume that planet moves under the force expressible as a power of $r$ as $F = -cr^n$ where $c$ ($c > 0$) is a constant. For what values of $n$ a stable orbit is possible? [2]

$$n =$$

**Topic:** [[Gravitation]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.11
