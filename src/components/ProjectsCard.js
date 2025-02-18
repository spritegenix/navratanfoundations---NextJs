import Link from 'next/link';

const ProjectsGallery = () => {
  const projects = [
    {
      title: 'Astitva',
      description: 'A woman’s journey towards Self-Empowerment',
      image: 'assets/img/project/astitva.webp',
      link: '/projects/astitva',
    },
    {
      title: 'Navratan Gyanpeeth',
      description: 'Empowering Underprivileged Children',
      image: 'assets/img/project/gyanpeeth.webp',
      link: '/projects/gyanpeeth',
    },
    {
      title: 'Umeed',
      description: 'Shikshit Mahila, Unnat Rashtra',
      image: 'assets/img/project/umeed.webp',
      link: '/projects/umeed',
    },
    {
      title: 'CYBERURJA',
      description: 'Empowering with Computer Education',
      image: 'assets/img/project/cyberurja.webp',
      link: '/projects/cyberurja',
    },
  ];

  return (
    <div className="projects-gallery">
      <div className="projects-container">
        <ul className="projects-list">
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <li className="project-card">
                <div className="project-card__img">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-card__content">
                  <h5 className="project-card__title">{project.title}</h5>
                  <p className="project-card__subtitle">
                    {project.description}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsGallery;
