import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userArray : any[] =[];
  constructor() { }
  public getUsers() : any[]{
    return this.userArray;
  }
  public save(obj : any):void {
    const lastElement = this.userArray[this.userArray.length - 1];
    if(lastElement !== undefined){
       obj.id = lastElement.id+1;
    }
    else{
       obj.id = 1;
    }
    this.userArray.push(obj);
  }

  public delete(id: number) : void {
    for(let i = 0; i < this.userArray.length; i++) {
      let user = this.userArray[i];
      if(user.id == id) {
        this.userArray.splice(i,1);
      }
    }
  }
  public update(id:number):any{
    for(let i=0; i< this.userArray.length; i++){
      let user=this.userArray[i];
      if(user.id==id){
        return this.userArray[i];
      }
    }
  }
  public updateform(obj:any):void{
    for(let i=0; i< this.userArray.length; i++){
      let user=this.userArray[i];
      if(user.id==obj.id){
        user.name=obj.name;
        user.gender=obj.gender;
        user.phone=obj.phone;
        user.email=obj.email;
        user.address.state=obj.address.state;
        user.address.city=obj.address.city;
        user.address.pin=obj.address.pin;
      }
    }
  }
}
