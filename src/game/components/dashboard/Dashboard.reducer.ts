import { Action, State } from '@/src/game/components/dashboard/Dashboard.type';

export const dashboardReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_CLIP':
      // console.log('ADD_CLIP');
      if (state.wireStock < 1) return state;
      return {
        ...state,
        clipTotal: state.clipTotal + 1,
        clipStock: state.clipStock + 1,
        transitStock: state.clipStock + 1,
        wireStock: state.wireStock - 1,
        clipsPerSecond: state.clipsPerSecond + 1,
      };
    case 'DECREASE_CLIP_STOCK':
      // console.log('DECREASE_CLIP_STOCK');
      //if (state.transitStock !== null && state.transitStock > 0) {
      if (state.transitStock > 0) {
        const decrease = Math.floor(state.transitStock * (1 - state.productionBonus));
        return {
          ...state,
          clipStock: decrease,
          transitStock: decrease > 0 ? decrease : 0,
          funds:
            state.funds +
            (state.transitStock - decrease) * state.clipCost +
            state.publicDemand * 0.001 +
            state.marketing * 0.001,
        };
      }
      return state;
    case 'ADD_AUTOCLIPPER':
      if (state.funds < state.autoClippersCost) return state;
      return {
        ...state,
        autoClippers: state.autoClippers + 1,
        autoClippersCost: state.autoClippersCost * 2.2,
      };
    case 'PRODUCE_AUTOCLIPPER':
      // console.log('PRODUCE_AUTOCLIPPER');
      if (state.wireStock < state.autoClippers) return state;
      return {
        ...state,
        clipTotal: state.clipTotal + state.autoClippers,
        clipStock: state.clipStock + state.autoClippers,
        transitStock: state.clipStock + state.autoClippers,
        wireStock: state.wireStock - state.autoClippers,
      };
    case 'ADD_WIRE':
      if (state.funds < state.wireCost) return state;
      return {
        ...state,
        wireStock: state.wireStock + Math.round(state.wireBonus * 1e4),
        wireCost: state.wireCost + (Math.random() * (2.5 - 1) + 1), // @TODO: update wire cost bonus
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
        wireCost: state.wireCost > 8 ? state.wireCost - 0.25 : Math.random() * (20 - 10) + 10, // @TODO: update wire cost bonus
      };
    case 'UPDATE_MARKETING':
      if (state.marketing >= 10) return state;
      return {
        ...state,
        marketing: state.marketing + 1,
        marketingCost: state.marketingCost + 100,
      };
    case 'UPDATE_PRODUCTION_BONUS':
      // console.log('productionRatio', action.productionRatio);
      // console.log('productionRatio limit', Math.min(1, Math.max(0, action.productionRatio)));
      return {
        ...state,
        productionBonus: Math.min(1, Math.max(0, action.ratio)),
      };
    case 'UPDATE_WIRE_STOCK_BONUS':
      return {
        ...state,
        wireBonus: Math.min(1, Math.max(0, action.ratio)),
      };
    case 'UPDATE_DISPLAY_FEATURE':
      return {
        ...state,
        feature: {
          ...state.feature,
          [action.feature]: {
            enabled: action.enabled,
            disabled: action.disabled,
            incurred: action.incurred,
          },
        },
      };
    case 'UPDATE_PER_SECOND':
      // console.log('UPDATE_PER_SECOND');
      const clipsPerSecond =
        state.autoClippers > 0 && state.autoClippers <= state.wireStock ? state.autoClippers : 0;
      // console.log(clipsPerSecond);
      return {
        ...state,
        clipsPerSecond: clipsPerSecond,
      };
    case 'LOAD_STATE':
      return {
        ...state,
        clipTotal: 100000,
        funds: 100000,
        wireCost: 20,
      };
    default:
      return state;
  }
};
