import { createFileRoute, redirect } from "@tanstack/react-router";
import { routeHead } from "@/components/route-meta";

export const Route = createFileRoute("/solutions-accueil")({
  head: () =>
    routeHead(
      "Nos modes d’accueil — page déplacée",
      "Retrouvez les modes d’accueil des Jardins d’Éleusis sur la page Nos modes d’accueil.",
      "/nos-modes-accueil",
    ),
  staticData: { sitemap: false },
  beforeLoad: () => {
    throw redirect({ to: "/nos-modes-accueil", statusCode: 301, replace: true });
  },
});
