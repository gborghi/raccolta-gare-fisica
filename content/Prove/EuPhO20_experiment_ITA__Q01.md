---
tipo: quesito
quesito_id: quesito_EuPhO20_experiment_ITA__Q01
parent: prova_EuPhO20_experiment_ITA
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/eupho/sperimentale/euphospe20/EuPhO20_experiment_ITA.pdf
cluster: Meccanica
quesito: '1'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/bi
  - topic/electrostatics
  - topic/newtonian-mechanics
  - argomento/meccanica
---

# OII na Sperimentale — Problema 1

## Problema 1 — Una carica sconosciuta

### 1.1 Introduzione

Una carica puntiforme di valore $Q$ sconosciuto è mantenuta ferma in una regione di spazio. Degli elettroni vengono lanciati parallelamente all'asse $z$ partendo da lontano rispetto alla carica e vengono diffusi a causa della forza elettrostatica prodotta dalla carica fissa e quindi colpiscono uno schermo di rilevamento. È possibile conoscere i dettagli della carica sconosciuta variando l'energia cinetica iniziale e le coordinate iniziali $x_i$ e $y_i$ del fascio di elettroni e misurando le coordinate finali $x_f$ e $y_f$ del punto in cui l'elettrone colpisce lo schermo piatto di rilevamento di dimensioni finite, perpendicolare all'asse $z$ e situato a $z = 0$.

È utile conoscere la formula della diffusione alla Rutherford,

$$b = \frac{kqQ}{2E} \frac{1}{\tan(\theta/2)}$$

dove $b$ è il parametro d'impatto, $E$ è l'energia dell'elettrone, $q = -1.602 \times 10^{-19}\,\text{C}$ è la carica dell'elettrone, $k = 8.99 \times 10^9\,\text{N}\,\text{m}^2/\text{C}^2$, e $\theta$ è l'angolo di diffusione. Il parametro di impatto è definito come la minima distanza dell'elettrone dal bersaglio, supponendo che l'elettrone non venga influenzato dal bersaglio e quindi si muova in linea retta; l'angolo di diffusione è l'angolo tra il vettore di velocità iniziale dell'elettrone quando si trova lontano dal bersaglio e il vettore di velocità finale dell'elettrone lontano dal bersaglio dopo la diffusione.

### 1.2 Scopo

Lo scopo è determinare la posizione $(x_Q, y_Q, z_Q)$ e anche l'intensità e il segno della carica fissa $Q$, nel modo più preciso possibile. È necessario fornire stime approssimative e ordini di grandezza di questi risultati. C'è un errore gaussiano associato alla posizione iniziale del fascio dell'ordine di $0.5\,\text{mm}$.

Come per tutti gli esperimenti, devi fornire tabelle di dati chiaramente etichettate, grafici chiaramente etichettati e derivazioni di formule sufficienti per chiarire cosa hai misurato e come stai ottenendo i risultati.

### 1.3 Interfaccia del programma

Il programma richiede di fornire da tastiera un valore della tensione di accelerazione.

```
Beam accelerating voltage in V:
```

Immettere da tastiera un numero compreso tra 1 e 10000 e premere return. Il programma quindi richiede le coordinate iniziali di partenza, iniziando con $x_i$:

```
x-coordinate of the electron beam in cm:
```

Immettere da tastiera un numero compreso tra -20 e 20 e premere return. Infine, il programma richiede l'immissione da tastiera di $y_i$:

```
y-coordinate of the electron beam in cm:
```

Immettere da tastiera un numero compreso tra -20 e 20 e premere return. Se si immette un numero non valido in uno dei tre precedenti casi, il programma risponderà `Invalid entry.` e chiederà di nuovo il valore, ricordando i limiti consentiti.

Dopo aver inserito i tre numeri, il programma fornirà:

```
Electron beam fired with parameters (x, y, V) =
```

e riaffermerà i valori immessi, quindi:

```
Electron detected at (x, y) =
```

e indicherà la posizione sullo schermo dell'elettrone misurato. Tuttavia, se l'elettrone non colpisce lo schermo di dimensioni finite, verrà detto:

```
Electron not detected...
```

Il programma al termine si predispone per consentire l'inserimento di una nuova serie di coordinate iniziali.

<!--fig:start-->
![[_attachments/EuPhO20_experiment_ITA/EuPhO20_experiment_ITA_p1_f1.png]]
*Schema diffusione Rutherford con parametro b e angolo θ*
<!--fig:end-->
<!--fig:start-->
![[_attachments/EuPhO20_experiment_ITA/EuPhO20_experiment_ITA_p1_f2.png]]
*Schema scatola nera con masse e molle*
<!--fig:end-->

**Topic:** [[Electrostatics]], [[Newtonian Mechanics]]
**Metodi:** [[Coulomb's Law (metodo)|Coulomb's Law]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Physical Modeling (metodo)|Physical Modeling]], [[Error Propagation (metodo)|Error Propagation]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1
**Soluzione:** Soluzioni (PDF)
