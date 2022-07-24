import { formatCryptoData, formatCryptoHistoryArr } from "../../services";
import {
  SET_CRYPTO,
  SET_CRYPTO_HISTORY,
  SET_SELECTED_CRYPTO,
  SET_SELECTED_CRYPTO_ERROR,
} from "../reducers/cryptoDataReducer";

export const getCryptoFromApi = () => {
  return async (dispatch) => {
    try {
      await fetch("https://api.coincap.io/v2/assets")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch({
            type: SET_CRYPTO,
            crypto: data?.data,
          });
        });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getSelectedCryptoFromApi = (cryptoId) => {
  return async (dispatch) => {
    try {
      await fetch(`https://api.coincap.io/v2/assets/${cryptoId}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch({
            type: SET_SELECTED_CRYPTO,
            selectedCrypto: formatCryptoData(data?.data),
          });
        });
    } catch (error) {
      console.error(error);
      dispatch(changeSelectedCryptoErrorState(true));
    }
  };
};

export const changeSelectedCryptoErrorState = (payload) => ({
  type: SET_SELECTED_CRYPTO_ERROR,
  error: payload,
});

export const getCryptoHistory = (payload) => {
  return async (dispatch) => {
    try {
      await fetch(
        `https://api.coincap.io/v2/assets/${payload}/history?interval=d1`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch({
            type: SET_CRYPTO_HISTORY,
            cryptoHistory: formatCryptoHistoryArr(data?.data),
          });
        });
    } catch (error) {
      console.error(error);
    }
  };
};
