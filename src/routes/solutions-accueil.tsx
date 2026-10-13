import { createFileRoute } from "@tanstack/react-router";
import {
  ContactStrip,
  MediaPlaceholder,
  PageIntro,
  SectionHeading,
} from "@/components/site-layout";
import { SolutionsGrid } from "@/components/content-blocks";
import { PhotoGroup, type LightboxPhoto } from "@/components/photo-lightbox";
import { routeHead } from "@/components/route-meta";
import { units } from "@/lib/site-content";
import fougeresPhoto from "@/assets/unite-fougeres-1.jpg.asset.json";
import niaoulisAerienne from "@/assets/unite-niaoulis-aerienne.jpg.asset.json";
import terrassesPhoto from "@/assets/unite-terrasses-1.jpg.asset.json";
import fougeresVue1 from "@/assets/unite-fougeres-vue-1.jpg.asset.json";
import fougeresVue2 from "@/assets/unite-fougeres-vue-2.jpg.asset.json";
import fougeresVue3 from "@/assets/unite-fougeres-vue-3.jpg.asset.json";
const mainPhotos: Record<string, { src: string; alt: string }> = {
  "Les Fougères": { src: fougeresPhoto.url, alt: "Patio arboré de l’unité Les Fougères avec ses coursives sur deux niveaux" },
  "Les Niaoulis": { src: niaoulisAerienne.url, alt: "Vue aérienne de l’unité Les Niaoulis et de ses bâtiments aux toits clairs, entourés d’arbres et de pelouses" },
  "Les Terrasses": { src: terrassesPhoto.url, alt: "Terrasse couverte de l’unité Les Terrasses avec ses colonnes vertes, sa rambarde et sa vue sur le jardin" },
};
const fougeresViews = [
  { src: fougeresVue1.url, alt: "Bâtiment de l’unité Les Fougères vu depuis le jardin, avec sa coursive à l’étage et une fougère arborescente au premier plan" },
  { src: fougeresVue2.url, alt: "Bassin d’agrément bordé de rochers et de plantes tropicales devant l’unité Les Fougères" },
  { src: fougeresVue3.url, alt: "Patio intérieur de l’unité Les Fougères avec ses coursives, ses garde-corps blancs et ses massifs de végétation" },
];
export const Route = createFileRoute("/solutions-accueil")({
  head: () =>
    routeHead(
      "Nos solutions d’accueil",
      "Hébergement permanent, hébergement temporaire et accueil de jour à Dumbéa aux Jardins d’Éleusis.",
      "/solutions-accueil",
    ),
  staticData: { sitemap: true },
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Nos solutions d’accueil"
        title="Trouver une solution adaptée à votre proche"
      >
        <p>Découvrez ici nos formes d’accueil proposées.</p>
      </PageIntro>
      <section className="section-pad">
        <div className="container-shell">
          <SolutionsGrid expandable />
        </div>
      </section>
      <section className="section-pad bg-muted">
        <div className="container-shell">
          <SectionHeading eyebrow="Nos unités" title="Trois cadres d’hébergement" className="max-w-none" />
          <div className="space-y-16">
            {units.map((u, i) => (
              <article className="grid gap-8 lg:grid-cols-2 lg:items-center" key={u.name}>
                <div className={i % 2 ? "lg:order-2" : ""}>
                  {(() => {
                    const main = mainPhotos[u.name];
                    const views = u.name === "Les Fougères" ? fougeresViews : [];
                    const photos: LightboxPhoto[] = [
                      ...(main ? [{ ...main, className: "h-64 w-full rounded-lg object-cover sm:h-80" }] : []),
                      ...views.map((v) => ({ ...v, className: "h-44 w-full rounded-lg object-cover" })),
                    ];
                    const offset = main ? 1 : 0;
                    return (
                      <PhotoGroup photos={photos}>
                        {(thumb) => (
                          <>
                            {main ? thumb(0) : <MediaPlaceholder label="Photo principale — à ajouter" />}
                            <div className="mt-3 grid grid-cols-3 gap-3">
                              {views.length ? (
                                views.map((_, k) => <div key={k}>{thumb(offset + k)}</div>)
                              ) : (
                                <>
                                  <MediaPlaceholder label="Vue 1" compact />
                                  <MediaPlaceholder label="Vue 2" compact />
                                  <MediaPlaceholder label="Vue 3" compact />
                                </>
                              )}
                            </div>
                          </>
                        )}
                      </PhotoGroup>
                    );
                  })()}
                </div>
                <div>
                  <p className="eyebrow">Ouverture en {u.year}</p>
                  <h2 className="mt-2">{u.name}</h2>
                  <ul className="info-list mt-5 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Capacité :</strong> {u.places}
                    </li>
                    <li>
                      <strong className="text-foreground">Chambres :</strong> {u.rooms}
                    </li>
                    <li>
                      <strong className="text-foreground">Salle de bain :</strong> {u.bathroom}
                    </li>
                    {u.detail && (
                      <li>
                        <strong className="text-foreground">Unité :</strong> {u.detail}
                      </li>
                    )}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}
