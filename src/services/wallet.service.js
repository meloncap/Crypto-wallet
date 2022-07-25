const initialCrypto = {
  price: 0,
  previousPrice: 0,
};

export const setWalletNewPrice = (cryptoArr, removeFlag) => {
  let wallet = loadWallet();
  wallet.previousPrice = wallet.price;
  wallet.price = 0;
  cryptoArr.map((crypt) => {
    crypt.priceUsd = Number(crypt.priceUsd).toFixed(2);
    Object.keys(wallet).map((walletItem) => {
      if (crypt.name === walletItem) {
        if (removeFlag) {
          wallet.price = Number(wallet.previousPrice);
          wallet.price -= +wallet[walletItem] * +crypt.priceUsd;
        } else {
          wallet.price += +wallet[walletItem] * +crypt.priceUsd;
        }
      }
    });
  });

  saveWallet(wallet);
  return wallet;
};

const loadWallet = () => {
  return JSON.parse(
    localStorage.getItem("crypto") ?? JSON.stringify(initialCrypto)
  );
};
const saveWallet = (cryptoWallet) => {
  localStorage.setItem("crypto", JSON.stringify(cryptoWallet));
};

export const addCryptoToWallet = (cryptoName, cryptoAmount, price) => {
  let cryptoWallet = loadWallet();

  if (cryptoWallet.hasOwnProperty(cryptoName)) {
    cryptoWallet[cryptoName] += +cryptoAmount;
  } else {
    cryptoWallet[cryptoName] = +cryptoAmount;
  }
  cryptoWallet.price += +cryptoAmount * +price;

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
