import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crop-commodities',
  templateUrl: './crop-commodities.component.html',
  styleUrls: ['./crop-commodities.component.css']
})
export class CropCommoditiesComponent implements OnInit {

  constructor(private http:HttpClient) 
  { 
    this.getJsonLevel1().subscribe(
      result=>{
       this.commodities.push(result);
      //  console.log(this.commodities[0].children[0].child)
      console.log(this.commodities[0].child)
      }
    );

    this.getJsonlevel2().subscribe(
      result =>{
        this.relation.push(result);
        // console.log(this.relation[0].child);
      }
    )
  }

  ngOnInit() {
  }
  
show = false;

  toggle(){
    this.show = !this.show;
    }

    commodities = [];
    relation = [];
    // dispaly = false;
  
    openCommodities(arg0){
      this.commodities[arg0].child = !this.commodities[arg0].child;
      
     }
  
     openChildren(arg0,arg1){
    this.commodities[arg0].children[arg1].child = !this.commodities[arg0].children[arg1].child
     }
  
     openChild(arg0){
       this.relation[arg0].child = !this.relation[arg0].child;
      //  console.log(arg0) 
     }

    getJsonLevel1(){
      return this.http.get("../assets/level1.json");
     }
   
     getJsonlevel2(){
       return this.http.get("../assets/level2.json");
     }
}
