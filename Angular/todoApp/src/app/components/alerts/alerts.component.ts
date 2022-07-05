import { Component, Input, OnInit } from '@angular/core';
import { Alert } from 'src/app/interfaces/alert.interface';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  @Input() alert: Alert | any;

  constructor() {

  }

  ngOnInit(): void {
    if (this.alert === undefined) {
      this.alert = {
        text: "",
        type: "",
        status: false
      }
    }
  }

  ngOnChanges(): void {
    if (this.alert !== undefined) setTimeout(() => { this.closeAlert() }, 3000)
  }

  closeAlert() {
    this.alert.status = false;
  }

}
