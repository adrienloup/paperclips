import { Translation } from '../../generic/types/Translation.type';

export const en: Translation = {
  game: {
    dashboard: 'Paperclips {{value}}',
    manufacturing: 'Manufacturing',
    business: 'Business',
    clipsPerSecond: 'Output rate: {{value}}/s',
    fundsAvailable: 'Funds available: $\f{{value}}',
    unsoldInventory: 'Unsold inventory: {{value}}',
    publicDemand: 'Public demand: {{value}}\f%',
    clipsCost: 'Price per clip: $\f{{value}}',
    steelWire: '{{value}} inches',
    level: 'Level: {{value}}',
    cost: 'Cost: $\f{{value}}',
    button: {
      makePaperclip: 'Make paperclip',
      buySteelWire: 'Steel wire',
      buyAutoProducer: 'AutoClippers',
      buyMarketing: 'Marketing',
      decreaseClipsCost: 'Lower',
      increaseClipsCost: 'Raise',
    },
    note: {
      autoProducers: 'AutoClippers',
      marketing: 'Marketing',
      trust: 'Trust',
    },
  },
};
