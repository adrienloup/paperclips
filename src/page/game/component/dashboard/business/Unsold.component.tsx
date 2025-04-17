import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/page/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/component/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/component/dial/Dial.component.tsx';
import { BonusComponent } from '@/src/generic/common/component/bonus/Bonus.component.tsx';

export const UnsoldComponent = () => {
  const { t } = useTranslation();
  const game = useGame();

  return (
    <DialsComponent>
      <DialComponent
        value={game.unsold}
        notation="compact"
        label={t('game.unsold')}
        bonus={
          game.unsoldBonus > 1 ? (
            <BonusComponent
              value={game.unsoldBonus}
              sign="x"
            />
          ) : null
        }
      />
    </DialsComponent>
  );
};
