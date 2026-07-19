---
title: OII 2009 Nazionale
tipo: prova
tags:
  - kg/prova
---
<div class="atom-reader" data-prova="teo09sol"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="OII 2009 Nazionale — Problema 1" data-tags="kg/prova,nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/bi,topic/geometric-optics,topic/astrophysics,object/mirror,object/star,object/planet"></span>

<div class="qlang-switch" data-default="it"></div>



**La Luna di Galileo** — 75 punti

Nella prima giornata del *Dialogo sui massimi sistemi* Galileo contrasta l'idea che la superficie della Luna sia riflettente (tersa) come uno specchio, affermando che in quel caso la Luna dovrebbe apparire scura e non chiara. Dice Salviati:

> Conforme è sicuramente la Luna alla Terra nella figura, la quale indubitabilmente è sferica […] Secondariamente, ella è, come la Terra, per se stessa oscura ed opaca, per la quale opacità è atta a ricevere ed a ripercuotere il lume del Sole, il che, quando ella non fusse tale, far non potrebbe. […] Noi cerchiamo, signor Simplicio, se per fare una riflessione di lume simile a quello che ci vien dalla Luna, sia necessario che la superficie da cui vien la riflessione sia così tersa e liscia come di uno specchio, o pur sia più accomodata una superficie non tersa e non liscia, ma aspra e mal pulita.

Si ipotizzi dunque che la superficie della Luna sia di forma perfettamente sferica e riflettente come uno specchio; in fase di plenilunio — cioè quando Sole, Terra e Luna sono approssimativamente allineati in quest'ordine — guardando la Luna si vedrebbe l'immagine virtuale del Sole, prodotta da uno specchio sferico.

Siano $R_\odot$ ed $R_i$ i raggi di Sole e Luna rispettivamente, $D_\odot$ e $D$ le distanze del Sole e della Luna dalla Terra ($\odot$ è il simbolo che indica il Sole, dall'astronomia antica, ma anche oggi). Sapendo che la distanza focale dello specchio è uguale a $R_i/2$, e tenuto conto che $D_\odot \gg D$, l'immagine del Sole al plenilunio (quindi parassiale) è un disco di raggio:

$$R_\text{imm} = \frac{R_\odot}{2} \cdot \frac{D}{D_\odot + D} \approx \frac{R_\odot\, D}{2\, D_\odot}$$

**Quesito 1.** Quale sarebbe, in questa situazione, il diametro angolare dell'immagine (virtuale) del Sole prodotta dalla Luna, per un osservatore terrestre?

**Quesito 2.** Stimando che porzione di superficie lunare apparirebbe luminosa, vista da Terra al momento del plenilunio, come vedrebbe la Luna un osservatore terrestre?

La scala delle magnitudini stellari — storicamente legata alla prima classificazione fatta da Tolomeo — è una funzione logaritmica del flusso luminoso raccolto dal rivelatore; più precisamente:

$$m(\Phi) = m_0 - 2{,}5\,\log_{10}\!\left(\frac{\Phi}{\Phi_0}\right)$$

dove $m_0$ è la magnitudine di riferimento di una stella il cui flusso luminoso sia $\Phi_0$; notare che quanto più un oggetto è luminoso tanto minore è la magnitudine, che può quindi assumere anche valori negativi; notare anche che la differenza tra le magnitudini di due oggetti è legata al rapporto inverso dei rispettivi flussi luminosi. Così, mentre Vega ($\alpha$ Lyrae) ha magnitudine circa 0, la stella più luminosa dopo il Sole (Sirio, $\alpha$ Canis minoris) ha magnitudine $-1{,}45$, Venere può arrivare a magnitudine $-4{,}9$ e il Sole ha magnitudine (integrata*) $-26{,}74$.

**Quesito 3.** Calcolare la magnitudine integrata della Luna sempre nell'ipotesi che la sua superficie fosse perfettamente sferica e riflettente, trattando l'immagine virtuale del Sole come una sorgente che emette la stessa quantità di luce in ogni direzione (cioè isotropa).

In realtà la magnitudine integrata della Luna è maggiore di quella trovata sopra perché la luce viene in parte assorbita. Nel caso della Luna occorre anche tenere presente che la superficie non diffonde la luce solare in modo uniforme (isotropo) cosicché al plenilunio la superficie appare circa 6 volte più luminosa della media. In astronomia si chiama **albedo** di un corpo opaco (pianeta, satellite, asteroide…) la frazione di luce incidente che non viene assorbita dalla superficie. Se poi l'assorbimento nel visibile è indipendente dalla lunghezza d'onda — come grosso modo accade per la Luna — una superficie illuminata dal Sole appare bianca quando il suo albedo è uguale a uno, di colore grigio chiaro, medio, scuro, al decrescere dell'albedo, fino al nero quando l'albedo è pari a zero.

**Quesito 4.** Nelle ipotesi dette, sapendo che la magnitudine integrata della Luna al plenilunio è uguale a $-12{,}7$, se ne stimi l'albedo e si dica di che colore è la superficie lunare.

**Dati:** distanza Terra–Luna $D = 384\,000\ \text{km}$, pari a circa $1/400$ della distanza Terra–Sole; diametro angolare apparente del Sole e della Luna visti da Terra (sono circa uguali): $\theta \approx 0°32'$.

(*) Per le sorgenti estese la magnitudine integrata è quella che avrebbe una sorgente puntiforme che emettesse la stessa quantità di luce.

**Topic:** [[Geometric Optics]], [[Astrophysics]]
**Metodi:** [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]], [[Small-Angle Approximation (metodo)|Small-Angle Approximation]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Mirror (object)|Mirror]], [[Star (object)|Star]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)


<div class="qlang-split" data-lang="en"></div>

The Galileo Moon is 75 points

On the first day of the MSK1 Dialogue, Galileo opposes the idea that the surface of the Moon is reflective (third) like a mirror, stating that in that case the Moon should appear dark and not clear. He says Salviati:

> As is certainly the Moon to the Earth in the figure, which is undoubtedly spherical […] Secondly, it is, like the Earth, dark and opaque to itself, for which opacity is apt to receive and reflect the light of the Sun, which, when it was not, it could not do. We are trying, Mr. Simplicius, to see if to make a reflection of light similar to that which comes to us from the Moon, it is necessary that the surface from which the reflection comes is as flat and smooth as that of a mirror, or even more accommodated by a surface not flat and smooth but rough and poorly clean.

It is therefore assumed that the surface of the Moon is perfectly spherical and reflective like a mirror; in the full moon phase  that is, when the Sun, Earth and Moon are approximately aligned in this order  looking at the Moon you would see the virtual image of the Sun, produced by a spherical mirror.

The Sun and Moon rays are $R_\odot$ and $R_i$ respectively, and $D_\odot$ and $D$ the distances of the Sun and Moon from the Earth ($\odot$ is the symbol for the Sun, from ancient astronomy, but also today). Knowing that the focal length of the mirror is $R_i/2$, and given that $D_\odot \gg D$, the image of the Sun at full moon (thus parallax) is a disk of radius:

$$R_\text{imm} = \frac{R_\odot}{2} \cdot \frac{D}{D_\odot + D} \approx \frac{R_\odot\, D}{2\, D_\odot}$$

Question 1. What would the angular diameter of the (virtual) image of the Sun produced by the Moon be for a terrestrial observer in this situation?

Question 2. If we estimate what portion of the moon's surface would appear bright, as seen from Earth at the time of the full moon, how would a lunar observer view the moon?

The scale of stellar magnitudes  historically linked to the first classification made by Ptolemy  is a logarithmic function of the light flow collected by the detector; more precisely:

$$m(\Phi) = m_0 - 2{,}5\,\log_{10}\!\left(\frac{\Phi}{\Phi_0}\right)$$

where $m_0$ is the reference magnitude of a star whose luminous flux is $\Phi_0$; note that the more luminous an object is the less the magnitude, which can therefore also assume negative values; note also that the difference between the magnitudes of two objects is related to the inverse ratio of their luminous flows. Thus, while Vega ($\alpha$ Lyrae) has a magnitude of about 0, the brightest star after the Sun (Sirio, $\alpha$ Canis minoris) has a magnitude of $-1{,}45$, Venus can reach a magnitude of $-4{,}9$ and the Sun has a magnitude (integrated*) $-26{,}74$.

**Question 3.**Calculate the integrated magnitude of the Moon always assuming that its surface is perfectly spherical and reflective, treating the virtual image of the Sun as a source that emits the same amount of light in each direction (i.e. isotropic).

In fact, the Moon's integrated magnitude is greater than the one above because light is partly absorbed. In the case of the Moon, it should also be noted that the surface does not diffuse sunlight evenly (isotropically) so that at full moon the surface appears about 6 times brighter than average. In astronomy, the fraction of incident light that is not absorbed by the surface is called the **albedo** of an opaque body (planet, satellite, asteroid…). If then the absorption in the visible is independent of the wavelength  as it happens for the Moon  a surface illuminated by the Sun appears white when its albedo is equal to one, light gray, medium, dark, at the decrease of the albedo, to black when the albedo is equal to zero.

Question 4. ** In these assumptions, knowing that the integrated magnitude of the Moon at full moon is equal to $-12{,}7$, estimate its albedo and tell what color the lunar surface is.

**Data: ** distance EarthLune $D = 384\,000\ \text{km}$, equal to approximately $1/400$ of EarthSole distance; apparent angular diameter of the Sun and Moon as seen from Earth (they are approximately equal): $\theta \approx 0°32'$.

(*) For extended sources the integrated magnitude is that which would have a point source that emits the same amount of light.

**Topic:** [[Geometric Optics]], [[Astrophysics]]
**Metodi:** [[Thin Lens & Mirror Equation (metodo)|Thin Lens & Mirror Equation]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]], [[Small-Angle Approximation (metodo)|Small-Angle Approximation]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Mirror (object)|Mirror]], [[Star (object)|Star]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="OII 2009 Nazionale — Problema 2" data-tags="kg/prova,nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/bi,topic/geometric-optics,topic/astrophysics"></span>

<div class="qlang-switch" data-default="it"></div>



**Fasci colorati** — 50 punti

Un fascio di luce perfettamente collimato e del diametro di $1{,}00\ \text{mm}$ incide con angolo di incidenza $i = 50°00'$ dall'aria su una lastra piana di vetro di spessore $t = 100\ \text{mm}$, e subisce una rifrazione per cui nel vetro si propaga con angolo di rifrazione $r$. L'indice di rifrazione $n$ del vetro dipende dalla lunghezza d'onda $\lambda$ della radiazione nel vuoto secondo la relazione:

$$n = a + \frac{b}{\lambda^2}$$

dove $a$ e $b$ sono costanti. L'indice di rifrazione dell'aria si può porre uguale a 1.

Se il fascio di luce proviene da un laser ad argon di lunghezza d'onda nel vuoto $\lambda_a = 546{,}1\ \text{nm}$, si osserva che l'indice di rifrazione del vetro vale $1{,}480$, mentre usando un laser a semiconduttore con lunghezza d'onda nel vuoto $\lambda_s = 689{,}4\ \text{nm}$, l'indice di rifrazione del vetro risulta $1{,}452$.

**Quesito 1.** Nel caso del laser ad argon, calcolare la lunghezza d'onda, la velocità di propagazione e la frequenza della radiazione nel vetro.

Si utilizza poi, al posto dei laser, un fascio di luce bianca con le stesse caratteristiche geometriche ma di lunghezza d'onda nel vuoto compresa fra $400$ e $750\ \text{nm}$. La radiazione subisce allora una dispersione, e dopo aver attraversato lo spessore dalla lastra emerge in un'area di forma allungata.

**Quesito 2.** Trovare l'indice di rifrazione del vetro ai due estremi, rosso e violetto, della radiazione bianca.

**Quesito 3.** Calcolare la distanza tra i punti centrali in cui — dopo la lastra — emergono la luce rossa e quella violetta; quanto è la dimensione massima dell'area allungata che riceve luce sulla superficie posteriore della lastra di vetro?

Un osservatore — accertatosi di non correre rischi (*) — vuol esaminare la propagazione della luce ponendo la pupilla di un occhio esattamente sull'asse:
- (a) del fascio riflesso dalla prima superficie;
- (b) del fascio trasmesso dalla lastra;
- (c) del fascio che riemerge dalla lastra dallo stesso lato della sorgente, dopo essersi riflesso sulla seconda superficie della lastra.

**Quesito 4.** Dire che cosa vede l'osservatore in ciascuno dei tre casi.

**Quesito 5.** Negli stessi tre casi, dire se — mantenendo sempre la pupilla dell'occhio al centro esatto dei fasci — si nota qualche variazione di colore a seconda che la pupilla sia adattata a poca luce (diametro circa $6\ \text{mm}$) oppure a molta luce (diametro circa $2\ \text{mm}$). Si giustifichino le risposte nei singoli casi.

**Dato numerico:** per la velocità della luce nel vuoto si utilizzi il valore più accurato: $c = 2{,}997 \times 10^8\ \text{m s}^{-1}$.

(*) ATTENZIONE: MAI GUARDARE IN QUESTO MODO IL FASCIO DI UN LASER (ANCHE DI UN PICCOLO PUNTATORE) NÉ QUELLO DI UNA LUCE INTENSA!

<!--fig:start-->
**p.2** — Rifrazione di fasci colorati nella lastra di vetro
![[_attachments/Teo09sol/Teo09sol_p2_f1.png]]
<!--fig:end-->

**Topic:** [[Geometric Optics]], [[Astrophysics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)


<div class="qlang-split" data-lang="en"></div>

The following table shows the number of points:

A perfectly collimated beam of light with a diameter of $1{,}00\ \text{mm}$ impacts at an angle of incidence $i = 50°00'$ from the air on a flat sheet of glass of thickness $t = 100\ \text{mm}$, and undergoes refraction whereby it propagates in the glass at an angle of refraction $r$. The refractive index $n$ of the glass depends on the wavelength $\lambda$ of the radiation in the vacuum according to the report:

$$n = a + \frac{b}{\lambda^2}$$

where $a$ and $b$ are constants. The refractive index of air can be set to 1.

If the beam of light comes from a wavelength argon laser in the vacuum $\lambda_a = 546{,}1\ \text{nm}$, the refractive index of the glass is $1{,}480$, whereas using a wavelength semiconductor laser in the vacuum $\lambda_s = 689{,}4\ \text{nm}$, the refractive index of the glass is $1{,}452$.

In the case of argon lasers, calculate the wavelength, propagation rate and frequency of the radiation in the glass.

A white beam of light with the same geometric characteristics but wavelength in the vacuum between $400$ and $750\ \text{nm}$ is then used instead of the lasers. The radiation then scatters, and after passing through the thickness of the plate emerges into an elongated shape area.

Question 2. Find the refractive index of the glass at both ends, red and violet, of the white radiation.

**Question 3.** Calculate the distance between the centre points where  after the sheet  red and violet light emerge; what is the maximum size of the elongated area that receives light on the back surface of the sheet of glass?

An observer  making sure he is not at risk (*)  wants to examine the propagation of light by placing the pupil of one eye exactly on the axis:
- (a) the beam reflected from the first surface;
- (b) the beam transmitted by the plate;
- (c) the beam that emerges from the plate on the same side of the source after reflecting on the second surface of the plate.

Question 4. Tell what the observer sees in each of the three cases.

Question 5.** In the same three cases, tell whether  while always keeping the pupil of the eye at the exact centre of the beams  some variation in color is observed depending on whether the pupil is adapted to low light (diameter about $6\ \text{mm}$) or to much light (diameter about $2\ \text{mm}$). The answers are justified in individual cases.

**Number data:** for the speed of light in vacuum use the most accurate value: $c = 2{,}997 \times 10^8\ \text{m s}^{-1}$.

Attention: Never look at the laser beam in this way, or the flash of a light!

<!--fig:start-->
**p.2 **  Refraction of coloured beams in the sheet of glass
![[_attachments/Teo09sol/Teo09sol_p2_f1.png]]
<!--fig:end-->

**Topic:** [[Geometric Optics]], [[Astrophysics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Symmetry Argument (metodo)|Symmetry Argument]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="OII 2009 Nazionale — Problema 3" data-tags="kg/prova,nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/astrophysics,object/cart,object/rod,object/ball,object/magnet"></span>

<div class="qlang-switch" data-default="it"></div>



**Il volo della pallina** — 75 punti

Su un piano orizzontale, un carrello si muove con attrito trascurabile verso destra, sotto l'azione di una forza costante $\vec{F}$ orizzontale, di modulo non noto. Sul carrello c'è un'asta verticale su cui è montata un'elettrocalamita che sorregge una pallina di acciaio. La massa delle ruote è trascurabile. L'elettrocalamita può essere azionata a distanza con un telecomando e dunque la pallina può essere fatta cadere a piacimento.

In un certo istante del moto, si aziona il telecomando e si osserva la pallina cadere ad una distanza $x_0$ dal piede dell'asta.

Sono note:
- la distanza tra la pallina e il carrello: $h_0 = 25{,}0\ \text{cm}$;
- la massa del carrello: $M = 200{,}0\ \text{g}$;
- la massa della pallina: $m = 40{,}0\ \text{g}$;
- $x_0 = 10{,}0\ \text{cm}$.

**Quesito 1.** Da questi dati determinare il valore numerico dell'accelerazione del carrello prima ($a$) e dopo ($a_0$) il rilascio della pallina. La velocità del carrello al momento del rilascio della pallina sia $v_0 = 1{,}50\ \text{m s}^{-1}$.

**Quesito 2.** Sapendo che l'urto della pallina sul carrello è completamente anelastico, e che dura $\Delta t = 5\ \text{ms}$, determinare la velocità del carrello al termine dell'urto.

L'esperimento viene ripetuto eliminando la forza esterna ed inclinando il tavolo di un angolo $\alpha$ rispetto all'orizzontale, tale che il sistema carrello+pallina, a causa della gravità, senta una forza $\vec{F}'$ parallela al piano, di modulo uguale alla forza $\vec{F}$. Il dispositivo di rilascio lascia cadere la pallina nell'istante in cui il carrello inizia a muoversi.

**Quesito 3.** Dire se — ed eventualmente come — cambia il punto in cui la pallina cade sul piano del carrello.

**Quesito 4.** Determinare la velocità del carrello subito dopo l'impatto con la pallina, supponendo che anche in questo caso l'urto duri $5\ \text{ms}$.

<!--fig:start-->
**p.3** — Carrello con asta e pallina, forze applicate
![[_attachments/Teo09sol/Teo09sol_p3_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.4** — Carrello su piano inclinato, componenti del peso
![[_attachments/Teo09sol/Teo09sol_p4_f3.png]]
<!--fig:end-->

**Topic:** [[Astrophysics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Cart (object)|Cart]], [[Rod (object)|Rod]], [[Ball (object)|Ball]], [[Magnet (object)|Magnet]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)


<div class="qlang-split" data-lang="en"></div>

The ball flight **  75 points

On a horizontal plane, a cart moves with negligible right-hand friction under the action of a constant horizontal force $\vec{F}$ of unknown shape. On the cart is a vertical axle mounted on which an electrocalamite holds a steel ball. The mass of the wheels is negligible. The electrocamite can be remotely operated with a remote control and thus the ball can be dropped at will.

At a certain moment of the motorcycle, the remote control is actuated and the ball is observed falling at a distance $x_0$ from the foot of the axle.

They are known:
- the distance between the ball and the cart: $h_0 = 25{,}0\ \text{cm}$;
- the mass of the cart: $M = 200{,}0\ \text{g}$;
- ball mass: $m = 40{,}0\ \text{g}$;
- $x_0 = 10{,}0\ \text{cm}$.

**Question 1.** From these data determine the numerical value of the cart acceleration before ($a$) and after ($a_0$) the ball is released. The cart speed at the time of release of the ball shall be $v_0 = 1{,}50\ \text{m s}^{-1}$.

**Question 2.** Knowing that the ball's impact on the cart is completely anelastic, and lasts $\Delta t = 5\ \text{ms}$, determine the cart's speed at the end of the impact.

The experiment is repeated by eliminating the external force and tilting the table at an angle $\alpha$ from the horizontal, such that the cart system + ball, due to gravity, feels a force $\vec{F}'$ parallel to the plane, of a modulus equal to the force $\vec{F}$. The release device drops the ball the moment the cart starts moving.

**Question 3.** Tell if  and possibly how  changes the point where the ball falls on the cart plane.

**Question 4.** Determine the cart speed immediately after impact with the ball, assuming that the impact is still $5\ \text{ms}$.

<!--fig:start-->
**p.3 **  Tire with axle and ball, applied forces
![[_attachments/Teo09sol/Teo09sol_p3_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.4 **  Curved floor tiles, weight components
![[_attachments/Teo09sol/Teo09sol_p4_f3.png]]
<!--fig:end-->

**Topic:** [[Astrophysics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Cart (object)|Cart]], [[Rod (object)|Rod]], [[Ball (object)|Ball]], [[Magnet (object)|Magnet]]
**Fonte:** [Testo (PDF) — p.3](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)



<span class="atom-split" id="q04" data-atom="q04" data-title="OII 2009 Nazionale — Problema 4" data-tags="kg/prova,nazione/italia,tipo-gara/individuale,livello/nazionale,difficolta/4,multidisciplina/mono,topic/astrophysics,object/atom,object/electron"></span>

<div class="qlang-switch" data-default="it"></div>



**Atomo di Litio… alla Thomson** — 100 punti

Gli studi sulla struttura della materia svolti nell'ultima parte dell'Ottocento mostravano che un atomo contiene un certo numero $Z$ di elettroni pari, circa, alla metà del suo peso atomico $A$. Essendo elettricamente neutro, inoltre, un atomo deve contenere delle cariche positive in numero uguale alle cariche negative. Dai valori di densità tipici dei solidi, dal peso atomico e conoscendo il numero di Avogadro, si poteva stimare la dimensione del raggio atomico.

A cavallo tra Otto e Novecento, il dibattito sulla struttura atomica era centrato sulla questione della distribuzione delle cariche elettriche in un atomo. J. J. Thomson propose un modello dell'atomo in cui gli elettroni, puntiformi e carichi negativamente, sono localizzati all'interno di una distribuzione continua di carica positiva avente forma sferica di raggio pari al raggio atomico. A causa della loro mutua repulsione, gli elettroni si distribuiscono all'interno dell'atomo in posizioni diverse. Nello stato fondamentale gli elettroni sono fermi nella loro posizione di equilibrio. Le previsioni di questo modello hanno trovato conferma solo in un limitato insieme di fatti sperimentali; tuttavia il valore storico ed esemplificativo del modello lo rende abbastanza interessante da essere trattato in un problema di elettrostatica.

Secondo il modello di Thomson, un atomo di litio ha 3 elettroni immersi in una sfera omogenea di carica avente carica totale uguale a quella degli elettroni, ma di segno opposto, in modo che l'atomo sia neutro.

**Quesito 1.** La densità del litio è $\rho = 0{,}53\ \text{g cm}^{-3}$, la massa di una mole di litio è $M = 6{,}941\ \text{g}$. Una stima ragionevole delle dimensioni dell'atomo di litio si ottiene considerando che ogni atomo ha a disposizione lo spazio di una celletta cubica il cui spigolo $d$ dà il diametro della sfera carica. Supposto questo, stimare il raggio $R$ di un atomo di litio.

**Quesito 2.** Ricavare l'andamento del campo elettrico e del potenziale di una distribuzione sferica di carica positiva, di valore totale $3e$ e raggio $R$, in tutti i punti dello spazio. Valutarne il valore a distanza $r = R$ e tracciare i grafici del modulo del campo e del potenziale in funzione della distanza $r$ dal centro della sfera.

**Quesito 3.** Calcolare, secondo il modello di Thomson, a che distanza dal centro della distribuzione positiva si trovano gli elettroni del litio nei due stati di equilibrio possibili e quando l'atomo è ionizzato una volta. Per effettuare i calcoli si assuma che il raggio $R$ della distribuzione omogenea di carica sia lo stesso per l'atomo neutro e per lo ione.

**Quesito 4.** Determinare quanta energia è stata fornita all'atomo di litio per ionizzarlo una volta a partire dallo stato con gli elettroni equidistanti tra loro (configurazione di energia totale più bassa).

**Nota:** si consideri che, per formare la sfera di carica positiva, è stata spesa un'energia nota, $U_0$, il cui valore numerico, se serve, si calcola utilizzando la relazione:

$$U_0 = \frac{27\,e^2}{20\,\varepsilon_0\, R}$$

<!--fig:start-->
**p.5** — Campo elettrico E(r)/E0 in funzione di r/R
![[_attachments/Teo09sol/Teo09sol_p5_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.6** — Potenziale V(r)/V0 in funzione di r/R
![[_attachments/Teo09sol/Teo09sol_p6_f5.png]]
<!--fig:end-->

**Topic:** [[Astrophysics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Atom (object)|Atom]], [[Electron (object)|Electron]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)


<div class="qlang-split" data-lang="en"></div>

The value of the Lithium atom at Thomson **  100 points

Studies on the structure of matter in the late 19th century showed that an atom contains a certain number of electrons $Z$ equal to about half its atomic weight $A$. Furthermore, as an atom is electrically neutral, it must contain positive charges equal to negative charges. From the typical density values of solids, from the atomic weight and knowing Avogadro's number, the size of the atomic radius could be estimated.

In the eighteenth and nineteenth centuries, the debate over atomic structure centered on the question of the distribution of electric charges in an atom. J. J. Thomson proposed a model of the atom in which electrons, point shaped and negatively charged, are located within a continuous distribution of positive charge having a spherical shape of radius equal to the atomic radius. Because of their mutual repulsion, electrons are distributed within the atom in different positions. In the fundamental state the electrons are stationary in their equilibrium position. The predictions of this model have been confirmed only in a limited set of experimental facts; however, the historical and exemplary value of the model makes it interesting enough to be treated in an electrostatic problem.

According to Thomson's model, a lithium atom has 3 electrons immersed in a homogeneous charge sphere with a total charge equal to that of the electrons, but of the opposite sign, so that the atom is neutral.

The lithium density is $\rho = 0{,}53\ \text{g cm}^{-3}$, the mass of a mole of lithium is $M = 6{,}941\ \text{g}$. A reasonable estimate of the size of the lithium atom is obtained by considering that each atom has the space of a cubic cell whose spindle $d$ gives the diameter of the charged sphere. Assuming this, estimate the radius $R$ of a lithium atom.

**Question 2.** Find the electric field trend and potential of a spherical positive charge distribution, total value $3e$ and radius $R$, at all points in space. Assess its distance $r = R$ and plot the field module and potential graphs in terms of the distance $r$ from the centre of the sphere.

Question 3. Calculate, according to Thomson's model, how far from the center of the positive distribution are the lithium electrons in the two possible equilibrium states and when the atom is ionized once. For the purposes of calculations, the radius $R$ of the homogeneous charge distribution is assumed to be the same for the neutral atom and the ion.

**Question 4.** Determine how much energy has been supplied to the lithium atom to ionize it once it has started from the state with the electrons equidistant from each other (lower total energy configuration).

**Note:** is considered to have been spent to form the positive charge sphere, a known energy, $U_0$, the numerical value of which, if necessary, is calculated using the ratio:

$$U_0 = \frac{27\,e^2}{20\,\varepsilon_0\, R}$$

<!--fig:start-->
The following shall be added to the list of the following:
![[_attachments/Teo09sol/Teo09sol_p5_f4.png]]
<!--fig:end-->

<!--fig:start-->
The value of the input data shall be the sum of the values of the input data.
![[_attachments/Teo09sol/Teo09sol_p6_f5.png]]
<!--fig:end-->

**Topic:** [[Astrophysics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Order-of-Magnitude Estimation (metodo)|Order-of-Magnitude Estimation]]
**Competenze:** [[Estimation & Approximation (competenza)|Estimation & Approximation]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Atom (object)|Atom]], [[Electron (object)|Electron]]
**Fonte:** [Testo (PDF) — p.5](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1KYrLQCYFAmoEljGQ_b1iwf5PJpPGiwO1/view)
