/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Page() {
  return (
    <>

    {/*  Preloader  */}
    <div className="loader">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="pre-box-one">
                    <div className="pre-box-two"></div>
                </div>
            </div>
        </div>
    </div>
    {/*  End Preloader  */}

    <div className="header-area">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <div className="left">
                        <ul>
                            <li>
                                <i className="icofont-location-pin"></i>
                                <Link href="/donations.html#">31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.</Link>
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




    {/*  Navbar  */}
    <div className="navbar-area sticky-top">
        {/*  Menu For Mobile Device  */}
        <div className="mobile-nav">
            <Link href="/" className="logo">
                <img src="/images/logo.png" alt="Logo" />
            </Link>
        </div>

        {/*  Menu For Desktop Device  */}
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
                                <Link href="/gallery" className="nav-link">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/donations.html#" className="nav-link dropdown-toggle">Donations <i
                                        className="icofont-simple-down"></i></Link>
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
                            {/*  <li className="nav-item">
                                <Link href="#" className="nav-link dropdown-toggle">Blog <i
                                        className="icofont-simple-down"></i></Link>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link href="/blog" className="nav-link">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/blog-details" className="nav-link">Blog Details</Link>
                                    </li>
                                </ul>
                            </li>  */}
                            <li className="nav-item">
                                <Link href="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                         <div className="side-nav">
                            <Link className="donate-btn" href="/donations.html#" data-bs-toggle="modal" data-bs-target="#donationModal">
                                Donate
                                <i className="icofont-heart-alt"></i>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    {/*  End Navbar  */}

    {/*  Page Title  */}
    <div className="page-title-area title-bg-three">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="container">
                    <div className="title-item">
                        <h2>Donations</h2>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <span>Donations</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  End Page Title  */}



    <section className="donations-area ptb-100">
        <div className="container">
            <div className="row">

                <div className="col-sm-6 col-lg-4">
                    <div className="donation-item">
                        <div className="img">
                            <img src="/images/gallary-img/20.jpeg" alt="Donation" />
                            <Link className="common-btn" href="/donation-details">Donate Now</Link>
                        </div>
                        <div className="inner">
                            <div className="top">
                                <Link className="tags" href="/donations.html#">#Medical</Link>
                                <h3>
                                    <Link href="/donation-details">Need help for treatment</Link>
                                </h3>
                                <p>We exist for non-profits, social enterprises, activists. Lorem politicians and
                                    individual
                                    citizens.</p>
                            </div>
                            <div className="bottom">
                                <div className="skill">
                                    <div className="skill-bar skill1 wow fadeInLeftBig">
                                        <span className="skill-count1">85%</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>Raised: \$5,500.00</li>
                                    <li>Goal: \$7,000.00</li>
                                </ul>
                                <h4>Donated by <span>60 people</span></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="donation-item">
                        <div className="img">
                            <img src="/images/gallary-img/13.jpeg" alt="Donation" />
                            <Link className="common-btn" href="/donation-details">Donate Now</Link>
                        </div>
                        <div className="inner">
                            <div className="top">
                                <Link className="tags" href="/donations.html#">#Education</Link>
                                <h3>
                                    <Link href="/donation-details">Education for poor children</Link>
                                </h3>
                                <p>We exist for non-profits, social enterprises, activists. Lorem politicians and
                                    individual
                                    citizens.</p>
                            </div>
                            <div className="bottom">
                                <div className="skill">
                                    <div className="skill-bar skill2 wow fadeInLeftBig">
                                        <span className="skill-count2">95%</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>Raised: \$6,500.00</li>
                                    <li>Goal: \$8,050.00</li>
                                </ul>
                                <h4>Donated by <span>50 people</span></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="donation-item">
                        <div className="img">
                            <img src="/images/gallary-img/35.jpeg" alt="Donation" />
                            <Link className="common-btn" href="/donation-details">Donate Now</Link>
                        </div>
                        <div className="inner">
                            <div className="top">
                                <Link className="tags" href="/donations.html#">#Family</Link>
                                <h3>
                                    <Link href="/donation-details">Financial help for poor</Link>
                                </h3>
                                <p>We exist for non-profits, social enterprises, activists. Lorem politicians and
                                    individual
                                    citizens.</p>
                            </div>
                            <div className="bottom">
                                <div className="skill">
                                    <div className="skill-bar skill3 wow fadeInLeftBig">
                                        <span className="skill-count3">90%</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>Raised: \$5,540.00</li>
                                    <li>Goal: \$6,055.00</li>
                                </ul>
                                <h4>Donated by <span>40 people</span></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="donation-item">
                        <div className="img">
                            <img src="/images/gallary-img/15.jpeg" alt="Donation" />
                            <Link className="common-btn" href="/donation-details">Donate Now</Link>
                        </div>
                        <div className="inner">
                            <div className="top">
                                <Link className="tags" href="/donations.html#">#Funding</Link>
                                <h3>
                                    <Link href="/donation-details">Funding for family</Link>
                                </h3>
                                <p>We exist for non-profits, social enterprises, activists. Lorem politicians and
                                    individual
                                    citizens.</p>
                            </div>
                            <div className="bottom">
                                <div className="skill">
                                    <div className="skill-bar skill4 wow fadeInLeftBig">
                                        <span className="skill-count4">80%</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>Raised: \$5,56.00</li>
                                    <li>Goal: \$6,85.00</li>
                                </ul>
                                <h4>Donated by <span>30 people</span></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="donation-item">
                        <div className="img">
                            <img src="/images/gallary-img/16.jpeg" alt="Donation" />
                            <Link className="common-btn" href="/donation-details">Donate Now</Link>
                        </div>
                        <div className="inner">
                            <div className="top">
                                <Link className="tags" href="/donations.html#">#Relief</Link>
                                <h3>
                                    <Link href="/donation-details">Relief for cyclone-affected</Link>
                                </h3>
                                <p>We exist for non-profits, social enterprises, activists. Lorem politicians and
                                    individual
                                    citizens.</p>
                            </div>
                            <div className="bottom">
                                <div className="skill">
                                    <div className="skill-bar skill5 wow fadeInLeftBig">
                                        <span className="skill-count5">75%</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>Raised: \$5,5.00</li>
                                    <li>Goal: \$3,85.00</li>
                                </ul>
                                <h4>Donated by <span>20 people</span></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="donation-item">
                        <div className="img">
                            <img src="/images/gallary-img/17.jpeg" alt="Donation" />
                            <Link className="common-btn" href="/donation-details">Donate Now</Link>
                        </div>
                        <div className="inner">
                            <div className="top">
                                <Link className="tags" href="/donations.html#">#Drought</Link>
                                <h3>
                                    <Link href="/donation-details">Relief for drought-affected</Link>
                                </h3>
                                <p>We exist for non-profits, social enterprises, activists. Lorem politicians and
                                    individual
                                    citizens.</p>
                            </div>
                            <div className="bottom">
                                <div className="skill">
                                    <div className="skill-bar skill6 wow fadeInLeftBig">
                                        <span className="skill-count6">70%</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>Raised: \$9,5.00</li>
                                    <li>Goal: \$3,84.00</li>
                                </ul>
                                <h4>Donated by <span>10 people</span></h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="pagination-area">
                <ul>
                    <li>
                        <Link href="/donations.html#">Prev</Link>
                    </li>
                    <li>
                        <Link className="active" href="/donations.html#">1</Link>
                    </li>
                    <li>
                        <Link href="/donations.html#">2</Link>
                    </li>
                    <li>
                        <Link href="/donations.html#">3</Link>
                    </li>
                    <li>
                        <Link href="/donations.html#">Next</Link>
                    </li>
                </ul>
            </div>
        </div>
    </section>

     <section className="donation-area py-5 text-center feature-area" >
    <div className="container">
        <div className="section-title">
            <span className="sub-title text-white">Support Us</span>
            <h2 className="text-white">Make a Donation</h2>
            <p className="text-white">Your support helps us educate and empower children for a better future.</p>
        </div>

        <div className="donation-box">
            <img src="/images/qr.jpeg" alt="UPI QR Code" style={{"maxWidth":"300px","width":"100%","borderRadius":"10px"}} />

            <h4 style={{"marginTop":"15px"}}>UTHAN SEWA SANSTHAN</h4>
            <p><strong>UPI ID:</strong> uthan98286894@barodampay</p>
        </div>
    </div>
</section>



    {/*  Footer  */}
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
                                            <Link href="/donations.html#">Education for Underprivileged Children</Link>
                                        </h3>
                                    </li>
                                </ul>
                            </div>

                            <div className="cause-inner">
                                <ul className="align-items-center">
                                    <li>
                                        <h3>
                                            <Link href="/donations.html#">Support Environmental Protection</Link>
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
                                    <Link href="/about">
                                        <i className="icofont-simple-right"></i>
                                        About
                                    </Link>
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
                                        <Link href="/donations.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</Link>
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
                                        <Link href="/donations.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</Link>
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
    {/*  End Footer  */}

    {/*  WhatsApp Button  */}
    <a href="https://wa.me/919828603138" target="_blank" className="whatsapp-btn">
        <i className="fa-brands fa-whatsapp"></i>
    </a>

    {/*  Modal  */}
    <div className="modal fade" id="donationModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content custom-modal">

                {/*  Close  */}
                <button type="button" className="btn-close position-absolute top-0 end-0 z-1 m-3"
                    data-bs-dismiss="modal"></button>

                <div className="modal-body p-4">

                    {/*  Title  */}
                    <h4 className="text-warning fw-bold">Your Donation</h4>
                    <input type="text" className="form-control mb-3" placeholder="Enter Donation Amount" />

                    {/*  Details  */}
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

                    {/*  Payment  */}
                    <h5 className="text-warning fw-bold">Choose Your Payment Method</h5>

                    <div className="mb-3">
                        <input type="radio" checked /> Payment By Card
                        <input type="radio" className="ms-3" /> Offline Donation
                    </div>

                    {/*  Cards  */}
                    <div className="d-flex gap-3 mb-3">
                        <img src="https://img.icons8.com/color/48/visa.png"  alt="" />
                        <img src="https://img.icons8.com/color/48/mastercard.png"  alt="" />
                        <img src="https://img.icons8.com/color/48/paypal.png"  alt="" />
                    </div>

                    {/*  Card Details  */}
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

                    {/*  Button  */}
                    <div className="text-center mt-4">
                        <button className="btn btn-outline-success px-4">Donate Now</button>
                    </div>

                </div>
            </div>
        </div>
    </div>


    {/*  Modal  */}
    <div className="modal fade" id="donationModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content custom-modal">

                {/*  Close  */}
                <button type="button" className="btn-close position-absolute top-0 end-0 z-1 m-3"
                    data-bs-dismiss="modal"></button>

                <div className="modal-body p-4">

                    {/*  Title  */}
                    <h4 className="text-warning fw-bold">Your Donation</h4>
                    <input type="text" className="form-control mb-3" placeholder="Enter Donation Amount" />

                    {/*  Details  */}
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

                    {/*  Payment  */}
                    <h5 className="text-warning fw-bold">Choose Your Payment Method</h5>

                    <div className="mb-3">
                        <input type="radio" checked /> Payment By Card
                        <input type="radio" className="ms-3" /> Offline Donation
                    </div>

                    {/*  Cards  */}
                    <div className="d-flex gap-3 mb-3">
                        <img src="https://img.icons8.com/color/48/visa.png"  alt="" />
                        <img src="https://img.icons8.com/color/48/mastercard.png"  alt="" />
                        <img src="https://img.icons8.com/color/48/paypal.png"  alt="" />
                    </div>

                    {/*  Card Details  */}
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

                    {/*  Button  */}
                    <div className="text-center mt-4">
                        <button className="btn btn-outline-success px-4">Donate Now</button>
                    </div>

                </div>
            </div>
        </div>
    </div>

    {/*  Go Top  */}
    <div className="go-top">
        <i className="icofont-arrow-up"></i>
        <i className="icofont-arrow-up"></i>
    </div>
    {/*  End Go Top  */}





    </>
  );
}
