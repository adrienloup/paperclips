export const getPrice = (price: number) => {
  const variation = (Math.random() - 0.5) * 10; // Plage 0 et 1, décalé -0.5 et 0.5, étendu -5 et 5
  return Math.max(0, price + variation);
};

export const getVolume = (volume: number) => {
  const variation = Math.floor(Math.random() * 45e2) + 5e2; // Plage 0 et 1, étendu 500 et 5000
  return Math.max(0, volume + variation);
};

export const getInterval = () => Math.floor(Math.random() * 5e3) + 5e3; // Plage 0 et 1, étendu 5000 et 10000
