---
title: Taylor & Maclaurin Series
description: "Power series representations of functions."
summary: "Power series representations of functions."
tags: ["mathematics", "calculus"]
date: 2023-07-23
latex: f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} \cdot (x - a)^n
---

{{< katex >}}

## Taylor Series

The Taylor series is a power series representation of a function. It is a way to approximate a function as an infinite sum of terms. The Taylor series is centered around a point \\( \small a \\) and is given by the summation:

$$ f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} \cdot (x - a)^n $$

Where

* \\( \small  f(x)  \\) is the function being approximated,
* \\( \small  f^{(n)}(a)  \\) denotes the \\( \small  n  \\)th derivative of the function evaluated at \\( \small  x = a  \\),
* \\( \small  a  \\) is the point around which the series is centered, and
* \\( \small  n!  \\) is the factorial of \\( \small  n  \\)

## Maclaurin Series

The Maclaurin series is a special case of the Taylor series where the series is centered around \\( \small  a = 0  \\). The Maclaurin series is then given by the summation:

$$ f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} \cdot x^n $$


## Sources

- [Wikipedia](https://en.wikipedia.org/wiki/Taylor_series)
- [BYJU'S](https://byjus.com/maclaurin-series-formula/)

## See also

- [Mcalaurin Series for exp(x)](/formulas/taylor-expansion-of-e/)