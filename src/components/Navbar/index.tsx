import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
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
                                <Link href="/" className="nav-link active">Home </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/gallery" className="nav-link">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#" className="nav-link dropdown-toggle">Donations <i
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
                                <Link href="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <div className="side-nav">
                            <Link className="donate-btn" href="#">
                                Donate
                                <i className="icofont-heart-alt"></i>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
