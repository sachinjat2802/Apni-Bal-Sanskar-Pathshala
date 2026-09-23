import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: `



    <!-- Page Title -->
    <div class="page-title-area title-bg-eight">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-item">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
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
                        <a href="/contact.html#">31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.</a>

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




    ` }} />
      <Footer />
    </>
  );
}
