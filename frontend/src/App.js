import React from "react";
import Topbar from "./components/topbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./pages/homePage";
import ProductScreen from "./pages/productScreen";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Topbar />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
