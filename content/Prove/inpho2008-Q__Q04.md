---
tipo: quesito
quesito_id: quesito_inpho2008-Q__Q04
parent: prova_inpho2008-Q
competition: India Physics Olympiad
comp_code: INPhO
country: India
year: '2008'
level: ''
pdf: gare di altri paesi/India/fisica/all/inpho2008-Q.pdf
cluster: Termodinamica
quesito: '4'
tags:
  - nazione/india
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/mono
  - topic/thermodynamics
  - argomento/termodinamica
---

# INPhO 2008 — Problema 4

Two identical walls, each of width $w$ (=0.01 m), are separated by a distance $d$ (= 0.1 m) as shown in Fig. (3). Temperatures of the external face of the walls are fixed ($T_1$ and $T_2$, $T_2 > T_1$). Coefficient of thermal conductivity of wall is $k_w = 0.72\ \text{W-m}^{-1}\text{-K}^{-1}$. We define

$$T_0 = \frac{T_1 + T_2}{2}, \quad \Delta = T_2 - T_1 \text{ and } \delta = T'' - T' \tag{1}$$

where $T'$ and $T''$ are the temperatures of the internal face of the walls 1 and 2 respectively. Then $\delta$ will depend on the type of heat transfer process in central region (of width $d$) between the walls i.e. on the conduction, radiation or convection heat transfer. Assume that the heat transfer is a steady state process.

<!--fig:start-->
**Quesito 4**
![[inpho2008-Q_p3_f1.png]]
<!--fig:end-->

(a) Write down the expression for heat transfer flux $q_w$ ($\text{watt-m}^{-2}$) inside the wall 1 in terms of $k_w$, $T_1$, $T'$, and $w$. Similarly also write the expression for wall 2.

(b) Rewrite $q_w$ in terms of $\Delta$, $\delta$, $k_w$, and $w$.

As mentioned above, in the central region between the walls, heat is transmitted by conduction, convection and radiation. Also due to the steady state process, the corresponding fluxes are equal to $q_w$. In what follows we will calculate the heat transfer fluxes between the walls due to these three processes each of these processes being considered separately. Radiation process will take place without the presence of material medium in the central region between the walls. We assume that the central region between the walls is vacuum. Let $\epsilon$ be the emissivity of the walls and $E_1$ and $E_2$ be the total heat flux due to radiation from wall 1 to 2 and vice versa. Thus $E_1 = \epsilon\sigma T'^4 + (1 - \epsilon)E_2$ where $\sigma$ is Stefan constant. Similarly one may write the equation for $E_2$.

(c) The net heat transfer is $q_r = E_2 - E_1$. Write the expression for $q_r$ in terms of $\epsilon$, $T''$, and $T'$.

(d) Rewrite $q_r$ in terms of $\{k_w, \Delta, T_0, \sigma, \epsilon \text{ and } w\}$.

[ Hint: Eliminate $\delta$ using $\delta^2 \ll T_0^2$. ]

(e) Calculate $q_r$ if $\epsilon = 0.9$.

In the following two parts we are considering only convection between the walls.

(f) Now we assume that central region is filled with air of coefficient of thermal conductivity $k_a$. In this condition, convected heat transfer between walls will take place. Equation for flux due to this process is given by

$$q_{cv} = \frac{N_u k_a}{d}(T'' - T')$$

where $N_u$ is called the Nusselt number and for the given system $N_u = 6.4$. Due to the steady state nature of the process $q_w = q_{cv}$. Express $q_{cv}$ in terms of $\{k_w, k_a, \Delta, w, d, \text{ and } N_u\}$.

(g) Calculate the value of $q_{cv}$ if $k_a = 0.026\ \text{W-m}^{-1}\text{-K}^{-1}$.

(h) Instead of air, the central region is now filled with sheathing material having coefficient of thermal conductivity $k_s$. Hence heat transfer will take place by conduction between walls. Express heat transfer flux $q_{cd}$ in terms of $\{k_s, k_w, d, w, \text{ and } \Delta\}$. We assume that no radiation passes through sheathing material.

(i) Taking $k_s = 0.05\ \text{W-m}^{-1}\text{-K}^{-1}$, calculate the value of $q_{cd}$.

(j) Considering all possible heat transfer process in the central region between the walls, which insulation (sheathing, air, or vacuum) is the most efficient?

[ 1 + 1 + 1 + 3 + 2 + 1.5 + 1.5 + 2.5 + 1.5 + 1 = 16 ]

**Topic:** [[Thermodynamics]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.3
