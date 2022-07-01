import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coins from "./containers/Coins";
import Coin from "./containers/Coin";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:coinId/*" element={<Coin />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
