
export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
    <!-- Preloader -->
    <div class="loader">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="pre-box-one">
                    <div class="pre-box-two"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Preloader -->

    <div class="header-area">
        <div class="container">
            <div class="row">

                <div class="col-lg-6">
                    <div class="left">
                        <ul>
                            <li>
                                <i class="icofont-location-pin"></i>
                                <a href="/our-document.html#">31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.</a>
                            </li>
                            <li>
                                <i class="icofont-ui-call"></i>
                                <a href="tel:9785488455">9785488455, 9828603138</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="right">
                        <ul class="list-unstyled">
                            <li>
                                <span><strong>Registration No.:</strong></span>
                                <span class="text-white">( रजि. COOP/2018 /JAIPUR /103636 )</span>
                            </li>
                        </ul>

                        <div class="header-search">
                            <i id="search-btn" class="icofont-search-2"></i>
                            <div id="search-overlay" class="block">
                                <div class="centered">
                                    <div id="search-box">
                                        <i id="close-btn" class="icofont-close"></i>
                                        <form>
                                            <input type="text" class="form-control" placeholder="Search...">
                                            <button type="submit" class="btn">Search</button>
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

    <!-- Navbar -->
    <div class="navbar-area sticky-top">
        <!-- Menu For Mobile Device -->
        <div class="mobile-nav">
            <a href="/" class="logo">
                <img src="/images/logo.png" alt="Logo">
            </a>
        </div>

        <!-- Menu For Desktop Device -->
        <div class="main-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand" href="/">
                        <img src="/images/logo.png" class="logo-one" alt="Logo">
                        <img src="/images/logo.png" class="logo-two" alt="Logo">
                    </a>
                    <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="/" class="nav-link dropdown-toggle active">Home </a>

                            </li>


                            <li class="nav-item">
                                <a href="/about" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="/gallery" class="nav-link">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a href="/our-document.html#" class="nav-link dropdown-toggle">Donations <i
                                        class="icofont-simple-down"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="/donations" class="nav-link">Donations</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/our-document.html#" class="nav-link">Donation Details</a>
                                    </li>
                                </ul>
                            </li>


                            <li class="nav-item">
                                <a href="/our-document" class="nav-link">Documents</a>
                            </li>
                            <!-- <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Blog <i
                                        class="icofont-simple-down"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="/blog" class="nav-link">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/blog-details" class="nav-link">Blog Details</a>
                                    </li>
                                </ul>
                            </li> -->
                            <li class="nav-item">
                                <a href="/contact" class="nav-link">Contact</a>
                            </li>
                        </ul>
                         <div class="side-nav">
                            <a class="donate-btn" href="/our-document.html#" data-bs-toggle="modal" data-bs-target="#donationModal">
                                Donate
                                <i class="icofont-heart-alt"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <!-- End Navbar -->



    <!-- Page Title -->
    <div class="page-title-area title-bg-four">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-item">
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
    <!-- End Page Title -->
    <section class="event-area four ptb-100">

        <div class="container">
            <div class="section-title">
                <span class="sub-title">Our Legal Documents</span>
                <h2 class="text-dark">Our Legal Documents</h2>
                <p>Access our legal documents including policies, terms, guidelines ensuring transparency, compliance,
                    and user rights protection.</p>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <div class="our-documents">
                        <img src="/images/documents/1.jpeg" alt="">
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="our-documents">
                        <img src="/images/documents/2.jpeg" alt="">
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="our-documents">
                        <img src="/images/documents/1.jpeg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- Footer -->
    <footer class="footer-area pt-100">
        <div class="container">
            <div class="row">

                <div class="col-sm-6 col-lg-3">
                    <div class="footer-item">
                        <div class="footer-logo">
                            <a class="logo" href="/">
                                <img src="/images/logo.png" class="w-25" alt="Logo">
                            </a>
                            <p>We are committed to creating a positive impact by providing education, promoting health
                                and wellness, protecting the environment, and supporting underprivileged communities.
                            </p>
                            <ul>
                                <li>
                                    <a href="https://www.threads.net/@apnibalsanskarphatsala" target="_blank">
                                        <i class="fa-brands fa-threads"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@ApnibalSanskarpathshala" target="_blank">
                                        <i class="icofont-youtube-play"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/apnibalsanskarphatsala/" target="_blank">
                                        <i class="icofont-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="footer-item">
                        <div class="footer-causes">
                            <h3>Urgent causes</h3>

                            <div class="cause-inner">
                                <ul class="align-items-center">
                                    <li>
                                        <h3>
                                            <a href="/our-document.html#">Education for Underprivileged Children</a>
                                        </h3>
                                    </li>
                                </ul>
                            </div>

                            <div class="cause-inner">
                                <ul class="align-items-center">
                                    <li>
                                        <h3>
                                            <a href="/our-document.html#">Support Environmental Protection</a>
                                        </h3>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="footer-item">
                        <div class="footer-links">
                            <h3>Quick links</h3>
                            <ul>
                                <li>
                                    <a href="/about">
                                        <i class="icofont-simple-right"></i>
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="https://uthansevasansthan.com/donation.html">
                                        <i class="icofont-simple-right"></i>
                                        Donation
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="footer-item">
                        <div class="footer-contact">
                            <h3>Contact info</h3>
                            <div class="contact-inner">
                                <ul>
                                    <li>
                                        <i class="icofont-location-pin"></i>
                                        <a href="/our-document.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</a>
                                    </li>
                                    <li>
                                        <i class="icofont-ui-call"></i>
                                        <a href="tel:9828603138">9828603138</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="contact-inner">
                                <ul>
                                    <li>
                                        <i class="icofont-location-pin"></i>
                                        <a href="/our-document.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</a>
                                    </li>
                                    <li>
                                        <i class="icofont-ui-call"></i>
                                        <a href="tel:9785488455">9785488455</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="copyright-area">
                <p>Copyright @
                    <script>document.write(new Date().getFullYear())</script> Uthan seva sansthan. </a>
                </p>
            </div>
        </div>
    </footer>
    <!-- End Footer -->

    <!-- WhatsApp Button -->
    <a href="https://wa.me/919828603138" target="_blank" class="whatsapp-btn">
        <i class="fa-brands fa-whatsapp"></i>
    </a>

    <!-- Modal -->
    <div class="modal fade" id="donationModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content custom-modal">

                <!-- Close -->
                <button type="button" class="btn-close position-absolute top-0 end-0 z-1 m-3"
                    data-bs-dismiss="modal"></button>

                <div class="modal-body p-4">

                    <!-- Title -->
                    <h4 class="text-warning fw-bold">Your Donation</h4>
                    <input type="text" class="form-control mb-3" placeholder="Enter Donation Amount">

                    <!-- Details -->
                    <h5 class="text-warning fw-bold">Details</h5>

                    <div class="row g-3 mb-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="First Name">
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Last Name">
                        </div>
                        <div class="col-md-6">
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Address">
                        </div>
                    </div>

                    <textarea class="form-control mb-3" rows="3" placeholder="Message"></textarea>

                    <!-- Payment -->
                    <h5 class="text-warning fw-bold">Choose Your Payment Method</h5>

                    <div class="mb-3">
                        <input type="radio" checked> Payment By Card
                        <input type="radio" class="ms-3"> Offline Donation
                    </div>

                    <!-- Cards -->
                    <div class="d-flex gap-3 mb-3">
                        <img src="https://img.icons8.com/color/48/visa.png" />
                        <img src="https://img.icons8.com/color/48/mastercard.png" />
                        <img src="https://img.icons8.com/color/48/paypal.png" />
                    </div>

                    <!-- Card Details -->
                    <div class="row g-3">
                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Card holder Name">
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Card Number">
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="CVV">
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Expire Date">
                        </div>
                    </div>

                    <!-- Button -->
                    <div class="text-center mt-4">
                        <button class="btn btn-outline-success px-4">Donate Now</button>
                    </div>

                </div>
            </div>
        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="donationModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content custom-modal">

                <!-- Close -->
                <button type="button" class="btn-close position-absolute top-0 end-0 z-1 m-3"
                    data-bs-dismiss="modal"></button>

                <div class="modal-body p-4">

                    <!-- Title -->
                    <h4 class="text-warning fw-bold">Your Donation</h4>
                    <input type="text" class="form-control mb-3" placeholder="Enter Donation Amount">

                    <!-- Details -->
                    <h5 class="text-warning fw-bold">Details</h5>

                    <div class="row g-3 mb-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="First Name">
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Last Name">
                        </div>
                        <div class="col-md-6">
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Address">
                        </div>
                    </div>

                    <textarea class="form-control mb-3" rows="3" placeholder="Message"></textarea>

                    <!-- Payment -->
                    <h5 class="text-warning fw-bold">Choose Your Payment Method</h5>

                    <div class="mb-3">
                        <input type="radio" checked> Payment By Card
                        <input type="radio" class="ms-3"> Offline Donation
                    </div>

                    <!-- Cards -->
                    <div class="d-flex gap-3 mb-3">
                        <img src="https://img.icons8.com/color/48/visa.png" />
                        <img src="https://img.icons8.com/color/48/mastercard.png" />
                        <img src="https://img.icons8.com/color/48/paypal.png" />
                    </div>

                    <!-- Card Details -->
                    <div class="row g-3">
                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Card holder Name">
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Card Number">
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="CVV">
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Expire Date">
                        </div>
                    </div>

                    <!-- Button -->
                    <div class="text-center mt-4">
                        <button class="btn btn-outline-success px-4">Donate Now</button>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- Go Top -->
    <div class="go-top">
        <i class="icofont-arrow-up"></i>
        <i class="icofont-arrow-up"></i>
    </div>
    <!-- End Go Top -->


    <!--=== Essential JS ===-->
    <script src="/js/jquery.min.js"></script>
    <script src="/js/bootstrap.bundle.min.js"></script>
    <script src="/js/form-validator.min.js"></script>
    <script src="/js/contact-form-script.js"></script>
    <script src="/js/jquery.ajaxchimp.min.js"></script>
    <script src="/js/jquery.meanmenu.js"></script>
    <script src="/js/jquery-modal-video.min.js"></script>
    <script src="/js/wow.min.js"></script>
    <script src="/js/lightbox.min.js"></script>
    <script src="/js/owl.carousel.min.js"></script>
    <script src="/js/odometer.min.js"></script>
    <script src="/js/jquery.appear.min.js"></script>
    <script src="/js/jquery.nice-select.min.js"></script>
    <script src="/js/custom.js"></script>

` }} />
  );
}
