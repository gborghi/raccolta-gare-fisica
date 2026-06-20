---
tipo: prova
prova_id: prova_ANAinLAB_2024
competition: Giochi di Anacleto
comp_code: Anacleto
country: Italia
year: '2024'
level: Nazionale
pdf: Anacleto/laboratorio/ANAinLAB_2024.pdf
cluster: Meccanica
n_problemi: '3'
tags:
  - kg/prova
  - anno/2024
  - paese/Italia
  - comp/Anacleto
  - cluster/Meccanica
---

# Anacleto 2024 Nazionale Sperimentale — ANAinLAB_2024.pdf

**Fonte:** `Anacleto/laboratorio/ANAinLAB_2024.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Problema 1

**PARTE 1 — Misura dell'accelerazione e raccolta dati (Tabella 1)**

Una "slitta" di massa variabile $M$ è appoggiata su un tavolo orizzontale ed è collegata tramite un filo che scorre su un perno metallico a un corpo di massa costante $m$ in caduta. Usando l'app **ARDUINO SCIENCE JOURNAL (ASJ)** montata sulla slitta, misura l'accelerazione $a_{\rm eff}$ della slitta per almeno 7 valori diversi di $M$, ripetendo ogni misura almeno 4 volte. Registra anche l'"accelerazione di fondo" (lettura dello smartphone a slitta ferma) e correggila ad ogni prova.

Si può dimostrare che, in assenza di attrito, l'accelerazione teorica della slitta sarebbe:
$$a_t = \frac{m}{M+m}\,g \tag{1}$$

dove $m$ è la massa del corpo trainante (costante), $M$ la massa della slitta, $g$ l'accelerazione di gravità. L'accelerazione misurata $a_{\rm eff}$ risulta minore di $a_t$ per la presenza dell'attrito.

Riporta nella **Tabella 1** (foglio dati):
- numero di registrazione
- massa della slitta $M$ (in kg)
- accelerazione di fondo (in m/s²)
- accelerazione $a_{\rm eff}$ corretta per il fondo (in m/s²)

Per ogni grandezza indica la sensibilità dello strumento usato (bilancia e accelerometro) e le corrette unità di misura S.I.

<!--fig:start-->
![[_attachments/ANAinLAB_2024/ANAinLAB_2024_p13_f1.png]]
*Schema slitta su tavolo con peso trainante*
<!--fig:end-->
<!--fig:start-->
![[_attachments/ANAinLAB_2024/ANAinLAB_2024_p15_f2.png]]
*Orientamento smartphone sulla slitta*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Free-Body Diagram (metodo)|Free-Body Diagram]], [[Kinematic Equations (metodo)|Kinematic Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.13

## Problema 2

**PARTE 2 — Elaborazione dati e calcolo di $\mu_d$ (Tabella 2)**

Utilizzando i dati della Tabella 1, per ogni valore di massa $M$ della slitta calcola:

1. L'accelerazione teorica (senza attrito):
$$a_t = \frac{m}{M+m}\,g \tag{1}$$

2. La media delle accelerazioni efficaci misurate $\bar{a}_{\rm eff}$ e la relativa semidispersione massima come incertezza.

3. La variazione dell'accelerazione:
$$\Delta a = a_t - \bar{a}_{\rm eff} \tag{4}$$

4. La forza d'attrito:
$$F_a = M\cdot\Delta a \tag{6}$$

5. La forza premente della slitta:
$$P_s = M\cdot g \tag{}$$

6. Il coefficiente d'attrito radente dinamico:
$$\mu_d = \frac{\Delta a}{g} \tag{8}$$

Riporta tutti i risultati con le corrette unità di misura S.I. e il numero di cifre significative appropriato.

Inoltre, **spiega come hai determinato le incertezze** sulle varie misure (sia relative ai dati della Tabella 1 che a quelli della Tabella 2). Calcola infine il valore medio $\mu_d = \overline{\mu_d} \pm \Delta\mu_d$ ottenuto al variare di $M$.

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Conservation Laws (metodo)|Conservation Laws]], [[Error Propagation (metodo)|Error Propagation]], [[Statistical Averaging (metodo)|Statistical Averaging]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.17

## Problema 3

**PARTE 3 — Grafico forza d'attrito vs forza premente e determinazione di $\mu_d$**

Con i dati della Tabella 2 costruisci su carta millimetrata un **grafico** ponendo in ascisse la forza premente della slitta $P_s = M\cdot g$ (in N) e in ordinate la forza d'attrito $F_a$ (in N). Riporta sugli assi le grandezze con le rispettive unità di misura. I dati devono occupare almeno $\tfrac{3}{4}$ dello spazio disponibile per ogni asse. Traccia le barre d'errore e la retta di interpolazione (che deve passare per l'origine).

**In base al grafico:**

(a) Scrivi la relazione che trovi tra $F_a$ e $P_s$.

(b) Ricava dalla relazione scritta il coefficiente d'attrito dinamico $\mu_d$ come coefficiente angolare della retta, indicando anche l'intervallo di valori possibili ottenuto dalle rette di massima e minima pendenza passanti per tutte le barre d'errore.

(c) Confronta il valore di $\mu_d$ ottenuto dal grafico con quello calcolato algebricamente nella Parte 2. I risultati sono compatibili (cioè gli intervalli di incertezza si sovrappongono almeno parzialmente)? Spiega.

**Topic:** [[Newtonian Mechanics]]
**Metodi:** [[Graph Linearization (metodo)|Graph Linearization]], [[Error Propagation (metodo)|Error Propagation]], [[Physical Modeling (metodo)|Physical Modeling]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]]
**Competenze:** [[Graph Linearization (competenza)|Graph Linearization]], [[Experimental Data Analysis (competenza)|Experimental Data Analysis]]
**Fonte:** Testo (PDF) — p.20
