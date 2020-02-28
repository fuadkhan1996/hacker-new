import React, { Component } from 'react'
import Pagination from '../Pagination'
import spinner from '../../spinner.svg'
import { Button, Container } from 'react-bootstrap'
import DisplayRecords from '../DisplayRecords'

class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
       data: [],
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
      .then((data) => {
        this.setState({ data, isLoading: false });
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
    const {data, currentPage, newsPerPage, isLoading, pressedBtnText} = this.state
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = data.slice(indexOfFirstNews, indexOfLastNews)

    return (
      <div>
        <Container className="bg-warning mt-2">
          <span className="font-weight-bold align-middle">News Feeds</span>

          <Button
            className={ `${ pressedBtnText === "News" ? 'text-white' : 'text-dark' }` }
            variant="link"
            onClick={ () => this.handleClick("https://api.hnpwa.com/v0/news/1.json", "News") }>
            News
          </Button>

          <Button
            className={ `ml-2 ${ pressedBtnText === "Newest" ? 'text-white' : 'text-dark' }` }
            variant="link"
            onClick={() => this.handleClick("https://api.hnpwa.com/v0/newest/1.json", "Newest") }>
            Newest
          </Button>

          <Button
            className={ `ml-2 ${ pressedBtnText === "Ask" ? 'text-white' : 'text-dark' }` }
            variant="link"
            onClick={() => this.handleClick("https://api.hnpwa.com/v0/ask/1.json", "Ask") }>
            Ask
          </Button>

          <Button
            className={ `ml-2 ${ pressedBtnText === "Show" ? 'text-white' : 'text-dark' }` }
            variant="link"
            onClick={() => this.handleClick("https://api.hnpwa.com/v0/show/1.json", "Show") }>
            Show
          </Button>

          <Button
            className={ `ml-2 ${ pressedBtnText === "Jobs" ? 'text-white' : 'text-dark' }` }
            variant="link"
            onClick={() => this.handleClick("https://api.hnpwa.com/v0/jobs/1.json", "Jobs") }>
            Jobs
          </Button>
        </Container>

        { isLoading ? (
          <div className="text-center">
            <img src={ spinner } alt="logo" className="App-Spinner" />
          </div>
          )
          :(
            <div>
              <div className="">
                <DisplayRecords data = { currentNews }/>
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

export default News
