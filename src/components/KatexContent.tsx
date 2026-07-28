"use client";

import { useEffect, useRef } from "react";
import katex from "katex";

const INLINE = /\$([^$\n]+?)\$/g;
const DISPLAY = /\$\$([\s\S]+?)\$\$/g;

function renderMath(el: HTMLElement) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
  const textNodes: Text[] = [];
  let node: Text | null;
  while ((node = walker.nextNode() as Text | null)) {
    textNodes.push(node);
  }

  for (const textNode of textNodes) {
    const text = textNode.textContent || "";
    if (!text.includes("$")) continue;

    const span = document.createElement("span");
    span.innerHTML = text.replace(DISPLAY, (_, math) =>
      katex.renderToString(math.trim(), { displayMode: true, throwOnError: false })
    ).replace(INLINE, (_, math) =>
      katex.renderToString(math.trim(), { displayMode: false, throwOnError: false })
    );

    textNode.parentNode?.replaceChild(span, textNode);
  }
}

export default function KatexContent({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);

  useEffect(() => {
    if (!ref.current || rendered.current) return;
    renderMath(ref.current);
    rendered.current = true;
  });

  return <div ref={ref}>{children}</div>;
}
