import Link from 'next/dist/client/link';
import { useState } from 'react';
import PageBanner from '../src/components/PageBanner';
import VideoPopup from '../src/components/VideoPopup';
import Layout from '../src/layouts/Layout';

const Founder = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner pageName="Founder's Profile" />
      <section className="about-section-four section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="about-img mb-md-70">
                <img src="assets/img/about/founder_image.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="about-text">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    {/* <i className="fas fa-plus" /> Founder */}
                    <span className="heading-shadow-text">
                      Founder's Message
                    </span>
                  </span>
                  <h2 className="title">
                    “Be the change you wish to see in the world.”
                  </h2>
                </div>
                <p className="mb-20">
                  These words of Mahatma Gandhi aptly describe the founder of
                  Navratan Foundations, Ashok Srivastava. An electrifying,
                  charismatic, and charming personality, he is a man with a
                  noble mission – to touch the lives of those in need of a
                  healing presence. His rock-solid determination and
                  never-say-no-no attitude make him stand apart from others. He
                  is an avid believer in Doing what you can, with what you have,
                  wherever you are. With this thought, Ashok started the
                  Navratan Foundation in 2002.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center   mt-5 pb-5">
            <div className="col-sm-12">
              <div className="about-text mb-lg-50">
                <p>
                  Being a member of many prominent social organizations since
                  his early youth gave him an edge while viewing different
                  perspectives of issues on the ground. Leaving behind a
                  lucrative corporate life to work with people at the grassroots
                  level was not a sacrifice but a compulsive desire to inspire
                  those who had the intent but lacked the motivation to bring
                  change.
                </p>
                <br />
                <p>
                  A philanthropist and a social thought leader, Ashok focused
                  his energies on creating a social enterprise. The foundation
                  focused on unseen talent and created programs and initiatives
                  around it which were pursued in a holistic and sustainable
                  manner.
                </p>
                <br />

                <p>
                  <span style={{ fontWeight: '600' }}>
                    An orator and speaker of the highest caliber, it is Ashok’s
                    wit and ability to hold a conversation that makes him a
                    people person. A social entrepreneur with a penchant for
                    honing talent, he aims to bring a new dawn in the lives of
                    the less fortunate. With the passing of time, his desire to
                    improve and enhance the quality of life for the oppressed
                    and marginalized sections, build capacity, and help those
                    who have been suppressed in the social and economic domain
                    is on a high.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Section End ======*/}
      {/*====== Categories Section Start ======*/}
      {/* <section className="categories-with-video">
        <div className="categories-area">
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
        </div>
        <div className="video-area">
          <div className="container">
            <div className="funden-video">
              <img src="assets/img/video/04.jpg" alt="Image" />
              <a
                href="#"
                className="video-popup"
                onClick={() => setVideo(true)}
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== Categories Section End ======*/}
      {/* <section className="stories-section section-gap-top">
        <div className="container-fluid fluid-extra-padding">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="image-text-block text-block-two mb-lg-50">
                <div className="block-img">
                  <img src="assets/img/text-block/02.jpg" alt="Image" />
                </div>
                <div className="block-content">
                  <div className="common-heading mb-40">
                    <span className="tagline">
                      <i className="fas fa-plus" /> top Funding stories
                      <span className="heading-shadow-text">Top Stories</span>
                    </span>
                    <h2 className="title">Dustin B. Horton</h2>
                  </div>
                  <p className="mb-30">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudanttotam rem aperiam
                    eaque psa quae abillo inventore verit atis et quasi
                    architecto beatae vitae
                  </p>
                  <p className="italic-text">
                    On the other hand, we denounce with righteous dignation and
                    dislike men who are so beguiled
                  </p>
                  <Link href="/about">
                    <a className="main-btn bordered-btn mt-40">
                      Learn More <i className="far fa-angle-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-10">
              <div className="image-text-block text-block-two">
                <div className="block-img">
                  <img src="assets/img/text-block/03.jpg" alt="Image" />
                </div>
                <div className="block-content">
                  <div className="common-heading mb-40">
                    <span className="tagline">
                      <i className="fas fa-plus" /> top Funding stories
                      <span className="heading-shadow-text">Top Stories</span>
                    </span>
                    <h2 className="title">Maurice Gibbons</h2>
                  </div>
                  <p className="mb-30">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudanttotam rem aperiam
                    eaque psa quae abillo inventore verit atis et quasi
                    architecto beatae vitae
                  </p>
                  <p className="italic-text">
                    On the other hand, we denounce with righteous dignation and
                    dislike men who are so beguiled
                  </p>
                  <Link href="/about">
                    <a className="main-btn bordered-btn mt-40">
                      Learn More <i className="far fa-angle-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== Feature Section Start ======*/}
      {/* <section className="feature-section feature-section-one section-gap-extra-bottom">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-10">
              <div className="feature-content mb-md-70">
                <div className="common-heading mb-45">
                  <span className="tagline">
                    <i className="fas fa-plus" /> What we do
                    <span className="heading-shadow-text">Features</span>
                  </span>
                  <h2 className="title">Why Choose us</h2>
                </div>
                <div className="fancy-icon-list">
                  <div
                    className="fancy-list-item wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="icon">
                      <i className="flaticon-debit-card" />
                    </div>
                    <div className="content">
                      <h4 className="title">Fast &amp; Easy Payouts</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusan doloremque
                      </p>
                    </div>
                  </div>
                  <div
                    className="fancy-list-item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon">
                      <i className="flaticon-payment" />
                    </div>
                    <div className="content">
                      <h4 className="title">Global Payment Processing</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusan doloremque
                      </p>
                    </div>
                  </div>
                  <div
                    className="fancy-list-item wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="icon">
                      <i className="flaticon-wallet-1" />
                    </div>
                    <div className="content">
                      <h4 className="title">Many Payment Options</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusan doloremque
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="feature-img">
                <img src="assets/img/feature-img.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Founder;
