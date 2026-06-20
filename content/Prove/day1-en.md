---
tipo: prova
prova_id: prova_day1-en
competition: Russia Physics Olympiad
comp_code: Russia
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/izho.kz/day1-en.pdf
cluster: Gravitazione e Astrofisica
n_problemi: '1'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
  - cluster/Gravitazione e Astrofisica
---

# Russia na — day1-en.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/day1-en.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Gravitazione e Astrofisica]]
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1








**A. Where is the legend?**

XVIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 1*
Kazakhstan, Almaty, February 16, 2022
Problem A. Where is the legend?
Input file:
standard input
Output file:
standard output
Time limit:
2 seconds
Memory limit:
256 megabytes
Given an array a of n positive integers. In one operation, you can remove a number from the array a, if it
is equal to the arithmetic mean of its neighbors. However, you can not remove the first and last numbers
of the array. Formally, you can remove the number ai, if ai = $ai-1+ai+1$
2
. For example, if you remove 6
from an array [1, 3, 6, 9, 4], the resulting array would be [1, 3, 9, 4].
What is the shortest possible length of the array you could get using the operation described above some
number of times(maybe, zero)?
Input
The first line contains one integer t (1 $\leqt \leq103$) — the number of test cases.
The next 2 $\cdot$ t lines are in the following pattern:
First line of each test case contains one number n (3 $\leqn \leq3 \cdot$ 105) — the length of an array a.
The second line of each test case contains n numbers a1, . . . , an (1 $\leqai \leq109$, for each i, where 1 $\leqi \leqn$).
It is guaranteed, that the sum of n across all test cases does not exceed 3 $\cdot$ 105.
Output
For each test case print one number — the shortest possible length of the array a, that you could get by
using described operation.
Scoring
Let S be the sum of n over all test cases.
Subtask
Additional constraints
Score
Necessary subtasks
0
Examples
0
—
1
n $\leq15$, S $\leq400$
14
0
2
ai = i
13
—
3
ai $\leq3$
9
—
4
n $\leq300$, S $\leq1000$
17
1
5
n $\leq3000$, S $\leq10000$
18
4
6
—
29
2, 3, 5
Example
standard input
standard output
3
5
1 2 3 4 5
7
1 3 5 6 7 8 10
3
1 1 1
2
4
2
Note
For example, in the array [1, 2, 4], there are no possible operations, since 1+4
2
= 2.5 ̸= 2.
Page 1 of 5

XVIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 1*
Kazakhstan, Almaty, February 16, 2022
Problem B. Zhylan.io
Input file:
standard input
Output file:
standard output
Time limit:
3 seconds
Memory limit:
512 megabytes
“Zhylan.io” is an online multiplayer game where players control snakes. Suppose m players are competing
in a match. Let’s assign each player a number from 1 to m. The i-th player controls a snake with length
bi. The i-th player’s snake can attack the j-th (i ̸= j) player’s snake only if the condition bi $-bj \geqk$ is
met. In which case, player j leaves the match while the length of i-th player’s snake increases by bj. The
number k is chosen before the start of a match, and could differ from match to match.
A match continues until there are no possible attacks left. If, at the end of a match, only one player
remains, he becomes a winner of that match. Otherwise, the match ends in a draw and with no winners.
Vitya is a huge fan of “Zhylan.io” with tons of experience. He claims, that for any match, he is able to
correctly predict the number of players that could win that match.
Batyr decided to check Vitya’s abilities. So, he wrote down an array of positive integers a of length n.
Then, Batyr asks Vitya q questions of the following type.
• If a match between players with snakes (al, . . . , ar) and a parameter k was to start, how many of
these players could possibly win?
Actually, Vitya lied and now asks for your help to answer Batyr’s questions. Help him.
Input
The first line contains two numbers n and q (2 $\leqn \leq2 \cdot$ 105, 1 $\leqq \leq2 \cdot$ 105) — the size of an array a and
the number of Batyr’s questions.
Second line contains n integers a1, . . . , an (1 $\leqai \leq109$).
Then, q lines follow. Each line contains three integers li, ri and ki (1 $\leqli$ < ri $\leqn$, 0 $\leqki \leq109$) —
descriptions of questions.
Output
For each of Batyr’s questions print a single integer in separate line — answer to Batyr’s question.
Scoring
Subtask
Additional constraints
Points
Necessary subtasks
0
Samples
0
—
1
n, q $\leq500$
7
0
2
n, q $\leq3000$
15
1
3
a1 $\leqa2 \leq$. . . $\leqan$
24
—
4
n, q $\leq5 \cdot$ 104, ai $\leq106$
20
0
5
n, q $\leq105$
19
2, 4
6
—
15
3, 5
Page 2 of 5

XVIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 1*
Kazakhstan, Almaty, February 16, 2022
Examples
standard input
standard output
6 4
3 1 5 3 7 5
1 6 1
4 6 4
1 4 2
2 3 5
5
1
1
0
3 2
3 3 3
1 3 1
1 3 0
0
3
Page 3 of 5

XVIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 1*
Kazakhstan, Almaty, February 16, 2022
Problem C. Mansur vs Tima
Input file:
standard input
Output file:
standard output
Time limit:
1 second
Memory limit:
256 megabytes
Tima came back from his journey to Xorland and brought back an array of n integers. Xorland is a small
country known for its food, music, and games on arrays. A peculiarity of Xorland’s games is that there is
no winner: friendship always wins! One of such games is “Xor-Mat”.
Rules of “Xor-Mat” are simple. Two players, before the start of the game, choose an array a and an integer
k. Then, the first player paints each number in the array with one of the k colors. Let ci be the color of
i-th number in the array if we order the colors from 1 to k. Second player, then, chooses a pair of indices
(i, j) such that i ̸= j and ci = cj.
The goal of the first player is to maximize ai ⊕aj, while, second player tries to minimize ai ⊕aj. Here, ⊕
is a bitwise “XOR” operation.
Mansur challenged Tima for a “Xor-Mat” game. They are playing on Tima’s array. Mansur goes first and
Tima is second. Print the value of ai ⊕aj when both players play optimally. Also, find out an optimal
coloring of the array that Mansur might choose.
Input
The first line contains one integer t (1 $\leqt \leq5 \cdot$ 104) — the number of test cases.
The 2 $\cdot$ t lines follow in following pattern:
The first line of each test case contains two integers n(2 $\leqn \leq5 \cdot$ 104) and k(1 $\leqk \leqmin(n -1$, 50)).
Second line of each test case contains n integers a1, a2, . . . , an(1 $\leqai \leq109$) — Tima’s array.
It is guaranteed, that the sum of n across all test cases does not exceed 5 $\cdot$ 104.
Output
For each test case in input print two lines:
• In the first line, print the value of ai ⊕aj when both players play optimally.
• In the second line, print n integers c1, c2, . . . , cn(1 $\leqci \leqk$), where ci is equal to the color that
Mansur chooses for i-th number of the array. If there are more than one possible ways to color the
array optimally, print any of them.
Scoring
Let S be the sum of n over all test cases.
Subtask
Additional constraints
Points
Necessary subtasks
0
Example
0
—
1
S $\leq10$, k $\leq5$
6
0
2
S $\leq50000$, k = 1
10
3
S $\leq1000$, k $\leq2$
10
—
4
S $\leq50000$, k $\leq2$
20
2, 3
5
S $\leq50000$, k $\leq4$
22
1, 4
6
—
32
5
Page 4 of 5

XVIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 1*
Kazakhstan, Almaty, February 16, 2022
Example
standard input
standard output
2
3 1
1 2 3
3 2
1 2 3
1
1 1 1
3
1 1 2
Page 5 of 5

**Topic:** [[Astrophysics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.1
