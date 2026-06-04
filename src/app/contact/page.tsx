
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
                                <a href="/Apni-Bal-Sanskar-Pathshala/contact.html#">31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.</a>
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
            <a href="/Apni-Bal-Sanskar-Pathshala/" class="logo">
                <img src="/Apni-Bal-Sanskar-Pathshala/images/logo.png" alt="Logo">
            </a>
        </div>

        <!-- Menu For Desktop Device -->
        <div class="main-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand" href="/Apni-Bal-Sanskar-Pathshala/">
                        <img src="/Apni-Bal-Sanskar-Pathshala/images/logo.png" class="logo-one" alt="Logo">
                        <img src="/Apni-Bal-Sanskar-Pathshala/images/logo.png" class="logo-two" alt="Logo">
                    </a>
                    <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="/Apni-Bal-Sanskar-Pathshala/" class="nav-link dropdown-toggle active">Home </a>

                            </li>


                            <li class="nav-item">
                                <a href="/Apni-Bal-Sanskar-Pathshala/about" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Apni-Bal-Sanskar-Pathshala/gallery" class="nav-link">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Apni-Bal-Sanskar-Pathshala/contact.html#" class="nav-link dropdown-toggle">Donations <i
                                        class="icofont-simple-down"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="/Apni-Bal-Sanskar-Pathshala/donations" class="nav-link">Donations</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/Apni-Bal-Sanskar-Pathshala/contact.html#" class="nav-link">Donation Details</a>
                                    </li>
                                </ul>
                            </li>


                            <li class="nav-item">
                                <a href="/Apni-Bal-Sanskar-Pathshala/our-document" class="nav-link">Documents</a>
                            </li>
                            <!-- <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Blog <i
                                        class="icofont-simple-down"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="/Apni-Bal-Sanskar-Pathshala/blog" class="nav-link">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/Apni-Bal-Sanskar-Pathshala/blog-details" class="nav-link">Blog Details</a>
                                    </li>
                                </ul>
                            </li> -->
                            <li class="nav-item">
                                <a href="/Apni-Bal-Sanskar-Pathshala/contact" class="nav-link">Contact</a>
                            </li>
                        </ul>
                         <div class="side-nav">
                            <a class="donate-btn" href="/Apni-Bal-Sanskar-Pathshala/contact.html#" data-bs-toggle="modal" data-bs-target="#donationModal">
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
    <div class="page-title-area title-bg-eight">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-item">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <a href="/Apni-Bal-Sanskar-Pathshala/">Home</a>
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
    <!-- End Page Title -->

    <!--=== Contact Info ===-->
    <div class="contact-info-area pt-100 pb-70">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-6 col-lg-4">
                    <div class="contact-info">
                        <i class="icofont-location-pin"></i>
                        <span>Location:</span>
                        <a href="/Apni-Bal-Sanskar-Pathshala/contact.html#">31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.</a>

                    </div>
                </div>

                <div class="col-sm-6 col-lg-4">
                    <div class="contact-info">
                        <i class="icofont-ui-call"></i>
                        <span>Phone:</span>
                        <a href="tel:9828603138">982-860-3138</a>
                        <a href="tel: 9785488455"> 978-548-8455</a>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-4">
                    <div class="contact-info">
                        <i class="icofont-ui-email"></i>
                        <span>Email:</span>
                        <a href="mailto:apni.bal.sanskarpathshala1@gmail.com">apni.bal.sanskarpathshala1@gmail.com</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--=== End Contact Info ===-->

    <!-- Contact -->
    <div class="contact-area pb-70">
        <div class="container">

            <form id="contactForm">
                <h2>Let's talk...!</h2>
                <p>
                    Uttan Seva Sansthan is dedicated to serving society by supporting underprivileged communities
                    and promoting a better quality of life. Our organization works continuously to provide
                    essential services such as education, healthcare, food, and social awareness programs.
                </p>
                <div class="row">

                    <div class="col-lg-6">
                        <div class="form-group">
                            <label>
                                <i class="icofont-user-alt-3"></i>
                            </label>
                            <input type="text" name="name" id="name" class="form-control" placeholder="Name" required=""
                                data-error="Please enter your name">
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="form-group">
                            <label>
                                <i class="icofont-ui-email"></i>
                            </label>
                            <input type="email" name="email" id="email" class="form-control" placeholder="Email"
                                required="" data-error="Please enter your email">
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="form-group">
                            <label>
                                <i class="icofont-ui-call"></i>
                            </label>
                            <input type="text" name="phone_number" id="phone_number" placeholder="Phone" required=""
                                data-error="Please enter your number" class="form-control">
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="form-group">
                            <label>
                                <i class="icofont-notepad"></i>
                            </label>
                            <input type="text" name="msg_subject" id="msg_subject" class="form-control"
                                placeholder="Subject" required="" data-error="Please enter your subject">
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="form-group">
                            <label>
                                <i class="icofont-comment"></i>
                            </label>
                            <textarea name="message" class="form-control" id="message" cols="30" rows="8"
                                placeholder="Write message" required="" data-error="Write your message"></textarea>
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
                        <div class="form-group">
                            <div class="form-check agree-label">
                                <input name="gridCheck" value="I agree to the terms and privacy policy."
                                    class="form-check-input" type="checkbox" id="gridCheck" required="">
                                <label class="form-check-label" for="gridCheck">
                                    Accept <a href="https://uthansevasansthan.com/terms-condition.html">Terms & Conditions</a> And <a
                                        href="https://uthansevasansthan.com/privacy-policy.html">Privacy Policy.</a>
                                </label>
                                <div class="help-block with-errors gridCheck-error"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <button type="submit" class="btn common-btn">
                            Send Message
                        </button>
                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                        <div class="clearfix"></div>
                    </div>
                </div>

            </form>

        </div>
    </div>
    <!-- End Contact -->

    <!-- Map -->
    <div class="map-area">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.9627039067564!2d75.74666997527362!3d26.968080376614264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db2fb3ab1b94b%3A0x7edf17cc869f496e!2s31%2C%20Green%20Park%20Ext%2C%20Dadi%20Ka%20Phatak%2C%20Anand%20Vihar%2C%20Sita%20Vihar%2C%20Jaipur%2C%20Rajasthan%20302012!5e0!3m2!1sen!2sin!4v1774432470019!5m2!1sen!2sin"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <!-- End Map -->

    <!-- Footer -->
    <footer class="footer-area pt-100">
        <div class="container">
            <div class="row">

                <div class="col-sm-6 col-lg-3">
                    <div class="footer-item">
                        <div class="footer-logo">
                            <a class="logo" href="/Apni-Bal-Sanskar-Pathshala/">
                                <img src="/Apni-Bal-Sanskar-Pathshala/images/logo.png" class="w-25" alt="Logo">
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
                                            <a href="/Apni-Bal-Sanskar-Pathshala/contact.html#">Education for Underprivileged Children</a>
                                        </h3>
                                    </li>
                                </ul>
                            </div>

                            <div class="cause-inner">
                                <ul class="align-items-center">
                                    <li>
                                        <h3>
                                            <a href="/Apni-Bal-Sanskar-Pathshala/contact.html#">Support Environmental Protection</a>
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
                                    <a href="/Apni-Bal-Sanskar-Pathshala/about">
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
                                        <a href="/Apni-Bal-Sanskar-Pathshala/contact.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</a>
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
                                        <a href="/Apni-Bal-Sanskar-Pathshala/contact.html#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</a>
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
    <script src="/Apni-Bal-Sanskar-Pathshala/js/jquery.min.js"></script>
    <script src="/Apni-Bal-Sanskar-Pathshala/js/bootstrap.bundle.min.js"></script>
    <script src="/Apni-Bal-Sanskar-Pathshala/js/form-validator.min.js"></script>
    <script src="/Apni-Bal-Sanskar-Pathshala/js/contact-form-script.js"></script>
    <script src="/Apni-Bal-Sanskar-Pathshala/js/jquery.ajaxchimp.min.js"></script>
    <script src="/Apni-Bal-Sanskar-Pathshala/js/jquery.meanmenu.js"></script>
    <script src="/Apni-Bal-Sanskar-Pathshala/js/jquery-modal-video.min.js"></script>
    <script src="/Apni-Bal-Sanskar-Pathshala/js/wow.min.js"></script>
    <script src="/Apni-Bal-Sanskar-Pathshala/js/lightbox.min.js"></script>
    <script src="/Apni-Bal-Sanskar-Pathshala/js/owl.carousel.min.js"></script>
    <script src="/Apni-Bal-Sanskar-Pathshala/js/odometer.min.js"></script>
    <script src="/Apni-Bal-Sanskar-Pathshala/js/jquery.appear.min.js"></script>
    <script src="/Apni-Bal-Sanskar-Pathshala/js/jquery.nice-select.min.js"></script>
    <script src="/Apni-Bal-Sanskar-Pathshala/js/custom.js"></script>

` }} />
  );
}
