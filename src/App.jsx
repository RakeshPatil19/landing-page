import "./index.css";

export default function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="nav">
        <h2 className="logo">StayTheme</h2>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How it Works</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>Your Perfect Stay, Simplified</h1>
        <p>
          Discover, book, and manage stays effortlessly with StayTheme.
        </p>
        <button className="btn-primary">Get Started</button>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <h2>Features</h2>
        <div className="grid">
          <div className="card">
            <h3>Easy Booking</h3>
            <p>Book stays in just a few clicks.</p>
          </div>
          <div className="card">
            <h3>Secure Payments</h3>
            <p>Fast & safe transactions.</p>
          </div>
          <div className="card">
            <h3>Host Dashboard</h3>
            <p>Manage properties with ease.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section light">
        <h2>How It Works</h2>
        <div className="grid">
          <div className="card">
            <h3>1. Search</h3>
            <p>Find the best stay for your needs.</p>
          </div>
          <div className="card">
            <h3>2. Book</h3>
            <p>Confirm booking instantly.</p>
          </div>
          <div className="card">
            <h3>3. Enjoy</h3>
            <p>Relax and enjoy your stay.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Journey Today</h2>
        <button className="btn-secondary">Create Account</button>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <p>© {new Date().getFullYear()} StayTheme. All rights reserved.</p>
      </footer>
    </>
  );
}
