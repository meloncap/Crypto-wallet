export const formatNumber = (number, pow = 0) => {
  return (Number(number) / Math.pow(10, pow)).toFixed(2);
};

export const getSelectedCrypto = (cryptoName, cryptoArr) => {
  return cryptoArr.find((el) => el.id === cryptoName);
};

export const formatCryptoData = (crypto) => {
  let formattedCrypto = { ...crypto };
  formattedCrypto.priceUsd = formatNumber(crypto.priceUsd);
  formattedCrypto.symbol = crypto.symbol.toLowerCase();
  formattedCrypto.marketCapUsd = formatNumber(crypto.marketCapUsd, 9);
  formattedCrypto.vwap24Hr = formatNumber(crypto.vwap24Hr);
  formattedCrypto.supply = formatNumber(crypto.supply, 6);
  formattedCrypto.volumeUsd24Hr = formatNumber(crypto.volumeUsd24Hr, 9);
  formattedCrypto.changePercent24Hr = formatNumber(crypto.changePercent24Hr);
  return formattedCrypto;
};

export const formatCryptoHistoryArr = (cryptoHistoryArr) => {
  return cryptoHistoryArr
    .map((item) => {
      item.date = new Date(item.date);
      return item;
    })
    .slice(0, 30);
};
