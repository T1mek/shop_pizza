import Header from "./components/Header";
import "./scss/app.scss";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import React from "react";
import Skeleton from "./components/PizzaBlock/Skeleton";
function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(
    () =>
      fetch("https://62c5602fa361f72512824193.mockapi.io/pizza")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setItems(json);
          setIsLoading(false)
        }),
    []
  );

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            {/* {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
