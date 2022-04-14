import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userArray : any[] = [

    {id:100, name : 'Alex', dob : '1998-11-28'},
    {id:102, name : 'Bruce', dob : '1998-12-30'},
    {id:103, name : 'Chris', dob : '1998-09-28'},
    {id:104, name : 'Dan', dob : '1998-05-28'},
    {id:105, name : 'Eric', dob : '1998-07-28'},

  ]
  constructor() { }
  getUsers(){
    return this.userArray
  }
}
