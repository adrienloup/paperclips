import { Translation } from '../../generic/types/Translation.type';

export const fr: Translation = {
  game: {
    title: 'Trombones',
    manufacturing: 'Production',
    clipsPerSecond: 'Produits par seconde : {{value}}',
    business: 'Entreprise',
    fundsAvailable: 'Fonds disponibles : {{value}}\f€',
    inventory: 'Inventaire invendu : {{value}}',
    publicDemand: 'Demande public : {{value}}\f%',
    clipsCost: 'Prix par produit : {{value}}\f€',
    wire: '{{value}} pouces',
    level: 'Niveau : {{value}}',
    cost: 'Coût : {{value}}\f€',
    button: {
      makePaperclip: 'Produire un trombone',
      buyWire: "Fil d'acier",
      buyAutoProducer: 'Machines à trombones',
      buyMarketing: 'Marketing',
      decreaseClipsCost: 'Diminuer',
      increaseClipsCost: 'Augmenter',
    },
    note: {
      autoProducers: 'Machines à trombones',
      marketing: 'Marketing',
      trust: 'Confiance',
    },
  },
};
