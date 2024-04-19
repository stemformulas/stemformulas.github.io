---
title: Vector Calculus Product Rules
description: "The product rules in vector calculus."
summary: "The product rules in vector calculus."
tags: ["mathematics", "vector calculus"]
date: 2024-04-19
latex: "\\nabla (fg) = f(\\nabla g) + g(\\nabla f)"
---

{{< katex >}}

For scalar functions \\(\small f \\) and \\(\small g \\) and vector functions \\(\small \mathbf{A} \\) and \\(\small \mathbf{B} \\), the product rules in vector calculus are as follows:

## Gradient
$$\small  \nabla (fg) = f(\nabla g) + g(\nabla f) $$
$$\small  \nabla (\mathbf{A} \cdot \mathbf{B}) = \mathbf{A} \times (\nabla \times \mathbf{B}) + \mathbf{B} \times (\nabla \times \mathbf{A}) + (\mathbf{A} \cdot \nabla) \mathbf{B} + (\mathbf{B} \cdot \nabla) \mathbf{A} $$

## Divergence
$$\small \nabla \cdot (f \mathbf{A}) = f(\nabla \cdot \mathbf{A}) + \mathbf{A} \cdot (\nabla f) $$
$$\small  \nabla \cdot (\mathbf{A} \times \mathbf{B}) = \mathbf{B} \cdot (\nabla \times \mathbf{A}) - \mathbf{A} \cdot (\nabla \times \mathbf{B}) $$

## Curl
$$\small \nabla \times (f \mathbf{A}) = f(\nabla \times \mathbf{A}) + \mathbf{A} \times (\nabla f) $$
$$\small \nabla \times (\mathbf{A} \times \mathbf{B}) = (\mathbf{B} \cdot \nabla) \mathbf{A} - (\mathbf{A} \cdot \nabla) \mathbf{B} + \mathbf{A} (\nabla \cdot \mathbf{B}) - \mathbf{B} (\nabla \cdot \mathbf{A}) $$

## Sources

- [Griffith's Introduction to Electrodynamics](https://www.amazon.com/Introduction-Electrodynamics-David-J-Griffiths/dp/1108420419)
