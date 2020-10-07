import { Cart } from './cart';
import { Customer } from './customer';

export class Orders {
  id: number;
  date: Date;
  status: string;
  customerId: number;
  cart: Array<Cart>;
  customer: Customer;
  constructor() {}
}
