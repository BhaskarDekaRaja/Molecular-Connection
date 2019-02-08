import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herbsandspices',
  templateUrl: './herbsandspices.component.html',
  styleUrls: ['./herbsandspices.component.css']
})
export class HerbsandspicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show = false;

  toggle(){
    this.show = !this.show;
    }
}
