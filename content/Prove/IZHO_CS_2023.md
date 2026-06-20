---
tipo: prova
prova_id: prova_IZHO_CS_2023
competition: Russia Physics Olympiad
comp_code: IZhO
country: Russia
year: '2023'
level: ''
pdf: gare di altri paesi/Russia/izho.kz/IZHO_CS_2023.pdf
cluster: Gravitazione e Astrofisica
n_problemi: '6'
tags:
  - kg/prova
  - anno/2023
  - paese/Russia
  - comp/IZhO
  - cluster/Gravitazione e Astrofisica
---

# IZhO 2023 — IZHO_CS_2023.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/IZHO_CS_2023.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Gravitazione e Astrofisica]]
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1

**Problem A. Hill**

Amanbol has a table $A$ of size $n \times m$. The rows of the table are numbered from 1 to $n$, and the columns are numbered from 1 to $m$. Each cell of the table either contains the character `X`, or one digit from `0` to `9`.

If the symbol `X` is written on a table cell, it means that Amanbol marked this cell as *blocked*. Otherwise, the number written on this cell denotes its *value*.

Amanbol wants to find a *hill* in his table. He defines a hill as follows:

1. First we choose two numbers $(s, e)$ such that $(1 \le s \le e \le n)$.
2. Then for each $k$ $(s \le k \le e)$ we choose a pair $(L_k, R_k)$ such that $(1 \le L_k \le R_k \le m)$.
3. The conditions $L_s \ge L_{s+1} \ge \ldots \ge L_e$ and $R_s \le R_{s+1} \le \ldots \le R_e$ should be satisfied.

A cell $(x, y)$ belongs to a hill if $s \le x \le e$ and $L_x \le y \le R_x$. Among all possible hills, Amanbol wants to find the one with **no blocked cells** and the total value of all its cells is maximum.

**Input:** The first line contains two integers $n$ and $m$ $(1 \le n, m \le 2500)$. The $i$-th of the next $n$ lines contains exactly $m$ characters $A_{i,1}, \ldots, A_{i,m}$ (each `X` or a digit `0`–`9`).

**Output:** Print a single integer — the maximum possible total value of all cells of the hill.

**Scoring (5 subtasks):**

| Subtask | Additional restrictions | Points |
|---------|------------------------|--------|
| 0 | Examples | 0 |
| 1 | $n = 1$ | 12 |
| 2 | No blocked cells | 7 |
| 3 | $n, m \le 50$ | 25 |
| 4 | $n, m \le 300$ | 22 |
| 5 | — | 34 |

**Topic:** [[Newtonian Mechanics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1

## Problema 2

**Problem B. Two tree**

Temirlan gave Dimash two trees — two undirected connected graphs without cycles. Each tree has $n$ nodes numbered from 1 to $n$.

Dimash has chosen the node $v$ $(1 \le v \le n)$, and rooted both trees on that node. He determined:
- $\mathrm{sub}_1(x)$ — the number of nodes in the subtree of node $x$ in the first tree,
- $\mathrm{sub}_2(x)$ — the number of nodes in the subtree of node $x$ in the second tree.

The *difference* of the trees is the number of nodes $x$ $(1 \le x \le n)$ such that $\mathrm{sub}_1(x) > \mathrm{sub}_2(x)$.

For every node $v$ $(1 \le v \le n)$, Dimash wants to find the difference of the trees if both trees were rooted on node $v$.

**Input:** First line: one integer $n$ $(1 \le n \le 5 \cdot 10^5)$. Then $n-1$ lines for first tree edges $(u, v)$, then $n-1$ lines for second tree edges.

**Output:** Print $n$ space-separated integers — the $i$-th is the difference if both trees are rooted at node $i$.

**Scoring (5 subtasks):**

| Subtask | Additional restrictions | Points |
|---------|------------------------|--------|
| 0 | Examples | 0 |
| 1 | $n \le 2000$ | 12 |
| 2 | $n \le 100000$ | 22 |
| 3 | Every node has at most two neighbors | 23 |
| 4 | Both trees are complete binary trees | 17 |
| 5 | — | 26 |

**Topic:** [[Newtonian Mechanics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.3

## Problema 3

**Problem C. Golf**

Batyr came up with a way to play golf on a directed graph. A directed graph is called a *gaming graph* if:

1. The graph has at least 3 vertices; the first and second are *terminal* with no outgoing edges.
2. Every non-terminal vertex has exactly two outgoing edges (both may lead to the same vertex).
3. From every vertex, there is a path to at least one terminal vertex.

Starting from a chosen non-terminal vertex, a ball moves along one of the two outgoing edges chosen with equal probability $\frac{1}{2}$, until it reaches a terminal vertex.

Construct a gaming graph with at most $n$ vertices and a starting vertex $s$ such that:
$$P(\text{terminal 1} \mid s) = \frac{a}{a+b}, \quad P(\text{terminal 2} \mid s) = \frac{b}{a+b}.$$

**Input:** First line: two integers $t$ and $n$ $(1 \le t \le 100,\ 33 \le n \le 100)$ — number of test cases and maximum vertices. Each test case: two integers $a$ and $b$ $(1 \le a, b \le 10^9)$.

**Output:** For each test case, print: first line $m\ s$ $(3 \le m \le n,\ 3 \le s \le m)$; then $m-2$ lines each with $v_i\ u_i$ — the two endpoints of outgoing edges from vertex $i$ (for $i = 3, \ldots, m$).

**Scoring (10 subtasks):**

| Subtask | $n$ | Additional restrictions | Points |
|---------|-----|------------------------|--------|
| 0 | — | Examples | 0 |
| 1 | 100 | $a + b = 4$ | 10 |
| 2 | 100 | $a + b = 32$ | 10 |
| 3 | 50 | $a + b = 2^{30}$ | 10 |
| 4 | 33 | $a, b \le 15$ | 10 |
| 5 | 64 | — | 10 |
| 6 | 50 | — | 10 |
| 7 | 36 | — | 10 |
| 8 | 35 | — | 10 |
| 9 | 34 | — | 10 |
| 10 | 33 | — | 10 |

**Topic:** [[Oscillations & Waves]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.5

## Problema 4

**Problem D. Atoms**

Erzhan is a scientist at a nuclear research facility. There are exactly $n$ atoms of each of three elements: Beshium [Bs], Dastarhanium [Da], Kumysium [Km], with known coordinates.

A stable reaction requires choosing one atom of each type with coordinates $x$ (Bs), $y$ (Da), $z$ (Km) satisfying $x \le y \le z$. The energy output depends only on which Da atom is used, given by values $c_1, c_2, \ldots, c_n$. All three chosen atoms are destroyed, and reactions may be repeated with remaining atoms. Maximize the total energy output.

**Input:**
- Line 1: integer $n$ $(1 \le n \le 10^5)$
- Line 2: $n$ integers $b_1, \ldots, b_n$ $(1 \le b_i \le 10^9)$ — Bs coordinates
- Line 3: $n$ integers $k_1, \ldots, k_n$ $(1 \le k_i \le 10^9)$ — Km coordinates
- Line 4: $n$ integers $d_1, \ldots, d_n$ $(1 \le d_i \le 10^9)$ — Da coordinates
- Line 5: $n$ integers $c_1, \ldots, c_n$ $(1 \le c_i \le 10^9)$ — Da energy outputs

**Output:** One integer — the maximum possible total energy output.

**Scoring (7 subtasks):**

| Subtask | Additional restrictions | Points |
|---------|------------------------|--------|
| 0 | Examples | 0 |
| 1 | $n = 3$ | 9 |
| 2 | $d_1 = d_2 = \cdots = d_n$ | 8 |
| 3 | $k_i \ge b_j$ and $k_i \ge d_j$ for each $1 \le i,j \le n$ | 11 |
| 4 | $c_1 = c_2 = \cdots = c_n = 1$ | 11 |
| 5 | $n \le 300$ | 12 |
| 6 | $n \le 2000$ | 12 |
| 7 | — | 37 |

**Topic:** [[Newtonian Mechanics]], [[Conservation of Energy]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Conservation Laws (metodo)|Conservation Laws]], [[Conservation of Energy (metodo)|Conservation of Energy]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.7

## Problema 5

**Problem E. Tree game**

There is a tree of $n$ nodes and $n-1$ edges. Two players play a game: player 1 uses red, player 2 uses blue. Initially each player has exactly one node of their color; all others are neutral. Players alternate (red first). One move:

1. The player chooses any neutral node adjacent to one of their nodes.
2. That node is painted in their color.
3. Also, all neighbors of the chosen node that belong to the *other* player are repainted to the current player's color.

If a player cannot move, they skip. Play continues as long as at least one player can move. Players are **not allowed to skip moves**. The player with more nodes at the end wins.

Adilkhan (red) and Batyrkhan (blue) played to some intermediate state, and now it is always red's turn. You play as red (optimally), your friend Daniyar plays as blue (optimally). For $q$ days, a different intermediate state is given; find the final score each day.

**Input:**
- Line 1: $n$ $(3 \le n \le 10^5)$
- Next $n-1$ lines: edges $(u_i, v_i)$
- Line: $q$ $(1 \le q \le 10^5)$
- For each day $i$: line 1 starts with $r_i$ then $r_i$ red node numbers; line 2 starts with $b_i$ then $b_i$ blue node numbers.
- Sum of $r_i + b_i$ over all days $\le 3 \times 10^5$.

**Output:** $q$ lines, each in format $a:b$ (red nodes : blue nodes at game end).

**Scoring (7 subtasks):**

| Subtask | Additional restrictions | Points |
|---------|------------------------|--------|
| 0 | Examples | 0 |
| 1 | $u_i=1, v_i=i+1$; no prior moves | 9 |
| 2 | $u_i=i, v_i=i+1$; no prior moves | 13 |
| 3 | $n, q \le 10$ | 11 |
| 4 | $q=1$; no prior moves | 14 |
| 5 | No prior moves | 20 |
| 6 | $q=1$ | 17 |
| 7 | — | 16 |

**Topic:** [[Newtonian Mechanics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.9

## Problema 6

**Problem F. Researchers**

A group of researchers discovered an unknown planet with an ancient civilization. There were $n$ cities and $m$ two-way roads. The $i$-th road connected cities $a_i$ and $b_i$ only during years $c_i$ through $d_i$ inclusive. A pair of cities may have multiple roads in the same year.

There are $q$ questions. Each question asks: for how many integer values of $k$ in the interval $[l_i, r_i]$ is it possible to travel from city $x_i$ to city $y_i$ using only roads that exist in year $k$?

**Input:**
- Line 1: $n$ and $m$ $(2 \le n \le 77777,\ 1 \le m \le 77777)$
- Next $m$ lines: $a_i,\ b_i,\ c_i,\ d_i$ $(1 \le a_i, b_i \le n,\ a_i \ne b_i,\ 1 \le c_i \le d_i \le 10^9)$
- Line: $q$ $(1 \le q \le 77777)$
- Next $q$ lines: $x_i,\ y_i,\ l_i,\ r_i$ $(1 \le x_i, y_i \le n,\ x_i \ne y_i,\ 1 \le l_i \le r_i \le 10^9)$

**Output:** $q$ lines — for the $i$-th query, the count of valid years $k \in [l_i, r_i]$.

**Scoring (7 subtasks):**

| Subtask | Additional restrictions | Points |
|---------|------------------------|--------|
| 0 | Examples | 0 |
| 1 | $n,m,q \le 100;\ d_i \le 100;\ r_i \le 100$ | 5 |
| 2 | $n,m,q \le 3000;\ d_i \le 3000;\ r_i \le 3000$ | 7 |
| 3 | $m = n-1,\ a_i = i,\ b_i = i+1$ | 12 |
| 4 | $d_i = 10^9$ | 16 |
| 5 | $l_i = r_i$ | 12 |
| 6 | $n,m,q \le 40000$ | 27 |
| 7 | — | 21 |

**Topic:** [[Newtonian Mechanics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.13
