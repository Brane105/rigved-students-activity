import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  constructor(private service: UserService, private _router : Router) { }

  ngOnInit(): void {
  }
  id: FormControl = new FormControl('');
  deleteUser() {
    this.service.delete(this.id.value);
    this._router.navigate(["usersList"]);
  }
}
