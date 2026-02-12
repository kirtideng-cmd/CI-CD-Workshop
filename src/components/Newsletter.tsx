import { useState, type FormEvent } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="section newsletter">
      <div className="container">
        <div className="newsletter-box">
          <h2 className="newsletter-title">JOIN THE CREW</h2>
          <p className="newsletter-description">
            Subscribe for exclusive drops, early access, and 15% off your first order.
          </p>
          {submitted ? (
            <p style={{ color: 'var(--neon-cyan)', fontWeight: 600 }}>
              ✓ You're in! Check your inbox for a welcome gift.
            </p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
