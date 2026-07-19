---
title: Spagna 2026
tipo: prova
tags:
  - kg/prova
  - anno/2026
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="2026-experimento-inercia-rodamiento"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2026 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/cylinder,object/inclined-plane"></span>

<div class="qlang-switch" data-default="es"></div>



**OBTENCIÓN DEL MOMENTO DE INERCIA DE UN DISPOSITIVO CILÍNDRICO**

El momento de inercia de un cuerpo viene dado por la expresión:

$$I = \sum m_i r_i^2$$

En el caso de un cilindro macizo y homogéneo esta expresión, para el momento de inercia respecto a su eje principal, toma la expresión sencilla $I = 0{,}5 \cdot mr^2$, siendo $m$ la masa total del cilindro y $r$ su radio. En el caso en que el cilindro sea hueco y tenga toda su masa en el exterior, la expresión toma la forma $I = mr^2$.

Se nos pide que obtengamos el momento de inercia de un cilindro, de 400 g de masa y 12 cm de diámetro exterior, respecto de su eje principal. El cilindro es un rodamiento como el de la figura, que tiene una estructura heterogénea, haciéndose difícil utilizar expresiones analíticas. Sin embargo, vamos a usar un procedimiento indirecto para obtenerlo.

Para ello disponemos de un plano inclinado de 1,2 metros de largo y 30º de inclinación sobre el que vamos a dejar caer rodando, sin deslizar, el cilindro anterior.

El momento de inercia del cilindro podremos expresarlo en función de su masa y del radio exterior del cilindro de la forma:

$$I = Amr^2 \quad \text{donde } A \text{ es un factor entre 0,5 y 1} \quad (1)$$

Si colocamos el cilindro en el plano inclinado y lo dejamos caer rodando, sin deslizamiento, deberá cumplirse que la energía potencial que posee cuando está arriba se convierte en su parte inferior en energía cinética de traslación más energía cinética de rotación. Es decir:

$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2 = \frac{1}{2}mv^2 + \frac{1}{2}Amr^2\omega^2$$

Y si el cilindro no desliza, $v = r\omega$:

$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}Amr^2\omega^2 = \frac{1}{2}mv^2 + \frac{1}{2}Amv^2 = \frac{1}{2}mv^2(1+A)$$

Por lo que:

$$gh = \frac{1}{2}v^2(1+A) \qquad \text{o bien} \qquad \frac{(1+A)}{2} = \frac{h}{v^2}\,g \quad (2)$$

Se ha situado el cilindro a diferentes distancias, medidas desde su parte inferior, y se han calculado sus velocidades teniendo en cuenta que el movimiento es uniformemente acelerado y por tanto debe cumplirse, si parte del reposo, que:

$$v = v_0 + at = at \qquad \text{y} \qquad s = v_0 t + \frac{1}{2}at^2 = \frac{1}{2}at^2$$

Midiendo por tanto el tiempo que tarda en caer y sabiendo el espacio recorrido podemos obtener la aceleración y con ella la velocidad final. Ese valor podemos sustituirlo en (2) y a partir de ahí, teniendo en cuenta la ecuación (1), obtener el valor de $A$ necesario para saber el momento de inercia.

En nuestro experimento, al dejar caer el cilindro desde el reposo, desde distintas distancias $s$, se han obtenido las medidas del tiempo que se recogen en la tabla:

| $s$ (m) | $t$ (s) | $t^2$ (s²) | $h$ (m) | $a$ (m s⁻²) | $v$ (m s⁻¹) | $v^2$ (m² s⁻²) |
|---------|---------|------------|---------|-------------|-------------|----------------|
| 1,20 | 0,900 | | | | | |
| 1,00 | 0,820 | | | | | |
| 0,90 | 0,779 | | | | | |
| 0,80 | 0,743 | | | | | |
| 0,60 | 0,646 | | | | | |
| 0,50 | 0,569 | | | | | |
| 0,40 | 0,533 | | | | | |
| 0,30 | 0,462 | | | | | |
| 0,20 | 0,364 | | | | | |

**(a)** Rellene los valores de la tabla (utilice tres cifras decimales para que los resultados sean más precisos).

**(b)** Con los valores obtenidos en la tabla represente $h$ frente a $v^2$ en el papel milimetrado que se le ha facilitado.

**(c)** Obtenga el valor de $A$ teniendo en cuenta la ecuación (2). Tome para $g$ el valor de $9{,}81\,\text{m s}^{-2}$.

**(d)** Obtenga el valor del error cometido en $A$, mediante un procedimiento gráfico.

**(e)** Conociendo el valor de $A$, obtenga el valor del momento de inercia del cilindro problema mediante la ecuación (1).

**(f)** Obtenga finalmente el valor de la incertidumbre calculada de $I$ y exprese el resultado correctamente.

<!--fig:start-->
![[_attachments/2026 Experimento Inercia rodamiento/2026 Experimento Inercia rodamiento_p1_f1.png]]
*Bearing cylinder cross-section*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2026 Experimento Inercia rodamiento/2026 Experimento Inercia rodamiento_p1_f2.png]]
*Cylinder on inclined plane setup*
<!--fig:end-->

**Topic:** [[Rotational Dynamics]], [[Conservation of Energy]], [[Newtonian Mechanics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Graph Linearization (metodo)|Graph Linearization]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Inclined Plane (object)|Inclined Plane]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1UTbItlCsLgIAeParQkPHt7Fr_wWHSN51/view)


<div class="qlang-split" data-lang="it"></div>

**Tempore di inerzia di un dispositivo cilindrico **

Il momento di inerzia di un corpo viene dato dall'espressione:

$$I = \sum m_i r_i^2$$

Per un cilindro massiccio e omogeneo, questa espressione, per il momento di inerzia rispetto al suo asse principale, prende l'espressione semplice $I = 0{,}5 \cdot mr^2$, essendo $m$ la massa totale del cilindro e $r$ il suo raggio. Nel caso in cui il cilindro sia vuoto e abbia tutta la sua massa all'esterno, l'espressione prende la forma $I = mr^2$.

Ci viene chiesto di ottenere il momento di inerzia di un cilindro, di 400 g di massa e 12 cm di diametro esterno, rispetto al suo asse principale. Il cilindro è un rotolo come quello della figura, che ha una struttura eterogenea, rendendo difficile l'uso di espressioni analitiche. Tuttavia, useremo una procedura indiretta per ottenerlo.

Per questo abbiamo un piano inclinato di 1,2 metri di lunghezza e 30 gradi di inclinazione su cui faremo cadere ruotando, senza scivolare, il cilindro precedente.

Il momento di inerzia del cilindro possiamo esprimere in base alla sua massa e al raggio esterno del cilindro in modo:

$$I = Amr^2 \quad \text{donde } A \text{ es un factor entre 0,5 y 1} \quad (1)$$

Se mettiamo il cilindro sul piano inclinato e lo lasciamo cadere girando, senza scivolare, dovrà essere rispettato che l'energia potenziale che possiede quando è in alto si trasforma nella sua parte inferiore in energia cinetica di traslazione più energia cinetica di rotazione. Insomma:

$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2 = \frac{1}{2}mv^2 + \frac{1}{2}Amr^2\omega^2$$

E se il cilindro non scivola, $v = r\omega$:

$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}Amr^2\omega^2 = \frac{1}{2}mv^2 + \frac{1}{2}Amv^2 = \frac{1}{2}mv^2(1+A)$$

Per cui:

$$gh = \frac{1}{2}v^2(1+A) \qquad \text{o bien} \qquad \frac{(1+A)}{2} = \frac{h}{v^2}\,g \quad (2)$$

Il cilindro è stato posizionato a diverse distanze, misurate dalla sua parte inferiore, e le sue velocità sono state calcolate tenendo conto che il movimento è uniformemente accelerato e che, pertanto, deve essere rispettato, se parte del riposo, che:

$$v = v_0 + at = at \qquad \text{y} \qquad s = v_0 t + \frac{1}{2}at^2 = \frac{1}{2}at^2$$

Misurando quindi il tempo necessario per cadere e conoscendo lo spazio percorso possiamo ottenere l'accelerazione e con essa la velocità finale. Questo valore possiamo sostituirlo in (2) e da lì, tenendo conto dell'equazione (1), ottenere il valore di $A$ necessario per sapere il momento di inerzia.

Nel nostro esperimento, lasciando cadere il cilindro dal riposo, da diverse distanze $s$, sono state ottenute le misure del tempo raccolte nella tabella:

| $s$ (m) | $t$ (s) | $t^2$ (s²) | $h$ (m) | $a$ (m s⁻²) | $v$ (m s⁻¹) | $v^2$ (m² s⁻²) |
|---------|---------|------------|---------|-------------|-------------|----------------|
| 1,20 | 0,900 | | | | | |
| 1,00 | 0,820 | | | | | |
| 0,90 | 0,779 | | | | | |
| 0,80 | 0,743 | | | | | |
| 0,60 | 0,646 | | | | | |
| 0,50 | 0,569 | | | | | |
| 0,40 | 0,533 | | | | | |
| 0,30 | 0,462 | | | | | |
| 0,20 | 0,364 | | | | | |

**(a) ** Riempire i valori della tabella (utilizza tre cifre decimali per rendere i risultati più precisi).

**(b) ** Con i valori ottenuti nella tabella rappresenta $h$ rispetto a $v^2$ nella carta millimetrica che le è stata fornita.

**(c) ** Ottieni il valore di $A$ tenendo conto dell'equazione (2). Prendi per $g$ il valore di $9{,}81\,\text{m s}^{-2}$.

**(d) ** Ottieni il valore dell'errore commesso in $A$, mediante una procedura grafica.

**(e) ** Conoscendo il valore di $A$, si ottiene il valore del momento di inerzia del cilindro problema mediante l'equazione (1).

**(f) ** Ottieni infine il valore dell'incertezza calcolata di $I$ e esprimi il risultato correttamente.

<!--fig:start-->
![[_attachments/2026 Experimento Inercia rodamiento/2026 Experimento Inercia rodamiento_p1_f1.png]]
*Cross-section bearings*
<!--fig:end-->
<!--fig:start-->
![[_attachments/2026 Experimento Inercia rodamiento/2026 Experimento Inercia rodamiento_p1_f2.png]]
*Cilindro on inclined plane setup*
<!--fig:end-->

**Topic:** [[Rotational Dynamics]], [[Conservation of Energy]], [[Newtonian Mechanics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Graph Linearization (metodo)|Graph Linearization]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Inclined Plane (object)|Inclined Plane]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1UTbItlCsLgIAeParQkPHt7Fr_wWHSN51/view)

<div class="qlang-split" data-lang="en"></div>

The following shall be added to the list of the following:

The moment of inertia of a body is given by the expression:

$$I = \sum m_i r_i^2$$

In the case of a solid and homogeneous cylinder this expression, for the moment of inertia with respect to its main axis, takes the simple expression $I = 0{,}5 \cdot mr^2$, being $m$ the total mass of the cylinder and $r$ its radius. In the case where the cylinder is hollow and has all its mass on the outside, the expression takes the form $I = mr^2$.

We're asked to get the moment of inertia of a cylinder, 400 g of mass and 12 cm of outer diameter, relative to its main axis. The cylinder is a rolling like the figure, which has a heterogeneous structure, making it difficult to use analytical expressions. However, we will use an indirect procedure to obtain it.

For this we have a flat slope of 1.2 meters long and 30 degrees slope over which we will drop rolling, without sliding, the front cylinder.

The moment of inertia of the cylinder can be expressed in terms of its mass and the outer radius of the cylinder in the form:

$$I = Amr^2 \quad \text{donde } A \text{ es un factor entre 0,5 y 1} \quad (1)$$

If we put the cylinder on the slope and let it fall rolling, without slipping, it must be met that the potential energy it possesses when it is upwards is converted to its bottom in kinetic energy of translation plus kinetic energy of rotation. I mean ,

$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2 = \frac{1}{2}mv^2 + \frac{1}{2}Amr^2\omega^2$$

And if the cylinder doesn't slide, $v = r\omega$:

$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}Amr^2\omega^2 = \frac{1}{2}mv^2 + \frac{1}{2}Amv^2 = \frac{1}{2}mv^2(1+A)$$

So , what ?

$$gh = \frac{1}{2}v^2(1+A) \qquad \text{o bien} \qquad \frac{(1+A)}{2} = \frac{h}{v^2}\,g \quad (2)$$

The cylinder has been placed at different distances, measured from its bottom, and its speeds have been calculated taking into account that the motion is uniformly accelerated and therefore, if part of the rest, that:

$$v = v_0 + at = at \qquad \text{y} \qquad s = v_0 t + \frac{1}{2}at^2 = \frac{1}{2}at^2$$

By measuring the time it takes to fall and knowing the space traveled we can get the acceleration and with it the final speed. This value can be replaced by (2) and from there, taking into account equation (1), we get the value of $A$ necessary to know the moment of inertia.

In our experiment, by dropping the cylinder from the resting position, from different distances $s$, the time measurements collected in the table have been obtained:

| $s$ (m) | $t$ (s) | $t^2$ (s²) | $h$ (m) | $a$ (m s⁻²) | $v$ (m s⁻¹) | $v^2$ (m² s⁻²) |
|---------|---------|------------|---------|-------------|-------------|----------------|
| 1,20 | 0,900 | | | | | |
| 1,00 | 0,820 | | | | | |
| 0,90 | 0,779 | | | | | |
| 0,80 | 0,743 | | | | | |
| 0,60 | 0,646 | | | | | |
| 0,50 | 0,569 | | | | | |
| 0,40 | 0,533 | | | | | |
| 0,30 | 0,462 | | | | | |
| 0,20 | 0,364 | | | | | |

**(a) ** Fill in the table values (use three decimal places to get the results more accurate).

**(b) ** With the values obtained in the table represent $h$ versus $v^2$ on the millimeter paper provided.

**(c) ** Obtain the value of $A$ by taking into account equation (2). Take for $g$ the value of $9{,}81\,\text{m s}^{-2}$.

**(d) ** Obtain the value of the error committed in $A$ by a graphical procedure.

**(e) ** Knowing the value of $A$, obtain the value of the moment of inertia of the problem cylinder by using equation (1).

**(f) ** Finally obtain the calculated uncertainty value of $I$ and correctly express the result.

<!--fig:start-->
![[_attachments/2026 Experimento Inercia rodamiento/2026 Experimento Inercia rodamiento_p1_f1.png]]
The following is the list of the components of the vehicle type:
<!--fig:end-->
<!--fig:start-->
![[_attachments/2026 Experimento Inercia rodamiento/2026 Experimento Inercia rodamiento_p1_f2.png]]
The following is the list of the types of aircraft and their types of aircraft:
<!--fig:end-->

**Topic:** [[Rotational Dynamics]], [[Conservation of Energy]], [[Newtonian Mechanics]]
**Metodi:** [[Energy Conservation Method (metodo)|Energy Conservation Method]], [[Graph Linearization (metodo)|Graph Linearization]], [[Kinematic Equations (metodo)|Kinematic Equations]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Cylinder (object)|Cylinder]], [[Inclined Plane (object)|Inclined Plane]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1UTbItlCsLgIAeParQkPHt7Fr_wWHSN51/view)
