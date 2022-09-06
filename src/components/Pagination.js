import React from 'react';
import {Link} from 'react-router-dom'
import { usePagination, DOTS } from '../helpers/usePagination';

const Pagination =  (props) => {

const {totalCount, currentPage, pageSize, siblingCount } = props;

const paginationRange = usePagination({
  currentPage,
  totalCount,
  siblingCount,
  pageSize
});

console.log(paginationRange)
return (
  <nav aria-label='pagination'>
    <ul>
      <li>
        <Link>Previous</Link>
      </li>
    </ul>

  </nav>
)
}

export default Pagination;