export function routeHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title: `${title} — Les Jardins d’Eleusis` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — Les Jardins d’Eleusis` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
