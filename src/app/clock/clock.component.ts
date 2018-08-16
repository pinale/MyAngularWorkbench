import { map, share } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  //private clock:  Observable<Date>
  private clockSubscription: Subscription;
  time: Date;

  constructor() { }

  ngOnInit() {

    this.clockSubscription =  interval(1000).pipe(
      map(tick => new Date()),
      share()
    ).subscribe(time => this.time = time);
    
  }

  ngOnDestroy(){
    this.clockSubscription.unsubscribe();
  }

}
