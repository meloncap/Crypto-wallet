import {
  getCryptoFromWallet,
  addCryptoToWallet,
  removeCryptoFromWallet,
  setWalletNewPrice,
} from "../../services/wallet.service";
import { SET_WALLET } from "../reducers/walletReducer";

export const getWallet = () => {
  return (dispatch) => {
    const wallet = getCryptoFromWallet();
    return dispatch({
      type: SET_WALLET,
      wallet: wallet,
    });
  };
};

export const setWalletPrice = (cryptoArr, removeFlag) => {
  return (dispatch) => {
    const walletWithPrice = setWalletNewPrice(cryptoArr, removeFlag);
    return dispatch({
      type: SET_WALLET,
      wallet: walletWithPrice,
    });
  };
};

export const addCrypto = (cryptoSelected, cryptoAmount, price) => {
  return (dispatch) => {
    const wallet = addCryptoToWallet(cryptoSelected, cryptoAmount, price);
    return dispatch({
      type: SET_WALLET,
      wallet: wallet,
      amount: cryptoAmount,
    });
  };
};

export const removeCrypto = (cryptoName) => {
  return (dispatch) => {
    const wallet = removeCryptoFromWallet(cryptoName);
    return dispatch({
      type: SET_WALLET,
      wallet: wallet,
    });
  };
};
