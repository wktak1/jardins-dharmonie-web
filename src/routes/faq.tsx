import { createFileRoute } from "@tanstack/react-router";
import { FaqList } from "@/components/faq-list";
import { ContactStrip, PageIntro } from "@/components/site-layout";
import { routeHead } from "@/components/route-meta";
export const Route = createFileRoute("/faq")({
  head: () =>
    routeHead(
      "Questions fréquentes",
      "Réponses aux questions fréquentes des familles sur Les Jardins d’Éleusis à Dumbéa.",
      "/faq",
    ),
  staticData: { sitemap: true },
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro eyebrow="Questions fréquentes" title="Vos questions sur l’accueil et le quotidien">
        <p>
          Les réponses ci-dessous sont données à titre indicatif et seront validées avec
          l’établissement. Pour toute question complémentaire, contactez-nous directement.
        </p>
      </PageIntro>
      <section className="section-pad">
        <div className="container-narrow">
          <FaqList />
        </div>
      </section>
      <ContactStrip />
    </>
  );
}
