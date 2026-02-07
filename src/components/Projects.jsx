import './Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'Video Streaming Platform Optimization',
      description: 'Optimized backend infrastructure for a video streaming service, improving load times and reducing server costs',
      technologies: ['Node.js', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
      link: '#'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Built a comprehensive analytics dashboard displaying real-time metrics and insights for 500+ users',
      technologies: ['React', 'TypeScript', 'D3.js', 'WebSockets', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Microservices API Gateway',
      description: 'Designed and implemented an API gateway handling 1M+ requests daily with rate limiting and authentication',
      technologies: ['Go', 'gRPC', 'Kafka', 'Prometheus', 'AWS'],
      link: '#'
    },
    {
      title: 'Mobile App Backend API',
      description: 'Created RESTful APIs for a mobile application with complex business logic and real-time notifications',
      technologies: ['Express.js', 'Firebase', 'GraphQL', 'JWT', 'Cloud Functions'],
      link: '#'
    },
    {
      title: 'Data Pipeline Automation',
      description: 'Automated data processing pipeline reducing manual effort by 80% and improving data accuracy',
      technologies: ['Python', 'Apache Airflow', 'SQL', 'Spark', 'AWS S3'],
      link: '#'
    },
    {
      title: 'Customer Portal Frontend',
      description: 'Developed responsive customer portal with advanced filtering, search, and reporting capabilities',
      technologies: ['React', 'Redux', 'Material-UI', 'Jest', 'Webpack'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
