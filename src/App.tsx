import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PosterGrid } from './components/PosterGrid';
import { Features } from './components/Features';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { useCart } from './hooks/useCart';

function App() {
  const {
    items,
    isOpen,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    openCart,
    closeCart,
  } = useCart();

  return (
    <>
      <Header cartCount={totalItems} onCartClick={openCart} />
      <main>
        <Hero />
        <PosterGrid onAddToCart={addToCart} />
        <Features />
        <Newsletter />
      </main>
      <Footer />
      <Cart
        isOpen={isOpen}
        items={items}
        totalPrice={totalPrice}
        onClose={closeCart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </>
  );
}

export default App;
