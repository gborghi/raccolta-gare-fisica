---
tipo: quesito
quesito_id: quesito_Problema_sperimentale__Q02
parent: prova_Problema_sperimentale
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/sperimentale/int08sit/Problema_sperimentale.pdf
cluster: Elettromagnetismo
quesito: '2'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/thermodynamics
  - topic/circuits
  - topic/electromagnetism
  - argomento/elettromagnetismo
---

# OII na Sperimentale — Problema 2

**METODO TERMOMETRICO DIFFERENZIALE — Parte 2: Determinare il rendimento di una cella solare illuminata da una lampada ad incandescenza**

Lo scopo dell'esperimento è di determinare il **rendimento** di una cella solare illuminata da una lampada ad incandescenza. Il rendimento è definito come il rapporto tra la potenza elettrica che la cella solare può fornire ad un circuito esterno e la potenza radiante totale ricevuta dalla cella. Il rendimento dipende dallo spettro della radiazione incidente. In questo esperimento la radiazione incidente sulla cella è quella di una lampada incandescente alogena.

Al fine di determinare il rendimento della cella solare, si deve misurare l'**irradianza** $E$ in un punto situato sotto la lampada, a distanza $d$ dalla lampada lungo la direzione verticale, e la potenza massima $P_\mathrm{max}$ della cella solare quando è posta in questo punto. In questo esperimento, $d = 12\;\mathrm{cm}$ (Figura 6). L'irradianza $E$ è definita come:

$$E = \frac{\Phi}{A}$$

dove $\Phi$ è il flusso radiante (potenza radiante) e $A$ è l'area della superficie illuminata.

**Apparato e materiali:**
1. La sorgente di luce è una lampada alogena da 20 W.
2. Il rivelatore di radiazione è un cono cavo fatto di rame, la cui superficie interna è stata annerita con fuliggine (Figura 7). Il cono è considerato come un corpo nero perfetto. Il diodo di misura (D2) è posizionato vicino al rivelatore, in modo che la sua temperatura sia uguale a quella del cono. Il diodo di riferimento è collocato nella parte interna della parete della scatola. La capacità termica complessiva del rivelatore (il cono e il diodo di misura) è $C$. Il rivelatore è coperto con uno strato molto sottile di polipropilene.
3. Una scatola con circuito elettrico come mostrato in Figura 2.
4. Un pezzetto di cella solare fissata su una scatola di plastica (Figura 8). L'area della cella comprende le strisce metalliche di collegamento.
5. Due multimetri digitali.
6. Una pila da 9 V.
7. Una resistenza elettrica variabile.
8. Un cronometro.
9. Un righello con le divisioni di 1 mm.
10. Cavi elettrici.
11. Fogli per grafici.

**Principio fisico del rivelatore:**

Quando il rivelatore riceve energia dalla radiazione, si riscalda. Contemporaneamente, il rivelatore perde la propria energia termica per conduzione termica, convezione, irraggiamento. L'energia radiante ricevuta dal rivelatore in un intervallo di tempo $dt$ è uguale alla somma dell'energia necessaria per aumentare la temperatura del rivelatore e dell'energia trasferita dal rivelatore all'ambiente circostante:

$$E \cdot A_\mathrm{cone}\,dt = C\,d(\Delta T) + \delta Q \tag{5}$$

dove $C$ è la capacità termica del rivelatore e il diodo, $d(\Delta T)$ è l'incremento di temperatura e $\delta Q$ è il calore trasferito. Quando la differenza di temperatura tra il rivelatore e l'ambiente circostante $\Delta T$ è piccola, si può assumere che il calore $\delta Q$ trasferito dal rivelatore all'ambiente circostante nell'intervallo di tempo $dt$ sia approssimativamente proporzionale a $\Delta T$:

$$\delta Q = \kappa\,\Delta T\,dt \tag{6}$$

Quando l'irraggiamento viene spento, l'equazione differenziale diventa

$$C\,\frac{d(\Delta T)}{dt} = -\kappa\,\Delta T$$

e la differenza di temperatura $\Delta T$ varia con il tempo secondo la formula:

$$\Delta T(t) = \Delta T_0\,e^{-t/\tau} \tag{7}$$

dove $\Delta T_0$ è la differenza di temperatura quando $t = 0$ (istante in cui inizia la misura) e $\tau = C/\kappa$.

**Esperimento:**

**1.** Determinare la temperatura della stanza $T_0$.

**2.** Montare un circuito elettrico che comprende i sensori a diodo, la scatola con il circuito e i multimetri, per misurare la temperatura del rivelatore.

**2.1.** Posizionare il rivelatore sotto la sorgente di luce, ad una distanza di $d = 12\;\mathrm{cm}$ dalla lampada. La lampada sia spenta. Annotare per circa 2 minuti la variazione di $\Delta T$ campionando ad intervalli di 10 s e determinare il valore di $\kappa/C$ nell'equazione (6).

**2.2.** Accendere la lampada per illuminare il rivelatore. Ogni 10–15 s, scrivere il valore di $\Delta V$ nella tabella. Dopo 2 minuti, spegnere la lampada.

**2.3.** Allontanare il rivelatore dalla lampada. Seguire quindi nei successivi 2 minuti la variazione di $\Delta V$. Ogni 10–15 s, scrivere il valore di $\Delta V$ nella tabella.

**3.** Realizzare un grafico in un sistema di coordinate $x$-$y$, scegliendo appropriatamente le variabili $x$ e $y$, per mostrare che, dopo che la lampada è spenta, l'equazione (7) è soddisfatta.

**3.1.** Scrivere le espressioni per le variabili $x$ e $y$.

**3.2.** Costruire un grafico di $y$ in funzione di $x$ (Grafico 5).

**3.3.** Dal grafico, determinare il valore di $\tau$.

**4.** Realizzare un grafico in un sistema di coordinate $x$-$y$, scegliendo appropriatamente le variabili $x$ e $y$, per mostrare che quando il rivelatore è illuminato, l'equazione (5) è soddisfatta.

**4.1.** Scrivere le espressioni per le variabili $x$ e $y$.

**4.2.** Costruire un grafico di $y$ in funzione di $x$ (Grafico 6).

**4.3.** Determinare l'irradianza $E$ all'apertura del rivelatore.

**5.** Collocare la cella solare nella stessa posizione dove è stato posizionato il rivelatore di radiazione. Connettere la cella solare ad un appropriato circuito elettrico comprendente il multimetro e una resistenza elettrica variabile che è utilizzata per cambiare il carico del circuito della cella. Misurare la corrente nel circuito e la tensione sulla cella per differenti valori della resistenza variabile.

**5.1.** Tracciare un diagramma del circuito impiegato in questa misurazione.

**5.2.** Ruotando la manopola della resistenza variabile, annotare i valori della corrente $I$ e della tensione $V$ per ciascuna posizione della manopola.

**5.3.** Costruire un grafico della potenza della cella, che viene fornita al carico, in funzione della corrente che attraversa la cella (Grafico 7).

**5.4.** Ricavare dal grafico la massima potenza $P_\mathrm{max}$ della cella e stimare la sua incertezza.

**5.5.** Scrivere l'espressione del rendimento della cella corrispondente alla potenza massima ricavata. Calcolare il suo valore e la sua incertezza.
<!--fig:start-->
![[_attachments/Problema_sperimentale/Problema_sperimentale_p8_f4.png]]
*Figura 6-7: rivelatore cono rame lampada*
<!--fig:end-->

<!--fig:start-->
![[_attachments/Problema_sperimentale/Problema_sperimentale_p12_f5.png]]
*Figura 8: cella solare su scatola plastica*
<!--fig:end-->

**Topic:** [[Thermodynamics]], [[Circuits]], [[Electromagnetism]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]], [[Physical Modeling (metodo)|Physical Modeling]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Fonte:** Testo (PDF) — p.8
**Soluzione:** Soluzioni (PDF)
