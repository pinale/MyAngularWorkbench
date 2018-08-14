import { DataService } from './../Services/data.service';
import { User, IPayload } from './../shared/viewmodels';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() data$ : Observable<User[]>;
  @Output() loadDataSignal: EventEmitter<void> = new EventEmitter<void>();
  @Output() resetDataSignal: EventEmitter<void> = new EventEmitter<void>();

  localpayload: IPayload =  { rows : 0 , kb : 0, time: 0};
  
  constructor(public _ds : DataService) {  
  }

  ngOnInit() {
  }
  
  loadData()
  {
    //this.data$ = this._ds.getData();
    //this.localpayload = { rows : 10 , kb : 300, time: 120};
    //this.change.emit(this.localpayload);
    this.loadDataSignal.emit();
  }

  resetData()
  {
    //this.data$ = EMPTY;  //emette un observable vuoto, da solo il segnale di complete, no il next  // this._ds.getData();
    
    this.resetDataSignal.emit();
    //this.change.emit(this.localpayload);
  }
  
}
