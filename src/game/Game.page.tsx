import { useCallback, useEffect, useState } from 'react';
import { useGame, useGameDispatch } from './useGame';
import { rangeMapper } from '../generic/utils/rangeMapper';
import { PageComponent } from '../generic/components/page/Page.component';
import { NumberComponent } from '../generic/components/number/Number.component';
import { CLIPS, CREATIVITIES, MEMORIES, OPERATIONS, TRUSTS } from './Game.data';

function ExplorePage() {
  const setGame = useGameDispatch();
  const game = useGame();
  const [clipStock, setClipStock] = useState(game.clipStock);
  const [pricePerClip, setPricePerClip] = useState(game.pricePerClip);
  const [unsoldInventoryStock, setUnsoldInventoryStock] = useState(game.unsoldInventoryStock);
  const [steelWireStock, setSteelWireStock] = useState(game.steelWireStock);
  const [pricePerSteelWire, setPricePerSteelWire] = useState(game.pricePerSteelWire);
  const [fundsAvailable, setFundsAvailable] = useState(game.fundsAvailable);
  const [autoClipper, setAutoClipper] = useState(game.autoClipper);
  const [pricePerAutoClipper, setPricePerAutoClipper] = useState(game.pricePerAutoClipper);
  const [marketingLevel, setMarketingLevel] = useState(game.marketingLevel);
  const [pricePerMarketingLevel, setPricePerMarketingLevel] = useState(game.pricePerMarketingLevel);
  const [trust, setTrust] = useState(game.trust);
  const [processor, setProcessor] = useState(game.processor);
  const [memory, setMemory] = useState(game.memory);
  const [operation, setOperation] = useState(game.operation);
  const [creativity, setCreativity] = useState(game.creativity);
  const [feature, setFeature] = useState(game.feature);
  const [clipPerSecond, setClipPerSecond] = useState(0);
  const [publicDemand, setPublicDemand] = useState(0);
  const [sellLimit, setSellLimit] = useState(0);
  const [memoryBonus, setMemoryBonus] = useState(0);
  const [tracker, setTracker] = useState(0);
  const [autoClipperBonus, setAutoClipperBonus] = useState(game.autoClipperBonus);
  const [processorBonus, setProcessorBonus] = useState(game.processorBonus);
  const [isAutoSelling, setAutoSelling] = useState(false);
  const [isAutoProduce, setAutoProduce] = useState(false);

  const restartGame = () => {
    setGame({
      clipStock: 1999,
      pricePerClip: 0.65,
      unsoldInventoryStock: 0,
      steelWireStock: 1000,
      pricePerSteelWire: 20,
      fundsAvailable: 2000,
      autoClipper: 0,
      pricePerAutoClipper: 5,
      marketingLevel: 1,
      pricePerMarketingLevel: 100,
      trust: 0,
      processor: 0,
      memory: 0,
      operation: 0,
      creativity: 0,
      autoClipperBonus: 0,
      processorBonus: 0,
      feature: {
        autoClipper: {
          enable: false,
          disable: false,
        },
        computationalResources: {
          enable: false,
          disable: false,
        },
        projects: {
          enable: false,
          disable: false,
        },
        revTracker: {
          enable: false,
          disable: false,
        },
        autoTracker: {
          enable: false,
          disable: false,
        },
        improvedAutoClipper: {
          enable: false,
          disable: false,
        },
      },
    });
    location.reload();
  };

  const increasePricePerClip = () => setPricePerClip((prev) => Math.min(prev + 0.01, 1));

  const decreasePricePerClip = () => setPricePerClip((prev) => Math.max(prev - 0.01, 0.01));

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
      setAutoClipper((prev) => Math.ceil(prev + (autoClipperBonus * prev) / 100 + 1));
      setPricePerAutoClipper((prev) => prev + (Math.random() * (5 - 0.5) + 0.5) * prev);
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

  const buyRevTracker = () => {
    setFeature({
      ...feature,
      revTracker: { enable: false, disable: true },
      autoTracker: { enable: true, disable: false },
    });
  };

  const buyImprovedAutoClipper = () => {
    setFeature({ ...feature, improvedAutoClipper: { enable: false, disable: true } });
    setAutoClipperBonus(25);
  };

  const computationalResources = useCallback(() => {
    setTrust(rangeMapper(clipStock, CLIPS, TRUSTS));
    setProcessor(Math.ceil(trust / 2 + processorBonus));
    setMemory(Math.ceil(trust / 2 + memoryBonus));
    setCreativity(rangeMapper(operation + 1, OPERATIONS, CREATIVITIES));
  }, [clipStock, trust, operation]);

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
  }, [autoClipper, steelWireStock]);

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
    if (feature.computationalResources.disable) return;
    setOperation((prev) =>
      Math.min(rangeMapper(memory, MEMORIES, OPERATIONS), prev + 5 * processor)
    );
  }, [feature, memory, processor]);

  const autoPricePerSteelWire = useCallback(() => {
    setPricePerSteelWire((prev) => (prev >= 8 ? prev - 0.02 : Math.random() * (25 - 5) + 5));
  }, []);

  const autoTracker = useCallback(() => {
    if (feature.autoTracker.disable) return;
    setTracker(pricePerClip * clipPerSecond);
  }, [feature, pricePerClip, clipPerSecond]);

  const enableFeature = useCallback(() => {
    if (clipStock >= 100 && !feature.autoClipper.enable && !feature.autoClipper.disable) {
      setFeature({
        ...feature,
        autoClipper: { enable: true, disable: false },
      });
    }

    if (
      clipStock >= 2000 &&
      !feature.computationalResources.enable &&
      !feature.computationalResources.disable
    ) {
      setFeature({
        ...feature,
        computationalResources: { enable: true, disable: false },
      });
    }

    if (clipStock >= 2000 && !feature.projects.enable && !feature.projects.disable) {
      setFeature({
        ...feature,
        projects: { enable: true, disable: false },
      });
    }

    if (clipStock >= 2000 && !feature.revTracker.enable && !feature.revTracker.disable) {
      setFeature({
        ...feature,
        revTracker: { enable: true, disable: false },
      });
    }

    if (
      autoClipper > 0 &&
      creativity >= 10 &&
      !feature.improvedAutoClipper.enable &&
      !feature.improvedAutoClipper.disable
    ) {
      setFeature({
        ...feature,
        improvedAutoClipper: { enable: true, disable: false },
      });
    }
  }, [feature, clipStock, autoClipper, creativity]);

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
      trust,
      processor,
      memory,
      operation,
      creativity,
      autoClipperBonus,
      processorBonus,
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
    trust,
    processor,
    memory,
    operation,
    creativity,
    autoClipperBonus,
    processorBonus,
    feature,
  ]);

  useEffect(() => {
    setPublicDemand(Math.max(0, 100 - pricePerClip * 100 + 1));
    setSellLimit(Math.max(1, Math.floor((pricePerClip * 28 - marketingLevel) / marketingLevel)));
  }, [pricePerClip, marketingLevel]);

  useEffect(() => {
    computationalResources();
  }, [computationalResources]);

  useEffect(() => {
    enableFeature();
  }, [enableFeature]);

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
    <PageComponent>
      <div>
        Admin
        <br />
        <button onClick={restartGame}>restartGame</button>
        <button onClick={() => setProcessorBonus(1)}>processorBonus +1</button>
        <button
          onClick={() => {
            setProcessorBonus(10);
          }}
        >
          processorBonus +10
        </button>
        <button onClick={() => setMemoryBonus(1)}>memoryBonus 1</button>
        <button onClick={() => setMemoryBonus(5)}>memoryBonus 5</button>
        <br />
        <br />
      </div>
      <div>
        <div>clipPerSecond {clipPerSecond}</div>
        <div>
          clipStock (fr) <NumberComponent locale="fr-FR" number={clipStock} />
        </div>
        <div>
          clipStock (us) <NumberComponent locale="en-US" number={clipStock} />
        </div>
        <br />
        <div>Manufacturing</div>
        <button onClick={produceClip}>Paperclip</button>
        <div>
          steelWireStock <NumberComponent locale="fr-FR" number={steelWireStock} />
        </div>
        <div>
          <button onClick={buySteelWire}>SteelWire</button>
          <NumberComponent locale="fr-FR" style="currency" number={pricePerSteelWire} />
        </div>
        {feature.autoClipper.enable ? (
          <div>
            <div>
              <button onClick={buyAutoClipper}>autoClipper</button> {autoClipper}
              {autoClipperBonus ? <span>(+{autoClipperBonus}%)</span> : null}
            </div>
            {/* <div>pricePerAutoClipper {pricePerAutoClipper.toFixed(2)}</div> */}
            <div>
              pricePerAutoClipper{' '}
              <NumberComponent locale="fr-FR" style="currency" number={pricePerAutoClipper} />
            </div>
          </div>
        ) : null}
        <br />
        <div>Business</div>
        <div>
          fundsAvailable (fr){' '}
          <NumberComponent locale="fr-FR" style="currency" number={fundsAvailable} />
        </div>
        <div>
          fundsAvailable (us){' '}
          <NumberComponent locale="en-US" style="currency" number={fundsAvailable} />
        </div>
        {feature.autoTracker.enable ? (
          <div>
            tracker <NumberComponent locale="fr-FR" style="currency" number={tracker} />
          </div>
        ) : null}
        <div>
          unsoldInventoryStock <NumberComponent locale="fr-FR" number={unsoldInventoryStock} />
        </div>
        <div>
          unsoldInventoryStock <NumberComponent locale="en-US" number={unsoldInventoryStock} />
        </div>
        <div>
          pricePerClip <NumberComponent locale="fr-FR" style="currency" number={pricePerClip} />
        </div>
        <div>
          pricePerClip <NumberComponent locale="en-US" style="currency" number={pricePerClip} />
        </div>
        <button onClick={increasePricePerClip}>💰 Augmenter</button>
        <button onClick={decreasePricePerClip}>💸 Réduire</button>
        <div>(sellLimit {sellLimit})</div>
        <div>publicDemand {publicDemand.toFixed(0)} %</div>
        <div>
          <button onClick={buyMarketingLevel}>MarketingLevel</button>Level {marketingLevel}
        </div>
        <div>Cost: $ {pricePerMarketingLevel}</div>
      </div>
      <div>
        <div>{isAutoSelling ? 'isAutoSelling' : ''}</div>
        <div>{isAutoProduce ? 'isAutoProduce' : ''}</div>
      </div>
      {feature.computationalResources.enable ? (
        <div>
          <br />
          <div>Computational Resources</div>
          <div>Trust {trust}</div>
          <br />
          <div>Processors {processor}</div>
          <div>Memory {memory}</div>
          {/* <div>
            operation {operation} / {rangeMapper(memory, MEMORIES, OPERATIONS)}
          </div> */}
          <div>
            operation <NumberComponent locale="fr-FR" number={operation} /> /{' '}
            <NumberComponent locale="fr-FR" number={rangeMapper(memory, MEMORIES, OPERATIONS)} />
          </div>
          <div>
            operation <NumberComponent locale="en-US" number={operation} /> /{' '}
            {rangeMapper(memory, MEMORIES, OPERATIONS)}
          </div>
          {/* <div>creativity {creativity}</div> */}
          <div>
            creativity <NumberComponent locale="fr-FR" number={creativity} />
          </div>
          <div>
            creativity <NumberComponent locale="en-US" number={creativity} />
          </div>
        </div>
      ) : null}
      {feature.projects.enable ? (
        <div>
          <div>projects</div>
          {feature.revTracker.enable ? <button onClick={buyRevTracker}>revTracker</button> : null}
          {feature.improvedAutoClipper.enable ? (
            <button onClick={buyImprovedAutoClipper}>improvedAutoClipper</button>
          ) : null}
        </div>
      ) : null}
    </PageComponent>
  );
}

export default ExplorePage;
