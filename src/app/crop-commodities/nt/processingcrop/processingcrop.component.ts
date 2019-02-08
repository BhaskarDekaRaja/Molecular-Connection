import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processingcrop',
  templateUrl: './processingcrop.component.html',
  styleUrls: ['./processingcrop.component.css']
})
export class ProcessingcropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show = false;

  toggle(){
    this.show = !this.show;
    }
}
