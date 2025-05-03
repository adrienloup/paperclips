import { Crypto, CryptoSymbol } from '@/src/pages/game/components/dashboard/investments/crypto/Crypto.type.ts';

export interface Exchange {
  cryptos: Record<CryptoSymbol, Crypto>;
}
