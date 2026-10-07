import { createFileRoute } from "@tanstack/react-router";
import { ContactStrip, MediaPlaceholder, PageIntro } from "@/components/site-layout";
import { dailyLife } from "@/lib/site-content";
import { routeHead } from "@/components/route-meta";
import lingeAsset from "@/assets/linge-serviettes.jpg.asset.json";
import repasAsset from "@/assets/repas-plat.jpg.asset.json";
export const Route=createFileRoute("/vie-quotidien")({head:()=>routeHead("La vie au quotidien","Découvrez le quotidien et les espaces de vie des Jardins d’Eleusis à Dumbéa.","/vie-quotidien"),staticData:{sitemap:true},component:Page});
function Page(){return <><PageIntro eyebrow="La vie au quotidien" title="Un lieu de vie avant tout"><p>Le quotidien des personnes accueillies se déroule entre les espaces de vie, les repas, les activités et les moments partagés. Les informations non encore validées sont clairement indiquées.</p></PageIntro><div>{dailyLife.map((item,i)=><section className={`section-pad ${i%2?"bg-muted":""}`} key={item.title}><div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center"><div className={i%2?"lg:order-2":""}><p className="eyebrow">Au quotidien</p><h2 className="mt-2">{item.title}</h2><p className="mt-5 text-muted-foreground">{item.text}</p></div>{item.title==="Le linge"?<img src={lingeAsset.url} alt="Linge propre plié, prêt à être remis aux résidents" loading="lazy" className="h-full min-h-64 w-full rounded-lg object-cover"/>:<MediaPlaceholder label={item.title}/>}</div></section>)}</div><ContactStrip/></>}
