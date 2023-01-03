---
title: L'Hopital's Rule
description: L'Hopital's rule is a method for evaluating limits of indeterminate forms.
summary: L'Hopital's rule is a method for evaluating limits of indeterminate forms.
tags: ["math", "calculus", "limits"]
date: 2023-01-03
latex: \lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}
---

{{< katex >}}

L'hopital's rule is a method for evaluating limits of [indeterminate form](https://en.wikipedia.org/wiki/Indeterminate_form).

$$\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}$$

Where
- \\( \small f(x) \\) and \\( \small g(x) \\) are functions,
- \\(\small '\\) denotes the derivative of a function, and
- \\( \small c \\) is the point at which the limit is being evaluated

## Sources
- [Wikipedia](https://en.wikipedia.org/wiki/L%27H%C3%B4pital%27s_rule)
- [Paul's Online Notes](https://tutorial.math.lamar.edu/classes/calci/lhospitalsrule.aspx)

## Example

Calculate the limit of \\(\small f(x) = \frac{x^2 - 9}{x - 3}\\) as \\(\small x\\) approaches \\(\small 3\\).

Since plugging in 3 yields 0/0 which is an indeterminate form, we can apply L'Hopital's rule, with \\( \small f(x) = x^2 - 9\\) and \\( \small g(x) = x - 3\\).

Taking both derivatives, we get \\( \small f'(x) = 2x\\) and \\( \small g'(x) = 1\\).

Plugging into the right side of the L'Hopital's rule, we get that

$$ \lim_{x \to 3} \frac{f(x)}{g(x)} = \lim_{x \to 3} \frac{f'(x)}{g'(x)} = \lim_{x \to 3} \frac{2x}{1} = 6$$
