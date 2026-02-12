interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export function Header({ cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          POSTERHAUS
        </a>
        <nav className="nav">
          <a href="#shop" className="nav-link">
            Shop
          </a>
          <a href="#featured" className="nav-link">
            Featured
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <button className="cart-btn" onClick={onCartClick}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
}
