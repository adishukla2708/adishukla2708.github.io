import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Software Development Engineer focused on building scalable backend services and reliable user experiences.
              With 2.5+ years of professional experience at Comcast, I've worked across microservices, performance optimization,
              and full-stack delivery for customer-facing platforms.
            </p>
            <p>
              I care about clean, maintainable code, measurable performance gains, and collaborative engineering practices.
              When I'm not coding, I enjoy exploring new frameworks, contributing to open-source projects,
              and sharing knowledge with fellow developers.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>2.5+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
