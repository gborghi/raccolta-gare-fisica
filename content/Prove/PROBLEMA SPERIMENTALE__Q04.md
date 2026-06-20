---
tipo: quesito
quesito_id: quesito_PROBLEMA SPERIMENTALE__Q04
parent: prova_PROBLEMA SPERIMENTALE
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/sperimentale/int05sit/PROBLEMA SPERIMENTALE.pdf
cluster: Meccanica
quesito: '4'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/modern-quantum-physics
  - topic/thermodynamics
  - topic/circuits
  - argomento/meccanica
---

# OII na Sperimentale — PROBLEMA SPERIMENTALE.pdf — Problema 4

## Sezione 4 — Proprietà del fotoresistore (LDR) e determinazione della costante di Planck

Il filamento a tungsteno della lampadina emette luce secondo la legge di Planck. Per lunghezze d'onda $\lambda$ molto minori di quella al massimo dello spettro, si applica l'approssimazione di Wien:

$$u(\lambda, T) \approx c_1\,\lambda^{-5}\,e^{-c_2/(\lambda T)} \tag{2}$$

dove $c_2 = hc/k$ è la costante di Planck ridotta (da determinare).

La resistenza $R$ del fotoresistore (LDR) segue la legge:

$$R = b\,E^{-\gamma} \tag{7}$$

dove $E$ è l'illuminamento e $\gamma$ è un parametro adimensionale ($\gamma < 1$ nel caso reale). Combinando con la dipendenza dalla temperatura del filamento si ottiene:

$$R = c_3\,T^{-1{,}209\,\gamma}\,e^{\gamma c_2/(\lambda_0 T)} \tag{3}$$

Per determinare $\gamma$: misurare $R$ senza filtro grigio, poi inserire il filtro grigio (trasmittanza 51,2%), misurare $R'$. Poiché $E' = 0{,}512\,E$:

$$\gamma = \frac{\ln(R'/R)}{\ln(E/E')} = \frac{\ln(R'/R)}{\ln(1/0{,}512)} \tag{8}$$

### Domande

a) Assicurarsi che l'LDR resti al buio completo per almeno 10 minuti. Collegare la pila al potenziometro e aumentare lentamente la tensione della lampadina. Misurare le coppie $(V, I)$ con $9{,}50\,\text{V} \leq V \leq 11{,}50\,\text{V}$ (almeno 12 misure); attendere 10 minuti dopo $V > 9{,}5$ V prima della prima misura, e 5 minuti tra le misure successive. Ricavare $R$ dell'LDR per ciascuna coppia.

b) Una volta ottenuto il valore minimo di $R$, inserire il filtro grigio, ricoprire la base e registrare la nuova resistenza $R'$. Calcolare $\gamma$ e $\Delta\gamma$ usando la (8).

c) Modificare l'Eq. (3) per ottenere la dipendenza lineare di $\ln R$ da $1/T$. Scrivere l'equazione ottenuta come Eq. (9).

d) Con i dati del punto a), costruire la tabella e disegnare il grafico dell'Eq. (9) ($\ln R$ in funzione di $1/T$).

e) Dal grafico, sapendo che $c_2 = hc/k$, calcolare $h$ e $\Delta h$ con qualsiasi metodo (sono ammesse le funzioni statistiche della calcolatrice).

*Dati:* velocità della luce $c = 2{,}998 \times 10^8\,\text{m s}^{-1}$; costante di Boltzmann $k = 1{,}381 \times 10^{-23}\,\text{J K}^{-1}$.

**Topic:** [[Modern-Quantum Physics]], [[Thermodynamics]], [[Circuits]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]], [[Photon Energy Relation (metodo)|Photon Energy Relation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.6
**Soluzione:** Soluzioni (PDF)
