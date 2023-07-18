import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService } from 'src/services/notifications.service';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss']
})
export class NotificationsButtonComponent implements OnInit {
  notificationsCount$: Observable<number>;
  constructor(private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationService.count$;
  }

}
