import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count = 0;
  // tslint:disable-next-line: variable-name
  constructor(private _service: CartService) { }


  ngOnInit() {
    this._service.counts.subscribe((resp) => {
      // tslint:disable-next-line: triple-equals
      if (resp == true) {
        this.count++;
      } else if (resp === false) {
        this.count--;
      } else if (resp === -1) {
        this.count = 0;
      }



    });
  }

}
