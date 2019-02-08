import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodscrops',
  templateUrl: './foodscrops.component.html',
  styleUrls: ['./foodscrops.component.css']
})
export class FoodscropsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show = false;

  toggle(){
    this.show = !this.show;
    }
    

}
