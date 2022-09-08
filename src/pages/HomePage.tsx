import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/index";
import Skeleton from "../components/PizzaBlock/Skeleton";

import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setPageCount,
  selectSort,
} from "../redux/slices/filterSlice";

import { getPizza,pizzaAll } from "../redux/slices/pizzaslice";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { categoryId, sort, searchValue,pageCount } = useSelector(selectSort);
  
  const { items, status } = useSelector(pizzaAll);

  const onClickCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };
  const onClickPage = (number: number) => {
    dispatch(setPageCount(number));
  };

  React.useEffect(() => {
    const fetchPizzas = () => {
      const sortBy = sort.sortProperty.replace("-", "");

      const category = categoryId > 0 ? `category=${categoryId}` : "";
      const search = searchValue ? `&search=${searchValue}` : "";

      dispatch(
        //@ts-ignore
        getPizza({ pageCount, category, sortBy, search })
      );

      window.scroll(0, 0);
    };
    fetchPizzas();
  }, [categoryId, sort, searchValue, pageCount, dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeIndex={categoryId}
          setActiveIndex={(id: number) => onClickCategory(id)}
        />
        <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "error" ? (
          <div>
            <h2>Происзошла ошибка 😕</h2>
            <p>
              К сожалению , не удалось пиццы . Попробуйте повторить попытку
              позже.
            </p>
          </div>
        ) : status === "loading" ? (
          [...new Array(4)].map((_, index) => <Skeleton key={index} />)
        ) : (
          items
            .filter((obj: any) => {
              if (obj.title.toLowerCase().includes(searchValue.toLowerCase()))
                return true;
              return false;
            })
            .map((obj: any) => (
              <Link to={`/pizza/${obj.id}`} key={obj.id}>
                <PizzaBlock {...obj} />
              </Link>
            ))
        )}
      </div>
      <Pagination onChangePage={onClickPage} />
    </div>
  );
};

export default HomePage;
