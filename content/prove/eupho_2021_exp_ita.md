---
title: EuPhO 2021 — Sperimentale
tipo: prova
tags:
  - kg/prova
  - paese/international
  - comp/EuPhO
---
<div class="atom-reader" data-prova="eupho_2021_exp_ita"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="EuPhO 2021 — Sperimentale — Quesito 1" data-tags="kg/prova,paese/International,comp/EuPhO,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/mono,topic/magnetism,argomento/elettromagnetismo,object/wire"></span>

<div class="qlang-switch" data-default="it"></div>



E1: Un filo nascosto

Apparato sperimentale e quesiti

Un filo di rame molto lungo corre orizzontalmente ad una profondità sconosciuta $h$ sotto una superficie quadrata orizzontale di lato pari a $L = 100.0\ \text{mm}$. I lati del quadrato sono orientati Ovest-Est (asse $x$) e Sud-Nord (asse $y$), come mostrato in figura. L’origine del sistema di coordinate coincide con l’angolo sud-ovest del quadrato.

Il filo è collegato a una sorgente in corrente continua regolabile (non mostrata in figura), che può fornire una corrente $I$ nell’intervallo da $-5\ \text{A}$ a $5\ \text{A}$. L’inversione del segno della corrente corrisponde ad un’inversione della polarità della sorgente. Una piccola bussola può essere posizionata sulla superficie quadrata (che comprende la sua circonferenza) per rilevare il campo magnetico del filo attraverso l’angolo di deflessione $\varphi$ tra l’ago magnetico e la direzione Nord ($y$). Valori $\varphi$ positivi corrispondono ad una deflessione verso Est, come mostrato in figura, mentre $\varphi$ negativi corrispondono ad una deflessione verso Ovest. Puoi supporre che:

- L’ago magnetico è un dipolo magnetico puntiforme, che può ruotare liberamente attorno all’asse verticale, cioè la bussola è sensibile solo alla componente orizzontale del campo magnetico.
- L’altezza dell’ago sopra la superficie è trascurabile rispetto alla profondità del filo sotto la superficie, cioè l’ago si trova nel piano $xy$.

Progetta il tuo esperimento ed effettua le simulazioni necessarie per eseguire le seguenti attività:

a. Determina l’orientamento del filo rispetto al sistema di coordinate specificandone l’equazione nella forma $y = ax + b$, e stima le incertezze dei parametri $a$ e $b$. Disegna la posizione del filo su un grafico e indica la direzione corrispondente alla corrente positiva $I$.

b. Determina la profondità $h$ del filo sotto la superficie e la componente orizzontale $B_E$ del campo magnetico terrestre. In questa attività non è necessario calcolare esplicitamente le incertezze sperimentali, tuttavia i risultati finali devono essere rappresentati con un numero appropriato di cifre significative.

La permeabilità magnetica del vuoto è $\mu_0 = 4\pi \times 10^{-7}\ \text{T m/A}$.

<!--fig:start-->
![[_attachments/EuPhO_2021_exp_ITA/EuPhO_2021_exp_ITA_p1_f1.png]]
*Superficie quadrata con bussola e assi*
<!--fig:end-->

Descrizione del software di simulazione

Il programma ”command line” simula la misurazione dell’angolo di deflessione $\varphi$ dopo aver fornito la corrente $I$ e posizionato la bussola alle coordinate $x$ e $y$ sulla superficie.

Un tipico output di un singolo ciclo di simulazione del programma è il seguente:

```
Enter I (A) between -5.0 and 5.0: 3.4
Enter X (mm) between 0 and 100: 55
Enter Y (mm) between 0 and 100: 31
PHI = -33 degrees
-------------------------------
Enter I (A) between -5.0 and 5.0: _
```

Primo, inserisci la corrente $I$ in A (il numero tra $-5.0$ e $5.0$), poi le coordinate $x$ e $y$ in mm (i numeri tra 0 e 100). Ciascun input è confermato premendo il tasto Enter. Il programma fornirà in uscita il valore di $\varphi$ (PHI) in gradi (arrotondato a $1^\circ$) e ritornerà allo stato iniziale.

La corrente inserita $I$ sarà arrotondata a $0.1\ \text{A}$, le coordinate inserite $x$, $y$ saranno arrotondate a $1\ \text{mm}$ prima di essere utilizzate nella simulazione. (Non vengono forniti punti nel tentativo di inserire numeri più precisi).

Ogni volta che cambi la posizione della bussola, la sua effettiva posizione usata nella simulazione differirà dalle coordinate inserite per un’incertezza di circa $0.5\ \text{mm}$. (È una simulazione della limitata precisione con cui si posiziona realmente un oggetto).

Ogni volta che hai necessità di uscire dal programma, premi Ctrl+C.

**Topic:** [[Magnetism]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Wire (object)|Wire]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/16856TziBv6s1PIkwSt2SYeEMAqsy8U1k/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/14bq0JJffnASKd-06CwaN97pmcVXvPNcq/view)


<div class="qlang-split" data-lang="en"></div>

E1: Hidden wire

Experimental setup and tasks

A very long copper wire runs horizontally at unknown depth $h$ under a horizontal square surface of side length $L = 100.0\ \text{mm}$. The sides of the square are oriented West-East (the $x$-axis) and South-North (the $y$-axis), as shown in the figure. The origin of the coordinate system coincides with the South-West corner of the square.

The wire is connected to an adjustable DC source (not shown in the figure), which can provide a current $I$ in the range from $-5\ \text{A}$ to $5\ \text{A}$. The reversal of the sign of the current corresponds to a reversal of the polarity of the source. A small compass can be placed on the square surface (including its circumference) to sense the magnetic field of the wire through the deflection angle $\varphi$ between the magnetic needle and the North ($y$) direction. Positive $\varphi$ values correspond to an Eastward deflection, as shown in the figure, while negative $\varphi$ correspond to a Westward deflection. You can assume that:

- The magnetic needle is a point-like magnetic dipole, which can rotate freely around the vertical axis, i.e. the compass is sensitive to the horizontal component of the magnetic field only.
- The height of the needle above the surface is negligible compared to the depth of the wire beneath the surface, i.e. the needle is situated in the $xy$-plane.

Design your experiment and make the necessary simulations to perform the following tasks:

a. Determine the orientation of the wire with respect to the coordinate system by specifying its equation in the form $y = ax + b$, and estimate the uncertainties of the parameters $a$ and $b$. Draw the wire position on a graph and indicate the direction corresponding to a positive current $I$.

b. Determine the depth $h$ of the wire below the surface and the horizontal component $B_E$ of the Earth’s magnetic field. In this task you are not required to calculate the experimental uncertainties explicitly, however, your final results must be represented with an appropriate number of significant digits.

The magnetic permeability of free space is $\mu_0 = 4\pi \times 10^{-7}\ \text{T m/A}$.

<!--fig:start-->
![[_attachments/EuPhO_2021_exp_ITA/EuPhO_2021_exp_ITA_p1_f1.png]]
*Square surface with compass and axes*
<!--fig:end-->

Description of the simulation software

The command line program simulates the measurement of the deflection angle $\varphi$ after providing the current $I$ and placing the compass at the coordinates $x$ and $y$ on the surface.

A typical output of a single simulation cycle of the program looks like:

```
Enter I (A) between -5.0 and 5.0: 3.4
Enter X (mm) between 0 and 100: 55
Enter Y (mm) between 0 and 100: 31
PHI = -33 degrees
-------------------------------
Enter I (A) between -5.0 and 5.0: _
```

First, you enter the current $I$ in A (the number between $-5.0$ and $5.0$), then coordinates $x$ and $y$ in mm (the numbers between 0 and 100). Each input is confirmed with the Enter key. The program will output the value of $\varphi$ (PHI) in degrees (rounded to $1^\circ$) and return to the initial prompt.

The current input $I$ will be rounded to $0.1\ \text{A}$, the coordinate inputs $x$, $y$ will be rounded to $1\ \text{mm}$ before being used in simulation. (There is no point in trying to input more precise numbers).

Every time you change the position of a compass, its real position used in simulation differs from the input coordinates with an error about $0.5\ \text{mm}$. (It is a simulation of a limited precision when you place an object).

Any time you need to quit the program, press Ctrl+C.

**Topic:** [[Magnetism]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Objects:** [[Wire (object)|Wire]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/16856TziBv6s1PIkwSt2SYeEMAqsy8U1k/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/14bq0JJffnASKd-06CwaN97pmcVXvPNcq/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="EuPhO 2021 — Sperimentale — Quesito 2" data-tags="kg/prova,paese/International,comp/EuPhO,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/mono,topic/thermodynamics,argomento/termodinamica"></span>

<div class="qlang-switch" data-default="it"></div>



E2: Cilindro caldo

Introduzione

Un’asta metallica uniforme di lunghezza $L = 30\ \text{cm}$ e raggio $r = 1\ \text{cm}$ è costituita da un metallo sconosciuto e viene conservata a temperatura ambiente $T_0 = 26.9\ ^\circ\text{C} = 300\ \text{K}$. L’asta di metallo ha una massa $m = 460\ \text{g}$. Il tuo compito è determinare le proprietà termiche del metallo sconosciuto. L’asta di metallo può essere riscaldata a una delle sue estremità e le misurazioni della temperatura possono essere eseguite in posizioni personalizzabili lungo l’asta. Il riscaldatore si trova tra $x = 0$ e $x = L_h = 3\ \text{cm}$ (vedi figura). Il riscaldatore può essere programmato specificando una potenza fissa (in watt) e la durata (in secondi) per la quale il riscaldatore viene acceso. Le misurazioni della temperatura vengono effettuate specificando fino a cinque posizioni per i sensori lungo l’asta, insieme alla frequenza, all’ora di inizio e all’ora di fine delle misurazioni. La simulazione mostrerà le letture della temperatura in ”tempo reale” accelerato (circa 10 volte più veloce rispetto al mondo reale).

<!--fig:start-->


<figure class="tikz-fig">
<!-- This file was generated by dvisvgm 3.2.2 -->
<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='198.824295pt' height='66.437852pt' viewBox='-66.007845 -64.691675 198.824295 66.437852'>
<defs>
<pattern id='pat0-0' x='-.99628' y='-.99628' width='2.98883' height='2.98883' viewBox='-.99628 -.99628 2.98883 2.98883' patternUnits='userSpaceOnUse' patternTransform='matrix(1 0 0 -1 -65.8098 -16.099)' overflow='visible'>
<clipPath id='pc0'>
<rect x='-.99628' y='-.99628' width='4.98138' height='4.98138'/>
</clipPath>
<g clip-path='url(#pc0)'>
<path d='M0 0L3.08984 3.08984' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
</g>
</pattern>
<path id='g0-76' d='M3.726027-6.027397C3.815691-6.386052 3.845579-6.495641 4.782067-6.495641C5.080946-6.495641 5.160648-6.495641 5.160648-6.684932C5.160648-6.804483 5.051059-6.804483 5.001245-6.804483C4.672478-6.804483 3.855542-6.774595 3.526775-6.774595C3.227895-6.774595 2.500623-6.804483 2.201743-6.804483C2.132005-6.804483 2.012453-6.804483 2.012453-6.60523C2.012453-6.495641 2.102117-6.495641 2.291407-6.495641C2.311333-6.495641 2.500623-6.495641 2.669988-6.475716C2.849315-6.455791 2.938979-6.445828 2.938979-6.316314C2.938979-6.276463 2.929016-6.246575 2.899128-6.127024L1.564134-.777086C1.464508-.388543 1.444583-.308842 .657534-.308842C.488169-.308842 .388543-.308842 .388543-.109589C.388543 0 .478207 0 .657534 0H5.270237C5.50934 0 5.519303 0 5.579078-.169365L6.366127-2.321295C6.405978-2.430884 6.405978-2.450809 6.405978-2.460772C6.405978-2.500623 6.37609-2.570361 6.286426-2.570361S6.1868-2.520548 6.117061-2.361146C5.778331-1.444583 5.339975-.308842 3.616438-.308842H2.67995C2.540473-.308842 2.520548-.308842 2.460772-.318804C2.361146-.328767 2.331258-.33873 2.331258-.418431C2.331258-.448319 2.331258-.468244 2.381071-.647572L3.726027-6.027397Z'/>
<path id='g0-80' d='M3.01868-3.148194H4.712329C6.127024-3.148194 7.511831-4.184309 7.511831-5.300125C7.511831-6.067248 6.854296-6.804483 5.549191-6.804483H2.321295C2.132005-6.804483 2.022416-6.804483 2.022416-6.615193C2.022416-6.495641 2.11208-6.495641 2.311333-6.495641C2.440847-6.495641 2.620174-6.485679 2.739726-6.475716C2.899128-6.455791 2.958904-6.425903 2.958904-6.316314C2.958904-6.276463 2.948941-6.246575 2.919054-6.127024L1.58406-.777086C1.484433-.388543 1.464508-.308842 .67746-.308842C.508095-.308842 .398506-.308842 .398506-.119552C.398506 0 .518057 0 .547945 0C.826899 0 1.534247-.029888 1.8132-.029888C2.022416-.029888 2.241594-.019925 2.450809-.019925C2.669988-.019925 2.889166 0 3.098381 0C3.16812 0 3.297634 0 3.297634-.199253C3.297634-.308842 3.20797-.308842 3.01868-.308842C2.650062-.308842 2.371108-.308842 2.371108-.488169C2.371108-.547945 2.391034-.597758 2.400996-.657534L3.01868-3.148194ZM3.73599-6.117061C3.825654-6.465753 3.845579-6.495641 4.273973-6.495641H5.230386C6.057285-6.495641 6.585305-6.22665 6.585305-5.539228C6.585305-5.150685 6.386052-4.293898 5.997509-3.935243C5.499377-3.486924 4.901619-3.407223 4.463263-3.407223H3.058531L3.73599-6.117061Z'/>
<path id='g0-84' d='M4.254047-6.047323C4.323786-6.326276 4.363636-6.386052 4.483188-6.41594C4.572852-6.435866 4.901619-6.435866 5.110834-6.435866C6.117061-6.435866 6.56538-6.396015 6.56538-5.618929C6.56538-5.469489 6.525529-5.080946 6.485679-4.821918C6.475716-4.782067 6.455791-4.662516 6.455791-4.632628C6.455791-4.572852 6.485679-4.503113 6.575342-4.503113C6.684932-4.503113 6.704857-4.582814 6.724782-4.732254L6.993773-6.465753C7.003736-6.505604 7.013699-6.60523 7.013699-6.635118C7.013699-6.744707 6.914072-6.744707 6.744707-6.744707H1.215442C.976339-6.744707 .966376-6.734745 .896638-6.545455L.298879-4.79203C.288917-4.772105 .239103-4.632628 .239103-4.612702C.239103-4.552927 .288917-4.503113 .358655-4.503113C.458281-4.503113 .468244-4.552927 .52802-4.712329C1.066002-6.256538 1.325031-6.435866 2.799502-6.435866H3.188045C3.466999-6.435866 3.466999-6.396015 3.466999-6.316314C3.466999-6.256538 3.437111-6.136986 3.427148-6.107098L2.092154-.787049C2.002491-.418431 1.972603-.308842 .9066-.308842C.547945-.308842 .488169-.308842 .488169-.119552C.488169 0 .597758 0 .657534 0C.926526 0 1.205479-.019925 1.474471-.019925C1.753425-.019925 2.042341-.029888 2.321295-.029888S2.879203-.019925 3.148194-.019925C3.437111-.019925 3.73599 0 4.014944 0C4.11457 0 4.234122 0 4.234122-.199253C4.234122-.308842 4.154421-.308842 3.895392-.308842C3.646326-.308842 3.516812-.308842 3.257783-.328767C2.968867-.358655 2.889166-.388543 2.889166-.547945C2.889166-.557908 2.889166-.607721 2.929016-.757161L4.254047-6.047323Z'/>
<path id='g0-120' d='M3.327522-3.008717C3.387298-3.267746 3.616438-4.184309 4.313823-4.184309C4.363636-4.184309 4.60274-4.184309 4.811955-4.054795C4.533001-4.004981 4.333748-3.755915 4.333748-3.516812C4.333748-3.35741 4.443337-3.16812 4.712329-3.16812C4.931507-3.16812 5.250311-3.347447 5.250311-3.745953C5.250311-4.26401 4.662516-4.403487 4.323786-4.403487C3.745953-4.403487 3.39726-3.875467 3.277709-3.646326C3.028643-4.303861 2.49066-4.403487 2.201743-4.403487C1.165629-4.403487 .597758-3.118306 .597758-2.86924C.597758-2.769614 .697385-2.769614 .71731-2.769614C.797011-2.769614 .826899-2.789539 .846824-2.879203C1.185554-3.935243 1.843088-4.184309 2.181818-4.184309C2.371108-4.184309 2.719801-4.094645 2.719801-3.516812C2.719801-3.20797 2.550436-2.540473 2.181818-1.145704C2.022416-.52802 1.673724-.109589 1.235367-.109589C1.175592-.109589 .946451-.109589 .737235-.239103C.986301-.288917 1.205479-.498132 1.205479-.777086C1.205479-1.046077 .986301-1.125778 .836862-1.125778C.537983-1.125778 .288917-.86675 .288917-.547945C.288917-.089664 .787049 .109589 1.225405 .109589C1.882939 .109589 2.241594-.587796 2.271482-.647572C2.391034-.278954 2.749689 .109589 3.347447 .109589C4.373599 .109589 4.941469-1.175592 4.941469-1.424658C4.941469-1.524284 4.851806-1.524284 4.821918-1.524284C4.732254-1.524284 4.712329-1.484433 4.692403-1.414695C4.363636-.348692 3.686177-.109589 3.367372-.109589C2.978829-.109589 2.819427-.428394 2.819427-.767123C2.819427-.986301 2.879203-1.205479 2.988792-1.643836L3.327522-3.008717Z'/>
<path id='g1-104' d='M2.182814-4.630635C2.189788-4.644583 2.21071-4.735243 2.21071-4.742217C2.21071-4.777086 2.182814-4.839851 2.099128-4.839851C1.959651-4.839851 1.380822-4.78406 1.206476-4.770112C1.150685-4.763138 1.053051-4.756164 1.053051-4.609714C1.053051-4.51208 1.150685-4.51208 1.234371-4.51208C1.569116-4.51208 1.569116-4.463263 1.569116-4.407472C1.569116-4.358655 1.555168-4.316812 1.54122-4.254047L.557908-.306849C.523039-.18132 .523039-.167372 .523039-.153425C.523039-.048817 .606725 .069738 .760149 .069738C.836862 .069738 .969365 .034869 1.046077-.111582C1.066999-.153425 1.129763-.404483 1.164633-.550934L1.325031-1.171606C1.345953-1.276214 1.415691-1.54122 1.436613-1.645828C1.506351-1.910834 1.506351-1.917808 1.645828-2.140971C1.868991-2.48269 2.217684-2.880199 2.761644-2.880199C3.152179-2.880199 3.173101-2.559402 3.173101-2.39203C3.173101-1.973599 2.873225-1.199502 2.761644-.9066C2.684932-.711333 2.657036-.648568 2.657036-.530012C2.657036-.160399 2.963885 .069738 3.319552 .069738C4.016936 .069738 4.323786-.892653 4.323786-.99726C4.323786-1.08792 4.233126-1.08792 4.212204-1.08792C4.11457-1.08792 4.107597-1.046077 4.079701-.969365C3.919303-.411457 3.612453-.125529 3.340473-.125529C3.194022-.125529 3.166127-.223163 3.166127-.369614C3.166127-.530012 3.200996-.620672 3.326526-.934496C3.410212-1.150685 3.696139-1.889913 3.696139-2.280448C3.696139-2.39203 3.696139-2.684932 3.438107-2.887173C3.319552-2.977833 3.11731-3.075467 2.789539-3.075467C2.280448-3.075467 1.910834-2.796513 1.652802-2.496638L2.182814-4.630635Z'/>
<path id='g2-49' d='M2.336239-4.435367C2.336239-4.623661 2.322291-4.630635 2.127024-4.630635C1.680697-4.191283 1.046077-4.184309 .760149-4.184309V-3.93325C.927522-3.93325 1.387796-3.93325 1.771357-4.128518V-.571856C1.771357-.341719 1.771357-.251059 1.073973-.251059H.808966V0C.934496-.006974 1.792279-.027895 2.050311-.027895C2.266501-.027895 3.145205-.006974 3.29863 0V-.251059H3.033624C2.336239-.251059 2.336239-.341719 2.336239-.571856V-4.435367Z'/>
<path id='g2-50' d='M3.521793-1.26924H3.284682C3.263761-1.115816 3.194022-.704359 3.103362-.63462C3.047572-.592777 2.510585-.592777 2.412951-.592777H1.129763C1.862017-1.241345 2.106102-1.436613 2.524533-1.764384C3.040598-2.175841 3.521793-2.608219 3.521793-3.270735C3.521793-4.11457 2.782565-4.630635 1.889913-4.630635C1.025156-4.630635 .439352-4.02391 .439352-3.382316C.439352-3.02665 .739228-2.991781 .808966-2.991781C.976339-2.991781 1.17858-3.110336 1.17858-3.361395C1.17858-3.486924 1.129763-3.731009 .767123-3.731009C.983313-4.226152 1.457534-4.379577 1.785305-4.379577C2.48269-4.379577 2.84533-3.835616 2.84533-3.270735C2.84533-2.66401 2.412951-2.182814 2.189788-1.931756L.509091-.27198C.439352-.209215 .439352-.195268 .439352 0H3.312578L3.521793-1.26924Z'/>
<path id='g2-51' d='M1.903861-2.329265C2.447821-2.329265 2.838356-1.952677 2.838356-1.206476C2.838356-.341719 2.336239-.083686 1.931756-.083686C1.652802-.083686 1.039103-.160399 .746202-.571856C1.073973-.585803 1.150685-.81594 1.150685-.962391C1.150685-1.185554 .983313-1.345953 .767123-1.345953C.571856-1.345953 .376588-1.227397 .376588-.941469C.376588-.285928 1.101868 .139477 1.945704 .139477C2.915068 .139477 3.584558-.509091 3.584558-1.206476C3.584558-1.750436 3.138232-2.294396 2.371108-2.454795C3.103362-2.719801 3.368369-3.242839 3.368369-3.668244C3.368369-4.219178 2.733748-4.630635 1.959651-4.630635S.592777-4.254047 .592777-3.696139C.592777-3.459029 .746202-3.326526 .955417-3.326526C1.171606-3.326526 1.311083-3.486924 1.311083-3.682192C1.311083-3.884433 1.171606-4.030884 .955417-4.044832C1.199502-4.351681 1.680697-4.428394 1.93873-4.428394C2.252553-4.428394 2.691905-4.274969 2.691905-3.668244C2.691905-3.375342 2.594271-3.054545 2.412951-2.838356C2.182814-2.57335 1.987547-2.559402 1.638854-2.538481C1.464508-2.524533 1.45056-2.524533 1.415691-2.517559C1.401743-2.517559 1.345953-2.503611 1.345953-2.426899C1.345953-2.329265 1.408717-2.329265 1.527273-2.329265H1.903861Z'/>
</defs>
<g id='page1'>
<path d='M-65.808595-16.097655V-35.9414H132.6172V-16.097655Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-65.808595-16.097655V-35.9414H-51.6367V-16.097655Z' fill='url(#pat0-0)'/>
<path d='M-51.6367-16.097655V-35.9414' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-18.9609-26.01953C-18.9609-26.8477-19.6289-27.5156-20.4531-27.5156C-21.2813-27.5156-21.9492-26.8477-21.9492-26.01953C-21.9492-25.19531-21.2813-24.52734-20.4531-24.52734C-19.6289-24.52734-18.9609-25.19531-18.9609-26.01953Z'/>
<g transform='matrix(1 0 0 1 40.2094 3.395)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-84'/>
<use x='-59.987831' y='-14.604611' xlink:href='#g2-49'/>
</g>
<path d='M9.3867-26.01953C9.3867-26.8477 8.7187-27.5156 7.8906-27.5156C7.0664-27.5156 6.3984-26.8477 6.3984-26.01953C6.3984-25.19531 7.0664-24.52734 7.8906-24.52734C8.7187-24.52734 9.3867-25.19531 9.3867-26.01953Z'/>
<g transform='matrix(1 0 0 1 68.55615 3.395)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-84'/>
<use x='-59.987831' y='-14.604611' xlink:href='#g2-50'/>
</g>
<path d='M100.0972-26.01953C100.0972-26.8477 99.4262-27.5156 98.6012-27.5156C97.7772-27.5156 97.1052-26.8477 97.1052-26.01953C97.1052-25.19531 97.7772-24.52734 98.6012-24.52734C99.4262-24.52734 100.0972-25.19531 100.0972-26.01953Z'/>
<g transform='matrix(1 0 0 1 159.2659 3.395)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-84'/>
<use x='-59.987831' y='-14.604611' xlink:href='#g2-51'/>
</g>
<path d='M-65.808595-35.9414V-57.2031' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10' stroke-dasharray='.3985 1.99255'/>
<path d='M132.6172-35.9414V-57.2031' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10' stroke-dasharray='.3985 1.99255'/>
<path d='M-61.22656-54.3672H128.0352' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-64.98832-54.367225C-64.52738-54.253943-62.49613-53.617225-61.226603-52.92191V-55.81254C-62.49613-55.117225-64.52738-54.480506-64.98832-54.367225Z'/>
<path d='M-64.98832-54.367225C-64.52738-54.253943-62.49613-53.617225-61.226603-52.92191V-55.81254C-62.49613-55.117225-64.52738-54.480506-64.98832-54.367225Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M131.79686-54.367225C131.33592-54.480506 129.30467-55.117225 128.035137-55.81254V-52.92191C129.30467-53.617225 131.33592-54.253943 131.79686-54.367225Z'/>
<path d='M131.79686-54.367225C131.33592-54.480506 129.30467-55.117225 128.035137-55.81254V-52.92191C129.30467-53.617225 131.33592-54.253943 131.79686-54.367225Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 95.8237 -41.7882)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-76'/>
</g>
<path d='M-61.22656-44.4453H-56.21875' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-64.98832-44.445312C-64.52738-44.33203-62.49613-43.695312-61.226603-43V-45.89062C-62.49613-45.195312-64.52738-44.558593-64.98832-44.445312Z'/>
<path d='M-64.98832-44.445312C-64.52738-44.33203-62.49613-43.695312-61.226603-43V-45.89062C-62.49613-45.195312-64.52738-44.558593-64.98832-44.445312Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-52.45698-44.445312C-52.91792-44.558593-54.94917-45.195312-56.2187-45.89062V-43C-54.94917-43.695312-52.91792-44.33203-52.45698-44.445312Z'/>
<path d='M-52.45698-44.445312C-52.91792-44.558593-54.94917-45.195312-56.2187-45.89062V-43C-54.94917-43.695312-52.91792-44.33203-52.45698-44.445312Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 1.1153 -33.9281)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-76'/>
<use x='-59.029616' y='-14.604611' xlink:href='#g1-104'/>
</g>
<g transform='matrix(1 0 0 1 3.1967 10.32768)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-80'/>
</g>
<path d='M-65.808595-.5078H-33.543' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-29.78123-.507813C-30.24217-.621094-32.27342-1.257813-33.542951-1.953121V.937499C-32.27342 .242187-30.24217-.394532-29.78123-.507813Z'/>
<path d='M-29.78123-.507813C-30.24217-.621094-32.27342-1.257813-33.542951-1.953121V.937499C-32.27342 .242187-30.24217-.394532-29.78123-.507813Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 40.3707 17.73558)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-120'/>
</g>
</g>
</svg>
</figure>


*Asta metallica con riscaldatore e sensori*
<!--fig:end-->

Si può presumere che tutta la potenza di riscaldamento vada nell’asta e che l’asta perda calore nell’ambiente circostante tramite il trasferimento di calore con l’aria e la radiazione di corpo nero. Il trasferimento di calore con l’aria è lineare nella temperatura dell’asta e può essere descritto da un coefficiente $\alpha$ tale che il trasferimento di calore per unità di area e per unità di tempo è $\alpha(T - T_0)$. L’aria è ben ventilata in modo che si possa assumere che $\alpha$ sia costante su tutta la superficie dell’asta e indipendente dalla temperatura della superficie. La perdita di calore tramite radiazione di corpo nero può essere descritta usando la legge di Stefan-Boltzmann modificata con emissività $\beta$ tale che la perdita di calore per radiazione per unità di area e per unità di tempo è $\beta\sigma(T^4 - T_0^4)$, dove $\sigma = 5.67 \times 10^{-8}\ \text{W/(m}^2\,\text{K}^4)$. Similmente ad $\alpha$, si può assumere che l’emissività sia costante in tutta l’asta e indipendente dalla temperatura. L’asta è inoltre caratterizzata dalla conducibilità termica $k$ (tale che il flusso di calore lungo $x$ è $-k\,dT/dx$) e dal calore specifico $c$.

Quesito

Il compito è determinare il calore specifico del metallo sconosciuto, $c$ (unità $\text{J/(K kg)}$), la conduttività termica $k$ (unità $\text{W/(m K)}$), e i coefficienti della perdita di calore $\alpha$ (unità $\text{W/(m}^2\,\text{K)}$) e $\beta$ (adimensionale). Dovresti tentare di trovare i valori in un intervallo di incertezza del 10 % del valore vero. Questo perché ci sono varie fonti di errore, come le fluttuazioni gaussiane sia nella definizione delle posizioni dei sensori, sia nelle misurazioni della temperatura. Le dimensioni degli errori possono essere trovate osservando le fluttuazioni nell’output.

Come per tutti gli esperimenti, devi fornire tabelle di dati chiaramente etichettate, grafici chiaramente etichettati e derivazioni di formule sufficienti per chiarire cosa hai misurato e come stai ricavando i tuoi risultati.

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/16856TziBv6s1PIkwSt2SYeEMAqsy8U1k/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/14bq0JJffnASKd-06CwaN97pmcVXvPNcq/view)


<div class="qlang-split" data-lang="en"></div>

E2: Hot Cylinder

Introduction

A uniform metal rod of length $L = 30\ \text{cm}$ and radius $r = 1\ \text{cm}$ is made of an unknown metal and is kept at room temperature $T_0 = 26.9\ ^\circ\text{C} = 300\ \text{K}$. The metal rod is weighed to be $m = 460\ \text{g}$. Your task is to determine the thermal properties of the unknown metal. The metal rod can be heated at one of its ends, and temperature measurements can be performed on customizable locations along the rod. The heater is located between $x = 0$ and $x = L_h = 3\ \text{cm}$ (see fig). The heater can be programmed by specifying a fixed power (in watts) and the duration (in seconds) for which the heater is turned on for. Temperature measurements are made by specifying up to five locations for the sensors along the rod, alongside with the frequency, starting time and the ending time of the measurements. The simulation will show the temperature readings in accelerated ”real time” (running around 10 times faster than in the real world).

<!--fig:start-->


<figure class="tikz-fig">
<!-- This file was generated by dvisvgm 3.2.2 -->
<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='198.824295pt' height='66.437852pt' viewBox='-66.007845 -64.691675 198.824295 66.437852'>
<defs>
<pattern id='pat0-0' x='-.99628' y='-.99628' width='2.98883' height='2.98883' viewBox='-.99628 -.99628 2.98883 2.98883' patternUnits='userSpaceOnUse' patternTransform='matrix(1 0 0 -1 -65.8098 -16.099)' overflow='visible'>
<clipPath id='pc0'>
<rect x='-.99628' y='-.99628' width='4.98138' height='4.98138'/>
</clipPath>
<g clip-path='url(#pc0)'>
<path d='M0 0L3.08984 3.08984' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
</g>
</pattern>
<path id='g0-76' d='M3.726027-6.027397C3.815691-6.386052 3.845579-6.495641 4.782067-6.495641C5.080946-6.495641 5.160648-6.495641 5.160648-6.684932C5.160648-6.804483 5.051059-6.804483 5.001245-6.804483C4.672478-6.804483 3.855542-6.774595 3.526775-6.774595C3.227895-6.774595 2.500623-6.804483 2.201743-6.804483C2.132005-6.804483 2.012453-6.804483 2.012453-6.60523C2.012453-6.495641 2.102117-6.495641 2.291407-6.495641C2.311333-6.495641 2.500623-6.495641 2.669988-6.475716C2.849315-6.455791 2.938979-6.445828 2.938979-6.316314C2.938979-6.276463 2.929016-6.246575 2.899128-6.127024L1.564134-.777086C1.464508-.388543 1.444583-.308842 .657534-.308842C.488169-.308842 .388543-.308842 .388543-.109589C.388543 0 .478207 0 .657534 0H5.270237C5.50934 0 5.519303 0 5.579078-.169365L6.366127-2.321295C6.405978-2.430884 6.405978-2.450809 6.405978-2.460772C6.405978-2.500623 6.37609-2.570361 6.286426-2.570361S6.1868-2.520548 6.117061-2.361146C5.778331-1.444583 5.339975-.308842 3.616438-.308842H2.67995C2.540473-.308842 2.520548-.308842 2.460772-.318804C2.361146-.328767 2.331258-.33873 2.331258-.418431C2.331258-.448319 2.331258-.468244 2.381071-.647572L3.726027-6.027397Z'/>
<path id='g0-80' d='M3.01868-3.148194H4.712329C6.127024-3.148194 7.511831-4.184309 7.511831-5.300125C7.511831-6.067248 6.854296-6.804483 5.549191-6.804483H2.321295C2.132005-6.804483 2.022416-6.804483 2.022416-6.615193C2.022416-6.495641 2.11208-6.495641 2.311333-6.495641C2.440847-6.495641 2.620174-6.485679 2.739726-6.475716C2.899128-6.455791 2.958904-6.425903 2.958904-6.316314C2.958904-6.276463 2.948941-6.246575 2.919054-6.127024L1.58406-.777086C1.484433-.388543 1.464508-.308842 .67746-.308842C.508095-.308842 .398506-.308842 .398506-.119552C.398506 0 .518057 0 .547945 0C.826899 0 1.534247-.029888 1.8132-.029888C2.022416-.029888 2.241594-.019925 2.450809-.019925C2.669988-.019925 2.889166 0 3.098381 0C3.16812 0 3.297634 0 3.297634-.199253C3.297634-.308842 3.20797-.308842 3.01868-.308842C2.650062-.308842 2.371108-.308842 2.371108-.488169C2.371108-.547945 2.391034-.597758 2.400996-.657534L3.01868-3.148194ZM3.73599-6.117061C3.825654-6.465753 3.845579-6.495641 4.273973-6.495641H5.230386C6.057285-6.495641 6.585305-6.22665 6.585305-5.539228C6.585305-5.150685 6.386052-4.293898 5.997509-3.935243C5.499377-3.486924 4.901619-3.407223 4.463263-3.407223H3.058531L3.73599-6.117061Z'/>
<path id='g0-84' d='M4.254047-6.047323C4.323786-6.326276 4.363636-6.386052 4.483188-6.41594C4.572852-6.435866 4.901619-6.435866 5.110834-6.435866C6.117061-6.435866 6.56538-6.396015 6.56538-5.618929C6.56538-5.469489 6.525529-5.080946 6.485679-4.821918C6.475716-4.782067 6.455791-4.662516 6.455791-4.632628C6.455791-4.572852 6.485679-4.503113 6.575342-4.503113C6.684932-4.503113 6.704857-4.582814 6.724782-4.732254L6.993773-6.465753C7.003736-6.505604 7.013699-6.60523 7.013699-6.635118C7.013699-6.744707 6.914072-6.744707 6.744707-6.744707H1.215442C.976339-6.744707 .966376-6.734745 .896638-6.545455L.298879-4.79203C.288917-4.772105 .239103-4.632628 .239103-4.612702C.239103-4.552927 .288917-4.503113 .358655-4.503113C.458281-4.503113 .468244-4.552927 .52802-4.712329C1.066002-6.256538 1.325031-6.435866 2.799502-6.435866H3.188045C3.466999-6.435866 3.466999-6.396015 3.466999-6.316314C3.466999-6.256538 3.437111-6.136986 3.427148-6.107098L2.092154-.787049C2.002491-.418431 1.972603-.308842 .9066-.308842C.547945-.308842 .488169-.308842 .488169-.119552C.488169 0 .597758 0 .657534 0C.926526 0 1.205479-.019925 1.474471-.019925C1.753425-.019925 2.042341-.029888 2.321295-.029888S2.879203-.019925 3.148194-.019925C3.437111-.019925 3.73599 0 4.014944 0C4.11457 0 4.234122 0 4.234122-.199253C4.234122-.308842 4.154421-.308842 3.895392-.308842C3.646326-.308842 3.516812-.308842 3.257783-.328767C2.968867-.358655 2.889166-.388543 2.889166-.547945C2.889166-.557908 2.889166-.607721 2.929016-.757161L4.254047-6.047323Z'/>
<path id='g0-120' d='M3.327522-3.008717C3.387298-3.267746 3.616438-4.184309 4.313823-4.184309C4.363636-4.184309 4.60274-4.184309 4.811955-4.054795C4.533001-4.004981 4.333748-3.755915 4.333748-3.516812C4.333748-3.35741 4.443337-3.16812 4.712329-3.16812C4.931507-3.16812 5.250311-3.347447 5.250311-3.745953C5.250311-4.26401 4.662516-4.403487 4.323786-4.403487C3.745953-4.403487 3.39726-3.875467 3.277709-3.646326C3.028643-4.303861 2.49066-4.403487 2.201743-4.403487C1.165629-4.403487 .597758-3.118306 .597758-2.86924C.597758-2.769614 .697385-2.769614 .71731-2.769614C.797011-2.769614 .826899-2.789539 .846824-2.879203C1.185554-3.935243 1.843088-4.184309 2.181818-4.184309C2.371108-4.184309 2.719801-4.094645 2.719801-3.516812C2.719801-3.20797 2.550436-2.540473 2.181818-1.145704C2.022416-.52802 1.673724-.109589 1.235367-.109589C1.175592-.109589 .946451-.109589 .737235-.239103C.986301-.288917 1.205479-.498132 1.205479-.777086C1.205479-1.046077 .986301-1.125778 .836862-1.125778C.537983-1.125778 .288917-.86675 .288917-.547945C.288917-.089664 .787049 .109589 1.225405 .109589C1.882939 .109589 2.241594-.587796 2.271482-.647572C2.391034-.278954 2.749689 .109589 3.347447 .109589C4.373599 .109589 4.941469-1.175592 4.941469-1.424658C4.941469-1.524284 4.851806-1.524284 4.821918-1.524284C4.732254-1.524284 4.712329-1.484433 4.692403-1.414695C4.363636-.348692 3.686177-.109589 3.367372-.109589C2.978829-.109589 2.819427-.428394 2.819427-.767123C2.819427-.986301 2.879203-1.205479 2.988792-1.643836L3.327522-3.008717Z'/>
<path id='g1-104' d='M2.182814-4.630635C2.189788-4.644583 2.21071-4.735243 2.21071-4.742217C2.21071-4.777086 2.182814-4.839851 2.099128-4.839851C1.959651-4.839851 1.380822-4.78406 1.206476-4.770112C1.150685-4.763138 1.053051-4.756164 1.053051-4.609714C1.053051-4.51208 1.150685-4.51208 1.234371-4.51208C1.569116-4.51208 1.569116-4.463263 1.569116-4.407472C1.569116-4.358655 1.555168-4.316812 1.54122-4.254047L.557908-.306849C.523039-.18132 .523039-.167372 .523039-.153425C.523039-.048817 .606725 .069738 .760149 .069738C.836862 .069738 .969365 .034869 1.046077-.111582C1.066999-.153425 1.129763-.404483 1.164633-.550934L1.325031-1.171606C1.345953-1.276214 1.415691-1.54122 1.436613-1.645828C1.506351-1.910834 1.506351-1.917808 1.645828-2.140971C1.868991-2.48269 2.217684-2.880199 2.761644-2.880199C3.152179-2.880199 3.173101-2.559402 3.173101-2.39203C3.173101-1.973599 2.873225-1.199502 2.761644-.9066C2.684932-.711333 2.657036-.648568 2.657036-.530012C2.657036-.160399 2.963885 .069738 3.319552 .069738C4.016936 .069738 4.323786-.892653 4.323786-.99726C4.323786-1.08792 4.233126-1.08792 4.212204-1.08792C4.11457-1.08792 4.107597-1.046077 4.079701-.969365C3.919303-.411457 3.612453-.125529 3.340473-.125529C3.194022-.125529 3.166127-.223163 3.166127-.369614C3.166127-.530012 3.200996-.620672 3.326526-.934496C3.410212-1.150685 3.696139-1.889913 3.696139-2.280448C3.696139-2.39203 3.696139-2.684932 3.438107-2.887173C3.319552-2.977833 3.11731-3.075467 2.789539-3.075467C2.280448-3.075467 1.910834-2.796513 1.652802-2.496638L2.182814-4.630635Z'/>
<path id='g2-49' d='M2.336239-4.435367C2.336239-4.623661 2.322291-4.630635 2.127024-4.630635C1.680697-4.191283 1.046077-4.184309 .760149-4.184309V-3.93325C.927522-3.93325 1.387796-3.93325 1.771357-4.128518V-.571856C1.771357-.341719 1.771357-.251059 1.073973-.251059H.808966V0C.934496-.006974 1.792279-.027895 2.050311-.027895C2.266501-.027895 3.145205-.006974 3.29863 0V-.251059H3.033624C2.336239-.251059 2.336239-.341719 2.336239-.571856V-4.435367Z'/>
<path id='g2-50' d='M3.521793-1.26924H3.284682C3.263761-1.115816 3.194022-.704359 3.103362-.63462C3.047572-.592777 2.510585-.592777 2.412951-.592777H1.129763C1.862017-1.241345 2.106102-1.436613 2.524533-1.764384C3.040598-2.175841 3.521793-2.608219 3.521793-3.270735C3.521793-4.11457 2.782565-4.630635 1.889913-4.630635C1.025156-4.630635 .439352-4.02391 .439352-3.382316C.439352-3.02665 .739228-2.991781 .808966-2.991781C.976339-2.991781 1.17858-3.110336 1.17858-3.361395C1.17858-3.486924 1.129763-3.731009 .767123-3.731009C.983313-4.226152 1.457534-4.379577 1.785305-4.379577C2.48269-4.379577 2.84533-3.835616 2.84533-3.270735C2.84533-2.66401 2.412951-2.182814 2.189788-1.931756L.509091-.27198C.439352-.209215 .439352-.195268 .439352 0H3.312578L3.521793-1.26924Z'/>
<path id='g2-51' d='M1.903861-2.329265C2.447821-2.329265 2.838356-1.952677 2.838356-1.206476C2.838356-.341719 2.336239-.083686 1.931756-.083686C1.652802-.083686 1.039103-.160399 .746202-.571856C1.073973-.585803 1.150685-.81594 1.150685-.962391C1.150685-1.185554 .983313-1.345953 .767123-1.345953C.571856-1.345953 .376588-1.227397 .376588-.941469C.376588-.285928 1.101868 .139477 1.945704 .139477C2.915068 .139477 3.584558-.509091 3.584558-1.206476C3.584558-1.750436 3.138232-2.294396 2.371108-2.454795C3.103362-2.719801 3.368369-3.242839 3.368369-3.668244C3.368369-4.219178 2.733748-4.630635 1.959651-4.630635S.592777-4.254047 .592777-3.696139C.592777-3.459029 .746202-3.326526 .955417-3.326526C1.171606-3.326526 1.311083-3.486924 1.311083-3.682192C1.311083-3.884433 1.171606-4.030884 .955417-4.044832C1.199502-4.351681 1.680697-4.428394 1.93873-4.428394C2.252553-4.428394 2.691905-4.274969 2.691905-3.668244C2.691905-3.375342 2.594271-3.054545 2.412951-2.838356C2.182814-2.57335 1.987547-2.559402 1.638854-2.538481C1.464508-2.524533 1.45056-2.524533 1.415691-2.517559C1.401743-2.517559 1.345953-2.503611 1.345953-2.426899C1.345953-2.329265 1.408717-2.329265 1.527273-2.329265H1.903861Z'/>
</defs>
<g id='page1'>
<path d='M-65.808595-16.097655V-35.9414H132.6172V-16.097655Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-65.808595-16.097655V-35.9414H-51.6367V-16.097655Z' fill='url(#pat0-0)'/>
<path d='M-51.6367-16.097655V-35.9414' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-18.9609-26.01953C-18.9609-26.8477-19.6289-27.5156-20.4531-27.5156C-21.2813-27.5156-21.9492-26.8477-21.9492-26.01953C-21.9492-25.19531-21.2813-24.52734-20.4531-24.52734C-19.6289-24.52734-18.9609-25.19531-18.9609-26.01953Z'/>
<g transform='matrix(1 0 0 1 40.2094 3.395)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-84'/>
<use x='-59.987831' y='-14.604611' xlink:href='#g2-49'/>
</g>
<path d='M9.3867-26.01953C9.3867-26.8477 8.7187-27.5156 7.8906-27.5156C7.0664-27.5156 6.3984-26.8477 6.3984-26.01953C6.3984-25.19531 7.0664-24.52734 7.8906-24.52734C8.7187-24.52734 9.3867-25.19531 9.3867-26.01953Z'/>
<g transform='matrix(1 0 0 1 68.55615 3.395)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-84'/>
<use x='-59.987831' y='-14.604611' xlink:href='#g2-50'/>
</g>
<path d='M100.0972-26.01953C100.0972-26.8477 99.4262-27.5156 98.6012-27.5156C97.7772-27.5156 97.1052-26.8477 97.1052-26.01953C97.1052-25.19531 97.7772-24.52734 98.6012-24.52734C99.4262-24.52734 100.0972-25.19531 100.0972-26.01953Z'/>
<g transform='matrix(1 0 0 1 159.2659 3.395)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-84'/>
<use x='-59.987831' y='-14.604611' xlink:href='#g2-51'/>
</g>
<path d='M-65.808595-35.9414V-57.2031' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10' stroke-dasharray='.3985 1.99255'/>
<path d='M132.6172-35.9414V-57.2031' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10' stroke-dasharray='.3985 1.99255'/>
<path d='M-61.22656-54.3672H128.0352' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-64.98832-54.367225C-64.52738-54.253943-62.49613-53.617225-61.226603-52.92191V-55.81254C-62.49613-55.117225-64.52738-54.480506-64.98832-54.367225Z'/>
<path d='M-64.98832-54.367225C-64.52738-54.253943-62.49613-53.617225-61.226603-52.92191V-55.81254C-62.49613-55.117225-64.52738-54.480506-64.98832-54.367225Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M131.79686-54.367225C131.33592-54.480506 129.30467-55.117225 128.035137-55.81254V-52.92191C129.30467-53.617225 131.33592-54.253943 131.79686-54.367225Z'/>
<path d='M131.79686-54.367225C131.33592-54.480506 129.30467-55.117225 128.035137-55.81254V-52.92191C129.30467-53.617225 131.33592-54.253943 131.79686-54.367225Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 95.8237 -41.7882)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-76'/>
</g>
<path d='M-61.22656-44.4453H-56.21875' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-64.98832-44.445312C-64.52738-44.33203-62.49613-43.695312-61.226603-43V-45.89062C-62.49613-45.195312-64.52738-44.558593-64.98832-44.445312Z'/>
<path d='M-64.98832-44.445312C-64.52738-44.33203-62.49613-43.695312-61.226603-43V-45.89062C-62.49613-45.195312-64.52738-44.558593-64.98832-44.445312Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-52.45698-44.445312C-52.91792-44.558593-54.94917-45.195312-56.2187-45.89062V-43C-54.94917-43.695312-52.91792-44.33203-52.45698-44.445312Z'/>
<path d='M-52.45698-44.445312C-52.91792-44.558593-54.94917-45.195312-56.2187-45.89062V-43C-54.94917-43.695312-52.91792-44.33203-52.45698-44.445312Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 1.1153 -33.9281)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-76'/>
<use x='-59.029616' y='-14.604611' xlink:href='#g1-104'/>
</g>
<g transform='matrix(1 0 0 1 3.1967 10.32768)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-80'/>
</g>
<path d='M-65.808595-.5078H-33.543' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<path d='M-29.78123-.507813C-30.24217-.621094-32.27342-1.257813-33.542951-1.953121V.937499C-32.27342 .242187-30.24217-.394532-29.78123-.507813Z'/>
<path d='M-29.78123-.507813C-30.24217-.621094-32.27342-1.257813-33.542951-1.953121V.937499C-32.27342 .242187-30.24217-.394532-29.78123-.507813Z' stroke='#000' fill='none' stroke-width='.3985' stroke-miterlimit='10'/>
<g transform='matrix(1 0 0 1 40.3707 17.73558)'>
<use x='-65.809762' y='-16.098992' xlink:href='#g0-120'/>
</g>
</g>
</svg>
</figure>


*Metal rod with heater and sensors*
<!--fig:end-->

You may assume that all of the heating power goes into the rod, and that the rod loses heat to its surroundings via heat transfer with air and black body radiation. Heat transfer with air is linear in temperature of the rod, and can be described by a coefficient $\alpha$ such that the heat transfer per unit area per unit time is $\alpha(T - T_0)$. The air is well-ventilated such that $\alpha$ can be assumed to be constant throughout the surface of the rod and independent of the temperature of the surface. Heat loss via black body radiation can be described using the Stefan-Boltzmann law modified with emissivity $\beta$ such that the heat loss to radiation per unit area per unit time is $\beta\sigma(T^4 - T_0^4)$, where $\sigma = 5.67 \times 10^{-8}\ \text{W/(m}^2\,\text{K}^4)$. Similar to $\alpha$, the emissivity can be assumed to be constant throughout the rod, and independent of temperature. The rod is further characterised by the thermal conductivity $k$ (such that the heat flux density along $x$ is $-k\,dT/dx$) and the specific heat capacity $c$.

Task

The task is to determine the specific heat of the unknown metal, $c$ (units $\text{J/(K kg)}$), the thermal conductivity $k$ (units $\text{W/(m K)}$), and the heat loss coefficients $\alpha$ (units $\text{W/(m}^2\,\text{K)}$) and $\beta$ (dimensionless). You should aim to find the values within 10 % of the true value. This is because there are various sources of errors, such as Gaussian fluctuations in both defining the locations of the sensors, and the taking the temperature measurements. The sizes of the errors can be found by observing the fluctuations in the output.

As with all experiments, you must provide clearly labelled tables of data, clearly labelled graphs, and sufficient formulae derivations to make it clear what you have measured, and how you are deriving your results.

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/16856TziBv6s1PIkwSt2SYeEMAqsy8U1k/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/14bq0JJffnASKd-06CwaN97pmcVXvPNcq/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="EuPhO 2021 — Sperimentale — Quesito 3" data-tags="kg/prova,paese/International,comp/EuPhO,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/mono,topic/thermodynamics,argomento/termodinamica,object/rod"></span>

<div class="qlang-switch" data-default="it"></div>



Interfaccia del programma

L’esecuzione del programma di simulazione, denominato rod, consente di eseguire più esperimenti sull’asta. Il programma chiederà una sequenza di richieste di inserimento dati riguardanti l’impostazione dell’esperimento. Per ogni prompt, devono essere immessi i valori corrispondenti, quindi premere return per passare al prompt successivo. I prompt sono i seguenti:

1. La potenza di riscaldamento del riscaldatore:
Enter P (W), between 0 and 300:
2. La durata dopo l’inizio dell’esperimento per la
quale il riscaldatore è acceso (dopo questo tempo, il
riscaldatore sarà spento):
Enter heating duration (s), between 0 and
3600s:
3. I tempi di inizio e fine (dopo l’inizio dell’esperimento) per le misurazioni della temperatura effettuate sull’asta:
Enter the starting and finishing time
for the measurements (s), separated by
a space. Must be between 0 e 3600s:

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Rod (object)|Rod]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/16856TziBv6s1PIkwSt2SYeEMAqsy8U1k/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/14bq0JJffnASKd-06CwaN97pmcVXvPNcq/view)


<div class="qlang-split" data-lang="en"></div>

Program interface

Running the simulation program, named rod, allows performing multiple experiments on the rod. The program will ask a sequence of prompts regarding the setup of the experiment. For each prompt, the corresponding value(s) should be entered, followed by pressing return to go the next prompt. The prompts are as follows:

1. The heating power of the heater:

`Enter P (W), between 0 and 300:`

2. The duration after the start of the experiment for which the heater is turned on for (after this time, the heater will be turned off):

`Enter heating duration (s), between 0 and 3600s:`

3. The starting and finishing times (after the start of the experiment) for the temperature measurements made on the rod:

`Enter the starting and finishing time for the measurements (s), separated by a space. Must be between 0 and 3600s:`

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** [[Rod (object)|Rod]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/16856TziBv6s1PIkwSt2SYeEMAqsy8U1k/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/14bq0JJffnASKd-06CwaN97pmcVXvPNcq/view)



<span class="atom-split" id="q04" data-atom="q04" data-title="EuPhO 2021 — Sperimentale — Quesito 4" data-tags="kg/prova,paese/International,comp/EuPhO,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/mono,topic/thermodynamics,argomento/termodinamica"></span>

<div class="qlang-switch" data-default="it"></div>



4. L’intervallo di tempo tra due misurazioni consecutive
effettuate con i sensori di temperatura:
Enter dt (s), between 5 and 3600s and a
multiple of 5s:

**Topic:** [[Thermodynamics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/16856TziBv6s1PIkwSt2SYeEMAqsy8U1k/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/14bq0JJffnASKd-06CwaN97pmcVXvPNcq/view)


<div class="qlang-split" data-lang="en"></div>

4. The time interval between two consecutive measurements that are made with the temperature sensors:

`Enter dt (s), between 5 and 3600s and a multiple of 5s:`

**Topic:** [[Thermodynamics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/16856TziBv6s1PIkwSt2SYeEMAqsy8U1k/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/14bq0JJffnASKd-06CwaN97pmcVXvPNcq/view)



<span class="atom-split" id="q05" data-atom="q05" data-title="EuPhO 2021 — Sperimentale — Quesito 5" data-tags="kg/prova,paese/International,comp/EuPhO,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/mono,topic/thermodynamics,argomento/termodinamica,object/rod"></span>

<div class="qlang-switch" data-default="it"></div>



5. Le posizioni dei sensori di temperatura lungo l’asta.
Le coordinate sono specificate rispetto alla fine del
riscaldatore:
Enter up to 5 locations for the sensors
(in cm), between L=0 and L=30cm, separated
by spaces:
Nota che non inserire alcun numero significa semplicemente non effettuare alcuna misurazione.

**Topic:** [[Thermodynamics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Objects:** [[Rod (object)|Rod]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/16856TziBv6s1PIkwSt2SYeEMAqsy8U1k/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/14bq0JJffnASKd-06CwaN97pmcVXvPNcq/view)


<div class="qlang-split" data-lang="en"></div>

5. The locations of the temperature sensors along the rod. The coordinates are specified with respect to the end with the heater:

`Enter up to 5 locations for the sensors (in cm), between L=0 and L=30cm, separated by spaces:`

Note that not entering any numbers simply means not taking any measurements.

**Topic:** [[Thermodynamics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Objects:** [[Rod (object)|Rod]]
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/16856TziBv6s1PIkwSt2SYeEMAqsy8U1k/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/14bq0JJffnASKd-06CwaN97pmcVXvPNcq/view)



<span class="atom-split" id="q06" data-atom="q06" data-title="EuPhO 2021 — Sperimentale — Quesito 6" data-tags="kg/prova,paese/International,comp/EuPhO,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/mono,topic/thermodynamics,argomento/termodinamica"></span>

<div class="qlang-switch" data-default="it"></div>



6. Il nome del file di output per le letture della temperatura. Nota che tutte le letture salvate verranno visualizzate anche sullo schermo:
Enter the output file name:
Si consiglia di utilizzare solo lettere e numeri latini
per il nome. Altri caratteri possono o non possono essere consentiti nel nome del file e in caso di un nome
di file non valido, le letture non verranno salvate. Le
letture verranno salvate in un file .txt con il nome
dato nella stessa cartella del programma.
Se si inserisce un input non valido, verrà inviato un messaggio di errore chiarificatore e verrà data un’altra opportunità di inserimento.
Il programma chiederà quindi di premere return per
avviare l’esperimento, o digitare restart e premere
return per reinserire tutti i parametri sperimentali.
Dopo aver continuato con la simulazione, il programma
visualizzerà un riepilogo della configurazione sperimentale, quindi inizierà a mostrare il tempo trascorso
dall’accensione del riscaldatore (t(s)) e tutte le letture
del sensore nello stesso ordine in cui sono stati inseriti
nel prompt ($T_i$(°C), dove $i$ corrisponde all'$i$-esimo sensore).
Al termine della simulazione, è possibile avviare un
nuovo esperimento digitando restart e premendo return.

**Topic:** [[Thermodynamics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/16856TziBv6s1PIkwSt2SYeEMAqsy8U1k/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/14bq0JJffnASKd-06CwaN97pmcVXvPNcq/view)


<div class="qlang-split" data-lang="en"></div>

6. The output file name for the temperature readings. Note that all of the saved readings will also be displayed on the screen:

`Enter the output file name:`

You are advised to only use Latin letters and numbers for the name. Other characters may or may not be allowed in the filename and in case of an invalid filename, the readings will not be saved. The readings will be saved in a .txt file with the given name in the same folder as the program.

If you enter an invalid input, a clarifying error message will be sent, and an another opportunity for entering the input will be given.

The program will then prompt to press return to start the experiment, or typing restart and pressing return to re-enter all the experimental parameters. After continuing with the simulation, the program will display a summary of the experimental setup, and then start printing out the time elapsed since the heater was turned on (t(s)), and all the sensor readings in the same order they were entered in the prompt ($T_i$(°C), where $i$ corresponds to the $i$-th sensor).

After the simulation ends, a new experiment can be started by typing restart and pressing return.

**Topic:** [[Thermodynamics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Objects:** —
**Fonte:** [Testo (PDF) — p.2](https://drive.google.com/file/d/16856TziBv6s1PIkwSt2SYeEMAqsy8U1k/view)
**Soluzione:** [Soluzioni (PDF)](https://drive.google.com/file/d/14bq0JJffnASKd-06CwaN97pmcVXvPNcq/view)
