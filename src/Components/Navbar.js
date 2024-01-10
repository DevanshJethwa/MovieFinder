import React from 'react'
// import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode =="dark" ? "light" : "dark"} bg-${props.mode ? "light" : "dark"}`}>
        <div className="container-fluid">
          <a className={`navbar-brand fs-4 fw-semibold text-${props.mode ? "dark" :"light"}`} href="#">
            Movie<i className="bi bi-search text-primary"></i>Finder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto fs-5">
              <li className="nav-item mx-md-3 mx-0">
                <a className={`nav-link active text-${props.mode ? "dark" :"light"}`} aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* <li className="nav-item mx-md-3 mx-0">
                <a className={`nav-link active text-${props.mode ? "dark" :"light"}`} href="about">
                  About
                </a>
              </li>
              <li className="nav-item mx-md-3 mx-0">
                <a className={`nav-link active text-${props.mode ? "dark" :"light"}`} href="#">
                  Suggest us
                </a>
              </li> */}
            </ul>
            <div className="form-check form-switch d-flex align-items-center">
              <input
                className="form-check-input fs-6"
                type="checkbox"
                id="flexSwitchCheckChecked" onChange={props.func}
              />
              <label
                className={`form-check-label me-3 ms-2 fs-5 text-${props.mode ? "dark" :"light"}`}
                for="flexSwitchCheckChecked"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar