import { Component } from '@angular/core';

@Component({
  template: `<h2 class="alert alert-success">Welcome to Article Home</h2>
   <p class="alert alert-warning" style="font-size: larger;">Find article <a routerLink="list" routerLinkActive="active">list</a></p>
	<div [ngClass] = "'child-container'">	
	  <router-outlet></router-outlet>	
	</div>
  `
})
export class ArticleComponent { 
}
    