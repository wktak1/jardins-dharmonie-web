import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { galleryCategories } from "@/lib/site-content";
import presentationVideo from "@/assets/jardins-eleusis-presentation-web.mp4.asset.json";
import presentationVideoWebm from "@/assets/jardins-eleusis-presentation-web.webm.asset.json";
import presentationPoster from "@/assets/jardins-eleusis-presentation-poster.jpg.asset.json";
import galerieChambre1 from "@/assets/galerie-chambre-1.jpg.asset.json";
import galerieExterieurJardin from "@/assets/galerie-exterieur-jardin.jpg.asset.json";
import galerieExterieurBatiment from "@/assets/galerie-exterieur-batiment.jpg.asset.json";
import galerieExterieurBassin from "@/assets/galerie-exterieur-bassin.jpg.asset.json";
import galerieExterieurKiosqueAllee from "@/assets/galerie-exterieur-kiosque-allee.jpg.asset.json";
import galerieExterieurAlleePalmiers from "@/assets/galerie-exterieur-allee-palmiers.jpg.asset.json";
import galerieExterieurKiosqueFleuri from "@/assets/galerie-exterieur-kiosque-fleuri.jpg.asset.json";
import galerieExterieurJardinTropical from "@/assets/galerie-exterieur-jardin-tropical.jpg.asset.json";
import galerieCommunSalon from "@/assets/galerie-commun-salon.jpg.asset.json";
import galerieCommunCoiffure from "@/assets/galerie-commun-coiffure.jpg.asset.json";
import galerieCommunSalleAManger from "@/assets/galerie-commun-salle-a-manger.jpg.asset.json";
import galerieCommunHall from "@/assets/galerie-commun-hall.jpg.asset.json";

export function VideoPlaceholder() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  };
  return (
    <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden bg-primary md:min-h-[85vh]">
      <video
        ref={videoRef}
        poster={presentationPoster.url}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label="Vidéo de présentation des Jardins d’Eleusis"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      >
        <source src={presentationVideoWebm.url} type="video/webm" />
        <source src={presentationVideo.url} type="video/mp4" />
      </video>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-primary/30 mix-blend-multiply" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground/70 via-foreground/20 to-transparent"
      />
      <div className="container-shell relative py-20 md:py-28">
        <div className="max-w-3xl text-primary-foreground">
          <p className="mb-5 text-sm font-bold uppercase tracking-[.18em] opacity-90">
            EHPAD à Dumbéa
          </p>
          <h1 className="text-primary-foreground text-4xl leading-tight md:text-6xl lg:text-7xl">
            Les Jardins d’Eleusis,
            <br />
            un lieu de vie à Dumbéa
          </h1>
          <p className="mt-6 max-w-2xl text-lg opacity-95 md:text-xl">
            Découvrez notre établissement, ses espaces de vie et les différentes solutions d’accueil
            proposées aux personnes âgées et à leurs familles.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="secondary" size="lg">
              <Link to="/etablissement">Découvrir l’établissement</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/tarifs-admission" hash="documents">
                Dossier d’admission
              </Link>
            </Button>
          </div>
        </div>
        <Button
          onClick={toggle}
          variant="secondary"
          size="icon"
          className="absolute bottom-6 right-6 shadow-lg"
          aria-label={playing ? "Mettre la vidéo en pause" : "Lancer la vidéo"}
        >
          {playing ? <Pause /> : <Play />}
        </Button>
      </div>
    </section>
  );
}

type GalleryItem = { category: string; photo?: { src: string; alt: string } };
const galleryItems: GalleryItem[] = [
  {
    category: "Extérieurs",
    photo: {
      src: galerieExterieurJardin.url,
      alt: "Passerelle en bois au milieu des palmiers dans les jardins des Jardins d’Eleusis",
    },
  },
  {
    category: "Extérieurs",
    photo: {
      src: galerieExterieurBatiment.url,
      alt: "Façade du bâtiment des Jardins d’Eleusis entourée de palmiers et de massifs fleuris",
    },
  },
  {
    category: "Extérieurs",
    photo: {
      src: galerieExterieurBassin.url,
      alt: "Bassin aux poissons entouré de plantes tropicales au pied du bâtiment aux Jardins d’Eleusis",
    },
  },
  {
    category: "Extérieurs",
    photo: {
      src: galerieExterieurKiosqueAllee.url,
      alt: "Kiosque vert et allée bordée de palmiers dans le jardin aux Jardins d’Eleusis",
    },
  },
  {
    category: "Extérieurs",
    photo: {
      src: galerieExterieurAlleePalmiers.url,
      alt: "Allée enherbée bordée de grands palmiers aux Jardins d’Eleusis",
    },
  },
  {
    category: "Extérieurs",
    photo: {
      src: galerieExterieurKiosqueFleuri.url,
      alt: "Kiosque ombragé près d’un massif fleuri aux Jardins d’Eleusis",
    },
  },
  {
    category: "Extérieurs",
    photo: {
      src: galerieExterieurJardinTropical.url,
      alt: "Jardin tropical arboré avec un abri en bois aux Jardins d’Eleusis",
    },
  },
  {
    category: "Espaces communs",
    photo: {
      src: galerieCommunSalon.url,
      alt: "Salon commun des Jardins d’Eleusis avec piano, tables et cartes du monde au mur",
    },
  },
  {
    category: "Espaces communs",
    photo: {
      src: galerieCommunCoiffure.url,
      alt: "Salon de coiffure des Jardins d’Eleusis avec poste de coiffure et bac à shampoing",
    },
  },
  {
    category: "Espaces communs",
    photo: {
      src: galerieCommunSalleAManger.url,
      alt: "Salle à manger des Jardins d’Eleusis avec table dressée donnant sur la fontaine du jardin",
    },
  },
  {
    category: "Espaces communs",
    photo: {
      src: galerieCommunHall.url,
      alt: "Hall d’accueil des Jardins d’Eleusis avec aquarium, panneaux d’information et sièges",
    },
  },
  {
    category: "Chambres",
    photo: {
      src: galerieChambre1.url,
      alt: "Chambre des Jardins d’Eleusis avec lit médicalisé, fauteuil et armoire",
    },
  },
];
export function GalleryBrowser({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState("Tout voir");
  const [selected, setSelected] = useState<number | null>(null);
  const visible = galleryItems
    .map((item, index) => ({ ...item, index }))
    .filter((x) => x.photo && (filter === "Tout voir" || x.category === filter))
    .slice(0, preview ? 5 : undefined);
  const count = visible.length;
  const go = (d: number) =>
    setSelected((s) => (s === null ? s : (s + d + count) % count));
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected, count]);
  const current = selected !== null ? visible[selected] : null;
  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer la galerie">
        {galleryCategories.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setFilter(cat);
                setSelected(null);
              }}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {visible.map(({ category, photo, index }, i) => (
          <button
            key={`${category}-${index}`}
            type="button"
            onClick={() => setSelected(i)}
            aria-label={`Agrandir la photographie : ${category}`}
            className="group relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-lg bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <img
              src={photo!.src}
              alt={photo!.alt}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/30 to-transparent transition-opacity duration-500 lg:opacity-0" />
            <span className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-500 lg:group-hover:bg-foreground/25" />
            <span className="pointer-events-none absolute bottom-4 left-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-background drop-shadow transition-all duration-500 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
              {category}
            </span>
          </button>
        ))}
      </div>
      {current && current.photo && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-foreground/95 p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse"
          onClick={() => setSelected(null)}
        >
          <figure className="flex max-w-6xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.photo.src}
              alt={current.photo.alt}
              className="max-h-[84vh] w-auto max-w-full rounded-md object-contain shadow-2xl"
            />
            <figcaption className="mt-4 flex items-center gap-3 text-sm text-background/90">
              <span className="rounded-full bg-background/15 px-3 py-1 font-semibold">{current.category}</span>
              <span>{selected! + 1} / {count}</span>
            </figcaption>
          </figure>
          <button type="button" onClick={() => setSelected(null)} aria-label="Fermer" className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-background/15 text-background transition-colors hover:bg-background/30">
            <X />
          </button>
          {count > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Image précédente" className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-background/15 text-background transition-colors hover:bg-background/30 sm:left-6">
                <ChevronLeft />
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Image suivante" className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-background/15 text-background transition-colors hover:bg-background/30 sm:right-6">
                <ChevronRight />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
