---
title: Determinants of Matrices
description: "The formula for the determinant of a matrix."
summary: "The formula for the determinant of a matrix."
tags: ["math", "linear algebra"]
date: 2023-01-01
latex: \det(A)
---

{{< katex >}}

The determinant of a matrix is a scalar value that can be calculated from the elements of the matrix. It is denoted by \\(\small \det(A)\\) or \\(\small |A|\\).

$$ \det\begin{bmatrix}\\
    	    a & b\\\\
    	    c & d\\\\
    	\end{bmatrix}=ad-cb $$
    
$$\det\begin{bmatrix}
    	    a & b & c\\\\
    	    d & e & f\\\\
    	    g & h & i
    	\end{bmatrix}=a\begin{vmatrix}
    	    e & f\\\\
    	    h & i
    	\end{vmatrix}-b\begin{vmatrix}
    	    d & f\\\\
    	    g & i
    	\end{vmatrix}+c\begin{vmatrix}
    	    d & e\\\\
    	    g & h
    	\end{vmatrix}$$

The pattern continues for larger matrices, here is an [example of a 4x4 matrix determinant by Byju's](https://byjus.com/maths/determinant-of-4x4-matrix/).

## Sources
- [Wikipedia](https://en.wikipedia.org/wiki/Determinant)
- [Khan Academy](https://www.khanacademy.org/math/algebra-home/alg-matrices/alg-determinants-and-inverses-of-large-matrices/v/finding-the-determinant-of-a-3x3-matrix-method-2)