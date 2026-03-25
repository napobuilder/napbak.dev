export const MY_PHONE_NUMBER = "584220163089"; 
export const PRICE_USD = 797;
export const BRAND_NAME = "NAPBAK_DEV";

export interface Product {
  id: number;
  name: string;
  tag: string;
  priceUsd: number;
  img: string;
}

export const products: Product[] = [
  { id: 1, name: "Premium Smash Burger Double", tag: "Food", priceUsd: 8.50, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Nike Air Max Pulse Roam", tag: "Fashion", priceUsd: 145.00, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "V8 Engine Block Component", tag: "Parts", priceUsd: 320.00, img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Sony WH-1000XM5 Wireless", tag: "Tech", priceUsd: 298.00, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" }
];
