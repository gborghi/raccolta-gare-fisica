---
tipo: quesito
quesito_id: quesito_Naz19-T__Q04
parent: prova_Naz19-T
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: '2019'
level: Nazionale
pdf: Gara individuale/nazionale/teorica/naz2019th/Naz19-T.pdf
cluster: Meccanica
quesito: '4'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/mono
  - topic/geometric-optics
  - argomento/meccanica
---

# OII 2019 Nazionale Teorica — Problema 4

**P4 — Luce dal ghiaccio: un alone per il Sole** *(Punti 100)*

L'alone solare, come quello mostrato nella foto, è un fenomeno che si manifesta in particolari condizioni meteorologiche. Si tratta di un sottile anello luminoso che circonda il Sole, visibile a cielo sereno: nella zona interna prossima all'anello il cielo appare più scuro, mentre nella zona esterna si osserva una debole luminosità che diminuisce gradualmente fino a raccordarsi con l'usuale colore blu del cielo sereno.

Il fenomeno è dovuto alla presenza nel cielo di una nube di minuscoli cristalli di ghiaccio, aventi la forma di prismi esagonali, che fanno sì che i raggi di Sole che incidono su una delle pareti laterali, possano emergere in parte deviati.

Scopo di questo problema è capire come avviene la formazione dell'anello luminoso, in corrispondenza di un particolare valore dell'angolo di deviazione, e calcolare tale valore.

Per semplicità, si prenderanno in considerazione solamente i cristalli il cui asse sia perpendicolare al piano definito da un raggio incidente e da quello deviato che arriva all'osservatore, come mostrato in figura a sinistra. L'angolo di deviazione $\delta$ è quello mostrato in figura a destra in cui sono definiti anche l'angolo d'incidenza $i$, l'angolo di rifrazione interna $r$, l'angolo d'incidenza interna $i'$ e l'angolo di rifrazione esterna $r'$.

È ovvio che per incidenza normale su una faccia laterale "e" tutti i raggi emergono dalla faccia laterale opposta "p", senza essere deviati. Per angoli d'incidenza non nulli ($0° < i < 90°$) i raggi potrebbero emergere dalla faccia parallela opposta ("p") o da una di quelle immediatamente adiacenti ("c"), oppure da una delle facce "s" adiacenti a quella di entrata "e".

*[Figura a sinistra: prisma esagonale di ghiaccio con asse perpendicolare al piano del raggio; raggio incidente (freccia) ed emergente deviato. Figura a destra: sezione esagonale con facce etichettate "e" (entrata), "s", "c", "p"; raggio che entra con angolo $i$, rifratto con angolo $r$, incide internamente su una faccia con angolo $i'$ ed emerge con angolo $r'$; deviazione complessiva $\delta$.]*

1. Determinare il minimo valore $n_{\min}$ dell'indice di rifrazione per il quale qualunque raggio incidente sulla faccia "e" e rifratto verso la faccia "s" non esce da "s".

I raggi incidenti sulla faccia "e" vengono rifratti o verso la faccia "s", o verso la faccia "c", o verso la faccia "p". Con valori dell'indice di rifrazione superiori a $n_{\min}$, i raggi rifratti verso "s" vengono poi riflessi verso "c" e da lì escono. I raggi rifratti verso "c" potranno uscire oppure venire di nuovo riflessi all'interno del prisma. I raggi rifratti verso "p" escono dal prisma.

2. Considerando un fascio uniforme di luce che incide sulla faccia "e" con angolo di incidenza $i$, calcolare la frazione $\eta$ di questa che viene rifratta direttamente verso la faccia "p" (cioè, senza subire riflessioni interne su altre facce), in funzione dell'angolo di incidenza $i$ e dell'indice di rifrazione $n$.

Per studiare il fenomeno dell'alone ci occuperemo, d'ora in poi, solo dei raggi rifratti verso la faccia "c".

**ATTENZIONE:** Da qui in poi, determinare il valore degli angoli con l'accuratezza di $1/100$ di grado.

3. Sapendo che l'indice di rifrazione $n$ del ghiaccio per la luce visibile dei diversi colori vale in media $1.310$, calcolare il minimo valore dell'angolo di incidenza $i$ per il quale qualche raggio rifratto verso la faccia "c" può emergere da essa. Calcolare inoltre il corrispondente angolo di deviazione $\delta$.

Il principio di reversibilità del cammino ottico si può esprimere dicendo che "se per andare da un punto $A$ a un punto $B$ la luce segue un certo percorso, allora partendo da $B$ può giungere ad $A$ percorrendo in senso inverso lo stesso percorso".

4. Senza necessità di ulteriori calcoli, ma sfruttando il principio citato sopra, determinare gli angoli ($i$, $r'$ e $\delta$) corrispondenti al massimo valore dell'angolo di incidenza per il quale qualche raggio può emergere dalla faccia "c".

Data la simmetria legata al principio di reversibilità enunciato sopra, è facile capire per quale angolo di incidenza $i_0$ l'angolo di deviazione $\delta$ avrà un valore minimo o massimo $\delta_0$ che è proprio il raggio angolare dell'alone.

5. Determinare quanto valgono $i_0$ e $\delta_0$ e dire se si tratta di un valore massimo o di un minimo.

La funzione $\delta(i)$ è piuttosto complicata; risulta infatti
$$\delta(i) = i + \arcsin\!\left[\frac{\sqrt 3}{2}\sqrt{n^2 - \sin^2 i} - \frac{1}{2}\sin i\right] - 60°.$$
Per questo, per lo studio successivo, in un intorno abbastanza ampio di $\delta_0$ è conveniente approssimarla con il polinomio di secondo grado $y(x) = ax^2 + bx + c$ dove $y$ è l'angolo di deviazione e $x$ l'angolo di incidenza, $b = -0.6889$ e $c = 35.93°$.

6. Determinare il coefficiente $a$ del polinomio dato e verificare, per almeno due valori diversi di $i$, che l'errore relativo dell'approssimazione è minore dell'$1\%$ nell'intervallo $30° \le i \le 55°$.

Il raggio dell'alone è legato al valore di $\delta_0$ trovato alla domanda 5. Per capire questo fatto, si supponga che i cristalli considerati siano in numero molto grande $N$ e che siano orientati in modo casuale cosicché la distribuzione statistica dell'angolo di incidenza $i$ sia uniforme.

7. Usando l'approssimazione polinomiale, si determini il rapporto tra l'ampiezza dell'intervallo di angoli di incidenza per i quali la deviazione differisce da $\delta_0$ per meno di $0.01°$ e l'ampiezza dell'intervallo per i quali la deviazione differisce da $\delta_0$ tra $1.0°$ e $1.01°$.

8. Spiegare in che modo il raggio dell'alone è collegato al valore minimo della deviazione angolare $\delta_0$.

<!--fig:start-->
**p.7** — Foto dell'alone solare nel cielo
![[_attachments/Naz19-T/Naz19-T_p7_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.7** — Cristallo prismatico esagonale tridimensionale
![[_attachments/Naz19-T/Naz19-T_p7_f5.png]]
<!--fig:end-->

<!--fig:start-->
**p.7** — Geometria della deviazione del raggio nel cristallo
![[_attachments/Naz19-T/Naz19-T_p7_f6.png]]
<!--fig:end-->

**Topic:** [[Geometric Optics]]
**Metodi:** [[Snell's Law (metodo)|Snell's Law]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]], [[Small-Angle Approximation (metodo)|Small-Angle Approximation]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Fonte:** Testo (PDF) — p.7
**Soluzione:** Soluzioni (PDF)
