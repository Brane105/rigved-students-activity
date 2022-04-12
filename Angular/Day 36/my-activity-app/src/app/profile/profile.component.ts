import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    name: new FormGroup({
      first: new FormControl('', Validators.minLength(3)),
      last: new FormControl('', Validators.minLength(3))
    }),
    address: new FormGroup({
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      pin: new FormControl('', Validators.minLength(6))
    })
  });

  get first(): any {
    return this.form.get('name.first');
  }
  get last(): any {
    return this.form.get('name.last');
  }
  get name(): any {
    return this.form.get('name');
  }
  get address(): any {
    return this.form.get('address');
  }
  onSubmit() {
    console.log(this.form.value);
    console.log(this.form.status); 
  }
  setPreset() {
    this.name.setValue({first: 'Bess', last: 'Marvin'});
  }
}

 





