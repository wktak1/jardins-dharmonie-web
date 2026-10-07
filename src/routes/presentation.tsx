import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Sprout, Store, SunMedium } from "lucide-react";
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
      "Établissement privé à Dumbéa : deux bâtiments, trois secteurs et 80 places, un cadre verdoyant et tropical, un accueil de jour, une ferme et un magasin.",
      "/presentation",
    ),
  staticData: { sitemap: true },
  component: Page,
});

const facts = [
  { value: "80", label: "places" },
  { value: "2", label: "bâtiments" },
  { value: "3", label: "secteurs" },
];

const onSite = [
  {
    icon: <SunMedium />,
    title: "L’accueil de jour",
    text: "L’établissement dispose également d’un accueil de jour.",
  },
  {
    icon: <Sprout />,
    title: "La ferme de l’EHPAD",
    text: "La ferme de l’EHPAD est accessible à tous les résidents.",
  },
  {
    icon: <Store />,
    title: "Le magasin",
    text: "Un magasin situé en bord de route est à disposition et ouvert à tous.",
  },
];

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
        <div className="container-shell">
          <SectionHeading eyebrow="L’établissement" title="Deux bâtiments, trois secteurs" />
          <p className="max-w-3xl text-lg text-muted-foreground">
            Les Jardins d’Eleusis est un établissement privé. Il est composé de deux
            bâtiments avec trois secteurs :{" "}
            <strong className="font-semibold text-foreground">Les Niaoulis</strong>,{" "}
            <strong className="font-semibold text-foreground">Les Fougères</strong> et{" "}
            <strong className="font-semibold text-foreground">Les Terrasses</strong>, pour
            une capacité de{" "}
            <strong className="font-semibold text-foreground">80 places</strong>.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {facts.map((fact) => (
              <div className="bg-card p-6 text-center" key={fact.label}>
                <p className="font-display text-4xl leading-none text-primary">{fact.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-muted">
        <div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2>Nous trouver</h2>
            <p className="mt-4 text-muted-foreground">
              Son cadre verdoyant et tropical en fait un lieu privilégié, calme et
              reposant.
            </p>
            <div className="mt-5 rounded-lg border-l-4 border-secondary bg-card p-7">
              <MapPin aria-hidden="true" className="h-7 w-7 text-secondary-foreground" />
              <p className="mt-3 text-lg font-semibold text-foreground">
                364 Bis, route de Koé à Dumbéa
              </p>
            </div>
          </div>
          <MediaPlaceholder
            className="min-h-56 lg:min-h-72"
            label="Photographie du cadre de vie"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Sur place" title="L’accueil de jour, la ferme et le magasin" />
          <div className="grid gap-6 md:grid-cols-3">
            {onSite.map((item) => (
              <article className="rounded-lg border border-border bg-card p-7" key={item.title}>
                <span className="feature-icon">{item.icon}</span>
                <h3 className="mt-5 text-xl">{item.title}</h3>
                <p className="mt-3 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
