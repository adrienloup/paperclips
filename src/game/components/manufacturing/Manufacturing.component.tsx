import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '../../useGame';
import { useInterval } from '../../../generic/hooks/useInterval';
import { formatNumber } from '../../../generic/utils/formatNumber';
import { CardComponent } from '../../../generic/components/card/Card.component';
import { ButtonComponent } from '../../../generic/components/button/Button.component';
import { DialComponent } from '../../../generic/components/dial/Dial.component';
import styles from './Manufacturing.module.scss';

function ManufacturingComponent() {
  const { t } = useTranslation();
  const game = useGame();
  const setGame = useGameDispatch();
  const [steelWireCost, setSteelWireCost] = useState(game.steelWireCost);
  const [paperclipsPerSecond, setPaperclipsPerSecond] = useState(0);

  // Produire des trombones
  const producePaperclip = () => {
    setGame({
      ...game,
      paperclips: game.paperclips + 1,
      unsoldInventory: game.unsoldInventory + 1,
      steelWire: game.steelWire - 1,
    });
    setPaperclipsPerSecond((prev) => prev + 1);
  };

  // Acheter du fil d'acier
  const buySteelWire = () => {
    if (game.fundsAvailable >= steelWireCost) {
      setGame({
        ...game,
        fundsAvailable: game.fundsAvailable - steelWireCost,
        steelWire: game.steelWire + game.steelWireRefill,
      });
    }
  };

  // Acheter une machine à trombones
  const buyAutoClippers = () => {
    if (game.fundsAvailable >= game.autoClippersCost) {
      setGame({
        ...game,
        autoClippers: game.autoClippers + 1,
        autoClippersCost:
          game.autoClippersCost +
          game.marketing +
          (Math.random() * (5 - 0.5) + 0.5),
        fundsAvailable: game.fundsAvailable - game.autoClippersCost,
      });
    }
  };

  // Production automatique des trombones
  // useInterval(() => {
  //   if (game.steelWire >= game.autoClippers) {
  //     setGame({
  //       ...game,
  //       paperclips: game.paperclips + game.autoClippers,
  //       unsoldInventory: game.unsoldInventory + game.autoClippers,
  //       steelWire: game.steelWire - game.autoClippers,
  //     });
  //     setPaperclipsPerSecond(game.autoClippers);
  //   } else {
  //     setPaperclipsPerSecond(0);
  //   }
  // }, 1e3);

  const autoProduction = () => {
    setGame({
      ...game,
      paperclips: game.paperclips + game.autoClippers,
      unsoldInventory: game.unsoldInventory + game.autoClippers,
      steelWire: game.steelWire - game.autoClippers,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (game.steelWire >= game.autoClippers) {
        autoProduction();
        setPaperclipsPerSecond(game.autoClippers);
      } else {
        setPaperclipsPerSecond(0);
      }
    }, 1e3);

    return () => clearInterval(interval);
  }, [
    game.steelWire,
    game.autoClippers,
    game.paperclips,
    game.unsoldInventory,
    game.publicDemand,
    game.fundsAvailable,
  ]);

  // Prix du fil
  useEffect(() => {
    const interval = setInterval(() => {
      setSteelWireCost(Math.random() * (24 - 6) + 6);
    }, 4e3);

    return () => clearInterval(interval);
  }, []);

  return (
    <CardComponent className={styles.card}>
      <h2 className={styles.title}>{t('game.manufacturing')}</h2>
      <div className={styles.group}>
        <ButtonComponent className={styles.button} onClick={producePaperclip}>
          {t('game.button.makePaperclip')}
        </ButtonComponent>
        <DialComponent
          value={paperclipsPerSecond}
          label={t('game.paperclipsPerSecond')}
        />
      </div>
      <div className={styles.group}>
        <ButtonComponent className={styles.button} onClick={buySteelWire}>
          {t('game.button.buySteelWire')}
        </ButtonComponent>
        <DialComponent
          value={formatNumber(game.steelWire)}
          label={t('game.steelWire')}
        />
        <DialComponent
          value={t('game.price', {
            value: steelWireCost.toFixed(1),
          })}
          label={t('game.cost')}
        />
      </div>
      {game.feature.autoClippers ? (
        <div className={styles.group}>
          <ButtonComponent className={styles.button} onClick={buyAutoClippers}>
            {t('game.button.buyAutoClippers')}
          </ButtonComponent>
          <DialComponent
            value={formatNumber(game.autoClippers)}
            label={t('game.autoClippers')}
          />
          <DialComponent
            value={t('game.price', {
              value: formatNumber(game.autoClippersCost),
            })}
            label={t('game.cost')}
          />
        </div>
      ) : null}
    </CardComponent>
  );
}

export default ManufacturingComponent;
