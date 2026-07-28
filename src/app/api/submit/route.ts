export async function POST(request: Request) {
  const body = await request.json();
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [
        {
          title: "New stemformulas.com formula suggestion",
          color: 0x00ff00,
          fields: [
            { name: "Title", value: body.title || "n/a", inline: true },
            {
              name: "Description",
              value: body.description || "n/a",
              inline: true,
            },
            { name: "Tags", value: body.tags || "n/a", inline: true },
            {
              name: "LaTeX",
              value: `\`\`\`latex\n${body.latex || "n/a"}\n\`\`\``,
              inline: false,
            },
            {
              name: "Body",
              value: `\`\`\`markdown\n${body.body || "n/a"}\n\`\`\``,
              inline: false,
            },
          ],
        },
      ],
    }),
  });

  if (!res.ok) {
    return Response.json({ error: "Webhook failed" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
