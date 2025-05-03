import { Crypto, CryptoName } from '@/src/pages/game/components/dashboard/investments/crypto/Crypto.type.ts';

export interface Exchange {
  cryptos: Record<CryptoName, Crypto>;
}
