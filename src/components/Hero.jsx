import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-image">
        <img src="/Portfolio.png" alt="Aditya Shukla" className="profile-image" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Aditya Shukla</h1>
        <p className="hero-subtitle">Software Development Engineer | DevOps | Tech Enthusiast</p>
        <p className="hero-description">
          Building scalable solutions and delivering high-quality software with 2.5+ years of experience
        </p>
        <div className="hero-cta">
          <a href="https://drive.google.com/uc?export=download&id=10An1ubuqBjk5d_4AoGX5VtC-FCbjy7X0" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download Resume</a>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn btn-secondary">Get in Touch</button>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  )
}
