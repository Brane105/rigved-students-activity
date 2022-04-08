import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})
export class FormAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formSubmit(formValue : any):void {
    console.log(formValue)
  }
}
