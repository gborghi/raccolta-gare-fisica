---
tipo: quesito
quesito_id: quesito_E2_appendix__Q02
parent: prova_E2_appendix
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/sperimentale/int19sit/E2_appendix.pdf
cluster: Meccanica
quesito: '2'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/mono
  - topic/thermodynamics
  - argomento/meccanica
---

# OII na Sperimentale — Problema 2

**Wiedemann-Franz law – Appendix, Part B: ciclo raffreddamento–riscaldamento–raffreddamento**

Lo scopo di questa sezione è ottenere la perdita di calore $P_{\text{loss}}$ e la capacità termica $C = c_p m$ della barretta, al fine di correggere l'errore dell'8% del risultato della Parte A. Si disconnette la barretta dal serbatoio termico, si isola l'estremità libera e si riscalda fino a circa la temperatura della sezione precedente.

Si esegue un ciclo **raffreddamento–riscaldamento–raffreddamento** per ottenere $c_p m$ e $P_{\text{loss}}$.

**Metodo (a) – basato sulla pendenza di $T(t)$:**

Durante il raffreddamento:
$$\left.\frac{\partial T_{\text{av}}}{\partial t}\right|_{\text{Cooling}} = -\frac{P_{\text{loss}}}{c_p m}$$

Durante il riscaldamento:
$$\left.\frac{\partial T_{\text{av}}}{\partial t}\right|_{\text{Heating}} - \left.\frac{\partial T_{\text{av}}}{\partial t}\right|_{\text{Cooling}} = \frac{P_{\text{in}}}{c_p m}$$

permettendo di ricavare $c_p \cdot m$.

**Metodo (b) – basato sull'energia totale:**

Il calore totale immesso durante l'intervallo di riscaldamento, $P_{\text{in}} \cdot \Delta t_{\text{Heating}}$, è legato a $\Delta T_{\text{Heating}}$ (lo spostamento verticale tra le rette di raffreddamento $T(t)$ prima e dopo il riscaldamento) dalla relazione:

$$P_{\text{in}} \Delta t_{\text{Heating}} = c_p m \,\Delta T_{\text{Heating}}$$

Entrambi i metodi riproducono la conducibilità termica entro l'1%, con $c_p = 386\,\mathrm{J/(kg\cdot K)}$.

La perdita di calore totale è:
$$P_{\text{loss}} = -c_p \cdot m \cdot \left.\frac{\partial T_{\text{av}}}{\partial t}\right|_{\text{Cooling}} = 0.34\,\mathrm{J/s}$$

Nota: un contributo significativo alla capacità termica proviene dall'isolamento e da altri componenti del sistema; si deve pertanto usare una massa efficace maggiore della massa reale. Questo è rilevante solo per ottenere il corretto $c_p$, mentre per il resto dell'esperimento si usa solo il prodotto $c_p m$.

A seconda del metodo, il risultato di $C$ può deviare del 5%, producendo un errore trascurabile di meno dello 0.5% nel risultato della conducibilità termica.
<!--fig:start-->
![[_attachments/E2_appendix/E2_appendix_p3_f4.png]]
*Simulazione ciclo raffreddamento-riscaldamento-raffreddamento*
<!--fig:end-->
<!--fig:start-->
![[_attachments/E2_appendix/E2_appendix_p3_f5.png]]
*Misurazione tipica del ciclo con termometri*
<!--fig:end-->

<!--fig:start-->
![[_attachments/E2_appendix/E2_appendix_p4_f6.png]]
*Grafico T(t) con ΔT e Δt_Heating indicati*
<!--fig:end-->

**Topic:** [[Thermodynamics]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]]
**Fonte:** Testo (PDF) — p.3
**Soluzione:** Soluzioni (PDF)
