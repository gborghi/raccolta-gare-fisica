---
tipo: prova
prova_id: prova_1-day.-contest-en
competition: Russia Physics Olympiad
comp_code: Russia
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/izho.kz/1-day.-contest-en.pdf
cluster: Meccanica
n_problemi: '3'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
  - cluster/Meccanica
---

# Russia na — 1-day.-contest-en.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/1-day.-contest-en.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1

**Problem A. Oh these volunteers**

Holding olympiad is always a hard business and the main workers are always the volunteers. Each volunteer is subordinate of exactly one other volunteer. The only exception is Aman, the head volunteer whose number is 1. This system was brought up to split up requests of contestants between the volunteers in a most efficient way.

More formally: say volunteer numbered $V$ gets $W$ requests from contestants (bring some water, print solutions, etc).

- If the volunteer has no subordinates he performs all the request himself.
- If the volunteer has $K$ ($K > 0$) subordinates and if $K$ is a divisor of $W$, each of his subordinates gets $W/K$ redirected requests and follows the same algorithm.
- If the volunteer has $K$ ($K > 0$) subordinates and if $K$ is not a divisor of $W$, all $W$ requests are ignored.

Aman wants to minimize the number of ignored requests. He would like to apologize to all of the contestants, but he needs to know the number of ignored requests at first.

**Input:** First line contains $N$ — number of volunteers. Next $N-1$ lines contain pairs $v_i, u_i$ meaning volunteer $u_i$ is subordinate of volunteer $v_i$ ($1 \le v_i, u_i \le N$). Line $N+1$ contains $M$ — number of queries. Next $M$ lines contain pairs $V_i, W_i$ ($1 \le V_i \le N$, $1 \le W_i \le 10^6$): $W_i$ — total number of requests, $V_i$ — number of volunteer.

**Output:** Print $M$ lines. The $i$-th line should contain the number of ignored requests in the $i$-th query.

**Scoring:**
1. $1 \le N, M \le 1000$. (17 points)
2. $1 \le N, M \le 100000$. All queries are given to volunteer number 1. (24 points)
3. $1 \le N, M \le 100000$. (59 points)

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1

## Problema 2

**Problem B. Liar**

Sergazy and Ulugbek love to play games.

Let $\mathcal{N} = \{0, 1, \ldots, n-1\}$. At the beginning, Sergazy chooses a single number $x$ from $\mathcal{N}$, but his choice is not revealed to Ulugbek. Ulugbek's goal is to find a subset of $\mathcal{N}$ that contains $p$ distinct elements and does not contain $x$. We will use $P$ to denote this subset. In order to find $P$, Ulugbek may ask Sergazy questions. In each question, Ulugbek chooses a set $S$, which is a nonempty subset of $\mathcal{N}$, and asks "Does $x$ belong to $S$?". Sergazy answers "yes" or "no".

Sergazy can lie, but he promised that he will never lie $k$ times in a row — among any $k$ consecutive questions there will be at least one answered truthfully. Moreover, Sergazy may change the chosen number during the game, but in such a way that does not contradict previous answers. Sergazy will only answer at most $q$ questions in total.

**Interaction protocol:** Implement the function `player_answer(n, k, p, P)` called once by the grader. The function should fill array $P$ of length $p$ with distinct integers from $\{0, \ldots, n-1\}$ not containing $x$. Questions are asked via `get_answer(S, sz)` which returns 1 ("yes") or 0 ("no").

**Scoring (5 subtasks):**
1. $n=4,\; k=2,\; p=1,\; q=2$. (9 points)
2. $4 \le n \le 10^4,\; k=2,\; 1 \le p \le n-3,\; q=2p$. (10 points)
3. $2^k \le n \le 10^6,\; 2 \le k \le 18,\; p=1,\; q=k$. (17 points)
4. $2^k \le n \le 10^6,\; 2 \le k \le 18,\; 1 \le p \le n-2^k+1,\; q=k \cdot p$. (18 points)
5. $3 \cdot 2^k \le n \le 10^6,\; 2 \le k \le 18,\; 1 \le p \le n - 3 \cdot 2^k + 1,\; q = \max\left(\left\lfloor \frac{k \cdot p}{2} \right\rfloor, k\right)$. (46 points)

Additional constraint for all subtasks: $n \cdot p \le 4 \cdot 10^6$.

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Problema 3

**Problem C. Good segments**

You are given an array $a$ of length $N$ which contains positive integers between 1 and $N$, inclusive. You need to calculate the number of *good segments* in this array (two segments are different if they differ in at least one of the endpoints). Segment $[l, r]$ is good if for any number $x$ appearing in it, the number of occurrences of $x$ in this segment is exactly $x$.

For example, segment $(2, 1, 4, 4, 2, 4, 4)$ is good, and segment $(3, 3, 2, 2, 3, 3)$ is not (3 occurs 4 times).

**Input:** First line contains integer $N$ ($1 \le N \le 500000$). Second line contains $N$ integers $a_1, a_2, \ldots, a_N$ ($1 \le a_i \le N$).

**Output:** Print exactly one number — the number of good segments.

**Scoring (8 subtasks):**
1. $1 \le N \le 200$. (12 points)
2. $1 \le N \le 500$. (13 points)
3. $1 \le N \le 2000$. (12 points)
4. $1 \le N \le 5000$. (13 points)
5. $1 \le N \le 20000$. (12 points)
6. $1 \le N \le 50000$. (13 points)
7. $1 \le N \le 200000$. (12 points)
8. $1 \le N \le 500000$. (13 points)

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.4
