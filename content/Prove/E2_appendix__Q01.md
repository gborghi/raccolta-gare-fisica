---
tipo: quesito
quesito_id: quesito_E2_appendix__Q01
parent: prova_E2_appendix
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: na
level: ''
pdf: Gara individuale/ipho/sperimentale/int19sit/E2_appendix.pdf
cluster: Meccanica
quesito: '1'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/bi
  - topic/thermodynamics
  - topic/electromagnetic-induction
  - argomento/meccanica
---

# OII na Sperimentale — Problema 1

**Wiedemann-Franz law – Appendix, Part A: regime quasi-stazionario e correzione della conducibilità termica**

Si usa un semplice modello per analizzare il trasporto di calore attraverso la barretta. Un riscaldatore fornisce potenza $P_0$ a un'estremità. In ogni punto vale:

$$P_T = -\kappa A \frac{\partial T}{\partial x}$$

dove $P_T$ è la corrente di calore nel punto $x$. Idealmente $P_T$ dovrebbe essere costante lungo la barretta. Tuttavia, due meccanismi modificano questo comportamento: (a) la potenza dissipata per variare la temperatura del materiale; (b) la perdita di potenza verso l'ambiente. L'equazione completa è:

$$\frac{\partial P}{\partial x} = -\rho c_p A \frac{\partial T}{\partial t} - K(T - T_0)$$

dove $c_p$ è il calore specifico, $\rho$ la densità, $K$ il parametro di perdita termica radiale per unità di lunghezza, e $T_0$ la temperatura ambiente.

La scala temporale del processo di riscaldamento è 2 minuti e 30 secondi, per cui si raggiunge il 95% del valore finale dopo 7 minuti e 30 secondi (come mostrato nel grafico in alto). Tuttavia, questo è valido solo per un sistema ideale. Nel sistema reale, il collegamento al serbatoio termico non è ideale e vi sono perdite radiali. Il sistema è modellizzato come una barretta collegata tramite resistenza termica a una corta barretta di alluminio (che rappresenta la pentola e il dissipatore termico), a sua volta connessa a un serbatoio d'acqua.

**Part A – Sistema ideale e correzione al prim'ordine**

Per un sistema ideale (barretta connessa solo a un serbatoio ideale), si ottiene un gradiente di temperatura costante:

$$\frac{\Delta T}{\Delta x} = -\frac{P}{\kappa A} \quad \Rightarrow \quad \kappa = \frac{P}{A \cdot \text{Slope}}$$

che fornisce $\kappa = 385\,\mathrm{W/(m\cdot K)}$.

I meccanismi di perdita influenzano il flusso di calore ma esiste sempre una relazione locale tra il gradiente di temperatura e il calore locale. Il gradiente vicino al riscaldatore è determinato dalla potenza $P$, mentre il gradiente vicino al serbatoio è determinato da $P - P_{\text{loss}}$. La correzione al prim'ordine alla pendenza è:

$$\frac{\Delta T_1 / \Delta x_1}{\Delta T_2 / \Delta x_2} = \frac{P - P_{\text{absorb}} - P_{\text{loss}}}{P} = 1 - \frac{c_p m}{P}\frac{\partial T}{\partial t} - \frac{P_{\text{loss}}}{P}$$

Con queste due correzioni l'accuratezza migliora a meno dell'1%, rispetto all'8% senza correzione.

<!--fig:start-->
![[_attachments/E2_appendix/E2_appendix_p1_f1.png]]
*Temperatura vs tempo verso regime stazionario*
<!--fig:end-->
<!--fig:start-->
![[_attachments/E2_appendix/E2_appendix_p1_f2.png]]
*Simulazione confrontata con dati misurati*
<!--fig:end-->
<!--fig:start-->
![[_attachments/E2_appendix/E2_appendix_p2_f3.png]]
*Accuratezza della correzione al prim'ordine*
<!--fig:end-->

**Topic:** [[Thermodynamics]], [[Electromagnetic Induction]]
**Metodi:** [[First Law of Thermodynamics (metodo)|First Law of Thermodynamics]], [[Differential Equations (metodo)|Differential Equations]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1
**Soluzione:** Soluzioni (PDF)
