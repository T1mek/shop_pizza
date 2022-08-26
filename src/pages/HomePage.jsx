import React from "react";
import axios from "axios";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/index";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { SearchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId,setPageCount } from "../redux/slices/filterSlice";

const HomePage = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const selection = useSelector((state) => state.filter.sort.sortProperty);
  const pageCount= useSelector((state)=> state.filter.pageCount)

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [currentPage, setCurrentPage] = React.useState(1);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onClickPage = (number)=>{
    dispatch(setPageCount(number))
  }

  React.useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://62c5602fa361f72512824193.mockapi.io/pizza?page=${pageCount}&limit=4&
  }sortBy=${selection}${searchValue ? `&search${searchValue}` : ""}&order=desc`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    window.scroll(0, 0);
  }, [categoryId, selection,searchValue, pageCount]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeIndex={categoryId}
          setActiveIndex={(id) => onClickCategory(id)}
        />
        <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((obj) => {
                if (obj.title.toLowerCase().includes(searchValue.toLowerCase()))
                  return true;
                return false;
              })
              .map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={onClickPage} />
    </div>
  );
};

export default HomePage;
