import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RoutesComponent from "./routes";
import { getCryptoFromApi } from "./redux/actions/cryptoDataAction";
import { setWalletPrice } from "./redux/actions/walletAction";
import "./styles.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCryptoFromApi());
  }, []);

  const crypto = useSelector((state) => state.crypto.crypto);

  useEffect(() => {
    if (crypto?.length > 0) {
      dispatch(setWalletPrice(crypto));
    }
  }, [crypto]);

  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;
