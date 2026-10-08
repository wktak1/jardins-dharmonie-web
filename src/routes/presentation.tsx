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

      <section className="py-10 md:py-14 lg:py-16">
        <div className="mx-auto grid w-full max-w-[1500px] gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-12 xl:px-12">
          <div className="space-y-5 lg:col-span-5">
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

          <div className="grid gap-5 sm:grid-cols-5 lg:col-span-7">
            <img
              src={aerialAsset.url}
              alt="Vue aérienne des bâtiments de l’EHPAD Les Jardins d’Eleusis, entourés d’une végétation tropicale"
              width={1920}
              height={1440}
              loading="lazy"
              decoding="async"
              className={`${imageFrame} sm:col-span-3 sm:aspect-auto sm:h-full sm:min-h-[26rem] lg:min-h-[34rem]`}
            />
            <img
              src={gardenAsset.url}
              alt="Jardin intérieur de l’EHPAD : allée paysagère, fougères arborescentes et palmiers, avec les montagnes en arrière-plan"
              width={1920}
              height={1440}
              loading="lazy"
              decoding="async"
              className={`${imageFrame} sm:col-span-2 sm:aspect-auto sm:h-full sm:min-h-[26rem] lg:min-h-[34rem]`}
            />
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
