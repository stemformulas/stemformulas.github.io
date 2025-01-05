function sanitizeInput(input) {
    return DOMPurify.sanitize(input);
  }
  // Function to render the preview
  function renderPreview() {
    const title = sanitizeInput(document.getElementById('title').value);
    const body = sanitizeInput(document.getElementById('body').value);
    const latex = sanitizeInput(document.getElementById('latex').value);
    const tags = sanitizeInput(document.getElementById('tags').value).split(',').map(tag => tag.trim());
    const parsedBody = marked.parse(body);

    const tagsHTML = tags
      .map((tag) => {
        return `
          <a
            class="rounded-md border border-neutral-200 px-2 py-[1px] hover:border-black hover:text-primary-700 dark:border-neutral-600 dark:hover:border-primary-600 dark:hover:text-primary-400"
          >
            ${tag}
          </a>
        `;
      })
      .join(' '); // Join the tags with a space

    const previewContent = `
      <article>
        <header class="max-w-prose">
          <h1 class="mt-0 text-4xl font-extrabold text-neutral-900 dark:text-neutral">
            ${title}
          </h1>
          <div class="my-2 text-xs text-neutral-500 dark:text-neutral-400">
            ${tagsHTML}
          </div>
          <div class="mt-8 mb-12 text-base text-neutral-500 dark:text-neutral-400 print:hidden prose">
            ${parsedBody}
          </div>
        </header>
      </article>
    `;

    document.getElementById('preview-content').innerHTML = previewContent;
    document.getElementById('preview').classList.remove('hidden');

    // Render LaTeX
    if (typeof renderMathInElement !== 'undefined') {
      renderMathInElement(document.getElementById('preview-content'), {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\(', right: '\\)', display: false }
        ]
      });
    }
  }

  // Function to send data to Discord webhook
  function submitToDiscord() {
    const title = sanitizeInput(document.getElementById('title').value);
    const description = sanitizeInput(document.getElementById('description').value);
    const tags = sanitizeInput(document.getElementById('tags').value);
    const latex = sanitizeInput(document.getElementById('latex').value);
    const body = sanitizeInput(document.getElementById('body').value);

    const webhookURL = 'https://discord.com/api/webhooks/1059998584889688134/eUqXbInp90bcFdL1A3ly141TAtn9jiPjbYwCzSfjPV2-4kx2UIX3M-soCJxWTrvSNbLP'; // Replace with your Discord webhook URL

    const data = {
      embeds: [
        {
          title: "New stemformulas.com formula suggestion",
          fields: [
            {
              name: "Title",
              value: title,
              inline: true,
            },
            {
              name: "Description",
              value: description,
              inline: true,
            },
            {
              name: "Tags",
              value: tags,
              inline: true,
            },
            {
              name: "LaTeX",
              value: `\`\`\`latex\n${latex}\n\`\`\``,
              inline: false,
            },
            {
              name: "Body",
              value: `\`\`\`markdown\n${body}\n\`\`\``,
              inline: false,
            },
          ],
          color: 0x00ff00, // Green color for the embed
        },
      ],
    };

    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert('Submission sent successfully. Thank you!');
        } else {
          alert('Failed to send submission. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      });
  }

  // Attach the form submission handler
  document.getElementById('formula-suggestion-form').addEventListener('submit', function(event) {
    event.preventDefault();
    renderPreview();
    // Show the "Submit" button once the preview has been rendered once
    document.getElementById('submit-button').classList.remove('hidden');
  });

  function handleRateLimit() {
      // limit submissions so we can't get spammed
      const submitButton = document.getElementById('submit-button');
      const lastSubmissionTime = localStorage.getItem('lastSubmissionTime');
      const currentTime = new Date().getTime();

      // Check if 5 minutes have passed since the last submission
      const timeLeft = 120000 - (currentTime - lastSubmissionTime);
      if (lastSubmissionTime && timeLeft > 0) {
          alert(`Please wait ${Math.ceil(timeLeft / 1000)} seconds before submitting again.`);
          return;
      }

      // Disable the button and store the current time
      submitButton.disabled = true;
      localStorage.setItem('lastSubmissionTime', currentTime);

      // Submit the data to Discord
      submitToDiscord();

      // Re-enable the button after the correct time has elapsed
      setTimeout(() => {
          submitButton.disabled = false;
      }, timeLeft);
  }

  // Attach the "Submit" button click handler
  document.getElementById('submit-button').addEventListener('click', function() {
      handleRateLimit();
  });

  // Render the preview when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    renderPreview();
  });