import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <nav className="navbar is-black">
    <div className="navbar-brand">
      <a
        className="navbar-item"
        href="https://bulma.io"
        style={{
          fontFamily: 'Open Sans',
          fontWeight: '700',
          textTransform: 'uppercase',
        }}
      >
        Luise Bosquê
      </a>
      <div
        className="navbar-burger burger"
        data-target="navbarExampleTransparentExample"
      >
        <span />
        <span />
        <span />
      </div>
    </div>

    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="https://bulma.io/">
          Capa
        </a>
        <a className="navbar-item" href="https://bulma.io/">
          Contato
        </a>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
