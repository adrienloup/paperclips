import { Crypto, CryptoName } from '@/src/pages/game/components/dashboard/investments/crypto/Crypto.type.ts';

export const initialExchangeState: Record<CryptoName, Crypto> = {
  BTC: { name: 'BTC', price: 30000, volume: 500000, change: 0 },
  ETH: { name: 'ETH', price: 2000, volume: 1000000, change: 0 },
  BNB: { name: 'BNB', price: 300, volume: 700000, change: 0 },
};
