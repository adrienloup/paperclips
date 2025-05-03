export type CryptoName = 'BTC' | 'ETH' | 'BNB';

export interface Crypto {
  name: CryptoName;
  price: number;
  volume: number;
  change: number;
}
