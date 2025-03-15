import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/pages/game/useGame.ts';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const ClipsPerSecondComponent = () => {
  console.log('ClipsPerSecondComponent');
  const { t } = useTranslation();
  const game = useGame();

  return (
    <DialComponent
      value={game.clipsPerSecond}
      notation="compact"
      label={t('game.clips_per_second')}
    />
  );
};
