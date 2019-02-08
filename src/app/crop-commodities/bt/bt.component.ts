import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt',
  templateUrl: './bt.component.html',
  styleUrls: ['./bt.component.css']
})
export class BTComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show = false;

  toggle(){
    this.show = !this.show;
    }
}
