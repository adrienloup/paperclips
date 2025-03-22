import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { ExchangeComponent } from '@/src/pages/game/components/exchange/Exchange.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const InvestmentsComponent = () => {
  //console.log('InvestmentsComponent');
  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Investments
      </TitleComponent>
      <ExchangeComponent />
    </CardComponent>
  );
};
