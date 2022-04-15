import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _builder : FormBuilder, private _router : Router, public service: UserService) { }

  ngOnInit(): void {
  }

  userForm = this._builder.group({
   userId:[''], name: [''], password: [''], phone: ['']
  });
  
  handleRegister() {
    this.service.save(this.userForm.value); 
    this._router.navigate(["/login"]);
    alert('Name registered is '+this.userForm.value.name);
  }
}
