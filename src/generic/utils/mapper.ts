export function mapper(value: number, ranges: number[], results: number[]) {
  let min = 0;
  for (let i = 0; i < ranges.length; i++) {
    const max = ranges[i];
    if (value >= min && value <= max) {
      return results[i];
    }
    min = max + 1;
  }
  if (value > ranges[ranges.length - 1]) {
    return results[results.length - 1];
  }
  return results[0];
}
