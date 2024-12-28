import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '../../useGame';
// import { Computational } from './Computational.type';
// import { formatNumber } from '../../../generic/utils/formatNumber';
import { CardComponent } from '../../../generic/components/card/Card.component';
import { ButtonComponent } from '../../../generic/components/button/Button.component';
import { MetricComponent } from '../../../generic/components/metric/Metric.component';
import styles from './Computational.module.scss';

function ComputationalComponent() {
  const { t } = useTranslation();
  const game = useGame();
  const setGame = useGameDispatch();

  return (
    <>
      {game.feature.trust ? (
        <CardComponent className={styles.card}>
          <h2 className={styles.title}>{t('game.computational')}</h2>
          <div className={styles.group}>
            <MetricComponent value={1} label="Trust" />
            <MetricComponent value={1} label="Operation" />
            <MetricComponent value={1} label="Creativity" />
          </div>
          <div className={styles.group}>
            <ButtonComponent
              className={styles.button}
              onClick={() => console.log('ok')}
            >
              Processors
            </ButtonComponent>
            <MetricComponent value={1} label="Creativity" />
          </div>
          <div className={styles.group}>
            <ButtonComponent
              className={styles.button}
              onClick={() => console.log('ok')}
            >
              Memory
            </ButtonComponent>
            <MetricComponent value={1} label="Creativity" />
          </div>
        </CardComponent>
      ) : null}
    </>
  );
}

export default ComputationalComponent;
