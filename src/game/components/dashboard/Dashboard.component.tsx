// import { useEffect, useRef, useState } from 'react';
import { useGameDispatch } from '../../useGame';
// import { Feature } from '../../../generic/types/Feature.type';
import { PaperclipsComponent } from '../paperclips/Paperclips.component';
import { ManufacturingComponent } from '../manufacturing/Manufacturing.component';
import { BusinessComponent } from '../business/Business.component';
// import { ComputationalComponent } from '../computational/Computational.component';
import styles from './Dashboard.module.scss';

export const DashboardComponent = () => {
  // const game = useGame();
  const setGame = useGameDispatch();
  // const [paperclips, setPaperclips] = useState(game.paperclips);
  // const [paperclipCost, setPaperclipCost] = useState(game.paperclipCost);
  // const [unsoldInventory, setUnsoldInventory] = useState(game.unsoldInventory);
  // const [fundsAvailable, setFundsAvailable] = useState(game.fundsAvailable);
  // const [steelWire, setSteelWire] = useState(game.steelWire);
  // // const [steelWireCost, setSteelWireCost] = useState(game.steelWireCost);
  // const steelWireCost = useRef<number>(game.steelWireCost);
  // const paperclips = useRef<number>(game.paperclips);
  // const unsoldInventory = useRef<number>(game.unsoldInventory);
  // const shouldStartInterval = useRef<boolean>(true);

  // let paperclipsTUTU = game.paperclips;
  // const [autoClippers, setAutoClippers] = useState(game.autoClippers);
  // const [autoClippersCost, setAutoClippersCost] = useState(
  //   game.autoClippersCost
  // );
  // const [marketing, setMarketing] = useState(game.marketing);
  // const [marketingCost, setMarketingCost] = useState(game.marketingCost);
  // const [paperclipPerSecond, setPaperclipsPerSecond] = useState(0);
  // const [publicDemand, setPublicDemand] = useState(game.publicDemand);
  // const feature = useRef<Feature>(game.feature);

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
      publicDemand: 75,
      steelWire: 1000,
      steelWireCost: 6.25,
      steelWireRefill: 50,
      autoClippers: 0,
      autoClippersCost: 5,
      marketing: 1,
      marketingCost: 100,
    });
  };

  // Produire un trombone
  // const producePaperclip = () => {
  //   // if (steelWire > 0) {
  //   console.log('render producePaperclip');
  //   // if (shouldStartInterval) {
  //   paperclips.current += 1;
  //   unsoldInventory.current += 1;
  //   paperclipsTUTU += 1;
  //   // console.log(paperclips.current);
  //   console.log(paperclipsTUTU);
  //   // setGame({
  //   //   ...game,
  //   //   paperclips: (paperclips.current += 1),
  //   //   unsoldInventory: (unsoldInventory.current += 1),
  //   // });
  //   // }
  //   // setPaperclips(paperclips + 1);
  //   // setUnsoldInventory(unsoldInventory + 1);
  //   // setSteelWire(steelWire - 1);
  //   // setPaperclipsPerSecond(paperclipPerSecond + 1);
  //   // }
  // };

  // // Acheter du fil d'acier
  // const buySteelWire = () => {
  //   if (fundsAvailable >= steelWireCost) {
  //     setSteelWire(
  //       steelWire + (marketing >= 5 ? 10000 : marketing >= 3 ? 1000 : 50)
  //     );
  //     setFundsAvailable(fundsAvailable - steelWireCost);
  //   }
  // };

  // // Acheter une machine à trombones
  // const buyAutoClippers = () => {
  //   if (fundsAvailable >= autoClippersCost) {
  //     setAutoClippers(autoClippers + 1);
  //     setAutoClippersCost(
  //       autoClippersCost + marketing + (Math.random() * (0.5 - 0.1) + 0.1)
  //     );
  //     setFundsAvailable(fundsAvailable - autoClippersCost);
  //   }
  // };

  // // Acheter des niveaux de marketing
  // const buyMarketing = () => {
  //   if (fundsAvailable >= marketingCost) {
  //     setMarketing(marketing + 1);
  //     setMarketingCost(marketingCost * 2);
  //     setFundsAvailable(fundsAvailable - marketingCost);
  //   }
  // };

  // const increasePaperclipCost = () =>
  //   setPaperclipCost((prev) => Math.min(prev + 0.01, 1));

  // const decreasePaperclipCost = () =>
  //   setPaperclipCost((prev) => Math.max(prev - 0.01, 0.01));

  // // Demande publique
  // // useEffect(() => {
  // //   const marketingBonus = marketing * 100 + marketing;
  // //   setPublicDemand(
  // //     Math.max(0, marketingBonus - paperclipCost * marketingBonus)
  // //   );
  // // }, [marketing, paperclipCost]);

  // // Prix du fil entre 6 et 24 €
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setSteelWireCost(Math.random() * (24 - 6) + 6);
  //     steelWireCost.current = Math.random() * (24 - 6) + 6;
  //     console.log('render steelWireCost', steelWireCost.current);
  // setGame({
  //   ...game,
  //   steelWireCost: steelWireCost.current,
  // });
  //   }, 5e3);

  //   return () => clearInterval(interval);
  // }, []);

  // // Production automatique des trombones
  // // useEffect(() => {
  // //   const interval = setInterval(() => {
  // //     if (steelWire >= autoClippers) {
  // //       setPaperclips((prev) => prev + autoClippers);
  // //       setUnsoldInventory((prev) => prev + autoClippers);
  // //       setSteelWire((prev) => prev - autoClippers);
  // //       setPaperclipsPerSecond(autoClippers);
  // //     } else {
  // //       setPaperclipsPerSecond(0);
  // //     }
  // //   }, 1e3);

  // //   return () => clearInterval(interval);
  // // }, [steelWire, autoClippers, paperclipCost, unsoldInventory]);

  // Ventes de trombones en fonction de la demande dans la limite de l'inventaire
  // useEffect(() => {
  //   console.log('2');
  //   const interval = setInterval(() => {
  //     if (unsoldInventory.current > 0) {
  //       console.log('3');
  //       shouldStartInterval.current = false;
  //       unsoldInventory.current = unsoldInventory.current -= 1;
  //       // setGame({
  //       //   ...game,
  //       //   unsoldInventory: (unsoldInventory.current -= 1),
  //       // });
  //       shouldStartInterval.current = true;
  //     }
  //   }, 1e3);

  //   return () => clearInterval(interval);
  // }, [shouldStartInterval.current, unsoldInventory.current]);

  // // Ventes de trombones en fonction de la demande dans la limite de l'inventaire
  // // useEffect(() => {
  // //   const interval = setInterval(() => {
  // //     console.log('render 3');

  // //     const sales = Math.min(
  // //       unsoldInventory,
  // //       unsoldInventory * (publicDemand / 100) * 2
  // //     );
  // //     setFundsAvailable((prev) => prev + sales * paperclipCost);
  // //     setUnsoldInventory((prev) => prev - sales);
  // //   }, 1e3);

  // //   return () => clearInterval(interval);
  // // }, [unsoldInventory, publicDemand, paperclipCost]);

  // Débloquer des fonctionnalités
  // useEffect(() => {
  //   // if (!feature.current) return;
  //   // feature.current.autoClippers = paperclips >= 100;
  //   // feature.current.marketing = paperclips >= 500;
  //   // feature.current.trust = paperclips >= 2000;
  //   setGame({
  //     ...game,
  //     feature: {
  //       autoClippers: game.paperclips >= 100,
  //       marketing: game.paperclips >= 500,
  //       trust: game.paperclips >= 2000,
  //     },
  //   });
  // }, [game.paperclips]);

  return (
    <article className={styles.dashboard}>
      <button onClick={restart}>restart</button>
      <PaperclipsComponent />
      <div className={styles.group}>
        <ManufacturingComponent />
        <BusinessComponent />
      </div>
      {/* {feature.current.trust ? <ComputationalComponent /> : null} */}
    </article>
  );
};
