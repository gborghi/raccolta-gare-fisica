---
tipo: prova
prova_id: prova_day1_en
competition: Russia Physics Olympiad
comp_code: Russia
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/izho.kz/day1_en.pdf
cluster: Meccanica
n_problemi: '1'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
  - cluster/Meccanica
---

# Russia na — day1_en.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/day1_en.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1








**A. Divide and conquer**

X Zhautykov Olympiad on Mathematics, Physics and Informatics
Almaty, Kazakhstan, January 12-18, 2014
Problem A. Divide and conquer
Input file:
divide.in
Output file:
divide.out
Time limit:
1 second
Memory limit:
256 megabytes
Feedback
subtask points only
Grading system
only full solution for subtask receives points
Mansur plays the new computer strategic game. The main task in such games is mining resources.
Fortunately in this game only one resource is necessary for development — the gold, and also there
is one supplementary resource type — energy.
In this game there are mining camps, which provide certain amount of gold and energy. Аll camps are
located along the straight line. To protect the mining camps one can build a forcefield (a closed line
segment containing mining camps), which needs energy amount equal to it’s length.
Mansur wants to build one forcefield in such way, that energy of protected mining camps is enough for
the forcefield, and amount of gold provided by these mining camps is maximal possible.
Write a program to help Mansur find the maximal amount of gold which he can obtain from protected
mining camps.
Input
First line of the input file contains one integer N — number of mining camps. Following N lines contain
three space separated integers xi, gi, di, 0 $\leqxi \leq109$, 1 $\leqgi \leq109$, 1 $\leqdi \leq109$: mine coordinates,
amount of gold and energy provided by the mine. All xi are different and given in increasing order.
Output
Output only one number — maximal amount of gold which Mansur can mine.
Examples
divide.in
divide.out
4
0 5 1
1 7 2
4 4 1
7 15 1
16
2
0 4 1
3 5 1
5
Note
Subtask 1 — 1 $\leqN \leq100$, 17 points.
Subtask 2 — 1 $\leqN \leq5000$, 31 points.
Subtask 3 — 1 $\leqN \leq100000$, 52 points.
Page 1 of 3

X Zhautykov Olympiad on Mathematics, Physics and Informatics
Almaty, Kazakhstan, January 12-18, 2014
Problem B. Bank
Input file:
bank.in
Output file:
bank.out
Time limit:
1 second
Memory limit:
256 megabytes
Feedback
points only
Grading system
only full solution for subtask receives points
N people came to some bank to get their salary of a1, a2, . . . , aN tenge. There are total M banknotes left
in the bank with values b1, b2, . . . , bM tenge correspondently.
You need to determine whether bank is able to give exact salary to all people using given banknotes or
not.
Input
First line of input file contains two integers N and M — number of people and number of banknotes.
Second line contains N integers a1, a2, . . . , aN (1 $\leqai \leq1000$) — salary values. Third line contains M
integer numbers b1, b2, . . . , bM (1 $\leqbi \leq1000$) — values of banknotes .
Output
The output file must contain one word «YES», if bank is able to pay salary. In opposite case output «NO».
Examples
bank.in
bank.out
1 5
8
4 2 5 1 3
YES
2 6
9 10
5 4 8 6 3 11
NO
Note
Subtask 1 — 19 points (N = 1, 1 $\leqM \leq20$)
Subtask 2 — 25 points (1 $\leqN$, M $\leq10$)
Subtask 3 — 27 points (1 $\leqN \leq20$, M $\leq14$)
Subtask 4 — 29 points (1 $\leqN$, M $\leq20$)
Page 2 of 3

X Zhautykov Olympiad on Mathematics, Physics and Informatics
Almaty, Kazakhstan, January 12-18, 2014
Problem C. Shymbulak
Input file:
shymbulak.in
Output file:
shymbulak.out
Time limit:
1.5 seconds
Memory limit:
256 megabytes
Feedback
full
Grading system
each test is graded separately
On the famous kazakh resort Shymbulak there are N interesting places for tourists, which are connected
by N roads of equal length. Roads are bidirectional. The road system is constructed in such way that
from any place you can reach any other place, but sometimes it takes too many steps. Before adding
new roads the resort administration wants to know, how many paths are there between all pairs of places
which situated farthest apart from each other.
Pairs of places which situated farthest apart from each other means such pairs of places that the shortest
path between them is maximal. The answer you should calculate is the total number of shortest paths
between all pairs of places that satisfy the condition above.
Input
The first line of the input file contains integer N (3 $\leqN \leq200$ 000). Each of the next N lines contains
2 integers — numbers of places, which are connected by a road. It is guaranteed that all roads connect
different pairs of places.
Output
Output one integer — a number of shortest paths between all pairs of places which situated farthest apart
from each other.
Examples
shymbulak.in
shymbulak.out
6
1 2
1 3
2 4
4 3
4 5
4 6
4
4
1 2
1 3
1 4
4 3
2
Note
In the first example farthest apart places are 1, 5 and 1, 6. For every pair there are two different paths.
So the answer is 4.
For 30% points N $\leq500$.
For 50% points N $\leq5$ 000.
Page 3 of 3

**Topic:** [[Conservation of Energy]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.1
