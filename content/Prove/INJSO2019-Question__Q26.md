---
tipo: quesito
quesito_id: quesito_INJSO2019-Question__Q26
parent: prova_INJSO2019-Question
competition: India Physics Olympiad
comp_code: India
country: India
year: '2019'
level: ''
pdf: gare di altri paesi/India/junior science/INJSO2019-Question.pdf
cluster: Ottica
quesito: '26'
tags:
  - nazione/india
  - tipo-gara/individuale
  - livello/nazionale
  - difficolta/3
  - multidisciplina/mono
  - topic/geometric-optics
  - argomento/ottica
---

# INJSO 2019 — Problema 26

Two mirrors OA and OB make an angle of 50° with each other. An object C is placed on the angular bisector of angle AOB.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
\coordinate (O) at (0,0);
\coordinate (A) at (4,0);
\coordinate (B) at ({4*cos(50)},{4*sin(50)});
\draw[thick] (O) -- (A) node[right]{A};
\draw[thick] (O) -- (B) node[above right]{B};
\node[below left] at (O) {O};
\draw[->] (1,0.18) arc (0:50:1);
\node at ({1.3*cos(25)},{1.3*sin(25)}) {$50^\circ$};
\coordinate (C) at ({2.6*cos(25)},{2.6*sin(25)});
\fill (C) circle (2pt) node[above right]{C};
\end{tikzpicture}
\end{document}
```

The total number of images of the object formed by the mirrors will be:

- (A) 5
- (B) 6
- (C) 7
- (D) 8

**Topic:** [[Geometric Optics]]
**Metodi:** [[Ray Tracing (metodo)|Ray Tracing]]
**Competenze:** [[Diagrammatic Reasoning (competenza)|Diagrammatic Reasoning]]
**Fonte:** Testo (PDF) — p.11
**Soluzione:** Soluzioni (PDF)
