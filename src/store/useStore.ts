import { create } from 'zustand';
import type { Product } from '../data/constants';

export interface CartItem extends Product {
  qty: number;
}

interface StoreState {
  cart: CartItem[];
  currency: 'USD' | 'VES';
  rate: number;
  isCartOpen: boolean;
  isUpdatingRate: boolean;
  
  // Actions
  addToCart: (product: Product) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeFromCart: (id: number) => void;
  setCurrency: (currency: 'USD' | 'VES') => void;
  setCartOpen: (isOpen: boolean) => void;
  fetchRate: () => Promise<void>;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  currency: 'USD',
  rate: 65.40,
  isCartOpen: false,
  isUpdatingRate: false,

  addToCart: (product: Product) => {
    set((state: StoreState) => {
      const existing = state.cart.find((item: CartItem) => item.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item: CartItem) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          ),
          isCartOpen: true,
        };
      }
      return {
        cart: [...state.cart, { ...product, qty: 1 }],
        isCartOpen: true,
      };
    });
  },

  updateQuantity: (id: number, delta: number) => {
    set((state: StoreState) => ({
      cart: state.cart.map((item: CartItem) => {
        if (item.id === id) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : item;
        }
        return item;
      }),
    }));
  },

  removeFromCart: (id: number) => {
    set((state: StoreState) => ({
      cart: state.cart.filter((item: CartItem) => item.id !== id),
    }));
  },

  setCurrency: (currency: 'USD' | 'VES') => set({ currency }),
  
  setCartOpen: (isOpen: boolean) => set({ isCartOpen: isOpen }),

  fetchRate: async () => {
    set({ isUpdatingRate: true });
    try {
      const response = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
      if (response.ok) {
        const data = await response.json();
        if (data.promedio) {
          set({ rate: Number(data.promedio.toFixed(2)) });
        }
      }
    } catch (error) {
      console.log("Usando tasa de respaldo");
    } finally {
      setTimeout(() => set({ isUpdatingRate: false }), 800);
    }
  },
}));
