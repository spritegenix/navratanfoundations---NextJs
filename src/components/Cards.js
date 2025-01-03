import React from 'react';

const Cards = () => {
  return (
    <section className="pricing-section section-gap-extra-bottom primary-soft-bg ">
      <div className="container">
        <div className="row pricing-boxes justify-content-center">
          <div
            className="col-xl-4 col-lg-6 col-md-8 col-sm-10 wow fadeInUp"
            data-wow-delay="0s"
          >
            <div className="pricing-box mb-30">
              <h4 className="plan-name">
                Volunteering Opportunities Empower Lives: Volunteer with
                Navratan Foundations
              </h4>

              <ul className="plan-feature">
                <li>
                  <i className="fas fa-heart" /> Navratan Foundations welcomes
                  volunteers aged 18 and above to contribute to the development
                  sector.
                </li>
                <li>
                  <i className="fas fa-heart" /> Volunteers must be ready to
                  devote at least 12 hours per week.
                </li>
                <li className="">
                  <i className="fas fa-heart" /> Opportunities are available
                  based on your credentials, whether for fieldwork or office
                  tasks.
                </li>
                <li className="">
                  <i className="fas fa-heart" /> Your efforts will support
                  initiatives in education for out-of-school children, women
                  empowerment, environmental projects, and effective
                  communication.
                </li>
              </ul>

              <div className="plan-shape">
                <img src="assets/img/get-involed-1.jpg" alt />
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-8 col-sm-10 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="pricing-box  mb-30">
              <h6 className="plan-name">
                Internship Program Shape the Future: Intern at Navratan
                Foundations
              </h6>

              <ul className="plan-feature">
                <li>
                  <i className="fas fa-heart" /> Navratan Foundations offers
                  internships for university students seeking meaningful
                  experience while contributing to a noble cause.
                </li>
                <li>
                  <i className="fas fa-heart" /> Internships are available for a
                  minimum of one month and up to three months.
                </li>
                <li>
                  <i className="fas fa-heart" /> Although unpaid, interns will
                  receive a certificate acknowledging their dedication to our
                  mission.
                </li>
                <li className="">
                  <i className="fas fa-heart" /> Be part of our transformative
                  journey and make a positive impact.
                </li>
              </ul>

              <div className="plan-shape">
                <img src="assets/img/get-involed-1.jpg" alt />
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-8 col-sm-10 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="pricing-box mb-30">
              <h6 className="plan-name">
                Trustee Opportunities Become a Lifelong Champion: Trustee /
                Honorary Trustee Opportunities
              </h6>

              <ul className="plan-feature">
                <li>
                  <i className="fas fa-heart" /> Navratan Foundations offers the
                  position of Trustee or Honorary Trustee for a lifetime.
                </li>
                <li>
                  <i className="fas fa-heart" /> We seek respectable individuals
                  passionate about social development and impactful
                  contributions.
                </li>
                <li>
                  <i className="fas fa-heart" /> Trustees dedicate themselves to
                  creating a lasting positive impact and shaping a brighter
                  future.
                </li>
                <li>
                  <i className="fas fa-heart" /> Be part of our mission to make
                  a meaningful difference in the lives of many.
                </li>
              </ul>

              <div className="plan-shape">
                <img src="assets/img/get-involed-1.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
