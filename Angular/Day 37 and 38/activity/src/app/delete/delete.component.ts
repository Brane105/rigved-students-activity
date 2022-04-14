import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  id: FormControl = new FormControl('');
  deleteUser() {
    this.service.delete(this.id.value);
  }
}
