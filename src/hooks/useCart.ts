import { useState, useCallback } from 'react';
import type { Poster } from '../data/posters';

export interface CartItem extends Poster {
  quantity: number;
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = useCallback((poster: Poster) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === poster.id);
      if (existing) {
        return prev.map((item) =>
          item.id === poster.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...poster, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((posterId: number) => {
    setItems((prev) => prev.filter((item) => item.id !== posterId));
  }, []);

  const updateQuantity = useCallback((posterId: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === posterId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  return {
    items,
    isOpen,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    openCart,
    closeCart,
  };
}
