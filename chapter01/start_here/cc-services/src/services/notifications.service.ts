import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private count = new BehaviorSubject<number>(0);
  count$ = this.count.asObservable();

  constructor() { }

  setCount(newCountValue){
    this.count.next(newCountValue);
  }
}
