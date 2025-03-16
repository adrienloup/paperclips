import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';

export const FundsPerSecondComponent = () => {
  //console.log('FundsPerSecondComponent');
  const { t } = useTranslation();
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.fundsPerSecond}
        style="currency"
        notation="compact"
        label={t('game.fundsPerSecond')}
      />
      {game.sellBonus > 1 && <BonusComponent value={game.sellBonus} />}
    </GroupComponent>
  );
};
