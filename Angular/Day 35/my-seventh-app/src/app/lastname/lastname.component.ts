import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-lastname',
  templateUrl: './lastname.component.html',
  styleUrls: ['./lastname.component.css']
})
export class LastnameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lastname = new FormControl(' ');
}
