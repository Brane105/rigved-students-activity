import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  items : undefined | any[] = undefined;

  constructor(public service : UserService) { }

  // this is automatically called after the constructor
  ngOnInit(): void {
    this.items = this.service.getUsers();
  }
  
}
