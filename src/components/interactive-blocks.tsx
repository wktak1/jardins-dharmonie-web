import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { galleryCategories } from "@/lib/site-content";
import presentationVideo from "@/assets/jardins-eleusis-presentation-web.mp4.asset.json";
import presentationVideoWebm from "@/assets/jardins-eleusis-presentation-web.webm.asset.json";
import presentationPoster from "@/assets/jardins-eleusis-presentation-poster.jpg.asset.json";
import galerieChambre1 from "@/assets/galerie-chambre-1.jpg.asset.json";

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
  { category: "Extérieurs" },
  { category: "Espaces communs" },
  {
    category: "Chambres",
    photo: {
      src: galerieChambre1.url,
      alt: "Chambre des Jardins d’Eleusis avec lit médicalisé, fauteuil et armoire",
    },
  },
  { category: "Activités" },
  { category: "Repas" },
  { category: "Événements" },
];
export function GalleryBrowser({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState("Tout voir");
  const [selected, setSelected] = useState<number | null>(null);
  const visible = galleryItems
    .map((category, index) => ({ category, index }))
    .filter((x) => filter === "Tout voir" || x.category === filter)
    .slice(0, preview ? 5 : undefined);
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((selected + 1) % galleryItems.length);
      if (e.key === "ArrowLeft")
        setSelected((selected - 1 + galleryItems.length) % galleryItems.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);
  return (
    <>
      <div className="mb-7 flex flex-wrap gap-2" aria-label="Filtrer la galerie">
        {galleryCategories.map((cat) => (
          <Button
            key={cat}
            size="sm"
            variant={filter === cat ? "default" : "outline"}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map(({ category, photo, index }, displayIndex) => (
          <button
            key={category}
            className={`media-placeholder min-h-64 cursor-pointer overflow-hidden rounded-lg p-0 ${preview && displayIndex === 0 ? "sm:col-span-2" : ""}`}
            onClick={() => setSelected(index)}
            aria-label={
              photo
                ? `Agrandir la photographie : ${category}`
                : `Ouvrir l’emplacement photo : ${category}`
            }
          >
            {photo ? (
              <>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <p className="py-3 font-bold">{category}</p>
              </>
            ) : (
              <>
                <div className="media-mark">⌁</div>
                <p>{category}</p>
                <span>Photographie authentique à ajouter</span>
              </>
            )}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-foreground/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse"
        >
          <div className="relative flex h-[70vh] w-full max-w-5xl items-center justify-center rounded-lg bg-background">
            <div className="w-full px-6 text-center">
              {galleryItems[selected].photo ? (
                <img
                  src={galleryItems[selected].photo!.src}
                  alt={galleryItems[selected].photo!.alt}
                  className="mx-auto max-h-[58vh] w-auto max-w-full rounded-lg object-contain"
                />
              ) : (
                <>
                  <div className="media-mark mx-auto">⌁</div>
                  <h2 className="mt-4 text-2xl">{galleryItems[selected].category}</h2>
                  <p className="mt-2 text-muted-foreground">
                    Photographie authentique à ajouter
                  </p>
                </>
              )}
              {galleryItems[selected].photo && (
                <h2 className="mt-4 text-2xl">{galleryItems[selected].category}</h2>
              )}
            </div>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-3 top-3"
              onClick={() => setSelected(null)}
              aria-label="Fermer"
            >
              <X />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="absolute left-3"
              onClick={() =>
                setSelected((selected - 1 + galleryItems.length) % galleryItems.length)
              }
              aria-label="Image précédente"
            >
              <ChevronLeft />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-3"
              onClick={() => setSelected((selected + 1) % galleryItems.length)}
              aria-label="Image suivante"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
