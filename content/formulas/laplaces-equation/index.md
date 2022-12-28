---
title: "Laplace's Equation"
description: "Laplace's equation is a common partial differential equation"
summary: "Laplace's equation is a common partial differential equation"
tags: ["math", "differential equations", "physics"]
date: 2022-12-24
latex: \nabla^2 f = \nabla \cdot \nabla f = 0
---

{{< katex >}}
$$ \nabla^2 f = \nabla \cdot \nabla f = 0 $$

Where
* \\(f\\) is a twice-differentiable function,
* \\(\nabla\\) is the [gradient operator](https://en.wikipedia.org/wiki/Gradient),
* \\(\nabla^2\\) is the [Laplace operator](https://en.wikipedia.org/wiki/Laplace_operator), and
* \\(\nabla \cdot \\) is the [divergence operator](https://en.wikipedia.org/wiki/Divergence).

## In Different Coordinate Systems

#### In rectangular coordinates:

$$ \scriptsize \nabla^2 f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2} = 0$$

#### In cylindrical coordinates:
$$ \scriptsize \nabla^2 f = \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial f}{\partial r} \right) + \frac{1}{r^2} \frac{\partial^2 f}{\partial \phi^2}  + \frac{\partial^2 f}{\partial z^2} = 0$$

#### In spherical coordinates:
$$ \scriptsize \nabla^2 f = \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial f}{\partial r} \right) + \frac{1}{r^2 \sin \theta} \frac{\partial}{\partial \theta} \left( \sin \theta \frac{\partial f}{\partial \theta} \right) + \frac{1}{r^2 \sin^2 \theta}\frac{\partial^2 f}{\partial \varphi^2} = 0$$

## Sources
- [Wikipedia](https://en.wikipedia.org/wiki/Laplace%27s_equation)
- Griffith's Introduction to Electrodynamics' back cover


