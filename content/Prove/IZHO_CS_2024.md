---
tipo: prova
prova_id: prova_IZHO_CS_2024
competition: Russia Physics Olympiad
comp_code: IZhO
country: Russia
year: '2024'
level: ''
pdf: gare di altri paesi/Russia/izho.kz/IZHO_CS_2024.pdf
cluster: Meccanica
n_problemi: '6'
tags:
  - kg/prova
  - anno/2024
  - paese/Russia
  - comp/IZhO
  - cluster/Meccanica
---

# IZhO 2024 — IZHO_CS_2024.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/IZHO_CS_2024.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1

**Problem A. PE class**

Dimash is a physical education teacher at a school. At the moment, he is conducting a class with $2 \times n$ students. They are going to play a certain game with 2 teams and each team should have $n$ students.

Before the game, Dimash lined up all $2 \times n$ students in a row, dressing the participants of the first team in red T-shirts and the participants of the second team in blue T-shirts. Then, each student in a red T-shirt looked to the left and counted the difference between the number of students of his color and the number of students of the opposite color. Similarly, each student in a blue T-shirt looked to the right and counted the difference between the number of students of his color and the number of students of the opposite color. Note that the difference is calculated with a sign and can be either a positive or a negative number.

All the students, from left to right, spoke out their calculated numbers. Dimash recorded all the numbers in a list, but in a shuffled order. Find, based on the record, any suitable arrangement of students that could have been at Dimash's disposal. If there are multiple suitable answers, output any of them.

**Input**

The first line contains a single integer $t$ ($1 \leq t \leq 3 \times 10^5$) — the number of test cases. The first line of each test case contains a single integer $n$ ($1 \leq n \leq 3 \times 10^5$) — the number of students in each team.

The second line of each test case contains $2 \times n$ integers $a_1, a_2, \ldots, a_{2n}$ ($-n \leq a_i \leq n$) — the list of Dimash. It is guaranteed that the sum of $n$ for all test cases does not exceed $3 \times 10^5$.

It is guaranteed that the given list of Dimash is correct, meaning that the answer always exists.

**Output**

For each test case, output a string of $2 \times n$ characters, where the $i$-th character is equal to `L`, if the $i$-th student in the row is in a red shirt and looking to the left, or `R`, if in a blue shirt and looking to the right.

**Scoring**

| Subtask | Additional Constraints | Points |
|---------|----------------------|--------|
| 0 | Examples | 0 |
| 1 | $t \leq 10$, $n = 2$ | 11 |
| 2 | $t \leq 10$, $n \leq 10$ | 15 |
| 3 | $n \leq 10$ | 9 |
| 4 | All $a_i$ are equal | 16 |
| 5 | It is guaranteed that the list of Dimash was not shuffled | 20 |
| 6 | $t \leq 2000$, $n \leq 2000$ | 29 |

$n$ — the sum of $n$ for all sets of input data.

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1

## Problema 2

**Problem B. Batyr I and Tima the Great**

There is a country that is a large ring road in the shape of a circle. On the ring road there are $L$ cities evenly spaced at a distance $1$ from each other. Neighboring cities on the ring road are connected by roads in the form of arcs. Unfortunately, the greedy King Batyr I has made these roads toll and charges $1$ gold coin for travel. But Tima the Great made $m$ illegal roads that connect two cities in a straight line (chord), $i$-th road connects two cities with numbers $a_i$ and $b_i$.

Residents can now travel by using both toll roads and free roads. In doing so, residents can change direction at the intersections of the two roads Tima built as many times as they want, and it's still free!

You are given $q$ queries, for the $i$-th query determine what is the minimum number of gold coins a resident needs to spend to travel from city $x_i$ to city $y_i$.

**Input**

The first line of input data contains three integers $L, m, q$ ($1 \leq L \leq 10^9$, $0 \leq m \leq 10^5$, $1 \leq q \leq 10^5$) — the number of cities in the country, the number of illegal roads that Tima the Great built, and the number of queries.

The next $m$ lines contain two integers each $a_i, b_i$ ($1 \leq a_i < b_i \leq L$) — the two cities that are connected by the $i$-th road.

The next $q$ lines contain two integers each $x_i, y_i$ ($1 \leq x_i, y_i \leq L$) — two cities between which the resident has to travel.

**Output**

Print $q$ lines, in the $i$-th line print the minimum number of gold coins that must be paid to travel from city $x_i$ to city $y_i$.

**Scoring**

| Subtask | Additional constraints | Points |
|---------|----------------------|--------|
| 0 | Examples | 0 |
| 1 | $m = 0$ | 5 |
| 2 | $L, m, q \leq 10^2$ | 8 |
| 3 | $L, m, q \leq 10^3$ | 11 |
| 4 | $m, q \leq 10^3$ | 10 |
| 5 | $b_i < a_{i+1}$ | 12 |
| 6 | $a_i < a_{i+1}$, $b_{i+1} < b_i$ | 14 |
| 7 | $|x_i - y_i| = 1$ ($1 \leq i \leq q$) | 18 |
| 8 | No additional constraints | 22 |

<!--fig:start-->
![[_attachments/IZHO_CS_2024/IZHO_CS_2024_p4_f1.png]]
*Ring road with chord roads example*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.3

## Problema 3

**Problem C. Lazy, but honest**

Somewhere in the world, there is a lazy programmer Batyr. He recently started a new job and wants to make a work plan for the next $N$ days. On the $i$-th day, Batyr gets new $b_i$ tasks that need to be completed. The company has a regular release etiquette, so all tasks that Batyr receives on the $i$-th day must be completed no later than day $\min(N, i + D - 1)$ for a known integer $D$.

Batyr calculated that if he focuses and works on the $i$-th day, he can complete $a_i$ tasks on that day, but no more. Alternatively, if Batyr decides not to work on the $i$-th day, he will not complete any tasks on that day. It should be noted that on the $i$-th day, Batyr can only perform tasks from days $j \leq i$.

Although Batyr is a lazy programmer, he is honest. Therefore, he must complete all his tasks. What is the minimum number of days Batyr needs to work in order to complete all his tasks?

**Input**

The first line contains a single integer $t$ — the number of test cases. The first line of each test case contains two integers $N$ and $D$ ($1 \leq D \leq N \leq 5 \times 10^5$). The second line of the test case contains $N$ integers $a_1, a_2, \ldots, a_N$ ($0 \leq a_i \leq 10^9$) — the maximum number of tasks Batyr can complete on the $i$-th day. The third line of the test case contains $N$ integers $b_1, b_2, \ldots, b_N$ ($0 \leq b_i \leq 10^9$) — the number of new tasks appearing on the $i$-th day. It is guaranteed that the sum of $N$ over all test cases does not exceed $5 \times 10^5$.

**Output**

For each test case, output a single integer — the minimum number of days Batyr needs to complete all tasks. If this is not possible, output $-1$.

**Scoring**

| Subtask | Additional constraints | Points |
|---------|----------------------|--------|
| 0 | Examples | 0 |
| 1 | $D = 1$ | 5 |
| 2 | $N \leq 18$, $T = 1$ | 7 |
| 3 | All $a_i$ equal | 18 |
| 4 | $D = N$ | 18 |
| 5 | $N \leq 2000$, $\text{sumN} \leq 2000$ | 16 |
| 6 | No additional constraints | 36 |

$\text{sumN}$ — sum of $N$ over all test cases.

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.5

## Problema 4

**Problem D. Watermelons**

Lazy Batyr loves to eat watermelons all year round. Additionally, he is quite sociable and friendly. That is why it's not surprising that he has $K$ reliable friends.

At the moment, Batyr has $n$ watermelons, and the weight of the $i$-th watermelon is $a_i$. Batyr is tired of eating watermelons by himself, so he decides to give away all the watermelons to his $K$ friends in such a way that each watermelon goes to exactly one of his friends.

Batyr considers the distribution of watermelons to be **fair** if the following conditions are met:

1. Each friend receives at least one watermelon;
2. For each friend, the sum of the weights of the watermelons they receive does not exceed the sum of the weights of the watermelons given to the other friends.

Of course, it may turn out that it is impossible to divide the available watermelons as Batyr wants. In this case, he can buy several (possibly zero) watermelons from the experienced seller Abdou. Abdou has $m$ watermelons, where the weight of the $i$-th watermelon is $b_i$.

Tell Batyr the minimum number of watermelons he should buy from Abdou to make a fair distribution, and also output the distribution itself. If a fair distribution does not exist, output $-1$.

**Input**

The first line contains three integers $n$, $m$, and $K$ ($3 \leq n \leq 5 \times 10^5$, $0 \leq m \leq 5 \times 10^5$, $3 \leq K \leq 5 \times 10^5$) — the number of watermelons Batyr has, the number of watermelons Abdou has, and the number of Batyr's friends, respectively. The second line contains $n$ integers $a_1, a_2, \ldots, a_n$ ($1 \leq a_i \leq 10^9$) — the weights of Batyr's watermelons. The third line contains $m$ integers $b_1, b_2, \ldots, b_m$ ($1 \leq b_i \leq 10^9$) — the weights of Abdou's watermelons.

**Output**

The first line contains a single integer — the minimum number of purchased watermelons, or $-1$ if a fair distribution does not exist. If the answer exists, output two more lines:

- The second line contains $n$ integers $c_1, c_2, \ldots, c_n$ ($1 \leq c_i \leq K$), where the $i$-th number $c_i$ indicates which friend should receive the $i$-th watermelon of Batyr.
- The third line contains $m$ integers $d_1, d_2, \ldots, d_m$ ($0 \leq d_i \leq K$), where $d_i = 0$ means the $i$-th watermelon from Abdou is not purchased; otherwise $d_i$ is the number of the friend to receive it.

**Scoring**

| Subtask | Additional Constraints | Points |
|---------|----------------------|--------|
| 0 | Examples | 0 |
| 1 | $m = 0$, $a_i = a_{i+1}$ ($1 \leq i < n$) | 9 |
| 2 | $a_i = a_{i+1}$, $b_j = b_{j+1}$ | 19 |
| 3 | It is not necessary to print the distribution | 24 |
| 4 | $m = 0$ | 20 |
| 5 | $b_i = 1$ ($1 \leq i \leq m$) | 10 |
| 6 | No additional constraints | 18 |

**Topic:** [[Conservation of Energy]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.19

## Problema 5

**Problem E. Candies**

New Year's vacation is ending, and bthero has already bought various delicious candies for his friends at the university. In total, he bought $n$ candies, which he wants to distribute fairly among his friends.

To do this, he decided to arrange all of the candies in the list, where the $i$-th candy from the left can be labelled by its kind $a_i$. When one of his friends arrives, bthero picks a few candies from the beginning of the list and gives them to that friend. This continues until bthero runs out of candies.

One of his friends may be offended if he finds out that another friend got the kind of candy he doesn't have. bthero doesn't want his friends to be offended and wants to give out candies to as many friends as possible.

Also, bthero wondered if he bought too many candies. So he wants to know for some pairs $(l, r)$: how many friends can get candies if he only uses candies from the interval $(a_l, \ldots, a_r)$? Notice that bthero must use all candies from the given interval.

**Input**

The first line of the input file contains two integers $n$ and $q$ — the number of candies and the number of pairs that are of interest to bthero ($1 \leq n, q \leq 10^6$). The second line gives $n$ integers $a_1, \ldots, a_n$ — types of all candies ($1 \leq a_i \leq n$). The next $q$ lines contain $l_i, r_i$ pairs for which bthero wants to know the answer ($1 \leq l_i \leq r_i \leq n$).

**Output**

Print $q$ numbers, each on a separate line. The $i$-th number must be equal to the maximum number of friends to whom bthero could give all of the candies from the interval $(l_i, r_i)$.

**Scoring**

| Subtask | Additional constraints | Points |
|---------|----------------------|--------|
| 0 | Examples | 0 |
| 1 | $a_i = 1$, $n, q \leq 1000$ | 5 |
| 2 | $q = 1$, $n \leq 100$ | 11 |
| 3 | $a_i \leq 2$; bthero has bought exactly two candies of each kind | 11 |
| 4 | $l_i = 1$ | 10 |
| 5 | $a_i \leq 100$, $n, q \leq 10^5$ | 16 |
| 6 | No additional constraints (partial) | 15 |
| 7 | $n, q \leq 3 \times 10^5$ | 12 |
| 8 | No additional constraints | 20 |

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.21

## Problema 6

**Problem F. Alikhan and studying**

Conscientious student Alikhan studies in the kingdom of Batyr II. The kingdom of Batyr II consists of $n$ cities and $m$ roads, where the $i$-th road has a length of $w_i$. Also, from any city in the kingdom, it is possible to reach any other city using these roads. In other words, the kingdom of Batyr II can be represented as a connected weighted undirected graph with $n$ vertices and $m$ edges.

Alikhan may be interested in studying in several cities. However, due to a lack of time and resources, he will have to limit himself to only some of them. Alikhan has not made a final decision on his choices, so one of the following events occurs $q$ times:

1. Alikhan changes his desire to study in city $x$ (i.e., if he previously wanted to study, he stops, and vice versa).
2. Alikhan decides that he wants to live along road number $e$ and wants to consider exactly $k$ cities for studying. Let the length of road $e$ be $W$, and its ends be cities $A$ and $B$. To choose a place to live, Alikhan will first choose an integer $x$ ($0 \leq x \leq W$), and then choose a location for his home along the road, such that the distance from it to city $A$ is $x$, and the distance to city $B$ is $W - x$. Let $l$ be the number of cities in which Alikhan wants to study, and $d_1, \ldots, d_l$ be the shortest distances from his home to these cities. Let's order this list in descending order $d_1 \geq d_2 \geq \ldots \geq d_l$. Alikhan is interested in the value of $d_k$. He finds it difficult to determine the value of $x$, so he wants to calculate the sum of the values of $d_k$ for all possible $0 \leq x \leq W$.

Help Alikhan find the answers to his questions.

**Input**

The first line contains three integers $n$, $m$, and $q$ ($2 \leq n \leq 10^3$, $1 \leq m \leq \min\left(\frac{n(n-1)}{2}, 10^3\right)$, $1 \leq q \leq 5000$) — the number of cities, roads, and events, respectively.

Each of the next $m$ lines contains the roads of the kingdom $u_i, v_i$, and $w_i$ ($1 \leq u_i, v_i \leq n$, $1 \leq w_i \leq 10^7$) — the numbers of cities connected by the $i$-th road and its length.

Each of the following $q$ lines describes the events. First, one integer $t_i$ ($1 \leq t_i \leq 2$) is given — the type of event $i$.

- If $t_i = 1$, then in the same line, one integer $x_i$ ($1 \leq x_i \leq n$) is additionally given — the number of the city in which Alikhan changes his desire to study.
- If $t_i = 2$, then in the same line, two integers $e_i$ and $k_i$ ($1 \leq e_i \leq m$, $1 \leq k_i \leq 10$) are additionally given — the number of the road along which Alikhan wants to live and the number of cities he will consider for studying.

Initially, Alikhan does not want to study anywhere. It is also guaranteed that during any event $i$ of the second type, there are at least $k_i$ cities in which Alikhan wants to study.

**Output**

For each event of the second type, output the answer on a separate line.

**Scoring**

Let $L$ denote the maximum weight of an edge. Also let $S$ denote the maximum number of cities in which at the time of the event of the second type Alikhan wants to study (note that initially before all events $S = 0$).

| Group | Additional constraints | Points |
|-------|----------------------|--------|
| 0 | Examples | 0 |
| 1 | $S = 1$ | 8 |
| 2 | $n, q \leq 100$, $L = 1$ | 8 |
| 3 | $n, L \leq 100$, $q \leq 10^3$ | 12 |
| 4 | $m = n-1$, $u_i = i$, $v_i = i+1$, $k_j = 1$ | 10 |
| 5 | $m = n-1$, $k_j = 1$ | 15 |
| 6 | $k_j = 1$ | 24 |
| 7 | No additional constraints | 23 |

**Topic:** [[Newtonian Mechanics]], [[Gravitation]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.23
