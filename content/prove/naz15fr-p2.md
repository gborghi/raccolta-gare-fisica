---
title: OII 2015 Nazionale Teorica
tipo: prova
tags:
  - graph/prova
---
<div class="atom-reader" data-prova="naz15fr-p2"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="OII 2015 Nazionale Teorica — Problema 1" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/circuits,argomento/elettromagnetismo,object/gas,object/resistor,object/battery"></span>

<div class="qlang-switch" data-default="it"></div>



**Lampada a scarica** — Punti 100

Una lampada a scarica è un bulbo di vetro riempito di gas, con due elettrodi a cui viene applicata la tensione elettrica. Negli ultimi anni questo tipo di lampada è diventato di uso molto comune perché ha una migliore resa luminosa: per questo motivo viene anche chiamata "lampada a basso consumo energetico". Il suo comportamento elettrico è però molto più complesso di quello di una lampada a filamento incandescente perché occorre eccitare – in modo controllato – le molecole del gas che, diseccitandosi, emettono luce; questo richiede appunto un complesso circuito elettronico di controllo.

Scopo di questo esercizio è simulare, attraverso un circuito elettrico molto semplificato, il funzionamento di una lampada a scarica per arrivare a descriverne il comportamento peculiare.

Si suppone che la lampada sia alimentata in corrente continua da un generatore di tensione $V_G$ il cui valore passa, in un tempo molto breve, da 0 alla tensione di funzionamento $V_M$, cui corrisponde una potenza erogata $P_M$. Il comportamento elettrico della lampada si può descrivere, adottando la forte semplificazione citata sopra, in termini puramente resistivi nel modo seguente (v. figura):

- quando si aumenta la tensione $V_G$ applicata alla lampada da 0 a $V_M$, la resistenza della lampada ha inizialmente un valore $R_H$ elevato, finché la tensione applicata non supera un valore $V_H$ (notevolmente minore di $V_M$). A questa tensione si innesca la scarica: la lampada si illumina di colpo e la corrente sale, il che indica che la resistenza è scesa a un valore $R_L$ molto più basso di $R_H$. Una volta partita la scarica si attiva un dispositivo elettronico che mantiene invariata la resistenza per tutti i valori di tensione fino a $V_M$; contemporaneamente la luminosità della lampada aumenta gradualmente fino a raggiungere il valore massimo per $V_G = V_M$;
- quando, invece, si riduce la tensione applicata alla lampada a partire da $V_M$, la resistenza rimane $R_L$ e la lampada resta accesa, anche se la sua luminosità diminuisce gradualmente, finché la tensione non scende sotto un valore $V_L$ sensibilmente minore di $V_H$. Raggiunta questa tensione, la scarica si esaurisce, la lampada si spegne e la resistenza risale di colpo al valore $R_H$.

Siano: $R_H = 1\,\text{k}\Omega$, $V_H = 10\,\text{V}$, $V_L = 5\,\text{V}$, $V_M = 48\,\text{V}$, $P_M = 30\,\text{W}$.

Calcolare il valore della corrente $I_M$ alla tensione nominale $V_M$ e il valore $R_L$ della resistenza della lampada quando è accesa. Tracciare il grafico che rappresenta l'andamento della corrente nella lampada in funzione della tensione applicata sia sul ramo in cui la lampada è "spenta" (luminosità nulla), sia su quello in cui è "accesa" (caratteristica tensione-corrente del circuito). Considerare poi, su ciascun ramo, i seguenti punti:

- il punto B, sul ramo ad alta resistenza, a cui si avvia la scarica,
- il punto C, sul ramo a bassa resistenza, a cui si arriva dopo che la scarica si è avviata,
- il punto D, sul ramo a bassa resistenza, alla massima tensione di alimentazione,
- il punto E, sul ramo a bassa resistenza, a cui la scarica si spegne,
- il punto F, sul ramo ad alta resistenza, a cui si arriva dopo che la scarica si è spenta.

Di questi calcolare (e riportare in una tabella) i relativi valori di tensione e corrente. Infine riportare gli stessi punti – ad esclusione del punto D – sul grafico.

<!--fig:start-->
![[_attachments/Naz15FR-P2/Naz15FR-P2_p1_f1.png]]
*Schema circuito lampada a scarica con resistenze*
<!--fig:end-->

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Gas (object)|Gas]], [[Resistor (object)|Resistor]], [[Battery (object)|Battery]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1r4s-rM9XezT4aYNlMpmTNr95IvTNz5HS/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1SAia3L9MOqLCZaPu73Fs-jNqYQiQkPyi/view)


<div class="qlang-split" data-lang="en"></div>

**Lampada a scarica** — Punti 100

A discharge lamp is a glass bulb filled with gas, with two electrodes to which the electrical voltage is applied. In recent years this type of lamp has become very common because it has a better light output. For this reason it is also called a "low energy lamp". Its electrical behavior is much more complex than that of a filament lamp because it is necessary to controlledly excite the gas molecules that, when they are dehydrated, emit light. This requires a complex electronic control circuit.

The purpose of this exercise is to simulate, through a very simplified electrical circuit, the operation of a discharge lamp to describe its peculiar behavior.

The lamp is assumed to be powered by a DC voltage generator $V_G$ whose value passes, in a very short time, from 0 to the operating voltage $V_M$, which corresponds to a power delivered $P_M$. The electrical behaviour of the lamp can be described, using the strong simplification mentioned above, in purely resistive terms as follows (see paragraphs 1 and 2). Figure:

- when the $V_G$ applied voltage to the lamp is increased from 0 to $V_M$, the lamp strength shall initially be $R_H$ high until the applied voltage exceeds $V_H$ (notably less than $V_M$). At this voltage, the discharge is triggered: the lamp flashes and the current is salted, indicating that the resistance has dropped to a value $R_L$ much lower than $R_H$. Once discharge is started, an electronic device is activated which maintains the resistance for all voltage values up to $V_M$ unchanged; at the same time the luminosity of the lamp increases gradually until it reaches the maximum value for $V_G = V_M$;
- when the voltage applied to the lamp is reduced from $V_M$, the resistance remains $R_L$ and the lamp remains on, even if its brightness gradually decreases, until the voltage falls below $V_L$ significantly less than $V_H$. At this voltage, the discharge is exhausted, the lamp is turned off and the resistance suddenly rises to $R_H$.

Siano: $R_H = 1\,\text{k}\Omega$, $V_H = 10\,\text{V}$, $V_L = 5\,\text{V}$, $V_M = 48\,\text{V}$, $P_M = 30\,\text{W}$.

Calculate the current value $I_M$ at the rated voltage $V_M$ and the value $R_L$ of the lamp's resistance when on. Draw the chart that represents the current trend in the lamp in relation to the applied voltage both on the branch where the lamp is 'off' (low luminosity) and on the branch where it is 'on' (circuit voltage-current characteristic). The following points shall be considered for each branch:

- point B, on the high-resistance branch, where discharge is initiated,
- point C, on the low-resistance branch, reached after discharge has started,
- point D, on the low-resistance branch, at maximum power supply voltage,
- point E, on the low-resistance branch, where the discharge is turned off,
- the F-point on the high-strength branch, which is reached after the discharge has been turned off.

The voltage and current values are calculated (and shown in a table). Finally, return the same points  excluding the point D  on the graph.

<!--fig:start-->
![[_attachments/Naz15FR-P2/Naz15FR-P2_p1_f1.png]]
*Design of discharge lamp circuit with resistance*
<!--fig:end-->

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Gas (object)|Gas]], [[Resistor (object)|Resistor]], [[Battery (object)|Battery]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1r4s-rM9XezT4aYNlMpmTNr95IvTNz5HS/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1SAia3L9MOqLCZaPu73Fs-jNqYQiQkPyi/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="OII 2015 Nazionale Teorica — Problema 2" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/circuits,argomento/elettromagnetismo,object/gas,object/resistor"></span>

<div class="qlang-switch" data-default="it"></div>



Anche se queste lampade sono note per avere una vita più lunga delle lampade a incandescenza, con il tempo invecchiano e la loro potenza diminuisce gradualmente. Per descrivere in modo semplice la diminuzione della potenza la si attribuisce a una resistenza aggiuntiva $R_e$ che agisce in serie alla resistenza della lampada ed è indipendente dal valore $R_H$ o $R_L$ di tale resistenza.

Supponendo che la potenza della lampada alla tensione nominale scenda al valore $P'_M = f P_M$ con $f = 2/3$, calcolare il valore della resistenza aggiuntiva equivalente $R_e$ e il valore $V_i$ della tensione di alimentazione a cui la scarica si innesca. Calcolare infine la ripartizione di $V_i$ fra la caduta $V_e$ sulla resistenza aggiuntiva $R_e$ e la caduta $V$ sulla lampada immediatamente dopo l'innesco della scarica che fa scendere la resistenza della lampada al valore $R_L$.

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Gas (object)|Gas]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1r4s-rM9XezT4aYNlMpmTNr95IvTNz5HS/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1SAia3L9MOqLCZaPu73Fs-jNqYQiQkPyi/view)


<div class="qlang-split" data-lang="en"></div>

Although these lamps are known to have a longer life than incandescent lamps, they age and gradually decrease in power. To describe the decrease in power in a simple way, it is attributed to an additional resistance $R_e$ acting in series to the lamp resistance and independent of the $R_H$ or $R_L$ value of that resistance.

Assuming that the nominal voltage lamp power decreases to $P'_M = f P_M$ with $f = 2/3$, calculate the equivalent additional resistance $R_e$ and the $V_i$ value of the power supply voltage at which the discharge is triggered. Finally, calculate the distribution of $V_i$ between the drop $V_e$ on the additional resistance $R_e$ and the drop $V$ on the lamp immediately after the discharge is initiated which causes the lamp to drop to $R_L$.

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Gas (object)|Gas]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1r4s-rM9XezT4aYNlMpmTNr95IvTNz5HS/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1SAia3L9MOqLCZaPu73Fs-jNqYQiQkPyi/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="OII 2015 Nazionale Teorica — Problema 3" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/circuits,argomento/elettromagnetismo,object/gas,object/resistor"></span>

<div class="qlang-switch" data-default="it"></div>



Ricavare la relazione generale, in presenza di una resistenza aggiuntiva $R_e$, fra la tensione di alimentazione $V_G$ e la tensione $V$ ai capi della lampada nelle due situazioni di lampada accesa (resistenza della lampada $R_L$) e lampada spenta (resistenza della lampada $R_H$). Rappresentare il grafico di $V$ in funzione di $V_G$ nei due rami e indicare sul grafico i punti significativi (sempre ad eccezione del punto D) descritti al punto 1.

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Gas (object)|Gas]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1r4s-rM9XezT4aYNlMpmTNr95IvTNz5HS/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1SAia3L9MOqLCZaPu73Fs-jNqYQiQkPyi/view)


<div class="qlang-split" data-lang="en"></div>

Find the general relationship, in the presence of an additional resistance $R_e$, between the supply voltage $V_G$ and the voltage $V$ to the lamp heads in the two situations of lighting (lamp resistance $R_L$) and off lamp (lamp resistance $R_H$). The graph of $V$ in the function of $V_G$ in the two branches and indicate on the graph the significant points (except for point D) described in point 1.

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Gas (object)|Gas]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1r4s-rM9XezT4aYNlMpmTNr95IvTNz5HS/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1SAia3L9MOqLCZaPu73Fs-jNqYQiQkPyi/view)



<span class="atom-split" id="q04" data-atom="q04" data-title="OII 2015 Nazionale Teorica — Problema 4" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/circuits,argomento/elettromagnetismo,object/gas,object/resistor"></span>

<div class="qlang-switch" data-default="it"></div>



Ripetere i calcoli fatti al punto 2 supponendo che la potenza $P'_M$ della lampada alla tensione nominale si riduca ulteriormente fino a una frazione $f = 1/3$ di quella iniziale e costruire nuovamente il grafico di $V$ in funzione di $V_G$ come al punto 3.

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Gas (object)|Gas]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1r4s-rM9XezT4aYNlMpmTNr95IvTNz5HS/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1SAia3L9MOqLCZaPu73Fs-jNqYQiQkPyi/view)


<div class="qlang-split" data-lang="en"></div>

Repeat the calculations in paragraph 2 assuming that the $P'_M$ power of the nominal voltage lamp is further reduced to a fraction $f = 1/3$ of the initial one and reconstruct the $V$ graph as a function of $V_G$ as in paragraph 3.

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Gas (object)|Gas]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1r4s-rM9XezT4aYNlMpmTNr95IvTNz5HS/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1SAia3L9MOqLCZaPu73Fs-jNqYQiQkPyi/view)



<span class="atom-split" id="q05" data-atom="q05" data-title="OII 2015 Nazionale Teorica — Problema 5" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/circuits,argomento/elettromagnetismo,object/gas,object/resistor"></span>

<div class="qlang-switch" data-default="it"></div>



Osservando il grafico ottenuto al punto precedente, appare evidente che in un intervallo della tensione di alimentazione $V_G$ il circuito è instabile perché si crea una oscillazione continua fra lo stato in cui la lampada è spenta e la sua resistenza è al valore $R_H$ e quello in cui è accesa e la sua resistenza è al valore $R_L$. Il valore di $V_G$ a cui il circuito entra nella zona di instabilità è diverso a seconda che ci si arrivi partendo da $0\,\text{V}$ e facendo crescere la tensione lungo il ramo di alta resistenza (lampada spenta) oppure partendo da $V_M$ e facendola diminuire lungo il ramo di bassa resistenza (lampada accesa).

Indicare la zona di instabilità nel grafico costruito al punto precedente e, per ciascuno dei due rami del grafico, individuare la tensione di alimentazione alla quale si entra nella zona di instabilità e quella a cui si esce.

**Topic:** [[Circuits]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Gas (object)|Gas]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1r4s-rM9XezT4aYNlMpmTNr95IvTNz5HS/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1SAia3L9MOqLCZaPu73Fs-jNqYQiQkPyi/view)


<div class="qlang-split" data-lang="en"></div>

In the graph above, it is clear that in a power voltage range $V_G$ the circuit is unstable because a continuous oscillation is created between the state in which the lamp is off and its resistance is at $R_H$ and the state in which it is on and its resistance is at $R_L$. The value of $V_G$ at which the circuit enters the instability zone is different depending on whether it is reached by starting from $0\,\text{V}$ and increasing the voltage along the high-resistance branch (off lamp) or starting from $V_M$ and decreasing it along the low-resistance branch (light on lamp).

Indicate the instability zone in the chart constructed in the previous paragraph and, for each of the two branches of the chart, identify the power voltage to which the instability zone is entered and the voltage to which it is exited.

**Topic:** [[Circuits]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Objects:** [[Gas (object)|Gas]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1r4s-rM9XezT4aYNlMpmTNr95IvTNz5HS/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1SAia3L9MOqLCZaPu73Fs-jNqYQiQkPyi/view)



<span class="atom-split" id="q06" data-atom="q06" data-title="OII 2015 Nazionale Teorica — Problema 6" data-tags="nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/circuits,argomento/elettromagnetismo,object/gas,object/resistor"></span>

<div class="qlang-switch" data-default="it"></div>



Calcolare qual è il valore minimo che deve avere la potenza ridotta $P'_M$ se si vuole che non ci sia una zona di instabilità.

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Gas (object)|Gas]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1r4s-rM9XezT4aYNlMpmTNr95IvTNz5HS/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1SAia3L9MOqLCZaPu73Fs-jNqYQiQkPyi/view)


<div class="qlang-split" data-lang="en"></div>

Calculate the minimum value of the reduced power $P'_M$ if there is no area of instability.

**Topic:** [[Circuits]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Gas (object)|Gas]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1r4s-rM9XezT4aYNlMpmTNr95IvTNz5HS/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1SAia3L9MOqLCZaPu73Fs-jNqYQiQkPyi/view)
