---
title: Divergence
description: "The concept of divergence in vector calculus."
summary: "The concept of divergence in vector calculus."
tags: ["mathematics", "vector calculus"]
date: 2023-07-08
latex: \nabla \cdot \mathbf{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}
---

{{< katex >}}
The divergence measures the rate at which the vector field \\(\small \mathbf{F}\\) spreads out or converges at a given point in space.

## Cartesian Coordinates
The divergence of a vector field \\(\small \mathbf{F}\\) in cartesian coordinates is given by:

$$ \nabla \cdot \mathbf{F}  = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z} $$

Where:
- \\(\small x, y, z\\) are the usual cartesian coordinates,
- \\(\small \nabla\\) is the del operator (also known as the gradient operator),
- \\(\cdot\\) denotes the dot product, and
- \\(\partial\\) denotes the partial derivative

## Cylindrical Coordinates

The divergence of a vector field \\(\small \mathbf{F}\\) in cylindrical coordinates is given by:

$$ \nabla \cdot \mathbf{F}  = \frac{1}{\rho} \frac{\partial}{\partial \rho} (\rho F_\rho) + \frac{1}{\rho} \frac{\partial F_\phi}{\partial \phi} + \frac{\partial F_z}{\partial z} $$

Where:
- \\(\small \rho\\) is the radial coordinate, \\(\small \phi\\) is the azimuthal coordinate, and \\(\small z\\) is the vertical coordinate.

## Spherical Coordinates

The divergence of a vector field \\(\small \mathbf{F}\\) in spherical coordinates is given by:

$$ \nabla \cdot \mathbf{F}  = \frac{1}{r^2} \frac{\partial}{\partial r} (r^2 F_r) + \frac{1}{r \sin \theta} \frac{\partial}{\partial \theta} (\sin \theta F_\theta) + \frac{1}{r \sin \theta} \frac{\partial F_\varphi}{\partial \varphi} $$

Where:
- \\(\small r\\) is the radial coordinate, \\(\small \theta\\) is the polar angle, and \\(\small \varphi\\) is the azimuthal angle.

## Sources

- [Wikipedia](https://en.wikipedia.org/wiki/Divergence)
- [Khan Academy](https://www.khanacademy.org/math/multivariable-calculus/divergence-and-curl-grad/defining-divergence/v/definition-of-divergence)

## See also
- [Curl](/formulas/curl/)
- [Gradient](/formulas/gradient/)
