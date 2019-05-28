import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CropCommoditiesComponent } from './crop-commodities/crop-commodities.component';

// import { BTComponent } from './crop-commodities/bt/bt.component';
// import { NTComponent } from './crop-commodities/nt/nt.component';
// import { FruitComponent } from './crop-commodities/nt/fruit/fruit.component';
// import { HerbsandspicesComponent } from './crop-commodities/nt/herbsandspices/herbsandspices.component';
// import { NutsandseedsComponent } from './crop-commodities/nt/nutsandseeds/nutsandseeds.component';
// import { VegetablesComponent } from './crop-commodities/nt/vegetables/vegetables.component';
// import { ProcessingcropComponent } from './crop-commodities/nt/processingcrop/processingcrop.component';
// import { FoodscropsComponent } from './crop-commodities/nt/foodscrops/foodscrops.component';
// import { StalkandstemcropComponent } from './crop-commodities/nt/stalkandstemcrop/stalkandstemcrop.component';
// import { RtComponent } from './crop-commodities/nt/vegetables/rt/rt.component';
// import { UfComponent } from './crop-commodities/nt/vegetables/uf/uf.component';
// import { BtChildComponent } from './crop-commodities/nt/vegetables/bt-child/bt-child.component';
// import { NtChildComponent } from './crop-commodities/nt/vegetables/nt-child/nt-child.component';
// import { GrassesComponent } from './crop-commodities/nt/grasses/grasses.component';
// import { VegetableswithoutsauceComponent } from './crop-commodities/nt/vegetables/nt-child/vegetableswithoutsauce/vegetableswithoutsauce.component';
// import { VegetableswithsauceComponent } from './crop-commodities/nt/vegetables/nt-child/vegetableswithsauce/vegetableswithsauce.component';
// import { VegetablesprimarilyComponent } from './crop-commodities/nt/vegetables/nt-child/vegetablesprimarily/vegetablesprimarily.component';
// import { SeaweedComponent } from './crop-commodities/nt/vegetables/nt-child/seaweed/seaweed.component';
// import { LettuceComponent } from './crop-commodities/nt/vegetables/nt-child/lettuce/lettuce.component';
// import { VegetablejuiceComponent } from './crop-commodities/nt/vegetables/nt-child/vegetablejuice/vegetablejuice.component';

@NgModule({
  declarations: [
    AppComponent,
    CropCommoditiesComponent,
    // BTComponent,
    // NTComponent,
    // FruitComponent,
    // HerbsandspicesComponent,
    // NutsandseedsComponent,
    // VegetablesComponent,
    // ProcessingcropComponent,
    // FoodscropsComponent,
    // StalkandstemcropComponent,
    // RtComponent,
    // UfComponent,
    // BtChildComponent,
    // NtChildComponent,
    // GrassesComponent,
    // VegetableswithoutsauceComponent,
    // VegetableswithsauceComponent,
    // VegetablesprimarilyComponent,
    // SeaweedComponent,
    // LettuceComponent,
    // VegetablejuiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
