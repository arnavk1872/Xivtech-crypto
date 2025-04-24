
export const generateRandomPriceChange = () => {
  return (Math.random() - 0.5) * 0.002; // Generate changes between -0.1% and 0.1%
};

export const formatNumber = (num: number, decimals: number = 2): string => {
  if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(decimals)}B`;
  }
  if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(decimals)}M`;
  }
  return `$${num.toFixed(decimals)}`;
};

export const formatSupply = (num: number): string => {
  return `${num.toFixed(2)}M`;
};

export const formatPercentage = (num: number): string => {
  return `${num.toFixed(2)}%`;
};
