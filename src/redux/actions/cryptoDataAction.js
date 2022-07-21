import { SET_CRYPTO } from "../reducers/cryptoDataReducer";

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
