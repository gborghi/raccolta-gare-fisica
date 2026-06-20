---
tipo: prova
prova_id: prova_P1_Lagota
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: na
level: ''
pdf: gare di altri paesi/Spagna/RSF/P1_Lagota.pdf
cluster: Meccanica
n_problemi: '1'
tags:
  - kg/prova
  - anno/na
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---

# Spagna na — P1_Lagota.pdf

**Fonte:** `gare di altri paesi/Spagna/RSF/P1_Lagota.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Problema 1

**P1 Una gota de nube**

Una nube es un agregado de gotas de agua microscópicas (nubes calientes), pequeños cristales de hielo (nubes frías) o una mezcla de ambos (nubes mixtas), en suspensión en la atmósfera. Las gotas en una nube se forman por condensación de vapor de agua alrededor de partículas microscópicas llamadas núcleos de condensación (polvo, polén, etc.) cuando el aire alcanza su humedad máxima (aire saturado) y ya no admite más vapor de agua. A partir de entonces, cualquier cantidad adicional de vapor de agua forma gotitas o cristalitos de hielo.

El tamaño de las pequeñas gotitas (o gotículas) que se forman dentro de las nubes varía desde unas pocas micras hasta varias decenas de micras. Las gotas más pequeñas no caen debido a las corrientes ascendentes dentro de la nube que contrarrestan su peso, pero las más pesadas pueden empezar a caer. Cuando una gota cae a través de la nube va colisionando con las gotículas que encuentra a su paso y las captura, de forma que la gota va creciendo poco a poco. Cuando estas gotas abandonan la nube pasan a ser gotas de lluvia, que alcanzan tamaños de varios milímetros.

En este problema vamos a estudiar la física de una gota que crece mientras desciende dentro de una nube. Utilizaremos un modelo de gota esférica de agua, de densidad constante $\rho = 1\text{ g/cm}^3$ y radio $r$, que cae por acción de la gravedad. Consideraremos que la gota tiene un diámetro de $100\,\mu\text{m}$ cuando empieza la caída, y de $1\text{ mm}$ justo antes de salir de la nube, donde cae con una velocidad $v_f = 3\text{ m/s}$.

**a)** Al movimiento de caída de la gota se opone la fuerza de fricción con el aire, $F_\eta$, que viene expresada por la ley de Stokes:
$$F_\eta = 6\pi\eta r v$$
donde $\eta = 1{,}83\times10^{-5}\text{ Pa·s}$ es el coeficiente de viscosidad del aire y $v$ es la velocidad de la gota. Compruebe que la fuerza de fricción es despreciable para las gotas estudiadas dentro de la nube.

**b)** Cuando la gota sale de la nube se convierte en una gota de lluvia y deja de crecer. Calcule la velocidad límite uniforme que tendería a alcanzar la gota de lluvia suponiendo válida la ley de Stokes.

Volvamos al interior de la nube. Por lo concluido en el apartado a), despreciaremos la resistencia del aire sobre las gotas dentro de la nube en el resto del problema.

Considere una gota que en un cierto instante tiene masa $m$ y cae verticalmente con velocidad $v$, debido a su peso $P$, y que choca contra una gotícula en reposo de masa $\Delta m \ll m$. Tras la colisión, la masa de la gota es $m + \Delta m$ y su velocidad $v + \Delta v$. Suponga que el tiempo $\Delta t$ que dura la colisión es muy pequeño y que se producen muchas colisiones por unidad de tiempo, de forma que las variaciones de masa y de velocidad pueden considerarse procesos continuos.

**c)** Aplique la 2ª ley de Newton, planteando explícitamente la variación del momento lineal entre los instantes anterior y posterior a la colisión, y demuestre que la aceleración de caída de la gota es
$$a = g - \frac{v}{m}\frac{dm}{dt} \tag{1}$$
*(Ayuda: Tenga en cuenta que $\Delta m\,\Delta v \approx 0$, y que $\displaystyle\lim_{\Delta t\to 0}\frac{\Delta f}{\Delta t} = \frac{df}{dt}$.)*

El cociente $dm/dt$ que aparece en la ecuación (1) es el ritmo de acreción de la gota (la cantidad de masa que va adquiriendo por unidad de tiempo), y depende de diversos factores. Vamos a estudiar un modelo sencillo en el que cuanto mayor es la sección y la velocidad de la gota, y cuanta más agua contiene la nube, más gotitas chocan con la gota por unidad de tiempo. Así, considere que el ritmo de acreción es directamente proporcional al área de la sección circular de la gota, a su velocidad de caída y a la densidad de agua en la nube $\rho_n$.

**d)** Demuestre que, de acuerdo con el modelo de crecimiento propuesto, la variación con el tiempo de la masa de la gota dentro de la nube es
$$\frac{dm}{dt} = \lambda\, m^{2/3}\, v \tag{2}$$
donde $\lambda$ es una constante de proporcionalidad que depende de $\rho$ y $\rho_n$.

A partir del modelo anterior, puede probarse que la velocidad de la gota en función de su masa (para valores iniciales de la masa despreciables) es
$$v = \left(\frac{6g}{7\lambda}\right)^{1/2} m^{1/6} \tag{3}$$

**e)** Compruebe que la aceleración (1) de caída de la gota tiene un valor constante y determine dicho valor. Determine también la velocidad de la gota en función del tiempo, $v(t)$.

Por último, vamos a estudiar algunos aspectos energéticos de la gota. Considere que la gota ha descendido una altura $h$ dentro de la nube, partiendo del reposo.

**f)** Determine la energía cinética final de la gota tras recorrer la distancia vertical $h$.

**g)** Determine el trabajo realizado por la fuerza de la gravedad sobre la gota durante la caída de altura $h$.

*(Ayuda: $\displaystyle\int x^3\,dx = \frac{x^4}{4} + \text{cte}$)*

**h)** Comparando los resultados de los dos apartados anteriores, obtenga cómo varía la temperatura de la gota en función de la altura $h$ descendida. El calor específico del agua es $c$. ¿Qué otros factores no tenidos en cuenta cree que podrían afectar a dicha temperatura?

<!--fig:start-->
![[_attachments/P1_Lagota/P1_Lagota_p1_f1.png]]
*Photograph of a cloud droplet formation*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P1_Lagota/P1_Lagota_p1_f2.png]]
*Collision diagram: droplet accreting mass Δm*
<!--fig:end-->

**Topic:** [[Fluid Mechanics]], [[Newtonian Mechanics]], [[Thermodynamics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Differential Equations (metodo)|Differential Equations]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.1
