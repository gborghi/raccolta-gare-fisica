---
title: Spagna 2016
tipo: prova
tags:
  - kg/prova
  - anno/2016
  - paese/Spagna
  - comp/Spagna
  - cluster/Termodinamica
---
<div class="atom-reader" data-prova="2016-segunda_prueba_2016"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2016 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Termodinamica,object/resistor"></span>

<div class="qlang-switch" data-default="es"></div>



**Problema experimental. Calibrado de un termistor.**

Como bien sabes, un *termómetro* es un dispositivo que permite medir la temperatura. Los termómetros clásicos se basan en el fenómeno de dilatación térmica de un líquido (mercurio o alcohol) que, al aumentar la temperatura, asciende por una columna adecuadamente graduada, es decir, calibrada.

Los *termistores* son dispositivos cuya resistencia eléctrica, $R$, varía con la temperatura, $T$. Si se conoce la dependencia $R(T)$ y se mide $R$ puede deducirse $T$, de forma que pueden emplearse como termómetros.

En los termistores llamados NTC (Negative Temperature Coefficient), la resistencia eléctrica disminuye al aumentar la temperatura. Estos termistores son muy utilizados en amplios rangos de temperatura, de $-200\,°C$ a $+1500\,°C$, ya que ofrecen gran sensibilidad y un cambio continuo en su resistencia eléctrica.

En un termistor NTC la dependencia $R(T)$ no es lineal, sino exponencial. En concreto, se ajusta bien a una dependencia del tipo

$$R = R_0 \exp\!\left[\beta\!\left(\frac{1}{T} - \frac{1}{T_0}\right)\right] \quad (1)$$

donde $T$ es la temperatura absoluta, $\beta$ es una constante característica del termistor y $R_0$ es la resistencia a la temperatura de referencia $T_0$.

Tomando logaritmos en la ecuación (1) se obtiene

$$\ln R = \beta\,\frac{1}{T} + \ln R_0 - \frac{\beta}{T_0} \quad (2)$$

Es decir, se espera una dependencia lineal entre las variables $y = \ln R$ y $x = 1/T$.

En esta prueba experimental vamos a realizar el calibrado de un termistor, es decir a determinar los valores de los parámetros $\beta$ y $R_0$, para una cierta $T_0$, a partir de una serie de medidas experimentales.

El calibrado puede llevarse a cabo introduciendo el termistor en un baño termostático cuya temperatura se puede variar de forma controlada. La resistencia del termistor se mide con un polímetro a diferentes temperaturas del baño, que se miden con un termómetro patrón. Los resultados de las medidas se presentan en la siguiente tabla:

| $T$ (°C) | 25 | 35 | 45 | 55 | 65 | 75 | 85 | 95 |
|---|---|---|---|---|---|---|---|---|
| $R$ (Ω) | 125 | 111 | 88 | 77 | 70 | 58 | 49 | 45 |

a) Representa gráficamente en el papel milimetrado los ocho puntos $(x, y)$ que se obtienen a partir de los datos de la tabla. Recuerda que, en las expresiones (1) y (2), $T$ es la temperatura absoluta.

b) Ajusta una línea recta a los puntos experimentales de la gráfica anterior.

c) A partir de este ajuste, determina los valores de $\beta$ y $R_0$ para $T_0 = 298\,\text{K}$.

d) Haz una estimación de las incertidumbres de $\beta$ y $R_0$.

<!--fig:start-->
![[_attachments/2016 segunda_prueba_2016/2016 segunda_prueba_2016_p2_f1.png]]
*NTC thermistor component photo*
<!--fig:end-->

**Topic:** [[Thermodynamics]], [[Circuits]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1UE2OVAByaRmnKsTK-5tBBj0B4BaGNgtx/view)


<div class="qlang-split" data-lang="it"></div>

**Problema experimental. Calibro di termistor.**

Como bien sabes, un *termómetro* es un dispositivo que permite medir la temperatura. I termometri classici si basano sul fenomeno di dilatazione termica di un liquido (mercurio o alcol) che, aumentando la temperatura, sale per una colonna adeguatamente graduata, cioè calibrata.

I termistori ** sono dispositivi la cui resistenza elettrica, $R$, varia con la temperatura, $T$. Se si conosce la dipendenza $R(T)$ e si misura $R$ si può dedurre $T$, in modo che possano essere utilizzati come termometri.

Nei termistori chiamati NTC (Negative Temperature Coefficient), la resistenza elettrica diminuisce con l'aumento della temperatura. Questi termistori sono molto utilizzati in ampie temperature, da $-200\,°C$ a $+1500\,°C$, in quanto offrono una grande sensibilità e un continuo cambiamento nella resistenza elettrica.

In un termistor NTC la dipendenza $R(T)$ non è lineare, ma esponenziale. In particolare, si adatta bene ad una dipendenza di tipo

$$R = R_0 \exp\!\left[\beta\!\left(\frac{1}{T} - \frac{1}{T_0}\right)\right] \quad (1)$$

donde $T$ es la temperatura absoluta, $\beta$ es una constante característica del termistor y $R_0$ es la resistencia a la temperatura de referencia $T_0$.

Prendendo logaritmi nell'equazione (1) si ottiene

$$\ln R = \beta\,\frac{1}{T} + \ln R_0 - \frac{\beta}{T_0} \quad (2)$$

In altre parole, si prevede una dipendenza lineare tra le variabili $y = \ln R$ e $x = 1/T$.

In questo test sperimentale, si realizzerà il calibrazione di un termistor, cioè determinare i valori dei parametri $\beta$ e $R_0$, per un certo $T_0$, a partire da una serie di misure sperimentali.

Il calibrazione può essere effettuata introducendo il termistor in un bagno termostatico la cui temperatura può essere controllata. La resistenza del termistor viene misurata con un polimetro a diverse temperature del bagno, che vengono misurate con un termometro di tipo. I risultati delle misure sono riportati nella tabella seguente:

| $T$ (°C) | 25 | 35 | 45 | 55 | 65 | 75 | 85 | 95 |
|---|---|---|---|---|---|---|---|---|
| $R$ (Ω) | 125 | 111 | 88 | 77 | 70 | 58 | 49 | 45 |

a) Rappresenta graficamente su carta millimetrica gli otto punti $(x, y)$ ottenuti dai dati della tabella. Ricorda che nelle espressioni (1) e (2), $T$ è la temperatura assoluta.

b) Aggiusta una linea retta ai punti sperimentali del grafico precedente.

c) A partire da questo aggiustamento, determina i valori di $\beta$ e $R_0$ per $T_0 = 298\,\text{K}$.

d) Estimare le incertezze di $\beta$ e $R_0$.

<!--fig:start-->
![[_attachments/2016 segunda_prueba_2016/2016 segunda_prueba_2016_p2_f1.png]]
*NTC thermistor component photo*
<!--fig:end-->

**Topic:** [[Thermodynamics]], [[Circuits]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1UE2OVAByaRmnKsTK-5tBBj0B4BaGNgtx/view)

<div class="qlang-split" data-lang="en"></div>

The experimental problem. Calibrated from a thermistor.**

As you know, a MSK1 thermometer is a device that allows you to measure temperature. Classical thermometers are based on the phenomenon of thermal dilation of a liquid (mercury or alcohol) which, when the temperature increases, rises by a properly graded column, that is, calibrated.

The *thermists* are devices whose electrical resistance, $R$, varies with temperature, $T$. If the $R(T)$ dependence is known and $R$ is measured, $T$ can be deduced, so that they can be used as thermometers.

In thermistors called NTC (Negative Temperature Coefficient), electrical resistance decreases as the temperature increases. These thermistors are widely used in wide temperature ranges from $-200\,°C$ to $+1500\,°C$, as they offer high sensitivity and a continuous change in their electrical resistance.

In an NTC thermistor the $R(T)$ dependence is not linear but exponential. In particular, it fits well with a type of dependence

$$R = R_0 \exp\!\left[\beta\!\left(\frac{1}{T} - \frac{1}{T_0}\right)\right] \quad (1)$$

where $T$ is the absolute temperature, $\beta$ is a constant characteristic of the thermistor and $R_0$ is the resistance to the reference temperature $T_0$.

Taking logarithms in the equation (1) is obtained

$$\ln R = \beta\,\frac{1}{T} + \ln R_0 - \frac{\beta}{T_0} \quad (2)$$

That is, a linear dependence is expected between the variables $y = \ln R$ and $x = 1/T$.

In this experimental test we will perform the calibration of a thermistor, i.e. determine the values of the parameters $\beta$ and $R_0$, for a certain $T_0$, from a series of experimental measurements.

Calibration can be carried out by inserting the thermistor into a thermostatic bath whose temperature can be controlled. The resistance of the thermistor is measured with a polymer at different bathroom temperatures, which are measured with a standard thermometer. The results of the measures are presented in the following table:

| $T$ (°C) | 25 | 35 | 45 | 55 | 65 | 75 | 85 | 95 |
|---|---|---|---|---|---|---|---|---|
| $R$ (Ω) | 125 | 111 | 88 | 77 | 70 | 58 | 49 | 45 |

(a) Graphically represent on millimeter paper the eight $(x, y)$ points obtained from the table data. Note that in expressions (1) and (2), $T$ is the absolute temperature.

(b) Adjust a straight line to the experimental points in the above graph.

(c) From this adjustment, determine the values of $\beta$ and $R_0$ for $T_0 = 298\,\text{K}$.

(d) Estimate the uncertainties of $\beta$ and $R_0$.

<!--fig:start-->
![[_attachments/2016 segunda_prueba_2016/2016 segunda_prueba_2016_p2_f1.png]]
The following information is provided for in the Annex to Implementing Regulation (EU) No 1303/2013.
<!--fig:end-->

**Topic:** [[Thermodynamics]], [[Circuits]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Resistor (object)|Resistor]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1UE2OVAByaRmnKsTK-5tBBj0B4BaGNgtx/view)
