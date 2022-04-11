import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-firstname',
  templateUrl: './firstname.component.html',
  styleUrls: ['./firstname.component.css']
})
export class FirstnameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstname = new FormControl(' ');
}
