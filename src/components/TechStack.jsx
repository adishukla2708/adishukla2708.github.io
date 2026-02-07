import './TechStack.css'

export default function TechStack() {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: ['React', 'JavaScript/ES6+', 'TypeScript', 'HTML5', 'CSS3', 'Redux', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express.js', 'Java', 'Python', 'Go', 'SQL', 'MongoDB', 'GraphQL']
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Terraform', 'CloudFormation']
    },
    {
      category: 'Tools & Platforms',
      technologies: ['Git', 'VS Code', 'JIRA', 'Postman', 'Datadog', 'Firebase', 'PostgreSQL', 'Redis']
    }
  ]

  return (
    <section id="tech" className="tech-stack">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="tech-categories">
          {techCategories.map((cat, index) => (
            <div key={index} className="tech-category">
              <h3 className="category-title">{cat.category}</h3>
              <div className="tech-list">
                {cat.technologies.map((tech, idx) => (
                  <div key={idx} className="tech-item">
                    <span className="tech-icon">●</span>
                    <span className="tech-name">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
