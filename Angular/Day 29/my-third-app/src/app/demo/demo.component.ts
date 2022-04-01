import { Component } from "@angular/core";

@Component ({
    selector : 'demo',
    template :` <div>
    <h2> this is Template DemoComponent</h2>
    <p>the First killer of Human history is {{name}}</p>
    <p>Last Words after cain killed his brother Abel " "My punishment is more than I can bear. Today you are driving me from the land, and I will be hidden from your presence; I will be a restless wanderer on the earth, and whoever finds me will kill me." </p>
    </div>
    `
})
    export class DemoComponent{
        name : string = "Cain"
    }