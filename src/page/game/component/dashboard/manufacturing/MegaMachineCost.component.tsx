import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/page/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/component/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/component/dial/Dial.component.tsx';

export const MegaMachineCostComponent = () => {
  const { t } = useTranslation();
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.megaMachineCost}
        style="currency"
        notation="compact"
        label={t('game.megaMachineCost')}
      />
    </DialsComponent>
  );
};
