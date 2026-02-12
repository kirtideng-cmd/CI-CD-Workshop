import { heroPosters } from '../data/posters';

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <span className="hero-tagline">Premium Art Prints</span>
        <h1 className="hero-title">
          <span className="outline">WALL ART</span>
          <span className="gradient">THAT SPEAKS</span>
        </h1>
        <p className="hero-description">
          Curated collection of stunning posters from independent artists
          worldwide. Transform your space with art that tells a story.
        </p>
        <div className="hero-buttons">
          <a href="#shop" className="btn btn-primary">
            Explore Collection
          </a>
          <a href="#featured" className="btn btn-secondary">
            View Bestsellers
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-poster-stack">
          {heroPosters.map((poster, index) => (
            <div key={index} className="hero-poster">
              <img src={poster} alt={`Featured poster ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
