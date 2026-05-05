import { generateDeepLinkHTML } from "../_shared/deeplink.js";

export async function onRequest(context) {
  const id = context.params.id;

  const html = generateDeepLinkHTML({
    path: `/r/${id}`,
    title: "Referral link",
    description: "You've been invited to 100X! Download the app to claim your bonus.",
  });

  return new Response(html, {
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    },
  });
}
