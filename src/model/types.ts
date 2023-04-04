export interface IProduct {
  id: number;
  title: string;
  brand: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  badge: Badge;
}

export type Badge = 'NEW' | 'TOP' | 'HOT' | 'USUAL';
