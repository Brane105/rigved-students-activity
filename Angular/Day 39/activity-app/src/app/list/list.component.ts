import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items : undefined | any[] = undefined;

  constructor(public service : UserService) { }

  // this is automatically called after the constructor
  ngOnInit(): void {
    this.items = this.service.getUsers();
  }

}
