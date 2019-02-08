import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutsandseeds',
  templateUrl: './nutsandseeds.component.html',
  styleUrls: ['./nutsandseeds.component.css']
})
export class NutsandseedsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show = false;

  toggle(){
    this.show = !this.show;
    }
}
