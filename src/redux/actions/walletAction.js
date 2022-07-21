import {
  getCryptoFromWallet,
  addCryptoToWallet,
  removeCryptoFromWallet,
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

export const addCrypto = (cryptoSelected, cryptoAmount) => {
  return (dispatch) => {
    const wallet = addCryptoToWallet(cryptoSelected, cryptoAmount);
    return dispatch({
      type: SET_WALLET,
      wallet: wallet,
    });
  };
};

export const removeCrypto = (cryptoSelected) => {
  return (dispatch) => {
    const wallet = removeCryptoFromWallet(cryptoSelected);
    return dispatch({
      type: SET_WALLET,
      wallet: wallet,
    });
  };
};
