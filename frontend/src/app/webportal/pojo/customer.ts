import { Orders } from './orders';

export class Customer {
  id: number;
  firstName: string;
  type: string;
  email: string;
  contactNumber: number;
  address: string;
  password: string;
  termStatus: number;
  location: string;
  orders: Array<Orders>;

  constructor() {}
}
