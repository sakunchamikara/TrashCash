import { Item } from 'src/app/pojo/item';

export class Cart {
  id: number;
  customerId: number;
  product: Item;
  quentity: string;

  constructor() {}
}