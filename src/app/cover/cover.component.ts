
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductItem } from './cover.model'

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})

export class CoverComponent implements OnInit {
  productItem: ProductItem[] = [
    new ProductItem(1, 'THEFT', 750),
    new ProductItem(2,'GLASS', 133000),
    new ProductItem(3,'PROFESSIONAL INDEMNITY', 102000),
    new ProductItem(4,'BUSINESS INTERRUPTION - GROSS PROFIT', 35000),
    new ProductItem(5,'DRIVING RISKS', 6500),
    new ProductItem(6,'TAX PROBE', 313),
    new ProductItem(7,'MONEY', 7700),
  ]
  @Output() cartUpdated = new EventEmitter<{
    productId: number,
    productName: string,
    productPrice: number
  }>();

  constructor() { }

  ngOnInit() {

    this.cartUpdated.emit({
      productId: 8,
      productName: "LIABILITY - PUBLIC",
      productPrice: 440
    });

    this.cartUpdated.emit({
      productId: 9,
      productName: "GENERAL PROPERTY INCLUDING FIRE COVER",
      productPrice: 310
    });

  }

  onCartUpdated(event) {
    const id = event.target.getAttribute('id');
    const index = this.productItem.findIndex(elem => elem.id == id);
    this.cartUpdated.emit({
      productId: this.productItem[index].id,
      productName: this.productItem[index].name,
      productPrice: this.productItem[index].price
    });
  }


}
