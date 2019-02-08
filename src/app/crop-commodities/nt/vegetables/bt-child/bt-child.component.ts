import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-child',
  templateUrl: './bt-child.component.html',
  styleUrls: ['./bt-child.component.css']
})
export class BtChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show = false;

  toggle(){
    this.show = !this.show;
    }
}
