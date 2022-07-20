import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes";
import "./styles.scss";

function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;
