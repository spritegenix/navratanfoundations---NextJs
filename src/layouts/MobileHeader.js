import Link from 'next/dist/client/link';
import { useState } from 'react';
import { about, Home, News, Pages, Project } from './menus';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
const MobileHeader = ({
  transparentTop,
  transparentHeader,
  topSecondaryBg,
}) => {
  const [toggle, setToggle] = useState(false);
  const [activeToggle, setActiveToggle] = useState('');
  const setActive = (value) =>
      setActiveToggle(value === activeToggle ? '' : value),
    activeLi = (value) =>
      value === activeToggle ? { display: 'block' } : { display: 'none' },
    activeArrow = (value) => (value === activeToggle ? 'submenu-opened' : '');
  return (
    <header
      className={`site-header sticky-header  d-lg-none ${
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
      <div className="navbar-wrapper breakpoint-on">
        <div className="container">
          <div className="navbar-inner">
            <div className="site-logo">
              <Link href="/">
                <a>
                  <img src="../assets/img/footer-logo.png" alt="" />
                </a>
              </Link>
            </div>
            <div className="navbar-extra d-flex align-items-center">
              <Link href="/donate">
                <a className="main-btn nav-btn d-none d-sm-inline-block">
                  Donate Now <i className="far fa-arrow-right" />
                </a>
              </Link>
              <a
                href="#"
                className={`nav-toggler ${toggle ? 'panel-opened' : ''}`}
                onClick={() => setToggle(!toggle)}
              >
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-menu-panel ${toggle ? 'panel-opened' : ''}`}>
        <div className="panel-logo">
          <Link href="/">
            <a>
              <img src="../assets/img/footer-logo.png" alt="" />
            </a>
          </Link>
        </div>
        <ul className="panel-menu" id="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
            <span
              className={`dd-trigger ${activeArrow('About Us')} text-white`}
              onClick={() => setActive('About Us')}
            >
              <i className="far fa-angle-down" />
            </span>
            <ul className="submenu" style={activeLi('About Us')}>
              <li>
                <Link href="/founder">Founder’s Profile</Link>
              </li>
              {/* <li>
        <Link href="/who-we-are">WHO ARE WE</Link>
      </li> */}
              <li>
                <a
                  href="https://navratanfoundations.com/samarpan-2023.pdf"
                  target="_blank"
                >
                  Annual Report – 2023
                </a>
              </li>
              <li>
                <a href="#">Navratan Pariwaar</a>{' '}
                <ul>
                  <li>
                    <Link href="/patrons">Patrons</Link>
                  </li>
                  <li>
                    <Link href="/advisors">Advisors</Link>
                  </li>
                  <li>
                    <Link href="/executive-committee">Executive Committee</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/get-involved">Get Involved</Link>
          </li>
          <li>
            <Link href="/our-initiatives">Our Initiatives</Link>
          </li>
          <li>
            <Link href="../assets/img/Samarpan-2024.pdf">Samarpan 2024</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="panel-extra">
          <a href="/donate" className="main-btn btn-white">
            Support a Cause
            <i className="far fa-arrow-right" />
          </a>
        </div>
        <a href="#" className="panel-close" onClick={() => setToggle(false)}>
          <i className="fal fa-times" />
        </a>
      </div>
    </header>
  );
};

export default MobileHeader;
