import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { CartItem } from '../cart.model';
import { SumInsured } from './cartitem.model'

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})

export class CartitemComponent implements OnInit {

  SumInsured: SumInsured[] = [
    new SumInsured(1, '$100,000-$150,000', 1),
    new SumInsured(2,'$150,000-$200,000', 2),
    new SumInsured(3,'$200,000-$250,000', 3),
    new SumInsured(4,'$250,000-$300,000', 3.5),
    new SumInsured(5,'$350,000-$400,000', 4),
    new SumInsured(6,'$400,000-$450,000', 5),
    new SumInsured(7,'$450,000-$500,000', 5.5),
    new SumInsured(7,'Over $500,000', 7),
  ]

  @Input() cartItem: CartItem;
  @Output() cartItemDeleted = new EventEmitter<{
    productId: number
  }>();
  @Output() cartItemChanged = new EventEmitter<{
    productId: number
  }>();

  onCartItemDeleted(event) {
    const id = event.target.getAttribute('id');
    this.cartItemDeleted.emit({
      productId: id
    });
  }

  onCartItemChanged(event) {
    const id = event.target.getAttribute('id');
    this.cartItemChanged.emit({
      productId: id
    });
  }

  constructor() {
  }


    ngOnInit() {

    }



}
