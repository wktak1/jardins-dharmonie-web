import dossierAsset from "@/assets/dossier-admission.pdf.asset.json";

export const admissionDossier = {
  url: dossierAsset.url,
  label: "Dossier d’admission",
} as const;

export const site = {
  name: "Les Jardins d’Eleusis",
  legalName: "EHPAD Les Jardins d’Eleusis",
  address: "364 bis route de Koé, Dumbéa, Nouvelle-Calédonie",
  phone: "29 85 00",
  phoneHref: "tel:+687298500",
  email: "accueil@eleusis.nc",
  emailHref: "mailto:accueil@eleusis.nc",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=364%20bis%20route%20de%20Ko%C3%A9%2C%20Dumb%C3%A9a%2C%20Nouvelle-Cal%C3%A9donie",
  mapsEmbed:
    "https://www.google.com/maps?q=364%20bis%20route%20de%20Ko%C3%A9%2C%20Dumb%C3%A9a%2C%20Nouvelle-Cal%C3%A9donie&output=embed",
} as const;

export const navigation = [
  { label: "Accueil", to: "/" },
  { label: "Présentation", to: "/presentation" },
  { label: "L’établissement", to: "/etablissement" },
  { label: "Nos solutions d’accueil", to: "/solutions-accueil" },
  { label: "La vie au quotidien", to: "/vie-quotidien" },
  { label: "Tarifs et admission", to: "/tarifs-admission" },
  { label: "Galerie", to: "/galerie" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export const solutions = [
  {
    title: "Hébergement permanent",
    text: "Une solution d’accueil au sein de l’établissement. Les conditions d’accès et modalités sont à compléter après validation.",
    details: [
      "Conditions d’accès : Contenu à compléter.",
      "Durée et conditions de séjour : Contenu à compléter.",
      "Documents à fournir : Contenu à compléter.",
    ],
  },
  {
    title: "Hébergement temporaire",
    text: "Un accueil temporaire peut être proposé. Les durées, conditions d’accès et disponibilités sont à confirmer auprès de l’établissement.",
    details: [
      "Durées proposées : Contenu à compléter.",
      "Conditions d’accès et disponibilités : Contenu à compléter.",
      "Modalités pratiques : Contenu à compléter.",
    ],
  },
  {
    title: "Accueil de jour",
    text: "Un accueil en journée est proposé. Son fonctionnement et ses conditions d’accès seront précisés après validation.",
    details: [
      "Jours et horaires d’accueil : Contenu à compléter.",
      "Conditions d’accès : Contenu à compléter.",
      "Déroulement d’une journée : Contenu à compléter.",
    ],
  },
] as const;

export const units = [
  {
    name: "Les Niaoulis",
    year: "2013",
    places: "40 places",
    rooms: "Chambres individuelles et doubles",
    bathroom: "Salle de bain partagée",
    detail: "",
  },
  {
    name: "Les Fougères",
    year: "2019",
    places: "26 places",
    rooms: "Chambres individuelles",
    bathroom: "Salle de bain privative",
    detail: "",
  },
  {
    name: "Les Terrasses",
    year: "2019",
    places: "14 places",
    rooms: "Chambres individuelles",
    bathroom: "Salle de bain privative",
    detail: "Unité UHR",
  },
] as const;

export const dailyLife = [
  { title: "Les repas", text: "Les repas sont préparés sur place par une cuisinière dédiée." },
  { title: "Le linge", text: "Le linge de maison (draps, serviettes de toilette) est fourni par l’établissement. Le linge du nouveau résident sera identifié et marqué le jour de l’entrée par l’établissement. Il est préférable de choisir des vêtements adaptés au lavage collectif et industriel. L’entretien de votre linge personnel peut être assuré par votre famille." },
  {
    title: "Les activités et animations",
    text: "Programme et informations à compléter avec l’établissement.",
  },
  {
    title: "Les espaces communs",
    text: "Présentation des espaces à compléter avec les textes et photographies authentiques.",
  },
  {
    title: "Les chambres",
    text: "Présentation détaillée à compléter avec les photographies authentiques des unités.",
  },
  { title: "Les jardins et espaces extérieurs", text: "Présentation du cadre de vie à compléter." },
  { title: "Les moments de convivialité", text: "Contenu à compléter avec l’établissement." },
  {
    title: "L’accompagnement au quotidien",
    text: "Contenu à compléter après validation, sans présentation de prestations non confirmées.",
  },
] as const;

export const galleryCategories = [
  "Tout voir",
  "Extérieurs",
  "Espaces communs",
  "Chambres",
] as const;

export const faqs = [
  {
    question: "Puis-je bénéficier d’aides ? Comment en faire la demande ?",
    answer:
      "Selon votre situation et vos revenus, des aides peuvent vous être allouées. Le détail des aides existantes et des organismes à solliciter est en cours de validation avec l’établissement — Contenu à compléter. En attendant, l’accueil peut vous orienter dans vos démarches : contactez-nous au 29 85 00 ou par e-mail à accueil@eleusis.nc.",
  },
  {
    question: "Quelles sont les prestations incluses dans le tarif ?",
    answer:
      "Le tarif d’hébergement couvre l’ensemble des prestations hôtelières : votre chambre (individuelle ou double selon l’unité), l’eau et l’électricité, la restauration — avec des repas préparés sur place —, la fourniture et l’entretien du linge, également réalisé sur place, ainsi que l’entretien de votre chambre et des locaux communs et les activités d’animation. Le tarif dépendance couvre, lui, l’aide et la surveillance nécessaires à l’accomplissement des actes de la vie quotidienne, l’animation et l’aide à la vie quotidienne et sociale, ainsi que, selon les besoins, la fourniture de protections. Il est fixé en fonction du niveau de dépendance de la personne. La liste définitive des prestations incluses sera précisée dans la grille tarifaire officielle de l’établissement — **Concernant nos tarifs**, nous vous invitons à nous contacter au [**29.85.00**](tel:+687298500) ou par e-mail à [**accueil@eleusis.nc**](mailto:accueil@eleusis.nc) afin d’obtenir un **devis personnalisé, adapté à votre situation et au type d’hébergement souhaité**.",
  },
  {
    question: "Puis-je réserver une chambre ?",
    answer:
      "Les modalités de réservation d’une chambre (contrat de réservation, documents et conditions demandés) sont en cours de définition avec l’établissement — Contenu à compléter. Pour toute demande ou pour connaître les disponibilités, contactez l’accueil au 29 85 00 ou écrivez à accueil@eleusis.nc.",
  },
  {
    question: "Quels sont les documents à fournir pour constituer un dossier d’entrée ?",
    answer:
      "Pour constituer un dossier d’entrée, vous serez amené à fournir les documents suivants :",
    items: [
      "Une pièce d’identité",
      "Les justificatifs de revenus",
      "Le dernier avis d’imposition",
      "La carte de mutuelle",
      "L’attestation CAFAT",
      "Un relevé d’identité bancaire (RIB)",
      "L’ordonnance en cours",
      "Les derniers résultats d’analyses",
      "Une copie du jugement en cas de mesure de protection",
    ],
  },
] as const;

export const documents = [
  "Dossier d’admission",
  "Livret d’accueil",
  "Flyer de l’accueil de jour",
  "Autres documents utiles",
] as const;

export const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/p/EHPAD-Les-Jardins-dEleusis-100078689444383/",
  },
  { name: "Instagram", url: "https://www.instagram.com/ehpad_lesjardinsdeleusis/" },
  { name: "TikTok", url: "https://www.tiktok.com/@ehpadlesjardinsdeleusis" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ehpad-les-jardins-d-eleusis-b5b4b3318/" },
] as const;
