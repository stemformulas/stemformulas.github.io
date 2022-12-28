---
title: "Definition of the Derivative"
description: "The definition of the derivative."
summary: "The definition of the derivative."
tags: ["math", "calculus", "limits", "differentiation"]
date: 2022-12-26
latex: \frac{d}{dx}f(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}
---

{{< katex >}}

$$ \frac{d}{dx}f(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h} $$

Where
* \\(f(x)\\) is a function,
* \\(x\\) is the independent variable, and
* \\(h\\) is an increment that we take to 0 in the limit.

## Sources
- [Wikipedia](https://en.wikipedia.org/wiki/Derivative#Definition)
- [Wolfram MathWorld](https://mathworld.wolfram.com/Derivative.html)

## Example
Find the derivative of \\(f(x) = x^2\\) at \\(x=2\\) using the definition of the derivative.

We can plug in everything into the definition to get the answer:

$$ \scriptsize \frac{d}{dx}f(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h} = \lim_{h\to 0}\frac{(x+h)^2-x^2}{h} = \lim_{h\to 0}\frac{x^2+2xh+h^2-x^2}{h} $$

$$ \scriptsize = \lim_{h\to 0}\frac{2xh+h^2}{h} = \lim_{h\to 0}2x+2h  = 2x $$

Evaluated at \\(x=2\\), we get \\(4\\).
