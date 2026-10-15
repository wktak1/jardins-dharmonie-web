import { createFileRoute, redirect } from "@tanstack/react-router";
import { routeHead } from "@/components/route-meta";

export const Route = createFileRoute("/etablissement")({
  head: () =>
    routeHead(
      "L’établissement — page déplacée",
      "Retrouvez l’histoire et les valeurs des Jardins d’Éleusis sur la page Présentation.",
      "/presentation",
    ),
  beforeLoad: () => {
    throw redirect({ to: "/presentation", statusCode: 301, replace: true });
  },
});