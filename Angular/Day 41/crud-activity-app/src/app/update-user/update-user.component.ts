import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }
  data:any|undefined=undefined
  users:any | undefined=undefined
  id=new FormControl('');
  salary=new FormControl('');

  handleUpdate(){
    let id=this.id.value;
    let salary=this.salary.value;
    this._service.updateUser(id,salary,this.data).subscribe((data)=>{
      this.users=data
    })
  }

}