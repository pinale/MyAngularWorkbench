import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request-counter',
  templateUrl: './request-counter.component.html',
  styleUrls: ['./request-counter.component.css']
})
export class RequestCounterComponent implements OnInit {

  counter : number = 0;
  constructor() { }

  ngOnInit() {
  }

  //@Input()
  incrementCounter() : void
  {
    this.counter++
  }

  @Input()
  resetCounter() : void
  {
    this.counter = 0;
  }
}
