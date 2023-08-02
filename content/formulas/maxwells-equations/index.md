---
title: Maxwell's Equations
description: "The four Maxwell's equations describing electromagnetism."
summary: "The four Maxwell's equations in compact form."
tags: ["physics", "electromagnetism"]
date: 2023-08-02
latex: \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0},\  \nabla \cdot \mathbf{B} = 0,...
---

{{< katex >}}

Maxwell's Equations represent the fundamental laws of electromagnetism. 

There are two common forms of Maxwell's Equations: the differential form and the integral form.
## Differential form

In differential form, Maxwell's equations are given by:

$$ \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon\_0} $$

$$ \nabla \cdot \mathbf{B} = 0 $$

$$ \nabla \times \mathbf{E} = - \frac{\partial \mathbf{B}}{\partial t}$$

$$ \nabla \times \mathbf{B} = \mu\_0 \mathbf{J} + \mu\_0 \varepsilon\_0 \frac{\partial \mathbf{E}}{\partial t} $$

Where:

* \\(\small  \mathbf{E} \\) is the electric field vector,
* \\(\small  \mathbf{B} \\) is the magnetic field vector,
* \\(\small  \rho \\) is the electric charge density,
* \\(\small  \varepsilon_0 \\) is the vacuum permittivity (electric constant),
* \\(\small  \mu_0 \\) is the vacuum permeability (magnetic constant), and
* \\(\small  \mathbf{J} \\) is the electric current density.

Respectively, these equations are Gauss's Law, Gauss's Law for Magnetism, Faraday's Law, and Ampère's Law with Maxwell's Addition.

In a vacuum (where there is no charge or current), these simplify to:

$$ \nabla \cdot \mathbf{E} = 0 $$
$$ \nabla \cdot \mathbf{B} = 0 $$
$$ \nabla \times \mathbf{E} = - \frac{\partial \mathbf{B}}{\partial t}$$
$$ \nabla \times \mathbf{B} = \mu\_0 \varepsilon\_0 \frac{\partial \mathbf{E}}{\partial t} $$


## Integral form

In integral form, Maxwell's equations are given by:

$$ \oiint\_{\partial \Omega} \mathbf{E} \cdot d\mathbf{S} = \frac{Q}{\varepsilon\_0} = \frac{1}{\varepsilon\_0}\iiint_{\Omega} \rho \  dV $$
$$ \oiint\_{\partial \Omega} \mathbf{B} \cdot d\mathbf{S} = 0 $$
$$ \oint\_{\partial \Sigma} \mathbf{E} \cdot d\mathbf{l} = - \frac{\text{d}}{\text{d} t} \iint\_{\Sigma} \mathbf{B} \cdot d\mathbf{S} $$
$$ \oint\_{\partial \Sigma} \mathbf{B} \cdot d\mathbf{l} = \mu\_0 \iint\_{\Sigma} \mathbf{J} \cdot d\mathbf{S} + \mu\_0 \varepsilon\_0 \frac{\text{d}}{\text{d} t} \iint\_{\Sigma} \mathbf{E} \cdot d\mathbf{S} $$

Where:

* \\( \small  \mathbf{E} \\) is the electric field vector,
* \\(\small \mathbf{B} \\) is the magnetic field vector,
* \\(\small Q \\) is the electric charge enclosed by the volume \\(\small \Omega \\),
* \\( \mathbf{J} \\) is the electric current density,
* \\( \oiint\_{\partial \Omega} \\) is the surface integral over the closed surface \\( \partial \Omega \\),
* \\( \iiint\_{\Omega} \\) is the volume integral over the volume \\(\small \Omega \\),
* \\( \rho \\) is the electric charge density,
* \\( \oint\_{\partial \Sigma} \\) is the line integral over the closed curve \\( \partial \Sigma \\),
* \\( \iint\_{\Sigma} \\) is the surface integral over the surface \\(\small \Sigma \\),
* \\( \varepsilon_0 \\) is the vacuum permittivity (electric constant),
* \\( \mu_0 \\) is the vacuum permeability (magnetic constant), and
* \\( d \mathbf{l} \\), \\( d \mathbf{S} \\), and \\( dV \\) are the line, surface, and volume elements, respectively.

In a vacuum (where there is no charge or current), these simplify to:

$$ \oiint\_{\partial \Omega} \mathbf{E} \cdot d\mathbf{S} = 0 $$
$$ \oiint\_{\partial \Omega} \mathbf{B} \cdot d\mathbf{S} = 0 $$
$$ \oint\_{\partial \Sigma} \mathbf{E} \cdot d\mathbf{l} = - \frac{\text{d}}{\text{d} t} \iint\_{\Sigma} \mathbf{B} \cdot d\mathbf{S} $$
$$ \oint\_{\partial \Sigma} \mathbf{B} \cdot d\mathbf{l} = \mu\_0 \varepsilon\_0 \frac{\text{d}}{\text{d} t} \iint\_{\Sigma} \mathbf{E} \cdot d\mathbf{S} $$

## Sources

- [Wikipedia](https://en.wikipedia.org/wiki/Maxwell's_equations#Formulation_in_SI_units_convention)
- [HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/electric/maxeq.html)