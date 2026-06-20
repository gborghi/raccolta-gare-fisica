---
tipo: quesito
quesito_id: quesito_Naz15FR-P2__Q01
parent: prova_Naz15FR-P2
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: '2015'
level: Nazionale
pdf: Gara individuale/nazionale/teorica/naz2015th/Naz15FR-P2.pdf
cluster: Elettromagnetismo
quesito: '1'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/mono
  - topic/circuits
  - argomento/elettromagnetismo
---

# OII 2015 Nazionale Teorica — Problema 1

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
**Fonte:** Testo (PDF) — p.1
**Soluzione:** Soluzioni (PDF)
