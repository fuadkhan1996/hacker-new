import React from 'react'
import Pagination from '../Pagination'
import spinner from '../../spinner.svg'
import './News.css'
import DisplayRecords from '../DisplayRecords'

const News = (props) => {
  return (
    <div>
      <div className="news-container">
        { props.isLoading ? (
          <div className="text-center">
            <img src={ spinner } alt="logo" className="App-Spinner" />
          </div>
          )
          :(
            <div className="col-md-12">
              <DisplayRecords data = { props.currentNews }/>

              <Pagination
                newsPerPage = { props.newsPerPage }
                totalNews = { props.news.length }
                currentPage = { props.currentPage }
                paginate = { props.paginate }>
              </Pagination>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default News
