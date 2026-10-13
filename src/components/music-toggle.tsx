import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import musicAsset from "@/assets/vivaldi-automne.ogg.asset.json";

const KEY = "eleusis-music";

export function MusicToggle() {
  const ref = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (ref.current) ref.current.volume = 0.2;
    if (sessionStorage.getItem(KEY) === "on") {
      ref.current?.play().then(() => setOn(true)).catch(() => setOn(false));
    }
  }, []);

  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (on) {
      a.pause();
      setOn(false);
      sessionStorage.setItem(KEY, "off");
    } else {
      a.volume = 0.2;
      a.play().then(() => { setOn(true); sessionStorage.setItem(KEY, "on"); }).catch(() => setOn(false));
    }
  };

  return <>
    <audio ref={ref} src={musicAsset.url} loop preload="none" />
    <Button variant="ghost" size="icon" onClick={toggle} aria-pressed={on} aria-label={on ? "Couper la musique d’ambiance" : "Activer la musique d’ambiance"} title={on ? "Couper la musique" : "Activer la musique"} className="text-primary">
      {on ? <Music className="animate-pulse" /> : <VolumeX className="opacity-70" />}
    </Button>
  </>;
}
