import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
  <h1 class="header">Article Wiki</h1>
	<div [ngClass] = "'parent-container'">	
	  <router-outlet></router-outlet>	
	</div>
  </div>
  `
})
export class AppComponent { 
}
    