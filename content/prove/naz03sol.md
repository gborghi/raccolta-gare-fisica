---
title: OII na Nazionale Sperimentale
tipo: prova
tags:
  - graph/prova
---
<div class="atom-reader" data-prova="naz03sol"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="OII na Nazionale Sperimentale — Problema 1" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/multi,topic/fluid-mechanics,topic/oscillations-e-waves,topic/newtonian-mechanics,argomento/meccanica,object/pipe-tube"></span>

<div class="qlang-switch" data-default="it"></div>



**OLIMPIADI DI FISICA 2003 – TRACCIA PER LA CORREZIONE**
**Prova sperimentale: tempo disponibile 3½ h, valutazione 200 punti max**
**GALLEGGIAMENTO DI UNA PROVETTA IMMERSA NELL'ACQUA**

**Nota.** Ogni ragazzo dispone di una provetta, di vetro o di metallo, con una scala in mm fissata lateralmente per poter misurare la profondità di immersione. La densità dell'acqua di rubinetto non è dichiarata, però i ragazzi dovrebbero conoscere che è molto vicina a $1\ \mathrm{g/cm^3}$, anche se non è acqua distillata e se non è a $4\ ^\circ\mathrm{C}$. Basandosi su questo valore possono trovare la massa della provetta e la massa delle sferette con buona approssimazione (vedi sotto).

**(A1)** Il numero $n_o$ può essere determinato solo con una data incertezza, ad es. $n_o = (20 \pm 1)$ poiché la provetta si dispone sensibilmente in verticale solo per un numero di sferette elevato e disposte sempre nella stessa maniera, al suo interno (di qui l'incertezza su $n_o$). In effetti, la verticalità è tanto meglio assicurata quanto più grande è il numero delle sferette. Quando $n < n_o$ la provetta si dispone obliquamente, pur galleggiando immobile (se $n \ll n_o$ la provetta tocca le pareti del contenitore) quindi per spiegare questo nuovo tipo di equilibrio occorre fare uno schema vettoriale, basato sulla spinta di Archimede, applicata nel centro di massa del volume di liquido spostato (chiamato centro di spinta) e diretta verso l'alto, e sulla forza peso della provetta, verso il basso, le quali due forze devono essere una sulla verticale dell'altra quando la provetta sta ferma. Non è assolutamente richiesto che facciano considerazioni sulle forze quando vi sono oscillazioni, in particolare non è richiesto che parlino del metacentro (vedi A. Rostagni, pag. 272, *Meccanica e Termodinamica*, Libreria Universitaria, Padova 1957).



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
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1_dpHvz0NjAjh1NVN3VJ6EyO1HBh4zoxQ/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1_dpHvz0NjAjh1NVN3VJ6EyO1HBh4zoxQ/view)


<div class="qlang-split" data-lang="en"></div>

**OLIMPIADI DI FISICA 2003 – TRACCIA PER LA CORREZIONE**
**Experimental test: time available 31⁄2 h, evaluation of 200 points max**
**GLACATION of a project immersed in water**

**Nota.** Ogni ragazzo dispone di una provetta, di vetro o di metallo, con una scala in mm fissata lateralmente per poter misurare la profondità di immersione. The density of tap water is not stated, but the children should know that it is very close to $1\ \mathrm{g/cm^3}$, even if it is not distilled water and if it is not $4\ ^\circ\mathrm{C}$. Based on this value they can find the mass of the probe and the mass of the spheres with good approximation (see below).

**(A1)** Il numero $n_o$ può essere determinato solo con una data incertezza, ad es. $n_o = (20 \pm 1)$ since the test is significantly vertical only for a number of high spheres and always the same inside it (hence the uncertainty on $n_o$). In fact, verticality is much better ensured the greater the number of spheres. When the $n < n_o$ probe is oblique, while floating motionless (if $n \ll n_o$ the probe touches the container walls) then to explain this new type of equilibrium a vector scheme based on Archimedes' thrust is applied in the center of mass of the volume of fluid displaced (called the thrust center) and directed upwards, and on the weight force of the probe, downwards, which two forces must be one on the vertical of the other when the probe is stationary. They are not required to consider forces when there are oscillations, in particular they are not required to talk about the metacenter (see A. Stay away from me, pg. 272, *Meccanica e Termodinamica*, Libreria Universitaria, Padova 1957).



**(A2)** La relazione sperimentale che si ottiene è sensibilmente lineare e può essere rappresentata con un'equazione del tipo $h = a + b\,n$. The structure of this relationship is in accordance with the theoretical equation obtained by considering the balance of the following forces: upward thrust due to Archimedes' force and test weight greater than the $n$ mass of steel spheres $m$. In the form:

$$\rho\, g\, h\, S = (M + n\,m)\, g$$

This is what you get:

$$h = \frac{M}{\rho S} + \frac{m}{\rho S}\, n$$

This is the ratio used to express the numerical coefficients $a$ and $b$ of the above empirical ratio.

**(A3)** Dall'equazione della retta ricavata teoricamente si può calcolare la massa della provetta $M$, in quanto $\dfrac{M}{\rho S} = a$. The diameter $\varnothing$ of the test shall be measured very carefully to accurately assess the cross section area $S$, especially as it depends on $\varnothing^2$. Therefore, it is advisable to wrap the copper wire around the test several times and also take into account the diameter of the wire, otherwise an overvalued $\varnothing$ diameter would be found. The slope of the same line gives the mass $m$ of a single sphere, since $\dfrac{m}{\rho S} = b$. Of course, for the boys to get good results they must also take into account the pumped test. Since its shape is that of a spherical shell with a height of about 5-6 mm, they should assess the effective height of this shell, compared to the cylindrical shape initially assumed. More precisely, the boys will need to subtract 2-3 mm from each depth of immersion $h$, measured from the bottom of the pump. This correction can be found by the formula of the spherical coat or evaluated 'at face value'. Other causes of error:

- Menisco due to the surface tension: it contributes to a difficult reading of the size $h$ (accidental error, etc.); it also pulls the test down (system error, etc.)
- slightly oblique floating, due to the random distribution of spheres, which distorts the reading of $h$ on the scale (e.g.
- Density of water not exactly $1\ \mathrm{g/cm^3}$, as it depends somewhat on both its salinity and its temperature ($0{,}998\ \mathrm{g/cm^3}$ instead of 1, between $20\ ^\circ\mathrm{C}$ and $4\ ^\circ\mathrm{C}$) (e.g.)
- The actual mass of the test tube is slightly higher because the paper scale absorbs water.

**(B1)** $\vec{F} = -\rho\, g\, S\, \vec{x}$ ($\vec{F}$ e $\vec{x}$ grandezze vettoriali)

**(B2)** $x(t) = x_o \cos \omega t$

**(C1)** Il moto è armonico smorzato, anziché semplicemente armonico, per la presenza dell'attrito viscoso contro l'acqua. However, the 'period' changes little, in comparison to the situation without friction, more precisely increases by a little, but remains constant, from one oscillation to another, if the coefficient of friction is constant. In fact, within the experimental uncertainties, it can be verified that isochronism exists, as the amplitude of the oscillations varies, since the times for $2, 4, 6, 8\dots$ oscillations are directly proportional to the number of oscillations, for a given mass of the system, within the measurement uncertainties. The time graph $t$ according to the number of oscillations is therefore directly proportional.

**(C2)** I valori sperimentali del "periodo" (con la loro incertezza!) risultano uguali ai valori ottenibili dalla relazione teorica del periodo di una uguale massa sottoposta a una forza di tipo elastico di richiamo, quale è quella scritta alla domanda (B1):

$$T = 2\pi \sqrt{\frac{M_{tot}}{K}} \qquad \text{dove} \qquad K = \rho\, g\, A$$

It is a delicate measurement, requiring readiness for reflections, especially for measuring the time corresponding to 2 oscillations. In addition to accidental errors related to the timer, there is the systematic error related to the fact that theoretically it can be shown that the "period" is slightly higher than the period that would characterize the harmonic motion, i.e. without dampening. In addition, if the container is small, the water level rises when the probe sinks, and vice versa when the probe rises.


<!--fig:start-->
**p.1 **  Tilted handle: S-push and P-weight
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
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1_dpHvz0NjAjh1NVN3VJ6EyO1HBh4zoxQ/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1_dpHvz0NjAjh1NVN3VJ6EyO1HBh4zoxQ/view)
