import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/viewmodels';

@Component({
  selector: 'app-rowcounter',
  templateUrl: './rowcounter.component.html',
  styleUrls: ['./rowcounter.component.css']
})
export class RowcounterComponent implements OnInit {

  //@Input() rows : number = 0;
  @Input() data$ : Observable<User[]>

  constructor() { }

  ngOnInit() {
  }

}
