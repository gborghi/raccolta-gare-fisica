---
tipo: prova
prova_id: prova_P-EXPERIMENTAL-OEF-2013
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2013'
level: ''
pdf: gare di altri paesi/Spagna/RSF/P-EXPERIMENTAL-OEF-2013.pdf
cluster: Onde e Oscillazioni
n_problemi: '1'
tags:
  - kg/prova
  - anno/2013
  - paese/Spagna
  - comp/Spagna
  - cluster/Onde e Oscillazioni
---

# Spagna 2013 — P-EXPERIMENTAL-OEF-2013.pdf

**Fonte:** `gare di altri paesi/Spagna/RSF/P-EXPERIMENTAL-OEF-2013.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Onde e Oscillazioni]]

## Problema 1

**Prueba experimental. Determinación de la capacidad de un condensador**

**Objetivo.**
Se va a estudiar experimentalmente el proceso de carga de un condensador a través de una resistencia, y se deducirá la capacidad del condensador.

**Materiales.**
- Condensador electrolítico
- Pila de petaca.
- Resistencia eléctrica.
- Polímetro con dos sondas y dos pinzas de conexión (cocodrilos).
- Dos cables con pinzas.
- Cronómetro.

**Modelo teórico.**
Un condensador es un dispositivo que sirve para almacenar carga eléctrica. La principal característica de un condensador es su capacidad, $C$, cociente entre la carga que almacena y la diferencia de potencial entre sus terminales.

En este experimento se va a cargar un condensador inicialmente descargado a través de una resistencia, $R$, alimentando el circuito con una pila eléctrica, como se esquematiza en la figura 1. Tras cerrar el circuito, la corriente que circula empieza a cargar el condensador, de forma que aumenta la diferencia de potencial entre sus terminales. Por tanto, la caída de potencial en la resistencia y la corriente que circula por ella van disminuyendo. En concreto, puede demostrarse que la corriente disminuye exponencialmente con el tiempo, $t$, en la forma

$$I = I_0\, e^{-t/(RC)} \tag{1}$$

donde $I_0$ es la corriente inicial, cuando se cierra el circuito en $t = 0$.

**Procedimiento experimental**

1) Mida con el polímetro el valor de la resistencia $R$.

2) Con los componentes eléctricos de que dispone construya el circuito eléctrico, dejando inicialmente abierta una de las conexiones a la pila. Tenga en cuenta que:
- El condensador electrolítico tiene una polaridad eléctrica definida (ver figuras). Si no se respeta esta polaridad, el condensador se estropeará al cerrar el circuito y las medidas no serán correctas.
- El polímetro se usa como miliamperímetro, en la escala de 2 mA. Antes de cerrar el circuito, asegúrese de que las conexiones de este instrumento son correctas.
- El condensador debe estar inicialmente descargado. Para conseguirlo, basta cortocircuitar sus dos terminales con uno de los cables. (Fig. 2)

3) Cierre el circuito y, simultáneamente, ponga en marcha el cronómetro. Anote el valor de la corriente $I$ que circula a intervalos regulares de 10 segundos, hasta un valor máximo de 120 s. La lectura del polímetro no es instantánea, por lo que no debe tener en cuenta para cálculos posteriores la medida en el instante inicial, $I(t=0)$. Presente las medidas de $I$ en la segunda columna de una tabla como la siguiente.

| $t$ (s) | $I$ ( ) |
|---------|--------|
| 10 | |
| 20 | |
| $\ldots$ | |
| 120 | |

4) Transforme la ecuación (1) para obtener una dependencia lineal entre alguna función de $I$ y el tiempo $t$. Anote en la tercera columna de la tabla anterior los valores de esta función de $I$.

5) Represente gráficamente en el papel milimetrado los puntos correspondientes a esta dependencia lineal.

6) Determine la pendiente, $p$, y la ordenada en el origen, $c$, de la recta que mejor se ajusta a estos puntos.

7) A partir de los valores de $p$ y $c$ obtenidos en 6) y del valor de $R$ medido en 1), determine los valores de la corriente inicial, $I_0$, y de la capacidad del condensador, $C$.

8) Suponga que la principal fuente de error en este experimento es la medida de la corriente $I$, y que la incertidumbre de cada medida es $\pm$ una unidad en el último dígito presentado en la pantalla del polímetro. Haga una estimación de las incertidumbres de $I_0$ y de $C$.

<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2013/P-EXPERIMENTAL-OEF-2013_p1_f1.png]]
*RC circuit with battery and ammeter*
<!--fig:end-->

**Topic:** [[Circuits]], [[Electrostatics]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.1
