import { useTranslation } from 'react-i18next';
import { Business } from './Business.type';
import { CardComponent } from '../../../generic/components/card/Card.component';
import { ButtonComponent } from '../../../generic/components/button/Button.component';
import { formatNumber } from '../../../generic/utils/formatNumber';
import styles from './Business.module.scss';

export const BusinessComponent = ({
  clipsCost,
  funds,
  inventory,
  marketing,
  marketingCost,
  publicDemand,
  feature,
  decreaseClipsCost,
  increaseClipsCost,
  buyMarketing,
}: Business) => {
  const { t } = useTranslation();

  return (
    <CardComponent className={styles.card}>
      <h2>{t('game.business')}</h2>
      <p>
        {t('game.fundsAvailable', {
          value: formatNumber(parseFloat(funds.toFixed(2))),
        })}
      </p>
      <p>
        {t('game.inventory', {
          value: inventory.toFixed(),
        })}
      </p>
      <p>
        {t('game.publicDemand', {
          value: publicDemand.toFixed(),
        })}
      </p>
      <div className={styles.group}>
        <ButtonComponent className={styles.button} onClick={decreaseClipsCost}>
          {t('game.button.decreaseClipsCost')}
        </ButtonComponent>
        <ButtonComponent className={styles.button} onClick={increaseClipsCost}>
          {t('game.button.increaseClipsCost')}
        </ButtonComponent>
      </div>
      <p>
        {t('game.clipsCost', {
          value: clipsCost.toFixed(2),
        })}
      </p>
      {feature.marketing ? (
        <div className={styles.marketing}>
          <div className={styles.group}>
            <ButtonComponent className={styles.button} onClick={buyMarketing}>
              {t('game.button.buyMarketing')}
            </ButtonComponent>
            <p>
              {t('game.level', {
                value: marketing,
              })}
            </p>
          </div>
          <p>
            {t('game.cost', {
              value: marketingCost.toFixed(2),
            })}
          </p>
        </div>
      ) : null}
    </CardComponent>
  );
};
