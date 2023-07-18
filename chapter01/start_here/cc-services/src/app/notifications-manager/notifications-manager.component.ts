import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { NotificationsService } from 'src/services/notifications.service';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount$: Observable<number>;
  constructor(private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationService.count$;
  }

  addNotification() {
    this.getCountValue(v => {
      this.notificationService.setCount(++v);
    });
  }

  removeNotification() {
    this.getCountValue(v => {
      if(v === 0){
        return;
      }
      this.notificationService.setCount(--v);
    });
  }

  resetCount() {
    this.notificationService.setCount(0);
  }

  private getCountValue(callback){
    this.notificationsCount$
    .pipe(
      first()
    ).subscribe(callback);
  }

}
