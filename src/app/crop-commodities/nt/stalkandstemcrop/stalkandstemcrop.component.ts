import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stalkandstemcrop',
  templateUrl: './stalkandstemcrop.component.html',
  styleUrls: ['./stalkandstemcrop.component.css']
})
export class StalkandstemcropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show = false;

  toggle(){
    this.show = !this.show;
    }
}
