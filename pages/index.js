import Slider from 'react-slick';
import Counter from '../src/components/Counter';
import Layout from '../src/layouts/Layout';
import Typewriter from 'typewriter-effect';

import {
  imageTextBlockSlider,
  projectSliderOne,
  projectSliderTwo,
} from '../src/sliderProps';
import Link from 'next/link';
import { FaHandsHelping, FaUser, FaUsers } from 'react-icons/fa';
import ProjectsGallery from '../src/components/ProjectsCard';
import MainSlider from '../src/components/HeroSection';

const Index = () => {
  return (
    <Layout transparentHeader transparentTop footerSolidBg>
      <section className="hero-area-one">
        <div className="hero-text">
          {/* <MainSlider /> */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 herotitle">
                <h1
                  className="title wow fadeInUp typingtitle"
                  data-wow-delay="0.4s"
                >
                  Unlocking Futures with Grassroots Education{' '}
                </h1>
                <h5 className=" wow fadeInUp typingtitle" data-wow-delay="0.4s">
                  {' '}
                  <Typewriter
                    options={{
                      strings: [
                        'Empowering Communities Through Learning',
                        'Inspiring Change Through Quality Education',
                        'Creating Opportunities Through Knowledge',
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 90, // Typing speed
                      cursor: '', // Custom cursor
                    }}
                  />
                </h5>

                <Link href="/projects">
                  <a className="main-btn wow fadeInUp" data-wow-delay="0.5s">
                    Explore Projects <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-shapes">
            <div className="hero-line-one">
              <img src="assets/img/home/hero-line.png" alt="Line" />
            </div>
            <div className="hero-line-two">
              <img src="assets/img/home/hero-line-2.png" alt="Line" />
            </div>
            <div className="dot-one" />
            <div className="dot-two" />
          </div>
        </div>
        <div className="hero-images">
          <div
            className="hero-img image-small fancy-bottom wow fadeInLeft"
            data-wow-delay="0.6s"
          >
            <img src="assets/img/hero/hero-one-small.webp" alt="Image" />
          </div>
          <div className="hero-img main-img wow fadeInUp" data-wow-delay="0.5s">
            <img src="assets/img/hero/hero-one-big.jpg" alt="Image" />
          </div>
          <div
            className="hero-img image-small fancy-top wow fadeInRight"
            data-wow-delay="0.7s"
          >
            <img src="assets/img/hero/hero-one-small-2.webp" alt="Image" />
          </div>
        </div>
      </section>
      {/*====== Hero Area End ======*/}

      {/*====== Categories Section Start ======*/}
      {/* <section className="popular-categories section-gap">
        <div className="container">
          <div className="categories-header">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" /> what we do
                    <span className="heading-shadow-text">Category</span>
                  </span>
                  <h2 className="title">Popular Categories</h2>
                </div>
              </div>
              <div className="col-auto">
                <Link href="/project-1">
                  <a className="main-btn mb-30">
                    View All Category <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center fancy-icon-boxes">
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <i className="flaticon-reading-book" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Education</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <i className="flaticon-stethoscope" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Medical &amp; Health</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <i className="flaticon-tshirt-1" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Clothes</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <i className="flaticon-video-camera" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Video &amp; Films</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <i className="flaticon-project-management" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Technology</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <i className="flaticon-salad" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Organic Foods</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== Categories Section End ======*/}
      {/*====== About Section Start ======*/}
      <section className="about-section-one section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-lg-start justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-9">
              <div className="about-img">
                <img
                  src="../assets/img/about/childrens-playing.webp"
                  alt="Image"
                  style={{ borderRadius: '2rem' }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-10 ">
              <div className="about-text mt-md-70 mb-md-50">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    {/* <i className="fas fa-plus" /> who we are */}
                    <span className="heading-shadow-text">About Us</span>
                  </span>
                  <h2 className="">
                    If you light a lamp for Somebody, it will also brighten your
                    path -Buddha
                  </h2>
                </div>
                <p className="font-size-sm">
                  NAVRATAN FOUNDATIONS, a registered non-profit society
                  dedicated to advancing community development with a strong
                  commitment to achieving the Sustainable Development Goals
                  (SDGs). Our primary goal is to foster comprehensive and
                  value-based community growth by extending support and
                  resources to those in need.
                </p>
                <div className="author-note wow fadeInUp">
                  <ul className="teamflex text-center">
                    <Link href={'/contact'} className="">
                      <li className="flex-1 cursor-pointer">
                        <FaUsers className="author-note-icon users-icon " />
                        <h5>Join Our Team</h5>
                        <p className="font-size-sm font-weight-medium">
                          Explore opportunities to work for Navratan Foundations
                        </p>
                      </li>
                    </Link>
                    <Link href={'/donate'} className="">
                      <li className="flex-1 cursor-pointer">
                        <FaHandsHelping className="author-note-icon helping-icon" />
                        <h5>Start Contributing</h5>
                        <p className="font-size-sm font-weight-medium">
                          Support the cause and make a difference
                        </p>
                      </li>
                    </Link>
                  </ul>
                </div>
                <Link href="/about">
                  <a className="main-btn mt-35 button-center">
                    Know More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Section End ======*/}
      {/*====== Project Section Start ======*/}
      <section
        className="project-section project-section-extra-gap secondary-bg"
        style={{ backgroundColor: '#b6dceda8' }}
      >
        <div className="container-fluid fluid-extra-padding">
          <div className="common-heading text-center color-version-white mb-60">
            <span className="tagline">
              {/* <i className="fas fa-plus" /> NAVRATAN’s PRIORITIES */}
              <span className="heading-shadow-text">Our Projects</span>
            </span>
            <h2 className="title black">The Projects that Defines Us</h2>
          </div>
          <div
            className="row project-slider-one project-items project-style-one no-shadow"
            style={{ justifyContent: 'center' }}
          >
            <ProjectsGallery />
            {/* <div className="col">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: 'url(assets/img/project/gyanpeeth.webp)',
                  }}
                />
                <div className="content">
                  <h5 className="title text-center">
                    <Link href="/project-details">
                      <a className="font-size-xl">Navratan Gyanpeeth</a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value text-center">
                      <span
                        className="value-title"
                        style={{ margin: '0 auto' }}
                      >
                        Empowering Underprivileged Children
                        <br />
                        <br />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: 'url(assets/img/project/umeed.webp)',
                  }}
                />
                <div className="content">
                  <h5 className="title text-center">
                    <Link href="/project-details">
                      <a className="font-size-xl">Umeed</a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className=" text-center">
                      <span className="value-title">
                        Shikshit Mahila, Unnat Rashtra
                        <br />
                        <br />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: 'url(assets/img/project/cyberurja.webp)',
                  }}
                />
                <div className="content">
                  <h5 className="title text-center">
                    <Link href="/project-details">
                      <a className="font-size-xl">CYBERURJA</a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value text-center">
                      <span
                        className="value-title"
                        style={{ margin: '0 auto' }}
                      >
                        Empowering with Computer Education
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/*====== Project Section End ======*/}
      {/*====== Counter Area Start ======*/}
      <section className="counter-section-one mt-negative">
        <div className="container primary-bg border-radius">
          <div className="row counter-boxes justify-content-xl-between justify-content-center">
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon black-color">
                  <img src="../assets/img/home/ngo.png" alt="NGO" />
                </div>
                <div className="content black-color">
                  <div className="count-wrap">
                    <Counter end={21} />
                    {/* <span className="suffix">+</span> */}
                  </div>
                  <h6 className="title">Years in Service</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon black-color">
                  <img src="../assets/img/home/budget.png" alt="budget" />
                </div>
                <div className="content black-color">
                  <div className="count-wrap">
                    <Counter end={27} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Projects Funded</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon black-color">
                  <img src="../assets/img/home/volunteer.png" alt="volunteer" />
                </div>
                <div className="content black-color">
                  <div className="count-wrap">
                    <Counter end={45} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Volunteers</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon black-color">
                  <img
                    src="../assets/img/home/commitment.png"
                    alt="CSR Partnerships"
                  />
                </div>
                <div className="content black-color">
                  <div className="count-wrap">
                    <Counter end={12} />
                    {/* <span className="suffix">+</span> */}
                  </div>
                  <h6 className="title">CSR Partnerships</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Counter Area End ======*/}
      {/*====== Testimonials Start ======*/}
      <section className="testimonials-section section-gap">
        <div className="container">
          <div className="row " style={{ justifyContent: 'center' }}>
            <div className="col-xl-4  col-md-10 col-sm-10 mx-auto">
              <div className="testimonials-content mb-lg-50 ">
                <div className="common-heading mb-30">
                  {/* <span className="tagline">
                    <i className="fas fa-plus" /> clients Feedback
                    <span className="heading-shadow-text">Testimonials</span>
                  </span> */}
                  <h2 className="title">
                    At NAVRATAN FOUNDATIONS our efforts are towards achieving
                    SDG
                  </h2>
                </div>
                <p style={{ fontSize: '1.4rem' }}>
                  We are dedicated to promoting gender equality, quality
                  education, decent work, economic growth, and mental health, in
                  alignment with SDGs 4, 5, 8, and 3.
                </p>
                <Link href="/projects">
                  <a className="main-btn mt-35">
                    Learn More <i className="far fa-arrow-right" />
                  </a>
                </Link>
                {/* <div
                  className="testimonial-author-boxes wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <h6>Most Popular Clients</h6>
                  <ul className="author-images">
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Donald L. Juarez"
                    >
                      <a href="#">
                        <img
                          src="assets/img/author-thumbs/01.jpg"
                          alt="user one"
                        />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Evan A. Ethridge"
                    >
                      <a href="#">
                        <img
                          src="assets/img/author-thumbs/02.jpg"
                          alt="user one"
                        />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Donald L. Lewis"
                    >
                      <a href="#">
                        <img
                          src="assets/img/author-thumbs/03.jpg"
                          alt="user one"
                        />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Marcus L. Duncan"
                    >
                      <a href="#">
                        <img
                          src="assets/img/author-thumbs/04.jpg"
                          alt="user one"
                        />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Evan A. Ethridge"
                    >
                      <a href="#">
                        <img
                          src="assets/img/author-thumbs/05.jpg"
                          alt="user one"
                        />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="M. Jon Doe"
                    >
                      <a href="#">
                        <img
                          src="assets/img/author-thumbs/06.jpg"
                          alt="user one"
                        />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="More"
                    >
                      <a href="#" className="more-icon">
                        <i className="far fa-plus" />
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-xl-8 col-lg-10">
              <div className="testimonial-boxes square-shape">
                <div className="row  justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-10">
                    <div
                      className="testimonial-box-one wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <div className="author-info gems-container">
                        <img src="../assets/img/gems/sdg-1.png" alt="SDG 1" />
                      </div>
                      <p className="testimonial-desc text-center">
                        Ensuring inclusive and equitable quality education and
                        promoting lifelong learning opportunities for all
                      </p>
                    </div>
                    <div
                      className="testimonial-box-one mt-30 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="author-info gems-container">
                        <img src="../assets/img/gems/sdg-2.png" alt="SDG 2" />
                      </div>
                      <p className="testimonial-desc text-center">
                        Working towards achieving gender equality and empowering
                        all women and girls
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-10">
                    <div
                      className="testimonial-box-one mt-30 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="author-info gems-container">
                        <img src="../assets/img/gems/sdg-3.png" alt="SDG 3" />
                      </div>
                      <p className="testimonial-desc text-center">
                        Promoting sustained, inclusive, and sustainable economic
                        growth, full and productive employment, and decent work
                        for all
                      </p>
                    </div>
                    <div
                      className="testimonial-box-one mt-30 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="author-info gems-container">
                        <img src="../assets/img/gems/sdg-4.png" alt="SDG 4" />
                      </div>
                      <p className="testimonial-desc text-center">
                        Ensuring healthy lives and promoting well-being for all
                        at all ages
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Testimonials End ======*/}
      {/*====== Emergency Project & CTA Start ======*/}
      <section className="emergency-project-with-cta">
        <div className="container">
          {/* Call to Action */}
          <div
            className="cta-box cta-double-content"
            style={{
              backgroundImage: 'url(assets/img/home/childrens.webp)',
              borderRadius: '2rem',
            }}
          >
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="content">
                  <h2 className="cta-title">
                    Look forward to your helping hand in providing a better life
                    and future for many deserving children.
                  </h2>
                  {/* <p>
                    Sed perspiciatis unde omniste natus error sit voluptatem
                    accusantium doloremque laudan totamrem aperiam eaque quae
                    abille
                  </p> */}
                  <Link href="/contact">
                    <a className="main-btn">
                      Get Involved <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              {/* <div className="col-xl-2 col-lg-1 cta-double-content-gap" />
              <div className="col-xl-4 col-lg-5 col-md-9">
                <div className="content">
                  <h2 className="cta-title">Access Data And Insights</h2>
                  <p>
                    Sed perspiciatis unde omniste natus error sit voluptatem
                    accusantium doloremque laudan totamrem aperiam eaque quae
                    abille
                  </p>
                  <Link href="/events">
                    <a className="main-btn">
                      Start a Funden <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="emergency-project-slider">
          <div className="container">
            <div className="common-heading text-center mb-60">
              <span className="tagline">
                {/* <i className="fas fa-plus" /> Recognizing Impact */}
                <span className="heading-shadow-text">Recognizing Impact</span>
              </span>
              <h2 className="title">Navratan Foundations in the Spotlight</h2>
            </div>
            <Slider
              {...imageTextBlockSlider}
              className="row project-slider-two project-items project-style-four"
            >
              <div className="col">
                <div className="project-item" style={{ width: '100%' }}>
                  <div
                    className="thumb"
                    style={{
                      backgroundImage: 'url(assets/img/awards/awards-1.jpg)',
                      borderRadius: '2rem',
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div className="project-item" style={{ width: '100%' }}>
                  <div
                    className="thumb"
                    style={{
                      backgroundImage: 'url(assets/img/awards/awards-2.jpg)',
                      borderRadius: '2rem',
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div className="project-item" style={{ width: '100%' }}>
                  <div
                    className="thumb"
                    style={{
                      backgroundImage: 'url(assets/img/awards/awards-3.jpg)',
                      borderRadius: '2rem',
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div className="project-item" style={{ width: '100%' }}>
                  <div
                    className="thumb"
                    style={{
                      backgroundImage: 'url(assets/img/awards/awards-4.jpg)',
                      borderRadius: '2rem',
                    }}
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/*====== Emergency Project & CTA End ======*/}
      {/*====== Partners Section Start ======*/}
      <section className="partners-section section-gap pb-0">
        <div className="container">
          <div className="common-heading mb-30">
            <span className="tagline">
              {/* <i className="fas fa-plus" /> Our Partners */}
              <span className="heading-shadow-text">Partners</span>
            </span>
            <h2 className="title">
              CHANGING LIVES TOGETHER: Our Partners in Progress
            </h2>
          </div>
          {/* <div className="row partners-logos-one"> */}
          <Slider {...projectSliderTwo} className="row partners-logos-one ">
            <div className="col-lg-3 col-md-6 col-sm-6 logo-client ">
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
            <div className="col-lg-3 col-md-6 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-2.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-3.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-4.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-5.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-6.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-7.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-8.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-9.jpg" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 logo-client">
              <div className="logo mt-30">
                <a>
                  <img src="assets/img/clients/client-10.jpg" alt="Image" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
        {/* </div> */}
      </section>
      {/*====== Partners Section End ======*/}

      <section className="events-one">
        <div className="events-one-shape-1"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-6  mx-auto">
              <img src="assets/img/social-emotional.png" width="100%" />
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="about-one__right">
                <div className="section-title text-left">
                  <h2 className="section-title__title">
                    Social Emotional Reach Programme
                  </h2>
                </div>
                <p className="about-one__text">
                  Social-emotional development and support should become an
                  essential piece and mainstay of our lives. Education and
                  awareness around it should flow smoothly to establish the
                  framework for positive social associations, bringing about
                  effective positive mental health in the community. Youths and
                  the old, being the most vulnerable sections of society need
                  our helping hands and gracious charity to curb their
                  psychological barriers and break their opinionated silence. To
                  settle themselves they need to be counseled well and a Social
                  Emotional Reach campaign makes it easy to reach out to such
                  individuals. We have collaborated with DayaRani Wellness
                  Advisory.
                </p>
                <br />
                <a
                  className="main-btn"
                  href="https://dayarani.in/"
                  target="_blank"
                >
                  Discover More <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Latest News Start ======*/}
      <section className="latest-blog-section section-gap pt-0">
        <div className="container">
          <div className="common-heading text-center mb-30">
            <span className="tagline">
              {/* <i className="fas fa-plus" /> stories */}
              <span className="heading-shadow-text">Inspiring Stories</span>
            </span>
            <h2 className="title">MOVING STORIES: Bringing Tales to Life</h2>
          </div>
          <div className="row justify-content-center latest-blog-posts style-one">
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <iframe
                    title="80-Year-Old Mrs. Janki B Lakhani - Enrolls at Club 26, NOIDA to Pursue Basic Computer Course"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/qxmODX7O0Cg?wmode=transparent&amp;vq=hd1080&amp;rel=0&amp;showinfo=0&amp;iframe=1&amp;fs=1&amp;modestbranding=0&amp;autoplay=0&amp;theme=dark&amp;feature=oembed"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <iframe
                    title="80-Year-Old Mrs. Janki B Lakhani - Enrolls at Club 26, NOIDA to Pursue Basic Computer Course"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/MdNISIvVyNY?wmode=transparent&vq=hd1080&rel=0&showinfo=0&iframe=1&fs=1&modestbranding=0&autoplay=0&theme=dark&feature=oembed"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <iframe
                    title="80-Year-Old Mrs. Janki B Lakhani - Enrolls at Club 26, NOIDA to Pursue Basic Computer Course"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/AYHkgonbN8s?wmode=transparent&vq=hd1080&rel=0&showinfo=0&iframe=1&fs=1&modestbranding=0&autoplay=0&theme=dark&feature=oembed"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
