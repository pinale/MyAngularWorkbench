import { Observable, EMPTY } from 'rxjs';
import { IPayload, User } from './shared/viewmodels';
import { RequestCounterComponent } from './request-counter/request-counter.component';
import { PayloadcounterComponent } from './payloadcounter/payloadcounter.component';
import { Component, ViewChild } from '@angular/core';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyWorkbench';

  @ViewChild(RequestCounterComponent) _reqCounter: RequestCounterComponent;
  @ViewChild(PayloadcounterComponent) _payloadCounter: PayloadcounterComponent;
  
  localrows : number = 0;
  localPayload: IPayload = { rows : 0 , kb : 0, time: 0};

  data$ : Observable<User[]>;
  
  constructor(public _ds : DataService) {  
  }

  loadData(xxxx : any) { 

    this.data$ = this._ds.getData();

    this._reqCounter.incrementCounter();  //cosi non riesco a distinguere tra increment e reset - refactor this
    this.localrows = 8;//_payload.rows;
    //this.localPayload = _payload;
  }

  resetData(xxxx : any) { 

    this.data$ = EMPTY;  //emette un observable vuoto, da solo il segnale di complete, no il next  // this._ds.getData();

    this._reqCounter.resetCounter();  
    this._payloadCounter.resetStatistics();
  }
}
