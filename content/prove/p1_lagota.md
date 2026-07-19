---
title: Spagna na
tipo: prova
tags:
  - kg/prova
  - anno/na
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="p1_lagota"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna na — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/droplet"></span>

<div class="qlang-switch" data-default="es"></div>



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
$$a = g - \frac{v}{m}\frac{dm}{dt} \quad (1)$$
*(Ayuda: Tenga en cuenta que $\Delta m\,\Delta v \approx 0$, y que $\displaystyle\lim_{\Delta t\to 0}\frac{\Delta f}{\Delta t} = \frac{df}{dt}$.)*

El cociente $dm/dt$ que aparece en la ecuación (1) es el ritmo de acreción de la gota (la cantidad de masa que va adquiriendo por unidad de tiempo), y depende de diversos factores. Vamos a estudiar un modelo sencillo en el que cuanto mayor es la sección y la velocidad de la gota, y cuanta más agua contiene la nube, más gotitas chocan con la gota por unidad de tiempo. Así, considere que el ritmo de acreción es directamente proporcional al área de la sección circular de la gota, a su velocidad de caída y a la densidad de agua en la nube $\rho_n$.

**d)** Demuestre que, de acuerdo con el modelo de crecimiento propuesto, la variación con el tiempo de la masa de la gota dentro de la nube es
$$\frac{dm}{dt} = \lambda\, m^{2/3}\, v \quad (2)$$
donde $\lambda$ es una constante de proporcionalidad que depende de $\rho$ y $\rho_n$.

A partir del modelo anterior, puede probarse que la velocidad de la gota en función de su masa (para valores iniciales de la masa despreciables) es
$$v = \left(\frac{6g}{7\lambda}\right)^{1/2} m^{1/6} \quad (3)$$

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
**Objects:** [[Droplet (object)|Droplet]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1pTE5lpazFk6Z_wGmJeNESA71PRaXBOzP/view)


<div class="qlang-split" data-lang="it"></div>

Un goccio di nuvola

Una nuvola è un aggregato di gocce di acqua microscopiche (nuvole calde), piccoli cristalli di ghiaccio (nuvole fredde) o un misto di entrambi (nuvole miste), sospese nell'atmosfera. Le gocce in una nuvola si formano da condensazione di vapore d'acqua intorno a particelle microscopiche chiamate nuclei di condensazione (polvere, polenone, ecc.) quando l'aria raggiunge la sua umidità massima (aria satura) e non ammette più vapore d'acqua. Da allora, qualsiasi quantità di vapore d'acqua aggiuntiva forma gocce o cristalli di ghiaccio.

Le piccole gocce (o goccioline) che si formano all'interno delle nuvole variano da pochi micra a diverse decine di micra. Le gocce più piccole non cadono a causa delle correnti ascendenti all'interno del nuvo che controllano il loro peso, ma le più pesanti possono iniziare a cadere. Quando una goccia cade attraverso il nuvo colpisce le gocce che trova nel suo cammino e le cattura, così la goccia cresce gradualmente. Quando queste gocce lasciano il nuvo diventano gocce di pioggia, che raggiungono dimensioni di diversi millimetri.

In questo problema, studiamo la fisica di una goccia che cresce mentre scende dentro una nuvola. Useremo un modello di goccia di acqua a sfera, di densità costante $\rho = 1\text{ g/cm}^3$ e di radio $r$, che cade a causa della gravità. Considereremo che la goccia ha un diametro di $100\,\mu\text{m}$ quando inizia il calo, e di $1\text{ mm}$ appena prima di uscire dal nuvo, dove cade a una velocità $v_f = 3\text{ m/s}$.

**a) ** Il movimento di caduta della goccia è opposto alla forza di frizione con l'aria, $F_\eta$, che viene espressa dalla legge di Stokes:
$$F_\eta = 6\pi\eta r v$$
dove $\eta = 1{,}83\times10^{-5}\text{ Pa·s}$ è il coefficiente di viscosità dell'aria e $v$ è la velocità di gocciolamento. Verifica che la forza di attrito è scarsa per le gocce studiate all'interno del nubo.

Quando la goccia esce dal nuvo diventa una goccia di pioggia e smette di crescere. Calcola la velocità limite uniforme che la goccia di pioggia avrebbe tendenza a raggiungere supponendo che la legge di Stokes sia valida.

Torniamo all'interno del nubo. Per quanto si conclude al punto (a), disprezziamo la resistenza dell'aria sulle gocce all'interno del nuvo nel resto del problema.

Considerate una goccia che, in un certo istante, ha massa $m$ e cade verticalmente a velocità $v$, a causa del suo peso $P$, e che colpisce una goccia a riposo di massa $\Delta m \ll m$. Dopo l'impatto, la massa della goccia è $m + \Delta m$ e la sua velocità $v + \Delta v$. Supponiamo che il tempo $\Delta t$ di collisione sia molto piccolo e che ci siano molte collisioni per unità di tempo, in modo che le variazioni di massa e velocità possano essere considerate processi continui.

Applica la seconda legge di Newton, spiegando esplicitamente la variazione del momento lineare tra gli istanti precedenti e successivi alla collisione, e dimostra che l'accelerazione di caduta della goccia è
$$a = g - \frac{v}{m}\frac{dm}{dt} \quad (1)$$
*(Aiuto: Si noti che $\Delta m\,\Delta v \approx 0$, e che $\displaystyle\lim_{\Delta t\to 0}\frac{\Delta f}{\Delta t} = \frac{df}{dt}$.) *

Il coefficiente $dm/dt$ riportato nell'equazione (1) è il ritmo di accrescimento della goccia (la quantità di massa che acquista per unità di tempo), e dipende da diversi fattori. Studieremo un modello semplice in cui più grande è la sezione e la velocità della goccia, e più acqua contiene il nuvo, più gocce colpiscono la goccia per unità di tempo. Si consideri quindi che il ritmo di accrescimento sia direttamente proporzionale all'area della sezione circolare della goccia, alla sua velocità di caduta e alla densità dell'acqua nel nuvo $\rho_n$.

**d) ** Dimostra che, secondo il modello di crescita proposto, la variazione nel tempo della massa della goccia all'interno della nuvola è
$$\frac{dm}{dt} = \lambda\, m^{2/3}\, v \quad (2)$$
in cui $\lambda$ è una costante di proporzionalità che dipende da $\rho$ e $\rho_n$.

Dal modello precedente, si può dimostrare che la velocità della goccia in funzione della sua massa (per valori iniziali di massa scarsa) è
$$v = \left(\frac{6g}{7\lambda}\right)^{1/2} m^{1/6} \quad (3)$$

**e) ** Verifica che l'accelerazione (1) della goccia abbia un valore costante e determina tale valore. Determina anche la velocità di goccia in funzione del tempo, $v(t)$.

Infine, esamineremo alcuni aspetti energetici della goccia. Considera che la goccia sia scesa a una altezza $h$ all'interno del nuvo, partendo dal riposo.

**f) ** Determina l'energia cinetica finale della goccia dopo aver percorso la distanza verticale $h$.

**g) ** Determina il lavoro effettuato dalla forza di gravità sulla goccia durante il declino di altezza $h$.

*(Aiuto: $\displaystyle\int x^3\,dx = \frac{x^4}{4} + \text{cte}$) *

**h) ** Confrontando i risultati dei due precedenti paragrafi, si ottiene come la temperatura della goccia varia in funzione dell'altezza $h$ discesa. Il calore specifico dell'acqua è $c$. Quali altri fattori non considerati riteni che potrebbero influenzare tale temperatura?

<!--fig:start-->
![[_attachments/P1_Lagota/P1_Lagota_p1_f1.png]]
*Photograph of a cloud droplet formation*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P1_Lagota/P1_Lagota_p1_f2.png]]
*Collisione diagramma: droplet accreting mass Δm*
<!--fig:end-->

**Topic:** [[Fluid Mechanics]], [[Newtonian Mechanics]], [[Thermodynamics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Conservation of Momentum (metodo)|Conservation of Momentum]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Differential Equations (metodo)|Differential Equations]], [[Energy Conservation Method (metodo)|Energy Conservation Method]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Droplet (object)|Droplet]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1pTE5lpazFk6Z_wGmJeNESA71PRaXBOzP/view)

<div class="qlang-split" data-lang="en"></div>

**P1 Una gota de nube**

A cloud is an aggregate of microscopic water droplets (hot clouds), small ice crystals (cold clouds) or a mixture of both (mixed clouds), suspended in the atmosphere. Droplets in a cloud are formed by condensation of water vapor around microscopic particles called condensation nuclei (dust, pollen, etc.) when the air reaches its maximum humidity (saturated air) and no longer admits water vapor. From then on, any additional amount of water vapor forms ice droplets or crystals.

The size of the tiny droplets (or droplets) that form within the clouds varies from a few microns to several dozen microns. The smallest droplets do not fall because of the upward currents within the cloud that counteract their weight, but the heaviest can begin to fall. When a drop falls through the cloud, it collides with the droplets it finds and catches them, so that the drop grows gradually. When these droplets leave the cloud, they become raindrops, reaching sizes of several millimeters.

In this problem we're going to study the physics of a drop growing as it descends into a cloud. We'll use a model of spherical water drop, constant density $\rho = 1\text{ g/cm}^3$ and radius $r$, which falls by gravity. We'll consider that the drop has a diameter of $100\,\mu\text{m}$ when the drop starts, and $1\text{ mm}$ just before it leaves the cloud, where it falls at a speed of $v_f = 3\text{ m/s}$.

**a) ** The droplet's droplet motion is opposed by the air friction force, $F_\eta$, which is expressed by Stokes' law:
$$F_\eta = 6\pi\eta r v$$
where $\eta = 1{,}83\times10^{-5}\text{ Pa·s}$ is the coefficient of viscosity of the air and $v$ is the droplet velocity. Check that the friction force is negligible for the droplets studied inside the cloud.

**b)** Cuando la gota sale de la nube se convierte en una gota de lluvia y deja de crecer. Calculate the uniform limit velocity that the rain drop would tend to reach assuming Stokes' law is valid.

Let's go back to the cloud. For the remainder of the problem, we shall disregard the resistance of the air over the droplets within the cloud.

Consider a droplet that at a certain moment has mass $m$ and falls vertically at speed $v$, due to its weight $P$, and that collides with a mass-resting droplet $\Delta m \ll m$. After the collision, the droplet mass is $m + \Delta m$ and its velocity $v + \Delta v$. Suppose the $\Delta t$ time of the collision is very small and that many collisions occur per unit time, so that the mass and velocity variations can be considered continuous processes.

**c)** Aplique la 2ª ley de Newton, planteando explícitamente la variación del momento lineal entre los instantes anterior y posterior a la colisión, y demuestre que la aceleración de caída de la gota es
$$a = g - \frac{v}{m}\frac{dm}{dt} \quad (1)$$
*(Help: Please note that $\Delta m\,\Delta v \approx 0$, and that $\displaystyle\lim_{\Delta t\to 0}\frac{\Delta f}{\Delta t} = \frac{df}{dt}$.)*

The $dm/dt$ coefficient in equation (1) is the rate of accretion of the droplet (the amount of mass it acquires per unit of time), and depends on several factors. Let's study a simple model where the larger the section and the velocity of the drop, and the more water the cloud contains, the more droplets collide with the drop per unit time. Thus, consider that the accretion rate is directly proportional to the area of the circular section of the droplet, its drop rate and the density of water in the cloud $\rho_n$.

**d) ** Demonstrate that, according to the proposed growth model, the change over time in the droplet mass within the cloud is
$$\frac{dm}{dt} = \lambda\, m^{2/3}\, v \quad (2)$$
where $\lambda$ is a proportionality constant that depends on $\rho$ and $\rho_n$.

From the previous model, it can be proven that the droplet speed based on its mass (for initial values of negligible mass) is
$$v = \left(\frac{6g}{7\lambda}\right)^{1/2} m^{1/6} \quad (3)$$

**e) ** Check that the drop drop acceleration (1) has a constant value and determine that value. Determine the time-speed of the droplet, $v(t)$.

Finally, let's look at some of the energy aspects of the drop. Consider that the drop has descended a height $h$ within the cloud, starting from the rest.

**f) ** Determine the final kinetic energy of the droplet after the vertical distance $h$.

**g) ** Determine the work done by the force of gravity on the drop during the fall from height $h$.

*(Ayuda: $\displaystyle\int x^3\,dx = \frac{x^4}{4} + \text{cte}$)*

**h) ** Comparing the results of the two previous paragraphs, obtain how the droplet temperature varies according to the $h$ drop height. The specific heat of the water is $c$. What other factors not taken into account do you think could affect this temperature?

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
**Objects:** [[Droplet (object)|Droplet]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1pTE5lpazFk6Z_wGmJeNESA71PRaXBOzP/view)
