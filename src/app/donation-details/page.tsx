/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Page() {
  return (
    <>


    <div className="loader">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="pre-box-one">
                    <div className="pre-box-two"></div>
                </div>
            </div>
        </div>
    </div>


    <div className="header-area">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <div className="left">
                        <ul>
                            <li>
                                <i className="icofont-location-pin"></i>
                                <a href="/donation-details.html#">31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.</a>
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


    <div className="navbar-area sticky-top">

        <div className="mobile-nav">
            <Link href="/" className="logo">
                <img src="/images/logo.png" alt="Logo" />
            </Link>
        </div>


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
                                <a href="/about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="/gallery" className="nav-link">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a href="/donation-details.html#" className="nav-link dropdown-toggle">Donations <i
                                        className="icofont-simple-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="/donations" className="nav-link">Donations</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/donation-details.html#" className="nav-link">Donation Details</a>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item">
                                <a href="/our-document" className="nav-link">Documents</a>
                            </li>

                            <li className="nav-item">
                                <a href="/contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                         <div className="side-nav">
                            <a className="donate-btn" href="/donation-details.html#" data-bs-toggle="modal" data-bs-target="#donationModal">
                                Donate
                                <i className="icofont-heart-alt"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>






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


    <div className="donation-details-area ptb-100">
        <div className="container">
            <div className="row">

                <div className="col-lg-8">
                    <div className="details-item">

                        <div className="details-img">
                            <img src="/images/gallary-img/20.jpeg" alt="Details" />
                            <h2>Join Our Yoga Initiative for a Healthier & Balanced Life</h2>
                            <p>
                                Our yoga program is dedicated to promoting physical health, mental peace, and emotional
                                well-being.
                                In today’s fast-paced world, stress and unhealthy lifestyles are becoming common
                                problems.
                                Through yoga, we aim to help individuals reconnect with their body, mind, and inner
                                self.
                            </p>

                            <p>
                                We organize regular yoga sessions, meditation camps, and wellness workshops for people
                                of all age groups.
                                Our experienced instructors guide participants through various asanas, breathing
                                techniques, and relaxation methods
                                that improve flexibility, strength, and overall health.
                            </p>

                            <p>
                                It is a well-known fact that practicing yoga daily not only enhances physical fitness
                                but also reduces stress,
                                improves concentration, and brings positivity into life. Our mission is to spread
                                awareness about the importance
                                of yoga and make it accessible to everyone.
                            </p>

                            <blockquote>
                                <i className="icofont-quote-left"></i>
                                &quot;Yoga is the journey of the self, through the self, to the self.&quot;
                            </blockquote>

                            <p>
                                We believe that a healthy society begins with healthy individuals. With your support, we
                                aim to expand our yoga
                                initiatives to rural and urban areas, helping more people lead a balanced and peaceful
                                life.
                            </p>

                            <p>
                                Join us in this journey towards better health and inner harmony. Together, let’s create
                                a stress-free and
                                healthier future through the power of yoga.
                            </p>
                        </div>

                        <div className="details-share">
                            <div className="row">

                                <div className="col-sm-6 col-lg-6">
                                    <div className="left">
                                        <ul>
                                            <li>
                                                <span>Share:</span>
                                            </li>
                                            <li>
                                                <a href="/donation-details.html#" target="_blank">
                                                    <i className="icofont-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/donation-details.html#" target="_blank">
                                                    <i className="icofont-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/donation-details.html#" target="_blank">
                                                    <i className="icofont-youtube-play"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/donation-details.html#" target="_blank">
                                                    <i className="icofont-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-6">
                                    <div className="right">
                                        <ul>
                                            <li>
                                                <span>Tags:</span>
                                            </li>
                                            <li>
                                                <a href="/donation-details.html#">#Donation</a>
                                            </li>
                                            <li>
                                                <a href="/donation-details.html#">#Food</a>
                                            </li>
                                            <li>
                                                <a href="/donation-details.html#">#Help</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="details-payment">
                            <h3>Select payment method</h3>
                            <form>
                                <div className="form-radio-area">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="option1" />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Paypal</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2" />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Debit Card</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio3" value="option3" />
                                        <label className="form-check-label" htmlFor="inlineRadio3">Credit Card</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio4" value="option4" />
                                        <label className="form-check-label" htmlFor="inlineRadio4">Other</label>
                                    </div>
                                </div>
                                <div className="form-input-area">
                                    <div className="form-group">
                                        <label>
                                            <i className="icofont-user-alt-3"></i>
                                        </label>
                                        <input type="text" className="form-control" placeholder="First name" />
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <i className="icofont-user-alt-3"></i>
                                        </label>
                                        <input type="text" className="form-control" placeholder="Last name" />
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <i className="icofont-ui-email"></i>
                                        </label>
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <i className="icofont-ui-call"></i>
                                        </label>
                                        <input type="text" className="form-control" placeholder="Phone number" />
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <i className="icofont-dollar"></i>
                                        </label>
                                        <input type="text" className="form-control" placeholder="\$100.00" />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn common-btn">Donate Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="widget-area">

                        <div className="search widget-item">
                            <form>
                                <input type="text" className="form-control" placeholder="Search..." />
                                <button type="submit" className="btn">
                                    <i className="icofont-search-1"></i>
                                </button>
                            </form>
                        </div>

                        <div className="post widget-item">
                            <h3>Popular Post</h3>
                            <div className="post-inner">
                                <ul className="align-items-center">
                                    <li>
                                        <img src="/images/gallary-img/2.jpeg" alt="Details" />
                                    </li>
                                    <li>
                                        <h4>
                                            <a href="/donation-details.html#">Donate for nutrition less poor people</a>
                                        </h4>
                                        <p>By - <a href="/donation-details.html#">Admin</a></p>
                                    </li>
                                </ul>
                            </div>
                            <div className="post-inner">
                                <ul className="align-items-center">
                                    <li>
                                        <img src="/images/gallary-img/3.jpeg" alt="Details" />
                                    </li>
                                    <li>
                                        <h4>
                                            <a href="/donation-details.html#">Charity meetup in Berlin next year</a>
                                        </h4>
                                        <p>By - <a href="/donation-details.html#">Admin</a></p>
                                    </li>
                                </ul>
                            </div>
                            <div className="post-inner">
                                <ul className="align-items-center">
                                    <li>
                                        <img src="/images/gallary-img/4.jpeg" alt="Details" />
                                    </li>
                                    <li>
                                        <h4>
                                            <a href="/donation-details.html#">Donate for poor people for food & water</a>
                                        </h4>
                                        <p>By - <a href="/donation-details.html#">Admin</a></p>
                                    </li>
                                </ul>
                            </div>
                            <div className="post-inner">
                                <ul className="align-items-center">
                                    <li>
                                        <img src="/images/gallary-img/5.jpeg" alt="Details" />
                                    </li>
                                    <li>
                                        <h4>
                                            <a href="/donation-details.html#">Little Sanjana joined in a charity to help people</a>
                                        </h4>
                                        <p>By - <a href="/donation-details.html#">Admin</a></p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="common-right-content widget-item">
                            <h3>Archives</h3>
                            <ul>
                                <li>
                                    <a href="/donation-details.html#">January 2024</a>
                                </li>
                                <li>
                                    <a href="/donation-details.html#">May 2024</a>
                                </li>
                                <li>
                                    <a href="/donation-details.html#">April 2024</a>
                                </li>
                                <li>
                                    <a href="/donation-details.html#">June 2024</a>
                                </li>
                            </ul>
                        </div>

                        <div className="common-right-content widget-item">
                            <h3>Categories</h3>
                            <ul>
                                <li>
                                    <a href="/donation-details.html#">Education (10)</a>
                                </li>
                                <li>
                                    <a href="/donation-details.html#">Medical (25)</a>
                                </li>
                                <li>
                                    <a href="/donation-details.html#">Food & Water (14)</a>
                                </li>
                                <li>
                                    <a href="/donation-details.html#">National Charity (2)</a>
                                </li>
                                <li>
                                    <a href="/donation-details.html#">Cloth (4)</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    </div>





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
                                            <a href="/donation-details.html#">Education for Underprivileged Children</a>
                                        </h3>
                                    </li>
                                </ul>
                            </div>

                            <div className="cause-inner">
                                <ul className="align-items-center">
                                    <li>
                                        <h3>
                                            <a href="/donation-details.html#">Support Environmental Protection</a>
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
                                        <a href="/donation-details.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</a>
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
                                        <a href="/donation-details.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</a>
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



    <a href="https://wa.me/919828603138" target="_blank" className="whatsapp-btn">
        <i className="fa-brands fa-whatsapp"></i>
    </a>


    <div className="modal fade" id="donationModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content custom-modal">


                <button type="button" className="btn-close position-absolute top-0 end-0 z-1 m-3"
                    data-bs-dismiss="modal"></button>

                <div className="modal-body p-4">


                    <h4 className="text-warning fw-bold">Your Donation</h4>
                    <input type="text" className="form-control mb-3" placeholder="Enter Donation Amount" />


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


                    <h5 className="text-warning fw-bold">Choose Your Payment Method</h5>

                    <div className="mb-3">
                        <input type="radio" defaultChecked /> Payment By Card
                        <input type="radio" className="ms-3" /> Offline Donation
                    </div>


                    <div className="d-flex gap-3 mb-3">
                        <img alt="" src="https://img.icons8.com/color/48/visa.png" />
                        <img alt="" src="https://img.icons8.com/color/48/mastercard.png" />
                        <img alt="" src="https://img.icons8.com/color/48/paypal.png" />
                    </div>


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


                    <div className="text-center mt-4">
                        <button className="btn btn-outline-success px-4">Donate Now</button>
                    </div>

                </div>
            </div>
        </div>
    </div>



    <div className="modal fade" id="donationModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content custom-modal">


                <button type="button" className="btn-close position-absolute top-0 end-0 z-1 m-3"
                    data-bs-dismiss="modal"></button>

                <div className="modal-body p-4">


                    <h4 className="text-warning fw-bold">Your Donation</h4>
                    <input type="text" className="form-control mb-3" placeholder="Enter Donation Amount" />


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


                    <h5 className="text-warning fw-bold">Choose Your Payment Method</h5>

                    <div className="mb-3">
                        <input type="radio" defaultChecked /> Payment By Card
                        <input type="radio" className="ms-3" /> Offline Donation
                    </div>


                    <div className="d-flex gap-3 mb-3">
                        <img alt="" src="https://img.icons8.com/color/48/visa.png" />
                        <img alt="" src="https://img.icons8.com/color/48/mastercard.png" />
                        <img alt="" src="https://img.icons8.com/color/48/paypal.png" />
                    </div>


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


                    <div className="text-center mt-4">
                        <button className="btn btn-outline-success px-4">Donate Now</button>
                    </div>

                </div>
            </div>
        </div>
    </div>


    <div className="go-top">
        <i className="icofont-arrow-up"></i>
        <i className="icofont-arrow-up"></i>
    </div>






    </>
  );
}
