import { createFileRoute } from "@tanstack/react-router";
import { ContactStrip, PageIntro } from "@/components/site-layout";
import { routeHead } from "@/components/route-meta";
import aerialAsset from "@/assets/presentation-vue-aerienne.jpg.asset.json";
import gardenAsset from "@/assets/presentation-jardin.jpg.asset.json";

export const Route = createFileRoute("/presentation")({
  head: () =>
    routeHead(
      "Présentation",
      "Établissement privé à Dumbéa : deux bâtiments, trois secteurs et 80 places, un cadre verdoyant et tropical, un accueil de jour, une ferme et un magasin.",
      "/presentation",
    ),
  staticData: { sitemap: true },
  component: Page,
});

const imageFrame =
  "aspect-[4/3] w-full rounded-xl object-cover shadow-sm ring-1 ring-black/5";

function Page() {
  return (
    <>
      <PageIntro eyebrow="Les Jardins d’Eleusis" title="Présentation">
        <p>
          Quelques repères pour découvrir l’établissement, son cadre de vie et les
          services proposés sur place.
        </p>
      </PageIntro>

      <section className="section-pad">
        <div className="container-shell grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-x-14 lg:gap-y-12">
          <img
            src={aerialAsset.url}
            alt="Vue aérienne des bâtiments de l’EHPAD Les Jardins d’Eleusis, entourés d’une végétation tropicale"
            width={1920}
            height={1440}
            loading="lazy"
            decoding="async"
            className={`${imageFrame} lg:col-span-5 lg:col-start-8 lg:row-start-1`}
          />

          <div className="space-y-5 lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
              Les Jardins d’Eleusis est un établissement privé. Il est composé de deux
              bâtiments avec trois secteurs :{" "}
              <strong className="font-semibold">Les Niaoulis</strong>,{" "}
              <strong className="font-semibold">Les Fougères</strong> et{" "}
              <strong className="font-semibold">Les Terrasses</strong>, pour une
              capacité de <strong className="font-semibold">80 places</strong>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              L’EHPAD est situé au{" "}
              <strong className="font-semibold text-foreground">
                364 Bis, route de Koé à Dumbéa
              </strong>
              .
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Son cadre verdoyant et tropical en fait un lieu privilégié, calme et
              reposant.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              L’établissement dispose également d’un{" "}
              <strong className="font-semibold text-foreground">accueil de jour</strong>
              . La{" "}
              <strong className="font-semibold text-foreground">
                ferme de l’EHPAD
              </strong>{" "}
              est accessible à tous les résidents. Enfin, un{" "}
              <strong className="font-semibold text-foreground">magasin</strong> situé
              en bord de route est à disposition et ouvert à tous.
            </p>
          </div>

          <img
            src={gardenAsset.url}
            alt="Jardin intérieur de l’EHPAD : allée paysagère, fougères arborescentes et palmiers, avec les montagnes en arrière-plan"
            width={1920}
            height={1440}
            loading="lazy"
            decoding="async"
            className={`${imageFrame} lg:col-span-5 lg:col-start-8 lg:row-start-2`}
          />
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
