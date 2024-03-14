---
title: Canonical Partition Function
description: "The expression describing a canonical ensemble in statistical mechanics."
summary: "The expression describing a canonical ensemble in statistical mechanics."
tags: ["physics", "statistical mechanics"]
date: 2024-03-14
latex: Z = \sum_{i} e^{-\beta E_i}
---

{{< katex >}}

The canonical partition function, denoted by \\\( \small Z\ \\), is a fundamental concept in statistical mechanics. It is a useful tool that can tell us the properties of the system, such as the probability that the system is in a particular state, the average energy of the system, and the heat capacity of the system.

For a classical, discrete canonical ensemble at a temperature \\\( \small T\ \\), the canonical partition function is given by:

## Partition function

$$ Z = \sum_{i} e^{-\beta E_i} $$

Where:

- \\\( \small Z\ \\) is the canonical partition function,
- \\\( \small E_i\ \\) is the energy of the \\\( \small i\ \\)-th microstate,
- The sum is taken over all possible microstates of the system, and
- \\\( \small \beta = \frac{1}{k_B T}\ \\) is the thermodynamic beta with \\\( \small k_B\ \\) being the Boltzmann constant and \\\( \small T\ \\) being the temperature.


## Probability of a state

The probability of the system having energy E_i is given by:

$$ P(E_i) = \frac{e^{-\beta E_i}}{Z} $$

Where:
- \\\( \small P(E_i)\ \\) is the probability of the system being in the \\\( \small i\ \\)-th microstate, and
- \\\( \small Z\ \\) is the canonical partition function described above.

## Other quantities

A few useful properties can be derived from the partition function. For example, the average energy of the system is given by:

$$ \langle E \rangle =\frac{1}{Z}\frac{\partial Z}{\partial \beta} = -\frac{\partial \ln Z}{\partial \beta}  = k_B T^2 \frac{\partial \ln Z}{\partial T}$$

Next, the expectation value of the energy squared is given by:

$$ \langle E^2 \rangle = \frac{1}{Z}\frac{\partial^2 Z}{\partial \beta^2} $$

Combining these two, we can get the mean square fluctiation of the energy:

$$ \langle \Delta E^2 \rangle = \langle E^2 \rangle - \langle E \rangle^2 = - \frac{\partial \langle E \rangle}{\partial \beta} $$
k
Finally, the heat capacity of the system is given by:

$$ C_v(T) = \frac{1}{k_B T^2} \langle \Delta E^2 \rangle$$




## Sources

- [Wikipedia](https://en.wikipedia.org/wiki/Partition_function_(statistical_mechanics))
- My professor's slides

## Examples

