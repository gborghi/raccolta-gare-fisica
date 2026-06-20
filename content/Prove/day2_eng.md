---
tipo: prova
prova_id: prova_day2_eng
competition: Russia Physics Olympiad
comp_code: Russia
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/izho.kz/day2_eng.pdf
cluster: Fisica Moderna
n_problemi: '1'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
  - cluster/Fisica Moderna
---

# Russia na — day2_eng.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/day2_eng.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Fisica Moderna]]
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1








**E. Ants**

VIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 2*
Almaty, Kazakhstan, Tuesday, January 18, 2012
Problem E. Ants
Input
le:
e.in
Output
le:
e.out
Time limit:
2 seconds
Memory limit:
256 megabytes
There are K ants running along coordinate grid lines inside the
eld. A
eld of size W $\times$ H centimeters
has one corner at (0,0) and another one at (W, H). Each ant can run in one of 4 directions with speed 1
centimeter per second.
Since ants are very proude creatures, they never give way. Thus, if several ants face head-on, they immediately turn around and run in the opposite direction. When two ants run perpendicular they will not pay
attention to each other. If an ant reaches the boundary of the
eld it also turns around and runs back.
You are given positions and directions of movement of all the ants in initial moment of time. Find their
positions and directions of movement after T seconds.
Input
The
rst line of input contains 4 integers: W, H, K, T (1 $\leqW$, H, K $\leq100$, 1 $\leqT \leq109$).
Each of the following K lines contains 3 integers: Xi, Yi, Di, where (Xi, Yi)  coordinates the ith ant,
Di  direction of his movement (0 < Xi < W, 0 < Yi < H, 1 $\leqDi \leq4$). Di = 1 if ant moves in direction
of increasing X, Di = 2  in direction of increasing Y , Di = 3  in direction of decreasing X, Di = 4
in direction of decreasing Y .
All of the numbers in lines are separated by single spaces. All ants are located in dierent points.
Output
Output
le consists of exactly K lines  one line for each ant in the same order as they are given in the
input. Each line contains 3 integers separated by single spaces  coordinates of the ant and direction of
his movement.
Examples
e.in
e.out
4 4 2 3
1 1 1
3 3 4
4 1 3
3 0 2
4 4 2 4
1 1 1
3 3 4
3 1 3
3 1 2
4 4 2 2
1 1 1
3 1 3
1 1 3
3 1 1
4 4 2 2
2 1 1
3 1 3
1 1 3
4 1 3
Note
In 60% testcases 1 $\leqT \leq1000$.
Page 1 of 4

VIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 2*
Almaty, Kazakhstan, Tuesday, January 18, 2012
Problem F. Monkey and Apple-trees
Input
le:
f.in
Output
le:
f.out
Time limit:
2 seconds
Memory limit:
256 megabytes
Everyone knows that the yummiest fruit in the world is an apple. Even the monkey Chris knows that.
There are many apple-trees in the a forest located along the river and numerated consecutively starting
from 1. Sometimes Chris comes to the forest, chooses a group of apple-trees growing consecutively (selected
interval) and counts the amount of apple-trees with red-ripen apples among them. Sometimes apples on
a few consequtive apple-trees have red-ripen before his next arrival.
You have to answer how many apple-trees in the selected interval have red-ripen apples at each Chris's
arrival. At the beginning all the apples are unripen.
Input
In the
rst line of input
le an integer M is given  number of events (1 $\leqM \leq100000$). The following
M lines contain description of events  each contains three integers Di, Xi, Yi (1 $\leqDi \leq2$, Xi $\leqYi$).
If the Di = 1, then the event is Chris's arrival, if the Di = 2  red-ripening of all apples in the selected
interval of the apple-trees. Other two numbers Xi and Yi, describe the interval for the event.
For calculating the limits of the interval there is an additional number C. At the beginning C = 0. An interval for the event is interval from Xi+C to Yi+C inclusively. It's guaranteed that 1 $\leqXi+C$, Yi+C $\leq109$.
If the event is apples red-ripening then C doesn't change. If the event is Chris's arrival, then as the result
C becomes equal to the amount of red-ripen apple-trees he has counted.
Output
For each of Chris's arrival output one line with one number in it  the task answer.
Examples
f.in
f.out
3
2 5 8
2 7 10
1 1 10
6
4
2 2 3
1 1 3
2 2 3
1 -1 3
2
4
6
2 1 7
2 10 12
1 7 11
2 11 13
1 8 10
1 15 17
3
2
0
Note
In 35% testcases M $\leq10$ 000, 1 $\leqXi$ + C, Yi + C $\leq106$.
In 60% testcases 1 $\leqXi$ + C, Yi + C $\leq107$.
Page 2 of 4

VIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 2*
Almaty, Kazakhstan, Tuesday, January 18, 2012
Problem G. Mountain Trek Route
Input
le:
g.in
Output
le:
g.out
Time limit:
2 seconds
Memory limit:
64 megabytes
In Almaty countryside a mountain cycle trek route (a route with a start and
nish at one point) has been
constructed. We will simulate the route in a way of stairs (not hills) of one and the same width each, each
step i is horizontal and is marked by the sea level ai meters. Hegths of neighbor stairs may be equal. The
difficulty of the route is a sum of ups and downs. More formaly,
difficulty = |a1 $-a2|$ + |a2 $-a3|$ + $\cdot \cdot \cdot$ + $|an-1 -an|$ + |an $-a1|$.
The
rst constructed trek route appeared to be too challenging for tourists. To decrease the route di
culty
we can use k blocks. The block's wigth equals stair's width and the block's height equals one meter. We
may put any block on any stair or on another block or does't use it at all.
De
ne the maximum possible decrease of the trek route di
culty.
Input
In the
rst input
le line there are the following numbers N (2 $\leqN \leq106$) and k (1 $\leqk \leq109$). In the
next line there are n non-negative integers which are the height of each of the stairs.
Output
Output one number, which is maximum possible decrease of the trek route di
culty.
Examples
g.in
g.out
4 5
4 3 2 1
4
3 2
1 2 1
2
7 1000
4 3 3 2 3 2 1
8
Note
In the
rst test case the di
culty of the trek was equal to 6 (3 downs at height one and one up at height
3 taking into account the cycle feature of the trek). If we put one block on the third stair and two blocks
on the last stair we will decrease the di
culty of the trek at 4. We can use all 5 blocks to produce the
same answer, but it's impossible to make any changes to simplify the route more.
In 30% of testcases N $\leq100$, k $\leq1000$.
In 60% of testcases N $\leq100$ 000.
Page 3 of 4

VIII Zhautykov Olympiad on Mathematics, Physics and Informatics, *Day 2*
Almaty, Kazakhstan, Tuesday, January 18, 2012
Problem H. Substrings
Input
le:
h.in
Output
le:
h.out
Time limit:
2 seconds
Memory limit:
256 megabytes
[http://en.wikipedia.org/wiki/Bioinformatics] Since the Phage F-X174 was sequenced in 1977, the DNA
sequences of thousands of organisms have been decoded and stored in databases. This sequence information
is analyzed to determine genes that encode polypeptides (proteins), RNA genes, regulatory sequences,
structural motifs, and repetitive sequences. A comparison of genes within a species or between dierent
species can show similarities between protein functions, or relations between species (the use of molecular
systematics to construct phylogenetic trees). With the growing amount of data, it long ago became
impractical to analyze DNA sequences manually. Today, computer programs such as BLAST are used
daily to search sequences from more than 260 000 organisms, containing over 190 billion nucleotides. These
programs can compensate for mutations (exchanged, deleted or inserted bases) in the DNA sequence, to
identify sequences that are related, but not identical. A variant of this sequence alignment is used in
the sequencing process itself. The so-called shotgun sequencing technique (which was used, for example,
by The Institute for Genomic Research to sequence the
rst bacterial genome, Haemophilus in
uenzae)
does not produce entire chromosomes, but instead generates the sequences of many thousands of small
DNA fragments (ranging from 35 to 900 nucleotides long, depending on the sequencing technology). The
ends of these fragments overlap and, when aligned properly by a genome assembly program, can be used
to reconstruct the complete genome. Shotgun sequencing yields sequence data quickly, but the task of
assembling the fragments can be quite complicated for larger genomes. For a genome as large as the human
genome, it may take many days of CPU time on large-memory, multiprocessor computers to assemble
the fragments, and the resulting assembly will usually contain numerous gaps that have to be
lled in
later. Shotgun sequencing is the method of choice for virtually all geno

**Topic:** [[Nuclear & Particle Physics]], [[Astrophysics]]
**Metodi:** [[Radioactive Decay Law (metodo)|Radioactive Decay Law]], [[Mass-Energy Equivalence (metodo)|Mass-Energy Equivalence]], [[Conservation Laws (metodo)|Conservation Laws]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.1
