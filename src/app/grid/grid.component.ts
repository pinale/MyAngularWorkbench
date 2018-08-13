import { DataService } from './../Services/data.service';
import { User, IPayload } from './../shared/viewmodels';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  data$ : Observable<User[]>;

  //@Output() change: EventEmitter<number> = new EventEmitter<number>();
  @Output() change: EventEmitter<IPayload> = new EventEmitter<IPayload>();

  localpayload: IPayload =  { rows : 0 , kb : 0, time: 0};
  
  constructor(public _ds : DataService) {  
  }

  ngOnInit() {
    //this.data$ = this._ds.getData();
  }


  loadData()
  {
    this.data$ = this._ds.getData();
    
    this.localpayload = { rows : 10 , kb : 300, time: 120};
    
    //this.change.emit(99);
    this.change.emit(this.localpayload);
  }

  resetData()
  {

    this.data$ = EMPTY;  //emette un observable vuoto, da solo il segnale di complete, no il next  // this._ds.getData();
    
    //this.change.emit(0);
    this.change.emit(this.localpayload);
  }
}
