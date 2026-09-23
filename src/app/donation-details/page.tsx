import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: `




    <!-- Page Title -->
    <div class="page-title-area title-bg-three">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-item">
                        <h2>Donations</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
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
    <!-- End Page Title -->

    <div class="donation-details-area ptb-100">
        <div class="container">
            <div class="row">

                <div class="col-lg-8">
                    <div class="details-item">

                        <div class="details-img">
                            <img src="/images/gallary-img/20.jpeg" alt="Details">
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
                                <i class="icofont-quote-left"></i>
                                "Yoga is the journey of the self, through the self, to the self."
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

                        <div class="details-share">
                            <div class="row">

                                <div class="col-sm-6 col-lg-6">
                                    <div class="left">
                                        <ul>
                                            <li>
                                                <span>Share:</span>
                                            </li>
                                            <li>
                                                <a href="/#" target="_blank">
                                                    <i class="icofont-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#" target="_blank">
                                                    <i class="icofont-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#" target="_blank">
                                                    <i class="icofont-youtube-play"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#" target="_blank">
                                                    <i class="icofont-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-lg-6">
                                    <div class="right">
                                        <ul>
                                            <li>
                                                <span>Tags:</span>
                                            </li>
                                            <li>
                                                <a href="/#">#Donation</a>
                                            </li>
                                            <li>
                                                <a href="/#">#Food</a>
                                            </li>
                                            <li>
                                                <a href="/#">#Help</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="details-payment">
                            <h3>Select payment method</h3>
                            <form>
                                <div class="form-radio-area">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="option1">
                                        <label class="form-check-label" for="inlineRadio1">Paypal</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2">
                                        <label class="form-check-label" for="inlineRadio2">Debit Card</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio3" value="option3">
                                        <label class="form-check-label" for="inlineRadio3">Credit Card</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio4" value="option4">
                                        <label class="form-check-label" for="inlineRadio4">Other</label>
                                    </div>
                                </div>
                                <div class="form-input-area">
                                    <div class="form-group">
                                        <label>
                                            <i class="icofont-user-alt-3"></i>
                                        </label>
                                        <input type="text" class="form-control" placeholder="First name">
                                    </div>
                                    <div class="form-group">
                                        <label>
                                            <i class="icofont-user-alt-3"></i>
                                        </label>
                                        <input type="text" class="form-control" placeholder="Last name">
                                    </div>
                                    <div class="form-group">
                                        <label>
                                            <i class="icofont-ui-email"></i>
                                        </label>
                                        <input type="email" class="form-control" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <label>
                                            <i class="icofont-ui-call"></i>
                                        </label>
                                        <input type="text" class="form-control" placeholder="Phone number">
                                    </div>
                                    <div class="form-group">
                                        <label>
                                            <i class="icofont-dollar"></i>
                                        </label>
                                        <input type="text" class="form-control" placeholder="\$100.00">
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn common-btn">Donate Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="widget-area">

                        <div class="search widget-item">
                            <form>
                                <input type="text" class="form-control" placeholder="Search...">
                                <button type="submit" class="btn">
                                    <i class="icofont-search-1"></i>
                                </button>
                            </form>
                        </div>

                        <div class="post widget-item">
                            <h3>Popular Post</h3>
                            <div class="post-inner">
                                <ul class="align-items-center">
                                    <li>
                                        <img src="/images/gallary-img/2.jpeg" alt="Details">
                                    </li>
                                    <li>
                                        <h4>
                                            <a href="/#">Donate for nutrition less poor people</a>
                                        </h4>
                                        <p>By - <a href="/#">Admin</a></p>
                                    </li>
                                </ul>
                            </div>
                            <div class="post-inner">
                                <ul class="align-items-center">
                                    <li>
                                        <img src="/images/gallary-img/3.jpeg" alt="Details">
                                    </li>
                                    <li>
                                        <h4>
                                            <a href="/#">Charity meetup in Berlin next year</a>
                                        </h4>
                                        <p>By - <a href="/#">Admin</a></p>
                                    </li>
                                </ul>
                            </div>
                            <div class="post-inner">
                                <ul class="align-items-center">
                                    <li>
                                        <img src="/images/gallary-img/4.jpeg" alt="Details">
                                    </li>
                                    <li>
                                        <h4>
                                            <a href="/#">Donate for poor people for food & water</a>
                                        </h4>
                                        <p>By - <a href="/#">Admin</a></p>
                                    </li>
                                </ul>
                            </div>
                            <div class="post-inner">
                                <ul class="align-items-center">
                                    <li>
                                        <img src="/images/gallary-img/5.jpeg" alt="Details">
                                    </li>
                                    <li>
                                        <h4>
                                            <a href="/#">Little Sanjana joined in a charity to help people</a>
                                        </h4>
                                        <p>By - <a href="/#">Admin</a></p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="common-right-content widget-item">
                            <h3>Archives</h3>
                            <ul>
                                <li>
                                    <a href="/#">January 2024</a>
                                </li>
                                <li>
                                    <a href="/#">May 2024</a>
                                </li>
                                <li>
                                    <a href="/#">April 2024</a>
                                </li>
                                <li>
                                    <a href="/#">June 2024</a>
                                </li>
                            </ul>
                        </div>

                        <div class="common-right-content widget-item">
                            <h3>Categories</h3>
                            <ul>
                                <li>
                                    <a href="/#">Education (10)</a>
                                </li>
                                <li>
                                    <a href="/#">Medical (25)</a>
                                </li>
                                <li>
                                    <a href="/#">Food & Water (14)</a>
                                </li>
                                <li>
                                    <a href="/#">National Charity (2)</a>
                                </li>
                                <li>
                                    <a href="/#">Cloth (4)</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- End Donation Details -->



      `}} />
      <Footer />
    </>
  );
}
