import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private _service:UserService, private _rout:Router) { }

  ngOnInit(): void {
  }

  register:FormGroup=this.fb.group({
    name:['',Validators.required],
    password:['',Validators.required]
  })

  handleRegister(){
    this._service.saveUser(this.register.value);
    this._rout.navigate([""]);
  }


}