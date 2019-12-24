import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectedItems = [];
  cartCount = 0;
  cartAmount = 0;
  counts = new Subject();
  constructor() { }
}
