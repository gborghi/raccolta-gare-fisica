---
tipo: quesito
quesito_id: quesito_Teo11sol__Q08
parent: prova_Teo11sol
competition: Olimpiadi Italiane della Fisica
comp_code: OII
country: Italia
year: '2011'
level: Nazionale
pdf: Gara individuale/nazionale/teorica/naz2011th/Teo11sol.pdf
cluster: Meccanica
quesito: '8'
tags:
  - nazione/italia
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/4
  - multidisciplina/bi
  - topic/electrostatics
  - topic/nuclear-e-particle-physics
  - argomento/meccanica
---

# OII 2011 Nazionale Teorica — Problema 8

Quesito n. 2.
Per calcolare l’energia potenziale elettrostatica di una sfera uniformemente carica si immagini di “assemblare”
la sfera per aggiunta di successivi gusci sferici infinitesimi. Si supponga allora di avere una sfera uniformemente
carica (con densità volumica di carica $\rho$), di raggio $r$. Il potenziale di questa sfera (ponendo $V_\infty = 0$) è:
$$V(r) = \frac{1}{4\pi\epsilon_0}\frac{q(r)}{r} = \frac{1}{4\pi\epsilon_0}\frac{(4/3)\pi r^3 \rho}{r} = \frac{\rho r^2}{3\epsilon_0}$$
Si immagini ora di aggiungere a questa sfera, trasportandolo dall’infinito, un guscio carico infinitesimo, di raggio
$r$ e spessore $dr$. La carica $dq$ del guscio risulta:
$$4\pi r^2\,dr\,\rho$$
L’aumento di energia potenziale elettrostatica sarà:
$$dU_e = [V(r) - V_\infty]\,dq = \frac{4\pi \rho^2 r^4}{3\epsilon_0}\,dr$$
Integrando questa espressione si otterrà l’energia potenziale richiesta:
$$U_e = \int_0^R dU_e = \frac{4\pi \rho^2}{3\epsilon_0}\int_0^R r^4\,dr = \frac{4\pi \rho^2 R^5}{15\,\epsilon_0}$$
———————
In alternativa si può calcolare questa energia sia integrando la densità di energia del campo elettrostatico,
sia usando l’espressione più generale dell’energia di configurazione di un sistema di cariche con distribuzione
continua. Nel primo caso occorre preliminarmente trovare (con il teorema di Gauss) le espressioni del campo
internamente ed esternamente alla sfera di raggio $R$, nel secondo caso quella del potenziale e.s. nei soli punti
interni. In sintesi:
• Attraverso la densità di energia $u = 1/2\,\epsilon_0 E^2$:
$$U_e = \int_0^\infty u\,dv = \frac{1}{2}\epsilon_0\int_0^R E^2_1\,dv + \frac{1}{2}\epsilon_0\int_R^\infty E^2_2\,dv$$
con
$$E_1 = \frac{\rho\,r}{3\epsilon_0} \qquad E_2 = \frac{\rho\,R^3}{3\epsilon_0\,r^2} \qquad dv = 4\pi r^2\,dr$$
• Come energia di configurazione
$$U_e = \frac{1}{2}\int_0^R V(r)\,dq = \frac{1}{2}\int_0^R V(r)\,\rho\,dv$$
con
$$dv = 4\pi r^2\,dr$$
e
$$V(r) = \int_r^\infty E\,dr = \int_r^R E_1\,dr + \int_R^\infty E_2\,dr = \frac{\rho}{3\epsilon_0}\frac{R^2 - r^2}{2} + \frac{\rho\,R^2}{3\epsilon_0} = \frac{\rho}{3\epsilon_0}\left(\frac{3}{2}R^2 - r^2\right)$$
———————
Tenendo conto del fatto che $\rho = Ze/(4/3)\pi R^3$ si ha infine
$$U_e = \frac{3}{20\pi\,\epsilon_0}\frac{(Ze)^2}{R} = \frac{3\,e^2}{20\pi\,\epsilon_0\,R_0}\frac{Z^2}{A^{1/3}}$$
quindi
$$\beta = \frac{3\,e^2}{20\pi\,\epsilon_0\,R_0}\,; \qquad \gamma = -1/3 \qquad (*)$$

**Topic:** [[Electrostatics]], [[Nuclear & Particle Physics]]
**Metodi:** [[Gauss's Law (metodo)|Gauss's Law]], [[Coulomb's Law (metodo)|Coulomb's Law]], [[Calculus-Integration (metodo)|Calculus-Integration]]
**Competenze:** [[Mathematical Modeling (competenza)|Mathematical Modeling]], [[Physical Reasoning (competenza)|Physical Reasoning]], [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.3
**Soluzione:** Soluzioni (PDF)
