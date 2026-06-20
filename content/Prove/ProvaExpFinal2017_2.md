---
tipo: prova
prova_id: prova_ProvaExpFinal2017_2
competition: Brasile Physics Olympiad
comp_code: Brasil
country: Brasile
year: '2017'
level: ''''''
pdf: gare di altri paesi/Brasile/OBF2017_Provas/ProvaExpFinal2017.pdf
generator: llm-retranscribed
tags:
  - kg/prova
---

# Brasil 2017 '' — ProvaExpFinal2017.pdf

**Fonte:** `gare di altri paesi/Brasile/OBF2017_Provas/ProvaExpFinal2017.pdf` · Apri PDF

## Problema 1







**Caracterização e Utilização da Ponte de Wheatstone**

A ponte de Wheatstone (descrita pela primeira vez por Samuel Hunter Christie, em 1833) é constituída por quatro resistores, um detector e uma fonte. Apesar de conhecidas há tanto tempo, as pontes de Wheatstone são amplamente utilizadas ainda hoje, sendo inclusive construídas em circuitos integrados para realizar medidas de aceleração, pressão, tensão mecânica, posição, potência eletromagnética, etc.

A ponte é considerada **equilibrada** quando os resistores estão ajustados de maneira que o detector (voltímetro) mede uma tensão igual a zero. Nessa condição demonstra-se a relação:

$$R_1 R_4 = R_3 R_2 \tag{1}$$

Considerando o detector como um voltímetro de resistência infinita, a tensão $V_g$ entre os nós do detector é:

$$V_g = \left(\frac{R_2}{R_1 + R_2} - \frac{R_4}{R_3 + R_4}\right) E \tag{2}$$

O circuito experimental utiliza:
- Um **"Resistor Sensor"** contendo: o resistor desconhecido $R_x$, um termopar (para medida de temperatura com o multímetro Tektronix TX3) e um resistor aquecedor de $33\ \Omega$;
- Resistores fixos dos braços de relação: $R_3 = 470\ \Omega$, $R_4 = 470\ \Omega$;
- $R_2$ = década resistiva Yokogawa (variável);
- Fonte $E_1$ (4 pilhas AA, $\approx 6\ \text{V}$) para alimentar a ponte;
- Fonte $E_2$ (4 pilhas AA, $\approx 6\ \text{V}$) para alimentar o conjunto aquecedor;
- Um resistor limitador (de valor variável, em série com o aquecedor de $33\ \Omega$) para controlar a corrente de aquecimento e, portanto, a temperatura de $R_x$.

A temperatura de $R_x$ é monitorada pelo termopar conectado ao multímetro Tektronix TX3 no modo de alta resolução ("HrES"). Para modificar a temperatura, substitui-se o resistor limitador; a cada troca deve-se esperar a temperatura estabilizar e reequilibrar a ponte antes das medidas.

### Questão 1 *(5 pontos)*

Demonstre a relação (1):

$$R_1 R_4 = R_3 R_2$$

### Questão 2 *(5 pontos)*

Demonstre a relação (2):

$$V_g = \left(\frac{R_2}{R_1 + R_2} - \frac{R_4}{R_3 + R_4}\right) E$$

### Questão 3 *(10 pontos)*

Monte o circuito da Figura 8(a) (ponte de Wheatstone). Preencha a tabela abaixo com os valores dos resistores utilizados, com os respectivos erros de medida, à temperatura ambiente:

| Grandeza | $R_x$ | $R_2$ (década) | $R_3$ | $R_4$ | $V_g$ | Temperatura |
|---|---|---|---|---|---|---|
| Valor | | | | | | |
| Erro | | | | | | |

Explique como determinar o valor do resistor desconhecido e determine o valor de $R_x$.

### Questão 4 *(20 pontos)*

Utilizando o circuito aquecedor (Figura 8(b)), substitua o resistor limitador pelos valores indicados abaixo. Para cada valor, espere a temperatura estabilizar, reequilibre a ponte e complete a tabela com os valores de $R_2$ (década) e $R_x$ em equilíbrio e a respectiva temperatura, incluindo os erros:

| Limitador ($\Omega$) | $R_2$ (década) | $R_x$ | Temperatura |
|---|---|---|---|
| 0,47 | | | |
| 3,3 | | | |
| 5,6 | | | |
| 12 | | | |
| 18 | | | |
| 27 | | | |
| 39 | | | |
| 56 | | | |
| 82 | | | |
| 150 | | | |

> Obs: Após o término dessa questão, desligar a fonte de alimentação $E_2$!

### Questão 5 *(15 pontos)*

Considerando que a condição inicial são os valores $T_0$ e $R_0$ obtidos à temperatura ambiente na Questão 3, escreva a possível equação da relação entre a variável elétrica (resistência, voltagem ou corrente) e a temperatura $T$ (em kelvin), justificando a sua escolha e linearizando a equação obtida.

**Dica:** a equação presumível assemelha-se a uma das seguintes, onde $R = R_x$, $V$ é a voltagem, $I$ a corrente, $A$ e $B$ são constantes e $T$ é a temperatura em kelvin:

$$1)\quad R = \frac{AV}{I} + B \qquad 2)\quad V = A I^B \qquad 3)\quad R = A\,e^{B/T} \qquad 4)\quad R = A + BT$$

### Questão 6 *(20 pontos)*

Utilizando os resultados obtidos nas Questões 4 e 5, faça o gráfico apropriado do valor da resistência da década em equilíbrio em função da temperatura.

### Questão 7 *(10 pontos)*

Obtenha os valores dos coeficientes linear e angular da reta traçada na Questão 6 e relacione-os com as constantes $A$ e $B$ do resistor $R_x$, indicando as respectivas unidades.

### Questão 8 — Desafio *(15 pontos)*

Substitua a década resistiva ($R_2$) pelo seguinte conjunto:
- $\mathrm{Pot}_2$ (potenciômetro de $2\ \mathrm{k}\Omega$) em série com um resistor de $3{,}3\ \mathrm{k}\Omega$;
- $\mathrm{Pot}_1$ (potenciômetro de $2\ \mathrm{k}\Omega$) em série com um resistor de $4{,}7\ \mathrm{k}\Omega$, em paralelo com $R_x$.

A ponte deve ser ajustada variando $\mathrm{Pot}_1$ e $\mathrm{Pot}_2$ de modo que o medidor $V_g$ mostre uma tensão numericamente igual à temperatura em $°\mathrm{C}$ multiplicada por $10$ (exemplo: $220\ \mathrm{mV} \equiv 22{,}0\ °\mathrm{C}$).

**Procedimento de calibração:**
1. Usar a escala de $2\ \mathrm{V}$.
2. Colocar o resistor limitador de $150\ \Omega$ (temperatura inferior) e ajustar $\mathrm{Pot}_1$ e/ou $\mathrm{Pot}_2$ até igualar a tensão $V_g$ ao valor da temperatura inferior (em $10\ \mathrm{mV}/°\mathrm{C}$).
3. Trocar pelo resistor de $56\ \Omega$ (temperatura superior) e ajustar $\mathrm{Pot}_1$ e/ou $\mathrm{Pot}_2$ até igualar a tensão ao valor da temperatura superior.
4. Repetir os passos 2–3 até não necessitar mais ajuste.

Ao concluir, remover os potenciômetros do circuito com muito cuidado (evitar mexer no eixo) e medir os respectivos valores:

| | $\mathrm{Pot}_1$ | $\mathrm{Pot}_2$ |
|---|---|---|
| Valor medido | | |

Qual foi a função do potenciômetro $\mathrm{Pot}_1$? E do $\mathrm{Pot}_2$? Justifique a sua resposta.

**Topic:** [[Circuits]]
**Metodi:** [[Physical Modeling (metodo)|Physical Modeling]], [[Kirchhoff's Laws (metodo)|Kirchhoff's Laws]], [[Equivalent Circuit Reduction (metodo)|Equivalent Circuit Reduction]]
**Competenze:** [[Physical Reasoning (competenza)|Physical Reasoning]], [[Mathematical Modeling (competenza)|Mathematical Modeling]]
**Fonte:** Testo (PDF) — p.2
