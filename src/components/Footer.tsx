export default function Footer() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
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
                                            <a href="#">Education for Underprivileged Children</a>
                                        </h3>
                                    </li>
                                </ul>
                            </div>

                            <div class="cause-inner">
                                <ul class="align-items-center">
                                    <li>
                                        <h3>
                                            <a href="#">Support Environmental Protection</a>
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
                                    <a href="/donations">
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
                                        <a href="#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</a>
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
                                        <a href="#"> 31, Green Park Extension, Nangal Jaisa Bohra, Jaipur</a>
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

    <!-- Go Top -->
    <div class="go-top">
        <i class="icofont-arrow-up"></i>
        <i class="icofont-arrow-up"></i>
    </div>
    <!-- End Go Top -->
    ` }} />
  );
}
