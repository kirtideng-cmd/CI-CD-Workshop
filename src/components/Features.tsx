const features = [
  {
    icon: '🖼️',
    title: 'MUSEUM QUALITY',
    description: 'Printed on premium 250gsm paper with archival inks that last a lifetime.',
  },
  {
    icon: '🌍',
    title: 'FREE SHIPPING',
    description: 'Complimentary worldwide shipping on all orders over $50.',
  },
  {
    icon: '🎨',
    title: 'ARTIST COLLAB',
    description: 'Direct partnerships with independent artists from around the globe.',
  },
  {
    icon: '📦',
    title: 'SECURE PACKAGING',
    description: 'Every poster ships in a protective tube, guaranteed damage-free.',
  },
];

export function Features() {
  return (
    <section className="section features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
