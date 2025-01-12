import { Dashboard } from './Dashboard.type';

type Action =
  | { type: 'INCREASE' }
  | { type: 'DECREASE' }
  | { type: 'ADD_AUTOCLIPPER' }
  | { type: 'PRODUCE_AUTOCLIPPER' }
  | { type: 'BUY_WIRE' }
  | { type: 'INCREASE_CLIP_COST' }
  | { type: 'DECREASE_CLIP_COST' }
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'INCREASE_MARKETING' }
  | { type: 'UPDATE_PRODUCTION_BONUS'; productionBonusRatio: number }
  | { type: 'UPDATE_WIRE_BONUS'; wireBonusRatio: number };

export const dashboardReducer = (state: Dashboard, action: Action): Dashboard => {
  switch (action.type) {
    case 'INCREASE':
      if (state.wireStock <= 0) return state;
      return {
        ...state,
        clipTotal: state.clipTotal + 1,
        clipStock: state.clipStock + 1,
        transitStock: state.clipStock + 1,
        wireStock: state.wireStock - 1,
        clipsPerSecond: state.clipsPerSecond + 1,
      };
    case 'DECREASE':
      if (state.transitStock !== null && state.transitStock > 0) {
        const decreasedStock = Math.floor(state.transitStock * (1 - state.productionBonus));
        return {
          ...state,
          clipStock: decreasedStock,
          transitStock: decreasedStock > 0 ? decreasedStock : null, // Continue ou termine
          funds: state.funds + (state.transitStock - decreasedStock) * state.clipCost + state.publicDemand * 0.001 + state.marketing * 0.001,
          clipsPerSecond: state.autoClippers ? state.autoClippers : state.clipsPerSecond - 1,
        };
      }
      return state;
    case 'ADD_AUTOCLIPPER':
      if (state.funds < state.autoClippersCost) return state;
      return {
        ...state,
        autoClippers: state.autoClippers + 1,
        autoClippersCost: state.autoClippersCost * 2.5,
      };
    case 'PRODUCE_AUTOCLIPPER':
      if (state.wireStock < state.autoClippers) return state;
      return {
        ...state,
        clipTotal: state.clipTotal + state.autoClippers,
        clipStock: state.clipStock + state.autoClippers,
        transitStock: state.clipStock + state.autoClippers,
        wireStock: state.wireStock - state.autoClippers,
        clipsPerSecond: state.autoClippers,
      };
    case 'BUY_WIRE':
      if (state.funds < state.wireCost) return state;
      return {
        ...state,
        wireStock: state.wireStock + Math.round(state.wireBonus * 1e4), // @TODO 1000
        funds: state.funds - state.wireCost,
      };
    case 'INCREASE_CLIP_COST':
      return {
        ...state,
        clipCost: Math.min(state.clipCost + 0.01, 1),
        publicDemand: Math.ceil(Math.max(1, 100 - state.clipCost * 100)), // Diminue les fonds
      };
    case 'DECREASE_CLIP_COST':
      return {
        ...state,
        clipCost: Math.max(state.clipCost - 0.01, 0.01),
        publicDemand: Math.ceil(Math.max(0, 100 - state.clipCost * 100 + 1)), // Augmente les fonds
      };
    case 'UPDATE_WIRE_COST':
      return {
        ...state,
        wireCost: state.wireCost > 8 ? state.wireCost - 0.02 : Math.random() * (24 - 12) + 12, // @TODO: wireCostBonus
      };
    case 'INCREASE_MARKETING':
      if (state.marketing == 10) return state;
      return {
        ...state,
        marketing: state.marketing + 1,
        marketingCost: state.marketingCost + 100,
      };
    case 'UPDATE_PRODUCTION_BONUS':
      // console.log('productionBonusRatio', action.productionBonusRatio);
      // console.log('productionBonusRatio limit', Math.min(1, Math.max(0, action.productionBonusRatio)));
      return {
        ...state,
        productionBonus: Math.min(1, Math.max(0, action.productionBonusRatio)),
      };
    case 'UPDATE_WIRE_BONUS':
      return {
        ...state,
        wireBonus: Math.min(1, Math.max(0, action.wireBonusRatio)),
      };
    default:
      return state;
  }
};
