---
title: "Divergence Theorem"
description: "The divergence theorem is a formula that describes the relationship between the divergence of a vector field and the surface integral of the field over a closed surface."
summary: "The divergence theorem is a formula that describes the relationship between the divergence of a vector field and the surface integral of the field over a closed surface."
tags: ["vector calculus", "integration"]
date: 2022-12-29
latex: \iiint_V (\nabla \cdot \vec{F}) dV = \oiint_S (\vec{F} \cdot \hat{n}) dS
---

{{< katex >}}
If \vec{F} is a continuously diffrerentiable vector field in the volume \\(V\\) with closed surface \\(S\\), then the divergence theorem (also known as Gauss's Theorem) states that

$$ \iiint_V (\nabla \cdot \vec{F}) dV = \oiint_S (\vec{F} \cdot \hat{n}) dS $$

Where
* The left hand side is a volume integral of the divergence of \\(\vec{F}\\) over the volume \\(V\\), and
* \\(\hat{n}\\) is the unit normal vector to the surface S, used in the surface integral on the right hand side.

This can be interpreted intuitively. Since the divergence of a vector field can be thought of as the degree to which a field is acting as a source or sink, the divergence theorem can be thought of as saying that the total amount of a field that is acting as a source or sink in a volume is equal to the amount of the field leaving or entering the volume through the surface.

## Sources
- [Wikipedia](https://en.wikipedia.org/wiki/Divergence_theorem)
- [Wolfram Mathworld](https://mathworld.wolfram.com/DivergenceTheorem.html)
