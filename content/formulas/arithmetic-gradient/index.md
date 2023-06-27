---
title: "Arithmetic Gradients"
description: "Formulas for calculating the worth of an arithmetic gradient of cash"
summary: "Formulas for calculating the worth of an arithmetic gradient of cash"
tags: ["math", "finance"]
date: 2023-06-26
latex:  \scriptsize P = A \left[\frac{(1+i)^n-1}{i(1+i)^n}\right] + G \left[\frac{(1+i)^n-in-1}{i^2(1+i)^n}\right]
---

## Present Worth of an Arithmetic Gradient

For an arithmetic gradient of costs or benefits where \\(\small A\\) is received in the first period, \\(\small A + G\\) in the second period, \\(\small A + 2G\\) in the third period, and so on, the present worth \\(\small P\\) is given by:

{{< katex >}}

$$P = A \left[\frac{(1+i)^n-1}{i(1+i)^n}\right] + G \left[\frac{(1+i)^n-in-1}{i^2(1+i)^n}\right]$$

Where

* \\(\small P\\) is the present worth,
* \\(\small A\\) is the constant amount being added to in the gradient,
* \\(\small G\\) is the gradient or the constant increase per period,
* \\(\small i\\) is the interest rate, and
* \\(\small n\\) is the number of periods.

Note that this is just the sum of A being converted to P and G being converted to P using their respective factors.
## Uniform Series Worth of an Arithmetic Gradient

It is also possible to convert the linearly increasing series of payments (G) to a uniform series of payments (A) using the following formula:

$$ A = G \cdot (A/G, i ,n) = G \left[\frac{1}{i} - \frac{n}{(1+i)^n - 1}\right]$$



## Sources
- [Eastern Mediterranean University (PDF)](https://staff.emu.edu.tr/gokhanizbirak/Documents/courses/ieng323-mane323/assignments-homeworks/Formulas-Engineering-Economy.pdf)
