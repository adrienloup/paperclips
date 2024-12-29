import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGame /*useGameDispatch*/ } from '../../useGame';
import { formatNumber } from '../../../generic/utils/formatNumber';
import { CardComponent } from '../../../generic/components/card/Card.component';
import { ButtonComponent } from '../../../generic/components/button/Button.component';
import { DialComponent } from '../../../generic/components/dial/Dial.component';
import styles from './Computational.module.scss';

function ComputationalComponent() {
  const { t } = useTranslation();
  const game = useGame();
  // const setGame = useGameDispatch();

  // Production automatique des opérations en fonction du nombre de processeur
  const produceOperationAndCreativity = () => {
    console.log('1');
    // const tutu = game.processors * 10;
    // setGame({
    //   ...game,
    //   operations: tutu,
    //   //   //   //   // creativity:
    //   //   //   //   //   Math.log10(game.processors) * Math.pow(game.processors, 1.1) +
    //   //   //   //   //   (game.processors - 1),
    // });
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // if (game.operations <= game.memory * 1000) {
  //     produceOperationAndCreativity();
  //     // }
  //   }, 1e3);

  //   return () => clearInterval(interval);
  // }, [game]);

  return (
    <>
      {game.feature.trust ? (
        <CardComponent className={styles.card}>
          <h2 className={styles.title}>{t('game.computational')}</h2>
          <div className={styles.group}>
            <DialComponent value={1} label="Trust" />
            <DialComponent
              value={`${formatNumber(game.operations)} / ${formatNumber(game.memory * 1000)}`}
              label="Operations"
            />
            <DialComponent value={game.creativity} label="Creativity" />
          </div>
          <div className={styles.group}>
            <ButtonComponent
              className={styles.button}
              onClick={() => console.log('ok')}
            >
              Processors
            </ButtonComponent>
            <DialComponent value={1} label="Units" />
          </div>
          <div className={styles.group}>
            <ButtonComponent
              className={styles.button}
              onClick={() => console.log('ok')}
            >
              Memory
            </ButtonComponent>
            <DialComponent value={1} label="Units" />
          </div>
        </CardComponent>
      ) : null}
    </>
  );
}

export default ComputationalComponent;
