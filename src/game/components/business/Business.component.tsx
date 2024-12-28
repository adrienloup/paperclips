import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '../../useGame';
import { formatNumber } from '../../../generic/utils/formatNumber';
import { CardComponent } from '../../../generic/components/card/Card.component';
import { ButtonComponent } from '../../../generic/components/button/Button.component';
import { MetricComponent } from '../../../generic/components/metric/Metric.component';
import styles from './Business.module.scss';

export const BusinessComponent = () => {
  const { t } = useTranslation();
  const game = useGame();
  const setGame = useGameDispatch();

  // Acheter des niveaux de marketing
  const buyMarketing = () => {
    if (game.fundsAvailable >= game.marketingCost) {
      setGame({
        ...game,
        marketing: game.marketing + 1,
        marketingCost: game.marketingCost * 2,
        fundsAvailable: game.fundsAvailable - game.marketingCost,
      });
    }
  };

  const increasePaperclipCost = () =>
    setGame({
      ...game,
      paperclipCost: Math.min(game.paperclipCost + 0.01, 1),
    });

  const decreasePaperclipCost = () =>
    setGame({
      ...game,
      paperclipCost: Math.max(game.paperclipCost - 0.01, 0.01),
    });

  // Ventes de trombones en fonction de la demande dans la limite de l'inventaire
  const sell = () => {
    const sales = Math.min(
      game.unsoldInventory,
      game.unsoldInventory * (game.publicDemand / 100) * 2
    );
    setGame({
      ...game,
      fundsAvailable: game.fundsAvailable + sales * game.paperclipCost,
      unsoldInventory: Math.floor(game.unsoldInventory - sales),
    });
  };

  // Demande publique
  useEffect(() => {
    const bonus = game.marketing * 101;
    setGame({
      ...game,
      publicDemand: Math.max(0, bonus - game.paperclipCost * bonus),
    });
  }, [game.marketing, game.paperclipCost]);

  // Niveaux de marketing
  useEffect(() => {
    setGame({
      ...game,
      steelWireRefill:
        game.marketing >= 5
          ? 10000
          : game.marketing >= 3
            ? 1000
            : game.steelWireRefill,
    });
  }, [game.marketing]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (game.unsoldInventory > 0) {
        sell();
      }
    }, 1e3);

    return () => clearInterval(interval);
  }, [game]);

  return (
    <CardComponent>
      <h2 className={styles.title}>{t('game.business')}</h2>
      <div className={styles.group}>
        <MetricComponent
          value={game.unsoldInventory}
          label={t('game.unsoldInventory')}
        />
        <MetricComponent
          value={t('game.percent', {
            value: game.publicDemand.toFixed(0),
          })}
          label={t('game.publicDemand')}
        />
        <MetricComponent
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
        <MetricComponent
          value={t('game.price', {
            value: formatNumber(game.paperclipCost),
          })}
          label={t('game.paperclipCost')}
        />
      </div>
      {/* {feature.marketing ? ( */}
      <div className={styles.group}>
        <ButtonComponent className={styles.button} onClick={buyMarketing}>
          {t('game.button.buyMarketing')}
        </ButtonComponent>
        <MetricComponent
          value={game.marketing.toFixed(0)}
          label={t('game.level')}
        />
        <MetricComponent
          value={t('game.price', {
            value: formatNumber(game.marketingCost),
          })}
          label={t('game.cost')}
        />
      </div>
      {/* ) : null} */}
    </CardComponent>
  );
};
