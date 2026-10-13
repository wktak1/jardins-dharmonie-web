import dossierAsset from "@/assets/dossier-admission.pdf.asset.json";
import medicalAsset from "@/assets/dossier-medical.pdf.asset.json";

export const admissionDossier = {
  url: dossierAsset.url,
  label: "Dossier d’admission",
} as const;

export const medicalDossier = {
  url: medicalAsset.url,
  label: "Dossier médical",
} as const;

export const site = {
  name: "Les Jardins d’Éleusis",
  legalName: "EHPAD Les Jardins d’Éleusis",
  address: "364 bis route de Koé, 98835 Dumbéa, Nouvelle-Calédonie",
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
    detail: "Unité UHR (Unité d'Hébergement Renforcée)",
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
    title: "La ferme",
    text: "Au sein de l’établissement, notre ferme offre aux résidents un espace de découverte, de détente et de partage au contact des animaux. Véritable lieu de vie, elle favorise les échanges, stimule les sens et contribue au bien-être des résidents.",
  },
  {
    title: "Les espaces communs",
    text: "Présentation des espaces à compléter avec les textes et photographies authentiques.",
  },
  {
    title: "Les chambres",
    text: "Toutes les chambres de l’EHPAD sont climatisées, équipées de sanitaires et d’un lit médicalisé. Il vous est possible d’agencer à votre convenance votre lieu de vie. Vous pouvez apporter petits meubles, équipements personnels ou réfrigérateurs si vous le souhaitez, dans la limite de l’espace disponible, afin de garantir votre sécurité et faciliter votre circulation ainsi que celle du personnel.",
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
    question: "Puis-je bénéficier d’aides financières ?",
    answer:
      "Selon votre situation, différentes aides peuvent être envisagées. Le **Pôle Gérontologique**, joignable au [**24.66.99**](tel:+687246699), peut vous renseigner sur les dispositifs existants et vous accompagner dans vos démarches.",
  },
  {
    question: "Quelles sont les prestations incluses dans le tarif ?",
    answer:
      "Le tarif d’hébergement couvre l’ensemble des prestations hôtelières : votre chambre (individuelle ou double selon l’unité), l’eau et l’électricité, la restauration — avec des repas préparés sur place —, la fourniture et l’entretien du linge, également réalisé sur place, ainsi que l’entretien de votre chambre et des locaux communs et les activités d’animation. Le tarif dépendance couvre, lui, l’aide et la surveillance nécessaires à l’accomplissement des actes de la vie quotidienne, l’animation et l’aide à la vie quotidienne et sociale, ainsi que, selon les besoins, la fourniture de protections. Il est fixé en fonction du niveau de dépendance de la personne.",
  },
  {
    question: "Puis-je réserver une chambre ?",
    answer:
      "Oui, il est possible de réserver une chambre. Pour connaître les modalités de réservation et les disponibilités, nous vous invitons à contacter l’accueil au [29.85.00](tel:+687298500) ou à nous écrire à l’adresse [accueil@eleusis.nc](mailto:accueil@eleusis.nc).",
  },
  {
    question: "Quels sont les documents à fournir pour constituer un dossier d’entrée ?",
    answer:
      "Pour constituer un dossier d’entrée, vous serez amené à fournir les documents suivants :",
    items: [
      "Photocopie de la pièce d’identité ou du passeport",
      "Photocopie du livret de famille",
      "Photocopie des couvertures sociales (CAFAT, mutuelle ou Aide Médicale Sud)",
      "Justificatifs attestant du montant de retraite",
      "Photocopie du dernier avis d’imposition ou de non-imposition",
      "Photocopie de l’ordonnance du jugement de mise sous protection juridique de la personne (le cas échéant)",
      "4 derniers relevés bancaires (de tous les comptes bancaires)",
      "Dernière ordonnance du traitement médical (s’il y a)",
      "Courrier indiquant le groupe de dépendance défini par la Province Sud et le montant de l’aide accordée par la CAFAT",
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
