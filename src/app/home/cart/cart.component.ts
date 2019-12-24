import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { CartService } from 'src/app/services/cart.service';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [MessageService]
})
export class CartComponent implements OnInit {
 /**
  * Creating variables
  * @var :cartItems,amount,count and msgs
  */
  cartItems = [];
  amount = 0;
  count = 0;
  msgs: any[] = [];

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router, private _cartService: CartService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) { }
 /**
  * method to increase the product Quantity
  */
  increaseQuantity = (product) => {
    if (product.quantity < 2) {
      product.quantity++;
      product.subtotal = product.quantity * product.price;
      this.calculateTotal();
    } else {
      this.messageService.add({ severity: 'error', summary: 'Only 2 quantities are allowed to add to cart for each product' });
    }

  }
  /**
   * method to decrease the product Quantity
   */
  decreaseQuantity = (product) => {
    if (product.quantity <= 1) {
      this.removeProduct(product);
      this.len();
    } else {
      product.quantity--;
      product.subtotal = product.quantity * product.price;
      this.calculateTotal();
    }
  }
/**
 * method to navigate to payment page
 */
  payment = (amount) => {
    this._cartService.cartAmount = amount;
    this._router.navigate(['home/credit']);
  }
/**
 * method to remove the products
 */
  removeProduct = (product) => {
    const index = this.cartItems.indexOf(product);
    this.cartItems.splice(index, 1);
    this._cartService.cartCount--;
    this.calculateTotal();
    this._cartService.counts.next(false);
    this.len();
  }

  // TO calculate the total amount
  calculateTotal = () => {
    this.amount = 0;
    this._cartService.selectedItems.forEach((item) => {
      this.amount += item.quantity * item.price;
    });
  }
/**
 * method to caluclate the length
 */
  len = () => {
    this.count = this._cartService.cartCount;
  }


  ngOnInit() {
    this.calculateTotal();
    this.cartItems = this._cartService.selectedItems;
    this.len();
  }

/**
 * methos to cancel the cart page
 */
  cancel() {
          this.confirmationService.confirm({
      message: 'Are you sure that you want to Cancel?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      key: 'tandc',
      accept: () => {
          this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'You have cancelled'}];
          this._router.navigate(['home/product']);

      },
      reject: () => {
          this.msgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
          this._router.navigate(['home/cart']);

      }
  });
  }

}

