import Link from 'next/link';
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

      {/* Hero Image Section */}
      {/* <section className="about-section-four">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="about-img text-center">
                <img
                  src="assets/img/support-a-cause.jpg"
                  alt="Support a Cause"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Donation Section */}
      <section className="feature-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-4">
                <h2 className="fw-bold">
                  “We make a living by what we get. <br />
                  We make a life by what we give.”
                </h2>
                <p className="text-muted">- Winston S. Churchill</p>
              </div>
              <div className="text-center">
                <p className="lead">
                  At <strong>Navratan Gyanpeet</strong>, all a child needs is a
                  little help from a generous donor. Your monthly contribution
                  of <strong>Rs.500/- per child</strong> will cover education
                  and basic needs, ensuring no child has to drop out of school.
                </p>
                <p className="lead">
                  Sponsor a child's education or contribute to other ongoing
                  projects such as{' '}
                  <strong>
                    women's vocational skill training, adult education, gender
                    equality, and health awareness programs.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Details Section */}
      <section className="feature-section section-gap-extra-bottom pt-0">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="feature-content">
                <h3 className="fw-bold mb-3">
                  We Accept Donations via Net Banking
                </h3>
                <p className="mb-4 text-muted">
                  <strong>IMPORTANT:</strong> Corporation Bank has merged with{' '}
                  <strong>UNION BANK OF INDIA</strong>. Please use the updated
                  bank details below:
                </p>
                <div className="p-4 bg-light rounded shadow-sm">
                  <h5 className="fw-bold mb-2">Navratan Foundations</h5>
                  <p className="mb-1">
                    <strong>Bank:</strong> UNION BANK OF INDIA
                  </p>
                  <p className="mb-1">
                    <strong>Account Number:</strong> 520101058691894
                  </p>
                  <p className="mb-1">
                    <strong>IFSC Code:</strong> UBIN0912484
                  </p>
                  <p className="text-success">
                    (All donations are tax-exempt under <strong>80-G</strong>)
                  </p>
                </div>
                <p className="mt-4 fw-bold">
                  "Think of giving not as a duty, but as a privilege."
                </p>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div className="feature-img">
                <img
                  src="assets/img/qr.jpg"
                  alt="QR Code for Donation"
                  className="img-fluid rounded shadow"
                  style={{ maxWidth: '300px' }}
                />
                <p className="mt-3 text-muted">Scan the QR Code to Donate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
