import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../../generic/utils/formatNumber';
import { Manufacturing } from './Manufacturing.type';
import { CardComponent } from '../../../generic/components/card/Card.component';
import { ButtonComponent } from '../../../generic/components/button/Button.component';
import { MetricComponent } from '../../../generic/components/metric/Metric.component';
import styles from './Manufacturing.module.scss';

export const ManufacturingComponent = ({
  autoClippers,
  autoClippersCost,
  paperclipPerSecond,
  feature,
  steelWire,
  steelWireCost,
  buyAutoClippers,
  buySteelWire,
  producePaperclip,
}: Manufacturing) => {
  const { t } = useTranslation();

  return (
    <CardComponent className={styles.card}>
      <h2 className={styles.title}>{t('game.manufacturing')}</h2>
      <div className={styles.group}>
        <ButtonComponent className={styles.button} onClick={producePaperclip}>
          {t('game.button.makePaperclip')}
        </ButtonComponent>
        <MetricComponent
          value={paperclipPerSecond.toFixed(0)}
          label={t('game.paperclipsPerSecond')}
        />
      </div>
      <div className={styles.group}>
        <ButtonComponent className={styles.button} onClick={buySteelWire}>
          {t('game.button.buySteelWire')}
        </ButtonComponent>
        <MetricComponent
          value={formatNumber(steelWire)}
          label={t('game.steelWire')}
        />
        <MetricComponent
          value={t('game.price', {
            value: steelWireCost.toFixed(2),
          })}
          label={t('game.cost')}
        />
      </div>
      {feature.autoClippers ? (
        <div className={styles.group}>
          <ButtonComponent className={styles.button} onClick={buyAutoClippers}>
            {t('game.button.buyAutoClippers')}
          </ButtonComponent>
          <MetricComponent
            value={formatNumber(autoClippers)}
            label={t('game.autoClippers')}
          />
          <MetricComponent
            value={t('game.price', {
              value: formatNumber(autoClippersCost),
            })}
            label={t('game.cost')}
          />
        </div>
      ) : null}
    </CardComponent>
  );
};
