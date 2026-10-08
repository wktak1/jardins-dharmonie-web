import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-layout";
import { routeHead } from "@/components/route-meta";
import { admissionDossier } from "@/lib/site-content";

export const Route = createFileRoute("/tarifs-admission")({
  head: () => routeHead("Tarifs et admission", "Tarifs sur devis personnalisé et dossier d’admission à télécharger — Les Jardins d’Eleusis à Dumbéa.", "/tarifs-admission"),
  staticData: { sitemap: true },
  component: Page,
});

function Page() {
  return (
    <>
      <PageIntro eyebrow="Tarifs et admission" title="Tarifs et admission" />
      <section className="section-pad">
        <div className="container-narrow max-w-3xl">
          <div>
            <h2 className="text-3xl md:text-4xl">Concernant nos tarifs</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Concernant nos tarifs</strong>, nous vous invitons à nous contacter au{" "}
              <a className="text-link font-semibold" href="tel:+687298500">29.85.00</a> ou par e-mail à{" "}
              <a className="text-link font-semibold" href="mailto:accueil@eleusis.nc">accueil@eleusis.nc</a>{" "}
              afin d’obtenir un devis personnalisé, adapté à votre situation et au type d’hébergement souhaité.
            </p>
          </div>
          <div className="mt-14 border-t border-border pt-14 md:mt-16 md:pt-16">
            <h2 className="text-3xl md:text-4xl">Dossier d’admission</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Le dossier d’admission peut être consulté et téléchargé afin de préparer votre demande d’admission.
            </p>
            <a
              className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              href={admissionDossier.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger le dossier d’admission
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
