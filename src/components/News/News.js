import React, { useState, useEffect } from 'react'
import Pagination from '../Pagination'
import spinner from '../../spinner.svg'
import './News.css'
import DisplayRecords from '../DisplayRecords'
import { useLocation } from 'react-router-dom'

const News = () => {
  let { pathname } = useLocation();
  const [news, setNews] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [newsPerPage, setNewsPerPage] = useState(10)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setCurrentPage(1)
    getNews(`https://api.hnpwa.com/v0${(pathname === '/') ? '/news' : pathname}/1.json`)
  }, [pathname])

  const getNews = (url) => {
    fetch(url)
    .then((response) => response.json())
      .then((news) => {
        setNews(news);
        setIsLoading(false);
      })
    .catch((error) => {
      setIsLoading(false);
      console.error("Error: ", error);
    });
  }

  const paginate = (currentPage) => {
    setCurrentPage(currentPage)
  }

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews)
  return (
    <div>
      <div className="news-container">
        { isLoading ? (
          <div className="text-center">
            <img src={ spinner } alt="logo" className="App-Spinner" />
          </div>
          )
          :(
            <div className="col-md-12">
              <DisplayRecords data = { currentNews }/>

              <Pagination
                newsPerPage = { newsPerPage }
                totalNews = { news.length }
                currentPage = { currentPage }
                paginate = { paginate }>
              </Pagination>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default News
