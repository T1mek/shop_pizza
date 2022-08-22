import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/index";
import Skeleton from "../components/PizzaBlock/Skeleton";

const HomePage = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selection, setSelection] = React.useState({
    name: "популярность",
    sort: "rating",
  });
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62c5602fa361f72512824193.mockapi.io/pizza?page=${currentPage}&limit=4&
      }sortBy=${selection.sort}${
        searchValue ? `&search${searchValue}` : ""
      }&order=desc`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [activeIndex, selection, searchValue, currentPage]);

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
          : items
              .filter((obj) => {
                if (obj.title.toLowerCase().includes(searchValue.toLowerCase()))
                  return true;
                return false;
              })
              .map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={(number)=>setCurrentPage(number)} />
    </div>
  );
};

export default HomePage;
