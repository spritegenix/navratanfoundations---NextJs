import Link from 'next/dist/client/link';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layouts/Layout';

const Contact = () => {
  return (
    <Layout>
      <PageBanner pageName="Contact Us" />
      <section className="contact-section section-gap-extra-bottom">
        <div className="container">
          {/* Contact Info Start */}
          <div className="row align-items-center justify-content-center">
            <div className="col-lx-4 col-lg-5 col-sm-10">
              <div className="contact-info-text mb-md-70">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    {/* <i className="fas fa-plus" />
                    Contact */}
                    <span className="heading-shadow-text">Contact Us</span>
                  </span>
                  <h2 className="title">
                    Connect with Navratan Foundations for Change
                  </h2>
                </div>
                <p>
                  {' '}
                  Every step toward change begins with a connection. At Navratan
                  Foundations, we believe in the power of unity and compassion
                  to transform lives. Whether you seek help, want to contribute,
                  or simply share your story, we are here to listen and stand by
                  you. Together, let’s build a future filled with hope, dignity,
                  and endless possibilities. Reach out to us — your voice
                  matters.{' '}
                </p>
                {/* <Link href="/events">
                  <a className="main-btn mt-35">
                    Get Free Quote <i className="far fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 offset-xl-1">
              <div className="contact-info-boxes">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 col-sm-10">
                    <div
                      className="info-box text-center wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="icon">
                        <i className="flaticon-place" />
                      </div>
                      <div className="info-content">
                        <h5>Our Location</h5>
                        <p>E-74, Sector 52, Noida, Uttar Pradesh, India</p>
                      </div>
                    </div>
                    <div
                      className="info-box text-center mt-30 mb-sm-30 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="icon">
                        <i className="flaticon-envelope" />
                      </div>
                      <div className="info-content">
                        <h5>Email Address</h5>
                        <a
                          href="mailto:navratanjks@gmail.com"
                          style={{ color: 'black' }}
                        >
                          navratanjks@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-10">
                    <div
                      className="info-box text-center wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="icon">
                        <i className="flaticon-phone-call-1" />
                      </div>
                      <div className="info-content">
                        <h5>Contact Number</h5>
                        <a href="tel:+917011540309" style={{ color: 'black' }}>
                          +91-7011540309
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Info End */}
          <div className="contact-from-area">
            <div className="row no-gutters">
              <div className="col-lg-5">
                <div className="contact-maps">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56057.95833592886!2d77.27645736219122!3d28.581099550066043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5821045f981%3A0x9301bbf1c0eb7aeb!2sNavratan%20Foundations!5e0!3m2!1sen!2sin!4v1699076587199!5m2!1sen!2sin"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-form">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <h3 className="form-title">Send Us Message</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="name">Your Name</label>
                          <input
                            type="text"
                            placeholder="Your Name"
                            id="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="phone-number">Phone Number</label>
                          <input
                            type="text"
                            placeholder="Your Phone Number"
                            id="phone-number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="text"
                            placeholder="Your Email"
                            id="email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="subject">Subject</label>
                          <input
                            type="text"
                            placeholder="Subject"
                            id="subject"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-field mb-30">
                          <label htmlFor="message">Write Message</label>
                          <textarea
                            id="message"
                            placeholder="Write us a Message"
                            defaultValue={''}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-field">
                          <button className="main-btn">
                            Send Us Message <i className="far fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
