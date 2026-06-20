---
tipo: prova
prova_id: prova_2nd_round_2024_it
competition: Svizzera Physics Olympiad
comp_code: Svizze
country: Svizzera
year: '2024'
level: ''
pdf: gare di altri paesi/Svizzera/2Turno/2nd_round_2024_it.pdf
cluster: Meccanica
n_problemi: '2'
tags:
  - kg/prova
  - anno/2024
  - paese/Svizzera
  - comp/Svizze
  - cluster/Meccanica
---

# Svizze 2024 — 2nd_round_2024_it.pdf

**Fonte:** `gare di altri paesi/Svizzera/2Turno/2nd_round_2024_it.pdf` · Apri PDF · apri PDF p.14
**Cluster:** [[Meccanica]]

## Problema 1

Figura B.1: Conduttore piano a massa infinitamente lungo con una carica $Q_1$ in una posizione $\vec{r}_1 = (x_1, y_1, z_1) = (0, 0, d)$.

i. (0.25 pt) Quali sono le condizioni al contorno per il potenziale elettrostatico $V$ di questo sistema?

ii. (1.5 pt) Immaginiamo un secondo sistema fisico con la stessa carica $Q_1$ nella stessa posizione $\vec{r}_1$ della Fig. B.1 ma senza il piano conduttore. Il nostro obiettivo è trovare una configurazione con una seconda carica $Q_2$ nella posizione $\vec{r}_2$ che abbia le stesse condizioni al contorno della Fig. B.1. Quali dovrebbero essere i valori di $Q_2$ e $\vec{r}_2 = (x_2, y_2, z_2)$ perché ciò avvenga? Perché?

iii. (1 pt) Utilizzando i risultati precedenti, calcolare il potenziale elettrico $V(x, y, z)$ al di sopra del suolo nel sistema di Fig. B.1 in funzione delle coordinate $(x, y, z)$, della distanza $d$ e della carica $Q_1$. L'espressione può essere lasciata come somma di due termini, non è necessario semplificarla completamente.

iv. (1.5 pt) Disegnare schematicamente il sistema di conduttori di Fig. B.1 con le linee di campo corrispondenti, assumendo che $Q_1 > 0$ (in uno schizzo separato, non sul foglio del problema).

Parte C. Carica immagine ad angolo retto (5.5 punti)

Considereremo ora geometrie di conduttori più complesse.

i. (2.5 pt) Consideriamo il sistema mostrato in Fig. C.1. Qual è il numero $N$ di cariche speculari necessarie per riprodurre le condizioni limite del conduttore? Quali sono i loro valori $Q_i$ e le loro posizioni $\vec{r}_i = (x_i, y_i, z_i)$ per $i = 1, 2, \dots, N$? Perché?

Figura C.1: Due semipiani conduttori infinitamente lunghi messi a terra ad angolo retto con una carica $Q_1$ nella posizione $\vec{r}_1 = (x_1, y_1, z_1) = (d, 0, d)$.

ii. (1 pt) Qual è il potenziale corrispondente $V(x, y, z)$ in funzione delle coordinate $(x, y, z)$, della distanza $d$ e della carica $Q_1$? L'espressione può essere lasciata come somma di $N$ termini, non è necessario semplificarla completamente.

iii. (2 pt) Disegnare schematicamente il sistema carica-mezzo piano-conduttore con le linee di campo corrispondenti, assumendo che $Q_1 < 0$ (in uno schizzo separato, non sul foglio del problema).

Parte D. Cariche dello specchio circolare (4 punti)

i. (2.5 pt) Consideriamo ora il sistema mostrato in Fig. D.1. Si scopre che è necessaria una sola carica speculare per riprodurre le condizioni al contorno corrispondenti. Qual è il suo valore $Q_2$ e la sua posizione $\vec{r}_2 = (x_2, y_2, z_2)$?

Suggerimento: si può usare senza prova che un potenziale che soddisfa le condizioni al contorno appropriate nelle posizioni $(r, 0, 0)$ e $(-r, 0, 0)$ soddisfa le condizioni al contorno sull'intera sfera.

Figura D.1: Conduttore sferico a massa di raggio $r$ con centro $O$ in posizione $\vec{r}_0 = (0, 0, 0)$ e carica $Q_1$ in posizione $\vec{r}_1 = (x_1, y_1, z_1) = (r/2, 0, 0)$. Qui vediamo una fetta a $y = 0$ della sfera nel piano $xz$.

ii. (1.5 pt) Qual è il potenziale corrispondente $V(x, y, z)$ in funzione delle coordinate $(x, y, z)$, del raggio $r$ e della carica $Q_1$? L'espressione può essere lasciata come somma di due termini, non è necessario semplificarla completamente.

SOLUTION

Problemi lunghi: soluzioni

Problema lungo 2.1: Stabilità di un uovo

Consideriamo un uovo rappresentato da un solido omogeneo di rivoluzione con profilo $f(x) = \frac{1}{2}\sqrt{x - x^4}$ sul dominio $x \in [a = 0, b = 1]$. Le unità di lunghezza sono arbitrarie.

Parte A. Centro di gravità e raggio

Il baricentro $c$ di un solido di rivoluzione si trova sul suo asse e può essere calcolato dividendolo in dischi di spessore infinitesimale $dx$ e volume $\pi f^2(x)\, dx$:

$$c = \frac{1}{V} \int_a^b x\,\pi f^2(x)\, dx,$$

dove $V$ è il volume del solido.

i. Calcolare $c$ per l'uovo.

Following the idea of splitting the egg into disk-shaped infinitely thin slices, the volume is given by:

$$V = \int_a^b \pi f^2(x)\, dx.$$

Thus for the egg, we have

$$c = \frac{\int_0^1 x\,\tfrac{1}{4}(x - x^4)\, dx}{\int_0^1 \tfrac{1}{4}(x - x^4)\, dx} = \frac{\int_0^1 (x^2 - x^5)\, dx}{\int_0^1 (x - x^4)\, dx} = \frac{\left[\tfrac{1}{3}x^3 - \tfrac{1}{6}x^6\right]_0^1}{\left[\tfrac{1}{2}x^2 - \tfrac{1}{5}x^5\right]_0^1},$$

And finally

$$c = \frac{\tfrac{1}{3} - \tfrac{1}{6}}{\tfrac{1}{2} - \tfrac{1}{5}} = \frac{\tfrac{1}{6}}{\tfrac{3}{10}} = \frac{5}{9}.$$

ii. Se fosse stato scelto un fattore diverso da $\frac{1}{2}$ nel profilo $f(x)$ dell'uovo, quale sarebbe stato l'impatto sul valore di $c$? Giustificare.

SOLUTION

$c$ wouldn't change, because the factor (squared) appears both in the numerator and in the denominator of $c$.

This is the same reason why the egg's density doesn't play a role, nor does $\pi$.

iii. Trovare un'espressione per il «raggio» $r(x)$ dell'uovo, cioè la distanza tra il baricentro e un punto $(x, f(x))$ sulla superficie dell'uovo. Il risultato deve essere della forma $\sqrt{P(x)}$, dove $P(x)$ è un polinomio.

We can use the Pythagorean theorem:

$$r(x) = \sqrt{f^2(x) + (x - c)^2},$$

and we get

$$r(x) = \sqrt{\tfrac{1}{4}x - \tfrac{1}{4}x^4 + x^2 + c^2 - 2xc} = \sqrt{-\tfrac{1}{4}x^4 + x^2 - \tfrac{31}{36}x + \tfrac{25}{81}}.$$

Parte B. Intermezzo analitico

Sia $g(x) > 0$ una funzione differenziabile strettamente positiva.

i. Espandere $\dfrac{d\sqrt{g(x)}}{dx}$, la derivata della radice quadrata di $g(x)$.

We can use the generic formula

$$\frac{dg^n(x)}{dx} = n\,g^{n-1}(x)\,\frac{dg(x)}{dx}.$$

Here we have the case $n = \frac{1}{2}$, so

$$\frac{d\sqrt{g(x)}}{dx} = \frac{1}{2\sqrt{g(x)}}\,\frac{dg(x)}{dx}.$$

Full points are given as long as the answer is of the desired final form, even if the generic formula is not explicitly stated.

ii. Dimostrare che il segno di $\dfrac{d\sqrt{g(x)}}{dx}$ è sempre uguale a quello di $\dfrac{dg(x)}{dx}$.

$$g(x) > 0 \Rightarrow \sqrt{g(x)} > 0 \Rightarrow \frac{1}{2\sqrt{g(x)}} > 0.$$

Thus the factor in front of the derivative does not change the sign, so both will always be equal. This is in particular valid for the case $0$: if the derivative of $g(x)$ is null, so is the derivative of $\sqrt{g(x)}$.

Parte C. Stabilità dell'uovo deposto

Poniamo ora l'uovo su una superficie orizzontale e identifichiamo il punto in cui l'uovo è a contatto con la superficie con la sua coordinata $x$.

SOLUTION

i. Le posizioni $a = 0$ e $b = 1$ sono posizioni di equilibrio, a causa della simmetria di rivoluzione. Determinare la stabilità di queste due posizioni dall'espressione $r(x)$ trovata in A.iii. e utilizzando il risultato mostrato in B.ii.

To study the stability, we need to compute the derivative of the radius found in A.iii. But we are only interested in its sign, so instead, and according to B.ii., we can compute the derivative of its square, $P(x)$.

$$\frac{dP(x)}{dx} = -x^3 + 2x - \frac{31}{36}.$$

For $x = a = 0$, $\left.\dfrac{dP(x)}{dx}\right|_a = -\dfrac{31}{36} < 0$.

This means that all values slightly larger than $a$ lead to a smaller $r^2$, thus also to a smaller $r$. Because $a$ is at the end of the domain, it corresponds to a local maximum of the radius, and therefore $a$ is an instable equilibrium.

For $x = b = 1$, $\left.\dfrac{dP(x)}{dx}\right|_b = -1 + 2 - \dfrac{31}{36} = \dfrac{5}{36} > 0$.

This means that all values slightly smaller than $b$ lead again to a smaller $r^2$, thus also to a smaller $r$. Because $b$ is at the other end of the domain, it corresponds to a local maximum of the radius, and therefore $b$ is an instable equilibrium as well.

Esiste una posizione $a < s < b$ in cui l'uovo disteso su un fianco è in equilibrio stabile.

ii. Qual è la particolarità di $r(s)$?

It is a local minimum of $r(x)$, and in fact its only minimum.

Give 0.5 point if it is only mentioned that the segment of $r(s)$ is perpendicular to the egg's surface.

iii. Trovare un'equazione polinomiale per $s$.

The condition for $s$ is that the derivative of the radius is zero.

Again we can use B.ii. and only consider the derivative of $P(x)$.

Thus the equation is

$$-s^3 + 2s - \frac{31}{36} = 0.$$

SOLUTION

Purtroppo, questa equazione polinomiale non è (facilmente) risolvibile. Cercheremo quindi un'approssimazione utilizzando un'espansione di Taylor.

iv. Scegliere un buon punto di partenza $t$ per lo sviluppo. Giustificate la vostra scelta.

If the egg was symmetric, that is an ellipse, $s$ would be in the center ($\frac{1}{2}$).

The egg is not very dissymmetric, so $t = \frac{1}{2}$ is a good starting point, and easy to comput

<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p15_f9.png]]
*conduttore sferico a massa Fig D.1*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p25_f13.png]]
*linee di campo piano conduttore a massa*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p27_f14.png]]
*linee di campo sistema quattro cariche speculari*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p28_f15.png]]
*conduttore sferico Fig D.1 soluzione*
<!--fig:end-->

**Topic:** [[Electrostatics]], [[Electromagnetism]]
**Metodi:** [[Electric Potential Method (metodo)|Electric Potential Method]], [[Symmetry Argument (metodo)|Symmetry Argument]], [[Coulomb's Law (metodo)|Coulomb's Law]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.14

## Problema 2

e i termini di ordine superiore.

We can start by rewriting the right-hand side of the previous answer in a way that we can use the given Taylor expansion:

$$\left(\frac{P_0 + h_A}{P_0 + h_C}\right)^{\gamma} = \left(1 + \frac{h_A}{P_0}\right)^{\gamma}\left(1 + \frac{h_C}{P_0}\right)^{-\gamma}$$

Applying the Taylors expansion then gives (keeping only terms linear in $\frac{h_A}{P_0}$ and $\frac{h_C}{P_0}$)

$$\left(\frac{P_0 + h_A}{P_0 + h_C}\right)^{\gamma} \approx \left(1 + \gamma\frac{h_A}{P_0}\right)\left(1 - \gamma\frac{h_C}{P_0}\right) \approx 1 + \gamma\frac{h_A - h_C}{P_0}.$$

We end up with

$$\frac{P_0 + h_A}{P_0} = 1 + \gamma\frac{h_A - h_C}{P_0}.$$

iv. Utilizzando i risultati precedenti, esprimere l'indice adiabatico $\gamma$ in funzione di $h_A$ e $h_C$.

Isolating $\gamma$ we find

$$\gamma = \frac{h_A}{h_A - h_C}.$$

v. Calcolare numericamente l'indice adiabatico $\gamma$ a partire dalle misure fornite.

Using the given numerical values for $P_0$, $P_0 + h_A$ and $h_C$, one finds

$$\gamma = \frac{780.31 - 766.50}{780.31 - 766.50 - 3.61} \approx 1.35.$$

vi. Dal teorema di equipartizione, è possibile ricavare che $C_V = \frac{f}{2}R$ e $C_P = \frac{f+2}{2}R$, dove $f$ è il numero di gradi di libertà consentiti per le molecole del gas. Il gas qui studiato ha $f = 5$ gradi di libertà. Qual è la differenza relativa tra i valori teorici e quelli sperimentali dell'indice adiabatico $\gamma$?

Using the definition of $\gamma$ we find $\gamma = \frac{f+2}{f} = \frac{7}{5} = 1.4$. This gives a relative difference $\dfrac{\gamma_{th} - \gamma_{exp}}{\gamma_{th}} = 3.6\%$.

vii. Quali potrebbero essere le ragioni di questa differenza?

If at least two of the following reasons is mentioned, or any other meaningful potential reasson is mentioned, then the full points are obtained.

The discrepancy could come from: the statistical uncertainty in the measurements, a systematic uncertainty due to a wrong assumption (the process $A \to B$ might not be fully adiabatic, the change of volume due to the pressure changes in the manometer might not be negligible, the initial compression might not be fully isothermic, ...), etc.

SOLUTION

Problema lungo 2.3: Carica immagine

Un problema molto comune in elettrostatica è quello di determinare il potenziale elettrico di un sistema composto da cariche puntiformi e conduttori di varia forma. In questo esercizio svilupperemo un metodo, il cosiddetto metodo della carica immagine, per semplificare notevolmente tali problemi nei casi con una simmetria appropriata. In questo esercizio consideriamo il sistema di unità SI.

Parte A. Potenziale elettrico e conduttori

In questa prima parte parleremo delle gabbie di Faraday.

i. Scrivere il potenziale elettrico $V$ dovuto a una carica puntiforme $q$ in funzione della distanza $r$ dalla carica.

The potential is given by $V(r) = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q}{r}$.

ii. Scrivere il potenziale elettrico $V$ dovuto a $N$ cariche puntiformi $q_i$, $i \in 1, 2, \dots, N$, in funzione delle distanze $r_i$ da ciascuna carica $q_i$.

The total potential is given by the sum of the individual potentials: $V = \dfrac{1}{4\pi\varepsilon_0}\displaystyle\sum_{i=1}^{N} \dfrac{q_i}{r_i}$.

iii. Considerate la situazione mostrata in Fig. B.1. Che cosa si può dire del potenziale elettrico sulla superficie del materiale conduttore collegato a terra?

As we have a grounded conductor, the potential on the surface must vanish, so $V = 0$ on the conductor.

iv. Durante un temporale, è più sicuro rimanere in auto o stare all'aperto? Perché? Argomentate utilizzando la risposta alla domanda precedente.

It is safer to stay in one's car, because the metallic hull of the car is a grounding conducting surface for which $V = 0$ holds such that its inside is protected against lightning.

Parte B. Carica immagine con un conduttore piano

Consideriamo nuovamente la situazione illustrata nella Fig. B.1. L'obiettivo di questa parte è determinare il potenziale elettrico in qualsiasi punto al di sopra del piano. A tale scopo, è possibile utilizzare un trucco che semplifica notevolmente la situazione. L'idea è quella di introdurre una carica immaginaria «specchio» per riprodurre le condizioni al contorno poste dal materiale conduttore.

In elettrostatica, se due sistemi fisici hanno potenziali con le stesse condizioni al contorno, le due situazioni sono fisicamente equivalenti.

Quindi, per determinare il potenziale elettrico di questo sistema, vorremmo trovare un altro sistema più semplice per descrivere il suo potenziale.

Figura B.1: Conduttore piano a massa infinitamente lungo con una carica $Q_1$ in una posizione $\vec{r}_1 = (x_1, y_1, z_1) = (0, 0, d)$.

SOLUTION

i. Quali sono le condizioni al contorno per il potenziale elettrostatico $V$ di questo sistema?

As seen in the previous part, the potential must satisfy $V = 0$ on the grounded conducting surface.

ii. Immaginiamo un secondo sistema fisico con la stessa carica $Q_1$ nella stessa posizione $\vec{r}_1$ della Fig. B.1 ma senza il piano conduttore. Il nostro obiettivo è trovare una configurazione con una seconda carica $Q_2$ nella posizione $\vec{r}_2$ che abbia le stesse condizioni al contorno della Fig. B.1. Quali dovrebbero essere i valori di $Q_2$ e $\vec{r}_2 = (x_2, y_2, z_2)$ perché ciò avvenga? Perché?

By symmetry, we can expect the mirror charge to lie at position $\vec{r}_2 = (0, 0, -d)$.

If the mirror charge lies at $(x_2, y_2, z_2) = (0, 0, -d)$ we can check that picking $Q_2 = -Q_1$ indeed satisfies the boundary conditions.

Indeed, this must be the case by symmetry. One could also check it explicitly using the result from A.ii.

iii. Utilizzando i risultati precedenti, calcolare il potenziale elettrico $V(x, y, z)$ al di sopra del suolo nel sistema di Fig. B.1 in funzione delle coordinate $(x, y, z)$, della distanza $d$ e della carica $Q_1$. L'espressione può essere lasciata come somma di due termini, non è necessario semplificarla completamente.

The resulting potential in the charge-plane conductor system must be the same as the charge-mirror charge system, so we obtain for $\vec{r} = (x, y, z)$

$$V(\vec{r}) = \frac{1}{4\pi\varepsilon_0}\left[\frac{Q_1}{\sqrt{x^2 + y^2 + (z - d)^2}} - \frac{Q_1}{\sqrt{x^2 + y^2 + (z + d)^2}}\right].$$

The solution could be written in a different form as long as the potential is written explicitly as a function of the required quantities.

iv. Disegnare schematicamente il sistema di conduttori di Fig. B.1 con le linee di campo corrispondenti, assumendo che $Q_1 > 0$ (in uno schizzo separato, non sul foglio del problema).

The drawing should qualitatively look like the upper half of the following image. The lower half should contain no field lines.

https://commons.wikimedia.org/wiki/File:VFPt_imagecharge_plane_horizontal_plusminus.svg

SOLUTION

The field lines should flow from the positive charge to the conductor.

The field lines should stop at the level of the conductor.

The field lines at the level of the conductor should be perpendicular to its surface.

Parte C. Carica immagine ad angolo retto

Considereremo ora geometrie di conduttori più complesse.

i. Consideriamo il sistema mostrato in Fig. C.1. Qual è il numero $N$ di cariche speculari necessarie per riprodurre le condizioni limite del conduttore? Quali sono i loro valori $Q_i$ e le loro posizioni $\vec{r}_i = (x_i, y_i, z_i)$ per $i = 1, 2, \dots, N$? Perché?

Figura C.1: Due semipiani conduttori infinitamente lunghi messi a terra ad angolo retto con una carica $Q_1$ nella posizione $\vec{r}_1 = (x_1, y_1, z_1) = (d, 0, d)$.

We want the potential to vanish on the conductor plates.

By symmetry considerations, we can convince ourselves that the mirror charges should lie at the positions $\vec{r}_2 = (-d, 0, d)$, $\vec{r}_3 = (-d, 0, -d)$ and $\vec{r}_4 = (d, 0, -d)$.

Similarly, we can expect to have $Q_2 = Q_4$.

After some trial and error, one can notice that the choice $Q_2 = Q_4 = -Q_1$ and $Q_3 = Q_1$ leads to a vanishing potential on the conducting plates.

Indeed, by saying that $r_i$ is the distance from the position $\vec{r}$ to the charge $i$, we have

$$V(\vec{r}) = \frac{1}{4\pi\varepsilon_0}\left(\frac{Q_1}{r_1} - \frac{Q_1}{r_2} + \frac{Q_1}{r_3} - \frac{Q_1}{r_4}\right).$$

On the vertical plate, we have $r_1 = r_2$ and $r_3 = r_4$ such that indeed $V = 0$. On the horizontal plate we have $r_1 = r_4$ and $r_2 = r_3$ so we also have a vanishing potential.

A more explicit computation making less explicit use of symmetries, or a more implicit reasoning with the symmetries is fine as long as the reasoning is corr

<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p12_f8.png]]
*schema apparato Clément-Desormes pompa valvola manometro*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p20_f11.png]]
*schema Clément-Desormes soluzione*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p22_f12.png]]
*diagramma P-V esperimento A B C*
<!--fig:end-->

**Topic:** [[Thermodynamics]], [[Kinetic Theory]]
**Metodi:** [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.23

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

## Figure

<!--fig:start-->
**p.4** — orbita ellittica pianeta-stella
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p4_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.4** — quattro traiettorie I-IV corda-carrucola
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p4_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.6** — configurazioni A-F cariche puntiformi campo E
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p6_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.6** — circuito con batterie resistori corrente
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p6_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.6** — altoparlante e particella di polvere
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p6_f5.png]]
<!--fig:end-->

<!--fig:start-->
**p.11** — profilo uovo f(x) r(x) baricentro c
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p11_f6.png]]
<!--fig:end-->

<!--fig:start-->
**p.11** — uovo su superficie orizzontale a=0 b=1
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p11_f7.png]]
<!--fig:end-->

<!--fig:start-->
**p.18** — uovo su superficie soluzione equilibrio
![[_attachments/2nd_round_2024_it/2nd_round_2024_it_p18_f10.png]]
<!--fig:end-->
