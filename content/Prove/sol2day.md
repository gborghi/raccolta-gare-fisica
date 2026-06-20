---
tipo: prova
prova_id: prova_sol2day
competition: Russia Physics Olympiad
comp_code: Russia
country: Russia
year: na
level: ''
pdf: gare di altri paesi/Russia/izho.kz/sol2day.pdf
cluster: ''
n_problemi: '1'
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
---

# Russia na — sol2day.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/sol2day.pdf` · Apri PDF · apri PDF p.1
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1








Problem 4.
The answer is no.
 Solution. Note that for each polynomial
( )
P x with integral coefficients the integers
a , b , c , d such that
(1
3)
3
P
a
b
+
=
+
 and
(3
5)
5
P
c
d
+
=
+
 are uniquely
defined. We call a polynomial regular if a
c
$-$ and b
d
$-$
 are even. If
,
P Q are
regular and k is an integer, then P
Q
+
 and kP are obviously regular. Let us prove
that R
PQ
=
 is also regular. Indeed, if
(1
3)
3
P
a
b
+
=
+
,
(3
5)
5
P
c
d
+
=
+
,
(1
3)
'
' 3
Q
a
b
+
=
+
,
(3
5)
'
' 5
Q
c
d
+
=
+
, then
(1
3)
(
3)( '
' 3)
(
' 3
')
(
'
') 3,
R
a
b
a
b
aa
bb
ab
ba
+
=
+
+
=
+
+
+

(3
5)
(
5)( '
' 5)
(
' 5
')
(
'
') 5.
R
c
d
c
d
cc
dd
cd
dc
+
=
+
+
=
+
+
+

Clearly if
(mod 2)
a
c
≡
,
(mod 2)
b
d
≡
,
'
'(mod 2)
a
c
≡
,
'
' (mod 2)
b
d
≡
, then
' 3
'
' 5
' (mod 2)
aa
bb
cc
dd
+
≡
+
 и
'
'
'
' (mod 2)
ab
ba
cd
dc
+
≡
+
.

 Now the polynomial
( )
P x
x
=
 is regular. It follows that so are all the polynomials
with integral coefficients, therefore, the desired polynomial does not exist.

Solution of problem 5.
Note that it is enough to prove that f(a,b,c) = f(b,a,c) = f(a,c,b). First, let us consider the
following interpretation of our problem:
For every 6-tuple (X1, X2, X3, Y1,Y2, Y3) satisfying conditions of the problem, we
construct three sequences
A = (a1, $\dots$, a2014), B = (b1, $\dots$, b2014), C = (c1, $\dots$, c2014)
as follows:

for i = $1,\dots,2014$

$\in$
$\in$
=
otherwise.
,0
,
\
if
,1
if
,2
1
1
1
Y
X
i
Y
i
ai

Similarly, we define sequences B, C. Conditions (i), (ii), (iii) imply the following
conditions for sequences (A, B, C):
(P1) number of nonzero elements in A is a; number of nonzero elements in B is b; number
of nonzero elements in C is c;
(P2) if ai = 2 for some i, then bi = ci = 0; if bi =2, then ci =0.
Clearly, for every sequences (A, B, C) satisfying (P1), (P2) we may construct a sequence
(X1, X2, X3, Y1,Y2, Y3) that satisfies (i), (ii), (iii) of the problem.
So, f(a,b,c) is a number of sequences (A, B, C) satisfying (P1), (P2).
Let us first prove that f(a,b,c) = f(b,a,c). We establish the bijection
1
$\Phi$ between triples
corresponding to the order (a, b, c) and (b, a, c) as follows
1
$\Phi$ ((A, B, C)) = (A’, B’, C),
where A’ = (
2014
1
'
,...,
'
a
a
), B’ = (
2014
1
'
,...,
'
b
b
) and for all i = $1,\dots,2014$
)
2,1(
)
,
(

if
)
,
(
)
'
,
'
(
$\neq$
=
i
i
i
i
i
i
b
a
a
b
b
a
 and
otherwise.
)
,
(
)
'
,
'
(
i
i
i
i
b
a
b
a
=

(Applying this transform twice we get the initial triple.)
Applying
1
$\Phi$ , we get the property (P1) for (b,a): the number of entries 1,2 in A’ is b and
the number of entries 1,2 in B’ is a. Let us check that (P2) will also be satisfied. If no, then there
is i with
i
a' = 2 and
i
b' $\in$ {2,1}; the pair (2,2) cannot occur since we interchanged (ai, bi);
i
b'
cannot be 1 since we did not interchange (1,2). As to the sequence C, if
i
b' = 2, then ai was equal
to 2 which gives that ci = 0. So, f(a,b,c) = f(b,a,c).
To prove now that f(a,b,c) = f(a,c,b) we consider a similar bijection
2
$\Phi$ :
2
$\Phi$ ((A, B, C)) = (A, C’, B’) with B’ = (
2014
1
'
,...,
'
b
b
), C’ = (
2014
1
'
,...,
'
с
с
) and for all i = $1,\dots,2014$
)
2,1(
)
,
(

if
)
,
(
)
'
,
'
(
$\neq$
=
i
i
i
i
i
i
c
b
b
c
c
b
 and
otherwise.
)
,
(
)
'
,
'
(
i
i
i
i
c
b
c
b
=

Using a similar argument as explained above, conditions for (P1), (P2) hold for a pair (B’, C’).
To show a full check with (P2), finally note that if
ia = 2, then bi = ci = 0 and the same holds
after
2
$\Phi$ .

Problem 6.

We use the following

Lemma. A convex quadrilateral XYZT has an inscribed circle if and only if
tan
: tan
tan
: tan
2
2
2
2
YXZ
TXZ
YZX
TZX
∠
∠
∠
∠
=
.

Proof of the lemma. Let the incircles of triangles XYZ and XTZ touch XZ at
1Y and
1T , respectively. It is easy to see that
1
2
XY + XZ -YZ
XY =
 and
1
2
XT + XZ -YZ
XT =
,
and XYZT is tangential if and only if
1
1
XY
XT
=
, which is equivalent to
1
1
1
1
:
:
XY Y Z
XT T Z
=
 and, further, to
tan
: tan
tan
: tan
.
2
2
2
2
YXZ
TXZ
YZX
TZX
∠
∠
∠
∠
=

Applying the lemma to quadrilaterals
1
1
1
B AD C ,
7
1
8
2
C C C C ,
4
2
6
C C C C , we have
8
1
2
7
1
2
1
1
1
1
1
1
1
1
8
2
1
7
2
1
2
5
2
5
2
4
2
4
tan
: tan
tan
: tan
tan
: tan
2
2
2
2
2
2
tan
: tan
tan
: tan
tan
: tan
.
2
2
2
2
2
2
C C C
C C C
B AC
D AC
B C A
D C A
C C C
C C C
CC C
C CC
CC C
C CC
∠
∠
∠
∠
∠
∠
=
=
=
∠
∠
∠
∠
∠
∠
=
=
=
that is,
tan
: tan
tan
: tan
2
2
2
2
BAC
DAC
BCA
DCA
∠
∠
∠
∠
=

and the quadrilateral ABCD is circumscribed.

 Applying again the lemma to quadrilaterals
2
7
3
BB C C ,
7
1
8
2
C C C C , ABCD , we get
6
8
2
8
6
8
2
8
tan
: tan
tan
: tan
.
2
2
2
2
C C D
D C D
C DC
D DC
∠
∠
∠
∠
=

and the quadrilateral
6
8
2
C C DD is circumscribed, q.e.d.

**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1
