import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crop-commodities',
  templateUrl: './crop-commodities.component.html',
  styleUrls: ['./crop-commodities.component.css']
})
export class CropCommoditiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
show = false;

  toggle(){
    this.show = !this.show;
    }
}
