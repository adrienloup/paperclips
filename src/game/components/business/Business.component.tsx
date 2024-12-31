import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '../../useGame';
// import { useInterval } from '../../../generic/hooks/useInterval';
import { formatNumber } from '../../../generic/utils/formatNumber';
import { CardComponent } from '../../../generic/components/card/Card.component';
import { ButtonComponent } from '../../../generic/components/button/Button.component';
import { DialComponent } from '../../../generic/components/dial/Dial.component';
import styles from './Business.module.scss';

function BusinessComponent() {
  const { t } = useTranslation();
  const game = useGame();
  const setGame = useGameDispatch();
  // const [fundsAvailable, setFundsAvailable] = useState(game.fundsAvailable);
  // const [unsoldInventory, setUnsoldInventory] = useState(game.unsoldInventory);

  // Incrémenter prix trombone
  const increasePaperclipCost = () => {
    setGame({
      ...game,
      paperclipCost: Math.min(game.paperclipCost + 0.01, 1),
      publicDemand: Math.max(
        0,
        game.marketing * 100 +
          game.marketing -
          game.paperclipCost * (game.marketing * 100 + game.marketing)
      ),
    });
  };

  // décrémenter prix trombone
  const decreasePaperclipCost = () => {
    setGame({
      ...game,
      paperclipCost: Math.max(game.paperclipCost - 0.01, 0.01),
      publicDemand: Math.max(
        0,
        game.marketing * 100 +
          game.marketing -
          game.paperclipCost * (game.marketing * 100 + game.marketing)
      ),
    });
  };

  // Acheter niveaux marketing
  const buyMarketing = () => {
    if (game.fundsAvailable >= game.marketingCost && game.marketing < 10) {
      const marketing = game.marketing + 1;

      setGame({
        ...game,
        marketing,
        marketingCost: game.marketingCost * 2,
        fundsAvailable: game.fundsAvailable - game.marketingCost,
        publicDemand: Math.max(
          0,
          marketing * 100 +
            marketing -
            game.paperclipCost * (marketing * 100 + marketing)
        ),
        steelWireRefill:
          marketing >= 8
            ? 200000
            : marketing >= 6
              ? 100000
              : marketing >= 4
                ? 10000
                : marketing >= 2
                  ? 1000
                  : 50,
      });
    }
  };

  // useInterval(() => {
  //   if (game.unsoldInventory > 0) {
  //     const sales = Math.min(
  //       game.unsoldInventory,
  //       game.unsoldInventory * (game.publicDemand / 100) * 0.1
  //     );
  //     setGame({
  //       ...game,
  //       fundsAvailable: game.fundsAvailable + sales * game.paperclipCost,
  //       unsoldInventory: Math.floor(game.unsoldInventory - sales),
  //     });
  //   }
  // }, 1e3);

  // Ventes de trombones en fonction de la demande dans la limite de l'inventaire
  // useEffect(() => {
  //   console.log('ok');
  //   const time = setTimeout(() => {
  //     const sales = Math.min(
  //       game.unsoldInventory,
  //       game.unsoldInventory * (game.publicDemand / 100) * 2
  //     );
  //     setGame({
  //       ...game,
  //       fundsAvailable: game.fundsAvailable + sales * game.paperclipCost,
  //       unsoldInventory: Math.floor(game.unsoldInventory - sales),
  //     });
  //     console.log('okok');
  //   }, 1e3);

  //   return () => clearTimeout(time);
  // }, [game.unsoldInventory]);

  return (
    <CardComponent className={styles.card}>
      <h2 className={styles.title}>{t('game.business')}</h2>
      <div className={styles.group}>
        <DialComponent
          value={formatNumber(game.unsoldInventory)}
          label={t('game.unsoldInventory')}
        />
        <DialComponent
          value={t('game.percent', {
            value: game.publicDemand.toFixed(0),
          })}
          label={t('game.publicDemand')}
        />
        <DialComponent
          value={t('game.price', {
            value: formatNumber(game.fundsAvailable),
          })}
          label={t('game.fundsAvailable')}
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
        <DialComponent
          value={t('game.price', {
            value: formatNumber(game.paperclipCost, 2, 2),
          })}
          label={t('game.paperclipCost')}
        />
      </div>
      {game.feature.marketing ? (
        <div className={styles.group}>
          <ButtonComponent className={styles.button} onClick={buyMarketing}>
            {t('game.button.buyMarketing')}
          </ButtonComponent>
          <DialComponent
            value={game.marketing.toFixed(0)}
            label={t('game.level')}
          />
          <DialComponent
            value={t('game.price', {
              value: formatNumber(game.marketingCost),
            })}
            label={t('game.cost')}
          />
        </div>
      ) : null}
    </CardComponent>
  );
}

export default BusinessComponent;
