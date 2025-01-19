import { useTranslation } from 'react-i18next';
import { Total } from '@/src/game/components/total/Total.type';
import { NumberComponent } from '@/src/common/components/number/Number.component';
import { IconComponent } from '@/src/common/components/icon/Icon.component';
import styles from '@/src/game/components/total/Total.module.scss';

export const TotalComponent = ({ dashboard }: Total) => {
  const { t } = useTranslation();

  return (
    <h1 className={styles.total}>
      <IconComponent icon="attach_file" arial-label={t('game.title')} />
      <NumberComponent number={dashboard.clipTotal} />
    </h1>
  );
};
