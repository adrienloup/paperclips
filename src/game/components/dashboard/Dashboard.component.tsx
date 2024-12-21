import { useEffect, useState } from 'react';
import { formatNumber } from '../../../generic/utils/formatNumber';
import styles from './Dashboard.module.scss';

function DashboardComponent() {
  const [clips, setClips] = useState(0);
  const [clipsCost, setClipsCost] = useState(0.25);
  const [inventory, setInventory] = useState(0);
  const [funds, setFunds] = useState(0);
  const [wire, setWire] = useState(1000);
  const [wireCost, setWireCost] = useState(1);
  const [autoProducers, setAutoProducers] = useState(0);
  const [autoProducerCost, setAutoProducerCost] = useState(5);
  const [publicDemand, setPublicDemand] = useState(100);
  const [unlockedFeatures, setUnlockedFeatures] = useState({
    autoProducers: false,
  });

  // Produire un trombone
  const produceClip = () => {
    if (wire > 0) {
      setClips(clips + 1);
      setInventory(inventory + 1);
      setWire(wire - 1);
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

  const increasePrice = () => setClipsCost((prev) => Math.min(prev + 0.01, 1));

  const decreasePrice = () =>
    setClipsCost((prev) => Math.max(prev - 0.01, 0.01));

  // Met à jour la demande de 0 à 100% en fonction du prix d'un trombone
  useEffect(() => {
    setPublicDemand(Math.max(0, 101 - clipsCost * 101));
  }, [clipsCost]);

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
      const demand = inventory * (publicDemand / 100);
      const sales = Math.min(inventory, demand);
      setFunds((prev) => prev + sales * clipsCost);
      setInventory((prev) => prev - sales);
    }, 1e3);

    return () => clearInterval(interval);
  }, [publicDemand, clipsCost, funds, inventory]);

  // Effet pour débloquer des fonctionnalités
  useEffect(() => {
    if (clips >= 10 && !unlockedFeatures.autoProducers) {
      setUnlockedFeatures((prev) => ({ ...prev, autoProducers: true }));
    }
  }, [clips, unlockedFeatures]);

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.clips}>
        <span>Paperclips</span> {formatNumber(clips)}
      </h1>

      <div>
        <h2>Business</h2>
        <p>Fonds disponibles : {funds.toFixed(2)} €</p>
        <p>Inventaire invendu : {inventory.toFixed()}</p>
        <p>Public Demande : {publicDemand.toFixed()}%</p>
        <button onClick={decreasePrice}>Baisser le prix</button>
        <button onClick={increasePrice}>AUgmenter le prix</button>
        <p>Price per Clip: $ {clipsCost.toFixed(2)}</p>
        <br />
        <h2>Manufacturing</h2>
        <p>Rendement par seconde</p>
        <button onClick={produceClip}>Produire un trombone</button>
        <p>
          <strong>Fil de fer disponible :</strong> {wire}
        </p>
        <p>
          <strong>Coût du fil de fer :</strong> $ {wireCost.toFixed(2)}
        </p>
        <button onClick={buyWire}>Acheter du fil de fer (+50)</button>
      </div>

      {unlockedFeatures.autoProducers && (
        <div>
          <p>
            <strong>Machines à trombones :</strong> {autoProducers}
          </p>
          <button onClick={buyAutoProducer}>
            Acheter une machine à trombones
          </button>
          <p>
            <strong>Coût d'une machine :</strong> ${' '}
            {autoProducerCost.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default DashboardComponent;
