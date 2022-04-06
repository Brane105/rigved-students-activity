import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  students = [{rollNo:1, name: "Ajay", marks: 40},{rollNo:2, name: "Vijay", marks: 30},{rollNo:3, name: "Manu", marks: 60},{rollNo:4, name: "Sachin", marks: 20},{rollNo:5, name: "Amit", marks: 70},{rollNo:6, name: "Zaheer", marks: 80}]
  apply:boolean = false;
  applycss(){
    this.apply = !this.apply
  }
}
