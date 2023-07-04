---
title: Fourier + Inverse Fourier Transform
description: "The Fourier and inverse Fourier transform formula."
summary: "The Fourier and inverse Fourier transform formula."
tags: ["mathematics", "signal processing", "optics"]
date: 2023-07-03
latex: X(\omega) = \int_{-\infty}^{\infty}x(t)e^{-j\omega t}\,dt
---

{{< katex >}}

## Fourier Transform
The Fourier transform is used to transform a signal from the time domain to the frequency domain.

The Fourier transform formula is:

$$ X(\omega) = \int_{-\infty}^{\infty}x(t)e^{-j\omega t}dt $$

Where

* \\( \small X(\omega) \\) is the Fourier transform of the function \\( \small x(t) \\),
* \\( \small x(t) \\) is the input signal in the time domain,
* \\( \small j \\) is the imaginary unit,
* \\( \small e \\) is Euler's number,
* \\( \small \omega \\) is the angular frequency.


## Inverse Fourier Transform
The inverse Fourier transform is used to transform a signal from the frequency domain to the time domain.

The inverse Fourier transform is:

$$ x(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty}X(\omega)e^{j\omega t}d\omega $$


Note that there are many conventions for these two transforms. \\(\small i \\) is often used as the imaginary unit, and in spatial contexts, \\(\small x \\) and \\(\small k \\) are often used instead of \\(\small t \\) and \\(\small \omega \\), respectively.

## Sources

- [Swarthmore College - LPSA](https://lpsa.swarthmore.edu/Fourier/Xforms/FXformIntro.html)
- [BYJU'S](https://byjus.com/maths/fourier-transform/)