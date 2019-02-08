import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rt',
  templateUrl: './rt.component.html',
  styleUrls: ['./rt.component.css']
})
export class RtComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show = false;

  toggle(){
    this.show = !this.show;
    }
    
}
