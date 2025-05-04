import { Token, TokenSymbol } from '@/src/pages/game/components/dashboard/investments/token/Token.type.ts';

export const exchangeState: Record<TokenSymbol, Token> = {
  BTC: { name: 'Bitcoin', price: 5e4, volume: 6e6, change: 0 },
  ETH: { name: 'Ethereum', price: 2e3, volume: 1e7, change: 0 },
  BNB: { name: 'Binance Coin', price: 1e3, volume: 7e6, change: 0 },
};
