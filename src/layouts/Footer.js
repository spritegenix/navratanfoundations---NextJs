import Link from 'next/dist/client/link';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
const Footer = ({ footerSolidBg }) => {
  return (
    <footer
      className={`site-footer ${
        footerSolidBg ? '' : 'with-footer-cta with-footer-bg'
      }`}
    >
      {!footerSolidBg && (
        <div className="footer-cta">
          <div className="container" style={{ borderRadius: '2rem' }}>
            <div className="row justify-content-lg-between justify-content-center align-items-center">
              <div className="col-lg-8 col-md-8 col-sm-10">
                <span className="cta-tagline">
                  Together, We Empower Lives and Transform Communities
                </span>
                <h3 className="cta-title">
                  Join Us in Building a Brighter Future for All
                </h3>
              </div>
              <div className="col-lg-auto col-md-6">
                <Link href="/contact">
                  <a className="main-btn bordered-btn bordered-white mt-md-30">
                    Be Part of the Change <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="footer-content-area">
        <div className="container">
          <div className="footer-widgets">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="widget about-widget">
                  <div className="footer-logo">
                    <img src="../assets/img/footer-logo.png" alt="Funden" />
                  </div>
                  <p>
                    Join hands to serve a purpose beyond yourself, and be the
                    change you seek
                  </p>
                  <div className="newsletter-form">
                    <Link href="/donate">
                      <a className="main-btn nav-btn d-none d-sm-inline-block Dontate-button">
                        Support a Cause <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-5 col-sm-6">
                <div className="widget nav-widget">
                  <h4 className="widget-title">Non Profit</h4>
                  <ul>
                    <li>
                      <Link href="https://navratanfoundations.com/samarpan-2023.pdf">
                        Annual Report
                      </Link>
                    </li>
                    <li>
                      <Link href="/founder">Founder's Profile</Link>
                    </li>
                    <li>
                      <Link href="/executive-committee">
                        Executive Committee
                      </Link>
                    </li>
                    <li>
                      <Link href="/patrons">Patrons</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="widget nav-widget">
                  <h4 className="widget-title">Quick Links</h4>
                  <ul>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/about">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/contact">Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-auto col-md-5 col-sm-8">
                <div className="widget contact-widget">
                  <h4 className="widget-title">Contact Us</h4>
                  <ul className="info-list">
                    <li>
                      <span className="icon">
                        <i className="far fa-phone" />
                      </span>
                      <span className="info">
                        <span className="info-title">Phone Number</span>
                        <Link href="tel:+917011540309">+91-7011540309</Link>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="far fa-envelope-open" />
                      </span>
                      <span className="info">
                        <span className="info-title">Email Address</span>
                        <Link href="mailto:navratanjks@gmail.com">
                          navratanjks@gmail.com
                        </Link>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="far fa-map-marker-alt" />
                      </span>
                      <span className="info">
                        <span className="info-title">Locations</span>
                        <a href="#">
                          E-74, Sector 52, Noida, Uttar Pradesh, India
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="row flex-md-row-reverse">
              <div className="col-md-4">
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
              <div className="col-md-8">
                <p className="copyright-text">
                  © {new Date().getFullYear()} Navratan Foundation All Rights
                  Reserved. Designed and Developed by{' '}
                  <a href="https://www.spritegenix.com/">SpriteGenix</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
