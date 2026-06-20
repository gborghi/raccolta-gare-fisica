---
tipo: quesito
quesito_id: quesito_naz03sol__Q01
parent: prova_naz03sol
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: Nazionale
pdf: Gara individuale/nazionale/sperim/naz03spd/naz03sol.pdf
cluster: Meccanica
quesito: '1'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/multi
  - topic/fluid-mechanics
  - topic/oscillations-e-waves
  - topic/newtonian-mechanics
  - argomento/meccanica
---

# OII na Nazionale Sperimentale — Problema 1

**OLIMPIADI DI FISICA 2003 – TRACCIA PER LA CORREZIONE**
**Prova sperimentale: tempo disponibile 3½ h, valutazione 200 punti max**
**GALLEGGIAMENTO DI UNA PROVETTA IMMERSA NELL'ACQUA**

**Nota.** Ogni ragazzo dispone di una provetta, di vetro o di metallo, con una scala in mm fissata lateralmente per poter misurare la profondità di immersione. La densità dell'acqua di rubinetto non è dichiarata, però i ragazzi dovrebbero conoscere che è molto vicina a $1\ \mathrm{g/cm^3}$, anche se non è acqua distillata e se non è a $4\ ^\circ\mathrm{C}$. Basandosi su questo valore possono trovare la massa della provetta e la massa delle sferette con buona approssimazione (vedi sotto).

**(A1)** Il numero $n_o$ può essere determinato solo con una data incertezza, ad es. $n_o = (20 \pm 1)$ poiché la provetta si dispone sensibilmente in verticale solo per un numero di sferette elevato e disposte sempre nella stessa maniera, al suo interno (di qui l'incertezza su $n_o$). In effetti, la verticalità è tanto meglio assicurata quanto più grande è il numero delle sferette. Quando $n < n_o$ la provetta si dispone obliquamente, pur galleggiando immobile (se $n \ll n_o$ la provetta tocca le pareti del contenitore) quindi per spiegare questo nuovo tipo di equilibrio occorre fare uno schema vettoriale, basato sulla spinta di Archimede, applicata nel centro di massa del volume di liquido spostato (chiamato centro di spinta) e diretta verso l'alto, e sulla forza peso della provetta, verso il basso, le quali due forze devono essere una sulla verticale dell'altra quando la provetta sta ferma. Non è assolutamente richiesto che facciano considerazioni sulle forze quando vi sono oscillazioni, in particolare non è richiesto che parlino del metacentro (vedi A. Rostagni, pag. 272, *Meccanica e Termodinamica*, Libreria Universitaria, Padova 1957).

*[Figura: schema vettoriale della provetta inclinata che galleggia; vettore spinta $S$ verso l'alto e vettore peso $P$ verso il basso applicati lungo la provetta obliqua.]*

*[Figura: Grafico richiesto in (A2). Profondità di immersione (cm) in ordinata da 0 a 13, numero di sferette $n$ in ascissa da 0 a 55. Retta interpolante con $A = 1{,}82364$ e $B = 0{,}20364$. Provetta di metallo, sfere piccole, con correzione di $-3$ mm per bombatura.]*

**(A2)** La relazione sperimentale che si ottiene è sensibilmente lineare e può essere rappresentata con un'equazione del tipo $h = a + b\,n$. La struttura di questa relazione è in accordo con l'equazione teorica che si ottiene considerando l'equilibrio delle seguenti forze: spinta verso l'alto dovuta alla forza di Archimede e peso della provetta più peso delle $n$ sferette d'acciaio di massa $m$. In formule:

$$\rho\, g\, h\, S = (M + n\,m)\, g$$

Da questa si ricava:

$$h = \frac{M}{\rho S} + \frac{m}{\rho S}\, n$$

È questa la relazione che serve a esplicitare i coefficienti numerici $a$ e $b$ della relazione empirica di cui sopra.

**(A3)** Dall'equazione della retta ricavata teoricamente si può calcolare la massa della provetta $M$, in quanto $\dfrac{M}{\rho S} = a$. Occorre misurare molto bene il diametro $\varnothing$ della provetta, per valutare con precisione l'area della sezione trasversale $S$, soprattutto perché questa dipende da $\varnothing^2$. Perciò è consigliabile avvolgere più volte il filo di rame attorno alla provetta e tenere conto anche del diametro del filo, altrimenti si troverebbe un diametro $\varnothing$ sopravvalutato. Dalla pendenza della stessa retta si ricava la massa $m$ di una singola sferetta, poiché $\dfrac{m}{\rho S} = b$. Ovviamente, affinché i ragazzi ottengano buoni risultati occorre che abbiano tenuto conto anche della bombatura della provetta. Poiché la sua forma è quella di una calotta sferica la cui altezza è di circa 5-6 mm, occorre che essi valutino quale sia l'altezza efficace di questa calotta, rispetto alla forma cilindrica presupposta inizialmente. Più precisamente, occorrerà che i ragazzi sottraggano 2-3 mm da ogni valore della profondità di immersione $h$, misurata a partire dal fondo della bombatura. Detta correzione può essere trovata con la formula della calotta sferica oppure valutata "ad occhio". Altre cause d'errore:

- Menisco dovuto alla tensione superficiale: contribuisce a una difficoltosa lettura della grandezza $h$ (errore accidentale, e.a.); inoltre tira verso il basso la provetta (errore sist., e.s.)
- Galleggiamento un po' obliquo, dovuto alla casualità della distribuzione delle sferette, che falsa la lettura di $h$ sulla scala (e.s.)
- Densità dell'acqua non esattamente $1\ \mathrm{g/cm^3}$, poiché dipende un po' sia dal suo contenuto salino sia dalla sua temperatura ($0{,}998\ \mathrm{g/cm^3}$ anziché 1, tra $20\ ^\circ\mathrm{C}$ e $4\ ^\circ\mathrm{C}$) (e.s.)
- Massa effettiva della provetta leggermente maggiore perché la scala di carta assorbe acqua.

**(B1)** $\vec{F} = -\rho\, g\, S\, \vec{x}$ ($\vec{F}$ e $\vec{x}$ grandezze vettoriali)

**(B2)** $x(t) = x_o \cos \omega t$

**(C1)** Il moto è armonico smorzato, anziché semplicemente armonico, per la presenza dell'attrito viscoso contro l'acqua. Tuttavia, il "periodo" cambia di poco, rispetto alla situazione senza attrito, più precisamente aumenta di un po', però resta costante, da una oscillazione a un'altra, se il coefficiente di smorzamento è costante. In effetti, entro le incertezze sperimentali si può controllare che esiste l'isocronismo, al variare dell'ampiezza delle oscillazioni, poiché i tempi per $2, 4, 6, 8\dots$ oscillazioni sono direttamente proporzionali al numero di oscillazioni, per una data massa del sistema, entro le incertezze di misura. Il grafico del tempo $t$ in funzione del numero di oscillazioni è quindi di proporzionalità diretta.

**(C2)** I valori sperimentali del "periodo" (con la loro incertezza!) risultano uguali ai valori ottenibili dalla relazione teorica del periodo di una uguale massa sottoposta a una forza di tipo elastico di richiamo, quale è quella scritta alla domanda (B1):

$$T = 2\pi \sqrt{\frac{M_{tot}}{K}} \qquad \text{dove} \qquad K = \rho\, g\, A$$

È una misura delicata, che richiede prontezza di riflessi, soprattutto per misurare il tempo corrispondente a 2 oscillazioni. Oltre agli errori accidentali legati al cronometro, vi è l'errore sistematico legato al fatto che teoricamente si può dimostrare che il "periodo" è leggermente superiore al periodo che caratterizzerebbe il moto armonico, cioè senza smorzamento. Inoltre, se le dimensioni del contenitore sono piccole, quando la provetta affonda il livello dell'acqua cresce, viceversa quando la provetta si alza.

*[Figura: Grafico dei periodi di oscillazione (s) in ordinata da 0,25 a 0,80, numero di sferette $n$ in ascissa da 10 a 35. Valori del periodo teorici (quadrati) e sperimentali (cerchi), in buon accordo.]*

<!--fig:start-->
**p.1** — Provetta inclinata: spinta S e peso P
![[_attachments/naz03sol/naz03sol_p1_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.1** — Grafico profondita immersione vs numero sferette
![[_attachments/naz03sol/naz03sol_p1_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.2** — Periodo oscillazione teorico e sperimentale
![[_attachments/naz03sol/naz03sol_p2_f3.png]]
<!--fig:end-->

**Topic:** [[Fluid Mechanics]], [[Oscillations & Waves]], [[Newtonian Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Fonte:** Testo (PDF) — p.1
**Soluzione:** Soluzioni (PDF)
