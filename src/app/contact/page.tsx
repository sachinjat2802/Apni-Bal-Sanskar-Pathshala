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
                                <Link href="/contact.html#">31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.</Link>
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
                                <Link href="/contact.html#" className="nav-link dropdown-toggle">Donations <i
                                        className="icofont-simple-down"></i></Link>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link href="/donations" className="nav-link">Donations</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/contact.html#" className="nav-link">Donation Details</Link>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item">
                                <Link href="/our-document" className="nav-link">Documents</Link>
                            </li>
                            {/*  <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">Blog <i
                                        className="icofont-simple-down"></i></a>
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
                            <Link className="donate-btn" href="/contact.html#" data-bs-toggle="modal" data-bs-target="#donationModal">
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
    <div className="page-title-area title-bg-eight">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="container">
                    <div className="title-item">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <span>Contact</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  End Page Title  */}

    {/* === Contact Info === */}
    <div className="contact-info-area pt-100 pb-70">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-6 col-lg-4">
                    <div className="contact-info">
                        <i className="icofont-location-pin"></i>
                        <span>Location:</span>
                        <Link href="/contact.html#">31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.</Link>

                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="contact-info">
                        <i className="icofont-ui-call"></i>
                        <span>Phone:</span>
                        <a href="tel:9828603138">982-860-3138</a>
                        <a href="tel: 9785488455"> 978-548-8455</a>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="contact-info">
                        <i className="icofont-ui-email"></i>
                        <span>Email:</span>
                        <a href="mailto:apni.bal.sanskarpathshala1@gmail.com">apni.bal.sanskarpathshala1@gmail.com</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* === End Contact Info === */}

    {/*  Contact  */}
    <div className="contact-area pb-70">
        <div className="container">

            <form id="contactForm">
                <h2>Let&apos;s talk...!</h2>
                <p>
                    Uttan Seva Sansthan is dedicated to serving society by supporting underprivileged communities
                    and promoting a better quality of life. Our organization works continuously to provide
                    essential services such as education, healthcare, food, and social awareness programs.
                </p>
                <div className="row">

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>
                                <i className="icofont-user-alt-3"></i>
                            </label>
                            <input type="text" name="name" id="name" className="form-control" placeholder="Name" required
                                data-error="Please enter your name" />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>
                                <i className="icofont-ui-email"></i>
                            </label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email"
                                required data-error="Please enter your email" />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>
                                <i className="icofont-ui-call"></i>
                            </label>
                            <input type="text" name="phone_number" id="phone_number" placeholder="Phone" required
                                data-error="Please enter your number" className="form-control" />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>
                                <i className="icofont-notepad"></i>
                            </label>
                            <input type="text" name="msg_subject" id="msg_subject" className="form-control"
                                placeholder="Subject" required data-error="Please enter your subject" />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                            <label>
                                <i className="icofont-comment"></i>
                            </label>
                            <textarea name="message" className="form-control" id="message" cols={30} rows={8}
                                placeholder="Write message" required data-error="Write your message"></textarea>
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <div className="form-check agree-label">
                                <input name="gridCheck" value="I agree to the terms and privacy policy."
                                    className="form-check-input" type="checkbox" id="gridCheck" required />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Accept <a href="https://uthansevasansthan.com/terms-condition.html">Terms & Conditions</a> And <a
                                        href="https://uthansevasansthan.com/privacy-policy.html">Privacy Policy.</a>
                                </label>
                                <div className="help-block with-errors gridCheck-error"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <button type="submit" className="btn common-btn">
                            Send Message
                        </button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                        <div className="clearfix"></div>
                    </div>
                </div>

            </form>

        </div>
    </div>
    {/*  End Contact  */}

    {/*  Map  */}
    <div className="map-area">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.9627039067564!2d75.74666997527362!3d26.968080376614264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db2fb3ab1b94b%3A0x7edf17cc869f496e!2s31%2C%20Green%20Park%20Ext%2C%20Dadi%20Ka%20Phatak%2C%20Anand%20Vihar%2C%20Sita%20Vihar%2C%20Jaipur%2C%20Rajasthan%20302012!5e0!3m2!1sen!2sin!4v1774432470019!5m2!1sen!2sin"
            width="100%" height={450} style={{"border":"0"}} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    {/*  End Map  */}

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
                                            <Link href="/contact.html#">Education for Underprivileged Children</Link>
                                        </h3>
                                    </li>
                                </ul>
                            </div>

                            <div className="cause-inner">
                                <ul className="align-items-center">
                                    <li>
                                        <h3>
                                            <Link href="/contact.html#">Support Environmental Protection</Link>
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
                                        <Link href="/contact.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</Link>
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
                                        <Link href="/contact.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</Link>
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
                        <input type="radio" defaultChecked /> Payment By Card
                        <input type="radio" className="ms-3" /> Offline Donation
                    </div>

                    {/*  Cards  */}
                    <div className="d-flex gap-3 mb-3">
                        <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
                        <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" />
                        <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" />
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
                        <input type="radio" defaultChecked /> Payment By Card
                        <input type="radio" className="ms-3" /> Offline Donation
                    </div>

                    {/*  Cards  */}
                    <div className="d-flex gap-3 mb-3">
                        <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
                        <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" />
                        <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" />
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


    {/* === Essential JS === */}
















    </>
  );
}
