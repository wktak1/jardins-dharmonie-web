import { Link } from "@tanstack/react-router";
import { Menu, Phone, Mail, MapPin, Download, X, ExternalLink, Facebook, Instagram, Linkedin, Music } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
const logoAsset = { url: "/images/jardins-eleusis-logo.jpg" };
const logoHeaderAsset = { url: "/images/jardins-eleusis-logo-v2.png" };
const heroLogoAsset = { url: "/images/jardins-eleusis-hero-logo.png" };
import { admissionDossier, navigation, site, socialLinks } from "@/lib/site-content";
const musicAsset = { url: "/audio/vivaldi-autumn.ogg" };

// Note double barrée : même dessin que l’icône « Music » de lucide, avec une barre de suppression.
export function MusicNoteOffIcon({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /><path d="m2 2 20 20" /></svg>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicError, setMusicError] = useState(false);
  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    setMusicError(false);
    if (!audio.paused) {
      audio.pause();
      return;
    }
    audio.volume = 0.3;
    try {
      await audio.play();
    } catch {
      setMusicPlaying(false);
      setMusicError(true);
    }
  }
  function musicButton() {
    const label = musicPlaying ? "Couper la musique" : "Activer la musique";
    return <TooltipProvider delayDuration={150}><Tooltip><TooltipTrigger asChild><Button type="button" variant="ghost" size="icon" aria-label={label} aria-pressed={musicPlaying} onClick={toggleMusic} className={cn("shrink-0", musicPlaying ? "bg-accent text-primary" : "text-muted-foreground")}>{musicPlaying ? <MusicNoteOffIcon className="!size-5" /> : <Music aria-hidden="true" className="!size-5" />}</Button></TooltipTrigger><TooltipContent side="bottom">{musicError ? "Lecture indisponible — réessayer" : label}</TooltipContent></Tooltip></TooltipProvider>;
  }
  useEffect(() => { if (open) document.body.style.overflow = "hidden"; else document.body.style.overflow = ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
    <audio ref={audioRef} src={musicAsset.url} preload="none" loop onPlay={() => setMusicPlaying(true)} onPause={() => setMusicPlaying(false)} onError={() => { setMusicPlaying(false); setMusicError(true); }} />
    <span className="sr-only" role="status">{musicError ? "La musique n’a pas pu être lancée. Vous pouvez réessayer." : ""}</span>
    <div className="border-b border-border bg-secondary/60">
      <div className="container-shell flex min-h-9 items-center justify-end gap-5 text-sm">
        <a className="contact-link" href={site.phoneHref}><Phone aria-hidden="true" /> {site.phone}</a>
        <a className="contact-link hidden sm:inline-flex" href={site.emailHref}><Mail aria-hidden="true" /> {site.email}</a>
      </div>
    </div>
    <div className="container-shell grid min-h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
      <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Les Jardins d’Éleusis — accueil">
        <img src={logoHeaderAsset.url} alt="" className="h-14 w-auto shrink-0 rounded-sm object-contain" />
        <span className="min-w-0 font-display text-lg font-semibold leading-tight text-primary sm:text-xl">Les Jardins<br className="sm:hidden" /> d’Éleusis</span>
      </Link>
      <div className="flex items-center gap-2">
        {musicButton()}
        <Button asChild variant="secondary" className="hidden xl:inline-flex"><a href={admissionDossier.url} target="_blank" rel="noopener" aria-label="Ouvrir le dossier d’admission (PDF)"><Download />Dossier d’admission</a></Button>
        <Button asChild className="hidden sm:inline-flex"><Link to="/contact">Nous contacter</Link></Button>
        <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setOpen(true)} aria-label="Ouvrir le menu"><Menu /></Button>
      </div>
    </div>
    <nav className="hidden border-t border-border lg:block" aria-label="Navigation principale">
      <div className="nav-row container-shell py-1.5">
        {navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>{item.label}</Link>)}
      </div>
    </nav>
    {open && <div className="fixed inset-0 z-50 min-h-screen bg-background p-5 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu principal">
      <div className="flex items-center justify-between border-b border-border pb-4"><span className="font-display text-xl text-primary">Les Jardins d’Éleusis</span><Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Fermer le menu"><X /></Button></div>
      <nav className="mt-5 grid gap-1.5 overflow-x-hidden" aria-label="Navigation mobile">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3.5 text-lg font-medium leading-snug hover:bg-secondary">{item.label}</Link>)}</nav>
      <div className="mt-6 grid gap-3"><Button asChild><Link to="/contact" onClick={() => setOpen(false)}>Nous contacter</Link></Button><div className="flex items-center justify-center gap-2">{musicButton()}<Button asChild variant="secondary"><a href={admissionDossier.url} target="_blank" rel="noopener" aria-label="Ouvrir le dossier d’admission (PDF)" onClick={() => setOpen(false)}><Download />Dossier d’admission</a></Button></div></div>
    </div>}
  </header>;
}

export function SiteFooter() {
  return <footer className="bg-primary text-primary-foreground">
    <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
      <div><img src={logoAsset.url} alt="Logo des Jardins d’Éleusis" className="h-20 w-40 rounded-sm object-cover" /><p className="mt-4 text-sm opacity-85">Établissement d’hébergement pour personnes âgées à Dumbéa.</p></div>
      <div><h2 className="footer-title">Coordonnées</h2><address className="not-italic space-y-3 text-sm opacity-90"><p>{site.address}</p><a className="footer-link" href={site.phoneHref}>{site.phone}</a><a className="footer-link" href={site.emailHref}>{site.email}</a></address></div>
      <div><h2 className="footer-title">Accès rapide</h2><div className="grid gap-2 text-sm"><a className="footer-link" href={admissionDossier.url} target="_blank" rel="noopener" aria-label="Ouvrir le dossier d’admission (PDF)">Dossier d’admission</a><Link className="footer-link" to="/mentions-legales">Mentions légales</Link><Link className="footer-link" to="/politique-confidentialite">Politique de confidentialité</Link><Link className="footer-link" to="/plan-du-site">Plan du site</Link></div></div>
      <div><h2 className="footer-title">Réseaux sociaux</h2><div className="flex gap-2">{socialLinks.map(l => <SocialLink key={l.name} name={l.name} url={l.url} />)}</div></div>
    </div>
    <div className="border-t border-primary-foreground/20"><div className="container-shell py-5 text-center text-sm opacity-80">© Les Jardins d’Éleusis — 2026.</div></div>
  </footer>;
}
export function TikTokIcon({ className = "" }: { className?: string }) { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`h-6 w-6 ${className}`}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>; }
export function socialIcon(name: string) { return name === "Facebook" ? <Facebook aria-hidden="true" /> : name === "Instagram" ? <Instagram aria-hidden="true" /> : name === "LinkedIn" ? <Linkedin aria-hidden="true" /> : <TikTokIcon />; }
function SocialLink({ name, url }: { name: string; url: string }) { return <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Suivre Les Jardins d’Éleusis sur ${name}`} title={name} className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/30 transition duration-300 ease-out hover:scale-105 hover:border-primary-foreground/70 hover:bg-primary-foreground/10 motion-reduce:transition-none motion-reduce:hover:scale-100">{socialIcon(name)}</a>; }
function Social({ icon, label }: { icon: React.ReactNode; label: string }) { return <span className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/30" aria-label={label} title={label}>{icon}</span>; }

export function PageIntro({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) { return <section className="page-intro relative isolate overflow-hidden"><img src={heroLogoAsset.url} alt="" aria-hidden="true" width={768} height={768} className="page-intro-watermark" /><div className="container-narrow relative z-10">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1><div className="mt-5 max-w-3xl text-lg text-muted-foreground">{children}</div></div></section>; }

export function MediaPlaceholder({ label, className = "", compact = false }: { label: string; className?: string; compact?: boolean }) { return <div className={`media-placeholder ${compact ? "min-h-44" : "min-h-64"} ${className}`} role="img" aria-label={`${label} — photographie authentique à ajouter`}><div className="media-mark" aria-hidden="true">⌁</div><p>{label}</p><span>Photographie authentique à ajouter</span></div>; }

export function SectionHeading({ eyebrow, title, text, className }: { eyebrow?: string; title: string; text?: string; className?: string }) { return <div className={cn("mb-8 max-w-3xl", className)}>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{text && <p className="mt-4 text-muted-foreground">{text}</p>}</div>; }

export function ContactStrip() { return <section className="bg-accent"><div className="container-shell grid gap-6 py-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center"><div><h2 className="text-2xl">Une question avant votre visite ?</h2><p className="mt-2 text-accent-foreground/80">L’établissement est joignable par téléphone ou par e-mail.</p></div><div className="flex flex-wrap gap-3"><Button asChild><a href={site.phoneHref}><Phone />{site.phone}</a></Button><Button asChild variant="outline"><a href={site.emailHref}><Mail />Écrire un e-mail</a></Button></div></div></section>; }

export function MapBlock({ centered = false }: { centered?: boolean } = {}) { return <div className="grid overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-[1.4fr_1fr]"><iframe title="Carte de l’EHPAD Les Jardins d’Éleusis à Dumbéa" src={site.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border-0 lg:h-full"/><div className={cn("p-7 lg:p-10", centered && "text-center")}><MapPin className={cn("h-8 w-8 text-secondary-foreground", centered && "mx-auto")} /><h2 className="mt-4 text-2xl">Nous trouver à Dumbéa</h2><p className="mt-3 text-muted-foreground">{site.address}</p><div className={cn("mt-6", centered && "flex justify-center")}><Button asChild><a href={site.mapsUrl} target="_blank" rel="noreferrer">Ouvrir l’itinéraire <ExternalLink /></a></Button></div></div></div>; }
