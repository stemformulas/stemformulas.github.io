// @flow
// modified by Kevin from https://github.com/KaTeX/KaTeX/blob/main/contrib/copy-tex/katex2tex.js and https://github.com/KaTeX/KaTeX/blob/main/contrib/copy-tex/copy-tex.js

// Set these to how you want inline and display math to be delimited.
const defaultCopyDelimiters = {
    inline: ['$', '$'],    // alternative: ['\(', '\)']
    display: ['$$', '$$'], // alternative: ['\[', '\]']
};

// Replace .katex elements with their TeX source (<annotation> element).
// Modifies fragment in-place.  Useful for writing your own 'copy' handler,
// as in copy-tex.js.
function katexReplaceWithTex(
    fragment,
    copyDelimiters = defaultCopyDelimiters
) {
    // Remove .katex-html blocks that are preceded by .katex-mathml blocks
    // (which will get replaced below).
    const katexHtml = fragment.querySelectorAll('.katex-mathml + .katex-html');
    for (let i = 0; i < katexHtml.length; i++) {
        const element = katexHtml[i];
        if (element.remove) {
            element.remove();
        } else if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }
    // Replace .katex-mathml elements with their annotation (TeX source)
    // descendant, with inline delimiters.
    const katexMathml = fragment.querySelectorAll('.katex-mathml');
    for (let i = 0; i < katexMathml.length; i++) {
        const element = katexMathml[i];
        const texSource = element.querySelector('annotation');
        if (texSource) {
            if (element.replaceWith) {
                element.replaceWith(texSource);
            } else if (element.parentNode) {
                element.parentNode.replaceChild(texSource, element);
            }
            texSource.innerHTML = copyDelimiters.inline[0] +
                texSource.innerHTML + copyDelimiters.inline[1];
        }
    }
    // Switch display math to display delimiters.
    const displays = fragment.querySelectorAll('.katex-display annotation');
    for (let i = 0; i < displays.length; i++) {
        const element = displays[i];
        element.innerHTML = copyDelimiters.display[0] +
            element.innerHTML.substr(copyDelimiters.inline[0].length,
                element.innerHTML.length - copyDelimiters.inline[0].length
                - copyDelimiters.inline[1].length)
            + copyDelimiters.display[1];
    }
    return fragment;
}


// Return <div class="katex"> element containing node, or null if not found.
function closestKatex(node) {
    // If node is a Text Node, for example, go up to containing Element,
    // where we can apply the `closest` method.
    const element =
        node instanceof Element ? node : node.parentElement;
    return element && element.closest('.katex');
}


// Global click handler to copy the element to the clipboard.
document.addEventListener('click', function(event) {
    const target = event.target;
    const katexElement = closestKatex(target);
    if (katexElement && katexElement.contains(target)) {
        const range = document.createRange();
        range.selectNode(katexElement);
        const selection = window.getSelection();
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
            const fragment = range.cloneContents();
            if (fragment.querySelector('.katex-mathml')) {
                const texContents = katexReplaceWithTex(fragment).textContent;
                navigator.clipboard.writeText(texContents).then(function() {
                    console.log("Copied");

                    // Create a temporary element to display the "Copied!" message
                    const tooltipElement = document.createElement('div');
                    tooltipElement.classList.add('katex-tooltip');
                    tooltipElement.textContent = 'Copied!';
                    document.body.appendChild(tooltipElement);

                    // Position the tooltip that says copied at the mouse position
                    tooltipElement.style.position = 'fixed';
                    tooltipElement.style.left = event.clientX + 'px';
                    tooltipElement.style.top = event.clientY + 'px';
                    tooltipElement.style.transform = 'translate(-50%, -50%)';

                    // Remove the tooltip after 2 seconds with a fade
                    setTimeout(function() {
                        tooltipElement.classList.add('hide');
                        setTimeout(function() {
                          document.body.removeChild(tooltipElement);
                        }, 500); // Duration of the fade-out animation
                      }, 800); 
                }).catch(function(error) {
                    console.error("Copy failed:", error);
                });
            }
            selection.removeAllRanges();
        }
    }
});

