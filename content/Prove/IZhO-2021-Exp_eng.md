---
tipo: prova
prova_id: prova_IZhO-2021-Exp_eng
competition: Russia Physics Olympiad
comp_code: IZhO
country: Russia
year: '2021'
level: ''
pdf: gare di altri paesi/Russia/izho.kz/IZhO-2021-Exp_eng.pdf
cluster: Onde e Oscillazioni
n_problemi: '5'
tags:
  - kg/prova
  - anno/2021
  - paese/Russia
  - comp/IZhO
  - cluster/Onde e Oscillazioni
---

# IZhO 2021 — IZhO-2021-Exp_eng.pdf

**Fonte:** `gare di altri paesi/Russia/izho.kz/IZhO-2021-Exp_eng.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Onde e Oscillazioni]]
**Soluzioni (stessa cartella):**  ·  ·  ·  · 
## Problema 1








1. Constructing a theoretical model.
Consider a mathematical pendulum, which is a small massive ball suspended
on an inextensible thread of length l . The pendulum is subject to the gravity field
with the free fall acceleration g . In the following neglect the air resistance
completely.
1.1 Write down a formula for the period T of small oscillations of a mathematical
pendulum.
Assume that at the initial moment of time
0
0
t =
 the angle of the thread
deflection from the vertical is
0
$\phi$ , and the initial velocity of the ball is equal to zero.
The ball moves along an arc of a circle, therefore, its position is determined by the angle of the thread
deflection from the vertical $\phi$ , and the rate of change of this angle in time is determined by the angular
velocity
dt
$d\phi$
$\omega$ =
.
1.2 Obtain an exact formula for the dependence of the angular velocity of the pendulum on the deflection
angle ( )
$\phi$
$\omega$
 for a given angular amplitude
0
$\phi$ and known values of
g
l,
.
The motion of the pendulum is symmetrical with respect to the vertical, therefore, to calculate the
period of oscillation, it is sufficient to evaluate the time
1t of its motion from the maximum to zero
deflection.
1.3 Write down an exact expression for calculating the time 1t from the known dependence of the angular
velocity on the deflection angle ( )
$\phi$
$\omega$
.
1.4 Express a period of oscillations T in terms of time 1t .
In a computer experiment, when performing calculations, real dimensional quantities are rarely used,
since they can have very different orders of magnitude and are extremely inconvenient. Usually, all
quantities are made dimensionless or reduced with the aid of some values characteristic for a given problem.
For example, in our study, the characteristic time is the period of oscillations, so it is convenient to introduce
the dimensionless time $\tau$ , which is determined by the following formula:
XVII International Zhautykov Olimpiad/Experimental Competition
2/3
l
g
t
=
$\tau$
.
1.5 Write down a formula relating the angular velocity in dimensionless units
$\tau$
$\phi$
$\omega$
d
d
=
~
 to the previously
defined angular velocity $\omega$ .
1.6 Determine a period T~ of small oscillations of the mathematical pendulum in the dimensionless units of
time.
1.7 Determine a dependence of the angular velocity $\omega~$ on the deflection angle $\phi$ : ( )
$\phi$
$\omega~$
.
ATTENTION! In what follows, the introduced dimensionless quantities are used everywhere: time $\tau$ ,
period T~ and angular velocity $\omega~$ , which are respectively denoted as t , T and $\omega$ .

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1

## Problema 2








2. Designing an experimental setup, planning an experiment.
In a computer experiment, this stage corresponds to the
development of a calculation algorithm. In this case, the main idea of
numerical (computer) calculations is to divide the trajectory of motion
into small sections, in which the motion is described approximately.
We divide the interval of motion from
0
$\phi$
$\phi$ =
 to
0
=
$\phi$
 into N
equal intervals of width
$\phi$
$\Delta$
. Let us denote the splitting points as
k
$\phi$ ,
0,1,...
k
N
=
 and the angular velocities at these points as
k
$\omega$ . The main
approximation used in further calculations is that at each interval from
k
$\phi$ to
1
+
k
$\phi$
 the motion of the pendulum is considered uniformly
accelerated. It is natural to expect that with an increase in the number of
partition intervals N , the calculation accuracy should grow.
Within the framework of the approximation made, it is straightforward to find the time of the
pendulum motion in the interval from
0
$\phi$ to 0. For a given amplitude
0
$\phi$ and the number of partition
intervals N , the calculation algorithm is revealed in the sequence of answers to the following questions.
2.1 Determine the partition interval $\phi$
$\Delta$
.
2.2 Determine the coordinates of the splitting points
k
$\phi$ .
2.3 Express the angular velocity
k
$\omega$ at the point
k
$\phi$ at an arbitrary initial angle of deflection
0
$\phi$ . Write down
this formula for a particular case of
2
0
$\pi$
$\phi$ =
.
2.4 Determine the travel time
kt
$\Delta$
for the k -th interval from
1
$-$
k
$\phi$
 to
k
$\phi$ .
2.5 Find an expression for the time kt it takes the ball to reach the angle
k
$\phi$ . To simplify matters, express it
in terms of the travel time
1
$-$
kt
 to the previous value of the angle
1
k
$\phi -$.
2.6 Put down a formula for the oscillation period
N
T for a given split into intervals.

**Topic:** [[Oscillations & Waves]], [[Newtonian Mechanics]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2

## Problema 3








3. Trial experiment, estimation of errors.
At this stage, it is necessary to make sure that the installation is operational, which in this case means
the possibility of performing calculations according to the algorithm developed above, and to assess whether
the required accuracy of results is achieved.
 As noted earlier, calculation errors depend on the number of partition intervals N . In this task, you
have to carry out calculations not on a computer, but "manually" using your calculator. A growth of N
reduces the error of calculations, but increases the time of their execution. Therefore, it is important to
choose its optimal value, i.e. the minimum value at which the required accuracy is achieved. At this stage,
carry out all calculations at
2
0
$\pi$
$\phi$ =
.
ATTENTION! Hereinafter, calculations should be carried out with an accuracy of 4 decimal digits.
To save time, carefully think over the entire sequence of calculations: use previously calculated values,
define necessary constants that are present in the formulas (so as not to recalculate them several times),
write down results of intermediate calculations in the most convenient form.
XVII International Zhautykov Olimpiad/Experimental Competition
3/3
3.1 Calculate the travel times
kt for the points with angles
k
$\phi$ for
32
,
16
,8
,4
,2
,1
=
N
. Find the
approximate values of the periods of oscillation
N
T , calculated for a given N . The results should be
complied in Table 1.
3.2 Plot Graph 1 of the law of motion
)
(t
$\phi$
 of the pendulum for a quarter of the period based on the results
of calculations at
16
=
N
.
3.3 On the same Graph 1, plot the law of motion
)
(t
$\phi$
, assuming that the oscillations are small. The results
of calculations of the law of motion should be presented in Table 2.
As an estimate of the relative error in calculating the oscillation period when dividing into N
intervals, we use the following value
32
32
T
T
TN
N
$-$
=
$\epsilon$
,
where
32
T stands for the period calculated at
32
=
N
, which is closest to the true value.
The dependence of the relative calculation error
N
$\epsilon$ on the number of partition intervals N is
described by the approximate formula
$\gamma$
$\epsilon$
N
C
N =
,
where C and $\gamma$ are some constants.
3.4 Calculate the relative errors
N
$\epsilon$ in determining the periods. The results must be presented in Table 3.
3.5 Prove in Graph 2 the applicability of the above formula for the relative error and find the values of the
parameters C and $\gamma$ .
3.6 Determine the minimum value
min
N
 at which the relative error in calculating the period does not exceed
0.2%.
In further calculations, use only the found value
min
N
 for the number of partition intervals.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2

## Problema 4








4. Experiment: the dependence of the period on the amplitude.
At this stage of the computer experiment, we determine the dependence of the oscillation period of the
mathematical pendulum on the amplitude, (
)
0
$\phi$
T
, which is described by the formula
(
)

+
=
b
a
T
T
2
0
0
0
$\phi$
$\phi$
,
where
0T designates the period of small oscillations of the pendulum,
b
a,
 are constant values.
4.1 Calculate the periods of oscillation of the mathematical pendulum for the following set of amplitudes
0 :
$\phi$
 15 ,30 ,45 ,60 ,75
$^{\circ}$
$^{\circ}$
$^{\circ}$
$^{\circ}$
$^{\circ}$ and $90^{\circ}$, which you have already determined.
4.2 Prove in Graph 3 the applicability of the above formula for the dependence of the oscillation period of
the pendulum on its amplitude.
4.3 Determine the values of parameters
b
a,
.
Let the error in measuring the oscillation period of the pendulum in a real experiment be
approximately equal to %

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Curve Fitting (competenza)|Curve Fitting]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.3

## Problema 5








5
.
4.4 Determine at what angles
0
$\phi$ , expressed in degrees, the oscillations of the mathematical pendulum can
be considered small.

**Topic:** [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Small-Angle Approximation (metodo)|Small-Angle Approximation]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.3
