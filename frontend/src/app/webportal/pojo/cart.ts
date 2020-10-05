import { Item } from 'src/app/pojo/item';

export class Cart {
  id: number;
  customerId: number;
  product: Item;
  quentity: string;
  orderId: string;
  status: string;

  constructor() {}
}
