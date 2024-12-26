import Link from 'next/dist/client/link';
import { useEffect } from 'react';
import { stickyNav } from '../utils';
import { about, Home, News, Pages, Project } from './menus';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
const Header = ({ transparentTop, transparentHeader, topSecondaryBg }) => {
  useEffect(() => {
    window.addEventListener('scroll', stickyNav);
  });
  return (
    <header
      className={`site-header sticky-header d-none d-lg-block ${
        transparentTop ? 'topbar-transparent' : ''
      } ${transparentHeader ? 'transparent-header' : ''}`}
      id="header-sticky"
    >
      <div
        className={`header-topbar d-none d-sm-block ${
          topSecondaryBg ? 'topbar-secondary-bg' : ''
        }`}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <ul className="contact-info">
                <li>
                  <a href="mailto:navratanjks@gmail.com">
                    <i className="far fa-envelope" /> navratanjks@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-map-marker-alt" /> E-74, Sector 52,
                    Noida, Uttar Pradesh, India
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto d-none d-md-block">
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com/navratanfoundations">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/navratanfoundations">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/navjks">
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/navratan-foundations">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-wrapper">
        <div className="container">
          <div className="navbar-inner">
            <div className="site-logo">
              <Link href="/">
                <a>
                  <img
                    src="../assets/img/logo.png"
                    width={180}
                    height={55}
                    alt="Funden"
                    style={{ objectFit: 'cover' }}
                  />
                </a>
              </Link>
            </div>
            <div className="nav-menu" id="">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">
                    About Us
                    <span className="dd-trigger">
                      <i className="far fa-angle-down" />
                    </span>
                  </a>
                  <ul className="submenu">{about}</ul>
                </li>
                <li>
                  <Link href="/projects">
                    <a>Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved">
                    <a>Get Involved</a>
                  </Link>
                </li>
                <li>
                  <Link href="/our-initiatives">
                    <a>Our Initiatives</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://navratanfoundations.com/samarpan-2023.pdf">
                    <a>Samarpan 2024</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-extra d-flex align-items-center">
              <Link href="/events">
                <a className="main-btn nav-btn d-none d-sm-inline-block">
                  Support a Cause <i className="far fa-arrow-right" />
                </a>
              </Link>
              <a href="#" className="nav-toggler">
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
