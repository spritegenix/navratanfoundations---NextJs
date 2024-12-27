import Link from 'next/dist/client/link';
import PageBanner from '../../src/components/PageBanner';
import Layout from '../../src/layouts/Layout';

const Project1 = () => {
  return (
    <Layout>
      <PageBanner pageName="Our Projects" />
      <section className="project-section section-gap-extra-bottom  pt-5 primary-soft-bg">
        <div className="p-5">
          <div className="row project-items justify-content-center project-style-one">
            <div class="gallery-one__bottom">
              <div class="gallery-one__container">
                <ul class="list-unstyled gallery-one__list ">
                  <li
                    class="gallery-one__single wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div class="gallery-one__img">
                      <img src="assets/img/project/astitva.webp" alt="" />
                      <div class="gallery-one__content">
                        <h5 class="gallery-one__title">
                          <Link href="/projects/astitva">Astitva</Link>
                        </h5>
                        <p class="gallery-one__sub-title">
                          {' '}
                          A woman’s journey towards Self-Empowerment
                        </p>
                      </div>
                    </div>
                  </li>
                  <li
                    class="gallery-one__single wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div class="gallery-one__img">
                      <img src="assets/img/project/gyanpeeth.webp" alt="" />
                      <div class="gallery-one__content">
                        <h5 class="gallery-one__title">
                          <Link href="/projects/gyanpeeth">
                            Navratan Gyanpeeth
                          </Link>
                        </h5>
                        <p class="gallery-one__sub-title">
                          {' '}
                          Empowering Underprivileged Children
                        </p>
                      </div>
                    </div>
                  </li>
                  <li
                    class="gallery-one__single wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div class="gallery-one__img">
                      <img src="assets/img/project/umeed.webp" alt="" />
                      <div class="gallery-one__content">
                        <h5 class="gallery-one__title">
                          <Link href="/projects/umeed">Umeed</Link>
                        </h5>
                        <p class="gallery-one__sub-title">
                          {' '}
                          Shikshit Mahila, Unnat Rashtra
                        </p>
                      </div>
                    </div>
                  </li>
                  <li
                    class="gallery-one__single wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div class="gallery-one__img">
                      <img src="assets/img/project/cyberurja.webp" alt="" />
                      <div class="gallery-one__content">
                        <h5 class="gallery-one__title">
                          <Link href="/projects/cyberurja">CYBERURJA</Link>
                        </h5>
                        <p class="gallery-one__sub-title">
                          {' '}
                          A woman’s journey towards Self-Empowerment
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: 'url(assets/img/project/astitva.webp)',
                  }}
                />
                <div className="content">
                  {/* <div className="cats">
                    <Link href="/project-1">Video &amp; Movies</Link>
                  </div> 
                 
                  <h5 className="title text-center ">
                    <Link href="/project-details">
                      <a className="font-size-xl">Astitva</a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value text-center">
                      <span className="value-title ">
                        A woman’s journey towards Self-Empowerment
                      </span>
                    </div>
                 
                  </div>
              
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Project1;
