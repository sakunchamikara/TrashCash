import { Cart } from './cart';

export class Orders {
  id: number;
  date: Date;
  status: string;
  customerId: number;
  cart: Array<Cart>;
  constructor() {}
}
