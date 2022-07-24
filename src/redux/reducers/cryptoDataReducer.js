const defaultState = {
  crypto: [],
  selectedCrypto: [],
  selectedCryptoError: false,
  cryptoHistory: [],
  isLoading: true,
};

export const SET_CRYPTO = "SET_CRYPTO";
export const SET_CRYPTO_HISTORY = "SET_CRYPTO_HISTORY";
export const SET_SELECTED_CRYPTO = "SET_SELECTED_CRYPTO";
export const SET_SELECTED_CRYPTO_ERROR = "SET_SELECTED_CRYPTO_ERROR";

export const cryptoDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CRYPTO:
      return { ...state, crypto: action.crypto, isLoading: false };

    case SET_SELECTED_CRYPTO:
      return {
        ...state,
        selectedCrypto: action.selectedCrypto,
        isLoading: false,
      };

    case SET_SELECTED_CRYPTO_ERROR:
      return {
        ...state,
        selectedCryptoError: action.error,
      };

    case SET_CRYPTO_HISTORY:
      return {
        ...state,
        cryptoHistory: action.cryptoHistory,
        isLoading: false,
      };

    default:
      return state;
  }
};
