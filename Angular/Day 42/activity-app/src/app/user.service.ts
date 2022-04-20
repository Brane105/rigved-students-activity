import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl : string = "http://localhost:8080/player";
  constructor(private _http: HttpClient) { }

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
