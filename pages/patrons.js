import Link from 'next/dist/client/link';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layouts/Layout';
const patrons = [
  {
    name: 'Arvind Srivastava',
    designation: 'Former Member, Trade Tax Tribunal, U.P.',
    image: '/assets/img/patron/arvind-srivastava-150x150-2.png',
    description:
      'Mr. Arvind Srivastava has been a patron of Navratan for over 12 years and his guidance has been instrumental in the progress of the foundation. With a keen interest in literature, writing, music, and poetry, he takes his organizational role very seriously. He retired as Member, Commercial Tax Tribunal, Government of Uttar Pradesh in 2015 and lives in Noida.',
  },
  {
    name: 'Atul Mangal',
    designation: 'Chairman, Mangalmay Group of Institutes, Greater Noida',
    image: '/assets/img/patron/atul-mangal-150x150-1.png',
    description:
      'Mr. Atul Mangal is heading Mangalmay Group of Institutions, Greater Noida. Besides being an educationist, Atul Mangal is a known name in the Social Circle of Delhi/NCR. With his untiring efforts, his institutions have not only achieved recognition in the educational fields but also done remarkable social welfare drives for the upliftment of the underprivileged of the society.',
  },
  {
    name: 'Atul Srivastava',
    designation: 'CEO, Effective People, Mumbai',
    image: '/assets/img/patron/atul-srivastava-150x150-1.png',
    description:
      'Mr. Atul Srivastava is founder of Effective People, helping companies build efficient leadership, manage changes, and establish robust HR practices through his vast and rich experience. A postgraduate in HR from Delhi University, he has over three decades of experience and is an accomplished HR specialist in Change Management and Corporate Trainings.',
  },
  {
    name: 'Vibha Mishra',
    designation: 'Counselor',
    image: '/assets/img/patron/vibha-mishra-150x150-1.png',
    description:
      'Vibha Mishra, an advertising and PR professional with a dynamic attitude, after working for 25 years in the advertising industry and two years with IIM-Indore as a training head, is now associated with CEPRD – an environment NGO, and JWALA – an NGO working for women. She is professionally a Counselor in Student, Career, and Personal Growth.',
  },
  {
    name: 'Renu Adawal',
    designation: 'Social Entrepreneur, New Delhi',
    image: '/assets/img/patron/renu-adwal-150x150-1.png',
    description:
      'Renu Adawal is a postgraduate in Home Science and Child Psychology from Vansathali University, Jaipur. Besides this, she has done various important courses in computer education from NIIT, Delhi. Despite being a successful homemaker, she is a great philanthropist and has been involved in many charity and religious works in Delhi NCR. She loves sharing brilliant ideas related to social welfare.',
  },
  {
    name: 'Dhurendra Chaturvedi',
    designation: '',
    image: '/assets/img/patron/DHURENDRA-CHATURVEDI.png',
    description:
      'A postgraduate of the University of Allahabad. Joined the State Govt Commercial Tax Department as a PCS officer. Retired as the Additional Commissioner Grade-1 of the Varanasi Zone of the Commercial Tax Department, Government of Uttar Pradesh. He was responsible for tax collection, dispute settlement, industry-department relations, policy making, and general administration of one of the biggest zones in the state.',
  },
  {
    name: 'Jamil Ahmad',
    designation: '',
    image: '/assets/img/patron/jamil-ahmad.png',
    description:
      'Jamil Ahmad is a law graduate from Lucknow University. He served the government for more than 37 years in the field of general administration, personnel department, vigilance department, and commercial and institutional department. Prior to serving the Noida Authority as Deputy Secretary, he served NEPZ as an administrative officer. Post-retirement, he is associated with Dasna Ghaziabad as Director General.',
  },
  {
    name: 'P.K. Gupta',
    designation: '',
    image: '/assets/img/patron/pk-gupta.png',
    description:
      'Praveen Kumar Gupta completed his B.Tech in 1976 and joined the Industries Department, Govt of UP. He was part of the industrial development in Noida and Greater Noida during 1987-97 and retired from Aligarh as Deputy Commissioner, Industries. He is currently leading a retired life and is associated with various social welfare activities.',
  },
  {
    name: 'Anoop Jairath',
    designation: '',
    image: '/assets/img/patron/anoop-jairath.png',
    description:
      'A Chartered Accountant by profession, rendering professional services in corporate tax, Assurance, and Business Advisory Services. Joined Rotary in 2005, and rose to be the President of the Rotary Club of Noida. He has established a blood bank in Noida along with several social projects. He is also the Vice-President of Suprayas Centre of Excellence, an NGO involved in developing employable skills in underprivileged children.',
  },
];

const Patrons = () => {
  return (
    <Layout>
      <PageBanner pageName="Patrons" />
      <section className="event-area section-gap-extra-bottom">
        <div className="container">
          <div className="event-items">
            {patrons.map((patron) => (
              <div
                className="single-event-item mb-30 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="event-thumb">
                  <img src={patron.image} alt="Image" />
                </div>
                <div className="event-content pr-0">
                  <h4 className="event-title">{patron.name}</h4>
                  <p
                    style={{
                      fontWeight: '600',
                      fontSize: '1.2rem',
                      paddingBottom: '3px',
                    }}
                  >
                    {patron.designation}
                  </p>
                  <p>{patron.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Patrons;
