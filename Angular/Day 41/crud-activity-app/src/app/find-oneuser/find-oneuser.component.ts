import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-find-oneuser',
  templateUrl: './find-oneuser.component.html',
  styleUrls: ['./find-oneuser.component.css']
})
export class FindOneuserComponent implements OnInit {

  constructor(private _service:UserService) { }

  ngOnInit(): void {
  }
  users: any | undefined=undefined

  _id=new FormControl('')
  handleGet(id:number){
    console.log(id)
    this._service.findUser(id).subscribe((data)=>{
      this.users=data;
    })
  }

}