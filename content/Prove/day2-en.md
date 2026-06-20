---
tipo: prova
prova_id: prova_day2-en
competition: Russia Physics Olympiad
comp_code: Russia
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/izho.kz/day2-en.pdf
cluster: ''
n_problemi: '3'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
---

# Russia na — day2-en.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/day2-en.pdf` · Apri PDF · apri PDF p.3
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1


1. You are responsible for choosing crossroads for both schools. In this case, find the smallest possible
level of inconvenience f(a, b) where 1 $\leqa$, b $\leqn$.

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.3

## Problema 2


2. Temirlan Bitihirovich wants to build a school on the crossroad a = 1, while Adilkhan Paradoxny
asks you for help. Find the smallest possible level of inconvenience f(a, b) when 1 $\leqb \leqn$ and
a = 1.

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.3

## Problema 3


3. Adilkhan Paradoxny asks you for help, but Temirlan Bitihirovich did not disclose his plans. In this
case, you need to find the smallest possible level of inconvenience f(a, b), where 1 $\leqb \leqn$ for each
value of a from 1 to n.
Write a program that finds the smallest level of inconvenience in one of the described scenarios.
Input
The first line contains one integer t (1 $\leqt \leq1000$) — number of test cases.
In following lines, descriptions of test cases are given.
First line of each test case contains two numbers n and p (1 $\leqn \leq105$, 1 $\leqp \leq3$) — number of crossroads
in Bittown and scenario number you are facing.
Following n $-1$ lines contain pairs (ui, vi) (1 $\lequi$, vi $\leqn$, ui ̸= vi, here 1 $\leqi \leqn -1$) — indices of
crossroads, connected by i-th road.
It is guaranteed, that the sum of values of n over all test cases does not exceed 105.
Output
For each test case given in input, in separate lines, print the answer in following format.
Page 3 of 6
XVIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 2*
Kazakhstan, Almaty, February 17, 2022
• If p = 1, print a single integer — the smallest possible value of f(a, b).
• If p = 2, print a single integer — the smallest possible value of f(a, b) when a = 1.
• If p = 3, print n integers (e1, . . . , en), where ei — the smallest possible value of f(a, b) when a = i.
Scoring
Define S as the sum of n over all of test cases.
Subtask
Additional Constraints
Score
Necessary subtasks
0
Examples
0
—
1
S $\leq500$
7
0
2
(ui, vi) = (i, i + 1) for all 1 $\leqi \leqn -1$, p = 3
6
—
3
S $\leq4000$
15
1
4
p = 2
11
—
5
p = 1
22
—
6
S $\leq30000$
21
3
7
—
18
2, 4, 5, 6
Example
standard input
standard output
3
6 1
1 2
2 3
2 4
4 5
4 6
7 2
1 2
2 3
3 4
3 5
2 6
1 7
7 3
1 2
2 3
3 4
3 5
2 6
1 7
4
6
6 6 6 7 7 8 6
Note
In the first test case p = 1, the smallest value f(a, b) is reached when (a, b) = (2, 4). In this case, the level
of inconvenience is equal to 1 + 0 + 1 + 0 + 1 + 1 = 4.
In the second test case p = 2 and a = 1 is fixed, so the smallest value f(a, b) is reached when b = 3. In
this case, the level of inconvenience is equal to 0 + 1 + 0 + 1 + 1 + 2 + 1 = 7.
Page 4 of 6
XVIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 2*
Kazakhstan, Almaty, February 17, 2022
Problem C. Green Line
Input file:
standard input
Output file:
standard output
Time limit:
1 second
Memory limit:
256 megabytes
There are n trees growing in one line on a largest street in Yesik city. Height of the i-th tree from the left
is equal to ai. At the end of each minute, the following transformation happens:
• If at least one neighbor of the tree i is taller, then the i-th tree will grow by 1 unit. More formally,
at least one of the conditions $ai-1$ > ai or ai+1 > ai should be satisfied. Here we suppose that
a0 = an+1 = 0.
Note that the transformation happens simultaneously for all trees. For example, if the current tree heights
are equal to [3, 3, 4, 2, 2], in the next minute heights will be equal to [3, 4, 4, 3, 2].
The initial tree heights correspond to the 0-th minute. You have to answer q independent queries of the
following type.
• What is the height of x-th tree at the beginning of t-th minute?
Input
First line contains two integers n and q (2 $\leqn \leq105$, 1 $\leqq \leq105$) — number of trees and number of
queries.
Second line contains n integers a1, . . . , an (1 $\leqai \leq1018$ for all i, where 1 $\leqi \leqn$) — initial heights of
all trees.
Next q lines contain pairs (xi, ti) (1 $\leqxi \leqn$, 0 $\leqti \leq1018$) — descriptions of queries.
Output
Print q integers — answers to all queries in order or their appearance in the input.
Scoring
Subtask
Additional Constraints
Points
Necessary subtasks
0
Examples
0
—
1
n $\leq100$, ai $\leq100$ for all 1 $\leqi \leqn$
6
0
2
n $\leq100$
21
1
3
n $\leq2000$
20
2
4
—
53
3
Example
standard input
standard output
5 4
1 3 2 5 1
3 0
1 3
3 2
5 2
2
3
4
3
Page 5 of 6
XVIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 2*
Kazakhstan, Almaty, February 17, 2022
Note
Heights of all trees in the example are equal to:
• [1, 3, 2, 5, 1] in the 0-th minute;
• [2, 3, 3, 5, 2] in the 1-st minute;
• [3, 3, 4, 5, 3] in the 2-nd minute;
• [3, 4, 5, 5, 4] in the 3-rd minute
Page 6 of 6

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.3

## Figure

## Figure

## Figure

## Figure

## Figure

<!--fig:start-->
**p.1** — griglia strade con rosa dei venti
![[_attachments/day2-en/day2-en_p1_f1.png]]
<!--fig:end-->
