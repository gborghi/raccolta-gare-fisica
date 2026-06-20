---
tipo: prova
prova_id: prova_P3_Maniobra_orbital_de_Hohmann
competition: Spagna Physics Olympiad
comp_code: Spagna
country: Spagna
year: '2025'
level: ''
pdf: gare di altri paesi/Spagna/RSF/2025/P3_Maniobra_orbital_de_Hohmann.pdf
cluster: Meccanica
n_problemi: '1'
tags:
  - kg/prova
  - anno/2025
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---

# Spagna 2025 — P3_Maniobra_orbital_de_Hohmann.pdf

**Fonte:** `gare di altri paesi/Spagna/RSF/2025/P3_Maniobra_orbital_de_Hohmann.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Problema 1

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
**Fonte:** Testo (PDF) — p.1
