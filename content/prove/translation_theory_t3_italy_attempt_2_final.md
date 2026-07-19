---
title: IPhO 2017 Internazionale Teorica
tipo: prova
tags:
  - graph/prova
---
<div class="atom-reader" data-prova="translation_theory_t3_italy_attempt_2_final"></div>




<span class="atom-split" id="q03" data-atom="q03" data-title="IPhO 2017 Internazionale Teorica — Problema 3" data-tags="nazione/italia,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/multi,topic/astrophysics,topic/gravitation,topic/thermodynamics,argomento/gravitazione-e-astrofisica,object/photon"></span>

<div class="qlang-switch" data-default="en"></div>



**Inflazione cosmica**

A causa del moto relativo delle galassie osservato dalla Terra, la lunghezza d'onda dello spettro visibile di una galassia è diverso da quello emesso dalla galassia: questo fenomeno è noto come effetto doppler della luce. Per un ammasso di galassie ci si aspetta che lo spostamento dello spettro abbia una distribuzione casuale: alcune galassie mostrano uno spostamento dello spettro verso il rosso (spostamento positivo della spettro), altre che mostrano uno spostamento della luce verso il blu (spostamento negativo dello spettro, blu). L'osservazione, però, mostra che tutte le galassie che si trovano più vicine alla nostra, hanno lo spettro spostato verso il rosso: ciò è dovuto a qualunque parte dell'universo venga effettuata l'osservazione. In conclusione, l'universo deve essere in espansione.

D'altra parte, le irregolarità locali dell'universo si possono trascurare, su una scala più grande di $100\,\mathrm{Mpc}$, in cui $1\,\mathrm{pc} = 3.26\,\mathrm{anni\text{-}luce}$. Facendo una media su larga scala, la distribuzione delle galassie diventa sempre più isotropa (cioè non spostamento di osservazione) e omogenea (cioè indipendente dalla posizione). Quindi si può assumere che l'Universo: 1) abbia una densità uniforme $\rho$ e 2) si sta espandendo.

### A. Espansione dell'Universo
Come semplice modello di universo, si consideri una sfera di densità uniforme che si espande e si immerga in un mezzo infinito con la stessa densità. Sia $R_s$ il raggio della sfera in un certo istante di tempo. Per esprimere come la stara si espandendo, si deve definire la dipendenza dal tempo del raggio $R(t)$ attraverso un fattore moltiplicativo $a(t)$ in modo tale che sia $R(t) = a(t)R_s$.

Applicando la legge di gravità di Newton per una particella di massa $m$ sul bordo della sfera, secondo il nostro modello di universo, si ottiene un insieme di equazioni riportate qui sotto:
$$ \left(\frac{\dot a}{a}\right)^2 = A_1\,\rho(t) - \frac{k c^2}{R_s^2\, a^2(t)} \quad (1) $$
dove $k$ è una costante adimensionale e $c$ è la velocità della luce.

- **A.1** (1.3 pt): Calcola la costante $A_1$ presente nell'equazione (1).

La discussione fino a questo punto non è relativistica. Ma, in effetti, si può estendere anche a sistemi relativistici, reinterpretando $\rho(t)c^2$ come la densità di energia totale (escludendo l'energia potenziale gravitazionale). In questo sistema relativistico si ricava la seconda equazione di Friedmann:
$$ \dot\rho + A_2\left(\rho + \frac{p}{c^2}\right)\frac{\dot a}{a} = 0 \quad (2) $$
adoperando la prima legge della termodinamica per un sistema adiabatico, dove $p$ indica la pressione sulla sfera.

- **A.2** (0.9 pt): Calcola la costante $A_2$ nell'equazione (2).

Per risolvere le Eq. (1) e (2), si dovrebbe assumere una relazione per la funzione $p = p(\rho)$, tale che $p(t)/c^2 = w\rho(t)$, con $w$ costante. Interviene anche un altro fattore $H = \dot a/a$, chiamato costante di Hubble. Il valore attuale dei parametri viene di solito contrassegnato col pedice 0 per cui si ha $t_0, \rho_0, H_0, a_0$ e così via. Per semplicità si prenda $a_0 = 1$. Si ritiene che l'Universo abbia avuto origine, da una grande esplosione chiamata Big Bang, che ha prodotto una emissione di particelle relativistiche. Durante la sua espansione, l'Universo si sta raffreddando e le particelle sono diventate non relativistiche.

Tuttavia le osservazioni più recenti hanno confermato che l'Universo attuale è governato dalla densità di energia cosmologica costante. Nel caso del fotone, mentre l'Universo si espande, la lunghezza d'onda del fotone aumenta proporzionalmente con lo stesso fattore di scala.

- **A.3** (1.2 pt): In ciascuno dei tre casi seguenti calcola il valore di $w$: (i) l'universo è riempito solo di radiazione elettromagnetica (cioè l'energia dei fotoni), (ii) l'universo è riempito di materia non-relativistica e (iii) l'universo a densità di energia costante.
- **A.4** (1.2 pt): Nel caso in cui sia $k = 0$, trova $a(t)$ per ciascun caso da (i) a (iii) trattati nella domanda A.3. Usa la condizione iniziale $a(t) = 0$ nei casi (i) e (ii), e la condizione iniziale $a_0 = 1$ nel caso (iii).

La costante $k$ nell'Eq. (1) si riferisce alla classificazione della geometria spaziale dell'Universo. Il suo valore può essere assunto uguale a $k = +1$ per un universo a curvatura positiva (cioè chiuso), $k = 0$ per un universo piatto (infinito) e $k = -1$ per un universo a curvatura negativa (universo aperto, infinito). Si definisce il rapporto di densità $\Omega = \rho/\rho_c$, dove $\rho_c = H^2/A_1$ è la densità di energia critica. Prendi nota che $A_1$ è quello della domanda A.1.

- **A.5** (0.1 pt): Esprimi $k$ dell'Eq. (1) in termini di $\Omega$, $H$, $a$ e $R_s$.
- **A.6** (0.3 pt): Trova l'intervallo di valori di $\Omega$ che corrisponde a ciascun valore di $k = +1$, $k = 0$ e $k = -1$.

### B. La motivazione per introdurre la fase d'inflazione e le sue condizioni generali
L'osservazione delle microonde cosmiche della radiazione di fondo (CMB) suggerisce che il nostro universo attuale sia approssimativamente piatto. Se questo è vero allora l'universo attuale dovrebbe essere cominciato da un universo completamente piatto, altrimenti ogni eventuale deviazione dalla forma piana sarebbe aumentata nel tempo distruggendo l'attuale forma piatta.

- **B.1** (0.4 pt): Trova $|\Omega(t) - 1|$ in funzione del tempo sia che l'universo si trovi nel dominio della materia non relativistica (vedi domanda A.3).

La trattazione precedente si risolve se l'universo nei suoi primi istanti sottostà ad un periodo di tempo ad un regime in cui la densità di energia $\rho$ rimane costante e questo comporta un'espansione esponenziale, cosiddetta periodo di inflazione.

- **B.2** (0.3 pt): Per il periodo in cui predomina la densità di energia costante, trova $|\Omega(t) - 1|$ in funzione del tempo. Assumi che $|\Omega(t) - 1| \ll 1$.
- **B.3** (0.9 pt): Fa' vedere, dimostra, che la condizione per l'inflazione implica molte condizioni, ovvero: una pressione negativa, un'espansione accelerata ($\ddot a > 0$) e un raggio di Hubble decrescente ($d(\dot a H) - 1/dt < 0$).
- **B.4** (0.2 pt): Fa' vedere, dimostra, che la condizione per cui il raggio di Hubble è decrescente si può esprimere in termini del parametro $\epsilon = \tfrac{\dot H}{H^2}$ con la condizione $\epsilon < 1$.

L'inflazione dura finché $\epsilon < 1$ e cessa quando $\epsilon = 1$. Si può definire il numero di e-folding $N$, tale che $dN = d\ln a = H\,dt$ con $N = 0$ al termine dell'inflazione.

### C. Inflazione generata da una distribuzione omogenea di particelle
Un esempio di un semplice sistema fisico che può dare origine a un periodo d'inflazione è il caso di un universo dominato da una distribuzione omogenea di materia. Questo tipo di materia viene chiamato inflatone ed è caratterizzato da una funzione $\phi(t)$. L'equazione della dinamica di questa materia si può esprimere nel modo seguente:
$$ \ddot\phi + 3H\dot\phi = -V', \quad (3) $$
dove $V = V(\phi)$ è una funzione potenziale e $V' = \dfrac{dV}{d\phi}$. La costante di Hubble soddisfa la condizione seguente:
$$ H^2 = \frac{1}{3M_{pl}^2}\left[\tfrac12\dot\phi^2 + V\right], \quad (4) $$
dove $M_{pl}$ rappresenta una costante chiamata massa ridotta di Planck. Il periodo di inflazione avviene quando l'energia potenziale $V$ predomina sull'energia cinetica $\dot\phi^2/2$ per un tempo così lungo tale per cui il termine $\ddot\phi$ si possa trascurare nell'equazione (3). Questa specifica approssimazione di chiama "slow-roll". Le quantità $\epsilon$ e $\eta_V = \delta + \epsilon$, dove $\delta = -\ddot\phi/(H\dot\phi)$, sono chiamate parametri di "slow-roll".

- **C.1** (1.7 pt): Stima i parametri $\epsilon$, $\eta_V$, $dN/d\phi$ in funzione del potenziale $V(\phi)$ e delle sue derivate prima e seconda ($V'$ e $V''$).

### D. Inflazione con un potenziale semplice
Le previsioni dedotte con qualunque modello inflativo devono essere confrontate con i dati rilevati al CMB procedendo come segue. $n_s = 0.968 \pm 0.006$ ed $r < 0.12$, dove $r = 16\epsilon$ ed $n_s = 1 + 2\eta_V - 6\epsilon$ vengono valutate per $\phi = \phi_\text{start}$ per il modello inflativo dove domina la materia. Assumi che il potenziale della materia sia del tipo $V(\phi) = \Lambda^4\left(\dfrac{\phi}{M_{pl}}\right)^n$ dove $n$ un intero qualunque e $\Lambda$ è una costante.

- **D.1** (0.5 pt): Calcola $\phi_\text{end}$ alla fine dell'inflazione.
- **D.2** (0.9 pt): Esprimi $r$ ed $n_s$ in funzione del numero di e-folding $N$ e dell'intero $n$. Stima il valore di $n$ che approssima meglio i valori osservati di $r$ ed $n_s$. Prendi per $N$ il valore $N = 60$ per lo svolgimento dei calcoli.

**Topic:** [[Astrophysics]], [[Gravitation]], [[Thermodynamics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Photon (object)|Photon]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1tB12uxoerPLwzqrBFlrtpufyZTi7fIK4/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1hbE0-n6vfZGpL7hnQ6Egmqeza4UEFJYh/view)


<div class="qlang-split" data-lang="it"></div>

**Inflazione cosmica**

A causa del moto relativo delle galassie osservate dalla Terra, la lunghezza d'onda dello spettro visibile di una galassia è diversa da quella emessa dalla galassia: questo fenomeno è noto come effetto doppler della luce. Per un gruppo di galassie si aspetta che il spostamento dello spettro abbia una distribuzione casuale: alcune galassie mostrano uno spostamento dello spettro verso il rosso (spostamento positivo dello spettro), altre che mostrano uno spostamento della luce verso il blu (spostamento negativo dello spettro, blu). L'osservazione, tuttavia, mostra che tutte le galassie che si trovano più vicine alla nostra hanno lo spettro spostato verso il rosso: ciò è dovuto a qualunque parte dell'universo venga effettuata l'osservazione. In conclusione, l'universo deve essere in espansione.

D'altra parte, le irregolarità locali dell'universo si possono trascurare, su una scala più grande di $100\,\mathrm{Mpc}$, in cui $1\,\mathrm{pc} = 3.26\,\mathrm{anni\text{-}luce}$. Facendo un media su larga scala, la distribuzione delle galassie diventa sempre più isotropa (cioè non spostamento di osservazione) e omogenea (cioè indipendente dalla posizione). Quindi si può supporre che l'Universo: 1) abbia una densità uniforme $\rho$ e 2) si stia espandendo.

### A. espansione dell'universo
Come semplice modello dell'universo, si considera una sfera di densità uniforme che si espandono e si immerge in un mezzo infinito con la stessa densità. Sia $R_s$ il raggio della sfera in un certo istante di tempo. Per esprimere come la vecchia si espandendo, si deve definire la dipendenza dal tempo del raggio $R(t)$ attraverso un fattore moltiplicativo $a(t)$ in modo tale che sia $R(t) = a(t)R_s$.

Applicando la legge di gravità di Newton per una particella di massa $m$ sul bordo della sfera, secondo il nostro modello dell'universo, si ottiene un insieme di equazioni riportate qui sotto:
$$ \left(\frac{\dot a}{a}\right)^2 = A_1\,\rho(t) - \frac{k c^2}{R_s^2\, a^2(t)} \quad (1) $$
dove $k$ è una costante adimensionale e $c$ è la velocità della luce.

- **A.1 ** (1.3 p): Calcola la costante $A_1$ presente nell'equazione (1).

La discussione fino a questo punto non è relativistica. Ma, in effetti, si può estendere anche a un sistema relativistico, reinterpretando $\rho(t)c^2$ come la densità di energia totale (escludendo l'energia potenziale gravitazionale). In questo sistema relativistico si ricava la seconda equazione di Friedmann:
$$ \dot\rho + A_2\left(\rho + \frac{p}{c^2}\right)\frac{\dot a}{a} = 0 \quad (2) $$
adoperando la prima legge della termodinamica per un sistema adiabatico, dove $p$ indica la pressione sulla sfera.

- **A.2 ** (0,9 p): Calcola la costante $A_2$ nell'equazione (2).

Per risolvere le Eq. (1) e (2), se si dovrebbe assumere un rapporto per la funzione $p = p(\rho)$, tale che $p(t)/c^2 = w\rho(t)$, con $w$ costante. Interviene anche un altro fattore $H = \dot a/a$, chiamato costante di Hubble. Il valore attuale dei parametri viene solitamente contrassegnato con la misura 0 per cui ha $t_0, \rho_0, H_0, a_0$ e così via. Per semplicità si prenda $a_0 = 1$. Si ritiene che l'Universo abbia avuto origine da una grande esplosione chiamata Big Bang, che ha prodotto un'emissione di particelle relativistiche. Durante la sua espansione, l'Universo si sta raffreddando e le particelle sono diventate non relativistiche.

Tuttavia, le più recenti osservazioni hanno confermato che l'Universo attuale è governato dalla densità di energia cosmologica costante. Nel caso del fotone, mentre l'universo si espandono, la lunghezza delle onde del fotone aumenta proporzionalmente con lo stesso fattore di scala.

- **A.3** (1.2 pt): In ciascuno dei tre casi seguenti calcola il valore di $w$: (i) l'universo è riempito solo di radiazione elettromagnetica (cioè l'energia dei fotoni), (ii) l'universo è riempito di materia non-relativistica e (iii) l'universo a densità di energia costante.
- **A.4** (1.2 pt): Nel caso in cui sia $k = 0$, trova $a(t)$ per ciascun caso da (i) a (iii) trattati nella domanda A.3. Usa la condizione iniziale $a(t) = 0$ nei casi (i) e (ii), e la condizione iniziale $a_0 = 1$ nel caso (iii).

La costante $k$ nell'Eq. (1) si riferisce alla classificazione della geometria spaziale dell'universo. Il suo valore può essere assunto uguale a $k = +1$ per un universo a curvatura positiva (cioè chiuso), $k = 0$ per un universo piatto (infinito) e $k = -1$ per un universo a curvatura negativa (universo aperto, infinito). Se si definisce il rapporto di densità $\Omega = \rho/\rho_c$, dove $\rho_c = H^2/A_1$ è la densità di energia critica. Prendi nota che $A_1$ è quello della domanda A.1.

- **A.5 ** (0,1 p): Esprimi $k$ dell'Eq. (1) in termini di $\Omega$, $H$, $a$ e $R_s$.
- **A.6 ** (0,3 p): Trovato l'intervallo di valori di $\Omega$ che corrisponde a ciascun valore di $k = +1$, $k = 0$ e $k = -1$.

### B. La motivazione per introdurre la fase di inflazione e le sue condizioni generali
L'osservazione delle microonde cosmiche della radiazione di fondo (CMB) suggerisce che il nostro universo attuale è approssimativamente piatto. Se questo è vero allora l'universo attuale dovrebbe essere iniziato da un universo completamente piatto, altrimenti ogni eventuale deviazione dalla forma piana aumenterebbe nel tempo distruggendo la forma piatta attuale.

- **B.1 ** (0.4 p): Trova $|\Omega(t) - 1|$ in funzione del tempo che si trova nell'universo nel dominio della materia non relativistica (vedi domanda A.3).

La trattativa precedente si risolve se l'universo nei suoi primi istanti si trova ad un periodo di tempo ad un regime in cui la densità di energia $\rho$ rimane costante e questo comporta un'espansione esponenziale, detta periodo di inflazione.

- **B.2** (0.3 pt): Per il periodo in cui predomina la densità di energia costante, trova $|\Omega(t) - 1|$ in funzione del tempo. Presumo che $|\Omega(t) - 1| \ll 1$.
- **B.3** (0.9 pt): Fa' vedere, dimostra, che la condizione per l'inflazione implica molte condizioni, ovvero: una pressione negativa, un'espansione accelerata ($\ddot a > 0$) e un raggio di Hubble decrescente ($d(\dot a H) - 1/dt < 0$).
- **B.4 ** (0.2 p): Fa' vedere, dimostra, che la condizione per la quale il raggio di Hubble è decrescente se può esprimere in termini di parametro $\epsilon = \tfrac{\dot H}{H^2}$ con la condizione $\epsilon < 1$.

L'inflazione dura finché $\epsilon < 1$ cessa quando $\epsilon = 1$. Se si può definire il numero di e-folding $N$, si dice che $dN = d\ln a = H\,dt$ con $N = 0$ al termine dell'inflazione.

### C. Inflazione generata da una distribuzione omogenea delle particelle
Un esempio di un semplice sistema fisico che può dare origine a un periodo di inflazione è il caso di un universo dominato da una distribuzione omogenea della materia. Questo tipo di materia viene chiamato inflato ed è caratterizzato da una funzione $\phi(t)$. L'equazione della dinamica di questa materia può essere espressa in modo seguente:
$$ \ddot\phi + 3H\dot\phi = -V', \quad (3) $$
dove $V = V(\phi)$ è una funzione potenziale e $V' = \dfrac{dV}{d\phi}$. La costante di Hubble soddisfa la seguente condizione:
$$ H^2 = \frac{1}{3M_{pl}^2}\left[\tfrac12\dot\phi^2 + V\right], \quad (4) $$
dove $M_{pl}$ rappresenta una costante chiamata massa ridotta di Planck. Il periodo di inflazione avviene quando l'energia potenziale $V$ predomina sull'energia cinetica $\dot\phi^2/2$ per un tempo così lungo per cui il termine $\ddot\phi$ può essere trascurato nell'equazione (3). Questa specifica approssimazione di chiami "rollo lento". Le quantità $\epsilon$ e $\eta_V = \delta + \epsilon$, dove $\delta = -\ddot\phi/(H\dot\phi)$, sono chiamate parametri di "rollo lento".

- **C.1 ** (1.7 pt): Stima i parametri $\epsilon$, $\eta_V$, $dN/d\phi$ in funzione del potenziale $V(\phi)$ e delle sue derivate prima e seconda ($V'$ e $V''$).

### D. Inflazione con un potenziale semplice
Le previsioni dedotte con qualsiasi modello inflativo devono essere confrontate con le relative informazioni relative al processo CMB in seguito. $n_s = 0.968 \pm 0.006$ ed $r < 0.12$, dove $r = 16\epsilon$ ed $n_s = 1 + 2\eta_V - 6\epsilon$ vengono valutate per $\phi = \phi_\text{start}$ per il modello inflativo dove domina la materia. Supponiamo che il potenziale della materia sia del tipo $V(\phi) = \Lambda^4\left(\dfrac{\phi}{M_{pl}}\right)^n$ doveva $n$ un intero qualunque e $\Lambda$ è una costante.

- **D.1** (0.5 pt): Calcola $\phi_\text{end}$ alla fine dell'inflazione.
- **D.2** (0.9 pt): Esprimi $r$ ed $n_s$ in funzione del numero di e-folding $N$ e dell'intero $n$. Stima il valore di $n$ che si approssimerà al meglio ai valori osservati di $r$ ed $n_s$. Prendi per $N$ il valore $N = 60$ per lo svolgimento dei calcoli.

**Topic:** [[Astrophysics]], [[Gravitation]], [[Thermodynamics]]
**Metodi:** [[Differential Equations (metodo)|Differential Equations]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Approximation & Series Expansion (metodo)|Approximation & Series Expansion]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Photon (object)|Photon]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1tB12uxoerPLwzqrBFlrtpufyZTi7fIK4/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1hbE0-n6vfZGpL7hnQ6Egmqeza4UEFJYh/view)
