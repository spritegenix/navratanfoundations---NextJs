import Link from 'next/dist/client/link';
import { useState } from 'react';
import PageBanner from '../src/components/PageBanner';
import VideoPopup from '../src/components/VideoPopup';
import Layout from '../src/layouts/Layout';

const Donate = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner pageName="Support A Cause" />
      <section className="about-section-four ">
        <div className="container pt-5">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="about-img mb-md-70">
                <img src="assets/img/support-a-cause.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Section End ======*/}
      <section className="feature-section feature-section-one py-5">
        <div className="container">
          <div className="row  justify-content-center align-items-center">
            <div className="col-12">
              <div className="feature-content mb-md-70">
                {/* Fancy Icon List */}
                <div className="fancy-icon-list">
                  <div
                    className="fancy-list-item wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="content">
                      <h4 className="title">
                        We make a living by what we get. <br />
                        We make a life by what we give. <br />
                        -Winston S. Churchill
                      </h4>
                    </div>
                  </div>
                  <div
                    className="fancy-list-item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="content">
                      <p>
                        At Navratan Gyanpeet all a child needs is a little help
                        from a generous donor. Your monthly donation of Rs.500/-
                        per month per child will take care of his education and
                        basic needs and will ensure that the child doesn't have
                        to drop out of school.
                      </p>
                    </div>
                  </div>
                  <div
                    className="fancy-list-item wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="content">
                      <p>
                        Sponsor a child's education or Get associated by
                        donating to other ongoing projects like the women's
                        vocational skill training, adult education, gender
                        equality, and health awareness program of Navratan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Feature Section Start ======*/}
      <section className="feature-section feature-section-one section-gap-extra-bottom pt-0">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-5 col-md-10">
              <div className="feature-content mb-md-70">
                {/* Fancy Icon List */}
                <div className="fancy-icon-list">
                  <div
                    className="fancy-list-item wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="content">
                      <h4 className="title">
                        We accept donations through net banking
                      </h4>
                      <p>
                        IMPORTANT: Corporation Bank has been merged with UNION
                        BANK OF INDIA, please note the new Bank Details:
                      </p>
                    </div>
                  </div>
                  <div
                    className="fancy-list-item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="content">
                      <p>Navratan Foundations</p>
                      <h4 className="title">
                        UNION BANK OF INDIA, <br />
                        S/B A/C: 520101058691894, <br />
                        IFSC: UBIN0912484.
                      </h4>
                      <p>(All donations are tax-exempt under 80-G)</p>
                    </div>
                  </div>
                  <div
                    className="fancy-list-item wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="content">
                      <p>Think of giving not as a duty but as a privilege</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div
                className="feature-img"
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <img src="assets/img/qr.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
