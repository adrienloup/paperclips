import { Action, State } from '@/src/game/components/dashboard/Dashboard.type';

export const dashboardReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'PRODUCE_MANUAL_CLIPS':
      return {
        ...state,
        clips: state.clips + 1,
        clipsStock: state.clipsStock + 1,
        wireStock: state.wireStock - 1,
      };
    case 'PRODUCE_AUTOMATIC_CLIPS':
      return {
        ...state,
        clips: state.clips + state.autoClippers + state.megaClippers,
        clipsStock: state.clipsStock + state.autoClippers + state.megaClippers,
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
    case 'UPDATE_MARKETING':
      return {
        ...state,
        marketing: state.marketing + 1,
        clipsSales: Math.floor(
          100 - (state.marketing + 1 + state.publicDemandBonus + state.clipsBonus)
        ),
      };
    case 'UPDATE_CLIPS_BONUS':
      return {
        ...state,
        clipsBonus: action.bonus,
        clipsSales: Math.floor(100 - (action.bonus + state.publicDemandBonus + state.marketing)),
      };
    default:
      return state;
  }
};
