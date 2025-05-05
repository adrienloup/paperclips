import { Token, TokenSymbol } from '@/src/pages/game/components/dashboard/investments/token/Token.type.ts';

export const exchangeState: Record<TokenSymbol, Token> = {
  BTC: { name: 'Bitcoin', price: 6e4, volume: 6e6, change: 0 },
  ETH: { name: 'Ethereum', price: 1e3, volume: 1e7, change: 0 },
  BNB: { name: 'Binance Coin', price: 5e2, volume: 7e6, change: 0 },
};
