---
title: "Ampere's Law"
description: "Ampere's law is a formula that describes the magnetic field produced by a current-carrying wire."
summary: "Ampere's law is a formula that describes the magnetic field produced by a current-carrying wire."
tags: ["physics", "electromagnetism", "Maxwell's equations"]
date: 2022-12-28
latex: \oint \vec{B} \cdot d\vec{l} = \mu_0 I
---

{{< katex >}}
$$ \oint \vec{B} \cdot d\vec{l} = \mu_0 I $$

Where
* The left side is a line integral of the magnetic field \\(\vec{B}\\) over a closed loop \\(\vec{l}\\), and
* \\(\mu_0\\) is the [permeability of free space](https://en.wikipedia.org/wiki/Vacuum_permeability), and
* \\(I\\) is the current enclosed by the loop.

Ampere's law is a formula that describes the magnetic field produced by a current-carrying wire. It says that the magneitc field created by an electric current is proportional to the magnitude of the current.

## With displacement current

Ampere's law has a more general form that includes displacement current. The displacement current is proportional to the rate of change of the electric flux. [This site](http://teacher.pas.rochester.edu/phy122/lecture_notes/Chapter35/chapter35.html) has a good explanation of why this modification is needed. The modified form is:


$$ \oint \vec{B} \cdot d\vec{l} = \mu_0 I + \mu_0 \epsilon_0 \frac{d\vec{\phi_E}}{dt} $$

Where, in addition to the above definitions,
* \\(\epsilon_0\\) is the [permittivity of free space](https://en.wikipedia.org/wiki/Vacuum_permittivity), and
* \\(\vec{\phi_E}\\) is the electric flux intercepted by the surface spanned by the integration path of the magnetic field.


## Sources
- [Wikipedia](https://en.wikipedia.org/wiki/Amp%C3%A8re%27s_circuital_law)
- [Byjus](https://byjus.com/physics/amperes-law/)
- [Rochester Edu](http://teacher.pas.rochester.edu/phy122/lecture_notes/Chapter35/chapter35.html)
