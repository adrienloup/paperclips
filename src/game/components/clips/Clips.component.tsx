import { useTranslation } from 'react-i18next';
import { useDashboard } from '@/src/game/components/dashboard/useDashboard';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component';
import styles from '@/src/game/components/clips/Clips.module.scss';

export const ClipsComponent = () => {
  const { t } = useTranslation();
  const dashboard = useDashboard();

  return (
    <h1 className={styles.clips}>
      <IconComponent
        icon="attach_file"
        arial-label={t('game.title')}
      />
      <NumberComponent number={dashboard.clips} />
    </h1>
  );
};
