import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetableswithsauce',
  templateUrl: './vegetableswithsauce.component.html',
  styleUrls: ['./vegetableswithsauce.component.css']
})
export class VegetableswithsauceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show = false;

  toggle(){
    this.show = !this.show;
    }
    
}
