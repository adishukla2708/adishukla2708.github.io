import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )
    window.location.href = `mailto:adishukla2708@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello!</p>

            <div className="contact-logos">
              <a
                className="contact-logo"
                href="https://www.linkedin.com/in/aditya-shukla-ba8396191/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                  alt="LinkedIn logo"
                />
              </a>
              <a
                className="contact-logo"
                href="mailto:adishukla2708@gmail.com"
                aria-label="Gmail"
                title="Gmail"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                  alt="Gmail logo"
                />
              </a>
              <a
                className="contact-logo"
                href="https://leetcode.com/u/adishukla/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                title="LeetCode"
              >
                <img
                  src="https://logo.svgcdn.com/devicon/leetcode-original.png"
                  alt="LeetCode logo"
                />
              </a>
              <a
                className="contact-logo"
                href="https://www.geeksforgeeks.org/profile/adishukla2708"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeeksforGeeks"
                title="GeeksforGeeks"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                  alt="GeeksforGeeks logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
