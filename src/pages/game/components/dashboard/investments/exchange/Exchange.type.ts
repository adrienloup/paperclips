import { Token, TokenSymbol } from '@/src/pages/game/components/dashboard/investments/token/Token.type.ts';

export interface Exchange {
  tokens: Record<TokenSymbol, Token>;
}
