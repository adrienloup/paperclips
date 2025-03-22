export const getPrice = (price: number) => {
  const variation = (Math.random() - 0.5) * 10; // Plage 0, 1, décalé -0.5, 0.5, étendu -5, 5
  return Math.max(0, price + variation);
};

export const getVolume = (volume: number) => {
  const variation = Math.floor(Math.random() * 4500) + 500; // Plage 0, 1, 500, 5000
  return Math.max(0, volume + variation);
};

export const getInterval = () => Math.floor(Math.random() * 2000) + 1000; // Plage 0, 1, 1e3, 3e3
