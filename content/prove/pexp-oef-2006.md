---
title: Spagna 2006
tipo: prova
tags:
  - kg/prova
  - anno/2006
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="pexp-oef-2006"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2006 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/coil,object/magnet,object/battery,object/resistor,object/pulley,object/wire"></span>

<div class="qlang-switch" data-default="es"></div>



**Prueba experimental — Características de un pequeño motor.**

**Objetivo y fundamento.**

Se trata de determinar algunas características de un pequeño motor de corriente continua, del tipo de los utilizados en juguetería.

Un motor de corriente continua es, básicamente, una bobina de hilo conductor arrollada en torno a un eje, que interacciona con un campo magnético producido por un imán u otra bobina auxiliar. Mediante un generador (por ej., una batería), se hace pasar una corriente eléctrica continua por la bobina. Su interacción con el campo magnético consiste en un sistema de fuerzas sobre el eje y, por tanto, sobre lo que esté mecánicamente unido a él (la carga del motor), haciéndolo girar.

Desde el punto de vista energético, el motor recibe energía eléctrica mediante la corriente que se hace pasar por la bobina, y realiza trabajo mecánico mediante la rotación de su eje. Sin embargo, alguna energía se disipa por efecto Joule en el hilo con el que está construida la bobina.

Mientras el fundamento teórico es simple, la realización práctica está sujeta a una gran cantidad de condicionantes, entre ellos la geometría del conjunto, para optimizar sus características, especialmente su rendimiento energético.

**Materiales suministrados.**

- Motor de corriente continua.
- Polea para el motor (se inserta a presión en el eje del motor). Su diámetro es de $6{,}0 \pm 0{,}1$ mm.
- Porta pilas para las dos pilas. Brida para sujetar el motor.
- 3 resistencias de 15 $\Omega$.
- 4 pinzas para las sondas de los multímetros.
- Listón largo de madera.
- Escuadra metálica para sujetar el listón.
- Sargento para sujetar la escuadra a la mesa.
- Hilo de 0,1 mm de diámetro.
- Arandelas (se usan como pesas). Las cuatro arandelas tienen una masa de $11{,}6$ g, y la pequeña, de $5{,}9$ g.
- Cinta métrica.
- Cronómetro.
- 2 multímetros.
- Clip.
- 2 pilas de 1,5 V.
- 3 pinzas metálicas.
- Tijeras.

---

**Determinación de la resistencia interna, $R$, del motor.**

Si el motor no se deja girar se comporta como una resistencia, $R$, correspondiente al hilo que forma el bobinado. Puesto que el valor de $R$ es pequeño, la medida directa de esta resistencia con el polímetro puede dar un error apreciable. Por ello, es conveniente un procedimiento basado en tomar varias medidas de intensidad y voltaje en un circuito que incluye el motor.

**Modo de operación (Circuito II).**

El motor se alimenta con una batería, conectándolo en serie con un conductor de resistencia $R_{\text{ext}}$. Con distintos valores de $R_{\text{ext}}$, se obtienen distintas intensidades en el motor; para ello se utiliza, en cada caso, una combinación distinta (en serie o en paralelo) de 3 resistencias de 15 $\Omega$, para lo cual se enrollan sus terminales. Para cada valor de $R_{\text{ext}}$ se miden la intensidad y la tensión en el motor, sujetando el eje del motor para impedir que gire.

**Medidas.**

1. Haga una tabla de valores $R_{\text{ext}}$, $V$ e $I$ correspondiente a las medidas realizadas en el circuito anterior. Puesto que el motor bloqueado se comporta como una resistencia, la ley de Ohm permite calcular su valor, $R$.

2. Haga la representación gráfica $V$–$I$.

3. A partir de ella, calcule el valor de la resistencia $R$.

---

**Relación entre la fuerza contraelectromotriz $\varepsilon'$ y la velocidad angular $\omega$ del motor.**

Cuando gira un motor, además del efecto principal (la fuerza de interacción electromagnética), se tiene un efecto secundario inseparable del anterior: una bobina (muchas espiras acopladas) girando en un campo magnético produce una fuerza electromotriz (fem) inducida que, de acuerdo con la ley de Faraday-Lenz, se opone al paso de la corriente. Por esta razón, en los motores se habla de fuerza contraelectromotriz, que se designa con el símbolo $\varepsilon'$.

Según el esquema del Circuito III, la tensión $V$ entre los terminales del motor cumple:

$$V = \varepsilon' + IR$$

**Modo de operación.**

- Se define previamente la altura $h$ a la que el motor elevará la carga, y se anota este valor.
- Se cuelgan distintas pesas del hilo y, al cerrar el circuito, el motor gira, enrolla el hilo y levanta la pesa una altura $h$.

**Medidas.**

Combinando las pesas del modo apropiado se puede conseguir una serie de masas creciente $m$ (se puede ignorar la masa del clip).

4. Hacer una tabla con los valores de la masa empleados y, para cada uno de ellos, con las medidas obtenidas de:
   - (a) el tiempo que tarda en subir la altura $h$;
   - (b) la tensión $V$ en los terminales del motor;
   - (c) la intensidad $I$ que circula.

   Es conveniente medir separadamente (repitiendo la elevación) el tiempo, y la tensión e intensidad. Se sugiere tomar 5 medidas del tiempo para cada pesa. Para la intensidad y la tensión, 3 medidas son suficientes.

**Cálculos y gráficas.**

5. La tabla se ha de completar calculando, para cada una de las masas utilizadas, los correspondientes valores de:
   - la fuerza contraelectromotriz $\varepsilon'$,
   - la velocidad $v$ con que se levanta la pesa (que se supondrá constante durante cada ascenso),
   - el error $\Delta v$ en la velocidad,
   - la velocidad angular $\omega = 2v/d$ (donde $d = 6{,}0$ mm es el diámetro de la polea),
   - el error $\Delta\omega$ en la velocidad angular.

6. Haga la representación gráfica $\varepsilon'$–$\omega$. A partir de ella, determine la constante de proporcionalidad $k$ tal que $\varepsilon' = k\omega$, y calcule su error.

7. Calcule la potencia mecánica útil $P_{\text{mec}} = mgv$ y la potencia eléctrica total $P_{\text{elec}} = VI$ para cada masa. Determine el rendimiento energético $\eta = P_{\text{mec}}/P_{\text{elec}}$ en función de la masa y comente los resultados.

<!--fig:start-->
![[_attachments/Pexp-OEF-2006/Pexp-OEF-2006_p2_f1.png]]
*Circuito II: voltmeter, ammeter, Rext, motor*
<!--fig:end-->
<!--fig:start-->
![[_attachments/Pexp-OEF-2006/Pexp-OEF-2006_p4_f2.png]]
*Circuito III: generator, motor, R, ε'*
<!--fig:end-->

**Topic:** [[Circuits]], [[Electromagnetic Induction]], [[Conservation of Energy]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Coil (object)|Coil]], [[Magnet (object)|Magnet]], [[Battery (object)|Battery]], [[Resistor (object)|Resistor]], [[Pulley (object)|Pulley]], [[Wire (object)|Wire]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1ybFYGZE6K4MvkmFt8zWzRFT-RH4IRbSD/view)


<div class="qlang-split" data-lang="it"></div>

**Prova sperimentale — Caratteristiche di un piccolo motore.**

**Obiettivo e fondamento.**

Si tratta di determinare alcune caratteristiche di un piccolo motore a corrente continua, del tipo di quelli utilizzati nei giocattoli.

Un motore a corrente continua è, fondamentalmente, una bobina di filo conduttore avvolta attorno a un asse, che interagisce con un campo magnetico prodotto da un magnete o da un'altra bobina ausiliaria. Mediante un generatore (per es., una batteria), si fa passare una corrente elettrica continua attraverso la bobina. La sua interazione con il campo magnetico consiste in un sistema di forze sull'asse e, quindi, su ciò che è meccanicamente collegato ad esso (il carico del motore), facendolo ruotare.

Dal punto di vista energetico, il motore riceve energia elettrica mediante la corrente che si fa passare attraverso la bobina, e compie lavoro meccanico mediante la rotazione del suo asse. Tuttavia, una parte dell'energia si dissipa per effetto Joule nel filo con cui è costruita la bobina.

Mentre il fondamento teorico è semplice, la realizzazione pratica è soggetta a una grande quantità di vincoli, tra cui la geometria dell'insieme, per ottimizzare le sue caratteristiche, in particolare il suo rendimento energetico.

**Materiali forniti.**

- Motore a corrente continua.
- Puleggia per il motore (si inserisce a pressione sull'asse del motore). Il suo diametro è di $6{,}0 \pm 0{,}1$ mm.
- Portapile per le due pile. Fascetta per fissare il motore.
- 3 resistenze da 15 $\Omega$.
- 4 pinze per le sonde dei multimetri.
- Listello lungo di legno.
- Squadra metallica per fissare il listello.
- Morsetto per fissare la squadra al tavolo.
- Filo di 0,1 mm di diametro.
- Rondelle (si usano come pesi). Le quattro rondelle hanno una massa di $11{,}6$ g, e la piccola, di $5{,}9$ g.
- Metro a nastro.
- Cronometro.
- 2 multimetri.
- Graffetta.
- 2 pile da 1,5 V.
- 3 pinze metalliche.
- Forbici.

---

**Determinazione della resistenza interna, $R$, del motore.**

Se al motore non si lascia ruotare si comporta come una resistenza, $R$, corrispondente al filo che forma l'avvolgimento. Poiché il valore di $R$ è piccolo, la misura diretta di questa resistenza con il tester può dare un errore apprezzabile. Per questo, è conveniente un procedimento basato sull'effettuare diverse misure di intensità e tensione in un circuito che include il motore.

**Modalità operativa (Circuito II).**

Il motore si alimenta con una batteria, collegandolo in serie con un conduttore di resistenza $R_{\text{ext}}$. Con diversi valori di $R_{\text{ext}}$, si ottengono diverse intensità nel motore; a tal fine si utilizza, in ciascun caso, una combinazione diversa (in serie o in parallelo) di 3 resistenze da 15 $\Omega$, avvolgendone i terminali. Per ogni valore di $R_{\text{ext}}$ si misurano l'intensità e la tensione nel motore, tenendo fermo l'asse del motore per impedirgli di ruotare.

**Misure.**

1. Compila una tabella di valori $R_{\text{ext}}$, $V$ e $I$ corrispondente alle misure effettuate nel circuito precedente. Poiché il motore bloccato si comporta come una resistenza, la legge di Ohm permette di calcolarne il valore, $R$.

2. Realizza la rappresentazione grafica $V$–$I$.

3. A partire da essa, calcola il valore della resistenza $R$.

---

**Relazione tra la forza controelettromotrice $\varepsilon'$ e la velocità angolare $\omega$ del motore.**

Quando un motore ruota, oltre all'effetto principale (la forza di interazione elettromagnetica), si ha un effetto secondario inseparabile dal precedente: una bobina (molte spire accoppiate) che ruota in un campo magnetico produce una forza elettromotrice (fem) indotta che, secondo la legge di Faraday-Lenz, si oppone al passaggio della corrente. Per questo motivo, nei motori si parla di forza controelettromotrice, che si indica con il simbolo $\varepsilon'$.

Secondo lo schema del Circuito III, la tensione $V$ tra i terminali del motore soddisfa:

$$V = \varepsilon' + IR$$

**Modalità operativa.**

- Si definisce preliminarmente l'altezza $h$ a cui il motore solleverà il carico, e si annota questo valore.
- Si appendono diversi pesi al filo e, chiudendo il circuito, il motore ruota, avvolge il filo e solleva il peso di un'altezza $h$.

**Misure.**

Combinando i pesi in modo appropriato si può ottenere una serie di masse crescenti $m$ (si può ignorare la massa della graffetta).

4. Compila una tabella con i valori della massa impiegati e, per ciascuno di essi, con le misure ottenute di:
   - (a) il tempo impiegato a salire l'altezza $h$;
   - (b) la tensione $V$ ai terminali del motore;
   - (c) l'intensità $I$ che circola.

   È conveniente misurare separatamente (ripetendo il sollevamento) il tempo, e la tensione e l'intensità. Si suggerisce di prendere 5 misure del tempo per ciascun peso. Per l'intensità e la tensione, 3 misure sono sufficienti.

**Calcoli e grafici.**

5. La tabella va completata calcolando, per ciascuna delle masse utilizzate, i corrispondenti valori di:
   - la forza controelettromotrice $\varepsilon'$,
   - la velocità $v$ con cui si solleva il peso (che si supporrà costante durante ogni salita),
   - l'errore $\Delta v$ sulla velocità,
   - la velocità angolare $\omega = 2v/d$ (dove $d = 6{,}0$ mm è il diametro della puleggia),
   - l'errore $\Delta\omega$ sulla velocità angolare.

6. Realizza la rappresentazione grafica $\varepsilon'$–$\omega$. A partire da essa, determina la costante di proporzionalità $k$ tale che $\varepsilon' = k\omega$, e calcola il suo errore.

7. Calcola la potenza meccanica utile $P_{\text{mec}} = mgv$ e la potenza elettrica totale $P_{\text{elec}} = VI$ per ogni massa. Determina il rendimento energetico $\eta = P_{\text{mec}}/P_{\text{elec}}$ in funzione della massa e commenta i risultati.

<!--fig:start-->
![[_attachments/Pexp-OEF-2006/Pexp-OEF-2006_p2_f1.png]]
*Circuito II: voltmetro, amperometro, Rext, motore*
<!--fig:end-->
<!--fig:start-->
![[_attachments/Pexp-OEF-2006/Pexp-OEF-2006_p4_f2.png]]
*Circuito III: generatore, motore, R, ε'*
<!--fig:end-->

**Topic:** [[Circuits]], [[Electromagnetic Induction]], [[Conservation of Energy]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Coil (object)|Coil]], [[Magnet (object)|Magnet]], [[Battery (object)|Battery]], [[Resistor (object)|Resistor]], [[Pulley (object)|Pulley]], [[Wire (object)|Wire]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1ybFYGZE6K4MvkmFt8zWzRFT-RH4IRbSD/view)

<div class="qlang-split" data-lang="en"></div>

**Experimental test  Characteristics of a small engine.**

**Objetivo y fundamento.**

It is a question of determining some characteristics of a small DC motor, of the type used in toy trade.

A DC motor is basically a conductive wire coil rolled around an axis, which interacts with a magnetic field produced by a magnet or other auxiliary coil. A generator (e.g. battery) is used to transmit a continuous electric current through the coil. Its interaction with the magnetic field consists of a system of forces on the axis and, therefore, on what is mechanically attached to it (the motor's load), making it spin.

From an energy standpoint, the motor receives electrical energy by the current passed through the coil, and performs mechanical work by rotating its axis. However, some energy is dissipated by Joule effect on the thread with which the coil is constructed.

While the theoretical basis is simple, practical realization is subject to a large number of conditions, including the geometry of the set, to optimize its characteristics, especially its energy performance.

**Materiales suministrados.**

- It's a direct current engine.
- Motor pulley (pressurised on the motor axle). Its diameter is $6{,}0 \pm 0{,}1$ mm.
- Bring batteries for both batteries. Brake to hold the engine.
- 3 resistors of 15 $\Omega$.
- Four clamps for the multimeter probes.
- Long wooden bar.
- Metal squad to hold the bar.
- Sergeant to hold the squad to the table.
- A thread of 0.1 mm diameter.
- Cut them (used as weights). The four arandelas have a mass of $11{,}6$ g, and the smaller one, of $5{,}9$ g.
- It's a tape recorder.
- It's a timekeeper.
- Two millimeters.
- The clip.
- Two 1.5 V batteries.
- Three metallic tweezers.
- You scissors.

---

**Determination of the internal resistance, $R$, of the engine.**

If the engine is not allowed to turn it behaves as a resistance, $R$, corresponding to the wire forming the coil. Since the value of $R$ is small, the direct measurement of this resistance with the polymer can give an appreciable error. Therefore, a procedure based on taking several measurements of intensity and voltage in a circuit including the engine is appropriate.

**Modo de operación (Circuito II).**

The engine is powered by a battery, which is connected in series with a resistance driver $R_{\text{ext}}$. With different values of $R_{\text{ext}}$, different intensities are obtained in the engine; for this purpose, a different combination (in series or in parallel) of 3 resistors of 15 $\Omega$ is used in each case, for which their terminals are rolled. For each $R_{\text{ext}}$ value the engine intensity and voltage shall be measured by holding the engine shaft to prevent it from turning.

**Medidas.**

1. Make a table of values $R_{\text{ext}}$, $V$ and $I$ corresponding to the measurements made in the previous circuit. Since the locked motor behaves like a resistor, Ohm's law allows its value, $R$, to be calculated.

2. Haga la representación gráfica $V$–$I$.

3. From it, calculate the resistance $R$.

---

**Relation between the anti-electromagnetic force $\varepsilon'$ and the angular speed $\omega$ of the engine.**

When a motor rotates, in addition to the main effect (the electromagnetic interaction force), there is an inseparable side effect from the previous one: a coil (many spirals coupled) rotating in a magnetic field produces an induced electromotive force (fem) that, according to Faraday-Lenz law, opposes the current passage. For this reason, the motors speak of counter-electromotive force, designated by the symbol $\varepsilon'$.

According to the Circuit III scheme, the voltage $V$ between the engine terminals is:

$$V = \varepsilon' + IR$$

**Modo de operación.**

- The height $h$ to which the engine will lift the load is defined in advance and this value is noted.
- Different weights are hung from the thread and, when the circuit is closed, the motor turns, rolls the thread and lifts the weight to a height $h$.

**Medidas.**

Combining weights appropriately can result in a series of increasing masses $m$ (clip mass can be ignored).

4. Make a table with the values of the mass used and, for each of them, the measurements obtained from:
- (a) the time it takes to rise to the height $h$;
- (b) the $V$ voltage at the engine terminals;
- (c) the intensity $I$ circulating.

It is advisable to measure separately (repeating the elevation) the time, and the voltage and intensity. It is suggested to take 5 time measurements for each weigh. For intensity and tension, three measures are enough.

**Calculations and charts.**

5. The table shall be completed by calculating, for each of the masses used, the corresponding values of:
- the counter-electromagnetic force $\varepsilon'$,
- the speed $v$ at which the weight is lifted (which shall be assumed to be constant during each lift),
- the $\Delta v$ error in speed,
- angular velocity $\omega = 2v/d$ (where $d = 6{,}0$ mm is the diameter of the pole),
- the $\Delta\omega$ error at the angular velocity.

6. Haga la representación gráfica $\varepsilon'$–$\omega$. From this, determine the proportionality constant $k$ such as $\varepsilon' = k\omega$ and calculate its error.

7. Calculate the useful mechanical power $P_{\text{mec}} = mgv$ and the total electrical power $P_{\text{elec}} = VI$ for each mass. Determine the energy efficiency $\eta = P_{\text{mec}}/P_{\text{elec}}$ by mass and comment on the results.

<!--fig:start-->
![[_attachments/Pexp-OEF-2006/Pexp-OEF-2006_p2_f1.png]]
*Circuito II: voltmeter, ammeter, Rext, motor*
<!--fig:end-->
<!--fig:start-->
![[_attachments/Pexp-OEF-2006/Pexp-OEF-2006_p4_f2.png]]
*Circuito III: generator, motor, R, ε'*
<!--fig:end-->

**Topic:** [[Circuits]], [[Electromagnetic Induction]], [[Conservation of Energy]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Faraday's Law of Induction (metodo)|Faraday's Law of Induction]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Coil (object)|Coil]], [[Magnet (object)|Magnet]], [[Battery (object)|Battery]], [[Resistor (object)|Resistor]], [[Pulley (object)|Pulley]], [[Wire (object)|Wire]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1ybFYGZE6K4MvkmFt8zWzRFT-RH4IRbSD/view)
