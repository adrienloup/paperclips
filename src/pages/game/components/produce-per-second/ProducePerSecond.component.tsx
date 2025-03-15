import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';

export const ProducePerSecondComponent = () => {
  //console.log('ProducePerSecondComponent');
  const { t } = useTranslation();
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.producePerSecond}
        notation="compact"
        label={t('game.producePerSecond')}
      />
      {game.produceBonus > 0 && (
        <BonusComponent
          value={game.produceBonus}
          style="percent"
          sign="+"
        />
      )}
    </GroupComponent>
  );
};
