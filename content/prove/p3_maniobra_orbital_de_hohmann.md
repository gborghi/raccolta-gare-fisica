---
title: Spagna 2025
tipo: prova
tags:
  - kg/prova
  - anno/2025
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="p3_maniobra_orbital_de_hohmann"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2025 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/satellite,object/planet"></span>

<div class="qlang-switch" data-default="es"></div>



**P3. Maniobra orbital de Hohmann**

Una característica de las maniobras orbitales son las alteraciones rápidas o lentas que se aplican a la velocidad orbital. Los principios de conservación de la mecánica indican que basta aplicar un único cambio brusco, $\Delta v$ (un empujón del motor), para cambiar los parámetros de la órbita. En particular, una forma eficiente de aumentar la altura de una órbita consiste en incrementar bruscamente la velocidad tangencial del satélite.

En este problema se analiza la maniobra orbital de Hohmann que permite mover un satélite desde una órbita circular a baja altura alrededor de la tierra LEO (*Low Earth Orbit*) hasta una órbita ecuatorial geoestacionaria GEO (*Geosynchronous Equatorial Orbit*). Esto se consigue mediante dos impulsos bruscos en la velocidad del satélite.

Consideremos primero dos órbitas ecuatoriales circulares diferentes de un satélite, la primera a baja altitud, que llamaremos LEO$_1$, y la segunda en una órbita ecuatorial geoestacionaria, que llamaremos GEO$_3$.

**a)** Considere primero que la órbita LEO$_1$ está a una altura $z_1$ sobre la superficie terrestre. Escriba (en función de $G$, $M_\oplus$, $m$ y del radio de la órbita $r_1$) las expresiones de la velocidad del satélite $v_1$, su periodo $T_1$, su energía total $E_1$ y su momento angular respecto a la Tierra $L_1$.

**b)** Considere ahora el satélite en la órbita geoestacionaria GEO$_3$. Escriba (en función de $G$, $M_\oplus$, $m$ y de la duración del día terrestre $T_\oplus$) las expresiones de su velocidad $v_3$, radio $r_3$, energía total $E_3$ y momento angular respecto a la Tierra $L_3$.

A continuación, estudiaremos la maniobra de Hohmann que permite al satélite pasar desde la órbita circular inicial LEO$_1$ a la circular final GEO$_3$ viajando por la llamada **órbita de transferencia**.

La maniobra orbital de Hohmann consigue mover un satélite desde la órbita circular $\circled{1}$ de altura $z_1$ sobre la superficie de la Tierra a otra circular $\circled{3}$ de altura $z_3$ mediante dos empujones bruscos aplicados en los puntos $P$ y $A$. La trayectoria elíptica intermedia $\circled{2}$, por la que ha de viajar el satélite, tendrá su perigeo $P$ a una distancia $r_1$ y su apogeo $A$ a una distancia $r_3$ del centro de la Tierra.

Resumiendo, la maniobra requiere que $r_P = r_1$ y $r_A = r_3$, siendo $r_P$ y $r_A$ los radios de perigeo y apogeo de la órbita elíptica de transferencia $\circled{2}$, cuyo foco estará en el centro de la Tierra.

Recuerde que en cada trayectoria del satélite no sólo se conserva la energía total. Al moverse debido a una fuerza central también se conserva su momento angular.

**c)** Determine la energía total $E$ y el momento angular $L$ del satélite, así como sus velocidades $v_P$ y $v_A$ en los puntos $P$ y $A$ en la órbita elíptica de transferencia $\circled{2}$. Escriba sus resultados en términos de $G$, $M_\oplus$, $m$, $r_P$ y $r_A$ únicamente.

El brusco empujón tangencial $\Delta v_{1P}$ a la velocidad $v_1$ del satélite (que está en la órbita LEO$_1$), le dará la velocidad $v_P$, transfiriéndole a la órbita elíptica de transferencia $\circled{2}$ (cuyo apogeo $A$ estará en algún punto de la órbita circular GEO$_3$).

La maniobra aún no ha concluido; una vez llegado al apogeo $A$ de la órbita de transferencia $\circled{2}$ hay que aplicar otro empujón brusco adicional $\Delta v_{A3}$ para pasar de dicha órbita elíptica a la órbita geoestacionaria final GEO$_3$.

**d)** Determine los impulsos $\Delta v_{1P} = v_P - v_1$ y $\Delta v_{A3} = v_3 - v_A$ necesarios para poner al satélite en la órbita geoestacionaria GEO$_3$ desde la órbita inicial LEO$_1$, y calcule sus valores en metros por segundo.

**e)** Mediante la segunda ley de Kepler (la velocidad areolar es constante) demuestre que el periodo de la órbita de transferencia es

$$T_2 = \sqrt{\frac{4\pi^2 a^3}{GM_\oplus}},$$

siendo $a$ el semieje mayor de la elipse, $a = (r_P + r_A)/2$.

Determine el tiempo $t_{PA}$ que emplea el satélite en la órbita de transferencia y calcule su valor en segundos.

---

**Datos:**
- Masa del satélite $m$.
- Constante de gravitación universal $G$.
- Masa de la Tierra $M_\oplus$, $\;GM_\oplus = 398\,600\ \text{km}^3\,\text{s}^{-2}$.
- Radio de la Tierra $R_\oplus = 6378\ \text{km}$.
- Área de la elipse: $A = \pi ab$; excentricidad: $e = b/a = (r_A - r_P)/(r_A + r_P)$.
- Emplearemos los datos del European Data Relay Satellite (EDRS-C) de la ESA, lanzado el 6 de agosto de 2019 desde Kourou por el Ariane Space Launch Complex, cuya órbita de transferencia tenía el perigeo y apogeo a altitudes $z_P = 250\ \text{km}$ y $z_A = 35\,786\ \text{km}$, respectivamente.

<!--fig:start-->
![[_attachments/P3_Maniobra_orbital_de_Hohmann/P3_Maniobra_orbital_de_Hohmann_p1_f1.png]]
*Ariane 5 launch, Arianespace September 2019*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P3_Maniobra_orbital_de_Hohmann/P3_Maniobra_orbital_de_Hohmann_p2_f2.png]]
*Hohmann transfer orbit diagram LEO to GEO*
<!--fig:end-->

**Topic:** [[Gravitation]], [[Astrophysics]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Kepler's Laws (metodo)|Kepler's Laws]], [[Conservation Laws (metodo)|Conservation Laws]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Satellite (object)|Satellite]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1qJSMfcxEQwtRw70dESknLmZoLAuH434l/view)


<div class="qlang-split" data-lang="it"></div>

**P3. Manipolazione orbitale di Hohmann**

Una caratteristica delle manovre orbitali sono le alterazioni rapide o lente che si applicano alla velocità orbitale. I principi di conservazione della meccanica indicano che basta applicare un singolo brusco cambio, $\Delta v$ (un impulso del motore), per cambiare i parametri dell'orbita. In particolare, un modo efficiente per aumentare l'altezza di un'orbita consiste nell'aumentare notevolmente la velocità tangenziale del satellite.

In questo problema viene analizzata la manovra orbitale di Hohmann che consente di spostare un satellite da un'orbita circolare a bassa altezza intorno alla terra LEO (*Low Earth Orbit*) ad un'orbita equatoriale geoestazionaria GEO (*Geosynchronous Equatorial Orbit*). Questo è ottenuto con due impulsi bruschi nella velocità del satellite.

Prendiamo in considerazione prima due orbite ecuatoriali circolari diverse da un satellite, la prima a bassa altitudine, che chiameremo LEO$_1$, e la seconda in un'orbita ecuatoriale geoestazionaria, che chiameremo GEO$_3$.

**a) ** Considera prima che l'orbita LEO$_1$ sia ad un'altezza $z_1$ sulla superficie terrestre. Scrivi (sopra $G$, $M_\oplus$, $m$ e il raggio di orbita $r_1$) le espressioni della velocità del satellite $v_1$, il suo periodo $T_1$, la sua energia totale $E_1$ e il suo momento angolare rispetto alla Terra $L_1$.

**b) ** Considera ora il satellite in orbita geostationaria GEO$_3$. Scrivi (in funzione di $G$, $M_\oplus$, $m$ e della durata del giorno terrestre $T_\oplus$) le espressioni della sua velocità $v_3$, radio $r_3$, energia totale $E_3$ e momento angolare rispetto alla Terra $L_3$.

In seguito, si studierà la manovra di Hohmann che consente al satellite di passare dall'orbita circolare iniziale LEO$_1$ alla circolazione finale GEO$_3$ viaggiando attraverso la cosiddetta **orbita di trasferimento**.

La manovra orbitale di Hohmann permette di spostare un satellite dall'orbita circolare $\circled{1}$ di altezza $z_1$ sulla superficie terrestre ad un'altra circolare $\circled{3}$ di altezza $z_3$ mediante due bruschi spinti applicati ai punti $P$ e $A$. La via elliptica intermedia $\circled{2}$, per la quale il satellite deve viaggiare, avrà il suo perigeo $P$ a una distanza $r_1$ e il suo apio $A$ a una distanza $r_3$ dal centro della Terra.

In sintesi, la manovra richiede che $r_P = r_1$ e $r_A = r_3$, essendo $r_P$ e $r_A$ i raggi di perigeo e apoggio dell'orbita elliptica di trasferimento $\circled{2}$, il cui foco sarà al centro della Terra.

Ricordate che in ogni tracciato del satellite non si conserva solo l'energia totale. Quando si muove a causa di una forza centrale si conserva anche il suo momento angolare.

**c) ** Determina l'energia totale $E$ e il momento angolare $L$ del satellite, nonché le sue velocità $v_P$ e $v_A$ nei punti $P$ e $A$ nell'orbita elliptica di trasferimento $\circled{2}$. Scrivi i tuoi risultati in termini di $G$, $M_\oplus$, $m$, $r_P$ e $r_A$ solo.

L'improvvisa spinta tangenziale $\Delta v_{1P}$ alla velocità $v_1$ del satellite (che è in orbita LEO$_1$), darà la velocità $v_P$, trasferendolo all'orbita elliptica di trasferimento $\circled{2}$ (il cui apio $A$ sarà a un punto dell'orbita circolare GEO$_3$).

La manovra non è ancora conclusa; una volta raggiunto il punto di culmine $A$ dell'orbita di trasferimento $\circled{2}$, deve essere applicata un'altra spinta brusca aggiuntiva $\Delta v_{A3}$ per passare da tale orbita elliptica all'orbita geoestazionaria finale GEO$_3$.

**d) ** Determina i pulsi $\Delta v_{1P} = v_P - v_1$ e $\Delta v_{A3} = v_3 - v_A$ necessari per mettere il satellite in orbita geoestazionaria GEO$_3$ dall'orbita iniziale LEO$_1$, e calcola i suoi valori in metri per secondo.

**e) ** Attraverso la seconda legge di Kepler (la velocità areolare è costante) dimostra che il periodo dell'orbita di trasferimento è

$$T_2 = \sqrt{\frac{4\pi^2 a^3}{GM_\oplus}},$$

$a$ è la semicilometria maggiore dell'ellipse, $a = (r_P + r_A)/2$.

Determina il tempo $t_{PA}$ impiegato dal satellite nell'orbita di trasferimento e calcola il suo valore in secondi.

---

**Dati: **
- Massa del satellite $m$.
- Costante di gravità universale $G$.
- Massa terrestre $M_\oplus$, $\;GM_\oplus = 398\,600\ \text{km}^3\,\text{s}^{-2}$.
- Radio Terra $R_\oplus = 6378\ \text{km}$.
- Area dell'ellipse: $A = \pi ab$; eccentricità: $e = b/a = (r_A - r_P)/(r_A + r_P)$.
- Utilizzeremo i dati del European Data Relay Satellite (EDRS-C) dell'ESA, lanciato il 6 agosto 2019 da Kourou dall'Ariane Space Launch Complex, la cui orbita di trasferimento ha avuto il perigeo e l'apoggio ad altitudini $z_P = 250\ \text{km}$ e $z_A = 35\,786\ \text{km}$, rispettivamente.

<!--fig:start-->
![[_attachments/P3_Maniobra_orbital_de_Hohmann/P3_Maniobra_orbital_de_Hohmann_p1_f1.png]]
*Ariane 5 launch, Arianespace September 2019*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P3_Maniobra_orbital_de_Hohmann/P3_Maniobra_orbital_de_Hohmann_p2_f2.png]]
*Hohmann transfer orbit diagram LEO to GEO*
<!--fig:end-->

**Topic:** [[Gravitation]], [[Astrophysics]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Kepler's Laws (metodo)|Kepler's Laws]], [[Conservation Laws (metodo)|Conservation Laws]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Satellite (object)|Satellite]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1qJSMfcxEQwtRw70dESknLmZoLAuH434l/view)

<div class="qlang-split" data-lang="en"></div>

**P3. Maniobra orbital de Hohmann**

A characteristic of orbital maneuvers are rapid or slow alterations applied to orbital speed. The conservation principles of mechanics indicate that a single sudden change, $\Delta v$ (a motor thrust), is sufficient to change the parameters of the orbit. In particular, an efficient way to increase the height of an orbit is to sharply increase the tangential velocity of the satellite.

In this problem, the Hohmann orbital maneuver is analyzed, which allows a satellite to move from a low-altitude circular orbit around the LEO earth (*Low Earth Orbit*) to a geostationary equatorial orbit GEO (*Geosynchronous Equatorial Orbit*). This is achieved by two sudden pulses at the speed of the satellite.

Let's first consider two different circular equatorial orbits of a satellite, the first at low altitude, which we'll call LEO$_1$, and the second in a geostationary equatorial orbit, which we'll call GEO$_3$.

**a) ** Consider first that the LEO$_1$ orbit is at an altitude $z_1$ above the earth's surface. Write (based on $G$, $M_\oplus$, $m$ and the radius of orbit $r_1$) the expressions of the satellite's speed $v_1$, its period $T_1$, its total energy $E_1$ and its angular moment with respect to the Earth $L_1$.

**b) ** Consider now the satellite in the geostationary orbit GEO$_3$. Write (based on $G$, $M_\oplus$, $m$ and the length of the Earth day $T_\oplus$) the expressions of its speed $v_3$, radius $r_3$, total energy $E_3$ and angular moment with respect to Earth $L_3$.

Next, we will study the Hohmann maneuver that allows the satellite to pass from the initial circular orbit LEO$_1$ to the final circular GEO$_3$ by traveling through the so-called **transfer orbit**.

Hohmann's orbital maneuver makes it possible to move one satellite from the circular $\circled{1}$ orbit of height $z_1$ above the Earth's surface to another circular $\circled{3}$ orbit of height $z_3$ by two sharp pushes applied at the points $P$ and $A$. The intermediate elliptical path $\circled{2}$, through which the satellite is to travel, will have its perigee $P$ at a distance $r_1$ and its apex $A$ at a distance $r_3$ from the Earth's centre.

In summary, the maneuver requires that $r_P = r_1$ and $r_A = r_3$, being $r_P$ and $r_A$ the radii of perigee and apex of the elliptical transfer orbit $\circled{2}$, whose focus will be at the center of the Earth.

Remember, every satellite's path is not just about total energy. When moving due to a central force, its angular momentum is also preserved.

**c) ** Determine the total energy $E$ and angular moment $L$ of the satellite, as well as its speeds $v_P$ and $v_A$ at the points $P$ and $A$ in the elliptical transfer orbit $\circled{2}$. Write your results in terms of $G$, $M_\oplus$, $m$, $r_P$ and $r_A$ only.

The sudden tangential push $\Delta v_{1P}$ at the satellite's $v_1$ speed (which is in LEO$_1$ orbit), will give it the speed $v_P$, transferring it to the elliptical transfer orbit $\circled{2}$ (whose apogee $A$ will be at some point in the GEO$_3$ circular orbit).

The manoeuvre is not yet complete; once the $A$ of the transfer orbit has reached its peak $\circled{2}$ another additional sudden push $\Delta v_{A3}$ must be applied to move from that elliptical orbit to the final geo-stationary orbit GEO$_3$.

**d) ** Determine the $\Delta v_{1P} = v_P - v_1$ and $\Delta v_{A3} = v_3 - v_A$ pulses needed to put the satellite into geostationary orbit GEO$_3$ from initial orbit LEO$_1$, and calculate their values in meters per second.

**e)** Mediante la segunda ley de Kepler (la velocidad areolar es constante) demuestre que el periodo de la órbita de transferencia es

$$T_2 = \sqrt{\frac{4\pi^2 a^3}{GM_\oplus}},$$

where $a$ is the major semicircle of the ellipse, $a = (r_P + r_A)/2$.

Determine the $t_{PA}$ time spent by the satellite in the transfer orbit and calculate its value in seconds.

---

**Datos:**
- Mass of the satellite $m$.
- Universal gravity constant $G$
- The mass of the Earth $M_\oplus$, $\;GM_\oplus = 398\,600\ \text{km}^3\,\text{s}^{-2}$.
- Radio de la Tierra $R_\oplus = 6378\ \text{km}$.
- Elliptical area: $A = \pi ab$; eccentricity: $e = b/a = (r_A - r_P)/(r_A + r_P)$.
- We will use the data from ESA's European Data Relay Satellite (EDRS-C), launched on 6 August 2019 from Kourou by the Ariane Space Launch Complex, whose transfer orbit had perigee and apex at altitudes $z_P = 250\ \text{km}$ and $z_A = 35\,786\ \text{km}$, respectively.

<!--fig:start-->
![[_attachments/P3_Maniobra_orbital_de_Hohmann/P3_Maniobra_orbital_de_Hohmann_p1_f1.png]]
*Ariane 5 launch, Arianespace September 2019*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P3_Maniobra_orbital_de_Hohmann/P3_Maniobra_orbital_de_Hohmann_p2_f2.png]]
*Hohmann transfer orbit diagram LEO to GEO*
<!--fig:end-->

**Topic:** [[Gravitation]], [[Astrophysics]], [[Newtonian Mechanics]]
**Metodi:** [[Newton's Law of Gravitation (metodo)|Newton's Law of Gravitation]], [[Kepler's Laws (metodo)|Kepler's Laws]], [[Conservation Laws (metodo)|Conservation Laws]], [[Conservation of Energy (metodo)|Conservation of Energy]], [[Conservation of Momentum (metodo)|Conservation of Momentum]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Satellite (object)|Satellite]], [[Planet (object)|Planet]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1qJSMfcxEQwtRw70dESknLmZoLAuH434l/view)
