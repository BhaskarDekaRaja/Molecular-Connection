import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetablejuice',
  templateUrl: './vegetablejuice.component.html',
  styleUrls: ['./vegetablejuice.component.css']
})
export class VegetablejuiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show = false;

  toggle(){
    this.show = !this.show;
    }
    
}
