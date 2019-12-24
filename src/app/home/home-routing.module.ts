import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  {
          path: 'product', component: ProductComponent
        },
        {
          path: 'payment', component: PaymentComponent
        },
        {
          path: 'cart', component: CartComponent
        },
        {
          path: 'practice', component: PracticeComponent
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
