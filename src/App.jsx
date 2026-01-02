import "./index.css";
import profileImage from "./assets/rakesh.png"; // your uploaded image
import phoneIcon from "./assets/phone-icon.png";

export default function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="nav">
        <h2 className="logo">Rakesh Patil</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-left">
          <img src={profileImage} alt="Rakesh Patil" className="profile-img" />
        </div>
        <div className="hero-right">
          <h1>Hi, I'm Rakesh 👋</h1>
          <p className="tagline">
            Building scalable backend systems & full-stack applications
          </p>
          <p>Backend & Full-Stack Developer (Node.js, AWS, MongoDB)</p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p className="text">
          I’m a passionate software developer with experience in building
          scalable backend systems, REST APIs, payment integrations, and
          cloud-based applications. I enjoy solving real-world problems using
          clean and maintainable code.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section light">
        <h2>Skills</h2>
        <div className="grid">
          <div className="card">Node.js</div>
          <div className="card">TypeScript</div>
          <div className="card">MongoDB</div>
          <div className="card">PostgreSQL</div>
          <div className="card">AWS</div>
          <div className="card">Docker</div>
          <div className="card">Kafka</div>
          <div className="card">Vue / React</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>Helper Management Platform</h3>
            <p>
              Service-based platform with booking, payment, helper scoring,
              multilingual support, and admin panel.
            </p>
          </div>
          <div className="card">
            <h3>Link Analytics System</h3>
            <p>
              Real-time link tracking with unique views, geo-IP analytics,
              reports, and export features.
            </p>
          </div>
          <div className="card">
            <h3>Serverless APIs</h3>
            <p>
              AWS Lambda + API Gateway + Cognito based secure APIs using CDK.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section light">
        <h2>Experience</h2>
        <div className="card">
          <h3>Backend Developer</h3>
          <p>
            Designing scalable APIs, microservices, payment gateways, background
            jobs, and cloud infrastructure.
          </p>
        </div>
      </section>

      {/* Contact */}
     <section id="contact" className="section">
  <h2>Contact</h2>
  <p>
    Email: <strong>rakesh19320@gmail.com</strong>
  </p>
  <div className="contact-icons">
    {/* GitHub */}
    <a
      href="https://github.com/RakeshPatil19/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
        alt="GitHub"
        className="contact-icon"
      />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/rakesh-patil-aa73b7195"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
        alt="LinkedIn"
        className="contact-icon"
      />
    </a>

    {/* Phone */}
    <a href="tel:+919499555778">
      <img
        src={phoneIcon}
        alt="Phone"
        className="contact-icon"
      />
    </a>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Rakesh Patil. All rights reserved.</p>
      </footer>
    </>
  );
}
