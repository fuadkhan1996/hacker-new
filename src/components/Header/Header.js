import React from 'react'
import { Container, Button} from 'react-bootstrap'
import header_logo from '../../header-logo.png'
import './Header.css'

const Header = (props) => {
  return (
    <nav className="navbar fixed-top bg-warning">
      <Container>
        <span className="navbar-brand">
          <img src={ header_logo } alt="logo" className="header-logo" />
          <span className="font-weight-bold align-middle ml-2"> Hacker News Feeds</span>
        </span>

        <span className="navbar-brand">
          <Button
            className={ `${ props.pressedBtnText === "News" ? 'text-white font-weight-bold' : 'text-dark' }` }
            variant="link"
            onClick={ () => props.handleClick("https://api.hnpwa.com/v0/news/1.json", "News") }>
            News
          </Button>

          <Button
            className={ `ml-2 ${ props.pressedBtnText === "Newest" ? 'text-white font-weight-bold' : 'text-dark' }` }
            variant="link"
            onClick={() => props.handleClick("https://api.hnpwa.com/v0/newest/1.json", "Newest") }>
            Newest
          </Button>

          <Button
            className={ `ml-2 ${ props.pressedBtnText === "Ask" ? 'text-white font-weight-bold' : 'text-dark' }` }
            variant="link"
            onClick={() => props.handleClick("https://api.hnpwa.com/v0/ask/1.json", "Ask") }>
            Ask
          </Button>

          <Button
            className={ `ml-2 ${ props.pressedBtnText === "Show" ? 'text-white font-weight-bold' : 'text-dark' }` }
            variant="link"
            onClick={() => props.handleClick("https://api.hnpwa.com/v0/show/1.json", "Show") }>
            Show
          </Button>

          <Button
            className={ `ml-2 ${ props.pressedBtnText === "Jobs" ? 'text-white font-weight-bold' : 'text-dark' }` }
            variant="link"
            onClick={() => props.handleClick("https://api.hnpwa.com/v0/jobs/1.json", "Jobs") }>
            Jobs
          </Button>
        </span>
      </Container>
    </nav>
  )
}

export default Header
