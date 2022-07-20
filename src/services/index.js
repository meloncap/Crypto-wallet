export const formatNumber = (number, pow = 0) => {
  return (Number(number) / Math.pow(10, pow)).toFixed(2);
};
