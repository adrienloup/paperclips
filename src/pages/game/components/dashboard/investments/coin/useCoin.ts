import { useContext } from 'react';
import { CoinContext } from '@/src/pages/game/components/dashboard/investments/coin/Coin.context.ts';

export const useCoin = () => useContext(CoinContext);
