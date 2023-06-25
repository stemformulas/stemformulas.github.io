---
title: "Equivalent Uniform Annual Cost"
description: "Formulas for converting between present worth, annual worth, and future worth"
summary: "Formulas for converting between present worth, annual worth, and future worth"
tags: ["math", "finance"]
date: 2023-06-24
latex: A = P \frac{i(1 + i)^n}{(1 + i)^n - 1}
---

## Present Worth to Annual Worth

For a sum of money \\(\small P\\) invested at a compounding interest rate \\(\small i\\) for \\(\small n\\) years, the equivalent uniform annual cost (a.k.a "ordinary annuity") \\(\small A\\) is given by:

{{< katex >}}

$$A = P \frac{i(1 + i)^n}{(1 + i)^n - 1} $$


Where

* \\(\small P\\) is the present value,
* \\(\small i\\) is the interest rate, and
* \\(\small n\\) is the number of periods

This can be rewritten to find P:

$$P = A \frac{(1 + i)^n - 1}{i(1 + i)^n}$$

## Future Worth to Annual Worth

If the future worth is known instead, the formula is

$$A = F \frac{i}{(1 + i)^n - 1}$$

Rearranging again, F can be found instead if A is known:

$$F = A \frac{(1 + i)^n - 1}{i}$$



## Sources
Note that these sources use a slightly rearranged form of the formula, but it is equivalent.
- [Investopedia](https://www.investopedia.com/retirement/calculating-present-and-future-value-of-annuities/)
- [Investopedia](https://www.investopedia.com/terms/f/future-value-annuity.asp)
- [financeformulas.net](hhttps://financeformulas.net/Present_Value_of_Annuity.html)