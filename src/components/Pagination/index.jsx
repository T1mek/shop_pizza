import React from 'react'
import style from './Pagination.module.scss'
import ReactPaginate from "react-paginate";


const Pagination = ({onChangePage}) => {
  return (
    <ReactPaginate
      className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(ev) => onChangePage(ev.selected+1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
  )
}

export default Pagination