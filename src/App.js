import React, { Component } from 'react';
import './App.css';
import spinner from './spinner.svg';
import Newsfeeds from './components/Newsfeeds';
import Pagination from './components/Pagination';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       data: [],
       currentPage: 1,
       newsPerPage: 5,
       isLoading: true
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews() {
    fetch("https://api.hnpwa.com/v0/news/1.json")
    .then((response) => response.json())
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
    .catch((error) => {
      console.error("Error: ", error);
    });
  }

  paginate = (currentPage) => {
    this.setState({ currentPage })
  }

  render() {
    const {data, currentPage, newsPerPage, isLoading} = this.state
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = data.slice(indexOfFirstNews, indexOfLastNews)

    return (
      <div>
        <h1 className="text-center" text="dark">News Feeds</h1>
        {isLoading ? (
            <div className="text-center">
              <img src={ spinner } alt="logo" className="App-Spinner" />
            </div>
            )
            :(
              <div>
              <Pagination
              newsPerPage = { newsPerPage }
              totalNews = { data.length }
              currentPage = { currentPage }
              paginate = { this.paginate }>
            </Pagination>

            <div className="bg-dark">
              <Newsfeeds data = { currentNews }/>
            </div>

            <Pagination
              newsPerPage = { newsPerPage }
              totalNews = { data.length }
              currentPage = { currentPage }
              paginate = { this.paginate }>
            </Pagination>
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
