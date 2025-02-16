import { Action, State } from '@/src/game/components/dashboard/Dashboard.type';

export const dashboardReducer = (state: State, action: Action): State => {
  switch (action.type) {
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
        fundsPerSecond: (state.fundsPerSecond + 1) * state.clipsCost,
        wiresStock: state.wiresStock - 1,
      };
    case 'PRODUCE_AUTOMATIC_CLIPS':
      const megaClippers = state.megaClippers * 5e2;
      const allClippers = megaClippers + state.autoClippers;

      return {
        ...state,
        clips: state.clips + allClippers,
        clipsStock: state.clipsStock + allClippers,
        clipsTransit: state.clipsStock + allClippers,
        wiresStock:
          state.wiresStock >= allClippers
            ? state.wiresStock - allClippers
            : state.wiresStock >= megaClippers
              ? state.wiresStock - megaClippers
              : state.wiresStock >= state.autoClippers
                ? state.wiresStock - state.autoClippers
                : 0,
      };
    case 'INCREASE_CLIPS_COST':
      const increaseClipsCost = Math.min(state.clipsCost + 0.01, 1);
      return {
        ...state,
        clipsCost: increaseClipsCost,
        publicDemand: 0.1 / increaseClipsCost,
      };
    case 'DECREASE_CLIPS_COST':
      const decreaseClipsCost = Math.max(state.clipsCost - 0.01, 0.1);
      return {
        ...state,
        clipsCost: decreaseClipsCost,
        publicDemand: 0.1 / decreaseClipsCost,
      };
    case 'BUY_WIRE':
      return {
        ...state,
        wiresStock: state.wiresStock + (state.wires + state.wiresBonus * state.wires),
        wiresCost: state.wiresCost + (Math.random() * (1.25 - 0.25) + 0.25),
        funds: state.funds - state.wiresCost,
      };
    case 'BUY_AUTOCLIPPERS':
      return {
        ...state,
        autoClippers: state.autoClippers + 1,
        autoClippersCost: 1.1 * state.autoClippersCost + (Math.random() * (2 - 1) + 1),
        funds: state.funds - state.autoClippersCost,
      };
    case 'BUY_MEGACLIPPERS':
      return {
        ...state,
        megaClippers: state.megaClippers + 1,
        megaClippersCost: state.megaClippersCost + 11e2, // @TODO: add megaClippersCostBonus
        funds: state.funds - state.megaClippersCost,
      };
    case 'BUY_MARKETING':
      return {
        ...state,
        marketing: state.marketing + 1,
        marketingCost: state.marketingCost * 2,
        productionBonus: (state.marketing + 1) / 20,
      };
    case 'INCREASE_PROCESSORS':
      return {
        ...state,
        processors: state.processors + 1,
        trust: state.trust - 1,
      };
    case 'INCREASE_MEMORY':
      return {
        ...state,
        memory: state.memory + 1,
        trust: state.trust - 1,
      };
    case 'INCREASE_OPERATIONS':
      //console.log('INCREASE_OPERATIONS');
      return {
        ...state,
        //operations: state.operations + 1,
      };
    case 'UPDATE_WIRE_COST':
      return {
        ...state,
        wiresCost: state.wiresCost > 8 ? state.wiresCost - 0.25 : Math.random() * (24 - 12) + 12,
      };
    case 'UPDATE_PER_SECOND':
      const clipsPerSecond = state.wiresStock > 0 ? state.megaClippers * 5e2 + state.autoClippers : 0;
      return {
        ...state,
        clipsPerSecond: clipsPerSecond,
        fundsPerSecond: state.clipsCost * clipsPerSecond,
      };
    case 'UPDATE_WIRE_QUANTITY':
      return {
        ...state,
        wires: action.quantity,
      };
    case 'UPDATE_WIRE_BONUS':
      return {
        ...state,
        wiresBonus: action.bonus,
      };
    case 'UPDATE_CLIPS_BONUS':
      return {
        ...state,
        clipsBonus: action.bonus,
        productionBonus: action.bonus + state.marketing / 20,
      };
    case 'INITIALIZE_STATE':
      return {
        ...action.state,
        productionBonus: state.clipsBonus + action.state.marketing / 20,
      };
    default:
      return state;
  }
};
