import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { MapBlock, PageIntro, socialIcon } from "@/components/site-layout";
import { site, socialLinks } from "@/lib/site-content";
import { routeHead } from "@/components/route-meta";
export const Route = createFileRoute("/contact")({
  head: () =>
    routeHead(
      "Contact",
      "Coordonnées, adresse et itinéraire de l’EHPAD Les Jardins d’Éleusis à Dumbéa.",
      "/contact",
    ),
  staticData: { sitemap: true },
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Échanger avec l’établissement">
        <p>
          Pour toute demande d’information ou pour préparer une visite, contactez directement Les
          Jardins d’Éleusis par téléphone ou par e-mail.
        </p>
      </PageIntro>
      <section className="section-pad">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-3">
            <a href={site.phoneHref} className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-7 text-center">
              <Phone className="text-primary" />
              <h2 className="mt-5 text-xl">Téléphone</h2>
              <p className="mt-3 text-link text-2xl md:text-xl lg:text-2xl">{site.phone}</p>
            </a>
            <a href={site.emailHref} className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-7 text-center">
              <Mail className="text-primary" />
              <h2 className="mt-5 text-xl">E-mail</h2>
              {/* <wbr /> = clean break point after @ when the address must wrap on narrow tablets */}
              <p className="mt-3 text-link text-2xl md:text-xl lg:text-2xl">
                {site.email.split("@")[0]}@<wbr />{site.email.split("@")[1]}
              </p>
            </a>
            <div className="rounded-lg border border-border bg-card p-7">
              <MapPin className="text-primary" />
              <h2 className="mt-5 text-xl">Adresse et horaires</h2>
              <p className="mt-2 text-muted-foreground">{site.address}</p>
              <p className="mt-3 font-semibold">Horaires de visite : 10h à 19h</p>
            </div>
          </div>
          <div className="mt-10">
            <MapBlock />
          </div>
          <div className="mt-10 border-l-4 border-secondary bg-muted p-6">
            <h2 className="text-xl">Réseaux sociaux</h2>
            <ul className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Suivre Les Jardins d’Éleusis sur ${l.name}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-link transition duration-300 ease-out hover:bg-background hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100 [&_svg]:h-5 [&_svg]:w-5"
                  >
                    {socialIcon(l.name)}
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
