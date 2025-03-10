import Link from 'next/dist/client/link';
import PageBanner from '../../src/components/PageBanner';
import Layout from '../../src/layouts/Layout';
import { Router, useRouter } from 'next/router';
const projectData = [
  {
    url: 'astitva',
    title: 'Astitva',
    image: '../assets/img/project/astitva.webp',
    description: [
      {
        text: 'A Women’s journey towards Self-Empowerment. The empowerment of women stands as the most potent tool for development. This statement cannot be stressed enough. In a world where corporate India is increasingly emphasizing upskilling and reskilling through technology, it’s crucial to recognize that a significant portion of India’s workforce operates in the informal sector. It is in this context that Navratan’s flagship program, Astitva was conceived, with a vision that skill development could be the driving force behind women’s Empowerment.',
      },
      {
        text: 'The primary aim of Astitva is to uplift underprivileged women who have been marginalized and lack access to essential skills for their livelihoods. Launched by Navratan in 2009, this program offers vocational and skill development opportunities to these women, enabling them to attain financial independence. To date, more than 9000 women have benefited from this initiative.',
      },
    ],

    subHeading:
      'Navratan has established 37 vocational centers in and around Delhi/NCR, offering a six-month training course in basic tailoring and stitching to women in villages and slums. Upon completion of each session, the women receive a certificate, enabling them to secure job work from factories and tailors, thereby earning a decent living from their homes.',

    longTermGoal: [
      {
        text: 'Our long-term goal extends beyond individual empowerment; it aims to support sustainable community development through skill-building programs. As part of this endeavor, we have introduced counseling and awareness sessions. These sessions help women enhance their communication skills, build confidence, and transform into catalysts for change. These transformed women, in turn, inspire and guide others in their communities, sowing the seeds of social harmony.',
      },
      {
        text: 'Many of our skilling centers have been established through partnerships with other social organizations and individuals who share our commitment to the cause of women’s empowerment. Together, we believe we can make a lasting impact and create a more equitable and empowered society.',
      },
    ],
    gallery: [
      {
        imgSrc: '../assets/img/home/our-campaigns-5.jpg',
        alt: 'Image',
      },
      {
        imgSrc: '../assets/img/home/our-campaigns-6.jpg',
        alt: 'Image',
      },
    ],
    patternImage: '../assets/img/about/about-gallery-pattern.png',
  },
  {
    url: 'gyanpeeth',
    title: 'Navratan Gyanpeeth Project',
    image: '../assets/img/home/gyanpeeth.jpg',
    description: [
      {
        text: 'The Navratan Gyanpeeth Project is a distinctive, all-encompassing development initiative specifically designed for underprivileged children aged 3 to 12 years. Our foundation is dedicated to delivering high-quality informal education while encouraging children to actively participate in extracurricular activities.',
      },
      {
        text: 'We firmly believe that education is not just a means to an end but the end itself – a gateway to a better life.',
      },
    ],

    subHeading:
      'In our pursuit of excellence, we collaborate closely with communities, government bodies, and partner organizations at various levels to address every facet of access to basic education.',

    longTermGoal: [
      {
        text: 'Leveraging our extensive national presence and wealth of experience, we strive to craft innovative learning solutions and equip educators with the knowledge and skills required to meet the educational needs of all.Since the inception of this project four years ago, we have directly benefited over 120 underprivileged children through our education program. Currently, our operations are concentrated in one canter located in Sector 8, Block B Noida. However, our vision extends further, as we aspire to establish more such centers to broaden our impact.',
      },
      {
        text: 'We sincerely invite your esteemed organization to consider contributing to our initiative. Your support can play a pivotal role in helping disadvantaged children gain access to education and realize their fundamental right to learning. Your involvement would be greatly appreciated as we collectively work towards a brighter future for these deserving children.',
      },
    ],
    gallery: [
      {
        imgSrc: '../assets/img/home/our-campaigns-3.jpg',
        alt: 'Image',
      },
      {
        imgSrc: '../assets/img/home/our-campaigns-4.jpg',
        alt: 'Image',
      },
    ],
  },
  {
    url: 'umeed',
    title: 'Umeed: Shikshit Mahila, Unnat Rashtra',
    image: '../assets/img/home/astitva.jpg',
    description: [
      {
        text: 'At Navratan, we believe that one should never stop learning because life never stops teaching and education sees no age.',
      },
      {
        text: 'The primary purpose of adult education is to provide a second chance for those who are poor in society or who have lost access to education for other reasons to achieve social justice and equal access to education. Therefore, adult education is often a social policy of the government. The function of adult education in a democracy is to provide every adult citizen an opportunity for education.',
      },
    ],

    subHeading:
      '‘Umeed ‘, a mission to provide basic education to these women from the age of fifteen onwards.',

    longTermGoal: [
      {
        text: 'Navratan explored Noida which has a huge migrant population and 90 percent of women are illiterate. This led to exploitation of these women in many ways. Navratan has come forward to educate these women keeping in mind that in adult education, learning, working and living are inseparable.',
      },
      {
        text: 'Currently the project is operational in thirteen centers in Noida to educate migrant women settled in slums and remote villages. Out of 350 enthusiastic participants, we have a spectrum of women from 30 years to 70 years old eager to learn. It is difficult to describe in words, the smile on their faces when they first learn to write their name. Broadening the thinking horizon of the city, we plan to open at least fifty adult education centers.',
      },
    ],
    gallery: [
      {
        imgSrc: '../assets/img/home/our-campaigns-9.jpg',
        alt: 'Image',
      },
      {
        imgSrc: '../assets/img/home/our-campaigns-10.jpg',
        alt: 'Image',
      },
    ],
  },
  {
    url: 'cyberurja',
    title: 'CYBERURJA - Empowering with Computer Education',
    image: '../assets/img/home/cyberuja.jpg',
    description: [
      {
        text: 'At Navratan Foundation, our unwavering commitment lies in the empowerment of individuals through skill development. Back in 2017, we laid the foundation for our inaugural computer training center in Noida. Since then, we’ve made significant strides, expanding our reach to encompass eight centers within the vicinity, and we have ambitious plans for further expansion on the horizon. In today’s digital landscape, possessing computer proficiency is nothing short of essential for achieving success. Yet, a considerable number of students in government schools and marginalized communities remain bereft of access to these invaluable resources. We acknowledge this stark disparity and have taken it upon ourselves to bridge the gap.',
      },
      {
        text: 'Our holistic curriculum covers a broad spectrum, ranging from fundamental computer skills to the mastery of advanced programming languages. Our overarching objective is to deliver top-tier training opportunities to individuals of all ages and backgrounds, irrespective of their socio-economic status. We firmly believe that everyone should have access to the resources and tools necessary for realizing their potential.',
      },
    ],

    subHeading:
      'Our centers operate with inclusivity in mind, extending accessibility to the community during the evening hours and catering to slum and government schools in the morning. This dual scheduling allows us to cast a wider net, particularly for those who may otherwise be unable to attend during daylight hours.',

    longTermGoal: [
      {
        text: 'Consequently, we’ve witnessed a notable increase in the participation of girls and women at our centers, as they strive for financial independence.',
      },
      {
        text: 'Our vision extends beyond students to embrace individuals from all walks of life who can leverage computer skills to earn a living from the comfort of their homes, with a special emphasis on empowering women. We invite you to join us in our noble mission to empower individuals through skill development and champion sustainable growth within our communities. Together, we can illuminate the path to a brighter future for everyone.',
      },
    ],
    gallery: [
      {
        imgSrc: '../assets/img/home/our-campaigns-7.jpg',
        alt: 'Image',
      },
      {
        imgSrc: '../assets/img/home/our-campaigns-8.jpg',
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
    { id: 'astitva' },
    { id: 'gyanpeeth' },
    { id: 'umeed' },
    { id: 'cyberurja' },
  ];

  const paths = projects.map((service) => ({
    params: { id: service.id },
  }));

  return {
    paths,
    fallback: false, // This ensures only the paths specified will be generated during build time
  };
}

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const filterData = projectData.filter((item) => item.url === id);
  const capitalName =
    filterData[0].url.charAt(0).toUpperCase() + filterData[0].url.slice(1);
  return (
    <Layout>
      <PageBanner pageName={capitalName} />
      <section className="project-details-area section-gap-extra-bottom pt-0">
        <div className="container">
          <h2
            className="row project-title align-items-center justify-content-center p-4 project-titles"
            style={{ fontSize: '3rem' }}
          >
            {filterData[0].title}
          </h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="project-thumb mb-md-50 project-image">
                <img
                  src={filterData[0].image}
                  alt="Image"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '2rem',
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-summery">
                <div className="meta">
                  <div className="author">
                    <p>{filterData[0].description[0].text}</p>

                    <br />

                    <p>{filterData[0].description[1].text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="project-details-tab">
              <div className="tab-content" id="projectTabContent">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-5 p-0 m-0">
                      <div className="description-content p-0 pb-5 m-0">
                        <h6>{filterData[0].subHeading}</h6>
                        <br />
                        <p>{filterData[0].longTermGoal[0].text}</p>
                        <br />
                        <p>{filterData[0].longTermGoal[1].text}</p>
                        <Link href="/donate">
                          <a className="main-btn mt-35">
                            Donate Now <i className="far fa-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-10">
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
                      Together, We Can Brighten Lives
                    </h4>
                    <p>
                      “If you light a lamp for somebody, it will also brighten
                      your path.” – Buddha. At Navratan Foundations, we believe
                      that every act of kindness has a ripple effect. Your
                      donation is not just a gift; it is a beacon of hope, a
                      step towards a future where every individual, regardless
                      of their background, can live with dignity, empowerment,
                      and opportunity.
                    </p>
                    <ul className="description-list">
                      <li>Empowering Women to Achieve Independence</li>
                      <li>Transforming Lives Through Education and Literacy</li>
                      <li>
                        Providing Healthcare and Protection to the Underserved
                      </li>
                      <li>
                        Giving Children the Gift of Education and a Brighter
                        Future
                      </li>
                    </ul>
                    <p>
                      Every donation you make is a chance to change someone's
                      life for the better. With your support, we provide
                      essential resources that help communities overcome their
                      struggles and rise to new heights. Your compassion fuels
                      our mission to build a world of equality, hope, and
                      opportunity for all.
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

export default ProjectDetails;
