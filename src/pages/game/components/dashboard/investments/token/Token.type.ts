export type TokenSymbol = 'BTC' | 'ETH' | 'BNB';
export type TokenName = 'Bitcoin' | 'Ethereum' | 'Binance Coin';

export interface Token {
  name: TokenName;
  price: number;
  volume: number;
  change: number;
}
