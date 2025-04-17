import { useFeatures } from '@/src/page/game/component/features/useFeatures.ts';
import { TitleComponent } from '@/src/generic/common/component/title/Title.component.tsx';
import { CardComponent } from '@/src/generic/common/component/card/Card.component.tsx';
import { ExchangeComponent } from '@/src/page/game/component/dashboard/investments/exchange/Exchange.component.tsx';
import { WalletComponent } from '@/src/page/game/component/dashboard/investments/Wallet.component.tsx';
import { EmptyComponent } from '@/src/generic/common/component/empty/Empty.component.tsx';
import styles from '@/src/generic/common/component/card/Card.module.scss';

export const InvestmentsComponent = () => {
  const features = useFeatures();

  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Investments
      </TitleComponent>
      {features.investments ? (
        <>
          <ExchangeComponent />
          <WalletComponent />
        </>
      ) : (
        <EmptyComponent empty="game.empty.investments" />
      )}
    </CardComponent>
  );
};
