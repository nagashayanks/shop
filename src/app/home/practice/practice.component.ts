import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  submit = () => {
    this.router.navigate(['home/payment']);
  }
}
