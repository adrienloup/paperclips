import { Translation } from '../../generic/types/Translation.type';

export const en: Translation = {
  game: {
    title: 'Paperclips',
    manufacturing: 'Manufacturing',
    clipsPerSecond: 'Paperclips per second: {{value}}',
    business: 'Business',
    fundsAvailable: 'Funds available: $\f{{value}}',
    inventory: 'Unsold inventory: {{value}}',
    publicDemand: 'Public demand: {{value}}\f%',
    clipsCost: 'Price per paperclip: $\f{{value}}',
    level: 'Level: {{value}}',
    cost: 'Cost: $\f{{value}}',
    button: {
      makePaperclip: 'Make paperclip',
      buyWire: 'Wire',
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
