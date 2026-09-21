import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryCategories } from "@/lib/site-content";

export function VideoPlaceholder() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = async () => { const video = videoRef.current; if (!video || !video.currentSrc) return; if (video.paused) { await video.play(); setPlaying(true); } else { video.pause(); setPlaying(false); } };
  return <div className="relative min-h-[34rem] overflow-hidden bg-primary md:min-h-[40rem]">
    <video ref={videoRef} autoPlay muted loop playsInline preload="none" aria-label="Vidéo de présentation des Jardins d’Eleusis — contenu à ajouter" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-primary/85" />
    <div className="container-shell relative flex min-h-[34rem] items-end py-14 md:min-h-[40rem] md:py-20">
      <div className="max-w-3xl text-primary-foreground"><p className="mb-4 text-sm font-bold uppercase tracking-[.1em]">EHPAD à Dumbéa</p><h1 className="text-primary-foreground">Les Jardins d’Eleusis, un lieu de vie à Dumbéa</h1><p className="mt-6 max-w-2xl text-lg opacity-90">Découvrez notre établissement, ses espaces de vie et les différentes solutions d’accueil proposées aux personnes âgées et à leurs familles.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="secondary" size="lg"><a href="/etablissement">Découvrir l’établissement</a></Button><Button asChild variant="outline" size="lg"><a href="/tarifs-admission#documents">Dossier d’admission</a></Button></div><p className="mt-6 text-sm opacity-75">Vidéo de présentation et image de couverture à ajouter.</p></div>
    </div>
    <Button onClick={toggle} variant="secondary" size="icon" className="absolute bottom-5 right-5" aria-label={playing ? "Mettre la vidéo en pause" : "Lancer la vidéo"}>{playing ? <Pause /> : <Play />}</Button>
  </div>;
}

const galleryItems = ["Extérieurs", "Espaces communs", "Chambres", "Activités", "Repas", "Événements"];
export function GalleryBrowser({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState("Tout voir"); const [selected, setSelected] = useState<number | null>(null);
  const visible = galleryItems.map((category, index) => ({ category, index })).filter(x => filter === "Tout voir" || x.category === filter).slice(0, preview ? 5 : undefined);
  useEffect(() => { if (selected === null) return; const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); if (e.key === "ArrowRight") setSelected((selected + 1) % galleryItems.length); if (e.key === "ArrowLeft") setSelected((selected - 1 + galleryItems.length) % galleryItems.length); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [selected]);
  return <><div className="mb-7 flex flex-wrap gap-2" aria-label="Filtrer la galerie">{galleryCategories.map(cat => <Button key={cat} size="sm" variant={filter === cat ? "default" : "outline"} onClick={() => setFilter(cat)}>{cat}</Button>)}</div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visible.map(({category,index}, displayIndex) => <button key={category} className={`media-placeholder min-h-64 cursor-pointer rounded-lg ${preview && displayIndex === 0 ? "sm:col-span-2" : ""}`} onClick={() => setSelected(index)} aria-label={`Ouvrir l’emplacement photo : ${category}`}><div className="media-mark">⌁</div><p>{category}</p><span>Photographie authentique à ajouter</span></button>)}</div>{selected !== null && <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/90 p-4" role="dialog" aria-modal="true" aria-label="Visionneuse"><div className="relative flex h-[70vh] w-full max-w-5xl items-center justify-center rounded-lg bg-background"><div className="text-center"><div className="media-mark mx-auto">⌁</div><h2 className="text-2xl">{galleryItems[selected]}</h2><p className="mt-2 text-muted-foreground">Photographie authentique à ajouter</p></div><Button size="icon" variant="outline" className="absolute right-3 top-3" onClick={() => setSelected(null)} aria-label="Fermer"><X /></Button><Button size="icon" variant="outline" className="absolute left-3" onClick={() => setSelected((selected - 1 + galleryItems.length) % galleryItems.length)} aria-label="Image précédente"><ChevronLeft /></Button><Button size="icon" variant="outline" className="absolute right-3" onClick={() => setSelected((selected + 1) % galleryItems.length)} aria-label="Image suivante"><ChevronRight /></Button></div></div>}</>;
}
