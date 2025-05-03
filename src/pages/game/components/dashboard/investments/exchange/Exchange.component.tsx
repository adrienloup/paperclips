import { useExchange } from '@/src/pages/game/components/dashboard/investments/exchange/useExchange.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { CryptoComponent } from '@/src/pages/game/components/dashboard/investments/crypto/Crypto.component.tsx';

export const ExchangeComponent = () => {
  const { cryptos } = useExchange();

  return (
    <DialsComponent>
      {Object.values(cryptos).map((c) => (
        <CryptoComponent
          key={c.symbol}
          symbol={c.symbol}
          name={c.name}
          price={c.price}
          volume={c.volume}
          change={c.change}
        />
      ))}
    </DialsComponent>
  );
};
