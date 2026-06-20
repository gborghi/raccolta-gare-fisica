---
tipo: prova
prova_id: prova_2026 Experimento Inercia rodamiento
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2026'
level: ''
pdf: gare di altri paesi/Spagna/Jaen/2026 Experimento Inercia rodamiento.pdf
cluster: Meccanica
n_problemi: '1'
tags:
  - kg/prova
  - anno/2026
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---

# Spagna 2026 — 2026 Experimento Inercia rodamiento.pdf

**Fonte:** `gare di altri paesi/Spagna/Jaen/2026 Experimento Inercia rodamiento.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Problema 1

**OBTENCIÓN DEL MOMENTO DE INERCIA DE UN DISPOSITIVO CILÍNDRICO**

El momento de inercia de un cuerpo viene dado por la expresión:

$$I = \sum m_i r_i^2$$

En el caso de un cilindro macizo y homogéneo esta expresión, para el momento de inercia respecto a su eje principal, toma la expresión sencilla $I = 0{,}5 \cdot mr^2$, siendo $m$ la masa total del cilindro y $r$ su radio. En el caso en que el cilindro sea hueco y tenga toda su masa en el exterior, la expresión toma la forma $I = mr^2$.

Se nos pide que obtengamos el momento de inercia de un cilindro, de 400 g de masa y 12 cm de diámetro exterior, respecto de su eje principal. El cilindro es un rodamiento como el de la figura, que tiene una estructura heterogénea, haciéndose difícil utilizar expresiones analíticas. Sin embargo, vamos a usar un procedimiento indirecto para obtenerlo.

Para ello disponemos de un plano inclinado de 1,2 metros de largo y 30º de inclinación sobre el que vamos a dejar caer rodando, sin deslizar, el cilindro anterior.

El momento de inercia del cilindro podremos expresarlo en función de su masa y del radio exterior del cilindro de la forma:

$$I = Amr^2 \quad \text{donde } A \text{ es un factor entre 0,5 y 1} \tag{1}$$

Si colocamos el cilindro en el plano inclinado y lo dejamos caer rodando, sin deslizamiento, deberá cumplirse que la energía potencial que posee cuando está arriba se convierte en su parte inferior en energía cinética de traslación más energía cinética de rotación. Es decir:

$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2 = \frac{1}{2}mv^2 + \frac{1}{2}Amr^2\omega^2$$

Y si el cilindro no desliza, $v = r\omega$:

$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}Amr^2\omega^2 = \frac{1}{2}mv^2 + \frac{1}{2}Amv^2 = \frac{1}{2}mv^2(1+A)$$

Por lo que:

$$gh = \frac{1}{2}v^2(1+A) \qquad \text{o bien} \qquad \frac{(1+A)}{2} = \frac{h}{v^2}\,g \tag{2}$$

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
**Fonte:** Testo (PDF) — p.1
