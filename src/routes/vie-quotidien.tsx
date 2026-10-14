// ============= Full file contents =============

import { createFileRoute } from "@tanstack/react-router";
import { ContactStrip, MediaPlaceholder, PageIntro } from "@/components/site-layout";
import { dailyLife } from "@/lib/site-content";
import { routeHead } from "@/components/route-meta";
import lingeAsset from "@/assets/linge-serviettes.jpg.asset.json";
import repasAsset from "@/assets/repas-triptyque.jpg.asset.json";
import planningAsset from "@/assets/planning-animations.png.asset.json";
import chambreAsset from "@/assets/chambre-eleusis.jpg.asset.json";
import fermeAsset from "@/assets/ferme-eleusis.jpg.asset.json";
import { Car } from "lucide-react";
import { FeatureHighlight } from "@/components/content-blocks";
const hiddenSections = ["Les jardins et espaces extérieurs", "Les moments de convivialité", "L’accompagnement au quotidien", "Les espaces communs"];
const sectionOrder = ["Les chambres", "La Table d’Éleusis"];
const rank = (title: string) => {
  const i = sectionOrder.indexOf(title);
  return i < 0 ? sectionOrder.length : i;
};
export const Route=createFileRoute("/vie-quotidien")({head:()=>routeHead("La vie au quotidien","Découvrez le quotidien et les espaces de vie des Jardins d’Éleusis à Dumbéa.","/vie-quotidien"),staticData:{sitemap:true},component:Page});
function Page(){const sections=[...dailyLife].filter(item=>!hiddenSections.includes(item.title)).sort((a,b)=>rank(a.title)-rank(b.title));return <><PageIntro eyebrow="La vie au quotidien" title="Un lieu de vie avant tout"><p>Le quotidien des personnes accueillies se déroule entre les espaces de vie, les repas, les activités et les moments partagés. Les informations non encore validées sont clairement indiquées.</p></PageIntro><div>{sections.map((item,i)=>{const id=item.title==="La Table d’Éleusis"?"les-repas":item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");return <section id={id} className={`section-pad scroll-mt-24 ${i?"border-t border-border/50":""}`} key={item.title}><div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center"><div className={i%2?"lg:order-2":""}><p className="eyebrow">Au quotidien</p><h2 className="mt-2">{item.title}</h2><p className={`mt-5 max-w-xl text-muted-foreground ${item.paras?"text-lg leading-relaxed":item.title==="Le linge"||item.title==="Les chambres"?"leading-relaxed":""}`}>{item.text}</p>{item.paras?.map(p=><p className="mt-4 max-w-xl leading-relaxed text-muted-foreground" key={p}>{p}</p>)}{item.title==="Les activités et animations"?<p className="mt-6 flex max-w-xl items-start gap-2.5 text-[0.95rem] font-semibold leading-relaxed text-foreground"><Car className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />Deux véhicules sont mis à disposition permettant d’organiser les sorties avec les résidents.</p>:null}</div>{item.title==="Le linge"?<img src={lingeAsset.url} alt="Linge propre plié, prêt à être remis aux résidents" loading="lazy" className="h-full min-h-64 w-full rounded-lg object-cover"/>:item.title==="La Table d’Éleusis"?<img src={repasAsset.url} alt="Assiettes de repas préparées en cuisine" loading="lazy" className="h-full min-h-64 w-full rounded-lg object-cover"/>:item.title==="Les activités et animations"?<img src={planningAsset.url} alt="Planning des animations de l’accueil de jour" loading="lazy" className="w-full rounded-lg object-cover"/>:item.title==="Les chambres"?<img src={chambreAsset.url} alt="Chambre équipée d’un lit médicalisé, d’un fauteuil et d’une armoire" loading="lazy" className="h-full min-h-64 w-full rounded-lg object-cover"/>:item.title==="La ferme"?<img src={fermeAsset.url} alt="Chèvre debout dans un enclos enherbé, bordé de palmiers et d’arbres, à la ferme de l’établissement" loading="lazy" className="h-full min-h-64 w-full rounded-lg object-cover"/>:<MediaPlaceholder label={item.title}/>}</div></section>})}</div><ContactStrip/></>}
