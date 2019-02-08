import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetableswithoutsauce',
  templateUrl: './vegetableswithoutsauce.component.html',
  styleUrls: ['./vegetableswithoutsauce.component.css']
})
export class VegetableswithoutsauceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show = false;

  toggle(){
    this.show = !this.show;
    }
    
}
