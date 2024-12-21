import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../../generic/utils/formatNumber';
import { useNoteDispatch } from '../../../generic/components/note/useNote';
import { BusinessComponent } from '../business/Business.component';
import { ManufacturingComponent } from '../manufacturing/Manufacturing.component';
import styles from './Dashboard.module.scss';

function DashboardComponent() {
  const { t } = useTranslation();
  const setNote = useNoteDispatch();
  const [clips, setClips] = useState(0);
  const [clipsCost, setClipsCost] = useState(0.25);
  const [inventory, setInventory] = useState(0);
  const [funds, setFunds] = useState(0);
  const [wire, setWire] = useState(1000);
  const [wireCost, setWireCost] = useState(1);
  const [autoProducers, setAutoProducers] = useState(0);
  const [autoProducerCost, setAutoProducerCost] = useState(5);
  const [publicDemand, setPublicDemand] = useState(0);
  const [marketing, setMarketing] = useState(1);
  const [marketingCost, setMarketingCost] = useState(100);
  const [feature, setfeature] = useState({
    autoProducers: false,
    marketing: false,
  });
  const clipsPerSecond = useRef(0);

  // Produire un trombone
  const produceClip = () => {
    if (wire > 0) {
      setClips(clips + 1);
      setInventory(inventory + 1);
      setWire(wire - 1);
      clipsPerSecond.current += 1;
    }
  };

  // Acheter du fil de fer
  const buyWire = () => {
    if (funds >= wireCost) {
      setWire(wire + 50);
      setFunds(funds - wireCost);
    }
  };

  // Acheter une machine à trombones
  const buyAutoProducer = () => {
    if (funds >= autoProducerCost) {
      setAutoProducers(autoProducers + 1);
      setAutoProducerCost(
        autoProducerCost + (Math.random() * (0.5 - 0.1) + 0.1)
      );
      setFunds(funds - autoProducerCost);
    }
  };

  // Acheter des niveaux de marketing
  const buyMarketing = () => {
    if (funds >= marketingCost) {
      setMarketing(marketing + 1);
      setMarketingCost(marketingCost * 2);
      setFunds(funds - marketingCost);
    }
  };

  const increaseClipsCost = () =>
    setClipsCost((prev) => Math.min(prev + 0.01, 1));

  const decreaseClipsCost = () =>
    setClipsCost((prev) => Math.max(prev - 0.01, 0.01));

  // Met à jour la demande en fonction du prix d'un trombone
  useEffect(() => {
    const bonus = marketing * 100 + marketing;
    setPublicDemand(Math.max(0, bonus - clipsCost * bonus));
  }, [marketing, clipsCost]);

  // Production automatique des trombones
  useEffect(() => {
    const interval = setInterval(() => {
      if (wire >= autoProducers) {
        setClips((prev) => prev + autoProducers);
        setInventory((prev) => prev + autoProducers);
        setWire((prev) => prev - autoProducers);
      }
    }, 1e3);

    return () => clearInterval(interval);
  }, [wire, autoProducers]);

  // Prix du fil entre 8 et 26 €
  useEffect(() => {
    const interval = setInterval(() => {
      setWireCost(parseFloat((Math.random() * (26 - 8) + 8).toFixed(2)));
    }, 4e3);

    return () => clearInterval(interval);
  }, []);

  // Ventes de trombones en fonction de la demande dans la limite de l'inventaire
  useEffect(() => {
    const interval = setInterval(() => {
      const sales = Math.min(inventory, inventory * (publicDemand / 100) * 2);
      setFunds((prev) => prev + sales * clipsCost);
      setInventory((prev) => prev - sales);
    }, 1e3);

    return () => clearInterval(interval);
  }, [inventory, publicDemand, clipsCost]);

  // Rendement
  useEffect(() => {
    const interval = setInterval(() => {
      clipsPerSecond.current = autoProducers;
    }, 1e3);

    return () => clearInterval(interval);
  }, [autoProducers]);

  // Effet pour débloquer des fonctionnalités
  useEffect(() => {
    if (clips >= 100 && !feature.autoProducers) {
      setfeature((prev) => ({ ...prev, autoProducers: true }));
      setNote({ type: 'added', id: 'autoProducers' });
    }

    if (clips >= 500 && !feature.marketing) {
      setfeature((prev) => ({ ...prev, marketing: true }));
      setNote({ type: 'added', id: 'marketing' });
    }

    if (clips >= 501) {
      setNote({ type: 'added', id: 'marketing' });
    }
  }, [clips, feature]);

  return (
    <article className={styles.dashboard}>
      <h1 className={styles.clips}>
        <span>{t('game.title')}</span> {formatNumber(clips)}
      </h1>
      <div className={styles.group}>
        <ManufacturingComponent
          autoProducers={autoProducers}
          autoProducerCost={autoProducerCost}
          clipsPerSecond={clipsPerSecond.current}
          feature={feature}
          wire={wire}
          wireCost={wireCost}
          buyAutoProducer={buyAutoProducer}
          buyWire={buyWire}
          produceClip={produceClip}
        />
        <BusinessComponent
          clipsCost={clipsCost}
          funds={funds}
          inventory={inventory}
          marketing={marketing}
          marketingCost={marketingCost}
          publicDemand={publicDemand}
          feature={feature}
          decreaseClipsCost={decreaseClipsCost}
          increaseClipsCost={increaseClipsCost}
          buyMarketing={buyMarketing}
        />
      </div>
    </article>
  );
}

export default DashboardComponent;
