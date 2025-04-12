import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const MegamachinesCostComponent = () => {
  const { t } = useTranslation();
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.megamachinesCost}
        style="currency"
        notation="compact"
        label={t('game.megamachinesCost')}
      />
    </DialsComponent>
  );
};
