export type CryptoSymbol = 'BTC' | 'ETH' | 'BNB';
export type CryptoName = 'Bitcoin' | 'Ethereum' | 'Binance Coin';

export interface Crypto {
  symbol: CryptoSymbol;
  name: CryptoName;
  price: number;
  volume: number;
  change: number;
}
