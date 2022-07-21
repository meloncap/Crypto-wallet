const loadWallet = () => {
  return JSON.parse(localStorage.getItem("crypto") ?? "{}");
};
const saveWallet = (cryptoWallet) => {
  localStorage.setItem("crypto", JSON.stringify(cryptoWallet));
};

export const addCryptoToWallet = (cryptoName, cryptoAmount) => {
  let cryptoWallet = loadWallet();

  if (cryptoWallet.hasOwnProperty(cryptoName)) {
    cryptoWallet[cryptoName] += +cryptoAmount;
  } else {
    cryptoWallet[cryptoName] = +cryptoAmount;
  }

  saveWallet(cryptoWallet);
  return cryptoWallet;
};

export const removeCryptoFromWallet = (cryptoName) => {
  let cryptoWallet = loadWallet();

  delete cryptoWallet[cryptoName];

  saveWallet(cryptoWallet);
  return cryptoWallet;
};

export const getCryptoFromWallet = () => {
  return loadWallet();
};
