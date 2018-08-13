import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RequestCounterComponent } from './request-counter/request-counter.component';
import { StatComponent } from './stat/stat.component';
import { GridComponent } from './grid/grid.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RowcounterComponent } from './rowcounter/rowcounter.component';
import { PayloadcounterComponent } from './payloadcounter/payloadcounter.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestCounterComponent,
    StatComponent,
    GridComponent,
    PaginationComponent,
    RowcounterComponent,
    PayloadcounterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
