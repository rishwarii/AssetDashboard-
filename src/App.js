import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AssetList from "./pages/list/AssetList";
import Single from "./pages/single/Single";
import Assets from "./Assets";
import Maps from "./components/map/Map.jsx";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="assetList">
              <Route index element={<AssetList />} />
              <Route
                path=":assetSerialNumber/:assetName"
                element={<Single />}
              />
              {/* this is where we route for page */}
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<AssetList />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
