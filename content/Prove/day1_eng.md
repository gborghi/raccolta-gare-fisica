---
tipo: prova
prova_id: prova_day1_eng
competition: Russia Physics Olympiad
comp_code: Russia
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/izho.kz/day1_eng.pdf
cluster: Meccanica
n_problemi: '1'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
  - cluster/Meccanica
---

# Russia na — day1_eng.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/day1_eng.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1








**A. New Year Train**

VIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 1*
Almaty, Kazakhstan, Tuesday, January 17, 2012
Problem A. New Year Train
Input
le:
a.in
Output
le:
a.out
Time limit:
2 seconds
Memory limit:
128 megabytes
On the New Year Eve a government of one country decided to send a train with gifts to each town of the
country. For each of N towns exactly one wagon with gifts was sent. The route was organized in such way
that at each place the last wagon would be detached, then in the next place the other last one and so on.
Just before the departure it turned out that the loading workers did not pay attention to numeration of
the wagons and loaded the gifts into the wagons in random order. It was impossible to detach a wagon
from the middle of the train and there was no time to rearrange gifts.
Luckily, there was a depot with parallel tracks. At the entrance of the depot each wagon could be directed
to any of the tracks, and wagons could leave the depot from the other side in the right sequences: 1, 2, 3,
4, and so on.
For example, if at the entrance of the depot with three parallel tracks there were six wagons standing in
order: 2, 5, 1, 4, 6, 3, then wagons 2, 5, 6 could be directed to the
rst track; wagons 1, 4 to the second
track, wagon 3 to the third track could be directed respectively. In this case wagons could leave the depot
in the right order.
Fortunately, there were enough tracks in the depot to rearrange the train.
Input
The
rst line of input
le contains two integers N and M  the number of wagons in the train and the
number of tracks in the depot respectively (1 $\leqN \leq800$ 000, 1 $\leqM \leq100$ 000, M $\leqN$). The second
line contains N integers  sequence of wagons before the entrance to the depot.
It's guaranteed that solution always exists.
Output
On the
rst line output
le must contain N integers  which track should be chosen for each wagon from
input data. On the second line of output
le write the number of tracks in order the wagons should leave
the depot in the sequence 1, 2, 3, and so on.
Examples
a.in
a.out
6 3
2 5 1 4 6 3
1 1 2 2 1 3
2 1 3 2 1 1
Note
In 30% of testcases N $\leq100$.
In 60% of testcases N $\leq10$ 000.
Page 1 of 4

VIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 1*
Almaty, Kazakhstan, Tuesday, January 17, 2012
Problem B. Beautiful row
Input
le:
b.in
Output
le:
b.out
Time limit:
3 seconds
Memory limit:
256 megabytes
Ali-Amir wrote N numbers in a row. A row is called beautiful if any two of the neighbour numbers in the
row have got the same amount of ones in binary or ternary notations.
Ali-Amir wants to count the number of ways the all given numbers can be written in a beautiful row.
Input
The
rst line of input
le contains integer N (2 $\leqN \leq20$). The next line contains N non-negative
integers not exceeding 109 each.
Output
Output the number of ways the all given numbers can be placed in a beautiful row.
Examples
b.in
b.out
3
5 1 6
2
Note
In the sample 5 = 123 and 1 = 13, 5 = 1012 and 6 = 1102, thus rows 1 5 6 and 6 5 1 are beautiful.
In 25% of testcases N $\leq4$.
In 50% of testcases N $\leq10$.
Page 2 of 4

VIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 1*
Almaty, Kazakhstan, Tuesday, January 17, 2012
Problem C.
Input
le:
c.in
Output
le:
c.out
Time limit:
2 seconds
Memory limit:
256 megabytes
You are given numbers N, x and a sequence of N numbers. Find the largest possible interval of consequently following elements, such that "xor"of these elements is not less than x. I.e., more formally,
nd
such i and k that
ai ⊕ai+1 $⊕\cdot \cdot \cdot ⊕ai+k-1 \geqx$, 1 $\leqi \leqi$ + k $-1 \leqN$,
and k is largest possible positive number.
It's guaranteed that for each test from the testset such an interval exists.
We remind you that xor(⊕) operation is applied to numbers in binary representation, so that for each
pair of bits the following is true:
0 ⊕0 = 0
0 ⊕1 = 1
1 ⊕0 = 1
1 ⊕1 = 0
The result of this operation doesn't depend on the order of operands a⊕b = b⊕a. Moreover (a⊕(a⊕b)) = b.
In Pascal this operation is represented as xor. In C/C++/Java as ∧.
Input
The
rst line of input contains N (1 $\leqN \leq250$ 000) and x (0 $\leqx \leq1$ 000 000 000). The second line of
input contains N non-negative numbers not exceeding 109.
Output
The
rst line of output must contain two numbers: i and k. In case of many solutions output the one with
the smallest i.
Examples
c.in
c.out
4 6
6 1 2 4
2 3
Note
In 40% testcases N $\leq35$ 000.
In 80% testcases N $\leq100$ 000.
Page 3 of 4

VIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 1*
Almaty, Kazakhstan, Tuesday, January 17, 2012
Problem D. Biochips
Input
le:
d.in
Output
le:
d.out
Time limit:
2 seconds
Memory limit:
512 megabytes
Scientists discovered a biochip, which can divide itself into several new biochips. Herewith the parentbiochip disappears. Each biochip has its own size of memory, the size does not depend on the parent
memory size. Then the biochip might be either used (stopping its division), or it will continue division in
a similar manner.
Scientists prepared tree-like schemes of biochip-division process and they know the exact structure of the
tree consisting of N elements, including the memory size of each of possible biochips descendants.
Make a program to choose from the tree exactly M biochips total memory size of which is the biggest
possible. Pay attention to the fact that when we are choosing a biochip, we can't choose neither any of
its ancestors nor descendants.
Input
The
rst line of input
le contains two integers N and M  number of elements of the tree and number
of biochips to be chosen (1 $\leqN \leq200$ 000, 1 $\leqM \leq500$).
The following N lines contain two non-negative integers each: number of the parent in the tree and the
size of the chip's memory x (1 $\leqx \leq1000$). Each biochip has a unique number ranging from 1 to N
inclusively. The line with i number includes information about a biochip with number i $-1$. Just one
biochip doesn't have a parent and it's parent is written as 0.
It's guaranteed that it's possible to choose M biochips.
Output
Output
le consists of one integer  maximal possible amount of memory of M chosen biochips.
Examples
d.in
d.out
7 3
2 100
0 1000
2 150
3 100
3 5
5 100
2 50
300
Note
In 20% of testcases N $\leq20$, M $\leq10$.
In 60% of testcases N $\leq10$ 000, M $\leq100$.
Page 4 of 4

**Topic:** [[Conservation of Energy]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.1
