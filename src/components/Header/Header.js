import React from 'react'
import { Container } from 'react-bootstrap'
import header_logo from '../../header-logo.png'
import './Header.css'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="nav-box">
      <nav className="navbar fixed-top bg-warning">
        <Container>
          <span className="navbar-brand">
            <img src={ header_logo } alt="logo" className="header-logo" />

            <NavLink
              to="/"
              className="font-weight-bold align-middle ml-2 text-dark text-decoration-none"> Hacker News Feeds
            </NavLink>
          </span>

          <span className="navbar-brand">
            <NavLink
              to="/news"
              className={ `header-btn ${ (pathname === "/news" || pathname === "/") ? 'text-white font-weight-bold underline' : 'text-dark' }` }>
              News
            </NavLink>

            <NavLink
              to="/newest"
              activeClassName="font-weight-bold underline"
              className={ `header-btn ml-4 ${ pathname === "/newest" ? 'text-white' : 'text-dark' }` }>
              Newest
            </NavLink>

            <NavLink
              to="/ask"
              activeClassName="font-weight-bold underline"
              className={ `header-btn ml-4 ${ pathname === "/ask" ? 'text-white' : 'text-dark' }` }>
              Ask
            </NavLink>

            <NavLink
              to="/show"
              activeClassName="font-weight-bold underline"
              className={ `header-btn ml-4 ${ pathname === "/show" ? 'text-white' : 'text-dark' }` }>
              Show
            </NavLink>

            <NavLink
              to="/jobs"
              activeClassName="font-weight-bold underline"
              className={ `header-btn ml-4 ${ pathname === "/jobs" ? 'text-white' : 'text-dark' }` }>
              Jobs
            </NavLink>
          </span>
        </Container>
      </nav>
    </div>
  )
}

export default Header
