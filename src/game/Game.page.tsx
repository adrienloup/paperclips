import { useCallback, useEffect, useState } from 'react';
import { rangeMapper } from '../generic/utils/rangeMapper';
import { useGame, useGameDispatch } from './useGame';
import {
  CLIPS,
  CREATIVITIES,
  MEMORIES,
  OPERATIONS,
  TRUSTS,
} from './Game.range';

function ExplorePage() {
  const setGame = useGameDispatch();
  const game = useGame();
  const [clipStock, setClipStock] = useState(game.clipStock);
  const [pricePerClip, setPricePerClip] = useState(game.pricePerClip);
  const [unsoldInventoryStock, setUnsoldInventoryStock] = useState(
    game.unsoldInventoryStock
  );
  const [steelWireStock, setSteelWireStock] = useState(game.steelWireStock);
  const [pricePerSteelWire, setPricePerSteelWire] = useState(
    game.pricePerSteelWire
  );
  const [fundsAvailable, setFundsAvailable] = useState(game.fundsAvailable);
  const [autoClipper, setAutoclipper] = useState(game.autoClipper);
  const [pricePerAutoClipper, setPricePerAutoClipper] = useState(
    game.pricePerAutoClipper
  );
  const [marketingLevel, setMarketingLevel] = useState(game.marketingLevel);
  const [pricePerMarketingLevel, setPricePerMarketingLevel] = useState(
    game.pricePerMarketingLevel
  );
  const [trust, setTrust] = useState(game.trust);
  const [processor, setProcessor] = useState(game.processor);
  const [memory, setMemory] = useState(game.memory);
  const [operation, setOperation] = useState(game.operation);
  const [creativity, setCreativity] = useState(game.creativity);
  const [feature, setFeature] = useState(game.feature);
  const [clipPerSecond, setClipPerSecond] = useState(0);
  const [publicDemand, setPublicDemand] = useState(0);
  const [sellLimit, setSellLimit] = useState(0);
  const [processorMultiplier, setProcessorMultiplier] = useState(0);
  const [memoryMultiplier, setMemoryMultiplier] = useState(0);
  const [tracker, setTracker] = useState(0);
  const [isAutoSelling, setAutoSelling] = useState(false);
  const [isAutoProduce, setAutoProduce] = useState(false);

  const restartGame = () => {
    setGame({
      clipStock: 0,
      pricePerClip: 0.65,
      unsoldInventoryStock: 0,
      steelWireStock: 1000,
      pricePerSteelWire: 20,
      fundsAvailable: 105,
      autoClipper: 0,
      pricePerAutoClipper: 5,
      marketingLevel: 1,
      pricePerMarketingLevel: 100,
      processor: 0,
      memory: 0,
      trust: 0,
      operation: 0,
      creativity: 0,
      feature: {
        autoClipper: false,
        mechanic: false,
        autoTracker: false,
      },
    });
    location.reload();
  };

  const increasePricePerClip = () =>
    setPricePerClip((prev) => Math.min(prev + 0.01, 1));

  const decreasePricePerClip = () =>
    setPricePerClip((prev) => Math.max(prev - 0.01, 0.01));

  const produceClip = () => {
    if (steelWireStock > 0) {
      setClipStock((prev) => prev + 1);
      setUnsoldInventoryStock((prev) => prev + 1);
      setSteelWireStock((prev) => prev - 1);
      setClipPerSecond((prev) => prev + 1);
    }
  };

  const buySteelWire = () => {
    if (fundsAvailable >= pricePerSteelWire) {
      setPricePerSteelWire((prev) => prev + (11 - marketingLevel) * 0.01);
      setSteelWireStock((prev) => prev + 1000);
      setFundsAvailable((prev) => prev - pricePerSteelWire);
    }
  };

  const buyAutoClipper = () => {
    if (fundsAvailable >= pricePerAutoClipper) {
      setAutoclipper((prev) => prev + 1);
      setPricePerAutoClipper(
        (prev) => prev + (Math.random() * (0.5 - 0.1) + 0.1)
      );
      setFundsAvailable((prev) => prev - pricePerAutoClipper);
    }
  };

  const buyMarketingLevel = () => {
    if (fundsAvailable >= pricePerMarketingLevel && marketingLevel < 10) {
      setMarketingLevel((prev) => prev + 1);
      setPricePerMarketingLevel((prev) => prev * 2);
      setFundsAvailable((prev) => prev - pricePerMarketingLevel);
    }
  };

  const computationalResources = useCallback(() => {
    setTrust(rangeMapper(clipStock, CLIPS, TRUSTS));
    setProcessor(Math.ceil(trust / 2 + processorMultiplier));
    setMemory(Math.ceil(trust / 2 + memoryMultiplier));
    setCreativity((prev) =>
      operation === rangeMapper(memory, MEMORIES, OPERATIONS)
        ? rangeMapper(operation + 1, OPERATIONS, CREATIVITIES)
        : prev
    );
  }, [clipStock, trust, memory, operation]);

  const autoProduction = useCallback(() => {
    if (autoClipper > 0 && steelWireStock >= autoClipper) {
      setAutoProduce(true);
      setClipStock((prev) => prev + autoClipper);
      setSteelWireStock((prev) => prev - autoClipper);
      setUnsoldInventoryStock((prev) => prev + autoClipper);
      setClipPerSecond(autoClipper);
    } else {
      setAutoProduce(false);
      setClipPerSecond(0);
    }
  }, [feature, steelWireStock, autoClipper]);

  const autoSale = useCallback(() => {
    if (unsoldInventoryStock <= 0) {
      setAutoSelling(false);
      return;
    }
    setUnsoldInventoryStock((prevInventory) => {
      if (prevInventory >= sellLimit) {
        setFundsAvailable(fundsAvailable + sellLimit * pricePerClip);
        setAutoSelling(true);
        return prevInventory - sellLimit;
      } else {
        setAutoSelling(false);
        return prevInventory;
      }
    });
  }, [unsoldInventoryStock, fundsAvailable, sellLimit, pricePerClip]);

  const autoOperation = useCallback(() => {
    if (!feature.mechanic) return;
    setOperation((prev) =>
      Math.min(rangeMapper(memory, MEMORIES, OPERATIONS), prev + 5 * processor)
    );
  }, [feature, memory, processor]);

  const autoPricePerSteelWire = useCallback(() => {
    setPricePerSteelWire((prev) =>
      prev >= 8 ? prev - 0.02 : Math.random() * (25 - 5) + 5
    );
  }, []);

  const autoTracker = useCallback(() => {
    if (!feature.autoTracker) return;
    setTracker(pricePerClip * clipPerSecond);
  }, [feature, pricePerClip, clipPerSecond]);

  const updateGame = useCallback(() => {
    setGame({
      clipStock,
      pricePerClip,
      unsoldInventoryStock,
      steelWireStock,
      pricePerSteelWire,
      fundsAvailable,
      autoClipper,
      pricePerAutoClipper,
      marketingLevel,
      pricePerMarketingLevel,
      processor,
      memory,
      trust,
      operation,
      creativity,
      feature,
    });
  }, [
    clipStock,
    pricePerClip,
    unsoldInventoryStock,
    steelWireStock,
    pricePerSteelWire,
    fundsAvailable,
    autoClipper,
    pricePerAutoClipper,
    marketingLevel,
    pricePerMarketingLevel,
    processor,
    memory,
    trust,
    operation,
    creativity,
    feature,
  ]);

  useEffect(() => {
    setPublicDemand(Math.max(0, 100 - pricePerClip * 100 + 1));
    setSellLimit(
      Math.max(
        1,
        Math.floor((pricePerClip * 28 - marketingLevel) / marketingLevel)
      )
    );
  }, [pricePerClip, marketingLevel]);

  useEffect(() => {
    if (clipStock >= 100 && !feature.autoClipper)
      setFeature({ ...feature, autoClipper: true });
    if (clipStock >= 2000 && !feature.mechanic)
      setFeature({ ...feature, mechanic: true });
  }, [clipStock]);

  useEffect(() => {
    computationalResources();
  }, [computationalResources]);

  useEffect(() => {
    const interval = setInterval(() => autoProduction(), 1e3);
    return () => clearInterval(interval);
  }, [autoProduction]);

  useEffect(() => {
    const interval = setInterval(() => autoSale(), 1e3);
    return () => clearInterval(interval);
  }, [autoSale]);

  useEffect(() => {
    const interval = setInterval(() => autoOperation(), 1e3);
    return () => clearInterval(interval);
  }, [autoOperation]);

  useEffect(() => {
    const interval = setInterval(() => autoPricePerSteelWire(), 20e3);
    return () => clearInterval(interval);
  }, [autoPricePerSteelWire]);

  useEffect(() => {
    const interval = setInterval(() => autoTracker(), 1e3);
    return () => clearInterval(interval);
  }, [autoTracker]);

  useEffect(() => {
    updateGame();
  }, [updateGame]);

  return (
    <div>
      <div>
        <button onClick={restartGame}>restartGame</button>
      </div>
      <div>
        <div>clipPerSecond {clipPerSecond}</div>
        <div>clipStock {clipStock}</div>
        <br />
        <div>Manufacturing</div>
        <button onClick={produceClip}>Paperclip</button>
        <div>steelWireStock {steelWireStock}</div>
        <div>
          <button onClick={buySteelWire}>SteelWire</button>
          {pricePerSteelWire.toFixed(2)}
        </div>
        {feature.autoClipper ? (
          <div>
            <div>
              <button onClick={buyAutoClipper}>autoClipper</button>{' '}
              {autoClipper}
            </div>
            <div>pricePerAutoClipper {pricePerAutoClipper.toFixed(2)}</div>
          </div>
        ) : null}
        <br />
        <div>Business</div>
        <div>fundsAvailable {fundsAvailable.toFixed(2)}</div>
        {feature.autoTracker ? <div>tracker {tracker.toFixed(2)}</div> : null}
        <div>unsoldInventoryStock {unsoldInventoryStock}</div>
        <div>pricePerClip {pricePerClip.toFixed(2)}</div>
        <button onClick={increasePricePerClip}>💰 Augmenter</button>
        <button onClick={decreasePricePerClip}>💸 Réduire</button>
        <div>(sellLimit {sellLimit})</div>
        <div>publicDemand {publicDemand.toFixed(0)} %</div>
        <div>
          <button onClick={buyMarketingLevel}>MarketingLevel</button>Level{' '}
          {marketingLevel}
        </div>
        <div>Cost: $ {pricePerMarketingLevel}</div>
      </div>
      <div>
        <div>{isAutoSelling ? 'isAutoSelling' : ''}</div>
        <div>{isAutoProduce ? 'isAutoProduce' : ''}</div>
      </div>
      {feature.mechanic ? (
        <div>
          <br />
          <div>Computational Resources</div>
          <div>Trust {trust}</div>
          <br />
          <div>Processors {processor}</div>
          <div>Memory {memory}</div>
          <div>
            operation {operation} / {rangeMapper(memory, MEMORIES, OPERATIONS)}
          </div>
          <div>creativity {creativity}</div>
        </div>
      ) : null}
      <br />
      <div>projects</div>
      <button onClick={() => setFeature({ ...feature, autoTracker: true })}>
        autoTracker
      </button>
    </div>
  );
}

export default ExplorePage;
