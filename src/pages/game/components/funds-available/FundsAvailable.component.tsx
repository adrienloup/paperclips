import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const FundsAvailableComponent = () => {
  //console.log('FundsAvailableComponent');
  const { t } = useTranslation();
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.funds}
        style="currency"
        notation="compact"
        label={t('game.fundsAvailable')}
      />
    </GroupComponent>
  );
};
