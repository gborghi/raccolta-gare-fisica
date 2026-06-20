---
tipo: prova
prova_id: prova_IPhO_2027_flugzeugstart_graph
competition: Internationale PhysikOlympiade — Deutsche Auswahl (Runde 1)
comp_code: IPhO
country: Germania
year: '2027'
level: Round 1
pdf: gare di altri paesi/Germania/Rund1/IPhO_2027_flugzeugstart_graph.pdf
cluster: Meccanica
n_problemi: '1'
tags:
  - kg/prova
  - anno/2027
  - paese/Germania
  - comp/IPhO
  - cluster/Meccanica
---

# IPhO 2027 Round 1 Teorica — IPhO_2027_flugzeugstart_graph.pdf

**Fonte:** `gare di altri paesi/Germania/Rund1/IPhO_2027_flugzeugstart_graph.pdf` · Apri PDF · apri PDF p.1
**Cluster:** [[Meccanica]]

## Problema 1

**Aufgabe — Flugzeugstart (Begleitgraph)**

Dieses einseitige Dokument enthält ausschließlich den Messgraphen für die Aufgabe "Flugzeugstart" der 1. Runde im Auswahlwettbewerb zur IPhO 2027. Der vollständige Aufgabentext befindet sich im Hauptheft (`IPhO_2027_Aufgabenblatt_Rund1.pdf`).

Ein Smartphone wurde während eines Flugzeugstarts an Bord befestigt und zeichnete mit seiner Beschleunigungssensor-App die drei Raumkomponenten der Beschleunigung $a$ in Abhängigkeit von der Zeit $t$ auf. Die Messdaten sind im beiliegenden CSV-File (`IPhO_2027_flugzeugstart_accelerometer_data.csv`) mit den Spalten `nr; time; ax; ay; az` (alle Beschleunigungen in $\mathrm{m\,s^{-2}}$, Zeit in $\mathrm{s}$) verfügbar.

Der Graph zeigt drei Datenserien über den Zeitbereich $t = 0$ bis $t \approx 92{,}5\,\mathrm{s}$:

- **Vertikalkomponente $a_z$ (braune Serie, oben):** Schwankt zunächst um $\approx 9{,}81\,\mathrm{m\,s^{-2}}$ (Erdbeschleunigung im Ruhezustand). Während der Rotation bei $t \approx 60$–$63\,\mathrm{s}$ steigt sie auf $\approx 13\,\mathrm{m\,s^{-2}}$ (Abheben). Im Steigflug fällt sie anschließend auf $\approx 8{,}2\,\mathrm{m\,s^{-2}}$ ab, was dem durch den Steigwinkel reduzierten Anteil der Schwerkraft entspricht.

- **Längskomponente $a_y$ (grüne Serie, mitte):** Liegt bis $t \approx 6{,}5\,\mathrm{s}$ nahe null (Stillstand). Steigt danach kontinuierlich auf ein Plateau von $\approx 3\,\mathrm{m\,s^{-2}}$ an (Triebwerksbeschleunigung auf der Startbahn). Erreicht bei $t \approx 60$–$63\,\mathrm{s}$ ein Maximum von $\approx 4\,\mathrm{m\,s^{-2}}$ (Rotation). Im Steigflug stabilisiert sie sich bei $\approx 2{,}9\,\mathrm{m\,s^{-2}}$.

- **Querkomponente $a_x$ (blaue Serie, unten):** Bleibt während der gesamten Messung nahe null.

Aus dem Graphen lassen sich die Phasen des Flugzeugstarts (Rollen, Beschleunigen, Rotation, Abheben, Steigflug) identifizieren und physikalische Größen wie die Startbahnbeschleunigung, die Startgeschwindigkeit und der Steigwinkel bestimmen.

<!--fig:start-->
![[_attachments/IPhO_2027_flugzeugstart_graph/IPhO_2027_flugzeugstart_graph_p1_f1.png]]
*Beschleunigungskomponenten ax ay az beim Flugzeugstart*
<!--fig:end-->

**Topic:** [[Newtonian Mechanics]], [[Order-of-Magnitude Estimation]]
**Metodi:** [[Kinematic Equations (metodo)|Kinematic Equations]], [[Experimental Data Analysis (metodo)|Experimental Data Analysis]], [[Free-Body Diagram (metodo)|Free-Body Diagram]]
**Competenze:** [[Experimental Data Analysis (competenza)|Experimental Data Analysis]], [[Graph Linearization (competenza)|Graph Linearization]], [[Physical Reasoning (competenza)|Physical Reasoning]]
**Fonte:** Testo (PDF) — p.1
