import { createFileRoute } from "@tanstack/react-router";
import { FaqList } from "@/components/faq-list";
import { ContactStrip, PageIntro } from "@/components/site-layout";
import { routeHead } from "@/components/route-meta";
export const Route=createFileRoute("/faq")({head:()=>routeHead("Questions fréquentes","Réponses aux questions fréquentes des familles sur Les Jardins d’Eleusis à Dumbéa.","/faq"),staticData:{sitemap:true},component:Page});
function Page(){return <><PageIntro eyebrow="Questions fréquentes" title="Vos questions sur l’accueil et le quotidien"><p>Les réponses officielles sont en cours de préparation avec l’établissement. Elles seront ajoutées ici après validation.</p></PageIntro><section className="section-pad"><div className="container-narrow"><FaqList/></div></section><ContactStrip/></>}
