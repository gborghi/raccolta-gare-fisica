---
title: Spagna na ''
tipo: prova
tags:
  - kg/prova
---
<div class="atom-reader" data-prova="p2_completo"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna na '' — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,object/wire,object/battery,object/projectile"></span>

<div class="qlang-switch" data-default="es"></div>



**El cañón magnético de raíles**

La idea del cañón de raíles (*rail gun*) es debida a un inventor francés, que la patentó en 1919. Alemania diseñó en los últimos meses de la segunda Guerra Mundial un prototipo operativo, como base de un arma antiaérea que no llegó a construirse. Las potencias militares actuales prosiguen su desarrollo como posible arma naval para disparar proyectiles sólidos, no explosivos, a muy alta velocidad. Una aplicación futurista más pacífica y natural sería el lanzamiento de cargas de material desde la superficie de la Luna, aprovechando la menor velocidad de "satelización" en torno a este astro, el vacío reinante y la posibilidad de generar en el mismo lugar la electricidad necesaria con paneles fotovoltaicos.

El dispositivo se basa en la fuerza que ejerce un campo magnético sobre un conductor por el que circula una corriente eléctrica. El campo magnético $\vec{B}$ lo produce (ley de Biot-Savart) la corriente $I$ que circula por dos conductores rectilíneos y paralelos, los raíles $A_1$ y $A_2$, alimentados por un generador con la polaridad indicada en la figura 1. Supondremos que los raíles son cilíndricos, de radio $R$ y separados una distancia $L$ entre ejes. El circuito eléctrico lo cierra, formando una U, una armadura conductora transversal deslizante AT, sobre la que actúa la fuerza impulsora magnética. Esta armadura, en su movimiento paralelo a los raíles, empuja al proyectil o carga que se quiere lanzar.

Seguramente conoce la expresión del campo magnético creado por una corriente rectilínea e indefinida, pero esta expresión no puede aplicarse en nuestro caso para determinar el campo magnético en un punto de la armadura transversal, ya que sólo circula corriente por el tramo de los raíles entre la fuente de alimentación y la propia armadura (zona a la derecha de AT en la figura 1).

Aplicando la Ley de Biot-Savart, puede demostrarse que el campo magnético producido por una corriente rectilínea finita en un punto $P$ (véase la figura 2) puede expresarse en la forma

$$\vec{B} = \frac{\mu_0 I}{4\pi r}(\sin\alpha_1 + \sin\alpha_2)\,\hat{u}_\theta$$

donde $\hat{u}_\theta$ es un vector unitario normal al plano de la figura 2 (regla del sacacorchos) y $\mu_0 = 4\pi \times 10^{-7}\ \text{N/A}^2$ es la permeabilidad magnética del vacío.

Suponga que la longitud de los raíles por los que circula la corriente $I$ es en todo momento mucho mayor que la separación $L$ entre ellos, y que el campo magnético en el exterior de una corriente cilíndrica coincide con el de una corriente filiforme a lo largo del eje del cilindro.

**a)** Determine el campo magnético total, $\vec{B}(y)$, producido por la corriente que circula por los dos raíles en un punto de AT situado a una distancia $y$ del eje de $A_1$ (figura 3).

Por la armadura transversal AT circula la misma corriente $I$, en presencia del campo no uniforme $\vec{B}(y)$. Por tanto, sobre AT va a actuar una fuerza no uniformemente distribuida.

**b)** Considere un pequeño elemento de corriente en AT, de longitud infinitesimal $dy$, situado a una distancia $y$ del eje de $A_1$. Determine la fuerza magnética $d\vec{F}(y)$ (módulo, dirección y sentido) que actúa sobre este elemento de corriente.

**c)** Determine la fuerza magnética neta $\vec{F}$ que actúa sobre AT.

*Ayudas:* Tenga en cuenta que la longitud de la armadura deslizante no es $L$, sino $L - 2R$. Pueden serle útiles las siguientes integrales indefinidas:

$$\int \frac{dy}{y} = \ln y, \qquad \int \frac{dy}{L - y} = -\ln(L - y)$$

---

Vamos ahora a hacer algunos cálculos numéricos, para poner de manifiesto las extraordinarias características de un dispositivo de este tipo. En concreto, vamos a considerar un cañón de raíles diseñado para lanzar cargas desde la superficie de la Luna, con los raíles paralelos a la superficie. El radio de la Luna es $R_L = 1{,}74 \times 10^6\ \text{m}$, y la aceleración de la gravedad en su superficie es $g_L = 1{,}62\ \text{m/s}^2$.

Considere un sistema con $L = 1{,}0\ \text{m}$ y $R = 10\ \text{cm}$, que acelera una carga de masa $m = 200\ \text{kg}$ hasta la velocidad de escape de la Luna, con la fuerza magnética $F$ actuando a lo largo de una longitud de raíles $D = 1000\ \text{m}$. Suponga despreciables las fuerzas de fricción entre AT y los raíles.[^1]

**d)** Calcule la velocidad de escape desde la superficie de la Luna, $v_L$.

**e)** Calcule la intensidad $I$ de la corriente que debe circular por los raíles.

Habrá obtenido una corriente enorme, del orden del millón de amperios. Todos los valores de las magnitudes involucradas en este dispositivo son muy grandes, lo que provoca numerosos problemas prácticos de diseño. Por ejemplo, existe una gran fuerza de interacción entre los dos raíles, pues por ellos circulan intensas corrientes antiparalelas. Esto obliga a que el montaje real deba tener una gran resistencia mecánica, soportando grandes esfuerzos sin deformaciones apreciables.

**f)** Haga una estimación de la fuerza magnética por unidad de longitud que actúa sobre los raíles, en las proximidades de AT.

Otro problema práctico es el calentamiento de los raíles por efecto Joule, y la consiguiente dilatación térmica. Suponga que los raíles son de cobre, que tiene una resistividad $\rho = 1{,}7 \times 10^{-8}\ \Omega{\cdot}\text{m}$.

**g)** Calcule la potencia disipada en forma de calor en la longitud efectiva de los dos raíles, $2D = 2000\ \text{m}$, cuando por ambos circula la corriente $I$. Calcule también la energía total disipada durante el lanzamiento y compárela con la energía cinética de la carga lanzada.

[^1]: Esta suposición no es muy realista. Precisamente uno de los problemas prácticos de este dispositivo es la abrasión mecánica de los raíles, debida a la fricción durante el lanzamiento.

**Topic:** [[Magnetism]], [[Electromagnetism]], [[Gravitation]]
**Metodi:** [[Biot-Savart Law (metodo)|Biot-Savart Law]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Wire (object)|Wire]], [[Battery (object)|Battery]], [[Projectile (object)|Projectile]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1P7M5nyLfV_GnJSmdqteylLqFqpfh1vvL/view)


<div class="qlang-split" data-lang="it"></div>

**Il cannone magnetico dei binari **

L'idea del cannone di rotaia (*rail gun*) è dovuta a un inventore francese, che lo brevettò nel 1919. Nel corso degli ultimi mesi della seconda guerra mondiale la Germania progettò un prototipo operativo, come base per un'arma antiaerea che non venne costruita. Le potenze militari attuali continuano a svilupparsi come possibile arma navale per sparare proiettili solidi, non esplosivi, a velocità molto elevata. Un'applicazione futuristica più pacifica e naturale sarebbe lanciare carichi di materiale dalla superficie della Luna, sfruttando la velocità di "satellitazione" più bassa intorno a questa stella, il vuoto reinante e la possibilità di generare nello stesso luogo l'elettricità necessaria con pannelli fotovoltaici.

Il dispositivo si basa sulla forza esercitata da un campo magnetico su un conduttore attraverso il quale circola un corrente elettrica. Il campo magnetico $\vec{B}$ è prodotto (legge di Biot-Savart) dal corrente $I$ che circola attraverso due conduttori rettilini e paralleli, i linei $A_1$ e $A_2$, alimentati da un generatore con la polarità indicata nella figura 1. Supponiamo che le rulli siano cilindriche, di radio $R$ e separate da un'asse $L$ tra gli assi. Il circuito elettrico lo chiude, formando un U, un'armatura conduttrice transversale scivolante AT, su cui agisce la forza di impulso magnetico. Questa armatura, nel suo movimento parallelo alle ferrovie, spinge il proiettile o carico che si vuole lanciare.

Conosce l'espressione di campo magnetico creato da un corrente rettilinea e indefinita, ma questa espressione non può essere applicata nel nostro caso per determinare il campo magnetico in un punto dell'armatura transversale, poiché il corrente circola solo per il tratto dei binari tra la fonte di alimentazione e l'armatura stessa (zona a destra di AT nella figura 1).

Applicando la legge di Biot-Savart, si può dimostrare che il campo magnetico prodotto da un flusso rettilineo finito in un punto $P$ (vedi figura 2) può essere espresso in

$$\vec{B} = \frac{\mu_0 I}{4\pi r}(\sin\alpha_1 + \sin\alpha_2)\,\hat{u}_\theta$$

dove $\hat{u}_\theta$ è un vettore unitario normale al piano di figura 2 (regola della scorta) e $\mu_0 = 4\pi \times 10^{-7}\ \text{N/A}^2$ è la permeabilità magnetica del vuoto.

Supponiamo che la lunghezza dei binari attraverso i quali circola il corrente $I$ sia in ogni momento molto maggiore della separazione $L$ tra di loro, e che il campo magnetico all'esterno di un corrente cilindrica coincida con quello di un corrente filiforme lungo l'asse del cilindro.

**a) ** Determina il campo magnetico totale, $\vec{B}(y)$, prodotto dal corrente che circola per le due linee in un punto AT situato a una distanza $y$ dall'asse di $A_1$ (figura 3).

Per l'armatura trasversale AT circola la stessa corrente $I$, in presenza del campo non uniforme $\vec{B}(y)$. Pertanto, su AT agirà una forza non uniformemente distribuita.

**b) ** Considera un piccolo elemento di corrente in AT, di lunghezza infinitesimale $dy$, situato a una distanza $y$ dall'asse di $A_1$. Determina la forza magnetica $d\vec{F}(y)$ (modulo, direzione e direzione) che agisce su questo elemento di corrente.

**c) ** Determina la forza magnetica netta $\vec{F}$ che agisce su AT.

*Ausili:* Si noti che la lunghezza dell'armatura scivolante non è $L$, ma $L - 2R$. Le seguenti integrali indefiniti possono essere utili:

$$\int \frac{dy}{y} = \ln y, \qquad \int \frac{dy}{L - y} = -\ln(L - y)$$

---

Ora facciamo qualche calcolo numerico, per mettere in luce le straordinarie caratteristiche di un dispositivo di questo tipo. In particolare, consideriamo un cannone di binario progettato per lanciare carichi dalla superficie della Luna, con le binarie parallele alla superficie. Il raggio della Luna è $R_L = 1{,}74 \times 10^6\ \text{m}$, e l'accelerazione della gravità sulla sua superficie è $g_L = 1{,}62\ \text{m/s}^2$.

Considera un sistema con $L = 1{,}0\ \text{m}$ e $R = 10\ \text{cm}$, che accelera un carico di massa $m = 200\ \text{kg}$ fino alla velocità di uscita della Luna, con la forza magnetica $F$ agendo lungo una lunghezza di linee $D = 1000\ \text{m}$. Supponi sconsiderate le forze di attrito tra AT e le ferrovie.[^1]

**d) ** Calcola la velocità di scarico dalla superficie della Luna, $v_L$.

**e) ** Calcolare l'intensità $I$ del corrente da circolare sulle ferrovie.

Avrà ottenuto un'enorme corrente, dell'ordine di un milione di amperi. Tutti i valori delle dimensioni coinvolti in questo dispositivo sono molto grandi, causando numerosi problemi pratici di progettazione. Per esempio, esiste una grande forza di interazione tra i due binari, perché da loro circolano forti correnti antiparalleli. Ciò richiede che il montaggio reale debba avere una grande resistenza meccanica, sopportando grandi sforzi senza deformazioni apprezzabili.

**f) ** Fa' una stima della forza magnetica per unità di lunghezza che agisce sulle ferrovie, nelle vicinanze di AT.

Un altro problema pratico è il riscaldamento dei binari per effetto Joule e la conseguente dilatazione termica. Supponiamo che le rail siano di rame, che ha una resistività $\rho = 1{,}7 \times 10^{-8}\ \Omega{\cdot}\text{m}$.

**g) ** Calcola la potenza dissipata in forma di calore nella lunghezza effettiva dei due binari, $2D = 2000\ \text{m}$, quando si circola in entrambi i sentieri il corrente $I$. Calcola anche l'energia totale dissipata durante il lancio e confronta con l'energia cinetica della carica lanciata.

[^1]: Questa ipotesi non è molto realistica. Proprio uno dei problemi pratici di questo dispositivo è l'abrasione meccanica dei binari, dovuta alla frizione durante il lancio.

**Topic:** [[Magnetism]], [[Electromagnetism]], [[Gravitation]]
**Metodi:** [[Biot-Savart Law (metodo)|Biot-Savart Law]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Wire (object)|Wire]], [[Battery (object)|Battery]], [[Projectile (object)|Projectile]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1P7M5nyLfV_GnJSmdqteylLqFqpfh1vvL/view)

<div class="qlang-split" data-lang="en"></div>

The magnetic cannon of the rails

The idea of the rail gun (MSK1/) is due to a French inventor, who patented it in 1919. Germany designed an operational prototype in the last months of World War II, as the basis for an unbuilt anti-aircraft weapon. Current military powers continue to develop as a possible naval weapon to fire solid, non-explosive projectiles at very high speed. A more peaceful and natural futuristic application would be the launch of material charges from the surface of the Moon, taking advantage of the lowest "satellite" speed around this star, the reigning vacuum and the possibility of generating the necessary electricity at the same place with photovoltaic panels.

The device is based on the force exerted by a magnetic field on a conductor through which an electric current is flowing. The magnetic field $\vec{B}$ is produced (by Biot-Savart's law) by the current $I$ which circulates through two straight and parallel conductors, the $A_1$ and $A_2$ rails, fed by a generator with the polarity indicated in Figure 1. Suppose the rails are cylindrical, $R$ radius and $L$ distance separated between axes. The electrical circuit closes it, forming a U, a sliding transverse conductive armor AT, on which the magnetic driving force acts. This armor, in its parallel motion to the rails, pushes the projectile or load to be thrown.

You are certainly familiar with the expression of the magnetic field created by a straight and indefinite current, but this expression cannot be applied in our case to determine the magnetic field at a point in the cross armour, since current only circulates along the railroad stretch between the power supply and the armour itself (zone to the right of AT in Figure 1).

Applying Biot-Savart's Law, it can be shown that the magnetic field produced by a finite straight current at a point $P$ (see Figure 2) can be expressed as

$$\vec{B} = \frac{\mu_0 I}{4\pi r}(\sin\alpha_1 + \sin\alpha_2)\,\hat{u}_\theta$$

where $\hat{u}_\theta$ is a normal unit vector to the plane of Figure 2 (cork-out rule) and $\mu_0 = 4\pi \times 10^{-7}\ \text{N/A}^2$ is the magnetic permeability of the vacuum.

Suppose that the length of the rails through which the current $I$ circulates is at all times much greater than the $L$ separation between them, and that the magnetic field on the outside of a cylindrical current coincides with that of a filament current along the cylinder axis.

**a) ** Determine the total magnetic field, $\vec{B}(y)$, produced by the current circulating through the two rails at an AT point located at a distance $y$ from the $A_1$ axis (Figure 3).

The same current $I$ circulates through the AT cross-sectional armour in the presence of the non-uniform field $\vec{B}(y)$. Therefore, over AT will act an unevenly distributed force.

**b) ** Consider a small current element in AT, infinitesimal length $dy$, located at a distance $y$ from the $A_1$ axis. Determine the magnetic force $d\vec{F}(y)$ (module, direction and direction) acting on this current element.

**c) ** Determine the net magnetic force $\vec{F}$ acting on AT.

*Aids:* Please note that the length of the sliding armor is not $L$ but $L - 2R$. The following indefinite integers may be useful:

$$\int \frac{dy}{y} = \ln y, \qquad \int \frac{dy}{L - y} = -\ln(L - y)$$

---

Let's now do some numerical calculations, to highlight the extraordinary features of a device of this kind. Specifically, we're going to consider a rails cannon designed to launch charges from the surface of the moon, with the rails parallel to the surface. The radius of the Moon is $R_L = 1{,}74 \times 10^6\ \text{m}$, and the acceleration of gravity on its surface is $g_L = 1{,}62\ \text{m/s}^2$.

Consider a system with $L = 1{,}0\ \text{m}$ and $R = 10\ \text{cm}$, which accelerates a mass charge $m = 200\ \text{kg}$ to the Moon's escape velocity, with the magnetic force $F$ acting along a length of rails $D = 1000\ \text{m}$. Assume the friction forces between AT and the rails are despicable.[^1]

**d) ** Calculate the escape velocity from the surface of the Moon, $v_L$.

**e) ** Calculate the current intensity $I$ to be circulated on the rails.

It will have obtained a huge current, the order of a million amperes. All the magnitude values involved in this device are very large, which causes numerous practical design problems. For example, there is a great force of interaction between the two rails, as intense antiparallel currents circulate through them. This requires that the actual assembly must have a high mechanical strength, withstanding large efforts without appreciable deformities.

**f) ** Estimate the magnetic force per unit length acting on the rails, in the vicinity of AT.

Another practical problem is the Joule effect heating of the rails and the resulting thermal dilation. Suppose the rails are copper, which has a resistivity $\rho = 1{,}7 \times 10^{-8}\ \Omega{\cdot}\text{m}$.

**g) ** Calculate the heat dissipation power at the effective length of the two rails, $2D = 2000\ \text{m}$, when the current $I$ is flowing through both. Also calculate the total energy dissipated during launch and compare it with the kinetic energy of the load.

[^1]: This assumption is not very realistic. One of the practical problems of this device is the mechanical abrasion of the rails due to friction during launch.

**Topic:** [[Magnetism]], [[Electromagnetism]], [[Gravitation]]
**Metodi:** [[Biot-Savart Law (metodo)|Biot-Savart Law]], [[Calculus-Integration (metodo)|Calculus-Integration]], [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Lorentz Force Analysis (metodo)|Lorentz Force Analysis]], [[Dimensional Analysis (metodo)|Dimensional Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Estimation & Approximation (competenza)|Estimation & Approximation]]
**Objects:** [[Wire (object)|Wire]], [[Battery (object)|Battery]], [[Projectile (object)|Projectile]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1P7M5nyLfV_GnJSmdqteylLqFqpfh1vvL/view)
