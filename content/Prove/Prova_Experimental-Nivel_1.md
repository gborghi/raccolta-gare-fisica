---
tipo: prova
prova_id: prova_Prova_Experimental-Nivel_1
competition: Brasile Physics Olympiad
comp_code: Brasil
country: Brasile
year: '2006'
level: ''
pdf: gare di altri paesi/Brasile/2006-2011/Prova_Experimental-Nivel_1.pdf
cluster: Gravitazione e Astrofisica
n_problemi: '8'
tags:
  - kg/prova
  - anno/2006
  - paese/Brasile
  - comp/Brasil
  - cluster/Gravitazione e Astrofisica
---

# Brasil 2006 — Prova_Experimental-Nivel_1.pdf

**Fonte:** `gare di altri paesi/Brasile/2006-2011/Prova_Experimental-Nivel_1.pdf` · Apri PDF · apri PDF p.10
**Cluster:** [[Gravitazione e Astrofisica]]

## Problema 1

1. Os erros das medidas são representados sempre com um algarismo significativo. Exceto quando o algarismo significativo for os números 1 ou 2, utilizamos dois algarismos significativos.

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Significant Figures (competenza)|Significant Figures]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.10

## Problema 2

2. Primeiro obtemos o valor do erro para depois obter a posição do último algarismo significativo do valor principal.

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Significant Figures (competenza)|Significant Figures]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.10

## Problema 3

3. O valor principal deve sempre ter seu último algarismo significativo na mesma casa do último algarismo significativo do erro.

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Significant Figures (competenza)|Significant Figures]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.10

## Problema 4

4. O valor principal e o seu erro devem sempre estar na mesma potência.

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Significant Figures (competenza)|Significant Figures]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.10

## Problema 5

5. Os erros lidos diretamente nos instrumentos, ou fornecidos pelo fabricante, são escritos apenas com um algarismo significativo, exceto se vier com 2 algarismos escritos no instrumento.

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Significant Figures (competenza)|Significant Figures]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.10

## Problema 6

6. Para arredondamento: de 0,000 até 0,499 mantém-se o último algarismo significativo. De 0,500 até 0,999 acrescentamos uma unidade ao último algarismo significativo.

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Significant Figures (competenza)|Significant Figures]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.10

## Problema 7

7. O número zero colocado à esquerda do valor principal ou do erro não é algarismo significativo, mas colocado à direita é um algarismo significativo do número.

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]]
**Competenze:** [[Significant Figures (competenza)|Significant Figures]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.10

## Problema 8

8. Para o efeito de cálculo, trabalhamos com todos os números disponíveis no instrumento, mas a representação final sempre deve obedecer às regras acima.

### B.3. Propagação de erros em um cálculo matemático

Quando obtemos qualquer medida experimental, sempre teremos o envolvimento do erro da medida. Ao realizarmos cálculo com essas medidas terá uma propagação destes erros e o resultado também deve ser representado com um erro.

Se tivermos duas medidas do tipo, $x \pm \Delta x$, e $y \pm \Delta y$, e realizarmos uma operação matemática qualquer, o resultante $f(x,y)$ também terá um erro $\Delta f(x,y)$. O valor do erro $\Delta f(x,y)$ pode ser obtido pela equação:

$$\Delta f(x,y) = \left[ \left( \frac{\partial f}{\partial x} \right)^2 (\Delta x)^2 + \left( \frac{\partial f}{\partial y} \right)^2 (\Delta y)^2 \right]^{1/2} \tag{B14}$$

onde $\partial f / \partial z$ é a derivada parcial da função $f$ com relação à variável $z$ ($z$ corresponde a $x$ ou $y$, na expressão B14).

Para um cálculo rápido e simplificado, apresentamos na Tabela B-1 uma lista de fórmulas para operações mais comuns.

**Tabela B-1: Exemplos de expressões para cálculos de propagação de erros.**

| $w = w(x, y, z, \dots)$ | Expressão para a incerteza $\sigma_w$ |
| --- | --- |
| $w = x \pm y \pm z \pm \dots$ | $\sigma_w^2 = \sigma_x^2 + \sigma_y^2 + \sigma_z^2 + \dots$ |
| $w = x^m$ | $\sigma_w = \lvert m x^{m-1} \rvert \, \sigma_x$ ou $\left\lvert \dfrac{\sigma_w}{w} \right\rvert = \left\lvert m \dfrac{\sigma_x}{x} \right\rvert$ |
| $w = ax$ | $\sigma_w = \lvert a \rvert \sigma_x$ ou $\left\lvert \dfrac{\sigma_w}{w} \right\rvert = \left\lvert \dfrac{\sigma_x}{x} \right\rvert$ |
| $w = ax \pm b$ | $\sigma_w = \lvert a \rvert \sigma_x$ ou $\left\lvert \dfrac{\sigma_w}{w} \right\rvert = \left\lvert \dfrac{\sigma_x}{x} \right\rvert$ |
| $w = axy$ | $\sigma_w^2 = (ay)^2 \sigma_x^2 + (ax)^2 \sigma_y^2$ ou $\left( \dfrac{\sigma_w}{w} \right)^2 = \left( \dfrac{\sigma_x}{x} \right)^2 + \left( \dfrac{\sigma_y}{y} \right)^2$ |
| $w = a \dfrac{x}{y}$ | $\sigma_w^2 = \left( \dfrac{a}{y} \right)^2 \sigma_x^2 + \left( a \dfrac{x}{y^2} \right)^2 \sigma_y^2$ ou $\left( \dfrac{\sigma_w}{w} \right)^2 = \left( \dfrac{\sigma_x}{x} \right)^2 + \left( \dfrac{\sigma_y}{y} \right)^2$ |
| $w = a x^p y^q$ | $\sigma_w^2 = (a p x^{p-1} y^q)^2 \sigma_x^2 + (a x^p q y^{q-1})^2 \sigma_y^2$ ou $\left( \dfrac{\sigma_w}{w} \right)^2 = \left( p \dfrac{\sigma_x}{x} \right)^2 + \left( q \dfrac{\sigma_y}{y} \right)^2$ |
| $w = a \operatorname{sen}(bx)$ | $\sigma_w = \lvert ab\cos(bx) \rvert \, \sigma_x$ — com $bx$ e $b\sigma_x$ em radianos |

### B.4. Precisão e exatidão de medidas

Dado um conjunto de $N$ medidas de um determinado parâmetro, podemos verificar duas relações importantes em relação a elas: a precisão e a exatidão das mesmas.

A precisão indica o quanto as medidas efetuadas estão próximas umas das outras. Já a exatidão indica o quanto o valor medido experimentalmente está próximo do valor real ou esperado ou de referência. Uma maneira de representar graficamente os conceitos de precisão e exatidão é mostrado com o exemplo do "tiro ao alvo", onde um atirador quer acertar o centro do mesmo, que equivale ao valor de referência. Na Figura B-2 podem ser vistos as situações possíveis:

- em a): não houve precisão nem exatidão, pois todos os tiros acertaram pontos distantes do centro do alvo e entre si;
- em b): houve precisão, pois os tiros acertaram pontos bem próximos uns dos outros, mas não houve exatidão, pois os pontos estão distantes do centro;
- em c): houve uma boa exatidão (tiros próximos ao centro), mas a precisão não foi tão boa, pois os tiros acertaram pontos distantes entre si;
- em d): houve exatidão e precisão, pois os tiros acertaram pontos muito próximos ao centro e também próximos entre si.

a) Impreciso e inexato — b) Preciso mas inexato — c) Exato mas impreciso — d) Preciso e exato

Figura B-2: Representação gráfica dos conceitos de precisão e exatidão.

Podemos estimar quantitativamente a precisão de uma medida $w$, que possui uma incerteza $\Delta w$, através da expressão:

$$\left\lvert \frac{\Delta w}{w} \right\rvert \cdot 100\% \tag{B15}$$

Quanto mais baixo o valor obtido com B15, maior a precisão da medida.

Se um parâmetro $w$ possui um valor de referência $w_{ref}$, mas experimentalmente foi obtido o valor $w_{exp}$, a exatidão da medida pode ser obtida pela expressão:

$$\left\lvert \frac{w_{ref} - w_{exp}}{w_{ref}} \right\rvert \cdot 100\% \tag{B16}$$

De um modo geral, podemos utilizar as expressões B15 e B16 em conjunto com a incerteza de uma determinada medida para dizermos se a mesma foi boa ou ruim.

### B.5. Incertezas dos instrumentos de medida

De um modo geral, a incerteza de uma medida é proporcional à escala do instrumento de medição. Por padrão, adota-se como incerteza na medida o valor correspondente à metade da menor divisão do instrumento. Nos casos em que o instrumento não é confiável ou se a escala é de difícil leitura, pode-se adotar como incerteza na medida o valor correspondente à menor divisão do mesmo.

**Topic:** [[Order-of-Magnitude Estimation]]
**Metodi:** [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Error Propagation (metodo)|Error Propagation]], [[Differential Equations (metodo)|Differential Equations]]
**Competenze:** [[Error Propagation (competenza)|Error Propagation]], [[Significant Figures (competenza)|Significant Figures]], [[Measurement & Instrumentation (competenza)|Measurement & Instrumentation]]
**Fonte:** Testo (PDF) — p.11
