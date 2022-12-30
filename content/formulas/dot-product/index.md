---
title: "Dot Product"
description: "The dot product is a common operation in linear algebra and beyond."
summary: "The dot product is a common operation in linear algebra and beyond."
tags: ["math", "linear algebra", "vector calculus"]
date: 2022-12-29
latex: \vec{a} \cdot \vec{b} = \sum_{i=1}^n a_i b_i
---
{{< katex >}}
For two vectors \\(\small \vec{a}\\) and \\(\small \vec{b}\\) in \\(\small \mathbb{R}^n\\) ([real coordinate spaces](https://en.wikipedia.org/wiki/Real_coordinate_space), the dot product is defined as

$$ \vec{a} \cdot \vec{b} = \sum_{i=1}^n a_i b_i $$

Where
* \\(\small a_i\\) and \\(\small b_i\\) are the \\(\small i\\)-th components of \\(\small \vec{a}\\) and \\(\small \vec{b}\\), respectively, and
* \\(\small n\\) is the dimension of \\(\small \vec{a}\\) and \\(\small \vec{b}\\).

## Alternative definition

Given that \\(\small \vec{a}\\) and \\(\small \vec{b}\\) are vectors with lengths \\(\small |a|\\) and \\(\small |b|\\), respectively, the dot product is also equal to

$$ \vec{a} \cdot \vec{b} = |a| |b| \cos \theta $$

Where \\(\small \theta\\) is the angle between \\(\small \vec{a}\\) and \\(\small \vec{b}\\).


## Properties

* \\(\small \vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}\\)
* \\(\small (\vec{a} + \vec{b}) \cdot \vec{c} = \vec{a} \cdot \vec{c} + \vec{b} \cdot \vec{c}\\)
* \\(\small \vec{a} \cdot \vec{a} = |a|^2\\)
* \\(\small \vec{a} \cdot \vec{b} = 0\\) if and only if \\(\small \vec{a}\\) and \\(\small \vec{b}\\) are orthogonal
* For a scalar s, \\((\small s \vec{a}) \cdot \vec{b} = s \cdot (\vec{a} \cdot  \vec{b})\\)

## Sources
- [Wikipedia](https://en.wikipedia.org/wiki/Dot_product)
- [Swarthmore.edu](https://mathimages.swarthmore.edu/index.php/Dot_Product)