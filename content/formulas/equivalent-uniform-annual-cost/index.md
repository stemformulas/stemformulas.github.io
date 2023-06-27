---
title: "Equivalent Uniform Annual Cost"
description: "Formulas for converting between present worth, annual worth, and future worth"
summary: "Formulas for converting between present worth, annual worth, and future worth"
tags: ["math", "finance"]
date: 2023-06-24
latex: A = P \left[\frac{i(1 + i)^n}{(1 + i)^n - 1}\right]
---

## Present Worth to Annual Worth

For a sum of money \\(\small P\\) invested at a compounding interest rate \\(\small i\\) for \\(\small n\\) years, the equivalent uniform annual cost (a.k.a "ordinary annuity, capital recovery cost") \\(\small A\\) is given by:

{{< katex >}}

$$A = P \cdot (A/P, i, n) = P \left[\frac{i(1 + i)^n}{(1 + i)^n - 1}\right] $$


Where

* \\(\small P\\) is the present value,
* \\(\small i\\) is the interest rate, and
* \\(\small n\\) is the number of periods

This can be rewritten to find P ("series present worth"):

$$P = A \cdot (P/A, i, n) = A \left[\frac{(1 + i)^n - 1}{i(1 + i)^n}\right]$$

## Future Worth to Annual Worth

If the future worth is known instead, the formula is

$$A = F \cdot (A/F, i, n) = F \left[\frac{i}{(1 + i)^n - 1}\right]$$

Rearranging again, F can be found instead if A is known:

$$F = A \cdot (F/A , i, n) = A \left[\frac{(1 + i)^n - 1}{i}\right]$$



## Sources
Note that these sources use a slightly rearranged form of the formula, but it is equivalent.
- [Investopedia](https://www.investopedia.com/retirement/calculating-present-and-future-value-of-annuities/)
- [Investopedia](https://www.investopedia.com/terms/f/future-value-annuity.asp)
- [financeformulas.net](hhttps://financeformulas.net/Present_Value_of_Annuity.html)