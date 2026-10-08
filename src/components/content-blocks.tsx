import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BedDouble, Building2, CalendarDays, Check, ChevronDown, Download, SunMedium } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/site-layout";
import journeeType from "@/assets/accueil-de-jour-journee-type.png.asset.json";
import fougeresPhoto from "@/assets/unite-fougeres-1.jpg.asset.json";
import niaoulisPhoto from "@/assets/unite-niaoulis-1.jpg.asset.json";
import terrassesPhoto from "@/assets/unite-terrasses-1.jpg.asset.json";
import { admissionDossier, documents, solutions, units } from "@/lib/site-content";

export function SolutionsGrid({ expandable = false }: { expandable?: boolean }) {
  const icons = [<Building2 />, <CalendarDays />, <SunMedium />];
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <div className={expandable ? "grid items-start gap-6 md:grid-cols-3" : "grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3"}>
      {solutions.map((item, i) => {
        const open = expandable && openTitle === item.title;
        const isDay = expandable && item.title === "Accueil de jour";
        const isPermanent = expandable && item.title === "Hébergement permanent";
        const isTemporary = expandable && item.title === "Hébergement temporaire";
        const wide = (isDay || isPermanent || isTemporary) && open;
        return (
          <article className={expandable ? `unit-card p-7${wide ? " md:col-span-3" : ""}` : "bg-card p-7"} key={item.title}>

            <span className="feature-icon">{icons[i]}</span>
            <h3 className="mt-5 text-xl">{item.title}</h3>
            <p className="mt-3 text-muted-foreground">{isDay ? dayCareIntro : item.text}</p>
            {expandable ? (
              <div className="mt-5">
                <button
                  aria-controls={`solution-details-${i}`}
                  aria-expanded={open}
                  className="text-link w-fit underline-offset-4 hover:underline"
                  onClick={() => setOpenTitle(open ? null : item.title)}
                  type="button"
                >
                  {open ? "Réduire" : "En savoir plus"}
                  <ChevronDown className={open ? "rotate-180" : ""} />
                </button>
                <div className="solution-details" data-open={open} id={`solution-details-${i}`} inert={!open || undefined}>
                  <div>
                    {isDay ? <DayCareDetails /> : isPermanent ? <PermanentCareDetails /> : isTemporary ? <TemporaryStayDetails /> : <div className="border-t border-border pt-4">
                      <ul className="space-y-2 text-[0.95rem] text-muted-foreground">
                        {item.details.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-muted-foreground">
                        Ces informations seront validées avec l’établissement.
                      </p>
                    </div>}
                  </div>
                </div>
              </div>
            ) : (
              <Link className="text-link mt-5" to="/solutions-accueil">
                En savoir plus <ArrowRight />
              </Link>
            )}
          </article>
        );
      })}
    </div>
  );
}

// Mêmes photographies que la page « Nos solutions d’accueil », reprises à l’identique
// sur la page d’accueil pour assurer la cohérence visuelle entre les deux pages.
const unitPhotos: Record<string, { url: string; alt: string; position: string }> = {
  "Les Niaoulis": {
    url: niaoulisPhoto.url,
    alt: "Terrasse fleurie de l’unité Les Niaoulis avec ses garde-corps verts et ses jardinières",
    position: "object-[50%_38%]",
  },
  "Les Fougères": {
    url: fougeresPhoto.url,
    alt: "Patio arboré de l’unité Les Fougères avec ses coursives sur deux niveaux",
    position: "object-center",
  },
  "Les Terrasses": {
    url: terrassesPhoto.url,
    alt: "Terrasse couverte de l’unité Les Terrasses avec ses colonnes vertes, sa rambarde et sa vue sur le jardin",
    position: "object-center",
  },
};

export function UnitsGrid() { return <div className="grid gap-6 lg:grid-cols-3">{units.map(unit => { const photo = unitPhotos[unit.name]; return <article className="unit-card" key={unit.name}>{photo ? <img src={photo.url} alt={photo.alt} loading="lazy" className={`h-44 w-full object-cover ${photo.position}`} /> : <MediaPlaceholder label={unit.name} compact />}<div className="p-6"><p className="eyebrow">Ouverture en {unit.year}</p><h3 className="mt-2 text-2xl">{unit.name}</h3><ul className="mt-4 space-y-2 text-muted-foreground"><li><Check />{unit.places}</li><li><BedDouble />{unit.rooms}</li><li><Check />{unit.bathroom}</li>{unit.detail && <li><Check />{unit.detail}</li>}</ul></div></article>; })}</div>; }

export function Downloads() { return <div id="documents" className="grid gap-3">{documents.map(doc => <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-md border border-border bg-card p-5" key={doc}><div className="min-w-0"><h3 className="text-lg">{doc}</h3><p className="text-sm text-muted-foreground">{doc === admissionDossier.label ? "Document officiel au format PDF" : "Document à ajouter"}</p></div>{doc === admissionDossier.label ? <Button variant="outline" asChild><a href={admissionDossier.url} target="_blank" rel="noopener" aria-label="Ouvrir le dossier d’admission (PDF)"><Download /> <span className="hidden sm:inline">Ouvrir</span></a></Button> : <Button variant="outline" disabled aria-label={`${doc} indisponible pour le moment`}><Download /> <span className="hidden sm:inline">À venir</span></Button>}</div>)}</div>; }

const dayCareIntro =
  "L'accueil de jour est un service destiné aux personnes âgées en perte d'autonomie vivant à domicile. Il offre un cadre sécurisé et stimulant tout en apportant un moment de répit aux aidants.";

function DayCareDetails() {
  const goals = [
    "Maintenir et stimuler l'autonomie des résidents",
    "Prévenir l'isolement social",
    "Apporter un accompagnement adapté aux besoins",
    "Soulager les aidants en leur offrant du temps pour eux",
  ];
  return (
    <div className="grid gap-8 border-t border-border pt-6 lg:grid-cols-2 lg:items-start lg:gap-12">
      <div className="space-y-5 text-muted-foreground">
        <ul className="space-y-3">
          {goals.map((g) => (
            <li className="flex gap-3" key={g}>
              <Check className="mt-1 size-5 shrink-0 text-primary" />
              <span>{g}</span>
            </li>
          ))}
        </ul>
        <p>
          L'accueil de jour est conçu pour accueillir les seniors vivant à domicile, leur permettant de participer à des activités variées : ateliers mémoire, jeux collectifs, ateliers de motricité, activités artistiques et séances de relaxation.
        </p>
        <p>
          Encadrées par une Aide médico-psychologique, ces journées visent à stimuler les capacités cognitives et motrices tout en apportant du plaisir et de la convivialité.
        </p>
      </div>
      <a className="block" href={journeeType.url} rel="noopener" target="_blank">
        <img
          alt="Accueil de jour, une journée type : 8 h prise en charge à domicile par le transport ; 8 h 30 accueil autour d'un petit déjeuner et présentation du programme ; 9 h 45 activités selon le planning du jour ; 11 h 30 repas en groupe et temps de repos à la demande ; 14 h activités suivies d'un goûter ; 16 h - 16 h 15 transport et retour au domicile ; 16 h 30 fermeture de l'accueil de jour"
          className="mx-auto w-full max-w-md rounded-lg bg-card object-contain shadow-sm ring-1 ring-border"
          loading="lazy"
          src={journeeType.url}
        />
        <span className="mt-2 block text-center text-sm text-muted-foreground">Cliquer pour agrandir l'image</span>
      </a>
    </div>
  );
}

// Contenu « En savoir plus » de la carte « Hébergement permanent », déplié sous la
// carte elle-même, sur le même principe que le panneau « Accueil de jour ».
const permanentCareIntro =
  "Les Jardins d’Eleusis accompagnent les résidents au quotidien en leur offrant une prise en soin personnalisée et évolutive.";

const permanentCareServices = [
  "Une résidence médicalisée",
  "Une équipe de près de 50 professionnels",
  "Un service de restauration raffinée",
  "Un hébergement en chambre partagée ou individuelle, pré-équipée et personnalisable",
  "Un service blanchisserie",
  "Un programme d’animation",
  "Des espaces de soins et de bien-être",
  "Un parc de promenade arboré et verdoyant",
  "Une ferme",
  "Une épicerie à portée de main",
  "Un accès Wi-Fi",
];

function PermanentCareDetails() {
  return (
    <div className="border-t border-border pt-6">
      <p className="max-w-3xl text-muted-foreground">{permanentCareIntro}</p>
      <ul className="mt-7 grid gap-x-12 gap-y-4 sm:grid-cols-2">
        {permanentCareServices.map((service) => (
          <li className="flex gap-3" key={service}>
            <Check className="mt-1 size-5 shrink-0 text-primary" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Contenu « En savoir plus » de la carte « Hébergement temporaire », déplié sous la
// carte elle-même, sur le même principe que les panneaux « Accueil de jour » et
// « Hébergement permanent ».
const temporaryStayIntro =
  "Nous proposons un séjour d’une durée déterminée, de plusieurs jours à quelques mois, pour un besoin ponctuel ou répété.";

const temporaryStayReasons = [
  "De s’absenter en toute sérénité",
  "De bénéficier d’un séjour de répit",
  "De gérer en toute sécurité une sortie d’hospitalisation lorsque le niveau d’autonomie ne permet pas un retour immédiat à domicile",
  "De faire face à une rupture des services à domicile",
];

function TemporaryStayDetails() {
  return (
    <div className="border-t border-border pt-6">
      <p className="max-w-3xl text-muted-foreground">{temporaryStayIntro}</p>
      <p className="mt-7 font-semibold text-foreground">Cet accueil temporaire permet aux proches :</p>
      <ul className="mt-4 grid gap-x-12 gap-y-4 sm:grid-cols-2">
        {temporaryStayReasons.map((reason) => (
          <li className="flex gap-3" key={reason}>
            <Check className="mt-1 size-5 shrink-0 text-primary" />
            <span>{reason}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 max-w-3xl space-y-4 text-muted-foreground">
        <p>
          L’accueil temporaire peut également être l’occasion d’un premier essai de vie en
          collectivité, avant une entrée définitive.
        </p>
        <p>
          La personne âgée hébergée en accueil temporaire bénéficie des mêmes services,
          prestations et prises en soin que les autres résidents de l’établissement.
        </p>
      </div>
    </div>
  );
}

