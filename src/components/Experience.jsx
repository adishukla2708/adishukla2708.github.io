import './Experience.css'

export default function Experience() {
  const experiences = [
    {
      title: 'Software Development Engineer 2',
      company: 'Comcast India Engineering Center',
      period: '2025 - Present',
      duration: '1 year',
      description: [
        'Led development of microservices architecture for streaming platform backend',
        'Improved API response time by 40% through database optimization and caching strategies',
        'Mentored 3 junior developers and conducted code reviews for 50+ pull requests',
        'Implemented CI/CD pipeline resulting in 50% reduction in deployment time'
      ]
    },
    {
      title: 'Engineering Core Associate',
      company: 'Comcast India Engineering Center',
      period: '2023 - 2025',
      duration: '2 years',
      description: [
        'Developed full-stack features for customer-facing applications serving 1M+ users',
        'Built responsive user interfaces using React and modern JavaScript',
        'Collaborated with cross-functional teams including product and design',
        'Contributed to technical documentation and best practices'
      ]
    },
    {
      title: 'Junior Software Developer',
      company: 'Tech Startup Inc.',
      period: '2020 - 2021',
      duration: '1 year',
      description: [
        'Developed and maintained web applications using JavaScript and Node.js',
        'Participated in agile development cycles and sprint planning',
        'Fixed bugs and implemented new features based on user feedback',
        'Gained experience with various databases and API development'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="exp-header">
                <h3>{exp.title}</h3>
                <span className="company-badge">{exp.company}</span>
              </div>
              <div className="exp-meta">
                <span className="period">{exp.period}</span>
                <span className="duration">{exp.duration}</span>
              </div>
              <ul className="exp-description">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
