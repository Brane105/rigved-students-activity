import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstname : string | undefined = undefined
  lastname : string | undefined = undefined
  save(firstName : string, lastName: string): void {
    this.firstname = firstName
    this.lastname = lastName
  }
  
}
