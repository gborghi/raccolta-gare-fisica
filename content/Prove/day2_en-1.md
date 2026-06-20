---
tipo: prova
prova_id: prova_day2_en-1
competition: Russia Physics Olympiad
comp_code: Russia
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/izho.kz/day2_en-1.pdf
cluster: Meccanica
n_problemi: '11'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
  - cluster/Meccanica
---

# Russia na — day2_en-1.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/day2_en-1.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1








1. 1 $\leqN$, M $\leq1$ 000. Score 22 points.

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.1

## Problema 2








2. 1 $\leqN$, M $\leq100$ 000. Only query (second type) operations are allowed. Score 27 points.

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.1

## Problema 3








3. 1 $\leqN$, M $\leq100$ 000. Score 51 points.
Each subtask will be scored only if the solution successfully passes all of the previous subtasks.
Example
game.in
game.out
3 3
1 5 1
2 3
1 1 5
2 3
2
1
Page 1 of 4
XIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 2*
Almaty, Kazakhstan, January, 15, 2017
Problem E. Bomb
Input file:
bomb.in
Output file:
bomb.out
Time limit:
1 second
Memory limit:
128 megabytes
Earthlings and aliens are fighting for Mars. The battle goes on a rectangular grid of cells of size N $\times$ M.
Each cell is wholly owned by one of the parties. Earthlings may create a bomb destroying every cell in
some rectangular area on the battlefield, and sides of this area are parallel to sides of battlefield. Bomb
can not be rotated and used outside of the battlefield. Bomb can be used unlimited number of times.
Of course, humans do not want to destroy their own cells, however they can create a bomb with only a
certain size. Calculate bomb with maximal affected area (i.e. the product of the height and width), such
that it is possible to destroy all cells of aliens and do not destroy any Earthlings cell. Any alien cell can
be destroyed multiple times.
Input
First line of input contains two integers N, M (1 $\leqN$, M $\leq2$ 500), separated by space, where N and
M — height and width of battlefield correspondingly. Then N lines each one by M symbols follows,
defining battlefield. If symbol in given line is «0», then corresponding cell belongs to Earthlings, otherwise
if symbol is «1», then cell belongs to aliens.
Output
Output one integer - the maximal area of bomb destruction
Scoring
This task contains exactly 100 tests:

**Topic:** [[Rotational Dynamics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.1

## Problema 4








1. In tests 1-6: N = 1 or M = 1.

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Problema 5








2. In tests 7-16: 1 $\leqN$, M $\leq20$.

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Problema 6








3. In tests 17-26: 1 $\leqN$, M $\leq100$.

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Problema 7








4. In tests 27-36: 1 $\leqN$, M $\leq450$.

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Problema 8








5. In tests 37-100: 1 $\leqN$, M $\leq2500$.
For each successfully passed test participant get 1 point.
Example
bomb.in
bomb.out
5 6
001000
111110
111110
111110
000100
3
Note
In sample test size of optimal bomb is 3 $\times$ 1.
Page 2 of 4
XIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 2*
Almaty, Kazakhstan, January, 15, 2017
Problem F. Hard route
Input file:
road.in
Output file:
road.out
Time limit:
1 second
Memory limit:
256 megabytes
Mansur
— is governor of the country ACMstan. There are N cities and N $-1$ two-way roads in this
country. It is known that from any city you can go to any other city moving along existing roads. More
formally, the country looks like a tree, where the vertices are cities and the edges are two-way roads.
Also, in this country, the cities with exactly one connected road called terminal. A route is a simple
path from one terminal to another terminal. The distance between two cities is the minimum number of
roads on the way between them. The distance from city to the route is the minimum number of roads on
the way from given city to any city on the route. Mansur decided to implement exactly one route in
ACMstan, however he interested in only hard routes. Hardness of route computed as follows: let A and
B are terminals of the route, and H is the maximum distance from any city in the country to this route,
then the hardness of route is product of H and the distance between A and B.
Mansur asked Temirulan to find maximal hardness over all routes, in fact he is interested to know the
number of such routes. Temirulan asking help from you.
It’s strongly recommend to read explanation below.
Input
First line of input contains a positive integer N (2 $\leqN \leq500000$) — the number of cities in the country.
The cities are numbered from 1 to N. The following N $-1$ lines contain 2 positive integers, separated by
single space, ui, vi (1 $\lequi$, vi $\leqN$; ui ̸= vi) — road connecting cities ui and vi. It is guaranteed that the
given graph is a tree.
Output
Output in single line two integers — the maximal hardness and the number of routes, separated by single
spaces. Note that, route from A to B and route from B to A are the same routes.
Scoring
This problem consists of three subtasks:

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Problema 9








1. 2 $\leqN \leq100$. Score 19 points.

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.3

## Problema 10








2. 2 $\leqN \leq5000$. Score 33 points.

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.3

## Problema 11








3. 2 $\leqN \leq500000$. Score 48 points.
Each subtask will be scored if only if the solution successfully passes all of the previous subtasks.
Page 3 of 4
XIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 2*
Almaty, Kazakhstan, January, 15, 2017
Examples
road.in
road.out
7
1 2
1 3
2 4
2 5
3 6
3 7
6 2
4
1 2
2 3
2 4
2 3
5
1 2
2 3
3 4
4 5
0 1
Note
A simple path is a path with no repeated vertices. Note, that there may be simple path which is not
route.
First sample test:
There is four terminal cities with number 4, 5, 6 and 7. For route 4-2-1-3-6, the distance is 4 and distances
from other cities to this route is [1, 1], maximum among them is 1, so the hardness of route is equal to
4 $\times$ 1 = 4. For route 4-2-5, the distance is 2, maximum distance among other cities is 3 (from 6 or 7),
hardness of route equal to 3 $\times$ 2 = 6. Hardness of 6-3-7 also 6, but other routes has smaller hardness.
In third sample test there is only two terminal cities 1 and 5, so there is exactly one route 1-2-3-4-5, the
distance is 4 and maximum distance among all cities to route is 0, because all cities are on this route
already. Hardness is equal to 4 $\times$ 0 = 0.
Page 4 of 4

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.3
