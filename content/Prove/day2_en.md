---
tipo: prova
prova_id: prova_day2_en
competition: Russia Physics Olympiad
comp_code: Russia
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/izho.kz/day2_en.pdf
cluster: ''
n_problemi: '1'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
---

# Russia na — day2_en.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/day2_en.pdf` · Apri PDF · apri PDF p.1
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1








**D. UFO**

X Zhautykov Olympiad on Mathematics, Physics and Informatics
Almaty, Kazakhstan, January 12-18, 2014
Problem D. UFO
Input file:
ufo.in
Output file:
ufo.out
Time limit:
2 seconds
Memory limit:
256 megabytes
Feedback
full
Grading system
each test is graded separately
Earth security agency needs to destroy enemy alien spaceship. They already damaged it and forced it to
land in a desert. Spaceship is built of cubic unit blocks and the bottom layer has the form of a N $\times$ M
rectangle. Top view of the N = 4, M = 8 spaceship shown in the figure.
Spaceship blocks are built from extra-strong metal, that’s why lasers are used for destroying the ship.
Laser guns were established by four sides of the spaceship, and they periodically shot laser rays into some
blocks of the ship (rays are always perpendicular to the spaceship sides). Each ray destroys R first blocks
on its way. If there is one or more blocks atop the destroyed block, they move down.
After K shots it was decided to make an airstrike. For the airstrike it makes sense to choose such area of
the ship of size P $\timesP$ which contains maximal possible number of whole undestroyed blocks. The airstrike
will destroy all blocks in this area.
Write a program, which calculates the maximal number of whole undestroyed blocks in the area of size
P $\times$ P which can be destroyed by airstrike.
Input
The first line of the input file contains 5 integers: N, M (1 $\leqN \cdot$ M $\leq1$ 000 000), R (0 < R $\leq10$),
K (0 < K $\leq300$ 000) and P (0 < P $\leqmin(N$, M, 10)). Each of the next N lines contain M numbers.
Number in i-th row and j-th column is the number of blocks in the corresponding part of the ship (see a
figure). Each number is in range 1..106.
Next K lines contain description of laser shots. Each of these lines contain one symbol and two integers
(all separated by spaces). Symbol defines the side of the shot: “W” — west, “E” — east, “S” — south, “N”
— north. First integer is the number of row (in case of west or east), or the number of column (in case of
north and south), and second number is the height of the shot. Rows and columns numbers correspond
to numeration of input data, layers are numbered from one. Each number is in range 1..106.
Output
Output maximal number of undestroyed blocks after K laser shots in the area of size P $\times$ P.
Page 1 of 4

X Zhautykov Olympiad on Mathematics, Physics and Informatics
Almaty, Kazakhstan, January 12-18, 2014
Examples
ufo.in
ufo.out
4 8 2 6 2
1 1 1 1 1 1 1 1
1 2 3 1 1 1 3 1
1 2 1 1 3 1 1 1
1 1 1 1 1 1 1 2
N 2 2
W 2 2
W 2 3
E 2 1
S 4 1
S 7 1
6
Note
In the figure 2 it’s shown spaceship from the figure 1 after laser shots from example.
For 30% points all shots are on the height one 1 $\leqN \cdot$ M $\leq50$ 000, 0 < K $\leq5000$.
For another 30% points, 1 $\leqN \cdot$ M $\leq1$ 000 000, 0 < K $\leq300$ 000.
Page 2 of 4

X Zhautykov Olympiad on Mathematics, Physics and Informatics
Almaty, Kazakhstan, January 12-18, 2014
Problem E. K blocks
Input file:
blocks.in
Output file:
blocks.out
Time limit:
1 second
Memory limit:
256 megabytes
Feedback
subtask points only
Grading system
only full solution for subtask receives points
You are given a sequence A of N positive integers. Let’s define “value of a splitting” the sequence to
K blocks as a sum of maximums in each of K blocks. For given K find the minimal possible value of
splittings.
Input
First line of the input file contains two integers N and K. Next line contains N integers A1, A2, . . . , AN
(1 $\leqAi \leq106$) — the sequence elements.
Output
Output one number — minimal possible value of a splittings.
Examples
blocks.in
blocks.out
5 1
1 2 3 4 5
5
5 2
1 2 3 4 5
6
Note
Subtask 1 — 1 $\leqN \leq100$, 1 $\leqK \leqmin(N$, 5), 14 points.
Subtask 2 — 1 $\leqN \leq20$, 1 $\leqK \leqmin(N$, 20), 18 points.
Subtask 3 — 1 $\leqN \leq100$, 1 $\leqK \leqmin(N$, 100), 21 points.
Subtask 4 — 1 $\leqN \leq100000$, 1 $\leqK \leqmin(N$, 100), 47 points.
Page 3 of 4

X Zhautykov Olympiad on Mathematics, Physics and Informatics
Almaty, Kazakhstan, January 12-18, 2014
Problem F. Marriage questions
Input file:
marriage.in
Output file:
marriage.out
Time limit:
1 second
Memory limit:
256 megabytes
Feedback
full
Grading system
each test is graded separately
Once upon a time in a country far, far away, the wise king had M beautiful daughters. At last, the time
for them to get married has come. King sent a message in N neighboring kingdoms, so each of them sent
a prince to marry one of the princesses.
As a loving father the king considered his daughters’ opinions. First of all he arranged young men in a
line, enumerated them with numbers from 1 to N, and asked each of his daughters, with which of those
candidates she was agree to get married.
King had an excellent mathematical background, so it was easy for him to check whether it is possible to
find a husband for each of his daughters in such way, that requests of each daughter were satisfied. But
suddenly the king thought about more interesting question: how many pairs (L, R) (1 $\leqL \leqR \leqN$) are
there, such that it is possible to assign a husband for each daughter, using only candidates with numbers
of range from L to R inclusive?
Help king to find an answer to his question!
Input
First line contains three integers N, M
and K
(1
$\leq$
N
$\leq$
30 000, 1
$\leq$
M
$\leq$
2 000,
1 $\leqK \leqmin(N \cdot$ M, 100 000)) — number of candidates, number of girls and number of lines, describing
girls’ requests respectively.
In next K lines there are integers Ai, Bi (1 $\leqAi \leqN$, 1 $\leqBi \leqM$), it means that girl Bi likes candidate
Ai. All pairs are different.
Output
Output the number of ways king can choose a pair (L, R) to satisfy the problem statement.
Examples
marriage.in
marriage.out
5 3 7
1 1
1 2
1 3
2 3
3 2
4 2
5 1
4
Note
In the sample test pairs (1, 3), (1, 4), (1, 5) and (2, 5) satisfy the required conditions.
For 24% points N $\leq10$, M $\leq4$.
For 48% points N $\leq100$, M $\leq50$.
For 72% points N $\leq1$ 000, M $\leq500$.
Page 4 of 4

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1
