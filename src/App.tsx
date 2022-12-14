import "./scss/app.scss";
import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import BasketPage from "./pages/BasketPage";
import NotFound from "./pages/NotFound";
import FullPizza from "./pages/FullPizza";

const App:React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="content__top">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/pizza/:id" element={<FullPizza />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
