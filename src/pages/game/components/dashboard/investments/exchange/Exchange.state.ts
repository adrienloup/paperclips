import { Crypto, CryptoSymbol } from '@/src/pages/game/components/dashboard/investments/crypto/Crypto.type.ts';

export const initialExchangeState: Record<CryptoSymbol, Crypto> = {
  BTC: { symbol: 'BTC', name: 'Bitcoin', price: 30000, volume: 500000, change: 0 },
  ETH: { symbol: 'ETH', name: 'Ethereum', price: 2000, volume: 1000000, change: 0 },
  BNB: { symbol: 'BNB', name: 'Binance Coin', price: 300, volume: 700000, change: 0 },
};
