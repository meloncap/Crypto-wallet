const defaultState = {
  wallet: [],
};

export const SET_WALLET = "SET_WALLET";

export const walletDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_WALLET:
      return { ...state, wallet: action.wallet };

    default:
      return state;
  }
};
