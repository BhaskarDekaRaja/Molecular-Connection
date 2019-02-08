import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seaweed',
  templateUrl: './seaweed.component.html',
  styleUrls: ['./seaweed.component.css']
})
export class SeaweedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show = false;

  toggle(){
    this.show = !this.show;
    }
    
}
