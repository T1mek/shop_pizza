import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

import Skeleton from "../components/PizzaBlock/Skeleton";

const HomePage = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(
    () =>{
      fetch("https://62c5602fa361f72512824193.mockapi.io/pizza")
        .then((res) => res.json())
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        })},
    []
  );

  return (
    <div>
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
  );
};

export default HomePage;