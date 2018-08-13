import { Component, OnInit, Input } from '@angular/core';
import { IPayload } from '../shared/viewmodels';

@Component({
  selector: 'app-payloadcounter',
  templateUrl: './payloadcounter.component.html',
  styleUrls: ['./payloadcounter.component.css']
})
export class PayloadcounterComponent implements OnInit {
  
  localPayload: IPayload = { rows: 0, kb: 0, time: 0};
  @Input('localPayload') set computePayload(pl: IPayload) {  //usato un setter per mettere un po di logica alla proprietà di input
      
    this.localPayload.rows += pl.rows;
      this.localPayload.kb += pl.kb;
      this.localPayload.time += pl.time; 
  }

   
  constructor() { }

  ngOnInit() {
  }

}
