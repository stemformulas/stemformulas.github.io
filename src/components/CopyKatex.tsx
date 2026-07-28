"use client";

import { useEffect } from "react";

export default function CopyKatex() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const ancestor = target.closest(".katex");
      if (!ancestor) return;

      const latex = ancestor
        .querySelector(".katex-mathml")
        ?.querySelector("annotation")?.textContent;
      if (!latex) return;

      const isDisplay =
        ancestor.parentElement?.classList.contains("katex-display");
      const copyString = isDisplay ? `$$${latex}$$` : `$${latex}$`;

      navigator.clipboard.writeText(copyString).then(() => {
        console.log("Clipboard write SUCCESS");
        const tooltip = document.createElement("div");
        tooltip.className = "katex-tooltip";
        tooltip.textContent = "LaTeX Copied!";
        tooltip.style.left = `${e.clientX}px`;
        tooltip.style.top = `${e.clientY}px`;
        tooltip.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(tooltip);

        setTimeout(() => {
          tooltip.classList.add("hide");
          setTimeout(() => {
            document.body.removeChild(tooltip);
          }, 500);
        }, 800);
      }).catch((err) => {
        console.error("Clipboard write failed:", err);
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
