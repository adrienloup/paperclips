import { createContext, Dispatch } from 'react';
import { coinState } from '@/src/pages/game/components/dashboard/investments/coin/Coin.state.ts';
import { Coin } from '@/src/pages/game/components/dashboard/investments/coin/Coin.type.ts';

export const CoinContext = createContext<[Coin[], Dispatch<Coin[]>]>([coinState, () => {}]);
