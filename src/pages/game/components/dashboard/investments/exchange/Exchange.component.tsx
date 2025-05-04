import { useExchange } from '@/src/pages/game/components/dashboard/investments/exchange/useExchange.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { TokenComponent } from '@/src/pages/game/components/dashboard/investments/token/Token.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ExchangeComponent = () => {
  const { tokens } = useExchange();

  return (
    <DialsComponent>
      {Object.entries(tokens).map(([symbol, token]) => (
        <TokenComponent
          key={symbol}
          name={token.name}
          price={token.price}
          volume={token.volume}
          change={token.change}
        />
      ))}
      <div className={styles.text}>Top tokens by capitalization</div>
    </DialsComponent>
  );
};
