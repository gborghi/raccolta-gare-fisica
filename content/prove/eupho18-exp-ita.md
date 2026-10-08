---
title: EuPhO 2018 — Sperimentale
tipo: prova
tags:
  - kg/prova
  - paese/international
  - comp/EuPhO
---
<div class="atom-reader" data-prova="eupho18-exp-ita"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="EuPhO 2018 — Sperimentale — Quesito 1" data-tags="kg/prova,paese/International,comp/EuPhO,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/multi,topic/wave-optics,topic/kinetic-theory,topic/fluid-mechanics,argomento/meccanica,object/membrane,object/tank-container"></span>

<div class="qlang-switch" data-default="it"></div>



**Membrana porosa**

**Note generali.** Fornisci schizzi dettagliati di tutti i montaggi che usi. Stima gli errori solo nella parte A. A seconda del metodo che avrai usato, potresti essere in grado di completare le attività richieste senza utilizzare tutta l'attrezzatura fornita.

Studierai una membrana di ossido di alluminio anodico. La membrana è trasparente; ha spessore $h$ e canali cilindrici di diametro $d$ come mostrato in figura. Il tuo obiettivo è determinare i parametri $h$, $d$ e la porosità $p$ (la frazione di volume dei canali nella membrana). Assumi che la membrana sia otticamente omogenea e si prega di non toccare la superficie della membrana!

**A. Diffusione (5 punti)**

**Strumentazione.** Recipiente a tenuta stagna con una finestra realizzata con la membrana e 2 tubi di collegamento con morsetti (il diametro della finestra è $d_w = 13\ \text{mm}$), dotato di sensore di concentrazione di anidride carbonica (CO$_2$, massa molare $44\ \text{g/mol}$) con limite di lavoro superiore dello 0,5%; accumulatore di energia; 2 ventole con blocco batteria (inserire l'ultima batteria per farle funzionare); plastilina. Non smontare i collegamenti elettrici della configurazione.

Se $c$ rappresenta la concentrazione (numero di molecole per unità di volume) di CO$_2$ a un'estremità di un canale della membrana e $c_0$ all'altra estremità, la densità del flusso di CO$_2$ nel canale è data da $j = D(c - c_0)/h$, dove $D$ è il coefficiente di diffusione. Poiché i canali sono più stretti del cammino libero medio, la velocità di diffusione è determinata dal diametro dei canali: $D \approx v d/3$, dove $v$ è la velocità quadratica media delle molecole di CO$_2$. La temperatura della stanza è $T = (295 \pm 5)\ \text{K}$.

**Compito.** Individua una dipendenza funzionale di come $c - c_0$ cambia nel tempo, studiala sperimentalmente, determinane i parametri e stima gli errori.

**Istruzioni per il sensore di CO$_2$.** Il sensore misura di fatto il rapporto tra il numero di molecole di CO$_2$ e il numero totale di molecole d'aria. Accendi il sensore collegandolo all'accumulatore di energia attraverso una porta USB. L'avvio richiede alcuni minuti. Se spegni il sensore, tutti i dati andranno persi.

Premendo il pulsante SELECT per un secondo, si commuta il sensore tra la modalità di registrazione (r) e quella di navigazione tra i dati registrati (d). In modalità di registrazione, viene aggiunto un record ogni 20 s. La memoria contiene solo gli ultimi 200 record. Passando alla modalità di navigazione si interrompe l'aggiunta di nuovi record, ma il timer continua a funzionare. In questa modalità, con i pulsanti UP e DOWN si naviga tra i record. Al ritorno alla modalità di registrazione si riprende la registrazione di nuovi dati.

Il pulsante di ripristino RST cancella tutti i record e azzera il timer. I pulsanti LEFT e RIGHT non vengono utilizzati.

**B. Interferenza (6 punti)**

**Strumentazione.** Banco ottico; membrana (identica a quella della parte A) su un supporto; laser, $\lambda = 660\ \text{nm}$; 2 polarizzatori (l'asse del polarizzatore è contrassegnato da una linea e forma un angolo di $45^{\circ}$ con il bordo della cornice); fotodiodo (la corrente di cortocircuito è proporzionale all'intensità della luce); multimetro; fili; mollette; 2 righelli; plastilina; carta bianca.

L'intensità della luce riflessa dipende dall'angolo di incidenza $\alpha$ a causa dell'interferenza dei raggi riflessi dalle superfici superiore e inferiore della membrana.

**Compito.** Determina lo spessore $h$ della membrana. Assumi che l'indice di rifrazione della membrana sia $n_o = 1.50$. Per evitare la birifrangenza descritta nella parte C, la luce incidente deve avere polarizzazione perpendicolare al piano di incidenza (piano della figura). Se il contrasto delle interferenze è troppo debole, prova l'altra superficie della membrana.

**C. Birifrangenza (7 punti)**

**Strumentazione.** La stessa della parte B.

L'indice di rifrazione della membrana dipende dalla polarizzazione e dalla direzione di propagazione della luce. La membrana può essere descritta con due indici di rifrazione: $n_o$ e $n_e$, con $|n_e - n_o| \ll n_o$. Quando il raggio laser entra nella membrana, si divide in due fasci con diverse polarizzazioni e velocità. Il raggio 1 è polarizzato in direzione normale al piano di incidenza; il suo indice di rifrazione è $n_1 = n_o$ e non dipende da $\beta_1$. Il raggio 2 è polarizzato parallelamente al piano di incidenza; il suo indice di rifrazione $n_2$ dipende da $\beta_2$:

$$\frac{1}{n_2^2} = \frac{\cos^2\beta_2}{n_o^2} + \frac{\sin^2\beta_2}{n_e^2}.$$

Si può dimostrare che la differenza di cammino ottico tra i raggi vale $\delta = h(n_1\cos\beta_1 - n_2\cos\beta_2)$.

**Compito.** Determina la differenza $\Delta n = |n_e - n_o|$ della membrana. Trova la porosità $p$ usando il grafico fornito di $\Delta n(p)$ (riportato in fondo, dal testo ufficiale EuPhO 2018).

**D. Conclusioni (2 punti)**

**Compito.** Usando i risultati delle parti precedenti e, se necessario, facendo misure addizionali, stima il diametro $d$.

<!--fig:start-->
**p.1** — Membrana porosa con canali cilindrici, spessore h e diametro d
![[_attachments/eupho18-exp-ITA/eupho18-exp-ITA_p1_f1.png]]
<!--fig:end-->

<!--fig:start-->
**p.1** — Riflessione del raggio sulla membrana, angoli alpha
![[_attachments/eupho18-exp-ITA/eupho18-exp-ITA_p1_f2.png]]
<!--fig:end-->

<!--fig:start-->
**p.1** — Birifrangenza: raggi 1 e 2, indici n1 n2, angoli beta
![[_attachments/eupho18-exp-ITA/eupho18-exp-ITA_p1_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.2 (testo ufficiale EN)** — Grafico di Δn in funzione della porosità p
![[_attachments/eupho18-exp-ITA/eupho18-experiment_p2_f1.png]]
<!--fig:end-->

**Topic:** [[Wave Optics]], [[Kinetic Theory]], [[Fluid Mechanics]]
**Metodi:** [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Kinetic Theory of Gases (metodo)|Kinetic Theory of Gases]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Membrane (object)|Membrane]], [[Tank/Container (object)|Tank/Container]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1YkVoFinzGgV2UGdbv9g2kohFXBjJ4nOR/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1t4O-mjQ7oGPRFv8dVpwLsZl9IIZTiJBm/view)


<div class="qlang-split" data-lang="en"></div>

**Porous membrane**

**General remarks.** Provide detailed sketches of all the setups you use. Estimate errors only in part A. Depending on your method, you might be able to complete the tasks without using all the given equipment.

You are going to study a membrane of anodic aluminum oxide. The membrane is transparent; it has thickness $h$ and cylindrical channels of diameter $d$ as shown in figure. Your goal is to determine parameters $h$, $d$ and porosity $p$ (the volume fraction of channels in the membrane). Assume the membrane to be optically homogeneous and please do not touch the surface of the membrane!

<!--fig:start-->
![[_attachments/eupho18-exp-ITA/eupho18-exp-ITA_p1_f1.png]]
*Porous membrane with cylindrical channels, thickness h and diameter d*
<!--fig:end-->

**A. Diffusion (5 pts)**

**Equipment.** Airproof vessel with a membrane window and 2 connecting tubes with clamps (window diameter is $d_w = 13\ \text{mm}$), equipped with carbon dioxide (CO$_2$, molar mass $44\ \text{g/mol}$) concentration sensor with upper working limit of 0.5 %; powerbank; 2 fans with battery block (insert the last battery to operate); glue pads. Do not disassemble electrical connections of the setup.

If $c$ denotes the concentration (number of molecules per volume) of CO$_2$ at one end of a channel and $c_0$ at the other end, the density of CO$_2$ flux in the channel is given by $j = D(c - c_0)/h$; $D$ is the diffusion coefficient. Since channels are narrower than mean free path length, the diffusion rate is determined by the diameter of channels: $D \approx v d/3$; $v$ is the root-mean-square speed of CO$_2$ molecules. The room temperature $T = (295 \pm 5)\ \text{K}$.

**Task.** Suggest a functional dependence of how $c - c_0$ changes in time, study it experimentally, determine the parameters of the dependence and estimate the errors.

**Instruction to the CO$_2$ sensor.** The sensor effectively measures the ratio of the number of CO$_2$ molecules to the total number of air molecules. Turn the sensor on by connecting it to the powerbank with a USB. Starting up takes a few minutes. If you turn the sensor off, all data will be lost.

Pressing button *select* for a second switches the sensor between recording (r) and record-browsing (d) modes. In recording mode, a record is added every 20 s. Memory holds only the last 200 records. Switching to record-browsing mode stops adding new records but timer keeps going. In this mode, buttons *up* and *down* navigate through records. Switching back to recording mode resumes recording of new data.

Reset button *rst* deletes all the records and resets the timer. Buttons *left* and *right* are not used.

**B. Interference (6 pts)**

**Equipment.** Optical bench; membrane (identical to the one in part A) on a support; laser, $\lambda = 660\ \text{nm}$; 2 polarizers (axis of polarizer is marked with a line and forms $45^\circ$ with the edge of the frame); photodiode (short-circuit current is proportional to the light intensity); multimeter; wires; clips; 2 rulers; glue pads; white paper.

The reflection intensity depends on the angle of incidence $\alpha$ due to interference of rays reflected from top and bottom surfaces of the membrane.

<!--fig:start-->
![[_attachments/eupho18-exp-ITA/eupho18-exp-ITA_p1_f2.png]]
*Reflection of the beam on the membrane, angle of incidence alpha*
<!--fig:end-->

**Task.** Determine the thickness $h$ of the membrane. Assume the refractive index of the membrane to be $n_o = 1.50$. To avoid birefringence described in part C incident light should have polarization perpendicular to the plane of incidence (plane of the figure). If the contrast of interference is too weak, try the other surface of the membrane.

**C. Birefringence (7 pts)**

**Equipment:** the same as in part B.

The refractive index of the membrane depends on polarization and propagation direction of light. The membrane can be described with two refractive indices: $n_o$ and $n_e$; $|n_e - n_o| \ll n_o$. When laser beam enters membrane, it splits into two beams with different polarizations and velocities. Beam 1 is polarized normally to the plane of incidence; its refractive index $n_1 = n_o$ and doesn't depend on $\beta_1$. Beam 2 is polarized parallel to the plane of incidence; its refractive index $n_2$ depends on $\beta_2$:

$$\frac{1}{n_2^2} = \frac{\cos^2\beta_2}{n_o^2} + \frac{\sin^2\beta_2}{n_e^2}.$$

<!--fig:start-->
![[_attachments/eupho18-exp-ITA/eupho18-exp-ITA_p1_f3.png]]
*Birefringence: beams 1 and 2, indices n1 and n2, angles beta*
<!--fig:end-->

One can show that the optical path difference between the beams $\delta = h(n_1\cos\beta_1 - n_2\cos\beta_2)$.

**Task.** Determine the difference $\Delta n = |n_e - n_o|$ of the membrane. Find the porosity $p$ using the given plot of $\Delta n(p)$.

<!--fig:start-->
![[_attachments/eupho18-exp-ITA/eupho18-experiment_p2_f1.png]]
*Plot of $\Delta n$ as a function of the porosity $p$ (official EuPhO 2018 text, p.2)*
<!--fig:end-->

**D. Coda (2 pts)**

**Task.** Using results from previous parts and making additional measurements if necessary, estimate the diameter $d$.

**Topic:** [[Wave Optics]], [[Kinetic Theory]], [[Fluid Mechanics]]
**Metodi:** [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Kinetic Theory of Gases (metodo)|Kinetic Theory of Gases]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Error Propagation (competenza)|Error Propagation]], [[Graph Linearization (competenza)|Graph Linearization]]
**Objects:** [[Membrane (object)|Membrane]], [[Tank/Container (object)|Tank/Container]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1YkVoFinzGgV2UGdbv9g2kohFXBjJ4nOR/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/1t4O-mjQ7oGPRFv8dVpwLsZl9IIZTiJBm/view)
