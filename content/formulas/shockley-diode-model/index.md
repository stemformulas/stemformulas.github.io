---
title: Shockley Diode Model
description: "The Shockley diode model is a simplified model of a diode's Voltage-Current relationship."
summary: "The Shockley diode model is a simplified model of a diode's Voltage-Current relationship."
tags: ["electronics", "electrical engineering"]
date: 2023-01-18
latex: I = I_S \cdot (e^{\frac{V_D}{nV_T}} - 1)
---

The Shockley diode equation is an approximation that relates the diode's current to its voltage.

{{< katex >}}
$$ I = I_S \cdot (e^{\frac{V_D}{nV_T}} - 1)$$

Where
* \\(\small I\\) is the current through the diode
* \\(\small I_S\\) is the diode's saturation current
* \\(\small V_D\\) is the diode's voltage
* \\(\small n\\) is the diode's ideality factor, usually between 1 and 2
* \\(\small V_T\\) is the thermal voltage, which is equal to \\(\small kT/q\\) where \\(\small k\\) is Boltzmann's constant, \\(\small T\\) is the temperature in Kelvin, and \\(\small q\\) is the electron charge.

When \\(\small V_D\\) is large relative to \\(\small nV_T\\), the equation can be approximated as:

$$ I \approx I_S \cdot e^{\frac{V_D}{nV_T}} $$

## Sources
- [Wikipedia](https://en.wikipedia.org/wiki/Diode_modelling#Shockley_diode_model)
- [Wikiwand](https://www.wikiwand.com/en/Shockley_diode_equation)