---
title: Russia na
tipo: prova
tags:
  - kg/prova
  - anno/na
  - paese/Russia
  - comp/Russia
  - cluster/Gravitazione e Astrofisica
---
<div class="atom-reader" data-prova="problems-en"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Russia na — Quesito 1" data-tags="kg/prova,paese/Kazakhstan,comp/IZhO,cluster/Gravitazione e Astrofisica"></span>

<div class="qlang-switch" data-default="en"></div>



**A. Star triangles**

VII International Zhautykov Olympiad
January, 2011
Problem A. Star triangles
Input file:
triangles.in
Output file:
triangles.out
Time limit:
2 seconds
Memory limit:
256 megabytes
Detailed Feedback:
full
Zhomart likes watching the stars and construct a variety of geometric shapes from them. The sky is
represented in the form of the Cartesian coordinate system, and the stars are represented by points on
it. At this moment Zhomart interested in the question: how many different right triangles whose legs are
parallel to the axes, you can create with the help of stars in the sky.
Input
In the first line of the input line you are given N –– the number of stars on the sky (3 $\leqN \leq300000$).
Each of the next N lines contains integer X and Y (|X, Y | $\leq109$) –– coordinates of the appropriate star.
Output
Print one number – the answer to the question.
Examples
triangles.in
triangles.out
3
0 0
1 0
0 1
1
4
0 0
1 0
0 1
1 1
4
For this problem you will have full feedback.
30% of tests contain N $\leq100$.
Page 1 of 8

VII International Zhautykov Olympiad
January, 2011
Problem B. Hyper-minimum
Input file:
hyper.in
Output file:
hyper.out
Time limit:
2 seconds
Memory limit:
256 megabytes
Detailed Feedback:
none
There is a 4-dimensional array X, each index of which is in interval from 1 to N. Your task is to construct
new 4-dimensional array Y , elements of which can be calculated using the next formula: Y [i1, i2, i3, i4] =
min(X[j1, j2, j3, j4]), where 1 $\leqik \leqN -M$ + 1, ik $\leqjk \leqik$ + M $-1$, and M is given.
Input
First line of the input file contains N and M (1 $\leqM \leqN$). Next lines of the input file contain elements
of array X. The number of elements will be not more than 1500000 and elements will be integers not
exceeding 109 by absolute value. They are given in such order, that the array can be read using following
pseudocode:
for i = 1 to N:
for j = 1 to N:
for k = 1 to N:
for l = 1 to N:
read X[i, j, k, l]
Output
Output array Y in the same format as the X was given.
Examples
hyper.in
hyper.out
1 1
1
1
3 2
3 1 4 -4 0 4 0 0 -3 0 -2 -5 5 3 5 -4
4 -3 -5 -4 -4 5 -1 0 -3 -2 -1 2 -5 -5
-1 1 1 -4 3 5 3 -3 -3 3 0 1 4 -1 -2 3
-2 5 4 -1 -5 3 -4 0 -3 -1 3 -1 4 4 -1
-5 -3 4 -4 5 1 5 -4 3 2 2 -2 -2 4 2
-4 -3 1 3 1
-5 -5 -4 -3 -5 -5 -4 -5 -5 -5 -5 -5
-4 -5 -4 -5
Page 2 of 8

VII International Zhautykov Olympiad
January, 2011
Problem C. Energetic turtle
Input file:
turtle.in
Output file:
turtle.out
Time limit:
2 seconds
Memory limit:
256 megabytes
Detailed Feedback:
none
There is a grid with N + 1 rows and M + 1 columns. The turtle, which is on the cell (0, 0), wants to get
into the cell (N, M). The turtle can only go up or right. There are K traps on the grid. If the turtle
will get to one of these traps, it will turn up. The turtle has strength to stand up no more than T times.
Calculate, how many different ways the turtle can reach the cell (N, M). Since this number can be very
large, output the remainder of his division by Z.
Input
The first line contains 5 integers N, M, K, T and Z (1 $\leqN$, M $\leq300000$, 0 $\leqK$, T $\leq20$, 1 $\leqZ \leq$
1000000000). Each of the following K lines contains coordinates of a cell with a trap: X, Y (0 $\leqX \leqN$,
0 $\leqY \leqM$). It’s guaranteed that all traps situated in different cells and there is no trap in cells (0, 0)
and (N, M).
Output
Print one number – the answer.
Examples
turtle.in
turtle.out
1 1 1 0 1000
0 1
1
2 2 0 0 10
6
40% of tests contain N, M $\leq1000$
Page 3 of 8

VII International Zhautykov Olympiad
January, 2011
Problem D. Weighting stones
Input file:
stones.in
Output file:
stones.out
Time limit:
1 second
Memory limit:
256 megabytes
Detailed Feedback:
none
Jack somehow found N stones and arranged them in increasing order of their weights. No two weights
are equal. The lightest stone is given the rank 1, the next lightest — 2, and so on, the heaviest stone gets
the rank N.
He has a balance scale and decided to put all the stones on it’s sides in some order. It’s known in which
order he is going to put those stones on the scale and on which side each stone gets.
You have to determine the state of scale after each stone is added. Jack doesn’t tell the exact weights of
those stones.
Input
The first line contains integer number N (1 $\leqN \leq100000$).
Each of the next N lines contains two integer numbers: R (1 $\leqR \leqN$) and S (1 $\leqS \leq2$). R is the
rank of the next stone which is put on side S. All R’s will be distinct.
Output
Output N lines — one for each added stone. If after adding the corresponding stone side 1 is heavier,
output “<”. If side 2 is heavier, output “>”. If it’s not clear in which state the scale will be, output “?”.
Examples
stones.in
stones.out
5
1 2
3 1
2 1
4 2
5 1
<
>
>
?
>
Page 4 of 8

VII International Zhautykov Olympiad
January, 2011
Problem E. Odd-even
Input file:
oddeven.in
Output file:
oddeven.out
Time limit:
2 seconds
Memory limit:
256 megabytes
Detailed Feedback:
full
You are given an increasing sequence of positive integers 1, 2, 4, 5, 7, 9, 10, 12, 14, 16, 17, ... It is formed by
taking one odd integer, then two even integers, then three odd integers and so on. Output N-th element
of this sequence.
Input
One positive integer N (1 $\leqN \leq10100$).
Output
Output one integer N-th element of the sequence.
Examples
oddeven.in
oddeven.out
1
1
4
5
50% of tests contain N $\leq1018$.
Page 5 of 8

VII International Zhautykov Olympiad
January, 2011
Problem F. Skyline
Input file:
skyline.in
Output file:
skyline.out
Time limit:
2 seconds
Memory limit:
256 megabytes
Detailed Feedback:
none
You want to have in your city a beatiful skyline. You have decided to build N skyscrapers in a straight
row. The i-th of them should have exactly h[i] floors.
You have got offers from different construction companies. One of them offers to build one floor in any of
the skyscrapers for 3 Million Euros. The other one offers to build one floor in each of two neighbouring
skyscrapers for 5 Millions in total. Note that it doesn’t matter whether these floors are on the same height
or not. The third one can build one floor in each of three consecutive skyscrapers for only 7 Millions.
You can build the floors in any order you want. Calculate the minimal possible total amount of money
needed to finish the construction.
Input
The first line contains integer number N (1 $\leqN \leq300$). The second line contains space separated N
integer numbers, h[1], h[2], ..., h[N], 1 $\leqh[i] \leq200$.
Output
Output one integer number: the amount of money, in Millions.
Examples
skyline.in
skyline.out
3
2 2 2
14
4
1 3 1 1
15
Page 6 of 8

VII International Zhautykov Olympiad
January, 2011
Problem G. Collider
Input file:
collider.in
Output file:
collider.out
Time limit:
2 seconds
Memory limit:
256 megabytes
Detailed Feedback:
none
Physicians are investigating particles of three types: x, y and z. They load a numbered row of n particles
into collider. During the experiment an exposure on a concrete particle is having place, after which the
particle disappears from i-th position of the row and instantly appears on position j. After disappearance
of the particle numbers of particles to the right are decreased by 1 and after the appearance number of
particles to the right of that place are increased by 1. After a number of exposures scientists want to
know, which particle is on place k. Write program, which will help them.
Input
The first line of the input file contains two integer numeber: n — number of particles and m — total
number of exposures and queries (1 $\leqn \leq1000000$, 1 $\leqm \leq15000$).
In the second line there is a sequence of characters x, y and z of length n. Each of the next m lines
contains exposure or query description. Line, containing an exposure, starts with character a and space
and contains two integer number from interval [1; n]. First number is start position of the particle during
the exposure and the second one is finish position. Line, describing a query, starts with character q and
space and contains one number from interval [1; n] — position, which scientists are interested in.
Output
Output one line for each question from input file. Line number i must conta

**Topic:** [[Astrophysics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1wv4V9nObsoX92IkFvE0M8R7fwTSXt98Z/view)


<div class="qlang-split" data-lang="it"></div>

**A. Triangoli stellari**

VII Olimpiada internazionale di Zhautykov
gennaio 2011
Il problema A. Triangoli stellari
File di input:
triangolari.in
File di uscita:
Triangolo.
Limite di tempo:
2 secondi
Limite di memoria:
256 megabytes
Informazioni dettagliate:
pieno
A Zhomart piace guardare le stelle e costruire una varietà di forme geometriche da esse. Il cielo è
Le stelle sono rappresentate da punti su
it. In questo momento Zhomart si è interessato alla domanda: quanti diversi triangoli rettangolari le cui gambe sono
parallelo agli assi, si può creare con l'aiuto delle stelle nel cielo.
Input
Nella prima riga della linea di input viene dato N  il numero di stelle nel cielo (3 $\leqN \leq300000$).
Each of the next N lines contains integer X and Y (|X, Y | $\leq109$) –– coordinates of the appropriate star.
Prodotto
Stampa un numero  la risposta alla domanda.
Esempi
triangolari.in
Triangolo.
3
0 0
1 0
0 1
1
4
0 0
1 0
0 1
1 1
4
Per questo problema avrete un feedback completo.
Il 30% dei test contiene N $\leq100$.
Pagina 1 di 8

VII Olimpiada internazionale di Zhautykov
gennaio 2011
Il problema B. Iperminimo
File di input:
hyper.in
File di uscita:
iper. fuori
Limite di tempo:
2 secondi
Limite di memoria:
256 megabytes
Informazioni dettagliate:
- nessuna
C'è una matrice 4 dimensionali X, ogni indice del quale è in intervallo da 1 a N. Il tuo compito è costruire
nuova matrice a 4 dimensioni Y , i cui elementi possono essere calcolati utilizzando la seguente formula: Y [i1, i2, i3, i4] =
min(X[j1, j2, j3, j4]), dove viene data 1 $\leqik \leqN -M$ + 1, ik $\leqjk \leqik$ + M $-1$, e M.
Input
La prima riga del file di input contiene N e M (1 $\leqM \leqN$). Le seguenti righe del file di input contengono elementi
di array X. Il numero di elementi non sarà superiore a 1500000 e gli elementi saranno numeri interi non
superiore a 109 per valore assoluto. Sono dati in un ordine tale che l'array possa essere letta utilizzando il seguente
pseudocodi:
per i = 1 a N:
per j = 1 a N:
per k = 1 a N:
per l = 1 a N:
Leggi X[i, j, k, l]
Prodotto
L'archivio di uscita Y nello stesso formato in cui è stato dato X.
Esempi
hyper.in
iper. fuori
1 1
1
1
3 2
3 1 4 -4 0 4 0 0 -3 0 -2 -5 5 3 5 -4
4 -3 -5 -4 -4 5 -1 0 -3 -2 -1 2 -5 -5
-1 1 1 -4 3 5 3 -3 -3 3 0 1 4 -1 -2 3
-2 5 4 -1 -5 3 -4 0 -3 -1 3 -1 4 4 -1
-5 -3 4 -4 5 1 5 -4 3 2 2 -2 -2 4 2
-4 -3 1 3 1
-5 -5 -4 -3 -5 -5 -4 -5 -5 -5 -5 -5
-4 -5 -4 -5
Pagina 2 di 8

VII Olimpiada internazionale di Zhautykov
gennaio 2011
Il problema C. Tortuga energetica
File di input:
tortuga.in
File di uscita:
tortuga. fuori
Limite di tempo:
2 secondi
Limite di memoria:
256 megabytes
Informazioni dettagliate:
- nessuna
C'è una griglia con righe N + 1 e colonne M + 1. La tartaruga, che è sulla cella (0, 0), vuole ottenere
nella cellula (N, M). La tartaruga può solo salire o andare a destra. Ci sono delle trappole K sulla griglia. Se la tartaruga
Se arrivi a una di queste trappole, si mostrerà. La tartaruga ha la forza di stare in piedi non più di T volte.
Calcola quanti modi diversi la tartaruga può raggiungere la cellula (N, M). Poiché questo numero può essere molto
grande, esulse il resto della sua divisione per Z.
Input
La prima riga contiene 5 integri N, M, K, T e Z (1 $\leqN$, M $\leq300000$, 0 $\leqK$, T $\leq20$, 1 $\leqZ \leq$
1000000000). Ogni linea K seguente contiene le coordinate di una cella con una trappola: X, Y (0 $\leqX \leqN$,
0 $\leqY \leqM$). È garantito che tutte le trappole si trovino in cellule diverse e che non vi sia alcuna trappola nelle cellule (0, 0)
e (N, M).
Prodotto
Stampa un numero  la risposta.
Esempi
tortuga.in
tortuga. fuori
1 1 1 0 1000
0 1
1
2 2 0 0 10
6
Il 40% dei test contiene N, M $\leq1000$
Pagina 3 di 8

VII Olimpiada internazionale di Zhautykov
gennaio 2011
Il problema D. Pietra pesante
File di input:
- Le pietre.
File di uscita:
- Le pietre.
Limite di tempo:
1 secondo
Limite di memoria:
256 megabytes
Informazioni dettagliate:
- nessuna
Jack ha trovato N pietre e le ha disposte in ordine crescente di peso. Non due pesi
sono uguali. La pietra più leggera è classificata come 1, la pietra più leggera successiva come  2, e così via, la pietra più pesante viene
il grado N.
Ha una scala di equilibrio e ha deciso di mettere tutte le pietre sui lati in qualche ordine. È noto che in
Ordina che metterà quelle pietre sulla bilancia e su quale lato si trova ogni pietra.
Devi determinare lo stato di scala dopo che ogni pietra viene aggiunta. Jack non dice i pesi esatti di
quelle pietre.
Input
La prima riga contiene il numero intero N (1 $\leqN \leq100000$).
Ciascuna delle seguenti linee N contiene due numeri interi: R (1 $\leqR \leqN$) e S (1 $\leqS \leq2$). R è il
il grado della pietra successiva che viene posta sul lato S. Tutte le R saranno distinte.
Prodotto
Sotto forma di N linee  una per ogni pietra aggiunta. Se dopo l'aggiunta del lato 1 della pietra corrispondente è più pesante,
di uscita <. Se il lato 2 è più pesante, la uscita è >. Se non è chiaro in che stato sarà la scala, la produzione ?.
Esempi
- Le pietre.
- Le pietre.
5
1 2
3 1
2 1
4 2
5 1
<
>
>
?
>
Pagina 4 di 8

VII Olimpiada internazionale di Zhautykov
gennaio 2011
Il problema E. - Strano-e' pari
File di input:
- In ordine di tempo
File di uscita:
- Smettila.
Limite di tempo:
2 secondi
Limite di memoria:
256 megabytes
Informazioni dettagliate:
pieno
Vi viene data una sequenza crescente di numeri interi positivi 1, 2, 4, 5, 7, 9, 10, 12, 14, 16, 17, ... È costituito da
Prendendo un intero parziale, poi due numeri interi pari, poi tre numeri interi parziali e così via. Elemento N-esito
di questa sequenza.
Input
Un intero positivo N (1 $\leqN \leq10100$).
Prodotto
Esporta un numero intero N-esimo elemento della sequenza.
Esempi
- In ordine di tempo
- Smettila.
1
1
4
5
Il 50% dei test contiene N $\leq1018$.
Pagina 5 di 8

VII Olimpiada internazionale di Zhautykov
gennaio 2011
Il problema F. Skyline
File di input:
Skyline.in
File di uscita:
Skyline. fuori
Limite di tempo:
2 secondi
Limite di memoria:
256 megabytes
Informazioni dettagliate:
- nessuna
Vuoi avere una città che abbia un splendido skyline. Hai deciso di costruire N grattacieli in una retta
- La fila. Il terzo di questi dovrebbe avere esattamente i piani.
Avete offerte da diverse case edili. Uno di loro si propone di costruire un piano in uno qualsiasi di
I grattacieli per 3 milioni di euro. L'altro propone di costruire un piano in ciascun di due quartieri vicini
- Grattacieli per 5 milioni in totale. Si noti che non importa se questi piani sono della stessa altezza
- O no. Il terzo può costruire un piano in ciascuno dei tre grattacieli consecutivi per soli 7 milioni.
Puoi costruire i pavimenti in qualsiasi ordine. Calcolare la somma totale minima possibile di denaro
doveva finire la costruzione.
Input
La prima riga contiene il numero intero N (1 $\leqN \leq300$). La seconda linea contiene spazio separato N
numeri interi, h[1], h[2], ..., h[N], 1 $\leqh[i] \leq200$.
Prodotto
Esci un numero intero: la somma di denaro, in milioni.
Esempi
Skyline.in
Skyline. fuori
3
2 2 2
14
4
1 3 1 1
15
Pagina 6 di 8

VII Olimpiada internazionale di Zhautykov
gennaio 2011
Il problema G. Collider
File di input:
collatore.in
File di uscita:
Collider.out
Limite di tempo:
2 secondi
Limite di memoria:
256 megabytes
Informazioni dettagliate:
- nessuna
I medici stanno studiando particelle di tre tipi: x, y e z. Caricano una fila numerata di n particelle
- In collider. Durante l'esperimento si verifica un'esposizione su una particella di cemento, dopo la quale il
la particella scompare dalla posizione i della riga e appare immediatamente nella posizione j. Dopo la scomparsa
di cui il numero di particelle a destra è diminuito di 1 e dopo il numero di apparenze di
le particelle a destra di quel luogo sono aumentate di 1. Dopo un certo numero di esposizioni gli scienziati vogliono
Sapete, quale particella è sul posto K. Scrivi un programma che li aiuterà.
Input
La prima riga del file di input contiene due numeri interi: n  numero di particelle e m  totale
numero di esposizioni e domande (1 $\leqn \leq1000000$, 1 $\leqm \leq15000$).
Nella seconda riga c'è una sequenza di caratteri x, y e z di lunghezza n. Ciascuna delle seguenti linee m
contiene una descrizione dell'esposizione o della richiesta. Linea, contenente un'esposizione, inizia con il carattere a e lo spazio
e contiene due numeri interi dall'intervallo [1; n]. Il primo numero è la posizione di partenza della particella durante il
l'esposizione e la seconda è la posizione di fine. Linea, che descrive una query, inizia con il carattere q e
La posizione di un numero di intervallo [1; n] , che interessa gli scienziati.
Prodotto
Escludere una riga per ogni domanda dal file di input. Numero di linea che devo contattare

**Topic:** [[Astrophysics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1wv4V9nObsoX92IkFvE0M8R7fwTSXt98Z/view)
