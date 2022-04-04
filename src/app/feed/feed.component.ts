import {Component, OnDestroy, OnInit} from "@angular/core";
import {Item} from "../item.interface";
import {StateService} from "../service/state.service";
import {CartService} from "../cart.service";
import {CartState, CartStore} from "../cart/state/cart.store";

@Component({
  selector: 'my-feed',
  template: `
    <input [(ngModel)]="permission" />

<!--    <div class="wrapper" *appPermission="permission">-->

    <ng-container *ngFor="let item of items">
      <app-item class=""
                [item]="item"
                [existInCart]="false"
                (addToCart)="addToCart($event)"
      ></app-item>

    </ng-container>
<!--    </div>-->
  `,
  styles: [`
    .wrapper{
      display: flex;
      flex-wrap: wrap;
    }
    div {
      outline: red solid 2px;
    }

    .wrapper {
      background: #d4d2d2;

    }

    .in-cart {
      outline: green solid 3px;
    }
  `]
})
export class FeedComponent implements OnInit {
  permission = '';

  public get items(): Item[] {
    return this.state.allItems;
  }

  constructor(
              private state: StateService,
              private cartService: CartService,
              private cartStore: CartStore) {
  }

  ngOnInit() {

  }

  addToCart(item: Item) {
    // console.log('ITEM', item);
    // this.state.addToCart(item);

    this.cartService.addToCart(item);



  }
}
