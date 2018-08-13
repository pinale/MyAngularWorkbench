import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rowcounter',
  templateUrl: './rowcounter.component.html',
  styleUrls: ['./rowcounter.component.css']
})
export class RowcounterComponent implements OnInit {

  @Input() rows : number = 0;

  constructor() { }

  //rows: number = 0;

  ngOnInit() {
  }

}
