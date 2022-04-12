import React from 'react';
// import './../App.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-fluid">
        <NavLink exact to="/" className="link goto-home">
          <i className="ion-home text-white"></i>
        </NavLink>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav w-100">
            <ul className="nav-menu list-unstyled mb-0 list-inline">
              <li className="list-inline-item m-0">
                <NavLink to="/resume" className="display-centery px-4 nav-item nav-link" activeClassName="nav-menu-active">
                  Resume
                </NavLink>
              </li>
              <li className="list-inline-item m-0">
                <NavLink to="/portfolio" className="display-centery px-4 nav-item nav-link" activeClassName="nav-menu-active">
                  Portfolio
                </NavLink>
              </li>
              {/* <li className="list-inline-item m-0">
                <NavLink to="/blog" className="display-centery px-4 nav-item nav-link visible-md pt-2" activeClassName="nav-menu-active">
                  Blog
                </NavLink>
              </li> */}
              <li className="list-inline-item m-0">
                <NavLink to="/contact" className="display-centery px-4 nav-item nav-link visible-md pt-2" activeClassName="nav-menu-active">
                  Contact
                </NavLink>
              </li>
            </ul>
              <hr/>
            <div className="social-menu form-inline ml-auto">
              <ul className="list-unstyled mb-0 list-inline social-icons">
                <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://facebook.com/dota500"><i className="ion-social-facebook"></i></a></li>
                <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://github.com/herndev"><i className="ion-social-github"></i></a></li>
                <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/herndev"><i className="ion-social-twitter"></i></a></li>
                <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://instagram.com/hern.dev"><i className="ion-social-instagram"></i></a></li>
              </ul>
              <a href="https://ko-fi.com/herndev" target="_" className="btn btn-success m-2 font-weight-bold crv-25 px-3">Support Me</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;