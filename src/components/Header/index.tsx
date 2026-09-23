import React from 'react';

const Header = () => {
  return (
    <>
      <div className="header-area">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                      <div className="left">
                          <ul>
                              <li>
                                  <i className="icofont-location-pin"></i>
                                  <a href="#">31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.</a>
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
    </>
  );
};

export default Header;
