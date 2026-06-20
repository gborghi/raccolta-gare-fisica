---
tipo: prova
prova_id: prova_sol1day
competition: Russia Physics Olympiad
comp_code: Russia
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/izho.kz/sol1day.pdf
cluster: ''
n_problemi: '3'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
---

# Russia na — sol1day.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/sol1day.pdf` · Apri PDF · apri PDF p.1
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1








Problem 1.
Let
KMN and
'
'
KM N be two beautiful triangles with common vertex,
'
'
KMN
A
KM N
∠
= ∠
= ∠
. Without loss of generality, assume that
'
M lies between
B and M . The segments MN and
'
'
M N have a common point, we denote it by R .
Since
'
KMR
KM R
∠
= ∠
, the points K , M ,
'
M ,
R are concyclic and
0
'
180
KM M
KRM
KRN
∠
=
$-∠$
= ∠
. Similarly, K , N ,
'
N , R are concyclic,
therefore
'
KN N
KRN
∠
= ∠
. Thus
0
'
'
'
180
'
KM C
KM M
KN N
KN C
∠
= ∠
= ∠
=
$-∠$
.
It
follows
that
the
quadrilateral
'
'
KM CN
is
cyclic,
and
0
180
'
'
2
C
M KN
C
= ∠
+ ∠
= ∠
, so the angle C is right.

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1

## Problema 2








Problem 2.
Does there exist a function ff: $RR\toRR$ satisfying the following two conditions:
1) ff takes all real values;
2) ff(ff(xx)) = $(xx-1)ff(xx$) + 2 for all $xx\inRR$?
Answer: there is no such ff .
Suppose that such ff does exist.
1. Denote ff(1) = aa. Set xx= 1 in
 ff(ff(xx)) = $(xx-1)ff(xx$) + 2 , (1)
Then f(a)=2.
2. Now setting xx= aa in (1) we obtain ff(2) = $(aa-1$) $\cdot$ 2 + 2 , then ff(2) = 2aa.
3. By condition, $\existsbb\inRR|ff(bb$) = 1 . Let xx= bb in (1), then
 aa= ff(1) = ff൫ff(bb)൯= $(bb-1$) $\cdot$ 1 + 2 = bb+ 1 , bb= $aa-1$.
4. Further, , $\existscc\inRR|ff(cc$) = 0. Setting xx= cc in (1) we obtain
 ff(0) = ff൫ff(cc)൯= $(cc-1$) $\cdot$ 0 + 2 = 2, ff(0) = 2.
So we have 2 = ff(0) = ff(aa), whence ff൫ff(0)൯= ff(ff(aa)), or
(0 $-1)ff(0$) + 2 = $(aa-1)ff(aa$) + 2, or $-1 \cdot$ 2 + 2 = $(aa-1$) $\cdot$ 2 + 2, hence aa= 0.
 As a result: ff(0) = 2, ff(2) = 2aa= 0, ff(1) = 0, bb= $-1$, $ff(-1$) = 1.
5. Let now $dd\inRR$ be such that ff(dd) = $-1$. Set xx= dd in (1), then
1 = $ff(-1$) = ff൫ff(dd)൯= $(dd-1$) $\cdot(-1$) + 2 = $-dd+$ 3 whence dd= 2. That is ff(2) =
$-1$, contrary to ff(2) = 0.
Note. There exist function ff satisfying (1) such that EE(ff) $\neqRR$. For example
ff(xx) = ቊ
$xx-2$
$xx-1$ , $xx\neq1$
0, xx= 1
 or ff(xx) = ቄ0, $xx\neq0$
2, xx= 0

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Problema 3








Problem 3.

The answer is 180.

We reformulate the problem as follows. Given are 100 lattice points (that is, points
with integral coordinates). How many pairs of neighbours (points at distance 1) can
they form?

 To prove that this problem is equivalent to the original one, we assign the number
2 3
i
j to the point ( , )
i j . In the set of numbers thus obtained the number of pairs in
question is equal to the number of neighbouring points in the set of 100 points.

 Conversely, in any set of 100 numbers we find for each number its largest divisor m
not divisible by 2 or 3 and divide the set into groups of numbers with the same m.
Obviously the numbers in a good pair belong to the same group. Now we can assign
to each group a set of points where a point ( , )
i j corresponds to the number 2 3
i
j m . If
some numbers from different groups correspond to coinciding or neighbouring points,
we translate the image of each group by a vector long enough to avoid that.

 We can prove now that the maximum number of neighbouring pairs is attained
when the points form a 10 10
$\times$
 square (and then the number is 180).

 Let us consider rows (i.e. the set of points with the same ordinate) and columns (i.e.
the set of points with the same abscissa). Suppose we have a nonempty rows and b
nonempty columns. Clearly
100
ab $\geq$
.

 If a row contains k points then its points form at most
1
k $-$ pairs. Denoting the
numbers
of
points
in
the
rows
by
1
2
,
, ...,
a
k k
k ,
we
have
at
most
1
2
(
1)
(
1)
...
(
1)
100
a
k
k
k
a
$-$
+
$-$
+
+
$-$
=
$-$
 horizontal pairs of neighbouring points.
Similarly, we have at most 100
b
$-$
 pairs of vertical pairs. Adding these inequalities
we
have
that
the
total
number
of
pairs
does
not
exceed
200
200
2
180
a
b
ab
$-$
$-$
$\leq$
$-$
$\leq$
.

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.3
