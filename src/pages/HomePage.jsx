import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

import Skeleton from "../components/PizzaBlock/Skeleton";

const HomePage = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [selection, setSelection] = React.useState({
    name: "популярность",
    sort: "rating",
  });
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62c5602fa361f72512824193.mockapi.io/pizza?${
        activeIndex > 0 ? `categories=${activeIndex}` : ""
      }&sortBy=${selection.sort}&order=desc`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [activeIndex, selection]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeIndex={activeIndex}
          setActiveIndex={(id) => setActiveIndex(id)}
        />
        <Sort selection={selection} setSelection={(id) => setSelection(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default HomePage;
