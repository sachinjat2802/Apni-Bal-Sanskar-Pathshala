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
                                <a href="/about.html#">31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.</a>
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
                                <a href="/about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="/gallery" className="nav-link">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a href="/about.html#" className="nav-link dropdown-toggle">Donations <i
                                        className="icofont-simple-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="/donations" className="nav-link">Donations</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/about.html#" className="nav-link">Donation Details</a>
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
                            <a className="donate-btn" href="/about.html#" data-bs-toggle="modal" data-bs-target="#donationModal">
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
    <div className="page-title-area title-bg-one">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="container">
                    <div className="title-item">
                        <h2>About</h2>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <span>About</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* End Page Title */}

    {/* About */}
    <div className="about-area two pt-100 pb-70">
        <div className="container">
            <div className="row align-items-center">

                <div className="col-lg-6">
                    <div className="about-content">
                        <div className="section-title">
                            <span className="sub-title">About us</span>
                            <h2>We Work for Social Upliftment</h2>
                        </div>
                        <p>Utthan Seva Sansthan is dedicated to bringing positive change in society by working for
                            education, health, environment, and social welfare. Our mission is to uplift underprivileged
                            communities and create equal opportunities for growth and development. Through our
                            continuous efforts, we aim to build a healthier, educated, and empowered society.</p>
                        <ul>
                            <li>
                                <span>01</span>
                                Providing education to underprivileged sections of society
                            </li>
                            <li>
                                <span>02</span>
                                Promoting yoga and healthy lifestyle practices
                            </li>
                            <li>
                                <span>03</span>
                                Working for environmental awareness and protection
                            </li>
                            <li>
                                <span>04</span>
                                Supporting and uplifting underprivileged girl children
                            </li>
                        </ul>
                        <div className="about-btn-area">
                            <a className="common-btn about-btn" href="/about.html#">Get Start A Fundraising</a>
                            <a className="common-btn" href="/about.html#">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="about-img">
                        <img src="/images/1.jpeg" alt="About" />
                        <div className="video-wrap">
                            <button className="js-modal-btn" data-video-id="uemObN8_dcw">
                                <i className="icofont-ui-play"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    {/* End About */}

    {/* About */}
    <div className="about-area two pt-100 pb-70">
        <div className="container">
            <div className="row align-items-center">

                <div className="col-lg-6">
                    <div className="about-img">
                        <img src="/images/gallary-img/5.jpeg" alt="About" />
                        <div className="video-wrap">
                            <button className="js-modal-btn" data-video-id="uemObN8_dcw">
                                <i className="icofont-ui-play"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="about-content">
                        <div className="section-title">
                            <span className="sub-title">Our Vision</span>
                            <h2>Mission of Utthan Seva Sansthan</h2>
                        </div>
                        <p>
                            In our country, governments have continuously made efforts to promote education, and free
                            education facilities are widely available. Many private institutions are also contributing
                            significantly to the education sector. Despite this, millions of children are still deprived
                            of education. There are numerous slum areas, underprivileged communities, and nomadic
                            families whose children lack access to proper education.
                            To address this issue, Utthan Seva Sansthan operates free “Bal Sanskar Pathshalas” within
                            slum areas, aiming to educate and nurture children with strong values and knowledge.
                            Currently, the organization is active in limited areas of Jaipur due to limited resources.
                            With the support of donors and well-wishers, the institution is committed to providing free
                            education to more children. The organization has also applied for land allocation as per
                            education department guidelines to develop proper infrastructure, including educational
                            facilities and hostels, to provide skill-based and employment-oriented education to
                            underprivileged sections of society.
                            Alongside education, the organization is actively working on key initiatives such as
                            environmental protection through tree plantation drives, promoting physical and mental
                            well-being through free yoga classes, and organizing Kanya Pujan and other social programs
                            to empower and uplift society.
                        </p>



                    </div>
                </div>



            </div>
        </div>
    </div>
    {/* End About */}

    {/*=== Team ===*/}
    <section className="team-area pb-70">
        <div className="container">
            <div className="section-title">
                <span className="sub-title">Our Team</span>
                <h2>Meet Our Dedicated Team Members</h2>

                <p>
                    Our team includes dedicated educators and volunteers committed to empowering children
                    and building a strong, value-driven society.
                </p>

            </div>
            <div className="row justify-content-center">
                <div className="col-sm-6 col-lg-4">
                    <div className="team-item">
                        <div className="top">
                            <img src="https://uthansevasansthan.com/images/our-team/founder.jpg" alt="Team" />
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/share/14b4qT1pywL/" target="_blank">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className="icofont-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/@apnibalsanskarpathshala" target="_blank">
                                        <i className="icofont-youtube-play"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/apnibalsanskarphatsala" target="_blank">
                                        <i className="icofont-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h3>Rakesh Matolia</h3>
                            <span>Education Incharge</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="team-item">
                        <div className="top">
                            <img src="/images/our-team/main-img.jpeg" style={{ objectPosition: 'top' }} alt="Team" />
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/share/14b4qT1pywL/" target="_blank">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className="icofont-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/@apnibalsanskarpathshala" target="_blank">
                                        <i className="icofont-youtube-play"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/apnibalsanskarphatsala" target="_blank">
                                        <i className="icofont-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h3>Sultan Singh</h3>
                            <span>Cashier</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="team-item">
                        <div className="top">
                            <img src="/images/our-team/01.jpeg" alt="Team" />
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/share/14b4qT1pywL/" target="_blank">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className="icofont-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/@apnibalsanskarpathshala" target="_blank">
                                        <i className="icofont-youtube-play"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/apnibalsanskarphatsala" target="_blank">
                                        <i className="icofont-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h3>Sultan Singh</h3>
                            <span>Treasurer</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="team-item">
                        <div className="top">
                            <img src="/images/our-team/0.2.jpeg" alt="Team" />
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/share/14b4qT1pywL/" target="_blank">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className="icofont-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/@apnibalsanskarpathshala" target="_blank">
                                        <i className="icofont-youtube-play"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/apnibalsanskarphatsala" target="_blank">
                                        <i className="icofont-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h3>Shivanand Tripathi</h3>
                            <span>Secretary</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="team-item">
                        <div className="top">
                            <img src="/images/our-team/0.3.jpeg" alt="Team" />
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/share/14b4qT1pywL/" target="_blank">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className="icofont-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/@apnibalsanskarpathshala" target="_blank">
                                        <i className="icofont-youtube-play"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/apnibalsanskarphatsala" target="_blank">
                                        <i className="icofont-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h3>Captain Shriram Chaudhary</h3>
                            <span>President</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="team-item">
                        <div className="top">
                            <img src="/images/our-team/media-parbari.jpeg" alt="Team" />
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/share/14b4qT1pywL/" target="_blank">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className="icofont-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/@apnibalsanskarpathshala" target="_blank">
                                        <i className="icofont-youtube-play"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/apnibalsanskarphatsala" target="_blank">
                                        <i className="icofont-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h3>Arun Jangid</h3>
                            <span>Media prabhari</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*=== End Team ===*/}



    {/* Benefit */}
    <div className="benefit-area two pt-100 pb-70">
        <div className="container">
            <div className="row align-items-center">

                <div className="col-lg-6">
                    <div className="benefit-img">
                        <img src="/images/gallary-img/10.jpeg" alt="Benefit" />
                        {/* <img src="/assets/img/benefit-shape1.png" alt="Benefit" /> */}
                        <div className="video-wrap">
                            <button className="js-modal-btn" data-video-id="uemObN8_dcw">
                                <i className="icofont-ui-play"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="section-title">
                        <span className="sub-title">Core Initiatives</span>
                        <h2>Our Mission to Create Positive Change</h2>
                        <p>We are committed to uplifting society through education, health awareness, environmental
                            care, and social support for underprivileged communities.</p>
                    </div>

                    <div className="row">

                        <div className="col-sm-6">
                            <div className="benefit-item">
                                <i className="fas fa-graduation-cap"></i>
                                <h3>Education Support</h3>
                                <p>Providing free education and learning resources to underprivileged children for a
                                    brighter future.</p>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="benefit-item two">
                                <i className="fas fa-spa"></i>
                                <h3>Yoga & Wellness</h3>
                                <p>Promoting physical and mental well-being through free yoga sessions and health
                                    awareness programs.</p>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="benefit-item three">
                                <i className="fas fa-leaf"></i>
                                <h3>Environmental Care</h3>
                                <p>Encouraging tree plantation and environmental awareness to build a greener and
                                    healthier future.</p>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="benefit-item four">
                                <i className="fas fa-child"></i>
                                <h3>Girl Child Upliftment</h3>
                                <p>Supporting underprivileged girls through social initiatives, education, and
                                    empowerment programs.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    {/* End Benefit */}




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
                                            <a href="/about.html#">Education for Underprivileged Children</a>
                                        </h3>
                                    </li>
                                </ul>
                            </div>

                            <div className="cause-inner">
                                <ul className="align-items-center">
                                    <li>
                                        <h3>
                                            <a href="/about.html#">Support Environmental Protection</a>
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
                                        <a href="/about.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</a>
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
                                        <a href="/about.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</a>
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
                        <img src="https://img.icons8.com/color/48/visa.png" />
                        <img src="https://img.icons8.com/color/48/mastercard.png" />
                        <img src="https://img.icons8.com/color/48/paypal.png" />
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
                        <img src="https://img.icons8.com/color/48/visa.png" />
                        <img src="https://img.icons8.com/color/48/mastercard.png" />
                        <img src="https://img.icons8.com/color/48/paypal.png" />
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
