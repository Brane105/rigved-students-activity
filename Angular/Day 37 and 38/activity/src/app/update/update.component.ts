import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl,FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  object:any | undefined=undefined
  constructor(private builder : FormBuilder, private service : UserService) { }

  
  id:FormControl=new FormControl('')
  

  userForm: FormGroup = this.builder.group({
    id:['',Validators.required],
    name:['', Validators.required],
    gender:['', Validators.required],
    phone:['',Validators.compose([Validators.minLength(10),Validators.required,Validators.maxLength(10)])],
    email:['', Validators.required],
    address:this.builder.group({
      state:['', Validators.required],
      city:['', Validators.required],
      pin:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(6)])]
    })
  })

  setProfileValue(){
    this.userForm.controls['id'].setValue(this.object.profileId);
    this.userForm.controls['name'].setValue(this.object.name);
    this.userForm.controls['gender'].setValue(this.object.gender);
    this.userForm.controls['phone'].setValue(this.object.phone);
    this.userForm.controls['email'].setValue(this.object.email);
    this.userForm.controls['address'].get('state')?.setValue(this.object.address.state);
    this.userForm.controls['address'].get('city')?.setValue(this.object.address.city);
    this.userForm.controls['address'].get('pin')?.setValue(this.object.address.pin);
  }
  
  updateForm(){
    console.log(this.userForm.value)
    this.service.updateform(this.userForm.value)
  }

  getInfo(){
    this.object=this.service.update(this.id.value)
    console.log(this.object)
  }

  ngOnInit(): void {
    
  }

}
