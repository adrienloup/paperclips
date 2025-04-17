import { useFeatures } from '@/src/pages/game/components/features/useFeatures.ts';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';
import { ExchangeComponent } from '@/src/pages/game/components/dashboard/investments/exchange/Exchange.component.tsx';
import { WalletComponent } from '@/src/pages/game/components/dashboard/investments/Wallet.component.tsx';
import { EmptyComponent } from '@/src/generic/common/components/empty/Empty.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

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
