import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxPhoto = { src: string; alt: string; className: string };

/** Renders a group of thumbnails (via render prop) that open a shared fullscreen lightbox. */
export function PhotoGroup({
  photos,
  children,
}: {
  photos: LightboxPhoto[];
  children: (thumb: (index: number) => React.ReactNode) => React.ReactNode;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (photos.length > 1 && e.key === "ArrowRight") step(1);
      if (photos.length > 1 && e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step, photos.length]);

  const thumb = (i: number) => {
    const p = photos[i];
    return (
      <button
        type="button"
        onClick={() => setIndex(i)}
        aria-label={`Agrandir la photo : ${p.alt}`}
        className="group block w-full cursor-zoom-in overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <img
          src={p.src}
          alt={p.alt}
          loading="lazy"
          className={`${p.className} transition duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-95`}
        />
      </button>
    );
  };

  const current = index !== null ? photos[index] : null;
  const multi = photos.length > 1;
  const navBtn =
    "absolute top-1/2 -translate-y-1/2 rounded-full bg-background/15 p-3 text-background backdrop-blur transition hover:bg-background/30";

  return (
    <>
      {children(thumb)}
      {current &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Photo agrandie"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 animate-in fade-in duration-200 sm:p-10"
            onClick={close}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null || !multi) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <img
              key={current.src}
              src={current.src}
              alt={current.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            />
            <button
              type="button"
              aria-label="Fermer"
              onClick={close}
              autoFocus
              className="absolute right-4 top-4 rounded-full bg-background/15 p-2.5 text-background backdrop-blur transition hover:bg-background/30"
            >
              <X className="size-6" />
            </button>
            {multi && (
              <>
                <button type="button" aria-label="Photo précédente" className={`${navBtn} left-3 sm:left-6`} onClick={(e) => { e.stopPropagation(); step(-1); }}>
                  <ChevronLeft className="size-6" />
                </button>
                <button type="button" aria-label="Photo suivante" className={`${navBtn} right-3 sm:right-6`} onClick={(e) => { e.stopPropagation(); step(1); }}>
                  <ChevronRight className="size-6" />
                </button>
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-background/80">
                  {index! + 1} / {photos.length}
                </p>
              </>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
