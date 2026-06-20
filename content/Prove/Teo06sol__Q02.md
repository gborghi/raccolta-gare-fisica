---
tipo: quesito
quesito_id: quesito_Teo06sol__Q02
parent: prova_Teo06sol
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: '2006'
level: Nazionale
pdf: Gara individuale/nazionale/teorica/naz2006tpd/Teo06sol.pdf
cluster: Meccanica
quesito: '2'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/bi
  - topic/rotational-dynamics
  - topic/newtonian-mechanics
  - argomento/meccanica
---

# OII 2006 Nazionale Teorica — Problema 2

Quesito n. 2.
Scriviamo la seconda legge della dinamica per la sferetta 1, più lontana dall'asse di rotazione. Poiché
le forze che agiscono su di essa sono il peso, $\vec{P}$, e la forza $\vec{F}$ esercitata dall'asta, abbiamo:

$$\vec{P} + \vec{F} = m\vec{a}$$

Scomponendo lungo la direzione radiale e quella tangenziale abbiamo:

$$\begin{cases} mg\cos\theta + F_r = ma_c \\ mg\,\text{sen}\,\theta + F_t = ma_t \end{cases} \tag{2}$$

dove $a_c$ e $a_t$ indicano rispettivamente la componente centripeta e quella tangenziale dell'accelerazione.
Occupiamoci dapprima della componente radiale. L'accelerazione centripeta risulta:

$$a_c = \omega^2\left(\frac{2}{3}L\right) = \frac{4}{5}g(1 - \cos\theta)$$

Sostituendo questo valore nella prima delle (2) si ottiene facilmente l'espressione
data nel testo:

$$F_r = \frac{1}{5}mg(4 - 9\cos\theta)$$

Consideriamo ora la componente tangenziale. Il manubrio nel suo complesso
è un corpo rigido avente momento d'inerzia:

$$I = m\left(\frac{1}{3}L\right)^2 + m\left(\frac{2}{3}L\right)^2 = \frac{5}{9}mL^2 \tag{3}$$

e il suo peso totale (di modulo $2mg$) può pensarsi concentrato nel centro di
massa, la cui distanza dall'asse di rotazione, $d$, è (v. figura):

$$d = \frac{m(2/3)L - m(1/3)L}{2m} = \frac{1}{6}L \tag{4}$$

L'unica forza esterna, agente sul manubrio, che ha un momento non nullo rispetto all'asse di rotazione
è il peso totale. L'equazione della rotazione del manubrio risulta allora:

$$2mg\,d\,\text{sen}\,\theta = I\alpha$$

dove $\alpha$ indica l'accelerazione angolare. Usando la (3) e la (4) possiamo ricavare $\alpha$:

$$\alpha = \frac{3g}{5L}\text{sen}\,\theta \tag{5}$$

E di conseguenza:

$$a_t = \alpha\left(\frac{2}{3}L\right) = \frac{2}{5}g\,\text{sen}\,\theta \tag{6}$$

Sostituendo la (6) nella seconda delle (2) otteniamo:

$$F_t = -\frac{3}{5}mg\,\text{sen}\,\theta$$

NOTA: Soluzioni alternative per il calcolo di $F_t$
Scriviamo la componente tangenziale della seconda legge della dinamica per la sferetta 2:

$$-mg\,\text{sen}\,\theta + F_{t2} = ma_{t2} \tag{1'}$$

Poiché la sferetta 2 dista metà della prima rispetto all'asse di rotazione, risulta:

$$a_{t2} = \frac{1}{2}a_t \tag{2'}$$

Inoltre, poiché l'asta ha massa trascurabile, sono trascurabili anche il suo peso e il suo momento d'inerzia.
Ne segue che il momento delle forze esterne ad essa applicate dev'essere nullo, e dunque:

$$F_{t2} = -2F_t \tag{3'}$$

Sostituendo la (2') e la (3') nella (1') otteniamo:

$$-mg\,\text{sen}\,\theta - 2F_t = \frac{1}{2}ma_t$$

Mettendo in sistema questa equazione con la seconda delle (2) è facile ricavare il risultato richiesto.
Un terzo modo per arrivare al risultato richiesto consiste nel ricavare l'espressione (5) dell'accelerazione
angolare $\alpha$ derivando rispetto al tempo la velocità angolare, espressa nella (1) in termini dell'angolo $\theta$.
Si trova

$$\alpha = \frac{d\omega}{dt} = \frac{d\omega}{d\theta}\frac{d\theta}{dt} = \frac{d\omega}{d\theta}\omega = \frac{6g\,\text{sen}\,\theta/(5L)}{2\omega}\omega = \frac{3g}{5L}\text{sen}\,\theta.$$

<!--fig:start-->
**p.1** — Manubrio inclinato con sferette 1 e 2, angolo theta
![[_attachments/Teo06sol/Teo06sol_p1_f1.png]]
<!--fig:end-->

**Topic:** [[Rotational Dynamics]], [[Newtonian Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Torque & Angular Momentum Analysis (metodo)|Torque & Angular Momentum Analysis]], [[Vector Decomposition (metodo)|Vector Decomposition]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1
**Soluzione:** Soluzioni (PDF)
