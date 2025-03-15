import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const UnsoldInventoryComponent = () => {
  //console.log('UnsoldInventoryComponent');
  const { t } = useTranslation();
  const game = useGame();

  return (
    <GroupComponent>
      <DialComponent
        value={game.unsoldInventory}
        notation="compact"
        label={t('game.unsoldInventory')}
      />
    </GroupComponent>
  );
};
