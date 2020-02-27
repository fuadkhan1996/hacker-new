import React from 'react'
import { Pagination as  ReactBootstrapPagination  } from 'react-bootstrap'

const Pagination = ({newsPerPage, totalNews, currentPage, paginate}) => {
  const pageNumbers = [];
  for (let number = 1; number <= Math.ceil(totalNews / newsPerPage); number++) {
    pageNumbers.push(number);
  }

  return (
    <div>
      <ReactBootstrapPagination className="justify-content-center mt-4">
        { pageNumbers.map(pageNumber =>
            <ReactBootstrapPagination.Item
              key = { pageNumber }
              active = { pageNumber === currentPage }
              onClick = {() => paginate(pageNumber)}>{ pageNumber }
            </ReactBootstrapPagination.Item>
          )
        }
      </ReactBootstrapPagination>
    </div>
  )
}

export default Pagination
