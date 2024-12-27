import Link from 'next/dist/client/link';
import PageBanner from '../../src/components/PageBanner';
import Layout from '../../src/layouts/Layout';
import { Router, useRouter } from 'next/router';
const projectData = [
  {
    url: 'samarpan',
    title: 'Samarpan',

    description: [
      {
        text: "Samarpan, as the name implies, is the culmination of Navratan Foundation's year-long efforts. It is an award function that showcases the organization’s accomplishments and is attended by hundreds of people. Instead of producing a sustainability report, we celebrate Samarpan by recognizing individuals and organizations who have quietly made significant contributions to society. It is a platform to acknowledge the work of Navratan and others in areas such as education, health, environment, elderly care, women’s empowerment, poverty eradication, and child protection.",
      },
      {
        text: 'We invite applications from the social sector, and a panel of distinguished individuals selects the awardees based on the nature and impact of their work on beneficiaries. Navratan sponsors nearly 20 awards each year, while some are sponsored by members in memory of their loved ones.',
      },
    ],

    subHeading:
      'Samarpan is our flagship event, an annual tribute to the entire Navratan community. Many of our awardees have gained prominence over the years for their extraordinary efforts. Through Samarpan, we continue to demonstrate the added value of our work year after year. Most importantly, the number of people we support is growing.',

    longTermGoal: [
      {
        text: '',
      },
      {
        text: '',
      },
    ],
    gallery: [
      {
        imgSrc: '../assets/img/events/event-4.jpg',
        alt: 'Image',
      },
      {
        imgSrc: '../assets/img/events/event-5.jpg',
        alt: 'Image',
      },
    ],
  },
  {
    url: 'jo-aaye-wo-gaye',
    title: 'Jo Aaye Wo Gaye',
    description: [
      {
        text: "For millennia, music has not only been a source of entertainment but also a potent means of communication and celebration of life. It serves as a universal language that transcends boundaries, enabling the expression of a wide spectrum of emotions. Despite Noida's rich cultural heritage, the city has faced challenges in establishing a communal platform for art and music.",
      },
      {
        text: 'In response to this need, Navratan created Jo Aaye Woh Gaaye a singing competition that has effectively brought people together and provided a platform for hidden talents to shine. While some may question the societal relevance of organizing a singing contest, attendees of Navratan’s monthly program would attest to its positive impact on fostering community bonds and enhancing mental well- Being.',
      },
    ],

    subHeading:
      'If you possess a fervor for singing, Navratan extends an invitation for you to partake in their monthly musical events and engage with the community. There is no better stage than one with a live orchestra to showcase your talent and connect with kindred spirits who share your profound love for music.',

    longTermGoal: [
      {
        text: 'What initially began as a simple idea has evolved into a musical cornerstone over the past five years, showcasing the remarkable power of music to unite individuals and offer an avenue for artistic expression. Through this platform, Navratan has been able to identify and nurture talented individuals who may otherwise have missed the chance to pursue their passions.',
      },
      {
        text: "Navratan firmly believes that this talent search isn't just a means of enhancing mental health but also a way to support and mentor individuals with untapped potential. As the founder of Navratan asserts, talent resides within everyone, and the organization serves as a medium to assist individuals in honing their skills and achieving their aspirations.",
      },
    ],
    gallery: [
      {
        imgSrc: '../assets/img/events/event-2.jpg',
        alt: 'Image',
      },
      {
        imgSrc: '../assets/img/events/event-3.jpg',
        alt: 'Image',
      },
    ],
  },
  {
    url: 'sheet-kavatch',
    title: 'Sheet Kavatch',
    description: [
      {
        text: 'Each November, we make it a tradition to connect with both government and slum schools, reaching out to distribute cozy V-neck, blue uniform sweaters to School children.',
      },
      {
        text: 'The overwhelming response from generous individuals who contribute to this noble cause warms our hearts. Witnessing the anticipation of children as they eagerly await our NGO’s sweater distribution is truly heartwarming.',
      },
    ],

    subHeading:
      'In Gautam Budh Nagar alone, we extend our assistance to approximately 50 schools, distributing over 10,000 warm sweaters.',

    longTermGoal: [
      {
        text: '',
      },
      {
        text: '',
      },
    ],
    gallery: [
      {
        imgSrc: '../assets/img/events/event-6.jpg',
        alt: 'Image',
      },
      {
        imgSrc: '../assets/img/events/event-7.jpg',
        alt: 'Image',
      },
    ],
  },
];
export async function getStaticProps({ params }) {
  const { id } = params;

  // Fetch the data for each service (replace with actual data fetching logic)

  const service = projectData.map((blog) => blog.url === id) || null;

  if (!service) {
    return { notFound: true }; // Return a 404 page if the service is not found
  }

  return {
    props: { service }, // Pass the service data as props to the component
  };
}
export async function getStaticPaths() {
  const projects = [
    { id: 'jo-aaye-wo-gaye' },
    { id: 'samarpan' },
    { id: 'sheet-kavatch' },
  ];

  const paths = projects.map((service) => ({
    params: { id: service.id },
  }));

  return {
    paths,
    fallback: false, // This ensures only the paths specified will be generated during build time
  };
}

const InitiativeDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const filterData = projectData.filter((item) => item.url === id);
  const capitalName =
    filterData[0].url.charAt(0).toUpperCase() + filterData[0].url.slice(1);
  return (
    <Layout>
      <PageBanner pageName={filterData[0].title} />
      <section className="project-details-area section-gap-extra-bottom pt-0">
        <div className="container">
          <h2
            className="row project-title align-items-center justify-content-center p-4 "
            style={{ fontSize: '4rem' }}
          >
            {filterData[0].title}
          </h2>

          <div className="col-12">
            <div className="project-details-tab mt-0">
              <div className="tab-content" id="projectTabContent">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                >
                  <div className="row justify-content-center">
                    <div className="col-xl-5  col-lg-4 p-0 m-0">
                      <div className="description-content p-0 pb-5 m-0">
                        <p>{filterData[0].description[0].text}</p>
                        <br />
                        <p>{filterData[0].description[1].text}</p>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-8 col-md-10">
                      <div className="about-gallery wow fadeInRight">
                        <div className="img-one">
                          <img
                            src={filterData[0].gallery[0].imgSrc}
                            alt="Image"
                          />
                        </div>
                        <div className="img-two wow fadeInUp">
                          <img
                            src={filterData[0].gallery[1].imgSrc}
                            alt="Image"
                          />
                        </div>
                        <div className="pattern">
                          <img
                            src="../assets/img/about/about-gallery-pattern.png"
                            alt="Pattern"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h4 className="description-title">
                      <h6>{filterData[0].subHeading}</h6>
                    </h4>
                    <p>{filterData[0].longTermGoal[0].text}</p>
                    <br />
                    <p>{filterData[0].longTermGoal[1].text}</p>
                    <br />
                    <p style={{ fontWeight: '500' }}>
                      “If you light a lamp for somebody, it will also brighten
                      your path.” – Buddha. At Navratan Foundations, we believe
                      that every act of kindness has a ripple effect. Your
                      donation is not just a gift; it is a beacon of hope, a
                      step towards a future where every individual, regardless
                      of their background, can live with dignity, empowerment,
                      and opportunity.
                    </p>
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

export default InitiativeDetails;
