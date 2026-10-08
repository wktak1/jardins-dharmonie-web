import { createFileRoute } from "@tanstack/react-router";
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
      "Découvrez l’histoire de l’EHPAD Les Jardins d’Eleusis à Dumbéa, de l’ouverture des Niaoulis en 2013 à celle des Fougères et des Terrasses en 2019.",
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
      <section className="section-pad">
        <div className="container-shell">
          <div className="rounded-2xl border-l-4 border-wood bg-wood-soft p-7">
            <h2 className="text-2xl">Les valeurs des Jardins d’Eleusis</h2>
            <p className="mt-3 text-muted-foreground">Contenu à compléter après validation.</p>
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}
