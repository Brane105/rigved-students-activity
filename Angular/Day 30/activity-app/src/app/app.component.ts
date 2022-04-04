import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'activity-app';
  employee  = {
    id: 100, name : 'Lucifer', salary : 35200
  }
}
