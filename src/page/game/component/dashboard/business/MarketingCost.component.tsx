import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/page/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/component/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/component/dial/Dial.component.tsx';

export const MarketingCostComponent = () => {
  const { t } = useTranslation();
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.marketingCost}
        style="currency"
        label={t('game.marketingCost')}
        disabled={game.marketing >= 10}
      />
    </DialsComponent>
  );
};
