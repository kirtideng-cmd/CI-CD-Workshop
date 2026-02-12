import type { Poster } from '../data/posters';

interface PosterCardProps {
  poster: Poster;
  index: number;
  onAddToCart: (poster: Poster) => void;
}

export function PosterCard({ poster, index, onAddToCart }: PosterCardProps) {
  return (
    <article
      className="poster-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="poster-image-wrapper">
        <img
          src={poster.image}
          alt={poster.title}
          className="poster-image"
          loading="lazy"
        />
        <div className="poster-overlay" />
        {poster.isNew && <span className="poster-badge">New</span>}
        {poster.isBestseller && !poster.isNew && (
          <span className="poster-badge" style={{ background: 'var(--neon-pink)' }}>
            Bestseller
          </span>
        )}
        <div className="poster-actions">
          <button
            className="btn btn-primary"
            onClick={() => onAddToCart(poster)}
          >
            Add to Cart
          </button>
          <button className="btn btn-secondary">Quick View</button>
        </div>
      </div>
      <div className="poster-info">
        <span className="poster-category">{poster.category}</span>
        <h3 className="poster-title">{poster.title}</h3>
        <div className="poster-price">
          <span className="current">${poster.price.toFixed(2)}</span>
          {poster.originalPrice && (
            <span className="original">${poster.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </article>
  );
}
