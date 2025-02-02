import { useTranslation } from 'react-i18next';
import { NumberComponent } from '@/src/common/components/number/Number.component';
import { IconComponent } from '@/src/common/components/icon/Icon.component';
import styles from '@/src/game/components/clips/Clips.module.scss';

export const ClipsComponent = ({ clips }: { clips: number }) => {
  const { t } = useTranslation();

  return (
    <h1 className={styles.clips}>
      <IconComponent icon="attach_file" arial-label={t('game.title')} />
      <NumberComponent number={clips} />
    </h1>
  );
};
