import { generateDeepLinkHTML } from "../_shared/deeplink.js";

export async function onRequest(context) {
  const id = context.params.id;

  const html = generateDeepLinkHTML({
    path: `/c/${id}`,
    title: "Opening channel...",
    description: "You're being redirected to view this channel in the BLVCK app.",
  });

  return new Response(html, {
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    },
  });
}
