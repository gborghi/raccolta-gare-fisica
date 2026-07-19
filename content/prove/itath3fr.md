---
title: IPhO 2004 — Domanda Teorica 3
tipo: prova
tags:
  - kg/prova
---
<div class="atom-reader" data-prova="itath3fr"></div>




<span class="atom-split" id="q01" data-atom="q01" data-title="IPhO 2004 — Domanda Teorica 3 — Problema 1" data-tags="kg/prova,nazione/italia,tipo-gara/individuale,livello/internazionale,difficolta/5,multidisciplina/multi,topic/wave-optics,topic/oscillations-e-waves,topic/circuits,object/spring,object/electron"></span>

<div class="qlang-switch" data-default="it"></div>



### Microscopio a Scansione di Campo (Atomic Scanning Probe Microscope)

I microscopi a scansione di campo (SPM) sono strumenti potenti usati nelle nano-scienze. In un SPM, un fotorivelatore ricevendo il fascio di luce laser riflesso permette di descrivere il moto di un bilanciere, come mostrato in Fig. 3.1. Il bilanciere si può muovere solamente in direzione verticale ed il suo spostamento verticale $z$ può essere espresso, in funzione del tempo $t$, dall'equazione

$$m\ddot{z} + b\dot{z} + kz = F(t), \quad (3.1)$$

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
**Objects:** [[Spring (object)|Spring]], [[Electron (object)|Electron]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1sYf9ofUtuLV6z00xWfSnYKwBp74Ry2Z9/view)


<div class="qlang-split" data-lang="en"></div>

### Field Scanning Microscope

Field-scan microscopes (SPM) are powerful tools used in nano-science. In a SPM, a photorevelator receiving the reflected laser beam of light allows to describe the motion of a scalar, as shown in Fig. 3.1. The balance sheet can only move vertically and its vertical shift $z$ can be expressed, in terms of time $t$, by the equation

$$m\ddot{z} + b\dot{z} + kz = F(t), \quad (3.1)$$

where $m$ is the mass of the balance sheet, $k$ the balance sheet spring constant, $b$ a small coefficient of attenuation such as $b \ll \sqrt{mk}$, and finally $F(t)$ the external driving thrust of the balance sheet produced by the piezoelectric tube.

---

### Part A

**(a) ** [1,5 points] When $F(t) = F_0 \cos(\omega t)$, the function $z(t)$ that satisfies Eq. (3.1) may be written as

$$z(t) = A\cos(\omega t - \varphi),$$

where $A > 0$ and $0 \leq \varphi < \pi$. Find the expression of the width $A$ and the tangent $\tan\varphi$ in the function $m$, $b$, $k$, $\omega$ and $F_0$. Get $A$ and determine the $\varphi$ phase when the frequency is resonance $\omega_0 = \sqrt{k/m}$.

The lock-in amplifier shown in Fig. 3.1 multiplies an incoming signal with its own reference signal, $V_R \cos(\omega t)$, and then only releases the continuous component (dc) of the multiplied signal. If the input signal is $V_i \cos(\omega t + \theta_i)$, with $V_R$, $V_i$, $\omega$ and $\theta_i$ all positive constant dates, find the condition that $\omega$ ($> 0$) must satisfy so that a continuous output signal is never cancelled. How can the amplitude of the continuous output signal be expressed at the first frequency found?

The input voltage of the lock-in $V_R \cos(\omega t)$ shall be $V_R \cos(\omega t + \psi)$. Applied to the piezoelectric tube, it drives the balancer with a force $F(t) = \alpha V_R \cos(\omega t + \psi)$. The photorevelator then converts the vertical shift of the balance sheet $z$ to a voltage $V_i = c_2 z$, where $\alpha$ and $c_2$ are constant. Find the continuous output signal amplitude expression when $\omega = \omega_0$.

**(d) ** [2 points] A small change in the mass of the scalar $\delta m$ moves the resonance frequency by a quantity $\delta\omega_0$. The phase $\varphi$ corresponding to the original resonance frequency $\omega_0$ therefore varies from $\delta\varphi$. Find the mass change $\delta m$ corresponding to the phase change $\delta\varphi = 0{,}01°$, which is a typical resolution in phase measurements. The physical parameters of the balance sheet shall be:

$$m = 1{,}0 \times 10^{-12}\ \text{kg}, \quad k = 1{,}0\ \text{N/m}, \quad Q = \frac{\sqrt{mk}}{b} = 1{,}0 \times 10^{3}.$$

Use the approximations $\delta\omega_0 \ll \omega_0$ and $b \ll \sqrt{mk}$ when $\omega = \omega_0$.

---

### Part B

From now on we consider the situation where some force generated by the sample, shown in Fig. 3.1, acts on the balance sheet in addition to the external guidance already discussed in Part A.

**(e) ** [1,5 points] Assuming that this additional force $F_{\text{tip}}$ depends only on the distance $h$ between the balance sheet and the sample surface, a new balance sheet position, $h_0$ is obtained. For $h$ values close to $h_0$, we can write

$$F_{\text{tip}}(h) \approx F_{\text{tip}}(h_0) + \left.\frac{dF_{\text{tip}}}{dh}\right|_{h_0}(h - h_0),$$

where $\dfrac{dF_{\text{tip}}}{dh}\big|_{h_0}$ is constant to the change of $h$. Find the new resonance frequency $\omega_1$ as a function of $\omega_0$, $m$ and $\dfrac{dF_{\text{tip}}}{dh}\big|_{h_0}$.

**(f) ** [2,5 points] While the surface scan is performed by moving the sample horizontally, the tip of the scalar with a charge $q$ encounters an electron with a charge $-e$, trapped (located in space) at a certain distance below the surface. During scanning around the electron, the maximum resonance frequency deviation $\Delta\omega_{\max}$ is much smaller than $\omega_0$. When the resonance frequency deviation is maximum, express the distance $d$ of the balance sheet from the trapped electron in terms of $q$, $e$, $k$, $\omega_0$, $\Delta\omega_{\max}$ and the Coulomb constant $k_e$. Calculate $d$ in nm ($1\ \text{nm} = 10^{-9}\ \text{m}$) in the case of $\Delta\omega_{\max} = 4{,}0\ \text{s}^{-1}$. The physical parameters of the balance sheet shall be:

$$m = 1{,}0 \times 10^{-12}\ \text{kg}, \quad k = 1{,}0\ \text{N/m}.$$

Any polarization effect on both the tip of the scalar and the surface of the sample should be neglected. Note that $k_e = 9{,}0 \times 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$ and $e = 1{,}6 \times 10^{-19}\ \text{C}$.

**Topic:** [[Wave Optics]], [[Oscillations & Waves]], [[Circuits]]
**Metodi:** [[Interference & Diffraction Analysis (metodo)|Interference & Diffraction Analysis]], [[Simple Harmonic Motion Analysis (metodo)|Simple Harmonic Motion Analysis]], [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Objects:** [[Spring (object)|Spring]], [[Electron (object)|Electron]]
**Fonte:** [Testo (PDF) — p.1](https://drive.google.com/file/d/1sYf9ofUtuLV6z00xWfSnYKwBp74Ry2Z9/view)
