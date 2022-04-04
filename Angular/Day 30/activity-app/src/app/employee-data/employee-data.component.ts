import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   employees = [
    {name : "Alex", gender : "male", address: {state: "KA", city : "BLR"}},
    {name : "Jennifer", gender : "female", address: {state: "MH", city : "MBI"}},
    {name : "Lilith", gender : "female", address : {state : "TN", city : "CHN"}},
    {name : "Bruce", gender : "male", address: {state: "MH", city : "MBI"}},
    {name : "Chris", gender : "male", address : {state : "TN", city : "CHN"}}
    ];
    
}
