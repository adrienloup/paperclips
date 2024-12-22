import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../../generic/utils/formatNumber';
import { Manufacturing } from './Manufacturing.type';
import { CardComponent } from '../../../generic/components/card/Card.component';
import { ButtonComponent } from '../../../generic/components/button/Button.component';
import styles from './Manufacturing.module.scss';

export const ManufacturingComponent = ({
  autoProducers,
  autoProducerCost,
  clipsPerSecond,
  feature,
  wire,
  wireCost,
  buyAutoProducer,
  buyWire,
  produceClip,
}: Manufacturing) => {
  const { t } = useTranslation();

  return (
    <CardComponent className={styles.card}>
      <h2>{t('game.manufacturing')}</h2>
      <p>
        {t('game.clipsPerSecond', {
          value: clipsPerSecond,
        })}
      </p>
      <ButtonComponent className={styles.button} onClick={produceClip}>
        {t('game.button.makePaperclip')}
      </ButtonComponent>
      <div className={styles.group}>
        <ButtonComponent className={styles.button} onClick={buyWire}>
          {t('game.button.buyWire')}
        </ButtonComponent>
        <p>{formatNumber(wire)}</p>
      </div>
      <p>
        {t('game.cost', {
          value: wireCost.toFixed(2),
        })}
      </p>
      {feature.autoProducers ? (
        <div className={styles.autoproducers}>
          <div className={styles.group}>
            <ButtonComponent
              className={styles.button}
              onClick={buyAutoProducer}
            >
              {t('game.button.buyAutoProducer')}
            </ButtonComponent>
            <p>{autoProducers}</p>
          </div>
          <p>
            {t('game.cost', {
              value: autoProducerCost.toFixed(2),
            })}
          </p>
        </div>
      ) : null}
    </CardComponent>
  );
};
