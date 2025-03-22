import { Action, State } from '@/src/pages/game/Game.type.ts';

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SELL_CLIPS':
      if (state.unsoldInventory <= 0) return state;
      const unsoldInventory = Math.max(0, Math.floor(state.unsoldInventory * (1 - state.publicDemand)));
      const funds = state.funds + (state.unsoldInventory - unsoldInventory) * state.sellingPrice;
      return {
        ...state,
        unsoldInventory,
        funds,
      };
    case 'PRODUCE_MANUAL':
      if (state.wireStock <= 0) return state;
      return {
        ...state,
        clips: state.clips + state.produceBonus,
        unsoldInventory: state.unsoldInventory + state.produceBonus,
        wireStock: state.wireStock - 1,
        producePerSecond: state.producePerSecond + state.produceBonus,
        fundsPerSecond: state.fundsPerSecond + state.produceBonus * state.sellingPrice,
      };
    case 'BUY_WIRE':
      return {
        ...state,
        wireStock: state.wireStock + state.wire * state.wireBonus,
        wireCost: state.wireCost + (Math.random() * (1.25 - 0.25) + 0.25), // ≥ 0.25 et < 1.25
        funds: state.funds - state.wireCost,
      };
    case 'BUY_AUTOCLIPPERS':
      return {
        ...state,
        autoClippers: state.autoClippers + 1,
        autoClippersCost: state.autoClippersCost + (Math.random() * (10 - 5) + 5), // ≥ 5 et < 10
        funds: state.funds - state.autoClippersCost,
      };
    case 'BUY_MEGACLIPPERS':
      return {
        ...state,
        megaClippers: state.megaClippers + 1,
        megaClippersCost: state.megaClippersCost + 11e2,
        funds: state.funds - state.megaClippersCost,
      };
    case 'BUY_MARKETING':
      const marketing = Math.min(state.marketing + 1, 10);
      return {
        ...state,
        marketing,
        marketingCost: state.marketingCost * 2,
        funds: state.funds - state.marketingCost,
        sellingPrice: state.sellingPriceRef * marketing,
      };
    case 'BUY_HARVESTER_DRONES':
      return {
        ...state,
        harvesterDrones: state.harvesterDrones + 1,
      };
    case 'BUY_WIRE_DRONES':
      return {
        ...state,
        wireDrones: state.wireDrones + 1,
      };
    case 'BUY_CLIP_FACTORY':
      return {
        ...state,
        clipFactory: state.clipFactory + 1,
      };
    case 'INCREASE_SELLING_PRICE':
      const increaseSellingPrice = Math.min(state.sellingPriceRef + 0.01, 1);
      return {
        ...state,
        sellingPriceRef: increaseSellingPrice,
        sellingPrice: increaseSellingPrice * state.marketing,
        publicDemand: 0.1 / increaseSellingPrice,
      };
    case 'DECREASE_SELLING_PRICE':
      const decreaseSellingPrice = Math.max(state.sellingPriceRef - 0.01, 0.1);
      return {
        ...state,
        sellingPriceRef: decreaseSellingPrice,
        sellingPrice: decreaseSellingPrice * state.marketing,
        publicDemand: 0.1 / decreaseSellingPrice,
      };
    case 'INCREASE_MEMORY':
      return {
        ...state,
        processors: state.processors + 1,
        trust: state.trust - 1,
      };
    case 'INCREASE_PROCESSORS':
      return {
        ...state,
        memory: state.memory + 1,
        trust: state.trust - 1,
      };
    case 'UPDATE_PER_SECOND': {
      const megaClippersPerSecond = state.megaClippers * 5e2;
      const clippersPerSecond =
        state.wireStock >= megaClippersPerSecond + state.autoClippers
          ? megaClippersPerSecond + state.autoClippers
          : state.wireStock >= megaClippersPerSecond
            ? megaClippersPerSecond
            : state.wireStock >= state.autoClippers
              ? state.autoClippers
              : 0;
      const producePerSecond = clippersPerSecond * state.produceBonus;
      const fundsPerSecond = producePerSecond * state.sellingPrice;
      return {
        ...state,
        clips: state.clips + producePerSecond,
        unsoldInventory: state.unsoldInventory + producePerSecond,
        wireStock: state.wireStock - clippersPerSecond,
        producePerSecond,
        fundsPerSecond,
      };
    }
    case 'UPDATE_WIRE_COST':
      return {
        ...state,
        wireCost: state.wireCost > 10 ? state.wireCost - 0.25 : Math.random() * (20 - 12) + 12, // ≥ 12 et < 20
      };
    case 'UPDATE_WIRE':
      return {
        ...state,
        wire: action.value,
      };
    case 'UPDATE_DRONES':
      return {
        ...state,
        drones: action.value,
      };
    case 'UPDATE_WIRE_BONUS':
      return {
        ...state,
        wireBonus: action.bonus,
      };
    case 'UPDATE_PRODUCE_BONUS':
      return {
        ...state,
        produceBonus: action.bonus,
      };
    case 'INITIALIZE_STATE':
      return {
        ...action.state,
      };
    default:
      return state;
  }
};
