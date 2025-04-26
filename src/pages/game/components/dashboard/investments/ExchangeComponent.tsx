import { useCoin } from '@/src/pages/game/components/dashboard/investments/coin/useCoin.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { CoinComponent } from '@/src/pages/game/components/dashboard/investments/coin/Coin.component.tsx';

export const ExchangeComponent = () => {
  const [coin] = useCoin();

  return (
    <DialsComponent>
      {coin.map((c) => (
        <CoinComponent
          key={c.name}
          name={c.name}
          price={c.price}
          volume={c.volume}
        />
      ))}
    </DialsComponent>
  );
};
