import Link from "next/link";
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
                                <a href="/gallery.html#">31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.</a>
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
                <img src="/images/logo.png" alt="Logo" />
                                    </Link>
        </div>

        {/* Menu For Desktop Device */}
        <div className="main-nav">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link className="navbar-brand" href="/">
                        <img src="/images/logo.png" className="logo-one" alt="Logo" />
                        <img src="/images/logo.png" className="logo-two" alt="Logo" />
                    </Link>
                    <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/" className="nav-link dropdown-toggle active">Home </Link>

                            </li>


                            <li className="nav-item">
                                <Link href="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <a href="/gallery" className="nav-link">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a href="/gallery.html#" className="nav-link dropdown-toggle">Donations <i
                                        className="icofont-simple-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="/donations" className="nav-link">Donations</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/gallery.html#" className="nav-link">Donation Details</a>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item">
                                <a href="/our-document" className="nav-link">Documents</a>
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
                                <a href="/contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                         <div className="side-nav">
                            <a className="donate-btn" href="/gallery.html#" data-bs-toggle="modal" data-bs-target="#donationModal">
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
    <div className="page-title-area title-bg-two">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="container">
                    <div className="title-item">
                        <h2>Gallery</h2>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <span>Gallery</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* End Page Title */}

    {/* Gallery */}
    <section className="gallery-area two pt-100 pb-70">
        <div className="container-fluid">
            <div className="section-title">
                <span className="sub-title">Our gallery</span>
                <h2>Explore Our Work & Achievements</h2>
                <p>We proudly showcase the moments that reflect our dedication and impact. Our gallery highlights the
                    activities, events, and initiatives that define who we are.

                </p>
            </div>
            <div className="row">

                {/* 1 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/1.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/1.jpeg" className="img-fluid" alt="Gallery 1" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 2 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/2.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/2.jpeg" className="img-fluid" alt="Gallery 2" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 3 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/3.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/3.jpeg" className="img-fluid" alt="Gallery 3" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 4 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/4.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/4.jpeg" className="img-fluid" alt="Gallery 4" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 5 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/5.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/5.jpeg" className="img-fluid" alt="Gallery 5" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 6 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/6.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/6.jpeg" className="img-fluid" alt="Gallery 6" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 7 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/7.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/7.jpeg" className="img-fluid" alt="Gallery 7" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 8 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/8.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/8.jpeg" className="img-fluid" alt="Gallery 8" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 9 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/9.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/9.jpeg" className="img-fluid" alt="Gallery 9" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 10 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/10.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/10.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                {/* 10 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/11.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/11.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                {/* 11 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/13.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/13.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                {/* 11 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/15.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/15.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/16.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/16.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/17.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/17.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/18.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/18.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/19.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/19.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/20.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/20.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/22.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/22.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/23.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/23.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/24.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/24.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/25.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/25.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/26.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/26.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/27.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/27.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/28.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/28.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/29.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/29.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/30.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/30.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/31.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/31.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/32.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/32.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/33.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/33.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/34.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/34.jpeg" className="img-fluid" alt="Gallery 10" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>


                {/* 35 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/35.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/35.jpeg" className="img-fluid" alt="Gallery 35" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 36 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/36.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/36.jpeg" className="img-fluid" alt="Gallery 36" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 37 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/37.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/37.jpeg" className="img-fluid" alt="Gallery 37" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 38 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/38.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/38.jpeg" className="img-fluid" alt="Gallery 38" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 39 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/39.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/39.jpeg" className="img-fluid" alt="Gallery 39" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 40 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/40.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/40.jpeg" className="img-fluid" alt="Gallery 40" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 41 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/41.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/41.jpeg" className="img-fluid" alt="Gallery 41" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 42 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/42.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/42.jpeg" className="img-fluid" alt="Gallery 42" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 43 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/43.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/43.jpeg" className="img-fluid" alt="Gallery 43" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 44 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/44.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/44.jpeg" className="img-fluid" alt="Gallery 44" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

                {/* 45 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="gallery-item">
                        <a href="/images/gallary-img/45.jpeg" data-lightbox="roadtrip">
                            <img src="/images/gallary-img/45.jpeg" className="img-fluid" alt="Gallery 45" />
                            <i className="icofont-eye"></i>
                        </a>
                    </div>
                </div>

            </div>




















        </div>
    </section>
    {/* End Gallery */}



    {/* Footer */}
    <footer className="footer-area pt-100">
        <div className="container">
            <div className="row">

                <div className="col-sm-6 col-lg-3">
                    <div className="footer-item">
                        <div className="footer-logo">
                            <Link className="logo" href="/">
                                <img src="/images/logo.png" className="w-25" alt="Logo" />
                            </Link>
                            <p>We are committed to creating a positive impact by providing education, promoting health
                                and wellness, protecting the environment, and supporting underprivileged communities.
                            </p>
                            <ul>
                                <li>
                                    <a href="https://www.threads.net/@apnibalsanskarphatsala" target="_blank">
                                        <i className="fa-brands fa-threads"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@ApnibalSanskarpathshala" target="_blank">
                                        <i className="icofont-youtube-play"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/apnibalsanskarphatsala/" target="_blank">
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
                                            <a href="/gallery.html#">Education for Underprivileged Children</a>
                                        </h3>
                                    </li>
                                </ul>
                            </div>

                            <div className="cause-inner">
                                <ul className="align-items-center">
                                    <li>
                                        <h3>
                                            <a href="/gallery.html#">Support Environmental Protection</a>
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
                                        <a href="/gallery.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</a>
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
                                        <a href="/gallery.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</a>
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
                <p>Copyright @
                    {new Date().getFullYear()} Uthan seva sansthan.
                </p>
            </div>
        </div>
    </footer>
    {/* End Footer */}

    {/* WhatsApp Button */}
    <a href="https://wa.me/919828603138" target="_blank" className="whatsapp-btn">
        <i className="fa-brands fa-whatsapp"></i>
    </a>

    {/* Modal */}
    <div className="modal fade" id="donationModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content custom-modal">

                {/* Close */}
                <button type="button" className="btn-close position-absolute top-0 end-0 z-1 m-3"
                    data-bs-dismiss="modal"></button>

                <div className="modal-body p-4">

                    {/* Title */}
                    <h4 className="text-warning fw-bold">Your Donation</h4>
                    <input type="text" className="form-control mb-3" placeholder="Enter Donation Amount" />

                    {/* Details */}
                    <h5 className="text-warning fw-bold">Details</h5>

                    <div className="row g-3 mb-3">
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Address" />
                        </div>
                    </div>

                    <textarea className="form-control mb-3" rows={3} placeholder="Message"></textarea>

                    {/* Payment */}
                    <h5 className="text-warning fw-bold">Choose Your Payment Method</h5>

                    <div className="mb-3">
                        <input type="radio" checked /> Payment By Card
                        <input type="radio" className="ms-3" /> Offline Donation
                    </div>

                    {/* Cards */}
                    <div className="d-flex gap-3 mb-3">
                        <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
                        <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" />
                        <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" />
                    </div>

                    {/* Card Details */}
                    <div className="row g-3">
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Card holder Name" />
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Card Number" />
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="CVV" />
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Expire Date" />
                        </div>
                    </div>

                    {/* Button */}
                    <div className="text-center mt-4">
                        <button className="btn btn-outline-success px-4">Donate Now</button>
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
                <button type="button" className="btn-close position-absolute top-0 end-0 z-1 m-3"
                    data-bs-dismiss="modal"></button>

                <div className="modal-body p-4">

                    {/* Title */}
                    <h4 className="text-warning fw-bold">Your Donation</h4>
                    <input type="text" className="form-control mb-3" placeholder="Enter Donation Amount" />

                    {/* Details */}
                    <h5 className="text-warning fw-bold">Details</h5>

                    <div className="row g-3 mb-3">
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Address" />
                        </div>
                    </div>

                    <textarea className="form-control mb-3" rows={3} placeholder="Message"></textarea>

                    {/* Payment */}
                    <h5 className="text-warning fw-bold">Choose Your Payment Method</h5>

                    <div className="mb-3">
                        <input type="radio" checked /> Payment By Card
                        <input type="radio" className="ms-3" /> Offline Donation
                    </div>

                    {/* Cards */}
                    <div className="d-flex gap-3 mb-3">
                        <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
                        <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" />
                        <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" />
                    </div>

                    {/* Card Details */}
                    <div className="row g-3">
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Card holder Name" />
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Card Number" />
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="CVV" />
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Expire Date" />
                        </div>
                    </div>

                    {/* Button */}
                    <div className="text-center mt-4">
                        <button className="btn btn-outline-success px-4">Donate Now</button>
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




    </>
  );
}
