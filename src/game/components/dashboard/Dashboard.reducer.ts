import { Action, State } from '@/src/game/components/dashboard/Dashboard.type';

export const dashboardReducer = (state: State, action: Action): State => {
  const a = state.megaClippers * 5e2;
  const b = state.autoClippers + a;
  const c =
    state.wireStock >= b
      ? b
      : state.wireStock >= a
        ? a
        : state.wireStock >= state.autoClippers
          ? state.autoClippers
          : 0;

  switch (action.type) {
    case 'REBOOT':
      return {
        ...state,
        clips: 9999,
        funds: 10000000,
        wireCost: 20,
      };
    case 'SELL_CLIPS':
      const decrease = Math.floor(state.clipsTransit * (1 - state.productionBonus));
      return {
        ...state,
        clipsStock: decrease,
        clipsTransit: decrease > 0 ? decrease : 0,
        funds: state.funds + (state.clipsTransit - decrease) * state.clipsCost,
      };
    case 'PRODUCE_MANUAL_CLIPS':
      return {
        ...state,
        clips: state.clips + 1,
        clipsStock: state.clipsStock + 1,
        clipsTransit: state.clipsStock + 1,
        clipsPerSecond: state.clipsPerSecond + 1,
        wireStock: state.wireStock - 1,
      };
    case 'PRODUCE_AUTOMATIC_CLIPS':
      return {
        ...state,
        clips: state.clips + c,
        clipsStock: state.clipsStock + c,
        clipsTransit: state.clipsStock + c,
        wireStock: state.wireStock - c,
      };
    case 'INCREASE_CLIPS_COST':
      const increasedCost = Math.min(state.clipsCost + 0.01, 1);
      return {
        ...state,
        clipsCost: increasedCost,
        publicDemand: 0.01 / increasedCost,
      };
    case 'DECREASE_CLIPS_COST':
      const decreasedCost = Math.max(state.clipsCost - 0.01, 0.01);
      return {
        ...state,
        clipsCost: decreasedCost,
        publicDemand: 0.01 / decreasedCost,
      };
    case 'BUY_WIRE':
      return {
        ...state,
        wireStock: state.wireStock + Math.round(state.wireBonus * 1e4),
        wireCost: state.wireCost + (Math.random() * (1.25 - 0.25) + 0.25),
        funds: state.funds - state.wireCost,
      };
    case 'UPDATE_PER_SECOND':
      return {
        ...state,
        clipsPerSecond:
          state.wireStock >= b ? b : state.wireStock >= state.autoClippers ? state.autoClippers : 0,
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
        megaClippersCost: state.megaClippersCost + 1e3, // Bonus
        funds: state.funds - state.megaClippersCost,
      };
    case 'UPDATE_MARKETING':
      return {
        ...state,
        marketing: state.marketing + 1,
        marketingCost: state.marketingCost + 100,
        productionBonus: state.marketing / 20,
      };
    case 'UPDATE_PRODUCTION_BONUS':
      return {
        ...state,
        productionBonus: action.bonus + (state.marketing - 1) / 20,
      };
    case 'UPDATE_WIRE_STOCK_BONUS':
      return {
        ...state,
        wireBonus: Math.min(1, Math.max(0, action.bonus)),
      };
    default:
      return state;
  }
};
