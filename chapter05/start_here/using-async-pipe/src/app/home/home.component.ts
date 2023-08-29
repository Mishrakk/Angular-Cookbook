import { Component, OnInit } from '@angular/core';
import { Observable, merge } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isComponentAlive: boolean;
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  streamsOutput$: Observable<number[]>;
  outputStreamData = [];

  constructor() { }

  ngOnInit() {
    this.startStream();
  }

  startStream() {
    this.isComponentAlive = true;
    const streamSource = interval(1500);
    const secondStreamSource = interval(3000);
    const fastestStreamSource = interval(500);
    this.streamsOutput$ = merge(
      streamSource,
      secondStreamSource,
      fastestStreamSource
    ).pipe(
      takeWhile(() => !!this.isComponentAlive),
      tap(output => console.log(output)),
      map(output => {
        this.outputStreamData = [...this.outputStreamData, output];
        return this.outputStreamData;
      })
    )
  }

}
