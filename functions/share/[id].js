import { generateDeepLinkHTML } from "../_shared/deeplink.js";

export async function onRequest(context) {
  const id = context.params.id;

  const html = generateDeepLinkHTML({
    path: `/share/${id}`,
    title: "Opening shared content...",
    description: "You're being redirected to view shared content in the 100X app.",
  });

  return new Response(html, {
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    },
  });
}
