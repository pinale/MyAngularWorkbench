import { IPayload } from './shared/viewmodels';
import { RequestCounterComponent } from './request-counter/request-counter.component';
import { Component, ViewChild } from '@angular/core';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyWorkbench';

  @ViewChild(RequestCounterComponent) _reqCounter: RequestCounterComponent;
  
  localrows : number = 0;
  localPayload: IPayload = { rows : 0 , kb : 0, time: 0};

  
  BroadcastToComponent(_payload : IPayload) { 
    this._reqCounter.incrementCounter();  //cosi non riesco a distinguere tra increment e reset - refactor this
    this.localrows = _payload.rows;
    this.localPayload = _payload;
  }
}
