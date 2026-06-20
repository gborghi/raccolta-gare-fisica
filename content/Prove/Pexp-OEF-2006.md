---
tipo: prova
prova_id: prova_Pexp-OEF-2006
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2006'
level: ''
pdf: gare di altri paesi/Spagna/RSF/Pexp-OEF-2006.pdf
cluster: Meccanica
n_problemi: '1'
tags:
  - kg/prova
  - anno/2006
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---

# Spagna 2006 — Pexp-OEF-2006.pdf

**Fonte:** `gare di altri paesi/Spagna/RSF/Pexp-OEF-2006.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Problema 1

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
**Fonte:** Testo (PDF) — p.1
