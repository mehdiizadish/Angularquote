import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { FormDataService }     from '../data/formData.service';
import { CartItem } from '../cart/cart.model';

@Component ({
    selector:     'mt-wizard-work'
    ,templateUrl: './work.component.html'
})

export class WorkComponent implements OnInit {
    title = 'The following product suits you:';
    product = 'Mobile Business';
    workType: string;
    form: any;
    cartTotal: number = 0;
    cartItems: CartItem[] = [];

    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.workType = this.formDataService.getWork();
        this.updateCartTotal();
        console.log('Work feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setWork(this.workType);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['/personal']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/address']);
        }
    }

  onCartItemDeleted(productData:{productId: number}) {
    const index = this.cartItems.findIndex( elem => elem.id == productData.productId )
    this.cartItems.splice(index,1);
    this.updateCartTotal();
  }

  onCartItemChanged(productData:{productId: number}) {
    this.updateCartTotal();
  }
  onCartUpdated(productData: {
    productId: number,
    productName: string,
    productPrice: number} ) {
    const index = this.cartItems.findIndex( elem => elem.id == productData.productId )
    if (index===-1) {
      this.cartItems.push({
        id: productData.productId,
        name: productData.productName,
        quantity: 1,
        price: productData.productPrice,
        total: productData.productPrice * 1
      });
    } else {
      this.cartItems[index].id = productData.productId;
      this.cartItems[index].name = productData.productName;
      this.cartItems[index].quantity++;
      this.cartItems[index].price = productData.productPrice;
      this.cartItems[index].total = this.cartItems[index].price * this.cartItems[index].quantity;
    }
    this.updateCartTotal();
  }
  updateCartTotal() {
    //the code to update the total property of the cart
    let total = 0;
    this.cartItems.map( elem => total = total + elem.quantity*elem.price);
    this.cartTotal = total;
  }
}
