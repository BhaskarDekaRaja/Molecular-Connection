import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetablesprimarily',
  templateUrl: './vegetablesprimarily.component.html',
  styleUrls: ['./vegetablesprimarily.component.css']
})
export class VegetablesprimarilyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show = false;

  toggle(){
    this.show = !this.show;
    }
    
}
