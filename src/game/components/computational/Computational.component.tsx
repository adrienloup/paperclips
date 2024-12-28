import { useTranslation } from 'react-i18next';
// import { Computational } from './Computational.type';
// import { formatNumber } from '../../../generic/utils/formatNumber';
import { CardComponent } from '../../../generic/components/card/Card.component';
// import { ButtonComponent } from '../../../generic/components/button/Button.component';
// import { MetricComponent } from '../../../generic/components/metric/Metric.component';
import styles from './Computational.module.scss';

export const ComputationalComponent = () => {
  const { t } = useTranslation();

  return (
    <CardComponent className={styles.card}>
      <h2 className={styles.title}>{t('game.computational')}</h2>
      <div className={styles.group}>
        tutu
        {/* <MetricComponent
          value={t('game.price', {
            value: formatNumber(fundsAvailable),
          })}
          label={t('game.fundsAvailable')}
        />
        <MetricComponent
          value={formatNumber(unsoldInventory)}
          label={t('game.unsoldInventory')}
        /> */}
      </div>
    </CardComponent>
  );
};
