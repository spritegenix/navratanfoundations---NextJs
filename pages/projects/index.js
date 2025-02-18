import Link from 'next/dist/client/link';
import PageBanner from '../../src/components/PageBanner';
import Layout from '../../src/layouts/Layout';
import ProjectsGallery from '../../src/components/ProjectsCard';

const Project1 = () => {
  return (
    <Layout>
      <PageBanner pageName="Our Projects" />
      <section className="project-section section-gap-extra-bottom  pt-5 primary-soft-bg">
        <div className="p-5">
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
    </Layout>
  );
};

export default Project1;
