import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  firstname: string ='';
  lastname:string='';
  gender:string='';
  skills:string='';
  qualification:string='';
  address:string='';

  formSubmit(formValue: any):void{
    console.log(formValue);
    this.firstname=formValue.firstname;
    this.lastname=formValue.lastname;
    this.gender=formValue.gender;
    this.skills=formValue.skills;
    this.qualification=formValue.Qualification;
    this.address=formValue.address;
  }
}
