---
title: Curl
description: "The concept of curl in vector calculus."
summary: "The concept of curl in vector calculus."
tags: ["math", "vector calculus"]
date: 2023-07-08
showTableOfContents: false
latex: \scriptsize \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\\\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\\\ F_x & F_y & F_z \end{vmatrix}
---

{{< katex >}}

The curl measures the rotation or circulation of the vector field \\( \small \mathbf{F} \\) at any given point in space.

## Cartesian Coordinates
In cartesian coordinates, the curl of a vector field \\( \small \mathbf{F} \\) is given by the determinant of the matrix:

$$
\nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\\\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\\\ F_x & F_y & F_z \end{vmatrix}
$$

Where:
- \\( \small \nabla \\) represents the del operator,
- \\(\partial \\) denotes the partial derivative,
- \\( \small \mathbf{i} \\), \\( \small \mathbf{j} \\), and \\( \small \mathbf{k} \\) are the unit vectors in the x, y, and z directions, respectively, and
- \\( \small F_x \\), \\( \small F_y \\), and \\( \small F_z \\) are the components of the vector field \\( \small \mathbf{F} \\).

Written out, this is:

$$ \nabla \times \mathbf{F} = \left( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right) \mathbf{i} + \left( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right) \mathbf{j} + \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) \mathbf{k} $$



## Cylindrical Coordinates

In cylindrical coordinates, the curl of a vector field \\( \small \mathbf{F} \\) is given by:

$$
\nabla \times \mathbf{F} = \left( \frac{1}{\rho} \frac{\partial F_z}{\partial \varphi} - \frac{\partial F_\varphi}{\partial z} \right) \hat{\rho} + \left( \frac{\partial F_\rho}{\partial z} - \frac{\partial F_z}{\partial \rho} \right) \hat{\varphi} + \frac{1}{\rho} \left( \frac{\partial}{\partial \rho} \left( \rho F_\varphi \right) - \frac{\partial F_\rho}{\partial \varphi} \right) \hat{z}
$$

Where:
- \\( \small \rho \\) is the distance from the z-axis, \\( \varphi \\) is the angle from the x-axis, and \\( \small z \\) is the height above the xy-plane, and
- \\( \small \hat{\rho} \\), \\( \small \hat{\varphi} \\), and \\( \small \hat{z} \\) are the unit vectors in the \\( \small \rho \\), \\( \small \varphi \\), and \\( \small z \\) directions, respectively.


## Spherical Coordinates

In spherical coordinates, the curl of a vector field \\( \small \mathbf{F} \\) is given by:

$$
\nabla \times \mathbf{F} = \frac{1}{r \sin \theta} \left( \frac{\partial (\sin \theta F\_\varphi)}{\partial \theta} - \frac{\partial F\_\theta}{\partial \varphi} \right) \hat{r} + \frac{1}{r} \left( \frac{1}{\sin \theta} \frac{\partial F\_r}{\partial \varphi} - \frac{\partial (r F_\varphi)}{\partial r} \right) \hat{\theta} + \frac{1}{r} \left( \frac{\partial (r F\_\theta)}{\partial r} - \frac{\partial F\_r}{\partial \theta} \right) \hat{\varphi}
$$

Where:
- \\( \small r \\) is the radial coordinate, \\( \small \theta \\) is the polar coordinate, and \\( \small \varphi \\) is the azimuthal coordinate, and
- \\( \hat{r}, \hat{\theta}, \hat{\varphi} \\) are the unit vectors in the \\( \small r, \theta, \varphi \\) directions respectively.

## Sources
- [Wikipedia](https://en.wikipedia.org/wiki/Curl_(mathematics))
- [Wikipedia](https://en.wikipedia.org/wiki/Del_in_cylindrical_and_spherical_coordinates)

## See also
- [Divergence](/formulas/divergence/)
- [Gradient](/formulas/gradient/)