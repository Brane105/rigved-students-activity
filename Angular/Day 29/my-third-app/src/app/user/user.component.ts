import { Component } from "@angular/core";

@Component ({
    selector : 'user-app',
    templateUrl :'./user.component.html'
}) 
export class UserComponent {
    name : string = "Lucifer"
    age : number = 1000
    demonNumber : number = 666
    nickName : string = "Satan"
}