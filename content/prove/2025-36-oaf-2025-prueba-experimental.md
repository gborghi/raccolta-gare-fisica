---
title: Spagna 2025
tipo: prova
tags:
  - kg/prova
  - anno/2025
  - paese/Spagna
  - comp/Spagna
  - cluster/Onde e Oscillazioni
---
<div class="atom-reader" data-prova="2025-36-oaf-2025-prueba-experimental"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2025 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Onde e Oscillazioni,object/photon,object/electron,object/battery,object/resistor"></span>

<div class="qlang-switch" data-default="es"></div>



**Problema experimental. La constante de Planck**

El año 2025 ha sido declarado por la UNESCO como el Año Internacional de la Ciencia y la Tecnología Cuánticas para conmemorar el centenario de la mecánica cuántica y difundir sus avances y aplicaciones a la sociedad. No obstante, los orígenes de la teoría cuántica se remontan a inicios del siglo XX, cuando Max Planck propuso que la radiación electromagnética se intercambia en forma de cuantos de energía, cuyo valor es proporcional a la frecuencia de la radiación. Fue Albert Einstein quien, en 1905, demostró la existencia de los cuantos de luz, llamados fotones, cuya energía está dada por la ecuación $E = hf$, donde $f$ es la frecuencia de la onda electromagnética y $h$ la constante de Planck, una constante física universal. La relación entre la frecuencia y la longitud de onda de la radiación electromagnética está dada por $c = \lambda f$, donde $c$ es la velocidad de la luz.

En este problema experimental, se propone determinar el valor de la constante de Planck $h$ mediante un dispositivo optoelectrónico llamado LED (Light-Emitting Diode).

**Modelo teórico.**

Un LED es un dispositivo que se forma uniendo una región tipo P y una región tipo N de un semiconductor. Al aplicar una diferencia de potencial $V_0$ lo suficientemente grande entre sus terminales se consigue que electrones de la banda de conducción de la región N pasen a la banda de conducción de la región P, generando una corriente eléctrica $I$, cuyo valor depende exponencialmente de la diferencia de potencial $V$ entre P y N. Los electrones que pasan de la zona N pueden caer a localizaciones de la zona P, desexcitándose y emitiendo fotones de energía $E = hf$ en el proceso.

La diferencia de energía $E$ entre las bandas de conducción y valencia tiene un valor propio y característico de cada semiconductor, lo que da lugar a LEDs que emiten luz en diferentes colores. Se puede demostrar que entre $V_0$ y $E$ existe una relación dada por

$$E = eV_0 + C$$

donde $C$ depende de la temperatura y del dopado de las regiones N y P, aunque puede considerarse prácticamente constante. De esta manera, determinando $V_0$ para LEDs de diferentes colores, se puede establecer la relación entre $E$ y la frecuencia $f$, lo que permite calcular la constante de Planck.

**Montaje experimental.**

El LED está conectado a dos multímetros: uno para medir la corriente y otro para medir la diferencia de potencial a través de él. La pila proporciona una diferencia de potencial constante, pero, mediante un potenciómetro (una resistencia variable) conectado en paralelo con el LED, es posible ajustar $V$. Al medir $I$ para distintos valores de $V$, se puede trazar la curva característica $I(V)$ del dispositivo, lo que permitirá determinar $V_0$.

**Preguntas.**

En la siguiente tabla se recogen los valores de $V_0$ obtenidos para LEDs que utilizan diferentes materiales semiconductores:

| LED | $\lambda$ (nm) | $V_0$ (V) |
|---|---|---|
| Infrarrojo | 938 | 0,84 |
| Rojo extremo | 730 | 1,28 |
| Rojo | 632 | 1,55 |
| Amarillo | 593 | 1,70 |
| Verde | 535 | 1,91 |
| Azul | 464 | 2,30 |
| Violeta | 405 | 2,58 |

a) Representa gráficamente en el papel milimetrado los puntos $(x, y) = (f, V_0)$.

b) Determina el valor de la pendiente $p$ de la recta que mejor se ajusta a estos puntos.

c) A partir de la pendiente $p$ deduce el valor de la constante de Planck, $h$.

d) Haz una estimación razonada de la incertidumbre $\Delta p$ de la pendiente obtenida en el apartado b).

e) Teniendo en cuenta lo anterior, haz una estimación de la incertidumbre $\Delta h$ en el valor de la constante de Planck que has obtenido en c).

**Datos:** Carga del electrón, $e = 1{,}602 \times 10^{-19}$ C; velocidad de la luz en vacío, $c = 3 \times 10^{8}$ m/s.

<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA EXPERIMENTAL/2025 36 OAF 2025 PRUEBA EXPERIMENTAL_p1_f1.png]]
*Figure 1: LED P-N junction semiconductor diagram*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA EXPERIMENTAL/2025 36 OAF 2025 PRUEBA EXPERIMENTAL_p2_f2.png]]
*Figure 2: LED circuit with voltmeter and ammeter*
<!--fig:end-->

**Topic:** [[Modern-Quantum Physics]], [[Electrostatics]], [[Circuits]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Photon (object)|Photon]], [[Electron (object)|Electron]], [[Battery (object)|Battery]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1W342HHradFll13G2YSd5asEOdL5d9oxX/view)


<div class="qlang-split" data-lang="it"></div>

**Problema experimental. La costante di Planck**

L'anno 2025 è stato dichiarato dall'UNESCO come l'Anno internazionale della scienza e della tecnologia quantistica per commemorare il centenario della meccanica quantistica e diffondere i suoi progressi e le sue applicazioni alla società. Tuttavia, le origini della teoria quantistica risalgono all'inizio del XX secolo, quando Max Planck propose che la radiazione elettromagnetica si scambiasse sotto forma di quanti di energia, il cui valore è proporzionale alla frequenza della radiazione. Fu Albert Einstein che nel 1905 dimostrò l'esistenza dei quanti di luce, chiamati fotoni, la cui energia è data dall'equazione $E = hf$, dove $f$ è la frequenza dell'onda elettromagnetica e $h$ la costante di Planck, una costante fisica universale. Il rapporto fra frequenza e lunghezza d'onda della radiazione elettromagnetica è dato da $c = \lambda f$, dove $c$ è la velocità della luce.

In questo problema sperimentale si propone di determinare il valore della costante di Planck $h$ mediante un dispositivo optoelettronica chiamato LED (Light-Emitting Diode).

**Modello teorico.**

Un LED è un dispositivo che si forma unendo una regione tipo P e una regione tipo N di un semiconduttore. Applicando una differenza di potenziale $V_0$ sufficientemente grande tra i loro terminali si ottiene che elettroni della banda di conduzione della regione N passino alla banda di conduzione della regione P, generando un corrente elettrica $I$, il cui valore dipende esponenzialmente dalla differenza di potenziale $V$ tra P e N. Gli elettroni che passano dalla zona N possono cadere a località della zona P, secesivamente e emettendo fotoni di energia $E = hf$ nel processo.

La differenza di energia $E$ tra le bande di conduzione e valenza ha un valore proprio e caratteristico di ciascun semiconduttore, che dà luogo a LED che emettono luce in diversi colori. Si può dimostrare che esiste un rapporto tra $V_0$ e $E$ dato da

$$E = eV_0 + C$$

donde $C$ depende de la temperatura y del dopado de las regiones N y P, aunque puede considerarse prácticamente constante. In questo modo, determinando $V_0$ per LED di diversi colori, si può stabilire il rapporto tra $E$ e la frequenza $f$, consentendo di calcolare la costante di Planck.

**Montaggio sperimentale.**

Il LED è collegato a due multimetro: uno per misurare la corrente e l'altro per misurare la differenza di potenziale attraverso di esso. La pila fornisce una differenza di potenziale costante, ma, mediante un potentiometro (una resistenza variabile) collegato in parallelo con il LED, è possibile regolare $V$. Misurando $I$ per diversi valori di $V$, si può tracciare la curva caratteristica $I(V)$ del dispositivo, consentendo di determinare $V_0$.

**Domande.**

La tabella seguente rileva i valori di $V_0$ ottenuti per LED che utilizzano diversi materiali semiconduttori:

| LED | $\lambda$ (nm) | $V_0$ (V) |
|---|---|---|
➡️Il colore dell'infrarosso è 938 ➡️
# # Il rosso estremo # # 730 # 1,28 #
# Rossa # 632 # 1,55
# Giallo # 593 # 1,70 #
# Il verde # 535 # 1,91 #
# Il blu # 464 # 2,30
# Viola # 405 # 2,58 #

a) Rappresenta graficamente i punti $(x, y) = (f, V_0)$ su carta millimetrica.

b) Determina il valore della pendenza $p$ della retta che meglio si adatta a questi punti.

c) Dal pendente $p$ deduce il valore della costante di Planck, $h$.

d) Fare una ragionevole stima dell'incertezza $\Delta p$ della pendenza ottenuta in (b).

e) Considerando quanto precede, si deve calcolare l'incertezza $\Delta h$ sul valore della costante di Planck ottenuto in c).

**Dati: ** Carico dell'elettrone, $e = 1{,}602 \times 10^{-19}$ C; velocità della luce in vuoto, $c = 3 \times 10^{8}$ m/s.

<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA EXPERIMENTAL/2025 36 OAF 2025 PRUEBA EXPERIMENTAL_p1_f1.png]]
*Figura 1: diagramma semiconduttore a connessione P-N LED*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA EXPERIMENTAL/2025 36 OAF 2025 PRUEBA EXPERIMENTAL_p2_f2.png]]
*Figure 2: circuito LED con voltmeter e ammeter*
<!--fig:end-->

**Topic:** [[Modern-Quantum Physics]], [[Electrostatics]], [[Circuits]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Photon (object)|Photon]], [[Electron (object)|Electron]], [[Battery (object)|Battery]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1W342HHradFll13G2YSd5asEOdL5d9oxX/view)

<div class="qlang-split" data-lang="en"></div>

**Problema experimental. The Planck constant**

The year 2025 has been declared by UNESCO as the International Year of Quantum Science and Technology to commemorate the centenary of quantum mechanics and to disseminate its advances and applications to society. However, the origins of quantum theory go back to the early 20th century, when Max Planck proposed that electromagnetic radiation be exchanged in the form of quantum energies, the value of which is proportional to the frequency of radiation. Fue Albert Einstein quien, en 1905, demostró la existencia de los cuantos de luz, llamados fotones, cuya energía está dada por la ecuación $E = hf$, donde $f$ es la frecuencia de la onda electromagnética y $h$ la constante de Planck, una constante física universal. The frequency-wavelength ratio of electromagnetic radiation is given by $c = \lambda f$, where $c$ is the speed of light.

In this experimental problem, the value of the Planck constant $h$ is proposed to be determined by an optoelectronic device called a LED (Light-Emitting Diode).

**Modelo teórico.**

An LED is a device that is formed by connecting a P-type region and an N-type region of a semiconductor. By applying a potential difference $V_0$ sufficiently large between their terminals, electrons from the conduction band of region N are obtained to pass to the conduction band of region P, generating an electric current $I$, the value of which depends exponentially on the potential difference $V$ between P and N. Electrons passing through the N-zone can fall to locations in the P-zone, becoming desiccated and emitting photon energy $E = hf$ in the process.

The energy difference $E$ between the conduction bands and valence bands has a value of its own and characteristic of each semiconductor, resulting in LEDs emitting light in different colors. It can be shown that a relationship between $V_0$ and $E$ exists given by

$$E = eV_0 + C$$

where $C$ depends on the temperature and doping of regions N and P, although it can be considered practically constant. Thus, by determining $V_0$ for different coloured LEDs, the ratio between $E$ and the frequency $f$ can be established, allowing the Planck constant to be calculated.

**Montaje experimental.**

The LED is connected to two multimeters: one to measure the current and another to measure the potential difference through it. The battery provides a constant potential difference, but by means of a potentiometer (a variable resistance) connected in parallel with the LED, it is possible to adjust $V$. By measuring $I$ for different values of $V$, the device characteristic curve $I(V)$ can be plotted, which will allow the determination of $V_0$.

**Preguntas.**

The following table summarizes the values of $V_0$ obtained for LEDs using different semiconductor materials:

| LED | $\lambda$ (nm) | $V_0$ (V) |
|---|---|---|
♪ And the whole world is going to be so happy ♪
♪ Red is the extreme red ♪
♪ Red ♪ 632 ♪ 1.55 ♪
♪ Yellow ♪ 593 ♪ 1.70 ♪
♪ Green 535 ♪ 1.91 ♪
♪ Blue ♪ 464 ♪ 2.30
♪ And the whole world is going to be so happy ♪

(a) Graphically represent the $(x, y) = (f, V_0)$ points on millimeter paper.

(b) Determine the value of the slope $p$ of the straight line that best fits these points.

(c) From the slope $p$, the value of the Planck constant, $h$ is deducted.

(d) Make a reasoned estimate of the slope uncertainty $\Delta p$ obtained in paragraph (b).

(e) In view of the above, make an estimate of the uncertainty $\Delta h$ in the value of the Planck constant you have obtained in c).

**Datos:** Carga del electrón, $e = 1{,}602 \times 10^{-19}$ C; velocidad de la luz en vacío, $c = 3 \times 10^{8}$ m/s.

<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA EXPERIMENTAL/2025 36 OAF 2025 PRUEBA EXPERIMENTAL_p1_f1.png]]
*Figure 1: LED P-N junction semiconductor diagram*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2025 36 OAF 2025 PRUEBA EXPERIMENTAL/2025 36 OAF 2025 PRUEBA EXPERIMENTAL_p2_f2.png]]
*Figure 2: LED circuit with voltmeter and ammeter*
<!--fig:end-->

**Topic:** [[Modern-Quantum Physics]], [[Electrostatics]], [[Circuits]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Photon (object)|Photon]], [[Electron (object)|Electron]], [[Battery (object)|Battery]], [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1W342HHradFll13G2YSd5asEOdL5d9oxX/view)
