import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MapquestDirectionsComponent } from './components/mapquest-directions/mapquest-directions.component';
import { MapquestService } from './services/mapquest.service';



@NgModule({
  declarations: [
    AppComponent,
    MapquestDirectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MapquestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
