import Link from 'next/dist/client/link';
import { useState } from 'react';
import PageBanner from '../src/components/PageBanner';
import VideoPopup from '../src/components/VideoPopup';
import Layout from '../src/layouts/Layout';

const CompanyOverview = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner pageName="Company Overview" />
      <section className="about-section-four ">
        <div className="container">
          <h2 className="title p-5 text-center">
            Get Involved with Navratan Foundations
          </h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="about-img-5 mb-md-70">
                <img
                  src="assets/img/give.jpg"
                  alt="Image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="about-text">
                <div className="common-heading mb-30">
                  {/* <span className="tagline">
                    <i className="fas fa-plus" /> Who we are
                    <span className="heading-shadow-text">Who we are</span>
                  </span> */}
                  <h2 className="title">
                    Join Hands for Change: Be Part of Navratan Foundation's
                    Transformative Journey.
                  </h2>
                </div>
                <p className="mb-20">
                  At Navratan Foundations, we believe that change is driven by
                  collective efforts. Our mission for comprehensive community
                  development is only made possible with the support of
                  passionate individuals like you. Your involvement can be the
                  catalyst for positive change. Join Navratan Foundations and
                  help us create a world where hope, dignity, and transformation
                  flourish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Section End ======*/}

      <section className="feature-section  feature-section-one section-gap pt-0">
        <div className="container">
          <div className="row  justify-content-center align-items-center">
            <div
              className="justify-content-center align-items-center"
              style={{ display: 'flex' }}
            >
              <div className="feature-img col-9">
                <img src="assets/img/get-involed-1.jpg" alt />
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center section-gap  mt-5 ">
            <div className="col-sm-12">
              <div className="about-text ">
                <h3>
                  Volunteering Opportunities Empower Lives: Volunteer with
                  Navratan Foundations
                </h3>
                <br />
                <p>
                  Are you eager to make a direct impact on the ground? Navratan
                  Foundations welcomes volunteers aged 18 and above who are
                  interested in contributing to the development sector. If you
                  are ready to devote at least 12 hours per week, we offer
                  opportunities that match your credentials. Whether it's
                  fieldwork or office tasks, your efforts will contribute to our
                  work in education for out-of-school children, women
                  empowerment, environmental initiatives, and effective
                  communication.
                </p>
                <br />
                <h3>
                  Internship Program Shape the Future: Intern at Navratan
                  Foundations
                </h3>
                <br />
                <p>
                  Are you a university student looking to gain valuable
                  experience while contributing to a noble cause? Navratan
                  Foundations offers internships for a minimum of one month and
                  up to three months. While no remuneration is provided during
                  the internship period, you'll receive a certificate
                  recognizing your commitment to our mission. Join us as an
                  intern and be part of our transformative journey.
                </p>
                <br />
                <h3>
                  Trustee Opportunities Become a Lifelong Champion: Trustee /
                  Honorary Trustee Opportunities
                </h3>
                <br />
                <p>
                  Do you envision a lifelong commitment to social development
                  and positive contribution? Navratan Foundations offers the
                  esteemed position of Trustee or Honorary Trustee for a
                  lifetime. We seek respectable individuals who share our
                  passion for social impact and are willing to make a lasting
                  difference in the lives of many. Your role as a trustee is a
                  dedication to shaping a brighter future.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyOverview;
