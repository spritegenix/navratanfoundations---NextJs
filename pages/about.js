import Link from 'next/dist/client/link';
import { useState } from 'react';
import Slider from 'react-slick';
import Counter from '../src/components/Counter';
import PageBanner from '../src/components/PageBanner';
import VideoPopup from '../src/components/VideoPopup';
import Layout from '../src/layouts/Layout';
import { projectSliderTwo, teamSlider } from '../src/sliderProps';

const About = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner pageName="About Us" />
      <section className="about-section-three section-gap pb-3">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-12 col-md-9  col-xl-5 col-lg-12 ">
              <div className="about-text mb-lg-50">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    {/* <i className="fas fa-plus" /> About us */}
                    <span className="heading-shadow-text">About Us</span>
                  </span>
                  <h2 className="title">
                    If you light a lamp for Somebody, it will also brighten your
                    path -Buddha
                  </h2>
                </div>
                <p>
                  Welcome to NAVRATAN FOUNDATIONS, a registered non-profit
                  society dedicated to advancing community development with a
                  strong commitment to achieving the Sustainable Development
                  Goals (SDGs). Our primary goal is to foster comprehensive and
                  value-based community growth by extending support and
                  resources to those in need.
                </p>
                <ul className="check-list mt-30">
                  <li className="wow fadeInUp" data-wow-delay="0s">
                    <h5 className="title">
                      Empowering Women through Skill Development
                    </h5>
                    <p>
                      We provide women with training programs to help them gain
                      skills, achieve financial independence, and foster
                      self-reliance.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="title">Promoting Quality Education</h5>
                    <p>
                      Our initiatives focus on grassroots education, adult
                      education, and computer training to empower
                      underprivileged children and adults.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.2s">
                    <h5 className="title">
                      Enhancing Mental Health and Well-being
                    </h5>
                    <p>
                      We actively support mental health awareness and provide
                      resources to improve the emotional and social well-being
                      of communities.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="about-gallery wow fadeInRight">
                <div className="img-one">
                  <img src="assets/img/about/who-we-are-3.jpg" alt="Image" />
                </div>
                <div className="img-two wow fadeInUp">
                  <img src="assets/img/about/who-we-are-2.jpg" alt="Image" />
                </div>
                <div className="pattern">
                  <img
                    src="assets/img/about/about-gallery-pattern.png"
                    alt="Pattern"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-three mt-5 mb-md-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-12">
              <div className="about-text mb-lg-50">
                <p>
                  At NAVRATAN FOUNDATIONS, we are dedicated to promoting gender
                  equality, quality education, decent work, economic growth, and
                  mental health, in alignment with SDGs 4, 5, 8, and 3. Our
                  central focus is on empowering women and girls from
                  disadvantaged backgrounds through skill development, quality
                  education, and adult education programs. By empowering women,
                  we aim to help them attain social and financial independence,
                  ultimately leading to self-sufficiency.
                </p>
                <br />
                <p>
                  We also recognize the significance of healthcare and social
                  protection for underserved populations. Hence, we actively
                  support initiatives that enhance the physical, mental, and
                  social well-being of all community members. By providing
                  access to vital resources, our aim is to drive sustainable
                  development and bring about positive transformations in the
                  lives of those we serve.
                </p>
                <br />
                <p>
                  Our commitment to promoting gender equality is deeply rooted
                  in the understanding that it remains a significant challenge
                  in India today. We actively work on literacy and awareness
                  programs that drive societal change, educating communities
                  about the imperative need to eradicate all forms of
                  discrimination and violence. Our goal is to create a world
                  where every individual is treated with respect and dignity.
                </p>
                <br />
                <p>
                  NAVRATAN FOUNDATIONS is also dedicated to amplifying the role
                  of civil society in local decision-making processes. We
                  connect citizens with the available resources within their
                  communities, working together for the greater good and the
                  promotion of sustainable development. This collaborative
                  effort was especially evident during the challenging times of
                  the COVID-19 crisis when we rallied together to assist those
                  in Need.
                </p>
                <br />
                <p>
                  Our mission is to transform society into one where everyone
                  can live with hope and dignity. We firmly believe that
                  development must begin at the grassroots level, and thus, we
                  relentlessly strive to positively impact as many lives as
                  possible, utilizing all available resources. Through our
                  cultural ecosystem, we have brought the community in Noida
                  closer together, enhancing their overall happiness and well--
                  being. Our work in the field of mental health is expanding,
                  reaching a wider audience, and fostering a more positive and
                  empathetic world. Join us in our mission to create a world
                  where everyone has equitable access to the resources needed
                  for personal growth{' '}
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Section End ======*/}
      {/*====== Feature Section Start ======*/}
      {/* <section className="feature-section primary-soft-bg section-gap">
        <div className="container">
          <div className="common-heading text-center mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> What We Do
              <span className="heading-shadow-text">Features</span>
            </span>
            <h2 className="title">Why choose us</h2>
          </div>
          <div className="row icon-boxes justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="icon-box mt-30">
                <div className="icon">
                  <i className="flaticon-debit-card" />
                </div>
                <h5 className="title">Fast &amp; Easy Payouts</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam
                </p>
                <Link href="/project-details">
                  <a className="link">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <span className="box-index">01</span>
                <div className="box-img">
                  <img src="assets/img/icon-box-bg.jpg" alt="image" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="icon-box mt-30">
                <div className="icon">
                  <i className="flaticon-payment" />
                </div>
                <h5 className="title">Global Payment Processing</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam
                </p>
                <Link href="/project-details">
                  <a className="link">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <span className="box-index">02</span>
                <div className="box-img">
                  <img src="assets/img/icon-box-bg.jpg" alt="image" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="icon-box mt-30">
                <div className="icon">
                  <i className="flaticon-wallet-1" />
                </div>
                <h5 className="title">Many Payment Options</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam
                </p>
                <Link href="/project-details">
                  <a className="link">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <span className="box-index">03</span>
                <div className="box-img">
                  <img src="assets/img/icon-box-bg.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== Feature Section End ======*/}
      {/*====== Team section Start ======*/}
      {/* <section className="team-slider-area">
        <div className="container mb-20">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="common-heading mb-40">
                <span className="tagline">
                  <i className="fas fa-plus" /> Exclusive team
                  <span className="heading-shadow-text">Members</span>
                </span>
                <h2 className="title">Meet Professional Team</h2>
              </div>
            </div>
            <div className="col-auto">
              <Link href="/contact">
                <a className="main-btn mb-40">
                  Join Our Team <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid fluid-extra-padding">
          <Slider {...teamSlider} className="row team-members team-slider">
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/01.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">
                      <a>Allen J. Thompson</a>
                    </Link>
                  </h5>
                  <span className="title">CEO &amp; Founder</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/02.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Steven E. Wagner</Link>
                  </h5>
                  <span className="title">Jonior Manager</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/03.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Dwayne C. Dawson</Link>
                  </h5>
                  <span className="title">Digital Marketer</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/04.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Steven B. Rangel</Link>
                  </h5>
                  <span className="title">Web Developer</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/05.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Richard R. Barnes</Link>
                  </h5>
                  <span className="title">Web Developer</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/06.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">James P. Gutierrez</Link>
                  </h5>
                  <span className="title">Sr Manager</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/07.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Tony C. Anderson</Link>
                  </h5>
                  <span className="title">Senior Developer</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/08.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Stan H. Woodruff</Link>
                  </h5>
                  <span className="title">Apps Developer</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="member-box">
                <div className="member-photo">
                  <img src="assets/img/team/09.jpg" alt="Member" />
                </div>
                <div className="member-info">
                  <h5 className="name">
                    <Link href="/company-overview">Ronald T. Kessler</Link>
                  </h5>
                  <span className="title">Web Designer</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
      {/*====== Team section End ======*/}
      {/*====== Counter With Image Text Block Start ======*/}
      <section className="counter-with-video">
        <div className="video-area">
          <div className="container">
            <div className="funden-video">
              <img src="assets/img/about/founder.webp" alt="Image" />
              {/* <a
                href="#"
                className="video-popup"
                onClick={() => setVideo(true)}
              >
                <i className="fas fa-play" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="counter-boxes-area secondary-bg">
          <div className="container">
            <div className="row counter-boxes justify-content-lg-between justify-content-center">
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <img src="../assets/img/home/ngo-w.png" alt="NGO" />
                  </div>
                  <div className="content white-color">
                    <div className="count-wrap">
                      <Counter end={21} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Years in Service</h6>
                    <p>Committed to lasting impact.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <img src="../assets/img/home/budget-w.png" alt="budget" />
                  </div>
                  <div className="content white-color">
                    <div className="count-wrap">
                      <Counter end={27} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Projects Funded</h6>
                    <p>
                      Driving sustainable development <br /> through impactful
                      projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <img
                      src="../assets/img/home/volunteer-w.png"
                      alt="volunteer"
                    />
                  </div>
                  <div className="content white-color">
                    <div className="count-wrap">
                      <Counter end={45} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Volunteers</h6>
                    <p>Empowering through service.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <img
                      src="../assets/img/home/commitment-w.png"
                      alt="CSR Partnerships"
                    />
                  </div>
                  <div className="content white-color">
                    <div className="count-wrap">
                      <Counter end={12} />
                      {/* <span className="suffix">+</span> */}
                    </div>
                    <h6 className="title">CSR Partnerships</h6>
                    <p>Building stronger futures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Counter With Image Text Block End ======*/}
      <section className="about-section-three p-md-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-12">
              <div className="about-text mb-lg-50">
                <div className="common-heading mb-30">
                  <h2 className="title">From the Desk of the President</h2>
                  <h5>Dear friends,</h5>
                </div>
                <p>
                  It’s been a dream to serve the community for the last 30 years
                  and get so much love from you all. I would like to share with
                  you the core values and aspirations that define Navratan
                  Foundations.
                </p>
                <br />
                <p>
                  Our foundation stands on five pillars – Skill Training, Adult
                  Education, Women Empowerment, Mental Health, and Talent
                  Enhancement. These pillars represent our unwavering commitment
                  to making a positive impact on the lives of those in need. In
                  our journey, I have come to believe that a person s most
                  valuable assets are not just a head filled with knowledge but
                  also a heart brimming with love, ears ready to listen, and
                  hands always willing to extend help to others. These qualities
                  are at the heart of what we do at Navratan.
                </p>
                <br />
                <p>
                  Starting Navratan was not merely an act of philanthropy but a
                  heartfelt endeavor to create a platform for the less fortunate
                  to thrive. Transitioning from my corporate role to dedicating
                  my energies to the foundation has been a deeply gratifying
                  journey. We understand that building trust is paramount.
                  Whether it's providing education, enabling women to take
                  charge of their lives, or nurturing the talents of the youth,
                  our progress in these areas has been incredibly satisfying.
                </p>
                <br />
                <p>
                  As social innovators, we must embody vision, tenacity, and
                  courage. It's imperative that we never give up on finding
                  innovative solutions within our means to uplift and support
                  the often-overlooked talents that exist within our society.
                </p>
                <br />
                <p className="quotes">
                  "My moments of pure happiness come when I witness children
                  from our slum school confidently reciting poems, when women
                  from our tailoring center start earning and becoming
                  self-reliant, and when a 40-year-old adult learns to read and
                  write, and when 82-year-old women learn computers at our
                  center. It's the bond we share with them and their growing
                  belief in their own abilities that bring me profound joy and
                  solace. In this ongoing journey, I have promises to keep and
                  many miles to travel before I can rest. Together, we can
                  continue to make a difference in the lives of those we Serve."
                </p>
                <br />
                <p>
                  With warm regards, <br />
                  <span style={{ fontWeight: '600' }}>Ashok Srivastava</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Testimonials Start ======*/}
      {/* <section className="testimonials-section section-gap">
        <div className="container">
          <div className="common-heading text-center mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> Clients Feedback
              <span className="heading-shadow-text">Testimonials</span>
            </span>
            <h2 className="title">{`What People's Say`}</h2>
          </div>
          <div className="row justify-content-center testimonial-boxes square-shape-two">
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="testimonial-box-one mt-30">
                <div className="author-info">
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                  </div>
                  <div>
                    <h5 className="name">Joseph A. Anthony</h5>
                    <p className="position">Web Developer</p>
                  </div>
                </div>
                <p className="testimonial-desc">
                  Quis autem vel eum reprehenderit quiea voluptate velit essenih
                  lestiae conseqatur veillum dolorem
                </p>
                <div className="rating-wrap">
                  <span>Rating</span>
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="testimonial-box-one mt-30">
                <div className="author-info">
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                  </div>
                  <div>
                    <h5 className="name">Howard A. Guest</h5>
                    <p className="position">Web Developer</p>
                  </div>
                </div>
                <p className="testimonial-desc">
                  Quis autem vel eum reprehenderit quiea voluptate velit essenih
                  lestiae conseqatur veillum dolorem
                </p>
                <div className="rating-wrap">
                  <span>Rating</span>
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="testimonial-box-one mt-30">
                <div className="author-info">
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                  </div>
                  <div>
                    <h5 className="name">Howard A. Guest</h5>
                    <p className="position">Web Developer</p>
                  </div>
                </div>
                <p className="testimonial-desc">
                  Quis autem vel eum reprehenderit quiea voluptate velit essenih
                  lestiae conseqatur veillum dolorem
                </p>
                <div className="rating-wrap">
                  <span>Rating</span>
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="testimonial-box-one mt-30">
                <div className="author-info">
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/04.jpg" alt="Thumb" />
                  </div>
                  <div>
                    <h5 className="name">Joseph A. Anthony</h5>
                    <p className="position">Web Developer</p>
                  </div>
                </div>
                <p className="testimonial-desc">
                  Quis autem vel eum reprehenderit quiea voluptate velit essenih
                  lestiae conseqatur veillum dolorem
                </p>
                <div className="rating-wrap">
                  <span>Rating</span>
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="testimonial-box-one mt-30">
                <div className="author-info">
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/05.jpg" alt="Thumb" />
                  </div>
                  <div>
                    <h5 className="name">Howard A. Guest</h5>
                    <p className="position">Web Developer</p>
                  </div>
                </div>
                <p className="testimonial-desc">
                  Quis autem vel eum reprehenderit quiea voluptate velit essenih
                  lestiae conseqatur veillum dolorem
                </p>
                <div className="rating-wrap">
                  <span>Rating</span>
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="testimonial-box-one mt-30">
                <div className="author-info">
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/06.jpg" alt="Thumb" />
                  </div>
                  <div>
                    <h5 className="name">Howard A. Guest</h5>
                    <p className="position">Web Developer</p>
                  </div>
                </div>
                <p className="testimonial-desc">
                  Quis autem vel eum reprehenderit quiea voluptate velit essenih
                  lestiae conseqatur veillum dolorem
                </p>
                <div className="rating-wrap">
                  <span>Rating</span>
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== Testimonials End ======*/}
      {/*====== Partners Section With CTA Start ======*/}
      {/*====== Partners Section Start ======*/}
      <section className="partners-section section-gap pt-0 pt-md-80 pb-80 mb-80">
        <div className="container mb-30">
          <div className="common-heading mb-30">
            <span className="tagline">
              {/* <i className="fas fa-plus" /> Our Partners */}
              <span className="heading-shadow-text">Partners</span>
            </span>
            <h2 className="title">
              CHANGING LIVES TOGETHER: Our Partners in Progress
            </h2>
          </div>

          <Slider {...projectSliderTwo} className="row partners-logos-one ">
            <div className="col-lg-3 col-md-8 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img
                    src="assets/img/clients/client-1.jpg"
                    alt="Image"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-8 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-2.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-8 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-3.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-8 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-4.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-8 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-5.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-8 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-6.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-8 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-7.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-8 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-8.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-8 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-9.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-8 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-10.jpg" alt="Image" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== Partners Section End ======*/}
    </Layout>
  );
};

export default About;
