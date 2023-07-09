---
title: Gradient
description: "The concept of gradient in vector calculus."
summary: "The concept of gradient in vector calculus."
tags: ["math", "vector calculus"]
date: 2023-07-08
latex: \nabla f = \frac{\partial f}{\partial x} \mathbf{i} + \frac{\partial f}{\partial y} \mathbf{j} + \frac{\partial f}{\partial z} \mathbf{k}
---

{{< katex >}}

The gradient represents the direction and magnitude of the steepest ascent of the function \\\( \small f \\) at any given point.

## Cartesian Coordinates

The gradient of a scalar function \\\( \small f \\) in cartesian coordinates is given by:

$$ \nabla f = \frac{\partial f}{\partial x} \mathbf{i} + \frac{\partial f}{\partial y} \mathbf{j} + \frac{\partial f}{\partial z} \mathbf{k} $$


Where:
- \\\( \small \\nabla \\) represents the del operator (also known as the gradient operator),
- \\\( \small \mathbf{i}, \mathbf{j}, \mathbf{k} \\) are the unit vectors in the x, y, and z directions respectively, and
- \\( \partial \\) represents the partial derivative operator.

## Cylindrical Coordinates

The gradient of a scalar function \\( \small f \\) in cylindrical coordinates is given by:

$$ \nabla f = \frac{\partial f}{\partial \rho} \hat{\rho} + \frac{1}{\rho} \frac{\partial f}{\partial \varphi} \hat{\varphi} + \frac{\partial f}{\partial z} \hat{z}$$

Where:
- \\( \small \rho \\) is the radial coordinate, \\( \small \varphi \\) is the azimuthal coordinate, and \\( \small z \\) is the vertical coordinate,
- \\( \hat{\rho}, \hat{\varphi}, \hat{z} \\) are the unit vectors in the \\( \small \rho, \varphi, z \\) directions respectively.


## Spherical Coordinates

The gradient of a scalar function \\( \small f \\) in spherical coordinates is given by:

$$ \nabla f = \frac{\partial f}{\partial r} \hat{r} + \frac{1}{r} \frac{\partial f}{\partial \theta} \hat{\theta} + \frac{1}{r \sin \theta} \frac{\partial f}{\partial \varphi} \hat{\varphi} $$

Where:
- \\( \small r \\) is the radial coordinate, \\( \small \theta \\) is the polar coordinate, and \\( \small \varphi \\) is the azimuthal coordinate, and
- \\( \hat{r}, \hat{\theta}, \hat{\varphi} \\) are the unit vectors in the \\( \small r, \theta, \varphi \\) directions respectively.

## Sources

- [Wikipedia](https://en.wikipedia.org/wiki/Gradient)
- [Profound Physics](https://profoundphysics.com/gradient-in-different-coordinates/)

## See also
- [Divergence](/formulas/divergence/)
- [Curl](/formulas/curl/)