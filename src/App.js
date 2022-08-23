import "./scss/app.scss";
import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import BasketPage from "./pages/BasketPage";
import NotFound from "./pages/NotFound";


export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
    
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="content__top">
            <Routes>
              <Route
                path="/"
                element={<HomePage searchValue={searchValue} />}
              />
              <Route path="/basket" element={<BasketPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
