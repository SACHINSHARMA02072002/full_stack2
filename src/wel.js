import React from "react";

function Wel(){
    return (
        <div>
        <header>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Navbar */}
  {/* Hero */}
  <div className="p-5 text-center bg-light">
    <h1 className="mb-3">Hello , I am Sachin Sharma</h1>
    <h4 className="mb-3">Let's Shake hand with me for wonderful project</h4>
    <a className="btn btn-primary" href="" role="button">
      Call to action
    </a>
  </div>
  {/* Hero */}
</header>

        
        </div>
    )
};

export default Wel;