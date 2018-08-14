import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User, IPayload } from '../shared/viewmodels';

@Component({
  selector: 'app-payloadcounter',
  templateUrl: './payloadcounter.component.html',
  styleUrls: ['./payloadcounter.component.css']
})
export class PayloadcounterComponent implements OnInit {
  
  totalPayload: IPayload = { rows: 0, kb: 0, time: 0};
  
  //@Input('localPayload') set computePayload(pl: IPayload) {  //usato un setter per mettere un po di logica alla proprietà di input
  @Input('currentPayload') set computePayload(_currentPayload: Observable<User[]>) {  //usato un setter per mettere un po di logica alla proprietà di input

      _currentPayload.subscribe(x=> {
        this.totalPayload.rows += x.length;
        this.totalPayload.kb += 1;//x.kb;
        this.totalPayload.time += 1;//x.time; 
      });
  }

  resetStatistics() {
      this.totalPayload = { rows: 0, kb: 0, time: 0};
  }
   
  constructor() { }

  ngOnInit() {
  }

}
