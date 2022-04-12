import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  checkForm : any;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.checkForm = this.formBuilder.group({
      first: ['',[Validators.required,Validators.minLength(2), Validators.maxLength(10)]],
      last: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(10)]],
      address: this.formBuilder.group({
          state: ['' ,[Validators.required]],
          city: ['',[Validators.required]],
          pin: ['',[Validators.required]]
    })
  });
  }
  onSubmit(){
    console.log(this.checkForm.value)
  }
}
