---
title: Bayes' Theorem
description: "The formula for Bayes' Theorem."
summary: "The formula for Bayes' Theorem."
tags: ["mathematics", "probability", "statistics"]
date: 2023-07-16
latex: "P(A|B) = \\frac{P(B|A)P(A)}{P(B)}"
---

{{< katex >}}

Bayes' Theorem is given by the formula:

$$ P(A|B) = \frac{P(B|A)P(A)}{P(B)} $$

Where

* \\(\small P(A|B)\\) is the probability of event \\(A\\) given event \\(B\\),
* \\(\small P(B|A)\\) is the probability of event \\(B\\) given event \\(A\\),
* \\(\small P(A)\\) is the probability of event \\(A\\), and
* \\(\small P(B)\\) is the probability of event \\(B\\).

## Expanded form

The denominator can also be expanded using the law of total probability to give:

$$ P(A|B) = \frac{P(B|A)P(A)}{P(B|A)P(A) + P(B|\neg A)P(\neg A)} $$

Where \\(\small \neg A\\) is the complement of \\(\small A\\).

## Intuition

This video by 3Blue1Brown was the single biggest help in my understanding of Bayes' Theorem, you should definitely watch it if you're struggling to understand it:

{{< youtube id="HZGCoVF3YvM" >}}

## Sources

- [Wikipedia](https://en.wikipedia.org/wiki/Bayes%27_theorem)
- [Math is Fun](https://www.mathsisfun.com/data/bayes-theorem.html)