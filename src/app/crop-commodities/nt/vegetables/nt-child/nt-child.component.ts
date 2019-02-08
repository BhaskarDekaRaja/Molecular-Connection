import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nt-child',
  templateUrl: './nt-child.component.html',
  styleUrls: ['./nt-child.component.css']
})
export class NtChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show = false;

  toggle(){
    this.show = !this.show;
    }
    
}
