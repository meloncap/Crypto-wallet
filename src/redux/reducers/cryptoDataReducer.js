const defaultState = {
  crypto: [],
  isLoading: true,
};

export const SET_CRYPTO = "SET_CRYPTO";

export const cryptoDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CRYPTO:
      return { ...state, crypto: action.crypto, isLoading: false };

    default:
      return state;
  }
};
