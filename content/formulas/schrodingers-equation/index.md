---
title: "Schrodinger's Equation"
description: "The Schrodinger equation is a partial differential equation that describes the behavior of a quantum system."
summary: "The Schrodinger equation is a partial differential equation that describes the behavior of a quantum system."
tags: ["quantum mechanics", "physics"]
date: 2023-01-04
latex: \scriptsize i\hbar\frac{\partial}{\partial t}\Psi(x,t) = \left[-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + V(x,t)\right]\Psi(x,t)
---

{{< katex >}}
## Time-dependent

The time-dependent Schrodinger equation is a partial differential equation that describes the behavior of a quantum system evolving with time. In one spacial dimension it is given by:

$$ \scriptsize i\hbar\frac{\partial}{\partial t}\Psi(x,t) = \left[-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + V(x, t)\right]\Psi(x,t) $$

Where
* \\(\small \Psi(x,t)\\) is the wave function of the particle,
* \\(\small V \\) is the potential energy function,
* \\(\small m \\) is the mass of the particle, and
* \\(\small \hbar \\) is the [reduced Planck constant](https://en.wikipedia.org/wiki/Planck_constant).


In three spacial dimensions, the partial derivative in the second term is replaced with the [Laplacian](https://en.wikipedia.org/wiki/Laplacian) operator:

$$ \scriptsize i\hbar\frac{\partial}{\partial t}\Psi(r,t) = \left[-\frac{\hbar^2}{2m}\nabla^2 + V(r,t)\right]\Psi(r,t) $$

Where \\(\small r \\) is the position vector of the particle.


## Time-independent
If \\(\small V \\) is independent of time, the wave function can form stationary states that are described by the time-independent Schrodinger equation. In one spacial dimension it is given by:

$$ \scriptsize \left[-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + V(x)\right]\Psi(x) = E\Psi(x) $$

Where \\(\small E \\) is the energy of the stationary state.

In three spacial dimensions, the partial derivative is again replaced with the [Laplacian](https://en.wikipedia.org/wiki/Laplacian) operator:

$$ \scriptsize \left[-\frac{\hbar^2}{2m}\nabla^2 + V(r)\right]\Psi(r) = E\Psi(r) $$


## Sources
- [Wikipedia](https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation)
- Griffiths' Introduction to Quantum Mechanics, P. 171