import Link from 'next/dist/client/link';
import PageBanner from '../../src/components/PageBanner';
import Layout from '../../src/layouts/Layout';

const Events = () => {
  return (
    <Layout>
      <PageBanner pageName="Our Initiatives" />
      <section className="project-section section-gap-extra-bottom primary-soft-bg">
        <div className="container">
          <div className="row project-items justify-content-center project-style-one">
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-10"
              style={{ cursor: 'pointer' }}
            >
              <Link href="/our-initiatives/jo-aaye-wo-gaye">
                <div className="project-item mb-30">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage: 'url(assets/img/events/event-2.jpg)',
                      height: '400px',
                    }}
                  />
                  <div className="content">
                    <h5 className="title text-center ">
                      <Link href="/our-initiatives/jo-aaye-wo-gaye">
                        <a className="font-size-xl">Jo Aaye Wo Gaye</a>
                      </Link>
                    </h5>
                    <div className="project-stats">
                      <div className="stats-value text-center">
                        <span className="value-title ">
                          Singing competition that has effectively brought
                          people together and provided a platform for hidden
                          talents to shine.
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
              </Link>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-10"
              style={{ cursor: 'pointer' }}
            >
              <Link href="/our-initiatives/samarpan">
                <div className="project-item mb-30">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage: 'url(assets/img/events/event-4.jpg)',
                      height: '400px',
                      backgroundPosition: 'top',
                    }}
                  />
                  <div className="content">
                    <h5 className="title text-center">
                      <Link href="/our-initiatives/samarpan">
                        <a className="font-size-xl">Samarpan</a>
                      </Link>
                    </h5>
                    <div className="project-stats">
                      <div className="stats-value text-center">
                        <span
                          className="value-title"
                          style={{ margin: '0 auto' }}
                        >
                          It is an award function that showcases the
                          organization’s accomplishments and is attended by
                          hundreds of people.
                          <br />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-10 "
              style={{ cursor: 'pointer' }}
            >
              <Link href="/our-initiatives/sheet-kavatch">
                <div className="project-item mb-30">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage: 'url(assets/img/events/event-6.jpg)',
                      height: '400px',
                    }}
                  />
                  <div className="content">
                    <h5 className="title text-center">
                      <Link href="/our-initiatives/sheet-kavatch">
                        <a className="font-size-xl">Sheet Kavatch</a>
                      </Link>
                    </h5>
                    <div className="project-stats">
                      <div className=" text-center">
                        <span className="value-title">
                          Distributing cozy V-neck, blue uniform sweaters to
                          School children.
                          <br />
                          <br />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
