export interface LoginData {
  username: string;
  password: string;
}
export enum StatusType {
  SUCCESS = "success",
  ERROR = "error",
}
export enum MessageType {
  SUCCESS = "ورود موفق",
  ERROR = "ورود ناموفق",
}
export interface LoginRes {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface ProductsRes {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
