export const produceRatio = (productionBonus: number, publicDemand: number): number => {
  const publicDemandLimit =
    publicDemand >= 0.75 ? 1 : publicDemand >= 0.5 ? 0.5 : publicDemand >= 0.25 ? 0.25 : 0.125;
  return productionBonus * publicDemandLimit;
};
