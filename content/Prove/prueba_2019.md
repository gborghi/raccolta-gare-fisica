---
tipo: prova
prova_id: prova_prueba_2019
competition: Argentina Physics Olympiad
comp_code: Argent
country: Argentina
year: '2019'
level: ''
pdf: gare di altri paesi/Argentina/pruebas-nacionales/prueba_2019.pdf
cluster: Termodinamica
n_problemi: '1'
tags:
  - kg/prova
  - anno/2019
  - paese/Argentina
  - comp/Argent
  - cluster/Termodinamica
---

# Argent 2019 — prueba_2019.pdf

**Fonte:** `gare di altri paesi/Argentina/pruebas-nacionales/prueba_2019.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Termodinamica]]

## Problema 1








Olimpíada Argentina de Física 2019
Instancia Nacional
Prueba Experimental – NIVEL 1

Nombre y apellido: ________________________________

DNI: ___________________

Reglas a tener en cuenta

Antes de comenzar la prueba:
 Escriba su nombre y su número de DNI en el sitio indicado. No los
consigne en ningún otro sitio de la prueba, de hacerlo, será causal
de descalificación.
 Lea cuidadosamente TODO el enunciado de la prueba.

Durante la prueba:
 Sólo puede utilizar sus útiles de escritura y geometría, las hojas
provistas y una calculadora científica no programable. Escriba con
lapicera azul o negra, resaltados o uso de otros colores serán
plausibles de descalificación.
 Si necesita más hojas pídalas al Bedel.
 Cualquier duda o consulta que quiera realizar la debe hacer
únicamente por escrito y entregársela al Bedel.
 Escriba la solución en las hojas provistas y numérelas. No enumere
las hojas del enunciado y no escriba respuestas en ellas pues no
serán consideradas.
 Escriba de un solo lado de las hojas.

Al finalizar la prueba:
 Abroche las hojas en el orden que desea entregarlas, siempre debe
estar, primero, la hoja de respuestas provista.
 Entregue la prueba en el sobre provisto. No escriba nada en el
sobre.
 Antes de retirarse acomode y deje el equipo como lo encontró.

No encienda el equipo hasta haber leído todo el enunciado y esté listo para realizar
las mediciones requeridas.

Introducción
El aire es una mezcla homogénea de gases que constituye la atmósfera terrestre, la cual
permanece alrededor del planeta Tierra por acción de la fuerza de gravedad. Esta mezcla
está compuesta por nitrógeno (N2), oxígeno (O2), argón (Ar), dióxido de carbono (CO2) y
pequeñas cantidades de otros gases. Además, el aire contiene una cantidad variable de
vapor de agua.

El aire se puede considerar un gas ideal y, por lo tanto, debe cumplir la ecuación de estado
de los gases ideales. Es decir, si n moles de aire ocupan un volumen V y tienen una
temperatura T, estos ejercen una presión P dada por,

PV= nRT

(1)

Donde R es la constante universal de los gases.
Por otro lado, si este sistema experimenta una compresión o expansión adiabática, la
presión y el volumen deben cumplir que,

PVγ= cte

(2)

Donde =
cP
cV
cP es la capacidad calorífica molar a presión constante.
cV es la capacidad calorífica molar a volumen constante del aire.

Objetivo: Determinar experimentalmente el valor de R y el valor de para el aire.

Dispositivo experimental
El dispositivo experimental, que se esquematiza en la figura 1, consta de una jeringa en
cuyo interior se instaló un sensor de temperatura y presión. En la boquilla de la jeringa se
puso una válvula mientras que el émbolo se conectó a un tornillo mediante el cual se puede
variar el volumen del aire contenido en la jeringa de manera más controlada. En el extremo
del tornillo se ubica un goniómetro.

Figura 1. Esquema del dispositivo experimental

La válvula permite abrir o cerrar la jeringa. Así, con la válvula abierta se puede igualar la
presión del aire dentro de la jeringa con la del aire exterior, es decir con la presión
atmosférica. Con la válvula cerrada es posible mantener constante el número de moles de

aire en el interior de la jeringa. La figura 2 esquematiza, en una vista desde arriba, la
posición de la válvula abierta (izquierda) y cerrada (derecha).

Figura 2. Vista desde arriba de la válvula: posición abierta (izquierda) y posición cerrada
(derecha).

La jeringa tiene un volumen máximo de trabajo de 60 ml. Dada la ubicación del sensor, el
volumen mínimo de trabajo de la jeringa es de aproximadamente 10 ml.
El sensor de temperatura tiene una apreciación de $0,1^{\circ}C$ y el sensor de presión de 0,1 hPa.
El rango de trabajo del sensor de presión es [300; 1100] hPa.
El sensor se encuentra conectado a una placa arduino con su correspondiente pantalla, la
cual tiene una tecla de encendido y apagado (On/Off). Solo encienda la placa arduino
cuando tenga que realizar las mediciones, y apague la misma cuando termine de
hacerlas.

Primera Parte.

Para determinar el valor de R se realizarán mediciones de la presión P y de la temperatura
T de n moles de aire, contenidos en la jeringa, cuando se varía el volumen V que ocupan.
Para este caso, el volumen que ocupa el aire está dado por,

V= V0 + v

(3)

Donde v es el volumen indicado en la escala de la jeringa y V0 es el volumen de aire en el
interior de la válvula.

Teniendo en cuenta la ecuación (3) y la ecuación (1) se obtiene,

T
P=
V0
nR+
v
nR

(4)

Procedimiento:

1.1. Determinar la variación de volumen $\Deltav$ de la jeringa para una vuelta del tornillo
conectado al émbolo de la misma.
Para ello, con la válvula abierta, mida el número de vueltas del tornillo necesarias para
obtener una variación de volumen de 30 ml. Repita esta medición, al menos, 5 veces

Con la válvula abierta, ubique el émbolo de la jeringa para un valor de v= 20 ml. Una vez
ubicado el émbolo en dicha posición, cierre la válvula.

1.2. Mida la presión P y la temperatura T del aire encerrado en la jeringa para distintos
valores de v. Realice mediciones para v< vi (compresión) y para v> vi (expansión).
Reporte los valores medidos en una tabla.

1.3. Grafique
T
P en función de v y realice un ajuste lineal de estas variables. Reporte el valor
de la ordenada al origen y de la pendiente obtenida mediante el ajuste.

1.4. A partir de los valores de la ordenada al origen y de la pendiente obtenida mediante el
ajuste, determine el valor de V0.

1.5. Determine el número de moles n de aire utilizado en las mediciones, sabiendo que la
densidad del aire (ρaire) para una presión de 1013,3 hPa depende de la temperatura como
se muestra en la figura 3 y que la masa molar del aire es Maire= (28,97 $\pm$ 0,03)g $mol-1$.
Reporte el valor de la densidad del aire utilizado para determinar el valor de n.

Figura 3. Densidad del aire en función de la temperatura para una presión de 1013,3 hPa.

1.6. Determine el valor de R con su correspondiente incertidumbre.

Segunda Parte.

Para determinar el valor de γ para el aire se someterá a un número n de moles de aire al
proceso indicado por la línea continua en la figura 4. Las flechas indican el sentido en que
se realizan los procesos. La línea que unen los estados (VA; PA) y (VB; Patm) corresponde
a un proceso adiabático mientras que la línea a trazos que unen los estados (VA; PA) y
(VB; PB) corresponde a una isoterma de temperatura Tamb.

Figura 4.

Se puede demostrar que si n de moles de aire realizan los procesos termodinámicos
indicados en la figura 4, el valor de γ se puede obtener de la siguiente relación,

γ=
$ln(Patm)-ln(PA$)
$ln(PB)-ln(PA$)

(5)

Donde ln(x) indica el logaritmo natural de x.

Procedimiento

a. Con la válvula abierta, ubique el émbolo en la posición de la escala correspondiente
a 40 ml.

b. Reporte el valor de Patm.

c. Cierre la válvula.

d. Expanda el aire contenido dentro de la jeringa en un volumen menor a 5 ml.
Reporte el valor de la presión del aire PA luego de la expansión.

e. Abra y cierre la válvula para que el aire en el interior de la jeringa se comprima
adiabáticamente alcanzando la presión atmosférica. Este paso debe realizarse lo
más rápidamente posible pero permitiendo que el sistema alcance la presión
atmosférica.

f. Espere a que el valor de la presión del aire alcance un valor de equilibrio y reporte
dicho valor PB.

g. Repita los pasos anteriores para obtener al menos cinco (5) mediciones.

2.1 Reporte las mediciones de Patm, PA y PB en una Tabla.

Nota: Para el cálculo de incertidumbre del logaritmo natural tenga en cuenta que si x=
(x̅ $\pm \Deltax$) y g= ln (x), la incertidumbre $\Deltag$ puede determinarse mediante,

$\Deltag=$ 1
2 [ln(x̅ + $\Deltax$) $-ln(x̅ -\Deltax)]$

2.2. Reporte el valor de γ obtenido en cada medición y reporte su valor medio y la
incert

**Topic:** [[Thermodynamics]], [[Kinetic Theory]]
**Metodi:** [[Ideal Gas Law (metodo)|Ideal Gas Law]], [[Thermodynamic Cycle Analysis (metodo)|Thermodynamic Cycle Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Fonte:** Testo (PDF) — p.1
