import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
})
export class StoreFormComponent implements OnInit {

  constructor(private builder : FormBuilder,private service : UserService, private _router:Router) { }

  ngOnInit(): void {
  }
  userForm : FormGroup = this.builder.group({
    id:[''],
    name : ['',[Validators.required,Validators.minLength(2), Validators.maxLength(10)]],
    gender :['',[Validators.required]],
    phone:['',[Validators.required]],
    email:['',[Validators.required]],
    address: this.builder.group({
      state:['',[Validators.required]],
      city:['',[Validators.required]],
      pin:['',[Validators.required]]
    })
  });
  
  saveForm(){
    this.service.save(this.userForm.value)
    this._router.navigate(["success",this.userForm.value.id]);
    console.log(this.userForm.value)
  }
  clear(){
    this.service.save({})
  }
}
