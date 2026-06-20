---
tipo: quesito
quesito_id: quesito_naz02t__Q04
parent: prova_naz02t
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: '2002'
level: Nazionale
pdf: Gara individuale/nazionale/teorica/naz2002tpd/naz02t.pdf
cluster: Meccanica
quesito: '4'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/bi
  - topic/circuits
  - topic/oscillations-e-waves
  - argomento/meccanica
---

# OII 2002 Nazionale Teorica — Problema 4

**Lampada stroboscopica (circuito RC a scarica)**

**PROBLEMA n. 4 — Lampada stroboscopica** *(100 Punti)*

Si consideri il circuito in figura 1. Se si indica con $q_0$ la carica sul condensatore $C$ al tempo $t = 0$, in cui viene chiuso l'interruttore, allora la carica ad ogni istante successivo è data dalla funzione
$$q(t) = Q + (q_0 - Q)\,e^{-t/\tau} \quad \text{con} \quad \tau = R_{\mathrm p} C \tag{1}$$
essendo $R_{\mathrm p}$ la resistenza equivalente al parallelo delle resistenze $R_1$ e $R_2$.

*[Figura 1: generatore di tensione $V$ con interruttore T in serie a $R_1$; in parallelo al ramo $R_2$ c'è il condensatore $C$. Figura 2: come Fig.1 ma $R_2$ sostituita da una lampada a gas di resistenza $R_{\mathrm L}$. Figura 3: caratteristica isteretica $R_{\mathrm L}(V_{\mathrm L})$: $R_{\mathrm L}=R_+$ (alta) finché $V_{\mathrm L}$ non supera $V_2=V/2$, poi scende a $R_-$ (bassa); risale a $R_+$ quando $V_{\mathrm L}$ scende sotto $V_1=V/4$.]*

1. Mostrare che la costante $Q$ rappresenta il valore di regime della carica sul condensatore e determinarne il valore in funzione dei parametri $V$, $R_1$, $\tau$.
2. Calcolare le correnti nei tre rami del circuito usando la relazione (1) e verificare che il risultato è consistente con la legge dei nodi di Kirchhoff. *Traccia suggerita: ricavare nell'ordine la ddp ai capi del condensatore $V_C(t)$; la corrente nel ramo del condensatore; la corrente in $R_2$; la corrente in $R_1$; verificare la legge di Kirchhoff a uno dei nodi.*

La resistenza $R_2$ viene sostituita da una lampada a gas (figura 2) schematizzabile come un componente resistivo definito in questo modo:
- quando la tensione applicata è nulla la resistenza è molto elevata ($R_{\mathrm L} = R_+ \gg R_1$) e rimane tale finché la tensione non supera il valore $V_2 = V/2$; a questo punto la resistenza scende a $R_- \ll R_1$ e la lampada emette luce;
- la resistenza rimane molto bassa ($R_{\mathrm L} = R_- \ll R_1$) quando la tensione applicata ai suoi capi resta superiore al valore $V_1 = V/4$; quando la tensione scende al di sotto di questo valore la resistenza torna ad $R_+$ e la lampada si spegne.

Il grafico di figura 3 mostra come la resistenza della lampada, nell'intervallo di tensione applicata $V_1 < V_{\mathrm L} < V_2$, dipende dalla storia precedente.

3. Partendo dalla condizione $q_0 = 0$ riportare in un grafico l'andamento della $V_C(t)$ mostrando che la lampada emette una successione di lampi (*lampada stroboscopica*).
4. Determinare la frequenza dei lampi nel caso $R_+ = 100\,R_1$ ed $R_- = R_1/100$, dandone poi il valore numerico per $C = 100\ \mu\text{F}$ ed $R_1 = 4.7\ \text{k}\Omega$.

Si vuole osservare una corda vibrante alla luce di una lampada stroboscopica la cui frequenza può essere variata; è noto solo il valore minimo della frequenza $\nu_0 = 2\ \text{Hz}$. A partire da un valore certamente maggiore di quello di vibrazione della corda, la frequenza della lampada viene lentamente diminuita, fino al valore minimo. A un certo istante, durante questa operazione, si osserva che la corda appare ferma, ma poiché la frequenza dei lampi non è nota, non è possibile determinare la frequenza di oscillazione della corda. Diminuendo ancora progressivamente la frequenza della lampada, la corda appare ferma una seconda volta e subito dopo, raggiunta la frequenza minima della lampada $\nu_0$, la corda sembra oscillare con un periodo apparente $T_{\text{app}} = 3\ \text{s}$.

5. A che frequenza oscilla la corda?

<!--fig:start-->
**p.2** — Fig. 1 circuito RC con R2
![[_attachments/naz02t/naz02t_p2_f3.png]]
<!--fig:end-->

<!--fig:start-->
**p.2** — Fig. 2 circuito con lampada R_L
![[_attachments/naz02t/naz02t_p2_f4.png]]
<!--fig:end-->

<!--fig:start-->
**p.2** — Fig. 3 grafico R_L in funzione di V
![[_attachments/naz02t/naz02t_p2_f5.png]]
<!--fig:end-->

**Topic:** [[Circuits]], [[Oscillations & Waves]]
**Metodi:** [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Differential Equations (metodo)|Differential Equations]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.2
**Soluzione:** Soluzioni (PDF)
