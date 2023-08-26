import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  subscription: Subscription = null;
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  outputStreamData = [];
  isComponentAlive: boolean;
  isStreamStarted: boolean;

  constructor() {}

  ngOnInit() {
    this.isComponentAlive = true;
  }

  startStream() {
    this.isComponentAlive = true;
    this.isStreamStarted = true;
    const streamSource = interval(1500);
    const secondStreamSource = interval(3000);
    const fastestStreamSource = interval(500);
    streamSource.pipe(
      takeWhile(() => !!this.isComponentAlive)
    ).subscribe((input) => {
      this.outputStreamData.push(input);
    });
    secondStreamSource.pipe(
      takeWhile(() => !!this.isComponentAlive)
    ).subscribe(input => {
      this.outputStreamData.push(input);
      console.log(`second stream output: ${input}`);
    });
    fastestStreamSource.pipe(
      takeWhile(() => !!this.isComponentAlive)
    ).subscribe(input => {
      this.outputStreamData.push(input);
      console.log(`fastest stream output: ${input}`);
    })
  }

  stopStream() {
    this.isComponentAlive = false;
    this.isStreamStarted = false;
  }
}
