import { MenuItem } from 'app/restaurant-datail/menu-item/menu-item.model';
export class CartItem {
  constructor(private menuItem: MenuItem, private quantity: number = 1){}

  value(): number {
    return this.menuItem.price * this.quantity;
  }
}
