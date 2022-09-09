import React from "react";


type ICategories={
  setActiveIndex:(i:number)=> void,
  activeIndex: number,
}

const Categories:React.FC<ICategories> = ({setActiveIndex,activeIndex}) => {
  
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];


  return (
    <div className="categories">
      <ul>
      {categories.map((value, i) => (
          <li key={i}
            onClick={() =>  setActiveIndex(i)}
            className={activeIndex === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
