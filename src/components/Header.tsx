export default function Header() {
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
                                <a href="/#">31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.</a>
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
                                <a href="/#" class="nav-link dropdown-toggle">Donations <i
                                        class="icofont-simple-down"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="/donations" class="nav-link">Donations</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/#" class="nav-link">Donation Details</a>
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
                            <a class="donate-btn" href="/#" data-bs-toggle="modal" data-bs-target="#donationModal">
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
    `}} />
  );
}
