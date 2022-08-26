import React from "react";
import style from "./Search.module.scss";
import lupa from "../../assets/img/search.png";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();
  const {  setSearchValue } = React.useContext(SearchContext);

  const onClickClear = () => {
    setSearchValue("");
    setValue("")
    inputRef.current.focus();
  };

  
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str)
    },250),
    [],
  );
  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={style.root}>
      <img className={style.item} src={lupa} alt="Search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={style.input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={style.close}
          height="12px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="12px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
