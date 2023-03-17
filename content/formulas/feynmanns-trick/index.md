---
title: "Feynmann's Trick For Exponential Integrals"
description: "A niche trick for evaluation exponential integrals of a certain form."
summary: "A niche trick for evaluation exponential integrals of a certain form."
tags: ["math", "calculus"]
date: 2023-03-16
latex: \int_0^{\infty} x^n e^{-tx} dx = \frac{n!}{t^{n+1}}
---
{{< katex >}}

## Feynmann's Trick For Exponential Integrals
$$\int_0^{\infty} x^n e^{-tx} dx = \frac{n!}{t^{n+1}}$$

Where
* \\(t\\) is a constant and
* \\(n!\\) is the Gamma function (does not require \\(n\\) to be an integer)

Feynmann's trick involves "differentiating under the integral" which is a whole technique on its own, and the above formula is something that can be found using this technique.
I found that formula particularly hard to find online, so I decided to write it up.

## Sources
- [William's College (PDF Download)](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi3t_De6eH9AhVzJH0KHZZRAqEQFnoECAoQAQ&url=https%3A%2F%2Fweb.williams.edu%2FMathematics%2Flg5%2FFeynman.pdf&usg=AOvVaw3M8KPQi7yOMURJvX58YdNj)
