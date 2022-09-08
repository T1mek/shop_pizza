import React from "react";
import style from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

type IPagination = {
  onChangePage: any;
};

const Pagination: React.FC<IPagination> = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(ev) => onChangePage(ev.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
    />
  );
};

export default Pagination;
