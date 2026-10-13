import { createFileRoute } from "@tanstack/react-router";
import { GalleryBrowser } from "@/components/interactive-blocks";
import { PageIntro } from "@/components/site-layout";
import { routeHead } from "@/components/route-meta";
export const Route=createFileRoute("/galerie")({head:()=>routeHead("Galerie","Galerie des bâtiments, espaces et moments de vie des Jardins d’Éleusis à Dumbéa.","/galerie"),staticData:{sitemap:true},component:Page});
function Page(){return <><PageIntro eyebrow="Galerie" title="Découvrir les Jardins d’Éleusis en images"><p>Cette galerie accueillera uniquement des photographies authentiques, sélectionnées et autorisées par l’établissement.</p></PageIntro><section className="section-pad"><div className="container-shell"><GalleryBrowser/></div></section></>}
