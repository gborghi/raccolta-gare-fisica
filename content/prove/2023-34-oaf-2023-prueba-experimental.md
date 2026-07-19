---
title: Spagna 2023
tipo: prova
tags:
  - kg/prova
  - anno/2023
  - paese/Spagna
  - comp/Spagna
  - cluster/Fisica Moderna
---
<div class="atom-reader" data-prova="2023-34-oaf-2023-prueba-experimental"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2023 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Fisica Moderna,object/photon,object/electron,object/pipe-tube"></span>

<div class="qlang-switch" data-default="es"></div>



**Problema experimental. Efecto fotoeléctrico**

Si bien Albert Einstein es principalmente conocido por su Teoría de la relatividad, recibió el premio Nobel en 1921 por la explicación del efecto fotoeléctrico, por el cual la luz es capaz de arrancar electrones de la superficie de un metal.

**Modelo teórico.**
La originalidad de la teoría formulada por Einstein en 1905 consistió en suponer que, cuando interacciona con la materia, la luz puede considerarse como un conjunto de partículas, llamadas fotones, cada una de las cuales tiene una energía $E = h \cdot f$, donde $f$ es la frecuencia de la luz y $h$ la constante de Planck, una constante universal. Cuando se ilumina la superficie de un metal, un fotón interacciona con un electrón del metal, le cede toda su energía, y si esta es suficiente, lo arranca del átomo. Si no tiene energía suficiente, no puede arrancar el electrón, por mucho que se aumente la intensidad de la luz (es decir, el número de fotones).

Si la energía del fotón incidente es mayor que la necesaria para arrancar el electrón, el resto de energía le proporciona energía cinética, de modo que la máxima energía con la que sale el electrón del metal viene dada por

$$(E_c)_{\max} = \tfrac{1}{2}m_e v_{\max}^2 = hf - W_o \quad (1)$$

donde $W_o$ es la energía necesaria para arrancar el electrón de la superficie del metal. Por ello se le denomina función trabajo (o trabajo de extracción) y depende de las características del metal.

El efecto fotoeléctrico sólo tiene lugar si la frecuencia del fotón supera a la correspondiente a la frecuencia umbral, $f_o$, de modo que $W_o = h f_o$, por lo que podemos reescribir (1) en la forma

$$(E_c)_{\max} = h(f - f_o) \quad (2)$$

**Montaje experimental.**
En la figura se muestra un esquema del dispositivo empleado para estudiar el efecto fotoeléctrico. La placa metálica sobre la que incide la luz se encuentra dentro de un tubo en el que se ha hecho el vacío, en uno de sus extremos. En el otro se coloca otra placa metálica. Ambas se conectan eléctricamente a través de un amperímetro, que permite medir la intensidad de corriente en el circuito, y una fuente de tensión (o diferencia de potencial) variable, de valor $\Delta V$. Los electrones producidos por efecto fotoeléctrico salen de la placa metálica con una energía cinética máxima dada por (2) y pueden llegar a la placa del otro extremo cerrando el circuito. Variando la diferencia de potencial $\Delta V$ se pueden frenar los electrones, impidiendo que lleguen a la placa, y por tanto haciendo cero la intensidad. El valor más pequeño de $\Delta V$ para el cual la intensidad del amperímetro es cero se denomina potencial de frenado, $V_f$, y corresponde a

$$V_f = \frac{h}{e}(f - f_o) \quad (3)$$

**Preguntas.**
En la siguiente tabla se recogen los valores del potencial de frenado $V_f$ cuando se ilumina el metal con luz de diferentes frecuencias:

| Color de la luz | $f$ ($\times 10^{14}$ Hz) | $V_f$ (V) |
|---|---|---|
| Amarillo | 5,20 | 0,49 |
| Verde | 5,49 | 0,68 |
| Azul | 6,88 | 1,24 |
| Violeta | 7,41 | 1,41 |
| Ultravioleta | 8,22 | 1,76 |
| Ultravioleta | 8,98 | 2,12 |

a) Representa gráficamente en el papel milimetrado los puntos $(x, y) = (f, V_f)$.

b) Determina el valor de la pendiente $p$ de la recta que mejor se ajusta a estos puntos.

c) A partir de la pendiente $p$ y de la expresión (3) deduce el valor de la constante de Planck, $h$.

d) Haz una estimación razonada de la incertidumbre $\Delta p$ de la pendiente obtenida en el apartado b).

e) Teniendo en cuenta lo anterior, haz una estimación de la incertidumbre $\Delta h$ en el valor de la constante de Planck que has obtenido en c).

f) Determina el valor de la frecuencia umbral, $f_o$, y de la función trabajo, $W_o$.

**Dato:** Carga del electrón, $e = 1{,}602 \times 10^{-19}$ C.

<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA EXPERIMENTAL/2023 34 OAF 2023 PRUEBA EXPERIMENTAL_p1_f1.png]]
*Photoelectric effect apparatus schematic*
<!--fig:end-->

**Topic:** [[Modern-Quantum Physics]], [[Electrostatics]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Photon (object)|Photon]], [[Electron (object)|Electron]], [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/19TI2bj4vGfqUByefo5FODGICK_ZEOy7m/view)


<div class="qlang-split" data-lang="it"></div>

**Problema experimental. Fatto fotoelettrico**

Sebbene Albert Einstein sia principalmente conosciuto per la sua teoria della relatività, ha ricevuto il premio Nobel nel 1921 per l'esposizione dell'effetto fotoelettrico, per il quale la luce è in grado di strappare elettroni dalla superficie di un metallo.

**Modello teorico.**
L'originalità della teoria formulata da Einstein nel 1905 consisteva nel supporre che, quando interagisce con la materia, la luce possa essere considerata come un insieme di particelle, chiamate fotoni, ognuna delle quali ha un'energia $E = h \cdot f$, dove $f$ è la frequenza della luce e $h$ la costante di Planck, una costante universale. Quando illumina la superficie di un metallo, un fotone interagisce con un elettrone del metallo, gli dà tutta la sua energia, e se questa è sufficiente, lo strappa dall'atomo. Se non ha abbastanza energia, non può avviare l'elettrone, per quanto l'intensità della luce (cioè il numero di fotoni) aumenta.

Se l'energia del fotone incidente è superiore a quella necessaria per avviare l'elettrone, il resto dell'energia fornisce energia cinetica, così che l'energia massima con cui l'elettrone esce dal metallo viene data da

$$(E_c)_{\max} = \tfrac{1}{2}m_e v_{\max}^2 = hf - W_o \quad (1)$$

dove $W_o$ è l'energia necessaria per far partire l'elettrone dalla superficie del metallo. Per questo è chiamata funzione di lavoro (o lavoro di estrazione) e dipende dalle caratteristiche del metallo.

L'effetto fotoelettrico si verifica solo se la frequenza del fotone supera quella corrispondente alla frequenza soglia, $f_o$, in modo che $W_o = h f_o$, quindi possiamo riscrivere (1) in forma

$$(E_c)_{\max} = h(f - f_o) \quad (2)$$

**Montaggio sperimentale.**
La figura mostra un schema del dispositivo utilizzato per studiare l'effetto fotoelettrico. La placca metallica su cui incide la luce si trova all'interno di un tubo dove è stata fatta la vacuità, in una delle sue estremità. L'altro è un'altra targa metallica. Entrambi sono collegati elettricamente attraverso un amperimetro, che permette di misurare l'intensità di corrente nel circuito, e una fonte di tensione (o differenza di potenziale) variabile, di valore $\Delta V$. Gli elettroni prodotti dall'effetto fotoelettrico usciranno dalla scheda metallica con un'energia cinetica massima data da (2) e possono raggiungere la scheda dell'altra estremità chiudendo il circuito. Variando la differenza di potenziale $\Delta V$ si possono frenare gli elettroni, impedendo loro di raggiungere la placca, e quindi rendendo zero l'intensità. Il valore più piccolo di $\Delta V$ per il quale l'intensità dell'ampiecatore è zero è denominato potenziale di frenata, $V_f$, e corrisponde a

$$V_f = \frac{h}{e}(f - f_o) \quad (3)$$

**Domande.**
La tabella seguente rileva i valori del potenziale di frenata $V_f$ quando il metallo è illuminato con luci di diverse frequenze:

| Color de la luz | $f$ ($\times 10^{14}$ Hz) | $V_f$ (V) |
|---|---|---|
# Giallo # 5,20 # 0,49
# Verde 5,49 # 0,68
 Blu  6,88  1,24 
♬ Viola ♬ 7,41 ♬ 1,41 ♬
# Ultravioletto # 8,22 # 1,76
# Ultravioletto # 8,98 # 2,12

a) Rappresenta graficamente i punti $(x, y) = (f, V_f)$ su carta millimetrica.

b) Determina il valore della pendenza $p$ della retta che meglio si adatta a questi punti.

c) Dal pendente $p$ e dall'espressione (3) deduce il valore della costante di Planck, $h$.

d) Fare una ragionevole stima dell'incertezza $\Delta p$ della pendenza ottenuta in (b).

e) Considerando quanto precede, si deve calcolare l'incertezza $\Delta h$ sul valore della costante di Planck ottenuta in c).

f) Determina il valore della frequenza soglia, $f_o$, e della funzione di lavoro, $W_o$.

**Data:** Carga dell'elettrone, $e = 1{,}602 \times 10^{-19}$ C.

<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA EXPERIMENTAL/2023 34 OAF 2023 PRUEBA EXPERIMENTAL_p1_f1.png]]
*Apparatori di effetto fotoelettrico schematico*
<!--fig:end-->

**Topic:** [[Modern-Quantum Physics]], [[Electrostatics]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Photon (object)|Photon]], [[Electron (object)|Electron]], [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/19TI2bj4vGfqUByefo5FODGICK_ZEOy7m/view)

<div class="qlang-split" data-lang="en"></div>

**Problema experimental. Efecto fotoeléctrico**

Although Albert Einstein is primarily known for his Theory of Relativity, he received the Nobel Prize in 1921 for his explanation of the photoelectric effect, by which light is capable of plucking electrons from the surface of a metal.

**Modelo teórico.**
The originality of Einstein's 1905 theory was to assume that, when it interacts with matter, light can be considered as a set of particles, called photons, each of which has an energy of $E = h \cdot f$, where $f$ is the frequency of light and $h$ the Planck constant, a universal constant. When the surface of a metal is illuminated, a photon interacts with an electron in the metal, gives it all its energy, and if that's enough, it pulls it out of the atom. If it does not have enough energy, it cannot start the electron, no matter how much the intensity of the light increases (i.e. the number of photons).

If the incident photon energy is greater than the energy needed to start the electron, the rest of the energy provides it with kinetic energy, so the maximum energy with which the electron exits the metal is given by

$$(E_c)_{\max} = \tfrac{1}{2}m_e v_{\max}^2 = hf - W_o \quad (1)$$

where $W_o$ is the energy required to start the electron off the metal surface. This is why it is called a work function (or extraction work) and depends on the characteristics of the metal.

The photoelectric effect only occurs if the photon frequency exceeds the threshold frequency, $f_o$, so $W_o = h f_o$, so we can rewrite (1) as

$$(E_c)_{\max} = h(f - f_o) \quad (2)$$

**Montaje experimental.**
The figure shows a diagram of the device used to study the photoelectric effect. The metal plate on which the light hits is inside a tube in which the vacuum has been made, at one of its ends. The other one is a metal plate. Both are electrically connected via an ampere, which allows the current intensity in the circuit to be measured, and a variable voltage (or potential difference) source, with a value of $\Delta V$. The electrons produced by the photoelectric effect exit the metal plate with a maximum kinetic energy given by (2) and can reach the plate at the other end by closing the circuit. By varying the potential difference $\Delta V$ electrons can be held back, preventing them from reaching the plate, and thus making the intensity zero. The smallest $\Delta V$ value for which the amperage intensity is zero is called braking potential, $V_f$, and corresponds to

$$V_f = \frac{h}{e}(f - f_o) \quad (3)$$

**Preguntas.**
The following table shows the braking potential values $V_f$ when the metal is illuminated with different frequencies:

| Color de la luz | $f$ ($\times 10^{14}$ Hz) | $V_f$ (V) |
|---|---|---|
♪ Yellow ♪ 5.20 ♪ 0.49 ♪
♪ Green is 5.49 ♪ 0.68 ♪
♪ Blue ♪ 6.88 1.24 ♪ and I'm going to be a big fan of the show ♪
♪ And the whole world is going to be so happy ♪
♪ And then I'm going to be a little bit more excited ♪
You know, I'm just going to be a little bit more excited.

(a) Graphically represent the $(x, y) = (f, V_f)$ points on millimeter paper.

(b) Determine the value of the slope $p$ of the straight line that best fits these points.

(c) From the slope $p$ and the expression (3) deduces the value of the Planck constant, $h$.

(d) Make a reasoned estimate of the slope uncertainty $\Delta p$ obtained in paragraph (b).

(e) In view of the above, make an estimate of the uncertainty $\Delta h$ in the value of the Planck constant you have obtained in c).

(f) Determines the value of the threshold frequency, $f_o$, and the work function, $W_o$.

**Dato:** Carga del electrón, $e = 1{,}602 \times 10^{-19}$ C.

<!--fig:start-->
![[_attachments/2023 34 OAF 2023 PRUEBA EXPERIMENTAL/2023 34 OAF 2023 PRUEBA EXPERIMENTAL_p1_f1.png]]
*Photoelectric effect apparatus schematic*
<!--fig:end-->

**Topic:** [[Modern-Quantum Physics]], [[Electrostatics]]
**Metodi:** [[Photon Energy Relation (metodo)|Photon Energy Relation]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Photon (object)|Photon]], [[Electron (object)|Electron]], [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/19TI2bj4vGfqUByefo5FODGICK_ZEOy7m/view)
