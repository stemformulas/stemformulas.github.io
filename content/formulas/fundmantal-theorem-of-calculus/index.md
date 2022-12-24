---
title: Fundamental Theorem of Calculus
description: Fundamental Theorem of Calculus
summary: Fundamental Theorem of Calculus
tags: ["math", "calculus"]
date: 2022-12-23
latex: \int_a^b f(x) dx = F(b) - F(a)
---
{{< katex >}}
$$\int_a^b f(x) dx = F(b) - F(a)$$

Where
* \\(f\\) is a continuous function on \\([a, b]\\),
* \\(F\\) is an antiderivative of \\(f\\),
* \\(a\\) is the lower bound of the integral, and
* \\(b\\) is the upper bound of the integral.

This theorem, also known as the second fundamental theorem of calculus says that the definite integral of a continuous function on a closed interval is equal to the difference between the value of the antiderivative at the upper bound and the value of the antiderivative at the lower bound.

See Wolfram MathWorld below for the other two fundamental theorems of calculus.

## Sources
- [Wikipedia](https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus)
- [Wolfram MathWorld](https://mathworld.wolfram.com/FundamentalTheoremsofCalculus.html)

## Example
Due to his terrible posture, Kevin's back is approximately the shape of x^3 on the interval [0, 3]. Given that his chair is the x axis, what is the area between his back and his chair?

We know that the area between a curve and the x axis is equal to the definite integral of the curve. We also know that the definite integral of a function is equal to the difference between the value of the antiderivative at the upper bound and the value of the antiderivative at the lower bound. So we can plug in the values to get the answer, knowing that the antiderivative of x^3 is x^4/4:

$$\int_0^3 x^3 dx = F(3) - F(0)  = \frac{(3)^4}{4} - 0 = 20.25$$


