import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IReleaseLog, ReleaseLog } from 'src/app/classes/release-log';
import { Apps } from 'src/app/constants/apps';

@Component({
  selector: 'app-release-form',
  templateUrl: './release-form.component.html',
  styleUrls: ['./release-form.component.scss']
})
export class ReleaseFormComponent implements OnInit {
  @Output() newReleaseLog = new EventEmitter<ReleaseLog>();
  apps = Object.values(Apps);
  newLog: IReleaseLog = {
    app: Apps.CALENDAR,
    version: '0.0.0',
  }

  constructor() { }

  ngOnInit(): void {
  }

  formSubmit(form: NgForm) : void {
    const { app, version } = form.value;
    const newLog = new ReleaseLog(app, version);
    this.newReleaseLog.emit(newLog);
  }

}
