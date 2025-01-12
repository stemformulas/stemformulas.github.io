---
title: Incompressible Navier-Stokes Eqns.
description: "The incompressible Navier-Stokes equations describe the motion of incompressible fluid substances."
summary: "The incompressible Navier-Stokes equations describe the motion of incompressible fluid substances."
tags: ["fluid mechanics", "physics"]
date: 2025-01-11
showTableOfContents: false
latex: \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0
---

{{< katex >}}

The incompressible Navier-Stokes  equations are a simpler form of the [Navier-Stokes equations](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations) that describe the motion of incompressible (\\( \small \rho \\) = constant) fluid substances. This page focuses on the 3-dimensional equations.

## Cartesian Coordinates
For cartesian coordinates \\( \small x, y, z \\) and time \\( \small t \\), the incompressible Navier-Stokes equations are:

### Continuity Equation
$$ \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0 $$

### X-momentum Equation
$$ \rho \left(\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z}\right) = - \frac{\partial P}{\partial x} + \mu \left( \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} \right) + \rho g_x$$

### Y-momentum Equation
$$ \rho \left(\frac{\partial v}{\partial t} + u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} + w \frac{\partial v}{\partial z}\right) = - \frac{\partial P}{\partial y} + \mu \left( \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} + \frac{\partial^2 v}{\partial z^2} \right) + \rho g_y$$

### Z-momentum Equation
$$ \rho \left(\frac{\partial w}{\partial t} + u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z}\right) = - \frac{\partial P}{\partial z} + \mu \left( \frac{\partial^2 w}{\partial x^2} + \frac{\partial^2 w}{\partial y^2} + \frac{\partial^2 w}{\partial z^2} \right) + \rho g_z$$

Where

* \\(\small \rho\\) is the fluid density,
* \\(\small P\\) is the pressure,
* \\(\small u\\), \\(\small v\\), and \\(\small w\\) are the velocity components in the \\(x\\), \\(y\\), and \\(z\\) directions, respectively.
* \\(\small g_x\\), \\(\small g_y\\), and \\(\small g_z\\) are the components of the gravitational acceleration vector, and
* \\(\small \mu\\) is the dynamic viscosity of the fluid.

## Cylindrical Coordinates
For cylindrical coordinates \\( \small r, \theta, z \\) and time \\( \small t \\), the incompressible Navier-Stokes equations are:

### Continuity Equation
$$ \frac{1}{r} \frac{\partial (r u_r)}{\partial r} + \frac{1}{r} \frac{\partial (u_{\theta})}{\partial \theta} + \frac{\partial (u_{z})}{\partial z} = 0 $$

### R-component
$$ \rho \left(\frac{\partial u_r}{\partial t} + u_r \frac{\partial u_r}{\partial r} + \frac{u_{\theta}}{r} \frac{\partial u_r}{\partial \theta}  - \frac{u_{\theta}^2}{r} + u_z \frac{\partial u_r}{\partial z} \right) = - \frac{\partial P}{\partial r} + \rho g_r+ \mu \left[ \frac{1}{r} \frac{\partial}{\partial r} \left(r \frac{\partial u_r}{\partial r}\right) - \frac{u_r}{r^2} + \frac{1}{r^2} \frac{\partial^2 u_r}{\partial \theta^2} -\frac{2}{r^2} \frac{\partial u_{\theta}}{\partial \theta} +  \frac{\partial^2 u_r}{\partial z^2} \right] $$ 

### \\(\small \theta\\)-component
Here is the transcribed equation in the requested single-line LaTeX format:

$$ \rho \left(\frac{\partial u_{\theta}}{\partial t} + u_{r} \frac{\partial u_{\theta}}{\partial r} + \frac{u_{\theta}}{r} \frac{\partial u_{\theta}}{\partial \theta} + \frac{u_{r} u_{\theta}}{r} + u_{z} \frac{\partial u_{\theta}}{\partial z} \right) = - \frac{1}{r} \frac{\partial P}{\partial \theta} + \rho g_{\theta} + \mu \left[ \frac{1}{r} \frac{\partial}{\partial r} \left(r \frac{\partial u_{\theta}}{\partial r}\right) - \frac{u_{\theta}}{r^{2}} + \frac{1}{r^{2}} \frac{\partial^{2} u_{\theta}}{\partial \theta^{2}} + \frac{2}{r^{2}} \frac{\partial u_{r}}{\partial \theta} + \frac{\partial^{2} u_{\theta}}{\partial z^{2}} \right] $$


### Z-component

$$ \rho \left(\frac{\partial u_z}{\partial t} + u_r \frac{\partial u_z}{\partial r} + \frac{u_{\theta}}{r} \frac{\partial u_z}{\partial \theta} + u_z \frac{\partial u_z}{\partial z} \right) = - \frac{\partial P}{\partial z} + \rho g_z + \mu \left[ \frac{1}{r} \frac{\partial}{\partial r} \left(r \frac{\partial u_z}{\partial r}\right) + \frac{1}{r^2} \frac{\partial^2 u_z}{\partial \theta^2} + \frac{\partial^2 u_z}{\partial z^2} \right] $$

Where:
- \\(\small u_r\\), \\(\small u_{\theta}\\), and \\(\small u_z\\) are the velocity components in the \\(r\\), \\(\theta\\), and \\(z\\) directions, and
- \\(\small g_r\\), \\(\small g_{\theta}\\), and \\(\small g_z\\) are the components of the gravitational acceleration vector in the \\(r\\), \\(\theta\\), and \\(z\\) directions, respectively.

## Sources

- [Peter's Engineering Blog](http://petersengineering.blogspot.com/2015/06/navier-stokes-equation-for-3d.html)
- [Fluid Mechanics, Cengel & Cimbala 4th Ed. P474-475](https://archive.org/details/ed4_20201119)