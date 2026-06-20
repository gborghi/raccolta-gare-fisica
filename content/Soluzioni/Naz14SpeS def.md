---
tipo: soluzione
solves: Naz14SpeT def
prova_id: prova_Naz14SpeS def
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: Nazionale
pdf: Gara individuale/nazionale/sperim/naz14spe/Naz14SpeS def.pdf
cluster: Ottica
n_problemi: '3'
tags:
  - kg/prova
  - anno/na
  - paese/Italia
  - comp/OII
  - cluster/Ottica
---

# OII na Nazionale Sperimentale — Naz14SpeS def.pdf

> Documento di **soluzioni** (spostato da Prove). Testi: [[Naz14SpeT def]].

**Fonte:** `Gara individuale/nazionale/sperim/naz14spe/Naz14SpeS def.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Ottica]]
**Soluzioni (stessa cartella):** 

## Soluzione 1

Quesito n. 1.a – Esempio di misurazione. (v. figura 1a).
Scelte due righe parallele $a$ e $b$ sulla carta millimetrata, alla distanza $x$ l'una dall'altra, si appoggia il blocchetto
sul foglio. Si guarda la riga $a$ attraverso l'aria, e la riga $b$, attraverso due facce parallele di PMMA distanti $s$ tra
loro. Si ruota il blocchetto, fino a che si vede, con la visuale radente (1) il foglio, che la parte di riga $b$ osservata
attraverso il PMMA diventa il prolungamento di $a$ vista direttamente attraverso l'aria. Si segna sul foglio il contorno
della base del blocchetto cosı` posizionato, facendo attenzione a non maggiorarne lo spessore $s$ con il segno della
matita.
Si ricostruisce il percorso della luce dalle righe $a$ e $b$ ai
nostri occhi, usando il metodo delle visuali.
Si traccia la normale $p$ alla faccia del blocchetto nel punto I.
Tracciate poi dal punto P le due perpendicolari ad $a$ e a $b'$,
si misurano le lunghezze dei due segmenti intercettati, e si
calcola il loro rapporto che è uguale a
$$n_P = \operatorname{sen}\alpha / \operatorname{sen}\beta .$$
Si può anche ricavare l'indice $n$ dall'espressione generale
per una lastrina a facce piane e parallele:
$$n = \sqrt{\operatorname{sen}^2\alpha + \frac{1 - \operatorname{sen}^2\alpha}{(1 - x/(s\,\operatorname{sen}\alpha))^2}} \qquad (1)$$
dove $x$ indica la distanza tra le righe e $s$ lo spessore della
lastrina attraversato. In questo caso è sufficiente determinare $\operatorname{sen}\alpha$.
La (1) si ricava dall'espressione dello spostamento
Fig. 1.a
$$x = (s/\cos\beta)\,\operatorname{sen}(\alpha - \beta)$$
(v. fig 1.a), ponendo
$$\cos\beta = \sqrt{1 - \operatorname{sen}^2\beta}$$
e
$$\operatorname{sen}\beta = \operatorname{sen}\alpha / n$$
Nella Tabella 1 sono riportati alcuni risultati, ottenuti sia con le misurazioni indicate in figura 1a sia con la (1).

Tabella 1

| Spessore $s$ [cm] | Distanza righe $x$ [cm] | $\operatorname{sen}\alpha$ [cm/cm] | $\operatorname{sen}\beta$ [cm/cm] | $n_P = \operatorname{sen}\alpha / \operatorname{sen}\beta$ | $n_P$ calcolato con la (1) |
|---|---|---|---|---|---|
| 3.0 | 1.0 | 14.1 / 20.0 | 9.45 / 20.0 | $1.49 \pm 0.05$ | 1.52 |
| | 2.0 | 18.65 / 20.0 | 12.50 / 20.0 | $1.49 \pm 0.04$ | 1.57 |
| 5.0 | 1.0 | 10.2 / 20.0 | 6.80 / 20.0 | $1.50 \pm 0.07$ | 1.50 |
| | 2.0 | 16.15 / 20.0 | 11.15 / 20.0 | $1.45 \pm 0.04$ | 1.44 |
| 9.85 | 2.0 | 7.9 / 14.5 | 5.3 / 14.50 | $1.49 \pm 0.09$ | 1.44 |
| Media aritmetica $\pm$ semidisp. max | | | | $1.48 \pm 0.03$ | $1.49 \pm 0.07$ |

(1) La visuale deve essere radente al foglio, poiché, solo in tal caso, le due rette $a$ e $b$ saranno identificate come raggi appartenenti
al piano del foglio.

Le misurazioni con spessore $s = 10$ cm risultano più difficoltose.
Si è stimata l'incertezza di $n_P$ attraverso la propagazione, assegnando un'incertezza alle misure dei segmenti di $\pm 2$ mm per
tener conto dell'imprecisione della costruzione grafica.
Vedi per esempio i dati della prima riga della Tabella 1:
$$[(0.2/14.1) + (0.2/9.45)]\,1.49 = 0.05\ (4\%)$$
e dell'ultima riga della Tabella 1:
$$[(0.2/7.9) + (0.2/5.3)]\,1.49 = 0.09\ (6\%)$$
La figura 1b mostra una costruzione grafica alternativa.
Il PMMA ha diversi nomi commerciali, tra i quali il più comune
è "Plexiglas".
Nel sito www.temaplex-shop.com/pd si possono reperire le caratteristiche tecniche di vari tipi di plexiglas. L'indice di rifrazione fornito è $n = 1.491$.
Fig. 1.b
———————————
2. INDICE DI RIFRAZIONE DELL'ACQUA

**Topic:** [[Geometric Optics]]
**Metodi:** [[Snell's Law (metodo)|Snell's Law]], [[Ray Tracing (metodo)|Ray Tracing]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.1

## Soluzione 2

Quesito n. 2.a – Cotone asciutto.
Un raggio di luce proveniente dal cotone asciutto, incide sulla superficie di separazione tra aria e PMMA con
un angolo $\alpha_1$, e subisce una prima rifrazione, con angolo $\beta_1$. (vedi figura 2.a).
Fig. 2.a – Cotone asciutto
Il raggio rifratto incide sulla faccia contigua a quella in cui è entrato, con un angolo $\alpha_2$ che è il complementare
di $\beta_1$, dato che le due facce sono tra loro perpendicolari. Risulta $\alpha_2 = 90^\circ - \beta_1$.
L'angolo limite del PMMA rispetto all'aria risulta $\beta_{1,\text{lim}} = \operatorname{arcsen}(1/n_P)$; da $n_P = 1.49$ segue $\beta_{1,\text{lim}} = 42^\circ$.
Da $\beta_1 < 42^\circ$ consegue $\alpha_2 > 48^\circ > \beta_{1,\text{lim}}$ .
L'angolo di incidenza $\alpha_2$ sulla faccia contigua è maggiore dell'angolo limite del PMMA rispetto all'aria, quindi
la luce si riflette totalmente all'interno del blocchetto, non esce dalla faccia contigua e non arriva ai nostri occhi.
Ciò si verifica per un parallelepipedo fatto di un materiale che abbia un indice di rifrazione, rispetto al mezzo in
cui si trova, maggiore di $\sqrt{2}$, e di conseguenza un angolo limite di ampiezza minore di $45^\circ$. Il complementare sarà
di conseguenza di ampiezza maggiore di $45^\circ$ e quindi maggiore anche dell'angolo limite del mezzo considerato
rispetto all'ambiente.

Quesito n. 2.b – Cotone bagnato.
Con opportuno orientamento del blocchetto (v. angolo $\beta_2$ in fig. 2b) rispetto alla linea di visuale scelta, il bianco
del cotone è visibile. Quindi la luce proveniente dal cotone che arriva ai nostri occhi, sicuramente non ha subito
la riflessione interna totale sulla faccia contigua. Ricostruendo all'indietro il suo percorso nel blocchetto, si
trova che poiché $\alpha_2 < 42^\circ$, allora $\beta_1 > 48^\circ$. Va notato che valori di $\beta_1 > 48^\circ$ si possono avere sia se l'indice di
rifrazione dell'acqua è maggiore di quello del PMMA, sia se risulta inferiore (nella figura 2.b è stata adottata
la seconda ipotesi). Se ruotiamo il blocchetto, facendo diminuire $\beta_2$, ad un certo punto, ben prima che $\beta_2$ sia
nullo, la macchia svanisce.
Al diminuire di $\beta_2$, diminuisce anche $\alpha_2$ senza annullarsi, e cresce il suo complementare $\beta_1$ senza raggiungere i
$90^\circ$. Quando la macchia è svanita, $\beta_1$ ha assunto un valore massimo $\beta_{1,\text{max}}$ che soddisfa alla $48^\circ < \beta_{1,\text{max}} < 90^\circ$.
I raggi rifratti dall'acqua al PMMA sulla faccia 1, formano con la normale angoli minori di $\beta_{1,\text{max}}$ e quindi sempre
minori di $90^\circ$, e ciò dimostra che il PMMA è più rifrangente dell'acqua. Non c'è luce in uscita se la linea di
visuale comporta valori di $\beta_1$ maggiori di $\beta_{1,\text{max}}$. $\beta_{1,\text{max}}$ è l'angolo limite del PMMA relativo all'acqua.
Fig. 2.b – Cotone bagnato

Quesito n. 2.c.
Posto il foglio di carta millimetrata sul cartone, si sceglie su di esso una riga di visuale e vi si piantano i due spilli
verticali. In un punto di una faccia verticale, p. es. la contigua di destra a quella che si ha di fronte, si mette
a contatto il batuffolo bagnato del bastoncino cotonato. Si gira un po' il blocchetto fino a che la macchiolina
bianca del cotone sia ben visibile sulla faccia che appare invece come uno specchio. Si sposta il blocchetto fino a
che si vede la macchiolina allineata con i due spilli. Si trova la posizione del blocchetto tale che una piccolissima
rotazione in verso opposto faccia sparire la macchia del cotone e tutta la parete assuma un aspetto uniforme.
Si ferma il blocchetto in questa "posizione critica".
Nella rotazione del blocchetto, è inevitabile che la macchia esca dall'allineamento con gli spilli. Basta spostare
appena il blocchetto per ritrovare facilmente l'allineamento.
Si registra la "posizione critica" tracciando un segmento lungo la base della faccia attraverso la quale si guardava.
La riga della visuale scelta sulla carta millimetrata, corrisponde al raggio emergente dal blocchetto.
Si traccia la normale alla faccia. Da misure di segmenti si determina il seno dell'angolo emergente $\beta_2$ (tra
normale alla faccia e linea di visuale). Applicando la legge di Snell–Cartesio, noto l'indice di rifrazione $n_P$ del
PMMA rispetto all'aria, risulta
$$\operatorname{sen}\alpha_2 = \operatorname{sen}\beta_2 / n_P$$
L'angolo $\beta_1$, complementare di $\alpha_2$, è l'angolo limite del PMMA rispetto all'acqua. Risulta quindi
$$\cos\beta_1 = \operatorname{sen}\alpha_2$$
e
$$n_{PA} = (\operatorname{sen}\beta_1)^{-1} ,$$
dove $n_{PA}$ è l'indice di rifrazione del PMMA rispetto all'acqua.
Poiché $\cos\beta_1 = \sqrt{1 - \operatorname{sen}^2\beta_1}$, si ricava facilmente l'indice di rifrazione del PMMA rispetto all'acqua $n_{PA}$:
$$n_{PA} = \sqrt{\frac{1}{1 - (\operatorname{sen}\beta_2 / n_P)^2}}$$
Dato che $n_A = n_P / n_{PA}$, risulta
$$n_A = \sqrt{n_P^2 - \operatorname{sen}^2\beta_2}$$
Esempio di risultati ottenuti con blocchetto la cui base appoggiata sul foglio è di dimensioni $3$ cm $\times$ $5$ cm.
$\operatorname{sen}\beta_2 = 6.60$ cm$/10.00$ cm.
Con $n_P = 1.49$ risulta
$$n_{PA} = 1.11; \quad n_A = 1.34$$
Dalla media aritmetica e dalla semidispersione massima anche di altre misure, si trova
$$n_{PA} = 1.12 \pm 0.01 ; \quad n_A = 1.33 \pm 0.01$$
———————————

**Topic:** [[Geometric Optics]]
**Metodi:** [[Snell's Law (metodo)|Snell's Law]], [[Ray Tracing (metodo)|Ray Tracing]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.2

## Soluzione 3

Quesito n. 3.a.
Si infila la carta millimetrata nella busta impermeabile trasparente. Si pone sulla busta il blocco di PMMA e
la sferetta a leggero contatto con una faccia del blocco stesso (faccia $a$). Si avvicina lo specchietto verticale,
mantenendolo parallelo alla faccia $a$ del blocchetto fino a portarlo a leggero contatto con la sferetta. Sulla carta
millimetrata si legge la distanza tra specchio e faccia $a$ del blocco, pari al diametro cercato.
Con un metodo alternativo si confronta con la carta millimetrata il bordo equatoriale della sferetta a contatto
con lo specchio. Una striscia di carta millimetrata è appoggiata sullo specchio in modo da lambire il punto di
contatto tra specchio e sfera. Si guarda in direzione della sfera in modo da vedere il bordo di questa sovrapporsi
alla sua immagine speculare.
Si regola la posizione della striscia in modo che una sua riga, assunta come
"zero" coincida con bordo e immagine del bordo, per esempio a sinistra della sferetta. Si ricerca la coincidenza
bordo-riga-immagine del bordo anche dalla parte diametralmente opposta, ottenendo la misura del diametro
cercata.
I diametri delle sferette a disposizione sono compresi tra $1.20$ cm e $1.60$ cm.

Quesito n. 3.b.
Seguendo le istruzioni nel testo, si dispone il materiale come nella figura 3.a.
Fig. 3.a
Si sposta la molletta, finché si vede che le divisioni sulla griglia che fa da oggetto, affiancate alla loro immagine,
risultano di uguali dimensioni e nella stessa posizione di quelle dell'immagine (v. figura 3.b).
Fig. 3.b

Un ulteriore controllo dell'effettiva coincidenza tra l'oggetto e l'immagine della griglia (nella zona centrale), può
ottenersi usando la tecnica della parallasse. Nella tabella 2, vi sono alcuni risultati delle misurazioni:
$d$ è la distanza dell'oggetto dallo specchio, misurata sulla carta millimetrata; $e$ è la distanza del vertice posteriore
della sfera dallo specchio; $R$ indica il raggio della sferetta. Vale la relazione $d = f + R + e$ dove $f$, distanza
focale, viene misurata come distanza comune di oggetto e immagine dal centro della sfera.
La distanza focale risulta quindi $f = d - (e + R)$. In Tabella 2 sono riportati i risultati di alcune misure. $n_G$
indica l'indice di rifrazione della gelatina.

Quesito n. 3.c.
Da questa relazione e dalla $f = \dfrac{R\,n_G}{2\,(n_G - 1)}$ si ricava $n_G = \dfrac{2\,(d - e - R)}{2d - 2e - 3R}$

Tabella 2

| Diametro sferetta $2R$ [cm] | Distanza (minima) $e$ tra vertice sfera e specchio [cm] | Distanza $d$ misurata tra oggetto e specchio $d = f + R + e$ [cm] | Distanza focale $f = d - R - e$ $\pm 1\%$ [cm] | Indice di rifrazione $n_G$ della gelatina |
|---|---|---|---|---|
| 1.35 | 0.00 | 2.00 | 1.33 | 1.34 |
| 1.50 | 0.00 | 2.30 | 1.55 | 1.32 |
| 1.55 | 0.00 | 2.30 | 1.53 | 1.34 |
| 1.20 | 0.50 | 2.30 | 1.20 | 1.33 |
| 1.25 | 0.50 | 2.40 | 1.28 | 1.32 |
| 1.30 | 0.30 | 2.30 | 1.35 | 1.32 |
| 1.40 | 0.30 | 2.40 | 1.40 | 1.33 |

Gli scarti percentuali tra i valori delle distanze focali misurati per la stessa sferetta o per sferette di ugual
diametro, sono risultati intorno a $\pm 1\%$.
I valori dell'indice $n_G$ nella tabella 3 hanno una media aritmetica pari a 1.33, con una semidispersione massima
$= 0.01$
Tenendo conto anche di altre misure, la media aritmetica resta 1.33, ma la semidispersione massima sale a 0.05.
Si ricava $n_G = 1.33 \pm 0.05$

Quesito n. 3.d – Interpretazione.
Fig. 4
Un punto P dell'oggetto giace sul piano focale e sull'asse ottico della sfera, cioè nel fuoco della sfera.
I raggi provenienti dal punto P che attraversano la sfera sono rifratti come raggi paralleli all'asse e, dopo
la riflessione sullo specchio piano S, incidono sulla sfera ancora come raggi paralleli all'asse. Per il principio
dell'invertibilità del cammino luminoso, riattraversando la sfera, convergono nel piano focale nello stesso punto
da cui sono partiti.

Fig. 5.a
Fig. 5.b
Il raggio 1 proveniente dal punto B dell'oggetto passa per il centro O della sfera, non è quindi deviato. Viene
poi riflesso dallo specchio S dando luogo al raggio 2 (Fig. 5.a). Tutti gli altri raggi provenienti da B, dopo la
riflessione, hanno la stessa direzione del raggio 2.
Tra questi, in particolare, ve ne sarà uno che, dopo la riflessione sullo specchio, passa per il centro della sfera.
Esso incontra il piano focale nel punto immagine $B'$ (Fig. 5.b). Per la seconda legge della riflessione applicata
ai raggi 1 e 2, e per il parallelismo dei raggi che hanno subito la riflessione sullo specchio, si dimostra facilmente
l'uguaglianza dei due triangoli $FBO$ e $FB'O$, per cui $FB = FB'$.
Materiale elaborato dal Gruppo
NOTA BENE
È possibile utilizzare, riprodurre, distribuire, comunicare al pubblico questo materiale alle due seguenti condizioni: citare la fonte; non usare il materiale, nemmeno parzialmente, per fini commerciali.

**Topic:** [[Geometric Optics]]
**Metodi:** [[Ray Tracing (metodo)|Ray Tracing]], [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]], [[Snell's Law (metodo)|Snell's Law]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.4
