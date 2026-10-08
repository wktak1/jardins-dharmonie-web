import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ContactStrip,
  MediaPlaceholder,
  PageIntro,
  SectionHeading,
} from "@/components/site-layout";
import { routeHead } from "@/components/route-meta";
export const Route = createFileRoute("/etablissement")({
  head: () =>
    routeHead(
      "L’établissement",
      "Découvrez l’histoire, la localisation et les espaces de l’EHPAD Les Jardins d’Eleusis à Dumbéa.",
      "/etablissement",
    ),
  staticData: { sitemap: true },
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro eyebrow="L’établissement" title="Une histoire qui s’inscrit à Dumbéa">
        <p>
          Les Jardins d’Eleusis accueillent des personnes âgées au 364 bis route de Koé, à Dumbéa.
          L’établissement s’est développé en deux étapes confirmées : 2013 puis 2019.
        </p>
      </PageIntro>
      <section className="section-pad wood-grain border-b border-wood/30">
        <div className="container-shell">
          <SectionHeading title="L’évolution de l’établissement" />
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl border-t-4 border-wood bg-card p-5 shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--color-wood)_55%,transparent)] sm:p-7">
              <MediaPlaceholder label="Photographie aérienne — 2013" />
              <p className="eyebrow mt-5">2013</p>
              <h3 className="mt-2 text-2xl">Ouverture des Niaoulis</h3>
              <p className="mt-3 text-muted-foreground">
                L’unité Les Niaoulis ouvre avec 40 places.
              </p>
            </article>
            <article className="rounded-2xl border-t-4 border-wood bg-card p-5 shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--color-wood)_55%,transparent)] sm:p-7">
              <MediaPlaceholder label="Photographie aérienne — 2019" />
              <p className="eyebrow mt-5">2019</p>
              <h3 className="mt-2 text-2xl">Ouverture des Fougères et des Terrasses</h3>
              <p className="mt-3 text-muted-foreground">
                Les Fougères ouvrent avec 26 places et Les Terrasses avec 14 places.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section-pad wood-plank">
        <div className="container-shell grid gap-8 rounded-3xl bg-card/90 p-6 shadow-sm ring-1 ring-wood/30 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2>Les espaces</h2>
            <p className="mt-4 text-muted-foreground">
              Présentation générale des espaces — Contenu à compléter.
            </p>
            <Button asChild className="mt-6">
              <Link to="/galerie">Découvrir la galerie</Link>
            </Button>
          </div>
          <MediaPlaceholder label="Vue générale des espaces" />
        </div>
      </section>
      <section className="section-pad">
        <div className="container-shell grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-l-4 border-wood bg-wood-soft p-7">
            <h2 className="text-2xl">Les valeurs des Jardins d’Eleusis</h2>
            <p className="mt-3 text-muted-foreground">Contenu à compléter après validation.</p>
          </div>
          <div className="rounded-2xl border border-wood/40 bg-card p-7">
            <h2 className="text-2xl">Mot de la direction</h2>
            <p className="mt-3 text-muted-foreground">Contenu à compléter.</p>
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}
