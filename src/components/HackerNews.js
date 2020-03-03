import React, { Component } from 'react'
import News from './News/'
import Header from './Header/'

export default class HackerNews extends Component {
  constructor(props) {
    super(props)

    this.state = {
       news: [],
       currentPage: 1,
       newsPerPage: 10,
       isLoading: true,
       pressedBtnText: 'News'
    };
  }

  componentDidMount() {
    this.getNews("https://api.hnpwa.com/v0/news/1.json");
  }

  getNews(url) {
    fetch(url)
    .then((response) => response.json())
      .then((news) => {
        this.setState({ news, isLoading: false });
      })
    .catch((error) => {
      this.setState({ isLoading: false });
      console.error("Error: ", error);
    });
  }

  paginate = (currentPage) => {
    this.setState({ currentPage })
  }

  handleClick = (url, pressedBtnText) => {
    this.setState({ pressedBtnText, isLoading: true })
    this.getNews(url)
  }

  render() {
    const {news, currentPage, newsPerPage, pressedBtnText} = this.state
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews)

    return (
      <div>
        <Header
          pressedBtnText={pressedBtnText}
          handleClick={ this.handleClick }/>

        <News
          {...this.state}
          paginate={this.paginate}
          currentNews={currentNews} />
      </div>
    )
  }
}
