---
tipo: prova
prova_id: prova_49_IPhO_2018_2Rd_Aufgaben_Loesungen_web
competition: 49. IPhO 2018 – Auswahlwettbewerb 2. Runde
comp_code: IPhO-DE-2Rd-2018
country: Deutschland
year: '2018'
level: Round 2
pdf: gare di altri paesi/Germania/Rund2/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web.pdf
cluster: Fluidi
n_problemi: '3'
generator: llm-extracted
tags:
  - kg/prova
  - anno/2018
  - paese/Deutschland
  - comp/IPhO-DE-2Rd-2018
  - cluster/Fluidi
---

# IPhO-DE-2Rd-2018 2018 Round 2 — 49_IPhO_2018_2Rd_Aufgaben_Loesungen_web.pdf

**Fonte:** `gare di altri paesi/Germania/Rund2/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web.pdf` · Apri PDF · apri PDF p.3
**Cluster:** [[Fluidi]]

## Problema 1


**Mechanische Spielereien**

**Aufgabe 1 – Mechanische Spielereien** (10+10 Pkt.)

Zeit für physikalische Spielereien! In einer offensichtlich speziell für physikbegeisterte Menschen eingerichteten Mitmachausstellung gibt es allerlei zu entdecken. Schau dir zwei mechanische Exponate genauer an und überzeuge dich selbst.

### 1.1 Wasserspiel

An einer der ersten Stationen kannst du Wasser am oberen Ende in eine Rinne der Länge $L = 100\,\text{cm}$ gießen, das an dem unteren Ende aus der Rinne herausläuft. Die Rinne ist an dem unteren Ende in einer Höhe $h = 200\,\text{cm}$ über dem Erdboden fixiert. Das obere Ende der Rinne kannst du aber in der Höhe variieren. Die Höhe des oberen Endes beeinflusst offensichtlich, wie weit ein Wasserstrahl kommt, bevor er auf den Boden trifft.

**1.a)** Bestimme näherungsweise die maximale horizontale Weite, gemessen vom unteren Ende der Rinne, die du mit dem Wasserstrahl erreichen kannst und welchen Winkel die Rinne dazu mit der Horizontalen einschließen muss. (10 Pkt.)

Du kannst dabei annehmen, dass sich das Wasser reibungsfrei bewegt und dass es mit einer vernachlässigbaren Geschwindigkeit in die Rinne gegossen wird.

### 1.2 Luftkissenbahn und Reibung an einer Wand

Ein weiteres Highlight der Ausstellung ist die Luftkissenbahn, auf der sich ein kleiner, flacher Quader der Masse $m$ reibungsfrei bewegt. Die Luftkissenbahn wird auf zwei Seiten durch feste Wände mit einem Abstand $b$ voneinander begrenzt.

Betrachte den Fall, bei dem du den Quader von der linken Wand mit einer Geschwindigkeit $v_0$ in einem Winkel von $\alpha = 45°$ zur Wand startest.
Bei jedem Stoß mit einer Wand nimmt die Geschwindigkeit des Quaders entlang der Wände ab, obwohl die dabei auftretenden Verformungen als elastisch angenommen werden können. Nach dem fünften Stoß besitzt der Quader so gut wie keine Geschwindigkeit mehr entlang der Wände und bewegt sich nur noch senkrecht zwischen den Wänden hin und her.

**1.b)** Bestimme den Gleitreibungskoeffizienten zwischen Wand und Quader und gib einen Ausdruck für die von dem Quader entlang der Wände (in der Skizze nach oben) insgesamt zurückgelegte Strecke in Abhängigkeit von den gegebenen Größen an. (10 Pkt.)

Nimm zur Lösung an, dass sich der Quader während der Bewegung nicht dreht.


<!--fig:start-->
![[_attachments/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web_p3_f1.png]]
*Schema del gioco d'acqua (rinne)*
<!--fig:end-->
<!--fig:start-->
![[_attachments/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web_p3_f2.png]]
*Aufsicht sulla pista a cuscino d'aria*
<!--fig:end-->
<!--fig:start-->
![[_attachments/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web_p4_f3.png]]
*Grafico gittata x in funzione di alfa*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Fluid Mechanics]]
**Metodi:** [[Conservation of Energy (metodo)|Conservation of Energy]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.3

## Problema 2


**Aufgabe 2 – Quanteneffekte von Elektronen in Magnetfeldern** (23+17 Pkt.)

*(Idee: Academic Committee der 47. Internationalen PhysikOlympiade 2016 in Zürich)*

Das Anfang des 20. Jahrhunderts entwickelte Bohrsche Atommodell erlaubte erstmalig eine theoretische Erklärung der Größe von Atomen sowie von Spektrallinien im Wasserstoffatom. Auch wenn das Modell auf Postulaten basiert, die im Widerspruch zur klassischen Mechanik und zur Elektrodynamik stehen, war es außerordentlich erfolgreich.

Die Grundannahme des Bohrschen Atommodells ist, dass sich die Elektronen eines Atoms ohne Energieverlust in Kreisbahnen um den Atomkern bewegen. Dabei sind nur solche Kreisbahnen erlaubt, für die der Bahndrehimpuls ein ganzzahliges Vielfaches des reduzierten Planckschen Wirkungsquantums
$$\hbar = \frac{h}{2\pi}$$
mit $h \approx 6{,}626 \times 10^{-34}\,\text{J s}$ ist. Diese Bedingung lässt sich über den Impuls $p$ des Elektrons entlang der Kreisbahn und deren Radius $r$ ausdrücken durch
$$n\,\hbar = r\,p, \quad n \in \mathbb{Z}.$$

Wenn sich ein Atom in einem externen Magnetfeld befindet, muss diese Quantisierungsbedingung modifiziert werden. Für ein Elektron der Ladung $-e$, das sich auf einer Kreisbahn bewegt, die senkrecht zur Richtung eines homogenen und konstanten Magnetfeldes der magnetischen Flussdichte $B$ orientiert ist, lautet die Quantisierungsbedingung:
$$r\left(p - \frac{e\,r^2\,B}{2}\right) = n\,\hbar.$$

Nimm in dieser Aufgabe an, dass sich die Elektronen als nichtrelativistische Teilchen betrachten lassen und vernachlässige das magnetische Moment des Elektrons aufgrund seines Spins. Nach dem Pauliprinzip kann sich dann in jedem Quantenzustand nur ein Elektron befinden.

### 2.1 Unerwartete Ströme

Betrachte zur Erklärung dieses Stromes einen Ring mit Radius $r$, in dem sich eine große Anzahl $N$ Leitungselektronen der Masse $m$ befindet. Nimm an, dass sich die Elektronen nur entlang des Ringes bewegen können (eindimensionale Bewegung).

**2.a)** Berechne die gemäß der Bohrschen Quantisierung möglichen Energieniveaus $E_n$ mit $n \in \mathbb{Z}$ der Elektronen unter dem Einfluss eines senkrecht zur Bewegung orientierten magnetischen Feldes der Flussdichte $B$. Zeige, dass für $B = 0$ die Energieniveaus $E_n$ und $E_{-n}$ verschieden sind. (4 Pkt.)

**2.b)** Bestimme den kleinsten von Null verschiedenen Wert für $\Delta B$, bei dem das Spektrum der Energieniveaus unverändert bleibt. (3 Pkt.)

**2.c)** Gib einen Ausdruck für die Stromstärke $I_n$ in dem Ring an, die von einem Elektron in dem $n$-ten Quantenniveau hervorgerufen wird. (2 Pkt.)

**2.d)** Leite einen Ausdruck für die bei sehr tiefen Temperaturen und gegebener Elektronenanzahl $N$ insgesamt durch den Ring fließende Stromstärke $I(B)$ als Funktion der magnetischen Flussdichte ab und skizziere qualitativ den Verlauf von $I(B)$. Die magnetische Flussdichte soll dabei in einem Bereich von einigen $\Delta B$ um $B = 0$ variieren. (8 Pkt.)

**2.e)** Berechne die maximale Stromstärke $I_\text{max}$, die durch diesen Effekt in einem Aluminiumring mit einem Radius von $r = 300\,\text{nm}$ und einer Elektronendichte entlang des Ringes von $\lambda = 2{,}0 \times 10^9\,\text{m}^{-1}$ hervorgerufen wird. Vergleiche den Wert für die maximale Stromstärke mit der Abschätzung
$$I_\text{max} = \frac{e}{2\pi} \frac{v_F}{r},$$
wobei $v_F$ die Fermigeschwindigkeit eines Elektrons ist, die sich ergibt, wenn man die kinetische Energie des Elektrons mit der Fermienergie $E_F = 11{,}64\,\text{eV}$ von Aluminium gleichsetzt. (3 Pkt.)

**2.f)** Schätze für den Ring aus dem letzten Aufgabenteil grob ab, ab welcher Temperatur der Effekt nicht mehr auftritt. (3 Pkt.)

### 2.2 Der Quanten-Hall-Effekt

Betrachte dazu ein System von Elektronen bei tiefen Temperaturen, die sich ausschließlich in einer Ebene bewegen können. Die Elektronen befinden sich in einem starken Magnetfeld der konstanten Flussdichte $B$, das senkrecht zu der Ebene orientiert ist. Wenn eine Spannung $U$ entlang einer Richtung in der Ebene angelegt wird, führt dies zu einem Stromfluss der Stromstärke $I_H$ in der Ebene, aber senkrecht zu der Spannung. Beim Quanten-Hall-Effekt kann $I_H$ nur die Werte
$$I_H = \frac{k}{R_K}\,U, \quad k \in \mathbb{N}$$
annehmen. Die Größe $R_K$ wird Klitzing-Konstante genannt.

**2.g)** Die Klitzing-Konstante $R_K$ ist eine aus fundamentalen Naturkonstanten zusammengesetzte Größe. Bestimme einen Ausdruck für $R_K$, in dem nur die Planck-Konstante $h$, die Elementarladung $e$ und die Lichtgeschwindigkeit $c$ vorkommen. Mögliche numerische Faktoren können dabei zu 1 gesetzt werden. (3 Pkt.)

**2.h)** Unter dem Einfluss des Magnetfeldes bewegen sich die Elektronen in der Ebene auf Kreisbahnen, den so genannten Zyklotronorbits. Verwende die Bohrsche Quantisierungsbedingung und bestimme die Radien $r_n$ der quantisierten Zyklotronorbits sowie deren Energieniveaus $E_n$. (3 Pkt.)

**2.i)** Zeige ohne Berücksichtigung von Quanteneffekten, dass die Zyklotronorbits der Elektronen unter dem Einfluss des elektrischen und magnetischen Feldes eine Driftbewegung senkrecht zum elektrischen und magnetischen Feld mit einer Driftgeschwindigkeit des Betrages
$$v_D = \frac{E}{B}$$
ausführen. (5 Pkt.)

Im Folgenden soll die gezeigte Situation untersucht werden: Die Elektronen bewegen sich in einem Kreisring mit innerem Radius $R_1$ und äußerem Radius $R_2$ mit $R_2 - R_1 \ll R_1$. Zwischen innerem und äußerem Radius ist eine Spannung $U$ angelegt. Nimm an, dass die Spannung zu einem radialen elektrischen Feld mit konstanter Feldstärke $E$ in dem Kreisring führt. Senkrecht zu dem Kreisring verläuft ein magnetisches Feld der konstanten Flussdichte $B$. Die Elektronen bewegen sich aufgrund des Magnetfeldes auf quantisierten Zyklotronorbits, deren Radius als sehr viel kleiner als der Abstand $R_2 - R_1$ angenommen werden kann.

Die Zyklotronorbits können nun selbst als Teilchen der Ladung $-e$ (Elektronenladung) und Masse $m$ (Elektronenmasse) aufgefasst werden. Aufgrund des Drifts in den Feldern bewegen sie sich entlang des Kreisringes auf so genannten Driftorbits. Auch diese Orbits lassen sich quantisieren.

**2.j)** Nutze die Bohrsche Quantisierungsbedingung und zeige, dass für sehr schwache elektrische Felder die zulässigen Radien $R_\ell$ mit $\ell \in \mathbb{N}$ der Driftorbits gegeben sind durch
$$R_\ell = \sqrt{\frac{\ell\,h}{e\,B}}.$$
(2 Pkt.)

**2.k)** Nimm an, dass die Elektronen nur das niedrigste, von Null verschiedene Energieniveau der Zyklotronorbits besetzen und dass alle in dem Kreisring möglichen Driftorbits gefüllt sind. Auf jedem Driftorbit befindet sich dann genau ein Elektron. Bestimme die Stromstärke $I_H$ des entlang des Kreisringes fließenden Stromes als Funktion der Spannung $U$. Vernachlässige dabei die Bewegung der Elektronen in Richtung des elektrischen Feldes. Bestimme daraus die Klitzing-Konstante $R_K$ und vergleiche dein Ergebnis mit dem ersten Aufgabenteil. (4 Pkt.)


<!--fig:start-->
![[_attachments/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web_p9_f4.png]]
*Schizzo anello con orbite ciclotroni e drift*
<!--fig:end-->
<!--fig:start-->
![[_attachments/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web_p12_f5.png]]
*Andamento corrente I vs flusso magnetico B*
<!--fig:end-->

**Topic:** [[Modern-Quantum Physics]], [[Magnetism]], [[Electromagnetism]]
**Metodi:** [[Bohr Model & Quantization (metodo)|Bohr Model & Quantization]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Dimensional Analysis (metodo)|Dimensional Analysis]], [[Conservation Laws (metodo)|Conservation Laws]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.7

## Problema 3


**Experimentelle Aufgabe – Nichts als Luft**

**Aufgabe 3 – Experimentelle Aufgabe: Nichts als Luft** (20+20 Pkt.)

Für ein ideales Gas stellt die allgemeine Gasgleichung
$$p\,V = n\,R\,T$$
einen Zusammenhang zwischen dem Druck $p$, dem Volumen $V$, der Stoffmenge $n$ und der Temperatur $T$ des Gases her. Die Größe $R \approx 8{,}31\,\text{J K}^{-1}\text{mol}^{-1}$ bezeichnet dabei die universelle Gaskonstante. Luft kann in guter Näherung als ideales Gas betrachtet werden. In dieser Aufgabe sollst du zwei Experimente mit Luft durchführen und so den thermischen Volumenausdehnungskoeffizienten von Luft sowie den Luftdruck bestimmen.

Die Experimente sind als Hausexperimente gedacht. Neben Luft kannst du folgende Materialien verwenden: Thermometer, verschiedene Gefäße, Schläuche, Stopfenmaterial zum Verschließen der Schläuche, Lineal, Zollstock bzw. Gliedermaßstab, Klebeband, warmes und kaltes Wasser sowie andere, haushaltstypische Gegenstände.

**Allgemeine Hinweise:**
- Führe alle Versuche so durch, dass die Ergebnisse so genau wie möglich sind. Beachte, dass die Ergebnisse in der Regel genauer werden, wenn du deine Ergebnisse aus Messreihen anstatt von Einzelmessungen bestimmst.
- Beschreibe und dokumentiere dein Vorgehen so ausführlich, dass jeder Schritt gut nachvollziehbar ist. Skizziere insbesondere deine Versuchsaufbauten.
- Schätze außerdem die Fehler aller Ergebnisse sinnvoll ab.

### 3.1 Volumenausdehnung

Wird ein Gas erwärmt, so dehnt es sich aus. Für Änderungen $\Delta T$ der Temperatur, die klein gegen die Ausgangstemperatur $T$ sind, ist die Änderung $\Delta V$ des Gasvolumens bei konstantem Druck ungefähr proportional zu $\Delta T$ und zum Gasvolumen $V$ bei der Temperatur $T$. Es gilt also:
$$\Delta V \approx \gamma\,V\,\Delta T.$$
Die Größe $\gamma$ ist der thermische Volumenausdehnungskoeffizient, den du für diese Aufgabe im Bereich von $\pm 20\,°\text{C}$ um die Zimmertemperatur als konstant annehmen kannst.

**3.a)** Bestimme experimentell den thermischen Volumenausdehnungskoeffizienten von Luft bei Zimmertemperatur. Leite einen Ausdruck für den theoretisch bei einem idealen Gas zu erwartenden Wert ab und vergleiche ihn mit deinem Ergebnis. (20 Pkt.)

### 3.2 Luftdruck

**3.b)** Bestimme experimentell den Luftdruck und vergleiche deinen Wert mit dem aktuellen Luftdruck am Versuchsort. Letzteren kannst du entweder im Internet recherchieren oder mit Hilfe eines weiteren Luftdruckmessers bestimmen. (20 Pkt.)

Du kannst für die Schwerebeschleunigung auf der Erde den Wert $g = 9{,}81\,\text{m s}^{-2}$ und für die Dichte von Wasser $\rho = 1000\,\text{kg m}^{-3}$ verwenden.


<!--fig:start-->
![[_attachments/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web_p18_f6.png]]
*Apparato misura espansione volume gas*
<!--fig:end-->
<!--fig:start-->
![[_attachments/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web_p19_f7.png]]
*Grafico volume V vs temperatura T*
<!--fig:end-->
<!--fig:start-->
![[_attachments/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web_p21_f8.png]]
*Schizzo tubo parzialmente riempito d'acqua*
<!--fig:end-->
<!--fig:start-->
![[_attachments/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web_p22_f9.png]]
*Apparato misura variazione volume vs pressione*
<!--fig:end-->
<!--fig:start-->
![[_attachments/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web/49_IPhO_2018_2Rd_Aufgaben_Loesungen_web_p23_f10.png]]
*Grafico variazione dz vs variazione dh*
<!--fig:end-->

**Topic:** [[Thermodynamics]], [[Fluid Mechanics]]
**Metodi:** [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Hydrostatic Equilibrium (metodo)|Hydrostatic Equilibrium]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.17
