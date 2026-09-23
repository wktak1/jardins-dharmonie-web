export const site = {
  name: "Les Jardins d’Eleusis",
  legalName: "EHPAD Les Jardins d’Eleusis",
  address: "364 bis route de Koé, Dumbéa, Nouvelle-Calédonie",
  phone: "29 85 00",
  phoneHref: "tel:+687298500",
  email: "accueil@eleusis.nc",
  emailHref: "mailto:accueil@eleusis.nc",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=364%20bis%20route%20de%20Ko%C3%A9%2C%20Dumb%C3%A9a%2C%20Nouvelle-Cal%C3%A9donie",
  mapsEmbed: "https://www.google.com/maps?q=364%20bis%20route%20de%20Ko%C3%A9%2C%20Dumb%C3%A9a%2C%20Nouvelle-Cal%C3%A9donie&output=embed",
} as const;

export const navigation = [
  { label: "Accueil", to: "/" },
  { label: "L’établissement", to: "/etablissement" },
  { label: "Nos solutions d’accueil", to: "/solutions-accueil" },
  { label: "La vie au quotidien", to: "/vie-quotidien" },
  { label: "Tarifs et admission", to: "/tarifs-admission" },
  { label: "Galerie", to: "/galerie" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export const solutions = [
  { title: "Hébergement permanent", text: "Une solution d’accueil au sein de l’établissement. Les conditions d’accès et modalités sont à compléter après validation." },
  { title: "Hébergement temporaire", text: "Un accueil temporaire peut être proposé. Les durées, conditions d’accès et disponibilités sont à confirmer auprès de l’établissement." },
  { title: "Accueil de jour", text: "Un accueil en journée est proposé. Son fonctionnement et ses conditions d’accès seront précisés après validation." },
] as const;

export const units = [
  { name: "Les Niaoulis", year: "2013", places: "40 places", rooms: "Chambres individuelles et doubles", bathroom: "Salle de bain partagée", detail: "" },
  { name: "Les Fougères", year: "2019", places: "26 places", rooms: "Chambres individuelles", bathroom: "Salle de bain privative", detail: "" },
  { name: "Les Terrasses", year: "2019", places: "14 places", rooms: "Chambres individuelles", bathroom: "Salle de bain privative", detail: "Unité UHR" },
] as const;

export const dailyLife = [
  { title: "Les repas", text: "Les repas sont préparés sur place par une cuisinière dédiée." },
  { title: "Le linge", text: "Le service de lingerie est réalisé sur place." },
  { title: "Les activités et animations", text: "Programme et informations à compléter avec l’établissement." },
  { title: "Les espaces communs", text: "Présentation des espaces à compléter avec les textes et photographies authentiques." },
  { title: "Les chambres", text: "Présentation détaillée à compléter avec les photographies authentiques des unités." },
  { title: "Les jardins et espaces extérieurs", text: "Présentation du cadre de vie à compléter." },
  { title: "Les moments de convivialité", text: "Contenu à compléter avec l’établissement." },
  { title: "L’accompagnement au quotidien", text: "Contenu à compléter après validation, sans présentation de prestations non confirmées." },
] as const;

export const galleryCategories = ["Tout voir", "Extérieurs", "Espaces communs", "Chambres", "Activités", "Repas", "Événements"] as const;

export const faqs = [
  "Comment déposer un dossier d’admission ?",
  "Quels documents faut-il fournir ?",
  "Quels types d’accueil proposez-vous ?",
  "Proposez-vous un hébergement temporaire ?",
  "Comment fonctionne l’accueil de jour ?",
  "Peut-on visiter l’établissement avant une admission ?",
  "Que peut apporter un résident dans sa chambre ?",
  "Comment se déroulent les repas ?",
  "Quelles activités sont proposées ?",
  "Comment contacter un résident ?",
  "Quels sont les horaires de visite ?",
  "Comment sont calculés les tarifs ?",
] as const;

export const documents = ["Dossier d’admission", "Livret d’accueil", "Flyer de l’accueil de jour", "Autres documents utiles"] as const;

export const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/p/EHPAD-Les-Jardins-dEleusis-100078689444383/" },
  { name: "Instagram", url: "https://www.instagram.com/ehpad_lesjardinsdeleusis/" },
  { name: "TikTok", url: "https://www.tiktok.com/@ehpadlesjardinsdeleusis" },
] as const;
