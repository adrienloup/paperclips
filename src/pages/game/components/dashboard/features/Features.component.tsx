// import { useEffect } from 'react';
// import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
// import { useNoticesDispatch } from '@/src/pages/game/components/dashboard/notices/useNotices.ts';
// import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
// // import * as FeatureHooks from '@/src/pages/game/components/dashboard/features/useFeatures.ts';
// // import * as ProjectHooks from '@/src/pages/game/components/dashboard/projects/useProjects.ts';
//
// /*
//  * Manufacturing
//  * + paperclip
//  * + wire
//  * + machine / Effet megaMachine
//  * + megaMachine: Exigence 75 machines
//  * + paperclipPerSecond
//  * Business
//  * + funds
//  * + unsoldInventory
//  * + publicDemand
//  * + marketing
//  * Resources
//  * + trust
//  * + memory
//  * + processor
//  * + operation
//  * + creativity
//  * Projects
//  * + revTracker / Effet paperclipPerSecond
//  * + Beg for More Wire: Exigence 3 TRUSTS / Coût 250 OP / Effet wire 1K
//  * + Improved Extrusion Wire: Exigence 3K PA / Coût 1700 OP / Effet wire 10K
//  * + Optimized Wireframe Extrusion: Exigence 1500 wire / Coût 3500 OP / Effet wire 1M
//  * + WireBuyer: Exigence 10 TRUSTS / Coût 7000 OP / Effet achats automatiquement de wire lorsque stock 0
//  * + New Slogan: Exigence 3K PAP / Coût 25 CREA 500 OP / Effet unsoldInventory x2
//  * + Attractive Jingle: Exigence 3500 PAP / Coût 45 CREA 500 OP / Effet unsoldInventory x4
//  * + Hypno Harmonics: Exigence 4K PAP / Coût 7500 OP / Effet unsoldInventory x6
//  * + Hostile Takeover: Exigence 5K PAP / Coût 1M $ / Effet unsoldInventory x8
//  * + The complete Monopoly: Exigence 6K PAP / Coût 10M $ / Effet unsoldInventory x10
//  * + AdReset
//  * */
//
// export const FeaturesComponent = () => {
//   const game = useGame();
//   const setGame = useGameDispatch();
//   const setNotices = useNoticesDispatch();
//   const setAlerts = useAlertsDispatch();
//
//   // const setFeatures = FeatureHooks.useFeaturesDispatch();
//   // const features = FeatureHooks.useFeatures();
//   // const setProjects = ProjectHooks.useProjectsDispatch();
//   // const projects = ProjectHooks.useProjects();
//   //
//   // const enabledFeature = (id: string, text: string) => {
//   //   setFeatures({ type: 'ENABLED', feature: id });
//   //   setNotices({ type: 'ENABLED', id });
//   //   setAlerts({ type: 'ADD', alert: { id, text } });
//   // };
//   //
//   // const enabledProject = (id: string, text: string) => {
//   //   setProjects({ type: 'ENABLED', id });
//   //   setNotices({ type: 'ENABLED', id });
//   //   setAlerts({ type: 'ADD', alert: { id, text } });
//   // };
//   //
//   // const unlockedProject = (id: string) => {
//   //   setProjects({ type: 'UNLOCKED', id });
//   // };
//   //
//   // // paperclip, wire, funds, unsoldInventory, publicDemand
//   //
//   // // machine
//   // useEffect(() => {
//   //   const enabledMachine = game.funds >= 5 && !features.machine;
//   //   if (enabledMachine) {
//   //     enabledFeature('machine', 'test machine');
//   //   }
//   // }, [game.funds, features.machine]);
//   //
//   // // marketing
//   // useEffect(() => {
//   //   const enabledMarketing = game.funds >= 200 && !features.marketing;
//   //   if (enabledMarketing) {
//   //     enabledFeature('marketing', 'test marketing');
//   //   }
//   // }, [game.funds, features.marketing]);
//   //
//   // // trust, memory, processor, operation, creativity
//   // useEffect(() => {
//   //   const enabledResources = game.paperclip >= 2e3 && !features.resources;
//   //   if (enabledResources) {
//   //     setFeatures({ type: 'ENABLED', feature: 'resources' });
//   //     setNotices({ type: 'ENABLED', id: 'trust' });
//   //     setAlerts({ type: 'ADD', alert: { id: 'trust', text: 'test trust' } });
//   //     setNotices({ type: 'ENABLED', id: 'memory' });
//   //     setAlerts({ type: 'ADD', alert: { id: 'memory', text: 'test memory' } });
//   //     setNotices({ type: 'ENABLED', id: 'processor' });
//   //     setAlerts({ type: 'ADD', alert: { id: 'processor', text: 'test processor' } });
//   //     setNotices({ type: 'ENABLED', id: 'operation' });
//   //     setAlerts({ type: 'ADD', alert: { id: 'operation', text: 'test operation' } });
//   //     setNotices({ type: 'ENABLED', id: 'creativity' });
//   //     setAlerts({ type: 'ADD', alert: { id: 'creativity', text: 'test creativity' } });
//   //   }
//   // }, [game.paperclip, features.resources]);
//   //
//   // // revTracker (project locked)
//   // useEffect(() => {
//   //   const revTracker = projects.find((p) => p.id === 'revTracker');
//   //   const enabledRevTracker = game.paperclip >= 2e3 && !revTracker?.unlocked && !revTracker?.enabled;
//   //   if (enabledRevTracker) {
//   //     setNotices({ type: 'ENABLED', id: 'projects' });
//   //     enabledProject('revTracker', 'test revTracker');
//   //   }
//   // }, [game.paperclip, projects]);
//   //
//   // // revTracker (project unlocked)
//   // useEffect(() => {
//   //   const revTracker = projects.find((p) => p.id === 'revTracker');
//   //   const unlockedRevTracker = game.operation >= 500 && !revTracker?.unlocked && revTracker?.enabled;
//   //   if (unlockedRevTracker) {
//   //     unlockedProject('revTracker');
//   //   }
//   // }, [game.operation, projects]);
//   //
//   // // paperclipPerSecond
//   // useEffect(() => {
//   //   const revTracker = projects.find((p) => p.id === 'revTracker');
//   //   const enabledPaperclipPerSecond = revTracker?.unlocked && !revTracker?.enabled && !features.paperclipPerSecond;
//   //   if (enabledPaperclipPerSecond) {
//   //     setFeatures({ type: 'ENABLED', feature: 'paperclipPerSecond' });
//   //     setAlerts({ type: 'ADD', alert: { id: 'paperclipPerSecond', text: 'paperclipPerSecond' } });
//   //   }
//   // }, [projects, features.paperclipPerSecond]);
//   //
//   // // megaMachine
//   // useEffect(() => {
//   //   const enabledMegaMachine = game.machine >= 75 && !features.megaMachine;
//   //   if (enabledMegaMachine) {
//   //     enabledFeature('megaMachine', 'test megaMachine');
//   //   }
//   // }, [game.machine, features.megaMachine]);
//   //
//   // // algorithmicTrading (project locked)
//   useEffect(() => {
//     const algorithmicTrading = projects.find((p) => p.id === 'algorithmicTrading');
//     const enabledAlgorithmicTrading = game.trust >= 8 && !algorithmicTrading?.unlocked && !algorithmicTrading?.enabled;
//     if (enabledAlgorithmicTrading) {
//       enabledProject('algorithmicTrading', 'test algorithmicTrading');
//     }
//   }, [game.trust, projects]);
//   //
//   // // algorithmicTrading (project unlocked)
//   useEffect(() => {
//     const algorithmicTrading = projects.find((p) => p.id === 'algorithmicTrading');
//     const unlockedAlgorithmicTrading =
//       game.operation >= 1e4 && !algorithmicTrading?.unlocked && algorithmicTrading?.enabled;
//     if (unlockedAlgorithmicTrading) {
//       unlockedProject('algorithmicTrading');
//     }
//   }, [game.operation, projects]);
//   //
//   // // investments
//   // useEffect(() => {
//   //   const algorithmicTrading = projects.find((p) => p.id === 'algorithmicTrading');
//   //   const enabledInvestments = algorithmicTrading?.unlocked && !algorithmicTrading?.enabled && !features.investments;
//   //   if (enabledInvestments) {
//   //     enabledFeature('investments', 'test investments');
//   //   }
//   // }, [projects, features.investments]);
//   //
//   // // begForMoreWire (project locked)
//   // useEffect(() => {
//   //   const begForMoreWire = projects.find((p) => p.id === 'begForMoreWire');
//   //   const enabledBegForMoreWire = game.trust >= 3 && !begForMoreWire?.unlocked && !begForMoreWire?.enabled;
//   //   if (enabledBegForMoreWire) {
//   //     enabledProject('begForMoreWire', 'test begForMoreWire');
//   //   }
//   // }, [game.trust, projects]);
//   //
//   // // begForMoreWire (project unlocked)
//   // useEffect(() => {
//   //   const begForMoreWire = projects.find((p) => p.id === 'begForMoreWire');
//   //   const unlockedBegForMoreWire = game.operation >= 5e2 && !begForMoreWire?.unlocked && begForMoreWire?.enabled;
//   //   if (unlockedBegForMoreWire) {
//   //     unlockedProject('begForMoreWire');
//   //   }
//   // }, [game.operation, projects]);
//   //
//   // // wire bonus
//   // useEffect(() => {
//   //   const begForMoreWire = projects.find((p) => p.id === 'begForMoreWire');
//   //   const enabledWirebonus = begForMoreWire?.unlocked && !begForMoreWire?.enabled;
//   //   if (enabledWirebonus) {
//   //     setGame({ type: 'UPDATE_WIRE_BONUS', value: 1e3 });
//   //   }
//   // }, [projects, features.investments]);
//
//   return <></>;
// };
