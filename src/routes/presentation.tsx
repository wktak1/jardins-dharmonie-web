import { createFileRoute } from "@tanstack/react-router";
import {
  ContactStrip,
  MediaPlaceholder,
  PageIntro,
  SectionHeading,
} from "@/components/site-layout";
import { routeHead } from "@/components/route-meta";

export const Route = createFileRoute("/presentation")({
  head: () =>
    routeHead(
      "Présentation",
      "Présentation de l’EHPAD Les Jardins d’Eleusis à Dumbéa : découvrir l’établissement et son cadre d’accueil.",
      "/presentation",
    ),
  staticData: { sitemap: true },
  component: Page,
});

function Page() {
  return (
    <>
      <PageIntro eyebrow="Les Jardins d’Eleusis" title="Présentation">
        <p>
          Cette page présente l’établissement aux familles. Les textes définitifs
          seront ajoutés après validation par l’établissement.
        </p>
      </PageIntro>

      <section className="section-pad">
        <div className="container-narrow">
          <SectionHeading title="L’établissement en quelques mots" />
          <div className="rounded-lg border-l-4 border-secondary bg-card p-7 md:p-9">
            <p className="text-muted-foreground">
              Contenu à compléter : présentation de l’établissement, de son histoire
              et de sa manière d’accueillir les résidents et leurs familles.
            </p>
            <p className="mt-4 text-muted-foreground">Contenu à compléter.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-muted">
        <div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2>Le cadre de vie</h2>
            <p className="mt-4 text-muted-foreground">
              Contenu à compléter : description des espaces, des jardins et de
              l’atmosphère de l’établissement.
            </p>
          </div>
          <MediaPlaceholder label="Photographie du cadre de vie" />
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
