import { useEffect, useRef, useState } from 'react';
import { useGame, useGameDispatch } from '../../useGame';
import { Feature } from '../../../generic/types/Feature.type';
import { PaperclipsComponent } from '../paperclips/Paperclips.component';
import { ManufacturingComponent } from '../manufacturing/Manufacturing.component';
import { BusinessComponent } from '../business/Business.component';
import styles from './Dashboard.module.scss';

export const DashboardComponent = () => {
  const game = useGame();
  const setGame = useGameDispatch();
  const [paperclips, setPaperclips] = useState(game.paperclips);
  const [paperclipCost, setPaperclipCost] = useState(game.paperclipCost);
  const [unsoldInventory, setUnsoldInventory] = useState(game.unsoldInventory);
  const [fundsAvailable, setFundsAvailable] = useState(game.fundsAvailable);
  const [steelWire, setSteelWire] = useState(game.steelWire);
  const [steelWireCost, setSteelWireCost] = useState(game.steelWireCost);
  const [autoClippers, setAutoClippers] = useState(game.autoClippers);
  const [autoClippersCost, setAutoClippersCost] = useState(
    game.autoClippersCost
  );
  const [marketing, setMarketing] = useState(game.marketing);
  const [marketingCost, setMarketingCost] = useState(game.marketingCost);
  const [paperclipPerSecond, setPaperclipsPerSecond] = useState(0);
  const [publicDemand, setPublicDemand] = useState(game.publicDemand);
  const feature = useRef<Feature>(game.feature);

  const restart = () => {
    setGame({
      paperclips: 0,
      paperclipCost: 0.25,
      unsoldInventory: 0,
      fundsAvailable: 0,
      feature: {
        autoClippers: false,
        marketing: false,
        trust: false,
      },
      publicDemand: 0,
      steelWire: 1000,
      steelWireCost: 6.25,
      autoClippers: 0,
      autoClippersCost: 5,
      marketing: 1,
      marketingCost: 100,
    });
  };

  // Produire un trombone
  const producePaperclip = () => {
    if (steelWire > 0) {
      setPaperclips(paperclips + 1);
      setUnsoldInventory(unsoldInventory + 1);
      setSteelWire(steelWire - 1);
      setPaperclipsPerSecond(paperclipPerSecond + 1);
    }
  };

  // Acheter du fil d'acier
  const buySteelWire = () => {
    if (fundsAvailable >= steelWireCost) {
      setSteelWire(
        steelWire + (marketing >= 5 ? 10000 : marketing >= 3 ? 1000 : 50)
      );
      setFundsAvailable(fundsAvailable - steelWireCost);
    }
  };

  // Acheter une machine à trombones
  const buyAutoClippers = () => {
    if (fundsAvailable >= autoClippersCost) {
      setAutoClippers(autoClippers + 1);
      setAutoClippersCost(
        autoClippersCost + marketing + (Math.random() * (0.5 - 0.1) + 0.1)
      );
      setFundsAvailable(fundsAvailable - autoClippersCost);
    }
  };

  // Acheter des niveaux de marketing
  const buyMarketing = () => {
    if (fundsAvailable >= marketingCost) {
      setMarketing(marketing + 1);
      setMarketingCost(marketingCost * 2);
      setFundsAvailable(fundsAvailable - marketingCost);
    }
  };

  const increasePaperclipCost = () =>
    setPaperclipCost((prev) => Math.min(prev + 0.01, 1));

  const decreasePaperclipCost = () =>
    setPaperclipCost((prev) => Math.max(prev - 0.01, 0.01));

  // Demande publique
  useEffect(() => {
    const marketingBonus = marketing * 100 + marketing;
    setPublicDemand(
      Math.max(0, marketingBonus - paperclipCost * marketingBonus)
    );
  }, [marketing, paperclipCost]);

  // Prix du fil entre 6 et 24 €
  useEffect(() => {
    const interval = setInterval(() => {
      setSteelWireCost(Math.random() * (24 - 6) + 6);
    }, 5e3);

    return () => clearInterval(interval);
  }, []);

  // Production automatique des trombones
  useEffect(() => {
    const interval = setInterval(() => {
      if (steelWire >= autoClippers) {
        setPaperclips((prev) => prev + autoClippers);
        setUnsoldInventory((prev) => prev + autoClippers);
        setSteelWire((prev) => prev - autoClippers);
        setPaperclipsPerSecond(autoClippers);
      } else {
        setPaperclipsPerSecond(0);
      }
    }, 1e3);

    return () => clearInterval(interval);
  }, [steelWire, autoClippers, paperclipCost, unsoldInventory]);

  // Ventes de trombones en fonction de la demande dans la limite de l'inventaire
  useEffect(() => {
    const interval = setInterval(() => {
      const sales = Math.min(
        unsoldInventory,
        unsoldInventory * (publicDemand / 100) * 2
      );
      setFundsAvailable((prev) => prev + sales * paperclipCost);
      setUnsoldInventory((prev) => prev - sales);
    }, 1e3);

    return () => clearInterval(interval);
  }, [unsoldInventory, publicDemand, paperclipCost]);

  // Débloquer des fonctionnalités
  useEffect(() => {
    if (!feature.current) return;
    feature.current.autoClippers = paperclips >= 100;
    feature.current.marketing = paperclips >= 500;
    feature.current.trust = paperclips >= 2000;
  }, [paperclips]);

  useEffect(() => {
    setGame({
      paperclips,
      paperclipCost,
      unsoldInventory,
      fundsAvailable,
      feature: feature.current,
      publicDemand,
      steelWire,
      steelWireCost,
      autoClippers,
      autoClippersCost,
      marketing,
      marketingCost,
    });
  }, [
    paperclips,
    paperclipCost,
    unsoldInventory,
    fundsAvailable,
    feature,
    publicDemand,
    steelWire,
    steelWireCost,
    autoClippers,
    autoClippersCost,
    marketing,
    marketingCost,
  ]);

  return (
    <article className={styles.dashboard}>
      <button onClick={restart}>restart</button>
      <PaperclipsComponent paperclips={paperclips} />
      <ManufacturingComponent
        autoClippers={autoClippers}
        autoClippersCost={autoClippersCost}
        paperclipPerSecond={paperclipPerSecond}
        feature={feature.current}
        steelWire={steelWire}
        steelWireCost={steelWireCost}
        buyAutoClippers={buyAutoClippers}
        buySteelWire={buySteelWire}
        producePaperclip={producePaperclip}
      />
      <BusinessComponent
        feature={feature.current}
        fundsAvailable={fundsAvailable}
        paperclipCost={paperclipCost}
        marketing={marketing}
        marketingCost={marketingCost}
        publicDemand={publicDemand}
        unsoldInventory={unsoldInventory}
        decreasePaperclipCost={decreasePaperclipCost}
        increasePaperclipCost={increasePaperclipCost}
        buyMarketing={buyMarketing}
      />
    </article>
  );
};
