import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [MessageService]

})
export class PaymentComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router, private messageService: MessageService, private _cartService: CartService) { }
  captcha: string;
  captchaVal: string;
  amount = 0;
/**
 * method to generate captcha
 */
  generateCaptcha = () => {
    const alphabets = ['a', 'b', 'c', 'd'
      , 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
      'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const c = Math.floor(Math.random() * 10);
    const d = Math.floor(Math.random() * 10);
    const e = Math.floor(Math.random() * 10);
    return a + '' + alphabets[b] + '' + alphabets[c] + '' + d + '' + e;
  }
/**
 * method to refresh the captcha
 */
  refresh = () => {
    this.captcha = this.generateCaptcha();
  }

/**
 * method to payment
 */
  pay = () => {
    if (this.captcha === this.captchaVal) {
      this.messageService.add({ severity: 'info', summary: 'Order Placed Successfully, Your order will be delivered to your address' });
      this._cartService.selectedItems = [];
      this._cartService.cartCount = 0;

      setTimeout(() => {
        this._cartService.counts.next(-1);
        this._router.navigate(['home/product']);
      }, 5000);


    } else {

      this.messageService.add({ severity: 'error', summary: 'Invalid Captcha...Please Re-enter..!' });
      this.captchaVal = '';
      this.generateCaptcha();
    }
  }

  ngOnInit() {
    this.amount = this._cartService.cartAmount;
    this.captcha = this.generateCaptcha();
  }
}
