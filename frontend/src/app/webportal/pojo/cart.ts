import { Item } from 'src/app/pojo/item';
import { Orders } from './orders';

export class Cart {
  id: number;
  customerId: number;
  product: Item;
  quentity: string;
  order: Orders;
  status: string;

  constructor() {}
}
