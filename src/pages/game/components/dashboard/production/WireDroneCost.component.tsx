import { useTranslation } from 'react-i18next';
// import { useGame } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const WireDroneCostComponent = () => {
  const { t } = useTranslation();
  // const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={0}
        style="currency"
        notation="compact"
        label={t('game.wireDroneCost')}
      />
    </DialsComponent>
  );
};
