import { Action, State } from '@/src/game/components/dashboard/Dashboard.type';

export const dashboardReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'PRODUCE_MANUAL_CLIPS':
      return {
        ...state,
        clips: state.clips + 1,
        clipsStock: state.clipsStock + 1,
        wireStock: state.wireStock - 1,
        clipsPerSecond: state.clipsPerSecond + 1,
      };
    case 'PRODUCE_AUTOMATIC_CLIPS':
      const automaticMegaClippers = state.megaClippers > 0 ? state.megaClippers + 5e2 : 0;
      return {
        ...state,
        clips: state.clips + (state.autoClippers + state.autoClippersBonus + automaticMegaClippers),
        clipsStock:
          state.clipsStock + (state.autoClippers + state.autoClippersBonus + automaticMegaClippers),
        wireStock: state.wireStock - (state.autoClippers + state.megaClippers),
      };
    case 'SELL_CLIPS':
      return {
        ...state,
        clipsStock:
          state.clipsSales == 0
            ? state.clipsStock - state.clipsStock
            : state.clipsStock - state.clipsSales,
        funds: state.funds + state.clipsStock * state.clipsCost,
      };
    case 'DECREASE_CLIPS_COST':
      const minPublicDemand: number = Math.min(1, 1 - state.clipsCost + 0.02);
      return {
        ...state,
        clipsCost: Math.max(state.clipsCost - 0.01, 0.01),
        publicDemand: minPublicDemand,
        publicDemandBonus: Math.floor(minPublicDemand * 10),
        clipsSales: Math.floor(100 - (minPublicDemand * 10 + state.marketing + state.clipsBonus)),
      };
    case 'INCREASE_CLIPS_COST':
      const maxPublicDemand: number = Math.max(0.01, 1 - state.clipsCost);
      return {
        ...state,
        clipsCost: Math.min(state.clipsCost + 0.01, 1),
        publicDemand: maxPublicDemand,
        publicDemandBonus: Math.floor(maxPublicDemand * 10),
        clipsSales: Math.floor(
          100 - (maxPublicDemand * 10 - 2 + state.marketing + state.clipsBonus)
        ),
      };
    case 'UPDATE_PER_SECOND':
      const perSecondMegaClippers = state.megaClippers > 0 ? state.megaClippers + 5e2 : 0;
      return {
        ...state,
        clipsPerSecond:
          state.wireStock > 0
            ? state.autoClippers + state.autoClippersBonus + perSecondMegaClippers > 0
              ? state.autoClippers + state.autoClippersBonus + perSecondMegaClippers
              : 0
            : 0,
      };
    case 'UPDATE_WIRE_COST':
      return {
        ...state,
        wireCost: state.wireCost >= 8 ? state.wireCost - 0.25 : Math.random() * (24 - 12) + 12,
      };
    case 'UPDATE_WIRE_STOCK':
      return {
        ...state,
        wireStock: state.wireStock + (state.wireBonus > 0 ? state.wireBonus : 1e3),
        wireCost: state.wireCost + (Math.random() * (1.25 - 0.25) + 0.25),
        funds: state.funds - state.wireCost,
      };
    case 'UPDATE_MARKETING':
      return {
        ...state,
        marketing: state.marketing + 1,
        clipsSales: Math.floor(
          100 - (state.marketing + 1 + state.publicDemandBonus + state.clipsBonus)
        ),
      };
    case 'UPDATE_AUTOCLIPPERS':
      return {
        ...state,
        autoClippers: state.autoClippers + 1,
        autoClippersCost: 1.1 * state.autoClippersCost + (Math.random() * (2 - 1) + 1),
        funds: state.funds - state.autoClippersCost,
      };
    case 'UPDATE_MEGACLIPPERS':
      return {
        ...state,
        megaClippers: state.megaClippers + 1,
        megaClippersCost: state.megaClippersCost + 1e3,
        funds: state.funds - state.megaClippersCost,
      };
    case 'UPDATE_CLIPS_BONUS':
      return {
        ...state,
        clipsBonus: action.bonus,
        clipsSales: Math.floor(100 - (action.bonus + state.publicDemandBonus + state.marketing)),
      };
    case 'UPDATE_AUTOCLIPPERS_BONUS':
      return {
        ...state,
        autoClippersBonus: action.bonus,
      };
    case 'UPDATE_WIRE_BONUS':
      return {
        ...state,
        wireBonus: action.bonus,
      };
    case 'LOAD_STATE':
      return {
        ...state,
        clips: 9999,
        funds: 9999999,
        wireCost: 20,
      };
    default:
      return state;
  }
};
