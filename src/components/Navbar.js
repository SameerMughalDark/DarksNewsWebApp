import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar bg-warning  navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Darks NewsApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px;"}}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
    )
  }
}


