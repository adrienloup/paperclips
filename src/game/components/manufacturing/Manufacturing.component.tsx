// // import { MutableRefObject, useEffect, useRef, useState } from 'react';
// // import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useGame, useGameDispatch } from '../../useGame';
// // import { useInterval } from '../../../generic/hooks/useInterval';
// // import { formatNumber } from '../../../generic/utils/formatNumber';
// // import { CardComponent } from '../../../generic/components/card/Card.component';
// // import { ButtonComponent } from '../../../generic/components/button/Button.component';
// // import { DialComponent } from '../../../generic/components/dial/Dial.component';
// // import styles from './Manufacturing.module.scss';

// function ManufacturingComponent() {
//   // const { t } = useTranslation();
// const game = useGame();
//   // const setGame = useGameDispatch();
//   // const [steelWireCost, setSteelWireCost] = useState(game.steelWireCost);
//   // const [paperclipsPerSecond, setPaperclipsPerSecond] = useState(0);
//   // const intervalRefs = useRef<(ReturnType<typeof setInterval> | null)[]>([]);

//   // Produire trombones
//   const producePaperclip = () => {
//     setGame({
//       ...game,
//       paperclips: game.paperclips + 1,
//       unsoldInventory: game.unsoldInventory + 1,
//       steelWire: game.steelWire - 1,
//     });
//     setPaperclipsPerSecond((prev) => prev + 1);
//   };

//   // Acheter fil d'acier
//   const buySteelWire = () => {
//     if (game.fundsAvailable >= steelWireCost) {
//       setGame({
//         ...game,
//         fundsAvailable: game.fundsAvailable - steelWireCost,
//         steelWire: game.steelWire + game.steelWireRefill,
//       });
//     }
//   };

//   // Acheter machine à trombones
//   const buyAutoClippers = () => {
//     if (game.fundsAvailable >= game.autoClippersCost) {
//       setGame({
//         ...game,
//         autoClippers: game.autoClippers + 1,
//         autoClippersCost:
//           game.autoClippersCost +
//           game.marketing +
//           (Math.random() * (5 - 0.5) + 0.5),
//         fundsAvailable: game.fundsAvailable - game.autoClippersCost,
//       });
//     }
//   };

//   // Prix du fil
//   useEffect(() => {
// const interval = setInterval(() => {
//   setSteelWireCost(Math.random() * (24 - 6) + 6);
// }, 4e3);

// return () => clearInterval(interval);
//   }, []);

//   // Ventes de trombones en fonction de la demande dans la limite de l'inventaire
//   // Production automatique des trombones
//   // const handleUpdateVideoStatus = (
//   //   intervalRefs: MutableRefObject<(number | null)[]>
//   // ) => {
//   //   const intervalId = setInterval(() => {
//   //     setTimeout(() => {
//   //       clearInterval(intervalId);
//   //       intervalRefs.current = intervalRefs.current.filter(
//   //         (ref) => ref !== intervalId
//   //       );
//   //       if (game.unsoldInventory > 0) {
//   //         const sales = Math.min(
//   //           game.unsoldInventory,
//   //           game.unsoldInventory * (game.publicDemand / 100) * 0.1
//   //         );
//   //         setGame({
//   //           ...game,
//   //           fundsAvailable: game.fundsAvailable + sales * game.paperclipCost,
//   //           unsoldInventory: Math.floor(game.unsoldInventory - sales),
//   //         });
//   //       }
//   //     }, 1e3);

//   //     if (game.steelWire >= game.autoClippers) {
//   //       setGame({
//   //         ...game,
//   //         paperclips: game.paperclips + game.autoClippers,
//   //         unsoldInventory: game.unsoldInventory + game.autoClippers,
//   //         steelWire: game.steelWire - game.autoClippers,
//   //       });
//   //       setPaperclipsPerSecond(game.autoClippers);
//   //     } else {
//   //       setPaperclipsPerSecond(0);
//   //     }
//   //   }, 1e3);
//   //   intervalRefs.current.push(intervalId);
//   // };

//   // useEffect(() => {
//   //   handleUpdateVideoStatus(intervalRefs);
//   //   return () => {
//   //     intervalRefs.current.forEach((interval) => {
//   //       if (interval) clearInterval(interval);
//   //     });
//   //     intervalRefs.current = [];
//   //   };
//   // }, [
//   //   game.autoClippers,
//   //   game.autoClippersCost,
//   //   game.fundsAvailable,
//   //   game.paperclips,
//   //   game.paperclipCost,
//   //   game.publicDemand,
//   //   game.steelWire,
//   //   game.unsoldInventory,
//   // ]);

//   const handleUpdateVideoStatus = (
//     intervalRefs: MutableRefObject<(number | null)[]>
//   ) => {
//     const intervalId = setInterval(() => {
//       // setTimeout(() => {
//       // clearInterval(intervalId);
//       // intervalRefs.current = intervalRefs.current.filter(
//       //   (ref) => ref !== intervalId
//       // );
//       //   // if (game.unsoldInventory > 0) {
//       //   const sales = Math.min(
//       //     game.unsoldInventory,
//       //     game.unsoldInventory * (game.publicDemand / 100) * 0.1
//       //   );
//       //   setGame({
//       //     ...game,
//       //     fundsAvailable: game.fundsAvailable + sales * game.paperclipCost,
//       //     unsoldInventory: Math.floor(game.unsoldInventory - sales),
//       //   });
//       //   // }
//       // }, 1e3);

//       if (game.steelWire >= game.autoClippers) {
//         setGame({
//           ...game,
//           paperclips: game.paperclips + game.autoClippers,
//           unsoldInventory: game.unsoldInventory + game.autoClippers,
//           steelWire: game.steelWire - game.autoClippers,
//         });
//         setPaperclipsPerSecond(game.autoClippers);
//       } else {
//         setPaperclipsPerSecond(0);
//       }
//     }, 1e3);
//     intervalRefs.current.push(intervalId);
//   };

//   useEffect(() => {
//     handleUpdateVideoStatus(intervalRefs);
//     return () => {
//       intervalRefs.current.forEach((interval) => {
//         if (interval) clearInterval(interval);
//       });
//       intervalRefs.current = [];
//     };
//   }, [
//     game.autoClippers,
//     game.autoClippersCost,
//     game.fundsAvailable,
//     game.paperclips,
//     game.paperclipCost,
//     game.publicDemand,
//     game.steelWire,
//     game.unsoldInventory,
//   ]);

//   // useInterval(() => {
//   //   if (game.steelWire >= game.autoClippers) {
//   //     setGame({
//   //       ...game,
//   //       paperclips: game.paperclips + game.autoClippers,
//   //       unsoldInventory: game.unsoldInventory + game.autoClippers,
//   //       steelWire: game.steelWire - game.autoClippers,
//   //     });
//   //     setPaperclipsPerSecond(game.autoClippers);
//   //   } else {
//   //     setPaperclipsPerSecond(0);
//   //   }
//   // }, 1e3);

//   return (
//     <CardComponent className={styles.card}>
//       <h2 className={styles.title}>{t('game.manufacturing')}</h2>
//       <div className={styles.group}>
//         <ButtonComponent className={styles.button} onClick={producePaperclip}>
//           {t('game.button.makePaperclip')}
//         </ButtonComponent>
//         <DialComponent
//           value={paperclipsPerSecond}
//           label={t('game.paperclipsPerSecond')}
//         />
//       </div>
//       <div className={styles.group}>
//         <ButtonComponent className={styles.button} onClick={buySteelWire}>
//           {t('game.button.buySteelWire')}
//         </ButtonComponent>
//         <DialComponent
//           value={formatNumber(game.steelWire)}
//           label={t('game.steelWire')}
//         />
//         <DialComponent
//           value={t('game.price', {
//             value: steelWireCost.toFixed(1),
//           })}
//           label={t('game.cost')}
//         />
//       </div>
//       {game.feature.autoClippers ? (
//         <div className={styles.group}>
//           <ButtonComponent className={styles.button} onClick={buyAutoClippers}>
//             {t('game.button.buyAutoClippers')}
//           </ButtonComponent>
//           <DialComponent
//             value={formatNumber(game.autoClippers)}
//             label={t('game.autoClippers')}
//           />
//           <DialComponent
//             value={t('game.price', {
//               value: formatNumber(game.autoClippersCost),
//             })}
//             label={t('game.cost')}
//           />
//         </div>
//       ) : null}
//     </CardComponent>
//   );
// }

// export default ManufacturingComponent;

// import { MutableRefObject, useEffect, useRef, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useGame, useGameDispatch } from '../../useGame';
// import { useInterval } from '../../../generic/hooks/useInterval';
// import { formatNumber } from '../../../generic/utils/formatNumber';
// import { CardComponent } from '../../../generic/components/card/Card.component';
// import { ButtonComponent } from '../../../generic/components/button/Button.component';
// import { DialComponent } from '../../../generic/components/dial/Dial.component';
// import styles from './Manufacturing.module.scss';

function ManufacturingComponent() {
  const game = useGame();
  const [paperclips, setPaperclips] = useState(game.paperclips);
  const [unsoldInventory, setUnsoldInventory] = useState(game.unsoldInventory);
  const [paperclipCost, setPaperclipCost] = useState(game.paperclipCost);
  const [fundsAvailable, setFundsAvailable] = useState(game.fundsAvailable);

  const makePaperclips = () => {
    setPaperclips((prev) => prev + 1);
    setUnsoldInventory((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      makePaperclips();
    }, 1e3);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ratio = 2;
    if (unsoldInventory > ratio) {
      const newInventory = fundsAvailable - ratio;
      setUnsoldInventory(newInventory);
      setFundsAvailable(newInventory * paperclipCost);
    }
  }, [unsoldInventory]);

  return (
    <div>
      <div onClick={makePaperclips}>paperclip {paperclips}</div>
      <div>unsoldInventory {unsoldInventory}</div>
    </div>
  );
}

export default ManufacturingComponent;
