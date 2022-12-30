---
title: "Cross Product"
description: "The cross product is a common operation in linear algebra and beyond."
summary: "The cross product is a common operation in linear algebra and beyond."
tags: ["math", "linear algebra", "vector calculus"]
date: 2022-12-29
latex: \vec{a} \times \vec{b} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}
---
{{< katex >}}
For two vectors \\(\small \vec{a}\\) and \\(\small \vec{b}\\) in \\(\small \mathbb{R}^3\\) ([real coordinate spaces](https://en.wikipedia.org/wiki/Real_coordinate_space), the cross product is defined as

$$ \vec{a} \times \vec{b} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\\ 
a_1 & a_2 & a_3 \\\
b_1 & b_2 & b_3 \end{vmatrix}$$

Where
* The right hand side is a [determinant](https://en.wikipedia.org/wiki/Determinant) of a 3x3 matrix,
* \\(\small a_i\\) and \\(\small b_i\\) are the \\(\small i\\)-th components of \\(\small \vec{a}\\) and \\(\small \vec{b}\\), respectively, and
* \\(\small \vec{i}\\), \\(\small \vec{j}\\), and \\(\small \vec{k}\\) are the [standard basis vectors](https://en.wikipedia.org/wiki/Basis_(linear_algebra)#Standard_basis) of \\(\small \mathbb{R}^3\\).

## Interpretation
The result of a cross product is a vector that is perpendicular to both \\(\small \vec{a}\\) and \\(\small \vec{b}\\).

The magnitude of the cross product is equal to the area of the parallelogram formed by \\(\small \vec{a}\\) and \\(\small \vec{b}\\), and can be calculated:

$$ |a \times b| = |a| |b| \sin \theta $$

Where \\(\small \theta\\) is the angle between \\(\small \vec{a}\\) and \\(\small \vec{b}\\).

The direction of the cross product can be determined by the [right-hand rule](https://en.wikipedia.org/wiki/Right-hand_rule). If you point your right hand in the direction of \\(\small \vec{a}\\) and curl your fingers in the direction of \\(\small \vec{b}\\), your thumb will point in the direction of \\(\small \vec{a} \times \vec{b}\\).


## Properties
* The cross product is [anti-commutative](https://en.wikipedia.org/wiki/Commutative_property#Anti-commutative_property): \\(\small \vec{a} \times \vec{b} = - \vec{b} \times \vec{a}\\)
* The cross product is [distributive](https://en.wikipedia.org/wiki/Distributive_property): \\(\small \vec{a} \times (\vec{b} + \vec{c}) = \vec{a} \times \vec{b} + \vec{a} \times \vec{c}\\)

## Sources
- [Wikipedia](https://en.wikipedia.org/wiki/Cross_product)