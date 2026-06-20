---
tipo: quesito
quesito_id: quesito_Naz17T__Q02
parent: prova_Naz17T
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: '2017'
level: Nazionale
pdf: Gara individuale/nazionale/teorica/naz2017th/Naz17T.pdf
cluster: Meccanica
quesito: '2'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/multi
  - topic/modern-quantum-physics
  - topic/wave-optics
  - topic/geometric-optics
  - argomento/meccanica
---

# OII 2017 Nazionale Teorica — Problema 2

P2 Spettro dell'idrogeno naturale — Punti 100

AVVERTENZA: In questo problema si tenga presente che i dati numerici che vengono forniti con almeno 5
cifre significative vanno considerati con un'incertezza relativa di $10^{-5}$.
L'osservazione delle righe dello spettro dell'idrogeno che cadono nel visibile e la misura delle relative lunghezze
d'onda hanno avuto un posto centrale nello sviluppo dei modelli per la struttura atomica.
In questo problema ci occuperemo della riga rossa, la cosiddetta riga $H\alpha$, la cui lunghezza d'onda, misurata in aria, vale
$\lambda_a = 656.28\ \text{nm}$.

1. Calcolare la lunghezza d'onda $\lambda_0$ della stessa riga nel vuoto, usando per l'indice di rifrazione dell'aria il
valore $n_a = 1.00027$.

Secondo il modello di Bohr, elaborato nel 1913, i livelli energetici permessi per l'atomo di idrogeno sono dati
dalla relazione
$$E_n = -\frac{1}{8n^2}\,K(\epsilon_0, e, m_e, h) \quad \text{con } n \in \mathbb{N}^+$$
dove $K(\epsilon_0, e, m_e, h)$ è un'espressione, scritta in termini delle grandezze fisiche indicate ($\epsilon_0$ costante dielettrica
del vuoto, $e$ carica dell'elettrone, $m_e$ massa dell'elettrone e $h$ costante di Planck), con fattore numerico pari a 1.

2. Utilizzando l'analisi dimensionale, determinare l'espressione di $K$ in funzione delle grandezze fisiche indicate.

Il modello di Bohr prevede per $K$ il valore $1.7439 \times 10^{-17}\ \text{J}$.

3. Sapendo che la riga $H\alpha$ viene emessa nella transizione dal livello $n_i = 3$ al livello $n_f = 2$, calcolare il
valore previsto dal modello di Bohr per la lunghezza d'onda di questa riga nel vuoto ($\lambda_\text{th}$) e la differenza
percentuale tra questo valore e quello, $\lambda_0$, trovato al punto 1.

L'espressione dei livelli energetici data sopra si ricava studiando il moto dell'elettrone nel riferimento del nucleo;
considerato che questo è un riferimento solo approssimativamente inerziale, un accordo migliore con i dati
sperimentali si ottiene scegliendo il riferimento del centro di massa del sistema nucleo–elettrone e arrivando alla
stessa espressione di $K$ nella quale però la massa dell'elettrone è sostituita dalla cosiddetta "massa ridotta"
$\mu = m_e\, m_N/(m_e + m_N)$, dove $m_N$ è la massa del nucleo.

4. Verificare questa affermazione ricalcolando, con questo accorgimento, il valore previsto dalla formula di
Bohr per la lunghezza d'onda della riga $H\alpha$ nel vuoto ($\lambda_H$) e determinando anche in questo caso la differenza
percentuale rispetto al valore $\lambda_0$.

La correzione apportata al punto precedente suggerisce che, se l'idrogeno non è completamente puro ma contiene
una certa parte di deuterio (il cui nucleo, avente massa $m_D = 3.3436 \times 10^{-27}\ \text{kg}$, è formato da una coppia
protone-neutrone), tutte le righe spettrali dovrebbero sdoppiarsi. In natura vi è effettivamente circa lo 0.015 %
di deuterio; la miscela che si forma è detta idrogeno naturale (1).
Nella parte che segue usare sempre le lunghezze d'onda riferite al vuoto.

5. Calcolare la separazione $\Delta\lambda$ tra le righe rosse emesse dai due isotopi nell'idrogeno naturale.

Per separare righe spettrali di diversa lunghezza d'onda si può utilizzare un reticolo di diffrazione, un componente
ottico composto da un numero molto grande di fenditure parallele ed equidistanti, molto vicine tra loro. La
legge che fornisce la posizione angolare del $k$-simo massimo luminoso è
$$p \sin\theta_k = k\,\lambda$$
dove $p$ è il passo del reticolo, cioè la distanza tra due fenditure, $\theta_k$ è l'angolo di deviazione del $k$-simo fascio
rispetto alla direzione del fascio incidente, $k$ è un numero intero che rappresenta l'ordine del massimo luminoso
e $\lambda$ la lunghezza d'onda.
Due parametri che caratterizzano un reticolo di diffrazione sono la dispersione $D$ e il potere risolutivo $R$.
La dispersione è definita da
$$D \equiv \Delta\theta/\Delta\lambda$$

(1) Esiste in natura un terzo isotopo dell'idrogeno, il trizio, il cui nucleo è composto da un protone e due neutroni; esso è presente
in quantità che può essere trascurata.

dove $\Delta\theta$ è l'angolo tra i centri di due massimi di diffrazione (dello stesso ordine) prodotti da due righe aventi
differenza di lunghezza d'onda $\Delta\lambda$.
Si deve tener presente che ogni singolo massimo, in funzione dell'angolo $\theta$, ha un profilo di intensità simile a
quelli mostrati diversamente tratteggiati nella figura seguente, caratterizzato ciascuno da una larghezza angolare
$\delta\theta$ data da
$$\delta\theta = \frac{2\lambda}{N p \cos\theta}$$
dove $N$ è il numero di fenditure del reticolo illuminate dal fascio incidente.
Il potere risolutivo esprime la capacità del reticolo di separare
due righe spettrali di lunghezze d'onda $\lambda_1$ e $\lambda_2$ molto vicine tra
loro, tenendo conto della larghezza dei massimi corrispondenti,
ed è definito come
$$R \equiv \lambda/\Delta\lambda_\text{min}$$
dove $\lambda \approx \lambda_1 \approx \lambda_2$, e $\Delta\lambda_\text{min}$ è la minima differenza di lunghezza
d'onda necessaria per vedere separate le due righe.
Affinché due righe vicine possano essere risolte (ovvero si possa
capire che si tratta di due righe e non di una riga unica), occorre
che la loro separazione angolare $\Delta\theta$ dei corrispondenti massimi
sia abbastanza grande rispetto alla loro larghezza $\delta\theta$.
Questa minima separazione angolare è data generalmente dal criterio di Rayleigh, secondo cui due righe si
considerano risolte quando il massimo di una coincide con il primo minimo dell'altra, come mostrato in figura (2).

6. Determinare la dispersione $D$ di un reticolo di diffrazione, in termini del passo $p$ e dell'ordine $k$.
7. Applicando il criterio di Rayleigh, determinare il potere risolutivo $R$ di un reticolo di diffrazione di larghezza
$L = 1\ \text{cm}$, con una densità numerica di $n = 1200$ fenditure $\text{mm}^{-1}$, su cui incide perpendicolarmente un
fascio di luce che ne illumina un tratto di larghezza $d = 1.25\ \text{mm}$.
8. Mostrare che nelle condizioni date non è possibile separare la riga rossa dell'idrogeno dalla riga rossa del
deuterio.
9. Dire cosa è necessario cambiare nelle condizioni date affinché le due righe si possano vedere separate con
questo reticolo.

(2) In figura i due massimi sono rappresentati con la stessa altezza, come se le due righe avessero la stessa intensità luminosa.
Chiaramente questo non corrisponde al caso in esame dell'idrogeno naturale, ma si potrebbe ottenere arricchendo la miscela con
più deuterio; per semplicità si studierà questa situazione.

<!--fig:start-->
**p.5** — Geometria del reticolo di diffrazione
![[_attachments/Naz17T/Naz17T_p5_f2.png]]
<!--fig:end-->

**Topic:** [[Modern-Quantum Physics]], [[Wave Optics]], [[Geometric Optics]]
**Metodi:** [[Bohr Model & Quantization (metodo)|Bohr Model & Quantization]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Photon Energy Relation (metodo)|Photon Energy Relation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Significant Figures (competenza)|Significant Figures]]
**Fonte:** Testo (PDF) — p.4
**Soluzione:** Soluzioni (PDF)
