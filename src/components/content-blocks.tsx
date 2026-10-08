import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BedDouble, Building2, CalendarDays, Check, ChevronDown, Download, SunMedium } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/site-layout";
import { admissionDossier, documents, solutions, units } from "@/lib/site-content";

export function SolutionsGrid({ expandable = false }: { expandable?: boolean }) {
  const icons = [<Building2 />, <CalendarDays />, <SunMedium />];
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <div className={expandable ? "grid items-start gap-6 md:grid-cols-3" : "grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3"}>
      {solutions.map((item, i) => {
        const open = expandable && openTitle === item.title;
        return (
          <article className={expandable ? "unit-card p-7" : "bg-card p-7"} key={item.title}>
            <span className="feature-icon">{icons[i]}</span>
            <h3 className="mt-5 text-xl">{item.title}</h3>
            <p className="mt-3 text-muted-foreground">{item.text}</p>
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
                    <div className="border-t border-border pt-4">
                      <ul className="space-y-2 text-[0.95rem] text-muted-foreground">
                        {item.details.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-muted-foreground">
                        Ces informations seront validées avec l’établissement.
                      </p>
                    </div>
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

export function UnitsGrid() { return <div className="grid gap-6 lg:grid-cols-3">{units.map(unit => <article className="unit-card" key={unit.name}><MediaPlaceholder label={unit.name} compact/><div className="p-6"><p className="eyebrow">Ouverture en {unit.year}</p><h3 className="mt-2 text-2xl">{unit.name}</h3><ul className="mt-4 space-y-2 text-muted-foreground"><li><Check />{unit.places}</li><li><BedDouble />{unit.rooms}</li><li><Check />{unit.bathroom}</li>{unit.detail && <li><Check />{unit.detail}</li>}</ul></div></article>)}</div>; }

export function Downloads() { return <div id="documents" className="grid gap-3">{documents.map(doc => <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-md border border-border bg-card p-5" key={doc}><div className="min-w-0"><h3 className="text-lg">{doc}</h3><p className="text-sm text-muted-foreground">{doc === admissionDossier.label ? "Document officiel au format PDF" : "Document à ajouter"}</p></div>{doc === admissionDossier.label ? <Button variant="outline" asChild><a href={admissionDossier.url} target="_blank" rel="noopener" aria-label="Ouvrir le dossier d’admission (PDF)"><Download /> <span className="hidden sm:inline">Ouvrir</span></a></Button> : <Button variant="outline" disabled aria-label={`${doc} indisponible pour le moment`}><Download /> <span className="hidden sm:inline">À venir</span></Button>}</div>)}</div>; }
