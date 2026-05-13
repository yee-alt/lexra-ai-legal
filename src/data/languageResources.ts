export type LanguageResource = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href: string;
};

export const languageResources: LanguageResource[] = [
  {
    id: "german-100-days",
    title: "German Cards 100 Days",
    subtitle: "German Learning",
    description: "Accelerate your German learning with our 100-day structured card system.",
    tags: ["German", "100 Days", "Flashcards", "Vocabulary"],
    href: "/language/german_cards_100days.html",
  },
  {
    id: "german-cards",
    title: "German Cards",
    subtitle: "German Vocabulary",
    description: "Essential German vocabulary cards for quick mastery.",
    tags: ["German", "Flashcards"],
    href: "/language/german_cards.html",
  },
  {
    id: "spanish-44-days",
    title: "44天西语训练法 (44 Days Spanish)",
    subtitle: "Spanish Mastery",
    description: "A comprehensive 44-day training methodology to master Spanish fundamentals.",
    tags: ["Spanish", "Methodology", "44 Days"],
    href: "/language/44天西语训练法.html",
  },
  {
    id: "spanish-cards",
    title: "Spanish Cards",
    subtitle: "Spanish Practice",
    description: "Daily flashcards to improve your Spanish retention.",
    tags: ["Spanish", "Flashcards"],
    href: "/language/spanish_cards.html",
  },
  {
    id: "french-10cards",
    title: "French 10 Cards",
    subtitle: "French Quick Start",
    description: "Learn French using our specialized 10-card daily rotation system.",
    tags: ["French", "Daily Practice"],
    href: "/language/french_10cards.html",
  },
  {
    id: "japanese-method",
    title: "日语学习法 (Japanese Method)",
    subtitle: "Japanese Learning Strategy",
    description: "Strategic approaches and methodologies for learning Japanese effectively.",
    tags: ["Japanese", "Strategy"],
    href: "/language/日语学习法.html",
  },
];
