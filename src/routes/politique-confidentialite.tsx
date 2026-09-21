import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-layout";
import { routeHead } from "@/components/route-meta";
export const Route = createFileRoute("/politique-confidentialite")({
  head: () =>
    routeHead(
      "Politique de confidentialité",
      "Politique de confidentialité du site des Jardins d’Eleusis.",
      "/politique-confidentialite",
    ),
  staticData: { sitemap: true },
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro title="Politique de confidentialité">
        <p>Une présentation transparente du fonctionnement de ce site.</p>
      </PageIntro>
      <section className="section-pad">
        <div className="container-narrow space-y-8">
          <div>
            <h2>Données collectées</h2>
            <p className="mt-3 text-muted-foreground">
              Cette première version ne propose ni compte utilisateur, ni formulaire, ni outil de
              suivi publicitaire.
            </p>
          </div>
          <div>
            <h2>Cookies</h2>
            <p className="mt-3 text-muted-foreground">
              Aucun cookie non essentiel n’est installé par cette première version du site.
            </p>
          </div>
          <div>
            <h2>Services externes</h2>
            <p className="mt-3 text-muted-foreground">
              La carte intégrée est chargée depuis Google Maps uniquement lorsqu’elle apparaît à
              l’écran. Les conditions de confidentialité de ce service peuvent alors s’appliquer.
            </p>
          </div>
          <div>
            <h2>Contact</h2>
            <p className="mt-3 text-muted-foreground">Pour toute question : accueil@eleusis.nc.</p>
          </div>
        </div>
      </section>
    </>
  );
}
