import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Book App</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/">Books</Link></li>
            <li><Link to="/authors">Authors</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Header;