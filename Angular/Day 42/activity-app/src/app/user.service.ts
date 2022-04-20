import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userArray: any[]=[
    {name:'Lucifer',password:'123',data:[]}
  ]

  obj:any | undefined=undefined
  name:any | undefined=undefined
  password: any | undefined=undefined

  public getUser(): any[]{
    return this.userArray
  }

  baseUrl : string = "http://localhost:8080/player";
  constructor(private _http: HttpClient) { }

  public saveUser(obj:any):any{
    console.log('done')
    let object={name:obj.name,password:obj.password,data:[]}
    this.userArray.push(object);
  }
  
  public show(nam:any,pass:any){
    for(let i=0; i<this.userArray.length; i++){
      if(this.userArray[i].name===nam && this.userArray[i].password===pass){
        return this.userArray[i].data;
      }
    }
  }

  //find all users
  public getUsers() : Observable<any> {
    return this._http.get(this.baseUrl);
  }
  //store user which will have { _id, name, age }
  public storeUser(formValue: any): Observable<any> {
    return this._http.post(this.baseUrl, formValue);
  }
  public findUser(id:any):Observable<any>{
    return this._http.get(this.baseUrl+'/'+id)
  }

  public deleteUser(id:any):Observable<any>{
    return this._http.delete(this.baseUrl+'/'+id)
  }

  public updateUser(id:any,age:any,data:any):Observable<any>{
    return this._http.put(this.baseUrl+'/'+id+'/'+age,data)
  }
}
