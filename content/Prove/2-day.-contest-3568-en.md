---
tipo: prova
prova_id: prova_2-day.-contest-3568-en
competition: Russia Physics Olympiad
comp_code: Russia
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/izho.kz/2-day.-contest-3568-en.pdf
cluster: ''
n_problemi: '3'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
---

# Russia na — 2-day.-contest-3568-en.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/2-day.-contest-3568-en.pdf` · Apri PDF · apri PDF p.1
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1

**Problem D. Viral bacterium**

Almaty was attacked by a dangerous bacterium! An experienced fighter — Azizkhan was invited to deal with it. A bacterium consists of several cells, ordered in a row. The scientists know that there are only 26 different types of cells: each cell is represented by a capital latin letter. More formally, each bacterium is represented by a string of length $N$, which contains only capital latin letters.

To destroy the bacterium Azizkhan can shoot at some position in the bacterium (between two neighbour cells, or one of the ends) by the cell of any type. If at some moment, there are at least $M$ consecutive cells of the same type, all these cells disappear. After that happens, cells located to the sides of the disappeared group concatenate. What is the minimal required number of shots Azizkhan needs to take in order to kill the bacterium, i.e. make all cells disappear?

**Input**

In the first line of input there are two positive integers $N$ and $M$ — size of the bacterium and the minimal number of consecutive cells of the same type which disappear.

Second line contains string $S$ — representation of the bacterium, which consists of $N$ capital latin letters. It is guaranteed that the string does not contain $M$ consecutive same symbols.

**Output**

Print out a single number — answer to the problem.

**Example**

| bacteria.in | bacteria.out |
|---|---|
| 4 2 | 2 |
| ABAB | |

**Scoring**

This problem consists of four subtasks:

1. $1 \le N \le 20$, $M = 2$, there are only two types of cells: "A", "B". This subtask is worth 6 points.
2. $1 \le N \le 300$; $M = 2$. This subtask is worth 22 points.
3. $1 \le N \le 300$; $2 \le M \le 3$. This subtask is worth 33 points.
4. $1 \le N \le 500$; $2 \le M \le 20$. This subtask is worth 39 points.

Each subtask will be scored only if the solution successfully passes all of the previous subtasks.

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1

## Problema 2

**Problem E. Russian checkers**

The board for the game called "Russian checkers" is similar to a chessboard. It is an $8 \times 8$ square; however, unlike the chessboard, only the black squares are used. They can be numbered as shown in picture 1.

We will consider one of the possible final states of the game, where three kings of one colour play against one king of another colour. Players alternate turns. In one turn, players can move one of the kings of their colour to any distance along the chosen diagonal. The winner is the one who managed to destroy or to block all of the opponent's kings. There are two types of king's moves:

- **Regular move** — is a movement along the diagonal. It is allowed when it is impossible to capture one of the opponent's kings.
- **Capturing move** — is a movement over the opponent's king. In such case, the king must capture the opponent's king if they are located on the same diagonal and there is at least one empty square behind the opponent's figure. The king which makes the capturing move can be placed on one of those empty squares, jumping over the opponent's king. For example, as shown in picture 2, the white king placed on square 17 can make a capturing move to square 7 or 3. This move can be done in any direction.

It is not allowed to jump over the same opponent's king more than once. If there are some opponent's kings with empty squares behind them on any of the diagonals that cross our current one, we must capture all of them (shown in picture 3). Captured kings are taken from the board only after the capturing one finishes its move. If several kings can make a capturing move, or it can be done in several directions, the choice is on the player.

The configuration of the game with 3 white and 1 black king is given. The player with white kings moves first. It is guaranteed that the player with white figures can win in the initial configuration. Write a program that will play with the white figures and will win the game in no more than the fixed number of moves (see scoring).

In case your program makes an invalid move, the execution of the program will be stopped and the "Wrong Answer" report will occur.

**Example**

White kings are located on squares 21, 14 and 26. Black king is on position 26. White figures can win in two moves.

**Scoring**

This problem consists of 5 subtasks:

1. Victory in 1 move: white king captures the black one in one move. This subtask is worth 7 points.
2. Victory in 3 moves: whites make 2 moves, blacks make 1 move, it is guaranteed that there is a strategy where whites lose no kings. This subtask is worth 10 points.
3. Victory in 3 moves: whites make 2 moves and blacks make 1 move. This subtask is worth 17 points.
4. Victory in 7 moves: whites make 4 moves, blacks make 3 moves. This subtask is worth 29 points.
5. Full solution in no more than 15 moves of whites. This subtask is worth 47 points.

<!--fig:start-->
![[_attachments/2-day.-contest-3568-en/2-day.-contest-3568-en_p2_f1.png]]
*Checkerboard positions and king moves*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2-day.-contest-3568-en/2-day.-contest-3568-en_p3_f2.png]]
*Checkerboard example positions*
<!--fig:end-->

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Problema 3

**Problem F. Travel convenience**

There are $N$ ($3 \le N \le 5000$) towns in the country called Oz. These towns are numbered from 1 to $N$. Each town has its own beauty — a positive integer number. The airplanes of the OzAir airline, which is the most successful (and the only) airline of this country, can travel between two towns only if the difference of values of their beauty does not exceed the fixed value $D$ ($1 \le D \le 10^9$). It means that town $v$ can be reached directly from town $u$ if $|a_v - a_u| \le D$, where $a_v$ is the beauty of town $v$.

The Wizard of Oz wants to make Oz country convenient for travelling. He has his own conception of travel convenience, so the country is considered as convenient for travelling if it is possible to travel through all of the towns, return to the initial town at the end of the route and visit each town besides the initial one only once. More formally, the country is convenient for travelling if $m > 2$ and there is a permutation $p_1, p_2, \ldots, p_m$, so that for each $i$ ($1 \le i < m$) there is a direct flight from town $p_i$ to town $p_{i+1}$, and also there should be a direct flight between towns $p_m$ and $p_1$.

The Wizard of Oz may destroy some towns of Oz. He wants to know the number of ways to destroy some towns so that the Oz country becomes convenient for travelling. This number can be large, so calculate it modulo $1000000007$ ($10^9 + 7$).

**Input**

First line of the input file contains two positive numbers $N$ ($3 \le N \le 5000$) and $D$ ($1 \le D \le 10^9$) — the number of towns and the maximum acceptable difference of the beauties of two towns. Next line contains $N$ positive numbers $a_i$ ($1 \le a_i \le 10^9$) — the values of beauty of the towns.

**Output**

Print one number — the answer for the problem modulo $1000000007$ ($10^9 + 7$).

**Examples**

| hamilton-cycle.in | hamilton-cycle.out |
|---|---|
| 3 3 | 1 |
| 1 2 3 | |
| 4 4 | 5 |
| 1 1 1 1 | |

**Scoring**

This problem consists of three subtasks:

1. $3 \le N \le 15$. This subtask is worth 9 points.
2. $3 \le N \le 500$. This subtask is worth 31 points.
3. $3 \le N \le 5000$. This subtask is worth 60 points.

Each subtask will be scored only if the solution successfully passes all of the previous subtasks.

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.4
