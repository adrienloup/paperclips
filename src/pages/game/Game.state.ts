import { State } from '@/src/pages/game/Game.type.ts';

export const gameState: State = {
  cash: 0,
  creativity: 0,
  factory: 0,
  factoryCost: 1e6,
  feature: {
    factory: false,
    investments: false,
    machine: false,
    marketing: false,
    megaMachine: false,
    paperclipPerSecond: false,
    production: false,
    resources: false,
    trust: true,
    wire: true,
  },
  funds: 0,
  fundsPerSecond: 0,
  harvesterDrone: 0,
  harvesterDroneCost: 1e4,
  machine: 0,
  machineCost: 5,
  marketing: 1,
  marketingCost: 100,
  megaMachine: 0,
  megaMachineCost: 5e2,
  memory: 1,
  operation: 0,
  operationMax: 5e4,
  paperclip: 0,
  paperclipPrice: 0.2,
  paperclipPriceRef: 0.2,
  paperclipPerSecond: 0,
  processor: 1,
  projects: [
    {
      id: 'revTracker',
      enabled: false,
      unlocked: false,
    },
    {
      id: 'begForMoreWire',
      enabled: false,
      unlocked: false,
    },
    {
      id: 'improvedWireExtrusion',
      enabled: false,
      unlocked: false,
    },
    {
      id: 'optimizedWireframe',
      enabled: false,
      unlocked: false,
    },
    {
      id: 'wireBuyer',
      enabled: false,
      unlocked: false,
    },
    {
      id: 'algorithmicTrading',
      enabled: false,
      unlocked: false,
    },
    {
      id: 'newSlogan',
      enabled: false,
      unlocked: false,
    },
    {
      id: 'attractiveJingle',
      enabled: false,
      unlocked: false,
    },
    {
      id: 'hypnoHarmonics',
      enabled: false,
      unlocked: false,
    },
    {
      id: 'hostileTakeover',
      enabled: false,
      unlocked: false,
    },
    {
      id: 'fullMonopoly',
      enabled: false,
      unlocked: false,
    },
  ],
  publicDemand: 0.5,
  swarmGifts: 0,
  trust: 2,
  unsoldInventory: 0,
  unsoldInventoryBonus: 1,
  wallet: {
    BTC: { quantity: 0 },
    ETH: { quantity: 0 },
    BNB: { quantity: 0 },
  },
  wire: 100,
  wireBonus: 100,
  wireCost: 20,
  wireDrone: 0,
  wireDroneCost: 1e4,
};

/*
 * Manufacturing
 * + paperclip
 * + wire
 * + machine / Effet megaMachine
 * + megaMachine: Exigence 75 machines
 * + paperclipPerSecond
 * Business
 * + funds
 * + unsold
 * + publicDemand
 * + marketing
 * Resources
 * + trust
 * + memory
 * + processor
 * + operation
 * + creativity
 * Projects
 * + revTracker / Effet paperclipPerSecond
 * + Beg for More Wire: Exigence 3 TRUSTS / Coût 250 OP / Effet wire 1K
 * + Improved Extrusion Wire: Exigence 3K PA / Coût 1700 OP / Effet wire 10K
 * + Optimized Wireframe Extrusion: Exigence 1500 wire / Coût 3500 OP / Effet wire 1M
 * + WireBuyer: Exigence 10 TRUSTS / Coût 7000 OP / Effet achats automatiquement de wire lorsque stock 0
 * + New Slogan: Exigence 3K PAP / Coût 25 CREA 500 OP / Effet unsold x2
 * + Attractive Jingle: Exigence 3500 PAP / Coût 45 CREA 500 OP / Effet unsold x3
 * + Hypno Harmonics: Exigence 4K PAP / Coût 7500 OP / Effet unsold x4
 * + Hostile Takeover: Exigence 5K PAP / Coût 1M $ / Effet unsold x5
 * + Full Monopoly: Exigence 6K PAP / Coût 10M $ / Effet unsold x6
 * */
