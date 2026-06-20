---
tipo: prova
prova_id: prova_day1-en-1
competition: Russia Physics Olympiad
comp_code: Russia
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/izho.kz/day1-en-1.pdf
cluster: Meccanica
n_problemi: '1'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
  - cluster/Meccanica
---

# Russia na — day1-en-1.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/day1-en-1.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1








**A. Permutation**

XI Zhautykov Olympiad on Mathematics, Physics and Informatics, *DAY 1*
Almaty, Kazakhstan, January 11-17, 2015
Problem A. Permutation
Input file:
permutation.in
Output file:
permutation.out
Time limit:
0.5 seconds
Memory limit:
256 megabytes
Grading system:
only full solution for subtask receives points
Santa Claus gave NurlashKO a big array of numbers as a Christmas present. When his Math teacher found
out about this, he decided to check how well NurlashKO understood the last topic on permutations.
In order to do this, he asks whether array elements with indexes from L to R inclusively form a
permutation. In addition, he is able to change some numbers in an array. As a remainder, permutation of
n numbers is an ordered sequence of numbers 1, 2, . . . , n. In our case n is equal to R $-L$ + 1.
NurlashKO is still recovering from Christmas Holidays, and therefore, he asks you to help him not to lose
respect of his teacher.
Input
The first line of the input file contains a single number N (1 $\leqN \leq100$ 000) — the length of the Christmas
present. The second line describes an array with n integer numbers separated by a space — a1, a2, . . . , aN
(1 $\leqai \leqN$). The third line contains number M — total number of questions the Math teacher asked.
(1 $\leqM \leq100$ 000).
Each of the following M lines has 3 numbers — t, X and Y (1 $\leqt \leq2$, 1 $\leqX$, Y $\leqN$).
If t is equal to 1, the line represents update of an element, it means making assignment a[X] = Y. If t
equals to 2, then you have to check whether subinterval from X to Y represents permutation of numbers,
it is guaranteed that X $\leqY$ .
Output
For each query where t is equal to 2, print YES if given subinterval is a permutation, and NO otherwise.
Examples
permutation.in
permutation.out
5
1 5 3 4 1
5
2 1 4
1 2 2
2 2 5
1 5 5
2 1 5
NO
YES
YES
Scoring
This problem has four subtasks:
1. 1 $\leqN$, M $\leq1000$. This subtask costs 21 points.
2. 1 $\leqN$, M $\leq50$ 000. This subtask costs 28 points.
3. 1 $\leqN$, M $\leq100$ 000, only queries with t = 2 is given. This subtask costs 22 points.
4. 1 $\leqN$, M $\leq100$ 000. This subtask costs 29 points.
Subtask 2 is evaluated only if all the tests from subtask 1 is correct. Subtask 4 is evaluated only if subtask
1 and subtask 2 are successful. Subtask 3 is evaluated independently.
Page 1 of 4

XI Zhautykov Olympiad on Mathematics, Physics and Informatics, *DAY 1*
Almaty, Kazakhstan, January 11-17, 2015
Problem B. Binary Matrix
Input file:
matrix.in
Output file:
matrix.out
Time limit:
4 seconds
Memory limit:
256 megabytes
Grading system:
only full solution for subtask receives points
Instead of a fairy tail about a king and his two sons, who try to share their father’s inheritance, you are
just given N $\times$ N binary matrix, i.e. matrix which consists of values 0 and 1. You have to find a number
of ordered pairs of sub-matrices, that satisfy the following conditions:
• Both sub-matrices should contain only values 1 (one).
• The sub-matrices in the pair shouldn’t intersect, i.e. they can not have a common cell.
Input
The first line of the input contains an integer number N (1 $\leqN \leq4000$).
Each of next N lines contains N integers 0 or 1 without blanks.
Output
Print a number of pair sub-matrices by modulo 1 000 000 007.
Examples
matrix.in
matrix.out
3
110
000
001
8
Scoring
This problem has five subtasks:
1. 1 $\leqN \leq10$. This subtask costs 18 points.
2. 1 $\leqN \leq50$. This subtask costs 20 points.
3. 1 $\leqN \leq125$. This subtask costs 19 points.
4. 1 $\leqN \leq750$. This subtask costs 20 points.
5. 1 $\leqN \leq4$ 000. This subtask costs 23 points.
Each of the next subtasks will be scored in case of all the previous subtasks are successfully passed.
Page 2 of 4

XI Zhautykov Olympiad on Mathematics, Physics and Informatics, *DAY 1*
Almaty, Kazakhstan, January 11-17, 2015
Problem C. Madness and Courage
Input file:
heroes.in
Output file:
heroes.out
Time limit:
5 seconds
Memory limit:
512 megabytes
Grading system:
only full solution for subtask receives points
Many of us have been dreaming of becoming a game developer. For some of us this even has become the
reason to start studying computer science. And one day the dream came true for lucky Michael — he works
as a software engineer in a top company «Snowstorm», which is famous for it’s well-known masterpieces,
such as «Military Art» and «Stellar Job».
Recently Michael has joined a group that works on a new astonishing role playing game «Madness and
Courage». Its main feature is the possibility for the player to choose a new character at the beginning of
every level.
Before a new level starts, there are N heroes available to choose from. Each hero is characterized by the
amount of strength of his attack points ai and the amount of initial health points bi. The level is a long
cave with M monsters waiting inside. Each monster also has strength of attack ci and initial healh points
di. The chosen heroe enters the cave and starts to fight with the first monster. If he survives in the battle,
he fights against the second one, then the third and so on, until he dies or the level ends. Health points are
not restored between the fights, that means the hero always starts a new fight with the smaller amount
of health points, than in the previous one.
The hero versus monster fight constists of simultaneous strikes they give to each other. Each strike
decreases the amount of the enemy’s health points by the value of the striker’s strength of attack. As
soon as anyone’s amount of health points turns non-positive, he dies and the fight ends. Please note, that
according to these fight rules, it can happen that both due hero and monster will die simultaneously.
The company plans to make the game free and obtain money from selling different hints and additional
content. Michael is going to create the hint, that tells every hero, how many monsters this hero will kill,
if he is chosen by the player to fight at this level. As there may be an enormous number of heroes and
monsters, Michael needs your help to compute the hint values.
Input
First line of the input contains two integers N and M — the number of heroes player can choose from
and the number of monsters waiting in the cave respectively.
Each of next N lines contain hero description. For every hero two integer numbers ai and bi are given,
they correspond to the hero’s strength of attack and initial amount of health points (1 $\leqai$, bi $\leq109$).
Then follow M lines, each of them describing a single monster in the cave. For every monster values ci
and di are given, corresponding to his strength of attack and amount of health points. Monsters in the
cave are situated in the same order as they appear in the input. That means, right after the hero enters
the cave, he needs to kill the monster described in N + 2 line of the input. Right before the end of the
level due hero will fight against the monster described in the line N + M + 1 of the input file.
Output
Print N lines containing one integer number each. On the i-th line print the answer for the i-th hero.
Page 3 of 4

XI Zhautykov Olympiad on Mathematics, Physics and Informatics, *DAY 1*
Almaty, Kazakhstan, January 11-17, 2015
Examples
heroes.in
heroes.out
5 3
1 2
2 2
10 10
100 10
1 100
2 2
7 2
3 20
0
1
2
3
3
Note
First hero versus first monster fight will last for only one round, as the hero will be dead after it and the
monster will be still alive with one health point left.
Second hero has absolutely the same parameters as the first monster. This means they will kill each other,
so the answer for this hero is one.
If the player chooses the third hero to go through the cave, eight health points will be left after fighting
due first monster, and only one health point after killing the second one. This hero need to give two strikes
to kill third monster, but he will die after monster’s first strike.
Fourth hero has the same amount of health points as the third, but has much greater strength of attack,
so he will kill all the monsters, but will also die at the end of the fight with the last monster.
Fifth hero has minimal possible strength of attack, but is dur

**Topic:** [[Conservation of Energy]], [[Astrophysics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Conservation Laws (metodo)|Conservation Laws]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.1
