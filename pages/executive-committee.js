import Link from 'next/dist/client/link';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layouts/Layout';
const executive = [
  {
    name: 'Ashok Srivastava',
    role: 'President',
    image: '/assets/img/executive/founder-in-circle-e1600241339973.png',
    description:
      'A man with a golden heart and voice whose humility has inspired many to embrace his philosophy. Soft-spoken, humble and highly learned, his personality shines through his works and activities. He holds a science degree from Delhi University and a postgraduate degree in Management from Bhartiya Vidya Bhavan. After a successful stint in the corporate world, he chose to devote his life to community service. In last 35 years, he has dedicated his life to social work, making a significant impact in various communities with his selfless contributions and unwavering dedication.',
  },
  {
    name: 'Mr. R. K. Saxena',
    role: 'Sr. Vice President',
    image: '/assets/img/executive/r-k-saxena-150x150-1.png',
    description:
      'A retired IRS officer who worked as Asst. Commissioner for Customs and Central Excise for more than 40 years. During his professional career, he received several awards for his services towards the department. He is an Advisor to Sehbhagyta International, an NGO working for helping of poor women. He was also President of Noida Chitragupt Sabha, which worked for the upliftment of under-privileged society. He also served as a Director of Kayastha.com, an NGO dedicated for upgradation of Kayastha Society.',
  },
  {
    name: 'Varsha Srivastava',
    role: 'Vice President',
    image: '/assets/img/executive/varsha-Srivastava.png',
    description:
      'She’s an artist, an educator a homemaker who manages these multiple roles with great dignity. Her association with Navratan spans more than a decade. Creative expression came to her at an early age and today she is recognized by friends and family as a self-taught artist who enlivens her home with stunning works of art. She has also recently taken up the cause of education for underprivileged children and executes her duties as an educator with utmost dedication.',
  },
  {
    name: 'Murari Prasad Srivastava',
    role: 'Vice President',
    image: '/assets/img/executive/murari-prasad-150x150-1.png',
    description:
      'He retired from PDIL, Noida, a government organization. He is a theater lover and has keen interest in social work. Currently he is a Real Estate Consultant for Noida, Gr. Noida & NCR.',
  },
  {
    name: 'Hemant Sharma',
    role: 'Vice President',
    image: '/assets/img/executive/hemant-sharma-150x150-1.png',
    description:
      'Mr. Hemant Sharma retired from Punjab National Bank as Senior Manager and is no working in the corporate world. He is passionate for music as well as philanthropy work. He is also a senior office bearer of his Housing Group. He is a singer and performs on the stage.',
  },
  {
    name: 'Someshwar Sharma',
    role: 'Vice President',
    image: '/assets/img/executive/someshwar-sharma.png',
    description:
      'Someshwar Sharma, a commerce graduate from University of Delhi is a seasoned working professional. He is fond of cooking and engaging in community singing shows. He works for Doordarshan since 1984. Apart from this, he is an aficionado of the Bollywood music industry both classical as well as the contemporary. He is the key member in establishing Sparsh (Ehsaas Zindagi Ka), a platform that encourages very many young and rising talented individuals to pursue singing as a passion and profession.',
  },
  {
    name: 'Vivek Srivastava',
    role: 'General Secretary',
    image: '/assets/img/executive/vivek-kumar.png',
    description:
      'Vivek Srivastava is Science graduated and PG in Business Administration with 15 years of experience in healthcare administration & Corporate Communications, He worked with Kailash hospital, max hospital and presently working with Sharda Hospital (Sharda university). He is active on all social media platforms and wish to contribute to the healthcare infrastructure and services in the country and other social issues.',
  },
  {
    name: 'Anuranjan Srivastava',
    role: 'Treasurer',
    image: '/assets/img/executive/anuranjan-srivastava-150x150-1.png',
    description:
      'Anuranjan Srivastava is an entrepreneur social worker, result oriented professional and a successful leader with over 15 years of achievement packed experience of conceptualizing and building few successful businesses in IT, Publishing and Education domain. He is committed towards social cause especially spread of technical & vocational education for rural & underprivileged youth. He founded a new company– “Skilled ME” providing Skill Training program and complete digital solution from learning digitization, Branding and market communication website management including social media integration to e commerce portal, Mobile App etc.',
  },
  {
    name: 'A.V. Murlidharan',
    role: 'Financial Advisor',
    image: '/assets/img/executive/mulridharan.png',
    description:
      'A science graduate with postgraduate in Marketing and International trade management. Having started a career in marketing of office equipment’s in 1991, moved over to setup an enterprise by the name RAV International in 1999 dealing with office automation and providing bar-coding / RFID solutions to the retail & industrial sector. Recently trying hands on a digital outdoor media. He is a keen social worker.',
  },
  {
    name: 'Vineet Khare',
    role: 'Media In Charge',
    image: '/assets/img/executive/vineet-khare.png',
    description:
      'Vineet Khare is technocrat, having 20+ years of experience of Dotcom era. In start of his career, he worked with journalist and worked on the prestigious project of Kumbh Mela 2001. In 2003 he started his own venture eCreations (currently known as Createx), it’s a Digital Media Company. His expertise is on LAMP with search content with creative mind. He contributes to digital services to the ngo events.',
  },
  {
    name: 'Mrs. Shalini Agrawal',
    role: 'Joint Secretary',
    image: '/assets/img/executive/shalini-agarwal-150x150-1.png',
    description:
      "Mrs. Shalini Agrawal, Joint Secretary of Navratan Foundation*, brings a wealth of experience and passion to her multifaceted endeavors. With a dedicated yoga practice spanning over 7-8 years, she advocates for holistic health, particularly emphasizing its benefits for the elderly and individuals of all ages. In Hyderabad, she selflessly serves as a yoga instructor, sharing her expertise to promote well-being in the community. Additionally, demonstrating her entrepreneurial spirit, Successfully operated the 'Bikano' restaurant franchise showcasing her business acumen and commitment to diverse ventures.",
  },
  {
    name: 'Shubhransh Shekhar',
    role: 'Joint Secretary',
    image: '/assets/img/executive/shubhranshu-shekhar.png',
    description:
      'Shubhranshu Shekhar, an IT graduate with nearly 20 years of achievement-packed career spanning across the corporate and social sectors. With extensive hands-on experience as an Industrial consultant, he has been exposed to various aspects related to Factory Labour laws in India. A pro-development individual, keen to learn and contribute to social and economic development with a people-centric approach. In addition to his professional engagements, he has worked with several NGOs.',
  },
  {
    name: 'Mrs. Geeta Misra',
    role: 'Joint Secretary',
    image: '/assets/img/executive/default-icon.png',
    description:
      'Mrs. Geeta Mishra, a dynamic 50-year-old, holds a B.A. and B.Ed. She has served as Treasurer and Secretary at Lioness Club. Additionally, she has contributed to the Sakharta mission by the Government, recording audio book series for the Blind School in Delhi. Geeta has also adopted several children to support their education and regularly teaches domestic helpers in her home and nearby surroundings.',
  },
  {
    name: 'Mrs. Anshumali Sinha',
    image: '/assets/img/executive/anshumali-sinha.png',
    role: 'Cultural Secretary and Social Media In-charge',
    description:
      "A Computer Science graduate with an MBA in Finance & Marketing, brings 8 years of corporate experience from HDFC Auto Loan, Tata Motor Finance, Vodafone, and Alive Software Co. She's also a renowned artist in Delhi/NCR, holding a Sangeet Prabhakar in vocal from Prayag Sangeet Samiti, Allahabad with distinction in 2022-23. Alongside her professional and artistic endeavors, she is passionately involved in managing social and development activities for the underprivileged. Currently, she serves as the Cultural Secretary and social media in charge at Navratan Foundation. Her mantra: 'Writing and Singing is my passion. I love it and live it.'",
  },
  {
    name: 'Anil Srivastava',
    image: '/assets/img/executive/anil-srivastava.png',
    role: 'Joint Media in Charge',
    description:
      'Anil Kumar Srivastava, a resident of Lakhimpur Kheri, holds a postgraduate degree in Sociology. With a background in journalism, he has been associated with Navratan Foundations since 2015. Currently serving as the joint media in-charge, Anil brings his expertise and passion for social causes to his role at the organization.',
  },
  {
    name: 'Gurjeet Singh',
    image: '/assets/img/executive/gurjeet-singh.png',
    role: 'Executive Members',
    description:
      "A skilled artist presenting unique projects. I work both with businesses and individuals to find a non-standard approach to the task. My works are aesthetically pleasing in every size and pattern. He is a creative artist, and his mantra is - 'Create with the heart; build with the mind.'",
  },
  {
    name: 'Neeraj Bhatnagar',
    image: '/assets/img/executive/neeraj-bhatnagar.png',
    role: 'Executive Members',
    description:
      "Neeraj Bhatnagar was deeply inspired by the quote, 'A little progress each day adds up to a big result' by Satya Nani, which motivated him to dedicate himself to societal causes. Having been involved in social work alongside his father since childhood, he embodies his father’s morals, values, and inspirational words, fostering a strong connection with society. Professionally, Neeraj has been an entrepreneur since 2010 in Noida, renowned for his soft-spoken demeanor and unwavering determination. His career journey began in the TV industry before transitioning to the computer industry, where he has accumulated over 30 years of experience.",
  },
];

const Advisors = () => {
  return (
    <Layout>
      <PageBanner pageName="Advisors" />
      <section className="event-area section-gap-extra-bottom">
        <div className="container">
          <div className="event-items">
            {executive.map((patron) => (
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
                    {patron.role}
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

export default Advisors;