import { useState } from 'react';
import { posters, categories } from '../data/posters';
import type { Poster } from '../data/posters';
import { PosterCard } from './PosterCard';

interface PosterGridProps {
  onAddToCart: (poster: Poster) => void;
}

export function PosterGrid({ onAddToCart }: PosterGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosters =
    activeCategory === 'All'
      ? posters
      : posters.filter((p) => p.category === activeCategory);

  return (
    <section id="shop" className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <h2 className="section-title">
              OUR <span className="highlight">COLLECTION</span>
            </h2>
            <p className="section-subtitle">
              Discover unique wall art for every aesthetic and space
            </p>
          </div>
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="poster-grid">
          {filteredPosters.map((poster, index) => (
            <PosterCard
              key={poster.id}
              poster={poster}
              index={index}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
