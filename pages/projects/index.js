import Link from 'next/dist/client/link';
import PageBanner from '../../src/components/PageBanner';
import Layout from '../../src/layouts/Layout';

const Project1 = () => {
  return (
    <Layout>
      <PageBanner pageName="Our Projects" />
      <section className="project-section section-gap-extra-bottom primary-soft-bg">
        <div className="container">
          <div className="row project-items justify-content-center project-style-one">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: 'url(assets/img/project/astitva.webp)',
                  }}
                />
                <div className="content">
                  {/* <div className="cats">
                    <Link href="/project-1">Video &amp; Movies</Link>
                  </div> */}
                  {/* <div className="author">
                    <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                    <Link href="/project-1">James W. Barrows</Link>
                  </div> */}
                  <h5 className="title text-center ">
                    <Link href="/projects/astitva">
                      <a className="font-size-xl">Astitva</a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value text-center">
                      <span className="value-title ">
                        A woman’s journey towards Self-Empowerment
                      </span>
                    </div>
                    {/* <div className="stats-bar" data-value={79}>
                      <div className="bar-line" />
                    </div> */}
                  </div>
                  {/* <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: 'url(assets/img/project/gyanpeeth.webp)',
                  }}
                />
                <div className="content">
                  <h5 className="title text-center">
                    <Link href="/projects/gyanpeeth">
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
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: 'url(assets/img/project/umeed.webp)',
                  }}
                />
                <div className="content">
                  <h5 className="title text-center">
                    <Link href="/projects/umeed">
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
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: 'url(assets/img/project/cyberurja.webp)',
                  }}
                />
                <div className="content">
                  <h5 className="title text-center">
                    <Link href="/projects/cyberurja">
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Project1;
