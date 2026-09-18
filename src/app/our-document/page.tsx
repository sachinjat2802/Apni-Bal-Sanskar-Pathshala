export default function Page() {
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
                    <a href="/our-document.html#">
                      31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.
                    </a>
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
                    <span>
                      <strong>Registration No.:</strong>
                    </span>
                    <span className="text-white">
                      ( रजि. COOP/2018 /JAIPUR /103636 )
                    </span>
                  </li>
                </ul>

                <div className="header-search">
                  <i id="search-btn" className="icofont-search-2"></i>
                  <div id="search-overlay" className="block">
                    <div className="centered">
                      <div id="search-box">
                        <i id="close-btn" className="icofont-close"></i>
                        <form>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                          />
                          <button type="submit" className="btn">
                            Search
                          </button>
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
          <a href="/" className="logo">
            <img src="/images/logo.png" alt="Logo" />
          </a>
        </div>

        {/* Menu For Desktop Device */}
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="/">
                <img src="/images/logo.png" className="logo-one" alt="Logo" />
                <img src="/images/logo.png" className="logo-two" alt="Logo" />
              </a>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="/" className="nav-link dropdown-toggle active">
                      Home{" "}
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/about" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/gallery" className="nav-link">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/our-document.html#"
                      className="nav-link dropdown-toggle"
                    >
                      Donations <i className="icofont-simple-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="/donations" className="nav-link">
                          Donations
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/our-document.html#" className="nav-link">
                          Donation Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="/our-document" className="nav-link">
                      Documents
                    </a>
                  </li>
                  {/* <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">Blog <i
                                        className="icofont-simple-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="/blog" className="nav-link">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/blog-details" className="nav-link">Blog Details</a>
                                    </li>
                                </ul>
                            </li> */}
                  <li className="nav-item">
                    <a href="/contact" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="side-nav">
                  <a
                    className="donate-btn"
                    href="/our-document.html#"
                    data-bs-toggle="modal"
                    data-bs-target="#donationModal"
                  >
                    Donate
                    <i className="icofont-heart-alt"></i>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* End Navbar */}

      {/* Page Title */}
      <div className="page-title-area title-bg-four">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="title-item">
                <h2>Our Documents</h2>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <span>Our Documents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title */}
      <section className="event-area four ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Legal Documents</span>
            <h2 className="text-dark">Our Legal Documents</h2>
            <p>
              Access our legal documents including policies, terms, guidelines
              ensuring transparency, compliance, and user rights protection.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="our-documents">
                <img src="/images/documents/1.jpeg" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="our-documents">
                <img src="/images/documents/2.jpeg" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="our-documents">
                <img src="/images/documents/1.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-logo">
                  <a className="logo" href="/">
                    <img src="/images/logo.png" className="w-25" alt="Logo" />
                  </a>
                  <p>
                    We are committed to creating a positive impact by providing
                    education, promoting health and wellness, protecting the
                    environment, and supporting underprivileged communities.
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://www.threads.net/@apnibalsanskarphatsala"
                        target="_blank"
                      >
                        <i className="fa-brands fa-threads"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@ApnibalSanskarpathshala"

                      >
                        <i className="icofont-youtube-play"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/apnibalsanskarphatsala/"
                        target="_blank"
                      >
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-causes">
                  <h3>Urgent causes</h3>

                  <div className="cause-inner">
                    <ul className="align-items-center">
                      <li>
                        <h3>
                          <a href="/our-document.html#">
                            Education for Underprivileged Children
                          </a>
                        </h3>
                      </li>
                    </ul>
                  </div>

                  <div className="cause-inner">
                    <ul className="align-items-center">
                      <li>
                        <h3>
                          <a href="/our-document.html#">
                            Support Environmental Protection
                          </a>
                        </h3>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-links">
                  <h3>Quick links</h3>
                  <ul>
                    <li>
                      <a href="/about">
                        <i className="icofont-simple-right"></i>
                        About
                      </a>
                    </li>

                    <li>
                      <a href="https://uthansevasansthan.com/donation.html">
                        <i className="icofont-simple-right"></i>
                        Donation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-contact">
                  <h3>Contact info</h3>
                  <div className="contact-inner">
                    <ul>
                      <li>
                        <i className="icofont-location-pin"></i>
                        <a href="/our-document.html#">
                          {" "}
                          31, Green Park Extension, Nangal Jaisa Bohra, Jaipur
                        </a>
                      </li>
                      <li>
                        <i className="icofont-ui-call"></i>
                        <a href="tel:9828603138">9828603138</a>
                      </li>
                    </ul>
                  </div>
                  <div className="contact-inner">
                    <ul>
                      <li>
                        <i className="icofont-location-pin"></i>
                        <a href="/our-document.html#">
                          {" "}
                          31, Green Park Extension, Nangal Jaisa Bohra, Jaipur
                        </a>
                      </li>
                      <li>
                        <i className="icofont-ui-call"></i>
                        <a href="tel:9785488455">9785488455</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <p>Copyright @ {new Date().getFullYear()} Uthan seva sansthan.</p>
          </div>
        </div>
      </footer>
      {/* End Footer */}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919828603138"

        className="whatsapp-btn"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* Modal */}
      <div className="modal fade" id="donationModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content custom-modal">
            {/* Close */}
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 z-1 m-3"
              data-bs-dismiss="modal"
            ></button>

            <div className="modal-body p-4">
              {/* Title */}
              <h4 className="text-warning fw-bold">Your Donation</h4>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Donation Amount"
              />

              {/* Details */}
              <h5 className="text-warning fw-bold">Details</h5>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
              </div>

              <textarea
                className="form-control mb-3"
                rows={3}
                placeholder="Message"
              ></textarea>

              {/* Payment */}
              <h5 className="text-warning fw-bold">
                Choose Your Payment Method
              </h5>

              <div className="mb-3">
                <input type="radio" defaultChecked /> Payment By Card
                <input type="radio" className="ms-3" /> Offline Donation
              </div>

              {/* Cards */}
              <div className="d-flex gap-3 mb-3">
                <img src="https://img.icons8.com/color/48/visa.png" />
                <img src="https://img.icons8.com/color/48/mastercard.png" />
                <img src="https://img.icons8.com/color/48/paypal.png" />
              </div>

              {/* Card Details */}
              <div className="row g-3">
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card holder Name"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card Number"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CVV"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Expire Date"
                  />
                </div>
              </div>

              {/* Button */}
              <div className="text-center mt-4">
                <button className="btn btn-outline-success px-4">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="donationModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content custom-modal">
            {/* Close */}
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 z-1 m-3"
              data-bs-dismiss="modal"
            ></button>

            <div className="modal-body p-4">
              {/* Title */}
              <h4 className="text-warning fw-bold">Your Donation</h4>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Donation Amount"
              />

              {/* Details */}
              <h5 className="text-warning fw-bold">Details</h5>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
              </div>

              <textarea
                className="form-control mb-3"
                rows={3}
                placeholder="Message"
              ></textarea>

              {/* Payment */}
              <h5 className="text-warning fw-bold">
                Choose Your Payment Method
              </h5>

              <div className="mb-3">
                <input type="radio" defaultChecked /> Payment By Card
                <input type="radio" className="ms-3" /> Offline Donation
              </div>

              {/* Cards */}
              <div className="d-flex gap-3 mb-3">
                <img src="https://img.icons8.com/color/48/visa.png" />
                <img src="https://img.icons8.com/color/48/mastercard.png" />
                <img src="https://img.icons8.com/color/48/paypal.png" />
              </div>

              {/* Card Details */}
              <div className="row g-3">
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card holder Name"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card Number"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CVV"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Expire Date"
                  />
                </div>
              </div>

              {/* Button */}
              <div className="text-center mt-4">
                <button className="btn btn-outline-success px-4">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Go Top */}
      <div className="go-top">
        <i className="icofont-arrow-up"></i>
        <i className="icofont-arrow-up"></i>
      </div>
      {/* End Go Top */}

      {/*=== Essential JS ===*/}
    </>
  );
}
