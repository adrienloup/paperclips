import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';

export const UnsoldComponent = () => {
  const { t } = useTranslation();
  const game = useGame();

  return (
    <DialsComponent>
      {game.unsoldBonus > 1 && <BonusComponent value={game.unsoldBonus} />}
      <DialComponent
        value={game.unsold}
        notation="compact"
        label={t('game.unsold')}
      />
    </DialsComponent>
  );
};
