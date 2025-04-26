import { useCallback, useEffect } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { CoinContext } from '@/src/pages/game/components/dashboard/investments/coin/Coin.context.ts';
import { coinState } from '@/src/pages/game/components/dashboard/investments/coin/Coin.state.ts';
import { Coin } from '@/src/pages/game/components/dashboard/investments/coin/Coin.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export function CoinProvider({ children }: { children: Children }) {
  const [coin, setCoin] = useLocalStorage<Coin[]>('_coin_3mma_0', coinState);

  const changeCoin = useCallback(
    (newCoin: Coin[]) => {
      setCoin(newCoin);
    },
    [setCoin]
  );

  useEffect(() => {
    changeCoin(coin);
  }, [coin]);

  return <CoinContext.Provider value={[coin, changeCoin]}>{children}</CoinContext.Provider>;
}
