import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      {/* Preloader */}
      <div className="loader">
          <div className="d-table">
              <div className="d-table-cell">
                  <div className="pre-box-one">
                      <div className="pre-box-two"></div>
                  </div>
              </div>
          </div>
      </div>
      {/* End Preloader */}

      <div className="header-area">
          <div className="container">
              <div className="row">

                  <div className="col-lg-6">
                      <div className="left">
                          <ul>
                              <li>
                                  <i className="icofont-location-pin"></i>
                                  <Link href="#">31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.</Link>
                              </li>
                              <li>
                                  <i className="icofont-ui-call"></i>
                                  <a href="tel:9785488455">9785488455, 9828603138</a>
                              </li>
                          </ul>
                      </div>
                  </div>

                  <div className="col-lg-6">
                      <div className="right">
                          <ul className="list-unstyled">
                              <li>
                                  <span><strong>Registration No.:</strong></span>
                                  <span className="text-white">( रजि. COOP/2018 /JAIPUR /103636 )</span>
                              </li>
                          </ul>

                          <div className="header-search">
                              <i id="search-btn" className="icofont-search-2"></i>
                              <div id="search-overlay" className="block">
                                  <div className="centered">
                                      <div id="search-box">
                                          <i id="close-btn" className="icofont-close"></i>
                                          <form>
                                              <input type="text" className="form-control" placeholder="Search..." />
                                              <button type="submit" className="btn">Search</button>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>

      {/* Navbar */}
      <div className="navbar-area sticky-top">
          {/* Menu For Mobile Device */}
          <div className="mobile-nav">
              <Link href="/" className="logo">
                  <Image unoptimized width={100} height={100} src="/images/logo.png" alt="Logo" />
              </Link>
          </div>

          {/* Menu For Desktop Device */}
          <div className="main-nav">
              <div className="container">
                  <nav className="navbar navbar-expand-md navbar-light">
                      <Link className="navbar-brand" href="/">
                          <Image unoptimized width={100} height={100} src="/images/logo.png" className="logo-one" alt="Logo" />
                          <Image unoptimized width={100} height={100} src="/images/logo.png" className="logo-two" alt="Logo" />
                      </Link>
                      <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <Link href="/" className="nav-link dropdown-toggle active">Home</Link>
                              </li>

                              <li className="nav-item">
                                  <Link href="/about" className="nav-link">About</Link>
                              </li>
                              <li className="nav-item">
                                  <Link href="/gallery" className="nav-link">Gallery</Link>
                              </li>
                              <li className="nav-item">
                                  <Link href="#" className="nav-link dropdown-toggle">Donations <i className="icofont-simple-down"></i></Link>
                                  <ul className="dropdown-menu">
                                      <li className="nav-item">
                                          <Link href="/donations" className="nav-link">Donations</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link href="/donation-details" className="nav-link">Donation Details</Link>
                                      </li>
                                  </ul>
                              </li>

                              <li className="nav-item">
                                  <Link href="/our-document" className="nav-link">Documents</Link>
                              </li>

                              <li className="nav-item">
                                  <Link href="/contact" className="nav-link">Contact</Link>
                              </li>
                          </ul>
                          <div className="side-nav">
                              <Link className="donate-btn" href="#" data-bs-toggle="modal" data-bs-target="#donationModal">
                                  Donate
                                  <i className="icofont-heart-alt"></i>
                              </Link>
                          </div>
                      </div>
                  </nav>
              </div>
          </div>
      </div>
      {/* End Navbar */}
    </>
  );
}
