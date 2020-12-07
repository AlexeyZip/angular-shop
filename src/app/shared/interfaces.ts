export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Product {
  id?: string;
  type: string;
  name: string;
  description: string;
  photo: string;
  price: string;
  date: Date;
}

export interface Order {
  id?: string;
  phone: string;
  name: string;
  address: string;
  payment: string;
  orders: any;
  price: number;
  date: Date;
}

export interface FbCreateResponse {
  name: string
}