---
title: Spagna 2009
tipo: prova
tags:
  - kg/prova
  - anno/2009
  - paese/Spagna
  - comp/Spagna
  - cluster/Meccanica
---
<div class="atom-reader" data-prova="p-experimental-oef-2009"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="Spagna 2009 — Quesito 1" data-tags="kg/prova,paese/Spagna,comp/Spagna,cluster/Meccanica,object/pipe-tube"></span>

<div class="qlang-switch" data-default="es"></div>



**Prueba experimental. Oscilaciones amortiguadas de un péndulo de agua.**

**Objetivos**

Se van a estudiar experimentalmente las oscilaciones de la columna de agua contenida en un tubo cilíndrico, doblado en forma de U. Debido a la fricción del agua con las paredes del tubo, esta oscilación es amortiguada y al cabo de unas pocas oscilaciones se alcanza el equilibrio. En concreto, se van a determinar experimentalmente el radio efectivo del tubo y el coeficiente de amortiguamiento.

**Materiales**

- Tubo de goma de 170 cm de longitud.
- Listón de madera.
- Sargentos y tacos de madera para sujetar el listón a la pata de la mesa.
- 4 pinzas para sujetar el tubo al listón.
- Cinta adhesiva y tijeras.
- Jeringa graduada de 60 cm³.
- Cinta métrica.
- Cronómetro.
- Botella de agua.
- Vaso de plástico.

**Montaje y procedimiento experimental**

- El listón de madera se coloca vertical, apoyado en el suelo y en el lateral de la mesa. Se colocan los tacos de madera entre el listón y la pata de la mesa y se sujetan con los sargentos, como indica la figura 1.
- El tubo se sujeta al listón mediante las pinzas, como se indica en la figura 2. Si es necesario, se puede emplear cinta adhesiva para terminar de sujetar el tubo y darle la forma deseada en U.
- Debe procurarse que el tubo mantenga su sección circular, es decir que no se doble en la parte inferior curvada ni se aplaste con las pinzas. Además, los dos laterales del tubo deben quedar verticales.
- Es necesario que quede un trozo de tubo libre en la parte superior de los dos lados, uno de ellos suficientemente largo para poder soplar por él.
- El volumen deseado de agua se introduce en el tubo mediante una jeringa graduada. Deben evitarse en lo posible las burbujas de aire dentro de la jeringa y en la columna de agua dentro del tubo.
- Para forzar la oscilación de la columna de agua, soplar por un extremo del tubo hasta que el agua alcance el nivel deseado y tapar con un dedo el otro extremo. Al quitar el dedo que cierra el tubo comienza la oscilación de la columna de agua. El desplazamiento inicial del agua debe ser suficiente para que puedan observarse cuatro oscilaciones completas antes de que el sistema alcance el equilibrio.
- Atención: cuando se sopla por un extremo del tubo, debe evitarse que el agua rebose por el otro. Si ocurriese esto, sería necesario vaciar el tubo y volver a empezar la medida pues se desconocería el volumen de agua que queda dentro del tubo.
- Antes de realizar medidas es conveniente adquirir práctica con el método de forzar la oscilación del agua y con el manejo del cronómetro.

**Modelo teórico**

En equilibrio, el nivel de agua en los dos lados del tubo es el mismo (figura 3a). Cuando se sopla por un extremo del tubo el sistema se desequilibra (figura 3b) y, al liberar el sistema, el nivel $x$ del agua oscila en torno al de equilibrio. No es difícil demostrar que, en ausencia de fricción, esta oscilación es armónica:

$$x = A \cos(\omega_0 t) \quad (1)$$

con periodo de oscilación $T_0 = 2\pi/\omega_0$ dado por:

$$T_0 = 2\pi\sqrt{\frac{V}{2\pi g R^2}} \quad (2)$$

donde $g$ es la aceleración de la gravedad, $R$ el radio del tubo y $V$ el volumen de agua.

En ausencia de fricción, la amplitud de oscilación $A$ sería constante en el tiempo. Un tratamiento más realista debe tener en cuenta la fricción del agua con las paredes del tubo. Si se considera una fuerza de fricción proporcional a la velocidad del agua, se obtiene:

$$x = A_0\, e^{-\gamma t} \cos(\omega t) \quad (3)$$

donde $\gamma$ es el llamado coeficiente de amortiguamiento. El resultado (3) representa una oscilación armónica con frecuencia angular $\omega = 2\pi/T$ y amplitud $A$ exponencialmente decreciente (figura 4):

$$A(t) = A_0\, e^{-\gamma t} \quad (4)$$

En particular, la amplitud al cabo de $n$ oscilaciones completas, es decir en $t_n = nT$, es (figura 4):

$$A_n = A_0\, e^{-\gamma n T} \quad (5)$$

Si el amortiguamiento es débil ($\gamma \ll \omega_0$), como es nuestro caso, la frecuencia $\omega$ coincide aproximadamente con la frecuencia $\omega_0$ en ausencia de amortiguamiento, de forma que la expresión (2) para el periodo de oscilación sigue siendo aproximadamente válida.

Pero, debido también a la fricción del agua con las paredes, la columna de agua no oscila "en bloque", es decir como un todo (la capa de agua en contacto con las paredes prácticamente no se mueve). Como consecuencia, el radio efectivo del tubo es inferior al real, y por tanto el periodo de oscilación es mayor que el previsto en ausencia de fricción, de forma que:

$$T = 2\pi\sqrt{\frac{V}{2\pi g R_{ef}^2}} \quad (6)$$

con $R_{ef} < R$ y $T > T_0$.

En la primera parte de esta prueba experimental se van a realizar una serie de medidas para determinar los radios efectivo $R_{ef}$ y real $R$ del tubo. En nuestro montaje, estos dos radios son claramente diferentes, es decir la diferencia entre ambos es mayor que sus incertidumbres experimentales. En la segunda parte se obtendrá el coeficiente de amortiguamiento $\gamma$.

---

**Medidas y preguntas.**

**1ª parte. Determinación de $R_{ef}$ y $R$.**

**1.a)** Mediante la jeringa graduada, añada agua dentro del tubo de forma que el volumen de agua sea sucesivamente $V = 30, 40, 50 \ldots 100\text{ cm}^3$. En cada uno de estos casos:

- Mida con el cronómetro el periodo de oscilación del agua en torno a su nivel de equilibrio. Sugerencia: mida cuatro veces el tiempo de cuatro oscilaciones completas ($4T_1$, $4T_2$, $4T_3$ y $4T_4$) y deduzca el periodo promedio $\bar{T}$. Presente sus medidas y resultados en una tabla 1 como la de la figura 5.
- Para cada $V$, marque con bolígrafo en los dos lados del tubo la posición del nivel de agua en equilibrio. La distancia entre estas dos marcas, que se medirá más tarde cuando se vacíe y estire el tubo, permitirá determinar su radio $R$. Tenga cuidado de que estas marcas no se borren.

**1.b)** Represente gráficamente en un papel milimetrado los puntos experimentales $T^2$ (en ordenadas) frente a $V$ (en abscisas).

**1.c)** Obtenga la pendiente de la recta que mejor se ajusta a estos puntos.

**1.d)** Deduzca el valor del radio efectivo del tubo, $R_{ef}$.

**1.e)** Haga una estimación de la incertidumbre (margen de error) del radio efectivo, $\Delta R_{ef}$.

**1.f)** Desmonte con cuidado un lado del tubo y vacíe el agua en un vaso. Desmonte completamente el tubo y estírelo sobre la mesa, mida la distancia $L$ entre las marcas simétricas que ha hecho para cada $V$ y deduzca en cada caso el radio $R$ del tubo. Anote los valores de $L$ y $R$ en las columnas correspondientes de la tabla 1.

**1.g)** Calcule el valor medio de $R$ y haga una estimación de su incertidumbre.

*(Tabla 1 — figura 5: columnas $V\text{ (cm}^3)$, $4T_1\text{ (s)}$, $4T_2\text{ (s)}$, $4T_3\text{ (s)}$, $4T_4\text{ (s)}$, $\bar{T}\text{ (s)}$, $T^2\text{ (s}^2)$, $L\text{ (cm)}$, $R\text{ (mm)}$; filas $V = 30, 40, 50, 60, 70, 80, 90, 100$.)*

---

**2ª parte. Determinación de $\gamma$.**

Vuelva a sujetar el tubo en U al listón de madera. Introduzca $60\text{ cm}^3$ de agua y marque en el listón el nivel de agua en equilibrio. Haga otra marca unos 20 cm por encima. Ésta será la posición inicial del nivel de agua, $A_0$, en todas las medidas posteriores. Antes de medir debe adquirir práctica en conseguir enrasar el nivel de agua con esta marca, soplando por el otro lado hasta alcanzar un nivel un poco más alto, tapando el tubo con el dedo y dejando entrar un poco de aire hasta que el nivel alcance la marca.

**2.a)** Mida las amplitudes $A_1$, $A_2$ y $A_3$ al cabo de una, dos y tres oscilaciones completas, respectivamente, es decir en $t_1 = T$, $t_2 = 2T$ y $t_3 = 3T$ (el periodo $T$ para este volumen de agua ya ha sido medido previamente). Repita la observación de la oscilación amortiguada todas las veces que sea necesario para, mediante aproximaciones y marcas sucesivas, determinar estas amplitudes con suficiente precisión. Presente sus medidas en la tabla 2 (figura 6).

**2.b)** Transforme la expresión (4) para obtener una relación lineal entre $\ln(A_n/A_0)$ y $n$. Represente gráficamente en papel milimetrado los puntos experimentales $(n,\, \ln(A_n/A_0))$ para $n = 0, 1, 2, 3$.

**2.c)** Obtenga la pendiente de la recta que mejor se ajusta a estos puntos y deduzca el valor del coeficiente de amortiguamiento $\gamma$.

**2.d)** Haga una estimación de la incertidumbre $\Delta\gamma$.

<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p1_f1.png]]
*Fig. 1: vertical wooden slat setup*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p2_f2.png]]
*Fig. 2: U-tube clamped to slat*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p3_f3.png]]
*Fig. 3a-3b: U-tube equilibrium and displaced*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p3_f4.png]]
*Fig. 4: damped oscillation amplitude decay*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p5_f5.png]]
*Fig. 5: Tabla 1 measurement table*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p6_f6.png]]
*Fig. 6: Tabla 2 amplitude measurements*
<!--fig:end-->

**Topic:** [[Fluid Mechanics]], [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Physical Modeling (metodo)|Physical Modeling]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1cGiCm1VZUDe9nQCzDnh65q11YBBhy6sJ/view)


<div class="qlang-split" data-lang="it"></div>

La prova sperimentale. Oscillazioni amortizzate di un pendolo d'acqua.**

**Obiettivi**

La colonna d'acqua contenuta in un tubo cilindrico, piegatamente a forma di U, sarà studiata sperimentalmente. A causa del frattamento dell'acqua con le pareti del tubo, questa oscillazione viene ammortizzata e dopo poche oscillazioni si raggiunge l'equilibrio. In particolare, la radius effettiva del tubo e il coefficiente di ammortizzazione saranno determinati sperimentalmente.

**Materiali**

- Un tubo di gomma lungo 170 centimetri.
- Un barattolo di legno.
- Sergenti e tacchi di legno per tenere il bastone al piede del tavolo.
- 4 pinze per attaccare il tubo alla lastra.
- Fascia adesiva e forbici.
- Seringa graduata di 60 cm3.
- Cintura metrica.
- Un cronometro.
- Boccetta d'acqua.
- Un bicchiere di plastica.

**Montaggio e procedura sperimentale**

- La lavagna di legno è posta verticalmente, appoggiata al pavimento e sul lato del tavolo. I tacchi di legno sono collocati tra la lastra e la gamba del tavolo e si tengono con i sergenti, come indicato nella figura 1.
- Il tubo è attaccato alla lastra con le pinze, come indicato in figura 2. Se necessario, si può usare un'adesiva per finire di tenere il tubo e dargli la forma desiderata in U.
- Si deve assicurare che il tubo mantenga la sua sezione circolare, cioè che non si piega nella parte inferiore curva o si schiacci con le pinze. Inoltre, i due lati del tubo devono restare verticali.
- È necessario che rimanga un pezzo di tubo libero in cima ai due lati, uno di loro abbastanza lungo da poterne soffiare.
- Il volume d'acqua desiderato viene inserito nel tubo mediante una siringa graduata. Se possibile, evitare le bolle d'aria all'interno della siringa e nella colonna d'acqua all'interno del tubo.
- Per forzare l'oscillazione della colonna d'acqua, sopprimere da una parte del tubo fino a quando l'acqua raggiunge il livello desiderato e coprire con un dito l'altra estremità. Togliendo il dito che chiude il tubo inizia l'oscillazione della colonna d'acqua. Il movimento iniziale dell'acqua deve essere sufficiente per osservare quattro oscillazioni complete prima che il sistema raggiunga l'equilibrio.
- Attenzione: quando si soffi da una parte del tubo, si deve evitare che l'acqua si riversino dall'altra. Se ciò accadesse, sarebbe necessario svuotare il tubo e ricominciare la misura perché non si conosce il volume di acqua che rimane dentro il tubo.
- Prima di effettuare misure, è opportuno acquisire pratica con il metodo di forzare l'oscillazione dell'acqua e con il funzionamento del cronometro.

**Modello teorico**

In equilibrio, il livello di acqua su entrambi i lati del tubo è lo stesso (Figura 3a). Quando viene soffiato da una parte del tubo il sistema si sbilanci (Figura 3b) e, quando viene rilasciato il sistema, il livello $x$ dell'acqua oscilla intorno al livello di equilibrio. Non è difficile dimostrare che, in assenza di attrito, questa oscillazione è armonica:

$$x = A \cos(\omega_0 t) \quad (1)$$

con un periodo di oscillazione $T_0 = 2\pi/\omega_0$ dato da:

$$T_0 = 2\pi\sqrt{\frac{V}{2\pi g R^2}} \quad (2)$$

dove $g$ è l'accelerazione della gravità, $R$ il raggio del tubo e $V$ il volume dell'acqua.

In assenza di attrito, l'ampiezza di oscillazione $A$ sarebbe costante nel tempo. Un trattamento più realistico deve tenere conto della friczione dell'acqua con le pareti del tubo. Se si considera una forza di attrito proporzionale alla velocità dell'acqua si ottiene:

$$x = A_0\, e^{-\gamma t} \cos(\omega t) \quad (3)$$

dove $\gamma$ è il cosiddetto coefficiente di ammortizzazione. Il risultato (3) rappresenta un'oscillazione armonica con frequenza angolare $\omega = 2\pi/T$ e amplitudine $A$ in diminuzione esponenziale (figura 4):

$$A(t) = A_0\, e^{-\gamma t} \quad (4)$$

In particolare, l'ampiezza dopo $n$ oscillazioni complete, cioè in $t_n = nT$, è (figura 4):

$$A_n = A_0\, e^{-\gamma n T} \quad (5)$$

Se l'ammortizzazione è debole ($\gamma \ll \omega_0$), come nel nostro caso, la frequenza $\omega$ corrisponde approssimativamente alla frequenza $\omega_0$ in assenza di ammortizzazione, in modo che l'espressione (2) per il periodo di oscillazione rimanga approssimativamente valida.

Ma, anche a causa del frattamento dell'acqua con i muri, la colonna d'acqua non oscilla "in blocco", cioè come un tutto (il strato d'acqua in contatto con i muri praticamente non si muove). Di conseguenza, il raggio effettivo del tubo è inferiore al reale e quindi il periodo di oscillazione è maggiore di quello previsto in assenza di attrito, in modo che:

$$T = 2\pi\sqrt{\frac{V}{2\pi g R_{ef}^2}} \quad (6)$$

con $R_{ef} < R$ e $T > T_0$.

Nella prima parte di questo test sperimentale verranno effettuate una serie di misure per determinare i raggi effettivi $R_{ef}$ e reali $R$ del tubo. Nel nostro montaggio, questi due raggi sono chiaramente diversi, cioè la differenza tra i due è maggiore delle loro incertezze sperimentali. Nella seconda parte si ottiene il coefficiente di ammortizzazione $\gamma$.

---

**Missioni e domande.**

**1° parte. Determinazione di $R_{ef}$ e $R$.**

**1.a) ** Aggiungi acqua all'interno del tubo con la siringa graduata in modo che il volume d'acqua sia successivamente $V = 30, 40, 50 \ldots 100\text{ cm}^3$. In ciascun caso:

- Misura con il cronometro il periodo di oscillazione dell'acqua intorno al suo livello di equilibrio. Suggerimento: misurare quattro volte il tempo di quattro oscillazioni complete ($4T_1$, $4T_2$, $4T_3$ e $4T_4$) e dedurre il periodo medio $\bar{T}$. Presenta le sue misure e risultati in un tabella 1 come in figura 5.
- Per ogni $V$, segna con una penna su entrambi i lati del tubo la posizione del livello d'acqua in equilibrio. La distanza tra questi due marchi, che sarà più tardi misurata quando il tubo viene svuotato e esteso, permetterà di determinare il suo raggio $R$. Fate attenzione a non cancellare questi segni.

**1.b) ** Rappresenta graficamente su un foglio di millimetro i punti sperimentali $T^2$ (ordinati) rispetto a $V$ (abcissi).

**1.c) ** Ottieni la pendice della retta che meglio si adatta a questi punti.

**1.d) ** Detraggere il valore del raggio effettivo del tubo, $R_{ef}$.

**1.e) ** Fa' un'estimazione dell'incertezza (margine di errore) del raggio effettivo, $\Delta R_{ef}$.

**1.f) ** Sdistruggere con cura un lato del tubo e svuotare l'acqua in un bicchiere. Sd. il tubo completamente smontato e steso sul tavolo, misurare la distanza $L$ tra i segni simetrici che ha fatto per ogni $V$ e dedurre in ogni caso il raggio $R$ del tubo. Nota i valori di $L$ e $R$ nelle colonne corrispondenti di tabella 1.

**1.g) ** Calcola il valore medio di $R$ e fa un'estimazione della sua incertezza.

*(Tabella 1  Figura 5: colonne $V\text{ (cm}^3)$, $4T_1\text{ (s)}$, $4T_2\text{ (s)}$, $4T_3\text{ (s)}$, $4T_4\text{ (s)}$, $\bar{T}\text{ (s)}$, $T^2\text{ (s}^2)$, $L\text{ (cm)}$, $R\text{ (mm)}$; righe $V = 30, 40, 50, 60, 70, 80, 90, 100$.)*

---

** parte 2. Determinazione di $\gamma$.**

Riattacca il tubo in U al bastone di legno. Inserire $60\text{ cm}^3$ di acqua e segnalare sul biglietto il livello di acqua in equilibrio. Fai un altro marchio circa 20 cm sopra. Questa sarà la posizione iniziale del livello dell'acqua, $A_0$, in tutte le misure successive. Prima di misurare, si deve praticare la riduzione del livello dell'acqua con questo marchio, soffiando dall'altro lato fino a raggiungere un livello un po' più alto, coprendo il tubo con il dito e lasciando entrare un po' di aria fino a quando il livello raggiunge il marchio.

**2.a) ** Misura le amplitudini $A_1$, $A_2$ e $A_3$ dopo una, due e tre oscillazioni complete, rispettivamente, cioè in $t_1 = T$, $t_2 = 2T$ e $t_3 = 3T$ (il periodo $T$ per questo volume d'acqua è stato già misurato in precedenza). Ripetere l'osservazione dell'oscillazione amortizzata tutte le volte necessarie per determinare queste ampiezze con sufficiente precisione mediante approssimazioni e segni successivi. La sua misurazione è riportata in tabella 2 (figura 6).

**2.b) ** Trasforma l'espressione (4) per ottenere un rapporto lineare tra $\ln(A_n/A_0)$ e $n$. Rappresenta graficamente su carta millimetrica i punti di prova $(n,\, \ln(A_n/A_0))$ per $n = 0, 1, 2, 3$.

**2.c) ** Ottieni l'inclinazione della retta che meglio si adatta a questi punti e deduci il valore del coefficiente di ammortizzazione $\gamma$.

**2.d) ** Fa' un'estimazione dell'incertezza $\Delta\gamma$.

<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p1_f1.png]]
*Fig. 1: setup di slatte in legno verticale*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p2_f2.png]]
*Fig. 2: U-tube clamped to slat*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p3_f3.png]]
*Fig. 3a-3b: U-tube equilibrium and displaced*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p3_f4.png]]
*Fig. 4: damped oscillation amplitude decay*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p5_f5.png]]
*Fig. 5 tabella 1 tabella di misurazione*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p6_f6.png]]
*Fig. 6: Tabella 2 Amplitude measurements*
<!--fig:end-->

**Topic:** [[Fluid Mechanics]], [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Physical Modeling (metodo)|Physical Modeling]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1cGiCm1VZUDe9nQCzDnh65q11YBBhy6sJ/view)

<div class="qlang-split" data-lang="en"></div>

**Prueba experimental. Damping oscillations of a water pendulum.**

**Objetivos**

The experimental study will examine the oscillations of the water column contained in a U-shaped, cylindrical tube. Because of the friction of the water with the walls of the tube, this oscillation is cushioned and after a few oscillations the balance is reached. In particular, the effective radius of the tube and the buffer coefficient will be experimentally determined.

**Materiales**

- A rubber tube, about two inches long.
- A wooden bar.
- Sergents and wooden sticks to hold the bar to the table's foot.
- Four clamps to hold the tube to the barrel.
- Glue tape and scissors.
- Graduated syringe of 60 cm3.
- It's a tape recorder.
- It's a timekeeper.
- A bottle of water.
- Plastic glass.

** Assembly and experimental procedure**

- The wooden plank is placed vertically, leaning on the floor and on the side of the table. The wooden sticks are placed between the bar and the table leg and held with the sergeants, as shown in Figure 1.
- The tube is attached to the rack by means of the tweezers, as shown in Figure 2. If necessary, adhesive tape can be used to finish the tube and give the desired shape in U.
- The tube must be kept circular, that is, it must not bend at the curved bottom or crush with the tweezers. In addition, the two sides of the tube must remain vertical.
- It is necessary to leave a piece of tube free on the top of both sides, one of them long enough to be blown through.
- The desired volume of water is introduced into the tube by a graduated syringe. Air bubbles inside the syringe and in the water column inside the tube should be avoided as much as possible.
- To force the oscillation of the water column, blow through one end of the pipe until the water reaches the desired level and cover the other end with one finger. When the finger that closes the tube is removed, the water column begins to oscillate. The initial water displacement should be sufficient to allow four complete oscillations to be observed before the system reaches equilibrium.
- Attention: when blowing from one end of the tube, water should not be poured from the other. If this were to happen, it would be necessary to empty the pipe and start measuring again as the volume of water remaining inside the pipe would be unknown.
- Before taking measurements, it is advisable to acquire practice in the method of forcing the oscillation of water and in the use of the chronometer.

**Modelo teórico**

In equilibrium, the water level on both sides of the tube is the same (Figure 3a). When one end of the tube is blown the system is unbalanced (Figure 3b) and, when the system is released, the $x$ water level oscillates around the equilibrium level. It is not difficult to prove that, in the absence of friction, this oscillation is harmonic:

$$x = A \cos(\omega_0 t) \quad (1)$$

with a period of oscillation $T_0 = 2\pi/\omega_0$ given by:

$$T_0 = 2\pi\sqrt{\frac{V}{2\pi g R^2}} \quad (2)$$

where $g$ is the acceleration of gravity, $R$ the tube radius and $V$ the volume of water.

In the absence of friction, the oscillation amplitude $A$ would be constant over time. A more realistic treatment should take into account the friction of water with the walls of the pipe. If a force of friction is taken as proportional to the speed of water, it is obtained:

$$x = A_0\, e^{-\gamma t} \cos(\omega t) \quad (3)$$

where $\gamma$ is the so-called buffer coefficient. The result (3) is a harmonic oscillation with angular frequency $\omega = 2\pi/T$ and exponentially decreasing amplitude $A$ (Figure 4):

$$A(t) = A_0\, e^{-\gamma t} \quad (4)$$

In particular, the amplitude after $n$ complete oscillations, i.e. at $t_n = nT$, is (Figure 4):

$$A_n = A_0\, e^{-\gamma n T} \quad (5)$$

If the buffer is weak ($\gamma \ll \omega_0$), as in our case, the frequency $\omega$ approximately matches the frequency $\omega_0$ in the absence of buffer, so that the expression (2) for the oscillation period remains approximately valid.

But also because of the friction of water with the walls, the water column does not oscillate "in block", that is, as a whole (the water layer in contact with the walls practically does not move). As a consequence, the effective radius of the tube is less than the actual, and therefore the oscillation period is longer than the expected in the absence of friction, so that:

$$T = 2\pi\sqrt{\frac{V}{2\pi g R_{ef}^2}} \quad (6)$$

with $R_{ef} < R$ and $T > T_0$.

In the first part of this experimental test a series of measurements will be carried out to determine the effective radii $R_{ef}$ and actual radii $R$ of the tube. In our assembly, these two radii are clearly different, meaning the difference between them is greater than their experimental uncertainties. The buffer coefficient $\gamma$ shall be obtained in part two.

---

**Medidas y preguntas.**

**1ª parte. Determination of $R_{ef}$ and $R$.**

**1.a) ** By the graduated syringe, add water inside the tube so that the water volume is successively $V = 30, 40, 50 \ldots 100\text{ cm}^3$. In each of these cases:

- Measure with the chronometer the period of water oscillation around its equilibrium level. Suggestion: measure four times the time of four complete oscillations ($4T_1$, $4T_2$, $4T_3$ and $4T_4$) and deduce the mean period $\bar{T}$. It presents its measurements and results in a table 1 as shown in Figure 5.
- For each $V$, mark with a pen on both sides of the tube the position of the water level in equilibrium. The distance between these two marks, which will be measured later when the tube is emptied and stretched, will allow its radius $R$ to be determined. Be careful not to erase these marks.

**1.b) ** Graphically represent on a millimeter paper the experimental points $T^2$ (in order) versus $V$ (in abscesses).

**1.c) ** Get the slope of the straight line that best fits these points.

**1.d) ** Subtract the value of the effective radius of the tube, $R_{ef}$.

**1.e)** Haga una estimación de la incertidumbre (margen de error) del radio efectivo, $\Delta R_{ef}$.

**1.f)** Desmonte con cuidado un lado del tubo y vacíe el agua en un vaso. Completely disassemble the tube and stretch it over the table, measure the distance $L$ between the symmetric marks you have made for each $V$ and deduct in each case the radius $R$ of the tube. Note the values of $L$ and $R$ in the corresponding columns of Table 1.

**1.g) ** Calculate the mean value of $R$ and estimate its uncertainty.

*(Tabla 1 — figura 5: columnas $V\text{ (cm}^3)$, $4T_1\text{ (s)}$, $4T_2\text{ (s)}$, $4T_3\text{ (s)}$, $4T_4\text{ (s)}$, $\bar{T}\text{ (s)}$, $T^2\text{ (s}^2)$, $L\text{ (cm)}$, $R\text{ (mm)}$; filas $V = 30, 40, 50, 60, 70, 80, 90, 100$.)*

---

**2ª parte. Determinación de $\gamma$.**

Reattach the U tube to the wooden bar. Enter $60\text{ cm}^3$ of water and mark the water level in equilibrium on the dash. Make another mark about 20 centimeters above. This shall be the starting position of the water level, $A_0$, for all subsequent measurements. Before measuring, you must practice getting the water level to the ground with this mark, blowing the other side until a slightly higher level is reached, covering the pipe with your finger and letting in some air until the level reaches the mark.

**2.a) ** Measure the amplitudes $A_1$, $A_2$ and $A_3$ after one, two and three complete oscillations, respectively, i.e. at $t_1 = T$, $t_2 = 2T$ and $t_3 = 3T$ (the $T$ period for this water volume has already been measured previously). Repeat the observation of the cushioned oscillation as often as necessary to determine these amplitudes with sufficient precision by successive approximations and markings. The measures are presented in Table 2 (Figure 6).

**2.b) ** Transform the expression (4) to obtain a linear relationship between $\ln(A_n/A_0)$ and $n$. Graphically represent the $(n,\, \ln(A_n/A_0))$ experimental points for $n = 0, 1, 2, 3$ on millimeter paper.

**2.c) ** Get the slope of the straight line that best fits these points and deduct the value of the cushioning coefficient $\gamma$.

**2.d)** Haga una estimación de la incertidumbre $\Delta\gamma$.

<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p1_f1.png]]
*Fig. 1: vertical wooden slat setup*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p2_f2.png]]
*Fig. 2: U-tube clamped to slat*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p3_f3.png]]
*Fig. 3a-3b: U-tube equilibrium and displaced*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p3_f4.png]]
*Fig. 4: damped oscillation amplitude decay*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p5_f5.png]]
*Fig. 5: Tabla 1 measurement table*
<!--fig:end-->
<!--fig:start-->
![[_attachments/P-EXPERIMENTAL-OEF-2009/P-EXPERIMENTAL-OEF-2009_p6_f6.png]]
*Fig. 6: Tabla 2 amplitude measurements*
<!--fig:end-->

**Topic:** [[Fluid Mechanics]], [[Oscillations & Waves]]
**Metodi:** [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Graph Linearization (metodo)|Graph Linearization]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Physical Modeling (metodo)|Physical Modeling]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Error Propagation (competenza)|Error Propagation]]
**Objects:** [[Pipe/Tube (object)|Pipe/Tube]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1cGiCm1VZUDe9nQCzDnh65q11YBBhy6sJ/view)
