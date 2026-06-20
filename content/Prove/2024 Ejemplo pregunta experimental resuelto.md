---
tipo: prova
prova_id: prova_2024 Ejemplo pregunta experimental resuelto
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2024'
level: ''
pdf: >-
  gare di altri paesi/Spagna/Jaen/2024 Ejemplo pregunta experimental
  resuelto.pdf
cluster: Elettromagnetismo
n_problemi: '1'
tags:
  - kg/prova
  - anno/2024
  - paese/Spagna
  - comp/Spagna
  - cluster/Elettromagnetismo
---

# Spagna 2024 — 2024 Ejemplo pregunta experimental resuelto.pdf

**Fonte:** `gare di altri paesi/Spagna/Jaen/2024 Ejemplo pregunta experimental resuelto.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Elettromagnetismo]]

## Problema 1

**PRUEBA EXPERIMENTAL. DETERMINACIÓN DE LA CAPACIDAD DE UN CONDENSADOR**

*(basado en el ejercicio experimental propuesto en la fase nacional del año 2013)*

**Objetivo.**
Estudiar experimentalmente el proceso de carga de un condensador a través de una resistencia, y deducir la capacidad del condensador.

**Fundamentos**

Un condensador es un dispositivo que sirve para almacenar carga eléctrica. La principal característica de un condensador es su capacidad, $C$, cociente entre la carga que almacena y la diferencia de potencial entre sus terminales.

En este experimento se va a cargar un condensador inicialmente descargado a través de una resistencia, $R = 98{,}6\ \text{k}\Omega$, alimentando el circuito con una fuente de alimentación, como se esquematiza en la figura. Tras cerrar el circuito, la corriente que circula empieza a cargar el condensador, de forma que aumenta la diferencia de potencial entre sus terminales. Por tanto, la caída de potencial en la resistencia y la corriente que circula por ella van disminuyendo. En concreto, puede demostrarse que la corriente disminuye exponencialmente con el tiempo, $t$, en la forma

$$I = I_0\, e^{-t/RC} \tag{1}$$

donde $I_0$ es la corriente inicial, cuando se cierra el circuito en $t = 0$.

**Procedimiento experimental**

Tras comprobar que el condensador está inicialmente descargado, y una vez implementado el circuito, se cierra para que pueda comenzar a circular corriente, cosa que ocurre hasta que se carga el condensador.

1.- Se ha medido el valor de la intensidad que circula a intervalos de 10 segundos hasta 120 obteniéndose la siguiente tabla. Como la lectura del polímetro no es instantánea, no vamos a medir la intensidad en $t = 0$, que la calcularemos posteriormente:

| $t$ (s) | $I$ (µA) | $\ln I$ |
|---------|----------|---------|
| 10 | 43 | |
| 20 | 39 | |
| 30 | 36 | |
| 40 | 32 | |
| 50 | 29 | |
| 60 | 27 | |
| 70 | 24 | |
| 80 | 22 | |
| 90 | 20 | |
| 100 | 18 | |
| 110 | 17 | |
| 120 | 15 | |

2.- Transforme la ecuación (1) utilizando logaritmos neperianos para obtener una dependencia lineal entre una función de $I$ y el tiempo $t$. Anote en la tercera columna de la tabla anterior los valores de esta función de $I$.

3.- Represente gráficamente en el papel milimetrado los puntos correspondientes a esta dependencia lineal.

4.- Determine la pendiente, $p$, y la ordenada en el origen, $c$, de la recta que mejor se ajusta a estos puntos.

5.- A partir de los valores de $p$ y $c$ obtenidos en la gráfica, y del valor de $R$, determine los valores de la corriente inicial, $I_0$, y de la capacidad del condensador, $C$.

6.- Suponga que la principal fuente de error en este experimento es la medida de la corriente $I$, y que la incertidumbre de cada medida es $\pm$ una unidad en el último dígito presentado en la pantalla del polímetro.

7.- Haga una estimación de las incertidumbres de $I_0$ y de $C$.

<!--fig:start-->
![[_attachments/2024 Ejemplo pregunta experimental resuelto/2024 Ejemplo pregunta experimental resuelto_p1_f1.png]]
*RC circuit diagram with capacitor and resistor*
<!--fig:end-->

**Topic:** [[Circuits]], [[Electrostatics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]]
**Fonte:** Testo (PDF) — p.1
