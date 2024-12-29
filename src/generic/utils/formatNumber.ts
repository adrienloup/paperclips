export const formatNumber = (
  number: number,
  min: number = 0,
  max: number = 1,
  locales: string = 'en-US'
) =>
  number.toLocaleString(locales, {
    minimumFractionDigits: min,
    maximumFractionDigits: max,
    notation: 'compact',
    compactDisplay: 'short',
  });
