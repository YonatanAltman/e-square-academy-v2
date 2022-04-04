import { Injectable } from '@angular/core';
import {Item} from "./item.interface";
import {BehaviorSubject, findIndex, Observable} from "rxjs";
import {CartState, CartStore} from "./cart/state/cart.store";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private shoppingCart$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  getShppingCart(): Observable<Item[]> {
    return this.shoppingCart$.asObservable();
  }

  setShoppingCart(newCart: Item[]) {
    this.shoppingCart$.next(newCart);
  }

  addToCart(item: Item) {
    // const currentCart = this.shoppingCart$.getValue();
    // const newCart = [...currentCart, item];
    //
    // //this.shoppingCart$.next(newCart);
    // this.setShoppingCart(newCart);

    this.cartStore.update((currentState: CartState) => ({...currentState, shoppingCart: [...currentState.shoppingCart, item]}));
  }

  removeFromCart(item: Item){
    const currentCart = this.shoppingCart$.getValue();
    const index = currentCart.findIndex(x => x.id === item.id)
    if(index > -1) {

      const newCart = currentCart.filter(x => x.id !== x.id);
      this.setShoppingCart(newCart);
    }
  }

  constructor(private cartStore: CartStore) { }
}
