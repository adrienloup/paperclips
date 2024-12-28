import { useTranslation } from 'react-i18next';
import { Business } from './Business.type';
import { formatNumber } from '../../../generic/utils/formatNumber';
import { CardComponent } from '../../../generic/components/card/Card.component';
import { ButtonComponent } from '../../../generic/components/button/Button.component';
import { MetricComponent } from '../../../generic/components/metric/Metric.component';
import styles from './Business.module.scss';

export const BusinessComponent = ({
  feature,
  fundsAvailable,
  unsoldInventory,
  marketing,
  marketingCost,
  paperclipCost,
  publicDemand,
  decreasePaperclipCost,
  increasePaperclipCost,
  buyMarketing,
}: Business) => {
  const { t } = useTranslation();

  return (
    <CardComponent className={styles.card}>
      <h2 className={styles.title}>{t('game.business')}</h2>
      <div className={styles.group}>
        <MetricComponent
          value={t('game.price', {
            value: formatNumber(fundsAvailable),
          })}
          label={t('game.fundsAvailable')}
        />
        <MetricComponent
          value={formatNumber(unsoldInventory)}
          label={t('game.unsoldInventory')}
        />
        <MetricComponent
          value={t('game.percent', {
            value: publicDemand.toFixed(1),
          })}
          label={t('game.publicDemand')}
        />
      </div>
      <div className={styles.group}>
        <ButtonComponent
          className={styles.button}
          onClick={decreasePaperclipCost}
        >
          {t('game.button.decreaseClipsCost')}
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={increasePaperclipCost}
        >
          {t('game.button.increaseClipsCost')}
        </ButtonComponent>
        <MetricComponent
          value={t('game.price', {
            value: formatNumber(paperclipCost),
          })}
          label={t('game.paperclipCost')}
        />
      </div>
      {feature.marketing ? (
        <div className={styles.group}>
          <ButtonComponent className={styles.button} onClick={buyMarketing}>
            {t('game.button.buyMarketing')}
          </ButtonComponent>
          <MetricComponent
            value={marketing.toFixed(0)}
            label={t('game.level')}
          />
          <MetricComponent
            value={t('game.price', {
              value: formatNumber(marketingCost),
            })}
            label={t('game.cost')}
          />
        </div>
      ) : null}
    </CardComponent>
  );
};
