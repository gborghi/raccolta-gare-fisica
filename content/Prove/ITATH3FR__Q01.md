---
tipo: quesito
quesito_id: quesito_ITATH3FR__Q01
parent: prova_ITATH3FR
competition: Olimpiadi Internazionali della Fisica (IPhO)
comp_code: IPhO
country: Italia
year: '2004'
level: internazionale
pdf: Gara individuale/ipho/teorica/int04tit/ITATH3FR.pdf
quesito: '1'
generator: llm-retranscribed
tags:
  - kg/prova
  - nazione/italia
  - tipo-gara/individuale
  - livello/internazionale
  - difficolta/5
  - multidisciplina/multi
  - topic/wave-optics
  - topic/oscillations-e-waves
  - topic/circuits
---

# IPhO 2004 — Domanda Teorica 3 — Problema 1

### Microscopio a Scansione di Campo (Atomic Scanning Probe Microscope)

I microscopi a scansione di campo (SPM) sono strumenti potenti usati nelle nano-scienze. In un SPM, un fotorivelatore ricevendo il fascio di luce laser riflesso permette di descrivere il moto di un bilanciere, come mostrato in Fig. 3.1. Il bilanciere si può muovere solamente in direzione verticale ed il suo spostamento verticale $z$ può essere espresso, in funzione del tempo $t$, dall'equazione

$$m\ddot{z} + b\dot{z} + kz = F(t), \tag{3.1}$$

dove $m$ è la massa del bilanciere, $k$ la costante della molla del bilanciere, $b$ un piccolo coefficiente di smorzamento tale che $b \ll \sqrt{mk}$, e infine $F(t)$ la spinta esterna di guida del bilanciere prodotta dal tubo piezoelettrico.

---

#### Parte A

**(a)** [1,5 punti] Quando $F(t) = F_0 \cos(\omega t)$, la funzione $z(t)$ che soddisfa l'Eq. (3.1) può essere scritta nella forma

$$z(t) = A\cos(\omega t - \varphi),$$

dove $A > 0$ e $0 \leq \varphi < \pi$. Trovare l'espressione dell'ampiezza $A$ e della tangente $\tan\varphi$ in funzione di $m$, $b$, $k$, $\omega$ e $F_0$. Ottenere $A$ e determinare la fase $\varphi$ quando la frequenza è quella di risonanza $\omega_0 = \sqrt{k/m}$.

**(b)** [1 punto] L'amplificatore lock-in mostrato in Fig. 3.1 moltiplica un segnale in ingresso con il suo segnale proprio di riferimento, $V_R \cos(\omega t)$, e successivamente lascia passare solamente la componente continua (dc) del segnale moltiplicato. Se il segnale in ingresso è espresso da $V_i \cos(\omega t + \theta_i)$, con $V_R$, $V_i$, $\omega$ e $\theta_i$ tutte costanti positive date, trovare la condizione a cui deve soddisfare $\omega$ ($> 0$) in modo tale che un segnale in uscita continuo non si annulli mai. Come si può esprimere alla frequenza prima trovata l'ampiezza del segnale continuo in uscita?

**(c)** [1,5 punti] Passando attraverso lo sfasatore, la tensione di riferimento del lock-in $V_R \cos(\omega t)$ diventa $V_R \cos(\omega t + \psi)$. Applicata al tubo piezoelettrico, guida il bilanciere con una forza $F(t) = \alpha V_R \cos(\omega t + \psi)$. In seguito, il fotorivelatore converte lo spostamento verticale $z$ del bilanciere in una tensione $V_i = c_2 z$, dove $\alpha$ e $c_2$ sono costanti. Trovare l'espressione dell'ampiezza del segnale continuo in uscita quando $\omega = \omega_0$.

**(d)** [2 punti] Una piccola variazione $\delta m$ della massa del bilanciere sposta la frequenza di risonanza di una quantità $\delta\omega_0$. Di conseguenza la fase $\varphi$ corrispondente alla frequenza originale di risonanza $\omega_0$ varia di $\delta\varphi$. Trovare la variazione di massa $\delta m$ che corrisponde alla variazione di fase $\delta\varphi = 0{,}01°$, che rappresenta una tipica risoluzione nelle misure di fase. I parametri fisici del bilanciere sono:

$$m = 1{,}0 \times 10^{-12}\ \text{kg}, \quad k = 1{,}0\ \text{N/m}, \quad Q = \frac{\sqrt{mk}}{b} = 1{,}0 \times 10^{3}.$$

Usare le approssimazioni $\delta\omega_0 \ll \omega_0$ e $b \ll \sqrt{mk}$ quando $\omega = \omega_0$.

---

#### Parte B

Da ora in avanti consideriamo la situazione in cui qualche forza generata dal campione, mostrato in Fig. 3.1, agisce sul bilanciere in aggiunta a quella esterna di guida già discussa nella Parte A.

**(e)** [1,5 punti] Supponendo che questa forza aggiuntiva $F_{\text{tip}}$ dipenda solamente dalla distanza $h$ tra il bilanciere e la superficie del campione, si ha una nuova posizione di equilibrio del bilanciere, $h_0$. Per valori di $h$ prossimi ad $h_0$, possiamo scrivere

$$F_{\text{tip}}(h) \approx F_{\text{tip}}(h_0) + \left.\frac{dF_{\text{tip}}}{dh}\right|_{h_0}(h - h_0),$$

dove $\dfrac{dF_{\text{tip}}}{dh}\big|_{h_0}$ è costante al variare di $h$. Trovare la nuova frequenza di risonanza $\omega_1$ in funzione di $\omega_0$, $m$ e $\dfrac{dF_{\text{tip}}}{dh}\big|_{h_0}$.

**(f)** [2,5 punti] Mentre viene eseguita la scansione della superficie muovendo il campione orizzontalmente, la punta del bilanciere che ha una carica $q$ incontra un elettrone con carica $-e$, intrappolato (localizzato nello spazio) ad una certa distanza sotto la superficie. Durante la scansione intorno all'elettrone si osserva che la massima deviazione della frequenza di risonanza $\Delta\omega_{\max}$ è molto più piccola di $\omega_0$. Quando la deviazione della frequenza di risonanza è massima, esprimere la distanza $d$ del bilanciere dall'elettrone intrappolato in funzione di $q$, $e$, $k$, $\omega_0$, $\Delta\omega_{\max}$ e della costante di Coulomb $k_e$. Calcolare $d$ in nm ($1\ \text{nm} = 10^{-9}\ \text{m}$) nel caso in cui $\Delta\omega_{\max} = 4{,}0\ \text{s}^{-1}$. I parametri fisici del bilanciere sono:

$$m = 1{,}0 \times 10^{-12}\ \text{kg}, \quad k = 1{,}0\ \text{N/m}.$$

Qualsiasi effetto di polarizzazione sia nella punta del bilanciere sia sulla superficie del campione va trascurato. Notare che $k_e = 9{,}0 \times 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$ e $e = 1{,}6 \times 10^{-19}\ \text{C}$.

**Topic:** [[Wave Optics]], [[Oscillations & Waves]], [[Circuits]]
**Metodi:** [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.1
