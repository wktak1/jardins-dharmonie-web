import { createFileRoute } from "@tanstack/react-router";
import {
  ContactStrip,
  PageIntro,
  SectionHeading,
} from "@/components/site-layout";
const niaoulis2013 = { url: "/images/unite-niaoulis-aerienne.jpg" };
const aerialView = { url: "/images/presentation-vue-aerienne.jpg" };
const jardinInterieur = { url: "/images/presentation-jardin-interieur.jpg" };
import { routeHead } from "@/components/route-meta";
export const Route = createFileRoute("/presentation")({
  head: () =>
    routeHead(
      "Présentation",
      "Découvrez l’histoire de l’EHPAD Les Jardins d’Éleusis à Dumbéa, de l’ouverture des Niaoulis en 2013 à celle des Fougères et des Terrasses en 2019.",
      "/presentation",
    ),
  staticData: { sitemap: true },
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro eyebrow="Présentation" title="Une histoire qui s’inscrit à Dumbéa">
        <p>
          L’EHPAD « Les Jardins d’Éleusis » est un établissement à taille humaine, implanté à Dumbéa
          dans un environnement verdoyant et apaisant, pensé pour le bien-être et l’accompagnement
          des résidents.
        </p>
      </PageIntro>
      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading title="L’évolution de l’établissement" />
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl border-t-4 border-wood bg-card p-5 shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--color-wood)_55%,transparent)] sm:p-7">
              <img
                src={niaoulis2013.url}
                alt="Vue aérienne panoramique des bâtiments des Niaoulis, aux toits clairs, entourés de végétation et de pelouses."
                loading="lazy"
                className="h-64 w-full rounded-lg object-cover object-[50%_38%]"
              />
              <p className="mt-2 text-center text-xs text-muted-foreground">Photographie aérienne</p>
              <p className="eyebrow mt-5 text-[0.9rem]">2013</p>
              <h3 className="mt-2 text-2xl">Ouverture des Niaoulis</h3>
              <p className="mt-3 text-muted-foreground">
                L’unité Les Niaoulis ouvre avec 42 places.
              </p>
            </article>
            <article className="rounded-2xl border-t-4 border-wood bg-card p-5 shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--color-wood)_55%,transparent)] sm:p-7">
              <img
                src={aerialView.url}
                alt="Vue aérienne de l’établissement : bâtiments aux toits blancs et bleus, entourés de jardins, palmiers et allées."
                loading="lazy"
                className="h-64 w-full rounded-lg object-cover"
              />
              <p className="mt-2 text-center text-xs text-muted-foreground">Photographie aérienne</p>
              <p className="eyebrow mt-5 text-[0.9rem]">2019</p>
              <h3 className="mt-2 text-2xl">Ouverture des Fougères et des Terrasses</h3>
              <p className="mt-3 text-muted-foreground">
                Les Fougères ouvrent avec 26 places et Les Terrasses avec 14 places.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="pb-[clamp(4rem,8vw,7rem)]">
        <div className="container-shell">
          <div className="grid overflow-hidden rounded-2xl border-t-4 border-wood bg-card shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--color-wood)_55%,transparent)] md:grid-cols-2">
            <div className="p-7">
              <h2 className="text-2xl">Les valeurs des Jardins d’Éleusis</h2>
              <p className="mt-4 text-muted-foreground">
                <strong className="font-semibold text-foreground">
                  La loyauté, la bienveillance et l’Humanitude
                </strong>{" "}
                sont les trois valeurs essentielles des Jardins d’Éleusis. Elles guident
                l’accompagnement quotidien des résidents, dans le respect de chacun, de son rythme
                et de son histoire.
              </p>
              <p className="mt-4 text-muted-foreground">
                Implanté dans un{" "}
                <strong className="font-semibold text-foreground">
                  environnement verdoyant et atypique
                </strong>
                , l’établissement est avant tout un véritable lieu de vie, chaleureux, apaisant et
                ouvert sur son environnement.
              </p>
            </div>
            <figure className="min-h-72">
              <img
                src={jardinInterieur.url}
                alt="Jardin intérieur des Jardins d’Éleusis : cascade sur rochers, végétation tropicale et allée accessible bordée de rambardes, devant les bâtiments à coursives."
                loading="lazy"
                className="h-full w-full object-cover object-[50%_60%]"
              />
            </figure>
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}
