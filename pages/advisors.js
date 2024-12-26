import Link from 'next/dist/client/link';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layouts/Layout';
const advisors = [
  {
    name: 'Mr. Mukesh Nigam',
    image: '/assets/img/advisor/mukesh-nigam-150x150-1.png',
    description:
      'He is retired as Branch Manager from a Nationalized Bank of India. He has been involved with many social activities in Noida for the last 32 years. Mr. Mukesh is known for his dedication and commitment.',
  },
  {
    name: 'Chitranjan Saxena',
    image: '/assets/img/advisor/chitranjan-saxena-1-150x150-1.png',
    description:
      'He is a graduate from Delhi University. Worked with Parasnath & Association as a Director from 1986 to 1992 and then started his own business of real estate consultancy in 1992. He has a keen interest in social work.',
  },
  {
    name: 'Ratan Kumar',
    image: '/assets/img/advisor/ratan-kumar.png',
    description:
      'He is B.Tech. (Mechanical) from IET, Bundelkhand University. Retired after 35 years with the Tata Group. Currently, he works as a Lead Auditor for certification and is a Rotarian with a keen interest in social work.',
  },
  {
    name: 'Dr. Achyut Kumar Tripathi',
    image: '/assets/img/advisor/Achyut-Kumar-tripathi.png',
    description:
      "He hails from a lineage rich in Ayurvedic wisdom, inheriting the legacy of Ayurveda knowledge from his esteemed ancestors. Recognized for his profound expertise and research in Ayurveda, he has been honored with prestigious accolades such as the 'Ratna membership' by the Government of India. He continues to lead studies on Ayurvedic medicine globally.",
  },
  {
    name: 'Chitransh Shekhar Dhar',
    image: '/assets/img/advisor/shekhar-dhar.png',
    description:
      'Mr. Shekhar Dhar, a law postgraduate, started his business at a very early age. After a successful business career, he shifted to Delhi and is currently working as a social worker for a noble cause and associated with RSS as Town head of the Noida region.',
  },
  {
    name: 'Sanjay Pandey',
    image: '/assets/img/advisor/sanjay-pandey.png',
    description:
      'Young, energetic, and a sensational singer who stole a million hearts, Sanjay Pandey started his career in the Army and was heading EME Regimental Musical Band for over 19 years. His graceful stage presence mesmerizes audiences in no time.',
  },
  {
    name: 'Deepak Naidu',
    image: '/assets/img/advisor/deepak-naidu.png',
    description:
      "Born and brought up in Delhi, Deepak Naidu is passionate about singing. After retiring in 2014, he started his second inning of singing, supported by his family, and is now associated with NGO's cultural music activities.",
  },
];

const Advisors = () => {
  return (
    <Layout>
      <PageBanner pageName="Advisors" />
      <section className="event-area section-gap-extra-bottom">
        <div className="container">
          <div className="event-items">
            {advisors.map((patron) => (
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

export default Advisors;
